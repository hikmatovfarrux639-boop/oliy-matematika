---
title: "Egri chiziq egriligi, egrilik radiusi va evolyuta/involyuta tushunchalari"
description: "Egrilik formulasi, egrilik doirasi, egrilik markazi koordinatalari hamda evolyuta tenglamasini tuzish."
module: "hosila"
order: 11
---

## 📌 Kirish va Geometrik/Fizik Ma'no

Avtomagistral yoki tezyurar poyezd temir yo'llari loyihalashtirilayotganda yo'lning qanchalik keskin burilishi eng muhim xavfsizlik omillaridan biri hisoblanadi. Burilish qanchalik keskin bo'lsa, avtomobilga shunchalik katta markazdan qochma inersiya kuchi ($F = \frac{m v^2}{R}$) ta'sir qiladi. Agar burilish radiusi juda kichik bo'lsa, mashina ag'darilib ketishi mumkin.

Matematikada chiziqning "qanchalik keskin egilganligi" **egrilik** (lotincha *curvatura*) tushunchasi orqali ifodalanadi. To'g'ri chiziq umuman egilmaydi, demak uning egriligi $0$ ga teng. Radiusi $R$ bo'lgan aylananing barcha nuqtalaridagi egriligi bir xil bo'lib, $\frac{1}{R}$ ga teng. Ixtiyoriy silliq egri chiziq uchun esa egrilik nuqtadan nuqtaga o'zgarib boradi.

Differensial hisob yordamida biz har qanday egri chiziqning har bir nuqtasida unga eng yaxshi mos keluvchi "urinma aylana"ni (**egrilik doirasi**) va uning markazini topishimiz mumkin. Ushbu markazlarning geometrik o'rni esa mashhur **evolyuta** chizig'ini hosil qiladi.

---

## 📐 Asosiy Nazariya, Qoidalar va Teoremalar

### 1. Egrilikning ta'rifi
Egri chiziq bo'ylab harakatlanayotgan nuqtaning urinmasi $M$ nuqtadan $M_1$ nuqtaga o'tganda $\Delta \alpha$ burchakka burilsin, o'tgan yoy uzunligi esa $\Delta s$ bo'lsin.
- **O'rtacha egrilik:** $K_{o'rt} = \left|\frac{\Delta \alpha}{\Delta s}\right|$.
- **Nuqtadagi egrilik:** $\Delta s \to 0$ dagi limit:

$$
K = \lim_{\Delta s \to 0} \left|\frac{\Delta \alpha}{\Delta s}\right| = \left|\frac{d\alpha}{ds}\right|
$$

### 2. Dekart koordinatalarida egrilik formulasi ($y = f(x)$)
Agar egri chiziq oshkor $y = f(x)$ ko'rinishida berilgan bo'lsa, $\tan \alpha = y'$ va $ds = \sqrt{1 + y'^2} \, dx$ munosabatlaridan foydalanib quyidagi asosiy formula keltirib chiqariladi:

