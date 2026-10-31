---
title: "Hosilaning iqtisodiy va fizik tatbiqlari: Marjinal tahlil va elastiklik"
description: "Marjinal xarajat va daromad, talab elastikligi, garmonik tebranishlar va radioaktiv parchalanish jarayonlarida hosiladan foydalanish."
module: "hosila"
order: 14
---

## 📌 Kirish va Geometrik/Fizik Ma'no

Matematikada hosila shunchaki $y = f(x)$ funksiya grafigiga o'tkazilgan urinmaning burchak koeffitsiyenti emas. Uning tub mohiyati — **har qanday tabiatdagi jarayonlarning lahzalik o'zgarish tezligidir**. Agar biz o'zgaruvchan dunyoni tushunishni istasak, differensial hisobsiz bir qadam ham siljiy olmaymiz.

Fizikada Nyuton ikkinchi qonunini ($F = ma$) aynan hosila orqali ifodalagan: jismning tezlanishi — tezlikning vaqt bo'yicha hosilasidir ($a = \frac{dv}{dt} = \frac{d^2 s}{dt^2}$). Elektr toki — zaryad oqimining hosilasi ($I = \frac{dq}{dt}$), quvvat esa — bajarilgan ishning hosilasi ($P = \frac{dA}{dt}$).

XIX asr oxirida esa iqtisodiyot fanida haqiqiy inqilob yuz berdi — **marjinalizm (marjinal inqilob)** dunyoga keldi. Iqtisodchilar tushunib yetishdiki, iste'molchilar va korxonalar o'z qarorlarini jami miqdorlarga qarab emas, balki **"qo'shimcha bitta birlik"** keltiradigan naflilik yoki xarajatga qarab qabul qiladilar. Iqtisodiyot tilidagi "marjinal (chegaraviy)" so'zi matematika tilida aynan **"birinchi tartibli hosila"** demakdir!

---

## 📐 Asosiy Nazariya, Qoidalar va Teoremalar

### 1. Iqtisodiy tahlilda chegaraviy (marjinal) kattaliklar
Aytaylik, $Q$ — ishlab chiqarilgan yoki sotilgan mahsulot hajmi bo'lsin.

1. **Jami xarajat funksiyasi $TC(Q)$ (Total Cost):**
   - **Marjinal xarajat $MC(Q)$ (Marginal Cost):**
     $$MC(Q) = TC'(Q) = \lim_{\Delta Q \to 0} \frac{\Delta TC}{\Delta Q}$$
     *Iqtisodiy ma'nosi:* Mahsulot ishlab chiqarish hajmini qo'shimcha bir birlikka oshirish uchun talab qilinadigan qo'shimcha xarajat.
   - **O'rtacha xarajat $AC(Q)$ (Average Cost):**
     $$AC(Q) = \frac{TC(Q)}{Q}$$

2. **Jami daromad funksiyasi $TR(Q)$ (Total Revenue):**
   Agar narx $P(Q)$ bo'lsa, $TR(Q) = P(Q) \cdot Q$.
   - **Marjinal daromad $MR(Q)$ (Marginal Revenue):**
     $$MR(Q) = TR'(Q)$$
     *Iqtisodiy ma'nosi:* Mahsulot sotish hajmini qo'shimcha bir birlikka oshirishdan olinadigan qo'shimcha daromad.

3. **Foydani maksimallashtirish qoidasi:**
   Jami sof foyda: $\Pi(Q) = TR(Q) - TC(Q)$.
   Foydaning maksimumga erishishining zaruriy sharti:
   $$\Pi'(Q) = 0 \iff TR'(Q) - TC'(Q) = 0 \iff MR = MC$$
   Bu biznes olamining "oltin qoidasi"dir: korxona marjinal daromad marjinal xarajatga tenglashguncha ishlab chiqarishni kengaytirishi lozim!

### 2. Funksiya elastikligi (Nisbiy sezgirlik)
Absolyut hosila o'lchov birliklariga (so'm, dollar, kilogramm) bog'liq. Har xil tovarlarni taqqoslash uchun **foizli o'zgarishlar nisbati** — **elastiklik** kiritiladi.

> **Ta'rif:** $y = f(x)$ funksiyaning $x$ bo'yicha elastikligi deb, argument $x$ bir foizga o'zgarganda funksiya $y$ necha foizga o'zgarishini ko'rsatuvchi miqdorga aytiladi:
> 
> $$E_x(y) = \lim_{\Delta x \to 0} \frac{\Delta y / y}{\Delta x / x} = \frac{x}{y} \cdot y'$$

