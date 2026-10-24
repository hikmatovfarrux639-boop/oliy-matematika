---
title: "Darajali-ko'rsatkichli va logarifmik funksiyalar limitlari ([0·∞], [∞-∞], [0^0], [∞^0])"
module: "limitlar"
order: 10
description: "Logarifmik va ko'rsatkichli limitlar, ekvivalentlik almashtirishlari hamda [0^0], [∞^0] aniqmasliklarni e^(v ln u) ko'rinishiga keltirib yechish."
---

Oldingi darslarda biz ikkita eng muhim ajoyib limit — trigonometrik $\lim_{x \to 0} \frac{\sin x}{x} = 1$ hamda eksponensial $\lim_{x \to 0} (1 + x)^{1/x} = e$ limitlarni o'rgangan edik. Ikkinchi ajoyib limitdan bevosita kelib chiqadigan logarifmik va ko'rsatkichli limitlar matematik analizda **ajoyib limitlarning natijalari** deb yuritiladi. Ular yordamida logarifmik, ko'rsatkichli hamda murakkab $[0^0]$ va $[\infty^0]$ ko'rinishidagi aniqmasliklar hisoblanadi.

---

## 1. Ikkinchi ajoyib limitning logarifmik va ko'rsatkichli natijalari

Ikkinchi ajoyib limit $\lim_{x \to 0} (1 + x)^{\frac{1}{x}} = e$ tenglikning ikkala tomonini natural logarifmlasak (logarifmik funksiya uzluksiz bo'lgani uchun limit belgisi funksiya ichiga kiradi), quyidagi fundamental natijalar hosil bo'ladi:

### 1-natija: Logarifmik limit
$$
\lim_{x \to 0} \frac{\ln(1 + x)}{x} = \lim_{x \to 0} \ln\big((1 + x)^{\frac{1}{x}}\big) = \ln e = 1
$$
Ixtiyoriy $a > 0, a \neq 1$ asosli logarifm uchun $\log_a(1+x) = \frac{\ln(1+x)}{\ln a}$ bo'lganligidan:
$$
\lim_{x \to 0} \frac{\log_a(1 + x)}{x} = \frac{1}{\ln a}
$$

### 2-natija: Ko'rsatkichli limit
Agar $\ln(1 + x) = t$ almashtirish kiritsak, $1 + x = e^t \implies x = e^t - 1$ bo'ladi. $x \to 0$ da $t \to 0$ bo'lgani sababli:
$$
\lim_{t \to 0} \frac{e^t - 1}{t} = 1
$$
Ixtiyoriy $a > 0$ asosli ko'rsatkichli funksiya uchun ($a^x = e^{x \ln a}$):
$$
\lim_{x \to 0} \frac{a^x - 1}{x} = \ln a
$$

### 3-natija: Darajali limit
Ixtiyoriy haqiqiy $\alpha \in \mathbb{R}$ daraja ko'rsatkichi uchun:
$$
\lim_{x \to 0} \frac{(1 + x)^\alpha - 1}{x} = \alpha
$$

> [!IMPORTANT]
> **Cheksiz kichik funksiyalarning ekvivalentlik jadvali ($\alpha(x) \to 0$ da):**
> Ko'paytma va bo'linma limitlarida quyidagi ekvivalent almashtirishlar misollarni bir necha soniyada yechish imkonini beradi:
> - $\ln\big(1 + \alpha(x)\big) \sim \alpha(x)$
> - $\log_a\big(1 + \alpha(x)\big) \sim \frac{\alpha(x)}{\ln a}$
> - $e^{\alpha(x)} - 1 \sim \alpha(x)$
> - $a^{\alpha(x)} - 1 \sim \alpha(x) \ln a$
> - $\big(1 + \alpha(x)\big)^p - 1 \sim p \cdot \alpha(x)$

---

## 2. Logarifmik va ko'rsatkichli limitlarni yechish texnikasi

### $\ln f(x)$ ko'rinishidagi ifodalarni $\ln(1 + \alpha)$ shaklga keltirish
Agar limitda $\ln f(x)$ qatnashsa va $x \to x_0$ da $f(x) \to 1$ bo'lsa ($\ln 1 = 0$), ekvivalentlik qoidasini qo'llash uchun argumentga $1$ ni qo'shib-ayiramiz:
$$
\ln f(x) = \ln\big(1 + (f(x) - 1)\big) \sim f(x) - 1 \quad \big(f(x) \to 1 \text{ da}\big)
$$

### Logarifmlar ayirmasi: $[\infty - \infty]$ aniqmaslik
Agar $x \to \infty$ da $\ln P(x) - \ln Q(x)$ ko'rinishidagi $[\infty - \infty]$ aniqmaslik uchrasa, logarifm xossasi $\ln A - \ln B = \ln \frac{A}{B}$ yordamida uni yagona logarifmga keltiramiz.

---

### 1-misol. Ko'rsatkichli va logarifmik ekvivalentlik
Quyidagi limitni hisoblang:
$$
L = \lim_{x \to 0} \frac{e^{5x} - e^{2x}}{\ln(1 + 3x)}
$$

**Yechish:**
$x = 0$ da $\frac{1 - 1}{\ln 1} = \left[\frac{0}{0}\right]$ aniqmaslik.
Suratdan $e^{2x}$ ni qavs tashqarisiga chiqaramiz:
$$
e^{5x} - e^{2x} = e^{2x}\big(e^{3x} - 1\big)
$$
Endi $x \to 0$ da ekvivalentlik jadvalidan foydalanamiz:
- $e^{3x} - 1 \sim 3x$
- $\ln(1 + 3x) \sim 3x$
- $e^{2x} \to e^0 = 1$

Bularni limitga qo'yamiz:
$$
L = \lim_{x \to 0} \frac{e^{2x}(e^{3x} - 1)}{\ln(1 + 3x)} = \lim_{x \to 0} \frac{1 \cdot 3x}{3x} = 1
$$

---

### 2-misol. Umumiy asosli ko'rsatkichli ifodalar va trigonometriya
Quyidagi limitni hisoblang:
$$
L = \lim_{x \to 2} \frac{5^{x - 2} - 1}{\sin(x - 2)}
$$

**Yechish:**
$x \to 2$ da $\alpha(x) = x - 2 \to 0$ cheksiz kichik miqdordir.
Ekvivalentlik qoidasiga ko'ra ($\alpha \to 0$ da):
- $5^\alpha - 1 \sim \alpha \ln 5 = (x - 2)\ln 5$
- $\sin \alpha \sim \alpha = x - 2$

U holda:
$$
L = \lim_{x \to 2} \frac{(x - 2)\ln 5}{x - 2} = \ln 5
$$

---

### 3-misol. Logarifmik $\ln f(x)$ ifodani ekvivalentiga almashtirish
Quyidagi limitni hisoblang:
$$
L = \lim_{x \to 0} \frac{\ln(\cos 2x)}{x^2}
$$

**Yechish:**
$x \to 0$ da $\cos 2x \to 1$, shuning uchun $\ln(\cos 2x) \to \ln 1 = 0$. Kasr $\left[\frac{0}{0}\right]$ aniqmaslikni beradi.
$\ln f(x) \sim f(x) - 1$ qoidasini qo'llaymiz:
$$
\ln(\cos 2x) = \ln\big(1 + (\cos 2x - 1)\big) \sim \cos 2x - 1
$$
Trigonometriyadan $\cos 2x - 1 = -2\sin^2 x \sim -2x^2$ ($x \to 0$ da) ekanligini bilamiz. Demak:
$$
L = \lim_{x \to 0} \frac{\cos 2x - 1}{x^2} = \lim_{x \to 0} \frac{-2\sin^2 x}{x^2} = \lim_{x \to 0} \frac{-2x^2}{x^2} = -2
$$

---

## 3. Darajali-ko'rsatkichli funksiyalar va $[0^0]$, $[\infty^0]$ aniqmasliklar

Faraz qilaylik, bizga $y = \big(u(x)\big)^{v(x)}$ funksiya berilgan bo'lib ($u(x) > 0$), $x \to x_0$ da quyidagi uchta darajali aniqmaslikdan biri yuzaga kelsin:
1. **$[1^\infty]$** — oldingi darsda o'rganilgan ($e^{\lim(u-1)v}$).
2. **$[0^0]$** — asos $u(x) \to +0$ ga, daraja $v(x) \to 0$ ga intiladi.
3. **$[\infty^0]$** — asos $u(x) \to +\infty$ ga, daraja $v(x) \to 0$ ga intiladi.

$[0^0]$ va $[\infty^0]$ aniqmasliklarni yechish uchun asosiy logarifmik ayniyatdan foydalanib, ifodani **$e$ asosli ko'rsatkichli shaklga** o'tkazamiz:

$$
\big(u(x)\big)^{v(x)} = e^{\ln \left(u(x)^{v(x)}\right)} = e^{v(x) \cdot \ln u(x)}
$$

> [!TIP]
> **Universal eksponensial almashtirish:**
> Har qanday $[0^0]$ yoki $[\infty^0]$ aniqmaslikda:
> 
$$
> \lim_{x \to x_0} \big(u(x)\big)^{v(x)} = \exp\left( \lim_{x \to x_0} v(x) \cdot \ln u(x) \right)
> 
$$
> Natijada daraja ko'rsatkichidagi $v(x) \cdot \ln u(x)$ ko'paytma **$[0 \cdot \infty]$** ko'rinishidagi aniqmaslikka aylanadi!

### O'sish tezliklari iyerarxiyasi (Muhim asimptotik qonuniyat)
$[0 \cdot \infty]$ ko'rinishidagi ko'paytmalarda logarifmik, darajali va ko'rsatkichli funksiyalar uchrashganda quyidagi fundamental limitlar (o'sish tezligi qonuni) juda qo'l keladi:

Har qanday $\alpha > 0$ va $a > 1$ uchun:
1. $x \to +\infty$ da logarifm har qanday musbat darajadan sekin o'sadi, ko'rsatkichli funksiya esa tez o'sadi:
   
$$
   \lim_{x \to +\infty} \frac{\ln x}{x^\alpha} = 0, \qquad \lim_{x \to +\infty} \frac{x^\alpha}{a^x} = 0
   
$$
2. $x \to +0$ da ($t = \frac{1}{x} \to +\infty$ almashtirishga ko'ra) musbat daraja logarifmdan kuchliroq nolga intiladi:
   
$$
   \lim_{x \to +0} x^\alpha \ln x = 0
   
$$

---

### 4-misol. $[0^0]$ aniqmaslikni hisoblash
Quyidagi limitni hisoblang:
$$
L = \lim_{x \to +0} x^{\sin x}
$$

**Yechish:**
$x \to +0$ da asos $x \to 0$, daraja $\sin x \to 0$, ya'ni $[0^0]$ aniqmaslik.
$u^v = e^{v \ln u}$ formulasidan foydalanamiz:
$$
L = \exp\left( \lim_{x \to +0} \sin x \cdot \ln x \right)
$$
Darajadagi limit $[0 \cdot (-\infty)]$ aniqmaslikdir. Uni $\frac{\sin x}{x}$ ajoyib limit bilan bog'lash uchun $x$ ga ko'paytirib va bo'lamiz:
$$
\lim_{x \to +0} (\sin x \cdot \ln x) = \lim_{x \to +0} \left( \frac{\sin x}{x} \cdot (x \ln x) \right)
$$
Ma'lumki, $x \to +0$ da $\lim_{x \to +0} \frac{\sin x}{x} = 1$ va o'sish tezligi xossasiga ko'ra $\lim_{x \to +0} (x \ln x) = 0$.
Demak:
$$
\lim_{x \to +0} (\sin x \cdot \ln x) = 1 \cdot 0 = 0
$$
Natijada:
$$
L = e^0 = 1
$$

---

### 5-misol. $[\infty^0]$ aniqmaslikni hisoblash
Quyidagi limitni hisoblang:
$$
L = \lim_{x \to +\infty} (3^x + x)^{\frac{1}{x}}
$$

**Yechish:**
$x \to +\infty$ da asos $3^x + x \to +\infty$, daraja $\frac{1}{x} \to 0$. Demak, $[\infty^0]$ aniqmaslik.
Qavs ichidagi eng tez o'suvchi bosh had — bu $3^x$ ko'rsatkichli funksiyadir. Uni qavs tashqarisiga chiqaramiz:
$$
(3^x + x)^{\frac{1}{x}} = \left[ 3^x \left(1 + \frac{x}{3^x}\right) \right]^{\frac{1}{x}} = (3^x)^{\frac{1}{x}} \cdot \left(1 + \frac{x}{3^x}\right)^{\frac{1}{x}} = 3 \cdot \left(1 + \frac{x}{3^x}\right)^{\frac{1}{x}}
$$
O'sish tezligi qonuniga ko'ra $x \to +\infty$ da $\lim_{x \to +\infty} \frac{x}{3^x} = 0$ va $\frac{1}{x} \to 0$.
Shuning uchun ikkinchi ko'paytuvchi $(1 + 0)^0 = 1$ ga intiladi (bu yerda aniqmaslik yo'q!).
Demak:
$$
L = 3 \cdot 1 = 3
$$

