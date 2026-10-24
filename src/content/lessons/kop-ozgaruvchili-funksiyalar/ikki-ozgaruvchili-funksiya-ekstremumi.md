---
title: "Ikki o'zgaruvchili funksiya ekstremumi va Lagranj usuli"
module: "kop-ozgaruvchili-funksiyalar"
order: 4
description: "Lokal ekstremumlar, statsionar nuqtalar, Gesse matritsasi va determinanti (Delta = AC - B^2), egar nuqtasi, Lagranj ko'paytuvchilari va ko'p usulli yechimlar."
---

## Kirish: Eng katta foyda va eng kichik xarajat

Iqtisodiyotda mahsulot tannarxini minimallashtirish va sof foydani maksimallashtirish, muhandislikda konstruksiya og'irligini kamaytirish, mashinali o'rganishda (Machine Learning) esa yo'qotish funksiyasini (Loss function) minimumga tushirish uchun ko'p o'zgaruvchili funksiyalarning **ekstremumlarini** (maksimum va minimumlarini) topish zarur bo'ladi.

Bir o'zgaruvchili funksiyalarda tepalik yoki vodiy bitta o'q bo'ylab qidirilsa, ko'p o'lchamli fazoda sirt turli yo'nalishlarda har xil o'zgarishi mumkin.

---

## 1. Ekstremumning zaruriy sharti (Statsionar nuqtalar)

> **Ferma teoremasi:**
> Agar $z = f(x, y)$ funksiya differensiallanuvchi bo'lib, $M_0(x_0, y_0)$ nuqtada lokal ekstremumga (minimum yoki maksimumga) erishsa, bu nuqtada uning birinchi tartibli barcha xususiy hosilalari **nolga teng** bo'ladi:
>
> $$
> \begin{cases}
> \frac{\partial z}{\partial x} = 0 \\
> \frac{\partial z}{\partial y} = 0
> \end{cases}
> $$

Xususiy hosilalarni nolga tenglashtirib topilgan $(x_0, y_0)$ nuqtalar **statsionar (kritik) nuqtalar** deyiladi.
Geometrik ma'nosi: Statsionar nuqtada sirtga o'tkazilgan urinma tekislik gorizontal bo'ladi ($z = z_0$).

> **Muhim:** Statsionar bo'lish — ekstremum mavjudligi uchun faqat zaruriy shartdir, lekin yetarli emas! Masalan, tog' dovoni (egar nuqtasi) da ham urinma tekislik gorizontal, lekin u yerda na minimum, na maksimum bor.

---

## 2. Ekstremumning yetarli sharti (Gesse mezoni)

Statsionar $M_0(x_0, y_0)$ nuqtada ikkinchi tartibli xususiy hosilalarning son qiymatlarini hisoblaymiz:

$$
A = z''_{xx}(M_0), \qquad B = z''_{xy}(M_0), \qquad C = z''_{yy}(M_0)
$$

Ushbu qiymatlardan **Gesse determinantini** (diskriminantini) tuzamiz:

$$
\Delta = \det H = \begin{vmatrix} A & B \\ B & C \end{vmatrix} = AC - B^2
$$

### Qaror qabul qilish qoidalari:
1. **Agar $\Delta > 0$ bo'lsa — EKSTREMUM MAVJUD:**
   - agar $A > 0$ (yoki $C > 0$) bo'lsa $\implies$ **Lokal minimum** ($z_{\min}$);
   - agar $A < 0$ (yoki $C < 0$) bo'lsa $\implies$ **Lokal maksimum** ($z_{\max}$).
2. **Agar $\Delta < 0$ bo'lsa — EKSTREMUM MAVJUD EMAS:**
   - Bu nuqta **egar nuqtasi** (saddle point) deyiladi (bitta yo'nalish bo'yicha minimum, boshqa yo'nalish bo'yicha maksimum).
3. **Agar $\Delta = 0$ bo'lsa — NOANIQ HOLAT:**
   - Gesse mezoni javob bera olmaydi; funksiyani yuqori tartibli Teylor yoyilmasi yoki chegaraviy tekshirishlar orqali tahlil qilish talab etiladi.

---

## 3. Shartli ekstremum va Lagranj ko'paytuvchilari

