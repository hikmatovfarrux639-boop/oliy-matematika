---
title: "Yo'nalish bo'yicha hosila, gradient va shartli ekstremum"
module: "kop-ozgaruvchili-funksiyalar"
order: 5
description: "Skalyar maydon gradienti, yo'nalish bo'yicha hosila, sirtga urinma tekislik hamda Lagranj ko'paytuvchilari usulining to'liq tahlili."
---

## Kirish: Ko'p o'lchovli fazoda tezlik va optimallashtirish

Bir o'zgaruvchili matematik analizda funksiyaning o'zgarish tezligi faqat bitta to'g'ri chiziq (abssissa o'qi) bo'ylab o'lchanadi. Ammo fazoda, masalan tog'li hudud relyefida yoki harorat maydonida tursangiz, siz shimolga, sharqqa yoki tog' cho'qqisiga qarab qadam bosishingiz mumkin. Har bir yo'nalishda tiklik (qiyalik darajasi) turlicha bo'ladi.

Bu savollarga javob berish uchun matematik analizda ikkita fundamental tushuncha kiritiladi:
1. **Yo'nalish bo'yicha hosila** — funksiyaning ixtiyoriy $\vec{l}$ yo'nalishidagi o'zgarish tezligi.
2. **Gradient** — funksiya eng tez o'sadigan yo'nalishni va o'sha eng katta o'sish tezligini ko'rsatuvchi vektor.

Bundan tashqari, iqtisodiyot va muhandislikda cheklovlar mavjud bo'lganda (masalan, sarflanadigan xomashyo yoki budjet cheklangan bo'lsa) eng katta foyda yoki eng kichik xarajatni topish talab qilinadi. Bu **shartli ekstremum** masalasi bo'lib, uni yechishda buyuk matematik Jozef Lui Lagranj yaratgan ko'paytuvchilar usuli qo'llaniladi.

---

## 1. Yo'nalish bo'yicha hosila va Gradient

### Yo'nalish bo'yicha hosila:
Faraz qilaylik, $u = f(x, y, z)$funksiya biror sohada differensiallanuvchi bo'lsin. Fazoda yo'naltiruvchi burchaklari$\alpha, \beta, \gamma$bo'lgan$\vec{l}$yo'nalishidagi birlik vektor$\vec{l}_0 = (\cos\alpha, \cos\beta, \cos\gamma)$ berilgan bo'lsin.

> **Ta'rif:** $u$funksiyaning$\vec{l}$ yo'nalishidagi hosilasi quyidagi formula bilan hisoblanadi:
>
> 
$$
> \frac{\partial u}{\partial \vec{l}} = \frac{\partial u}{\partial x}\cos\alpha + \frac{\partial u}{\partial y}\cos\beta + \frac{\partial u}{\partial z}\cos\gamma
> 
$$

### Gradient vektori:
Funksiyaning barcha birinchi tartibli xususiy hosilalaridan tuzilgan vektorga funksiyaning **gradienti** deyiladi:

$$
\text{grad } u = \nabla u = \left( \frac{\partial u}{\partial x}, \; \frac{\partial u}{\partial y}, \; \frac{\partial u}{\partial z} \right) = \frac{\partial u}{\partial x}\vec{i} + \frac{\partial u}{\partial y}\vec{j} + \frac{\partial u}{\partial z}\vec{k}
$$

### Gradient va yo'nalish bo'yicha hosila bog'liqligi:
Yo'nalish bo'yicha hosila gradient va birlik vektorning **skalyar ko'paytmasiga** teng:

$$
\frac{\partial u}{\partial \vec{l}} = \nabla u \cdot \vec{l}_0 = |\nabla u| \cdot |\vec{l}_0| \cos\theta = |\nabla u| \cos\theta
$$

Bu yerdan ajoyib xulosalar kelib chiqadi:
1. $\theta = 0^\circ$ bo'lganda ($\vec{l}$yo'nalishi$\nabla u$bilan bir xil),$\cos 0^\circ = 1$ va hosila o'zining **maksimal qiymatiga** erishadi:
   
$$
   \left(\frac{\partial u}{\partial \vec{l}}\right)_{\max} = |\nabla u| = \sqrt{\left(\frac{\partial u}{\partial x}\right)^2 + \left(\frac{\partial u}{\partial y}\right)^2 + \left(\frac{\partial u}{\partial z}\right)^2}
   
$$
   Demak: **Gradient funksiya eng tez o'sadigan yo'nalishni ko'rsatadi, uning moduli esa shu maksimal o'sish tezligiga teng!**
2. $\theta = 180^\circ$ bo'lganda, funksiya eng tez kamayadi (antigradient).
3. $\theta = 90^\circ$bo'lganda,$\frac{\partial u}{\partial \vec{l}} = 0$, ya'ni sath chizig'i (sath sirti) bo'ylab funksiya o'zgarmaydi. Demak, gradient sath sirtiga har doim **perpendikulyar (ortogonal)** bo'ladi!

