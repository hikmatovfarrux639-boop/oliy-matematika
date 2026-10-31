---
title: "Aylanish sirtlari yuzi, og'irlik markazi va Guldin teoremalari"
description: "Aylanish sirtlari yuzini integral bilan hisoblash, og'irlik markazi koordinatalari va Guldin teoremalari."
module: "integrallar"
order: 16
---

## 📌 Kirish va Muhandislik-Geometrik Ahamiyati

Mashinasozlik, gidrodinamika va arxitekturada aylanish sirtlari (aylanish ellipsoidi, paraboloid, katenoid, tor va silindr) asosiy konstruktiv shakllar hisoblanadi. Gaz turbinalarining kuraklari, parvoz apparatlarining burun konuslari yoki yirik stadionlarning gumbazlarini loyihalashda ularning sirt yuzasi va og'irlik markazini aniq bilish zarur.

Sirt yuzini hisoblashda oddiy to'g'ri to'rtburchaklar emas, balki **kesilgan konuslar** asos qilib olinadi. Matematika tarixida mashhur "Shvars paradoksi" (Schwarz lantern) shuni ko'rsatadiki, agar sirt triangulyatsiya yordamida noto'g'ri yaqinlashtirilsa, uning yuzasi cheksizlikka intilishi mumkin! Shuning uchun qat'iy differensial yoy uzunligi elementi $dl$ ga tayanish shart.

Antik davr olimi Aleksandriyalik Papp kashf etib, XVII asrda shveysariyalik olim **Paul Guldin** tomonidan qayta isbotlangan **Guldin teoremalari** esa integral hisobini mexanika bilan bog'lab, sirt yuzalari va hajmlarni bir qatorda hisoblash imkonini beradi.

---

## 📐 Asosiy Nazariya: Formulalar va Teoremalar

### 1. Aylanish Sirtlari Yuzini Hisoblash

