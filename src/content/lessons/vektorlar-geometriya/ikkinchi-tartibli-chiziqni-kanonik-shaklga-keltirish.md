---
title: "Ikkinchi tartibli chiziqlarni kanonik ko'rinishga keltirish: O'qlarni burish va Invariantlar usuli"
module: "vektorlar-geometriya"
order: 11
duration: "32 daqiqa"
category: "Analitik geometriya"
difficulty: "Qiyin"
description: "Umumiy 2-tartibli chiziq tenglamasi (Ax^2 + 2Bxy + Cy^2 + 2Dx + 2Ey + F = 0), koordinata o'qlarini burish (cot 2alpha = (A-C)/2B), ortogonal invariantlar (I_1, I_2, I_3) va to'liq yechilgan misollar."
---

## Kirish: Qiyshaygan konus kesimlari muammosi

Maktab geometriyasi va analitik geometriya asoslaridan biz ellips ($\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$), giperbola ($\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$) va parabola ($y^2 = 2px$) tenglamalari bilan yaxshi tanishmiz. Ushbu tenglamalar **kanonik (eng sodda)** shaklda yozilgan, chunki ularning simmetriya o'qlari to'g'ridan-to'g'ri koordinata o'qlari ($Ox$va$Oy$) bilan ustma-ust tushadi, markazlari esa koordinata boshida joylashgan.

Ammo amaliyotda, fizikada yoki astronomik hisoblarda ellips yoki giperbola koordinata o'qlariga nisbatan **ixtiyoriy burchakka burilgan** va tekislikning **boshqa bir nuqtasiga ko'chirilgan** holda uchraydi. Natijada tenglamada $xy$ ko'paytmasi paydo bo'ladi va barcha hadlar aralashib ketadi.

Ushbu darsning maqsadi — ixtiyoriy ko'rinishdagi ikkinchi tartibli egri chiziq berilganda, uning geometrik tabiatini aniqlash va koordinata sistemasini **burish (rotation)** hamda **parallel ko'chirish (translation)** orqali uni kanonik ko'rinishga keltirishni o'rganishdir.

---

## 1. Ikkinchi tartibli chiziqning umumiy tenglamasi

Tekislikdagi ixtiyoriy 2-tartibli algebraik egri chiziqning umumiy tenglamasi quyidagi ko'rinishga ega:

$$
Ax^2 + 2Bxy + Cy^2 + 2Dx + 2Ey + F = 0
$$

bu yerda:
- $A, B, C$ koeffitsiyentlar bir vaqtda nolga teng emas ($A^2 + B^2 + C^2 \neq 0$);
- $2B$—$xy$aralash ko'paytmasi oldidagi koeffitsiyent (qulaylik uchun$2B$ deb belgilanadi);
- $2D, 2E$ — chiziqli hadlar koeffitsiyentlari;
- $F$ — ozod had.

Matritsa ko'rinishida ushbu tenglama kvadratik forma va chiziqli qism yig'indisi sifatida ifodalanadi:

$$
\begin{pmatrix} x & y \end{pmatrix} \begin{pmatrix} A & B \\ B & C \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} + 2 \begin{pmatrix} D & E \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} + F = 0
$$

---

## 2. 1-holat: $B = 0$ ($xy$ had qatnashmagan holat)

