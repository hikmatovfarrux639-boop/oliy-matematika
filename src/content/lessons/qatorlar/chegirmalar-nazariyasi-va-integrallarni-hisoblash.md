---
title: "Koshi chegirmalar nazariyasi va xosmas integrallarni hisoblash"
description: "Chegirma (vıchet) ta'rifi, qutblardagi chegirmalarni hisoblash qoidalari va murakkab trigonometrik hamda xosmas integrallar yechimi."
module: "qatorlar"
order: 14
---

## 📌 Kirish va Fizik/Texnik Mohiyati

Klassik matematik analizda ba'zi aniq va xosmas integrallarni Nyuton-Leybnits formulasi orqali hisoblash deyarli imkonsizdir, chunki ularning boshlang'ich funksiyalari elementar funksiyalarda mavjud emas (masalan, $\int_{-\infty}^\infty \frac{dx}{x^4+1}$ yoki $\int_{-\infty}^\infty \frac{\cos x}{x^2+1}dx$). Biroq kompleks analiz olamiga qadam qo'yilsa, bu kabi murakkab integrallar bir necha qatorda osonlikcha yechiladi!

Bunga sabab buyuk fransuz matematigi Ogyusten Lui Koshi (1789–1857) tomonidan yaratilgan **chegirmalar nazariyasi** (fransuzcha *résidu*, ruscha *вычет*) hisoblanadi. Fizikada ushbu nazariya elektrodinamikadagi zaryadlar maydonini integrallashda, kvant maydon nazariyasida Feynman diagrammalarini hisoblashda va aerodinamikada Jukovskiy ko'tarish kuchini aniqlashda eng qudratli matematik apparat sanaladi.

---

## 📐 Asosiy Nazariya, Qoidalar va Teoremalar

### 1. Chegirma (vıchet) tushunchasi

> **Ta'rif:**
> Bir qiymatli analitik $f(z)$ funksiyaning yakkalangan maxsus $z_0$ nuqtadagi **chegirmasi** (belgilanishi: $\operatorname{Res}[f(z), z_0]$) deb, $z_0$ nuqtani o'z ichiga olgan va boshqa maxsus nuqtalarni o'z ichiga olmagan yetarlicha kichik $\gamma$ yopiq kontur bo'yicha olingan integralning $\frac{1}{2\pi i}$ ga ko'paytmasiga aytiladi:
> $$\operatorname{Res}[f(z), z_0] = \frac{1}{2\pi i} \oint_{\gamma} f(z) dz$$

Loran qatori bilan bog'liqligi:
Funksiyaning $z_0$ atrofidagi Loran qatori $f(z) = \sum_{n=-\infty}^\infty c_n (z - z_0)^n$ bo'lsa, $\oint_\gamma (z - z_0)^n dz$ faqat $n = -1$ bo'lganda $2\pi i$ ga teng, qolgan barcha butun $n$ larda esa 0 ga teng. Shuning uchun:
$$\operatorname{Res}[f(z), z_0] = c_{-1}$$
ya'ni chegirma — Loran qatoridagi $(z - z_0)^{-1}$ hadining koeffitsiyentidir!

---

### 2. Chegirmalarni hisoblashning amaliy qoidalari

1. **Bartaraf qilinadigan maxsus nuqtada:**
   Bosh qism yo'qligi sababli:
   $$\operatorname{Res}[f(z), z_0] = 0$$

