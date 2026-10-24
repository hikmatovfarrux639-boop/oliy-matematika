---
title: "Funksiyalarni Teylor va Makloren qatorlariga yoyishning amaliy usullari"
module: "qatorlar"
order: 9
description: "Asosiy elementar funksiyalarning (e^x, sin x, cos x, ln(1+x), (1+x)^m) Makloren yoyilmalari, hosila va integral yordamida qatorga yoyish usullari."
---

Funksiya $f(x)$ ni $x_0$ nuqta atrofida Teylor qatoriga (yoki $x_0 = 0$ da Makloren qatoriga) yoyishda har safar $n$-tartibli hosila $f^{(n)}(x_0)$ ni topish va qoldiq had $R_n(x) \to 0$ ekanligini isbotlash ancha murakkab bo'lishi mumkin. Amaliyotda esa **asosiy elementar funksiyalarning ma'lum (standart) Makloren yoyilmalaridan**, shuningdek darajali qatorlar ustida arifmetik amallar, o'zgaruvchini almashtirish, hadlab differensiallash va integrallash xossalaridan foydalanish eng samarali usul hisoblanadi.

---

## 1. Asosiy elementar funksiyalarning Makloren qatorlari (Standart yoyilmalar)

Quyidagi jadvalda oliy matematikada eng ko'p qo'llaniladigan $5$ ta asosiy va bir nechta yordamchi elementar funksiyalarning $x = 0$ nuqta atrofidagi Makloren qatorlari hamda ularning yaqinlashish sohalari keltirilgan:

### 1.1. Eksponensial funksiya
$$
e^x = 1 + \frac{x}{1!} + \frac{x^2}{2!} + \frac{x^3}{3!} + \dots + \frac{x^n}{n!} + \dots = \sum_{n=0}^{\infty} \frac{x^n}{n!}, \quad x \in (-\infty, +\infty)
$$

### 1.2. Trigonometrik funksiyalar ($\sin x$ va $\cos x$)
$\sin x$ toq funksiya bo'lgani uchun uning Makloren qatorida faqat toq darajalar, $\cos x$ juft funksiya bo'lgani uchun esa faqat juft darajalar qatnashadi:
$$
\sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} + \dots + (-1)^n \frac{x^{2n+1}}{(2n+1)!} + \dots = \sum_{n=0}^{\infty} (-1)^n \frac{x^{2n+1}}{(2n+1)!}, \quad x \in (-\infty, +\infty)
$$
$$
\cos x = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!} + \dots + (-1)^n \frac{x^{2n}}{(2n)!} + \dots = \sum_{n=0}^{\infty} (-1)^n \frac{x^{2n}}{(2n)!}, \quad x \in (-\infty, +\infty)
$$

### 1.3. Giperbolik funksiyalar ($\sinh x$ va $\cosh x$)
$$
\sinh x = x + \frac{x^3}{3!} + \frac{x^5}{5!} + \dots = \sum_{n=0}^{\infty} \frac{x^{2n+1}}{(2n+1)!}, \quad x \in (-\infty, +\infty)
$$
$$
\cosh x = 1 + \frac{x^2}{2!} + \frac{x^4}{4!} + \dots = \sum_{n=0}^{\infty} \frac{x^{2n}}{(2n)!}, \quad x \in (-\infty, +\infty)
$$

### 1.4. Logarifmik funksiya
$$
\ln(1+x) = x - \frac{x^2}{2} + \frac{x^3}{3} - \frac{x^4}{4} + \dots + (-1)^{n-1} \frac{x^n}{n} + \dots = \sum_{n=1}^{\infty} (-1)^{n-1} \frac{x^n}{n}, \quad x \in (-1, 1]
$$

> [!NOTE]
> Chegara nuqtalariga e'tibor bering: $x = 1$ da $\ln 2 = 1 - \frac{1}{2} + \frac{1}{3} - \frac{1}{4} + \dots$ (Leybnits qatori — shartli yaqinlashuvchi), $x = -1$ da esa garmonik qator $-\sum \frac{1}{n}$ hosil bo'lib, u uzoqlashadi.

### 1.5. Binomial qator (Nyuton binomining umumlashmasi)
Ixtiyoriy haqiqiy $m \in \mathbb{R}$ ko'rsatkich uchun:
$$
(1+x)^m = 1 + mx + \frac{m(m-1)}{2!}x^2 + \frac{m(m-1)(m-2)}{3!}x^3 + \dots + \frac{m(m-1)\cdots(m-n+1)}{n!}x^n + \dots
$$
Yaqinlashish sohasi:
* Agar $m \in \mathbb{N} \cup \{0\}$ bo'lsa — qator chekli ko'phadga aylanadi va $\forall x \in \mathbb{R}$ da o'rinli.
* Agar $m \notin \mathbb{N}$ bo'lsa — qator $(-1, 1)$ intervalda absolut yaqinlashadi (chegara nuqtalar $m$ ning ishorasiga bog'liq: $m > 0$ da $[-1, 1]$, $-1 < m < 0$ da $(-1, 1]$, $m \le -1$ da $(-1, 1)$).

