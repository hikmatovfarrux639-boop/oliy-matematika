---
title: "Aniq integralning geometrik va fizik tatbiqlari: Yoy uzunligi, aylanma sirt yuzi va bajarilgan ish"
module: "integrallar"
order: 12
description: "Aniq integralning amaliy tatbiqlari: egri chiziq yoyi uzunligini Dekart, parametrik va qutb koordinatalarida hisoblash, aylanma jism sirtining yuzi, o'zgaruvchan kuchning bajargan ishi va plastinkaning og'irlik markazi."
---

## 📌 Kirish va Geometrik/Fizik Mohiyat

Klassik matematik analizda aniq integral — bu shunchaki $y = f(x)$ funksiya grafigi ostidagi egri chiziqli trapetsiya yuzini hisoblash vositasi emas. U uzluksiz jarayonlarni, geometrik obyektlarni va fizik hodisalarni modellashtirishning qudratli fundamental mexanizmidir.

Aniq integralning har qanday amaliy tatbiqi Riman tomonidan umumlashtirilgan quyidagi **to'rt bosqichli differensiallashuv printsipiga** tayanadi:
1. **Bo'laklash:** O'rganilayotgan oraliq yoki obyektni cheksiz kichik elementar bo'laklarga ajratish.
2. **Chiziqlashtirish (Approksimatsiya):** Har bir elementar bo'lakdagi murakkab, o'zgaruvchan kattalikni unga cheksiz yaqin bo'lgan o'zgarmas yoki oddiy chiziqli kattalik (differensial) bilan almashtirish.
3. **Yig'ish:** Barcha elementar bo'lakchalar yig'indisini (integral yig'indi) tuzish.
4. **Limitga o'tish:** Bo'lakchalar soni cheksizlikka, eng katta bo'lak o'lchami esa nolga intilgandagi limit sifatida aniq integralni hosil qilish.

Ushbu tamoyil orqali biz nafaqat tekis egri chiziqlar uzunligini, balki fazoviy sirtlarning maydonlarini, suyuqlikning to'g'onga beradigan gidrostatik bosimini, o'zgaruvchan gravitatsiya va elastiklik kuchlarining bajargan mexanik ishini hamda qattiq jismlarning massalar markazini aniq hisoblay olamiz.

---

## 📐 Asosiy Nazariya, Qoidalar va Teoremalar

### 1. Yassi egri chiziq yoyi uzunligini hisoblash ($L$)

Faraz qilaylik, silliq (ya'ni uzluksiz hosilaga ega bo'lgan) egri chiziq berilgan bo'lsin. Egri chiziqning elementar $dl$ yoy differensiali Pifagor teoremasiga binoan quyidagicha aniqlanadi:
$$dl = \sqrt{dx^2 + dy^2}$$

Ushbu differensial ifodani turli koordinata sistemalariga moslashtiramiz:

#### A) Dekart koordinatalarida oshkor ko'rinish:
Agar egri chiziq $y = f(x)$ tenglama bilan berilgan bo'lib, $x \in [a, b]$ va $f'(x)$ uzluksiz bo'lsa:
$$dy = f'(x) dx \implies dl = \sqrt{dx^2 + [f'(x)dx]^2} = \sqrt{1 + [f'(x)]^2} \, dx$$
Yoy uzunligi:
$$L = \int_a^b \sqrt{1 + [f'(x)]^2} \, dx$$

Agar egri chiziq $x = g(y)$ ko'rinishida berilgan bo'lsa ($c \le y \le d$):
$$L = \int_c^d \sqrt{1 + [g'(y)]^2} \, dy$$

#### B) Parametrik ko'rinishda:
Agar egri chiziq $x = x(t), \; y = y(t)$ parametrik tenglamalari orqali berilgan bo'lib, $t \in [t_1, t_2]$ da $x'(t)$ va $y'(t)$ uzluksiz bo'lsa:
$$dx = x'(t)dt, \quad dy = y'(t)dt \implies dl = \sqrt{[x'(t)]^2 + [y'(t)]^2} \, dt$$
$$L = \int_{t_1}^{t_2} \sqrt{[x'(t)]^2 + [y'(t)]^2} \, dt$$

#### C) Qutb koordinatalar sistemasida:
Agar egri chiziq $\rho = \rho(\varphi)$ tenglama bilan berilgan bo'lib, $\varphi \in [\alpha, \beta]$ bo'lsa:
Dekart va qutb koordinatalari bog'lanishi: $x = \rho(\varphi)\cos\varphi$, $y = \rho(\varphi)\sin\varphi$.
Ulardan $\varphi$ bo'yicha hosila olib, kvadratlarini qo'shsak:
$$(x')^2 + (y')^2 = \rho^2 + (\rho')^2$$
Demak, yoy uzunligi:
$$L = \int_\alpha^\beta \sqrt{\rho^2 + \left(\frac{d\rho}{d\varphi}\right)^2} \, d\varphi$$

---

### 2. Aylanma jism sirtining yuzi ($Q$)

Silliq $y = f(x)$ ($f(x) \ge 0$) egri chiziq yoyining $Ox$ o'qi atrofida to'liq $360^\circ$ ga aylanishidan hosil bo'lgan jism sirtini ko'rib chiqaylik. Cheksiz kichik $dl$ yoy aylanma harakatda radiusi $y$ bo'lgan elementar kesik konus sirtini hosil qiladi:
$$dQ_x = 2\pi y \, dl$$

Shu sababli aylanma sirt yuzlari quyidagi formulalar bilan hisoblanadi:

1. **$Ox$ o'qi atrofida aylanganda (Dekart sistemasida):**
   $$Q_x = 2\pi \int_a^b f(x) \sqrt{1 + [f'(x)]^2} \, dx$$

2. **$Oy$ o'qi atrofida aylanganda ($a \ge 0$ bo'lganda):**
   $$Q_y = 2\pi \int_a^b x \sqrt{1 + [f'(x)]^2} \, dx$$

3. **Parametrik ko'rinishda ($Ox$ o'qi atrofida):**
   $$Q_x = 2\pi \int_{t_1}^{t_2} y(t) \sqrt{[x'(t)]^2 + [y'(t)]^2} \, dt$$

---

### 3. Fizik tatbiqlar: Mexanik ish, gidrostatik bosim va massalar markazi

#### A) O'zgaruvchan kuchning bajargan ishi:
Moddiy nuqta $Ox$ o'qi bo'ylab $F(x)$ yo'naltirilgan o'zgaruvchan kuch ta'sirida $x = a$ nuqtadan $x = b$ nuqtaga ko'chganda bajarilgan ish:
$$A = \int_a^b F(x) \, dx$$
- *Guk qonuni:* Prujinani $x$ masofaga cho'zuvchi elastiklik kuchi $F(x) = kx$. Uni $0$ dan $x_0$ gacha cho'zishdagi ish: $A = \int_0^{x_0} kx \, dx = \frac{k x_0^2}{2}$.
- *Gravitatsiya ishi:* Massalari $M$ va $m$ bo'lgan jismlarni $r_1$ masofadan $r_2$ masofaga uzoqlashtirish ishi: $A = \int_{r_1}^{r_2} G \frac{M m}{r^2} \, dr = G M m \left(\frac{1}{r_1} - \frac{1}{r_2}\right)$.

#### B) Rezervuardan suyuqlikni so'rib chiqarish ishi:
Zichligi $\rho$ bo'lgan suyuqlik to'ldirilgan idishdan suyuqlikni yuqori qirraga qadar ko'tarib to'kishda $x$ chuqurlikdagi qalinligi $dx$, ko'ndalang kesim yuzi $S(x)$ bo'lgan qatlamning elementar massasi $dm = \rho S(x) dx$. Ushbu qatlamni $x$ balandlikka ko'tarish ishi $dA = g x \, dm = g \rho x S(x) dx$. To'liq ish:
$$A = \rho g \int_0^H x S(x) \, dx$$

#### C) Yassi shakllarning og'irlik markazi (massalar markazi):
Qalinligi bir jinsli bo'lgan, pastdan $Ox$ o'qi, yuqoridan $y = f(x)$ egri chiziq, yon tomondan $x = a$ va $x = b$ to'g'ri chiziqlar bilan chegaralangan figuraning og'irlik markazi koordinatalari $(x_c, y_c)$:
$$x_c = \frac{M_y}{S} = \frac{\int_a^b x f(x) \, dx}{\int_a^b f(x) \, dx}, \qquad y_c = \frac{M_x}{S} = \frac{\frac{1}{2}\int_a^b [f(x)]^2 \, dx}{\int_a^b f(x) \, dx}$$
bu yerda $M_y$ va $M_x$ — figuraning $Oy$ va $Ox$ o'qlariga nisbatan statik momentlari, $S$ — figura yuzi.

---

## 📝 Qadamma-qadam Yechilgan Universitet Misollari

### 1-Misol: Dekart koordinatalarida yoy uzunligi
Quyidagi egri chiziqning $x \in \left[0, \frac{\pi}{3}\right]$ oraliqdagi yoy uzunligini hisoblang:
$$y = \ln(\cos x)$$

**Yechish:**
1. Berilgan funksiyaning hosilasini topamiz:
   $$y' = \frac{d}{dx}(\ln(\cos x)) = \frac{-\sin x}{\cos x} = -\operatorname{tg} x$$
2. Ildiz ostidagi ifodani tuzamiz va soddalashtiramiz:
   $$1 + (y')^2 = 1 + (-\operatorname{tg} x)^2 = 1 + \operatorname{tg}^2 x = \frac{1}{\cos^2 x}$$
3. Yoy differensialini ildizdan chiqaramiz. Oraliq $x \in \left[0, \frac{\pi}{3}\right]$ bo'lgani uchun $\cos x > 0$:
   $$\sqrt{1 + (y')^2} = \sqrt{\frac{1}{\cos^2 x}} = \frac{1}{\cos x}$$
4. Aniq integralni hisoblaymiz:
   $$L = \int_0^{\pi/3} \frac{dx}{\cos x} = \left. \ln\left| \operatorname{tg}\left(\frac{x}{2} + \frac{\pi}{4}\right) \right| \right|_0^{\pi/3}$$
   Yoki standart $\int \frac{dx}{\cos x} = \ln|\sec x + \operatorname{tg} x|$ ko'rinishida:
   $$L = \left[ \ln|\sec x + \operatorname{tg} x| \right]_0^{\pi/3}$$
   Yuqori va quyi chegaralarni qo'yamiz:
   $$x = \frac{\pi}{3} \implies \sec\frac{\pi}{3} = 2, \quad \operatorname{tg}\frac{\pi}{3} = \sqrt{3} \implies \ln(2 + \sqrt{3})$$
   $$x = 0 \implies \sec 0 = 1, \quad \operatorname{tg} 0 = 0 \implies \ln(1 + 0) = 0$$
   $$L = \ln(2 + \sqrt{3}) \approx 1.317$$

**Javob:** $L = \ln(2 + \sqrt{3})$.

---

### 2-Misol: Parametrik egri chiziq yoy uzunligi va aylanma sirt yuzi
Sikloidaning birinchi to'liq arkasi berilgan:
$$x = a(t - \sin t), \quad y = a(1 - \cos t), \quad t \in [0, 2\pi] \quad (a > 0)$$
a) Sikloida arkasining to'liq yoy uzunligi $L$ ni toping;
b) Ushbu arkaning $Ox$ o'qi atrofida aylanishidan hosil bo'lgan sirt yuzi $Q_x$ ni hisoblang.

**Yechish:**
1. Parametr $t$ bo'yicha hosilalarni topamiz:
   $$x'(t) = a(1 - \cos t), \quad y'(t) = a\sin t$$
2. Hosilalar kvadratlari yig'indisini soddalashtiramiz:
   $$(x')^2 + (y')^2 = a^2 (1 - 2\cos t + \cos^2 t) + a^2 \sin^2 t = a^2 (1 - 2\cos t + 1) = 2a^2 (1 - \cos t)$$
   Trigonometrik yarim burchak formulasiga ko'ra $1 - \cos t = 2\sin^2\frac{t}{2}$:
   $$(x')^2 + (y')^2 = 2a^2 \cdot 2\sin^2\frac{t}{2} = 4a^2 \sin^2\frac{t}{2}$$
3. Ildizdan chiqaramiz. $t \in [0, 2\pi]$ bo'lganda $\frac{t}{2} \in [0, \pi]$, bu oraliqda $\sin\frac{t}{2} \ge 0$:
   $$dl = \sqrt{4a^2 \sin^2\frac{t}{2}} \, dt = 2a \sin\frac{t}{2} \, dt$$
4. a) Yoy uzunligini integrallaymiz:
   $$L = \int_0^{2\pi} 2a \sin\frac{t}{2} \, dt = 2a \cdot \left[ -2\cos\frac{t}{2} \right]_0^{2\pi} = -4a (\cos\pi - \cos 0) = -4a(-1 - 1) = 8a$$
5. b) $Ox$ o'qi atrofidagi aylanma sirt yuzini hisoblaymiz:
   $$Q_x = 2\pi \int_0^{2\pi} y(t) \cdot dl = 2\pi \int_0^{2\pi} a(1 - \cos t) \cdot \left(2a \sin\frac{t}{2}\right) dt$$
   Biz bilamizki, $1 - \cos t = 2\sin^2\frac{t}{2}$. Demak:
   $$Q_x = 2\pi \int_0^{2\pi} a \left(2\sin^2\frac{t}{2}\right) \left(2a \sin\frac{t}{2}\right) dt = 8\pi a^2 \int_0^{2\pi} \sin^3\frac{t}{2} \, dt$$
   O'zgaruvchini almashtiramiz: $u = \frac{t}{2} \implies dt = 2du$. Chegaralar $0$ dan $\pi$ gacha:
   $$Q_x = 16\pi a^2 \int_0^\pi \sin^3 u \, du = 16\pi a^2 \int_0^\pi (1 - \cos^2 u) \sin u \, du$$
   $\cos u = z, \; -\sin u du = dz$ desak:
   $$\int_0^\pi (1 - \cos^2 u) \sin u \, du = \left[ -\cos u + \frac{\cos^3 u}{3} \right]_0^\pi = \left(1 - \frac{1}{3}\right) - \left(-1 + \frac{1}{3}\right) = \frac{2}{3} + \frac{2}{3} = \frac{4}{3}$$
   Demak:
   $$Q_x = 16\pi a^2 \cdot \frac{4}{3} = \frac{64}{3}\pi a^2$$

**Javob:** $L = 8a$, $\quad Q_x = \frac{64}{3}\pi a^2$.

---

### 3-Misol: Qutb koordinatalarida kardioida yoy uzunligi
Quyidagi kardioidaning to'liq yoy uzunligini toping:
$$\rho = a(1 + \cos\varphi) \quad (a > 0)$$

**Yechish:**
1. Qutb burchagi $\varphi \in [-\pi, \pi]$ (yoki $[0, 2\pi]$) oralig'ida to'liq kardioidani chizadi. Kardioida qutb o'qiga nisbatan simmetrik bo'lgani sababli, uning yuqori qismini ($\varphi \in [0, \pi]$) hisoblab, natijani $2$ ga ko'paytiramiz:
   $$L = 2 \int_0^\pi \sqrt{\rho^2 + (\rho')^2} \, d\varphi$$
2. Hosilani hisoblaymiz:
   $$\rho'(\varphi) = -a\sin\varphi$$
3. Ildiz ostidagi ifoda:
   $$\rho^2 + (\rho')^2 = a^2 (1 + \cos\varphi)^2 + a^2 \sin^2\varphi = a^2 (1 + 2\cos\varphi + \cos^2\varphi + \sin^2\varphi)$$
   $$= a^2 (2 + 2\cos\varphi) = 2a^2 (1 + \cos\varphi) = 2a^2 \cdot 2\cos^2\frac{\varphi}{2} = 4a^2 \cos^2\frac{\varphi}{2}$$
4. Ildizdan chiqaramiz: $\varphi \in [0, \pi] \implies \frac{\varphi}{2} \in \left[0, \frac{\pi}{2}\right]$, bu oraliqda $\cos\frac{\varphi}{2} \ge 0$:
   $$\sqrt{\rho^2 + (\rho')^2} = 2a\cos\frac{\varphi}{2}$$
5. Integralni hisoblaymiz:
   $$L = 2 \int_0^\pi 2a \cos\frac{\varphi}{2} \, d\varphi = 4a \cdot \left[ 2\sin\frac{\varphi}{2} \right]_0^\pi = 8a (\sin\frac{\pi}{2} - \sin 0) = 8a(1 - 0) = 8a$$

**Javob:** $L = 8a$.

---

### 4-Misol: Fizik masala — Suyuqlikni rezervuardan so'rib chiqarish ishi
Asosining radiusi $R = 3\text{ m}$, chuqurligi (balandligi) $H = 4\text{ m}$ bo'lgan to'ntarilgan aylanma konus shaklidagi hovuz suv bilan to'ldirilgan. Suvning zichligi $\rho = 1000\text{ kg/m}^3$, erkin tushish tezlanishi $g \approx 9.8\text{ m/s}^2$. Hovuzdagi barcha suvni uning yuqori chetidan so'rib chiqarish uchun qancha mexanik ish sarflanadi?

**Yechish:**
1. Koordinata o'qini yo'naltiramiz: $Ox$ o'qini konus uchidan (tubidan) yuqoriga qarab yo'naltiramiz, $x = 0$ — konus uchi, $x = H = 4$ — konusning yuqori asosi.
2. Tubidan $x$ balandlikdagi kesim radiusi $r(x)$ ni uchburchaklar o'xshashligidan topamiz:
   $$\frac{r(x)}{x} = \frac{R}{H} \implies r(x) = \frac{R}{H}x = \frac{3}{4}x$$
3. Ushbu gorizontal kesimning yuzi:
   $$S(x) = \pi [r(x)]^2 = \pi \left(\frac{3}{4}x\right)^2 = \frac{9\pi}{16}x^2$$
4. Qalinligi $dx$ bo'lgan elementar suv qatlamining hajmi $dV = S(x) dx$ va massasi $dm = \rho \, dV = \rho \frac{9\pi}{16}x^2 dx$.
5. Bu qatlam konus tubidan $x$ balandlikda joylashgan, demak uni idishning yuqori chetiga ($H = 4\text{ m}$) chiqarish uchun ko'tarish masofasi $h = H - x = 4 - x$ metr bo'ladi!
6. Ushbu qatlamni ko'tarish uchun bajarilgan elementar ish:
   $$dA = g (H - x) dm = \rho g \frac{9\pi}{16} (4 - x) x^2 dx = \rho g \frac{9\pi}{16} (4x^2 - x^3) dx$$
7. To'liq ish barcha qatlamlar bo'yicha $x = 0$ dan $x = 4$ gacha integrallanadi:
   $$A = \frac{9\pi \rho g}{16} \int_0^4 (4x^2 - x^3) \, dx = \frac{9\pi \rho g}{16} \left[ \frac{4x^3}{3} - \frac{x^4}{4} \right]_0^4$$
   Qavs ichidagi qiymat:
   $$\frac{4 \cdot 64}{3} - \frac{256}{4} = \frac{256}{3} - 64 = \frac{256 - 192}{3} = \frac{64}{3}$$
   Demak:
   $$A = \frac{9\pi \rho g}{16} \cdot \frac{64}{3} = 12\pi \rho g$$
8. Sonli qiymatni qo'yamiz:
   $$A = 12 \cdot \pi \cdot 1000 \cdot 9.8 \approx 117600 \pi \approx 369451\text{ J} \approx 369.5\text{ kJ}$$

**Javob:** $A = 12\pi \rho g \approx 369.5\text{ kJ}$.

---

## ⚠️ Talabalar Eng Ko'p Yo'l Qo'yadigan Xatolar va Tuzoqlar

1. **Modulni unutish va $\sqrt{u^2} = u$ deb xato ochish:**
   Trigonometrik parametrik integrallarda ildiz ostida ko'pincha $\sqrt{\sin^2(t/2)}$ yoki $\sqrt{\cos^2 \varphi}$ hosil bo'ladi. Talabalar modul qo'ymasdan integrallaganda, integral nollashib qolishi yoki manfiy yoy uzunligi chiqishi mumkin. Har doim tekshiring: berilgan oraliqda funksiya ishorasi qanday? Agar ishora o'zgarsa, integral oraliqlarga ajratilishi shart!

2. **Aylanma sirt yuzida yoy differensiali $dl$ o'rniga $dx$ yozish:**
   Eng qo'pol xatolardan biri: $Q_x = 2\pi \int y \, dx$ deb yozish. Ushbu integral mutlaqo boshqa fizik ma'noga ega (u aylanma jism hajmi yoki statik momentga bog'liq). Sirt yuzida albatta $dl = \sqrt{1 + (y')^2} dx$ qatnashishi shart!

3. **Og'irlik markazi formulasidagi $\frac{1}{2}$ koeffitsientini tashlab ketish:**
   Tekis shaklning $Ox$ o'qiga nisbatan statik momenti $M_x = \frac{1}{2}\int_a^b y^2 dx$ ga teng. Ko'pchilik $\frac{1}{2}$ ni yozishni unutadi va $y_c$ koordinatasi kutilganidan 2 marta yuqorida (hatto jism chegarasidan tashqarida) chiqib qoladi.

4. **Suyuqlikni haydashda ko'chish masofasini adashtirish:**
   Elementar ishni hisoblashda qatlamning koordinatasi $x$ bilan uning ko'tarilish masofasi $H - x$ ni adashtirib qo'yishadi. Agar $x$ tubidan hisoblangan bo'lsa, chiqish balandligigacha masofa $H - x$ bo'ladi. Agar koordinata tepadan pastga yo'naltirilsa, masofa $x$, lekin qatlam radiusi boshqacha ifodalanadi.

---

## 🎯 Mustaqil Yechish Uchun Amaliy Mashqlar va Yechimlar

### 1-Mashq
Yarim kubik parabolaning $y^2 = x^3$ egri chizig'ining koordinatalar boshidan $x = 4$ nuqtagacha bo'lgan yoy uzunligini hisoblang ($y \ge 0$).

<details>
<summary>👉 Bosqichma-bosqich yechimni ko'rish</summary>

1. Funksiyani oshkor ko'rinishga keltiramiz: $y = x^{3/2}$.
2. Hosilasini olamiz: $y' = \frac{3}{2}x^{1/2}$.
3. Differensial yoy kvadratini hisoblaymiz:
   $$1 + (y')^2 = 1 + \left(\frac{3}{2}x^{1/2}\right)^2 = 1 + \frac{9}{4}x$$
4. Yoy uzunligi integrali:
   $$L = \int_0^4 \sqrt{1 + \frac{9}{4}x} \, dx$$
5. O'zgaruvchini almashtiramiz: $u = 1 + \frac{9}{4}x \implies du = \frac{9}{4}dx \implies dx = \frac{4}{9}du$.
   Chegaralar: $x = 0 \implies u = 1$; $x = 4 \implies u = 1 + 9 = 10$.
6. Hisoblash:
   $$L = \frac{4}{9} \int_1^{10} u^{1/2} \, du = \frac{4}{9} \left[ \frac{2}{3}u^{3/2} \right]_1^{10} = \frac{8}{27} (10\sqrt{10} - 1)$$
**Javob:** $L = \frac{8}{27}(10\sqrt{10} - 1) \approx 9.073$.
</details>

---

### 2-Mashq
$y = \frac{x^2}{2}$ parabolaning $x \in [0, 1]$ qismining $Oy$ o'qi atrofida aylanishidan hosil bo'lgan sirt yuzini toping.

<details>
<summary>👉 Bosqichma-bosqich yechimni ko'rish</summary>

1. $Oy$ o'qi atrofida aylanish formulasi:
   $$Q_y = 2\pi \int_a^b x \sqrt{1 + [f'(x)]^2} \, dx$$
2. Hosila: $y' = x \implies \sqrt{1 + (y')^2} = \sqrt{1 + x^2}$.
3. Integralni tuzamiz:
   $$Q_y = 2\pi \int_0^1 x \sqrt{1 + x^2} \, dx$$
4. Differensial ostiga kiritamiz: $x \, dx = \frac{1}{2} d(1 + x^2)$:
   $$Q_y = 2\pi \cdot \frac{1}{2} \int_0^1 (1 + x^2)^{1/2} \, d(1 + x^2) = \pi \left[ \frac{2}{3}(1 + x^2)^{3/2} \right]_0^1$$
5. Chegaralarni qo'yamiz:
   $$Q_y = \frac{2\pi}{3} (2^{3/2} - 1^{3/2}) = \frac{2\pi}{3} (2\sqrt{2} - 1)$$
**Javob:** $Q_y = \frac{2\pi}{3}(2\sqrt{2} - 1)$.
</details>

---

### 3-Mashq
Elastik prujinani $2\text{ sm}$ ($0.02\text{ m}$) cho'zish uchun $10\text{ N}$ kuch talab qilinadi. Ushbu prujinani muvozanat holatidan $6\text{ sm}$ ($0.06\text{ m}$) ga cho'zishda bajarilgan ishni aniqlang.

<details>
<summary>👉 Bosqichma-bosqich yechimni ko'rish</summary>

1. Guk qonuniga ko'ra $F = kx$.
2. Bikrlik koeffitsientini topamiz:
   $$10 = k \cdot 0.02 \implies k = \frac{10}{0.02} = 500\text{ N/m}$$
3. Cho'zishda bajarilgan ish integrali:
   $$A = \int_0^{x_1} kx \, dx = \left[ \frac{kx^2}{2} \right]_0^{0.06}$$
4. Qiymatlarni qo'yamiz:
   $$A = \frac{500 \cdot (0.06)^2}{2} = 250 \cdot 0.0036 = 0.9\text{ J}$$
**Javob:** $A = 0.9\text{ J}$.
</details>

---

## 💡 Imtihon Layfhaklari va Tezkor Maslahatlar

- **Gyuldin (Guldinus) teoremalari orqali tekshirish:**
  1. *Gyuldinning 1-teoremasi:* Yassi egri chiziqning uni kesib o'tmaydigan o'q atrofida aylanishidan hosil bo'lgan sirt yuzi yoy uzunligi $L$ bilan uning og'irlik markazi chizgan aylana uzunligi ko'paytmasiga teng:
     $$Q = 2\pi y_c \cdot L$$
  2. *Gyuldinning 2-teoremasi:* Aylanma jism hajmi tekis soha yuzi $S$ bilan uning og'irlik markazi chizgan aylana uzunligi ko'paytmasiga teng:
     $$V = 2\pi y_c \cdot S$$
  Bu teoremalar imtihonda murakkab sirt integrali to'g'ri hisoblanganini bir necha soniyada tekshirish imkonini beradi!

- **To'liq kvadratga keluvchi "qulay" funksiyalar:**
  Professorlar imtihonda ildiz ostidan oson qutilish uchun ko'pincha quyidagi maxsus funksiyalarni berishadi:
  - $y = \operatorname{ch} x \implies 1 + (y')^2 = 1 + \operatorname{sh}^2 x = \operatorname{ch}^2 x$;
  - $y = \ln(\cos x) \implies 1 + (y')^2 = 1 + \operatorname{tg}^2 x = \sec^2 x$;
  - $y = \frac{x^2}{4} - \frac{1}{2}\ln x \implies 1 + (y')^2 = \left(\frac{x}{2} + \frac{1}{2x}\right)^2$;
  - $x = a\cos^3 t, \; y = a\sin^3 t$ (astroida) $\implies (x')^2 + (y')^2 = 9a^2 \sin^2 t \cos^2 t$.
  Bunday ifodani ko'rganingizda darhol to'liq kvadrat ajralishini biling!
