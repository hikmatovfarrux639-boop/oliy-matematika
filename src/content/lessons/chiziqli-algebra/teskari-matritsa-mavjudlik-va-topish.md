---
title: "Teskari matritsa: Mavjudlik sharti va klassik topish algoritmi"
module: "chiziqli-algebra"
order: 6
description: "Teskari matritsa nima, maxsusmaslik sharti (det A ≠ 0), ittifoqdosh matritsa orqali A⁻¹ topishning to'liq 4 qadami, xossalari va amaliy misollar."
---

## Kirish: Matritsalarda bo'lish amali bormi?

Oddiy arifmetikada agar $5x = 20$ bo'lsa, biz $x = \frac{20}{5} = 4$ deb topamiz. Ya'ni bo'lish amali mavjud.
Ammo **matritsalarda bo'lish amali mavjud emas!** $\frac{B}{A}$ deb yozish matematikaning qat'iy qoidalariga zid bo'lib, qo'pol xato hisoblanadi.

Unda nima qilamiz?
Oddiy arifmetikada 5 ga bo'lish — bu aslida uning teskarisi bo'lgan $\frac{1}{5} = 5^{-1}$ soniga ko'paytirish demakdir ($20 \cdot 5^{-1} = 4$).
Xuddi shu singari, matritsalar olamida ham bo'lish amali o'rniga **teskari matritsaga ko'paytirish** amali kiritilgan!

---

## 1. Teskari matritsaning qat'iy ta'rifi

Agar $n$-tartibli kvadrat $A$ matritsa uchun:

$$
A \cdot A^{-1} = A^{-1} \cdot A = E
$$

tenglikni qanoatlantiruvchi $A^{-1}$ matritsa mavjud bo'lsa, unga **$A$ matritsaning teskari matritsasi** deyiladi (bu yerda $E$ — birlik matritsa).

---

## 2. Teskari matritsa mavjud bo'lishining zarur va yetarli sharti

> [!NOTE] Teskari matritsa teoremasi
> Kvadrat $A$ matritsaning teskarisi $A^{-1}$ mavjud bo'lishi uchun uning determinanti **nolga teng bo'lmasligi** zarur va yetarlidir:
> $$
> \mathbf{\det A \neq 0}
> $$

- Agar $\det A \neq 0$ bo'lsa, matritsa **maxsusmas (yoki aylanmaydigan, xosmas)** deyiladi va uning teskarisi albatta mavjud hamda yagonadir!
- Agar $\det A = 0$ bo'lsa, matritsa **maxsus (xos)** deyiladi va uning teskarisi mutlaqo mavjud emas (xuddi oddiy sonlarda 0 ga bo'lib bo'lmagani kabi).

---

## 3. Teskari matritsaning fundamental xossalari

1. **Ikki marta teskarilash:** $(A^{-1})^{-1} = A$
2. **Ko'paytmaning teskarisi (O'rin almashinuvi!):**
   $$
   (A \cdot B)^{-1} = B^{-1} \cdot A^{-1}
   $$
   *(Isboti: $(AB)(B^{-1}A^{-1}) = A(B B^{-1})A^{-1} = A E A^{-1} = A A^{-1} = E$)*.
3. **Transponirlash bilan o'rin almashish:**
   $$
   (A^T)^{-1} = (A^{-1})^T
   $$
4. **Teskari matritsa determinanti:**
   $$
   \det(A^{-1}) = \frac{1}{\det A} = (\det A)^{-1}
   $$
5. **Skalyar ko'paytuvchining teskarisi:**
   $$
   (\lambda A)^{-1} = \frac{1}{\lambda} A^{-1} \quad (\lambda \neq 0)
   $$
6. **Darajaning teskarisi:**
   $$
   (A^k)^{-1} = (A^{-1})^k
   $$

---

## 4. Klassik topish formulasi (Ittifoqdosh matritsa usuli)

Teskari matritsani topishning rasmiy formulasi:

$$
A^{-1} = \frac{1}{\det A} \cdot C^T
$$

bu yerda $C^T$ — algebraik to'ldiruvchilardan tuzilgan matritsaning **transponirlangan** ko'rinishidir (bunga *birlashtirilgan* yoki *ittifoqdosh matritsa* deyiladi):

