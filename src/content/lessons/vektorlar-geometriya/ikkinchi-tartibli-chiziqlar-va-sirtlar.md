---
title: "Ikkinchi tartibli chiziqlar va fazodagi sirtlar"
module: "vektorlar-geometriya"
order: 6
description: "Aylana, ellips, giperbola, parabola kanonik tenglamalari, optik xossalar, ikkinchi tartibli invariantlar, hamda fazodagi sirtlar: ellipsoid, giperboloid va paraboloidlar."
---

## Kirish: Chiziqli shakllardan egrilikka

Tekislikda $Ax + By + C = 0$ va fazoda $Ax + By + Cz + D = 0$ tenglamalari to'g'ri chiziq va tekislik kabi 1-tartibli chiziqli tekis obyektlarni ifodalaydi.

Biroq tabiatdagi aksariyat harakatlar — sayyoralarning Quyosh atrofida aylanishi, sun'iy yo'ldoshlar orbitasi, projektor nurlarining fokuslanishi, ko'priklarning arkalari va tovush to'lqinlarining akslanishi — **ikkinchi tartibli egri chiziqlar (konus kesimlari) va fazoviy sirtlar** orqali tavsiflanadi.

---

## 1. Tekislikdagi ikkinchi tartibli chiziqlar (Kanonik shakllar)

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
- **Optik reflektor xossasi:** Ellipsning bitta fokusidan chiqqan har qanday yorug'lik yoki tovush nuri ellips devoridan akslanib, **albatta ikkinchi fokusga** borib tushadi (tibbiyotda buyrak toshlarini ultratovush bilan maydalash — litotripsiyada qo'llanadi).
- Xususiy hol: $a = b = R$ bo'lganda $x^2 + y^2 = R^2$ **aylana** hosil bo'ladi ($e = 0$).

---

### 2. Giperbola
> **Kanonik tenglama:**
> $$
> \frac{x^2}{a^2} - \frac{y^2}{b^2} = 1
> $$

- Fokuslar orasidagi masofa: $c = \sqrt{a^2 + b^2}$, fokuslar $F_1(-c, 0)$ va $F_2(c, 0)$.
- **Ekssentrisitet:** $e = \frac{c}{a} > 1$.
- **Asimptotalar:** $y = \pm \frac{b}{a} x$ to'g'ri chiziqlari (egri chiziq shoxlari cheksizlikda bu chiziqlarga cheksiz yaqinlashadi, lekin hech qachon kesishmaydi).
- **Optik xossasi:** Bir fokusga qaratilgan nur giperboladan akslangach, ikkinchi fokusdan tarqalayotgandek yo'naladi (Kassegren teleskoplari).

---

### 3. Parabola
> **Kanonik tenglama:**
> $$
> y^2 = 2px \quad (p > 0)
> $$

- Fokus nuqtasi: $F\left(\frac{p}{2}, 0\right)$.
- Direktrisa tenglamasi: $x = -\frac{p}{2}$.
- **Ekssentrisitet:** $e = 1$.
- **Optik reflektor xossasi:** Fokusdan chiqqan barcha nurlar paraboladan akslangach, uning simmetriya o'qiga **qat'iy parallel dasta bo'lib** qaytadi (avtomobil faralari, projektorlar, kosmik radioteleskoplar).

> [!NOTE] Universal direktrisa qoidasi
> Ellips, giperbola va parabola uchun umumiy qonuniyat mavjud: egri chiziqning ixtiyoriy $M$ nuqtasidan fokusgacha bo'lgan masofaning direktrisagacha bo'lgan masofaga nisbati **har doim o'zgarmas ekssentrisitet $e$ ga tengdir**:
> $$
> \frac{r}{d} = e
> $$

---

## 2. Invariantlar yordamida chiziq turini aniqlash

Umumiy tenglamadagi koordinata o'qlari qanday burilmasin yoki ko'chirilmasin, qiymati mutlaqo o'zgarmay qoladigan miqdorlar **ortogonal invariantlar** deyiladi:

$$
I_1 = A + C, \quad I_2 = \begin{vmatrix} A & B \\ B & C \end{vmatrix} = AC - B^2, \quad I_3 = \begin{vmatrix} A & B & D \\ B & C & E \\ D & E & F \end{vmatrix}
$$

> **Klassifikatsiya qoidasi ($I_2$ bo'yicha):**
> 1. **$I_2 > 0$ — Elliptik tur:** Haqiqiy ellips ($I_1 \cdot I_3 < 0$), bitta nuqta ($I_3 = 0$) yoki mavhum ellips.
> 2. **$I_2 < 0$ — Giperbolik tur:** Giperbola ($I_3 \neq 0$) yoki kesishuvchi ikki to'g'ri chiziq ($I_3 = 0$).
> 3. **$I_2 = 0$ — Parabolik tur:** Parabola ($I_3 \neq 0$) yoki parallel to'g'ri chiziqlar ($I_3 = 0$).

---

## 3. Fazodagi ikkinchi tartibli sirtlar

Fazodagi ikkinchi tartibli sirtlar Dekart koordinatalarida $x, y, z$ o'zgaruvchilarga nisbatan 2-darajali tenglamalar bilan beriladi:

### 1. Ellipsoid
$$
\frac{x^2}{a^2} + \frac{y^2}{b^2} + \frac{z^2}{c^2} = 1
$$
Barcha koordinata tekisliklari bilan kesimi **ellipslardan** iborat yopiq sirt. Xususiy holda $a = b = c = R$ bo'lsa, **sfera** hosil bo'ladi.

### 2. Bir pallali giperboloid
$$
\frac{x^2}{a^2} + \frac{y^2}{b^2} - \frac{z^2}{c^2} = 1
$$
O'rtasi toraygan, bir butun yaxlit to'g'ri chiziqli sirt (GRES sovitish minoralari, Shuxov teleminorasi shakli). Gorizontal kesimlari ($z = h$) — ellipslar, vertikal kesimlari — giperbolalar.

### 3. Ikki pallali giperboloid
$$
\frac{x^2}{a^2} + \frac{y^2}{b^2} - \frac{z^2}{c^2} = -1
$$
O'zaro tutashmagan ikkita alohida "kosacha" (pallalar)dan iborat sirt ($-c < z < c$ oralig'ida sirt nuqtalari mavjud emas).

