---
title: "1- va 2-tur sirt integrallari: Sirt massasi va Vektor maydon oqimini hisoblash"
module: "karrali-integrallar"
order: 10
description: "Sirt integrallari: 1-tur sirt integrali (skalyar maydon, sirt yuzi va massasi dσ), 2-tur sirt integrali (vektor maydon, sirt orqali oqim dydz, dzdx, dxdy), sirt oriyentatsiyasi va ikki karrali integralga keltirish."
---

## Kirish: Chiziqdan sirtga qadam

Biz ikki karrali integrallarda tekislikdagi ($xOy$) tekis sohalarni o'rgandik. Biroq, real hayotda sirtlar ko'pincha fazoda egri-bugri bo'ladi (masalan, samolyot qanoti, yer yuzasi, elektromagnetizm va gidrodinamikadagi to'siqlar).

Agar biz fazoviy $S$ egri sirtining yuzini, uning massasini hisoblamoqchi bo'lsak yoki ushbu sirt orqali suyuqlik/elektr maydonining oqib o'tishini (oqimini) o'lchamoqchi bo'lsak, **sirt integrallari** zarur bo'ladi.

Egri chiziqli integrallar kabi, sirt integrallari ham qat'iy **ikki turga** bo'linadi:
1. **1-tur sirt integrali (Skalyar):** Sirt elementining yuzi $d\sigma$ bo'yicha olinadi (massa, yuza, inersiya momenti).
2. **2-tur sirt integrali (Vektor):** Sirtning qaysi tomoni (yuqori/pastki yoki tashqi/ichki) olinganiga bog'liq bo'lib, koordinatalar bo'yicha olinadi (oqim).

---

## 1. 1-tur sirt integrali: $\iint_S f(x, y, z) \, d\sigma$

### Ta'rifi:
Fazoda silliq $S$ sirti berilgan bo'lsin. Ushbu sirtni mayda $\Delta \sigma_i$ bo'lakchalarga bo'lib, har bir bo'lakdan nuqta olib, Riman yig'indisi tuzilsa va limitga o'tilsa:
$$\iint_S f(x, y, z) \, d\sigma = \lim_{\operatorname{diam} \to 0} \sum_{i=1}^n f(M_i) \Delta \sigma_i$$

### Geometrik va fizik ma'nosi:
- Agar $f(x, y, z) \equiv 1$ bo'lsa, integral **sirtning yuzini** beradi:
  $$S_{\text{yuza}} = \iint_S d\sigma$$
- Agar $f(x, y, z) = \rho(x, y, z)$ sirtning sirtiy zichligi bo'lsa, integral **sirtning to'liq massasini** beradi:
  $$M = \iint_S \rho(x, y, z) \, d\sigma$$

### Ikki karrali integralga keltirish formulasi:
Agar sirt tenglamasi $z = z(x, y)$ ko'rinishida berilgan bo'lib, uning $xOy$ tekisligidagi proyeksiyasi $D$ sohasi bo'lsa, sirt differensiali quyidagicha ochiladi:
$$d\sigma = \sqrt{1 + \left(\frac{\partial z}{\partial x}\right)^2 + \left(\frac{\partial z}{\partial y}\right)^2} \, dxdy$$

Demak:
$$\iint_S f(x, y, z) \, d\sigma = \iint_D f(x, y, z(x, y)) \sqrt{1 + (z'_x)^2 + (z'_y)^2} \, dxdy$$

---

## 2. 2-tur sirt integrali (Vektor maydon oqimi): $\iint_S P\,dydz + Q\,dzdx + R\,dxdy$

