---
title: "Kvadratik formalar va Silvestr mezoni"
module: "chiziqli-algebra"
order: 9
description: "Kvadratik formaning matritsasi, kanonik ko'rinishga keltirish (Lagranj usuli), ishorasi aniqlangan formalar va Silvestr mezonining to'liq tatbiqi."
---

## Kirish: Kvadratik forma nima?

Ko'p o'lchovli optimallashtirish masalalarida, ko'p o'zgaruvchili funksiyalarning ekstremumlarini tekshirishda (Gesse matritsasi) va 3D grafika hamda mexanikada kvadratik shakllar doimiy ravishda uchraydi.

Masalan, maktab kursidagi $ax^2 + bxy + cy^2$ ifoda ikki o'zgaruvchili kvadratik formadir. Umumiy holatda bu tushuncha $n$ ta o'zgaruvchiga kengaytiriladi.

---

## 1. Kvadratik formaning ta'rifi va matritsali shakli

> **Ta'rif:** $x_1, x_2, \dots, x_n$ o'zgaruvchilarning ikkinchi darajali bir jinsli ko'phadiga **kvadratik forma** deyiladi:
>
> 
$$
> Q(x_1, \dots, x_n) = \sum_{i=1}^n \sum_{j=1}^n a_{ij} x_i x_j
> 
$$

Bu yerda har doim $a_{ij} = a_{ji}$ deb olish mumkin (chunki $x_i x_j = x_j x_i$), shuning uchun kvadratik formaning matritsasi $A$ **simmetrik matritsa** ($A = A^T$) bo'ladi:

$$
A = \begin{pmatrix}
a_{11} & a_{12} & \dots & a_{1n} \\
a_{21} & a_{22} & \dots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{n1} & a_{n2} & \dots & a_{nn}
\end{pmatrix}
$$

Matritsa shaklida kvadratik forma qisqa va qulay yoziladi:

$$
Q(X) = X^T \cdot A \cdot X
$$

bu yerda $X = \begin{pmatrix} x_1 \\ \vdots \\ x_n \end{pmatrix}$ va $X^T = (x_1, \dots, x_n)$.

---

## 2. Kanonik va normal ko'rinish

> **Ta'rif:** Agar kvadratik formada turli indeksli o'zgaruvchilarning ko'paytmalari ($x_i x_j$, $i \neq j$) qatnashmay, faqat kvadratlar yig'indisidan iborat bo'lsa:
>
> 
$$
> Q = \lambda_1 y_1^2 + \lambda_2 y_2^2 + \dots + \lambda_n y_n^2
> 
$$
>
> bunday ko'rinish kvadratik formaning **kanonik ko'rinishi** deyiladi.

### Lagranj usuli (To'la kvadratlarni ajratish)

Har qanday kvadratik formani xos almashtirishlar yordamida kanonik ko'rinishga keltirish mumkin. Eng qulay usul — **Lagranj usuli**:

**Misol:** $Q(x_1, x_2, x_3) = x_1^2 + 4x_1 x_2 + 2x_1 x_3 + 5x_2^2 + 8x_2 x_3 + 9x_3^2$

1. $x_1$ qatnashgan barcha hadlarni to'playmiz:
   
$$
   x_1^2 + 2x_1(2x_2 + x_3)
   
$$
2. To'la kvadratga to'ldiramiz:
   
$$
   [x_1 + (2x_2 + x_3)]^2 - (2x_2 + x_3)^2 = (x_1 + 2x_2 + x_3)^2 - (4x_2^2 + 4x_2 x_3 + x_3^2)
   
$$
3. Asosiy ifodaga qaytarib, o'xshash hadlarni ixchamlaymiz:
   
$$
   Q = (x_1 + 2x_2 + x_3)^2 + x_2^2 + 4x_2 x_3 + 8x_3^2
   
$$
4. Endi $x_2$ bo'yicha to'la kvadrat ajratamiz:
   
$$
   x_2^2 + 4x_2 x_3 = (x_2 + 2x_3)^2 - 4x_3^2
   
$$
5. Natijada:
   
$$
   Q = (x_1 + 2x_2 + x_3)^2 + (x_2 + 2x_3)^2 + 4x_3^2
   
$$

Yangi o'zgaruvchilarni kiritamiz:
$$
\begin{cases}
y_1 = x_1 + 2x_2 + x_3 \\
y_2 = x_2 + 2x_3 \\
y_3 = x_3
\end{cases}
$$

Natija kanonik ko'rinishga keldi:
$$
Q = y_1^2 + y_2^2 + 4y_3^2
$$

