---
title: "Xususiy hosilalar va Shvars teoremasi"
module: "kop-ozgaruvchili-funksiyalar"
order: 2
description: "Xususiy hosilalar, ikkinchi tartibli aralash hosilalar, Shvars teoremasi, gradient vektori va yo'nalish bo'yicha hosila (Gradient Descent asosi)."
---

## Kirish: Bitta o'zgaruvchini "muzlatib" qo'yish

Ko'p o'zgaruvchili funksiyalarda ($z = f(x, y)$) ikkala argument ham bir vaqtda mustaqil ravishda o'zgarishi mumkin. Bir vaqtning o'zida ham $x$, ham $y$ bo'yicha o'zgarish tezligini o'rganish murakkab bo'lgani sababli, matematiklar eng oqilona yo'lni tanlaganlar:
- Faqat $x$ o'zgarayotganda, $y$ ni go'yo oddiy son (o'zgarmas doimiy) deb qabul qilish;
- Faqat $y$ o'zgarayotganda, $x$ ni o'zgarmas doimiy deb hisoblash.

Bu yo'l bilan hisoblangan hosilalar **xususiy hosilalar** deyiladi.

Bugungi kunda sun'iy intellekt va neyron tarmoqlarni o'qitishdagi eng asosiy algoritm — **Gradient Descent (Gradient tushishi)** aynan xususiy hosilalarga tayanadi!

---

## 1. Xususiy hosila ta'rifi

> **Ta'rif:** Agar $y$ o'zgarmas deb qaralganda ($y = \text{const}$), $z = f(x, y)$ funksiyadan $x$ bo'yicha olingan odatiy hosilaga funksiyaning **$x$ bo'yicha xususiy hosilasi** deyiladi va quyidagicha belgilanadi:
>
> 
$$
> z'_x = \frac{\partial z}{\partial x} = f'_x(x, y) = \lim_{\Delta x \to 0} \frac{f(x + \Delta x, y) - f(x, y)}{\Delta x}
> 
$$

Xuddi shunday, $x$ o'zgarmas deb qaralganda ($x = \text{const}$), $y$ bo'yicha hosila **$y$ bo'yicha xususiy hosila** deyiladi:

$$
z'_y = \frac{\partial z}{\partial y} = f'_y(x, y) = \lim_{\Delta y \to 0} \frac{f(x, y + \Delta y) - f(x, y)}{\Delta y}
$$

> 💡 **Belgilashga e'tibor bering:** Bir o'zgaruvchili oddiy hosilada to'g'ri $d$ ($dx$) ishlatilsa, ko'p o'zgaruvchili xususiy hosilada maxsus egri $\partial$ ("parshial" yoki "yumaloq de") belgisi ishlatiladi!

---

## 2. Hisoblashning oltin qoidasi

Xususiy hosilalarni hisoblashda bir o'zgaruvchili funksiyalarning barcha hosilalar jadvali va qoidalari (ko'paytma, kasr, zanjir qoidasi) aynan saqlanadi. Faqat bitta oddiy qoidaga amal qilinadi:
- **$x$ bo'yicha hosila olayotganda:** har qanday $y$ yoki $y$ ga bog'liq ifoda (masalan $\sin y, e^y, y^4$) **oddiy o'zgarmas son $C$ deb qaraladi**:
  $$(y)'_x = 0, \quad (x \cdot y)'_x = y \cdot (x)'_x = y$$
- **$y$ bo'yicha hosila olayotganda:** har qanday $x$ yoki $x$ ga bog'liq ifoda **oddiy son $C$ deb qaraladi**:
  $$(x)'_y = 0, \quad (x \cdot y)'_y = x \cdot (y)'_y = x$$

---

## 3. Ikkinchi tartibli va aralash xususiy hosilalar

1-tartibli xususiy hosilalar $z'_x$ va $z'_y$ ham $x$ va $y$ ga bog'liq bo'lgani sababli, ulardan yana xususiy hosilalar olish mumkin. Jami 4 ta 2-tartibli hosila hosil bo'ladi:

1. $x$ bo'yicha ikki marta:
   $$z''_{xx} = \frac{\partial^2 z}{\partial x^2} = \frac{\partial}{\partial x}\left(\frac{\partial z}{\partial x}\right)$$
2. $y$ bo'yicha ikki marta:
   $$z''_{yy} = \frac{\partial^2 z}{\partial y^2} = \frac{\partial}{\partial y}\left(\frac{\partial z}{\partial y}\right)$$
3. **Aralash hosilalar:**
   $$z''_{xy} = \frac{\partial^2 z}{\partial x \partial y} = \frac{\partial}{\partial y}\left(\frac{\partial z}{\partial x}\right)$$
   $$z''_{yx} = \frac{\partial^2 z}{\partial y \partial x} = \frac{\partial}{\partial x}\left(\frac{\partial z}{\partial y}\right)$$