### 4. Elliptik paraboloid
$$
z = \frac{x^2}{2p} + \frac{y^2}{2q} \quad (p, q > 0)
$$
Pastki uchi bitta cho'qqida tutashgan chuqur kosasimon sirt (sun'iy yo'ldosh parabola antennalari, reflektorlar).

### 5. Giperbolik paraboloid ("Egarsimon sirt")
$$
z = \frac{x^2}{2p} - \frac{y^2}{2q} \quad (p, q > 0)
$$
O'ziga xos egar shaklidagi sirt: bir yo'nalishda botiq (minimum), ikkinchi yo'nalishda qavariq (maksimum). Koordinatalar boshi $(0, 0, 0)$ sirtning **egar nuqtasi** deyiladi.

### 6. Ikkinchi tartibli konus va silindrlar
- **Konus:** $\frac{x^2}{a^2} + \frac{y^2}{b^2} - \frac{z^2}{c^2} = 0$
- **Elliptik silindr:** $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$ ($z$ o'qi bo'ylab cheksiz cho'zilgan quvur).
- **Parabolik silindr:** $y^2 = 2px$.

---

## 4. Qadamma-qadam to'liq yechilgan amaliy misol

**Masala:** Tenglamani to'la kvadratlar ajratish orqali kanonik ko'rinishga keltiring va uning markazi hamda yarim o'qlarini aniqlang:
$$
x^2 + 2y^2 + 4z^2 - 4x + 4y - 16z + 16 = 0
$$

### Yechish:

Har bir o'zgaruvchi bo'yicha to'la kvadrat ajratamiz:
1. $x$ bo'yicha:
   $$x^2 - 4x = (x - 2)^2 - 4$$
2. $y$ bo'yicha:
   $$2(y^2 + 2y) = 2[(y + 1)^2 - 1] = 2(y + 1)^2 - 2$$
3. $z$ bo'yicha:
   $$4(z^2 - 4z) = 4[(z - 2)^2 - 4] = 4(z - 2)^2 - 16$$

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

**Xulosa:** Bu markazi $M(2, -1, 2)$ nuqtada bo'lgan, yarim o'qlari $a = \sqrt{6}, \; b = \sqrt{3}, \; c = \sqrt{1.5}$ bo'lgan **ellipsoiddir**!

---

## 5. Talabalar yo'l qo'yadigan tuzoqlar

> [!WARNING] Imtihonda ehtiyot bo'ling!
> 1. **Ellips va Giperbola fokus formulasida adashish:**
>    - Ellipsda: $c = \sqrt{a^2 - b^2}$ (chunki $a > c$);
>    - Giperbolada: $c = \sqrt{a^2 + b^2}$ (chunki $c > a$).
> 2. **Bir pallali va Ikki pallali giperboloid ishoralari:**
>    - $\frac{x^2}{a^2} + \frac{y^2}{b^2} - \frac{z^2}{c^2} = +1$ — bir pallali giperboloid;
>    - $\frac{x^2}{a^2} + \frac{y^2}{b^2} - \frac{z^2}{c^2} = -1$ — ikki pallali giperboloid. O'ng tarafdagi ishoraga qat'iy e'tibor bering!
> 3. **To'la kvadrat ajratishda qavs oldidagi koeffitsiyentni unutish:** $2(y^2 + 2y) = 2(y+1)^2 - 2$ da oxiridagi $-2$ ni $-1$ deb yozib ketish eng ko'p uchraydigan arifmetik xatodir.

---

## 6. Mustaqil yechish uchun amaliy mashqlar

1. $4x^2 + 9y^2 = 36$ ellipsning yarim o'qlari, fokuslari va ekssentrisitetini toping.
   - *Javob:* $\frac{x^2}{9} + \frac{y^2}{4} = 1 \implies a = 3, b = 2, c = \sqrt{5}, e = \frac{\sqrt{5}}{3}$. Fokuslar: $(\pm \sqrt{5}, 0)$.

2. $x^2 - 4y^2 = 16$ giperbolaning asimptotalarini toping.
   - *Javob:* $\frac{x^2}{16} - \frac{y^2}{4} = 1 \implies a = 4, b = 2$. Asimptotalar: $y = \pm \frac{1}{2} x$.

3. $x^2 + y^2 - z^2 = 4$ tenglama fazoda qanday sirtni ifodalaydi?
   - *Javob:* $\frac{x^2}{4} + \frac{y^2}{4} - \frac{z^2}{4} = 1$ — bir pallali aylanma giperboloid.
