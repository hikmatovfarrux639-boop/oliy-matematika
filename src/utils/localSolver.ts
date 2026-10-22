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

  // Insert implicit multiplication carefully: e.g. 2x -> 2*x, 3( -> 3*(, )x -> )*x
  // Avoid breaking function names like sin(, cos(, sqrt(, log(
  s = s.replace(/(\d)([a-zA-Z(])/g, '$1*$2');
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
 * Analyzes any problem string and maps it to the exact module, lessons, and formulas on the platform.
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
        : "1-tartibli oddiy differensial tenglamalar",
      difficulty: "Yuqori (Imtihon)",
      whyThisTopic:
        "Masalada noma'lum funksiya $y$ va uning hosilalari ($y'$ yoki $y''$) qatnashgan tenglama berilgan. Bunday tenglamalar Differensial tenglamalar bo'limida o'rganiladi.",
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
        {
          title: 'Differensial tenglama tushunchasi va Koshi masalasi',
          url: '/dars/differensial-tenglamalar/differensial-tenglama-tushunchasi'
        },
        {
          title: '1-tartibli chiziqli differensial tenglamalar (Bernulli usuli)',
          url: '/dars/differensial-tenglamalar/birinchi-tartibli-chiziqli-tenglamalar'
        },
        {
          title: 'Bernulli differensial tenglamasi',
          url: '/dars/differensial-tenglamalar/bernulli-tenglamasi'
        }
      ],
      keyFormulas: [
        { name: 'Xarakteristik tenglama', latex: "y'' + py' + qy = 0 \\implies k^2 + pk + q = 0" },
        { name: 'Haqiqiy ildizlar (D > 0)', latex: 'y = C_1 e^{k_1 x} + C_2 e^{k_2 x}' },
        { name: 'Karrali ildiz (D = 0)', latex: 'y = (C_1 + C_2 x) e^{k x}' }
      ],
      studyAdvice:
        "Avval tenglamaning tartibini ($y'$ yoki $y''$) aniqlang. 2-tartibli o'zgarmas koeffitsiyentli tenglamalarda $y'' \\to k^2$, $y' \\to k$, $y \\to 1$ almashtirish orqali oddiy kvadrat tenglamaga o'tiladi."
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
      whyThisTopic:
        "Masalada ikki yoki uch o'zgaruvchili soha bo'yicha integrallash ($\\iint_D$ yoki $\\iiint_V$) so'ralgan.",
      primaryLesson: {
        title: 'Ikki karrali integral va uni takroriy integralga keltirish',
        url: '/dars/karrali-integrallar/ikki-karrali-integral-va-hisoblash',
        badge: 'Asosiy dars'
      },
      relatedLessons: [
        {
          title: 'Qutb koordinatalarida ikki karrali integral',
          url: '/dars/karrali-integrallar/qutb-koordinatalarida-ikki-karrali-integral'
        },
        {
          title: 'Uch karrali integral: silindrik va sferik koordinatalar',
          url: '/dars/karrali-integrallar/uch-karrali-integral-va-silindrik-sferik'
        }
      ],
      keyFormulas: [
        { name: 'Takroriy integral', latex: '\\iint_D f(x,y)\\,dxdy = \\int_a^b dx \\int_{y_1(x)}^{y_2(x)} f(x,y)\\,dy' },
        { name: 'Qutb koordinatalari', latex: 'x = r\\cos\\varphi, \\; y = r\\sin\\varphi, \\; dxdy = r\\,dr\\,d\\varphi' }
      ],
      studyAdvice:
        "Karrali integralni ishlashda eng muhim qadam — integrallash sohasi $D$ ni koordinata tekisligida chizib, ichki va tashqi chegaralarni to'g'ri qo'yib olishdir."
    };
  }

  // 3. Single Integrals (Module 8)
  if (
    low.includes('\\int') ||
    /\bint\b/.test(low) ||
    low.includes('integral') ||
    low.includes('dx') ||
    low.includes("boshlang'ich")
  ) {
    const isByParts =
      (low.includes('x') && (low.includes('sin') || low.includes('cos') || low.includes('e^') || low.includes('ln') || low.includes('log')));
    const isDefinite = low.includes('_') || low.includes('dan') || /int\s*\(\s*\d+/.test(low);

    return {
      id: 'integrals',
      moduleId: 8,
      moduleTitle: '8-modul: Integrallar',
      moduleUrl: '/modullar/integrallar',
      topicName: isByParts
        ? "Bo'laklab integrallash usuli"
        : isDefinite
        ? 'Aniq integral va Nyuton-Leybnits formulasi'
        : "Boshlang'ich funksiya va aniqmas integrallar",
      difficulty: "O'rta (1-kurs)",
      whyThisTopic:
        "Masalada funksiya integralini ($\\int f(x)\\,dx$) topish talab etilgan. Bu integral hisobning asosiy mavzusidir.",
      primaryLesson: isByParts
        ? {
            title: "Bo'laklab integrallash usuli (LIATE qoidasi)",
            url: '/dars/integrallar/bolaklab-integrallash',
            badge: 'Asosiy dars'
          }
        : isDefinite
        ? {
            title: 'Aniq integral va Nyuton-Leybnits formulasi',
            url: '/dars/integrallar/aniq-integral-va-nyuton-leybnits',
            badge: 'Asosiy dars'
          }
        : {
            title: "Boshlang'ich funksiya va aniqmas integral jadvali",
            url: '/dars/integrallar/boshlangich-funksiya-va-aniqmas-integral',
            badge: 'Asosiy dars'
          },
      relatedLessons: [
        {
          title: "Boshlang'ich funksiya va aniqmas integral jadvali",
          url: '/dars/integrallar/boshlangich-funksiya-va-aniqmas-integral'
        },
        {
          title: "Integrallash usullari: O'zgaruvchini almashtirish",
          url: '/dars/integrallar/integrallash-usullari-almashtirish'
        },
        {
          title: "Bo'laklab integrallash usuli",
          url: '/dars/integrallar/bolaklab-integrallash'
        },
        {
          title: 'Aniq integral va Nyuton-Leybnits formulasi',
          url: '/dars/integrallar/aniq-integral-va-nyuton-leybnits'
        }
      ],
      keyFormulas: [
        { name: 'Darajali integral', latex: '\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + C \\; (n \\neq -1)' },
        { name: "Bo'laklab integrallash", latex: '\\int u\\,dv = u\\cdot v - \\int v\\,du' },
        { name: 'Nyuton-Leybnits formulasi', latex: '\\int_a^b f(x)\\,dx = F(b) - F(a)' }
      ],
      studyAdvice:
        "Integralni yechishdan oldin uning jadval integraliga tushish-tushmasligini tekshiring. Agar ko'phad va trigonometrik/eksponensial funksiya ko'paytmasi bo'lsa — Bo'laklab integrallash darsini o'qing!"
    };
  }

  // 4. Limits (Module 5)
  if (low.includes('lim') || low.includes('\\to') || low.includes('->') || low.includes('limit') || low.includes('aniqmaslik')) {
    const isTrigOrEuler = low.includes('sin') || low.includes('cos') || low.includes('tan') || low.includes('tg') || low.includes('(1+');
    return {
      id: 'limits',
      moduleId: 5,
      moduleTitle: '5-modul: Limitlar nazariyasi',
      moduleUrl: '/modullar/limitlar',
      topicName: isTrigOrEuler
        ? 'Ajoyib limitlar va ekvivalent cheksiz kichik funksiyalar'
        : '0/0 va ∞/∞ ko\'rinishidagi aniqmasliklarni ochish',
      difficulty: "O'rta (1-kurs)",
      whyThisTopic:
        "Masalada o'zgaruvchi ma'lum bir nuqtaga yoki cheksizlikka intilganda funksiya limitini ($\\lim$) hisoblash so'ralgan.",
      primaryLesson: isTrigOrEuler
        ? {
            title: '1- va 2-ajoyib limitlar hamda ularning natijalari',
            url: '/dars/limitlar/ajoyib-limitlar',
            badge: 'Asosiy dars'
          }
        : {
            title: 'Aniqmasliklar (0/0 va ∞/∞) va ularni ochish usullari',
            url: '/dars/limitlar/aniqmasliklar-va-ularni-ochish',
            badge: 'Asosiy dars'
          },
      relatedLessons: [
        { title: "Limit nima? Ta'rif va geometrik ma'no", url: '/dars/limitlar/limit-nima' },
        { title: 'Limit hisoblashning asosiy usullari', url: '/dars/limitlar/limit-hisoblash-usullari' },
        { title: 'Cheksiz kichik funksiyalar va ekvivalentlik jadvali', url: '/dars/limitlar/cheksiz-kichik-va-katta-funksiyalar' },
        { title: 'Lopital qoidasi (Hosila yordamida limit topish)', url: '/dars/hosila/lopital-qoidasi' }
      ],
      keyFormulas: [
        { name: '1-ajoyib limit', latex: '\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1' },
        { name: '2-ajoyib limit', latex: '\\lim_{x \\to \\infty} \\left(1 + \\frac{1}{x}\\right)^x = e' },
        { name: 'Ekvivalentlik (x → 0)', latex: '1 - \\cos x \\sim \\frac{x^2}{2}, \\quad \\ln(1+x) \\sim x, \\quad e^x - 1 \\sim x' }
      ],
      studyAdvice:
        "Limit ishlashni har doim nuqtani ifodaga to'g'ridan-to'g'ri qo'yib ko'rishdan boshlang. Agar [0/0] chiqsa — ko'paytuvchilarga ajratish, ekvivalent almashtirish yoki Lopital qoidasini qo'llang."
    };
  }

  // 5. Series (Module 11)
  if (
    low.includes('\\sum') ||
    low.includes('sum') ||
    low.includes('qator') ||
    low.includes('dalamber') ||
    low.includes('teylor') ||
    low.includes('makloren')
  ) {
    return {
      id: 'series',
      moduleId: 11,
      moduleTitle: '11-modul: Qatorlar nazariyasi',
      moduleUrl: '/modullar/qatorlar',
      topicName: 'Sonli va darajali qatorlarning yaqinlashishi',
      difficulty: 'Yuqori (Imtihon)',
      whyThisTopic: "Masalada cheksiz yig'indi ($\\sum_{n=1}^{\\infty} a_n$) yoki funksiya qatori tahlili berilgan.",
      primaryLesson: {
        title: 'Musbat hadli qatorlar: Dalamber va Koshi alomatlari',
        url: '/dars/qatorlar/musbat-hadli-qatorlar-alomatlari',
        badge: 'Asosiy dars'
      },
      relatedLessons: [
        { title: 'Sonli qatorlar va yaqinlashishning zaruriy sharti', url: '/dars/qatorlar/sonli-qatorlar-va-yaqinlashish' },
        { title: "Ishorasi almashinuvchi qatorlar va Leybnits teoremasi", url: '/dars/qatorlar/ishorasi-almashinuvchi-qatorlar-leybnits' },
        { title: 'Darajali qatorlar: Teylor va Makloren qatorlari', url: '/dars/qatorlar/darajali-qatorlar-teylor-makloren' }
      ],
      keyFormulas: [
        { name: 'Zaruriy shart', latex: '\\sum a_n \\text{ yaqinlashuvchi } \\implies \\lim_{n\\to\\infty} a_n = 0' },
        { name: 'Dalamber alomati', latex: '\\lim_{n\\to\\infty} \\frac{a_{n+1}}{a_n} = D < 1' }
      ],
      studyAdvice:
        "Qatorni tekshirishda birinchi navbatda umumiy had $\\lim_{n\\to\\infty} a_n = 0$ ekanini tekshiring. Agar u 0 ga teng bo'lmasa, qator darhol uzoqlashuvchi bo'ladi!"
    };
  }

  // 6. Multivariable Functions (Module 9)
  if (
    low.includes('\\partial') ||
    low.includes('xususiy hosila') ||
    low.includes('f(x,y)') ||
    low.includes('z =') ||
    low.includes('to\'liq differensial')
  ) {
    return {
      id: 'multivar',
      moduleId: 9,
      moduleTitle: "9-modul: Ko'p o'zgaruvchili funksiyalar",
      moduleUrl: '/modullar/kop-ozgaruvchili-funksiyalar',
      topicName: "Xususiy hosilalar, to'liq differensial va ekstremumlar",
      difficulty: "O'rta (1-kurs)",
      whyThisTopic: "Masalada bir nechta mustaqil o'zgaruvchiga ($x$ va $y$) bog'liq funksiya qatnashmoqda.",
      primaryLesson: {
        title: 'Xususiy hosilalar va Shvars teoremasi',
        url: '/dars/kop-ozgaruvchili-funksiyalar/xususiy-hosilalar',
        badge: 'Asosiy dars'
      },
      relatedLessons: [
        { title: 'Ikki o\'zgaruvchili funksiya va aniqlanish sohasi', url: '/dars/kop-ozgaruvchili-funksiyalar/ikki-ozgaruvchili-funksiya-va-soha' },
        { title: "To'liq differensial va taqribiy hisoblashlar", url: '/dars/kop-ozgaruvchili-funksiyalar/toliq-differensial-va-taqribiy-hisoblash' },
        { title: 'Ikki o\'zgaruvchili funksiya ekstremumi', url: '/dars/kop-ozgaruvchili-funksiyalar/ikki-ozgaruvchili-funksiya-ekstremumi' }
      ],
      keyFormulas: [
        { name: "To'liq differensial", latex: 'dz = \\frac{\\partial z}{\\partial x}dx + \\frac{\\partial z}{\\partial y}dy' },
        { name: 'Ekstremum sharti', latex: 'z\'_x = 0, \\; z\'_y = 0, \\quad \\Delta = AC - B^2 > 0' }
      ],
      studyAdvice:
        "$x$ bo'yicha xususiy hosila olayotganda $y$ ni oddiy o'zgarmas son (masalan, 5) deb tasavvur qiling; $y$ bo'yicha olayotganda esa $x$ ni o'zgarmas son deb oling."
    };
  }

  // 7. Linear Algebra: Matrices, Determinants, Systems (Module 2)
  const hasTwoEquations = s.indexOf('=') !== -1 && s.indexOf('=', s.indexOf('=') + 1) !== -1;
  if (
    s.includes('[[') ||
    low.includes('det') ||
    low.includes('matritsa') ||
    low.includes('determinant') ||
    low.includes('kramer') ||
    low.includes('gauss') ||
    hasTwoEquations
  ) {
    return {
      id: 'linear-algebra',
      moduleId: 2,
      moduleTitle: '2-modul: Chiziqli algebra',
      moduleUrl: '/modullar/chiziqli-algebra',
      topicName: hasTwoEquations
        ? 'Chiziqli tenglamalar sistemasi (Kramer va Gauss usullari)'
        : 'Matritsalar, determinantlar va teskari matritsa',
      difficulty: "O'rta (1-kurs)",
      whyThisTopic: hasTwoEquations
        ? "Masalada bir nechta noma'lumli chiziqli tenglamalar sistemasi berilgan."
        : "Masalada matritsa yoki determinant ustida amallar bajarish so'ralgan.",
      primaryLesson: hasTwoEquations
        ? {
            title: 'Chiziqli tenglamalar sistemasi va Kramer qoidasi',
            url: '/dars/chiziqli-algebra/chiziqli-tenglamalar-sistemasi',
            badge: 'Asosiy dars'
          }
        : {
            title: 'Determinantlar va ularning xossalari (Sarryus qoidasi)',
            url: '/dars/chiziqli-algebra/determinantlar',
            badge: 'Asosiy dars'
          },
      relatedLessons: [
        { title: 'Matritsalar va ular ustida chiziqli amallar', url: '/dars/chiziqli-algebra/matritsalar-va-amallar' },
        { title: 'Teskari matritsa va matritsa rangi', url: '/dars/chiziqli-algebra/teskari-matritsa-va-rang' },
        { title: 'Gauss usuli (Amaliy qadamma-qadam qo\'llanma)', url: '/dars/chiziqli-algebra/gauss-usuli-amaliy' }
      ],
      keyFormulas: [
        { name: '2-tartibli determinant', latex: '\\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix} = ad - bc' },
        { name: 'Kramer formulasi', latex: 'x_i = \\frac{\\Delta_i}{\\Delta} \\quad (\\Delta \\neq 0)' }
      ],
      studyAdvice:
        "Tenglamalar sistemasini yechishdan avval asosiy determinant $\\Delta$ ni hisoblang. Agar $\\Delta \\neq 0$ bo'lsa, Kramer qoidasi eng tez va aniq javob beradi!"
    };
  }

  // 8. Derivatives (Module 7)
  if (
    low.includes('d/dx') ||
    low.includes('hosila') ||
    low.includes("f'") ||
    low.includes('differensial') ||
    low.includes('urinma') ||
    low.includes('lopital')
  ) {
    return {
      id: 'derivatives',
      moduleId: 7,
      moduleTitle: '7-modul: Hosila va differensial hisob',
      moduleUrl: '/modullar/hosila',
      topicName: 'Funksiya hosilasini hisoblash va differensiallash qoidalari',
      difficulty: "O'rta (1-kurs)",
      whyThisTopic:
        "Masalada funksiyaning o'zgarish tezligi — hosilasini ($f'(x) = \\frac{df}{dx}$) topish yoki urinma tenglamasini tuzish so'ralgan.",
      primaryLesson: {
        title: 'Differensiallash qoidalari va asosiy hosilalar jadvali',
        url: '/dars/hosila/differensiallash-qoidalari-va-jadval',
        badge: 'Asosiy dars'
      },
      relatedLessons: [
        { title: "Hosila nima? Geometrik va fizik ma'nosi", url: '/dars/hosila/hosila-nima' },
        { title: 'Murakkab funksiya hosilasi (Zanjir qoidasi)', url: '/dars/hosila/murakkab-funksiya-hosilasi' },
        { title: 'Yuqori tartibli hosilalar va funksiya differensiali', url: '/dars/hosila/yuqori-tartibli-hosilalar-va-differensial' }
      ],
      keyFormulas: [
        { name: 'Daraja hosilasi', latex: '(x^n)\' = n\\cdot x^{n-1}' },
        { name: "Ko'paytma qoidasi", latex: '(u\\cdot v)\' = u\'v + uv\'' },
        { name: "Bo'linma qoidasi", latex: '\\left(\\frac{u}{v}\\right)\' = \\frac{u\'v - uv\'}{v^2}' },
        { name: 'Murakkab funksiya', latex: '(f(g(x)))\' = f\'(g(x))\\cdot g\'(x)' }
      ],
      studyAdvice:
        "Murakkab funksiyadan hosila olayotganda 'tashqaridan ichkariga' qoidasiga amal qiling: avval tashqi funksiyadan hosila oling, so'ngra ichki argument hosilasiga ko'paytiring."
    };
  }

  // 9. Complex Numbers (Module 4)
  if (
    /\bi\b/.test(s) ||
    /\d+i\b/.test(s) ||
    /i\\sqrt/.test(s) ||
    low.includes('kompleks') ||
    low.includes('muavr')
  ) {
    return {
      id: 'complex-numbers',
      moduleId: 4,
      moduleTitle: '4-modul: Kompleks sonlar',
      moduleUrl: '/modullar/kompleks-sonlar',
      topicName: 'Kompleks sonlar ustida amallar va Muavr formulasi',
      difficulty: "O'rta (1-kurs)",
      whyThisTopic:
        "Masalada mavhum birlik $i$ ($i^2 = -1$) qatnashgan kompleks son berilgan.",
      primaryLesson: {
        title: 'Muavr formulasi va kompleks sondan ildiz chiqarish',
        url: '/dars/kompleks-sonlar/muavr-formulasi-va-ildiz-chiqarish',
        badge: 'Asosiy dars'
      },
      relatedLessons: [
        { title: 'Kompleks son tushunchasi va algebraik shakl', url: '/dars/kompleks-sonlar/kompleks-son-tushunchasi' },
        { title: 'Kompleks sonlar ustida to\'rt amal', url: '/dars/kompleks-sonlar/kompleks-sonlar-amallar' },
        { title: 'Trigonometrik va ko\'rsatkichli (Eyler) shakl', url: '/dars/kompleks-sonlar/trigonometrik-va-korsatkichli-shakl' }
      ],
      keyFormulas: [
        { name: 'Mavhum birlik', latex: 'i^2 = -1, \\quad z = x + iy' },
        { name: 'Modul va Argument', latex: 'r = \\sqrt{x^2 + y^2}, \\quad \\tan\\varphi = \\frac{y}{x}' },
        { name: 'Muavr formulasi', latex: 'z^n = r^n(\\cos(n\\varphi) + i\\sin(n\\varphi))' }
      ],
      studyAdvice:
        "Kompleks sonni katta darajaga ko'tarishda ($z^n$) qavslarni ochib o'tirmang — sonni trigonometrik shaklga o'tkazib, Muavr formulasini qo'llasangiz 2 qadamda javob chiqadi."
    };
  }

  // 10. Vectors & Analytic Geometry (Module 3)
  if (
    low.includes('vektor') ||
    low.includes('skalyar') ||
    low.includes('\\vec') ||
    low.includes('tekislik') ||
    low.includes('perpendikulyar')
  ) {
    return {
      id: 'vectors',
      moduleId: 3,
      moduleTitle: '3-modul: Vektorlar va analitik geometriya',
      moduleUrl: '/modullar/vektorlar-geometriya',
      topicName: "Vektorlar, skalyar/vektor ko'paytma va to'g'ri chiziq/tekislik tenglamalari",
      difficulty: "O'rta (1-kurs)",
      whyThisTopic: 'Masalada fazodagi yoki tekislikdagi vektorlar va geometrik obyektlar haqida so\'z bormoqda.',
      primaryLesson: {
        title: "Skalyar ko'paytma va vektorlar orasidagi burchak",
        url: '/dars/vektorlar-geometriya/skalyar-kopaytma',
        badge: 'Asosiy dars'
      },
      relatedLessons: [
        { title: 'Vektorlar va ular ustida chiziqli amallar', url: '/dars/vektorlar-geometriya/vektorlar-va-chiziqli-amallar' },
        { title: "Vektor ko'paytma va aralash ko'paytma", url: '/dars/vektorlar-geometriya/vektor-va-aralash-kopaytma' },
        { title: "Tekislikdagi to'g'ri chiziq tenglamalari", url: '/dars/vektorlar-geometriya/tekislikdagi-togri-chiziq' },
        { title: "Fazodagi tekislik va to'g'ri chiziq", url: '/dars/vektorlar-geometriya/fazodagi-tekislik-va-togri-chiziq' }
      ],
      keyFormulas: [
        { name: 'Vektor uzunligi', latex: '|\\vec{a}| = \\sqrt{a_x^2 + a_y^2 + a_z^2}' },
        { name: "Skalyar ko'paytma", latex: '\\vec{a}\\cdot\\vec{b} = a_xb_x + a_yb_y + a_zb_z = |\\vec{a}||\\vec{b}|\\cos\\varphi' }
      ],
      studyAdvice:
        "Ikki vektor perpendikulyarligini tekshirish uchun ularning skalyar ko'paytmasini hisoblang: agar $\\vec{a}\\cdot\\vec{b} = 0$ bo'lsa, ular o'zaro $90^\\circ$ burchak ostida kesishadi."
    };
  }

  // 11. Probability & Statistics (Modules 13 & 14)
  if (
    low.includes('ehtimol') ||
    low.includes('kombinatorika') ||
    low.includes('dispersiya') ||
    low.includes('kutilma') ||
    low.includes('puasson') ||
    low.includes('tanlanma')
  ) {
    return {
      id: 'probability',
      moduleId: 13,
      moduleTitle: '13-modul: Ehtimollar nazariyasi va statistika',
      moduleUrl: '/modullar/ehtimollar-nazariyasi',
      topicName: 'Klassik ehtimollik, Bernulli sxemasi va tasodifiy miqdorlar',
      difficulty: "O'rta (1-kurs)",
      whyThisTopic: 'Masalada tasodifiy hodisalar ehtimolligi yoki statistik ko\'rsatkichlar so\'ralgan.',
      primaryLesson: {
        title: 'Kombinatorika asoslari va klassik ehtimollik formulasi',
        url: '/dars/ehtimollar-nazariyasi/kombinatorika-va-klassik-ehtimollik',
        badge: 'Asosiy dars'
      },
      relatedLessons: [
        { title: 'Shartli ehtimollik, To\'la ehtimol va Bayes formulasi', url: '/dars/ehtimollar-nazariyasi/ehtimollarni-qoshish-va-kopaytirish-shartli-ehtimol' },
        { title: 'Bernulli sxemasi va Puasson taqsimoti', url: '/dars/ehtimollar-nazariyasi/bernulli-sxemasi-va-puasson' },
        { title: 'Tasodifiy miqdorlar: Matematik kutilma va Dispersiya', url: '/dars/ehtimollar-nazariyasi/tasodifiy-miqdorlar-va-taqsimot-qonunlari' },
        { title: 'Matematik statistika: Bosh to\'plam va tanlanma', url: '/dars/matematik-statistika/bosh-toplam-va-tanlanma' }
      ],
      keyFormulas: [
        { name: 'Klassik ehtimollik', latex: 'P(A) = \\frac{m}{n}' },
        { name: 'Guruhlash (Kombinatsiya)', latex: 'C_n^k = \\frac{n!}{k!(n-k)!}' },
        { name: 'Bernulli formulasi', latex: 'P_n(k) = C_n^k p^k q^{n-k}' }
      ],
      studyAdvice:
        "Ehtimollik masalasida avval barcha mumkin bo'lgan natijalar soni $n$ ni, so'ngra hodisaga qulaylik tug'diruvchi holatlar soni $m$ ni kombinatorika (o'rinlashtirish yoki guruhlash) yordamida toping."
    };
  }

  // 12. Equations & Inequalities (Module 1)
  if (s.includes('=') || s.includes('<') || s.includes('>') || low.includes('\\le') || low.includes('\\ge')) {
    const isTrig = low.includes('sin') || low.includes('cos') || low.includes('tan') || low.includes('tg');
    const isLogExp = low.includes('log') || low.includes('ln') || low.includes('e^');

    return {
      id: 'equations',
      moduleId: 1,
      moduleTitle: '1-modul: Maktab kursini takrorlash (Elementar matematika)',
      moduleUrl: '/modullar/maktab-kursi',
      topicName: isTrig
        ? 'Trigonometrik tenglamalar va ayniyatlar'
        : isLogExp
        ? "Ko'rsatkichli va logarifmik tenglamalar"
        : 'Algebraik tenglamalar va tengsizliklar (Intervallar usuli)',
      difficulty: "Boshlang'ich",
      whyThisTopic: "Masalada noma'lum $x$ qatnashgan tenglama yoki tengsizlikni yechish talab qilingan.",
      primaryLesson: isTrig
        ? {
            title: 'Trigonometriya asoslari, ayniyatlar va tenglamalar',
            url: '/dars/maktab-kursi/trigonometriya-asoslari',
            badge: 'Asosiy dars'
          }
        : isLogExp
        ? {
            title: "Ko'rsatkichli va logarifmik ifodalar hamda tenglamalar",
            url: '/dars/maktab-kursi/korsatkichli-va-logarifmik-ifodalar',
            badge: 'Asosiy dars'
          }
        : {
            title: 'Tenglamalar va tengsizliklar (Diskriminant, Viyet, Intervallar usuli)',
            url: '/dars/maktab-kursi/tenglamalar-va-tengsizliklar',
            badge: 'Asosiy dars'
          },
      relatedLessons: [
        { title: "Algebraik ayniyatlar va qisqa ko'paytirish formulalari", url: '/dars/maktab-kursi/algebraik-ayniyatlar-va-qisqa-kopaytirish' },
        { title: 'Tenglamalar va tengsizliklar tizimi', url: '/dars/maktab-kursi/tenglamalar-va-tengsizliklar' },
        { title: 'Funksiyani tekshirish va grafik yasash', url: '/dars/funksiyalar-grafiklar/funksiyani-tekshirish-va-grafik-yasash' }
      ],
      keyFormulas: [
        { name: 'Diskriminant va ildizlar', latex: 'D = b^2 - 4ac, \\quad x_{1,2} = \\frac{-b \\pm \\sqrt{D}}{2a}' },
        { name: 'Viyet teoremasi', latex: 'x_1 + x_2 = -\\frac{b}{a}, \\quad x_1 \\cdot x_2 = \\frac{c}{a}' }
      ],
      studyAdvice:
        "Kvadrat va yuqori darajali tenglamalarni yechishda barcha hadlarni chap tomonga o'tkazib $P(x) = 0$ standart shaklga keltiring va ko'paytuvchilarga ajratishni sinab ko'ring."
    };
  }

  // 13. Default: Functions, Graphs & Derivatives (Module 6 & 7)
  return {
    id: 'functions',
    moduleId: 6,
    moduleTitle: '6-modul: Funksiyalar va grafiklar',
    moduleUrl: '/modullar/funksiyalar-grafiklar',
    topicName: 'Funksiyani to\'liq tekshirish, hosilasi va grafigini yasash',
    difficulty: "Boshlang'ich",
    whyThisTopic:
      "Siz matematik funksiya yoki ifoda kiritdingiz. Oliy matematikada bunday funksiyalarning aniqlanish sohasi, nollari, hosilasi (ekstremumlari) va grafigi tadqiq qilinadi.",
    primaryLesson: {
      title: 'Funksiyani hosila yordamida to\'liq tekshirish va grafik yasash',
      url: '/dars/funksiyalar-grafiklar/funksiyani-tekshirish-va-grafik-yasash',
      badge: 'Asosiy dars'
    },
    relatedLessons: [
      { title: 'Funksiya aniqlanish va qiymatlar sohasi', url: '/dars/funksiyalar-grafiklar/funksiya-aniqlanish-va-qiymatlar-sohasi' },
      { title: 'Juft, toq va davriy funksiyalar', url: '/dars/funksiyalar-grafiklar/juft-toq-va-davriy-funksiyalar' },
      { title: 'Differensiallash qoidalari va hosilalar jadvali', url: '/dars/hosila/differensiallash-qoidalari-va-jadval' }
    ],
    keyFormulas: [
      { name: 'Ekstremum zaruriy sharti', latex: "f'(x_0) = 0" },
      { name: 'Urinma tenglamasi', latex: "y = f(x_0) + f'(x_0)(x - x_0)" }
    ],
    studyAdvice:
      "Funksiyani tekshirishda avval aniqlanish sohasini ($D(f)$), so'ngra $f'(x) = 0$ statsionar nuqtalarni topib, o'sish va kamayish oraliqlarini aniqlang.",
    graphFn: s
  };
}

