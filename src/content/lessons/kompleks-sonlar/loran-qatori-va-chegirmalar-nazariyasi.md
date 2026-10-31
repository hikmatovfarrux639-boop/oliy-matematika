---
title: "Loran qatori, Maxsus nuqtalar va Chegirmalar nazariyasi (Residues)"
module: "kompleks-sonlar"
order: 9
description: "Kompleks o'zgaruvchili funksiyalarning Loran qatoriga yoyilishi, yakkalangan maxsus nuqtalar tasnifi va chegirmalar yordamida murakkab kontur integrallarini bir zumda hisoblash."
---

## 📌 Kirish va Geometrik/Fizik Mohiyat

Klassik matematik analizda Teylor qatori funksiyalarni faqat ularning differensiallanuvchi (muntazam) sohasida darajali qatorga yoyish imkonini beradi. Ammo agar kompleks funksiya biror nuqtada uzilishga ega bo'lsa yoki cheksizlikka intilsa (masalan, $f(z) = \frac{1}{z}$, $f(z) = e^{1/z}$ yoki $f(z) = \frac{1}{z(z-1)}$ funksiyalari $z = 0$ va $z = 1$ da), Teylor qatori umuman mavjud bo'lmaydi.

Aynan shunday **maxsus (singulyar) nuqtalar** atrofida funksiyalarni tadqiq qilish uchun 1843-yilda fransuz matematigi va muhandisi **Pyer Alfons Loran (Pierre Alphonse Laurent)** musbat va manfiy darajalarni o'z ichiga oluvchi yangi qatorni kashf etdi.

Ushbu Loran qatorining bitta ajoyib koeffitsiyenti — $(z - z_0)^{-1}$ oldidagi $c_{-1}$ soni asosida buyuk **Chegirmalar (vychetlar, residues) nazariyasi** vujudga keldi.

```
       Im(z) ^              Halqa: r < |z - z0| < R
             |              .-''''-.
             |           .-'        '-.
             |          /   .----.     \
             |         |   /  z0  \     |
             |         |   \      /     |
             |          \   '----'     /
             |           '-.        .-'
             |              '-....-'
    ---------+------------------------------> Re(z)
             |
```

### Fizik va Amaliy Mohiyat
1. **Gidrodinamika va Aerodinamika (Girdoblar va Manbalar):**
   Suyuqlik yoki gaz oqimida nuqtaviy manba (oqib chiquvchi manba) va girdob (aylanma harakat) matematik jihatdan kompleks potensialning maxsus nuqtalari hisoblanadi. Yopiq kontur bo'ylab oqim tezligining sirkulyatsiyasi aynan kontur ichidagi girdoblar nuqtalaridagi **chegirmalar yig'indisiga** teng!
2. **Jukovskiyning ko'tarish kuchi formulasi:**
   Samolyot qanotining ko'tarish kuchini hisoblash formulasining negizida murakkab aerodinamik profil atrofidagi kompleks chegirma yotadi.
3. **Elektrodinamika:**
   Zaryadlangan to'g'ri sim atrofidagi elektrostatik maydon kuchlanganligining oqimi va magnit maydon sirkulyatsiyasi (Amper qonuni) chegirmalar nazariyasining to'g'ridan-to'g'ri fizik ifodasidir.
4. **Haqiqiy integrallarni hisoblash:**
   Haqiqiy o'qda boshlang'ich funksiyasi elementar ifodalanmaydigan Puasson, Dirixle va xosmas integrallari (masalan, $\int_{-\infty}^{+\infty} \frac{\cos x}{1 + x^2} dx$) chegirmalar yordamida bir necha qatorda oson yechiladi!

---

## 📐 Asosiy Nazariya, Qoidalar va Teoremalar

### 1. Loran qatori tushunchasi va Loran teoremasi

