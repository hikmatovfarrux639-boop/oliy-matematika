---
title: "Vektor maydon oqimi, Divergensiya va Gauss-Ostrogradskiy formulasi"
module: "karrali-integrallar"
order: 5
description: "Skalyar va vektor maydonlar, sirt integrallari, vektor maydon oqimi (potok), divergensiya tushunchasi va Gauss-Ostrogradskiy teoremasi yordamida oqimni 3 karrali integralga keltirish."
---

## Kirish: Fizik maydonlar va matematika

Tasavvur qiling: daryo suvi oqmoqda. Har bir nuqtada suv ma'lum tezlik va yo'nalishga ega — bu **vektor maydoni** $\vec{a}(x, y, z)$ dir.
Agar daryoga to'r (yoki biror sirt $\Omega$) botirsak, bir soniyada shu sirt orqali qancha suv oqib o'tadi?

Mana shu miqdor fizikada va elektrodinamikada **vektor maydon oqimi (potok)** deb ataladi!
Ushbu darsda biz:
1. Sirt integrallarini;
2. Vektor maydon oqimini;
3. Maydonning "manba" zichligini bildiruvchi **Divergensiya**ni;
4. Murakkab sirt integrallarini bir zumda 3 karrali integral orqali yechib beruvchi **Gauss–Ostrogradskiy formulasini** o'rganamiz.

---

## 1. Skalyar va vektor maydonlar

* **Skalyar maydon:** Fazoning har bir $M(x, y, z)$nuqtasiga bitta son mos keladi:$u = u(x, y, z)$ (masalan, xonadagi harorat taqsimoti, atmosfera bosimi).
  * Skalyar maydonning o'zgarish yo'nalishi va tezligi **Gradiyent** bilan ifodalanadi:
    
$$
    \operatorname{grad} u = \frac{\partial u}{\partial x}\vec{i} + \frac{\partial u}{\partial y}\vec{j} + \frac{\partial u}{\partial z}\vec{k}
    
$$
* **Vektor maydon:** Fazoning har bir nuqtasiga bitta vektor mos keladi:
  
$$
  \vec{a}(x, y, z) = P(x, y, z)\vec{i} + Q(x, y, z)\vec{j} + R(x, y, z)\vec{k}
  
$$
  (masalan, elektr maydon kuchlanganligi $\vec{E}$, magnit maydon induksiyasi $\vec{B}$, shamol tezligi).

---

## 2. Vektor maydon oqimi (Potok)

$\vec{a} = P\vec{i} + Q\vec{j} + R\vec{k}$vektor maydoni va oriyentatsiyalangan$\Omega$sirti berilgan bo'lsin.$\vec{n} = (\cos\alpha, \cos\beta, \cos\gamma)$— sirtga o'tkazilgan birlik normal vektor bo'lsin.$\vec{a}$vektor maydonining$\Omega$ sirt orqali **oqimi ($\Pi$)** deb quyidagi sirt integraliga aytiladi:
$$
\Pi = \iint_{\Omega} (\vec{a} \cdot \vec{n}) \, d\sigma = \iint_{\Omega} (P\cos\alpha + Q\cos\beta + R\cos\gamma) \, d\sigma
$$

Koordinatalar bo'yicha yozilganda:
$$
\Pi = \iint_{\Omega} P \, dy dz + Q \, dz dx + R \, dx dy
$$

Fizik ma'nosi: Agar $\vec{a}$suyuqlik tezlik maydoni bo'lsa,$\Pi$— birlik vaqt ichida$\Omega$ sirtidan oqib o'tgan suyuqlik hajmidir.

---

## 3. Divergensiya tushunchasi

Vektor maydonning har bir nuqtadagi "manba" (yoki "yutuvchi") kuchini o'lchovchi skalyar miqdor **Divergensiya** (lotincha *divergere* — tarqalish) deyiladi:

$$
\operatorname{div} \vec{a} = \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z}
$$

* Agar $\operatorname{div} \vec{a} > 0$ bo'lsa — bu nuqtada maydonning **manbasi** (fontan) bor, ya'ni maydon chiziqlari bu nuqtadan tashqariga sochiladi.
* Agar $\operatorname{div} \vec{a} < 0$ bo'lsa — bu nuqtada **yutuvchi** (voronka) bor.
* Agar $\operatorname{div} \vec{a} = 0$bo'lsa — maydon **solenoidal** (quvursimon) deyiladi, unda manba ham, yutuvchi ham yo'q (masalan, magnit maydoni:$\operatorname{div} \vec{B} = 0$).

---

## 4. Gauss-Ostrogradskiy formulasi (Eng kuchli teorema)

Agar $\Omega$— biror fazoviy$V$ hajmli jismni o'rab turgan **yopiq sirt** bo'lsa, uning tashqi tomoni orqali o'tuvchi oqim ushbu jism bo'yicha olingan **uch karrali integralga** teng bo'ladi!

$$
\oiint_{\Omega} P \, dy dz + Q \, dz dx + R \, dx dy = \iiint_V \operatorname{div} \vec{a} \, dx dy dz
$$

yoki qisqacha:
$$
\oiint_{\Omega} (\vec{a} \cdot \vec{n}) \, d\sigma = \iiint_V \left( \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z} \right) dx dy dz
$$