$$
C^T = \begin{pmatrix}
A_{11} & A_{21} & A_{31} \\
A_{12} & A_{22} & A_{32} \\
A_{13} & A_{23} & A_{33}
\end{pmatrix}
$$

> [!WARNING] Eng katta talabalar tuzog'i!
> Formula ichida $A_{ij}$ lar transponirlangan holda joylashadi! Ya'ni 1-satr elementlarining algebraik to'ldiruvchilari ($A_{11}, A_{12}, A_{13}$) teskari matritsaning **1-ustuniga** aylanadi!

---

## 5. $2 \times 2$ matritsalar uchun tezkor 5 soniyalik formula

Agar $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$ bo'lsa:
1. Bosh diagonal elementlarining o'rnini almashtiring ($a$ va $d$ almashadi);
2. Yordamchi diagonal elementlarining ishorasini o'zgartiring ($-b$ va $-c$ bo'ladi);
3. Natijani $\det A = ad - bc$ ga bo'ling:

$$
A^{-1} = \frac{1}{ad - bc} \begin{pmatrix} d & -b \\ -c & a \end{pmatrix}
$$

### Misol:
$A = \begin{pmatrix} 3 & 5 \\ 1 & 2 \end{pmatrix} \implies \det A = 6 - 5 = 1$.
$$
A^{-1} = \frac{1}{1} \begin{pmatrix} 2 & -5 \\ -1 & 3 \end{pmatrix} = \begin{pmatrix} 2 & -5 \\ -1 & 3 \end{pmatrix}
$$

---

## 6. Qadamma-qadam to'liq amaliy algoritm ($3 \times 3$ matritsa)

Teskari matritsani topishda hech qachon adashmaslik uchun quyidagi 4 ta aniq qadamga amal qiling:

**Masala:** $A = \begin{pmatrix} 1 & 2 & -1 \\ 3 & 0 & 2 \\ 4 & -2 & 5 \end{pmatrix}$ matritsaning teskarisini toping.

#### Yechish:

### 1-qadam: Determinantni hisoblaymiz:
$$
\det A = \begin{vmatrix} 1 & 2 & -1 \\ 3 & 0 & 2 \\ 4 & -2 & 5 \end{vmatrix}
$$
2-satr bo'yicha yoyamiz:
$$
\det A = -3 \begin{vmatrix} 2 & -1 \\ -2 & 5 \end{vmatrix} + 0 - 2 \begin{vmatrix} 1 & 2 \\ 4 & -2 \end{vmatrix}
$$
$$
-3(10 - 2) - 2(-2 - 8) = -3(8) - 2(-10) = -24 + 20 = -4 \neq 0
$$
$\det A = -4 \neq 0$. Demak, teskari matritsa **mavjud**!

---

### 2-qadam: Barcha 9 ta algebraik to'ldiruvchini hisoblaymiz ($A_{ij} = (-1)^{i+j} M_{ij}$):

**1-satr uchun:**
- $A_{11} = +\begin{vmatrix} 0 & 2 \\ -2 & 5 \end{vmatrix} = 0 - (-4) = 4$
- $A_{12} = -\begin{vmatrix} 3 & 2 \\ 4 & 5 \end{vmatrix} = -(15 - 8) = -7$
- $A_{13} = +\begin{vmatrix} 3 & 0 \\ 4 & -2 \end{vmatrix} = -6 - 0 = -6$

**2-satr uchun:**
- $A_{21} = -\begin{vmatrix} 2 & -1 \\ -2 & 5 \end{vmatrix} = -(10 - 2) = -8$
- $A_{22} = +\begin{vmatrix} 1 & -1 \\ 4 & 5 \end{vmatrix} = 5 - (-4) = 9$
- $A_{23} = -\begin{vmatrix} 1 & 2 \\ 4 & -2 \end{vmatrix} = -(-2 - 8) = 10$

