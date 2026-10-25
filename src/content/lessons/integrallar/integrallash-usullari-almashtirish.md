---
title: "O'zgaruvchini almashtirish va differensial ostiga kiritish"
module: "integrallar"
order: 2
description: "Murakkab integrallarni jadval shakliga keltirish, differensial ostiga kiritishning 6 ta turi, o'zgaruvchini almashtirish (u-substitution) va ildizli integrallar."
---

## Kirish: Jadvalda yo'q integrallarni qanday yechamiz?

Oldingi darsda biz asosiy integrallar jadvali bilan tanishdik. Ammo amaliyotda $\int \cos x \, dx$emas, balki$\int \cos(7x - 4) \, dx$yoki$\int 3x^2 e^{x^3} \, dx$ kabi murakkabroq ifodalar uchraydi.

Bunday holatlarda integral hisobning eng qudratli quroli — **differensial ostiga kiritish** va **o'zgaruvchini almashtirish** (ingliz adabiyotlarida *u-substitution*) usulidir. Bu usul differensiallashdagi Murakkab funksiya hosilasi (Zanjir qoidasi)ning teskari aksidir!

---

## 1. Nazariy asos: Differensial ostiga kiritish qoidasi

Differensial ta'rifiga ko'ra: $d(g(x)) = g'(x) \, dx$.
Demak, agar integral ostida biror $g(x)$funksiyaning hosilasi$g'(x)$ ko'paytuvchi bo'lib turgan bo'lsa, uni differensial belgisi ostiga kiritish mumkin:

$$
\int f(g(x)) \cdot g'(x) \, dx = \int f(g(x)) \, d(g(x))
$$

Agar $u = g(x)$ deb yangi o'zgaruvchi kiritsak, integral oddiy jadval ko'rinishiga keladi:

$$
\int f(u) \, du = F(u) + C = F(g(x)) + C
$$

---

## 2. Differensial ostiga kiritishning "Oltin Jadvali"

Amaliy hisoblashlarda eng ko'p qo'llaniladigan almashtirishlar:

| Integral ostidagi ifoda | Differensial shakli | Tushuntirish |
|---|---|---|
| $dx$|$= \frac{1}{k} d(kx + b)$ | Chiziqli argument ($k \neq 0$) |
| $x \, dx$|$= \frac{1}{2} d(x^2)$| Chunki$(x^2)' = 2x$ |
| $x^2 \, dx$|$= \frac{1}{3} d(x^3)$| Chunki$(x^3)' = 3x^2$ |
| $x^{n-1} \, dx$|$= \frac{1}{n} d(x^n)$ | Umumiy darajali holat |
| $\frac{1}{x} \, dx$|$= d(\ln x)$| Chunki$(\ln x)' = \frac{1}{x}$ |
| $\cos x \, dx$|$= d(\sin x)$| Chunki$(\sin x)' = \cos x$ |
| $\sin x \, dx$|$= -d(\cos x)$ | Minus ishoraga e'tibor bering! |
| $\frac{1}{\cos^2 x} \, dx$|$= d(\operatorname{tg} x)$ | Tangens hosilasi |
| $\frac{1}{\sin^2 x} \, dx$|$= -d(\operatorname{ctg} x)$ | Kotangens hosilasi |
| $e^x \, dx$|$= d(e^x)$ | Eksponenta hosilasi |
| $\frac{1}{1 + x^2} \, dx$|$= d(\operatorname{arctg} x)$ | Arktangens hosilasi |
| $\frac{1}{\sqrt{1 - x^2}} \, dx$|$= d(\arcsin x)$ | Arksinus hosilasi |

---

## 3. O'zgaruvchini almashtirishning 6 ta asosiy turi

### 1-tur: Chiziqli argument $\int f(kx + b) \, dx$Har qanday jadval formulasida$x$o'rniga$kx + b$kelsa, natija oldiga$\frac{1}{k}$ ko'paytuvchi chiqadi:
$$
\int f(kx + b) \, dx = \frac{1}{k} F(kx + b) + C
$$
*Misol:* $\int e^{4x} \, dx = \frac{1}{4} e^{4x} + C$, $\int \cos(3x) \, dx = \frac{1}{3}\sin(3x) + C$.

### 2-tur: Darajali murakkab funksiya $\int [f(x)]^n \cdot f'(x) \, dx$
Agar funksiya darajasi yonida uning o'zining hosilasi ko'paytuvchi bo'lib tursa:
$$
\int [f(x)]^n \, d(f(x)) = \frac{[f(x)]^{n+1}}{n+1} + C \quad (n \neq -1)
$$

