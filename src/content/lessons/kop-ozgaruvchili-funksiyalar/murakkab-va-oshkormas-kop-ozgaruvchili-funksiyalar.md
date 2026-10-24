---
title: "Murakkab va oshkormas ko'p o'zgaruvchili funksiyalarni differensiallash (Yakobian)"
module: "kop-ozgaruvchili-funksiyalar"
order: 6
description: "Ko'p o'zgaruvchili murakkab funksiyaning zanjir qoidasi, F(x,y)=0 va F(x,y,z)=0 oshkormas funksiyalar xususiy hosilalari hamda Yakobi determinanti (Yakobian)."
---

Amaliy va nazariy masalalarda funksiyaning argumentlari o'z navbatida boshqa erkli o'zgaruvchilarning funksiyalari bo'lishi yoki o'zgaruvchilar orasidagi bog'lanish oshkormas tenglama ko'rinishida berilishi ko'p uchraydi. Ushbu darsda murakkab funksiyalarni differensiallashning zanjir qoidasi, oshkormas funksiyalar hosilalari hamda Yakobi determinanti (Yakobian) tushunchalarini chuqur o'rganamiz.

---

## 1. Murakkab ko'p o'zgaruvchili funksiyani differensiallash (Zanjir qoidasi)

### 1.1. Oraliq argumentlar bitta erkli o'zgaruvchiga bog'liq bo'lgan hol

Faraz qilaylik, $z = f(x, y)$ differensiallanuvchi funksiya bo'lib, uning $x$ va $y$ argumentlari o'z navbatida $t$ erkli o'zgaruvchining differensiallanuvchi funksiyalari bo'lsin:

$$
x = \varphi(t), \quad y = \psi(t)
$$

U holda $z = f(\varphi(t), \psi(t))$ bitta $t$ o'zgaruvchining murakkab funksiyasi bo'ladi va uning **to'liq hosilasi** quyidagi formula bilan topiladi:

$$
\frac{dz}{dt} = \frac{\partial z}{\partial x}\frac{dx}{dt} + \frac{\partial z}{\partial y}\frac{dy}{dt}
$$

> [!NOTE]
> Agar $z = f(x, y)$ funksiyada $y = \varphi(x)$ bo'lsa (ya'ni $x$ erkli o'zgaruvchi, $y$ esa $x$ ning funksiyasi bo'lsa), u holda $z$ ning $x$ bo'yicha to'liq hosilasi $\frac{dz}{dx}$ xususiy hosila $\frac{\partial z}{\partial x}$ dan farq qiladi:
> 
$$
> \frac{dz}{dx} = \frac{\partial z}{\partial x} + \frac{\partial z}{\partial y}\frac{dy}{dx}
> 
$$

### 1.2. Oraliq argumentlar bir nechta erkli o'zgaruvchiga bog'liq bo'lgan hol

Agar $z = f(x, y)$ funksiyada $x = \varphi(u, v)$ va $y = \psi(u, v)$ bo'lsa, u holda $z$ funksiya $u$ va $v$ erkli o'zgaruvchilarning murakkab funksiyasi bo'ladi. Uning $u$ va $v$ bo'yicha xususiy hosilalari **zanjir qoidasi**ga ko'ra quyidagicha hisoblanadi:

$$
\frac{\partial z}{\partial u} = \frac{\partial z}{\partial x}\frac{\partial x}{\partial u} + \frac{\partial z}{\partial y}\frac{\partial y}{\partial u}, \qquad \frac{\partial z}{\partial v} = \frac{\partial z}{\partial x}\frac{\partial x}{\partial v} + \frac{\partial z}{\partial y}\frac{\partial y}{\partial v}
$$

Umuman olganda, $w = f(x_1, x_2, \dots, x_n)$ funksiyaning har bir $x_k = x_k(t_1, t_2, \dots, t_m)$ argumenti $m$ ta o'zgaruvchiga bog'liq bo'lsa:

$$
\frac{\partial w}{\partial t_j} = \sum_{k=1}^{n} \frac{\partial w}{\partial x_k}\frac{\partial x_k}{\partial t_j}, \quad (j = 1, 2, \dots, m)
$$

### 1.3. Birinchi tartibli to'liq differensialning invariantlik xossasi

Birinchi tartibli to'liq differensial:

$$
dz = \frac{\partial z}{\partial x}dx + \frac{\partial z}{\partial y}dy
$$