### Ta'rifi va oriyentatsiya:
2-tur sirt integralida sirtning **oriyentatsiyasi (yo'nalishi)** prinsipial ahamiyatga ega! Har bir nuqtadagi birlik normal vektor $\vec{n} = (\cos\alpha, \cos\beta, \cos\gamma)$ tanlanadi:
- Sirtning yuqori (yoki tashqi) tomoni tanlansa, normal o'qlar bilan o'tkir burchak hosil qiladi ($\cos\gamma > 0$);
- Pastki (ichki) tomoni tanlansa, ishora qarama-qarshisiga o'zgaradi!

$$\iint_{S^+} P\,dydz + Q\,dzdx + R\,dxdy = -\iint_{S^-} P\,dydz + Q\,dzdx + R\,dxdy$$

### Vektor maydon oqimi ko'rinishi:
Agar $\vec{F} = (P, Q, R)$ vektor maydon bo'lsa, 2-tur sirt integrali maydonning $S$ sirt orqali **oqimini** bildiradi:
$$\Pi = \iint_S (\vec{F} \cdot \vec{n}) \, d\sigma = \iint_S (P\cos\alpha + Q\cos\beta + R\cos\gamma) \, d\sigma$$

---

## 3. To'liq yechilgan namunaviy misollar

### 1-Misol (1-tur sirt integrali — Sirt yuzi va massasi):
Zichligi $\rho(x, y, z) = z$ bo'lgan tekislik bo'lagining massasini toping:
$$x + y + z = 1, \quad (x \ge 0, y \ge 0, z \ge 0)$$

**Yechish:**
1. Sirt tenglamasidan $z$ ni aniqlaymiz:
   $$z = 1 - x - y$$
2. Xususiy hosilalarni olamiz:
   $$z'_x = -1, \quad z'_y = -1$$
3. Sirt differensialini tuzamiz:
   $$d\sigma = \sqrt{1 + (-1)^2 + (-1)^2} \, dxdy = \sqrt{1 + 1 + 1} \, dxdy = \sqrt{3} \, dxdy$$
4. Proyeksiya sohasi $D$ ($xOy$ tekisligida $z = 0$ qo'yiladi):
   $$x + y \le 1, \quad x \ge 0, \quad y \ge 0$$
   Bu $0 \le x \le 1$ va $0 \le y \le 1 - x$ bo'lgan to'g'ri burchakli uchburchakdir.
5. Integralni hisoblaymiz:
   $$M = \iint_S z \, d\sigma = \iint_D (1 - x - y) \sqrt{3} \, dxdy = \sqrt{3} \int_0^1 dx \int_0^{1-x} (1 - x - y) \, dy$$
6. Ichki integralni hisoblaymiz:
   $$\int_0^{1-x} ((1-x) - y) \, dy = \left[ (1-x)y - \frac{y^2}{2} \right]_0^{1-x} = (1-x)^2 - \frac{(1-x)^2}{2} = \frac{(1-x)^2}{2}$$
7. Tashqi integral:
   $$M = \sqrt{3} \int_0^1 \frac{(1-x)^2}{2} \, dx = \frac{\sqrt{3}}{2} \left[ -\frac{(1-x)^3}{3} \right]_0^1 = \frac{\sqrt{3}}{2} \left( 0 - \left(-\frac{1}{3}\right) \right) = \frac{\sqrt{3}}{6}$$

---

### 2-Misol (2-tur sirt integrali — Oqimni hisoblash):
Quyidagi 2-tur sirt integralini hisoblang:
$$I = \iint_S z \, dxdy$$
bu yerda $S$ — $z = 4 - x^2 - y^2$ paraboloidining $z \ge 0$ qismining **yuqori tomoni**.

**Yechish:**
1. Integral faqat $dxdy$ differensialini o'z ichiga olgan. Shuning uchun uni to'g'ridan-to'g'ri $xOy$ tekisligidagi proyeksiyaga keltirish mumkin.
2. Sirtning yuqori tomoni berilgan, demak normal $Oz$ o'qi bilan o'tkir burchak hosil qiladi ($\cos\gamma > 0$), ishora musbat ($+$) bo'ladi.
3. Proyeksiya sohasi $D$ ($z = 0$ bo'lganda):
   $$4 - x^2 - y^2 \ge 0 \implies x^2 + y^2 \le 4$$
   Bu radiusi $R = 2$ bo'lgan doiradir.
4. $z = 4 - x^2 - y^2$ ni integralga qo'yamiz:
   $$I = \iint_D (4 - x^2 - y^2) \, dxdy$$
5. Qutb koordinatalariga o'tamiz ($x = r\cos\varphi, y = r\sin\varphi, dxdy = r\,dr\,d\varphi$):
   $$0 \le \varphi \le 2\pi, \quad 0 \le r \le 2$$
   $$I = \int_0^{2\pi} d\varphi \int_0^2 (4 - r^2) r \, dr = 2\pi \int_0^2 (4r - r^3) \, dr$$
6. Integrallaymiz:
   $$I = 2\pi \left[ 2r^2 - \frac{r^4}{4} \right]_0^2 = 2\pi \left( 2(4) - \frac{16}{4} \right) = 2\pi (8 - 4) = 8\pi$$

---

## 4. Gauss-Ostrogradskiy va Stoks teoremalari bilan bog'liqlik

- **Gauss-Ostrogradskiy formulasi:** Yopiq sirt bo'yicha 2-tur sirt integrali jism bo'yicha uch karrali integralga teng bo'ladi:
  $$\oiint_S P\,dydz + Q\,dzdx + R\,dxdy = \iiint_V \left(\frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z}\right) dxdydz$$
- **Stoks formulasi:** Fazoviy egri chiziq bo'yicha chiziqli integral ushbu chiziqni tortib turuvchi sirt bo'yicha sirt integraliga tengdir.

---

## ⚠️ Talabalar eng ko'p yo'l qo'yadigan xatolar va tuzoqlar

1. **1-tur sirt integralida $d\sigma$ ning ildiz koeffitsiyentini unutish:**
   Ko'pchilik $d\sigma$ o'rniga shunchaki $dxdy$ deb yozib ketadi. $\sqrt{1 + (z'_x)^2 + (z'_y)^2}$ ko'paytuvchisini unutish butun natijani xato qiladi!
2. **2-tur sirt integralida oriyentatsiya ishorasini hisobga olmaslik:**
   Agar masalada sirtning "pastki tomoni" (yoki yopiq sirtning "ichki tomoni") so'ralsa, integral oldiga **minus ($-$)** ishorasi qo'yilishi shart.
3. **Koordinata tekisliklariga proyeksiyalashni adashtirish:**
   - $dydz$ qatnashsa — $yOz$ tekisligiga proyeksiyalanadi ($x = x(y, z)$);
   - $dzdx$ qatnashsa — $xOz$ tekisligiga proyeksiyalanadi ($y = y(x, z)$);
   - $dxdy$ qatnashsa — $xOy$ tekisligiga proyeksiyalanadi ($z = z(x, y)$).

---

## ✏️ Mustaqil yechish uchun amaliy mashqlar va javoblar

1. $z = 0$ tekislikdagi $x^2 + y^2 \le 1$ doiraning yuzini 1-tur sirt integrali orqali hisoblang.
   *Javob:* $\pi$ ($z'_x = 0, z'_y = 0 \implies d\sigma = dxdy$).
2. Radiusi $R$ bo'lgan sferaning to'liq sirt yuzini hisoblang.
   *Javob:* $4\pi R^2$.
3. $\iint_S (x\,dydz + y\,dzdx + z\,dxdy)$ integralini birlik kub ($0 \le x, y, z \le 1$) tashqi sirti bo'yicha Gauss-Ostrogradskiy formulasi bilan hisoblang.
   *Javob:* $\iiint_V (1 + 1 + 1) dV = 3 \cdot 1 = 3$.