**3-satr uchun:**
- $A_{31} = +\begin{vmatrix} 2 & -1 \\ 0 & 2 \end{vmatrix} = 4 - 0 = 4$
- $A_{32} = -\begin{vmatrix} 1 & -1 \\ 3 & 2 \end{vmatrix} = -(2 - (-3)) = -5$
- $A_{33} = +\begin{vmatrix} 1 & 2 \\ 3 & 0 \end{vmatrix} = 0 - 6 = -6$

---

### 3-qadam: Ittifoqdosh matritsa $C^T$ ni tuzamiz (Transponirlashni unutmang!):
$$
C^T = \begin{pmatrix}
A_{11} & A_{21} & A_{31} \\
A_{12} & A_{22} & A_{32} \\
A_{13} & A_{23} & A_{33}
\end{pmatrix} = \begin{pmatrix}
4 & -8 & 4 \\
-7 & 9 & -5 \\
-6 & 10 & -6
\end{pmatrix}
$$

---

### 4-qadam: Formulaga qo'yib, $\det A$ ga bo'lamiz:
$$
A^{-1} = \frac{1}{-4} \begin{pmatrix}
4 & -8 & 4 \\
-7 & 9 & -5 \\
-6 & 10 & -6
\end{pmatrix} = \begin{pmatrix}
-1 & 2 & -1 \\
7/4 & -9/4 & 5/4 \\
3/2 & -5/2 & 3/2
\end{pmatrix}
$$

---

### 5-qadam (Majburiy tekshirish): $A \cdot A^{-1} = E$
$$
\begin{pmatrix} 1 & 2 & -1 \\ 3 & 0 & 2 \\ 4 & -2 & 5 \end{pmatrix} \cdot \left[ -\frac{1}{4} \begin{pmatrix} 4 & -8 & 4 \\ -7 & 9 & -5 \\ -6 & 10 & -6 \end{pmatrix} \right]
$$
1-satrni 1-ustunga ko'paytiramiz:
$$
-\frac{1}{4} [1(4) + 2(-7) + (-1)(-6)] = -\frac{1}{4} [4 - 14 + 6] = -\frac{1}{4} [-4] = 1
$$
1-satrni 2-ustunga:
$$
-\frac{1}{4} [1(-8) + 2(9) + (-1)(10)] = -\frac{1}{4} [-8 + 18 - 10] = 0
$$
Barcha elementlar bo'yicha birlik matritsa $E$ chiqadi!

**Javob:** $A^{-1} = \begin{pmatrix} -1 & 2 & -1 \\ 7/4 & -9/4 & 5/4 \\ 3/2 & -5/2 & 3/2 \end{pmatrix}$.

---

## 7. Talabalar yo'l qo'yadigan tuzoqlar

> [!WARNING] Imtihonda ehtiyot bo'ling!
> 1. **Transponirlashni unutish:** Algebraik to'ldiruvchilarni topgach, ularni o'z o'rniga yozib qo'yish (transponirlamaslik). Doimo esda tuting: 1-satr to'ldiruvchilari teskari matritsaning **1-ustuniga** aylanadi!
> 2. **Kasrlarga erta bo'lish:** $\frac{1}{\det A}$ sonini hisoblashning boshida har bir katakka ko'paytirib, sonlarni noqulay kasrlarga aylantirib yubormang. Ko'paytuvchini matritsa oldida saqlang.
> 3. **Algebraik to'ldiruvchi ishorasini unutish:** $A_{12}, A_{21}, A_{23}, A_{32}$ to'ldiruvchilarining oldiga minus qo'yishni unutish.

---

## 8. Mustaqil yechish uchun amaliy mashqlar

1. $A = \begin{pmatrix} 4 & 7 \\ 1 & 2 \end{pmatrix}$ matritsaning teskarisini toping.
   - *Javob:* $\det A = 1 \implies A^{-1} = \begin{pmatrix} 2 & -7 \\ -1 & 4 \end{pmatrix}$.

2. $A = \begin{pmatrix} 2 & 1 & 0 \\ 0 & 2 & 1 \\ 0 & 0 & 2 \end{pmatrix}$ ning teskarisini toping.
   - *Javob:* $\det A = 8 \implies A^{-1} = \begin{pmatrix} 1/2 & -1/4 & 1/8 \\ 0 & 1/2 & -1/4 \\ 0 & 0 & 1/2 \end{pmatrix}$.