ko'rinishini $x$ va $y$ erkli o'zgaruvchilar bo'lganda ham, boshqa $u, v$ o'zgaruvchilarning funksiyasi bo'lganda ham o'zgartirmay saqlaydi. Biroq ikkinchi tartibli differensial $d^2z$ uchun bunday invariantlik xossasi umumiy holda bajarilmaydi, chunki $x$ va $y$ erkli bo'lmaganda $d^2x \neq 0$ va $d^2y \neq 0$ bo'ladi:

$$
d^2z = \frac{\partial^2 z}{\partial x^2}dx^2 + 2\frac{\partial^2 z}{\partial x \partial y}dx\,dy + \frac{\partial^2 z}{\partial y^2}dy^2 + \frac{\partial z}{\partial x}d^2x + \frac{\partial z}{\partial y}d^2y
$$

---

## 2. Oshkormas funksiyalarni differensiallash

### 2.1. Bir o'zgaruvchili oshkormas funksiya: $F(x, y) = 0$

Agar $y = f(x)$ funksiya $F(x, y) = 0$ tenglama orqali oshkormas ko'rinishda berilgan bo'lsa, hamda $F(x, y)$ funksiya uzluksiz xususiy hosilalarga ega bo'lib, $F'_y(x, y) \neq 0$ shart bajarilsa, u holda:

$$
\frac{dy}{dx} = -\frac{F'_x(x, y)}{F'_y(x, y)}
$$

**Isbot g'oyasi:** $F(x, y(x)) = 0$ ayniyatni $x$ bo'yicha to'liq differensiallasak:

$$
F'_x(x, y) + F'_y(x, y)\cdot y'_x = 0 \implies y'_x = -\frac{F'_x}{F'_y}
$$

Ikkinchi tartibli hosila uchun:

$$
\frac{d^2y}{dx^2} = -\frac{F''_{xx}(F'_y)^2 - 2F''_{xy}F'_x F'_y + F''_{yy}(F'_x)^2}{(F'_y)^3}
$$

### 2.2. Ikki o'zgaruvchili oshkormas funksiya: $F(x, y, z) = 0$

Agar $z = f(x, y)$ funksiya $F(x, y, z) = 0$ tenglama bilan oshkormas berilgan bo'lsa va $F'_z(x, y, z) \neq 0$ bo'lsa, uning xususiy hosilalari quyidagicha topiladi:

$$
\frac{\partial z}{\partial x} = -\frac{F'_x(x, y, z)}{F'_z(x, y, z)}, \qquad \frac{\partial z}{\partial y} = -\frac{F'_y(x, y, z)}{F'_z(x, y, z)}
$$

> [!TIP]
> Oshkormas funksiyalarning hosilalarini topishda ikki xil yondashuvdan foydalanish mumkin:
> 1. Tayyor formulalar $\frac{\partial z}{\partial x} = -\frac{F'_x}{F'_z}$ va $\frac{\partial z}{\partial y} = -\frac{F'_y}{F'_z}$ ni qo'llash.
> 2. Berilgan tenglamaning ikkala qismidan to'liq differensial $dF = 0$ ni olib, $dz$ ni $dx$ va $dy$ orqali ifodalash.

---

## 3. Yakobi matritsasi va Yakobi determinanti (Yakobian)

Faraz qilaylik, $n$ ta o'zgaruvchili $n$ ta differensiallanuvchi funksiyalar sistemasi berilgan bo'lsin:

$$
\begin{cases}
y_1 = f_1(x_1, x_2, \dots, x_n) \\
y_2 = f_2(x_1, x_2, \dots, x_n) \\
\dots\dots\dots\dots\dots\dots \\
y_n = f_n(x_1, x_2, \dots, x_n)
\end{cases}
$$

Bu funksiyalarning barcha birinchi tartibli xususiy hosilalaridan tuzilgan $n$-tartibli determinant **funksiyalar sistemasining Yakobi determinanti** yoki qisqacha **Yakobian** deb ataladi:

$$
J = \frac{D(y_1, y_2, \dots, y_n)}{D(x_1, x_2, \dots, x_n)} =
\begin{vmatrix}
\dfrac{\partial y_1}{\partial x_1} & \dfrac{\partial y_1}{\partial x_2} & \dots & \dfrac{\partial y_1}{\partial x_n} \\[8pt]
\dfrac{\partial y_2}{\partial x_1} & \dfrac{\partial y_2}{\partial x_2} & \dots & \dfrac{\partial y_2}{\partial x_n} \\[8pt]
\dots & \dots & \dots & \dots \\[4pt]
\dfrac{\partial y_n}{\partial x_1} & \dfrac{\partial y_n}{\partial x_2} & \dots & \dfrac{\partial y_n}{\partial x_n}
\end{vmatrix}
$$

> [!IMPORTANT]
> **Yakobianning asosiy xossalari va tatbiqlari:**
> 1. **Teskari almashtirish:** Agar $J \neq 0$ bo'lsa, berilgan almashtirish nuqta atrofida o'zaro bir qiymatli (lokal teskarilanuvchi) bo'ladi va teskari almashtirish yakobiani:
>    
$$
>    \frac{D(x_1, \dots, x_n)}{D(y_1, \dots, y_n)} = \left(\frac{D(y_1, \dots, y_n)}{D(x_1, \dots, x_n)}\right)^{-1}
>    
$$
> 2. **Ko'p karrali integrallarda o'zgaruvchini almashtirish:** Tekislikda $(x, y) \to (u, v)$ almashtirish bajarilganda yuza elementi $dx\,dy = |J|\,du\,dv$ ko'rinishda o'zgaradi.
> 3. **Funksional bog'liqlik mezoni:** Agar sohada $J \equiv 0$ bo'lsa, $y_1, y_2, \dots, y_n$ funksiyalar o'zaro funksional bog'liq bo'ladi.

---

## 4. Namuna sifatida yechilgan misollar

### 1-misol. Murakkab funksiyaning xususiy hosilalari
$z = e^{x^2 - y^2}$ funksiya berilgan, bunda $x = u \cos v$, $y = u \sin v$. $\frac{\partial z}{\partial u}$ va $\frac{\partial z}{\partial v}$ ni toping.

**Yechish (1-usul — Zanjir qoidasi):**
Avval xususiy hosilalarni hisoblaymiz:

$$
\frac{\partial z}{\partial x} = 2x e^{x^2 - y^2}, \qquad \frac{\partial z}{\partial y} = -2y e^{x^2 - y^2}
$$

$$
\frac{\partial x}{\partial u} = \cos v, \quad \frac{\partial x}{\partial v} = -u\sin v, \qquad \frac{\partial y}{\partial u} = \sin v, \quad \frac{\partial y}{\partial v} = u\cos v
$$

Zanjir qoidasiga qo'yamiz:

$$
\frac{\partial z}{\partial u} = 2x e^{x^2-y^2}\cos v - 2y e^{x^2-y^2}\sin v = 2u(\cos^2 v - \sin^2 v)e^{u^2\cos 2v} = 2u\cos(2v)e^{u^2\cos 2v}
$$

$$
\frac{\partial z}{\partial v} = 2x e^{x^2-y^2}(-u\sin v) - 2y e^{x^2-y^2}(u\cos v) = -4u^2\sin v\cos v \, e^{u^2\cos 2v} = -2u^2\sin(2v)e^{u^2\cos 2v}
$$

**Yechish (2-usul — Bevosita o'rniga qo'yish):**
$x^2 - y^2 = u^2(\cos^2 v - \sin^2 v) = u^2\cos 2v \implies z = e^{u^2\cos 2v}$. Bundan bevosita differensiallab yuqoridagi natijalarni olamiz.

---

### 2-misol. Oshkormas funksiya hosilalarini topish
$x^3 + y^3 + z^3 - 3xyz = 4$ tenglama bilan berilgan $z(x, y)$ funksiyaning $\frac{\partial z}{\partial x}$ va $\frac{\partial z}{\partial y}$ xususiy hosilalarini $(1, 1, 2)$ nuqtada (yoki umumiy ko'rinishda) toping.

**Yechish (1-usul — Formula orqali):**
$F(x, y, z) = x^3 + y^3 + z^3 - 3xyz - 4$ deb olamiz:

$$
F'_x = 3x^2 - 3yz, \qquad F'_y = 3y^2 - 3xz, \qquad F'_z = 3z^2 - 3xy
$$

Demak:

$$
\frac{\partial z}{\partial x} = -\frac{3x^2 - 3yz}{3z^2 - 3xy} = \frac{yz - x^2}{z^2 - xy}, \qquad \frac{\partial z}{\partial y} = -\frac{3y^2 - 3xz}{3z^2 - 3xy} = \frac{xz - y^2}{z^2 - xy}
$$

**Yechish (2-usul — To'liq differensial orqali):**
Tenglamaning ikkala tomonidan to'liq differensial olamiz:

$$
3x^2 dx + 3y^2 dy + 3z^2 dz - 3(yz\,dx + xz\,dy + xy\,dz) = 0
$$

$$
(z^2 - xy)dz = (yz - x^2)dx + (xz - y^2)dy \implies dz = \frac{yz - x^2}{z^2 - xy}dx + \frac{xz - y^2}{z^2 - xy}dy
$$

Bundan $dz = \frac{\partial z}{\partial x}dx + \frac{\partial z}{\partial y}dy$ taqqoslash orqali xuddi shu natija kelib chiqadi.

---

### 3-misol. Qutb va sferik koordinatalar Yakobiani
Qutb koordinatalari $x = r\cos\varphi, \, y = r\sin\varphi$ uchun Yakobianni hisoblang.

**Yechish:**

$$
J = \frac{D(x, y)}{D(r, \varphi)} =
\begin{vmatrix}
\dfrac{\partial x}{\partial r} & \dfrac{\partial x}{\partial \varphi} \\[8pt]
\dfrac{\partial y}{\partial r} & \dfrac{\partial y}{\partial \varphi}
\end{vmatrix}
=
\begin{vmatrix}
\cos\varphi & -r\sin\varphi \\
\sin\varphi & r\cos\varphi
\end{vmatrix}
= r\cos^2\varphi + r\sin^2\varphi = r
$$

---

## 5. O'z-o'zini tekshirish savollari

1. $z = f(x, y)$ funksiyada $y = \varphi(x)$ bo'lsa, xususiy hosila $\frac{\partial z}{\partial x}$ va to'liq hosila $\frac{dz}{dx}$ orasida qanday farq bor?
2. Nima sababdan ikkinchi tartibli to'liq differensial $d^2z$ murakkab funksiya uchun shakl invariantligini saqlamaydi?
3. $F(x, y, z) = 0$ tenglama nuqta atrofida $z = z(x, y)$ oshkormas funksiyani bir qiymatli aniqlashi uchun qaysi shart bajarilishi zarur?
4. Ikki o'zgaruvchili ikkita funksiya sistemasining Yakobiani aynan nolga teng bo'lsa, bu funksiyalar haqida nima deyish mumkin?

---

## 6. Mustaqil yechish uchun masalalar

1. **Masala:** $z = \arctan\frac{x}{y}$, bunda $x = t^2$, $y = 2t$. $\frac{dz}{dt}$ ni $t = 1$ nuqtada toping.
   - *Javob:* $\frac{dz}{dt} = \frac{1}{t^2 + 4}$, $t = 1$ da $\frac{1}{5}$.
2. **Masala:** $z = \ln(x^2 + y^2)$, bunda $x = u + v$, $y = u - v$. $\frac{\partial z}{\partial u}$ va $\frac{\partial z}{\partial v}$ ni toping.
   - *Javob:* $\frac{\partial z}{\partial u} = \frac{2u}{u^2 + v^2}$, $\frac{\partial z}{\partial v} = \frac{2v}{u^2 + v^2}$.
3. **Masala:** $e^z - xyz = 0$ tenglama bilan berilgan $z(x, y)$ oshkormas funksiyaning $\frac{\partial z}{\partial x}$ va $\frac{\partial z}{\partial y}$ hosilalarini toping.
   - *Javob:* $\frac{\partial z}{\partial x} = \frac{yz}{e^z - xy} = \frac{z}{x(z - 1)}$, $\frac{\partial z}{\partial y} = \frac{z}{y(z - 1)}$.
4. **Masala:** $u = x^2 - y^2$, $v = 2xy$ almashtirish uchun $\frac{D(u, v)}{D(x, y)}$ Yakobianni hisoblang.
   - *Javob:* $J = 4(x^2 + y^2)$.
5. **Masala:** Silindrik koordinatalar $x = r\cos\varphi, \, y = r\sin\varphi, \, z = z$ uchun $\frac{D(x, y, z)}{D(r, \varphi, z)}$ Yakobianni toping.
   - *Javob:* $J = r$.
