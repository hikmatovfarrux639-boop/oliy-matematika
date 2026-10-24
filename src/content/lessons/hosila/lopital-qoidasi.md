---
title: "Lopital qoidasi: Aniqmasliklarni hosila orqali ochish"
module: "hosila"
order: 5
description: "Giyom Lopital va Iogann Bernulli teoremasi. [0/0] va [∞/∞] noaniqliklarni 3 xil usulda ochish, Teylor qatori bilan qiyoslash va imtihon tuzoqlari."
---

## Kirish: Tarixdagi eng mashhur qoida

Matematik analizda aniqmasliklarni ochishning ko'plab algebraik usullari mavjud: ko'paytuvchilarga ajratish, qo'shmaga ko'paytirish, trigonometrik ayniyatlar. Biroq agar ifodada bir vaqtning o'zida ham trigonometriya, ham ko'rsatkichli funksiya, ham ko'phad qatnashsa (masalan $\frac{e^x - \cos x - x}{x^2}$), algebraik almashtirishlar juda qiyinlashib ketishi mumkin.

XVIII asrda fransuz matematigi Giyom Lopital (shveytsariyalik buyuk matematik Iogann Bernullining tadqiqotlariga tayangan holda) aniqmasliklarni **hosila yordamida bir zumda hisoblash** usulini e'lon qildi. Bugungi kunda universitet oliy matematika kursida Lopital qoidasi talabalarning eng qudratli quroli hisoblanadi.

---

## 1. Lopital teoremasining qat'iy bayoni

> **Koshi-Lopital teoremasi:** Faraz qilaylik, $f(x)$ va $g(x)$ funksiyalar $x = a$ nuqtaning biror atrofida differensiallanuvchi va $g'(x) \neq 0$ bo'lsin.
> Agar $\lim_{x \to a} f(x) = 0$ va $\lim_{x \to a} g(x) = 0$ (ya'ni $\left[\frac{0}{0}\right]$) yoki $\lim_{x \to a} f(x) = \infty$ va $\lim_{x \to a} g(x) = \infty$ (ya'ni $\left[\frac{\infty}{\infty}\right]$) bo'lsa hamda ularning hosilalari nisbatining $\lim_{x \to a} \frac{f'(x)}{g'(x)}$ limiti mavjud (chekli yoki cheksiz) bo'lsa, u holda funksiyalar nisbatining limiti ham mavjud bo'lib, quyidagi tenglik o'rinli bo'ladi:
>
> 
$$
> \lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)}
> 
$$

> [!CAUTION]
> **Eng ko'p uchraydigan xato:** Bu yerda bo'linmaning hosilasi $\left(\frac{u}{v}\right)' = \frac{u'v - uv'}{v^2}$ formulasi qo'llanilmaydi! Surat alohida differensiallanadi ($f'(x)$), maxraj esa alohida differensiallanadi ($g'(x)$)!

---

## 2. Qoidani takroran qo'llash

Agar bir marta differensiallagandan keyin ham yana $\left[\frac{0}{0}\right]$ yoki $\left[\frac{\infty}{\infty}\right]$ aniqmaslik saqlanib qolsa, qoidani ikkinchi, uchinchi va kerak bo'lsa $n$ bor ketma-ket qo'llash mumkin:

$$
\lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)} = \lim_{x \to a} \frac{f''(x)}{g''(x)} = \dots = \lim_{x \to a} \frac{f^{(n)}(x)}{g^{(n)}(x)}
$$

---

## 3. Boshqa noaniqliklarni $\left[\frac{0}{0}\right]$ va $\left[\frac{\infty}{\infty}\right]$ ga keltirish

