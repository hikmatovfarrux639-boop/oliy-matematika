---
title: "Bir jinsliga keltiriladigan va to'liq differensialli tenglamalar"
module: "differensial-tenglamalar"
order: 7
description: "Koordinata boshini ko'chirish usuli, parallel chiziqlar holati, to'liq differensialli tenglamalar va integrallovchi ko'paytuvchi topish qoidalari."
---

## Kirish: Maxsus almashtirishlar va to'liq differensial kuchi

Birinchi tartibli differensial tenglamalar ichida ko'pincha darhol bir jinsli yoki ajraluvchi ko'rinishda bo'lmagan, lekin maxsus algebraik almashtirish yordamida standart ko'rinishga keltiriladigan tenglamalar uchraydi. 

Shuningdek, fizikada potensial maydonlar harakati bevosita **to'liq differensialli tenglamalar** ($dU = 0$) orqali tasvirlanadi.

Ushbu darsda biz ushbu ikki muhim sinfni va ularni yechishning barcha nozik qoidalarini ko'rib chiqamiz.

---

## 1. Bir jinsliga keltiriladigan tenglamalar

Quyidagi ko'rinishdagi differensial tenglama berilgan bo'lsin:
$$
y' = f\left(\frac{a_1 x + b_1 y + c_1}{a_2 x + b_2 y + c_2}\right)
$$
Bu yerda $a_1, b_1, c_1, a_2, b_2, c_2$ — haqiqiy sonlar. 
Bu tenglamani yechish determinat $\Delta = \begin{vmatrix} a_1 & b_1 \\ a_2 & b_2 \end{vmatrix} = a_1 b_2 - a_2 b_1$ qiymatiga bog'liq:

### 1-holat: $\Delta = a_1 b_2 - a_2 b_1 \ne 0$ (To'g'ri chiziqlar kesishadi)
Bunday holda quyidagi chiziqli tenglamalar sistemasi yagona $(x_0, y_0)$ yechimga ega:
$$
\begin{cases} a_1 x_0 + b_1 y_0 + c_1 = 0 \\ a_2 x_0 + b_2 y_0 + c_2 = 0 \end{cases}
$$
Koordinata boshini shu kesishish nuqtasiga ko'chiramiz:
$$
x = u + x_0 \implies dx = du, \qquad y = v + y_0 \implies dy = dv
$$
O'rniga qo'yganda ozod hadlar ($c_1, c_2$) qisqarib ketadi va tenglama **bir jinsli tenglama**ga aylanadi:
$$
\frac{dv}{du} = f\left(\frac{a_1 u + b_1 v}{a_2 u + b_2 v}\right)
$$
Ushbu tenglama standart $v = u \cdot t$ almashtirishi bilan yechiladi.

### 2-holat: $\Delta = a_1 b_2 - a_2 b_1 = 0$ (To'g'ri chiziqlar parallel)
Bunday holda koeffitsiyentlar proporsional bo'ladi: $\frac{a_2}{a_1} = \frac{b_2}{b_1} = k$.
Demak, $a_2 x + b_2 y = k(a_1 x + b_1 y)$.
Yangi o'zgaruvchi kiritamiz:
$$
z = a_1 x + b_1 y \implies z' = a_1 + b_1 y' \implies y' = \frac{z' - a_1}{b_1}
$$
Natijada tenglama o'zgaruvchilari ajraladigan oddiy tenglamaga keltiriladi.

---

## 2. To'liq differensialli tenglamalar

Quyidagi simmetrik ko'rinishdagi differensial tenglama berilgan bo'lsin:
$$
P(x, y) \, dx + Q(x, y) \, dy = 0
$$

Agar ushbu ifodaning chap tomoni biror $U(x, y)$ funksiyaning to'liq differensiali $dU = \frac{\partial U}{\partial x}dx + \frac{\partial U}{\partial y}dy$ bo'lsa, tenglama **to'liq differensialli** deyiladi va uning umumiy integrali shunchaki:
$$
U(x, y) = C
$$
bo'ladi.

### To'liq differensiallikning zaruriy va yetarli sharti:
$$
\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}
$$

### $U(x, y)$ funksiyani tiklash algoritmi:
1. $\frac{\partial U}{\partial x} = P(x, y)$ ekanligidan $x$ bo'yicha integrallaymiz:
   
$$
   U(x, y) = \int P(x, y) dx + \varphi(y)
   
$$
   bu yerda $\varphi(y)$ — $x$ ga bog'liq bo'lmagan integrallash "o'zgarmasi".
2. Hosil bo'lgan ifodadan $y$ bo'yicha xususiy hosila olib, $Q(x, y)$ ga tenglashtiramiz:
   
$$
   \frac{\partial U}{\partial y} = \frac{\partial}{\partial y}\left(\int P(x, y) dx\right) + \varphi'(y) = Q(x, y)
   
