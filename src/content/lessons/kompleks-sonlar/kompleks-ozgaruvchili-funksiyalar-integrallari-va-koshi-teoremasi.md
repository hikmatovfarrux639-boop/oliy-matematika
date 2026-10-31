---
title: "Kompleks integrallar, Koshi integral teoremasi va Koshi integral formulasi"
module: "kompleks-sonlar"
order: 11
description: "TFKP da integrallash nazariyasi: egri chiziq bo'yicha kompleks integral, Koshi fundamental teoremasi ∮ f(z)dz = 0, Koshi integral formulasi, yuqori tartibli hosilalar uchun Koshi formulasi va yopiq kontur bo'yicha murakkab integrallarni bir zumda hisoblash."
---

## 📌 Kirish va Geometrik/Fizik Mohiyat

Haqiqiy o'zgaruvchili matematik analizda integral hisoblash ko'pincha murakkab boshlang'ich funksiyalarni qidirishni, sun'iy almashtirishlarni yoki ko'p bosqichli bo'laklab integrallashni talab etadi.

Ammo kompleks tahlilda (TFKP — Kompleks o'zgaruvchili funksiyalar nazariyasida) integrallash haqiqiy mo'jizaga aylanadi! Buyuk fransuz matematigi **Ogyusten Lui Koshi (Augustin-Louis Cauchy)** kashf etgan fundamental teoremalar shuni ko'rsatadiki: **agar funksiya sohada analitik (differensiallanuvchi) bo'lsa, uning yopiq kontur bo'yicha integrali konturning qanday geometrik shaklda ekanligiga mutlaqo bog'liq emas va har doim aynan nolga teng bo'ladi!**

Bundan ham hayratlanarlisi — **Koshi integral formulasidir**: soha chegarasidagi (konturdagi) funksiya qiymatlarini bilgan holda, soha ichidagi **ixtiyoriy ichki nuqtadagi** funksiya qiymatini hamda uning istalgan tartibli hosilalarini bitta oddiy integral orqali hisoblash mumkin.

```
       Im(z) ^                Yopiq kontur: Γ
             |                .--------.
             |             .-'          '-.
             |            /      * z0      \    f(z0) = (1 / 2πi) ∮ [f(z)/(z - z0)] dz
             |           |   f(z) analitik  |
             |            \                /
             |             '-.          .-'
             |                '--------'
    ---------+------------------------------------> Re(z)
             |
```

### Fizik Mohiyat: Gidrodinamika va Potensial Maydonlar
1. **Suyuqlik oqimi va sirkulyatsiyasi:**
   Tekislikdagi ideal (yopishqoq bo'lmagan va siqilmaydigan) suyuqlikning statsionar oqimini qaraylik. Agar oqimda girdoblar (uyurmalar) bo'lmasa ($\operatorname{rot} \mathbf{v} = 0$) va suyuqlik manbalari mavjud bo'lmasa ($\operatorname{div} \mathbf{v} = 0$), u holda tezlik maydonining yopiq kontur bo'yicha sirkulyatsiyasi ham, oqimi ham nolga teng bo'ladi. Bu fizik fakt matematik tilda aynan **Koshi teoremasining** ifodasidir!
2. **Konservativ maydonlar:**
   Gravitatsion yoki elektrostatik maydonda zaryadni yoki jismni yopiq traektoriya bo'ylab ko'chirishda bajarilgan ish nolga teng bo'lgani kabi, analitik kompleks funksiyaning integrali ham boshlang'ich va oxirgi nuqtalarga bog'liq bo'lib, ular orasidagi yo'l shakliga mutlaqo bog'liq emas.

---

## 📐 Asosiy Nazariya, Qoidalar va Teoremalar

### 1. Kompleks integralning ta'rifi va haqiqiy integrallarga keltirish

Kompleks o'zgaruvchi $z = x + i y$ va kompleks funksiya $f(z) = u(x, y) + i v(x, y)$ bo'lsin.
U holda differensial:
$$
dz = dx + i \, dy
$$
$f(z) dz$ ko'paytmasini ochib chiqamiz:
$$
f(z) \, dz = (u + i v)(dx + i dy) = (u \, dx - v \, dy) + i (v \, dx + u \, dy)
$$

> **Ta'rif:**
> $f(z)$ funksiyaning silliq yo'naltirilgan $L$ egri chizig'i bo'yicha integrali ikkita haqiqiy 2-tur egri chiziqli integrallar yig'indisi sifatida aniqlanadi:
> $$
> \int_L f(z) \, dz = \int_L (u \, dx - v \, dy) + i \int_L (v \, dx + u \, dy)
> $$

#### Parametrik hisoblash formulasi:
Agar $L$ egri chizig'i parametrik tenglama bilan berilgan bo'lsa: $z = z(t) = x(t) + i y(t)$, bu yerda parametr $t$ oraliq $\alpha \le t \le \beta$ da o'zgarsa, u holda:
$$
\int_L f(z) \, dz = \int_\alpha^\beta f(z(t)) \cdot z'(t) \, dt
$$

---

### 2. Koshi fundamental integral teoremasi

> **Koshi teoremasi (Bir bog'lamli soha uchun):**
> Agar $f(z)$ funksiya bir bog'lamli $D$ sohada analitik (ya'ni Koshi-Riman shartlarini qanoatlantiruvchi va uzluksiz hosilaga ega) bo'lsa, u holda ushbu sohada yotuvchi har qanday yopiq bo'lakli-silliq $\Gamma$ konturi bo'yicha integral nolga teng bo'ladi:
> $$
> \oint_\Gamma f(z) \, dz = 0
> $$

#### Isboti (Grin formulasi orqali):
Haqiqiy analizdagi Grin formulasini qo'llaymiz: $\oint_L (P \, dx + Q \, dy) = \iint_S \left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right) dx \, dy$.
1. Haqiqiy qism uchun: $P = u$, $Q = -v$:
   $$
   \oint_\Gamma (u \, dx - v \, dy) = \iint_S \left( -\frac{\partial v}{\partial x} - \frac{\partial u}{\partial y} \right) dx \, dy
   $$
2. Mavhum qism uchun: $P = v$, $Q = u$:
   $$
   \oint_\Gamma (v \, dx + u \, dy) = \iint_S \left( \frac{\partial u}{\partial x} - \frac{\partial v}{\partial y} \right) dx \, dy
   $$
Funksiya analitik bo'lgani sababli, **Koshi-Riman shartlari** bajariladi:
$$
\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y} \quad \text{va} \quad \frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}
$$
Ularni integrallarga qo'ysak:
$$
-\frac{\partial v}{\partial x} - \frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x} - \left( -\frac{\partial v}{\partial x} \right) = 0
$$
$$
\frac{\partial u}{\partial x} - \frac{\partial v}{\partial y} = \frac{\partial v}{\partial y} - \frac{\partial v}{\partial y} = 0
$$
Demak, har ikkala integral aynan nolga teng! Teorema to'liq isbotlandi.

