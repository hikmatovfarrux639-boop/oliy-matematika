---
title: "Katta sonlar qonuni, Chebishev tengsizligi va Markaziy limit teorema"
module: "ehtimollar-nazariyasi"
order: 11
description: "Limit teoremalar: Chebishev tengsizligi, Markov tengsizligi, Chebishev va Bernulli katta sonlar qonuni (KSQ), Markaziy limit teorema (MLT), Lyapunov sharti va ehtimollikning barqarorligi."
---

## 📌 Kirish va Geometrik/Fizik Mohiyat

Ehtimollar nazariyasining eng hayratlanarli va falsafiy jihati shundaki: **alohida olingan yakka hodisa darajasida to'liq xaos va tasodifiylik hukmron bo'lsa-da, katta miqdordagi tasodifiy hodisalar birlashganda qat'iy deterministik tartib va qonuniyat yuzaga keladi.**

Bitta tanga tashlanganda nima tushishini hech kim oldindan ayta olmaydi — bu toza tasodif. Ammo tanga 10 000 marta tashlansa-chi? Ehtimollar nazariyasi deyarli $100\%$ ishonch bilan aytadiki, tushgan gerblar ulushi $0.5$ ga juda yaqin (taxminan $49.5\% - 50.5\%$) bo'ladi. Xuddi shunday, bitta molekulaning harakatini oldindan aytib bo'lmaydi, biroq gazdagi $10^{23}$ ta molekulaning umumiy bosimi va harorati qat'iy termodinamik qonunlarga bo'ysunadi.

