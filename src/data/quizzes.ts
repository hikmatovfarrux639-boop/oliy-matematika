export interface QuizQuestion {
  id: string;
  moduleId: string;
  moduleName: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  difficulty: 'Oson' | "O'rta" | 'Murakkab';
}

export const QUIZ_DATABASE: QuizQuestion[] = [
  // ==========================================
  // 1-MODUL: MAKTAB KURSI VA ELEMENTAR ALGEBRA
  // ==========================================
  {
    id: 'm1-q1',
    moduleId: 'maktab-kursi',
    moduleName: '1-modul: Maktab kursini takrorlash',
    question: '$x^2 - 7x + 12 = 0$ kvadrat tenglamaning ildizlari yig\'indisi va ko\'paytmasini Viyet teoremasi bo\'yicha toping:',
    options: [
      '$x_1 + x_2 = -7, \\; x_1 x_2 = 12$',
      '$x_1 + x_2 = 7, \\; x_1 x_2 = 12$',
      '$x_1 + x_2 = 12, \\; x_1 x_2 = 7$',
      '$x_1 + x_2 = -12, \\; x_1 x_2 = -7$'
    ],
    correctIndex: 1,
    explanation: 'Keltirilgan kvadrat tenglama $x^2 + px + q = 0$ da Viyet teoremasiga ko\'ra: $x_1 + x_2 = -p = -(-7) = 7$ va $x_1 x_2 = q = 12$. Ildizlarning o\'zi esa $x_1 = 3, x_2 = 4$.',
    difficulty: 'Oson'
  },
  {
    id: 'm1-q2',
    moduleId: 'maktab-kursi',
    moduleName: '1-modul: Maktab kursini takrorlash',
    question: 'Quyidagi trigonometrik ayniyatlardan qaysi biri to\'g\'ri?',
    options: [
      '$\\sin^2 \\alpha - \\cos^2 \\alpha = 1$',
      '$\\cos(2\\alpha) = \\cos^2 \\alpha - \\sin^2 \\alpha$',
      '$\\sin(2\\alpha) = \\sin \\alpha \\cos \\alpha$',
      '$1 + \\tan^2 \\alpha = \\frac{1}{\\sin^2 \\alpha}$'
    ],
    correctIndex: 1,
    explanation: 'Ikkilangan burchak kosinusi formulasi: $\\cos(2\\alpha) = \\cos^2 \\alpha - \\sin^2 \\alpha = 2\\cos^2 \\alpha - 1 = 1 - 2\\sin^2 \\alpha$. Sinus uchun esa $\\sin(2\\alpha) = 2\\sin \\alpha \\cos \\alpha$ bo\'lishi kerak edi.',
    difficulty: 'Oson'
  },
  {
    id: 'm1-q3',
    moduleId: 'maktab-kursi',
    moduleName: '1-modul: Maktab kursini takrorlash',
    question: '$\\log_2 32 + \\log_3 \\frac{1}{27}$ ifodaning qiymatini hisoblang:',
    options: [
      '$2$',
      '$8$',
      '$-2$',
      '$5$'
    ],
    correctIndex: 0,
    explanation: 'Logarifm ta\'rifiga ko\'ra: $2^5 = 32 \\implies \\log_2 32 = 5$. Shuningdek, $3^{-3} = \\frac{1}{27} \\implies \\log_3 \\frac{1}{27} = -3$. Yig\'indi: $5 + (-3) = 2$.',
    difficulty: 'Oson'
  },

  // ==========================================
  // 2-MODUL: CHIZIQLI ALGEBRA
  // ==========================================
  {
    id: 'm2-q1',
    moduleId: 'chiziqli-algebra',
    moduleName: '2-modul: Chiziqli algebra',
    question: '$\\det A = \\begin{vmatrix} 3 & -2 \\\\ 4 & 5 \\end{vmatrix}$ 2-tartibli determinantning qiymatini hisoblang:',
    options: [
      '$7$',
      '$23$',
      '$-23$',
      '$15$'
    ],
    correctIndex: 1,
    explanation: '2-tartibli determinant formulasi bo\'yicha: $\\det A = a_{11} a_{22} - a_{12} a_{21} = 3 \\cdot 5 - (-2) \\cdot 4 = 15 - (-8) = 15 + 8 = 23$.',
    difficulty: 'Oson'
  },
  {
    id: 'm2-q2',
    moduleId: 'chiziqli-algebra',
    moduleName: '2-modul: Chiziqli algebra',
    question: 'Kvadrat matritsa $A$ teskarilanuvchan (ya\'ni $A^{-1}$ mavjud) bo\'lishining zaruriy va yetarli sharti nima?',
    options: [
      'Matritsaning barcha elementlari musbat bo\'lishi',
      '$\\det A = 0$ bo\'lishi',
      '$\\det A \\neq 0$ bo\'lishi (maxsusmas matritsa)',
      'Matritsaning o\'lchami $3 \\times 3$ bo\'lishi'
    ],
    correctIndex: 2,
    explanation: 'Kvadrat matritsaning teskari matritsasi $A^{-1} = \\frac{1}{\\det A} A^*$ formula orqali topiladi. Bu formula faqat $\\det A \\neq 0$ bo\'lgandagina ma\'noga ega. Agar $\\det A = 0$ bo\'lsa, u maxsus (xos) matritsa bo\'lib, teskarisi mavjud emas.',
    difficulty: "O'rta"
  },
  {
    id: 'm2-q3',
    moduleId: 'chiziqli-algebra',
    moduleName: '2-modul: Chiziqli algebra',
    question: 'Kramer qoidasi bo\'yicha $\\begin{cases} x + y = 5 \\\\ 2x + y = 6 \\end{cases}$ sistemaning asosiy determinanti $\\Delta$ nimaga teng?',
    options: [
      '$\\Delta = 1$',
      '$\\Delta = -1$',
      '$\\Delta = 3$',
      '$\\Delta = 0$'
    ],
    correctIndex: 1,
    explanation: 'Noma\'lumlar oldidagi koeffitsiyentlar matritsasi: $\\Delta = \\begin{vmatrix} 1 & 1 \\\\ 2 & 1 \\end{vmatrix} = 1 \\cdot 1 - 1 \\cdot 2 = 1 - 2 = -1$. Noldan farqli bo\'lgani uchun sistema yagona yechimga ega ($x=1, y=4$).',
    difficulty: 'Oson'
  },
  {
    id: 'm2-q4',
    moduleId: 'chiziqli-algebra',
    moduleName: '2-modul: Chiziqli algebra',
    question: '$A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ matritsaning izi (trace - $\\text{tr}(A)$) nimaga teng?',
    options: [
      '$-2$',
      '$5$',
      '$10$',
      '$7$'
    ],
    correctIndex: 1,
    explanation: 'Matritsaning izi uning bosh diagonalidagi elementlar yig\'indisiga teng: $\\text{tr}(A) = a_{11} + a_{22} = 1 + 4 = 5$.',
    difficulty: 'Oson'
  },

  // ==========================================
  // 3-MODUL: VEKTORLAR VA ANALITIK GEOMETRIYA
  // ==========================================
  {
    id: 'm3-q1',
    moduleId: 'vektorlar-geometriya',
    moduleName: '3-modul: Vektorlar va analitik geometriya',
    question: 'Ikki vektor $\\vec{a} = (2, -1, 3)$ va $\\vec{b} = (1, 4, 2)$ ning skalyar ko\'paytmasini hisoblang:',
    options: [
      '$4$',
      '$-4$',
      '$12$',
      '$0$'
    ],
    correctIndex: 0,
    explanation: 'Koordinatalarda skalyar ko\'paytma: $\\vec{a} \\cdot \\vec{b} = x_1 x_2 + y_1 y_2 + z_1 z_2 = 2 \\cdot 1 + (-1) \\cdot 4 + 3 \\cdot 2 = 2 - 4 + 6 = 4$.',
    difficulty: 'Oson'
  },
  {
    id: 'm3-q2',
    moduleId: 'vektorlar-geometriya',
    moduleName: '3-modul: Vektorlar va analitik geometriya',
    question: 'Nolga teng bo\'lmagan ikki vektor $\\vec{a}$ va $\\vec{b}$ ning perpendikulyar (ortogonal) bo\'lish sharti qaysi?',
    options: [
      '$\\vec{a} \\times \\vec{b} = \\vec{0}$',
      '$\\vec{a} \\cdot \\vec{b} = 0$',
      '$|\\vec{a}| = |\\vec{b}|$',
      '$\\vec{a} + \\vec{b} = \\vec{0}$'
    ],
    correctIndex: 1,
    explanation: 'Skalyar ko\'paytma $\\vec{a} \\cdot \\vec{b} = |\\vec{a}| |\\vec{b}| \\cos\\varphi$. Vektorlar o\'zaro perpendikulyar bo\'lsa, $\\varphi = 90^\\circ$ va $\\cos 90^\\circ = 0$, demak skalyar ko\'paytma 0 ga teng bo\'ladi.',
    difficulty: 'Oson'
  },
  {
    id: 'm3-q3',
    moduleId: 'vektorlar-geometriya',
    moduleName: '3-modul: Vektorlar va analitik geometriya',
    question: '$2x - 3y + 6z - 14 = 0$ tekislikning normal vektori koordinatalari qaysi javobda to\'g\'ri ko\'rsatilgan?',
    options: [
      '$\\vec{n} = (2, -3, 6)$',
      '$\\vec{n} = (2, 3, 6)$',
      '$\\vec{n} = (-3, 6, -14)$',
      '$\\vec{n} = (2, -3, -14)$'
    ],
    correctIndex: 0,
    explanation: 'Umumiy ko\'rinishdagi $Ax + By + Cz + D = 0$ tekislikning normal vektori koordinatalari o\'zgaruvchilar oldidagi koeffitsiyentlardan tashkil topadi: $\\vec{n} = (A, B, C) = (2, -3, 6)$.',
    difficulty: 'Oson'
  },

  // ==========================================
  // 4-MODUL: KOMPLEKS SONLAR
  // ==========================================
  {
    id: 'm4-q1',
    moduleId: 'kompleks-sonlar',
    moduleName: '4-modul: Kompleks sonlar',
    question: '$z = 3 - 4i$ kompleks sonining moduli $|z|$ nimaga teng?',
    options: [
      '$-1$',
      '$\\sqrt{7}$',
      '$5$',
      '$25$'
    ],
    correctIndex: 2,
    explanation: 'Kompleks son moduli: $|z| = \\sqrt{x^2 + y^2} = \\sqrt{3^2 + (-4)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$.',
    difficulty: 'Oson'
  },
  {
    id: 'm4-q2',
    moduleId: 'kompleks-sonlar',
    moduleName: '4-modul: Kompleks sonlar',
    question: '$i^{2026}$ ifodaning qiymati nimaga teng? (bu yerda $i^2 = -1$)',
    options: [
      '$i$',
      '$-i$',
      '$-1$',
      '$1$'
    ],
    correctIndex: 2,
    explanation: '$i$ ning darajalari har 4 qadamda takrorlanadi: $i^1 = i, i^2 = -1, i^3 = -i, i^4 = 1$. $2026$ ni 4 ga bo\'lsak, $2026 = 4 \\times 506 + 2$ (qoldiq 2). Demak, $i^{2026} = (i^4)^{506} \\cdot i^2 = 1^{506} \\cdot (-1) = -1$.',
    difficulty: "O'rta"
  },
  {
    id: 'm4-q3',
    moduleId: 'kompleks-sonlar',
    moduleName: '4-modul: Kompleks sonlar',
    question: 'Eyler formulasiga ko\'ra $e^{i \\pi}$ ifodaning qiymati nimaga teng?',
    options: [
      '$0$',
      '$1$',
      '$-1$',
      '$i$'
    ],
    correctIndex: 2,
    explanation: 'Eyler formulasi: $e^{i\\varphi} = \\cos\\varphi + i\\sin\\varphi$. $\\varphi = \\pi$ bo\'lganda $e^{i\\pi} = \\cos\\pi + i\\sin\\pi = -1 + 0 = -1$. (Mashhur Eyler ayniyati: $e^{i\\pi} + 1 = 0$).',
    difficulty: 'Oson'
  },

  // ==========================================
  // 5-MODUL: LIMITLAR
  // ==========================================
  {
    id: 'm5-q1',
    moduleId: 'limitlar',
    moduleName: '5-modul: Limitlar nazariyasi',
    question: 'Birinchi ajoyib limit formulasiga ko\'ra $\\lim_{x \\to 0} \\frac{\\sin(5x)}{x}$ nimaga teng?',
    options: [
      '$0$',
      '$1$',
      '$5$',
      '$\\infty$'
    ],
    correctIndex: 2,
    explanation: '$\\lim_{u \\to 0} \\frac{\\sin u}{u} = 1$ ekanidan foydalanamiz: $\\lim_{x \\to 0} \\frac{\\sin(5x)}{x} = \\lim_{x \\to 0} 5 \\cdot \\frac{\\sin(5x)}{5x} = 5 \\cdot 1 = 5$.',
    difficulty: 'Oson'
  },
  {
    id: 'm5-q2',
    moduleId: 'limitlar',
    moduleName: '5-modul: Limitlar nazariyasi',
    question: '$\\lim_{x \\to \\infty} \\left(1 + \\frac{3}{x}\\right)^x$ limitning qiymatini toping:',
    options: [
      '$1$',
      '$e$',
      '$e^3$',
      '$\\infty$'
    ],
    correctIndex: 2,
    explanation: 'Ikkinchi ajoyib limitning umumlashgan ko\'rinishi: $\\lim_{x \\to \\infty} \\left(1 + \\frac{k}{x}\\right)^x = e^k$. Bu yerda $k = 3$, demak javob $e^3$.',
    difficulty: "O'rta"
  },
  {
    id: 'm5-q3',
    moduleId: 'limitlar',
    moduleName: '5-modul: Limitlar nazariyasi',
    question: '$\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$ limitning qiymatini hisoblang:',
    options: [
      '$0$',
      '$2$',
      '$4$',
      'Mavjud emas'
    ],
    correctIndex: 2,
    explanation: 'Cheksiz kichik qisqartirish usuli: $x^2 - 4 = (x - 2)(x + 2)$. $x \\neq 2$ holatda qisqartirsak: $\\lim_{x \\to 2} (x + 2) = 2 + 2 = 4$.',
    difficulty: 'Oson'
  },

  // ==========================================
  // 6-MODUL: FUNKSIYALAR VA GRAFIKLAR
  // ==========================================
  {
    id: 'm6-q1',
    moduleId: 'funksiyalar-grafiklar',
    moduleName: '6-modul: Funksiyalar va grafiklar',
    question: '$f(x) = \\frac{\\sqrt{x - 3}}{x - 5}$ funksiyaning aniqlanish sohasini toping:',
    options: [
      '$[3; \\infty)$',
      '$[3; 5) \\cup (5; \\infty)$',
      '$(3; 5) \\cup (5; \\infty)$',
      '$(-\\infty; 5) \\cup (5; \\infty)$'
    ],
    correctIndex: 1,
    explanation: 'Kvadrat ildiz osti manfiy bo\'lmasligi kerak: $x - 3 \\ge 0 \\implies x \\ge 3$. Maxraj nolga teng bo\'lolmaydi: $x - 5 \\neq 0 \\implies x \\neq 5$. Kesishma: $[3; 5) \\cup (5; \\infty)$.',
    difficulty: "O'rta"
  },
  {
    id: 'm6-q2',
    moduleId: 'funksiyalar-grafiklar',
    moduleName: '6-modul: Funksiyalar va grafiklar',
    question: 'Quyidagi funksiyalardan qaysi biri juft funksiya hisoblanadi?',
    options: [
      '$f(x) = x^3 - x$',
      '$f(x) = \\sin x$',
      '$f(x) = x^4 + 3x^2 - 5$',
      '$f(x) = e^x$'
    ],
    correctIndex: 2,
    explanation: 'Juft funksiya sharti: $f(-x) = f(x)$. $f(-x) = (-x)^4 + 3(-x)^2 - 5 = x^4 + 3x^2 - 5 = f(x)$. Qolganlari: $x^3-x$ va $\\sin x$ toq, $e^x$ esa na juft na toq funksiyadir.',
    difficulty: 'Oson'
  },
  {
    id: 'm6-q3',
    moduleId: 'funksiyalar-grafiklar',
    moduleName: '6-modul: Funksiyalar va grafiklar',
    question: '$y = \\frac{2x + 1}{x - 3}$ kasr-ratsional funksiyaning vertikal va gorizontal asimptotalarini aniqlang:',
    options: [
      '$x = 3$ (vertikal), $y = 2$ (gorizontal)',
      '$x = 2$ (vertikal), $y = 3$ (gorizontal)',
      '$x = -3$ (vertikal), $y = 2$ (gorizontal)',
      '$x = 3$ (vertikal), $y = 0$ (gorizontal)'
    ],
    correctIndex: 0,
    explanation: 'Vertikal asimptota maxraj nolga teng bo\'ladigan nuqta: $x - 3 = 0 \\implies x = 3$. Gorizontal asimptota esa $\\lim_{x \\to \\pm\\infty} \\frac{2x+1}{x-3} = 2$, ya\'ni $y = 2$.',
    difficulty: "O'rta"
  },

  // ==========================================
  // 7-MODUL: HOSILA VA DIFFERENSIAL
  // ==========================================
  {
    id: 'm7-q1',
    moduleId: 'hosila',
    moduleName: '7-modul: Hosila va uning tatbiqlari',
    question: '$f(x) = x^3 - 4x^2 + 5x - 9$ funksiyaning hosilasi $f\'(x)$ nimaga teng?',
    options: [
      '$3x^2 - 8x + 5$',
      '$3x^2 - 4x + 5$',
      '$x^2 - 8x + 5$',
      '$3x^2 - 8x$'
    ],
    correctIndex: 0,
    explanation: 'Differensiallash qoidasi $(x^n)\' = n x^{n-1}$ bo\'yicha: $(x^3)\' = 3x^2$, $(-4x^2)\' = -8x$, $(5x)\' = 5$, $(-9)\' = 0$. Yig\'indi: $3x^2 - 8x + 5$.',
    difficulty: 'Oson'
  },
  {
    id: 'm7-q2',
    moduleId: 'hosila',
    moduleName: '7-modul: Hosila va uning tatbiqlari',
    question: '$f(x) = \\sin(x^2)$ murakkab funksiyaning hosilasini toping:',
    options: [
      '$\\cos(x^2)$',
      '$2x \\cos(x^2)$',
      '$-2x \\cos(x^2)$',
      '$2x \\sin(x^2)$'
    ],
    correctIndex: 1,
    explanation: 'Zanjir qoidasi (murakkab funksiya hosilasi): $[f(g(x))]\' = f\'(g(x)) \\cdot g\'(x)$. Bu yerda $f(u) = \\sin u, u = x^2$. U holda $(\\sin(x^2))\' = \\cos(x^2) \\cdot (x^2)\' = \\cos(x^2) \\cdot 2x = 2x \\cos(x^2)$.',
    difficulty: "O'rta"
  },
  {
    id: 'm7-q3',
    moduleId: 'hosila',
    moduleName: '7-modul: Hosila va uning tatbiqlari',
    question: 'Lopital qoidasidan foydalanib $\\lim_{x \\to 0} \\frac{e^{2x} - 1}{\\sin(3x)}$ limitni hisoblang:',
    options: [
      '$\\frac{2}{3}$',
      '$\\frac{3}{2}$',
      '$0$',
      '$1$'
    ],
    correctIndex: 0,
    explanation: '$x \\to 0$ da $\\left[\\frac{0}{0}\\right]$ aniqmaslik mavjud. Lopital qoidasiga ko\'ra surat va maxrajdan alohida hosila olamiz: $\\lim_{x \\to 0} \\frac{(e^{2x} - 1)\'}{(\\sin 3x)\'} = \\lim_{x \\to 0} \\frac{2e^{2x}}{3\\cos(3x)} = \\frac{2 \\cdot 1}{3 \\cdot 1} = \\frac{2}{3}$.',
    difficulty: "O'rta"
  },

  // ==========================================
  // 8-MODUL: INTEGRALLAR
  // ==========================================
  {
    id: 'm8-q1',
    moduleId: 'integrallar',
    moduleName: '8-modul: Integrallar',
    question: '$\\int (3x^2 + 2x - 5) \\, dx$ aniqmas integralni hisoblang:',
    options: [
      '$6x + 2 + C$',
      '$x^3 + x^2 - 5x + C$',
      '$\\frac{x^3}{3} + x^2 - 5x + C$',
      '$x^3 + 2x^2 - 5x + C$'
    ],
    correctIndex: 1,
    explanation: 'Asosiy integrallash formulasi $\\int x^n dx = \\frac{x^{n+1}}{n+1} + C$. Shuning uchun: $\\int 3x^2 dx = 3 \\cdot \\frac{x^3}{3} = x^3$, $\\int 2x dx = 2 \\cdot \\frac{x^2}{2} = x^2$, $\\int -5 dx = -5x$. Natija: $x^3 + x^2 - 5x + C$.',
    difficulty: 'Oson'
  },
  {
    id: 'm8-q2',
    moduleId: 'integrallar',
    moduleName: '8-modul: Integrallar',
    question: 'Nyuton-Leybnits formulasi yordamida $\\int_0^2 3x^2 \\, dx$ aniq integralni hisoblang:',
    options: [
      '$6$',
      '$8$',
      '$12$',
      '$24$'
    ],
    correctIndex: 1,
    explanation: 'Boshlang\'ich funksiya: $F(x) = \\int 3x^2 dx = x^3$. Nyuton-Leybnits formulasi: $\\int_a^b f(x) dx = F(b) - F(a) = 2^3 - 0^3 = 8 - 0 = 8$.',
    difficulty: 'Oson'
  },
  {
    id: 'm8-q3',
    moduleId: 'integrallar',
    moduleName: '8-modul: Integrallar',
    question: 'Bo\'laklab integrallash formulasi qaysi javobda to\'g\'ri ifodalangan?',
    options: [
      '$\\int u \\, dv = u v + \\int v \\, du$',
      '$\\int u \\, dv = u v - \\int v \\, du$',
      '$\\int u \\, dv = u\' v - u v\'$',
      '$\\int u \\, dv = \\frac{u}{v} + C$'
    ],
    correctIndex: 1,
    explanation: 'Ko\'paytma differensiali $d(uv) = u\\,dv + v\\,du$ formulasidan integrallash orqali hosil bo\'ladi: $\\int u\\,dv = uv - \\int v\\,du$.',
    difficulty: 'Oson'
  },

  // ==========================================
  // 9-MODUL: KO'P O'ZGARUVCHILI FUNKSIYALAR
  // ==========================================
  {
    id: 'm9-q1',
    moduleId: 'kop-ozgaruvchili-funksiyalar',
    moduleName: '9-modul: Ko\'p o\'zgaruvchili funksiyalar',
    question: '$z = x^3 y^2 - 5x^2 + 4y$ funksiyaning $x$ bo\'yicha xususiy hosilasi $\\frac{\\partial z}{\\partial x}$ nimaga teng?',
    options: [
      '$3x^2 y^2 - 10x$',
      '$2x^3 y + 4$',
      '$3x^2 - 10x$',
      '$3x^2 y^2 - 10x + 4$'
    ],
    correctIndex: 0,
    explanation: '$x$ bo\'yicha xususiy hosila olinayotganda $y$ o\'zgarmas (konstanta) deb hisoblanadi: $\\frac{\\partial}{\\partial x}(x^3 y^2) = 3x^2 y^2$, $\\frac{\\partial}{\\partial x}(-5x^2) = -10x$, $\\frac{\\partial}{\\partial x}(4y) = 0$. Natija: $3x^2 y^2 - 10x$.',
    difficulty: 'Oson'
  },
  {
    id: 'm9-q2',
    moduleId: 'kop-ozgaruvchili-funksiyalar',
    moduleName: '9-modul: Ko\'p o\'zgaruvchili funksiyalar',
    question: 'Shvars teoremasiga ko\'ra aralash ikkinchi tartibli xususiy hosilalar qanday shartda teng bo\'ladi?',
    options: [
      'Faqat funksiya chiziqli bo\'lganda',
      'Ushbu aralash hosilalar ko\'rilayotgan sohada uzluksiz bo\'lganda: $\\frac{\\partial^2 z}{\\partial x \\partial y} = \\frac{\\partial^2 z}{\\partial y \\partial x}$',
      'Faqat funksiya nolga teng bo\'lganda',
      'Aralash hosilalar hech qachon teng bo\'la olmaydi'
    ],
    correctIndex: 1,
    explanation: 'Shvars teoremasi: agar $z = f(x, y)$ funksiyaning aralash xususiy hosilalari biror sohada uzluksiz bo\'lsa, u holda hosila olish tartibi ahamiyatsiz, ya\'ni $f\'\'_{xy} = f\'\'_{yx}$.',
    difficulty: "O'rta"
  },
  {
    id: 'm9-q3',
    moduleId: 'kop-ozgaruvchili-funksiyalar',
    moduleName: '9-modul: Ko\'p o\'zgaruvchili funksiyalar',
    question: '$z = f(x, y)$ funksiyaning statsionar nuqtada ekstremumga ega bo\'lishi uchun Silvestr determinanti $\\Delta = A C - B^2$ qanday bo\'lishi kerak?',
    options: [
      '$\\Delta < 0$',
      '$\\Delta > 0$',
      '$\\Delta = 0$',
      '$\\Delta \\le 0$'
    ],
    correctIndex: 1,
    explanation: 'Ekstremumning yetarli sharti: agar $\\Delta = A C - B^2 > 0$ bo\'lsa, ekstremum mavjud (agar $A > 0$ bo\'lsa minimum, $A < 0$ bo\'lsa maksimum). Agar $\\Delta < 0$ bo\'lsa, egar nuqtasi (ekstremum yo\'q), $\\Delta = 0$ bo\'lsa qo\'shimcha tekshiruv lozim.',
    difficulty: "O'rta"
  },

  // ==========================================
  // 10-MODUL: KARRALI VA EGRI CHIZIQLI INTEGRALLAR
  // ==========================================
  {
    id: 'm10-q1',
    moduleId: 'karrali-integrallar',
    moduleName: '10-modul: Karrali va egri chiziqli integrallar',
    question: 'To\'g\'ri to\'rtburchakli $D = [0, 1] \\times [0, 2]$ soha bo\'yicha $\\iint_D xy \\, dx dy$ ikki karrali integralni hisoblang:',
    options: [
      '$1$',
      '$2$',
      '$\\frac{1}{2}$',
      '$4$'
    ],
    correctIndex: 0,
    explanation: 'Chegaralar o\'zgarmas bo\'lgani uchun takroriy integralga ajratamiz: $\\int_0^1 x dx \\cdot \\int_0^2 y dy = \\left[\\frac{x^2}{2}\\right]_0^1 \\cdot \\left[\\frac{y^2}{2}\\right]_0^2 = \\frac{1}{2} \\cdot \\frac{4}{2} = \\frac{1}{2} \\cdot 2 = 1$.',
    difficulty: 'Oson'
  },
  {
    id: 'm10-q2',
    moduleId: 'karrali-integrallar',
    moduleName: '10-modul: Karrali va egri chiziqli integrallar',
    question: 'Dekart koordinatalaridan qutb koordinatalariga ($x = r \\cos\\varphi, y = r \\sin\\varphi$) o\'tganda Yakobian $J$ nimaga teng?',
    options: [
      '$1$',
      '$r$',
      '$r^2$',
      '$\\frac{1}{r}$'
    ],
    correctIndex: 1,
    explanation: 'Yakobian determinanti: $J = \\begin{vmatrix} \\cos\\varphi & -r\\sin\\varphi \\\\ \\sin\\varphi & r\\cos\\varphi \\end{vmatrix} = r\\cos^2\\varphi - (-r\\sin^2\\varphi) = r(\\cos^2\\varphi + \\sin^2\\varphi) = r$. Shuning uchun $dx dy = r \\, dr d\\varphi$.',
    difficulty: "O'rta"
  },
  {
    id: 'm10-q3',
    moduleId: 'karrali-integrallar',
    moduleName: '10-modul: Karrali va egri chiziqli integrallar',
    question: 'Grin formulasi qaysi ikki integral turi o\'rtasidagi bog\'lanishni ifodalaydi?',
    options: [
      'Aniqmas va aniq integral',
      'Yopiq kontur bo\'yicha egri chiziqli integral va tekis soha bo\'yicha ikki karrali integral',
      'Uch karrali va sirt integrali',
      'Qatorlar va integrallar'
    ],
    correctIndex: 1,
    explanation: 'Grin formulasi: $\\oint_L (P dx + Q dy) = \\iint_D \\left(\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y}\\right) dx dy$. Bu yassi soha chegarasi bo\'ylab egri chiziqli integralni ikki karrali integral orqali ifodalaydi.',
    difficulty: "O'rta"
  },

  // ==========================================
  // 11-MODUL: QATORLAR
  // ==========================================
  {
    id: 'm11-q1',
    moduleId: 'qatorlar',
    moduleName: '11-modul: Qatorlar',
    question: 'Geometrik qator $\\sum_{n=0}^{\\infty} q^n = 1 + q + q^2 + \\dots$ qaysi shartda yaqinlashuvchi bo\'ladi va uning yig\'indisi nimaga teng?',
    options: [
      '$|q| < 1$ bo\'lganda, $S = \\frac{1}{1 - q}$',
      '$|q| \\ge 1$ bo\'lganda, $S = \\frac{1}{1 + q}$',
      '$q > 0$ bo\'lganda, $S = 1 - q$',
      'Har doim uzoqlashuvchi'
    ],
    correctIndex: 0,
    explanation: 'Geometrik progressiya hadlari yig\'indisining limiti faqat mahraj $|q| < 1$ bo\'lganda mavjud va $S = \\lim_{n\\to\\infty} \\frac{1 - q^n}{1 - q} = \\frac{1}{1 - q}$.',
    difficulty: 'Oson'
  },
  {
    id: 'm11-q2',
    moduleId: 'qatorlar',
    moduleName: '11-modul: Qatorlar',
    question: 'Dalamber alomatiga ko\'ra $\\lim_{n \\to \\infty} \\frac{a_{n+1}}{a_n} = l$ bo\'lsa, qator qachon yaqinlashadi?',
    options: [
      '$l > 1$ bo\'lganda',
      '$l < 1$ bo\'lganda',
      '$l = 1$ bo\'lganda',
      '$l = \\infty$ bo\'lganda'
    ],
    correctIndex: 1,
    explanation: 'Dalamber alomati: agar $l < 1$ bo\'lsa qator yaqinlashadi; agar $l > 1$ bo\'lsa qator uzoqlashadi; agar $l = 1$ bo\'lsa alomat javob bermaydi (boshqa alomat qo\'llash lozim).',
    difficulty: 'Oson'
  },
  {
    id: 'm11-q3',
    moduleId: 'qatorlar',
    moduleName: '11-modul: Qatorlar',
    question: 'Garmonik qator $\\sum_{n=1}^\\infty \\frac{1}{n} = 1 + \\frac{1}{2} + \\frac{1}{3} + \\dots$ yaqinlashuvchanligi haqida qaysi fikr to\'g\'ri?',
    options: [
      'Yaqinlashuvchi, yig\'indisi 2 ga teng',
      'Yaqinlashuvchi, yig\'indisi $e$ ga teng',
      'Uzoqlashuvchi (garchi umumiy hadi $\\lim \\frac{1}{n} = 0$ bo\'lsa ham)',
      'Faqat toq hadlari bo\'yicha yaqinlashuvchi'
    ],
    correctIndex: 2,
    explanation: 'Garmonik qator umumiy hadi nolga intilsa-da, integral alomati bo\'yicha $\\int_1^\\infty \\frac{1}{x} dx = [\\ln x]_1^\\infty = \\infty$ bo\'lgani uchun uzoqlashadi. Bu umumiy hadning 0 ga intilishi yaqinlashish uchun yetarli emasligiga klassik misoldir.',
    difficulty: "O'rta"
  },

  // ==========================================
  // 12-MODUL: DIFFERENSIAL TENGLAMALAR
  // ==========================================
  {
    id: 'm12-q1',
    moduleId: 'differensial-tenglamalar',
    moduleName: '12-modul: Differensial tenglamalar',
    question: '$y\'\' - 5y\' + 6y = 0$ tenglamaning xarakteristik tenglamasi va uning ildizlari qanday?',
    options: [
      '$k^2 - 5k + 6 = 0 \\implies k_1 = 2, k_2 = 3$',
      '$k^2 + 5k + 6 = 0 \\implies k_1 = -2, k_2 = -3$',
      '$k^2 - 6k + 5 = 0 \\implies k_1 = 1, k_2 = 5$',
      '$k^2 - 5k = 0 \\implies k_1 = 0, k_2 = 5$'
    ],
    correctIndex: 0,
    explanation: '$y\'\' + py\' + qy = 0$ ga mos xarakteristik tenglama $k^2 + pk + q = 0$ dir. Bu yerda $k^2 - 5k + 6 = 0$. Viyet teoremasiga ko\'ra ildizlar $k_1 = 2, k_2 = 3$. Umumiy yechim esa: $y = C_1 e^{2x} + C_2 e^{3x}$.',
    difficulty: "O'rta"
  },
  {
    id: 'm12-q2',
    moduleId: 'differensial-tenglamalar',
    moduleName: '12-modul: Differensial tenglamalar',
    question: '$y\' = \\frac{y}{x}$ o\'zgaruvchilari ajraladigan differensial tenglamaning umumiy yechimini toping:',
    options: [
      '$y = x + C$',
      '$y = C \\cdot x$',
      '$y = C \\cdot e^x$',
      '$y = \\ln x + C$'
    ],
    correctIndex: 1,
    explanation: 'O\'zgaruvchilarni ajratamiz: $\\frac{dy}{dx} = \\frac{y}{x} \\implies \\frac{dy}{y} = \\frac{dx}{x}$. Har ikkala tomonni integrallaymiz: $\\int \\frac{dy}{y} = \\int \\frac{dx}{x} \\implies \\ln|y| = \\ln|x| + \\ln|C| \\implies y = C \\cdot x$.',
    difficulty: "O'rta"
  },
  {
    id: 'm12-q3',
    moduleId: 'differensial-tenglamalar',
    moduleName: '12-modul: Differensial tenglamalar',
    question: '1-tartibli chiziqli $y\' + P(x)y = Q(x)$ differensial tenglamani yechishda qaysi usul eng keng qo\'llaniladi?',
    options: [
      'Bernulli usuli (yechimni $y = u(x) \\cdot v(x)$ ko\'paytma shaklida izlash)',
      'Kramer qoidasi',
      'Nyuton binomi usuli',
      'Lopital qoidasi'
    ],
    correctIndex: 0,
    explanation: 'Bernulli usulida noma\'lum funksiya ikki funksiya ko\'paytmasi $y = u(x) \\cdot v(x)$ shaklida olinib, tenglama ikki alohida integrallanuvchi tenglamaga ajratiladi.',
    difficulty: 'Oson'
  },

  // ==========================================
  // 13-MODUL: EHTIMOLLAR NAZARIYASI
  // ==========================================
  {
    id: 'm13-q1',
    moduleId: 'ehtimollar-nazariyasi',
    moduleName: '13-modul: Ehtimollar nazariyasi',
    question: 'Oddiy o\'yin soqqasi (zarik) bir marta tashlanganda juft son (2, 4 yoki 6) tushish ehtimolligi qancha?',
    options: [
      '$\\frac{1}{6}$',
      '$\\frac{1}{3}$',
      '$\\frac{1}{2}$',
      '$\\frac{2}{3}$'
    ],
    correctIndex: 2,
    explanation: 'Barcha mumkin bo\'lgan natijalar soni $n = 6$ ({1, 2, 3, 4, 5, 6}). Qulay natijalar soni $m = 3$ ({2, 4, 6}). Klassik ehtimollik formulasi: $P = \\frac{m}{n} = \\frac{3}{6} = \\frac{1}{2}$.',
    difficulty: 'Oson'
  },
  {
    id: 'm13-q2',
    moduleId: 'ehtimollar-nazariyasi',
    moduleName: '13-modul: Ehtimollar nazariyasi',
    question: 'Ikki mustaqil hodisa $A$ va $B$ ning bir vaqtda ro\'y berish ehtimolligi $P(A \\cap B)$ qaysi formula bilan topiladi?',
    options: [
      '$P(A) + P(B)$',
      '$P(A) \\cdot P(B)$',
      '$P(A) - P(B)$',
      '$\\frac{P(A)}{P(B)}$'
    ],
    correctIndex: 1,
    explanation: 'Mustaqil hodisalar uchun ehtimollarni ko\'paytirish teoremasiga ko\'ra: $P(AB) = P(A \\cap B) = P(A) \\cdot P(B)$.',
    difficulty: 'Oson'
  },
  {
    id: 'm13-q3',
    moduleId: 'ehtimollar-nazariyasi',
    moduleName: '13-modul: Ehtimollar nazariyasi',
    question: 'Bernulli formulasiga ko\'ra $n$ ta erkli sinovda hodisaning roppa-rosa $k$ marta ro\'y berish ehtimoli qaysi?',
    options: [
      '$P_n(k) = C_n^k p^k q^{n-k}$',
      '$P_n(k) = A_n^k p^{n-k} q^k$',
      '$P_n(k) = \\frac{n!}{k!} p^k$',
      '$P_n(k) = p^k + q^{n-k}$'
    ],
    correctIndex: 0,
    explanation: 'Bernulli formulasi: $P_n(k) = C_n^k p^k q^{n-k}$, bu yerda $C_n^k = \\frac{n!}{k!(n-k)!}$, $p$ - muvaffaqiyat ehtimoli, $q = 1 - p$ - muvaffaqiyatsizlik ehtimoli.',
    difficulty: 'Oson'
  },

  // ==========================================
  // 14-MODUL: MATEMATIK STATISTIKA
  // ==========================================
  {
    id: 'm14-q1',
    moduleId: 'matematik-statistika',
    moduleName: '14-modul: Matematik statistika',
    question: 'Tanlanma $2, 4, 4, 6, 9$ berilgan bo\'lsa, uning tanlanma o\'rtacha qiymati $\\bar{x}$ nimaga teng?',
    options: [
      '$4$',
      '$5$',
      '$6$',
      '$4.5$'
    ],
    correctIndex: 1,
    explanation: 'Tanlanma o\'rtacha arifmetik qiymati: $\\bar{x} = \\frac{1}{n} \\sum_{i=1}^n x_i = \\frac{2 + 4 + 4 + 6 + 9}{5} = \\frac{25}{5} = 5$.',
    difficulty: 'Oson'
  },
  {
    id: 'm14-q2',
    moduleId: 'matematik-statistika',
    moduleName: '14-modul: Matematik statistika',
    question: 'Tanlanmada eng ko\'p takrorlangan qiymat statistikada nima deb ataladi?',
    options: [
      'Mediana',
      'Moda ($M_o$)',
      'Dispersiya',
      'Standart og\'ish'
    ],
    correctIndex: 1,
    explanation: 'Moda ($M_o$) — variatsion qatorda eng katta chastotaga (eng ko\'p uchrash soniga) ega bo\'lgan variantadir. Mediana esa qatorni teng ikkiga bo\'luvchi markaziy qiymatdir.',
    difficulty: 'Oson'
  },
  {
    id: 'm14-q3',
    moduleId: 'matematik-statistika',
    moduleName: '14-modul: Matematik statistika',
    question: 'Tuzatilgan (siljimagan) tanlanma dispersiyasi $s^2$ formulasida nima sababdan $n$ emas, balki $(n-1)$ ga bo\'linadi?',
    options: [
      'Bessell tuzatmasi: tanlanma dispersiyasi siljimagan (unbiased) baho bo\'lishi uchun',
      'Hisoblashni osonlashtirish uchun',
      'Katta sonlar qonunini inkor qilish uchun',
      'Faqat juft hajmli tanlanmalarda qo\'llash uchun'
    ],
    correctIndex: 0,
    explanation: 'Bessel tuzatmasi: agar $n$ ga bo\'linsa, olingan dispersiya haqiqiy bosh dispersiyadan biroz kichik (siljigan) bo\'lib qoladi. $s^2 = \\frac{1}{n-1}\\sum (x_i - \\bar{x})^2$ formulasi esa siljimagan baho hisoblanadi.',
    difficulty: "O'rta"
  },
  // ==========================================
  // QO'SHIMCHA HEMIS IMTIHON SAVOLLARI (56 TA)
  // ==========================================
  {
    id: 'm1-q4',
    moduleId: 'maktab-kursi',
    moduleName: '1-modul: Maktab kursini takrorlash',
    question: '$\\log_2(x^2 - 1) = 3$ logarifmik tenglamaning barcha haqiqiy ildizlarini toping:',
    options: [
      '$x = 3$',
      '$x = \\pm 3$',
      '$x = \\pm \\sqrt{7}$',
      '$x = 9$'
    ],
    correctIndex: 1,
    explanation: 'Logarifm ta\'rifiga ko\'ra: $x^2 - 1 = 2^3 = 8 \\implies x^2 = 9 \\implies x = \\pm 3$. Ikkala ildiz ham aniqlanish sohasi $x^2 - 1 > 0$ shartini qanoatlantiradi.',
    difficulty: "O'rta"
  },
  {
    id: 'm1-q5',
    moduleId: 'maktab-kursi',
    moduleName: '1-modul: Maktab kursini takrorlash',
    question: 'Birinchi hadi $a_1 = 3$ va ayirmasi $d = 4$ bo\'lgan arifmetik progressiyaning dastlabki 10 ta hadi yig\'indisi $S_{10}$ ni toping:',
    options: [
      '$180$',
      '$210$',
      '$240$',
      '$195$'
    ],
    correctIndex: 1,
    explanation: 'Arifmetik progressiya yig\'indi formulasi: $S_n = \\frac{2a_1 + (n - 1)d}{2} \\cdot n$. Bu yerda $S_{10} = \\frac{2\\cdot 3 + 9\\cdot 4}{2} \\cdot 10 = \\frac{6 + 36}{2} \\cdot 10 = 21 \\cdot 10 = 210$.',
    difficulty: 'Oson'
  },
  {
    id: 'm1-q6',
    moduleId: 'maktab-kursi',
    moduleName: '1-modul: Maktab kursini takrorlash',
    question: '$\\cos(2x) = 0$ elementar trigonometrik tenglamaning umumiy yechimini ko\'rsating:',
    options: [
      '$x = \\frac{\\pi}{4} + \\frac{\\pi k}{2}, \\; k \\in \\mathbb{Z}$',
      '$x = \\frac{\\pi}{2} + \\pi k, \\; k \\in \\mathbb{Z}$',
      '$x = \\pi k, \\; k \\in \\mathbb{Z}$',
      '$x = \\pm \\frac{\\pi}{6} + 2\\pi k, \\; k \\in \\mathbb{Z}$'
    ],
    correctIndex: 0,
    explanation: '$\\cos(\\theta) = 0$ ning yechimi $\\theta = \\frac{\\pi}{2} + \\pi k$. Bu yerda $\\theta = 2x$, demak $2x = \\frac{\\pi}{2} + \\pi k \\implies x = \\frac{\\pi}{4} + \\frac{\\pi k}{2}, \\; k \\in \\mathbb{Z}$.',
    difficulty: "O'rta"
  },
  {
    id: 'm1-q7',
    moduleId: 'maktab-kursi',
    moduleName: '1-modul: Maktab kursini takrorlash',
    question: '$4^x - 5\\cdot 2^x + 4 = 0$ ko\'rsatkichli tenglamaning ildizlari yig\'indisini toping:',
    options: [
      '$5$',
      '$4$',
      '$2$',
      '$0$'
    ],
    correctIndex: 2,
    explanation: '$t = 2^x > 0$ belgilash kiritsak, $t^2 - 5t + 4 = 0 \\implies (t - 1)(t - 4) = 0$. Bundan $2^x = 1 \\implies x_1 = 0$ va $2^x = 4 \\implies x_2 = 2$. Ildizlar yig\'indisi: $x_1 + x_2 = 0 + 2 = 2$.',
    difficulty: 'Murakkab'
  },
  {
    id: 'm2-q4',
    moduleId: 'chiziqli-algebra',
    moduleName: '2-modul: Chiziqli algebra',
    question: '$A$ matritsa $2 \\times 3$ va $B$ matritsa $3 \\times 4$ o\'lchamga ega bo\'lsa, ularning ko\'paytmasi $C = A \\cdot B$ ning o\'lchami qanday bo\'ladi?',
    options: [
      '$3 \\times 3$',
      '$2 \\times 4$',
      '$4 \\times 2$',
      'Ko\'paytirish mumkin emas'
    ],
    correctIndex: 1,
    explanation: 'Matritsalar ko\'paytmasi $A_{m \\times k} \\cdot B_{k \\times n} = C_{m \\times n}$ qoidasi bo\'yicha olinadi. Bu yerda $k = 3$ ustunlar va satrlar soni mos, natija esa $2 \\times 4$ o\'lchamli bo\'ladi.',
    difficulty: 'Oson'
  },
  {
    id: 'm2-q5',
    moduleId: 'chiziqli-algebra',
    moduleName: '2-modul: Chiziqli algebra',
    question: '$A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 5 \\end{pmatrix}$ matritsaning teskari matritsasi $A^{-1}$ ni toping:',
    options: [
      '$\\begin{pmatrix} -5 & 2 \\\\ 3 & -1 \\end{pmatrix}$',
      '$\\begin{pmatrix} 5 & -2 \\\\ -3 & 1 \\end{pmatrix}$',
      '$\\begin{pmatrix} 1 & -2 \\\\ -3 & 5 \\end{pmatrix}$',
      '$\\begin{pmatrix} -1 & 2 \\\\ 3 & -5 \\end{pmatrix}$'
    ],
    correctIndex: 0,
    explanation: '$\\det A = 1\\cdot 5 - 2\\cdot 3 = 5 - 6 = -1$. 2x2 matritsaning teskarisi: $A^{-1} = \\frac{1}{\\det A}\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix} = \\frac{1}{-1}\\begin{pmatrix} 5 & -2 \\\\ -3 & 1 \\end{pmatrix} = \\begin{pmatrix} -5 & 2 \\\\ 3 & -1 \\end{pmatrix}$.',
    difficulty: "O'rta"
  },
  {
    id: 'm2-q6',
    moduleId: 'chiziqli-algebra',
    moduleName: '2-modul: Chiziqli algebra',
    question: 'Kvadrat matritsa qachon xosmas (teskarilanuvchi) deyiladi?',
    options: [
      'Uning barcha elementlari musbat bo\'lsa',
      'Uning determinanti nolga teng bo\'lmasa ($\\det A \\ne 0$)',
      'U simmetrik matritsa bo\'lsa',
      'Uning izi nolga teng bo\'lsa'
    ],
    correctIndex: 1,
    explanation: 'Kvadrat matritsaning determinanti noldan farqli ($\\|A\\| \\ne 0$) bo\'lsa, u xosmas (regular) matritsa deb ataladi va unga yagona teskari matritsa $A^{-1}$ mavjud bo\'ladi.',
    difficulty: 'Oson'
  },
  {
    id: 'm2-q7',
    moduleId: 'chiziqli-algebra',
    moduleName: '2-modul: Chiziqli algebra',
    question: '$A = \\begin{pmatrix} 4 & 1 \\\\ 2 & 3 \\end{pmatrix}$ matritsaning xos sonlarini (eigenvalues) toping:',
    options: [
      '$\\lambda_1 = 5, \\; \\lambda_2 = 2$',
      '$\\lambda_1 = 1, \\; \\lambda_2 = 6$',
      '$\\lambda_1 = 3, \\; \\lambda_2 = 4$',
      '$\\lambda_1 = -1, \\; \\lambda_2 = 5$'
    ],
    correctIndex: 0,
    explanation: 'Xarakteristik tenglama: $\\det(A - \\lambda E) = (4 - \\lambda)(3 - \\lambda) - 2 = \\lambda^2 - 7\\lambda + 12 - 2 = \\lambda^2 - 7\\lambda + 10 = 0$. Viyet teoremasiga ko\'ra $(\\lambda - 5)(\\lambda - 2) = 0 \\implies \\lambda_1 = 5, \\lambda_2 = 2$.',
    difficulty: 'Murakkab'
  },
  {
    id: 'm3-q4',
    moduleId: 'vektorlar-geometriya',
    moduleName: '3-modul: Vektorlar va analitik geometriya',
    question: '$\\vec{a} = (1, 2, -3)$ va $\\vec{b} = (4, -1, 2)$ vektorlarning skalyar ko\'paytmasini hisoblang:',
    options: [
      '$-4$',
      '$4$',
      '$-6$',
      '$8$'
    ],
    correctIndex: 0,
    explanation: 'Skalyar ko\'paytma: $\\vec{a} \\cdot \\vec{b} = x_1 x_2 + y_1 y_2 + z_1 z_2 = 1\\cdot 4 + 2\\cdot(-1) + (-3)\\cdot 2 = 4 - 2 - 6 = -4$.',
    difficulty: 'Oson'
  },
  {
    id: 'm3-q5',
    moduleId: 'vektorlar-geometriya',
    moduleName: '3-modul: Vektorlar va analitik geometriya',
    question: '$\\vec{a} = (2, k)$ va $\\vec{b} = (3, -6)$ vektorlar $k$ ning qanday qiymatida o\'zaro perpendikulyar bo\'ladi?',
    options: [
      '$k = -1$',
      '$k = 1$',
      '$k = 4$',
      '$k = 0$'
    ],
    correctIndex: 1,
    explanation: 'Vektorlar perpendikulyarligi uchun ularning skalyar ko\'paytmasi nolga teng bo\'lishi kerak: $\\vec{a}\\cdot\\vec{b} = 2\\cdot 3 + k\\cdot(-6) = 6 - 6k = 0 \\implies 6k = 6 \\implies k = 1$.',
    difficulty: "O'rta"
  },
  {
    id: 'm3-q6',
    moduleId: 'vektorlar-geometriya',
    moduleName: '3-modul: Vektorlar va analitik geometriya',
    question: '$2x - 3y + z - 7 = 0$ tekislikning normal vektorini ko\'rsating:',
    options: [
      '$\\vec{n} = (2, -3, 1)$',
      '$\\vec{n} = (2, 3, -1)$',
      '$\\vec{n} = (-3, 2, 7)$',
      '$\\vec{n} = (2, -3, -7)$'
    ],
    correctIndex: 0,
    explanation: 'Tekislikning umumiy tenglamasi $Ax + By + Cz + D = 0$ da normal vektor koordinatalari to\'g\'ridan-to\'g\'ri o\'zgaruvchilar koeffitsiyentlaridan iborat: $\\vec{n} = (A, B, C) = (2, -3, 1)$.',
    difficulty: 'Oson'
  },
  {
    id: 'm3-q7',
    moduleId: 'vektorlar-geometriya',
    moduleName: '3-modul: Vektorlar va analitik geometriya',
    question: '$\\vec{a} = (1, 0, 0)$ va $\\vec{b} = (0, 1, 0)$ vektorlarning vektor ko\'paytmasi $\\vec{c} = \\vec{a} \\times \\vec{b}$ ni toping:',
    options: [
      '$(0, 0, 1)$',
      '$(0, 0, -1)$',
      '$(1, 1, 0)$',
      '$0$ (skalyar)'
    ],
    correctIndex: 0,
    explanation: 'Birlik bazis vektorlari uchun o\'ng uchlik qoidasiga ko\'ra: $\\vec{i} \\times \\vec{j} = \\vec{k} = (0, 0, 1)$.',
    difficulty: "O'rta"
  },
  {
    id: 'm4-q4',
    moduleId: 'kompleks-sonlar',
    moduleName: '4-modul: Kompleks sonlar',
    question: '$i^{2026}$ ning qiymatini hisoblang ($i$ — mavhum birlik):',
    options: [
      '$1$',
      '$-1$',
      '$i$',
      '$-i$'
    ],
    correctIndex: 1,
    explanation: '$i^1 = i, i^2 = -1, i^3 = -i, i^4 = 1$. Davr 4 ga teng. $2026 = 4 \\times 506 + 2$. Shuning uchun $i^{2026} = (i^4)^{506} \\cdot i^2 = 1^{506} \\cdot (-1) = -1$.',
    difficulty: 'Oson'
  },
  {
    id: 'm4-q5',
    moduleId: 'kompleks-sonlar',
    moduleName: '4-modul: Kompleks sonlar',
    question: '$z = 1 + i$ kompleks sonining trigonometrik shaklini ko\'rsating:',
    options: [
      '$\\sqrt{2}\\left(\\cos\\frac{\\pi}{4} + i\\sin\\frac{\\pi}{4}\\right)$',
      '$2\\left(\\cos\\frac{\\pi}{4} + i\\sin\\frac{\\pi}{4}\\right)$',
      '$\\sqrt{2}\\left(\\cos\\frac{\\pi}{3} + i\\sin\\frac{\\pi}{3}\\right)$',
      '$\\cos\\frac{\\pi}{4} + i\\sin\\frac{\\pi}{4}$'
    ],
    correctIndex: 0,
    explanation: 'Modul: $r = |z| = \\sqrt{1^2 + 1^2} = \\sqrt{2}$. Argument: $\\tan\\varphi = 1/1 = 1 \\implies \\varphi = \\frac{\\pi}{4}$. Shuning uchun $z = \\sqrt{2}\\left(\\cos\\frac{\\pi}{4} + i\\sin\\frac{\\pi}{4}\\right)$.',
    difficulty: "O'rta"
  },
  {
    id: 'm4-q6',
    moduleId: 'kompleks-sonlar',
    moduleName: '4-modul: Kompleks sonlar',
    question: '$z = 3 - 4i$ bo\'lsa, $z \\cdot \\bar{z}$ (kompleks son va uning qo\'shmasi ko\'paytmasi) nimaga teng?',
    options: [
      '$25$',
      '$-7$',
      '$7$',
      '$5$'
    ],
    correctIndex: 0,
    explanation: 'Qo\'shma kompleks son $\\bar{z} = 3 + 4i$. Ularning ko\'paytmasi modul kvadratiga teng: $z\\bar{z} = a^2 + b^2 = 3^2 + (-4)^2 = 9 + 16 = 25$.',
    difficulty: 'Oson'
  },
  {
    id: 'm4-q7',
    moduleId: 'kompleks-sonlar',
    moduleName: '4-modul: Kompleks sonlar',
    question: 'Muavr formulasi bo\'yicha $(\\cos\\theta + i\\sin\\theta)^n$ nimaga teng?',
    options: [
      '$\\cos(n\\theta) + i\\sin(n\\theta)$',
      '$\\cos^n\\theta + i\\sin^n\\theta$',
      '$n\\cos\\theta + in\\sin\\theta$',
      '$\\cos\\theta + i^n\\sin\\theta$'
    ],
    correctIndex: 0,
    explanation: 'Muavr teoremasiga ko\'ra: har qanday butun $n$ uchun $(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$ o\'rinlidir.',
    difficulty: "O'rta"
  },
  {
    id: 'm5-q4',
    moduleId: 'limitlar',
    moduleName: '5-modul: Limitlar nazariyasi',
    question: '$\\lim_{x \\to 0} \\frac{\\sin(7x)}{3x}$ limitni hisoblang:',
    options: [
      '$\\frac{7}{3}$',
      '$\\frac{3}{7}$',
      '$1$',
      '$0$'
    ],
    correctIndex: 0,
    explanation: '1-ajoyib limit natijasiga ko\'ra: $\\lim_{x \\to 0}\\frac{\\sin(kx)}{x} = k$. Bu yerda $\\lim_{x \\to 0}\\frac{\\sin(7x)}{3x} = \\frac{7}{3}\\lim_{x \\to 0}\\frac{\\sin(7x)}{7x} = \\frac{7}{3} \\cdot 1 = \\frac{7}{3}$.',
    difficulty: 'Oson'
  },
  {
    id: 'm5-q5',
    moduleId: 'limitlar',
    moduleName: '5-modul: Limitlar nazariyasi',
    question: '$\\lim_{x \\to \\infty} \\left(1 + \\frac{3}{x}\\right)^x$ limitning qiymatini aniqlang:',
    options: [
      '$e^3$',
      '$e$',
      '$3e$',
      '$\\infty$'
    ],
    correctIndex: 0,
    explanation: '2-ajoyib limit umumlashmasi: $\\lim_{x \\to \\infty} \\left(1 + \\frac{k}{x}\\right)^x = e^k$. Bu yerda $k = 3$, demak javob $e^3$.',
    difficulty: "O'rta"
  },
  {
    id: 'm5-q6',
    moduleId: 'limitlar',
    moduleName: '5-modul: Limitlar nazariyasi',
    question: '$\\lim_{x \\to \\infty} \\frac{5x^3 - 2x + 1}{2x^3 + 4x^2}$ limitni hisoblang:',
    options: [
      '$\\frac{5}{2}$',
      '$\\infty$',
      '$0$',
      '$\\frac{1}{2}$'
    ],
    correctIndex: 0,
    explanation: 'Surat va maxrajning eng yuqori darajasi teng ($x^3$). Cheksizlikdagi limit eng yuqori darajalar oldidagi koeffitsiyentlar nisbatiga teng: $\\frac{5}{2}$.',
    difficulty: 'Oson'
  },
  {
    id: 'm5-q7',
    moduleId: 'limitlar',
    moduleName: '5-modul: Limitlar nazariyasi',
    question: '$\\lim_{x \\to 0} \\frac{e^{2x} - 1}{x}$ limitni Lopital qoidasi orqali hisoblang:',
    options: [
      '$2$',
      '$1$',
      '$0$',
      '$e^2$'
    ],
    correctIndex: 0,
    explanation: '$x = 0$ da $[0/0]$ aniqmaslik. Lopital qoidasi bo\'yicha surat va maxrajdan alohida hosila olamiz: $\\lim_{x \\to 0}\\frac{(e^{2x}-1)\'}{(x)\'} = \\lim_{x \\to 0}\\frac{2e^{2x}}{1} = 2e^0 = 2$.',
    difficulty: "O'rta"
  },
  {
    id: 'm6-q4',
    moduleId: 'funksiyalar-grafiklar',
    moduleName: '6-modul: Funksiyalar va grafiklar',
    question: '$f(x) = x^3 + \\sin(x)$ funksiyaning juft yoki toqligini aniqlang:',
    options: [
      'Toq funksiya',
      'Juft funksiya',
      'Na juft, na toq',
      'Davriy va juft funksiya'
    ],
    correctIndex: 0,
    explanation: '$f(-x) = (-x)^3 + \\sin(-x) = -x^3 - \\sin(x) = -(x^3 + \\sin(x)) = -f(x)$. Demak, $f(-x) = -f(x)$ sharti bajarilgani uchun funksiya toqdir.',
    difficulty: 'Oson'
  },
  {
    id: 'm6-q5',
    moduleId: 'funksiyalar-grafiklar',
    moduleName: '6-modul: Funksiyalar va grafiklar',
    question: '$f(x) = \\sqrt{9 - x^2}$ funksiyaning aniqlanish sohasini toping:',
    options: [
      '$[-3, 3]$',
      '$(-\\infty, -3] \\cup [3, \\infty)$',
      '$[0, 3]$',
      '$(-\\infty, \\infty)$'
    ],
    correctIndex: 0,
    explanation: 'Ildiz ostidagi ifoda nomanfiy bo\'lishi kerak: $9 - x^2 \\ge 0 \\implies x^2 \\le 9 \\implies -3 \\le x \\le 3$. Demak, aniqlanish sohasi: $[-3, 3]$.',
    difficulty: 'Oson'
  },
  {
    id: 'm6-q6',
    moduleId: 'funksiyalar-grafiklar',
    moduleName: '6-modul: Funksiyalar va grafiklar',
    question: '$f(x) = \\sin(4x)$ funksiyaning asosiy davri $T$ nimaga teng?',
    options: [
      '$\\frac{\\pi}{2}$',
      '$\\pi$',
      '$2\\pi$',
      '$\\frac{\\pi}{4}$'
    ],
    correctIndex: 0,
    explanation: '$\\sin(kx)$ funksiyaning asosiy davri $T = \\frac{2\\pi}{k}$ formulasi bilan topiladi. Bu yerda $k = 4$, shuning uchun $T = \\frac{2\\pi}{4} = \\frac{\\pi}{2}$.',
    difficulty: "O'rta"
  },
  {
    id: 'm6-q7',
    moduleId: 'funksiyalar-grafiklar',
    moduleName: '6-modul: Funksiyalar va grafiklar',
    question: '$f(x) = \\frac{2x - 1}{x + 3}$ funksiyaning gorizontal asimptotasini toping:',
    options: [
      '$y = 2$',
      '$y = -3$',
      '$x = -3$',
      '$y = 0$'
    ],
    correctIndex: 0,
    explanation: 'Gorizontal asimptota $y = \\lim_{x \\to \\pm\\infty} f(x)$ orqali topiladi. $\\lim_{x\\to\\infty}\\frac{2x-1}{x+3} = 2$. Demak, gorizontal asimptota $y = 2$ to\'g\'ri chizig\'idir ($x = -3$ esa vertikal asimptota).',
    difficulty: "O'rta"
  },
  {
    id: 'm7-q4',
    moduleId: 'hosila',
    moduleName: '7-modul: Hosila va uning tatbiqlari',
    question: '$y = \\sin(x^3)$ murakkab funksiyaning hosilasi $y\'$ ni toping:',
    options: [
      '$3x^2 \\cos(x^3)$',
      '$\\cos(x^3)$',
      '$3x^2 \\sin(x^3)$',
      '$-3x^2 \\cos(x^3)$'
    ],
    correctIndex: 0,
    explanation: 'Zanjir qoidasi bo\'yicha: $(f(u))\' = f\'(u) \\cdot u\'$. Bu yerda $u = x^3$, shuning uchun $(\\sin(x^3))\' = \\cos(x^3) \\cdot (x^3)\' = 3x^2 \\cos(x^3)$.',
    difficulty: 'Oson'
  },
  {
    id: 'm7-q5',
    moduleId: 'hosila',
    moduleName: '7-modul: Hosila va uning tatbiqlari',
    question: '$y = x^2$ egri chiziqqa $x_0 = 3$ nuqtada o\'tkazilgan urinmaning burchak koeffitsiyenti $k$ ni toping:',
    options: [
      '$6$',
      '$9$',
      '$3$',
      '$2$'
    ],
    correctIndex: 0,
    explanation: 'Urinmaning burchak koeffitsiyenti hosilaning berilgan nuqtadagi qiymatiga teng: $k = y\'(x_0)$. $y\' = 2x \\implies k = 2\\cdot 3 = 6$.',
    difficulty: 'Oson'
  },
  {
    id: 'm7-q6',
    moduleId: 'hosila',
    moduleName: '7-modul: Hosila va uning tatbiqlari',
    question: '$y = x \\cdot \\ln(x)$ funksiyaning hosilasini toping:',
    options: [
      '$\\ln(x) + 1$',
      '$\\frac{1}{x}$',
      '$\\ln(x)$',
      '$x + \\frac{1}{x}$'
    ],
    correctIndex: 0,
    explanation: 'Ko\'paytma hosilasi qoidasi bo\'yicha: $(u\\cdot v)\' = u\'v + uv\'. (x\\ln x)\' = 1\\cdot\\ln x + x\\cdot\\frac{1}{x} = \\ln x + 1$.',
    difficulty: "O'rta"
  },
  {
    id: 'm7-q7',
    moduleId: 'hosila',
    moduleName: '7-modul: Hosila va uning tatbiqlari',
    question: 'Agar oraliqda funksiyaning ikkinchi tartibli hosilasi $f\'\'(x) > 0$ bo\'lsa, funksiya grafigi bu oraliqda qanday bo\'ladi?',
    options: [
      'Botiq (qavariqligi pastga qaragan, U-simon)',
      'Qavariq (qavariqligi yuqoriga qaragan, tomsimon)',
      'Qat\'iy kamayuvchi',
      'O\'zgarmas'
    ],
    correctIndex: 0,
    explanation: '$f\'\'(x) > 0$ bo\'lganda hosila $f\'(x)$ o\'suvchi bo\'ladi va grafik botiq (konkav yuqoriga / qavariqligi pastga) shaklda bo\'lib, statsionar nuqtada minimum mavjud bo\'ladi.',
    difficulty: 'Murakkab'
  },
  {
    id: 'm8-q4',
    moduleId: 'integrallar',
    moduleName: '8-modul: Integrallar',
    question: '$\\int 2x \\cdot e^{x^2} dx$ integralni o\'zgaruvchini almashtirish orqali hisoblang:',
    options: [
      '$e^{x^2} + C$',
      '$2e^{x^2} + C$',
      '$\\frac{1}{2} e^{x^2} + C$',
      '$x^2 e^{x^2} + C$'
    ],
    correctIndex: 0,
    explanation: '$u = x^2$ deb almashtirsak, $du = 2x dx$. Integral $\\int e^u du = e^u + C = e^{x^2} + C$ ga teng bo\'ladi.',
    difficulty: 'Oson'
  },
  {
    id: 'm8-q5',
    moduleId: 'integrallar',
    moduleName: '8-modul: Integrallar',
    question: '$\\int \\ln(x) dx$ integralning boshlang\'ich funksiyasini bo\'laklab integrallash orqali toping:',
    options: [
      '$x \\ln(x) - x + C$',
      '$\\frac{1}{x} + C$',
      '$x \\ln(x) + x + C$',
      '$\\frac{\\ln^2(x)}{2} + C$'
    ],
    correctIndex: 0,
    explanation: '$u = \\ln x, dv = dx \\implies du = \\frac{1}{x}dx, v = x$. Bo\'laklab integrallash: $\\int u dv = uv - \\int v du = x\\ln x - \\int x\\cdot\\frac{1}{x}dx = x\\ln x - x + C$.',
    difficulty: "O'rta"
  },
  {
    id: 'm8-q6',
    moduleId: 'integrallar',
    moduleName: '8-modul: Integrallar',
    question: '$\\int_0^2 (4 - x^2) dx$ aniq integralni hisoblang:',
    options: [
      '$\\frac{16}{3}$',
      '$8$',
      '$\\frac{8}{3}$',
      '$4$'
    ],
    correctIndex: 0,
    explanation: 'Nyuton-Leybnits formulasi: $\\left[ 4x - \\frac{x^3}{3} \\right]_0^2 = \\left(4\\cdot 2 - \\frac{8}{3}\\right) - 0 = 8 - \\frac{8}{3} = \\frac{24 - 8}{3} = \\frac{16}{3}$.',
    difficulty: "O'rta"
  },
  {
    id: 'm8-q7',
    moduleId: 'integrallar',
    moduleName: '8-modul: Integrallar',
    question: '$\\int \\frac{1}{1 + x^2} dx$ integral nimaga teng?',
    options: [
      '$\\arctan(x) + C$',
      '$\\arcsin(x) + C$',
      '$\\ln|1 + x^2| + C$',
      '$\\frac{1}{2x} + C$'
    ],
    correctIndex: 0,
    explanation: 'Bu asosiy jadval integralidir: $(\\arctan x)\' = \\frac{1}{1 + x^2}$, binobarin $\\int \\frac{1}{1 + x^2} dx = \\arctan(x) + C$.',
    difficulty: 'Oson'
  },
  {
    id: 'm9-q4',
    moduleId: 'kop-ozgaruvchili-funksiyalar',
    moduleName: "9-modul: Ko'p o'zgaruvchili funksiyalar",
    question: '$z = x^3 y^2$ funksiyaning $x$ bo\'yicha xususiy hosilasi $\\frac{\\partial z}{\\partial x}$ ni toping:',
    options: [
      '$3x^2 y^2$',
      '$2x^3 y$',
      '$6xy$',
      '$3x^2 + 2y$'
    ],
    correctIndex: 0,
    explanation: '$x$ bo\'yicha hosila olinganda $y$ o\'zgarmas (konstanta) deb qaraladi: $\\frac{\\partial}{\\partial x}(x^3 y^2) = y^2 \\cdot (x^3)\' = 3x^2 y^2$.',
    difficulty: 'Oson'
  },
  {
    id: 'm9-q5',
    moduleId: 'kop-ozgaruvchili-funksiyalar',
    moduleName: "9-modul: Ko'p o'zgaruvchili funksiyalar",
    question: 'Shvars teoremasiga ko\'ra, agar ikkinchi tartibli aralash xususiy hosilalar uzluksiz bo\'lsa:',
    options: [
      '$\\frac{\\partial^2 z}{\\partial x \\partial y} = \\frac{\\partial^2 z}{\\partial y \\partial x}$',
      '$\\frac{\\partial^2 z}{\\partial x^2} = \\frac{\\partial^2 z}{\\partial y^2}$',
      '$\\frac{\\partial^2 z}{\\partial x \\partial y} = 0$',
      'Aralash hosilalar mavjud emas'
    ],
    correctIndex: 0,
    explanation: 'Shvars teoremasi (va Klero teoremasi) bo\'yicha, uzluksiz aralash hosilalar differensiallash tartibiga bog\'liq emas: $z\'\'_{xy} = z\'\'_{yx}$.',
    difficulty: "O'rta"
  },
  {
    id: 'm9-q6',
    moduleId: 'kop-ozgaruvchili-funksiyalar',
    moduleName: "9-modul: Ko'p o'zgaruvchili funksiyalar",
    question: '$z = f(x, y)$ funksiyaning to\'liq differensiali $dz$ qaysi formula bilan ifodalanadi?',
    options: [
      '$dz = \\frac{\\partial z}{\\partial x} dx + \\frac{\\partial z}{\\partial y} dy$',
      '$dz = \\frac{\\partial z}{\\partial x} + \\frac{\\partial z}{\\partial y}$',
      '$dz = \\frac{\\partial z}{\\partial x} dy + \\frac{\\partial z}{\\partial y} dx$',
      '$dz = \\sqrt{(\\frac{\\partial z}{\\partial x})^2 + (\\frac{\\partial z}{\\partial y})^2}$'
    ],
    correctIndex: 0,
    explanation: 'To\'liq differensial ta\'rifiga ko\'ra: $dz = \\frac{\\partial z}{\\partial x}dx + \\frac{\\partial z}{\\partial y}dy$.',
    difficulty: 'Oson'
  },
  {
    id: 'm9-q7',
    moduleId: 'kop-ozgaruvchili-funksiyalar',
    moduleName: "9-modul: Ko'p o'zgaruvchili funksiyalar",
    question: 'Funksiyaning berilgan nuqtadagi gradient vektori $\\nabla f(x, y)$ qanday yo\'nalishni ko\'rsatadi?',
    options: [
      'Funksiyaning eng tez o\'sish yo\'nalishini',
      'Funksiyaning o\'zgarmaslik (sath chizig\'i) yo\'nalishini',
      'Funksiyaning eng tez kamayish yo\'nalishini',
      'Tasodifiy yo\'nalishni'
    ],
    correctIndex: 0,
    explanation: 'Gradient vektorining yo\'nalishi funksiyaning eng tez o\'sish yo\'nalishiga to\'g\'ri keladi, uning moduli esa shu yo\'nalishdagi o\'sish tezligiga tengdir.',
    difficulty: "O'rta"
  },
  {
    id: 'm10-q4',
    moduleId: 'karrali-integrallar',
    moduleName: '10-modul: Karrali va egri chiziqli integrallar',
    question: '$D = \\{0 \\le x \\le 2, \\; 0 \\le y \\le 1\\}$ to\'g\'ri to\'rtburchak sohada $\\iint_D xy \\, dx dy$ integralni hisoblang:',
    options: [
      '$1$',
      '$2$',
      '$4$',
      '$\\frac{1}{2}$'
    ],
    correctIndex: 0,
    explanation: 'Tenglamalar ajraladi: $\\int_0^2 x dx \\cdot \\int_0^1 y dy = \\left[\\frac{x^2}{2}\\right]_0^2 \\cdot \\left[\\frac{y^2}{2}\\right]_0^1 = \\frac{4}{2} \\cdot \\frac{1}{2} = 2 \\cdot \\frac{1}{2} = 1$.',
    difficulty: "O'rta"
  },
  {
    id: 'm10-q5',
    moduleId: 'karrali-integrallar',
    moduleName: '10-modul: Karrali va egri chiziqli integrallar',
    question: 'Ikki karrali integralda dekart koordinatalaridan qutb koordinatalariga ($x = r\\cos\\varphi, y = r\\sin\\varphi$) o\'tishda yuz elementi $dx dy$ nimaga almashadi (Yakobian)?',
    options: [
      '$r \\, dr d\\varphi$',
      '$dr d\\varphi$',
      '$r^2 \\, dr d\\varphi$',
      '$\\frac{1}{r} \\, dr d\\varphi$'
    ],
    correctIndex: 0,
    explanation: 'O\'tish yakobiani $J = r$ bo\'ladi. Shuning uchun maydon differensiali $dx dy = r \\, dr d\\varphi$ ga teng.',
    difficulty: 'Oson'
  },
  {
    id: 'm10-q6',
    moduleId: 'karrali-integrallar',
    moduleName: '10-modul: Karrali va egri chiziqli integrallar',
    question: 'Grin formulasi qaysi ikki integral turini o\'zaro bog\'laydi?',
    options: [
      'Yopiq kontur bo\'yicha egri chiziqli integral va ikki karrali integralni',
      'Aniq va noaniq integralni',
      'Uch karrali integral va sirt integralini',
      'Sonli qator va xosmas integralni'
    ],
    correctIndex: 0,
    explanation: 'Grin formulasi tekislikdagi yopiq kontur bo\'yicha 2-tur egri chiziqli integralni shu kontur bilan chegaralangan soha bo\'yicha ikki karrali integralga o\'tkazadi: $\\oint_L Pdx + Qdy = \\iint_D (\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y})dx dy$.',
    difficulty: "O'rta"
  },
  {
    id: 'm10-q7',
    moduleId: 'karrali-integrallar',
    moduleName: '10-modul: Karrali va egri chiziqli integrallar',
    question: '$y = f(x)$ egri chiziqning $a \\le x \\le b$ dagi yoy uzunligi $L$ qaysi formula bilan topiladi?',
    options: [
      '$L = \\int_a^b \\sqrt{1 + (f\'(x))^2} \\, dx$',
      '$L = \\int_a^b f(x) \\, dx$',
      '$L = \\int_a^b (f\'(x))^2 \\, dx$',
      '$L = \\int_a^b \\sqrt{1 + f(x)} \\, dx$'
    ],
    correctIndex: 0,
    explanation: 'Yoy differensiali $dl = \\sqrt{dx^2 + dy^2} = \\sqrt{1 + (y\')^2} dx$. Shuning uchun $L = \\int_a^b \\sqrt{1 + (f\'(x))^2} dx$.',
    difficulty: 'Murakkab'
  },
  {
    id: 'm11-q4',
    moduleId: 'qatorlar',
    moduleName: '11-modul: Qatorlar',
    question: '$\\sum_{n=1}^{\\infty} \\frac{1}{2^n}$ cheksiz geometrik qatorning yig\'indisini toping:',
    options: [
      '$1$',
      '$2$',
      '$\\frac{1}{2}$',
      'Uzoqlashadi'
    ],
    correctIndex: 0,
    explanation: 'Birinchi hadi $b_1 = 1/2$, maxraji $q = 1/2 < 1$. Cheksiz kamayuvchi geometrik progressiya yig\'indisi: $S = \\frac{b_1}{1 - q} = \\frac{1/2}{1 - 1/2} = 1$.',
    difficulty: 'Oson'
  },
  {
    id: 'm11-q5',
    moduleId: 'qatorlar',
    moduleName: '11-modul: Qatorlar',
    question: 'Musbat hadli qatorlar uchun Dalamber alomatida agar $D = \\lim_{n\\to\\infty} \\frac{a_{n+1}}{a_n} < 1$ bo\'lsa:',
    options: [
      'Qator yaqinlashuvchi bo\'ladi',
      'Qator uzoqlashuvchi bo\'ladi',
      'Alomat javob bermaydi',
      'Qator tebranuvchi bo\'ladi'
    ],
    correctIndex: 0,
    explanation: 'Dalamber alomatiga ko\'ra: agar $D < 1$ bo\'lsa qator yaqinlashadi, $D > 1$ bo\'lsa uzoqlashadi, $D = 1$ bo\'lsa alomat orqali xulosa chiqarib bo\'lmaydi.',
    difficulty: 'Oson'
  },
  {
    id: 'm11-q6',
    moduleId: 'qatorlar',
    moduleName: '11-modul: Qatorlar',
    question: '$\\sum_{n=1}^\\infty (-1)^{n-1} \\frac{1}{n} = 1 - \\frac{1}{2} + \\frac{1}{3} - \\dots$ qatori haqida qaysi tasdiq to\'g\'ri?',
    options: [
      'Shartli yaqinlashuvchi (Leybnits alomatiga ko\'ra)',
      'Mutlaq yaqinlashuvchi',
      'Uzoqlashuvchi',
      'Yig\'indisi nolga teng'
    ],
    correctIndex: 0,
    explanation: 'Leybnits alomati shartlari ($a_n \\to 0$, kamayuvchi) bajarilgani uchun qator yaqinlashadi. Lekin modullaridan tuzilgan garmonik qator $\\sum \\frac{1}{n}$ uzoqlashadi. Demak, bu qator shartli yaqinlashuvchidir (yig\'indisi $\\ln 2$).',
    difficulty: "O'rta"
  },
  {
    id: 'm11-q7',
    moduleId: 'qatorlar',
    moduleName: '11-modul: Qatorlar',
    question: '$\\sum_{n=1}^\\infty \\frac{x^n}{n \\cdot 3^n}$ darajali qatorning yaqinlashish radiusi $R$ nimaga teng?',
    options: [
      '$R = 3$',
      '$R = 1$',
      '$R = \\frac{1}{3}$',
      '$R = \\infty$'
    ],
    correctIndex: 0,
    explanation: 'Koshi-Adamar yoki Dalamber formulasi: $R = \\lim_{n\\to\\infty} \\left|\\frac{a_n}{a_{n+1}}\\right| = \\lim_{n\\to\\infty} \\frac{3^{n+1}(n+1)}{3^n \\cdot n} = 3 \\lim \\frac{n+1}{n} = 3$.',
    difficulty: 'Murakkab'
  },
  {
    id: 'm12-q4',
    moduleId: 'differensial-tenglamalar',
    moduleName: '12-modul: Differensial tenglamalar',
    question: '$y\' = 3x^2$ differensial tenglamaning $y(0) = 5$ shartni qanoatlantiruvchi xususiy yechimini toping:',
    options: [
      '$y = x^3 + 5$',
      '$y = x^3$',
      '$y = 6x + 5$',
      '$y = x^3 - 5$'
    ],
    correctIndex: 0,
    explanation: 'Integrallaymiz: $y = \\int 3x^2 dx = x^3 + C$. Boshlang\'ich shart: $y(0) = 0^3 + C = 5 \\implies C = 5$. Demak, $y = x^3 + 5$.',
    difficulty: 'Oson'
  },
  {
    id: 'm12-q5',
    moduleId: 'differensial-tenglamalar',
    moduleName: '12-modul: Differensial tenglamalar',
    question: '$y\'\' - 9y = 0$ ikkinchi tartibli bir jinsli chiziqli differensial tenglamaning umumiy yechimini ko\'rsating:',
    options: [
      '$y = C_1 e^{3x} + C_2 e^{-3x}$',
      '$y = C_1 \\cos(3x) + C_2 \\sin(3x)$',
      '$y = (C_1 + C_2 x)e^{3x}$',
      '$y = C_1 e^{9x} + C_2$'
    ],
    correctIndex: 0,
    explanation: 'Xarakteristik tenglama: $k^2 - 9 = 0 \\implies k = \\pm 3$. Haqiqiy va har xil ildizlar bo\'lgani sababli: $y(x) = C_1 e^{3x} + C_2 e^{-3x}$.',
    difficulty: "O'rta"
  },
  {
    id: 'm12-q6',
    moduleId: 'differensial-tenglamalar',
    moduleName: '12-modul: Differensial tenglamalar',
    question: '$y\'\' + 9y = 0$ tenglamaning umumiy yechimi qanday ko\'rinishda bo\'ladi?',
    options: [
      '$y = C_1 \\cos(3x) + C_2 \\sin(3x)$',
      '$y = C_1 e^{3x} + C_2 e^{-3x}$',
      '$y = C_1 e^{3x} \\cos(3x)$',
      '$y = (C_1 + C_2 x)\\cos(3x)$'
    ],
    correctIndex: 0,
    explanation: 'Xarakteristik tenglama: $k^2 + 9 = 0 \\implies k = \\pm 3i$ (sof mavhum ildizlar). Shuning uchun yechim: $y = C_1 \\cos(3x) + C_2 \\sin(3x)$.',
    difficulty: "O'rta"
  },
  {
    id: 'm12-q7',
    moduleId: 'differensial-tenglamalar',
    moduleName: '12-modul: Differensial tenglamalar',
    question: '$y\' + P(x)y = Q(x)$ ko\'rinishidagi tenglama qanday ataladi?',
    options: [
      '1-tartibli chiziqli differensial tenglama',
      'Bernulli tenglamasi',
      'To\'liq differensialli tenglama',
      'Bir jinsli tenglama'
    ],
    correctIndex: 0,
    explanation: 'Bu 1-tartibli bir jinslimas chiziqli differensial tenglamaning kanonik ko\'rinishidir. U Bernulli usuli ($y = uv$) yoki Lagranj usuli bilan yechiladi.',
    difficulty: 'Oson'
  },
  {
    id: 'm13-q4',
    moduleId: 'ehtimollar-nazariyasi',
    moduleName: '13-modul: Ehtimollar nazariyasi',
    question: 'Ikkita standart o\'yin soqqasi tashlanganda ochkolar yig\'indisi 7 ga teng bo\'lishi ehtimolligini toping:',
    options: [
      '$\\frac{1}{6}$',
      '$\\frac{1}{12}$',
      '$\\frac{7}{36}$',
      '$\\frac{5}{36}$'
    ],
    correctIndex: 0,
    explanation: 'Barcha mumkin bo\'lgan natijalar soni $n = 6 \\times 6 = 36$. Yig\'indi 7 bo\'ladigan qulay juftliklar: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) — jami 6 ta. $P = \\frac{6}{36} = \\frac{1}{6}$.',
    difficulty: 'Oson'
  },
  {
    id: 'm13-q5',
    moduleId: 'ehtimollar-nazariyasi',
    moduleName: '13-modul: Ehtimollar nazariyasi',
    question: 'Agar $A$ va $B$ erkli (bog\'liq bo\'lmagan) hodisalar bo\'lib, $P(A) = 0.4$ va $P(B) = 0.5$ bo\'lsa, ularning bir vaqtda ro\'y berish ehtimolligi $P(A \\cap B)$ nimaga teng?',
    options: [
      '$0.20$',
      '$0.90$',
      '$0.10$',
      '$0.50$'
    ],
    correctIndex: 0,
    explanation: 'Erkli hodisalar uchun ehtimolliklarni ko\'paytirish teoremasi: $P(A \\cap B) = P(A) \\cdot P(B) = 0.4 \\cdot 0.5 = 0.20$.',
    difficulty: 'Oson'
  },
  {
    id: 'm13-q6',
    moduleId: 'ehtimollar-nazariyasi',
    moduleName: '13-modul: Ehtimollar nazariyasi',
    question: 'Tasodifiy miqdor $X$ quyidagi taqsimot qonuniga ega: $X = 1$ ($p = 0.3$), $X = 2$ ($p = 0.5$), $X = 3$ ($p = 0.2$). Uning matematik kutilmasi $M(X)$ ni hisoblang:',
    options: [
      '$1.9$',
      '$2.0$',
      '$1.8$',
      '$2.2$'
    ],
    correctIndex: 0,
    explanation: 'Diskret tasodifiy miqdor matematik kutilmasi: $M(X) = \\sum x_i p_i = 1\\cdot 0.3 + 2\\cdot 0.5 + 3\\cdot 0.2 = 0.3 + 1.0 + 0.6 = 1.9$.',
    difficulty: "O'rta"
  },
  {
    id: 'm13-q7',
    moduleId: 'ehtimollar-nazariyasi',
    moduleName: '13-modul: Ehtimollar nazariyasi',
    question: 'Bernulli formulasida $n$ ta erkli sinovda hodisaning roppa-rosa $k$ marta ro\'y berish ehtimolligi $P_n(k)$ qanday ifodalanadi?',
    options: [
      '$P_n(k) = C_n^k p^k q^{n-k}$',
      '$P_n(k) = p^k q^{n-k}$',
      '$P_n(k) = \\frac{p^k}{k!} e^{-p}$',
      '$P_n(k) = C_n^k p^{n-k} q^k$'
    ],
    correctIndex: 0,
    explanation: 'Klassik Bernulli formulasi: $P_n(k) = C_n^k p^k (1 - p)^{n-k} = C_n^k p^k q^{n-k}$, bu yerda $C_n^k = \\frac{n!}{k!(n-k)!}$.',
    difficulty: 'Murakkab'
  },
  {
    id: 'm14-q4',
    moduleId: 'matematik-statistika',
    moduleName: '14-modul: Matematik statistika',
    question: '$2, 4, 4, 6, 9$ tanlanmaning o\'rta arifmetik qiymati $\\bar{x}$ ni toping:',
    options: [
      '$5$',
      '$4$',
      '$6$',
      '$4.5$'
    ],
    correctIndex: 0,
    explanation: 'O\'rta arifmetik qiymat: $\\bar{x} = \\frac{2 + 4 + 4 + 6 + 9}{5} = \\frac{25}{5} = 5$.',
    difficulty: 'Oson'
  },
  {
    id: 'm14-q5',
    moduleId: 'matematik-statistika',
    moduleName: '14-modul: Matematik statistika',
    question: '$3, 7, 8, 12, 15$ saralangan variatsion qatorning medianasini toping:',
    options: [
      '$8$',
      '$7$',
      '$9$',
      '$12$'
    ],
    correctIndex: 0,
    explanation: 'Elementlar soni toq ($n = 5$). Mediana qatorning qoq o\'rtasida turgan uchinchi elementga teng: $Me = 8$.',
    difficulty: 'Oson'
  },
  {
    id: 'm14-q6',
    moduleId: 'matematik-statistika',
    moduleName: '14-modul: Matematik statistika',
    question: 'Normal taqsimotda «uch sigma qoidasi»ga ($3\\sigma$) ko\'ra, tasodifiy miqdorning $[\\mu - 3\\sigma, \\mu + 3\\sigma]$ oraliqqa tushish ehtimolligi taxminan qanchaga teng?',
    options: [
      '$99.7\\%$',
      '$95.4\\%$',
      '$68.3\\%$',
      '$90.0\\%$'
    ],
    correctIndex: 0,
    explanation: 'Normal Gauss taqsimotida: $1\\sigma \\approx 68.3\\%$, $2\\sigma \\approx 95.4\\%$, va $3\\sigma \\approx 99.73\\%$ kuzatuvlarni qamrab oladi.',
    difficulty: "O'rta"
  },
  {
    id: 'm14-q7',
    moduleId: 'matematik-statistika',
    moduleName: '14-modul: Matematik statistika',
    question: 'Tanlanma dispersiyasi $s^2$ ning siljimagan (unbiased) bahosi nima uchun $n$ ga emas, $n - 1$ ga bo\'linadi?',
    options: [
      'Bessel tuzatmasi: erkinlik darajasi o\'rtacha qiymat hisoblangani uchun 1 taga kamayadi',
      'Hisoblash qulayroq bo\'lishi uchun',
      'Katta sonlar qonuniga zid bo\'lmasligi uchun',
      'Tanlanma faqat musbat sonlardan iborat bo\'lgani uchun'
    ],
    correctIndex: 0,
    explanation: 'Bessel tuzatmasi: tanlanma o\'rtachasi $\\bar{x}$ populyatsiya o\'rtachasiga yaqinroq bo\'lgani sababli, dispersiyani $n$ ga bo\'lish qiymatni past baholaydi (siljitadi). $n - 1$ ga bo\'lish esa siljimagan bahoni ta\'minlaydi.',
    difficulty: 'Murakkab'
  }
];