- **Talabning narx bo'yicha elastikligi ($E_p(D)$):**
  Narx oshganda talab kamaygani sababli $D'(p) \le 0$, shu sababli modul bo'yicha qaraladi:
  - $|E_p| > 1$ — **elastik talab** (narx 1% oshsa, sotuv 1% dan ko'proq pasayadi $\implies$ daromad kamayadi);
  - $|E_p| = 1$ — **birlik elastiklik** (daromad ekstremumga yetadi);
  - $|E_p| < 1$ — **noelastik talab** (dori-darmon, non; narx oshsa ham xarid deyarli kamaymaydi $\implies$ narx oshishi daromadni ko'paytiradi).

### 3. Fizik va kimyoviy jarayonlarda hosila
- **Mexanikada:** Yo'l $s(t)$, tezlik $v(t) = s'(t)$, tezlanish $a(t) = s''(t)$.
- **Elektrodinamikada:** Zaryad $q(t)$, tok kuchi $I(t) = q'(t)$, o'zinduksiya EYuK $\mathcal{E} = -L I'(t)$.
- **Termodinamikada:** Issiqlik sig'imi $C = \frac{dQ}{dT}$.
- **Radioaktiv yemirilish:** Modda miqdorining kamayish tezligi uning qoldiq miqdoriga to'g'ri mutanosib: $\frac{dN}{dt} = -\lambda N \implies N(t) = N_0 e^{-\lambda t}$.

---

## 📝 Qadamma-qadam Yechilgan Amaliy Misollar

### 1-misol: Optimal ishlab chiqarish hajmi va maksimal foyda
Korxonaning jami xarajat funksiyasi $TC(Q) = Q^3 - 6Q^2 + 15Q$ va mahsulot narxi $P = 27$ so'm (o'zgarmas, mukammal raqobat bozori).
a) Marjinal xarajat $MC(Q)$ ni toping;
b) Foydani maksimal qiluvchi $Q^*$ hajmni va maksimal foydani aniqlang.

**Yechilishi:**
1. Jami daromad funksiyasini tuzamiz:
   $$TR(Q) = P \cdot Q = 27Q$$
2. Marjinal xarajatni hosila orqali topamiz:
   $$MC(Q) = TC'(Q) = (Q^3 - 6Q^2 + 15Q)' = 3Q^2 - 12Q + 15$$
3. Foyda funksiyasini tuzamiz:
   $$\Pi(Q) = TR(Q) - TC(Q) = 27Q - (Q^3 - 6Q^2 + 15Q) = -Q^3 + 6Q^2 + 12Q$$
4. Ekstremumni topish uchun hosilani nolga tenglaymiz:
   $$\Pi'(Q) = -3Q^2 + 12Q + 12 = 0 \implies Q^2 - 4Q - 4 = 0$$
   Iqtisodiyotda diskret tahlilda $MR = MC$ qoidasidan:
   $$27 = 3Q^2 - 12Q + 15 \implies 3Q^2 - 12Q - 12 = 0 \implies Q^2 - 4Q - 4 = 0$$
   Ildizlari: $Q = \frac{4 \pm \sqrt{16 + 16}}{2} = 2 \pm 2\sqrt{2}$.
   Hajm musbat bo'lishi kerak: $Q^* = 2 + 2\sqrt{2} \approx 4.83$.
5. Ikkinchi tartibli hosila: $\Pi''(Q) = -6Q + 12$. $Q^* \approx 4.83$ da $\Pi''(4.83) = -6(4.83) + 12 < 0$ (maksimum tasdiqlandi).

**Javob:** $MC = 3Q^2 - 12Q + 15$; optimal hajm $Q^* \approx 4.83$.

---

### 2-misol: Talab elastikligi va narx siyosati
Tovarga bo'lgan talab qonuni $Q(p) = 200 - 4p$ tenglama bilan ifodalanadi ($0 < p < 50$).
a) Talab elastikligi formulasini toping;
b) $p = 20$ va $p = 35$ narxlarda elastiklikni hisoblang va iqtisodiy talqin bering;
c) Jami daromad qaysi narxda eng katta bo'ladi?

**Yechilishi:**
1. Talab funksiyasidan narx bo'yicha hosila olamiz:
   $$Q'(p) = (200 - 4p)' = -4$$
2. Elastiklik formulasiga qo'yamiz:
   $$E_p(Q) = \frac{p}{Q} \cdot Q'(p) = \frac{p}{200 - 4p} \cdot (-4) = -\frac{4p}{4(50 - p)} = -\frac{p}{50 - p}$$
