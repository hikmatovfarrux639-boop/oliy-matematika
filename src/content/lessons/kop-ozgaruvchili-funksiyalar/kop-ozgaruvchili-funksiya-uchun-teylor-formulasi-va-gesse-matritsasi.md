---
title: "Ko'p o'zgaruvchili funksiya uchun Teylor formulasi va Gesse matritsasi"
description: "Ko'p o'zgaruvchili Teylor qatori, Gesse matritsasi va Silvestr mezoni bilan ko'p o'lchovli statsionar nuqtalarni tasniflash."
module: "kop-ozgaruvchili-funksiyalar"
order: 14
---

## 📌 Kirish va Ko'p O'lchovli Approksimatsiya

Bir o'zgaruvchili matematik analizda Teylor formulasi ixtiyoriy murakkab differensiallanuvchi funksiyani ko'phadlar yordamida yuqori aniqlikda almashtirish (approksimatsiya qilish) imkonini beradi. Ko'p o'zgaruvchili funksiyalarda ($z = f(x, y)$ yoki $u = f(x_1, \dots, x_n)$) ham aynan shu tamoyil amal qiladi:

- 1-tartibli Teylor ko'phadi sirtni uning **urinma tekisligi** bilan almashtiradi (chiziqli yaqinlashish);
- 2-tartibli Teylor ko'phadi sirtni **elliptik yoki giperbolik paraboloid** bilan approksimatsiya qiladi (kvadratik yaqinlashish).

Statsionar nuqtada birinchi tartibli hosilalar (gradient) nolga teng bo'lgani uchun, funksiyaning ushbu nuqta atrofidagi xatti-harakati butunlay ikkinchi tartibli differensialga va nemis matematigi **Lyudvig Otto Gesse** sharafiga nomlangan **Gesse matritsasi**ga bog'liq bo'ladi. Ingliz matematigi **Jeyms Silvestr** yaratgan mezon esa har qanday o'lchamli fazoda statsionar nuqtani sekundlar ichida to'liq tasniflash (minimum, maksimum yoki egar nuqtaligini aniqlash) qurolidir.

---

## 📐 Asosiy Nazariya: Teylor Formulalari va Gesse Matritsasi

### 1. Ko'p O'zgaruvchili Teylor Formulalari

Faraz qilaylik, $f(x, y)$ funksiyasi $M_0(x_0, y_0)$ nuqta atrofida $m+1$ marta uzluksiz differensiallanuvchi bo'lsin.
$M(x, y)$ nuqta uchun siljishlarni belgilaymiz: $\Delta x = x - x_0, \Delta y = y - y_0$.

