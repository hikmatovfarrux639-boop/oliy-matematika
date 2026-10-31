---
title: "Sirtga o'tkazilgan urinma tekislik va normal to'g'ri chiziq tenglamalari"
module: "kop-ozgaruvchili-funksiyalar"
order: 7
description: "Oshkor z = f(x,y) va oshkormas F(x,y,z) = 0 ko'rinishda berilgan fazoviy sirtga berilgan M0 nuqtada urinma tekislik va normal tenglamalarini tuzish."
---

Bir o'zgaruvchili $y = f(x)$ funksiya hosilasining geometrik ma'nosi tekislikdagi egri chiziqqa o'tkazilgan urinma to'g'ri chiziqning burchak koeffitsiyenti edi. Ikki o'zgaruvchili $z = f(x, y)$ funksiya (yoki $F(x, y, z) = 0$ tenglama) fazoda sirtni ifodalaydi va uning xususiy hosilalari sirtga berilgan nuqtada o'tkazilgan **urinma tekislik** hamda **normal to'g'ri chiziq** vaziyatini aniqlaydi.

---

## 1. Urinma tekislik va normal to'g'ri chiziq tushunchalari

Faraz qilaylik, fazoda silliq $\sigma$ sirt va uning ustida yotuvchi $M_0(x_0, y_0, z_0)$ nuqta berilgan bo'lsin.

- **Urinma tekislik:** Sirtda yotuvchi va $M_0$ nuqtadan o'tuvchi barcha silliq egri chiziqlarga $M_0$ nuqtada o'tkazilgan urinma to'g'ri chiziqlar yotadigan tekislik sirtning $M_0$ nuqtasidagi **urinma tekisligi** deyiladi.
- **Normal to'g'ri chiziq:** $M_0(x_0, y_0, z_0)$ urinish nuqtasidan o'tib, shu nuqtada o'tkazilgan urinma tekislikka perpendikulyar bo'lgan to'g'ri chiziq sirtning **normali** deyiladi.

> [!NOTE]
> Agar sirtning $M_0$ nuqtasida barcha birinchi tartibli xususiy hosilalar bir vaqtda nolga teng bo'lib qolsa ($F'_x = F'_y = F'_z = 0$), bunday nuqta sirtning **maxsus nuqtasi** (masalan, konus uchi) deyiladi va bu nuqtada yagona urinma tekislik mavjud bo'lmaydi.

---

## 2. Oshkormas ko'rinishda berilgan sirt: $F(x, y, z) = 0$

Faraz qilaylik, sirt $F(x, y, z) = 0$ tenglama bilan berilgan bo'lib, $M_0(x_0, y_0, z_0)$ nuqta shu sirtda yotsin ($F(x_0, y_0, z_0) = 0$). Agar $F(x, y, z)$ funksiya $M_0$ nuqtada differensiallanuvchi va uning gradiyenti nol vektor bo'lmasa:

$$
\vec{N} = \operatorname{grad} F(M_0) = \left( F'_x(M_0), \, F'_y(M_0), \, F'_z(M_0) \right) \neq \vec{0}
$$

u holda $\vec{N}$ vektor urinma tekislikka perpendikulyar (normal vektor) bo'ladi.

### 2.1. Urinma tekislik tenglamasi ($F(x, y, z) = 0$ uchun)

$$
F'_x(M_0)(x - x_0) + F'_y(M_0)(y - y_0) + F'_z(M_0)(z - z_0) = 0
$$

### 2.2. Normal to'g'ri chiziqning kanonik tenglamasi ($F(x, y, z) = 0$ uchun)

$$
\frac{x - x_0}{F'_x(M_0)} = \frac{y - y_0}{F'_y(M_0)} = \frac{z - z_0}{F'_z(M_0)}
$$

Normalning parametrik tenglamasi ($t \in \mathbb{R}$):

$$
\begin{cases}
x = x_0 + F'_x(M_0)\,t \\
y = y_0 + F'_y(M_0)\,t \\
z = z_0 + F'_z(M_0)\,t
\end{cases}
$$

---

## 3. Oshkor ko'rinishda berilgan sirt: $z = f(x, y)$

Agar sirt oshkor ravishda $z = f(x, y)$ tenglama bilan berilgan bo'lsa, uni $F(x, y, z) = f(x, y) - z = 0$ ko'rinishda yozib olamiz. U holda:

$$
F'_x(M_0) = \frac{\partial f(x_0, y_0)}{\partial x} = p, \qquad F'_y(M_0) = \frac{\partial f(x_0, y_0)}{\partial y} = q, \qquad F'_z(M_0) = -1
$$

Demak, sirtning $M_0(x_0, y_0, z_0)$ nuqtadagi normal vektori $\vec{N} = (p, q, -1)$ yoki qarama-qarshi yo'nalgan $\vec{N}_1 = (-p, -q, 1)$ bo'ladi.

### 3.1. Urinma tekislik tenglamasi ($z = f(x, y)$ uchun)

$$
z - z_0 = \frac{\partial f(x_0, y_0)}{\partial x}(x - x_0) + \frac{\partial f(x_0, y_0)}{\partial y}(y - y_0)
$$

> [!IMPORTANT]
> **To'liq differensialning geometrik ma'nosi:**
> Urinma tekislik tenglamasining o'ng qismi funksiyaning $M_0(x_0, y_0)$ nuqtadagi to'liq differensiali $dz$ ga teng ($dx = x - x_0$, $dy = y - y_0$ bo'lganda):
> 
$$
> z_{\text{urinma}} - z_0 = dz(x_0, y_0)
> 
$$
> Ya'ni funksiyaning to'liq differensiali $dz$ sirtga o'tkazilgan urinma tekislik aplikatasining ($z$ koordinatasining) orttirmasini ifodalaydi.

### 3.2. Normal to'g'ri chiziq tenglamasi ($z = f(x, y)$ uchun)

$$
\frac{x - x_0}{\dfrac{\partial f(x_0, y_0)}{\partial x}} = \frac{y - y_0}{\dfrac{\partial f(x_0, y_0)}{\partial y}} = \frac{z - z_0}{-1}
$$

> [!TIP]
> Kanonik tenglamada maxrajlardan biri nolga teng bo'lib qolsa, bu to'g'ri chiziqning mos koordinata o'qiga perpendikulyar ekanligini (ya'ni tegishli koordinataning o'zgarmas qolishini) bildiradi. Masalan, $F'_x(M_0) = 0$ bo'lsa, normalda $x - x_0 = 0 \implies x = x_0$ bo'ladi.

---

## 4. Namuna sifatida yechilgan misollar

### 1-misol. Oshkor berilgan paraboloidga urinma tekislik va normal tuzish
$z = x^2 + 2y^2$ elliptik paraboloidning $M_0(1, -1, 3)$ nuqtasida urinma tekislik va normal to'g'ri chiziq tenglamalarini tuzing.

**Yechish:**
1. Avval nuqta sirtda yotishini tekshiramiz: $z_0 = 1^2 + 2(-1)^2 = 1 + 2 = 3$ (to'g'ri).
2. Xususiy hosilalarni topamiz va $M_0(1, -1)$ nuqtada hisoblaymiz:

$$
\frac{\partial z}{\partial x} = 2x \implies \frac{\partial z}{\partial x}(1, -1) = 2\cdot 1 = 2
$$

$$
\frac{\partial z}{\partial y} = 4y \implies \frac{\partial z}{\partial y}(1, -1) = 4\cdot(-1) = -4
$$

3. Urinma tekislik tenglamasi:

$$
z - 3 = 2(x - 1) - 4(y + 1) \implies 2x - 4y - z - 3 = 0
$$

4. Normal to'g'ri chiziq tenglamasi:

$$
\frac{x - 1}{2} = \frac{y + 1}{-4} = \frac{z - 3}{-1}
$$

---

### 2-misol. Oshkormas ko'rinishda berilgan sirtga urinma tekislik va normal
$x^2 + y^2 + z^2 - 2xyz = 2$ sirtga $M_0(1, 2, 3)$ nuqtada urinma tekislik va normal tenglamalarini tuzing.

**Yechish:**
1. Nuqtaning sirtda yotishini tekshiramiz: $1^2 + 2^2 + 3^2 - 2\cdot 1\cdot 2\cdot 3 = 1 + 4 + 9 - 12 = 2$ (to'g'ri).
2. $F(x, y, z) = x^2 + y^2 + z^2 - 2xyz - 2 = 0$ uchun xususiy hosilalarni hisoblaymiz:

$$
F'_x = 2x - 2yz \implies F'_x(1, 2, 3) = 2(1) - 2(2)(3) = 2 - 12 = -10
$$

$$
F'_y = 2y - 2xz \implies F'_y(1, 2, 3) = 2(2) - 2(1)(3) = 4 - 6 = -2
$$

$$
F'_z = 2z - 2xy \implies F'_z(1, 2, 3) = 2(3) - 2(1)(2) = 6 - 4 = 2
$$

Normal vektor: $\vec{N} = (-10, -2, 2)$ yoki $-2$ ga qisqartirsak $\vec{n} = (5, 1, -1)$.

3. Urinma tekislik tenglamasi:

$$
5(x - 1) + 1(y - 2) - 1(z - 3) = 0 \implies 5x + y - z - 4 = 0
$$

4. Normalning kanonik tenglamasi:

$$
\frac{x - 1}{5} = \frac{y - 2}{1} = \frac{z - 3}{-1}
$$

---

### 3-misol. Berilgan tekislikka parallel urinma tekislikni topish
$x^2 + 2y^2 + 3z^2 = 21$ ellipsoidning qaysi nuqtalarida o'tkazilgan urinma tekisliklar $x + 4y + 6z = 0$ tekislikka parallel bo'ladi?

**Yechish:**
1. Ellipsoid tenglamasidan $F(x, y, z) = x^2 + 2y^2 + 3z^2 - 21 = 0$. Urinma tekislikning normal vektori:

$$
\vec{N} = (F'_x, F'_y, F'_z) = (2x_0, 4y_0, 6z_0)
$$

2. Berilgan tekislikning normal vektori $\vec{n} = (1, 4, 6)$. Ikki tekislik parallel bo'lishi uchun ularning normal vektorlari kollinear bo'lishi kerak:

$$
\frac{2x_0}{1} = \frac{4y_0}{4} = \frac{6z_0}{6} = 2k \implies x_0 = k, \quad y_0 = 2k, \quad z_0 = 2k
$$

3. $(x_0, y_0, z_0)$ nuqta ellipsoid ustida yotgani uchun ellipsoid tenglamasiga qo'yamiz:

$$
k^2 + 2(2k)^2 + 3(2k)^2 = 21 \implies k^2 + 8k^2 + 12k^2 = 21 \implies 21k^2 = 21 \implies k = \pm 1
$$

Demak, izlanayotgan nuqtalar ikkita: $M_1(1, 2, 2)$ va $M_2(-1, -2, -2)$.

---

## 5. O'z-o'zini tekshirish savollari

1. $F(x, y, z) = 0$ sirtning $M_0$ nuqtasida $\operatorname{grad} F(M_0)$ vektori sirtga nisbatan qanday yo'nalgan bo'ladi?
2. $z = f(x, y)$ sirtga $M_0(x_0, y_0, z_0)$ nuqtada o'tkazilgan urinma tekislik $Oxy$ tekisligiga parallel (gorizontal) bo'lishi uchun xususiy hosilalar qanday shartni qanoatlantirishi kerak?
3. Urinma tekislik yordamida funksiyaning nuqta atrofidagi taqribiy qiymatini qanday hisoblash mumkin?
4. Sirtning maxsus nuqtasi nima va nima uchun unda urinma tekislik tenglamasi odatiy formula bilan yozilmaydi?

---

## 6. Mustaqil yechish uchun masalalar

1. **Masala:** $z = x^3 - xy^2$ sirtga $M_0(2, 1, 6)$ nuqtada urinma tekislik va normal tenglamasini tuzing.
   - *Javob:* Urinma tekislik: $11x - 4y - z - 12 = 0$; Normal: $\frac{x - 2}{11} = \frac{y - 1}{-4} = \frac{z - 6}{-1}$.
2. **Masala:** $x^2 + y^2 - z^2 = -1$ ikki pallali giperboloidga $M_0(2, 2, 3)$ nuqtada urinma tekislik tenglamasini tuzing.
   - *Javob:* $2x + 2y - 3z + 1 = 0$.
3. **Masala:** $z = \ln(x^2 + y^2)$ sirtga $M_0(1, 0, 0)$ nuqtada urinma tekislik va normal to'g'ri chiziq tenglamalarini yozing.
   - *Javob:* Urinma tekislik: $2x - z - 2 = 0$; Normal: $\frac{x - 1}{2} = \frac{y}{0} = \frac{z}{-1}$ (ya'ni $y = 0, \, x + 2z - 1 = 0$).
4. **Masala:** $z = x^2 + y^2$ paraboloidning qaysi nuqtasida urinma tekislik $2x - 4y - z + 5 = 0$ tekislikka parallel bo'ladi?
   - *Javob:* $M_0(1, -2, 5)$.
5. **Masala:** $xyz = a^3$ ($a > 0$) sirtga ixtiyoriy $M_0(x_0, y_0, z_0)$ nuqtada o'tkazilgan urinma tekislik koordinata tekisliklari bilan hosil qilgan piramida hajmi o'zgarmas ekanligini ko'rsating.
   - *Javob:* Urinma tekislik $\frac{x}{x_0} + \frac{y}{y_0} + \frac{z}{z_0} = 3$, kesmalar $3x_0, 3y_0, 3z_0$, hajm $V = \frac{1}{6}(27 x_0 y_0 z_0) = \frac{9}{2}a^3 = \text{const}$.