Ushbu qonuniyatlar oliy matematikada **Limit teoremalar** deb ataladi va ikki buyuk ustunga bo'linadi:
1. **Katta sonlar qonuni (KSQ):** Mustaqil tasodifiy miqdorlarning o'rta arifmetigi sinovlar soni ortib borgan sari o'zining matematik kutilmasiga (nazariy o'rtacha qiymatiga) cheksiz yaqinlashadi.
2. **Markaziy limit teorema (MLT):** Qanday taqsimotga ega bo'lishidan qat'i nazar, ko'p sonli mustaqil tasodifiy omillar yig'indisi har doim bitta universal qonunga — **Normal taqsimotga (Gauss qo'ng'irog'iga)** intiladi!

**Zamonaviy tatbiqlar:**
- **Sug'urta va Aktuar matematika:** Sug'urta kompaniyalari bitta mijozning qachon kasal bo'lishini bilmaydi, lekin 100 000 ta mijoz uchun to'lanadigan umumiy kompensatsiya miqdorini 1% aniqlikda bashorat qiladi.
- **Sotsiologiya va Saylov so'rovnomalari:** 35 millionlik aholining fikrini bilish uchun KSQ asosida atigi 1500–2000 kishilik tanlanma yetarli bo'ladi.
- **Monte-Karlo algoritmlari:** Murakkab ko'p karrali integrallarni millionlab tasodifiy nuqtalar tashlash orqali hisoblash.
- **Moliya va Qimmatli qog'ozlar:** Aksiyalar portfeli xavfini (risk-menejment) optimallashtirish.

---

## 📐 Asosiy Nazariya, Qoidalar va Teoremalar

### 1. Markov va Chebishev tengsizliklari

Limit teoremalarni isbotlash va amaliy ehtimollik chegaralarini baholashda rus matematigi P.L. Chebishev kiritgan tengsizliklar markaziy o'rin tutadi.

**Markov tengsizligi:**  
Agar $X$ faqat manfiy bo'lmagan qiymatlarni qabul qiluvchi tasodifiy miqdor ($X \ge 0$) va uning matematik kutilmasi $E[X] < \infty$ bo'lsa, ixtiyoriy $\varepsilon > 0$ soni uchun:
$$
P(X \ge \varepsilon) \le \frac{E[X]}{\varepsilon}
$$

**Chebishev tengsizligi:**  
Ixtiyoriy taqsimotga ega bo'lgan va chekli dispersiyasi $D[X] = \sigma^2$ bo'lgan tasodifiy miqdor $X$ uchun har qanday $\varepsilon > 0$ da quyidagi tengsizlik o'rinli:
$$
P(|X - E[X]| \ge \varepsilon) \le \frac{D[X]}{\varepsilon^2}
$$
yoki unga qarama-qarshi hodisa ehtimolligi shaklida:
$$
P(|X - E[X]| < \varepsilon) \ge 1 - \frac{D[X]}{\varepsilon^2}
$$

**Chebishev tengsizligining fundamental kuchi:**  
U taqsimot qonunining ko'rinishiga mutlaqo bog'liq emas! Tasodifiy miqdor tekis, Puasson, eksponensial yoki g'ayrioddiy bo'lishidan qat'i nazar, ushbu universal baholash har doim to'g'ri bo'ladi.

---

### 2. Ehtimollik bo'yicha yaqinlashish

**Ta'rif:** Tasodifiy miqdorlar ketma-ketligi $X_1, X_2, \dots, X_n, \dots$ biror $a$ soniga (yoki $X$ tasodifiy miqdorga) **ehtimollik bo'yicha yaqinlashadi** deyiladi ($X_n \xrightarrow{P} a$), agar ixtiyoriy $\varepsilon > 0$ uchun:
$$
\lim_{n \to \infty} P(|X_n - a| < \varepsilon) = 1 \quad \text{yoki} \quad \lim_{n \to \infty} P(|X_n - a| \ge \varepsilon) = 0
$$

---

### 3. Katta sonlar qonuni (Chebishev va Bernulli teoremalari)

**Chebishev teoremasi (KSQ ning umumiy shakli):**  
Agar $X_1, X_2, \dots, X_n, \dots$ juft-jufti bilan bog'liq bo'lmagan (mustaqil) tasodifiy miqdorlar bo'lib, ularning dispersiyalari birgalikda chegaralangan bo'lsa ($D[X_i] \le C, \forall i$), u holda ixtiyoriy $\varepsilon > 0$ uchun ularning o'rta arifmetigi matematik kutilmalarining o'rta arifmetigiga ehtimollik bo'yicha yaqinlashadi:
$$
\lim_{n \to \infty} P\left(\left|\frac{1}{n} \sum_{i=1}^n X_i - \frac{1}{n} \sum_{i=1}^n E[X_i]\right| < \varepsilon\right) = 1
$$
Xususan, agar barcha $X_i$ lar bir xil matematik kutilmaga ega bo'lsa ($E[X_i] = \mu$), u holda:
$$
\frac{\overline{X}_n \xrightarrow{P} \mu} \quad \text{ya'ni} \quad \lim_{n \to \infty} P\left(\left|\frac{1}{n}\sum_{i=1}^n X_i - \mu\right| < \varepsilon\right) = 1
$$

**Bernulli teoremasi (Nisbiy chastotaning barqarorligi):**  
$n$ ta erkli sinovning har birida $A$ hodisaning ro'y berish ehtimoli $p$ ga teng bo'lsin. Agar $m$ — $A$ hodisaning ro'y berishlar soni bo'lsa, u holda nisbiy chastota $\frac{m}{n}$ sinovlar soni $n \to \infty$ da $p$ ehtimollikka intiladi:
$$
P\left(\left|\frac{m}{n} - p\right| < \varepsilon\right) \ge 1 - \frac{p(1 - p)}{n \varepsilon^2} \ge 1 - \frac{1}{4n \varepsilon^2}
$$
Bu yerda $p(1 - p) \le \frac{1}{4}$ baholash har doim o'rinli bo'ladi.

---

### 4. Markaziy limit teorema (MLT)

Katta sonlar qonuni o'rtacha qiymat nimaga intilishini aytsa, **Markaziy limit teorema** ushbu o'rtacha qiymat atrofidagi tasodifiy tebranishlar **qanday shakldagi taqsimotga** ega bo'lishini ko'rsatib beradi.

**Lindeberg-Levi teoremasi (Mustaqil va bir xil taqsimlangan miqdorlar uchun):**  
Faraz qilaylik, $X_1, X_2, \dots, X_n$ o'zaro bog'liq bo'lmagan, bir xil taqsimotga, bir xil matematik kutilma $E[X_i] = \mu$ va dispersiya $D[X_i] = \sigma^2 > 0$ ga ega bo'lgan tasodifiy miqdorlar bo'lsin.  
U holda ularning yig'indisi $S_n = \sum_{i=1}^n X_i$ ning normallangan standart shakli:
$$
Z_n = \frac{S_n - n\mu}{\sigma \sqrt{n}} = \frac{\frac{1}{n}S_n - \mu}{\frac{\sigma}{\sqrt{n}}}
$$
$n \to \infty$ da standart normal taqsimotga intiladi:
$$
\lim_{n \to \infty} P(a \le Z_n \le b) = \frac{1}{\sqrt{2\pi}} \int_a^b e^{-t^2 / 2} dt = \Phi_0(b) - \Phi_0(a)
$$
bunda $\Phi_0(x) = \frac{1}{\sqrt{2\pi}} \int_0^x e^{-t^2/2} dt$ — markazlashtirilgan Laplas funksiyasidir.

**Laplas-Muavr integral teoremasi (MLT ning xususiy holi):**  
Binomial taqsimotga ega $m \sim B(n, p)$ miqdor uchun ($n$ yetarlicha katta bo'lganda):
$$
P\left(k_1 \le m \le k_2\right) \approx \Phi_0\left(\frac{k_2 - np}{\sqrt{npq}}\right) - \Phi_0\left(\frac{k_1 - np}{\sqrt{npq}}\right)
$$

---

## 📝 Qadamma-qadam Yechilgan Universitet Misollari

### 1-misol: Chebishev tengsizligi bo'yicha baholash va tanlanma hajmi
**Shart:** Korxonada ishlab chiqarilayotgan detallar uzunligining matematik kutilmasi $\mu = 50\text{ mm}$, dispersiyasi esa $\sigma^2 = 4\text{ mm}^2$ ga teng.  
1) Chebishev tengsizligi yordamida tasodifiy tanlangan detal uzunligi 44 mm dan 56 mm gacha bo'lishi ehtimolini baholang;  
2) O'rtacha detal uzunligining matematik kutilmadan chetlanishi $0.5\text{ mm}$ dan oshmasligiga kamida $0.96$ ishonch (ehtimollik) bilan kafolat berish uchun nechta detalni tekshirish ($n$) zarur?

**Yechish:**
1-qadam: $P(44 < X < 56)$ ehtimollikni baholaymiz:
Chetlanish chegarasi: $|X - \mu| = |X - 50|$.  
$44 < X < 56 \iff -6 < X - 50 < 6 \iff |X - 50| < 6$. Demak, $\varepsilon = 6$.  
Chebishev tengsizligi:
$$
P(|X - 50| < 6) \ge 1 - \frac{D[X]}{\varepsilon^2} = 1 - \frac{4}{6^2} = 1 - \frac{4}{36} = 1 - \frac{1}{9} = \frac{8}{9} \approx 0.889
$$
Demak, detal uzunligi ushbu oraliqda bo'lish ehtimoli kamida $88.9\%$ ni tashkil etadi.

2-qadam: Kerakli $n$ sonini topamiz:
$n$ ta detalning o'rtacha uzunligi $\overline{X} = \frac{1}{n} \sum X_i$.  
Uning matematik kutilmasi $E[\overline{X}] = \mu = 50$, dispersiyasi esa $D[\overline{X}] = \frac{D[X]}{n} = \frac{4}{n}$.  
Chebishev tengsizligiga ko'ra:
$$
P(|\overline{X} - \mu| < \varepsilon) \ge 1 - \frac{D[\overline{X}]}{\varepsilon^2} = 1 - \frac{4}{n \varepsilon^2}
$$
Berilgan shartga ko'ra $\varepsilon = 0.5$ va kafolatlangan ehtimollik kamida $0.96$ bo'lishi kerak:
$$
1 - \frac{4}{n (0.5)^2} \ge 0.96 \implies 1 - \frac{4}{0.25 n} \ge 0.96 \implies 1 - \frac{16}{n} \ge 0.96
$$
$$
\frac{16}{n} \le 1 - 0.96 = 0.04 \implies n \ge \frac{16}{0.04} = 400
$$
Demak, kamida 400 ta detal tekshirilishi shart.

**Javob:** 1) $P \ge \frac{8}{9}$; 2) $n \ge 400$.

