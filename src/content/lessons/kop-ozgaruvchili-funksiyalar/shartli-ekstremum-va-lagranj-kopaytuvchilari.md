---
title: "Shartli ekstremum va Lagranj ko'paytuvchilari usuli"
description: "Cheklovlar shartida ekstremumni topish, Lagranj funksiyasi va ikkinchi differensial d^2L orqali tekshirish."
module: "kop-ozgaruvchili-funksiyalar"
order: 12
---

## 📌 Kirish va Muhandislik-Iqtisodiy Ahamiyati

Amaliyotda ko'pincha o'zgaruvchilari mutlaqo erkli bo'lmagan, balki ma'lum bir chegaralovchi shartlarni (tenglamalarni) qanoatlantirishi lozim bo'lgan funksiyalarning eng katta va eng kichik qiymatlarini topish talab etiladi. Bunday masalalar **shartli ekstremum masalalari** deb ataladi:

- **Iqtisodiyotda:** Berilgan cheklangan byudjet (cheklov sharti) doirasida iste'molchining umumiy nafliligini yoki korxonaning sof foydasini maksimallashtirish.
- **Mashinasozlikda:** Berilgan mustahkamlik talablarini bajargan holda detallarning og'irligini minimallashtirish.
- **Fizika va nazariy mexanikada:** Moddiy nuqtaning silliq sirt bo'ylab harakatida energiyaning eng kichik harakat prinsipi (Gamilton prinsipi).

Oddiy ekstremumda funksiyaning grafigi bo'yicha eng yuqori nuqta (cho'qqi) qidirilsa, shartli ekstremumda shu sirtning biror yo'l (chiziq) bilan kesishmasidagi eng baland nuqta izlanadi. Buyuk frantsuz matematigi **Jozef Lui Lagranj** barcha cheklovlarni maqsad funksiyasiga sun'iy ko'paytuvchilar orqali kiritishning universal usulini ishlab chiqdi.

---

## 📐 Asosiy Nazariya: Lagranj Usuli va Ekstremum Shartlari

Faraz qilaylik, $z = f(x, y)$ maqsad funksiyasining $\phi(x, y) = 0$ bog'lanish (cheklov) tenglamasini qanoatlantiruvchi nuqtalardagi ekstremumini topish talab qilingan bo'lsin.

### 1. Geometrik Ma'nosi
Ekstremum nuqtasida maqsad funksiyasining sath chizig'i $f(x, y) = C$ va cheklov chizig'i $\phi(x, y) = 0$ bir-biriga **o'zaro urinadi**. Bu shuni anglatadiki, ularning gradient vektorlari kollinear (parallel) bo'lishi shart:
$$
\nabla f(x, y) = -\lambda \nabla \phi(x, y)
$$
bu yerda $\lambda$ — **Lagranj ko'paytuvchisi** deb ataluvchi noma'lum skalyar son.

---

### 2. Lagranj Funksiyasi va Zaruriy Shart
Masalani yechish uchun **Lagranj funksiyasi** tuziladi:
$$
L(x, y, \lambda) = f(x, y) + \lambda \phi(x, y)
$$

> **Zaruriy shart (Statsionar nuqtalar):**
> Shartli ekstremum nuqtasida Lagranj funksiyasining barcha xususiy hosilalari nolga teng bo'lishi shart:
> $$
> \begin{cases}
> \frac{\partial L}{\partial x} = \frac{\partial f}{\partial x} + \lambda \frac{\partial \phi}{\partial x} = 0 \\[2mm]
> \frac{\partial L}{\partial y} = \frac{\partial f}{\partial y} + \lambda \frac{\partial \phi}{\partial y} = 0 \\[2mm]
> \frac{\partial L}{\partial \lambda} = \phi(x, y) = 0
> \end{cases}
> $$
Ushbu 3 ta nochiziqli tenglamalar sistemasini yechib, statsionar nuqtalar $M_0(x_0, y_0)$ va unga mos $\lambda_0$ ko'paytuvchisi aniqlanadi.

---

### 3. Yetarli Shart: Ikkinchi Differensial $d^2 L$ orqali

Statsionar $M_0(x_0, y_0, \lambda_0)$ nuqtada ekstremum turini aniqlash uchun Lagranj funksiyasining ikkinchi differensiali tekshiriladi:
$$
d^2 L = \frac{\partial^2 L}{\partial x^2} dx^2 + 2 \frac{\partial^2 L}{\partial x \partial y} dx dy + \frac{\partial^2 L}{\partial y^2} dy^2
$$

**Muhim qoida:** Differensiallar $dx$ va $dy$ mutlaqo erkli emas! Ular bog'lanish tenglamasining differensiali orqali bog'langan:
$$
d\phi = \frac{\partial \phi}{\partial x} dx + \frac{\partial \phi}{\partial y} dy = 0 \implies dy = -\frac{\phi_x}{\phi_y} dx
$$
Ushbu bog'liqlik $d^2 L$ ga qo'yilgach, u faqat $dx^2$ ga bog'liq bo'lib qoladi:
- Agar $d^2 L > 0$ bo'lsa $\implies$ $M_0$ nuqtada **shartli minimum**;
- Agar $d^2 L < 0$ bo'lsa $\implies$ $M_0$ nuqtada **shartli maksimum**.

