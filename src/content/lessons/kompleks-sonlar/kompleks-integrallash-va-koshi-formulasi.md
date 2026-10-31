---
title: "Kompleks tekislikda integrallash va Koshi integral formulasi"
description: "Kontur bo'yicha kompleks integral, Koshi teoremasi va funksiyaning ichki nuqtalardagi qiymatini hisoblovchi Koshi integral formulasi."
module: "kompleks-sonlar"
order: 13
---

## 📌 Kirish va Fizik/Texnik Mohiyati

Klassik tahlilda aniq integral egri chiziq ostidagi yuzani anglatsa, kompleks analizda integral yo'naltirilgan egri chiziq (kontur) bo'ylab hisoblanadi. Fizik nuqtai nazardan, bunday integral suyuqlik yoki gaz oqimining tezlik sirkulyatsiyasini ($\Gamma = \oint \mathbf{v} \cdot d\mathbf{r}$) va oqim sarfini ifodalaydi. Elektrostatikada esa yopiq sirt bo'yicha Gauss teoremasi kompleks tekislikdagi kontur integralining to'g'ridan-to'g'ri analogidir.

XIX asr boshida Ogyusten Lui Koshi tomonidan kashf etilgan integral teoremalar butun matematik analizning eng go'zal durdonalaridan biridir: **agar funksiya sohada golomorf bo'lsa, uning yopiq kontur bo'yicha integrali har doim nolga teng bo'ladi!** Bundan kelib chiqadigan eng hayratlanarli natija shuki, golomorf funksiyaning soha chegarasidagi qiymatlari uning soha ichidagi barcha nuqtalardagi qiymatlarini hamda barcha tartibli hosilalarini to'liq belgilab beradi.

---

## 📐 Asosiy Nazariya, Qoidalar va Teoremalar

### 1. Kontur bo'yicha kompleks integral ta'rifi

$\Gamma$ — kompleks tekislikdagi yo'naltirilgan bo'lakli-silliq egri chiziq bo'lsin. $f(z) = u(x, y) + i v(x, y)$ funksiyaning $\Gamma$ bo'yicha integrali ikkita haqiqiy ikkinchi tur egrichiziqli integrallarga ajraladi:
$$\int_{\Gamma} f(z) dz = \int_{\Gamma} (u + iv)(dx + idy) = \int_{\Gamma} (u dx - v dy) + i \int_{\Gamma} (v dx + u dy)$$

**Parametrik hisoblash qoidasi:**
Agar $\Gamma$ kontur $z(t) = x(t) + i y(t)$ ($t \in [\alpha, \beta]$) tenglama bilan parametrlangan bo'lsa:
$$\int_{\Gamma} f(z) dz = \int_{\alpha}^{\beta} f(z(t)) \cdot z'(t) dt$$

Asosiy integral:
$$\oint_{|z - z_0| = R} (z - z_0)^n dz = \begin{cases} 2\pi i, & n = -1 \\ 0, & n \neq -1 \quad (n \in \mathbb{Z}) \end{cases}$$

---

### 2. Koshi integral teoremasi

