---
title: "Logarifmik differensiallash usuli va darajali-ko'rsatkichli funksiyalar hosilasi"
module: "hosila"
order: 8
description: "y = u(x)^v(x) ko'rinishidagi funksiyalar, ko'p ko'paytuvchili kasrlar va ildizli ifodalarni dastlab natural logarifmlash orqali oson differensiallash."
---

Matematik analizda ba'zi funksiyalarni standart hosila olish qoidalari (ko'paytma, bo'linma yoki murakkab funksiya qoidasi) bilan to'g'ridan-to'g'ri differensiallash yo imkonsiz, yo juda uzun va murakkab hisob-kitoblarga olib keladi. Bunday hollarda dastlab tenglikning ikkala tomonini natural logarifmlab, so'ngra hosila olish usuli — **logarifmik differensiallash usuli** qo'llaniladi.

---

## 1. Logarifmik hosila tushunchasi

Aytaylik, $y = f(x)$differensiallanuvchi va$f(x) \neq 0$ bo'lgan funksiya berilgan bo'lsin. Tenglikning ikkala qismini modul bo'yicha natural logarifmlaymiz:

$$\ln |y| = \ln |f(x)|$$

Endi $y$ni$x$ning funksiyasi deb hisoblab, murakkab funksiya hosilasi qoidasiga binoan ikkala tomondan$x$ bo'yicha hosila olamiz ($(\ln |x|)' = \frac{1}{x}$ ekanini esga oling):

$$\frac{y'}{y} = (\ln |f(x)|)'$$

Bu yerdan izlanayotgan hosila $y'$ ni topamiz:

$$y' = y \cdot (\ln |f(x)|)' = f(x) \cdot (\ln |f(x)|)'$$

> [!IMPORTANT]
> **Ta'rif:** $\frac{y'}{y} = (\ln |y|)'$ifoda$y = f(x)$ funksiyaning **logarifmik hosilasi** deb ataladi. Funksiya hosilasini avval uning logarifmik hosilasini topib, so'ngra funksiyaning o'ziga ko'paytirish orqali hisoblash jarayoni **logarifmik differensiallash** deyiladi.

Logarifmning quyidagi fundamental xossalari murakkab amallarni bir pog'ona soddalashtiradi:
- **Darajani ko'paytmaga** aylantiradi: $\ln(u^v) = v \ln u$;
- **Ko'paytmani yig'indiga** aylantiradi: $\ln(u \cdot v) = \ln u + \ln v$;
- **Bo'linmani ayirmaga** aylantiradi: $\ln\left(\frac{u}{v}\right) = \ln u - \ln v$;
- **Ildizni kasr koeffitsiyentga** aylantiradi: $\ln\left(\sqrt[n]{u}\right) = \frac{1}{n} \ln u$.

---

## 2. Darajali-ko'rsatkichli funksiyalar hosilasi: $y = u(x)^{v(x)}$

Boshlang'ich kursdan bizga ikki xil funksiya ma'lum:
1. **Darajali funksiya:** $y = u(x)^a$ ($a = \text{const}$) $\implies y' = a \cdot u(x)^{a-1} \cdot u'(x)$.
2. **Ko'rsatkichli funksiya:** $y = a^{v(x)}$ ($a = \text{const} > 0$) $\implies y' = a^{v(x)} \ln a \cdot v'(x)$.

Ammo asos ham, daraja ko'rsatkichi ham $x$ ga bog'liq o'zgaruvchi bo'lsa:
$$y = [u(x)]^{v(x)}, \qquad u(x) > 0$$
bu funksiya **darajali-ko'rsatkichli funksiya** deyiladi.

> [!WARNING]
> **Qo'pol xato:** $y = x^x$funksiyadan hosila olayotganda uni darajali funksiya kabi$y' = x \cdot x^{x-1} = x^x$deb yoki ko'rsatkichli funksiya kabi$y' = x^x \ln x$ deb hisoblash **mutlaqo xato**! Chunki asos ham, ko'rsatkich ham o'zgaruvchidir.

### Formulasi va keltirib chiqarilishi (2 xil usulda)

