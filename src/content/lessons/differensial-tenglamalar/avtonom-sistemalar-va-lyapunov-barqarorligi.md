---
title: "Avtonom sistemalar, fazoviy tekislik va Lyapunov barqarorligi"
description: "Muvozanat nuqtalari klassifikatsiyasi (tugun, egar, fokal, markaz), chiziqli yaqinlashish va Lyapunov funksiyasi metodi."
module: "differensial-tenglamalar"
order: 17
---

## 📌 Kirish va Fizik/Texnik Mohiyati

Amaliyotda fizik, biologik yoki muhandislik tizimlarini o'rganayotganda, ko'pincha tenglamaning analitik yechimini topishning imkoni bo'lmaydi yoki bunga ehtiyoj ham yo'q. Masalan, samolyotning avtopilot rejimi, kosmik apparat orbitasi, atom reaktoridagi zanjirli reaksiya yoki yurak qisqarish ritmini modellashtirishda muhandisni bitta asosiy savol qiziqtiradi: **"Tizim muvozanat holatidan biroz chetlatilsa, u yana o'z holatiga qaytadimi yoki xavfli darajada chetga chiqib ketadimi?"**

Ushbu savolga sifat tahlili (fazoviy portretlar) va buyuk rus matematigi Aleksandr Mixaylovich Lyapunov (1857–1918) tomonidan yaratilgan **barqarorlik nazariyasi** javob beradi. Ushbu mavzu zamonaviy kibernetika, avtomatlashtirilgan boshqaruv va robototexnikaning poydevori hisoblanadi.

---

## 📐 Asosiy Nazariya, Qoidalar va Teoremalar

### 1. Avtonom sistemalar va fazoviy tekislik

Vaqt $t$ o'ng tomonda oshkor qatnashmagan differensial tenglamalar sistemasi **avtonom sistema** deb ataladi:
$$\begin{cases} \frac{dx}{dt} = P(x, y) \\ \frac{dy}{dt} = Q(x, y) \end{cases}$$

Bunday tizimning holati $(x(t), y(t))$ nuqta orqali $(x, y)$ **fazoviy tekislikda** harakatlanuvchi traektoriya hosil qiladi. Traektoriyalarning yo'nalishi quyidagi tenglama bilan aniqlanadi:
$$\frac{dy}{dx} = \frac{Q(x, y)}{P(x, y)}$$

> **Ta'rif (Muvozanat nuqtasi):**
> Agar biror $(x_0, y_0)$ nuqtada harakat tezligi nolga teng bo'lsa, ya'ni:
> $$ P(x_0, y_0) = 0 \quad \text{va} \quad Q(x_0, y_0) = 0 $$
> u holda $(x_0, y_0)$ nuqta sistemaning **muvozanat (tinchlik yoki statsionar) nuqtasi** deyiladi.

---

### 2. Muvozanat nuqtalarining klassifikatsiyasi

