---
title: "Grin formulasi: Egrichiziqli va ikki karrali integrallar bog'liqligi"
description: "Ikkinchi tur egri chiziqli integrallar, Grin formulasi, soha yuzini kontur integrali orqali hisoblash."
module: "karrali-integrallar"
order: 13
---

## 📌 Kirish va Vektor Maydoni Ishining Geometrik Mohiyati

Fizika va nazariy mexanikada $\vec{F}(x, y) = P(x, y)\vec{i} + Q(x, y)\vec{j}$ kuch maydoni ta'sirida moddiy nuqtaning $L$ egri chiziq bo'ylab harakatlanishida bajarilgan mexanik ish ikkinchi tur egri chiziqli integral bilan ifodalanadi:

$$
A = \int_L P(x, y) \, dx + Q(x, y) \, dy
$$

Agar nuqta harakatlanib, yana o'zining boshlang'ich holatiga qaytsa (ya'ni yopiq kontur bo'ylab aylanib chiqsa), hosil bo'lgan integral vektor maydonining **sirkulyatsiyasi** deb ataladi va $\oint_L$ belgisi bilan yoziladi.

1828-yilda o'zining mustaqil izlanishlari bilan ilm-fanni larzaga solgan ingliz matematigi va fizigi **Jorj Grin** (George Green) bir o'lchovli kontur bo'yicha olingan integral bilan shu kontur o'rab turgan ikki o'lchovli soha bo'yicha olingan ikki karrali integral o'rtasidagi fundamental bog'liqlikni kashf etdi.

Grin formulasi nafaqat nazariy ahamiyatga ega, balki amaliy muhandislikda ham keng qo'llaniladi. Masalan, kartografiya va chizmachilikda ixtiyoriy murakkab sohaning (ko'l, xarita qit'asi yoki mashina detali) yuzasini shunchaki uning konturini aylanib chiqish orqali hisoblaydigan **planimetr** asbobi aynan Grin formulasiga asoslangan!

---

## 📐 Asosiy Nazariya: Grin Formulasi va Yuzani Hisoblash

### 1. Grin Teoremasi

Faraz qilaylik, $D \subset \mathbb{R}^2$ tekislikdagi chegaralangan, bir bog'lamli soha bo'lib, uning chegarasi bo'lakli-silliq $L = \partial D$ yopiq konturdan iborat bo'lsin.
$P(x, y)$ va $Q(x, y)$ funksiyalari o'zlarining xususiy hosilalari $\frac{\partial P}{\partial y}$ va $\frac{\partial Q}{\partial x}$ bilan birgalikda $D$ sohada va uning chegarasi $L$ da uzluksiz bo'lsin.

> **Grin formulasi:**
> $$
> \oint_{\partial D^+} \left( P(x, y) \, dx + Q(x, y) \, dy \right) = \iint_D \left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right) dx \, dy
> $$

**Konturning musbat yo'nalishi ($\partial D^+$):**
Kontur bo'ylab harakatlanganda soha doimo **chap tomonda** qolishi kerak. Oddiy chegaralangan sohalar uchun bu **soat mili harakatiga qarama-qarshi** yo'nalishga to'g'ri keladi. Agar kontur soat mili bo'yicha aylanilsa, integral oldiga minus ("$-$") ishorasi qo'yiladi.

---

### 2. Soha Yuzini Kontur Integrallari Orqali Hisoblash

Grin formulasidagi $\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} = 1$ bo'lsin. U holda o'ng tomondagi ikki karrali integral aynan $D$ sohaning $S$ yuzasiga teng bo'ladi:
$$
\iint_D 1 \, dx \, dy = S(D)
$$

Bunday shartni qanoatlantiruvchi uchta eng qulay kombinatsiya mavjud:
1. $P = 0, \quad Q = x \implies S = \oint_L x \, dy$
2. $P = -y, \quad Q = 0 \implies S = -\oint_L y \, dx$
3. Ikkalasining arifmetik o'rtachasi (eng simmetrik va mashhur shakli):
   $$
   S = \frac{1}{2} \oint_L (x \, dy - y \, dx)
   $$

Ushbu formula parametrik ko'rinishda berilgan murakkab yopiq egri chiziqlar bilan chegaralangan figuralar yuzini hisoblashda tengsizdir.

---

### 3. Maydonning Potensiallik Sharti

