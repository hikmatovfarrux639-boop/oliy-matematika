export interface MathParadox {
  id: string;
  title: string;
  subtitle: string;
  category: 'ehtimollik' | 'cheksizlik' | 'mantiq' | 'geometriya';
  story: string;
  explanation: string;
  mathFormula?: string;
  takeaway: string;
}

export const PARADOXES_DATABASE: MathParadox[] = [
  {
    id: 'monty-hall',
    title: 'Monti Xoll paradoksi (Uchta eshik jumbog\'i)',
    subtitle: 'Nega eshikni o\'zgartirish yutish ehtimolini 2 barobar oshiradi?',
    category: 'ehtimollik',
    story: 'Siz teleko\'rsatuvdasiz. Oldingizda 3 ta yopiq eshik turibdi. Ulardan birining ortida avtomobil, qolgan ikkitasining ortida esa echki bor. Siz 1-eshikni tanladingiz. Boshlovchi (avtomobil qayerdaligini bilgan holda) qolgan ikkita eshikdan echki bor bo\'lgan 3-eshikni ochib ko\'rsatadi va sizga savol beradi: "Tanlovingizni o\'zgartirib, 2-eshikni tanlashni xohlaysizmi?"',
    explanation: 'Ko\'pchilik ikkita eshik qolganligi sababli ehtimollik 50/50 deb o\'ylaydi. Ammo bu noto\'g\'ri! Siz birinchi tanlagan 1-eshikda avtomobil bo\'lish ehtimoli dastlab 1/3 (33.3%) edi. Qolgan ikkita eshikda avtomobil bo\'lish ehtimoli esa 2/3 (66.7%) edi. Boshlovchi echkili eshikni ochganida, u 66.7% lik barcha ehtimollikni qolgan yagona 2-eshikka jamlab beradi! Shuning uchun tanlovni o\'zgartirsangiz, yutish ehtimolingiz 2/3 (66.7%) ga yetadi.',
    mathFormula: 'P(\\text{Yutish} | \\text{O\'zgartirish}) = \\frac{2}{3}, \\quad P(\\text{Yutish} | \\text{O\'zgartirmaslik}) = \\frac{1}{3}',
    takeaway: 'Shartli ehtimollik va Bayes formulasi insonning kundalik instinktlariga zid kelishi mumkin, ammo matematika doimo aniq ishlaydi.'
  },
  {
    id: 'hilbert-hotel',
    title: 'Hilbertning cheksiz xonali mehmonxonasi',
    subtitle: 'Cheksiz to\'lgan mehmonxonaga yana cheksiz mehmonga qanday joy topiladi?',
    category: 'cheksizlik',
    story: 'Mehmonxonada hisobli cheksiz miqdorda (1, 2, 3, 4, ...) xonalar bor va ularning hammasi band. Kechasi bitta yangi mehmon kelib, xona so\'raydi. Mehmonxona ma\'muri uni rad etmasdan har bir mehmonga o\'z xona raqamiga 1 ni qo\'shib, keyingi xonaga ko\'chishini so\'raydi ($n \\to n+1$). Natijada 1-xona bo\'shaydi va yangi mehmon joylashadi!',
    explanation: 'Agar cheksiz ko\'p yo\'lovchisi bor cheksiz avtobuslar kelsa-chi? Ma\'mur har bir $n$-xonadagi mehmonni $2n$ (juft) xonaga o\'tkazadi. Natijada barcha toq xonalar (1, 3, 5, 7, ...) bo\'shab, yana cheksiz ko\'p yangi mehmonlar joylashishi mumkin!',
    mathFormula: '\\aleph_0 + 1 = \\aleph_0, \\quad 2 \\cdot \\aleph_0 = \\aleph_0, \\quad \\aleph_0 \\cdot \\aleph_0 = \\aleph_0',
    takeaway: 'Cheksizlik — bu oddiy son emas, balki to\'plamlarning quvvati (kardinal soni) bo\'lib, u chekli arifmetika qoidalariga bo\'ysunmaydi.'
  },
  {
    id: 'birthday-paradox',
    title: 'Tug\'ilgan kunlar paradoksi',
    subtitle: 'Nega 23 kishidan 2 tasining tug\'ilgan kuni bir kunda bo\'lish ehtimoli 50% dan yuqori?',
    category: 'ehtimollik',
    story: 'Bir xonada bor-yo\'g\'i 23 nafar talaba yig\'ilgan. Yilda 365 kun bor. Mantiqan qaraganda, ikki kishining tug\'ilgan kuni bitta sanaga to\'g\'ri kelishi juda kamyob tuyuladi.',
    explanation: 'Biz bir kishini qolganlar bilan emas, balki xonadagi BARCHA JUFTLIKLAR sonini hisoblashimiz kerak. 23 kishidan $C_{23}^2 = \\frac{23 \\cdot 22}{2} = 253$ ta turli xil juftlik tuzish mumkin! 253 ta taqqoslashda kamida bitta moslik chiqish ehtimoli 50.7% dan oshib ketadi. 70 kishi bo\'lganda esa bu ehtimollik 99.9% ga yetadi!',
    mathFormula: 'P(\\text{Moslik}) = 1 - \\frac{365}{365} \\cdot \\frac{364}{365} \\cdot \\dots \\cdot \\frac{365 - n + 1}{365} \\approx 1 - e^{-\\frac{n^2}{2 \\cdot 365}}',
    takeaway: 'Kombinatorikadagi juftliklar soni $n^2$ tezlik bilan o\'sadi, bu esa tasodifiy to\'qnashuvlar ehtimolini keskin oshiradi (kriptografiyadagi xesh kolliziyalari shu asosda ishlaydi).'
  },
  {
    id: 'zeno-achilles',
    title: 'Zeno aporiyasi: Axill va Toshbaqa',
    subtitle: 'Eng tez yuguruvchi bahodir sekin harakatlanuvchi toshbaqaga yetib ololmaydimi?',
    category: 'cheksizlik',
    story: 'Qadimgi yunon faylasufi Zeno aytadi: Axill toshbaqadan 10 barobar tez yuguradi va toshbaqa undan 100 metr oldinda. Axill 100 metr yugurguncha, toshbaqa 10 metr oldinga siljiydi. Axill 10 metr yugurguncha, toshbaqa 1 metr oldinga o\'tadi. Axill 1 metr yugurguncha, toshbaqa 0.1 metr oldinga yuradi... Shunday qilib, toshbaqa doimo ozgina bo\'lsa ham oldinda bo\'ladi va Axill unga yetolmaydi!',
    explanation: 'Zeno cheksiz ko\'p qadamlar cheksiz vaqt talab qiladi deb xato faraz qilgan. Aslida esa cheksiz ko\'p musbat sonlar yig\'indisi CHEKLI songa teng bo\'lishi mumkin (yaqinlashuvchi geometrik qator!): $100 + 10 + 1 + 0.1 + \\dots = 100 \\sum_{n=0}^\\infty (0.1)^n = \\frac{100}{1 - 0.1} = \\frac{1000}{9} = 111.11$ metr. Aynan 111.11 metr masofada Axill toshbaqani quvib o\'tadi!',
    mathFormula: 'S = \\sum_{n=0}^\\infty b_1 q^n = \\frac{b_1}{1 - q} \\quad (|q| < 1)',
    takeaway: 'Matematik analizdagi qatorlar nazariyasi cheksiz bo\'linish vaqt yoki masofani cheksiz qilmasligini qat\'iy isbotlab berdi.'
  },
  {
    id: 'gabriel-horn',
    title: 'Gabriyel karnayi (Torrichelli trubasi)',
    subtitle: 'Hajmi chekli, ammo sirt yuzi cheksiz bo\'lgan shakl',
    category: 'geometriya',
    story: '$y = \\frac{1}{x}$ giperbolani $x \\in [1, \\infty)$ oraliqda $Ox$ o\'qi atrofida aylantirishdan hosil bo\'lgan cheksiz cho\'zilgan sirtni tasavvur qiling.',
    explanation: 'Ushbu karnayning hajmini aniq integral orqali hisoblaymiz: $V = \\pi \\int_1^\\infty \\frac{1}{x^2} dx = \\pi \\left[ -\\frac{1}{x} \\right]_1^\\infty = \\pi$ (chekli hajm, unga $\\pi$ litr bo\'yoq sig\'adi!). Ammo uning sirt yuzasi: $S = 2\\pi \\int_1^\\infty \\frac{1}{x}\\sqrt{1 + \\frac{1}{x^4}} dx > 2\\pi \\int_1^\\infty \\frac{dx}{x} = \\infty$ (cheksiz yuz!). Ya\'ni karnayning ichini to\'ldirish uchun chekli miqdorda bo\'yoq yetarli, ammo uning tashqi sirtini bo\'yash uchun butun dunyodagi bo\'yoq ham yetmaydi!',
    mathFormula: 'V = \\pi < \\infty, \\quad S = \\infty',
    takeaway: 'Cheksizlikdagi xosmas integrallar fazoviy tasavvurimizni butunlay yangi bosqichga ko\'taradi.'
  }
];