Faraz qilaylik, silliq $y = f(x)$ funksiyasi $[a; b]$ kesmada uzluksiz hosilaga ega bo'lsin. Yoy differensiali:
$$
dl = \sqrt{1 + [f'(x)]^2} \, dx
$$

1. **$Ox$ o'qi atrofida aylanganda:**
   Egri chiziqning $Ox$ o'qi atrofida to'liq $360^\circ$ ga aylanishidan hosil bo'lgan sirt yuzi:
   $$
   S_x = 2\pi \int_a^b |y| \, dl = 2\pi \int_a^b |f(x)| \sqrt{1 + [f'(x)]^2} \, dx
   $$

2. **$Oy$ o'qi atrofida aylanganda:**
   $$
   S_y = 2\pi \int_a^b |x| \, dl = 2\pi \int_a^b |x| \sqrt{1 + [f'(x)]^2} \, dx
   $$

3. **Parametrik ko'rinishda:** $x = x(t), y = y(t), t \in [\alpha; \beta]$:
   $$
   S_x = 2\pi \int_\alpha^\beta |y(t)| \sqrt{[x'(t)]^2 + [y'(t)]^2} \, dt
   $$

---

### 2. Yassi Egri Chiziq va Yassi Sohaning Og'irlik Markazi

Moddiy nuqtalar sistemasining statik momentlari tushunchasini integralga umumlashtirsak:

- **Egri chiziq yoyining og'irlik markazi ($C(x_c, y_c)$):**
  $$
  x_c = \frac{1}{L} \int_L x \, dl, \qquad y_c = \frac{1}{L} \int_L y \, dl, \quad \text{bu yerda } L = \int_L dl
  $$
- **Yassi bir jinsli sohaning ($D$) og'irlik markazi ($C(x_c, y_c)$):**
  Agar soha $a \le x \le b, 0 \le y \le f(x)$ bo'lsa:
  $$
  x_c = \frac{1}{S_0} \int_a^b x f(x) \, dx, \qquad y_c = \frac{1}{2 S_0} \int_a^b [f(x)]^2 \, dx
  $$
  bu yerda $S_0 = \int_a^b f(x) dx$ — soha yuzi.

---

### 3. Paul Guldinning Mashhur Teoremalari

> **Guldinning 1-teoremasi (Sirt yuzi haqida):**
> Bir tekislikda yotuvchi va o'qni kesib o'tmaydigan silliq egri chiziqning shu o'q atrofida aylanishidan hosil bo'lgan sirt yuzi, uning yoy uzunligi $L$ bilan uning og'irlik markazi chizgan aylana uzunligining ko'paytmasiga teng:
> $$
> S = 2\pi y_c \cdot L
> $$

> **Guldinning 2-teoremasi (Hajm haqida):**
> Yassi figurani o'zi bilan bitta tekislikda yotgan va uni kesib o'tmaydigan o'q atrofida aylantirishdan hosil bo'lgan jism hajmi, ushbu figura yuzi $S_0$ bilan uning og'irlik markazi chizgan aylana uzunligining ko'paytmasiga teng:
> $$
> V = 2\pi y_c \cdot S_0
> $$

---

## 📝 Qadamma-qadam Yechilgan Amaliy Misollar

### 1-misol:
$y = x^2$ parabolaning $x \in [0; 1]$ yoyini $Oy$ o'qi atrofida aylantirishdan hosil bo'lgan sirt (parabolik kosa) yuzini toping.

**Yechilishi:**
1. Aylanish o'qi: $Oy$. Demak, formula: $S_y = 2\pi \int_0^1 x \sqrt{1 + (y')^2} \, dx$.
2. Hosila: $y' = 2x$.
3. Yoy elementi:
   $$
   dl = \sqrt{1 + (2x)^2} \, dx = \sqrt{1 + 4x^2} \, dx
   $$
4. Integralni tuzamiz:
   $$
   S_y = 2\pi \int_0^1 x \sqrt{1 + 4x^2} \, dx
   $$
5. O'zgaruvchini almashtiramiz: $u = 1 + 4x^2 \implies du = 8x \, dx \implies x \, dx = \frac{du}{8}$.
   Chegaralar: $x = 0 \implies u = 1$; $x = 1 \implies u = 5$.
6. Hisoblaymiz:
   $$
   S_y = 2\pi \int_1^5 \sqrt{u} \frac{du}{8} = \frac{\pi}{4} \left. \frac{2}{3} u^{3/2} \right|_1^5 = \frac{\pi}{6} \left(5\sqrt{5} - 1\right)
   $$
**Javob:** $S_y = \frac{\pi}{6}(5\sqrt{5} - 1)$ kv. birlik.

---

### 2-misol (Katenoid — zanjir chizig'i aylanishi):
$y = a \operatorname{ch}\left(\frac{x}{a}\right)$ zanjir chizig'ining $x \in [-a; a]$ qismini $Ox$ o'qi atrofida aylantirishdan hosil bo'lgan minimal sirt (katenoid) yuzini hisoblang.

**Yechilishi:**
1. Hosila: $y' = \operatorname{sh}\left(\frac{x}{a}\right)$.
2. Yoy elementi:
   $$
   dl = \sqrt{1 + \operatorname{sh}^2(x/a)} \, dx = \sqrt{\operatorname{ch}^2(x/a)} \, dx = \operatorname{ch}\left(\frac{x}{a}\right) dx
   $$
3. Sirt yuzi integrali:
   $$
   S_x = 2\pi \int_{-a}^a a \operatorname{ch}\left(\frac{x}{a}\right) \cdot \operatorname{ch}\left(\frac{x}{a}\right) dx = 2\pi a \int_{-a}^a \operatorname{ch}^2\left(\frac{x}{a}\right) dx
   $$
4. Giperbolik ayniyatdan foydalanamiz: $\operatorname{ch}^2 u = \frac{1 + \operatorname{ch}(2u)}{2}$. Juft funksiyani $[0; a]$ ga o'tkazamiz:
   $$
   S_x = 4\pi a \int_0^a \frac{1 + \operatorname{ch}(2x/a)}{2} dx = 2\pi a \left[ x + \frac{a}{2}\operatorname{sh}\left(\frac{2x}{a}\right) \right]_0^a = 2\pi a \left( a + \frac{a}{2}\operatorname{sh}(2) \right)
   $$
   $$
   S_x = \pi a^2 \left( 2 + \operatorname{sh}(2) \right)
   $$

---

### 3-misol (Guldin teoremalari yordamida Tor sirti va hajmi):
Radiusi $r$ bo'lgan aylananing markazi $Ox$ o'qidan $R$ masofada joylashgan ($R > r$). Ushbu aylanani va u bilan chegaralangan doirani $Ox$ o'qi atrofida aylantirishdan hosil bo'lgan torning sirt yuzasi $S$ va hajmi $V$ ni toping.

**Yechilishi:**
1. **Tor sirti yuzi (1-teorema):**
   - Aylananing uzunligi: $L = 2\pi r$.
   - Aylananing og'irlik markazi uning geometrik markazida yotadi: $y_c = R$.
   - Markaz chizgan yo'l uzunligi: $2\pi y_c = 2\pi R$.
   - Guldinning 1-teoremasi bo'yicha:
     $$
     S = 2\pi y_c \cdot L = (2\pi R) \cdot (2\pi r) = 4\pi^2 R r
     $$
2. **Tor hajmi (2-teorema):**
   - Doiraning yuzi: $S_0 = \pi r^2$.
   - Doiraning og'irlik markazi ham o'sha nuqtada: $y_c = R$.
   - Guldinning 2-teoremasi bo'yicha:
     $$
     V = 2\pi y_c \cdot S_0 = (2\pi R) \cdot (\pi r^2) = 2\pi^2 R r^2
     $$
*Eslatma: Oddiy integrallar bilan hisoblash bir necha sahifali almashtirishlarni talab qilardi!*

---

### 4-misol (Yarim aylananing og'irlik markazi):
Radiusi $R$ bo'lgan yarim aylananing ($x^2 + y^2 = R^2, y \ge 0$) og'irlik markazini toping.

**Yechilishi:**
1. Simmetriyaga ko'ra, markaz $Oy$ o'qida yotadi: $x_c = 0$.
2. Yarim aylana uzunligi: $L = \pi R$.
3. Agar bu yarim aylanani $Ox$ o'qi atrofida aylantirsak, radiusi $R$ bo'lgan sfera hosil bo'ladi. Sfera sirti: $S = 4\pi R^2$.
4. Guldinning 1-teoremasiga asosan: $S = 2\pi y_c \cdot L$.
   $$
   4\pi R^2 = 2\pi y_c \cdot (\pi R) \implies y_c = \frac{4\pi R^2}{2\pi^2 R} = \frac{2R}{\pi}
   $$
**Javob:** $C\left(0; \frac{2R}{\pi}\right)$.

---

## ⚠️ Talabalar Ko'p Yo'l Qo'yadigan Xatolar

1. **Aylanish o'qini adashtirish:**
   Agar egri chiziq $Oy$ atrofida aylansa, formula ichida $x$ turishi kerak ($2\pi \int x \, dl$). Talabalar avtomatik tarzda har doim $y$ ni qo'yib, noto'g'ri o'q atrofidagi sirtni hisoblab qo'yadilar.
2. **Yoy og'irlik markazi bilan figura og'irlik markazini chalkashtirish:**
   Yarim aylananing (chiziqning) og'irlik markazi $y_c = \frac{2R}{\pi} \approx 0.637 R$.
   Yarim doiraning (yassi sohaning) og'irlik markazi esa $y_c = \frac{4R}{3\pi} \approx 0.424 R$.
   Ularni adashtirish Guldin teoremasi natijasini tubdan buzadi.
3. **Kesishish shartiga beparvolik:**
   Guldin teoremalari aylanish o'qi egri chiziqni yoki sohaning ichki nuqtalarini kesib o'tmagan holdagina o'rinlidir.

---

## 🎯 Mustaqil Yechish Uchun Masalalar

1. $y = \sqrt{x}$ ning $x \in [0; 2]$ yoyini $Ox$ o'qi atrofida aylantirishdan hosil bo'lgan sirt yuzini hisoblang.
2. Radiusi $R$ bo'lgan yarim doiraning ($y \ge 0, x^2 + y^2 \le R^2$) og'irlik markazini Guldinning 2-teoremasi va shar hajmi ($V = \frac{4}{3}\pi R^3$) orqali toping.
3. Astroidaning ($x = a \cos^3 t, y = a \sin^3 t$) $Ox$ o'qi atrofida aylanishidan hosil bo'lgan sirt yuzini toping.

<details style="margin-top: 1rem; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); cursor: pointer;">
<summary style="font-weight: 700; color: var(--primary);">Javoblar va Ko'rsatmalar</summary>

**1-masala:** $y' = \frac{1}{2\sqrt{x}} \implies dl = \sqrt{1 + \frac{1}{4x}} dx = \frac{\sqrt{4x+1}}{2\sqrt{x}} dx$.
$S_x = 2\pi \int_0^2 \sqrt{x} \frac{\sqrt{4x+1}}{2\sqrt{x}} dx = \pi \int_0^2 \sqrt{4x+1} dx = \left. \frac{\pi}{6}(4x+1)^{3/2} \right|_0^2 = \frac{13\pi}{3}$.

**2-masala:** Shar hajmi $V = \frac{4}{3}\pi R^3$. Yarim doira yuzi $S_0 = \frac{\pi R^2}{2}$.
Guldin 2-teoremasi: $V = 2\pi y_c \cdot S_0 \implies \frac{4}{3}\pi R^3 = 2\pi y_c \frac{\pi R^2}{2} \implies y_c = \frac{4R}{3\pi}$.

**3-masala:** Simmetriya bo'yicha yuqori yarmi aylanadi. $dl = 3a|\sin t \cos t| dt$.
Javob: $S_x = \frac{12}{5}\pi a^2$.

</details>

---

## 💡 Xulosa va Imtihon Maslahatlari

- Aylanish sirti integralini tuzganda har doim uch narsani aniqlang: 1) o'q ($Ox$ yoki $Oy$); 2) yoy differensiali $dl$; 3) radius masofa ($y$ yoki $x$).
- Murakkab shakllarning hajmi yoki sirtini topishda doimo birinchi bo'lib Guldin teoremasini qo'llash imkoniyatini qidiring — u ko'p qavatli hisoblashlarni bir qatorli ko'paytmaga aylantiradi.
