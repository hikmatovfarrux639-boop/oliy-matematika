---
title: "Vektor maydon oqimi va Gauss-Ostrogradskiy formulasi"
module: "karrali-integrallar"
order: 8
description: "Sirt integrallari, yopiq sirt orqali o'tuvchi vektor maydon oqimi (flux), divergensiya tushunchasi va Gauss-Ostrogradskiy teoremasining amaliy qo'llanilishi."
---

## 📌 Kirish va Geometrik/Fizik Mohiyat

Gidravlika, elektrodinamika, issiqlik o'tkazuvchanlik va aerokosmik muhandislikda eng markaziy fizik tushunchalardan biri — **vektor maydon oqimi (flux)** hisoblanadi. 
Daryodan oqayotgan suv quvur to'sig'idan bir sekundda qancha hajmda o'tadi? Zaryadlangan zarracha atrofidagi elektrostatik maydon kuch chiziqlari yopiq sferani qanday intensivlik bilan teshib chiqadi? Biror sohada issiqlik to'planmoqdami yoki tarqalyaptimi?

Bu savollarga bevosita 2-tur sirt integrali orqali javob berish amalda nihoyatda og'ir bo'lishi mumkin. Masalan, agar jism kub shaklida bo'lsa, uning yopiq sirti 6 ta yoqdan iborat bo'lib, oqimni topish uchun 6 ta alohida sirt integralini hisoblash talab etiladi!

Buyuk rus matematigi Mixail Ostrogradskiy va nemis matematigi Karl Fridrix Gauss tomonidan kashf etilgan **Gauss-Ostrogradskiy formulasi** matematik tahlilning eng buyuk yutuqlaridan biridir. U yopiq sirt bo'yicha olingan ikki o'lchamli 2-tur sirt integralini jism hajmi bo'yicha olingan uch karrali integralga bog'laydi. Bu bir o'lchamli matematikadagi mashhur Nyuton-Leybnits formulasining uch o'lchamli fazodagi bevosita umumlashmasidir!

---

## 📐 Asosiy Nazariya, Qoidalar va Teoremalar

### 1. Vektor maydon divergensiyasi (Manba quvvati)

Fazoda koordinatalari bo'yicha uzluksiz xususiy hosilalarga ega bo'lgan vektor maydon berilgan bo'lsin:
$$\vec{F}(x, y, z) = P(x, y, z)\vec{i} + Q(x, y, z)\vec{j} + R(x, y, z)\vec{k}$$

Ushbu vektor maydonning **divergensiyasi** (lotincha *divergere* — tarqalish, yoyilish) deb quyidagi skalyar hosilalar yig'indisiga aytiladi:
$$\operatorname{div}\vec{F} = \nabla \cdot \vec{F} = \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z}$$

#### Divergensiyaning fizik ma'nosi:
Divergensiya fazoning berilgan nuqtasidagi maydon **manbasi (istoki)** yoki **yutgichi (stoki)** ning hajmiy zichligini ifodalaydi:
- **$\operatorname{div}\vec{F}(M) > 0$:** Nuqta maydonning **musbat manbasi (istok)** dir. Bu nuqtada suyuqlik yoki kuch chiziqlari hosil bo'lib, tashqariga tarqalmoqda (masalan, musbat elektr zaryadi).
- **$\operatorname{div}\vec{F}(M) < 0$:** Nuqta maydonning **oqmasi yoki yutgichi (stok)** dir. Kuch chiziqlari bu nuqtaga kirib yutilmoqda (masalan, manfiy elektr zaryadi).
- **$\operatorname{div}\vec{F}(M) = 0$:** Nuqtada manba ham, yutgich ham yo'q. Bunday vektor maydon **solenoidal (oqmasiz)** maydon deb ataladi (masalan, statsionar suyuqlik oqimi yoki magnit maydoni: $\operatorname{div}\vec{B} = 0$).

