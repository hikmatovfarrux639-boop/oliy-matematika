---
title: "Eyler almashtirishlari va kvadratik irratsional integrallarni hisoblash"
description: "R(x, sqrt(ax^2+bx+c)) integrallari uchun 3 ta klassik Eyler almashtirishi va hisoblash qoidalari."
module: "integrallar"
order: 14
---

## 📌 Kirish va Geometrik-Fizik Ma'nosi

Matematik analizda eng umumiy ko'rinishdagi kvadratik irratsionalliklarni o'z ichiga olgan integrallar quyidagicha yoziladi:

$$
I = \int R\left(x, \sqrt{a x^2 + b x + c}\right) \, dx
$$

bu yerda $R(u, v)$ — o'zining argumentlariga nisbatan ratsional funksiya (ya'ni ko'phadlar nisbati), $a \neq 0$ va $b^2 - 4ac \neq 0$.

Bunday integrallar osmon mexanikasida sun'iy yo'ldoshlar trayektoriyasini, elastik deformatsiyalarda chiziqlar uzunligini va elektrodinamikada zaryadlangan o'tkazgichlar atrofidagi maydon potensialini hisoblashda doimiy ravishda uchraydi.

Geometrik nuqtai nazardan, $y = \sqrt{ax^2+bx+c}$ tenglamasi tekislikdagi ikkinchi tartibli egri chiziqni (ellips, giperbola yoki parabola) ifodalaydi:
$$
y^2 - ax^2 - bx - c = 0
$$
Agar bu egri chiziqda kamida bitta haqiqiy nuqta mavjud bo'lsa, uni bitta parametr $t$ orqali ratsional parametrlash mumkin. Aynan shu chuqur geometrik g'oyani XVIII asrda buyuk matematik **Leonxard Eyler** algebraik tilga ko'chirgan va har qanday kvadratik irratsional integralni ratsional funksiyaning integraliga aylantiruvchi **uchta universal almashtirishni** taklif qilgan.

---

## 📐 Asosiy Nazariya: Eylerning Uchta Almashtirishi

Har qanday $R(x, \sqrt{ax^2+bx+c})$ integrali quyidagi uchta holatning kamida bittasiga tushadi va Eyler almashtirishlari yordamida to'liq ratsionallashtiriladi:

### 1. Birinchi Eyler Almashtirishi ($a > 0$ bo'lganda)

Agar kvadrat uchhadda bosh koeffitsiyent musbat bo'lsa ($a > 0$), quyidagi almashtirish kiritiladi:
$$
\sqrt{a x^2 + b x + c} = \pm \sqrt{a}x + t
$$
Ikkala tomonni kvadratga ko'taramiz:
$$
a x^2 + b x + c = a x^2 \pm 2\sqrt{a}xt + t^2
$$
$ax^2$ hadlari o'zaro qisqarib ketadi, natijada $x$ ga nisbatan chiziqli tenglama qoladi:
$$
b x + c = \pm 2\sqrt{a}xt + t^2 \implies x = \frac{t^2 - c}{b \mp 2\sqrt{a}t}
$$
Differensial $dx = \left(\frac{t^2-c}{b \mp 2\sqrt{a}t}\right)' dt$ hamda radikalning o'zi ham $t$ ning rasional funksiyasiga aylanadi.

### 2. Ikkinchi Eyler Almashtirishi ($c > 0$ bo'lganda)

Agar ozod had musbat bo'lsa ($c > 0$), quyidagi almashtirish qo'llaniladi:
$$
\sqrt{a x^2 + b x + c} = x t \pm \sqrt{c}
$$
Kvadratga ko'tarsak:
$$
a x^2 + b x + c = x^2 t^2 \pm 2\sqrt{c}xt + c
$$
$c$ ozod hadlari qisqaradi va tenglamani $x \neq 0$ ga bo'lish mumkin bo'ladi:
$$
a x + b = x t^2 \pm 2\sqrt{c}t \implies x = \frac{\pm 2\sqrt{c}t - b}{a - t^2}
$$
Shunday qilib, $x$, $dx$ va radikal $t$ parametrining rasional funksiyalariga keltiriladi.

### 3. Uchinchi Eyler Almashtirishi ($ax^2+bx+c=0$ haqiqiy ildizlarga ega bo'lganda)

Agar diskriminant $\Delta = b^2 - 4ac > 0$ bo'lsa, uchhad ikkita haqiqiy ildizga ega: $x_1$ va $x_2$, ya'ni $ax^2+bx+c = a(x - x_1)(x - x_2)$. Bu holda quyidagi almashtirish kiritiladi:
$$
\sqrt{a(x - x_1)(x - x_2)} = t(x - x_1)
$$
Kvadratga ko'tarib, ikkala tomonni $(x - x_1)$ ga qisqartiramiz:
$$
a(x - x_2) = t^2(x - x_1) \implies a x - a x_2 = t^2 x - t^2 x_1 \implies x = \frac{a x_2 - t^2 x_1}{a - t^2}
$$
Bu almashtirish ayniqsa $a < 0$ va $c < 0$ bo'lgan holatlarda (birinchi va ikkinchi almashtirishlar ishlamaganda) yagona universal qutqaruvchidir.

