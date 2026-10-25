---
title: "Vektor maydon potensiali va solenoidal maydonlar"
module: "karrali-integrallar"
order: 7
description: "Potensial maydon sharti, rotor nolga tengligi, maydon potensialini tiklash algoritmlari, egri chiziqli integralning yo'lga bog'liqmasligi va solenoidal maydonlar."
---

## Kirish: Tabiatdagi kuchlar tartibi

Fizikadagi eng fundamental kuchlar — masalan, Nyutonning butun olam tortishish kuchi va Kulonning elektrostatik kuchi — ajoyib bir xususiyatga ega: **jismni A nuqtadan B nuqtaga ko'chirishda bajarilgan ish bosib o'tilgan yo'l shakliga mutlaqo bog'liq emas**, u faqat boshlang'ich va oxirgi nuqtalarning koordinatalariga bog'liq!

Bunday "yo'qotishsiz" maydonlar matematika va fizikada **potensial (konservativ) maydonlar** deb ataladi.

Ikkinchi tomondan, magnit maydoni kabi manbalarga (alohida zaryadlarga) ega bo'lmagan, chiziqlari doim tutash aylanma halqalardan iborat maydonlar **solenoidal maydonlar** deyiladi.

---

## 1. Potensial maydon va maydon potensiali

Fazoda $\vec{F}(x, y, z) = P(x, y, z)\vec{i} + Q(x, y, z)\vec{j} + R(x, y, z)\vec{k}$ vektor maydoni berilgan bo'lsin.

Agar shunday skalyar $U(x, y, z)$ funksiya mavjud bo'lib, uning gradienti berilgan vektor maydoniga teng bo'lsa:
$$
\vec{F} = \operatorname{grad} U = \frac{\partial U}{\partial x}\vec{i} + \frac{\partial U}{\partial y}\vec{j} + \frac{\partial U}{\partial z}\vec{k}
$$
u holda $\vec{F}$**potensial maydon**, skalyar$U(x, y, z)$ esa uning **potensial funksiyasi (potensiali)** deyiladi.

### Maydonning potensial bo'lishining zaruriy va yetarli sharti:
Maydon bir bog'lamli sohada potensial bo'lishi uchun uning **rotori (uyurmasi) aynan nolga teng** bo'lishi zarur va yetarli:
$$
\operatorname{rot} \vec{F} = \nabla \times \vec{F} = \begin{vmatrix} \vec{i} & \vec{j} & \vec{k} \\ \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\ P & Q & R \end{vmatrix} = \vec{0}
$$
Komponentlar bo'yicha yozsak:
$$
\frac{\partial R}{\partial y} = \frac{\partial Q}{\partial z}, \quad \frac{\partial P}{\partial z} = \frac{\partial R}{\partial x}, \quad \frac{\partial Q}{\partial x} = \frac{\partial P}{\partial y}
$$

### Asosiy xossasi:
Potensial maydonda 2-tur egri chiziqli integral yo'l shakliga bog'liq emas:
$$
\int_{AB} P dx + Q dy + R dz = U(B) - U(A)
$$
Har qanday berk kontur bo'ylab sirkulyatsiya nolga teng: $\oint_L \vec{F} \cdot d\vec{r} = 0$.

---

## 2. Solenoidal maydonlar (Manbasiz maydonlar)

Agar vektor maydonining divergensiyasi fazoning barcha nuqtalarida nolga teng bo'lsa:
$$
\operatorname{div} \vec{F} = \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z} = 0
$$
bunday maydon **solenoidal (uyurmali) maydon** deyiladi.

- **Fizik ma'nosi:** Maydonda manbalar (musbat zaryadlar) ham, oqib ketuvchi "botqoq"lar (manfiy zaryadlar) ham yo'q. Qancha oqim biror yopiq sirt ichiga kirsa, aynan shuncha oqim undan chiqib ketadi.
- **Ostrogradskiy-Gauss teoremasiga ko'ra:** Har qanday berk sirt orqali o'tuvchi to'liq oqim nolga teng:
$$
\Phi = \oiint_S \vec{F} \cdot d\vec{S} = \iiint_V \operatorname{div}\vec{F} \, dV = 0
$$
- Har qanday solenoidal maydon uchun shunday $\vec{A}$**vektor potensiali** mavjudki,$\vec{F} = \operatorname{rot} \vec{A}$bo'ladi (chunki$\operatorname{div}(\operatorname{rot}\vec{A}) \equiv 0$).

---

## 3. Masalalarni 2 xil usulda tahlil qilish

### 1-masala: Maydon potensialini 2 xil usulda tiklash
Vektor maydoni berilgan:
$$
\vec{F} = (2xy + z^2)\vec{i} + (x^2 + 3y^2)\vec{j} + (2xz + 1)\vec{k}
$$
1) Maydonning potensialligini isbotlang;
2) Potensial $U(x, y, z)$ funksiyani toping ($U(0,0,0) = 0$).

#### Maydonni potensiallikka tekshirish:
$$
\operatorname{rot} \vec{F} = \begin{vmatrix} \vec{i} & \vec{j} & \vec{k} \\ \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\ 2xy+z^2 & x^2+3y^2 & 2xz+1 \end{vmatrix}
$$
- $\vec{i}$bo'yicha:$\frac{\partial}{\partial y}(2xz+1) - \frac{\partial}{\partial z}(x^2+3y^2) = 0 - 0 = 0$;
- $\vec{j}$bo'yicha:$\frac{\partial}{\partial z}(2xy+z^2) - \frac{\partial}{\partial x}(2xz+1) = 2z - 2z = 0$;
- $\vec{k}$bo'yicha:$\frac{\partial}{\partial x}(x^2+3y^2) - \frac{\partial}{\partial y}(2xy+z^2) = 2x - 2x = 0$.
$\operatorname{rot} \vec{F} = \vec{0}$, demak maydon haqiqatan ham **potensial**!