---

### 3. Konturni deformatsiyalash prinsipi (Ko'p bog'lamli sohalar)
Agar $f(z)$ funksiya tashqi kontur $\Gamma$ va ichki konturlar $\gamma_1, \gamma_2, \dots, \gamma_n$ orasidagi sohada analitik bo'lsa, tashqi kontur bo'yicha integral ichki konturlar bo'yicha integrallar yig'indisiga teng:
$$
\oint_\Gamma f(z) \, dz = \sum_{k=1}^n \oint_{\gamma_k} f(z) \, dz
$$
Bu ajoyib xossa murakkab shakldagi konturlarni oddiy kichik aylanalar bilan almashtirish imkonini beradi.

---

### 4. Nyuton-Leybnits formulasi
Agar $f(z)$ bir bog'lamli sohada analitik bo'lsa, uning boshlang'ich funksiyasi $F(z)$ ($F'(z) = f(z)$) mavjud bo'ladi va integral yo'lga bog'liq bo'lmaydi:
$$
\int_{z_1}^{z_2} f(z) \, dz = F(z_2) - F(z_1) = \left. F(z) \right|_{z_1}^{z_2}
$$

---

### 5. Koshi integral formulasi

Agar funksiya kontur ichidagi bitta $z_0$ nuqtadan tashqari hamma joyda analitik bo'lsa-chi?

