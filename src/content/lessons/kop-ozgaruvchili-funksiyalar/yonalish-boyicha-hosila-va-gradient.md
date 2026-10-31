---
title: "Yo'nalish bo'yicha hosila, gradient vektor va sath chiziqlari"
description: "Fazo va tekislikda yo'nalish bo'yicha hosila, gradientning geometrik va fizik ma'nosi, izosirtlar."
module: "kop-ozgaruvchili-funksiyalar"
order: 13
---

## 📌 Kirish va Fizik-Geometrik Maydon Tushunchasi

Bir o'zgaruvchili funksiyalarda ($y = f(x)$) argument faqat bitta to'g'ri chiziq bo'ylab — oldinga yoki orqaga o'zgarishi mumkin. Ko'p o'zgaruvchili funksiyalarda esa fazodagi biror nuqtadan cheksiz ko'p turli yo'nalishlarda siljish imkoniyati mavjud.

Tog' yonbag'rida turgan sayyohni tasavvur qiling:
- Agar u eng tik qiyalik bo'ylab to'g'riga yursa, balandlik eng tez sur'atda ortadi;
- Agar u xuddi shu yo'ldan orqaga yursa, balandlik eng tez kamayadi;
- Agar u qiyalik bo'ylab aylanma gorizontal yo'ldan (izo-balandlik chizig'i bo'ylab) yursa, balandlik umuman o'zgarmaydi!

Fizikada fazoning har bir nuqtasiga ma'lum bir skalyar qiymat mos qo'yilgan bo'lsa, u **skalyar maydon** deb ataladi (masalan, harorat taqsimoti $T(x,y,z)$, atmosfera bosimi $P(x,y)$ yoki elektrostatik potensial $\varphi(x,y,z)$). Skalyar maydonning fazoviy o'zgarish xarakteristikasini tahlil qilish uchun ikki asosiy tushuncha xizmat qiladi: **yo'nalish bo'yicha hosila** va **gradient vektor**.

Bugungi kunda ushbu tushunchalar sun'iy intellekt va neyron to'rlarini o'qitishdagi eng asosiy mexanizm — **Gradient tushishi (Gradient Descent)** algoritmining poydevorini tashkil etadi.

---

## 📐 Asosiy Nazariya: Ta'riflar, Formulalar va Teoremalar

### 1. Yo'nalish Bo'yicha Hosila Ta'rifi

Faraz qilaylik, $u = f(x, y, z)$ funksiya biror $D \subset \mathbb{R}^3$ sohada aniqlangan va $M_0(x_0, y_0, z_0) \in D$ bo'lsin.
$M_0$ nuqtadan chiquvchi yo'nalish birlik vektor $\vec{e} = (\cos\alpha, \cos\beta, \cos\gamma)$ orqali berilgan bo'lsin, bu yerda $|\vec{e}| = \sqrt{\cos^2\alpha + \cos^2\beta + \cos^2\gamma} = 1$.

Agar $M(x_0 + \Delta t \cos\alpha, \, y_0 + \Delta t \cos\beta, \, z_0 + \Delta t \cos\gamma)$ ushbu nurdagi nuqta bo'lsa:

> **Ta'rif:**
> Ushbu limit mavjud bo'lsa, u $u = f(x, y, z)$ funksiyaning $M_0$ nuqtadagi **$\vec{e}$ yo'nalish bo'yicha hosilasi** deyiladi:
> $$
> \frac{\partial u}{\partial \vec{e}} = \lim_{\Delta t \to +0} \frac{f(M) - f(M_0)}{\Delta t}
> $$

---

### 2. Hisoblash Formulalari

Agar $u = f(x, y, z)$ funksiya $M_0$ nuqtada differensiallanuvchi bo'lsa, yo'nalish bo'yicha hosila xususiy hosilalar orqali quyidagicha hisoblanadi:

$$
\frac{\partial u}{\partial \vec{e}} = \frac{\partial u}{\partial x} \cos\alpha + \frac{\partial u}{\partial y} \cos\beta + \frac{\partial u}{\partial z} \cos\gamma
$$

