export interface ModuleInfo {
  id: number;
  slug: string;
  title: string;
  description: string;
  isActive: boolean;
  badge?: string;
  estimatedLessons?: number;
  topics: string[];
}

export const MODULES: ModuleInfo[] = [
  {
    id: 1,
    slug: 'maktab-kursi',
    title: '1. Maktab kursini takrorlash',
    description: "Elementar algebra, intervallar usuli, progressiyalar, modul va irratsional tenglamalar, trigonometriya, logarifm, Nyuton binomi hamda to'plamlar mantiqi.",
    isActive: true,
    estimatedLessons: 10,
    topics: [
      'Algebraik ayniyatlar va qisqa ko\'paytirish',
      'Tenglamalar va intervallar usuli',
      'Trigonometriya asoslari',
      'Ko\'rsatkichli va logarifmik ifodalar',
      'To\'plamlar nazariyasi va matematik mantiq',
      'Arifmetik va geometrik progressiyalar, cheksiz kamayuvchi progressiya',
      'Modul (absolyut qiymat) qatnashgan tenglama va tengsizliklar',
      'Irratsional tenglamalar va tengsizliklarni yechish usullari',
      'Trigonometrik tenglamalar va tengsizliklar: Barcha yechish usullari',
      'Nyuton binomi, Paskal uchburchagi va binomial koeffitsiyentlar'
    ]
  },
  {
    id: 2,
    slug: 'chiziqli-algebra',
    title: '2. Chiziqli algebra',
    description: "Matritsalar, determinantlar, Laplas teoremasi, FYS, chiziqli fazolar, kvadratik formalar, simpleks, transport masalalari, Gorner sxemasi va xos vektorlar.",
    isActive: true,
    estimatedLessons: 15,
    topics: [
      'Matritsalar va ular ustida amallar',
      'Determinantlar va xossalari',
      'Teskari matritsa va matritsa rangi',
      'Chiziqli tenglamalar sistemalari (Kramer)',
      'Gauss usuli (Amaliy to\'liq qo\'llanma)',
      'Minor, algebraik to\'ldiruvchi va Laplas teoremasi',
      'Bir jinsli tenglamalar va FYS',
      'Chiziqli fazo, bazis va operatorlar',
      'Kvadratik formalar va Silvestr mezoni',
      'Chiziqli dasturlash va Simpleks usuli',
      'Transport masalasi va Potensiallar usuli',
      'Chiziqli algebraning geometrik mohiyati va adabiyotlar',
      'Matritsaning xos sonlari va xos vektorlari',
      'Gorner sxemasi va ko\'phad ildizlari',
      'Matritsali tenglamalar va Gauss-Jordan usuli'
    ]
  },
  {
    id: 3,
    slug: 'vektorlar-geometriya',
    title: '3. Vektorlar va analitik geometriya',
    description: "Fazoda vektorlar, skalyar, vektor va aralash ko'paytmalar, kesmani bo'lish, tetraedr balandligi, qutb koordinatalari va ikkinchi tartibli sirtlar.",
    isActive: true,
    estimatedLessons: 9,
    topics: [
      'Vektorlar va chiziqli amallar',
      'Skalyar ko\'paytma va burchak',
      'Vektor va aralash ko\'paytma',
      'Tekislikdagi to\'g\'ri chiziq',
      'Fazodagi tekislik va to\'g\'ri chiziq',
      'Ikkinchi tartibli chiziqlar va fazodagi sirtlar',
      'Kesmani bo\'lish va tetraedr balandligi',
      'Qutb koordinatalari va ajoyib egri chiziqlar',
      'Fazoda to\'g\'ri chiziq va tekislik: Proyeksiyalar va kesishish masalalari'
    ]
  },
  {
    id: 4,
    slug: 'kompleks-sonlar',
    title: '4. Kompleks sonlar va TFKP',
    description: "Algebraik, trigonometrik va Eyler shakllari, Muavr formulasi, TFKP, Koshi-Riman shartlari, garmonik funksiyalar va Laplas almashtirishi.",
    isActive: true,
    estimatedLessons: 9,
    topics: [
      'Kompleks son tushunchasi va algebraik shakl',
      'Kompleks sonlar ustida amallar',
      'Trigonometrik va ko\'rsatkichli (Eyler) shakl',
      'Muavr formulasi va ildiz chiqarish',
      'TFKP: Koshi-Riman shartlari va kompleks integrallar',
      'Operatsion hisob va Laplas almashtirishi',
      'Garmonik funksiyalar va analitik funksiyani tiklash',
      'Differensial tenglamalarni Laplas bilan yechish',
      'Loran qatori, maxsus nuqtalar va chegirmalar nazariyasi (Residues)'
    ]
  },
  {
    id: 5,
    slug: 'limitlar',
    title: '5. Limitlar va uzluksizlik',
    description: "Ketma-ketlik va funksiya limiti, Koshi va Geyne ta'riflari, bir tomonlama limitlar, uzilish nuqtalari, 0/0, ∞/∞, 1^∞, 0·∞ va irratsional limitlar.",
    isActive: true,
    estimatedLessons: 10,
    topics: [
      'Limit ta\'rifi va mohiyati',
      'Limit hisoblash usullari',
      '0/0 va cheksiz/cheksiz aniqmasliklar',
      'Ajoyib limitlar',
      'Cheksiz kichik funksiyalar',
      'Bir tomonlama limitlar va uzilish nuqtalari',
      'Ketma-ketlik limiti va Koshi ta\'rifi',
      '1^∞ ko\'rinishidagi aniqmasliklar va ikkinchi ajoyib limit amaliyoti',
      'Irratsional ifodalar limitlari: Qo\'shmasiga ko\'paytirish va almashtirish',
      'Darajali-ko\'rsatkichli va logarifmik funksiyalar limitlari ([0·∞], [0^0], [∞^0])'
    ]
  },
  {
    id: 6,
    slug: 'funksiyalar-grafiklar',
    title: '6. Funksiyalar va grafiklar',
    description: "Aniqlanish sohasi, juft-toqlik, davriylik, teskari va giperbolik funksiyalar, geometrik almashtirishlar, asimptotalar, qavariqlik-botiqlik va 7 bosqichli tekshirish.",
    isActive: true,
    estimatedLessons: 10,
    topics: [
      'Elementar funksiyalar',
      'Aniqlanish va qiymatlar sohasi',
      'Juft, toq va davriy funksiyalar',
      'Funksiyani tekshirish va grafik yasash',
      'Funksiyani to\'liq 7 bosqichda tekshirish sxemasi',
      'Amaliy ekstremum va optimallashtirish masalalari',
      'Teskari funksiya, superpozitsiya va giperbolik funksiyalar (sh x, ch x, th x)',
      'Funksiya grafigini elementar geometrik almashtirishlar yordamida yasash',
      'Egri chiziq asimptotalari: Vertikal, gorizontal va og\'ma asimptotalar',
      'Funksiya grafigining qavariqligi, botiqligi va egilish (bukilish) nuqtalari'
    ]
  },
  {
    id: 7,
    slug: 'hosila',
    title: '7. Hosila va differensial',
    description: "Hosila ta'rifi, differensiallash qoidalari, murakkab, parametrik, oshkormas va logarifmik hosilalar, urinma va normal, Roll-Lagranj-Koshi teoremalari va Lopital.",
    isActive: true,
    estimatedLessons: 10,
    topics: [
      'Hosila ta\'rifi va geometrik ma\'nosi',
      'Differensiallash qoidalari va jadvali',
      'Murakkab funksiya hosilasi',
      'Yuqori tartibli hosilalar va differensial',
      'Lopital qoidasi',
      'Parametrik va oshkormas funksiya hosilalari',
      'Hosila ta\'rifi orqali chiqarish va Nyuton-Rafson iteratsiyasi',
      'Logarifmik differensiallash usuli va darajali-ko\'rsatkichli funksiyalar',
      'Urinma va normal tenglamalari, egri chiziqlar burchagi va taqribiy hisoblash',
      'Roll, Lagranj va Koshi teoremalari hamda Teylor formulasi'
    ]
  },
  {
    id: 8,
    slug: 'integrallar',
    title: '8. Aniqmas va aniq integrallar',
    description: "Boshlang'ich funksiya, o'zgaruvchini almashtirish, bo'laklab integrallash, Nyuton-Leybnits, Simpson, ratsional kasrlar, Eyler almashtirishlari va xosmas integrallar.",
    isActive: true,
    estimatedLessons: 9,
    topics: [
      'Boshlang\'ich funksiya va aniqmas integral jadvali',
      'O\'zgaruvchini almashtirish usuli',
      'Bo\'laklab integrallash',
      'Aniq integral va Nyuton-Leybnits formulasi',
      'Taqribiy integrallash: Trapetsiyalar va Simpson usullari',
      'Ratsional kasrlarni integrallash va xosmas integrallar',
      'Irratsional funksiyalar va Eyler almashtirishlari',
      'Xosmas integrallar va ularning yaqinlashish alomatlari',
      'Qutb va parametrik shaklda yuza, yoy uzunligi va hajm'
    ]
  },
  {
    id: 9,
    slug: 'kop-ozgaruvchili-funksiyalar',
    title: '9. Ko\'p o\'zgaruvchili funksiyalar',
    description: "Xususiy hosilalar, Shvars teoremasi, to'liq differensial, Yakobian, urinma tekislik va normal, lokal, shartli va yopiq sohada global ekstremumlar hamda gradient.",
    isActive: true,
    estimatedLessons: 9,
    topics: [
      'Ikki o\'zgaruvchili funksiya va soha',
      'Xususiy hosilalar va Shvars teoremasi',
      'To\'liq differensial va taqribiy hisoblash',
      'Ikki o\'zgaruvchili funksiya ekstremumi',
      'Yo\'nalish bo\'yicha hosila, gradient va shartli ekstremum',
      'Murakkab va oshkormas ko\'p o\'zgaruvchili funksiyalarni differensiallash (Yakobian)',
      'Sirtga o\'tkazilgan urinma tekislik va normal to\'g\'ri chiziq tenglamalari',
      'Yopiq sohada ikki o\'zgaruvchili funksiyaning eng katta va eng kichik qiymati',
      'Uch o\'zgaruvchili funksiyalar, sath sirtlari va ikki o\'zgaruvchili Teylor formulasi'
    ]
  },
  {
    id: 10,
    slug: 'karrali-integrallar',
    title: '10. Karrali, egri chiziqli integrallar va vektor maydonlar',
    description: "Ikki va uch karrali integrallar, egri chiziqli integrallar, Grin formulasi, Gauss-Ostrogradskiy, Stoks teoremalari, potensial va solenoidal maydonlar.",
    isActive: true,
    estimatedLessons: 8,
    topics: [
      'Ikki karrali integral va hisoblash',
      'Qutb koordinatalarida ikki karrali integral',
      'Uch karrali integral, silindrik va sferik',
      'Egri chiziqli integrallar va Grin formulasi',
      'Vektor maydon oqimi, Divergensiya va Gauss-Ostrogradskiy',
      'Vektor maydon sirkulyatsiyasi, Rotor va Stoks formulasi',
      'Vektor maydon potensiali va solenoidal maydonlar',
      'Vektor maydon oqimi va Gauss-Ostrogradskiy formulasi (Sirt integrallari)'
    ]
  },
  {
    id: 11,
    slug: 'qatorlar',
    title: '11. Qatorlar va Fure tahlili',
    description: "Sonli qatorlar, Dalamber va Koshi alomatlari, Leybnits qoidasi, yaqinlashish radiusi va sohasi, Teylor, Makloren, [-l, l] kesmada Fure qatorlari va taqribiy hisoblash.",
    isActive: true,
    estimatedLessons: 10,
    topics: [
      'Sonli qatorlar va yaqinlashish',
      'Musbat hadli qatorlar alomatlari',
      'Ishorasi almashinuvchi qatorlar (Leybnits)',
      'Darajali qatorlar, Teylor va Makloren',
      'Fure qatorlari va trigonometrik yoyilmalar',
      'Qator yig\'indisini hisoblash va teleskopik qatorlar',
      'Qatorlar yordamida taqribiy hisoblash va noelementar integrallar',
      'Darajali qatorning yaqinlashish radiusi, intervali va sohasini topish',
      'Funksiyalarni Teylor va Makloren qatorlariga yoyishning amaliy usullari',
      'Ixtiyoriy [-l, l] kesmada Fure qatorlari hamda juft va toq davom ettirish'
    ]
  },
  {
    id: 12,
    slug: 'differensial-tenglamalar',
    title: '12. Differensial tenglamalar',
    description: "Koshi masalasi, ajraladigan, bir jinsli va chiziqli tenglamalar, Bernulli, Lagranj variatsiyasi, to'liq diff tenglamalar, DTS va Runge-Kutta sonli usullari.",
    isActive: true,
    estimatedLessons: 9,
    topics: [
      'Differensial tenglamalar va Koshi masalasi',
      'O\'zgaruvchilari ajraladigan tenglamalar',
      '1-tartibli chiziqli tenglamalar',
      '2-tartibli o\'zgarmas koeffitsiyentli tenglamalar',
      'Bernulli tenglamasi',
      'Bir jinsli bo\'lmagan tenglamalar va Lagranj variatsiyasi',
      'Bir jinsliga keltiriladigan va to\'liq differensialli tenglamalar',
      'Differensial tenglamalar sistemalari va Eyler usuli',
      'Differensial tenglamalarni sonli yechish: Eyler va Runge-Kutta'
    ]
  },
  {
    id: 13,
    slug: 'ehtimollar-nazariyasi',
    title: '13. Ehtimollar nazariyasi',
    description: "Kombinatorika, klassik va geometrik ehtimollik, Bayes formulasi, Bernulli, tekis, ko'rsatkichli, normal taqsimotlar, ikki o'lchovli miqdorlar va kovariatsiya.",
    isActive: true,
    estimatedLessons: 9,
    topics: [
      'Kombinatorika va klassik ehtimollik',
      'Ehtimollarni qo\'shish va ko\'paytirish qoidalari',
      'Bernulli sxemasi va Puasson formulasi',
      'Tasodifiy miqdorlar va normal taqsimot',
      'Muavr-Laplas teoremalari',
      'Geometrik ehtimollik, uchrashuv masalasi va Byuffon ignasi',
      'To\'liq ehtimollik va Bayes formulalari',
      'Asosiy taqsimot turlari: Tekis, Ko\'rsatkichli, Geometrik va Gipergeometrik',
      'Ikki o\'lchovli tasodifiy miqdorlar, kovariatsiya va korrelyatsiya'
    ]
  },
  {
    id: 14,
    slug: 'matematik-statistika',
    title: '14. Matematik statistika',
    description: "Tanlanma, variatsion qator, gistogramma, ishonchlilik oraliqlari, gipotezalar (Styudent, xi-kvadrat, ANOVA Fisher), chiziqli va nochiziqli regressiya hamda vaqt qatorlari.",
    isActive: true,
    estimatedLessons: 9,
    topics: [
      'Bosh to\'plam, tanlanma va tavsiflar',
      'Statistik baholash va ishonchlilik oraliqlari',
      'Statistik gipotezalarni tekshirish (Styudent, xi-kvadrat)',
      'Variatsion qatorlar, gistogramma va chastotalar poligoni',
      'Chiziqli regressiya, eng kichik kvadratlar usuli va Spirmen korrelyatsiyasi',
      'Pirson xi-kvadrat moslik mezoni va gipotezalarni amaliy tekshirish',
      'Dispersiyalar tahlili (ANOVA) va Fisherning F-mezoni',
      'Nochiziqli regressiya (parabolik, ko\'rsatkichli) va korrelyatsion nisbat',
      'Vaqt qatorlari (Time Series), sirpanuvchi o\'rtachalar va trendni prognozlash'
    ]
  }
];

export function getModuleBySlug(slug: string): ModuleInfo | undefined {
  return MODULES.find(m => m.slug === slug);
}
