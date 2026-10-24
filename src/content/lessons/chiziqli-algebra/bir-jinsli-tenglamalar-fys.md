---
title: "Bir jinsli tenglamalar sistemasi va fundamental yechimlar sistemasi (FYS)"
module: "chiziqli-algebra"
order: 7
description: "Bir jinsli chiziqli algebraik tenglamalar sistemasi, nolmas yechimlar mavjudlik sharti, fundamental yechimlar sistemasi (FYS) va umumiy yechimning tuzilishi."
---

## Kirish: Bir jinsli sistema nima?

Chiziqli algebraik tenglamalar sistemasida (ChTS) agar barcha tenglamalarning o'ng tomonidagi ozod hadlar **nolga teng** bo'lsa, bunday sistema **bir jinsli chiziqli tenglamalar sistemasi** deyiladi:

$$
\begin{cases}
a_{11} x_1 + a_{12} x_2 + \dots + a_{1n} x_n = 0 \\
a_{21} x_1 + a_{22} x_2 + \dots + a_{2n} x_n = 0 \\
\dots\dots\dots\dots\dots\dots\dots\dots\dots \\
a_{m1} x_1 + a_{m2} x_2 + \dots + a_{mn} x_n = 0
\end{cases}
$$

Matritsa shaklida bu sistema juda sodda yoziladi:

$$
A \cdot X = \mathbf{0}
$$

bu yerda $A$ — asosiy matritsa ($m \times n$), $X = (x_1, x_2, \dots, x_n)^T$ — noma'lumlar ustuni, $\mathbf{0}$ — nollar ustuni.

---

## 1. Trivial yechim va Kroneker-Kapelli teoremasi

Bir jinsli sistemaning eng muhim xossasi:
> **1-xossa:** Bir jinsli sistema **har doim birgalikda** (yechimga ega). Chunki $x_1 = 0, x_2 = 0, \dots, x_n = 0$ qiymatlar barcha tenglamalarni doimo qanoatlantiradi.

Bu yechim **trivial (nol) yechim** deb ataladi. 