Tekislikda $z = f(x, y)$ va $\vec{e} = (\cos\alpha, \sin\alpha)$ uchun:
$$
\frac{\partial z}{\partial \vec{e}} = \frac{\partial z}{\partial x} \cos\alpha + \frac{\partial z}{\partial y} \sin\alpha
$$

---

### 3. Gradient Vektor va Uning Xossalari

> **Ta'rif:**
> Skalyar $u(x, y, z)$ funksiyaning xususiy hosilalaridan tuzilgan vektor uning **gradienti** deyiladi va $\operatorname{grad} u$ yoki $\nabla u$ ("nabla") bilan belgilanadi:
> $$
> \operatorname{grad} u = \nabla u = \left( \frac{\partial u}{\partial x}, \frac{\partial u}{\partial y}, \frac{\partial u}{\partial z} \right) = \frac{\partial u}{\partial x}\vec{i} + \frac{\partial u}{\partial y}\vec{j} + \frac{\partial u}{\partial z}\vec{k}
> $$

**Yo'nalish bo'yicha hosila bilan bog'liqlik:**
Yo'nalish bo'yicha hosila — gradient bilan birlik yo'naltiruvchi vektorning skalyar ko'paytmasiga teng:
$$
\frac{\partial u}{\partial \vec{e}} = (\operatorname{grad} u \cdot \vec{e}) = |\operatorname{grad} u| \cdot |\vec{e}| \cdot \cos\theta = |\operatorname{grad} u| \cos\theta
$$
bu yerda $\theta$ — gradient vektori bilan $\vec{e}$ yo'nalishi orasidagi burchak.

Ushbu formuladan gradientning uchta fundamental xossasi kelib chiqadi:
1. **Eng tez o'sish:** Agar $\vec{e}$ gradient bilan bir yo'nalishda bo'lsa ($\theta = 0, \cos\theta = 1$), hosila o'zining **maksimal qiymatiga** erishadi:
   $$
   \left(\frac{\partial u}{\partial \vec{e}}\right)_{\max} = |\operatorname{grad} u| = \sqrt{\left(\frac{\partial u}{\partial x}\right)^2 + \left(\frac{\partial u}{\partial y}\right)^2 + \left(\frac{\partial u}{\partial z}\right)^2}
   $$
2. **Eng tez kamayish:** Gradientga qarama-qarshi yo'nalishda ($\theta = \pi, \cos\theta = -1$) funksiya eng tez kamayadi.
3. **Sath chiziqlari (izosirtlar)ga ortogonallik:**
   Sath chizig'i $f(x, y) = C$ bo'ylab funksiya o'zgarmasdir, demak sath chizig'iga urinma yo'nalishda $\frac{\partial u}{\partial \vec{e}} = 0$ ($\theta = \pi/2$).
   **Xulosa:** Gradient vektor doimo sath chizig'iga (yoki sath sirtiga) perpendikulyar yo'nalgan bo'ladi!

---

## 📝 Qadamma-qadam Yechilgan Amaliy Misollar

### 1-misol:
$z = 2x^2 - 3xy + 5y^2$ funksiyaning $M(1; 2)$ nuqtadagi $\vec{a} = (3; 4)$ vektori yo'nalishi bo'yicha hosilasini va ushbu nuqtadagi gradientini toping.

**Yechilishi:**
1. Xususiy hosilalarni topamiz:
   $$
   \frac{\partial z}{\partial x} = 4x - 3y, \qquad \frac{\partial z}{\partial y} = -3x + 10y
   $$
2. $M(1; 2)$ nuqtadagi qiymatlarini hisoblaymiz:
   $$
   \left.\frac{\partial z}{\partial x}\right|_M = 4(1) - 3(2) = -2, \qquad \left.\frac{\partial z}{\partial y}\right|_M = -3(1) + 10(2) = 17
   $$
3. Gradient vektorni yozamiz:
   $$
   \operatorname{grad} z(M) = (-2; 17) = -2\vec{i} + 17\vec{j}
   $$
