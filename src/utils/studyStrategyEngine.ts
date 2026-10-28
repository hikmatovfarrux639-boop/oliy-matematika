export interface StrategyStep {
  stepNumber: number;
  phase: 'Poydevor' | 'Asosiy' | 'Chuqurlashtirilgan' | 'Amaliyot' | 'Sinov';
  badgeColor: string;
  title: string;
  url: string;
  slug?: string; // for checking math_completed_lessons in localStorage
  duration: string;
  whyRead: string;
  focusPoints: string[];
}

export interface StudyStrategyPlan {
  id: string;
  topicTitle: string;
  moduleSlug: string;
  moduleTitle: string;
  empathyMessage: string;
  rootCauseWhyHard: string;
  estimatedTotalTime: string;
  steps: StrategyStep[];
  interactiveTools: {
    title: string;
    url: string;
    icon: string;
    desc: string;
  }[];
  examTip: string;
}

export interface StrategyTopicRule {
  id: string;
  keywords: string[];
  plan: StudyStrategyPlan;
}

/**
 * Normalizes Uzbek/Russian/Typo text for fuzzy topic matching
 */
export function normalizeQueryForStrategy(raw: string): string {
  return raw
    .toLowerCase()
    .replace(/х/g, 'x')
    .replace(/у/g, 'y')
    .replace(/а/g, 'a')
    .replace(/е/g, 'e')
    .replace(/о/g, 'o')
    .replace(/р/g, 'p')
    .replace(/с/g, 's')
    .replace(/к/g, 'k')
    .replace(/м/g, 'm')
    .replace(/т/g, 't')
    .replace(/['`‘’ʻʼ]/g, "'")
    // Common student typos in Uzbek math queries:
    .replace(/dterminant|detirminant|determinat|determenant|opredelitel/g, 'determinant')
    .replace(/matrisa|matritsa|matrica|matrits/g, 'matritsa')
    .replace(/kramr|krammer/g, 'kramer')
    .replace(/gaus|gavss/g, 'gauss')
    .replace(/intigral|integrl|intgral/g, 'integral')
    .replace(/xosila|hosla|proizvodnaya/g, 'hosila')
    .replace(/loptal|lopital|gopital/g, 'lopital')
    .replace(/difirensial|difur|differinsial/g, 'differensial')
    .replace(/extimol|ehtimol|veroyatnost/g, 'ehtimol')
    .replace(/kompleks|kampleks/g, 'kompleks')
    .replace(/vektr|viktor/g, 'vektor')
    .replace(/piramida|tetraidr|tetraedr/g, 'piramida')
    .replace(/asimtota|asimptota/g, 'asimptota')
    .replace(/furie|furye/g, 'fure')
    .replace(/makloren|teylor/g, 'teylor');
}

export const STRATEGY_RULES: StrategyTopicRule[] = [
  {
    id: 'determinant',
    keywords: ['determinant', 'uchburchak qoidasi', 'sarryus', 'minor', 'algebraik toldiruvchi', 'laplas teoremasi', '2-tartibli', '3-tartibli', '4-tartibli'],
    plan: {
      id: 'determinant',
      topicTitle: 'Determinantlar, Minorlar va Laplas Teoremasi',
      moduleSlug: 'chiziqli-algebra',
      moduleTitle: '2-Modul: Chiziqli algebra',
      empathyMessage: "Xavotir olmang! Determinant — oliy matematikaning eng qiziqarli va algoritmik mavzularidan biri. Uni tushunish uchun atigi 3 ta qoidani ketma-ket o'zlashtirish kifoya.",
      rootCauseWhyHard: "Talabalar ko'pincha 3x3 determinantdagi «uchburchak (Sarryus) qoidasi»ning ishoralarida hamda 4x4 determinantni yechishda algebraik to'ldiruvchining (-1)^(i+j) shaxmat ishorasida adashishadi.",
      estimatedTotalTime: '45–60 daqiqa',
      steps: [
        {
          stepNumber: 1,
          phase: 'Poydevor',
          badgeColor: '#6366f1',
          title: 'Matritsalar tushunchasi, satr va ustunlar indeksi',
          url: '/dars/chiziqli-algebra/matritsalar-tushunchasi-va-chiziqli-amallar',
          slug: 'chiziqli-algebra/matritsalar-tushunchasi-va-chiziqli-amallar',
          duration: '10 daqiqa',
          whyRead: "Determinantni hisoblashdan oldin matritsaning bosh diagonali (a₁₁, a₂₂, a₃₃) va yordamchi diagonali nima ekanini aniq bilib olishingiz kerak.",
          focusPoints: ['Kvadrat matritsa tushunchasi', 'Bosh va yordamchi diagonal elementlari', 'Indekslar (i-satr, j-ustun) ma\'nosi']
        },
        {
          stepNumber: 2,
          phase: 'Asosiy',
          badgeColor: '#10b981',
          title: '2- va 3-tartibli determinantlar hamda geometrik ma\'nosi',
          url: '/dars/chiziqli-algebra/determinantlar-va-geometrik-manosi',
          slug: 'chiziqli-algebra/determinantlar-va-geometrik-manosi',
          duration: '15 daqiqa',
          whyRead: "Eng muhim tayanch dars! Bu yerda 2x2 (ad - bc) va 3x3 (Sarryus va uchburchaklar qoidasi) determinantlarni bexato hisoblashni o'rganasiz.",
          focusPoints: ['2x2 determinantda xochma-xoch ko\'paytirish', '3x3 determinantda uchburchaklar sxemasi', 'Determinant nima uchun yuza va hajmni bildirishini tushunish']
        },
        {
          stepNumber: 3,
          phase: 'Asosiy',
          badgeColor: '#10b981',
          title: 'Minorlar, algebraik to\'ldiruvchilar va Laplas teoremasi',
          url: '/dars/chiziqli-algebra/minorlar-algebraik-toldiruvchilar-laplas',
          slug: 'chiziqli-algebra/minorlar-algebraik-toldiruvchilar-laplas',
          duration: '15 daqiqa',
          whyRead: "3x3 va 4x4 determinantlarni istalgan satr yoki ustun bo'yicha yoyib hisoblash usuli. Teskari matritsa topishda ham aynan shu dars kerak bo'ladi!",
          focusPoints: ['Minor (M_ij) — satr va ustunni o\'chirish', 'Algebraik to\'ldiruvchi (A_ij) va (+ - + -) shaxmat ishoralar jadvali', 'Eng ko\'p noli bor satr bo\'yicha yoyish siri']
        },
        {
          stepNumber: 4,
          phase: 'Chuqurlashtirilgan',
          badgeColor: '#f59e0b',
          title: 'Determinantning 10 ta oltin xossasi va uchburchak shakl',
          url: '/dars/chiziqli-algebra/determinant-xossalari-va-uchburchak-shakl',
          slug: 'chiziqli-algebra/determinant-xossalari-va-uchburchak-shakl',
          duration: '15 daqiqa',
          whyRead: "Katta sonli yoki 4-tartibli determinantlarni ko'paytirib o'tirmasdan, satrlarni bir-biriga qo'shib nollarni hosil qilish orqali 30 soniyada yechish usuli.",
          focusPoints: ['Qachon determinant 0 ga teng bo\'ladi?', 'Satrga boshqa satrni ko\'paytirib qo\'shish orqali nol hosil qilish', 'Uchburchak matritsa determinantini diagonal bo\'ylab ko\'paytirish']
        },
        {
          stepNumber: 5,
          phase: 'Amaliyot',
          badgeColor: '#3b82f6',
          title: 'Kramer qoidasi: Determinant yordamida tenglamalar yechish',
          url: '/dars/chiziqli-algebra/kramer-qoidasi-va-geometrik-yechim',
          slug: 'chiziqli-algebra/kramer-qoidasi-va-geometrik-yechim',
          duration: '10 daqiqa',
          whyRead: "O'rgangan determinant bilimingizni amalda tenglamalar sistemasini yechishda (Δ, Δx, Δy, Δz) qo'llab mustahkamlaysiz.",
          focusPoints: ['Asosiy determinant Δ ≠ 0 sharti', 'Ozod hadlar ustunini almashtirib Δx, Δy, Δz ni topish']
        }
      ],
      interactiveTools: [
        {
          title: '🔢 Matritsa va Determinant Kalkulyatori',
          url: '/matritsa',
          icon: '🔢',
          desc: "O'zingizning uy vazifangizdagi 2x2, 3x3 yoki 4x4 determinantni kiriting — tizim qadamma-qadam yechimini ko'rsatadi!"
        },
        {
          title: '🔮 Vizual Laboratoriya (2D Fazo va Determinant)',
          url: '/laboratoriya',
          icon: '🔮',
          desc: "Determinant qanday qilib tekislikdagi yuzani cho'zishi yoki 0 bo'lganda chiziqqa yig'ib qo'yishini 60 FPS animatsiyada ko'ring."
        },
        {
          title: '📝 Chiziqli Algebra Testi',
          url: '/testlar?modul=chiziqli-algebra#quiz-section',
          icon: '📝',
          desc: "Mavzuni o'qib bo'lgach, imtihon savollarida o'zingizni sinab ko'ring."
        }
      ],
      examTip: "Imtihon siri: Agar 3x3 yoki 4x4 determinantda sonlar katta bo'lsa, darrov Sarryus qoidasiga yopishmang! Avval birinchi ustun yoki satrda elementar almashtirish bilan ikkita 0 hosil qiling — shunda hisob-kitob 3 barobar osonlashadi va ishora xatosi qilmaysiz."
    }
  },
  {
    id: 'kramer-gauss-chts',
    keywords: ['kramer', 'gauss', 'chts', 'tenglamalar sistemasi', 'matritsa usuli', 'teskari matritsa', 'kronekker', 'rang', 'fys'],
    plan: {
      id: 'kramer-gauss-chts',
      topicTitle: 'Chiziqli Tenglamalar Sistemasi (Kramer, Matritsa va Gauss usullari)',
      moduleSlug: 'chiziqli-algebra',
      moduleTitle: '2-Modul: Chiziqli algebra',
      empathyMessage: "Chiziqli tenglamalar sistemasi (ChTS) — 1-kurs oraliq imtihonining eng asosiy savoli! Uni 3 xil usulda (Kramer, Matritsa, Gauss) yechishni quyidagi aniq reja bilan tezda o'rganib olasiz.",
      rootCauseWhyHard: "Talabalar ko'pincha qaysi usulni qachon qo'llashni va Gauss usulida satrlarni nolga aylantirish tartibini adashtirishadi.",
      estimatedTotalTime: '50–70 daqiqa',
      steps: [
        {
          stepNumber: 1,
          phase: 'Poydevor',
          badgeColor: '#6366f1',
          title: '2- va 3-tartibli determinantlarni hisoblash',
          url: '/dars/chiziqli-algebra/determinantlar-va-geometrik-manosi',
          slug: 'chiziqli-algebra/determinantlar-va-geometrik-manosi',
          duration: '12 daqiqa',
          whyRead: "Kramer va Teskari matritsa usullari to'liq determinantga tayanadi.",
          focusPoints: ['Δ determinantni xatosiz hisoblash', 'Ishoralar qoidasi']
        },
        {
          stepNumber: 2,
          phase: 'Asosiy',
          badgeColor: '#10b981',
          title: 'Kramer qoidasi bilan tenglamalar sistemasini yechish',
          url: '/dars/chiziqli-algebra/kramer-qoidasi-va-geometrik-yechim',
          slug: 'chiziqli-algebra/kramer-qoidasi-va-geometrik-yechim',
          duration: '15 daqiqa',
          whyRead: "3 ta noma'lumli 3 ta tenglamani yechishning eng tez va oson usuli (x = Δx / Δ).",
          focusPoints: ['Asosiy va yordamchi determinantlar', 'Yechimni dastlabki tenglamaga qo\'yib tekshirish']
        },
        {
          stepNumber: 3,
          phase: 'Asosiy',
          badgeColor: '#10b981',
          title: 'Teskari matritsa va Matritsa usuli (X = A⁻¹B)',
          url: '/dars/chiziqli-algebra/matritsa-usuli-bilan-tenglamalar-yechish',
          slug: 'chiziqli-algebra/matritsa-usuli-bilan-tenglamalar-yechish',
          duration: '15 daqiqa',
          whyRead: "Imtihonda «Tenglamalar sistemasini matritsa usulida yeching» deyilganda aynan shu algoritm bajariladi.",
          focusPoints: ['Algebraik to\'ldiruvchilar matritsasi', 'Transponirlash va A⁻¹ ni B ustunga ko\'paytirish']
        },
        {
          stepNumber: 4,
          phase: 'Chuqurlashtirilgan',
          badgeColor: '#f59e0b',
          title: 'Gauss usuli: Pog\'onasimon shakl va teskari yurish',
          url: '/dars/chiziqli-algebra/gauss-usuli-pogonasimon-va-teskari-yurish',
          slug: 'chiziqli-algebra/gauss-usuli-pogonasimon-va-teskari-yurish',
          duration: '20 daqiqa',
          whyRead: "Har qanday o'lchamdagi sistemani yecha oladigan universal usul.",
          focusPoints: ['Kengaytirilgan matritsa (A|B)', 'To\'g\'ri yurish (zinapoya hosil qilish) va teskari yurish']
        }
      ],
      interactiveTools: [
        {
          title: '🔢 Matritsa va ChTS Kalkulyatori',
          url: '/matritsa',
          icon: '🔢',
          desc: "Kramer, Gauss va Teskari matritsa hisob-kitoblarini qadamma-qadam tekshiring."
        },
        {
          title: '📝 Chiziqli Algebra Testi',
          url: '/testlar?modul=chiziqli-algebra#quiz-section',
          icon: '📝',
          desc: "ChTS va matritsalar bo'yicha imtihon testlarini ishlang."
        }
      ],
      examTip: "Har qanday ChTS ni yechib bo'lgach, topilgan (x, y, z) sonlarni dastlabki tenglamalarning BARCHASIGA qo'yib tekshiring! Bu 30 soniya vaqt oladi, ammo 100% ballni kafolatlaydi."
    }
  },
  {
    id: 'matritsa',
    keywords: ['matritsa', 'kopaytirish', 'transponir', 'xos son', 'xos vektor', 'kvadratik forma', 'silvestr'],
    plan: {
      id: 'matritsa',
      topicTitle: 'Matritsalar va Ular Ustida Amallar',
      moduleSlug: 'chiziqli-algebra',
      moduleTitle: '2-Modul: Chiziqli algebra',
      empathyMessage: "Matritsalar — jadvalli sonlar ustida ishlash san'ati. Qo'shish va ayirish juda oddiy, ko'paytirishda esa «Satrni Ustunga» qoidasini tushunib olsangiz kifoya!",
      rootCauseWhyHard: "Matritsalarni ko'paytirish oddiy sonlarni ko'paytirishga o'xshamaydi: A·B ≠ B·A va o'lchamlar mosligi (m×n va n×k) talab qilinadi.",
      estimatedTotalTime: '45 daqiqa',
      steps: [
        {
          stepNumber: 1,
          phase: 'Poydevor',
          badgeColor: '#6366f1',
          title: 'Matritsalar tushunchasi, turlari va chiziqli amallar',
          url: '/dars/chiziqli-algebra/matritsalar-tushunchasi-va-chiziqli-amallar',
          slug: 'chiziqli-algebra/matritsalar-tushunchasi-va-chiziqli-amallar',
          duration: '12 daqiqa',
          whyRead: "Birlik matritsa (E), diagonal matritsa, transponirlash (Aᵀ) va matritsalarni qo'shishni o'rganasiz.",
          focusPoints: ['Matritsa o\'lchami (m × n)', 'Transponirlash: satrlarni ustunga aylantirish', 'Songa ko\'paytirish va qo\'shish']
        },
        {
          stepNumber: 2,
          phase: 'Asosiy',
          badgeColor: '#10b981',
          title: 'Matritsalarni ko\'paytirish: Satrni ustunga ko\'paytirish',
          url: '/dars/chiziqli-algebra/matritsalarni-kopaytirish-qoidalari',
          slug: 'chiziqli-algebra/matritsalarni-kopaytirish-qoidalari',
          duration: '15 daqiqa',
          whyRead: "Eng ko'p xato qilinadigan mavzuni vizual sxema bilan tushunib olasiz.",
          focusPoints: ['Qachon A matritsani B ga ko\'paytirish mumkin?', 'Satr elementlarini ustun elementlariga mos ravishda ko\'paytirib qo\'shish']
        },
        {
          stepNumber: 3,
          phase: 'Asosiy',
          badgeColor: '#10b981',
          title: 'Teskari matritsa: Mavjudlik sharti va topish algoritmi',
          url: '/dars/chiziqli-algebra/teskari-matritsa-mavjudlik-va-topish',
          slug: 'chiziqli-algebra/teskari-matritsa-mavjudlik-va-topish',
          duration: '15 daqiqa',
          whyRead: "Matritsalarda «bo'lish» amali o'rnini bosuvchi A⁻¹ teskari matritsani topish.",
          focusPoints: ['Δ ≠ 0 sharti', 'Biriktirilgan matritsa va A · A⁻¹ = E tekshiruvi']
        },
        {
          stepNumber: 4,
          phase: 'Chuqurlashtirilgan',
          badgeColor: '#f59e0b',
          title: 'Matritsa rangi va pog\'onasimon shakl',
          url: '/dars/chiziqli-algebra/matritsa-rangi-va-pogonasimon-shakl',
          slug: 'chiziqli-algebra/matritsa-rangi-va-pogonasimon-shakl',
          duration: '15 daqiqa',
          whyRead: "Matritsaning chiziqli erkli satrlari sonini (rangini) elementar almashtirishlar bilan topish.",
          focusPoints: ['Nolmas satrlar soni', 'Pog\'onasimon matritsa']
        }
      ],
      interactiveTools: [
        {
          title: '🔢 Matritsa Kalkulyatori (A+B, A·B, A⁻¹, Rang)',
          url: '/matritsa',
          icon: '🔢',
          desc: "Matritsalarni ko'paytirish va teskari matritsa topishni jonli tekshiring."
        }
      ],
      examTip: "Teskari matritsa A⁻¹ ni topganingizdan so'ng, albatta A · A⁻¹ = E (birlik matritsa) chiqishini tekshiring!"
    }
  },
  {
    id: 'vektor',
    keywords: ['vektor', 'skalyar', 'aralash kopaytma', 'piramida', 'tetraedr', 'kollinear', 'ortogonal', 'komplanar', 'togri chiziq', 'tekislik', 'uchburchak', 'ellips', 'giperbola', 'parabola'],
    plan: {
      id: 'vektor',
      topicTitle: 'Vektorlar Algebrasi va Analitik Geometriya',
      moduleSlug: 'vektorlar-geometriya',
      moduleTitle: '3-Modul: Vektorlar va analitik geometriya',
      empathyMessage: "Vektorlar va analitik geometriya — formulalari eng mantiqiy va tasavvur qilish oson bo'lgan bo'lim! Quyidagi 4 qadamda barcha tipik masalalarni yechishni o'rganasiz.",
      rootCauseWhyHard: "Talabalar ko'pincha skalyar ko'paytma (natijasi son), vektor ko'paytma (natijasi vektor, moduli yuza) va aralash ko'paytma (moduli hajm) formulalarini bir-biri bilan aralashtirib yuborishadi.",
      estimatedTotalTime: '50 daqiqa',
      steps: [
        {
          stepNumber: 1,
          phase: 'Poydevor',
          badgeColor: '#6366f1',
          title: 'Vektorlar, uzunlik (modul) va chiziqli amallar',
          url: '/dars/vektorlar-geometriya/vektorlar-va-chiziqli-amallar',
          slug: 'vektorlar-geometriya/vektorlar-va-chiziqli-amallar',
          duration: '10 daqiqa',
          whyRead: "Ikki nuqta orqali vektor koordinatasini topish (oxiridan boshini ayirish!) va vektor uzunligini hisoblash.",
          focusPoints: ['AB = (x₂ - x₁, y₂ - y₁, z₂ - z₁)', 'Vektor moduli va kollinearlik sharti']
        },
        {
          stepNumber: 2,
          phase: 'Asosiy',
          badgeColor: '#10b981',
          title: 'Skalyar ko\'paytma, burchak kosinusi va ortogonallik',
          url: '/dars/vektorlar-geometriya/skalyar-kopaytma',
          slug: 'vektorlar-geometriya/skalyar-kopaytma',
          duration: '12 daqiqa',
          whyRead: "Ikki vektor orasidagi burchakni topish va ularning perpendikulyar (a·b = 0) ekanini tekshirish.",
          focusPoints: ['a · b = x₁x₂ + y₁y₂ + z₁z₂', 'cos φ formulasi va proyeksiya']
        },
        {
          stepNumber: 3,
          phase: 'Asosiy',
          badgeColor: '#10b981',
          title: 'Vektor va aralash ko\'paytma (Yuza va Piramida hajmi)',
          url: '/dars/vektorlar-geometriya/vektor-va-aralash-kopaytma',
          slug: 'vektorlar-geometriya/vektor-va-aralash-kopaytma',
          duration: '15 daqiqa',
          whyRead: "Uchburchak yuzi S = ½|a × b| va piramida hajmi V = ⅙|(a, b, c)| masalalarini yechish.",
          focusPoints: ['i, j, k determinant orqali a × b ni topish', '3x3 determinant orqali aralash ko\'paytma va komplanarlik']
        },
        {
          stepNumber: 4,
          phase: 'Chuqurlashtirilgan',
          badgeColor: '#f59e0b',
          title: 'Tekislikda uchburchakning 12 ta elementi va Fazoda tekislik',
          url: '/dars/vektorlar-geometriya/tekislikda-uchburchak-va-chiziqli-tengsizliklar',
          slug: 'vektorlar-geometriya/tekislikda-uchburchak-va-chiziqli-tengsizliklar',
          duration: '15 daqiqa',
          whyRead: "Imtihonlarda tushadigan kompleks geometrik masalalarni (balandlik, mediana, bissektrisa, nuqtadan tekislikkacha masofa) yechish.",
          focusPoints: ['Normal va yo\'naltiruvchi vektorlar', 'Fazodagi tekislik va to\'g\'ri chiziq (/dars/vektorlar-geometriya/fazodagi-tekislik-va-togri-chiziq)']
        }
      ],
      interactiveTools: [
        {
          title: '📐 2D/3D Vektor Kalkulyatori',
          url: '/vektor',
          icon: '📐',
          desc: "Skalyar, vektor, aralash ko'paytma, burchak, uchburchak yuzi va piramida hajmini darhol hisoblab tekshiring!"
        },
        {
          title: '📝 Vektorlar va Geometriya Testi',
          url: '/testlar?modul=vektorlar-geometriya#quiz-section',
          icon: '📝',
          desc: "Modul bo'yicha bilimingizni testda sinab ko'ring."
        }
      ],
      examTip: "Vektor ko'paytma c = a × b ni topgach, c · a = 0 va c · b = 0 chiqishini og'zaki tekshirib ko'ring — agar 0 chiqsa, determinantda hech qanday ishora xatosi qilmagansiz!"
    }
  },
  {
    id: 'limit',
    keywords: ['limit', 'aniqmaslik', 'ajoyib limit', 'ekvivalent', 'uzluksizlik', 'uzilish', '0/0', 'cheksiz'],
    plan: {
      id: 'limit',
      topicTitle: 'Limitlar, Aniqmasliklarni Ochish va Ajoyib Limitlar',
      moduleSlug: 'limitlar',
      moduleTitle: '5-Modul: Limitlar va uzluksizlik',
      empathyMessage: "Limitlar — matematik analizning darvozasi! Har qanday limitni yechish «Aniqmaslik turini aniqlash»dan boshlanadi. Quyidagi ketma-ketlikda o'rgansangiz, har qanday limitga qaysi kalit tushishini darhol bilasiz.",
      rootCauseWhyHard: "Talabalar [0/0], [∞/∞] va [1^∞] aniqmasliklarning har biriga alohida usul (ko'paytuvchilarga ajratish, qo'shmaga ko'paytirish, ekvivalentlik yoki 2-ajoyib limit) kerakligini ajrata olmaslikdan qiynalishadi.",
      estimatedTotalTime: '50 daqiqa',
      steps: [
        {
          stepNumber: 1,
          phase: 'Poydevor',
          badgeColor: '#6366f1',
          title: 'Limit nima? Funksiya limitining mohiyati va oddiy misollar',
          url: '/dars/limitlar/limit-nima',
          slug: 'limitlar/limit-nima',
          duration: '10 daqiqa',
          whyRead: "x → a nimani anglatishi, chap va o'ng limitlar hamda eng oddiy [0/0] qisqartirishni tushunib olasiz.",
          focusPoints: ['Nuqtaga yaqinlashish tushunchasi', 'Qisqa ko\'paytirish formulalari bilan [0/0] ni qisqartirish']
        },
        {
          stepNumber: 2,
          phase: 'Asosiy',
          badgeColor: '#10b981',
          title: 'Aniqmasliklar ([0/0], [∞/∞]) va Irratsional limitlar',
          url: '/dars/limitlar/aniqmasliklar-va-ularni-ochish',
          slug: 'limitlar/aniqmasliklar-va-ularni-ochish',
          duration: '15 daqiqa',
          whyRead: "x → ∞ da eng katta darajaga bo'lish qoidasi va ildizli limitlarda qo'shmasiga ko'paytirish usuli.",
          focusPoints: ['Surat va maxraj darajalarini solishtirish', 'Ildizli ifodalarni (a - b)(a + b) = a² - b² orqali qutqarish']
        },
        {
          stepNumber: 3,
          phase: 'Asosiy',
          badgeColor: '#10b981',
          title: 'Cheksiz kichik funksiyalar va Ekvivalentlik jadvali (1-ajoyib limit)',
          url: '/dars/limitlar/cheksiz-kichik-va-katta-funksiyalar',
          slug: 'limitlar/cheksiz-kichik-va-katta-funksiyalar',
          duration: '12 daqiqa',
          whyRead: "x → 0 da sin(kx) ~ kx, tg(kx) ~ kx, 1 - cos(x) ~ x²/2, ln(1+x) ~ x almashtirishlari bilan murakkab limitlarni 1 qatorda yechish!",
          focusPoints: ['Birinchi ajoyib limit: lim (sin x)/x = 1', 'Ekvivalent almashtirishlar jadvali (faqat ko\'paytma va bo\'linmada!)']
        },
        {
          stepNumber: 4,
          phase: 'Chuqurlashtirilgan',
          badgeColor: '#f59e0b',
          title: '1^∞ aniqmasliklar va Ikkinchi ajoyib limit (e soni)',
          url: '/dars/limitlar/bir-ning-cheksiz-darajasi-va-ikkinchi-ajoyib-limit',
          slug: 'limitlar/bir-ning-cheksiz-darajasi-va-ikkinchi-ajoyib-limit',
          duration: '15 daqiqa',
          whyRead: "Darajada o'zgaruvchi qatnashgan [1^∞] limitlarni e^(lim (u-1)·v) oltin formulasi bilan bexato yechish.",
          focusPoints: ['Ikkinchi ajoyib limit: lim (1 + 1/x)^x = e', 'Tezkor e^(lim (Asos - 1) × Daraja) qoidasi']
        }
      ],
      interactiveTools: [
        {
          title: '🤖 AI Limit Yechuvchi',
          url: '/ai-yechuvchi',
          icon: '🤖',
          desc: "Istalgan limit misolini yozing — tizim uning aniqmaslik turini va qadamma-qadam yechimini chiqarib beradi."
        },
        {
          title: '📝 Limitlar Testi',
          url: '/testlar?modul=limitlar#quiz-section',
          icon: '📝',
          desc: "Limitlar bo'yicha imtihon testlarini yechib bilimingizni mustahkamlang."
        }
      ],
      examTip: "Agar hosila mavzusini o'tgan bo'lsangiz, [0/0] va [∞/∞] limitlarda L'Opital qoidasini (/dars/hosila/lopital-qoidasi) qo'llab javobingizni 10 soniyada tekshirib olishingiz mumkin!"
    }
  },
  {
    id: 'hosila',
    keywords: ['hosila', 'differensial', 'urinma', 'lopital', 'murakkab funksiya', 'zanjir qoidasi', 'ekstremum', 'osish', 'kamayish', 'teylor'],
    plan: {
      id: 'hosila',
      topicTitle: 'Hosila, Differensial va Urinma Tenglamasi',
      moduleSlug: 'hosila',
      moduleTitle: '7-Modul: Hosila va differensial',
      empathyMessage: "Hosila — oliy matematikadagi eng aniq qoidalarga bo'ysunadigan mavzu! Jadvalni va 4 ta qoidani (yig'indi, ko'paytma, bo'linma, murakkab funksiya) bilsangiz, har qanday funksiyadan hosila ola olasiz.",
      rootCauseWhyHard: "Eng ko'p xato murakkab funksiya hosilasida (ichki funksiya hosilasiga ko'paytirishni unutish) va bo'linma qoidasida (u'v - uv')/v² ishorasida sodir bo'ladi.",
      estimatedTotalTime: '45–60 daqiqa',
      steps: [
        {
          stepNumber: 1,
          phase: 'Poydevor',
          badgeColor: '#6366f1',
          title: 'Differensiallash qoidalari va asosiy hosilalar jadvali',
          url: '/dars/hosila/differensiallash-qoidalari-va-jadval',
          slug: 'hosila/differensiallash-qoidalari-va-jadval',
          duration: '15 daqiqa',
          whyRead: "Asosiy hosilalar jadvali hamda ko'paytma (uv)' = u'v + uv' va bo'linma (u/v)' = (u'v - uv')/v² qoidalari.",
          focusPoints: ['Daraja, ko\'rsatkichli, logarifmik va trigonometrik hosilalar', 'Ko\'paytma va kasr hosilasi']
        },
        {
          stepNumber: 2,
          phase: 'Asosiy',
          badgeColor: '#10b981',
          title: 'Murakkab funksiya hosilasi (Zanjir qoidasi — Пчёлка)',
          url: '/dars/hosila/murakkab-funksiya-hosilasi',
          slug: 'hosila/murakkab-funksiya-hosilasi',
          duration: '15 daqiqa',
          whyRead: "Oliy matematikadagi misollarning 90% i murakkab funksiyadir! «Tashqi qobiqdan ichkariga qarab» hosila olishni o'rganasiz.",
          focusPoints: ['[f(g(x))]\' = f\'(g(x)) · g\'(x)', 'Ichki funksiya hosilasiga ko\'paytirish mashqlari']
        },
        {
          stepNumber: 3,
          phase: 'Asosiy',
          badgeColor: '#10b981',
          title: 'Urinma va normal tenglamalari hamda taqribiy hisoblash',
          url: '/dars/hosila/urinma-va-normal-tenglamalari-taqribiy-hisoblash',
          slug: 'hosila/urinma-va-normal-tenglamalari-taqribiy-hisoblash',
          duration: '12 daqiqa',
          whyRead: "Hosilaning geometrik ma'nosi (k = f'(x₀)) va egri chiziqqa urinma o'tkazish.",
          focusPoints: ['y - y₀ = f\'(x₀)(x - x₀) urinma tenglamasi', 'Normal to\'g\'ri chiziq tenglamasi']
        },
        {
          stepNumber: 4,
          phase: 'Chuqurlashtirilgan',
          badgeColor: '#f59e0b',
          title: 'Logarifmik differensiallash, Parametrik hosila va L\'Opital qoidasi',
          url: '/dars/hosila/logarifmik-differensiallash-usuli',
          slug: 'hosila/logarifmik-differensiallash-usuli',
          duration: '15 daqiqa',
          whyRead: "u(x)^v(x) ko'rinishidagi funksiyalar hosilasi hamda L'Opital qoidasi (/dars/hosila/lopital-qoidasi).",
          focusPoints: ['Ikki tomonni ln olish usuli', 'Parametrik va oshkormas funksiya hosilasi (/dars/hosila/parametrik-va-oshkormas-funksiya-hosilasi-asimptotalar)']
        }
      ],
      interactiveTools: [
        {
          title: '📈 Simvolik Hosila Kalkulyatori',
          url: '/hosila',
          icon: '📈',
          desc: "Istalgan funksiyani kiriting — 1- va 2-tartibli hosilasini, nuqtadagi qiymatini va urinma grafigini chizib beradi!"
        },
        {
          title: '📝 Hosila va Differensial Testi',
          url: '/testlar?modul=hosila#quiz-section',
          icon: '📝',
          desc: "Hosila bo'yicha imtihon testlarini yechib ko'ring."
        }
      ],
      examTip: "Agar misolda ko'p qavatli ko'paytma, bo'linma va ildizlar aralashib ketsa, to'g'ridan-to'g'ri hosila olmang — avval ikki tomonni natural logarifmlab (ln y = ...), keyin hosila oling!"
    }
  },
  {
    id: 'integral',
    keywords: ['integral', 'boshlangich funksiya', 'bolaklab', 'almashtirish', 'nyuton-leybnits', 'aniq integral', 'xosmas', 'ratsional kasr', 'yuza', 'simpson'],
    plan: {
      id: 'integral',
      topicTitle: 'Aniqmas va Aniq Integrallarni Yechish Strategiyasi',
      moduleSlug: 'integrallar',
      moduleTitle: '8-Modul: Aniqmas va aniq integrallar',
      empathyMessage: "Integral — hosilaning teskarisi! Hosilada aniq qoida bo'lsa, integralda «usullar kaliti» bor. Quyidagi 4 qadamni o'qisangiz, misolga qarab darhol qaysi usulni tanlashni bilib olasiz.",
      rootCauseWhyHard: "Talabalar ko'pincha qachon «o'zgaruvchini almashtirish» (differensial ostiga kiritish), qachon esa «bo'laklab integrallash» (∫u dv = uv - ∫v du) kerakligini ajrata olishmaydi.",
      estimatedTotalTime: '60 daqiqa',
      steps: [
        {
          stepNumber: 1,
          phase: 'Poydevor',
          badgeColor: '#6366f1',
          title: 'Boshlang\'ich funksiya va aniqmas integral jadvali',
          url: '/dars/integrallar/boshlangich-funksiya-va-aniqmas-integral',
          slug: 'integrallar/boshlangich-funksiya-va-aniqmas-integral',
          duration: '12 daqiqa',
          whyRead: "Jadval integrallarini va + C o'zgarmasning ma'nosini tushunib olasiz.",
          focusPoints: ['∫ x^n dx = x^(n+1)/(n+1) + C', 'O\'z-o\'zini tekshirish: javobdan hosila olsangiz, integral osti chiqishi shart!']
        },
        {
          stepNumber: 2,
          phase: 'Asosiy',
          badgeColor: '#10b981',
          title: 'O\'zgaruvchini almashtirish va differensial ostiga kiritish',
          url: '/dars/integrallar/integrallash-usullari-almashtirish',
          slug: 'integrallar/integrallash-usullari-almashtirish',
          duration: '15 daqiqa',
          whyRead: "Integrallarning 70% i shu usulda yechiladi! Murakkab qismni t deb belgilash va dt = g'(x)dx ni topish.",
          focusPoints: ['Qachon t almashtirish qilinadi?', 'dx ni dt orqali ifodalashni unutmaslik']
        },
        {
          stepNumber: 3,
          phase: 'Asosiy',
          badgeColor: '#10b981',
          title: 'Bo\'laklab integrallash usuli (∫ u dv = u·v - ∫ v du)',
          url: '/dars/integrallar/bolaklab-integrallash',
          slug: 'integrallar/bolaklab-integrallash',
          duration: '15 daqiqa',
          whyRead: "Ko'phad bilan ln(x), arctg(x), e^x yoki sin(x) ko'paytmasi kelganda qaysi birini u deb olish (LIATE qoidasi).",
          focusPoints: ['Logarifm va teskari trigonometrik funksiyalarda u = ln x', 'Ko\'rsatkichli va trigonometrik funksiyalarda u = P(x) (ko\'phad)']
        },
        {
          stepNumber: 4,
          phase: 'Chuqurlashtirilgan',
          badgeColor: '#f59e0b',
          title: 'Aniq integral, Nyuton-Leybnits va Yuza/Hajm hisoblash',
          url: '/dars/integrallar/aniq-integral-va-nyuton-leybnits',
          slug: 'integrallar/aniq-integral-va-nyuton-leybnits',
          duration: '15 daqiqa',
          whyRead: "Chegaralarni qo'yib F(b) - F(a) ni hisoblash va egri chiziqli trapetsiya yuzasini topish.",
          focusPoints: ['Nyuton-Leybnits formulasi', 'Almashtirishda integrallash chegaralarini ham yangilash']
        }
      ],
      interactiveTools: [
        {
          title: '🔮 Vizual Laboratoriya (Riman Integrali Slayderi)',
          url: '/laboratoriya',
          icon: '🔮',
          desc: "To'rtburchaklar soni n → ∞ ga intilganda Riman yig'indisi qanday qilib aniq yuzaga aylanishini jonli ko'ring!"
        },
        {
          title: '🤖 AI Integral Yechuvchi',
          url: '/ai-yechuvchi',
          icon: '🤖',
          desc: "Integral misolini yozing — tizim qadamma-qadam yechimini va grafigini chiqarib beradi."
        },
        {
          title: '📝 Integrallar Testi',
          url: '/testlar?modul=integrallar#quiz-section',
          icon: '📝',
          desc: "Integrallar bo'yicha test savollarini ishlang."
        }
      ],
      examTip: "Aniqmas integralni yechib bo'lgach, chiqqan javobingizdan hosila olib ko'ring — agar dastlabki integral ostidagi funksiya chiqsa, javobingiz 100% to'g'ri!"
    }
  },
  {
    id: 'differensial-tenglamalar',
    keywords: ['differensial tenglama', 'koshi masalasi', 'ajraladigan', 'bernulli', 'lagranj variatsiya', 'eyler', 'runge-kutta', 'xarakteristik'],
    plan: {
      id: 'differensial-tenglamalar',
      topicTitle: 'Differensial Tenglamalarni Turlarga Ajratish va Yechish',
      moduleSlug: 'differensial-tenglamalar',
      moduleTitle: '12-Modul: Differensial tenglamalar',
      empathyMessage: "Differensial tenglamalarda muvaffaqiyatning 80% i — tenglamaning turini to'g'ri tanib olishda! Quyidagi 4 qadamda har bir turni qanday tanish va yechishni o'rganasiz.",
      rootCauseWhyHard: "Talabalar o'zgaruvchilari ajraladigan, bir jinsli (y/x), chiziqli (y' + P(x)y = Q(x)) va 2-tartibli o'zgarmas koeffitsiyentli tenglamalarni bir-biridan ajratishda adashishadi.",
      estimatedTotalTime: '55 daqiqa',
      steps: [
        {
          stepNumber: 1,
          phase: 'Poydevor',
          badgeColor: '#6366f1',
          title: 'Differensial tenglama tushunchasi, umumiy yechim va Koshi masalasi',
          url: '/dars/differensial-tenglamalar/differensial-tenglama-tushunchasi',
          slug: 'differensial-tenglamalar/differensial-tenglama-tushunchasi',
          duration: '10 daqiqa',
          whyRead: "Umumiy yechim (C qatnashgan) va boshlang'ich shart y(x₀) = y₀ orqali xususiy yechim topish.",
          focusPoints: ['Tenglama tartibi', 'Koshi masalasi mohiyati']
        },
        {
          stepNumber: 2,
          phase: 'Asosiy',
          badgeColor: '#10b981',
          title: 'O\'zgaruvchilari ajraladigan va bir jinsli tenglamalar',
          url: '/dars/differensial-tenglamalar/ozgaruvchilari-ajraladigan-tenglamalar',
          slug: 'differensial-tenglamalar/ozgaruvchilari-ajraladigan-tenglamalar',
          duration: '15 daqiqa',
          whyRead: "y' = dy/dx deb yozib, x larni bir tomonga, y larni ikkinchi tomonga yig'ib integrallash.",
          focusPoints: ['f(y)dy = g(x)dx ga keltirish', 'Bir jinsli tenglamada y = u·x almashtirishi']
        },
        {
          stepNumber: 3,
          phase: 'Asosiy',
          badgeColor: '#10b981',
          title: '1-tartibli chiziqli tenglamalar (y\' + P(x)y = Q(x)) va Bernulli usuli',
          url: '/dars/differensial-tenglamalar/birinchi-tartibli-chiziqli-tenglamalar',
          slug: 'differensial-tenglamalar/birinchi-tartibli-chiziqli-tenglamalar',
          duration: '15 daqiqa',
          whyRead: "y = u·v almashtirishi yordamida har qanday chiziqli va Bernulli tenglamasini 2 ta qadamda yechish.",
          focusPoints: ['y = u·v va y\' = u\'v + uv\' almashtirishi', 'Qavs ichini 0 ga tenglab v(x) ni, so\'ng u(x) ni topish']
        },
        {
          stepNumber: 4,
          phase: 'Chuqurlashtirilgan',
          badgeColor: '#f59e0b',
          title: '2-tartibli o\'zgarmas koeffitsiyentli chiziqli tenglamalar',
          url: '/dars/differensial-tenglamalar/ikkinchi-tartibli-chiziqli-differensial-tenglamalar',
          slug: 'differensial-tenglamalar/ikkinchi-tartibli-chiziqli-differensial-tenglamalar',
          duration: '15 daqiqa',
          whyRead: "ay'' + by' + cy = 0 tenglamani ak² + bk + c = 0 kvadrat tenglamaga keltirib 1 daqiqada yechish!",
          focusPoints: ['Xarakteristik tenglama ildizlari (D > 0, D = 0, D < 0)', 'Xususiy yechim tanlash (/dars/differensial-tenglamalar/xususiy-yechim-tanlash-va-amaliy-masalalar)']
        }
      ],
      interactiveTools: [
        {
          title: '🤖 AI Differensial Tenglama Yechuvchi',
          url: '/ai-yechuvchi',
          icon: '🤖',
          desc: "Masalan, y'' - 5y' + 6y = 0 deb yozing — darhol xarakteristik ildizlar va umumiy yechimni chiqarib beradi!"
        },
        {
          title: '📝 Differensial Tenglamalar Testi',
          url: '/testlar?modul=differensial-tenglamalar#quiz-section',
          icon: '📝',
          desc: "Modul bo'yicha test savollarini ishlang."
        }
      ],
      examTip: "1-tartibli chiziqli tenglamada har doim y' oldidagi koeffitsiyentni 1 ga keltiring (agar a(x)y' bo'lsa, avval ikki tomonni a(x) ga bo'ling!)."
    }
  },
  {
    id: 'ehtimollar-statistika',
    keywords: ['ehtimol', 'kombinatorika', 'bayes', 'bernulli sxemasi', 'puasson', 'muavr-laplas', 'tasodifiy miqdor', 'dispersiya', 'statistika', 'tanlanma', 'regressiya', 'pirson', 'styudent'],
    plan: {
      id: 'ehtimollar-statistika',
      topicTitle: 'Ehtimollar Nazariyasi va Matematik Statistika Yo\'l Xaritasi',
      moduleSlug: 'ehtimollar-nazariyasi',
      moduleTitle: '13–14-Modullar: Ehtimollar nazariyasi va Statistika',
      empathyMessage: "Ehtimollar nazariyasi — hayotiy mantiqqa eng yaqin fan! Masal shartidagi kalit so'zlarni («yoki» = qo'shish, «va» = ko'paytirish, «agar ma'lum bo'lsa» = Bayes) ajratib olsangiz, barcha masalalar oson yechiladi.",
      rootCauseWhyHard: "Talabalar kombinatorikada o'rin tartibi muhimmi (A_n^k) yoki muhim emasmi (C_n^k) ekanini hamda to'la ehtimol bilan Bayes formulasini farqlashda qiynalishadi.",
      estimatedTotalTime: '50 daqiqa',
      steps: [
        {
          stepNumber: 1,
          phase: 'Poydevor',
          badgeColor: '#6366f1',
          title: 'Kombinatorika (P_n, A_n^k, C_n^k) va klassik ehtimollik P = m/n',
          url: '/dars/ehtimollar-nazariyasi/kombinatorika-va-klassik-ehtimollik',
          slug: 'ehtimollar-nazariyasi/kombinatorika-va-klassik-ehtimollik',
          duration: '12 daqiqa',
          whyRead: "Sharchalar, biletlar va guruh tanlash masalalarida C_n^k kombinatsiyalar formulasini qo'llash.",
          focusPoints: ['Qachon C_n^k, qachon A_n^k ishlatiladi?', 'Klassik ehtimollik: 0 ≤ P(A) ≤ 1']
        },
        {
          stepNumber: 2,
          phase: 'Asosiy',
          badgeColor: '#10b981',
          title: 'Ehtimollarni qo\'shish, ko\'paytirish, To\'la ehtimol va Bayes formulasi',
          url: '/dars/ehtimollar-nazariyasi/toliq-ehtimollik-va-bayes-formulalari',
          slug: 'ehtimollar-nazariyasi/toliq-ehtimollik-va-bayes-formulalari',
          duration: '15 daqiqa',
          whyRead: "Gipotezalar (H₁, H₂, H₃) qatnashgan masalalarni shoxobchali daraxt sxemasi bilan yechish.",
          focusPoints: ['∑ P(H_i) = 1 tekshiruvi', 'To\'la ehtimol va Bayes orqali gipoteza ehtimolini qayta baholash']
        },
        {
          stepNumber: 3,
          phase: 'Asosiy',
          badgeColor: '#10b981',
          title: 'Bernulli sxemasi, Puasson va Tasodifiy miqdorlar (M(X), D(X))',
          url: '/dars/ehtimollar-nazariyasi/tasodifiy-miqdorlar-va-taqsimot-qonunlari',
          slug: 'ehtimollar-nazariyasi/tasodifiy-miqdorlar-va-taqsimot-qonunlari',
          duration: '15 daqiqa',
          whyRead: "Takroriy sinovlar (/dars/ehtimollar-nazariyasi/bernulli-sxemasi-va-puasson) hamda matematik kutilma M(X) va dispersiya D(X) ni hisoblash.",
          focusPoints: ['Taqsimot qatorida ∑ p_i = 1', 'D(X) = M(X²) - [M(X)]² tezkor formulasi']
        },
        {
          stepNumber: 4,
          phase: 'Chuqurlashtirilgan',
          badgeColor: '#f59e0b',
          title: 'Matematik statistika: Tanlanma, Baholash va Regressiya',
          url: '/dars/matematik-statistika/statistik-baholash-va-tavsiflar',
          slug: 'matematik-statistika/statistik-baholash-va-tavsiflar',
          duration: '15 daqiqa',
          whyRead: "Tanlanma o'rtacha, dispersiya, ishonchlilik oraliqlari va Pirson χ² mezoni (/dars/matematik-statistika/pirson-xi-kvadrat-va-moslik-kriteriylari).",
          focusPoints: ['Tanlanma xarakteristikalari', 'Chiziqli regressiya va korrelyatsiya (/dars/matematik-statistika/chiziqli-regressiya-va-spirmen-korrelyatsiyasi)']
        }
      ],
      interactiveTools: [
        {
          title: '🔮 Vizual Laboratoriya (Monte-Karlo va Galton Doskasi)',
          url: '/laboratoriya',
          icon: '🔮',
          desc: "Tasodifiy jarayonlar qanday qilib Gauss qo'ng'iroq egri chizig'ini hosil qilishini jonli ko'ring!"
        },
        {
          title: '📝 Ehtimollar Nazariyasi Testi',
          url: '/testlar?modul=ehtimollar-nazariyasi#quiz-section',
          icon: '📝',
          desc: "Ehtimollar va statistika bo'yicha imtihon testlarini ishlang."
        }
      ],
      examTip: "Ehtimollar nazariyasida javobingiz hech qachon 1 dan katta yoki manfiy chiqmasligi, dispersiya D(X) esa har doim musbat bo'lishi shart!"
    }
  },
  {
    id: 'kompleks-sonlar',
    keywords: ['kompleks', 'mavhum', 'trigonometrik shakl', 'eyler shakli', 'muavr', 'koshi-riman', 'laplas almashtirishi', 'loran', 'chegirma'],
    plan: {
      id: 'kompleks-sonlar',
      topicTitle: 'Kompleks Sonlar, Muavr Formulasi va TFKP',
      moduleSlug: 'kompleks-sonlar',
      moduleTitle: '4-Modul: Kompleks sonlar va TFKP',
      empathyMessage: "Kompleks sonlar (z = a + bi) oddiy algebraik ifodalarga juda o'xshaydi — faqat i² = -1 ekanini yodda tutsangiz bas!",
      rootCauseWhyHard: "Talabalar kompleks sonning argumenti φ ni topishda nuqta qaysi chorakda (II yoki III chorakda ±π qo'shish kerakligi) joylashganiga e'tibor bermaydilar.",
      estimatedTotalTime: '40 daqiqa',
      steps: [
        {
          stepNumber: 1,
          phase: 'Poydevor',
          badgeColor: '#6366f1',
          title: 'Kompleks son tushunchasi va arifmetik amallar',
          url: '/dars/kompleks-sonlar/kompleks-sonlar-amallar',
          slug: 'kompleks-sonlar/kompleks-sonlar-amallar',
          duration: '12 daqiqa',
          whyRead: "Kompleks sonlarni qo'shish, ko'paytirish va maxrajni qo'shmasiga (a - bi) ko'paytirib bo'lish.",
          focusPoints: ['i² = -1 qoidasi', 'Qo\'shma kompleks son z̄ = a - bi']
        },
        {
          stepNumber: 2,
          phase: 'Asosiy',
          badgeColor: '#10b981',
          title: 'Trigonometrik va Ko\'rsatkichli (Eyler) shakl',
          url: '/dars/kompleks-sonlar/trigonometrik-va-korsatkichli-shakl',
          slug: 'kompleks-sonlar/trigonometrik-va-korsatkichli-shakl',
          duration: '15 daqiqa',
          whyRead: "Modul r = √(a²+b²) va argument φ ni choraklarga qarab bexato topish.",
          focusPoints: ['z = r(cos φ + i sin φ) = r·e^(iφ)', 'Choraklarga qarab φ ni aniqlash jadvali']
        },
        {
          stepNumber: 3,
          phase: 'Chuqurlashtirilgan',
          badgeColor: '#f59e0b',
          title: 'Muavr formulasi: Darajaga oshirish va ildiz chiqarish',
          url: '/dars/kompleks-sonlar/muavr-formulasi-va-ildiz-chiqarish',
          slug: 'kompleks-sonlar/muavr-formulasi-va-ildiz-chiqarish',
          duration: '15 daqiqa',
          whyRead: "z^n va n-darajali ildizning barcha n ta qiymatini topish.",
          focusPoints: ['z^n = r^n (cos nφ + i sin nφ)', 'Ildiz chiqarishda k = 0, 1, ..., n-1 qiymatlarni qo\'yish']
        }
      ],
      interactiveTools: [
        {
          title: '🤖 AI Kompleks Son Yechuvchi',
          url: '/ai-yechuvchi',
          icon: '🤖',
          desc: "Kompleks sonlar ustida amallarni yozib qadamma-qadam tekshiring."
        },
        {
          title: '📝 Kompleks Sonlar Testi',
          url: '/testlar?modul=kompleks-sonlar#quiz-section',
          icon: '📝',
          desc: "Modul bo'yicha imtihon savollarini ishlang."
        }
      ],
      examTip: "Kompleks sonni trigonometrik shaklga o'tkazishdan oldin albatta uni koordinata tekisligida (a, b) nuqta sifatida belgilab, qaysi chorakda yotishini ko'z bilan tekshiring!"
    }
  },
  {
    id: 'qatorlar',
    keywords: ['qator', 'dalamber', 'koshi alomati', 'leybnits', 'yaqinlashish radiusi', 'makloren', 'fure'],
    plan: {
      id: 'qatorlar',
      topicTitle: 'Sonli, Darajali va Fure Qatorlari Strategiyasi',
      moduleSlug: 'qatorlar',
      moduleTitle: '11-Modul: Qatorlar va Fure tahlili',
      empathyMessage: "Qatorlar mavzusida asosiy savol bitta: «Cheksiz yig'indi chekli songa yaqinlashadimi yoki cheksizlikka uzoqlashadimi?» Buning uchun 3 ta asosiy alomatni bilsangiz yetarli!",
      rootCauseWhyHard: "Talabalar faktorial (n!) qatnashganda D'Alamber, n-daraja qatnashganda esa Koshi radikal alomatini tanlash kerakligini adashtirishadi.",
      estimatedTotalTime: '45 daqiqa',
      steps: [
        {
          stepNumber: 1,
          phase: 'Poydevor',
          badgeColor: '#6366f1',
          title: 'Sonli qatorlar va yaqinlashishning zaruriy sharti',
          url: '/dars/qatorlar/sonli-qatorlar-va-yaqinlashish',
          slug: 'qatorlar/sonli-qatorlar-va-yaqinlashish',
          duration: '10 daqiqa',
          whyRead: "Agar lim a_n ≠ 0 bo'lsa, qator darhol uzoqlashadi! Eng birinchi tekshiriladigan qoida.",
          focusPoints: ['Yaqinlashishning zaruriy sharti: lim a_n = 0', 'Garmonik va geometrik qatorlar']
        },
        {
          stepNumber: 2,
          phase: 'Asosiy',
          badgeColor: '#10b981',
          title: 'Musbat hadli qatorlar: D\'Alamber, Koshi va Integral alomatlar',
          url: '/dars/qatorlar/musbat-hadli-qatorlar-alomatlari',
          slug: 'qatorlar/musbat-hadli-qatorlar-alomatlari',
          duration: '15 daqiqa',
          whyRead: "D < 1 bo'lsa yaqinlashadi, D > 1 bo'lsa uzoqlashadi qoidasi.",
          focusPoints: ['Faktorialli qatorda D\'Alamber: lim (a_{n+1}/a_n)', 'Darajali qatorda Koshi: lim n-ildiz(a_n)']
        },
        {
          stepNumber: 3,
          phase: 'Asosiy',
          badgeColor: '#10b981',
          title: 'Darajali qatorlarning yaqinlashish radiusi va Teylor/Fure qatorlari',
          url: '/dars/qatorlar/darajali-qatorning-yaqinlashish-radiusi-va-sohasi',
          slug: 'qatorlar/darajali-qatorning-yaqinlashish-radiusi-va-sohasi',
          duration: '15 daqiqa',
          whyRead: "Yaqinlashish intervali (-R, R) va chegaraviy nuqtalarni tekshirish hamda Fure qatorlari (/dars/qatorlar/fure-qatorlari-va-trigonometrik-yoyilma).",
          focusPoints: ['R radiusni topish', 'Chegara nuqtalarida Leybnits alomatini (/dars/qatorlar/ishorasi-almashinuvchi-qatorlar-leybnits) tekshirish']
        }
      ],
      interactiveTools: [
        {
          title: '🔮 Vizual Laboratoriya (Fure Garmonik Sintezatori)',
          url: '/laboratoriya',
          icon: '🔮',
          desc: "Oddiy sinus to'lqinlar qo'shilib qanday qilib murakkab signal hosil qilishini jonli ko'ring!"
        },
        {
          title: '📝 Qatorlar Testi',
          url: '/testlar?modul=qatorlar#quiz-section',
          icon: '📝',
          desc: "Qatorlar bo'yicha imtihon testlarini ishlang."
        }
      ],
      examTip: "Darajali qatorning yaqinlashish sohasini topishda (-R, R) intervalning ikkala uchini (x = -R va x = R) qatorga qo'yib alohida tekshirishni unutmang!"
    }
  },
  {
    id: 'kop-ozgaruvchili-karrali',
    keywords: ['xususiy hosila', 'gradient', 'ekstremum ikki', 'karrali integral', 'ikki karrali', 'uch karrali', 'grin', 'stoks', 'divergensiya', 'rotor', 'urinma tekislik'],
    plan: {
      id: 'kop-ozgaruvchili-karrali',
      topicTitle: 'Ko\'p O\'zgaruvchili Funksiyalar va Karrali Integrallar',
      moduleSlug: 'kop-ozgaruvchili-funksiyalar',
      moduleTitle: '9–10-Modullar: Ko\'p o\'zgaruvchili funksiyalar va Karrali integrallar',
      empathyMessage: "Ko'p o'zgaruvchili funksiyalar z = f(x, y) da xususiy hosila olish oddiy hosila bilan bir xil — faqat bitta o'zgaruvchidan hosila olayotganda ikkinchisini oddiy son (const) deb tasavvur qilasiz!",
      rootCauseWhyHard: "Talabalar AC - B² ekstremum diskriminantida ikkinchi tartibli aralash hosila B = z''_xy ni hisoblashda va ikki karrali integralda integrallash chegaralarini chizmaga qarab qo'yishda qiynalishadi.",
      estimatedTotalTime: '50 daqiqa',
      steps: [
        {
          stepNumber: 1,
          phase: 'Poydevor',
          badgeColor: '#6366f1',
          title: 'Xususiy hosilalar (∂z/∂x, ∂z/∂y) va To\'liq differensial',
          url: '/dars/kop-ozgaruvchili-funksiyalar/xususiy-hosilalar',
          slug: 'kop-ozgaruvchili-funksiyalar/xususiy-hosilalar',
          duration: '12 daqiqa',
          whyRead: "x bo'yicha hosila olayotganda y ni o'zgarmas son deb qarash ko'nikmasini shakllantirasiz.",
          focusPoints: ['1- va 2-tartibli xususiy hosilalar', 'Shvars teoremasi: z\'\'_xy = z\'\'_yx']
        },
        {
          stepNumber: 2,
          phase: 'Asosiy',
          badgeColor: '#10b981',
          title: 'Ikki o\'zgaruvchili funksiya ekstremumi va Gradient',
          url: '/dars/kop-ozgaruvchili-funksiyalar/ikki-ozgaruvchili-funksiya-ekstremumi',
          slug: 'kop-ozgaruvchili-funksiyalar/ikki-ozgaruvchili-funksiya-ekstremumi',
          duration: '15 daqiqa',
          whyRead: "Statsionar nuqtalarni topish va Δ = AC - B² > 0 sharti orqali maksimum/minimumni aniqlash.",
          focusPoints: ['z\'_x = 0, z\'_y = 0 sistemasi', 'Gradient va yo\'nalish bo\'yicha hosila (/dars/kop-ozgaruvchili-funksiyalar/yonalish-boyicha-hosila-gradient-va-shartli-ekstremum)']
        },
        {
          stepNumber: 3,
          phase: 'Chuqurlashtirilgan',
          badgeColor: '#f59e0b',
          title: 'Ikki va uch karrali integrallarni hisoblash',
          url: '/dars/karrali-integrallar/ikki-karrali-integral-va-hisoblash',
          slug: 'karrali-integrallar/ikki-karrali-integral-va-hisoblash',
          duration: '18 daqiqa',
          whyRead: "D sohani chizib, ikki karrali integralni ichma-ich ikkita oddiy integralga keltirish.",
          focusPoints: ['Tashqi chegaralar doimo o\'zgarmas son bo\'lishi shart!', 'Doiraviy sohalarda qutb koordinatalariga o\'tish (/dars/karrali-integrallar/qutb-koordinatalarida-ikki-karrali-integral)']
        }
      ],
      interactiveTools: [
        {
          title: '🔮 Vizual Laboratoriya (3D Sirtlar va Gradient Descent)',
          url: '/laboratoriya',
          icon: '🔮',
          desc: "3D fazoda z = f(x, y) sirtlarini aylantirib ko'ring va gradient pasayish qanday ishlashini kuzating!"
        },
        {
          title: '📝 Ko\'p O\'zgaruvchili Funksiyalar Testi',
          url: '/testlar?modul=kop-ozgaruvchili-funksiyalar#quiz-section',
          icon: '📝',
          desc: "Modul bo'yicha imtihon testlarini ishlang."
        }
      ],
      examTip: "Ikki karrali integralda yakuniy javobda hech qachon x yoki y qolib ketmasligi kerak — tashqi integral chegaralari har doim aniq sonlar [a, b] bo'ladi!"
    }
  },
  {
    id: 'funksiyalar-grafiklar',
    keywords: ['funksiya', 'aniqlanish sohasi', 'asimptota', 'qavariq', 'egilish nuqtasi', 'grafik yasash', 'juft', 'toq', 'giperbolik'],
    plan: {
      id: 'funksiyalar-grafiklar',
      topicTitle: 'Funksiyani To\'liq Tekshirish va Grafik Yasash',
      moduleSlug: 'funksiyalar-grafiklar',
      moduleTitle: '6-Modul: Funksiyalar va grafiklar',
      empathyMessage: "Funksiyani tekshirish va grafigini chizish — barcha analiz bilimlarini bitta chiroyli chizmada birlashtiruvchi mavzu!",
      rootCauseWhyHard: "Talabalar vertikal va og'ma (y = kx + b) asimptotalarni topishda hamda 1- va 2-tartibli hosila ishoralar jadvalini tuzishda adashishadi.",
      estimatedTotalTime: '45 daqiqa',
      steps: [
        {
          stepNumber: 1,
          phase: 'Poydevor',
          badgeColor: '#6366f1',
          title: 'Funksiyaning aniqlanish sohasi D(f) va qiymatlar sohasi',
          url: '/dars/funksiyalar-grafiklar/funksiya-aniqlanish-va-qiymatlar-sohasi',
          slug: 'funksiyalar-grafiklar/funksiya-aniqlanish-va-qiymatlar-sohasi',
          duration: '12 daqiqa',
          whyRead: "Maxraj ≠ 0, juft ildiz osti ≥ 0 va logarifm ichi > 0 shartlarini qo'yish.",
          focusPoints: ['Kasr, ildiz va logarifmik shartlar', 'Intervallar usuli']
        },
        {
          stepNumber: 2,
          phase: 'Asosiy',
          badgeColor: '#10b981',
          title: 'Egri chiziq asimptotalari: Vertikal, gorizontal va og\'ma',
          url: '/dars/funksiyalar-grafiklar/egri-chiziq-asimptotalari-vertikal-gorizontal-ogma',
          slug: 'funksiyalar-grafiklar/egri-chiziq-asimptotalari-vertikal-gorizontal-ogma',
          duration: '15 daqiqa',
          whyRead: "k = lim f(x)/x va b = lim [f(x) - kx] formulalari bilan og'ma asimptotani topish.",
          focusPoints: ['Uzilish nuqtalarida vertikal asimptota', 'x → ±∞ da og\'ma asimptota']
        },
        {
          stepNumber: 3,
          phase: 'Chuqurlashtirilgan',
          badgeColor: '#f59e0b',
          title: 'Funksiyani to\'liq 7 bosqichda tekshirish va grafigini yasash',
          url: '/dars/funksiyalar-grafiklar/funksiyani-toliq-tekshirish-sxemasi',
          slug: 'funksiyalar-grafiklar/funksiyani-toliq-tekshirish-sxemasi',
          duration: '18 daqiqa',
          whyRead: "Ekstremumlar (f'(x) = 0) va qavariqlik/egilish nuqtalari (f''(x) = 0) orqali to'liq grafik chizish.",
          focusPoints: ['O\'sish-kamayish oraliqlari', 'Qavariqlik va egilish nuqtalari (/dars/funksiyalar-grafiklar/qavariqlik-botiqlik-va-egilish-nuqtalari)']
        }
      ],
      interactiveTools: [
        {
          title: '📊 Interaktiv 2D Grafik Yasovchi',
          url: '/grafik',
          icon: '📊',
          desc: "O'zingiz tekshirayotgan funksiyani yozing va grafigini darhol ekranda ko'rib tekshiring!"
        },
        {
          title: '📝 Funksiyalar va Grafiklar Testi',
          url: '/testlar?modul=funksiyalar-grafiklar#quiz-section',
          icon: '📝',
          desc: "Modul bo'yicha imtihon testlarini ishlang."
        }
      ],
      examTip: "Funksiyani tekshirishni boshlashdan oldin uni /grafik kalkulyatorida chizib ko'ring — shunda qayerda maksimum, minimum va asimptota chiqishi kerakligini oldindan bilib olasiz!"
    }
  },
  {
    id: 'maktab-noldan',
    keywords: ['noldan', 'boshidan', 'maktab', 'bazam bosh', 'nimadan boshlay', 'kvadrat tenglama', 'trigonometriya', 'logarifm', 'modul', 'progressiya', 'kasr'],
    plan: {
      id: 'maktab-noldan',
      topicTitle: 'Oliy Matematikani Noldan Boshlash (Maktab Poydevori + 1-Kurs)',
      moduleSlug: 'maktab-kursi',
      moduleTitle: '1-Modul: Maktab kursini takrorlash',
      empathyMessage: "Eng to'g'ri qaror! Oliy matematikada qiynalishning 90% sababi — maktabdagi kasrlar, darajalar, logarifm va trigonometriya qoidalarining yoddan chiqqanidir. Quyidagi 4 qadamda poydevoringizni mustahkamlab olasiz!",
      rootCauseWhyHard: "Maktab bazasidagi qisqa ko'paytirish formulalari, manfiy va kasr darajalar hamda trigonometrik burchaklar jadvali esdan chiqsa, limit, hosila va integral misollarida har qadamda to'xtab qolish kuzatiladi.",
      estimatedTotalTime: '60 daqiqa',
      steps: [
        {
          stepNumber: 1,
          phase: 'Poydevor',
          badgeColor: '#6366f1',
          title: 'Algebraik ayniyatlar, qisqa ko\'paytirish va Ko\'p qavatli kasrlar',
          url: '/dars/maktab-kursi/algebraik-ayniyatlar-va-qisqa-kopaytirish',
          slug: 'maktab-kursi/algebraik-ayniyatlar-va-qisqa-kopaytirish',
          duration: '15 daqiqa',
          whyRead: "(a±b)², a²-b³ formulalari hamda kasrlar ustida amallarni (/dars/maktab-kursi/kop-qavatli-kasrlar-va-trigonometrik-jadvallar) tezda eslab olasiz.",
          focusPoints: ['7 ta qisqa ko\'paytirish formulasi', 'Kasrlarni umumiy maxrajga keltirish va daraja xossalari']
        },
        {
          stepNumber: 2,
          phase: 'Asosiy',
          badgeColor: '#10b981',
          title: 'Tenglamalar, tengsizliklar va Intervallar usuli',
          url: '/dars/maktab-kursi/tenglamalar-va-tengsizliklar',
          slug: 'maktab-kursi/tenglamalar-va-tengsizliklar',
          duration: '15 daqiqa',
          whyRead: "Kvadrat tenglama (Diskriminant va Viyet) hamda intervallar usuli (+ - +) — funksiya va hosila mavzularining asosi!",
          focusPoints: ['Diskriminant va ko\'paytuvchilarga ajratish', 'Son o\'qida ishoralar almashinishi']
        },
        {
          stepNumber: 3,
          phase: 'Asosiy',
          badgeColor: '#10b981',
          title: 'Ko\'rsatkichli va Logarifmik ifodalar',
          url: '/dars/maktab-kursi/korsatkichli-va-logarifmik-ifodalar',
          slug: 'maktab-kursi/korsatkichli-va-logarifmik-ifodalar',
          duration: '15 daqiqa',
          whyRead: "ln(x) va e^x oliy matematikaning har bir darsida uchraydi.",
          focusPoints: ['log_a(b·c) = log_a(b) + log_a(c)', 'Natural logarifm ln e = 1, ln 1 = 0']
        },
        {
          stepNumber: 4,
          phase: 'Chuqurlashtirilgan',
          badgeColor: '#f59e0b',
          title: 'Trigonometriya asoslari (sin, cos, tg, ctg)',
          url: '/dars/maktab-kursi/trigonometriya-asoslari',
          slug: 'maktab-kursi/trigonometriya-asoslari',
          duration: '15 daqiqa',
          whyRead: "sin²x + cos²x = 1 va asosiy burchaklar (30°, 45°, 60°, 90°) qiymatlari.",
          focusPoints: ['Asosiy trigonometrik ayniyatlar', 'Ikkilangan burchak va darajani pasaytirish formulalari']
        }
      ],
      interactiveTools: [
        {
          title: '📄 Barcha Formulalar va PDF Shpargalkalar',
          url: '/shpargalkalar',
          icon: '📄',
          desc: "Maktab va 1-kursning eng kerakli jadvallarini 1 sahifada ko'ring yoki chop eting."
        },
        {
          title: '📝 Maktab Kursi Testi',
          url: '/testlar?modul=maktab-kursi#quiz-section',
          icon: '📝',
          desc: "Poydevor bilimingizni 20 ta testda sinab ko'ring."
        }
      ],
      examTip: "Ushbu 4 ta darsni o'qib chiqqach, 1-semestr uchun «2-Modul: Chiziqli algebra» (/modullar/chiziqli-algebra) yoki «5-Modul: Limitlar» (/modullar/limitlar) ga bemalol o'tishingiz mumkin!"
    }
  }
];

/**
 * Finds the best matching StudyStrategyPlan for any natural language user query and mode.
 */
export function generateStudyStrategy(
  rawQuery: string,
  mode: 'express' | 'deep' | 'exam' = 'deep'
): StudyStrategyPlan {
  const q = normalizeQueryForStrategy(rawQuery);

  let bestRule = STRATEGY_RULES[STRATEGY_RULES.length - 1]; // Default to "Noldan boshlash" if completely generic
  let bestScore = 0;

  for (const rule of STRATEGY_RULES) {
    let score = 0;
    for (const kw of rule.keywords) {
      if (q.includes(kw)) {
        score += kw.length >= 6 ? 4 : 2;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestRule = rule;
    }
  }

  const base = bestRule.plan;

  if (mode === 'express') {
    // Express mode: Only 1-2 core practical lessons + instant calculator + express advice
    const coreSteps = base.steps.filter((s) => s.phase === 'Asosiy' || s.phase === 'Amaliyot');
    const selectedSteps = (coreSteps.length >= 2 ? coreSteps.slice(0, 2) : base.steps.slice(0, 2)).map((s, idx) => ({
      ...s,
      stepNumber: idx + 1,
      phase: 'Asosiy' as const,
      duration: '10–12 daqiqa',
      whyRead: `[Tezkor Reja] ${s.whyRead}`
    }));

    return {
      ...base,
      topicTitle: `⚡ Ekspress Reja: ${base.topicTitle} (Faqat eng asosiysi)`,
      estimatedTotalTime: '20–25 daqiqa',
      empathyMessage: `Vaqtingiz oz bo'lsa, xavotir olmang! Ortiqcha nazariyalarga to'xtalmasdan, aynan shu mavzuning 2 ta asosiy darsini o'qib, formulalarni kalkulyatorda sinab olsangiz, ertangi dars yoki oraliqqa tayyor bo'lasiz.`,
      rootCauseWhyHard: `Tezkor o'rganishda eng asosiysi — formulaning ishoralarini yodlab olish va darhol amaliy misol ustida qo'llash.`,
      steps: selectedSteps,
      examTip: `⚡ Ekspress hiyla: ${base.examTip}`
    };
  }

  if (mode === 'exam') {
    // Exam mode: Focus on exam traps, shortcuts, and quiz practice
    const examSteps = base.steps.map((s, idx) => ({
      ...s,
      stepNumber: idx + 1,
      whyRead: `[Imtihonga Tayyorgarlik] Imtihonda tushadigan tipik savollar va qoidalar: ${s.whyRead}`
    }));

    return {
      ...base,
      topicTitle: `📝 Imtihon Rejasi: ${base.topicTitle}`,
      estimatedTotalTime: '35–45 daqiqa',
      empathyMessage: `Oraliq va yakuniy nazoratlarda eng ko'p ball olib keladigan tipik savollar, hisoblashdagi tuzoqlar va test variantlariga yo'naltirilgan tayyorgarlik strategiyasi.`,
      rootCauseWhyHard: `Imtihonda talabalar odatda vaqt yetishmasligidan va shoshilish tufayli oddiy arifmetik ishoralarda adashadilar.`,
      steps: examSteps,
      examTip: `🎯 Imtihon tekshiruvi: ${base.examTip}`
    };
  }

  // Default: Full Deep Foundation Plan
  return base;
}

/**
 * Checks whether a query looks like a student asking for help/strategy or a topic roadmap
 */
export function isStrategyOrTopicHelpQuery(rawQuery: string): boolean {
  const q = normalizeQueryForStrategy(rawQuery);
  if (q.length < 3) return false;
  const intentPhrases = [
    'qiynal', 'tushunma', 'nimadan', 'qanday', 'strategiya', 'reja',
    'ketma-ket', 'imtihon', 'oraliq', 'yakuniy', 'noldan', 'yordam',
    'maslahat', 'organmoqchi', "o'rgan", 'darsda'
  ];
  return intentPhrases.some((p) => q.includes(p));
}

/**
 * Full compact curriculum reference passed to Gemini AI so it knows all 14 modules and key URLs of oliy-matematika.vercel.app
 */
export const SITE_CURRICULUM_PROMPT_MAP = `
Siz OliyMatematika (https://oliy-matematika.vercel.app) platformasining Shaxsiy AI O'quv Strategi va Akademik Mentorisiz.
Talaba sizga qaysi mavzuda qiynalayotganini yoki nimani o'rganmoqchi ekanini yozadi.
Sizning vazifangiz — unga ruhiy dalda berib, saytimizdagi mavjud darslarni ANIQ KETMA-KETLIKDA ("1-qadamda buni o'qing, 2-qadamda buni o'qing, 3-qadamda bu kalkulyatorda mashq qiling") ko'rsatib, shaxsiy strategiya tuzib berishdir!

SAYTIMIZDAGI BARCHA MODULLAR VA ASOSIY DARSLAR XARITASI (Faqat shu markdown linklarni bering):
1-Modul (Maktab kursi):
- [Algebraik ayniyatlar va qisqa ko'paytirish](/dars/maktab-kursi/algebraik-ayniyatlar-va-qisqa-kopaytirish)
- [Tenglamalar va intervallar usuli](/dars/maktab-kursi/tenglamalar-va-tengsizliklar)
- [Ko'rsatkichli va logarifmik ifodalar](/dars/maktab-kursi/korsatkichli-va-logarifmik-ifodalar)
- [Trigonometriya asoslari](/dars/maktab-kursi/trigonometriya-asoslari)
- [Ko'p qavatli kasrlar va jadvallar](/dars/maktab-kursi/kop-qavatli-kasrlar-va-trigonometrik-jadvallar)

2-Modul (Chiziqli algebra):
- [Matritsalar tushunchasi va amallar](/dars/chiziqli-algebra/matritsalar-tushunchasi-va-chiziqli-amallar)
- [Matritsalarni ko'paytirish qoidalari](/dars/chiziqli-algebra/matritsalarni-kopaytirish-qoidalari)
- [2- va 3-tartibli determinantlar](/dars/chiziqli-algebra/determinantlar-va-geometrik-manosi)
- [Minorlar, algebraik to'ldiruvchilar va Laplas teoremasi](/dars/chiziqli-algebra/minorlar-algebraik-toldiruvchilar-laplas)
- [Determinant xossalari va uchburchak shakl](/dars/chiziqli-algebra/determinant-xossalari-va-uchburchak-shakl)
- [Teskari matritsa topish](/dars/chiziqli-algebra/teskari-matritsa-mavjudlik-va-topish)
- [Matritsa rangi](/dars/chiziqli-algebra/matritsa-rangi-va-pogonasimon-shakl)
- [Kramer qoidasi](/dars/chiziqli-algebra/kramer-qoidasi-va-geometrik-yechim)
- [Matritsa usuli (X = A⁻¹B)](/dars/chiziqli-algebra/matritsa-usuli-bilan-tenglamalar-yechish)
- [Gauss usuli](/dars/chiziqli-algebra/gauss-usuli-pogonasimon-va-teskari-yurish)
- [Matritsaning xos sonlari va xos vektorlari](/dars/chiziqli-algebra/matritsaning-xos-sonlari-va-xos-vektorlari)
- [Chiziqli dasturlash va Simpleks usuli](/dars/chiziqli-algebra/chiziqli-dasturlash-va-simpleks-usuli)

3-Modul (Vektorlar va analitik geometriya):
- [Vektorlar va chiziqli amallar](/dars/vektorlar-geometriya/vektorlar-va-chiziqli-amallar)
- [Skalyar ko'paytma va burchak](/dars/vektorlar-geometriya/skalyar-kopaytma)
- [Vektor va aralash ko'paytma (Yuza va Piramida hajmi)](/dars/vektorlar-geometriya/vektor-va-aralash-kopaytma)
- [Tekislikdagi to'g'ri chiziq](/dars/vektorlar-geometriya/tekislikdagi-togri-chiziq)
- [Fazodagi tekislik va to'g'ri chiziq](/dars/vektorlar-geometriya/fazodagi-tekislik-va-togri-chiziq)
- [Uchburchakning 12 ta elementi](/dars/vektorlar-geometriya/tekislikda-uchburchak-va-chiziqli-tengsizliklar)
- [Ikkinchi tartibli chiziqlar va sirtlar](/dars/vektorlar-geometriya/ikkinchi-tartibli-chiziqlar-va-sirtlar)

4-Modul (Kompleks sonlar):
- [Kompleks sonlar va amallar](/dars/kompleks-sonlar/kompleks-sonlar-amallar)
- [Trigonometrik va Eyler shakli](/dars/kompleks-sonlar/trigonometrik-va-korsatkichli-shakl)
- [Muavr formulasi va ildiz chiqarish](/dars/kompleks-sonlar/muavr-formulasi-va-ildiz-chiqarish)
- [TFKP va Koshi-Riman shartlari](/dars/kompleks-sonlar/tfkp-va-koshi-riman-shartlari)
- [Operatsion hisob va Laplas almashtirishi](/dars/kompleks-sonlar/operatsion-hisob-va-laplas-almashtirishi)

5-Modul (Limitlar):
- [Limit nima va mohiyati](/dars/limitlar/limit-nima)
- [Aniqmasliklar va ularni ochish](/dars/limitlar/aniqmasliklar-va-ularni-ochish)
- [Cheksiz kichik funksiyalar va ekvivalentlik](/dars/limitlar/cheksiz-kichik-va-katta-funksiyalar)
- [1^∞ va Ikkinchi ajoyib limit](/dars/limitlar/bir-ning-cheksiz-darajasi-va-ikkinchi-ajoyib-limit)
- [Irratsional limitlar (Qo'shmaga ko'paytirish)](/dars/limitlar/irratsional-ifodalar-limitlari-qoshmaga-kopaytirish)

6-Modul (Funksiyalar va grafiklar):
- [Aniqlanish va qiymatlar sohasi](/dars/funksiyalar-grafiklar/funksiya-aniqlanish-va-qiymatlar-sohasi)
- [Egri chiziq asimptotalari](/dars/funksiyalar-grafiklar/egri-chiziq-asimptotalari-vertikal-gorizontal-ogma)
- [Funksiyani 7 bosqichda to'liq tekshirish](/dars/funksiyalar-grafiklar/funksiyani-toliq-tekshirish-sxemasi)

7-Modul (Hosila va differensial):
- [Differensiallash qoidalari va jadval](/dars/hosila/differensiallash-qoidalari-va-jadval)
- [Murakkab funksiya hosilasi (Zanjir qoidasi)](/dars/hosila/murakkab-funksiya-hosilasi)
- [Logarifmik differensiallash](/dars/hosila/logarifmik-differensiallash-usuli)
- [Urinma va normal tenglamalari](/dars/hosila/urinma-va-normal-tenglamalari-taqribiy-hisoblash)
- [L'Opital qoidasi](/dars/hosila/lopital-qoidasi)

8-Modul (Integrallar):
- [Boshlang'ich funksiya va integral jadvali](/dars/integrallar/boshlangich-funksiya-va-aniqmas-integral)
- [O'zgaruvchini almashtirish usuli](/dars/integrallar/integrallash-usullari-almashtirish)
- [Bo'laklab integrallash](/dars/integrallar/bolaklab-integrallash)
- [Ratsional kasrlar integrali](/dars/integrallar/ratsional-kasrlar-va-xosmas-integrallar)
- [Aniq integral va Nyuton-Leybnits](/dars/integrallar/aniq-integral-va-nyuton-leybnits)

9-10-Modullar (Ko'p o'zgaruvchili funksiyalar va Karrali integrallar):
- [Xususiy hosilalar](/dars/kop-ozgaruvchili-funksiyalar/xususiy-hosilalar)
- [Ikki o'zgaruvchili funksiya ekstremumi](/dars/kop-ozgaruvchili-funksiyalar/ikki-ozgaruvchili-funksiya-ekstremumi)
- [Gradient va yo'nalish bo'yicha hosila](/dars/kop-ozgaruvchili-funksiyalar/yonalish-boyicha-hosila-gradient-va-shartli-ekstremum)
- [Ikki karrali integral](/dars/karrali-integrallar/ikki-karrali-integral-va-hisoblash)
- [Egri chiziqli integral va Grin formulasi](/dars/karrali-integrallar/egri-chiziqli-integrallar-va-grin-formulasi)

11-Modul (Qatorlar):
- [Sonli qatorlar](/dars/qatorlar/sonli-qatorlar-va-yaqinlashish)
- [Musbat hadli qatorlar (D'Alamber va Koshi)](/dars/qatorlar/musbat-hadli-qatorlar-alomatlari)
- [Darajali qatorning yaqinlashish radiusi](/dars/qatorlar/darajali-qatorning-yaqinlashish-radiusi-va-sohasi)
- [Fure qatorlari](/dars/qatorlar/fure-qatorlari-va-trigonometrik-yoyilma)

12-Modul (Differensial tenglamalar):
- [O'zgaruvchilari ajraladigan tenglamalar](/dars/differensial-tenglamalar/ozgaruvchilari-ajraladigan-tenglamalar)
- [1-tartibli chiziqli va Bernulli tenglamalari](/dars/differensial-tenglamalar/birinchi-tartibli-chiziqli-tenglamalar)
- [2-tartibli o'zgarmas koeffitsiyentli tenglamalar](/dars/differensial-tenglamalar/ikkinchi-tartibli-chiziqli-differensial-tenglamalar)

13-14-Modullar (Ehtimollar va Statistika):
- [Kombinatorika va klassik ehtimollik](/dars/ehtimollar-nazariyasi/kombinatorika-va-klassik-ehtimollik)
- [To'la ehtimol va Bayes formulalari](/dars/ehtimollar-nazariyasi/toliq-ehtimollik-va-bayes-formulalari)
- [Tasodifiy miqdorlar (M(X), D(X))](/dars/ehtimollar-nazariyasi/tasodifiy-miqdorlar-va-taqsimot-qonunlari)
- [Statistik baholash va tanlanma](/dars/matematik-statistika/statistik-baholash-va-tavsiflar)

SAYTNING INTERAKTIV ASBOBLARI:
- [Matritsa va Determinant Kalkulyatori](/matritsa)
- [2D/3D Vektor Kalkulyatori](/vektor)
- [Simvolik Hosila Kalkulyatori](/hosila)
- [2D Funksiya Grafik Yasovchi](/grafik)
- [Vizual Matematik Laboratoriya](/laboratoriya)
- [Interaktiv Testlar Bazasi](/testlar)
- [PDF Shpargalkalar](/shpargalkalar)
`;
