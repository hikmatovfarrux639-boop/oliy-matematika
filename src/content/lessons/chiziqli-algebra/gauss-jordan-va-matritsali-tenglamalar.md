---
title: "Gauss-Jordan usuli va murakkab matritsali tenglamalar"
module: "chiziqli-algebra"
order: 12
description: "(A | E) va (A | B) ni to'liq reduksiyalangan (E | X) shaklga keltirish, AX = B, XA = B, AXB = C tenglamalarini yechish."
---

## Kirish: Gauss-Jordan usuli nima va uning oddiy Gauss usulidan farqi nimada?

Klassik Gauss usulida biz matritsaning bosh diagonali **tagidagi** barcha elementlarni nolga aylantirib, "uchburchak" (pog'onasimon) shaklga keltirardik. Shundan so'ng noma'lumlarni topish uchun pastdan yuqoriga qarab "teskari yurish" (o'rniga qo'yish) bosqichi talab qilinar edi.

Nemis geodezisti va matematigi **Vilgelm Jordan (Wilhelm Jordan)** bu usulni yanada mukammallashtirdi:
> **Gauss-Jordan g'oyasi:** Nollarni nafaqat bosh diagonalning tagida, balki **uning ustida ham** hosil qilib, chap tomonda to'g'ridan-to'g'ri **birlik matritsa ($E$)** hosil qilish!

Natijada:
$$
(A \mid B) \xrightarrow{\text{satrlar almashtirishi}} (E \mid X)
$$

Bunda hech qanday teskari yurish yoki tenglamalarni qayta tuzishga hojat qolmaydi — o'ng tomondagi ustun avtomatik ravishda tayyor yechim vektorini beradi!

---

## 1. Gauss-Jordan yordamida teskari matritsa topish: $(A \mid E) \sim (E \mid A^{-1})$

Katta o'lchamli ($3 \times 3$ va ayniqsa $4 \times 4$) matritsalarning teskarisini topishda algebraik to'ldiruvchilar formulasi ($A^{-1} = \frac{1}{\det A} C^T$) juda og'ir bo'lib, 9 ta yoki 16 ta determinant hisoblashni talab qiladi.

Gauss-Jordan usuli esa bitta umumiy kengaytirilgan blok matritsada barcha hisoblashlarni bir yo'la bajaradi:

1. Kengaytirilgan blok matritsa tuziladi: chap tomonga $A$ matritsa, o'ng tomonga xuddi shu o'lchamdagi birlik matritsa $E$ qo'yiladi:
   $$
   (A \mid E) = \begin{pmatrix}
   a_{11} & a_{12} & \dots & a_{1n} & \big| & 1 & 0 & \dots & 0 \\
   a_{21} & a_{22} & \dots & a_{2n} & \big| & 0 & 1 & \dots & 0 \\
   \vdots & \vdots & \ddots & \vdots & \big| & \vdots & \vdots & \ddots & \vdots \\
   a_{n1} & a_{n2} & \dots & a_{nn} & \big| & 0 & 0 & \dots & 1
   \end{pmatrix}
   $$
2. Satrlar ustida elementar almashtirishlar (satrni songa ko'paytirish, satrlarni qo'shish) bajarilib, chap tomondagi $A$ matritsa birlik matritsa $E$ ga aylantiriladi.
3. Chap tomonda $E$ hosil bo'lgan paytda, o'ng tomonda turgan matritsa avtomatik ravishda **qidirilayotgan teskari matritsa $A^{-1}$ ga aylanadi!**

$$
(A \mid E) \xrightarrow{\text{satr amallari}} (E \mid A^{-1})
$$

---

## 2. Murakkab matritsali tenglamalar turlari va ularni yechish

Matritsalarni ko'paytirish kommutativ emas ($A \cdot B \neq B \cdot A$). Shuning uchun matritsali tenglamalarni yechishda qaysi tomondan ko'paytirish qat'iy qoidaga bo'ysunadi:

| Tenglama turi | Yechish formulasi | Muhim qoida va izoh |
|---|---|---|
| **$A \cdot X = B$** | $X = A^{-1} \cdot B$ | $A$ chapda bo'lgani uchun $A^{-1}$ ham chapdan ko'paytiriladi |
| **$X \cdot A = B$** | $X = B \cdot A^{-1}$ | $A$ o'ngda bo'lgani uchun $A^{-1}$ ham o'ngdan ko'paytiriladi |
| **$A \cdot X \cdot B = C$** | $X = A^{-1} \cdot C \cdot B^{-1}$ | Chapdan $A^{-1}$ ga, o'ngdan $B^{-1}$ ga ko'paytiriladi |
| **$A \cdot X + B = C$** | $X = A^{-1} \cdot (C - B)$ | Avval $B$ o'ng tomonga ayirish bo'lib o'tadi |
| **$A \cdot X + X = B$** | $X = (A + E)^{-1} \cdot B$ | $X$ qavsdan tashqariga chiqariladi: $(A + E)X = B$ |
| **$X \cdot A + X \cdot B = C$** | $X = C \cdot (A + B)^{-1}$ | $X$ chapdan qavsdan tashqariga chiqariladi: $X(A + B) = C$ |

---

## 3. Qadamma-qadam to'liq yechilgan amaliy misollar

### 1-misol: Gauss-Jordan usulida teskari matritsani topish

**Masala:** Ushbu $3 \times 3$ matritsaning teskarisini Gauss-Jordan usuli yordamida toping:
$$
A = \begin{pmatrix} 1 & 2 & 1 \\ 2 & 5 & 3 \\ 1 & 3 & 3 \end{pmatrix}
$$

#### Yechish:

**1-qadam. Kengaytirilgan $(A \mid E)$ matritsani tuzamiz:**
$$
\left(\begin{array}{ccc|ccc}
1 & 2 & 1 & 1 & 0 & 0 \\
2 & 5 & 3 & 0 & 1 & 0 \\
1 & 3 & 3 & 0 & 0 & 1
\end{array}\right)
$$

**2-qadam. 1-ustunni tozalaymiz (1-satr yordamida):**
- 2-satrdan $2 \times (\text{1-satr})$ ni ayiramiz:
  $2-2=0; \quad 5-4=1; \quad 3-2=1; \quad 0-2=-2; \quad 1-0=1; \quad 0-0=0$.
- 3-satrdan 1-satrni ayiramiz:
  $1-1=0; \quad 3-2=1; \quad 3-1=2; \quad 0-1=-1; \quad 0-0=0; \quad 1-0=1$.

Matritsa ko'rinishi:
$$
\left(\begin{array}{ccc|ccc}
1 & 2 & 1 & 1 & 0 & 0 \\
0 & 1 & 1 & -2 & 1 & 0 \\
0 & 1 & 2 & -1 & 0 & 1
\end{array}\right)
$$

**3-qadam. 2-ustunni tozalaymiz (2-satr yordamida ham yuqorini, ham pastni!):**
- 1-satrdan $2 \times (\text{2-satr})$ ni ayiramiz:
  $1-0=1; \quad 2-2=0; \quad 1-2=-1; \quad 1 - 2(-2) = 5; \quad 0-2=-2; \quad 0-0=0$.
- 3-satrdan 2-satrni ayiramiz:
  $0-0=0; \quad 1-1=0; \quad 2-1=1; \quad -1 - (-2) = 1; \quad 0-1=-1; \quad 1-0=1$.

Matritsa ko'rinishi:
$$
\left(\begin{array}{ccc|ccc}
1 & 0 & -1 & 5 & -2 & 0 \\
0 & 1 & 1 & -2 & 1 & 0 \\
0 & 0 & 1 & 1 & -1 & 1
\end{array}\right)
$$

**4-qadam. 3-ustunni tozalaymiz (3-satr yordamida yuqorini nolga aylantiramiz):**
- 1-satrga 3-satrni qo'shamiz:
  $1+0=1; \quad 0+0=0; \quad -1+1=0; \quad 5+1=6; \quad -2+(-1)=-3; \quad 0+1=1$.
- 2-satrdan 3-satrni ayiramiz:
  $0-0=0; \quad 1-0=1; \quad 1-1=0; \quad -2-1=-3; \quad 1-(-1)=2; \quad 0-1=-1$.

Matritsa ko'rinishi:
$$
\left(\begin{array}{ccc|ccc}
1 & 0 & 0 & 6 & -3 & 1 \\
0 & 1 & 0 & -3 & 2 & -1 \\
0 & 0 & 1 & 1 & -1 & 1
\end{array}\right)
$$

Chap tomonda to'liq birlik matritsa $E$ hosil bo'ldi!
Demak, o'ng tomonda turgan matritsa aynan $A^{-1}$ dir:
$$
A^{-1} = \begin{pmatrix} 6 & -3 & 1 \\ -3 & 2 & -1 \\ 1 & -1 & 1 \end{pmatrix}
$$

**Tekshirish:**
$$
A \cdot A^{-1} = \begin{pmatrix} 1 & 2 & 1 \\ 2 & 5 & 3 \\ 1 & 3 & 3 \end{pmatrix} \begin{pmatrix} 6 & -3 & 1 \\ -3 & 2 & -1 \\ 1 & -1 & 1 \end{pmatrix} = \begin{pmatrix} 6-6+1 & -3+4-1 & 1-2+1 \\ 12-15+3 & -6+10-3 & 2-5+3 \\ 6-9+3 & -3+6-3 & 1-3+3 \end{pmatrix} = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix} = E
$$
Natija 100% to'g'ri!

