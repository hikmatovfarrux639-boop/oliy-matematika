---
title: "Teskari matritsa va matritsa rangi"
module: "chiziqli-algebra"
order: 3
description: "Teskari matritsa ta'rifi, mavjudlik sharti, algebraik to'ldiruvchilar va Gauss-Jordan usuli, matritsali tenglamalarni yechish hamda matritsa rangi."
---

## Kirish: Matritsalarni "bo'lish" masalasi

Oddiy sonlar arifmetikasida $2x = 6$ tenglamani yechish uchun ikkala tomonni $2$ ga bo'lamiz: $x = \frac{6}{2} = 3$. Yoki boshqacha aytganda, $2$ sonining teskarisi $2^{-1} = \frac{1}{2}$ ga ko'paytiramiz: $2^{-1} \cdot (2x) = 2^{-1} \cdot 6 \implies x = 3$.

Matritsalar olamida odatiy bo'lish amali $\frac{A}{B}$ mavjud emas! Lekin uning o'rniga berilgan matritsaga ko'paytirganda birlik matritsa ($E$) hosil qiluvchi **teskari matritsa** ($A^{-1}$) tushunchasi kiritiladi.

---

## 1. Teskari matritsa ta'rifi va mavjudlik sharti

> **Ta'rif:** Agar kvadrat $A$ matritsa uchun quyidagi tenglik bajarilsa:
>
> 
$$
> A \cdot A^{-1} = A^{-1} \cdot A = E
> 
$$
>
> u holda $A^{-1}$ matritsa $A$ matritsaga **teskari matritsa** deyiladi.

### Mavjudlik teoremasi:
Kvadrat matritsaga teskari matritsa mavjud bo'lishi uchun uning determinanti noldan farqli bo'lishi **zaruriy va yetarli** shartdir:

$$
\det A \neq 0
$$

- Agar $\det A \neq 0$ bo'lsa, $A$ matritsa **maxsussiz (xosmas)** deyiladi $\implies A^{-1}$ **mavjud va yagona**.
- Agar $\det A = 0$ bo'lsa, $A$ matritsa **maxsus (xos)** deyiladi $\implies A^{-1}$ **mutlaqo mavjud emas**!

### Teskari matritsaning xossalari:
1. $(A^{-1})^{-1} = A$
2. $(A \cdot B)^{-1} = B^{-1} \cdot A^{-1}$ *(E'tibor bering: matritsalar o'rni almashadi!)*
3. $(A^T)^{-1} = (A^{-1})^T$
4. $\det(A^{-1}) = \frac{1}{\det A}$

---

## 2. 1-usul: Algebraik to'ldiruvchilar orqali topish (Klassik usul)

Teskari matritsani topishning universal formulasi:

$$
A^{-1} = \frac{1}{\det A} \cdot C^T
$$

bu yerda $C^T$ — barcha elementlarning algebraik to'ldiruvchilaridan tuzilgan matritsaning transponirlangani (biriktirilgan matritsa):

$$
C^T = \begin{pmatrix}
A_{11} & A_{21} & \dots & A_{n1} \\
A_{12} & A_{22} & \dots & A_{n2} \\
\vdots & \vdots & \ddots & \vdots \\
A_{1n} & A_{2n} & \dots & A_{nn}
\end{pmatrix}
$$

### 4 bosqichli hisoblash algoritmi:
1. $\det A$ ni hisoblang. Agar $\det A = 0$ bo'lsa, "Teskari matritsa mavjud emas" deb yozing va to'xtang.
2. Har bir $a_{ij}$ element uchun mos minor $M_{ij}$ va algebraik to'ldiruvchi $A_{ij} = (-1)^{i+j} M_{ij}$ ni hisoblang.
3. Algebraik to'ldiruvchilar matritsasini tuzing va uni **transponirlang** ($C \to C^T$).
4. Barcha elementlarni $\det A$ ga bo'lib chiqing.

---

## 3. $2 \times 2$ matritsalar uchun tezkor formula

