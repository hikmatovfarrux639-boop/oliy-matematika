---
title: "1- va 2-tur sirt integrallari: Sirt massasi va Vektor maydon oqimini hisoblash"
module: "karrali-integrallar"
order: 10
description: "Sirt integrallari: 1-tur sirt integrali (skalyar maydon, sirt yuzi va massasi dσ), 2-tur sirt integrali (vektor maydon, sirt orqali oqim dydz, dzdx, dxdy), sirt oriyentatsiyasi va ikki karrali integralga keltirish."
---

## 📌 Kirish va Geometrik/Fizik Mohiyat

Biz ikki karrali integrallarda tekislikdagi ($xOy$) yassi sohalarni o'rgandik. Biroq, real hayotda moddiy obyektlar ko'pincha fazoda egri-bugri bo'lgan uch o'lchamli sirtlardan iborat bo'ladi (masalan, samolyot fuzelyaji, kosmik stansiya gumbazi, daryo to'g'oni yoki hujayra membranasi).

Fazoviy sirtlarni o'rganishda fizik va geometrik masalalar ikki xil fundamental savolga bo'linadi:
1. **Skalyar xossalar:** Egri sirtning to'liq yuzi qancha? Agar sirt yupqa metall qatlamidan yasalgan va zichligi har xil bo'lsa, uning massasi va og'irlik markazi qayerda joylashgan? Bu yerda sirtning "qaysi tomoni" olingani ahamiyatsiz — muhimi har bir $d\sigma$ sirt bo'lagining o'lchami va unga to'g'ri keluvchi skalyar miqdordir. Buni **1-tur sirt integrali** hal qiladi.
2. **Vektor xossalar (Oqim):** Egri sirt orqali sekundiga qancha hajmda suv oqib o'tmoqda? Magnit yoki elektrostatik maydon kuch chiziqlari ushbu to'siqdan qanday intensivlik bilan teshib o'tadi? Bu yerda sirtning qaysi tomoniga (ichkaridan tashqarigami yoki tashqaridan ichkarigami) oqayotgani hal qiluvchi ahamiyatga ega! Buni **2-tur sirt integrali** o'rganadi.

Ushbu darsda Fichtenholz va Kudryavtsev akademik standartlari asosida har ikkala sirt integralini, ularning oriyentatsiyasini va ikki karrali integrallarga keltirish algoritmini to'liq tahlil qilamiz.

---

## 📐 Asosiy Nazariya, Qoidalar va Teoremalar

### 1. 1-tur sirt integrali (Skalyar maydon bo'yicha: $\iint_S f(x, y, z) \, d\sigma$)

#### Ta'rifi:
Fazoda chegaralangan, silliq yoki bo'lakli-silliq $S$ sirti berilgan bo'lsin. Ushbu sirtda uzluksiz $f(x, y, z)$ funksiyasi aniqlangan. Sirtni ixtiyoriy ravishda $n$ ta mayda $\Delta S_i$ bo'lakchalarga ajratamiz, ularning yuzlarini $\Delta \sigma_i$ deb belgilaymiz. Har bir bo'lakchadan ixtiyoriy $M_i(x_i, y_i, z_i) \in \Delta S_i$ nuqta tanlab, Riman integral yig'indisini tuzamiz:
$$\sum_{i=1}^n f(x_i, y_i, z_i) \Delta \sigma_i$$
Bo'lakchalarning eng katta diametri nolga intilgandagi limit **1-tur sirt integrali** deb ataladi:
$$\iint_S f(x, y, z) \, d\sigma = \lim_{\lambda \to 0} \sum_{i=1}^n f(M_i) \Delta \sigma_i$$

#### Geometrik va fizik ma'nosi:
1. Agar $f(x, y, z) \equiv 1$ bo'lsa, integral $S$ sirtining **geometrik yuzini** beradi:
   $$S_{\text{yuza}} = \iint_S d\sigma$$
2. Agar $f(x, y, z) = \rho(x, y, z)$ sirtiy zichlik bo'lsa, integral **sirtning to'liq massasini** beradi:
   $$M = \iint_S \rho(x, y, z) \, d\sigma$$
3. Og'irlik markazi koordinatalari:
   $$x_c = \frac{1}{M}\iint_S x \rho \, d\sigma, \quad y_c = \frac{1}{M}\iint_S y \rho \, d\sigma, \quad z_c = \frac{1}{M}\iint_S z \rho \, d\sigma$$

