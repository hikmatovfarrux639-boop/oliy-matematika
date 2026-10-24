---
title: "Tekis shakl va jismning og'irlik markazi, inersiya momentlari hamda sirt integrallari"
module: "karrali-integrallar"
description: "Karrali integrallarning fizik tatbiqlari: Massa, statik momentlar, og'irlik markazi (x_C, y_C, z_C), inersiya momentlari hamda 1- va 2-tur sirt integrallarini hisoblash."
order: 9
duration: "30 daqiqa"
category: "Karrali integrallar tatbiqlari"
difficulty: "Qiyin"
---

## Kirish: Matematikadan muhandislik mexanikasiga

Ikki va uch karrali integrallar shunchaki tekis soha yuzini yoki fazoviy shakl hajmini topish vositasi emas. Ularning asl qudrati — **nazariy mexanika, materiallar qarshiligi, gidromexanika va astrofizikada** yuzaga keladigan murakkab jism parametrlarini hisoblashda namoyon bo'ladi.

Bino va ko'priklarni loyihalashda konstruksiyalarning **og'irlik markazi (massalar markazi)** qayerda joylashganini bilish muvozanat va zilzilabardoshlikning asosiy shartidir. Kema va samolyotlarning burilish tezligi va barqarorligi ularning **inersiya momentiga** bog'liq. Kosmik kemalar qobig'iga yoki suv osti apparatlari sirtiga ta'sir qiluvchi bosim esa **sirt integrallari** orqali hisoblanadi.

Ushbu darsda biz karrali integrallarning barcha asosiy fizik tatbiqlarini va 1- hamda 2-tur sirt integrallarini mukammal o'rganamiz.

---

## 1. Karrali integrallarning fizik tatbiqlari: Massa va zichlik

### Tekis plastinkaning massasi:
Aytaylik, $Oxy$ tekisligida yotgan yupqa tekis plastinka $D$ sohani egallagan bo'lsin. Agar plastinkaning har bir $(x, y)$ nuqtasidagi sirtiy zichligi $\rho(x, y)$ uzluksiz funksiya bilan berilgan bo'lsa, uning to'la **massasi ($M$)** ikki karrali integral orqali aniqlanadi:
$$
M = \iint_D \rho(x, y) \, dx dy
$$