3. Qiymatlarni hisoblaymiz:
   - $p = 20$ da: $E_{20} = -\frac{20}{50 - 20} = -\frac{20}{30} = -\frac{2}{3} \approx -0.67$.
     $|E| < 1$ — talab noelastik. Agar narx 1% oshirilsa, talab atigi 0.67% ga kamayadi. Demak, narxni oshirish jami daromadni ko'paytiradi.
   - $p = 35$ da: $E_{35} = -\frac{35}{50 - 35} = -\frac{35}{15} = -\frac{7}{3} \approx -2.33$.
     $|E| > 1$ — talab yuqori elastik. Narx 1% oshsa, xaridorlar 2.33% ga kamayadi, daromad pasayadi!
4. Maksimal daromad sharti: Birlik elastiklik $|E_p| = 1$:
   $$\left|-\frac{p}{50 - p}\right| = 1 \implies \frac{p}{50 - p} = 1 \implies p = 25$$
   Haqiqatan ham, $TR(p) = p \cdot Q(p) = 200p - 4p^2$.
   $TR'(p) = 200 - 8p = 0 \implies p = 25$ so'm.

**Javob:** $p = 20$ da $|E| \approx 0.67$ (noelastik); $p = 35$ da $|E| \approx 2.33$ (elastik); maksimal daromad $p = 25$ da olinadi.

---

### 3-misol: So'nuvchi tebranishlar va tormozlanish qarshiligi
Mayatnikning harakat qonuni $x(t) = 5 e^{-0.2 t} \cos(4t)$ (sm) ko'rinishida berilgan.
a) $t = 0$ lahzadagi boshlang'ich tezlik va tezlanishni toping;
b) Harakatning to'xtash lahzalaridagi tezlik shartini yozing.

**Yechilishi:**
1. Tezlikni topish uchun ko'paytmaning hosilasini olamiz:
   $$v(t) = x'(t) = 5 \left[ (-0.2) e^{-0.2t} \cos(4t) + e^{-0.2t} (-4\sin(4t)) \right] = -e^{-0.2t} \left[ \cos(4t) + 20\sin(4t) \right]$$
2. $t = 0$ da boshlang'ich tezlik:
   $$v(0) = -e^0 [\cos 0 + 20\sin 0] = -1 \cdot [1 + 0] = -1\text{ sm/s}$$
3. Tezlanishni topish uchun $v(t)$ dan hosila olamiz:
   $$a(t) = v'(t) = 0.2 e^{-0.2t} [\cos(4t) + 20\sin(4t)] - e^{-0.2t} [-4\sin(4t) + 80\cos(4t)]$$
   $$a(t) = e^{-0.2t} \left[ (0.2 - 80)\cos(4t) + (4 + 4)\sin(4t) \right] = e^{-0.2t} [-79.8\cos(4t) + 8\sin(4t)]$$
4. $t = 0$ dagi boshlang'ich tezlanish:
   $$a(0) = e^0 [-79.8\cos 0 + 8\sin 0] = -79.8\text{ sm/s}^2$$

**Javob:** $v(0) = -1\text{ sm/s}, \quad a(0) = -79.8\text{ sm/s}^2$.

---

### 4-misol: Nyutonning sovish qonuni va sovuqlash tezligi
Xona harorati $T_0 = 20^\circ\text{C}$ bo'lgan xonada qaynagan choynakning harorati $T(t) = 20 + 80 e^{-0.05 t}$ qonuniyat bo'yicha o'zgaradi ($t$ — minut).
a) 10-minutdagi choynakning haroratini hisoblang;
b) 10-minutdagi sovish tezligini toping.

**Yechilishi:**
1. $t = 10$ minutdagi harorat:
   $$T(10) = 20 + 80 e^{-0.05 \cdot 10} = 20 + 80 e^{-0.5} \approx 20 + 80 \cdot 0.6065 = 20 + 48.52 = 68.52^\circ\text{C}$$
2. Sovish tezligi — bu haroratning vaqt bo'yicha hosilasidir:
   $$v_{sovish}(t) = T'(t) = (20 + 80 e^{-0.05 t})' = 80 \cdot (-0.05) e^{-0.05 t} = -4 e^{-0.05 t}\text{ }^\circ\text{C/min}$$
3. $t = 10$ minutdagi tezlik:
   $$T'(10) = -4 e^{-0.5} \approx -4 \cdot 0.6065 \approx -2.43^\circ\text{C/min}$$
   Minus ishora harorat pasayib borayotganini bildiradi. Ya'ni 10-minutda suv har daqiqada taxminan $2.43^\circ\text{C}$ ga sovimoqda.