| Dastlabki aniqmaslik | Shakl almashtirish usuli | Keltiriladigan ko'rinish |
|---|---|---|
| $[0 \cdot \infty]$ | $f \cdot g = \frac{f}{1/g}$ yoki $f \cdot g = \frac{g}{1/f}$ | $\left[\frac{0}{0}\right]$ yoki $\left[\frac{\infty}{\infty}\right]$ |
| $[\infty - \infty]$ | Umumiy maxrajga keltirish yoki $\frac{1}{g} - \frac{1}{f}$ | $\left[\frac{0}{0}\right]$ |
| $[1^\infty], [0^0], [\infty^0]$ | Logarifmlash: $y = f^g \implies \ln y = g \cdot \ln f$ | $[0 \cdot \infty] \implies \left[\frac{0}{0}\right]$ |

---

## 4. Amaliy masalalar va ko'p usulli yechimlar

### 1-masala: Aniqmaslikni 3 xil usulda ochish

Limitni hisoblang:
$$
L = \lim_{x \to 0} \frac{e^x - x - 1}{x^2}
$$

#### 1-usul: Lopital qoidasi bo'yicha ketma-ket differensiallash
$x = 0$ da $\frac{e^0 - 0 - 1}{0^2} = \left[\frac{0}{0}\right]$.
1. Surat va maxrajdan alohida birinchi tartibli hosila olamiz:
   
$$
   L = \lim_{x \to 0} \frac{(e^x - x - 1)'}{(x^2)'} = \lim_{x \to 0} \frac{e^x - 1}{2x}
   
$$
2. Tekshiramiz: $x = 0$ da $\frac{e^0 - 1}{2(0)} = \left[\frac{0}{0}\right]$. Yana noaniqlik!
3. Ikkinchi marta Lopital qoidasini qo'llaymiz:
   
$$
   L = \lim_{x \to 0} \frac{(e^x - 1)'}{(2x)'} = \lim_{x \to 0} \frac{e^x}{2} = \frac{e^0}{2} = \frac{1}{2}
   
$$

#### 2-usul: Teylor (Makloren) qatori orqali bir zumda yechish
$e^x$ funksiyasining $x = 0$ atrofidagi yoyilmasi: $e^x = 1 + x + \frac{x^2}{2!} + o(x^2)$.
Limitga qo'yamiz:
$$
L = \lim_{x \to 0} \frac{\left(1 + x + \frac{x^2}{2} + o(x^2)\right) - x - 1}{x^2} = \lim_{x \to 0} \frac{\frac{x^2}{2} + o(x^2)}{x^2} = \frac{1}{2}
$$
Ko'rib turganingizdek, Makloren yoyilmasi orqali limit bir qatorda yechildi!

#### 3-usul: Aniq integral ta'rifi orqali tekshirish
Ma'lumki, $e^x - 1 - x = \int_0^x (e^t - 1) dt$. O'rta qiymat haqidagi teoremaga ko'ra bu ifoda $\frac{x^2}{2}$ ga ekvivalentdir. Javob: $\frac{1}{2}$.

---

### 2-masala: $[0 \cdot \infty]$ va logarifmik limit

Limitni hisoblang:
$$
\lim_{x \to 0^+} x^2 \ln x
$$

#### Yechish:
$x \to 0^+$ da $x^2 \to 0$ va $\ln x \to -\infty$, ya'ni $[0 \cdot \infty]$ noaniqlik.
1. Kasr ko'rinishiga o'tkazamiz:
   
$$
   \lim_{x \to 0^+} \frac{\ln x}{\frac{1}{x^2}} = \left[\frac{-\infty}{+\infty}\right]
   
$$
2. Lopital qoidasini qo'llaymiz:
   
$$
   \lim_{x \to 0^+} \frac{(\ln x)'}{\left(x^{-2}\right)'} = \lim_{x \to 0^+} \frac{\frac{1}{x}}{-2x^{-3}} = \lim_{x \to 0^+} \frac{\frac{1}{x}}{-\frac{2}{x^3}} = \lim_{x \to 0^+} \left(-\frac{x^3}{2x}\right) = \lim_{x \to 0^+} \left(-\frac{x^2}{2}\right) = 0
   