> [!TIP]
> Bu teorema 6 ta turli sirt bo'yicha alohida-alohida sirt integrallarini hisoblab o'tirish o'rniga, barchasini bitta uch karrali integralga aylantirib, masalani 10 barobar osonlashtiradi!

---

## 5. To'liq yechilgan namunaviy masalalar

### 1-misol: Divergensiyani hisoblash
**Shart:** $\vec{a} = (x^3 + y)\vec{i} + (y^3 + z)\vec{j} + (z^3 + x)\vec{k}$vektor maydonining$M(1, -1, 2)$ nuqtadagi divergensiyasini toping.

**Yechish:**
1. Xususiy hosilalarni olamiz:
   * $\frac{\partial P}{\partial x} = \frac{\partial}{\partial x}(x^3 + y) = 3x^2$*$\frac{\partial Q}{\partial y} = \frac{\partial}{\partial y}(y^3 + z) = 3y^2$*$\frac{\partial R}{\partial z} = \frac{\partial}{\partial z}(z^3 + x) = 3z^2$
2. Divergensiya formulasi:
   
$$
   \operatorname{div} \vec{a} = 3x^2 + 3y^2 + 3z^2 = 3(x^2 + y^2 + z^2)
   
$$
3. $M(1, -1, 2)$ nuqtadagi qiymati:
   
$$
   \operatorname{div} \vec{a}(M) = 3(1^2 + (-1)^2 + 2^2) = 3(1 + 1 + 4) = 3 \cdot 6 = 18
   
$$
**Javob:** $\mathbf{\operatorname{div} \vec{a}(M) = 18}$ (Nuqtada musbat manba mavjud).

---

### 2-misol: Gauss-Ostrogradskiy bo'yicha oqimni topish
**Shart:** $\vec{a} = 2x\vec{i} - y\vec{j} + 3z\vec{k}$vektor maydonining$x^2 + y^2 + z^2 = R^2$ sferaning tashqi sirti orqali oqimini hisoblang.

**Yechish:**
1. Sirt yopiq (shar sirti), demak Gauss–Ostrogradskiy formulasini qo'llaymiz:
   $\Pi = \iiint_V \operatorname{div} \vec{a} \, dV$.
2. Maydon divergensiyasini hisoblaymiz:
   
$$
   \operatorname{div} \vec{a} = \frac{\partial(2x)}{\partial x} + \frac{\partial(-y)}{\partial y} + \frac{\partial(3z)}{\partial z} = 2 - 1 + 3 = 4
   
$$
3. Divergensiya o'zgarmas son ($4$) bo'lib chiqdi! Uni integral belgisi oldiga chiqaramiz:
   
$$
   \Pi = \iiint_V 4 \, dV = 4 \iiint_V dV = 4 \cdot V_{\text{shar}}
   
$$
4. Radiusi $R$bo'lgan sharning hajmi$V = \frac{4}{3}\pi R^3$ ekani ma'lum:
   
$$
   \Pi = 4 \cdot \left(\frac{4}{3}\pi R^3\right) = \frac{16}{3}\pi R^3
   
$$
**Javob:** $\mathbf{\Pi = \frac{16}{3}\pi R^3}$

---

## ⚠️ Imtihondagi tuzoqlar (Tipik talaba xatolari)

> [!WARNING]
> 1. **Ochiq sirtga formulani qo'llash xatosi:** Gauss-Ostrogradskiy formulasi **faqat yopiq sirtlar** (shar, silindr, paralelepiped) uchun to'g'ri keladi. Agar sirt ochiq bo'lsa (masalan, kosacha yoki yarim sfera), uni yopiq qilish uchun qopqoq (asos) qo'shish kerak va so'ngra qopqoq oqimini ayirib tashlash lozim.
> 2. **Sirt normalining yo'nalishi:** Agar masalada "ichki normal" bo'yicha oqim so'ralsa, Gauss-Ostrogradskiy integralining oldiga **minus ishora** qo'yiladi. Tashqi normalda musbat bo'ladi.

---

## ✍️ O'zingizni sinab ko'ring (Mustaqil mashq)

**Masala:** $\vec{a} = x\vec{i} + y\vec{j} + z\vec{k}$vektor maydonining birlik kub$0 \le x \le 1, 0 \le y \le 1, 0 \le z \le 1$ ning to'liq tashqi sirti orqali o'tuvchi oqimini toping.

<details>
<summary>👉 To'liq yechimni ko'rish (Tekshirish)</summary>

**Yechish bosqichlari:**
1. Kubning yopiq sirti berilgan, Gauss-Ostrogradskiy formulasidan foydalanamiz.
2. Divergensiyani hisoblaymiz:
   
$$
   \operatorname{div} \vec{a} = \frac{\partial x}{\partial x} + \frac{\partial y}{\partial y} + \frac{\partial z}{\partial z} = 1 + 1 + 1 = 3
   
$$
3. Kub bo'yicha integral:
   
$$
   \Pi = \iiint_V 3 \, dx dy dz = 3 \cdot V_{\text{kub}}
   
$$
4. Tomoni 1 ga teng kubning hajmi: $V = 1 \cdot 1 \cdot 1 = 1$.
   
$$
   \Pi = 3 \cdot 1 = 3
   
$$

**Javob:** $\mathbf{\Pi = 3}$

</details>