### 3-tur: Kasr suratida maxrajning hosilasi turganda (Eng mashhur formula!)
Agar kasrning surati aynan maxrajning hosilasiga teng bo'lsa:
$$
\int \frac{f'(x)}{f(x)} \, dx = \ln\lvert f(x)\rvert + C
$$
Bu formula orqali $\operatorname{tg} x$va$\operatorname{ctg} x$ integrallari bir soniyada topiladi:
$$
\int \operatorname{tg} x \, dx = \int \frac{\sin x}{\cos x} \, dx = -\int \frac{d(\cos x)}{\cos x} = -\ln\lvert\cos x\rvert + C
$$

### 4-tur: Ildizli ifodalarni ratsionalizatsiyalash ($t = \sqrt{\dots}$)
Agar integral ostida $\sqrt{ax + b}$qatnashgan bo'lsa, ildizdan qutulish uchun butun ildiz$t$ deb belgilanadi:
$$
t = \sqrt{ax + b} \implies t^2 = ax + b \implies x = \frac{t^2 - b}{a}, \quad dx = \frac{2t \, dt}{a}
$$

---

## 4. O'zgaruvchini almashtirish algoritmi (4 qadam)

1. **Yangi o'zgaruvchini tanlang:** Murakkab yoki ichki qismni $t = g(x)$ deb oling.
2. **Differensialini toping:** $dt = g'(x) \, dx \implies dx = \frac{dt}{g'(x)}$.
3. **Integralni to'liq yangi o'zgaruvchiga o'tkazing:** Integral ichida birorta ham $x$ qolmasligi shart! Yangi integralni jadval formulasi bo'yicha integrallang.
4. **Dastlabki o'zgaruvchiga qayting:** Natijadagi har bir $t$o'rniga yana$g(x)$ ifodani qo'ying.

---

## 5. Amaliy misollar va batafsil yechimlar

### 1-misol: Chiziqli argument
Hisoblang:
$$
\int \cos(5x - 2) \, dx
$$

**Yechilishi:**
- $t = 5x - 2$ deb belgilaymiz.
- $dt = (5x - 2)' \, dx = 5 \, dx \implies dx = \frac{dt}{5}$.
Integralga qo'yamiz:
$$
\int \cos(t) \cdot \frac{dt}{5} = \frac{1}{5} \int \cos t \, dt = \frac{1}{5}\sin t + C
$$
Eski o'zgaruvchiga qaytamiz ($t = 5x - 2$):
$$
= \frac{1}{5}\sin(5x - 2) + C
$$

**Javob:** $\frac{1}{5}\sin(5x - 2) + C$

---

### 2-misol: Darajali ifodani differensial ostiga kiritish
Hisoblang:
$$
\int x^2 \sqrt{x^3 + 8} \, dx
$$

**Yechilishi:**
Ildiz ichidagi $x^3 + 8$ning hosilasi$3x^2$dir. Bizda esa$x^2 \, dx$ ko'paytuvchisi bor!
1. $x^2 \, dx = \frac{1}{3} d(x^3 + 8)$ ekanligini ko'ramiz.
2. $t = x^3 + 8 \implies dt = 3x^2 \, dx \implies x^2 \, dx = \frac{dt}{3}$.
3. Integralga qo'yamiz:
   
$$
   \int \sqrt{t} \cdot \frac{dt}{3} = \frac{1}{3} \int t^{1/2} \, dt = \frac{1}{3} \cdot \frac{t^{3/2}}{3/2} + C = \frac{2}{9} t^{3/2} + C
   
$$
4. Orqaga qaytamiz:
   
$$
   = \frac{2}{9} (x^3 + 8)^{3/2} + C = \frac{2}{9}\sqrt{(x^3 + 8)^3} + C
   
$$

**Javob:** $\frac{2}{9}\sqrt{(x^3 + 8)^3} + C$

---

### 3-misol: Suratida maxrajning hosilasi bo'lgan integral ($\frac{f'}{f}$)
Hisoblang:
$$
\int \frac{2x + 5}{x^2 + 5x - 7} \, dx
$$

**Yechilishi:**
Maxrajning hosilasini olib tekshiramiz:
$$
(x^2 + 5x - 7)' = 2x + 5
$$
Surat aynan maxrajning hosilasiga teng! Demak:
$$
(2x + 5) \, dx = d(x^2 + 5x - 7)
$$
Integral to'g'ridan-to'g'ri logarifmga keladi:
$$
\int \frac{d(x^2 + 5x - 7)}{x^2 + 5x - 7} = \ln\lvert x^2 + 5x - 7\rvert + C
$$

**Javob:** $\ln|x^2 + 5x - 7| + C$

---

### 4-misol: Trigonometrik va darajali almashtirish
Hisoblang:
$$
\int \sin^3 x \cdot \cos x \, dx
$$

**Yechilishi:**
$\cos x \, dx = d(\sin x)$ bo'lgani uchun:
- $t = \sin x \implies dt = \cos x \, dx$.
Integral:
$$
\int t^3 \, dt = \frac{t^4}{4} + C = \frac{\sin^4 x}{4} + C
$$

**Javob:** $\frac{\sin^4 x}{4} + C$