#### Ikki karrali integralga keltirish formulalari:
- **Agar sirt $z = z(x, y)$ tenglama bilan berilgan bo'lsa:**
  Uning $xOy$ tekisligidagi proyeksiyasi $D_{xy}$ bo'lsin. Sirt differensiali:
  $$d\sigma = \sqrt{1 + \left(\frac{\partial z}{\partial x}\right)^2 + \left(\frac{\partial z}{\partial y}\right)^2} \, dx\,dy$$
  Integral hisoblash formulasi:
  $$\iint_S f(x, y, z) \, d\sigma = \iint_{D_{xy}} f(x, y, z(x, y)) \sqrt{1 + (z'_x)^2 + (z'_y)^2} \, dx\,dy$$

- **Agar sirt $y = y(x, z)$ yoki $x = x(y, z)$ ko'rinishida berilgan bo'lsa:**
  Mos ravishda $xOz$ yoki $yOz$ koordinata tekisliklariga proyeksiyalanadi:
  $$d\sigma = \sqrt{1 + (y'_x)^2 + (y'_z)^2} \, dx\,dz \quad \text{yoki} \quad d\sigma = \sqrt{1 + (x'_y)^2 + (x'_z)^2} \, dy\,dz$$

---

### 2. Sirt oriyentatsiyasi va 2-tur sirt integrali

Silliq sirt har bir nuqtasida ikkita qarama-qarshi yo'nalgan birlik normal vektorga ega: $\vec{n}$ va $-\vec{n}$. 

Sirtning ma'lum bir tomonini (normal vektorlar yo'nalishini) tanlash **sirtni oriyentatsiyalash** deyiladi.
Birlik normal vektor yo'naltiruvchi kosinuslari orqali yoziladi:
$$\vec{n} = (\cos\alpha, \cos\beta, \cos\gamma), \qquad \cos^2\alpha + \cos^2\beta + \cos^2\gamma = 1$$

Fazoda vektor maydon berilgan bo'lsin:
$$\vec{F}(x, y, z) = P(x, y, z)\vec{i} + Q(x, y, z)\vec{j} + R(x, y, z)\vec{k}$$

#### Ta'rifi (Vektor maydon oqimi):
$\vec{F}$ vektor maydonining tanlangan oriyentatsiyali $S$ sirt orqali o'tuvchi **oqimi** yoki **2-tur sirt integrali** deb quyidagi integralga aytiladi:
$$\Pi = \iint_S (\vec{F} \cdot \vec{n}) \, d\sigma = \iint_S (P\cos\alpha + Q\cos\beta + R\cos\gamma) \, d\sigma$$

Koordinata proyeksiyalaridagi yozilishi:
$$\iint_S P(x, y, z) \, dy\,dz + Q(x, y, z) \, dz\,dx + R(x, y, z) \, dx\,dy$$
bu yerda koordinata differensiallari quyidagi geometrik munosabat bilan bog'langan:
$$dy\,dz = \cos\alpha \, d\sigma, \quad dz\,dx = \cos\beta \, d\sigma, \quad dx\,dy = \cos\gamma \, d\sigma$$

#### Oriyentatsiya va ishora qoidasi:
Integralni $xOy$ tekisligidagi ikki karrali integralga o'tkazishda:
$$\iint_S R(x, y, z) \, dx\,dy = \pm \iint_{D_{xy}} R(x, y, z(x, y)) \, dx\,dy$$
- **Plyus ($+$) ishorasi olinadi:** agar sirtning yuqori tomoni tanlangan bo'lsa (ya'ni normal vektor $Oz$ o'qi bilan o'tkir burchak hosil qilsa: $\cos\gamma > 0$, burchak $\gamma < 90^\circ$);
- **Minus ($-$) ishorasi olinadi:** agar sirtning pastki tomoni tanlangan bo'lsa ($\cos\gamma < 0$, burchak $\gamma > 90^\circ$);
- **Nol ($0$) ga teng bo'ladi:** agar sirt $xOy$ tekisligiga perpendikulyar silindrik sirt bo'lsa ($\cos\gamma = 0$).

---

## 📝 Qadamma-qadam Yechilgan Universitet Misollari

### 1-Misol: 1-tur sirt integrali (Yarim sfera massasi)
Ushbu 1-tur sirt integralini hisoblang:
$$I = \iint_S (x^2 + y^2) \, d\sigma$$
bu yerda $S$ — $z = \sqrt{R^2 - x^2 - y^2}$ yuqori yarim sfera sirti.