$$
K = \frac{|y''|}{(1 + y'^2)^{3/2}}
$$

> **Egrilik radiusi ($R$):** Egrilikka teskari miqdor:
> 
> $$R = \frac{1}{K} = \frac{(1 + y'^2)^{3/2}}{|y''|}$$

### 3. Parametrik ko'rinishdagi egri chiziq egriligi
Agar egri chiziq $x = x(t), y = y(t)$ parametrik tenglamalar bilan berilgan bo'lsa:

$$
K = \frac{|\dot{x} \ddot{y} - \dot{y} \ddot{x}|}{(\dot{x}^2 + \dot{y}^2)^{3/2}}
$$

bu yerda $\dot{x} = \frac{dx}{dt}$, $\ddot{x} = \frac{d^2 x}{dt^2}$.

### 4. Egrilik doirasi va egrilik markazi
Berilgan $M(x, y)$ nuqtada egri chiziqqa uning botiqlik tomoniga qaragan va radiusi $R$ ga teng bo'lgan aylana **egrilik doirasi** (yoki *oskulyatsiyalovchi doira*) deyiladi.

Egrilik markazi $C(\xi, \eta)$ koordinatalari quyidagi formulalar yordamida hisoblanadi:

$$
\xi = x - \frac{y'(1 + y'^2)}{y''}, \qquad \eta = y + \frac{1 + y'^2}{y''}
$$

### 5. Evolyuta va Involyuta
- **Evolyuta:** Egri chiziqning barcha nuqtalariga mos keluvchi egrilik markazlari $C(\xi, \eta)$ ning geometrik o'rniga berilgan chiziqning **evolyutasi** deyiladi.
- **Involyuta (Evolventa):** Agar chiziq $\Gamma$ boshqa bir chiziq $\Gamma_1$ ning evolyutasi bo'lsa, u holda $\Gamma_1$ chiziq $\Gamma$ ga nisbatan **involyuta** deyiladi.

> **Evolyutaning asosiy geometrik xossasi:**
> Evolyutaga o'tkazilgan urinma dastlabki egri chiziqning mos nuqtasidagi **normali** bilan ustma-ust tushadi!

---

## 📝 Qadamma-qadam Yechilgan Amaliy Misollar

### 1-misol: Parabolaning uchidagi va ixtiyoriy nuqtasidagi egriligi
$y = x^2$ parabolaning:
a) uchi bo'lgan $(0, 0)$ nuqtadagi;
b) $(1, 1)$ nuqtadagi egriligi va egrilik radiusini hisoblang.

**Yechilishi:**
1. Birinchi va ikkinchi tartibli hosilalarni topamiz:
   $$y' = 2x, \quad y'' = 2$$
2. Umumiy formula bo'yicha egrilikni yozamiz:
   $$K(x) = \frac{|2|}{(1 + (2x)^2)^{3/2}} = \frac{2}{(1 + 4x^2)^{3/2}}$$
3. a) $x = 0$ nuqtada:
   $$K(0) = \frac{2}{(1 + 0)^{3/2}} = 2 \implies R(0) = \frac{1}{2}$$
4. b) $x = 1$ nuqtada:
   $$K(1) = \frac{2}{(1 + 4(1)^2)^{3/2}} = \frac{2}{5^{3/2}} = \frac{2}{5\sqrt{5}}$$
   $$R(1) = \frac{5\sqrt{5}}{2} \approx 5.59$$

**Javob:** $(0,0)$ da $K = 2, R = 0.5$; $(1,1)$ da $K = \frac{2}{5\sqrt{5}}, R = \frac{5\sqrt{5}}{2}$.

---

### 2-misol: Parabola egrilik markazi va evolyutasini topish
$y = x^2$ parabola egrilik markazining koordinatalarini toping va uning evolyutasining analitik tenglamasini tuzing.

**Yechilishi:**
1. Bizda $y' = 2x$ va $y'' = 2$.
2. Markaz koordinatalari formulalariga qo'yamiz:
   $$\xi = x - \frac{2x(1 + 4x^2)}{2} = x - x(1 + 4x^2) = x - x - 4x^3 = -4x^3$$
   $$\eta = y + \frac{1 + 4x^2}{2} = x^2 + \frac{1}{2} + 2x^2 = 3x^2 + \frac{1}{2}$$
3. Evolyuta tenglamasini olish uchun parametrik ifodadan $x$ ni yo'qotamiz:
   - $\xi = -4x^3 \implies x^3 = -\frac{\xi}{4} \implies x^2 = \left(-\frac{\xi}{4}\right)^{2/3} = \frac{\xi^{2/3}}{4^{2/3}}$
   - Ikkinchi tenglikdan: $\eta - \frac{1}{2} = 3x^2 = 3 \cdot \frac{\xi^{2/3}}{4^{2/3}}$
