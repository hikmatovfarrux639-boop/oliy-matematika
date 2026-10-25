---
title: "Trigonometrik tenglamalar va tengsizliklar: Barcha yechish usullari"
module: "maktab-kursi"
order: 9
description: "Eng sodda trigonometrik tenglamalar, kvadrat tenglamaga keltirish, bir jinsli tenglamalar, yordamchi burchak kiritish va universal trigonometrik almashtirish."
---

Trigonometrik funksiyalar davriy bo'lgani sababli, algebraik tenglamalardan farqli o'laroq, trigonometrik tenglamalar odatda **cheksiz ko'p ildizlar to'plamiga** (seriyalarga) ega bo'ladi. Oliy matematikada tebranma harakatlar, Furye qatorlari, kompleks sonlarning trigonometrik shakli va qutb koordinatalarida integrallash aynan shu mavzuga tayanadi.

---

## 1. Teskari trigonometrik funksiyalar (Arkfunksiyalar)

Eng sodda tenglamalarning yechimlarini yozish uchun arkfunksiyalar ta'rifi va qiymatlar sohasini aniq bilish shart:

| Funksiya | Aniqlanish sohasi | Qiymatlar sohasi (Bosh qiymat) | Juft-toqlik / Manfiy argument xossasi |
| :--- | :--- | :--- | :--- |
| $\arcsin a$|$a \in [-1; 1]$|$\left[-\frac{\pi}{2}; \frac{\pi}{2}\right]$|$\arcsin(-a) = -\arcsin a$ |
| $\arccos a$|$a \in [-1; 1]$|$[0; \pi]$|$\arccos(-a) = \pi - \arccos a$ |
| $\arctan a$|$a \in \mathbb{R}$|$\left(-\frac{\pi}{2}; \frac{\pi}{2}\right)$|$\arctan(-a) = -\arctan a$ |
| $\operatorname{arccot} a$|$a \in \mathbb{R}$|$(0; \pi)$|$\operatorname{arccot}(-a) = \pi - \operatorname{arccot} a$ |

---

## 2. Eng sodda trigonometrik tenglamalar va xususiy hollar

