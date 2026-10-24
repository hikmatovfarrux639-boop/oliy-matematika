---
title: "Ikki o'zgaruvchili funksiyaning ikki karrali va takroriy limitlari hamda xususiy hosilali tenglamalar"
module: "kop-ozgaruvchili-funksiyalar"
order: 10
description: "Ikki karrali umumiy limit vs takroriy limitlar, nurlar dastasi (y = kx) va qutb koordinatalari, uzilish chiziqlari hamda funksiya berilgan xususiy hosilali differensial tenglamani qanoatlantirishini tekshirish."
duration: "32 daqiqa"
category: "Ko'p o'zgaruvchili funksiyalar"
difficulty: "Qiyin"
---

## Kirish: Ko'p o'lchovli fazoda limitlar olami

Bir o'zgaruvchili matematik analizda $x \to x_0$ intilishida argument to'g'ri chiziq bo'ylab harakatlanadi va nuqtaga faqat ikkita tomondan: chapdan ($x \to x_0^-$) yoki o'ngdan ($x \to x_0^+$) yaqinlashish mumkin. Agar bu ikki bir tomonlama limit teng bo'lsa, limit mavjud deb hisoblanadi.

Biroq ikki o'zgaruvchili $z = f(x, y)$ funksiyalarda nuqta $M_0(x_0, y_0)$ ga tekislik bo'ylab **cheksiz ko'p yo'nalishlar** — to'g'ri chiziqlar, parabolalar, kubik egri chiziqlar yoki spirallar orqali yaqinlashishi mumkin! Aynan shu sababli ko'p o'zgaruvchili funksiyalar limiti tushunchasi o'ziga xos nozikliklarga va qiziqarli matematik paradokslarga boydir.

Ushbu darsda biz ikki karrali va takroriy limitlar, ularning o'zaro bog'liqligi, limitning yo'qligini isbotlash texnikasi, qutb koordinatalari usuli hamda oliy texnika o'quv yurtlarida eng ko'p beriladigan masalalardan biri — **funksiyaning xususiy hosilali differensial tenglamani qanoatlantirishini tekshirishni** o'rganamiz.

---

## 1. Ikki karrali (umumiy) limit ta'rifi va yo'nalishga bog'liqlik

Faraz qilaylik, $z = f(x, y)$ funksiya $M_0(x_0, y_0)$ nuqtaning biror atrofida aniqlangan bo'lsin ($M_0$ nuqtaning o'zida aniqlanmagan bo'lishi ham mumkin).

### Koshi bo'yicha ($\epsilon - \delta$ tilida) ta'rif:
Agar ixtiyoriy $\epsilon > 0$ soni uchun shunday $\delta > 0$ soni topilsaki, $0 < \sqrt{(x - x_0)^2 + (y - y_0)^2} < \delta$ tengsizlikni qanoatlantiruvchi barcha $(x, y)$ nuqtalarda:
$$
|f(x, y) - L| < \epsilon
$$
tengsizlik bajarilsa, u holda $L$ soni $f(x, y)$ funksiyaning $(x_0, y_0)$ nuqtadagi **ikki karrali (umumiy) limiti** deyiladi va quyidagicha belgilanadi:
$$
\lim_{\substack{x \to x_0 \\ y \to y_0}} f(x, y) = L \quad \text{yoki} \quad \lim_{(x, y) \to (x_0, y_0)} f(x, y) = L
$$

> [!IMPORTANT]
> **Eng muhim tamoyil:** Agar limit mavjud bo'lsa, argument $(x, y)$ nuqta $(x_0, y_0)$ ga **qanday trayektoriya (qaysi egri chiziq) bo'yicha intilishidan qat'i nazar**, barcha yo'nalishlarda natija aynan bitta $L$ soniga teng bo'lishi shart!
> Agar kamida ikkita turli yo'nalish bo'yicha turlicha natija chiqsa, umumiy limit **mavjud emas**.

---

## 2. Limit mavjud emasligini isbotlash: $y = kx$ nurlar dastasi va parabolalar

Agar berilgan $(0, 0)$ nuqtada limitning mavjudligiga shubha bo'lsa, eng tezkor usul — koordinatalar boshidan o'tuvchi to'g'ri chiziqlar oilasini ($y = kx$) sinab ko'rishdir.

### 1-Misol: Burchak koeffitsiyenti $k$ ga bog'liqlik
Hisoblang yoki limit mavjud emasligini isbotlang:
$$
L = \lim_{\substack{x \to 0 \\ y \to 0}} \frac{xy}{x^2 + y^2}
$$