Shuningdek, **Chegaralangan Gesse determinanti (Bordered Hessian)** orqali tekshirish ham mumkin:
$$
\bar{H} = \begin{vmatrix} 0 & \phi_x & \phi_y \\ \phi_x & L_{xx} & L_{xy} \\ \phi_y & L_{yx} & L_{yy} \end{vmatrix}
$$
- Agar $\det(\bar{H}) > 0$ bo'lsa $\implies$ **shartli maksimum**;
- Agar $\det(\bar{H}) < 0$ bo'lsa $\implies$ **shartli minimum**.

---

## 📝 Qadamma-qadam Yechilgan Amaliy Misollar

### 1-misol:
$z = x y$ funksiyasining $x + y = 2$ shartidagi shartli ekstremumini toping.

**Yechilishi:**
1. Bog'lanish tenglamasi: $\phi(x, y) = x + y - 2 = 0$.
2. Lagranj funksiyasini tuzamiz:
   $$
   L(x, y, \lambda) = xy + \lambda(x + y - 2)
   $$
3. Zaruriy shart sistemasini tuzamiz:
   $$
   \begin{cases}
   L'_x = y + \lambda = 0 \implies y = -\lambda \\
   L'_y = x + \lambda = 0 \implies x = -\lambda \\
   x + y - 2 = 0
   \end{cases}
   $$
4. $x = y$ ekanligini bog'lanish tenglamasiga qo'yamiz:
   $$
   x + x = 2 \implies 2x = 2 \implies x = 1, \quad y = 1
   $$
   Mos ko'paytuvchi: $\lambda = -1$. Yagona statsionar nuqta: $M_0(1; 1)$.
5. Ikkinchi tartibli hosilalarni hisoblaymiz:
   $$
   L''_{xx} = 0, \quad L''_{xy} = 1, \quad L''_{yy} = 0
   $$
   Demak, $d^2 L = 0 \cdot dx^2 + 2 \cdot 1 \cdot dx dy + 0 \cdot dy^2 = 2 dx dy$.
6. Bog'lanish differensiali: $d(x + y - 2) = dx + dy = 0 \implies dy = -dx$.
7. $dy$ ni $d^2 L$ ga qo'yamiz:
   $$
   d^2 L = 2 dx (-dx) = -2 dx^2
   $$
   Har qanday $dx \neq 0$ uchun $d^2 L = -2 dx^2 < 0$.
8. Demak, $M_0(1; 1)$ nuqtada **shartli maksimum** mavjud bo'lib, uning qiymati $z_{\max} = 1 \cdot 1 = 1$.

---

### 2-misol:
Koordinatalar boshidan $2x + 3y = 13$ to'g'ri chiziqqacha bo'lgan eng qisqa masofani toping.

**Yechilishi:**
1. Masofa kvadrati maqsad funksiyasi bo'ladi: $f(x, y) = x^2 + y^2$.
2. Cheklov: $\phi(x, y) = 2x + 3y - 13 = 0$.
3. Lagranj funksiyasi:
   $$
   L(x, y, \lambda) = x^2 + y^2 + \lambda(2x + 3y - 13)
   $$
4. Sistema:
   $$
   \begin{cases}
   L'_x = 2x + 2\lambda = 0 \implies x = -\lambda \\
   L'_y = 2y + 3\lambda = 0 \implies y = -\frac{3}{2}\lambda \\
   2x + 3y = 13
   \end{cases}
   $$
5. $x$ va $y$ ni cheklovga qo'yamiz:
   $$
   2(-\lambda) + 3\left(-\frac{3}{2}\lambda\right) = 13 \implies -2\lambda - \frac{9}{2}\lambda = 13 \implies -\frac{13}{2}\lambda = 13 \implies \lambda = -2
   $$
   U holda $x = 2, y = 3$. Statsionar nuqta: $M_0(2; 3)$.
6. Ikkinchi differensial:
   $$
   L''_{xx} = 2, \quad L''_{xy} = 0, \quad L''_{yy} = 2 \implies d^2 L = 2 dx^2 + 2 dy^2 > 0
   $$
   $d^2 L$ har qanday shartda qat'iy musbat bo'lgani uchun $M_0(2; 3)$ nuqtada **shartli minimum** erishiladi.
7. Eng qisqa masofa: $d = \sqrt{2^2 + 3^2} = \sqrt{13}$.

---

### 3-misol (Uch o'lchovli masala — Izoperimetrik masala):
Yig'indisi o'zgarmas $x + y + z = a$ ($x > 0, y > 0, z > 0$) bo'lgan uchta musbat son ko'paytmasi $u = x y z$ ning eng katta qiymatini toping.

