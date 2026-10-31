---
title: "Chiziqli tenglamalar sistemalari (ChTS) va Kronekker-Kapelli teoremasi"
module: "chiziqli-algebra"
order: 8
description: "ChTS turlari, kengaytirilgan matritsa, yechim mavjudligi va soni haqidagi Kronekker-Kapelli teoremasi, umumiy yechim va parametrli sistemalar."
---

## Kirish: Tenglamalar sistemasini yechishdan oldin nimani bilish shart?

Talabalar ko'pincha chiziqli tenglamalar sistemasini ko'rishi bilan darhol uni yechishga — noma'lumlarni hisoblashga kirishadilar.
Lekin agar berilgan sistemaning **umuman yechimi bo'lmasa-chi?** Yoki uning yechimlari **cheksiz ko'p** bo'lsa-chi?

Xuddi shifokor davolashdan oldin bemorga to'g'ri tashxis qo'yganidek, matematik ham tenglamalar sistemasini yechishdan oldin uning **tabiatini (yechimga egaligini)** aniqlashi shart!

Ushbu tekshiruvni amalga oshiruvchi chiziqli algebraning eng buyuk qonuni — **Kronekker-Kapelli teoremasi (G'arb adabiyotida Rushe-Kapelli teoremasi)** deb ataladi.

---

## 1. Asosiy tushunchalar va belgilar

$m$ ta chiziqli tenglama va $n$ ta noma'lumdan iborat umumiy sistema (ChTS):

$$
\begin{cases}
a_{11} x_1 + a_{12} x_2 + \dots + a_{1n} x_n = b_1 \\
a_{21} x_1 + a_{22} x_2 + \dots + a_{2n} x_n = b_2 \\
\dots\dots\dots\dots\dots\dots\dots\dots\dots\dots \\
a_{m1} x_1 + a_{m2} x_2 + \dots + a_{mn} x_n = b_m
\end{cases}
$$

Sistemaga ikkita muhim matritsa mos qo'yiladi:

1. **Asosiy matritsa ($A$):** Faqat noma'lumlar oldidagi koeffitsiyentlardan tuzilgan $m \times n$ o'lchamli matritsa:
   $$
   A = \begin{pmatrix}
   a_{11} & a_{12} & \dots & a_{1n} \\
   a_{21} & a_{22} & \dots & a_{2n} \\
   \vdots & \vdots & \ddots & \vdots \\
   a_{m1} & a_{m2} & \dots & a_{mn}
   \end{pmatrix}
   $$

2. **Kengaytirilgan matritsa ($\bar{A}$ yoki $(A \mid B)$):** Asosiy matritsaning o'ng tomoniga ozod hadlar ustuni qo'shilgan $m \times (n+1)$ o'lchamli matritsa:
   $$
   \bar{A} = \begin{pmatrix}
   a_{11} & a_{12} & \dots & a_{1n} & \bigm| & b_1 \\
   a_{21} & a_{22} & \dots & a_{2n} & \bigm| & b_2 \\
   \vdots & \vdots & \ddots & \vdots & \bigm| & \vdots \\
   a_{m1} & a_{m2} & \dots & a_{mn} & \bigm| & b_m
   \end{pmatrix}
   $$

---

## 2. Kronekker-Kapelli teoremasi (Yechim mavjudligi mezoni)

> [!NOTE] Kronekker-Kapelli fundamental teoremasi
> Chiziqli tenglamalar sistemasi yechimga ega bo'lishi (birgalikda bo'lishi) uchun **asosiy matritsa rangi kengaytirilgan matritsa rangiga teng bo'lishi ZARUR VA YETARLIDIR**:
> $$
> \mathbf{\operatorname{rank}(A) = \operatorname{rank}(\bar{A})}
> $$

---

## 3. Sistemaning 3 xil taqdiri (Klassifikatsiya)

Ranglarni hisoblagandan so'ng, sistema faqatgina quyidagi 3 ta holatdan birida bo'lishi mumkin:

| Holat | Ranglar va noma'lumlar soni ($n$) | Sistemaning holati | Yechimlar soni |
|---|---|---|---|
| **1-holat** | $\operatorname{rank}(A) < \operatorname{rank}(\bar{A})$ | **Birgalikda emas** (Zid sistema) | **Yechim yo'q ($\emptyset$)** |
| **2-holat** | $\operatorname{rank}(A) = \operatorname{rank}(\bar{A}) = n$ | **Birgalikda va aniqlangan** | **Yagona yechim** |
| **3-holat** | $\operatorname{rank}(A) = \operatorname{rank}(\bar{A}) = r < n$ | **Birgalikda va noaniq** | **Cheksiz ko'p yechim** |

