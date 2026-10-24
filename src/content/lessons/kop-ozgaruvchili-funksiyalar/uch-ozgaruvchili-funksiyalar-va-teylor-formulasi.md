---
title: "Uch o'zgaruvchili funksiyalar, sath sirtlari va ikki o'zgaruvchili Teylor formulasi"
module: "kop-ozgaruvchili-funksiyalar"
order: 9
description: "u = f(x,y,z) funksiyalar, sath chiziqlari va sath sirtlari, yuqori tartibli differensiallar hamda ko'p o'zgaruvchili funksiyani Teylor qatoriga yoyish."
---

Ko'p o'zgaruvchili funksiyalar nazariyasi faqat ikki o'zgaruvchili $z = f(x, y)$ funksiyalar bilan cheklanib qolmaydi. Fizika, mexanika va muhandislik masalalarida fazodagi skalyar maydonlar uch o'zgaruvchili $u = f(x, y, z)$ funksiyalar orqali tavsiflanadi. Shuningdek, murakkab ko'p o'zgaruvchili funksiyalarni nuqta atrofida ko'phadlar yordamida yaqinlashtirish uchun **Teylor formulasi** asosiy vosita bo'lib xizmat qiladi.

---

## 1. Uch o'zgaruvchili funksiyalar: $u = f(x, y, z)$

Fazodagi biror $V \subset \mathbb{R}^3$ sohada yotuvchi har bir $M(x, y, z)$ nuqtaga ma'lum qonuniyat bo'yicha yagona $u \in \mathbb{R}$ haqiqiy son mos qo'yilsa, $V$ sohada **uch o'zgaruvchili funksiya** $u = f(x, y, z)$ berilgan deyiladi.

### 1.1. Xususiy hosilalar va to'liq differensial

Uch o'zgaruvchili $u = f(x, y, z)$ funksiyaning birinchi tartibli xususiy hosilalari qolgan ikki o'zgaruvchini o'zgarmas deb hisoblab olinadi:

$$
\frac{\partial u}{\partial x} = f'_x(x, y, z), \qquad \frac{\partial u}{\partial y} = f'_y(x, y, z), \qquad \frac{\partial u}{\partial z} = f'_z(x, y, z)
$$

Funksiyaning **birinchi tartibli to'liq differensiali**:

$$
du = \frac{\partial u}{\partial x}dx + \frac{\partial u}{\partial y}dy + \frac{\partial u}{\partial z}dz
$$

---

## 2. Sath chiziqlari va sath sirtlari

Ikki o'zgaruvchili $z = f(x, y)$ funksiyaning grafigini $\mathbb{R}^3$ fazoda sirt sifatida tasvirlash mumkin, biroq uch o'zgaruvchili $u = f(x, y, z)$ funksiyaning grafigi 4 o'lchovli $\mathbb{R}^4$ fazoda joylashgani uchun uni bevosita chizib bo'lmaydi. Shu sababli funksiyaning geometrik xossalarini o'rganishda **sath chiziqlari** va **sath sirtlari**dan foydalaniladi.

- **Sath chizig'i (ikki o'zgaruvchili funksiya uchun):** $Oxy$ tekisligidagi shunday $(x, y)$ nuqtalar to'plamiki, ularda $z = f(x, y)$ funksiya aynan bir xil $C = \text{const}$ qiymatni qabul qiladi:

$$
f(x, y) = C
$$

Topografik xaritalardagi bir xil balandlikni tutashtiruvchi chiziqlar (**gorizontallar**), ob-havo xaritalaridagi **izobaralar** (bir xil bosim) va **izotermalar** (bir xil harorat) sath chiziqlariga yaqqol misoldir.

