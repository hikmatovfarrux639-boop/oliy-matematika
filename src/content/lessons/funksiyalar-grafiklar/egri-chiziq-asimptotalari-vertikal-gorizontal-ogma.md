---
title: "Egri chiziq asimptotalari: Vertikal, gorizontal va og'ma asimptotalar"
module: "funksiyalar-grafiklar"
order: 9
description: "Funksiya grafigining cheksizlikdagi xulq-atvori, 2-tur uzilish nuqtalari va vertikal asimptotalar, og'ma asimptotaning k va b koeffitsiyentlarini limit orqali topish."
---

Funksiya grafigini to'liq tadqiq qilish va chizishda uning cheksizlikdagi hamda uzilish nuqtalari atrofidagi xulq-atvorini o'rganish hal qiluvchi ahamiyatga ega. Ko'p hollarda egri chiziq nuqtasi koordinata boshidan cheksiz uzoqlashganda, grafik ma'lum bir to'g'ri chiziqqa cheksiz yaqinlashib boradi, ammo unga hech qachon qo'shilib ketmaydi. Bunday to'g'ri chiziqlar **asimptotalar** deb ataladi.

> [!IMPORTANT]
> **Ta'rif:** Agar $y = f(x)$ egri chiziq ustidagi $M(x, y)$ nuqta egri chiziq bo'ylab koordinata boshidan cheksiz uzoqlashganda (ya'ni $x \to \pm\infty$ yoki $y \to \pm\infty$ da), shu $M$ nuqtadan biror $L$ to'g'ri chiziqqacha bo'lgan $d$ masofa nolga intilsa ($\lim d = 0$), u holda $L$ to'g'ri chiziq berilgan egri chiziqning **asimptotasi** deyiladi.

Tekislikda joylashuviga ko'ra asimptotalar uch turga bo'linadi:
1. **Vertikal asimptotalar** ($x = a$ ko'rinishida — ordinatalar o'qiga parallel);
2. **Gorizontal asimptotalar** ($y = b$ ko'rinishida — abssissalar o'qiga parallel);
3. **Og'ma asimptotalar** ($y = kx + b$, $k \neq 0$ ko'rinishida — koordinata o'qlariga burchak ostida joylashgan).

---

## 1. Vertikal asimptotalar

Funksiya grafigining vertikal asimptotasi odatda funksiyaning aniqlanish sohasiga kirmaydigan chegara nuqtalarida yoki 2-tur uzilish nuqtalarida paydo bo'ladi.

> [!NOTE]
> **Qoida:** Agar $x \to a - 0$(chapdan) yoki $x \to a + 0$ (o'ngdan) bir tomonlama limitlardan kamida bittasi cheksizlikka ($\pm\infty$) teng bo'lsa:
> $$\lim_{x \to a-0} f(x) = \pm\infty \quad \text{yoki} \quad \lim_{x \to a+0} f(x) = \pm\infty $$
> u holda $x = a$ to'g'ri chiziq $y = f(x)$ funksiya grafigining **vertikal asimptotasi** bo'ladi.

Vertikal asimptotalarni izlash algoritmi:
1. Funksiyaning aniqlanish sohasini ($D(f)$) toping.
2. Maxrajni nolga aylantiruvchi nuqtalarni, logarifm argumentini nolga tenglashtiruvchi chegara nuqtalarini yoki tangens/kotangens kabi funksiyalarning uzilish nuqtalarini ajratib oling.
3. Har bir shubhali $x = a$ nuqtada chap va o'ng limitlarni hisoblang. Agar limit cheksiz bo'lsa, $x = a$ vertikal asimptotadir.

> [!WARNING]
> Maxrajni nolga aylantiruvchi har qanday nuqta ham vertikal asimptota bo'lavermaydi! Agar $\lim_{x \to a} f(x) = L$(chekli son) bo'lsa, $x = a$ nuqtada 1-tur (bartaraf etib bo'ladigan) uzilish mavjud bo'lib, u yerda vertikal asimptota **yo'q**. Masalan, $f(x) = \frac{x^2 - 4}{x - 2}$ funksiyada $x = 2$ vertikal asimptota emas, chunki $\lim_{x \to 2} \frac{x^2 - 4}{x - 2} = 4$.

---

## 2. Og'ma va gorizontal asimptotalar

Aytaylik, $y = f(x)$ funksiya $x \to +\infty$(yoki $x \to -\infty$) da $y = kx + b$ og'ma asimptotaga ega bo'lsin. Egri chiziq ustidagi $M(x, f(x))$ nuqtadan $kx - y + b = 0$ to'g'ri chiziqqacha bo'lgan perpendikulyar masofa quyidagiga teng:

$$d = \frac{|f(x) - (kx + b)|}{\sqrt{k^2 + 1}}$$

Ta'rifga ko'ra $x \to +\infty$ da $d \to 0$ bo'lishi zarur va yetarli.$\sqrt{k^2 + 1} = \text{const} > 0$ bo'lgani uchun bu shart quyidagi limit bilan teng kuchli:

$$\lim_{x \to +\infty} [f(x) - (kx + b)] = 0 \quad (1)$$

Ushbu tenglikdan burchak koeffitsiyenti $k$ va boshlang'ich ordinata $b$ ni topish formulalarini keltirib chiqaramiz. (1) ifodani $x$ ga bo'lib, limitga o'tsak ($\lim_{x \to +\infty} \frac{b}{x} = 0$ ekanini hisobga olib):

$$\lim_{x \to +\infty} \left[ \frac{f(x)}{x} - k - \frac{b}{x} \right] = 0 \implies k = \lim_{x \to +\infty} \frac{f(x)}{x}$$

Agar $k$ chekli limit mavjud bo'lsa, uni (1) tenglikka qo'yib, $b$ ni topamiz:

$$b = \lim_{x \to +\infty} [f(x) - kx]$$

> [!IMPORTANT]
> **Og'ma asimptota formulalari:** $y = kx + b$ to'g'ri chiziq $x \to +\infty$(yoki $x \to -\infty$) da $y = f(x)$ funksiya grafigining asimptotasi bo'lishi uchun quyidagi ikkita chekli limit mavjud bo'lishi zarur va yetarli:
> $$ k = \lim_{x \to \pm\infty} \frac{f(x)}{x}, \qquad b = \lim_{x \to \pm\infty} [f(x) - kx]$$
> Agar shu ikki limitdan birortasi mavjud bo'lmasa yoki cheksizga teng bo'lsa, u holda tegishli ishorali cheksizlikda og'ma asimptota mavjud emas.

### Xususiy hol: Gorizontal asimptota
Agar $k = \lim_{x \to \pm\infty} \frac{f(x)}{x} = 0$ bo'lsa, u holda $b = \lim_{x \to \pm\infty} f(x)$ bo'ladi va asimptota tenglamasi $y = b$ ko'rinishni oladi. Demak, **gorizontal asimptota** og'ma asimptotaning $k = 0$ bo'lgandagi xususiy holidir.

> [!TIP]
> Amaliyotda avval bevosita $\lim_{x \to \pm\infty} f(x)$ ni tekshirish qulay: agar u chekli $b$ songa teng bo'lsa, darhol $y = b$ gorizontal asimptota yoziladi va shu yo'nalishda ($+\infty$ yoki $-\infty$) boshqa og'ma asimptota qidirilmaydi (chunki $k=0$ bo'ladi).

---

## 3. Kasr-ratsional funksiyalarda asimptotalarni tez topish usuli

Kasr-ratsional funksiya $f(x) = \frac{P_n(x)}{Q_m(x)}$ berilgan bo'lsin, bu yerda $P_n(x)$ — $n$-darajali, $Q_m(x)$ — $m$-darajali ko'phadlar:

| Darajalar nisbati | Cheksizlikdagi asimptota turi | Topish qoidasi |
| :--- | :--- | :--- |
| $n < m$| Gorizontal: $y = 0$ | Ox o'qining o'zi asimptota bo'ladi |
| $n = m$| Gorizontal: $y = \frac{a_n}{b_m}$ | Bosh hadlar koeffitsiyentlari nisbati |
| $n = m + 1$| Og'ma: $y = kx + b$ | Ko'phadlarni burchak usulida bo'lish orqali butun qismi olinadi |
| $n > m + 1$| Asimptota yo'q |$k = \pm\infty$ chiqadi (parabolik asimptotaga ega bo'lishi mumkin) |

---

## 4. Namunaviy misollar yechimi

### 1-misol. Kasr-ratsional funksiya asimptotalari (2 xil usulda)
$f(x) = \frac{2x^3 - 3x^2 + 1}{x^2 - 1}$ funksiya grafigining barcha asimptotalarini toping.

**Yechim:**
**1-qadam (Vertikal asimptotalar):**
Aniqlanish sohasi: $x^2 - 1 \neq 0 \implies x \neq -1$ va $x \neq 1$.
E'tibor bering: $x = 1$ nuqtada surat ham nolga aylanadi ($2(1)^3 - 3(1)^2 + 1 = 0$). Suratni ko'paytuvchilarga ajratamiz:
$$2x^3 - 3x^2 + 1 = (x - 1)(2x^2 - x - 1) = (x - 1)^2(2x + 1)$$
Maxraj: $x^2 - 1 = (x - 1)(x + 1)$.
Demak, $x \neq \pm 1$ da:
$$f(x) = \frac{(x - 1)^2(2x + 1)}{(x - 1)(x + 1)} = \frac{(x - 1)(2x + 1)}{x + 1} = \frac{2x^2 - x - 1}{x + 1}$$
- $x = 1$ nuqtada: $\lim_{x \to 1} f(x) = \frac{(1 - 1)(2 + 1)}{1 + 1} = 0$(chekli son). Demak, $x = 1$ vertikal asimptota **emas** (grafikda uzilish nuqtasi).
- $x = -1$ nuqtada:
  $$\lim_{x \to -1-0} \frac{2x^2 - x - 1}{x + 1} = \left[\frac{2}{-0}\right] = -\infty, \qquad \lim_{x \to -1+0} \frac{2x^2 - x - 1}{x + 1} = \left[\frac{2}{+0}\right] = +\infty$$
Demak, **$x = -1$ — yagona vertikal asimptota**.

**2-qadam (Og'ma asimptota — 1-usul: Limitlar yordamida):**
$$k = \lim_{x \to \pm\infty} \frac{f(x)}{x} = \lim_{x \to \pm\infty} \frac{2x^2 - x - 1}{x(x + 1)} = \lim_{x \to \pm\infty} \frac{2x^2 - x - 1}{x^2 + x} = 2$$
$$b = \lim_{x \to \pm\infty} [f(x) - 2x] = \lim_{x \to \pm\infty} \left( \frac{2x^2 - x - 1}{x + 1} - 2x \right) = \lim_{x \to \pm\infty} \frac{2x^2 - x - 1 - 2x^2 - 2x}{x + 1} = \lim_{x \to \pm\infty} \frac{-3x - 1}{x + 1} = -3$$
Demak, **$y = 2x - 3$ — og'ma asimptota**.

**2-qadam (Og'ma asimptota — 2-usul: Butun qismni ajratish):**
Suratni maxrajga bo'lib, kasrning butun va to'g'ri kasr qismlarini ajratamiz:
$$f(x) = \frac{2x^2 - x - 1}{x + 1} = \frac{2x(x + 1) - 3(x + 1) + 2}{x + 1} = 2x - 3 + \frac{2}{x + 1}$$
$x \to \pm\infty$ da qoldiq had $\frac{2}{x + 1} \to 0$ bo'lgani uchun, funksiya grafigi $y = 2x - 3$ to'g'ri chiziqqa cheksiz yaqinlashadi.

---

### 2-misol. Irratsional funksiya ($+\infty$ va $-\infty$ da turli asimptotalar)$f(x) = \sqrt{4x^2 + 4x - 3}$ funksiya grafigining asimptotalarini toping.

**Yechim:**
**1-qadam (Aniqlanish sohasi va vertikal asimptota):**
$$4x^2 + 4x - 3 \ge 0 \implies (2x - 1)(2x + 3) \ge 0 \implies D(f) = (-\infty; -1.5] \cup [0.5; +\infty)$$
Funksiya o'zining aniqlanish sohasining barcha nuqtalarida uzluksiz, chegara nuqtalarida esa $f(-1.5) = 0$ va $f(0.5) = 0$ chekli qiymat oladi. Demak, **vertikal asimptotasi yo'q**.

**2-qadam ($x \to +\infty$ va $x \to -\infty$ hollarini alohida tekshirish):**
Eslab qoling: $\sqrt{x^2} = |x|$. Shuning uchun $x \to +\infty$ da $\sqrt{x^2} = x$, ammo $x \to -\infty$ da $\sqrt{x^2} = -x$ bo'ladi!

- **$x \to +\infty$ bo'lganda:**
  $$k_1 = \lim_{x \to +\infty} \frac{\sqrt{4x^2 + 4x - 3}}{x} = \lim_{x \to +\infty} \frac{x\sqrt{4 + \frac{4}{x} - \frac{3}{x^2}}}{x} = 2$$
  $$b_1 = \lim_{x \to +\infty} \left(\sqrt{4x^2 + 4x - 3} - 2x\right)$$
  Qo'shmasiga ko'paytiramiz va bo'lamiz:
  $$b_1 = \lim_{x \to +\infty} \frac{(4x^2 + 4x - 3) - 4x^2}{\sqrt{4x^2 + 4x - 3} + 2x} = \lim_{x \to +\infty} \frac{4x - 3}{x\left(\sqrt{4 + \frac{4}{x} - \frac{3}{x^2}} + 2\right)} = \frac{4}{2 + 2} = 1$$
  Demak, $x \to +\infty$ da o'ng og'ma asimptota: **$y = 2x + 1$**.

- **$x \to -\infty$ bo'lganda ($\sqrt{x^2} = |x| = -x$):**
  $$k_2 = \lim_{x \to -\infty} \frac{\sqrt{4x^2 + 4x - 3}}{x} = \lim_{x \to -\infty} \frac{-x\sqrt{4 + \frac{4}{x} - \frac{3}{x^2}}}{x} = -2$$
  $$b_2 = \lim_{x \to -\infty} \left(\sqrt{4x^2 + 4x - 3} - (-2x)\right) = \lim_{x \to -\infty} \left(\sqrt{4x^2 + 4x - 3} + 2x\right)$$
  Qo'shmasiga ko'paytiramiz:
  $$b_2 = \lim_{x \to -\infty} \frac{4x - 3}{\sqrt{4x^2 + 4x - 3} - 2x} = \lim_{x \to -\infty} \frac{4x - 3}{-x\sqrt{4 + \frac{4}{x} - \frac{3}{x^2}} - 2x} = \frac{4}{-2 - 2} = -1$$
  Demak, $x \to -\infty$ da chap og'ma asimptota: **$y = -2x - 1$**.

---

### 3-misol. Transsendent funksiya asimptotalari
$f(x) = x \cdot e^{-\frac{1}{x}}$ funksiyaning barcha asimptotalarini toping.

**Yechim:**
1. **Aniqlanish sohasi:** $D(f) = (-\infty; 0) \cup (0; +\infty)$. Yagona shubhali nuqta $x = 0$.
   - Chap limit ($x \to -0$): $-\frac{1}{x} \to +\infty \implies e^{-\frac{1}{x}} \to +\infty$, ammo ko'paytuvchi $x \to -0$. $t = -\frac{1}{x}$ ($t \to +\infty$) almashtirish qilsak:
     $$\lim_{x \to -0} x e^{-\frac{1}{x}} = \lim_{t \to +\infty} \left(-\frac{e^t}{t}\right) = -\infty \quad (\text{Lopital qoidasiga ko'ra})$$
   - O'ng limit ($x \to +0$): $-\frac{1}{x} \to -\infty \implies e^{-\frac{1}{x}} \to 0$. Demak, $\lim_{x \to +0} x e^{-\frac{1}{x}} = 0 \cdot 0 = 0$.
   Chap limit cheksiz bo'lgani sababli, **$x = 0$ — vertikal asimptota** (faqat chap tomondan).

2. **Og'ma asimptota ($x \to \pm\infty$):**
   $$k = \lim_{x \to \pm\infty} \frac{x e^{-\frac{1}{x}}}{x} = \lim_{x \to \pm\infty} e^{-\frac{1}{x}} = e^0 = 1$$
   $$b = \lim_{x \to \pm\infty} \left(x e^{-\frac{1}{x}} - x\right) = \lim_{x \to \pm\infty} x\left(e^{-\frac{1}{x}} - 1\right)$$
   $u = -\frac{1}{x}$ ($x \to \pm\infty$ da $u \to 0$) almashtirish va birinchi ajoyib limit natijasidan ($\lim_{u \to 0} \frac{e^u - 1}{u} = 1$) foydalanamiz:
   $$b = \lim_{u \to 0} \left(-\frac{e^u - 1}{u}\right) = -1$$
   Demak, **$y = x - 1$ — ikki tomonlama og'ma asimptota**.

---

## 5. O'z-o'zini tekshirish savollari

1. **Funksiya grafigi o'zining gorizontal yoki og'ma asimptotasini kesib o'tishi mumkinmi?**
   - *Javob:* **Ha, mumkin!** Vertikal asimptotani funksiya grafigi hech qachon kesib o'tolmaydi (chunki funksiya bir qiymatli va u nuqtada uzilishga ega), biroq gorizontal yoki og'ma asimptotani chekli nuqtalarda (hatto $f(x) = \frac{\sin x}{x}$ kabi cheksiz ko'p marta ham) kesib o'tishi mumkin. Asimptota sharti faqat $x \to \pm\infty$ dagi masofaning nolga intilishini talab qiladi.
2. **Bir funksiya grafigi ko'pi bilan nechta og'ma (yoki gorizontal) asimptotaga ega bo'lishi mumkin?**
   - *Javob:* Ko'pi bilan **2 ta**: bittasi $x \to +\infty$ da, ikkinchisi $x \to -\infty$ da (chunki har bir yo'nalishda limit mavjud bo'lsa, u yagonadir). Vertikal asimptotalar esa cheksiz ko'p bo'lishi mumkin (masalan, $y = \tan x$ da).

---

## 6. Mustaqil yechish uchun masalalar

Quyidagi funksiyalarning barcha (vertikal, gorizontal va og'ma) asimptotalarini toping:

1. $f(x) = \frac{3x^2 - 5x + 2}{x^2 - 4}$
2. $f(x) = \frac{x^2 + 2x + 5}{x - 1}$
3. $f(x) = x + 2\arctan x$
4. $f(x) = \frac{x}{\sqrt{x^2 + 1}}$
5. $f(x) = \ln(x^2 - 9)$

> [!TIP]
> **Javoblar:**
> 1. Vertikal: $x = -2$, $x = 2$; Gorizontal: $y = 3$; Og'ma yo'q.
> 2. Vertikal: $x = 1$; Og'ma: $y = x + 3$.
> 3. Vertikal yo'q; Og'ma: $x \to +\infty$ da $y = x + \pi$, $x \to -\infty$ da $y = x - \pi$.
> 4. Vertikal yo'q; Gorizontal: $x \to +\infty$ da $y = 1$, $x \to -\infty$ da $y = -1$.
> 5. Vertikal: $x = -3$ va $x = 3$; Gorizontal va og'ma asimptotalari yo'q ($k = 0$, $b = +\infty$).
