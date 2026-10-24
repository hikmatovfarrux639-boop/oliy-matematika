---
title: "Funksional qatorlarning tekis yaqinlashishi, Veyershtrass alomati va to'liq Makloren yoyilmalari"
module: "qatorlar"
description: "Funksional qatorlar, tekis yaqinlashish ta'rifi, Veyershtrassning majorant alomati, 14 ta to'liq Makloren darajali qatorlari jadvali va binomial yoyilmaning maxsus xususiy hollari."
order: 11
duration: "28 daqiqa"
category: "Funksional qatorlar"
difficulty: "Qiyin"
---

## Kirish: Sonlardan funksiyalarga o'tish

Avvalgi darslarda biz hadlari o'zgarmas sonlardan iborat bo'lgan sonli qatorlarni ($\sum a_n$) o'rgandik. Biroq amaliy matematik tahlil, fizika va muhandislikda qator hadlari o'zgaruvchi $x$ ga bog'liq funksiyalar bo'ladi:
$$
\sum_{n=1}^\infty u_n(x) = u_1(x) + u_2(x) + u_3(x) + \dots + u_n(x) + \dots
$$

Funksional qatorlar murakkab funksiyalarni kompyuterda yuqori aniqlikda hisoblash, noelementar integrallarni hisoblash hamda differensial tenglamalarni yechishning eng qudratli vositasidir.

Biroq bu yerda juda nozik bir savol paydo bo'ladi: **agar barcha $u_n(x)$ funksiyalar uzluksiz bo'lsa, ularning cheksiz yig'indisi $S(x)$ ham uzluksiz bo'ladimi? Cheksiz qatorni hadlab differensiallash yoki integrallash har doim mumkinmi?**

Bu savollarga to'g'ri javob berish uchun matematik analizga **tekis yaqinlashish (ravnomernaya sxodimost)** tushunchasi kiritilgan.

---

## 1. Funksional qator tushunchasi va yaqinlashish sohasi

> **Ta'rif:**
> Hadlari biror $X$ to'plamda aniqlangan $u_n(x)$ funksiyalardan iborat bo'lgan ifodaga **funksional qator** deyiladi.

Agar $x$ ga biror tayinlangan $x_0 \in X$ qiymat bersak, oddiy sonli qator hosil bo'ladi:
$$
u_1(x_0) + u_2(x_0) + \dots + u_n(x_0) + \dots
$$

- Agar bu sonli qator yaqinlashsa, $x_0$ nuqta funksional qatorning **yaqinlashish nuqtasi** deyiladi.
- Qator yaqinlashadigan barcha nuqtalar to'plami $D \subseteq X$ funksional qatorning **yaqinlashish sohasi** deb ataladi.
- Yaqinlashish sohasida qator yig'indisi $x$ ning funksiyasi bo'ladi:
$$
S(x) = \lim_{n \to \infty} S_n(x) = \lim_{n \to \infty} \sum_{k=1}^n u_k(x)
$$
- $R_n(x) = S(x) - S_n(x)$ funksiya qatorning **$n$-qoldig'i** deyiladi.

#### 1-misol:
Ushbu geometrik funksional qatorning yaqinlashish sohasini toping:
$$
\sum_{n=0}^\infty x^n = 1 + x + x^2 + \dots + x^n + \dots
$$

**Yechilishi:**
Bu maxraji $q = x$ bo'lgan cheksiz kamayuvchi geometrik progressiyadir. U $|q| = |x| < 1$, ya'ni $x \in (-1, 1)$ oraliqda yaqinlashadi va yig'indisi:
$$
S(x) = \frac{1}{1 - x}
$$
Demak, yaqinlashish sohasi: $D = (-1, 1)$.

---

## 2. Tekis yaqinlashish ta'rifi (Nuqtaviy yaqinlashishdan farqi)

Keling, intilish tezligini chuqur tahlil qilaylik.

### Nuqtaviy yaqinlashish (Oddiy yaqinlashish):
Agar har bir tayinlangan $x \in X$ uchun:
$$
\forall \varepsilon > 0, \quad \exists N(\varepsilon, x): \quad \forall n > N(\varepsilon, x) \implies |S_n(x) - S(x)| < \varepsilon
$$
bo'lsa, qator $X$ to'plamda $S(x)$ ga **nuqtaviy yaqinlashadi** deyiladi.

Bu yerda $N$ nomer nafaqat $\varepsilon$ xatolikka, balki tanlangan **$x$ nuqtaga ham bog'liq**! Ba'zi nuqtalarda qator juda tez yaqinlashsa, boshqa nuqtalarda yaqinlashish nihoyatda sekin bo'lishi mumkin.