### 3-holat (Cheksiz ko'p yechim) qanday yechiladi?
Agar rang $r < n$ bo'lsa:
1. $r$ ta noma'lum **bazis (asosiy)** noma'lumlar deb tanlanadi (ularning ustunlaridan tuzilgan determinant noldan farqli bo'lishi kerak).
2. Qolgan $k = n - r$ ta noma'lum **erkin (ozod) o'zgaruvchilar** ($c_1, c_2, \dots$) deb e'lon qilinadi.
3. Bazis noma'lumlar erkin o'zgaruvchilar orqali ifodalanadi va **umumiy yechim** yoziladi.

---

## 4. Qadamma-qadam to'liq yechilgan amaliy misollar

### 1-misol: Cheksiz ko'p yechimli sistemani to'liq tahlil qilish va umumiy yechimni topish

**Masala:** Ushbu sistemaning birgalikda ekanligini Kronekker-Kapelli teoremasi bo'yicha tekshiring va umumiy yechimini toping:
$$
\begin{cases}
x_1 + 2x_2 - x_3 + 3x_4 = 4 \\
2x_1 + 4x_2 - x_3 + 8x_4 = 11 \\
3x_1 + 6x_2 - x_3 + 13x_4 = 18
\end{cases}
$$

#### Yechish:

**1-qadam. Kengaytirilgan $\bar{A}$ matritsani tuzamiz va Gauss usulida pog'onasimon shaklga keltiramiz:**
$$
\bar{A} = \left(\begin{array}{cccc|c}
1 & 2 & -1 & 3 & 4 \\
2 & 4 & -1 & 8 & 11 \\
3 & 6 & -1 & 13 & 18
\end{array}\right)
$$

1-satr yordamida 1-ustunni tozalaymiz:
- $S_2 - 2S_1 \to S_2$:
  $2 - 2 = 0; \quad 4 - 4 = 0; \quad -1 - (-2) = 1; \quad 8 - 6 = 2; \quad 11 - 8 = 3$.
- $S_3 - 3S_1 \to S_3$:
  $3 - 3 = 0; \quad 6 - 6 = 0; \quad -1 - (-3) = 2; \quad 13 - 9 = 4; \quad 18 - 12 = 6$.

Matritsa:
$$
\bar{A} \sim \left(\begin{array}{cccc|c}
1 & 2 & -1 & 3 & 4 \\
0 & 0 & 1 & 2 & 3 \\
0 & 0 & 2 & 4 & 6
\end{array}\right)
$$

3-satrdan $2 \times (\text{2-satr})$ ni ayiramiz ($S_3 - 2S_2 \to S_3$):
$$
\bar{A} \sim \left(\begin{array}{cccc|c}
\mathbf{1} & 2 & -1 & 3 & 4 \\
0 & 0 & \mathbf{1} & 2 & 3 \\
0 & 0 & 0 & 0 & 0
\end{array}\right)
$$

**2-qadam. Ranglarni taqqoslaymiz:**
- Asosiy matritsa $A$ da nolmas satrlar soni: $\operatorname{rank}(A) = 2$.
- Kengaytirilgan matritsa $\bar{A}$ da nolmas satrlar soni: $\operatorname{rank}(\bar{A}) = 2$.
- Noma'lumlar soni: $n = 4$.

$\operatorname{rank}(A) = \operatorname{rank}(\bar{A}) = 2 < 4$.
**Xulosa:** Kronekker-Kapelli teoremasiga ko'ra sistema **birgalikda va cheksiz ko'p yechimga ega**!

**3-qadam. Umumiy yechimni topamiz:**
- Bazis o'zgaruvchilar: pog'ona boshidagi ustunlar, ya'ni $x_1$ va $x_3$ ($r = 2$).
- Erkin o'zgaruvchilar: $n - r = 4 - 2 = 2$ ta: $x_2 = c_1, \; x_4 = c_2$ ($c_1, c_2 \in \mathbb{R}$).

2-tenglamadan $x_3$ ni ifodalaymiz:
$$
x_3 + 2x_4 = 3 \implies \mathbf{x_3 = 3 - 2c_2}
$$
1-tenglamaga qo'yib $x_1$ ni ifodalaymiz:
$$
x_1 + 2c_1 - (3 - 2c_2) + 3c_2 = 4
$$
$$
x_1 + 2c_1 - 3 + 2c_2 + 3c_2 = 4 \implies x_1 = 7 - 2c_1 - 5c_2
$$

**Umumiy yechim:**
$$
X = \begin{pmatrix} x_1 \\ x_2 \\ x_3 \\ x_4 \end{pmatrix} = \begin{pmatrix} 7 - 2c_1 - 5c_2 \\ c_1 \\ 3 - 2c_2 \\ c_2 \end{pmatrix} = \begin{pmatrix} 7 \\ 0 \\ 3 \\ 0 \end{pmatrix} + c_1 \begin{pmatrix} -2 \\ 1 \\ 0 \\ 0 \end{pmatrix} + c_2 \begin{pmatrix} -5 \\ 0 \\ -2 \\ 1 \end{pmatrix}
$$

---

### 2-misol: Parametrli sistemani to'liq tekshirish (Imtihon klassikasi)

**Masala:** $\lambda$ parametrning qanday qiymatlarida sistema yagona yechimga ega, cheksiz ko'p yechimga ega yoki yechimga ega emas?
$$
\begin{cases}
x + y + \lambda z = 1 \\
x + \lambda y + z = 1 \\
\lambda x + y + z = 1
\end{cases}
$$

#### Yechish:

Asosiy matritsaning determinantini hisoblaymiz:
$$
\det A = \begin{vmatrix} 1 & 1 & \lambda \\ 1 & \lambda & 1 \\ \lambda & 1 & 1 \end{vmatrix}
$$
Barcha satrlarni 1-satrga qo'shamiz:
$$
\det A = (\lambda + 2) \begin{vmatrix} 1 & 1 & 1 \\ 1 & \lambda & 1 \\ \lambda & 1 & 1 \end{vmatrix} = (\lambda + 2) \begin{vmatrix} 1 & 1 & 1 \\ 0 & \lambda - 1 & 0 \\ 0 & 1 - \lambda & 1 - \lambda \end{vmatrix}
$$
$$
\det A = -(\lambda + 2)(\lambda - 1)^2
$$

**Tahlil:**

1. **Agar $\lambda \neq 1$ va $\lambda \neq -2$ bo'lsa:**
   $\det A \neq 0 \implies \operatorname{rank}(A) = \operatorname{rank}(\bar{A}) = 3 = n$.
   Sistema **yagona yechimga** ega! ($x = y = z = \frac{1}{\lambda + 2}$).

2. **Agar $\lambda = 1$ bo'lsa:**
   Sistema bitta tenglamaga aylanadi: $x + y + z = 1$.
   $$
   \bar{A} = \left(\begin{array}{ccc|c} 1 & 1 & 1 & 1 \\ 1 & 1 & 1 & 1 \\ 1 & 1 & 1 & 1 \end{array}\right) \sim \left(\begin{array}{ccc|c} 1 & 1 & 1 & 1 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \end{array}\right)
   $$
   $\operatorname{rank}(A) = \operatorname{rank}(\bar{A}) = 1 < 3$.
   Sistema **cheksiz ko'p yechimga** ega (2 ta erkin parametr $y = c_1, z = c_2$).

3. **Agar $\lambda = -2$ bo'lsa:**
   $$
   \bar{A} = \left(\begin{array}{ccc|c} 1 & 1 & -2 & 1 \\ 1 & -2 & 1 & 1 \\ -2 & 1 & 1 & 1 \end{array}\right)
   $$
   Barcha 3 ta satrni qo'shsak:
   $$
   (1+1-2)x + (1-2+1)y + (-2+1+1)z = 1 + 1 + 1 \implies \mathbf{0 = 3}
   $$
   Mantiqsiz ziddiyat hosil bo'ldi! $\operatorname{rank}(A) = 2$, lekin $\operatorname{rank}(\bar{A}) = 3$.
   Demak, $\operatorname{rank}(A) < \operatorname{rank}(\bar{A})$ va sistema **yechimga ega emas ($\emptyset$)**!

**Javob:**
- $\lambda \neq 1, \; \lambda \neq -2$ bo'lganda: **yagona yechim**;
- $\lambda = 1$ bo'lganda: **cheksiz ko'p yechim**;
- $\lambda = -2$ bo'lganda: **yechim yo'q**.

---

## 5. Talabalar yo'l qo'yadigan tuzoqlar

> [!WARNING] Imtihonda ehtiyot bo'ling!
> 1. **Kengaytirilgan matritsada ustunlar o'rnini almashtirish:** Satrlar ustida elementar almashtirishlar bajarish mumkin, ammo **ustunlar o'rnini almashtirish qat'iyan man etiladi**! Aks holda noma'lumlarning o'rni almashib ketib, butun yechim xato bo'ladi.
> 2. **Zid satrni ($0 = b$) payqamaslik:** Agar pog'onasimon matritsada $(0, 0, \dots, 0 \mid b)$ ($b \neq 0$) ko'rinishidagi satr hosil bo'lsa, hisoblashni darhol to'xtatish kerak: sistema yechimga ega emas!
> 3. **Erkin o'zgaruvchilar sonini adashtirish:** Erkin parametrlar soni doimo $k = n - r$ ga teng (noma'lumlar soni minus rang).

---

## 6. Mustaqil yechish uchun amaliy mashqlar

1. Sistemaning birgalikda ekanligini tekshiring:
   $\begin{cases} 2x_1 - x_2 + x_3 = 3 \\ 4x_1 - 2x_2 + 2x_3 = 5 \end{cases}$
   - *Javob:* $\operatorname{rank}(A) = 1, \operatorname{rank}(\bar{A}) = 2 \implies$ Sistema birgalikda emas (yechim yo'q).

2. Sistemaning umumiy yechimini toping:
   $\begin{cases} x_1 + x_2 - 2x_3 = 1 \\ 2x_1 + 2x_2 - 4x_3 = 2 \end{cases}$
   - *Javob:* $\operatorname{rank} = 1 < 3 \implies$ Cheksiz ko'p yechim: $x_1 = 1 - c_1 + 2c_2, \; x_2 = c_1, \; x_3 = c_2$.