$$
   Bu yerdan $\varphi'(y)$ topiladi va oddiy integrallash orqali $\varphi(y)$ aniqlanadi.

---

## 3. Integrallovchi ko'paytuvchi $\mu(x, y)$

Agar $\frac{\partial P}{\partial y} \ne \frac{\partial Q}{\partial x}$ bo'lsa, tenglama to'liq differensialli emas. Biroq ba'zan shunday $\mu(x, y)$ funksiyasini topish mumkinki, tenglamani unga ko'paytirganda u to'liq differensialliga aylanadi:
1. Agar $\frac{\frac{\partial P}{\partial y} - \frac{\partial Q}{\partial x}}{Q} = \psi(x)$ (faqat $x$ ga bog'liq) bo'lsa:
   
$$
   \mu(x) = e^{\int \psi(x) dx}
   
$$
2. Agar $\frac{\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}}{P} = \theta(y)$ (faqat $y$ ga bog'liq) bo'lsa:
   
$$
   \mu(y) = e^{\int \theta(y) dy}
   
$$

---

## 4. Masalalarni 2 xil usulda tahlil qilish

### 1-masala: To'liq differensialli tenglamani yechish
Tenglamani yeching:
$$
(2x + 3y^2) dx + (6xy + 4y^3) dy = 0
$$

#### 1-usul: Analitik xususiy hosilalar usuli
$P(x, y) = 2x + 3y^2$ va $Q(x, y) = 6xy + 4y^3$.
Shartni tekshiramiz:
$$
\frac{\partial P}{\partial y} = \frac{\partial}{\partial y}(2x + 3y^2) = 6y
$$
$$
\frac{\partial Q}{\partial x} = \frac{\partial}{\partial x}(6xy + 4y^3) = 6y
$$
$\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x} = 6y$. Shart bajarildi!
Endi $U(x, y)$ ni tiklaymiz:
$$
U(x, y) = \int (2x + 3y^2) dx = x^2 + 3y^2 x + \varphi(y)
$$
$y$ bo'yicha differensiallaymiz:
$$
\frac{\partial U}{\partial y} = 6yx + \varphi'(y)
$$
Buni $Q(x, y)$ ga tenglashtiramiz:
$$
6xy + \varphi'(y) = 6xy + 4y^3 \implies \varphi'(y) = 4y^3 \implies \varphi(y) = y^4
$$
Demak, umumiy integral:
$$
x^2 + 3x y^2 + y^4 = C
$$

#### 2-usul: Egri chiziqli integral (Trayektoriyalar usuli)
Boshlang'ich nuqta sifatida $(x_0, y_0) = (0, 0)$ ni olamiz. To'liq differensial integrali yo'lga bog'liq bo'lmagani uchun $(0,0) \to (x,0) \to (x,y)$ siniq chiziq bo'ylab integrallash mumkin:
$$
U(x, y) = \int_0^x P(t, 0) dt + \int_0^y Q(x, t) dt
$$
1. Birinchi oraliqda $y = 0 \implies dy = 0$:
$$
\int_0^x P(t, 0) dt = \int_0^x (2t + 0) dt = \left[ t^2 \right]_0^x = x^2
$$
2. Ikkinchi oraliqda $x = \text{const} \implies dx = 0$:
$$
\int_0^y Q(x, t) dt = \int_0^y (6xt + 4t^3) dt = \left[ 3xt^2 + t^4 \right]_0^y = 3xy^2 + y^4
$$
Yig'amiz:
$$
U(x, y) = x^2 + 3xy^2 + y^4 = C
$$
Ikkala usul ham aynan bir xil to'g'ri natijaga olib keldi!

---

### 2-masala: Bir jinsliga keltiriladigan tenglama
$$
(2x - y + 1) dx + (x + 2y - 7) dy = 0
$$

