---
title: "Xususiy hosilali differensial tenglamalar (XHDT) va Fure usuli"
description: "Tor tebranishi to'lqin tenglamasi, D'Alamber formulasi, issiqlik o'tkazuvchanlik tenglamasi va o'zgaruvchilarni ajratish (Fure) usuli."
module: "differensial-tenglamalar"
order: 18
---

## 📌 Kirish va Fizik/Texnik Mohiyati

Tabiatdagi aksariyat fizik jarayonlar nafaqat vaqtga ($t$), balki fazoviy koordinatalarga ($x, y, z$) ham bog'liqdir. Masalan, torli cholg'u asboblarining tebranishi, okeandagi to'lqinlar, tovush va elektromagnit to'lqinlarning tarqalishi, sterjen bo'ylab issiqlik o'tishi va metall eritish texnologiyalari — bularning barchasi **xususiy hosilali differensial tenglamalar (XHDT)** orqali tavsiflanadi.

XVIII–XIX asrlarda buyuk matematiklar Jan Le Ron D'Alamber, Leonard Eyler, Daniel Bernulli va Jozef Fure tomonidan ishlab chiqilgan usullar matematik fizikaning poydevoriga aylandi. Ushbu darsda biz matematik fizikaning eng mashhur ikki klassik tenglamasini — **to'lqin tenglamasi** va **issiqlik o'tkazuvchanlik tenglamasini** hamda ularni yechishning ikkita qudratli usuli: **D'Alamber formulasi** va **Fure (o'zgaruvchilarni ajratish) usulini** o'rganamiz.

---

## 📐 Asosiy Nazariya, Qoidalar va Teoremalar

### 1. Ikkinchi tartibli XHDT klassifikatsiyasi

Ikki o'zgaruvchili umumiy 2-tartibli chiziqli tenglama quyidagi ko'rinishga ega:
$$A \frac{\partial^2 u}{\partial x^2} + 2B \frac{\partial^2 u}{\partial x \partial y} + C \frac{\partial^2 u}{\partial y^2} + D \frac{\partial u}{\partial x} + E \frac{\partial u}{\partial y} + Fu = G$$

Uning turi $\Delta = B^2 - AC$ diskriminantning ishorasi bilan aniqlanadi:
1. $\Delta > 0$ — **Giperbolik tur** (to'lqin jarayonlari, masalan: $u_{tt} - a^2 u_{xx} = 0$).
2. $\Delta = 0$ — **Parabolik tur** (issiqlik va diffuziya, masalan: $u_t - a^2 u_{xx} = 0$).
3. $\Delta < 0$ — **Elliptik tur** (statsionar maydonlar, Laplas tenglamasi: $u_{xx} + u_{yy} = 0$).

---

### 2. To'lqin tenglamasi va D'Alamber formulasi (Cheksiz tor)

Cheksiz torning erkin tebranish tenglamasi:
$$\frac{\partial^2 u}{\partial t^2} = a^2 \frac{\partial^2 u}{\partial x^2}, \quad -\infty < x < \infty, \quad t > 0$$
bu yerda $a = \sqrt{\frac{T_0}{\rho}}$ — to'lqinning tarqalish tezligi ($T_0$ — taranglik, $\rho$ — chiziqli zichlik).

Boshlang'ich shartlar:
$$u(x, 0) = \varphi(x) \quad (\text{boshlang'ich shakl}), \quad \frac{\partial u}{\partial t}(x, 0) = \psi(x) \quad (\text{boshlang'ich tezlik})$$

> **D'Alamber formulasi:**
> Ushbu Koshi masalasining yagona yechimi quyidagi formula orqali beriladi:
> $$u(x, t) = \frac{\varphi(x - at) + \varphi(x + at)}{2} + \frac{1}{2a} \int_{x - at}^{x + at} \psi(s) ds$$
> Bu formula boshlang'ich profilning $a$ tezlik bilan o'ngga va chapga tarqaluvchi ikkita yuguruvchi to'lqin yig'indisi ekanligini ifodalaydi.

---

### 3. O'zgaruvchilarni ajratish (Fure) usuli (Chegaralangan soha)

Uzunligi $l$ ga teng, uchlari mahkamlangan tor tebranishini qaraymiz:
$$\frac{\partial^2 u}{\partial t^2} = a^2 \frac{\partial^2 u}{\partial x^2}, \quad 0 \le x \le l, \quad t \ge 0$$
Chegaraviy shartlar: $u(0, t) = 0, \quad u(l, t) = 0$.

Yechimni fazoviy va vaqtinchalik funksiyalar ko'paytmasi ko'rinishida qidiramiz:
$$u(x, t) = X(x) \cdot T(t)$$

Tenglamaga qo'ysak:
$$X(x) T''(t) = a^2 X''(x) T(t) \implies \frac{T''(t)}{a^2 T(t)} = \frac{X''(x)}{X(x)} = -\lambda$$
bu yerda $\lambda$ — ajratish o'zgarmasi.

1. **Shturm-Liuvill masalasi:**
   $$X''(x) + \lambda X(x) = 0, \quad X(0) = 0, \quad X(l) = 0$$
   Nolga teng bo'lmagan yechimlar faqat quyidagi xos qiymatlarda mavjud:
   $$\lambda_k = \left(\frac{k\pi}{l}\right)^2, \quad X_k(x) = \sin\left(\frac{k\pi x}{l}\right), \quad k = 1, 2, 3, \dots$$

2. **Vaqt tenglamasi:**
   $$T''_k(t) + \left(\frac{k\pi a}{l}\right)^2 T_k(t) = 0 \implies T_k(t) = A_k \cos\left(\frac{k\pi a t}{l}\right) + B_k \sin\left(\frac{k\pi a t}{l}\right)$$

3. **Superpozitsiya prinsipi bo'yicha umumiy yechim:**
   $$u(x, t) = \sum_{k=1}^{\infty} \left( A_k \cos\left(\frac{k\pi a t}{l}\right) + B_k \sin\left(\frac{k\pi a t}{l}\right) \right) \sin\left(\frac{k\pi x}{l}\right)$$
   bu yerda $A_k$ va $B_k$ koeffitsiyentlar $\varphi(x)$ va $\psi(x)$ funksiyalarning Fure sinus-qatori koeffitsiyentlaridir.

---

### 4. Issiqlik o'tkazuvchanlik tenglamasi

Yon sirti izolyatsiyalangan sterjenda issiqlik tarqalishi:
$$\frac{\partial u}{\partial t} = a^2 \frac{\partial^2 u}{\partial x^2}, \quad u(0, t) = 0, \quad u(l, t) = 0, \quad u(x, 0) = f(x)$$

Fure usuli bo'yicha yechim quyidagi eksponensial so'nuvchi qator shaklida bo'ladi:
$$u(x, t) = \sum_{k=1}^{\infty} c_k e^{-\left(\frac{k\pi a}{l}\right)^2 t} \sin\left(\frac{k\pi x}{l}\right)$$
$$c_k = \frac{2}{l} \int_0^l f(x) \sin\left(\frac{k\pi x}{l}\right) dx$$

---

## 📝 Qadamma-qadam Yechilgan Amaliy Misollar

### 1-misol: Cheksiz torda to'lqin tarqalishi (D'Alamber)
$$u_{tt} = 4 u_{xx}, \quad u(x, 0) = \sin x, \quad u_t(x, 0) = 0$$

**Yechish:**
1. Parametrlarni aniqlaymiz:
   $$a^2 = 4 \implies a = 2$$
   $$\varphi(x) = \sin x, \quad \psi(x) = 0$$
2. D'Alamber formulasini qo'llaymiz:
   $$u(x, t) = \frac{\varphi(x - 2t) + \varphi(x + 2t)}{2} + \frac{1}{4}\int_{x-2t}^{x+2t} 0 \, ds$$
   $$u(x, t) = \frac{\sin(x - 2t) + \sin(x + 2t)}{2}$$
3. Trigonometrik yig'indi formulasidan foydalanamiz:
   $$\sin(\alpha) + \sin(\beta) = 2 \sin\frac{\alpha+\beta}{2} \cos\frac{\alpha-\beta}{2}$$
   $$u(x, t) = \sin x \cos(2t)$$
   Bu turuvchi to'lqin (standing wave) tebranishidir!

**Javob:** $u(x, t) = \sin x \cos(2t)$.

---

### 2-misol: Boshlang'ich tezlik mavjud bo'lgan Koshi masalasi
$$u_{tt} = u_{xx}, \quad u(x, 0) = x^2, \quad u_t(x, 0) = \cos x$$

**Yechish:**
1. Bu yerda $a = 1, \quad \varphi(x) = x^2, \quad \psi(x) = \cos x$.
2. D'Alamber formulasiga qo'yamiz:
   $$u(x, t) = \frac{(x - t)^2 + (x + t)^2}{2} + \frac{1}{2} \int_{x - t}^{x + t} \cos(s) ds$$
3. Birinchi hadni soddalashtiramiz:
   $$\frac{(x^2 - 2xt + t^2) + (x^2 + 2xt + t^2)}{2} = \frac{2x^2 + 2t^2}{2} = x^2 + t^2$$
4. Integralni hisoblaymiz:
   $$\frac{1}{2} \left[ \sin(s) \right]_{x - t}^{x + t} = \frac{1}{2} \big( \sin(x + t) - \sin(x - t) \big)$$
   Trigonometrik ayirma bo'yicha: $\sin(x + t) - \sin(x - t) = 2 \cos x \sin t$.
   Demak: $\frac{1}{2} \cdot 2 \cos x \sin t = \cos x \sin t$.
5. Natijalarni qo'shamiz:
   $$u(x, t) = x^2 + t^2 + \cos x \sin t$$

**Javob:** $u(x, t) = x^2 + t^2 + \cos x \sin t$.

---

### 3-misol: Mahkamlangan tor tebranishi (Fure usuli)
Uzunligi $l = \pi$ bo'lgan torning erkin tebranishi berilgan:
$$u_{tt} = u_{xx}, \quad u(0, t) = u(\pi, t) = 0$$
$$u(x, 0) = \sin(2x), \quad u_t(x, 0) = 3\sin(4x)$$

**Yechish:**
1. Parametrlar: $l = \pi, a = 1$.
   Umumiy yechim:
   $$u(x, t) = \sum_{k=1}^{\infty} \big( A_k \cos(kt) + B_k \sin(kt) \big) \sin(kx)$$
2. $t = 0$ da:
   $$u(x, 0) = \sum_{k=1}^\infty A_k \sin(kx) = \sin(2x)$$
   Garmonikalarni solishtirsak:
   - $k = 2$ da: $A_2 = 1$;
   - Barcha boshqa $k \neq 2$ lar uchun: $A_k = 0$.
3. Boshlang'ich tezlik sharti:
   $$u_t(x, 0) = \sum_{k=1}^\infty k B_k \sin(kx) = 3\sin(4x)$$
   Garmonikalarni solishtiramiz:
   - $k = 4$ da: $4 B_4 = 3 \implies B_4 = \frac{3}{4}$;
   - Barcha boshqa $k \neq 4$ lar uchun: $B_k = 0$.
4. Qator faqat ikkita haddan iborat bo'lib qoladi:
   $$u(x, t) = \cos(2t) \sin(2x) + \frac{3}{4} \sin(4t) \sin(4x)$$

**Javob:** $u(x, t) = \cos(2t) \sin(2x) + \frac{3}{4} \sin(4t) \sin(4x)$.

---

### 4-misol: Sterjenda issiqlik tarqalishi
$$u_t = u_{xx}, \quad 0 < x < \pi, \quad u(0, t) = u(\pi, t) = 0$$
$$u(x, 0) = 5\sin(x) - 2\sin(3x)$$

**Yechish:**
1. Bu yerda $a = 1, l = \pi$.
2. Fure formulasi bo'yicha:
   $$u(x, t) = \sum_{k=1}^{\infty} c_k e^{-k^2 t} \sin(kx)$$
3. $t = 0$ dagi boshlang'ich shart:
   $$u(x, 0) = \sum_{k=1}^{\infty} c_k \sin(kx) = 5\sin(x) - 2\sin(3x)$$
4. Koeffitsiyentlar to'g'ridan-to'g'ri aniqlanadi:
   $$c_1 = 5, \quad c_3 = -2, \quad c_k = 0 \quad (k \neq 1, 3)$$
5. Yechim:
   $$u(x, t) = 5 e^{-t} \sin(x) - 2 e^{-9t} \sin(3x)$$
   E'tibor bering: yuqori garmonika ($k=3$) $e^{-9t}$ tezlik bilan ancha tez so'nadi, vaqt o'tishi bilan faqat asosiy garmonika $5e^{-t}\sin(x)$ saqlanib qoladi.

**Javob:** $u(x, t) = 5 e^{-t} \sin(x) - 2 e^{-9t} \sin(3x)$.

---

## ⚠️ Talabalar Ko'p Yo'l Qo'yadigan Xatolar

1. **D'Alamber formulasidagi $a$ koeffitsiyentini unutish:**
   Integral oldidagi $\frac{1}{2a}$ ko'paytuvchida $a$ ni yozishni unutish yoki argumentdagi $x \pm at$ o'rniga $x \pm t$ deb ketish jiddiy xatodir.
2. **Fure usulida boshlang'ich tezlik koeffitsiyentlari:**
   $u_t(x, 0)$ qatorida hosila olinganda har bir had oldiga $\frac{k\pi a}{l}$ ko'paytuvchisi chiqadi. Shuning uchun $k B_k = b_k \implies B_k = \frac{b_k}{k}$ bo'lishi kerak. Ko'pchilik $B_k = b_k$ deb yozib qo'yadi.
3. **To'lqin va Issiqlik tenglamasini qorishtirish:**
   To'lqin tenglamasida ikkinchi tartibli hosila $u_{tt}$ bo'lib, vaqt bo'yicha tebranuvchi yechimlar ($\cos \omega t, \sin \omega t$) hosil bo'ladi. Issiqlik tenglamasida esa 1-tartibli $u_t$ bo'lib, yechim eksponensial so'nadi ($e^{-\lambda t}$).

---

## 🎯 Mustaqil Yechish Uchun Masalalar

1. D'Alamber formulasi yordamida Koshi masalasini yeching:
   $$u_{tt} = 9 u_{xx}, \quad u(x, 0) = \cos(2x), \quad u_t(x, 0) = 0$$
   *Javob:* $u(x, t) = \cos(2x) \cos(6t)$.

2. Cheksiz torda tebranishni toping:
   $$u_{tt} = 4 u_{xx}, \quad u(x, 0) = 0, \quad u_t(x, 0) = 8x$$
   *Javob:* $u(x, t) = 8xt$.

3. Mahkamlangan tor tebranishi tenglamasini Fure usulida yeching:
   $$u_{tt} = 4 u_{xx}, \quad 0 < x < \pi, \quad u(0, t) = u(\pi, t) = 0$$
   $$u(x, 0) = 4\sin(3x), \quad u_t(x, 0) = 0$$
   *Javob:* $u(x, t) = 4\cos(6t) \sin(3x)$.

4. Issiqlik o'tkazuvchanlik masalasini yeching:
   $$u_t = 4 u_{xx}, \quad 0 < x < \pi, \quad u(0, t) = u(\pi, t) = 0$$
   $$u(x, 0) = 3\sin(2x)$$
   *Javob:* $u(x, t) = 3 e^{-16t} \sin(2x)$.

---

## 💡 Xulosa va Imtihon Maslahatlari

- Matematik fizika tenglamalarida oraliqning cheksiz yoki chegaralanganligiga qarang: cheksiz oraliqda ($-\infty < x < \infty$) — **D'Alamber formulasi**, chegaralangan oraliqda ($0 \le x \le l$) — **Fure usuli** qo'llaniladi.
- Agar boshlang'ich funksiyalar $\sin(kx)$ yoki $\cos(kx)$ orqali berilgan bo'lsa, murakkab Fure integrallarini hisoblab o'tirmang — to'g'ridan-to'g'ri garmonika koeffitsiyentlarini solishtirib toping.
