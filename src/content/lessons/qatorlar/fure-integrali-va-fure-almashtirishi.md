---
title: "Fure integrali va Fure almashtirishi: Spektral tahlil asoslari"
description: "Davriy bo'lmagan funksiyalarning Fure integrali, to'g'ri va teskari Fure almashtirishlari, kosinus va sinus almashtirishlar."
module: "qatorlar"
order: 16
---

## 📌 Kirish va Fizik/Texnik Mohiyati

Fure qatorlari yordamida biz faqat davriy signallarni diskret garmonik tebranishlar yig'indisi sifatida ifodalashni o'rgandik. Ammo real hayotda uchraydigan ko'plab signallar — chaqmoq chaqnashi, portlash to'lqini, radioimpuls, zilzila tebranishlari, optik lazer chaqnashi va audio signallar — davriy emas, balki bir martalik yoki vaqt bo'yicha so'nuvchi jarayonlardir.

Bunday nodavriy signallarni tahlil qilish uchun nima qilish kerak? Fure ajoyib g'oyani ilgari surdi: **nodavriy signalni davri cheksizlikka intiluvchi ($T \to \infty$) davriy signal deb qarash mumkin!** Bu holda spektrdagi diskret chastotalar orasidagi masofa cheksiz kichrayib ($\Delta\omega \to 0$), diskret garmonikalar yig'indisi uzluksiz integralga aylanadi. Natijada zamonaviy raqamli aloqa, signallarni raqamli qayta ishlash (DSP), tasvirlarni siqish (JPEG, MP3) va kvant mexanikasining (Geyzenberg noaniqlik prinsipi) poydevori bo'lgan **Fure almashtirishi** vujudga keladi.

---

## 📐 Asosiy Nazariya, Qoidalar va Teoremalar

### 1. Fure qatoridan Fure integraliga o'tish

$(-l, l)$ kesmada berilgan $f(x)$ funksiyaning Fure qatorini qaraymiz. Agar davrni cheksizlikka oshirsak ($l \to \infty$), chastotalar qadami $\Delta\omega = \frac{\pi}{l} \to d\omega$ bo'lib, quyidagi **Fure integral formulasi** hosil bo'ladi:
$$f(x) = \frac{1}{\pi} \int_{0}^{\infty} d\omega \int_{-\infty}^{\infty} f(t) \cos\big(\omega(t - x)\big) dt$$

Ushbu integralni trigonometrik shaklda quyidagicha yozish mumkin:
$$f(x) = \int_{0}^{\infty} \Big( a(\omega) \cos(\omega x) + b(\omega) \sin(\omega x) \Big) d\omega$$
bu yerda spektral zichlik koeffitsiyentlari:
$$a(\omega) = \frac{1}{\pi} \int_{-\infty}^{\infty} f(t) \cos(\omega t) dt, \quad b(\omega) = \frac{1}{\pi} \int_{-\infty}^{\infty} f(t) \sin(\omega t) dt$$

---

### 2. Fure kosinus va sinus almashtirishlari

Agar $f(x)$ funksiya simmetriyaga ega bo'lsa, formulalar sezilarli darajada soddalashadi:

1. **Juft funksiya bo'lsa ($f(-x) = f(x)$):**
   $b(\omega) \equiv 0$ bo'lib, **Fure kosinus-almashtirishi** hosil bo'ladi:
   $$F_c(\omega) = \mathcal{F}_c\{f(t)\} = \sqrt{\frac{2}{\pi}} \int_{0}^{\infty} f(t) \cos(\omega t) dt$$
   $$f(x) = \mathcal{F}_c^{-1}\{F_c(\omega)\} = \sqrt{\frac{2}{\pi}} \int_{0}^{\infty} F_c(\omega) \cos(\omega x) d\omega$$

2. **Toq funksiya bo'lsa ($f(-x) = -f(x)$):**
   $a(\omega) \equiv 0$ bo'lib, **Fure sinus-almashtirishi** hosil bo'ladi:
   $$F_s(\omega) = \mathcal{F}_s\{f(t)\} = \sqrt{\frac{2}{\pi}} \int_{0}^{\infty} f(t) \sin(\omega t) dt$$
   $$f(x) = \mathcal{F}_s^{-1}\{F_s(\omega)\} = \sqrt{\frac{2}{\pi}} \int_{0}^{\infty} F_s(\omega) \sin(\omega x) d\omega$$