---

### 2. Gauss-Ostrogradskiy teoremasi

#### Teorema ifodasi:
Fazoda bo'lakli-silliq yopiq $S$ sirti bilan chegaralangan $V$ hajmli jism berilgan bo'lsin. Agar $\vec{F} = (P, Q, R)$ vektor maydonining $P, Q, R$ komponentlari va ularning birinchi tartibli xususiy hosilalari $V \cup S$ sohada uzluksiz bo'lsa, u holda $\vec{F}$ maydonning $S$ sirtning **tashqi tomoni** bo'yicha to'liq oqimi ushbu vektor maydon divergensiyasining $V$ jism bo'yicha uch karrali integraliga teng bo'ladi:

$$\oiint_S P \, dy\,dz + Q \, dz\,dx + R \, dx\,dy = \iiint_V \left( \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z} \right) dx\,dy\,dz$$

Vektor va normal ko'rinishida:
$$\oiint_S (\vec{F} \cdot \vec{n}) \, d\sigma = \iiint_V \operatorname{div}\vec{F} \, dV$$
bu yerda $\vec{n} = (\cos\alpha, \cos\beta, \cos\gamma)$ — $S$ sirtning tashqi birlik normal vektori.

#### Teoremaning bajarilish shartlari:
1. Sirt albatta **yopiq** bo'lishi kerak.
2. Normal vektor **tashqi** tomonga qaratilgan bo'lishi shart. Agar masala shartida ichki normal berilgan bo'lsa, integral oldiga minus ($-$) belgisi qo'yiladi.
3. Soha ichida funksiyalarning uzilish nuqtalari (masalan, $\frac{1}{r^2}$ kabi singularliklar) bo'lmasligi lozim.

---

### 3. Ochiq sirtlar uchun "Qopqoq qo'shish" usuli

Agar berilgan $S$ sirti yopiq bo'lmasa (masalan, kosasimon paraboloid, yarim sfera yoki silindrning yon sirti), Gauss-Ostrogradskiy formulasini to'g'ridan-to'g'ri qo'llab bo'lmaydi.
Bunday hollarda sirtga sun'iy ravishda tekis "qopqoq" (asos) $S_{\text{asos}}$ qo'shilib, yopiq $S_{\text{yopiq}} = S + S_{\text{asos}}$ sirti hosil qilinadi:
$$\oiint_{S_{\text{yopiq}}} = \iint_S + \iint_{S_{\text{asos}}} = \iiint_V \operatorname{div}\vec{F} \, dV$$
Bundan qidirilayotgan ochiq sirt integrali oson topiladi:
$$\iint_S (\vec{F} \cdot \vec{n}) \, d\sigma = \iiint_V \operatorname{div}\vec{F} \, dV - \iint_{S_{\text{asos}}} (\vec{F} \cdot \vec{n}) \, d\sigma$$
Tekis asos bo'yicha integralni hisoblash esa nihoyatda oson, chunki u yerda o'zgaruvchilardan biri o'zgarmas (masalan, $z = 0$) bo'ladi!

---

## 📝 Qadamma-qadam Yechilgan Universitet Misollari

### 1-Misol: Kub sirti bo'yicha vektor oqimi
Quyidagi sirt integralini hisoblang:
$$\Pi = \oiint_S x^3 \, dy\,dz + y^3 \, dz\,dx + z^3 \, dx\,dy$$
bu yerda $S$ — $0 \le x \le 1, \; 0 \le y \le 1, \; 0 \le z \le 1$ birlik kubining to'liq tashqi sirti.

**Yechish:**
1. Agar bu masalani to'g'ridan-to'g'ri yechmoqchi bo'lsak, kubning 6 ta yog'i ($x=0, x=1, y=0, y=1, z=0, z=1$) bo'yicha 6 ta sirt integralini hisoblashga to'g'ri kelardi. Sirt yopiq bo'lgani sababli Gauss-Ostrogradskiy formulasini qo'llaymiz.
2. Vektor maydon komponentlarini aniqlaymiz:
   $$P = x^3, \quad Q = y^3, \quad R = z^3$$