> **Teorema (Koshi integral formulasi):**
> Agar $f(z)$ funksiya yopiq $\Gamma$ konturi bilan chegaralangan $D$ sohada va uning chegarasida analitik bo'lsa, hamda $z_0$ nuqta $D$ ning ixtiyoriy ichki nuqtasi bo'lsa, quyidagi tenglik o'rinli bo'ladi:
> $$
> f(z_0) = \frac{1}{2\pi i} \oint_\Gamma \frac{f(z)}{z - z_0} \, dz
> $$
> Integrallarni hisoblash uchun bu formula quyidagi amaliy ko'rinishda qo'llaniladi:
> $$
> \oint_\Gamma \frac{f(z)}{z - z_0} \, dz = 2\pi i \cdot f(z_0)
> $$

---

### 6. Yuqori tartibli hosilalar uchun Koshi formulasi

Kompleks tahlilning eng qudratli natijalaridan biri: **agar funksiya sohada bir marta differensiallanuvchi (analitik) bo'lsa, u cheksiz marta differensiallanuvchidir!**

> **Teorema (Yuqori tartibli hosilalar):**
> $$
> f^{(n)}(z_0) = \frac{n!}{2\pi i} \oint_\Gamma \frac{f(z)}{(z - z_0)^{n+1}} \, dz
> $$
> Integrallash amaliyoti uchun formula:
> $$
> \oint_\Gamma \frac{f(z)}{(z - z_0)^{n+1}} \, dz = \frac{2\pi i}{n!} \cdot f^{(n)}(z_0)
> $$

---

## 📝 Qadamma-qadam Yechilgan Universitet Misollari

### 1-misol: Ta'rif bo'yicha integrallash (Analitik bo'lmagan funksiya yo'lga bog'liqligi)
**Shart:** $I = \int_L \bar{z} \, dz$ integralni $z_1 = 0$ nuqtadan $z_2 = 1 + i$ nuqtaga olib boruvchi quyidagi ikki xil yo'l bo'yicha hisoblang:
1. $L_1$: to'g'ri chiziq kesmasi $y = x$;
2. $L_2$: parabola yoyi $y = x^2$.

**Yechish:**
1. **1-qadam: Boshlang'ich ifodalarni tayyorlaymiz.**
   $z = x + i y \implies \bar{z} = x - i y$.
   $dz = dx + i \, dy$.
   $$
   \bar{z} \, dz = (x - i y)(dx + i dy) = (x \, dx + y \, dy) + i (x \, dy - y \, dx)
   $$
2. **2-qadam: 1-yo'l ($L_1$: to'g'ri chiziq $y = x$, $x \in [0, 1]$).**
   $y = x \implies dy = dx$.
   O'rniga qo'yamiz:
   $$
   \bar{z} \, dz = (x \, dx + x \, dx) + i (x \, dx - x \, dx) = 2x \, dx + i \cdot 0 = 2x \, dx
   $$
   Integrallaymiz:
   $$
   I_1 = \int_0^1 2x \, dx = \left. x^2 \right|_0^1 = 1
   $$
3. **3-qadam: 2-yo'l ($L_2$: parabola $y = x^2$, $x \in [0, 1]$).**
   $y = x^2 \implies dy = 2x \, dx$.
   O'rniga qo'yamiz:
   $$
   x \, dx + y \, dy = x \, dx + x^2 (2x \, dx) = (x + 2x^3) \, dx
   $$
   $$
   x \, dy - y \, dx = x (2x \, dx) - x^2 \, dx = (2x^2 - x^2) \, dx = x^2 \, dx
   $$
   Integrallaymiz:
   $$
   I_2 = \int_0^1 (x + 2x^3) \, dx + i \int_0^1 x^2 \, dx = \left. \left( \frac{x^2}{2} + \frac{x^4}{2} \right) \right|_0^1 + i \left. \frac{x^3}{3} \right|_0^1 = \left( \frac{1}{2} + \frac{1}{2} \right) + i \cdot \frac{1}{3} = 1 + \frac{i}{3}
   $$
4. **4-qadam: Xulosa.**
   Ko'rib turibmizki:
   $$
   I_1 = 1 \neq I_2 = 1 + \frac{i}{3}
   $$
   Integrallar turli natijalarni berdi! Sababi: $f(z) = \bar{z}$ funksiya kompleks tekislikda hech qayerda analitik emas ($\frac{\partial u}{\partial x} = 1 \neq \frac{\partial v}{\partial y} = -1$). Shuning uchun uning integrali tanlangan yo'lga bevosita bog'liqdir!