---

### 2-misol: Bernulli KSQ va sotsiologik so'rovnoma aniqligi
**Shart:** Shaharda yangi transport islohotini qo'llab-quvvatlovchilarning haqiqiy ulushi noma'lum. Sotsiologlar so'rovnoma o'tkazib, respondentlarning ijobiy javob berish nisbiy chastotasi haqiqiy ehtimollikdan $0.02$ dan ortiq farq qilmasligini kamida $0.95$ ehtimollik bilan kafolatlamoqchi. So'rovnomada eng kamida nechta fuqaro qatnashishi kerak?

**Yechish:**
1-qadam: Bernulli KSQ formulasini yozamiz:
$$
P\left(\left|\frac{m}{n} - p\right| < \varepsilon\right) \ge 1 - \frac{p(1 - p)}{n \varepsilon^2}
$$
Haqiqiy $p$ ehtimollik noma'lum bo'lgani sababli, eng noqulay (eng katta dispersiyali) holatni olamiz.  
$f(p) = p(1 - p)$ funksiya o'zining maksimumiga $p = 0.5$ da erishadi: $\max p(1 - p) = 0.25 = \frac{1}{4}$.  
Shunday qilib, universal kafolatlangan baholash:
$$
P\left(\left|\frac{m}{n} - p\right| < \varepsilon\right) \ge 1 - \frac{1}{4n \varepsilon^2}
$$

