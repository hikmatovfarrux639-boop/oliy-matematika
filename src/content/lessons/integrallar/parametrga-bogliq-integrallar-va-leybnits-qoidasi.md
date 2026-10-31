---
title: "Parametrga bog'liq integrallar va integral ostida differensiallash (Leybnits qoidasi)"
description: "Parametrga bog'liq xos va xosmas integrallar, Leybnits differensiallash formulasi va Dirixle integrali."
module: "integrallar"
order: 17
---

## 📌 Kirish va Feynman Usulining Mo'jizasi

Matematik fizika, elektrodinamika, kvant nazariyasi va ehtimollar nazariyasida (xususan, Furye va Laplas almashtirishlarida) integral qiymati bir yoki bir nechta parametrlarga bog'liq bo'lgan funksiyalar bilan ifodalanadi:

$$
I(\alpha) = \int_{a(\alpha)}^{b(\alpha)} f(x, \alpha) \, dx
$$

Oddiy integrallash usullari (bo'laklab integrallash, o'zgaruvchini almashtirish) ojiz qolgan ko'plab xosmas va murakkab integrallarni yechishda jahonga mashhur fizik Richard Feynman o'zining "sehirli quroli"ni qo'llagan. Feynman o'z xotiralarida: *"Boshqa universitetdoshlarim o'rganmagan bitta usul bor edi — integral belgisi ostida differensiallash. Men bu usulni doimiy ravishda qo'llardim va boshqalar yecholmagan integrallarni bir necha daqiqada hisoblab hayratga solardim"*, deb yozadi.

Aslida bu usul buyuk nemis matematigi **Gotfrid Vilgelm Leybnits** tomonidan kashf etilgan bo'lib, matematik analizning eng universal va kuchli apparatlaridan biri hisoblanadi.

---

## 📐 Asosiy Nazariya: Leybnits Formulalari va Xossalari

### 1. O'zgarmas chegarali parametrga bog'liq xos integral

Faraz qilaylik, $f(x, \alpha)$ funksiyasi va uning $\frac{\partial f}{\partial \alpha}$ xususiy hosilasi $[a; b] \times [c; d]$ to'g'ri to'rtburchakda uzluksiz bo'lsin.

