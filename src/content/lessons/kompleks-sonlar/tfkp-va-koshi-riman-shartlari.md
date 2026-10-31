---
title: "TFKP: Koshi-Riman shartlari va kompleks integrallar"
module: "kompleks-sonlar"
order: 5
description: "Kompleks o'zgaruvchili funksiyalar nazariyasi (TFKP), analitik funksiya tushunchasi, Koshi-Riman differensiallanish shartlari, garmonik funksiyalar, Koshi integral formulasi va qoldiqlar (vichetlar) nazariyasi."
---

## Kirish: Haqiqiy sonlar torlik qilganda

Haqiqiy sonlar to'plamida $\sqrt{-1}$ mavjud emas, $e^x = -2$ tenglama yechimga ega emas, $\sin x$ ning qiymati esa hech qachon $1$ dan oshmaydi.
Lekin kompleks o'zgaruvchilar olamiga o'tganimizda matematikaning eng ajoyib, simmetrik va chiroyli dunyosi ochiladi!

Kompleks o'zgaruvchili funksiyalar nazariyasi (**TFKP**) elektrodinamika, aerodinamika (samolyot qanotlarini hisoblash — Jukovskiy funksiyasi), kvant fizikasi va murakkab hisoblash algoritmlarining poydevoridir.

---

## 1. Kompleks o'zgaruvchili funksiya nima?

Agar $z = x + iy$ kompleks son bo'lsa, kompleks funksiya $w = f(z)$ ham ikki qismdan — haqiqiy va mavhum qismdan iborat bo'ladi:

$$
w = f(z) = u(x, y) + i \cdot v(x, y)
$$

bu yerda:
* $u(x, y) = \operatorname{Re} f(z)$ — haqiqiy qism;
* $v(x, y) = \operatorname{Im} f(z)$ — mavhum qism.

**Misol:** $f(z) = z^2$ bo'lsin.
$$
f(z) = (x + iy)^2 = x^2 + 2ixy + i^2 y^2 = (x^2 - y^2) + i(2xy)
$$
Demak: $u(x, y) = x^2 - y^2$, $v(x, y) = 2xy$.

---

## 2. Koshi-Riman shartlari (Analitiklik mezoni)

Haqiqiy analizda funksiya hosilaga ega bo'lishi oddiy hol. Lekin kompleks analizda $f'(z)$ hosilaning mavjud bo'lishi juda qat'iy va chuqur talab hisoblanadi.

> [!IMPORTANT]
> **Koshi–Riman (D'Alamber–Eyler) teoremasi:**
> $w = f(z) = u(x, y) + iv(x, y)$ funksiya biror sohada kompleks hosilaga ega bo'lishi (ya'ni **analitik** bo'lishi) uchun uning $u$ va $v$ qismlari uzluksiz xususiy hosilalarga ega bo'lishi va quyidagi **Koshi–Riman shartlari** bajarilishi zarur va yetarli:
> 
$$
> \frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}
> 
$$
> 
$$
> \frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}
> 
$$

Agar bu shartlar bajarilsa, kompleks hosila quyidagicha hisoblanadi:
$$
f'(z) = \frac{\partial u}{\partial x} + i \frac{\partial v}{\partial x} = \frac{\partial v}{\partial y} - i \frac{\partial u}{\partial y}
$$

### Garmonik funksiyalar:
Koshi-Riman shartlaridan ikkinchi tartibli hosila olib qo'shsak, Laplas tenglamasi kelib chiqadi:
$$
\Delta u = \frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0, \quad \Delta v = \frac{\partial^2 v}{\partial x^2} + \frac{\partial^2 v}{\partial y^2} = 0
$$
Demak, ixtiyoriy analitik funksiyaning haqiqiy va mavhum qismlari **garmonik funksiyalar**dir!

---

## 3. Kompleks integral va Koshi teoremasi

Kompleks tekislikdagi $L$ kontur bo'yicha integral 2 ta oddiy 2-tur egri chiziqli integralga ajraladi:
$$
\int_L f(z) \, dz = \int_L (u + iv)(dx + i\,dy) = \int_L (u\,dx - v\,dy) + i \int_L (v\,dx + u\,dy)
$$

### Koshining asosiy integral teoremasi:
Agar $f(z)$ bir bog'lamli $D$ sohada **analitik** bo'lsa, har qanday yopiq $L$ kontur bo'yicha integral **nolga teng** bo'ladi:
$$
\oint_L f(z) \, dz = 0
$$

### Koshining integral formulasi:
Analitik funksiyaning soha ichidagi ixtiyoriy $z_0$ nuqtadagi qiymati faqat chegaradagi qiymatlari orqali to'liq aniqlanadi!
$$
f(z_0) = \frac{1}{2\pi i} \oint_L \frac{f(z)}{z - z_0} \, dz
$$
Bu formula yordamida maxsus integralni hisoblash qoidasi kelib chiqadi:
$$
\oint_L \frac{f(z)}{z - z_0} \, dz = 2\pi i \cdot f(z_0)
$$