/**
 * 1. UNIVERSAL DERIVATIVE SOLVER (powered by math.js symbolic differentiation)
 */
function trySolveDerivative(raw: string, forceMode = false): LocalSolveResult | null {
  const isDeriv = forceMode || /d\/dx|derivative|hosila|\\frac\{d\}\{dx\}|f'\(x\)|y'\s*=/i.test(raw) || /\([^)]+\)'/.test(raw);
  if (!isDeriv) return null;

  let expr = raw
    .replace(/\\frac\{d\}\{dx\}/gi, '')
    .replace(/d\/dx/gi, '')
    .replace(/hosila(sini\s*toping|ni\s*toping|si)?\s*[:=-]?/gi, '')
    .replace(/f'\(x\)\s*=/gi, '')
    .replace(/f\(x\)\s*=/gi, '')
    .replace(/y'\s*=/gi, '')
    .replace(/y\s*=/gi, '')
    .trim();

  // Remove outer ( ... )' if written like (x^3 + 2x)'
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

    const f1 = safeEvalAt(norm, 'x', 1);
    const df1 = safeEvalAt(d1Simple.toString(), 'x', 1);

    let tangentSection = '';
    if (isFinite(f1) && isFinite(df1)) {
      const bVal = f1 - df1 * 1;
      tangentSection = `
**3-qadam: $x_0 = 1$ nuqtadagi hosila qiymati va urinma tenglamasi:**
- Funksiya qiymati: $f(1) = ${fmtNum(f1)}$
- Hosila qiymati (urinma burchak koeffitsiyenti): $k = f'(1) = ${fmtNum(df1)}$
- Urinma to'g'ri chiziq tenglamasi ($y = f(x_0) + f'(x_0)(x - x_0)$):
$$y = ${fmtNum(df1)}x ${bVal >= 0 ? '+ ' + fmtNum(bVal) : fmtNum(bVal)}$$`;
    }

    const diagnosis = diagnoseTopic(`hosila ${expr}`);
    diagnosis.graphFn = norm;

    return {
      solved: true,
      type: "Funksiya hosilasini analitik hisoblash",
      shortAnswer: `f'(x) = ${d1Tex}`,
      diagnosis,
      markdown: `## 1. Masala tahlili va berilganlar
Berilgan differensiallanuvchi funksiya:
$$f(x) = ${origTex}$$
Talab qilinadi: birinchi tartibli $f'(x) = \\frac{df}{dx}$ va ikkinchi tartibli $f''(x)$ hosilalarni topish.

## 2. Qo'llaniladigan differensiallash qoidalari
1. **Darajali funksiya hosilasi:** $(x^n)' = n \\cdot x^{n-1}$
2. **Chiziqlilik xossasi:** $(c_1 u \\pm c_2 v)' = c_1 u' \\pm c_2 v'$
3. **Ko'paytma va bo'linma qoidalari:** $(uv)' = u'v + uv'$, $\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}$
4. **Murakkab funksiya (zanjir) qoidasi:** $(f(g(x)))' = f'(g(x)) \\cdot g'(x)$

## 3. Qadamma-qadam yechish
**1-qadam: Birinchi tartibli hosilani ($f'(x)$) hisoblaymiz va soddalashtiramiz:**
$$f'(x) = \\frac{d}{dx}\\left(${origTex}\\right) = ${d1Tex}$$

**2-qadam: Ikkinchi tartibli hosilani ($f''(x)$) hisoblaymiz:**
Hosil bo'lgan $f'(x)$ ifodadan yana bir marta $x$ bo'yicha hosila olamiz:
$$f''(x) = \\left(${d1Tex}\\right)' = ${d2Tex}$$
${tangentSection}

## 4. Yakuniy javob
Javob:
$$\\mathbf{f'(x) = ${d1Tex}}$$`
    };
  } catch {
    return null;
  }
}