> **Leybnits qoidasi (o'zgarmas chegara):**
> Integraldan parametr $\alpha$ bo'yicha hosila olish uchun uning ostidagi funksiyadan xususiy hosila olish kifoya:
> $$
> I'(\alpha) = \frac{d}{d\alpha} \int_a^b f(x, \alpha) \, dx = \int_a^b \frac{\partial f(x, \alpha)}{\partial \alpha} \, dx
> $$

---

### 2. O'zgaruvchan chegarali parametrga bog'liq integral

Agar integrallash chegaralari ham $\alpha$ parametriga bog'liq bo'lsa:
$$
I(\alpha) = \int_{a(\alpha)}^{b(\alpha)} f(x, \alpha) \, dx
$$
u holda to'liq differensial va murakkab funksiya hosilasi qoidasiga ko'ra:

> **Umumlashgan Leybnits formulasi:**
> $$
> \frac{d}{d\alpha} \int_{a(\alpha)}^{b(\alpha)} f(x, \alpha) \, dx = \int_{a(\alpha)}^{b(\alpha)} \frac{\partial f(x, \alpha)}{\partial \alpha} \, dx + f(b(\alpha), \alpha) \cdot b'(\alpha) - f(a(\alpha), \alpha) \cdot a'(\alpha)
> $$

Bu formula uchta qismdan iborat:
1. Ichki funksiyaning parametr bo'yicha o'zgarishi (integral ostidagi differensiallash);
2. Yuqori chegaraning siljishi hisobiga integralning ortishi;
3. Quyi chegaraning siljishi hisobiga integralning kamayishi.

---

### 3. Parametrga bog'liq xosmas integrallar

Agar integrallash oraliqlari cheksiz bo'lsa (masalan, $\int_0^\infty f(x, \alpha) dx$), Leybnits qoidasini qo'llash uchun hosil qilingan $\int_0^\infty \frac{\partial f}{\partial \alpha} dx$ integralining parametr $\alpha$ bo'yicha **tekis yaqinlashishi** talab qilinadi.

> **Veyershtrass alomati:**
> Agar barcha $\alpha \in [c; d]$ va $x \in [a; \infty)$ uchun $\left|\frac{\partial f(x, \alpha)}{\partial \alpha}\right| \le M(x)$ bo'lib, $\int_a^\infty M(x) dx$ yaqinlashsa, u holda integral ostida differensiallash qonuniydir.

---

## 📝 Qadamma-qadam Yechilgan Amaliy Misollar

### 1-misol (Umumlashgan formula bo'yicha):
Ushbu funksiyaning hosilasini toping:
$$
I(\alpha) = \int_{0}^{\alpha^2} \sqrt{1 + x^3 \alpha} \, dx
$$

**Yechilishi:**
1. Chegaralar: $a(\alpha) = 0 \implies a'(\alpha) = 0$; $b(\alpha) = \alpha^2 \implies b'(\alpha) = 2\alpha$.
2. Integral ostidagi funksiyaning parametr bo'yicha xususiy hosilasi:
   $$
   \frac{\partial}{\partial \alpha} \left( \sqrt{1 + x^3 \alpha} \right) = \frac{x^3}{2\sqrt{1 + x^3 \alpha}}
   $$
3. Umumlashgan Leybnits formulasini qo'llaymiz:
   $$
   I'(\alpha) = \int_0^{\alpha^2} \frac{x^3}{2\sqrt{1 + x^3 \alpha}} \, dx + \sqrt{1 + (\alpha^2)^3 \alpha} \cdot (2\alpha) - \sqrt{1 + 0} \cdot 0
   $$
   $$
   I'(\alpha) = \int_0^{\alpha^2} \frac{x^3}{2\sqrt{1 + x^3 \alpha}} \, dx + 2\alpha \sqrt{1 + \alpha^7}
   $$

---

### 2-misol (Feynman usuli bilan integral hisoblash):
Ushbu klassik integralni hisoblang:
$$
J = \int_0^1 \frac{x^b - x^a}{\ln x} \, dx \qquad (a > -1, \quad b > -1)
$$

**Yechilishi:**
1. $b$ ni parametr deb qaraymiz va funksiyani $I(b)$ deb belgilaymiz:
   $$
   I(b) = \int_0^1 \frac{x^b - x^a}{\ln x} \, dx
   $$
2. $b$ parametri bo'yicha integral ostida hosila olamiz:
   $$
   I'(b) = \int_0^1 \frac{\partial}{\partial b} \left( \frac{x^b - x^a}{\ln x} \right) dx = \int_0^1 \frac{x^b \ln x - 0}{\ln x} \, dx
   $$
   $\ln x$ qisqarib, ajoyib soddalashish yuz beradi!
   $$
   I'(b) = \int_0^1 x^b \, dx = \left. \frac{x^{b+1}}{b+1} \right|_0^1 = \frac{1}{b+1}
   $$
3. Endi $I'(b) = \frac{1}{b+1}$ oddiy differensial tenglamani integrallaymiz:
   $$
   I(b) = \int \frac{db}{b+1} = \ln(b+1) + C
   $$
4. $C$ o'zgarmasni topish uchun boshlang'ich shart: agar $b = a$ bo'lsa:
   $$
   I(a) = \int_0^1 \frac{x^a - x^a}{\ln x} dx = \int_0^1 0 \, dx = 0
   $$
   Demak: $\ln(a+1) + C = 0 \implies C = -\ln(a+1)$.
5. Natija:
   $$
   J = I(b) = \ln(b+1) - \ln(a+1) = \ln\left( \frac{b+1}{a+1} \right)
   $$

---

### 3-misol (Dirixle integrali):
Matematika va signallarni qayta ishlashda fundamental bo'lgan Dirixle integralini hisoblang:
$$
D = \int_0^\infty \frac{\sin x}{x} \, dx
$$

**Yechilishi:**
1. Sun'iy ravishda so'ndiruvchi ko'rsatkichli parametr kiritamiz ($\alpha \ge 0$):
   $$
   I(\alpha) = \int_0^\infty e^{-\alpha x} \frac{\sin x}{x} \, dx
   $$
   Ko'rinib turibdiki, biz izlayotgan integral $D = I(0)$ dir.
2. $\alpha > 0$ da parametr bo'yicha hosila olamiz:
   $$
   I'(\alpha) = \int_0^\infty \frac{\partial}{\partial \alpha}\left( e^{-\alpha x} \frac{\sin x}{x} \right) dx = \int_0^\infty -x e^{-\alpha x} \frac{\sin x}{x} \, dx = -\int_0^\infty e^{-\alpha x} \sin x \, dx
   $$
3. Ushbu xosmas integral bo'laklab integrallash orqali oson hisoblanadi:
   $$
   \int_0^\infty e^{-\alpha x} \sin x \, dx = \frac{1}{\alpha^2 + 1} \implies I'(\alpha) = -\frac{1}{\alpha^2 + 1}
   $$
4. Boshlang'ich funksiyani topamiz:
   $$
   I(\alpha) = -\operatorname{arctg}(\alpha) + C
   $$
5. O'zgarmas $C$ ni topish: $\alpha \to \infty$ da $e^{-\alpha x} \to 0$, demak $\lim_{\alpha \to \infty} I(\alpha) = 0$.
   $$
   0 = -\lim_{\alpha \to \infty} \operatorname{arctg}(\alpha) + C \implies 0 = -\frac{\pi}{2} + C \implies C = \frac{\pi}{2}
   $$
   Shunday qilib: $I(\alpha) = \frac{\pi}{2} - \operatorname{arctg}(\alpha)$.
6. Biz izlagan nuqta $\alpha = 0$:
   $$
   D = I(0) = \frac{\pi}{2} - \operatorname{arctg}(0) = \frac{\pi}{2}
   $$

---

## ⚠️ Talabalar Ko'p Yo'l Qo'yadigan Xatolar

1. **Chegaralarning hosilasini tashlab ketish:**
   Chegaralari parametrga bog'liq bo'lganda faqat ichki hosilani hisoblab, chegaralardagi $b'(\alpha)$ va $a'(\alpha)$ hadlarini unutishadi.
2. **Doimiyni topishda noto'g'ri nuqta tanlash:**
   Parametr bo'yicha integrallashdan so'ng hosil bo'ladigan $+C$ ni topish uchun parametrning qulay qiymatini (odatda integral nolga aylanadigan yoki osongina hisoblanadigan qiymatini) to'g'ri tanlash zarur.
3. **Tekis yaqinlashishni inobatga olmaslik:**
   Xosmas integrallarda funksiyani $\alpha$ bo'yicha differensiallash faqat hosila integrali tekis yaqinlashgandagina mumkin. Aks holda mutlaqo xato natijalar kelib chiqadi.

---

## 🎯 Mustaqil Yechish Uchun Masalalar

1. $I(\alpha) = \int_{\sin \alpha}^{\cos \alpha} e^{\alpha x^2} \, dx$ funksiyaning $\alpha$ bo'yicha hosilasini toping.
2. Leybnits usuli bilan hisoblang: $\int_0^\infty \frac{e^{-ax} - e^{-bx}}{x} \, dx \quad (a > 0, b > 0)$.
3. Gauss integrali $\int_{-\infty}^\infty e^{-x^2} dx = \sqrt{\pi}$ dan foydalanib, $\int_{-\infty}^\infty x^2 e^{-\alpha x^2} dx$ integralini hisoblang ($\alpha > 0$).

<details style="margin-top: 1rem; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); cursor: pointer;">
<summary style="font-weight: 700; color: var(--primary);">Javoblar va Ko'rsatmalar</summary>

**1-masala:** Umumlashgan formula bo'yicha:
$I'(\alpha) = \int_{\sin \alpha}^{\cos \alpha} x^2 e^{\alpha x^2} dx - \sin \alpha \cdot e^{\alpha \cos^2 \alpha} - \cos \alpha \cdot e^{\alpha \sin^2 \alpha}$.

**2-masala:** $I(a) = \int_0^\infty \frac{e^{-ax}-e^{-bx}}{x} dx \implies I'(a) = -\int_0^\infty e^{-ax} dx = -\frac{1}{a}$.
$I(a) = -\ln a + C$. $a=b \implies I(b)=0 \implies C = \ln b$.
Javob: $\ln(b/a)$.

**3-masala:** $J(\alpha) = \int_{-\infty}^\infty e^{-\alpha x^2} dx = \frac{\sqrt{\pi}}{\sqrt{\alpha}} = \sqrt{\pi} \alpha^{-1/2}$.
$\alpha$ bo'yicha hosila: $\int_{-\infty}^\infty -x^2 e^{-\alpha x^2} dx = -\frac{1}{2} \sqrt{\pi} \alpha^{-3/2}$.
Javob: $\frac{\sqrt{\pi}}{2\alpha^{3/2}}$.

</details>

---

## 💡 Xulosa va Imtihon Maslahatlari

- Agar integral ostida maxrajda $\ln x$ yoki $x$ kabi noqulay had tursa, demak bu masala deyarli $95\%$ ehtimol bilan Leybnits qoidasi (integral ostida differensiallash) orqali hal bo'ladi.
- Hisoblash sxemasi:
  1) Integralni parametrga bog'lang $I(\alpha)$;
  2) $\alpha$ bo'yicha hosila olib soddalashtiring;
  3) Hosil bo'lgan sodda funksiyani integrallang;
  4) Boshlang'ich shartdan $C$ ni toping.
