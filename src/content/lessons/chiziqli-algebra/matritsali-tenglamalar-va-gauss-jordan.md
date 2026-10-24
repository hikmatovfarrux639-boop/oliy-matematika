---
title: "Matritsali tenglamalar va Gauss-Jordan usuli"
module: "chiziqli-algebra"
order: 15
description: "Matritsali tenglamalarni yechish (AX = B, XA = B, AXB = C), teskari matritsa orqali yechish, Gauss-Jordan to'liq reduksiya algoritmi va ko'p usulli tahlil."
---

## Kirish: Matritsalar ustida tenglamalar

Maktab algebrasida $a \cdot x = b$ tenglama $x = \frac{b}{a} = a^{-1} b$ ko'rinishida yechiladi. Ammo matritsalar algebrasida:
- Matritsalarni "bo'lish" amali mavjud emas;
- Matritsalarni ko'paytirish kommutativ emas: $A \cdot B \neq B \cdot A$!

Shuning uchun matritsali tenglamalarda noma'lum $X$ matritsaning qaysi tomonda turgani (chapdan yoki o'ngdan ko'paytirilayotgani) hal qiluvchi ahamiyatga ega. Ushbu darsda matritsali tenglamalarning barcha turlarini va ularni yechishning ikkita asosiy qurolini: **teskari matritsa usuli** va **Gauss-Jordan usulini** o'rganamiz.

---

## 1. Matritsali tenglamalarning 3 ta asosiy turi

Faraz qilaylik, $A$ matritsa xosmas ($\det A \neq 0$), ya'ni uning teskarisi $A^{-1}$ mavjud bo'lsin.

### 1-tur: $A \cdot X = B$ (Noma'lum o'ng tomonda)
Ikkala tomonni **chapdan** $A^{-1}$ ga ko'paytiramiz:
$$
A^{-1} (A \cdot X) = A^{-1} B \implies (A^{-1} A) X = A^{-1} B \implies E \cdot X = A^{-1} B
$$
$$
X = A^{-1} \cdot B
$$

