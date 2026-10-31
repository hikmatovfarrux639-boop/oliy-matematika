---
title: "Matematik induksiya metodi: Tengliklar, tengsizliklar va bo'linish isbotlari"
description: "Induksiya bazasi, induksion gipoteza va qadam, Bernulli tengsizligi hamda murakkab ketma-ketliklarni induktiv isbotlash san'ati."
module: "maktab-kursi"
order: 13
---

## 📌 Kirish va Amaliy Mohiyati

Matematikada va dasturlash nazariyasida (rekursiv algoritmlar tahlili, ma'lumotlar tuzilmalari to'g'riligini tekshirish) barcha natural sonlar $n \in \mathbb{N}$ uchun tegishli bo'lgan gipotezalarni cheksiz ko'p sonlar uchun bittalab tekshirib chiqish jismonan imkonsizdir. Agar biror qonuniyat $n = 1, 2, 3, 4, 5$ uchun to'g'ri bo'lsa ham, bu uning hamma $n$ lar uchun to'g'ri ekanligini kafolatlamaydi (masalan, Eylerning $n^2 + n + 41$ ko'phadi $n=1, \dots, 39$ gacha tub son beradi, lekin $n=40$ va $41$ da murakkab songa aylanadi!).

Barcha cheksiz natural sonlar uchun tasdiqni qat'iy isbotlashning eng mukammal va klassik usuli — **Matematik induksiya metodidir**. Uning ishlash prinsipi qator tizilgan cheksiz domino toshlariga o'xshaydi: agar birinchi tosh yiqilsa va har bir tosh o'zidan keyingi toshni yiqitishi isbotlansa, cheksiz barcha toshlar qulab tushadi!

---

## 📐 Asosiy Nazariya, Qoidalar va Teoremalar

### 1. Matematik induksiya aksiomasi

Natural sonlar to'plamida berilgan $P(n)$ tasdig'i uchun quyidagi ikki shart bajarilsa:

1. **Induksiya bazasi (asos):** Tasdiq boshlang'ich $n = n_0$ (odatda $n_0 = 1$) uchun to'g'ri:
   $$
   P(n_0) \text{ — rost}
   $$
2. **Induksion qadam (gipoteza va xulosa):** Ixtiyoriy $k \ge n_0$ natural son uchun $P(k)$ ning to'g'riligidan $P(k+1)$ ning ham to'g'riligi mantiqiy kelib chiqsa:
   $$
   P(k) \implies P(k+1)
   $$
U holda $P(n)$ tasdig'i barcha $n \ge n_0$ natural sonlar uchun qat'iy **rost** hisoblanadi.

---

### 2. Kuchli (to'liq) induksiya metodi

Ba'zi murakkab masalalarda $P(k+1)$ ning to'g'riligini isbotlash uchun faqat bitta oldingi $P(k)$ yetarli bo'lmaydi. Bunday hollarda barcha oldingi qadamlarning rostligi faraz qilinadi:
$$
[P(1) \wedge P(2) \wedge \dots \wedge P(k)] \implies P(k+1)
$$

---

### 3. Bernulli tengsizligi

> **Bernulli Teoremasi:**
> Har qanday $x > -1, \; x \neq 0$ haqiqiy soni va ixtiyoriy $n \ge 2, \; n \in \mathbb{N}$ natural soni uchun quyidagi qat'iy tengsizlik o'rinli:
> $$
> (1 + x)^n > 1 + nx
> $$

Ushbu tengsizlik matematik analizda ajoyib limitlar va sonli qatorlar yaqinlashishini isbotlashda fundamental ahamiyatga ega.

---

## 📝 Qadamma-qadam Yechilgan Amaliy Misollar

### 1-misol: Kvadratlar yig'indisi formulasini isbotlash

**Masala:** Ixtiyoriy $n \in \mathbb{N}$ uchun quyidagi tenglikni matematik induksiya metodi bilan isbotlang:
$$
1^2 + 2^2 + 3^2 + \dots + n^2 = \frac{n(n+1)(2n+1)}{6}
$$

**Yechish:**
1. **Induksiya bazasi ($n = 1$):**
   - Chap tomon: $1^2 = 1$.
   - O'ng tomon: $\frac{1(1+1)(2 \cdot 1 + 1)}{6} = \frac{1 \cdot 2 \cdot 3}{6} = 1$.
   $1 = 1$, demak baza o'rinli.
2. **Induksion gipoteza:** Faraz qilamiz, tenglik $n = k$ uchun to'g'ri bo'lsin:
   $$
   1^2 + 2^2 + \dots + k^2 = \frac{k(k+1)(2k+1)}{6}
   $$
3. **Induksion qadam ($n = k + 1$):**
   Biz quyidagi tenglikni isbotlashimiz kerak:
   $$
   1^2 + 2^2 + \dots + k^2 + (k+1)^2 = \frac{(k+1)((k+1)+1)(2(k+1)+1)}{6} = \frac{(k+1)(k+2)(2k+3)}{6}
   $$
   Chap tomonni gipotezadan foydalanib almashtiramiz:
   $$
   \left( 1^2 + 2^2 + \dots + k^2 \right) + (k+1)^2 = \frac{k(k+1)(2k+1)}{6} + (k+1)^2
   $$
   Umumiy ko'paytuvchi $(k+1)$ ni qavsdan tashqariga chiqaramiz:
   $$
   = (k+1) \left[ \frac{k(2k+1)}{6} + (k+1) \right] = (k+1) \left[ \frac{2k^2 + k + 6k + 6}{6} \right]
   $$
   $$
   = (k+1) \left[ \frac{2k^2 + 7k + 6}{6} \right]
   $$
   Kvadrat uchhadni ko'paytuvchilarga ajratamiz: $2k^2 + 7k + 6 = (k+2)(2k+3)$.
   $$
   = \frac{(k+1)(k+2)(2k+3)}{6}
   $$
   Hosil bo'lgan ifoda o'ng tomonga aynan teng bo'ldi. Demak, tenglik barcha $n \in \mathbb{N}$ uchun to'g'ri. $\blacksquare$

---

### 2-misol: Bo'linuvchanlikni isbotlash

**Masala:** Ixtiyoriy $n \in \mathbb{N}$ da $A_n = 4^n + 15n - 1$ soni $9$ ga qoldiqsiz bo'linishini isbotlang.

**Yechish:**
1. **Induksiya bazasi ($n = 1$):**
   $$
   A_1 = 4^1 + 15(1) - 1 = 4 + 15 - 1 = 18
   $$
   $18 = 9 \times 2$, demak $A_1$ 9 ga karrali.
2. **Induksion gipoteza:** Faraz qilamiz, $n = k$ da $A_k = 4^k + 15k - 1$ soni 9 ga bo'linsin, ya'ni $A_k = 9M$ ($M \in \mathbb{Z}$).
3. **Induksion qadam ($n = k + 1$):**
   $A_{k+1}$ ni tekshiramiz:
   $$
   A_{k+1} = 4^{k+1} + 15(k+1) - 1 = 4 \cdot 4^k + 15k + 15 - 1 = 4 \cdot 4^k + 15k + 14
   $$
   $A_k$ ifodani ajratib olish uchun $4 \cdot 4^k$ ni $4(A_k - 15k + 1)$ deb yozamiz:
   $$
   A_{k+1} = 4(9M - 15k + 1) + 15k + 14 = 36M - 60k + 4 + 15k + 14
   $$
   $$
   = 36M - 45k + 18 = 9(4M - 5k + 2)
   $$
   Qavs ichidagi son butun son bo'lgani sababli, $A_{k+1}$ soni ham 9 ga qoldiqsiz bo'linadi.
   Demak, barcha $n \in \mathbb{N}$ uchun $4^n + 15n - 1$ doimo 9 ga karralidir. $\blacksquare$

---

### 3-misol: Bernulli tengsizligini isbotlash

**Masala:** $x > -1$ va $x \neq 0$ bo'lganda, barcha $n \ge 2$ natural sonlar uchun $(1 + x)^n > 1 + nx$ tengsizligini isbotlang.

**Yechish:**
1. **Induksiya bazasi ($n = 2$):**
   $$
   (1 + x)^2 = 1 + 2x + x^2
   $$
   Chunki $x \neq 0$, uning kvadrati qat'iy musbat: $x^2 > 0$.
   Shuning uchun: $1 + 2x + x^2 > 1 + 2x$. Baza to'g'ri.
2. **Induksion gipoteza:** Faraz qilamiz, $n = k$ ($k \ge 2$) da tengsizlik to'g'ri:
   $$
   (1 + x)^k > 1 + kx
   $$
3. **Induksion qadam ($n = k + 1$):**
   Shartga ko'ra $x > -1 \implies 1 + x > 0$. Musbat songa tengsizlikning ikkala tomonini ko'paytiramiz:
   $$
   (1 + x)^{k+1} = (1 + x)^k (1 + x) > (1 + kx)(1 + x)
   $$
   Qavslarni ochamiz:
   $$
   (1 + kx)(1 + x) = 1 + x + kx + kx^2 = 1 + (k + 1)x + kx^2
   $$
   Chunki $k \ge 2$ va $x \neq 0$, $kx^2 > 0$ bo'ladi:
   $$
   1 + (k + 1)x + kx^2 > 1 + (k + 1)x
   $$
   Tranzitivlikka ko'ra:
   $$
   (1 + x)^{k+1} > 1 + (k + 1)x \quad \blacksquare
   $$

---

### 4-misol: Geometrik progressiya yig'indisi

**Masala:** $q \neq 1$ bo'lganda $S_n = 1 + q + q^2 + \dots + q^{n-1} = \frac{1 - q^n}{1 - q}$ formulani induksiya bilan isbotlang.

**Yechish:**
1. **Baza ($n = 1$):** Chap tomon: $q^0 = 1$. O'ng tomon: $\frac{1 - q^1}{1 - q} = 1$. $1 = 1$, to'g'ri.
2. **Gipoteza:** $1 + q + \dots + q^{k-1} = \frac{1 - q^k}{1 - q}$.
3. **Qadam ($n = k+1$):**
   $$
   (1 + q + \dots + q^{k-1}) + q^k = \frac{1 - q^k}{1 - q} + q^k = \frac{1 - q^k + q^k(1 - q)}{1 - q} = \frac{1 - q^k + q^k - q^{k+1}}{1 - q} = \frac{1 - q^{k+1}}{1 - q}
   $$
   Formula to'liq isbotlandi. $\blacksquare$

---

## ⚠️ Talabalar Ko'p Yo'l Qo'yadigan Xatolar

> [!WARNING] Imtihonda ehtiyot bo'ling!
> 1. **Induksiya bazasini tekshirishni "arzimas" deb tashlab ketish:** Agar baza tekshirilmasa, mutlaqo noto'g'ri tasdiqlarni ham "isbotlab" qo'yish mumkin! Masalan, "$n = n + 1$" tasdig'ida qadam to'g'ri ($k = k+1 \implies k+1 = k+2$), ammo baza ($1 = 2$) yolg'on bo'lgani sababli butun tasdiq bema'nilikdir.
> 2. **Isbot qilinishi kerak bo'lgan formuladan foydalanib qo'yish:** Gipoteza $P(k)$ dan foydalanib $P(k+1)$ ni hosil qilish kerak. Agar $P(k+1)$ ni oldindan to'g'ri deb olib, ikkala tomonini soddalashtirib ketsangiz, bu mantiqiy aylanma (sofizm) bo'lib, baholanmaydi.
> 3. **Boshlang'ich chegara $n_0$ ni e'tiborsiz qoldirish:** Masalan, $2^n > n^2$ tengsizligi faqat $n \ge 5$ bo'lganda o'rinli ($n = 2, 3, 4$ da bajarilmaydi). Bunday masalalarda bazani $n = 5$ dan boshlash shart!

---

## 🎯 Mustaqil Yechish Uchun Masalalar

1. Barcha $n \in \mathbb{N}$ uchun toq sonlar yig'indisi: $1 + 3 + 5 + \dots + (2n - 1) = n^2$ ekanligini isbotlang.
   - *Yechish:* Baza $n=1$: $1 = 1^2$. Qadam: $k^2 + (2k+1) = (k+1)^2$.
   - *Javob:* Isbot to'liq o'rinli.

2. Barcha $n \in \mathbb{N}$ da $n^3 + 2n$ ifoda 3 ga qoldiqsiz bo'linishini isbotlang.
   - *Yechish:* $n=1 \implies 1+2=3$ (3 ga bo'linadi). $(k+1)^3 + 2(k+1) = (k^3+2k) + 3(k^2+k+1)$.
   - *Javob:* Har doim 3 ga karrali.

3. $n \ge 4$ natural sonlar uchun $2^n \ge n^2$ tengsizligini isbotlang.
   - *Yechish:* Baza $n=4$: $2^4 = 16 = 4^2$. Qadamda $2^{k+1} = 2 \cdot 2^k \ge 2k^2 = k^2 + k^2 \ge k^2 + 2k + 1 = (k+1)^2$ ($k \ge 4$).
   - *Javob:* $n \ge 4$ da to'g'ri.

4. $1 \cdot 2 + 2 \cdot 3 + \dots + n(n+1) = \frac{n(n+1)(n+2)}{3}$ formulasini isbotlang.
   - *Yechish:* Baza $n=1$: $1 \cdot 2 = \frac{1 \cdot 2 \cdot 3}{3} = 2$. Qadamda umumiy ko'paytuvchi $(k+1)(k+2)$ chiqariladi.
   - *Javob:* Formula barcha $n \in \mathbb{N}$ uchun o'rinli.

---

## 💡 Xulosa va Imtihon Maslahatlari

- Matematik induksiya — aksioma bo'lib, natural sonlarning diskret va tartiblangan tabiatiga asoslanadi.
- Yechim yozishda 3 ta bosqichni aniq sarlavha bilan ajratib ko'rsating:
  1. **Induksiya bazasi** ($n = 1$ yoki $n = n_0$);
  2. **Induksion gipoteza** ($n = k$ da o'rinli deb faraz qilamiz);
  3. **Induksion qadam** ($n = k+1$ uchun isbotlaymiz).
- Bo'linuvchanlik masalalarida $A_{k+1}$ ifodadan $A_k$ ni sun'iy ravishda ajratib olib, qolgan hadlardan bo'luvchini qavsdan tashqariga chiqarish eng tezkor usuldir.