---

### 5-misol: Arktangens qatnashgan integral
Hisoblang:
$$
\int \frac{\operatorname{arctg}^2 x}{1 + x^2} \, dx
$$

**Yechilishi:**
Bilamizki, $(\operatorname{arctg} x)' = \frac{1}{1 + x^2}$. Demak:
- $t = \operatorname{arctg} x \implies dt = \frac{dx}{1 + x^2}$.
Integral:
$$
\int t^2 \, dt = \frac{t^3}{3} + C = \frac{\operatorname{arctg}^3 x}{3} + C
$$

**Javob:** $\frac{\operatorname{arctg}^3 x}{3} + C$

---

### 6-misol: Ildizli almashtirish ($t = \sqrt{x}$)
Hisoblang:
$$
\int \frac{dx}{1 + \sqrt{x}}
$$

**Yechilishi:**
1. Ildizdan qutulish uchun $t = \sqrt{x}$ deb belgilaymiz.
2. Ikkala tomonni kvadratga ko'taramiz: $x = t^2$.
3. Differensial olamiz: $dx = 2t \, dt$.
4. Integralga qo'yamiz:
   
$$
   \int \frac{2t \, dt}{1 + t} = 2 \int \frac{t}{t + 1} \, dt
   
$$
5. Suratga $1$ qo'shib va ayirib olamiz ($t = (t+1) - 1$):
   
$$
   2 \int \frac{(t + 1) - 1}{t + 1} \, dt = 2 \int \left( 1 - \frac{1}{t + 1} \right) \, dt = 2 [t - \ln|t + 1|] + C
   
$$
6. Dastlabki $t = \sqrt{x}$ ga qaytamiz:
   
$$
   = 2\sqrt{x} - 2\ln(1 + \sqrt{x}) + C
   
$$

**Javob:** $2\sqrt{x} - 2\ln(1 + \sqrt{x}) + C$

---

## ⚠️ Talabalar ko'p yo'l qo'yadigan 3 ta jiddiy xato

1. **$dx$ni almashtirishni unutish va uni shunchaki$dt$ deb yozish:**
   > Masalan, $\int \cos(3x) \, dx$da$t = 3x$deb olib,$\int \cos(t) \, dt = \sin(3x) + C$deb yozish xato! Chunki$dt = 3 \, dx \implies dx = \frac{dt}{3}$. Oldidagi $\frac{1}{3}$ ko'paytuvchi tushib qolmasligi shart.

2. **Aralash o'zgaruvchilar bilan qoldirish:**
   > Yangi o'zgaruvchiga o'tgandan so'ng integral ichida ham $x$, ham $t$aralashib qolmasligi kerak. Hamma$x$lar to'liq$t$ ga aylanishi shart.

3. **Eski o'zgaruvchiga qaytishni unutish:**
   > Misol $x$orqali berilgan bo'lsa, javob ham albatta$x$orqali bo'lishi shart. Javobni$t$ bo'yicha qoldirish chala hisoblanadi.

---

## 💡 Ustozdan maslahat: Nimani $t$ deb belgilashni qanday bilish mumkin?

Integralga qarang va o'zingizdan so'rang: **"Bu yerdagi qaysi ifodaning hosilasi yonida ko'paytuvchi bo'lib turibdi?"**
- Agar $\frac{1}{x}$bo'lsa$\implies \ln x$ni$t$ deng;
- Agar $x \, dx$bo'lsa$\implies x^2$qatnashgan ifodani$t$ deng;
- Agar $\cos x \, dx$bo'lsa$\implies \sin x$ni$t$ deng.

---

## ✍️ Mustaqil yechish uchun mashqlar

1. $\int e^{4x - 1} \, dx$ ni hisoblang.
2. $\int \frac{x}{x^2 + 9} \, dx$ integralini toping.
3. $\int \frac{\ln^4 x}{x} \, dx$ ni hisoblang.
4. $\int \frac{\cos x}{\sqrt{\sin x}} \, dx$ integralini toping.

<details style="margin-top: 1rem; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); cursor: pointer;">
<summary style="font-weight: 700; color: var(--primary);">To'liq yechimlar va javoblar</summary>

**1-masala:** Chiziqli argument: $\frac{1}{4}e^{4x-1} + C$.

    

**2-masala:** $x \, dx = \frac{1}{2} d(x^2 + 9)$. Natija: $\frac{1}{2}\ln(x^2 + 9) + C$.

    

**3-masala:** $t = \ln x \implies dt = \frac{dx}{x}$. $\int t^4 \, dt = \frac{t^5}{5} + C = \frac{\ln^5 x}{5} + C$.

    

**4-masala:** $t = \sin x \implies dt = \cos x \, dx$. $\int t^{-1/2} \, dt = \frac{t^{1/2}}{1/2} + C = 2\sqrt{\sin x} + C$.

</details>