**Yechish:**
Tenglamani hosilaga nisbatan yozamiz:
$$
\frac{dy}{dx} = -\frac{2x - y + 1}{x + 2y - 7}
$$
Determinant: $\Delta = a_1 b_2 - a_2 b_1 = 2 \cdot 2 - 1 \cdot (-1) = 4 + 1 = 5 \ne 0$.
To'g'ri chiziqlar kesishadi. Kesishish nuqtasini topamiz:
$$
\begin{cases} 2x_0 - y_0 + 1 = 0 \\ x_0 + 2y_0 - 7 = 0 \end{cases} \implies \begin{cases} y_0 = 2x_0 + 1 \\ x_0 + 4x_0 + 2 - 7 = 0 \end{cases} \implies 5x_0 = 5 \implies x_0 = 1, y_0 = 3
$$
Koordinata boshini siljitamiz: $x = u + 1, y = v + 3$.
$$
\frac{dv}{du} = -\frac{2(u+1) - (v+3) + 1}{(u+1) + 2(v+3) - 7} = -\frac{2u - v}{u + 2v} = \frac{v - 2u}{u + 2v}
$$
Bu bir jinsli tenglama! $v = u \cdot z(u) \implies v' = z + u z'$.
$$
z + u \frac{dz}{du} = \frac{zu - 2u}{u + 2zu} = \frac{z - 2}{1 + 2z}
$$
$$
u \frac{dz}{du} = \frac{z - 2}{1 + 2z} - z = \frac{z - 2 - z - 2z^2}{1 + 2z} = -\frac{2(z^2 + 1)}{2z + 1}
$$
O'zgaruvchilarni ajratamiz:
$$
\frac{2z + 1}{z^2 + 1} dz = -2 \frac{du}{u} \implies \int \frac{2z}{z^2+1}dz + \int \frac{dz}{z^2+1} = -2\ln|u| + C
$$
$$
\ln(z^2+1) + \operatorname{arctg} z = -2\ln|u| + C \implies \ln(u^2(z^2+1)) + \operatorname{arctg} z = C
$$
$z = \frac{v}{u}$ bo'lgani uchun $u^2(z^2+1) = u^2 + v^2$:
$$
\ln(u^2 + v^2) + \operatorname{arctg}\left(\frac{v}{u}\right) = C
$$
Eski o'zgaruvchilarga qaytamiz ($u = x - 1, v = y - 3$):
$$
\ln\left((x-1)^2 + (y-3)^2\right) + \operatorname{arctg}\left(\frac{y-3}{x-1}\right) = C
$$

---

> [!WARNING] Imtihondagi tuzoqlar va ko'p uchraydigan xatoliklar
> 1. **To'liq differensial shartida hosilalarni chalkashtirish:** Talabalar ko'pincha $P$ dan $x$ bo'yicha, $Q$ dan $y$ bo'yicha hosila olib tekshirishadi. **Eslab qoling:** $dx$ oldidagi $P(x,y)$ dan $y$ bo'yicha ($\partial P / \partial y$), $dy$ oldidagi $Q(x,y)$ dan esa $x$ bo'yicha ($\partial Q / \partial x$) hosila olinishi shart!
> 2. **Ozod hadlar kesishish nuqtasi ishoralari:** $x = u + x_0$ va $y = v + y_0$ almashtirishida topilgan ildizlarni qo'yishda manfiy ishoralarni adashtirish butun bir jinsli tenglamani buzib yuboradi.

---

## Mustaqil yechish uchun mashqlar

### 1-mashq
Ushbu tenglamani to'liq differensiallikka tekshiring va umumiy integralini toping:
$$
(3x^2 + 6xy^2) dx + (6x^2 y + 4y^3) dy = 0
$$

<details>
<summary>👉 Yechimni tekshirish</summary>

**Yechish:**
$P = 3x^2 + 6xy^2 \implies \frac{\partial P}{\partial y} = 12xy$.
$Q = 6x^2 y + 4y^3 \implies \frac{\partial Q}{\partial x} = 12xy$.
Tenglik bajarildi.
$U(x, y) = \int (3x^2 + 6xy^2) dx = x^3 + 3x^2 y^2 + \varphi(y)$.
$\frac{\partial U}{\partial y} = 6x^2 y + \varphi'(y) = 6x^2 y + 4y^3 \implies \varphi'(y) = 4y^3 \implies \varphi(y) = y^4$.

**Javob:**
$$
x^3 + 3x^2 y^2 + y^4 = C
$$
</details>

### 2-mashq
Tenglamani yeching:
$$
(x + y - 2) dx + (x - y + 4) dy = 0
$$

<details>
<summary>👉 Yechimni tekshirish</summary>

**Yechish:**
$\Delta = 1(-1) - 1(1) = -2 \ne 0$.
Kesishish nuqtasi:
$x_0 + y_0 - 2 = 0$ va $x_0 - y_0 + 4 = 0 \implies 2x_0 + 2 = 0 \implies x_0 = -1, y_0 = 3$.
$x = u - 1, y = v + 3$.
$(u + v) du + (u - v) dv = 0$.
Bu ham to'liq differensialli tenglama! Chunki $P = u+v \implies \partial P/\partial v = 1$, $Q = u-v \implies \partial Q/\partial u = 1$.
$U(u, v) = \frac{u^2}{2} + uv - \frac{v^2}{2} = C_1 \implies u^2 + 2uv - v^2 = C$.
Eski o'zgaruvchilarga o'tsak ($u = x+1, v = y-3$):
$$
(x+1)^2 + 2(x+1)(y-3) - (y-3)^2 = C
$$
**Javob:** $(x+1)^2 + 2(x+1)(y-3) - (y-3)^2 = C$.
</details>
