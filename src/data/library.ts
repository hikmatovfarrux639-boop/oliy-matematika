export interface BookItem {
  id: string;
  title: string;
  authors: string;
  year?: string;
  category: 'analiz' | 'algebra' | 'diffur' | 'ehtimollik' | 'masalalar' | 'ozbekcha';
  level: 'Boshlang\'ich' | 'O\'rta' | 'Chuqurlashtirilgan' | 'Klassik Ensiklopediya';
  description: string;
  targetAudience: string;
  keyTopics: string[];
}

export const LIBRARY_DATABASE: BookItem[] = [
  {
    id: 'fichtenholz-kurs',
    title: 'Курс дифференциального и интегрального исчисления (3 тома)',
    authors: 'Г. М. Фихтенгольц',
    year: '1969-2003',
    category: 'analiz',
    level: 'Klassik Ensiklopediya',
    description: 'Dunyodagi eng mukammal, batafsil va fundamental matematik analiz kursi. Har bir teorema, uning geometrik mohiyati va nozik istisnolari juda chuqur yoritilgan. Universitetlar va ilmiy izlanuvchilarning "oltin poydevori".',
    targetAudience: 'Matematika, amaliy matematika, nazariy fizika talabalari va o\'qituvchilar.',
    keyTopics: ['Haqiqiy sonlar va limitlar', 'Differensial va integral hisob', 'Qatorlar nazariyasi', 'Karrali va sirt integrallari']
  },
  {
    id: 'demidovich-zadachi',
    title: 'Сборник задач и упражнений по математическому анализу',
    authors: 'Б. П. Демидович',
    year: '1970-2020',
    category: 'masalalar',
    level: 'Chuqurlashtirilgan',
    description: 'Oliy matematikaning barcha OTMlarida tan olingan "afsonaviy" masalalar to\'plami. 4000 dan ortiq misol va masalalar eng soddasidan boshlab jahon olimpiadalari darajasigacha saralangan.',
    targetAudience: 'Barcha texnika va universitet talabalari, oraliq/yakuniy nazoratlarga tayyorlanuvchilar.',
    keyTopics: ['Limitlar va hisoblash texnikalari', 'Aniqmas va aniq integrallar', 'Qatorlar yaqinlashishi', 'Ko\'p o\'zgaruvchili funksiyalar']
  },
  {
    id: 'piskunov-vtuz',
    title: 'Дифференциальное и интегральное исчисления для втузов (2 тома)',
    authors: 'Н. С. Пискунов',
    year: '1985-2015',
    category: 'analiz',
    level: 'O\'rta',
    description: 'Muhandislik va texnika OTMlari (TATU, ToshDTU, SamDU va b.) uchun eng yaxshi, o\'qish oson va amaliyotga yo\'naltirilgan darslik. Quruq nazariyadan ko\'ra fizik-texnik tatbiqlarga urg\'u berilgan.',
    targetAudience: 'Axborot texnologiyalari, energetika, muhandislik va iqtisodiyot talabalari.',
    keyTopics: ['Hosilaning mexanik ma\'nosi', 'Differensial tenglamalar', 'Karrali integrallar', 'Teylor va Fure qatorlari']
  },
  {
    id: 'gmurman-teorver',
    title: 'Теория вероятностей и математическая статистика',
    authors: 'В. Е. Гмурман',
    year: '1977-2018',
    category: 'ehtimollik',
    level: 'Boshlang\'ich',
    description: 'Ehtimollar nazariyasi va statistikani mutlaqo noldan o\'rganuvchilar uchun eng mashhur va tushunarli qo\'llanma. Barcha tushunchalar kundalik hayotdagi va ishlab chiqarishdagi aniq misollar orqali tushuntirilgan.',
    targetAudience: 'Iqtisodchilar, dasturchilar, ma\'lumotlar tahlilchilari (Data Science) va boshlang\'ich talabalar.',
    keyTopics: ['Kombinatorika va klassik ehtimol', 'Tasodifiy miqdorlar va dispersiya', 'Normal va Bernulli taqsimoti', 'Gipotezalarni tekshirish']
  },
  {
    id: 'jorayev-oliy-matematika',
    title: 'Oliy matematika kursi (1-4 qismlar)',
    authors: 'T. Jo\'rayev, A. Sa\'dullayev, G. Xudoyberganov, H. Mansurov, A. Vorisov',
    year: '1995-2010',
    category: 'ozbekcha',
    level: 'Chuqurlashtirilgan',
    description: 'O\'zbekiston Milliy Universiteti (O\'zMU) akademiklari tomonidan yaratilgan eng nufuzli milliy fundamental darslik. O\'zbek tilida oliy matematikaning zamonaviy akademik talablariga to\'liq javob beruvchi noyob manba.',
    targetAudience: 'O\'zbekiston OTMlarining matematika, fizika va AKT fakultetlari talabalari.',
    keyTopics: ['Matematik analiz asoslari', 'Analitik geometriya va chiziqli algebra', 'Differensial tenglamalar', 'Karrali integrallar']
  },
  {
    id: 'soatov-oliy-matematika',
    title: 'Oliy matematika (1-3 jild)',
    authors: 'Yo. U. Soatov',
    year: '1993-2005',
    category: 'ozbekcha',
    level: 'O\'rta',
    description: 'Texnika yo\'nalishidagi talabalar uchun o\'zbek tilida yozilgan eng ommabop darslik. Misollarning qadamma-qadam yechilish namunalariga juda boy.',
    targetAudience: 'TATU, ToshDTU, TAYI va viloyat texnika universitetlari talabalari.',
    keyTopics: ['Determinantlar va matritsalar', 'Vektorlar algebrasi', 'Differensial va integral hisob', 'Qatorlar']
  },
  {
    id: 'filippov-diffur',
    title: 'Сборник задач по дифференциальным уравнениям',
    authors: 'А. Ф. Филиппов',
    year: '1979-2015',
    category: 'diffur',
    level: 'Chuqurlashtirilgan',
    description: 'Oddiy differensial tenglamalar bo\'yicha jahon klassikasi. 1-tartibli tenglamalardan tortib barqarorlik nazariyasi (Lyapunov) gacha bo\'lgan barcha amaliy topshiriqlar to\'plami.',
    targetAudience: 'Amaliy matematika, mexanika va kompyuter modellashtirish talabalari.',
    keyTopics: ['Ajraladigan va bir jinsli tenglamalar', 'Yuqori tartibli chiziqli tenglamalar', 'Differensial tenglamalar sistemalari', 'Maxsus nuqtalar va faza portretlari']
  },
  {
    id: 'ilyin-poznyak-algebra',
    title: 'Линейная алгебра и аналитическая геометрия',
    authors: 'В. А. Ильин, Э. Г. Позняк',
    year: '1984-2010',
    category: 'algebra',
    level: 'Chuqurlashtirilgan',
    description: 'MGU (Moskva Davlat Universiteti) fundamental darsliklar seriyasiga kiruvchi eng sara qo\'llanma. Chiziqli fazolar, operatorlar va kvadratik formalarni geometrik mohiyat bilan bog\'lab o\'rgatadi.',
    targetAudience: 'Universitet talabalari va IT mutaxassislari (Machine Learning, Computer Vision).',
    keyTopics: ['Vektor fazolar va bazislar', 'Chiziqli operatorlar matritsasi', 'Xos qiymatlar va vektorlar', 'Evklid fazolari va ortogonallash']
  }
];