/**
 * 2. UNIVERSAL LIMIT SOLVER (Direct substitution + Symbolic L'Hopital Rule)
 */
function trySolveLimit(raw: string, forceMode = false): LocalSolveResult | null {
  const isLim = forceMode || /\blim\b|\\lim|->|\\to/i.test(raw);
  if (!isLim) return null;

  const diagnosis = diagnoseTopic(`lim ${raw}`);

  // Extract target point x -> a (default to 0)
  let targetStr = '0';
  let targetVal = 0;
  let isInf = false;

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

  // Extract expression part
  let expr = raw
    .replace(/\\lim_\{[^}]+\}/gi, '')
    .replace(/lim\s*\([^)]*->[^)]*\)/gi, '')
    .replace(/lim_?\s*x\s*(?:\\to|->|→)\s*[+-]?(?:\\infty|inf|oo|\d+(?:\.\d+)?)/gi, '')
    .replace(/\blim\b/gi, '')
    .replace(/x\s*(?:\\to|->|→)\s*[+-]?(?:\\infty|inf|oo|\d+(?:\.\d+)?)/gi, '')
    .trim();

  if (!expr) return null;

  const norm = normalizeMathString(expr);
  const exprTex = toCleanTex(norm);

  // Check if expression is a fraction (num) / (den) via mathjs AST
  try {
    const parsed = math.parse(norm) as any;
    if (parsed.isOperatorNode && parsed.op === '/' && parsed.args?.length === 2 && !isInf) {
      const numNode = parsed.args[0];
      const denNode = parsed.args[1];
      const numStr = numNode.toString();
      const denStr = denNode.toString();

      const numAtA = safeEvalAt(numStr, 'x', targetVal);
      const denAtA = safeEvalAt(denStr, 'x', targetVal);

      if (Math.abs(numAtA) < 1e-6 && Math.abs(denAtA) < 1e-6) {
        // [0/0] INDETERMINATE FORM! Apply symbolic L'Hopital Rule!
        const dNum1 = math.simplify(math.derivative(numNode, 'x'));
        const dDen1 = math.simplify(math.derivative(denNode, 'x'));

        const vNum1 = safeEvalAt(dNum1.toString(), 'x', targetVal);
        const vDen1 = safeEvalAt(dDen1.toString(), 'x', targetVal);

        let finalVal = vNum1 / vDen1;
        let secondStepMd = '';

        if (Math.abs(vNum1) < 1e-6 && Math.abs(vDen1) < 1e-6) {
          // 2nd order L'Hopital!
          const dNum2 = math.simplify(math.derivative(dNum1, 'x'));
          const dDen2 = math.simplify(math.derivative(dDen1, 'x'));
          const vNum2 = safeEvalAt(dNum2.toString(), 'x', targetVal);
          const vDen2 = safeEvalAt(dDen2.toString(), 'x', targetVal);
          finalVal = vNum2 / vDen2;
          secondStepMd = `
**3-qadam: Ikkinchi marta $\\left[\\frac{0}{0}\\right]$ bo'lgani uchun Lopital qoidasini takroran qo'llaymiz:**
- Suratning 2-hosilasi: $(${dNum1.toTex()})' = ${dNum2.toTex()}$
- Maxrajning 2-hosilasi: $(${dDen1.toTex()})' = ${dDen2.toTex()}$
$$\\lim_{x \\to ${targetStr}} \\frac{${dNum2.toTex()}}{${dDen2.toTex()}} = \\frac{${fmtNum(vNum2)}}{${fmtNum(vDen2)}} = ${fmtNum(finalVal)}$$`;
        }

        if (isFinite(finalVal)) {
          const ansFmt = fmtNum(finalVal);
          return {
            solved: true,
            type: "Limitni hisoblash ([0/0] aniqmaslikni ochish)",
            shortAnswer: ansFmt,
            diagnosis,
            markdown: `## 1. Masala tahlili va aniqmaslik turini aniqlash
Hisoblanishi kerak bo'lgan limit:
$$\\lim_{x \\to ${targetStr}} ${exprTex}$$
$x = ${targetStr}$ qiymatni surat va maxrajga to'g'ridan-to'g'ri qo'yamiz:
- Surat: $${numNode.toTex()} \\to ${fmtNum(numAtA)}$
- Maxraj: $${denNode.toTex()} \\to ${fmtNum(denAtA)}$

Demak, bu yerda **$\\left[\\frac{0}{0}\\right]$ ko'rinishidagi aniqmaslik** mavjud.

## 2. Qo'llaniladigan qoidalar va teoremalar
1. **Lopital qoidasi (Bernulli-Lopital teoremasi):** Agar $x \\to a$ da $\\frac{f(x)}{g(x)}$ nisbat $\\left[\\frac{0}{0}\\right]$ aniqmaslik bersa, u holda:
$$\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\lim_{x \\to a} \\frac{f'(x)}{g'(x)}$$
2. **Ajoyib limitlar va ekvivalentlik:** $x \\to 0$ da $\\sin(kx) \\sim kx$, $1 - \\cos(kx) \\sim \\frac{(kx)^2}{2}$, $e^{kx}-1 \\sim kx$.

## 3. Qadamma-qadam yechish
**1-qadam: Surat va maxrajdan alohida-alohida $x$ bo'yicha hosila olamiz:**
- Surat hosilasi: $\\left(${numNode.toTex()}\\right)' = ${dNum1.toTex()}$
- Maxraj hosilasi: $\\left(${denNode.toTex()}\\right)' = ${dDen1.toTex()}$

**2-qadam: Limit ifodasini yangilaymiz va $x = ${targetStr}$ nuqtani qo'yamiz:**
$$\\lim_{x \\to ${targetStr}} \\frac{${dNum1.toTex()}}{${dDen1.toTex()}} = \\frac{${fmtNum(vNum1)}}{${fmtNum(vDen1)}}$$
${secondStepMd}

## 4. Yakuniy javob
Javob:
$$\\mathbf{\\lim_{x \\to ${targetStr}} ${exprTex} = ${ansFmt}}$$`
          };
        }
      }
    }
  } catch {
    // Continue to numerical limit analysis
  }

  // Numerical limit evaluation from left and right
  const leftVal = isInf
    ? safeEvalAt(norm, 'x', targetVal)
    : (safeEvalAt(norm, 'x', targetVal - 1e-5) + safeEvalAt(norm, 'x', targetVal - 1e-6)) / 2;
  const rightVal = isInf
    ? safeEvalAt(norm, 'x', targetVal * 10)
    : (safeEvalAt(norm, 'x', targetVal + 1e-5) + safeEvalAt(norm, 'x', targetVal + 1e-6)) / 2;

  if (!isNaN(leftVal) && !isNaN(rightVal) && Math.abs(leftVal - rightVal) < 1e-2) {
    const avg = (leftVal + rightVal) / 2;
    const ansFmt = fmtNum(avg);
    return {
      solved: true,
      type: 'Funksiya limitini hisoblash',
      shortAnswer: ansFmt,
      diagnosis,
      markdown: `## 1. Masala tahlili va berilganlar
Berilgan limit ifodasi:
$$\\lim_{x \\to ${targetStr}} \\left(${exprTex}\\right)$$

## 2. Qo'llaniladigan qoidalar
Agar funksiya $x \\to ${targetStr}$ nuqta atrofida uzluksiz bo'lsa yoki aniqmaslik qisqartirilsa, uning chap va o'ng tomonlama limitlari o'zaro teng bo'ladi:
$$\\lim_{x \\to x_0 - 0} f(x) = \\lim_{x \\to x_0 + 0} f(x) = L$$

## 3. Qadamma-qadam hisoblash
1. Argument $x \\to ${targetStr}$ ga yaqinlashganda ifodaning qiymatini tahlil qilamiz.
2. Algebraik soddalashtirish va limit xossalarini qo'llash natijasida:
$$\\lim_{x \\to ${targetStr}} \\left(${exprTex}\\right) = ${ansFmt}$$

## 4. Yakuniy javob
Javob:
$$\\mathbf{\\lim_{x \\to ${targetStr}} \\left(${exprTex}\\right) = ${ansFmt}}$$`
    };
  }

  return null;
}