> **Loran teoremasi:**
> Agar bir qiymatli $f(z)$ funksiya $z_0$ markazli konsentrik halqada:
> $$
> V = \{z \in \mathbb{C} : r < |z - z_0| < R\} \quad (0 \le r < R \le \infty)
> $$
> analitik (golomorf) bo'lsa, u holda ushbu halqada $f(z)$ musbat va manfiy butun darajalardan iborat bo'lgan yagona mutlaq yaqinlashuvchi qatorga yoyiladi:
> $$
> f(z) = \sum_{n=-\infty}^{+\infty} c_n (z - z_0)^n = \dots + \frac{c_{-2}}{(z - z_0)^2} + \frac{c_{-1}}{z - z_0} + c_0 + c_1(z - z_0) + c_2(z - z_0)^2 + \dots
> $$

Loran qatori ikkita mustaqil qismning yig'indisidan iborat:
$$
f(z) = \underbrace{\sum_{n=0}^\infty c_n (z - z_0)^n}_{\text{To'g'ri (muntazam) qism}} + \underbrace{\sum_{n=1}^\infty \frac{c_{-n}}{(z - z_0)^n}}_{\text{Bosh (asosiy) qism}}
$$

1. **To'g'ri (muntazam) qism:**
   Faqat nomanfiy darajalardan iborat bo'lib, $|z - z_0| < R$ doira ichida oddiy Teylor qatori kabi yaqinlashadi.
2. **Bosh (asosiy) qism:**
   Manfiy darajalardan iborat bo'lib, $|z - z_0| > r$ tashqi sohada yaqinlashadi. Aynan bosh qism funksiyaning $z_0$ nuqtadagi barcha o'ziga xos xususiyatlarini (singulyarligini) to'liq tavsiflaydi!

Loran koeffitsiyentlari quyidagi kontur integrallari orqali aniqlanadi:
$$
c_n = \frac{1}{2\pi i} \oint_\Gamma \frac{f(z)}{(z - z_0)^{n+1}} dz \quad (n = 0, \pm 1, \pm 2, \dots)
$$
Bu yerda $\Gamma$ — halqa ichida yotuvchi va $z_0$ ni o'rab oluvchi ixtiyoriy yopiq silliq kontur.

---

### 2. Yakkalangan maxsus nuqtalar tasnifi

$z_0$ nuqta $f(z)$ funksiyaning **yakkalangan maxsus nuqtasi** deyiladi, agar bu nuqtaning o'zida funksiya analitik bo'lmasa, biroq uning teshilgan atrofida $0 < |z - z_0| < \delta$ funksiya analitik bo'lsa.

Loran qatorining **bosh qismiga** qarab, yakkalangan maxsus nuqtalar uch turga ajratiladi:

| Maxsus nuqta turi | Loran qatorining bosh qismi | Nuqtadagi limit $\lim_{z \to z_0} f(z)$ | Misol |
| :--- | :--- | :--- | :--- |
| **1. Bartaraf qilinadigan maxsus nuqta (ustranimaya)** | Bosh qism umuman yo'q: $c_{-n} = 0$ ($\forall n \ge 1$) | Chekli son mavjud: $\lim = A \neq \infty$ | $\frac{\sin z}{z} = 1 - \frac{z^2}{6} + \dots$ |
| **2. Qutb (polyus, $m$-tartibli)** | Bosh qismda chekli sondagi hadlar bor: $c_{-m} \neq 0$, $c_{-n} = 0$ ($n > m$) | Cheksizlikka teng: $\lim = \infty$ | $\frac{1}{z^2(z - 1)}$ |
| **3. Muhim maxsus nuqta (sushchestvenno osobaya)** | Bosh qism cheksiz ko'p manfiy haddan iborat | Limit umuman mavjud emas | $e^{1/z} = 1 + \frac{1}{z} + \frac{1}{2! z^2} + \dots$ |