### Tekis yaqinlashish (Uniform convergence):
> **Qat'iy ta'rif:**
> Agar ixtiyoriy $\varepsilon > 0$ soni uchun butun $X$ to'plam uchun umumiy bo'lgan shunday bitta $N(\varepsilon)$ nomer topilsaki, barcha $n > N(\varepsilon)$ va barcha $x \in X$ lar uchun bir vaqtda:
> $$
> |S_n(x) - S(x)| < \varepsilon
> $$
> tengsizlik bajarilsa, $\sum u_n(x)$ qator $X$ to'plamda $S(x)$ funksiyaga **tekis yaqinlashadi** deyiladi va quyidagicha belgilanadi:
> $$
> S_n(x) \rightrightarrows S(x) \quad \text{yoki} \quad \sum_{n=1}^\infty u_n(x) \rightrightarrows S(x)
> $$

Ekvivalent ta'rif (Supremum tili):
$$
\lim_{n \to \infty} \sup_{x \in X} |S_n(x) - S(x)| = 0
$$

```
Geometrik ma'nosi:
Tekis yaqinlashishda y = Sn(x) grafigi n > N bo'lganda butun X oraliqda
y = S(x) - ε va y = S(x) + ε chiziqlari orasidagi "ε-yo'lakcha" ichiga to'liq kiradi!
```

#### Nega bu muhim? Klassik qarshi-misol:
$f_n(x) = x^n$ ketma-ketligini $[0, 1]$ kesmada ko'raylik.
- Agar $0 \le x < 1$ bo'lsa: $\lim_{n \to \infty} x^n = 0$.
- Agar $x = 1$ bo'lsa: $\lim_{n \to \infty} 1^n = 1$.

Limit funksiya:
$$
f(x) = \begin{cases} 0, & 0 \le x < 1 \\ 1, & x = 1 \end{cases}
$$
Har bir $f_n(x) = x^n$ funksiya butun kesmada silliq va uzluksiz, biroq ularning cheksizdagi limiti $f(x)$ nuqta $x = 1$ da **sakrashga ega (uzilishli)**!
Buning sababi — yaqinlashish $[0, 1]$ da tekis emas. Agar biz oraliqni $x = 1$ dan ozgina chetlab $[0, 0.99]$ deb olsak, yaqinlashish tekis bo'ladi va uzluksizlik saqlanadi!

---

## 3. Veyershtrassning majorant alomati

Amaliyotda qatorning tekis yaqinlashishini ta'rif bo'yicha ($\varepsilon-N$) tekshirish qiyin. Karl Veyershtrass taklif etgan **majorant alomati** esa bu jarayonni oddiy sonli qatorni tekshirishga aylantiradi!

> **Veyershtrass teoremasi (M-test):**
> Agar biror $X$ to'plamda barcha $n \in \mathbb{N}$ lar uchun funksional qator hadlari modul jihatdan musbat sonli $a_n$ qator hadlaridan oshmasa:
> $$
> |u_n(x)| \le a_n, \quad \forall x \in X
> $$
> va $\sum_{n=1}^\infty a_n$ sonli qatori yaqinlashuvchi bo'lsa, u holda $\sum_{n=1}^\infty u_n(x)$ funksional qatori $X$ to'plamda **tekis va mutlaq yaqinlashadi**.

Bu yerda $\sum a_n$ qatorga **majorant qator** deyiladi.

#### 2-misol:
Ushbu qator butun sonlar o'qida ($x \in \mathbb{R}$) tekis yaqinlashishini isbotlang:
$$
\sum_{n=1}^\infty \frac{\sin(nx)}{n^2 + x^2}
$$

**Yechilishi:**
Ixtiyoriy $x \in \mathbb{R}$ uchun $|\sin(nx)| \le 1$ va $n^2 + x^2 \ge n^2$ ekanligi ravshan. Shuning uchun:
$$
\left| \frac{\sin(nx)}{n^2 + x^2} \right| \le \frac{1}{n^2 + x^2} \le \frac{1}{n^2}
$$
Biz bilamizki, umumiy hadi $a_n = \frac{1}{n^2}$ bo'lgan umumlashgan garmonik sonli qator ($\alpha = 2 > 1$) yaqinlashuvchidir.

Veyershtrass alomatiga ko'ra, berilgan funksional qator barcha $x \in (-\infty, +\infty)$ larda tekis va mutlaq yaqinlashadi!

---

## 4. Tekis yaqinlashuvchi qatorlarning xossalari

