---
title: "Egri chiziqli integrallar va Grin formulasi"
module: "karrali-integrallar"
order: 4
description: "1-tur (yoy uzunligi bo'yicha) va 2-tur (koordinatalar bo'yicha) egri chiziqli integrallar, o'zgaruvchining fizik ma'nosi (bajarilgan ish), Grin formulasi va integralning yo'lga bog'liq bo'lmaslik sharti."
---

## Kirish: Chiziq bo'ylab integrallash nima?

Biz hozirgacha faqat to'g'ri chiziqli oraliq $[a, b]$bo'yicha yoki tekis soha$D$ bo'yicha integralladik. Ammo tasavvur qiling:
* Moddiy nuqta fazoda egri chiziqli $L$ yo'l bo'ylab harakatlanmoqda;
* Unga o'zgaruvchan kuch maydoni $\vec{F}(x, y)$ ta'sir qilmoqda.
* Bu kuch tomonidan **bajarilgan ishni** qanday hisoblaymiz?

Buning uchun bizga to'g'ri kesma emas, balki **ixtiyoriy egri chiziq bo'ylab integrallash** — ya'ni **Egri chiziqli integral** kerak bo'ladi!

Egri chiziqli integrallar 2 turga bo'linadi:
1. **1-tur egri chiziqli integral** — yoy uzunligi $dl$ bo'yicha integrallash (massa, og'irlik markazi, yoy uzunligi).
2. **2-tur egri chiziqli integral** — koordinatalar $dx$va$dy$ bo'yicha integrallash (kuch maydonining bajargan ishi, maydon sirkulyatsiyasi).

---

## 1. Birinchi tur egri chiziqli integral (Yoy uzunligi bo'yicha)

Agar silliq $L$egri chiziqda uzluksiz$f(x, y)$funksiya (masalan, chiziqning chiziqli zichligi$\rho(x, y)$) berilgan bo'lsa:
$$
\int_L f(x, y) \, dl
$$
Ushbu integralning geometrik ma'nosi — $L$chiziq ustida joylashgan va balandligi$f(x, y)$bo'lgan "silindrik parda"ning yuzasidir. Fizik ma'nosi esa$L$ moddiy simning **massasidir**.

### Hisoblash usuli:
1. Agar $L$egri chiziq parametrik ko'rinishda$x = x(t), y = y(t)$ ($t_1 \le t \le t_2$) berilgan bo'lsa:
   
$$
   dl = \sqrt{(x'_t)^2 + (y'_t)^2} \, dt
   
$$
   
$$
   \int_L f(x, y) \, dl = \int_{t_1}^{t_2} f(x(t), y(t)) \sqrt{(x'_t)^2 + (y'_t)^2} \, dt
   
$$

2. Agar $L$egri chiziq$y = y(x)$ ($a \le x \le b$) ko'rinishda berilgan bo'lsa:
   
$$
   \int_L f(x, y) \, dl = \int_a^b f(x, y(x)) \sqrt{1 + (y'_x)^2} \, dx
   
$$

> [!NOTE]
> 1-tur egri chiziqli integralda integrallash yo'nalishi (boshidan oxirigami yoki teskarisimi) ahamiyatga ega emas:
> $\int_{AB} f \, dl = \int_{BA} f \, dl$.

---

## 2. Ikkinchi tur egri chiziqli integral (Koordinatalar bo'yicha)

Fizikadagi eng mashhur masala: $\vec{F} = P(x, y)\vec{i} + Q(x, y)\vec{j}$kuch maydonida$L$ egri chiziq bo'ylab bajarilgan **ish ($A$)**:
$$
A = \int_L P(x, y) \, dx + Q(x, y) \, dy
$$

### Asosiy xossasi:
Integrallash yo'nalishi o'zgarsa, integralning ishorasi teskariga o'zgaradi:
$$
\int_{BA} P\,dx + Q\,dy = -\int_{AB} P\,dx + Q\,dy
$$

### Parametrik hisoblash qoidasi:
Agar $x = x(t), y = y(t)$, $t$parametri$\alpha$dan$\beta$ ga o'zgarsa ($dx = x'_t dt, dy = y'_t dt$):
$$
\int_L P\,dx + Q\,dy = \int_{\alpha}^{\beta} \left[ P(x(t), y(t)) x'(t) + Q(x(t), y(t)) y'(t) \right] dt
$$

---

## 3. Grin formulasi: Egri chiziqdan yuzaga o'tish ko'prigi

Aytaylik, $L$— tekislikdagi$D$ sohani o'rab turgan **yopiq kontur** bo'lsin.
Grin formulasi yopiq kontur bo'yicha 2-tur egri chiziqli integralni $D$ soha bo'yicha **ikki karrali integralga** aylantirib beradi!

$$
\oint_L P \, dx + Q \, dy = \iint_D \left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right) dx dy
$$

Bu yerda konturni aylanib o'tish yo'nalishi **soat mili harakatiga teskari (musbat yo'nalishda)** bo'lishi shart.

### Grin formulasi yordamida soha yuzini hisoblash:
Agar $P = -y, Q = x$deb olsak,$\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} = 1 - (-1) = 2$ bo'ladi. Bundan tekis figura yuzasi uchun mashhur formula kelib chiqadi:
$$
S = \frac{1}{2} \oint_L x \, dy - y \, dx
$$

---

## 4. Integralning yo'lga bog'liq bo'lmaslik sharti

Qachon $\int_{AB} P\,dx + Q\,dy$integral$A$nuqtadan$B$ nuqtaga olib boruvchi yo'l shakliga bog'liq bo'lmaydi?

> [!IMPORTANT]
> Egri chiziqli integral yo'lga bog'liq bo'lmasligi uchun sohaning har bir nuqtasida quyidagi shart bajarilishi zarur va yetarli:
> 
$$
> \frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}
> 
$$
> Bu holda $P\,dx + Q\,dy = du$biror$u(x, y)$ funksiyaning **to'liq differensiali** bo'ladi va integral oddiy Nyuton-Leybnitsdek hisoblanadi:
> 
$$
> \int_{(x_1, y_1)}^{(x_2, y_2)} P\,dx + Q\,dy = u(x_2, y_2) - u(x_1, y_1)
> 
$$