**Yechish:**
1. Yarim sfera tenglamasi: $z = \sqrt{R^2 - x^2 - y^2}$. Uning $xOy$ tekisligidagi proyeksiyasi markazi koordinatalar boshida bo'lgan $D_{xy}: x^2 + y^2 \le R^2$ doirasidir.
2. Xususiy hosilalarni topamiz:
   $$\frac{\partial z}{\partial x} = \frac{-x}{\sqrt{R^2 - x^2 - y^2}}, \qquad \frac{\partial z}{\partial y} = \frac{-y}{\sqrt{R^2 - x^2 - y^2}}$$
3. Sirt differensiali $d\sigma$ ni hisoblaymiz:
   $$d\sigma = \sqrt{1 + (z'_x)^2 + (z'_y)^2} \, dx\,dy = \sqrt{1 + \frac{x^2 + y^2}{R^2 - x^2 - y^2}} \, dx\,dy = \sqrt{\frac{R^2}{R^2 - x^2 - y^2}} \, dx\,dy = \frac{R}{\sqrt{R^2 - x^2 - y^2}} \, dx\,dy$$
4. Ikki karrali integralga o'tamiz:
   $$I = \iint_{D_{xy}} (x^2 + y^2) \frac{R}{\sqrt{R^2 - x^2 - y^2}} \, dx\,dy$$
5. Qutb koordinatalar sistemasiga o'tamiz: $x = r\cos\varphi, \; y = r\sin\varphi, \; x^2 + y^2 = r^2, \; dx\,dy = r\,dr\,d\varphi$.
   Chegaralar: $\varphi \in [0, 2\pi], \; r \in [0, R]$:
   $$I = R \int_0^{2\pi} d\varphi \int_0^R \frac{r^2 \cdot r \, dr}{\sqrt{R^2 - r^2}} = 2\pi R \int_0^R \frac{r^3 \, dr}{\sqrt{R^2 - r^2}}$$
6. O'zgaruvchini almashtiramiz: $u = \sqrt{R^2 - r^2} \implies u^2 = R^2 - r^2 \implies r^2 = R^2 - u^2$ va $u\,du = -r\,dr$.
   Chegaralar: $r = 0 \implies u = R$; $r = R \implies u = 0$:
   $$\int_0^R \frac{r^2 (r\,dr)}{\sqrt{R^2 - r^2}} = \int_R^0 \frac{(R^2 - u^2)(-u\,du)}{u} = \int_0^R (R^2 - u^2) \, du = \left[ R^2 u - \frac{u^3}{3} \right]_0^R = \frac{2}{3}R^3$$
7. Yakuniy natija:
   $$I = 2\pi R \cdot \frac{2}{3}R^3 = \frac{4}{3}\pi R^4$$

**Javob:** $\frac{4}{3}\pi R^4$.

---

### 2-Misol: 1-tur sirt integrali (Tekislik uchburchagi)
Integralni hisoblang:
$$I = \iint_S (x + y + z) \, d\sigma$$
bu yerda $S$ — $x + 2y + 3z = 6$ tekisligining birinchi oktantda ($x \ge 0, y \ge 0, z \ge 0$) yotgan uchburchak qismi.

**Yechish:**
1. Tekislik tenglamasidan $z$ ni oshkor ifodalaymiz:
   $$z = \frac{6 - x - 2y}{3} = 2 - \frac{1}{3}x - \frac{2}{3}y$$
2. Xususiy hosilalarni olamiz:
   $$z'_x = -\frac{1}{3}, \qquad z'_y = -\frac{2}{3}$$
3. Sirt differensiali:
   $$d\sigma = \sqrt{1 + \left(-\frac{1}{3}\right)^2 + \left(-\frac{2}{3}\right)^2} \, dx\,dy = \sqrt{1 + \frac{1}{9} + \frac{4}{9}} \, dx\,dy = \sqrt{\frac{14}{9}} \, dx\,dy = \frac{\sqrt{14}}{3} \, dx\,dy$$
4. Birinchi oktantdagi proyeksiyasi $D_{xy}$ sohasini aniqlaymiz ($z = 0$):
   $$x + 2y = 6 \implies y = \frac{6 - x}{2} = 3 - \frac{x}{2}$$
   Soha chegaralari: $x \in [0, 6], \; y \in \left[0, 3 - \frac{x}{2}\right]$.
5. Integral ostidagi funksiyani soddalashtiramiz:
   $$x + y + z = x + y + \left(2 - \frac{1}{3}x - \frac{2}{3}y\right) = 2 + \frac{2}{3}x + \frac{1}{3}y$$
