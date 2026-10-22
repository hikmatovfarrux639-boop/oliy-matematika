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