Agar tenglamada $xy$ had qatnashmagan bo'lsa ($B = 0$), egri chiziqning simmetriya o'qlari koordinata o'qlariga **parallel** bo'ladi. Bunday tenglamani kanonik ko'rinishga keltirish uchun faqat **to'la kvadratlarni ajratish** (ya'ni koordinata o'qlarini parallel ko'chirish) kifoya qiladi.

### Misol:
Quyidagi tenglamaning turini aniqlang va kanonik shaklga keltiring:

$$
4x^2 + 9y^2 - 16x + 54y + 61 = 0
$$

**Yechish:**
1. $x$va$y$ bo'yicha hadlarni guruhlaymiz:
   
$$
   4(x^2 - 4x) + 9(y^2 + 6y) + 61 = 0
   
$$

2. Qavslar ichida to'la kvadratlarni ajratamiz:
   
$$
   x^2 - 4x = (x - 2)^2 - 4
   
$$
   
$$
   y^2 + 6y = (y + 3)^2 - 9
   
$$

3. O'rniga qo'yamiz:
   
$$
   4\left[(x - 2)^2 - 4\right] + 9\left[(y + 3)^2 - 9\right] + 61 = 0
   
$$
   
$$
   4(x - 2)^2 - 16 + 9(y + 3)^2 - 81 + 61 = 0
   
$$
   
$$
   4(x - 2)^2 + 9(y + 3)^2 - 36 = 0 \implies 4(x - 2)^2 + 9(y + 3)^2 = 36
   
$$

4. Ikkala tomonni $36$ ga bo'lamiz:
   
$$
   \frac{(x - 2)^2}{9} + \frac{(y + 3)^2}{4} = 1
   
$$

Yangi o'zgaruvchilarni kiritamiz: $X = x - 2$, $Y = y + 3$ (parallel ko'chirish):

$$
\frac{X^2}{3^2} + \frac{Y^2}{2^2} = 1
$$

**Xulosa:** Bu markazi $C(2, -3)$nuqtada, yarim o'qlari$a = 3$va$b = 2$ bo'lgan **ellips**dir.

---

## 3. 2-holat: $B \neq 0$ ($xy$had qatnashgan holat — o'qlarni$\alpha$ burchakka burish)

Agar $B \neq 0$bo'lsa, chiziq tekislikda ma'lum bir$\alpha$burchakka **burilgan** bo'ladi. Uni kanonik holatga keltirish uchun avval koordinata sistemasini$\alpha$ burchakka burish, so'ngra markazga parallel ko'chirish lozim.

### Koordinata o'qlarini burish formulalari

Koordinata o'qlari $\alpha$burchakka burilganda, eski$(x, y)$va yangi$(x', y')$ koordinatalar quyidagi munosabatda bo'ladi:

$$
\begin{cases}
x = x' \cos\alpha - y' \sin\alpha \\
y = x' \sin\alpha + y' \cos\alpha
\end{cases}
$$

Ushbu ifodalarni umumiy tenglamaga qo'ysak, yangi koordinatalar sistemasida $x'y'$ aralash ko'paytmasi oldidagi koeffitsiyent quyidagicha bo'ladi:

$$
2B' = 2B(\cos^2\alpha - \sin^2\alpha) - 2(A - C)\sin\alpha\cos\alpha = 2B\cos 2\alpha - (A - C)\sin 2\alpha
$$

Yangi sistemada $x'y'$hadi yo'qolishi uchun$2B' = 0$ bo'lishi shart:

$$
2B\cos 2\alpha - (A - C)\sin 2\alpha = 0 \implies \operatorname{ctg} 2\alpha = \frac{A - C}{2B}
$$

yoki tangens orqali:

$$
\operatorname{tg} 2\alpha = \frac{2B}{A - C} \quad (A \neq C)
$$

> **Muhim xususiy holat:**
> Agar $A = C$bo'lsa,$\operatorname{ctg} 2\alpha = 0 \implies 2\alpha = 90^\circ \implies \alpha = 45^\circ$. Ya'ni o'qlarni doimo $45^\circ$ga burish kifoya!$\operatorname{ctg} 2\alpha$ma'lum bo'lgach, trigonometrik ayniyatlar yordamida$\cos 2\alpha$, so'ngra $\cos\alpha$va$\sin\alpha$ topiladi:

$$
\cos 2\alpha = \frac{\operatorname{ctg} 2\alpha}{\pm \sqrt{1 + \operatorname{ctg}^2 2\alpha}}
$$

$$
\cos\alpha = \sqrt{\frac{1 + \cos 2\alpha}{2}}, \quad \sin\alpha = \sqrt{\frac{1 - \cos 2\alpha}{2}} \quad \left(0 < \alpha < \frac{\pi}{2}\right)
$$

---

## 4. Ortogonal Invariantlar usuli (Eng tezkor va kuchli usul)