**Yechish:**
1. $(0, 0)$ nuqtaga $y = kx$ to'g'ri chiziqlar dastasi bo'yicha intilamiz ($k \in \mathbb{R}$ — ixtiyoriy burchak koeffitsiyenti).
2. $y$ o'rniga $kx$ qo'yamiz va $x \to 0$ dagi limitni tekshiramiz:
$$
\lim_{x \to 0} \frac{x \cdot (kx)}{x^2 + (kx)^2} = \lim_{x \to 0} \frac{k x^2}{x^2(1 + k^2)} = \frac{k}{1 + k^2}
$$
3. Natijaga e'tibor bering: limit $k$ burchak koeffitsiyentiga bevosita bog'liq bo'lib qoldi!
   - Agar $k = 1$ ($y = x$ chizig'i bo'yicha) yaqinlashsak: $L = \frac{1}{1 + 1} = \frac{1}{2}$;
   - Agar $k = -1$ ($y = -x$ chizig'i bo'yicha) yaqinlashsak: $L = \frac{-1}{1 + 1} = -\frac{1}{2}$;
   - Agar $k = 0$ ($y = 0$, $Ox$ o'qi bo'yicha) yaqinlashsak: $L = 0$.
4. **Xulosa:** Har xil yo'nalishlarda har xil natija chiqqani uchun, umumiy ikki karrali limit **mavjud emas!**

---

### Klassik Tuzoq: To'g'ri chiziqlar bo'yicha 0, lekin parabola bo'yicha 1/2!

Ko'pgina talabalar $y = kx$ bo'yicha limit $k$ ga bog'liq bo'lmay $0$ chiqsa, darhol "limit 0 ga teng" deb xulosa qilishadi. Bu jiddiy xatodir!

Hisoblang:
$$
L = \lim_{\substack{x \to 0 \\ y \to 0}} \frac{x y^2}{x^2 + y^4}
$$

1. Barcha to'g'ri chiziqlar ($y = kx$) bo'yicha tekshiramiz:
$$
\lim_{x \to 0} \frac{x (kx)^2}{x^2 + (kx)^4} = \lim_{x \to 0} \frac{k^2 x^3}{x^2(1 + k^4 x^2)} = \lim_{x \to 0} \frac{k^2 x}{1 + k^4 x^2} = \frac{0}{1} = 0
$$
Ko'rinib turibdiki, qaysi to'g'ri chiziq bo'yicha bormang, limit doimo $0$ chiqadi.

2. Endi esa $(0, 0)$ ga parabola bo'yicha intilamiz: $x = k y^2$. Xususan, $x = y^2$ parabolasi bo'yicha:
$$
\lim_{y \to 0} \frac{(y^2) \cdot y^2}{(y^2)^2 + y^4} = \lim_{y \to 0} \frac{y^4}{y^4 + y^4} = \lim_{y \to 0} \frac{y^4}{2y^4} = \mathbf{\frac{1}{2}}
$$
3. **Kutilmagan natija:** To'g'ri chiziqlar bo'yicha limit $0$, parabola bo'yicha esa $\frac{1}{2}$!
Demak, umumiy limit **mavjud emas!**

> [!TIP]
> **Darajalar mutanosibligi qoidasi:** Kasr maxrajida $x^n + y^m$ bo'lsa, tekshirish trayektoriyasi sifatida $x = c \cdot y^{m/n}$ ko'rinishidagi egri chiziqni tanlash kerak. Yuqoridagi misolda $x^2 + y^4$ bo'lgani uchun $x \sim y^2$ trayektoriyasi tanlandi.

---

## 3. Qutb koordinatalariga o'tish usuli

Limit mavjud emasligini ko'rsatish uchun bitta qarama-qarshi trayektoriya yetarli. Ammo limit **haqiqatan ham mavjudligini qat'iy isbotlash** uchun nima qilish kerak? Buning eng mukammal usuli — **qutb koordinatalariga** o'tishdir:
$$
x = r \cos \varphi, \quad y = r \sin \varphi \qquad (r \to 0, \quad \varphi \in [0; 2\pi))
$$

Agar $r \to 0$ da ifoda $\varphi$ burchagiga bog'liq bo'lmagan $L$ soniga intilsa va uning farqi burchakdan qat'i nazar nolga intiluvchi funksiya bilan chegaralansa ($|f - L| \le g(r) \to 0$), limit mavjud bo'ladi.

### 2-Misol: Limit mavjudligini isbotlash
Hisoblang:
$$
L = \lim_{\substack{x \to 0 \\ y \to 0}} \frac{x^3 + y^3}{x^2 + y^2}
$$