**Xususiy hollar (geometrik progressiya yig'indisi):**
* $m = -1$ da:
$$
\frac{1}{1+x} = 1 - x + x^2 - x^3 + \dots = \sum_{n=0}^{\infty} (-1)^n x^n, \quad |x| < 1
$$
* $x$ ni $-x$ ga almashtirsak:
$$
\frac{1}{1-x} = 1 + x + x^2 + x^3 + \dots = \sum_{n=0}^{\infty} x^n, \quad |x| < 1
$$

---

## 2. Qatorga yoyishning amaliy usullari

Darajali qatorning yagonaligi teoremasiga ko'ra, agar funksiya qandaydir usul bilan $\sum_{n=0}^{\infty} c_n (x - x_0)^n$ darajali qator ko'rinishida tasvirlansa, u holda bu qator aynan shu funksiyaning Teylor qatori bo'ladi.

### 2.1. Argumentni almashtirish va algebraik shakl almashtirish usuli
Agar $f(u)$ funksiyaning $u = 0$ atrofidagi yoyilmasi ma'lum bo'lsa, $u = \varphi(x)$ ($\varphi(0) = 0$) almashtirish yordamida murakkab funksiyalarni osongina qatorga yoyish mumkin.

**1-misol.** $f(x) = \cos^2 x$ funksiyani Makloren qatoriga yoying va yaqinlashish sohasini toping.

**Yechish:**
Darajani pasaytirish formulasidan foydalanamiz:
$$
\cos^2 x = \frac{1 + \cos(2x)}{2} = \frac{1}{2} + \frac{1}{2}\cos(2x)
$$
Standart $\cos u = 1 + \sum_{n=1}^{\infty} (-1)^n \frac{u^{2n}}{(2n)!}$ yoyilmada $u = 2x$ deb olamiz:
$$
\cos(2x) = 1 + \sum_{n=1}^{\infty} (-1)^n \frac{(2x)^{2n}}{(2n)!} = 1 + \sum_{n=1}^{\infty} (-1)^n \frac{2^{2n} x^{2n}}{(2n)!}
$$
Natijani asosiy ifodaga qo'yamiz:
$$
\cos^2 x = \frac{1}{2} + \frac{1}{2}\left(1 + \sum_{n=1}^{\infty} (-1)^n \frac{2^{2n} x^{2n}}{(2n)!}\right) = 1 + \sum_{n=1}^{\infty} (-1)^n \frac{2^{2n-1}}{(2n)!} x^{2n}
$$
Yoyilma barcha $x \in (-\infty, +\infty)$ da yaqinlashadi.

---

### 2.2. Ratsional kasrlarni oddiy kasrlarga ajratish usuli
$R(x) = \frac{P(x)}{Q(x)}$ to'g'ri ratsional kasrni Makloren yoki Teylor qatoriga yoyish uchun u avval eng sodda kasrlar yig'indisiga ajratiladi, so'ngra har bir kasr $\frac{1}{1-u} = \sum_{n=0}^{\infty} u^n$ geometrik qator yordamida yoyiladi.

**2-misol.** $f(x) = \frac{3}{2 - x - x^2}$ funksiyani Makloren qatoriga yoying va yaqinlashish intervalini aniqlang.

**Yechish:**
1. Maxrajni ko'paytuvchilarga ajratamiz: $2 - x - x^2 = (2 + x)(1 - x)$.
2. Funksiya eng sodda kasrlarga ajratiladi:
$$
\frac{3}{(2+x)(1-x)} = \frac{A}{2+x} + \frac{B}{1-x} \implies A(1-x) + B(2+x) = 3
$$
$x = 1 \implies 3B = 3 \implies B = 1$; $x = -2 \implies 3A = 3 \implies A = 1$. Demak:
$$
f(x) = \frac{1}{1-x} + \frac{1}{2+x}
$$
3. Birinchi qo'shiluvchi standart geometrik qatordir:
$$
\frac{1}{1-x} = \sum_{n=0}^{\infty} x^n, \quad |x| < 1
$$
4. Ikkinchi qo'shiluvchini $\frac{1}{1+u}$ shakliga keltiramiz ($2$ ni qavsdan tashqariga chiqarib):
$$
\frac{1}{2+x} = \frac{1}{2\left(1 + \frac{x}{2}\right)} = \frac{1}{2} \sum_{n=0}^{\infty} (-1)^n \left(\frac{x}{2}\right)^n = \sum_{n=0}^{\infty} \frac{(-1)^n}{2^{n+1}} x^n, \quad \left|\frac{x}{2}\right| < 1 \iff |x| < 2
$$
5. Ikkala qatorni qo'shamiz. Umumiy yaqinlashish sohasi ikki intervalning kesishmasidan iborat: $(-1, 1) \cap (-2, 2) = (-1, 1)$.
$$
f(x) = \sum_{n=0}^{\infty} \left(1 + \frac{(-1)^n}{2^{n+1}}\right) x^n, \quad x \in (-1, 1)
$$

---

### 2.3. Hadlab differensiallash va integrallash usuli
Darajali qator o'zining yaqinlashish intervali $(-R, R)$ ichida hadlab cheksiz marta differensiallanishi va integrallanishi mumkin, bunda yaqinlashish radiusi $R$ o'zgarmaydi (faqat chegara nuqtalaridagi xulq-atvori o'zgarishi mumkin).

> [!TIP]
> Agar funksiyaning o'zini qatorga yoyish qiyin bo'lsa-yu, lekin uning hosilasi $f'(x)$ ratsional yoki sodda funksiya bo'lsa (masalan, $\arctan x$, $\arcsin x$, $\ln(x + \sqrt{1+x^2})$), avval $f'(x)$ ni qatorga yoyib, so'ngra $[0, x]$ kesmada hadlab integrallash kerak!

**3-misol (Arktangens qatori — Gregori qatori).** $f(x) = \arctan x$ funksiyani Makloren qatoriga yoying.

**Yechish:**
1. Hosilasini topamiz va geometrik progressiya yig'indisi sifatida yoyamiz:
$$
f'(x) = \frac{1}{1 + x^2} = 1 - x^2 + x^4 - x^6 + \dots = \sum_{n=0}^{\infty} (-1)^n x^{2n}, \quad |x| < 1
$$
2. $\arctan 0 = 0$ ekanligini hisobga olib, $0$ dan $x$ gacha hadlab integrallaymiz:
$$
\arctan x = \int_0^x \frac{dt}{1+t^2} = \sum_{n=0}^{\infty} (-1)^n \int_0^x t^{2n} \, dt = \sum_{n=0}^{\infty} (-1)^n \frac{x^{2n+1}}{2n+1} = x - \frac{x^3}{3} + \frac{x^5}{5} - \frac{x^7}{7} + \dots
$$
Abel teoremasiga ko'ra bu qator $x = \pm 1$ chegara nuqtalarida ham yaqinlashadi, ya'ni yaqinlashish sohasi $[-1, 1]$. Xususan, $x = 1$ da mashhur **Leybnits formulasi** kelib chiqadi:
$$
\frac{\pi}{4} = 1 - \frac{1}{3} + \frac{1}{5} - \frac{1}{7} + \dots = \sum_{n=0}^{\infty} \frac{(-1)^n}{2n+1}
$$

**4-misol ($x_0 \neq 0$ nuqta atrofida Teylor qatoriga yoyish).** $f(x) = \ln x$ funksiyani $x_0 = 2$ nuqta darajalari bo'yicha Teylor qatoriga yoying.

**Yechish:**
Yangi o'zgaruvchi $t = x - 2$ kiritamiz (u holda $x = 2 + t$). Standart $\ln(1+u)$ formulasidan foydalanish uchun $2$ ni qavs tashqarisiga chiqaramiz:
$$
\ln x = \ln(2 + (x-2)) = \ln\left[2\left(1 + \frac{x-2}{2}\right)\right] = \ln 2 + \ln\left(1 + \frac{x-2}{2}\right)
$$
Endi $u = \frac{x-2}{2}$ uchun $\ln(1+u) = \sum_{n=1}^{\infty} (-1)^{n-1} \frac{u^n}{n}$ ($u \in (-1, 1]$) yoyilmasini qo'llaymiz:
$$
\ln x = \ln 2 + \sum_{n=1}^{\infty} \frac{(-1)^{n-1}}{n \cdot 2^n} (x - 2)^n
$$
Yaqinlashish sohasi: $-1 < \frac{x-2}{2} \le 1 \iff -2 < x - 2 \le 2 \iff x \in (0, 4]$.

---

## 3. Makloren qatorlarining taqribiy hisoblash va limitlarga tatbiqi

1. **Limitlarni hisoblash:** $x \to 0$ da murakkab funksiyalarni ularning Makloren qatorining dastlabki bir nechta hadlari bilan almashtirish Lopital qoidasidan ko'ra ancha tez natija beradi:
   * $\sin x - x \approx -\frac{x^3}{6}$
   * $1 - \cos x \approx \frac{x^2}{2} - \frac{x^4}{24}$
   * $e^x - 1 - x \approx \frac{x^2}{2}$
2. **Aniq integrallarni taqribiy hisoblash:** Boshlang'ich funksiyasi elementar funksiyalarda ifodalanmaydigan integrallar (masalan, Puasson integrali $\int_0^a e^{-x^2} dx$, Frenel integrallari $\int_0^a \sin(x^2) dx$, integral sinus $\int_0^a \frac{\sin x}{x} dx$) integral ostidagi funksiyani Makloren qatoriga yoyib, hadlab integrallash orqali ixtiyoriy aniqlikda hisoblanadi.

---

## O'z-o'zini tekshirish savollari

1. Nima uchun $\ln x$ va $\frac{1}{x}$ funksiyalarini $x_0 = 0$ nuqtada Makloren qatoriga yoyib bo'lmaydi?
2. Binomial qator $(1+x)^m$ qachon chekli yig'indiga (Nyuton binomiga), qachon esa cheksiz qatorga aylanadi?
3. Hadlab integrallash va differensiallash usullari darajali qatorning yaqinlashish radiusi $R$ ga qanday ta'sir qiladi? Chegara nuqtalariga-chi?
4. $\arcsin x$ funksiyasini Makloren qatoriga yoyish uchun qaysi ikki usulni ketma-ket qo'llash kerak? *(Ko'rsatma: hosila oling va $m = -1/2$ uchun binomial qatorni qo'llab, integrallang).*

---

## Mustaqil yechish uchun masalalar

1. **1-masala:** $f(x) = x^2 e^{-3x}$ funksiyani Makloren qatoriga yoying va umumiy hadini yozing.
2. **2-masala:** $f(x) = \ln\frac{1+x}{1-x}$ funksiyani Makloren qatoriga yoying va yaqinlashish sohasini toping.
3. **3-masala:** $f(x) = \frac{1}{\sqrt{1 - x^2}}$ funksiyani binomial qator yordamida, so'ngra uning yordamida $\arcsin x$ ni Makloren qatoriga yoying.
4. **4-masala:** Makloren qatoriga yoyish orqali $I = \int_0^{0.5} \frac{\sin x}{x} \, dx$ aniq integralni $\varepsilon = 0.0001$ aniqlikda hisoblang.
5. **5-masala:** Makloren yoyilmalaridan foydalanib, $\lim_{x \to 0} \frac{e^x - e^{-x} - 2x}{x - \sin x}$ limitni hisoblang.

---

### Javoblar

1. $x^2 e^{-3x} = \sum_{n=0}^{\infty} \frac{(-1)^n 3^n}{n!} x^{n+2}, \quad x \in (-\infty, +\infty)$.
2. $\ln\frac{1+x}{1-x} = \ln(1+x) - \ln(1-x) = 2 \sum_{n=0}^{\infty} \frac{x^{2n+1}}{2n+1} = 2\left(x + \frac{x^3}{3} + \frac{x^5}{5} + \dots\right), \quad x \in (-1, 1)$.
3. $(1-x^2)^{-1/2} = 1 + \sum_{n=1}^{\infty} \frac{(2n-1)!!}{(2n)!!} x^{2n}$; hadlab integrallab: $\arcsin x = x + \sum_{n=1}^{\infty} \frac{(2n-1)!!}{(2n)!! (2n+1)} x^{2n+1}, \quad x \in [-1, 1]$.
4. $\frac{\sin x}{x} = 1 - \frac{x^2}{3!} + \frac{x^4}{5!} - \dots \implies I = \left[x - \frac{x^3}{18} + \frac{x^5}{600} - \dots\right]_0^{0.5} \approx 0.5 - \frac{0.125}{18} + \frac{0.03125}{600} \approx 0.5 - 0.00694 + 0.00005 \approx 0.4931$.
5. Surat: $(1 + x + \frac{x^2}{2} + \frac{x^3}{6} + \dots) - (1 - x + \frac{x^2}{2} - \frac{x^3}{6} + \dots) - 2x = \frac{x^3}{3} + o(x^3)$. Maxraj: $x - (x - \frac{x^3}{6} + o(x^3)) = \frac{x^3}{6} + o(x^3)$. Nisbat limiti: $\frac{1/3}{1/6} = 2$.