O'qlarni to'g'ridan-to'g'ri burish hisob-kitob jihatdan ancha uzun va murakkab algebraik amallarni talab qiladi. Oliy matematika imtihonlarida eng ko'p qo'llaniladigan va vaqtni tejaydigan usul — bu **ortogonal invariantlar usuli**dir.

### 3 ta asosiy invariant

Koordinatalar sistemasini ixtiyoriy burchakka burishda va parallel ko'chirishda qiymati **o'zgarmas (invariant)** qoladigan 3 ta kattalik mavjud:

1. **Birinchi invariant ($I_1$):**
   
$$
   I_1 = A + C \quad (\text{kvadratik forma matritsasining izi})
   
$$

2. **Ikkinchi invariant ($I_2$):**
   
$$
   I_2 = \begin{vmatrix} A & B \\ B & C \end{vmatrix} = AC - B^2
   
$$

3. **Uchinchi invariant ($I_3$ — to'liq diskriminant):**
   
$$
   I_3 = \begin{vmatrix} A & B & D \\ B & C & E \\ D & E & F \end{vmatrix}
   
$$

---

### Invariantlar bo'yicha chiziq turini aniqlash jadvali

| $I_2$ishorasi | Chiziq tipi |$I_3$va$I_1$ sharti | Geometrik shakl |
|---|---|---|---|
| **$I_2 > 0$** | **Elliptik** | $I_1 \cdot I_3 < 0$ | **Haqiqiy ellips** (aylana) |
| | | $I_1 \cdot I_3 > 0$ | **Mavhum ellips** (nuqtalar to'plami bo'sh) |
| | | $I_3 = 0$ | **Bitta nuqta** (kesishuvchi mavhum to'g'ri chiziqlar) |
| **$I_2 < 0$** | **Giperbolik** | $I_3 \neq 0$ | **Giperbola** |
| | | $I_3 = 0$ | **Kesishuvchi ikkita to'g'ri chiziq** |
| **$I_2 = 0$** | **Parabolik** | $I_3 \neq 0$ | **Parabola** |
| | | $I_3 = 0$ | **Ikkita parallel to'g'ri chiziq** (yoki ustma-ust) |

---

### Markazli chiziqlarni ($I_2 \neq 0$) kanonik shaklga keltirish formulasi

Agar $I_2 \neq 0$ bo'lsa (ellips yoki giperbola), egri chiziq **yagona simmetriya markaziga** ega bo'ladi.
Ushbu chiziqning kanonik tenglamasi quyidagi universal formulaga ega:

$$
\lambda_1 X^2 + \lambda_2 Y^2 + \frac{I_3}{I_2} = 0
$$

bu yerda $\lambda_1$va$\lambda_2$ sonlari quyidagi **xarakteristik tenglamaning** ildizlaridir:

$$
\lambda^2 - I_1 \lambda + I_2 = 0
$$

### Chiziq markazi $(x_0, y_0)$ ni topish:

Egri chiziqning markazi $F(x, y) = 0$ funksiyasining xususiy hosilalarini nolga tenglashtirish orqali oson topiladi:

$$
\begin{cases}
\frac{1}{2} F'_x = Ax + By + D = 0 \\
\frac{1}{2} F'_y = Bx + Cy + E = 0
\end{cases}
$$

Ushbu 2 noma'lumli chiziqli tenglamalar sistemasining yechimi $(x_0, y_0)$ — egri chiziqning yangi koordinata boshiga aylanuvchi **simmetriya markazidir**.

---

## 5. To'liq yechilgan katta amaliy misol

> **Masala:**
> Berilgan ikkinchi tartibli chiziq tenglamasining turini aniqlang, markazini toping va uni kanonik ko'rinishga keltiring:
> 
> $$
> 5x^2 + 4xy + 8y^2 - 32x - 56y + 80 = 0
> $$

---

### Yechish (1-usul: Ortogonal invariantlar usuli)

#### 1-qadam: Koeffitsiyentlarni aniqlaymiz
Umumiy tenglama $Ax^2 + 2Bxy + Cy^2 + 2Dx + 2Ey + F = 0$ bilan taqqoslaymiz:
- $A = 5$-$2B = 4 \implies B = 2$-$C = 8$-$2D = -32 \implies D = -16$-$2E = -56 \implies E = -28$-$F = 80$

#### 2-qadam: Invariantlarni hisoblaymiz
1. Birinchi invariant:
   
$$
   I_1 = A + C = 5 + 8 = 13
   
$$

2. Ikkinchi invariant:
   
$$
   I_2 = AC - B^2 = 5 \cdot 8 - 2^2 = 40 - 4 = 36
   
$$
   Chunki $I_2 = 36 > 0$, egri chiziq **elliptik tipga** tegishli!

3. Uchinchi invariant ($I_3$):
   
$$
   I_3 = \begin{vmatrix} 5 & 2 & -16 \\ 2 & 8 & -28 \\ -16 & -28 & 80 \end{vmatrix}
   
$$
   Ushbu $3 \times 3$ determinantni hisoblaymiz:
   
$$
   I_3 = 5 \cdot \begin{vmatrix} 8 & -28 \\ -28 & 80 \end{vmatrix} - 2 \cdot \begin{vmatrix} 2 & -28 \\ -16 & 80 \end{vmatrix} - 16 \cdot \begin{vmatrix} 2 & 8 \\ -16 & -28 \end{vmatrix}
   
$$
   - $8 \cdot 80 - (-28)^2 = 640 - 784 = -144$-$2 \cdot 80 - (-28)(-16) = 160 - 448 = -288$-$2(-28) - 8(-16) = -56 + 128 = 72$
   
   O'rniga qo'yamiz:
   
$$
   I_3 = 5(-144) - 2(-288) - 16(72) = -720 + 576 - 1152 = -1296
   
$$
   
$$
   I_1 \cdot I_3 = 13 \cdot (-1296) < 0 \implies \textbf{Haqiqiy ellips!}
   
$$

#### 3-qadam: Xarakteristik tenglama va xos sonlar
Xarakteristik tenglama:

$$
\lambda^2 - I_1 \lambda + I_2 = 0 \implies \lambda^2 - 13\lambda + 36 = 0
$$

Viyet teoremasiga ko'ra:

$$
(\lambda - 9)(\lambda - 4) = 0 \implies \lambda_1 = 9, \quad \lambda_2 = 4
$$

#### 4-qadam: Ozod had va kanonik tenglama
Kanonik tenglamadagi ozod had:

$$
F_{\text{kanonik}} = \frac{I_3}{I_2} = \frac{-1296}{36} = -36
$$

Kanonik tenglama:

$$
\lambda_1 X^2 + \lambda_2 Y^2 + \frac{I_3}{I_2} = 0 \implies 9X^2 + 4Y^2 - 36 = 0
$$

Ikkala tomonni $36$ ga bo'lamiz:

$$
\frac{9X^2}{36} + \frac{4Y^2}{36} = 1 \implies \frac{X^2}{4} + \frac{Y^2}{9} = 1 \quad \text{yoki} \quad \frac{X^2}{2^2} + \frac{Y^2}{3^2} = 1
$$

Bu yarim o'qlari $a = 2$va$b = 3$ bo'lgan **ellips**dir!

#### 5-qadam: Ellips markazini topish
Markaz koordinatalari $(x_0, y_0)$ quyidagi sistemadan aniqlanadi:

$$
\begin{cases}
Ax + By + D = 0 \\
Bx + Cy + E = 0
\end{cases}
\implies
\begin{cases}
5x + 2y - 16 = 0 \\
2x + 8y - 28 = 0
\end{cases}
$$

Ikkinchi tenglamani $2$ga qisqartiramiz:$x + 4y - 14 = 0 \implies x = 14 - 4y$.
Birinchi tenglamaga qo'yamiz:

$$
5(14 - 4y) + 2y - 16 = 0 \implies 70 - 20y + 2y - 16 = 0
$$

$$
54 - 18y = 0 \implies 18y = 54 \implies y_0 = 3
$$

$$
x_0 = 14 - 4(3) = 14 - 12 = 2
$$

Demak, ellips markazi:

$$
C(2, 3)
$$

---

### Yechish (2-usul: O'qlarni burish burchagini topish)

Keling, o'qlarning burilish burchagi $\alpha$ ni ham hisoblab tekshiramiz:

$$
\operatorname{ctg} 2\alpha = \frac{A - C}{2B} = \frac{5 - 8}{2 \cdot 2} = -\frac{3}{4} = -0.75
$$

Trigonometriyadan:

$$
1 + \operatorname{ctg}^2 2\alpha = 1 + \frac{9}{16} = \frac{25}{16} \implies \cos 2\alpha = -\frac{3}{5} = -0.6
$$

Yarim burchak formulalari:

$$
\cos\alpha = \sqrt{\frac{1 + \cos 2\alpha}{2}} = \sqrt{\frac{1 - 0.6}{2}} = \sqrt{0.2} = \frac{1}{\sqrt{5}}
$$

$$
\sin\alpha = \sqrt{\frac{1 - \cos 2\alpha}{2}} = \sqrt{\frac{1 + 0.6}{2}} = \sqrt{0.8} = \frac{2}{\sqrt{5}}
$$

Burilish burchagi:

$$
\operatorname{tg}\alpha = \frac{\sin\alpha}{\cos\alpha} = \frac{\frac{2}{\sqrt{5}}}{\frac{1}{\sqrt{5}}} = 2 \implies \alpha = \operatorname{arctg}(2) \approx 63^\circ 26'
$$

Demak, berilgan ellips markazi $(2, 3)$nuqtada bo'lib, uning katta o'qi gorizontalga nisbatan$\alpha \approx 63.43^\circ$ burchakka burilgan ekan!

---

## 6. Mustaqil mashqlar va javoblar

### 1-masala
Quyidagi ikkinchi tartibli chiziqlarning invariantlarini hisoblang, turini aniqlang va kanonik shaklga keltiring:
1. $x^2 - 4xy + 4y^2 - 2x + 4y - 3 = 0$2.$5x^2 + 6xy + 5y^2 - 32 = 0$3.$7x^2 + 60xy + 32y^2 - 14x - 60y + 7 = 0$

---

### Javoblar va tekshirish

#### 1-masala (1):
- $A = 1, B = -2, C = 4, D = -1, E = 2, F = -3$.
- $I_1 = 1 + 4 = 5$.
- $I_2 = AC - B^2 = 1 \cdot 4 - (-2)^2 = 4 - 4 = 0$ (Parabolik tip).
- $I_3 = \begin{vmatrix} 1 & -2 & -1 \\ -2 & 4 & 2 \\ -1 & 2 & -3 \end{vmatrix}$.
  E'tibor bering: 2-satr 1-satrning $-2$ga ko'paytirilgani! Demak$I_3 = 0$.
- $I_2 = 0$va$I_3 = 0$ bo'lganligi sababli, bu **ikkita parallel to'g'ri chiziq**dir!
- Haqiqatan ham: $(x - 2y)^2 - 2(x - 2y) - 3 = 0 \implies (x - 2y - 3)(x - 2y + 1) = 0$.
  Ikkita parallel to'g'ri chiziq: $x - 2y - 3 = 0$va$x - 2y + 1 = 0$.

#### 1-masala (2):
- $A = 5, B = 3, C = 5, D = 0, E = 0, F = -32$.
- $I_1 = 10, I_2 = 25 - 9 = 16 > 0$(Elliptik tip, markaz$(0, 0)$).
- $A = C$bo'lgani uchun burish burchagi$\alpha = 45^\circ$.
- Xarakteristik tenglama: $\lambda^2 - 10\lambda + 16 = 0 \implies \lambda_1 = 8, \lambda_2 = 2$.
- Kanonik tenglama:
  
$$
  8X^2 + 2Y^2 - 32 = 0 \implies \frac{X^2}{4} + \frac{Y^2}{16} = 1
  
$$
- Yarim o'qlari $a = 2, b = 4$ bo'lgan ellips.

#### 1-masala (3):
- $A = 7, B = 30, C = 32, D = -7, E = -30, F = 7$.
- $I_1 = 39, I_2 = 7 \cdot 32 - 30^2 = 224 - 900 = -676 < 0$ (Giperbolik tip).
- Kanonik ko'rinishga keltirilganda giperbola hosil bo'ladi.