**1-usul (Logarifmik differensiallash):**
$y = u(x)^{v(x)}$ ning ikkala tomonini natural logarifmlaymiz:
$$\ln y = \ln\left(u(x)^{v(x)}\right) \implies \ln y = v(x) \cdot \ln u(x)$$
Ikkala tomonidan $x$bo'yicha hosila olamiz (o'ng tomonda ko'paytma qoidasi$(v \cdot \ln u)' = v' \ln u + v \cdot (\ln u)'$ ishlatiladi):
$$\frac{y'}{y} = v'(x) \cdot \ln u(x) + v(x) \cdot \frac{u'(x)}{u(x)}$$
Ikkala tomonni $y = u(x)^{v(x)}$ ga ko'paytiramiz:

$$y' = u(x)^{v(x)} \left[ v'(x) \ln u(x) + \frac{v(x) \cdot u'(x)}{u(x)} \right]$$

Qavsni ochib yozsak:
$$\left(u^v\right)' = \underbrace{v \cdot u^{v-1} \cdot u'}_{\text{darajali funksiya kabi}} + \underbrace{u^v \ln u \cdot v'}_{\text{ko'rsatkichli funksiya kabi}}$$

**2-usul (Asosiy logarifmik ayniyat orqali):**
Har qanday $u > 0$uchun$u = e^{\ln u}$ bo'lgani sababli:
$$y = u(x)^{v(x)} = e^{v(x) \ln u(x)}$$
Endi oddiy murakkab eksponensial funksiya $(e^w)' = e^w \cdot w'$ qoidasini qo'llaymiz:
$$y' = e^{v(x) \ln u(x)} \cdot [v(x) \ln u(x)]' = u(x)^{v(x)} \left[ v'(x) \ln u(x) + \frac{v(x) u'(x)}{u(x)} \right]$$

> [!TIP]
> **Eslab qolish qoidasi:** Darajali-ko'rsatkichli funksiya hosilasi ikki qo'shiluvchining yig'indisiga teng: birinchi qo'shiluvchida ko'rsatkich $v$o'zgarmas deb qaralib darajali funksiya hosilasi olinadi, ikkinchi qo'shiluvchida esa asos$u$ o'zgarmas deb qaralib ko'rsatkichli funksiya hosilasi olinadi!

---

## 3. Ko'p ko'paytuvchili, kasrli va ildizli funksiyalarni differensiallash

