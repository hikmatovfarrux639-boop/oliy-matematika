---
title: "Cheksiz kichik va cheksiz katta miqdorlar, ekvivalentlik qoidasi"
module: "limitlar"
order: 5
description: "Cheksiz kichik miqdorlar tartibi (o va O belgilari), ekvivalentlik jadvali, ayirmadagi halokatli xato va ko'p usulli yechimlar."
---

## Kirish: Cheksiz kichik miqdor nima?

Matematik analizda **cheksiz kichik miqdor** — bu shunchaki juda kichik son (masalan, $0.000001$) emas, balki berilgan jarayonda **limiti nolga intiluvchi o'zgaruvchi funksiya**dir.

> **Ta'rif:** Agar $x \to a$ da (yoki $x \to \infty$ da) $\alpha(x)$ funksiyaning limiti nolga teng bo'lsa:
>
> 
$$
> \lim_{x \to a} \alpha(x) = 0
> 
$$
>
> u holda $\alpha(x)$ funksiya $x \to a$ da **cheksiz kichik miqdor (ChKM)** deyiladi.

Xuddi shuningdek, agar $\lim_{x \to a} f(x) = \infty$ bo'lsa, u **cheksiz katta miqdor (ChKM)** deyiladi.
Ularning o'zaro bog'liqligi:
- Agar $\alpha(x)$ cheksiz kichik bo'lsa ($\alpha \neq 0$), $\frac{1}{\alpha(x)}$ cheksiz katta bo'ladi.
- Agar $f(x)$ cheksiz katta bo'lsa, $\frac{1}{f(x)}$ cheksiz kichik bo'ladi.

---

## 1. Cheksiz kichik miqdorlarni taqqoslash va "O" simvollari

Faraz qilaylik, $x \to a$ da $\alpha(x)$ va $\beta(x)$ lar cheksiz kichik bo'lsin. Ularning qaysi biri nolga tezroq intilishini bilish uchun ularning nisbati $\lim_{x \to a} \frac{\alpha(x)}{\beta(x)}$ tahlil qilinadi:

1. **Bir xil tartibli cheksiz kichiklar:**
   Agar $\lim_{x \to a} \frac{\alpha}{\beta} = c \neq 0$ bo'lsa, ular bir xil tartibli deyiladi.
2. **Yuqori tartibli cheksiz kichik ($o$-kichik):**
   Agar $\lim_{x \to a} \frac{\alpha}{\beta} = 0$ bo'lsa, $\alpha(x)$ miqdor $\beta(x)$ ga nisbatan yuqori tartibli cheksiz kichik deyiladi va $\alpha = o(\beta)$ kabi belgilanadi (ya'ni $\alpha$ nolga ancha tezroq intiladi).
3. **Ekvivalent cheksiz kichiklar ($\alpha \sim \beta$):**
   Agar ularning nisbati aynan **$1$** ga teng bo'lsa:
   
$$
   \lim_{x \to a} \frac{\alpha(x)}{\beta(x)} = 1 \iff \alpha(x) \sim \beta(x)
   
$$

---

## 2. Asosiy Ekvivalentliklar Jadvali ($x \to 0$ da)

Bu jadval orqali har qanday ko'rinishdagi murakkab trigonometrik, logarifmik va ko'rsatkichli limitlarni sanoqli soniyalarda yechish mumkin:

| Boshlang'ich funksiya | Ekvivalent ifodasi ($x \to 0$ da) |
|---|---|
| $\sin(kx)$ | $\sim kx$ |
| $\operatorname{tg}(kx)$ | $\sim kx$ |
| $\arcsin(kx)$ | $\sim kx$ |
| $\operatorname{arctg}(kx)$ | $\sim kx$ |
| $1 - \cos(kx)$ | $\sim \frac{(kx)^2}{2}$ |
| $e^{kx} - 1$ | $\sim kx$ |
| $a^x - 1$ | $\sim x \ln a$ |
| $\ln(1 + kx)$ | $\sim kx$ |
| $(1 + x)^m - 1$ | $\sim m x$ |
| $\sqrt{1 + x} - 1$ | $\sim \frac{x}{2}$ |

> **Oltin qoida (Ekvivalentlarni almashtirish teoremasi):** 
> Limit ostidagi **ko'paytuvchi yoki bo'luvchi** ifodalarni ularga ekvivalent bo'lgan sodda hadlarga almashtirish mumkin!

---

## 3. Amaliy masalalar va ko'p usulli yechimlar

### 1-masala: Ko'paytuvchili ifodani ekvivalentlik bilan hisoblash

Limitni hisoblang:
$$
L = \lim_{x \to 0} \frac{\sin(4x) \cdot \ln(1 + 3x)}{x \cdot \operatorname{tg}(2x)}
$$

#### 1-usul: Ekvivalentlik jadvali orqali tezkor almashtirish
$x \to 0$ da:
- $\sin 4x \sim 4x$
- $\ln(1 + 3x) \sim 3x$
- $\operatorname{tg} 2x \sim 2x$

Ifodaga qo'yamiz:
$$
L = \lim_{x \to 0} \frac{(4x) \cdot (3x)}{x \cdot (2x)} = \lim_{x \to 0} \frac{12x^2}{2x^2} = \frac{12}{2} = 6
$$

#### 2-usul: Ajoyib limitlar orqali sun'iy bo'lish
$$
L = \lim_{x \to 0} \left[ 4 \cdot \frac{\sin 4x}{4x} \cdot 3 \cdot \frac{\ln(1 + 3x)}{3x} \cdot \frac{1}{2 \cdot \frac{\operatorname{tg} 2x}{2x}} \right] = 4(1) \cdot 3(1) \cdot \frac{1}{2(1)} = 6
$$

