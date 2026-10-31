---
title: "Eyler differensial tenglamasi va o'zgaruvchan koeffitsiyentli chiziqli tenglamalar"
module: "differensial-tenglamalar"
order: 13
description: "O'zgaruvchan koeffitsiyentli chiziqli differensial tenglamalar, Eyler tenglamasi a·x²·y'' + b·x·y' + c·y = f(x), x = e^t almashtirishi, xarakteristik tenglama va Koshi masalalarini yechish."
---

## 📌 Kirish va Geometrik/Fizik Mohiyat

Differensial tenglamalar nazariyasida o'zgarmas koeffitsiyentli chiziqli tenglamalar ($a y'' + b y' + c y = f(x)$) xarakteristik tenglama usuli bilan to'liq hal etilgan. Biroq, real fizik jarayonlar va muhandislik masalalarida ko'pincha koeffitsiyentlari argument $x$ ga bog'liq bo'lgan differensial tenglamalar vujudga keladi. Umumiy ko'rinishdagi o'zgaruvchan koeffitsiyentli tenglamalar elementar funksiyalarda integrallanmaydi (ularning yechimlari Besssel, Lejandr yoki Gauss gipergeometrik funksiyalari orqali ifodalanadi).

Biroq, bu murakkabliklar ichida alohida go'zallik va simmetriyaga ega bo'lgan ajoyib bir sinf mavjudki, unda argument $x$ ning darajasi noma'lum funksiya hosilasining tartibiga qat'iy mos keladi:
- $n$-tartibli hosila $y^{(n)}$ oldida $x^n$ ko'paytuvchisi;
- 2-tartibli hosila $y''$ oldida $x^2$ ko'paytuvchisi;
- 1-tartibli hosila $y'$ oldida $x^1$ ko'paytuvchisi;
- Funksiyaning o'zi $y$ oldida esa $x^0 = 1$ turadi.

Ushbu qonuniyatga bo'ysunuvchi tenglamalar fanga buyuk Leonard Eyler tomonidan kiritilgan bo'lib, **Eyler differensial tenglamasi** deb ataladi.

