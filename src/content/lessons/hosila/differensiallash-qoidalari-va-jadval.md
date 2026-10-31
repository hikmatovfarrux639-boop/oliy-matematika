---
title: "Differensiallash qoidalari va asosiy hosilalar jadvali"
module: "hosila"
order: 2
description: "Yig'indi, ayirma, ko'paytma, kasr hosilasi, to'liq hosilalar jadvali, chiziqli-kasr tezkor formulasi va logarifmik differensiallash."
---

## Kirish: Qoidalarning ahamiyati

Oldingi darsda biz hosilaning limit orqali ta'riflanishini va $f'(x) = \lim_{\Delta x \to 0} \frac{\Delta y}{\Delta x}$ formulasi bilan tanishdik. Biroq har safar hosila topish uchun uzun limitlarni hisoblab o'tirish shart emas.

Matematiklar barcha asosiy funksiyalar uchun qat'iy isbotlangan **hosilalar jadvali** va **arifmetik differensiallash qoidalari**ni ishlab chiqqanlar. Ularni bilgan talaba har qanday murakkab formulaning hosilasini mexanik tarzda, xatosiz hisoblay oladi.

---

## 1. Asosiy differensiallash qoidalari

Faraz qilaylik, $u = u(x)$ va $v = v(x)$ differensiallanuvchi funksiyalar, $C$ esa o'zgarmas son bo'lsin.

### 1. O'zgarmas son hosilasi:
O'zgarmas miqdor o'zgarmaydi, demak uning o'zgarish tezligi nolga teng:
$$
(C)' = 0
$$

### 2. O'zgarmas ko'paytuvchini hosila belgisidan chiqarish:
$$
(C \cdot u)' = C \cdot u'
$$

### 3. Yig'indi va ayirmaning hosilasi:
$$
(u \pm v)' = u' \pm v'
$$

### 4. Ko'paytmaning hosilasi (Leybnits qoidasi):
$$
(u \cdot v)' = u' \cdot v + u \cdot v'
$$
> ⚠️ **Muhim ogohlantirish:** $(u \cdot v)' \neq u' \cdot v'$! Yangi boshlovchilar eng ko'p yo'l qo'yadigan xato aynan shudir. Ko'paytmaning hosilasida har bir funksiya navbat bilan differensiallanadi.

**Uchta funksiya ko'paytmasi uchun:**
$$
(u \cdot v \cdot w)' = u'vw + uv'w + uvw'
$$

### 5. Bo'linma (kasr)ning hosilasi:
$$
\left( \frac{u}{v} \right)' = \frac{u' v - u v'}{v^2} \quad (v(x) \neq 0)
$$

### Maxsus tezkor xususiy hollar (Vaqtni tejovchi layfhaklar):
1. Suratda son turganda:
   
$$
   \left( \frac{C}{v} \right)' = -\frac{C \cdot v'}{v^2}
   
$$
2. **Chiziqli-kasr funksiya hosilasi (2-tartibli determinant orqali):**
   
$$
   \left( \frac{ax + b}{cx + d} \right)' = \frac{\begin{vmatrix} a & b \\ c & d \end{vmatrix}}{(cx + d)^2} = \frac{ad - bc}{(cx + d)^2}
   
$$
   *(Bu formulani bilsangiz, kasr hosilasini 3 soniyada topasiz!)*

---

## 2. Elementar funksiyalar hosilalarining to'liq jadvali

| Funksiya | Hosilasi | Xususiy va eng mashhur hollar |
|---|---|---|
| $C$(son) |$0$|$(5)' = 0, \; (\pi)' = 0, \; (e)' = 0$ |
| $x^\alpha$|$\alpha x^{\alpha - 1}$|$(x)' = 1, \; (x^2)' = 2x, \; (x^3)' = 3x^2$ |
| $\sqrt{x}$|$\frac{1}{2\sqrt{x}}$|$x^{1/2}$ dan kelib chiqadi |
| $\frac{1}{x}$|$-\frac{1}{x^2}$|$x^{-1}$ dan kelib chiqadi |
| $e^x$|$e^x$ | O'ziga teng yagona funksiya! |
| $a^x$|$a^x \ln a$|$(2^x)' = 2^x \ln 2$ |
| $\ln x$|$\frac{1}{x}$| Asos $e$ bo'lganda |
| $\log_a x$|$\frac{1}{x \ln a}$|$(\log_{10} x)' = \frac{1}{x \ln 10}$ |
| $\sin x$|$\cos x$ | |
| $\cos x$|$-\sin x$ | Manfiy ishoraga diqqat qiling! |
| $\operatorname{tg} x$|$\frac{1}{\cos^2 x} = 1 + \operatorname{tg}^2 x$ | |
| $\operatorname{ctg} x$|$-\frac{1}{\sin^2 x} = -(1 + \operatorname{ctg}^2 x)$ | Manfiy ishora |
| $\arcsin x$|$\frac{1}{\sqrt{1 - x^2}}$|$|x| < 1$ |
| $\arccos x$|$-\frac{1}{\sqrt{1 - x^2}}$ | Manfiy ishora |
| $\operatorname{arctg} x$|$\frac{1}{1 + x^2}$ | |
| $\operatorname{arcctg} x$|$-\frac{1}{1 + x^2}$ | |

