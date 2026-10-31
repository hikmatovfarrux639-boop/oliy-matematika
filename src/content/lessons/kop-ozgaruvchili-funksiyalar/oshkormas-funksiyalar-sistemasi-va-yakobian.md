---
title: "Oshkormas funksiyalar sistemasi, Yakobian va funksional bog'liqlik"
description: "Tenglamalar sistemasi yordamida berilgan funksiyalar, Yakobi matritsasi va uning xossalari."
module: "kop-ozgaruvchili-funksiyalar"
order: 15
---

## 📌 Kirish va Amaliy-Geometrik Ma'nosi

Bitta $F(x, y) = 0$ tenglama tekislikda ma'lum bir chiziqni va oshkormas ko'rinishdagi $y = f(x)$ funksiyani ifodalashi bizga ma'lum. Biroq murakkab muhandislik tizimlarida bir vaqtning o'zida bir nechta parametrlarni bog'lovchi nochiziqli tenglamalar sistemasi yuzaga keladi:

- **Robototexnika va mexatronikada (Teskari kinematika):** Robot manipuliyatorining bo'g'in burchaklari $(\theta_1, \theta_2)$ va ishchi uchining fazoviy koordinatalari $(x, y)$ o'rtasidagi nochiziqli bog'lanishlar;
- **Termodinamikada:** Bosim ($P$), hajm ($V$), harorat ($T$) va entropiya ($S$) orasidagi termodinamik tenglamalar sistemasi;
- **Iqtisodiy muvozanat modellarida:** Talab va taklif funksiyalarining o'zaro bog'liq narxlar sistemasidagi oshkormas yechimlari.

Bunday sistemalarda ayrim o'zgaruvchilarni qolganlari orqali analitik tarzda ajratib (oshkor qilib) bo'lmaydi. Bu yerda nemis matematigi **Karl Gustav Yakobi** tomonidan fanga kiritilgan funksional determinant — **Yakobian** markaziy o'rin tutadi. U sistemadan oshkormas funksiyalarni ajratish mumkinligi va funksiyalarning o'zaro bog'liqligini tekshirishning eng universal mezonidir.

---

## 📐 Asosiy Nazariya: Yakobian va Oshkormas Funksiyalar

### 1. Yakobi Matritsasi va Yakobian

Faraz qilaylik, $m$ ta o'zgaruvchili $m$ ta funksiya berilgan bo'lsin: $u_i = f_i(x_1, x_2, \dots, x_m), \; i = 1, \dots, m$.
Ushbu funksiyalarning xususiy hosilalaridan tuzilgan kvadrat matritsaning determinanti **Yakobian** (funksional determinant) deb ataladi va quyidagicha belgilanadi:

$$
\frac{D(u_1, u_2, \dots, u_m)}{D(x_1, x_2, \dots, x_m)} = \begin{vmatrix}
\frac{\partial u_1}{\partial x_1} & \frac{\partial u_1}{\partial x_2} & \dots & \frac{\partial u_1}{\partial x_m} \\[2mm]
\frac{\partial u_2}{\partial x_1} & \frac{\partial u_2}{\partial x_2} & \dots & \frac{\partial u_2}{\partial x_m} \\[2mm]
\vdots & \vdots & \ddots & \vdots \\[2mm]
\frac{\partial u_m}{\partial x_1} & \frac{\partial u_m}{\partial x_2} & \dots & \frac{\partial u_m}{\partial x_m}
\end{vmatrix}
$$

Ikki o'zgaruvchili hol uchun ($u = u(x, y), v = v(x, y)$):
$$
\frac{D(u, v)}{D(x, y)} = \begin{vmatrix} \frac{\partial u}{\partial x} & \frac{\partial u}{\partial y} \\[2mm] \frac{\partial v}{\partial x} & \frac{\partial v}{\partial y} \end{vmatrix} = \frac{\partial u}{\partial x}\frac{\partial v}{\partial y} - \frac{\partial u}{\partial y}\frac{\partial v}{\partial x}
$$

---