$$
**Javob:** $0$.

---

## 5. Imtihondagi asosiy tuzoqlar

> [!WARNING] Imtihondagi tuzoqlar
> 1. **Lopital qoidasi ojiz qoladigan holatlar (Cheksiz aylanma limitlar):**
>    Ushbu limitni qaraylik: $\lim_{x \to \infty} \frac{x + \sin x}{x}$.
>    Agar bunga ko'r-ko'rona Lopital qo'llansa: $\lim_{x \to \infty} \frac{1 + \cos x}{1}$ hosil bo'ladi. Biroq $x \to \infty$ da $\cos x$ ning limiti **mavjud emas**!
>    Lopital qoidasi hosilalar limiti mavjud bo'lgandagina ishlaydi. To'g'ri usul — hadma-had bo'lish:
>    
$$
>    \lim_{x \to \infty} \left(1 + \frac{\sin x}{x}\right) = 1 + 0 = 1
>    
$$
> 2. **Noaniqlik yo'q joyda Lopital qo'llash:**
>    Masalan: $\lim_{x \to 0} \frac{x + 2}{x + 3}$. Bu yerda $\frac{0+2}{0+3} = \frac{2}{3}$. Agar bilmasdan Lopital qo'llansa: $\frac{(x+2)'}{(x+3)'} = \frac{1}{1} = 1$ chiqadi va bu qo'pol xatodir!
> 3. **Kasr darajasini burchakli murakkablashtirish:**
>    Agar ildizli ifodalar bo'lsa (masalan $\frac{x}{\sqrt{x^2+1}}$), har safar hosila olganda ifoda murakkablashib ketaveradi. Bunday hollarda algebraik usul (katta darajani qavsdan chiqarish) Lopitaldan 10 barobar samaraliroqdir.

---

## 6. Mustaqil yechish uchun amaliy mashqlar

### 1-mashq
Lopital qoidasi yordamida limitni hisoblang:
$$
\lim_{x \to 0} \frac{\sin 5x - 5x}{x^3}
$$

<details>
<summary>👉 Yechimni tekshirish</summary>

$x = 0$ da $\left[\frac{0}{0}\right]$.
1. 1-hosila: $\lim_{x \to 0} \frac{5\cos 5x - 5}{3x^2} = \left[\frac{0}{0}\right]$.
2. 2-hosila: $\lim_{x \to 0} \frac{-25\sin 5x}{6x} = \left[\frac{0}{0}\right]$.
3. 3-hosila: $\lim_{x \to 0} \frac{-125\cos 5x}{6} = -\frac{125 \cdot 1}{6} = -\frac{125}{6}$.
</details>

### 2-mashq
Limitni hisoblang:
$$
\lim_{x \to 1} \left(\frac{1}{\ln x} - \frac{1}{x - 1}\right)
$$

<details>
<summary>👉 Yechimni tekshirish</summary>

Bu $[\infty - \infty]$ noaniqlik. Umumiy maxrajga keltiramiz:
$$
\lim_{x \to 1} \frac{x - 1 - \ln x}{(x - 1)\ln x} = \left[\frac{0}{0}\right]
$$
Lopital qoidasi:
$$
\lim_{x \to 1} \frac{1 - \frac{1}{x}}{\ln x + \frac{x-1}{x}} = \lim_{x \to 1} \frac{\frac{x-1}{x}}{\frac{x\ln x + x - 1}{x}} = \lim_{x \to 1} \frac{x - 1}{x\ln x + x - 1} = \left[\frac{0}{0}\right]
$$
Yana bir bor Lopital qo'llaymiz:
$$
\lim_{x \to 1} \frac{1}{\ln x + x \cdot \frac{1}{x} + 1} = \lim_{x \to 1} \frac{1}{\ln x + 2} = \frac{1}{0 + 2} = \frac{1}{2}
$$
</details>