6. Ikki karrali integralni hisoblaymiz:
   $$I = \frac{\sqrt{14}}{3} \int_0^6 dx \int_0^{3 - x/2} \left(2 + \frac{2}{3}x + \frac{1}{3}y\right) dy$$
   Ichki integral:
   $$\int_0^{3 - x/2} \left(2 + \frac{2}{3}x + \frac{1}{3}y\right) dy = \left[ \left(2 + \frac{2}{3}x\right)y + \frac{y^2}{6} \right]_0^{3 - x/2}$$
   $$= \left(2 + \frac{2}{3}x\right)\left(3 - \frac{x}{2}\right) + \frac{(3 - x/2)^2}{6}$$
   $$= 6 - x + 2x - \frac{x^2}{3} + \frac{9 - 3x + x^2/4}{6} = 6 + x - \frac{x^2}{3} + \frac{3}{2} - \frac{x}{2} + \frac{x^2}{24} = \frac{15}{2} + \frac{x}{2} - \frac{7x^2}{24}$$
7. Tashqi integralni olamiz:
   $$\int_0^6 \left(\frac{15}{2} + \frac{x}{2} - \frac{7x^2}{24}\right) dx = \left[ \frac{15x}{2} + \frac{x^2}{4} - \frac{7x^3}{72} \right]_0^6 = \frac{90}{2} + \frac{36}{4} - \frac{7 \cdot 216}{72} = 45 + 9 - 21 = 33$$
8. Sirt koeffitsientiga ko'paytiramiz:
   $$I = \frac{\sqrt{14}}{3} \cdot 33 = 11\sqrt{14}$$

**Javob:** $11\sqrt{14}$.

---

