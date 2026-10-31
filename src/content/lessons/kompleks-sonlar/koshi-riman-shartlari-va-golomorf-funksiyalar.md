---
title: "Koshi-Riman differensiallanish shartlari va golomorf funksiyalar"
description: "Kompleks funksiya hosilasi, Koshi-Riman (Eyler-D'Alamber) shartlari, garmonik funksiyalar va uning qo'shmasini tiklash."
module: "kompleks-sonlar"
order: 12
---

## 📌 Kirish va Fizik/Texnik Mohiyati

Haqiqiy o'zgaruvchili funksiyalarda differensiallanish tushunchasi bitta o'q bo'ylab faqat ikkita tomondan (o'ngdan va chapdan) intilishni talab qiladi. Kompleks tekislikda esa $\Delta z = \Delta x + i\Delta y \to 0$ intilish ikki o'lchovli tekislikdagi **ixtiyoriy yo'nalish** bo'yicha sodir bo'lishi mumkin. Bu talab shu qadar qat'iy va mo''jizaviyki, agar kompleks funksiya biror sohada bir marta differensiallansa, u avtomatik ravishda cheksiz marta differensiallanuvchi bo'ladi va darhol Teylor qatoriga yoyiladi!

Bunday "mukammal" funksiyalar matematikada **golomorf** (yoki analitik) funksiyalar deb ataladi. Fizika va muhandislikda, xususan gidrodinamikada siqilmaydigan uyursiz suyuqlik oqimi, elektrostatikadagi zaryadlar maydoni va issiqlik muvozanati aynan Koshi-Riman shartlari va garmonik potensiallar yordamida modellashtiriladi.

---

## 📐 Asosiy Nazariya, Qoidalar va Teoremalar

### 1. Kompleks o'zgaruvchili funksiya hosilasi

$w = f(z)$ funksiya biror $D \subset \mathbb{C}$ sohada aniqlangan bo'lsin, bu yerda $z = x + iy$. Funksiyani haqiqiy va mavhum qismlarga ajratamiz:
$$f(z) = u(x, y) + i v(x, y)$$

> **Ta'rif:**
> Agar quyidagi limit mavjud va $\Delta z \to 0$ intilish yo'nalishiga bog'liq bo'lmasa:
> $$ f'(z) = \lim_{\Delta z \to 0} \frac{f(z + \Delta z) - f(z)}{\Delta z}$$
> u holda $f(z)$ funksiya $z$ nuqtada **differensiallanuvchi** deyiladi.
> Biror $D$ sohaning har bir nuqtasida differensiallanuvchi funksiya ushbu sohada **golomorf (analitik)** funksiya deyiladi.

---

### 2. Koshi-Riman (D'Alamber-Eyler) shartlari

> **Fundamental Teorema:**
> $f(z) = u(x, y) + i v(x, y)$ funksiyaning $z = x + iy$ nuqtada differensiallanuvchi bo'lishi uchun $u(x, y)$ va $v(x, y)$ funksiyalarning ushbu nuqtada haqiqiy ma'noda differensiallanuvchi bo'lishi hamda quyidagi **Koshi-Riman shartlari** bajarilishi zarur va yetarlidir:
> $$\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}, \qquad \frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$$

Agar ushbu shartlar bajarilsa, hosila quyidagi teng kuchli formulalardan biri orqali hisoblanadi:
$$f'(z) = \frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x} = \frac{\partial v}{\partial y} - i \frac{\partial u}{\partial y} = \frac{\partial u}{\partial x} - i \frac{\partial u}{\partial y}$$

---

### 3. Garmonik funksiyalar va analitik funksiyani tiklash

Agar $f(z) = u + iv$ sohada golomorf bo'lsa, Koshi-Riman shartlaridan ikkinchi tartibli xususiy hosilalarni olamiz:
$$\frac{\partial^2 u}{\partial x^2} = \frac{\partial^2 v}{\partial x \partial y}, \qquad \frac{\partial^2 u}{\partial y^2} = -\frac{\partial^2 v}{\partial y \partial x}$$

Xususiy hosilalar uzluksiz bo'lgani uchun aralash hosilalar teng: $\frac{\partial^2 v}{\partial x \partial y} = \frac{\partial^2 v}{\partial y \partial x}$. Ushbu tengliklarni qo'shsak:
$$\Delta u = \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0$$
$$\Delta v = \frac{\partial^2 v}{\partial x^2} + \frac{\partial^2 v}{\partial y^2} = 0$$

> **Ta'rif:**
> Laplas tenglamasi $\Delta \varphi = 0$ ni qanoatlantiruvchi funksiya **garmonik funksiya** deyiladi.
> Koshi-Riman shartlari bilan bog'langan $u(x, y)$ va $v(x, y)$ juftligi **qo'shma garmonik funksiyalar** deb ataladi.

**Amaliy xulosa:** Golomorf funksiyaning haqiqiy qismi $u(x, y)$ ma'lum bo'lsa, uning mavhum qismi $v(x, y)$ o'zgarmas doimiy $C$ aniqligida bir qiymatli tiklanadi!

---

### 4. Qutb koordinatalarida Koshi-Riman shartlari