---

## 📝 Qadamma-qadam Yechilgan Amaliy Misollar

### 1-misol (Birinchi Eyler almashtirishi):
Ushbu integralni hisoblang:
$$
I_1 = \int \frac{dx}{x + \sqrt{x^2 + x + 1}}
$$

**Yechilishi:**
1. Radikal ostidagi kvadrat uchhad: $a = 1 > 0, b = 1, c = 1$. Demak, 1-Eyler almashtirishini qo'llaymiz.
2. Almashtirish:
   $$
   \sqrt{x^2 + x + 1} = -x + t \implies x^2 + x + 1 = x^2 - 2tx + t^2
   $$
3. $x^2$ hadini qisqartirib, $x$ ni topamiz:
   $$
   x + 1 = -2tx + t^2 \implies x(1 + 2t) = t^2 - 1 \implies x = \frac{t^2 - 1}{2t + 1}
   $$
4. Differensialni topamiz:
   $$
   dx = \frac{2t(2t+1) - (t^2-1)\cdot 2}{(2t+1)^2} \, dt = \frac{2(t^2 + t + 1)}{(2t+1)^2} \, dt
   $$
5. Integral maxraji: $x + \sqrt{x^2+x+1} = x + (-x + t) = t$.
6. O'zgaruvchilarni integralga qo'yamiz:
   $$
   I_1 = \int \frac{1}{t} \cdot \frac{2(t^2 + t + 1)}{(2t+1)^2} \, dt = 2 \int \frac{t^2 + t + 1}{t(2t+1)^2} \, dt
   $$
7. Ratsional kasrni elementar kasrlarga ajratamiz:
   $$
   \frac{t^2 + t + 1}{t(2t+1)^2} = \frac{A}{t} + \frac{B}{2t+1} + \frac{C}{(2t+1)^2}
   $$
   $t=0 \implies A = 1$. Koeffitsiyentlarni tenglashtirib: $B = -3/2$, $C = -3/2$ ni topamiz.
8. Integrallab, eski $t = x + \sqrt{x^2+x+1}$ o'zgaruvchisiga qaytamiz:
   $$
   I_1 = 2 \ln|t| - \frac{3}{2} \ln|2t+1| + \frac{3}{2(2t+1)} + C
   $$

---

### 2-misol (Ikkinchi Eyler almashtirishi):
Ushbu integralni hisoblang:
$$
I_2 = \int \frac{dx}{(1 + x)\sqrt{1 + x - x^2}}
$$

**Yechilishi:**
1. Kvadrat uchhad: $a = -1 < 0$, ammo ozod had $c = 1 > 0$. Shuning uchun 2-Eyler almashtirishi juda qulay.
2. Almashtirish:
   $$
   \sqrt{1 + x - x^2} = xt - 1
   $$
3. Kvadratga ko'taramiz:
   $$
   1 + x - x^2 = x^2 t^2 - 2xt + 1 \implies x - x^2 = x^2 t^2 - 2xt
   $$
4. $x \neq 0$ ga qisqartirib, $x$ ni ifodalaymiz:
   $$
   1 - x = xt^2 - 2t \implies x(t^2 + 1) = 2t + 1 \implies x = \frac{2t+1}{t^2 + 1}
   $$
5. Radikalning $t$ orqali ifodasi:
   $$
   \sqrt{1+x-x^2} = xt - 1 = \frac{2t^2+t}{t^2+1} - 1 = \frac{t^2+t-1}{t^2+1}
   $$
6. Differensialni topamiz:
   $$
   dx = \frac{2(t^2+1) - (2t+1)\cdot 2t}{(t^2+1)^2} \, dt = \frac{-2t^2 - 2t + 2}{(t^2+1)^2} \, dt = -2 \frac{t^2+t-1}{(t^2+1)^2} \, dt
   $$
7. Integralga qo'ysak, radikal qisqarib ketadi:
   $$
   I_2 = \int \frac{1}{\left(1 + \frac{2t+1}{t^2+1}\right) \frac{t^2+t-1}{t^2+1}} \cdot \frac{-2(t^2+t-1)}{(t^2+1)^2} \, dt = \int \frac{-2 \, dt}{t^2 + 2t + 2} = -2 \operatorname{arctg}(t+1) + C
   $$
   bu yerda $t = \frac{\sqrt{1+x-x^2} + 1}{x}$.

---

### 3-misol (Uchinchi Eyler almashtirishi):
Ushbu integralni hisoblang:
$$
I_3 = \int \frac{dx}{\sqrt{(x-1)(2-x)}}
$$

**Yechilishi:**
1. Ildizlar: $x_1 = 1, x_2 = 2$. Ko'paytuvchilarga ajralgan: $-(x-1)(x-2)$.
2. 3-Eyler almashtirishi:
   $$
   \sqrt{(x-1)(2-x)} = t(x-1)
   $$
