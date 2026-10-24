---
title: "Chiziqli tenglamalar sistemasini turli bazislarda yechish: Barcha tayanch yechimlarni topish"
module: "chiziqli-algebra"
order: 16
duration: "28 daqiqa"
category: "Chiziqli algebra"
difficulty: "O'rtacha"
description: "Noma'lumlari tenglamalaridan ko'p bo'lgan sistemalar, bazis va erkin o'zgaruvchilar, barcha bazis yechimlar kombinatsiyasi (C_n^r) hamda chiziqli dasturlashdagi tayanch yechimlar."
---

## Kirish: Noaniq sistemalar va chiziqli optimallashtirish

Amaliy masalalarda, ayniqsa iqtisodiyot, logistika, ishlab chiqarishni rejalashtirish va chiziqli dasturlashda tenglamalar soni noma'lumlar sonidan **kam bo'lgan** ($m < n$) sistemalar doimo uchraydi.

Masalan:
- Korxona $4$ xil mahsulot ishlab chiqaradi, lekin cheklovchi xomashyo turlari faqat $2$ ta.
- Bunday sistemalar birgalikda bo'lsa, ular **cheksiz ko'p yechimga** ega bo'ladi.

Lekin amaliyotda har qanday mavhum cheksiz ko'p yechim emas, balki aniq iqtisodiy ma'noga ega bo'lgan, resurslarni to'liq sarflovchi yoki mahsulot hajmi manfiy bo'lmagan maxsus yechimlar kerak bo'ladi. Bular chiziqli algebrada **bazis yechimlar**, chiziqli dasturlashda esa **tayanch yechimlar** deb ataladi.

---

## 1. Birgalikda bo'lgan noaniq ChTS va bazis tushunchasi

Faraz qilaylik, $m$ ta chiziqli tenglama va $n$ ta noma'lumdan iborat sistema berilgan:

$$
\begin{cases}
a_{11} x_1 + a_{12} x_2 + \dots + a_{1n} x_n = b_1 \\
a_{21} x_1 + a_{22} x_2 + \dots + a_{2n} x_n = b_2 \\
\dots \\
a_{m1} x_1 + a_{m2} x_2 + \dots + a_{mn} x_n = b_m
\end{cases}
$$

Matritsa shaklida: $A X = B$.

**Kronekker-Kapelli teoremasiga ko'ra:**
- Agar $\operatorname{rang}(A) = \operatorname{rang}(A|B) = r = n$ bo'lsa, sistema yagona yechimga ega.
- Agar $\operatorname{rang}(A) = \operatorname{rang}(A|B) = r < n$ bo'lsa, sistema **birgalikda va cheksiz ko'p yechimli** (noaniq) bo'ladi.

Bu yerda $r$ soni asosiy matritsaning rangi bo'lib, u sistemaning **chiziqli erkli tenglamalari sonini** bildiradi.

---

## 2. Bazis o'zgaruvchilar va erkin o'zgaruvchilar

Sistemaning asosiy matritsasi $A$ dan determinanti nolga teng bo'lmagan $r \times r$ o'lchamli qism matritsa (bazis minor) ajratib olish mumkin.

1. **Bazis o'zgaruvchilar:**
   Ushbu bazis minor ustunlariga to'g'ri keluvchi $r$ ta noma'lum **bazis o'zgaruvchilar** deyiladi.
2. **Erkin o'zgaruvchilar:**
   Qolgan $k = n - r$ ta noma'lum **erkin o'zgaruvchilar** (erkin parametrlar) deyiladi.

### Umumiy yechim:
Gauss-Jordan usuli yordamida har bir bazis o'zgaruvchini faqat erkin o'zgaruvchilar orqali ifodalash mumkin:

$$
x_{\text{bazis}} = f(x_{\text{erkin}})
$$

Bu ifoda sistemaning **umumiy yechimi** deyiladi.

### Bazis yechim ta'rifi:
> **Ta'rif:** Agar sistemaning umumiy yechimidagi barcha erkin o'zgaruvchilar qiymati **nolga teng** deb olinsa ($x_{\text{erkin}} = 0$), hosil bo'ladigan xususiy sonli yechim **bazis yechim** deb ataladi.

Bazis yechimda ko'pi bilan $r$ ta noldan farqli komponent mavjud bo'lishi mumkin:
- Agar bazis o'zgaruvchilarning barchasi noldan farqli bo'lsa ($x_B \neq 0$), bunday yechim **aynigan emas (non-degenerate)** bazis yechim deyiladi.
- Agar bazis o'zgaruvchilar orasida ham kamida bittasi nolga teng bo'lib qolsa, u **aynigan (degenerate)** bazis yechim deyiladi.

