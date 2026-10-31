---
title: "Bo'laklab integrallash usuli"
module: "integrallar"
order: 3
description: "Bo'laklab integrallash formulasi, LIATE qoidasi, 2 marta bo'laklash, DI jadval usuli (Tabular method) va siklik (aylanma) integrallar."
---

## Kirish: Ko'paytma shaklidagi integrallarni qanday yechamiz?

Agar integral ostida turli tabiatli funksiyalarning ko'paytmasi tursa (masalan, algebraik ko'phad va trigonometriya: $x \cdot \cos x$, yoki ko'phad va eksponenta: $x^2 \cdot e^x$), o'zgaruvchini almashtirish usuli ojiz qoladi. Chunki bu yerda bittasining hosilasi ikkinchisini bermaydi.

Bunday holatlarda ikki funksiya ko'paytmasining hosilasi formulasi:
$$
(u \cdot v)' = u' \cdot v + u \cdot v'
$$
dan kelib chiquvchi **bo'laklab integrallash** (inglizcha *Integration by parts*) usuli qo'llaniladi.

---

## 1. Bo'laklab integrallashning universal formulasi

Differensial shaklda: $d(uv) = v \, du + u \, dv$. Ikkala tomonni integrallasak:

$$
\int u \, dv = u \cdot v - \int v \, du
$$

Bu formula berilgan murakkab $\int u \, dv$ integralni hisoblashni ancha oson bo'lgan yangi $\int v \, du$ integralga keltiradi.

---

## 2. Nima $u$ va nima $dv$ bo'lishi kerak? (LIATE qoidasi)

Bo'laklab integrallashdagi 90% muvaffaqiyat — **$u$ funksiyani to'g'ri tanlash**ga bog'liq. Agar tanlovda adashsangiz, yangi hosil bo'lgan integral dastlabkisidan ham battar murakkablashib ketadi!

Matematikada $u$ ni tanlash uchun mashhur **LIATE** iyerarxiyasi ishlatiladi (yuqorida turgani birinchi navbatda $u$ qilib olinadi):

