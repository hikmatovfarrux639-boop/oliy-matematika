---
title: "Rikkati differensial tenglamasi va uning yechish usullari"
description: "Nochiziqli y' + P y^2 + Q y + R = 0 Rikkati tenglamasi, xususiy yechim orqali Bernulli tenglamasiga keltirish va maxsus ko'rinishlar."
module: "differensial-tenglamalar"
order: 15
---

## 📌 Kirish va Fizik/Texnik Mohiyati

Klassik mexanika va zamonaviy boshqaruv nazariyasida uchraydigan ko'plab dinamik sistemalar o'z mohiyatiga ko'ra nochiziqlidir. Masalan, muhit qarshiligi tezlikning kvadratiga mutanosib bo'lgan hollarda jism harakati, zaryadlangan zarrachalarning o'zgaruvchan elektromagnit maydondagi dinamikasi hamda kvant mexanikasidagi bir o'lchovli statsionar Shryodinger tenglamasini 1-tartibli tenglamaga keltirish bevosita **Rikkati differensial tenglamasiga** olib keladi.

Zamonaviy avtomatika va robototexnikada optimal boshqaruvning markaziy ustuni hisoblangan **LQR (Linear-Quadratic Regulator)** algoritmi matritsali Rikkati tenglamasini yechishga asoslanadi. Italyan matematigi Yakopo Franchesko Rikkati (1676–1754) sharafiga nomlangan ushbu tenglama matematiklarga birinchi tartibli bo'lishiga qaramay, umumiy holda kvadraturalarda (elementar funksiyalar integrallari orqali) yechilmaydigan fundamental differensial tenglamalardan biri sifatida tanilgan.

---

## 📐 Asosiy Nazariya, Qoidalar va Teoremalar

### 1. Rikkati tenglamasining umumiy ko'rinishi

Birinchi tartibli nochiziqli differensial tenglama:
$$y' + P(x) y^2 + Q(x) y + R(x) = 0 \quad \text{yoki} \quad y' = a(x)y^2 + b(x)y + c(x)$$
ko'rinishida bo'lsa, u **Rikkati tenglamasi** deyiladi. Bu yerda $P(x), Q(x), R(x)$ — ma'lum uzluksiz funksiyalar va $P(x) \not\equiv 0$.

Xususiy hollar:
- Agar $P(x) \equiv 0$ bo'lsa, tenglama 1-tartibli **chiziqli tenglamaga** aylanadi.
- Agar $R(x) \equiv 0$ bo'lsa, tenglama $y' + Q(x)y + P(x)y^2 = 0$ ko'rinishidagi **Bernulli tenglamasiga** ($n=2$) aylanadi.

> **Liuvill teoremasi:**
> Rikkati tenglamasining umumiy yechimi ixtiyoriy $P(x), Q(x), R(x)$ funksiyalar uchun elementar funksiyalar va ularning integrallari orqali ifodalanishi mumkin emas.

Biroq, agar tenglamaning **bitta xususiy yechimi** $y_1(x)$ qandaydir usul bilan topilsa (yoki masalada berilsa), Rikkati tenglamasi to'liq integrallanadi!

---

### 2. Xususiy yechim yordamida Bernulli yoki Chiziqli tenglamaga keltirish

Faraz qilaylik, $y_1(x)$ — berilgan Rikkati tenglamasining biror xususiy yechimi bo'lsin:
$$y'_1 + P(x) y_1^2 + Q(x) y_1 + R(x) = 0$$

Umumiy yechimni quyidagi ko'rinishda qidiramiz:
$$y(x) = y_1(x) + u(x)$$

