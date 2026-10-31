---
title: "Laplas almashtirishi va operatsion hisob yordamida diff tenglamalarni yechish"
description: "Koshi masalasini algebraik tenglamaga aylantirib yechish: Laplas to'g'ri va teskari almashtirishlari, o'ram (konvolyutsiya) teoremasi."
module: "differensial-tenglamalar"
order: 16
---

## 📌 Kirish va Fizik/Texnik Mohiyati

Klassik matematik tahlil usullarida differensial tenglamalarni yechish ikki bosqichdan iborat: avval umumiy yechim topiladi, so'ngra berilgan boshlang'ich shartlar asosida integrallash doimiylari aniqlanadi. Biroq murakkab boshqaruv tizimlari, elektrotexnika (RLC-zanjirlari) va mexanik tebranishlarda tashqi kuchlar ko'pincha sakrashli, davriy impulslar yoki uzilishli funksiyalar (Xevisayd funksiyasi $\eta(t)$, Dirak delta-funksiyasi $\delta(t)$) shaklida bo'ladi. Bunday hollarda klassik usullar nihoyatda og'ir va noqulaydir.

XIX asr oxirida ingliz muhandisi Oliver Xevisayd tomonidan asos solingan va fransuz olimi Per-Simon Laplas integral almashtirishi asosida qat'iy isbotlangan **operatsion hisob** metodi inqilobiy yondashuvni taqdim etdi:
> **Asosiy falsafa:** Differensiallash va integrallash amallari tasvirlar fazosida oddiy ko'paytirish va bo'lish kabi sof algebraik amallarga aylanadi. Koshi masalasi esa boshlang'ich shartlari bilan birgalikda to'g'ridan-to'g'ri yechiladi!

---

## 📐 Asosiy Nazariya, Qoidalar va Teoremalar

### 1. Asl (original) va Tasvir (obraz) tushunchasi

$t \ge 0$ da aniqlangan $f(t)$ funksiya quyidagi shartlarni qanoatlantirsa, u **asl funksiya** (original) deb ataladi:
1. $t < 0$ da $f(t) \equiv 0$;
2. $t \ge 0$ o'qining har qanday chekli oralig'ida faqat chekli sondagi birinchi tur uzilish nuqtalariga ega bo'lishi mumkin;
3. $t \to \infty$ da eksponensial o'sish tartibi bilan chegaralangan: $|f(t)| \le M e^{s_0 t}$ ($M > 0, s_0 \ge 0$).

> **Ta'rif (Laplas almashtirishi):**
> $f(t)$ asl funksiyaning **Laplas tasviri** deb kompleks $p = s + i\sigma$ parametrga bog'liq quyidagi xosmas integralga aytiladi:
> $$F(p) = \mathcal{L}\{f(t)\} = \int_{0}^{\infty} f(t) e^{-pt} dt$$
> Bu integral $\text{Re}(p) > s_0$ yarim tekislikda yaqinlashadi va analitik funksiya bo'ladi.

Teskari o'tish esa **teskari Laplas almashtirishi** orqali amalga oshiriladi:
$$f(t) = \mathcal{L}^{-1}\{F(p)\} = \frac{1}{2\pi i} \int_{\sigma - i\infty}^{\sigma + i\infty} F(p) e^{pt} dp$$

---

### 2. Standart elementar funksiyalar tasvirlari jadvali

| Asl funksiya: $f(t)$ | Laplas tasviri: $F(p) = \mathcal{L}\{f(t)\}$ |
| :--- | :--- |
| $1$ (yoki $\eta(t)$ Xevisayd funksiyasi) | $\frac{1}{p}$ |
| $t^n \quad (n \in \mathbb{N})$ | $\frac{n!}{p^{n+1}}$ |
| $e^{at}$ | $\frac{1}{p - a}$ |
| $\sin(\omega t)$ | $\frac{\omega}{p^2 + \omega^2}$ |
| $\cos(\omega t)$ | $\frac{p}{p^2 + \omega^2}$ |
| $\sinh(\omega t)$ | $\frac{\omega}{p^2 - \omega^2}$ |
| $\cosh(\omega t)$ | $\frac{p}{p^2 - \omega^2}$ |