> **Koshi teoremasi (bir bog'lamli soha uchun):**
> Agar $f(z)$ funksiya bir bog'lamli $D$ sohada golomorf (analitik) bo'lsa, u holda ushbu sohada yotuvchi har qanday yopiq $\Gamma$ kontur bo'yicha integral nolga teng:
> $$\oint_{\Gamma} f(z) dz = 0 $$

*Isbot g'oyasi:* Haqiqiy analizdagi Grin formulasi $\oint (P dx + Q dy) = \iint (\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}) dx dy$ va Koshi-Riman shartlari ($u_x = v_y, u_y = -v_x$) bo'yicha:
$$\iint (-v_x - u_y) dx dy = 0 \quad \text{va} \quad \iint (u_x - v_y) dx dy = 0$$

---

### 3. Koshi integral formulasi

> **Fundamental Teorema:**
> Agar $f(z)$ funksiya chegarasi $\Gamma$ bo'lgan bir bog'lamli $D$ sohada golomorf bo'lsa va $z_0 \in D$ uning ixtiyoriy ichki nuqtasi bo'lsa, quyidagi tenglik o'rinli:
> $$ f(z_0) = \frac{1}{2\pi i} \oint_{\Gamma} \frac{f(z)}{z - z_0} dz $$
>
> Integrallarni hisoblash uchun amaliy shakli:
> $$\oint_{\Gamma} \frac{f(z)}{z - z_0} dz = 2\pi i \cdot f(z_0)$$

---

### 4. Golomorf funksiyaning yuqori tartibli hosilalari

Koshi formulasini $z_0$ parametri bo'yicha $n$ marta differensiallash natijasida ajoyib teorema hosil bo'ladi:

> **Hosilalar uchun Koshi formulasi:**
> Golomorf funksiya cheksiz marta differensiallanuvchidir va uning $n$-tartibli hosilasi quyidagi integral orqali ifodalanadi:
> $$ f^{(n)}(z_0) = \frac{n!}{2\pi i} \oint_{\Gamma} \frac{f(z)}{(z - z_0)^{n+1}} dz $$
>
> Amaliy integrallash formulasi:
> $$\oint_{\Gamma} \frac{f(z)}{(z - z_0)^{n+1}} dz = \frac{2\pi i}{n!} \cdot f^{(n)}(z_0)$$

Ushbu formula yordamida maxrajida $(z - z_0)^{n+1}$ daraja qatnashgan murakkab kontur integrallari oddiy hosila olishga keltiriladi!

---

## 📝 Qadamma-qadam Yechilgan Amaliy Misollar

### 1-misol: Kesma bo'yicha integrallash (Parametrizatsiya usuli)
Integralni hisoblang:
$$\int_{\Gamma} \bar{z} dz$$
bu yerda $\Gamma$ — koordinata boshi $z_1 = 0$ dan $z_2 = 1 + i$ nuqtagacha bo'lgan to'g'ri chiziq kesmasi.

**Yechish:**
1. Kesmaning parametrik tenglamasini tuzamiz:
   $$z(t) = t + i t = (1 + i)t, \quad t \in [0, 1]$$
2. Differensialni topamiz:
   $$dz = (1 + i) dt$$
3. Integrallanuvchi funksiyani parametr orqali ifodalaymiz:
   $$\bar{z}(t) = t - i t = (1 - i)t$$
4. Aniq integralga o'tamiz:
   $$\int_{\Gamma} \bar{z} dz = \int_{0}^{1} (1 - i)t \cdot (1 + i) dt$$
5. Ko'paytmani ochamiz: $(1 - i)(1 + i) = 1 - i^2 = 1 + 1 = 2$:
   $$\int_{\Gamma} \bar{z} dz = \int_{0}^{1} 2t dt = \left[ t^2 \right]_0^1 = 1^2 - 0 = 1$$

**Javob:** $1$.

---

### 2-misol: Koshi integral formulasi
$$\oint_{|z| = 2} \frac{e^z}{z - 1} dz$$
integralni hisoblang (aylana bo'ylab musbat yo'nalishda).

**Yechish:**
1. Maxsus nuqta: $z_0 = 1$.
2. Konturni tekshiramiz: $|z| = 2$ — markazi $(0, 0)$ da, radiusi 2 bo'lgan aylana.
   $$|z_0| = |1| = 1 < 2$$
   Demak, $z_0 = 1$ nuqta kontur ichida yotadi.
3. Suratdagi funksiya: $f(z) = e^z$ butun tekislikda golomorf.
4. Koshi integral formulasini qo'llaymiz:
   $$\oint_{|z|=2} \frac{e^z}{z - 1} dz = 2\pi i \cdot f(1) = 2\pi i \cdot e^1 = 2\pi e i$$

**Javob:** $2\pi e i$.

---

### 3-misol: Karrali darajali maxraj va hosilalar formulasi
$$\oint_{|z| = 2} \frac{e^{2z}}{(z + 1)^3} dz$$

**Yechish:**
1. Maxrajning noli: $z_0 = -1$.
   Kontur $|z| = 2$ ichida yotadi: $|-1| = 1 < 2$.
2. Maxraj darajasi 3, demak $n + 1 = 3 \implies n = 2$.
3. Suratdagi funksiya: $f(z) = e^{2z}$.
4. $f(z)$ ning 2-tartibli hosilasini topamiz:
   $$f'(z) = 2e^{2z}$$
   $$f''(z) = 4e^{2z}$$
5. $z_0 = -1$ nuqtadagi qiymati:
   $$f''(-1) = 4e^{2(-1)} = 4e^{-2} = \frac{4}{e^2}$$
6. Hosilalar uchun Koshi formulasiga qo'yamiz ($n = 2$):
   $$\oint_{|z|=2} \frac{e^{2z}}{(z + 1)^3} dz = \frac{2\pi i}{2!} \cdot f''(-1) = \frac{2\pi i}{2} \cdot \frac{4}{e^2} = \frac{4\pi i}{e^2}$$

**Javob:** $\frac{4\pi i}{e^2}$.

---

### 4-misol: Kontur ichida ikkita maxsus nuqta yotgan hol
$$\oint_{|z| = 3} \frac{z + 1}{z^2 + 4} dz$$

**Yechish:**
1. Maxrajning ildizlari:
   $$z^2 + 4 = 0 \implies z_{1,2} = \pm 2i$$
   Ikkala nuqta ham $|z| = 3$ kontur ichida yotadi, chunki $|\pm 2i| = 2 < 3$.
2. Kasrni oddiy kasrlar yig'indisiga ajratamiz:
   $$\frac{z + 1}{z^2 + 4} = \frac{z + 1}{(z - 2i)(z + 2i)} = \frac{A}{z - 2i} + \frac{B}{z + 2i}$$
   $$A = \lim_{z \to 2i} \frac{z + 1}{z + 2i} = \frac{2i + 1}{4i} = \frac{1}{2} - \frac{i}{4}$$
   $$B = \lim_{z \to -2i} \frac{z + 1}{z - 2i} = \frac{-2i + 1}{-4i} = \frac{1}{2} + \frac{i}{4}$$
3. Integralni ikkita integral yig'indisiga ajratamiz:
   $$\oint_{|z|=3} \frac{z + 1}{z^2 + 4} dz = A \oint_{|z|=3} \frac{dz}{z - 2i} + B \oint_{|z|=3} \frac{dz}{z + 2i}$$
4. Har bir integralga alohida Koshi formulasini qo'llaymiz:
   $$\oint_{|z|=3} \frac{dz}{z - 2i} = 2\pi i, \qquad \oint_{|z|=3} \frac{dz}{z + 2i} = 2\pi i$$
5. Yig'indini hisoblaymiz:
   $$I = 2\pi i (A + B) = 2\pi i \left( \frac{1}{2} - \frac{i}{4} + \frac{1}{2} + \frac{i}{4} \right) = 2\pi i (1) = 2\pi i$$

**Javob:** $2\pi i$.

---

## ⚠️ Talabalar Ko'p Yo'l Qo'yadigan Xatolar

1. **Maxsus nuqta kontur tashqarisida bo'lganda formulani qo'llash:**
   Agar maxsus nuqta konturdan tashqarida bo'lsa (masalan, $\oint_{|z|=1} \frac{e^z}{z - 3} dz$), integral $2\pi i e^3$ ga teng emas! Koshi teoremasiga ko'ra u **nolga teng** ($0$), chunki funksiya kontur ichida golomorfdir.
2. **Hosilalar tartibida $n!$ faktorini chalkashtirish:**
   Maxrajda $(z - z_0)^{n+1}$ turganda hosila tartibi $n$ bo'ladi va oldidagi ko'paytuvchi $\frac{2\pi i}{n!}$ bo'ladi. Masalan, maxrajda $(z-z_0)^2$ bo'lsa, $n=1$ bo'lib, 1-hosila olinadi.
3. **Kontur yo'nalishiga e'tibor bermaslik:**
   Koshi formulalari soat strelkasiga qarshi (musbat) yo'nalish uchun yozilgan. Agar kontur soat strelkasi bo'yicha aylanib o'tilsa, natija oldiga **minus** ishora qo'yiladi.

---

## 🎯 Mustaqil Yechish Uchun Masalalar

1. Koshi teoremasi yordamida integralni hisoblang:
   $$\oint_{|z| = 1} \frac{\cos z}{z^2 + 9} dz$$
   *Javob:* 0 (chunki $z = \pm 3i$ nuqtalar $|z|=1$ aylana tashqarisida).

2. Koshi integral formulasini qo'llang:
   $$\oint_{|z| = 2} \frac{\sin(\pi z)}{z - 1} dz$$
   *Javob:* $2\pi i \sin(\pi) = 0$.

3. Hosilalar formulasidan foydalanib toping:
   $$\oint_{|z| = 1} \frac{\cos z}{z^2} dz$$
   *Javob:* $n=1 \implies 2\pi i (\cos z)'|_{z=0} = -2\pi i \sin(0) = 0$.

4. Integralni hisoblang:
   $$\oint_{|z| = 2} \frac{z^3}{(z - 1)^2} dz$$
   *Javob:* $n=1, f(z)=z^3 \implies f'(1)=3 \implies 2\pi i \cdot 3 = 6\pi i$.

---

## 💡 Xulosa va Imtihon Maslahatlari

- Berilgan $\oint_\Gamma \frac{f(z)}{P(z)} dz$ integralini ko'rganingizda doimo birinchi navbatda maxrajning nollarini toping va ularning qaysilari berilgan $\Gamma$ soha ichiga tushishini aniqlang.
- Agar maxrajning barcha nollari konturdan tashqarida bo'lsa — hisob-kitob qilib o'tirmang, javob $0$.
- Koshi formulasi — keyingi darslardagi Loran qatorlari va Koshi chegirmalar teoremasining poydevori hisoblanadi.
