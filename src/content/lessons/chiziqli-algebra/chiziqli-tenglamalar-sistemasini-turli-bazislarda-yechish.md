---
title: "ChTS ni turli bazislarda yechish: Barcha tayanch yechimlarni topish"
module: "chiziqli-algebra"
order: 14
description: "Bazisli va erkin o'zgaruvchilarni tanlash, barcha bazis va tayanch yechimlarni topish, Gauss-Jordan simpleks qadami."
---

## Kirish: Nega bitta sistemani turli bazislarda yechish kerak?

Klassik maktab algebrasida har doim bitta yagona yechimga ega sistemalar qaraladi ($m = n, \det A \neq 0$). Ammo real amaliyotda, ayniqsa **iqtisodiyot, logistika, resurslarni taqsimlash (Chiziqli dasturlash va Simpleks usuli)** hamda **transport masalalari**da tenglamalar soni noma'lumlar sonidan doimo kam bo'ladi ($m < n$).

Bunday sistemalar cheksiz ko'p yechimga ega bo'ladi. Cheksiz ko'p yechimlar ichidan qaysi birini tanlash kerak?
Optimizatsiya nazariyasida maqsad funksiyasining maksimumi yoki minimumi har doim chetki ko'pburchakning uchlarida — ya'ni **TAYANCH YECHIMLARDA (Опорные решения)** erishiladi!

Shuning uchun amaliyotchi matematik uchun barcha mumkin bo'lgan bazislarni tekshirib chiqish va ularning ichidan tayanch yechimlarni ajratib olish fundamental mahorat hisoblanadi.

---

## 1. Nazariy asos: Bazis, Bazisli yechim va Tayanch yechim

Faraz qilaylik, $m$ ta chiziqli tenglama va $n$ ta noma'lumli ($m < n$) sistema berilgan bo'lsin:

$$
\begin{cases}
a_{11} x_1 + a_{12} x_2 + \dots + a_{1n} x_n = b_1 \\
a_{21} x_1 + a_{22} x_2 + \dots + a_{2n} x_n = b_2 \\
\dots\dots\dots\dots\dots\dots\dots\dots\dots\dots \\
a_{m1} x_1 + a_{m2} x_2 + \dots + a_{mn} x_n = b_m
\end{cases}
$$

Matritsaning rangi $r = \operatorname{rank}(A) = m$ bo'lsin.

### Asosiy tushunchalar:
1. **Bazis o'zgaruvchilar:** $n$ ta o'zgaruvchidan tanlab olingan $r$ ta o'zgaruvchi. Shart: ularga mos keluvchi ustunlardan tuzilgan determinant noldan farqli bo'lishi shart ($\Delta_{\text{bazis}} \neq 0$).
2. **Erkin o'zgaruvchilar:** Qolgan $n - r$ ta o'zgaruvchi. Ular ixtiyoriy haqiqiy qiymatlarni qabul qilishi mumkin.
3. **Bazisli yechim:** Barcha erkin o'zgaruvchilarga $0$ (nol) qiymat berilganda bazis o'zgaruvchilar uchun hosil bo'ladigan yagona yechim vektori:
   $$
   X_{\text{bazis}} = (x_1, x_2, \dots, x_r, 0, 0, \dots, 0)^T
   $$