---

### 2-misol: Murakkab $A X B = C$ matritsali tenglamani yechish

**Masala:** Ushbu matritsali tenglamani yeching:
$$
\begin{pmatrix} 1 & 2 \\ 3 & 5 \end{pmatrix} \cdot X \cdot \begin{pmatrix} 2 & 1 \\ 5 & 3 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}
$$

#### Yechish:
Tenglama ko'rinishi: $A \cdot X \cdot B = E$.
Ikkala tomonni chapdan $A^{-1}$ ga, o'ngdan $B^{-1}$ ga ko'paytiramiz:
$$
X = A^{-1} \cdot E \cdot B^{-1} = A^{-1} \cdot B^{-1} = (B \cdot A)^{-1}
$$

**1-usul orqali yechamiz:**
1. $A = \begin{pmatrix} 1 & 2 \\ 3 & 5 \end{pmatrix} \implies \det A = 5 - 6 = -1$.
   $$
   A^{-1} = \frac{1}{-1} \begin{pmatrix} 5 & -2 \\ -3 & 1 \end{pmatrix} = \begin{pmatrix} -5 & 2 \\ 3 & -1 \end{pmatrix}
   $$

2. $B = \begin{pmatrix} 2 & 1 \\ 5 & 3 \end{pmatrix} \implies \det B = 6 - 5 = 1$.
   $$
   B^{-1} = \frac{1}{1} \begin{pmatrix} 3 & -1 \\ -5 & 2 \end{pmatrix} = \begin{pmatrix} 3 & -1 \\ -5 & 2 \end{pmatrix}
   $$

