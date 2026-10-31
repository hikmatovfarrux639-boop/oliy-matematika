---
title: "Eng kichik kvadratlar usuli (MHK): Eksperimental ma'lumotlarni approksimatsiya qilish"
module: "kop-ozgaruvchili-funksiyalar"
order: 11
description: "Ko'p o'zgaruvchili funksiyalarning amaliy tatbiqi: Eng kichik kvadratlar usuli (MHK), xatoliklar kvadrati yig'indisini minimallashtirish, xususiy hosilalar orqali normal tenglamalar sistemasini chiqarish, chiziqli va parabolik approksimatsiya."
---

## Kirish: Eksperimental nuqtalar va optimal to'g'ri chiziq

Muhandislik, fizika, biologiya, iqtisodiyot va sun'iy intellektda olimlar tajriba o'tkazganda har doim o'lchov xatoliklari (shovqin) mavjud bo'lgan nuqtalar to'plamini oladilar:
$$(x_1, y_1), (x_2, y_2), \dots, (x_n, y_n)$$

Bu nuqtalar bitta to'g'ri chiziqda yotmaydi, lekin ma'lum bir umumiy qonuniyat bo'yicha yo'nalgan bo'ladi. Savol tug'iladi: **ushbu nuqtalar to'plamiga eng yaxshi mos keladigan (ular orasidan eng minimal og'ish bilan o'tadigan) to'g'ri chiziq $y = ax + b$ ni qanday topish mumkin?**

Buyuk matematik Karl Gauss taklif qilgan **Eng kichik kvadratlar usuli (MHK — Metod naimenshix kvadratov)** aynan shu masalani hal qiladi. U ko'p o'zgaruvchili funksiyalarning ekstremumini qidirish nazariyasiga asoslangan!

---

## 1. Nazariy asos: Maqsad funksiyasi va xususiy hosilalar

Biz shunday $a$ va $b$ parametrlarni topishimiz kerakki, har bir $x_i$ nuqtada model bergan nazariy qiymat $\hat{y}_i = ax_i + b$ bilan amaldagi eksperimental qiymat $y_i$ orasidagi vertikal farq (qoldiq xatolik) $\varepsilon_i = y_i - (ax_i + b)$ minimal bo'lsin.

Nega aynan kvadratlar yig'indisi olinadi?
Chunki oddiy ayirmalar yig'indisi musbat va manfiy xatolar bir-birini yeb ketishiga olib keladi ($+5$ va $-5$ yig'indisi nol bo'lib, go'yo xato yo'qdek ko'rinadi). Kvadratga oshirish esa barcha og'ishlarni musbat qiladi va katta xatolarni qattiqroq jazolaydi!

### Maqsad funksiyasi:
$$S(a, b) = \sum_{i=1}^n [y_i - (ax_i + b)]^2 \to \min$$
Bu yerda $x_i$ va $y_i$ — berilgan sonlar, o'zgaruvchilar esa $a$ va $b$ dir! Bu ikki o'zgaruvchili $S(a, b)$ funksiyasining minimumini topish masalasidir.

### Statsionar nuqta sharti:
Funksiya minimumga erishishi uchun uning har ikkala parametr bo'yicha xususiy hosilalari bir vaqtda $0$ ga teng bo'lishi shart:
$$\begin{cases} \frac{\partial S}{\partial a} = 0 \\ \frac{\partial S}{\partial b} = 0 \end{cases}$$

Xususiy hosilalarni hisoblaymiz:
1. $a$ bo'yicha:
   $$\frac{\partial S}{\partial a} = \sum_{i=1}^n 2[y_i - (ax_i + b)] \cdot (-x_i) = -2 \sum_{i=1}^n (x_i y_i - a x_i^2 - b x_i) = 0$$
   $$a \sum_{i=1}^n x_i^2 + b \sum_{i=1}^n x_i = \sum_{i=1}^n x_i y_i$$

2. $b$ bo'yicha:
   $$\frac{\partial S}{\partial b} = \sum_{i=1}^n 2[y_i - (ax_i + b)] \cdot (-1) = -2 \sum_{i=1}^n (y_i - a x_i - b) = 0$$
   $$a \sum_{i=1}^n x_i + b \cdot n = \sum_{i=1}^n y_i$$

---

## 2. Gaussning normal tenglamalar sistemasi

Natijada chiziqli regressiya $y = ax + b$ parametrlari uchun **Kramer qoidasi bilan oson yechiladigan $2 \times 2$ normal sistema** hosil bo'ladi:

$$\begin{cases} a \sum x_i^2 + b \sum x_i = \sum x_i y_i \\ a \sum x_i + b \cdot n = \sum y_i \end{cases}$$

### Kramer formulalari bo'yicha yechim:
$$\Delta = n \sum x_i^2 - \left(\sum x_i\right)^2$$
$$a = \frac{n \sum x_i y_i - \sum x_i \sum y_i}{\Delta}$$
$$b = \frac{\sum y_i \sum x_i^2 - \sum x_i \sum x_i y_i}{\Delta} = \bar{y} - a \bar{x}$$
Bu yerda $\bar{x} = \frac{1}{n}\sum x_i$ va $\bar{y} = \frac{1}{n}\sum y_i$ — o'rtacha qiymatlardir. Optimal to'g'ri chiziq doimo massalar markazi $(\bar{x}, \bar{y})$ nuqtadan o'tadi!

---

## 3. To'liq yechilgan namunaviy misol (Amaliy hisoblash jadvali)

**Masala:**
Laboratoriya o'lchovlarida quyidagi $5$ ta nuqta olindi ($n = 5$):

