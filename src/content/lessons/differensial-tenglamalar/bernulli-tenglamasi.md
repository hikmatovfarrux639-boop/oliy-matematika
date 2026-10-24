---
title: "Bernulli differensial tenglamasi va uni yechish usullari"
module: "differensial-tenglamalar"
order: 5
description: "Nochiziqli 1-tartibli Bernulli tenglamasi: z = y^(1-n) chiziqlashtirish usuli, Iogann Bernulli y = uv usuli, y = 0 maxsus yechimi va imtihon amaliyoti."
---

## Kirish: Chiziqsizlikdan chiziqlilikka ko'prik

Oliy matematika kursida 1-tartibli chiziqsiz tenglamalar orasida eng go'zal va qulay yechiladigani — bu mashhur **Bernulli differensial tenglamasi**dir. U XVII asr oxirida shveytsariyalik buyuk matematik Yakob Bernulli tomonidan ilgari surilgan va uning ukasi Iogann Bernulli tomonidan to'liq yechilgan.

Bernulli tenglamasi aerodinamikada qarshilik kuchiga ega jism harakati, elektr zanjirlaridagi nochiziqli tok va biologik populyatsiyalar dinamikasida keng uchraydi.

---

## 1. Bernulli tenglamasining umumiy ko'rinishi

> **Ta'rif:** Quyidagi ko'rinishdagi 1-tartibli differensial tenglama **Bernulli tenglamasi** deyiladi:
>
> $$
> y' + P(x)y = Q(x) \cdot y^n
> $$
>
> Bu yerda $P(x)$ va $Q(x)$ — $x$ ga bog'liq uzluksiz funksiyalar, $n$ esa ixtiyoriy o'zgarmas haqiqiy son.

### Maxsus holatlar tahlili:
- Agar $n = 0$ bo'lsa: $y' + P(x)y = Q(x)$ — odatiy **chiziqli bir jinsli bo'lmagan** tenglama bo'ladi.
- Agar $n = 1$ bo'lsa: $y' + [P(x) - Q(x)]y = 0$ — **o'zgaruvchilari ajraladigan** bir jinsli tenglamaga aylanadi.
- Shu sababli, Bernulli tenglamasi mustaqil nochiziqli sinf sifatida faqat **$n \neq 0$ va $n \neq 1$** bo'lganda o'rganiladi!

---

## 2. Bernulli tenglamasini yechishning 2 asosiy usuli

### 1-usul: Chiziqlashtiruvchi almashtirish ($z = y^{1-n}$)
1. Tenglamaning ikkala tomonini $y^n$ ga bo'lamiz ($y \neq 0$):
   $$
   y^{-n} y' + P(x) y^{1-n} = Q(x)
   $$
2. Yangi noma'lum funksiya kiritamiz:
   $$
   z = y^{1-n} \implies z' = (1 - n) y^{-n} y' \implies y^{-n} y' = \frac{z'}{1 - n}
   $$
3. Tenglamaga qo'yamiz:
   $$
   \frac{z'}{1 - n} + P(x) z = Q(x) \implies z' + (1 - n)P(x) z = (1 - n)Q(x)
   $$
Bu $z(x)$ ga nisbatan **oddiy 1-tartibli chiziqli differensial tenglamadir**! Uni yechib $z$ topiladi va $y = z^{\frac{1}{1-n}}$ orqali $y$ ga qaytiladi.

---

### 2-usul: Iogann Bernulli usuli ($y = u \cdot v$)
Bu usul yangi $z$ formulasini yodda saqlashni talab qilmaydi:
1. Yechimni ikki noma'lum funksiyaning ko'paytmasi shaklida izlaymiz:
   $$
   y = u(x) \cdot v(x) \implies y' = u'v + uv'
   $$
2. Tenglamaga qo'yamiz:
   $$
   u'v + uv' + P(x)uv = Q(x) u^n v^n \implies u'v + u\big(v' + P(x)v\big) = Q(x) u^n v^n
   $$
3. $v' + P(x)v = 0$ shartdan xususiy $v(x)$ funksiya topiladi.
4. Natijada $u$ funksiya uchun o'zgaruvchilari ajraladigan tenglama hosil bo'ladi.

---

## 3. Amaliy masalalar va ko'p usulli yechimlar

### 1-masala: Bernulli tenglamasini 2 xil usulda to'liq yechish

Tenglamani yeching:
$$
y' + \frac{y}{x} = x y^2
$$

Bu yerda $P(x) = \frac{1}{x}$, $Q(x) = x$, $n = 2$.
$n = 2 > 0$ bo'lganligi sababli, **$y = 0$** tenglamaning xususiy yechimidir.

