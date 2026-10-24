---
title: "Murakkab funksiya hosilasi (Zanjir qoidasi)"
module: "hosila"
order: 3
description: "Ichma-ich kompozitsiyalar, Zanjir qoidasi (Chain rule), uch va to'rt qatlamli funksiyalar, oshkormas va parametrik funksiyalar hosilasi."
---

## Kirish: Murakkab funksiya nima? ("Matryoshka" qoidasi)

Biz oldingi darsda $\sin x$, $e^x$ yoki $\sqrt{x}$ kabi oddiy elementar funksiyalarning hosilasini ko'rib chiqdik. Ammo haqiqiy matematika va amaliyotda argument o'rnida oddiygina $x$ emas, balki butun boshli boshqa bir ifoda turishi juda ko'p uchraydi.

Masalan:
- $y = \sin(x^3)$ — argument o'rnida $x^3$ turibdi;
- $y = \sqrt{x^2 + 1}$ — ildiz ostida $x^2 + 1$ ifoda bor;
- $y = e^{\cos(2x)}$ — ko'rsatkichda trigonometriya turibdi.

Bunday funksiyalar **murakkab funksiya** (yoki funksiyalar kompozitsiyasi) deyiladi va umumiy holda $y = f(g(x))$ deb belgilanadi.
Buni tushunishning eng yaxshi analogiyasi — ruslarning mashhur **"Matryoshka" qo'g'irchog'i**dir: eng tashqi katta qo'g'irchoq ichida kichikroq qo'g'irchoq, uning ichida esa eng kichigi yashiringan!

---

## 1. Zanjir qoidasi (Chain Rule)

Murakkab funksiyani differensiallash uchun butun dunyoda **Zanjir qoidasi** qo'llaniladi:

> **Zanjir qoidasi:** Agar $y = f(u)$ va $u = g(x)$ differensiallanuvchi funksiyalar bo'lsa, u holda murakkab funksiyaning $x$ bo'yicha hosilasi tashqi funksiyaning $u$ bo'yicha hosilasini ichki funksiyaning $x$ bo'yicha hosilasiga ko'paytirilganiga teng:
>
> 
$$
> y'_x = y'_u \cdot u'_x
> 
$$
>
> yoki qisqa ifodada:
>
> 
$$
> [f(g(x))]' = f'(g(x)) \cdot g'(x)
> 
$$

### Oltin qadam-baqadam algoritm:
1. **Tashqi funksiyani aniqlang** va uning ichidagi ifodaga umuman tegmang (uni yaxlit $u$ deb tasavvur qiling).
2. Tashqi funksiyadan jadval bo'yicha odatdagidek hosila oling: $f'(u)$.
3. Chiqqan natijani **ichki ifodaning hosilasi $g'(x)$ ga ko'paytiring**!

---

## 2. Ko'p qatlamli zanjir (3 va undan ortiq funksiya)

Agar matryoshka ichida yana boshqa qo'g'irchoqlar bo'lsa, zanjir oxirgi oddiy $x$ gacha uzluksiz davom etadi:

$$
[f(g(h(x)))]' = f'(g(h(x))) \cdot g'(h(x)) \cdot h'(x)
$$

**Ko'rgazmali misol:** $y = \ln(\sin(3x))$
- 1-qatlam (eng tashqi): $\ln(\dots) \implies \frac{1}{\sin(3x)}$
- 2-qatlam (o'rta): $\sin(\dots) \implies \cos(3x)$
- 3-qatlam (ichki): $3x \implies 3$
Ko'paytiramiz:
$$
y' = \frac{1}{\sin(3x)} \cdot \cos(3x) \cdot 3 = 3 \operatorname{ctg}(3x)
$$

---

## 3. Oshkormas funksiya hosilasi (Implicit Differentiation)

Har doim ham funksiya $y = f(x)$ shaklida ochiq (oshkor) berilmaydi. Ko'pincha tenglama $F(x, y) = 0$ ko'rinishida beriladi (masalan, $x^2 + y^2 = 25$ aylana tenglamasi yoki $x^3 + y^3 - 3xy = 0$).

### Oshkormas funksiya hosilasini topish algoritmi:
1. Tenglikning ikkala tomonidan bir vaqtda $x$ bo'yicha hosila olinadi.
2. Bunda **$y$ oddiy o'zgaruvchi emas, balki $x$ ning funksiyasi $y(x)$ deb qaraladi**, shuning uchun $y$ qatnashgan har qanday ifodani differensiallaganda yoniga albatta **$y'$ ko'paytuvchisi yoziladi** (masalan, $(y^2)' = 2y \cdot y'$, $(\sin y)' = \cos y \cdot y'$).
3. Hosil bo'lgan algebraik tenglamadan barcha $y'$ qatnashgan hadlarni chap tomonga, qolganlarini o'ng tomonga o'tkazib, $y'$ topiladi.

---

## 4. Parametrik berilgan funksiya hosilasi

Agar $x$ va $y$ o'zgaruvchilar uchinchi bitta parametr $t$ (ko'pincha vaqt) orqali berilgan bo'lsa:
$$
\begin{cases}
x = x(t) \\
y = y(t)
\end{cases}
$$