2. **Oddiy qutbda ($m = 1$):**
   $$\operatorname{Res}[f(z), z_0] = \lim_{z \to z_0} (z - z_0) f(z)$$
   Agar $f(z) = \frac{P(z)}{Q(z)}$ ko'rinishida bo'lib, $P(z_0) \neq 0, Q(z_0) = 0$ va $Q'(z_0) \neq 0$ bo'lsa:
   $$\operatorname{Res}[f(z), z_0] = \frac{P(z_0)}{Q'(z_0)}$$

3. **$m$-tartibli karrali qutbda ($m \ge 2$):**
   $$\operatorname{Res}[f(z), z_0] = \frac{1}{(m - 1)!} \lim_{z \to z_0} \frac{d^{m-1}}{dz^{m-1}} \left[ (z - z_0)^m f(z) \right]$$

4. **O'ta maxsus nuqtada:**
   Loran qatoriga yoyish orqali to'g'ridan-to'g'ri $c_{-1}$ koeffitsiyenti o'qib olinadi.

---

### 3. Koshi chegirmalar teoremasi

> **Asosiy teorema:**
> Agar $f(z)$ funksiya chegarasi bo'lakli-silliq $\Gamma$ kontur bilan o'ralgan $D$ sohada chekli sondagi $z_1, z_2, \dots, z_n$ yakkalangan maxsus nuqtalardan tashqari barcha joyda analitik bo'lsa, u holda:
> $$\oint_{\Gamma} f(z) dz = 2\pi i \sum_{k=1}^{n} \operatorname{Res}[f(z), z_k]$$

---

### 4. Haqiqiy integrallarni hisoblash usullari

1. **Trigonometrik integrallar:** $\int_0^{2\pi} R(\cos\theta, \sin\theta) d\theta$.
   $z = e^{i\theta}$ almashtirishi kiritiladi:
   $$\cos\theta = \frac{z + z^{-1}}{2}, \quad \sin\theta = \frac{z - z^{-1}}{2i}, \quad d\theta = \frac{dz}{iz}, \quad |z| = 1$$
   Integral birlik aylanadagi kontur integraliga aylanadi.

2. **Cheksiz oraliqdagi ratsional funksiyalar integrallari:** $\int_{-\infty}^\infty \frac{P(x)}{Q(x)} dx$.
   Agar $Q(x)$ haqiqiy o'qda nolga aylanmasa va maxraj darajasi surat darajasidan kamida 2 ga katta bo'lsa ($\operatorname{deg}(Q) \ge \operatorname{deg}(P) + 2$):
   $$\int_{-\infty}^{\infty} \frac{P(x)}{Q(x)} dx = 2\pi i \sum_{\operatorname{Im}(z_k) > 0} \operatorname{Res}\left[\frac{P(z)}{Q(z)}, z_k\right]$$
   Yig'indi faqat **yuqori yarim tekislikda** ($\operatorname{Im}(z_k) > 0$) yotuvchi qutblar bo'yicha olinadi.

---

## 📝 Qadamma-qadam Yechilgan Amaliy Misollar

### 1-misol: Kontur bo'yicha integralni chegirmalar orqali hisoblash
$$\oint_{|z| = 2} \frac{z^2 + 1}{z(z - 1)(z - 3)} dz$$

**Yechish:**
1. Maxrajning nollari (maxsus nuqtalar):
   $$z_1 = 0, \quad z_2 = 1, \quad z_3 = 3$$
2. Kontur ichida yotishini tekshiramiz ($|z| = 2$ radiusi 2 bo'lgan aylana):
   - $|z_1| = |0| = 0 < 2 \implies z_1 \in \text{ichki}$;
   - $|z_2| = |1| = 1 < 2 \implies z_2 \in \text{ichki}$;
   - $|z_3| = |3| = 3 > 2 \implies z_3 \notin \text{kontur tashqarisida}$ (hisobga olinmaydi!).
3. Oddiy qutblardagi chegirmalarni hisoblaymiz:
   $$\operatorname{Res}[f, 0] = \lim_{z \to 0} z \cdot \frac{z^2 + 1}{z(z - 1)(z - 3)} = \frac{0^2 + 1}{(0 - 1)(0 - 3)} = \frac{1}{3}$$
   $$\operatorname{Res}[f, 1] = \lim_{z \to 1} (z - 1) \cdot \frac{z^2 + 1}{z(z - 1)(z - 3)} = \frac{1^2 + 1}{1 \cdot (1 - 3)} = \frac{2}{-2} = -1$$
4. Koshi teoremasi bo'yicha:
   $$\oint_{|z|=2} f(z) dz = 2\pi i \left( \frac{1}{3} + (-1) \right) = 2\pi i \left(-\frac{2}{3}\right) = -\frac{4\pi i}{3}$$

**Javob:** $-\frac{4\pi i}{3}$.

---

### 2-misol: Karrali qutb qatnashgan integral
$$\oint_{|z| = 2} \frac{e^z}{(z - 1)^2 (z + 3)} dz$$

**Yechish:**
1. Maxsus nuqtalar: $z = 1$ (2-tartibli qutb) va $z = -3$ (oddiy qutb).
2. $|z| = 2$ kontur ichida faqat $z = 1$ yotadi, chunki $|-3| = 3 > 2$.
3. 2-tartibli qutb formulasini qo'llaymiz ($m = 2$):
   $$\operatorname{Res}[f, 1] = \frac{1}{(2 - 1)!} \lim_{z \to 1} \frac{d}{dz}\left[ (z - 1)^2 \cdot \frac{e^z}{(z - 1)^2 (z + 3)} \right]$$
   $$\operatorname{Res}[f, 1] = \lim_{z \to 1} \frac{d}{dz}\left( \frac{e^z}{z + 3} \right)$$
4. Kasr hosilasi:
   $$\frac{d}{dz}\left( \frac{e^z}{z + 3} \right) = \frac{e^z(z + 3) - e^z \cdot 1}{(z + 3)^2} = \frac{e^z(z + 2)}{(z + 3)^2}$$
5. $z \to 1$ dagi limit:
   $$\operatorname{Res}[f, 1] = \frac{e^1(1 + 2)}{(1 + 3)^2} = \frac{3e}{16}$$
6. Integral qiymati:
   $$I = 2\pi i \cdot \frac{3e}{16} = \frac{3\pi e i}{8}$$

**Javob:** $\frac{3\pi e i}{8}$.

---

### 3-misol: Haqiqiy xosmas integralni hisoblash
$$I = \int_{-\infty}^{\infty} \frac{dx}{x^4 + 1}$$

**Yechish:**
1. Kompleks funksiyaga o'tamiz: $f(z) = \frac{1}{z^4 + 1}$.
   Maxraj darajasi 4, surat darajasi 0 ($4 \ge 0 + 2$).
2. Qutblarni topamiz:
   $$z^4 + 1 = 0 \implies z^4 = -1 = e^{i\pi} \implies z_k = e^{i\frac{\pi + 2k\pi}{4}}, \quad k = 0, 1, 2, 3$$
   - $z_0 = e^{i\pi/4} = \frac{\sqrt{2}}{2} + i\frac{\sqrt{2}}{2} \quad (\operatorname{Im} > 0)$
   - $z_1 = e^{i 3\pi/4} = -\frac{\sqrt{2}}{2} + i\frac{\sqrt{2}}{2} \quad (\operatorname{Im} > 0)$
   - $z_2, z_3$ pastki yarim tekislikda yotadi ($\operatorname{Im} < 0$).
3. Yuqori yarim tekislikdagi oddiy qutblar bo'yicha chegirmalar:
   $$\operatorname{Res}[f, z_k] = \frac{1}{(z^4 + 1)'}\Bigg|_{z_k} = \frac{1}{4z_k^3} = \frac{z_k}{4z_k^4} = \frac{z_k}{4(-1)} = -\frac{z_k}{4}$$
4. Chegirmalar yig'indisi:
   $$\sum \operatorname{Res} = -\frac{1}{4}(z_0 + z_1) = -\frac{1}{4}\left( \frac{\sqrt{2}}{2} + i\frac{\sqrt{2}}{2} - \frac{\sqrt{2}}{2} + i\frac{\sqrt{2}}{2} \right) = -\frac{1}{4}(i\sqrt{2}) = -\frac{i\sqrt{2}}{4}$$
5. Xosmas integral:
   $$I = 2\pi i \left(-\frac{i\sqrt{2}}{4}\right) = -2\pi i^2 \frac{\sqrt{2}}{4} = \frac{2\pi \sqrt{2}}{4} = \frac{\pi\sqrt{2}}{2}$$

**Javob:** $\frac{\pi\sqrt{2}}{2}$.

---

### 4-misol: Trigonometrik integral
$$I = \int_{0}^{2\pi} \frac{d\theta}{2 + \cos\theta}$$

**Yechish:**
1. $z = e^{i\theta}$ almashtirishi kiritamiz:
   $$\cos\theta = \frac{z^2 + 1}{2z}, \quad d\theta = \frac{dz}{iz}, \quad |z| = 1$$
2. O'rniga qo'yamiz:
   $$I = \oint_{|z|=1} \frac{\frac{dz}{iz}}{2 + \frac{z^2 + 1}{2z}} = \oint_{|z|=1} \frac{2 dz}{i(4z + z^2 + 1)} = \frac{2}{i} \oint_{|z|=1} \frac{dz}{z^2 + 4z + 1}$$
3. Maxraj ildizlari:
   $$z^2 + 4z + 1 = 0 \implies z_{1,2} = \frac{-4 \pm \sqrt{16 - 4}}{2} = -2 \pm \sqrt{3}$$
   - $z_1 = -2 + \sqrt{3} \approx -0.268 \implies |z_1| < 1$ (aylana ichida);
   - $z_2 = -2 - \sqrt{3} \approx -3.732 \implies |z_2| > 1$ (aylana tashqarisida).
4. $z_1$ dagi chegirma:
   $$\operatorname{Res}\left[\frac{1}{z^2 + 4z + 1}, z_1\right] = \frac{1}{(2z + 4)}\Bigg|_{z_1} = \frac{1}{2(-2 + \sqrt{3}) + 4} = \frac{1}{2\sqrt{3}}$$
5. Koshi teoremasiga ko'ra:
   $$I = \frac{2}{i} \cdot 2\pi i \cdot \frac{1}{2\sqrt{3}} = \frac{2\pi}{\sqrt{3}}$$

**Javob:** $\frac{2\pi}{\sqrt{3}}$.

---

## ⚠️ Talabalar Ko'p Yo'l Qo'yadigan Xatolar

1. **Kontur tashqarisidagi maxsus nuqtalarni ham qo'shib yuborish:**
   Har doim maxsus nuqtaning modulini kontur chegarasi bilan solishtiring. Konturdan tashqarida yotgan nuqtalar Koshi teoremasidagi yig'indiga aslo kirmaydi!
2. **Haqiqiy xosmas integrallarda pastki yarim tekislik qutblarini hisoblash:**
   $\int_{-\infty}^\infty$ integrallarida yopiq yarim doira yuqori yarim tekislikda yasaladi, shuning uchun faqat $\operatorname{Im}(z_k) > 0$ bo'lgan qutblar olinadi.
3. **$\frac{P(z)}{Q'(z)}$ formulasini karrali qutbga qo'llab yuborish:**
   Ushbu sodda formula faqat va faqat **oddiy qutblar** ($Q'(z_0) \neq 0$) uchun o'rinlidir. Agar qutb 2 yoki undan yuqori tartibli bo'lsa, hosilali umumiy formula ishlatilishi shart.

---

## 🎯 Mustaqil Yechish Uchun Masalalar

1. Kontur integralini chegirmalar yordamida hisoblang:
   $$\oint_{|z| = 3} \frac{z}{(z - 1)(z - 2)} dz$$
   *Javob:* $2\pi i (-1 + 2) = 2\pi i$.

2. O'ta maxsus nuqtadagi chegirmadan foydalanib integralni toping:
   $$\oint_{|z| = 1} z^2 e^{1/z} dz$$
   *Javob:* Loran qatorida $c_{-1} = \frac{1}{3!} = \frac{1}{6}$, shuning uchun integral $\frac{\pi i}{3}$.

3. Xosmas integralni hisoblang:
   $$\int_{-\infty}^{\infty} \frac{dx}{x^2 + 9}$$
   *Javob:* $\frac{\pi}{3}$.

4. Trigonometrik integralni kompleks integrallash orqali toping:
   $$\int_0^{2\pi} \frac{d\theta}{5 + 4\cos\theta}$$
   *Javob:* $\frac{2\pi}{3}$.

---

## 💡 Xulosa va Imtihon Maslahatlari

- Agar integral yopiq kontur bo'yicha berilgan bo'lsa, birinchi qadam — maxsus nuqtalarni topish va ularning kontur ichida yoki tashqarisida ekanligini chizmada tasavvur qilishdir.
- Butun tekislikdagi barcha maxsus nuqtalar bo'yicha chegirmalar yig'indisi (cheksizlikdagi chegirma bilan birga) har doim nolga teng: $\sum \operatorname{Res} = 0$. Bu qoidadan kontur tashqarisidagi chegirmalar kamroq bo'lganda hisoblashni yengillatish uchun foydalanish mumkin!
