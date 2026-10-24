---
title: "Tartibini pasaytirish mumkin bo'lgan yuqori tartibli differensial tenglamalar"
module: "differensial-tenglamalar"
description: "Tartibini pasaytirishning 3 ta klassik turi (y^(n)=f(x), y qatnashmagan F(x, y', y'')=0, x qatnashmagan avtonom F(y, y', y'')=0 tenglamalar) va yuqori tartibli (n >= 3) chiziqli tenglamalar."
order: 10
duration: "30 daqiqa"
category: "Differensial tenglamalar"
difficulty: "O'rtacha"
---

## Kirish: Tartibni pasaytirish san'ati

Yuqori tartibli differensial tenglamalar ($n \ge 2$) fizika, texnika va iqtisodiy modellarda tez-tez uchraydi: Nyuton mexanikasidagi tezlanish ($a = x''(t)$), tebranishlar nazariyasi, elastiklik nazariyasidagi balkalarning egilishi ($y^{(4)} = q(x)/(EJ)$). Biroq ixtiyoriy $n$-tartibli tenglamani umumiy ko'rinishda analitik yechish usuli mavjud emas.

Amaliyotda eng samarali yo'l — **tenglama tartibini pasaytirish** (ruscha: *понижение порядка*). Agar maxsus almashtirish yordamida $n$-tartibli tenglamani $(n-1)$-tartibli yoki to'g'ridan-to'g'ri 1-tartibli differensial tenglamaga keltira olsak, uni avvalgi darslarda o'rgangan usullarimiz (ajraladigan, bir jinsli, chiziqli yoki Bernulli) orqali osongina yecha olamiz.

Ushbu darsda biz amaliy imtihonlarda eng ko'p uchraydigan 3 ta klassik turdagi tenglamalarni va $n \ge 3$ tartibli o'zgarmas koeffitsiyentli chiziqli tenglamalarni batafsil tahlil qilamiz.

---

## 1. Tartibini pasaytirish tushunchasi