Har safar minor hisoblab o'tirmaslik uchun $2 \times 2$ matritsaning teskarisini 3 soniyada topish qoidasi:
1. Bosh diagonal elementlarining **o'rnini almashtiring** ($a \leftrightarrow d$).
2. Yordamchi diagonal elementlarining **ishorasini qarama-qarshisiga o'zgartiring** ($b \to -b, c \to -c$).
3. Barchasini $\det A = ad - bc$ ga bo'ling:

$$
\begin{pmatrix} a & b \\ c & d \end{pmatrix}^{-1} = \frac{1}{ad - bc} \begin{pmatrix} d & -b \\ -c & a \end{pmatrix}
$$

---

## 4. 2-usul: Gauss-Jordan usuli (Kengaytirilgan $(A \mid E)$ matritsa)

Katta o'lchamli ($3 \times 3, 4 \times 4$) matritsalar uchun 9 ta yoki 16 ta algebraik to'ldiruvchini alohida hisoblash juda ko'p vaqt oladi. Universitet amaliyotida va dasturlashda eng ko'p ishlatiladigan usul — **Gauss-Jordan usuli**dir:

1. Matritsaning o'ng tomoniga birlik matritsani qo'shib yozing: $(A \mid E)$.
2. Satrlar ustida elementar almashtirishlar bajarib, chap tomondagi $A$ matritsani birlik $E$ matritsaga aylantiring:
   
$$
   (A \mid E) \xrightarrow{\text{elementar satr amallari}} (E \mid A^{-1})
   
$$
3. O'ng tomonda hosil bo'lgan yangi matritsa aynan $A^{-1}$ bo'ladi!

### Bosqichma-bosqich amaliy misol:
$A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ matritsasining teskarisini Gauss-Jordan usuli bilan topamiz:
1. Birlik matritsani ulaymiz:
   
$$
   \begin{pmatrix} 1 & 2 & \mid & 1 & 0 \\ 3 & 4 & \mid & 0 & 1 \end{pmatrix}
   
$$
2. $S_2 \to S_2 - 3S_1$ amali (chap pastdagi $3$ ni nol qilish):
   
$$
   \begin{pmatrix} 1 & 2 & \mid & 1 & 0 \\ 0 & -2 & \mid & -3 & 1 \end{pmatrix}
   
$$
3. 2-satrni $-2$ ga bo'lamiz:
   
$$
   \begin{pmatrix} 1 & 2 & \mid & 1 & 0 \\ 0 & 1 & \mid & \frac{3}{2} & -\frac{1}{2} \end{pmatrix}
   
$$
4. $S_1 \to S_1 - 2S_2$ amali (chap yuqoridagi $2$ ni nol qilish):
   
$$
   \begin{pmatrix} 1 & 0 & \mid & -2 & 1 \\ 0 & 1 & \mid & 1.5 & -0.5 \end{pmatrix}
   
$$
Chapda birlik matritsa hosil bo'ldi! Demak, o'ng tomondagi matritsa $A^{-1}$ dir:
$$
A^{-1} = \begin{pmatrix} -2 & 1 \\ 1.5 & -0.5 \end{pmatrix} = -\frac{1}{2} \begin{pmatrix} 4 & -2 \\ -3 & 1 \end{pmatrix} \quad \checkmark
$$

---

## 5. Matritsali tenglamalarni yechish

Matritsali tenglamalarda noma'lum matritsa $X$ qatnashadi. Ko'paytirish tartibi qat'iy saqlanishi kerak:

| Tenglama turi | Qanday yechiladi | Yechim formulasi |
|---|---|---|
| $A \cdot X = B$ | Chap tomondan $A^{-1}$ ga ko'paytiriladi | $X = A^{-1} \cdot B$ |
| $X \cdot A = B$ | O'ng tomondan $A^{-1}$ ga ko'paytiriladi | $X = B \cdot A^{-1}$ |
| $A \cdot X \cdot B = C$ | Chapdan $A^{-1}$, o'ngdan $B^{-1}$ ga ko'paytiriladi | $X = A^{-1} \cdot C \cdot B^{-1}$ |