---

#### 1-usul: Ketma-ket integrallash va hosila olish zanjiri
$\frac{\partial U}{\partial x} = 2xy + z^2$ekanligidan$x$ bo'yicha integrallaymiz:
$$
U(x, y, z) = x^2 y + x z^2 + C(y, z)
$$
Endi $y$bo'yicha xususiy hosila olib,$Q(x, y, z)$ ga tenglashtiramiz:
$$
\frac{\partial U}{\partial y} = x^2 + \frac{\partial C(y, z)}{\partial y} = x^2 + 3y^2 \implies \frac{\partial C(y, z)}{\partial y} = 3y^2
$$
$y$ bo'yicha integrallasak:
$$
C(y, z) = y^3 + D(z) \implies U(x, y, z) = x^2 y + x z^2 + y^3 + D(z)
$$
Endi $z$bo'yicha hosila olib,$R(x, y, z)$ ga tenglashtiramiz:
$$
\frac{\partial U}{\partial z} = 2xz + D'(z) = 2xz + 1 \implies D'(z) = 1 \implies D(z) = z + C_0
$$
Natijada:
$$
U(x, y, z) = x^2 y + x z^2 + y^3 + z + C_0
$$
$U(0,0,0) = 0 \implies C_0 = 0$. Demak:
$$
U(x, y, z) = x^2 y + x z^2 + y^3 + z
$$

---

#### 2-usul: Koordinata o'qlari bo'ylab siniq chiziqli integral
Potensial maydonda integral yo'lga bog'liq bo'lmagani uchun $(0,0,0) \to (x,y,z)$ nuqtaga quyidagi 3 bo'lakli siniq chiziq orqali boramiz:
1. $M_0(0,0,0) \to M_1(x,0,0)$: bu yerda $y=0, z=0, dy=0, dz=0$;
2. $M_1(x,0,0) \to M_2(x,y,0)$: bu yerda $x=\text{const}, z=0, dx=0, dz=0$;
3. $M_2(x,y,0) \to M(x,y,z)$: bu yerda $x=\text{const}, y=\text{const}, dx=0, dy=0$.

$$
U(x, y, z) = \int_0^x P(t, 0, 0) dt + \int_0^y Q(x, t, 0) dt + \int_0^z R(x, y, t) dt
$$
Integrallarni qo'yamiz:
1. $\int_0^x (2t \cdot 0 + 0^2) dt = \int_0^x 0 \, dt = 0$;
2. $\int_0^y (x^2 + 3t^2) dt = \left[ x^2 t + t^3 \right]_0^y = x^2 y + y^3$;
3. $\int_0^z (2xt + 1) dt = \left[ xt^2 + t \right]_0^z = x z^2 + z$.

Hammasini qo'shamiz:
$$
U(x, y, z) = 0 + (x^2 y + y^3) + (x z^2 + z) = x^2 y + y^3 + x z^2 + z
$$
Ikkala usul ham soniyalar ichida bir xil mukammal natija berdi!

---

> [!WARNING] Imtihondagi tuzoqlar va ko'p uchraydigan xatoliklar
> 1. **Divergensiya bilan Rotorni adashtirish:** Potensial bo'lishi uchun $\operatorname{rot} \vec{F} = \vec{0}$ bo'lishi shart! Divergensiyaning nolga tengligi ($\operatorname{div} \vec{F} = 0$) esa maydonning **solenoidal** ekanligini bildiradi. Bular mutlaqo ikki xil xossa.
> 2. **Siniq chiziq bo'ylab integrallashda o'zgaruvchilarni adashtirish:** 2-integralda $x$o'zgarmas parametr sifatida saqlanib turishi shart, ko'pchilik talabalar 2-integralda ham$x$o'rniga$0$qo'yib$x^2 y$ hadini yo'qotib qo'yishadi!

---

## Mustaqil yechish uchun mashqlar

### 1-mashq
Ushbu maydonni solenoidalikga tekshiring:
$$
\vec{F} = (2x + y)\vec{i} + (3y - z)\vec{j} - 5z\vec{k}
$$

<details>
<summary>👉 Yechimni tekshirish</summary>

**Yechish:**
Divergensiyani hisoblaymiz:
$$
\operatorname{div} \vec{F} = \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z} = \frac{\partial}{\partial x}(2x+y) + \frac{\partial}{\partial y}(3y-z) + \frac{\partial}{\partial z}(-5z)
$$
$$
= 2 + 3 - 5 = 0
$$
Divergensiya aynan nolga teng.

**Javob:** Maydon **solenoidal**dir.

</details>

### 2-mashq
Maydon potensialini toping:
$$
\vec{F} = (y+z)\vec{i} + (x+z)\vec{j} + (x+y)\vec{k}
$$

<details>
<summary>👉 Yechimni tekshirish</summary>

**Yechish:**
$\operatorname{rot} \vec{F} = \vec{i}(1-1) - \vec{j}(1-1) + \vec{k}(1-1) = \vec{0}$. Maydon potensial.
Siniq chiziq formulasi bo'yicha:
$$
U(x, y, z) = \int_0^x (0+0) dt + \int_0^y (x+0) dt + \int_0^z (x+y) dt
$$
$$
= 0 + xy + (xz + yz) = xy + yz + zx + C
$$

**Javob:** $U(x, y, z) = xy + yz + zx + C$.

</details>