> **Teylor formulasi (differensial ko'rinishda):**
> $$
> f(x, y) = f(x_0, y_0) + df(M_0) + \frac{1}{2!} d^2 f(M_0) + \dots + \frac{1}{m!} d^m f(M_0) + R_m
> $$
> bu yerda $d^k f(M_0) = \left( \Delta x \frac{\partial}{\partial x} + \Delta y \frac{\partial}{\partial y} \right)^k f(x_0, y_0)$.

Ikkinchi tartibli kvadratik yaqinlashish ko'rinishi:
$$
f(x, y) \approx f(x_0, y_0) + \left( \frac{\partial f}{\partial x}\Delta x + \frac{\partial f}{\partial y}\Delta y \right) + \frac{1}{2}\left( \frac{\partial^2 f}{\partial x^2}\Delta x^2 + 2\frac{\partial^2 f}{\partial x \partial y}\Delta x \Delta y + \frac{\partial^2 f}{\partial y^2}\Delta y^2 \right)
$$

---

### 2. Gesse Matritsasi (Hessian Matrix)

$n$ ta o'zgaruvchili $f(x_1, x_2, \dots, x_n)$ funksiyaning ikkinchi tartibli barcha xususiy hosilalaridan tuzilgan kvadrat matritsa **Gesse matritsasi** deyiladi:

$$
H(f) = \begin{pmatrix}
\frac{\partial^2 f}{\partial x_1^2} & \frac{\partial^2 f}{\partial x_1 \partial x_2} & \dots & \frac{\partial^2 f}{\partial x_1 \partial x_n} \\[2mm]
\frac{\partial^2 f}{\partial x_2 \partial x_1} & \frac{\partial^2 f}{\partial x_2^2} & \dots & \frac{\partial^2 f}{\partial x_2 \partial x_n} \\[2mm]
\vdots & \vdots & \ddots & \vdots \\[2mm]
\frac{\partial^2 f}{\partial x_n \partial x_1} & \frac{\partial^2 f}{\partial x_n \partial x_2} & \dots & \frac{\partial^2 f}{\partial x_n^2}
\end{pmatrix}
$$

Shvarts teoremasiga asosan, uzluksiz aralash hosilalar differensiallash tartibiga bog'liq emas: $\frac{\partial^2 f}{\partial x_i \partial x_j} = \frac{\partial^2 f}{\partial x_j \partial x_i}$. Demak, **Gesse matritsasi har doim simmetrik matritsadir** ($H = H^T$).

---

### 3. Silvestr Mezoni va Ekstremumni Tasniflash

Statsionar nuqtada $\nabla f(M_0) = \vec{0}$ bo'lgani uchun Teylor yoyilmasining chiziqli hadi yo'qoladi. Ekstremum bor-yo'qligini Gesse matritsasidan tuzilgan ikkinchi differensialning kvadratik formasi aniqlaydi:

Gesse matritsasining bosh burchak minorlarini hisoblaymiz:
$$
\Delta_1 = |a_{11}|, \quad \Delta_2 = \begin{vmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{vmatrix}, \quad \dots, \quad \Delta_n = \det(H)
$$

> **Silvestr teoremasi:**
> 1. **Lokal Minimum:** Agar barcha bosh minorlar qat'iy musbat bo'lsa:
>    $$
>    \Delta_1 > 0, \quad \Delta_2 > 0, \quad \dots, \quad \Delta_n > 0
>    $$
>    u holda kvadratik forma musbat aniqlangan ($d^2 f > 0$) bo'lib, $M_0$ nuqtada **qat'iy lokal minimum** mavjud.
> 2. **Lokal Maksimum:** Agar minorlar ishorasi almashinib kelsa (birinchisi manfiy):
>    $$
>    \Delta_1 < 0, \quad \Delta_2 > 0, \quad \Delta_3 < 0, \quad \dots \quad \left((-1)^k \Delta_k > 0\right)
>    $$
>    u holda kvadratik forma manfiy aniqlangan ($d^2 f < 0$) bo'lib, $M_0$ nuqtada **qat'iy lokal maksimum** mavjud.
> 3. **Egar Nuqta (Ekstremum yo'q):** Agar yuqoridagi ikki shart bajarilmasa, lekin $\det(H) \neq 0$ bo'lsa, kvadratik forma o'zgaruvchan ishorali bo'lib, $M_0$ **egar nuqta (saddle point)** hisoblanadi.
> 4. **Noaniq holat:** Agar $\det(H) = 0$ bo'lsa, ikkinchi tartibli hosilalar yetarli bo'lmaydi (3- va yuqori tartibli hosilalar tekshirilishi lozim).

---

## 📝 Qadamma-qadam Yechilgan Amaliy Misollar

### 1-misol (Teylor formulasiga yoyish):
$f(x, y) = e^x \cos y$ funksiyasining $M_0(0; 0)$ nuqta atrofida 2-tartibli Teylor ko'phadini tuzing.

**Yechilishi:**
1. Nuqtadagi qiymat: $f(0, 0) = e^0 \cos 0 = 1$.
2. Birinchi tartibli hosilalar:
   $$
   f'_x = e^x \cos y \implies f'_x(0,0) = 1
   $$
   $$
   f'_y = -e^x \sin y \implies f'_y(0,0) = 0
   $$
3. Ikkinchi tartibli hosilalar:
   $$
   f''_{xx} = e^x \cos y \implies f''_{xx}(0,0) = 1
   $$
   $$
   f''_{xy} = -e^x \sin y \implies f''_{xy}(0,0) = 0
   $$
   $$
   f''_{yy} = -e^x \cos y \implies f''_{yy}(0,0) = -1
   $$
4. Teylor formulasiga qo'yamiz ($\Delta x = x, \Delta y = y$):
   $$
   f(x, y) \approx 1 + (1 \cdot x + 0 \cdot y) + \frac{1}{2}\left( 1 \cdot x^2 + 2 \cdot 0 \cdot xy + (-1) \cdot y^2 \right)
   $$
   $$
   f(x, y) \approx 1 + x + \frac{x^2 - y^2}{2}
   $$

---

### 2-misol (Ikki o'zgaruvchili ekstremum va Gesse matritsasi):
$f(x, y) = x^3 + y^3 - 3xy$ funksiyaning statsionar nuqtalarini toping va tasniflang.

**Yechilishi:**
1. Gradientni nolga tenglashtiramiz:
   $$
   \begin{cases}
   f'_x = 3x^2 - 3y = 0 \implies y = x^2 \\
   f'_y = 3y^2 - 3x = 0 \implies x = y^2
   \end{cases}
   $$
2. $x = (x^2)^2 = x^4 \implies x(x^3 - 1) = 0$.
   Haqiqiy ildizlar: $x = 0$ va $x = 1$.
   Statsionar nuqtalar: $M_1(0; 0)$ va $M_2(1; 1)$.
3. Ikkinchi hosilalar va Gesse matritsasi:
   $$
   f''_{xx} = 6x, \quad f''_{xy} = -3, \quad f''_{yy} = 6y \implies H(x, y) = \begin{pmatrix} 6x & -3 \\ -3 & 6y \end{pmatrix}
   $$
4. **$M_1(0; 0)$ nuqtada:**
   $$
   H(0, 0) = \begin{pmatrix} 0 & -3 \\ -3 & 0 \end{pmatrix} \implies \Delta_1 = 0, \quad \Delta_2 = 0\cdot 0 - (-3)^2 = -9 < 0
   $$
   $\Delta_2 < 0$ bo'lgani uchun $M_1(0; 0)$ nuqtada ekstremum yo'q — bu **egar nuqta**.
5. **$M_2(1; 1)$ nuqtada:**
   $$
   H(1, 1) = \begin{pmatrix} 6 & -3 \\ -3 & 6 \end{pmatrix} \implies \Delta_1 = 6 > 0, \quad \Delta_2 = 36 - 9 = 27 > 0
   $$
   Har ikkala minor musbat ($\Delta_1 > 0, \Delta_2 > 0$). Demak, $M_2(1; 1)$ nuqtada **qat'iy lokal minimum** mavjud.
   Funksiya qiymati: $f_{\min} = 1^3 + 1^3 - 3(1)(1) = -1$.

---

### 3-misol (Uch o'zgaruvchili funksiya va Silvestr mezoni):
$u(x, y, z) = x^2 + 2y^2 + 3z^2 - 2xy + 2xz - 4x - 6y$ funksiyaning ekstremumini tekshiring.

**Yechilishi:**
1. Gradientni hisoblaymiz:
   $$
   \begin{cases}
   u'_x = 2x - 2y + 2z - 4 = 0 \\
   u'_y = 4y - 2x - 6 = 0 \\
   u'_z = 6z + 2x = 0 \implies x = -3z
   \end{cases}
   $$
2. Chiziqli tenglamalar sistemasini yechib, statsionar nuqtani topamiz:
   $x = 3, y = 3, z = -1$. Yagona nuqta: $M_0(3; 3; -1)$.
3. Gesse matritsasini tuzamiz:
   $$
   H = \begin{pmatrix}
   u''_{xx} & u''_{xy} & u''_{xz} \\
   u''_{yx} & u''_{yy} & u''_{yz} \\
   u''_{zx} & u''_{zy} & u''_{zz}
   \end{pmatrix} = \begin{pmatrix}
   2 & -2 & 2 \\
   -2 & 4 & 0 \\
   2 & 0 & 6
   \end{pmatrix}
   $$
4. Silvestr bosh burchak minorlarini hisoblaymiz:
   - $\Delta_1 = |2| = 2 > 0$;
   - $\Delta_2 = \begin{vmatrix} 2 & -2 \\ -2 & 4 \end{vmatrix} = 8 - 4 = 4 > 0$;
   - $\Delta_3 = \det(H) = 2(24 - 0) - (-2)(-12 - 0) + 2(0 - 8) = 48 - 24 - 16 = 8 > 0$.
5. Barcha minorlar musbat: $\Delta_1 > 0, \Delta_2 > 0, \Delta_3 > 0$.
   Demak, $M_0(3; 3; -1)$ nuqtada funksiya **qat'iy lokal minimumga** ega!

---

## ⚠️ Talabalar Ko'p Yo'l Qo'yadigan Xatolar

1. **Maksimumda minorlar ishorasini yanglish tushunish:**
   Maksimum bo'lishi uchun barcha minorlar manfiy bo'lishi kerak deb o'ylashadi. Bu mutlaqo xato! Juft tartibli minor ($\Delta_2, \Delta_4, \dots$) kvadratik shakl bo'yicha manfiy aniqlangan holatda ham doimo **musbat** bo'lishi shart ($\Delta_1 < 0, \Delta_2 > 0, \Delta_3 < 0, \dots$).
2. **$\det(H) = 0$ holatida "ekstremum yo'q" deb xulosa chiqarish:**
   Agar determinant nolga teng bo'lsa, Silvestr mezoni javob bera olmaydi (shubhangiz oqlanmagan). Bu yerda ekstremum bo'lishi ham, bo'lmasligi ham mumkin (masalan, $z = x^4 + y^4$ da $H(0,0)$ nol matritsa, lekin $(0,0)$ aniq minimumdir).
3. **Simmetriklikni tekshirmaslik:**
   Aralash hosilalar bir-biriga teng chiqmasa, demak differensiallash jarayonida xatolikka yo'l qo'yilgan.

---

## 🎯 Mustaqil Yechish Uchun Masalalar

1. $f(x, y) = x^2 - xy + y^2 - 2x + y$ funksiyaning Gesse matritsasini tuzing va ekstremumini aniqlang.
2. $f(x, y) = x^4 + y^4 - 2x^2 + 4xy - 2y^2$ funksiyaning statsionar nuqtalarini toping.
3. Uch o'zgaruvchili funksiya berilgan: $f(x,y,z) = -x^2 - 2y^2 - 4z^2 + 2xy$. Uning $M(0,0,0)$ nuqtadagi xarakterini Silvestr mezoni bilan aniqlang.

<details style="margin-top: 1rem; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); cursor: pointer;">
<summary style="font-weight: 700; color: var(--primary);">Javoblar va Ko'rsatmalar</summary>

**1-masala:** $f'_x = 2x - y - 2 = 0, f'_y = -x + 2y + 1 = 0 \implies x = 1, y = 0$.
$H = \begin{pmatrix} 2 & -1 \\ -1 & 2 \end{pmatrix}$. $\Delta_1 = 2 > 0, \Delta_2 = 3 > 0$.
Javob: $M(1; 0)$ nuqtada minimum, $f_{\min} = -1$.

**2-masala:** Statsionar nuqtalar: $(0, 0), (\sqrt{2}, -\sqrt{2}), (-\sqrt{2}, \sqrt{2})$.
$(0,0)$ nuqtada egar nuqta, qolgan ikkitasida lokal minimumlar.

**3-masala:** $H = \begin{pmatrix} -2 & 1 & 0 \\ 1 & -2 & 0 \\ 0 & 0 & -4 \end{pmatrix}$.
$\Delta_1 = -2 < 0$, $\Delta_2 = 4 - 1 = 3 > 0$, $\Delta_3 = -4(3) = -12 < 0$.
Minorlar ishorasi almashinmoqda ($- , + , -$).
Javob: $M(0,0,0)$ nuqtada lokal maksimum mavjud.

</details>

---

## 💡 Xulosa va Imtihon Maslahatlari

- 2 ta o'zgaruvchili funksiya uchun Silvestr mezoni maktabdagi $AC - B^2$ qoidasiga to'liq mos keladi ($\Delta_1 = A, \Delta_2 = AC - B^2$).
- 3 va undan ortiq o'zgaruvchilar uchun faqat va faqat Gesse matritsasi va Silvestrning bosh burchak minorlari ishlatiladi.
- Minorlar ishorasi: musbatlar qatori ($+++ \dots$) $\to$ **Minimum**; almashinuvchi qator ($-+-+ \dots$) $\to$ **Maksimum**.
