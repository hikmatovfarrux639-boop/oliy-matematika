export interface MathTerm {
  id: string;
  uz: string;
  ru: string;
  en: string;
  category: 'algebra' | 'geometriya' | 'analiz' | 'diffur' | 'ehtimollik' | 'boshqa';
  definition: string;
  formula?: string;
  lessonUrl?: string;
}

export const MATH_DICTIONARY: MathTerm[] = [
  {
    id: 'determinant',
    uz: 'Determinant (Aniqlagich)',
    ru: 'Определитель (Детерминант)',
    en: 'Determinant',
    category: 'algebra',
    definition: 'Kvadrat matritsaga mos keluvchi maxsus skalyar son. U matritsa ifodalagan chiziqli akslantirishning hajm o\'zgarish koeffitsiyentini bildiradi. Agar det = 0 bo\'lsa, matritsa teskarilanmaydi.',
    formula: '\\det A = |A| = \\sum_{j=1}^n (-1)^{i+j} a_{ij} M_{ij}',
    lessonUrl: '/dars/chiziqli-algebra/determinantlar'
  },
  {
    id: 'matritsa-rangi',
    uz: 'Matritsa rangi',
    ru: 'Ранг матрицы',
    en: 'Matrix Rank',
    category: 'algebra',
    definition: 'Matritsaning noldan farqli eng yuqori tartibli minorining tartibi, yoki chiziqli erkli qatorlari (ustunlari) ning maksimal soni.',
    formula: '\\operatorname{rank}(A) \\le \\min(m, n)',
    lessonUrl: '/dars/chiziqli-algebra/teskari-matritsa-va-rang'
  },
  {
    id: 'xos-son',
    uz: 'Xos son va xos vektor',
    ru: 'Собственное число и собственный вектор',
    en: 'Eigenvalue and Eigenvector',
    category: 'algebra',
    definition: 'Chiziqli operator ta\'sirida yo\'nalishi o\'zgarmay, faqat ma\'lum bir ko\'paytuvchiga cho\'ziladigan yoki qisqaradigan noldan farqli vektor va unga mos son.',
    formula: 'A\\vec{v} = \\lambda\\vec{v} \\iff \\det(A - \\lambda E) = 0',
    lessonUrl: '/dars/chiziqli-algebra/matritsaning-xos-sonlari-va-xos-vektorlari'
  },
  {
    id: 'teskari-matritsa',
    uz: 'Teskari matritsa',
    ru: 'Обратная матрица',
    en: 'Inverse Matrix',
    category: 'algebra',
    definition: 'Berilgan kvadrat A matritsaga ko\'paytirilganda birlik matritsani hosil qiluvchi matritsa. Faqat determinant nolga teng bo\'lmaganda mavjud.',
    formula: 'A^{-1} = \\frac{1}{\\det A} A^*, \\quad A \\cdot A^{-1} = E',
    lessonUrl: '/dars/chiziqli-algebra/teskari-matritsa-va-rang'
  },
  {
    id: 'fys',
    uz: 'Fundamental yechimlar sistemasi (FYS)',
    ru: 'Фундаментальная система решений (ФСР)',
    en: 'Fundamental System of Solutions',
    category: 'algebra',
    definition: 'Bir jinsli chiziqli tenglamalar sistemasining barcha yechimlari chiziqli kombinatsiyasi orqali ifodalanadigan chiziqli erkli yechimlar bazisi. Yechimlar soni n - rank(A) ga teng.',
    formula: 'k = n - r',
    lessonUrl: '/dars/chiziqli-algebra/bir-jinsli-tenglamalar-fys'
  },
  {
    id: 'gradient',
    uz: 'Gradient',
    ru: 'Градиент',
    en: 'Gradient',
    category: 'analiz',
    definition: 'Skalyar maydonning fazoda eng tez o\'sish yo\'nalishini va o\'sish tezligini ko\'rsatuvchi xususiy hosilalardan tuzilgan vektor.',
    formula: '\\nabla f = \\operatorname{grad} f = \\left( \\frac{\\partial f}{\\partial x}, \\frac{\\partial f}{\\partial y}, \\frac{\\partial f}{\\partial z} \\right)',
    lessonUrl: '/dars/kop-ozgaruvchili-funksiyalar/yonalish-boyicha-hosila-gradient'
  },
  {
    id: 'divergensiya',
    uz: 'Divergensiya',
    ru: 'Дивергенция',
    en: 'Divergence',
    category: 'analiz',
    definition: 'Vektor maydonning berilgan nuqtadagi oqim manbai (istok) yoki oqmasi (stok) quvvatini ifodalovchi skalyar miqdor.',
    formula: '\\operatorname{div} \\vec{F} = \\nabla \\cdot \\vec{F} = \\frac{\\partial P}{\\partial x} + \\frac{\\partial Q}{\\partial y} + \\frac{\\partial R}{\\partial z}',
    lessonUrl: '/dars/karrali-integrallar/vektor-maydon-oqimi-va-gauss-ostrogradskiy'
  },
  {
    id: 'rotor',
    uz: 'Rotor (Uyurma / Curl)',
    ru: 'Ротор (Вихрь)',
    en: 'Curl / Rotor',
    category: 'analiz',
    definition: 'Vektor maydonning berilgan nuqta atrofida aylanish (uyurma) zichligini va aylanish o\'qi yo\'nalishini ifodalovchi vektor.',
    formula: '\\operatorname{rot} \\vec{F} = \\nabla \\times \\vec{F} = \\begin{vmatrix} \\vec{i} & \\vec{j} & \\vec{k} \\\\ \\frac{\\partial}{\\partial x} & \\frac{\\partial}{\\partial y} & \\frac{\\partial}{\\partial z} \\\\ P & Q & R \\end{vmatrix}',
    lessonUrl: '/dars/karrali-integrallar/vektor-maydon-sirkulyatsiyasi-rotor-va-stoks'
  },
  {
    id: 'laplasian',
    uz: 'Laplas operatori (Laplasian)',
    ru: 'Оператор Лапласа (Лапласиан)',
    en: 'Laplace Operator (Laplacian)',
    category: 'analiz',
    definition: 'Gradientning divergensiyasiga teng bo\'lgan 2-tartibli differensial operator. Fizika, issiqlik o\'tkazuvchanlik va elektrostatikada fundamental o\'rin tutadi.',
    formula: '\\Delta f = \\nabla^2 f = \\frac{\\partial^2 f}{\\partial x^2} + \\frac{\\partial^2 f}{\\partial y^2} + \\frac{\\partial^2 f}{\\partial z^2}',
    lessonUrl: '/dars/kompleks-sonlar/garmonik-funksiyalar-va-analitik-funksiyani-tiklash'
  },
  {
    id: 'chegirma',
    uz: 'Chegirma (Vychet / Residue)',
    ru: 'Вычет аналитической функции',
    en: 'Residue',
    category: 'analiz',
    definition: 'Kompleks funksiyaning yakkalangan maxsus nuqtasi atrofidagi Loran qatorida 1/(z - z_0) oldida turgan koeffitsiyent c_{-1}. Kompleks integrallarni hisoblash asosi.',
    formula: '\\operatorname{Res}[f(z), z_0] = \\frac{1}{2\\pi i} \\oint_C f(z) dz = c_{-1}',
    lessonUrl: '/dars/kompleks-sonlar/loran-qatori-va-chegirmalar-nazariyasi'
  },
  {
    id: 'loran-qatori',
    uz: 'Loran qatori',
    ru: 'Ряд Лорана',
    en: 'Laurent Series',
    category: 'analiz',
    definition: 'Analitik funksiyaning maxsus nuqta atrofidagi konsentrik halqada musbat va manfiy butun darajalar bo\'yicha yagona ko\'rinishdagi cheksiz qatorga yoyilmasi.',
    formula: 'f(z) = \\sum_{n=-\\infty}^{+\\infty} c_n (z - z_0)^n',
    lessonUrl: '/dars/kompleks-sonlar/loran-qatori-va-chegirmalar-nazariyasi'
  },
  {
    id: 'vronskian',
    uz: 'Vronskiy determinanti (Vronskian)',
    ru: 'Определитель Вронского (Вронскиан)',
    en: 'Wronskian',
    category: 'diffur',
    definition: 'Differensiallanuvchi funksiyalar va ularning hosilalaridan tuzilgan determinant. Funksiyalarning chiziqli erkli yoki bog\'liqligini aniqlash uchun xizmat qiladi.',
    formula: 'W(y_1, y_2) = \\begin{vmatrix} y_1 & y_2 \\\\ y_1\' & y_2\' \\end{vmatrix} = y_1 y_2\' - y_1\' y_2',
    lessonUrl: '/dars/differensial-tenglamalar/ikkinchi-tartibli-chiziqli-differensial-tenglamalar'
  },
  {
    id: 'skalyar-kopaytma',
    uz: 'Skalyar ko\'paytma',
    ru: 'Скалярное произведение',
    en: 'Dot Product (Scalar Product)',
    category: 'geometriya',
    definition: 'Ikki vektor uzunliklari va ular orasidagi burchak kosinusi ko\'paytmasiga teng bo\'lgan son (skalyar). Agar vektorlar perpendikulyar bo\'lsa, u nolga teng.',
    formula: '\\vec{a} \\cdot \\vec{b} = |\\vec{a}||\\vec{b}|\\cos\\varphi = x_1 x_2 + y_1 y_2 + z_1 z_2',
    lessonUrl: '/dars/vektorlar-geometriya/skalyar-kopaytma'
  },
  {
    id: 'vektor-kopaytma',
    uz: 'Vektor ko\'paytma',
    ru: 'Векторное произведение',
    en: 'Cross Product (Vector Product)',
    category: 'geometriya',
    definition: 'Ikki vektorga perpendikulyar bo\'lgan, uzunligi ular qurgan parallelogramm yuziga teng bo\'lgan va o\'ng uchlikni tashkil qiluvchi yangi vektor.',
    formula: '\\vec{a} \\times \\vec{b} = \\begin{vmatrix} \\vec{i} & \\vec{j} & \\vec{k} \\\\ x_1 & y_1 & z_1 \\\\ x_2 & y_2 & z_2 \\end{vmatrix}',
    lessonUrl: '/dars/vektorlar-geometriya/vektor-va-aralash-kopaytma'
  },
  {
    id: 'aralash-kopaytma',
    uz: 'Aralash ko\'paytma',
    ru: 'Смешанное произведение',
    en: 'Triple Product (Box Product)',
    category: 'geometriya',
    definition: 'Uchta vektorning skalyar va vektor ko\'paytmasi birikmasi. Geometrik ma\'nosi uchala vektor qurgan parallelepipedning yo\'naltirilgan hajmiga teng.',
    formula: '(\\vec{a}, \\vec{b}, \\vec{c}) = (\\vec{a} \\times \\vec{b}) \\cdot \\vec{c} = \\begin{vmatrix} x_1 & y_1 & z_1 \\\\ x_2 & y_2 & z_2 \\\\ x_3 & y_3 & z_3 \\end{vmatrix}',
    lessonUrl: '/dars/vektorlar-geometriya/vektor-va-aralash-kopaytma'
  },
  {
    id: 'asimptota',
    uz: 'Asimptota',
    ru: 'Асимптота',
    en: 'Asymptote',
    category: 'analiz',
    definition: 'Egri chiziq nuqtasi cheksizlikka intilganda egri chiziq bilan orasidagi masofa nolga intiladigan to\'g\'ri chiziq. Vertikal, gorizontal va og\'ma turlari mavjud.',
    formula: 'y = kx + b, \\quad k = \\lim_{x\\to\\infty}\\frac{f(x)}{x}, \\quad b = \\lim_{x\\to\\infty}(f(x) - kx)',
    lessonUrl: '/dars/funksiyalar-grafiklar/funksiyani-tekshirish-va-grafik-yasash'
  },
  {
    id: 'dalamber-alomati',
    uz: 'Dalamber alomati',
    ru: 'Признак Даламбера',
    en: 'd\'Alembert Ratio Test',
    category: 'analiz',
    definition: 'Musbat hadli sonli qatorning yaqinlashishini tekshirish alomati: keyingi hadning oldingi hadga nisbati limitini hisoblashga asoslanadi.',
    formula: 'D = \\lim_{n\\to\\infty} \\frac{a_{n+1}}{a_n} < 1 \\implies \\text{yaqinlashadi}',
    lessonUrl: '/dars/qatorlar/musbat-hadli-qatorlar-alomatlari'
  },
  {
    id: 'fure-qatori',
    uz: 'Fure qatori',
    ru: 'Ряд Фурье',
    en: 'Fourier Series',
    category: 'analiz',
    definition: 'Davriy funksiyani garmonik tebranishlar (sinus va kosinuslar) ning cheksiz trigonometrik yig\'indisi shaklida ifodalash.',
    formula: 'f(x) = \\frac{a_0}{2} + \\sum_{n=1}^\\infty [a_n\\cos(nx) + b_n\\sin(nx)]',
    lessonUrl: '/dars/qatorlar/fure-qatori'
  },
  {
    id: 'bayes-formulasi',
    uz: 'Bayes formulasi',
    ru: 'Формула Байеса',
    en: 'Bayes\' Theorem',
    category: 'ehtimollik',
    definition: 'Hodisa sodir bo\'lganligi ma\'lum bo\'lgandan so\'ng, unga sabab bo\'lgan gipotezalarning aprior ehtimolliklarini yangilab, aposterior ehtimollikka aylantirish formulasi.',
    formula: 'P(H_k | A) = \\frac{P(H_k)P(A | H_k)}{\\sum_{i=1}^n P(H_i)P(A | H_i)}',
    lessonUrl: '/dars/ehtimollar-nazariyasi/toliq-ehtimollik-va-bayes-formulalari'
  },
  {
    id: 'matematik-kutilma',
    uz: 'Matematik kutilma',
    ru: 'Математическое ожидание',
    en: 'Expected Value (Mean)',
    category: 'ehtimollik',
    definition: 'Tasodifiy miqdor qabul qilishi mumkin bo\'lgan barcha qiymatlarining ularning mos ehtimolliklariga tortilgan o\'rtacha qiymati (og\'irlik markazi).',
    formula: 'M(X) = \\mathbb{E}[X] = \\sum x_i p_i \\quad \\text{yoki} \\quad \\int_{-\\infty}^{+\\infty} x f(x) dx',
    lessonUrl: '/dars/ehtimollar-nazariyasi/tasodifiy-miqdorlar-va-taqsimot'
  },
  {
    id: 'dispersiya',
    uz: 'Dispersiya va Standart og\'ish',
    ru: 'Дисперсия и стандартное отклонение',
    en: 'Variance and Standard Deviation',
    category: 'ehtimollik',
    definition: 'Tasodifiy miqdor qiymatlarining uning o\'rtacha qiymati (matematik kutilmasi) atrofida qanchalik tarqoqligini ifodalovchi ko\'rsatkich.',
    formula: 'D(X) = \\sigma^2 = M[(X - M(X))^2] = M(X^2) - [M(X)]^2',
    lessonUrl: '/dars/ehtimollar-nazariyasi/tasodifiy-miqdorlar-va-taqsimot'
  },
  {
    id: 'normal-taqsimot',
    uz: 'Normal taqsimot (Gauss taqsimoti)',
    ru: 'Нормальное распределение (Гаусса)',
    en: 'Normal Distribution (Gaussian)',
    category: 'ehtimollik',
    definition: 'Tabiatda va texnikada eng ko\'p uchraydigan qo\'ng\'iroqsimon simmetrik uzluksiz taqsimot. Markaziy limit teorema asosida vujudga keladi.',
    formula: 'f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-\\frac{(x - \\mu)^2}{2\\sigma^2}}',
    lessonUrl: '/dars/ehtimollar-nazariyasi/tasodifiy-miqdorlar-va-taqsimot'
  },
  {
    id: 'xi-kvadrat',
    uz: 'Pirson xi-kvadrat (\\chi^2) mezoni',
    ru: 'Критерий согласия Пирсона (Хи-квадрат)',
    en: 'Chi-Square Goodness-of-Fit Test',
    category: 'ehtimollik',
    definition: 'Empirik olingan chastotalarning nazariy kutilgan chastotalarga mosligini tekshirish uchun ishlatiladigan eng asosiy nometrik statistik mezon.',
    formula: '\\chi^2 = \\sum_{i=1}^k \\frac{(n_i - n\'_i)^2}{n\'_i}',
    lessonUrl: '/dars/matematik-statistika/pirson-xi-kvadrat-va-moslik-kriteriylari'
  },
  {
    id: 'kovariatsiya',
    uz: 'Kovariatsiya va Korrelyatsiya',
    ru: 'Ковариация и корреляция',
    en: 'Covariance and Correlation',
    category: 'ehtimollik',
    definition: 'Ikkita tasodifiy miqdorning o\'zaro birgalikda o\'zgarish darajasi va chiziqli bog\'liqlik yo\'nalishi (musbat, manfiy yoki nol).',
    formula: 'r_{xy} = \\frac{\\operatorname{cov}(X, Y)}{\\sigma_X \\sigma_Y} = \\frac{\\sum(x - \\bar{x})(y - \\bar{y})}{\\sqrt{\\sum(x - \\bar{x})^2 \\sum(y - \\bar{y})^2}}',
    lessonUrl: '/dars/ehtimollar-nazariyasi/ikki-olchovli-tasodifiy-miqdorlar-va-kovariatsiya'
  },
  {
    id: 'izomorfizm',
    uz: 'Izomorfizm',
    ru: 'Изоморфизм',
    en: 'Isomorphism',
    category: 'algebra',
    definition: 'Ikki algebraik struktura (masalan, chiziqli fazolar) o\'rtasidagi barcha amallarni (qo\'shish, songa ko\'paytirish) saqlaydigan o\'zaro bir qiymatli (biyektiv) moslik.',
    formula: 'V \\cong W \\iff \\dim V = \\dim W',
    lessonUrl: '/dars/chiziqli-algebra/chiziqli-fazo-bazis-operatorlar'
  }
];
