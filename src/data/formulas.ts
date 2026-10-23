export interface FormulaItem {
  id: string;
  category: 'hosilalar' | 'limitlar' | 'qoidalar' | 'integrallar' | 'algebra' | 'trigonometriya' | 'vektorlar' | 'diff' | 'qatorlar' | 'kompleks' | 'kop-ozgaruvchili' | 'ehtimollik';
  categoryLabel: string;
  title: string;
  latex: string;
  note?: string;
  keywords: string;
}

export const FORMULAS: FormulaItem[] = [
  {
    id: "alg-1",
    category: "algebra",
    categoryLabel: "Algebra & Matritsa",
    title: "2-tartibli determinant",
    latex: "\\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix} = ad - bc",
    note: "Bosh diagonal ko'paytmasidan yordamchi diagonal ko'paytmasi ayriladi",
    keywords: "determinant 2x2 matrisa diagonal matritsa"
  },
  {
    id: "alg-2",
    category: "algebra",
    categoryLabel: "Algebra & Matritsa",
    title: "3-tartibli determinant (Sarryus qoidasi)",
    latex: "\\begin{vmatrix} a_1 & b_1 & c_1 \\\\ a_2 & b_2 & c_2 \\\\ a_3 & b_3 & c_3 \\end{vmatrix} = a_1 b_2 c_3 + b_1 c_2 a_3 + c_1 a_2 b_3 - (c_1 b_2 a_3 + b_1 a_2 c_3 + a_1 c_2 b_3)",
    note: "Uchburchaklar yoki Sarryus qoidasi",
    keywords: "determinant 3x3 sarryus uchburchak qoidasi"
  },
  {
    id: "alg-3",
    category: "algebra",
    categoryLabel: "Algebra & Matritsa",
    title: "Kramer qoidasi (CHATS yechish)",
    latex: "x_1 = \\frac{\\Delta_1}{\\Delta}, \\quad x_2 = \\frac{\\Delta_2}{\\Delta}, \\quad \\dots, \\quad x_n = \\frac{\\Delta_n}{\\Delta} \\quad (\\Delta \\neq 0)",
    note: "Asosiy determinant Delta noldan farqli bo'lganda yagona yechim",
    keywords: "kramer usuli chats tenglamalar sistemasi determinant"
  },
  {
    id: "alg-4",
    category: "algebra",
    categoryLabel: "Algebra & Matritsa",
    title: "Teskari matritsa formulasi",
    latex: "A^{-1} = \\frac{1}{\\det A} A^* = \\frac{1}{\\det A} \\begin{pmatrix} A_{11} & A_{21} & \\dots \\\\ A_{12} & A_{22} & \\dots \\\\ \\dots & \\dots & \\dots \\end{pmatrix}",
    note: "A* — algebraik to'ldiruvchilarning transponirlangan matritsasi",
    keywords: "teskari matritsa algebraik toldiruvchi transponirlangan"
  },
  {
    id: "alg-5",
    category: "algebra",
    categoryLabel: "Algebra & Matritsa",
    title: "Matritsaning xarakteristik ko'phadi va xos sonlari",
    latex: "\\det(A - \\lambda E) = 0 \\implies \\lambda^n + c_1 \\lambda^{n-1} + \\dots + c_n = 0",
    note: "lambda — matritsaning xos qiymatlari (ildizlari)",
    keywords: "xos son xos qiymat xarakteristik tenglama spektr"
  },
  {
    id: "alg-6",
    category: "algebra",
    categoryLabel: "Algebra & Matritsa",
    title: "Xos vektorlar tenglamasi",
    latex: "(A - \\lambda E)X = 0 \\quad (X \\neq 0)",
    note: "X — lambda xos songa mos keluvchi xos vektor ustuni",
    keywords: "xos vektor bir jinsli sistema bazis"
  },
  {
    id: "alg-7",
    category: "algebra",
    categoryLabel: "Algebra & Matritsa",
    title: "Silvestr mezoni (Kvadratik formalar musbat aniqligi)",
    latex: "\\Delta_1 > 0, \\quad \\Delta_2 > 0, \\quad \\dots, \\quad \\Delta_n > 0",
    note: "Barcha bosh burchak minorlari qat'iy musbat bo'lsa — musbat aniqlangan",
    keywords: "silvestr mezoni kvadratik forma minor musbat aniqlangan"
  },
  {
    id: "alg-8",
    category: "algebra",
    categoryLabel: "Algebra & Matritsa",
    title: "Kroneker-Kapelli teoremasi (CHATS birgalikda bo'lish sharti)",
    latex: "\\text{rang}(A) = \\text{rang}(A|B) = r",
    note: "r = n bo'lsa yagona yechim, r < n bo'lsa cheksiz ko'p yechim",
    keywords: "kroneker kapelli rang matritsa rangi birgalikda"
  },
  {
    id: "alg-9",
    category: "algebra",
    categoryLabel: "Algebra & Matritsa",
    title: "Laplas teoremasi (Determinantni satr/ustun bo'yicha yoyish)",
    latex: "\\det A = \\sum_{j=1}^n a_{ij} A_{ij} = a_{i1} A_{i1} + a_{i2} A_{i2} + \\dots + a_{in} A_{in}",
    note: "A_ij = (-1)^(i+j) M_ij — algebraik to'ldiruvchi",
    keywords: "laplas teoremasi determinant yoyish minor algebraik toldiruvchi"
  },
  {
    id: "alg-10",
    category: "algebra",
    categoryLabel: "Algebra & Matritsa",
    title: "Matritsalarni ko'paytirish xossasi va Determinant",
    latex: "\\det(A \\cdot B) = \\det A \\cdot \\det B, \\quad (A \\cdot B)^T = B^T \\cdot A^T",
    note: "(AB)^(-1) = B^(-1) * A^(-1)",
    keywords: "kopaytma determinanti transponirlash teskari matritsa xossalari"
  },
  {
    id: "v-1",
    category: "vektorlar",
    categoryLabel: "Vektor & Geometriya",
    title: "Skalyar ko'paytma va burchak",
    latex: "\\vec{a} \\cdot \\vec{b} = |\\vec{a}||\\vec{b}|\\cos\\varphi = x_1 x_2 + y_1 y_2 + z_1 z_2",
    note: "Ortogonallik (perpendikulyarlik) sharti: a · b = 0",
    keywords: "skalyar kopaytma burchak modul vektor ortogonal"
  },
  {
    id: "v-2",
    category: "vektorlar",
    categoryLabel: "Vektor & Geometriya",
    title: "Vektorlar orasidagi burchak kosinusi",
    latex: "\\cos\\varphi = \\frac{x_1 x_2 + y_1 y_2 + z_1 z_2}{\\sqrt{x_1^2 + y_1^2 + z_1^2}\\sqrt{x_2^2 + y_2^2 + z_2^2}}",
    note: "0 <= phi <= pi",
    keywords: "vektor burchak kosinus yo'nalish"
  },
  {
    id: "v-3",
    category: "vektorlar",
    categoryLabel: "Vektor & Geometriya",
    title: "Vektor ko'paytma va parallelogramm yuzi",
    latex: "\\vec{a} \\times \\vec{b} = \\begin{vmatrix} \\vec{i} & \\vec{j} & \\vec{k} \\\\ x_1 & y_1 & z_1 \\\\ x_2 & y_2 & z_2 \\end{vmatrix}, \\quad S_{\\text{par}} = |\\vec{a} \\times \\vec{b}|",
    note: "Kollinearlik (parallellik) sharti: a × b = 0",
    keywords: "vektor kopaytma determinant yuza parallelogramm kollinear"
  },
  {
    id: "v-4",
    category: "vektorlar",
    categoryLabel: "Vektor & Geometriya",
    title: "Uchburchak yuzi (Vektor ko'paytma orqali)",
    latex: "S_{\\Delta} = \\frac{1}{2} |\\vec{a} \\times \\vec{b}| = \\frac{1}{2} |\\vec{AB} \\times \\vec{AC}|",
    note: "Uchlari berilgan uchburchak yuzini topish",
    keywords: "uchburchak yuzi vektor kopaytma analitik geometriya"
  },
  {
    id: "v-5",
    category: "vektorlar",
    categoryLabel: "Vektor & Geometriya",
    title: "Aralash ko'paytma va tetraedr (piramida) hajmi",
    latex: "(\\vec{a}, \\vec{b}, \\vec{c}) = \\begin{vmatrix} x_1 & y_1 & z_1 \\\\ x_2 & y_2 & z_2 \\\\ x_3 & y_3 & z_3 \\end{vmatrix}, \\quad V_{\\text{pir}} = \\frac{1}{6}|(\\vec{a}, \\vec{b}, \\vec{c})|",
    note: "Komplanarlik (bitta tekislikda yotish) sharti: (a, b, c) = 0",
    keywords: "aralash kopaytma hajm piramida komplanar tetraedr"
  },
  {
    id: "v-6",
    category: "vektorlar",
    categoryLabel: "Vektor & Geometriya",
    title: "Tekislikning umumiy tenglamasi",
    latex: "A(x - x_0) + B(y - y_0) + C(z - z_0) = 0 \\iff Ax + By + Cz + D = 0",
    note: "n = (A, B, C) — tekislikning normal vektori",
    keywords: "tekislik tenglamasi normal vektor fazoda tekislik"
  },
  {
    id: "v-7",
    category: "vektorlar",
    categoryLabel: "Vektor & Geometriya",
    title: "Nuqtadan tekislikkacha masofa",
    latex: "d = \\frac{|A x_0 + B y_0 + C z_0 + D|}{\\sqrt{A^2 + B^2 + C^2}}",
    note: "M_0(x_0, y_0, z_0) nuqtadan Ax + By + Cz + D = 0 tekislikkacha",
    keywords: "masofa nuqtadan tekislikkacha perpendikulyar"
  },
  {
    id: "v-8",
    category: "vektorlar",
    categoryLabel: "Vektor & Geometriya",
    title: "Fazoda to'g'ri chiziqning kanonik tenglamasi",
    latex: "\\frac{x - x_0}{m} = \\frac{y - y_0}{n} = \\frac{z - z_0}{p}",
    note: "s = (m, n, p) — to'g'ri chiziqning yo'naltiruvchi vektori",
    keywords: "kanonik tenglama fazoda togri chiziq yonalish"
  },
  {
    id: "v-9",
    category: "vektorlar",
    categoryLabel: "Vektor & Geometriya",
    title: "Ikkinchi tartibli egri chiziqlar: Ellips kanonik tenglamasi",
    latex: "\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1 \\quad (c^2 = a^2 - b^2, \\; e = \\frac{c}{a} < 1)",
    note: "a — katta yarim o'q, b — kichik yarim o'q, e — ekssentrisitet",
    keywords: "ellips kanonik tenglama fokus ekssentrisitet"
  },
  {
    id: "v-10",
    category: "vektorlar",
    categoryLabel: "Vektor & Geometriya",
    title: "Ikkinchi tartibli egri chiziqlar: Giperbola va Parabola",
    latex: "\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1 \\quad (e = \\frac{c}{a} > 1); \\qquad y^2 = 2px \\quad (e = 1)",
    note: "Giperbolada asimptotalar: y = ±(b/a)x",
    keywords: "giperbola parabola asimptota ikkinchi tartibli chiziq"
  },
  {
    id: "lim-1",
    category: "limitlar",
    categoryLabel: "Limitlar",
    title: "Birinchi ajoyib limit",
    latex: "\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1, \\quad \\lim_{x \\to 0} \\frac{\\tan x}{x} = 1, \\quad \\lim_{x \\to 0} \\frac{\\arcsin x}{x} = 1",
    note: "x nolga intilganda [0/0] aniqmaslikni ochish",
    keywords: "birinchi ajoyib limit sin x x trigonometrik limit"
  },
  {
    id: "lim-2",
    category: "limitlar",
    categoryLabel: "Limitlar",
    title: "Ikkinchi ajoyib limit (Eyler soni e)",
    latex: "\\lim_{x \\to \\infty} \\left(1 + \\frac{1}{x}\\right)^x = e, \\quad \\lim_{\\alpha \\to 0} (1 + \\alpha)^{\\frac{1}{\\alpha}} = e",
    note: "[1^cheksiz] aniqmaslik asosida e = 2.71828...",
    keywords: "ikkinchi ajoyib limit e soni eyler 1 cheksizlik"
  },
  {
    id: "lim-3",
    category: "limitlar",
    categoryLabel: "Limitlar",
    title: "1^cheksiz aniqmaslikni tezkor ochish qoidasi",
    latex: "\\lim_{x \\to a} [u(x)]^{v(x)} = e^{\\lim_{x \\to a} v(x) \\cdot [u(x) - 1]} \\quad (u \\to 1, \\; v \\to \\infty)",
    note: "1 ning cheksiz darajasi ko'rinishidagi barcha limitlar uchun universal formula",
    keywords: "1 daraja cheksiz korsatkichli limit qulay usul"
  },
  {
    id: "lim-4",
    category: "limitlar",
    categoryLabel: "Limitlar",
    title: "Ekvivalent cheksiz kichik miqdorlar (x -> 0)",
    latex: "\\sin x \\sim x, \\quad \\tan x \\sim x, \\quad e^x - 1 \\sim x, \\quad \\ln(1+x) \\sim x",
    note: "Ko'paytma va bo'linmalarda o'rniga qo'yish mumkin",
    keywords: "ekvivalentlik cheksiz kichik taqribiy limit qisqartirish"
  },
  {
    id: "lim-5",
    category: "limitlar",
    categoryLabel: "Limitlar",
    title: "Kengaytirilgan ekvivalentliklar (x -> 0)",
    latex: "1 - \\cos x \\sim \\frac{x^2}{2}, \\quad (1 + x)^m - 1 \\sim mx, \\quad a^x - 1 \\sim x \\ln a",
    note: "Masalan: sqrt(1+x) - 1 ~ x / 2",
    keywords: "1 minus cos x x kvadrat 2 darajali ildiz ekvivalentlik"
  },
  {
    id: "lim-6",
    category: "limitlar",
    categoryLabel: "Limitlar",
    title: "Lopital qoidasi",
    latex: "\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\lim_{x \\to a} \\frac{f'(x)}{g'(x)} \\quad \\left[\\frac{0}{0} \\; \\text{yoki} \\; \\frac{\\infty}{\\infty}\\right]",
    note: "Agar surat va maxraj hosilalari mavjud bo'lsa",
    keywords: "lopital qoidasi hosila limit aniqmaslik nol nol cheksiz cheksiz"
  },
  {
    id: "h-1",
    category: "hosilalar",
    categoryLabel: "Hosila",
    title: "Darajali funksiya hosilasi",
    latex: "(x^\\alpha)' = \\alpha x^{\\alpha - 1}, \\quad (\\sqrt{x})' = \\frac{1}{2\\sqrt{x}}, \\quad \\left(\\frac{1}{x}\\right)' = -\\frac{1}{x^2}",
    note: "alpha ixtiyoriy haqiqiy son",
    keywords: "darajali funksiya ildiz hosila"
  },
  {
    id: "h-2",
    category: "hosilalar",
    categoryLabel: "Hosila",
    title: "Ko'rsatkichli funksiya hosilasi",
    latex: "(e^x)' = e^x, \\qquad (a^x)' = a^x \\ln a \\quad (a > 0, \\; a \\neq 1)",
    note: "Eyler asosi e^x o'ziga teng",
    keywords: "korsatkichli funksiya e daraja a daraja natural logarifm"
  },
  {
    id: "h-3",
    category: "hosilalar",
    categoryLabel: "Hosila",
    title: "Logarifmik funksiya hosilasi",
    latex: "(\\ln x)' = \\frac{1}{x}, \\qquad (\\log_a x)' = \\frac{1}{x \\ln a}",
    note: "x > 0",
    keywords: "logarifm natural logarifm hosila 1 boluv x"
  },
  {
    id: "h-4",
    category: "hosilalar",
    categoryLabel: "Hosila",
    title: "Trigonometrik funksiyalar hosilalari",
    latex: "(\\sin x)' = \\cos x, \\quad (\\cos x)' = -\\sin x, \\quad (\\tan x)' = \\frac{1}{\\cos^2 x}, \\quad (\\cot x)' = -\\frac{1}{\\sin^2 x}",
    note: "Kosinus va kotangensda manfiy ishora chiqadi",
    keywords: "sinus kosinus tangens kotangens hosila"
  },
  {
    id: "h-5",
    category: "hosilalar",
    categoryLabel: "Hosila",
    title: "Teskari trigonometrik funksiyalar hosilalari",
    latex: "(\\arcsin x)' = \\frac{1}{\\sqrt{1-x^2}}, \\quad (\\arccos x)' = -\\frac{1}{\\sqrt{1-x^2}}, \\quad (\\arctan x)' = \\frac{1}{1+x^2}",
    note: "(arccot x)' = -1 / (1 + x²)",
    keywords: "arksinus arkkosinus arktangens teskari trigonometrik"
  },
  {
    id: "h-6",
    category: "hosilalar",
    categoryLabel: "Hosila",
    title: "Giperbolik funksiyalar hosilalari",
    latex: "(\\sinh x)' = \\cosh x, \\quad (\\cosh x)' = \\sinh x, \\quad (\\tanh x)' = \\frac{1}{\\cosh^2 x}",
    note: "cosh x da ortiqcha minus ishora yo'q",
    keywords: "giperbolik sinus kosinus sh ch th hosila"
  },
  {
    id: "h-7",
    category: "qoidalar",
    categoryLabel: "Diff Qoidalari",
    title: "Yig'indi, ko'paytma va bo'linma hosilasi",
    latex: "(u \\pm v)' = u' \\pm v', \\quad (uv)' = u'v + uv', \\quad \\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}",
    note: "Differensiallashning asosiy arifmetik qoidalari",
    keywords: "kopaytma bolinma hosilasi qoidalari zanjir"
  },
  {
    id: "h-8",
    category: "qoidalar",
    categoryLabel: "Diff Qoidalari",
    title: "Murakkab funksiya hosilasi (Zanjir qoidasi)",
    latex: "[f(g(x))]' = f'(g(x)) \\cdot g'(x) \\iff \\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}",
    note: "Ichki funksiya hosilasiga ko'paytirish shart",
    keywords: "murakkab funksiya zanjir qoidasi ichki tashqi hosila"
  },
  {
    id: "h-9",
    category: "qoidalar",
    categoryLabel: "Diff Qoidalari",
    title: "Parametrik va oshkormas berilgan funksiya hosilasi",
    latex: "y'_x = \\frac{y'_t}{x'_t}, \\quad y''_{xx} = \\frac{(y'_x)'_t}{x'_t}; \\qquad F(x, y) = 0 \\implies y'_x = -\\frac{F'_x}{F'_y}",
    note: "Parametrik differensiallash va xususiy hosilalar orqali oshkormas hosila",
    keywords: "parametrik oshkormas hosila ikkinchi tartibli t boyicha"
  },
  {
    id: "h-10",
    category: "qoidalar",
    categoryLabel: "Diff Qoidalari",
    title: "Egri chiziqqa o'tkazilgan urinma va normal tenglamasi",
    latex: "y - y_0 = f'(x_0)(x - x_0) \\quad (\\text{Urinma}); \\qquad y - y_0 = -\\frac{1}{f'(x_0)}(x - x_0) \\quad (\\text{Normal})",
    note: "k = f'(x_0) = tg(alpha) — urinmaning burchak koeffitsiyenti",
    keywords: "urinma normal burchak koeffitsiyenti geometrik ma'no"
  },
  {
    id: "h-11",
    category: "qoidalar",
    categoryLabel: "Diff Qoidalari",
    title: "Leybnits formulasi (n-tartibli ko'paytma hosilasi)",
    latex: "(uv)^{(n)} = \\sum_{k=0}^n C_n^k u^{(n-k)} v^{(k)} = u^{(n)}v + n u^{(n-1)}v' + \\frac{n(n-1)}{2}u^{(n-2)}v'' + \\dots + uv^{(n)}",
    note: "Nyuton binomi koeffitsiyentlariga o'xshash",
    keywords: "leybnits formulasi yuqori tartibli n tartibli hosila"
  },
  {
    id: "int-1",
    category: "integrallar",
    categoryLabel: "Integrallar",
    title: "Darajali funksiya integrali",
    latex: "\\int x^n \\, dx = \\frac{x^{n+1}}{n+1} + C \\quad (n \\neq -1), \\qquad \\int \\frac{dx}{x} = \\ln|x| + C",
    note: "n = -1 bo'lganda natural logarifm chiqadi",
    keywords: "darajali integral 1 boluv x ln x boshlangich"
  },
  {
    id: "int-2",
    category: "integrallar",
    categoryLabel: "Integrallar",
    title: "Ko'rsatkichli funksiya integrali",
    latex: "\\int e^x \\, dx = e^x + C, \\qquad \\int a^x \\, dx = \\frac{a^x}{\\ln a} + C",
    note: "a > 0, a != 1",
    keywords: "korsatkichli integral e daraja a daraja"
  },
  {
    id: "int-3",
    category: "integrallar",
    categoryLabel: "Integrallar",
    title: "Trigonometrik integrallar",
    latex: "\\int \\sin x \\, dx = -\\cos x + C, \\quad \\int \\cos x \\, dx = \\sin x + C, \\quad \\int \\frac{dx}{\\cos^2 x} = \\tan x + C",
    note: "Integral 1/sin²x dx = -cot x + C",
    keywords: "sinus kosinus tangens kotangens integral"
  },
  {
    id: "int-4",
    category: "integrallar",
    categoryLabel: "Integrallar",
    title: "Arktangens va Arkksinus integrallari",
    latex: "\\int \\frac{dx}{x^2 + a^2} = \\frac{1}{a} \\arctan\\left(\\frac{x}{a}\\right) + C, \\qquad \\int \\frac{dx}{\\sqrt{a^2 - x^2}} = \\arcsin\\left(\\frac{x}{a}\\right) + C",
    note: "a > 0",
    keywords: "arctan arcsin kvadrat ildiz jadval integrallari"
  },
  {
    id: "int-5",
    category: "integrallar",
    categoryLabel: "Integrallar",
    title: "Yuqori logarifmik integrallar ('Uzoq' va 'Baland' logarifm)",
    latex: "\\int \\frac{dx}{x^2 - a^2} = \\frac{1}{2a}\\ln\\left|\\frac{x-a}{x+a}\\right| + C, \\qquad \\int \\frac{dx}{\\sqrt{x^2 \\pm a^2}} = \\ln|x + \\sqrt{x^2 \\pm a^2}| + C",
    note: "Baland va uzoq logarifm formulalari",
    keywords: "uzoq logarifm baland logarifm integral jadval"
  },
  {
    id: "int-6",
    category: "integrallar",
    categoryLabel: "Integrallar",
    title: "Bo'laklab integrallash formulasi",
    latex: "\\int u \\, dv = u v - \\int v \\, du \\qquad \\text{yoki} \\qquad \\int_a^b u \\, dv = [uv]_a^b - \\int_a^b v \\, du",
    note: "ILATE qoidasi bo'yicha u tanlanadi",
    keywords: "bolaklab integrallash u dv uv v du ilate"
  },
  {
    id: "int-7",
    category: "integrallar",
    categoryLabel: "Integrallar",
    title: "Nyuton-Leybnits formulasi (Aniq integral)",
    latex: "\\int_a^b f(x) \\, dx = F(b) - F(a) = [F(x)]_a^b \\quad (F'(x) = f(x))",
    note: "Aniq integralni hisoblashning bosh qoidasi",
    keywords: "nyuton leybnits aniq integral chegaralar"
  },
  {
    id: "int-8",
    category: "integrallar",
    categoryLabel: "Integrallar",
    title: "Yassi shakl yuzi va Aylanma jism hajmi",
    latex: "S = \\int_a^b [f(x) - g(x)] \\, dx, \\qquad V_x = \\pi \\int_a^b [f(x)]^2 \\, dx",
    note: "Ox o'qi atrofida aylantirishdan hosil bo'lgan jism hajmi",
    keywords: "yuza hajm aylanma jism integral tatbiqi"
  },
  {
    id: "int-9",
    category: "integrallar",
    categoryLabel: "Integrallar",
    title: "Egri chiziq yoyi uzunligi",
    latex: "L = \\int_a^b \\sqrt{1 + [f'(x)]^2} \\, dx, \\qquad L = \\int_{\\alpha}^{\\beta} \\sqrt{[x'_t]^2 + [y'_t]^2} \\, dt",
    note: "Dekart va parametrik shaklda yoy uzunligi",
    keywords: "yoy uzunligi egri chiziq differensial parametr"
  },
  {
    id: "int-10",
    category: "integrallar",
    categoryLabel: "Integrallar",
    title: "Taqribiy integrallash: Simpsonning 1/3 formulasi",
    latex: "\\int_a^b f(x)\\,dx \\approx \\frac{h}{3}\\left[y_0 + y_{2m} + 4(y_1 + y_3 + \\dots) + 2(y_2 + y_4 + \\dots)\\right]",
    note: "h = (b - a) / (2m) — bo'linish qadami",
    keywords: "simpson formulasi taqribiy integrallash parabolalar"
  },
  {
    id: "kop-1",
    category: "kop-ozgaruvchili",
    categoryLabel: "Ko'p o'zgaruvchili",
    title: "To'liq differensial",
    latex: "dz = \\frac{\\partial z}{\\partial x} dx + \\frac{\\partial z}{\\partial y} dy, \\qquad du = \\frac{\\partial u}{\\partial x}dx + \\frac{\\partial u}{\\partial y}dy + \\frac{\\partial u}{\\partial z}dz",
    note: "Taqribiy hisoblash: delta z ≈ dz",
    keywords: "toliq differensial xususiy hosila taqribiy"
  },
  {
    id: "kop-2",
    category: "kop-ozgaruvchili",
    categoryLabel: "Ko'p o'zgaruvchili",
    title: "Gradient va Yo'nalish bo'yicha hosila",
    latex: "\\text{grad}\\,u = \\nabla u = \\left(\\frac{\\partial u}{\\partial x}, \\frac{\\partial u}{\\partial y}, \\frac{\\partial u}{\\partial z}\\right), \\qquad \\frac{\\partial u}{\\partial \\vec{l}} = \\nabla u \\cdot \\vec{l}_0 = |\\nabla u|\\cos\\alpha",
    note: "Gradient maydonning eng tez o'sish yo'nalishi va tezligini ko'rsatadi",
    keywords: "gradient yonalish boyicha hosila nabla vektor"
  },
  {
    id: "kop-3",
    category: "kop-ozgaruvchili",
    categoryLabel: "Ko'p o'zgaruvchili",
    title: "Ikki o'zgaruvchili funksiya ekstremumi yetarli sharti",
    latex: "\\Delta = AC - B^2 \\quad \\left(A = z''_{xx}, \\; B = z''_{xy}, \\; C = z''_{yy}\\right)",
    note: "Delta > 0, A > 0 bo'lsa minimum; Delta > 0, A < 0 bo'lsa maksimum; Delta < 0 bo'lsa ekstremum yo'q",
    keywords: "ekstremum minimum maksimum ikkinchi tartibli xususiy hosila"
  },
  {
    id: "kop-4",
    category: "kop-ozgaruvchili",
    categoryLabel: "Ko'p o'zgaruvchili",
    title: "Sirtga o'tkazilgan urinma tekislik va normal tenglamasi",
    latex: "F'_x(x - x_0) + F'_y(y - y_0) + F'_z(z - z_0) = 0 \\quad (\\text{Urinma tekislik}); \\qquad \\frac{x-x_0}{F'_x} = \\frac{y-y_0}{F'_y} = \\frac{z-z_0}{F'_z} \\quad (\\text{Normal})",
    note: "F(x, y, z) = 0 sirt uchun",
    keywords: "urinma tekislik normal togri chiziq sirt geometriya"
  },
  {
    id: "kop-5",
    category: "kop-ozgaruvchili",
    categoryLabel: "Ko'p o'zgaruvchili",
    title: "Shartli ekstremum: Lagranj ko'paytuvchilari usuli",
    latex: "L(x, y, \\lambda) = f(x, y) + \\lambda \\cdot \\varphi(x, y) \\implies \\begin{cases} L'_x = 0 \\\\ L'_y = 0 \\\\ \\varphi(x, y) = 0 \\end{cases}",
    note: "phi(x, y) = 0 bog'lanish sharti bo'lganda f(x, y) ekstremumi",
    keywords: "lagranj kopaytuvchilari shartli ekstremum boglanish"
  },
  {
    id: "kar-1",
    category: "kop-ozgaruvchili",
    categoryLabel: "Karrali & Maydon",
    title: "Qutb koordinatalarida 2-karrali integral",
    latex: "\\iint_D f(x, y)\\,dx\\,dy = \\iint_{D'} f(r\\cos\\varphi, r\\sin\\varphi)\\, r\\,dr\\,d\\varphi",
    note: "Yakobian J = r ko'paytuvchisini kiritish shart",
    keywords: "ikki karrali qutb koordinatalari yakobian doira"
  },
  {
    id: "kar-2",
    category: "kop-ozgaruvchili",
    categoryLabel: "Karrali & Maydon",
    title: "Silindrik va Sferik koordinatalar (3-karrali integral)",
    latex: "dV = r\\,dr\\,d\\varphi\\,dz \\quad (\\text{Silindrik}); \\qquad dV = \\rho^2\\sin\\theta\\,d\\rho\\,d\\theta\\,d\\varphi \\quad (\\text{Sferik})",
    note: "Sferikda: x = rho sin(theta) cos(phi), y = rho sin(theta) sin(phi), z = rho cos(theta)",
    keywords: "uch karrali silindrik sferik hajm yakobian"
  },
  {
    id: "kar-3",
    category: "kop-ozgaruvchili",
    categoryLabel: "Karrali & Maydon",
    title: "Grin formulasi (Tekislikdagi kontur integrali)",
    latex: "\\oint_L P\\,dx + Q\\,dy = \\iint_D \\left(\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y}\\right) dx\\,dy",
    note: "L — musbat yo'nalishda aylaniladigan soha chegarasi",
    keywords: "grin formulasi egri chiziqli ikki karrali kontur"
  },
  {
    id: "kar-4",
    category: "kop-ozgaruvchili",
    categoryLabel: "Karrali & Maydon",
    title: "Vektor maydon oqimi va Ostrogradskiy-Gauss teoremasi",
    latex: "\\Phi = \\iint_S \\vec{a} \\cdot \\vec{n}\\,dS = \\iiint_V \\text{div}\\,\\vec{a}\\,dV = \\iiint_V \\left(\\frac{\\partial P}{\\partial x} + \\frac{\\partial Q}{\\partial y} + \\frac{\\partial R}{\\partial z}\\right) dV",
    note: "div a = nabla · a — maydon divergensiyasi (manbalar quvvati)",
    keywords: "oqim divergensiya ostrogradskiy gauss teoremalar sirt"
  },
  {
    id: "kar-5",
    category: "kop-ozgaruvchili",
    categoryLabel: "Karrali & Maydon",
    title: "Sirkulyatsiya, Rotor va Stoks formulasi",
    latex: "\\Gamma = \\oint_L \\vec{a} \\cdot d\\vec{r} = \\iint_S \\text{rot}\\,\\vec{a} \\cdot \\vec{n}\\,dS, \\qquad \\text{rot}\\,\\vec{a} = \\nabla \\times \\vec{a} = \\begin{vmatrix} \\vec{i} & \\vec{j} & \\vec{k} \\\\ \\frac{\\partial}{\\partial x} & \\frac{\\partial}{\\partial y} & \\frac{\\partial}{\\partial z} \\\\ P & Q & R \\end{vmatrix}",
    note: "Agar rot a = 0 bo'lsa — potensial maydon (sirkulyatsiya nolga teng)",
    keywords: "sirkulyatsiya rotor stoks formulasi uyurma potensial"
  },
  {
    id: "qat-1",
    category: "qatorlar",
    categoryLabel: "Qatorlar",
    title: "Dalamber yaqinlashish alomati",
    latex: "D = \\lim_{n \\to \\infty} \\frac{a_{n+1}}{a_n} \\implies \\begin{cases} D < 1 & \\text{yaqinlashadi} \\\\ D > 1 & \\text{uzoqlashadi} \\\\ D = 1 & \\text{noma'lum} \\end{cases}",
    note: "Faktorial va darajali hadlar qatnashganda eng qulay alomat",
    keywords: "dalamber alomat musbat hadli qator yaqinlashish"
  },
  {
    id: "qat-2",
    category: "qatorlar",
    categoryLabel: "Qatorlar",
    title: "Radikal Koshi alomati",
    latex: "C = \\lim_{n \\to \\infty} \\sqrt[n]{a_n} \\implies \\begin{cases} C < 1 & \\text{yaqinlashadi} \\\\ C > 1 & \\text{uzoqlashadi} \\end{cases}",
    note: "Hadlar n-darajada bo'lganda ishlatiladi",
    keywords: "koshi radikal n darajali ildiz alomat"
  },
  {
    id: "qat-3",
    category: "qatorlar",
    categoryLabel: "Qatorlar",
    title: "Umumlashtirilgan garmonik qator (Dirixle)",
    latex: "\\sum_{n=1}^\\infty \\frac{1}{n^p} \\implies \\begin{cases} p > 1 & \\text{yaqinlashadi} \\\\ p \\le 1 & \\text{uzoqlashadi} \\end{cases}",
    note: "p = 1 bo'lganda oddiy garmonik qator uzoqlashadi",
    keywords: "garmonik qator dirixle etalon taqqoslash"
  },
  {
    id: "qat-4",
    category: "qatorlar",
    categoryLabel: "Qatorlar",
    title: "Leybnits alomati (Ishorasi almashinuvchi qatorlar)",
    latex: "\\sum_{n=1}^\\infty (-1)^{n-1} a_n \\quad (a_{n+1} \\le a_n, \\; \\lim a_n = 0) \\implies |R_n| \\le a_{n+1}",
    note: "Qator yaqinlashadi, xatolik tashlab ketilgan 1-haddan oshmaydi",
    keywords: "leybnits alomati ishora almashinuvchi qoldiq had xatolik"
  },
  {
    id: "qat-5",
    category: "qatorlar",
    categoryLabel: "Qatorlar",
    title: "Asosiy Makloren darajali qatorlari",
    latex: "e^x = \\sum_{n=0}^\\infty \\frac{x^n}{n!}, \\quad \\sin x = \\sum_{n=0}^\\infty \\frac{(-1)^n x^{2n+1}}{(2n+1)!}, \\quad \\cos x = \\sum_{n=0}^\\infty \\frac{(-1)^n x^{2n}}{(2n)!}",
    note: "Barcha x larda yaqinlashadi (-cheksiz < x < cheksiz)",
    keywords: "makloren teylor darajali qator eksponenta sinus kosinus"
  },
  {
    id: "qat-6",
    category: "qatorlar",
    categoryLabel: "Qatorlar",
    title: "Logarifmik va Binomial Makloren qatorlari",
    latex: "\\ln(1+x) = \\sum_{n=1}^\\infty \\frac{(-1)^{n-1} x^n}{n} \\; (-1 < x \\le 1), \\qquad \\frac{1}{1-x} = \\sum_{n=0}^\\infty x^n \\; (|x| < 1)",
    note: "Geometrik progressiya va natural logarifm yoyilmalari",
    keywords: "logarifm geometrik progressiya binomial qator"
  },
  {
    id: "qat-7",
    category: "qatorlar",
    categoryLabel: "Qatorlar",
    title: "Trigonometrik Fure qatori",
    latex: "f(x) = \\frac{a_0}{2} + \\sum_{n=1}^\\infty (a_n \\cos(nx) + b_n \\sin(nx))",
    note: "[-pi, pi] oraliqda berilgan 2pi davrli funksiya",
    keywords: "fure qatori trigonometrik spektr garmonika"
  },
  {
    id: "qat-8",
    category: "qatorlar",
    categoryLabel: "Qatorlar",
    title: "Eyler-Fure koeffitsiyentlari",
    latex: "a_0 = \\frac{1}{\\pi}\\int_{-\\pi}^\\pi f(x)dx, \\quad a_n = \\frac{1}{\\pi}\\int_{-\\pi}^\\pi f(x)\\cos(nx)dx, \\quad b_n = \\frac{1}{\\pi}\\int_{-\\pi}^\\pi f(x)\\sin(nx)dx",
    note: "Juft funksiyada b_n = 0; toq funksiyada a_0 = 0, a_n = 0",
    keywords: "eyler fure koeffitsiyentlari a0 an bn juft toq"
  },
  {
    id: "diff-1",
    category: "diff",
    categoryLabel: "Diff Tenglama",
    title: "O'zgaruvchilari ajraladigan tenglama",
    latex: "M_1(x)N_1(y)dx + M_2(x)N_2(y)dy = 0 \\iff \\int \\frac{M_1(x)}{M_2(x)}dx + \\int \\frac{N_2(y)}{N_1(y)}dy = C",
    note: "Hamma x lar bir tomonga, y lar ikkinchi tomonga ajratiladi",
    keywords: "ajraladigan differensial tenglama kvadratura integral"
  },
  {
    id: "diff-2",
    category: "diff",
    categoryLabel: "Diff Tenglama",
    title: "1-tartibli chiziqli tenglama (Bernulli usuli)",
    latex: "y' + P(x)y = Q(x) \\implies y = u(x)v(x) \\implies \\begin{cases} v' + P(x)v = 0 \\\\ u'v = Q(x) \\end{cases}",
    note: "y = u*v almashtirish orqali ikkita oddiy tenglamaga keltiriladi",
    keywords: "chiziqli differensial tenglama bernulli uv almashtirish"
  },
  {
    id: "diff-3",
    category: "diff",
    categoryLabel: "Diff Tenglama",
    title: "Bernulli tenglamasi",
    latex: "y' + P(x)y = Q(x)y^n \\iff z' + (1-n)P(x)z = (1-n)Q(x) \\quad (z = y^{1-n})",
    note: "z = y^(1-n) almashtirishi bilan oddiy chiziqli tenglamaga keladi",
    keywords: "bernulli tenglamasi nochiziqli almashtirish daraja"
  },
  {
    id: "diff-4",
    category: "diff",
    categoryLabel: "Diff Tenglama",
    title: "2-tartibli o'zgarmas koeffitsiyentli bir jinsli tenglama",
    latex: "y'' + py' + qy = 0 \\iff k^2 + pk + q = 0 \\quad (\\text{Xarakteristik tenglama})",
    note: "D > 0: y = C1 e^(k1 x) + C2 e^(k2 x); D = 0: y = (C1 + C2 x)e^(kx); D < 0: y = e^(alpha x)(C1 cos beta x + C2 sin beta x)",
    keywords: "ikkinchi tartibli bir jinsli xarakteristik tenglama diskriminant"
  },
  {
    id: "diff-5",
    category: "diff",
    categoryLabel: "Diff Tenglama",
    title: "Bir jinsli bo'lmagan tenglamada xususiy yechim tanlash (Rezonans)",
    latex: "y'' + py' + qy = P_m(x)e^{\\alpha x} \\implies y^* = x^r Q_m(x)e^{\\alpha x}",
    note: "r — alpha sonining xarakteristik tenglama ildizlariga to'g'ri kelish soni (rezonans)",
    keywords: "rezonans xususiy yechim tanlash noma'lum koeffitsiyentlar"
  },
  {
    id: "diff-6",
    category: "diff",
    categoryLabel: "Diff Tenglama",
    title: "Lagranj o'zgarmaslarni variatsiyalash usuli",
    latex: "\\begin{cases} C_1'(x)y_1 + C_2'(x)y_2 = 0 \\\\ C_1'(x)y_1' + C_2'(x)y_2' = f(x) \\end{cases} \\implies W(y_1, y_2) = \\begin{vmatrix} y_1 & y_2 \\\\ y_1' & y_2' \\end{vmatrix} \\neq 0",
    note: "W — Vronskiy determinanti; ixtiyoriy f(x) o'ng tomon uchun universal usul",
    keywords: "lagranj variatsiya vronskiy determinanti ixtiyoriy ozgarmas"
  },
  {
    id: "komp-1",
    category: "kompleks",
    categoryLabel: "Kompleks & Laplas",
    title: "Kompleks sonning uch xil shakli",
    latex: "z = x + iy \\; (\\text{alg}) = r(\\cos\\varphi + i\\sin\\varphi) \\; (\\text{trig}) = r e^{i\\varphi} \\; (\\text{Eyler})",
    note: "r = |z| = sqrt(x² + y²), tan(phi) = y / x",
    keywords: "kompleks son algebraik trigonometrik eyler modul argument"
  },
  {
    id: "komp-2",
    category: "kompleks",
    categoryLabel: "Kompleks & Laplas",
    title: "Muavr formulasi va n-darajali ildizlar",
    latex: "z^n = r^n e^{i n \\varphi}, \\qquad \\sqrt[n]{z} = \\sqrt[n]{r} \\left(\\cos\\frac{\\varphi + 2\\pi k}{n} + i\\sin\\frac{\\varphi + 2\\pi k}{n}\\right) \\quad (k = 0, 1, \\dots, n-1)",
    note: "Kompleks tekislikda to'g'ri n-burchak uchlarida joylashadi",
    keywords: "muavr formulasi ildiz chiqarish daraja kompleks son"
  },
  {
    id: "komp-3",
    category: "kompleks",
    categoryLabel: "Kompleks & Laplas",
    title: "TFKP: Koshi–Riman analitiklik shartlari",
    latex: "\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}, \\qquad \\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x} \\implies f'(z) = \\frac{\\partial u}{\\partial x} + i\\frac{\\partial v}{\\partial x}",
    note: "f(z) = u(x, y) + i v(x, y) kompleks differensiallanuvchi bo'lish sharti",
    keywords: "koshi riman d'alamber eyler analitik garmonik tfkp"
  },
  {
    id: "komp-4",
    category: "kompleks",
    categoryLabel: "Kompleks & Laplas",
    title: "Koshi integral formulasi va Chegirmalar (Vychet) teoremasi",
    latex: "f(z_0) = \\frac{1}{2\\pi i}\\oint_L \\frac{f(z)}{z - z_0}\\,dz, \\qquad \\oint_L f(z)\\,dz = 2\\pi i \\sum_{k=1}^m \\text{Res}\\,f(z_k)",
    note: "TFKP yordamida olinishi qiyin bo'lgan murakkab integrallarni hisoblash",
    keywords: "koshi integrali chegirmalar vychet qoldiq qutb"
  },
  {
    id: "komp-5",
    category: "kompleks",
    categoryLabel: "Kompleks & Laplas",
    title: "Laplas almashtirishi ta'rifi",
    latex: "F(p) = \\mathcal{L}\\{f(t)\\} = \\int_0^\\infty f(t)e^{-pt}\\,dt",
    note: "f(t) — asl nusxa (original), F(p) — tasvir (obraz)",
    keywords: "laplas almashtirishi integral operatsion hisob original tasvir"
  },
  {
    id: "komp-6",
    category: "kompleks",
    categoryLabel: "Kompleks & Laplas",
    title: "Hosilaning Laplas tasviri (Koshi masalasini yechish)",
    latex: "\\mathcal{L}\\{y'\\} = pY(p) - y(0), \\qquad \\mathcal{L}\\{y''\\} = p^2 Y(p) - py(0) - y'(0)",
    note: "Differensial tenglamani oddiy chiziqli algebraik tenglamaga aylantiradi",
    keywords: "laplas hosila koshi masalasi differensial algebraik"
  },
  {
    id: "komp-7",
    category: "kompleks",
    categoryLabel: "Kompleks & Laplas",
    title: "Asosiy elementar funksiyalar Laplas jadvallari",
    latex: "\\mathcal{L}\\{1\\} = \\frac{1}{p}, \\quad \\mathcal{L}\\{t^n\\} = \\frac{n!}{p^{n+1}}, \\quad \\mathcal{L}\\{e^{at}\\} = \\frac{1}{p - a}, \\quad \\mathcal{L}\\{\\sin\\omega t\\} = \\frac{\\omega}{p^2 + \\omega^2}, \\quad \\mathcal{L}\\{\\cos\\omega t\\} = \\frac{p}{p^2 + \\omega^2}",
    note: "Siljish teoremasi: L{e^(at) f(t)} = F(p - a)",
    keywords: "laplas jadval original obraz sinus kosinus eksponenta"
  },
  {
    id: "eht-1",
    category: "ehtimollik",
    categoryLabel: "Ehtimollik & Stat",
    title: "Kombinatorika: O'rinlashtirish, Guruhlash, O'rin almashtirish",
    latex: "P_n = n!, \\qquad A_n^k = \\frac{n!}{(n-k)!}, \\qquad C_n^k = \\frac{n!}{k!(n-k)!}",
    note: "A da tartib muhim, C da tartib ahamiyatsiz",
    keywords: "kombinatorika orinlashtirish guruhlash faktorial kombinatsiya"
  },
  {
    id: "eht-2",
    category: "ehtimollik",
    categoryLabel: "Ehtimollik & Stat",
    title: "Ehtimollarni qo'shish va ko'paytirish (Shartli ehtimol)",
    latex: "P(A + B) = P(A) + P(B) - P(AB), \\qquad P(AB) = P(A) \\cdot P(B|A)",
    note: "Bog'liqsiz hodisalar uchun: P(AB) = P(A) * P(B)",
    keywords: "ehtimollarni qoshish kopaytirish shartli ehtimol bogliqsiz"
  },
  {
    id: "eht-3",
    category: "ehtimollik",
    categoryLabel: "Ehtimollik & Stat",
    title: "To'la ehtimol va Bayes formulalari",
    latex: "P(A) = \\sum_{i=1}^n P(H_i)P(A|H_i), \\qquad P(H_i|A) = \\frac{P(H_i)P(A|H_i)}{\\sum_{j=1}^n P(H_j)P(A|H_j)}",
    note: "H_1, ..., H_n — to'la gipotezalar guruhi (yig'indisi 1 ga teng)",
    keywords: "tola ehtimol bayes formulasi gipotezalar aposterior aprior"
  },
  {
    id: "eht-4",
    category: "ehtimollik",
    categoryLabel: "Ehtimollik & Stat",
    title: "Bernulli sxemasi va Puasson qonuni",
    latex: "P_n(k) = C_n^k p^k q^{n-k} \\quad (q = 1 - p), \\qquad P_n(k) \\approx \\frac{\\lambda^k e^{-\\lambda}}{k!} \\quad (\\lambda = np)",
    note: "n katta, p juda kichik bo'lganda kam uchraydigan hodisalar uchun Puasson",
    keywords: "bernulli sxemasi puasson taqsimoti kam uchraydigan hodisa"
  },
  {
    id: "eht-5",
    category: "ehtimollik",
    categoryLabel: "Ehtimollik & Stat",
    title: "Muavr–Laplas lokal va integral teoremalari",
    latex: "P_n(k) \\approx \\frac{1}{\\sqrt{npq}} \\varphi(x) \\quad \\left(x = \\frac{k - np}{\\sqrt{npq}}\\right), \\qquad P(k_1 \\le X \\le k_2) \\approx \\Phi(x_2) - \\Phi(x_1)",
    note: "phi(x) — Gauss funksiyasi, Phi(x) — Laplas integral funksiyasi",
    keywords: "muavr laplas lokal integral gauss funksiyasi oraliq ehtimol"
  },
  {
    id: "eht-6",
    category: "ehtimollik",
    categoryLabel: "Ehtimollik & Stat",
    title: "Tasodifiy miqdorning sonli xarakteristikalari",
    latex: "M(X) = \\sum x_i p_i \\; (\\text{yoki} \\int_{-\\infty}^\\infty x f(x)dx), \\qquad D(X) = M(X^2) - [M(X)]^2, \\qquad \\sigma(X) = \\sqrt{D(X)}",
    note: "M(X) — o'rtacha qiymat (kutilma), D(X) — dispersiya, sigma — o'rtacha kvadratik chetlanish",
    keywords: "matematik kutilma dispersiya standart chetlanish zichlik"
  },
  {
    id: "eht-7",
    category: "ehtimollik",
    categoryLabel: "Ehtimollik & Stat",
    title: "Matematik statistika: Tanlanma o'rtacha va Tanlanma dispersiya",
    latex: "\\bar{x} = \\frac{1}{n}\\sum_{i=1}^n x_i, \\qquad s^2 = \\frac{1}{n-1}\\sum_{i=1}^n (x_i - \\bar{x})^2, \\qquad S_e = \\frac{s}{\\sqrt{n}}",
    note: "s^2 — siljimagan (tuzatilgan) dispersiya, S_e — standart xatolik",
    keywords: "tanlanma ortacha dispersiya siljimagan baho standart xatolik"
  },
  {
    id: "eht-8",
    category: "ehtimollik",
    categoryLabel: "Ehtimollik & Stat",
    title: "Chiziqli korrelyatsiya va Regressiya tenglamasi (EKU)",
    latex: "r_{xy} = \\frac{\\sum (x_i - \\bar{x})(y_i - \\bar{y})}{\\sqrt{\\sum (x_i - \\bar{x})^2 \\sum (y_i - \\bar{y})^2}}, \\qquad y - \\bar{y} = r_{xy}\\frac{s_y}{s_x}(x - \\bar{x})",
    note: "|r_xy| <= 1. Eng kichik kvadratlar usuli bo'yicha chiziqli regressiya",
    keywords: "korrelyatsiya koeffitsiyenti regressiya eng kichik kvadratlar usuli"
  },
  {
    id: "trig-1",
    category: "trigonometriya",
    categoryLabel: "Trigonometriya",
    title: "Pifagor trigonometrik ayniyatlari",
    latex: "\\sin^2 x + \\cos^2 x = 1, \\qquad 1 + \\tan^2 x = \\frac{1}{\\cos^2 x}, \\qquad 1 + \\cot^2 x = \\frac{1}{\\sin^2 x}",
    note: "Burchak kvadratlari yig'indisi 1 ga teng",
    keywords: "pifagor ayniyat sin2 cos2 tan2 cot2"
  },
  {
    id: "trig-2",
    category: "trigonometriya",
    categoryLabel: "Trigonometriya",
    title: "Ikkilangan burchak formulalari",
    latex: "\\sin(2x) = 2\\sin x \\cos x, \\qquad \\cos(2x) = \\cos^2 x - \\sin^2 x = 2\\cos^2 x - 1 = 1 - 2\\sin^2 x",
    note: "tan(2x) = 2tan(x) / (1 - tan²x)",
    keywords: "ikkilangan burchak sin 2x cos 2x"
  },
  {
    id: "trig-3",
    category: "trigonometriya",
    categoryLabel: "Trigonometriya",
    title: "Darajani pasaytirish formulalari",
    latex: "\\sin^2 x = \\frac{1 - \\cos(2x)}{2}, \\qquad \\cos^2 x = \\frac{1 + \\cos(2x)}{2}",
    note: "Integrallashda juft darajalarni ochish uchun eng ko'p ishlatiladigan formula",
    keywords: "daraja pasaytirish integral olish sin kvadrat cos kvadrat"
  },
  {
    id: "trig-4",
    category: "trigonometriya",
    categoryLabel: "Trigonometriya",
    title: "Trigonometrik funksiyalar yig'indisini ko'paytmaga aylantirish",
    latex: "\\sin x \\pm \\sin y = 2\\sin\\frac{x \\pm y}{2}\\cos\\frac{x \\mp y}{2}, \\qquad \\cos x + \\cos y = 2\\cos\\frac{x+y}{2}\\cos\\frac{x-y}{2}",
    note: "cos x - cos y = -2 sin((x+y)/2) sin((x-y)/2)",
    keywords: "yigindi kopaytma trigonometriya sinus kosinus"
  },
  {
    id: "trig-5",
    category: "trigonometriya",
    categoryLabel: "Trigonometriya",
    title: "Universal trigonometrik almashtirish (Weierstrass)",
    latex: "t = \\tan\\left(\\frac{x}{2}\\right) \\implies \\sin x = \\frac{2t}{1+t^2}, \\quad \\cos x = \\frac{1-t^2}{1+t^2}, \\quad dx = \\frac{2\\,dt}{1+t^2}",
    note: "Trigonometrik integrallarni algebraik ratsional kasrga aylantirish",
    keywords: "universal almashtirish veyershtrass tan x 2 yarim burchak"
  },
  {
    id: "alg-11",
    category: "algebra",
    categoryLabel: "Algebra & Matritsa",
    title: "Matritsa rangi va fundamental xossalari",
    latex: "\\operatorname{rang}(A \\cdot B) \\le \\min(\\operatorname{rang} A, \\operatorname{rang} B), \\quad \\operatorname{rang}(A + B) \\le \\operatorname{rang} A + \\operatorname{rang} B",
    note: "Noldan farqli satrlar soni (Gauss usulida pog'onaviy ko'rinishga keltirilgandan so'ng)",
    keywords: "matritsa rangi xossa gauss pogonaviy nol emas rang"
  },
  {
    id: "alg-12",
    category: "algebra",
    categoryLabel: "Algebra & Matritsa",
    title: "Keyli-Gamilton teoremasi",
    latex: "P(\\lambda) = \\det(A - \\lambda E) = 0 \\implies P(A) = A^n + c_1 A^{n-1} + \\dots + c_n E = 0",
    note: "Har qanday kvadrat matritsa o'zining xarakteristik tenglamasini qanoatlantiradi",
    keywords: "keyli gamilton xarakteristik polinom matritsa darajasi teskari matritsa"
  },
  {
    id: "alg-13",
    category: "algebra",
    categoryLabel: "Algebra & Matritsa",
    title: "Matritsa izi (Trace) va Xos qiymatlar bog'liqligi",
    latex: "\\operatorname{tr}(A) = \\sum_{i=1}^n a_{ii} = \\sum_{i=1}^n \\lambda_i, \\qquad \\det(A) = \\prod_{i=1}^n \\lambda_i",
    note: "Bosh diagonal elementlari yig'indisi barcha xos sonlar yig'indisiga, determinant esa ularning ko'paytmasiga teng",
    keywords: "matritsa izi trace xos qiymatlar determinant diagonal spektr"
  },
  {
    id: "alg-14",
    category: "algebra",
    categoryLabel: "Algebra & Matritsa",
    title: "Gram-Shmidt ortogonallashtirish jarayoni",
    latex: "\\vec{u}_k = \\vec{v}_k - \\sum_{j=1}^{k-1} \\frac{\\vec{v}_k \\cdot \\vec{u}_j}{\\|\\vec{u}_j\\|^2} \\vec{u}_j, \\quad \\vec{e}_k = \\frac{\\vec{u}_k}{\\|\\vec{u}_k\\|}",
    note: "Chiziqli erkli vektorlar sistemasidan ortonormal bazis yasash algoritmi",
    keywords: "gram shmidt ortogonal ortonormal bazis vektor fazo proeksiya"
  },
  {
    id: "alg-15",
    category: "algebra",
    categoryLabel: "Algebra & Matritsa",
    title: "Chiziqli dasturlash: Simpleks jadvali nisbat qoidasi",
    latex: "\\theta = \\min_{i: a_{is} > 0} \\left( \\frac{b_i}{a_{is}} \\right)",
    note: "Asosiy satr (bazisdan chiquvchi o'zgaruvchi) eng kichik musbat nisbat bo'yicha tanlanadi",
    keywords: "simpleks usuli nisbat qoidasi theta chiziqli dasturlash bazis simpleks jadval"
  },
  {
    id: "alg-16",
    category: "algebra",
    categoryLabel: "Algebra & Matritsa",
    title: "Kramer formulasi (3x3 CHATS uchun to'liq yechim)",
    latex: "x = \\frac{\\Delta_x}{\\Delta}, \\quad y = \\frac{\\Delta_y}{\\Delta}, \\quad z = \\frac{\\Delta_z}{\\Delta} \\quad (\\Delta \\neq 0)",
    note: "Delta_x, Delta_y, Delta_z — mos ustunlar ozod hadlar ustuniga almashtirilgan determinantlar",
    keywords: "kramer formulasi 3x3 sistema uch nomalumli chats determinant"
  },
  {
    id: "v-11",
    category: "vektorlar",
    categoryLabel: "Vektor & Geometriya",
    title: "Fazoda ikki nuqta orasidagi masofa va kesmani bo'lish",
    latex: "d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2 + (z_2-z_1)^2}, \\quad x_M = \\frac{x_1 + \\lambda x_2}{1 + \\lambda}",
    note: "lambda = 1 bo'lganda kesma o'rtasi: (x_1+x_2)/2",
    keywords: "masofa fazo kesma ortasi koordinata lambda nisbat"
  },
  {
    id: "v-12",
    category: "vektorlar",
    categoryLabel: "Vektor & Geometriya",
    title: "Fazoda ikki to'g'ri chiziq orasidagi burchak kosinusi",
    latex: "\\cos\\varphi = \\frac{|m_1 m_2 + n_1 n_2 + p_1 p_2|}{\\sqrt{m_1^2 + n_1^2 + p_1^2}\\sqrt{m_2^2 + n_2^2 + p_2^2}}",
    note: "s_1(m_1, n_1, p_1) va s_2(m_2, n_2, p_2) — to'g'ri chiziqlarning yo'naltiruvchi vektorlari",
    keywords: "burchak kosinus fazoda togri chiziq yonalish vektori kanonik"
  },
  {
    id: "v-13",
    category: "vektorlar",
    categoryLabel: "Vektor & Geometriya",
    title: "Fazoda to'g'ri chiziq va tekislik orasidagi burchak sinusi",
    latex: "\\sin\\theta = \\frac{|A m + B n + C p|}{\\sqrt{A^2 + B^2 + C^2}\\sqrt{m^2 + n^2 + p^2}}",
    note: "Tekislik normali n(A, B, C) va to'g'ri chiziq s(m, n, p) orqali hisoblanadi",
    keywords: "burchak tekislik togri chiziq normal sinus kanonik"
  },
  {
    id: "v-14",
    category: "vektorlar",
    categoryLabel: "Vektor & Geometriya",
    title: "Fazoda ayqash to'g'ri chiziqlar orasidagi eng qisqa masofa",
    latex: "d = \\frac{|(\\vec{M_1 M_2}, \\vec{s}_1, \\vec{s}_2)|}{|\\vec{s}_1 \\times \\vec{s}_2|}",
    note: "Aralash ko'paytma modulining vektor ko'paytma moduliga nisbati",
    keywords: "ayqash togri chiziqlar eng qisqa masofa aralash kopaytma vektor"
  },
  {
    id: "v-15",
    category: "vektorlar",
    categoryLabel: "Vektor & Geometriya",
    title: "Tekisliklarning o'zaro joylashuvi va burchagi",
    latex: "\\cos\\varphi = \\frac{A_1 A_2 + B_1 B_2 + C_1 C_2}{\\sqrt{A_1^2 + B_1^2 + C_1^2}\\sqrt{A_2^2 + B_2^2 + C_2^2}}",
    note: "Perpendikulyarlik sharti: A_1 A_2 + B_1 B_2 + C_1 C_2 = 0; Parallellik: A_1/A_2 = B_1/B_2 = C_1/C_2",
    keywords: "tekisliklar burchagi parallel perpendikulyar normal vektor"
  },
  {
    id: "v-16",
    category: "vektorlar",
    categoryLabel: "Vektor & Geometriya",
    title: "Qutb va Dekart koordinatalari o'zaro bog'liqligi",
    latex: "x = r\\cos\\varphi, \\quad y = r\\sin\\varphi \\iff r = \\sqrt{x^2 + y^2}, \\quad \\tan\\varphi = \\frac{y}{x}",
    note: "r >= 0, 0 <= phi < 2pi (yoki -pi < phi <= pi)",
    keywords: "qutb koordinatalari dekart radiusi burchak aylantirish"
  },
  {
    id: "lim-7",
    category: "limitlar",
    categoryLabel: "Limitlar",
    title: "Ko'rsatkichli va logarifmik ajoyib limitlar (x -> 0)",
    latex: "\\lim_{x \\to 0} \\frac{e^x - 1}{x} = 1, \\qquad \\lim_{x \\to 0} \\frac{\\ln(1+x)}{x} = 1, \\qquad \\lim_{x \\to 0} \\frac{a^x - 1}{x} = \\ln a",
    note: "Ekvivalentlik qoidasining nazariy asosi hisoblanadi",
    keywords: "ajoyib limit korsatkichli logarifmik ln a e darajasi limit"
  },
  {
    id: "lim-8",
    category: "limitlar",
    categoryLabel: "Limitlar",
    title: "Darajali ajoyib limit va Binomial ekvivalentlik",
    latex: "\\lim_{x \\to 0} \\frac{(1+x)^\\alpha - 1}{x} = \\alpha, \\qquad \\lim_{x \\to 0} \\frac{\\sqrt[n]{1+x} - 1}{x} = \\frac{1}{n}",
    note: "Ildizli va darajali ifodalarni x -> 0 da differensiallashsiz ochish usuli",
    keywords: "darajali limit ildiz binomial ekvivalentlik alfa n daraja"
  },
  {
    id: "lim-9",
    category: "limitlar",
    categoryLabel: "Limitlar",
    title: "Cheksizlikdagi ko'phadlar nisbati limiti",
    latex: "\\lim_{x \\to \\infty} \\frac{a_n x^n + \\dots + a_0}{b_m x^m + \\dots + b_0} = \\begin{cases} \\infty, & n > m \\\\ \\frac{a_n}{b_m}, & n = m \\\\ 0, & n < m \\end{cases}",
    note: "Faqat eng yuqori darajalar nisbatiga bog'liq",
    keywords: "kophadlar nisbati cheksizlik eng yuqori daraja kophad limit"
  },
  {
    id: "lim-10",
    category: "limitlar",
    categoryLabel: "Limitlar",
    title: "Trigonometrik ayirmalarning ekvivalentligi (x -> 0)",
    latex: "\\tan x - \\sin x \\sim \\frac{x^3}{2}, \\qquad x - \\sin x \\sim \\frac{x^3}{6}, \\qquad \\tan x - x \\sim \\frac{x^3}{3}",
    note: "Ayirma limitlarida birinchi tartibli ekvivalentlarni almashtirib bo'lmaydigan holatlar",
    keywords: "ayirma ekvivalent tan x - sin x x3 kubik tartib imtihon tuzog'i"
  },
  {
    id: "lim-11",
    category: "limitlar",
    categoryLabel: "Limitlar",
    title: "Teskari trigonometrik funksiyalar limitlari",
    latex: "\\lim_{x \\to 0} \\frac{\\arcsin x}{x} = 1, \\qquad \\lim_{x \\to 0} \\frac{\\arctan x}{x} = 1",
    note: "x -> 0 da arcsin(x) ~ x va arctan(x) ~ x",
    keywords: "arcsin arctan ekvivalent limit teskari trigonometriya"
  },
  {
    id: "lim-12",
    category: "limitlar",
    categoryLabel: "Limitlar",
    title: "Shtols (Stolz-Cesaro) teoremasi (Ketma-ketliklar uchun Lopital)",
    latex: "\\lim_{n \\to \\infty} \\frac{x_n}{y_n} = \\lim_{n \\to \\infty} \\frac{x_n - x_{n-1}}{y_n - y_{n-1}} \\quad (y_n \\uparrow \\infty)",
    note: "Ketma-ketliklarning [cheksiz/cheksiz] aniqmasligini ochish formulasi",
    keywords: "shtols teoremasi stolz cesaro ketma ketlik limiti lopital cheksizlik"
  },
  {
    id: "h-12",
    category: "hosilalar",
    categoryLabel: "Hosilalar",
    title: "Teskari trigonometrik funksiyalarning to'liq hosilalari",
    latex: "(\\arcsin x)' = \\frac{1}{\\sqrt{1-x^2}}, \\quad (\\arccos x)' = -\\frac{1}{\\sqrt{1-x^2}}, \\quad (\\operatorname{arcctg} x)' = -\\frac{1}{1+x^2}",
    note: "|x| < 1 oraliqda. Arktangens esa hamma joyda aniqlangan: (arctan x)' = 1/(1+x²)",
    keywords: "arcsin arccos arcctg teskari trigonometrik hosila jadval"
  },
  {
    id: "h-13",
    category: "hosilalar",
    categoryLabel: "Hosilalar",
    title: "Giperbolik funksiyalarning to'liq hosilalari",
    latex: "(\\operatorname{sh} x)' = \\operatorname{ch} x, \\quad (\\operatorname{ch} x)' = \\operatorname{sh} x, \\quad (\\operatorname{th} x)' = \\frac{1}{\\operatorname{ch}^2 x}, \\quad (\\operatorname{cth} x)' = -\\frac{1}{\\operatorname{sh}^2 x}",
    note: "Kosinusdan farqli o'laroq, giperbolik ch(x) hosilasi musbat sh(x) bo'ladi",
    keywords: "giperbolik funksiya hosilasi sh ch th cth sinus kosinus"
  },
  {
    id: "h-14",
    category: "hosilalar",
    categoryLabel: "Hosilalar",
    title: "Logarifmik differensiallash formulasi: u(x)^v(x)",
    latex: "[u(x)^{v(x)}]' = u^v \\left( v' \\ln u + \\frac{v \\cdot u'}{u} \\right)",
    note: "Darajali-ko'rsatkichli funksiyani oldin ln(y) olib, so'ngra hosila olish usuli",
    keywords: "logarifmik differensiallash darajali korsatkichli u darajasi v murakkab hosila"
  },
  {
    id: "h-15",
    category: "hosilalar",
    categoryLabel: "Hosilalar",
    title: "Parametrik funksiyaning 2-tartibli hosilasi",
    latex: "y''_{xx} = \\frac{(y'_x)'_t}{x'_t} = \\frac{y''_{tt} x'_t - y'_t x''_{tt}}{(x'_t)^3}",
    note: "Maxrajda x'_t ning kubi hosil bo'ladi, diqqat qiling!",
    keywords: "parametrik ikkinchi tartibli hosila y xx x t kubi parametr"
  },
  {
    id: "h-16",
    category: "hosilalar",
    categoryLabel: "Hosilalar",
    title: "Differensial va taqribiy hisoblash formulasi",
    latex: "\\Delta y \\approx dy = f'(x_0) \\Delta x \\implies f(x_0 + \\Delta x) \\approx f(x_0) + f'(x_0) \\Delta x",
    note: "Funksiyaning kichik o'zgarishini uning urinmasi orqali chiziqli approksimatsiya qilish",
    keywords: "differensial taqribiy hisoblash chetki xatolik approksimatsiya orttirma"
  },
  {
    id: "h-17",
    category: "hosilalar",
    categoryLabel: "Hosilalar",
    title: "O'rta qiymat teoremalari: Lagranj va Koshi",
    latex: "\\frac{f(b) - f(a)}{b - a} = f'(\\xi), \\qquad \\frac{f(b) - f(a)}{g(b) - g(a)} = \\frac{f'(\\xi)}{g'(\\xi)} \\quad (\\xi \\in (a; b))",
    note: "Funksiyaning o'rtacha o'zgarish tezligiga teng bo'lgan ichki nuqta xi mavjudligi",
    keywords: "orta qiymat teoremasi lagranj koshi hosila chekli orttirma roll"
  },
  {
    id: "q-6",
    category: "qoidalar",
    categoryLabel: "Differensiallash qoidalari",
    title: "Funksiya grafigining asimptotalari formulalari",
    latex: "k = \\lim_{x \\to \\pm\\infty} \\frac{f(x)}{x}, \\quad b = \\lim_{x \\to \\pm\\infty} [f(x) - kx] \\implies y = kx + b",
    note: "k = 0 bo'lsa gorizontal asimptota y = b; maxraj nolga intilganda vertikal asimptota x = x_0",
    keywords: "asimptota ogma gorizontal vertikal limit tekshirish grafik tekshirish"
  },
  {
    id: "q-7",
    category: "qoidalar",
    categoryLabel: "Differensiallash qoidalari",
    title: "Botiqlik, qavariqlik va burilish (egilish) nuqtasi",
    latex: "f''(x) > 0 \\implies \\cup \\text{ (botiq)}, \\quad f''(x) < 0 \\implies \\cap \\text{ (qavariq)}, \\quad f''(x_0) = 0 \\implies \\text{burilish}",
    note: "2-tartibli hosila orqali egri chiziqning shaklini va burilish nuqtalarini aniqlash",
    keywords: "botiqlik qavariqlik burilish nuqtasi ikkinchi hosila egilish grafik"
  },
  {
    id: "q-8",
    category: "qoidalar",
    categoryLabel: "Differensiallash qoidalari",
    title: "Ekstremumni ikkinchi hosila yordamida aniqlash",
    latex: "f'(x_0) = 0: \\quad f''(x_0) > 0 \\implies \\min, \\quad f''(x_0) < 0 \\implies \\max",
    note: "f''(x_0) = 0 bo'lsa, qoida noaniq, 1-hosila ishorasini oraliqlar usulida tekshirish lozim",
    keywords: "ekstremum ikkinchi tartibli hosila minimum maksimum sharti kritik nuqta"
  },
  {
    id: "q-9",
    category: "qoidalar",
    categoryLabel: "Differensiallash qoidalari",
    title: "Teylor formulasi qoldiq hadi (Lagranj va Peano shakllarida)",
    latex: "R_n(x) = \\frac{f^{(n+1)}(\\xi)}{(n+1)!}(x-x_0)^{n+1} \\quad (\\text{Lagranj}), \\qquad R_n(x) = o((x-x_0)^n) \\quad (\\text{Peano})",
    note: "Approksimatsiya xatoligini aniq baholash uchun Lagranj qoldig'i qo'llaniladi",
    keywords: "teylor formulasi qoldiq had lagranj peano baholash xatolik makloren"
  },
  {
    id: "q-10",
    category: "qoidalar",
    categoryLabel: "Differensiallash qoidalari",
    title: "Oshkormas funksiya hosilasi (Xususiy hosilalar orqali)",
    latex: "F(x, y) = 0 \\implies \\frac{dy}{dx} = -\\frac{F'_x(x, y)}{F'_y(x, y)} \\quad (F'_y \\neq 0)",
    note: "Tenglamani y ga nisbatan yechmasdan, to'g'ridan-to'g'ri hosila topish",
    keywords: "oshkormas funksiya hosilasi xususiy hosila F x F y teflama"
  },
  {
    id: "int-11",
    category: "integrallar",
    categoryLabel: "Integrallar",
    title: "Kvadrat ildizli asosiy integrallar (Uzun logarifm)",
    latex: "\\int \\frac{dx}{\\sqrt{x^2 \\pm a^2}} = \\ln\\left| x + \\sqrt{x^2 \\pm a^2} \\right| + C",
    note: "Oliy matematika imtihonlarida eng ko'p uchraydigan maxsus jadval integrali",
    keywords: "uzun logarifm integral ildiz x2 a2 kvadrat ildiz jadval"
  },
  {
    id: "int-12",
    category: "integrallar",
    categoryLabel: "Integrallar",
    title: "Giperbolik funksiyalar integrallari",
    latex: "\\int \\operatorname{sh} x \\, dx = \\operatorname{ch} x + C, \\qquad \\int \\operatorname{ch} x \\, dx = \\operatorname{sh} x + C, \\qquad \\int \\frac{dx}{\\operatorname{ch}^2 x} = \\operatorname{th} x + C",
    note: "Oddiy trigonometriyadan farqi: sh(x) integralida minus ishora yo'q",
    keywords: "giperbolik integral sh ch th koshinus sinus jadval"
  },
  {
    id: "int-13",
    category: "integrallar",
    categoryLabel: "Integrallar",
    title: "Trigonometrik kasr integrallar (Yarim burchak logarifmi)",
    latex: "\\int \\frac{dx}{\\sin x} = \\ln\\left|\\tan\\frac{x}{2}\\right| + C, \\qquad \\int \\frac{dx}{\\cos x} = \\ln\\left|\\tan\\left(\\frac{x}{2} + \\frac{\\pi}{4}\\right)\\right| + C",
    note: "Universal trigonometrik almashtirish orqali oson isbotlanadi",
    keywords: "trigonometrik kasr 1 sin x 1 cos x logarifm tan x 2 universal"
  },
  {
    id: "int-14",
    category: "integrallar",
    categoryLabel: "Integrallar",
    title: "Kvadrat uchhadli ratsional kasr integrali",
    latex: "\\int \\frac{dx}{x^2 + px + q} = \\begin{cases} \\frac{2}{\\sqrt{4q-p^2}}\\arctan\\frac{2x+p}{\\sqrt{4q-p^2}} + C, & p^2 - 4q < 0 \\\\ \\frac{1}{\\sqrt{p^2-4q}}\\ln\\left|\\frac{2x+p-\\sqrt{p^2-4q}}{2x+p+\\sqrt{p^2-4q}}\\right| + C, & p^2 - 4q > 0 \\end{cases}",
    note: "To'la kvadrat ajratish orqali arktangens yoki yuqori logarifmga keltiriladi",
    keywords: "kvadrat uchhad tola kvadrat integral arktangens yuqori logarifm kanonik"
  },
  {
    id: "int-15",
    category: "integrallar",
    categoryLabel: "Integrallar",
    title: "Trigonometrik ko'paytmalarni integrallash formulasi",
    latex: "\\int \\sin(ax)\\cos(bx)\\,dx = -\\frac{\\cos((a+b)x)}{2(a+b)} - \\frac{\\cos((a-b)x)}{2(a-b)} + C \\quad (a^2 \\neq b^2)",
    note: "Oldin trigonometrik ko'paytma yig'indiga aylantiriladi, so'ngra hadma-had integrallanadi",
    keywords: "trigonometrik kopaytma sin ax cos bx integral yigindi daraja"
  },
  {
    id: "int-16",
    category: "integrallar",
    categoryLabel: "Integrallar",
    title: "Parametrik chiziqning yoyi uzunligi va aylanma sirt yuzi",
    latex: "L = \\int_{t_1}^{t_2} \\sqrt{(x'_t)^2 + (y'_t)^2}\\,dt, \\qquad S_x = 2\\pi \\int_{t_1}^{t_2} y(t)\\sqrt{(x'_t)^2 + (y'_t)^2}\\,dt",
    note: "Sikloida, astroida va kardioida yoyi uzunligi va sirt yuzlarini topishda ishlatiladi",
    keywords: "parametrik yoy uzunligi aylanma sirt yuzi integral x t y t hajm"
  },
  {
    id: "diff-7",
    category: "diff",
    categoryLabel: "Differensial tenglamalar",
    title: "2-tartibli o'zgarmas koeffitsiyentli CBJDT umumiy yechimi (3 ta holat)",
    latex: "y'' + py' + qy = 0 \\implies k^2 + pk + q = 0: \\quad y = \\begin{cases} C_1 e^{k_1 x} + C_2 e^{k_2 x}, & D > 0 \\\\ e^{k x}(C_1 + C_2 x), & D = 0 \\\\ e^{\\alpha x}(C_1 \\cos\\beta x + C_2 \\sin\\beta x), & k = \\alpha \\pm i\\beta \\end{cases}",
    note: "Xarakteristik tenglama diskriminantiga qarab yechimning 3 xil fundamental ko'rinishi",
    keywords: "chiziqli bir jinsli 2-tartibli differensial tenglama xarakteristik ildiz kompleks kosinus sinus"
  },
  {
    id: "diff-8",
    category: "diff",
    categoryLabel: "Differensial tenglamalar",
    title: "Aniqmas koeffitsiyentlar usuli (Maxsus o'ng tomon: Rezonans qoidasi)",
    latex: "y'' + py' + qy = e^{\\alpha x} P_m(x) \\implies y_x = x^r e^{\\alpha x} Q_m(x)",
    note: "r — alpha sonining xarakteristik tenglama ildizi bo'lish karraligi (r = 0, 1 yoki 2)",
    keywords: "aniqmas koeffitsiyentlar xususiy yechim rezonans maxsus ong tomon rezonansli"
  },
  {
    id: "diff-9",
    category: "diff",
    categoryLabel: "Differensial tenglamalar",
    title: "Eyler differensial tenglamasi",
    latex: "x^2 y'' + a x y' + b y = 0 \\implies x = e^t \\quad (k(k-1) + ak + b = 0)",
    note: "x = e^t almashtirish bilan o'zgarmas koeffitsiyentli tenglamaga keltiriladi",
    keywords: "eyler tenglamasi x2 y x y almashtirish ozgarmas koeffitsiyent xarakteristik"
  },
  {
    id: "diff-10",
    category: "diff",
    categoryLabel: "Differensial tenglamalar",
    title: "To'liq differensialli tenglama va Integrallovchi ko'paytuvchi",
    latex: "P(x, y)dx + Q(x, y)dy = 0, \\quad \\frac{\\partial P}{\\partial y} = \\frac{\\partial Q}{\\partial x} \\implies U(x, y) = \\int P dx + \\int \\left[ Q - \\frac{\\partial}{\\partial y}\\int P dx \\right] dy = C",
    note: "Shart bajarilmasa, faqat x ga yoki faqat y ga bog'liq integrallovchi ko'paytuvchi mu qidiriladi",
    keywords: "toliq differensialli tenglama eyler sharti integrallovchi kopaytuvchi potensial"
  },
  {
    id: "diff-11",
    category: "diff",
    categoryLabel: "Differensial tenglamalar",
    title: "Tartibi pasayadigan differensial tenglamalar (2 ta asosiy tur)",
    latex: "1) \\; F(x, y', y'') = 0 \\implies y' = p(x); \\qquad 2) \\; F(y, y', y'') = 0 \\implies y' = p(y), \\, y'' = p\\frac{dp}{dy}",
    note: "1-turda y qatnashmaydi, 2-turda x oshkor qatnashmaydi",
    keywords: "tartib pasaytirish differensial tenglama p x p y hosila ikkinchi tartibli"
  },
  {
    id: "diff-12",
    category: "diff",
    categoryLabel: "Differensial tenglamalar",
    title: "Koshi masalasini yechish: Pikard ketma-ket yaqinlashish usuli",
    latex: "y_0(x) = y_0, \\qquad y_{n+1}(x) = y_0 + \\int_{x_0}^x f(t, y_n(t))\\,dt",
    note: "Tenglamaning yagona yechimi mavjudligini isbotlovchi va taqribiy hisoblovchi ketma-ketlik",
    keywords: "pikard yaqinlashish koshimasalasi integral ketma ketlik yechim mavjudlik"
  },
  {
    id: "qat-9",
    category: "qatorlar",
    categoryLabel: "Qatorlar & Fure",
    title: "Koshi integral alomati (Qatorlar yaqinlashishi)",
    latex: "\\sum_{n=1}^\\infty a_n \\quad \\text{va} \\quad \\int_1^\\infty f(x)\\,dx \\quad \\text{bir xil yaqinlashadi} \\quad (a_n = f(n) \\downarrow)",
    note: "f(x) uzluksiz, musbat va kamayuvchi funksiya bo'lishi shart",
    keywords: "koshi integral alomati xosmas integral yaqinlashish qator monoton"
  },
  {
    id: "qat-10",
    category: "qatorlar",
    categoryLabel: "Qatorlar & Fure",
    title: "Leybnits qatori qoldiq hadini baholash",
    latex: "|R_n| = \\left| \\sum_{k=n+1}^\\infty (-1)^{k-1} a_k \\right| \\le a_{n+1}",
    note: "Ishorasi almashinuvchi qatorda xatolik birinchi tashlab yuborilgan had modulidan oshmaydi",
    keywords: "leybnits qoldiq had xatolik baholash ishorasi almashinuvchi yaqinlashuvchi"
  },
  {
    id: "qat-11",
    category: "qatorlar",
    categoryLabel: "Qatorlar & Fure",
    title: "Darajali qatorning yaqinlashish radiusi (Koshi-Adamar)",
    latex: "R = \\lim_{n \\to \\infty} \\left| \\frac{a_n}{a_{n+1}} \\right| = \\frac{1}{\\lim_{n \\to \\infty} \\sqrt[n]{|a_n|}} \\implies |x - x_0| < R",
    note: "Yaqinlashish oralig'i: (x_0 - R; x_0 + R). Chegaraviy nuqtalarda qator alohida tekshiriladi",
    keywords: "yaqinlashish radiusi koshi adamar darajali qator dalamber radius oraliq"
  },
  {
    id: "qat-12",
    category: "qatorlar",
    categoryLabel: "Qatorlar & Fure",
    title: "Asosiy funksiyalarning Makloren qatorlari (Arktangens va Giperbolik)",
    latex: "\\arctan x = \\sum_{n=0}^\\infty (-1)^n \\frac{x^{2n+1}}{2n+1}, \\quad \\operatorname{sh} x = \\sum_{n=0}^\\infty \\frac{x^{2n+1}}{(2n+1)!}, \\quad \\operatorname{ch} x = \\sum_{n=0}^\\infty \\frac{x^{2n}}{(2n)!}",
    note: "Arktangens |x| <= 1 da yaqinlashadi; sh(x) va ch(x) barcha x larda yaqinlashadi",
    keywords: "makloren arktangens giperbolik qator teylor yoyilma jadval"
  },
  {
    id: "qat-13",
    category: "qatorlar",
    categoryLabel: "Qatorlar & Fure",
    title: "Ixtiyoriy 2l davrli funksiyaning Fure qatori",
    latex: "f(x) = \\frac{a_0}{2} + \\sum_{n=1}^\\infty \\left( a_n \\cos\\frac{n\\pi x}{l} + b_n \\sin\\frac{n\\pi x}{l} \\right), \\quad a_n = \\frac{1}{l}\\int_{-l}^l f(x)\\cos\\frac{n\\pi x}{l}dx",
    note: "[-l; l] oraliqda berilgan ixtiyoriy 2l davrli funksiyani garmonikalarga yoyish",
    keywords: "fure qatori 2l davr umumiy oraliq fourier koeffitsiyent garmonika"
  },
  {
    id: "qat-14",
    category: "qatorlar",
    categoryLabel: "Qatorlar & Fure",
    title: "Bessel tengsizligi va Parseval ayniyati",
    latex: "\\frac{a_0^2}{2} + \\sum_{n=1}^\\infty (a_n^2 + b_n^2) = \\frac{1}{l}\\int_{-l}^l f^2(x)\\,dx",
    note: "Garmonikalarning energiyalari yig'indisi funksiya to'liq energiyasiga teng (yopiqlik sharti)",
    keywords: "parseval ayniyati bessel tengsizligi fure energiya yopiqlik tola sistema"
  },
  {
    id: "komp-8",
    category: "kompleks",
    categoryLabel: "Kompleks & TFKP",
    title: "Kompleks sonning to'liq logarifmi",
    latex: "\\operatorname{Ln} z = \\ln|z| + i(\\arg z + 2k\\pi), \\quad \\ln z = \\ln|z| + i\\arg z \\quad (k \\in \\mathbb{Z})",
    note: "Ln z ko'p qiymatli funksiyadir; ln z — uning bosh qiymati (-pi < arg z <= pi)",
    keywords: "kompleks logarifm ln z bosh qiymat ko'p qiymatli tfkp"
  },
  {
    id: "komp-9",
    category: "kompleks",
    categoryLabel: "Kompleks & TFKP",
    title: "Kompleks darajali funksiya: z^w ta'rifi",
    latex: "z^w = e^{w \\operatorname{Ln} z} = e^{w(\\ln|z| + i\\operatorname{Arg} z)}",
    note: "Masalan, i^i = e^{i * Ln(i)} = e^{i(i*pi/2 + 2k*pi*i)} = e^{-pi/2 - 2k*pi} — sof haqiqiy son!",
    keywords: "kompleks daraja z w i darajasida i haqiqiy daraja eyler"
  },
  {
    id: "komp-10",
    category: "kompleks",
    categoryLabel: "Kompleks & TFKP",
    title: "Koshi-Gursa integrallash teoremasi",
    latex: "\\oint_{\\Gamma} f(z)\\,dz = 0 \\quad (f(z) \\text{ bir bog'lamli sohada analitik})",
    note: "f(z) bir bog'lamli sohada analitik bo'lsa, har qanday yopiq kontur bo'yicha integral 0 ga teng",
    keywords: "koshi gursa teoremasi analitik funksiya yopiq kontur integral tfkp"
  },
  {
    id: "komp-11",
    category: "kompleks",
    categoryLabel: "Kompleks & TFKP",
    title: "Oddiy qutbda qoldiq (Vychet) hisoblash formulasi",
    latex: "\\operatorname{Res}(f, z_0) = \\lim_{z \\to z_0} [(z - z_0) f(z)] = \\frac{\\varphi(z_0)}{\\psi'(z_0)} \\quad \\left( f(z) = \\frac{\\varphi(z)}{\\psi(z)} \\right)",
    note: "psi(z_0) = 0 va psi'(z_0) != 0 bo'lganda eng tezkor hisoblash formulasi",
    keywords: "qoldiq vychet oddiy qutb hosila res f z0 qutb nuqta"
  },
  {
    id: "komp-12",
    category: "kompleks",
    categoryLabel: "Kompleks & TFKP",
    title: "m-karrali qutbda qoldiq hisoblash qoidasi",
    latex: "\\operatorname{Res}(f, z_0) = \\frac{1}{(m-1)!} \\lim_{z \\to z_0} \\frac{d^{m-1}}{dz^{m-1}} \\left[ (z - z_0)^m f(z) \\right]",
    note: "m — qutbning karralik darajasi",
    keywords: "karrali qutb qoldiq vychet m karrali hosila limit tfkp"
  },
  {
    id: "komp-13",
    category: "kompleks",
    categoryLabel: "Kompleks & TFKP",
    title: "Logarifmik qoldiq va Argument prinsipi",
    latex: "\\frac{1}{2\\pi i} \\oint_\\Gamma \\frac{f'(z)}{f(z)}\\,dz = N - P",
    note: "N — kontur ichidagi nollar soni, P — qutblar soni (karraliklari bilan)",
    keywords: "argument prinsipi logarifmik qoldiq nollar qutblar kontur rushe"
  },
  {
    id: "kop-6",
    category: "kop-ozgaruvchili",
    categoryLabel: "Ko'p o'zgaruvchili & Maydon",
    title: "Yo'nalish bo'yicha hosila va Gradient bog'liqligi",
    latex: "\\frac{\\partial u}{\\partial \\vec{l}} = \\operatorname{grad} u \\cdot \\vec{l}_0 = \\frac{\\partial u}{\\partial x}\\cos\\alpha + \\frac{\\partial u}{\\partial y}\\cos\\beta + \\frac{\\partial u}{\\partial z}\\cos\\gamma",
    note: "Yo'nalish bo'yicha hosila gradient yo'nalishida eng katta qiymatga erishadi: max = |grad u|",
    keywords: "yonalish boyicha hosila gradient skalyar kopaytma birlik vektor burchak"
  },
  {
    id: "kop-7",
    category: "kop-ozgaruvchili",
    categoryLabel: "Ko'p o'zgaruvchili & Maydon",
    title: "Gessian matritsasi va Ko'p o'zgaruvchili ekstremum mezoni",
    latex: "H = \\begin{pmatrix} f''_{xx} & f''_{xy} \\\\ f''_{yx} & f''_{yy} \\end{pmatrix}, \\quad \\Delta = \\det H: \\quad \\begin{cases} \\Delta > 0, f''_{xx} > 0 \\implies \\min \\\\ \\Delta > 0, f''_{xx} < 0 \\implies \\max \\\\ \\Delta < 0 \\implies \\text{egar nuqta} \\end{cases}",
    note: "Delta = 0 bo'lsa yuqori tartibli tekshirish zarur",
    keywords: "gessian matritsasi determinant ekstremum minimum maksimum egar nuqta xususiy hosila"
  },
  {
    id: "kop-8",
    category: "kop-ozgaruvchili",
    categoryLabel: "Ko'p o'zgaruvchili & Maydon",
    title: "Sirtga o'tkazilgan normal to'g'ri chiziq va Urinma tekislik",
    latex: "\\frac{x - x_0}{F'_x} = \\frac{y - y_0}{F'_y} = \\frac{z - z_0}{F'_z} \\quad (\\text{Normal}), \\qquad F'_x(x-x_0) + F'_y(y-y_0) + F'_z(z-z_0) = 0 \\quad (\\text{Urinma})",
    note: "F(x, y, z) = 0 sirt uchun M_0(x_0, y_0, z_0) nuqtadagi tenglamalar",
    keywords: "urinma tekislik normal togri chiziq sirt tenglamasi xususiy hosila fazo"
  },
  {
    id: "kop-9",
    category: "kop-ozgaruvchili",
    categoryLabel: "Ko'p o'zgaruvchili & Maydon",
    title: "Ikki karrali integralda soha yuzi va massa markazi",
    latex: "S = \\iint_D dx\\,dy, \\quad x_c = \\frac{1}{M}\\iint_D x \\rho(x, y)\\,dx\\,dy, \\quad y_c = \\frac{1}{M}\\iint_D y \\rho(x, y)\\,dx\\,dy",
    note: "M = iint rho dx dy — plastinkaning to'la massasi",
    keywords: "ikki karrali integral massa markazi yuza ogirlik markazi zichlik statik moment"
  },
  {
    id: "kop-10",
    category: "kop-ozgaruvchili",
    categoryLabel: "Ko'p o'zgaruvchili & Maydon",
    title: "Gauss-Ostrogradskiy formulasining koordinatali ko'rinishi",
    latex: "\\iint_S P\\,dy\\,dz + Q\\,dz\\,dx + R\\,dx\\,dy = \\iiint_V \\left( \\frac{\\partial P}{\\partial x} + \\frac{\\partial Q}{\\partial y} + \\frac{\\partial R}{\\partial z} \\right) dx\\,dy\\,dz",
    note: "Yopiq sirt bo'yicha 2-tur sirt integralini 3-karrali integralga aylantirish",
    keywords: "gauss ostrogradskiy divergensiya sirt integrali uch karrali integral oqim"
  },
  {
    id: "eht-9",
    category: "ehtimollik",
    categoryLabel: "Ehtimollik & Stat",
    title: "Geometrik ehtimollik formulasi",
    latex: "P(A) = \\frac{\\operatorname{mes}(g)}{\\operatorname{mes}(G)} = \\frac{S_g}{S_G} \\quad (\\text{yoki } \\frac{L_g}{L_G}, \\frac{V_g}{V_G})",
    note: "Sinov natijalari cheksiz ko'p va uzluksiz sohada teng ehtimolli bo'lganda qo'llaniladi (uchrashuv masalasi)",
    keywords: "geometrik ehtimollik yuza uzunlik hajm o'lchov uchrashuv masalasi"
  },
  {
    id: "eht-10",
    category: "ehtimollik",
    categoryLabel: "Ehtimollik & Stat",
    title: "Gipergeometrik taqsimot formulasi",
    latex: "P(X = k) = \\frac{C_K^k \\cdot C_{N-K}^{n-k}}{C_N^n}",
    note: "N ta jami buyumdan K tasi standart bo'lsa, tavakkaliga olingan n ta buyum ichida aynan k tasi standart bo'lishi",
    keywords: "gipergeometrik taqsimot kombinatorika qaytarilmas tanlanma standart buyum"
  },
  {
    id: "eht-11",
    category: "ehtimollik",
    categoryLabel: "Ehtimollik & Stat",
    title: "Puasson taqsimotining sonli xarakteristikalari",
    latex: "M(X) = \\lambda, \\qquad D(X) = \\lambda, \\qquad \\sigma(X) = \\sqrt{\\lambda}",
    note: "Puasson taqsimotining eng ajoyib xossasi: matematik kutilmasi dispersiyasiga teng!",
    keywords: "puasson sonli xarakteristikalar kutilma dispersiya lambda tenglik xossa"
  },
  {
    id: "eht-12",
    category: "ehtimollik",
    categoryLabel: "Ehtimollik & Stat",
    title: "Ko'rsatkichli (Eksponensial) taqsimot zichligi va xarakteristikalari",
    latex: "f(x) = \\begin{cases} \\lambda e^{-\\lambda x}, & x \\ge 0 \\\\ 0, & x < 0 \\end{cases} \\implies M(X) = \\frac{1}{\\lambda}, \\quad D(X) = \\frac{1}{\\lambda^2}",
    note: "Xizmat ko'rsatish tizimlari va ehtiyot qismlarning ishonchliligi (xizmat muddati) modeli",
    keywords: "korsatkichli eksponensial taqsimot zichlik kutilma dispersiya xizmat muddati ehtimol"
  },
  {
    id: "eht-13",
    category: "ehtimollik",
    categoryLabel: "Ehtimollik & Stat",
    title: "Chebishev tengsizligi (Katta sonlar qonuni)",
    latex: "P(|X - M(X)| \\ge \\varepsilon) \\le \\frac{D(X)}{\\varepsilon^2}, \\qquad P(|X - M(X)| < \\varepsilon) \\ge 1 - \\frac{D(X)}{\\varepsilon^2}",
    note: "Tasodifiy miqdorning o'z o'rtacha qiymatidan epsilon dan ko'proq og'ishi ehtimolini yuqoridan baholash",
    keywords: "chebishev tengsizligi dispersiya kutilma katta sonlar qonuni baholash oraliq"
  },
  {
    id: "eht-14",
    category: "ehtimollik",
    categoryLabel: "Ehtimollik & Stat",
    title: "Styudent t-taqsimoti bo'yicha Bosh o'rtacha uchun ishonchlilik oralig'i",
    latex: "\\bar{x} - t_{\\gamma} \\frac{s}{\\sqrt{n}} \\le \\mu \\le \\bar{x} + t_{\\gamma} \\frac{s}{\\sqrt{n}}",
    note: "Kichik tanlanmalarda (n < 30) sigma noma'lum bo'lganda t_gamma qiymati erkinlik darajasi k = n - 1 bo'yicha olinadi",
    keywords: "styudent t-taqsimot ishonchlilik oraligi bosh ortacha standart xatolik statistik baholash"
  },
  {
    id: "eht-15",
    category: "ehtimollik",
    categoryLabel: "Ehtimollik & Stat",
    title: "Pirson xi-kvadrat moslik mezoni",
    latex: "\\chi^2 = \\sum_{i=1}^k \\frac{(n_i - n p_i)^2}{n p_i} = \\sum_{i=1}^k \\frac{(O_i - E_i)^2}{E_i}",
    note: "Kuzatilgan chastota (O_i) bilan nazariy kutilgan chastota (E_i) o'rtasidagi farqni gipoteza bo'yicha tekshirish",
    keywords: "pirson xi kvadrat moslik mezoni gipoteza nazariy chastota taqsimot tekshirish mezoni"
  },
  {
    id: "eht-16",
    category: "ehtimollik",
    categoryLabel: "Ehtimollik & Stat",
    title: "Spirmenning ranqli korrelyatsiya koeffitsiyenti",
    latex: "\\rho = 1 - \\frac{6 \\sum_{i=1}^n d_i^2}{n(n^2 - 1)} \\quad (d_i = R_{x_i} - R_{y_i})",
    note: "Miqdoriy emas, balki sifat belgilari va ballar (ranjirlash) o'rtasidagi statistik bog'liqlik o'lchovi",
    keywords: "spirmen ranqli korrelyatsiya koeffitsiyenti rang orin statistika noaniq bogliqlik"
  },
  {
    id: "trig-6",
    category: "trigonometriya",
    categoryLabel: "Trigonometriya",
    title: "Qo'shish formulalari (Sinus va Kosinus)",
    latex: "\\sin(x \\pm y) = \\sin x \\cos y \\pm \\cos x \\sin y, \\qquad \\cos(x \\pm y) = \\cos x \\cos y \\mp \\sin x \\sin y",
    note: "Kosinus formulalarida oradagi ishora teskarisiga o'zgaradi (+ bo'lsa -, - bo'lsa +)",
    keywords: "qoshing formulalari sinus kosinus yigindi burchak ayirma trigonometriya"
  },
  {
    id: "trig-7",
    category: "trigonometriya",
    categoryLabel: "Trigonometriya",
    title: "Tangens va Kotangens qo'shish formulalari",
    latex: "\\tan(x \\pm y) = \\frac{\\tan x \\pm \\tan y}{1 \\mp \\tan x \\tan y}, \\qquad \\cot(x \\pm y) = \\frac{\\cot x \\cot y \\mp 1}{\\cot y \\pm \\cot x}",
    note: "Ikki to'g'ri chiziq orasidagi burchak tangensini topishda asosiy formula",
    keywords: "tangens kotangens qoshish burchak tan x y burchak tangensi"
  },
  {
    id: "trig-8",
    category: "trigonometriya",
    categoryLabel: "Trigonometriya",
    title: "Ko'paytmani yig'indiga aylantirish formulalari",
    latex: "\\sin x \\cos y = \\frac{\\sin(x+y)+\\sin(x-y)}{2}, \\quad \\cos x \\cos y = \\frac{\\cos(x+y)+\\cos(x-y)}{2}, \\quad \\sin x \\sin y = \\frac{\\cos(x-y)-\\cos(x+y)}{2}",
    note: "Trigonometrik funksiyalar ko'paytmasini integrallashning yagona to'g'ri yo'li",
    keywords: "kopaytmani yigindiga aylantirish integral sin cos cos cos sin sin daraja"
  },
  {
    id: "trig-9",
    category: "trigonometriya",
    categoryLabel: "Trigonometriya",
    title: "Yordamchi burchak kiritish usuli",
    latex: "a\\sin x + b\\cos x = \\sqrt{a^2 + b^2} \\sin(x + \\varphi), \\quad \\cos\\varphi = \\frac{a}{\\sqrt{a^2+b^2}}, \\; \\sin\\varphi = \\frac{b}{\\sqrt{a^2+b^2}}",
    note: "Chiziqli garmonik tebranishlar yig'indisini bitta sinusoidal to'lqinga keltirish",
    keywords: "yordamchi burchak a sin x b cos x amplituda faza garmonik tebranish"
  },
  {
    id: "trig-10",
    category: "trigonometriya",
    categoryLabel: "Trigonometriya",
    title: "Uch karrali burchak formulalari",
    latex: "\\sin(3x) = 3\\sin x - 4\\sin^3 x, \\qquad \\cos(3x) = 4\\cos^3 x - 3\\cos x",
    note: "Kubik trigonometrik darajalarni integrallash va almashtirishlarda zarur bo'ladi",
    keywords: "uch karrali burchak sin 3x cos 3x kubik trigonometriya daraja"
  },
  {
    id: "trig-11",
    category: "trigonometriya",
    categoryLabel: "Trigonometriya",
    title: "Giperbolik funksiyalar ta'rifi va Pifagor ayniyati",
    latex: "\\operatorname{ch}^2 x - \\operatorname{sh}^2 x = 1, \\quad \\operatorname{sh} x = \\frac{e^x - e^{-x}}{2}, \\quad \\operatorname{ch} x = \\frac{e^x + e^{-x}}{2}",
    note: "Oddiy aylanaviy trigonometriyadagi (+) o'rniga giperbolik ayniyatda (-) ishora bo'ladi",
    keywords: "giperbolik ayniyat sh ch th pifagor eyler korsatkichli eksponensial"
  }
];