> ⚠️ **Muhim:** $A \cdot X = B$ tenglamada $X = B \cdot A^{-1}$ deb yozish qo'pol xatodir! Chunki $AB \neq BA$.

---

## 6. Matritsa rangi ($\operatorname{rank}(A)$) va uni topishning 2 ta usuli

> **Ta'rif:** Matritsaning noldan farqli minorlarining eng yuqori tartibiga ushbu matritsaning **rangi** deyiladi va $\operatorname{rank}(A)$ deb yoziladi.
>
> Agar matritsa rangi $r$ ga teng bo'lsa, demak unda kamida bitta $r$-tartibli noldan farqli minor mavjud bo'lib, barcha $(r+1)$-tartibli minorlar esa nolga tengdir. Bu noldan farqli minor **bazis minor** deb ataladi.

TATU va texnika oliygohlarida matritsa rangini topishning **2 ta asosiy usuli** talab qilinadi:

### 1-usul: O'rab oluvchi (chegaralovchi) minorlar usuli (Метод окаймляющих миноров)
Barcha yuzlab minorlarni hisoblamaslik uchun quyidagi zanjir bo'yicha boriladi:
1. Noldan farqli 1-tartibli element (minor) tanlanadi: masalan $a_{11} \neq 0$ ($r \ge 1$).
2. Ushbu elementni o'z ichiga olgan 2-tartibli minorlar tekshiriladi. Agar noldan farqlisi topilsa ($M_2 \neq 0$), rang $r \ge 2$.
3. Endi faqat shu $M_2$ minorni **o'rab oluvchi (bitta yangi satr va yangi ustun qo'shuvchi)** 3-tartibli minorlar tekshiriladi.
4. Agar $M_2$ ni o'rab oluvchi barcha 3-tartibli minorlar nolga teng bo'lsa, **boshqa hech narsani hisoblash shart emas!** Teoremaga ko'ra, qolgan hamma minorlar ham nol bo'ladi va $\operatorname{rank}(A) = 2$ deb xulosa qilinadi.

### 2-usul: Elementar satr almashtirishlari (Gauss usuli)
Eng amaliy va tez usul:
1. Satrlar ustida elementar amallar bajarib, matritsa **pog'onasimon (trapetsiyasimon)** ko'rinishga keltiriladi.
2. Elementar amallar matritsa rangini mutlaqo o'zgartirmaydi!
3. **Qoida:** Pog'onasimon matritsadagi **nollardan iborat bo'lmagan satrlar soni** aynan matritsa rangiga teng bo'ladi!

**Rangning asosiy xossalari:**
1. Agar $A$ matritsa $m \times n$ o'lchamli bo'lsa: $\operatorname{rank}(A) \le \min(m, n)$.
2. Transponirlanganda rang o'zgarmaydi: $\operatorname{rank}(A^T) = \operatorname{rank}(A)$.
3. Kvadrat $n \times n$ matritsa uchun $\operatorname{rank}(A) = n \iff \det A \neq 0$.
4. Matritsa rangi undagi **chiziqli erkli satrlar (yoki ustunlar)** ning maksimal soniga teng.

---

## 7. Amaliy misollar va yechimlar

### 1-misol: $2 \times 2$ teskari matritsa va tekshirish
$A = \begin{pmatrix} 2 & 5 \\ 1 & 3 \end{pmatrix}$ matritsaning teskarisini toping.

**Yechilishi:**
1. Determinant:
   $$\det A = 2 \cdot 3 - 5 \cdot 1 = 6 - 5 = 1 \neq 0$$
2. Tezkor qoida bo'yicha:
   $$A^{-1} = \frac{1}{1} \begin{pmatrix} 3 & -5 \\ -1 & 2 \end{pmatrix} = \begin{pmatrix} 3 & -5 \\ -1 & 2 \end{pmatrix}$$