Umumiy ko'rinishdagi $n$-tartibli differensial tenglama:
$$
F(x, y, y', y'', \dots, y^{(n)}) = 0
$$
yoki yuqori hosilaga nisbatan yechilgan ko'rinishda:
$$
y^{(n)} = f(x, y, y', \dots, y^{(n-1)})
$$

Bunday tenglamaning umumiy yechimi o'z ichiga $n$ ta ixtiyoriy o'zgarmas sonni ($C_1, C_2, \dots, C_n$) oladi:
$$
y = \Phi(x, C_1, C_2, \dots, C_n)
$$

Agar tenglamada qaysidir o'zgaruvchilar (erkli o'zgaruvchi $x$, noma'lum funksiya $y$ yoki uning quyi tartibli hosilalari) oshkor ko'rinishda qatnashmasa, maxsus almashtirishlar orqali tenglama tartibini bittaga yoki bir nechtaga kamaytirish mumkin.

---

## 2. 1-tur: $y^{(n)} = f(x)$ (Ketma-ket integrallash)

Bu eng sodda turdagi yuqori tartibli tenglama bo'lib, uning o'ng tomoni faqatgina $x$ erkli o'zgaruvchiga bog'liq (noma'lum funksiya $y$ va uning quyi hosilalari qatnashmaydi).

### Yechish algoritmi:
Tenglama ketma-ket $n$ marta $x$ bo'yicha integrallanadi:
$$
y^{(n-1)} = \int f(x) \, dx + C_1
$$
$$
y^{(n-2)} = \int \left( \int f(x) \, dx + C_1 \right) dx + C_2 = \int \left( \int f(x) \, dx \right) dx + C_1 x + C_2
$$
Va nihoyat, $n$-marta integrallanganda umumiy yechim hosil bo'ladi:
$$
y = \underbrace{\int \dots \int}_{n \text{ marta}} f(x) \, dx^n + \frac{C_1}{(n-1)!} x^{n-1} + \dots + C_{n-1} x + C_n
$$

> **Koshi formulasi (bitta integralga keltirish):**
> Agar $y(x_0)=y_0, y'(x_0)=y_0', \dots, y^{(n-1)}(x_0)=y_0^{(n-1)}$ boshlang'ich shartlar berilgan bo'lsa, $n$-karrali integralni bitta aniq integral orqali ifodalash mumkin:
> $$
> y(x) = \frac{1}{(n-1)!} \int_{x_0}^x (x - t)^{n-1} f(t) \, dt + \sum_{k=0}^{n-1} \frac{y_0^{(k)}}{k!} (x - x_0)^k
> $$

#### 1-misol:
Ushbu tenglamaning umumiy yechimini toping:
$$
y''' = e^{2x} + \cos x
$$

**Yechilishi:**
1. Birinchi marta integrallaymiz:
$$
y'' = \int (e^{2x} + \cos x) \, dx = \frac{1}{2} e^{2x} + \sin x + C_1
$$

2. Ikkinchi marta integrallaymiz:
$$
y' = \int \left( \frac{1}{2} e^{2x} + \sin x + C_1 \right) dx = \frac{1}{4} e^{2x} - \cos x + C_1 x + C_2
$$

3. Uchinchi marta integrallaymiz:
$$
y = \int \left( \frac{1}{4} e^{2x} - \cos x + C_1 x + C_2 \right) dx = \frac{1}{8} e^{2x} - \sin x + \frac{C_1}{2} x^2 + C_2 x + C_3
$$

O'zgarmas $\frac{C_1}{2}$ ni yangi o'zgarmas $\widetilde{C}_1$ deb belgilash ham mumkin. Shunda umumiy yechim:
$$
y = \frac{1}{8} e^{2x} - \sin x + C_1 x^2 + C_2 x + C_3
$$

---

## 3. 2-tur: $F(x, y', y'') = 0$ ($y$ funksiya oshkor qatnashmagan holat)

Tenglamada noma'lum funksiya $y$ oshkor ko'rinishda qatnashmaydi, ya'ni tenglama $x$ erkli o'zgaruvchi hamda $y'$ va $y''$ hosilalardan iborat.

Umumiyroq holatda, agar tenglamada $y, y', \dots, y^{(k-1)}$ hosilalar qatnashmasa:
$$
F(x, y^{(k)}, y^{(k+1)}, \dots, y^{(n)}) = 0
$$

### Yechish usuli:
Eng kichik tartibli hosila yangi noma'lum funksiya deb belgilanadi:
$$
y' = p(x) \implies y'' = p'(x) = \frac{dp}{dx}
$$
(Umumiy holatda: $y^{(k)} = p(x) \implies y^{(k+1)} = p', \dots, y^{(n)} = p^{(n-k)}$).

Bu almashtirish tenglama tartibini bittaga pasaytirib, $p(x)$ ga nisbatan 1-tartibli differensial tenglamaga olib keladi:
$$
F(x, p, p') = 0
$$

Ushbu 1-tartibli tenglamani yechib, $p = \varphi(x, C_1)$ topiladi. So'ngra $p = y'$ ekanligidan:
$$
y' = \varphi(x, C_1) \implies y = \int \varphi(x, C_1) \, dx + C_2
$$

#### 2-misol (Koshi masalasi):
Tenglamani berilgan boshlang'ich shartlarda yeching:
$$
x y'' - y' = x^2 e^x, \quad y(1) = 0, \quad y'(1) = 0
$$

**Yechilishi:**
1. Tenglamada $y$ oshkor qatnashmagan. Almashtirish kiritamiz:
$$
y' = p(x), \quad y'' = p'(x)
$$
Tenglamaga qo'yamiz:
$$
x p' - p = x^2 e^x
$$

2. Ikkala tomonni $x \neq 0$ ga bo'lamiz:
$$
p' - \frac{1}{x} p = x e^x
$$
Bu $p(x)$ ga nisbatan 1-tartibli chiziqli differensial tenglamadir!

3. Integrallovchi ko'paytuvchi yoki Bernulli $p = u \cdot v$ usulidan foydalanamiz:
$$
\mu(x) = e^{\int -\frac{1}{x} dx} = e^{-\ln|x|} = \frac{1}{x}
$$
Tenglamaning har ikkala tomonini $\frac{1}{x}$ ga ko'paytiramiz:
$$
\frac{1}{x} p' - \frac{1}{x^2} p = e^x \implies \left( \frac{p}{x} \right)' = e^x
$$
Integrallaymiz:
$$
\frac{p}{x} = e^x + C_1 \implies p(x) = x e^x + C_1 x
$$

4. Boshlang'ich shart $y'(1) = 0 \implies p(1) = 0$ dan $C_1$ ni topamiz:
$$
1 \cdot e^1 + C_1 \cdot 1 = 0 \implies C_1 = -e
$$
Demak:
$$
p(x) = y' = x e^x - e x
$$

5. Endi $y(x)$ ni topish uchun integrallaymiz:
$$
y(x) = \int (x e^x - e x) \, dx = \int x e^x \, dx - \frac{e x^2}{2} + C_2
$$
Bo'laklab integrallash: $\int x e^x dx = x e^x - \int e^x dx = (x - 1)e^x$.
$$
y(x) = (x - 1)e^x - \frac{e x^2}{2} + C_2
$$

6. Ikkinchi boshlang'ich shart $y(1) = 0$:
$$
(1 - 1)e^1 - \frac{e \cdot 1^2}{2} + C_2 = 0 \implies -\frac{e}{2} + C_2 = 0 \implies C_2 = \frac{e}{2}
$$

Yakuniy xususiy yechim:
$$
y(x) = (x - 1)e^x - \frac{e}{2} x^2 + \frac{e}{2}
$$

---

## 4. 3-tur: $F(y, y', y'') = 0$ ($x$ erkli o'zgaruvchi oshkor qatnashmagan holat)

Tenglamada erkli o'zgaruvchi $x$ oshkor qatnashmaydi. Bunday tenglamalar fizika va dinamikada **avtonom sistemalar** deb ataladi (masalan, energiyaning saqlanish qonuniga bo'ysunuvchi tizimlar).

### Muhim almashtirish (Zanjir qoidasi):
Bu yerda yangi erkli o'zgaruvchi sifatida $x$ emas, balki **$y$ ning o'zi** tanlanadi!
$$
y' = p(y)
$$
U holda ikkinchi tartibli hosila murakkab funksiya hosilasi qoidasiga ko'ra hisoblanadi:
$$
y'' = \frac{d(y')}{dx} = \frac{d(p)}{dx} = \frac{dp}{dy} \cdot \frac{dy}{dx} = \frac{dp}{dy} \cdot p = p \frac{dp}{dy}
$$

> **Eslab qoling:**
> Agar tenglamada $x$ bo'lmasa, $y'' = p \frac{dp}{dy}$ deb almashtiriladi (bu yerda hosila $y$ bo'yicha olinadi!).

Natijada $p(y)$ ga nisbatan 1-tartibli tenglama hosil bo'ladi:
$$
F\left(y, p, p \frac{dp}{dy}\right) = 0
$$
Uni yechib $p = \psi(y, C_1)$ topiladi. So'ngra $y' = \frac{dy}{dx} = \psi(y, C_1)$ tenglikdan o'zgaruvchilarni ajratamiz:
$$
\frac{dy}{\psi(y, C_1)} = dx \implies \int \frac{dy}{\psi(y, C_1)} = x + C_2
$$

#### 3-misol:
Tenglamaning umumiy yechimini toping:
$$
y y'' + (y')^2 = 0
$$

**Yechilishi:**
1. Tenglamada $x$ oshkor qatnashmagan. Almashtirish:
$$
y' = p(y), \quad y'' = p \frac{dp}{dy}
$$
Tenglamaga qo'yamiz:
$$
y \cdot p \frac{dp}{dy} + p^2 = 0
$$

2. $p$ ni qavsdan tashqariga chiqaramiz:
$$
p \left( y \frac{dp}{dy} + p \right) = 0
$$

Bundan ikkita holat kelib chiqadi:
- **a) $p = 0 \implies y' = 0 \implies y = C$** (o'zgarmas yechim).
- **b) $y \frac{dp}{dy} + p = 0$**:
$$
y \frac{dp}{dy} = -p \implies \frac{dp}{p} = -\frac{dy}{y}
$$
Integrallaymiz:
$$
\ln|p| = -\ln|y| + \ln|C_1| \implies p = \frac{C_1}{y}
$$

3. Endi $p = y' = \frac{dy}{dx}$ ekanligini hisobga olamiz:
$$
\frac{dy}{dx} = \frac{C_1}{y} \implies y \, dy = C_1 \, dx
$$
Integrallaymiz:
$$
\frac{y^2}{2} = C_1 x + C_2 \implies y^2 = 2C_1 x + 2C_2
$$
O'zgarmaslarni $2C_1 \to \widetilde{C}_1$ va $2C_2 \to \widetilde{C}_2$ deb belgilasak:
$$
y^2 = C_1 x + C_2 \implies y = \pm \sqrt{C_1 x + C_2}
$$
E'tibor bering, $C_1 = 0$ bo'lganda $y = \pm \sqrt{C_2} = \text{const}$ yechimi ham ushbu oilaga kiradi.

---

## 5. Yuqori tartibli ($n \ge 3$) o'zgarmas koeffitsiyentli chiziqli DT

Ko'rinishi:
$$
a_n y^{(n)} + a_{n-1} y^{(n-1)} + \dots + a_1 y' + a_0 y = 0
$$
bu yerda $a_n, a_{n-1}, \dots, a_0$ — haqiqiy o'zgarmas sonlar ($a_n \neq 0$).

### Xarakteristik tenglama:
Eyler usuliga ko'ra $y = e^{kx}$ deb olsak, $n$-darajali algebraik xarakteristik tenglama hosil bo'ladi:
$$
a_n k^n + a_{n-1} k^{n-1} + \dots + a_1 k + a_0 = 0
$$

Algebra asosiy teoremasiga ko'ra, bu tenglama karraliligi bilan hisoblaganda aynan $n$ ta (haqiqiy yoki kompleks) ildizga ega.

### Fundamental yechimlar sistemasi (FYS) tuzish qoidalari:

| Ildiz turi | Karraliligi | FYS ga mos keluvchi xususiy yechimlar |
|---|---|---|
| Oddiy haqiqiy ildiz $k$ | 1 | $e^{kx}$ |
| Karrali haqiqiy ildiz $k$ | $m$ | $e^{kx}, \; x e^{kx}, \; x^2 e^{kx}, \; \dots, \; x^{m-1} e^{kx}$ |
| Qo'shma kompleks ildizlar $\alpha \pm i\beta$ | 1 | $e^{\alpha x} \cos(\beta x), \; e^{\alpha x} \sin(\beta x)$ |
| Karrali kompleks ildizlar $\alpha \pm i\beta$ | $m$ | $e^{\alpha x} \cos(\beta x), \; x e^{\alpha x} \cos(\beta x), \; \dots, \; x^{m-1} e^{\alpha x} \cos(\beta x)$<br>$e^{\alpha x} \sin(\beta x), \; x e^{\alpha x} \sin(\beta x), \; \dots, \; x^{m-1} e^{\alpha x} \sin(\beta x)$ |

Umumiy yechim barcha $n$ ta fundamental yechimlarning chiziqli kombinatsiyasidir:
$$
y = C_1 y_1 + C_2 y_2 + \dots + C_n y_n
$$

#### 4-misol:
Tenglamaning umumiy yechimini toping:
$$
y^{(4)} - 16y = 0
$$

**Yechilishi:**
1. Xarakteristik tenglamani tuzamiz:
$$
k^4 - 16 = 0
$$
2. Ko'paytuvchilarga ajratamiz:
$$
(k^2 - 4)(k^2 + 4) = 0 \implies (k - 2)(k + 2)(k^2 + 4) = 0
$$
Ildizlar:
- $k_1 = 2$ — oddiy haqiqiy ildiz $\implies y_1 = e^{2x}$
- $k_2 = -2$ — oddiy haqiqiy ildiz $\implies y_2 = e^{-2x}$
- $k_{3,4} = \pm 2i$ — sof mavhum ildizlar ($\alpha = 0, \beta = 2$) $\implies y_3 = \cos(2x), \; y_4 = \sin(2x)$

3. Umumiy yechim:
$$
y = C_1 e^{2x} + C_2 e^{-2x} + C_3 \cos(2x) + C_4 \sin(2x)
$$

---

## 6. To'liq yechilgan namunaviy masalalar

### 5-masala (2-tur va Koshi masalasi):
$$
(1 + x^2) y'' + 2x y' = 12x^3, \quad y(0) = 1, \quad y'(0) = 3
$$

**Yechilishi:**
Tenglamada $y$ yo'q. $y' = p(x) \implies y'' = p'(x)$:
$$
(1 + x^2) p' + 2x p = 12x^3
$$
Chap tomonga e'tibor bering: bu ko'paytmaning hosilasi!
$$
\left[ (1 + x^2) p \right]' = 12x^3
$$
To'g'ridan-to'g'ri integrallaymiz:
$$
(1 + x^2) p = \int 12x^3 \, dx = 3x^4 + C_1
$$
$$
p(x) = \frac{3x^4 + C_1}{1 + x^2}
$$
Boshlang'ich shart $y'(0) = 3 \implies p(0) = 3$:
$$
\frac{0 + C_1}{1 + 0} = 3 \implies C_1 = 3
$$
Demak:
$$
p(x) = \frac{3x^4 + 3}{1 + x^2} = \frac{3(x^4 + 1)}{x^2 + 1}
$$
Kasr suratiga $3x^4 - 3 + 6$ sun'iy usulini qo'llaymiz:
$$
p(x) = \frac{3(x^4 - 1) + 6}{x^2 + 1} = \frac{3(x^2 - 1)(x^2 + 1) + 6}{x^2 + 1} = 3(x^2 - 1) + \frac{6}{1 + x^2} = 3x^2 - 3 + \frac{6}{1 + x^2}
$$
Endi $y(x) = \int p(x) dx$:
$$
y(x) = \int \left( 3x^2 - 3 + \frac{6}{1 + x^2} \right) dx = x^3 - 3x + 6 \arctan x + C_2
$$
Boshlang'ich shart $y(0) = 1$:
$$
0 - 0 + 6 \arctan(0) + C_2 = 1 \implies C_2 = 1
$$
**Javob:**
$$
y = x^3 - 3x + 6 \arctan x + 1
$$

---

### 6-masala (3-tur avtonom tenglama):
$$
y'' = 2 y^3, \quad y(0) = 1, \quad y'(0) = 1
$$

**Yechilishi:**
Tenglamada $x$ oshkor qatnashmagan. $y' = p(y), y'' = p \frac{dp}{dy}$:
$$
p \frac{dp}{dy} = 2y^3
$$
O'zgaruvchilarni ajratamiz:
$$
p \, dp = 2y^3 \, dy \implies \int p \, dp = \int 2y^3 \, dy
$$
$$
\frac{p^2}{2} = \frac{y^4}{2} + \frac{C_1}{2} \implies p^2 = y^4 + C_1
$$
Boshlang'ich shartlar: $x = 0$ da $y = 1, y' = p = 1$:
$$
1^2 = 1^4 + C_1 \implies C_1 = 0
$$
Shunday qilib:
$$
p^2 = y^4 \implies p = \pm y^2
$$
$y'(0) = 1 > 0$ bo'lgani uchun musbat ishorani olamiz:
$$
p = \frac{dy}{dx} = y^2
$$
O'zgaruvchilarni ajratamiz:
$$
\frac{dy}{y^2} = dx \implies -\frac{1}{y} = x + C_2
$$
$x = 0, y = 1$ shartdan:
$$
-\frac{1}{1} = 0 + C_2 \implies C_2 = -1
$$
Demak:
$$
-\frac{1}{y} = x - 1 \implies \frac{1}{y} = 1 - x \implies y = \frac{1}{1 - x}
$$

**Javob:**
$$
y = \frac{1}{1 - x}
$$

---

## 7. Mustaqil mashqlar va javoblar

Quyidagi tenglamalarni mustaqil yeching va javoblaringizni tekshiring:

1. **1-tur:** $y''' = \frac{6}{x^4}$ tenglamaning umumiy yechimini toping.
2. **2-tur:** $x y'' + y' = 4x$ tenglamaning umumiy yechimini toping.
3. **2-tur (Koshi masalasi):** $y'' (x^2 + 1) = 2x y', \quad y(0) = 1, \; y'(0) = 3$.
4. **3-tur:** $2 y y'' - (y')^2 = 0$ tenglamaning umumiy yechimini toping.
5. **Yuqori tartibli chiziqli:** $y''' - 6y'' + 12y' - 8y = 0$ tenglamaning umumiy yechimini toping.
6. **Yuqori tartibli chiziqli:** $y^{(5)} - 2y''' + y' = 0$ tenglamaning umumiy yechimini toping.

---

### Mashqlarning to'liq javoblari:

1. **1-mashq:**
   - $y'' = \int 6x^{-4} dx = -2x^{-3} + C_1$
   - $y' = \int (-2x^{-3} + C_1) dx = x^{-2} + C_1 x + C_2$
   - $y = \int (x^{-2} + C_1 x + C_2) dx = -\frac{1}{x} + C_1 x^2 + C_2 x + C_3$.
   **Javob:** $y = -\frac{1}{x} + C_1 x^2 + C_2 x + C_3$.

2. **2-mashq:**
   - $y' = p \implies x p' + p = 4x \implies (xp)' = 4x$.
   - $xp = 2x^2 + C_1 \implies p = 2x + \frac{C_1}{x}$.
   - $y = \int (2x + \frac{C_1}{x}) dx = x^2 + C_1 \ln|x| + C_2$.
   **Javob:** $y = x^2 + C_1 \ln|x| + C_2$.

3. **3-mashq:**
   - $y' = p \implies \frac{dp}{p} = \frac{2x}{x^2+1} dx \implies \ln|p| = \ln(x^2+1) + \ln|C_1| \implies p = C_1(x^2+1)$.
   - $y'(0) = 3 \implies C_1 = 3 \implies y' = 3x^2 + 3$.
   - $y = x^3 + 3x + C_2$. $y(0) = 1 \implies C_2 = 1$.
   **Javob:** $y = x^3 + 3x + 1$.

4. **4-mashq:**
   - $y' = p, y'' = p \frac{dp}{dy} \implies 2yp \frac{dp}{dy} - p^2 = 0 \implies p(2y \frac{dp}{dy} - p) = 0$.
   - $p \neq 0$ uchun: $\frac{2 dp}{p} = \frac{dy}{y} \implies 2\ln|p| = \ln|y| + \ln|C_1| \implies p^2 = C_1 y \implies p = \sqrt{C_1 y}$.
   - $\frac{dy}{\sqrt{y}} = \sqrt{C_1} dx \implies 2\sqrt{y} = \sqrt{C_1} x + C_2 \implies y = (C_1 x + C_2)^2$.
   **Javob:** $y = (C_1 x + C_2)^2$ (va $y = C$).

5. **5-mashq:**
   - Xarakteristik tenglama: $k^3 - 6k^2 + 12k - 8 = 0 \implies (k - 2)^3 = 0$.
   - 3 karrali ildiz: $k_1 = k_2 = k_3 = 2$.
   **Javob:** $y = (C_1 + C_2 x + C_3 x^2) e^{2x}$.

6. **6-mashq:**
   - $k^5 - 2k^3 + k = 0 \implies k(k^4 - 2k^2 + 1) = 0 \implies k(k^2 - 1)^2 = 0 \implies k(k-1)^2(k+1)^2 = 0$.
   - Ildizlar: $k = 0$ (1 karrali), $k = 1$ (2 karrali), $k = -1$ (2 karrali).
   **Javob:** $y = C_1 + (C_2 + C_3 x)e^x + (C_4 + C_5 x)e^{-x}$.