Agar sohaning barcha nuqtalarida:
$$
\frac{\partial Q}{\partial x} = \frac{\partial P}{\partial y}
$$
tenglik bajarilsa, u holda har qanday yopiq kontur bo'yicha integral nolga teng bo'ladi: $\oint_L (P dx + Q dy) = 0$.
Bu holda $P dx + Q dy$ ifodasi biror $u(x, y)$ funksiyaning to'liq differensiali bo'lib ($du = P dx + Q dy$), integralning qiymati integrallash yo'liga bog'liq bo'lmaydi!

---

## 📝 Qadamma-qadam Yechilgan Amaliy Misollar

### 1-misol (Grin formulasi bilan hisoblash):
Ushbu kontur integralini Grin formulasi yordamida hisoblang:
$$
I_1 = \oint_L \left( (x y^2 - y) \, dx + (x^2 y + x) \, dy \right)
$$
bu yerda $L: x^2 + y^2 = R^2$ radiusi $R$ bo'lgan aylana bo'lib, soat miliga teskari yo'nalishda aylanadi.

**Yechilishi:**
1. Funksiyalarni aniqlaymiz:
   $$
   P(x, y) = x y^2 - y, \qquad Q(x, y) = x^2 y + x
   $$
2. Xususiy hosilalarni olamiz:
   $$
   \frac{\partial P}{\partial y} = 2xy - 1, \qquad \frac{\partial Q}{\partial x} = 2xy + 1
   $$
3. Ayirmani tuzamiz:
   $$
   \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} = (2xy + 1) - (2xy - 1) = 2
   $$
4. Grin formulasini qo'llaymiz:
   $$
   I_1 = \iint_D 2 \, dx \, dy = 2 \iint_D dx \, dy = 2 \cdot S(D)
   $$
5. $D$ sohasi radiusi $R$ bo'lgan doira, uning yuzi $S(D) = \pi R^2$.
   $$
   I_1 = 2 \cdot \pi R^2 = 2\pi R^2
   $$
*(Eslatma: Agar kontur bo'yicha to'g'ridan-to'g'ri trigonometrik parametr bilan hisoblanganda ham xuddi shu javob chiqardi, biroq ancha ko'p vaqt talab etilardi!)*

---

### 2-misol (Ellips yuzini kontur integrali orqali topish):
Parametrik shaklda berilgan ellips yuzini hisoblang:
$$
x = a \cos t, \qquad y = b \sin t \qquad (0 \le t \le 2\pi)
$$

**Yechilishi:**
1. Simmetrik Grin formulasidan foydalanamiz:
   $$
   S = \frac{1}{2} \oint_L (x \, dy - y \, dx)
   $$
2. Differensiallarni hisoblaymiz:
   $$
   dx = -a \sin t \, dt, \qquad dy = b \cos t \, dt
   $$
3. Integral ostidagi ifodani tuzamiz:
   $$
   x \, dy - y \, dx = (a \cos t)(b \cos t \, dt) - (b \sin t)(-a \sin t \, dt)
   $$
   $$
   = a b \cos^2 t \, dt + a b \sin^2 t \, dt = a b (\cos^2 t + \sin^2 t) \, dt = a b \, dt
   $$
4. $t$ o'zgaruvchisi bo'yicha integrallaymiz:
   $$
   S = \frac{1}{2} \int_0^{2\pi} a b \, dt = \frac{1}{2} a b \left. t \right|_0^{2\pi} = \frac{1}{2} a b (2\pi) = \pi a b
   $$
**Javob:** $S = \pi a b$.

---

### 3-misol (Astroida yuzi):
Astroida chizig'i bilan chegaralangan figura yuzini toping:
$$
x = a \cos^3 t, \qquad y = a \sin^3 t \qquad (0 \le t \le 2\pi)
$$

**Yechilishi:**
1. Differensiallar:
   $$
   dx = -3a \cos^2 t \sin t \, dt, \qquad dy = 3a \sin^2 t \cos t \, dt
   $$
2. $x \, dy - y \, dx$ ifodasi:
   $$
   x \, dy - y \, dx = (a \cos^3 t)(3a \sin^2 t \cos t) \, dt - (a \sin^3 t)(-3a \cos^2 t \sin t) \, dt
   $$
   $$
   = 3a^2 \cos^2 t \sin^2 t (\cos^2 t + \sin^2 t) \, dt = 3a^2 \cos^2 t \sin^2 t \, dt
   $$
