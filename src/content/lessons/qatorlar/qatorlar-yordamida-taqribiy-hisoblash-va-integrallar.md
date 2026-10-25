---
title: "Qatorlar yordamida taqribiy hisoblash va noelementar integrallar"
module: "qatorlar"
order: 7
description: "Elementar funksiyalarda olinmaydigan integrallarni qatorga yoyib hisoblash, Leybnits qoldig'i bo'yicha xatolikni baholash hamda differensial tenglamalarni darajali qatorlar bilan yechish."
---

## Kirish: "Olinmaydigan" integrallar va haqiqiy hisoblashlar

Matematik analizda shunday integrallar borki, ularni hatto eng kuchli matematik ham Nyuton-Leybnits formulasi orqali yopiq analitik shaklda (sinus, kosinus, logarifm yoki ko'phadlar orqali) yoza olmaydi. Masalan:
- $\int e^{-x^2} dx$ — Puasson integrali (ehtimollar nazariyasidagi normal taqsimot va kvant mexanikasi asosi);
- $\int \frac{\sin x}{x} dx$— Integral sinus$\operatorname{Si}(x)$ (optika va radiofizika);
- $\int \frac{\cos x}{x} dx$— Integral kosinus$\operatorname{Ci}(x)$;
- $\int \frac{dx}{\ln x}$— Integral logarifm$\operatorname{li}(x)$ (tub sonlar taqsimoti).

Bunday noelementar integrallarni hisoblashning eng qudratli vositasi — **Teylor va Makloren darajali qatorlari**dir! Funksiya qatorga yoyiladi va hadma-had integrallanadi.

---

## 1. Asosiy Makloren qatorlari (Arsenalimiz)

Hisoblashlar uchun barcha $x \in (-\infty; +\infty)$ da o'rinli bo'lgan asosiy yoyilmalar:
$$
e^t = \sum_{n=0}^{\infty} \frac{t^n}{n!} = 1 + t + \frac{t^2}{2!} + \frac{t^3}{3!} + \dots
$$
$$
\sin t = \sum_{n=0}^{\infty} \frac{(-1)^n t^{2n+1}}{(2n+1)!} = t - \frac{t^3}{3!} + \frac{t^5}{5!} - \dots
$$
$$
\cos t = \sum_{n=0}^{\infty} \frac{(-1)^n t^{2n}}{(2n)!} = 1 - \frac{t^2}{2!} + \frac{t^4}{4!} - \dots
$$
$$
(1+t)^\alpha = 1 + \alpha t + \frac{\alpha(\alpha-1)}{2!} t^2 + \dots \quad (|t| < 1)
$$

---

## 2. Ishorasi almashinuvchi qatorda xatolikni baholash (Leybnits qoidasi)

Amaliyotda biz cheksiz qatordan faqat birinchi $N$ta hadni olamiz. Qolgan tashlab yuborilgan hadlar **qoldiq xatolik**$R_N$ ni hosil qiladi:
$$
S = S_N + R_N
$$
Agar qator Leybnits alomatini qanoatlantiruvchi **ishorasi almashinuvchi qator** bo'lsa:
$$
|R_N| \le |a_{N+1}|
$$
> [!IMPORTANT] Oltin qoida
> Ishorasi almashinuvchi qatorda xatolik **tashlab yuborilgan eng birinchi hadning modulidan oshmaydi**!
> Agar bizdan natijani $\varepsilon = 10^{-3} = 0.001$aniqlikda hisoblash talab qilinsa, birinchi bo'lib moduli$0.001$ dan kichik bo'lgan had topiladi va aynan shu haddan boshlab barcha qolgan hadlar tashlab yuboriladi.

---

## 3. Differensial tenglamalarni darajali qatorlar ko'rinishida yechish

Ko'pincha o'zgaruvchan koeffitsiyentli differensial tenglamalar (masalan, Bessel yoki Eyri tenglamalari) analitik yechilmaydi.
Bunday tenglamalarning yechimi $x = 0$ nuqta atrofida darajali qator ko'rinishida qidiriladi:
$$
y(x) = \sum_{n=0}^{\infty} c_n x^n = c_0 + c_1 x + c_2 x^2 + c_3 x^3 + \dots
$$
Hosilalar hisoblanadi:
$$
y'(x) = \sum_{n=1}^\infty n c_n x^{n-1}, \quad y''(x) = \sum_{n=2}^\infty n(n-1) c_n x^{n-2}
$$
Bular tenglamaga qo'yilib, $x$ ning bir xil darajalari oldidagi koeffitsiyentlar tenglashtiriladi (noma'lum koeffitsiyentlar usuli).