### 2. Oshkormas Funksiyalar Sistemasi Teoremasi

Faraz qilaylik, ikkita erkli o'zgaruvchi $x, y$ va ikkita bog'liq o'zgaruvchi $u, v$ ni bog'lovchi quyidagi sistema berilgan bo'lsin:
$$
\begin{cases}
F(x, y, u, v) = 0 \\
G(x, y, u, v) = 0
\end{cases}
$$

> **Mavjudlik va Differensiallanuvchanlik Teoremasi:**
> Agar $F$ va $G$ funksiyalari $M_0(x_0, y_0, u_0, v_0)$ nuqta atrofida uzluksiz xususiy hosilalarga ega bo'lib, $F(M_0)=0, G(M_0)=0$ bo'lsa va $M_0$ nuqtada quyidagi Yakobian noldan farqli bo'lsa:
> $$
> J = \frac{D(F, G)}{D(u, v)} = \begin{vmatrix} \frac{\partial F}{\partial u} & \frac{\partial F}{\partial v} \\[2mm] \frac{\partial G}{\partial u} & \frac{\partial G}{\partial v} \end{vmatrix} \neq 0
> $$
> u holda ushbu sistema $M_0$ nuqta atrofida yagona differensiallanuvchi $u = u(x, y)$ va $v = v(x, y)$ oshkormas funksiyalar sistemasini aniqlaydi.

---

### 3. Oshkormas Funksiyalarning Xususiy Hosilalari

Oshkormas $u(x, y)$ va $v(x, y)$ funksiyalarning $x$ bo'yicha xususiy hosilalari Kramer qoidasi va Yakobianlar nisbati orqali quyidagicha topiladi:

$$
\frac{\partial u}{\partial x} = -\frac{\frac{D(F, G)}{D(x, v)}}{\frac{D(F, G)}{D(u, v)}}, \qquad \frac{\partial v}{\partial x} = -\frac{\frac{D(F, G)}{D(u, x)}}{\frac{D(F, G)}{D(u, v)}}
$$

Xuddi shuningdek, $y$ bo'yicha hosilalar:
$$
\frac{\partial u}{\partial y} = -\frac{\frac{D(F, G)}{D(y, v)}}{\frac{D(F, G)}{D(u, v)}}, \qquad \frac{\partial v}{\partial y} = -\frac{\frac{D(F, G)}{D(u, y)}}{\frac{D(F, G)}{D(u, v)}}
$$

---

### 4. Funksional Bog'liqlik Mezoni

Bir nechta $u_1(x_1, \dots, x_m), \dots, u_m(x_1, \dots, x_m)$ funksiyalar berilgan bo'lsin.
Agar ularning birontasi qolganlari orqali ifodalansa, ya'ni biror o'zgarmas ayniyat $\Phi(u_1, u_2, \dots, u_m) \equiv 0$ mavjud bo'lsa, bu funksiyalar **funksional bog'liq** deyiladi.

> **Yakobi Mezoni:**
> Funksiyalar sistemasining o'zaro funksional bog'liq bo'lishi uchun ularning Yakobiani qaralayotgan sohada aynan nolga teng bo'lishi zarur va yetarlidir:
> $$
> \frac{D(u_1, u_2, \dots, u_m)}{D(x_1, x_2, \dots, x_m)} \equiv 0
> $$

---

## 📝 Qadamma-qadam Yechilgan Amaliy Misollar

### 1-misol (Qutb koordinatalari Yakobiani va teskari xossa):
Dekart koordinatalaridan qutb koordinatalariga o'tish formulasining Yakobianini va uning teskarisini hisoblang:
$$
x = r \cos\varphi, \qquad y = r \sin\varphi
$$

**Yechilishi:**
1. Matritsa elementlarini hisoblaymiz:
   $$
   \frac{\partial x}{\partial r} = \cos\varphi, \quad \frac{\partial x}{\partial \varphi} = -r\sin\varphi
   $$
   $$
   \frac{\partial y}{\partial r} = \sin\varphi, \quad \frac{\partial y}{\partial \varphi} = r\cos\varphi
   $$