---

## 4. Qoldiqlar (Vichetlar) nazariyasi

Agar $f(z)$ funksiya kontur ichida chekli sondagi $z_k$ maxsus (uzilish) nuqtalariga ega bo'lsa:
$$
\oint_L f(z) \, dz = 2\pi i \sum_{k=1}^n \operatorname{Res} [f(z), z_k]
$$

Oddiy qutb (1-tartibli maxsus nuqta) uchun qoldiq:
$$
\operatorname{Res}[f(z), z_0] = \lim_{z \to z_0} (z - z_0) f(z)
$$

---

## 5. To'liq yechilgan namunaviy masalalar

### 1-misol: Koshi-Riman shartini tekshirish
**Shart:** $f(z) = z^2$ funksiyaning analitikligini tekshiring va hosilasini toping.

**Yechish:**
1. $u(x, y) = x^2 - y^2$, $v(x, y) = 2xy$.
2. Xususiy hosilalarni olamiz:
   * $\frac{\partial u}{\partial x} = 2x$, $\frac{\partial v}{\partial y} = 2x \implies \frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$ ✅
   * $\frac{\partial u}{\partial y} = -2y$, $\frac{\partial v}{\partial x} = 2y \implies \frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$ ✅
3. Koshi-Riman shartlari butun tekislikda bajarilmoqda. Demak, $f(z) = z^2$ — analitik funksiya!
4. Hosilasi:
   
$$
   f'(z) = \frac{\partial u}{\partial x} + i\frac{\partial v}{\partial x} = 2x + i(2y) = 2(x + iy) = 2z
   
$$
**Javob:** Funksiya analitik, $\mathbf{f'(z) = 2z}$.

---

### 2-misol: Koshi integral formulasi
**Shart:** $\oint_{|z|=2} \frac{e^z}{z - 1} \, dz$ integralni hisoblang, bu yerda kontur — markazi 0 da va radiusi 2 bo'lgan aylana.

**Yechish:**
1. Maxsus nuqta: $z_0 = 1$.
2. Ushbu $z_0 = 1$ nuqta $|z| = 2$ aylananing ichida yotadimi? Ha, chunki $|1| = 1 < 2$.
3. $f(z) = e^z$ funksiya esa kontur ichida hamma joyda analitik.
4. Koshining integral formulasiga ko'ra:
$$
\oint_L \frac{f(z)}{z - z_0} \, dz = 2\pi i \cdot f(z_0)
$$
$$
\oint_{|z|=2} \frac{e^z}{z - 1} \, dz = 2\pi i \cdot e^1 = 2\pi e i
$$
**Javob:** $\mathbf{2\pi e i}$

---

## ⚠️ Imtihondagi tuzoqlar (Tipik talaba xatolari)

> [!WARNING]
> 1. **Koshi-Riman formulasida minus ishorani unutish:** Ikkinchi shartda minus borligini unutmang: $\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$. Agar minus tushib qolsa, funksiya noanalitik deb xato xulosa qilinadi.
> 2. **Maxsus nuqtaning kontur ichida yoki tashqarisida ekani:** Agar $z_0$ maxsus nuqta berilgan konturning **tashqarisida** bo'lsa, integral Koshining asosiy teoremasiga ko'ra darhol **0 ga teng** bo'ladi! Uni hisoblab o'tirish shart emas.

---

## ✍️ O'zingizni sinab ko'ring (Mustaqil mashq)

**Masala:** $f(z) = \bar{z} = x - iy$ (qo'shma kompleks son) funksiyasi analitikmi? Koshi-Riman shartlari yordamida tekshiring.

<details>
<summary>👉 To'liq yechimni ko'rish (Tekshirish)</summary>

**Yechish bosqichlari:**
1. Haqiqiy va mavhum qismlar:
   $u(x, y) = x$, $v(x, y) = -y$.
2. Hosilalarni olamiz:
   * $\frac{\partial u}{\partial x} = 1$
   * $\frac{\partial v}{\partial y} = -1$
3. Koshi-Riman 1-shartini tekshiramiz:
   
$$
   \frac{\partial u}{\partial x} \neq \frac{\partial v}{\partial y} \quad (1 \neq -1)
   
$$
4. Shart bajarilmadi! Demak, $f(z) = \bar{z}$ funksiyasi kompleks tekislikning **hech bir nuqtasida analitik emas** (kompleks hosilaga ega emas).

**Javob:** **Analitik emas** (Koshi-Riman sharti bajarilmaydi).

</details>