---

## 4. Masalalarni tahlil qilish

### 1-masala: Puasson integralini berilgan aniqlikda hisoblash
Ushbu integralni $\varepsilon = 10^{-3} = 0.001$ aniqlikda hisoblang:
$$
I = \int_0^1 e^{-x^2} \, dx
$$

**Yechish:**
$e^t$ning yoyilmasida$t = -x^2$ deb olamiz:
$$
e^{-x^2} = 1 - x^2 + \frac{(-x^2)^2}{2!} + \frac{(-x^2)^3}{3!} + \frac{(-x^2)^4}{4!} - \dots = 1 - x^2 + \frac{x^4}{2} - \frac{x^6}{6} + \frac{x^8}{24} - \dots
$$
Ushbu qator barcha haqiqiy sonlar to'plamida tekis yaqinlashadi, shuning uchun uni $[0; 1]$ kesmada hadma-had integrallash mumkin:
$$
I = \int_0^1 \left( 1 - x^2 + \frac{x^4}{2} - \frac{x^6}{6} + \frac{x^8}{24} - \dots \right) dx
$$
$$
I = \left[ x - \frac{x^3}{3} + \frac{x^5}{10} - \frac{x^7}{42} + \frac{x^9}{216} - \frac{x^{11}}{11 \cdot 120} + \dots \right]_0^1
$$
$$
I = 1 - \frac{1}{3} + \frac{1}{10} - \frac{1}{42} + \frac{1}{216} - \frac{1}{1320} + \dots
$$
Hadlarning o'nli kasr qiymatlarini baholaymiz:
- $a_1 = 1$-$a_2 = -1/3 \approx -0.333333$-$a_3 = 1/10 = 0.1$-$a_4 = -1/42 \approx -0.023810$-$a_5 = 1/216 \approx 0.004630$-$a_6 = -1/1320 \approx -0.000758$E'tibor bering!$|a_6| = \frac{1}{1320} \approx 0.000758 < 0.001 = \varepsilon$.
Demak, Leybnits qoidasiga binoan, $a_6$va undan keyingi barcha hadlarni tashlab yuborsak, xatolik$0.001$ dan oshmaydi!
Dastlabki 5 ta hadni jamlaymiz:
$$
I \approx 1 - \frac{1}{3} + \frac{1}{10} - \frac{1}{42} + \frac{1}{216} \approx 1 - 0.333333 + 0.1 - 0.023810 + 0.004630 \approx 0.747487 \approx 0.747
$$

**Javob:** $I \approx 0.747$ ($\pm 0.001$ aniqlikda).

---

### 2-masala: Differensial tenglamani qator yordamida taqribiy yechish
Koshi masalasining dastlabki to'rtta nolmas hadini toping:
$$
y'' = x y, \quad y(0) = 1, \quad y'(0) = 0
$$
*(Bu mashhur Eyri differensial tenglamasidir).*

