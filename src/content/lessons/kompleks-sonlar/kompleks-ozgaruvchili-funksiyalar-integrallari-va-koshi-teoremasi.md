---
title: "Kompleks integrallar, Koshi integral teoremasi va Koshi integral formulasi"
module: "kompleks-sonlar"
order: 11
description: "TFKP da integrallash nazariyasi: egri chiziq bo'yicha kompleks integral, Koshi fundamental teoremasi ∮ f(z)dz = 0, Koshi integral formulasi, yuqori tartibli hosilalar uchun Koshi formulasi va yopiq kontur bo'yicha murakkab integrallarni bir zumda hisoblash."
---

## Kirish: Kompleks tekislikda integrallash mo'jizasi

Haqiqiy o'zgaruvchili matematik tahlilda integral hisoblash ko'pincha murakkab boshlang'ich funksiyalarni topishni, sun'iy almashtirishlarni yoki bo'laklab integrallashni talab qiladi.

Ammo kompleks tahlilda (TFKP — Kompleks o'zgaruvchili funksiyalar nazariyasida) integrallash haqiqiy mo'jizaga aylanadi! Frantsuz matematigi Ogyusten Lui Koshi (Augustin-Louis Cauchy) kashf etgan teoremalar shuni ko'rsatadiki: **analitik funksiyaning yopiq kontur bo'yicha integrali konturning qanday shaklda ekanligiga umuman bog'liq emas va ko'p hollarda to'g'ridan-to'g'ri nolga yoki maxsus nuqtadagi funksiya qiymatiga teng bo'ladi!**

Ushbu darsda **Mathprofi** standarti asosida kompleks integrallarni hisoblashning 3 ta asosiy ustunini — ta'rif bo'yicha hisoblash, Koshi teoremasi va Koshi integral formulasini batafsil o'rganamiz.

---

## 1. Kompleks integralning ta'rifi va haqiqiy integrallarga keltirish

Kompleks o'zgaruvchi $z = x + iy$ va funksiya $f(z) = u(x, y) + i v(x, y)$ bo'lsin.
U holda differensial:
$$dz = dx + i\,dy$$

$f(z)dz$ ko'paytmasini ochib chiqamiz:
$$f(z)\,dz = (u + iv)(dx + idy) = (u\,dx - v\,dy) + i(v\,dx + u\,dy)$$

Demak, $\Gamma$ egri chizig'i bo'yicha kompleks integral ikkita oddiy **2-tur egri chiziqli integralga** ajraladi:
$$\int_\Gamma f(z) \, dz = \int_\Gamma (u\,dx - v\,dy) + i \int_\Gamma (v\,dx + u\,dy)$$

### Parametrik ko'rinish:
Agar egri chiziq $z = z(t) = x(t) + i y(t)$ ($t \in [t_1, t_2]$) parametrik ko'rinishda berilgan bo'lsa:
$$\int_\Gamma f(z) \, dz = \int_{t_1}^{t_2} f(z(t)) \cdot z'(t) \, dt$$

---

## 2. Koshining fundamental integral teoremasi

> **Koshi integral teoremasi:**
> Agar $f(z)$ funksiya bir bog'lamli $D$ sohada va uning chegarasi bo'lgan yopiq $\Gamma$ konturida **analitik** (ya'ni Koshi-Riman shartlarini qanoatlantiruvchi va uzluksiz hosilaga ega) bo'lsa, u holda ushbu kontur bo'yicha olingan integral qat'iy **NOLGA TENGDIR**:
> $$\oint_\Gamma f(z) \, dz = 0$$

### Isboti (Grin formulasi orqali):
Haqiqiy egri chiziqli integral uchun Grin formulasiga ko'ra:
$$\oint_\Gamma (u\,dx - v\,dy) = \iint_D \left( -\frac{\partial v}{\partial x} - \frac{\partial u}{\partial y} \right) dxdy$$
Koshi-Riman shartlariga ko'ra: $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x} \implies -\frac{\partial v}{\partial x} - \frac{\partial u}{\partial y} = 0$.
Xuddi shunday ikkinchi integral ham nolga aylanadi. Isbotlandi!

---

## 3. Koshi integral formulasi (TFKP ning eng asosiy formulasi)

Agar funksiya kontur ichidagi bitta $z_0$ nuqtada analitik bo'lmasa-chi (maxsus nuqta bo'lsa)? Masalan, maxrajda $z - z_0$ tursa?

> **Koshi integral formulasi:**
> Agar $f(z)$ yopiq $\Gamma$ kontur ichida va chegarasida analitik bo'lib, $z_0$ nuqta ushbu kontur ichida yotsa, u holda:
> $$\oint_\Gamma \frac{f(z)}{z - z_0} \, dz = 2\pi i \cdot f(z_0)$$
> Yoki funksiyaning nuqtadagi qiymati sifatida:
> $$f(z_0) = \frac{1}{2\pi i} \oint_\Gamma \frac{f(z)}{z - z_0} \, dz$$

### Falsafiy va matematik ahamiyati:
Ushbu formula shuni anglatadiki: analitik funksiyaning soha ICHIDAGI ixtiyoriy nuqtadagi qiymati to'liq uning CHEGARASIDAGI qiymatlari orqali bir qiymatli aniqlanadi!

---

## 4. Yuqori tartibli hosilalar uchun Koshi formulasi

Koshi formulasini $z_0$ parametr bo'yicha differensiallab, ajoyib natijaga erishiladi:

> **Hosilalar uchun Koshi formulasi:**
> Analitik funksiyaning har qanday $n$-tartibli hosilasi kontur integrali orqali ifodalanadi:
> $$\oint_\Gamma \frac{f(z)}{(z - z_0)^{n+1}} \, dz = \frac{2\pi i}{n!} \cdot f^{(n)}(z_0)$$
> Yoki:
> $$f^{(n)}(z_0) = \frac{n!}{2\pi i} \oint_\Gamma \frac{f(z)}{(z - z_0)^{n+1}} \, dz$$

*(Bu teoremadan kelib chiqadiki: agar kompleks funksiya 1 marta differensiallanuvchi bo'lsa, u avtomatik ravishda **cheksiz marta differensiallanuvchi** bo'ladi! Bu haqiqiy analizda mutlaqo yo'q bo'lgan mo'jizaviy xossadir).*

---

## 5. To'liq yechilgan namunaviy misollar

### 1-Misol (Koshi teoremasi — Maxsus nuqta konturdan tashqarida):
Quyidagi integralni hisoblang:
$$I = \oint_{|z| = 1} \frac{e^z}{z - 3} \, dz$$
bu yerda $|z| = 1$ — markazi koordinatalar boshida, radiusi $1$ bo'lgan aylana.

**Yechish:**
1. Maxraj nolga aylanadigan maxsus nuqta: $z_0 = 3$.
2. Kontur: $|z| = 1$ (markazi $(0, 0)$, radiusi $1$).
3. Maxsus nuqta $z_0 = 3$ kontur ichidami?
   $|3| = 3 > 1$, demak $z_0 = 3$ nuqta konturdan **tashqarida yotadi**!
4. Demak, kontur ichida va chegarasida $\frac{e^z}{z - 3}$ funksiya hamma joyda analitikdir.
5. Koshi teoremasiga ko'ra:
   $$I = 0$$
Hisob-kitobsiz, bir soniyada yechildi!

---

### 2-Misol (Koshi integral formulasi — Maxsus nuqta kontur ichida):
Quyidagi integralni hisoblang:
$$I = \oint_{|z| = 2} \frac{\cos z}{z - i} \, dz$$

**Yechish:**
1. Maxsus nuqta: $z_0 = i$.
2. Kontur $|z| = 2$ radiusi $2$ bo'lgan aylana.
   $|z_0| = |i| = 1 < 2$, demak $z_0 = i$ nuqta kontur **ichida yotadi**!
3. Koshi integral formulasini qo'llaymiz:
   - $f(z) = \cos z$ (kontur ichida analitik);
   - $z_0 = i$.
   $$\oint_{|z| = 2} \frac{\cos z}{z - i} \, dz = 2\pi i \cdot f(i) = 2\pi i \cdot \cos(i)$$
4. Kompleks argumentli kosinus ta'rifi: $\cos(iy) = \operatorname{ch} y$, demak $\cos(i) = \operatorname{ch}(1) = \frac{e + e^{-1}}{2}$.
5. Yakuniy javob:
   $$I = 2\pi i \operatorname{ch}(1) = \pi i (e + e^{-1})$$

---

### 3-Misol (Yuqori tartibli qutb — $n$-darajali Koshi formulasi):
Quyidagi integralni hisoblang:
$$I = \oint_{|z| = 1} \frac{\sin z}{z^3} \, dz$$

**Yechish:**
1. Maxraj $z^3 = (z - 0)^{2+1}$, demak $z_0 = 0$ va $n = 2$.
2. $z_0 = 0$ nuqta $|z| = 1$ aylananing markazida yotadi.
3. Hosilalar formulasidan foydalanamiz:
   $$\oint_\Gamma \frac{f(z)}{(z - z_0)^3} \, dz = \frac{2\pi i}{2!} \cdot f''(z_0) = \pi i \cdot f''(0)$$
4. $f(z) = \sin z$:
   - $f'(z) = \cos z$
   - $f''(z) = -\sin z$
5. $z = 0$ nuqtadagi hosila qiymati:
   $$f''(0) = -\sin(0) = 0$$
6. Demak:
   $$I = \pi i \cdot 0 = 0$$

---

## ⚠️ Talabalar eng ko'p yo'l qo'yadigan xatolar va tuzoqlar

1. **Maxsus nuqta kontur ichidami yoki tashqarisidami — tekshirmaslik:**
   Har doim birinchi qadam — $|z_0|$ masofani kontur radiusi bilan taqqoslashdir! Tashqarida bo'lsa darhol $0$ chiqadi.
2. **$2\pi i$ koeffitsiyentini unutish:**
   Koshi formulasida $2\pi i$ doimo qatnashadi. Ko'pincha $i$ mavhum birlik yoki $2$ raqami tushirib qoldiriladi.
3. **Daraja ko'rsatkichi $n+1$ ga e'tibor bermaslik:**
   Maxrajda $(z - z_0)^3$ tursa, bu **3-tartibli hosila emas, 2-tartibli hosiladir** ($n+1 = 3 \implies n = 2$). Maxrajdagi faktorial ham $2!$ bo'ladi!

---

## ✏️ Mustaqil yechish uchun amaliy mashqlar va javoblar

1. $\oint_{|z| = 1} \frac{dz}{z}$ integralini hisoblang.
   *Javob:* $f(z) \equiv 1 \implies 2\pi i \cdot 1 = 2\pi i$.
2. $\oint_{|z| = 1} \frac{z^2 + 1}{z - 5} dz$ integralini hisoblang.
   *Javob:* $0$ (chunki $z_0 = 5$ nuqta aylanadan tashqarida).
3. $\oint_{|z| = 2} \frac{e^z}{(z - 1)^2} dz$ integralini hisoblang.
   *Javob:* $\frac{2\pi i}{1!} \cdot (e^z)'|_{z=1} = 2\pi i e$.