4. $\vec{a}$ vektorining modulini topamiz: $|\vec{a}| = \sqrt{3^2 + 4^2} = 5$.
5. Birlik yo'naltiruvchi vektorni aniqlaymiz:
   $$
   \vec{e} = \frac{\vec{a}}{|\vec{a}|} = \left(\frac{3}{5}; \frac{4}{5}\right) \implies \cos\alpha = \frac{3}{5}, \quad \sin\alpha = \frac{4}{5}
   $$
6. Yo'nalish bo'yicha hosilani hisoblaymiz:
   $$
   \frac{\partial z}{\partial \vec{e}} = \left.\frac{\partial z}{\partial x}\right|_M \cos\alpha + \left.\frac{\partial z}{\partial y}\right|_M \sin\alpha = (-2) \cdot \frac{3}{5} + 17 \cdot \frac{4}{5} = \frac{-6 + 68}{5} = \frac{62}{5} = 12.4
   $$

---

### 2-misol:
Fazodagi $u = x y^2 z^3$ funksiyaning $A(1; 1; -1)$ nuqtadan $B(3; 3; 0)$ nuqtaga qarab yo'nalgan vektor bo'yicha hosilasini hisoblang.

**Yechilishi:**
1. Yo'nalish vektori: $\vec{AB} = (3-1; 3-1; 0-(-1)) = (2; 2; 1)$.
2. Vektor uzunligi: $|\vec{AB}| = \sqrt{2^2 + 2^2 + 1^2} = \sqrt{4+4+1} = 3$.
3. Birlik vektor: $\vec{e} = \left(\frac{2}{3}; \frac{2}{3}; \frac{1}{3}\right)$.
4. Xususiy hosilalar va ularning $A(1; 1; -1)$ nuqtadagi qiymatlari:
   - $u'_x = y^2 z^3 \implies u'_x(A) = 1^2 \cdot (-1)^3 = -1$;
   - $u'_y = 2xyz^3 \implies u'_y(A) = 2(1)(1)(-1)^3 = -2$;
   - $u'_z = 3xy^2 z^2 \implies u'_z(A) = 3(1)(1)^2(-1)^2 = 3$.
5. Yo'nalish bo'yicha hosila:
   $$
   \frac{\partial u}{\partial \vec{e}} = (-1)\cdot\frac{2}{3} + (-2)\cdot\frac{2}{3} + 3\cdot\frac{1}{3} = \frac{-2 - 4 + 3}{3} = \frac{-3}{3} = -1
   $$
*Xulosa: Ushbu yo'nalishda siljiganda funksiya 1 tezlik bilan kamayadi.*

---

### 3-misol (Eng tez o'sish va sath chizig'i):
Tekislikdagi harorat maydoni $T(x, y) = 100 - 2x^2 - y^2$ tenglama bilan berilgan. $P(2; 3)$ nuqtada harorat eng tez qaysi yo'nalishda ko'tariladi va bu eng katta ko'tarilish sur'ati nimaga teng?

**Yechilishi:**
1. Gradient haroratning eng tez ko'tarilish yo'nalishini ko'rsatadi:
   $$
   \nabla T = \left( \frac{\partial T}{\partial x}, \frac{\partial T}{\partial y} \right) = (-4x, -2y)
   $$
2. $P(2; 3)$ nuqtada:
   $$
   \nabla T(P) = (-4(2), -2(3)) = (-8; -6)
   $$
3. Eng katta o'sish sur'ati gradientning moduliga teng:
   $$
   |\nabla T(P)| = \sqrt{(-8)^2 + (-6)^2} = \sqrt{64 + 36} = \sqrt{100} = 10
   $$
4. Eng tez sovish (kamayish) yo'nalishi esa aksincha: $-\nabla T = (8; 6)$.
5. Sath chizig'i: $100 - 2x^2 - y^2 = C$ ellips bo'lib, $\nabla T(P)$ vektori aynan shu ellipsga normal (tik) joylashgan.