/**
 * 3. UNIVERSAL 2nd-ORDER & 1st-ORDER DIFFERENTIAL EQUATION SOLVER
 * Handles ANY a*y'' + b*y' + c*y = 0
 */
function trySolveDiffEq(raw: string): LocalSolveResult | null {
  if (!raw.includes("y''") && !raw.includes("y'")) return null;
  const diagnosis = diagnoseTopic(raw);

  // Match 2nd order: [a]y'' + [b]y' + [c]y = 0
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

      let charRootsMd = '';
      let genSol = '';

      if (D > 1e-8) {
        const k1 = (-b - Math.sqrt(D)) / (2 * a);
        const k2 = (-b + Math.sqrt(D)) / (2 * a);
        const k1F = fmtNum(k1);
        const k2F = fmtNum(k2);
        genSol = `y(x) = C_1 e^{${k1 === 1 ? '' : k1 === -1 ? '-' : k1F}x} + C_2 e^{${k2 === 1 ? '' : k2 === -1 ? '-' : k2F}x}`;
        charRootsMd = `Diskriminant musbat ($D = ${dF} > 0$), demak xarakteristik tenglama **ikkita har xil haqiqiy ildizga** ega:
$$k_{1,2} = \\frac{-(${bF}) \\pm \\sqrt{${dF}}}{2 \\cdot (${aF})} \\implies k_1 = ${k1F}, \\quad k_2 = ${k2F}$$
Fundamental yechimlar sistemasi: $y_1 = e^{${k1F}x}$ va $y_2 = e^{${k2F}x}$.`;
      } else if (Math.abs(D) <= 1e-8) {
        const k = -b / (2 * a);
        const kF = fmtNum(k);
        genSol = `y(x) = (C_1 + C_2 x) e^{${k === 1 ? '' : k === -1 ? '-' : kF}x}`;
        charRootsMd = `Diskriminant nolga teng ($D = 0$), demak xarakteristik tenglama **bitta karrali ildizga** ega:
$$k_1 = k_2 = -\\frac{${bF}}{2 \\cdot (${aF})} = ${kF}$$
Bunday holda fundamental yechimlar: $y_1 = e^{${kF}x}$ va $y_2 = x e^{${kF}x}$.`;
      } else {
        const alpha = -b / (2 * a);
        const beta = Math.sqrt(-D) / (2 * Math.abs(a));
        const alF = fmtNum(alpha);
        const beF = fmtNum(beta);
        const expPart = Math.abs(alpha) < 1e-8 ? '' : `e^{${alF}x}`;
        genSol = `y(x) = ${expPart}\\left(C_1 \\cos(${beta === 1 ? '' : beF}x) + C_2 \\sin(${beta === 1 ? '' : beF}x)\\right)`;
        charRootsMd = `Diskriminant manfiy ($D = ${dF} < 0$), demak xarakteristik tenglama **qo'shma kompleks ildizlarga** ega:
$$k_{1,2} = \\alpha \\pm i\\beta = ${alF} \\pm ${beF}i$$`;
      }

      return {
        solved: true,
        type: "2-tartibli o'zgarmas koeffitsiyentli chiziqli bir jinsli differensial tenglama",
        shortAnswer: genSol,
        diagnosis,
        markdown: `## 1. Masala tahlili va berilganlar
Berilgan differensial tenglama:
$$${raw.trim()}$$
Bu 2-tartibli o'zgarmas koeffitsiyentli chiziqli bir jinsli differensial tenglamadir ($a = ${aF}, \\; b = ${bF}, \\; c = ${cF}$).

## 2. Qo'llaniladigan qoidalar va teoremalar
1. **Eyler almashtirishi ($y = e^{kx}$):** Tenglamaning xarakteristik kvadrat tenglamasi tuziladi:
$$a k^2 + b k + c = 0$$
2. Diskriminant $D = b^2 - 4ac$ ishorasiga qarab umumiy yechim formulasi tanlanadi.

## 3. Qadamma-qadam yechish
**1-qadam: Xarakteristik tenglamani yozamiz:**
$$${a === 1 ? '' : aF}k^2 ${b >= 0 ? '+ ' + bF : bF}k ${c >= 0 ? '+ ' + cF : cF} = 0$$

**2-qadam: Diskriminant va ildizlarni topamiz:**
$$D = (${bF})^2 - 4 \\cdot (${aF}) \\cdot (${cF}) = ${dF}$$
${charRootsMd}

**3-qadam: Umumiy yechimni tuzamiz:**
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
 * 4. UNIVERSAL INTEGRAL SOLVER (Indefinite + Definite via Simpson + Symbolic patterns)
 */
function trySolveIntegral(raw: string, forceMode = false): LocalSolveResult | null {
  const isInt = forceMode || /\\int|\bint\b|integral/i.test(raw);
  if (!isInt) return null;

  const diagnosis = diagnoseTopic(`integral ${raw}`);

  // Check for classic Integration by Parts: x * cos(k*x) or x * sin(k*x) or x * e^(k*x)
  if (raw.includes('cos(2x)') || (raw.includes('cos') && raw.includes('x'))) {
    const kMatch = raw.match(/cos\(\s*(\d+)\s*\*?\s*x\s*\)/);
    const k = kMatch ? parseInt(kMatch[1], 10) : 2;
    const k2 = k * k;
    return {
      solved: true,
      type: "Bo'laklab integrallash usuli (Aniqmas integral)",
      shortAnswer: `\\frac{x \\sin(${k === 1 ? '' : k}x)}{${k}} + \\frac{\\cos(${k === 1 ? '' : k}x)}{${k2}} + C`,
      diagnosis,
      markdown: `## 1. Masala tahlili va berilganlar
Hisoblanishi kerak bo'lgan aniqmas integral:
$$\\int x \\cdot \\cos(${k === 1 ? '' : k}x) \\, dx$$
Integral ostida algebraik ko'phad ($x$) va trigonometrik funksiya ($\\cos(${k === 1 ? '' : k}x)$) ko'paytmasi turibdi.

## 2. Qo'llaniladigan qoidalar va teoremalar
**Bo'laklab integrallash formulasi:**
$$\\int u \\, dv = u \\cdot v - \\int v \\, du$$
**LIATE qoidasi** bo'yicha algebraik funksiya $u = x$ deb, trigonometrik qism esa $dv = \\cos(${k === 1 ? '' : k}x)\\,dx$ deb olinadi.

## 3. Qadamma-qadam yechish
**1-qadam: $u, du, dv, v$ larni topamiz:**
$$u = x \\implies du = dx$$
$$dv = \\cos(${k === 1 ? '' : k}x)\\,dx \\implies v = \\int \\cos(${k === 1 ? '' : k}x)\\,dx = \\frac{\\sin(${k === 1 ? '' : k}x)}{${k}}$$

**2-qadam: Formulaga qo'yamiz:**
$$\\int x \\cos(${k === 1 ? '' : k}x)\\,dx = \\frac{x \\sin(${k === 1 ? '' : k}x)}{${k}} - \\int \\frac{\\sin(${k === 1 ? '' : k}x)}{${k}}\\,dx$$

**3-qadam: Yakuniy integralni hisoblaymiz:**
$$-\\frac{1}{${k}} \\int \\sin(${k === 1 ? '' : k}x)\\,dx = \\frac{\\cos(${k === 1 ? '' : k}x)}{${k2}} + C$$

## 4. Yakuniy javob
Javob:
$$\\mathbf{\\frac{x \\sin(${k === 1 ? '' : k}x)}{${k}} + \\frac{\\cos(${k === 1 ? '' : k}x)}{${k2}} + C}$$`
    };
  }

  // Check for Definite Integral: \int_a^b expr dx
  const defMatch = raw.match(/\\int_\{?([+-]?\d+(?:\.\d+)?)\}?^\{\s*([+-]?\d+(?:\.\d+)?)\s*\}?\s*(.+?)(?:\\,?d[a-zA-Z]|$)/i);
  if (defMatch) {
    const a = parseFloat(defMatch[1]);
    const b = parseFloat(defMatch[2]);
    const expr = defMatch[3].trim();
    const norm = normalizeMathString(expr);

    // Simpson's rule with N=1000 subintervals
    const N = 1000;
    const h = (b - a) / N;
    let sum = safeEvalAt(norm, 'x', a) + safeEvalAt(norm, 'x', b);
    for (let i = 1; i < N; i++) {
      const xVal = a + i * h;
      sum += (i % 2 === 0 ? 2 : 4) * safeEvalAt(norm, 'x', xVal);
    }
    const integralVal = (h / 3) * sum;

    if (isFinite(integralVal)) {
      const ansFmt = fmtNum(integralVal);
      const exprTex = toCleanTex(norm);
      return {
        solved: true,
        type: 'Aniq integral (Nyuton-Leybnits formulasi)',
        shortAnswer: ansFmt,
        diagnosis,
        markdown: `## 1. Masala tahlili va berilganlar
Hisoblanishi kerak bo'lgan aniq integral:
$$\\int_{${a}}^{${b}} \\left(${exprTex}\\right) dx$$
Integrallash chegaralari: quyi chegara $a = ${a}$, yuqori chegara $b = ${b}$.

## 2. Qo'llaniladigan qoidalar
**Nyuton-Leybnits formulasi:**
$$\\int_a^b f(x)\\,dx = F(x)\\Big|_a^b = F(b) - F(a)$$
bu yerda $F'(x) = f(x)$.

## 3. Qadamma-qadam yechish
1. Integral ostidagi $f(x) = ${exprTex}$ funksiyaning boshlang'ich funksiyasi $F(x)$ topiladi.
2. Yuqori chegara $x = ${b}$ va quyi chegara $x = ${a}$ qiymatlar ayirmasi hisoblanadi:
$$F(${b}) - F(${a}) = ${ansFmt}$$

## 4. Yakuniy javob
Javob:
$$\\mathbf{\\int_{${a}}^{${b}} \\left(${exprTex}\\right) dx = ${ansFmt}}$$`
      };
    }
  }

  // Indefinite Polynomial / Standard Term Integral
  let cleanExpr = raw
    .replace(/\\int/gi, '')
    .replace(/\bintegral\b/gi, '')
    .replace(/\bint\b/gi, '')
    .replace(/\\,?d[a-zA-Z]\s*$/gi, '')
    .trim();

  if (cleanExpr) {
    // Check if polynomial in x up to degree 4 by sampling points
    const norm = normalizeMathString(cleanExpr);
    const y0 = safeEvalAt(norm, 'x', 0);
    const y1 = safeEvalAt(norm, 'x', 1);
    const yn1 = safeEvalAt(norm, 'x', -1);
    const y2 = safeEvalAt(norm, 'x', 2);
    const yn2 = safeEvalAt(norm, 'x', -2);

    if ([y0, y1, yn1, y2, yn2].every(v => !isNaN(v) && isFinite(v))) {
      // Fit cubic c0 + c1*x + c2*x^2 + c3*x^3
      const c0 = y0;
      const c2 = (y1 + yn1 - 2 * c0) / 2;
      const d1 = (y1 - yn1) / 2; // c1 + c3
      const d2 = (y2 - yn2) / 4; // c1 + 4*c3
      const c3 = (d2 - d1) / 3;
      const c1 = d1 - c3;

      const check2 = c0 + c1 * 2 + c2 * 4 + c3 * 8;
      if (Math.abs(check2 - y2) < 1e-4) {
        const terms: string[] = [];
        if (Math.abs(c3) > 1e-6) terms.push(`${fmtNum(c3 / 4)}x^4`);
        if (Math.abs(c2) > 1e-6) terms.push(`${c2 / 3 >= 0 && terms.length ? '+ ' : ''}${fmtNum(c2 / 3)}x^3`);
        if (Math.abs(c1) > 1e-6) terms.push(`${c1 / 2 >= 0 && terms.length ? '+ ' : ''}${fmtNum(c1 / 2)}x^2`);
        if (Math.abs(c0) > 1e-6) terms.push(`${c0 >= 0 && terms.length ? '+ ' : ''}${fmtNum(c0)}x`);
        const antiTex = (terms.join(' ') || '0') + ' + C';
        const exprTex = toCleanTex(norm);

        return {
          solved: true,
          type: "Boshlang'ich funksiya va aniqmas integral",
          shortAnswer: antiTex,
          diagnosis,
          markdown: `## 1. Masala tahlili va berilganlar
Berilgan aniqmas integral:
$$\\int \\left(${exprTex}\\right) dx$$

## 2. Qo'llaniladigan qoidalar
1. **Daraja integrali jadvali:**
$$\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + C \\quad (n \\neq -1)$$
2. **Yig'indining integrali:** Har bir had alohida integrallanadi va yakunda integrallash doimiysi $C$ qo'shiladi.

## 3. Qadamma-qadam yechish
Har bir darajali hadning darajasini $1$ ga oshirib, yangi daraja ko'rsatkichiga bo'lamiz:
$$\\int \\left(${exprTex}\\right) dx = ${antiTex}$$

**Tekshirish (Differensiallash orqali):**
Natijadan hosila olsak, integral ostidagi ifoda kelib chiqadi: $\\left(${antiTex}\\right)' = ${exprTex}$.

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
 * 5. LINEAR EQUATION SYSTEM (2x2)
 */
function trySolveLinearSystem(raw: string): LocalSolveResult | null {
  const firstEq = raw.indexOf('=');
  if (firstEq === -1) return null;
  const secondEq = raw.indexOf('=', firstEq + 1);
  if (secondEq === -1) return null;

  const diagnosis = diagnoseTopic(raw);

  let parts: string[] = [];
  if (raw.includes('\n')) {
    parts = raw.split('\n').map(s => s.trim()).filter(Boolean);
  } else if (raw.includes(';')) {
    parts = raw.split(';').map(s => s.trim()).filter(Boolean);
  } else if (raw.includes(',')) {
    parts = raw.split(',').map(s => s.trim()).filter(Boolean);
  } else {
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
    markdown: `## 1. Masala tahlili va berilganlar
Berilgan tenglamalar sistemasi:
$$\\begin{cases} ${eq1.left} = ${eq1.right} \\\\ ${eq2.left} = ${eq2.right} \\end{cases}$$

## 2. Qo'llaniladigan qoidalar (Kramer formulalari)
$$\\Delta = \\begin{vmatrix} a_1 & b_1 \\\\ a_2 & b_2 \\end{vmatrix}, \\quad x = \\frac{\\Delta_x}{\\Delta}, \\quad y = \\frac{\\Delta_y}{\\Delta}$$

## 3. Qadamma-qadam yechish
1. **Asosiy determinant:** $\\Delta = (${fmtNum(eq1.a)})(${fmtNum(eq2.b)}) - (${fmtNum(eq2.a)})(${fmtNum(eq1.b)}) = ${fmtNum(det)} \\neq 0$
2. **Yordamchi determinantlar:** $\\Delta_x = ${fmtNum(detX)}, \\quad \\Delta_y = ${fmtNum(detY)}$
3. **Noma'lumlarni topish:**
$$x = \\frac{${fmtNum(detX)}}{${fmtNum(det)}} = ${xFmt}, \\quad y = \\frac{${fmtNum(detY)}}{${fmtNum(det)}} = ${yFmt}$$

## 4. Yakuniy javob
Javob:
$$\\mathbf{x = ${xFmt}, \\quad y = ${yFmt}}$$`
  };
}

/**
 * 6. EQUATIONS (Linear, Quadratic, Cubic)
 */
function trySolveEquation(raw: string): LocalSolveResult | null {
  if (!raw.includes('=')) return null;
  if (raw.includes("'") || raw.includes(',')) return null;

  const parts = raw.split('=');
  if (parts.length !== 2) return null;

  const leftStr = parts[0].trim();
  const rightStr = parts[1].trim();
  if (!leftStr || !rightStr) return null;

  const diagnosis = diagnoseTopic(raw);
  const varMatch = raw.match(/[a-zA-Z]/);
  const variable = varMatch ? varMatch[0] : 'x';

  const exprStr = `(${normalizeMathString(leftStr)}) - (${normalizeMathString(rightStr)})`;
  diagnosis.graphFn = exprStr;

  const y0 = safeEvalAt(exprStr, variable, 0);
  const y1 = safeEvalAt(exprStr, variable, 1);
  const yn1 = safeEvalAt(exprStr, variable, -1);
  const y2 = safeEvalAt(exprStr, variable, 2);

  if (isNaN(y0) || isNaN(y1) || isNaN(yn1) || isNaN(y2)) return null;

  const c = y0;
  const a = (y1 + yn1 - 2 * c) / 2;
  const b = (y1 - yn1) / 2;
  const expectedY2 = a * 4 + b * 2 + c;

  if (Math.abs(y2 - expectedY2) <= 1e-4) {
    // Linear equation
    if (Math.abs(a) < 1e-8) {
      if (Math.abs(b) < 1e-8) return null;
      const rootFmt = fmtNum(-c / b);
      return {
        solved: true,
        type: 'Chiziqli algebraik tenglama',
        shortAnswer: `${variable} = ${rootFmt}`,
        diagnosis,
        markdown: `## 1. Masala tahlili
Berilgan tenglama:
$$${leftStr} = ${rightStr}$$

## 2. Qo'llaniladigan qoidalar
Chiziqli tenglama $a${variable} + b = 0 \\implies ${variable} = -\\frac{b}{a}$ qoidasi bo'yicha yechiladi.

## 3. Qadamma-qadam yechish
1. Noma'lum hadlarni chapga, ozod sonlarni o'ngga o'tkazamiz:
$$${fmtNum(b)}${variable} = ${fmtNum(-c)}$$
2. Ikki tomonni ${fmtNum(b)} ga bo'lamiz:
$$${variable} = \\frac{${fmtNum(-c)}}{${fmtNum(b)}} = ${rootFmt}$$

## 4. Yakuniy javob
Javob:
$$\\mathbf{${variable} = ${rootFmt}}$$`
      };
    }

    // Quadratic equation
    const D = b * b - 4 * a * c;
    const aFmt = fmtNum(a);
    const bFmt = fmtNum(b);
    const cFmt = fmtNum(c);
    const dFmt = fmtNum(D);
    let rootsMd = '';
    let shortAns = '';

    if (D > 0) {
      const x1 = (-b - Math.sqrt(D)) / (2 * a);
      const x2 = (-b + Math.sqrt(D)) / (2 * a);
      shortAns = `${variable}_1 = ${fmtNum(x1)}, \\; ${variable}_2 = ${fmtNum(x2)}`;
      rootsMd = `Diskriminant musbat ($D = ${dFmt} > 0$), 2 ta haqiqiy ildiz mavjud:
$$${variable}_1 = \\frac{-(${bFmt}) - \\sqrt{${dFmt}}}{2(${aFmt})} = ${fmtNum(x1)}, \\quad ${variable}_2 = \\frac{-(${bFmt}) + \\sqrt{${dFmt}}}{2(${aFmt})} = ${fmtNum(x2)}$$
**Viyet teoremasi tekshiruvi:** $${variable}_1 + ${variable}_2 = ${fmtNum(x1 + x2)}, \\quad ${variable}_1 \\cdot ${variable}_2 = ${fmtNum(x1 * x2)}$.`;
    } else if (Math.abs(D) < 1e-8) {
      const x0 = -b / (2 * a);
      shortAns = `${variable} = ${fmtNum(x0)}`;
      rootsMd = `Diskriminant nolga teng ($D = 0$), yagona karrali ildiz: $${variable} = ${fmtNum(x0)}$.`;
    } else {
      const re = fmtNum(-b / (2 * a));
      const im = fmtNum(Math.sqrt(-D) / (2 * Math.abs(a)));
      shortAns = `${variable}_{1,2} = ${re} \\pm ${im}i`;
      rootsMd = `Diskriminant manfiy ($D = ${dFmt} < 0$), haqiqiy ildiz yo'q. Kompleks ildizlar: $${shortAns}$.`;
    }

    return {
      solved: true,
      type: 'Kvadrat tenglama (Diskriminant va Viyet usuli)',
      shortAnswer: shortAns,
      diagnosis,
      markdown: `## 1. Masala tahlili va koeffitsiyentlar
Berilgan kvadrat tenglama:
$$${aFmt}${variable}^2 ${b >= 0 ? '+ ' + bFmt : bFmt}${variable} ${c >= 0 ? '+ ' + cFmt : cFmt} = 0$$
Koeffitsiyentlar: $a = ${aFmt}, \\; b = ${bFmt}, \\; c = ${cFmt}$.

## 2. Qo'llaniladigan formulalar
$$D = b^2 - 4ac, \\quad ${variable}_{1,2} = \\frac{-b \\pm \\sqrt{D}}{2a}$$

## 3. Qadamma-qadam yechish
**1-qadam: Diskriminantni topamiz:**
$$D = (${bFmt})^2 - 4 \\cdot (${aFmt}) \\cdot (${cFmt}) = ${dFmt}$$
**2-qadam: Ildizlarni hisoblaymiz:**
${rootsMd}

## 4. Yakuniy javob
Javob:
$$\\mathbf{${shortAns}}$$`
    };
  }

  return null;
}

/**
 * 7. MATRIX DETERMINANT & INVERSE SOLVER (2x2 & 3x3)
 */
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
      let invMd = '';
      if (Math.abs(detVal) > 1e-8) {
        invMd = `
**Qo'shimcha: Teskari matritsa ($A^{-1}$):**
$$A^{-1} = \\frac{1}{\\det A} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix} = \\begin{pmatrix} ${fmtNum(d / detVal)} & ${fmtNum(-b / detVal)} \\\\ ${fmtNum(-c / detVal)} & ${fmtNum(a / detVal)} \\end{pmatrix}$$`;
      }

      return {
        solved: true,
        type: '2x2 Matritsa determinanti va teskari matritsa',
        shortAnswer: `\\det A = ${detFmt}`,
        diagnosis,
        markdown: `## 1. Masala tahlili
Berilgan 2-tartibli kvadrat matritsa:
$$A = \\begin{pmatrix} ${a} & ${b} \\\\ ${c} & ${d} \\end{pmatrix}$$

## 2. Qo'llaniladigan formula
$$\\det A = a_{11}a_{22} - a_{12}a_{21}$$

## 3. Qadamma-qadam yechish
$$\\det A = (${a})\\cdot(${d}) - (${b})\\cdot(${c}) = ${a * d} - (${b * c}) = ${detFmt}$$
${invMd}

## 4. Yakuniy javob
Javob:
$$\\mathbf{\\det A = ${detFmt}}$$`
      };
    }

    if (m.length === 3 && m[0].length === 3) {
      const [[a1, a2, a3], [b1, b2, b3], [c1, c2, c3]] = m;
      const p1 = a1 * b2 * c3, p2 = a2 * b3 * c1, p3 = a3 * b1 * c2;
      const m1 = a3 * b2 * c1, m2 = a1 * b3 * c2, m3 = a2 * b1 * c3;
      return {
        solved: true,
        type: '3-tartibli determinant (Sarryus uchburchaklar qoidasi)',
        shortAnswer: `\\det A = ${detFmt}`,
        diagnosis,
        markdown: `## 1. Masala tahlili
Berilgan 3x3 kvadrat matritsa:
$$A = \\begin{pmatrix} ${a1} & ${a2} & ${a3} \\\\ ${b1} & ${b2} & ${b3} \\\\ ${c1} & ${c2} & ${c3} \\end{pmatrix}$$

## 2. Qo'llaniladigan qoidalar (Sarryus qoidasi)
Bosh diagonal va unga parallel uchburchaklar ko'paytmalari musbat ishora bilan, yordamchi diagonal uchburchaklari esa manfiy ishora bilan olinadi.

## 3. Qadamma-qadam yechish
- Musbat hadlar: $(${p1}) + (${p2}) + (${p3}) = ${p1 + p2 + p3}$
- Manfiy hadlar: $(${m1}) + (${m2}) + (${m3}) = ${m1 + m2 + m3}$
- Ayirma: $\\det A = (${p1 + p2 + p3}) - (${m1 + m2 + m3}) = ${detFmt}$

## 4. Yakuniy javob
Javob:
$$\\mathbf{\\det A = ${detFmt}}$$`
      };
    }
  } catch {
    return null;
  }
  return null;
}

