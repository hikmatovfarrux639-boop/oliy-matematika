---
title: "Katta sonlar qonuni, Chebishev tengsizligi va Markaziy limit teorema"
module: "ehtimollar-nazariyasi"
order: 11
description: "Limit teoremalar: Chebishev tengsizligi, Markov tengsizligi, Chebishev va Bernulli katta sonlar qonuni (KSQ), Markaziy limit teorema (MLT), Lyapunov sharti va ehtimollikning barqarorligi."
---

## Kirish: Tasodifiylik ichidagi qat'iy tartib

Bitta tanga tashlanganda nima tushishini (gerb yoki raqam) hech kim aniq oldindan ayta olmaydi — bu toza tasodif. Ammo tanga 10 000 marta tashlansa-chi? Deyarli aniqlik bilan aytish mumkinki, tushgan gerblar soni 5 000 ga juda yaqin (taxminan 49%–51%) bo'ladi!

Alohida olingan bitta hodisada to'liq betartiblik va oldindan aytib bo'lmaslik hukm surgani holda, **juda ko'p sondagi tasodifiy hodisalar yig'indisi deyarli deterministik (qat'iy qonuniyatli)** tartibga bo'ysunadi. 

Ushbu ajoyib hodisa fanda **Katta sonlar qonuni (KSQ)** va **Markaziy limit teorema (MLT)** deb ataladi. Ular zamonaviy sug'urta tizimi, kazino iqtisodiyoti, sotsiologik so'rovnomalar, fizikadagi termodinamika va sun'iy intellekt (Machine Learning) modellarining poydevoridir.

---

## 1. Chebishev tengsizligi (Baholash quroli)

Rus matematigi Pafnutiy Chebishev har qanday taqsimotga ega bo'lgan tasodifiy miqdorning o'z o'rtacha qiymatidan chetlanish ehtimolini baholovchi universal tengsizlikni kashf etdi.

> **Chebishev tengsizligi:**
> Matematik kutilmasi $M[X]$ va dispersiyasi $D[X]$ mavjud bo'lgan ixtiyoriy tasodifiy miqdor $X$ hamda ixtiyoriy $\varepsilon > 0$ musbat son uchun quyidagi tengsizlik o'rinlidir:
> $$P(|X - M[X]| \ge \varepsilon) \le \frac{D[X]}{\varepsilon^2}$$
> Yoki unga qarama-qarshi hodisa shaklida:
> $$P(|X - M[X]| < \varepsilon) \ge 1 - \frac{D[X]}{\varepsilon^2}$$

### Amaliy ma'nosi:
Bu tengsizlik shuni aytadiki: tasodifiy miqdorning o'z o'rtacha qiymatidan $\varepsilon$ dan kattaroq chetlanish ehtimoli dispersiyaga to'g'ri mutanosib va $\varepsilon^2$ ga teskari mutanosib ravishda cheklangandir. Qanchalik uzoqroqqa chetlansangiz ($\varepsilon$ katta bo'lsa), bu chetlanishning ro'y berish ehtimoli keskin nolga intiladi!

### "Uch sigma qoidasi" ($3\sigma$):
Agar $\varepsilon = 3\sigma = 3\sqrt{D[X]}$ deb olsak:
$$P(|X - M[X]| < 3\sigma) \ge 1 - \frac{\sigma^2}{(3\sigma)^2} = 1 - \frac{1}{9} \approx 0.889 \quad (88.9\%)$$
*(Normal taqsimotda esa bu ko'rsatkich $99.73\%$ ga teng bo'ladi).*

---

## 2. Katta sonlar qonuni (KSQ)

### A. Chebishev teoremasi:
Agar o'zaro bog'liq bo'lmagan $X_1, X_2, \dots, X_n$ tasodifiy miqdorlarning dispersiyalari umumiy bir $C$ soni bilan chegaralangan bo'lsa ($D[X_i] \le C$), u holda ularning **arifmetik o'rtachasi** o'zining matematik kutilmalari arifmetik o'rtachasiga **ehtimollik bo'yicha yaqinlashadi**:
$$\lim_{n \to \infty} P\left( \left| \frac{1}{n}\sum_{i=1}^n X_i - \frac{1}{n}\sum_{i=1}^n M[X_i] \right| < \varepsilon \right) = 1$$

### B. Xinchin teoremasi (Bir xil taqsimlangan miqdorlar uchun):
Agar $X_1, X_2, \dots, X_n$ miqdorlar o'zaro erkli va bir xil taqsimlangan bo'lib, ularning chekli matematik kutilmasi $M[X_i] = \mu$ mavjud bo'lsa, u holda:
$$\lim_{n \to \infty} P\left( \left| \frac{X_1 + X_2 + \dots + X_n}{n} - \mu \right| < \varepsilon \right) = 1$$

### C. Bernulli teoremasi (Ehtimollikning chastota bo'yicha barqarorligi):
Agar bir xil erkli tajribalarda $A$ hodisaning ro'y berish ehtimoli $p$ bo'lsa, u holda $n$ ta tajribada hodisaning nisbiy chastotasi $\frac{m}{n}$ o'z ehtimolligi $p$ ga intiladi:
$$\lim_{n \to \infty} P\left( \left| \frac{m}{n} - p \right| < \varepsilon \right) = 1$$
Bu teorema ehtimollikning klassik ta'rifi bilan statistik ta'rifi orasidagi mustahkam ko'prikdir!

---

## 3. Markaziy limit teorema (MLT — Lyapunov teoremasi)

Katta sonlar qonuni arifmetik o'rtacha son qiymatga intilishini ko'rsatsa, **Markaziy limit teorema** bu yig'indining qanday shakldagi taqsimotga ega bo'lishini ochib beradi.

> **Markaziy Limit Teorema (MLT):**
> Har qanday taqsimotga (tekis, ko'rsatkichli, binomial, Puasson va h.k.) ega bo'lgan o'zaro erkli va bir xil taqsimlangan juda ko'p sondagi tasodifiy miqdorlarning yig'indisi:
> $$S_n = X_1 + X_2 + \dots + X_n$$
> $n \to \infty$ da **NORMAL TAQSIMOTGA (Gauss egri chizig'iga)** intiladi!

### Normallangan yig'indi:
Agar har bir $X_i$ ning $M[X_i] = \mu$ va $D[X_i] = \sigma^2$ bo'lsa, standartlashgan miqdor:
$$Z_n = \frac{\sum_{i=1}^n X_i - n\mu}{\sigma\sqrt{n}} \xrightarrow{d} \mathcal{N}(0, 1)$$
Uning taqsimoti Laplas funksiyasi $\Phi(x)$ orqali hisoblanadi:
$$P\left(a \le \frac{\sum X_i - n\mu}{\sigma\sqrt{n}} \le b\right) \approx \Phi(b) - \Phi(a)$$

Bu tabiatdagi eng universal qonundir: insonlarning bo'yi, don hosildorligi, o'lchov asboblarining xatoliklari — bularning barchasi ko'plab mayda mustaqil omillar yig'indisi bo'lgani uchun tabiatda **normal (qo'ng'iroqsimon) taqsimot** eng ko'p uchraydi!

---

## 4. To'liq yechilgan namunaviy misollar

### 1-Misol (Chebishev tengsizligi orqali baholash):
Avtokorxonada kunlik yoqilg'i sarfining o'rtacha qiymati $M[X] = 1000\text{ litr}$, dispersiyasi esa $D[X] = 2500\text{ litr}^2$ ga teng. 
Ertangi yoqilg'i sarfi $900$ dan $1100\text{ litr}$ gacha bo'lishi ehtimolini Chebishev tengsizligi orqali pastdan baholang.

**Yechish:**
1. Masala sharti bo'yicha oraliq:
   $$900 < X < 1100 \iff -100 < X - 1000 < 100 \iff |X - M[X]| < 100$$
2. Demak, $\varepsilon = 100$.
3. Chebishev tengsizligining ikkinchi shaklini qo'llaymiz:
   $$P(|X - M[X]| < \varepsilon) \ge 1 - \frac{D[X]}{\varepsilon^2}$$
4. Sonlarni qo'yamiz:
   $$P(|X - 1000| < 100) \ge 1 - \frac{2500}{100^2} = 1 - \frac{2500}{10000} = 1 - 0.25 = 0.75$$
**Javob:** Yoqilg'i sarfining 900 va 1100 litr oralig'ida bo'lish ehtimoli **kamida 75%** ($P \ge 0.75$) ni tashkil etadi.

---

### 2-Misol (Bernulli KSQ orqali tajribalar sonini aniqlash):
Tanga tashlanganda gerb tushishining nisbiy chastotasi o'z nazariy ehtimolidan ($p = 0.5$) $0.02$ dan ortiq chetlanmasligiga kamida $0.95$ ($95\%$) ishonch hosil qilish uchun tangani necha marta tashlash kerak?

**Yechish:**
1. Berilgan: $p = 0.5, q = 1 - p = 0.5$, $\varepsilon = 0.02$, ishonchlilik $1 - \frac{pq}{n\varepsilon^2} \ge 0.95$.
2. Chebishev tengsizligining Bernulli uchun shakli:
   $$P\left(\left|\frac{m}{n} - p\right| < \varepsilon\right) \ge 1 - \frac{pq}{n\varepsilon^2}$$
3. Shart bo'yicha:
   $$1 - \frac{0.5 \cdot 0.5}{n \cdot (0.02)^2} \ge 0.95$$
   $$\frac{0.25}{n \cdot 0.0004} \le 1 - 0.95 = 0.05$$
   $$\frac{625}{n} \le 0.05 \implies n \ge \frac{625}{0.05} = 12\,500$$
**Javob:** Kamida $12\,500$ marta tajriba o'tkazish talab etiladi.

---

## ⚠️ Talabalar eng ko'p yo'l qo'yadigan xatolar va tuzoqlar

1. **Chebishev tengsizligi aniq qiymat bermaydi — u faqat pastki/yuqori chegarani baholaydi:**
   Masalan, hisoblaganda $P \ge 0.75$ chiqsa, haqiqiy ehtimollik $0.92$ yoki $0.98$ bo'lishi mumkin. Chebishev bahosi har qanday taqsimot uchun o'rinli bo'lgani sababli ehtiyotkor (eng yomon holat) bahodir.
2. **Katta sonlar qonunini "keyingi natijani bashorat qilish" deb noto'g'ri talqin qilish (Qimorboz xatosi — Gambler's Fallacy):**
   Agar ketma-ket 10 marta qora tushgan bo'lsa, "endi navbat qizilniki, qizil tushish ehtimoli oshdi" deb o'ylash mutlaqo noto'g'ridir! Tanganing xotirasi yo'q — keyingi tashlashda ham gerb tushish ehtimoli roppa-rosa $0.5$ ligicha qoladi. KSQ faqat uzoq muddatli yig'indi bo'yicha ishlaydi.
3. **MLT da $\sqrt{n}$ ni unutish:**
   Standart og'ish $\sigma\sqrt{n}$ ga teng bo'ladi ($n\sigma$ emas!).

---

## ✏️ Mustaqil yechish uchun amaliy mashqlar va javoblar

1. $M[X] = 5$ va $D[X] = 0.04$ bo'lgan tasodifiy miqdor uchun $P(|X - 5| < 0.4)$ ehtimollikni Chebishev tengsizligi bo'yicha baholang.
   *Javob:* $P \ge 1 - \frac{0.04}{(0.4)^2} = 1 - \frac{0.04}{0.16} = 1 - 0.25 = 0.75$.
2. Agar disperiya $D[X] = 4$ bo'lsa, tasodifiy miqdor o'rtacha qiymatidan 4 birlikdan ko'proqqa chetlanishi ehtimoli $P(|X - M[X]| \ge 4)$ qanchadan oshmaydi?
   *Javob:* $P \le \frac{4}{4^2} = \frac{4}{16} = 0.25$.
3. Markaziy limit teorema qachon qo'llaniladi?
   *Javob:* Juda ko'p sondagi mustaqil tasodifiy miqdorlar yig'indisini normal taqsimot bilan approksimatsiya qilishda.
