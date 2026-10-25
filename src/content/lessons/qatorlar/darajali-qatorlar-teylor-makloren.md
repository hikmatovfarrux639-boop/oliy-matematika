---
title: "Darajali qatorlar, Teylor va Makloren qatorlari"
module: "qatorlar"
order: 4
description: "Darajali qatorlar, Abel teoremasi, yaqinlashish radiusi va sohasi, oraliq chegaralarini tekshirish, Teylor/Makloren qatorlari va taqribiy integrallash."
---

## Kirish: Murakkab funksiyalarni ko'phadga aylantirish

Zamonaviy protsessorlar va ilmiy kalkulyatorlar $\sin(0.42)$yoki$e^{1.2}$ qiymatini hisoblashda burchaklarni chizib o'lchab o'tirmaydi. Protsessor arifmetik mantiqiy qurilmasi apparat darajasida faqat oddiy arifmetik amallarni (qo'shish, ayirish, ko'paytirish, bo'lish) bajaradi.

U holda $\sin(x)$, $\ln(x)$yoki$\operatorname{arctg}(x)$ qanday hisoblanadi? Bunga javob — **darajali qatorlar (Teylor va Makloren qatorlari)**! Ular har qanday silliq funksiyani cheksiz darajali ko'phadga aylantirib beradi.

---

## 1. Darajali qator ta'rifi va Abel teoremasi

> **Ta'rif:** Quyidagi ko'rinishdagi funksional qator **darajali qator** deyiladi:
>
> 
$$
> \sum_{n=0}^\infty c_n (x - x_0)^n = c_0 + c_1(x - x_0) + c_2(x - x_0)^2 + \dots + c_n(x - x_0)^n + \dots
> 
$$
>
> Agar markaz $x_0 = 0$bo'lsa:$\sum c_n x^n = c_0 + c_1 x + c_2 x^2 + \dots$ ko'rinishini oladi.

### Abel teoremasi:
Agar $\sum c_n x^n$qator biror$x = x_1 \neq 0$nuqtada yaqinlashsa, u$|x| < |x_1|$ bo'lgan barcha nuqtalarda **mutlaq yaqinlashadi**.
Aksincha, agar qator $x = x_2$nuqtada uzoqlashsa,$|x| > |x_2|$ barcha nuqtalarda uzoqlashadi.

---

## 2. Yaqinlashish radiusi va oralig'i

Har bir darajali qator uchun shunday $R \ge 0$ soni (**yaqinlashish radiusi**) mavjudki:
- $|x - x_0| < R$ bo'lganda qator **mutlaq yaqinlashadi**;
- $|x - x_0| > R$ bo'lganda qator **uzoqlashadi**;
- $|x - x_0| = R$ chegara nuqtalarida ($x = x_0 - R$va$x = x_0 + R$) qatorning xarakteri alohida tekshiriladi.

### Yaqinlashish radiusini topish formulalari:
$$
R = \lim_{n \to \infty} \left| \frac{c_n}{c_{n+1}} \right| \qquad \text{yoki} \qquad R = \frac{1}{\lim_{n \to \infty} \sqrt[n]{|c_n|}}
$$

---

## 3. Teylor va Makloren qatorlari

Agar $f(x)$funksiya$x_0$ nuqtaning atrofida cheksiz differensiallanuvchi bo'lsa:

$$
f(x) = \sum_{n=0}^\infty \frac{f^{(n)}(x_0)}{n!} (x - x_0)^n = f(x_0) + \frac{f'(x_0)}{1!} (x - x_0) + \frac{f''(x_0)}{2!} (x - x_0)^2 + \dots
$$

Agar $x_0 = 0$ bo'lsa, bu qator **Makloren qatori** deyiladi:

$$
f(x) = \sum_{n=0}^\infty \frac{f^{(n)}(0)}{n!} x^n = f(0) + \frac{f'(0)}{1!} x + \frac{f''(0)}{2!} x^2 + \dots
$$

### Asosiy Makloren yoyilmalari jadvali:
1. $e^x = \sum_{n=0}^\infty \frac{x^n}{n!} = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \dots \quad (-\infty < x < +\infty, \, R = \infty)$2.$\sin x = \sum_{n=0}^\infty \frac{(-1)^n x^{2n+1}}{(2n+1)!} = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \dots \quad (R = \infty)$3.$\cos x = \sum_{n=0}^\infty \frac{(-1)^n x^{2n}}{(2n)!} = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \dots \quad (R = \infty)$4.$\ln(1 + x) = \sum_{n=1}^\infty \frac{(-1)^{n-1} x^n}{n} = x - \frac{x^2}{2} + \frac{x^3}{3} - \dots \quad (-1 < x \le 1)$5.$\frac{1}{1 - x} = \sum_{n=0}^\infty x^n = 1 + x + x^2 + x^3 + \dots \quad (|x| < 1)$

---

## 4. Amaliy masalalar va ko'p usulli yechimlar

### 1-masala: Darajali qatorning yaqinlashish sohasini topish

Qatorning yaqinlashish sohasini aniqlang:
$$
\sum_{n=1}^\infty \frac{(x - 2)^n}{n \cdot 3^n}
$$

#### Yechish:
1. Qator markazi $x_0 = 2$.
   Koeffitsiyent: $c_n = \frac{1}{n \cdot 3^n}$.
2. Yaqinlashish radiusini Dalamber formulasi bilan topamiz:
   
$$
   R = \lim_{n \to \infty} \left| \frac{c_n}{c_{n+1}} \right| = \lim_{n \to \infty} \frac{\frac{1}{n \cdot 3^n}}{\frac{1}{(n+1) \cdot 3^{n+1}}} = \lim_{n \to \infty} \frac{(n+1) \cdot 3^{n+1}}{n \cdot 3^n} = \lim_{n \to \infty} \left( \frac{n+1}{n} \cdot 3 \right) = 3
   
$$
3. Yaqinlashish oralig'i:
   
$$
   |x - 2| < 3 \implies -3 < x - 2 < 3 \implies -1 < x < 5
   
$$
4. **Chegara nuqtalarini alohida tekshirish (Eng muhim qadam):**
   - **$x = 5$ nuqtada:**
     
$$
     \sum_{n=1}^\infty \frac{(5 - 2)^n}{n \cdot 3^n} = \sum_{n=1}^\infty \frac{3^n}{n \cdot 3^n} = \sum_{n=1}^\infty \frac{1}{n}
     
$$
     Bu uzoqlashuvchi garmonik qatordir. Demak, $x = 5$nuqtada qator **uzoqlashadi** (dumaloq qavs:$x < 5$).
   - **$x = -1$ nuqtada:**
     
$$
     \sum_{n=1}^\infty \frac{(-1 - 2)^n}{n \cdot 3^n} = \sum_{n=1}^\infty \frac{(-3)^n}{n \cdot 3^n} = \sum_{n=1}^\infty \frac{(-1)^n}{n}
     
$$
     Bu ishorasi almashinuvchi garmonik qator. Leybnits alomatiga ko'ra u **yaqinlashadi** (to'rtburchak qavs: $x \ge -1$).

**Javob:** Yaqinlashish sohasi: $x \in [-1; 5)$.

---

### 2-masala: Elementar bo'lmagan integralni qator yordamida taqribiy hisoblash

Integralni $\varepsilon = 0.001$ aniqlikda hisoblang:
$$
I = \int_0^{0.5} e^{-x^2} dx
$$

#### Yechish:
$e^t = 1 + t + \frac{t^2}{2!} + \dots$Makloren yoyilmasida$t = -x^2$ deb olamiz:
$$
e^{-x^2} = 1 - x^2 + \frac{x^4}{2} - \frac{x^6}{6} + \dots
$$
Hadma-had integrallaymiz:
$$
I = \int_0^{0.5} \left(1 - x^2 + \frac{x^4}{2} - \frac{x^6}{6} + \dots\right) dx = \left[ x - \frac{x^3}{3} + \frac{x^5}{10} - \frac{x^7}{42} + \dots \right]_0^{0.5}
$$
$x = 0.5 = \frac{1}{2}$ qiymatlarini qo'yamiz:
- 1-had: $0.5$- 2-had:$-\frac{(0.5)^3}{3} = -\frac{0.125}{3} \approx -0.04167$- 3-had:$\frac{(0.5)^5}{10} = \frac{0.03125}{10} = 0.003125$- 4-had:$-\frac{(0.5)^7}{42} = -\frac{0.0078125}{42} \approx -0.000186 < 0.001$Leybnits qoidasiga ko'ra 4-had$0.001$ dan kichik bo'lgani uchun uni tashlab yuboramiz:
$$
I \approx 0.5 - 0.04167 + 0.003125 \approx 0.461
$$
Elementar integrallanmaydigan Gauss integrali bir zumda yuqori aniqlikda hisoblandi!

---

## 5. Imtihondagi asosiy tuzoqlar

> [!WARNING] Imtihondagi tuzoqlar
> 1. **Chegara nuqtalarini tekshirishni unutish:**
>    Radius $R = 3$topilgach, shunchaki$(-1; 5)$deb javob yozib ketish imtihonda ball yo'qotilishiga sabab bo'ladi. Chegara nuqtalar$x = -1$va$x = 5$ ni har doim alohida qatorga qo'yib tekshirish shart!
> 2. **Juft darajali qatorlar (masalan $\sum c_n x^{2n}$):**
>    Agar qatorda $x$ning faqat juft darajalari qatnashsa, Dalamber alomatidan chiqqan limit$|x^2| < R$bo'ladi, ya'ni haqiqiy radius$\sqrt{R}$ ga teng bo'ladi!
> 3. **Yaqinlashish markazi $x_0$ ni inobatga olmaslik:**
>    Agar qator $(x - 4)^n$shaklida bo'lsa va$R = 2$chiqsa, yaqinlashish oralig'i$(-2; 2)$emas, balki$(4-2; 4+2) = (2; 6)$ bo'ladi.

---

## 6. Mustaqil yechish uchun amaliy mashqlar

### 1-mashq
Ushbu qatorning yaqinlashish radiusini va sohasini toping:
$$
\sum_{n=1}^\infty \frac{x^n}{n^2}
$$

<details>
<summary>👉 Yechimni tekshirish</summary>

1. $c_n = \frac{1}{n^2}$.
   
$$
   R = \lim_{n \to \infty} \frac{\frac{1}{n^2}}{\frac{1}{(n+1)^2}} = \lim_{n \to \infty} \frac{(n+1)^2}{n^2} = 1
   
$$
2. Oraliq: $(-1; 1)$.
3. Chegaralar:
   - $x = 1 \implies \sum \frac{1}{n^2}$ — yaqinlashadi ($p = 2 > 1$).
   - $x = -1 \implies \sum \frac{(-1)^n}{n^2}$ — mutlaq yaqinlashadi.
Demak, yaqinlashish sohasi: $x \in [-1; 1]$.

</details>

### 2-mashq
$f(x) = \cos(2x)$funksiyasining$x = 0$ atrofidagi Makloren qatorini yozing.

<details>
<summary>👉 Yechimni tekshirish</summary>

Standart yoyilma: $\cos t = 1 - \frac{t^2}{2!} + \frac{t^4}{4!} - \dots$
$t = 2x$ qo'yamiz:
$$
\cos(2x) = 1 - \frac{(2x)^2}{2!} + \frac{(2x)^4}{4!} - \frac{(2x)^6}{6!} + \dots = 1 - 2x^2 + \frac{2}{3}x^4 - \frac{4}{45}x^6 + \dots
$$

</details>