---

## ⚠️ Talabalar Ko'p Yo'l Qo'yadigan Xatolar

1. **Berilgan vektorni normallashtirishni unutish:**
   Agar vektor $\vec{a} = (3; 4)$ bo'lsa, to'g'ridan-to'g'ri $3 \frac{\partial z}{\partial x} + 4 \frac{\partial z}{\partial y}$ qilib hisoblash qo'pol xatodir. Yo'naltiruvchi vektor albatta birlik uzunlikka ega bo'lishi ($|\vec{e}| = 1$) shart!
2. **Gradient va yo'nalish bo'yicha hosilani tushunchaviy aralashtirish:**
   Gradient — bu **vektor** (fazoda yo'nalish va kattalikka ega). Yo'nalish bo'yicha hosila esa — bu **skalyar son** (o'sha yo'nalishdagi o'zgarish tezligi).
3. **Ishoralarni e'tibordan chetda qoldirish:**
   Agar yo'nalish bo'yicha hosila manfiy chiqsa ($\frac{\partial u}{\partial \vec{e}} < 0$), bu funksiyaning kamayayotganini bildiradi. Buni modulga olib musbat qilib qo'yish mumkin emas.

---

## 🎯 Mustaqil Yechish Uchun Masalalar

1. $z = x^3 - 3x^2 y + y^3$ funksiyaning $M(1; 1)$ nuqtadagi gradientini va uning uzunligini toping.
2. $u = \ln(x^2 + y^2 + z^2)$ funksiyaning $M(1; 2; 2)$ nuqtadagi $\vec{s} = (1; 1; 1)$ yo'nalishi bo'yicha hosilasini hisoblang.
3. Isbotlang: Agar $\operatorname{grad} u = \vec{0}$ bo'lsa, barcha yo'nalishlar bo'yicha hosilalar nolga teng bo'ladi.

<details style="margin-top: 1rem; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); cursor: pointer;">
<summary style="font-weight: 700; color: var(--primary);">Javoblar va Ko'rsatmalar</summary>

**1-masala:** $z'_x = 3x^2 - 6xy \implies z'_x(M) = -3$; $z'_y = -3x^2 + 3y^2 \implies z'_y(M) = 0$.
$\operatorname{grad} z(M) = (-3; 0)$, uzunligi: $|\operatorname{grad} z| = 3$.

**2-masala:** $|\vec{s}| = \sqrt{3} \implies \vec{e} = (1/\sqrt{3}, 1/\sqrt{3}, 1/\sqrt{3})$.
$u'_x = \frac{2x}{x^2+y^2+z^2} \implies u'_x(M) = 2/9$; $u'_y(M) = 4/9$; $u'_z(M) = 4/9$.
$\frac{\partial u}{\partial \vec{e}} = \frac{2}{9\sqrt{3}} + \frac{4}{9\sqrt{3}} + \frac{4}{9\sqrt{3}} = \frac{10}{9\sqrt{3}} = \frac{10\sqrt{3}}{27}$.

**3-masala:** $\frac{\partial u}{\partial \vec{e}} = (\operatorname{grad} u \cdot \vec{e}) = (\vec{0} \cdot \vec{e}) = 0$. Barcha yo'nalishlarda funksiya o'zgarishsiz qoladi (statsionar holat).

</details>

---

## 💡 Xulosa va Imtihon Maslahatlari

- Gradient doimo eng tik ko'tarilish tomonga qaraydi, uning aksi esa eng tik tushish (anti-gradient) tomonidir.
- Yo'nalish bo'yicha hosila hisoblashda 3 ta qadamni yodda tuting:
  1) Xususiy hosilalarni hisoblab, berilgan nuqtani qo'yish;
  2) Berilgan yo'nalish vektorini uzunligiga bo'lib, birlik vektor $\vec{e}$ ni tuzish;
  3) Skalyar ko'paytirish: $\frac{\partial u}{\partial \vec{e}} = \nabla u \cdot \vec{e}$.