3. Divergensiyani hisoblaymiz:
   $$\operatorname{div}\vec{F} = \frac{\partial (x^3)}{\partial x} + \frac{\partial (y^3)}{\partial y} + \frac{\partial (z^3)}{\partial z} = 3x^2 + 3y^2 + 3z^2 = 3(x^2 + y^2 + z^2)$$
4. Gauss-Ostrogradskiy formulasiga ko'ra uch karrali integralga o'tamiz:
   $$\Pi = \iiint_V 3(x^2 + y^2 + z^2) \, dx\,dy\,dz$$
5. Integrallash sohasi $V$ — to'g'ri burchakli kub bo'lgani uchun integral uchta bir karrali integral ko'paytmalariga ajraladi:
   $$\Pi = 3 \left( \int_0^1 x^2 dx \int_0^1 dy \int_0^1 dz + \int_0^1 dx \int_0^1 y^2 dy \int_0^1 dz + \int_0^1 dx \int_0^1 dy \int_0^1 z^2 dz \right)$$
6. Simmetriya tufayli uchala had ham teng:
   $$\int_0^1 x^2 \, dx = \left[ \frac{x^3}{3} \right]_0^1 = \frac{1}{3}, \qquad \int_0^1 dy = 1, \qquad \int_0^1 dz = 1$$
   Har bir had $\frac{1}{3} \cdot 1 \cdot 1 = \frac{1}{3}$ ga teng.
   $$\Pi = 3 \left( \frac{1}{3} + \frac{1}{3} + \frac{1}{3} \right) = 3 \cdot 1 = 3$$

**Javob:** $\Pi = 3$.

---

### 2-Misol: Sfera sirti bo'yicha oqim va simmetriya
Vektor maydon $\vec{F} = x^2\vec{i} + y^2\vec{j} + z^2\vec{k}$ ning $x^2 + y^2 + z^2 = R^2$ shar sferasining tashqi sirti bo'yicha oqimini hisoblang.

**Yechish:**
1. Sirt yopiq sfera sirtidir. Gauss-Ostrogradskiy formulasini qo'llaymiz.
2. Divergensiyani hisoblaymiz:
   $$\operatorname{div}\vec{F} = \frac{\partial (x^2)}{\partial x} + \frac{\partial (y^2)}{\partial y} + \frac{\partial (z^2)}{\partial z} = 2x + 2y + 2z = 2(x + y + z)$$
3. Uch karrali integralni tuzamiz:
   $$\Pi = \iiint_V 2(x + y + z) \, dx\,dy\,dz = 2 \left( \iiint_V x \, dV + \iiint_V y \, dV + \iiint_V z \, dV \right)$$
   bu yerda $V: x^2 + y^2 + z^2 \le R^2$ — radiusi $R$ bo'lgan shar.
4. Simmetriya tahlili: $V$ shari koordinatalar boshiga nisbatan mutlaq simmetrik jismdir. $f(x) = x$, $g(y) = y$, $h(z) = z$ funksiyalari esa toq funksiyalardir!
   Simmetrik soha bo'yicha toq funksiyaning integrali aynan nolga teng:
   $$\iiint_V x \, dV = 0, \quad \iiint_V y \, dV = 0, \quad \iiint_V z \, dV = 0$$
5. Demak:
   $$\Pi = 2(0 + 0 + 0) = 0$$

**Javob:** $\Pi = 0$.

---

### 3-Misol: Silindrik jism bo'yicha oqim
Ushbu integralni hisoblang:
$$\Pi = \oiint_S (2x\vec{i} - y\vec{j} + z^2\vec{k}) \cdot \vec{n} \, d\sigma$$
bu yerda $S$ — $x^2 + y^2 \le 4, \; 0 \le z \le 3$ to'liq silindr sirti (yon sirti hamda $z=0$ va $z=3$ asoslari), $\vec{n}$ — tashqi normal.

