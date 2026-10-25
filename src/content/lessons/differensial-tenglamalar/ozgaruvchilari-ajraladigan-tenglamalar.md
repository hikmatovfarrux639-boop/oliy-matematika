---
title: "O'zgaruvchilari ajraladigan va bir jinsli tenglamalar"
module: "differensial-tenglamalar"
order: 2
description: "O'zgaruvchilari ajraladigan differensial tenglamalar, integrallash algoritmi, Koshi masalasi, bir jinsli tenglamalar (y = ux) va chiziqli almashtirishlar."
---

## Kirish: O'zgaruvchilarni ikki "qirg'oqqa" ajratish

Differensial tenglamalarni yechishning eng sodda, ammo eng ko'p uchraydigan sinfi — **o'zgaruvchilari ajraladigan tenglamalardir**. 

Ularning asosiy g'oyasi juda sodda: algebraik shakl almashtirishlar yordamida $y$o'zgaruvchi va uning differensiali$dy$ni tenglikning bir tomoniga (chapga),$x$o'zgaruvchi va uning differensiali$dx$ ni esa ikkinchi tomoniga (o'ngga) to'liq ajratib olish mumkin bo'ladi. Shundan so'ng tenglamani yechish oddiy ikkita integralni hisoblashga aylanadi!

---

## 1. O'zgaruvchilari ajraladigan tenglama ko'rinishi

> **Ta'rif:** Quyidagi ko'rinishlarning biriga keltirish mumkin bo'lgan tenglama **o'zgaruvchilari ajraladigan differensial tenglama** deyiladi:
>
> 
$$
> y' = f(x) \cdot g(y) \qquad \text{yoki} \qquad M_1(x)N_1(y) \, dx + M_2(x)N_2(y) \, dy = 0
> 
$$

---

## 2. Yechishning qat'iy 4 bosqichli algoritmi

1. **Hosilani differensiallar nisbati bilan almashtiring:**
   $$y' = \frac{dy}{dx} \implies \frac{dy}{dx} = f(x) \cdot g(y)$$
2. **O'zgaruvchilarni ajrating:** Ikkala tomonni $dx$ga ko'paytiring va$g(y)$ ga bo'ling:
   $$\frac{dy}{g(y)} = f(x) \, dx \quad (g(y) \neq 0)$$
3. **Ikkala tomonni mustaqil integrallang:**
   $$\int \frac{dy}{g(y)} = \int f(x) \, dx + C$$
4. **Umumiy yechimni toping:** Agar algebraik imkoniyat bo'lsa, $y$ni$x$ orqali ochiq holda ($y = \varphi(x, C)$) ifodalang.

> ⚠️ **Tuzoq — Maxsus yechimlar va ildiz yo'qotish:**
> $g(y)$ga bo'layotganda$g(y) = 0$bo'lgan holatlarni alohida tekshiring! Agar$y = b$soni uchun$g(b) = 0$bo'lsa, u ham tenglamaning yechimi bo'lishi mumkin. Agar u umumiy yechim formulasidan$C$ ning hech bir qiymatida kelib chiqmasa, u **maxsus yechim** deb ataladi.

---

## 3. O'zgarmas $C$ ni tanlash layfhaki

Integrallash natijasida ko'pincha logarifmlar hosil bo'ladi:
$$
\ln|y| = \ln|x| + C
$$
Bunday holatda ixtiyoriy o'zgarmas sonni $C$emas, balki$\ln|C|$ deb yozish hisob-kitobni bir necha barobar osonlashtiradi:
$$
\ln|y| = \ln|x| + \ln|C| = \ln|C \cdot x| \implies y = C \cdot x
$$

---

## 4. Bir jinsli birinchi tartibli differensial tenglamalar

Agar tenglamaning o'ng tomoni faqatgina ularning nisbati $\frac{y}{x}$ ga bog'liq bo'lsa:

$$
y' = f\left(\frac{y}{x}\right)
$$

bunday tenglama **bir jinsli differensial tenglama** deyiladi.

### Standart almashtirish:
Yangi yordamchi $u = u(x)$ funksiya kiritiladi:
$$
\frac{y}{x} = u \implies y = u \cdot x
$$
Ko'paytmaning hosilasi bo'yicha:
$$
y' = u' \cdot x + u \cdot 1 = x \frac{du}{dx} + u
$$
Buni tenglamaga qo'yamiz:
$$
x \frac{du}{dx} + u = f(u) \implies x \frac{du}{dx} = f(u) - u
$$
Endi o'zgaruvchilarni osongina ajratamiz:
$$
\frac{du}{f(u) - u} = \frac{dx}{x}
$$

