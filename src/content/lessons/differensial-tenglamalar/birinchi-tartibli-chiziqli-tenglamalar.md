---
title: "Birinchi tartibli chiziqli tenglamalar va Bernulli usuli"
module: "differensial-tenglamalar"
order: 3
description: "1-tartibli chiziqli differensial tenglamalar, Bernulli almashtirishi y = uv, Lagranj o'zgarmasni variatsiyalash usuli, integrallovchi ko'paytuvchi va Koshi masalasi."
---

## Kirish: Eng ko'p uchraydigan chiziqli modellar

Fizika, elektrotexnika (RL zanjirlari: $L \frac{dI}{dt} + R I = E(t)$), iqtisodiy o'sish modellarida doimo noma'lum funksiya $y$ va uning hosilasi $y'$ faqat **birinchi darajada** qatnashadi.

Bunday tenglamalar **1-tartibli chiziqli differensial tenglamalar** deb ataladi va ularni yechish uchun matematikada uchta ajoyib va universal usul mavjud:
1. **Bernulli usuli ($y = uv$)** — hisoblash uchun eng qulay va sevimli usul;
2. **Lagranj usuli (O'zgarmasni variatsiyalash)** — klassik nazariy usul;
3. **Integrallovchi ko'paytuvchi usuli** — tezkor formula usuli.

---

## 1. Standart ko'rinishi va turlari

> **Ta'rif:** Quyidagi ko'rinishdagi tenglama **birinchi tartibli chiziqli differensial tenglama** deyiladi:
>
> 
$$
> y' + P(x) \cdot y = Q(x)
> 
$$
>
> bu yerda $P(x)$ va $Q(x)$ — $x$ ga bog'liq uzluksiz funksiyalar (yoki o'zgarmas sonlar).
> - Agar $Q(x) = 0$ bo'lsa: $y' + P(x)y = 0$ — **bir jinsli chiziqli tenglama** (o'zgaruvchilari oson ajraladi);
> - Agar $Q(x) \neq 0$ bo'lsa: **bir jinsli bo'lmagan chiziqli tenglama** deyiladi.

> 💡 **Standart shaklga keltirish:**
> Agar $y'$ oldida biror koeffitsiyent turgan bo'lsa (masalan, $x y' + 2y = x^3$), avval butun tenglamani shu $x$ ga bo'lib, $y'$ oldini bo'shatib olish shart: $y' + \frac{2}{x}y = x^2$.

---

## 2. 1-usul: Bernulli usuli ($y = u \cdot v$) — Eng ommabop usul!

Bu usulda noma'lum funksiya $y(x)$ ikkita yangi noma'lum funksiyaning ko'paytmasi shaklida qidiriladi:

$$
y = u(x) \cdot v(x) \implies y' = u'v + uv'
$$

Buni asosiy tenglamaga qo'yamiz:
$$
u'v + uv' + P(x)uv = Q(x)
$$
O'rtadagi hadlardan $u$ ni qavsdan chiqaramiz:
$$
u'v + u[v' + P(x)v] = Q(x)
$$

Endi $v(x)$ funksiyani shunday erkin tanlaymizki, qavs ichi nolga teng bo'lsin:

### 1-qadam ($v$ ni topish):
$$
v' + P(x)v = 0 \implies \frac{dv}{dx} = -P(x)v \implies \frac{dv}{v} = -P(x)dx
$$
Integrallaymiz (bu yerda bitta xususiy $v$ yetarli, shuning uchun $+C$ shart emas):
$$
v(x) = e^{-\int P(x)dx}
$$

### 2-qadam ($u$ ni topish):
Qavs nol bo'lgani sababli tenglama soddalashadi:
$$
u' \cdot v(x) = Q(x) \implies u' = \frac{Q(x)}{v(x)}
$$
Endi $u$ ni integrallaymiz (bu yerda $+C$ albatta qo'shiladi!):
$$
u(x) = \int \frac{Q(x)}{v(x)} \, dx + C
$$

### 3-qadam:
Topilgan $u$ va $v$ ni ko'paytirib, umumiy yechimni yozamiz:
$$
y = u(x) \cdot v(x)
$$

---

## 3. 2-usul: Integrallovchi ko'paytuvchi (Integrating Factor)

Tenglamaning ikkala tomonini $\mu(x) = e^{\int P(x)dx}$ ifodaga ko'paytirsak, chap tomon to'g'ridan-to'g'ri ko'paytmaning hosilasiga aylanadi:

$$
(y \cdot e^{\int P(x)dx})' = Q(x) \cdot e^{\int P(x)dx}
$$

Ikkala tomonni integrallasak, universal tayyor yechim formulasi hosil bo'ladi:

$$
y = e^{-\int P(x)dx} \left( \int Q(x) e^{\int P(x)dx} \, dx + C \right)
$$

---

## 4. Amaliy misollar va batafsil yechimlar

### 1-misol: Bernulli usuli bilan yechish
Tenglamaning umumiy yechimini toping:
$$
y' - \frac{2}{x}y = x^3 \quad (x > 0)
$$

**Yechilishi:**
Bu yerda $P(x) = -\frac{2}{x}$, $Q(x) = x^3$.
1. $y = uv \implies y' = u'v + uv'$ almashtirish kiritamiz:
   $$u'v + uv' - \frac{2}{x}uv = x^3 \implies u'v + u\left( v' - \frac{2}{x}v \right) = x^3$$
2. $v$ ni topish uchun qavsni nolga tenglashtiramiz:
   $$v' - \frac{2}{x}v = 0 \implies \frac{dv}{dx} = \frac{2}{x}v \implies \frac{dv}{v} = \frac{2}{x}dx$$
   $$\int \frac{dv}{v} = 2 \int \frac{dx}{x} \implies \ln|v| = 2\ln|x| = \ln(x^2) \implies v = x^2$$
3. $u$ ni topamiz:
   $$u' \cdot v = x^3 \implies u' \cdot x^2 = x^3 \implies u' = x$$
   Integrallaymiz:
   $$u = \int x \, dx = \frac{x^2}{2} + C$$
4. Umumiy yechim:
   $$y = u \cdot v = \left( \frac{x^2}{2} + C \right) \cdot x^2 = \frac{x^4}{2} + C x^2$$

**Javob:** $y = \frac{x^4}{2} + C x^2$

---

### 2-misol: Koshi masalasi (Boshlang'ich shart bilan)
Tenglamaning $y(0) = 4$ boshlang'ich shartni qanoatlantiruvchi xususiy yechimini toping:
$$
y' + 2xy = 4x
$$

**Yechilishi:**
$P(x) = 2x, Q(x) = 4x$.
1. $y = uv$:
   $$u'v + u(v' + 2xv) = 4x$$