---

### 2-masala: Mashhur imtihon tuzog'i va uni 3 xil usulda yechish

Limitni hisoblang:
$$
M = \lim_{x \to 0} \frac{\operatorname{tg} x - \sin x}{x^3}
$$

> [!CAUTION]
> **Halokatli xato:** Agar talaba ko'r-ko'rona ayirmada $\operatorname{tg} x \sim x$ va $\sin x \sim x$ deb almashtirsa:
> $\frac{x - x}{x^3} = \frac{0}{x^3} = 0$ chiqadi va bu **MUTLAQO NOTO'G'RI!**
> Ekvivalentliklarni **ayirmada** almashtirish qat'iyan man etiladi!

#### 1-usul: Trigonometrik shakl almashtirish (To'g'ri analitik yo'l)
Suratdan umumiy ko'paytuvchini chiqaramiz:
$$
\operatorname{tg} x - \sin x = \frac{\sin x}{\cos x} - \sin x = \sin x \left(\frac{1 - \cos x}{\cos x}\right) = \operatorname{tg} x \cdot (1 - \cos x)
$$
Endi ifoda **ko'paytma** shakliga keldi! Endi ekvivalentliklarni bemalol qo'llash mumkin:
- $\operatorname{tg} x \sim x$
- $1 - \cos x \sim \frac{x^2}{2}$

Limitga qo'yamiz:
$$
M = \lim_{x \to 0} \frac{x \cdot \frac{x^2}{2}}{x^3} = \lim_{x \to 0} \frac{\frac{1}{2}x^3}{x^3} = \frac{1}{2}
$$

#### 2-usul: Teylor (Makloren) qatori yordamida yechish
Funksiyalarning $x = 0$ atrofidagi yoyilmasi:
- $\operatorname{tg} x = x + \frac{x^3}{3} + o(x^3)$
- $\sin x = x - \frac{x^3}{6} + o(x^3)$

Ayiramiz:
$$
\operatorname{tg} x - \sin x = \left(x + \frac{x^3}{3}\right) - \left(x - \frac{x^3}{6}\right) = \left(\frac{1}{3} + \frac{1}{6}\right)x^3 = \frac{3}{6}x^3 = \frac{1}{2}x^3
$$
Limit:
$$
M = \lim_{x \to 0} \frac{\frac{1}{2}x^3}{x^3} = \frac{1}{2}
$$

#### 3-usul: Lopital qoidasi orqali tekshirish
$$
M = \lim_{x \to 0} \frac{\frac{1}{\cos^2 x} - \cos x}{3x^2} = \lim_{x \to 0} \frac{1 - \cos^3 x}{3x^2 \cos^2 x}
$$
$1 - \cos^3 x = (1 - \cos x)(1 + \cos x + \cos^2 x) \sim \frac{x^2}{2} \cdot 3$.
$$
M = \lim_{x \to 0} \frac{\frac{x^2}{2} \cdot 3}{3x^2 \cdot 1} = \frac{1}{2}
$$
Uchala to'g'ri usul ham bir xil natijani ($\frac{1}{2}$) berdi!

---

## 4. Imtihondagi asosiy tuzoqlar

> [!WARNING] Imtihondagi tuzoqlar
> 1. **Ayirma va yig'indida ekvivalent almashtirish qilish:**
>    Ekvivalentlik qoidasi faqat va faqat ko'paytma yoki bo'linma bo'lganda ishlaydi. Agar $f(x) - g(x)$ ayirma bo'lsa, avval uni ko'paytuvchilarga ajrating yoki Teylor qatoridan foydalaning!
> 2. **Argument nolga intilmaganda jadvalni ishlatish:**
>    Masalan, $x \to \pi$ da $\sin x \sim x$ deb yozish mumkin emas, chunki $x \to \pi \neq 0$. Faqat $t = x - \pi \to 0$ deb yangi o'zgaruvchi kiritilgandagina ekvivalentlik ishlaydi.
> 3. **Yuqori tartibli hadlarni e'tiborsiz qoldirish:**
>    Surat va maxrajdagi eng kichik darajali bosh hadlar o'zaro qisqarib ketganda, keyingi tartibli hadlar javobni belgilaydi.

---

## 5. Mustaqil yechish uchun amaliy mashqlar

### 1-mashq
Ekvivalentliklar jadvalidan foydalanib limitni hisoblang:
$$
\lim_{x \to 0} \frac{\ln(1 + 5x) \cdot (e^{2x} - 1)}{\arcsin(3x) \cdot \operatorname{arctg}(4x)}
$$

<details>
<summary>👉 Yechimni tekshirish</summary>

$x \to 0$ da:
- $\ln(1 + 5x) \sim 5x$
- $e^{2x} - 1 \sim 2x$
- $\arcsin(3x) \sim 3x$
- $\operatorname{arctg}(4x) \sim 4x$

Limitga qo'yamiz:
$$
\lim_{x \to 0} \frac{5x \cdot 2x}{3x \cdot 4x} = \frac{10x^2}{12x^2} = \frac{5}{6}
$$
Javob: $\frac{5}{6}$.
</details>

### 2-mashq
Ushbu limitni hisoblang:
$$
\lim_{x \to 0} \frac{\sqrt{1 + 4x} - 1}{\sin 3x}
$$

<details>
<summary>👉 Yechimni tekshirish</summary>

- $\sqrt{1 + 4x} - 1 \sim \frac{4x}{2} = 2x$
- $\sin 3x \sim 3x$

Limit:
$$
\lim_{x \to 0} \frac{2x}{3x} = \frac{2}{3}
$$
Javob: $\frac{2}{3}$.
</details>
