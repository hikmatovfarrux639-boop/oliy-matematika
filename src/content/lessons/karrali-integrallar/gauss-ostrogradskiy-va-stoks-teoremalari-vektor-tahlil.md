---
title: "Gauss-Ostrogradskiy va Stoks teoremalari: Maydon oqimi, sirkulyatsiya, divergensiya va rotor"
description: "Vektor maydon differensial va integral xarakteristikalari, Gauss-Ostrogradskiy va Stoks teoremalarining fizik-geometrik mohiyati."
module: "karrali-integrallar"
order: 14
---

## 📌 Kirish va Vektor Tahlilining Fizik Mohiyati

Zamonaviy klassik fizika, elektrodinamika, gidrodinamika va astrofizika vektor maydonlari nazariyasiga tayanadi. Fazoning har bir nuqtasida ma'lum bir vektor mavjud bo'lsa, u **vektor maydon** deyiladi:

$$
\vec{F}(x, y, z) = P(x, y, z)\vec{i} + Q(x, y, z)\vec{j} + R(x, y, z)\vec{k}
$$

Masalan, daryoning har bir nuqtasidagi suv oqimi tezligi, Yer atrofidagi gravitatsiya maydoni yoki zaryadlangan zarracha atrofidagi elektrostatik maydon vektor maydondir. Har qanday vektor maydon ikkita fundamental xususiyat orqali to'liq tavsiflanadi:

1. **Maydonda manbalar (yoki yutqichlar) bormi?** Buni nuqtaviy darajada **divergensiya**, makroskopik darajada esa sirt orqali **oqim** ko'rsatadi.
2. **Maydon girdoblanadimi (aylanadimi)?** Buni nuqtaviy darajada **rotor**, makroskopik darajada esa kontur bo'yicha **sirkulyatsiya** ko'rsatadi.

Buyuk matematiklar Karl Gauss, Mixail Ostrogradskiy va Jorj Stoks yaratgan teoremalar ushbu differensial va integral xarakteristikalarni o'zaro bog'lovchi ko'prik bo'lib, Jeyms Klerk Maksvellning butun elektrodinamika tenglamalari tizimining poydevorini tashkil etadi.

---

## 📐 Asosiy Nazariya: Differensial va Integral Operatorlar

### 1. Divergensiya va Maydon Oqimi

> **Divergensiya (skalyar kattalik):**
> Vektor maydonining manbalari zichligini ifodalaydi:
> $$
> \operatorname{div}\vec{F} = \nabla \cdot \vec{F} = \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z}
> $$
> Agar $\operatorname{div}\vec{F} > 0$ bo'lsa — nuqtada oqim manbai (buloq), $\operatorname{div}\vec{F} < 0$ bo'lsa — oqim yutqichi (quduq), $\operatorname{div}\vec{F} = 0$ bo'lsa — maydon **solenoidal** (manbasiz) deyiladi.

> **Sirt orqali vektor maydon oqimi:**
> $$
> \Phi = \iint_S (\vec{F} \cdot \vec{n}) \, dS = \iint_S (P \, dy dz + Q \, dz dx + R \, dx dy)
> $$
> bu yerda $\vec{n} = (\cos\alpha, \cos\beta, \cos\gamma)$ — sirtning birlik normal vektori.

---

### 2. Gauss-Ostrogradskiy Teoremasi

> **Teorema:**
> Yopiq bo'lakli-silliq $S$ sirt orqali chiquvchi to'liq vektor maydon oqimi ushbu sirt bilan chegaralangan $V$ fazoviy jism bo'yicha divergensiyadan olingan uch karrali integralga teng:
> $$
> \oiint_S (\vec{F} \cdot \vec{n}) \, dS = \iiint_V \operatorname{div}\vec{F} \, dV = \iiint_V \left( \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z} \right) dx \, dy \, dz
> $$

Bu teorema 2-tur sirt integrallarini hisoblashni uch karrali integralga almashtirish imkonini beradi.

---

### 3. Rotor va Sirkulyatsiya. Stoks Teoremasi

> **Rotor (vektor kattalik):**
> Vektor maydonining girdoblanish o'qini va burchak tezligini ifodalaydi:
> $$
> \operatorname{rot}\vec{F} = \nabla \times \vec{F} = \begin{vmatrix}
> \vec{i} & \vec{j} & \vec{k} \\[2mm]
> \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\[2mm]
> P & Q & R
> \end{vmatrix} = \left(\frac{\partial R}{\partial y} - \frac{\partial Q}{\partial z}\right)\vec{i} + \left(\frac{\partial P}{\partial z} - \frac{\partial R}{\partial x}\right)\vec{j} + \left(\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}\right)\vec{k}
> $$

> **Stoks Teoremasi:**
> Fazodagi $S$ sirtni chegaralab turgan $L$ yopiq kontur bo'yicha vektor maydonining sirkulyatsiyasi (ishi) ushbu sirt orqali o'tuvchi maydon rotorining oqimiga teng:
> $$
> \oint_L \vec{F} \cdot d\vec{r} = \iint_S (\operatorname{rot}\vec{F} \cdot \vec{n}) \, dS
> $$
> bu yerda konturni aylanib o'tish yo'nalishi va sirt normali $\vec{n}$ o'ng vint (o'ng qo'l) qoidasi bilan bog'langan.