**Yechilishi:**
1. $L(x, y, z, \lambda) = xyz + \lambda(x + y + z - a)$.
2. Hosilalar:
   $$
   \begin{cases}
   L'_x = yz + \lambda = 0 \implies \lambda = -yz \\
   L'_y = xz + \lambda = 0 \implies \lambda = -xz \\
   L'_z = xy + \lambda = 0 \implies \lambda = -xy \\
   x + y + z = a
   \end{cases}
   $$
3. Tenglamalardan: $yz = xz = xy$. $x, y, z > 0$ bo'lgani uchun:
   $$
   x = y = z
   $$
4. Cheklovga qo'ysak: $3x = a \implies x = y = z = \frac{a}{3}$.
5. Ko'paytmaning maksimal qiymati:
   $$
   u_{\max} = \left(\frac{a}{3}\right)^3 = \frac{a^3}{27}
   $$
*Geometrik xulosa: Qirralari yig'indisi o'zgarmas bo'lgan to'g'ri burchakli parallelepipedlar ichida kub eng katta hajmga ega bo'ladi.*

---

## ⚠️ Talabalar Ko'p Yo'l Qo'yadigan Xatolar

1. **Ikkinchi differensialda $dx$ va $dy$ ni mustaqil deb o'ylash:**
   $d^2 L$ ning ishorasini tekshirayotganda $d\phi = 0$ shartidan kelib chiqadigan $dy = -\frac{\phi_x}{\phi_y}dx$ bog'lanishini qo'yishni unutishadi. Natijada shartsiz ekstremumdek qaralib, egar nuqtalar minimum yoki maksimum deb noto'g'ri talqin qilinadi.
2. **Chegaralangan Gesse matritsasida ishora qoidasi:**
   Oddiy Gesse matritsasida minimum uchun determinant musbat bo'lardi. Chegaralangan $\bar{H}$ da esa aksincha: $\det(\bar{H}) < 0$ shartli minimumga, $\det(\bar{H}) > 0$ esa shartli maksimumga to'g'ri keladi!
3. **$\lambda$ o'zgaruvchisining ahamiyatini pasaytirish:**
   $\lambda$ soni shunchaki yordamchi son emas, iqtisodiyotda u cheklov resursining "marjinal narxi" (soyaviy bahosi — shadow price) deb ataladi va resurs bir birlik oshganda maqsad funksiya qanchaga o'sishini ko'rsatadi ($\frac{df_{\max}}{da} = -\lambda$).

---

## 🎯 Mustaqil Yechish Uchun Masalalar

1. $z = x^2 - y^2$ funksiyaning $y = 2x - 3$ to'g'ri chiziqdagi shartli ekstremumini toping.
2. $z = x^2 + y^2$ funksiyaning $x^2 + y^2 = 1$ aylanadagi shartli ekstremumlarini tahlil qiling.
3. Lagranj usuli bilan ellipsning $x^2/a^2 + y^2/b^2 = 1$ ichiga chizilgan eng katta yuzali to'g'ri to'rtburchak o'lchamlarini aniqlang.

<details style="margin-top: 1rem; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); cursor: pointer;">
<summary style="font-weight: 700; color: var(--primary);">Javoblar va Ko'rsatmalar</summary>

**1-masala:** $L = x^2 - y^2 + \lambda(y - 2x + 3)$.
$L'_x = 2x - 2\lambda = 0, L'_y = -2y + \lambda = 0 \implies x = 2y$.
$y = 2(2y) - 3 \implies 3y = 3 \implies y = 1, x = 2$.
$d^2 L = 2 dx^2 - 2 dy^2$. $dy = 2 dx \implies d^2 L = 2 dx^2 - 2(2dx)^2 = -6 dx^2 < 0$.
Javob: $M(2; 1)$ nuqtada shartli maksimum, $z_{\max} = 3$.

**2-masala:** Cheklov to'g'ridan-to'g'ri funksiya qiymatini o'zgarmas qiladi: $z \equiv 1$. Cheklov chizig'idagi har bir nuqta statsionar nuqta bo'lib, uning qiymati o'zgarmas 1 ga teng.

**3-masala:** To'g'ri to'rtburchak uchlari $(\pm x, \pm y)$ bo'lsa, yuzi $S = 4xy$.
Lagranj funksiyasi orqali yechilsa: $x = \frac{a}{\sqrt{2}}, y = \frac{b}{\sqrt{2}}$.
Maksimal yuza: $S_{\max} = 2ab$.

</details>

---

## 💡 Xulosa va Imtihon Maslahatlari

- Agar bog'lanish tenglamasidan bitta o'zgaruvchini osongina ifodalab bo'lsa (masalan, $y = 2 - x$), uni to'g'ridan-to'g'ri $f(x, y)$ ga qo'yib, bir o'zgaruvchili oddiy funksiyaga keltirish ko'pincha Lagranj usulidan ko'ra ancha tezroq yechim beradi.
- Ammo nochiziqli bog'lanishlarda ($x^2+y^2=R^2$) Lagranj usuli yagona va eng ishonchli vositadir.