**Tekshirish:**
$$
A \cdot A^{-1} = \begin{pmatrix} 2 & 5 \\ 1 & 3 \end{pmatrix} \begin{pmatrix} 3 & -5 \\ -1 & 2 \end{pmatrix} = \begin{pmatrix} 6-5 & -10+10 \\ 3-3 & -5+6 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = E \quad \checkmark
$$

---

### 2-misol: $3 \times 3$ matritsaning teskarisini algebraik to'ldiruvchilar bilan topish
$A = \begin{pmatrix} 1 & 2 & 3 \\ 0 & 1 & 4 \\ 5 & 6 & 0 \end{pmatrix}$ matritsaning teskarisini toping.

**Yechilishi:**
1. Determinantni hisoblaymiz (Sarryus yoki 1-ustun bo'yicha):
   $$\det A = 1(0 - 24) - 0 + 5(8 - 3) = -24 + 25 = 1 \neq 0$$
   Demak, teskari matritsa mavjud va $\det A = 1$.

2. Barcha 9 ta algebraik to'ldiruvchilarni hisoblaymiz:
   - $A_{11} = + \begin{vmatrix} 1 & 4 \\ 6 & 0 \end{vmatrix} = 0 - 24 = -24$
   - $A_{12} = - \begin{vmatrix} 0 & 4 \\ 5 & 0 \end{vmatrix} = -(0 - 20) = 20$
   - $A_{13} = + \begin{vmatrix} 0 & 1 \\ 5 & 6 \end{vmatrix} = 0 - 5 = -5$
   - $A_{21} = - \begin{vmatrix} 2 & 3 \\ 6 & 0 \end{vmatrix} = -(0 - 18) = 18$
   - $A_{22} = + \begin{vmatrix} 1 & 3 \\ 5 & 0 \end{vmatrix} = 0 - 15 = -15$
   - $A_{23} = - \begin{vmatrix} 1 & 2 \\ 5 & 6 \end{vmatrix} = -(6 - 10) = 4$
   - $A_{31} = + \begin{vmatrix} 2 & 3 \\ 1 & 4 \end{vmatrix} = 8 - 3 = 5$
   - $A_{32} = - \begin{vmatrix} 1 & 3 \\ 0 & 4 \end{vmatrix} = -(4 - 0) = -4$
   - $A_{33} = + \begin{vmatrix} 1 & 2 \\ 0 & 1 \end{vmatrix} = 1 - 0 = 1$

3. Algebraik to'ldiruvchilar matritsasini tuzamiz va transponirlaymiz ($C^T$):
   
$$
   C^T = \begin{pmatrix} A_{11} & A_{21} & A_{31} \\ A_{12} & A_{22} & A_{32} \\ A_{13} & A_{23} & A_{33} \end{pmatrix} = \begin{pmatrix} -24 & 18 & 5 \\ 20 & -15 & -4 \\ -5 & 4 & 1 \end{pmatrix}
   
$$

4. $\det A = 1$ bo'lgani uchun:
   
$$
   A^{-1} = \begin{pmatrix} -24 & 18 & 5 \\ 20 & -15 & -4 \\ -5 & 4 & 1 \end{pmatrix}
   
$$

---

### 3-misol: Matritsali tenglamani yechish
Tenglamani yeching:
$$
\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} \cdot X = \begin{pmatrix} 3 & 5 \\ 5 & 9 \end{pmatrix}
$$

**Yechilishi:**
Tenglama $A \cdot X = B$ ko'rinishida. Demak, $X = A^{-1} \cdot B$.
1. $A^{-1}$ ni topamiz:
   $\det A = 4 - 6 = -2 \neq 0$.
   $$A^{-1} = \frac{1}{-2} \begin{pmatrix} 4 & -2 \\ -3 & 1 \end{pmatrix} = \begin{pmatrix} -2 & 1 \\ 1.5 & -0.5 \end{pmatrix}$$
2. $X = A^{-1} \cdot B$ ni hisoblaymiz:
   
