---
title: "Bir jinsli tenglamalar sistemasi va fundamental yechimlar sistemasi (FYS)"
module: "chiziqli-algebra"
order: 13
description: "AX = 0 sistemasi, trivial yechim, nolmas yechimlar mavjudlik sharti, FYS vektorlari bazisi va umumiy yechimni yozish."
---

## Kirish: O'zgarmas nol ozod hadlar ($A X = 0$)

Barcha ozod hadlari nolga teng bo'lgan chiziqli tenglamalar sistemasiga **bir jinsli sistema** deyiladi:

$$
\begin{cases}
a_{11}x_1 + a_{12}x_2 + \dots + a_{1n}x_n = 0 \\
a_{21}x_1 + a_{22}x_2 + \dots + a_{2n}x_n = 0 \\
\dots\dots\dots\dots\dots\dots\dots\dots\dots\dots \\
a_{m1}x_1 + a_{m2}x_2 + \dots + a_{mn}x_n = 0
\end{cases}
\quad \iff \quad A \cdot X = 0
$$

Bir jinsli sistemalarning o'ta ajoyib bir xususiyati bor:
> **Ular DOIMO birgalikda (yechimga ega)!**
> Chunki barcha noma'lumlarga $0$ qo'ysangiz ($x_1 = 0, x_2 = 0, \dots, x_n = 0$), tenglik har doim $0 = 0$ bo'lib bajariladi. Bu yechimga **nolli yoki trivial yechim** deyiladi.

Biroq bizni qiziqtirgan asosiy savol: **Sistemada noldan boshqa (nolmas, trivial bo'lmagan) yechimlar bormi?**

---

## 1. Nolmas yechimlar mavjud bo'lish sharti

> **Teorema:**
> $n$ ta noma'lumli bir jinsli sistema nolmas (trivial bo'lmagan) yechimga ega bo'lishi uchun uning asosiy matritsasi rangi noma'lumlar sonidan kichik bo'lishi zarur va yetarlidir:
> 
> $$
> \operatorname{rang}(A) < n
> $$

Xususan, agar tenglamalar soni noma'lumlar soniga teng bo'lgan kvadrat sistema ($n \times n$) bo'lsa:
> **Sistema nolmas yechimlarga ega bo'lishi uchun uning determinanti nolga teng bo'lishi kerak: $\det A = 0$!**

---

## 2. Fundamental yechimlar sistemasi (FYS) nima?

Agar $\operatorname{rang}(A) = r < n$ bo'lsa, sistemaning cheksiz ko'p yechimlari mavjud bo'ladi.
Ushbu barcha yechimlar to'plami $n$-o'lchamli fazoda **qism fazo** (vektorlar to'plami)ni tashkil qiladi.

Bu qism fazoning o'lchami:
$$
k = n - r
$$
ga teng bo'ladi!

> **Ta'rif:** Bir jinsli sistemaning har qanday boshqa yechimi chiziqli ifodalanishi mumkin bo'lgan $n - r$ ta **chiziqli erkli yechimlar to'plamiga** **Fundamental Yechimlar Sistemasi (FYS)** deyiladi.

---

## 3. Umumiy yechimning formulasi

Agar $E_1, E_2, \dots, E_{n-r}$ vektorlar sistemaning FYS ni tashkil qilsa, sistemaning **ixtiyoriy umumiy yechimi** ularning chiziqli kombinatsiyasidan iborat bo'ladi:

$$
X = C_1 E_1 + C_2 E_2 + \dots + C_{n-r} E_{n-r}
$$

bu yerda $C_1, C_2, \dots$ — ixtiyoriy haqiqiy sonli o'zgarmaslar (erkin parametrlar).

---

## 4. Qadam-baqadam to'liq amaliy namuna

**Masala:** Quyidagi bir jinsli sistemaning FYS ni va umumiy yechimini toping:
$$
\begin{cases}
x_1 + 2x_2 + 4x_3 - 3x_4 = 0 \\
3x_1 + 5x_2 + 6x_3 - 4x_4 = 0 \\
4x_1 + 5x_2 - 2x_3 + 3x_4 = 0
\end{cases}
$$

<details>
<summary><strong>FYS ni topish bosqichlari</strong></summary>

### 1-qadam: Gauss usulida matritsani pog'onasimon shaklga keltiramiz
$$
A = \begin{pmatrix}
1 & 2 & 4 & -3 \\
3 & 5 & 6 & -4 \\
4 & 5 & -2 & 3
\end{pmatrix}
$$
$S_2 - 3S_1$va$S_3 - 4S_1$:
$$
\sim \begin{pmatrix}
1 & 2 & 4 & -3 \\
0 & -1 & -6 & 5 \\
0 & -3 & -18 & 15
\end{pmatrix}
$$
3-satrdan 2-satrning 3 barobarini ayiramiz ($S_3 - 3S_2$):
$$
\sim \begin{pmatrix}
1 & 2 & 4 & -3 \\
0 & -1 & -6 & 5 \\
0 & 0 & 0 & 0
\end{pmatrix}
$$

Nol satr o'chib ketdi. Matritsada 2 ta satr qoldi: $\operatorname{rang}(A) = r = 2$.
Noma'lumlar soni $n = 4$.
Demak, FYS vektorlari soni:
$$
k = n - r = 4 - 2 = 2 \text{ ta vektor!}
$$

### 2-qadam: Bazis va erkin o'zgaruvchilarni ajratamiz
- Pog'ona burchaklaridagi $x_1, x_2$ — **bazis o'zgaruvchilar**;
- Qolgan $x_3, x_4$ — **erkin o'zgaruvchilar** ($C_1, C_2$).

Tenglamalar:
$$
\begin{cases}
x_1 + 2x_2 + 4x_3 - 3x_4 = 0 \\
-x_2 - 6x_3 + 5x_4 = 0 \implies x_2 = -6x_3 + 5x_4
\end{cases}
$$
$x_1$ ni topamiz:
$$
x_1 = -2x_2 - 4x_3 + 3x_4 = -2(-6x_3 + 5x_4) - 4x_3 + 3x_4 = 12x_3 - 10x_4 - 4x_3 + 3x_4 = 8x_3 - 7x_4
$$

### 3-qadam: FYS vektorlarini tuzamiz
Erkin o'zgaruvchilar $(x_3, x_4)$ ga navbat bilan birlik matritsa qatorlarini beramiz:
1. $x_3 = 1, x_4 = 0$ deb olsak:
   $$x_1 = 8(1) - 7(0) = 8, \quad x_2 = -6(1) + 5(0) = -6$$
   $$E_1 = \begin{pmatrix} 8 \\ -6 \\ 1 \\ 0 \end{pmatrix}$$

2. $x_3 = 0, x_4 = 1$ deb olsak:
   $$x_1 = 8(0) - 7(1) = -7, \quad x_2 = -6(0) + 5(1) = 5$$
   $$E_2 = \begin{pmatrix} -7 \\ 5 \\ 0 \\ 1 \end{pmatrix}$$

### 4-qadam: Umumiy yechim
$$
X = C_1 \begin{pmatrix} 8 \\ -6 \\ 1 \\ 0 \end{pmatrix} + C_2 \begin{pmatrix} -7 \\ 5 \\ 0 \\ 1 \end{pmatrix}, \quad C_1, C_2 \in \mathbb{R}
$$

</details>