---

## 3. Ishorasi aniqlangan kvadratik formalar

Ko'p masalalarda kvadratik formaning har doim musbat yoki manfiy qiymat qabul qilishi hal qiluvchi ahamiyatga ega:

1. **Musbat aniqlangan (Positive definite):**
   Barcha $X \neq \mathbf{0}$ uchun $Q(X) > 0$.
2. **Manfiy aniqlangan (Negative definite):**
   Barcha $X \neq \mathbf{0}$ uchun $Q(X) < 0$.
3. **Noaniq (Indefinite):**
   Ba'zi nuqtalarda musbat, ba'zi nuqtalarda manfiy qiymat oladi (masalan, $Q = y_1^2 - y_2^2$).

---

## 4. Silvestr mezoni (Universitet imtihonlarining muhim savoli)

Kvadratik formani kanonik ko'rinishga keltirmasdan turib, uning matritsasidagi **burchak bosh minorlari** (diagonal minorlari) orqali uning ishorasini bir zumda aniqlash mumkin!

$A$ matritsaning burchak bosh minorlari:

$$
\Delta_1 = a_{11}, \quad \Delta_2 = \begin{vmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{vmatrix}, \quad \dots, \quad \Delta_n = \det(A)
$$

> **Silvestr Mezoni (Kriteriyasi):**
> 
> 1. **Musbat aniqlanganlik sharti:** Kvadratik forma musbat aniqlangan bo'lishi uchun uning barcha burchak bosh minorlari **qatiy musbat** bo'lishi zarur va yetarli:
>    
$$
>    \Delta_1 > 0, \quad \Delta_2 > 0, \quad \Delta_3 > 0, \quad \dots, \quad \Delta_n > 0
>    
$$
>
> 2. **Manfiy aniqlanganlik sharti:** Kvadratik forma manfiy aniqlangan bo'lishi uchun burchak bosh minorlarining ishoralari **minusdan boshlanib almashinib kelishi** zarur va yetarli:
>    
$$
>    \Delta_1 < 0, \quad \Delta_2 > 0, \quad \Delta_3 < 0, \quad \Delta_4 > 0, \quad \dots, \quad (-1)^k \Delta_k > 0
>    
$$

---

## 5. Qadamma-qadam Amaliy Misol (TATU & HEMIS)

Quyidagi kvadratik formaning ishorasini Silvestr mezoni bo'yicha tekshiring:

$$
Q(x_1, x_2, x_3) = 2x_1^2 + 5x_2^2 + 2x_3^2 + 2x_1 x_2 - 2x_1 x_3 - 4x_2 x_3
$$

### Yechish:

**1-qadam: Simmetrik matritsani tuzamiz:**
- Bosh diagonalda kvadratlar koeffitsiyentlari: $a_{11} = 2, a_{22} = 5, a_{33} = 2$.
- Aralash ko'paytmalarni 2 ga bo'lib taqsimlaymiz:
  - $2x_1 x_2 \implies a_{12} = a_{21} = 1$
  - $-2x_1 x_3 \implies a_{13} = a_{31} = -1$
  - $-4x_2 x_3 \implies a_{23} = a_{32} = -2$

Matritsa:
$$
A = \begin{pmatrix}
2 & 1 & -1 \\
1 & 5 & -2 \\
-1 & -2 & 2
\end{pmatrix}
$$

**2-qadam: Burchak bosh minorlarini hisoblaymiz:**

1. $\Delta_1 = 2 > 0$
2. $\Delta_2 = \begin{vmatrix} 2 & 1 \\ 1 & 5 \end{vmatrix} = 2 \cdot 5 - 1 \cdot 1 = 10 - 1 = 9 > 0$
3. $\Delta_3 = \det(A)$:
   
$$
   \begin{aligned}
   \Delta_3 &= 2(5\cdot 2 - (-2)\cdot(-2)) - 1(1\cdot 2 - (-2)\cdot(-1)) + (-1)(1\cdot(-2) - 5\cdot(-1)) \\
   &= 2(10 - 4) - 1(2 - 2) - 1(-2 + 5) \\
   &= 2(6) - 0 - 3 = 12 - 3 = 9 > 0
   \end{aligned}
   
$$

**3-qadam: Xulosa:**
$$
\Delta_1 = 2 > 0, \quad \Delta_2 = 9 > 0, \quad \Delta_3 = 9 > 0
$$

Barcha burchak bosh minorlar qat'iy musbat bo'lgani uchun, Silvestr mezoniga ko'ra ushbu kvadratik forma **musbat aniqlangan**!