---

## 3. Barcha bazis kombinatsiyalarini saralash ($C_n^r$ soni)

Biz qaysi $r$ ta noma'lumni bazis qilib olishimizga qarab, butunlay turlicha bazislarga va turlicha bazis yechimlarga ega bo'lamiz!

$n$ ta noma'lumdan $r$ tasini tanlab olish usullari soni kombinatorikadagi kombinatsiyalar soni formulasi bilan aniqlanadi:

$$
C_n^r = \frac{n!}{r!(n - r)!}
$$

> **Muhim eslatma:** Har qanday ixtiyoriy tanlangan $r$ ta noma'lum ham bazis bo'lavermaydi!
> Tanlangan $r$ ta noma'lumga mos ustunlardan tuzilgan determinant **noldan farqli** ($\det A_B \neq 0$) bo'lgandagina ular bazis tashkil qiladi.
> Shuning uchun sistemaning haqiqiy bazislari soni $N \le C_n^r$ bo'ladi.

---

## 4. Tayanch yechimlar (Chiziqli dasturlashning asosi)

Iqtisodiyotda ishlab chiqariladigan mahsulotlar soni, sarflanadigan materiallar yoki xarajatlar manfiy bo'lishi mumkin emas. Shuning uchun barcha noma'lumlarga **nomanfiylik sharti** qo'yiladi:

$$
x_1 \ge 0, \quad x_2 \ge 0, \quad \dots, \quad x_n \ge 0
$$

> **Ta'rif:** Barcha komponentlari nomanfiy bo'lgan ($x_i \ge 0, \forall i$) bazis yechimga **tayanch yechim** (inglizcha: *Basic Feasible Solution - BFS*) deyiladi.

