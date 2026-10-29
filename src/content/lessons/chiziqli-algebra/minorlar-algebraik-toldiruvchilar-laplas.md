---
title: "Minorlar, algebraik to'ldiruvchilar va Laplas teoremasi"
module: "chiziqli-algebra"
order: 4
description: "Minor va algebraik to'ldiruvchi tushunchalari, shaxmat taxtasi qoidasi, determinantni qator bo'yicha yoyish, 4x4 determinantlarni hisoblash va sun'iy nollar hosil qilish."
---

## Nega bu mavzu oliy algebrada markaziy o'rin tutadi?

Oldingi darsda o'rgangan Sarryus qoidasi faqat $3 \times 3$ determinantlar uchungina amal qiladi.
Lekin amaliyotda, ayniqsa iqtisodiy va muhandislik masalalarida, $4 \times 4, 5 \times 5$ yoki $10 \times 10$ o'lchamli determinantlarni hisoblash talab etiladi.
Bundan tashqari, teskari matritsani ($A^{-1}$) hisoblash aynan **algebraik to'ldiruvchilar** orqali amalga oshiriladi.

Fransuz matematigi **Pyer-Simon Laplas (Pierre-Simon Laplace)** tomonidan kashf etilgan yoyish teoremasi har qanday yuqori tartibli determinantni bir necha oddiy kichik determinantlar yig'indisiga keltirib beruvchi eng qudratli usuldir!

---

## 1. Minor tushunchasi ($M_{ij}$)

$n$-tartibli $A$ kvadrat matritsasining $a_{ij}$ elementining **minori ($M_{ij}$)** deb:
> Berilgan matritsadan **$i$-satr va $j$-ustunni o'chirib tashlashdan** hosil bo'lgan $(n-1)$-tartibli determinantga aytiladi.

### Misol:
$$
A = \begin{pmatrix}
\mathbf{2} & 1 & 3 \\
-1 & 0 & 4 \\
5 & 2 & -3
\end{pmatrix}
$$
$a_{11} = 2$ elementining minorini topish uchun 1-satr va 1-ustunni chizib tashlaymiz:
$$
M_{11} = \begin{vmatrix} 0 & 4 \\ 2 & -3 \end{vmatrix} = 0 \cdot (-3) - 4 \cdot 2 = -8
$$

$a_{23} = 4$ elementining minorini topish uchun 2-satr va 3-ustunni chizib tashlaymiz:
$$
M_{23} = \begin{vmatrix} 2 & 1 \\ 5 & 2 \end{vmatrix} = 2 \cdot 2 - 1 \cdot 5 = 4 - 5 = -1
$$

---

## 2. Algebraik to'ldiruvchi tushunchasi ($A_{ij}$)

$a_{ij}$ elementining **algebraik to'ldiruvchisi ($A_{ij}$)** deb uning minoriga ishora ko'paytirilgan qiymatiga aytiladi:

$$
A_{ij} = (-1)^{i+j} M_{ij}
$$