### 3-Misol: 2-tur sirt integrali (Paraboloid orqali vektor oqimi)
Ushbu 2-tur sirt integralini hisoblang:
$$\Pi = \iint_S z \, dx\,dy$$
bu yerda $S$ — $z = 1 - x^2 - y^2$ paraboloidining $z \ge 0$ qismining **yuqori tomoni** (ya'ni tashqi normal vektor $Oz$ o'qi bilan o'tkir burchak hosil qiladi).

**Yechish:**
1. Paraboloidning $xOy$ tekisligidagi proyeksiyasini topamiz ($z = 0$):
   $$1 - x^2 - y^2 = 0 \implies x^2 + y^2 \le 1$$
   Demak, $D_{xy}$ — radiusi $R = 1$ bo'lgan birlik doira.
2. Oriyentatsiyani tekshiramiz: masala shartida sirtning **yuqori tomoni** berilgan. Demak, normal vektor $Oz$ o'qi bilan o'tkir burchak hosil qiladi ($\cos\gamma > 0$). Shuning uchun formula oldidagi ishora musbat ($+$) bo'ladi:
   $$\iint_S z \, dx\,dy = +\iint_{D_{xy}} z(x, y) \, dx\,dy$$
3. $z$ o'rniga paraboloid tenglamasi $z = 1 - x^2 - y^2$ ni qo'yamiz:
   $$\Pi = \iint_{D_{xy}} (1 - x^2 - y^2) \, dx\,dy$$
4. Qutb koordinatalariga o'tamiz:
   $$\Pi = \int_0^{2\pi} d\varphi \int_0^1 (1 - r^2) r \, dr = 2\pi \int_0^1 (r - r^3) \, dr = 2\pi \left[ \frac{r^2}{2} - \frac{r^4}{4} \right]_0^1 = 2\pi \left(\frac{1}{2} - \frac{1}{4}\right) = \frac{\pi}{2}$$

**Javob:** $\frac{\pi}{2}$.

---

### 4-Misol: 2-tur sirt integrali (Barcha koordinatalar bo'yicha to'liq oqim)
Ushbu sirt integralini hisoblang:
$$\Pi = \iint_S x \, dy\,dz + y \, dz\,dx + z \, dx\,dy$$
bu yerda $S$ — $x + y + z = 1$ tekisligining birinchi oktantda yotgan qismining **tashqi (yuqori)** tomoni.

**Yechish:**
1. Simmetriya xossasiga ko'ra, berilgan uchta had ($x, y, z$) va koordinata tekisliklari ($dy\,dz, dz\,dx, dx\,dy$) tekislikning simmetriyasi tufayli bir xil qiymatga ega:
   $$\iint_S x \, dy\,dz = \iint_S y \, dz\,dx = \iint_S z \, dx\,dy$$
   Shuning uchun bitta hadni hisoblab, 3 ga ko'paytirish kifoya: $\Pi = 3 \iint_S z \, dx\,dy$.
2. $\iint_S z \, dx\,dy$ ni hisoblaymiz:
   Tekislik tenglamasi: $z = 1 - x - y$.
   Sirtning yuqori tomoni bo'lgani uchun ishora musbat ($+$).
   $D_{xy}$ sohasi: $x \ge 0, y \ge 0, x + y \le 1$:
   $$\iint_S z \, dx\,dy = \int_0^1 dx \int_0^{1-x} (1 - x - y) \, dy$$
3. Ichki integral:
   $$\int_0^{1-x} (1 - x - y) \, dy = \left[ (1 - x)y - \frac{y^2}{2} \right]_0^{1-x} = (1 - x)^2 - \frac{(1 - x)^2}{2} = \frac{(1 - x)^2}{2}$$
4. Tashqi integral:
   $$\int_0^1 \frac{(1 - x)^2}{2} \, dx = \left[ -\frac{(1 - x)^3}{6} \right]_0^1 = 0 - \left(-\frac{1}{6}\right) = \frac{1}{6}$$
5. To'liq oqim:
   $$\Pi = 3 \cdot \frac{1}{6} = \frac{1}{2}$$

**Javob:** $\frac{1}{2}$.

---

## ⚠️ Talabalar Eng Ko'p Yo'l Qo'yadigan Xatolar va Tuzoqlar

1. **2-tur sirt integralida oriyentatsiya (plyus/minus) ishorasini unutish:**
   Eng ko'p ball yo'qotiladigan joy — sirtning pastki yoki ichki tomoni so'ralganda integral oldiga minus ($-$) qo'yishni unutishdir. Har doim tekshiring: normal vektor qaysi tomonga qaragan? $\cos\gamma > 0$ bo'lsa $+$, $\cos\gamma < 0$ bo'lsa $-$.

2. **1-tur integralda differensial $d\sigma$ o'rniga oddiy $dx\,dy$ yozish:**
   1-tur integral egri sirt bo'ylab olinadi! Shuning uchun uning maydon elementi har doim ko'paytuvchiga ega: $d\sigma = \sqrt{1 + (z'_x)^2 + (z'_y)^2} \, dx\,dy$. Faqatgina 2-tur integralda proyeksiyalash natijasida $dx\,dy$ bevosita yoziladi.

3. **Differensiallarning antikommutativlik qoidasini buzish:**
   2-tur integralda differensiallar ko'paytmasi yo'nalishga bog'liq: $dy\,dz = -dz\,dy$ va $dx\,dy = -dy\,dx$. Integralda hadlarning tartibini o'zgartirganda ishora almashishini unutmaslik lozim!

4. **Sirt perpendikulyar bo'lganda proyeksiyani xato hisoblash:**
   Agar sirt $xOy$ tekisligiga perpendikulyar silindr bo'lsa (masalan $x^2 + y^2 = R^2$), uning $xOy$ dagi proyeksiyasi yuza emas, shunchaki chiziq (aylana) bo'ladi. Demak, uning ustida $\iint_S R \, dx\,dy = 0$ bo'ladi! Uni faqat $yOz$ yoki $xOz$ ga proyeksiyalab hisoblash mumkin.

---

## 🎯 Mustaqil Yechish Uchun Amaliy Mashqlar va Yechimlar

### 1-Mashq
Ushbu 1-tur sirt integralini hisoblang:
$$\iint_S z \, d\sigma$$
bu yerda $S$ — $x + y + z = 1$ tekisligining birinchi oktantda ($x \ge 0, y \ge 0, z \ge 0$) yotgan qismi.

<details>
<summary>👉 Bosqichma-bosqich yechimni ko'rish</summary>

1. Tekislik: $z = 1 - x - y \implies z'_x = -1, \; z'_y = -1$.
2. Differensial:
   $$d\sigma = \sqrt{1 + (-1)^2 + (-1)^2} \, dx\,dy = \sqrt{3} \, dx\,dy$$
3. Proyeksiya sohasi: $D_{xy}: 0 \le x \le 1, \; 0 \le y \le 1 - x$.
4. Ikki karrali integralni hisoblaymiz:
   $$\iint_S z \, d\sigma = \sqrt{3} \int_0^1 dx \int_0^{1-x} (1 - x - y) \, dy$$
5. Ichki integral yuqoridagi 4-misolda hisoblanganidek $\frac{(1 - x)^2}{2}$ ga teng.
6. Tashqi integral:
   $$\sqrt{3} \int_0^1 \frac{(1 - x)^2}{2} \, dx = \frac{\sqrt{3}}{6}$$
**Javob:** $\frac{\sqrt{3}}{6}$.
</details>

---

### 2-Mashq
Ushbu 2-tur sirt integralini hisoblang:
$$\iint_S y \, dz\,dx$$
bu yerda $S$ — $y = 4 - x^2 - z^2$ paraboloidining $y \ge 0$ qismining **o'ng tomoni** (ya'ni normal vektor $Oy$ o'qi bilan o'tkir burchak hosil qiladi, $\cos\beta > 0$).