**Javob:** $T(10) \approx 68.52^\circ\text{C}$, sovish tezligi $-2.43^\circ\text{C/min}$.

---

## ⚠️ Talabalar Ko'p Yo'l Qo'yadigan Xatolar (Tipik tuzoqlar)

1. **O'rtacha kattalik bilan chegaraviy (marjinal) kattalikni aralashtirish:**
   > ⛔ **Xato:** "$MC = \frac{TC}{Q}$".
   > 
   > 💡 **Sabab:** $\frac{TC}{Q}$ bu **o'rtacha xarajat** ($AC$). Marjinal xarajat esa albatta **hosila** orqali hisoblanadi: $MC = TC'(Q)$. Bir dona qo'shimcha tovar ishlab chiqarish xarajati oldingi tovarlarning o'rtacha xarajatidan butunlay farq qilishi mumkin!

2. **Elastiklik formulalarida o'zgaruvchilar o'rnini almashtirib qo'yish:**
   $E_x(y) = \frac{x}{y} y'$ formulasida argument suratda ($x$), funksiya maxrajda ($y$) turadi. Ko'pchilik talabalar uni teskari $\frac{y}{x} y'$ deb yozib, noto'g'ri natija oladilar.

3. **Fizik masalalarda vaqt bo'yicha emas, boshqa o'zgaruvchi bo'yicha hosila olish:**
   Tezlik va tezlanish doimo **vaqt** ($t$) o'zgaruvchisi bo'yicha olingan hosiladir.

---

## 🎯 Mustaqil Yechish Uchun Masalalar

1. Jami xarajat $TC(Q) = 2Q^2 + 5Q + 18$ bo'lganda, qaysi $Q$ hajmda o'rtacha xarajat $AC(Q)$ minimal bo'ladi? (Maslahat: $AC = MC$ shartidan foydalaning).
2. Talab funksiyasi $Q = 120 - 3p^2$ berilgan. $p = 4$ bo'lganda talab elastikligini hisoblang.
3. To'g'ri chiziqli harakat qilayotgan jismning yo'l tenglamasi $s(t) = t^3 - 6t^2 + 9t + 2$ (metr). Jismning tezligi qaysi vaqt lahzalarida nolga teng bo'ladi?
4. Idishdan suv oqib chiqmoqda, undagi suv hajmi $V(t) = 100(10 - t)^2$ litr ($0 \le t \le 10$). $t = 2$ minutdagi oqib chiqish tezligini toping.

<details style="margin-top: 1rem; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); cursor: pointer;">
<summary style="font-weight: 700; color: var(--primary);">Mashqlar javoblarini ko'rish</summary>

**1-masala:**
$AC(Q) = 2Q + 5 + \frac{18}{Q}$. Hosilasi: $AC'(Q) = 2 - \frac{18}{Q^2} = 0 \implies Q^2 = 9 \implies Q = 3$.
Shuningdek, $MC(3) = 4(3) + 5 = 17$ va $AC(3) = 6 + 5 + 6 = 17$ ($MC = AC$ bajarildi).

**2-masala:**
$p = 4$ da $Q = 120 - 3(16) = 72$. Hosila: $Q' = -6p = -24$.
$E = \frac{4}{72} \cdot (-24) = -\frac{4}{3} \approx -1.33$ (elastik talab).

**3-masala:**
$v(t) = s'(t) = 3t^2 - 12t + 9 = 0 \implies t^2 - 4t + 3 = 0 \implies t_1 = 1\text{ s}, t_2 = 3\text{ s}$.

**4-masala:**
$V'(t) = 100 \cdot 2(10 - t) \cdot (-1) = -200(10 - t)$.
$t = 2$ da: $V'(2) = -200(8) = -1600\text{ litr/min}$.

</details>

---

## 💡 Xulosa va Imtihon Maslahatlari

- Hosilaning tatbiqlariga oid masalalarda eng muhimi — **matnli shartni matematik funksiya shakliga to'g'ri o'gira olishdir**. "Chegaraviy xarajat", "tezlik", "oqim", "unumdorlik" so'zlari uchradimi — darhol tegishli funksiyadan hosila olishni rejalashtiring.
- Iqtisodiy tahlilda $MR = MC$ qoidasi foydani maksimallashtirishning eng kuchli quroli hisoblanadi.
- Elastiklik koeffitsiyenti o'lchovsiz son bo'lib, xalqaro biznesda turli valyuta va birliklardagi mahsulotlarni o'zaro solishtirishda doimo hosila elastikligidan foydalaniladi.