Agar $z = r e^{i\theta}$ ($x = r\cos\theta, y = r\sin\theta$) va $f(z) = u(r, \theta) + i v(r, \theta)$ bo'lsa:
$$\frac{\partial u}{\partial r} = \frac{1}{r} \frac{\partial v}{\partial \theta}, \qquad \frac{\partial v}{\partial r} = -\frac{1}{r} \frac{\partial u}{\partial \theta}$$
Hosila:
$$f'(z) = e^{-i\theta} \left( \frac{\partial u}{\partial r} + i \frac{\partial v}{\partial r} \right)$$

---

## 📝 Qadamma-qadam Yechilgan Amaliy Misollar

### 1-misol: Koshi-Riman shartlari bajarilishini isbotlash
$$f(z) = z^3$$
funksiyaning butun kompleks tekislikda golomorf ekanligini ko'rsating va hosilasini toping.

**Yechish:**
1. $z = x + iy$ deb olib, kubga ko'taramiz:
   $$f(z) = (x + iy)^3 = x^3 + 3x^2(iy) + 3x(iy)^2 + (iy)^3$$
   $$f(z) = x^3 + 3i x^2 y - 3xy^2 - i y^3 = (x^3 - 3xy^2) + i (3x^2 y - y^3)$$
2. Haqiqiy va mavhum qismlarni ajratamiz:
   $$u(x, y) = x^3 - 3xy^2, \quad v(x, y) = 3x^2 y - y^3$$
3. Xususiy hosilalarni hisoblaymiz:
   $$\frac{\partial u}{\partial x} = 3x^2 - 3y^2, \qquad \frac{\partial u}{\partial y} = -6xy$$
   $$\frac{\partial v}{\partial x} = 6xy, \qquad \frac{\partial v}{\partial y} = 3x^2 - 3y^2$$
4. Koshi-Riman shartlarini tekshiramiz:
   $$\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y} = 3x^2 - 3y^2 \quad \checkmark$$
   $$\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x} = -6xy \quad \checkmark$$
   Shartlar barcha $(x, y) \in \mathbb{R}^2$ da bajariladi, demak funksiya butun tekislikda golomorf.
5. Hosilani topamiz:
   $$f'(z) = \frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x} = (3x^2 - 3y^2) + i (6xy) = 3(x^2 + 2ixy - y^2) = 3(x + iy)^2 = 3z^2$$

**Javob:** Funksiya golomorf, $f'(z) = 3z^2$.

---

### 2-misol: Differensiallanmaydigan funksiyaga misol
$$f(z) = \bar{z} = x - iy$$
funksiyaning differensiallanishini tekshiring.

**Yechish:**
1. Haqiqiy va mavhum qismlar:
   $$u(x, y) = x, \quad v(x, y) = -y$$
2. Xususiy hosilalar:
   $$\frac{\partial u}{\partial x} = 1, \quad \frac{\partial v}{\partial y} = -1$$
   $$\frac{\partial u}{\partial y} = 0, \quad \frac{\partial v}{\partial x} = 0$$
3. Birinchi Koshi-Riman sharti:
   $$\frac{\partial u}{\partial x} \stackrel{?}{=} \frac{\partial v}{\partial y} \implies 1 \neq -1$$
   Tenglik hech qayerda bajarilmaydi! Demak, qo'shma komplekslash amali $\bar{z}$ kompleks tekislikning hech bir nuqtasida differensiallanuvchi emas.

**Javob:** $f(z) = \bar{z}$ funksiya hech qayerda differensiallanmaydi.

---

### 3-misol: Garmonik haqiqiy qismi bo'yicha golomorf funksiyani tiklash
Garmonik funksiya berilgan:
$$u(x, y) = x^2 - y^2 + 2x$$
Boshlang'ich shart $f(0) = 0$ bo'lganda analitik $f(z) = u + iv$ funksiyani tiklang.

**Yechish:**
1. Garmoniklikni tekshiramiz:
   $$\frac{\partial^2 u}{\partial x^2} = 2, \quad \frac{\partial^2 u}{\partial y^2} = -2 \implies 2 + (-2) = 0 \quad (\Delta u = 0)$$
2. Birinchi Koshi-Riman shartini qo'llaymiz ($\frac{\partial v}{\partial y} = \frac{\partial u}{\partial x}$):
   $$\frac{\partial u}{\partial x} = 2x + 2 \implies \frac{\partial v}{\partial y} = 2x + 2$$
3. $y$ bo'yicha integrallaymiz:
   $$v(x, y) = \int (2x + 2) dy = 2xy + 2y + \varphi(x)$$
4. Ikkinchi shartni qo'llaymiz ($\frac{\partial v}{\partial x} = -\frac{\partial u}{\partial y}$):
   $$\frac{\partial v}{\partial x} = 2y + \varphi'(x)$$
   Boshqa tomondan, $-\frac{\partial u}{\partial y} = -(-2y) = 2y$.
   $$2y + \varphi'(x) = 2y \implies \varphi'(x) = 0 \implies \varphi(x) = C$$
