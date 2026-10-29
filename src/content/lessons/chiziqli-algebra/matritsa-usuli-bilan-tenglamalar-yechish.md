---
title: "Matritsa usuli (X = A⁻¹B): Matritsali tenglamalar sistemasini yechish"
module: "chiziqli-algebra"
order: 10
description: "AX = B tenglamasini teskari matritsa orqali yechish, 3x3 sistemalar tahlili, ko'paytirish tartibi qoidasi va amaliy misollar."
---

## Kirish: Matritsali yondashuv nima uchun kerak?

Oldingi darslarda o'rgangan Kramer usuli va Gauss usullari juda qulay. Ammo real iqtisodiy va muhandislik masalalarida ko'pincha shunday holat yuz beradi:
Tizimning ichki tuzilishi (xomashyo sarfi, dastgoh parametrlari — $A$ matritsa) oylar davomida o'zgarmaydi, lekin har kuni yangi buyurtmalar yoki yuk talabi ($B$ vektori) o'zgarib turadi.

- Agar **Kramer usuli**ni qo'llasak, har bir yangi $B$ vektori uchun barcha 4 ta determinantni boshidan hisoblashga to'g'ri kelardi.
- Ammo **Matritsa usuli**da biz bir marta $A^{-1}$ teskari matritsani hisoblab qo'yamiz va har qanday yangi $B$ buyurtmasi uchun shunchaki **bitta tezkor ko'paytma** $X = A^{-1} B$ ni bajaramiz!

---

## 1. Nazariy asos va chiqarilishi

$n$ ta noma'lumli $n$ ta chiziqli tenglamalar sistemasi:

$$
\begin{cases}
a_{11} x_1 + a_{12} x_2 + \dots + a_{1n} x_n = b_1 \\
a_{21} x_1 + a_{22} x_2 + \dots + a_{2n} x_n = b_2 \\
\dots\dots\dots\dots\dots\dots\dots\dots\dots\dots \\
a_{n1} x_1 + a_{n2} x_2 + \dots + a_{nn} x_n = b_n
\end{cases}
$$

Ushbu sistemani matritsaviy shaklda ixcham yozamiz:
$$
A \cdot X = B
$$
bu yerda:
$$
A = \begin{pmatrix} a_{11} & \dots & a_{1n} \\ \vdots & \ddots & \vdots \\ a_{n1} & \dots & a_{nn} \end{pmatrix}, \quad X = \begin{pmatrix} x_1 \\ \vdots \\ x_n \end{pmatrix}, \quad B = \begin{pmatrix} b_1 \\ \vdots \\ b_n \end{pmatrix}
$$

Agar asosiy matritsaning determinanti nolga teng bo'lmasa ($\det A \neq 0$), uning teskari matritsasi $A^{-1}$ mavjud.
Tenglikning ikkala tomonini **chap tomondan** $A^{-1}$ ga ko'paytiramiz:
$$
A^{-1} \cdot (A \cdot X) = A^{-1} \cdot B
$$
Matritsalarni ko'paytirish assotsiativ bo'lgani sababli:
$$
(A^{-1} \cdot A) \cdot X = A^{-1} \cdot B
$$
$A^{-1} \cdot A = E$ (birlik matritsa) bo'lganligi uchun:
$$
E \cdot X = A^{-1} \cdot B \implies \mathbf{X = A^{-1} \cdot B}
$$

> [!WARNING] Oltin qoida: Ko'paytirish tartibi
> Matritsalar ko'paytmasida o'rin almashtirish mumkin emas ($A^{-1} B \neq B A^{-1}$). $A$ matritsa $X$ ning chap tomonida turgani sababli, $A^{-1}$ ham **albatta $B$ ning chap tomonida turishi shart**! Aks holda $(n \times 1)$ o'lchamli $B$ vektorini $(n \times n)$ o'lchamli $A^{-1}$ matritsaga o'ng tomondan ko'paytirish hatto o'lchamlari bo'yicha ham imkonsizdir!

---

## 2. Matritsa usulining 4 bosqichli algoritmi