3. $X = A^{-1} \cdot B^{-1}$ ko'paytmani hisoblaymiz:
   $$
   X = \begin{pmatrix} -5 & 2 \\ 3 & -1 \end{pmatrix} \begin{pmatrix} 3 & -1 \\ -5 & 2 \end{pmatrix} = \begin{pmatrix} (-5)(3) + 2(-5) & (-5)(-1) + 2(2) \\ 3(3) + (-1)(-5) & 3(-1) + (-1)(2) \end{pmatrix}
   $$
   $$
   X = \begin{pmatrix} -15 - 10 & 5 + 4 \\ 9 + 5 & -3 - 2 \end{pmatrix} = \begin{pmatrix} -25 & 9 \\ 14 & -5 \end{pmatrix}
   $$

**Javob:** $X = \begin{pmatrix} -25 & 9 \\ 14 & -5 \end{pmatrix}$.

---

## 4. Talabalar yo'l qo'yadigan tuzoqlar

> [!WARNING] Imtihonda ehtiyot bo'ling!
> 1. **Ko'paytirish tartibini adashtirish:** $X \cdot A = B$ tenglamani ko'rganda beixtiyor $X = A^{-1} B$ deb yozish eng ko'p ball olib qo'yadigan xatodir! $A$ matritsa $X$ ning o'ng tomonida turganligi sababli, uning teskarisi ham o'ng tomondan ko'paytiriladi: $X = B A^{-1}$.
> 2. **Qavsdan $X$ ni chiqarishda $E$ ni unutish:** $A X + X = B$ tenglamada $X$ ni qavsdan chiqarayotganda ko'pchilik $(A + 1)X = B$ deb yozadi. Matritsaga sonni qo'shib bo'lmaydi! To'g'ri ifoda: $(A + E)X = B \implies X = (A + E)^{-1} B$.
> 3. **Gauss-Jordan almashtirishlarida satrlarni unutish:** Satrlar bo'yicha amal bajarayotganda faqat chap qismni o'zgartirib, o'ng tomondagi birlik matritsaga qo'shishni unutib qoldirish.

---

## 5. Mustaqil yechish uchun amaliy mashqlar

1. Gauss-Jordan usuli bilan $A = \begin{pmatrix} 1 & 1 \\ 2 & 3 \end{pmatrix}$ ning teskarisini toping.
   - *Javob:* $A^{-1} = \begin{pmatrix} 3 & -1 \\ -2 & 1 \end{pmatrix}$.

2. Matritsali tenglamani yeching: $\begin{pmatrix} 3 & -1 \\ 5 & -2 \end{pmatrix} \cdot X = \begin{pmatrix} 5 & 6 \\ 7 & 8 \end{pmatrix}$.
   - *Javob:* $\det A = -1 \implies A^{-1} = \begin{pmatrix} 2 & -1 \\ 5 & -3 \end{pmatrix} \implies X = \begin{pmatrix} 3 & 4 \\ 4 & 6 \end{pmatrix}$.

3. Tenglamani yeching: $X \cdot \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} = \begin{pmatrix} 2 & 3 \\ 1 & 1 \end{pmatrix}$.
   - *Javob:* $X = B \cdot A^{-1} = \begin{pmatrix} 2 & 3 \\ 1 & 1 \end{pmatrix} \cdot \begin{pmatrix} -2 & 1 \\ 1.5 & -0.5 \end{pmatrix} = \begin{pmatrix} 0.5 & 0.5 \\ -0.5 & 0.5 \end{pmatrix}$.