**Yechish:**
1. Maydon komponentlari: $P = 2x, \; Q = -y, \; R = z^2$.
2. Divergensiya:
   $$\operatorname{div}\vec{F} = \frac{\partial(2x)}{\partial x} + \frac{\partial(-y)}{\partial y} + \frac{\partial(z^2)}{\partial z} = 2 - 1 + 2z = 1 + 2z$$
3. Gauss-Ostrogradskiy formulasiga ko'ra:
   $$\Pi = \iiint_V (1 + 2z) \, dx\,dy\,dz$$
4. Silindrik koordinatalarga o'tamiz:
   $$x = r\cos\varphi, \quad y = r\sin\varphi, \quad z = z, \quad dV = r \, dr \, d\varphi \, dz$$
   Chegaralar: $\varphi \in [0, 2\pi], \; r \in [0, 2], \; z \in [0, 3]$.
5. Integralni hisoblaymiz:
   $$\Pi = \int_0^{2\pi} d\varphi \int_0^2 r \, dr \int_0^3 (1 + 2z) \, dz$$
   - $\varphi$ bo'yicha: $\int_0^{2\pi} d\varphi = 2\pi$
   - $r$ bo'yicha: $\int_0^2 r \, dr = \left[ \frac{r^2}{2} \right]_0^2 = 2$
   - $z$ bo'yicha: $\int_0^3 (1 + 2z) \, dz = \left[ z + z^2 \right]_0^3 = 3 + 9 = 12$
6. Ko'paytiramiz:
   $$\Pi = 2\pi \cdot 2 \cdot 12 = 48\pi$$

**Javob:** $\Pi = 48\pi$.

---