### Ishorani aniqlash qoidasi:
- Agar indekslar yig'indisi $i + j$ **juft** bo'lsa: $(-1)^{\text{juft}} = +1 \implies \mathbf{A_{ij} = M_{ij}}$ (ishora o'zgarmaydi).
- Agar indekslar yig'indisi $i + j$ **toq** bo'lsa: $(-1)^{\text{toq}} = -1 \implies \mathbf{A_{ij} = -M_{ij}}$ (ishora qarama-qarshisiga o'zgaradi).

### Ishoralar "shaxmat taxtasi" qoidasi:
Har bir katakning ishorasi bosh diagonaldagi musbatlikdan boshlab shaxmat tartibida almashinib boradi:
$$
\begin{pmatrix}
+ & - & + & - & \dots \\
- & + & - & + & \dots \\
+ & - & + & - & \dots \\
- & + & - & + & \dots
\end{pmatrix}
$$

---

## 3. Laplas teoremasi (Satr yoki ustun bo'yicha yoyish)

> [!NOTE] Laplas teoremasi
> Determinantning qiymati uning **ixtiyoriy satri (yoki ustuni) elementlarining o'z algebraik to'ldiruvchilariga ko'paytmalari yig'indisiga** tengdir!

$i$-satr bo'yicha yoyilma:
$$
\det A = a_{i1} A_{i1} + a_{i2} A_{i2} + \dots + a_{in} A_{in} = \sum_{j=1}^n a_{ij} A_{ij}
$$

$j$-ustun bo'yicha yoyilma:
$$
\det A = a_{1j} A_{1j} + a_{2j} A_{2j} + \dots + a_{nj} A_{nj} = \sum_{i=1}^n a_{ij} A_{ij}
$$

> [!TIP] Professional strategiya
> Yoyish uchun doimo **eng ko'p nol ($0$) qatnashgan satr yoki ustunni** tanlang! Chunki $0 \cdot A_{ij} = 0$ bo'lib, o'sha elementning minorini umuman hisoblash shart bo'lmaydi!
> Agar nollar bo'lmasa, satr ustiga satrni qo'shish xossasi orqali **oldin nollar hosil qilinadi**, so'ng yoyiladi!

---

## 4. Qadamma-qadam to'liq yechilgan amaliy misollar

### 1-misol: Tayyor nollari bor $4 \times 4$ determinantni hisoblash

**Masala:** Ushbu determinantni qulay usul bilan hisoblang:
$$
\Delta = \begin{vmatrix}
2 & 0 & -1 & 3 \\
1 & 5 & 0 & 2 \\
0 & 3 & 0 & 0 \\
4 & -2 & 1 & 1
\end{vmatrix}
$$

#### Yechish:
Diqqat bilan qaraymiz: **3-satrda** roppa-rosa 3 ta nol bor: $(0, 3, 0, 0)$!
Determinantni 3-satr bo'yicha yoyamiz:
$$
\Delta = 0 \cdot A_{31} + 3 \cdot A_{32} + 0 \cdot A_{33} + 0 \cdot A_{34} = 3 \cdot A_{32}
$$

$A_{32}$ ni hisoblaymiz:
3-satr va 2-ustun kesishmasi: $i + j = 3 + 2 = 5$ (toq son, demak oldiga minus chiqadi):
$$
A_{32} = (-1)^{3+2} M_{32} = - \begin{vmatrix}
2 & -1 & 3 \\
1 & 0 & 2 \\
4 & 1 & 1
\end{vmatrix}
$$

Hosil bo'lgan $3 \times 3$ determinantni 2-satr bo'yicha yoyamiz (chunki unda ham nol bor!):
$$
\begin{vmatrix} 2 & -1 & 3 \\ 1 & 0 & 2 \\ 4 & 1 & 1 \end{vmatrix} = 1 \cdot (-1)^{2+1} \begin{vmatrix} -1 & 3 \\ 1 & 1 \end{vmatrix} + 0 + 2 \cdot (-1)^{2+3} \begin{vmatrix} 2 & -1 \\ 4 & 1 \end{vmatrix}
$$
- $M_{21} = \begin{vmatrix} -1 & 3 \\ 1 & 1 \end{vmatrix} = -1 - 3 = -4 \implies 1 \cdot (-1) \cdot (-4) = +4$;
- $M_{23} = \begin{vmatrix} 2 & -1 \\ 4 & 1 \end{vmatrix} = 2 - (-4) = 6 \implies 2 \cdot (-1) \cdot 6 = -12$.

$3 \times 3$ determinant qiymati: $4 - 12 = -8$.

Demak:
$$
A_{32} = -(-8) = 8
$$

Yakuniy natija:
$$
\Delta = 3 \cdot A_{32} = 3 \cdot 8 = 24
$$

---

### 2-misol: Nollari bo'lmagan $4 \times 4$ determinantda sun'iy nollar hosil qilish

**Masala:** Ushbu determinantni hisoblang:
$$
\Delta = \begin{vmatrix}
1 & 2 & 3 & 4 \\
2 & 3 & 4 & 1 \\
3 & 4 & 1 & 2 \\
4 & 1 & 2 & 3
\end{vmatrix}
$$

#### Yechish:
Determinantda birorta ham nol yo'q. Birinchi ustunda 1-satr yordamida nollar hosil qilamiz:
- $S_2 - 2S_1 \to S_2$: $(0, -1, -2, -7)$
- $S_3 - 3S_1 \to S_3$: $(0, -2, -8, -10)$
- $S_4 - 4S_1 \to S_4$: $(0, -7, -10, -13)$

Determinant ko'rinishi:
$$
\Delta = \begin{vmatrix}
\mathbf{1} & 2 & 3 & 4 \\
\mathbf{0} & -1 & -2 & -7 \\
\mathbf{0} & -2 & -8 & -10 \\
\mathbf{0} & -7 & -10 & -13
\end{vmatrix}
$$

Endi 1-ustun bo'yicha yoyamiz:
$$
\Delta = 1 \cdot (-1)^{1+1} \begin{vmatrix} -1 & -2 & -7 \\ -2 & -8 & -10 \\ -7 & -10 & -13 \end{vmatrix}
$$
Barcha satrlardan $(-1)$ ni qavs tashqarisiga chiqaramiz ($(-1)^3 = -1$):
$$
\Delta = - \begin{vmatrix} 1 & 2 & 7 \\ 2 & 8 & 10 \\ 7 & 10 & 13 \end{vmatrix}
$$
1-ustun orqali yana nollar hosil qilamiz:
- $S_2 - 2S_1 \to S_2$: $(0, 4, -4)$
- $S_3 - 7S_1 \to S_3$: $(0, -4, -36)$

$$
\Delta = - \begin{vmatrix} 1 & 2 & 7 \\ 0 & 4 & -4 \\ 0 & -4 & -36 \end{vmatrix} = - 1 \cdot \begin{vmatrix} 4 & -4 \\ -4 & -36 \end{vmatrix}
$$
$$
\begin{vmatrix} 4 & -4 \\ -4 & -36 \end{vmatrix} = 4(-36) - (-4)(-4) = -144 - 16 = -160
$$

Yakuniy natija:
$$
\Delta = -(-160) = 160
$$

**Javob:** $\Delta = 160$.

---

## 5. Talabalar yo'l qo'yadigan tuzoqlar

> [!WARNING] Imtihonda ehtiyot bo'ling!
> 1. **Ishorani ($(-1)^{i+j}$) unutish:** Minor $M_{ij}$ bilan algebraik to'ldiruvchi $A_{ij}$ ni adashtirish. Masalan, $a_{21}$ yoki $a_{32}$ kabi elementlarning indekslar yig'indisi toq bo'lgani uchun oldiga albatta minus qo'yilishi shart!
> 2. **Satr elementining o'zini ko'paytirishni unutish:** Yoyishda faqat $A_{ij}$ larni hisoblab, ularni $a_{ij}$ soniga ko'paytirishni unutib qo'yish: $\det = a_{i1}A_{i1} + \dots$.
> 3. **Boshqa satrning algebraik to'ldiruvchilariga ko'paytirish teoremasi:** Bir satr elementlarini boshqa satrning algebraik to'ldiruvchilariga ko'paytirib qo'shsak, natija **har doim 0 (nol) bo'ladi**: $\sum a_{1j} A_{2j} = 0$.

---

## 6. Mustaqil yechish uchun amaliy mashqlar

1. $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ ning barcha minorlari va algebraik to'ldiruvchilarini toping.
   - *Javob:* $M_{11} = 4, M_{12} = 3, M_{21} = 2, M_{22} = 1$. Algebraik to'ldiruvchilar: $A_{11} = 4, A_{12} = -3, A_{21} = -2, A_{22} = 1$.

2. Laplas teoremasi bilan hisoblang: $\begin{vmatrix} 3 & 1 & 2 \\ 0 & 0 & 4 \\ 2 & -1 & 5 \end{vmatrix}$.
   - *Javob:* 2-satr bo'yicha yoyamiz: $\Delta = 4 \cdot (-1)^{2+3} \begin{vmatrix} 3 & 1 \\ 2 & -1 \end{vmatrix} = -4(-3 - 2) = -4(-5) = 20$.
