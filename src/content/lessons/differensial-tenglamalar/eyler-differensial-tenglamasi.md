---
title: "Eyler differensial tenglamasi va o'zgaruvchan koeffitsiyentli chiziqli tenglamalar"
module: "differensial-tenglamalar"
order: 13
description: "O'zgaruvchan koeffitsiyentli chiziqli differensial tenglamalar, Eyler tenglamasi a·x²·y'' + b·x·y' + c·y = f(x), x = e^t almashtirishi, xarakteristik tenglama va Koshi masalalarini yechish."
---

## Kirish: O'zgaruvchan koeffitsiyentli tenglamalarni yechish siri

Ma'lumki, o'zgarmas koeffitsiyentli chiziqli differensial tenglamalar ($a y'' + b y' + c y = f(x)$) xarakteristik tenglama yordamida oson yechiladi. Ammo koeffitsiyentlar $x$ ga bog'liq bo'lsa-chi?

Umumiy holda o'zgaruvchan koeffitsiyentli differensial tenglamalarni elementar funksiyalarda integrallash juda qiyin. Biroq, shunday ajoyib bir sinf borki, unda $x$ ning darajasi hosilaning tartibiga teng bo'ladi:
- $y''$ oldida $x^2$ turadi;
- $y'$ oldida $x$ turadi;
- $y$ oldida esa $x^0 = 1$ turadi.

Ushbu qonuniyatga bo'ysunuvchi tenglamalar buyuk matematik Leonard Eyler sharafiga **Eyler differensial tenglamasi** deb ataladi. U maxsus almashtirish orqali o'zgarmas koeffitsiyentli oddiy tenglamaga aylanadi!

---

## 1. 2-tartibli Eyler tenglamasi va $x = e^t$ almashtirishi

### Umumiy ko'rinishi:
$$a x^2 y'' + b x y' + c y = f(x), \quad (x > 0)$$
Bu yerda $a, b, c$ — o'zgarmas sonlar ($a \neq 0$).

### Asosiy almashtirish:
$$x = e^t \iff t = \ln x$$
Endi $y$ ni $t$ ning funksiyasi deb qaraymiz va murakkab funksiya hosilasi (zanjir qoidasi) bo'yicha $x$ bo'yicha hosilalarni $t$ bo'yicha hosilalar orqali ifodalaymiz:

1. **1-tartibli hosila ($y'_x$):**
   $$y'_x = \frac{dy}{dx} = \frac{dy}{dt} \cdot \frac{dt}{dx} = \frac{dy}{dt} \cdot \frac{1}{x} = \frac{1}{x} y'_t$$
   Bundan:
   $$x y'_x = y'_t$$

2. **2-tartibli hosila ($y''_{xx}$):**
   $$y''_{xx} = \frac{d}{dx}\left(\frac{1}{x} y'_t\right) = -\frac{1}{x^2} y'_t + \frac{1}{x} \frac{d}{dx}(y'_t) = -\frac{1}{x^2} y'_t + \frac{1}{x} \left(\frac{d^2 y}{dt^2} \frac{dt}{dx}\right) = -\frac{1}{x^2} y'_t + \frac{1}{x^2} y''_{tt}$$
   $$y''_{xx} = \frac{1}{x^2}(y''_{tt} - y'_t)$$
   Bundan:
   $$x^2 y''_{xx} = y''_{tt} - y'_t$$

### O'zgarmas koeffitsiyentli tenglamaga o'tish:
Ushbu ifodalarni Eyler tenglamasiga qo'yamiz:
$$a(y''_{tt} - y'_t) + b y'_t + c y = f(e^t)$$
$$a y''_{tt} + (b - a) y'_t + c y = f(e^t)$$

Ko'rib turganingizdek, $x$ ga bog'liq barcha koeffitsiyentlar yo'qolib, o'zgarmas koeffitsiyentli chiziqli tenglama hosil bo'ldi!

---

## 2. To'g'ridan-to'g'ri xarakteristik tenglama usuli ($y = x^k$)

Bir jinsli Eyler tenglamasini ($f(x) = 0$) yechish uchun $x = e^t$ almashtirishini bajarmasdan, to'g'ridan-to'g'ri $y = x^k$ ko'rinishidagi yechimni qidirish mumkin:
$$y = x^k \implies y' = k x^{k-1} \implies y'' = k(k-1)x^{k-2}$$

Tenglamaga qo'yamiz:
$$a x^2 \cdot k(k-1)x^{k-2} + b x \cdot k x^{k-1} + c x^k = 0$$
$$[a k(k-1) + b k + c] x^k = 0$$
$x \neq 0$ bo'lgani uchun **Eyler xarakteristik tenglamasi** hosil bo'ladi:
$$a k^2 + (b - a)k + c = 0$$

### Ildizlarning 3 ta holati:

| Diskriminant | Xarakteristik ildizlar | Bir jinsli tenglama umumiy yechimi ($y_{\text{oj}}$) |
| :--- | :--- | :--- |
| **$D > 0$** | Haqiqiy va turli: $k_1 \neq k_2$ | $$y = C_1 x^{k_1} + C_2 x^{k_2}$$ |
| **$D = 0$** | Karrali (teng): $k_1 = k_2 = k$ | $$y = x^k (C_1 + C_2 \ln x)$$ |
| **$D < 0$** | Kompleks qo'shma: $k = \alpha \pm i\beta$ | $$y = x^\alpha [C_1 \cos(\beta \ln x) + C_2 \sin(\beta \ln x)]$$ |

---

## 3. To'liq yechilgan namunaviy misollar

### 1-Misol (Bir jinsli Eyler tenglamasi):
Quyidagi differensial tenglamaning umumiy yechimini toping:
$$x^2 y'' - 2x y' + 2y = 0, \quad (x > 0)$$

**Yechish:**
1. Koeffitsiyentlarni aniqlaymiz: $a = 1, b = -2, c = 2$.
2. Xarakteristik tenglamani tuzamiz ($a k(k-1) + bk + c = 0$):
   $$1 \cdot k(k-1) - 2k + 2 = 0 \iff k^2 - k - 2k + 2 = 0$$
   $$k^2 - 3k + 2 = 0$$
3. Ildizlarni topamiz:
   $$(k - 1)(k - 2) = 0 \implies k_1 = 1, \quad k_2 = 2$$
4. Har ikkala ildiz haqiqiy va har xil ($D > 0$).
5. Umumiy yechim formulasi:
   $$y = C_1 x^1 + C_2 x^2 = C_1 x + C_2 x^2$$

---

### 2-Misol (Karrali ildiz holati va Koshi masalasi):
Quyidagi Koshi masalasini yeching:
$$x^2 y'' + 3x y' + y = 0, \quad y(1) = 2, \quad y'(1) = -1$$

**Yechish:**
1. Koeffitsiyentlar: $a = 1, b = 3, c = 1$.
2. Xarakteristik tenglama:
   $$k(k-1) + 3k + 1 = 0 \implies k^2 - k + 3k + 1 = 0 \implies k^2 + 2k + 1 = 0$$
   $$(k + 1)^2 = 0 \implies k_1 = k_2 = -1 \quad (\text{karrali ildiz})$$
3. Karrali ildiz uchun umumiy yechim:
   $$y = x^{-1} (C_1 + C_2 \ln x) = \frac{C_1 + C_2 \ln x}{x}$$
4. Boshlang'ich shartlardan $C_1, C_2$ ni topamiz:
   $$y(1) = \frac{C_1 + C_2 \ln 1}{1} = C_1 \implies C_1 = 2$$
5. Hosilani olamiz:
   $$y' = \left(\frac{2 + C_2 \ln x}{x}\right)' = \frac{\frac{C_2}{x} \cdot x - (2 + C_2 \ln x) \cdot 1}{x^2} = \frac{C_2 - 2 - C_2 \ln x}{x^2}$$
6. $y'(1) = -1$ shartni qo'yamiz:
   $$y'(1) = \frac{C_2 - 2 - C_2 \ln 1}{1^2} = C_2 - 2 = -1 \implies C_2 = 1$$
7. **Koshi masalasi yechimi:**
   $$y = \frac{2 + \ln x}{x}$$

---

### 3-Misol (Bir jinsli bo'lmagan Eyler tenglamasi):
Quyidagi tenglamani yeching:
$$x^2 y'' - x y' + y = 2x$$

**Yechish:**
1. O'ng tomon nolga teng emas, demak $x = e^t$ ($t = \ln x$) almashtirishini qo'llaymiz:
   $$x y' = y'_t, \quad x^2 y'' = y''_{tt} - y'_t, \quad 2x = 2e^t$$
2. Tenglamaga qo'yamiz:
   $$(y''_{tt} - y'_t) - y'_t + y = 2e^t$$
   $$y''_{tt} - 2y'_t + y = 2e^t$$
3. Bir jinsli qismini yechamiz:
   $$k^2 - 2k + 1 = 0 \implies (k-1)^2 = 0 \implies k_{1,2} = 1$$
   $$y_{\text{oj}}(t) = (C_1 + C_2 t)e^t$$
4. Xususiy yechimni qidiramiz ($f(t) = 2e^t$):
   $e^{1\cdot t}$ ko'rsatkichidagi $1$ soni xarakteristik tenglamaning 2 karrali ildizi! Shuning uchun xususiy yechim $t^2$ ga ko'paytiriladi:
   $$y_{\text{xus}}(t) = A t^2 e^t$$
5. Hosilalarni hisoblab qo'ysak: $A = 1$ chiqadi, ya'ni $y_{\text{xus}}(t) = t^2 e^t$.
6. $t$ dagi umumiy yechim:
   $$y(t) = (C_1 + C_2 t)e^t + t^2 e^t = (C_1 + C_2 t + t^2)e^t$$
7. $t = \ln x$ va $e^t = x$ ga qaytamiz:
   $$y(x) = (C_1 + C_2 \ln x + \ln^2 x) x$$

---

## ⚠️ Talabalar eng ko'p yo'l qo'yadigan xatolar va tuzoqlar

1. **Xarakteristik tenglamani odatdagidek $a k^2 + b k + c = 0$ deb yozish:**
   Eng keng tarqalgan xato! Eyler tenglamasida $k(k-1) = k^2 - k$ paydo bo'lgani uchun o'rta had $b$ emas, **$(b - a)$** bo'ladi!
2. **Karrali ildizda $x$ o'rniga $t$ ni unutish:**
   O'zgarmas koeffitsiyentlida karrali ildiz $x e^{kx}$ bo'lsa, Eyler tenglamasida u $x^k \cdot \ln x$ bo'ladi ($x$ emas, aynan $\ln x$ ga ko'paytiriladi).
3. **Aniqlanish sohasi:**
   Eyler tenglamasi faqat $x > 0$ (yoki $x < 0$) oraliqda aniqlangan. $x = 0$ nuqta maxsus nuqta hisoblanadi.

---

## ✏️ Mustaqil yechish uchun amaliy mashqlar va javoblar

1. $x^2 y'' + x y' - 4y = 0$ tenglamaning umumiy yechimini toping.
   *Javob:* $y = C_1 x^2 + \frac{C_2}{x^2}$.
2. $x^2 y'' + x y' + y = 0$ tenglamaning umumiy yechimini toping.
   *Javob:* $y = C_1 \cos(\ln x) + C_2 \sin(\ln x)$.
3. $x^2 y'' - 3x y' + 4y = 0$ tenglamaning xarakteristik ildizlarini aniqlang.
   *Javob:* $k_{1,2} = 2$ (karrali ildiz), $y = x^2 (C_1 + C_2 \ln x)$.