2. $v' + 2xv = 0 \implies \frac{dv}{v} = -2x \, dx \implies \ln|v| = -x^2 \implies v = e^{-x^2}$.
3. $u' \cdot e^{-x^2} = 4x \implies u' = 4x e^{x^2}$.
   $$u = \int 4x e^{x^2} \, dx = 2 \int e^{x^2} \, d(x^2) = 2e^{x^2} + C$$
4. Umumiy yechim:
   $$y = u \cdot v = (2e^{x^2} + C) \cdot e^{-x^2} = 2 + C e^{-x^2}$$
5. Boshlang'ich shartni qo'yamiz ($x = 0$ da $y = 4$):
   $$4 = 2 + C e^0 \implies 4 = 2 + C \implies C = 2$$
6. Xususiy yechim:
   $$y = 2 + 2e^{-x^2}$$

**Javob:** $y = 2 + 2e^{-x^2}$

---

### 3-misol: Dastlab standart shaklda bo'lmagan tenglama
Tenglamani yeching:
$$
x y' + y = \sin x
$$

**Yechilishi:**
E'tibor bering: tenglamaning chap tomoni $(x \cdot y)'$ ning aynan o'zi!
Chunki ko'paytmaning hosilasi: $(xy)' = (x)'y + x(y)' = y + xy'$.
Demak:
$$
(x \cdot y)' = \sin x
$$
Ikkala tomonni to'g'ridan-to'g'ri integrallaymiz:
$$
x \cdot y = \int \sin x \, dx = -\cos x + C
$$
Ikkala tomonni $x$ ga bo'lamiz:
$$
y = \frac{-\cos x + C}{x} = \frac{C - \cos x}{x}
$$