---

### 3. Kompleks shakldagi Fure almashtirishi

Eyler formulasi ($e^{i\alpha} = \cos\alpha + i\sin\alpha$) orqali trigonometrik ko'rinish kompleks eksponensial shaklga keltiriladi:

> **Ta'rif (To'g'ri va Teskari Fure almashtirishi):**
> Integrallanuvchi $f(t)$ ($\int_{-\infty}^\infty |f(t)| dt < \infty$) funksiyaning **Fure almashtirishi (spektri)** deb quyidagi funksiyaga aytiladi:
> $$\hat{f}(\omega) = \mathcal{F}\{f(t)\} = \int_{-\infty}^{\infty} f(t) e^{-i\omega t} dt$$
>
> Spektrdan asl signalni tiklash — **teskari Fure almashtirishi**:
> $$f(t) = \mathcal{F}^{-1}\{\hat{f}(\omega)\} = \frac{1}{2\pi} \int_{-\infty}^{\infty} \hat{f}(\omega) e^{i\omega t} d\omega$$

---

### 4. Fure almashtirishining fundamental xossalari

1. **Chiziqlilik:**
   $$\mathcal{F}\{\alpha f(t) + \beta g(t)\} = \alpha \hat{f}(\omega) + \beta \hat{g}(\omega)$$
2. **Vaqt bo'yicha siljish:**
   $$\mathcal{F}\{f(t - t_0)\} = e^{-i\omega t_0} \hat{f}(\omega)$$
3. **Chastota bo'yicha siljish (Modulyatsiya):**
   $$\mathcal{F}\{e^{i\omega_0 t} f(t)\} = \hat{f}(\omega - \omega_0)$$