**Yechish:**
Boshlang'ich shartlardan: $y(0) = c_0 = 1, \quad y'(0) = c_1 = 0$.
Yechimni qator ko'rinishida yozamiz:
$$
y = 1 + 0 \cdot x + c_2 x^2 + c_3 x^3 + c_4 x^4 + c_5 x^5 + \dots
$$
Tenglamaga qo'yamiz:
$$
y'' = 2c_2 + 6c_3 x + 12c_4 x^2 + 20c_5 x^3 + \dots
$$
$$
x y = x(1 + c_2 x^2 + c_3 x^3 + \dots) = x + c_2 x^3 + c_4 x^5 + \dots
$$
Tenglashtiramiz:
- Ozod hadlar ($x^0$): $2c_2 = 0 \implies c_2 = 0$.
- $x^1$oldidagi:$6c_3 = 1 \implies c_3 = \frac{1}{6}$.
- $x^2$oldidagi:$12c_4 = 0 \implies c_4 = 0$.
- $x^3$oldidagi:$20c_5 = c_2 = 0 \implies c_5 = 0$.
- $x^4$oldidagi:$30c_6 = c_3 = \frac{1}{6} \implies c_6 = \frac{1}{180}$.

Demak, yechimning dastlabki hadlari:
$$
y(x) = 1 + \frac{x^3}{6} + \frac{x^6}{180} + \dots
$$

---

> [!WARNING] Imtihondagi tuzoqlar va ko'p uchraydigan xatoliklar
> 1. **Musbat hadli qatorda Leybnits qoidasini noto'g'ri ishlatish:** Leybnits bahosi ($|R_N| \le a_{N+1}$) **faqat ishorasi almashinuvchi** qatorlar uchun to'g'ri! Agar barcha hadlar musbat bo'lsa (masalan, $\int_0^1 e^{x^2} dx$), qoldiqni geometrik progressiya bilan baholash yoki Lagranj qoldiq hadidan foydalanish shart.
> 2. **Integrallash oralig'ining yaqinlashish sohasidan chiqib ketishi:** Agar Makloren qatori faqat $(-1; 1)$da yaqinlashsa (masalan,$\ln(1+x)$yoki$(1+x)^\alpha$), uni $[0; 2]$ oraliqda integrallab bo'lmaydi! Doim integrallash oralig'i qatorning yaqinlashish sohasida ekanligiga ishonch hosil qiling.

---

## Mustaqil yechish uchun mashqlar

### 1-mashq
Ushbu integralni $\varepsilon = 0.001$ aniqlikda hisoblang:
$$
\int_0^{0.5} \frac{\sin x}{x} \, dx
$$

<details>
<summary>👉 Yechimni tekshirish</summary>

**Yechish:**
$\frac{\sin x}{x} = 1 - \frac{x^2}{3!} + \frac{x^4}{5!} - \dots = 1 - \frac{x^2}{6} + \frac{x^4}{120} - \dots$
Integrallaymiz:
$$
\int_0^{0.5} \left( 1 - \frac{x^2}{6} + \frac{x^4}{120} - \dots \right) dx = \left[ x - \frac{x^3}{18} + \frac{x^5}{600} - \dots \right]_0^{0.5}
$$
$x = 0.5 = 1/2$ qo'yamiz:
- $a_1 = 0.5$-$a_2 = -\frac{(0.5)^3}{18} = -\frac{0.125}{18} \approx -0.006944$-$a_3 = \frac{(0.5)^5}{600} = \frac{0.03125}{600} \approx 0.000052 < 0.001$.
3-had allaqachon $0.001$ dan ancha kichik!
Shuning uchun dastlabki 2 ta had kifoya:
$$
I \approx 0.5 - 0.006944 \approx 0.493
$$

**Javob:** $I \approx 0.493$.

</details>

### 2-mashq
$\sqrt[3]{1.06}$ qiymatini Teylor qatorining dastlabki 3 ta hadi yordamida hisoblang.

<details>
<summary>👉 Yechimni tekshirish</summary>

**Yechish:**
$(1+x)^{1/3} = 1 + \frac{1}{3}x - \frac{1}{9}x^2 + \dots$formulada$x = 0.06$:
$$
\sqrt[3]{1 + 0.06} \approx 1 + \frac{1}{3}(0.06) - \frac{1}{9}(0.06)^2 = 1 + 0.02 - \frac{1}{9}(0.0036) = 1 + 0.02 - 0.0004 = 1.0196
$$

**Javob:** $\approx 1.0196$.

</details>