---

### 2-misol: Koshi teoremasi va Nyuton-Leybnits formulasi
**Shart:** Integralni hisoblang:
$$
\int_0^{\pi i} z \cdot \operatorname{ch} z \, dz
$$

**Yechish:**
1. **1-qadam: Funksiyaning analitikligini tekshirish.**
   $f(z) = z \operatorname{ch} z$ funksiya butun kompleks tekislikda analitikdir. Demak, integral integrallash yo'liga bog'liq emas va Nyuton-Leybnits formulasini qo'llash mumkin.
2. **2-qadam: Boshlang'ich funksiyani topish (bo'laklab integrallash).**
   $$
   u = z \implies du = dz
   $$
   $$
   dv = \operatorname{ch} z \, dz \implies v = \operatorname{sh} z
   $$
   Formula: $\int u \, dv = u v - \int v \, du$.
   $$
   \int z \operatorname{ch} z \, dz = z \operatorname{sh} z - \int \operatorname{sh} z \, dz = z \operatorname{sh} z - \operatorname{ch} z
   $$
3. **3-qadam: Chegaralarni qo'yish.**
   $$
   \left. (z \operatorname{sh} z - \operatorname{ch} z) \right|_0^{\pi i} = (\pi i \operatorname{sh}(\pi i) - \operatorname{ch}(\pi i)) - (0 \cdot \operatorname{sh} 0 - \operatorname{ch} 0)
   $$
   Giperbolik va trigonometrik funksiyalar bog'lanishidan:
   $$
   \operatorname{sh}(\pi i) = i \sin(\pi) = 0
   $$
   $$
   \operatorname{ch}(\pi i) = \cos(\pi) = -1
   $$
   $$
   \operatorname{ch}(0) = 1
   $$
   Qiymatlarni qo'yamiz:
   $$
   (\pi i \cdot 0 - (-1)) - (0 - 1) = 1 - (-1) = 1 + 1 = 2
   $$
4. **Javob:**
   $$
   \int_0^{\pi i} z \operatorname{ch} z \, dz = 2
   $$

---

### 3-misol: Koshi integral formulasini qo'llash
**Shart:** Integralni hisoblang:
$$
\oint_{|z| = 2} \frac{\cos z}{z(z - 4)} \, dz
$$