### Geometrik mohiyati:
$n$-o'lchovli fazoda tenglamalar sistemasi va $x_i \ge 0$ tengsizliklari ko'pyoq (qavariq soha) hosil qiladi.
Ushbu sohaning **burchak nuqtalari (cho'qqilari)** aynan sistemaning **tayanch yechimlariga** mos keladi! Chiziqli dasturlashning mashhur **Simpleks algoritmi** bitta tayanch yechimdan ikkinchi yaxshiroq tayanch yechimga o'tish orqali optimal yechimni topadi.

---

## 5. To'liq yechilgan universitet misoli

> **Masala sharti:**
> Quyidagi chiziqli tenglamalar sistemasi berilgan:
> 
> $$
> \begin{cases}
> x_1 + 2x_2 + x_3 = 8 \\
> 2x_1 + x_2 + x_4 = 10
> \end{cases}
> $$
> 
> 1. Sistemaning barcha mumkin bo'lgan bazislarini aniqlang;
> 2. Barcha bazis yechimlarni toping;
> 3. Ularning orasidan tayanch yechimlarni ajrating;
> 4. Jordan-Gauss jadvali orqali bir bazisdan ikkinchisiga o'tishni ko'rsating.

---

### Yechish tahlili:

Sistemada $m = 2$ ta tenglama va $n = 4$ ta noma'lum ($x_1, x_2, x_3, x_4$) qatnashgan.
Asosiy matritsaning rangi $r = 2$.
Mumkin bo'lgan bazislar soni eng ko'pi bilan:

$$
C_4^2 = \frac{4!}{2! \cdot 2!} = \frac{4 \cdot 3}{2} = 6 \text{ ta}
$$

Barcha $6$ ta juftlikni bittalab ko'rib chiqamiz:

---

### 1-kombinatsiya: Bazis $\{x_1, x_2\}$
Erkin o'zgaruvchilar: $x_3 = 0, x_4 = 0$.

Sistema:

$$
\begin{cases}
x_1 + 2x_2 = 8 \\
2x_1 + x_2 = 10
\end{cases}
$$

Bazis determinant:

$$
\Delta = \begin{vmatrix} 1 & 2 \\ 2 & 1 \end{vmatrix} = 1 - 4 = -3 \neq 0 \implies \textbf{Bazis mavjud!}
$$

Sistemani yechamiz:
Birinchi tenglamadan $x_1 = 8 - 2x_2$ ni ikkinchisiga qo'yamiz:

$$
2(8 - 2x_2) + x_2 = 10 \implies 16 - 4x_2 + x_2 = 10 \implies -3x_2 = -6 \implies x_2 = 2
$$

$$
x_1 = 8 - 2(2) = 4
$$

**1-bazis yechim:**

$$
X_1 = (4, 2, 0, 0)
$$

Barcha koordinatalar musbat ($4 > 0, 2 > 0$): $\implies$ **TAYANCH YECHIM!**

---

### 2-kombinatsiya: Bazis $\{x_1, x_3\}$
Erkin o'zgaruvchilar: $x_2 = 0, x_4 = 0$.

Sistema:

$$
\begin{cases}
x_1 + x_3 = 8 \\
2x_1 = 10
\end{cases}
$$

Determinant: $\Delta = \begin{vmatrix} 1 & 1 \\ 2 & 0 \end{vmatrix} = -2 \neq 0 \implies \textbf{Bazis mavjud!}$

Yechish:
- Ikkinchi tenglamadan: $x_1 = 5$.
- Birinchisidan: $5 + x_3 = 8 \implies x_3 = 3$.

**2-bazis yechim:**

$$
X_2 = (5, 0, 3, 0)
$$

Barcha koordinatalar nomanfiy ($5 \ge 0, 3 \ge 0$): $\implies$ **TAYANCH YECHIM!**

---

### 3-kombinatsiya: Bazis $\{x_1, x_4\}$
Erkin o'zgaruvchilar: $x_2 = 0, x_3 = 0$.

Sistema:

$$
\begin{cases}
x_1 = 8 \\
2x_1 + x_4 = 10
\end{cases}
$$

Determinant: $\Delta = \begin{vmatrix} 1 & 0 \\ 2 & 1 \end{vmatrix} = 1 \neq 0 \implies \textbf{Bazis mavjud!}$

Yechish:
- $x_1 = 8$;
- $2(8) + x_4 = 10 \implies 16 + x_4 = 10 \implies x_4 = -6$.

**3-bazis yechim:**

$$
X_3 = (8, 0, 0, -6)
$$

$x_4 = -6 < 0$ bo'lganligi sababli: $\implies$ **Bazis yechim, ammo TAYANCH EMAS!**

---

### 4-kombinatsiya: Bazis $\{x_2, x_3\}$
Erkin o'zgaruvchilar: $x_1 = 0, x_4 = 0$.

Sistema:

$$
\begin{cases}
2x_2 + x_3 = 8 \\
x_2 = 10
\end{cases}
$$

Determinant: $\Delta = \begin{vmatrix} 2 & 1 \\ 1 & 0 \end{vmatrix} = -1 \neq 0 \implies \textbf{Bazis mavjud!}$

Yechish:
- $x_2 = 10$;
- $2(10) + x_3 = 8 \implies 20 + x_3 = 8 \implies x_3 = -12$.

**4-bazis yechim:**

$$
X_4 = (0, 10, -12, 0)
$$

$x_3 = -12 < 0$ bo'lganligi sababli: $\implies$ **Bazis yechim, ammo TAYANCH EMAS!**

---

### 5-kombinatsiya: Bazis $\{x_2, x_4\}$
Erkin o'zgaruvchilar: $x_1 = 0, x_3 = 0$.

Sistema:

$$
\begin{cases}
2x_2 = 8 \\
x_2 + x_4 = 10
\end{cases}
$$

Determinant: $\Delta = \begin{vmatrix} 2 & 0 \\ 1 & 1 \end{vmatrix} = 2 \neq 0 \implies \textbf{Bazis mavjud!}$

Yechish:
- $2x_2 = 8 \implies x_2 = 4$;
- $4 + x_4 = 10 \implies x_4 = 6$.

**5-bazis yechim:**

$$
X_5 = (0, 4, 0, 6)
$$

Barcha koordinatalar nomanfiy: $\implies$ **TAYANCH YECHIM!**

---

### 6-kombinatsiya: Bazis $\{x_3, x_4\}$
Erkin o'zgaruvchilar: $x_1 = 0, x_2 = 0$.

Sistema:

$$
\begin{cases}
x_3 = 8 \\
x_4 = 10
\end{cases}
$$

Determinant: $\Delta = \begin{vmatrix} 1 & 0 \\ 0 & 1 \end{vmatrix} = 1 \neq 0 \implies \textbf{Bazis mavjud!}$

Yechish:
- $x_3 = 8$;
- $x_4 = 10$.

**6-bazis yechim:**

$$
X_6 = (0, 0, 8, 10)
$$

Barcha koordinatalar nomanfiy: $\implies$ **TAYANCH YECHIM!**

---

### Natijalarning umumiy yakuniy jadvali:

| № | Tanlangan bazis | $\det A_B$ | Bazis yechim $(x_1, x_2, x_3, x_4)$ | Yechim turi |
|---|---|---|---|---|
| 1 | $\{x_1, x_2\}$ | $-3$ | $(4, 2, 0, 0)$ | **Tayanch yechim** |
| 2 | $\{x_1, x_3\}$ | $-2$ | $(5, 0, 3, 0)$ | **Tayanch yechim** |
| 3 | $\{x_1, x_4\}$ | $1$ | $(8, 0, 0, -6)$ | Faqat bazis yechim |
| 4 | $\{x_2, x_3\}$ | $-1$ | $(0, 10, -12, 0)$ | Faqat bazis yechim |
| 5 | $\{x_2, x_4\}$ | $2$ | $(0, 4, 0, 6)$ | **Tayanch yechim** |
| 6 | $\{x_3, x_4\}$ | $1$ | $(0, 0, 8, 10)$ | **Tayanch yechim** |

Ko'rib turganimizdek, 6 ta mumkin bo'lgan bazis kombinatsiyasining barchasi mavjud bo'lib, ulardan **4 tasi tayanch yechim** hisoblanadi!

---

### Jordan-Gauss jadvali bilan bazis almashtirish

Bir bazisdan ikkinchisiga o'tishni har safar yangitdan tenglamalar sistemasini yechmasdan, **Jordan-Gauss jadvali (simpleks almashtirish)** yordamida bir qadamda amalga oshirish mumkin.

Boshlang'ich jadval (Bazis $\{x_3, x_4\}$):

| Bazis | Ozod had ($B$) | $x_1$ | $x_2$ | $x_3$ | $x_4$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| $x_3$ | $8$ | $1$ | $2$ | $1$ | $0$ |
| $x_4$ | $10$ | $[2]$ | $1$ | $0$ | $1$ |

Agar bazisga $x_1$ ni kiritib, $x_4$ ni chiqarmoqchi bo'lsak, hal qiluvchi element sifatida $a_{21} = [2]$ tanlanadi.
2-satrni $2$ ga bo'lamiz va 1-satrdan ayiramiz:

| Bazis | Ozod had ($B$) | $x_1$ | $x_2$ | $x_3$ | $x_4$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| $x_3$ | $3$ | $0$ | $1.5$ | $1$ | $-0.5$ |
| $x_1$ | $5$ | $1$ | $0.5$ | $0$ | $0.5$ |

Jadvaldan to'g'ridan-to'g'ri yangi bazis $\{x_1, x_3\}$ ning yechimi o'qiladi:
$x_1 = 5, x_3 = 3, x_2 = 0, x_4 = 0$, ya'ni $X_2 = (5, 0, 3, 0)$!

---

## 6. Mustaqil mashqlar va javoblar

### 1-masala
Quyidagi sistema berilgan:

$$
\begin{cases}
x_1 + x_2 + x_3 = 6 \\
2x_1 + x_2 + x_4 = 8
\end{cases}
$$

1. Barcha mumkin bo'lgan bazislar sonini aniqlang;
2. Barcha bazis yechimlarni hisoblang;
3. Tayanch yechimlarni ajrating.

---

### Javoblar va tekshirish

- Noma'lumlar soni $n = 4, m = 2, r = 2$.
- $C_4^2 = 6$ ta kombinatsiya:
  1. $\{x_1, x_2\}$: $\Delta = 1 - 2 = -1 \neq 0$. Yechim: $x_1 = 2, x_2 = 4, x_3 = 0, x_4 = 0 \implies (2, 4, 0, 0)$ — **Tayanch yechim**.
  2. $\{x_1, x_3\}$: $x_2 = 0, x_4 = 0 \implies x_1 = 4, x_3 = 2 \implies (4, 0, 2, 0)$ — **Tayanch yechim**.
  3. $\{x_1, x_4\}$: $x_2 = 0, x_3 = 0 \implies x_1 = 6, x_4 = 8 - 12 = -4 \implies (6, 0, 0, -4)$ — Bazis, lekin tayanch emas.
  4. $\{x_2, x_3\}$: $x_1 = 0, x_4 = 0 \implies x_2 = 8, x_3 = 6 - 8 = -2 \implies (0, 8, -2, 0)$ — Bazis, lekin tayanch emas.
  5. $\{x_2, x_4\}$: $x_1 = 0, x_3 = 0 \implies x_2 = 6, x_4 = 2 \implies (0, 6, 0, 2)$ — **Tayanch yechim**.
  6. $\{x_3, x_4\}$: $x_1 = 0, x_2 = 0 \implies x_3 = 6, x_4 = 8 \implies (0, 0, 6, 8)$ — **Tayanch yechim**.
