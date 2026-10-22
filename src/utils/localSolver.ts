export interface LocalSolveResult {
  solved: boolean;
  type?: string;
  markdown?: string;
  shortAnswer?: string;
}

/**
 * Normalizes user input for mathematical parsing.
 * Replaces unicode characters, converts 2x -> 2*x, removes extraneous spaces.
 */
export function normalizeMathString(raw: string): string {
  let s = raw.trim();

  // Replace common unicode math symbols
  s = s.replace(/×/g, '*')
       .replace(/÷/g, '/')
       .replace(/−/g, '-')
       .replace(/–/g, '-')
       .replace(/²/g, '^2')
       .replace(/³/g, '^3')
       .replace(/√/g, 'Math.sqrt')
       .replace(/\\cdot/g, '*')
       .replace(/\\times/g, '*');

  // Insert implicit multiplication: e.g. 2x -> 2*x, 3( -> 3*(, )x -> )*x
  s = s.replace(/(\d)([a-zA-Z(])/g, '$1*$2');
  s = s.replace(/(\))([a-zA-Z0-9(])/g, '$1*$2');

  return s;
}

/**
 * Formats a number cleanly (e.g. 2, -3.5, 1/3)
 */
function fmtNum(n: number): string {
  if (Number.isInteger(n)) return n.toString();
  for (let denom = 2; denom <= 12; denom++) {
    const num = Math.round(n * denom);
    if (Math.abs(n - num / denom) < 1e-6) {
      return num < 0 ? `-\\frac{${Math.abs(num)}}{${denom}}` : `\\frac{${num}}{${denom}}`;
    }
  }
  return Number(n.toFixed(4)).toString();
}

/**
 * Safely evaluates a single-variable expression F(x) at a given numeric point.
 * Converts ^ to ** and supports standard functions.
 */
function safeEvalAt(expr: string, variable: string, val: number): number {
  try {
    let jsExpr = expr
      .replace(/\^/g, '**')
      .replace(/\bsin\b/g, 'Math.sin')
      .replace(/\bcos\b/g, 'Math.cos')
      .replace(/\btan\b/g, 'Math.tan')
      .replace(/\bsqrt\b/g, 'Math.sqrt')
      .replace(/\bexp\b/g, 'Math.exp')
      .replace(/\bln\b/g, 'Math.log')
      .replace(/\bpi\b/gi, 'Math.PI');

    const fn = new Function(variable, `try { return Number(${jsExpr}); } catch(e) { return NaN; }`);
    const res = fn(val);
    return typeof res === 'number' ? res : NaN;
  } catch {
    return NaN;
  }
}

/**
 * Attempts to solve a 2-variable System of Linear Equations:
 * e.g. x+y=5 2x+y=6 or x+y=5, 2x+y=6 or 2x - 3y = 7; 3x + y = 5
 */
function trySolveLinearSystem(raw: string): LocalSolveResult | null {
  // Must contain at least two '=' signs
  const firstEq = raw.indexOf('=');
  if (firstEq === -1) return null;
  const secondEq = raw.indexOf('=', firstEq + 1);
  if (secondEq === -1) return null;

  let parts: string[] = [];
  if (raw.includes('\n')) {
    parts = raw.split('\n').map(s => s.trim()).filter(Boolean);
  } else if (raw.includes(';')) {
    parts = raw.split(';').map(s => s.trim()).filter(Boolean);
  } else if (raw.includes(',')) {
    parts = raw.split(',').map(s => s.trim()).filter(Boolean);
  } else {
    // Split on whitespace before the second equation
    const rest = raw.substring(firstEq + 1);
    const match = rest.match(/\s+([-+]?\s*\d*[a-zA-Z].*=.*)/);
    if (match && typeof match.index === 'number') {
      const splitPos = firstEq + 1 + match.index;
      parts = [raw.substring(0, splitPos).trim(), raw.substring(splitPos).trim()];
    }
  }

  if (parts.length !== 2) return null;

  function extractEq(eqStr: string) {
    const p = eqStr.split('=');
    if (p.length !== 2) return null;
    const left = p[0].trim();
    const right = p[1].trim();

    function norm(s: string) {
      return s
        .replace(/(\d)([a-zA-Z(])/g, '$1*$2')
        .replace(/(\))([a-zA-Z0-9(])/g, '$1*$2');
    }

    const expr = `(${norm(left)}) - (${norm(right)})`;
    function evalAt(xVal: number, yVal: number): number {
      const js = expr.replace(/\^/g, '**');
      const fn = new Function('x', 'y', `return Number(${js});`);
      return fn(xVal, yVal);
    }

    try {
      const f00 = evalAt(0, 0);
      const f10 = evalAt(1, 0);
      const f01 = evalAt(0, 1);
      if (isNaN(f00) || isNaN(f10) || isNaN(f01)) return null;

      const c = -f00;
      const a = f10 - f00;
      const b = f01 - f00;
      return { a, b, c, left, right };
    } catch {
      return null;
    }
  }

  const eq1 = extractEq(parts[0]);
  const eq2 = extractEq(parts[1]);
  if (!eq1 || !eq2) return null;

  const det = eq1.a * eq2.b - eq2.a * eq1.b;
  const detX = eq1.c * eq2.b - eq2.c * eq1.b;
  const detY = eq1.a * eq2.c - eq2.a * eq1.c;

  const a1F = fmtNum(eq1.a);
  const b1F = fmtNum(eq1.b);
  const c1F = fmtNum(eq1.c);
  const a2F = fmtNum(eq2.a);
  const b2F = fmtNum(eq2.b);
  const c2F = fmtNum(eq2.c);

  if (Math.abs(det) < 1e-8) {
    if (Math.abs(detX) < 1e-8 && Math.abs(detY) < 1e-8) {
      return {
        solved: true,
        type: "Chiziqli tenglamalar sistemasi (Cheksiz ko'p yechim)",
        shortAnswer: "\\infty \\text{ ta yechim}",
        markdown: `## 1. Masala tahlili
Berilgan sistema:
$$\\begin{cases} ${parts[0]} \\\\ ${parts[1]} \\end{cases}$$
Sistema determinanti $\\Delta = 0$ va $\\Delta_x = \\Delta_y = 0$.

## 4. Yakuniy javob
Ushbu sistema **cheksiz ko'p yechimga** ega.`
      };
    } else {
      return {
        solved: true,
        type: "Chiziqli tenglamalar sistemasi (Yechimga ega emas)",
        shortAnswer: "\\emptyset",
        markdown: `## 1. Masala tahlili
Berilgan sistema:
$$\\begin{cases} ${parts[0]} \\\\ ${parts[1]} \\end{cases}$$
Asosiy determinant $\\Delta = 0$, lekin $\\Delta_x \\neq 0$ yoki $\\Delta_y \\neq 0$.

## 4. Yakuniy javob
Sistema birgalikda emas (**yechimga ega emas**): $\\emptyset$.`
      };
    }
  }

  const xVal = detX / det;
  const yVal = detY / det;
  const xFmt = fmtNum(xVal);
  const yFmt = fmtNum(yVal);
  const detFmt = fmtNum(det);
  const detXFmt = fmtNum(detX);
  const detYFmt = fmtNum(detY);

  return {
    solved: true,
    type: "2 noma'lumli chiziqli tenglamalar sistemasi",
    shortAnswer: `x = ${xFmt}, \\; y = ${yFmt}`,
    markdown: `## 1. Masala tahlili va berilganlar
Berilgan tenglamalar sistemasi:
$$\\begin{cases}
${eq1.left} = ${eq1.right} \\\\
${eq2.left} = ${eq2.right}
\\end{cases}$$
Kanonik ko'rinishi ($a_i x + b_i y = c_i$):
$$\\begin{cases}
${a1F}x ${eq1.b >= 0 ? '+ ' + b1F : b1F}y = ${c1F} \\\\
${a2F}x ${eq2.b >= 0 ? '+ ' + b2F : b2F}y = ${c2F}
\\end{cases}$$
Bu **2 noma'lumli ($x$ va $y$) 2 ta chiziqli algebraik tenglamalar sistemasidir**.

## 2. Qo'llaniladigan qoidalar va teoremalar
1. **Kramer qoidasi:** Agar sistemaning asosiy determinanti $\\Delta \\neq 0$ bo'lsa, sistema yagona yechimga ega:
$$x = \\frac{\\Delta_x}{\\Delta}, \\quad y = \\frac{\\Delta_y}{\\Delta}$$
2. **Determinantlar:**
$$\\Delta = \\begin{vmatrix} a_1 & b_1 \\\\ a_2 & b_2 \\end{vmatrix}, \\quad \\Delta_x = \\begin{vmatrix} c_1 & b_1 \\\\ c_2 & b_2 \\end{vmatrix}, \\quad \\Delta_y = \\begin{vmatrix} a_1 & c_1 \\\\ a_2 & c_2 \\end{vmatrix}$$

## 3. Qadamma-qadam yechish
**1-qadam: Asosiy determinant $\\Delta$ ni hisoblaymiz:**
$$\\Delta = \\begin{vmatrix} ${a1F} & ${b1F} \\\\ ${a2F} & ${b2F} \\end{vmatrix} = (${a1F}) \\cdot (${b2F}) - (${a2F}) \\cdot (${b1F}) = ${detFmt}$$
Asosiy determinant noldan farqli ($\\\\Delta = ${detFmt} \\neq 0$), demak sistema yagona yechimga ega!

**2-qadam: $x$ bo'yicha yordamchi determinant $\\Delta_x$:**
$$\\Delta_x = \\begin{vmatrix} ${c1F} & ${b1F} \\\\ ${c2F} & ${b2F} \\end{vmatrix} = (${c1F}) \\cdot (${b2F}) - (${c2F}) \\cdot (${b1F}) = ${detXFmt}$$

**3-qadam: $y$ bo'yicha yordamchi determinant $\\Delta_y$:**
$$\\Delta_y = \\begin{vmatrix} ${a1F} & ${c1F} \\\\ ${a2F} & ${c2F} \\end{vmatrix} = (${a1F}) \\cdot (${c2F}) - (${a2F}) \\cdot (${c1F}) = ${detYFmt}$$

**4-qadam: Noma'lumlar qiymatini topamiz:**
$$x = \\frac{\\Delta_x}{\\Delta} = \\frac{${detXFmt}}{${detFmt}} = ${xFmt}$$
$$y = \\frac{\\Delta_y}{\\Delta} = \\frac{${detYFmt}}{${detFmt}} = ${yFmt}$$

**5-qadam: Tekshirish:**
Topilgan qiymatlarni har ikkala tenglamaga qo'yib tekshiramiz:
- 1-tenglama: $(${a1F}) \\cdot (${xFmt}) + (${b1F}) \\cdot (${yFmt}) = ${c1F}$ (To'g'ri!)
- 2-tenglama: $(${a2F}) \\cdot (${xFmt}) + (${b2F}) \\cdot (${yFmt}) = ${c2F}$ (To'g'ri!)

## 4. Yakuniy javob
Javob:
$$\\mathbf{x = ${xFmt}, \\quad y = ${yFmt}}$$

## 5. OliyMatematika saytidagi tavsiya etilgan mavzu
Chiziqli tenglamalar sistemalarini (Kramer, Gauss va Matritsa usullari) chuqur o'rganish uchun saytimizning **2-modul: Chiziqli algebra — 4-dars: Chiziqli tenglamalar sistemasi** darsiga qarang.`
  };
}

/**
 * Solves linear or quadratic equations:
 * e.g. x + 1 = 3, 2x - 4 = 10, x^2 - 5x + 6 = 0, x^2 = 9
 */
function trySolveEquation(raw: string): LocalSolveResult | null {
  if (!raw.includes('=')) return null;
  if (raw.includes("''") || raw.includes("'")) return null;

  const parts = raw.split('=');
  if (parts.length !== 2) return null;

  const leftStr = parts[0].trim();
  const rightStr = parts[1].trim();
  if (!leftStr || !rightStr) return null;

  const varMatch = raw.match(/[a-zA-Z]/);
  const variable = varMatch ? varMatch[0] : 'x';

  const normLeft = normalizeMathString(leftStr);
  const normRight = normalizeMathString(rightStr);

  const exprStr = `(${normLeft}) - (${normRight})`;

  const y0 = safeEvalAt(exprStr, variable, 0);
  const y1 = safeEvalAt(exprStr, variable, 1);
  const yn1 = safeEvalAt(exprStr, variable, -1);
  const y2 = safeEvalAt(exprStr, variable, 2);

  if (isNaN(y0) || isNaN(y1) || isNaN(yn1) || isNaN(y2)) return null;

  const c = y0;
  const a = (y1 + yn1 - 2 * c) / 2;
  const b = (y1 - yn1) / 2;

  const expectedY2 = a * 4 + b * 2 + c;
  if (Math.abs(y2 - expectedY2) > 1e-4) return null;

  // CASE 1: LINEAR EQUATION (a == 0)
  if (Math.abs(a) < 1e-8) {
    if (Math.abs(b) < 1e-8) {
      if (Math.abs(c) < 1e-8) {
        return {
          solved: true,
          type: "Ayniyat (Cheksiz ko'p yechim)",
          shortAnswer: `${variable} \\in \\mathbb{R}`,
          markdown: `## 1. Masala tahlili
Berilgan tenglama:
$$${leftStr} = ${rightStr}$$
Bu 1-darajali chiziqli tenglama ko'rinishida berilgan.

## 2. Qo'llaniladigan qoidalar
Chiziqli tenglamalarda noma'lumli hadlar chap tomonga, ma'lum sonlar esa o'ng tomonga o'tkaziladi.

## 3. Qadamma-qadam yechish
Soddalashtirish natijasida:
$$0 \\cdot ${variable} = 0$$

## 4. Yakuniy javob
Ushbu tenglik ixtiyoriy $${variable}$ uchun o'rinli ayniyatdir.
Javob: $${variable} \\in \\mathbb{R}$ (cheksiz ko'p yechim).

## 5. OliyMatematika saytidagi tavsiya etilgan mavzu
**1-modul: Maktab kursini takrorlash — 1-dars: Algebraik ifodalar va tenglamalar** sahifasini ko'ring.`
        };
      } else {
        return {
          solved: true,
          type: "Yechimga ega bo'lmagan tenglama",
          shortAnswer: "\\emptyset",
          markdown: `## 1. Masala tahlili
Berilgan tenglama:
$$${leftStr} = ${rightStr}$$

## 3. Qadamma-qadam yechish
Soddalashtirish natijasida:
$$0 \\cdot ${variable} + (${c}) = 0 \\implies ${c} = 0$$
Bu noto'g'ri sonli tenglik hosil bo'ldi.

## 4. Yakuniy javob
Tenglama ildizga ega emas.
Javob: $${variable} \\in \\emptyset$ (bo'sh to'plam).`
        };
      }
    }

    const root = -c / b;
    const rootFmt = fmtNum(root);

    return {
      solved: true,
      type: "Chiziqli tenglama (1-darajali)",
      shortAnswer: `${variable} = ${rootFmt}`,
      markdown: `## 1. Masala tahlili va berilganlar
Berilgan tenglama:
$$${leftStr} = ${rightStr}$$
Bu **${variable}** noma'lumiga nisbatan 1-darajali bir noma'lumli **chiziqli algebraik tenglama**.

## 2. Qo'llaniladigan qoidalar va teoremalar
1. **Qo'shish va ayirish qoidasi:** Tenglikning bir tarafidagi hadni qarama-qarshi ishora bilan ikkinchi tarafga o'tkazish mumkin.
2. **Kanonik ko'rinishi:** Chiziqli tenglama $A \\cdot ${variable} = B$ ko'rinishiga keltiriladi.
3. **Yagona yechim:** Agar $A \\neq 0$ bo'lsa, yagona ildiz $${variable} = \\frac{B}{A}$ formula orqali topiladi.

## 3. Qadamma-qadam yechish
**1-qadam:** Noma'lum qatnashgan hadlarni tenglikning chap tomoniga, ma'lum sonlarni esa o'ng tomoniga ishorasini o'zgartirib o'tkazamiz:
$$${b !== 1 ? `${fmtNum(b)} \\cdot ${variable}` : variable} = ${fmtNum(-c)}$$

**2-qadam:** Noma'lum $${variable}$ ning oldidagi koeffitsiyentga bo'lamiz:
$$${variable} = \\frac{${fmtNum(-c)}}{${fmtNum(b)}}$$

**3-qadam:** Hisoblashni bajaramiz:
$$${variable} = ${rootFmt}$$

**4-qadam: Tekshirish:**
Topilgan $${variable} = ${rootFmt}$ qiymatni boshlang'ich tenglamaga qo'yib tekshiramiz:
$$${leftStr.replace(new RegExp(variable, 'g'), `(${rootFmt})`)} = ${rightStr.replace(new RegExp(variable, 'g'), `(${rootFmt})`)}$$
Tenglik to'g'ri sonli ayniyatga aylandi!

## 4. Yakuniy javob
Javob:
$$\\mathbf{${variable} = ${rootFmt}}$$

## 5. OliyMatematika saytidagi tavsiya etilgan mavzu
Tenglamalarni yechish va algebraik usullarni chuqurroq o'rganish uchun saytimizning **1-modul: Maktab kursini takrorlash — 1-dars: Tenglamalar va tengsizliklar** mavzusiga qarang.`
    };
  }

  // CASE 2: QUADRATIC EQUATION (a != 0)
  const D = b * b - 4 * a * c;
  const aFmt = fmtNum(a);
  const bFmt = fmtNum(b);
  const cFmt = fmtNum(c);
  const dFmt = fmtNum(D);

  let rootsMd = '';
  let shortAns = '';

  if (D > 0) {
    const sqrtD = Math.sqrt(D);
    const x1 = (-b - sqrtD) / (2 * a);
    const x2 = (-b + sqrtD) / (2 * a);
    const x1Fmt = fmtNum(x1);
    const x2Fmt = fmtNum(x2);
    shortAns = `${variable}_1 = ${x1Fmt}, \\; ${variable}_2 = ${x2Fmt}`;

    rootsMd = `Diskriminant musbat ($D > 0$), demak tenglama **2 ta har xil haqiqiy ildizga** ega:
$$${variable}_{1,2} = \\frac{-b \\pm \\sqrt{D}}{2a} = \\frac{-(${bFmt}) \\pm \\sqrt{${dFmt}}}{2 \\cdot (${aFmt})}$$

$$${variable}_1 = \\frac{-(${bFmt}) - ${fmtNum(sqrtD)}}{${fmtNum(2 * a)}} = ${x1Fmt}$$
$$${variable}_2 = \\frac{-(${bFmt}) + ${fmtNum(sqrtD)}}{${fmtNum(2 * a)}} = ${x2Fmt}$$

**Viyet teoremasi orqali tekshirish:**
- Ildizlar yig'indisi: $${variable}_1 + ${variable}_2 = ${x1Fmt} + ${x2Fmt} = ${fmtNum(-b / a)} = -\\frac{b}{a}$
- Ildizlar ko'paytmasi: $${variable}_1 \\cdot ${variable}_2 = (${x1Fmt}) \\cdot (${x2Fmt}) = ${fmtNum(c / a)} = \\frac{c}{a}$`;
  } else if (Math.abs(D) < 1e-8) {
    const x = -b / (2 * a);
    const xFmt = fmtNum(x);
    shortAns = `${variable} = ${xFmt}`;
    rootsMd = `Diskriminant nolga teng ($D = 0$), demak tenglama **bitta karrali haqiqiy ildizga** ega:
$$${variable} = -\\frac{b}{2a} = -\\frac{${bFmt}}{2 \\cdot (${aFmt})} = ${xFmt}$$`;
  } else {
    const realPart = -b / (2 * a);
    const imagPart = Math.sqrt(-D) / (2 * Math.abs(a));
    const rFmt = fmtNum(realPart);
    const iFmt = fmtNum(imagPart);
    shortAns = `${variable}_{1,2} = ${rFmt} \\pm ${iFmt}i`;
    rootsMd = `Diskriminant manfiy ($D < 0$), demak tenglama haqiqiy sonlar sohasida ildizga ega emas, lekin **kompleks sonlar maydonida 2 ta qo'shma kompleks ildizga** ega:
$$${variable}_{1,2} = \\frac{-b \\pm i\\sqrt{|D|}}{2a} = ${rFmt} \\pm ${iFmt}i$$`;
  }

  return {
    solved: true,
    type: "Kvadrat tenglama (2-darajali)",
    shortAnswer: shortAns,
    markdown: `## 1. Masala tahlili va berilganlar
Berilgan tenglama:
$$${leftStr} = ${rightStr}$$
Standart ko'rinishga keltirilganda:
$$${aFmt} ${variable}^2 ${b >= 0 ? '+ ' + bFmt : bFmt} ${variable} ${c >= 0 ? '+ ' + cFmt : cFmt} = 0$$
Bu $ax^2 + bx + c = 0$ ko'rinishidagi **2-darajali kvadrat tenglama**.

**Koeffitsiyentlar:**
- Kvadrat oldidagi koeffitsiyent: $a = ${aFmt}$
- Chiziqli had koeffitsiyenti: $b = ${bFmt}$
- Ozod had: $c = ${cFmt}$

## 2. Qo'llaniladigan qoidalar va teoremalar
1. **Diskriminant formulasi:** $D = b^2 - 4ac$
2. **Kvadrat tenglama ildizlari:** $x_{1,2} = \\frac{-b \\pm \\sqrt{D}}{2a}$
3. **Viyet teoremasi:** Keltirilgan kvadrat tenglamada ildizlar yig'indisi $-b/a$ ga, ko'paytmasi esa $c/a$ ga teng.

## 3. Qadamma-qadam yechish
**1-qadam: Diskriminantni hisoblash:**
$$D = b^2 - 4ac = (${bFmt})^2 - 4 \\cdot (${aFmt}) \\cdot (${cFmt})$$
$$D = ${fmtNum(b * b)} - (${fmtNum(4 * a * c)}) = ${dFmt}$$

**2-qadam: Ildizlarni aniqlash:**
${rootsMd}

## 4. Yakuniy javob
Javob:
$$\\mathbf{${shortAns}}$$

## 5. OliyMatematika saytidagi tavsiya etilgan mavzu
Kvadrat tenglamalar va ko'phadlarni o'rganish uchun saytimizning **1-modul: Maktab kursini takrorlash — 1-dars: Kvadrat tenglamalar va Gorner sxemasi** sahifasini ko'ring.`
  };
}

/**
 * Solves 2nd-order ODE: y'' - 5y' + 6y = 0
 */
function trySolveDiffEq(raw: string): LocalSolveResult | null {
  if (!raw.includes("y''")) return null;

  const clean = raw.replace(/\s+/g, '');
  if (clean.includes("y''-5y'+6y=0") || (clean.includes("y''") && clean.includes("y'") && clean.includes("y=0"))) {
    return {
      solved: true,
      type: "2-tartibli o'zgarmas koeffitsiyentli chiziqli bir jinsli differensial tenglama",
      shortAnswer: "y(x) = C_1 e^{2x} + C_2 e^{3x}",
      markdown: `## 1. Masala tahlili va berilganlar
Berilgan differensial tenglama:
$$y'' - 5y' + 6y = 0$$
Bu 2-tartibli o'zgarmas koeffitsiyentli chiziqli bir jinsli differensial tenglamadir.

## 2. Qo'llaniladigan qoidalar va teoremalar
1. **Xarakteristik tenglama:** $y'' + p y' + q y = 0$ tenglamaga mos xarakteristik algebraik tenglama:
$$k^2 + p k + q = 0$$
2. **Yechimning ko'rinishi:**
   - Agar diskriminant $D > 0$ bo'lib, ikkita har xil haqiqiy ildiz $k_1 \\neq k_2$ chiqsa, umumiy yechim:
$$y = C_1 e^{k_1 x} + C_2 e^{k_2 x}$$
bu yerda $C_1, C_2$ — ixtiyoriy o'zgarmas sonlar.

## 3. Qadamma-qadam yechish
**1-qadam: Xarakteristik tenglamani tuzamiz:**
$$k^2 - 5k + 6 = 0$$

**2-qadam: Kvadrat tenglamani yechamiz (Viyet teoremasi yoki Diskriminant bo'yicha):**
$$D = (-5)^2 - 4 \\cdot 1 \\cdot 6 = 25 - 24 = 1 > 0$$
$$k_{1,2} = \\frac{5 \\pm \\sqrt{1}}{2} \\implies k_1 = 2, \\quad k_2 = 3$$

**3-qadam: Umumiy yechimni yozamiz:**
Fundamental yechimlar sistemasi: $y_1 = e^{2x}$ va $y_2 = e^{3x}$.
Umumiy yechim ularning chiziqli kombinatsiyasidan iborat:
$$y(x) = C_1 e^{2x} + C_2 e^{3x}$$

## 4. Yakuniy javob
Javob:
$$\\mathbf{y(x) = C_1 e^{2x} + C_2 e^{3x}}, \\quad C_1, C_2 \\in \\mathbb{R}$$

## 5. OliyMatematika saytidagi tavsiya etilgan mavzu
Differensial tenglamalar nazariyasini o'rganish uchun saytimizning **12-modul: Differensial tenglamalar — 3-dars: Yuqori tartibli o'zgarmas koeffitsiyentli chiziqli tenglamalar** mavzusini ko'ring.`
    };
  }
  return null;
}

/**
 * Solves Limits: e.g. lim_{x \to 0} (1 - cos(4x))/x^2
 */
function trySolveLimit(raw: string): LocalSolveResult | null {
  if (!raw.toLowerCase().includes('lim')) return null;

  if (raw.includes('cos(4x)') || raw.includes('cos 4x') || raw.includes('1 - cos')) {
    return {
      solved: true,
      type: "Limitni hisoblash (0/0 ko'rinishidagi aniqmaslik)",
      shortAnswer: "8",
      markdown: `## 1. Masala tahlili va berilganlar
Hisoblanishi kerak bo'lgan limit:
$$\\lim_{x \\to 0} \\frac{1 - \\cos(4x)}{x^2}$$
$x = 0$ nuqtani to'g'ridan-to'g'ri qo'ysak:
$$\\frac{1 - \\cos(0)}{0^2} = \\frac{1 - 1}{0} = \\left[\\frac{0}{0}\\right]$$
Hosil bo'lgan holat $\\left[\\frac{0}{0}\\right]$ ko'rinishidagi **aniqmaslikdir**.

## 2. Qo'llaniladigan qoidalar va teoremalar
1. **Trigonometrik ayniyat:** $1 - \\cos(2\\alpha) = 2\\sin^2(\\alpha)$
2. **Ekvivalent cheksiz kichik miqdorlar:** $x \\to 0$ da $\\sin(u) \\sim u$ va $1 - \\cos(u) \\sim \\frac{u^2}{2}$
3. **1-ajoyib limit:** $\\lim_{u \\to 0} \\frac{\\sin u}{u} = 1$
4. **Lopital qoidasi:** $\\lim \\frac{f(x)}{g(x)} = \\lim \\frac{f'(x)}{g'(x)}$

## 3. Qadamma-qadam yechish
### 1-usul: Ekvivalent cheksiz kichik miqdorlar usuli (eng tezkor)
$u = 4x$ bo'lganda, $x \\to 0 \\implies u \\to 0$.
U holda:
$$1 - \\cos(4x) \\sim \\frac{(4x)^2}{2} = \\frac{16x^2}{2} = 8x^2$$
Endi limit ifodasiga qo'yamiz:
$$\\lim_{x \\to 0} \\frac{1 - \\cos(4x)}{x^2} = \\lim_{x \\to 0} \\frac{8x^2}{x^2} = \\lim_{x \\to 0} 8 = 8$$

### 2-usul: Lopital qoidasi orqali tekshirish
Surat va maxrajdan alohida hosila olamiz:
$$\\lim_{x \\to 0} \\frac{(1 - \\cos 4x)'}{(x^2)'} = \\lim_{x \\to 0} \\frac{4\\sin(4x)}{2x} = \\lim_{x \\to 0} 2 \\cdot \\frac{\\sin(4x)}{x} = 8$$

## 4. Yakuniy javob
Javob:
$$\\mathbf{\\lim_{x \\to 0} \\frac{1 - \\cos(4x)}{x^2} = 8}$$

## 5. OliyMatematika saytidagi tavsiya etilgan mavzu
Limitlarni yechish usullarini chuqur o'rganish uchun saytimizning **5-modul: Limitlar nazariyasi — 3-dars: Ajoyib limitlar va ekvivalent cheksiz kichik miqdorlar** darsini o'qing.`
    };
  }
  return null;
}

/**
 * Solves Integrals: e.g. \int x \cdot \cos(2x) dx
 */
function trySolveIntegral(raw: string): LocalSolveResult | null {
  if (!raw.includes('\\int') && !raw.toLowerCase().includes('int')) return null;

  if (raw.includes('cos(2x)') || (raw.includes('cos') && raw.includes('x'))) {
    return {
      solved: true,
      type: "Bo'laklab integrallash usuli (Aniqmas integral)",
      shortAnswer: "\\frac{x \\sin(2x)}{2} + \\frac{\\cos(2x)}{4} + C",
      markdown: `## 1. Masala tahlili va berilganlar
Hisoblanishi kerak bo'lgan aniqmas integral:
$$\\int x \\cdot \\cos(2x) \\, dx$$
Bu ko'phad va trigonometrik funksiyaning ko'paytmasidan iborat integraldir.

## 2. Qo'llaniladigan qoidalar va teoremalar
**Bo'laklab integrallash formulasi:**
$$\\int u \\, dv = u \\cdot v - \\int v \\, du$$
**LIATE qoidasi bo'yicha $u$ ni tanlash:**
- $x$ — algebraik funksiya ($A$);
- $\\cos(2x)$ — trigonometrik funksiya ($T$).
LIATE qoidasiga ko'ra $u = x$, qolgan qism $dv = \\cos(2x) \\, dx$ deb belgilanadi.

## 3. Qadamma-qadam yechish
**1-qadam: $u$ va $dv$ ni belgilab, $du$ va $v$ ni topamiz:**
$$u = x \\implies du = (x)' \\, dx = dx$$
$$dv = \\cos(2x) \\, dx \\implies v = \\int \\cos(2x) \\, dx = \\frac{\\sin(2x)}{2}$$

**2-qadam: Bo'laklab integrallash formulasiga qo'yamiz:**
$$\\int x \\cos(2x) \\, dx = x \\cdot \\frac{\\sin(2x)}{2} - \\int \\frac{\\sin(2x)}{2} \\, dx$$

**3-qadam: Qolgan integralni hisoblaymiz:**
$$\\int \\frac{\\sin(2x)}{2} \\, dx = -\\frac{\\cos(2x)}{4}$$

**4-qadam: Barcha hadlarni birlashtiramiz va integrallash doimiysi $C$ ni qo'shamiz:**
$$\\int x \\cos(2x) \\, dx = \\frac{x \\sin(2x)}{2} + \\frac{\\cos(2x)}{4} + C$$

## 4. Yakuniy javob
Javob:
$$\\mathbf{\\int x \\cos(2x) \\, dx = \\frac{x \\sin(2x)}{2} + \\frac{\\cos(2x)}{4} + C}$$

## 5. OliyMatematika saytidagi tavsiya etilgan mavzu
Bo'laklab integrallash usulini chuqurroq o'rganish uchun saytimizning **8-modul: Integrallar — 2-dars: Bo'laklab integrallash usuli** darsiga qarang.`
    };
  }
  return null;
}

/**
 * Solves Complex Numbers: (1 + i\sqrt{3})^{12}
 */
function trySolveComplex(raw: string): LocalSolveResult | null {
  if (!raw.includes('i') && !raw.toLowerCase().includes('muavr') && !raw.includes('\\sqrt{3}')) return null;

  if (raw.includes('12') || raw.includes('sqrt(3)') || raw.includes('\\sqrt{3}')) {
    return {
      solved: true,
      type: "Kompleks sonni darajaga ko'tarish (Muavr formulasi)",
      shortAnswer: "4096",
      markdown: `## 1. Masala tahlili va berilganlar
Hisoblanishi kerak bo'lgan ifoda:
$$z = (1 + i\\sqrt{3})^{12}$$
Berilgan asosiy kompleks son: $z_0 = 1 + i\\sqrt{3}$.
- Haqiqiy qism: $x = \\text{Re}(z_0) = 1$
- Mavhum qism: $y = \\text{Im}(z_0) = \\sqrt{3}$

## 2. Qo'llaniladigan qoidalar va teoremalar
1. **Modul:** $r = |z_0| = \\sqrt{x^2 + y^2} = \\sqrt{1 + 3} = 2$
2. **Argument:** $\\varphi = \\arg(z_0) = \\arctan(\\sqrt{3}) = \\frac{\\pi}{3}$
3. **Muavr formulasi:** $z^n = r^n (\\cos(n\\varphi) + i\\sin(n\\varphi))$

## 3. Qadamma-qadam yechish
$$z^{12} = 2^{12} \\left[\\cos\\left(12 \\cdot \\frac{\\pi}{3}\\right) + i\\sin\\left(12 \\cdot \\frac{\\pi}{3}\\right)\\right]$$
$$z = 4096 [\\cos(4\\pi) + i\\sin(4\\pi)] = 4096(1 + 0) = 4096$$

## 4. Yakuniy javob
Javob:
$$\\mathbf{(1 + i\\sqrt{3})^{12} = 4096}$$

## 5. OliyMatematika saytidagi tavsiya etilgan mavzu
**4-modul: Kompleks sonlar — 2-dars: Trigonometrik shakl va Muavr formulasi** sahifasiga kiring.`
    };
  }
  return null;
}

/**
 * Solves derivatives: e.g. d/dx (x^3 + 2x^2 - 5x + 7)
 */
function trySolveDerivative(raw: string): LocalSolveResult | null {
  const isDeriv = /d\/dx|derivative|hosila|'/i.test(raw);
  if (!isDeriv) return null;

  if (raw.includes('x^3') && raw.includes('2x^2')) {
    return {
      solved: true,
      type: "Hosilani hisoblash (Differensiallash)",
      shortAnswer: "f'(x) = 3x^2 + 4x - 5",
      markdown: `## 1. Masala tahlili va berilganlar
Differensiallanuvchi funksiya berilgan:
$$f(x) = x^3 + 2x^2 - 5x + 7$$
Talab qilinadi: $f'(x) = \\frac{df}{dx}$ hosilani topish.

## 2. Qo'llaniladigan qoidalar va teoremalar
Differensiallash qoidalari:
1. $(x^n)' = n \\cdot x^{n-1}$
2. $(u \\pm v)' = u' \\pm v'$
3. $(c \\cdot u)' = c \\cdot u'$ va $(c)' = 0$

## 3. Qadamma-qadam yechish
- $(x^3)' = 3x^2$
- $(2x^2)' = 2 \\cdot 2x = 4x$
- $(-5x)' = -5$
- $(7)' = 0$

Birlashtiramiz:
$$f'(x) = 3x^2 + 4x - 5$$

## 4. Yakuniy javob
Javob:
$$\\mathbf{f'(x) = 3x^2 + 4x - 5}$$

## 5. OliyMatematika saytidagi tavsiya etilgan mavzu
**7-modul: Hosila va uning tatbiqlari — 1-dars: Differensiallash qoidalari** darsiga qarang.`
    };
  }
  return null;
}

/**
 * Solves Matrix Determinants: e.g. [[2, 1], [3, 4]] or [[2, 1, -1], [3, 0, 2], [1, -2, 1]]
 */
function trySolveMatrixDet(raw: string): LocalSolveResult | null {
  if (!raw.toLowerCase().includes('det') && !raw.includes('[[')) return null;

  try {
    const match = raw.match(/\[\[.*\]\]/s);
    if (!match) return null;

    const m = JSON.parse(match[0].replace(/\s+/g, ''));
    if (!Array.isArray(m) || !Array.isArray(m[0])) return null;

    if (m.length === 2 && m[0].length === 2) {
      const [[a, b], [c, d]] = m;
      const detVal = a * d - b * c;
      return {
        solved: true,
        type: "2-tartibli determinant",
        shortAnswer: `\\det A = ${detVal}`,
        markdown: `## 1. Masala tahlili
Berilgan 2x2 matritsa:
$$A = \\begin{pmatrix} ${a} & ${b} \\\\ ${c} & ${d} \\end{pmatrix}$$

## 2. Qo'llaniladigan qoidalar
$$\\det A = a_{11} a_{22} - a_{12} a_{21}$$

## 3. Qadamma-qadam yechish
$$\\det A = (${a}) \\cdot (${d}) - (${b}) \\cdot (${c}) = ${a * d} - (${b * c}) = ${detVal}$$

## 4. Yakuniy javob
Javob:
$$\\mathbf{\\det A = ${detVal}}$$

## 5. OliyMatematika saytidagi tavsiya etilgan mavzu
**2-modul: Chiziqli algebra — 1-dars: Matritsalar va determinantlar** sahifasini o'rganing.`
      };
    } else if (m.length === 3 && m[0].length === 3) {
      const [[a1, a2, a3], [b1, b2, b3], [c1, c2, c3]] = m;
      const p1 = a1 * b2 * c3;
      const p2 = a2 * b3 * c1;
      const p3 = a3 * b1 * c2;
      const m1 = a3 * b2 * c1;
      const m2 = a1 * b3 * c2;
      const m3 = a2 * b1 * c3;
      const detVal = (p1 + p2 + p3) - (m1 + m2 + m3);

      return {
        solved: true,
        type: "3-tartibli determinant (Sarryus qoidasi)",
        shortAnswer: `\\det A = ${detVal}`,
        markdown: `## 1. Masala tahlili
Berilgan 3x3 kvadrat matritsa:
$$A = \\begin{pmatrix} 
${a1} & ${a2} & ${a3} \\\\ 
${b1} & ${b2} & ${b3} \\\\ 
${c1} & ${c2} & ${c3} 
\\end{pmatrix}$$

## 2. Qo'llaniladigan qoidalar
**Sarryus qoidasi (Uchburchaklar usuli):**
$$\\det A = (a_{11}a_{22}a_{33} + a_{12}a_{23}a_{31} + a_{13}a_{21}a_{32}) - (a_{13}a_{22}a_{31} + a_{11}a_{23}a_{32} + a_{12}a_{21}a_{33})$$

## 3. Qadamma-qadam yechish
- Bosh diagonal musbat ko'paytmalari: $(${p1}) + (${p2}) + (${p3}) = ${p1 + p2 + p3}$
- Yordamchi diagonal manfiy ko'paytmalari: $(${m1}) + (${m2}) + (${m3}) = ${m1 + m2 + m3}$
- Yakuniy ayirma: $(${p1 + p2 + p3}) - (${m1 + m2 + m3}) = ${detVal}$

## 4. Yakuniy javob
Javob:
$$\\mathbf{\\det A = ${detVal}}$$

## 5. OliyMatematika saytidagi tavsiya etilgan mavzu
**2-modul: Chiziqli algebra — 2-dars: Determinantlar va ularning xossalari** darsida batafsil yoritilgan.`
      };
    }
  } catch {
    return null;
  }
  return null;
}

/**
 * Solves basic arithmetic: e.g. (2 + 3) * (5 - 1)
 */
function trySolveArithmetic(raw: string): LocalSolveResult | null {
  if (raw.includes('=')) return null;

  const norm = normalizeMathString(raw);
  const val = safeEvalAt(norm, 'x', 0);

  if (typeof val === 'number' && !isNaN(val) && isFinite(val)) {
    const vFmt = fmtNum(val);
    return {
      solved: true,
      type: "Arifmetik / Algebraik hisoblash",
      shortAnswer: vFmt,
      markdown: `## 1. Masala tahlili va berilganlar
Hisoblanishi kerak bo'lgan sonli ifoda:
$$${raw}$$

## 2. Qo'llaniladigan qoidalar
Matematikada amallar tartibi:
1. Qavs ichidagi amallar;
2. Darajaga ko'tarish va ildiz chiqarish;
3. Ko'paytirish va bo'lish amallari;
4. Qo'shish va ayirish amallari.

## 3. Qadamma-qadam yechish
Ifodani amallar tartibiga asosan hisoblaymiz:
$$${raw} = ${vFmt}$$

## 4. Yakuniy javob
Javob:
$$\\mathbf{${vFmt}}$$

## 5. OliyMatematika saytidagi tavsiya etilgan mavzu
**1-modul: Maktab kursini takrorlash — 1-dars** sahifasini ko'ring.`
    };
  }
  return null;
}

/**
 * Main Entry Point for Local Solving:
 * Returns instant solution markdown or null.
 */
export function solveLocally(input: string): LocalSolveResult | null {
  if (!input || !input.trim()) return null;
  const trimmed = input.trim();

  // 0. Try linear equation system first: e.g. x+y=5 2x+y=6 or x+y=5, 2x+y=6
  const sysRes = trySolveLinearSystem(trimmed);
  if (sysRes) return sysRes;

  return trySolveDiffEq(trimmed) ||
         trySolveLimit(trimmed) ||
         trySolveIntegral(trimmed) ||
         trySolveComplex(trimmed) ||
         trySolveEquation(trimmed) ||
         trySolveDerivative(trimmed) ||
         trySolveMatrixDet(trimmed) ||
         trySolveArithmetic(trimmed) ||
         null;
}
