---
title: "Minor, algebraik to'ldiruvchi va Laplas teoremasi"
module: "chiziqli-algebra"
order: 6
description: "Minor va algebraik to'ldiruvchi tushunchalari, Laplas teoremasi, determinantni ixtiyoriy satr yoki ustun bo'yicha yoyish va n-tartibli determinantlarni qulay hisoblash usullari."
---

## Kirish: Yuqori tartibli determinantlar qanday hisoblanadi?

2-tartibli determinant uchun oddiy $ad - bc$ formulasi, 3-tartibli determinant uchun esa mashhur **Sarryus qoidasi** yoki uchburchak qoidasidan foydalanish qulay. Biroq, tartibi $n \ge 4$ bo'lgan determinantlar uchun (masalan, $4 \times 4$ yoki $5 \times 5$) bunday oddiy diagonalli sxemalar mavjud emas.

Amaliyotda va muhandislik masalalarida yuqori tartibli determinantlarni hisoblashning eng kuchli va universal quroli — **Laplas teoremasi** (satr yoki ustun bo'yicha yoyish) va **minorlar** hamda **algebraik to'ldiruvchilar** nazariyasidir.

---

## 1. Minor tushunchasi

> **Ta'rif:** $n$-tartibli $A$ matritsaning $a_{ij}$ elementi joylashgan $i$-satr va $j$-ustunni o'chirishdan hosil bo'lgan $(n-1)$-tartibli determinantga $a_{ij}$ elementning **minori** deyiladi va $M_{ij}$ deb belgilanadi.

Misol uchun, $3 \times 3$ o'lchamli determinantni qaraylik:

$$
A = \begin{pmatrix}
a_{11} & a_{12} & a_{13} \\
a_{21} & a_{22} & a_{23} \\
a_{31} & a_{32} & a_{33}
\end{pmatrix}
$$

Bu yerda $a_{12}$ elementning minori $M_{12}$ ni topish uchun 1-satr va 2-ustunni o'chiramiz:

$$
M_{12} = \begin{vmatrix}
a_{21} & a_{23} \\
a_{31} & a_{33}
\end{vmatrix} = a_{21} a_{33} - a_{23} a_{31}
$$

Xuddi shuningdek, $a_{33}$ elementning minori 3-satr va 3-ustun o'chirilgach qolgan qism:

$$
M_{33} = \begin{vmatrix}
a_{11} & a_{12} \\
a_{21} & a_{22}
\end{vmatrix} = a_{11} a_{22} - a_{12} a_{21}
$$

---

## 2. Algebraik to'ldiruvchi (Kofaktor)

Minor son qiymatga ega, biroq determinantni yoyishda har bir elementning o'ziga xos ishorasi (plyus yoki minus) muhim rol o'ynaydi.

> **Ta'rif:** $a_{ij}$ elementning minori $M_{ij}$ ning $(-1)^{i+j}$ ko'paytuvchiga ko'paytmasiga shu elementning **algebraik to'ldiruvchisi** deyiladi va $A_{ij}$ bilan belgilanadi:
>
> 
$$
> A_{ij} = (-1)^{i+j} M_{ij}
> 
$$

Bu yerda $(-1)^{i+j}$ ko'paytuvchi shaxmat doskasidagi kabi ishoralar taqsimotini hosil qiladi:

$$
\begin{pmatrix}
+ & - & + & - & \dots \\
- & + & - & + & \dots \\
+ & - & + & - & \dots \\
- & + & - & + & \dots
\end{pmatrix}
$$

- Agar indekslar yig'indisi $i + j$ **juft** bo'lsa: $A_{ij} = +M_{ij}$
- Agar indekslar yig'indisi $i + j$ **toq** bo'lsa: $A_{ij} = -M_{ij}$

---

## 3. Laplas teoremasi (Satr yoki ustun bo'yicha yoyish)

> **Laplas Teoremasi:** Ixtiyoriy kvadrat matritsaning determinanti uning biror satri (yoki ustuni) elementlarining mos algebraik to'ldiruvchilariga ko'paytmalarining yig'indisiga teng.

Matematik ko'rinishda:

1. **$i$-satr bo'yicha yoyish:**
   
$$
   \det A = a_{i1} A_{i1} + a_{i2} A_{i2} + \dots + a_{in} A_{in} = \sum_{j=1}^n a_{ij} A_{ij}
   
$$

2. **$j$-ustun bo'yicha yoyish:**
   
$$
   \det A = a_{1j} A_{1j} + a_{2j} A_{2j} + \dots + a_{nj} A_{nj} = \sum_{i=1}^n a_{ij} A_{ij}
   
$$

### Muhim xossa: Noto'g'ri yoyish teoremasi

> **Xossa:** Bir satr (yoki ustun) elementlarining **boshqa parallel satr** (yoki ustun) elementlarining algebraik to'ldiruvchilariga ko'paytmalarining yig'indisi har doim **nolga teng**:
>
> 
$$
> a_{i1} A_{k1} + a_{i2} A_{k2} + \dots + a_{in} A_{kn} = 0 \quad (i \neq k)
> 
$$

Bu xossa teskari matritsaning to'g'riligini isbotlashda fundamental ahamiyatga ega ($A \cdot A^* = \det(A) \cdot E$).

---

## 4. Qadamma-qadam Amaliy Misollar

### 1-misol: 3-tartibli determinantni 1-satr bo'yicha yoyish

Hisoblang:

$$
\Delta = \begin{vmatrix}
2 & -1 & 3 \\
4 & 0 & 5 \\
-2 & 1 & 1
\end{vmatrix}
$$

**Yechish:** 1-satr elementlari: $a_{11} = 2, a_{12} = -1, a_{13} = 3$. Ularning algebraik to'ldiruvchilarini topamiz:

1. $a_{11} = 2$ uchun ($1+1=2$ juft):
   
$$
   A_{11} = (-1)^{1+1} \begin{vmatrix} 0 & 5 \\ 1 & 1 \end{vmatrix} = +(0\cdot 1 - 5\cdot 1) = -5
   
$$

2. $a_{12} = -1$ uchun ($1+2=3$ toq):
   
$$
   A_{12} = (-1)^{1+2} \begin{vmatrix} 4 & 5 \\ -2 & 1 \end{vmatrix} = -(4\cdot 1 - 5\cdot(-2)) = -(4 + 10) = -14
   
$$

3. $a_{13} = 3$ uchun ($1+3=4$ juft):
   
$$
   A_{13} = (-1)^{1+3} \begin{vmatrix} 4 & 0 \\ -2 & 1 \end{vmatrix} = +(4\cdot 1 - 0\cdot(-2)) = 4
   
$$

Laplas formulasiga ko'ra:

$$
\Delta = a_{11} A_{11} + a_{12} A_{12} + a_{13} A_{13} = 2 \cdot (-5) + (-1) \cdot (-14) + 3 \cdot 4 = -10 + 14 + 12 = 16
$$

**Javob:** $\Delta = 16$.

---

### 2-misol: Nollari ko'p bo'lgan ustunni tanlash (Tezkor usul)

Agar matritsada nollari ko'p satr yoki ustun bo'lsa, yoyish uchun aynan o'sha satr yoki ustunni tanlash hisoblash hajmini keskin kamaytiradi!

Hisoblang:

$$
\Delta = \begin{vmatrix}
3 & 1 & -2 \\
5 & 0 & 7 \\
-4 & 0 & 2
\end{vmatrix}
$$

**Yechish:** 2-ustunda ikkita nol bor ($a_{12} = 1, a_{22} = 0, a_{32} = 0$). Shu sababli 2-ustun bo'yicha yoyamiz:

$$
\Delta = a_{12} A_{12} + 0 \cdot A_{22} + 0 \cdot A_{32} = 1 \cdot A_{12}
$$

Faqatgina bitta $A_{12}$ algebraik to'ldiruvchini hisoblash kifoya:

$$
A_{12} = (-1)^{1+2} \begin{vmatrix} 5 & 7 \\ -4 & 2 \end{vmatrix} = -(5\cdot 2 - 7\cdot(-4)) = -(10 + 28) = -38
$$

Demak, $\Delta = 1 \cdot (-38) = -38$. Bir necha soniyada yechildi!

---

### 3-misol: 4-tartibli determinantni hisoblash (TATU va HEMIS imtihon savoli)

Hisoblang:

$$
D = \begin{vmatrix}
1 & 2 & 0 & -1 \\
3 & 1 & 2 & 1 \\
0 & 4 & 0 & 3 \\
-1 & 1 & 0 & 2
\end{vmatrix}
$$

**Yechish:** 3-ustunni qaraylik: unda uchta nol mavjud ($a_{13} = 0, a_{23} = 2, a_{33} = 0, a_{43} = 0$).
Determinantni 3-ustun bo'yicha yoyamiz:

$$
D = a_{23} A_{23} = 2 \cdot (-1)^{2+3} M_{23} = -2 \cdot M_{23}
$$

$M_{23}$ minori 2-satr va 3-ustunni o'chirishdan hosil bo'ladi:

$$
M_{23} = \begin{vmatrix}
1 & 2 & -1 \\
0 & 4 & 3 \\
-1 & 1 & 2
\end{vmatrix}
$$

Endi bu 3-tartibli determinantni hisoblaymiz (masalan, 1-ustun bo'yicha yoyib):

$$
M_{23} = 1 \cdot \begin{vmatrix} 4 & 3 \\ 1 & 2 \end{vmatrix} - 0 + (-1) \cdot \begin{vmatrix} 2 & -1 \\ 4 & 3 \end{vmatrix}
$$

1. $\begin{vmatrix} 4 & 3 \\ 1 & 2 \end{vmatrix} = 4\cdot 2 - 3\cdot 1 = 8 - 3 = 5$
2. $\begin{vmatrix} 2 & -1 \\ 4 & 3 \end{vmatrix} = 2\cdot 3 - (-1)\cdot 4 = 6 + 4 = 10$

Demak:
$$
M_{23} = 1 \cdot 5 - 1 \cdot 10 = -5
$$

Asosiy determinantga qaytamiz:
$$
D = -2 \cdot M_{23} = -2 \cdot (-5) = 10
$$

**Javob:** $D = 10$.

---

## 5. Elementar almashtirishlar yordamida nollarni ko'paytirish

Agar determinantda nollar kam bo'lsa, determinantning xossasidan foydalanib:
> *Bir satrga (yoki ustunga) boshqa satrning ixtiyoriy songa ko'paytmasini qo'shganda determinantning qiymati o'zgarmaydi!*

Bu usul bilan biror satr yoki ustundagi barcha elementlarni (bittasidan tashqari) nolga aylantirib olib, so'ngra Laplas teoremasini qo'llash hisoblashni bir necha baravar tezlashtiradi.

---

## Xulosa

1. **Minor $M_{ij}$** — berilgan satr va ustunni o'chirishdan qolgan kichik determinant.
2. **Algebraik to'ldiruvchi $A_{ij}$** — ishora bilan ta'minlangan minor: $A_{ij} = (-1)^{i+j} M_{ij}$.
3. **Laplas teoremasi** har qanday o'lchamli determinantni quyi tartibli determinantlarga keltirib hisoblash imkonini beradi.
4. Determinantni hisoblashda **nollari eng ko'p** bo'lgan satr yoki ustun bo'yicha yoyish tavsiya etiladi.
