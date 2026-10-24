---
title: "Modul (absolyut qiymat) qatnashgan tenglama va tengsizliklarni yechish usullari"
module: "maktab-kursi"
order: 7
description: "Sonning moduli va geometrik ma'nosi, |f(x)| = g(x), |f(x)| = |g(x)|, ichma-ich modullar, intervallar (oraliqlar) usuli va modulli tengsizliklar."
---

Oliy matematikada limit ta'rifi ($\varepsilon$-$\delta$ tili), yaqinlashish radiusi, funksiyaning uzluksizligi va xatoliklar nazariyasi to'laligicha **absolyut qiymat (modul)** tushunchasiga tayanadi. Modul qatnashgan tenglama va tengsizliklarni teng kuchli almashtirishlar yordamida xatosiz yechish har bir talaba uchun fundamental ko'nikmadir.

---

## 1. Sonning moduli: Algebraik ta'rifi va geometrik ma'nosi

**Algebraik ta'rif:** Haqiqiy $x \in \mathbb{R}$ sonining **moduli** (yoki **absolyut qiymati**) deb, $|x|$ bilan belgilanadigan va quyidagicha aniqlanadigan songa aytiladi:

$$|x| = \begin{cases} x, & \text{agar } x \ge 0 \text{ bo'lsa;} \\ -x, & \text{agar } x < 0 \text{ bo'lsa.} \end{cases}$$

**Geometrik ma'nosi:** Sonlar o'qida $|x|$ soni koordinata boshidan ($0$ nuqtadan) $x$ nuqtagacha bo'lgan masofani bildiradi. Ikki $x$ va $a$ nuqtalar orasidagi masofa esa $|x - a|$ ga teng:

$$\rho(x, a) = |x - a|$$

### 1.1. Modulning asosiy xossalari

Ixtiyoriy $x, y \in \mathbb{R}$ uchun quyidagi munosabatlar o'rinli:
1. **Manfiymaslik:** $|x| \ge 0$, bunda $|x| = 0 \iff x = 0$.
2. **Qarama-qarshi sonlar moduli:** $|-x| = |x|$ va $|x - y| = |y - x|$.
3. **Kvadrat va ildiz bilan bog'lanishi:**
   $$|x|^2 = x^2 \qquad \text{va} \qquad \sqrt{x^2} = |x|$$
4. **Ko'paytma va bo'linma moduli:**
   $$|x \cdot y| = |x| \cdot |y|, \qquad \left|\frac{x}{y}\right| = \frac{|x|}{|y|} \quad (y \neq 0)$$
5. **Uchburchak tengsizligi (muhim!):**
   $$|x| - |y| \le |x \pm y| \le |x| + |y|$$

> [!IMPORTANT]
> **Uchburchak tengsizligida tenglik sharti:**
> - $|x + y| = |x| + |y| \iff x \cdot y \ge 0$ (sonlar bir xil ishorali yoki biri nolga teng);
> - $|x - y| = |x| + |y| \iff x \cdot y \le 0$ (sonlar qarama-qarshi ishorali yoki biri nolga teng).

---

## 2. Modul qatnashgan asosiy tenglamalar

### 2.1. $|f(x)| = a$ ko'rinishidagi eng sodda tenglama

Bu yerda $a \in \mathbb{R}$ — o'zgarmas son:
- Agar $a < 0$ bo'lsa, tenglama **yechimga ega emas** ($x \in \varnothing$).
- Agar $a = 0$ bo'lsa, $f(x) = 0$.
- Agar $a > 0$ bo'lsa, tenglama ikkita tenglamalar to'plamiga (birlashmasiga) teng kuchli:

$$|f(x)| = a \iff \left[ \begin{array}{l} f(x) = a \\ f(x) = -a \end{array} \right.$$

### 2.2. $|f(x)| = g(x)$ ko'rinishidagi tenglama

Bu tenglamani yechishda ikki xil yondashuv mavjud. Eng qulayi — o'ng tarafning manfiy emasligini ($g(x) \ge 0$) shart qilib olishdir:

$$|f(x)| = g(x) \iff \begin{cases} g(x) \ge 0 \\ \left[ \begin{array}{l} f(x) = g(x) \\ f(x) = -g(x) \end{array} \right. \end{cases}$$

> [!TIP]
> Agar $g(x)$ ifoda sodda, $f(x)$ esa murakkab bo'lsa, yuqoridagi aralash sistema juda tez yechim beradi. Agar aksincha $f(x)$ sodda bo'lsa, ta'rif bo'yicha modul ichini musbat va manfiy holatlarga ajratish mumkin.

### 2.3. $|f(x)| = |g(x)|$ ko'rinishidagi tenglama

Ikki ifodaning modullari teng bo'lsa, ular yo o'zaro teng, yo bir-biriga qarama-qarshidir (yoki har ikki tomonni kvadratga ko'tarish mumkin: $f^2(x) - g^2(x) = 0$):

$$|f(x)| = |g(x)| \iff (f(x) - g(x))(f(x) + g(x)) = 0 \iff \left[ \begin{array}{l} f(x) = g(x) \\ f(x) = -g(x) \end{array} \right.$$

---

## 3. Bir nechta modulli tenglamalar: Intervallar (oraliqlar) usuli

Tenglamada $|f_1(x)| + |f_2(x)| + \dots + |f_k(x)| = g(x)$ kabi bir nechta modul qatnashsa, **intervallar (oraliqlar) usuli** qo'llaniladi.

**Algoritm:**
1. Barcha modul ostidagi ifodalarning nolga aylanish nuqtalari (**kritik nuqtalar**) topiladi: $f_i(x) = 0$.
2. Topilgan nuqtalar sonlar o'qiga joylashtirilib, aniqlanish sohasi bir nechta oraliqlarga (intervallarga) ajratiladi.
3. Har bir oraliqda modul ostidagi ifodalarning ishorasi aniqlanib, modullar tegishli ishora bilan ochiladi va hosil bo'lgan tenglama yechiladi.
4. **Muhim qadam:** Topilgan ildizning aynan ko'rilayotgan oraliqqa tegishli ekanligi tekshiriladi!

### Ichma-ich joylashgan modullar

$||f(x)| - a| = b$ kabi ichma-ich modulli tenglamalar **tashqi moduldan ichki modulga qarab** ketma-ket ochib yechiladi.

---

## 4. Modul qatnashgan tengsizliklar

Modulli tengsizliklarni yechishda teng kuchli tizimlarga o'tish qoidalari quyidagi jadvalda jamlangan:

| Tengsizlik turi | Teng kuchli almashtirish ($a > 0$ da) | Izoh / Umumiy holat |
| :--- | :--- | :--- |
| $\|f(x)\| < a$ | $-a < f(x) < a$ | Agar $a \le 0$ bo'lsa, $x \in \varnothing$ |
| $\|f(x)\| \le g(x)$ | $\begin{cases} f(x) \le g(x) \\ f(x) \ge -g(x) \end{cases}$ | Kesishma (sistema) olinadi |
| $\|f(x)\| > a$ | $\left[ \begin{array}{l} f(x) > a \\ f(x) < -a \end{array} \right.$ | Agar $a < 0$ bo'lsa, barcha $x \in D(f)$ yechim |
| $\|f(x)\| \ge g(x)$ | $\left[ \begin{array}{l} f(x) \ge g(x) \\ f(x) \le -g(x) \end{array} \right.$ | Birlashma (to'plam) olinadi |
| $\|f(x)\| < \|g(x)\|$ | $(f(x) - g(x))(f(x) + g(x)) < 0$ | Kvadratga ko'tarib ko'paytuvchilarga ajratish |

> [!WARNING]
> $|f(x)| > g(x)$ tengsizlikni yechishda $g(x) \ge 0$ shartini qo'yishga hojat yo'q! Agar $g(x) < 0$ bo'lsa, $f(x) > g(x)$ yoki $f(x) < -g(x)$ shartlaridan kamida bittasi avtomatik ravishda bajariladi va barcha yechimlar birlashmada saqlanib qoladi.

---

## 5. Namuna misollar va yechish usullari

### 1-misol. $|f(x)| = g(x)$ turidagi tenglama
**Masala:** Tenglamani yeching: $|x^2 - 5x + 4| = 2x - 2$.

**Yechish:**
Teng kuchli sistemaga o'tamiz:
$$\begin{cases} 2x - 2 \ge 0 \\ \left[ \begin{array}{l} x^2 - 5x + 4 = 2x - 2 \\ x^2 - 5x + 4 = -(2x - 2) \end{array} \right. \end{cases} \iff \begin{cases} x \ge 1 \\ \left[ \begin{array}{l} x^2 - 7x + 6 = 0 \\ x^2 - 3x + 2 = 0 \end{array} \right. \end{cases}$$

1. Birinchi kvadrat tenglama: $x^2 - 7x + 6 = 0 \implies x_1 = 1, \; x_2 = 6$.
2. Ikkinchi kvadrat tenglama: $x^2 - 3x + 2 = 0 \implies x_3 = 1, \; x_4 = 2$.
3. Barcha topilgan ildizlar ($1, 2, 6$) $x \ge 1$ shartni qanoatlantiradi.

**Javob:** $x \in \{1; 2; 6\}$.

---

### 2-misol. Intervallar usuli va geometrik yondashuv
**Masala:** Tenglamani ikki xil usulda yeching: $|x - 1| + |x + 3| = 6$.

**1-usul (Intervallar usuli):**
Modul ostidagi ifodalarni nolga tenglaymiz: $x - 1 = 0 \implies x = 1$ va $x + 3 = 0 \implies x = -3$.
Sonlar o'qi uchta oraliqqa bo'linadi:
1. **$x < -3$ oraliqda:** Har ikki modul manfiy ishora bilan ochiladi:
   $$-(x - 1) - (x + 3) = 6 \implies -2x - 2 = 6 \implies -2x = 8 \implies x = -4$$
   $-4 < -3$ bo'lgani uchun $x = -4$ ildiz bo'ladi.
2. **$-3 \le x \le 1$ oraliqda:** Birinchi modul manfiy, ikkinchisi musbat:
   $$-(x - 1) + (x + 3) = 6 \implies 4 = 6 \quad (\text{ziddiyat, yechim yo'q})$$
3. **$x > 1$ oraliqda:** Har ikki modul musbat ishora bilan ochiladi:
   $$(x - 1) + (x + 3) = 6 \implies 2x + 2 = 6 \implies 2x = 4 \implies x = 2$$
   $2 > 1$ bo'lgani uchun $x = 2$ ildiz bo'ladi.

**2-usul (Geometrik talqin):**
$|x - 1| + |x + 3|$ ifoda sonlar o'qida $x$ nuqtadan $1$ va $-3$ nuqtalargacha bo'lgan masofalar yig'indisini bildiradi. $-3$ va $1$ orasidagi masofa $1 - (-3) = 4$ ga teng. Masofalar yig'indisi $6$ bo'lishi uchun $x$ nuqta kesma tashqarisida, chetki nuqtalardan $\frac{6 - 4}{2} = 1$ birlik uzoqlikda yotishi kerak:
- O'ng tomonda: $x = 1 + 1 = 2$;
- Chap tomonda: $x = -3 - 1 = -4$.

**Javob:** $x_1 = -4, \; x_2 = 2$.

---

### 3-misol. Ikki modulli kasr-ratsional tengsizlik
**Masala:** Tengsizlikni yeching: $\frac{|2x - 1| - |x + 2|}{x - 3} \le 0$.

**Yechish:**
Suratda $|f(x)| - |g(x)|$ ko'rinishidagi ifoda turibdi. Ma'lumki, $|A| - |B|$ ifodaning ishorasi har doim $A^2 - B^2 = (A - B)(A + B)$ ifodaning ishorasiga teng kuchlidir (**ratsionallashtirish usuli**):
$$\frac{(2x - 1)^2 - (x + 2)^2}{x - 3} \le 0 \iff \frac{((2x - 1) - (x + 2))((2x - 1) + (x + 2))}{x - 3} \le 0$$
$$\frac{(x - 3)(3x + 1)}{x - 3} \le 0$$
Aniqlanish sohasi: $x \neq 3$. Ushbu shartda $(x - 3)$ ga qisqartiramiz:
$$\begin{cases} 3x + 1 \le 0 \\ x \neq 3 \end{cases} \implies x \le -\frac{1}{3}$$

**Javob:** $x \in \left(-\infty; -\frac{1}{3}\right]$.

---

## 6. O'z-o'zini tekshirish savollari

1. Nima uchun $\sqrt{(x - 5)^2} = x - 5$ yozuvi umumiy holda xato hisoblanadi? U qachon to'g'ri bo'ladi?
2. $|2x - 3| + |5 - 2x| = 2$ tenglamani intervallarga ajratmasdan, uchburchak tengsizligi xossasi yordamida bir satrda qanday yechish mumkin?
3. $|f(x)| + |g(x)| \le 0$ tengsizlik qanday sistemaga teng kuchli?

---

## 7. Mustaqil yechish uchun masalalar

1. **1-masala:** Ichma-ich modulli tenglamani yeching: $||2x - 3| - 5| = 2$.
2. **2-masala:** Tenglamani yeching: $|x^2 - 4x| + |x - 4| = 0$.
3. **3-masala:** Tengsizlikni yeching: $|x^2 - 3x - 4| > 2x + 2$.
4. **4-masala:** Tengsizlikni yeching: $|2x + 1| - |x - 3| \ge 4$.

---

### Javoblar va ko'rsatmalar

- **O'z-o'zini tekshirishga izoh:** 2) $(2x - 3) + (5 - 2x) = 2$ bo'lgani uchun $|A| + |B| = |A + B| \iff A \cdot B \ge 0$, ya'ni $(2x - 3)(5 - 2x) \ge 0 \implies x \in [1,5; \; 2,5]$. 3) Faqat $f(x) = 0$ va $g(x) = 0$ sistemaga.
- **1-masala:** $x \in \{-2; 0; 3; 5\}$. *(Ko'rsatma: Avval $|2x - 3| - 5 = \pm 2 \implies |2x - 3| = 7$ yoki $|2x - 3| = 3$ ga ajrating.)*
- **2-masala:** $x = 4$. *(Ko'rsatma: Har ikki modul bir vaqtda nolga aylanishi shart.)*
- **3-masala:** $x \in (-\infty; -1) \cup (-1; 2) \cup (6; +\infty)$. *(Ko'rsatma: $x^2 - 3x - 4 > 2x + 2 \implies x \in (-\infty; -1) \cup (6; +\infty)$ va $x^2 - 3x - 4 < -2x - 2 \implies x^2 - x - 2 < 0 \implies x \in (-1; 2)$ birlashmasini oling).*
- **4-masala:** $x \in (-\infty; -8] \cup \left[\frac{2}{3}; +\infty\right)$.