---

## 5. To'liq yechilgan namunaviy masalalar

### 1-misol: 1-tur egri chiziqli integral
**Shart:** $I = \int_L (x + y) \, dl$integralni hisoblang, bu yerda$L$—$A(0, 0)$va$B(1, 2)$ nuqtalarni tutashtiruvchi to'g'ri chiziq kesmasi.

**Yechish:**
1. $AB$to'g'ri chiziq tenglamasi:$y = 2x$, bu yerda $x \in [0, 1]$.
2. Hosila: $y' = 2$.
3. Yoy differensiali: $dl = \sqrt{1 + (y')^2} \, dx = \sqrt{1 + 2^2} \, dx = \sqrt{5} \, dx$.
4. Integralga qo'yamiz:
   
$$
   I = \int_0^1 (x + 2x) \sqrt{5} \, dx = 3\sqrt{5} \int_0^1 x \, dx = 3\sqrt{5} \left[ \frac{x^2}{2} \right]_0^1 = \frac{3\sqrt{5}}{2}
   
$$
**Javob:** $\mathbf{\frac{3\sqrt{5}}{2}}$

---

### 2-misol: Grin formulasi bo'yicha hisoblash
**Shart:** $\oint_L (2xy - x^2) \, dx + (x + y)^2 \, dy$integralni Grin formulasi yordamida hisoblang, bu yerda$L$— uchlari$O(0, 0), A(1, 0), B(1, 1)$ bo'lgan uchburchak konturi (musbat yo'nalishda).

**Yechish:**
1. Funksiyalarni ajratamiz:
   $P(x, y) = 2xy - x^2 \implies \frac{\partial P}{\partial y} = 2x$ $Q(x, y) = (x + y)^2 \implies \frac{\partial Q}{\partial x} = 2(x + y) = 2x + 2y$
2. Grin ayirmasi:
   
$$
   \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} = (2x + 2y) - 2x = 2y
   
$$
3. Uchburchak sohasi $D$: $0 \le x \le 1$, $0 \le y \le x$.
4. Ikki karrali integralga o'tamiz:
   
$$
   \iint_D 2y \, dx dy = \int_0^1 dx \int_0^x 2y \, dy = \int_0^1 \left[ y^2 \right]_0^x dx = \int_0^1 x^2 \, dx = \left[ \frac{x^3}{3} \right]_0^1 = \frac{1}{3}
   
$$
**Javob:** $\mathbf{\frac{1}{3}}$

---

## ⚠️ Imtihondagi tuzoqlar (Tipik talaba xatolari)

> [!WARNING]
> 1. **Yo'nalish adashishi:** 2-tur integralda $A$dan$B$ga harakatlanish bilan$B$dan$A$ga harakatlanish teskari ishoralidir! Agar masalada "soat mili bo'yicha" deyilsa, Grin formulasi oldiga **minus ishora** qo'yish shart:$-\iint_D (\dots)$.
> 2. **Yoy differensiali formulasida kvadratni unutish:** $dl = \sqrt{1 + y'^2}dx$formulasida$y'$ ning kvadratini olishni unutmang.
> 3. **To'liq differensiallikni tekshirmasdan yo'l tanlash:** Yo'lga bog'liq emaslik teoremasini qo'llashdan oldin doimo $\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}$ tengligini yozib ko'rsating.

---

## ✍️ O'zingizni sinab ko'ring (Mustaqil mashq)

**Masala:** $I = \int_L x \, dy - y \, dx$integralni hisoblang, bu yerda$L$— radiusi$R$bo'lgan aylana:$x = R\cos t, y = R\sin t$, $t \in [0, 2\pi]$ (musbat yo'nalishda).

<details>
<summary>👉 To'liq yechimni ko'rish (Tekshirish)</summary>

**Yechish bosqichlari:**
1. Differensiallarni topamiz:
   $dx = -R\sin t \, dt$, $dy = R\cos t \, dt$.
2. Integral ostiga qo'yamiz:
   
$$
   x \, dy - y \, dx = (R\cos t)(R\cos t \, dt) - (R\sin t)(-R\sin t \, dt) = R^2(\cos^2 t + \sin^2 t) \, dt = R^2 \, dt
   
$$
3. Integrallaymiz:
   
$$
   I = \int_0^{2\pi} R^2 \, dt = R^2 [t]_0^{2\pi} = 2\pi R^2
   
$$
*(Eslatma: Grin formulasiga ko'ra $S = \frac{1}{2} \oint_L x\,dy - y\,dx \implies S = \frac{1}{2} (2\pi R^2) = \pi R^2$, ya'ni aylananing yuzi kelib chiqadi!)*

**Javob:** $\mathbf{2\pi R^2}$

</details>