---

## 5. $y' = f(ax + by + c)$ ko'rinishidagi tenglamalar

Agar argument chiziqli ifoda $ax + by + c$ ko'rinishida bo'lsa, yangi o'zgaruvchi kiritiladi:
$$
z = ax + by + c \implies z' = a + b y' \implies y' = \frac{z' - a}{b}
$$
Natijada yana o'zgaruvchilari ajraladigan tenglamaga kelinadi!

---

## 6. Amaliy misollar va batafsil yechimlar

### 1-misol: Klassik o'zgaruvchilarni ajratish
Tenglamaning umumiy yechimini toping:
$$
y' = 2xy
$$

**Yechilishi:**
1. $y' = \frac{dy}{dx}$ deb yozamiz:
   $$\frac{dy}{dx} = 2xy$$
2. O'zgaruvchilarni ajratamiz ($y$larni chapga,$x$ larni o'ngga):
   $$\frac{dy}{y} = 2x \, dx \quad (y \neq 0)$$
3. Integrallaymiz:
   $$\int \frac{dy}{y} = \int 2x \, dx \implies \ln|y| = x^2 + C_1$$
4. Potensirlaymiz:
   $$|y| = e^{x^2 + C_1} = e^{C_1} \cdot e^{x^2}$$
   $\pm e^{C_1}$ni ixtiyoriy$C \neq 0$ bilan almashtiramiz:
   $$y = C e^{x^2}$$
5. $y = 0$ni tekshiramiz:$y=0$da$(0)' = 2x(0) = 0 \checkmark$. Bu yechim $C = 0$ bo'lganda umumiy formuladan kelib chiqadi.

**Javob:** $y = C e^{x^2}, \quad C \in \mathbb{R}$

---

### 2-misol: Koshi masalasi (Boshlang'ich shart bilan)
Tenglamaning $y(0) = 2$ shartni qanoatlantiruvchi xususiy yechimini toping:
$$
(1 + x^2) y' - 2xy = 0
$$

**Yechilishi:**
1. Tenglamani ajratamiz:
   $$(1 + x^2) \frac{dy}{dx} = 2xy \implies \frac{dy}{y} = \frac{2x}{1 + x^2} \, dx$$
2. Integrallaymiz:
   $$\int \frac{dy}{y} = \int \frac{2x}{1 + x^2} \, dx$$
   $$\ln|y| = \ln(1 + x^2) + \ln|C| \implies y = C(1 + x^2)$$