---

## 📝 Qadamma-qadam Yechilgan Amaliy Misollar

### 1-misol (Gauss-Ostrogradskiy teoremasi — Maydon oqimi):
$\vec{F} = x^3\vec{i} + y^3\vec{j} + z^3\vec{k}$ vektor maydonining $x^2 + y^2 + z^2 = R^2$ sfera tashqi sirti bo'yicha oqimini hisoblang.

**Yechilishi:**
1. Maydonning divergensiyasini topamiz:
   $$
   \operatorname{div}\vec{F} = \frac{\partial(x^3)}{\partial x} + \frac{\partial(y^3)}{\partial y} + \frac{\partial(z^3)}{\partial z} = 3x^2 + 3y^2 + 3z^2 = 3(x^2 + y^2 + z^2)
   $$
2. Gauss-Ostrogradskiy teoremasini qo'llaymiz:
   $$
   \Phi = \oiint_S (\vec{F} \cdot \vec{n}) \, dS = \iiint_V 3(x^2 + y^2 + z^2) \, dx \, dy \, dz
   $$
3. Sferik koordinatalarga o'tamiz ($x^2+y^2+z^2 = \rho^2, \; dV = \rho^2 \sin\theta \, d\rho \, d\theta \, d\varphi$):
   $$
   \Phi = 3 \int_0^{2\pi} d\varphi \int_0^\pi \sin\theta \, d\theta \int_0^R \rho^2 \cdot \rho^2 \, d\rho
   $$
4. Har bir integralni hisoblaymiz:
   $$
   \int_0^{2\pi} d\varphi = 2\pi, \qquad \int_0^\pi \sin\theta \, d\theta = 2, \qquad \int_0^R \rho^4 \, d\rho = \frac{R^5}{5}
   $$
5. Oqim qiymati:
   $$
   \Phi = 3 \cdot 2\pi \cdot 2 \cdot \frac{R^5}{5} = \frac{12}{5}\pi R^5
   $$

---

### 2-misol (Stoks teoremasi — Sirkulyatsiyani hisoblash):
$\vec{F} = y\vec{i} + z\vec{j} + x\vec{k}$ maydonining $x^2 + y^2 + z^2 = 1$ sfera bilan $x + y + z = 0$ tekislik kesishishidan hosil bo'lgan aylana konturi bo'yicha sirkulyatsiyasini Stoks teoremasi orqali hisoblang (kontur soat miliga teskari aylanadi, agar $x>0, y>0, z>0$ tomondan qaralsa).

**Yechilishi:**
1. Rotorini hisoblaymiz:
   $$
   \operatorname{rot}\vec{F} = \begin{vmatrix} \vec{i} & \vec{j} & \vec{k} \\ \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\ y & z & x \end{vmatrix} = (0 - 1)\vec{i} + (0 - 1)\vec{j} + (0 - 1)\vec{k} = -\vec{i} - \vec{j} - \vec{k} = (-1, -1, -1)
   $$
2. Kontur $x + y + z = 0$ tekislikda yotadi. Ushbu tekislikning birlik normal vektori:
   $$
   \vec{n} = \left(\frac{1}{\sqrt{3}}, \frac{1}{\sqrt{3}}, \frac{1}{\sqrt{3}}\right)
   $$
3. Rotor va normalning skalyar ko'paytmasini olamiz:
   $$
   \operatorname{rot}\vec{F} \cdot \vec{n} = (-1)\frac{1}{\sqrt{3}} + (-1)\frac{1}{\sqrt{3}} + (-1)\frac{1}{\sqrt{3}} = -\frac{3}{\sqrt{3}} = -\sqrt{3}
   $$
4. Stoks formulasiga ko'ra:
   $$
   C = \oint_L \vec{F} \cdot d\vec{r} = \iint_S (\operatorname{rot}\vec{F} \cdot \vec{n}) \, dS = -\sqrt{3} \iint_S dS = -\sqrt{3} \cdot S(\text{doira})
   $$
5. Doira radiusi sfera radiusi bilan bir xil: $r = 1 \implies S = \pi (1^2) = \pi$.
   $$
   C = -\sqrt{3}\pi
   $$

---

### 3-misol (Fundamental Vektor Ayniyatlari):
Isbotlang:
1. Har qanday silliq maydon rotorining divergensiyasi nolga teng: $\operatorname{div}(\operatorname{rot}\vec{F}) \equiv 0$.
2. Har qanday potensial maydonning rotori nolga teng: $\operatorname{rot}(\operatorname{grad} u) \equiv \vec{0}$.