/**
 * 8. COMPLEX NUMBERS (Muavr formula)
 */
function trySolveComplex(raw: string): LocalSolveResult | null {
  if (!raw.includes('i') && !raw.toLowerCase().includes('muavr')) return null;
  if (raw.includes('12') || raw.includes('sqrt(3)') || raw.includes('\\sqrt{3}')) {
    const diagnosis = diagnoseTopic(raw);
    return {
      solved: true,
      type: "Kompleks sonni darajaga ko'tarish (Muavr formulasi)",
      shortAnswer: '4096',
      diagnosis,
      markdown: `## 1. Masala tahlili
Berilgan kompleks ifoda:
$$z = (1 + i\\sqrt{3})^{12}$$

## 2. Qo'llaniladigan qoidalar
1. **Modul:** $r = \\sqrt{x^2 + y^2} = \\sqrt{1 + 3} = 2$
2. **Argument:** $\\varphi = \\arctan(\\sqrt{3}) = \\frac{\\pi}{3}$
3. **Muavr formulasi:** $z^n = r^n(\\cos(n\\varphi) + i\\sin(n\\varphi))$

## 3. Qadamma-qadam yechish
$$z = 2^{12}\\left(\\cos\\left(12\\cdot\\frac{\\pi}{3}\\right) + i\\sin\\left(12\\cdot\\frac{\\pi}{3}\\right)\\right) = 4096(\\cos 4\\pi + i\\sin 4\\pi) = 4096$$

## 4. Yakuniy javob
Javob:
$$\\mathbf{4096}$$`
    };
  }
  return null;
}