1. **1-bosqich:** Sistemadan $A, X, B$ matritsalarini ajratib yozish;
2. **2-bosqich:** Asosiy determinant $\det A$ ni hisoblash.
   - Agar $\det A = 0$ bo'lsa, teskari matritsa mavjud emas — **matritsa usuli qo'llanilmaydi** (Gauss usuliga o'tiladi);
   - Agar $\det A \neq 0$ bo'lsa, yechim yagona va keyingi bosqichga o'tiladi.
3. **3-bosqich:** Teskari matritsa $A^{-1}$ ni topish:
   $$
   A^{-1} = \frac{1}{\det A} C^T = \frac{1}{\det A} \begin{pmatrix} A_{11} & A_{21} & \dots & A_{n1} \\ A_{12} & A_{22} & \dots & A_{n2} \\ \vdots & \vdots & \ddots & \vdots \\ A_{1n} & A_{2n} & \dots & A_{nn} \end{pmatrix}
   $$
4. **4-bosqich:** $X = A^{-1} \cdot B$ ko'paytmani bajarish va yechimni tekshirish.

---

## 3. Qadamma-qadam to'liq yechilgan amaliy misollar

### 1-misol: $2 \times 2$ sistemani tezkor yechish

**Masala:** Matritsa usulida yeching:
$$
\begin{cases}
2x_1 + 3x_2 = 8 \\
3x_1 - 4x_2 = -5
\end{cases}
$$

#### Yechish:
1. $A = \begin{pmatrix} 2 & 3 \\ 3 & -4 \end{pmatrix}, \quad X = \begin{pmatrix} x_1 \\ x_2 \end{pmatrix}, \quad B = \begin{pmatrix} 8 \\ -5 \end{pmatrix}$.
2. $\det A = (2)(-4) - (3)(3) = -8 - 9 = -17 \neq 0$.
3. $2 \times 2$ matritsaning teskarisini tezkor qoida bilan topamiz (bosh diagonal o'rni almashadi, yon diagonal qarama-qarshi ishoraga o'zgaradi):
   $$
   A^{-1} = \frac{1}{-17} \begin{pmatrix} -4 & -3 \\ -3 & 2 \end{pmatrix} = \frac{1}{17} \begin{pmatrix} 4 & 3 \\ 3 & -2 \end{pmatrix}
   $$
4. $X = A^{-1} \cdot B$:
   $$
   X = \frac{1}{17} \begin{pmatrix} 4 & 3 \\ 3 & -2 \end{pmatrix} \begin{pmatrix} 8 \\ -5 \end{pmatrix} = \frac{1}{17} \begin{pmatrix} 4(8) + 3(-5) \\ 3(8) + (-2)(-5) \end{pmatrix} = \frac{1}{17} \begin{pmatrix} 32 - 15 \\ 24 + 10 \end{pmatrix} = \frac{1}{17} \begin{pmatrix} 17 \\ 34 \end{pmatrix} = \begin{pmatrix} 1 \\ 2 \end{pmatrix}
   $$

**Javob:** $x_1 = 1, \; x_2 = 2$.

---

### 2-misol: $3 \times 3$ sistemani to'liq tahlil bilan yechish

**Masala:** Quyidagi sistemani matritsa usuli yordamida yeching:
$$
\begin{cases}
x_1 + 2x_2 + x_3 = 8 \\
2x_1 + x_2 - x_3 = 1 \\
3x_1 - x_2 + x_3 = 6
\end{cases}
$$

#### Yechish:

**1-qadam. Matritsalarni tuzamiz:**
$$
A = \begin{pmatrix} 1 & 2 & 1 \\ 2 & 1 & -1 \\ 3 & -1 & 1 \end{pmatrix}, \quad X = \begin{pmatrix} x_1 \\ x_2 \\ x_3 \end{pmatrix}, \quad B = \begin{pmatrix} 8 \\ 1 \\ 6 \end{pmatrix}
$$

**2-qadam. Determinantni hisoblaymiz:**
1-satr bo'yicha yoyamiz:
$$
\det A = 1 \cdot \begin{vmatrix} 1 & -1 \\ -1 & 1 \end{vmatrix} - 2 \cdot \begin{vmatrix} 2 & -1 \\ 3 & 1 \end{vmatrix} + 1 \cdot \begin{vmatrix} 2 & 1 \\ 3 & -1 \end{vmatrix}
$$
- $\begin{vmatrix} 1 & -1 \\ -1 & 1 \end{vmatrix} = 1 - 1 = 0$
- $\begin{vmatrix} 2 & -1 \\ 3 & 1 \end{vmatrix} = 2 - (-3) = 5$
- $\begin{vmatrix} 2 & 1 \\ 3 & -1 \end{vmatrix} = -2 - 3 = -5$

$$
\det A = 1(0) - 2(5) + 1(-5) = 0 - 10 - 5 = -15 \neq 0
$$
Sistema yagona yechimga ega.

---

**3-qadam. Barcha 9 ta algebraik to'ldiruvchini hisoblaymiz ($A_{ij} = (-1)^{i+j} M_{ij}$):**

1-satr:
- $A_{11} = + \begin{vmatrix} 1 & -1 \\ -1 & 1 \end{vmatrix} = 1 - 1 = 0$
- $A_{12} = - \begin{vmatrix} 2 & -1 \\ 3 & 1 \end{vmatrix} = -(2 + 3) = -5$
- $A_{13} = + \begin{vmatrix} 2 & 1 \\ 3 & -1 \end{vmatrix} = -2 - 3 = -5$

2-satr:
- $A_{21} = - \begin{vmatrix} 2 & 1 \\ -1 & 1 \end{vmatrix} = -(2 - (-1)) = -3$
- $A_{22} = + \begin{vmatrix} 1 & 1 \\ 3 & 1 \end{vmatrix} = 1 - 3 = -2$
- $A_{23} = - \begin{vmatrix} 1 & 2 \\ 3 & -1 \end{vmatrix} = -(-1 - 6) = 7$

3-satr:
- $A_{31} = + \begin{vmatrix} 2 & 1 \\ 1 & -1 \end{vmatrix} = -2 - 1 = -3$
- $A_{32} = - \begin{vmatrix} 1 & 1 \\ 2 & -1 \end{vmatrix} = -(-1 - 2) = 3$
- $A_{33} = + \begin{vmatrix} 1 & 2 \\ 2 & 1 \end{vmatrix} = 1 - 4 = -3$

Algebraik to'ldiruvchilar matritsasini **transponirlab** yozamiz ($C^T$):
$$
C^T = \begin{pmatrix} A_{11} & A_{21} & A_{31} \\ A_{12} & A_{22} & A_{32} \\ A_{13} & A_{23} & A_{33} \end{pmatrix} = \begin{pmatrix} 0 & -3 & -3 \\ -5 & -2 & 3 \\ -5 & 7 & -3 \end{pmatrix}
$$

Teskari matritsa:
$$
A^{-1} = -\frac{1}{15} \begin{pmatrix} 0 & -3 & -3 \\ -5 & -2 & 3 \\ -5 & 7 & -3 \end{pmatrix} = \frac{1}{15} \begin{pmatrix} 0 & 3 & 3 \\ 5 & 2 & -3 \\ 5 & -7 & 3 \end{pmatrix}
$$

---

**4-qadam. $X = A^{-1} \cdot B$ ko'paytmani hisoblaymiz:**
$$
X = \frac{1}{15} \begin{pmatrix} 0 & 3 & 3 \\ 5 & 2 & -3 \\ 5 & -7 & 3 \end{pmatrix} \begin{pmatrix} 8 \\ 1 \\ 6 \end{pmatrix}
$$

Har bir satrni ustunga ko'paytiramiz:
$$
x_1 = \frac{1}{15} [0(8) + 3(1) + 3(6)] = \frac{1}{15} [0 + 3 + 18] = \frac{21}{15} \quad (\text{Qisqartirishdan oldin tekshiramiz})
$$
Qaytadan tekshiramiz:
$0 \cdot 8 + 3 \cdot 1 + 3 \cdot 6 = 21$.
Keling, 1-tenglamaga qo'yib ko'ramiz:
$x_1 + 2x_2 + x_3 = 8$.
$x_2 = \frac{1}{15}[5(8) + 2(1) - 3(6)] = \frac{1}{15}[40 + 2 - 18] = \frac{24}{15}$.
$x_3 = \frac{1}{15}[5(8) - 7(1) + 3(6)] = \frac{1}{15}[40 - 7 + 18] = \frac{51}{15}$.
$x_1 + 2x_2 + x_3 = \frac{21 + 48 + 51}{15} = \frac{120}{15} = 8$!
$2x_1 + x_2 - x_3 = \frac{42 + 24 - 51}{15} = \frac{15}{15} = 1$!
$3x_1 - x_2 + x_3 = \frac{63 - 24 + 51}{15} = \frac{90}{15} = 6$!

Kasrlarni 3 ga qisqartiramiz:
$$
x_1 = \frac{7}{5} = 1.4, \quad x_2 = \frac{8}{5} = 1.6, \quad x_3 = \frac{17}{5} = 3.4
$$

**Javob:** $x_1 = 1.4, \; x_2 = 1.6, \; x_3 = 3.4$.

---

## 4. Talabalar yo'l qo'yadigan tuzoqlar

> [!WARNING] Imtihonda ehtiyot bo'ling!
> 1. **Transponirlashni unutish:** $A^{-1}$ ni topishda algebraik to'ldiruvchilar matritsasi $C$ ni transponirlamasdan to'g'ridan-to'g'ri ko'paytirish eng ko'p uchraydigan xatodir. $A_{12}$ elementi 1-satr 2-ustunga emas, 2-satr 1-ustunga tushishi shart!
> 2. **Kasrlarni erta bo'lish:** $\frac{1}{\det A}$ sonini matritsaning har bir elementiga oldindan ko'paytirib, sonlarni noqulay kasrlarga aylantirib yubormang. $\frac{1}{\det A}$ ni oxirigacha qavs tashqarisida saqlang va faqat $X = A^{-1} B$ ko'paytirish tugagachgina ichkariga kiriting!
> 3. **$\det A = 0$ holatida matritsa usulini ishlatishga urinish:** Nolga bo'lish mumkin emas. Bunday holatda sistema yoki yechimga ega emas, yoki cheksiz ko'p yechimli bo'ladi va faqat Gauss usuli yordam beradi.

---

## 5. Mustaqil yechish uchun amaliy mashqlar

Matritsa usuli bilan yeching:

1. $\begin{cases} 3x_1 + 4x_2 = 11 \\ 5x_1 + 7x_2 = 19 \end{cases}$
   - *Javob:* $\det A = 1 \implies A^{-1} = \begin{pmatrix} 7 & -4 \\ -5 & 3 \end{pmatrix} \implies x_1 = 1, x_2 = 2$.

2. $\begin{cases} 2x_1 - x_2 + x_3 = 2 \\ 3x_1 + 2x_2 + 2x_3 = -2 \\ x_1 - 2x_2 + x_3 = 1 \end{cases}$
   - *Javob:* $x_1 = -1, x_2 = -1, x_3 = 3$.