#### 1-usul: $z = y^{1-n} = y^{1-2} = y^{-1} = \frac{1}{y}$ almashtirish
1. Tenglamani $y^2$ ga bo'lamiz:
   $$
   \frac{y'}{y^2} + \frac{1}{x} \cdot \frac{1}{y} = x
   $$
2. $z = \frac{1}{y} \implies z' = -\frac{y'}{y^2} \implies \frac{y'}{y^2} = -z'$.
3. Tenglamaga qo'yamiz:
   $$
   -z' + \frac{z}{x} = x \implies z' - \frac{1}{x} z = -x
   $$
4. Chiziqli tenglamaning integrallovchi ko'paytuvchisi:
   $$
   \mu(x) = e^{-\int \frac{1}{x} dx} = e^{-\ln|x|} = \frac{1}{x}
   $$
5. Tenglamani $\frac{1}{x}$ ga ko'paytiramiz:
   $$
   \left(\frac{z}{x}\right)' = -1 \implies \frac{z}{x} = -x + C \implies z = C x - x^2
   $$
6. $y$ ga qaytamiz:
   $$
   \frac{1}{y} = C x - x^2 \implies y = \frac{1}{C x - x^2}
   $$
   Shuningdek, $y = 0$ ham yechimdir.

#### 2-usul: $y = uv$ Bernulli ko'paytma usuli
1. $y = uv \implies y' = u'v + uv'$.
2. $u'v + u\left(v' + \frac{v}{x}\right) = x u^2 v^2$.
3. $v' + \frac{v}{x} = 0 \implies \frac{dv}{v} = -\frac{dx}{x} \implies v = \frac{1}{x}$.
4. Tenglamaga qo'yamiz:
   $$
   u' \cdot \frac{1}{x} = x u^2 \cdot \frac{1}{x^2} \implies \frac{u'}{x} = \frac{u^2}{x} \implies u' = u^2
   $$
5. $\frac{du}{u^2} = dx \implies -\frac{1}{u} = x - C_1 \implies u = \frac{1}{C_1 - x}$.
6. $y = uv = \frac{1}{x(C_1 - x)} = \frac{1}{C_1 x - x^2}$.
Ikkala usul ham aynan bir xil natijaga olib keldi!

---

## 4. Imtihondagi asosiy tuzoqlar

> [!WARNING] Imtihondagi tuzoqlar
> 1. **$y = 0$ maxsus yechimini javobga yozishni unutish:**
>    Tenglamani $y^n$ ga bo'lishda $y \neq 0$ sharti qo'yiladi. Agar $n > 0$ bo'lsa, $y = 0$ funksiya har doim boshlang'ich tenglamani $0 = 0$ ga aylantiradi. Uni javobda alohida ko'rsatmaslik imtihonda ball yo'qotilishiga sabab bo'ladi!
> 2. **$z = y^{1-n}$ dagi ishora xatosi:**
>    Agar $n = 3$ bo'lsa, $z = y^{-2} = \frac{1}{y^2}$. Uning hosilasi $z' = -2 y^{-3} y'$. Talabalar ko'pincha oldidagi $(-2)$ koeffitsiyentni tenglamaning o'ng tomoniga ko'paytirishni unutib qo'yishadi.
> 3. **$x$ ga nisbatan Bernulli tenglamasi:**
>    Ba'zida tenglama $y$ ga nisbatan murakkab bo'lib, $x$ ga nisbatan Bernulli tenglamasi shaklida keladi: $\frac{dx}{dy} + P(y)x = Q(y)x^n$. Agar $y'$ ni ajratganda maxraj murakkab bo'lsa, teskari hosila $\frac{dx}{dy} = \frac{1}{y'}$ orqali tekshirishni unutmang!

---

## 5. Mustaqil yechish uchun amaliy mashqlar

### 1-mashq
Ushbu Bernulli tenglamasini yeching:
$$
y' + 2xy = 2x y^3
$$

<details>
<summary>👉 Yechimni tekshirish</summary>

$n = 3$. $y = 0$ — xususiy yechim.
1. $y^3$ ga bo'lamiz: $y^{-3}y' + 2x y^{-2} = 2x$.
2. $z = y^{-2} \implies z' = -2y^{-3}y' \implies y^{-3}y' = -\frac{1}{2}z'$.
3. $-\frac{1}{2}z' + 2xz = 2x \implies z' - 4xz = -4x$.
4. Chiziqli tenglamani yechamiz:
   $z = e^{2x^2} \left(\int -4x e^{-2x^2} dx + C\right) = e^{2x^2} (e^{-2x^2} + C) = 1 + C e^{2x^2}$.
5. $y^{-2} = 1 + C e^{2x^2} \implies y = \pm \frac{1}{\sqrt{1 + C e^{2x^2}}}$, hamda $y = 0$.
</details>

### 2-mashq
Koshi masalasini yeching:
$$
x y' + y = y^2 \ln x, \quad y(1) = 1
$$

<details>
<summary>👉 Yechimni tekshirish</summary>

1. $x$ ga bo'lamiz: $y' + \frac{1}{x}y = \frac{\ln x}{x} y^2$ ($n = 2$).
2. $z = y^{-1} \implies z' - \frac{1}{x}z = -\frac{\ln x}{x}$.
3. Integrallovchi ko'paytuvchi: $\frac{1}{x}$.
   $\left(\frac{z}{x}\right)' = -\frac{\ln x}{x^2}$.
   Integrallab: $\frac{z}{x} = \frac{\ln x + 1}{x} + C \implies z = \ln x + 1 + Cx$.
4. $y = \frac{1}{\ln x + 1 + Cx}$.
5. $y(1) = 1 \implies 1 = \frac{1}{0 + 1 + C} \implies 1 + C = 1 \implies C = 0$.
Xususiy yechim:
$$
y = \frac{1}{\ln x + 1}
$$
</details>
