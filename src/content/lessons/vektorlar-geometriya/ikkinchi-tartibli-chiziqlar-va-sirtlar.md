---
title: "Ikkinchi tartibli chiziqlar va fazodagi sirtlar"
module: "vektorlar-geometriya"
order: 6
description: "Aylana, ellips, giperbola, parabola kanonik tenglamalari, ikkinchi tartibli invariantlar, hamda fazodagi sirtlar: ellipsoid, giperboloid va paraboloidlar."
---

## Kirish: Chiziqli shakllardan egrilikka

Tekislikda $Ax + By + C = 0$ va fazoda $Ax + By + Cz + D = 0$ tenglamalari to'g'ri chiziq va tekislik kabi 1-tartibli chiziqli obyektlarni ifodalaydi.

Biroq tabiatdagi aksariyat harakatlar — sayyoralarning Quyosh atrofida aylanishi, sun'iy yo'ldoshlar orbitasi, projektor nurlari fokuslanishi va ko'priklarning arkalari — **ikkinchi tartibli egri chiziqlar va fazoviy sirtlar** orqali tavsiflanadi.

---

## 1. Tekislikdagi ikkinchi tartibli chiziqlar

Tekislikdagi har qanday ikkinchi tartibli chiziq umumiy ko'rinishda quyidagicha yoziladi:

$$
Ax^2 + 2Bxy + Cy^2 + 2Dx + 2Ey + F = 0
$$

Koordinatalar sistemasini burish va parallel ko'chirish orqali ushbu tenglama 3 ta asosiy **kanonik ko'rinishdan** biriga keladi:

### 1. Ellips (va aylana)

> **Kanonik tenglama:**
> $$
> \frac{x^2}{a^2} + \frac{y^2}{b^2} = 1 \quad (a \ge b > 0)
> $$

- $a$ — katta yarim o'q, $b$ — kichik yarim o'q.
- Fokuslar orasidagi masofa: $c = \sqrt{a^2 - b^2}$, fokuslar $F_1(-c, 0)$ va $F_2(c, 0)$.
- **Ekssentrisitet:** $e = \frac{c}{a} < 1$.
- Xususiy hol: $a = b = R$ bo'lganda $x^2 + y^2 = R^2$ **aylana** hosil bo'ladi ($e = 0$).

### 2. Giperbola

> **Kanonik tenglama:**
> $$
> \frac{x^2}{a^2} - \frac{y^2}{b^2} = 1
> $$

- $c = \sqrt{a^2 + b^2}$, fokuslar $F_1(-c, 0)$ va $F_2(c, 0)$.
- **Ekssentrisitet:** $e = \frac{c}{a} > 1$.
- **Asimptotalar:** $y = \pm \frac{b}{a} x$ to'g'ri chiziqlari (egri chiziq cheksizlikda bu chiziqlarga cheksiz yaqinlashadi).

### 3. Parabola

> **Kanonik tenglama:**
> $$
> y^2 = 2px \quad (p > 0)
> $$

- Fokus nuqtasi: $F\left(\frac{p}{2}, 0\right)$.
- Direktrisa tenglamasi: $x = -\frac{p}{2}$.
- **Ekssentrisitet:** $e = 1$.

---

## 2. Invariantlar yordamida chiziq turini aniqlash

Umumiy tenglamadagi koordinatalar o'qi qanday burilmasin yoki ko'chirilmasin, o'zgarmay qoladigan miqdorlar **invariantlar** deyiladi:

$$
I_1 = A + C, \quad I_2 = \begin{vmatrix} A & B \\ B & C \end{vmatrix} = AC - B^2, \quad I_3 = \begin{vmatrix} A & B & D \\ B & C & E \\ D & E & F \end{vmatrix}
$$