---

### 3. Operatsion hisobning fundamental teoremalari

1. **Chiziqlilik xossasi:**
   $$\mathcal{L}\{\alpha f(t) + \beta g(t)\} = \alpha F(p) + \beta G(p)$$

2. **Hosilaning tasviri (Differensial tenglamalarni yechish kaliti):**
   Agar $\mathcal{L}\{f(t)\} = F(p)$ bo'lsa:
   $$\mathcal{L}\{f'(t)\} = p F(p) - f(0)$$
   $$\mathcal{L}\{f''(t)\} = p^2 F(p) - p f(0) - f'(0)$$
   $$\mathcal{L}\{f^{(n)}(t)\} = p^n F(p) - p^{n-1} f(0) - p^{n-2} f'(0) - \dots - f^{(n-1)}(0)$$
   *Eslatma:* Agar barcha boshlang'ich shartlar nolga teng bo'lsa ($f(0) = f'(0) = 0$), $n$-tartibli hosilaning tasviri shunchaki $p^n F(p)$ bo'ladi!

3. **Siljish (so'nish) teoremasi:**
   $$\mathcal{L}\{e^{at} f(t)\} = F(p - a)$$

4. **Tasvirni differensiallash:**
   $$\mathcal{L}\{t \cdot f(t)\} = -F'(p) \implies \mathcal{L}\{t^n f(t)\} = (-1)^n F^{(n)}(p)$$

5. **O'ram (konvolyutsiya) teoremasi:**
   Ikkita tasvirning ko'paytmasi asl funksiyalarning o'ramiga mos keladi:
   $$\mathcal{L}^{-1}\{F(p) \cdot G(p)\} = (f * g)(t) = \int_0^t f(\tau) g(t - \tau) d\tau$$

---

## 📝 Qadamma-qadam Yechilgan Amaliy Misollar

### 1-misol: 1-tartibli Koshi masalasi
$$y' + 2y = 4e^{2t}, \quad y(0) = 1$$

**Yechish:**
1. Har ikkala tomonga Laplas almashtirishini qo'llaymiz:
   $$\mathcal{L}\{y(t)\} = Y(p), \quad \mathcal{L}\{y'(t)\} = p Y(p) - y(0) = p Y(p) - 1$$
   $$\mathcal{L}\{4e^{2t}\} = \frac{4}{p - 2}$$
2. Algebraik tenglama tuzamiz:
   $$(p Y(p) - 1) + 2Y(p) = \frac{4}{p - 2}$$
   $$(p + 2)Y(p) = 1 + \frac{4}{p - 2} = \frac{p - 2 + 4}{p - 2} = \frac{p + 2}{p - 2}$$
3. $Y(p)$ ni topamiz:
   $$Y(p) = \frac{p + 2}{(p + 2)(p - 2)} = \frac{1}{p - 2}$$
4. Jadval bo'yicha teskari almashtirishni olamiz:
   $$y(t) = \mathcal{L}^{-1}\left\{ \frac{1}{p - 2} \right\} = e^{2t}$$

**Javob:** $y(t) = e^{2t}$.

---

### 2-misol: Tebranish va rezonans hodisasi
$$y'' + 9y = 18\cos(3t), \quad y(0) = 0, \quad y'(0) = 0$$

**Yechish:**
1. Boshlang'ich shartlar nolga teng:
   $$\mathcal{L}\{y''\} = p^2 Y(p), \quad \mathcal{L}\{\cos(3t)\} = \frac{p}{p^2 + 9}$$
2. Operatsion tenglama:
   $$p^2 Y(p) + 9Y(p) = \frac{18p}{p^2 + 9} \implies (p^2 + 9)Y(p) = \frac{18p}{p^2 + 9}$$
   $$Y(p) = \frac{18p}{(p^2 + 9)^2}$$
3. Asl funksiyani topish uchun tasvirni differensiallash xossasidan foydalanamiz:
   $$\mathcal{L}\{\sin(3t)\} = \frac{3}{p^2 + 9}$$
   $$\frac{d}{dp}\left( \frac{3}{p^2 + 9} \right) = -\frac{3 \cdot 2p}{(p^2 + 9)^2} = -\frac{6p}{(p^2 + 9)^2}$$
   Boshqa tomondan, $\mathcal{L}\{t \sin(3t)\} = -\frac{d}{dp} \mathcal{L}\{\sin(3t)\} = \frac{6p}{(p^2 + 9)^2}$.
4. Bizning $Y(p)$ ifodamiz:
   $$Y(p) = 3 \cdot \frac{6p}{(p^2 + 9)^2} \implies y(t) = 3t \sin(3t)$$
   Bu mexanikadagi rezonans hodisasi bo'lib, tebranish amplitudasi $t$ o'tishi bilan chiziqli o'sib boradi!

**Javob:** $y(t) = 3t \sin(3t)$.

---

### 3-misol: So'nuvchi tebranishlar (Siljish teoremasi)
$$y'' - 2y' + 5y = 0, \quad y(0) = 1, \quad y'(0) = 3$$

**Yechish:**
1. Laplas almashtirishlarini yozamiz:
   $$\mathcal{L}\{y'\} = p Y(p) - y(0) = p Y(p) - 1$$
   $$\mathcal{L}\{y''\} = p^2 Y(p) - p y(0) - y'(0) = p^2 Y(p) - p - 3$$
2. Tenglamaga qo'yamiz:
   $$(p^2 Y(p) - p - 3) - 2(p Y(p) - 1) + 5Y(p) = 0$$
   $$Y(p)(p^2 - 2p + 5) - p - 3 + 2 = 0$$
   $$Y(p)(p^2 - 2p + 5) = p + 1$$
3. $Y(p)$ ni ifodalaymiz va kvadrat ajratamiz:
   $$p^2 - 2p + 5 = (p - 1)^2 + 4 = (p - 1)^2 + 2^2$$
   $$Y(p) = \frac{p + 1}{(p - 1)^2 + 2^2} = \frac{(p - 1) + 2}{(p - 1)^2 + 2^2} = \frac{p - 1}{(p - 1)^2 + 2^2} + \frac{2}{(p - 1)^2 + 2^2}$$
4. Siljish teoremasi $\mathcal{L}\{e^{at} f(t)\} = F(p - a)$ bo'yicha ($a = 1, \omega = 2$):
   $$\mathcal{L}^{-1}\left\{ \frac{p - 1}{(p - 1)^2 + 2^2} \right\} = e^t \cos(2t)$$
   $$\mathcal{L}^{-1}\left\{ \frac{2}{(p - 1)^2 + 2^2} \right\} = e^t \sin(2t)$$
5. Asl funksiya:
   $$y(t) = e^t \cos(2t) + e^t \sin(2t) = e^t (\cos 2t + \sin 2t)$$

**Javob:** $y(t) = e^t (\cos 2t + \sin 2t)$.

---

### 4-misol: Ixtiyoriy o'ng tomonli tenglama va o'ram (konvolyutsiya)
$$y'' + y = t, \quad y(0) = 0, \quad y'(0) = 0$$

**Yechish:**
1. Algebraik shakl:
   $$(p^2 + 1)Y(p) = \frac{1}{p^2} \implies Y(p) = \frac{1}{p^2 + 1} \cdot \frac{1}{p^2}$$
2. O'ram teoremasini qo'llaymiz. Ma'lumki:
   $$F_1(p) = \frac{1}{p^2 + 1} \iff f_1(t) = \sin t$$
   $$F_2(p) = \frac{1}{p^2} \iff f_2(t) = t$$
3. Konvolyutsiya integralini hisoblaymiz:
   $$y(t) = (f_1 * f_2)(t) = \int_0^t \sin(t - \tau) \cdot \tau d\tau$$
4. Bo'laklab integrallaymiz:
   $$u = \tau \implies du = d\tau$$
   $$dv = \sin(t - \tau) d\tau \implies v = \cos(t - \tau)$$
   $$y(t) = \left[ \tau \cos(t - \tau) \right]_0^t - \int_0^t \cos(t - \tau) d\tau$$
   $$y(t) = (t \cos 0 - 0) - \left[ -\sin(t - \tau) \right]_0^t = t - (0 - (-\sin t)) = t - \sin t$$

**Javob:** $y(t) = t - \sin t$.

---

## ⚠️ Talabalar Ko'p Yo'l Qo'yadigan Xatolar

1. **Hosilalar tasvirida boshlang'ich shartlarning ishoralari:**
   Ko'pchilik $p^2 Y(p) + p y(0) + y'(0)$ deb yozishadi. Esda tuting: boshlang'ich shartlar formulada **minus** ishora bilan qatnashadi:
   $$\mathcal{L}\{y''\} = p^2 Y(p) - p y(0) - y'(0)$$
2. **Qavslarni ochishda adashish:**
   Agar tenglama $y'' - 4y' + 4y$ bo'lsa, $-4y'$ hadiga Laplas qo'llanganda: $-4(p Y(p) - y(0)) = -4p Y(p) + 4y(0)$ bo'ladi. $+4y(0)$ dagi plyus ishorani minus deb ketish eng ko'p uchraydigan texnik xatodir.
3. **Algebraik kasrlarni yoyishda shoshqaloqlik:**
   Teskari almashtirish olishdan oldin to'la kvadrat ajratish ($(p-a)^2 + \omega^2$) yoki noma'lum koeffitsiyentlar usulida maxraj ildizlarining karraliligini to'g'ri hisobga olish shart.

---

## 🎯 Mustaqil Yechish Uchun Masalalar

1. Koshi masalasini Laplas almashtirishi bilan yeching:
   $$y' - 3y = e^{3t}, \quad y(0) = 2$$
   *Javob:* $y(t) = (t + 2)e^{3t}$.

2. Ikkinchi tartibli tenglamani yeching:
   $$y'' + 4y = 0, \quad y(0) = 1, \quad y'(0) = 2$$
   *Javob:* $y(t) = \cos(2t) + \sin(2t)$.

3. Bir jinsli bo'lmagan tebranish tenglamasini yeching:
   $$y'' - y = 2t, \quad y(0) = 0, \quad y'(0) = 1$$
   *Javob:* $y(t) = 3\sinh t - 2t \quad \text{yoki} \quad \frac{3}{2}(e^t - e^{-t}) - 2t$.

4. Differensial tenglamalar sistemasini operatsion usulda yeching:
   $$\begin{cases} x' = y \\ y' = x \end{cases}, \quad x(0) = 1, \quad y(0) = 0$$
   *Javob:* $x(t) = \cosh t = \frac{e^t + e^{-t}}{2}, \quad y(t) = \sinh t = \frac{e^t - e^{-t}}{2}$.

---

## 💡 Xulosa va Imtihon Maslahatlari

- Laplas almashtirishi — Koshi masalalarini yechishdagi eng qudratli vosita. U integrallash doimiylari $C_1, C_2$ ni topish uchun tenglamalar sistemasini tuzish zaruratini butunlay yo'q qiladi.
- Agar topshiriqda boshlang'ich shartlar berilgan bo'lsa va koeffitsiyentlar o'zgarmas bo'lsa, har doim Laplas usulidan foydalanish birinchi variantingiz bo'lsin.
- Imtihonda olingan $Y(p)$ tasvir funksiyasining $p \to \infty$ dagi limiti nolga intilishini ($\lim_{p \to \infty} Y(p) = 0$) tekshiring. Agar bu shart bajarilmasa, algebraik hisoblashlarda xatolik borligini bildiradi.