4. Ikkala tomonni kubga ko'taramiz:
   $$\left(\eta - \frac{1}{2}\right)^3 = \frac{27 \xi^2}{16} \implies 27 \xi^2 = 16\left(\eta - \frac{1}{2}\right)^3$$
   Bu chiziq **Neyl parabolasi (yarimkubik parabola)** deb ataladi!

**Javob:** Evolyuta tenglamasi: $27\xi^2 = 16\left(\eta - \frac{1}{2}\right)^3$.

---

### 3-misol: Sikloidaning egrilik radiusi (Parametrik ko'rinish)
Ushbu sikloida egrilik radiusini hisoblang:

$$
x = a(t - \sin t), \quad y = a(1 - \cos t) \quad (a > 0)
$$

**Yechilishi:**
1. Parametr $t$ bo'yicha hosilalarni hisoblaymiz:
   $$\dot{x} = a(1 - \cos t), \quad \dot{y} = a\sin t$$
   $$\ddot{x} = a\sin t, \quad \ddot{y} = a\cos t$$
2. Maxrajdagi ifodani topamiz:
   $$\dot{x}^2 + \dot{y}^2 = a^2(1 - \cos t)^2 + a^2\sin^2 t = a^2(1 - 2\cos t + \cos^2 t + \sin^2 t) = 2a^2(1 - \cos t)$$
   Trigonometrik ayniyat: $1 - \cos t = 2\sin^2(t/2)$, demak:
   $$\dot{x}^2 + \dot{y}^2 = 4a^2 \sin^2\frac{t}{2} \implies (\dot{x}^2 + \dot{y}^2)^{3/2} = 8a^3 \left|\sin\frac{t}{2}\right|^3$$
3. Suratdagi ifodani topamiz:
   $$\dot{x}\ddot{y} - \dot{y}\ddot{x} = a(1 - \cos t)(a\cos t) - (a\sin t)(a\sin t) = a^2(\cos t - \cos^2 t - \sin^2 t) = -a^2(1 - \cos t)$$
   Modulini olamiz: $|\dot{x}\ddot{y} - \dot{y}\ddot{x}| = a^2(1 - \cos t) = 2a^2 \sin^2\frac{t}{2}$.
4. Egrilik radiusi $R = 1/K$:
   $$R = \frac{8a^3 \sin^3(t/2)}{2a^2 \sin^2(t/2)} = 4a \sin\frac{t}{2} \quad (0 \le t \le 2\pi)$$

**Javob:** $R = 4a \sin\frac{t}{2}$.

---

### 4-misol: Giperbolaning uchidagi egriligi
Teng tomonli giperbola $xy = 1$ ning $(1, 1)$ nuqtasidagi egrilik radiusi va markazini toping.

**Yechilishi:**
1. $y = \frac{1}{x} = x^{-1} \implies y' = -x^{-2} = -\frac{1}{x^2}$, $y'' = 2x^{-3} = \frac{2}{x^3}$.
2. $(1, 1)$ nuqtada qiymatlarni hisoblaymiz:
   $$y'(1) = -1, \quad y''(1) = 2$$
3. Egrilik radiusini hisoblaymiz:
   $$R = \frac{(1 + (-1)^2)^{3/2}}{|2|} = \frac{(1 + 1)^{3/2}}{2} = \frac{2\sqrt{2}}{2} = \sqrt{2}$$
4. Egrilik markazini hisoblaymiz:
   $$\xi = 1 - \frac{(-1)(1 + 1)}{2} = 1 - \frac{-2}{2} = 1 + 1 = 2$$
   $$\eta = 1 + \frac{1 + 1}{2} = 1 + 1 = 2$$

**Javob:** $R = \sqrt{2}$, markaz koordinatasi $C(2, 2)$.

---

## ⚠️ Talabalar Ko'p Yo'l Qo'yadigan Xatolar (Tipik tuzoqlar)