Hosilani tenglamaga qo'yamiz:
$$(y'_1 + u') + P(x)(y_1 + u)^2 + Q(x)(y_1 + u) + R(x) = 0$$
$$(y'_1 + P y_1^2 + Q y_1 + R) + u' + \big(2P(x)y_1(x) + Q(x)\big)u + P(x)u^2 = 0$$

Qavs ichidagi ifoda $y_1$ xususiy yechim bo'lgani sababli aynan nolga teng. Natijada yangi noma'lum $u(x)$ funksiyaga nisbatan **Bernulli tenglamasi** hosil bo'ladi:
$$u' + \big(2P(x)y_1(x) + Q(x)\big)u + P(x)u^2 = 0$$

Amaliyotda hisoblashni yanada soddalashtirish uchun darhol quyidagi almashtirish kiritiladi:
$$y(x) = y_1(x) + \frac{1}{z(x)}$$

U holda hosila $y' = y'_1 - \frac{z'}{z^2}$ bo'ladi. Tenglamaga qo'yib, $z^2$ ga ko'paytirsak, $z(x)$ ga nisbatan **1-tartibli chiziqli differensial tenglama** hosil bo'ladi:
$$z' - \big(2P(x)y_1(x) + Q(x)\big)z = P(x)$$

Ushbu chiziqli tenglama ixtiyoriy integrallovchi ko'paytuvchi yoki Lagranj variatsiya usuli orqali to'liq yechiladi.

---

### 3. Rikkati tenglamasining muhim xossalari

1. **Umumiy yechimning tuzilishi:**
   Chiziqli tenglamaning umumiy yechimi $z(x) = C \cdot z_0(x) + z_p(x)$ ko'rinishida bo'lganligi sababli, Rikkati tenglamasining umumiy yechimi integrallash doimiysi $C$ ga nisbatan **kasr-chiziqli** funksiya bo'ladi:
   $$y(x) = \frac{C \cdot \alpha(x) + \beta(x)}{C \cdot \gamma(x) + \delta(x)}$$

2. **To'rtta xususiy yechimning murakkab (anharmonik) nisbati:**
   Agar $y_1(x), y_2(x), y_3(x), y_4(x)$ — Rikkati tenglamasining to'rtta ixtiyoriy xususiy yechimlari bo'lsa, ularning anharmonik nisbati $x$ ga bog'liq bo'lmay, o'zgarmas qiymatga teng:
   $$\frac{y_4 - y_1}{y_4 - y_2} : \frac{y_3 - y_1}{y_3 - y_2} = \text{const}$$

---

## 📝 Qadamma-qadam Yechilgan Amaliy Misollar

### 1-misol: Xususiy yechimi ko'phad bo'lgan Rikkati tenglamasi
$$y' - y^2 + 2xy - x^2 - 1 = 0$$

**Yechish:**
1. Koeffitsiyentlar: $P(x) = -1, \quad Q(x) = 2x, \quad R(x) = -x^2 - 1$.
   Tenglamani qayta yozamiz: $y' = y^2 - 2xy + x^2 + 1 = (y - x)^2 + 1$.
2. Xususiy yechimni tanlaymiz: agar $y_1(x) = x$ deb olsak:
   $$y'_1 = 1 \implies 1 = (x - x)^2 + 1 \iff 1 = 1$$
   Tenglik ayniyatga aylandi! Demak, $y_1(x) = x$ — xususiy yechim.

3. Almashtirish bajaramiz:
   $$y = x + \frac{1}{z} \implies y' = 1 - \frac{z'}{z^2}$$
4. Tenglamaga qo'yamiz:
   $$1 - \frac{z'}{z^2} = \left(x + \frac{1}{z} - x\right)^2 + 1 = \frac{1}{z^2} + 1$$
   $$-\frac{z'}{z^2} = \frac{1}{z^2} \implies z' = -1$$
5. O'zgaruvchilarni ajratamiz:
   $$z(x) = -x + C$$
6. Dastlabki o'zgaruvchiga qaytamiz:
   $$y(x) = x + \frac{1}{C - x}$$

**Javob:** $y(x) = x + \frac{1}{C - x}$ hamda xususiy yechim $y(x) = x$ ($C \to \infty$).

---

### 2-misol: Maxsus ko'rinishdagi Rikkati tenglamasi
$$y' + y^2 = \frac{2}{x^2}$$

**Yechish:**
1. Bu yerda $P(x) = 1, \quad Q(x) = 0, \quad R(x) = -\frac{2}{x^2}$.
2. Xususiy yechimni $y_1 = \frac{a}{x}$ ko'rinishida qidiramiz:
   $$y'_1 = -\frac{a}{x^2}$$
   Tenglamaga qo'yamiz:
   $$-\frac{a}{x^2} + \frac{a^2}{x^2} = \frac{2}{x^2} \implies a^2 - a - 2 = 0 \implies (a - 2)(a + 1) = 0$$
   Ikkita ildiz mavjud: $a = 2$ yoki $a = -1$.
   Qulaylik uchun $a = 2$, ya'ni $y_1(x) = \frac{2}{x}$ ni tanlaymiz.

3. Almashtirish kiritamiz:
   $$y = \frac{2}{x} + \frac{1}{z} \implies y' = -\frac{2}{x^2} - \frac{z'}{z^2}$$
4. Tenglamaga qo'yamiz:
   $$-\frac{2}{x^2} - \frac{z'}{z^2} + \left(\frac{2}{x} + \frac{1}{z}\right)^2 = \frac{2}{x^2}$$
   $$-\frac{2}{x^2} - \frac{z'}{z^2} + \frac{4}{x^2} + \frac{4}{xz} + \frac{1}{z^2} = \frac{2}{x^2}$$
   $$-\frac{z'}{z^2} + \frac{4}{xz} + \frac{1}{z^2} = 0$$
5. Har ikkala tomonni $-z^2$ ga ko'paytiramiz:
   $$z' - \frac{4}{x}z = 1$$
6. Chiziqli tenglamani integrallovchi ko'paytuvchi yordamida yechamiz:
   $$\mu(x) = e^{\int -\frac{4}{x}dx} = e^{-4\ln x} = x^{-4}$$
   $$\frac{d}{dx}(z \cdot x^{-4}) = x^{-4} \implies z \cdot x^{-4} = \int x^{-4}dx = -\frac{1}{3}x^{-3} + C$$
   $$z(x) = C x^4 - \frac{1}{3}x$$
7. Umumiy yechim:
   $$y(x) = \frac{2}{x} + \frac{1}{C x^4 - \frac{1}{3}x} = \frac{2}{x} + \frac{3}{3Cx^4 - x}$$

**Javob:** $y(x) = \frac{2}{x} + \frac{3}{C_1 x^4 - x}$ va $y(x) = \frac{2}{x}$.

---

### 3-misol: Kasr darajali Rikkati tenglamasi
$$x^2 y' + x^2 y^2 - x y - 3 = 0$$

**Yechish:**
1. Tenglamani standart ko'rinishga keltiramiz ($x \neq 0$):
   $$y' + y^2 - \frac{1}{x}y - \frac{3}{x^2} = 0$$
   Bu yerda $P(x) = 1, \quad Q(x) = -\frac{1}{x}, \quad R(x) = -\frac{3}{x^2}$.
2. Xususiy yechimni $y_1 = \frac{k}{x}$ deb izlaymiz:
   $$y'_1 = -\frac{k}{x^2} \implies -\frac{k}{x^2} + \frac{k^2}{x^2} - \frac{k}{x^2} - \frac{3}{x^2} = 0$$
   $$k^2 - 2k - 3 = 0 \implies (k - 3)(k + 1) = 0$$
   $k = 3$ ni tanlaymiz, demak $y_1(x) = \frac{3}{x}$.

3. Almashtirish: $y = \frac{3}{x} + \frac{1}{z}$:
   Chiziqli tenglama formulasi bo'yicha:
   $$z' - \big(2P(x)y_1(x) + Q(x)\big)z = P(x)$$
   $$2P(x)y_1(x) + Q(x) = 2 \cdot 1 \cdot \frac{3}{x} - \frac{1}{x} = \frac{5}{x}$$
   $$z' - \frac{5}{x}z = 1$$
4. Chiziqli tenglamani yechamiz:
   $$z \cdot x^{-5} = \int x^{-5}dx = -\frac{1}{4}x^{-4} + C \implies z(x) = C x^5 - \frac{1}{4}x$$
5. Umumiy yechim:
   $$y(x) = \frac{3}{x} + \frac{1}{C x^5 - \frac{x}{4}} = \frac{3}{x} + \frac{4}{4Cx^5 - x}$$

**Javob:** $y(x) = \frac{3}{x} + \frac{4}{C_1 x^5 - x}$ va $y = \frac{3}{x}$.

---

### 4-misol: Koshi masalasi (ko'rsatkichli funksiya qatnashgan hol)
$$y' + y^2 - 2 e^x y + e^{2x} - e^x = 0, \quad y(0) = 2$$

**Yechish:**
1. Tenglamani qayta yozamiz:
   $$y' + (y - e^x)^2 - e^x = 0$$
2. Ko'rinib turibdiki, agar $y_1(x) = e^x$ bo'lsa:
   $$y'_1 = e^x \implies e^x + (e^x - e^x)^2 - e^x = 0 \iff 0 = 0$$
   Xususiy yechim: $y_1(x) = e^x$.
3. Almashtirish: $y(x) = e^x + \frac{1}{z}$.
   $$e^x - \frac{z'}{z^2} + \left(e^x + \frac{1}{z} - e^x\right)^2 - e^x = 0$$
   $$-\frac{z'}{z^2} + \frac{1}{z^2} = 0 \implies z' = 1$$
4. Integrallaymiz:
   $$z(x) = x + C$$
5. Umumiy yechim:
   $$y(x) = e^x + \frac{1}{x + C}$$
6. Boshlang'ich shart $y(0) = 2$ ni qo'llaymiz:
   $$2 = e^0 + \frac{1}{0 + C} \implies 2 = 1 + \frac{1}{C} \implies \frac{1}{C} = 1 \implies C = 1$$
7. Xususiy yechim:
   $$y(x) = e^x + \frac{1}{x + 1}$$

**Javob:** $y(x) = e^x + \frac{1}{x + 1}$.

---

## ⚠️ Talabalar Ko'p Yo'l Qo'yadigan Xatolar

1. **Xususiy yechimni topishda tasodifiy taxminlarga suyanish:**
   Rikkati tenglamasining koeffitsiyentlariga qarab xususiy yechim shaklini oldindan ko'ra bilish kerak. Agar ozod hadda $\frac{1}{x^2}$ bo'lsa — $y_1 = \frac{k}{x}$; agar $x^2$ yoki $x$ bo'lsa — $y_1 = ax + b$; agar $e^{kx}$ bo'lsa — $y_1 = a e^{kx}$ deb qidiriladi.
2. **$z(x)$ tenglamasining ishorasini adashtirish:**
   $y = y_1 + \frac{1}{z}$ almashtirishida $y' = y'_1 - \frac{z'}{z^2}$ bo'ladi. Minus ishorasi tufayli $z'$ ning oldidagi ishorani yo'qotib qo'yish yakuniy chiziqli tenglamada xatolikka olib keladi.
3. **Xususiy yechim $y_1(x)$ ni yo'qotib qo'yish:**
   $z(x) \to \infty$ bo'lganda $y(x) \to y_1(x)$ bo'ladi. Shuning uchun javob yozganda $y_1(x)$ xususiy yechim sifatida alohida ko'rsatilishi shart, chunki chekli $C$ qiymatlarida u ifodadan chiqmasligi mumkin.

---

## 🎯 Mustaqil Yechish Uchun Masalalar

1. Xususiy yechimi $y_1 = x$ ekanligini tekshiring va umumiy yechimini toping:
   $$y' = y^2 - x y + 1$$
   *Javob:* $y(x) = x + \frac{e^{x^2/2}}{C - \int e^{x^2/2} dx}$.

2. $y_1 = \frac{1}{x}$ xususiy yechimdan foydalanib tenglamani yeching:
   $$x^2 y' + x^2 y^2 + x y - 1 = 0$$
   *Javob:* $y(x) = \frac{1}{x} + \frac{1}{C x^3 - x/2}$.

3. Tenglamani xususiy yechim $y_1 = \sin x$ yordamida yeching:
   $$y' + y^2 - 2y \sin x + \sin^2 x - \cos x = 0$$
   *Javob:* $y(x) = \sin x + \frac{1}{x + C}$.

4. Koshi masalasini yeching:
   $$y' - y^2 + 2y - 1 = 0, \quad y(0) = 2$$
   *Javob:* $y(x) = 1 + \frac{1}{1 - x}$.

---

## 💡 Xulosa va Imtihon Maslahatlari

- Rikkati tenglamasini ko'rganda birinchi navbatda $y_1$ xususiy yechim masalaning shartida berilganmi-yo'qligini tekshiring. Agar berilmagan bo'lsa, eng sodda $y = a$, $y = ax$, $y = \frac{a}{x}$ funksiyalarni tekshirib ko'ring.
- $y = y_1 + \frac{1}{z}$ almashtirishini yodda saqlang: u ikkinchi darajali nochiziqli tenglamani doimo birinchi tartibli chiziqli tenglamaga aylantiradi.
- Imtihonda umumiy yechimdagi integrallash doimiysi $C$ ning o'rniga cheksizlikni qo'yib ko'rsangiz, boshlang'ich xususiy yechim $y_1(x)$ chiqishi kerak — bu ajoyib o'z-o'zini tekshirish usulidir!