**Javob:** $y = \frac{C - \cos x}{x}$

---

## ⚠️ Talabalar ko'p yo'l qo'yadigan 3 ta jiddiy xato

1. **$y'$ oldidagi koeffitsiyentga bo'lishni unutish:**
   > Masalan, $(x^2 + 1)y' + 2xy = x$ tenglamasida $P(x) = 2x$ deb olish juda katta xato! Standart shaklga keltirish uchun avval butun tenglama $(x^2 + 1)$ ga bo'linishi kerak: $P(x) = \frac{2x}{x^2 + 1}$.

2. **$v$ ni topishda $+C$ qo'shib hisob-kitobni behuda murakkablashtirish:**
   > $v' + P(x)v = 0$ tenglamasini yechayotganda $+C$ yozish shart emas. Bizga shartni qanoatlantiruvchi **ixtiyoriy bitta xususiy $v$** yetarli. $+C$ faqat 2-bosqichda $u$ ni topayotganda qo'shiladi.

3. **$P(x)$ ning ishorasini adashtirish:**
   > Standart formula $y' + P(x)y = Q(x)$ dir. Agar tenglamada $y' - 3y = e^x$ bo'lsa, $P(x) = 3$ emas, balki **$P(x) = -3$** bo'ladi!

---

## 💡 Ustozdan maslahat

Chiziqli tenglamani yechishda doimo birinchi navbatda **Bernulli usulidan ($y = uv$)** foydalaning. Bu usul formulalarni yodda saqlashni talab qilmaydi va har doim bir xil ishonchli mexanizm bo'yicha ishlaydi.

---

## ✍️ Mustaqil yechish uchun mashqlar

1. $y' + y = e^{2x}$ tenglamaning umumiy yechimini toping.
2. $y' - \frac{1}{x}y = x^2$ tenglamani Bernulli usuli bilan yeching.
3. $y' + 2y = 6, \quad y(0) = 5$ Koshi masalasini yeching.
4. $x y' - 2y = 2x^4$ tenglamani umumiy ko'rinishga keltirib yeching.

<details style="margin-top: 1rem; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); cursor: pointer;">
  <summary style="font-weight: 700; color: var(--primary);">To'liq yechimlar va javoblar</summary>
  <div style="margin-top: 0.75rem; padding-top: 0.75rem; border-top: 1px solid var(--border-color);">
    <p><strong>1-masala:</strong> $v' + v = 0 \implies v = e^{-x}$. $u' e^{-x} = e^{2x} \implies u' = e^{3x} \implies u = \frac{1}{3}e^{3x} + C$. $y = uv = \frac{1}{3}e^{2x} + C e^{-x}$.</p>
    <p><strong>2-masala:</strong> $v' - \frac{v}{x} = 0 \implies v = x$. $u' x = x^2 \implies u' = x \implies u = \frac{x^2}{2} + C$. $y = \frac{x^3}{2} + Cx$.</p>
    <p><strong>3-masala:</strong> $v = e^{-2x}, u' e^{-2x} = 6 \implies u = 3e^{2x} + C \implies y = 3 + C e^{-2x}$. $y(0) = 3 + C = 5 \implies C = 2$. Javob: $y = 3 + 2e^{-2x}$.</p>
    <p><strong>4-masala:</strong> $x$ ga bo'lamiz: $y' - \frac{2}{x}y = 2x^3$. $v = x^2, u' x^2 = 2x^3 \implies u' = 2x \implies u = x^2 + C$. Javob: $y = x^4 + C x^2$.</p>
  </div>
</details>