4. **Hosilaning spektri:**
   $$\mathcal{F}\{f'(t)\} = i\omega \hat{f}(\omega) \implies \mathcal{F}\{f^{(n)}(t)\} = (i\omega)^n \hat{f}(\omega)$$
5. **Parseval-Plansherel ayniyati (Energiya saqlanishi):**
   Signalning vaqt bo'yicha to'la energiyasi uning chastota bo'yicha to'la energiyasiga proporsionaldir:
   $$\int_{-\infty}^{\infty} |f(t)|^2 dt = \frac{1}{2\pi} \int_{-\infty}^{\infty} |\hat{f}(\omega)|^2 d\omega$$

---

## 📝 Qadamma-qadam Yechilgan Amaliy Misollar

### 1-misol: To'g'ri to'rtburchakli impuls (Rectangular pulse)
Quyidagi to'g'ri to'rtburchakli impulsning Fure spektrini toping:
$$f(t) = \begin{cases} 1, & |t| \le a \\ 0, & |t| > a \end{cases} \quad (a > 0)$$

**Yechish:**
1. Fure almashtirishi formulasiga qo'yamiz:
   $$\hat{f}(\omega) = \int_{-\infty}^{\infty} f(t) e^{-i\omega t} dt = \int_{-a}^{a} 1 \cdot e^{-i\omega t} dt$$
2. Integralni hisoblaymiz ($\omega \neq 0$):
   $$\hat{f}(\omega) = \left[ \frac{e^{-i\omega t}}{-i\omega} \right]_{-a}^{a} = -\frac{e^{-i\omega a} - e^{i\omega a}}{i\omega} = \frac{e^{i\omega a} - e^{-i\omega a}}{i\omega}$$
3. Eyler formulasidan foydalanamiz: $e^{i\alpha} - e^{-i\alpha} = 2i\sin\alpha$:
   $$\hat{f}(\omega) = \frac{2i\sin(\omega a)}{i\omega} = \frac{2\sin(\omega a)}{\omega} = 2a \operatorname{sinc}(\omega a)$$
   $\omega = 0$ da limit $\lim_{\omega \to 0} \frac{2\sin(\omega a)}{\omega} = 2a$ bo'lib, impuls yuzasiga teng.

**Javob:** $\hat{f}(\omega) = \frac{2\sin(\omega a)}{\omega}$.

---

### 2-misol: Ikki tomonlama eksponensial so'nuvchi signal
$$f(t) = e^{-a|t|}, \quad (a > 0)$$
funksiyaning Fure spektrini toping va undan foydalanib Laplas integralini hisoblang.

**Yechish:**
1. Funksiya juft bo'lgani sababli ($f(-t) = f(t)$):
   $$\hat{f}(\omega) = \int_{-\infty}^{\infty} e^{-a|t|} (\cos\omega t - i\sin\omega t) dt = 2 \int_{0}^{\infty} e^{-at} \cos(\omega t) dt$$
2. Bo'laklab integrallash orqali ma'lum integral:
   $$\int_{0}^{\infty} e^{-at} \cos(\omega t) dt = \frac{a}{a^2 + \omega^2}$$
3. Spektr:
   $$\hat{f}(\omega) = \frac{2a}{a^2 + \omega^2}$$
4. Endi teskari Fure almashtirishini yozamiz:
   $$f(t) = \frac{1}{2\pi} \int_{-\infty}^{\infty} \hat{f}(\omega) e^{i\omega t} d\omega \implies e^{-a|t|} = \frac{1}{2\pi} \int_{-\infty}^{\infty} \frac{2a}{a^2 + \omega^2} e^{i\omega t} d\omega$$
   Juftlikdan foydalanib:
   $$e^{-a|t|} = \frac{2a}{\pi} \int_{0}^{\infty} \frac{\cos(\omega t)}{a^2 + \omega^2} d\omega \implies \int_{0}^{\infty} \frac{\cos(\omega t)}{a^2 + \omega^2} d\omega = \frac{\pi}{2a} e^{-a|t|}$$
   Biz mashhur Laplas integralini osongina hisobladik!

**Javob:** $\hat{f}(\omega) = \frac{2a}{a^2 + \omega^2}$; $\int_0^\infty \frac{\cos(\omega t)}{a^2 + \omega^2} d\omega = \frac{\pi}{2a} e^{-a|t|}$.

---

### 3-misol: Gauss funksiyasining Fure almashtirishi
$$f(t) = e^{-\alpha t^2} \quad (\alpha > 0)$$

**Yechish:**
1. Fure integrali:
   $$\hat{f}(\omega) = \int_{-\infty}^{\infty} e^{-\alpha t^2} e^{-i\omega t} dt = \int_{-\infty}^{\infty} e^{-(\alpha t^2 + i\omega t)} dt$$
2. Ko'rsatkichda to'la kvadrat ajratamiz:
   $$\alpha t^2 + i\omega t = \alpha \left( t^2 + \frac{i\omega}{\alpha} t \right) = \alpha \left( t + \frac{i\omega}{2\alpha} \right)^2 + \frac{\omega^2}{4\alpha}$$
3. O'rniga qo'yamiz:
   $$\hat{f}(\omega) = e^{-\frac{\omega^2}{4\alpha}} \int_{-\infty}^{\infty} e^{-\alpha\left(t + \frac{i\omega}{2\alpha}\right)^2} dt$$
4. Eyler-Puasson integrali $\int_{-\infty}^\infty e^{-\alpha u^2} du = \sqrt{\frac{\pi}{\alpha}}$ ga ko'ra:
   $$\hat{f}(\omega) = \sqrt{\frac{\pi}{\alpha}} e^{-\frac{\omega^2}{4\alpha}}$$
   *Muhim xulosa:* Gauss funksiyasining Fure tasviri yana Gauss funksiyasidir! Agar vaqt sohasida signal toraysa ($\alpha$ kattalashsa), uning chastotaviy spektri kengayadi ($\frac{1}{4\alpha}$ kichrayadi). Bu fizika va axborot nazariyasidagi **Geyzenberg noaniqlik prinsipidir** ($\Delta t \cdot \Delta \omega \ge \frac{1}{2}$).

**Javob:** $\hat{f}(\omega) = \sqrt{\frac{\pi}{\alpha}} e^{-\frac{\omega^2}{4\alpha}}$.

---

### 4-misol: Integral tenglamani Fure kosinus almashtirishi bilan yechish
Noma'lum $f(x)$ funksiyani toping:
$$\int_{0}^{\infty} f(x) \cos(\omega x) dx = \frac{1}{1 + \omega^2}$$

**Yechish:**
1. Shartga ko'ra, berilgan integral Fure kosinus-almashtirishining koeffitsiyenti $a(\omega)$ bilan bog'liq:
   $$a(\omega) = \frac{2}{\pi} \int_0^\infty f(x) \cos(\omega x) dx = \frac{2}{\pi} \cdot \frac{1}{1 + \omega^2}$$
2. Teskari kosinus-almashtirish formulasini qo'llaymiz:
   $$f(x) = \int_0^\infty a(\omega) \cos(\omega x) d\omega = \frac{2}{\pi} \int_0^\infty \frac{\cos(\omega x)}{1 + \omega^2} d\omega$$
3. 2-misolda isbotlangan Laplas integralidan foydalanamiz ($a = 1$ holi):
   $$\int_0^\infty \frac{\cos(\omega x)}{1 + \omega^2} d\omega = \frac{\pi}{2} e^{-x} \quad (x \ge 0)$$
4. Qo'yamiz:
   $$f(x) = \frac{2}{\pi} \cdot \left(\frac{\pi}{2} e^{-x}\right) = e^{-x}$$

**Javob:** $f(x) = e^{-x} \quad (x \ge 0)$.

---

## ⚠️ Talabalar Ko'p Yo'l Qo'yadigan Xatolar

1. **Ko'paytuvchi $e^{-i\omega t}$ dagi ishora:**
   To'g'ri Fure almashtirishida odatda $e^{-i\omega t}$ (minus ishorali), teskari almashtirishda esa $e^{+i\omega t}$ (plyus ishorali) ishlatiladi. Ko'pchilik buni chalkashtirib, Laplas almashtirishi bilan qorishtirib yuboradi.
2. **Normallashtiruvchi koeffitsiyentni ($\frac{1}{2\pi}$) unutish:**
   Teskari almashtirish formulasida $\frac{1}{2\pi}$ ko'paytuvchisini yozmaslik signal amplitudasining $2\pi$ marta oshib ketishiga sabab bo'ladi.
3. **Absolyut integrallanuvchanlik shartini tekshirmaslik:**
   Fure integrali mavjud bo'lishi uchun $\int_{-\infty}^\infty |f(t)| dt < \infty$ bajarilishi shart. Masalan, $f(t) = \sin t$ yoki $f(t) = 1$ funksiyalar uchun oddiy Fure integrali mavjud emas (ular faqat umumlashtirilgan funksiyalar — Dirak $\delta$-funksiyasi orqali ifodalanadi).

---

## 🎯 Mustaqil Yechish Uchun Masalalar

1. Bir tomonlama so'nuvchi impulsning Fure spektrini toping:
   $$f(t) = \begin{cases} e^{-at}, & t \ge 0 \\ 0, & t < 0 \end{cases} \quad (a > 0)$$
   *Javob:* $\hat{f}(\omega) = \frac{1}{a + i\omega}$.

2. Fure sinus-almashtirishini hisoblang:
   $$f(t) = e^{-at} \quad (t > 0, a > 0)$$
   *Javob:* $F_s(\omega) = \sqrt{\frac{2}{\pi}} \frac{\omega}{a^2 + \omega^2}$.

3. Hosilaning Fure spektri formulasidan foydalanib $\mathcal{F}\{t e^{-t^2}\}$ ni toping.
   *Javob:* $-\frac{i\omega}{2} \sqrt{\pi} e^{-\omega^2/4}$.

4. Quyidagi Dirixle integralining qiymatini to'g'ri to'rtburchakli impuls spektri orqali ko'rsating:
   $$\int_0^{\infty} \frac{\sin\omega}{\omega} d\omega$$
   *Javob:* $\frac{\pi}{2}$.

---

## 💡 Xulosa va Imtihon Maslahatlari

- Fure almashtirishi murakkab differensial tenglamalarni algebraik tenglamaga aylantirish orqali yechishda (xususan issiqlik va to'lqin tarqalishi masalalarida) juda samarali.
- Agar masalada funksiya faqat $x > 0$ yarim o'qda berilgan bo'lsa, chegaraviy shartlarga qarab uni juft davom ettirib **kosinus-almashtirish** yoki toq davom ettirib **sinus-almashtirish** qo'llash lozim.