1. **L — Logarithmic** (Logarifmik funksiyalar: $\ln x, \log_a x$) — *doimo eng birinchi $u$ qilib olinadi!*
2. **I — Inverse trigonometric** (Teskari trigonometriya: $\arcsin x, \operatorname{arctg} x$)
3. **A — Algebraic** (Algebraik ko'phadlar: $x, x^2, 3x - 5$)
4. **T — Trigonometric** (Trigonometriya: $\sin x, \cos x$)
5. **E — Exponential** (Ko'rsatkichli funksiyalar: $e^x, 2^x$) — *bular odatda $dv$ qismga qoldiriladi.*

### Eng ko'p uchraydigan 3 ta asosiy guruh:
| Guruh | Ko'rinishi | Nima $u$ bo'ladi? | Nima $dv$ bo'ladi? |
|---|---|---|---|
| **1-guruh** | $\int P(x) e^{kx} dx, \; \int P(x)\sin(kx) dx, \; \int P(x)\cos(kx) dx$|$u = P(x)$(ko'phad) |$dv = \text{qolgan qism}$ |
| **2-guruh** | $\int P(x) \ln x \, dx, \; \int P(x)\operatorname{arctg} x \, dx, \; \int P(x)\arcsin x \, dx$|$u = \ln x, \operatorname{arctg} x$|$dv = P(x) dx$ |
| **3-guruh** | $\int e^{ax} \cos(bx) dx, \; \int e^{ax} \sin(bx) dx$ | Siklik integrallar | 2 marta bo'laklanadi |

---

## 3. Jadval usuli (Tabular method / DI usuli)

Agar ko'phadning darajasi 2 yoki undan katta bo'lsa (masalan $\int x^3 e^{2x} \, dx$), formulani 3 marta ketma-ket qo'llash juda ko'p vaqt oladi va ishoralarda adashish ehtimoli ortadi. 

Buning o'rniga **D (Differensiallash)** va **I (Integrallash)** ustunlaridan iborat tezkor jadval usuli qo'llaniladi:
1. $D$ ustuniga $u$(ko'phad) yoziladi va u $0$ bo'lguncha hosila olinadi.
2. $I$ ustuniga $dv$ yoziladi va shuncha marta integrallanadi.
3. Ishoralar navbatma-navbat $+ , -, +, -$ qilib qo'yiladi va diagonal bo'yicha ko'paytirib chiqiladi!

---

## 4. Siklik (aylanma) integrallar

Ayrim integrallarda (masalan, $\int e^x \cos x \, dx$) bo'laklab integrallash 2 marta ketma-ket qo'llanilganda, dastlabki berilgan integral yana qaytib keladi!
Bunday holda:
1. Dastlabki integralni $I$ deb belgilaymiz: $I = \int e^x \cos x \, dx$.
2. Ikki marta bo'laklab integrallashdan so'ng: $I = f(x) - I$ ko'rinishidagi algebraik tenglama hosil bo'ladi.
3. $I$ ni chap tomonga o'tkazamiz: $2I = f(x) \implies I = \frac{f(x)}{2} + C$.

---

## 5. Amaliy misollar va batafsil yechimlar

### 1-misol: 1-guruh (Ko'phad va trigonometriya)
Hisoblang:
$$
\int (3x - 2) \sin x \, dx
$$

**Yechilishi:**
LIATE bo'yicha algebraik ko'phad $u$ bo'ladi:
- $u = 3x - 2 \implies du = (3x - 2)' \, dx = 3 \, dx$
- $dv = \sin x \, dx \implies v = \int \sin x \, dx = -\cos x$

Formulaga qo'yamiz ($\int u \, dv = u \cdot v - \int v \, du$):
$$
\int (3x - 2)\sin x \, dx = (3x - 2)(-\cos x) - \int (-\cos x) \cdot (3 \, dx)
$$
Minus va minus musbat bo'ladi:
$$
= -(3x - 2)\cos x + 3 \int \cos x \, dx = -(3x - 2)\cos x + 3\sin x + C
$$

**Javob:** $-(3x - 2)\cos x + 3\sin x + C$

---

### 2-misol: 2-guruh (Logarifm qatnashgan integral)
Hisoblang:
$$
\int x^2 \ln x \, dx
$$

**Yechilishi:**
LIATE bo'yicha logarifm 1-o'rinda turadi, demak $u = \ln x$:
- $u = \ln x \implies du = \frac{1}{x} \, dx$
- $dv = x^2 \, dx \implies v = \int x^2 \, dx = \frac{x^3}{3}$

Formulaga qo'yamiz:
$$
\int x^2 \ln x \, dx = \ln x \cdot \frac{x^3}{3} - \int \frac{x^3}{3} \cdot \left(\frac{1}{x} \, dx\right)
$$
Integral ichida $\frac{x^3}{x} = x^2$ qisqaradi:
$$
= \frac{x^3}{3}\ln x - \frac{1}{3} \int x^2 \, dx = \frac{x^3}{3}\ln x - \frac{1}{3} \cdot \frac{x^3}{3} + C = \frac{x^3}{3}\ln x - \frac{x^3}{9} + C
$$

**Javob:** $\frac{x^3}{3}\left(\ln x - \frac{1}{3}\right) + C$

---

### 3-misol: Teskari trigonometrik funksiya
Hisoblang:
$$
\int \operatorname{arctg} x \, dx
$$

**Yechilishi:**
Integral ostida faqat bitta funksiya bo'lsa, uni $\operatorname{arctg} x \cdot 1 \, dx$ deb qaraymiz:
- $u = \operatorname{arctg} x \implies du = \frac{1}{1 + x^2} \, dx$
- $dv = dx \implies v = x$

Formulaga qo'yamiz:
$$
\int \operatorname{arctg} x \, dx = x \cdot \operatorname{arctg} x - \int \frac{x}{1 + x^2} \, dx
$$
Qolgan integralda $x \, dx = \frac{1}{2} d(1 + x^2)$:
$$
\int \frac{x}{1 + x^2} \, dx = \frac{1}{2} \int \frac{d(1 + x^2)}{1 + x^2} = \frac{1}{2}\ln(1 + x^2)
$$
Natija:
$$
= x \operatorname{arctg} x - \frac{1}{2}\ln(1 + x^2) + C
$$

**Javob:** $x \operatorname{arctg} x - \frac{1}{2}\ln(1 + x^2) + C$

---

### 4-misol: DI Jadval usuli (Tabular method)
Hisoblang:
$$
\int (x^2 + 2x) e^{-x} \, dx
$$

**Yechilishi:**
$D$ ustunida differensiallaymiz, $I$ ustunida integrallaymiz:

| Ishora | Differensiallash ($D$) | Integrallash ($I$) |
|---|---|---|
| $+$|$x^2 + 2x$|$e^{-x}$ |
| $-$|$2x + 2$|$-e^{-x}$ |
| $+$|$2$|$e^{-x}$ |
| $-$|$0$(to'xtaymiz) |$-e^{-x}$ |

Diagonallar bo'yicha ko'paytirib, yig'indisini olamiz:
1. $+(x^2 + 2x)(-e^{-x}) = -(x^2 + 2x)e^{-x}$
2. $-(2x + 2)(e^{-x}) = -(2x + 2)e^{-x}$
3. $+(2)(-e^{-x}) = -2e^{-x}$

Umumiy qavsdan $-e^{-x}$ ni chiqaramiz:
$$
= -e^{-x} [(x^2 + 2x) + (2x + 2) + 2] + C = -e^{-x}(x^2 + 4x + 4) + C = -(x + 2)^2 e^{-x} + C
$$

**Javob:** $-(x + 2)^2 e^{-x} + C$

---

### 5-misol: Siklik (aylanma) integral
Hisoblang:
$$
I = \int e^x \cos x \, dx
$$

**Yechilishi:**
1-marta bo'laklaymiz:
- $u = e^x \implies du = e^x \, dx$
- $dv = \cos x \, dx \implies v = \sin x$
$$
I = e^x \sin x - \int e^x \sin x \, dx
$$
Yangi hosil bo'lgan $\int e^x \sin x \, dx$ ni 2-marta bo'laklaymiz:
- $u = e^x \implies du = e^x \, dx$
- $dv = \sin x \, dx \implies v = -\cos x$
$$
\int e^x \sin x \, dx = -e^x \cos x - \int (-\cos x) e^x \, dx = -e^x \cos x + \int e^x \cos x \, dx
$$
Endi buni dastlabki tenglikka qo'yamiz:
$$
I = e^x \sin x - \left( -e^x \cos x + I \right) = e^x \sin x + e^x \cos x - I
$$
Ko'rib turganingizdek, o'ng tomonda yana $-I$ hosil bo'ldi! Uni chap tomonga o'tkazamiz:
$$
I + I = e^x (\sin x + \cos x) \implies 2I = e^x (\sin x + \cos x)
$$
Ikkala tomonni $2$ ga bo'lamiz:
$$
I = \frac{e^x (\sin x + \cos x)}{2} + C
$$

**Javob:** $\frac{e^x (\sin x + \cos x)}{2} + C$

---

## ⚠️ Talabalar ko'p yo'l qo'yadigan 3 ta jiddiy xato

1. **2-guruhda (logarifm yoki arktangensda) $u$ va $dv$ ni teskari tanlash:**
   > $\int x \ln x \, dx$ misolida $u = x$ va $dv = \ln x \, dx$ deb tanlasangiz, siz $v = \int \ln x \, dx$ ni hisoblashingiz kerak bo'ladi va vaziyat yanada chigallashadi. Doimo $\ln x$ yoki $\operatorname{arctg} x$ ni $u$ deb tanlang!

2. **Formuladagi o'rta minus ishorasini qavssiz ochish:**
   > $\int u \, dv = uv - \int v \, du$. Agar $v$ manfiy bo'lsa (masalan $v = -\cos x$), minus bilan minus **musbat ($+$)** ga aylanadi. Talabalar ko'pincha bu ishorani unutib, manfiy qoldirishadi.

3. **2 marta bo'laklashda $u$ tanlovini almashtirib qo'yish:**
   > Siklik integralda 1-qadamda $u = e^x$ deb olgan bo'lsangiz, 2-qadamda ham albatta $u = e^x$ deb oling! Agar 2-qadamda trigonometriyani $u$ qilib qo'ysangiz, amallar bir-birini bekor qilib, oxirida ma'nosiz $0 = 0$ ayniyati chiqib qoladi.

---

## 💡 Ustozdan maslahat

Agar integral ostida darajasi 2 yoki undan katta bo'lgan ko'phad va eksponenta/trigonometriya ko'paytmasi kelsa, vaqtni yo'qotmay **DI jadval usulidan** foydalaning. Bu imtihonda sizga kamida 5-10 daqiqa vaqt tejaydi va hisoblash xatolarining oldini oladi.

---

## ✍️ Mustaqil yechish uchun mashqlar

1. $\int x e^{3x} \, dx$ ni hisoblang.
2. $\int x \sin x \, dx$ integralini toping.
3. $\int \ln(2x) \, dx$ ni bo'laklab integrallang.
4. $\int x^2 \cos x \, dx$ ni DI jadval usuli yordamida yeching.

<details style="margin-top: 1rem; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); cursor: pointer;">
<summary style="font-weight: 700; color: var(--primary);">To'liq yechimlar va javoblar</summary>

**1-masala:** $u = x, dv = e^{3x} dx \implies v = \frac{1}{3}e^{3x}$. Natija: $\frac{x}{3}e^{3x} - \frac{1}{9}e^{3x} + C = \frac{e^{3x}}{3}\left(x - \frac{1}{3}\right) + C$.

    

**2-masala:** $u = x, dv = \sin x dx \implies v = -\cos x$. Natija: $-x\cos x + \int \cos x dx = -x\cos x + \sin x + C$.

    

**3-masala:** $u = \ln(2x), dv = dx \implies v = x, du = \frac{dx}{x}$. Natija: $x\ln(2x) - x + C = x(\ln(2x) - 1) + C$.

    

**4-masala:** DI jadvali: $(x^2)(\sin x) - (2x)(-\cos x) + (2)(-\sin x) = (x^2 - 2)\sin x + 2x\cos x + C$.

</details>