3. Trigonometrik soddalashtirish: $\cos t \sin t = \frac{1}{2}\sin(2t) \implies \cos^2 t \sin^2 t = \frac{1}{4}\sin^2(2t)$.
   $$
   x \, dy - y \, dx = \frac{3}{4} a^2 \sin^2(2t) \, dt = \frac{3}{4} a^2 \frac{1 - \cos(4t)}{2} \, dt = \frac{3}{8} a^2 (1 - \cos(4t)) \, dt
   $$
4. Yuzani hisoblaymiz:
   $$
   S = \frac{1}{2} \int_0^{2\pi} \frac{3}{8} a^2 (1 - \cos(4t)) \, dt = \frac{3}{16} a^2 \left[ t - \frac{\sin(4t)}{4} \right]_0^{2\pi} = \frac{3}{16} a^2 (2\pi) = \frac{3}{8}\pi a^2
   $$
**Javob:** $S = \frac{3}{8}\pi a^2$.

---

## ⚠️ Talabalar Ko'p Yo'l Qo'yadigan Xatolar

1. **Hosilalar ayirmasining tartibini chalkashtirish:**
   Formulada qat'iy $\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}$ tartibi mavjud. Ko'pchilik talabalar birinchi $P$ turgani uchun $\frac{\partial P}{\partial y} - \frac{\partial Q}{\partial x}$ deb yozib, butunlay teskari ishorali natija oladilar.
2. **Konturning yo'nalishiga befarqlik:**
   Agar masalada "soat mili bo'yicha" deyilsa, hosil bo'lgan ikki karrali integral oldiga albatta minus qo'yish shart.
3. **Maxsus (uzilish) nuqtalarini e'tibordan qochirish:**
   Masalan, $\oint \frac{-y dx + x dy}{x^2 + y^2}$ integralida $\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} = 0$ bo'lsa-da, koordinata boshida $(0, 0)$ funksiya aniqlanmagan. Shuning uchun koordinata boshini o'z ichiga olgan kontur uchun integral 0 ga emas, $2\pi$ ga teng bo'ladi!

---

## 🎯 Mustaqil Yechish Uchun Masalalar

1. Grin formulasi orqali hisoblang: $\oint_L (2xy \, dx + x^2 \, dy)$, bu yerda $L$ — $(0,0), (1,0), (1,1)$ uchli uchburchak konturi (musbat yo'nalish).
2. Grin formulasi bilan hisoblang: $\oint_L ((e^x + y^2) dx + (x + \sin y) dy)$, bu yerda $L: x^2 + y^2 = 4$.
3. $x = a(t - \sin t), y = a(1 - \cos t)$ sikloida bitta arkasi va $Ox$ o'qi bilan chegaralangan soha yuzini kontur integrali yordamida hisoblang ($0 \le t \le 2\pi$).

<details style="margin-top: 1rem; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); cursor: pointer;">
<summary style="font-weight: 700; color: var(--primary);">Javoblar va Ko'rsatmalar</summary>

**1-masala:** $P = 2xy, Q = x^2 \implies \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} = 2x - 2x = 0$.
Maydon potensial, yopiq kontur bo'yicha integral aynan 0 ga teng.

**2-masala:** $P = e^x + y^2, Q = x + \sin y \implies Q'_x - P'_y = 1 - 2y$.
$\iint_D (1 - 2y) dx dy = \iint_D 1 dx dy - 2 \iint_D y dx dy$. Simmetriyaga ko'ra $\iint_D y dx dy = 0$.
Demak: $1 \cdot S(D) = \pi (2^2) = 4\pi$.

**3-masala:** $S = -\oint y \, dx$. $y = 0$ kesmada $y=0$. Arkada esa:
$S = -\int_{2\pi}^0 a(1-\cos t) a(1-\cos t) dt = a^2 \int_0^{2\pi} (1-\cos t)^2 dt = 3\pi a^2$.

</details>

---

## 💡 Xulosa va Imtihon Maslahatlari

- Grin formulasi — murakkab kontur integrallarini ikki karrali integrallarga yoki aksincha, soha yuzlarini kontur integrallariga aylantiruvchi qulay ko'prikdir.
- Eslab qolish formulasi: **$\oint = \iint (\text{o'ng hosila} - \text{chap hosila})$**, ya'ni $dy$ oldidagidan $x$ bo'yicha hosila minus $dx$ oldidagidan $y$ bo'yicha hosila.