> **Klassifikatsiya qoidasi ($I_2$ bo'yicha):**
> 1. **$I_2 > 0$ — Elliptik tur** (Ellips, nuqta yoki mavhum ellips).
> 2. **$I_2 < 0$ — Giperbolik tur** (Giperbola yoki kesishuvchi ikki to'g'ri chiziq).
> 3. **$I_2 = 0$ — Parabolik tur** (Parabola, parallel to'g'ri chiziqlar).

---

## 3. Fazodagi ikkinchi tartibli sirtlar (TATU Dasturi)

Fazodagi ikkinchi tartibli sirtlar Dekart koordinatalarida $x, y, z$ o'zgaruvchilarga nisbatan 2-darajali tenglama bilan beriladi:

### 1. Ellipsoid

$$
\frac{x^2}{a^2} + \frac{y^2}{b^2} + \frac{z^2}{c^2} = 1
$$

- Barcha koordinata tekisliklari bilan kesimi **ellipslardan** iborat yopiq sirt.
- Agar $a = b = c = R$ bo'lsa, **sfera** $x^2 + y^2 + z^2 = R^2$ hosil bo'ladi.

### 2. Bir pallali giperboloid

$$
\frac{x^2}{a^2} + \frac{y^2}{b^2} - \frac{z^2}{c^2} = 1
$$

- O'rtasi toraygan, bir butun yaxlit sirt (sovitish minoralari, Shuxov teleminorasi shakli).
- Gorizontal kesimlari ($z = h$) — ellipslar, vertikal kesimlari — giperbolalar.

### 3. Ikki pallali giperboloid

$$
\frac{x^2}{a^2} + \frac{y^2}{b^2} - \frac{z^2}{c^2} = -1
$$

- O'zaro tutashmagan ikkita alohida "kosacha" (pallalar)dan iborat sirt ($-c < z < c$ sohada sirt nuqtalari mavjud emas).

### 4. Elliptik paraboloid

$$
z = \frac{x^2}{2p} + \frac{y^2}{2q} \quad (p, q > 0)
$$

- Pastki uchi bitta nuqtada (cho'qqida) tutashgan chuqur kosasimon sirt (sun'iy yo'ldosh parabola antennalari, reflektorlar).

### 5. Giperbolik paraboloid ("Egarsimon sirt")

$$
z = \frac{x^2}{2p} - \frac{y^2}{2q} \quad (p, q > 0)
$$

- O'ziga xos egar shaklidagi sirt: bir yo'nalishda botiq (minimum), ikkinchi yo'nalishda qavariq (maksimum).
- Koordinatalar boshi $(0, 0, 0)$ sirtning **egar nuqtasi (sedlovaya tochka)** deyiladi.

### 6. Ikkinchi tartibli konus va silindrlar

- **Konus:** $\frac{x^2}{a^2} + \frac{y^2}{b^2} - \frac{z^2}{c^2} = 0$
- **Elliptik silindr:** $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$ ($z$ o'qi bo'ylab cheksiz cho'zilgan quvur).
- **Parabolik silindr:** $y^2 = 2px$.

---

## 4. Universitet Masalasi: Tenglamani Kanonik Ko'rinishga Keltirish

Quyidagi tenglamaning qanday sirtni ifodalashini aniqlang:

$$
x^2 + 2y^2 + 4z^2 - 4x + 4y - 16z + 16 = 0
$$

### Yechish:

Har bir o'zgaruvchi bo'yicha to'la kvadrat ajratamiz:

1. $x$ bo'yicha:
   $$
   x^2 - 4x = (x - 2)^2 - 4
   $$

2. $y$ bo'yicha:
   $$
   2(y^2 + 2y) = 2[(y + 1)^2 - 1] = 2(y + 1)^2 - 2
   $$

3. $z$ bo'yicha:
   $$
   4(z^2 - 4z) = 4[(z - 2)^2 - 4] = 4(z - 2)^2 - 16
   $$

Tenglamaga qo'yamiz:
$$
(x - 2)^2 - 4 + 2(y + 1)^2 - 2 + 4(z - 2)^2 - 16 + 16 = 0
$$
$$
(x - 2)^2 + 2(y + 1)^2 + 4(z - 2)^2 - 6 = 0
$$
$$
(x - 2)^2 + 2(y + 1)^2 + 4(z - 2)^2 = 6
$$

Ikkala tomonni 6 ga bo'lamiz:
$$
\frac{(x - 2)^2}{6} + \frac{(y + 1)^2}{3} + \frac{(z - 2)^2}{1.5} = 1
$$

**Xulosa:** Bu markazi $(2, -1, 2)$ nuqtada bo'lgan va yarim o'qlari $a = \sqrt{6}, b = \sqrt{3}, c = \sqrt{1.5}$ bo'lgan **ellipsoiddir**!