---

## 3. Logarifmik differensiallash ($y = [u(x)]^{v(x)}$)

Agar asos ham, daraja ham o'zgaruvchi $x$ ga bog'liq bo'lsa (masalan, $y = x^x$ yoki $y = (\sin x)^x$), na darajali, na ko'rsatkichli formulani to'g'ridan-to'g'ri qo'llab bo'lmaydi!

### Usul algoritmi:
1. Tenglikning ikkala tomonini natural logarifmlang:
   
$$
   \ln y = \ln[u(x)^{v(x)}] = v(x) \cdot \ln[u(x)]
   
$$
2. Ikkala tomondan $x$ bo'yicha hosila oling (chap tomonda murakkab funksiya sifatida $\frac{y'}{y}$ hosil bo'ladi):
   
$$
   \frac{y'}{y} = (v(x) \cdot \ln[u(x)])'
   
$$
3. $y'$ ni topish uchun ikkala tomonni dastlabki $y$ ga ko'paytiring:
   
$$
   y' = y \cdot [v' \ln u + v \frac{u'}{u}]
   
$$

---

## 4. Amaliy misollar va batafsil yechimlar

### 1-misol: Ko'phad va ildizlar aralashmasi
Hosilani toping:
$$
f(x) = 5x^4 - \frac{3}{x^2} + 4\sqrt{x} - 7
$$

**Yechilishi:**
Avval ifodani darajalar shaklida yozib olamiz:
$$
f(x) = 5x^4 - 3x^{-2} + 4x^{1/2} - 7
$$
Qoidalar bo'yicha hadma-had hosila olamiz:
$$
f'(x) = 5 \cdot (4x^3) - 3 \cdot (-2x^{-3}) + 4 \cdot \left(\frac{1}{2}x^{-1/2}\right) - 0
$$
$$
= 20x^3 + 6x^{-3} + 2x^{-1/2} = 20x^3 + \frac{6}{x^3} + \frac{2}{\sqrt{x}}
$$

**Javob:** $20x^3 + \frac{6}{x^3} + \frac{2}{\sqrt{x}}$

---

### 2-misol: Ko'paytmaning hosilasi
Hosilani toping:
$$
f(x) = (x^2 + 3x) \cdot e^x
$$

**Yechilishi:**
$(u \cdot v)' = u'v + uv'$ formulasini qo'llaymiz:
- $u = x^2 + 3x \implies u' = 2x + 3$
- $v = e^x \implies v' = e^x$

$$
f'(x) = (2x + 3) \cdot e^x + (x^2 + 3x) \cdot e^x
$$
Umumiy ko'paytuvchi $e^x$ ni qavsdan tashqariga chiqaramiz:
$$
f'(x) = e^x [2x + 3 + x^2 + 3x] = e^x (x^2 + 5x + 3)
$$

**Javob:** $e^x(x^2 + 5x + 3)$

---

### 3-misol: Kasrning hosilasi va chiziqli-kasr layfhaki
Hosilani toping:
$$
f(x) = \frac{3x - 5}{2x + 1}
$$

**Yechilishi (Standart usul):**
$\left(\frac{u}{v}\right)' = \frac{u'v - uv'}{v^2}$:
$$
f'(x) = \frac{(3x - 5)'(2x + 1) - (3x - 5)(2x + 1)'}{(2x + 1)^2} = \frac{3(2x + 1) - (3x - 5)(2)}{(2x + 1)^2}
$$
Qavslarni ochamiz:
$$
= \frac{6x + 3 - (6x - 10)}{(2x + 1)^2} = \frac{6x + 3 - 6x + 10}{(2x + 1)^2} = \frac{13}{(2x + 1)^2}
$$

**Yechilishi (Determinant layfhaki):**
$$
\frac{ad - bc}{(cx + d)^2} = \frac{3(1) - (-5)(2)}{(2x + 1)^2} = \frac{3 - (-10)}{(2x + 1)^2} = \frac{13}{(2x + 1)^2} \quad \checkmark
$$

**Javob:** $\frac{13}{(2x + 1)^2}$

---

### 4-misol: Trigonometrik kasr
Hosilani toping:
$$
f(x) = \frac{\sin x}{1 + \cos x}
$$

**Yechilishi:**
$$
f'(x) = \frac{(\sin x)'(1 + \cos x) - \sin x (1 + \cos x)'}{(1 + \cos x)^2}
$$
$$
= \frac{\cos x(1 + \cos x) - \sin x(-\sin x)}{(1 + \cos x)^2} = \frac{\cos x + \cos^2 x + \sin^2 x}{(1 + \cos x)^2}
$$
Trigonometrik asosiy ayniyat $\sin^2 x + \cos^2 x = 1$:
$$
= \frac{\cos x + 1}{(1 + \cos x)^2} = \frac{1 + \cos x}{(1 + \cos x)^2} = \frac{1}{1 + \cos x}
$$

**Javob:** $\frac{1}{1 + \cos x}$

---

### 5-misol: Logarifmik differensiallash ($y = x^x$)
$y = x^x$ funksiyaning hosilasini toping ($x > 0$).

**Yechilishi:**
1. Ikkala tomonni natural logarifmlaymiz:
   
$$
   \ln y = \ln(x^x) = x \ln x
   
$$
2. Ikkala tomondan hosila olamiz:
   
$$
   (\ln y)' = (x \ln x)' \implies \frac{y'}{y} = (x)'\ln x + x(\ln x)' = 1 \cdot \ln x + x \cdot \frac{1}{x} = \ln x + 1
   
$$
3. $y'$ ni topish uchun ikkala tomonni $y$ ga ko'paytiramiz:
   
$$
   y' = y \cdot (\ln x + 1)
   
$$
4. $y = x^x$ ni qo'yamiz:
   
$$
   y' = x^x (\ln x + 1)
   
$$

**Javob:** $x^x (\ln x + 1)$

---

## ⚠️ Talabalar ko'p yo'l qo'yadigan 3 ta jiddiy xato

1. **Ko'paytma va bo'linmada shunchaki hosilalarni ko'paytirish/bo'lish:**
   > $(x \sin x)' \neq (x)' \cdot (\sin x)' = 1 \cdot \cos x$ EMAS! To'g'risi: $1 \cdot \sin x + x \cos x$.

2. **Kasr hosilasida suratdagi minus ishorasini unutish yoki tartibni buzish:**
   > Formulada aynan $u'v - uv'$ turadi. Agar siz uni $uv' - u'v$ qilib qo'ysangiz, javob qarama-qarshi ishora bilan chiqadi.

3. **Kosinus, kotangens va arkkosinus hosilasidagi minusni tushirib qoldirish:**
   > Eslab qoling: "Ko-" bilan boshlanuvchi deyarli barcha funksiyalar ($\cos x, \operatorname{ctg} x, \arccos x$) hosilasida oldinga **minus** chiqadi!

---

## 💡 Ustozdan maslahat

Funksiyani differensiallashdan oldin, uni albatta **soddalashtirib oling**:
- Agar qavslarni ochish oson bo'lsa, avval qavsni ochib oling, ko'paytma formulasini qo'llash shart bo'lmaydi (masalan, $f(x) = x(x^2 - 1) = x^3 - x \implies f'(x) = 3x^2 - 1$).
- Agar ildizlar bo'lsa, darhol ularni kasr darajaga o'tkazing: $\sqrt[3]{x^2} = x^{2/3}$.

---

## ✍️ Mustaqil yechish uchun mashqlar

1. $f(x) = 3x^3 - 4x + 8$ ning hosilasini toping.
2. $f(x) = x \cdot \cos x$ ning hosilasini hisoblang.
3. Chiziqli-kasr layfhaki orqali $f(x) = \frac{4x + 1}{x - 3}$ ning hosilasini toping.
4. $f(x) = \frac{e^x}{x}$ funksiyaning hosilasini hisoblang.

<details style="margin-top: 1rem; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); cursor: pointer;">
<summary style="font-weight: 700; color: var(--primary);">To'liq yechimlar va javoblar</summary>

**1-masala:** $f'(x) = 3(3x^2) - 4(1) + 0 = 9x^2 - 4$.

    

**2-masala:** $(x)'\cos x + x(\cos x)' = 1 \cdot \cos x + x(-\sin x) = \cos x - x\sin x$.

    

**3-masala:** Determinant: $\begin{vmatrix} 4 & 1 \\ 1 & -3 \end{vmatrix} = 4(-3) - 1(1) = -12 - 1 = -13$. Hosila: $\frac{-13}{(x - 3)^2}$.

    

**4-masala:** $\frac{(e^x)' x - e^x (x)'}{x^2} = \frac{e^x x - e^x}{x^2} = \frac{e^x(x - 1)}{x^2}$.

</details>
