---
title: "Urinma va normal tenglamalari, egri chiziqlar orasidagi burchak va taqribiy hisoblash"
module: "hosila"
order: 9
description: "Berilgan nuqtada funksiya grafigiga urinma va normal chiziq tenglamalarini tuzish, ikki egri chiziq kesishish burchagi hamda differensial yordamida taqribiy hisoblash."
---

Hosilaning geometrik ma'nosi va funksiya differensialining chiziqli xossalari matematik analizning geometriya hamda hisoblash matematikasidagi eng muhim tatbiqlariga asos bo'ladi. Ushbu darsda egri chiziqqa o'tkazilgan urinma va normal tenglamalarini tuzishni, ikki egri chiziq kesishish burchagini topishni hamda differensial yordamida murakkab ifodalarni taqribiy hisoblashni o'rganamiz.

---

## 1. Egri chiziqning urinma va normal tenglamalari

Aytaylik, $y = f(x)$ funksiya $x_0$ nuqtada chekli $f'(x_0)$ hosilaga ega bo'lsin. Hosilaning geometrik ma'nosiga ko'ra, $f'(x_0)$ soni funksiya grafigiga $M_0(x_0, y_0)$ ($y_0 = f(x_0)$) nuqtada o'tkazilgan urinma to'g'ri chiziqning burchak koeffitsiyentiga teng:

$$k_{\text{urinma}} = \tan \alpha = f'(x_0)$$

Analitik geometriyadan ma'lumki, berilgan $M_0(x_0, y_0)$ nuqtadan o'tuvchi va burchak koeffitsiyenti $k$ ga teng bo'lgan to'g'ri chiziq tenglamasi $y - y_0 = k(x - x_0)$ ko'rinishga ega.

> [!IMPORTANT]
> **Urinma tenglamasi:** $y = f(x)$ funksiya grafigiga $M_0(x_0, f(x_0))$ nuqtada o'tkazilgan **urinma to'g'ri chiziq tenglamasi**:
> $$y - f(x_0) = f'(x_0)(x - x_0)$$

### Normal to'g'ri chiziq tenglamasi
> [!NOTE]
> **Ta'rif:** Urinish nuqtasi $M_0(x_0, f(x_0))$ dan o'tuvchi va shu nuqtada o'tkazilgan urinmaga **perpendikulyar** bo'lgan to'g'ri chiziq egri chiziqning **normali** deyiladi.

Ikki to'g'ri chiziqning o'zaro perpendikulyarlik shartiga ($k_1 \cdot k_2 = -1$) binoan, agar $f'(x_0) \neq 0$ bo'lsa, normalning burchak koeffitsiyenti:

$$k_{\text{normal}} = -\frac{1}{k_{\text{urinma}}} = -\frac{1}{f'(x_0)}$$

> [!IMPORTANT]
> **Normal tenglamasi:** $y = f(x)$ funksiya grafigiga $M_0(x_0, f(x_0))$ nuqtada o'tkazilgan **normal to'g'ri chiziq tenglamasi** ($f'(x_0) \neq 0$ da):
> $$y - f(x_0) = -\frac{1}{f'(x_0)}(x - x_0)$$

### Xususiy hollar:
1. Agar **$f'(x_0) = 0$** bo'lsa (statsionar nuqta):
   - Urinma Ox o'qiga parallel (gorizontal): **$y = f(x_0)$**;
   - Normal Oy o'qiga parallel (vertikal): **$x = x_0$**.
2. Agar **$\lim_{x \to x_0} f'(x) = \pm\infty$** bo'lsa:
   - Urinma vertikal: **$x = x_0$**;
   - Normal gorizontal: **$y = f(x_0)$**.

---

## 2. Ikki egri chiziq orasidagi burchak

Faraz qilaylik, $y = f_1(x)$ va $y = f_2(x)$ egri chiziqlar biror $M_0(x_0, y_0)$ nuqtada kesishsin (ya'ni $f_1(x_0) = f_2(x_0) = y_0$).

> [!NOTE]
> **Ta'rif:** Kesishuvchi ikki egri chiziq orasidagi $\varphi$ burchak deb, ularning kesishish nuqtasidan har bir egri chiziqqa o'tkazilgan **urinmalar orasidagi o'tkir burchakka** aytiladi.

Urinmalarning burchak koeffitsiyentlarini $k_1 = f_1'(x_0)$ va $k_2 = f_2'(x_0)$ deb belgilasak, ikki to'g'ri chiziq orasidagi burchak tangensi formulasiga ko'ra:

$$\tan \varphi = \left| \frac{k_2 - k_1}{1 + k_1 k_2} \right| = \left| \frac{f_2'(x_0) - f_1'(x_0)}{1 + f_1'(x_0) f_2'(x_0)} \right|$$

### Maxsus hollar:
- **Urinish sharti:** Agar $k_1 = k_2$ bo'lsa, $\tan \varphi = 0 \implies \varphi = 0$. Egri chiziqlar $M_0$ nuqtada bir-biriga **urinadi** (umumiy urinmaga ega).
- **Ortogonallik (perpendikulyar kesishish) sharti:** Agar $1 + k_1 k_2 = 0$, ya'ni **$f_1'(x_0) \cdot f_2'(x_0) = -1$** bo'lsa, u holda $\varphi = \frac{\pi}{2} = 90^\circ$ bo'lib, egri chiziqlar $M_0$ nuqtada **ortogonal kesishadi** deyiladi.

---

## 3. Differensial yordamida taqribiy hisoblash

Funksiya orttirmasi $\Delta y = f(x_0 + \Delta x) - f(x_0)$ va funksiya differensiali $dy = f'(x_0)\Delta x$ orasidagi bog'lanishni eslaylik:
$$\Delta y = dy + o(\Delta x)$$
Agar $|\Delta x|$ yetarlicha kichik son bo'lsa, $\Delta y \approx dy$ taqribiy tenglik o'rinli bo'ladi:
$$f(x_0 + \Delta x) - f(x_0) \approx f'(x_0)\Delta x$$

> [!IMPORTANT]
> **Asosiy taqribiy hisoblash formulasi:** $|\Delta x|$ kichik bo'lganda:
> $$f(x_0 + \Delta x) \approx f(x_0) + f'(x_0) \cdot \Delta x$$
> *Geometrik ma'nosi:* $x_0$ nuqtaning kichik atrofida funksiya grafigi o'rniga shu nuqtadan o'tkazilgan urinma to'g'ri chiziq olinadi (**chiziqlashtirish / linearizatsiya**).

### Eng ko'p qo'llaniladigan xususiy taqribiy formulalar ($x_0 = 0$, $|\Delta x| = |x| \ll 1$ da):

| Funksiya $f(x)$ | $f(0)$ | $f'(0)$ | $|\Delta x| = |x| \ll 1$ dagi taqribiy formula |
| :--- | :---: | :---: | :--- |
| $(1 + x)^\alpha$ | $1$ | $\alpha$ | $(1 + x)^\alpha \approx 1 + \alpha x$ |
| $\sqrt[n]{1 + x}$ | $1$ | $\frac{1}{n}$ | $\sqrt[n]{1 + x} \approx 1 + \frac{x}{n}$ |
| $e^x$ | $1$ | $1$ | $e^x \approx 1 + x$ |
| $\ln(1 + x)$ | $0$ | $1$ | $\ln(1 + x) \approx x$ |
| $\sin x$ ($x$ radianda) | $0$ | $1$ | $\sin x \approx x$ |
| $\tan x$ ($x$ radianda) | $0$ | $1$ | $\tan x \approx x$ |
| $\arctan x$ | $0$ | $1$ | $\arctan x \approx x$ |

---

## 4. Namunaviy misollar yechimi

### 1-misol. Urinma va normal tenglamalarini tuzish
$f(x) = x^3 - 3x^2 + 4x - 1$ egri chiziqning abssissasi $x_0 = 2$ bo'lgan nuqtasidagi urinma va normal tenglamalarini tuzing.

**Yechim:**
1. Urinish nuqtasining ordinatasini topamiz:
   $$y_0 = f(2) = 2^3 - 3(2)^2 + 4(2) - 1 = 8 - 12 + 8 - 1 = 3 \implies M_0(2; 3)$$
2. Funksiya hosilasini va uning $x_0 = 2$ nuqtadagi qiymatini hisoblaymiz:
   $$f'(x) = 3x^2 - 6x + 4 \implies k = f'(2) = 3(2)^2 - 6(2) + 4 = 12 - 12 + 4 = 4$$
3. **Urinma tenglamasi:**
   $$y - 3 = 4(x - 2) \implies y = 4x - 5$$
4. **Normal tenglamasi:**
   $$y - 3 = -\frac{1}{4}(x - 2) \implies 4y - 12 = -x + 2 \implies x + 4y - 14 = 0$$

---

### 2-misol. Egri chiziqlar orasidagi kesishish burchagi
$y = x^2$ parabola va $y = \sqrt{x}$ egri chiziq kesishish nuqtalarida qanday burchak ostida kesishishini toping.

**Yechim:**
1. Kesishish nuqtalarini topamiz ($x \ge 0$):
   $$x^2 = \sqrt{x} \implies x^4 - x = 0 \implies x(x^3 - 1) = 0 \implies x_1 = 0, \quad x_2 = 1$$
   Demak, kesishish nuqtalari: $O(0; 0)$ va $A(1; 1)$.
2. Hosilalarni hisoblaymiz:
   $$f_1(x) = x^2 \implies f_1'(x) = 2x$$
   $$f_2(x) = \sqrt{x} \implies f_2'(x) = \frac{1}{2\sqrt{x}}$$
3. **$O(0; 0)$ nuqtada:**
   - $f_1'(0) = 0 \implies$ parabola urinmasi gorizontal ($y = 0$, ya'ni Ox o'qi).
   - $\lim_{x \to +0} f_2'(x) = \lim_{x \to +0} \frac{1}{2\sqrt{x}} = +\infty \implies$ $y = \sqrt{x}$ urinmasi vertikal ($x = 0$, ya'ni Oy o'qi).
   Gorizontal va vertikal o'qlar o'zaro perpendikulyar bo'lgani uchun $O(0; 0)$ nuqtada burchak **$\varphi_1 = 90^\circ = \frac{\pi}{2}$** (ortogonal).
4. **$A(1; 1)$ nuqtada:**
   - $k_1 = f_1'(1) = 2$
   - $k_2 = f_2'(1) = \frac{1}{2}$
   $$\tan \varphi_2 = \left| \frac{\frac{1}{2} - 2}{1 + 2 \cdot \frac{1}{2}} \right| = \frac{\frac{3}{2}}{2} = \frac{3}{4} \implies \varphi_2 = \arctan\frac{3}{4}$$

---

### 3-misol. Differensial yordamida ildizni taqribiy hisoblash
$\sqrt[4]{80.4}$ ning taqribiy qiymatini toping.

**Yechim:**
1. Yordamchi funksiyani tanlaymiz: $f(x) = \sqrt[4]{x}$.
2. $x = 80.4$ ga eng yaqin va to'rtinchi darajali ildiz aniq chiqadigan nuqta: $x_0 = 81$.
   U holda argument orttirmasi:
   $$\Delta x = x - x_0 = 80.4 - 81 = -0.6$$
3. $f(x_0)$ va $f'(x_0)$ ni hisoblaymiz:
   $$f(81) = \sqrt[4]{81} = 3$$
   $$f'(x) = \frac{1}{4\sqrt[4]{x^3}} \implies f'(81) = \frac{1}{4 \cdot (\sqrt[4]{81})^3} = \frac{1}{4 \cdot 3^3} = \frac{1}{108}$$
4. Taqribiy hisoblash formulasiga qo'yamiz:
   $$\sqrt[4]{80.4} \approx f(81) + f'(81) \cdot \Delta x = 3 + \frac{1}{108} \cdot (-0.6) = 3 - \frac{0.6}{108} = 3 - \frac{1}{180} \approx 3 - 0.00556 = 2.99444$$
*(Kalkulyatordagi aniq qiymati: $2.994439...$ — xatolik $10^{-6}$ dan kichik!)*

---

### 4-misol. Trigonometrik ifodani taqribiy hisoblash
$\sin 31^\circ$ ning taqribiy qiymatini toping.

**Yechim:**
> [!WARNING]
> **Oltin qoida:** Trigonometrik funksiyalarni differensial yordamida taqribiy hisoblashda $\Delta x$ burchak orttirmasi **faqat va faqat radianda** olinishi shart! Chunki $(\sin x)' = \cos x$ formula faqat $x$ radianda o'lchangandagina to'g'ri.

1. $f(x) = \sin x$, $x_0 = 30^\circ = \frac{\pi}{6}$.
2. $\Delta x = 1^\circ = \frac{\pi}{180} \approx 0.01745$ radian.
3. $f(x_0) = \sin 30^\circ = 0.5$ va $f'(x_0) = \cos 30^\circ = \frac{\sqrt{3}}{2} \approx 0.8660$.
4. Formula bo'yicha:
   $$\sin 31^\circ \approx 0.5 + 0.8660 \cdot 0.01745 \approx 0.5 + 0.01511 = 0.51511$$

---

## 5. O'z-o'zini tekshirish savollari

1. **Egri chiziqqa grafikda yotmaydigan tashqi $A(x_1, y_1)$ nuqtadan urinma o'tkazish talab qilinsa, qanday yo'l tutiladi?**
   - *Javob:* Urinish nuqtasi noma'lum bo'lgani uchun uning abssissasi $x_0$ deb belgilanadi va urinma tenglamasi $y - f(x_0) = f'(x_0)(x - x_0)$ ko'rinishida yoziladi. Urinma $A(x_1, y_1)$ nuqtadan o'tgani sababli $x = x_1, y = y_1$ koordinatalar shu tenglamaga qo'yilib, hosil bo'lgan tenglamadan noma'lum $x_0$ topiladi.
2. **Qachon $f(x_0 + \Delta x) \approx f(x_0) + f'(x_0)\Delta x$ taqribiy qiymat aniq qiymatdan katta (ortig'i bilan), qachon kichik (kami bilan) chiqadi?**
   - *Javob:* Agar $x_0$ atrofida grafik **qavariq** ($f''(x) < 0$) bo'lsa, urinma grafikdan yuqorida yotadi va taqribiy qiymat aniq qiymatdan **katta** chiqadi. Agar grafik **botiq** ($f''(x) > 0$) bo'lsa, urinma grafikdan pastda yotadi va taqribiy qiymat aniq qiymatdan **kichik** chiqadi.

---

## 6. Mustaqil yechish uchun masalalar

1. $f(x) = \ln x$ funksiya grafigiga $x_0 = e$ nuqtada o'tkazilgan urinma va normal tenglamalarini tuzing.
2. $f(x) = x^2 - 4x + 5$ parabolaning qaysi nuqtasida o'tkazilgan urinma $2x - y + 3 = 0$ to'g'ri chiziqqa parallel bo'ladi?
3. $y = x^2 - 2$ va $y = 6 - x^2$ parabolalar qanday burchak ostida kesishadi?
4. Differensial yordamida $\sqrt[3]{26.73}$ ni taqribiy hisoblang.
5. Differensial yordamida $\arctan(1.02)$ ni taqribiy hisoblang ($\frac{\pi}{4} \approx 0.7854$ deb oling).

> [!TIP]
> **Javoblar:**
> 1. Urinma: $y = \frac{1}{e}x$; Normal: $y = -ex + e^2 + 1$.
> 2. $M_0(3; 2)$ nuqtada ($f'(x_0) = 2x_0 - 4 = 2 \implies x_0 = 3$).
> 3. Kesishish nuqtalari $(\pm 2; 2)$; burchak $\varphi = \arctan\frac{8}{15}$.
> 4. $2.99$ ($x_0 = 27, \Delta x = -0.27$).
> 5. $\frac{\pi}{4} + 0.01 \approx 0.7954$ ($x_0 = 1, \Delta x = 0.02, f'(1) = \frac{1}{2}$).