$$
   X = \begin{pmatrix} -2 & 1 \\ 1.5 & -0.5 \end{pmatrix} \begin{pmatrix} 3 & 5 \\ 5 & 9 \end{pmatrix} = \begin{pmatrix} -6+5 & -10+9 \\ 4.5-2.5 & 7.5-4.5 \end{pmatrix} = \begin{pmatrix} -1 & -1 \\ 2 & 3 \end{pmatrix}
   
$$

**Javob:** $X = \begin{pmatrix} -1 & -1 \\ 2 & 3 \end{pmatrix}$

---

### 4-misol: Matritsa rangini Gauss usulida topish
Matritsaning rangini toping:
$$
A = \begin{pmatrix}
1 & -2 & 1 & 3 \\
2 & -4 & 2 & 6 \\
-1 & 3 & 0 & -2
\end{pmatrix}
$$

**Yechilishi:**
1. 2-satrga e'tibor bering: u 1-satrning $2$ ga ko'paytirilgani ($S_2 = 2 S_1$). Demak, $S_2 \to S_2 - 2 S_1$ qilsak, butunlay nolli satr hosil bo'ladi:
   
$$
   \begin{pmatrix}
   1 & -2 & 1 & 3 \\
   0 & 0 & 0 & 0 \\
   -1 & 3 & 0 & -2
   \end{pmatrix}
   
$$
2. 3-satrga 1-satrni qo'shamiz ($S_3 \to S_3 + S_1$):
   - $-1 + 1 = 0$
   - $3 + (-2) = 1$
   - $0 + 1 = 1$
   - $-2 + 3 = 1$
3. Nolli satrni eng pastga tushiramiz:
   
$$
   \begin{pmatrix}
   1 & -2 & 1 & 3 \\
   0 & 1 & 1 & 1 \\
   0 & 0 & 0 & 0
   \end{pmatrix}
   
$$
Pog'onasimon matritsada noldan farqli satrlar soni $2$ ta. Demak:
$$
\operatorname{rank}(A) = 2
$$

**Javob:** $\operatorname{rank}(A) = 2$

---

### 5-misol: Matritsa rangini o'rab oluvchi minorlar usulida topish (TATU namunasi)
Ushbu matritsaning rangini o'rab oluvchi minorlar usuli bilan toping:
$$
A = \begin{pmatrix}
1 & 2 & 3 \\
2 & 5 & 4 \\
3 & 7 & 7
\end{pmatrix}
$$

**Yechilishi:**
1. **1-tartibli minor:** $M_1 = |a_{11}| = |1| = 1 \neq 0$. Demak, $\operatorname{rank}(A) \ge 1$.
2. **2-tartibli minor:** $M_1$ ni o'rab oluvchi 2-tartibli minorni tekshiramiz:
   
$$
   M_2 = \begin{vmatrix} 1 & 2 \\ 2 & 5 \end{vmatrix} = 1 \cdot 5 - 2 \cdot 2 = 5 - 4 = 1 \neq 0
   
$$
   $M_2 \neq 0$ bo'lgani uchun, $\operatorname{rank}(A) \ge 2$. Bu minor **bazis minor** deb qabul qilinadi.
3. **3-tartibli o'rab oluvchi minor:** $M_2$ ni o'rab oluvchi yagona 3-tartibli minor — bu matritsaning o'z determinanti:
   
$$
   M_3 = \det A = \begin{vmatrix} 1 & 2 & 3 \\ 2 & 5 & 4 \\ 3 & 7 & 7 \end{vmatrix}
   
$$
   Sarryus bo'yicha:
   
$$
   M_3 = (1 \cdot 5 \cdot 7 + 2 \cdot 4 \cdot 3 + 3 \cdot 2 \cdot 7) - (3 \cdot 5 \cdot 3 + 1 \cdot 4 \cdot 7 + 2 \cdot 2 \cdot 7)
   
$$
   
$$
   M_3 = (35 + 24 + 42) - (45 + 28 + 28) = 101 - 101 = 0
   
$$
4. $M_2$ bazis minorni o'rab oluvchi barcha (bu yerda yagona) 3-tartibli minor nolga teng chiqdi.
   Teoremaga ko'ra, matritsa rangi bazis minorning tartibiga teng:
   