| $i$ | $1$ | $2$ | $3$ | $4$ | $5$ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| $x_i$ | $1$ | $2$ | $3$ | $4$ | $5$ |
| $y_i$ | $2.1$ | $3.9$ | $6.2$ | $8.1$ | $9.8$ |

Eng kichik kvadratlar usuli bilan ma'lumotlarni approksimatsiya qiluvchi $y = ax + b$ to'g'ri chiziq tenglamasini toping va $x = 6$ bo'lganda bashorat qiymatini hisoblang.

**Yechish:**
Barcha hisob-kitoblarni qulay jadval shaklida bajaramiz:

| $i$ | $x_i$ | $y_i$ | $x_i^2$ | $x_i y_i$ |
| :---: | :---: | :---: | :---: | :---: |
| 1 | 1 | 2.1 | 1 | 2.1 |
| 2 | 2 | 3.9 | 4 | 7.8 |
| 3 | 3 | 6.2 | 9 | 18.6 |
| 4 | 4 | 8.1 | 16 | 32.4 |
| 5 | 5 | 9.8 | 25 | 49.0 |
| **Yig'indi ($\sum$)** | **15** | **30.1** | **55** | **109.9** |

1. **Jadvaldan olingan natijalar ($n = 5$):**
   - $\sum x_i = 15$
   - $\sum y_i = 30.1$
   - $\sum x_i^2 = 55$
   - $\sum x_i y_i = 109.9$

2. **Normal tenglamalar sistemasini tuzamiz:**
   $$\begin{cases} 55 a + 15 b = 109.9 \\ 15 a + 5 b = 30.1 \end{cases}$$

3. **Determinantlarni hisoblaymiz:**
   $$\Delta = \begin{vmatrix} 55 & 15 \\ 15 & 5 \end{vmatrix} = 55 \cdot 5 - 15 \cdot 15 = 275 - 225 = 50$$
   $$\Delta_a = \begin{vmatrix} 109.9 & 15 \\ 30.1 & 5 \end{vmatrix} = 109.9 \cdot 5 - 30.1 \cdot 15 = 549.5 - 451.5 = 98$$
   $$\Delta_b = \begin{vmatrix} 55 & 109.9 \\ 15 & 30.1 \end{vmatrix} = 55 \cdot 30.1 - 15 \cdot 109.9 = 1655.5 - 1648.5 = 7$$

4. **Koeffitsiyentlarni topamiz:**
   $$a = \frac{\Delta_a}{\Delta} = \frac{98}{50} = 1.96$$
   $$b = \frac{\Delta_b}{\Delta} = \frac{7}{50} = 0.14$$

5. **Optimal approksimatsiya to'g'ri chizig'i:**
   $$y = 1.96 x + 0.14$$

6. **Prognoz ($x = 6$ da):**
   $$y(6) = 1.96(6) + 0.14 = 11.76 + 0.14 = 11.9$$

---

## 4. Nochiziqli approksimatsiyaga umumlashtirish (Parabola)

Agar nuqtalar egri chiziq bo'ylab joylashgan bo'lsa, **kvadratik parabola** $y = ax^2 + bx + c$ bilan approksimatsiya qilinadi. U holda maqsad funksiyasi $S(a, b, c) = \sum [y_i - (ax_i^2 + bx_i + c)]^2$ bo'lib, uning $a, b, c$ bo'yicha xususiy hosilalaridan $3 \times 3$ o'lchamli normal sistema kelib chiqadi:

$$\begin{cases} a \sum x_i^4 + b \sum x_i^3 + c \sum x_i^2 = \sum x_i^2 y_i \\ a \sum x_i^3 + b \sum x_i^2 + c \sum x_i = \sum x_i y_i \\ a \sum x_i^2 + b \sum x_i + c \cdot n = \sum y_i \end{cases}$$

Bu sistema Gauss usuli bilan oson yechiladi.

---

## ⚠️ Talabalar eng ko'p yo'l qo'yadigan xatolar va tuzoqlar

1. **$\left(\sum x_i\right)^2$ va $\sum x_i^2$ ni teng deb o'ylash:**
   Bu ikkisi mutlaqo boshqa narsalar! Masalan, $x = \{1, 2\}$ bo'lsa:
   $\sum x_i = 1+2 = 3 \implies (\sum x_i)^2 = 3^2 = 9$.
   $\sum x_i^2 = 1^2 + 2^2 = 1 + 4 = 5$.
   Ular teng emas!
2. **$n$ sonini tushirib qoldirish:**
   Ikkinchi tenglamada $b$ ning oldida aynan nuqtalar soni $n$ turishi shart ($b \cdot n$).
3. **Yaxlitlash xatosi:**
   Oraliq hisoblashlarda sonlarni juda erta (masalan, $0.1$ gacha) yaxlitlab yuborish $\Delta$ determinantida katta xatoliklarga olib keladi. Verguldan keyin kamida 2–3 ta xona saqlang.

---

## ✏️ Mustaqil yechish uchun amaliy mashqlar va javoblar

1. Nuqtalar berilgan: $(0, 1), (1, 3), (2, 5)$. MHK to'g'ri chizig'ini toping.
   *Javob:* Nuqtalar aynan bitta chiziqda yotadi: $y = 2x + 1$ ($a = 2, b = 1$).
2. Nuqtalar berilgan: $(1, 2), (2, 2), (3, 4), (4, 4)$. $y = ax + b$ koeffitsiyentlarini hisoblang.
   *Javob:* $\sum x = 10, \sum y = 12, \sum x^2 = 30, \sum xy = 34, n = 4$.
   $\Delta = 4(30) - 100 = 20$, $\Delta_a = 4(34) - 10(12) = 16 \implies a = 0.8$, $b = 3 - 0.8(2.5) = 1$. Demak, $y = 0.8x + 1$.