Ko'pincha argumentlar biror cheklov (bog'lanish tenglamasi) bilan cheklangan bo'ladi:
$z = f(x, y)$ funksiyaning $\varphi(x, y) = 0$ shartdagi ekstremumini topish talab etiladi.

### 1. Lagranj funksiyasini tuzish:
$$
L(x, y, \lambda) = f(x, y) + \lambda \cdot \varphi(x, y)
$$
bu yerda $\lambda$ — noma'lum **Lagranj ko'paytuvchisi**.

### 2. Statsionar sistema:
$$
\begin{cases}
L'_x = f'_x + \lambda \varphi'_x = 0 \\
L'_y = f'_y + \lambda \varphi'_y = 0 \\
L'_\lambda = \varphi(x, y) = 0
\end{cases}
$$

---

## Bitta masalani 2 xil usulda yechish va solishtirish

> **Masala:** $x + 2y = 12$ shartida $z = x \cdot y$ ko'paytmaning eng katta (maksimal) qiymatini toping ($x > 0, y > 0$).

### 1-usul: Bir o'zgaruvchini yo'qotish usuli (Klassik analiz)
Bog'lanish tenglamasidan $x$ ni $y$ orqali ifodalaymiz:
$$
x = 12 - 2y
$$
Buni $z$ funksiyaga qo'yamiz va bir o'zgaruvchili funksiyaga keltiramiz:
$$
z(y) = (12 - 2y) \cdot y = 12y - 2y^2
$$
1 o'zgaruvchili funksiya hosilasini olib nolga tenglashtiramiz:
$$
z'_y = 12 - 4y = 0 \implies 4y = 12 \implies \mathbf{y = 3}
$$
$x$ ni topamiz:
$$
x = 12 - 2(3) = 12 - 6 = \mathbf{6}
$$
Ikkinchi hosila: $z''_{yy} = -4 < 0$ bo'lganligi sababli, bu nuqta haqiqatan ham **maksimum** nuqtadir.
Maksimal qiymat:
$$
z_{\max} = 6 \cdot 3 = \mathbf{18}
$$

### 2-usul: Lagranj ko'paytuvchilari usuli
Bog'lanish tenglamasi: $\varphi(x, y) = x + 2y - 12 = 0$.
Lagranj funksiyasini tuzamiz:
$$
L(x, y, \lambda) = x y + \lambda(x + 2y - 12)
$$
Xususiy hosilalarni olamiz:
$$
\begin{cases}
L'_x = y + \lambda = 0 \implies \lambda = -y \\
L'_y = x + 2\lambda = 0 \implies x = -2\lambda \\
L'_\lambda = x + 2y - 12 = 0
\end{cases}
$$
$\lambda = -y$ ni ikkinchisiga qo'ysak: $x = -2(-y) = 2y$.
Buni uchinchi tenglamaga qo'yamiz:
$$
2y + 2y - 12 = 0 \implies 4y = 12 \implies \mathbf{y = 3}
$$
$$
x = 2(3) = \mathbf{6}, \qquad \lambda = -3
$$
Maksimal qiymat:
$$
z_{\max} = 6 \cdot 3 = \mathbf{18}
$$

*Xulosa:* Ikkala usul ham mutlaqo bir xil $z_{\max} = 18$ natijani berdi! Ammo bog'lanish tenglamasidan o'zgaruvchini ajratib olish qiyin bo'lgan murakkab hollarda (masalan, $x^3 + y^3 - 3xy = 0$) aynan 2-usul — Lagranj ko'paytuvchilari usuli tengsiz qurolga aylanadi.

---

> [!WARNING] Imtihondagi tuzoqlar va ko'p uchraydigan xatoliklar
> 1. **Gesse determinanti belgisini adashtirish:**
>    Kvadrat tenglama diskriminanti ($D = b^2 - 4ac$) bilan Gesse determinantini ($\Delta = AC - B^2$) aslo adashtirmang! Ekstremum mavjud bo'lishi uchun aynan $\Delta = AC - B^2 > 0$ bo'lishi shart!
> 2. **Har xil ishorali $A$ va $C$:**
>    Agar $A = z''_{xx} > 0$ va $C = z''_{yy} < 0$ bo'lsa, ularning ko'paytmasi $AC < 0$ bo'ladi. U holda $\Delta = AC - B^2$ har doim manfiy bo'ladi ($\Delta < 0$)! Demak, bunday statsionar nuqtada hech qachon ekstremum bo'lmaydi — u darhol egar nuqtasi deb topiladi.
> 3. **Yopiq sohadagi eng katta/eng kichik qiymat:**
>    Agar berilgan sohada eng katta va eng kichik qiymat so'ralsa, faqat ichki statsionar nuqtalarni tekshirish yetarli emas! Funksiyaning soha chegarasidagi qiymatlarini ham alohida tekshirish shart.