2. Yakobianni tuzamiz:
   $$
   \frac{D(x, y)}{D(r, \varphi)} = \begin{vmatrix} \cos\varphi & -r\sin\varphi \\ \sin\varphi & r\cos\varphi \end{vmatrix} = r\cos^2\varphi - (-r\sin^2\varphi) = r(\cos^2\varphi + \sin^2\varphi) = r
   $$
3. Teskari almashtirish Yakobiani:
   Yakobianlar xossasiga ko'ra $\frac{D(r, \varphi)}{D(x, y)} = \frac{1}{\frac{D(x, y)}{D(r, \varphi)}} = \frac{1}{r}$ ($r > 0$).

---

### 2-misol (Oshkormas funksiyalar sistemasini differensiallash):
Quyidagi sistema $u$ va $v$ ni $x$ va $y$ ning funksiyasi sifatida aniqlaydi:
$$
\begin{cases}
x + y + u + v = 0 \\
x u + y v = 1
\end{cases}
$$
$\frac{\partial u}{\partial x}$ xususiy hosilasini toping.

**Yechilishi:**
1. Funksiyalarni belgilaymiz:
   $$
   F(x, y, u, v) = x + y + u + v, \qquad G(x, y, u, v) = xu + yv - 1
   $$
2. Bosh Yakobianni hisoblaymiz:
   $$
   \frac{D(F, G)}{D(u, v)} = \begin{vmatrix} F'_u & F'_v \\ G'_u & G'_v \end{vmatrix} = \begin{vmatrix} 1 & 1 \\ x & y \end{vmatrix} = y - x
   $$
   Agar $y \neq x$ bo'lsa, Yakobian noldan farqli.
3. $\frac{\partial u}{\partial x}$ uchun suratdagi Yakobianni hisoblaymiz:
   $$
   \frac{D(F, G)}{D(x, v)} = \begin{vmatrix} F'_x & F'_v \\ G'_x & G'_v \end{vmatrix} = \begin{vmatrix} 1 & 1 \\ u & y \end{vmatrix} = y - u
   $$
4. Formulaga qo'yamiz:
   $$
   \frac{\partial u}{\partial x} = -\frac{\frac{D(F, G)}{D(x, v)}}{\frac{D(F, G)}{D(u, v)}} = -\frac{y - u}{y - x} = \frac{u - y}{y - x}
   $$

---

### 3-misol (Funksional bog'liqlikni aniqlash):
Quyidagi ikki funksiyaning o'zaro bog'liqligini tekshiring va agar bog'liq bo'lsa, ularni bog'lovchi formulani toping:
$$
u = \frac{x + y}{x - y}, \qquad v = \frac{x y}{(x - y)^2}
$$

**Yechilishi:**
1. Xususiy hosilalarni hisoblaymiz:
   $$
   u'_x = \frac{(x-y) - (x+y)}{(x-y)^2} = \frac{-2y}{(x-y)^2}, \quad u'_y = \frac{(x-y) - (x+y)(-1)}{(x-y)^2} = \frac{2x}{(x-y)^2}
   $$
   $$
   v'_x = \frac{y(x-y)^2 - xy \cdot 2(x-y)}{(x-y)^4} = \frac{y(x-y) - 2xy}{(x-y)^3} = \frac{-y(x+y)}{(x-y)^3}
   $$
   $$
   v'_y = \frac{x(x-y)^2 - xy \cdot 2(x-y)(-1)}{(x-y)^4} = \frac{x(x-y) + 2xy}{(x-y)^3} = \frac{x(3y - y + x)}{(x-y)^3} = \frac{x(x+y)}{(x-y)^3}
   $$
2. Yakobianni hisoblaymiz:
   $$
   \frac{D(u, v)}{D(x, y)} = u'_x v'_y - u'_y v'_x = \frac{-2y}{(x-y)^2} \cdot \frac{x(x+y)}{(x-y)^3} - \frac{2x}{(x-y)^2} \cdot \frac{-y(x+y)}{(x-y)^3}
   $$
   $$
   = \frac{-2xy(x+y) + 2xy(x+y)}{(x-y)^5} \equiv 0
   $$