Agar funksional qator tekis yaqinlashsa, unga nisbatan matematik analizning eng muhim amallarini hadma-had qo'llash mumkin:

### 1. Yig'indining uzluksizligi:
Agar $\sum_{n=1}^\infty u_n(x)$ qatorning barcha hadlari $[a, b]$ kesmada uzluksiz bo'lib, qator ushbu kesmada tekis yaqinlashsa, uning yig'indisi $S(x)$ ham $[a, b]$ kesmada **uzluksiz funksiya** bo'ladi:
$$
\lim_{x \to x_0} \sum_{n=1}^\infty u_n(x) = \sum_{n=1}^\infty \lim_{x \to x_0} u_n(x) = \sum_{n=1}^\infty u_n(x_0)
$$

### 2. Hadlab integrallash:
Tekis yaqinlashuvchi qatorni kesma bo'yicha hadlab integrallash mumkin (integral va cheksiz yig'indi amallarining o'rni almashadi):
$$
\int_a^b S(x) \, dx = \int_a^b \left( \sum_{n=1}^\infty u_n(x) \right) dx = \sum_{n=1}^\infty \int_a^b u_n(x) \, dx
$$

### 3. Hadlab differensiallash:
Agar $\sum_{n=1}^\infty u_n(x)$ qator $[a, b]$ kesmaning kamida bitta nuqtasida yaqinlashsa va ularning hosilalaridan tuzilgan $\sum_{n=1}^\infty u_n'(x)$ qator $[a, b]$ kesmada tekis yaqinlashsa, u holda dastlabki qator yig'indisi differensiallanuvchi bo'lib, uning hosilasi hadma-had differensiallashga teng bo'ladi:
$$
\left( \sum_{n=1}^\infty u_n(x) \right)' = \sum_{n=1}^\infty u_n'(x)
$$

---

## 5. 14 ta asosiy elementar funksiyalarning Makloren darajali qatorlariga yoyilmalari jadvali

Darajali qatorlar $\sum a_n x^n$ o'zlarining yaqinlashish intervali ichidagi ixtiyoriy berk kesmada tekis yaqinlashadi.

Quyidagi 14 ta formula oliy matematikaning "oltin fondi" bo'lib, ularni yoddan bilish talab etiladi:

| T/r | Funksiya $f(x)$ | Makloren qatori yoyilmasi | Umumiy hadi | Yaqinlashish oralig'i |
|---|---|---|---|---|
| **1** | $e^x$ | $1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \dots$ | $\sum_{n=0}^\infty \frac{x^n}{n!}$ | $(-\infty, +\infty)$ |
| **2** | $\sin x$ | $x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} + \dots$ | $\sum_{n=0}^\infty \frac{(-1)^n x^{2n+1}}{(2n+1)!}$ | $(-\infty, +\infty)$ |
| **3** | $\cos x$ | $1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!} + \dots$ | $\sum_{n=0}^\infty \frac{(-1)^n x^{2n}}{(2n)!}$ | $(-\infty, +\infty)$ |
| **4** | $\sinh x$ | $x + \frac{x^3}{3!} + \frac{x^5}{5!} + \frac{x^7}{7!} + \dots$ | $\sum_{n=0}^\infty \frac{x^{2n+1}}{(2n+1)!}$ | $(-\infty, +\infty)$ |
| **5** | $\cosh x$ | $1 + \frac{x^2}{2!} + \frac{x^4}{4!} + \frac{x^6}{6!} + \dots$ | $\sum_{n=0}^\infty \frac{x^{2n}}{(2n)!}$ | $(-\infty, +\infty)$ |
| **6** | $\ln(1+x)$ | $x - \frac{x^2}{2} + \frac{x^3}{3} - \frac{x^4}{4} + \dots$ | $\sum_{n=1}^\infty \frac{(-1)^{n-1} x^n}{n}$ | $(-1, 1]$ |
| **7** | $\ln(1-x)$ | $-x - \frac{x^2}{2} - \frac{x^3}{3} - \frac{x^4}{4} - \dots$ | $-\sum_{n=1}^\infty \frac{x^n}{n}$ | $[-1, 1)$ |
| **8** | $\frac{1}{1-x}$ | $1 + x + x^2 + x^3 + \dots$ | $\sum_{n=0}^\infty x^n$ | $(-1, 1)$ |
| **9** | $\frac{1}{1+x}$ | $1 - x + x^2 - x^3 + \dots$ | $\sum_{n=0}^\infty (-1)^n x^n$ | $(-1, 1)$ |
| **10** | $\arctan x$ | $x - \frac{x^3}{3} + \frac{x^5}{5} - \frac{x^7}{7} + \dots$ | $\sum_{n=0}^\infty \frac{(-1)^n x^{2n+1}}{2n+1}$ | $[-1, 1]$ |
| **11** | $\text{arth } x$ | $x + \frac{x^3}{3} + \frac{x^5}{5} + \frac{x^7}{7} + \dots$ | $\sum_{n=0}^\infty \frac{x^{2n+1}}{2n+1}$ | $(-1, 1)$ |
| **12** | $\arcsin x$ | $x + \frac{1}{2}\frac{x^3}{3} + \frac{1\cdot 3}{2\cdot 4}\frac{x^5}{5} + \dots$ | $x + \sum_{n=1}^\infty \frac{(2n-1)!!}{(2n)!!} \frac{x^{2n+1}}{2n+1}$ | $[-1, 1]$ |
| **13** | $\arccos x$ | $\frac{\pi}{2} - \left( x + \frac{1}{6}x^3 + \frac{3}{40}x^5 + \dots \right)$ | $\frac{\pi}{2} - \arcsin x$ | $[-1, 1]$ |
| **14** | $(1+x)^m$ | $1 + mx + \frac{m(m-1)}{2!}x^2 + \dots$ | $1 + \sum_{n=1}^\infty \frac{m(m-1)\dots(m-n+1)}{n!} x^n$ | $|x| < 1$ |

