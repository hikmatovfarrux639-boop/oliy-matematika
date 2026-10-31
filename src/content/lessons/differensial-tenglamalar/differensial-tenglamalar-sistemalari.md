---
title: "Differensial tenglamalar sistemalari va matritsaviy yechish usuli"
module: "differensial-tenglamalar"
order: 8
description: "Chiziqli differensial tenglamalar sistemalari, noma'lumlarni yo'qotish usuli, matritsaning xos sonlari va xos vektorlari (Eyler usuli) hamda faza portreti tahlili."
---

## Kirish: Real hayotdagi bog'liq jarayonlar

Bitta differensial tenglama ko'pincha bitta erkin o'zgaruvchining tebranishini (masalan, prujinadagi yuk) ifodalaydi. Ammo real fizikada va iqtisodiyotda barcha parametrlar o'zaro chirmashib ketgan:
- Ekologiyada: "Yirtqich — o'lja" (bo'rilar va quyonlar populyatsiyasi);
- Elektrotexnikada: Bir necha zanjirli konturlar tok va kuchlanishlari;
- Tibbiyotda: Qonga kiritilgan dorining turli organlar bo'ylab taqsimlanishi.

Bunday bog'liq jarayonlar **differensial tenglamalar sistemalari (DTS)** orqali ifodalanadi.

---

## 1. Normal ko'rinishdagi chiziqli sistema

O'zgarmas koeffitsiyentli ikkita noma'lumli bir jinsli chiziqli differensial tenglamalar sistemasi quyidagicha yoziladi:
$$
\begin{cases}
\frac{dx}{dt} = a_{11} x + a_{12} y \\
\frac{dy}{dt} = a_{21} x + a_{22} y
\end{cases}
$$
yoki ixcham matritsaviy shaklda:
$$
\frac{d\vec{X}}{dt} = A \vec{X}, \quad \text{bu yerda } A = \begin{pmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{pmatrix}, \quad \vec{X} = \begin{pmatrix} x(t) \\ y(t) \end{pmatrix}
$$

Ushbu sistemani yechishning ikkita asosiy klassik usuli mavjud.

---

## 2. 1-usul: Noma'lumlarni yo'qotish usuli (Elimination method)

Bu usul maktabdagi oddiy chiziqli tenglamalar sistemasidan bitta o'zgaruvchini yo'qotish usuliga juda o'xshaydi:
1. 1-tenglamadan $y$ ni ifodalaymiz:
   
$$
   y = \frac{1}{a_{12}} \left( x' - a_{11} x \right)
   
$$
2. Ushbu ifodadan $t$ bo'yicha yana bir bor hosila olamiz:
   
$$
   y' = \frac{1}{a_{12}} \left( x'' - a_{11} x' \right)
   
$$
3. $y$ va $y'$ larni sistemadagi 2-tenglamaga qo'yamiz.
Natijada faqat bitta noma'lum $x(t)$ ga bog'liq **2-tartibli o'zgarmas koeffitsiyentli chiziqli differensial tenglama** hosil bo'ladi! Uni yechib $x(t)$ topilgach, 1-qadamdagi formula orqali $y(t)$ osongina hisoblanadi.

---

## 3. 2-usul: Matritsaviy xos sonlar va vektorlar usuli (Eyler usuli)

Yechimni $\vec{X}(t) = \vec{v} e^{\lambda t}$ ko'rinishida qidiramiz. Sistemaga qo'ysak:
$$
\lambda \vec{v} e^{\lambda t} = A \vec{v} e^{\lambda t} \implies (A - \lambda E)\vec{v} = 0
$$
Nolmas yechim mavjud bo'lishi uchun xarakteristik determinant nolga teng bo'lishi shart:
$$
\det(A - \lambda E) = \begin{vmatrix} a_{11} - \lambda & a_{12} \\ a_{21} & a_{22} - \lambda \end{vmatrix} = 0
$$

```
                   Xos sonlarning turlari (lambda)
                                  |
            +---------------------+---------------------+
            |                                           |
  Haqiqiy va har xil:                          Kompleks qo'shma:
  \lambda_1 \ne \lambda_2                      \lambda_{1,2} = \alpha \pm i\beta
            |                                           |
  X(t) = C_1 e^{\lambda_1 t} v_1              X(t) = e^{\alpha t} [C_1 \cos(\beta t)
       + C_2 e^{\lambda_2 t} v_2                     + C_2 \sin(\beta t)]
```

### Yechim turlari va faza fazosidagi muvozanat nuqtalari:
- **Tugun (Uzel):** $\lambda_1, \lambda_2$ bir xil ishorali haqiqiy sonlar. Trayektoriyalar markazga yaqinlashadi ($\lambda < 0$, turg'un) yoki uzoqlashadi ($\lambda > 0$, noturg'un).
- **Egarchasimon nuqta (Sedlo):** $\lambda_1 > 0, \lambda_2 < 0$ har xil ishorali haqiqiy sonlar.
- **Fokus:** $\lambda_{1,2} = \alpha \pm i\beta$ ($\alpha \ne 0$). Trayektoriyalar spiral shaklida bo'ladi.
- **Markaz:** $\lambda_{1,2} = \pm i\beta$ ($\alpha = 0$). Trayektoriyalar berk ellips yoki aylanalar (so'nmas tebranishlar).

---

## 4. Masalalarni 2 xil usulda tahlil qilish

### Masala: Ushbu differensial tenglamalar sistemasini yeching
$$
\begin{cases}
x' = 2x + y \\
y' = 3x + 4y
\end{cases}
$$

#### 1-usul: Noma'lumlarni yo'qotish usuli
1-tenglamadan $y$ ni topamiz:
$$
y = x' - 2x
$$
$t$ bo'yicha hosila olamiz:
$$
y' = x'' - 2x'
$$
Bularni 2-tenglamaga ($y' = 3x + 4y$) qo'yamiz:
$$
x'' - 2x' = 3x + 4(x' - 2x)
$$
$$
x'' - 2x' = 3x + 4x' - 8x \implies x'' - 6x' + 5x = 0
$$
Xarakteristik tenglamani tuzamiz:
$$
k^2 - 6k + 5 = 0 \implies (k - 1)(k - 5) = 0 \implies k_1 = 1, \quad k_2 = 5
$$
Demak, $x(t)$ ning umumiy yechimi:
$$
x(t) = C_1 e^t + C_2 e^{5t}
$$
Endi $y(t) = x' - 2x$ formulasiga qo'yamiz:
$$
x'(t) = C_1 e^t + 5C_2 e^{5t}
$$
$$
y(t) = (C_1 e^t + 5C_2 e^{5t}) - 2(C_1 e^t + C_2 e^{5t}) = -C_1 e^t + 3C_2 e^{5t}
$$

**Yechim:**
$$
\begin{cases}
x(t) = C_1 e^t + C_2 e^{5t} \\
y(t) = -C_1 e^t + 3C_2 e^{5t}
\end{cases}
$$

---

#### 2-usul: Matritsaviy Eyler usuli (Xos son va vektorlar)
Sistema matritsasi: $A = \begin{pmatrix} 2 & 1 \\ 3 & 4 \end{pmatrix}$.
Xarakteristik tenglama:
$$
\det(A - \lambda E) = \begin{vmatrix} 2-\lambda & 1 \\ 3 & 4-\lambda \end{vmatrix} = (2-\lambda)(4-\lambda) - 3 = \lambda^2 - 6\lambda + 5 = 0
$$
Xos sonlar: $\lambda_1 = 1, \lambda_2 = 5$.

1. $\lambda_1 = 1$ uchun xos vektorni topamiz: $(A - 1\cdot E)\vec{v}_1 = 0$:
$$
\begin{pmatrix} 1 & 1 \\ 3 & 3 \end{pmatrix} \begin{pmatrix} v_x \\ v_y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} \implies v_x + v_y = 0 \implies v_y = -v_x
$$
$v_x = 1$ desak, $\vec{v}_1 = \begin{pmatrix} 1 \\ -1 \end{pmatrix}$.
Xususiy yechim: $\vec{X}_1(t) = \begin{pmatrix} 1 \\ -1 \end{pmatrix} e^t$.

2. $\lambda_2 = 5$ uchun xos vektorni topamiz: $(A - 5\cdot E)\vec{v}_2 = 0$:
$$
\begin{pmatrix} -3 & 1 \\ 3 & -1 \end{pmatrix} \begin{pmatrix} v_x \\ v_y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} \implies -3v_x + v_y = 0 \implies v_y = 3v_x
$$
$v_x = 1$ desak, $\vec{v}_2 = \begin{pmatrix} 1 \\ 3 \end{pmatrix}$.
Xususiy yechim: $\vec{X}_2(t) = \begin{pmatrix} 1 \\ 3 \end{pmatrix} e^{5t}$.

Umumiy matritsaviy yechim:
$$
\vec{X}(t) = C_1 \vec{X}_1(t) + C_2 \vec{X}_2(t) = C_1 \begin{pmatrix} 1 \\ -1 \end{pmatrix} e^t + C_2 \begin{pmatrix} 1 \\ 3 \end{pmatrix} e^{5t}
$$
Komponentlar bo'yicha yozsak:
$$
\begin{cases}
x(t) = C_1 e^t + C_2 e^{5t} \\
y(t) = -C_1 e^t + 3C_2 e^{5t}
\end{cases}
$$
Ikkala usul ham mutlaqo bir xil natija berdi!

---

> [!WARNING] Imtihondagi tuzoqlar va ko'p uchraydigan xatoliklar
> 1. **O'zgarmaslar soni:** 2 ta 1-tartibli tenglamalar sistemasining umumiy yechimida faqat 2 ta ixtiyoriy o'zgarmas ($C_1$ va $C_2$) bo'lishi kerak. Talabalar $x(t)$ ni yechib $C_1, C_2$, keyin $y(t)$ ni alohida yechib yangi $C_3, C_4$ deb yozishadi va o'zgarmaslar bog'liqligini yo'qotib, qo'pol xatoga yo'l qo'yishadi.
> 2. **Xos vektor koordinatalari proporsiyasi:** $(A-\lambda E)\vec{v} = 0$ sistemasida qatorlar chiziqli bog'liq bo'ladi. Ulardan faqat bittasini tanlab, koordinatalarning nisbatini to'g'ri olish zarur.

---

## Mustaqil yechish uchun mashqlar

### 1-mashq
Ushbu sistemani noma'lumlarni yo'qotish usuli bilan yeching:
$$
\begin{cases}
x' = y \\
y' = -4x
\end{cases}
$$

<details>
<summary>👉 Yechimni tekshirish</summary>

**Yechish:**
1-tenglamadan $y = x'$.
Buni 2-tenglamaga qo'yamiz: $(x')' = -4x \implies x'' + 4x = 0$.
Xarakteristik tenglama: $k^2 + 4 = 0 \implies k = \pm 2i$.
$$
x(t) = C_1 \cos 2t + C_2 \sin 2t
$$
$y(t) = x'(t)$:
$$
y(t) = -2C_1 \sin 2t + 2C_2 \cos 2t
$$
*(Muvozanat nuqtasi turi: $\lambda = \pm 2i$ bo'lgani uchun "Markaz", yopiq ellipslar hosil qiladi).*

**Javob:**
$$
\begin{cases}
x(t) = C_1 \cos 2t + C_2 \sin 2t \\
y(t) = -2C_1 \sin 2t + 2C_2 \cos 2t
\end{cases}
$$

</details>

### 2-mashq
Ushbu sistemani xos sonlar usuli yordamida yeching:
$$
\begin{cases}
x' = x + 2y \\
y' = 2x + y
\end{cases}
$$

<details>
<summary>👉 Yechimni tekshirish</summary>

**Yechish:**
Matritsa: $A = \begin{pmatrix} 1 & 2 \\ 2 & 1 \end{pmatrix}$.
$\det(A - \lambda E) = (1-\lambda)^2 - 4 = \lambda^2 - 2\lambda - 3 = 0 \implies (\lambda - 3)(\lambda + 1) = 0$.
$\lambda_1 = 3, \lambda_2 = -1$.
1. $\lambda_1 = 3$: $\begin{pmatrix} -2 & 2 \\ 2 & -2 \end{pmatrix}\vec{v}_1 = 0 \implies -2v_x + 2v_y = 0 \implies v_x = v_y \implies \vec{v}_1 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$.
2. $\lambda_2 = -1$: $\begin{pmatrix} 2 & 2 \\ 2 & 2 \end{pmatrix}\vec{v}_2 = 0 \implies 2v_x + 2v_y = 0 \implies v_y = -v_x \implies \vec{v}_2 = \begin{pmatrix} 1 \\ -1 \end{pmatrix}$.

**Javob:**
$$
\begin{cases}
x(t) = C_1 e^{3t} + C_2 e^{-t} \\
y(t) = C_1 e^{3t} - C_2 e^{-t}
\end{cases}
$$
*(Muvozanat nuqtasi turi: "Egarchasimon nuqta" (Sedlo), chunki $\lambda_1 > 0, \lambda_2 < 0$).*

</details>