> [!WARNING]
> **Ekvivalentlikni yig'indi va ayirmada qo'llamang!**
> Masalan, $\lim_{x \to 0} \frac{e^x - 1 - x}{x^2}$ misolida suratdagi $e^x - 1$ ni $x$ ga almashtirsangiz, $\frac{x - x}{x^2} = 0$ degan **noto'g'ri** javob chiqadi (haqiqiy javob $\frac{1}{2}$). Ekvivalentlik faqat ko'paytma va bo'linma tarkibidagi butun ko'paytuvchilar uchun ishlaydi!

---

## 4. O'z-o'zini tekshirish savollari

> [!NOTE]
> Quyidagi savollarga javob toping:
> 1. $\lim_{x \to 0} \frac{2^x - 1}{x}$ va $\lim_{x \to 0} \frac{e^{2x} - 1}{x}$ limitlarining farqi nimada?
> 2. $[1^\infty]$, $[0^0]$ va $[\infty^0]$ ko'rinishlardan tashqari, $0^{+\infty}$ yoki $(+\infty)^{+\infty}$ ifodalar aniqmaslik hisoblanadimi? Ularning qiymati nimaga teng?
> 3. $\ln(x)$ funksiyani $x \to 1$ da qanday chiziqli ko'phadga ekvivalent almashtirish mumkin?

---

## 5. Mustaqil yechish uchun mashqlar

Quyidagi limitlarni hisoblang:

1. $\lim_{x \to 0} \frac{7^{2x} - 1}{\sin 3x}$
2. $\lim_{x \to 0} \frac{\sqrt{1 + 4x} - 1}{\ln(1 + 2x)}$
3. $\lim_{x \to +\infty} \big(x \cdot (\ln(x + 3) - \ln x)\big)$
4. $\lim_{x \to +0} (\sin 2x)^x$
5. $\lim_{x \to +\infty} (e^{2x} + 5^x)^{\frac{1}{x}}$

**Javoblar:**
1. $\frac{2 \ln 7}{3}$
2. $1$ (Ko'rsatma: $\sqrt{1+4x} - 1 = (1+4x)^{1/2} - 1 \sim \frac{1}{2} \cdot 4x = 2x$).
3. $3$ (Ko'rsatma: $\ln(x+3) - \ln x = \ln\left(1 + \frac{3}{x}\right) \sim \frac{3}{x}$).
4. $1$
5. $e^2 \approx 7.389$ (Ko'rsatma: $e^2 \approx 7.389 > 5$ bo'lgani uchun $e^{2x} = (e^2)^x$ bosh had hisoblanadi!).