---

## Mustaqil yechish uchun amaliy mashqlar

1. $z = x^2 + xy + y^2 - 3x - 6y$ funksiyaning statsionar nuqtasini toping va uni ekstremumga tekshiring.
2. $z = 2x^3 + xy^2 + 5x^2 + y^2$ funksiyaning $(0, 0)$ statsionar nuqtasidagi xarakterini (Gesse mezoni orqali) aniqlang.
3. $x^2 + y^2 = 1$ birlik aylanada $z = x + y$ funksiyaning eng katta va eng kichik qiymatlarini Lagranj usuli yordamida toping.

<details style="margin-top: 1rem; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); cursor: pointer;">
  <summary style="font-weight: 700; color: var(--primary);">👉 Yechimni tekshirish</summary>
  <div style="margin-top: 0.75rem; padding-top: 0.75rem; border-top: 1px solid var(--border-color); line-height: 1.7;">
    <p><strong>1-masala:</strong></p>
    <p>1) Statsionar sistema: $z'_x = 2x + y - 3 = 0, \quad z'_y = x + 2y - 6 = 0$.</p>
    <p>$y = 3 - 2x \implies x + 2(3 - 2x) - 6 = 0 \implies -3x = 0 \implies x = 0, y = 3$. Statsionar nuqta: $M(0, 3)$.</p>
    <p>2) 2-hosilalar: $A = z''_{xx} = 2, \quad B = z''_{xy} = 1, \quad C = z''_{yy} = 2$.</p>
    <p>3) $\Delta = AC - B^2 = 2(2) - 1^2 = 4 - 1 = 3 > 0$.</p>
    <p>$\Delta > 0$ va $A = 2 > 0$ bo'lgani uchun $M(0, 3)$ nuqtada **lokal minimum** mavjud: $z_{\min} = 0 + 0 + 9 - 0 - 18 = \mathbf{-9}$.</p>

    <hr style="margin: 0.75rem 0; border: none; border-top: 1px dashed var(--border-color);" />

    <p><strong>2-masala:</strong></p>
    <p>$z'_x = 6x^2 + y^2 + 10x$, $z'_y = 2xy + 2y$. Nuqta $(0, 0)$ da ikkalasi ham nol.</p>
    <p>$z''_{xx} = 12x + 10 \implies A = 10$.</p>
    <p>$z''_{xy} = 2y \implies B = 0$.</p>
    <p>$z''_{yy} = 2x + 2 \implies C = 2$.</p>
    <p>$\Delta = AC - B^2 = 10(2) - 0 = 20 > 0$. $A = 10 > 0$ bo'lgani sababli $(0, 0)$ nuqtada **lokal minimum** bor: $z_{\min} = 0$.</p>

    <hr style="margin: 0.75rem 0; border: none; border-top: 1px dashed var(--border-color);" />

    <p><strong>3-masala:</strong></p>
    <p>$L = x + y + \lambda(x^2 + y^2 - 1)$.</p>
    <p>$L'_x = 1 + 2\lambda x = 0 \implies x = -\frac{1}{2\lambda}$.</p>
    <p>$L'_y = 1 + 2\lambda y = 0 \implies y = -\frac{1}{2\lambda} \implies x = y$.</p>
    <p>$x^2 + x^2 = 1 \implies 2x^2 = 1 \implies x = \pm\frac{1}{\sqrt{2}} \implies y = \pm\frac{1}{\sqrt{2}}$.</p>
    <p>Qiymatlar: $z_{\max} = \frac{1}{\sqrt{2}} + \frac{1}{\sqrt{2}} = \mathbf{\sqrt{2}}$, $z_{\min} = -\mathbf{\sqrt{2}}$.</p>
  </div>
</details>