3. Yakobian aynan nolga teng! Demak, $u$ va $v$ funksional bog'liq.
4. Bog'lanish munosabatini topamiz:
   $$
   u^2 = \frac{(x+y)^2}{(x-y)^2} = \frac{(x-y)^2 + 4xy}{(x-y)^2} = 1 + 4 \frac{xy}{(x-y)^2} = 1 + 4v
   $$
   Demak, qidirilgan bog'lanish: $u^2 - 4v - 1 = 0$.

---

## ⚠️ Talabalar Ko'p Yo'l Qo'yadigan Xatolar

1. **Formuladagi minus ("$-$") ishorasini unutish:**
   Oshkormas funksiya hosilasi formulasida har doim oldinda manfiy ishora bo'ladi. Buni tushirib qoldirish barcha hosilalarning teskari ishora bilan chiqishiga olib keladi.
2. **Suratdagi Yakobianda ustunlar tartibini adashtirish:**
   $\frac{D(F, G)}{D(x, v)}$ da birinchi ustun $x$ bo'yicha, ikkinchi ustun esa $v$ bo'yicha olinadi. Agar ustunlar o'rni almashib qolsa, determinant ishorasi o'zgaradi.
3. **Yakobian nolga tengligini tushunmaslik:**
   $\frac{D(u, v)}{D(x, y)} = 0$ bo'lishi bu funksiyalarning yomonligini emas, balki ulardan biri aslida yangi ma'lumot bermasligini (ikkinchisining oddiy kombinatsiyasi ekanini) bildiradi.

---

## 🎯 Mustaqil Yechish Uchun Masalalar

1. Sferik koordinatalar $x = \rho \sin\theta \cos\varphi, y = \rho \sin\theta \sin\varphi, z = \rho \cos\theta$ uchun Yakobian $\frac{D(x, y, z)}{D(\rho, \theta, \varphi)}$ ni hisoblang.
2. $u = x + y, v = x^2 + y^2$ funksiyalar sistemasi berilgan. Ularning Yakobianini toping va qaysi nuqtalarda ular bir-biridan mustaqilligini aniqlang.
3. $u = x+y+z, v = x^2+y^2+z^2, w = xy + yz + zx$ funksiyalarning funksional bog'liqligini Yakobian yordamida tekshiring.

<details style="margin-top: 1rem; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); cursor: pointer;">
<summary style="font-weight: 700; color: var(--primary);">Javoblar va Ko'rsatmalar</summary>

**1-masala:** Determinantni hisoblash orqali:
Javob: $\frac{D(x, y, z)}{D(\rho, \theta, \varphi)} = \rho^2 \sin\theta$.

**2-masala:** $\frac{D(u, v)}{D(x, y)} = \begin{vmatrix} 1 & 1 \\ 2x & 2y \end{vmatrix} = 2(y - x)$.
Ular $y \neq x$ bo'lgan barcha nuqtalarda mustaqildir. $y = x$ to'g'ri chiziqda Yakobian nolga aylanadi.

**3-masala:** Ma'lumki, $(x+y+z)^2 = x^2+y^2+z^2 + 2(xy+yz+zx) \implies u^2 = v + 2w$.
Funksiyalar bog'liq bo'lgani sababli Yakobian aynan nol chiqadi: $\frac{D(u, v, w)}{D(x, y, z)} \equiv 0$.

</details>

---

## 💡 Xulosa va Imtihon Maslahatlari

- Yakobian — ko'p o'lchovli fazoda differensiallarning "o'tkazgich koeffitsiyenti"dir: $du \, dv = |J| \, dx \, dy$.
- Agar sistemadan differensiallash talab qilinsa, har doim dastlab bosh maxraj Yakobianini hisoblang; agar u nol bo'lsa, oshkormas yechim mavjud emasligini darhol xulosa qiling.