export interface ExamPreset {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  badgeColor: string;
  description: string;
  filter: (q: QuizQuestion) => boolean;
  questionCount: number;
}

export const EXAM_PRESETS: ExamPreset[] = [
  {
    id: 'oraliq-1',
    title: '🎯 Oraliq Nazorat (1-semestr)',
    subtitle: '1–7 modullar bo\'yicha',
    badge: 'HEMIS Oraliq',
    badgeColor: '#3b82f6',
    description: 'Chiziqli algebra, vektorlar, kompleks sonlar, limitlar va hosila bo\'yicha 1-semestr oraliq nazorati uchun saralangan testlar.',
    filter: (q) => ['maktab-kursi', 'chiziqli-algebra', 'vektorlar-geometriya', 'kompleks-sonlar', 'limitlar', 'funksiyalar-grafiklar', 'hosila'].includes(q.moduleId),
    questionCount: 10
  },
  {
    id: 'oraliq-2',
    title: '🎯 Oraliq Nazorat (2-semestr)',
    subtitle: '8–14 modullar bo\'yicha',
    badge: 'HEMIS Oraliq',
    badgeColor: '#8b5cf6',
    description: 'Integrallar, ko\'p o\'zgaruvchili funksiyalar, qatorlar, differensial tenglamalar va ehtimollar nazariyasi bo\'yicha 2-oraliq testlari.',
    filter: (q) => ['integrallar', 'kop-ozgaruvchili-funksiyalar', 'karrali-integrallar', 'qatorlar', 'differensial-tenglamalar', 'ehtimollar-nazariyasi', 'matematik-statistika'].includes(q.moduleId),
    questionCount: 10
  },
  {
    id: 'yakuniy',
    title: '🏆 Yakuniy Nazorat (To\'liq Kurs)',
    subtitle: 'Barcha 14 ta moduldan',
    badge: 'HEMIS Yakuniy',
    badgeColor: '#10b981',
    description: 'Barcha modullarni qamrab oluvchi to\'liq yakuniy imtihon simulyatori. 15 ta tasodifiy savol va avtomatik HEMIS 100 ballik baholash shkalasi.',
    filter: () => true,
    questionCount: 15
  },
  {
    id: 'blitz-5',
    title: '⚡ Tezkor Blitz (5 savol)',
    subtitle: '5 daqiqalik ekspress test',
    badge: 'Ekspress',
    badgeColor: '#f59e0b',
    description: 'Bilimingizni sinash uchun tezkor 5 ta savol. Qisqa tanaffuslarda takrorlash uchun juda qulay.',
    filter: () => true,
    questionCount: 5
  }
];