**Yechish:**
Qutb koordinatalariga o'tamiz:
$$
x^2 + y^2 = r^2, \quad x^3 + y^3 = r^3 \cos^3\varphi + r^3 \sin^3\varphi = r^3 (\cos^3\varphi + \sin^3\varphi)
$$
Kasrga qo'yamiz:
$$
L = \lim_{r \to 0} \frac{r^3 (\cos^3\varphi + \sin^3\varphi)}{r^2} = \lim_{r \to 0} \left[ r (\cos^3\varphi + \sin^3\varphi) \right]
$$
Burchakli qismni baholaymiz:
$$
|\cos^3\varphi + \sin^3\varphi| \le |\cos^3\varphi| + |\sin^3\varphi| \le 1 + 1 = 2
$$
Demak:
$$
|r(\cos^3\varphi + \sin^3\varphi)| \le 2r \xrightarrow[r \to 0]{} 0
$$
Chegaralangan miqdorning cheksiz kichik miqdorga ko'paytmasi cheksiz kichik bo'ladi.
**Xulosa:** Limit haqiqatan ham mavjud va **$L = 0$**.

---

## 4. Takroriy (ketma-ket) limitlar va ularning umumiy limit bilan munosabati

Ikki karrali limitdan tashqari, argumentlar bo'yicha ketma-ket olinadigan **takroriy limitlar** tushunchasi mavjud:
$$
L_1 = \lim_{x \to x_0} \left[ \lim_{y \to y_0} f(x, y) \right], \qquad L_2 = \lim_{y \to y_0} \left[ \lim_{x \to x_0} f(x, y) \right]
$$

### Umumiy limit va takroriy limitlar o'rtasidagi 4 ta qat'iy qoida:

1. **Tengsizlik qoidasi:** Agar ikkala takroriy limit mavjud bo'lib, ular o'zaro teng bo'lmasa ($L_1 \neq L_2$), u holda **umumiy ikki karrali limit aniq mavjud emas!**
2. **Bir xillik kafolat bermaydi:** Agar $L_1 = L_2$ bo'lsa, bu umumiy limit mavjudligini **anglatmaydi!**
   *Masalan, $f(x, y) = \frac{xy}{x^2 + y^2}$ funksiyada:*
   $$
   L_1 = \lim_{x \to 0} \left[\lim_{y \to 0} \frac{xy}{x^2 + y^2}\right] = \lim_{x \to 0} [0] = 0
   $$
   $$
   L_2 = \lim_{y \to 0} \left[\lim_{x \to 0} \frac{xy}{x^2 + y^2}\right] = \lim_{y \to 0} [0] = 0
   $$
   Ikkalasi ham 0 ga teng, ammo 2-bo'limda ko'rganimizdek, umumiy limit umuman mavjud emas!
3. **Umumiy limit mavjud bo'lsa:** Agar umumiy ikki karrali limit mavjud bo'lsa ($L$) va takroriy limitlar ham mavjud bo'lsa, ular albatta umumiy limitga teng bo'ladi: $L_1 = L_2 = L$.
4. **Ichki limitlar mavjud bo'lmasligi mumkin:** Umumiy limit mavjud bo'lgani holda takroriy limitlar mavjud bo'lmasligi ham mumkin (masalan, $f(x, y) = x \sin(1/y)$ da $(0, 0)$ nuqtada umumiy limit 0, ammo $\lim_{y \to 0} \sin(1/y)$ mavjud emas).

---

## 5. Ikki o'zgaruvchili funksiyaning uzluksizligi va uzilish chiziqlari

### Uzluksizlik ta'rifi:
Agar $z = f(x, y)$ funksiya uchun quyidagi shart bajarilsa:
$$
\lim_{\substack{x \to x_0 \\ y \to y_0}} f(x, y) = f(x_0, y_0)
$$
u holda funksiya $(x_0, y_0)$ nuqtada **uzluksiz** deyiladi.

### Uzilish chiziqlari nima?
Bir o'zgaruvchili funksiyalarda ($y = f(x)$) uzilishlar odatda alohida nuqtalarda ($x = 2, x = -1$) sodir bo'ladi.
Ikki o'zgaruvchili funksiyalarda esa uzilish nuqtalari tekislikda butun boshli **uzilish chiziqlarini** tashkil qiladi:

| Funksiya | Maxraj nolga teng bo'ladigan shart | Uzilish chizig'ining geometrik shakli |
|---|---|---|
| $z = \frac{1}{x - y}$ | $y = x$ | To'g'ri chiziq |
| $z = \frac{1}{x^2 + y^2 - 4}$ | $x^2 + y^2 = 4$ | Radiusi $R = 2$ bo'lgan aylana |
| $z = \frac{1}{y - x^2}$ | $y = x^2$ | Parabola |
| $z = \frac{1}{x^2 - y^2}$ | $y = \pm x$ | Ikkita kesishuvchi to'g'ri chiziq |

---

## 6. Funksiya xususiy hosilali differensial tenglamani qanoatlantirishini tekshirish

Universitet imtihonlarida va amaliy topshiriqlarda eng ko'p uchraydigan masala turi: berilgan $z = f(x, y)$ funksiyaning xususiy hosilali differensial tenglamani ayniyatga aylantirishini isbotlashdir.

### Tekshirish algoritmi:
1. Tenglamada qatnashgan barcha tartibli xususiy hosilalarni ($\frac{\partial z}{\partial x}, \frac{\partial z}{\partial y}, \frac{\partial^2 z}{\partial x^2}, \frac{\partial^2 z}{\partial x \partial y}, \frac{\partial^2 z}{\partial y^2}$) ketma-ket hisoblaymiz.
2. Hosilalarni differensial tenglamaning chap tomoniga qo'yamiz.
3. Qavslarni ochib, o'xshash hadlarni ixchamlaymiz va tenglamaning o'ng tomoniga teng bo'lishini ko'rsatamiz.

---

### 3-Misol: Laplas tenglamasini qanoatlantirishini isbotlash
Isbotlang: $z = \ln \sqrt{x^2 + y^2}$ funksiyasi **Laplas tenglamasini** qanoatlantiradi:
$$
\frac{\partial^2 z}{\partial x^2} + \frac{\partial^2 z}{\partial y^2} = 0
$$

**Isbot:**
Avval logarifm xossasidan foydalanib funksiyani soddalashtiramiz:
$$
z = \ln(x^2 + y^2)^{1/2} = \frac{1}{2} \ln(x^2 + y^2)
$$

1. $x$ bo'yicha 1-tartibli xususiy hosila ($y$ o'zgarmas son deb qaraladi):
$$
\frac{\partial z}{\partial x} = \frac{1}{2} \cdot \frac{1}{x^2 + y^2} \cdot (x^2 + y^2)'_x = \frac{1}{2} \cdot \frac{2x}{x^2 + y^2} = \frac{x}{x^2 + y^2}
$$

2. $x$ bo'yicha 2-tartibli xususiy hosila (bo'linmaning hosilasi formulasi):
$$
\frac{\partial^2 z}{\partial x^2} = \frac{\partial}{\partial x}\left(\frac{x}{x^2 + y^2}\right) = \frac{(x)'_x(x^2 + y^2) - x \cdot (x^2 + y^2)'_x}{(x^2 + y^2)^2}
$$
$$
= \frac{1 \cdot (x^2 + y^2) - x \cdot (2x)}{(x^2 + y^2)^2} = \frac{x^2 + y^2 - 2x^2}{(x^2 + y^2)^2} = \frac{y^2 - x^2}{(x^2 + y^2)^2}
$$

3. Simmetriyaga ko'ra, $y$ bo'yicha 2-tartibli xususiy hosila:
$$
\frac{\partial z}{\partial y} = \frac{y}{x^2 + y^2} \implies \frac{\partial^2 z}{\partial y^2} = \frac{x^2 - y^2}{(x^2 + y^2)^2}
$$