Biroq bizni qiziqtirgan asosiy savol: **Sistema qachon noldan farqli (trivial bo'lmagan) yechimlarga ega bo'ladi?**

### Nolmas yechimlar mavjudlik sharti

> **Teorema:** Bir jinsli sistema $A X = \mathbf{0}$ noldan farqli yechimlarga ega bo'lishi uchun uning asosiy matritsasining rangi noma'lumlar soni $n$ dan kichik bo'lishi zarur va yetarli:
>
> $$
> \operatorname{rank}(A) = r < n
> $$

Xususan, agar tenglamalar soni noma'lumlar soniga teng bo'lsa ($n \times n$ kvadrat sistema):
- Agar $\det(A) \neq 0$ bo'lsa $\implies$ sistema **faqat yagona trivial (nol) yechimga** ega bo'ladi ($X = \mathbf{0}$).
- Agar $\det(A) = 0$ bo'lsa $\implies$ sistema **cheksiz ko'p nolmas yechimlarga** ega bo'ladi!

---

## 2. Fundamental yechimlar sistemasi (FYS) tushunchasi

Aytaylik, $n$ ta noma'lumli bir jinsli sistemaning rangi $r = \operatorname{rank}(A) < n$ bo'lsin.
U holda:
1. $r$ ta o'zgaruvchi **bazis o'zgaruvchilar** bo'ladi.
2. Qolgan $k = n - r$ ta o'zgaruvchi **erkin o'zgaruvchilar** bo'ladi.

> **Ta'rif:** Bir jinsli sistemaning har qanday yechimini chiziqli kombinatsiya sifatida ifodalash imkonini beruvchi $k = n - r$ ta chiziqli erkli (bog'liq bo'lmagan) yechimlar to'plamiga **Fundamental Yechimlar Sistemasi (FYS)** deyiladi:
>
> $$
> FYS = \{ X_1, X_2, \dots, X_{n-r} \}
> $$

### Umumiy yechim formulasi

Bir jinsli sistemaning ixtiyoriy $X$ yechimi FYS vektorlarining chiziqli kombinatsiyasi orqali yoziladi:

$$
X = c_1 X_1 + c_2 X_2 + \dots + c_k X_k
$$

bu yerda $c_1, c_2, \dots, c_k \in \mathbb{R}$ — ixtiyoriy o'zgarmas sonlar (konstantalar).

---

## 3. FYS ni topish algoritmi

1. Asosiy matritsa $A$ ni Gauss usuli bilan pog'onasimon (trapetsiyasimon) ko'rinishga keltiring va uning rangi $r$ ni aniqlang.
2. $r$ ta bazis o'zgaruvchini tanlang (bosh diagonaldagi koeffitsiyentlar).
3. Qolgan $k = n - r$ ta erkin o'zgaruvchini tenglikning o'ng tomoniga o'tkazing.
4. Erkin o'zgaruvchilarga navbatma-navbat birlik bazis qiymatlarini bering:
   - $X_1$ uchun: $(1, 0, 0, \dots, 0)$
   - $X_2$ uchun: $(0, 1, 0, \dots, 0)$
   - ...
   - $X_k$ uchun: $(0, 0, \dots, 1)$
5. Har bir holat uchun mos bazis o'zgaruvchilar qiymatini hisoblab, FYS vektorlarini tuzing.

---

## 4. To'liq Yechilgan Universitet Misoli (TATU & HEMIS)

Quyidagi bir jinsli tenglamalar sistemasining FYS va umumiy yechimini toping:

$$
\begin{cases}
x_1 + 2x_2 + 4x_3 - 3x_4 = 0 \\
3x_1 + 5x_2 + 6x_3 - 4x_4 = 0 \\
4x_1 + 5x_2 - 2x_3 + 3x_4 = 0
\end{cases}
$$

### 1-qadam: Matritsani Gauss usuli bilan pog'onasimon ko'rinishga keltirish

Matritsa:

$$
A = \begin{pmatrix}
1 & 2 & 4 & -3 \\
3 & 5 & 6 & -4 \\
4 & 5 & -2 & 3
\end{pmatrix}
$$

1. 2-satrdan 1-satrning 3 barobarini ayiramiz ($R_2 \leftarrow R_2 - 3R_1$):
   $$
   R_2 = (3 - 3, \; 5 - 6, \; 6 - 12, \; -4 - (-9)) = (0, -1, -6, 5)
   $$

2. 3-satrdan 1-satrning 4 barobarini ayiramiz ($R_3 \leftarrow R_3 - 4R_1$):
   $$
   R_3 = (4 - 4, \; 5 - 8, \; -2 - 16, \; 3 - (-12)) = (0, -3, -18, 15)
   $$

Matritsa ko'rinishi:
$$
\begin{pmatrix}
1 & 2 & 4 & -3 \\
0 & -1 & -6 & 5 \\
0 & -3 & -18 & 15
\end{pmatrix}
$$

Endi 3-satrdan 2-satrning 3 barobarini ayiramiz ($R_3 \leftarrow R_3 - 3R_2$):
$$
R_3 = (0 - 0, \; -3 - (-3), \; -18 - (-18), \; 15 - 15) = (0, 0, 0, 0)
$$

3-satr to'liq nollarga aylandi! Natijaviy pog'onasimon matritsa:

$$
\begin{pmatrix}
1 & 2 & 4 & -3 \\
0 & -1 & -6 & 5
\end{pmatrix}
$$

### 2-qadam: Rang va erkin noma'lumlarni aniqlash

- Satrlar soni $r = \operatorname{rank}(A) = 2$ (nolmas satrlar soni).
- Noma'lumlar soni $n = 4$ ($x_1, x_2, x_3, x_4$).
- Erkin noma'lumlar soni: $k = n - r = 4 - 2 = 2$ ta!
- FYS aynan **2 ta vektordan** iborat bo'ladi ($X_1$ va $X_2$).

Bazis noma'lumlar: $x_1, x_2$.
Erkin noma'lumlar: $x_3, x_4$.

### 3-qadam: Bazis noma'lumlarni erkin noma'lumlar orqali ifodalash

2-tenglamadan:
$$
-x_2 - 6x_3 + 5x_4 = 0 \implies x_2 = -6x_3 + 5x_4
$$

1-tenglamaga qo'yamiz:
$$
x_1 + 2(-6x_3 + 5x_4) + 4x_3 - 3x_4 = 0
$$
$$
x_1 - 12x_3 + 10x_4 + 4x_3 - 3x_4 = 0
$$
$$
x_1 - 8x_3 + 7x_4 = 0 \implies x_1 = 8x_3 - 7x_4
$$

### 4-qadam: FYS vektorlarini qurish

1. **1-vektor ($X_1$) uchun:** $x_3 = 1$ va $x_4 = 0$ deb olamiz:
   - $x_1 = 8(1) - 7(0) = 8$
   - $x_2 = -6(1) + 5(0) = -6$
   - $x_3 = 1$
   - $x_4 = 0$
   $$
   X_1 = \begin{pmatrix} 8 \\ -6 \\ 1 \\ 0 \end{pmatrix}
   $$

2. **2-vektor ($X_2$) uchun:** $x_3 = 0$ va $x_4 = 1$ deb olamiz:
   - $x_1 = 8(0) - 7(1) = -7$
   - $x_2 = -6(0) + 5(1) = 5$
   - $x_3 = 0$
   - $x_4 = 1$
   $$
   X_2 = \begin{pmatrix} -7 \\ 5 \\ 0 \\ 1 \end{pmatrix}
   $$

### 5-qadam: Umumiy yechimni yozish

Sistemaning umumiy yechimi FYS vektorlarining chiziqli kombinatsiyasidir:

$$
X = c_1 X_1 + c_2 X_2 = c_1 \begin{pmatrix} 8 \\ -6 \\ 1 \\ 0 \end{pmatrix} + c_2 \begin{pmatrix} -7 \\ 5 \\ 0 \\ 1 \end{pmatrix}
$$

yoki skalyar shaklda:

$$
\begin{cases}
x_1 = 8c_1 - 7c_2 \\
x_2 = -6c_1 + 5c_2 \\
x_3 = c_1 \\
x_4 = c_2
\end{cases} \quad (c_1, c_2 \in \mathbb{R})
$$

---

## 5. Bir jinslimas sistema umumiy yechimi bilan bog'liqlik

> **Ajoyib Teorema:** Bir jinslimas sistema $A X = B$ ning **umumiy yechimi** — uning biror **xususiy yechimi** ($X_{xus}$) va mos bir jinsli sistema $A X = \mathbf{0}$ ning **umumiy yechimi** ($X_{bir\,jinsli}$) yig'indisiga teng:
>
> $$
> X = X_{xus} + c_1 X_1 + c_2 X_2 + \dots + c_k X_k
> $$

Bu qoida differensial tenglamalar nazariyasidagi (chiziqli bir jinslimas differensial tenglama umumiy yechimi = bir jinsli umumiy + bir jinslimas xususiy) qoidaga 100% o'xshash bo'lib, oliy matematikaning go'zal va yagona uyg'unligini namoyish etadi!