---

## 2. Sirtga urinma tekislik va normal to'g'ri chiziq

Agar sirt $F(x, y, z) = 0$oshkormas tenglama bilan berilgan bo'lsa, uning$M_0(x_0, y_0, z_0)$nuqtasidagi normal vektori$\vec{n} = \nabla F(M_0) = (F'_x, F'_y, F'_z)$ bo'ladi.

- **Urinma tekislik tenglamasi:**
  
$$
  F'_x(M_0)(x - x_0) + F'_y(M_0)(y - y_0) + F'_z(M_0)(z - z_0) = 0
  
$$

- **Normal to'g'ri chiziq tenglamasi:**
  
$$
  \frac{x - x_0}{F'_x(M_0)} = \frac{y - y_0}{F'_y(M_0)} = \frac{z - z_0}{F'_z(M_0)}
  
$$

---

## 3. Shartli ekstremum va Lagranj ko'paytuvchilari usuli

Faraz qilaylik, $z = f(x, y)$funksiyaning$\varphi(x, y) = 0$ bog'lanish tenglamasini qanoatlantiruvchi nuqtalardagi ekstremumini (eng katta yoki eng kichik qiymatini) topish talab etilsin.

### Lagranj funksiyasi:
Noma'lum $\lambda$ ko'paytuvchisini kiritib, yordamchi funksiyani tuzamiz:

$$
L(x, y, \lambda) = f(x, y) + \lambda \varphi(x, y)
$$

### Zaruriy shart:
Statsionar nuqtalarni topish uchun barcha birinchi tartibli xususiy hosilalarni nolga tenglashtiramiz:

$$
\begin{cases}
L'_x = f'_x + \lambda \varphi'_x = 0 \\
L'_y = f'_y + \lambda \varphi'_y = 0 \\
L'_\lambda = \varphi(x, y) = 0
\end{cases}
$$

Ushbu sistemadan ekstremumga shubhali $(x_0, y_0)$nuqtalar va$\lambda_0$ parametri topiladi.

---

## 4. Amaliy masalalar va ko'p usulli yechimlar

### 1-masala: Yo'nalish bo'yicha hosila va maksimal o'sish

$u = x^2 y + y^2 z + z^2 x$funksiyaning$M(1, 2, -1)$nuqtada$\vec{a} = (2, -1, 2)$ vektori yo'nalishidagi hosilasini va maksimal o'sish tezligini toping.

#### Yechish:
1. $M(1, 2, -1)$ nuqtadagi xususiy hosilalarni (gradientni) hisoblaymiz:
   - $\frac{\partial u}{\partial x} = 2xy + z^2 \implies \frac{\partial u}{\partial x}(M) = 2(1)(2) + (-1)^2 = 4 + 1 = 5$-$\frac{\partial u}{\partial y} = x^2 + 2yz \implies \frac{\partial u}{\partial y}(M) = 1^2 + 2(2)(-1) = 1 - 4 = -3$-$\frac{\partial u}{\partial z} = y^2 + 2zx \implies \frac{\partial u}{\partial z}(M) = 2^2 + 2(-1)(1) = 4 - 2 = 2$Demak,$\nabla u(M) = (5, -3, 2)$.

2. Berilgan $\vec{a} = (2, -1, 2)$ vektorning uzunligini topib, uni birlik vektorga keltiramiz:
   
$$
   |\vec{a}| = \sqrt{2^2 + (-1)^2 + 2^2} = \sqrt{4 + 1 + 4} = \sqrt{9} = 3
   
$$
   Birlik vektor: $\vec{a}_0 = \left(\frac{2}{3}, -\frac{1}{3}, \frac{2}{3}\right)$.

3. Yo'nalish bo'yicha hosila:
   
$$
   \frac{\partial u}{\partial \vec{a}} = \nabla u \cdot \vec{a}_0 = 5 \cdot \frac{2}{3} + (-3) \cdot \left(-\frac{1}{3}\right) + 2 \cdot \frac{2}{3} = \frac{10 + 3 + 4}{3} = \frac{17}{3}
   
$$

4. Maksimal o'sish tezligi:
   
$$
   |\nabla u| = \sqrt{5^2 + (-3)^2 + 2^2} = \sqrt{25 + 9 + 4} = \sqrt{38} \approx 6.16
   
$$
   E'tibor bering: $\frac{17}{3} \approx 5.67 < \sqrt{38} \approx 6.16$, chunki $\vec{a}$ yo'nalishi gradient yo'nalishidan biroz farq qiladi.

---

### 2-masala: Shartli ekstremumni 3 xil usulda topish

Yig'indisi 12 ga teng bo'lgan ikki musbat sonning ko'paytmasi eng katta bo'lishi uchun ular nechaga teng bo'lishi kerak?
Ya'ni: $z = xy$ning$x + y = 12$ shartidagi shartli maksimumini toping ($x > 0, y > 0$).

#### 1-usul: Bitta o'zgaruvchili funksiyaga keltirish
Bog'lanish tenglamasidan $y$ni topamiz:$y = 12 - x$.
Funksiyaga qo'yamiz:
$$
z(x) = x(12 - x) = 12x - x^2
$$
Hosila olib nolga tenglashtiramiz:
$$
z'(x) = 12 - 2x = 0 \implies x = 6 \implies y = 12 - 6 = 6
$$
$z''(x) = -2 < 0$bo'lganligi sababli, bu nuqta haqiqatdan ham maksimumdir.$z_{\max} = 6 \cdot 6 = 36$.

#### 2-usul: Lagranj ko'paytuvchilari usuli
Lagranj funksiyasi:
$$
L(x, y, \lambda) = xy + \lambda(x + y - 12)
$$
Zaruriy shartlar sistemasini tuzamiz:
$$
\begin{cases}
L'_x = y + \lambda = 0 \implies \lambda = -y \\
L'_y = x + \lambda = 0 \implies \lambda = -x \\
x + y = 12
\end{cases}
$$
Bundan $-y = -x \implies x = y$.
Tenglamaga qo'yamiz: $x + x = 12 \implies 2x = 12 \implies x = 6, y = 6, \lambda = -6$.

#### 3-usul: O'rta arifmetik va o'rta geometrik (AM-GM) tengsizligi orqali tekshirish
Har qanday musbat $x, y$ uchun:
$$
\sqrt{xy} \le \frac{x + y}{2} \implies \sqrt{xy} \le \frac{12}{2} = 6 \implies xy \le 36
$$
Tenglik faqat va faqat $x = y = 6$bo'lganda bajariladi. Demak,$z_{\max} = 36$.
Uchala usul ham aynan bir xil mukammal natijani berdi!

---

## 5. Imtihondagi asosiy tuzoqlar

> [!WARNING] Imtihondagi tuzoqlar
> 1. **Yo'nalish vektorini normallashtirishni unutish:** Agar masalada $\vec{l} = (3, 4)$vektor berilgan bo'lsa, xususiy hosilalarni to'g'ridan-to'g'ri$3$va$4$ga ko'paytirish qo'pol xatodir! Oldin vektor moduli$|\vec{l}| = \sqrt{3^2 + 4^2} = 5$ga bo'lib, yo'naltiruvchi kosinuslarni$\cos\alpha = 3/5, \cos\beta = 4/5$ topish shart.
> 2. **Gradient skalyar emas, vektor:** Ko'p talabalar $\nabla u$ deganda qandaydir bitta sonni tushunishadi. Gradient — bu koordinatalari hosilalardan iborat fazoviy vektor. Faqat uning uzunligi (moduli) son bo'ladi.
> 3. **Shartli ekstremumda chegara nuqtalarini e'tibordan chetda qoldirish:** Agar masala cheklangan sohada (masalan $x^2 + y^2 \le 1$ doirada) berilgan bo'lsa, ekstremum nafaqat soha ichida, balki soha chegarasida ham yotishi mumkin.

---

## 6. Mustaqil yechish uchun amaliy mashqlar

### 1-mashq
$z = x^2 - xy + y^2$funksiyaning$M(1, 1)$ nuqtadagi gradientini va shu nuqtadagi eng katta o'sish tezligini toping.

<details>
<summary>👉 Yechimni tekshirish</summary>

1. Xususiy hosilalar:
   - $z'_x = 2x - y \implies z'_x(1, 1) = 2(1) - 1 = 1$-$z'_y = -x + 2y \implies z'_y(1, 1) = -1 + 2(1) = 1$2. Gradient:$\nabla z(1, 1) = (1, 1)$.
3. Eng katta o'sish tezligi: $|\nabla z| = \sqrt{1^2 + 1^2} = \sqrt{2}$.

</details>

### 2-mashq
$x^2 + y^2 + z^2 = 14$sirtning$M_0(1, 2, 3)$ nuqtasidagi urinma tekislik tenglamasini yozing.

<details>
<summary>👉 Yechimni tekshirish</summary>

$F(x, y, z) = x^2 + y^2 + z^2 - 14 = 0$.
Xususiy hosilalar: $F'_x = 2x, F'_y = 2y, F'_z = 2z$.
$M_0(1, 2, 3)$nuqtada normal vektor:$\vec{n} = (2, 4, 6)$yoki 2 ga qisqartirsak$(1, 2, 3)$.
Urinma tekislik tenglamasi:
$$
1(x - 1) + 2(y - 2) + 3(z - 3) = 0 \implies x + 2y + 3z - 14 = 0
$$

</details>