---

## 4. Shvars (Klero) teoremasi

> **Shvars teoremasi:** Agar $z = f(x, y)$ funksiyaning aralash hosilalari biror sohada uzluksiz bo'lsa, u holda **differensiallash tartibi mutlaqo muhim emas**, ya'ni aralash hosilalar bir-biriga doimo teng bo'ladi:
>
> 
$$
> z''_{xy} = z''_{yx}
> 
$$

*(Avval $x$, keyin $y$ bo'yicha hosila olasizmi yoki aksinchami — natija bir xil chiqadi!).*

---

## 5. Gradient vektori va Yo'nalish bo'yicha hosila

### A) Gradient vektori ($\operatorname{grad} z$ yoki $\nabla z$):
Funksiyaning barcha xususiy hosilalaridan tuzilgan vektor:

$$
\operatorname{grad} z = \nabla z = \left( \frac{\partial z}{\partial x}, \; \frac{\partial z}{\partial y} \right) = \frac{\partial z}{\partial x} \vec{i} + \frac{\partial z}{\partial y} \vec{j}
$$

> **Gradientning eng muhim xossasi:**
> Gradient vektori berilgan nuqtada **funksiya eng tez o'sadigan yo'nalishni** ko'rsatadi! Uning uzunligi $|\operatorname{grad} z|$ esa ushbu eng katta o'sish tezligiga teng bo'ladi.
> *(Antigradient $-\nabla z$ esa funksiya eng tez kamayadigan yo'nalishni ko'rsatadi va neyron tarmoqlarni o'qitishda xatolikni minimallashtirish uchun ishlatiladi).*

### B) Yo'nalish bo'yicha hosila ($\frac{\partial z}{\partial \vec{l}}$):
Funksiyaning birlik $\vec{l} = (\cos\alpha, \cos\beta)$ yo'nalishi bo'yicha o'zgarish tezligi:

$$
\frac{\partial z}{\partial \vec{l}} = \frac{\partial z}{\partial x}\cos\alpha + \frac{\partial z}{\partial y}\cos\beta = \operatorname{grad} z \cdot \vec{l}
$$

---

## 6. Amaliy misollar va batafsil yechimlar

### 1-misol: 1-tartibli xususiy hosilalarni hisoblash
Funksiyaning $x$ va $y$ bo'yicha xususiy hosilalarini toping:
$$
z = x^3 y^2 - 4x^2 + 5y^3 - 7xy + 9
$$

**Yechilishi:**
1. $x$ bo'yicha hosila ($y = \text{const}$):
   - $(x^3 y^2)'_x = y^2 \cdot (x^3)' = 3x^2 y^2$
   - $(-4x^2)'_x = -8x$
   - $(5y^3)'_x = 0$ *(chunki faqat $y$ qatnashgan, u son deb qaraladi)*
   - $(-7xy)'_x = -7y(x)' = -7y$
   - $(9)'_x = 0$
   $$z'_x = 3x^2 y^2 - 8x - 7y$$

2. $y$ bo'yicha hosila ($x = \text{const}$):
   - $(x^3 y^2)'_y = x^3 \cdot (y^2)' = 2x^3 y$
   - $(-4x^2)'_y = 0$
   - $(5y^3)'_y = 15y^2$
   - $(-7xy)'_y = -7x(y)' = -7x$
   $$z'_y = 2x^3 y + 15y^2 - 7x$$

---

### 2-misol: Murakkab funksiya xususiy hosilasi
Funksiyaning xususiy hosilalarini toping:
$$
z = \ln(x^2 + 3y)
$$

**Yechilishi:**
Zanjir qoidasini qo'llaymiz ($(\ln u)' = \frac{u'}{u}$):
- $z'_x = \frac{(x^2 + 3y)'_x}{x^2 + 3y} = \frac{2x + 0}{x^2 + 3y} = \frac{2x}{x^2 + 3y}$
- $z'_y = \frac{(x^2 + 3y)'_y}{x^2 + 3y} = \frac{0 + 3}{x^2 + 3y} = \frac{3}{x^2 + 3y}$

---

### 3-misol: Shvars teoremasini tekshirish
$z = x^2 \sin y$ funksiyasi uchun $z''_{xy}$ va $z''_{yx}$ ni toping va solishtiring.

**Yechilishi:**
1. Dastlabki hosilalar:
   - $z'_x = 2x \sin y$
   - $z'_y = x^2 \cos y$
2. Aralash hosilalar:
   - $z''_{xy} = (z'_x)'_y = (2x \sin y)'_y = 2x \cos y$
   - $z''_{yx} = (z'_y)'_x = (x^2 \cos y)'_x = 2x \cos y$
Ko'rib turganingizdek: $z''_{xy} = z''_{yx} = 2x\cos y \quad \checkmark$

---

### 4-misol: Nuqtadagi gradient vektori
$z = x^2 + 3xy + y^2$ funksiyaning $M(1; 2)$ nuqtadagi gradientini toping.

**Yechilishi:**
1. Xususiy hosilalarni topamiz:
   $$z'_x = 2x + 3y$$
   $$z'_y = 3x + 2y$$
2. $M(1; 2)$ nuqta qiymatlarini qo'yamiz ($x = 1, y = 2$):
   $$z'_x(1, 2) = 2(1) + 3(2) = 2 + 6 = 8$$
   $$z'_y(1, 2) = 3(1) + 2(2) = 3 + 4 = 7$$
3. Gradient vektori:
   $$\operatorname{grad} z(M) = (8, 7)$$
   Eng tez o'sish tezligi: $|\operatorname{grad} z| = \sqrt{8^2 + 7^2} = \sqrt{64 + 49} = \sqrt{113} \approx 10.63$.

**Javob:** $\operatorname{grad} z = (8, 7)$

---

## ⚠️ Talabalar ko'p yo'l qo'yadigan 3 ta jiddiy xato

1. **Ikkinchi o'zgaruvchini nol qilib yuborish (ko'paytuvchi bo'lganda):**
   > $(x \cdot y)'_x = y$ bo'ladi! Talabalar ko'pincha "y o'zgarmas son-ku, demak hosilasi 0" deb, $(xy)'_x = 0$ qilib xato qilishadi. O'zgarmas son ko'paytuvchi bo'lib turganda saqlanib qoladi! Faqat qo'shiluvchi bo'lgandagina nol bo'ladi: $(x + y)'_x = 1 + 0 = 1$.

2. **Oddiy $d$ va xususiy $\partial$ ni chalkashtirish:**
   > $\frac{dz}{dx}$ deb yozish ko'p o'zgaruvchili analizda xato hisoblanadi. Chunki $z$ faqat $x$ ga emas, $y$ ga ham bog'liq. Doimo $\frac{\partial z}{\partial x}$ yoziladi.

3. **Gradientni son deb o'ylash:**
   > Gradient — bu son emas, balki **vektor** (yo'nalish)! Uning koordinatalari xususiy hosilalardan tashkil topadi: $(z'_x, z'_y)$.

---

## 💡 Ustozdan maslahat

$x$ bo'yicha hosila olayotganda chalkashib ketmaslik uchun, xayolan $y$ ning o'rniga oddiy bir sonni (masalan $5$ sonini) qo'yib tasavvur qiling:
Masalan, $x^3 y^2$ ifodasi berilgan bo'lsa, uni $x^3 \cdot 5^2 = 25 x^3$ deb o'ylang. Uning hosilasi $75 x^2 = 3x^2 \cdot 25 = 3x^2 y^2$ bo'ladi. Bu sodda usul sizni xatolardan 100% asraydi!

---

## ✍️ Mustaqil yechish uchun mashqlar

1. $z = x^4 - 3x^2 y^3 + y^5$ funksiyaning $z'_x$ va $z'_y$ xususiy hosilalarini toping.
2. $z = e^{2x + 3y}$ ning $z'_x$ va $z'_y$ hosilalarini hisoblang.
3. $z = x^2 y$ funksiyaning ikkinchi tartibli $z''_{xx}$ va $z''_{yy}$ hosilalarini toping.
4. $z = x^2 + y^2$ funksiyaning $(3; 4)$ nuqtadagi gradientini aniqlang.

<details style="margin-top: 1rem; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); cursor: pointer;">
  <summary style="font-weight: 700; color: var(--primary);">To'liq yechimlar va javoblar</summary>
  <div style="margin-top: 0.75rem; padding-top: 0.75rem; border-top: 1px solid var(--border-color);">
    <p><strong>1-masala:</strong> $z'_x = 4x^3 - 6x y^3$, $z'_y = -9x^2 y^2 + 5y^4$.</p>
    <p><strong>2-masala:</strong> $z'_x = 2e^{2x + 3y}$, $z'_y = 3e^{2x + 3y}$.</p>
    <p><strong>3-masala:</strong> $z'_x = 2xy \implies z''_{xx} = 2y$. $z'_y = x^2 \implies z''_{yy} = 0$.</p>
    <p><strong>4-masala:</strong> $z'_x = 2x, z'_y = 2y$. Nuqtada: $\operatorname{grad} z = (2 \cdot 3, 2 \cdot 4) = (6, 8)$.</p>
  </div>
</details>