3. Boshlang'ich shartni qo'llaymiz ($x = 0$bo'lganda$y = 2$):
   $$2 = C(1 + 0^2) \implies C = 2$$
4. Xususiy yechim:
   $$y = 2(1 + x^2) = 2 + 2x^2$$

**Javob:** $y = 2(1 + x^2)$

---

### 3-misol: Bir jinsli differensial tenglama
Tenglamani yeching:
$$
x y' = x + y
$$

**Yechilishi:**
1. Ikkala tomonni $x$ ga bo'lamiz ($x \neq 0$):
   $$y' = 1 + \frac{y}{x}$$
   Bu bir jinsli tenglamadir!
2. Almashtirish kiritamiz: $\frac{y}{x} = u \implies y = u x \implies y' = u' x + u$.
3. Tenglamaga qo'yamiz:
   $$u' x + u = 1 + u \implies u' x = 1 \implies x \frac{du}{dx} = 1$$
4. O'zgaruvchilarni ajratamiz:
   $$du = \frac{dx}{x}$$
5. Integrallaymiz:
   $$u = \ln|x| + C$$
6. Dastlabki o'zgaruvchiga qaytamiz ($u = \frac{y}{x}$):
   $$\frac{y}{x} = \ln|x| + C \implies y = x(\ln|x| + C)$$

**Javob:** $y = x(\ln|x| + C)$

---

### 4-misol: Fizik tadbiq — Sovush qonuni (Nyuton qonuni)
Choynakdagi qaynoq suv ($100^\circ\text{C}$) harorati $20^\circ\text{C}$ bo'lgan xonaga qo'yildi. Nyuton qonuniga ko'ra jism haroratining o'zgarish tezligi jism va atrof-muhit haroratlari ayirmasiga proporsionaldir:
$$
\frac{dT}{dt} = -k(T - 20)
$$
Haroratning vaqt bo'yicha bog'lanish qonunini toping.

**Yechilishi:**
1. O'zgaruvchilarni ajratamiz:
   $$\frac{dT}{T - 20} = -k \, dt$$
2. Integrallaymiz:
   $$\ln(T - 20) = -kt + \ln C \implies T - 20 = C e^{-kt} \implies T(t) = 20 + C e^{-kt}$$
3. Dastlabki paytda ($t = 0$da$T = 100$):
   $$100 = 20 + C e^0 \implies C = 80$$
4. Harorat qonuni:
   $$T(t) = 20 + 80 e^{-kt}$$
*(Vaqt o'tishi bilan $t \to \infty$da$e^{-kt} \to 0$bo'ladi va choynak harorati xona harorati$20^\circ\text{C}$ ga tenglashadi!)*

**Javob:** $T(t) = 20 + 80 e^{-kt}$

---

## ⚠️ Talabalar ko'p yo'l qo'yadigan 3 ta jiddiy xato

1. **Differensiallarni maxrajda qoldirib integrallash:**
   > $\frac{1}{dy} = \frac{x}{dx}$kabi yozuv mutlaqo ma'noga ega emas! Integrallash uchun$dy$va$dx$ doimo **suratda** turishi shart.

2. **Integrallash doimiysi $+ C$ ni oxirida shunchaki qo'shib qo'yish:**
   > $\ln y = x \implies y = e^x + C$deb yozish qo'pol xatodir! To'g'risi:$\ln y = x + C \implies y = e^{x + C} = e^C \cdot e^x = C_1 e^x$. Doimiy son integrallash amali bajarilgan aynan o'sha qadamda qo'shiladi.

3. **Bir jinsli tenglamada $y'$o'rniga faqat$u'$ deb yozish:**
   > $y = ux$bo'lsa,$(ux)' = u'x + u$bo'ladi (ko'paytmaning hosilasi!). Ikkinchi$+u$ hadini unutish butun yechimni buzadi.

---

## 💡 Ustozdan maslahat

Tenglamaning bir jinsli ekanligini ko'z bilan tez aniqlash usuli:
Surat va maxrajdagi barcha hadlarning **darajalar yig'indisini tekshiring**.
Masalan: $\frac{x^2 + y^2}{2xy}$kasrida:$x^2$darajasi 2,$y^2$darajasi 2, maxrajda$x^1 y^1$darajasi$1+1=2$. Barcha hadlarning umumiy darajasi teng (2) bo'lgani uchun, u **aniq bir jinsli tenglama** hisoblanadi!

---

## ✍️ Mustaqil yechish uchun mashqlar

1. $y' = 3x^2 y$ tenglamaning umumiy yechimini toping.
2. $y' = \frac{y}{x} + 2$ tenglamani almashtirish orqali yeching.
3. $x \, dy - y \, dx = 0, \quad y(1) = 3$ Koshi masalasini yeching.
4. $y' = (x + y)^2$tenglamani$z = x + y$ almashtirish orqali yeching.

<details style="margin-top: 1rem; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); cursor: pointer;">
<summary style="font-weight: 700; color: var(--primary);">To'liq yechimlar va javoblar</summary>

**1-masala:** $\frac{dy}{y} = 3x^2 dx \implies \ln|y| = x^3 + C \implies y = C e^{x^3}$.

    

**2-masala:** $u'x + u = u + 2 \implies u'x = 2 \implies du = \frac{2dx}{x} \implies u = 2\ln|x| + C \implies y = x(2\ln|x| + C)$.

    

**3-masala:** $\frac{dy}{y} = \frac{dx}{x} \implies y = Cx$. $3 = C(1) \implies C = 3$. Javob: $y = 3x$.

    

**4-masala:** $z = x + y \implies z' = 1 + y' \implies z' - 1 = z^2 \implies \frac{dz}{z^2 + 1} = dx \implies \operatorname{arctg} z = x + C \implies x + y = \operatorname{tg}(x + C) \implies y = \operatorname{tg}(x + C) - x$.

</details>