3. Kvadratga ko'taramiz:
   $$
   (x-1)(2-x) = t^2(x-1)^2 \implies 2 - x = t^2(x-1) \implies x(1 + t^2) = 2 + t^2
   $$
   $$
   x = \frac{t^2 + 2}{t^2 + 1} = 1 + \frac{1}{t^2 + 1}
   $$
4. Hosila va radikal:
   $$
   dx = -\frac{2t}{(t^2+1)^2} \, dt, \quad \sqrt{(x-1)(2-x)} = t(x-1) = t \cdot \frac{1}{t^2+1} = \frac{t}{t^2+1}
   $$
5. Integralga qo'yamiz:
   $$
   I_3 = \int \frac{t^2+1}{t} \left(-\frac{2t}{(t^2+1)^2}\right) \, dt = -2 \int \frac{dt}{t^2+1} = -2 \operatorname{arctg} t + C
   $$
6. $t = \sqrt{\frac{2-x}{x-1}}$ ekanini hisobga olsak:
   $$
   I_3 = -2 \operatorname{arctg}\sqrt{\frac{2-x}{x-1}} + C = 2 \arcsin\sqrt{\frac{x-1}{1}} + C_1 = \arcsin(2x-3) + C_2
   $$

---

## ⚠️ Talabalar Ko'p Yo'l Qo'yadigan Xatolar

1. **Almashtirish belgisini noto'g'ri tanlash:**
   1-almashtirishda $\sqrt{ax^2+bx+c} = \sqrt{a}x + t$ o'rniga ba'zan $-\sqrt{a}x + t$ tanlash hisob-kitobni sezilarli darajada osonlashtiradi (masalan, $x + \sqrt{x^2+\dots}$ bo'lganda maxraj $t$ ga aylanadi). To'g'ri ishorani tanlamaslik juda og'ir ratsional kasrga olib keladi.
2. **Kvadratga ko'tarishda arifmetik chalkashliklar:**
   Eyler almashtirishlarining asosiy kuchi kvadrat hadlarning qisqarishidadir. Agar $x^2$ yoki ozod son qisqarmasa, demak formulada xatolikka yo'l qo'yilgan.
3. **Trigonometrik almashtirish afzalligini e'tibordan chetda qoldirish:**
   Agar kvadrat uchhadda $x$ oldidagi chiziqli had bo'lmasa (masalan, $\sqrt{1-x^2}$ yoki $\sqrt{a^2+x^2}$), Eyler almashtirishidan ko'ra $x = \sin t$ yoki $x = a \operatorname{tg} t$ almashtirishlari bir necha barobar tezroq natija beradi.

---

## 🎯 Mustaqil Yechish Uchun Masalalar

1. 1-Eyler almashtirishi yordamida hisoblang: $\int \frac{dx}{\sqrt{x^2 + 2x + 4}}$.
2. 2-Eyler almashtirishi yordamida hisoblang: $\int \frac{dx}{x \sqrt{2 + x - x^2}}$.
3. 3-Eyler almashtirishi bilan yeching: $\int \frac{x \, dx}{\sqrt{(x-2)(x-3)}}$.

<details style="margin-top: 1rem; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); cursor: pointer;">
<summary style="font-weight: 700; color: var(--primary);">Yechimlar va Javoblar</summary>

**1-masala:** $\sqrt{x^2+2x+4} = t - x \implies x = \frac{t^2-4}{2(t+1)}$. Integrallash natijasida:
Javob: $\ln|x + 1 + \sqrt{x^2+2x+4}| + C$.

**2-masala:** $c = 2 > 0$. $\sqrt{2+x-x^2} = xt + \sqrt{2}$.
Javob: $-\frac{1}{\sqrt{2}} \ln\left| \frac{\sqrt{2+x-x^2} + \sqrt{2}}{x} + \frac{1}{2\sqrt{2}} \right| + C$.

**3-masala:** $\sqrt{(x-2)(x-3)} = t(x-2)$.
Javob: $\sqrt{x^2-5x+6} + \frac{5}{2}\ln\left|2x - 5 + 2\sqrt{x^2-5x+6}\right| + C$.

</details>

---

## 💡 Xulosa va Imtihon Maslahatlari

- Agar $a > 0$ bo'lsa $\to$ **1-Eyler** ($\sqrt{ax^2+bx+c} = \pm\sqrt{a}x + t$).
- Agar $c > 0$ bo'lsa $\to$ **2-Eyler** ($\sqrt{ax^2+bx+c} = xt \pm \sqrt{c}$).
- Agar $a < 0$ va $c < 0$ bo'lib, haqiqiy ildizlar bo'lsa $\to$ **3-Eyler** ($\sqrt{a(x-x_1)(x-x_2)} = t(x-x_1)$).
- Imtihonda Eyler almashtirishlarini qo'llaganda doimo $x$ ning $t$ orqali ifodasini alohida yozib, differensialni ehtiyotkorlik bilan oling.