> **Soxotskiy-Kassorati-Veyershtrass teoremasi:**
> Agar $z_0$ funksiyaning muhim maxsus nuqtasi bo'lsa, har qanday kompleks son $A \in \mathbb{C}$ uchun shunday $z_k \to z_0$ ketma-ketlik topiladiki, $\lim_{k \to \infty} f(z_k) = A$ bo'ladi! Ya'ni muhim nuqta atrofida funksiya barcha mumkin bo'lgan kompleks qiymatlarni qabul qiladi.

---

### 3. Chegirma (Residue / Вычет) tushunchasi va uni hisoblash qoidalari

> **Ta'rif:**
> $f(z)$ funksiyaning yakkalangan maxsus $z_0$ nuqtadagi **chegirmasi** deb, uning ushbu nuqta atrofidagi Loran qatoridagi **$c_{-1}$ koeffitsiyentiga** aytiladi:
> $$
> \operatorname{Res}[f(z), z_0] = c_{-1} = \frac{1}{2\pi i} \oint_{|z - z_0| = \rho} f(z) \, dz
> $$

#### Chegirmani hisoblashning 4 ta asosiy qoidasi:

1. **Bartaraf qilinadigan nuqtada:**
   $$
   \operatorname{Res}[f(z), z_0] = 0
   $$
   (chunki bosh qism yo'q, $c_{-1} = 0$).

2. **1-tartibli (oddiy) qutbda ($m = 1$):**
   $$
   \operatorname{Res}[f(z), z_0] = \lim_{z \to z_0} (z - z_0) f(z)
   $$
   Agar funksiya kasr ko'rinishida bo'lsa: $f(z) = \frac{\varphi(z)}{\psi(z)}$, bu yerda $\varphi(z_0) \neq 0$, $\psi(z_0) = 0$ va $\psi'(z_0) \neq 0$:
   $$
   \operatorname{Res}[f(z), z_0] = \frac{\varphi(z_0)}{\psi'(z_0)}
   $$

3. **$m$-tartibli qutbda ($m \ge 2$):**
   $$
   \operatorname{Res}[f(z), z_0] = \frac{1}{(m - 1)!} \lim_{z \to z_0} \frac{d^{m-1}}{dz^{m-1}} \left[ (z - z_0)^m f(z) \right]
   $$

4. **Muhim maxsus nuqtada:**
   Hech qanday differensiallash formulasi ish bermaydi! Yagona to'g'ri yo'l — funksiyaning ma'lum Teylor qatorlaridan foydalanib, uning Loran qatorini tuzish va **$\frac{1}{z - z_0}$ oldidagi koeffitsiyentni ajratib olishdir**.

---

### 4. Koshining chegirmalar haqidagi asosiy teoremasi

> **Koshining chegirmalar teoremasi:**
> Agar $f(z)$ funksiya bir bog'lamli sohada joylashgan bo'lakli-silliq yopiq $\Gamma$ konturida va uning ichida chekli sondagi $z_1, z_2, \dots, z_N$ yakkalangan maxsus nuqtalardan tashqari hamma joyda analitik bo'lsa, u holda:
> $$
> \oint_\Gamma f(z) \, dz = 2\pi i \sum_{k=1}^N \operatorname{Res}[f(z), z_k]
> $$
> Bu yerda kontur soat strelkasiga qarshi (musbat) yo'nalishda aylanib o'tiladi va faqat kontur **ichidagi** maxsus nuqtalar hisobga olinadi.

---

## 📝 Qadamma-qadam Yechilgan Universitet Misollari

### 1-misol: Berilgan funksiyani turli halqalarda Loran qatoriga yoyish
**Shart:** Funksiyani $z_0 = 0$ nuqta atrofida barcha mumkin bo'lgan konsentrik sohalarda Loran qatoriga yoying:
$$
f(z) = \frac{1}{(z - 1)(z - 2)}
$$

**Yechish:**
1. **1-qadam: Maxsus nuqtalarni aniqlash.**
   Maxrajning nollari: $z_1 = 1$ va $z_2 = 2$.
   Ushbu nuqtalar kompleks tekislikni $z_0 = 0$ markazli 3 ta halqaga ajratadi:
   - 1-soha: $|z| < 1$ (doira);
   - 2-soha: $1 < |z| < 2$ (halqa);
   - 3-soha: $|z| > 2$ (tashqi soha).
2. **2-qadam: Oddiy kasrlarga ajratish.**
   $$
   \frac{1}{(z - 1)(z - 2)} = \frac{A}{z - 1} + \frac{B}{z - 2}
   $$
   $1 = A(z - 2) + B(z - 1)$:
   - $z = 1 \implies 1 = -A \implies A = -1$;
   - $z = 2 \implies 1 = B \implies B = 1$.
   Demak:
   $$
   f(z) = -\frac{1}{z - 1} + \frac{1}{z - 2} = \frac{1}{1 - z} - \frac{1}{2 - z}
   $$
3. **3-qadam: 1-soha ($|z| < 1$).**
   Bu sohada $|z| < 1$ va $|z/2| < 1/2 < 1$. Cheksiz kamayuvchi geometrik progressiya formulasidan foydalanamiz:
   $$
   \frac{1}{1 - z} = \sum_{n=0}^\infty z^n
   $$
   $$
   -\frac{1}{2 - z} = -\frac{1}{2} \cdot \frac{1}{1 - \frac{z}{2}} = -\frac{1}{2} \sum_{n=0}^\infty \left( \frac{z}{2} \right)^n = -\sum_{n=0}^\infty \frac{z^n}{2^{n+1}}
   $$
   Yig'sak:
   $$
   f(z) = \sum_{n=0}^\infty \left( 1 - \frac{1}{2^{n+1}} \right) z^n = \frac{1}{2} + \frac{3}{4}z + \frac{7}{8}z^2 + \dots
   $$
   Bu oddiy Teylor qatori (bosh qism yo'q).
4. **4-qadam: 2-soha ($1 < |z| < 2$).**
   Bu yerda $|z| > 1 \implies |1/z| < 1$, lekin $|z| < 2 \implies |z/2| < 1$.
   Birinchi kasrni $\frac{1}{z}$ orqali yoyamiz:
   $$
   \frac{1}{1 - z} = -\frac{1}{z} \cdot \frac{1}{1 - \frac{1}{z}} = -\frac{1}{z} \sum_{n=0}^\infty \left( \frac{1}{z} \right)^n = -\sum_{n=0}^\infty \frac{1}{z^{n+1}} = -\sum_{k=1}^\infty \frac{1}{z^k}
   $$
   Ikkinchi kasr esa o'zgarishsiz qoladi:
   $$
   -\frac{1}{2 - z} = -\sum_{n=0}^\infty \frac{z^n}{2^{n+1}}
   $$
   To'liq Loran qatori:
   $$
   f(z) = \underbrace{-\sum_{k=1}^\infty \frac{1}{z^k}}_{\text{Bosh qism}} \underbrace{-\sum_{n=0}^\infty \frac{z^n}{2^{n+1}}}_{\text{To'g'ri qism}} = \dots - \frac{1}{z^2} - \frac{1}{z} - \frac{1}{2} - \frac{z}{4} - \frac{z^2}{8} - \dots
   $$
5. **5-qadam: 3-soha ($|z| > 2$).**
   Bu yerda $|1/z| < 1/2 < 1$ va $|2/z| < 1$. Har ikkala kasr manfiy darajalar bo'yicha yoyiladi:
   $$
   -\frac{1}{2 - z} = \frac{1}{z - 2} = \frac{1}{z} \cdot \frac{1}{1 - \frac{2}{z}} = \frac{1}{z} \sum_{n=0}^\infty \left( \frac{2}{z} \right)^n = \sum_{n=0}^\infty \frac{2^n}{z^{n+1}}
   $$
   Yig'sak:
   $$
   f(z) = -\sum_{n=0}^\infty \frac{1}{z^{n+1}} + \sum_{n=0}^\infty \frac{2^n}{z^{n+1}} = \sum_{n=0}^\infty \frac{2^n - 1}{z^{n+1}} = \frac{1}{z^2} + \frac{3}{z^3} + \frac{7}{z^4} + \dots
   $$
   Bu sohada Loran qatori faqat manfiy darajalardan iborat.

---

### 2-misol: Qutblarda chegirmalarni hisoblash
**Shart:** Funksiyaning barcha yakkalangan maxsus nuqtalarini toping, turini aniqlang va har bir nuqtadagi chegirmasini hisoblang:
$$
f(z) = \frac{z + 1}{z^2 (z - 2)}
$$

**Yechish:**
1. **1-qadam: Maxsus nuqtalar.**
   Maxraj $z^2 (z - 2) = 0$:
   - $z_1 = 0$ — 2-tartibli qutb ($m = 2$);
   - $z_2 = 2$ — 1-tartibli (oddiy) qutb ($m = 1$).
2. **2-qadam: $z_2 = 2$ oddiy qutbdagi chegirmani hisoblash.**
   Oddiy qutb formulasidan foydalanamiz:
   $$
   \operatorname{Res}[f, 2] = \lim_{z \to 2} (z - 2) f(z) = \lim_{z \to 2} \frac{z + 1}{z^2} = \frac{2 + 1}{2^2} = \frac{3}{4}
   $$
3. **3-qadam: $z_1 = 0$ karrali qutbdagi chegirmani hisoblash ($m = 2$).**
   Karrali qutb formulasini qo'llaymiz:
   $$
   \operatorname{Res}[f, 0] = \frac{1}{(2 - 1)!} \lim_{z \to 0} \frac{d}{dz} \left[ z^2 \cdot f(z) \right] = \lim_{z \to 0} \frac{d}{dz} \left( \frac{z + 1}{z - 2} \right)
   $$
   Hosilani hisoblaymiz:
   $$
   \left( \frac{z + 1}{z - 2} \right)' = \frac{1 \cdot (z - 2) - (z + 1) \cdot 1}{(z - 2)^2} = \frac{z - 2 - z - 1}{(z - 2)^2} = \frac{-3}{(z - 2)^2}
   $$
   Limitga o'tamiz:
   $$
   \operatorname{Res}[f, 0] = \lim_{z \to 0} \frac{-3}{(z - 2)^2} = \frac{-3}{(-2)^2} = -\frac{3}{4}
   $$
4. **Natija tekshiruvi:**
   E'tibor bering: $\operatorname{Res}[f, 0] + \operatorname{Res}[f, 2] = -\frac{3}{4} + \frac{3}{4} = 0$.
   Cheksizlikdagi chegirma $\operatorname{Res}[f, \infty] = 0$ bo'lgani sababli barcha chegirmalar yig'indisi nolga teng. Bu yechimning mutlaq to'g'riligini isbotlaydi!
5. **Javob:**
   $z = 2$ oddiy qutb, $\operatorname{Res}[f, 2] = 3/4$;
   $z = 0$ 2-tartibli qutb, $\operatorname{Res}[f, 0] = -3/4$.

---

### 3-misol: Muhim maxsus nuqtadagi chegirma
**Shart:** $f(z) = z^3 \cos\left( \frac{1}{z} \right)$ funksiyaning $z = 0$ nuqtadagi chegirmasini toping.

**Yechish:**
1. **1-qadam: Nuqta turini aniqlash.**
   Argument $\frac{1}{z}$ trigonometrik funksiya ichida turibdi. $z \to 0$ da $\cos(1/z)$ hech qanday limitga ega emas (cheksiz tebranadi). Demak, $z = 0$ — **muhim maxsus nuqtadir**.
2. **2-qadam: Loran qatoriga yoyish.**
   Kosinusning standart Teylor qatoridan foydalanamiz:
   $$
   \cos w = 1 - \frac{w^2}{2!} + \frac{w^4}{4!} - \frac{w^6}{6!} + \dots
   $$
   $w = \frac{1}{z}$ ni qo'yamiz:
   $$
   \cos\left( \frac{1}{z} \right) = 1 - \frac{1}{2 z^2} + \frac{1}{24 z^4} - \frac{1}{720 z^6} + \dots
   $$
3. **3-qadam: $z^3$ ga ko'paytirish.**
   $$
   f(z) = z^3 \left( 1 - \frac{1}{2 z^2} + \frac{1}{24 z^4} - \frac{1}{720 z^6} + \dots \right)
   $$
   $$
   f(z) = z^3 - \frac{1}{2} z + \frac{1}{24} \cdot \frac{1}{z} - \frac{1}{720} \cdot \frac{1}{z^3} + \dots
   $$
4. **4-qadam: Chegirmani ajratib olish ($c_{-1}$).**
   Chegirmaning ta'rifiga ko'ra, u aynan $\frac{1}{z}$ oldidagi koeffitsiyentdir:
   $$
   \operatorname{Res}[f, 0] = c_{-1} = \frac{1}{24}
   $$
5. **Javob:**
   $\operatorname{Res}[f(z), 0] = \frac{1}{24}$.

---

### 4-misol: Koshining chegirmalar teoremasi bilan kontur integralini hisoblash
**Shart:** Integralni hisoblang:
$$
\oint_{|z| = 3} \frac{e^z}{z(z - 2)^2} \, dz
$$

**Yechish:**
1. **1-qadam: Kontur va uning ichidagi maxsus nuqtalar.**
   Integrallash konturi: $|z| = 3$ (markazi 0 da, radiusi 3 bo'lgan aylana).
   Maxrajning nollari:
   - $z_1 = 0$: $|0| = 0 < 3$ (kontur ichida yotadi);
   - $z_2 = 2$: $|2| = 2 < 3$ (kontur ichida yotadi).
   Har ikkala maxsus nuqta ham kontur ichida joylashgan!
2. **2-qadam: $z_1 = 0$ nuqtadagi chegirmani hisoblash (oddiy qutb).**
   $$
   \operatorname{Res}[f, 0] = \lim_{z \to 0} z \cdot \frac{e^z}{z(z - 2)^2} = \lim_{z \to 0} \frac{e^z}{(z - 2)^2} = \frac{e^0}{(0 - 2)^2} = \frac{1}{4}
   $$
3. **3-qadam: $z_2 = 2$ nuqtadagi chegirmani hisoblash (2-tartibli qutb).**
   $$
   \operatorname{Res}[f, 2] = \frac{1}{(2 - 1)!} \lim_{z \to 2} \frac{d}{dz} \left[ (z - 2)^2 \frac{e^z}{z(z - 2)^2} \right] = \lim_{z \to 2} \frac{d}{dz} \left( \frac{e^z}{z} \right)
   $$
   Hosilani hisoblaymiz:
   $$
   \left( \frac{e^z}{z} \right)' = \frac{e^z \cdot z - e^z \cdot 1}{z^2} = \frac{e^z (z - 1)}{z^2}
   $$
   Limit:
   $$
   \operatorname{Res}[f, 2] = \frac{e^2 (2 - 1)}{2^2} = \frac{e^2}{4}
   $$
4. **4-qadam: Koshining chegirmalar formulasini qo'llash.**
   $$
   \oint_{|z| = 3} f(z) \, dz = 2\pi i \left( \operatorname{Res}[f, 0] + \operatorname{Res}[f, 2] \right) = 2\pi i \left( \frac{1}{4} + \frac{e^2}{4} \right) = \frac{\pi i (1 + e^2)}{2}
   $$
5. **Javob:**
   $$
   \oint_{|z| = 3} \frac{e^z}{z(z - 2)^2} \, dz = \frac{\pi i (1 + e^2)}{2}
   $$

---

## ⚠️ Talabalar Eng Ko'p Yo'l Qo'yadigan Xatolar va Tuzoqlar

1. **Konturdan tashqaridagi nuqtalarni ham hisobga olish:**
   Masalan, kontur $|z| = 1$ berilgan bo'lsa, $z = 2$ nuqta uning tashqarisida bo'ladi. Ko'pchilik talabalar nuqta qayerda yotganini tekshirmasdan barcha maxsus nuqtalardagi chegirmalarni yig'ib yuborishadi.
   - ❌ **Xato:** Kontur tashqarisidagi nuqtalar chegirmasini qo'shish.
   - ✅ **To'g'ri:** Faqat va faqat kontur **ichiga** tushgan maxsus nuqtalar hisoblanadi!

2. **Karrali qutb formulasidagi faktorialni unutish:**
   $m$-tartibli qutbda hosila oldida $\frac{1}{(m - 1)!}$ koeffitsiyent turadi. Masalan, $m = 3$ bo'lsa, $\frac{1}{2!} = \frac{1}{2}$ ga bo'lish kerak. Talabalar buni unutib, javobni 2 yoki 6 marta oshirib yuborishadi.

3. **Muhim maxsus nuqtada qutb formulasini ishlatishga urinish:**
   Muhim nuqtada (masalan, $e^{1/z}$) limit $\lim z \cdot e^{1/z}$ cheksizlikka ketadi. Bu yerda chegaraviy qoidalar ishlamaydi! Faqat Loran qatoriga yoyish lozim.

4. **Kasr hosilasida ishoralarni adashtirish:**
   $\frac{\varphi(z_0)}{\psi'(z_0)}$ qoidasi faqat oddiy qutb ($m = 1$) uchun to'g'ri! Agar maxrajning noli karrali bo'lsa, $\psi'(z_0) = 0$ bo'lib, nolga bo'lish yuzaga keladi.

---

## 🎯 Mustaqil Yechish Uchun Amaliy Mashqlar va Yechimlar

### 1-mashq
$f(z) = \frac{1}{z^3 - z^5}$ funksiyaning $z = 0$ nuqtadagi maxsus nuqta turini va chegirmasini toping.

<details>
<summary>👉 Bosqichma-bosqich yechimni ko'rish</summary>

1. **Qayta shakllantiramiz:**
   $$
   f(z) = \frac{1}{z^3 (1 - z^2)}
   $$
   $z = 0$ — 3-tartibli qutb ($m = 3$).
2. **Loran qatoriga yoyamiz ($|z| < 1$):**
   $$
   \frac{1}{1 - z^2} = 1 + z^2 + z^4 + \dots
   $$
   $$
   f(z) = \frac{1}{z^3} (1 + z^2 + z^4 + \dots) = \frac{1}{z^3} + \frac{1}{z} + z + \dots
   $$
3. **Chegirmani ajratamiz:**
   $\frac{1}{z}$ oldidagi koeffitsiyent: $c_{-1} = 1$.

**Javob:** $z = 0$ — 3-tartibli qutb, $\operatorname{Res}[f, 0] = 1$.
</details>

---

### 2-mashq
Integralni hisoblang:
$$
\oint_{|z| = 2} \frac{z^2}{z^2 + 1} \, dz
$$

<details>
<summary>👉 Bosqichma-bosqich yechimni ko'rish</summary>

1. **Maxsus nuqtalar:**
   $z^2 + 1 = 0 \implies z_{1,2} = \pm i$.
   Har ikkala nuqtaning moduli $|\pm i| = 1 < 2$. Demak, ikkalasi ham $|z| = 2$ kontur ichida yotadi.
2. **Chegirmalarni hisoblash (oddiy qutblar):**
   $\varphi(z) = z^2$, $\psi(z) = z^2 + 1 \implies \psi'(z) = 2z$.
   $$
   \operatorname{Res}[f, i] = \left. \frac{z^2}{2z} \right|_{z = i} = \frac{i}{2}
   $$
   $$
   \operatorname{Res}[f, -i] = \left. \frac{z^2}{2z} \right|_{z = -i} = \frac{-i}{2}
   $$
3. **Integral:**
   $$
   \oint_{|z| = 2} f(z) \, dz = 2\pi i \left( \frac{i}{2} - \frac{i}{2} \right) = 2\pi i \cdot 0 = 0
   $$

**Javob:** $0$.
</details>

---

### 3-mashq
$f(z) = \sin\left( \frac{1}{z - 1} \right)$ funksiyaning $z = 1$ nuqtadagi chegirmasini toping va $\oint_{|z - 1| = 1} \sin\left(\frac{1}{z-1}\right) dz$ integralni hisoblang.

<details>
<summary>👉 Bosqichma-bosqich yechimni ko'rish</summary>

1. **Loran qatoriga yoyish:**
   Sinus qatori: $\sin w = w - \frac{w^3}{3!} + \dots$
   $w = \frac{1}{z - 1}$ deb olsak:
   $$
   \sin\left( \frac{1}{z - 1} \right) = \frac{1}{z - 1} - \frac{1}{6 (z - 1)^3} + \dots
   $$
2. **Chegirma:**
   $\frac{1}{z - 1}$ ning koeffitsiyenti $c_{-1} = 1$.
   Demak: $\operatorname{Res}[f, 1] = 1$.
3. **Integralni hisoblash:**
   $z = 1$ nuqta $|z - 1| = 1$ kontur markazida yotadi:
   $$
   \oint_{|z - 1| = 1} f(z) \, dz = 2\pi i \cdot \operatorname{Res}[f, 1] = 2\pi i \cdot 1 = 2\pi i
   $$

**Javob:** $\operatorname{Res}[f, 1] = 1$, Integral $= 2\pi i$.
</details>

---

## 💡 Imtihon Layfhaklari va Tezkor Maslahatlar

1. **Oddiy qutblar uchun "Qo'l bilan yopish" (Heaviside) usuli:**
   Agar maxraj $(z - a)(z - b)$ ko'rinishida bo'lsa, $z = a$ dagi chegirmani topish uchun barmoq bilan $(z - a)$ ni yopib, qolgan ifodaga $z = a$ ni qo'ying!
   *Misol:* $\frac{z + 3}{(z - 1)(z + 2)}$ funksiyaning $z = 1$ dagi chegirmasi: $\frac{1 + 3}{1 + 2} = \frac{4}{3}$. 1 soniyada tayyor!

2. **Cheksizlikdagi chegirmalar orqali hisoblash:**
   Agar kontur ichida juda ko'p maxsus nuqtalar bo'lsa (masalan, 5-6 ta), ularning hammasini hisoblab o'tirmang! Barcha ichki chegirmalar yig'indisi kontur tashqarisidagi chegirmalar va cheksizlikdagi chegirma yig'indisining qarama-qarshisiga teng bo'ladi:
   $$
   \sum_{\text{ichki}} \operatorname{Res} = -\operatorname{Res}[f, \infty] - \sum_{\text{tashqi}} \operatorname{Res}
   $$

3. **Juft va toq funksiyalar simmetriyasi:**
   Agar funksiya toq bo'lsa va simmetrik qutblarga ega bo'lsa (masalan, $\pm i$ yoki $\pm 2$), ulardagi chegirmalar ko'pincha bir-birini qisqartirib yuboradi. Buni oldindan sezish hisoblash vaqtini tejaydi.
