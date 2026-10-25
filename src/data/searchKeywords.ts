// Uzbek Mathematical Search Keywords & Affix Mapping for Pagefind Stemming
export const MODULE_KEYWORDS: Record<string, string[]> = {
  'chiziqli-algebra': [
    'matritsa', 'matritsalar', 'matritsani', 'matritsaga',
    'determinant', 'determinantlar', 'determinantni', 'hisoblash',
    'teskari matritsa', 'matritsa rangi', 'rangi', 'pog\'onasimon',
    'gauss', 'gauss usuli', 'kramer', 'kramer qoidasi',
    'chiziqli tenglamalar', 'sistema', 'sistemasi', 'sistemasini',
    'xos son', 'xos vektor', 'kvadratik forma', 'bazis', 'fazo'
  ],
  'vektorlar-geometriya': [
    'vektor', 'vektorlar', 'vektorga', 'vektorli',
    'skalyar', 'skalyar ko\'paytma', 'aralash ko\'paytma',
    'tekislik', 'tekislikdagi', 'to\'g\'ri chiziq', 'piramida',
    'koordinata', 'qutb koordinatalari', 'kanonik'
  ],
  'kompleks-sonlar': [
    'kompleks', 'kompleks son', 'kompleks sonlar', 'mavhum birlik',
    'trigonometrik shakl', 'muavr', 'muavr formulasi', 'ildiz chiqarish',
    'eyler', 'eyler formulasi', 'laplas almashtirishi'
  ],
  'limitlar': [
    'limit', 'limitlar', 'limitni', 'limitini', 'hisoblash',
    'aniqmaslik', 'aniqmasliklar', 'ajoyib limit', 'ajoyib limitlar',
    'uzluksizlik', 'uzluksiz', 'uzilish nuqtalari', 'asimptota'
  ],
  'funksiyalar-grafiklar': [
    'funksiya', 'funksiyalar', 'grafik', 'grafiklar', 'yasash',
    'aniqlanish sohasi', 'qiymatlar sohasi', 'juft', 'toq',
    'davriy', 'ekstremum', 'monotonlik', 'botiqlik', 'qavariqlik'
  ],
  'hosila': [
    'hosila', 'hosilalar', 'hosilasi', 'hosilasini',
    'differensial', 'differensiallash', 'differensiali',
    'hosila jadvali', 'murakkab funksiya', 'yuqori tartibli',
    'lopital', 'lopital qoidasi', 'teylor', 'differensial hisob'
  ],
  'integrallar': [
    'integral', 'integrallar', 'integrallash', 'integrali', 'integralini',
    'aniqmas integral', 'aniq integral', 'boshlang\'ich funksiya',
    'bo\'laklab integrallash', 'o\'zgaruvchini almashtirish',
    'nyuton leybnits', 'ratsional kasrlar', 'yuzani hisoblash'
  ],
  'kop-ozgaruvchili-funksiyalar': [
    'ko\'p o\'zgaruvchili', 'xususiy hosila', 'xususiy hosilalar',
    'to\'liq differensial', 'gradient', 'ekstremum', 'shartli ekstremum',
    'lagranj', 'lagranj ko\'paytuvchilari'
  ],
  'karrali-integrallar': [
    'karrali integral', 'ikki karrali', 'uch karrali', 'karrali integrallar',
    'egri chiziqli', 'sirt integrallari', 'grin', 'grin formulasi',
    'ostrogardskiy', 'stoks', 'hajm hisoblash'
  ],
  'qatorlar': [
    'qator', 'qatorlar', 'qatorning', 'sonli qatorlar',
    'yaqinlashish', 'uzoqlashish', 'dalamber', 'koshi', 'leybnits',
    'darajali qator', 'teylor', 'makloren', 'fure', 'fure qatori'
  ],
  'differensial-tenglamalar': [
    'differensial tenglama', 'differensial tenglamalar', 'tenglamani',
    'ajraladigan', 'bir jinsli', 'chiziqli differensial', 'bernulli',
    'ikkinchi tartibli', 'xarakteristik tenglama', 'xususiy yechim', 'koshi masalasi'
  ],
  'ehtimollar-nazariyasi': [
    'ehtimol', 'ehtimollik', 'ehtimollar nazariyasi', 'kombinatorika',
    'bernulli', 'puasson', 'bayes', 'to\'liq ehtimollik',
    'tasodifiy miqdor', 'matematik kutilma', 'dispersiya'
  ],
  'matematik-statistika': [
    'statistika', 'matematik statistika', 'tanlanma', 'gipoteza',
    'styyudent', 'pirson', 'kriteriy', 'regressiya', 'korrelyatsiya'
  ],
  'maktab-kursi': [
    'maktab kursi', 'algebra', 'tenglamalar', 'tengsizliklar',
    'kvadrat tenglama', 'ratsional', 'irratsional', 'ko\'rsatkichli',
    'logarifm', 'trigonometriya', 'ayniyatlar'
  ]
};

export function getKeywordsForLesson(moduleSlug: string, lessonTitle: string): string[] {
  const modKeywords = MODULE_KEYWORDS[moduleSlug] || [];
  
  // Extract words from title (lowercase, normalized)
  const titleWords = lessonTitle
    .toLowerCase()
    .replace(/[^a-z0-9\s'ʻʼ-]/gi, ' ')
    .split(/\s+/)
    .filter(w => w.length > 2);

  // Combine unique keywords
  const combined = Array.from(new Set([...titleWords, ...modKeywords]));
  return combined.slice(0, 15);
}