### 2-tur: $X \cdot A = B$ (Noma'lum chap tomonda)
Ikkala tomonni **o'ngdan** $A^{-1}$ ga ko'paytiramiz:
$$
(X \cdot A) A^{-1} = B \cdot A^{-1} \implies X (A A^{-1}) = B A^{-1} \implies X \cdot E = B A^{-1}
$$
$$
X = B \cdot A^{-1}
$$
*(Diqqat: $X = A^{-1} B$ deb yozish qo'pol xatodir!)*

### 3-tur: $A \cdot X \cdot B = C$ (Ikki tomondan cheklangan)
Chapdan $A^{-1}$ ga, o'ngdan $B^{-1}$ ga ko'paytiramiz:
$$
X = A^{-1} \cdot C \cdot B^{-1}
$$

---

## 2. Gauss-Jordan usuli (Birlashtirilgan matritsa orqali yechish)

Teskari matritsani algebraik to'ldiruvchilar orqali hisoblash ($3 \times 3$ yoki undan katta matritsalarda) juda ko'p vaqt oladi. **Gauss-Jordan usuli** tenglamani to'g'ridan-to'g'ri elementar satr almashtirishlari orqali yechish imkonini beradi:

> **Qoida ($A X = B$ uchun):**
> Kengaytirilgan $(A \mid B)$ matritsa tuziladi. Satrlar ustida elementar almashtirishlar bajarilib, chap tomondagi $A$ matritsa birlik $E$ matritsaga keltiriladi:
>
> 
$$
> (A \mid B) \xrightarrow{\text{satr amallari}} (E \mid X)
> 
$$
>
> Chap tomonda $E$ hosil bo'lgan paytda, o'ng tomonda avtomatik ravishda qidirilayotgan **$X$ matritsa** hosil bo'ladi!

Xuddi shunday, teskari matritsani topish uchun $(A \mid E) \to (E \mid A^{-1})$ sxemasi qo'llaniladi.

---

## Bitta masalani 2 xil usulda yechish va solishtirish

> **Masala:** Matritsali tenglamani yeching:
> 
$$
> \begin{pmatrix} 2 & 1 \\ 5 & 3 \end{pmatrix} \cdot X = \begin{pmatrix} 4 & -1 \\ 11 & 2 \end{pmatrix}
> 
$$

### 1-usul: Teskari matritsa formulasidan foydalanish
Tenglama ko'rinishi: $A \cdot X = B \implies X = A^{-1} \cdot B$.
1. $A = \begin{pmatrix} 2 & 1 \\ 5 & 3 \end{pmatrix}$ ning determinantini hisoblaymiz:
   $$\det A = 2 \cdot 3 - 1 \cdot 5 = 6 - 5 = 1 \neq 0$$
2. $2 \times 2$ matritsaning teskarisi qoidasi:
   $$A^{-1} = \frac{1}{\det A} \begin{pmatrix} d & -b \\ -c & a \end{pmatrix} = \frac{1}{1} \begin{pmatrix} 3 & -1 \\ -5 & 2 \end{pmatrix} = \begin{pmatrix} 3 & -1 \\ -5 & 2 \end{pmatrix}$$
3. $X = A^{-1} \cdot B$ ni hisoblaymiz:
   $$X = \begin{pmatrix} 3 & -1 \\ -5 & 2 \end{pmatrix} \begin{pmatrix} 4 & -1 \\ 11 & 2 \end{pmatrix}$$
   - $x_{11} = 3(4) + (-1)(11) = 12 - 11 = 1$
   - $x_{12} = 3(-1) + (-1)(2) = -3 - 2 = -5$
   - $x_{21} = (-5)(4) + 2(11) = -20 + 22 = 2$
   - $x_{22} = (-5)(-1) + 2(2) = 5 + 4 = 9$
   $$X = \begin{pmatrix} 1 & -5 \\ 2 & 9 \end{pmatrix}$$

### 2-usul: Gauss-Jordan usuli (Birlashtirilgan blokli matritsa)
Kengaytirilgan blokli matritsani tuzamiz:
$$
\left(\begin{array}{cc|cc}
2 & 1 & 4 & -1 \\
5 & 3 & 11 & 2
\end{array}\right)
$$
1. 1-satrni 2 ga ko'paytirib, 2-satrdan ayiramiz yoki 1-ustunni nolga keltirish uchun:
   1-satrni 2.5 ga ko'paytirib 2-satrdan ayiramiz:
   $2\text{-satr} \to 2\text{-satr} - 2.5 \times (1\text{-satr})$:
   - $5 - 2.5(2) = 0$
   - $3 - 2.5(1) = 0.5$
   - $11 - 2.5(4) = 11 - 10 = 1$
   - $2 - 2.5(-1) = 2 + 2.5 = 4.5$
   
$$
   \left(\begin{array}{cc|cc}
   2 & 1 & 4 & -1 \\
   0 & 0.5 & 1 & 4.5
   \end{array}\right)
   
$$
2. 2-satrni 2 ga ko'paytiramiz:
   
$$
   \left(\begin{array}{cc|cc}
   2 & 1 & 4 & -1 \\
   0 & 1 & 2 & 9
   \end{array}\right)
   
$$
3. 1-satrdan 2-satrni ayiramiz ($1\text{-satr} \to 1\text{-satr} - 2\text{-satr}$):
   - $2 - 0 = 2$
   - $1 - 1 = 0$
   - $4 - 2 = 2$
   - $-1 - 9 = -10$
   
$$
   \left(\begin{array}{cc|cc}
   2 & 0 & 2 & -10 \\
   0 & 1 & 2 & 9
   \end{array}\right)
   
$$
4. 1-satrni 2 ga bo'lamiz:
   
$$
   \left(\begin{array}{cc|cc}
   1 & 0 & \mathbf{1} & \mathbf{-5} \\
   0 & 1 & \mathbf{2} & \mathbf{9}
   \end{array}\right)
   
$$
Chap tomonda $E$ hosil bo'ldi, o'ng tomonda esa qidirilayotgan $X = \begin{pmatrix} 1 & -5 \\ 2 & 9 \end{pmatrix}$!

Ikkala usul ham mutlaqo bir xil natija berdi!

---

> [!WARNING] Imtihondagi tuzoqlar va ko'p uchraydigan xatoliklar
> 1. **Tomonlarni almashtirib qo'yish ($A^{-1} B \neq B A^{-1}$):**
>    Agar tenglama $X \cdot A = B$ bo'lsa, yechim $X = B \cdot A^{-1}$ bo'ladi! Uni $A^{-1} B$ deb hisoblash matritsalar ko'paytmasi kommutativ emasligi sababli butunlay xato natija beradi.
> 2. **Determinant nolga teng bo'lsa:**
>    Agar $\det A = 0$ bo'lsa, teskari matritsa mavjud emas. Bu holda tenglama yoki cheksiz ko'p yechimga ega, yoki yechimga ega emas (satrlarni tahlil qilish talab etiladi).
> 3. **$X \cdot A = B$ tenglamada Gauss-Jordan usuli:**
>    Gauss-Jordan satr amallari faqat $A X = B$ uchun to'g'ridan-to'g'ri ishlaydi. $X A = B$ uchun tenglamani oldin transponirlash kerak: $A^T X^T = B^T$, so'ngra Gauss-Jordan qo'llaniladi.

---

## Mustaqil yechish uchun amaliy mashqlar

1. $X \cdot \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} = \begin{pmatrix} 3 & 5 \\ 5 & 9 \end{pmatrix}$ tenglamani yeching ($X = B \cdot A^{-1}$).
2. Gauss-Jordan usuli yordamida $A = \begin{pmatrix} 1 & 2 & 3 \\ 0 & 1 & 4 \\ 5 & 6 & 0 \end{pmatrix}$ matritsaning teskarisi $A^{-1}$ ni toping.
3. $\begin{pmatrix} 1 & 0 \\ 2 & 1 \end{pmatrix} \cdot X \cdot \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 2 & 1 \\ 3 & 2 \end{pmatrix}$ tenglamadan $X$ ni toping.