**Yechilishi:**
1. $\operatorname{div}(\operatorname{rot}\vec{F}) = \frac{\partial}{\partial x}\left(\frac{\partial R}{\partial y} - \frac{\partial Q}{\partial z}\right) + \frac{\partial}{\partial y}\left(\frac{\partial P}{\partial z} - \frac{\partial R}{\partial x}\right) + \frac{\partial}{\partial z}\left(\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}\right)$.
   Shvarts teoremasiga ko'ra ikkinchi tartibli aralash hosilalar tengligi sababli barcha hadlar o'zaro juft-juft qisqarib ketadi: $\equiv 0$.
   *Fizik ma'nosi: Girdobli maydonlarning alohida manbalari bo'lmaydi (masalan, tabiatda magnit monopol yo'q, $\operatorname{div}\vec{B} = 0$).*
2. $\operatorname{rot}(\operatorname{grad} u) = \begin{vmatrix} \vec{i} & \vec{j} & \vec{k} \\ \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\ \frac{\partial u}{\partial x} & \frac{\partial u}{\partial y} & \frac{\partial u}{\partial z} \end{vmatrix} = \left(\frac{\partial^2 u}{\partial y \partial z} - \frac{\partial^2 u}{\partial z \partial y}\right)\vec{i} + \dots = \vec{0}$.
   *Fizik ma'nosi: Elektrostatik yoki gravitatsion potensial maydonlarda girdob bo'lmaydi.*

---

## ⚠️ Talabalar Ko'p Yo'l Qo'yadigan Xatolar

1. **Gauss-Ostrogradskiy teoremasini ochiq sirtlarga qo'llash:**
   Agar sirt yopiq bo'lmasa (masalan, sharning faqat yuqori yarmi yoki stakanning yon sirti), Gauss-Ostrogradskiy formulasini to'g'ridan-to'g'ri qo'llab bo'lmaydi! Uni qo'llash uchun sirtni pastki asos (qopqoq) bilan sun'iy ravishda "yopish", to'liq oqimni topib, so'ngra qopqoq oqimini ayirib tashlash kerak.
2. **Normal vektor yo'nalishini chalkashtirish:**
   Teoremada normal vektor sirtning **tashqi** tomoniga qaratilgan deb qabul qilingan. Agar masala ichki sirt bo'yicha oqimni so'rasa, ishora manfiyga o'zgaradi.
3. **Stoks teoremasida sirt tanlashdagi erkinlikni bilmaslik:**
   Stoks teoremasida kontur bilan chegaralangan ixtiyoriy sirtni olish mumkin! Ko'pchilik talabalar murakkab paraboloid sirtini olib qiynaladilar, holbuki xuddi shu konturga tayanuvchi tekis tekislikni olinsa, hisob-kitob 1 daqiqaga qisqaradi.

---

## 🎯 Mustaqil Yechish Uchun Masalalar

1. Gauss-Ostrogradskiy teoremasi yordamida $\vec{F} = (2x, -y, z)$ maydonining $x^2 + y^2 + z^2 \le 4$ shar sirti orqali tashqi oqimini hisoblang.
2. $\vec{F} = (y^2, z^2, x^2)$ maydon sirkulyatsiyasini $x^2 + y^2 = 4, z = 0$ aylana bo'yicha Stoks teoremasi bilan hisoblang.
3. Maydon solenoidal ekanini isbotlang: $\vec{F} = (y^2 + z^2)\vec{i} + (z^2 + x^2)\vec{j} + (x^2 + y^2)\vec{k}$.

<details style="margin-top: 1rem; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); cursor: pointer;">
<summary style="font-weight: 700; color: var(--primary);">Javoblar va Ko'rsatmalar</summary>

**1-masala:** $\operatorname{div}\vec{F} = 2 - 1 + 1 = 2$.
$\Phi = \iiint_V 2 \, dV = 2 \cdot V(\text{shar}) = 2 \cdot \frac{4}{3}\pi (2^3) = \frac{64\pi}{3}$.

**2-masala:** $\operatorname{rot}\vec{F} = (-2z, -2x, -2y)$. $z=0$ tekislikda $\vec{n} = (0, 0, 1)$.
$\operatorname{rot}\vec{F} \cdot \vec{n} = -2y$. Sirt bo'yicha integral: $\iint_D -2y \, dx dy = 0$ (simmetriyaga ko'ra toq funksiya). Sirkulyatsiya $0$ ga teng.

**3-masala:** $\operatorname{div}\vec{F} = \frac{\partial(y^2+z^2)}{\partial x} + \frac{\partial(z^2+x^2)}{\partial y} + \frac{\partial(x^2+y^2)}{\partial z} = 0 + 0 + 0 = 0$. Maydon solenoidal.

</details>

---

## 💡 Xulosa va Imtihon Maslahatlari

- **Yopiq sirt orqali oqim $\oiint_S$** so'ralsa $\to$ Darhol **Gauss-Ostrogradskiy** teoremasini qo'llang ($\iiint_V \operatorname{div}\vec{F} \, dV$).
- **Yopiq kontur bo'ylab ish/sirkulyatsiya $\oint_L$** so'ralsa $\to$ Darhol **Stoks** teoremasini qo'llang ($\iint_S (\operatorname{rot}\vec{F} \cdot \vec{n}) \, dS$).
- Bu ikki formula ko'p bosqichli murakkab integrallarni bir necha qatorli elementar hisoblashlarga aylantiruvchi oliy matematikaning eng qudratli qurollaridir.
