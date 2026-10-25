---
title: "Differensial tenglamalar tushunchasi va Koshi masalasi"
module: "differensial-tenglamalar"
order: 1
description: "Differensial tenglama tushunchasi, tartibi, umumiy va xususiy integrallar, Pikard-Koshi mavjudlik teoremasi va 3 xil usulda yechish."
---

## Kirish: Tabiat qonunlari qanday tilda yozilgan?

Mashhur fizik va matematik Galileo Galiley aytganidek: *"Tabiat kitobi matematika tilida yozilgan"*. Agar chuqurroq tahlil qilsak, deyarli barcha fundamental tabiat qonunlari — Nyutonning ikkinchi qonuni ($F = ma = m \frac{d^2 x}{dt^2}$), radioaktiv moddalarning yemirilishi ($\frac{dN}{dt} = -\lambda N$), Nyutonning sovish qonuni, tebranishlar va to'lqinlar tenglamalari — aynan **differensial tenglamalar** shaklida ifodalanadi.

Chunki tabiatdagi o'zgarishlar miqdorning o'zi bilan uning o'zgarish tezligi (hosilasi) orasidagi dinamik munosabat orqali sodir bo'ladi!

---

## 1. Asosiy ta'riflar va klassifikatsiya

> **Ta'rif:** Erkli o'zgaruvchi $x$, noma'lum funksiya $y = y(x)$ va uning turli tartibli hosilalari ($y', y'', \dots, y^{(n)}$) orasidagi funksional bog'lanishga **oddiy differensial tenglama (ODT)** deyiladi:
>
> 
$$
> F(x, y, y', y'', \dots, y^{(n)}) = 0
> 
$$

Agar noma'lum funksiya bir nechta erkli o'zgaruvchilarga bog'liq bo'lsa ($z = z(x, y)$) va uning xususiy hosilalari qatnashsa, bunday tenglama **xususiy hosilali differensial tenglama** deyiladi.

### Tenglamaning tartibi:
Tenglamaga kirgan hosilaning **eng yuqori tartibiga** differensial tenglamaning tartibi deyiladi:
- $y' + 3x y = \sin x$ — **1-tartibli** differensial tenglama;
- $y'' - 4y' + 13y = 0$ — **2-tartibli** differensial tenglama;
- $(y')^5 + y = x$ — **1-tartibli** differensial tenglama (chunki hosila 1-tartibli, 5 esa uning darajasi!);
- $y''' + x(y')^2 = 0$ — **3-tartibli** differensial tenglama.

---

## 2. Umumiy va xususiy yechim

Differensial tenglamani yechish (integrallash) — undan barcha hosilalarni integrallash yo'li bilan bartaraf etib, asl $y(x)$ funksiyani topish demakdir.

### 1. Umumiy yechim va umumiy integral:
$n$-tartibli differensial tenglamaning **umumiy yechimi** deb, tenglamani ayniyatga aylantiruvchi va o'z ichiga $n$ ta erkli ixtiyoriy o'zgarmas sonni ($C_1, C_2, \dots, C_n$) olgan quyidagi funksiyaga aytiladi:
$$
y = \varphi(x, C_1, C_2, \dots, C_n)
$$
Agar umumiy yechim oshkormas shaklda $\Phi(x, y, C_1, \dots, C_n) = 0$ topilsa, u **umumiy integral** deyiladi.

> **Geometrik mohiyati:** 1-tartibli differensial tenglamaning umumiy yechimi tekislikdagi bitta chiziq emas, balki koordinata tekisligini to'ldiruvchi butun bir **integral egri chiziqlar oilasini** ifodalaydi.

### 2. Xususiy yechim:
Ixtiyoriy o'zgarmas $C$ larga aniq son qiymatlari berilganda hosil bo'ladigan yechim **xususiy yechim** (yoki xususiy integral) deyiladi.

---

## 3. Koshi masalasi va Yechimning mavjudlik va yagonalik teoremasi

Cheksiz ko'p integral egri chiziqlar oilasidan aynan bitta talab qilingan chiziqni ajratib olish uchun **boshlang'ich shart** beriladi.

> **Koshi masalasi:**
> 1-tartibli normal ko'rinishdagi differensial tenglama $y' = f(x, y)$ va boshlang'ich shart:
>
> 
$$
> y(x_0) = y_0
> 
$$
>
> berilgan bo'lsin. Ushbu boshlang'ich shartni qanoatlantiruvchi yechimni topish masalasi **Koshi masalasi** deyiladi.

> **Pikard-Koshi teoremasi:** Agar $f(x, y)$funksiya va uning$f'_y(x, y)$xususiy hosilasi$M_0(x_0, y_0)$nuqtani o'z ichiga olgan biror$D$sohada uzluksiz bo'lsa, u holda Koshi masalasining$x_0$ nuqta atrofida **mavjud va yagona** yechimi bo'ladi.

Geometrik nuqtai nazardan bu shuni anglatadiki: berilgan $M_0(x_0, y_0)$ nuqtadan faqat va faqat **bitta** integral egri chiziq o'tadi va ular o'zaro kesishmaydi!

---

## 4. Amaliy masalalar va ko'p usulli yechimlar

### 1-masala: Koshi masalasini 3 xil usulda yechish

Ushbu differensial tenglamaning umumiy yechimini va $y(0) = 3$ shartni qanoatlantiruvchi xususiy yechimini toping:
$$
y' - 2xy = 0
$$

#### 1-usul: O'zgaruvchilarni ajratish usuli
$y' = \frac{dy}{dx}$ deb yozamiz:
$$
\frac{dy}{dx} = 2xy \implies \frac{dy}{y} = 2x \, dx
$$
Ikkala tomonni integrallaymiz ($y \neq 0$):
$$
\int \frac{dy}{y} = \int 2x \, dx \implies \ln|y| = x^2 + C_1
$$
Potensirlaymiz:
$$
|y| = e^{x^2 + C_1} = e^{C_1} \cdot e^{x^2} \implies y = C e^{x^2}, \quad (C = \pm e^{C_1})
$$
$y = 0$yechim ham$C = 0$bo'lganda ushbu formulaga kiradi. Demak, umumiy yechim:$y = C e^{x^2}$.

Endi $y(0) = 3$ boshlang'ich shartni qo'yamiz:
$$
3 = C \cdot e^{0^2} = C \cdot 1 \implies C = 3
$$
Xususiy yechim:
$$
y = 3 e^{x^2}
$$

#### 2-usul: Birinchi tartibli chiziqli tenglama umumiy formulasi
Tenglama $y' + P(x)y = 0$ko'rinishida, bu yerda$P(x) = -2x$.
Bir jinsli chiziqli tenglama yechimi:
$$
y = C e^{-\int P(x)dx} = C e^{-\int (-2x)dx} = C e^{\int 2xdx} = C e^{x^2}
$$
$y(0) = 3 \implies C = 3 \implies y = 3e^{x^2}$.

#### 3-usul: Qatorlar yordamida (Teylor qatori) tekshirish
$y(0) = 3$. Tenglamadan: $y'(0) = 2(0)y(0) = 0$.
Keyingi hosila: $y'' = (2xy)' = 2y + 2xy' \implies y''(0) = 2(3) + 0 = 6$.
Teylor yoyilmasi:
$$
y(x) = y(0) + y'(0)x + \frac{y''(0)}{2!}x^2 + \dots = 3 + 0 + \frac{6}{2}x^2 + \dots = 3(1 + x^2 + \dots) = 3e^{x^2}
$$
Barcha uchala usul mutlaqo bir xil natijani berdi!

---

## 5. Imtihondagi asosiy tuzoqlar

> [!WARNING] Imtihondagi tuzoqlar
> 1. **$C$o'zgarmasini integrallashdan oldin qo'yish:** Talabalar ko'pincha$\frac{dy}{y} = 2xdx + C$deb yozib, noto'g'ri integrallashadi.$C$ o'zgarmas soni faqat integrallash amali to'liq bajarilgandan so'ng qo'shiladi!
> 2. **Maxsus (nolli) yechimlarni yo'qotib qo'yish:** $y$ga bo'lish paytida$y = 0$holatini alohida tekshirish shart. Ba'zi tenglamalarda$y = 0$ xos (singular) yechim bo'lib, umumiy yechim formulasiga kirmay qolishi mumkin.
> 3. **Hosila tartibini daraja bilan adashtirish:** Masalan, imtihonda $(y'')^3 + (y')^7 = 0$tenglama berilsa, eng katta daraja 7 ga qarab 7-tartibli deb yozish qo'pol xatodir. Bu yerda eng yuqori hosila$y''$ bo'lgani uchun tenglama **2-tartiblidir**!

---

## 6. Mustaqil yechish uchun amaliy mashqlar

### 1-mashq
$y' = 3x^2 - 4x + 1$tenglamaning$y(1) = 5$ boshlang'ich shartni qanoatlantiruvchi xususiy yechimini toping.

<details>
<summary>👉 Yechimni tekshirish</summary>

1. Integrallaymiz:
   
$$
   y = \int (3x^2 - 4x + 1)dx = x^3 - 2x^2 + x + C
   
$$
2. $y(1) = 5$ shartni qo'yamiz:
   
$$
   5 = 1^3 - 2(1)^2 + 1 + C \implies 5 = 1 - 2 + 1 + C \implies 5 = 0 + C \implies C = 5
   
$$
3. Xususiy yechim: $y = x^3 - 2x^2 + x + 5$.

</details>

### 2-mashq
$y' + y \operatorname{tg} x = 0$ tenglamaning umumiy yechimini toping.

<details>
<summary>👉 Yechimni tekshirish</summary>

$$
\frac{dy}{dx} = -y \operatorname{tg} x \implies \frac{dy}{y} = -\operatorname{tg} x dx = -\frac{\sin x}{\cos x} dx
$$
Integrallaymiz:
$$
\ln|y| = \int \frac{d(\cos x)}{\cos x} = \ln|\cos x| + \ln|C| = \ln|C \cos x|
$$
Demak, umumiy yechim:
$$
y = C \cos x
$$

</details>