<details>
<summary>👉 Bosqichma-bosqich yechimni ko'rish</summary>

1. Sirt $y = 4 - x^2 - z^2$ funksiya sifatida $xOz$ koordinata tekisligiga proyeksiyalanadi.
2. $xOz$ dagi proyeksiya $D_{xz}: x^2 + z^2 \le 4$ — radiusi $R = 2$ bo'lgan doira.
3. Normal vektor $Oy$ o'qi bilan o'tkir burchak hosil qilgani sababli ishora musbat ($+$):
   $$\iint_S y \, dz\,dx = +\iint_{D_{xz}} (4 - x^2 - z^2) \, dx\,dz$$
4. Qutb koordinatalariga o'tamiz ($x = r\cos\varphi, z = r\sin\varphi$):
   $$\int_0^{2\pi} d\varphi \int_0^2 (4 - r^2) r \, dr = 2\pi \left[ 2r^2 - \frac{r^4}{4} \right]_0^2 = 2\pi (8 - 4) = 8\pi$$
**Javob:** $8\pi$.
</details>

---

### 3-Mashq
Ushbu 1-tur sirt integralini hisoblang:
$$\iint_S (x^2 + y^2) \, d\sigma$$
bu yerda $S$ — $z = \sqrt{x^2 + y^2}$ konusning $0 \le z \le 2$ oraliqdagi qismi.

<details>
<summary>👉 Bosqichma-bosqich yechimni ko'rish</summary>

1. Konus tenglamasi: $z = \sqrt{x^2 + y^2} \implies z'_x = \frac{x}{\sqrt{x^2 + y^2}}, \; z'_y = \frac{y}{\sqrt{x^2 + y^2}}$.
2. Sirt differensiali:
   $$d\sigma = \sqrt{1 + \frac{x^2 + y^2}{x^2 + y^2}} \, dx\,dy = \sqrt{1 + 1} \, dx\,dy = \sqrt{2} \, dx\,dy$$
3. Proyeksiya sohasi: $0 \le z \le 2 \implies x^2 + y^2 \le 4$ (radiusi $2$ bo'lgan doira).
4. Integralni hisoblaymiz:
   $$\iint_S (x^2 + y^2) \, d\sigma = \sqrt{2} \iint_{x^2 + y^2 \le 4} (x^2 + y^2) \, dx\,dy$$
5. Qutb koordinatalarida:
   $$\sqrt{2} \int_0^{2\pi} d\varphi \int_0^2 r^2 \cdot r \, dr = 2\sqrt{2}\pi \left[ \frac{r^4}{4} \right]_0^2 = 2\sqrt{2}\pi \cdot 4 = 8\sqrt{2}\pi$$
**Javob:** $8\sqrt{2}\pi$.
</details>

---

## 💡 Imtihon Layfhaklari va Tezkor Maslahatlar

- **1-tur va 2-tur sirt integrallarini bir-biridan ajratish belgisi:**
  - Agar integralda **$d\sigma$ (yoki $dS$)** belgisi tursa — bu **1-tur** sirt integrali (har doim musbat differensial, geometrik ildiz formulasi kerak).
  - Agar integralda **$dy\,dz, dz\,dx$ yoki $dx\,dy$** koordinata ko'paytmalari tursa — bu **2-tur** sirt integrali (oqim, oriyentatsiya va ishora muhim!).

- **Sferik sirtlar uchun 1-tur integrallarni tezkor integrallash:**
  Agar sirt $R$ radiusli sfera bo'lsa, sfera differensiali sferik burchaklar orqali nihoyatda chiroyli ko'rinishga ega bo'ladi:
  $$d\sigma = R^2 \sin\theta \, d\theta \, d\varphi$$
  Bu formula murakkab ildizlardan butunlay xalos etadi!
