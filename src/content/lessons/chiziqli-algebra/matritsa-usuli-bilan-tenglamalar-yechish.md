---
title: "Matritsa usuli (X = A⁻¹B): Matritsali tenglamalar sistemasini yechish"
module: "chiziqli-algebra"
order: 10
description: "AX = B tenglamasini teskari matritsa orqali yechish, qachon qulayligi, ko'paytirish tartibi tuzog'i va bosqichma-bosqich amaliy misollar."
---

## Kirish: Matritsali yondashuv nima uchun kerak?

Oldingi darsda o'rgangan Kramer usuli ajoyib, lekin agar bizda tenglamalar sistemasining koeffitsiyentlari bir xil bo'lib, ozod hadlari ($B$ vektori) har kuni o'zgarib tursa-chi? Masalan, iqtisodiy modellarda zavodning ishlab chiqarish quvvati bir xil, lekin har kuni yangi buyurtmalar ($B$) tushadi.

Kramer usulida har safar barcha determinantlarni qaytadan hisoblashga to'g'ri kelardi.
Ammo **Matritsa usuli**da siz bir marta $A^{-1}$ni hisoblab qo'yasiz va har qanday yangi$B$uchun shunchaki$X = A^{-1} B$ ko'paytmasini bajarasiz!

---

## 1. Nazariy asos va chiqarilishi

CHTS matritsaviy ko'rinishda yoziladi:
$$
A \cdot X = B
$$

Agar $\det A \neq 0$bo'lsa,$A^{-1}$mavjud. Tenglikning har ikkala tomonini **chap tomondan**$A^{-1}$ ga ko'paytiramiz:

$$
A^{-1} \cdot (A \cdot X) = A^{-1} \cdot B
$$
$$
(A^{-1} \cdot A) \cdot X = A^{-1} \cdot B
$$
$$
E \cdot X = A^{-1} \cdot B
$$
$$
\mathbf{X = A^{-1} \cdot B}
$$

> [!WARNING]
> **Juda muhim qoida:** Matritsalar ko'paytmasi o'rin almashmaydi ($A^{-1} B \neq B A^{-1}$). $X$ni chapdan ko'paytirganimiz uchun, o'ng tomonda ham$A^{-1}$**albatta$B$ning chap tomonida turishi shart!** Aks holda$B \cdot A^{-1}$ ko'paytirish hatto o'lchamlari bo'yicha ham imkonsiz bo'lib qoladi.

---

## 2. Matritsa usulining 4 bosqichli algoritmi

1. $A, X, B$ matritsalarini ajratib yozish;
2. $\det A$ni hisoblash (agar$\det A = 0$ bo'lsa, usul ishlamaydi!);
3. $A^{-1}$ teskari matritsani topish;
4. $X = A^{-1} \cdot B$ matritsaviy ko'paytmani bajarish.

---

## 3. To'liq yechilgan amaliy misol

**Masala:** Quyidagi sistemani matritsa usuli bilan yeching:
$$
\begin{cases}
x + 2y = 5 \\
3x + 4y = 11
\end{cases}
$$

<details>
<summary><strong>Bosqichma-bosqich yechim</strong></summary>

**1-qadam:** Matritsalarni tuzamiz:
$$
A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}, \quad X = \begin{pmatrix} x \\ y \end{pmatrix}, \quad B = \begin{pmatrix} 5 \\ 11 \end{pmatrix}
$$

**2-qadam:** $\det A$ ni topamiz:
$$
\det A = 1 \cdot 4 - 2 \cdot 3 = 4 - 6 = -2 \neq 0
$$

**3-qadam:** $A^{-1}$ ni tezkor usulda topamiz ($2 \times 2$ formula bo'yicha):
$$
A^{-1} = \frac{1}{-2} \begin{pmatrix} 4 & -2 \\ -3 & 1 \end{pmatrix} = \begin{pmatrix} -2 & 1 \\ 3/2 & -1/2 \end{pmatrix}
$$

**4-qadam:** $X = A^{-1} \cdot B$:
$$
X = \begin{pmatrix} -2 & 1 \\ 3/2 & -1/2 \end{pmatrix} \begin{pmatrix} 5 \\ 11 \end{pmatrix} = \begin{pmatrix} (-2)(5) + (1)(11) \\ (3/2)(5) + (-1/2)(11) \end{pmatrix} = \begin{pmatrix} -10 + 11 \\ 15/2 - 11/2 \end{pmatrix} = \begin{pmatrix} 1 \\ 2 \end{pmatrix}
$$

Demak: $x = 1, \; y = 2$.

</details>