<details style="margin-top: 1rem; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); cursor: pointer;">
  <summary style="font-weight: 700; color: var(--primary);">👉 Yechimni tekshirish</summary>
  <div style="margin-top: 0.75rem; padding-top: 0.75rem; border-top: 1px solid var(--border-color); line-height: 1.7;">
    <p><strong>1-masala:</strong></p>
    <p>$\det A = 4 - 6 = -2$. $A^{-1} = -\frac{1}{2}\begin{pmatrix} 4 & -2 \\ -3 & 1 \end{pmatrix} = \begin{pmatrix} -2 & 1 \\ 1.5 & -0.5 \end{pmatrix}$.</p>
    <p>$X = B \cdot A^{-1} = \begin{pmatrix} 3 & 5 \\ 5 & 9 \end{pmatrix} \begin{pmatrix} -2 & 1 \\ 1.5 & -0.5 \end{pmatrix} = \begin{pmatrix} -6+7.5 & 3-2.5 \\ -10+13.5 & 5-4.5 \end{pmatrix} = \mathbf{\begin{pmatrix} 1.5 & 0.5 \\ 3.5 & 0.5 \end{pmatrix}}$.</p>

    <hr style="margin: 0.75rem 0; border: none; border-top: 1px dashed var(--border-color);" />

    <p><strong>2-masala:</strong></p>
    <p>$(A \mid E)$ matritsa tuziladi va satr amallari bajariladi: $\det A = 1(0 - 24) - 2(0 - 20) + 3(0 - 5) = -24 + 40 - 15 = 1$.</p>
    <p>Natija: $\mathbf{A^{-1} = \begin{pmatrix} -24 & 18 & 5 \\ 20 & -15 & -4 \\ -5 & 4 & 1 \end{pmatrix}}$.</p>

    <hr style="margin: 0.75rem 0; border: none; border-top: 1px dashed var(--border-color);" />

    <p><strong>3-masala:</strong></p>
    <p>$A^{-1} = \begin{pmatrix} 1 & 0 \\ -2 & 1 \end{pmatrix}, \quad B^{-1} = \begin{pmatrix} 1 & -1 \\ 0 & 1 \end{pmatrix}$.</p>
    <p>$X = A^{-1} C B^{-1} = \begin{pmatrix} 1 & 0 \\ -2 & 1 \end{pmatrix} \begin{pmatrix} 2 & 1 \\ 3 & 2 \end{pmatrix} \begin{pmatrix} 1 & -1 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 2 & 1 \\ -1 & 0 \end{pmatrix} \begin{pmatrix} 1 & -1 \\ 0 & 1 \end{pmatrix} = \mathbf{\begin{pmatrix} 2 & -1 \\ -1 & 1 \end{pmatrix}}$.</p>
  </div>
</details>