5. Funksiyani yozamiz:
   $$f(z) = (x^2 - y^2 + 2x) + i(2xy + 2y + C)$$
6. $z$ orqali ifodalaymiz:
   $$x^2 - y^2 + 2ixy = (x + iy)^2 = z^2$$
   $$2x + 2iy = 2(x + iy) = 2z$$
   $$f(z) = z^2 + 2z + iC$$
7. $f(0) = 0$ shartdan: $0^2 + 2(0) + iC = 0 \implies C = 0$.

**Javob:** $f(z) = z^2 + 2z$.

---

### 4-misol: Qutb koordinatalarida tekshirish
$$f(z) = \operatorname{Ln} z = \ln r + i\theta \quad (r > 0, -\pi < \theta < \pi)$$
funksiyaning analitikligini tekshiring va hosilasini toping.

**Yechish:**
1. Qutb qismlari:
   $$u(r, \theta) = \ln r, \quad v(r, \theta) = \theta$$
2. Xususiy hosilalar:
   $$\frac{\partial u}{\partial r} = \frac{1}{r}, \qquad \frac{\partial u}{\partial \theta} = 0$$
   $$\frac{\partial v}{\partial r} = 0, \qquad \frac{\partial v}{\partial \theta} = 1$$
3. Qutbiy Koshi-Riman shartlari:
   $$\frac{\partial u}{\partial r} = \frac{1}{r}\frac{\partial v}{\partial \theta} \implies \frac{1}{r} = \frac{1}{r}(1) = \frac{1}{r} \quad \checkmark$$
   $$\frac{\partial v}{\partial r} = -\frac{1}{r}\frac{\partial u}{\partial \theta} \implies 0 = -\frac{1}{r}(0) = 0 \quad \checkmark$$
   Shartlar qat'iy bajarildi!
4. Hosilasi:
   $$f'(z) = e^{-i\theta} \left( \frac{\partial u}{\partial r} + i \frac{\partial v}{\partial r} \right) = e^{-i\theta} \left( \frac{1}{r} + i \cdot 0 \right) = \frac{1}{r e^{i\theta}} = \frac{1}{z}$$

**Javob:** Funksiya analitik, $f'(z) = \frac{1}{z}$.

---

## ⚠️ Talabalar Ko'p Yo'l Qo'yadigan Xatolar

1. **Ikkinchi shartdagi minus ishorani unutish:**
   $\frac{\partial u}{\partial y} = \frac{\partial v}{\partial x}$ deb yozish — eng ko'p uchraydigan xatodir. To'g'ri shakli: $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$.
2. **Garmoniklikni tekshirmasdan turib $v(x, y)$ ni tiklashga urinish:**
   Agar berilgan $u(x, y)$ funksiya Laplas tenglamasini qanoatlantirmasa ($\Delta u \neq 0$), hech qanday analitik $f(z)$ mavjud bo'lmaydi va hisob-kitoblar boshi berk ko'chaga kiradi.
3. **Modul $|z|$ yoki argument $\arg z$ ni golomorf deb o'ylash:**
   $|z| = \sqrt{x^2 + y^2}$ faqat haqiqiy qiymat qabul qiladi ($v \equiv 0$). Agar $v=0$ bo'lsa, Koshi-Riman bo'yicha $u_x = 0, u_y = 0$, ya'ni faqat o'zgarmas funksiyagina golomorf bo'ladi. $|z|$ esa hech qayerda golomorf emas!

---

## 🎯 Mustaqil Yechish Uchun Masalalar

1. $f(z) = e^z = e^x(\cos y + i\sin y)$ funksiyaning Koshi-Riman shartlarini qanoatlantirishini ko'rsating va $(e^z)' = e^z$ ekanligini isbotlang.
   *Javob:* $u_x = v_y = e^x\cos y$, $u_y = -v_x = -e^x\sin y$.

2. $u(x, y) = 2xy$ funksiyasi garmonik ekanligini tekshiring va $f(0) = i$ bo'lganda $f(z)$ analitik funksiyani toping.
   *Javob:* $v(x, y) = y^2 - x^2 + 1 \implies f(z) = -i z^2 + i$.

3. $f(z) = |z|^2 = x^2 + y^2$ funksiya qaysi nuqtalarda differensiallanuvchi?
   *Javob:* Faqat koordinatalar boshida $z = 0$ nuqtada (lekin hech bir sohada golomorf emas).

4. Garmonik $v(x, y) = 3x^2 y - y^3$ mavhum qism bo'yicha analitik funksiyani tiklang.
   *Javob:* $f(z) = z^3 + C$.

---

## 💡 Xulosa va Imtihon Maslahatlari

- Kompleks analizda differensiallanish — bu juda kuchli ichki simmetriyadir. Koshi-Riman shartlari haqiqiy va mavhum qismlarni bir-biriga uzviy bog'lab turadi.
- Imtihonda $f(z)$ ni tiklagandan so'ng, hosil bo'lgan ifodaga $y = 0$ qo'yib ko'ring: $f(x) = u(x, 0) + i v(x, 0)$. So'ngra shunchaki $x$ ni $z$ bilan almashtirsangiz, yakuniy kompleks ko'rinish darhol chiqadi!
