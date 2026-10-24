---
title: "Gauss-Jordan usuli va murakkab matritsali tenglamalar"
module: "chiziqli-algebra"
order: 12
description: "(A | E) va (A | B) ni to'liq reduksiyalangan (E | X) shaklga keltirish, AX = B, XA = B, AXB = C tenglamalarini yechish."
---

## Gauss-Jordan usuli nima va uning Gauss usulidan farqi nimada?

Oddiy Gauss usulida biz faqat bosh diagonalning **tagidagi** sonlarni nolga aylantirib, keyin "teskari yurish" qilgan edik.
Vilgelm Jordan bu usulni takomillashtirdi:
> **Gauss-Jordan g'oyasi:** Nollarni nafaqat bosh diagonalning tagida, balki **uning ustida ham** hosil qilib, chap tomonda to'g'ridan-to'g'ri **birlik matritsa ($E$)** hosil qilish!

Natijada:
$$
(A \mid B) \xrightarrow{\text{almashtirishlar}} (E \mid X)
$$
Teskari yurish qilishga hojat qolmaydi — o'ng tomonda yechim tayyor holda chiqadi!

---

## 1. Gauss-Jordan yordamida teskari matritsa topish: $(A \mid E) \sim (E \mid A^{-1})$

Bu usul $3 \times 3$ va ayniqsa $4 \times 4$ o'lchamli matritsalarning teskarisini topishda algebraik to'ldiruvchilar usulidan ancha tezroq va xavfsizroqdir:

1. Kengaytirilgan $(A \mid E)$ matritsa tuziladi (chapda $A$, o'ngda birlik matritsa $E$);
2. Satrlar ustida elementar amallar bajarib, chap tomondagi $A$ birlik matritsa $E$ ga aylantiriladi;
3. Bu vaqtda o'ng tomonda turgan $E$ avtomatik ravishda **$A^{-1}$ ga aylanadi!**

---

## 2. Murakkab matritsali tenglamalar turlari

Chiziqli algebrada matritsali tenglamalarning 3 ta asosiy turi uchraydi:

| Tenglama turi | Yechish usuli | Yodda tutish qoidasi |
|---|---|---|
| **$A \cdot X = B$** | $X = A^{-1} \cdot B$ | $A$ chapda bo'lgani uchun $A^{-1}$ ham chapdan ko'paytiriladi |
| **$X \cdot A = B$** | $X = B \cdot A^{-1}$ | $A$ o'ngda bo'lgani uchun $A^{-1}$ ham o'ngdan ko'paytiriladi |
| **$A \cdot X \cdot B = C$** | $X = A^{-1} \cdot C \cdot B^{-1}$ | Chapdan $A^{-1}$, o'ngdan $B^{-1}$ ga ko'paytiriladi |

---

## 3. Amaliy namuna: $X \cdot A = B$ tenglamasini yechish

**Masala:** $X \cdot \begin{pmatrix} 2 & 3 \\ 1 & 2 \end{pmatrix} = \begin{pmatrix} 1 & 4 \\ 2 & 1 \end{pmatrix}$ tenglamani yeching.

<details>
<summary><strong>Yechim</strong></summary>

$X = B \cdot A^{-1}$.
1. $A = \begin{pmatrix} 2 & 3 \\ 1 & 2 \end{pmatrix} \implies \det A = 4 - 3 = 1$.
2. $A^{-1} = \frac{1}{1} \begin{pmatrix} 2 & -3 \\ -1 & 2 \end{pmatrix} = \begin{pmatrix} 2 & -3 \\ -1 & 2 \end{pmatrix}$.
3. $X = B \cdot A^{-1}$:
$$
X = \begin{pmatrix} 1 & 4 \\ 2 & 1 \end{pmatrix} \begin{pmatrix} 2 & -3 \\ -1 & 2 \end{pmatrix} = \begin{pmatrix} 1(2)+4(-1) & 1(-3)+4(2) \\ 2(2)+1(-1) & 2(-3)+1(2) \end{pmatrix} = \begin{pmatrix} -2 & 5 \\ 3 & -4 \end{pmatrix}
$$

**Javob:** $X = \begin{pmatrix} -2 & 5 \\ 3 & -4 \end{pmatrix}$.
</details>