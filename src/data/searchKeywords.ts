// Uzbek Mathematical Search Keywords & Affix Mapping for Pagefind Stemming
export const MODULE_KEYWORDS: Record<string, string[]> = {
  'chiziqli-algebra': [
    'matritsa', 'matritsalar', 'matritsani', 'matritsaga',
    'determinant', 'determinantlar', 'determinantni', 'hisoblash',
    'teskari matritsa', 'matritsa rangi', 'rangi', 'pog\'onasimon',
    'gauss', 'gauss usuli', 'kramer', 'kramer qoidasi',
    'chiziqli tenglamalar', 'sistema', 'sistemasi', 'sistemasini',
    'xos son', 'xos vektor', 'kvadratik forma', 'bazis', 'fazo',
    'simpleks usuli', 'transport masalasi', 'gorner', 'silvestr'
  ],
  'vektorlar-geometriya': [
    'vektor', 'vektorlar', 'vektorga', 'vektorli',
    'skalyar', 'skalyar ko\'paytma', 'aralash ko\'paytma',
    'tekislik', 'tekislikdagi', 'to\'g\'ri chiziq', 'piramida',
    'koordinata', 'qutb koordinatalari', 'kanonik',
    'sirtlar', 'ellipsoid', 'giperboloid', 'paraboloid', 'affin fazo',
    'proyeksiya', 'ko\'pyoqlar', 'platon jismlari', 'eyler xarakteristikasi'
  ],
  'kompleks-sonlar': [
    'kompleks', 'kompleks son', 'kompleks sonlar', 'mavhum birlik',
    'trigonometrik shakl', 'muavr', 'muavr formulasi', 'ildiz chiqarish',
    'eyler', 'eyler formulasi', 'laplas almashtirishi',
    'koshi riman', 'golomorf', 'kompleks integral', 'koshi formulasi',
    'konform', 'jukovskiy'
  ],
  'limitlar': [
    'limit', 'limitlar', 'limitni', 'limitini', 'hisoblash',
    'aniqmaslik', 'aniqmasliklar', 'ajoyib limit', 'ajoyib limitlar',
    'uzluksizlik', 'uzluksiz', 'uzilish nuqtalari', 'asimptota',
    'cheksiz kichik', 'ekvivalentlik', 'veyershtrass', 'kantor',
    'tekis uzluksizlik', 'aniqmaslik turlari'
  ],
  'funksiyalar-grafiklar': [
    'funksiya', 'funksiyalar', 'grafik', 'grafiklar', 'yasash',
    'aniqlanish sohasi', 'qiymatlar sohasi', 'juft', 'toq',
    'davriy', 'ekstremum', 'monotonlik', 'botiqlik', 'qavariqlik',
    'qutb koordinatalari', 'arximed spirali', 'kardioida', 'lemniskata',
    'parametrik egri chiziq', 'sikloida', 'astroida'
  ],
  'hosila': [
    'hosila', 'hosilalar', 'hosilasi', 'hosilasini',
    'differensial', 'differensiallash', 'differensiali',
    'hosila jadvali', 'murakkab funksiya', 'yuqori tartibli',
    'lopital', 'lopital qoidasi', 'teylor', 'differensial hisob',
    'egrilik', 'egrilik radiusi', 'evolyuta', 'leybnits formulasi',
    'frenet serret', 'marjinal tahlil', 'elastiklik'
  ],
  'integrallar': [
    'integral', 'integrallar', 'integrallash', 'integrali', 'integralini',
    'aniqmas integral', 'aniq integral', 'boshlang\'ich funksiya',
    'bo\'laklab integrallash', 'o\'zgaruvchini almashtirish',
    'nyuton leybnits', 'ratsional kasrlar', 'yuzani hisoblash',
    'chebishev', 'differensial binom', 'eyler almashtirishlari',
    'ostrogradskiy', 'aylanish sirti', 'guldin', 'parametrga bog\'liq'
  ],
  'kop-ozgaruvchili-funksiyalar': [
    'ko\'p o\'zgaruvchili', 'xususiy hosila', 'xususiy hosilalar',
    'to\'liq differensial', 'gradient', 'ekstremum', 'shartli ekstremum',
    'lagranj', 'lagranj ko\'paytuvchilari', 'sath chiziqlari',
    'gesse matritsasi', 'yakobian'
  ],
  'karrali-integrallar': [
    'karrali integral', 'ikki karrali', 'uch karrali', 'karrali integrallar',
    'egri chiziqli', 'sirt integrallari', 'grin', 'grin formulasi',
    'ostrogradskiy', 'stoks', 'hajm hisoblash',
    'silindrik koordinatalar', 'sferik koordinatalar', 'divergensiya', 'rotor'
  ],
  'qatorlar': [
    'qator', 'qatorlar', 'qatorning', 'sonli qatorlar',
    'yaqinlashish', 'uzoqlashish', 'dalamber', 'koshi', 'leybnits',
    'darajali qator', 'teylor', 'makloren', 'fure', 'fure qatori',
    'loran qatori', 'maxsus nuqtalar', 'chegirmalar', 'vichet',
    'cheksiz ko\'paytma', 'fure almashtirishi'
  ],
  'differensial-tenglamalar': [
    'differensial tenglama', 'differensial tenglamalar', 'tenglamani',
    'ajraladigan', 'bir jinsli', 'chiziqli differensial', 'bernulli',
    'ikkinchi tartibli', 'xarakteristik tenglama', 'xususiy yechim', 'koshi masalasi',
    'to\'liq differensialli', 'integrallovchi ko\'paytuvchi', 'rikkati',
    'laplas almashtirishi', 'lyapunov barqarorligi', 'fure usuli'
  ],
  'ehtimollar-nazariyasi': [
    'ehtimol', 'ehtimollik', 'ehtimollar nazariyasi', 'kombinatorika',
    'bernulli', 'puasson', 'bayes', 'to\'liq ehtimollik',
    'tasodifiy miqdor', 'matematik kutilma', 'dispersiya',
    'tasodifiy vektorlar', 'kovariatsion matritsa', 'xarakteristik funksiya',
    'markov zanjirlari', 'stoxastik modellar'
  ],
  'matematik-statistika': [
    'statistika', 'matematik statistika', 'tanlanma', 'gipoteza',
    'styudent', 'pirson', 'kriteriy', 'regressiya', 'korrelyatsiya',
    'ishonchlilik intervali', 'mle', 'maksimal haqiqatga o\'xshashlik',
    'monte karlo', 'kramer rao'
  ],
  'maktab-kursi': [
    'maktab kursi', 'algebra', 'tenglamalar', 'tengsizliklar',
    'kvadrat tenglama', 'ratsional', 'irratsional', 'ko\'rsatkichli',
    'logarifm', 'trigonometriya', 'ayniyatlar',
    'matematik induksiya', 'diofant tenglamasi', 'dirixle prinsipi', 'invariant'
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
  return combined.slice(0, 18);
}