1. **Ikkinchi hosilaning o'zini egrilik deb o'ylash:**
   > ⛔ **Xato:** "$y''$ katta bo'lsa, egrilik ham shuncha katta".
   > 
   > 💡 **Sabab:** Egrilik formulasining maxrajida $(1 + y'^2)^{3/2}$ mavjud! Agar funksiya o'ta tik o'sayotgan bo'lsa ($y' \to \infty$), ikkinchi hosila katta bo'lsa ham egrilik deyarli nolga teng bo'lib qoladi. Egrilik mutlaq geometrik kattalikdir, u koordinata o'qlarining burilishiga nisbatan invariantdir.

2. **Egrilik markazi formulasida ishoralarni adashtirish:**
   $\xi = x - \frac{y'(1+y'^2)}{y''}$ da minus ishora bor, $\eta = y + \frac{1+y'^2}{y''}$ da esa musbat ishora bor. Botiqlik yo'nalishi $y''$ ning ishorasi bilan qat'iy boshqariladi.

3. **Parametrik formulada kvadratlarni adashtirish:**
   Maxrajda $(\dot{x}^2 + \dot{y}^2)^{3/2}$ bo'lishi shart, ko'pchilik uni $(\dot{x} + \dot{y})^3$ kabi noto'g'ri yozib xato qiladi.

---

## 🎯 Mustaqil Yechish Uchun Masalalar

1. $y = e^x$ egri chiziqning $(0, 1)$ nuqtasidagi egriligi va egrilik radiusini toping.
2. $y = \ln x$ egri chiziqning $x = 1$ nuqtasidagi egrilik markazini toping.
3. Aylana $x^2 + y^2 = R^2$ ning ixtiyoriy nuqtasidagi egriligi doimiy $K = 1/R$ ekanligini differensial formula orqali isbotlang.
4. $x = a\cos t, y = a\sin t$ parametrik aylananing evolyutasini toping.

<details style="margin-top: 1rem; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); cursor: pointer;">
<summary style="font-weight: 700; color: var(--primary);">Mashqlar javoblarini ko'rish</summary>

**1-masala:**
$y' = e^0 = 1, y'' = e^0 = 1$.
$$K = \frac{1}{(1 + 1^2)^{3/2}} = \frac{1}{2\sqrt{2}}, \quad R = 2\sqrt{2}$$

**2-masala:**
$x = 1$ da $y = 0, y' = 1, y'' = -1$.
$\xi = 1 - \frac{1(1+1)}{-1} = 1 + 2 = 3$.
$\eta = 0 + \frac{1+1}{-1} = -2$. Markaz: $C(3, -2)$.

**3-masala:**
$y = \sqrt{R^2 - x^2} \implies y' = \frac{-x}{\sqrt{R^2-x^2}}, y'' = \frac{-R^2}{(R^2-x^2)^{3/2}}$.
Formulaga qo'yilganda barcha qisqarishlardan so'ng $K = \frac{1}{R}$ kelib chiqadi.

**4-masala:**
Aylananing barcha nuqtalaridagi normallari markazdan o'tadi va barcha nuqtalarda egrilik markazi bitta — koordinatalar boshi $(0, 0)$ bo'ladi.
Shuning uchun aylananing evolyutasi bitta nuqtaga aylanadi: $(0, 0)$.

</details>

---

## 💡 Xulosa va Imtihon Maslahatlari

- Egrilik va egrilik radiusi masalalarida yechimning yarmi — **birinchi va ikkinchi hosilani benuqson hisoblashdir**. Misolni yechishdan oldin $y'$ va $y''$ ni alohida qatorda toza yozib oling.
- Egrilik doirasi egri chiziqqa nafaqat urinadi, balki uning ikkinchi tartibli hosilasini ham takrorlaydi (2-tartibli kontakt).
- Evolyuta tenglamasini tuzish talab etilganda, $\xi(t)$ va $\eta(t)$ parametrik tenglamalar tizimi olinadi; agar imkoni bo'lsa parametr yo'qotiladi, aks holda javob parametrik shaklda qoldiriladi.
