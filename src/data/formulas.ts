export interface FormulaItem {
  id: string;
  category: 'hosilalar' | 'limitlar' | 'qoidalar' | 'integrallar' | 'algebra' | 'trigonometriya' | 'vektorlar' | 'diff' | 'qatorlar' | 'kompleks' | 'ehtimollik';
  categoryLabel: string;
  title: string;
  latex: string;
  note?: string;
  keywords: string;
}

export const FORMULAS: FormulaItem[] = [
  // Hosilalar
  {
    id: 'h-1',
    category: 'hosilalar',
    categoryLabel: 'Hosila',
    title: "O'zgarmas son hosilasi",
    latex: "(C)' = 0",
    note: "C = const",
    keywords: "ozgarmas son const nol hosila"
  },
  {
    id: 'h-2',
    category: 'hosilalar',
    categoryLabel: 'Hosila',
    title: "Darajali funksiya",
    latex: "(x^\\alpha)' = \\alpha x^{\\alpha - 1}",
    note: "(x)' = 1, (x²)' = 2x",
    keywords: "darajali funksiya x daraja hosila"
  },
  {
    id: 'h-3',
    category: 'hosilalar',
    categoryLabel: 'Hosila',
    title: "Ildiz funksiyasi",
    latex: "(\\sqrt{x})' = \\frac{1}{2\\sqrt{x}}",
    note: "x > 0",
    keywords: "ildiz kvadrat ildiz hosila"
  },
  {
    id: 'h-4',
    category: 'hosilalar',
    categoryLabel: 'Hosila',
    title: "Ko'rsatkichli funksiya",
    latex: "(a^x)' = a^x \\ln a",
    note: "(e^x)' = e^x",
    keywords: "korsatkichli a darajasi x eksponenta hosila"
  },
  {
    id: 'h-5',
    category: 'hosilalar',
    categoryLabel: 'Hosila',
    title: "Natural logarifm",
    latex: "(\\ln x)' = \\frac{1}{x}",
    note: "(\\log_a x)' = \\frac{1}{x \\ln a}",
    keywords: "logarifm natural ln log hosila"
  },
  {
    id: 'h-6',
    category: 'hosilalar',
    categoryLabel: 'Hosila',
    title: "Sinus hosilasi",
    latex: "(\\sin x)' = \\cos x",
    note: "Trigonometriya",
    keywords: "sinus sin trigonometriya hosila"
  },
  {
    id: 'h-7',
    category: 'hosilalar',
    categoryLabel: 'Hosila',
    title: "Kosinus hosilasi",
    latex: "(\\cos x)' = -\\sin x",
    note: "Manfiy ishora bor",
    keywords: "kosinus cos trigonometriya hosila"
  },
  {
    id: 'h-8',
    category: 'hosilalar',
    categoryLabel: 'Hosila',
    title: "Tangens hosilasi",
    latex: "(\\operatorname{tg} x)' = \\frac{1}{\\cos^2 x}",
    note: "x ≠ π/2 + πk",
    keywords: "tangens tg tan trigonometriya hosila"
  },
  {
    id: 'h-9',
    category: 'hosilalar',
    categoryLabel: 'Hosila',
    title: "Kotangens hosilasi",
    latex: "(\\operatorname{ctg} x)' = -\\frac{1}{\\sin^2 x}",
    note: "x ≠ πk",
    keywords: "kotangens ctg cot trigonometriya hosila"
  },
  {
    id: 'h-10',
    category: 'hosilalar',
    categoryLabel: 'Hosila',
    title: "Arksinus hosilasi",
    latex: "(\\arcsin x)' = \\frac{1}{\\sqrt{1 - x^2}}",
    note: "|x| < 1",
    keywords: "arksinus arcsin teskari trigonometriya hosila"
  },
  {
    id: 'h-11',
    category: 'hosilalar',
    categoryLabel: 'Hosila',
    title: "Arktangens hosilasi",
    latex: "(\\operatorname{arctg} x)' = \\frac{1}{1 + x^2}",
    note: "Barcha x ∈ R",
    keywords: "arktangens arctan teskari trigonometriya hosila"
  },

  // Differensiallash qoidalari
  {
    id: 'q-1',
    category: 'qoidalar',
    categoryLabel: 'Qoida',
    title: "Yig'indi va ayirma",
    latex: "(u \\pm v)' = u' \\pm v'",
    note: "Chiziqlilik xossasi",
    keywords: "yigindi ayirma qoida differensiallash"
  },
  {
    id: 'q-2',
    category: 'qoidalar',
    categoryLabel: 'Qoida',
    title: "Ko'paytma hosilasi",
    latex: "(u \\cdot v)' = u' v + u v'",
    note: "Leybnits qoidasi",
    keywords: "kopaytma qoida hosila leybnits"
  },
  {
    id: 'q-3',
    category: 'qoidalar',
    categoryLabel: 'Qoida',
    title: "Bo'linma (kasr) hosilasi",
    latex: "\\left(\\frac{u}{v}\\right)' = \\frac{u' v - u v'}{v^2}",
    note: "v(x) ≠ 0",
    keywords: "bolinma kasr qoida hosila"
  },
  {
    id: 'q-4',
    category: 'qoidalar',
    categoryLabel: 'Qoida',
    title: "Murakkab funksiya (zanjirli)",
    latex: "(f(g(x)))' = f'(g(x)) \\cdot g'(x)",
    note: "Chain rule",
    keywords: "murakkab funksiya zanjir zanjirli qoida"
  },

  // Limitlar
  {
    id: 'l-1',
    category: 'limitlar',
    categoryLabel: 'Limit',
    title: "1-ajoyib limit",
    latex: "\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1",
    note: "Natija: tg(x)/x → 1",
    keywords: "birinchi ajoyib limit sin sinus x"
  },
  {
    id: 'l-2',
    category: 'limitlar',
    categoryLabel: 'Limit',
    title: "2-ajoyib limit",
    latex: "\\lim_{x \\to \\infty} \\left(1 + \\frac{1}{x}\\right)^x = e",
    note: "lim_{α→0} (1 + α)^{1/α} = e",
    keywords: "ikkinchi ajoyib limit e soni eksponenta"
  },
  {
    id: 'l-3',
    category: 'limitlar',
    categoryLabel: 'Limit',
    title: "Logarifmik ajoyib limit",
    latex: "\\lim_{x \\to 0} \\frac{\\ln(1 + x)}{x} = 1",
    note: "Ekvivalentlik: ln(1 + x) ~ x",
    keywords: "ajoyib limit natural logarifm ln"
  },
  {
    id: 'l-4',
    category: 'limitlar',
    categoryLabel: 'Limit',
    title: "Ko'rsatkichli ajoyib limit",
    latex: "\\lim_{x \\to 0} \\frac{e^x - 1}{x} = 1",
    note: "lim_{x→0} (a^x - 1)/x = ln a",
    keywords: "ajoyib limit korsatkichli e darajasi"
  },

  // Integrallar
  {
    id: 'i-1',
    category: 'integrallar',
    categoryLabel: 'Integral',
    title: "Darajali funksiya integrali",
    latex: "\\int x^n \\, dx = \\frac{x^{n+1}}{n+1} + C",
    note: "n ≠ -1",
    keywords: "darajali integral x daraja boshlangich"
  },
  {
    id: 'i-2',
    category: 'integrallar',
    categoryLabel: 'Integral',
    title: "1/x funksiya integrali",
    latex: "\\int \\frac{1}{x} \\, dx = \\ln|x| + C",
    note: "x ≠ 0",
    keywords: "1/x kasr logarifm integral"
  },
  {
    id: 'i-3',
    category: 'integrallar',
    categoryLabel: 'Integral',
    title: "Eksponenta integrali",
    latex: "\\int e^x \\, dx = e^x + C",
    note: "O'zgarmas forma",
    keywords: "eksponenta e darajasi integral"
  },
  {
    id: 'i-4',
    category: 'integrallar',
    categoryLabel: 'Integral',
    title: "Sinus integrali",
    latex: "\\int \\sin x \\, dx = -\\cos x + C",
    note: "Manfiy ishora",
    keywords: "sinus trigonometriya integral"
  },
  {
    id: 'i-5',
    category: 'integrallar',
    categoryLabel: 'Integral',
    title: "Kosinus integrali",
    latex: "\\int \\cos x \\, dx = \\sin x + C",
    note: "Musbat ishora",
    keywords: "kosinus cos trigonometriya integral"
  },
  {
    id: 'i-6',
    category: 'integrallar',
    categoryLabel: 'Integral',
    title: "Tangens hosil qiluvchi integral",
    latex: "\\int \\frac{1}{\\cos^2 x} \\, dx = \\tan x + C",
    note: "x ≠ π/2 + πk",
    keywords: "tangens cos2 kasr integral"
  },
  {
    id: 'i-7',
    category: 'integrallar',
    categoryLabel: 'Integral',
    title: "Arktangens integrali",
    latex: "\\int \\frac{1}{1 + x^2} \\, dx = \\arctan x + C",
    note: "Klassik jadval integrali",
    keywords: "arktangens arctan 1+x2 integral"
  },
  {
    id: 'i-8',
    category: 'integrallar',
    categoryLabel: 'Integral',
    title: "Bo'laklab integrallash formulasi",
    latex: "\\int u \\, dv = u v - \\int v \\, du",
    note: "Ko'paytma funksiyalar uchun",
    keywords: "bolaklab integrallash u dv v du"
  },
  {
    id: 'i-9',
    category: 'integrallar',
    categoryLabel: 'Integral',
    title: "Nyuton-Leybnits formulasi (Aniq integral)",
    latex: "\\int_{a}^{b} f(x) \\, dx = F(b) - F(a)",
    note: "F'(x) = f(x)",
    keywords: "nyuton leybnits aniq integral chegara"
  },
  // Chiziqli algebra & Matritsalar
  {
    id: 'a-1',
    category: 'algebra',
    categoryLabel: 'Algebra',
    title: "2-tartibli determinant",
    latex: "\\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix} = ad - bc",
    note: "Asosiy diagonal - yordamchi diagonal",
    keywords: "determinant 2x2 matritsa ad bc"
  },
  {
    id: 'a-2',
    category: 'algebra',
    categoryLabel: 'Algebra',
    title: "Kramer usuli (Tenglamalar sistemasi)",
    latex: "x_i = \\frac{\\Delta_i}{\\Delta} \\quad (\\Delta \\neq 0)",
    note: "Chiziqli sistemalarni yechish",
    keywords: "kramer usuli delta sistema determinant"
  },
  {
    id: 'a-3',
    category: 'algebra',
    categoryLabel: 'Algebra',
    title: "Teskari matritsa formulasi",
    latex: "A^{-1} = \\frac{1}{\\det(A)} A^{*}",
    note: "A* — biriktirilgan (algebraik to'ldiruvchilar) matritsasi",
    keywords: "teskari matritsa det A biriktirilgan"
  },
  // Trigonometriya
  {
    id: 't-1',
    category: 'trigonometriya',
    categoryLabel: 'Trigonometriya',
    title: "Asosiy trigonometrik ayniyat",
    latex: "\\sin^2 x + \\cos^2 x = 1",
    note: "Pifagor ayniyati",
    keywords: "sin2 cos2 asosiy ayniyat trigonometriya"
  },
  {
    id: 't-2',
    category: 'trigonometriya',
    categoryLabel: 'Trigonometriya',
    title: "Ikkilangan burchak sinusi",
    latex: "\\sin(2x) = 2\\sin x \\cos x",
    note: "Sinus 2x",
    keywords: "sin 2x ikkilangan burchak trigonometriya"
  },
  {
    id: 't-3',
    category: 'trigonometriya',
    categoryLabel: 'Trigonometriya',
    title: "Ikkilangan burchak kosinusi",
    latex: "\\cos(2x) = \\cos^2 x - \\sin^2 x",
    note: "= 2cos²x - 1 = 1 - 2sin²x",
    keywords: "cos 2x kosinus daraja pasaytirish"
  },

  // Vektorlar va Analitik Geometriya
  {
    id: 'v-1',
    category: 'vektorlar',
    categoryLabel: 'Vektorlar',
    title: "Skalyar ko'paytma va modul",
    latex: "\\vec{a} \\cdot \\vec{b} = |\\vec{a}||\\vec{b}|\\cos\\varphi = x_1 x_2 + y_1 y_2 + z_1 z_2",
    note: "Ortogonallik: a · b = 0",
    keywords: "skalyar kopaytma burchak modul vektor ortogonal"
  },
  {
    id: 'v-2',
    category: 'vektorlar',
    categoryLabel: 'Vektorlar',
    title: "Vektor ko'paytma",
    latex: "\\vec{a} \\times \\vec{b} = \\begin{vmatrix} \\vec{i} & \\vec{j} & \\vec{k} \\\\ x_1 & y_1 & z_1 \\\\ x_2 & y_2 & z_2 \\end{vmatrix}, \\quad S_{\\text{par}} = |\\vec{a} \\times \\vec{b}|",
    note: "Kollinearlik: a × b = 0",
    keywords: "vektor kopaytma determinant yuza parallelogramm kollinear"
  },
  {
    id: 'v-3',
    category: 'vektorlar',
    categoryLabel: 'Vektorlar',
    title: "Aralash ko'paytma va tetraedr hajmi",
    latex: "(\\vec{a}, \\vec{b}, \\vec{c}) = \\begin{vmatrix} x_1 & y_1 & z_1 \\\\ x_2 & y_2 & z_2 \\\\ x_3 & y_3 & z_3 \\end{vmatrix}, \\quad V_{\\text{pir}} = \\frac{1}{6}|(\\vec{a}, \\vec{b}, \\vec{c})|",
    note: "Komplanarlik: (a, b, c) = 0",
    keywords: "aralash kopaytma hajm piramida komplanar"
  },
  {
    id: 'v-4',
    category: 'vektorlar',
    categoryLabel: 'Vektorlar',
    title: "Nuqtadan tekislikkacha masofa",
    latex: "d = \\frac{|Ax_0 + By_0 + Cz_0 + D|}{\\sqrt{A^2 + B^2 + C^2}}",
    note: "Tekislik: Ax + By + Cz + D = 0",
    keywords: "masofa tekislik nuqta geometriya"
  },

  // Differensial Tenglamalar
  {
    id: 'd-1',
    category: 'diff',
    categoryLabel: 'Diff Tenglama',
    title: "1-tartibli chiziqli tenglama (Bernulli usuli)",
    latex: "y' + P(x)y = Q(x) \\implies y = u(x)v(x)",
    note: "u'v + u(v' + P v) = Q",
    keywords: "differensial tenglama chiziqli bernulli koshi"
  },
  {
    id: 'd-2',
    category: 'diff',
    categoryLabel: 'Diff Tenglama',
    title: "2-tartibli chiziqli o'zgarmas koeffitsiyentli",
    latex: "y'' + p y' + q y = 0 \\implies k^2 + p k + q = 0",
    note: "k₁, k₂ xarakteristik ildizlar",
    keywords: "ikkinchi tartibli xarakteristik tenglama ildiz"
  },

  // Qatorlar va Fure
  {
    id: 'q-1',
    category: 'qatorlar',
    categoryLabel: 'Qatorlar',
    title: "Dalamber yaqinlashish alomati",
    latex: "D = \\lim_{n \\to \\infty} \\left|\\frac{a_{n+1}}{a_n}\\right| < 1 \\implies \\text{yaqinlashadi}",
    note: "D > 1 bo'lsa uzoqlashadi",
    keywords: "dalamber alomat qator yaqinlashish limit"
  },
  {
    id: 'q-2',
    category: 'qatorlar',
    categoryLabel: 'Qatorlar',
    title: "Leybnits alomati (ishorasi almashinuvchi)",
    latex: "\\sum_{n=1}^\\infty (-1)^{n-1} a_n \\quad (a_{n+1} \\le a_n, \\; \\lim_{n\\to\\infty} a_n = 0)",
    note: "Qoldiq had: |R_n| ≤ a_{n+1}",
    keywords: "leybnits ishora almashinuvchi qator yaqinlashish"
  },
  {
    id: 'q-3',
    category: 'qatorlar',
    categoryLabel: 'Qatorlar',
    title: "Trigonometrik Fure qatori",
    latex: "f(x) = \\frac{a_0}{2} + \\sum_{n=1}^\\infty \\left( a_n \\cos(nx) + b_n \\sin(nx) \\right)",
    note: "Eyler-Fure koeffitsiyentlari",
    keywords: "fure qatori trigonometrik garmonika davriy"
  },

  // Kompleks sonlar & Laplas
  {
    id: 'k-1',
    category: 'kompleks',
    categoryLabel: 'Kompleks & Laplas',
    title: "Muavr formulasi",
    latex: "[r(\\cos\\varphi + i\\sin\\varphi)]^n = r^n(\\cos(n\\varphi) + i\\sin(n\\varphi))",
    note: "Darajaga ko'tarish",
    keywords: "muavr kompleks son modul argument daraja"
  },
  {
    id: 'k-2',
    category: 'kompleks',
    categoryLabel: 'Kompleks & Laplas',
    title: "Koshi–Riman differensiallashuv shartlari",
    latex: "\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}, \\quad \\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}",
    note: "f(z) = u + iv analitiklik sharti",
    keywords: "koshi riman tfkp analitik garmonik hosila"
  },
  {
    id: 'k-3',
    category: 'kompleks',
    categoryLabel: 'Kompleks & Laplas',
    title: "Laplas almashtirishida hosila tasviri",
    latex: "\\mathcal{L}\\{y'\\} = p Y(p) - y(0), \\quad \\mathcal{L}\\{y''\\} = p^2 Y(p) - p y(0) - y'(0)",
    note: "Koshi masalasini yechish",
    keywords: "laplas almashtirish operatsion hisob differensial"
  },

  // Ehtimollar Nazariyasi
  {
    id: 'e-1',
    category: 'ehtimollik',
    categoryLabel: 'Ehtimollik',
    title: "Kombinatorika: O'rinlashtirish va Guruhlash",
    latex: "A_n^k = \\frac{n!}{(n-k)!}, \\quad C_n^k = \\frac{n!}{k!(n-k)!}, \\quad P_n = n!",
    note: "Klassik ehtimollik: P = m / n",
    keywords: "kombinatorika orinlashtirish guruhlash faktorial"
  },
  {
    id: 'e-2',
    category: 'ehtimollik',
    categoryLabel: 'Ehtimollik',
    title: "Bayes formulasi (Gipotezalar)",
    latex: "P(H_i|A) = \\frac{P(H_i) P(A|H_i)}{\\sum_{j=1}^n P(H_j) P(A|H_j)}",
    note: "Aprioridan aposterioriga o'tish",
    keywords: "bayes tola ehtimol gipoteza shartli ehtimollik"
  },
  {
    id: 'e-3',
    category: 'ehtimollik',
    categoryLabel: 'Ehtimollik',
    title: "Bernulli formulasi va Parametrlar",
    latex: "P_n(k) = C_n^k p^k q^{n-k}, \\quad M(X) = np, \\quad D(X) = npq",
    note: "q = 1 - p",
    keywords: "bernulli sxemasi matematik kutilma dispersiya ehtimol"
  }
];