- **Sath sirti (uch o'zgaruvchili funksiya uchun):** Uch o'lchovli $Oxyz$ fazodagi shunday $(x, y, z)$ nuqtalar geometrik o'rniki, ularda $u = f(x, y, z)$ skalyar maydon o'zgarmas $C = \text{const}$ qiymatni saqlaydi:

$$
f(x, y, z) = C
$$

> [!IMPORTANT]
> **Gradiyent va sath sirtining ortogonallik xossasi:**
> Har bir $M_0(x_0, y_0, z_0)$ nuqtada funksiyaning gradiyent vektori:
> 
$$
> \operatorname{grad} u(M_0) = \nabla u(M_0) = \frac{\partial u}{\partial x}\vec{i} + \frac{\partial u}{\partial y}\vec{j} + \frac{\partial u}{\partial z}\vec{k}
> 
$$
> shu nuqtadan o'tuvchi $f(x, y, z) = C$ sath sirtiga (yoki ikki o'zgaruvchili holda sath chizig'iga) **perpendikulyar (normal)** yo'nalgan bo'ladi va funksiya eng tez o'sadigan yo'nalishni ko'rsatadi.

---

## 3. Yuqori tartibli to'liq differensiallar

Faraz qilaylik, $z = f(x, y)$ funksiya $n$-tartibli uzluksiz xususiy hosilalarga ega bo'lsin hamda $x$ va $y$ erkli o'zgaruvchilar bo'lsin ($dx = \text{const}, \, dy = \text{const}$). U holda differensial operatoridan foydalanib, $k$-tartibli to'liq differensialni ($k = 1, 2, \dots, n$) simvolik binom formulasi ko'rinishida yozish mumkin:

$$
d^k z = \left( \frac{\partial}{\partial x}dx + \frac{\partial}{\partial y}dy \right)^k z = \sum_{m=0}^{k} C_k^m \frac{\partial^k z}{\partial x^{k-m} \partial y^m} dx^{k-m} dy^m
$$

Xususan:
- **2-tartibli differensial:**

$$
d^2 z = \frac{\partial^2 z}{\partial x^2}dx^2 + 2\frac{\partial^2 z}{\partial x \partial y}dx\,dy + \frac{\partial^2 z}{\partial y^2}dy^2
$$

- **3-tartibli differensial:**

$$
d^3 z = \frac{\partial^3 z}{\partial x^3}dx^3 + 3\frac{\partial^3 z}{\partial x^2 \partial y}dx^2 dy + 3\frac{\partial^3 z}{\partial x \partial y^2}dx\,dy^2 + \frac{\partial^3 z}{\partial y^3}dy^3
$$

---

## 4. Ikki o'zgaruvchili funksiya uchun Teylor va Makloren formulalari

Faraz qilaylik, $z = f(x, y)$ funksiya $M_0(x_0, y_0)$ nuqtaning biror atrofida $(n+1)$-tartibigacha bo'lgan barcha uzluksiz xususiy hosilalarga ega bo'lsin. $\Delta x = dx = x - x_0$ va $\Delta y = dy = y - y_0$ deb belgilasak, **ikki o'zgaruvchili funksiya uchun Teylor formulasi** to'liq differensiallar orqali quyidagi ixcham ko'rinishda yoziladi:

$$
f(x, y) = f(x_0, y_0) + \frac{df(x_0, y_0)}{1!} + \frac{d^2 f(x_0, y_0)}{2!} + \dots + \frac{d^n f(x_0, y_0)}{n!} + R_n(x, y)
$$

Bu yerda $R_n(x, y)$ — Lagranj ko'rinishidagi qoldiq had ($0 < \theta < 1$):

$$
R_n(x, y) = \frac{1}{(n+1)!} d^{n+1} f(x_0 + \theta\Delta x, \, y_0 + \theta\Delta y)
$$

Yoyib yozilgan 2-tartibli Teylor yaqinlashishi (kvadratik approksimatsiya):

$$
\begin{aligned}
f(x, y) \approx f(x_0, y_0) &+ f'_x(x_0, y_0)(x - x_0) + f'_y(x_0, y_0)(y - y_0) \\
&+ \frac{1}{2!}\Big[ f''_{xx}(x_0, y_0)(x - x_0)^2 + 2f''_{xy}(x_0, y_0)(x - x_0)(y - y_0) + f''_{yy}(x_0, y_0)(y - y_0)^2 \Big]
\end{aligned}
$$

> [!TIP]
> Agar $x_0 = 0, \, y_0 = 0$ bo'lsa, Teylor formulasi **Makloren formulasi**ga aylanadi:
> 
$$
> f(x, y) = f(0, 0) + \frac{df(0, 0)}{1!} + \frac{d^2 f(0, 0)}{2!} + \dots + \frac{d^n f(0, 0)}{n!} + R_n(x, y)
> 
$$

---

## 5. Namuna sifatida yechilgan misollar

### 1-misol. Sath sirtlari oilasini aniqlash
$u = \frac{z}{x^2 + y^2}$ funksiyaning sath sirtlari qanday geometrik shakllardan iborat ekanligini aniqlang.

**Yechish:**
Ta'rifga ko'ra $u = C$ ($C = \text{const}$) deb olamiz:

$$
\frac{z}{x^2 + y^2} = C \implies z = C(x^2 + y^2), \quad (x^2 + y^2 \neq 0)
$$

- Agar $C = 0$ bo'lsa, sath sirti koordinatalar boshi $(0, 0, 0)$ olib tashlangan $z = 0$ ($Oxy$) tekisligidan iborat;
- Agar $C \neq 0$ bo'lsa, sath sirtlari uchi koordinatalar boshida ($O(0, 0, 0)$ nuqta chiqarib tashlangan) va simmetriya o'qi $Oz$ o'qi bo'lgan **aylanma paraboloidlar** oilasidan iborat bo'ladi.

---

### 2-misol. Ko'phadni nuqta atrofida Teylor formulasiga yoyish
$f(x, y) = x^2 - xy + 2y^2 - 3x + 4y + 1$ funksiyani $M_0(1, -1)$ nuqta atrofida $(x - 1)$ va $(y + 1)$ ning darajalari bo'yicha Teylor qatoriga yoying.

**Yechish:**
Funksiya 2-darajali ko'phad bo'lgani uchun uning 3- va undan yuqori tartibli barcha xususiy hosilalari nolga teng ($R_2 \equiv 0$).
1. Nuqtadagi funksiya qiymati:

$$
f(1, -1) = 1 - 1(-1) + 2(-1)^2 - 3(1) + 4(-1) + 1 = 1 + 1 + 2 - 3 - 4 + 1 = -2
$$

2. Birinchi tartibli xususiy hosilalar:

$$
f'_x = 2x - y - 3 \implies f'_x(1, -1) = 2(1) - (-1) - 3 = 0
$$

$$
f'_y = -x + 4y + 4 \implies f'_y(1, -1) = -1 + 4(-1) + 4 = -1
$$

3. Ikkinchi tartibli xususiy hosilalar:

$$
f''_{xx} = 2, \qquad f''_{xy} = -1, \qquad f''_{yy} = 4
$$

4. Teylor formulasiga qo'yamiz:

$$
\begin{aligned}
f(x, y) &= -2 + 0\cdot(x - 1) - 1\cdot(y + 1) + \frac{1}{2!}\Big[ 2(x - 1)^2 - 2(x - 1)(y + 1) + 4(y + 1)^2 \Big] \\
&= -2 - (y + 1) + (x - 1)^2 - (x - 1)(y + 1) + 2(y + 1)^2
\end{aligned}
$$

---

### 3-misol. Transsendent funksiyani Makloren formulasiga yoyish
$f(x, y) = e^x \cos y$ funksiyani $(0, 0)$ nuqta atrofida 2-tartibli hadlargacha Makloren formulasiga yoying.

**Yechish (1-usul — Xususiy hosilalar orqali):**
- $f(0, 0) = e^0 \cos 0 = 1$
- $f'_x = e^x \cos y \implies f'_x(0, 0) = 1$; $\quad f'_y = -e^x \sin y \implies f'_y(0, 0) = 0$
- $f''_{xx} = e^x \cos y \implies f''_{xx}(0, 0) = 1$
- $f''_{xy} = -e^x \sin y \implies f''_{xy}(0, 0) = 0$
- $f''_{yy} = -e^x \cos y \implies f''_{yy}(0, 0) = -1$

Demak:

$$
e^x \cos y = 1 + x + \frac{1}{2!}(x^2 - y^2) + o(x^2 + y^2) = 1 + x + \frac{x^2}{2} - \frac{y^2}{2} + o(x^2 + y^2)
$$

**Yechish (2-usul — Standart bir o'zgaruvchili Makloren yoyilmalarini ko'paytirish):**
$e^x = 1 + x + \frac{x^2}{2} + \dots$ va $\cos y = 1 - \frac{y^2}{2} + \dots$ yoyilmalarini ko'paytirib, 2-darajadan yuqori hadlarni tashlab yuborsak:

$$
e^x \cos y = \left(1 + x + \frac{x^2}{2} + \dots\right)\left(1 - \frac{y^2}{2} + \dots\right) = 1 + x + \frac{x^2}{2} - \frac{y^2}{2} + \dots
$$

---

## 6. O'z-o'zini tekshirish savollari

1. $z = f(x, y)$ funksiyaning sath chiziqlari bir-biri bilan kesishishi mumkinmi? Javobingizni asoslang.
2. Ikki o'zgaruvchili Teylor formulasining birinchi darajali (chiziqli) qismi geometrik jihatdan nimani ifodalaydi?
3. Nima uchun lokal ekstremumning yetarlilik sharti ($AC - B^2 > 0$) bevosita Teylor formulasining ikkinchi tartibli differensiali $d^2 f(M_0)$ ishorasidan kelib chiqadi?

---

## 7. Mustaqil yechish uchun masalalar

1. **Masala:** $u = x^2 + y^2 - z^2$ funksiyaning $C > 0$, $C = 0$ va $C < 0$ hollaridagi sath sirtlari qanday ikkinchi tartibli sirtlar ekanligini aniqlang.
   - *Javob:* $C > 0$ da bir pallali giperboloidlar; $C = 0$ da ikkinchi tartibli konus; $C < 0$ da ikki pallali giperboloidlar.
2. **Masala:** $z = x^3 y^2$ funksiyaning $d^2 z$ va $d^3 z$ yuqori tartibli to'liq differensiallarini toping.
   - *Javob:* $d^2 z = 6xy^2 dx^2 + 12x^2 y\,dx\,dy + 2x^3 dy^2$; $\quad d^3 z = 6y^2 dx^3 + 36xy\,dx^2 dy + 18x^2 dx\,dy^2$.
3. **Masala:** $f(x, y) = \ln(1 + x + y)$ funksiyani $(0, 0)$ nuqta atrofida 2-tartibli hadlargacha Makloren formulasiga yoying.
   - *Javob:* $\ln(1 + x + y) \approx x + y - \frac{1}{2}(x^2 + 2xy + y^2)$.
4. **Masala:** $f(x, y) = x^y$ funksiyani $M_0(1, 1)$ nuqta atrofida 2-tartibli hadlargacha Teylor formulasiga yoying.
   - *Javob:* $x^y \approx 1 + (x - 1) + (x - 1)(y - 1)$.