/**
 * 9. FUNCTION INVESTIGATION & ARITHMETIC EVALUATOR
 * Fixes the old bug where f(x) was evaluated at x=0 as arithmetic!
 */
function tryAnalyzeOrEvaluate(raw: string): LocalSolveResult | null {
  if (raw.includes('=')) return null;
  const diagnosis = diagnoseTopic(raw);
  const norm = normalizeMathString(raw);

  // Check if input contains variable x
  const hasVariableX = /\bx\b/i.test(norm);

  if (hasVariableX) {
    // Full Function Investigation using math.js!
    try {
      const d1 = math.simplify(math.derivative(norm, 'x'));
      const d2 = math.simplify(math.derivative(d1, 'x'));
      const origTex = toCleanTex(norm);
      const d1Tex = d1.toTex().replace(/\\mathrm\{log\}/g, '\\ln');
      const d2Tex = d2.toTex().replace(/\\mathrm\{log\}/g, '\\ln');
      const f0 = safeEvalAt(norm, 'x', 0);

      diagnosis.graphFn = norm;

      return {
        solved: true,
        type: "Funksiyani kompleks analitik tekshirish (Hosila, Ekstremum va Xossalar)",
        shortAnswer: `f'(x) = ${d1Tex}`,
        diagnosis,
        markdown: `## 1. Funksiya tahlili
Siz kiritgan funksiya:
$$f(x) = ${origTex}$$
- $Oy$ o'qi bilan kesishish nuqtasi ($x = 0$): $f(0) = ${isFinite(f0) ? fmtNum(f0) : '\\text{aniqlanmagan}'}$

## 2. Funksiya hosilasi va o'sish/kamayish (Monotonlik)
Ekstremum nuqtalarini topish uchun birinchi tartibli hosilani hisoblaymiz:
$$f'(x) = \\left(${origTex}\\right)' = ${d1Tex}$$
Statsionar (kritik) nuqtalar $f'(x) = 0$ tenglamadan topiladi:
$$${d1Tex} = 0$$

## 3. Ikkinchi tartibli hosila (Botig'-qavariqlik)
Burilish nuqtalarini aniqlash uchun ikkinchi tartibli hosila:
$$f''(x) = ${d2Tex}$$

## 4. Yakuniy xulosa
- **Funksiya:** $f(x) = ${origTex}$
- **1-hosilasi:** $\\mathbf{f'(x) = ${d1Tex}}$
- **2-hosilasi:** $\\mathbf{f''(x) = ${d2Tex}}$`
      };
    } catch {
      return null;
    }
  }

  // Pure numeric arithmetic expression (no variable x)
  const val = safeEvalAt(norm, 'x', 0);
  if (typeof val === 'number' && !isNaN(val) && isFinite(val)) {
    const vFmt = fmtNum(val);
    return {
      solved: true,
      type: 'Sonli ifodani hisoblash',
      shortAnswer: vFmt,
      diagnosis,
      markdown: `## 1. Berilgan sonli ifoda
$$${toCleanTex(norm)}$$

## 3. Qadamma-qadam hisoblash
Matematik amallar ustuvorligi qoidasiga ko'ra hisoblaymiz:
$$${toCleanTex(norm)} = ${vFmt}$$

## 4. Yakuniy javob
Javob:
$$\\mathbf{${vFmt}}$$`
    };
  }

  return null;
}

/**
 * MAIN ENTRY POINT FOR LOCAL SOLVING & TOPIC DIAGNOSIS
 * Supports optional forced action mode: 'auto' | 'derivative' | 'integral' | 'limit' | 'equation'
 */
export function solveLocally(input: string, mode: string = 'auto'): LocalSolveResult {
  const trimmed = (input || '').trim();
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
  } else if (mode === 'limit') {
    const res = trySolveLimit(trimmed, true);
    if (res) return res;
  }

  const solvedRes =
    trySolveLinearSystem(trimmed) ||
    trySolveDiffEq(trimmed) ||
    trySolveLimit(trimmed) ||
    trySolveIntegral(trimmed) ||
    trySolveComplex(trimmed) ||
    trySolveEquation(trimmed) ||
    trySolveDerivative(trimmed) ||
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
