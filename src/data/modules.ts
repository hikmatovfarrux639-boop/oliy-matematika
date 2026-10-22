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
    description: "Elementar algebra, qisqa ko'paytirish, intervallar usuli, trigonometriya, ko'rsatkichli va logarifmik ifodalar.",
    isActive: true,
    estimatedLessons: 4,
    topics: ['Algebraik ayniyatlar va qisqa ko\'paytirish', 'Tenglamalar va intervallar usuli', 'Trigonometriya asoslari', 'Ko\'rsatkichli va logarifmik ifodalar']
  },
  {
    id: 2,
    slug: 'chiziqli-algebra',
    title: '2. Chiziqli algebra',
    description: "Matritsalar, determinantlar, Laplas teoremasi, FYS, chiziqli fazolar, kvadratik formalar, simpleks va transport masalalari (TATU to'liq dasturi).",
    isActive: true,
    estimatedLessons: 11,
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
      'Transport masalasi va Potensiallar usuli'
    ]
  },
  {
    id: 3,
    slug: 'vektorlar-geometriya',
    title: '3. Vektorlar va analitik geometriya',
    description: "Fazoda vektorlar, skalyar, vektor va aralash ko'paytmalar, to'g'ri chiziq va tekislik, hamda ikkinchi tartibli sirtlar.",
    isActive: true,
    estimatedLessons: 6,
    topics: [
      'Vektorlar va chiziqli amallar',
      'Skalyar ko\'paytma va burchak',
      'Vektor va aralash ko\'paytma',
      'Tekislikdagi to\'g\'ri chiziq',
      'Fazodagi tekislik va to\'g\'ri chiziq',
      'Ikkinchi tartibli chiziqlar va fazodagi sirtlar'
    ]
  },
  {
    id: 4,
    slug: 'kompleks-sonlar',
    title: '4. Kompleks sonlar',
    description: "Algebraik, trigonometrik va ko'rsatkichli (Eyler) shakllar, Muavr formulasi va n-darajali ildiz chiqarish.",
    isActive: true,
    estimatedLessons: 4,
    topics: ['Kompleks son tushunchasi va algebraik shakl', 'Kompleks sonlar ustida amallar', 'Trigonometrik va ko\'rsatkichli (Eyler) shakl', 'Muavr formulasi va ildiz chiqarish']
  },
  {
    id: 5,
    slug: 'limitlar',
    title: '5. Limitlar',
    description: "Ketma-ketlik va funksiya limiti, 0/0 va cheksiz/cheksiz aniqmasliklar, ajoyib limitlar va cheksiz kichik miqdorlar.",
    isActive: true,
    estimatedLessons: 5,
    topics: ['Limit ta\'rifi va mohiyati', 'Limit hisoblash usullari', '0/0 va cheksiz/cheksiz aniqmasliklar', 'Ajoyib limitlar', 'Cheksiz kichik funksiyalar']
  },
  {
    id: 6,
    slug: 'funksiyalar-grafiklar',
    title: '6. Funksiyalar va grafiklar',
    description: "Funksiya tushunchasi, aniqlanish va qiymatlar sohasi, juft-toqlik, davriylik va to'liq tekshirib grafik yasash.",
    isActive: true,
    estimatedLessons: 4,
    topics: ['Elementar funksiyalar', 'Aniqlanish va qiymatlar sohasi', 'Juft, toq va davriy funksiyalar', 'Funksiyani tekshirish va grafik yasash']
  },
  {
    id: 7,
    slug: 'hosila',
    title: '7. Hosila',
    description: "Hosila ta'rifi, fizik va geometrik ma'nosi, differensiallash qoidalari, murakkab funksiya va Lopital qoidasi.",
    isActive: true,
    estimatedLessons: 5,
    topics: ['Hosila ta\'rifi va geometrik ma\'nosi', 'Differensiallash qoidalari va jadvali', 'Murakkab funksiya hosilasi', 'Yuqori tartibli hosilalar va differensial', 'Lopital qoidasi']
  },
  {
    id: 8,
    slug: 'integrallar',
    title: '8. Integrallar',
    description: "Boshlang'ich funksiya, aniqmas integral jadvali, o'zgaruvchini almashtirish, bo'laklab integrallash va Nyuton-Leybnits formulasi.",
    isActive: true,
    estimatedLessons: 4,
    topics: ['Boshlang\'ich funksiya va aniqmas integral jadvali', 'O\'zgaruvchini almashtirish usuli', 'Bo\'laklab integrallash', 'Aniq integral va Nyuton-Leybnits formulasi']
  },
  {
    id: 9,
    slug: 'kop-ozgaruvchili-funksiyalar',
    title: '9. Ko\'p o\'zgaruvchili funksiyalar',
    description: "Ikki o'zgaruvchili funksiyalar, xususiy hosilalar, Shvars teoremasi, to'liq differensial va lokal ekstremumlar.",
    isActive: true,
    estimatedLessons: 4,
    topics: ['Ikki o\'zgaruvchili funksiya va soha', 'Xususiy hosilalar va Shvars teoremasi', 'To\'liq differensial va taqribiy hisoblash', 'Ikki o\'zgaruvchili funksiya ekstremumi']
  },
  {
    id: 10,
    slug: 'karrali-integrallar',
    title: '10. Karrali va egri chiziqli integrallar',
    description: "Ikki karrali integral, qutb koordinatalariga o'tish, Puasson-Gauss integrali, uch karrali integral va sferik koordinatalar.",
    isActive: true,
    estimatedLessons: 3,
    topics: ['Ikki karrali integral va hisoblash', 'Qutb koordinatalarida ikki karrali integral', 'Uch karrali integral, silindrik va sferik']
  },
  {
    id: 11,
    slug: 'qatorlar',
    title: '11. Qatorlar',
    description: "Sonli qatorlar, Dalamber va Koshi alomatlari, Leybnits alomati, darajali qatorlar, Teylor va Makloren yoyilmalari.",
    isActive: true,
    estimatedLessons: 4,
    topics: ['Sonli qatorlar va yaqinlashish', 'Musbat hadli qatorlar alomatlari', 'Ishorasi almashinuvchi qatorlar (Leybnits)', 'Darajali qatorlar, Teylor va Makloren']
  },
  {
    id: 12,
    slug: 'differensial-tenglamalar',
    title: '12. Differensial tenglamalar',
    description: "Oddiy differensial tenglamalar, Koshi masalasi, ajraladigan va bir jinsli tenglamalar, Bernulli usuli va 2-tartibli chiziqli tenglamalar.",
    isActive: true,
    estimatedLessons: 5,
    topics: ['Differensial tenglamalar va Koshi masalasi', 'O\'zgaruvchilari ajraladigan tenglamalar', '1-tartibli chiziqli tenglamalar', '2-tartibli o\'zgarmas koeffitsiyentli tenglamalar', 'Bernulli tenglamasi (Amaliy yechish usullari)']
  },
  {
    id: 13,
    slug: 'ehtimollar-nazariyasi',
    title: '13. Ehtimollar nazariyasi',
    description: "Kombinatorika, klassik ehtimollik, shartli ehtimol, Bayes formulasi, Bernulli sxemasi, Puasson qonuni va normal taqsimot.",
    isActive: true,
    estimatedLessons: 4,
    topics: ['Kombinatorika va klassik ehtimollik', 'Ehtimollarni qo\'shish, ko\'paytirish va Bayes formulasi', 'Bernulli sxemasi va Puasson', 'Tasodifiy miqdorlar va normal taqsimot']
  },
  {
    id: 14,
    slug: 'matematik-statistika',
    title: '14. Matematik statistika',
    description: "Bosh to'plam va tanlanma, variatsion qator, gistogramma, tanlanma o'rtacha va dispersiya, Styudent va xi-kvadrat mezonlari.",
    isActive: true,
    estimatedLessons: 3,
    topics: ['Bosh to\'plam, tanlanma va gistogramma', 'Statistik baholar va ishonchlilik oralig\'i', 'Statistik gipotezalarni tekshirish (Styudent, xi-kvadrat)']
  }
];

export function getModuleBySlug(slug: string): ModuleInfo | undefined {
  return MODULES.find(m => m.slug === slug);
}
