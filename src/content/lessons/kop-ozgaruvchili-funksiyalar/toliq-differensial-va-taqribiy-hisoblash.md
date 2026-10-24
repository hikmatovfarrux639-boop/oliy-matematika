---
title: "To'liq differensial va taqribiy hisoblash"
module: "kop-ozgaruvchili-funksiyalar"
order: 3
description: "To'liq orttirma, to'liq differensial, differensial shaklining invariantligi, taqribiy hisoblashlar va xatoliklarni ko'p usulda baholash."
---

## Kirish: Kichik o'zgarishlarning yig'indisi

Bir o'zgaruvchili funksiyalarda faqat bitta argument o'zgarishi mumkin edi ($dy = f'(x) dx$). Ammo ko'p o'lchamli dunyoda barcha parametrlar bir vaqtning o'zida o'zgarishi odatiy holdir:
- To'g'ri to'rtburchakli yer maydonining yuzi $S = x \cdot y$: eni ham ($\Delta x$), bo'yi ham ($\Delta y$) o'zgarganda umumiy maydon qanchaga o'zgaradi?
- Elektr zanjirida Om qonuni: $I = \frac{U}{R}$ — ham kuchlanish $U$, ham qarshilik $R$ bir vaqtda o'zgarganda tok kuchi qanchaga o'zgaradi?
- Jismning kinetik energiyasi: $E = \frac{1}{2} m v^2$ — ham massa $m$, ham tezlik $v$ o'zgarganda energiya tebranishi qanday bo'ladi?

Bunday ko'p omilli o'zgarishlarning bosh chiziqli qismini aniqlash uchun **to'liq differensial** apparati qo'llaniladi.

---

## 1. To'liq orttirma va Differensiallanuvchanlik

Faraz qilaylik, $z = f(x, y)$ funksiya biror sohada aniqlangan bo'lsin. Argumentlar mos ravishda $\Delta x$ va $\Delta y$ orttirmalar olganda, funksiyaning **to'liq orttirmasi**:

$$
\Delta z = f(x + \Delta x, \, y + \Delta y) - f(x, y)
$$

> **Differensiallanuvchanlik ta'rifi:**
> Agar funksiyaning to'liq orttirmasini quyidagi ko'rinishda ifodalash mumkin bo'lsa:
>
> $$
> \Delta z = A \cdot \Delta x + B \cdot \Delta y + \alpha(\Delta x, \Delta y) \cdot \Delta x + \beta(\Delta x, \Delta y) \cdot \Delta y
> $$
>
> bu yerda $\Delta x \to 0, \Delta y \to 0$ da $\alpha, \beta \to 0$, u holda $f(x, y)$ funksiya berilgan nuqtada **differensiallanuvchi** deyiladi.
>
> Bu orttirmaning $\Delta x$ va $\Delta y$ larga nisbatan bosh chiziqli qismi $A \Delta x + B \Delta y$ funksiyaning **to'liq differensiali** $dz$ deb ataladi.

### Asosiy teorema:
Agar $z = f(x, y)$ funksiya nuqtada differensiallanuvchi bo'lsa, uning xususiy hosilalari mavjud bo'lib:
$$
A = \frac{\partial z}{\partial x}, \qquad B = \frac{\partial z}{\partial y}
$$
tengliklar o'rinli bo'ladi.

---

## 2. To'liq differensial formulasi

Erkli o'zgaruvchilar uchun $dx = \Delta x$ va $dy = \Delta y$ deb qabul qilingani sababli, ikki o'zgaruvchili funksiyaning **to'liq differensiali**:

$$
dz = \frac{\partial z}{\partial x} dx + \frac{\partial z}{\partial y} dy
$$

Agar funksiya uch yoki undan ortiq o'zgaruvchiga bog'liq bo'lsa ($u = f(x, y, z)$):
$$
du = \frac{\partial u}{\partial x} dx + \frac{\partial u}{\partial y} dy + \frac{\partial u}{\partial z} dz
$$

### Differensial shaklining invariantligi:
To'liq differensialning ajoyib xossasi: agar $x$ va $y$ erkli o'zgaruvchilar bo'lmay, o'zlari ham biror boshqa $u, v$ parametrlarga bog'liq bo'lsa ham ($x = x(u, v), y = y(u, v)$), to'liq differensial shakli o'zgarmaydi:
$$
dz = z'_x dx + z'_y dy
$$
Bu differensial shaklining **birinchi tartibli invariantlik xossasi** deyiladi.

---

## 3. Taqribiy hisoblash formulasi

$\Delta x$ va $\Delta y$ nolga intilganda, funksiyaning to'liq orttirmasi uning to'liq differensialiga juda yaqin bo'ladi:
$$
\Delta z \approx dz
$$
Bundan taqribiy hisoblashning fundamental amaliy formulasi kelib chiqadi:

$$
f(x_0 + \Delta x, \, y_0 + \Delta y) \approx f(x_0, y_0) + f'_x(x_0, y_0) \Delta x + f'_y(x_0, y_0) \Delta y
$$

Uch o'zgaruvchi uchun:
$$
f(x_0+\Delta x, y_0+\Delta y, z_0+\Delta z) \approx f(P_0) + f'_x(P_0)\Delta x + f'_y(P_0)\Delta y + f'_z(P_0)\Delta z
$$

---

## 4. O'lchovlardagi xatoliklarni baholash

Laboratoriya va muhandislik amaliyotida $x, y$ kattaliklar o'lchanganda ularning chetki xatoliklari $\Delta x, \Delta y$ ma'lum bo'ladi:
- **Absolyut xatolik bahosi:**
  $$
  \Delta z \approx \left\lvert \frac{\partial z}{\partial x} \right\rvert \Delta x + \left\lvert \frac{\partial z}{\partial y} \right\rvert \Delta y
  $$
- **Nisbiy xatolik bahosi ($\delta$):**
  $$
  \delta z = \frac{\Delta z}{|z|} = \left\lvert \frac{\partial \ln z}{\partial x} \right\rvert \Delta x + \left\lvert \frac{\partial \ln z}{\partial y} \right\rvert \Delta y
  $$

---

## Bitta masalani 2 xil usulda yechish va solishtirish

> **Masala:** To'g'ri to'rtburchakli metall qutining o'lchamlari $x = 10$ sm, $y = 20$ sm, $z = 30$ sm. Harorat o'zgarishi natijasida o'lchamlar mos ravishda $x = 10.1$ sm, $y = 19.8$ sm, $z = 30.2$ sm ga o'zgardi. Quti hajmining o'zgarishi $\Delta V$ ni taqribiy hisoblang va nisbiy o'zgarishini aniqlang.

### 1-usul: To'liq differensial formulasini to'g'ridan-to'g'ri qo'llash
Hajm formulasi: $V(x, y, z) = x \cdot y \cdot z$.
1. Boshlang'ich nuqta va hajm:
   $$x_0 = 10, \quad y_0 = 20, \quad z_0 = 30 \implies V_0 = 10 \cdot 20 \cdot 30 = 6000 \text{ sm}^3$$
2. O'lchamlarning orttirmalari:
   $$\Delta x = 10.1 - 10 = +0.1 \text{ sm}$$
   $$\Delta y = 19.8 - 20 = -0.2 \text{ sm}$$
   $$\Delta z = 30.2 - 30 = +0.2 \text{ sm}$$
3. Xususiy hosilalar:
   $$V'_x = yz \implies V'_x(P_0) = 20 \cdot 30 = 600$$
   $$V'_y = xz \implies V'_y(P_0) = 10 \cdot 30 = 300$$
   $$V'_z = xy \implies V'_z(P_0) = 10 \cdot 20 = 200$$
4. To'liq differensial:
   $$\Delta V \approx dV = 600 \cdot (0.1) + 300 \cdot (-0.2) + 200 \cdot (0.2)$$
   $$= 60 - 60 + 40 = \mathbf{+40 \text{ sm}^3}$$
5. Nisbiy o'zgarish:
   $$\frac{\Delta V}{V_0} \approx \frac{40}{6000} = \frac{1}{150} \approx \mathbf{+0.67\%}$$

### 2-usul: Logarifmik differensiallash orqali yechish
Hajm ko'paytma shaklida berilgani sababli, har ikkala tomonni natural logarifmlaymiz:
$$
\ln V = \ln(x \cdot y \cdot z) = \ln x + \ln y + \ln z
$$
Har ikkala tomondan to'liq differensial olamiz:
$$
\frac{dV}{V} = \frac{dx}{x} + \frac{dy}{y} + \frac{dz}{z}
$$
Orttirmalarni qo'yamiz:
$$
\frac{\Delta V}{V} \approx \frac{0.1}{10} + \frac{-0.2}{20} + \frac{0.2}{30} = 0.01 - 0.01 + \frac{1}{150} = \frac{1}{150} \approx \mathbf{+0.67\%}
$$
Absolyut hajm o'zgarishi:
$$
\Delta V \approx V_0 \cdot \frac{1}{150} = 6000 \cdot \frac{1}{150} = \mathbf{+40 \text{ sm}^3}
$$

*Xulosa:* Ko'paytmalar va darajalardan iborat funksiyalarda 2-usul (logarifmik differensiallash) hisob-kitobni sezilarli darajada soddalashtiradi!

---

> [!WARNING] Imtihondagi tuzoqlar va ko'p uchraydigan xatoliklar
> 1. **Trigonometrik burchak orttirmalari faqat RADIANda bo'lishi shart:**
>    Agar masalada $z = \sin(x) \cos(y)$ berilib, $x$ burchak $1^\circ$ ga oshdi deyilsa, $\Delta x = 1$ deb qo'yish halokatli xatodir! Radian o'lchoviga o'tish shart:
>    $$\Delta x = 1^\circ = \frac{\pi}{180} \approx 0.01745 \text{ rad}$$
>    Aks holda natija deyarli 57 barobar xato chiqadi!
> 2. **Orttirma ishorasi:** Agar o'lcham kamaysa, uning orttirmasi manfiy bo'ladi ($\Delta y = -0.2$). Manfiy ishorani yo'qotib qo'yish butun hisob-kitobni xato qiladi.
> 3. **Xususiy differensial bilan to'liq differensialni chalkashtirish:**
>    $d_x z = \frac{\partial z}{\partial x} dx$ — faqat $x$ bo'yicha xususiy differensial. To'liq differensial $dz$ esa barcha o'zgaruvchilar bo'yicha differensiallarning yig'indisidir.

---

## Mustaqil yechish uchun amaliy mashqlar

1. $z = \arctan\left(\frac{y}{x}\right)$ funksiyaning to'liq differensiali $dz$ ni toping va soddalashtiring.
2. $\sqrt{(1.04)^2 + (1.97)^3}$ ifodaning taqribiy qiymatini to'liq differensial yordamida hisoblang ($x_0 = 1, y_0 = 2$).
3. Silindrning radiusi $R = 2$ m, balandligi $H = 5$ m. Agar o'lchashdagi absolyut xatoliklar $\Delta R = 0.02$ m va $\Delta H = 0.05$ m bo'lsa, silindr hajmi $V = \pi R^2 H$ ning chetki absolyut va nisbiy xatoligini toping.

<details style="margin-top: 1rem; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); cursor: pointer;">
  <summary style="font-weight: 700; color: var(--primary);">👉 Yechimni tekshirish</summary>
  <div style="margin-top: 0.75rem; padding-top: 0.75rem; border-top: 1px solid var(--border-color); line-height: 1.7;">
    <p><strong>1-masala:</strong></p>
    <p>$z'_x = \frac{1}{1 + (y/x)^2} \left(-\frac{y}{x^2}\right) = -\frac{y}{x^2 + y^2}$.</p>
    <p>$z'_y = \frac{1}{1 + (y/x)^2} \left(\frac{1}{x}\right) = \frac{x}{x^2 + y^2}$.</p>
    <p>To'liq differensial: $\mathbf{dz = \frac{-y\,dx + x\,dy}{x^2 + y^2}}$. (Bu maydonlar nazariyasida juda muhim differensial shakldir!).</p>

    <hr style="margin: 0.75rem 0; border: none; border-top: 1px dashed var(--border-color);" />

    <p><strong>2-masala:</strong></p>
    <p>$f(x, y) = \sqrt{x^2 + y^3}$. Boshlang'ich nuqta: $x_0 = 1, y_0 = 2 \implies f(1, 2) = \sqrt{1 + 8} = 3$.</p>
    <p>$\Delta x = +0.04, \quad \Delta y = -0.03$.</p>
    <p>$f'_x = \frac{2x}{2\sqrt{x^2+y^3}} = \frac{x}{\sqrt{x^2+y^3}} \implies f'_x(1, 2) = \frac{1}{3}$.</p>
    <p>$f'_y = \frac{3y^2}{2\sqrt{x^2+y^3}} \implies f'_y(1, 2) = \frac{3(4)}{2(3)} = 2$.</p>
    <p>$f(1.04, 1.97) \approx 3 + \frac{1}{3}(0.04) + 2(-0.03) = 3 + 0.0133 - 0.06 = \mathbf{2.9533}$.</p>

    <hr style="margin: 0.75rem 0; border: none; border-top: 1px dashed var(--border-color);" />

    <p><strong>3-masala:</strong></p>
    <p>$V = \pi R^2 H \implies V_0 = \pi (2)^2 (5) = 20\pi \approx 62.83 \text{ m}^3$.</p>
    <p>1) Logarifmlash: $\ln V = \ln\pi + 2\ln R + \ln H \implies \delta V = \frac{\Delta V}{V} \approx 2\frac{\Delta R}{R} + \frac{\Delta H}{H}$.</p>
    <p>$\delta V = 2\left(\frac{0.02}{2}\right) + \frac{0.05}{5} = 2(0.01) + 0.01 = 0.02 + 0.01 = \mathbf{0.03 \quad (3\%)}$.</p>
    <p>2) Absolyut xatolik: $\Delta V \approx V_0 \cdot \delta V = 20\pi \cdot 0.03 = \mathbf{0.6\pi \approx 1.885 \text{ m}^3}$.</p>
  </div>
</details>