4. **Tayanch yechim (Boshlang'ich reja):** Agar bazisli yechimning **barcha komponentlari nomanfiy bo'lsa**, ya'ni har bir $x_i \ge 0$ shartni qanoatlantirsa, bunday yechim **TAYANCH YECHIM** deyiladi.
   - Agar barcha bazis o'zgaruvchilar qat'iy musbat bo'lsa ($x_i > 0$) — *aynigan bo'lmagan tayanch yechim*;
   - Agar bazis o'zgaruvchilar orasida kamida bittasi nolga teng bo'lib qolsa ($x_i = 0$) — *aynigan tayanch yechim* deyiladi.

### Mumkin bo'lgan maksimal bazislar soni:
$n$ ta o'zgaruvchidan $m$ tasini tanlash kombinatorikaning guruhlash formulasi orqali aniqlanadi:
$$
N \le C_n^m = \frac{n!}{m!(n - m)!}
$$
*(Agar ba'zi kombinatsiyalarda determinant $\Delta = 0$ bo'lsa, haqiqiy bazislar soni $C_n^m$ dan kamroq bo'ladi).*

---

## 2. Qadamma-qadam to'liq tahlil qilingan amaliy misol

**Masala:** Quyidagi chiziqli tenglamalar sistemasining barcha bazislarini aniqlang, har bir bazis bo'yicha bazis yechimlarni toping va ularning qaysilari tayanch yechim ekanini ko'rsating:

$$
\begin{cases}
x_1 + 2x_2 - x_3 + x_4 = 4 \\
2x_1 - x_2 + 3x_3 - x_4 = 3
\end{cases}
$$

### Yechish:

Bu yerda tenglamalar soni $m = 2$, noma'lumlar soni $n = 4$.
Maksimal mumkin bo'lgan bazislar soni:
$$
C_4^2 = \frac{4!}{2! \cdot 2!} = \frac{24}{4} = 6 \text{ ta}
$$

Noma'lumlarning barcha 6 ta juftligini birma-bir tekshiramiz:

---

#### 1-juftlik: $(x_1, x_2)$ bazis, erkin $x_3 = 0, x_4 = 0$

Bazis matritsasining determinanti:
$$
\Delta_{12} = \begin{vmatrix} 1 & 2 \\ 2 & -1 \end{vmatrix} = (1)(-1) - (2)(2) = -1 - 4 = -5 \neq 0
$$
Determinant nol emas, demak bu haqiqiy bazis! Sistemani yechamiz:
$$
\begin{cases} x_1 + 2x_2 = 4 \\ 2x_1 - x_2 = 3 \end{cases}
$$
1-tenglamaga 2-tenglamaning ikkilanganini qo'shamiz:
$$
x_1 + 4x_1 + 2x_2 - 2x_2 = 4 + 6 \implies 5x_1 = 10 \implies x_1 = 2
$$
$x_2$ ni topamiz:
$$
2(2) - x_2 = 3 \implies x_2 = 1
$$
Hosil bo'lgan 1-bazis yechim:
$$
X^{(1)} = (2; \; 1; \; 0; \; 0)
$$
Hamma komponentlar musbat ($2 \ge 0, 1 \ge 0, 0 \ge 0, 0 \ge 0$).
**Xulosa:** $X^{(1)}$ — **TAYANCH YECHIM!**

---

#### 2-juftlik: $(x_1, x_3)$ bazis, erkin $x_2 = 0, x_4 = 0$

Bazis determinanti:
$$
\Delta_{13} = \begin{vmatrix} 1 & -1 \\ 2 & 3 \end{vmatrix} = 3 - (-2) = 5 \neq 0
$$
Sistemani yechamiz:
$$
\begin{cases} x_1 - x_3 = 4 \\ 2x_1 + 3x_3 = 3 \end{cases}
$$
1-tenglamadan $x_1 = x_3 + 4$. 2-tenglamaga qo'yamiz:
$$
2(x_3 + 4) + 3x_3 = 3 \implies 5x_3 + 8 = 3 \implies 5x_3 = -5 \implies x_3 = -1
$$
$$
x_1 = -1 + 4 = 3
$$
Hosil bo'lgan 2-bazis yechim:
$$
X^{(2)} = (3; \; 0; \; -1; \; 0)
$$
Bu yerda $x_3 = -1 < 0$ (manfiy!).
**Xulosa:** $X^{(2)}$ — bazis yechim, lekin **TAYANCH YECHIM EMAS!**

---

#### 3-juftlik: $(x_1, x_4)$ bazis, erkin $x_2 = 0, x_3 = 0$

Bazis determinanti:
$$
\Delta_{14} = \begin{vmatrix} 1 & 1 \\ 2 & -1 \end{vmatrix} = -1 - 2 = -3 \neq 0
$$
Sistemani yechamiz:
$$
\begin{cases} x_1 + x_4 = 4 \\ 2x_1 - x_4 = 3 \end{cases}
$$
Tenglamalarni qo'shamiz:
$$
3x_1 = 7 \implies x_1 = \frac{7}{3}
$$
$$
x_4 = 4 - \frac{7}{3} = \frac{5}{3}
$$
Hosil bo'lgan 3-bazis yechim:
$$
X^{(3)} = \left(\frac{7}{3}; \; 0; \; 0; \; \frac{5}{3}\right)
$$
Barcha komponentlar nomanfiy ($\frac{7}{3} \ge 0, \frac{5}{3} \ge 0$).
**Xulosa:** $X^{(3)}$ — **TAYANCH YECHIM!**

---

#### 4-juftlik: $(x_2, x_3)$ bazis, erkin $x_1 = 0, x_4 = 0$

Bazis determinanti:
$$
\Delta_{23} = \begin{vmatrix} 2 & -1 \\ -1 & 3 \end{vmatrix} = 6 - 1 = 5 \neq 0
$$
Sistemani yechamiz:
$$
\begin{cases} 2x_2 - x_3 = 4 \\ -x_2 + 3x_3 = 3 \end{cases}
$$
2-tenglamani 2 ga ko'paytirib qo'shamiz:
$$
5x_3 = 4 + 6 = 10 \implies x_3 = 2
$$
$$
2x_2 - 2 = 4 \implies 2x_2 = 6 \implies x_2 = 3
$$
Hosil bo'lgan 4-bazis yechim:
$$
X^{(4)} = (0; \; 3; \; 2; \; 0)
$$
Barcha komponentlar nomanfiy ($3 \ge 0, 2 \ge 0$).
**Xulosa:** $X^{(4)}$ — **TAYANCH YECHIM!**

---

#### 5-juftlik: $(x_2, x_4)$ bazis, erkin $x_1 = 0, x_3 = 0$

Bazis determinanti:
$$
\Delta_{24} = \begin{vmatrix} 2 & 1 \\ -1 & -1 \end{vmatrix} = -2 - (-1) = -1 \neq 0
$$
Sistemani yechamiz:
$$
\begin{cases} 2x_2 + x_4 = 4 \\ -x_2 - x_4 = 3 \end{cases}
$$
Tenglamalarni qo'shamiz:
$$
x_2 = 7
$$
$$
-7 - x_4 = 3 \implies x_4 = -10
$$
Hosil bo'lgan 5-bazis yechim:
$$
X^{(5)} = (0; \; 7; \; 0; \; -10)
$$
Bu yerda $x_4 = -10 < 0$.
**Xulosa:** $X^{(5)}$ — bazis yechim, lekin **TAYANCH YECHIM EMAS!**

---

#### 6-juftlik: $(x_3, x_4)$ bazis, erkin $x_1 = 0, x_2 = 0$

Bazis determinanti:
$$
\Delta_{34} = \begin{vmatrix} -1 & 1 \\ 3 & -1 \end{vmatrix} = 1 - 3 = -2 \neq 0
$$
Sistemani yechamiz:
$$
\begin{cases} -x_3 + x_4 = 4 \\ 3x_3 - x_4 = 3 \end{cases}
$$
Tenglamalarni qo'shamiz:
$$
2x_3 = 7 \implies x_3 = \frac{7}{2} = 3.5
$$
$$
x_4 = 4 + 3.5 = 7.5 = \frac{15}{2}
$$
Hosil bo'lgan 6-bazis yechim:
$$
X^{(6)} = \left(0; \; 0; \; \frac{7}{2}; \; \frac{15}{2}\right)
$$
Barcha komponentlar nomanfiy.
**Xulosa:** $X^{(6)}$ — **TAYANCH YECHIM!**

---

### Yig'ma natijalar jadvali

| T/r | Bazis o'zgaruvchilar | $\Delta$ | Bazisli yechim $X$ | Yechim turi |
|---|---|---|---|---|
| 1 | $(x_1, x_2)$ | $-5 \neq 0$ | $(2; \; 1; \; 0; \; 0)$ | **Tayanch yechim** |
| 2 | $(x_1, x_3)$ | $5 \neq 0$ | $(3; \; 0; \; -1; \; 0)$ | Oddiy bazis yechim ($x_3 < 0$) |
| 3 | $(x_1, x_4)$ | $-3 \neq 0$ | $(\frac{7}{3}; \; 0; \; 0; \; \frac{5}{3})$ | **Tayanch yechim** |
| 4 | $(x_2, x_3)$ | $5 \neq 0$ | $(0; \; 3; \; 2; \; 0)$ | **Tayanch yechim** |
| 5 | $(x_2, x_4)$ | $-1 \neq 0$ | $(0; \; 7; \; 0; \; -10)$ | Oddiy bazis yechim ($x_4 < 0$) |
| 6 | $(x_3, x_4)$ | $-2 \neq 0$ | $(0; \; 0; \; \frac{7}{2}; \; \frac{15}{2})$ | **Tayanch yechim** |

Jami 6 ta bazis yechim mavjud bo'lib, ulardan **4 tasi tayanch yechimdir**. Chiziqli dasturlash masalasida optimal yechim aynan mana shu 4 ta nuqtadan birida bo'ladi!

---

## 3. Talabalar eng ko'p yo'l qo'yadigan xatolar

> [!WARNING] Imtihon va nazoratlarda ehtiyot bo'ling!
> 1. **Determinant nol bo'lgan juftlikni bazis deb olish:** Agar tanlangan ustunlarning determinanti $\Delta = 0$ bo'lsa, bu o'zgaruvchilar chiziqli bog'liq bo'ladi va ularni bazis deb hisoblab bo'lmaydi (sistema yechimga ega bo'lmaydi yoki cheksiz ko'p yechimga aylanadi).
> 2. **Tayanch yechim shartini unutish:** Ko'pchilik talabalar ixtiyoriy bazis yechimni tayanch yechim deb yozishadi. Eslab qoling: kamida bitta komponent manfiy ($x_i < 0$) bo'lsa, u **hech qachon tayanch yechim bo'la olmaydi**.
> 3. **Erkin o'zgaruvchilarni adashtirish:** Yechim vektorini yozishda erkin o'zgaruvchilar o'rniga nol qo'yishni unutish yoki ularning indekslar tartibini adashtirib yuborish.

---

## 4. Mustaqil yechish uchun amaliy mashqlar

Quyidagi sistemalarning barcha bazis va tayanch yechimlarini toping:

1. $\begin{cases} x_1 + 2x_2 + x_3 = 5 \\ 3x_1 + x_2 - x_3 = 2 \end{cases}$
   - *Javob:* 
     * $(x_1, x_2)$ bazis: $\Delta = -5 \implies X^{(1)} = (-\frac{1}{5}; \; \frac{13}{5}; \; 0)$ (Oddiy bazis);
     * $(x_1, x_3)$ bazis: $\Delta = -4 \implies X^{(2)} = (\frac{7}{4}; \; 0; \; \frac{13}{4})$ (**Tayanch yechim**);
     * $(x_2, x_3)$ bazis: $\Delta = -3 \implies X^{(3)} = (0; \; \frac{7}{3}; \; \frac{1}{3})$ (**Tayanch yechim**).

2. $\begin{cases} 2x_1 + x_2 - x_3 = 3 \\ x_1 - x_2 + 2x_3 = 3 \end{cases}$
   - *Javob:*
     * $(x_1, x_2)$ bazis: $X^{(1)} = (2; \; -1; \; 0)$ (Oddiy bazis);
     * $(x_1, x_3)$ bazis: $X^{(2)} = (1.8; \; 0; \; 0.6)$ (**Tayanch yechim**);
     * $(x_2, x_3)$ bazis: $X^{(3)} = (0; \; 9; \; 6)$ (**Tayanch yechim**).
