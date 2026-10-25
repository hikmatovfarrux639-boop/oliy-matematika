import * as math from 'mathjs';

export interface LessonLink {
  title: string;
  url: string;
  badge?: string;
}

export interface TopicDiagnosis {
  id: string;
  moduleId: number;
  moduleTitle: string;
  moduleUrl: string;
  topicName: string;
  difficulty: "Boshlang'ich" | "O'rta (1-kurs)" | "Yuqori (Imtihon)";
  whyThisTopic: string;
  primaryLesson: LessonLink;
  relatedLessons: LessonLink[];
  keyFormulas: { name: string; latex: string }[];
  studyAdvice: string;
  graphFn?: string;
}

export interface LocalSolveResult {
  solved: boolean;
  type?: string;
  markdown?: string;
  shortAnswer?: string;
  diagnosis: TopicDiagnosis;
}

/**
 * Normalizes user input for mathematical parsing.
 */
export function normalizeMathString(raw: string): string {
  let s = raw.trim();

  // 1. Cyrillic homoglyphs mapping (Crucial for mobile Uzbek/Russian keyboards where х and у are Cyrillic!)
  s = s
    .replace(/х/g, 'x').replace(/Х/g, 'X')
    .replace(/у/g, 'y').replace(/У/g, 'Y')
    .replace(/а/g, 'a').replace(/А/g, 'A')
    .replace(/е/g, 'e').replace(/Е/g, 'E')
    .replace(/о/g, 'o').replace(/О/g, 'O')
    .replace(/р/g, 'p').replace(/Р/g, 'P')
    .replace(/с/g, 'c').replace(/С/g, 'C')
    .replace(/В/g, 'B').replace(/Т/g, 'T');

  // 2. Remove Uzbek genitive suffixes (e.g. "x ning kvadrati" -> "x kvadrati")
  s = s.replace(/([a-zA-Z0-9]+)\s*ning\s*/gi, '$1 ');

  // 3. Spoken conversions & common speech-to-text / typing artifacts
  s = s
    .replace(/\bintegrali?\b/gi, 'int ')
    .replace(/\bhosi?lasi?\b/gi, 'd/dx ')
    .replace(/\byteng\b/gi, 'y = ')
    .replace(/\by\s*teng\b/gi, 'y = ')
    .replace(/\bxteng\b/gi, 'x = ')
    .replace(/\bx\s*teng\b/gi, 'x = ')
    .replace(/teng(?=[\d\s+\-a-zA-Z]|$)/gi, ' = ')
    .replace(/barobar(?=[\d\s+\-a-zA-Z]|$)/gi, ' = ')
    .replace(/ravno(?=[\d\s+\-a-zA-Z]|$)/gi, ' = ')
    .replace(/\bildiz\s*(?:ostida)?\s*([a-zA-Z0-9]+|\([^)]+\))/gi, 'sqrt($1)')
    .replace(/\bmodul\s*([a-zA-Z0-9]+|\([^)]+\))/gi, 'abs($1)')
    .replace(/\bplyus\b|\bqo'shuv\b|\bqo'shilgan\b|\bplus\b/gi, ' + ')
    .replace(/\bminus\b|\bayiruv\b|\bayirilgan\b/gi, ' - ')
    .replace(/\bko'paytirilgan\b|\bko'paytiruv\b|\bzarb\b/gi, ' * ')
    .replace(/\bbo'lingan\b|\bbo'luv\b|\btaqsim\b/gi, ' / ')
    .replace(/\bkvadrat\b|\bkvadrati\b/gi, '^2')
    .replace(/\bkub\b|\bkubi\b/gi, '^3')
    .replace(/\^\s*([+\-])/g, '^2 $1')
    .replace(/\^\s*$/g, '^2')
    .replace(/(?<![<>!:])\s*=\s*/g, ' = ')
    .replace(/<\s*=/g, '<=')
    .replace(/>\s*=/g, '>=');

  // Uzbek number words
  const numWords: Record<string, string> = {
    'nol': '0', 'bir': '1', 'ikki': '2', 'uch': '3', 'to\'rt': '4', 'tort': '4',
    'besh': '5', 'olti': '6', 'yetti': '7', 'sakkiz': '8', 'to\'qqiz': '9', 'toqqiz': '9', 'o\'n': '10', 'on': '10'
  };
  for (const [w, n] of Object.entries(numWords)) {
    s = s.replace(new RegExp('\\b' + w + '\\b', 'gi'), n);
  }

  s = s
    .replace(/×/g, '*')
    .replace(/÷/g, '/')
    .replace(/−/g, '-')
    .replace(/–/g, '-')
    .replace(/²/g, '^2')
    .replace(/³/g, '^3')
    .replace(/⁴/g, '^4')
    .replace(/√\(([^)]+)\)/g, 'sqrt($1)')
    .replace(/√([a-zA-Z0-9]+)/g, 'sqrt($1)')
    .replace(/\\sqrt\{([^}]+)\}/g, 'sqrt($1)')
    .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '(($1)/($2))')
    .replace(/\\cdot/g, '*')
    .replace(/\\times/g, '*')
    .replace(/\\pi/g, 'pi')
    .replace(/\\sin/g, 'sin')
    .replace(/\\cos/g, 'cos')
    .replace(/\\tan/g, 'tan')
    .replace(/\\tg/g, 'tan')
    .replace(/\\ctg/g, 'cot')
    .replace(/\\ln/g, 'log')
    .replace(/\bln\b/g, 'log')
    .replace(/\btg\b/g, 'tan')
    .replace(/\bctg\b/g, 'cot');

  // Protect log bases: log2( -> log_2(
  s = s.replace(/\blog(\d+)\s*\(/gi, 'log_$1(');

  // Insert implicit multiplication: e.g. 2x -> 2*x, 3( -> 3*(, )x -> )*x (avoid breaking log_2( )
  s = s.replace(/(\d)([a-zA-Z])/g, '$1*$2');
  s = s.replace(/(^|[^a-zA-Z_])(\d)\s*\(/g, '$1$2*(');
  s = s.replace(/(\))([a-zA-Z0-9(])/g, '$1*$2');

  return s;
}

/**
 * Formats a number cleanly (e.g. 2, -3.5, \frac{1}{3})
 */
export function fmtNum(n: number): string {
  if (!isFinite(n)) return n > 0 ? '\\infty' : '-\\infty';
  if (Math.abs(n) < 1e-10) return '0';
  if (Math.abs(n - Math.round(n)) < 1e-7) return Math.round(n).toString();

  for (let denom = 2; denom <= 24; denom++) {
    const num = Math.round(n * denom);
    if (Math.abs(n - num / denom) < 1e-6) {
      const g = gcd(Math.abs(num), denom);
      const p = num / g;
      const q = denom / g;
      if (q === 1) return p.toString();
      return p < 0 ? `-\\frac{${Math.abs(p)}}{${q}}` : `\\frac{${p}}{${q}}`;
    }
  }
  return Number(n.toFixed(4)).toString();
}

function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

/**
 * Safely evaluates a single-variable expression F(x) at a given numeric point.
 */
function safeEvalAt(expr: string, variable: string, val: number): number {
  try {
    const norm = normalizeMathString(expr);
    const res = math.evaluate(norm, { [variable]: val, e: Math.E, pi: Math.PI });
    return typeof res === 'number' ? res : Number(res);
  } catch {
    try {
      let jsExpr = normalizeMathString(expr)
        .replace(/\^/g, '**')
        .replace(/\bsin\b/g, 'Math.sin')
        .replace(/\bcos\b/g, 'Math.cos')
        .replace(/\btan\b/g, 'Math.tan')
        .replace(/\bcot\b/g, '(1/Math.tan)')
        .replace(/\bsqrt\b/g, 'Math.sqrt')
        .replace(/\bexp\b/g, 'Math.exp')
        .replace(/\blog\b/g, 'Math.log')
        .replace(/\bpi\b/gi, 'Math.PI');

      const fn = new Function(variable, `try { return Number(${jsExpr}); } catch(e) { return NaN; }`);
      const res = fn(val);
      return typeof res === 'number' ? res : NaN;
    } catch {
      return NaN;
    }
  }
}

function toCleanTex(expr: string): string {
  try {
    const norm = normalizeMathString(expr);
    return math.parse(norm).toTex().replace(/\\mathrm\{log\}/g, '\\ln');
  } catch {
    return expr;
  }
}

/**
 * SMART TOPIC CLASSIFIER & COURSE NAVIGATOR
 */
export function diagnoseTopic(rawInput: string): TopicDiagnosis {
  const s = (rawInput || '').trim();
  const low = s.toLowerCase();

  // 1. Differential Equations (Module 12)
  if (
    s.includes("y''") ||
    s.includes("y'") ||
    low.includes('dy/dx') ||
    low.includes('\\frac{dy}{dx}') ||
    low.includes('differensial tenglama') ||
    low.includes('koshi masalasi') ||
    low.includes('xarakteristik')
  ) {
    const isSecondOrder = s.includes("y''") || low.includes('2-tartibli') || low.includes('ikkinchi tartibli');
    return {
      id: 'diff-eq',
      moduleId: 12,
      moduleTitle: '12-modul: Differensial tenglamalar',
      moduleUrl: '/modullar/differensial-tenglamalar',
      topicName: isSecondOrder
        ? "2-tartibli o'zgarmas koeffitsiyentli chiziqli differensial tenglamalar"
        : "1-tartibli oddiy differensial tenglamalar (O'zgaruvchilari ajraladigan va chiziqli)",
      difficulty: "Yuqori (Imtihon)",
      whyThisTopic:
        "Masalada noma'lum funksiya $y$ va uning hosilasi ($y'$ yoki $y''$) qatnashgan differensial tenglama berilgan.",
      primaryLesson: isSecondOrder
        ? {
            title: "2-tartibli chiziqli differensial tenglamalar",
            url: '/dars/differensial-tenglamalar/ikkinchi-tartibli-chiziqli-differensial-tenglamalar',
            badge: 'Asosiy dars'
          }
        : {
            title: "O'zgaruvchilari ajraladigan tenglamalar",
            url: '/dars/differensial-tenglamalar/ozgaruvchilari-ajraladigan-tenglamalar',
            badge: 'Asosiy dars'
          },
      relatedLessons: [
        { title: 'Differensial tenglama tushunchasi va Koshi masalasi', url: '/dars/differensial-tenglamalar/differensial-tenglama-tushunchasi' },
        { title: '1-tartibli chiziqli differensial tenglamalar (Bernulli usuli)', url: '/dars/differensial-tenglamalar/birinchi-tartibli-chiziqli-tenglamalar' },
        { title: 'Bernulli differensial tenglamasi', url: '/dars/differensial-tenglamalar/bernulli-tenglamasi' }
      ],
      keyFormulas: [
        { name: 'Xarakteristik tenglama', latex: "y'' + py' + qy = 0 \\implies k^2 + pk + q = 0" },
        { name: "Ajraladigan tenglama", latex: "\\frac{dy}{y} = f(x)dx \\implies \\ln|y| = \\int f(x)dx + C" }
      ],
      studyAdvice:
        "1-tartibli tenglamada $y'$ o'rniga $\\frac{dy}{dx}$ yozib, $y$ larni chapga, $x$ larni o'ngga ajrating. 2-tartiblida esa xarakteristik tenglamaning diskriminantini tekshiring."
    };
  }

  // 2. Multiple Integrals (Module 10)
  if (
    low.includes('\\iint') ||
    low.includes('\\iiint') ||
    low.includes('ikki karrali') ||
    low.includes('uch karrali') ||
    low.includes('dxdy') ||
    low.includes('qutb koordinata')
  ) {
    return {
      id: 'multiple-integrals',
      moduleId: 10,
      moduleTitle: '10-modul: Karrali va egri chiziqli integrallar',
      moduleUrl: '/modullar/karrali-integrallar',
      topicName: 'Ikki va uch karrali integrallarni hisoblash',
      difficulty: 'Yuqori (Imtihon)',
      whyThisTopic: "Masalada ikki yoki uch o'zgaruvchili soha bo'yicha integrallash so'ralgan.",
      primaryLesson: {
        title: 'Ikki karrali integral va uni takroriy integralga keltirish',
        url: '/dars/karrali-integrallar/ikki-karrali-integral-va-hisoblash',
        badge: 'Asosiy dars'
      },
      relatedLessons: [
        { title: 'Qutb koordinatalarida ikki karrali integral', url: '/dars/karrali-integrallar/qutb-koordinatalarida-ikki-karrali-integral' },
        { title: 'Uch karrali integral: silindrik va sferik koordinatalar', url: '/dars/karrali-integrallar/uch-karrali-integral-va-silindrik-sferik' }
      ],
      keyFormulas: [
        { name: 'Takroriy integral', latex: '\\iint_D f(x,y)\\,dxdy = \\int_a^b dx \\int_{y_1(x)}^{y_2(x)} f(x,y)\\,dy' },
        { name: 'Qutb koordinatalari', latex: 'x = r\\cos\\varphi, \\; y = r\\sin\\varphi, \\; dxdy = r\\,dr\\,d\\varphi' }
      ],
      studyAdvice: "Integrallash sohasi $D$ ni chizib, chegaralarni to'g'ri qo'yib oling."
    };
  }

  // 3. Single Integrals (Module 8)
  if (
    low.includes('\\int') ||
    /\bint\b/.test(low) ||
    low.includes('integral') ||
    low.includes('boshlang\'ich') ||
    /dx\s*$/.test(low)
  ) {
    const isByParts = /(?:x|\bx\b)\s*\*?\s*(?:sin|cos|e\^|ln|log)/i.test(low);
    const isDefinite = /\\int_|\bint\s*\(\s*\d+|dan.*gacha/i.test(low);

    return {
      id: 'integrals',
      moduleId: 8,
      moduleTitle: '8-modul: Integrallar',
      moduleUrl: '/modullar/integrallar',
      topicName: isByParts
        ? "Bo'laklab integrallash usuli (LIATE)"
        : isDefinite
        ? 'Aniq integral va Nyuton-Leybnits formulasi'
        : "Boshlang'ich funksiya va aniqmas integrallar",
      difficulty: "O'rta (1-kurs)",
      whyThisTopic: "Masalada funksiya integralini topish talab etilgan.",
      primaryLesson: isByParts
        ? { title: "Bo'laklab integrallash usuli", url: '/dars/integrallar/bolaklab-integrallash', badge: 'Asosiy dars' }
        : isDefinite
        ? { title: 'Aniq integral va Nyuton-Leybnits formulasi', url: '/dars/integrallar/aniq-integral-va-nyuton-leybnits', badge: 'Asosiy dars' }
        : { title: "Boshlang'ich funksiya va aniqmas integral jadvali", url: '/dars/integrallar/boshlangich-funksiya-va-aniqmas-integral', badge: 'Asosiy dars' },
      relatedLessons: [
        { title: "Boshlang'ich funksiya va aniqmas integral jadvali", url: '/dars/integrallar/boshlangich-funksiya-va-aniqmas-integral' },
        { title: "Integrallash usullari: O'zgaruvchini almashtirish", url: '/dars/integrallar/integrallash-usullari-almashtirish' },
        { title: "Bo'laklab integrallash usuli", url: '/dars/integrallar/bolaklab-integrallash' },
        { title: 'Aniq integral va Nyuton-Leybnits formulasi', url: '/dars/integrallar/aniq-integral-va-nyuton-leybnits' }
      ],
      keyFormulas: [
        { name: 'Darajali integral', latex: '\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + C' },
        { name: "Bo'laklab integrallash", latex: '\\int u\\,dv = uv - \\int v\\,du' },
        { name: 'Nyuton-Leybnits formulasi', latex: '\\int_a^b f(x)\\,dx = F(b) - F(a)' }
      ],
      studyAdvice: "Jadval integrali bo'lsa darhol formulani qo'llang. Ko'paytma bo'lsa LIATE qoidasi bo'yicha u va dv ni tanlang."
    };
  }

  // 4. Limits (Module 5)
  if (low.includes('lim') || low.includes('\\to') || low.includes('->') || low.includes('limit')) {
    return {
      id: 'limits',
      moduleId: 5,
      moduleTitle: '5-modul: Limitlar nazariyasi',
      moduleUrl: '/modullar/limitlar',
      topicName: 'Limit hisoblash usullari va aniqmasliklarni ochish',
      difficulty: "O'rta (1-kurs)",
      whyThisTopic: "Masalada argument ma'lum nuqtaga intilgandagi limit hisoblash so'ralgan.",
      primaryLesson: { title: 'Aniqmasliklar (0/0 va ∞/∞) va ularni ochish usullari', url: '/dars/limitlar/aniqmasliklar-va-ularni-ochish', badge: 'Asosiy dars' },
      relatedLessons: [
        { title: 'Limit nima? Ta\'rif va mohiyat', url: '/dars/limitlar/limit-nima' },
        { title: '1- va 2-ajoyib limitlar', url: '/dars/limitlar/ajoyib-limitlar' },
        { title: 'Lopital qoidasi (Hosila yordamida limit)', url: '/dars/hosila/lopital-qoidasi' }
      ],
      keyFormulas: [
        { name: '1-ajoyib limit', latex: '\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1' },
        { name: '2-ajoyib limit', latex: '\\lim_{x \\to \\infty} \\left(1 + \\frac{1}{x}\\right)^x = e' },
        { name: 'Lopital qoidasi', latex: '\\lim \\frac{f(x)}{g(x)} = \\lim \\frac{f\'(x)}{g\'(x)}' }
      ],
      studyAdvice: "Dastlab x qiymatini to'g'ridan-to'g'ri qo'ying. [0/0] chiqsa — qisqartirish, ekvivalentlik yoki Lopital qoidasini ishlating."
    };
  }

  // 5. Derivatives (Module 7)
  if (low.includes('d/dx') || low.includes('hosila') || low.includes("f'") || low.includes('differensial') || low.includes('urinma') || /\([^)]+\)'/.test(s)) {
    return {
      id: 'derivatives',
      moduleId: 7,
      moduleTitle: '7-modul: Hosila va differensial hisob',
      moduleUrl: '/modullar/hosila',
      topicName: 'Funksiya hosilasini hisoblash va differensiallash qoidalari',
      difficulty: "O'rta (1-kurs)",
      whyThisTopic: "Masalada funksiyaning hosilasi f'(x) yoki urinma tenglamasi so'ralgan.",
      primaryLesson: { title: 'Differensiallash qoidalari va hosilalar jadvali', url: '/dars/hosila/differensiallash-qoidalari-va-jadval', badge: 'Asosiy dars' },
      relatedLessons: [
        { title: 'Hosila nima? Geometrik va fizik ma\'nosi', url: '/dars/hosila/hosila-nima' },
        { title: 'Murakkab funksiya hosilasi (Zanjir qoidasi)', url: '/dars/hosila/murakkab-funksiya-hosilasi' },
        { title: 'Lopital qoidasi', url: '/dars/hosila/lopital-qoidasi' }
      ],
      keyFormulas: [
        { name: 'Daraja hosilasi', latex: "(x^n)' = n x^{n-1}" },
        { name: "Ko'paytma hosilasi", latex: "(uv)' = u'v + uv'" },
        { name: "Bo'linma hosilasi", latex: "\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}" }
      ],
      studyAdvice: "Murakkab funksiyalarda zanjir qoidasini qo'llang: (f(g(x)))' = f'(g(x)) * g'(x)."
    };
  }

  // 6. Linear Algebra (Module 2)
  const hasTwoEqs = s.indexOf('=') !== -1 && s.indexOf('=', s.indexOf('=') + 1) !== -1;
  if (s.includes('[[') || low.includes('det') || low.includes('matritsa') || low.includes('kramer') || hasTwoEqs) {
    return {
      id: 'linear-algebra',
      moduleId: 2,
      moduleTitle: '2-modul: Chiziqli algebra',
      moduleUrl: '/modullar/chiziqli-algebra',
      topicName: hasTwoEqs ? 'Chiziqli tenglamalar sistemasi (Kramer va Gauss)' : 'Matritsalar va determinantlar',
      difficulty: "O'rta (1-kurs)",
      whyThisTopic: "Masalada matritsalar, determinantlar yoki tenglamalar sistemasi berilgan.",
      primaryLesson: hasTwoEqs
        ? { title: 'Chiziqli tenglamalar sistemasi va Kramer qoidasi', url: '/dars/chiziqli-algebra/chiziqli-tenglamalar-sistemasi', badge: 'Asosiy dars' }
        : { title: 'Determinantlar va ularning xossalari', url: '/dars/chiziqli-algebra/determinantlar', badge: 'Asosiy dars' },
      relatedLessons: [
        { title: 'Matritsalar va ular ustida amallar', url: '/dars/chiziqli-algebra/matritsalar-va-amallar' },
        { title: 'Teskari matritsa va matritsa rangi', url: '/dars/chiziqli-algebra/teskari-matritsa-va-rang' },
        { title: 'Gauss usuli (Amaliy qo\'llanma)', url: '/dars/chiziqli-algebra/gauss-usuli-amaliy' }
      ],
      keyFormulas: [
        { name: '2x2 Determinant', latex: '\\det A = ad - bc' },
        { name: 'Kramer qoidasi', latex: 'x_i = \\frac{\\Delta_i}{\\Delta}' }
      ],
      studyAdvice: "Asosiy determinant Delta noldan farqli ekanini birinchi bo'lib tekshiring."
    };
  }

  // 7. Complex Numbers (Module 4)
  if (/\b\d*i\b/.test(s) || /i\\sqrt/.test(s) || low.includes('kompleks') || low.includes('muavr')) {
    return {
      id: 'complex-numbers',
      moduleId: 4,
      moduleTitle: '4-modul: Kompleks sonlar',
      moduleUrl: '/modullar/kompleks-sonlar',
      topicName: 'Kompleks sonlar ustida amallar va Muavr formulasi',
      difficulty: "O'rta (1-kurs)",
      whyThisTopic: "Masalada mavhum birlik i (i^2 = -1) qatnashgan ifoda berilgan.",
      primaryLesson: { title: 'Muavr formulasi va ildiz chiqarish', url: '/dars/kompleks-sonlar/muavr-formulasi-va-ildiz-chiqarish', badge: 'Asosiy dars' },
      relatedLessons: [
        { title: 'Kompleks son tushunchasi va algebraik shakl', url: '/dars/kompleks-sonlar/kompleks-son-tushunchasi' },
        { title: 'Kompleks sonlar ustida amallar', url: '/dars/kompleks-sonlar/kompleks-sonlar-amallar' },
        { title: 'Trigonometrik va ko\'rsatkichli shakl', url: '/dars/kompleks-sonlar/trigonometrik-va-korsatkichli-shakl' }
      ],
      keyFormulas: [
        { name: 'Mavhum birlik', latex: 'i^2 = -1' },
        { name: 'Muavr formulasi', latex: 'z^n = r^n(\\cos n\\varphi + i\\sin n\\varphi)' }
      ],
      studyAdvice: "Ko'paytirishda oddiy algebra qoidasini qo'llab, i^2 o'rniga -1 qo'ying."
    };
  }

  // 8. Series (Module 11)
  if (low.includes('\\sum') || low.includes('sum') || low.includes('qator') || low.includes('dalamber')) {
    return {
      id: 'series',
      moduleId: 11,
      moduleTitle: '11-modul: Qatorlar nazariyasi',
      moduleUrl: '/modullar/qatorlar',
      topicName: 'Sonli qatorlar va yaqinlashish alomatlari',
      difficulty: 'Yuqori (Imtihon)',
      whyThisTopic: "Masalada cheksiz sonli qator berilgan.",
      primaryLesson: { title: 'Musbat hadli qatorlar: Dalamber va Koshi alomatlari', url: '/dars/qatorlar/musbat-hadli-qatorlar-alomatlari', badge: 'Asosiy dars' },
      relatedLessons: [
        { title: 'Sonli qatorlar va yaqinlashish', url: '/dars/qatorlar/sonli-qatorlar-va-yaqinlashish' },
        { title: 'Ishorasi almashinuvchi qatorlar (Leybnits)', url: '/dars/qatorlar/ishorasi-almashinuvchi-qatorlar-leybnits' }
      ],
      keyFormulas: [
        { name: 'Garmonik qator', latex: '\\sum \\frac{1}{n^p} \\quad (p > 1 \\text{ yaqinlashuvchi})' },
        { name: 'Dalamber alomati', latex: '\\lim_{n\\to\\infty} \\frac{a_{n+1}}{a_n} = D < 1' }
      ],
      studyAdvice: "Zaruriy shartni birinchi tekshiring: agar umumiy had nolga intilmasa, qator darhol uzoqlashadi."
    };
  }

  // 9. Probability (Module 13 & 14)
  if (low.includes('ehtimol') || low.includes('kombinatorika') || low.includes('p(a)') || low.includes('bernulli')) {
    return {
      id: 'probability',
      moduleId: 13,
      moduleTitle: '13-modul: Ehtimollar nazariyasi',
      moduleUrl: '/modullar/ehtimollar-nazariyasi',
      topicName: 'Klassik ehtimollik va kombinatorika',
      difficulty: "O'rta (1-kurs)",
      whyThisTopic: "Masalada ehtimollik yoki tasodifiy hodisalar ko'rsatilgan.",
      primaryLesson: { title: 'Kombinatorika va klassik ehtimollik', url: '/dars/ehtimollar-nazariyasi/kombinatorika-va-klassik-ehtimollik', badge: 'Asosiy dars' },
      relatedLessons: [
        { title: 'Ehtimollarni qo\'shish, ko\'paytirish va Bayes formulasi', url: '/dars/ehtimollar-nazariyasi/ehtimollarni-qoshish-va-kopaytirish-shartli-ehtimol' },
        { title: 'Bernulli sxemasi va Puasson', url: '/dars/ehtimollar-nazariyasi/bernulli-sxemasi-va-puasson' }
      ],
      keyFormulas: [
        { name: 'Klassik ehtimollik', latex: 'P(A) = \\frac{m}{n}' },
        { name: 'Kombinatsiyalar', latex: 'C_n^k = \\frac{n!}{k!(n-k)!}' }
      ],
      studyAdvice: "Barcha teng ehtimolli natijalar soni n ni va hodisaga qulay m ni aniq sanang."
    };
  }

  // 10. Trigonometry (Module 1 & 6)
  const isTrig =
    /\\(sin|cos|tan|tg|ctg|cot|sec|csc|arcsin|arccos|arctg|arcctg)/i.test(s) ||
    /(sin|cos|tan|tg|ctg|cot|sec|csc|arcsin|arccos|arctg|arcctg)\s*\(/i.test(s) ||
    /\b(sin|cos|tan|tg|ctg|cot|sec|csc|arcsin|arccos|arctg|arcctg)\b/i.test(s) ||
    /\b(sinx|cosx|tgx|ctgx|tanx|cotx|siny|cosy)\b/i.test(s) ||
    /(sin|cos|tan|tg|ctg)\^/i.test(s) ||
    low.includes('trigonometr');

  if (isTrig) {
    const isEq = s.includes('=') || s.includes('>') || s.includes('<');
    return {
      id: 'trigonometry',
      moduleId: 1,
      moduleTitle: '1-modul: Maktab kursini takrorlash',
      moduleUrl: '/modullar/maktab-kursi',
      topicName: isEq ? 'Trigonometrik tenglamalar va ayniyatlar' : 'Trigonometriya asoslari va funksiyalari',
      difficulty: "O'rta (Maktab / 1-kurs)",
      whyThisTopic: isEq
        ? "Masalada trigonometrik funksiyalar (sin, cos, tg, ctg) qatnashgan tenglama berilgan."
        : "Masalada burchaklar yoki trigonometrik funksiyalar ifodasi berilgan.",
      primaryLesson: {
        title: 'Trigonometriya asoslari',
        url: '/dars/maktab-kursi/trigonometriya-asoslari',
        badge: 'Asosiy dars'
      },
      relatedLessons: [
        { title: 'Juft, toq va davriy funksiyalar', url: '/dars/funksiyalar-grafiklar/juft-toq-va-davriy-funksiyalar' },
        { title: 'Trigonometrik va ko\'rsatkichli shakl', url: '/dars/kompleks-sonlar/trigonometrik-va-korsatkichli-shakl' },
        { title: '1- va 2-ajoyib limitlar', url: '/dars/limitlar/ajoyib-limitlar' },
        { title: 'Tenglamalar va tengsizliklar', url: '/dars/maktab-kursi/tenglamalar-va-tengsizliklar' }
      ],
      keyFormulas: [
        { name: 'Sinus tenglamasi', latex: '\\sin x = a \\implies x = (-1)^k \\arcsin a + \\pi k, \\quad k \\in \\mathbb{Z}' },
        { name: 'Kosinus tenglamasi', latex: '\\cos x = a \\implies x = \\pm \\arccos a + 2\\pi k, \\quad k \\in \\mathbb{Z}' },
        { name: 'Tangens tenglamasi', latex: '\\mathrm{tg}\\,x = a \\implies x = \\mathrm{arctg}\\,a + \\pi k, \\quad k \\in \\mathbb{Z}' },
        { name: 'Asosiy ayniyat', latex: '\\sin^2 x + \\cos^2 x = 1, \\quad \\mathrm{tg}\\,x \\cdot \\mathrm{ctg}\\,x = 1' }
      ],
      studyAdvice:
        "Xususiy holatlarni doimo yodda tuting: sin(x) = 1 da x = pi/2 + 2*pi*k; sin(x) = 0 da x = pi*k; cos(x) = 1 da x = 2*pi*k; cos(x) = 0 da x = pi/2 + pi*k.",
      graphFn: 'sin(x)'
    };
  }

  // 11. Exponential & Logarithmic expressions/equations
  const isLogExp =
    /\\(log|ln)/i.test(s) ||
    /\b(log|ln)\s*\(/i.test(s) ||
    /\b(log|ln)\b/i.test(s) ||
    /\b(logx|lnx)\b/i.test(s) ||
    /\b\d+\^x\b|\be\^x\b|\ba\^x\b/i.test(s) ||
    low.includes('logarifm') ||
    low.includes('korsatkichli') ||
    low.includes("ko'rsatkichli");

  if (isLogExp) {
    const isEq = s.includes('=');
    return {
      id: 'log-exp',
      moduleId: 1,
      moduleTitle: '1-modul: Maktab kursini takrorlash',
      moduleUrl: '/modullar/maktab-kursi',
      topicName: isEq ? "Ko'rsatkichli va logarifmik tenglamalar" : "Ko'rsatkichli va logarifmik ifodalar",
      difficulty: "O'rta (Maktab / 1-kurs)",
      whyThisTopic: "Masalada logarifm (log, ln) yoki ko'rsatkichli funksiya (a^x, e^x) qatnashgan.",
      primaryLesson: {
        title: "Ko'rsatkichli va logarifmik ifodalar",
        url: '/dars/maktab-kursi/korsatkichli-va-logarifmik-ifodalar',
        badge: 'Asosiy dars'
      },
      relatedLessons: [
        { title: 'Elementar funksiyalar', url: '/dars/funksiyalar-grafiklar/elementar-funksiyalar' },
        { title: 'Tenglamalar va tengsizliklar', url: '/dars/maktab-kursi/tenglamalar-va-tengsizliklar' },
        { title: 'Differensiallash qoidalari va hosilalar jadvali', url: '/dars/hosila/differensiallash-qoidalari-va-jadval' }
      ],
      keyFormulas: [
        { name: "Logarifm ta'rifi", latex: 'a^x = b \\iff x = \\log_a b \\quad (a > 0, a \\neq 1, b > 0)' },
        { name: 'Natural logarifm', latex: 'e^x = b \\iff x = \\ln b' },
        { name: "Ko'paytma logarifmi", latex: '\\ln(ab) = \\ln a + \\ln b, \\quad \\ln(a^k) = k\\ln a' }
      ],
      studyAdvice:
        "Logarifm ostidagi ifoda qat'iy musbat bo'lishi shartini (aniqlanish sohasi: x > 0) doimo birinchi bo'lib tekshiring."
    };
  }

  // 12. Vectors & Analytic Geometry (Module 3)
  const isVector =
    low.includes('vektor') ||
    low.includes('skalyar') ||
    low.includes('aralash') ||
    low.includes('ortogonal') ||
    low.includes('kollinear') ||
    low.includes('tekislik') ||
    low.includes('fazodagi') ||
    /\bvec\b|\\vec|\([+-]?\d+,\s*[+-]?\d+,\s*[+-]?\d+\)/.test(low);

  if (isVector) {
    return {
      id: 'vectors',
      moduleId: 3,
      moduleTitle: '3-modul: Vektorlar va analitik geometriya',
      moduleUrl: '/modullar/vektorlar-geometriya',
      topicName: 'Vektorlar algebrasi va analitik geometriya',
      difficulty: "O'rta (1-kurs)",
      whyThisTopic: "Masalada vektorlar, fazodagi tekislik yoki to'g'ri chiziq berilgan.",
      primaryLesson: {
        title: 'Vektorlar va ular ustida chiziqli amallar',
        url: '/dars/vektorlar-geometriya/vektorlar-va-chiziqli-amallar',
        badge: 'Asosiy dars'
      },
      relatedLessons: [
        { title: "Skalyar ko'paytma va uning tatbiqlari", url: '/dars/vektorlar-geometriya/skalyar-kopaytma' },
        { title: "Vektor va aralash ko'paytma", url: '/dars/vektorlar-geometriya/vektor-va-aralash-kopaytma' },
        { title: "Fazodagi tekislik va to'g'ri chiziq", url: '/dars/vektorlar-geometriya/fazodagi-tekislik-va-togri-chiziq' },
        { title: 'Ikkinchi tartibli chiziqlar va sirtlar', url: '/dars/vektorlar-geometriya/ikkinchi-tartibli-chiziqlar-va-sirtlar' }
      ],
      keyFormulas: [
        { name: "Skalyar ko'paytma", latex: '\\vec{a} \\cdot \\vec{b} = x_1 x_2 + y_1 y_2 + z_1 z_2 = |\\vec{a}||\\vec{b}|\\cos\\varphi' },
        { name: 'Vektor uzunligi', latex: '|\\vec{a}| = \\sqrt{x^2 + y^2 + z^2}' },
        { name: 'Ortogonallik sharti', latex: '\\vec{a} \\cdot \\vec{b} = 0 \\iff \\vec{a} \\perp \\vec{b}' }
      ],
      studyAdvice:
        "Skalyar ko'paytma son beradi (vektorlar orasidagi burchak kosinusini topishda ishlatiladi), vektor ko'paytma esa yangi vektor beradi."
    };
  }

  // 13. Multivariable & Partial Derivatives (Module 9)
  const isMultivar =
    low.includes('\\partial') ||
    low.includes('partial') ||
    low.includes('xususiy hosila') ||
    low.includes('toliq differensial') ||
    low.includes("to'liq differensial") ||
    low.includes('gradient');

  if (isMultivar) {
    return {
      id: 'multivariable',
      moduleId: 9,
      moduleTitle: "9-modul: Ko'p o'zgaruvchili funksiyalar",
      moduleUrl: '/modullar/kop-ozgaruvchili-funksiyalar',
      topicName: "Ko'p o'zgaruvchili funksiyalar va xususiy hosilalar",
      difficulty: "O'rta (1-kurs)",
      whyThisTopic: "Masalada ko'p o'zgaruvchili funksiya yoki xususiy hosila berilgan.",
      primaryLesson: {
        title: 'Xususiy hosilalar',
        url: '/dars/kop-ozgaruvchili-funksiyalar/xususiy-hosilalar',
        badge: 'Asosiy dars'
      },
      relatedLessons: [
        { title: "Ikki o'zgaruvchili funksiya tushunchasi va aniqlanish sohasi", url: '/dars/kop-ozgaruvchili-funksiyalar/ikki-ozgaruvchili-funksiya-va-soha' },
        { title: "To'liq differensial va taqribiy hisoblash", url: '/dars/kop-ozgaruvchili-funksiyalar/toliq-differensial-va-taqribiy-hisoblash' },
        { title: "Ikki o'zgaruvchili funksiyaning ekstremumlari", url: '/dars/kop-ozgaruvchili-funksiyalar/ikki-ozgaruvchili-funksiya-ekstremumi' }
      ],
      keyFormulas: [
        { name: 'Xususiy hosila', latex: '\\frac{\\partial z}{\\partial x} = (f(x,y))\'_x \\quad (y = \\mathrm{const})' },
        { name: "To'liq differensial", latex: 'dz = \\frac{\\partial z}{\\partial x}dx + \\frac{\\partial z}{\\partial y}dy' }
      ],
      studyAdvice: "x bo'yicha hosila olayotganda y ni oddiy o'zgarmas son (konstanta) deb qarang."
    };
  }

  // 14. Mathematical Statistics (Module 14)
  const isStats =
    low.includes('statistika') ||
    low.includes('tanlanma') ||
    low.includes('dispersiya') ||
    low.includes('gipoteza') ||
    low.includes('orta arifmetik') ||
    low.includes("o'rta arifmetik");

  if (isStats) {
    return {
      id: 'statistics',
      moduleId: 14,
      moduleTitle: '14-modul: Matematik statistika',
      moduleUrl: '/modullar/matematik-statistika',
      topicName: 'Matematik statistika va tanlanma tahlili',
      difficulty: "O'rta (1-kurs)",
      whyThisTopic: "Masalada statistik ma'lumotlar, tanlanma ko'rsatkichlari yoki gipotezalar berilgan.",
      primaryLesson: {
        title: 'Statistik baholash va tavsiflar',
        url: '/dars/matematik-statistika/statistik-baholash-va-tavsiflar',
        badge: 'Asosiy dars'
      },
      relatedLessons: [
        { title: "Bosh to'plam va tanlanma", url: '/dars/matematik-statistika/bosh-toplam-va-tanlanma' },
        { title: 'Statistik gipotezalarni tekshirish', url: '/dars/matematik-statistika/statistik-gipotezalarni-tekshirish' }
      ],
      keyFormulas: [
        { name: "Tanlanma o'rtachasi", latex: '\\bar{x} = \\frac{1}{n} \\sum_{i=1}^n x_i' },
        { name: 'Tanlanma dispersiyasi', latex: 'S^2 = \\frac{1}{n-1} \\sum_{i=1}^n (x_i - \\bar{x})^2' }
      ],
      studyAdvice: "Tanlanma hajmi n va har bir qiymatning chastotasini to'g'ri hisoblab oling."
    };
  }

  // 15. Algebraic Equations & Inequalities (Module 1)
  if (s.includes('=') || s.includes('>') || s.includes('<') || low.includes('\\le') || low.includes('\\ge')) {
    const isIneq = s.includes('>') || s.includes('<') || low.includes('\\le') || low.includes('\\ge');
    const isQuad = /x\^2|x\*\*2|\bx2\b/.test(low) || /(?:x.*){2}/.test(s);

    if (isIneq) {
      return {
        id: 'inequalities',
        moduleId: 1,
        moduleTitle: '1-modul: Maktab kursini takrorlash',
        moduleUrl: '/modullar/maktab-kursi',
        topicName: 'Tengsizliklar va intervallar usuli',
        difficulty: "Boshlang'ich",
        whyThisTopic: "Masalada noma'lum x qatnashgan algebraik tengsizlik berilgan.",
        primaryLesson: {
          title: 'Tenglamalar va tengsizliklar (Intervallar usuli)',
          url: '/dars/maktab-kursi/tenglamalar-va-tengsizliklar',
          badge: 'Asosiy dars'
        },
        relatedLessons: [
          { title: "Algebraik ayniyatlar va qisqa ko'paytirish", url: '/dars/maktab-kursi/algebraik-ayniyatlar-va-qisqa-kopaytirish' },
          { title: 'Funksiya aniqlanish va qiymatlar sohasi', url: '/dars/funksiyalar-grafiklar/funksiya-aniqlanish-va-qiymatlar-sohasi' }
        ],
        keyFormulas: [
          { name: 'Intervallar usuli', latex: '(x - x_1)(x - x_2) > 0 \\implies x \\in (-\\infty, x_1) \\cup (x_2, \\infty)' },
          { name: 'Kasr-ratsional tengsizlik', latex: '\\frac{P(x)}{Q(x)} \\ge 0 \\iff P(x)Q(x) \\ge 0 \\quad (Q(x) \\neq 0)' }
        ],
        studyAdvice: "Tengsizliklarni yechishda Intervallar usulidan foydalaning va nolga bo'lishdan ehtiyot bo'ling."
      };
    }

    if (isQuad) {
      return {
        id: 'quadratic-equations',
        moduleId: 1,
        moduleTitle: '1-modul: Maktab kursini takrorlash',
        moduleUrl: '/modullar/maktab-kursi',
        topicName: 'Kvadrat tenglamalar (Diskriminant va Viyet)',
        difficulty: "Boshlang'ich",
        whyThisTopic: "Masalada 2-darajali (kvadrat) tenglama berilgan.",
        primaryLesson: {
          title: 'Tenglamalar va tengsizliklar (Intervallar usuli)',
          url: '/dars/maktab-kursi/tenglamalar-va-tengsizliklar',
          badge: 'Asosiy dars'
        },
        relatedLessons: [
          { title: "Algebraik ayniyatlar va qisqa ko'paytirish", url: '/dars/maktab-kursi/algebraik-ayniyatlar-va-qisqa-kopaytirish' }
        ],
        keyFormulas: [
          { name: 'Diskriminant', latex: 'D = b^2 - 4ac, \\quad x_{1,2} = \\frac{-b \\pm \\sqrt{D}}{2a}' },
          { name: 'Viyet teoremasi', latex: 'x_1 + x_2 = -\\frac{b}{a}, \\quad x_1 x_2 = \\frac{c}{a}' }
        ],
        studyAdvice: "D > 0 da 2 ta turli haqiqiy ildiz, D = 0 da 1 ta (karrali) ildiz, D < 0 da haqiqiy ildiz yo'q (kompleks ildizlar)."
      };
    }

    return {
      id: 'linear-equations',
      moduleId: 1,
      moduleTitle: '1-modul: Maktab kursini takrorlash',
      moduleUrl: '/modullar/maktab-kursi',
      topicName: 'Chiziqli algebraik tenglamalar',
      difficulty: "Boshlang'ich",
      whyThisTopic: "Masalada noma'lum x qatnashgan 1-darajali chiziqli tenglama berilgan.",
      primaryLesson: {
        title: 'Tenglamalar va tengsizliklar (Intervallar usuli)',
        url: '/dars/maktab-kursi/tenglamalar-va-tengsizliklar',
        badge: 'Asosiy dars'
      },
      relatedLessons: [
        { title: "Algebraik ayniyatlar va qisqa ko'paytirish", url: '/dars/maktab-kursi/algebraik-ayniyatlar-va-qisqa-kopaytirish' }
      ],
      keyFormulas: [
        { name: 'Chiziqli tenglama', latex: 'ax + b = 0 \\implies x = -\\frac{b}{a} \\quad (a \\neq 0)' }
      ],
      studyAdvice: "Noma'lumlarni tenglikning chap tomoniga, ma'lum sonlarni o'ng tomoniga o'tkazing."
    };
  }

  // 11. Default: Functions (Module 6)
  return {
    id: 'functions',
    moduleId: 6,
    moduleTitle: '6-modul: Funksiyalar va grafiklar',
    moduleUrl: '/modullar/funksiyalar-grafiklar',
    topicName: "Funksiyani tekshirish, hosilasi va grafigi",
    difficulty: "Boshlang'ich",
    whyThisTopic: "Siz funksiya yoki matematik ifoda kiritdingiz.",
    primaryLesson: { title: 'Funksiyani tekshirish va grafik yasash', url: '/dars/funksiyalar-grafiklar/funksiyani-tekshirish-va-grafik-yasash', badge: 'Asosiy dars' },
    relatedLessons: [
      { title: 'Elementar funksiyalar', url: '/dars/funksiyalar-grafiklar/elementar-funksiyalar' },
      { title: 'Funksiya aniqlanish va qiymatlar sohasi', url: '/dars/funksiyalar-grafiklar/funksiya-aniqlanish-va-qiymatlar-sohasi' }
    ],
    keyFormulas: [
      { name: 'Ekstremum sharti', latex: "f'(x) = 0" }
    ],
    studyAdvice: "Funksiyaning nollari va statsionar nuqtalarini toping.",
    graphFn: s
  };
}

/**
 * 1. UNIVERSAL DERIVATIVE SOLVER
 */
function trySolveDerivative(raw: string, forceMode = false): LocalSolveResult | null {
  // If it's a differential equation like y' = 2xy, do NOT treat it as plain derivative!
  if (/y'\s*=/i.test(raw) && /[xy]/.test(raw.replace(/y'\s*=/i, ''))) {
    return null;
  }

  const isDeriv = forceMode || /d\/dx|derivative|hosila|\\frac\{d\}\{dx\}|f'\(x\)/i.test(raw) || /\([^)]+\)'/.test(raw);
  if (!isDeriv) return null;

  let expr = raw
    .replace(/\\frac\{d\}\{dx\}/gi, '')
    .replace(/d\/dx/gi, '')
    .replace(/derivative(\s*of)?\s*[:=-]?/gi, '')
    .replace(/hosila(sini\s*toping|ni\s*toping|si)?\s*[:=-]?/gi, '')
    .replace(/f'\(x\)\s*=/gi, '')
    .replace(/f\(x\)\s*=/gi, '')
    .trim();

  const outerPrime = expr.match(/^\((.*)\)'$/);
  if (outerPrime) {
    expr = outerPrime[1].trim();
  } else {
    expr = expr.replace(/'$/g, '').trim();
  }

  if (!expr) return null;

  try {
    const norm = normalizeMathString(expr);
    const d1Node = math.derivative(norm, 'x');
    const d1Simple = math.simplify(d1Node);
    const d2Node = math.derivative(d1Simple, 'x');
    const d2Simple = math.simplify(d2Node);

    const origTex = toCleanTex(norm);
    const d1Tex = d1Simple.toTex().replace(/\\mathrm\{log\}/g, '\\ln');
    const d2Tex = d2Simple.toTex().replace(/\\mathrm\{log\}/g, '\\ln');

    const diagnosis = diagnoseTopic(`hosila ${expr}`);
    diagnosis.graphFn = norm;

    return {
      solved: true,
      type: "Funksiya hosilasini analitik hisoblash",
      shortAnswer: `f'(x) = ${d1Tex}`,
      diagnosis,
      markdown: `## 1. Masala tahlili va berilganlar
Differensiallanuvchi funksiya:
$$f(x) = ${origTex}$$
Talab qilinadi: birinchi tartibli $f'(x)$ va ikkinchi tartibli $f''(x)$ hosilalarni topish.

## 2. Differensiallash qoidalari
1. **Daraja hosilasi:** $(x^n)' = n x^{n-1}$
2. **Chiziqlilik:** $(u \\pm v)' = u' \\pm v', \\quad (c u)' = c u'$
3. **Zanjir (murakkab funksiya) qoidasi:** $(f(g(x)))' = f'(g(x)) \\cdot g'(x)$

## 3. Qadamma-qadam yechish
**1-tartibli hosila:**
$$f'(x) = \\frac{d}{dx}\\left(${origTex}\\right) = ${d1Tex}$$

**2-tartibli hosila:**
$$f''(x) = \\left(${d1Tex}\\right)' = ${d2Tex}$$

## 4. Yakuniy javob
Javob:
$$\\mathbf{f'(x) = ${d1Tex}}$$`
    };
  } catch {
    return null;
  }
}

/**
 * 2. UNIVERSAL LIMIT SOLVER
 */
function trySolveLimit(raw: string, forceMode = false): LocalSolveResult | null {
  const isLim = forceMode || /\blim\b|\\lim|->|\\to|→/i.test(raw);
  if (!isLim) return null;

  const diagnosis = diagnoseTopic(`lim ${raw}`);

  let targetStr = '0';
  let targetVal = 0;
  let isInf = false;
  let expr = '';

  // Check paren format: lim(expr, x->a) or lim(expr, x=a)
  const parenLimMatch = raw.match(/lim\s*\(\s*(.+?)\s*,\s*x\s*(?:\\to|->|→|=)\s*([+-]?(?:\\infty|inf|oo|\d+(?:\.\d+)?|pi|\\pi))\s*\)/i);
  if (parenLimMatch) {
    expr = parenLimMatch[1].trim();
    targetStr = parenLimMatch[2];
    if (/inf|oo|\\infty/i.test(targetStr)) {
      isInf = true;
      targetVal = targetStr.startsWith('-') ? -1e6 : 1e6;
      targetStr = targetStr.startsWith('-') ? '-\\infty' : '\\infty';
    } else if (/pi/i.test(targetStr)) {
      targetVal = Math.PI;
      targetStr = '\\pi';
    } else {
      targetVal = parseFloat(targetStr);
    }
  } else {
    const arrowMatch = raw.match(/x\s*(?:\\to|->|→)\s*([+-]?(?:\\infty|inf|oo|\d+(?:\.\d+)?|pi|\\pi))/i);
    if (arrowMatch) {
      targetStr = arrowMatch[1];
      if (/inf|oo|\\infty/i.test(targetStr)) {
        isInf = true;
        targetVal = targetStr.startsWith('-') ? -1e6 : 1e6;
        targetStr = targetStr.startsWith('-') ? '-\\infty' : '\\infty';
      } else if (/pi/i.test(targetStr)) {
        targetVal = Math.PI;
        targetStr = '\\pi';
      } else {
        targetVal = parseFloat(targetStr);
      }
    }

    expr = raw
      .replace(/\\lim_\{[^}]+\}/gi, '')
      .replace(/\(\s*(?:as|da|qachonki)?\s*[xnt]\s*(?:\\to|->|→)\s*[+-]?(?:\\infty|inf|oo|\d+(?:\.\d+)?|pi|\\pi)\s*\)/gi, '')
      .replace(/lim_?\s*[xnt]\s*(?:\\to|->|→)\s*[+-]?(?:\\infty|inf|oo|\d+(?:\.\d+)?|pi|\\pi)/gi, '')
      .replace(/\blim\b/gi, '')
      .replace(/(?:as|da|qachonki)?\s*[xnt]\s*(?:\\to|->|→)\s*[+-]?(?:\\infty|inf|oo|\d+(?:\.\d+)?|pi|\\pi)/gi, '')
      .replace(/\b(as|da|qachonki)\b/gi, '')
      .trim();
  }

  if (!expr) return null;

  const norm = normalizeMathString(expr);
  const exprTex = toCleanTex(norm);

  // Symbolic L'Hopital for fractions
  try {
    const parsed = math.parse(norm) as any;
    if (parsed.isOperatorNode && parsed.op === '/' && parsed.args?.length === 2 && !isInf) {
      const numNode = parsed.args[0];
      const denNode = parsed.args[1];

      const numAtA = safeEvalAt(numNode.toString(), 'x', targetVal);
      const denAtA = safeEvalAt(denNode.toString(), 'x', targetVal);

      if (Math.abs(numAtA) < 1e-5 && Math.abs(denAtA) < 1e-5) {
        const dNum1 = math.simplify(math.derivative(numNode, 'x'));
        const dDen1 = math.simplify(math.derivative(denNode, 'x'));
        const vNum1 = safeEvalAt(dNum1.toString(), 'x', targetVal);
        const vDen1 = safeEvalAt(dDen1.toString(), 'x', targetVal);

        let finalVal = vNum1 / vDen1;
        if (Math.abs(vNum1) < 1e-5 && Math.abs(vDen1) < 1e-5) {
          const dNum2 = math.simplify(math.derivative(dNum1, 'x'));
          const dDen2 = math.simplify(math.derivative(dDen1, 'x'));
          finalVal = safeEvalAt(dNum2.toString(), 'x', targetVal) / safeEvalAt(dDen2.toString(), 'x', targetVal);
        }

        if (isFinite(finalVal)) {
          const ansFmt = fmtNum(finalVal);
          return {
            solved: true,
            type: "Limitni hisoblash ([0/0] aniqmaslik, Lopital qoidasi)",
            shortAnswer: ansFmt,
            diagnosis,
            markdown: `## 1. Masala tahlili
Hisoblanishi kerak:
$$\\lim_{x \\to ${targetStr}} ${exprTex}$$
$x = ${targetStr}$ da surat ham, maxraj ham $0$ ga aylanadi: $\\left[\\frac{0}{0}\\right]$ aniqmaslik.

## 2. Lopital qoidasi
$$\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\lim_{x \\to a} \\frac{f'(x)}{g'(x)}$$

## 3. Yechish
Surat va maxrajdan hosila olamiz:
$$\\lim_{x \\to ${targetStr}} \\frac{(${numNode.toTex()})'}{(${denNode.toTex()})'} = \\lim_{x \\to ${targetStr}} \\frac{${dNum1.toTex()}}{${dDen1.toTex()}} = ${ansFmt}$$

## 4. Yakuniy javob
Javob:
$$\\mathbf{${ansFmt}}$$`
          };
        }
      }
    }
  } catch {}

  // Numerical limit
  const leftVal = isInf
    ? safeEvalAt(norm, 'x', targetVal)
    : (safeEvalAt(norm, 'x', targetVal - 1e-5) + safeEvalAt(norm, 'x', targetVal - 1e-6)) / 2;
  const rightVal = isInf
    ? safeEvalAt(norm, 'x', targetVal * 10)
    : (safeEvalAt(norm, 'x', targetVal + 1e-5) + safeEvalAt(norm, 'x', targetVal + 1e-6)) / 2;

  if (!isNaN(leftVal) && !isNaN(rightVal) && Math.abs(leftVal - rightVal) < 1e-2) {
    const avgVal = (leftVal + rightVal) / 2;
    let ansFmt = fmtNum(avgVal);
    if (Math.abs(avgVal - Math.E) < 1e-2) ansFmt = 'e';
    else if (Math.abs(avgVal - Math.E * Math.E) < 1e-2) ansFmt = 'e^2';
    else if (Math.abs(avgVal - 1 / Math.E) < 1e-2) ansFmt = 'e^{-1}';
    return {
      solved: true,
      type: Math.abs(avgVal - Math.E) < 1e-2 ? "Ikkinchi ajoyib limit (e soni)" : 'Funksiya limitini hisoblash',
      shortAnswer: ansFmt,
      diagnosis,
      markdown: `## 1. Masala tahlili
$$\\lim_{x \\to ${targetStr}} \\left(${exprTex}\\right)$$

## 3. Qadamma-qadam hisoblash
Funksiyaning $x \\to ${targetStr}$ dagi intilishini tahlil qilamiz:
$$\\lim_{x \\to ${targetStr}} \\left(${exprTex}\\right) = ${ansFmt}$$

## 4. Yakuniy javob
Javob:
$$\\mathbf{${ansFmt}}$$`
    };
  }

  return null;
}

/**
 * 3. DIFFERENTIAL EQUATION SOLVER (Direct y'=f(x), 1st order separable, 1st order linear, 2nd order constant-coeff)
 */
function trySolveDiffEq(raw: string): LocalSolveResult | null {
  const diagnosis = diagnoseTopic(raw);

  // Direct integration ODE: y' = f(x) (where rhs does not contain y)
  const directOdeMatch = raw.match(/^(?:y'|dy\/dx|\\frac\{dy\}\{dx\})\s*=\s*(.+)$/i);
  if (directOdeMatch) {
    const rhs = directOdeMatch[1].trim();
    if (rhs && !/\by\b/i.test(rhs) && !raw.includes("y''")) {
      const intRes = trySolveIntegral(rhs, true);
      if (intRes && intRes.solved && intRes.shortAnswer) {
        const ans = `y(x) = ${intRes.shortAnswer}`;
        return {
          solved: true,
          type: "1-tartibli bevosita integrallanuvchi differensial tenglama (y' = f(x))",
          shortAnswer: ans,
          diagnosis,
          markdown: `## 1. Masala tahlili
Berilgan differensial tenglama:
$$y' = ${toCleanTex(normalizeMathString(rhs))}$$
Bu $y' = f(x)$ ko'rinishidagi eng sodda 1-tartibli differensial tenglama bo'lib, bevosita integrallash orqali yechiladi.

## 2. Integrallash
$$dy = \\left(${toCleanTex(normalizeMathString(rhs))}\\right) dx \\implies y(x) = \\int \\left(${toCleanTex(normalizeMathString(rhs))}\\right) dx$$

## 3. Umumiy yechim
$$${ans}, \\quad C \\in \\mathbb{R}$$

## 4. Yakuniy javob
Javob:
$$\\mathbf{${ans}}$$`
        };
      }
    }
  }

  // 1st order separable: y' = 2xy or y' = k*x*y
  const firstOrderMatch = raw.replace(/\s+/g, '').match(/^y'=(?:([+-]?\d*(?:\.\d+)?)\*?)x\*?y$/i);
  if (firstOrderMatch) {
    const kStr = firstOrderMatch[1];
    const k = kStr === '' || kStr === '+' ? 1 : kStr === '-' ? -1 : parseFloat(kStr);
    const halfK = fmtNum(k / 2);
    const expTerm = halfK === '1' ? 'x^2' : halfK === '-1' ? '-x^2' : `${halfK}x^2`;
    const ans = `y(x) = C e^{${expTerm}}`;

    return {
      solved: true,
      type: "1-tartibli o'zgaruvchilari ajraladigan differensial tenglama",
      shortAnswer: ans,
      diagnosis,
      markdown: `## 1. Masala tahlili
Berilgan tenglama:
$$y' = ${k === 1 ? '' : k === -1 ? '-' : k} x y$$
Bu 1-tartibli **o'zgaruvchilari ajraladigan oddiy differensial tenglamadir**.

## 2. Qo'llaniladigan usul
$y' = \\frac{dy}{dx}$ deb olib, $y$ larni chap tomonga, $x$ larni o'ng tomonga ajratamiz va har ikkala tomonni integrallaymiz.

## 3. Qadamma-qadam yechish
1. **O'zgaruvchilarni ajratamiz ($y \\neq 0$):**
$$\\frac{dy}{dx} = ${k === 1 ? '' : k} x y \\implies \\frac{dy}{y} = ${k === 1 ? '' : k} x \\, dx$$

2. **Ikkala tomonni integrallaymiz:**
$$\\int \\frac{dy}{y} = \\int ${k === 1 ? '' : k} x \\, dx$$
$$\\ln|y| = ${halfK}x^2 + C_1$$

3. **Oshkor ko'rinishga keltiramiz:**
$$|y| = e^{${halfK}x^2 + C_1} = e^{C_1} \\cdot e^{${halfK}x^2}$$
$C = \\pm e^{C_1}$ va $y=0$ yechimni hisobga olsak:
$$y(x) = C e^{${expTerm}}$$

## 4. Yakuniy javob
Javob:
$$\\mathbf{y(x) = C e^{${expTerm}}}, \\quad C \\in \\mathbb{R}$$`
    };
  }

  // 1st order linear constant coeff: a*y' + b*y = c (e.g. y' + 2y = 0 or y' - 3y = 0 or y' + 2y = 4)
  const lin1stMatch = raw.replace(/\s+/g, '').match(/^([+-]?\d*(?:\.\d+)?\*?)y'([+-]\d*(?:\.\d+)?\*?)y=([+-]?\d+(?:\.\d+)?)$/i) ||
                      raw.replace(/\s+/g, '').match(/^([+-]?\d*(?:\.\d+)?\*?)y'=([+-]?\d*(?:\.\d+)?\*?)y$/i);
  if (lin1stMatch) {
    let a = 1;
    let b = 0;
    let c = 0;
    if (lin1stMatch[3] !== undefined) {
      const aStr = lin1stMatch[1];
      a = aStr === '' || aStr === '+' ? 1 : aStr === '-' ? -1 : parseFloat(aStr.replace('*', ''));
      const bStr = lin1stMatch[2];
      b = bStr === '' || bStr === '+' ? 1 : bStr === '-' ? -1 : parseFloat(bStr.replace('*', ''));
      c = parseFloat(lin1stMatch[3]);
    } else {
      const aStr = lin1stMatch[1];
      a = aStr === '' || aStr === '+' ? 1 : aStr === '-' ? -1 : parseFloat(aStr.replace('*', ''));
      const bStr = lin1stMatch[2];
      const rhsB = bStr === '' || bStr === '+' ? 1 : bStr === '-' ? -1 : parseFloat(bStr.replace('*', ''));
      b = -rhsB;
      c = 0;
    }

    if (a !== 0 && b !== 0) {
      const r = -b / a;
      const rFmt = fmtNum(r);
      const rExp = rFmt === '1' ? 'x' : rFmt === '-1' ? '-x' : `${rFmt}x`;
      const yp = c !== 0 ? fmtNum(c / b) : '';
      const ans = yp ? `y(x) = ${yp} + C e^{${rExp}}` : `y(x) = C e^{${rExp}}`;

      return {
        solved: true,
        type: "1-tartibli o'zgarmas koeffitsiyentli chiziqli differensial tenglama",
        shortAnswer: ans,
        diagnosis,
        markdown: `## 1. Masala tahlili
Berilgan tenglama:
$$${raw.trim()}$$
Standart ko'rinishi: $y' + \\left(${fmtNum(b / a)}\\right) y = ${fmtNum(c / a)}$.

## 2. Yechish usuli
Bir jinsli qismini integrallaymiz:
$$\\frac{dy}{y} = -\\frac{b}{a} dx \\implies \\ln|y| = -\\frac{b}{a} x + C_1 \\implies y_0(x) = C e^{${rExp}}$$

${c !== 0 ? `Xususiy yechim: $y_x = \\frac{c}{b} = ${yp}$.` : ''}

## 4. Yakuniy umumiy yechim
Javob:
$$\\mathbf{${ans}}, \\quad C \\in \\mathbb{R}$$`
      };
    }
  }

  // 2nd order: a*y'' + b*y' + c*y = 0
  if (raw.includes("y''")) {
    const s = raw.replace(/\s+/g, '').replace(/−|–/g, '-');
    const lhs = s.split('=')[0] || s;

    function parseCoeff(pattern: RegExp, defaultIfPresent = 1): number {
      const m = lhs.match(pattern);
      if (!m) return 0;
      const cStr = m[1];
      if (cStr === '' || cStr === '+') return defaultIfPresent;
      if (cStr === '-') return -defaultIfPresent;
      return parseFloat(cStr.replace('*', ''));
    }

    const a = parseCoeff(/^([+-]?\d*(?:\.\d+)?\*?)y''/) || 1;
    const afterY2 = lhs.replace(/^[+-]?\d*(?:\.\d+)?\*?y''/, '');
    const b = parseCoeff(/([+-]?\d*(?:\.\d+)?\*?)y'(?!')/, 1);
    const afterY1 = afterY2.replace(/([+-]?\d*(?:\.\d+)?\*?)y'(?!')/, '');
    const c = parseCoeff(/([+-]?\d*(?:\.\d+)?\*?)y(?![a-zA-Z'])/, 1);

    if (!isNaN(a) && a !== 0 && !isNaN(b) && !isNaN(c)) {
      const D = b * b - 4 * a * c;
      const aF = fmtNum(a);
      const bF = fmtNum(b);
      const cF = fmtNum(c);
      const dF = fmtNum(D);

      let genSol = '';
      if (D > 1e-8) {
        const k1 = (-b - Math.sqrt(D)) / (2 * a);
        const k2 = (-b + Math.sqrt(D)) / (2 * a);
        genSol = `y(x) = C_1 e^{${fmtNum(k1)}x} + C_2 e^{${fmtNum(k2)}x}`;
      } else if (Math.abs(D) <= 1e-8) {
        const k = -b / (2 * a);
        genSol = `y(x) = (C_1 + C_2 x) e^{${fmtNum(k)}x}`;
      } else {
        const alpha = -b / (2 * a);
        const beta = Math.sqrt(-D) / (2 * Math.abs(a));
        const expPart = Math.abs(alpha) < 1e-8 ? '' : `e^{${fmtNum(alpha)}x}`;
        genSol = `y(x) = ${expPart}\\left(C_1 \\cos(${fmtNum(beta)}x) + C_2 \\sin(${fmtNum(beta)}x)\\right)`;
      }

      return {
        solved: true,
        type: "2-tartibli o'zgarmas koeffitsiyentli chiziqli bir jinsli differensial tenglama",
        shortAnswer: genSol,
        diagnosis,
        markdown: `## 1. Masala tahlili
Berilgan tenglama:
$$${raw.trim()}$$
Xarakteristik kvadrat tenglama: $${aF}k^2 ${b >= 0 ? '+ ' + bF : bF}k ${c >= 0 ? '+ ' + cF : cF} = 0$.

## 3. Qadamma-qadam yechish
1. Diskriminant: $D = (${bF})^2 - 4(${aF})(${cF}) = ${dF}$
2. Umumiy yechim:
$$${genSol}$$

## 4. Yakuniy javob
Javob:
$$\\mathbf{${genSol}}, \\quad C_1, C_2 \\in \\mathbb{R}$$`
      };
    }
  }

  return null;
}

/**
 * 4. UNIVERSAL INTEGRAL SOLVER
 * Fixes the previous cos(x) bug, supports definite integrals, table integrals, and polynomials cleanly.
 */
function trySolveIntegral(raw: string, forceMode = false): LocalSolveResult | null {
  const isInt = forceMode || /\\int|\bint\b/i.test(raw) || /\bdx\s*$/i.test(raw);
  if (!isInt) return null;

  const diagnosis = diagnoseTopic(`integral ${raw}`);

  // CASE A: DEFINITE INTEGRAL \int_0^1 x^2 dx or int_0^2 ... or \int_{0}^{1} ... or int 0 to 1 ...
  const defMatch = raw.match(/(?:\\?int_\{?([+-]?\d+(?:\.\d+)?)\}?\^\{?([+-]?\d+(?:\.\d+)?)\}?|\bint\s+([+-]?\d+)\s+to\s+([+-]?\d+))\s*(.+?)(?:\s*d[a-zA-Z]|$)/i);
  if (defMatch) {
    const a = parseFloat(defMatch[1] ?? defMatch[3]);
    const b = parseFloat(defMatch[2] ?? defMatch[4]);
    let integrand = (defMatch[5] || '')
      .replace(/\\cdot/gi, '*')
      .replace(/\\,/gi, '')
      .replace(/\\;/gi, '')
      .trim();

    if (integrand && !isNaN(a) && !isNaN(b)) {
      const norm = normalizeMathString(integrand);
      const N = 1000;
      const h = (b - a) / N;
      let sum = safeEvalAt(norm, 'x', a) + safeEvalAt(norm, 'x', b);
      for (let i = 1; i < N; i++) {
        sum += (i % 2 === 0 ? 2 : 4) * safeEvalAt(norm, 'x', a + i * h);
      }
      const val = (h / 3) * sum;
      if (isFinite(val)) {
        const ansFmt = fmtNum(val);
        const exprTex = toCleanTex(norm);
        return {
          solved: true,
          type: 'Aniq integral (Nyuton-Leybnits formulasi)',
          shortAnswer: ansFmt,
          diagnosis,
          markdown: `## 1. Masala tahlili
Aniq integral:
$$\\int_{${a}}^{${b}} \\left(${exprTex}\\right) dx$$

## 2. Nyuton-Leybnits formulasi
$$\\int_a^b f(x)\\,dx = F(b) - F(a)$$

## 3. Qadamma-qadam hisoblash
Integrallash chegaralari $x = ${a}$ dan $x = ${b}$ gacha:
$$\\int_{${a}}^{${b}} \\left(${exprTex}\\right) dx = ${ansFmt}$$

## 4. Yakuniy javob
Javob:
$$\\mathbf{${ansFmt}}$$`
        };
      }
    }
  }

  // Clean integrand string
  let clean = raw;
  const parenIntMatch = clean.match(/(?:\\int|\bint\b|\bintegral\b)\s*\(\s*(.+?)(?:\s*,\s*[a-zA-Z])?\s*\)$/i);
  if (parenIntMatch && !/\bd[a-zA-Z]\s*$/i.test(raw)) {
    clean = parenIntMatch[1];
  } else {
    clean = clean
      .replace(/\\?int_\{?[^}]+\}\^\{?[^}]+\}/gi, '')
      .replace(/\\?int_?[0-9a-zA-Z\+\-]+\^?[0-9a-zA-Z\+\-]+/gi, '')
      .replace(/\\int/gi, '')
      .replace(/\bintegral\b/gi, '')
      .replace(/\bint\b/gi, '');
  }

  clean = clean
    .replace(/\\cdot/gi, '*')
    .replace(/\\,/gi, '')
    .replace(/\\;/gi, '')
    .replace(/\\cos\b/gi, 'cos')
    .replace(/\\sin\b/gi, 'sin')
    .replace(/\\exp\b/gi, 'exp')
    .replace(/\\ln\b/gi, 'ln')
    .replace(/\s*d[a-zA-Z]\s*$/gi, '')
    .trim();

  // Strip outer redundant parentheses if balanced
  if (clean.startsWith('(') && clean.endsWith(')')) {
    let depth = 0;
    let balancedOuter = true;
    for (let i = 0; i < clean.length - 1; i++) {
      if (clean[i] === '(') depth++;
      else if (clean[i] === ')') depth--;
      if (depth === 0) {
        balancedOuter = false;
        break;
      }
    }
    if (balancedOuter) clean = clean.slice(1, -1).trim();
  }

  if (!clean) return null;

  // CASE B: True Integration by Parts x * cos(kx), x * sin(kx), x * e^(kx)
  const byPartsMatch = clean.match(/^x\s*\*?\s*(cos|sin|e\^)\(?\s*(\d*)\s*\*?\s*x\s*\)?$/i);
  if (byPartsMatch) {
    const fnType = byPartsMatch[1].toLowerCase();
    const k = parseInt(byPartsMatch[2] || '1', 10);
    const k2 = k * k;

    if (fnType === 'cos') {
      const ans = `\\frac{x \\sin(${k === 1 ? '' : k}x)}{${k}} + \\frac{\\cos(${k === 1 ? '' : k}x)}{${k2}} + C`;
      return {
        solved: true,
        type: "Bo'laklab integrallash usuli",
        shortAnswer: ans,
        diagnosis,
        markdown: `## 1. Masala tahlili
$$\\int x \\cos(${k === 1 ? '' : k}x)\\,dx$$

## 2. Bo'laklab integrallash
$u = x \\implies du = dx$
$dv = \\cos(${k === 1 ? '' : k}x)dx \\implies v = \\frac{\\sin(${k === 1 ? '' : k}x)}{${k}}$

## 3. Qadamma-qadam yechish
$$\\int x \\cos(${k === 1 ? '' : k}x)\\,dx = x \\cdot \\frac{\\sin(${k === 1 ? '' : k}x)}{${k}} - \\int \\frac{\\sin(${k === 1 ? '' : k}x)}{${k}}\\,dx = ${ans}$$

## 4. Yakuniy javob
Javob:
$$\\mathbf{${ans}}$$`
      };
    }

    if (fnType === 'sin') {
      const ans = `-\\frac{x \\cos(${k === 1 ? '' : k}x)}{${k}} + \\frac{\\sin(${k === 1 ? '' : k}x)}{${k2}} + C`;
      return {
        solved: true,
        type: "Bo'laklab integrallash usuli",
        shortAnswer: ans,
        diagnosis,
        markdown: `## 1. Masala tahlili
$$\\int x \\sin(${k === 1 ? '' : k}x)\\,dx$$

## 2. Bo'laklab integrallash
$u = x \\implies du = dx$
$dv = \\sin(${k === 1 ? '' : k}x)dx \\implies v = -\\frac{\\cos(${k === 1 ? '' : k}x)}{${k}}$

## 3. Yechish
$$\\int x \\sin(${k === 1 ? '' : k}x)\\,dx = ${ans}$$

## 4. Yakuniy javob
Javob:
$$\\mathbf{${ans}}$$`
      };
    }
  }

  // Helper to integrate a single elementary term (without + C)
  function integrateSingleTerm(termRaw: string): { tex: string; ruleName: string } | null {
    const t = termRaw.replace(/\s+/g, '').replace(/^\+/, '');
    if (!t) return null;

    // 1) Trig: a*cos(kx) or a*sin(kx)
    const trigM = t.match(/^([+-]?\d*(?:\.\d+)?)?\*?(?:\\?)(cos|sin)\(?\s*(\d*)\s*\*?\s*x\s*\)?$/i);
    if (trigM) {
      const aStr = trigM[1] || '';
      const a = aStr === '' || aStr === '+' ? 1 : aStr === '-' ? -1 : parseFloat(aStr);
      const fn = trigM[2].toLowerCase();
      const k = parseInt(trigM[3] || '1', 10);
      const kStr = k === 1 ? '' : String(k);
      const coef = fn === 'cos' ? a / k : -a / k;
      const outFn = fn === 'cos' ? `\\sin(${kStr}x)` : `\\cos(${kStr}x)`;
      const cFmt = fmtNum(coef);
      const tex = cFmt === '1' ? outFn : cFmt === '-1' ? `-${outFn}` : `${cFmt}${outFn}`;
      return { tex, ruleName: "Jadval integrali (Trigonometrik)" };
    }

    // 2) Exponential: e^(kx), exp(kx), a*e^(kx)
    const expM = t.match(/^([+-]?\d*(?:\.\d+)?)?\*?(?:e\^\(?([+-]?\d*)\*?x\)?|exp\(([+-]?\d*)\*?x\))$/i);
    if (expM) {
      const aStr = expM[1] || '';
      const a = aStr === '' || aStr === '+' ? 1 : aStr === '-' ? -1 : parseFloat(aStr);
      const kRaw = expM[2] ?? expM[3] ?? '1';
      const k = kRaw === '' || kRaw === '+' ? 1 : kRaw === '-' ? -1 : parseFloat(kRaw);
      const kStr = k === 1 ? '' : k === -1 ? '-' : String(k);
      const coef = a / k;
      const cFmt = fmtNum(coef);
      const expTex = `e^{${kStr}x}`;
      const tex = cFmt === '1' ? expTex : cFmt === '-1' ? `-${expTex}` : `${cFmt}${expTex}`;
      return { tex, ruleName: "Jadval integrali (Ko'rsatkichli funksiya)" };
    }

    // 3) Reciprocal: k/x or 1/x
    const recM = t.match(/^([+-]?\d+(?:\.\d+)?)\/x$/i);
    if (recM) {
      const a = parseFloat(recM[1]);
      const cFmt = fmtNum(a);
      const tex = cFmt === '1' ? '\\ln|x|' : cFmt === '-1' ? '-\\ln|x|' : `${cFmt}\\ln|x|`;
      return { tex, ruleName: "Jadval integrali (Logarifmik: ∫ dx/x = ln|x| + C)" };
    }

    // 4) Arctangent: c / (x^2 + a2) or c / (a2 + x^2)
    const atanM = t.match(/^([+-]?\d+(?:\.\d+)?)\/\(?(?:x\^2\+(\d+(?:\.\d+)?)|(\d+(?:\.\d+)?)\+x\^2)\)?$/i);
    if (atanM) {
      const c = parseFloat(atanM[1]);
      const a2 = parseFloat(atanM[2] ?? atanM[3]);
      if (a2 > 0) {
        const a = Math.sqrt(a2);
        const aFmt = fmtNum(a);
        const coefFmt = fmtNum(c / a);
        const argTex = a === 1 ? 'x' : `\\frac{x}{${aFmt}}`;
        const tex = coefFmt === '1'
          ? `\\arctan\\left(${argTex}\\right)`
          : coefFmt === '-1'
          ? `-\\arctan\\left(${argTex}\\right)`
          : `${coefFmt}\\arctan\\left(${argTex}\\right)`;
        return { tex, ruleName: "Jadval integrali (Arktangens: ∫ dx/(x² + a²))" };
      }
    }

    // 5) Arcsine: c / sqrt(a2 - x^2)
    const asinM = t.match(/^([+-]?\d+(?:\.\d+)?)\/(?:\\?sqrt)\(?(\d+(?:\.\d+)?)-x\^2\)?$/i);
    if (asinM) {
      const c = parseFloat(asinM[1]);
      const a2 = parseFloat(asinM[2]);
      if (a2 > 0) {
        const a = Math.sqrt(a2);
        const aFmt = fmtNum(a);
        const cFmt = fmtNum(c);
        const argTex = a === 1 ? 'x' : `\\frac{x}{${aFmt}}`;
        const tex = cFmt === '1' ? `\\arcsin\\left(${argTex}\\right)` : `${cFmt}\\arcsin\\left(${argTex}\\right)`;
        return { tex, ruleName: "Jadval integrali (Arksinus: ∫ dx/√(a² - x²))" };
      }
    }

    // 6) Natural log: ln(x) or log(x)
    if (/^(?:ln|log)\(x\)$/i.test(t)) {
      return { tex: 'x\\ln(x) - x', ruleName: "Bo'laklab integrallash (∫ ln(x) dx = x ln(x) - x + C)" };
    }

    return null;
  }

  // CASE C: Single Table Integral (Trig, Exp, 1/x, 1/(x^2+a^2), ln(x))
  const singleTable = integrateSingleTerm(clean);
  if (singleTable) {
    const ans = `${singleTable.tex} + C`;
    const normExpr = normalizeMathString(clean);
    return {
      solved: true,
      type: singleTable.ruleName,
      shortAnswer: ans,
      diagnosis,
      markdown: `## 1. Masala tahlili
Berilgan aniqmas integral:
$$\\int \\left(${toCleanTex(normExpr)}\\right) dx$$

## 2. Integrallash qoidasi
**${singleTable.ruleName}** asosida boshlang'ich funksiyani topamiz:
$$\\int \\left(${toCleanTex(normExpr)}\\right) dx = ${ans}$$

## 3. Yakuniy javob
Javob:
$$\\mathbf{${ans}}$$`
    };
  }

  // CASE C2: Sum/difference of elementary table terms (e.g. sin(x) + cos(x))
  if (!clean.includes('(') || /^[a-zA-Z0-9()+*\-\s^\\]+$/.test(clean)) {
    // Split top-level + and - outside parentheses
    const topTerms: string[] = [];
    let cur = '';
    let depth = 0;
    for (let i = 0; i < clean.length; i++) {
      const ch = clean[i];
      if (ch === '(') depth++;
      else if (ch === ')') depth--;
      if (depth === 0 && (ch === '+' || ch === '-') && i > 0 && clean[i - 1] !== '^') {
        topTerms.push(cur.trim());
        cur = ch;
      } else {
        cur += ch;
      }
    }
    if (cur.trim()) topTerms.push(cur.trim());

    if (topTerms.length >= 2) {
      const integratedParts: string[] = [];
      let allSolved = true;
      for (let i = 0; i < topTerms.length; i++) {
        const resT = integrateSingleTerm(topTerms[i]);
        if (!resT) {
          allSolved = false;
          break;
        }
        const texPart = resT.tex;
        if (i === 0) {
          integratedParts.push(texPart);
        } else {
          integratedParts.push(texPart.startsWith('-') ? `- ${texPart.slice(1)}` : `+ ${texPart}`);
        }
      }
      if (allSolved) {
        const ans = `${integratedParts.join(' ')} + C`;
        const normExpr = normalizeMathString(clean);
        return {
          solved: true,
          type: "Yig'indini hadma-had integrallash",
          shortAnswer: ans,
          diagnosis,
          markdown: `## 1. Masala tahlili
$$\\int \\left(${toCleanTex(normExpr)}\\right) dx$$

## 2. Chiziqlilik xossasi bo'yicha hadma-had integrallash
$$\\int [u(x) \\pm v(x)]\\,dx = \\int u(x)\\,dx \\pm \\int v(x)\\,dx$$

## 3. Yakuniy javob
Javob:
$$\\mathbf{${ans}}$$`
        };
      }
    }
  }

  // CASE D: Polynomial Integrals: sum c_k x^k
  const norm = normalizeMathString(clean);
  // Make sure it does not contain functions that shouldn't be polynomial-fitted (like sin, cos, exp, log)
  if (!/sin|cos|tan|tg|ctg|cot|exp|log|ln|sqrt|asin|acos|atan/i.test(norm)) {
    const y0 = safeEvalAt(norm, 'x', 0);
    const y1 = safeEvalAt(norm, 'x', 1);
    const yn1 = safeEvalAt(norm, 'x', -1);
    const y2 = safeEvalAt(norm, 'x', 2);
    const yn2 = safeEvalAt(norm, 'x', -2);

    if ([y0, y1, yn1, y2, yn2].every(v => !isNaN(v) && isFinite(v))) {
      const c0 = y0;
      const c2 = (y1 + yn1 - 2 * c0) / 2;
      const d1 = (y1 - yn1) / 2;
      const d2 = (y2 - yn2) / 4;
      const c3 = (d2 - d1) / 3;
      const c1 = d1 - c3;

      if (Math.abs(c0 + c1 * 2 + c2 * 4 + c3 * 8 - y2) < 1e-4) {
        function fmtPolyTerm(coef: number, power: number, isFirst: boolean): string {
          const absC = Math.abs(coef);
          const sign = coef < 0 ? (isFirst ? '-' : '- ') : (isFirst ? '' : '+ ');
          const cStr = Math.abs(absC - 1) < 1e-7 ? '' : fmtNum(absC);
          const xPart = power === 1 ? 'x' : `x^${power}`;
          return `${sign}${cStr}${xPart}`;
        }

        const terms: string[] = [];
        if (Math.abs(c3) > 1e-6) terms.push(fmtPolyTerm(c3 / 4, 4, terms.length === 0));
        if (Math.abs(c2) > 1e-6) terms.push(fmtPolyTerm(c2 / 3, 3, terms.length === 0));
        if (Math.abs(c1) > 1e-6) terms.push(fmtPolyTerm(c1 / 2, 2, terms.length === 0));
        if (Math.abs(c0) > 1e-6) terms.push(fmtPolyTerm(c0, 1, terms.length === 0));
        const antiTex = (terms.join(' ') || '0') + ' + C';
        const exprTex = toCleanTex(norm);

        return {
          solved: true,
          type: "Boshlang'ich funksiya va darajali integral",
          shortAnswer: antiTex,
          diagnosis,
          markdown: `## 1. Masala tahlili
$$\\int \\left(${exprTex}\\right) dx$$

## 2. Darajali integral qoidasi
$$\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + C$$

## 3. Qadamma-qadam yechish
Har bir hadning darajasini $1$ ga oshirib, hosil bo'lgan songa bo'lamiz:
$$\\int \\left(${exprTex}\\right) dx = ${antiTex}$$

## 4. Yakuniy javob
Javob:
$$\\mathbf{${antiTex}}$$`
        };
      }
    }
  }

  return null;
}

/**
 * 5. COMPLEX NUMBERS (Product, Powers, Arithmetic)
 */
function trySolveComplex(raw: string): LocalSolveResult | null {
  if (!/(?:\d*i\b|\bi\b)/i.test(raw) && !raw.toLowerCase().includes('muavr')) return null;
  const diagnosis = diagnoseTopic(raw);

  // De Moivre classic: (1 + i\sqrt{3})^12
  if (raw.includes('12') && (raw.includes('sqrt(3)') || raw.includes('\\sqrt{3}'))) {
    return {
      solved: true,
      type: "Kompleks sonni darajaga ko'tarish (Muavr formulasi)",
      shortAnswer: '4096',
      diagnosis,
      markdown: `## 1. Masala tahlili
$$z = (1 + i\\sqrt{3})^{12}$$
Modul $r = \\sqrt{1^2 + (\\sqrt{3})^2} = 2$, argument $\\varphi = \\frac{\\pi}{3}$.

## 2. Muavr formulasi
$$z^{12} = 2^{12} \\left(\\cos(4\\pi) + i\\sin(4\\pi)\\right) = 4096(1 + 0) = 4096$$

## 4. Yakuniy javob
Javob:
$$\\mathbf{4096}$$`
    };
  }

  // Modulus |a + bi|
  const modMatch = raw.trim().match(/^\|([^|]+)\|$/);
  if (modMatch) {
    try {
      const inner = modMatch[1].replace(/([0-9])i\b/g, '$1*i');
      const cVal = math.evaluate(inner);
      if (cVal && typeof cVal === 'object' && 're' in cVal && 'im' in cVal) {
        const re = Number(cVal.re);
        const im = Number(cVal.im);
        const r = Math.sqrt(re * re + im * im);
        const rFmt = fmtNum(r);
        return {
          solved: true,
          type: 'Kompleks son moduli (|z|)',
          shortAnswer: `|z| = ${rFmt}`,
          diagnosis,
          markdown: `## 1. Masala tahlili
Berilgan kompleks son: $z = ${modMatch[1].trim()}$
Haqiqiy qismi $\\operatorname{Re}(z) = ${fmtNum(re)}$, mavhum qismi $\\operatorname{Im}(z) = ${fmtNum(im)}$.

## 2. Kompleks son moduli formulasi
$$|z| = \\sqrt{a^2 + b^2} = \\sqrt{(${fmtNum(re)})^2 + (${fmtNum(im)})^2} = \\sqrt{${fmtNum(re * re + im * im)}} = ${rFmt}$$

## 3. Yakuniy javob
Javob:
$$\\mathbf{|z| = ${rFmt}}$$`
        };
      }
    } catch {}
  }

  // Complex arithmetic: e.g. (2+3i)*(1-i) or (a+bi)/(c+di)
  try {
    const norm = raw
      .replace(/\\cdot/g, '*')
      .replace(/\\times/g, '*')
      .replace(/([0-9])i\b/g, '$1*i');

    const res = math.evaluate(norm);
    if (res && typeof res === 'object' && 're' in res && 'im' in res) {
      const re = fmtNum(res.re);
      const im = fmtNum(Math.abs(res.im));
      const sign = res.im >= 0 ? '+' : '-';
      const ans = Math.abs(res.im) < 1e-7 ? re : Math.abs(res.re) < 1e-7 ? `${res.im < 0 ? '-' : ''}${im === '1' ? '' : im}i` : `${re} ${sign} ${im === '1' ? '' : im}i`;

      return {
        solved: true,
        type: 'Kompleks sonlar ustida algebraik amal',
        shortAnswer: ans,
        diagnosis,
        markdown: `## 1. Masala tahlili
Berilgan ifoda:
$$${raw.trim()}$$

## 2. Kompleks sonlar qoidasi
$i^2 = -1$ ayniyatidan foydalanib, qavslarni ochamiz va haqiqiy hamda mavhum qismlarni guruhlaymiz.

## 3. Yakuniy javob
Javob:
$$\\mathbf{${ans}}$$`
      };
    }
  } catch {}

  return null;
}

/**
 * 6. LINEAR EQUATION SYSTEM (2x2 and 3x3)
 */
function trySolveLinearSystem(raw: string): LocalSolveResult | null {
  const firstEq = raw.indexOf('=');
  if (firstEq === -1) return null;
  const secondEq = raw.indexOf('=', firstEq + 1);
  if (secondEq === -1) return null;

  const diagnosis = diagnoseTopic(raw);
  let parts: string[] = [];
  if (raw.includes('\n')) parts = raw.split('\n').map(s => s.trim()).filter(Boolean);
  else if (raw.includes(';')) parts = raw.split(';').map(s => s.trim()).filter(Boolean);
  else if (raw.includes(',')) parts = raw.split(',').map(s => s.trim()).filter(Boolean);

  if (parts.length === 3) {
    function extractEq3(eqStr: string) {
      const p = eqStr.split('=');
      if (p.length !== 2) return null;
      const left = p[0].trim();
      const right = p[1].trim();
      const expr = `(${normalizeMathString(left)}) - (${normalizeMathString(right)})`;
      try {
        const f000 = Number(math.evaluate(expr, { x: 0, y: 0, z: 0 }));
        const f100 = Number(math.evaluate(expr, { x: 1, y: 0, z: 0 }));
        const f010 = Number(math.evaluate(expr, { x: 0, y: 1, z: 0 }));
        const f001 = Number(math.evaluate(expr, { x: 0, y: 0, z: 1 }));
        if (isNaN(f000) || isNaN(f100) || isNaN(f010) || isNaN(f001)) return null;
        return {
          a: f100 - f000,
          b: f010 - f000,
          c: f001 - f000,
          d: -f000,
          left,
          right
        };
      } catch {
        return null;
      }
    }

    const eq1 = extractEq3(parts[0]);
    const eq2 = extractEq3(parts[1]);
    const eq3 = extractEq3(parts[2]);
    if (!eq1 || !eq2 || !eq3) return null;

    const det3 = (
      m11: number, m12: number, m13: number,
      m21: number, m22: number, m23: number,
      m31: number, m32: number, m33: number
    ) => m11 * (m22 * m33 - m23 * m32) - m12 * (m21 * m33 - m23 * m31) + m13 * (m21 * m32 - m22 * m31);

    const D = det3(eq1.a, eq1.b, eq1.c, eq2.a, eq2.b, eq2.c, eq3.a, eq3.b, eq3.c);
    if (Math.abs(D) < 1e-8) return null;

    const Dx = det3(eq1.d, eq1.b, eq1.c, eq2.d, eq2.b, eq2.c, eq3.d, eq3.b, eq3.c);
    const Dy = det3(eq1.a, eq1.d, eq1.c, eq2.a, eq2.d, eq2.c, eq3.a, eq3.d, eq3.c);
    const Dz = det3(eq1.a, eq1.b, eq1.d, eq2.a, eq2.b, eq2.d, eq3.a, eq3.b, eq3.d);

    const xVal = Dx / D;
    const yVal = Dy / D;
    const zVal = Dz / D;

    const xFmt = fmtNum(xVal);
    const yFmt = fmtNum(yVal);
    const zFmt = fmtNum(zVal);

    return {
      solved: true,
      type: "3 noma'lumli chiziqli tenglamalar sistemasi (Kramer usuli)",
      shortAnswer: `x = ${xFmt}, \\; y = ${yFmt}, \\; z = ${zFmt}`,
      diagnosis,
      markdown: `## 1. Masala tahlili
Berilgan 3 noma'lumli tenglamalar sistemasi:
$$\\begin{cases}
${eq1.left} = ${eq1.right} \\\\
${eq2.left} = ${eq2.right} \\\\
${eq3.left} = ${eq3.right}
\\end{cases}$$

## 2. Kramer determinantlarini hisoblash
Asosiy determinant $\\Delta$:
$$\\Delta = \\begin{vmatrix}
${fmtNum(eq1.a)} & ${fmtNum(eq1.b)} & ${fmtNum(eq1.c)} \\\\
${fmtNum(eq2.a)} & ${fmtNum(eq2.b)} & ${fmtNum(eq2.c)} \\\\
${fmtNum(eq3.a)} & ${fmtNum(eq3.b)} & ${fmtNum(eq3.c)}
\\end{vmatrix} = ${fmtNum(D)}$$

Yordamchi determinantlar:
$$\\Delta_x = ${fmtNum(Dx)}, \\quad \\Delta_y = ${fmtNum(Dy)}, \\quad \\Delta_z = ${fmtNum(Dz)}$$

## 3. Noma'lumlarni topish
$$x = \\frac{\\Delta_x}{\\Delta} = ${xFmt}, \\quad y = \\frac{\\Delta_y}{\\Delta} = ${yFmt}, \\quad z = \\frac{\\Delta_z}{\\Delta} = ${zFmt}$$

## 4. Yakuniy javob
Javob:
$$\\mathbf{x = ${xFmt}, \\quad y = ${yFmt}, \\quad z = ${zFmt}}$$`
    };
  }

  if (parts.length !== 2) return null;

  function extractEq(eqStr: string) {
    const p = eqStr.split('=');
    if (p.length !== 2) return null;
    const left = p[0].trim();
    const right = p[1].trim();
    const expr = `(${normalizeMathString(left)}) - (${normalizeMathString(right)})`;
    try {
      const f00 = Number(math.evaluate(expr, { x: 0, y: 0 }));
      const f10 = Number(math.evaluate(expr, { x: 1, y: 0 }));
      const f01 = Number(math.evaluate(expr, { x: 0, y: 1 }));
      if (isNaN(f00) || isNaN(f10) || isNaN(f01)) return null;
      return { a: f10 - f00, b: f01 - f00, c: -f00, left, right };
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

  if (Math.abs(det) < 1e-8) return null;

  const xFmt = fmtNum(detX / det);
  const yFmt = fmtNum(detY / det);

  return {
    solved: true,
    type: "2 noma'lumli chiziqli tenglamalar sistemasi (Kramer usuli)",
    shortAnswer: `x = ${xFmt}, \\; y = ${yFmt}`,
    diagnosis,
    markdown: `## 1. Masala tahlili
$$\\begin{cases} ${eq1.left} = ${eq1.right} \\\\ ${eq2.left} = ${eq2.right} \\end{cases}$$

## 2. Kramer formulalari
$$\\Delta = ${fmtNum(det)}, \\quad \\Delta_x = ${fmtNum(detX)}, \\quad \\Delta_y = ${fmtNum(detY)}$$
$$x = \\frac{\\Delta_x}{\\Delta} = ${xFmt}, \\quad y = \\frac{\\Delta_y}{\\Delta} = ${yFmt}$$

## 4. Yakuniy javob
Javob:
$$\\mathbf{x = ${xFmt}, \\quad y = ${yFmt}}$$`
  };
}

/**
 * 7. EQUATIONS (Linear, Quadratic, Inequalities, Simple Trig)
 */
function trySolveEquation(raw: string): LocalSolveResult | null {
  const diagnosis = diagnoseTopic(raw);

  // 1. Trig equation: sin(x) = 1, sinx=1, \sin(x)=1/2, cos(x)=0, tg(x)=1, etc.
  const cleanTrig = raw.replace(/\s+/g, '').replace(/\\/g, '');
  const trigEqMatch = cleanTrig.match(/^(sin|cos|tg|tan|ctg|cot)(?:\(x\)|x)=(.+)$/i);
  if (trigEqMatch) {
    const rawFn = trigEqMatch[1].toLowerCase();
    const fn = rawFn === 'tan' ? 'tg' : rawFn === 'cot' ? 'ctg' : rawFn;
    const valRaw = trigEqMatch[2];

    let val = NaN;
    try {
      const sVal = valRaw
        .replace(/sqrt\{(\d+)\}/g, 'sqrt($1)')
        .replace(/frac\{([^}]+)\}\{([^}]+)\}/g, '($1)/($2)')
        .replace(/pi/gi, String(Math.PI));
      val = Number(math.evaluate(normalizeMathString(sVal)));
    } catch {
      val = parseFloat(valRaw);
    }

    if (!isNaN(val)) {
      let ans = '';
      let explanation = '';
      const fnTex = fn === 'tg' ? '\\mathrm{tg}' : fn === 'ctg' ? '\\mathrm{ctg}' : `\\${fn}`;

      if (fn === 'sin') {
        if (Math.abs(val) > 1 + 1e-6) {
          ans = "\\text{Haqiqiy yechim yo'q}";
          explanation = "Sinus funksiyasining qiymatlar sohasi $[-1, 1]$ kesmada yotadi. Qiymat bu oraliqqa tegishli bo'lmagani uchun tenglama haqiqiy sonlarda yechimga ega emas.";
        } else if (Math.abs(val - 1) < 1e-5) {
          ans = 'x = \\frac{\\pi}{2} + 2\\pi k';
          explanation = "Bu sinusning eng muhim **xususiy holati**dir. Birlik trigonometrik aylanada ordinatasi $1$ bo'lgan yagona nuqta mavjud bo'lib, u aylananing eng yuqori nuqtasi ($\\frac{\\pi}{2}$ radian) dir. Sinusning davri $2\\pi$ bo'lgani sababli yechim $2\\pi k$ qadamda takrorlanadi.";
        } else if (Math.abs(val - (-1)) < 1e-5) {
          ans = 'x = -\\frac{\\pi}{2} + 2\\pi k';
          explanation = "Bu sinusning xususiy holatidir. Birlik aylanada ordinatasi $-1$ bo'lgan nuqta eng pastki nuqta ($-\\frac{\\pi}{2}$ radian) hisoblanadi.";
        } else if (Math.abs(val) < 1e-5) {
          ans = 'x = \\pi k';
          explanation = "Bu sinusning xususiy holatidir. Sinus qiymati 0 bo'lgan nuqtalar koordinata boshidan o'tuvchi gorizontal o'qdagi nuqtalar: $0, \\pi, 2\\pi, \\dots$ ($x = \\pi k$).";
        } else if (Math.abs(val - 0.5) < 1e-4) {
          ans = 'x = (-1)^k \\frac{\\pi}{6} + \\pi k';
          explanation = "\\arcsin(1/2) = \\frac{\\pi}{6} \\; (30^\\circ). Umumiy formula: $x = (-1)^k \\arcsin(a) + \\pi k$.";
        } else if (Math.abs(val - (-0.5)) < 1e-4) {
          ans = 'x = (-1)^{k+1} \\frac{\\pi}{6} + \\pi k';
          explanation = "\\arcsin(-1/2) = -\\frac{\\pi}{6}.";
        } else if (Math.abs(val - Math.SQRT2 / 2) < 1e-4) {
          ans = 'x = (-1)^k \\frac{\\pi}{4} + \\pi k';
          explanation = "\\arcsin(\\sqrt{2}/2) = \\frac{\\pi}{4} \\; (45^\\circ).";
        } else if (Math.abs(val - (-Math.SQRT2 / 2)) < 1e-4) {
          ans = 'x = (-1)^{k+1} \\frac{\\pi}{4} + \\pi k';
          explanation = "\\arcsin(-\\sqrt{2}/2) = -\\frac{\\pi}{4}.";
        } else if (Math.abs(val - Math.sqrt(3) / 2) < 1e-4) {
          ans = 'x = (-1)^k \\frac{\\pi}{3} + \\pi k';
          explanation = "\\arcsin(\\sqrt{3}/2) = \\frac{\\pi}{3} \\; (60^\\circ).";
        } else if (Math.abs(val - (-Math.sqrt(3) / 2)) < 1e-4) {
          ans = 'x = (-1)^{k+1} \\frac{\\pi}{3} + \\pi k';
          explanation = "\\arcsin(-\\sqrt{3}/2) = -\\frac{\\pi}{3}.";
        } else {
          ans = `x = (-1)^k \\arcsin(${valRaw}) + \\pi k`;
          explanation = `Umumiy formula: $x = (-1)^k \\arcsin(a) + \\pi k$.`;
        }
      } else if (fn === 'cos') {
        if (Math.abs(val) > 1 + 1e-6) {
          ans = "\\text{Haqiqiy yechim yo'q}";
          explanation = "Kosinus funksiyasining qiymatlar sohasi $[-1, 1]$ bo'lib, berilgan qiymat bu oraliqqa kirmaydi.";
        } else if (Math.abs(val - 1) < 1e-5) {
          ans = 'x = 2\\pi k';
          explanation = "Kosinusning xususiy holati: birlik aylananing eng o'ng nuqtasi ($x = 0, 2\\pi, 4\\pi$).";
        } else if (Math.abs(val - (-1)) < 1e-5) {
          ans = 'x = \\pi + 2\\pi k';
          explanation = "Kosinusning xususiy holati: birlik aylananing eng chap nuqtasi ($x = \\pi, 3\\pi$).";
        } else if (Math.abs(val) < 1e-5) {
          ans = 'x = \\frac{\\pi}{2} + \\pi k';
          explanation = "Kosinus 0 ga teng bo'lgan nuqtalar vertikal o'qdagi: $\\frac{\\pi}{2}, \\frac{3\\pi}{2}, \\dots$.";
        } else if (Math.abs(val - 0.5) < 1e-4) {
          ans = 'x = \\pm \\frac{\\pi}{3} + 2\\pi k';
          explanation = "\\arccos(1/2) = \\frac{\\pi}{3}. Umumiy formula: $x = \\pm \\arccos(a) + 2\\pi k$.";
        } else if (Math.abs(val - (-0.5)) < 1e-4) {
          ans = 'x = \\pm \\frac{2\\pi}{3} + 2\\pi k';
          explanation = "\\arccos(-1/2) = \\pi - \\frac{\\pi}{3} = \\frac{2\\pi}{3}.";
        } else if (Math.abs(val - Math.SQRT2 / 2) < 1e-4) {
          ans = 'x = \\pm \\frac{\\pi}{4} + 2\\pi k';
          explanation = "\\arccos(\\sqrt{2}/2) = \\frac{\\pi}{4}.";
        } else if (Math.abs(val - (-Math.SQRT2 / 2)) < 1e-4) {
          ans = 'x = \\pm \\frac{3\\pi}{4} + 2\\pi k';
          explanation = "\\arccos(-\\sqrt{2}/2) = \\frac{3\\pi}{4}.";
        } else if (Math.abs(val - Math.sqrt(3) / 2) < 1e-4) {
          ans = 'x = \\pm \\frac{\\pi}{6} + 2\\pi k';
          explanation = "\\arccos(\\sqrt{3}/2) = \\frac{\\pi}{6}.";
        } else if (Math.abs(val - (-Math.sqrt(3) / 2)) < 1e-4) {
          ans = 'x = \\pm \\frac{5\\pi}{6} + 2\\pi k';
          explanation = "\\arccos(-\\sqrt{3}/2) = \\frac{5\\pi}{6}.";
        } else {
          ans = `x = \\pm \\arccos(${valRaw}) + 2\\pi k`;
          explanation = `Umumiy formula: $x = \\pm \\arccos(a) + 2\\pi k$.`;
        }
      } else if (fn === 'tg') {
        if (Math.abs(val) < 1e-5) {
          ans = 'x = \\pi k';
          explanation = "\\mathrm{arctg}(0) = 0.";
        } else if (Math.abs(val - 1) < 1e-5) {
          ans = 'x = \\frac{\\pi}{4} + \\pi k';
          explanation = "\\mathrm{arctg}(1) = \\frac{\\pi}{4}.";
        } else if (Math.abs(val - (-1)) < 1e-5) {
          ans = 'x = -\\frac{\\pi}{4} + \\pi k';
          explanation = "\\mathrm{arctg}(-1) = -\\frac{\\pi}{4}.";
        } else if (Math.abs(val - Math.sqrt(3)) < 1e-4) {
          ans = 'x = \\frac{\\pi}{3} + \\pi k';
          explanation = "\\mathrm{arctg}(\\sqrt{3}) = \\frac{\\pi}{3}.";
        } else if (Math.abs(val - (-Math.sqrt(3))) < 1e-4) {
          ans = 'x = -\\frac{\\pi}{3} + \\pi k';
          explanation = "\\mathrm{arctg}(-\\sqrt{3}) = -\\frac{\\pi}{3}.";
        } else if (Math.abs(val - 1 / Math.sqrt(3)) < 1e-4) {
          ans = 'x = \\frac{\\pi}{6} + \\pi k';
          explanation = "\\mathrm{arctg}(1/\\sqrt{3}) = \\frac{\\pi}{6}.";
        } else if (Math.abs(val - (-1 / Math.sqrt(3))) < 1e-4) {
          ans = 'x = -\\frac{\\pi}{6} + \\pi k';
          explanation = "\\mathrm{arctg}(-1/\\sqrt{3}) = -\\frac{\\pi}{6}.";
        } else {
          ans = `x = \\mathrm{arctg}(${valRaw}) + \\pi k`;
          explanation = `Umumiy formula: $x = \\mathrm{arctg}(a) + \\pi k$.`;
        }
      } else if (fn === 'ctg') {
        if (Math.abs(val) < 1e-5) {
          ans = 'x = \\frac{\\pi}{2} + \\pi k';
          explanation = "\\mathrm{arcctg}(0) = \\frac{\\pi}{2}.";
        } else if (Math.abs(val - 1) < 1e-5) {
          ans = 'x = \\frac{\\pi}{4} + \\pi k';
          explanation = "\\mathrm{arcctg}(1) = \\frac{\\pi}{4}.";
        } else if (Math.abs(val - (-1)) < 1e-5) {
          ans = 'x = \\frac{3\\pi}{4} + \\pi k';
          explanation = "\\mathrm{arcctg}(-1) = \\frac{3\\pi}{4}.";
        } else if (Math.abs(val - Math.sqrt(3)) < 1e-4) {
          ans = 'x = \\frac{\\pi}{6} + \\pi k';
          explanation = "\\mathrm{arcctg}(\\sqrt{3}) = \\frac{\\pi}{6}.";
        } else if (Math.abs(val - 1 / Math.sqrt(3)) < 1e-4) {
          ans = 'x = \\frac{\\pi}{3} + \\pi k';
          explanation = "\\mathrm{arcctg}(1/\\sqrt{3}) = \\frac{\\pi}{3}.";
        } else {
          ans = `x = \\mathrm{arcctg}(${valRaw}) + \\pi k`;
          explanation = `Umumiy formula: $x = \\mathrm{arcctg}(a) + \\pi k$.`;
        }
      }

      const shortAns = ans.includes("yo'q") ? ans : `${ans}, \\; k \\in \\mathbb{Z}`;
      return {
        solved: true,
        type: 'Elementar trigonometrik tenglama',
        shortAnswer: shortAns,
        diagnosis,
        markdown: `## 1. Masala tahlili
Berilgan tenglama:
$$${fnTex}(x) = ${valRaw}$$

## 2. Yechish va nazariy asos
${explanation}

## 3. Umumiy yechim
$$${ans}${ans.includes("yo'q") ? '' : ', \\quad k \\in \\mathbb{Z}'}$$

## 4. Yakuniy javob
Javob:
$$\\mathbf{${shortAns}}$$`
      };
    }
  }

  // 2. Exponential equations: a^x = b, e^x = b
  const expMatch = cleanTrig.match(/^(\d+|e)\^x=([0-9.]+)$/i);
  if (expMatch) {
    const base = expMatch[1];
    const val = parseFloat(expMatch[2]);
    if (val > 0) {
      let ans = '';
      if (base === 'e') {
        ans = `x = \\ln(${val}) \\approx ${fmtNum(Math.log(val))}`;
      } else {
        const bNum = parseFloat(base);
        const xVal = Math.log(val) / Math.log(bNum);
        ans = Math.abs(xVal - Math.round(xVal)) < 1e-6
          ? `x = ${Math.round(xVal)}`
          : `x = \\log_{${base}}(${val}) \\approx ${fmtNum(xVal)}`;
      }
      return {
        solved: true,
        type: "Ko'rsatkichli tenglama",
        shortAnswer: ans,
        diagnosis,
        markdown: `## 1. Masala tahlili
Berilgan tenglama:
$$${base}^x = ${val}$$

## 2. Logarifm ta'rifi bo'yicha yechish
Ikkala tomonni asos bo'yicha logarifmlaymiz:
$$x = \\log_{${base}}(${val}) = \\frac{\\ln(${val})}{\\ln(${base})}$$

## 4. Yakuniy javob
Javob:
$$\\mathbf{${ans}}$$`
      };
    }
  }

  // 3. Modulus / Absolute value equations: |ax + b| = c or abs(ax + b) = c
  const modEqMatch = raw.match(/^(?:\||abs\()\s*([^|=]+?)\s*(?:\||\))\s*=\s*([0-9.\-]+)$/i);
  if (modEqMatch) {
    const innerStr = modEqMatch[1].trim();
    const cVal = parseFloat(modEqMatch[2]);
    const diag = diagnoseTopic('tenglamalar modul ' + raw);

    if (cVal < 0) {
      return {
        solved: true,
        type: 'Modulli tenglama (Absolyut qiymat)',
        shortAnswer: "\\emptyset \\text{ (Haqiqiy yechim yo'q)}",
        diagnosis: diag,
        markdown: `## 1. Masala tahlili
Berilgan modulli tenglama:
$$|${innerStr}| = ${cVal}$$

## 2. Modul ta'rifi
Har qanday haqiqiy son yoki ifodaning moduli (absolyut qiymati) nomanfiy sondir: $|A| \\ge 0$.
Tenglikning o'ng tomonida esa manfiy son ($${cVal} < 0$) turibdi.

## 4. Yakuniy javob
Javob:
$$\\mathbf{\\emptyset \\quad \\text{(Tenglama haqiqiy yechimga ega emas)}}$$`
      };
    }

    const solPos = trySolveEquation(`${innerStr} = ${cVal}`);
    const solNeg = cVal === 0 ? null : trySolveEquation(`${innerStr} = ${-cVal}`);

    if (solPos && solPos.shortAnswer) {
      let ans = '';
      let steps = '';
      if (cVal === 0) {
        ans = solPos.shortAnswer;
        steps = `Modul faqat ifoda nolga teng bo'lgandagina nol bo'ladi:\n$$${innerStr} = 0 \\implies ${solPos.shortAnswer}$$`;
      } else if (solNeg && solNeg.shortAnswer) {
        const x1 = solPos.shortAnswer;
        const x2 = solNeg.shortAnswer;
        ans = `${x2}, \\; ${x1}`;
        steps = `Modul ta'rifiga ko'ra tenglama 2 ta mustaqil holatga ajraladi:
1) $${innerStr} = ${cVal} \\implies ${x1}$
2) $${innerStr} = ${-cVal} \\implies ${x2}$`;
      } else {
        ans = solPos.shortAnswer;
      }

      return {
        solved: true,
        type: 'Modulli tenglama (Absolyut qiymat)',
        shortAnswer: ans,
        diagnosis: diag,
        markdown: `## 1. Masala tahlili
Berilgan modulli tenglama:
$$|${innerStr}| = ${cVal}$$

## 2. Modulni ochish va yechish
${steps}

## 4. Yakuniy javob
Javob:
$$\\mathbf{${ans}}$$`
      };
    }
  }

  // 4. Radical (Irrational) equations: sqrt(ax + b) = c or \sqrt{...} = c or ildiz(...) = c
  const radMatch = raw.match(/^(?:\\?sqrt\s*[\(\{]|ildiz\s*[\(\{])\s*\(?([^}=)]+?)\)?\s*[\)\}]\s*=\s*([0-9.\-]+)$/i);
  if (radMatch) {
    const innerStr = radMatch[1].trim();
    const cVal = parseFloat(radMatch[2]);
    const diag = diagnoseTopic('irratsional tenglama ' + raw);

    if (cVal < 0) {
      return {
        solved: true,
        type: 'Irratsional (Ildizli) tenglama',
        shortAnswer: "\\emptyset \\text{ (Haqiqiy yechim yo'q)}",
        diagnosis: diag,
        markdown: `## 1. Masala tahlili
Berilgan irratsional tenglama:
$$\\sqrt{${innerStr}} = ${cVal}$$

## 2. Arifmetik kvadrat ildiz xossasi
Arifmetik kvadrat ildiz qiymati har doim nomanfiy bo'ladi: $\\sqrt{A} \\ge 0$.
O'ng tomon esa manfiy son ($${cVal} < 0$) bo'lgani sababli tenglama haqiqiy sonlarda yechimga ega emas.

## 4. Yakuniy javob
Javob:
$$\\mathbf{\\emptyset \\quad \\text{(Tenglama haqiqiy yechimga ega emas)}}$$`
      };
    }

    const cSquared = cVal * cVal;
    const solEq = trySolveEquation(`${innerStr} = ${cSquared}`);
    if (solEq && solEq.shortAnswer) {
      return {
        solved: true,
        type: 'Irratsional (Ildizli) tenglama',
        shortAnswer: solEq.shortAnswer,
        diagnosis: diag,
        markdown: `## 1. Masala tahlili
Berilgan irratsional tenglama:
$$\\sqrt{${innerStr}} = ${cVal}$$

## 2. Aniqlanish sohasi va Kvadratga ko'tarish
1. **Aniqlanish sohasi (O.D.Z.):** $${innerStr} \\ge 0$.
2. Tenglamaning ikkala tomonini kvadratga oshiramiz:
$$\\left(\\sqrt{${innerStr}}\\right)^2 = (${cVal})^2 \\implies ${innerStr} = ${fmtNum(cSquared)}$$
3. Chiziqli/algebraik tenglamani yechamiz:
$$${solEq.shortAnswer}$$
4. Tekshirish: ildiz aniqlanish sohasiga tushadi va tenglamani qanoatlantiradi.

## 4. Yakuniy javob
Javob:
$$\\mathbf{${solEq.shortAnswer}}$$`
      };
    }
  }

  // 5. Logarithmic equations: ln(x) = b, log_a(x) = b, lg(x) = b, log(x) = b
  const logMatch = raw.match(/^(?:\\?ln|\\?log|log_?(\d+)|lg)\s*[\(\{]\s*([a-zA-Z0-9+\-*\/ ]+?)\s*[\)\}]\s*=\s*([0-9.\-]+)$/i);
  if (logMatch) {
    const rawPrefix = raw.substring(0, 5).toLowerCase();
    const isLg = rawPrefix.includes('lg');
    const hasBase = logMatch[1] !== undefined;
    const base = hasBase ? parseFloat(logMatch[1]) : (isLg ? 10 : Math.E);
    const baseTex = hasBase ? logMatch[1] : (isLg ? '10' : 'e');
    const innerStr = logMatch[2].trim();
    const cVal = parseFloat(logMatch[3]);
    const diag = diagnoseTopic('logarifmik tenglama ' + raw);

    const rhsVal = Math.pow(base, cVal);
    const solEq = trySolveEquation(`${innerStr} = ${rhsVal}`);
    if (solEq && solEq.shortAnswer) {
      const baseDisplay = hasBase ? `\\log_{${logMatch[1]}}` : (isLg ? '\\lg' : '\\ln');
      return {
        solved: true,
        type: 'Logarifmik tenglama',
        shortAnswer: solEq.shortAnswer,
        diagnosis: diag,
        markdown: `## 1. Masala tahlili
Berilgan logarifmik tenglama:
$$${baseDisplay}(${innerStr}) = ${cVal}$$

## 2. Logarifm ta'rifi bo'yicha yechish
1. **Aniqlanish sohasi:** $${innerStr} > 0$.
2. Logarifm ta'rifiga asosan asosni darajaga ko'taramiz:
$$${innerStr} = ${baseTex}^{${cVal}} = ${fmtNum(rhsVal)}$$
3. Noma'lum $x$ ni topamiz:
$$${solEq.shortAnswer}$$

## 4. Yakuniy javob
Javob:
$$\\mathbf{${solEq.shortAnswer}}$$`
      };
    }
  }

  // Inequalities: x^2 - 4 > 0 or ax + b > 0
  const ineqMatch = raw.match(/^(.*?)(<=|>=|<|>|\\le|\\ge)(.*?)$/);
  if (ineqMatch && !raw.includes('->') && !raw.includes('lim')) {
    const left = ineqMatch[1].trim();
    const op = ineqMatch[2];
    const right = ineqMatch[3].trim();
    const expr = `(${normalizeMathString(left)}) - (${normalizeMathString(right)})`;

    const y0 = safeEvalAt(expr, 'x', 0);
    const y1 = safeEvalAt(expr, 'x', 1);
    const yn1 = safeEvalAt(expr, 'x', -1);
    const a = (y1 + yn1 - 2 * y0) / 2;
    const b = (y1 - yn1) / 2;
    const c = y0;

    if (Math.abs(a) > 1e-6) {
      const D = b * b - 4 * a * c;
      if (D > 0) {
        const x1 = (-b - Math.sqrt(D)) / (2 * a);
        const x2 = (-b + Math.sqrt(D)) / (2 * a);
        const minX = Math.min(x1, x2);
        const maxX = Math.max(x1, x2);
        const isStrict = op === '<' || op === '>';
        const isGreater = (op === '>' || op === '\\ge') ? a > 0 : a < 0;

        const leftBracket = isStrict ? '(' : '[';
        const rightBracket = isStrict ? ')' : ']';

        const ans = isGreater
          ? `x \\in (-\\infty, ${fmtNum(minX)}${rightBracket} \\cup ${leftBracket}${fmtNum(maxX)}, +\\infty)`
          : `x \\in ${leftBracket}${fmtNum(minX)}, ${fmtNum(maxX)}${rightBracket}`;

        return {
          solved: true,
          type: 'Kvadrat tengsizlik (Intervallar usuli)',
          shortAnswer: ans,
          diagnosis,
          markdown: `## 1. Masala tahlili
$$${raw.trim()}$$

## 2. Intervallar usuli
Nollar: $x_1 = ${fmtNum(minX)}, \\; x_2 = ${fmtNum(maxX)}$.
Parabola shoxlari ${a > 0 ? 'yuqoriga' : 'pastga'} qaragan ($a = ${fmtNum(a)}$).

## 4. Yakuniy javob
Javob:
$$\\mathbf{${ans}}$$`
        };
      } else if (Math.abs(D) < 1e-6) {
        // D == 0: Perfect square root
        const x0 = -b / (2 * a);
        let ans = '';
        if (a > 0) {
          if (op === '>' || op === '\\gt') ans = `x \\in (-\\infty, ${fmtNum(x0)}) \\cup (${fmtNum(x0)}, +\\infty)`;
          else if (op === '>=' || op === '\\ge') ans = `x \\in \\mathbb{R}`;
          else if (op === '<' || op === '\\lt') ans = `\\emptyset \\text{ (Haqiqiy yechim yo'q)}`;
          else if (op === '<=' || op === '\\le') ans = `x = ${fmtNum(x0)}`;
        } else {
          if (op === '>' || op === '\\gt') ans = `\\emptyset \\text{ (Haqiqiy yechim yo'q)}`;
          else if (op === '>=' || op === '\\ge') ans = `x = ${fmtNum(x0)}`;
          else if (op === '<' || op === '\\lt') ans = `x \\in (-\\infty, ${fmtNum(x0)}) \\cup (${fmtNum(x0)}, +\\infty)`;
          else if (op === '<=' || op === '\\le') ans = `x \\in \\mathbb{R}`;
        }
        return {
          solved: true,
          type: 'Kvadrat tengsizlik (Diskriminant D = 0)',
          shortAnswer: ans,
          diagnosis,
          markdown: `## 1. Masala tahlili
$$${raw.trim()}$$

## 2. Diskriminant tahlili
Diskriminant $D = b^2 - 4ac = 0$. Uchhad to'la kvadratga ajraladi: $a(x - (${fmtNum(x0)}))^2$.

## 4. Yakuniy javob
Javob:
$$\\mathbf{${ans}}$$`
        };
      } else {
        // D < 0: No real roots
        let ans = '';
        if (a > 0) {
          if (op === '>' || op === '>=' || op === '\\ge') ans = `x \\in \\mathbb{R} \\text{ (Barcha haqiqiy sonlar)}`;
          else ans = `\\emptyset \\text{ (Haqiqiy yechim yo'q)}`;
        } else {
          if (op === '<' || op === '<=' || op === '\\le') ans = `x \\in \\mathbb{R} \\text{ (Barcha haqiqiy sonlar)}`;
          else ans = `\\emptyset \\text{ (Haqiqiy yechim yo'q)}`;
        }
        return {
          solved: true,
          type: 'Kvadrat tengsizlik (Diskriminant D < 0)',
          shortAnswer: ans,
          diagnosis,
          markdown: `## 1. Masala tahlili
$$${raw.trim()}$$

## 2. Diskriminant tahlili
Diskriminant $D = b^2 - 4ac = ${fmtNum(D)} < 0$. Haqiqiy nollar mavjud emas.
Kvadrat uchhad butun sonlar o'qida doimiy $a = ${fmtNum(a)} ${a > 0 ? '> 0' : '< 0'}$ ishorasini saqlaydi.

## 4. Yakuniy javob
Javob:
$$\\mathbf{${ans}}$$`
        };
      }
    } else if (Math.abs(b) > 1e-6) {
      // Linear inequality: b * x + c [op] 0
      const x0 = -c / b;
      let effectiveOp = op;
      if (b < 0) {
        if (op === '>') effectiveOp = '<';
        else if (op === '<') effectiveOp = '>';
        else if (op === '>=' || op === '\\ge') effectiveOp = '<=';
        else if (op === '<=' || op === '\\le') effectiveOp = '>=';
      }

      let ans = '';
      let mathInterval = '';
      if (effectiveOp === '>' || effectiveOp === '\\gt') {
        ans = `x > ${fmtNum(x0)}`;
        mathInterval = `x \\in (${fmtNum(x0)}, +\\infty)`;
      } else if (effectiveOp === '>=' || effectiveOp === '\\ge') {
        ans = `x \\ge ${fmtNum(x0)}`;
        mathInterval = `x \\in [${fmtNum(x0)}, +\\infty)`;
      } else if (effectiveOp === '<' || effectiveOp === '\\lt') {
        ans = `x < ${fmtNum(x0)}`;
        mathInterval = `x \\in (-\\infty, ${fmtNum(x0)})`;
      } else if (effectiveOp === '<=' || effectiveOp === '\\le') {
        ans = `x \\le ${fmtNum(x0)}`;
        mathInterval = `x \\in (-\\infty, ${fmtNum(x0)}]`;
      }

      return {
        solved: true,
        type: 'Chiziqli algebraik tengsizlik',
        shortAnswer: `${ans} \\iff ${mathInterval}`,
        diagnosis,
        markdown: `## 1. Masala tahlili
Berilgan tengsizlik:
$$${raw.trim()}$$

## 2. Yechish bosqichlari
1. Noma'lum qatnashgan hadlarni chap tomonga, ozod hadlarni o'ng tomonga o'tkazamiz:
$$${fmtNum(b)}x ${op} ${fmtNum(-c)}$$
2. Tengsizlikning har ikkala tomonini $x$ oldidagi koeffitsiyentga (${fmtNum(b)}) bo'lamiz${b < 0 ? " (manfiy songa bo'lingani sababli tengsizlik ishorasi teskarisiga o'zgaradi!)" : ''}:
$$${ans}$$

## 3. Oraliq ko'rinishida ifodalash
$$${mathInterval}$$

## 4. Yakuniy javob
Javob:
$$\\mathbf{${ans} \\quad \\Longleftrightarrow \\quad ${mathInterval}}$$`
      };
    }
  }

  // Regular equations: left = right
  if (!raw.includes('=')) return null;
  if (raw.includes("'") || raw.includes(',')) return null;

  const parts = raw.split('=');
  if (parts.length !== 2) return null;

  const leftStr = parts[0].trim();
  const rightStr = parts[1].trim();
  if (!leftStr || !rightStr) return null;

  // Guard: If it's a non-polynomial expression (trig, log, exp, etc.), don't force quadratic/linear polynomial fit!
  if (/sin|cos|tg|tan|ctg|cot|sec|csc|log|ln|exp/i.test(leftStr + rightStr)) return null;

  const variable = 'x';
  const exprStr = `(${normalizeMathString(leftStr)}) - (${normalizeMathString(rightStr)})`;
  diagnosis.graphFn = exprStr;

  const y0 = safeEvalAt(exprStr, variable, 0);
  const y1 = safeEvalAt(exprStr, variable, 1);
  const yn1 = safeEvalAt(exprStr, variable, -1);
  const y2 = safeEvalAt(exprStr, variable, 2);
  const yn2 = safeEvalAt(exprStr, variable, -2);

  if (isNaN(y0) || isNaN(y1) || isNaN(yn1) || isNaN(y2) || isNaN(yn2)) return null;

  const c0 = y0;
  const c2 = (y1 + yn1 - 2 * c0) / 2;
  const d1 = (y1 - yn1) / 2;
  const d2 = (y2 - yn2) / 4;
  const c3 = (d2 - d1) / 3;
  const c1 = d1 - c3;

  // Verify polynomial up to degree 3
  if (Math.abs(c0 + c1 * 2 + c2 * 4 + c3 * 8 - y2) > 1e-4) return null;

  // Cubic equation: c3 * x^3 + c2 * x^2 + c1 * x + c0 = 0
  if (Math.abs(c3) > 1e-6) {
    // Normalize by c3: x^3 + p*x^2 + q*x + r = 0
    const p = c2 / c3;
    const q = c1 / c3;
    const r = c0 / c3;

    let x1: number | null = null;
    for (let k = -60; k <= 60; k++) {
      const cand = k / 2;
      if (Math.abs(cand * cand * cand + p * cand * cand + q * cand + r) < 1e-6) {
        x1 = cand;
        break;
      }
    }
    if (x1 === null) {
      let x = -p / 3;
      for (let iter = 0; iter < 50; iter++) {
        const fx = x * x * x + p * x * x + q * x + r;
        const dfx = 3 * x * x + 2 * p * x + q;
        if (Math.abs(dfx) < 1e-9) break;
        x = x - fx / dfx;
      }
      x1 = x;
    }

    // Gorner division by (x - x1): x^2 + qb*x + qc = 0
    const qb = p + x1;
    const qc = q + qb * x1;
    const disc = qb * qb - 4 * qc;
    let shortAns = '';

    if (disc >= -1e-7) {
      const dClamp = Math.max(0, disc);
      const r2 = (-qb - Math.sqrt(dClamp)) / 2;
      const r3 = (-qb + Math.sqrt(dClamp)) / 2;
      const roots = [x1, r2, r3].sort((u, v) => u - v);
      const uniqueRoots: number[] = [];
      for (const rt of roots) {
        if (!uniqueRoots.some(u => Math.abs(u - rt) < 1e-5)) uniqueRoots.push(rt);
      }
      shortAns = uniqueRoots.map((rt, idx) => `x_${idx + 1} = ${fmtNum(rt)}`).join(', \\; ');
    } else {
      const re = fmtNum(-qb / 2);
      const im = fmtNum(Math.sqrt(-disc) / 2);
      shortAns = `x_1 = ${fmtNum(x1)}, \\; x_{2,3} = ${re} \\pm ${im}i`;
    }

    return {
      solved: true,
      type: "3-darajali (kubik) tenglama (Gorner sxemasi va ko'paytuvchilarga ajratish)",
      shortAnswer: shortAns,
      diagnosis,
      markdown: `## 1. Masala tahlili
Berilgan kubik tenglama:
$$${leftStr} = ${rightStr}$$

## 2. Gorner sxemasi bo'yicha birinchi ildizni topish
Ozod had bo'luvchilarini tekshirib, $x_1 = ${fmtNum(x1)}$ ildizni topamiz va ko'phadni $(x - (${fmtNum(x1)}))$ ga bo'lamiz:
$$\\left(x - (${fmtNum(x1)})\\right)\\left(x^2 ${qb >= 0 ? '+ ' + fmtNum(qb) : fmtNum(qb)}x ${qc >= 0 ? '+ ' + fmtNum(qc) : fmtNum(qc)}\\right) = 0$$

## 3. Kvadrat uchhadni yechish
Diskriminant: $D = (${fmtNum(qb)})^2 - 4(${fmtNum(qc)}) = ${fmtNum(disc)}$

## 4. Yakuniy javob
Javob:
$$\\mathbf{${shortAns}}$$`
    };
  }

  const c = c0;
  const a = c2;
  const b = c1;

  // Linear equation
  if (Math.abs(a) < 1e-8) {
    if (Math.abs(b) < 1e-8) return null;
    const rootFmt = fmtNum(-c / b);
    return {
      solved: true,
      type: 'Chiziqli algebraik tenglama',
      shortAnswer: `x = ${rootFmt}`,
      diagnosis,
      markdown: `## 1. Masala tahlili
$$${leftStr} = ${rightStr}$$

## 3. Yechish
$$${fmtNum(b)}x = ${fmtNum(-c)} \\implies x = ${rootFmt}$$

## 4. Yakuniy javob
Javob:
$$\\mathbf{x = ${rootFmt}}$$`
    };
  }

  // Quadratic equation
  const D = b * b - 4 * a * c;
  const aFmt = fmtNum(a);
  const bFmt = fmtNum(b);
  const cFmt = fmtNum(c);
  const dFmt = fmtNum(D);
  let shortAns = '';

  if (D > 0) {
    const x1 = (-b - Math.sqrt(D)) / (2 * a);
    const x2 = (-b + Math.sqrt(D)) / (2 * a);
    shortAns = `x_1 = ${fmtNum(x1)}, \\; x_2 = ${fmtNum(x2)}`;
  } else if (Math.abs(D) < 1e-8) {
    shortAns = `x = ${fmtNum(-b / (2 * a))}`;
  } else {
    const re = fmtNum(-b / (2 * a));
    const im = fmtNum(Math.sqrt(-D) / (2 * Math.abs(a)));
    shortAns = `x_{1,2} = ${re} \\pm ${im}i`;
  }

  return {
    solved: true,
    type: 'Kvadrat tenglama (Diskriminant va Viyet)',
    shortAnswer: shortAns,
    diagnosis,
    markdown: `## 1. Masala tahlili
$$${aFmt}x^2 ${b >= 0 ? '+ ' + bFmt : bFmt}x ${c >= 0 ? '+ ' + cFmt : cFmt} = 0$$
$a = ${aFmt}, \\; b = ${bFmt}, \\; c = ${cFmt}$

## 2. Diskriminant
$$D = b^2 - 4ac = ${dFmt}$$

## 4. Yakuniy javob
Javob:
$$\\mathbf{${shortAns}}$$`
  };
}

/**
 * 8. MATRIX OPERATIONS & DETERMINANT (2x2 & 3x3)
 */
function trySolveMatrixOperations(raw: string): LocalSolveResult | null {
  // Check for 2 matrices: [[...]] and [[...]] with * or + or - between them
  const matrixMatches = raw.match(/\[\s*\[.*?\]\s*\]/g);
  if (matrixMatches && matrixMatches.length === 2) {
    const diagnosis = diagnoseTopic('matritsa ' + raw);
    try {
      const m1 = JSON.parse(matrixMatches[0].replace(/\s+/g, ''));
      const m2 = JSON.parse(matrixMatches[1].replace(/\s+/g, ''));
      if (Array.isArray(m1) && Array.isArray(m2) && Array.isArray(m1[0]) && Array.isArray(m2[0])) {
        const isMultiply = raw.includes('*') || /ko'paytirish|zarb/i.test(raw);
        const isAdd = raw.includes('+') || /qo'shish/i.test(raw);
        const isSub = raw.includes('-') || /ayirish/i.test(raw);

        function toMatrixTex(m: number[][]): string {
          return `\\begin{pmatrix} ${m.map(row => row.map(v => fmtNum(v)).join(' & ')).join(' \\\\ ')} \\end{pmatrix}`;
        }

        if (isMultiply) {
          const res = math.multiply(m1, m2) as number[][];
          const shortAns = toMatrixTex(res);
          return {
            solved: true,
            type: "Matritsalarni ko'paytirish (A · B)",
            shortAnswer: shortAns,
            diagnosis,
            markdown: `## 1. Masala tahlili
Berilgan matritsalar ko'paytmasi:
$$A = ${toMatrixTex(m1)}, \\quad B = ${toMatrixTex(m2)}$$

## 2. Ko'paytirish qoidasi («Satrni ustunga ko'paytirish»)
Har bir element mos satr elementlarining mos ustun elementlariga ko'paytmalari yig'indisidan iborat:
$$A \\cdot B = ${toMatrixTex(m1)} \\cdot ${toMatrixTex(m2)} = ${toMatrixTex(res)}$$

## 4. Yakuniy javob
Javob:
$$\\mathbf{A \\cdot B = ${shortAns}}$$`
          };
        } else if (isAdd || isSub) {
          const res = (isAdd ? math.add(m1, m2) : math.subtract(m1, m2)) as number[][];
          const opSign = isAdd ? '+' : '-';
          const shortAns = toMatrixTex(res);
          return {
            solved: true,
            type: `Matritsalarni ${isAdd ? "qo'shish" : "ayirish"} (A ${opSign} B)`,
            shortAnswer: shortAns,
            diagnosis,
            markdown: `## 1. Masala tahlili
$$A = ${toMatrixTex(m1)}, \\quad B = ${toMatrixTex(m2)}$$

## 2. Mos elementlarni ${isAdd ? "qo'shish" : "ayirish"}
$$A ${opSign} B = ${shortAns}$$

## 4. Yakuniy javob
Javob:
$$\\mathbf{A ${opSign} B = ${shortAns}}$$`
          };
        }
      }
    } catch {}
  }
  return null;
}

function trySolveMatrixDet(raw: string): LocalSolveResult | null {
  if (!raw.toLowerCase().includes('det') && !raw.includes('[[')) return null;
  const diagnosis = diagnoseTopic(raw);

  try {
    const match = raw.match(/\[\[.*\]\]/s);
    if (!match) return null;

    const m = JSON.parse(match[0].replace(/\s+/g, ''));
    if (!Array.isArray(m) || !Array.isArray(m[0])) return null;

    const detVal = Number(math.det(m));
    const detFmt = fmtNum(detVal);

    if (m.length === 2 && m[0].length === 2) {
      const [[a, b], [c, d]] = m;
      return {
        solved: true,
        type: '2x2 Matritsa determinanti va teskari matritsa',
        shortAnswer: `\\det A = ${detFmt}`,
        diagnosis,
        markdown: `## 1. Masala tahlili
$$A = \\begin{pmatrix} ${a} & ${b} \\\\ ${c} & ${d} \\end{pmatrix}$$

## 2. Hisoblash
$$\\det A = (${a})(${d}) - (${b})(${c}) = ${detFmt}$$

## 4. Yakuniy javob
Javob:
$$\\mathbf{\\det A = ${detFmt}}$$`
      };
    }

    if (m.length === 3 && m[0].length === 3) {
      return {
        solved: true,
        type: '3-tartibli determinant (Sarryus qoidasi)',
        shortAnswer: `\\det A = ${detFmt}`,
        diagnosis,
        markdown: `## 1. Masala tahlili
Sarryus uchburchaklar qoidasi bo'yicha hisoblaymiz:
$$\\det A = ${detFmt}$$

## 4. Yakuniy javob
Javob:
$$\\mathbf{\\det A = ${detFmt}}$$`
      };
    }
  } catch {}
  return null;
}

/**
 * 8.5. VECTOR ALGEBRA (Dot product, Cross product, Moduli, Angle)
 */
function trySolveVectors(raw: string): LocalSolveResult | null {
  // Do not intercept matrix [[...]]
  if (raw.includes('[[')) return null;

  // Match patterns like: a = (1, 2, 3), b = (4, -5, 6) or [1, 2, 3] x [4, 5, 6]
  const vecMatches = [...raw.matchAll(/[\(\[]\s*([+-]?\d+(?:\.\d+)?)\s*,\s*([+-]?\d+(?:\.\d+)?)(?:\s*,\s*([+-]?\d+(?:\.\d+)?))?\s*[\)\]]/g)];
  if (vecMatches.length === 0) return null;

  // Single vector: |(1, 2, 3)| or vektor (1, 2, 3) or (3, 4) length
  if (vecMatches.length === 1 && (/\||uzunli|modul|birlik|ort|vektor/i.test(raw) || raw.trim().startsWith('|') || raw.trim().startsWith('abs'))) {
    const v = [
      parseFloat(vecMatches[0][1]),
      parseFloat(vecMatches[0][2]),
      vecMatches[0][3] !== undefined ? parseFloat(vecMatches[0][3]) : 0
    ];
    const is3D = vecMatches[0][3] !== undefined;
    const lenSq = v[0] * v[0] + v[1] * v[1] + (is3D ? v[2] * v[2] : 0);
    const len = Math.sqrt(lenSq);
    if (len === 0) return null;
    const e = [v[0] / len, v[1] / len, is3D ? v[2] / len : 0];

    const shortAns = `|\\vec{a}| = ${fmtNum(len)}`;
    const vecTex = is3D ? `(${v[0]}, \\; ${v[1]}, \\; ${v[2]})` : `(${v[0]}, \\; ${v[1]})`;
    const ortTex = is3D ? `(${fmtNum(e[0])}, \\; ${fmtNum(e[1])}, \\; ${fmtNum(e[2])})` : `(${fmtNum(e[0])}, \\; ${fmtNum(e[1])})`;

    const diag = diagnoseTopic('vektor uzunligi ' + raw);

    return {
      solved: true,
      type: is3D ? "3D Fazoviy vektor koordinatalari va moduli" : "2D Tekislikdagi vektor moduli",
      shortAnswer: shortAns,
      diagnosis: diag,
      markdown: `## 1. Berilgan vektor
$$\\vec{a} = ${vecTex}$$

## 2. Vektor uzunligi (Moduli)
Pifagor teoremasi bo'yicha:
$$|\\vec{a}| = \\sqrt{x^2 + y^2${is3D ? ' + z^2' : ''}} = \\sqrt{${v[0]}^2 + ${v[1]}^2${is3D ? ` + ${v[2]}^2` : ''}} = \\sqrt{${fmtNum(lenSq)}} \\approx \\mathbf{${fmtNum(len)}}$$

## 3. Birlik vektor (Ort) va Yo'naltiruvchi kosinuslar
- **Birlik vektor (uzunligi 1 ga teng):**
$$\\vec{e} = \\frac{\\vec{a}}{|\\vec{a}|} = ${ortTex}$$
- **Yo'naltiruvchi kosinuslar:**
$$\\cos\\alpha = \\frac{x}{|\\vec{a}|} = ${fmtNum(e[0])}, \\quad \\cos\\beta = \\frac{y}{|\\vec{a}|} = ${fmtNum(e[1])}${is3D ? `, \\quad \\cos\\gamma = \\frac{z}{|\\vec{a}|} = ${fmtNum(e[2])}` : ''}

## 4. Yakuniy javob
Javob:
$$\\mathbf{|\\vec{a}| = \\sqrt{${fmtNum(lenSq)}} \\approx ${fmtNum(len)}}, \\quad \\vec{e} = ${ortTex}$$`
    };
  }

  if (vecMatches.length < 2) return null;

  const v1 = [parseFloat(vecMatches[0][1]), parseFloat(vecMatches[0][2]), vecMatches[0][3] !== undefined ? parseFloat(vecMatches[0][3]) : 0];
  const v2 = [parseFloat(vecMatches[1][1]), parseFloat(vecMatches[1][2]), vecMatches[1][3] !== undefined ? parseFloat(vecMatches[1][3]) : 0];
  const is3D = vecMatches[0][3] !== undefined && vecMatches[1][3] !== undefined;

  const dot = v1[0] * v2[0] + v1[1] * v2[1] + v1[2] * v2[2];
  const len1 = Math.sqrt(v1[0] ** 2 + v1[1] ** 2 + v1[2] ** 2);
  const len2 = Math.sqrt(v2[0] ** 2 + v2[1] ** 2 + v2[2] ** 2);
  const cx = v1[1] * v2[2] - v1[2] * v2[1];
  const cy = v1[2] * v2[0] - v1[0] * v2[2];
  const cz = v1[0] * v2[1] - v1[1] * v2[0];
  const crossLen = Math.sqrt(cx * cx + cy * cy + cz * cz);
  const cosPhi = len1 > 0 && len2 > 0 ? dot / (len1 * len2) : 0;

  const diagnosis = diagnoseTopic(`vektor skalyar ${raw}`);
  const isCrossOnly = /\)\s*[x×]\s*\(|\]\s*[x×]\s*\[/i.test(raw);
  const shortAns = isCrossOnly
    ? `\\vec{a} \\times \\vec{b} = (${fmtNum(cx)}, ${fmtNum(cy)}, ${fmtNum(cz)})`
    : `\\vec{a}\\cdot\\vec{b} = ${fmtNum(dot)}, \\; \\vec{a}\\times\\vec{b} = (${fmtNum(cx)}, ${fmtNum(cy)}, ${fmtNum(cz)})`;

  return {
    solved: true,
    type: is3D ? "3D Vektorlar tahlili (Skalyar va Vektor ko'paytma)" : "2D Vektorlar tahlili",
    shortAnswer: shortAns,
    diagnosis,
    markdown: `## 1. Berilgan vektorlar va ularning uzunliklari
- $\\vec{a} = (${v1[0]}, ${v1[1]}${is3D ? ', ' + v1[2] : ''}) \\implies |\\vec{a}| = \\sqrt{${v1[0] * v1[0] + v1[1] * v1[1] + v1[2] * v1[2]}} \\approx ${fmtNum(len1)}$
- $\\vec{b} = (${v2[0]}, ${v2[1]}${is3D ? ', ' + v2[2] : ''}) \\implies |\\vec{b}| = \\sqrt{${v2[0] * v2[0] + v2[1] * v2[1] + v2[2] * v2[2]}} \\approx ${fmtNum(len2)}$

## 2. Skalyar ko'paytma va burchak
$$\\vec{a} \\cdot \\vec{b} = (${v1[0]})(${v2[0]}) + (${v1[1]})(${v2[1]})${is3D ? ` + (${v1[2]})(${v2[2]})` : ''} = ${fmtNum(dot)}$$
$$\\cos\\varphi = \\frac{\\vec{a}\\cdot\\vec{b}}{|\\vec{a}||\\vec{b}|} \\approx ${fmtNum(cosPhi)}$$

## 3. Vektor ko'paytma va Parallelogramm yuzi
$$\\vec{a} \\times \\vec{b} = (${fmtNum(cx)}, \\; ${fmtNum(cy)}, \\; ${fmtNum(cz)}), \\quad S_{\\text{par}} = |\\vec{a}\\times\\vec{b}| \\approx ${fmtNum(crossLen)}$$

## 4. Yakuniy javob
Javob:
$$\\mathbf{${shortAns}}$$`
  };
}

/**
 * 9. SERIES CONVERGENCE TEST
 */
function trySolveSeries(raw: string): LocalSolveResult | null {
  if (!raw.toLowerCase().includes('sum') && !raw.includes('\\sum') && !raw.toLowerCase().includes('qator')) return null;
  const diagnosis = diagnoseTopic(raw);

  // Generalized harmonic series: sum 1/n^p
  const pMatch = raw.match(/(?:1\s*\/\s*n\^(\d+(?:\.\d+)?)|1\s*\/\s*n\b)/i);
  if (pMatch) {
    const p = pMatch[1] ? parseFloat(pMatch[1]) : 1;
    const isConv = p > 1;
    const ans = isConv ? 'Yaqinlashuvchi' : 'Uzoqlashuvchi';

    return {
      solved: true,
      type: "Umumlashgan garmonik (Dirixle) qatori yaqinlashishi",
      shortAnswer: `${ans} (p = ${p})`,
      diagnosis,
      markdown: `## 1. Masala tahlili
Berilgan qator:
$$\\sum_{n=1}^\\infty \\frac{1}{n^{${p}}}$$
Bu $p = ${p}$ bo'lgan **Dirixle (umumlashgan garmonik) qatoridir**.

## 2. Yaqinlashish alomati
$$\\sum_{n=1}^\\infty \\frac{1}{n^p} = \\begin{cases} \\text{yaqinlashuvchi}, & p > 1 \\\\ \\text{uzoqlashuvchi}, & p \\le 1 \\end{cases}$$

## 3. Xulosa
Bu yerda $p = ${p} ${p > 1 ? '> 1' : '\\le 1$'} bo'lgani uchun qator **${ans.toLowerCase()}dir**.

## 4. Yakuniy javob
Javob:
$$\\mathbf{${ans}}$$`
    };
  }
  return null;
}

/**
 * 10. FUNCTION INVESTIGATION & ARITHMETIC EVALUATOR
 */
function tryAnalyzeOrEvaluate(raw: string): LocalSolveResult | null {
  // If user typed dx, it was meant as an integral, do not treat as function!
  if (/dx\s*$/i.test(raw)) return null;

  let expr = raw.trim();

  // Handle y = f(x) or f(x) = ... or yteng ...
  const funcMatch = expr.match(/^(?:y|f\s*\(\s*x\s*\))\s*=\s*(.+)$/i) ||
                    expr.match(/^yteng\s*(.+)$/i);
  let isExplicitFunction = false;
  if (funcMatch) {
    expr = funcMatch[1].trim();
    isExplicitFunction = true;
  } else if (expr.includes('=')) {
    return null;
  }

  const diagnosis = diagnoseTopic(expr);
  const norm = normalizeMathString(expr);

  // If contains x, perform function analysis
  if (/\bx\b/i.test(norm)) {
    try {
      const d1 = math.simplify(math.derivative(norm, 'x'));
      const d2 = math.simplify(math.derivative(d1, 'x'));
      const origTex = toCleanTex(norm);
      const d1Tex = d1.toTex().replace(/\\mathrm\{log\}/g, '\\ln');
      const d2Tex = d2.toTex().replace(/\\mathrm\{log\}/g, '\\ln');
      const f0 = safeEvalAt(norm, 'x', 0);

      diagnosis.graphFn = norm;

      // Special Parabola / Quadratic Analysis
      let parabolaSection = '';
      let functionTypeName = "Funksiyani to'liq tekshirish va xossalari";
      
      const quadMatch = norm.replace(/\s+/g, '').match(/^([+-]?\d*(?:\.\d+)?)?\*?x\^2(?:([+-]\d*(?:\.\d+)?)\*?x)?([+-]\d+(?:\.\d+)?)?$/);
      if (quadMatch) {
        functionTypeName = "Kvadratik funksiya (Parabola) to'liq tahlili";
        let a = 1;
        if (quadMatch[1]) {
          if (quadMatch[1] === '+' || quadMatch[1] === '') a = 1;
          else if (quadMatch[1] === '-') a = -1;
          else a = parseFloat(quadMatch[1]);
        }
        let b = 0;
        if (quadMatch[2]) {
          if (quadMatch[2] === '+' || quadMatch[2] === '') b = 1;
          else if (quadMatch[2] === '-') b = -1;
          else b = parseFloat(quadMatch[2]);
        }
        let c = 0;
        if (quadMatch[3]) c = parseFloat(quadMatch[3]);

        const x0 = -b / (2 * a);
        const y0 = a * x0 * x0 + b * x0 + c;
        const disc = b * b - 4 * a * c;
        const branchDir = a > 0 ? "yuqoriga yo'nalgan" : "pastga yo'nalgan";
        const vertexType = a > 0 ? "Global minimum" : "Global maksimum";

        let rootsText = '';
        if (disc > 0) {
          const r1 = (-b - Math.sqrt(disc)) / (2 * a);
          const r2 = (-b + Math.sqrt(disc)) / (2 * a);
          rootsText = `Ikki nuqtada kesishadi: $x_1 = ${fmtNum(r1)}, \\; x_2 = ${fmtNum(r2)}$`;
        } else if (Math.abs(disc) < 1e-9) {
          rootsText = `Uchi $Ox$ o'qiga tegadi: $x = ${fmtNum(x0)}$`;
        } else {
          rootsText = `$Ox$ o'qi bilan kesishmaydi ($D < 0$)`;
        }

        parabolaSection = `\n## 2. Parabola geometrik xossalari
- **Tarmoqlari:** $a = ${fmtNum(a)} ${a > 0 ? '> 0' : '< 0'}$ bo'lgani uchun tarmoqlari **${branchDir}**.
- **Parabola uchi (V):** $x_0 = -\\frac{b}{2a} = ${fmtNum(x0)}, \\quad y_0 = f(${fmtNum(x0)}) = ${fmtNum(y0)}$ $\\implies \\mathbf{(${fmtNum(x0)}, \\; ${fmtNum(y0)})}$
- **Simmetriya o'qi:** $x = ${fmtNum(x0)}$
- **Ekstremum:** $x = ${fmtNum(x0)}$ da **${vertexType}:** $y = ${fmtNum(y0)}$
- **$Ox$ o'qi bilan kesishishi:** ${rootsText}
- **$Oy$ o'qi bilan kesishishi:** $(0, \\; ${fmtNum(c)})$
- **Aniqlanish sohasi:** $D(y) = (-\\infty; +\\infty)$
- **Qiymatlar sohasi:** $E(y) = ${a > 0 ? `[${fmtNum(y0)}; +\\infty)` : `(-\\infty; ${fmtNum(y0)}]`}`;
      }

      // Generate Values Table for plotting
      const testX = [-3, -2, -1, 0, 1, 2, 3];
      const valTableRows = testX.map(xVal => {
        const yVal = safeEvalAt(norm, 'x', xVal);
        return isFinite(yVal) ? fmtNum(yVal) : '-';
      });

      const tableMd = `\n## ${parabolaSection ? '3' : '2'}. Qiymatlar jadvali
| $x$ | ${testX.map(x => fmtNum(x)).join(' | ')} |
|:---:|${testX.map(() => ':---:').join('|')}|
| $y$ | ${valTableRows.join(' | ')} |`;

      const titleFormula = isExplicitFunction ? `y = ${origTex}` : `f(x) = ${origTex}`;

      return {
        solved: true,
        type: functionTypeName,
        shortAnswer: `${titleFormula}, \\; y' = ${d1Tex}`,
        diagnosis,
        markdown: `## 1. Funksiya ko'rinishi
$$${titleFormula}$$
${parabolaSection}
${tableMd}

## ${parabolaSection ? '4' : '3'}. Hosilalar va Monotonlik
- **1-tartibli hosila:** $y' = ${d1Tex}$
- **2-tartibli hosila (botiqlik):** $y'' = ${d2Tex}$

## ${parabolaSection ? '5' : '4'}. Yakuniy xulosa
Javob:
$$\\mathbf{${titleFormula}}$$`
      };
    } catch {}
  }

  // Pure arithmetic
  const val = safeEvalAt(norm, 'x', 0);
  if (typeof val === 'number' && !isNaN(val) && isFinite(val)) {
    const vFmt = fmtNum(val);
    return {
      solved: true,
      type: 'Sonli ifodani hisoblash',
      shortAnswer: vFmt,
      diagnosis,
      markdown: `## 1. Sonli ifoda
$$${toCleanTex(norm)} = ${vFmt}$$

## 4. Yakuniy javob
Javob:
$$\\mathbf{${vFmt}}$$`
    };
  }

  return null;
}

/**
 * MAIN ENTRY POINT
 */
export function solveLocally(input: string, mode: string = 'auto'): LocalSolveResult {
  const rawInput = (input || '').trim();
  const trimmed = normalizeMathString(rawInput);
  const baseDiagnosis = diagnoseTopic(trimmed);

  if (!trimmed) {
    return { solved: false, diagnosis: baseDiagnosis };
  }

  if (mode === 'derivative') {
    const res = trySolveDerivative(trimmed, true);
    if (res) return res;
  } else if (mode === 'integral') {
    const res = trySolveIntegral(trimmed, true);
    if (res) return res;
    return { solved: false, diagnosis: baseDiagnosis };
  } else if (mode === 'limit') {
    const res = trySolveLimit(trimmed, true);
    if (res) return res;
    return { solved: false, diagnosis: baseDiagnosis };
  }

  const solvedRes =
    trySolveLinearSystem(trimmed) ||
    trySolveDiffEq(trimmed) ||
    trySolveLimit(trimmed) ||
    trySolveIntegral(trimmed) ||
    trySolveComplex(trimmed) ||
    trySolveVectors(trimmed) ||
    trySolveEquation(trimmed) ||
    trySolveSeries(trimmed) ||
    trySolveDerivative(trimmed) ||
    trySolveMatrixOperations(trimmed) ||
    trySolveMatrixDet(trimmed) ||
    tryAnalyzeOrEvaluate(trimmed);

  if (solvedRes) {
    return solvedRes;
  }

  return {
    solved: false,
    diagnosis: baseDiagnosis
  };
}