U holda $y$ ning $x$ bo'yicha hosilasi quyidagi formula bilan topiladi:

$$
y'_x = \frac{y'_t}{x'_t}
$$
*(Ya'ni $y$ ning $t$ bo'yicha hosilasi $x$ ning $t$ bo'yicha hosilasiga bo'linadi!)*

---

## 5. Amaliy misollar va batafsil yechimlar

### 1-misol: Darajali murakkab funksiya
Funksiyaning hosilasini toping:
$$
y = (3x^2 - 5x + 4)^6
$$

**Yechilishi:**
- Tashqi funksiya: $u^6 \implies 6u^5$
- Ichki funksiya: $u = 3x^2 - 5x + 4 \implies u' = 6x - 5$

Zanjir qoidasini qo'llaymiz:
$$
y' = 6(3x^2 - 5x + 4)^5 \cdot (3x^2 - 5x + 4)' = 6(3x^2 - 5x + 4)^5 \cdot (6x - 5)
$$

**Javob:** $6(6x - 5)(3x^2 - 5x + 4)^5$

---

### 2-misol: Ildiz ostidagi kasr funksiya
Funksiyaning hosilasini toping:
$$
y = \sqrt{\frac{1 + x}{1 - x}}
$$

**Yechilishi:**
- Tashqi funksiya: $\sqrt{u} \implies \frac{1}{2\sqrt{u}}$
- Ichki funksiya: $u = \frac{1 + x}{1 - x}$. Uning hosilasini chiziqli-kasr formulasidan topamiz:
  $$u' = \frac{1(-1) - 1(1)}{(1 - x)^2} = \frac{-2}{(1 - x)^2}$$

Zanjir bo'yicha ko'paytiramiz:
$$
y' = \frac{1}{2\sqrt{\frac{1 + x}{1 - x}}} \cdot \frac{-2}{(1 - x)^2} = -\frac{1}{(1 - x)^2} \sqrt{\frac{1 - x}{1 + x}} = -\frac{1}{(1 - x)\sqrt{1 - x^2}}
$$

**Javob:** $-\frac{1}{(1 - x)\sqrt{1 - x^2}}$

---

### 3-misol: Uch qatlamli zanjir
Funksiyaning hosilasini toping:
$$
y = e^{\cos(4x)}
$$

**Yechilishi:**
1. Tashqi eksponenta: $(e^u)' = e^u \implies e^{\cos(4x)}$
2. Kosinus: $(\cos v)' = -\sin v \implies -\sin(4x)$
3. Ichki chiziqli qism: $(4x)' = 4$

Barchasini ketma-ket ko'paytiramiz:
$$
y' = e^{\cos(4x)} \cdot (-\sin(4x)) \cdot 4 = -4\sin(4x)e^{\cos(4x)}
$$

**Javob:** $-4\sin(4x)e^{\cos(4x)}$

---

### 4-misol: Oshkormas funksiya hosilasi
$x^3 + y^3 - 3xy = 0$ (Dekart yaprog'i) tenglamasidan $y'$ ni toping.

**Yechilishi:**
Har bir haddan $x$ bo'yicha hosila olamiz:
1. $(x^3)' = 3x^2$
2. $(y^3)' = 3y^2 \cdot y'$ *(chunki $y = y(x)$)*
3. Ko'paytma hosilasi bo'yicha:
   $$(3xy)' = 3[(x)'y + x(y)'] = 3(y + x y') = 3y + 3x y'$$

Tenglamaga qo'yamiz:
$$
3x^2 + 3y^2 y' - (3y + 3x y') = 0
$$
$3$ ga qisqartiramiz:
$$
x^2 + y^2 y' - y - x y' = 0
$$
$y'$ qatnashgan hadlarni qoldirib, qolganlarini o'ngga o'tkazamiz:
$$
y'(y^2 - x) = y - x^2 \implies y' = \frac{y - x^2}{y^2 - x}
$$