### Fizik va Geometrik Mohiyati
1. **Masshtab invariantligi (O'xshashlik simmetriyasi):**
   Eyler tenglamasi $x$ o'qini masshtablashga, ya'ni $x \to c \cdot x$ almashtirishiga nisbatan invariant (o'zgarmas) qoladi. Haqiqatan ham, agar $x$ ni $c$ marta kattalashtirsak, hosilalar $\frac{dy}{dx}$ esa $c$ marta kamayadi, natijada ularning ko'paytmasi $x \frac{dy}{dx}$ o'zgarmay saqlanadi. Aynan shu sababli Eyler tenglamasi markaziy simmetriyaga ega bo'lgan masalalarda paydo bo'ladi.
2. **Radial tebranishlar va maydonlar:**
   Silindrik yoki sferik koordinatalar sistemasida Laplas tenglamasi $\nabla^2 u = 0$ yoki to'lqin tenglamasini o'zgaruvchilarga ajratish (Furye usuli) natijasida radial yo'nalishdagi potensial yoki deformatsiya aynan Eyler tenglamasiga kelib taqaladi. Masalan, qalin devorli quvurlarning elastiklik deformatsiyasi (Lame masalasi), aylanuvchi disklarning mustahkamligi va elektrostatik potensialning taqsimoti Eyler tenglamalari orqali modellashtiriladi.

---

## 📐 Asosiy Nazariya, Qoidalar va Teoremalar

### 1. Eyler tenglamasining umumiy ko'rinishi
$n$-tartibli Eyler differensial tenglamasining umumiy ko'rinishi quyidagicha yoziladi:
$$
a_n x^n y^{(n)} + a_{n-1} x^{n-1} y^{(n-1)} + \dots + a_1 x y' + a_0 y = f(x)
$$
Bu yerda $a_n, a_{n-1}, \dots, a_0$ — berilgan o'zgarmas haqiqiy sonlar ($a_n \neq 0$), $f(x)$ — uzluksiz funksiya, $x \neq 0$.

Odatda tenglama $x > 0$ sohada qaraladi. Agar $x < 0$ bo'lsa, $x = -e^t$ almashtirishi kiritiladi yoki $t = \ln|x|$ deb olinadi.

2-tartibli Eyler tenglamasining kanonik ko'rinishi:
$$
a x^2 y'' + b x y' + c y = f(x), \quad (x > 0, \, a \neq 0)
$$

### 2. Standart almashtirish usuli: $x = e^t$
Eyler tenglamasini o'zgarmas koeffitsiyentli chiziqli differensial tenglamaga keltirishning fundamental usuli — yangi erkli o'zgaruvchi $t$ ni kiritishdir:
$$
x = e^t \iff t = \ln x \quad (x > 0)
$$

Murakkab funksiyaning hosilasini hisoblash qoidasi (zanjir qoidasi) bo'yicha $x$ bo'yicha hosilalarni yangi o'zgaruvchi $t$ orqali ifodalaymiz:

1. **Birinchi tartibli hosila:**
   $$
   y'_x = \frac{dy}{dx} = \frac{dy}{dt} \cdot \frac{dt}{dx} = \frac{dy}{dt} \cdot \frac{1}{x} = \frac{1}{x} y'_t
   $$
   Demak:
   $$
   x \cdot y'_x = y'_t
   $$

2. **Ikkinchi tartibli hosila:**
   $$
   y''_{xx} = \frac{d}{dx}\left( \frac{1}{x} y'_t \right) = -\frac{1}{x^2} y'_t + \frac{1}{x} \frac{d}{dx}(y'_t) = -\frac{1}{x^2} y'_t + \frac{1}{x} \left( \frac{d^2 y}{dt^2} \frac{dt}{dx} \right) = -\frac{1}{x^2} y'_t + \frac{1}{x^2} y''_{tt}
   $$
   Demak:
   $$
   x^2 \cdot y''_{xx} = y''_{tt} - y'_t
   $$

3. **Uchinchi tartibli hosila (zarurat tug'ilganda):**
   $$
   x^3 \cdot y'''_{xxx} = y'''_{ttt} - 3y''_{tt} + 2y'_t
   $$

Ushbu ifodalarni 2-tartibli tenglamaga keltirib qo'ysak:
$$
a (y''_{tt} - y'_t) + b y'_t + c y = f(e^t)
$$
Qavslarni ochib, guruhlasak:
$$
a y''_{tt} + (b - a) y'_t + c y = f(e^t)
$$
Bu esa o'zgarmas koeffitsiyentli oddiy chiziqli differensial tenglamadir!

### 3. To'g'ridan-to'g'ri xususiy yechim qidirish usuli ($y = x^k$)
Bir jinsli Eyler tenglamasi ($f(x) \equiv 0$) uchun o'zgaruvchini almashtirmasdan, bevosita yechimni darajali funksiya ko'rinishida qidirish mumkin:
$$
y = x^k \implies y' = k x^{k-1}, \quad y'' = k(k - 1) x^{k-2}
$$
Tenglamaga qo'yamiz:
$$
a x^2 \cdot k(k - 1) x^{k-2} + b x \cdot k x^{k-1} + c x^k = 0
$$
$x^k \neq 0$ ga qisqartirib yuborsak, **Eyler xarakteristik tenglamasi** hosil bo'ladi:
$$
a k(k - 1) + b k + c = 0 \iff a k^2 + (b - a) k + c = 0
$$

Ushbu kvadrat tenglamaning diskriminanti $D = (b - a)^2 - 4ac$ ga bog'liq holda 3 ta holat yuz beradi:

| Diskriminant | Ildizlar $k_1, k_2$ | Fundamental yechimlar tizimi (FYET) | Umumiy yechim $y(x)$ |
| :--- | :--- | :--- | :--- |
| **$D > 0$** | Haqiqiy va har xil: $k_1 \neq k_2$ | $y_1 = x^{k_1}, \quad y_2 = x^{k_2}$ | $y = C_1 x^{k_1} + C_2 x^{k_2}$ |
| **$D = 0$** | Karrali haqiqiy: $k_1 = k_2 = k$ | $y_1 = x^k, \quad y_2 = x^k \ln x$ | $y = x^k (C_1 + C_2 \ln x)$ |
| **$D < 0$** | Kompleks-qo'shma: $k_{1,2} = \alpha \pm i\beta$ | $y_1 = x^\alpha \cos(\beta \ln x), \quad y_2 = x^\alpha \sin(\beta \ln x)$ | $y = x^\alpha \left[ C_1 \cos(\beta \ln x) + C_2 \sin(\beta \ln x) \right]$ |

> **Isbotlash izohi (Kompleks hol uchun):**
> Eyler formulasi bo'yicha:
> $$
> x^{\alpha \pm i\beta} = x^\alpha \cdot x^{\pm i\beta} = x^\alpha \cdot e^{\pm i\beta \ln x} = x^\alpha \left[ \cos(\beta \ln x) \pm i \sin(\beta \ln x) \right]
> $$
> Haqiqiy qism va mavhum qism alohida-alohida fundamental yechimlarni tashkil etadi.

### 4. Umumlashtirilgan Eyler tenglamasi
Agar tenglama $x$ darajalari o'rniga chiziqli bino'm $(a x + b)$ ning darajalarini o'z ichiga olsa:
$$
A (a x + b)^2 y'' + B (a x + b) y' + C y = f(x)
$$
U holda almashtirish quyidagicha tanlanadi:
$$
a x + b = e^t \iff t = \ln(a x + b)
$$
Bunda $\frac{dt}{dx} = \frac{a}{a x + b}$ bo'lgani sababli, hosilalarda qo'shimcha $a$ va $a^2$ ko'paytuvchilari yuzaga keladi.

---

## 📝 Qadamma-qadam Yechilgan Universitet Misollari

### 1-misol: Haqiqiy va har xil ildizlar holi (Koshi masalasi)
**Shart:** Quyidagi differensial tenglamaning berilgan boshlang'ich shartlarni qanoatlantiruvchi yechimini toping:
$$
x^2 y'' - 2x y' + 2y = 0, \quad y(1) = 3, \quad y'(1) = 5 \quad (x > 0)
$$

**Yechish:**
1. **1-qadam: Tenglama turini aniqlash.**
   Koeffitsiyentlar $x^2 y''$, $x y'$ va $y$ bo'lgani uchun bu 2-tartibli bir jinsli Eyler tenglamasidir. Bu yerda $a = 1$, $b = -2$, $c = 2$.
2. **2-qadam: Xarakteristik tenglamani tuzish.**
   Yechimni $y = x^k$ ko'rinishida qidiramiz:
   $$
   k(k - 1) - 2k + 2 = 0 \implies k^2 - 3k + 2 = 0
   $$
3. **3-qadam: Ildizlarni topish.**
   Viyet teoremasiga ko'ra:
   $$
   (k - 1)(k - 2) = 0 \implies k_1 = 1, \quad k_2 = 2
   $$
   Ildizlar haqiqiy va har xil ($D > 0$).
4. **4-qadam: Umumiy yechimni yozish.**
   $$
   y(x) = C_1 x^1 + C_2 x^2 = C_1 x + C_2 x^2
   $$
5. **5-qadam: Koshi masalasini yechish (o'zgarmaslarni topish).**
   Hosilasini hisoblaymiz:
   $$
   y'(x) = C_1 + 2 C_2 x
   $$
   Boshlang'ich shartlar $y(1) = 3$ va $y'(1) = 5$ ni qo'yamiz:
   $$
   \begin{cases}
   C_1 \cdot 1 + C_2 \cdot 1^2 = 3 \\
   C_1 + 2 C_2 \cdot 1 = 5
   \end{cases}
   \implies
   \begin{cases}
   C_1 + C_2 = 3 \\
   C_1 + 2C_2 = 5
   \end{cases}
   $$
   Ikkinchi tenglamadan birinchisini ayiramiz:
   $$
   C_2 = 2 \implies C_1 = 3 - 2 = 1
   $$
6. **Javob:**
   $$
   y(x) = x + 2x^2
   $$

---

### 2-misol: Karrali ildizlar holi
**Shart:** Tenglamaning umumiy yechimini toping:
$$
x^2 y'' + 3x y' + y = 0 \quad (x > 0)
$$

**Yechish:**
1. **1-qadam: Xarakteristik tenglama.**
   Bu yerda $a = 1, b = 3, c = 1$.
   $$
   a k(k - 1) + b k + c = 0 \implies 1 \cdot k(k - 1) + 3k + 1 = 0
   $$
   $$
   k^2 - k + 3k + 1 = 0 \implies k^2 + 2k + 1 = 0 \implies (k + 1)^2 = 0
   $$
2. **2-qadam: Ildizlar tahlili.**
   Tenglama karrali ildizga ega:
   $$
   k_1 = k_2 = -1
   $$
3. **3-qadam: Fundamental yechimlar.**
   Birinchi yechim: $y_1 = x^{-1} = \frac{1}{x}$.
   Ikkinchi chiziqli erkli yechim esa $\ln x$ ga ko'paytirish orqali hosil qilinadi: $y_2 = x^{-1} \ln x = \frac{\ln x}{x}$.
4. **4-qadam: Umumiy yechim.**
   $$
   y(x) = C_1 x^{-1} + C_2 x^{-1} \ln x = \frac{C_1 + C_2 \ln x}{x}
   $$
5. **Javob:**
   $$
   y(x) = \frac{C_1 + C_2 \ln x}{x}
   $$

---

### 3-misol: Kompleks ildizlar holi
**Shart:** Tenglamaning umumiy yechimini toping:
$$
x^2 y'' + x y' + 4y = 0 \quad (x > 0)
$$

**Yechish:**
1. **1-qadam: Xarakteristik tenglama.**
   Bu yerda $a = 1, b = 1, c = 4$.
   $$
   k(k - 1) + 1 \cdot k + 4 = 0 \implies k^2 - k + k + 4 = 0 \implies k^2 + 4 = 0
   $$
2. **2-qadam: Ildizlar.**
   $$
   k^2 = -4 \implies k_{1,2} = \pm 2i
   $$
   Demak, haqiqiy qism $\alpha = 0$, mavhum qism $\beta = 2$.
3. **3-qadam: Umumiy yechim.**
   Teoremaga binoan, umumiy yechim quyidagi ko'rinishga ega bo'ladi:
   $$
   y(x) = x^0 \left[ C_1 \cos(2 \ln x) + C_2 \sin(2 \ln x) \right]
   $$
4. **Javob:**
   $$
   y(x) = C_1 \cos(2 \ln x) + C_2 \sin(2 \ln x)
   $$

---

### 4-misol: Bir jinsli bo'lmagan Eyler tenglamasi (Filippov to'plamidan)
**Shart:** Quyidagi bir jinsli bo'lmagan differensial tenglamaning umumiy yechimini toping:
$$
x^2 y'' - x y' + y = 2x \quad (x > 0)
$$

**Yechish:**
1. **1-qadam: O'zgaruvchini almashtirish ($x = e^t$).**
   $$
   x = e^t \iff t = \ln x
   $$
   Hosilalarni ifodalaymiz:
   $$
   x y' = y'_t, \quad x^2 y'' = y''_{tt} - y'_t
   $$
   Tenglamaga qo'yamiz:
   $$
   (y''_{tt} - y'_t) - y'_t + y = 2e^t
   $$
   $$
   y''_{tt} - 2y'_t + y = 2e^t
   $$
   Natijada o'zgarmas koeffitsiyentli bir jinsli bo'lmagan tenglama hosil bo'ldi.
2. **2-qadam: Bir jinsli qismini yechish.**
   $$
   k^2 - 2k + 1 = 0 \implies (k - 1)^2 = 0 \implies k_1 = k_2 = 1
   $$
   Bir jinsli qismning umumiy yechimi:
   $$
   y_0(t) = (C_1 + C_2 t) e^t
   $$
3. **3-qadam: Xususiy yechimni topish ($y_x(t)$).**
   O'ng tomon $f(t) = 2e^t = 2e^{1 \cdot t}$.
   Bu yerda ko'rsatkich $\gamma = 1$ xarakteristik tenglamaning 2 karrali ildiziga to'g'ri keladi ($r = 2$).
   Shuning uchun xususiy yechimni quyidagi ko'rinishda qidiramiz:
   $$
   y_x(t) = A \cdot t^2 e^t
   $$
   Hosilalarni hisoblaymiz:
   $$
   y'_x(t) = A(2t e^t + t^2 e^t) = A(t^2 + 2t) e^t
   $$
   $$
   y''_x(t) = A(2t + 2) e^t + A(t^2 + 2t) e^t = A(t^2 + 4t + 2) e^t
   $$
   Bularni $y''_{tt} - 2y'_t + y = 2e^t$ tenglamaga qo'yamiz:
   $$
   A(t^2 + 4t + 2)e^t - 2A(t^2 + 2t)e^t + A t^2 e^t = 2e^t
   $$
   $e^t$ ga qisqartirib, koeffitsiyentlarni yig'amiz:
   $$
   A(t^2 - 2t^2 + t^2) + A(4t - 4t) + 2A = 2
   $$
   $$
   2A = 2 \implies A = 1
   $$
   Demak, xususiy yechim: $y_x(t) = t^2 e^t$.
4. **4-qadam: $t$ bo'yicha to'liq umumiy yechim.**
   $$
   y(t) = y_0(t) + y_x(t) = (C_1 + C_2 t) e^t + t^2 e^t = (C_1 + C_2 t + t^2) e^t
   $$
5. **5-qadam: Dastlabki o'zgaruvchi $x$ ga qaytish.**
   $e^t = x$ va $t = \ln x$ ekanini hisobga olsak:
   $$
   y(x) = (C_1 + C_2 \ln x + \ln^2 x) x
   $$
6. **Javob:**
   $$
   y(x) = C_1 x + C_2 x \ln x + x \ln^2 x
   $$

---

## ⚠️ Talabalar Eng Ko'p Yo'l Qo'yadigan Xatolar va Tuzoqlar

1. **Ikkinchi tartibli hosila almashtirishida chiziqli hadni yo'qotish:**
   Eng keng tarqalgan xato — $x^2 y''$ ifodani shunchaki $y''_{tt}$ deb yozib qo'yishdir.
   - ❌ **Xato:** $x^2 y'' \to y''_{tt}$
   - ✅ **To'g'ri:** $x^2 y'' \to y''_{tt} - y'_t$
   Bu xato xarakteristik tenglamaning o'rta koeffitsiyentini butunlay buzadi va noto'g'ri ildizlarga olib keladi.

2. **Karrali ildizlarda $x$ o'rniga $\ln x$ ko'paytirishni adashtirish:**
   O'zgarmas koeffitsiyentli tenglamalarda karrali ildiz bo'lsa, ikkinchi yechim $t e^{k t}$ bo'ladi. $x$ o'zgaruvchisiga qaytganda $t \to \ln x$ bo'lgani uchun ko'paytuvchi $x$ emas, balki $\ln x$ bo'lishi kerak!
   - ❌ **Xato:** $y = C_1 x^k + C_2 x \cdot x^k = C_1 x^k + C_2 x^{k+1}$
   - ✅ **To'g'ri:** $y = C_1 x^k + C_2 x^k \ln x$

3. **Bir jinsli bo'lmagan qismni almashtirishni unutish:**
   Tenglamaning chap tomonini $t$ ga o'tkazib, o'ng tomonidagi $f(x)$ ni o'z holicha $x$ bo'yicha qoldirish yoki $x = e^t$ qo'yishni esdan chiqarish.
   - ❌ **Xato:** $y''_{tt} - 2y'_t + y = 2x$
   - ✅ **To'g'ri:** $y''_{tt} - 2y'_t + y = 2e^t$

4. **$x < 0$ sohada logarifm bilan ishlash:**
   Agar masala shartida $x < 0$ oraliq ko'rsatilgan bo'lsa, $\ln x$ aniqlanmagan. Bunday hollarda almashtirish $x = -e^t \iff t = \ln(-x) = \ln|x|$ ko'rinishida olinishi shart.

---

## 🎯 Mustaqil Yechish Uchun Amaliy Mashqlar va Yechimlar

### 1-mashq
Quyidagi bir jinsli Eyler tenglamasining umumiy yechimini toping:
$$
x^2 y'' - 4x y' + 6y = 0 \quad (x > 0)
$$

<details>
<summary>👉 Bosqichma-bosqich yechimni ko'rish</summary>

1. **Xarakteristik tenglamani tuzamiz:**
   $$
   k(k - 1) - 4k + 6 = 0 \implies k^2 - 5k + 6 = 0
   $$
2. **Ildizlarni topamiz:**
   $$
   (k - 2)(k - 3) = 0 \implies k_1 = 2, \quad k_2 = 3
   $$
3. **Umumiy yechim:**
   Ildizlar haqiqiy va har xil bo'lgani uchun:
   $$
   y(x) = C_1 x^2 + C_2 x^3
   $$

**Javob:** $y(x) = C_1 x^2 + C_2 x^3$
</details>

---

### 2-mashq
Koshi masalasini yeching:
$$
x^2 y'' + x y' + y = 0, \quad y(1) = 1, \quad y'(1) = 2 \quad (x > 0)
$$

<details>
<summary>👉 Bosqichma-bosqich yechimni ko'rish</summary>

1. **Xarakteristik tenglamani tuzamiz:**
   $$
   k(k - 1) + 1 \cdot k + 1 = 0 \implies k^2 + 1 = 0 \implies k = \pm i
   $$
   Bu yerda $\alpha = 0, \beta = 1$.
2. **Umumiy yechim:**
   $$
   y(x) = C_1 \cos(\ln x) + C_2 \sin(\ln x)
   $$
3. **Hosilani hisoblaymiz:**
   $$
   y'(x) = -C_1 \sin(\ln x) \cdot \frac{1}{x} + C_2 \cos(\ln x) \cdot \frac{1}{x} = \frac{-C_1 \sin(\ln x) + C_2 \cos(\ln x)}{x}
   $$
4. **Boshlang'ich shartlarni qo'yamiz ($x = 1$, $\ln 1 = 0$):**
   $$
   y(1) = C_1 \cos 0 + C_2 \sin 0 = C_1 = 1
   $$
   $$
   y'(1) = \frac{-C_1 \sin 0 + C_2 \cos 0}{1} = C_2 = 2
   $$
5. **Natija:**
   $$
   y(x) = \cos(\ln x) + 2\sin(\ln x)
   $$

**Javob:** $y(x) = \cos(\ln x) + 2\sin(\ln x)$
</details>

---

### 3-mashq
Umumlashtirilgan Eyler tenglamasining umumiy yechimini toping:
$$
(x + 1)^2 y'' + 3(x + 1) y' + y = 0 \quad (x > -1)
$$

<details>
<summary>👉 Bosqichma-bosqich yechimni ko'rish</summary>

1. **Almashtirish kiritamiz:**
   $$
   x + 1 = e^t \iff t = \ln(x + 1)
   $$
   U holda:
   $$
   (x + 1) y' = y'_t, \quad (x + 1)^2 y'' = y''_{tt} - y'_t
   $$
2. **Tenglamaga qo'yamiz:**
   $$
   (y''_{tt} - y'_t) + 3y'_t + y = 0 \implies y''_{tt} + 2y'_t + y = 0
   $$
3. **Xarakteristik tenglama:**
   $$
   k^2 + 2k + 1 = 0 \implies (k + 1)^2 = 0 \implies k_1 = k_2 = -1
   $$
4. **$t$ bo'yicha yechim:**
   $$
   y(t) = (C_1 + C_2 t) e^{-t}
   $$
5. **$x$ ga qaytamiz:**
   $e^{-t} = \frac{1}{x + 1}$ va $t = \ln(x + 1)$ bo'lgani uchun:
   $$
   y(x) = \frac{C_1 + C_2 \ln(x + 1)}{x + 1}
   $$

**Javob:** $y(x) = \frac{C_1 + C_2 \ln(x + 1)}{x + 1}$
</details>

---

## 💡 Imtihon Layfhaklari va Tezkor Maslahatlar

1. **Xarakteristik tenglamani 3 soniyada tuzish formulasi:**
   Har safar hosilalarni chiqarib o'tirmaslik uchun darhol quyidagi formulani yodda tuting:
   $$
   a k^2 + (b - a) k + c = 0
   $$
   Faqat $x y'$ oldidagi koeffitsiyentdan $x^2 y''$ oldidagi koeffitsiyentni ayirib ($b - a$), o'rta koeffitsiyent qilib qo'ying!
   *Misol:* $x^2 y'' + 5x y' + 4y = 0 \implies k^2 + (5 - 1)k + 4 = k^2 + 4k + 4 = 0 \implies k = -2$.

2. **O'lchov tekshiruvi (Darajalar balansi):**
   Eyler tenglamasini boshqa tenglamalar bilan adashtirmaslikning eng oson usuli — har bir hadda $x$ ning darajasi hosila tartibi bilan tengligini tekshirishdir ($x^2 \cdot y''$, $x^1 \cdot y'$, $x^0 \cdot y$). Agar biror hadda bu buzilsa (masalan, $x y'' + y = 0$), u Eyler tenglamasi emas va uni darajali qatorlar (Frobenius usuli) yoki Bessel funksiyalari orqali yechish kerak bo'ladi.

3. **Logarifm argumentini qavsga olish:**
   Trigonometrik funksiyalar bilan ishlaganda KaTeX yozuvida albatta qavslardan foydalaning: $\sin(\beta \ln x)$, chunki $\sin \beta \ln x$ yozilsa, talaba uni $\sin(\beta) \cdot \ln x$ deb xato tushunishi mumkin.