Muvozanat nuqtasi koordinatalar boshida $(0, 0)$ joylashgan bo'lsin. Chiziqli yaqinlashish matritsasini (Yakobian) tuzamiz:
$$A = \begin{pmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{pmatrix} = \begin{pmatrix} \frac{\partial P}{\partial x} & \frac{\partial P}{\partial y} \\ \frac{\partial Q}{\partial x} & \frac{\partial Q}{\partial y} \end{pmatrix}_{(0,0)}$$

Xarakteristik tenglama:
$$\det(A - \lambda I) = \lambda^2 - \sigma \lambda + \Delta = 0$$
bu yerda $\sigma = \text{tr}(A) = a_{11} + a_{22}$ (matritsa izi), $\Delta = \det(A) = a_{11}a_{22} - a_{12}a_{21}$ (determinant), $D = \sigma^2 - 4\Delta$ (diskriminant).

| Shart | Xos sonlar $\lambda_1, \lambda_2$ | Muvozanat nuqtasi turi | Barqarorligi |
| :--- | :--- | :--- | :--- |
| $\Delta < 0$ | Haqiqiy, qarama-qarshi ishorali ($\lambda_1 < 0 < \lambda_2$) | **Egar (Saddle)** | Har doim nobarqaror |
| $\Delta > 0, D > 0, \sigma < 0$ | Haqiqiy, bir xil manfiy ($\lambda_2 < \lambda_1 < 0$) | **Barqaror tugun (Stable node)** | Asimptotik barqaror |
| $\Delta > 0, D > 0, \sigma > 0$ | Haqiqiy, bir xil musbat ($\lambda_2 > \lambda_1 > 0$) | **Nobarqaror tugun (Unstable node)** | Nobarqaror |
| $\Delta > 0, D < 0, \sigma < 0$ | Kompleks qo'shma, $\alpha < 0$ ($\lambda_{1,2} = \alpha \pm i\beta$) | **Barqaror fokal (Stable focus)** | Asimptotik barqaror (spiral burilish) |
| $\Delta > 0, D < 0, \sigma > 0$ | Kompleks qo'shma, $\alpha > 0$ ($\lambda_{1,2} = \alpha \pm i\beta$) | **Nobarqaror fokal (Unstable focus)** | Nobarqaror (tarqaluvchi spiral) |
| $\Delta > 0, \sigma = 0$ | Sof mavhum ($\lambda_{1,2} = \pm i\beta$) | **Markaz (Center)** | Neytral barqaror (elliptik orbitalar) |

---

### 3. Lyapunov barqarorligi va Lyapunovning to'g'ridan-to'g'ri metodi

> **Lyapunov ma'nosidagi barqarorlik:**
> Agar har qanday $\varepsilon > 0$ uchun shunday $\delta(\varepsilon) > 0$ topilsaki, boshlang'ich og'ish $\|x(0)\| < \delta$ bo'lganda, barcha $t \ge 0$ uchun $\|x(t)\| < \varepsilon$ bajarilsa, muvozanat nuqta **barqaror** deyiladi.
> Agar qo'shimcha ravishda $\lim_{t \to \infty} \|x(t)\| = 0$ bo'lsa, u **asimptotik barqaror** deyiladi.

**Lyapunovning ikkinchi (to'g'ridan-to'g'ri) metodi:**
Muvozanat nuqtasi atrofida aniqlangan, uzluksiz xususiy hosilalarga ega $V(x, y)$ funksiya quyidagi shartni qanoatlantirsa, u **musbat aniqlangan Lyapunov funksiyasi** deyiladi:
$$V(0, 0) = 0 \quad \text{va} \quad (x, y) \neq (0, 0) \implies V(x, y) > 0$$

Uning sistema bo'yicha to'liq hosilasi quyidagicha hisoblanadi:
$$\dot{V} = \frac{dV}{dt} = \frac{\partial V}{\partial x} P(x, y) + \frac{\partial V}{\partial y} Q(x, y)$$

> **Teoremalar:**
> 1. Agar $\dot{V} \le 0$ (yarim manfiy aniqlangan) bo'lsa, muvozanat holati **barqaror**.
> 2. Agar $\dot{V} < 0$ (qat'iy manfiy aniqlangan) bo'lsa, muvozanat holati **asimptotik barqaror**.
> 3. Agar $\dot{V} > 0$ (qat'iy musbat aniqlangan) bo'lsa, muvozanat holati **nobarqaror**.

---

## 📝 Qadamma-qadam Yechilgan Amaliy Misollar

### 1-misol: Tugun turidagi muvozanat nuqtasi
$$\begin{cases} \dot{x} = 2x + y \\ \dot{y} = x + 2y \end{cases}$$

**Yechish:**
1. Muvozanat nuqtasi: $2x + y = 0, x + 2y = 0 \implies (0, 0)$.
2. Matritsani yozamiz:
   $$A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$$
3. Xarakteristik ko'rsatkichlarni topamiz:
   $$\sigma = \text{tr}(A) = 2 + 2 = 4$$
   $$\Delta = \det(A) = 2\cdot 2 - 1\cdot 1 = 3 > 0$$
   $$D = \sigma^2 - 4\Delta = 4^2 - 4\cdot 3 = 16 - 12 = 4 > 0$$
4. Xarakteristik ildizlar:
   $$\lambda_{1,2} = \frac{4 \pm \sqrt{4}}{2} = \frac{4 \pm 2}{2} \implies \lambda_1 = 3, \quad \lambda_2 = 1$$
5. Ildizlarning ikkalasi ham musbat haqiqiy sonlar ($\lambda_1 > \lambda_2 > 0$). Demak, faza traektoriyalari koordinata boshidan uzoqlashadi.

**Javob:** $(0, 0)$ nuqta — **nobarqaror tugun** (unstable node).

---

### 2-misol: Egar turidagi muvozanat nuqtasi
$$\begin{cases} \dot{x} = x + 3y \\ \dot{y} = 2x - 4y \end{cases}$$

**Yechish:**
1. Koeffitsiyentlar matritsasi:
   $$A = \begin{pmatrix} 1 & 3 \\ 2 & -4 \end{pmatrix}$$
2. Determinantni hisoblaymiz:
   $$\Delta = \det(A) = 1\cdot(-4) - 3\cdot 2 = -4 - 6 = -10 < 0$$
3. $\Delta < 0$ bo'lganligi sababli, xos sonlar har doim qarama-qarshi ishorali haqiqiy sonlar bo'ladi:
   $$\lambda^2 - (-3)\lambda - 10 = 0 \implies \lambda^2 + 3\lambda - 10 = 0 \implies (\lambda + 5)(\lambda - 2) = 0$$
   $$\lambda_1 = 2 > 0, \quad \lambda_2 = -5 < 0$$
4. Bitta musbat va bitta manfiy xos son bo'lganda, bir yo'nalishda traektoriyalar yaqinlashadi, boshqa yo'nalishda esa cheksizlikka qochadi.

**Javob:** $(0, 0)$ nuqta — **egar (saddle)**, muvozanat holati nobarqaror.

---

### 3-misol: Nochiziqli sistemani birinchi yaqinlashish bo'yicha tekshirish
$$\begin{cases} \dot{x} = -x + y - x^2 \\ \dot{y} = -x - 2y + y^2 \end{cases}$$

**Yechish:**
1. $(0, 0)$ muvozanat nuqtasi ekanligi ravshan: $P(0,0)=0, Q(0,0)=0$.
2. Nochiziqli hadlarni tashlab yuborib, Yakobian hosilalarni hisoblaymiz:
   $$\frac{\partial P}{\partial x} = -1 - 2x \implies a_{11} = -1$$
   $$\frac{\partial P}{\partial y} = 1 \implies a_{12} = 1$$
   $$\frac{\partial Q}{\partial x} = -1 \implies a_{21} = -1$$
   $$\frac{\partial Q}{\partial y} = -2 + 2y \implies a_{22} = -2$$
3. Birinchi yaqinlashish matritsasi:
   $$A = \begin{pmatrix} -1 & 1 \\ -1 & -2 \end{pmatrix}$$
4. Parametrlarni hisoblaymiz:
   $$\sigma = -1 + (-2) = -3 < 0$$
   $$\Delta = (-1)(-2) - (1)(-1) = 2 + 1 = 3 > 0$$
   $$D = \sigma^2 - 4\Delta = (-3)^2 - 4\cdot 3 = 9 - 12 = -3 < 0$$
5. Xos sonlar:
   $$\lambda_{1,2} = \frac{-3 \pm i\sqrt{3}}{2} \implies \alpha = -\frac{3}{2} < 0, \quad \beta = \frac{\sqrt{3}}{2}$$
   Haqiqiy qismi manfiy bo'lgan kompleks ildizlar hosil bo'ldi.

**Javob:** $(0, 0)$ nuqta — **barqaror fokal (fokus)**, muvozanat holati asimptotik barqaror.

---

### 4-misol: Lyapunov funksiyasi yordamida nochiziqli tizim barqarorligini isbotlash
$$\begin{cases} \dot{x} = -x - y^3 \\ \dot{y} = x^3 - y \end{cases}$$

**Yechish:**
1. Chiziqli yaqinlashishni tekshirsak: $\dot{x} = -x, \dot{y} = -y$ — ikkala xos son $\lambda_{1,2} = -1 < 0$. Biroq Lyapunovning to'g'ridan-to'g'ri metodi nochiziqlikning ixtiyoriy sohasida to'liq kafolat beradi.
2. Sinov uchun Lyapunov funksiyasini to'rtinchi darajali simmetrik shaklda tanlaymiz:
   $$V(x, y) = x^4 + y^4$$
   Ravshanki, $V(0, 0) = 0$ va $(x, y) \neq (0, 0)$ uchun $V(x, y) > 0$ (qat'iy musbat aniqlangan).
3. Sistema bo'yicha to'liq hosilani hisoblaymiz:
   $$\dot{V} = \frac{\partial V}{\partial x}\dot{x} + \frac{\partial V}{\partial y}\dot{y} = 4x^3 \dot{x} + 4y^3 \dot{y}$$
4. Tenglama ifodalarini qo'yamiz:
   $$\dot{V} = 4x^3(-x - y^3) + 4y^3(x^3 - y)$$
   $$\dot{V} = -4x^4 - 4x^3 y^3 + 4y^3 x^3 - 4y^4$$
5. Qarama-qarshi nochiziqli hadlar o'zaro qisqarib ketadi:
   $$\dot{V} = -4(x^4 + y^4) = -4 V(x, y)$$
6. Barcha $(x, y) \neq (0, 0)$ nuqtalarda $\dot{V} < 0$ qat'iy manfiy.
   Lyapunov teoremasiga ko'ra, tizim asimptotik barqarordir!

**Javob:** Muvozanat nuqtasi butun tekislikda **asimptotik barqaror**.

---

## ⚠️ Talabalar Ko'p Yo'l Qo'yadigan Xatolar

1. **"Markaz" holatida chiziqli yaqinlashishga ishonish:**
   Agar chiziqlashtirilgan matritsa xos sonlari sof mavhum bo'lsa ($\lambda = \pm i\beta$, markaz), bu faqat chiziqli sistema uchun markazdir! Yuqori tartibli nochiziq hadlar markazni zaif barqaror yoki nobarqaror fokalga aylantirib qo'yishi mumkin. Bunday holda Lyapunov funksiyasi shart.
2. **Lyapunov funksiyasi hosilasida zanjir qoidasini unutish:**
   $\dot{V}$ ni hisoblashda ko'pchilik xatolik bilan faqat bitta koordinatani differensiallaydi. Esda tuting: $\dot{V} = \frac{\partial V}{\partial x}\dot{x} + \frac{\partial V}{\partial y}\dot{y}$.
3. **$\Delta < 0$ bo'lganda $\sigma$ ni hisoblashga vaqt sarflash:**
   Agar determinant manfiy bo'lsa ($\Delta < 0$), matritsa izi $\sigma$ ning qanday bo'lishidan qat'i nazar, muvozanat nuqtasi har doim **egar** bo'ladi va nobarqarordir.

---

## 🎯 Mustaqil Yechish Uchun Masalalar

1. Chiziqli sistemaning muvozanat nuqtasi turini va barqarorligini aniqlang:
   $$\begin{cases} \dot{x} = -2x - y \\ \dot{y} = x - 4y \end{cases}$$
   *Javob:* $\lambda_1 = \lambda_2 = -3 < 0$, aynigan barqaror tugun (asimptotik barqaror).

2. Faza portretini tekshiring:
   $$\begin{cases} \dot{x} = 3x - 2y \\ \dot{y} = 4x - y \end{cases}$$
   *Javob:* $\Delta = 5 > 0, \sigma = 2 > 0, D = -16 < 0$, nobarqaror fokal (unstable focus).

3. Sistema muvozanat nuqtasini tahlil qiling:
   $$\begin{cases} \dot{x} = y \\ \dot{y} = 4x \end{cases}$$
   *Javob:* $\Delta = -4 < 0$, egar nuqta (saddle, nobarqaror).

4. $V(x, y) = x^2 + y^2$ Lyapunov funksiyasidan foydalanib quyidagi sistemaning asimptotik barqarorligini isbotlang:
   $$\begin{cases} \dot{x} = -x - 2y^2 \\ \dot{y} = 2xy - y^3 \end{cases}$$
   *Javob:* $\dot{V} = -2(x^2 + y^4) \le 0$, muvozanat holati asimptotik barqaror.

---

## 💡 Xulosa va Imtihon Maslahatlari

- 2-o'lchamli sistemalarda klassifikatsiyaning kaliti: $\Delta = \det(A)$, $\sigma = \text{tr}(A)$ va $D = \sigma^2 - 4\Delta$. Ushbu uchta sonni topsangiz, javob 1 daqiqada tayyor bo'ladi.
- Agar savolda "chiziqli yaqinlashish bo'yicha tekshiring" deyilsa, Yakobian tuziladi va xos sonlar topiladi.
- Agar "Lyapunov metodi bilan" deyilsa, ko'pincha $V(x, y) = a x^2 + b y^2$ yoki $a x^4 + b y^4$ ko'rinishidagi kvadratik/to'rtinchi darajali funksiyalar yordam beradi.