$$
   \operatorname{rank}(A) = 2
   
$$

**Javob:** $\operatorname{rank}(A) = 2$, bazis minor: $M_2 = \begin{vmatrix} 1 & 2 \\ 2 & 5 \end{vmatrix}$.

---

## ⚠️ Talabalar ko'p yo'l qo'yadigan 3 ta jiddiy xato

1. **Algebraik to'ldiruvchilar matritsasini transponirlashni unutish:**
   > Formula $A^{-1} = \frac{1}{\det A} C^T$ dir. Talabalar ko'pincha $A_{12}$ ni 1-satr 2-ustunga qo'yib qo'yishadi. Vaholanki, transponirlangan biriktirilgan matritsada $A_{12}$ elementi **2-satr 1-ustunda** turishi kerak!

2. **Matritsali tenglamada o'ng-chapni adashtirish:**
   > $A \cdot X = B$ bo'lsa, $X = A^{-1} B$ bo'ladi. Agar siz uni $X = B A^{-1}$ deb ko'paytirsangiz, mutlaqo noto'g'ri natija olasiz (yoki o'lchamlar to'g'ri kelmay qoladi).

3. **Determinant nol bo'lsa ham teskari matritsa qidirish:**
   > Misol yechishdan oldin doimo birinchi navbatda $\det A$ ni hisoblang. Agar $\det A = 0$ chiqsa, darhol to'xtab: "Determinant 0 bo'lgani uchun teskari matritsa mavjud emas" deb yozing.

---

## 💡 Ustozdan maslahat

Teskari matritsa topganingizdan so'ng, to'g'riligini tekshirish uchun uni dastlabki $A$ matritsaning 1-satriga ko'paytirib ko'ring ($A \cdot A^{-1}$). Agar 1-satr va 1-ustun ko'paytmasi $1$ ga, 1-satr va 2-ustun ko'paytmasi $0$ ga teng chiqsa, demak siz to'g'ri yo'ldasiz!

---

## ✍️ Mustaqil yechish uchun mashqlar

1. $A = \begin{pmatrix} 5 & 7 \\ 2 & 3 \end{pmatrix}$ matritsaning teskarisini toping.
2. $\begin{pmatrix} 2 & 4 \\ 1 & 2 \end{pmatrix}$ matritsasining teskarisi bormi?
3. $X \cdot \begin{pmatrix} 2 & 1 \\ 5 & 3 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$ bo'lsa, $X$ ni toping.
4. $A = \begin{pmatrix} 1 & 2 & 3 \\ 2 & 4 & 6 \\ 3 & 6 & 9 \end{pmatrix}$ matritsaning rangini aniqlang.

<details style="margin-top: 1rem; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); cursor: pointer;">
  <summary style="font-weight: 700; color: var(--primary);">To'liq yechimlar va javoblar</summary>
  <div style="margin-top: 0.75rem; padding-top: 0.75rem; border-top: 1px solid var(--border-color);">
    <p><strong>1-masala:</strong> $\det A = 15 - 14 = 1$. Tezkor qoida: $A^{-1} = \begin{pmatrix} 3 & -7 \\ -2 & 5 \end{pmatrix}$.</p>
    <p><strong>2-masala:</strong> $\det = 4 - 4 = 0$. Determinant 0 bo'lgani uchun teskari matritsa mavjud emas.</p>
    <p><strong>3-masala:</strong> $X \cdot A = E \implies X = A^{-1}$. $\det A = 6 - 5 = 1$. Demak, $X = \begin{pmatrix} 3 & -1 \\ -5 & 2 \end{pmatrix}$.</p>
    <p><strong>4-masala:</strong> 2-satr 1-satrning 2 karrali, 3-satr 1-satrning 3 karrali. Ular o'zaro chiziqli bog'liq bo'lgani uchun elementar almashtirishlardan so'ng faqat 1 ta satr qoladi: $\operatorname{rank}(A) = 1$.</p>
  </div>
</details>
