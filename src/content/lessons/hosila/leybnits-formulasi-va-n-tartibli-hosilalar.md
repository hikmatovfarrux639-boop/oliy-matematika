---
title: "Leybnits formulasi va yuqori n-tartibli hosilalarni analitik hisoblash"
description: "Ko'paytmaning n-tartibli hosilasi uchun Leybnits formulasi, umumiy qoidalar va misollar."
module: "hosila"
order: 12
---

## 📌 Kirish va Geometrik/Fizik Ma'no

Funksiyaning birinchi tartibli hosilasi uning o'zgarish tezligini, ikkinchi tartibli hosilasi esa tezlanishini va grafigining qavariqligini ifodalaydi. Biroq zamonaviy matematik fizika, kvant mexanikasi, ehtimollar nazariyasi va hisoblash matematikasida 10-, 50- yoki ixtiyoriy $n$-tartibli hosilalarni topish zarurati tez-tez yuzaga keladi.

Masalan:
- Funksiyalarni Teylor va Makloren darajali qatorlariga yoyishda $f^{(n)}(x_0)$ bevosita koeffitsiyentlarni belgilaydi;
- Matematik fizikaning to'lqin va issiqlik o'tkazuvchanlik tenglamalarini yechishda maxsus funksiyalar (Legandr, Chebyshev, Ermit ko'phadlari) aynan yuqori tartibli hosilalar orqali aniqlanadi (Rodrig formulasi);
- Chiziqli differensial tenglamalarni yechishda yuqori tartibli operatorlar asosiy o'rin tutadi.

Agar ikkita funksiyaning ko'paytmasidan 10-tartibli hosila olish kerak bo'lsa va har safar oddiy ko'paytma qoidasini ketma-ket 10 marta qo'llasak, sahifalar to'la yozuvlar ichida adashib ketish aniq. Buyuk nemis olimi Gotfrid Vilgelm Leybnits bu muammoni hal qilib, Nyuton binomiga hayratlanarli darajada o'xshash bo'lgan universal formulani kashf etdi.

---

## 📐 Asosiy Nazariya, Qoidalar va Teoremalar

### 1. Elementar funksiyalarning $n$-tartibli hosilalari
Ixtiyoriy $n \in \mathbb{N}$ uchun quyidagi tayyor formulalar induksiya yo'li bilan isbotlangan:

1. **Ko'rsatkichli funksiya:**
   $$(e^{kx})^{(n)} = k^n e^{kx}, \qquad (a^x)^{(n)} = a^x (\ln a)^n$$

2. **Trigonometrik funksiyalar:**
   $$(\sin ax)^{(n)} = a^n \sin\left(ax + n \frac{\pi}{2}\right)$$
   $$(\cos ax)^{(n)} = a^n \cos\left(ax + n \frac{\pi}{2}\right)$$

3. **Darajali funksiya ($m \in \mathbb{R}$):**
   $$((ax + b)^m)^{(n)} = a^n \cdot m(m - 1)(m - 2)\dots(m - n + 1)(ax + b)^{m - n}$$
   Xususan, agar $m$ natural son bo'lsa va $n > m$ bo'lsa, $((ax+b)^m)^{(n)} = 0$.

4. **Kasr-ratsional funksiya:**
   $$\left(\frac{1}{x - a}\right)^{(n)} = \frac{(-1)^n n!}{(x - a)^{n+1}}$$

5. **Logarifmik funksiya:**
   $$(\ln(ax + b))^{(n)} = \frac{(-1)^{n-1} (n - 1)! \cdot a^n}{(ax + b)^n}$$

### 2. Leybnits formulasi (Ko'paytmaning $n$-tartibli hosilasi)
Faraz qilaylik, $u(x)$ va $v(x)$ funksiyalar $n$ marta differensiallanuvchi bo'lsin. U holda ularning ko'paytmasining $n$-tartibli hosilasi quyidagi formula bo'yicha hisoblanadi:

$$
(u \cdot v)^{(n)} = \sum_{k=0}^n C_n^k u^{(n - k)} v^{(k)}
$$

bu yerda $C_n^k = \frac{n!}{k!(n - k)!}$ — binomial koeffitsiyentlar (Paskal uchburchagi sonlari).
Shartli ravishda 0-tartibli hosila funksiyaning o'ziga teng: $u^{(0)} = u, v^{(0)} = v$.

Yoyib yozilgan shakli:

$$
(u \cdot v)^{(n)} = u^{(n)} v + n u^{(n-1)} v' + \frac{n(n-1)}{2!} u^{(n-2)} v'' + \dots + n u' v^{(n-1)} + u v^{(n)}
$$

### 3. Leybnits formulasini qo'llashning oltin qoidasi
Agar ko'paytuvchilardan biri **ko'phad** $P_m(x)$ bo'lsa, formulada uni doimo $v(x)$ deb tanlash kerak!
Chunki ko'phadning $(m+1)$-tartibdan boshlab barcha hosilalari nolga aylanadi:
$$v^{(m+1)} = v^{(m+2)} = \dots = 0$$
Natijada cheksiz uzun ko'ringan yig'indida faqatgina $(m + 1)$ dona had qoladi!

---

## 📝 Qadamma-qadam Yechilgan Amaliy Misollar

### 1-misol: Ko'phad va ko'rsatkichli funksiya ko'paytmasi
$y = (x^2 + 3x - 1) e^{2x}$ funksiyaning $n$-tartibli hosilasini toping.

**Yechilishi:**
1. Funksiyalarni tanlaymiz:
   - $u = e^{2x} \implies u^{(k)} = 2^k e^{2x}$
   - $v = x^2 + 3x - 1$ (2-darajali ko'phad)
2. $v$ ning hosilalarini hisoblaymiz:
   - $v' = 2x + 3$
   - $v'' = 2$
   - $v''' = v^{(4)} = \dots = 0$
3. Leybnits formulasida faqat $k = 0, 1, 2$ hadlar qoladi:
   $$(u \cdot v)^{(n)} = C_n^0 u^{(n)} v + C_n^1 u^{(n-1)} v' + C_n^2 u^{(n-2)} v''$$
4. Koeffitsiyentlar: $C_n^0 = 1, C_n^1 = n, C_n^2 = \frac{n(n-1)}{2}$.
5. Qiymatlarni qo'yamiz:
   $$y^{(n)} = 1 \cdot (2^n e^{2x}) (x^2 + 3x - 1) + n \cdot (2^{n-1} e^{2x}) (2x + 3) + \frac{n(n-1)}{2} \cdot (2^{n-2} e^{2x}) \cdot 2$$
6. Umumiy ko'paytuvchi $2^{n-2} e^{2x}$ ni qavsdan chiqaramiz:
   $$y^{(n)} = 2^{n-2} e^{2x} \left[ 4(x^2 + 3x - 1) + 2n(2x + 3) + n(n-1) \cdot 1 \right]$$
   $$y^{(n)} = 2^{n-2} e^{2x} \left[ 4x^2 + (12 + 4n)x + (n^2 + 5n - 4) \right]$$

**Javob:** $y^{(n)} = 2^{n-2} e^{2x} [4x^2 + 4(n + 3)x + (n^2 + 5n - 4)]$.

---

### 2-misol: Trigonometrik funksiya qatnashgan yuqori tartibli hosila
$y = x^2 \cos 3x$ funksiyaning 20-tartibli hosilasining $x = 0$ nuqtadagi qiymatini toping: $y^{(20)}(0)$.

**Yechilishi:**
1. $u = \cos 3x$, $v = x^2$.
2. $v$ ning hosilalari: $v' = 2x$, $v'' = 2$, $v''' = 0$.
3. Leybnits formulasi bo'yicha:
   $$y^{(20)} = C_{20}^0 u^{(20)} v + C_{20}^1 u^{(19)} v' + C_{20}^2 u^{(18)} v''$$
4. $u$ ning mos hosilalari:
   - $u^{(20)} = 3^{20} \cos\left(3x + 20 \cdot \frac{\pi}{2}\right) = 3^{20} \cos(3x + 10\pi) = 3^{20} \cos 3x$
   - $u^{(19)} = 3^{19} \cos\left(3x + 19 \cdot \frac{\pi}{2}\right) = 3^{19} \sin 3x$
   - $u^{(18)} = 3^{18} \cos\left(3x + 18 \cdot \frac{\pi}{2}\right) = 3^{18} \cos(3x + 9\pi) = -3^{18} \cos 3x$
5. Endi $x = 0$ nuqtadagi qiymatni hisoblaymiz:
   - $v(0) = 0^2 = 0 \implies$ birinchi had nol bo'ladi!
   - $v'(0) = 2(0) = 0 \implies$ ikkinchi had ham nol bo'ladi!
   - Faqat uchinchi had qoladi:
     $$y^{(20)}(0) = C_{20}^2 \cdot u^{(18)}(0) \cdot v''(0)$$
6. Hisob-kitob:
   $$C_{20}^2 = \frac{20 \cdot 19}{2} = 190$$
   $$u^{(18)}(0) = -3^{18} \cos 0 = -3^{18}$$
   $$v''(0) = 2$$
   $$y^{(20)}(0) = 190 \cdot (-3^{18}) \cdot 2 = -380 \cdot 3^{18}$$

**Javob:** $y^{(20)}(0) = -380 \cdot 3^{18}$.

---

### 3-misol: Ratsional kasrning $n$-tartibli hosilasi
$y = \frac{1}{x^2 - 4}$ funksiyaning $n$-tartibli hosilasi formulasini toping.

**Yechilishi:**
1. Kasrni sodda kasrlar yig'indisiga ajratamiz:
   $$\frac{1}{x^2 - 4} = \frac{1}{(x - 2)(x + 2)} = \frac{A}{x - 2} + \frac{B}{x + 2}$$
   $$1 = A(x + 2) + B(x - 2)$$
   - $x = 2 \implies 4A = 1 \implies A = 1/4$
   - $x = -2 \implies -4B = 1 \implies B = -1/4$
   $$y = \frac{1}{4} \left( \frac{1}{x - 2} - \frac{1}{x + 2} \right)$$
2. Asosiy formuladan foydalanamiz: $\left(\frac{1}{x - a}\right)^{(n)} = \frac{(-1)^n n!}{(x - a)^{n+1}}$.
3. Ikkala haddan $n$-tartibli hosila olamiz:
   $$y^{(n)} = \frac{1}{4} \left[ \frac{(-1)^n n!}{(x - 2)^{n+1}} - \frac{(-1)^n n!}{(x + 2)^{n+1}} \right]$$
   $$y^{(n)} = \frac{(-1)^n n!}{4} \left[ \frac{1}{(x - 2)^{n+1}} - \frac{1}{(x + 2)^{n+1}} \right]$$

**Javob:** $y^{(n)} = \frac{(-1)^n n!}{4} \left[ \frac{1}{(x - 2)^{n+1}} - \frac{1}{(x + 2)^{n+1}} \right]$.

---

### 4-misol: Logarifm va birinchi darajali ko'phad ko'paytmasi
$y = x \ln x$ funksiyaning $n$-tartibli hosilasini toping ($n \ge 2$).

**Yechilishi:**
1. $u = \ln x$, $v = x$.
2. $v' = 1$, $v'' = 0$. Leybnits formulasida faqat 2 ta had qoladi:
   $$(x \ln x)^{(n)} = C_n^0 u^{(n)} v + C_n^1 u^{(n-1)} v' = x (\ln x)^{(n)} + n (\ln x)^{(n-1)}$$
3. Logarifmning yuqori hosilalari formulasi:
   $$(\ln x)^{(n)} = \frac{(-1)^{n-1} (n - 1)!}{x^n}, \quad (\ln x)^{(n-1)} = \frac{(-1)^{n-2} (n - 2)!}{x^{n-1}}$$
4. O'rniga qo'yamiz:
   $$y^{(n)} = x \cdot \frac{(-1)^{n-1} (n - 1)!}{x^n} + n \cdot \frac{(-1)^{n-2} (n - 2)!}{x^{n-1}}$$
   $$y^{(n)} = \frac{(-1)^{n-2} (n - 2)!}{x^{n-1}} \left[ -(n - 1) + n \right] = \frac{(-1)^{n-2} (n - 2)!}{x^{n-1}} \cdot 1$$

**Javob:** $y^{(n)} = \frac{(-1)^{n-2} (n - 2)!}{x^{n-1}}$ ($n \ge 2$).

---

## ⚠️ Talabalar Ko'p Yo'l Qo'yadigan Xatolar (Tipik tuzoqlar)

1. **Ko'paytuvchilarni teskari tanlash:**
   Agar $(x^3 e^x)^{(n)}$ da $u = x^3, v = e^x$ deb olsangiz, formulada $u$ ning hosilalari $u^{(n)}, u^{(n-1)}$ paydo bo'ladi va ifoda ancha chalkashadi. Doimo **ko'phadni $v$ deb oling**, shunda $v', v'', \dots$ tezda nolga aylanadi.

2. **Trigonometrik faza siljishini unutish:**
   $(\sin x)^{(n)} \neq \cos x$ yoki $-\sin x$ deb yodlab o'tirmang! Yagona universal qoida: har bir differensiallash argumentga $\frac{\pi}{2}$ faza qo'shadi:
   $$(\sin x)^{(n)} = \sin\left(x + n\frac{\pi}{2}\right)$$

3. **0-tartibli hosila tushunchasini inkor qilish:**
   Leybnits formulasida yig'indi $k = 0$ dan boshlanadi. $u^{(0)}$ bu nol emas, balki funksiyaning o'zi $u$ dir!

---

## 🎯 Mustaqil Yechish Uchun Masalalar

1. $y = x^2 e^{-x}$ funksiyaning $n$-tartibli hosilasini toping.
2. $y = x \sin x$ funksiyaning $n$-tartibli hosilasini toping.
3. $y = \frac{1}{x(x - 1)}$ funksiyaning $n$-tartibli hosilasi formulasini keltirib chiqaring.
4. $y = (x^2 + 1) \ln(1 + x)$ ning $x = 0$ nuqtadagi 10-tartibli hosilasi $y^{(10)}(0)$ ni hisoblang.

<details style="margin-top: 1rem; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); cursor: pointer;">
<summary style="font-weight: 700; color: var(--primary);">Mashqlar javoblarini ko'rish</summary>

**1-masala:**
$u = e^{-x} \implies u^{(k)} = (-1)^k e^{-x}$, $v = x^2$.
$$y^{(n)} = (-1)^n e^{-x} \left[ x^2 - 2nx + n(n-1) \right]$$

**2-masala:**
Leybnits bo'yicha: $y^{(n)} = x \sin(x + n\pi/2) + n \sin(x + (n-1)\pi/2) = x \sin(x + n\pi/2) - n \cos(x + n\pi/2)$.

**3-masala:**
$\frac{1}{x(x-1)} = \frac{1}{x-1} - \frac{1}{x}$.
$$y^{(n)} = (-1)^n n! \left[ \frac{1}{(x-1)^{n+1}} - \frac{1}{x^{n+1}} \right]$$

**4-masala:**
$x = 0$ da $v(0) = 1, v'(0) = 0, v''(0) = 2$.
$y^{(10)}(0) = 1 \cdot u^{(10)}(0) + C_{10}^2 \cdot u^{(8)}(0) \cdot 2$.
$u^{(n)}(0) = (-1)^{n-1}(n-1)!$.
$u^{(10)}(0) = -9!, \quad u^{(8)}(0) = -7!$.
$y^{(10)}(0) = -9! + 45 \cdot (-7!) \cdot 2 = -9! - 90 \cdot 7! = -7!(72 + 90) = -162 \cdot 7!$.

</details>

---

## 💡 Xulosa va Imtihon Maslahatlari

- Leybnits formulasi $n$-tartibli hosilalarni topishda "artilleriya" hisoblanadi. Agar ko'paytuvchilardan biri $x, x^2, x^3$ kabi past darajali ko'phad bo'lsa, bu 100% Leybnits formulasi qo'llanilishi kerakligiga ishoradir.
- Kasr-ratsional ifodalarda avval kasrni sodda kasrlar yig'indisiga ajrating, shunda Leybnits formulasisiz, to'g'ridan-to'g'ri $\frac{1}{(x-a)^{n+1}}$ formulasi orqali oson yechiladi.
- Imtihonda binomial koeffitsiyentlar $C_n^1 = n, C_n^2 = \frac{n(n-1)}{2}, C_n^3 = \frac{n(n-1)(n-2)}{6}$ qiymatlarini yoddan bilish vaqtni jiddiy tejaydi.