### 4-Misol: Ochiq sirt va qopqoq usuli
Vektor maydon $\vec{F} = x\vec{i} + y\vec{j} + z\vec{k}$ ning $z = 4 - x^2 - y^2$ paraboloidining faqat $z \ge 0$ qismi bo'lgan **ochiq sirt** orqali o'tuvchi oqimini hisoblang (normal yuqoriga/tashqariga yo'nalgan).

**Yechish:**
1. Sirt ochiq — uning tubidagi $z = 0$ asosi mavjud emas. Shuning uchun unga $z = 0$ tekisligidagi $S_0: x^2 + y^2 \le 4$ doiraviy asosini qo'shib, yopiq sirt hosil qilamiz.
2. Yopiq sirt uchun Gauss-Ostrogradskiy formulasi:
   $$\iint_S (\vec{F} \cdot \vec{n}) \, d\sigma + \iint_{S_0} (\vec{F} \cdot \vec{n}_0) \, d\sigma = \iiint_V \operatorname{div}\vec{F} \, dV$$
3. Divergensiyani hisoblaymiz:
   $$\operatorname{div}\vec{F} = \frac{\partial x}{\partial x} + \frac{\partial y}{\partial y} + \frac{\partial z}{\partial z} = 1 + 1 + 1 = 3$$
4. Hajmiy integralni topamiz:
   $$\iiint_V \operatorname{div}\vec{F} \, dV = 3 \iiint_V dV = 3 V_{\text{jism}}$$
   Paraboloid hajmi:
   $$V = \int_0^{2\pi} d\varphi \int_0^2 r \, dr \int_0^{4-r^2} dz = 2\pi \int_0^2 r (4 - r^2) \, dr = 2\pi \left[ 2r^2 - \frac{r^4}{4} \right]_0^2 = 2\pi (8 - 4) = 8\pi$$
   Demak, uch karrali integral:
   $$3 \cdot 8\pi = 24\pi$$
5. Endi pastki qopqoq $S_0$ bo'yicha oqimni hisoblaymiz:
   $S_0$ tekisligida $z = 0$. Tashqi normal pastga qaratilgan: $\vec{n}_0 = (0, 0, -1) = -\vec{k}$.
   Maydonning skalyar ko'paytmasi:
   $$\vec{F} \cdot \vec{n}_0 = (x\vec{i} + y\vec{j} + 0\vec{k}) \cdot (-\vec{k}) = 0$$
   Demak, pastki asos orqali oqim aynan nolga teng: $\iint_{S_0} (\vec{F} \cdot \vec{n}_0) \, d\sigma = 0$!
6. Ochiq sirt orqali oqim:
   $$\iint_S (\vec{F} \cdot \vec{n}) \, d\sigma = 24\pi - 0 = 24\pi$$

**Javob:** $24\pi$.

---

## ⚠️ Talabalar Eng Ko'p Yo'l Qo'yadigan Xatolar va Tuzoqlar

1. **Ochiq sirtga ko'r-ko'rona Gauss-Ostrogradskiyni qo'llash:**
   Ko'plab talabalar sirtning ochiqligiga e'tibor bermay, darhol uch karrali integralga o'tib ketishadi. Natijada qo'shilishi kerak bo'lgan asos (qopqoq) hisobga olinmay, javob xato chiqadi. Har doim tekshiring: sirt to'liq yopiq hajm hosil qilganmi?

2. **Normal yo'nalishini (ichki/tashqi) teskari tushunish:**
   Gauss-Ostrogradskiy teoremasi **tashqi normal** uchun o'rinli. Agar masalada "ichki normal bo'yicha oqimni toping" deyilgan bo'lsa, uch karrali integral oldiga minus belgisi qo'yilishi shart: $\Pi_{\text{ichki}} = -\iiint_V \operatorname{div}\vec{F} \, dV$.

3. **Singulyarlik (maxsus nuqta) mavjud bo'lganda formulani qo'llash:**
   Agar vektor maydon koordinatalar boshida uzilishga ega bo'lsa (masalan $\vec{F} = \frac{\vec{r}}{r^3}$), bu nuqtada hosilalar mavjud emas. Agar shar ichida koordinatalar boshi yotsa, to'g'ridan-to'g'ri Gauss-Ostrogradskiyni qo'llab $\operatorname{div} = 0 \implies \Pi = 0$ deb bo'lmaydi! Bu holda Gauss teoremasiga ko'ra oqim $4\pi$ ga teng bo'ladi.

4. **Hosilalar tartibini adashtirish:**
   $\operatorname{div}\vec{F}$ da $P$ funksiya faqat $x$ bo'yicha, $Q$ faqat $y$ bo'yicha, $R$ faqat $z$ bo'yicha olinadi. Rotor ($\operatorname{rot}\vec{F}$) bilan divergensiyani adashtirib, aralash hosilalar olib ketish eng achinarli xatolardan biridir.

---

## 🎯 Mustaqil Yechish Uchun Amaliy Mashqlar va Yechimlar

### 1-Mashq
Vektor maydon $\vec{F} = x\vec{i} + y\vec{j} + z\vec{k}$ ning $x^2 + y^2 + z^2 = 9$ sfera sirtining tashqi tomoni bo'yicha oqimini hisoblang.

<details>
<summary>👉 Bosqichma-bosqich yechimni ko'rish</summary>

1. Divergensiyani hisoblaymiz:
   $$\operatorname{div}\vec{F} = \frac{\partial x}{\partial x} + \frac{\partial y}{\partial y} + \frac{\partial z}{\partial z} = 1 + 1 + 1 = 3$$
2. Gauss-Ostrogradskiy formulasiga ko'ra:
   $$\Pi = \iiint_V 3 \, dV = 3 V_{\text{shar}}$$
3. Radiusi $R = 3$ bo'lgan shar hajmi:
   $$V = \frac{4}{3}\pi R^3 = \frac{4}{3}\pi \cdot 27 = 36\pi$$
4. Oqim:
   $$\Pi = 3 \cdot 36\pi = 108\pi$$
**Javob:** $108\pi$.
</details>

---

### 2-Mashq
Ushbu integralni hisoblang:
$$\Pi = \oiint_S (yz \, dy\,dz + xz \, dz\,dx + xy \, dx\,dy)$$
bu yerda $S$ — $0 \le x \le a, \; 0 \le y \le b, \; 0 \le z \le c$ to'g'ri burchakli parallelepipedning to'liq tashqi sirti.

<details>
<summary>👉 Bosqichma-bosqich yechimni ko'rish</summary>

1. Maydon komponentlari: $P = yz, \; Q = xz, \; R = xy$.
2. Divergensiya:
   $$\operatorname{div}\vec{F} = \frac{\partial(yz)}{\partial x} + \frac{\partial(xz)}{\partial y} + \frac{\partial(xy)}{\partial z} = 0 + 0 + 0 = 0$$
3. Gauss-Ostrogradskiy formulasiga ko'ra:
   $$\Pi = \iiint_V 0 \, dV = 0$$
**Javob:** $\Pi = 0$.
</details>

---

### 3-Mashq
Vektor maydon $\vec{F} = x^3\vec{i} + y^3\vec{j} + z^3\vec{k}$ ning $x^2 + y^2 + z^2 \le R^2$ sharning tashqi sirti bo'yicha oqimini toping.

<details>
<summary>👉 Bosqichma-bosqich yechimni ko'rish</summary>

1. Divergensiya:
   $$\operatorname{div}\vec{F} = 3x^2 + 3y^2 + 3z^2 = 3(x^2 + y^2 + z^2)$$
2. Oqim integrali:
   $$\Pi = 3 \iiint_V (x^2 + y^2 + z^2) \, dV$$
3. Sferik koordinatalarga o'tamiz ($x^2 + y^2 + z^2 = r^2, \; dV = r^2 \sin\theta \, dr \, d\theta \, d\varphi$):
   $$\Pi = 3 \int_0^{2\pi} d\varphi \int_0^\pi \sin\theta \, d\theta \int_0^R r^2 \cdot r^2 \, dr$$
4. Bir karrali integrallarni hisoblaymiz:
   $$\int_0^{2\pi} d\varphi = 2\pi, \qquad \int_0^\pi \sin\theta \, d\theta = 2, \qquad \int_0^R r^4 \, dr = \frac{R^5}{5}$$
5. Ko'paytiramiz:
   $$\Pi = 3 \cdot 2\pi \cdot 2 \cdot \frac{R^5}{5} = \frac{12\pi R^5}{5}$$
**Javob:** $\frac{12}{5}\pi R^5$.
</details>

---

## 💡 Imtihon Layfhaklari va Tezkor Maslahatlar

- **O'zgarmas divergensiya layfhaki:**
  Agar vektor maydon chiziqli bo'lsa (masalan $\vec{F} = a x \vec{i} + b y \vec{j} + c z \vec{k}$), uning divergensiyasi o'zgarmas son bo'ladi: $\operatorname{div}\vec{F} = a + b + c$.
  Bunday holda hech qanday murakkab integrallash shart emas:
  $$\Pi = (a + b + c) \cdot V_{\text{jism}}$$
  Faqat jismning maktab geometriyasidan ma'lum hajmini (shar, konus, silindr, kub) ko'paytirib, javobni 5 soniyada yozing!

- **Toq simmetriya tekshiruvi:**
  Agar jism markazi $(0,0,0)$ bo'lib, $\operatorname{div}\vec{F}$ ifodasida faqat $x, y, z$ larning toq darajalari qatnashsa (masalan $x, y, z, xy^2, z^3$), integral darhol $0$ ga teng bo'ladi.