4. Tenglamaning chap tomoniga qo'yamiz:
$$
\frac{\partial^2 z}{\partial x^2} + \frac{\partial^2 z}{\partial y^2} = \frac{y^2 - x^2}{(x^2 + y^2)^2} + \frac{x^2 - y^2}{(x^2 + y^2)^2} = \frac{(y^2 - x^2) + (x^2 - y^2)}{(x^2 + y^2)^2} = \frac{0}{(x^2 + y^2)^2} = \mathbf{0}
$$
Ayniyat isbotlandi! ($0 = 0$). Demak, berilgan funksiya haqiqatan ham Laplas tenglamasining yechimi (ya'ni garmonik funksiya) hisoblanadi.

---

### 4-Misol: Ixtiyoriy differensiallanuvchi funksiya qatnashgan tenglama
Isbotlang: $z = y \cdot f(x^2 - y^2)$ ko'rinishidagi ixtiyoriy differensiallanuvchi $f$ funksiya quyidagi tenglamani qanoatlantiradi:
$$
\frac{1}{x} \frac{\partial z}{\partial x} + \frac{1}{y} \frac{\partial z}{\partial y} = \frac{z}{y^2}
$$

**Isbot:**
$u = x^2 - y^2$ deb belgilaymiz. U holda $z = y \cdot f(u)$.

1. $x$ bo'yicha xususiy hosila:
$$
\frac{\partial z}{\partial x} = y \cdot f'(u) \cdot \frac{\partial u}{\partial x} = y \cdot f'(u) \cdot (2x) = 2xy f'(u)
$$
U holda:
$$
\frac{1}{x} \frac{\partial z}{\partial x} = \frac{1}{x} \cdot 2xy f'(u) = 2y f'(u)
$$

2. $y$ bo'yicha xususiy hosila (ko'paytmaning hosilasi):
$$
\frac{\partial z}{\partial y} = (y)'_y \cdot f(u) + y \cdot \frac{\partial}{\partial y}[f(u)] = 1 \cdot f(u) + y \cdot f'(u) \cdot (-2y) = f(u) - 2y^2 f'(u)
$$
U holda:
$$
\frac{1}{y} \frac{\partial z}{\partial y} = \frac{f(u) - 2y^2 f'(u)}{y} = \frac{f(u)}{y} - 2y f'(u)
$$

3. Ikkala ifodani qo'shamiz:
$$
\frac{1}{x} \frac{\partial z}{\partial x} + \frac{1}{y} \frac{\partial z}{\partial y} = 2y f'(u) + \left(\frac{f(u)}{y} - 2y f'(u)\right) = \frac{f(u)}{y}
$$
4. Tenglamaning o'ng tomoniga qaraymiz:
$$
\frac{z}{y^2} = \frac{y \cdot f(u)}{y^2} = \frac{f(u)}{y}
$$
Chap tomon o'ng tomonga aynan teng bo'ldi! Isbot yakunlandi.

---

## 7. Namunaviy misollar va mustaqil mashqlar

### Namunaviy Misol: Trigonometrik ikki karrali limit
Hisoblang:
$$
L = \lim_{\substack{x \to 0 \\ y \to 0}} \frac{\sin(xy)}{x^2 + y^2}
$$

**Yechish:**
1. $y = kx$ nurlar dastasi bo'yicha intilamiz. $x \to 0$ da $xy = kx^2 \to 0$, demak $\sin(kx^2) \sim kx^2$.
2. Limit:
$$
\lim_{x \to 0} \frac{kx^2}{x^2 + k^2 x^2} = \lim_{x \to 0} \frac{k}{1 + k^2} = \frac{k}{1 + k^2}
$$
Limit $k$ ga bog'liq bo'lgani sababli, umumiy limit **mavjud emas!**

---

### Mustaqil yechish uchun mashqlar

1. **Mashq:**
Quyidagi limitni hisoblang yoki uning mavjud emasligini isbotlang:
$$
\lim_{\substack{x \to 0 \\ y \to 0}} \frac{x^2 - y^2}{x^2 + y^2}
$$
*Ko'rsatma:* $y = kx$ bo'yicha tekshiring.
*Javob:* Limit mavjud emas (chunki $L = \frac{1 - k^2}{1 + k^2}$, $k$ ga bog'liq).

2. **Mashq:**
Qutb koordinatalaridan foydalanib limitni hisoblang:
$$
\lim_{\substack{x \to 0 \\ y \to 0}} \frac{x^2 y^2}{x^2 + y^2}
$$
*Ko'rsatma:* $x = r \cos\varphi, y = r \sin\varphi$ almashtirishini bajaring.
*Javob:* $\mathbf{0}$

3. **Mashq (Differensial tenglama):**
$z = e^{x/y}$ funksiyasi quyidagi tenglamani qanoatlantirishini tekshiring:
$$
x \frac{\partial z}{\partial x} + y \frac{\partial z}{\partial y} = 0
$$
*Ko'rsatma:* $\frac{\partial z}{\partial x} = \frac{1}{y} e^{x/y}$ va $\frac{\partial z}{\partial y} = -\frac{x}{y^2} e^{x/y}$.
*Javob:* Ayniyat bajariladi ($0 = 0$).

4. **Mashq (To'lqin tenglamasi):**
$u(x, t) = \sin(x - at) + \cos(x + at)$ funksiyasi to'lqin tenglamasi $\frac{\partial^2 u}{\partial t^2} = a^2 \frac{\partial^2 u}{\partial x^2}$ ni qanoatlantirishini isbotlang.
*Javob:* Ikkala tomon ham $-a^2[\sin(x-at) + \cos(x+at)]$ ga teng bo'lib, ayniyat o'rinli.