Agar plastinka **bir jinsli** (zichligi hamma yerda bir xil o'zgarmas son: $\rho(x, y) = \rho_0 = \text{const}$) bo'lsa:
$$
M = \rho_0 \iint_D dx dy = \rho_0 \cdot S
$$
bu yerda $S$ — $D$ sohaning geometrik yuzi. (Odatda matematik hisoblashlarda bir jinsli jism uchun $\rho_0 = 1$ deb olinadi).

---

## 2. Statik momentlar ($M_x, M_y$) va Og'irlik markazi koordinatalari ($x_C, y_C$)

### Statik momentlar:
Fizikada jism elementining biror o'qqa nisbatan statik momenti uning massasi bilan ushbu o'qqacha bo'lgan masofasining ko'paytmasiga tengdir:
- **$Ox$ o'qiga nisbatan statik moment:**
$$
M_x = \iint_D y \cdot \rho(x, y) \, dx dy
$$
- **$Oy$ o'qiga nisbatan statik moment:**
$$
M_y = \iint_D x \cdot \rho(x, y) \, dx dy
$$

### Og'irlik markazi koordinatalari ($C(x_C, y_C)$):
Jismning barcha massasi to'plangan va gravitatsiya kuchi qo'yilgan deb hisoblash mumkin bo'lgan nuqta **og'irlik markazi** deb ataladi. Uning koordinatalari statik momentlarni to'la massaga bo'lish orqali topiladi:
$$
x_C = \frac{M_y}{M} = \frac{\iint_D x \, \rho(x, y) \, dx dy}{\iint_D \rho(x, y) \, dx dy}
$$
$$
y_C = \frac{M_x}{M} = \frac{\iint_D y \, \rho(x, y) \, dx dy}{\iint_D \rho(x, y) \, dx dy}
$$

Agar plastinka bir jinsli ($\rho = \text{const}$) bo'lsa, $\rho$ kasr surat va maxrajidan qisqarib ketadi:
$$
x_C = \frac{1}{S} \iint_D x \, dx dy, \quad y_C = \frac{1}{S} \iint_D y \, dx dy
$$

> **Geometrik simmetriya qoidasi (Hisobni 2 marta tezlashtirish):**
> 1. Agar bir jinsli $D$ soha $Oy$ o'qiga nisbatan simmetrik bo'lsa, darhol $x_C = 0$ bo'ladi!
> 2. Agar soha $Ox$ o'qiga nisbatan simmetrik bo'lsa, darhol $y_C = 0$ bo'ladi!
> 3. Og'irlik markazi har doim shaklning simmetriya o'qida (yoki simmetriya markazida) yotadi.

---

## 3. Fazoviy jismning massasi va og'irlik markazi (Uch karrali integral)

Fazoda $V$ sohani egallagan va hajmiy zichligi $\rho(x, y, z)$ bo'lgan uch o'lchamli jism uchun:

- **Jismning to'liq massasi:**
$$
M = \iiint_V \rho(x, y, z) \, dx dy dz
$$

- **Koordinata tekisliklariga nisbatan statik momentlar:**
$$
M_{yz} = \iiint_V x \rho \, dV, \quad M_{xz} = \iiint_V y \rho \, dV, \quad M_{xy} = \iiint_V z \rho \, dV
$$

- **Fazoviy og'irlik markazi $C(x_C, y_C, z_C)$:**
$$
x_C = \frac{M_{yz}}{M} = \frac{\iiint_V x \rho \, dV}{\iiint_V \rho \, dV}
$$
$$
y_C = \frac{M_{xz}}{M} = \frac{\iiint_V y \rho \, dV}{\iiint_V \rho \, dV}
$$
$$
z_C = \frac{M_{xy}}{M} = \frac{\iiint_V z \rho \, dV}{\iiint_V \rho \, dV}
$$

---

## 4. O'qqa va qutbga nisbatan inersiya momentlari ($I_x, I_y, I_0$)

Inersiya momenti aylanma harakatda xuddi ilgarilanma harakatdagi massa kabi inersiyaning o'lchovidir ($E_k = \frac{1}{2} I \omega^2$). Masofa kvadrati bilan ko'paytirilgan elementar massalar yig'indisini ifodalaydi:

### Tekis plastinka uchun:
- **$Ox$ o'qiga nisbatan inersiya momenti:**
$$
I_x = \iint_D y^2 \rho(x, y) \, dx dy
$$
- **$Oy$ o'qiga nisbatan inersiya momenti:**
$$
I_y = \iint_D x^2 \rho(x, y) \, dx dy
$$
- **Koordinata boshiga (qutbga) nisbatan qutb inersiya momenti ($I_0$):**
$$
I_0 = \iint_D (x^2 + y^2) \rho(x, y) \, dx dy = I_x + I_y
$$

### Fazoviy jism ($V$) uchun:
- **$Oz$ o'qiga nisbatan inersiya momenti:**
$$
I_z = \iiint_V (x^2 + y^2) \rho(x, y, z) \, dx dy dz
$$
- **$Ox$ o'qiga nisbatan:** $I_x = \iiint_V (y^2 + z^2) \rho \, dV$
- **$Oy$ o'qiga nisbatan:** $I_y = \iiint_V (x^2 + z^2) \rho \, dV$

---

## 5. Birinchi tur sirt integrali ($dS$ elementi bo'yicha integrallash)

Egri chiziqli integral chiziq bo'yicha integrallash bo'lsa, **sirt integrali** fazodagi egri sirt bo'yicha integrallashdir.

> **Ta'rif:**
> Fazodagi silliq $\sigma$ sirtda aniqlangan $f(x, y, z)$ funksiyaning **birinchi tur sirt integrali** quyidagicha belgilanadi:
> $$
> \iint_\sigma f(x, y, z) \, dS
> $$
> bunda $dS$ — sirtning differensial maydon elementi.

### Geometrik va fizik ma'nosi:
- Agar $f(x, y, z) = 1$ bo'lsa, integral $\sigma$ sirtning to'liq **yuzasini** beradi: $S_\sigma = \iint_\sigma dS$.
- Agar $f(x, y, z) = \rho(x, y, z)$ bo'lsa, integral egri sirt qobig'ining **massasini** beradi.

### Hisoblash qoidasi (Tekislikka proyeksiyalash):
Agar sirt $z = z(x, y)$ tenglama orqali berilgan bo'lib, uning $Oxy$ tekisligidagi proyeksiyasi $D$ soha bo'lsa:
$$
dS = \sqrt{1 + \left( \frac{\partial z}{\partial x} \right)^2 + \left( \frac{\partial z}{\partial y} \right)^2} \, dx dy
$$

Sirt integrali oddiy ikki karrali integralga keltiriladi:
$$
\iint_\sigma f(x, y, z) \, dS = \iint_D f(x, y, z(x, y)) \sqrt{1 + (z'_x)^2 + (z'_y)^2} \, dx dy
$$

### Ikkinchi tur sirt integrali bilan bog'liqlik:
Ikkinchi tur sirt integrali $\iint_\sigma P \, dy dz + Q \, dz dx + R \, dx dy$ vektor maydon oqimini ifodalaydi va 1-tur integral bilan quyidagicha bog'langan:
$$
\iint_\sigma (\mathbf{F} \cdot \mathbf{n}) \, dS = \iint_\sigma (P \cos\alpha + Q \cos\beta + R \cos\gamma) \, dS
$$
bu yerda $\mathbf{n} = (\cos\alpha, \cos\beta, \cos\gamma)$ — sirtning tanlangan tomonidagi birlik normal vektori.

---

## 6. To'liq yechilgan namunaviy masalalar

### 1-masala: Parabola segmentining og'irlik markazi
$y = x^2$ va $y = 4$ chiziqlar bilan chegaralangan bir jinsli tekis plastinkaning og'irlik markazini toping.

**Yechilishi:**
1. **Sohani tahlil qilamiz:** Parabola $y = x^2$ ning shoxlari yuqoriga qaragan, $y = 4$ gorizontal to'g'ri chiziq.
Kesishish nuqtalari: $x^2 = 4 \implies x = \pm 2$.
Soha $Oy$ o'qiga nisbatan to'liq simmetrik!
Demak, simmetriya qoidasiga ko'ra darhol:
$$
x_C = 0
$$

2. **Plastinka yuzini ($S$) hisoblaymiz:**
$$
S = \int_{-2}^2 \left( 4 - x^2 \right) dx = 2 \int_0^2 (4 - x^2) \, dx = 2 \left[ 4x - \frac{x^3}{3} \right]_0^2 = 2 \left( 8 - \frac{8}{3} \right) = 2 \cdot \frac{16}{3} = \frac{32}{3}
$$

3. **$Ox$ o'qiga nisbatan statik moment ($M_x$) ni hisoblaymiz:**
$$
M_x = \iint_D y \, dx dy = \int_{-2}^2 dx \int_{x^2}^4 y \, dy
$$
Ichki integral:
$$
\int_{x^2}^4 y \, dy = \left[ \frac{y^2}{2} \right]_{x^2}^4 = \frac{16 - x^4}{2}
$$
Tashqi integral:
$$
M_x = \int_{-2}^2 \frac{16 - x^4}{2} \, dx = \int_0^2 (16 - x^4) \, dx = \left[ 16x - \frac{x^5}{5} \right]_0^2 = 32 - \frac{32}{5} = \frac{128}{5}
$$

4. **Og'irlik markazining $y_C$ koordinatasini topamiz:**
$$
y_C = \frac{M_x}{S} = \frac{\frac{128}{5}}{\frac{32}{3}} = \frac{128}{5} \cdot \frac{3}{32} = \frac{4 \cdot 3}{5} = \frac{12}{5} = 2.4
$$

**Javob:** Og'irlik markazi $C(0; 2.4)$ nuqtada joylashgan.

---

### 2-masala: Yarim doiraning og'irlik markazi
$x^2 + y^2 \le R^2, \; y \ge 0$ bir jinsli yarim doiraning og'irlik markazini toping.

**Yechilishi:**
1. Soha $Oy$ o'qiga nisbatan simmetrik $\implies x_C = 0$.
2. Yarim doira yuzi: $S = \frac{\pi R^2}{2}$.
3. Qutb koordinatalariga o'tamiz ($x = r\cos\varphi, y = r\sin\varphi, dx dy = r \, dr d\varphi$):
   $\varphi \in [0, \pi]$, $r \in [0, R]$.
$$
M_x = \iint_D y \, dx dy = \int_0^\pi \sin\varphi \, d\varphi \int_0^R r \cdot (r \, dr) = [-\cos\varphi]_0^\pi \cdot \left[ \frac{r^3}{3} \right]_0^R = (1 - (-1)) \cdot \frac{R^3}{3} = \frac{2R^3}{3}
$$
4. $y_C$ koordinata:
$$
y_C = \frac{M_x}{S} = \frac{\frac{2R^3}{3}}{\frac{\pi R^2}{2}} = \frac{4R}{3\pi} \approx 0.424 R
$$

**Javob:** $C\left(0, \frac{4R}{3\pi}\right)$.

---

### 3-masala: Birinchi tur sirt integrali
$\iint_\sigma (x + y + z) \, dS$ integralni hisoblang, bu yerda $\sigma$ — $x + y + z = 1$ tekislikning 1-oktantda ($x \ge 0, y \ge 0, z \ge 0$) yotgan uchburchak shaklidagi qismi.

**Yechilishi:**
1. Sirt tenglamasi: $z = 1 - x - y$.
Xususiy hosilalar: $z'_x = -1, \; z'_y = -1$.
2. Sirt differensiali elementi:
$$
dS = \sqrt{1 + (-1)^2 + (-1)^2} \, dx dy = \sqrt{1 + 1 + 1} \, dx dy = \sqrt{3} \, dx dy
$$
3. Integrallanuvchi funksiyaga $z = 1 - x - y$ ni qo'yamiz:
$$
f(x, y, z(x, y)) = x + y + (1 - x - y) = 1
$$
4. Proyeksiya sohasi $D$: $x \ge 0, y \ge 0, x + y \le 1$ to'g'ri burchakli uchburchak.
Uning yuzi: $S_D = \frac{1}{2} \cdot 1 \cdot 1 = \frac{1}{2}$.
5. Integralni hisoblaymiz:
$$
\iint_\sigma (x + y + z) \, dS = \iint_D 1 \cdot \sqrt{3} \, dx dy = \sqrt{3} \iint_D dx dy = \sqrt{3} \cdot S_D = \frac{\sqrt{3}}{2}
$$

**Javob:** $\frac{\sqrt{3}}{2}$.

---

## 7. Mustaqil mashqlar va javoblar

Quyidagi masalalarni mustaqil ishlab ko'ring:

1. **Uchburchak og'irlik markazi:** Uchlari $O(0, 0), A(3, 0), B(0, 6)$ nuqtalarda bo'lgan bir jinsli uchburchak plastinkaning og'irlik markazini toping.
2. **Inersiya momenti:** $0 \le x \le a, \; 0 \le y \le b$ to'g'ri to'rtburchak bir jinsli ($\rho = 1$) plastinkaning $Ox$ o'qiga nisbatan inersiya momenti $I_x$ ni hisoblang.
3. **Qutb inersiya momenti:** Radiusi $R$ bo'lgan bir jinsli doiraning ($x^2 + y^2 \le R^2$, massasi $M$) o'z markaziga nisbatan qutb inersiya momentini toping.
4. **Sirt integrali:** $\iint_\sigma z \, dS$ integralni hisoblang, bu yerda $\sigma$ — $z = \sqrt{x^2 + y^2}$ konusning $0 \le z \le 2$ qismi.

---

### Mashqlarning to'liq javoblari:

1. **1-mashq:**
   - Uchburchak gipotenuzasi: $\frac{x}{3} + \frac{y}{6} = 1 \implies y = 6 - 2x$.
   - Yuzi: $S = \frac{1}{2} \cdot 3 \cdot 6 = 9$.
   - $M_y = \int_0^3 x \, dx \int_0^{6-2x} dy = \int_0^3 x(6 - 2x) dx = [3x^2 - \frac{2x^3}{3}]_0^3 = 27 - 18 = 9 \implies x_C = \frac{9}{9} = 1$.
   - $M_x = \int_0^3 dx \int_0^{6-2x} y \, dy = \int_0^3 \frac{(6-2x)^2}{2} dx = \left[ -\frac{(6-2x)^3}{12} \right]_0^3 = 0 - \left(-\frac{216}{12}\right) = 18 \implies y_C = \frac{18}{9} = 2$.
   *(Tekshirish: uchburchak medianalari kesishish nuqtasi formula: $(\frac{0+3+0}{3}, \frac{0+0+6}{3}) = (1, 2)$).*
   **Javob:** $C(1; 2)$.

2. **2-mashq:**
   $$
   I_x = \int_0^a dx \int_0^b y^2 \, dy = a \cdot \left[ \frac{y^3}{3} \right]_0^b = \frac{a b^3}{3}
   $$
   Plastinka massasi $M = ab$ bo'lgani uchun: $I_x = \frac{1}{3} M b^2$.
   **Javob:** $I_x = \frac{a b^3}{3}$.

3. **3-mashq:**
   Qutb koordinatalarida:
   $$
   I_0 = \iint_D (x^2 + y^2) \, dx dy = \int_0^{2\pi} d\varphi \int_0^R r^2 \cdot r \, dr = 2\pi \left[ \frac{r^4}{4} \right]_0^R = \frac{\pi R^4}{2}
   $$
   Doira massasi $M = \pi R^2$ bo'lgani sababli: $I_0 = \frac{1}{2} M R^2$.
   **Javob:** $I_0 = \frac{\pi R^4}{2} = \frac{1}{2} M R^2$.

4. **4-mashq:**
   - Konus sirti: $z = \sqrt{x^2 + y^2}$.
   - $z'_x = \frac{x}{\sqrt{x^2+y^2}}, \; z'_y = \frac{y}{\sqrt{x^2+y^2}}$.
   - $dS = \sqrt{1 + \frac{x^2}{x^2+y^2} + \frac{y^2}{x^2+y^2}} \, dx dy = \sqrt{1 + 1} \, dx dy = \sqrt{2} \, dx dy$.
   - $z = r$ (qutb koordinatalarida), $r \in [0, 2]$, $\varphi \in [0, 2\pi]$.
   $$
   \iint_\sigma z \, dS = \iint_D r \sqrt{2} \cdot r \, dr d\varphi = \sqrt{2} \int_0^{2\pi} d\varphi \int_0^2 r^2 \, dr = \sqrt{2} \cdot 2\pi \cdot \frac{8}{3} = \frac{16\sqrt{2}\pi}{3}
   $$
   **Javob:** $\frac{16\sqrt{2}\pi}{3}$.