Agar funksiya bir nechta ko'paytuvchilarning ko'paytmasi, bo'linmasi va ildizlaridan iborat bo'lsa:
$$y = \frac{[f_1(x)]^{\alpha_1} \cdot [f_2(x)]^{\alpha_2} \cdots [f_n(x)]^{\alpha_n}}{[g_1(x)]^{\beta_1} \cdot [g_2(x)]^{\beta_2} \cdots [g_m(x)]^{\beta_m}}$$
logarifmlash natijasida u oddiy algebraik yig'indiga aylanadi:
$$\ln |y| = \alpha_1 \ln |f_1(x)| + \dots + \alpha_n \ln |f_n(x)| - \beta_1 \ln |g_1(x)| - \dots - \beta_m \ln |g_m(x)|$$
Undan hosila olish juda oson:
$$y' = y \cdot \left( \alpha_1 \frac{f_1'(x)}{f_1(x)} + \dots + \alpha_n \frac{f_n'(x)}{f_n(x)} - \beta_1 \frac{g_1'(x)}{g_1(x)} - \dots - \beta_m \frac{g_m'(x)}{g_m(x)} \right)$$

---

## 4. Namunaviy misollar yechimi

### 1-misol. Klassik darajali-ko'rsatkichli funksiya
$y = (\sin x)^{\cos x}$ funksiyaning hosilasini toping ($\sin x > 0$).

**Yechim:**
1. Tenglikning ikkala tomonini natural logarifmlaymiz:
   $$\ln y = \ln\left((\sin x)^{\cos x}\right) = \cos x \cdot \ln(\sin x)$$
2. Ikkala tomondan $x$ bo'yicha hosila olamiz:
   $$\frac{y'}{y} = (\cos x)' \cdot \ln(\sin x) + \cos x \cdot (\ln(\sin x))'$$
   $$\frac{y'}{y} = -\sin x \cdot \ln(\sin x) + \cos x \cdot \frac{\cos x}{\sin x} = \frac{\cos^2 x}{\sin x} - \sin x \ln(\sin x)$$
3. $y = (\sin x)^{\cos x}$ ni o'ng tomonga ko'paytiramiz:
   $$y' = (\sin x)^{\cos x} \left( \cos x \cot x - \sin x \ln(\sin x) \right)$$

---

### 2-misol. Ko'p qavatli darajali-ko'rsatkichli funksiya
$y = x^{x^2}$ funksiyaning hosilasini toping ($x > 0$).

**Yechim:**
> [!NOTE]
> E'tibor bering: $x^{x^2}$bu$x^{(x^2)}$degani,$(x^x)^2 = x^{2x}$ emas!

1. Logarifmlaymiz:
   $$\ln y = \ln\left(x^{x^2}\right) = x^2 \ln x$$
2. Differensiallaymiz:
   $$\frac{y'}{y} = (x^2)' \ln x + x^2 (\ln x)' = 2x \ln x + x^2 \cdot \frac{1}{x} = 2x \ln x + x = x(2\ln x + 1)$$
3. $y$ ga ko'paytiramiz:
   $$y' = x^{x^2} \cdot x(2\ln x + 1) = x^{x^2 + 1}(2\ln x + 1)$$

---

### 3-misol. Murakkab kasr va ildizli funksiya
$y = \frac{(x + 2)^3 \cdot \sqrt[4]{3x - 1}}{(x^2 + 5)^4 \cdot e^{2x}}$ funksiyaning hosilasini toping.

**Yechim:**
1. Modul bo'yicha natural logarifmlab, logarifm xossalariga ko'ra yoyib yozamiz:
   $$\ln |y| = 3\ln |x + 2| + \frac{1}{4}\ln |3x - 1| - 4\ln(x^2 + 5) - \ln(e^{2x})$$
   $\ln(e^{2x}) = 2x$ ekanini hisobga olsak:
   $$\ln |y| = 3\ln |x + 2| + \frac{1}{4}\ln |3x - 1| - 4\ln(x^2 + 5) - 2x$$
2. Har bir haddan alohida hosila olamiz:
   $$\frac{y'}{y} = \frac{3}{x + 2} + \frac{1}{4} \cdot \frac{3}{3x - 1} - 4 \cdot \frac{2x}{x^2 + 5} - 2 = \frac{3}{x + 2} + \frac{3}{4(3x - 1)} - \frac{8x}{x^2 + 5} - 2$$
3. Natijani $y$ ga ko'paytirib yozamiz:
   $$y' = \frac{(x + 2)^3 \cdot \sqrt[4]{3x - 1}}{(x^2 + 5)^4 \cdot e^{2x}} \left( \frac{3}{x + 2} + \frac{3}{12x - 4} - \frac{8x}{x^2 + 5} - 2 \right)$$

---

### 4-misol. Yig'indidan iborat darajali-ko'rsatkichli ifoda
$y = x^{\sin x} + (\sin x)^x$ funksiyaning hosilasini toping.

**Yechim:**
> [!WARNING]
> **Muhim ogohlantirish:** Tenglikning o'ng tomoni yig'indidan iborat bo'lganda ($y = u + v$), to'g'ridan-to'g'ri $\ln y = \ln u + \ln v$deb yozish **mumkin emas**, chunki$\ln(u + v) \neq \ln u + \ln v$!

Bunday misollarda har bir qo'shiluvchini alohida funksiya deb belgilab ($y = u + v \implies y' = u' + v'$), har birini alohida logarifmik differensiallash yoki $e^{\ln(\dots)}$ shaklga keltirish kerak:
$$y = e^{\sin x \ln x} + e^{x \ln(\sin x)}$$
Hosilani olamiz:
$$y' = e^{\sin x \ln x} \cdot (\sin x \ln x)' + e^{x \ln(\sin x)} \cdot (x \ln(\sin x))'$$
$$y' = x^{\sin x}\left(\cos x \ln x + \frac{\sin x}{x}\right) + (\sin x)^x\left(\ln(\sin x) + x \cot x\right)$$

---

## 5. O'z-o'zini tekshirish savollari

1. **Nima uchun ko'p ko'paytuvchili kasrlarni logarifmlaganda $\ln |y|$ (modul ishorasi bilan) yoziladi?**
   - *Javob:* Chunki haqiqiy sonlar sohasida logarifm faqat musbat sonlar uchun aniqlangan, berilgan funksiya $y = f(x)$va uning qatnashuvchilari esa manfiy qiymatlar ham qabul qilishi mumkin. Biroq$x \neq 0$da$(\ln |x|)' = \frac{1}{x}$formula$x > 0$da ham,$x < 0$ da ham bir xil o'rinli bo'lgani uchun modul hosila olish natijasiga ta'sir qilmaydi.
2. **$y = x^x$funksiyaning$x = 1$ nuqtadagi hosilasi nechaga teng?**
   - *Javob:* $y' = x^x(\ln x + 1)$. $x = 1$da$y'(1) = 1^1(\ln 1 + 1) = 1 \cdot (0 + 1) = 1$.

---

## 6. Mustaqil yechish uchun masalalar

Logarifmik differensiallash usuli yordamida quyidagi funksiyalarning hosilalarini toping:

1. $y = (x^2 + 1)^{3x}$2.$y = x^{\ln x}$3.$y = (\cos x)^{\sin x}$4.$y = \sqrt[3]{\frac{x(x - 1)}{x + 2}}$5.$y = (2x + 1)^5 \cdot \sqrt{x^2 + 1} \cdot e^{-3x}$

> [!TIP]
> **Javoblar:**
> 1. $y' = (x^2 + 1)^{3x}\left(3\ln(x^2 + 1) + \frac{6x^2}{x^2 + 1}\right)$> 2.$y' = \frac{2\ln x}{x} \cdot x^{\ln x} = 2 x^{\ln x - 1} \ln x$> 3.$y' = (\cos x)^{\sin x}\left(\cos x \ln(\cos x) - \sin x \tan x\right)$> 4.$y' = \frac{1}{3}\sqrt[3]{\frac{x(x - 1)}{x + 2}}\left(\frac{1}{x} + \frac{1}{x - 1} - \frac{1}{x + 2}\right)$> 5.$y' = (2x + 1)^5 \sqrt{x^2 + 1} e^{-3x}\left(\frac{10}{2x + 1} + \frac{x}{x^2 + 1} - 3\right)$