2-qadam: Berilgan sonlarni qo'yamiz: $\varepsilon = 0.02$, ishonchlilik darajasi $1 - \alpha = 0.95$:
$$
1 - \frac{1}{4n (0.02)^2} \ge 0.95 \implies 1 - \frac{1}{4n \cdot 0.0004} \ge 0.95
$$
$$
1 - \frac{1}{0.0016 n} \ge 0.95 \implies \frac{625}{n} \le 0.05
$$
$$
n \ge \frac{625}{0.05} = 12500
$$
*(Izoh: Chebishev tengsizligi ixtiyoriy taqsimot uchun o'rinli bo'lgani sababli $n \ge 12500$ bahoni beradi. Agar normal taqsimotga asoslangan MLT qo'llanilsa, bu son taxminan $n \approx 2400$ gacha qisqaradi!)*

**Javob:** $n \ge 12500$ kishi.

---

### 3-misol: MLT yordamida tekis taqsimlangan miqdorlar yig'indisini hisoblash
**Shart:** $X_1, X_2, \dots, X_{100}$ tasodifiy miqdorlar mustaqil va ularning har biri $[0, 1]$ kesmada tekis taqsimlangan.  
Ularning yig'indisi $S_{100} = \sum_{i=1}^{100} X_i$ ning $47$ va $54$ orasida bo'lish ehtimoli $P(47 \le S_{100} \le 54)$ ni toping.

**Yechish:**
1-qadam: Har bir $X_i$ ning sonli xarakteristikalarini topamiz:
$[a, b] = [0, 1]$ kesmada tekis taqsimot uchun:
$$
\mu = E[X_i] = \frac{a + b}{2} = \frac{0 + 1}{2} = 0.5
$$
$$
\sigma^2 = D[X_i] = \frac{(b - a)^2}{12} = \frac{(1 - 0)^2}{12} = \frac{1}{12}
$$

2-qadam: Yig'indi $S_{100}$ ning parametrlari ($n = 100$):
$$
E[S_{100}] = n \mu = 100 \cdot 0.5 = 50
$$
$$
D[S_{100}] = n \sigma^2 = 100 \cdot \frac{1}{12} = \frac{100}{12} = \frac{25}{3}
$$
O'rtacha kvadratik chetlanish:
$$
\sigma_{S} = \sqrt{\frac{25}{3}} = \frac{5}{\sqrt{3}} \approx 2.887
$$

3-qadam: Markaziy limit teoremaga ko'ra standartlashtiramiz:
$$
P(47 \le S_{100} \le 54) \approx \Phi_0\left(\frac{54 - 50}{\frac{5}{\sqrt{3}}}\right) - \Phi_0\left(\frac{47 - 50}{\frac{5}{\sqrt{3}}}\right)
$$
Argumentlarni hisoblaymiz:
$$
z_2 = \frac{4 \sqrt{3}}{5} \approx \frac{4 \cdot 1.732}{5} = \frac{6.928}{5} \approx 1.39
$$
$$
z_1 = \frac{-3 \sqrt{3}}{5} \approx \frac{-3 \cdot 1.732}{5} = \frac{-5.196}{5} \approx -1.04
$$
Laplas funksiyasi toqligi $\Phi_0(-z) = -\Phi_0(z)$ dan foydalanamiz:
$$
P(47 \le S_{100} \le 54) \approx \Phi_0(1.39) + \Phi_0(1.04)
$$
Laplas funksiyasi jadvalidan qiymatlarni olamiz:
$\Phi_0(1.39) \approx 0.4177$, $\Phi_0(1.04) \approx 0.3508$.  
$$
P = 0.4177 + 0.3508 = 0.7685
$$
**Javob:** $P(47 \le S_{100} \le 54) \approx 0.7685$ (yoki $76.85\%$).

---

### 4-misol: Lift xavfsizligi va yuk ko'tarish me'yori (Muhandislik tatbiqi)
**Shart:** Katta savdo markazidagi tezyurar yuk liftining maksimal xavfsiz ko'tarish og'irligi $4200\text{ kg}$ ga teng. Yo'lovchilarning vazni mustaqil tasodifiy miqdor bo'lib, o'rtacha qiymati $\mu = 72\text{ kg}$, o'rtacha kvadratik chetlanishi $\sigma = 12\text{ kg}$ ga teng. Liftga 55 kishi chiqqanda, ortiqcha yuklanish (overload, ya'ni umumiy og'irlik $4200\text{ kg}$ dan oshib ketish) ehtimoli qanday bo'ladi?

**Yechish:**
1-qadam: $n = 55$ kishining umumiy vazni $S_{55} = \sum_{i=1}^{55} X_i$ ning parametrlarini topamiz:
$$
E[S_{55}] = n \mu = 55 \cdot 72 = 3960\text{ kg}
$$
$$
\sigma_{S} = \sigma \sqrt{n} = 12 \cdot \sqrt{55} \approx 12 \cdot 7.4162 = 88.994\text{ kg}
$$

2-qadam: Qidirilayotgan ehtimollik $P(S_{55} > 4200)$:
$$
P(S_{55} > 4200) = P\left(\frac{S_{55} - 3960}{88.994} > \frac{4200 - 3960}{88.994}\right)
$$
$$
z = \frac{240}{88.994} \approx 2.70
$$
Standart normal taqsimot bo'yicha ehtimollik:
$$
P(Z > 2.70) = 0.5 - \Phi_0(2.70)
$$
Laplas jadvalidan $\Phi_0(2.70) = 0.4965$:
$$
P(S_{55} > 4200) = 0.5 - 0.4965 = 0.0035
$$
Demak, 55 kishi chiqqanda ortiqcha yuklanish xavfi bor-yo'g'i $0.35\%$ (1000 tadan 3-4 marta) ekan.

**Javob:** $P \approx 0.0035$ ($0.35\%$).

---

## ⚠️ Talabalar Eng Ko'p Yo'l Qo'yadigan Xatolar va Tuzoqlar

1. **Chebishev tengsizligi ishoralarini chalkashtirish:**
   - Agar modul ichidagi chetlanish katta bo'lsa ($|X - \mu| \ge \varepsilon$), ehtimollik kichik bo'ladi: $\le \frac{D}{\varepsilon^2}$;
   - Agar modul ichidagi chetlanish kichik bo'lsa ($|X - \mu| < \varepsilon$), ehtimollik katta bo'ladi: $\ge 1 - \frac{D}{\varepsilon^2}$.  
   Talabalar ko'pincha bu ikki tengsizlikni bir-biriga almashtirib qo'yishadi.

2. **O'rtacha qiymat dispersiyasi bilan yig'indi dispersiyasini adashtirish:**
   - Yig'indi $S_n = \sum X_i$ uchun: $D[S_n] = n \sigma^2 \implies \sigma_{S} = \sigma \sqrt{n}$;
   - O'rtacha qiymat $\overline{X}_n = \frac{1}{n} S_n$ uchun: $D[\overline{X}_n] = \frac{\sigma^2}{n} \implies \sigma_{\overline{X}} = \frac{\sigma}{\sqrt{n}}$.  
   O'rtacha qiymat dispersiyasi $n$ marta kamayadi, yig'indiniki esa $n$ marta oshadi!

3. **Laplas funksiyasi jadvalidagi chalkashlik ($\Phi$ vs $\Phi_0$):**
   Ba'zi kitoblarda Gauss integrali $\Phi(x) = \frac{1}{\sqrt{2\pi}}\int_{-\infty}^x e^{-t^2/2}dt$ berilgan bo'lib, uning qiymati $\Phi(0) = 0.5$ bo'ladi. Ko'pchilik MDH darsliklarida esa $\Phi_0(x) = \frac{1}{\sqrt{2\pi}}\int_0^x e^{-t^2/2}dt$ ishlatiladi va $\Phi_0(0) = 0$ bo'ladi. Bog'lanish: $\Phi(x) = 0.5 + \Phi_0(x)$. Jadvalga qaraganda uning 0 dan yoki $-\infty$ dan boshlanganiga albatta e'tibor bering!

4. **"Qimorboz xatosi" (Gambler's fallacy):**
   Katta sonlar qonunini noto'g'ri tushungan odamlar o'ylaydiki, agar tanga 10 marta ketma-ket raqam tushgan bo'lsa, 11-martasida albatta gerb tushishi kerak. Bu mutlaqo xato! Tangada "xotira" yo'q, keyingi tashlash ehtimoli baribir $0.5$ ligicha qoladi. KSQ o'tmishdagi xatolarni "yopish" hisobiga emas, balki umumiy sinovlar soni kattalashganda tasodifiy farqlarning ulush sifatida erib ketishi hisobiga ishlaydi.

---

## 🎯 Mustaqil Yechish Uchun Amaliy Mashqlar va Yechimlar

### 1-mashq
Tasodifiy miqdor $X$ ning matematik kutilmasi $E[X] = 10$, dispersiyasi $D[X] = 2$ ga teng. Chebishev tengsizligi bo'yicha $P(6 < X < 14)$ ehtimollikning quyi chegarasini toping.

<details>
<summary>To'liq yechimi va javobi</summary>

**Yechish:**
1. $6 < X < 14$ qo'sh tengsizlikdan matematik kutilma $\mu = 10$ ni ayiramiz:
   $$
   6 - 10 < X - 10 < 14 - 10 \implies -4 < X - 10 < 4 \implies |X - 10| < 4
   $$
   Demak, $\varepsilon = 4$.
2. Chebishev tengsizligini qo'llaymiz:
   $$
   P(|X - 10| < 4) \ge 1 - \frac{D[X]}{\varepsilon^2} = 1 - \frac{2}{4^2} = 1 - \frac{2}{16} = 1 - \frac{1}{8} = \frac{7}{8} = 0.875
   $$

**Javob:** $P(6 < X < 14) \ge 0.875$ (yoki $87.5\%$).
</details>

---

### 2-mashq
Tanga $1000$ marta tashlandi. Gerb tushishlar soni 480 dan 520 gacha bo'lish ehtimolini Laplas-Muavr integral teoremasi yordamida hisoblang.

<details>
<summary>To'liq yechimi va javobi</summary>

**Yechish:**
1. Parametrlar: $n = 1000$, $p = 0.5$, $q = 1 - p = 0.5$.
   $$
   np = 1000 \cdot 0.5 = 500
   $$
   $$
   \sqrt{npq} = \sqrt{1000 \cdot 0.5 \cdot 0.5} = \sqrt{250} \approx 15.811
   $$
2. Laplas-Muavr formulasiga qo'yamiz:
   $$
   P(480 \le m \le 520) \approx \Phi_0\left(\frac{520 - 500}{15.811}\right) - \Phi_0\left(\frac{480 - 500}{15.811}\right)
   $$
   $$
   z = \frac{20}{15.811} \approx 1.265
   $$
3. $\Phi_0(-z) = -\Phi_0(z)$ bo'lgani uchun:
   $$
   P \approx 2 \Phi_0(1.265)
   $$
   Jadvaldan: $\Phi_0(1.26) \approx 0.3962$, $\Phi_0(1.27) \approx 0.3980$.  
   Interpolyatsiya qilsak: $\Phi_0(1.265) \approx 0.3971$.  
   $$
   P \approx 2 \cdot 0.3971 = 0.7942
   $$

**Javob:** $P \approx 0.7942$ (yoki $79.42\%$).
</details>

---

### 3-mashq
Nonvoyxonada har bir nonning og'irligi matematik kutilmasi $\mu = 500\text{ g}$ va o'rtacha kvadratik chetlanishi $\sigma = 10\text{ g}$ bo'lgan tasodifiy miqdordir. 400 ta nondan iborat partiyaning o'rtacha og'irligi 499 g va 501 g oralig'ida bo'lish ehtimolini toping.

<details>
<summary>To'liq yechimi va javobi</summary>

**Yechish:**
1. 400 ta nonning o'rtacha og'irligi $\overline{X}$:
   $$
   E[\overline{X}] = \mu = 500\text{ g}
   $$
   $$
   \sigma_{\overline{X}} = \frac{\sigma}{\sqrt{n}} = \frac{10}{\sqrt{400}} = \frac{10}{20} = 0.5\text{ g}
   $$
2. MLT bo'yicha oraliqqa tushish ehtimoli:
   $$
   P(499 \le \overline{X} \le 501) = \Phi_0\left(\frac{501 - 500}{0.5}\right) - \Phi_0\left(\frac{499 - 500}{0.5}\right)
   $$
   $$
   = \Phi_0(2) - \Phi_0(-2) = 2\Phi_0(2)
   $$
3. Jadvaldan $\Phi_0(2) = 0.4772$:
   $$
   P = 2 \cdot 0.4772 = 0.9544
   $$

**Javob:** $P \approx 0.9544$ (yoki $95.44\%$).
</details>

---

## 💡 Imtihon Layfhaklari va Tezkor Maslahatlar

1. **$3\sigma$ (Uch sigma) qoidasi taqqoslashi:**
   - Chebishev tengsizligi bo'yicha: $P(|X - \mu| < 3\sigma) \ge 1 - \frac{\sigma^2}{(3\sigma)^2} = 1 - \frac{1}{9} \approx 88.9\%$;
   - Normal taqsimot bo'yicha: $P(|X - \mu| < 3\sigma) = 2\Phi_0(3) \approx 99.73\%$.  
   Agar masalada taqsimot qonuni haqida hech narsa deyilmagan bo'lsa, albatta Chebishev tengsizligini qo'llang. Agar miqdorlar ko'p bo'lib, yig'indisi so'ralsa, MLT ni qo'llang!

2. **$p(1-p) \le 0.25$ universal bahosi:**
   Bernulli sinovlarida $p$ noma'lum bo'lsa, eng yomon holat uchun $p = 0.5$ ni oling, chunki $p(1-p)$ ko'paytmasi $0.25$ dan hech qachon katta bo'la olmaydi.

3. **$n \ge 30$ qoidasi:**
   Statistika va ehtimollar nazariyasida tasodifiy miqdorlar soni $n \ge 30$ bo'lsa, Markaziy limit teoremaga tayanib, yig'indini bemalol normal taqsimot deb qabul qilish mumkin.