Quyidagi barcha formulalarda $k \in \mathbb{Z}$ (butun sonlar to'plami) deb qabul qilinadi.

### 2.1. $\sin x = a$ tenglama ($|a| \le 1$)

Agar $|a| > 1$ bo'lsa, tenglama yechimga ega emas ($x \in \varnothing$). Agar $|a| \le 1$bo'lsa, birlik aylanada ordinatasi$a$ ga teng bo'lgan ikkita nuqta mavjud:

$$\sin x = a \iff \left[ \begin{array}{l} x = \arcsin a + 2\pi k \\ x = \pi - \arcsin a + 2\pi k \end{array} \right. \quad \text{yoki yagona formula bilan:} \quad x = (-1)^k \arcsin a + \pi k$$

**Xususiy hollar** (umumiy formula emas, aynan shu ko'rinishda yoziladi!):
- $\sin x = 0 \implies x = \pi k$-$\sin x = 1 \implies x = \frac{\pi}{2} + 2\pi k$-$\sin x = -1 \implies x = -\frac{\pi}{2} + 2\pi k$### 2.2.$\cos x = a$ tenglama ($|a| \le 1$)

Agar $|a| > 1$bo'lsa,$x \in \varnothing$. Agar $|a| \le 1$ bo'lsa:

$$\cos x = a \iff x = \pm \arccos a + 2\pi k, \quad k \in \mathbb{Z}$$

**Xususiy hollar:**
- $\cos x = 0 \implies x = \frac{\pi}{2} + \pi k$-$\cos x = 1 \implies x = 2\pi k$-$\cos x = -1 \implies x = \pi + 2\pi k$### 2.3.$\tan x = a$va$\cot x = a$ tenglamalar ($a \in \mathbb{R}$)

Tangens va kotangens har qanday haqiqiy qiymatni qabul qiladi va ularning davri $\pi$ ga teng:

$$\tan x = a \iff x = \arctan a + \pi k, \qquad \cot x = a \iff x = \operatorname{arccot} a + \pi k$$

**Xususiy hollar:**
- $\tan x = 0 \implies x = \pi k$-$\cot x = 0 \implies x = \frac{\pi}{2} + \pi k$

---

## 3. Trigonometrik tenglamalarni yechishning 5 ta asosiy usuli

### 1-usul: Algebraik (kvadrat) tenglamaga keltirish
Agar tenglama faqat bitta trigonometrik funksiya (masalan, $\sin x$) ga bog'liq bo'lsa yoki $\sin^2 x + \cos^2 x = 1$ayniyat yordamida bir nomga keltirilsa,$t = \sin x$ ($|t| \le 1$) belgilash kiritilib, algebraik tenglama yechiladi.
- Masalan: $a\sin^2 x + b\cos x + c = 0 \implies a(1 - \cos^2 x) + b\cos x + c = 0$.

### 2-usul: Ko'paytuvchilarga ajratish va darajani pasaytirish
Yig'indini ko'paytmaga keltirish formulalari ($\sin\alpha \pm \sin\beta$, $\cos\alpha \pm \cos\beta$) yoki guruhlash yordamida tenglama $f_1(x) \cdot f_2(x) = 0$ ko'rinishiga keltiriladi.
Darajani pasaytirish formulalari ham ko'p qo'llaniladi:

$$\sin^2 x = \frac{1 - \cos 2x}{2}, \qquad \cos^2 x = \frac{1 + \cos 2x}{2}$$

### 3-usul: Bir jinsli (gomogen) tenglamalar
1. **Birinchi darajali bir jinsli tenglama:** $a\sin x + b\cos x = 0$ ($a, b \neq 0$).
   Bu yerda $\cos x \neq 0$(chunki$\cos x = 0$bo'lsa,$\sin x = \pm 1$bo'lib tenglik bajarilmaydi). Har ikki tomonni$\cos x$ ga bo'lamiz:
   $$a\tan x + b = 0 \implies \tan x = -\frac{b}{a}$$
2. **Ikkinchi darajali bir jinsli tenglama:** $a\sin^2 x + b\sin x \cos x + c\cos^2 x = 0$.
   Agar $a \neq 0$bo'lsa, tenglamaning ikkala tomonini$\cos^2 x \neq 0$ga bo'lib,$\tan x$ ga nisbatan kvadrat tenglama hosil qilinadi:
   $$a\tan^2 x + b\tan x + c = 0$$

> [!TIP]
> Agar tenglama $a\sin^2 x + b\sin x \cos x + c\cos^2 x = d$ko'rinishida bo'lsa, o'ng tarafdagi$d$sonini$d(\sin^2 x + \cos^2 x)$ bilan almashtirib, bir jinsli tenglamaga keltirish mumkin!

### 4-usul: Yordamchi burchak kiritish usuli
$a\sin x + b\cos x = c$ ($a^2 + b^2 > 0$) chiziqli tenglamani yechish uchun tenglamaning ikkala tomoni $\sqrt{a^2 + b^2}$ ga bo'linadi:

$$\frac{a}{\sqrt{a^2 + b^2}}\sin x + \frac{b}{\sqrt{a^2 + b^2}}\cos x = \frac{c}{\sqrt{a^2 + b^2}}$$

Bu yerda $\left(\frac{a}{\sqrt{a^2 + b^2}}\right)^2 + \left(\frac{b}{\sqrt{a^2 + b^2}}\right)^2 = 1$bo'lgani uchun,$\cos\varphi = \frac{a}{\sqrt{a^2 + b^2}}$va$\sin\varphi = \frac{b}{\sqrt{a^2 + b^2}}$bo'ladigan yordamchi$\varphi$ burchak topiladi va formula yig'iladi:

$$\sin(x + \varphi) = \frac{c}{\sqrt{a^2 + b^2}}$$

Bu tenglama yechimga ega bo'lishi uchun $|c| \le \sqrt{a^2 + b^2} \iff c^2 \le a^2 + b^2$ shart bajarilishi zarur va yetarlidir.

### 5-usul: Universal trigonometrik almashtirish
$\sin x$va$\cos x$ni yarim burchak tangensi$t = \tan\frac{x}{2}$ orqali ratsional ifodalash mumkin:

$$\sin x = \frac{2\tan\frac{x}{2}}{1 + \tan^2\frac{x}{2}} = \frac{2t}{1 + t^2}, \qquad \cos x = \frac{1 - \tan^2\frac{x}{2}}{1 + \tan^2\frac{x}{2}} = \frac{1 - t^2}{1 + t^2}$$

> [!WARNING]
> **Ehtiyot bo'ling!** Universal almashtirishda $\tan\frac{x}{2}$aniqlangan bo'lishi uchun$\frac{x}{2} \neq \frac{\pi}{2} + \pi k \implies x \neq \pi + 2\pi k$sharti faraz qilinadi. Shuning uchun ushbu almashtirishni qo'llashdan oldin$x = \pi + 2\pi k$ ($\cos x = -1, \sin x = 0$) dastlabki tenglamaning ildizi bo'lish-bo'lmasligini alohida tekshirib ko'rish shart!

---

## 4. Trigonometrik tengsizliklar

Eng sodda trigonometrik tengsizliklar ($\sin x > a$, $\cos x \le a$, $\tan x < a$) **birlik trigonometrik aylana** yoki funksiya grafigi yordamida yechiladi.

**Birlik aylana algoritmi ($\sin x > a$yoki$\cos x < a$ uchun):**
1. Birlik aylanada mos o'qda ($\sin$uchun$Oy$o'qida,$\cos$uchun$Ox$o'qida)$a$ nuqta belgilanadi va o'qqa perpendikulyar kesuvchi to'g'ri chiziq o'tkaziladi.
2. Tengsizlik ishorasiga mos yoy (masalan, $\sin x > a$ uchun chiziqdan yuqoridagi yoy) ajratib bo'yaladi.
3. **Soat miliga teskari yo'nalishda** (kichik burchakdan katta burchakka qarab!) yoyning boshlang'ich nuqtasi $\alpha_1$va oxirgi nuqtasi$\alpha_2$ ($\alpha_1 < \alpha_2$) aniqlanadi.
4. Hosil bo'lgan $(\alpha_1; \alpha_2)$oraliqning ikkala chegarasiga$2\pi k$ ($k \in \mathbb{Z}$) davr qo'shiladi:
   $$\alpha_1 + 2\pi k < x < \alpha_2 + 2\pi k, \quad k \in \mathbb{Z}$$

Tangens qatnashgan $\tan x > a$tengsizlikning yechimi esa$-\frac{\pi}{2}$va$\frac{\pi}{2}$asimptotalar orasida olinib,$\pi k$ davr qo'shiladi:

$$\tan x > a \iff \arctan a + \pi k < x < \frac{\pi}{2} + \pi k, \quad k \in \mathbb{Z}$$

---

## 5. Namuna misollar va yechish usullari

### 1-misol. Ikkinchi darajali bir jinsli tenglamaga keltirish
**Masala:** Tenglamani yeching: $3\sin^2 x - 4\sin x \cos x + 5\cos^2 x = 2$.

**Yechish:**
O'ng tarafdagi $2$sonini$2(\sin^2 x + \cos^2 x)$ ko'rinishida yozamiz:
$$3\sin^2 x - 4\sin x \cos x + 5\cos^2 x = 2\sin^2 x + 2\cos^2 x$$
Hadlarni chap tomonga o'tkazib ixchamlaymiz:
$$\sin^2 x - 4\sin x \cos x + 3\cos^2 x = 0$$
Hosil bo'lgan tenglama bir jinslidir. Ikkala tomonini $\cos^2 x \neq 0$ ga bo'lamiz:
$$\tan^2 x - 4\tan x + 3 = 0$$
Kvadrat tenglama ildizlari: $\tan x = 1$yoki$\tan x = 3$.
1. $\tan x = 1 \implies x_1 = \frac{\pi}{4} + \pi k, \quad k \in \mathbb{Z}$.
2. $\tan x = 3 \implies x_2 = \arctan 3 + \pi n, \quad n \in \mathbb{Z}$.

**Javob:** $x = \frac{\pi}{4} + \pi k; \; x = \arctan 3 + \pi n \quad (k, n \in \mathbb{Z})$.

---

### 2-misol. Yordamchi burchak kiritish usuli
**Masala:** Tenglamani yeching: $\sqrt{3}\sin x + \cos x = \sqrt{2}$.

**Yechish:**
Bu yerda $a = \sqrt{3}, \; b = 1$, demak $\sqrt{a^2 + b^2} = \sqrt{3 + 1} = 2$. Tenglamaning ikkala tomonini $2$ ga bo'lamiz:
$$\frac{\sqrt{3}}{2}\sin x + \frac{1}{2}\cos x = \frac{\sqrt{2}}{2}$$
$\cos\frac{\pi}{6} = \frac{\sqrt{3}}{2}$va$\sin\frac{\pi}{6} = \frac{1}{2}$ ekanligini hisobga olsak:
$$\sin x \cos\frac{\pi}{6} + \cos x \sin\frac{\pi}{6} = \frac{\sqrt{2}}{2} \implies \sin\left(x + \frac{\pi}{6}\right) = \frac{\sqrt{2}}{2}$$
Eng sodda tenglama formulasini qo'llaymiz:
$$x + \frac{\pi}{6} = (-1)^k \frac{\pi}{4} + \pi k \implies x = (-1)^k \frac{\pi}{4} - \frac{\pi}{6} + \pi k, \quad k \in \mathbb{Z}$$

**Javob:** $x = (-1)^k \frac{\pi}{4} - \frac{\pi}{6} + \pi k, \; k \in \mathbb{Z}$.

---

### 3-misol. Trigonometrik tengsizlik
**Masala:** Tengsizlikni yeching: $\cos x \le -\frac{1}{2}$.

**Yechish:**
1. Birlik aylanada $\cos x = -\frac{1}{2}$ tenglikni qanoatlantiruvchi nuqtalar II va III choraklarda joylashgan:
   - Yuqori nuqta: $\alpha_1 = \arccos\left(-\frac{1}{2}\right) = \pi - \frac{\pi}{3} = \frac{2\pi}{3}$.
   - Pastki nuqta (soat miliga teskari yo'nalishda keyingi burchak): $\alpha_2 = 2\pi - \frac{2\pi}{3} = \frac{4\pi}{3}$.
2. $\cos x \le -\frac{1}{2}$shart$x = -\frac{1}{2}$vertikal chiziqdan chapda yotgan yoyga mos keladi. Bu yoy$\frac{2\pi}{3}$dan$\frac{4\pi}{3}$ gacha davom etadi.
3. Davrni qo'shamiz:
   $$\frac{2\pi}{3} + 2\pi k \le x \le \frac{4\pi}{3} + 2\pi k, \quad k \in \mathbb{Z}$$

**Javob:** $x \in \left[\frac{2\pi}{3} + 2\pi k; \; \frac{4\pi}{3} + 2\pi k\right], \; k \in \mathbb{Z}$.

---

## 6. O'z-o'zini tekshirish savollari

1. Nima uchun $\sin 2x = \cos x$tenglamaning ikkala tomonini$\cos x$ ga bo'lib yuborish qo'pol xato hisoblanadi?
2. Birlik aylanada $\cos x > \frac{\sqrt{3}}{2}$tengsizlikning yechimini$\left[\frac{11\pi}{6} + 2\pi k; \frac{\pi}{6} + 2\pi k\right]$ deb yozish nega mantiqan xato? To'g'risi qanday yoziladi?
3. $\sin x + \cos x = t$belgilash kiritilganda$\sin x \cdot \cos x$ko'paytma$t$orqali qanday ifodalanadi va$t$ qanday chegarada o'zgaradi?

---

## 7. Mustaqil yechish uchun masalalar

1. **1-masala:** Tenglamani yeching: $2\cos^2 x + 5\sin x - 4 = 0$.
2. **2-masala:** Tenglamani yeching: $\sin x + \sin 2x + \sin 3x = 0$.
3. **3-masala:** Tenglamani yeching: $\sin x + \cos x + \sin x \cos x = 1$.
4. **4-masala:** Tengsizlikni yeching: $2\sin^2 x - \sin x - 1 < 0$.

---

### Javoblar va ko'rsatmalar

- **O'z-o'zini tekshirishga izoh:** 1) $\cos x = 0$ildizlar seriyasi yo'qotib qo'yiladi. 2) Chap chegara o'ng chegaradan kichik bo'lishi shart:$\left(-\frac{\pi}{6} + 2\pi k; \frac{\pi}{6} + 2\pi k\right)$. 3) $\sin x \cos x = \frac{t^2 - 1}{2}$, bunda $|t| \le \sqrt{2}$.
- **1-masala:** $x = (-1)^k \frac{\pi}{6} + \pi k, \; k \in \mathbb{Z}$.
- **2-masala:** $x = \frac{\pi k}{2}; \; x = \pm \frac{2\pi}{3} + 2\pi n \quad (k, n \in \mathbb{Z})$. *(Ko'rsatma: $\sin x + \sin 3x = 2\sin 2x \cos x$ guruhlashni bajaring).*
- **3-masala:** $x = 2\pi k; \; x = \frac{\pi}{2} + 2\pi n \quad (k, n \in \mathbb{Z})$. *(Ko'rsatma: $t = \sin x + \cos x$belgilashidan$t + \frac{t^2 - 1}{2} = 1 \implies t = 1$ chiqadi).*
- **4-masala:** $x \in \left(-\frac{\pi}{6} + 2\pi k; \frac{7\pi}{6} + 2\pi k\right) \setminus \left\{\frac{\pi}{2} + 2\pi k\right\}, \; k \in \mathbb{Z}$. *(Ko'rsatma: $-\frac{1}{2} < \sin x < 1$qo'sh tengsizlikka keladi;$\sin x \neq 1$ nuqtani chiqarib tashlashni unutmang!)*