*(Izoh: $n!!$ — qo'sh faktorial: $(2n)!! = 2 \cdot 4 \cdot 6 \dots 2n$, $(2n-1)!! = 1 \cdot 3 \cdot 5 \dots (2n-1)$).*

---

## 6. Binomial qatorning maxsus xususiy hollari

14-raqamli Nyuton binomial qatori ixtiyoriy haqiqiy $m \in \mathbb{R}$ daraja uchun o'rinli. Amaliy hisoblashlarda quyidagi 4 ta xususiy holat eng ko'p qo'llaniladi:

### 1. $m = -\frac{1}{2}$ bo'lganda ($\frac{1}{\sqrt{1+x}}$):
$$
\frac{1}{\sqrt{1+x}} = (1+x)^{-1/2} = 1 - \frac{1}{2}x + \frac{1\cdot 3}{2\cdot 4}x^2 - \frac{1\cdot 3\cdot 5}{2\cdot 4\cdot 6}x^3 + \dots + (-1)^n \frac{(2n-1)!!}{(2n)!!} x^n + \dots
$$
Ushbu qatorda $x$ o'rniga $-t^2$ qo'yib integrallash orqali to'g'ridan-to'g'ri $\arcsin x$ qatori hosil qilinadi!

### 2. $m = \frac{1}{2}$ bo'lganda ($\sqrt{1+x}$):
$$
\sqrt{1+x} = (1+x)^{1/2} = 1 + \frac{1}{2}x - \frac{1}{8}x^2 + \frac{1}{16}x^3 - \frac{5}{128}x^4 + \dots
$$
Bu formula ildiz ostidagi sonlarni taqribiy hisoblashda (masalan, $\sqrt{1.04} \approx 1 + 0.02 - 0.0002 = 1.0198$) juda qulaydir.

### 3. $m = -2$ bo'lganda ($\frac{1}{(1+x)^2}$):
$$
\frac{1}{(1+x)^2} = (1+x)^{-2} = 1 - 2x + 3x^2 - 4x^3 + 5x^4 - \dots = \sum_{n=0}^\infty (-1)^n (n+1) x^n
$$
Bu qator $\frac{1}{1+x} = \sum (-1)^n x^n$ qatorini hadma-had differensiallash orqali ham osongina olinadi.

### 4. $x$ o'rniga $x^2$ qo'yilganda ($\frac{1}{1+x^2}$):
$$
\frac{1}{1+x^2} = 1 - x^2 + x^4 - x^6 + x^8 - \dots = \sum_{n=0}^\infty (-1)^n x^{2n}
$$
Buni $[0, x]$ bo'yicha integrallasak, $\arctan x$ ning Makloren yoyilmasi kelib chiqadi!

---

## 7. Namunaviy misollar va mustaqil mashqlar

### 3-misol (Makloren qatoriga yoyish):
$f(x) = \frac{x}{4 + x^2}$ funksiyani Makloren qatoriga yoying va yaqinlashish sohasini toping.

**Yechilishi:**
Maxrajdan $4$ ni qavsdan tashqariga chiqaramiz:
$$
f(x) = \frac{x}{4\left(1 + \frac{x^2}{4}\right)} = \frac{x}{4} \cdot \frac{1}{1 + \left(\frac{x}{2}\right)^2}
$$
$\frac{1}{1+t} = \sum_{n=0}^\infty (-1)^n t^n$ formulasida $t = \left(\frac{x}{2}\right)^2 = \frac{x^2}{4}$ deb olamiz:
$$
\frac{1}{1 + \frac{x^2}{4}} = \sum_{n=0}^\infty (-1)^n \left(\frac{x^2}{4}\right)^n = \sum_{n=0}^\infty \frac{(-1)^n}{4^n} x^{2n}
$$
Endi $\frac{x}{4}$ ga ko'paytiramiz:
$$
f(x) = \frac{x}{4} \sum_{n=0}^\infty \frac{(-1)^n}{4^n} x^{2n} = \sum_{n=0}^\infty \frac{(-1)^n}{4^{n+1}} x^{2n+1} = \frac{x}{4} - \frac{x^3}{16} + \frac{x^5}{64} - \frac{x^7}{256} + \dots
$$
Yaqinlashish sharti: $|t| < 1 \implies \frac{x^2}{4} < 1 \implies x^2 < 4 \implies |x| < 2$.
**Javob:** $\sum_{n=0}^\infty \frac{(-1)^n}{4^{n+1}} x^{2n+1}$, yaqinlashish sohasi: $(-2, 2)$.

---

### Mustaqil yechish uchun mashqlar:

1. **Veyershtrass alomati:** Ushbu qatorning butun sonlar o'qida tekis yaqinlashishini isbotlang:
   $$
   \sum_{n=1}^\infty \frac{\cos(n^2 x)}{n^4 + \sqrt{n}}
   $$

2. **Qator yig'indisini topish:** Hadlab differensiallash yoki integrallash yordamida qator yig'indisini toping ($|x| < 1$):
   $$
   S(x) = \sum_{n=1}^\infty n x^n = x + 2x^2 + 3x^3 + 4x^4 + \dots
   $$

3. **Makloren qatoriga yoyish:** $f(x) = x \cos(3x^2)$ funksiyaning Makloren qatoridagi umumiy hadini yozing.

4. **Taqribiy hisoblash:** $\sqrt[3]{1.06}$ qiymatini binomial qatorning dastlabki 3 ta hadi yordamida hisoblang.

---

### Mashqlarning to'liq javoblari:

1. **1-mashq:**
   $|\cos(n^2 x)| \le 1$ bo'lgani uchun:
   $$
   \left| \frac{\cos(n^2 x)}{n^4 + \sqrt{n}} \right| \le \frac{1}{n^4}
   $$
   $\sum \frac{1}{n^4}$ umumiy garmonik qatori yaqinlashuvchi ($\alpha = 4 > 1$). Veyershtrass alomatiga ko'ra qator $\mathbb{R}$ da tekis va mutlaq yaqinlashadi.

2. **2-mashq:**
   $S(x) = x \sum_{n=1}^\infty n x^{n-1} = x \left( \sum_{n=1}^\infty x^n \right)'$.
   Biz bilamizki, $\sum_{n=1}^\infty x^n = \frac{x}{1-x}$.
   Hosilasi: $\left( \frac{x}{1-x} \right)' = \frac{1(1-x) - x(-1)}{(1-x)^2} = \frac{1}{(1-x)^2}$.
   Demak:
   **Javob:** $S(x) = \frac{x}{(1-x)^2}$.

3. **3-mashq:**
   $\cos t = \sum_{n=0}^\infty \frac{(-1)^n t^{2n}}{(2n)!}$.
   $t = 3x^2$ qo'yamiz: $\cos(3x^2) = \sum_{n=0}^\infty \frac{(-1)^n (3x^2)^{2n}}{(2n)!} = \sum_{n=0}^\infty \frac{(-1)^n 9^n x^{4n}}{(2n)!}$.
   $x$ ga ko'paytiramiz:
   **Javob:** $x\cos(3x^2) = \sum_{n=0}^\infty \frac{(-1)^n 9^n}{(2n)!} x^{4n+1}$.

4. **4-mashq:**
   $\sqrt[3]{1+x} = (1+x)^{1/3} = 1 + \frac{1}{3}x - \frac{1}{9}x^2 + \dots$
   $x = 0.06$ qo'yamiz:
   $$
   \sqrt[3]{1.06} \approx 1 + \frac{1}{3}(0.06) - \frac{1}{9}(0.06)^2 = 1 + 0.02 - \frac{1}{9}(0.0036) = 1 + 0.02 - 0.0004 = 1.0196
   $$
   **Javob:** $\approx 1.0196$.
