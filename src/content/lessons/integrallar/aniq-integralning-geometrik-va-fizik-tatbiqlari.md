---
title: "Aniq integralning geometrik va fizik tatbiqlari: Yoy uzunligi, aylanma sirt yuzi va bajarilgan ish"
module: "integrallar"
order: 12
description: "Aniq integralning amaliy tatbiqlari: egri chiziq yoyi uzunligini Dekart, parametrik va qutb koordinatalarida hisoblash, aylanma jism sirtining yuzi, o'zgaruvchan kuchning bajargan ishi va plastinkaning og'irlik markazi."
---

## Kirish va amaliy ahamiyati

Aniq integral faqatgina egri chiziqli trapetsiya yuzini hisoblash bilan cheklanib qolmaydi. U muhandislik, qurilish, aviatsiya va fizika fanlarida murakkab shakllarning yoy uzunliklarini, o'zgaruvchan kuch ta'siridagi mexanik ishni, suv bosimi va og'irlik markazlarini aniqlashda asosiy matematik vosita hisoblanadi.

Ushbu darsda **Mathprofi** metodikasi asosida aniq integralning barcha asosiy geometrik va fizik tatbiqlarini qadamma-qadam formulalar va to'liq yechilgan misollar bilan o'rganamiz.

---

## 1. Yassi egri chiziq yoyi uzunligini hisoblash ($L$)

Egri chiziqning $L$ yoy uzunligi uni cheksiz kichik $dl = \sqrt{dx^2 + dy^2}$ differensial kesmalarga bo'lib, yig'ish (integrallash) orqali topiladi.

### Formulalar xulosasi:

| Koordinata sistemasi | Berilgan tenglama | Yoy uzunligi formulasi ($L$) |
| :--- | :--- | :--- |
| **Dekart (Oshkor)** | $y = f(x), \quad x \in [a, b]$ | $$L = \int_a^b \sqrt{1 + (f'(x))^2} \, dx$$ |
| **Parametrik** | $\begin{cases} x = x(t) \\ y = y(t) \end{cases}, \quad t \in [t_1, t_2]$ | $$L = \int_{t_1}^{t_2} \sqrt{(x'_t)^2 + (y'_t)^2} \, dt$$ |
| **Qutb koordinatalari** | $\rho = \rho(\varphi), \quad \varphi \in [\alpha, \beta]$ | $$L = \int_\alpha^\beta \sqrt{\rho^2 + (\rho')^2} \, d\varphi$$ |

---

### 1-Misol (Dekart koordinatalarida yoy uzunligi):
Quyidagi zanjir chizig'ining (katena) $x \in [-1, 1]$ oraliqdagi yoy uzunligini toping:
$$y = \operatorname{ch} x = \frac{e^x + e^{-x}}{2}$$

**Yechish:**
1. Hosilani topamiz:
   $$y' = (\operatorname{ch} x)' = \operatorname{sh} x = \frac{e^x - e^{-x}}{2}$$
2. Ildiz ostidagi ifodani tuzamiz:
   $$1 + (y')^2 = 1 + \operatorname{sh}^2 x$$
   Giperbolik asosiy ayniyatga ko'ra: $\operatorname{ch}^2 x - \operatorname{sh}^2 x = 1 \implies 1 + \operatorname{sh}^2 x = \operatorname{ch}^2 x$.
3. Integralni hisoblaymiz:
   $$L = \int_{-1}^1 \sqrt{\operatorname{ch}^2 x} \, dx = \int_{-1}^1 \operatorname{ch} x \, dx$$
4. Funksiya juft bo'lgani uchun:
   $$L = 2\int_0^1 \operatorname{ch} x \, dx = 2 \left[ \operatorname{sh} x \right]_0^1 = 2(\operatorname{sh} 1 - \operatorname{sh} 0) = 2 \cdot \frac{e^1 - e^{-1}}{2} = e - \frac{1}{e} \approx 2.35$$

---

### 2-Misol (Parametrik sikloida yoy uzunligi):
Sikloidaning bitta to'liq arkasining uzunligini toping:
$$\begin{cases} x = a(t - \sin t) \\ y = a(1 - \cos t) \end{cases}, \quad t \in [0, 2\pi]$$

**Yechish:**
1. Parametr $t$ bo'yicha hosilalarni olamiz:
   $$x'_t = a(1 - \cos t), \quad y'_t = a\sin t$$
2. Kvadratlar yig'indisini soddalashtiramiz:
   $$(x'_t)^2 + (y'_t)^2 = a^2(1 - 2\cos t + \cos^2 t) + a^2\sin^2 t = a^2(1 - 2\cos t + (\cos^2 t + \sin^2 t)) = a^2(2 - 2\cos t)$$
3. $1 - \cos t = 2\sin^2 \frac{t}{2}$ trigonometrik formulasidan foydalanamiz:
   $$(x'_t)^2 + (y'_t)^2 = a^2 \cdot 4\sin^2 \frac{t}{2}$$
4. Ildizdan chiqaramiz ($t \in [0, 2\pi]$ oraliqda $\sin\frac{t}{2} \ge 0$):
   $$\sqrt{(x'_t)^2 + (y'_t)^2} = 2a\sin\frac{t}{2}$$
5. Integrallaymiz:
   $$L = \int_0^{2\pi} 2a\sin\frac{t}{2} \, dt = 2a \left[ -2\cos\frac{t}{2} \right]_0^{2\pi} = -4a (\cos \pi - \cos 0) = -4a(-1 - 1) = 8a$$
Sikloida arkasining uzunligi doimo hosil qiluvchi aylananing $8a$ radiusiga teng!

---

## 2. Aylanma jism sirtining yuzi ($S_{\text{sirt}}$)

Agar $y = f(x)$ silliq egri chiziq $Ox$ o'qi atrofida aylantirilsa, hosil bo'lgan aylanma jism sirtining yuzi quyidagi formula bilan hisoblanadi:
$$S_{Ox} = 2\pi \int_a^b y \sqrt{1 + (y')^2} \, dx$$

Agar $Oy$ o'qi atrofida aylantirilsa:
$$S_{Oy} = 2\pi \int_a^b x \sqrt{1 + (y')^2} \, dx$$

### 3-Misol (Aylanma parabola sirti yuzi):
$y = \sqrt{x}$ egri chizig'ining $x \in [0, 3]$ qismi $Ox$ o'qi atrofida aylantirilishidan hosil bo'lgan sirt yuzini toping.

**Yechish:**
1. Hosila: $y' = \frac{1}{2\sqrt{x}}$, demak $(y')^2 = \frac{1}{4x}$.
2. Formulaga qo'yamiz:
   $$S = 2\pi \int_0^3 \sqrt{x} \sqrt{1 + \frac{1}{4x}} \, dx = 2\pi \int_0^3 \sqrt{x\left(1 + \frac{1}{4x}\right)} \, dx = 2\pi \int_0^3 \sqrt{x + \frac{1}{4}} \, dx$$
3. Integrallaymiz:
   $$S = 2\pi \left[ \frac{2}{3}\left(x + \frac{1}{4}\right)^{3/2} \right]_0^3 = \frac{4\pi}{3} \left[ \left(3 + \frac{1}{4}\right)^{3/2} - \left(\frac{1}{4}\right)^{3/2} \right]$$
   $$3 + \frac{1}{4} = \frac{13}{4} \implies \left(\frac{13}{4}\right)^{3/2} = \frac{13\sqrt{13}}{8}$$
   $$\left(\frac{1}{4}\right)^{3/2} = \frac{1}{8}$$
4. Yakuniy natija:
   $$S = \frac{4\pi}{3} \cdot \frac{13\sqrt{13} - 1}{8} = \frac{\pi}{6}(13\sqrt{13} - 1) \approx 24.02$$

---

## 3. O'zgaruvchan kuchning bajargan ishi ($A$)

Fizika kursidan ma'lumki, o'zgarmas kuchning ishi $A = F \cdot s$ ga teng. Ammo kuch masofaga bog'liq ravishda o'zgaruvchan bo'lsa ($F = F(x)$), jismni $x = a$ nuqtadan $x = b$ nuqtaga ko'chirishda bajarilgan ish integral bilan ifodalanadi:
$$A = \int_a^b F(x) \, dx$$

### 4-Misol (Prujinani cho'zish ishi — Guk qonuni):
Prujinani $2\text{ sm} = 0.02\text{ m}$ ga cho'zish uchun $10\text{ N}$ kuch talab etiladi. Ushbu prujinani $5\text{ sm} = 0.05\text{ m}$ ga cho'zish uchun qancha ish bajarish kerak?

**Yechish:**
1. Guk qonuniga ko'ra: $F(x) = kx$.
2. Prujina bikrligini topamiz:
   $$10 = k \cdot 0.02 \implies k = \frac{10}{0.02} = 500\text{ N/m}$$
3. $x = 0$ dan $x = 0.05\text{ m}$ gacha cho'zishdagi ish:
   $$A = \int_0^{0.05} 500x \, dx = \left[ 250 x^2 \right]_0^{0.05} = 250 \cdot (0.05)^2 = 250 \cdot 0.0025 = 0.625\text{ J}$$

---

## 4. Yassi plastinkaning og'irlik markazi ($x_c, y_c$)

Zichligi bir jinsli bo'lgan ($\rho = 1$), yuqoridan $y = f(x)$, pastdan $Ox$ o'qi, yon tomonlardan $x = a$ va $x = b$ to'g'ri chiziqlar bilan chegaralangan tekis shaklning og'irlik markazi koordinatalari:
$$x_c = \frac{1}{S} \int_a^b x f(x) \, dx, \quad y_c = \frac{1}{2S} \int_a^b f^2(x) \, dx$$
Bu yerda $S = \int_a^b f(x) dx$ — shaklning umumiy yuzidir.

---

## ⚠️ Talabalar eng ko'p yo'l qo'yadigan xatolar va tuzoqlar

1. **Yoy uzunligi formulasida ildiz ostidagi 1 ni unutish:**
   Ko'p talabalar $\int \sqrt{1 + (y')^2} dx$ o'rniga adashib $\int \sqrt{(y')^2} dx = \int y' dx$ deb hisoblashadi. Bu butunlay xato!
2. **Parametrik yoy uzunligida $dt$ o'rniga $dx$ qo'yish:**
   Parametr $t$ bo'yicha integrallanayotganda chegaralar ham parametr $t$ ning qiymatlari $[t_1, t_2]$ bo'lishi shart ($x$ ning emas).
3. **Aylanma sirt yuzida radiusni chalkashtirish:**
   $Ox$ o'qi atrofida aylanganda integral oldida $2\pi y$ turadi; $Oy$ o'qi atrofida aylanganda esa $2\pi x$ turadi. O'qlarni adashtirmang!

---

## ✏️ Mustaqil yechish uchun amaliy mashqlar va javoblar

1. $y = \frac{2}{3}x^{3/2}$ egri chizig'ining $x = 0$ dan $x = 3$ gacha bo'lgan yoy uzunligini hisoblang.
   *Javob:* $\frac{14}{3}$
2. Radiusi $R$ bo'lgan aylananing $x = R\cos t, y = R\sin t$ ($t \in [0, 2\pi]$) uzunligini parametrik formula orqali hisoblang.
   *Javob:* $2\pi R$
3. $F(x) = 3x^2 + 2x$ o'zgaruvchan kuch ta'sirida jismni $x = 1\text{ m}$ dan $x = 3\text{ m}$ gacha ko'chirishda bajarilgan ishni toping.
   *Javob:* $A = \int_1^3 (3x^2 + 2x)dx = [x^3 + x^2]_1^3 = (27+9) - (1+1) = 34\text{ J}$