**Javob:** $y' = \frac{y - x^2}{y^2 - x}$

---

### 5-misol: Parametrik funksiya hosilasi
Funksiya parametrik ko'rinishda berilgan:
$$
\begin{cases}
x = 3\cos t \\
y = 3\sin t
\end{cases}
$$
$y'_x$ ni toping.

**Yechilishi:**
Formula: $y'_x = \frac{y'_t}{x'_t}$.
- $x'_t = (3\cos t)' = -3\sin t$
- $y'_t = (3\sin t)' = 3\cos t$

Bo'lamiz:
$$
y'_x = \frac{3\cos t}{-3\sin t} = -\frac{\cos t}{\sin t} = -\operatorname{ctg} t
$$

**Javob:** $-\operatorname{ctg} t$

---

## ⚠️ Talabalar ko'p yo'l qo'yadigan 3 ta jiddiy xato

1. **Ichki funksiya hosilasiga ko'paytirishni unutish:**
   > Masalan, $y = \sin(5x)$ ning hosilasini shunchaki $\cos(5x)$ deb yozib qo'yishadi. To'g'risi: $\cos(5x) \cdot (5x)' = 5\cos(5x)$!

2. **Tashqi funksiyadan hosila olayotganda ichidagi ifodani ham o'zgartirib yuborish:**
   > $y = (x^2 + 1)^3$ berilganda talaba $(3(2x))^2$ deb tashqi va ichki funksiyani bir vaqtda differensiallab yuboradi. Bu mutlaqo xato! Tashqi funksiyani olayotganda ichki qavs o'zgarmasdan turadi: $3(x^2 + 1)^2 \cdot 2x$.

3. **Oshkormas funksiyada $y'$ ni yozishni unutish:**
   > $(y^2)' = 2y$ deb qo'yish eng ko'p uchraydigan xato. Agar $x$ bo'yicha differensiallanayotgan bo'lsa, albatta $(y^2)' = 2y \cdot y'$ bo'lishi shart!

---

## 💡 Ustozdan maslahat

Murakkab funksiyani ko'rganingizda doimo o'zingizga savol bering: **"Agar men kalkulyatorda hisoblayotgan bo'lsam, eng oxirgi qaysi tugmani bosgan bo'lardim?"**
Aynan o'sha oxirgi amal — **eng tashqi funksiya** hisoblanadi va differensiallash aynan shundan boshlanadi!

---

## ✍️ Mustaqil yechish uchun mashqlar

1. $y = \cos(4x^3)$ ning hosilasini toping.
2. $y = \ln(x^2 + 5)$ funksiyaning hosilasini hisoblang.
3. $y = e^{-3x}$ ning hosilasi nimaga teng?
4. $x^2 + y^2 = 16$ aylananing ixtiyoriy nuqtasidagi hosilasi $y'$ ni toping.

<details style="margin-top: 1rem; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); cursor: pointer;">
  <summary style="font-weight: 700; color: var(--primary);">To'liq yechimlar va javoblar</summary>
  <div style="margin-top: 0.75rem; padding-top: 0.75rem; border-top: 1px solid var(--border-color);">
    <p><strong>1-masala:</strong> $-\sin(4x^3) \cdot (4x^3)' = -12x^2\sin(4x^3)$.</p>
    <p><strong>2-masala:</strong> $\frac{1}{x^2 + 5} \cdot (x^2 + 5)' = \frac{2x}{x^2 + 5}$.</p>
    <p><strong>3-masala:</strong> $e^{-3x} \cdot (-3x)' = -3e^{-3x}$.</p>
    <p><strong>4-masala:</strong> $2x + 2y y' = 0 \implies 2y y' = -2x \implies y' = -\frac{x}{y}$.</p>
  </div>
</details>