**Yechish:**
1. **1-qadam: Konturni va maxsus nuqtalarni aniqlash.**
   Kontur: $|z| = 2$ (markazi 0 da, radiusi 2 bo'lgan aylana).
   Maxrajning nollari: $z_1 = 0$ va $z_2 = 4$.
   Nuqtalarning joylashuvini tekshiramiz:
   - $|z_1| = |0| = 0 < 2 \implies z_1 = 0$ kontur **ichida** yotadi!
   - $|z_2| = |4| = 4 > 2 \implies z_2 = 4$ kontur **tashqarisida** yotadi!
2. **2-qadam: Integral ostidagi ifodani Koshi formulasiga keltirish.**
   Faqat $z_1 = 0$ maxsus nuqta kontur ichida bo'lgani uchun, qolgan barcha analitik qismni suratga chiqaramiz:
   $$
   \frac{\cos z}{z(z - 4)} = \frac{\frac{\cos z}{z - 4}}{z - 0}
   $$
   Bu yerda analitik funksiya:
   $$
   f(z) = \frac{\cos z}{z - 4}
   $$
   Bu funksiya $|z| \le 2$ doirada to'liq analitik, chunki uning maxraji faqat $z = 4$ da nolga aylanadi (konturdan tashqarida).
3. **3-qadam: Koshi integral formulasini qo'llash.**
   $$
   \oint_{|z| = 2} \frac{f(z)}{z - 0} \, dz = 2\pi i \cdot f(0)
   $$
   $f(0)$ ni hisoblaymiz:
   $$
   f(0) = \frac{\cos 0}{0 - 4} = \frac{1}{-4} = -\frac{1}{4}
   $$
4. **4-qadam: Natijani hisoblash.**
   $$
   \oint_{|z| = 2} \frac{\cos z}{z(z - 4)} \, dz = 2\pi i \cdot \left( -\frac{1}{4} \right) = -\frac{\pi i}{2}
   $$
5. **Javob:**
   $$
   -\frac{\pi i}{2}
   $$

---

### 4-misol: Yuqori tartibli hosilalar uchun Koshi formulasi
**Shart:** Integralni hisoblang:
$$
\oint_{|z - 1| = 1} \frac{e^{2z}}{(z - 1)^3} \, dz
$$

**Yechish:**
1. **1-qadam: Kontur va maxsus nuqta.**
   Kontur: $|z - 1| = 1$ (markazi $z = 1$ da, radiusi 1 bo'lgan aylana).
   Maxsus nuqta: $z_0 = 1$. U aylananing markazida (ichida) yotadi.
   Maxrajdagi daraja: $(z - 1)^3 = (z - 1)^{2 + 1} \implies n = 2$.
2. **2-qadam: Formulani tanlash.**
   $$
   \oint_\Gamma \frac{f(z)}{(z - z_0)^{n+1}} \, dz = \frac{2\pi i}{n!} \cdot f^{(n)}(z_0)
   $$
   Bu yerda $f(z) = e^{2z}$, $z_0 = 1$, $n = 2$.
3. **3-qadam: Hosilalarni hisoblash.**
   $$
   f'(z) = 2 e^{2z}
   $$
   $$
   f''(z) = 4 e^{2z}
   $$
   $z_0 = 1$ nuqtadagi qiymati:
   $$
   f''(1) = 4 e^{2 \cdot 1} = 4e^2
   $$
4. **4-qadam: Integralni hisoblash.**
   $$
   \oint_{|z - 1| = 1} \frac{e^{2z}}{(z - 1)^3} \, dz = \frac{2\pi i}{2!} \cdot f''(1) = \frac{2\pi i}{2} \cdot 4e^2 = 4\pi i e^2
   $$
5. **Javob:**
   $$
   4\pi i e^2
   $$

---

## ⚠️ Talabalar Eng Ko'p Yo'l Qo'yadigan Xatolar va Tuzoqlar

1. **Analitik bo'lmagan funksiyalarga Koshi teoremasini qo'llash:**
   Agar integralda $\bar{z}$, $|z|$, $\operatorname{Re}(z)$ yoki $\operatorname{Im}(z)$ qatnashsa, bu funksiyalar **analitik emas**! Ular uchun yopiq kontur bo'yicha integral nolga teng bo'lmaydi. Bunday integrallar faqat ta'rif bo'yicha (parametrlash orqali) hisoblanadi.

2. **Hosila tartibini bittaga oshirib yuborish:**
   Maxrajda $(z - z_0)^3$ tursa, talabalar ko'pincha 3-tartibli hosila oladilar.
   - ❌ **Xato:** $(z - z_0)^3 \implies f'''(z_0)$
   - ✅ **To'g'ri:** Formulada daraja $n+1$ dir! $(z - z_0)^3 = (z - z_0)^{2 + 1} \implies n = 2$, ya'ni 2-tartibli hosila olinadi va $2!$ ga bo'linadi!

3. **Maxsus nuqtaning sohadan tashqarida ekanligini e'tibordan qochirish:**
   Agar maxrajning noli konturdan **tashqarida** bo'lsa (masalan, $\oint_{|z|=1} \frac{e^z}{z - 3} dz$), integral ostidagi funksiya kontur ichida to'liq analitik bo'ladi va Koshi teoremasiga ko'ra integral **darhol 0 ga teng** bo'ladi! Uni hisoblab o'tirish xatodir.

4. **Kontur yo'nalishini unutish:**
   Koshi formulalari kontur **soat strelkasiga qarshi (musbat)** yo'nalishda aylanib o'tilganda o'rinlidir. Agar masala shartida soat strelkasi bo'yicha (manfiy) aylanilsa, natijaga oldiga minus ishorasi qo'yilishi shart!

---

## 🎯 Mustaqil Yechish Uchun Amaliy Mashqlar va Yechimlar

### 1-mashq
Integralni hisoblang:
$$
\oint_{|z| = 1} \frac{\sin(z^2)}{z - 5} \, dz
$$

<details>
<summary>👉 Bosqichma-bosqich yechimni ko'rish</summary>

1. **Maxsus nuqtani tekshiramiz:**
   Maxrajning noli $z = 5$.
   Kontur: $|z| = 1$.
   $|5| = 5 > 1$, ya'ni maxsus nuqta konturdan tashqarida joylashgan.
2. **Xulosa:**
   Funksiya $|z| \le 1$ sohada to'liq analitikdir. Koshi teoremasiga binoan:
   $$
   \oint_{|z| = 1} \frac{\sin(z^2)}{z - 5} \, dz = 0
   $$

**Javob:** $0$.
</details>

---

### 2-mashq
Integralni hisoblang:
$$
\oint_{|z| = 2} \frac{e^z}{z^2 + 1} \, dz
$$

<details>
<summary>👉 Bosqichma-bosqich yechimni ko'rish</summary>

1. **Maxsus nuqtalar:**
   $z^2 + 1 = 0 \implies z = \pm i$.
   Har ikkala nuqta ham $|z| = 2$ kontur ichida yotadi: $|i| = 1 < 2$, $|-i| = 1 < 2$.
2. **Oddiy kasrlarga ajratamiz:**
   $$
   \frac{1}{z^2 + 1} = \frac{1}{(z - i)(z + i)} = \frac{1}{2i} \left( \frac{1}{z - i} - \frac{1}{z + i} \right)
   $$
3. **Koshi integral formulasini har bir qismga alohida qo'llaymiz:**
   $$
   \oint_{|z| = 2} \frac{e^z}{z^2 + 1} \, dz = \frac{1}{2i} \left( \oint_{|z| = 2} \frac{e^z}{z - i} \, dz - \oint_{|z| = 2} \frac{e^z}{z + i} \, dz \right)
   $$
   $$
   = \frac{1}{2i} \left( 2\pi i e^i - 2\pi i e^{-i} \right) = \pi (e^i - e^{-i})
   $$
4. **Eyler formulasi bo'yicha soddalashtiramiz:**
   $e^i - e^{-i} = 2i \sin(1)$.
   Demak: $\pi \cdot 2i \sin 1 = 2\pi i \sin 1$.

**Javob:** $2\pi i \sin 1$.
</details>

---

### 3-mashq
Integralni hisoblang:
$$
\oint_{|z| = 1} \frac{\cos z}{z^2} \, dz
$$

<details>
<summary>👉 Bosqichma-bosqich yechimni ko'rish</summary>

1. **Nuqta va hosila tartibi:**
   $z_0 = 0$ (ichkarida). Maxraj $z^2 = z^{1+1} \implies n = 1$.
   $f(z) = \cos z$.
2. **Koshi formulasini qo'llaymiz:**
   $$
   \oint_{|z| = 1} \frac{\cos z}{z^2} \, dz = \frac{2\pi i}{1!} \cdot f'(0)
   $$
3. **Hosilani hisoblaymiz:**
   $$
   f'(z) = -\sin z \implies f'(0) = -\sin 0 = 0
   $$
4. **Natija:**
   $$
   2\pi i \cdot 0 = 0
   $$

**Javob:** $0$.
</details>

---

## 💡 Imtihon Layfhaklari va Tezkor Maslahatlar

1. **Kontur ichidagi nuqtalarni "ko'z bilan" saralash:**
   Integralni ko'rishingiz bilan birinchi navbatda qalam bilan maxrajning nollarini toping va ularning modulini kontur radiusi bilan taqqoslang:
   - Tashqaridagilar — birdaniga suratga chiqarib yuboriladi yoki e'tiborga olinmaydi!
   - Ichkaridagilar — Koshi formulasi bo'yicha hisoblanadi.

2. **Oddiy maxraj $z - z_0$ bo'lsa — hech qanday hosila kerak emas:**
   Shunchaki o'sha $z_0$ qiymatni suratga qo'yib, natijani $2\pi i$ ga ko'paytiring!
   *Misol:* $\oint_{|z|=2} \frac{e^z}{z - 1} dz = 2\pi i \cdot e^1 = 2\pi e i$. 2 soniyada javob tayyor!

3. **$2\pi i$ doimiyligini unutmang:**
   Koshi formulasi har doim $2\pi i$ ko'paytuvchisini talab qiladi. Javobingizda albatta mavhum birlik $i$ va $\pi$ qatnashishi kerak (agar $f(z_0) = 0$ bo'lmasa).
