---
title: "Bir jinsli bo'lmagan DT xususiy yechimini tanlashning to'liq jadvali va amaliy modellar"
module: "differensial-tenglamalar"
description: "O'ng tomon f(x) ko'rinishiga qarab xususiy yechim y_xus ni tanlashning to'liq 12 qatorli Mathprofi jadvali, rezonans siri, geometrik va fizik masalalardan (ortogonal trayektoriyalar, sovush, radioaktiv yemirilish) DT tuzish."
order: 11
duration: "32 daqiqa"
category: "Amaliy differensial tenglamalar"
difficulty: "Qiyin"
---

## Kirish: Real hayot hodisalari va tashqi kuchlar

Bir jinsli differensial tenglamalar ($f(x) = 0$) tabiatdagi erkin, o'z holiga tashlab qo'yilgan tizimlarni ifodalaydi: prujinaning erkin tebranishi, elektr zanjiridagi tokning o'z-o'zidan so'nishi.

Biroq real hayotda tizimga deyarli doim **tashqi kuchlar** ta'sir qiladi: tebranayotgan ko'prikka urilayotgan ritmik shamol, zanjirga ulangan o'zgaruvchan kuchlanish manbai ($U(t) = U_0 \sin \omega t$), motorning tebranishi, harorati o'zgaruvchan muhitdagi jism. Bunday jarayonlar **bir jinsli bo'lmagan chiziqli differensial tenglamalar** orqali tavsiflanadi:
$$
y'' + p y' + q y = f(x)
$$

Bunday tenglamalarni yechishda Lagranjning o'zgarmaslarni variatsiyalash usuli umumiy bo'lsa-da, hisob-kitoblari juda uzun va murakkab integrallarni talab qiladi. Amaliyotda agar $f(x)$ maxsus ko'rinishga (ko'phad, ko'rsatkichli, trigonometrik) ega bo'lsa, **noma'lum koeffitsiyentlar usuli (tanlash usuli)** integrallashsiz, bir necha qadamda aniq va tez yechim beradi!

---

## 1. Chiziqli bir jinsli bo'lmagan DT umumiy yechimi strukturasi

> **Asosiy teorema (Yechim strukturasi):**
> Bir jinsli bo'lmagan chiziqli tenglamaning umumiy yechimi mos bir jinsli tenglamaning umumiy yechimi ($y_{oj}$) hamda berilgan bir jinsli bo'lmagan tenglamaning biror xususiy yechimi ($y_{xus}$) yig'indisiga teng:
> $$
> y = y_{oj} + y_{xus}
> $$

Bu yerda:
- $y_{oj}$ — $y'' + p y' + q y = 0$ bir jinsli tenglamaning xarakteristik tenglama orqali topiladigan umumiy yechimi;
- $y_{xus}$ — $y'' + p y' + q y = f(x)$ tenglamani ayniyatga aylantiruvchi, o'zgarmas koeffitsiyentlarsiz olingan bitta aniq funksiya.

### Superpozitsiya prinsipi:
Agar tenglamaning o'ng tomoni bir nechta funksiyaning yig'indisidan iborat bo'lsa:
$$
f(x) = f_1(x) + f_2(x) + \dots + f_m(x)
$$
u holda xususiy yechim ham har bir qismga mos xususiy yechimlarning yig'indisi sifatida qidiriladi:
$$
y_{xus} = y_{xus1} + y_{xus2} + \dots + y_{xusm}
$$

---

## 2. Xususiy yechim $y_{xus}$ ni tanlashning to'liq 12 qatorli Mathprofi jadvali

O'ng tomon $f(x)$ umumiy ko'rinishda **kvazi-ko'phad** deb ataladi:
$$
f(x) = e^{\alpha x} \left[ P_m(x) \cos(\beta x) + Q_n(x) \sin(\beta x) \right]
$$

Bunda eng muhim parametr — **tekshiruvchi son** (nazorat soni):
$$
\gamma = \alpha \pm i\beta
$$

Xususiy yechim ko'rinishi ushbu $\gamma$ sonining xarakteristik tenglama ildizlari ($k_1, k_2$) orasida necha marta uchrashiga ($s$ karraliligiga, $s \in \{0, 1, 2\}$) bog'liq bo'ladi:
$$
y_{xus} = x^s e^{\alpha x} \left[ R_l(x) \cos(\beta x) + T_l(x) \sin(\beta x) \right]
$$
bu yerda $l = \max(m, n)$, $R_l(x)$ va $T_l(x)$ — noaniq koeffitsiyentli $l$-darajali ko'phadlar.

Quyida amaliyotda uchraydigan barcha holatlarni jamlagan **to'liq 12 qatorli jadval** keltirilgan:

| T/r | O'ng tomon $f(x)$ | Tekshiruvchi son $\gamma$ | Xarakteristik ildizlar bilan munosabati | Xususiy yechim ko'rinishi $y_{xus}$ |
|---|---|---|---|---|
| **1** | $A$ (o'zgarmas son) | $\gamma = 0$ | $k=0$ ildiz emas ($q \neq 0$) | $y_{xus} = B$ |
| **2** | $A$ (o'zgarmas son) | $\gamma = 0$ | $k=0$ bitta ildiz ($q=0, p \neq 0$) | $y_{xus} = B x$ |
| **3** | $Ax + B$ (1-darajali ko'phad) | $\gamma = 0$ | $k=0$ ildiz emas | $y_{xus} = M x + N$ |
| **4** | $Ax^2 + Bx + C$ | $\gamma = 0$ | $k=0$ ildiz emas | $y_{xus} = M x^2 + N x + P$ |
| **5** | $P_n(x)$ ($n$-darajali ko'phad) | $\gamma = 0$ | $k=0$ soni $s$-karrali ildiz ($s=0, 1, 2$) | $y_{xus} = x^s (A_n x^n + \dots + A_1 x + A_0)$ |
| **6** | $A e^{ax}$ | $\gamma = a$ | $a$ xarakteristik ildiz emas | $y_{xus} = M e^{ax}$ |
| **7** | $A e^{ax}$ | $\gamma = a$ | $a$ oddiy (1 karrali) ildiz | $y_{xus} = M x e^{ax}$ |
| **8** | $A e^{ax}$ | $\gamma = a$ | $a$ karrali (2 karrali) ildiz | $y_{xus} = M x^2 e^{ax}$ |
| **9** | $P_n(x) e^{ax}$ | $\gamma = a$ | $a$ soni $s$-karrali ildiz ($s=0, 1, 2$) | $y_{xus} = x^s Q_n(x) e^{ax}$ |
| **10** | $A\cos(\beta x)$ yoki $B\sin(\beta x)$ | $\gamma = \pm i\beta$ | $\pm i\beta$ xarakteristik ildiz emas | $y_{xus} = M \cos(\beta x) + N \sin(\beta x)$ |
| **11** | $A\cos(\beta x) + B\sin(\beta x)$ | $\gamma = \pm i\beta$ | $\pm i\beta$ xarakteristik ildiz (**Rezonans!**) | $y_{xus} = x (M \cos(\beta x) + N \sin(\beta x))$ |
| **12** | $e^{\alpha x}(A\cos\beta x + B\sin\beta x)$ | $\gamma = \alpha \pm i\beta$ | $\alpha \pm i\beta$ soni $s$-karrali ildiz ($s=0, 1$) | $y_{xus} = x^s e^{\alpha x}(M \cos\beta x + N \sin\beta x)$ |

> **Muhim eslatma (Trigonometriya qoidasi):**
> Agar o'ng tomonda faqat sinus (masalan, $f(x) = \sin 3x$) yoki faqat kosinus bo'lsa ham, xususiy yechim tarkibiga **har doim sinus ham, kosinus ham** kiritilishi shart: $y_{xus} = M\cos 3x + N\sin 3x$! Chunki hosila olinganda sinus kosinusga, kosinus esa sinusga aylanadi.

---

## 3. Rezonans tushunchasi va ko'paytuvchi $x^s$ ning kelib chiqishi

Nega o'ng tomon xarakteristik ildizga to'g'ri kelib qolganda qo'shimcha $x$ yoki $x^2$ ko'paytuvchisi kiritiladi?

### Matematik sababi:
Aytaylik, $y'' - 3y' + 2y = e^x$ tenglama berilgan bo'lsin.
Xarakteristik tenglama: $k^2 - 3k + 2 = 0 \implies k_1 = 1, k_2 = 2$.
Bir jinsli tenglama yechimi: $y_{oj} = C_1 e^x + C_2 e^{2x}$.

Agar biz xususiy yechimni odatdagidek $y_{xus} = A e^x$ deb qidirsak, uni tenglamaning chap tomoniga qo'yganimizda:
$$
y_{xus}'' - 3y_{xus}' + 2y_{xus} = A e^x - 3A e^x + 2A e^x = (1 - 3 + 2) A e^x = 0 \cdot A e^x = 0
$$
Chap tomon har qanday $A$ uchun $0$ ga aylanib ketadi va hech qachon o'ng tomondagi $e^x$ ga teng bo'la olmaydi! Chunki $e^x$ bir jinsli tenglamaning o'z yechimidir.

Yechimni chiziqli erkli qilish uchun uni $x$ ga ko'paytiramiz:
$$
y_{xus} = A x e^x
$$
Hosilalar:
$$
y_{xus}' = A e^x + A x e^x = A(1 + x)e^x
$$
$$
y_{xus}'' = A e^x + A(1 + x)e^x = A(2 + x)e^x
$$
Tenglamaga qo'yamiz:
$$
A(2 + x)e^x - 3A(1 + x)e^x + 2A x e^x = e^x
$$
$e^x$ ga bo'lib yuboramiz:
$$
A(2 + x - 3 - 3x + 2x) = 1 \implies A(2 - 3) = 1 \implies -A = 1 \implies A = -1
$$
Demak, $y_{xus} = -x e^x$!

### Fizik talqini:
Prujinadagi yukning xususiy chastotasi $\omega_0$ bo'lsin: $x'' + \omega_0^2 x = F_0 \cos(\omega t)$.
Agar tashqi kuch chastotasi xususiy chastotaga teng bo'lsa ($\omega = \omega_0$), **rezonans** yuz beradi. Xususiy yechim:
$$
x_{xus}(t) = \frac{F_0}{2\omega_0} t \sin(\omega_0 t)
$$
Bu yerda $t$ ko'paytuvchisi tebranish amplitudasining vaqt o'tishi bilan chiziqli cheksiz o'sib borishini ko'rsatadi. 1940-yilda AQShdagi Takoma ko'prigining qulashi aynan shamol chastotasi ko'prikning tebranish chastotasiga to'g'ri kelib rezonans hosil qilishi oqibatida sodir bo'lgan!

---

## 4. Geometrik masalalardan DT tuzish

Geometrik masalalarda egri chiziqning urinmasi va normali xossalariga ko'ra differensial tenglama tuziladi.

Egri chiziqning $M(x, y)$ nuqtasidagi:
- **Urinma tenglamasi:**
$$
Y - y = y'(X - x)
$$
- **Normal tenglamasi:**
$$
Y - y = -\frac{1}{y'}(X - x)
$$

Koordinata o'qlari bilan kesishish nuqtalari:
- Urinmaning $Ox$ o'qi bilan kesishishi ($Y = 0$):
$$
X_T = x - \frac{y}{y'}
$$
- Urinmaning $Oy$ o'qi bilan kesishishi ($X = 0$):
$$
Y_T = y - x y'
$$
- Normalning $Ox$ o'qi bilan kesishishi ($Y = 0$):
$$
X_N = x + y y'
$$

Geometrik kesmalar:
- **Suburinma (subtangent):** $S_T = |x - X_T| = \left| \frac{y}{y'} \right|$
- **Subnormal:** $S_N = |X_N - x| = |y \cdot y'|$
- **Urinma kesmasi uzunligi:** $T = \sqrt{y^2 + S_T^2} = |y| \sqrt{1 + \frac{1}{(y')^2}} = \left| \frac{y}{y'} \right| \sqrt{1 + (y')^2}$
- **Normal kesmasi uzunligi:** $N = \sqrt{y^2 + S_N^2} = |y| \sqrt{1 + (y')^2}$

#### Geometrik masala namunasi:
Har qanday nuqtasidagi subnormali o'zgarmas musbat $a$ soniga teng bo'lgan egri chiziqni toping.

**Yechilishi:**
Subnormal formulasi: $S_N = y y' = a$.
Bu o'zgaruvchilari ajraladigan 1-tartibli differensial tenglama:
$$
y \frac{dy}{dx} = a \implies y \, dy = a \, dx
$$
Integrallaymiz:
$$
\frac{y^2}{2} = a x + C \implies y^2 = 2ax + 2C
$$
O'zgarmasni $2C = C_1$ desak:
$$
y^2 = 2ax + C_1
$$
Bu simmetriya o'qi $Ox$ bo'lgan **parabolalar oilasidir**!

---

## 5. Ortogonal trayektoriyalarni topish usuli

> **Ta'rif:**
> Berilgan $\Phi(x, y, C) = 0$ bir parametrli egri chiziqlar oilasining har bir chizig'ini to'g'ri burchak ($\frac{\pi}{2}$) ostida kesib o'tuvchi egri chiziqlar oilasi **ortogonal trayektoriyalar** deb ataladi.

Fizikada ortogonal trayektoriyalar juda katta ahamiyatga ega: elektrostatikada **ekvipotensial chiziqlarga** (bir xil potensialli chiziqlarga) ortogonal bo'lgan chiziqlar **elektr maydoni kuch chiziqlaridir**; gidrodinamikada oqim chiziqlari potensial sath chiziqlariga ortogonal bo'ladi.

### Ortogonal trayektoriyalarni topish algoritmi:
1. Berilgan $\Phi(x, y, C) = 0$ tenglikni $x$ bo'yicha differensiallab va sistemadan $C$ parametrni yo'qotib, oilaning differensial tenglamasi tuziladi:
$$
y' = f(x, y)
$$
2. Ikki to'g'ri chiziqning perpendikulyarlik shartiga ($k_1 \cdot k_2 = -1$) asosan, hosila $y'$ o'rniga unga perpendikulyar yo'nalish qo'yiladi:
$$
y' \longrightarrow -\frac{1}{y'}
$$
Natijada ortogonal trayektoriyalar differensial tenglamasi hosil bo'ladi:
$$
-\frac{1}{y'} = f(x, y) \implies y' = -\frac{1}{f(x, y)}
$$
3. Hosil bo'lgan yangi differensial tenglama integrallanadi.

#### Ortogonal trayektoriyaga misol:
$y = C x^2$ parabolalar oilasining ortogonal trayektoriyalarini toping.

**Yechilishi:**
1. Differensiallaymiz: $y' = 2Cx$.
$y = C x^2$ dan $C = \frac{y}{x^2}$ ekanligini qo'yamiz:
$$
y' = 2 \left( \frac{y}{x^2} \right) x = \frac{2y}{x}
$$
Bu parabolalar oilasining differensial tenglamasi.

2. $y'$ o'rniga $-\frac{1}{y'}$ qo'yamiz:
$$
-\frac{1}{y'} = \frac{2y}{x} \implies y' = -\frac{x}{2y}
$$

3. Ushbu tenglamani yechamiz:
$$
\frac{dy}{dx} = -\frac{x}{2y} \implies 2y \, dy = -x \, dx
$$
Integrallaymiz:
$$
y^2 = -\frac{x^2}{2} + C_1 \implies \frac{x^2}{2} + y^2 = C_1
$$
Ikkala tomonni $C_1$ ga bo'lsak:
$$
\frac{x^2}{2C_1} + \frac{y^2}{C_1} = 1
$$
Bu yarim o'qlari nisbati $\sqrt{2}$ bo'lgan **ellipslar oilasidir**! Parabolalar va ellipslar bir-birini har bir kesishish nuqtasida aynan $90^\circ$ burchak ostida kesadi.

---

## 6. Fizik modellar

### 1. Nyutonning sovush qonuni
Jismning sovush tezligi uning harorati va atrof-muhit harorati ayirmasiga to'g'ri mutanosib:
$$
\frac{dT}{dt} = -k(T - T_m)
$$
bu yerda $T(t)$ — jismning $t$ vaqtdagi harorati, $T_m$ — atrof-muhit harorati ($T_m = \text{const}$), $k > 0$ — jismning issiqlik o'tkazuvchanlik koeffitsiyenti.

O'zgaruvchilarni ajratamiz:
$$
\frac{dT}{T - T_m} = -k \, dt \implies \ln|T - T_m| = -kt + \ln C \implies T(t) = T_m + C e^{-kt}
$$
Agar boshlang'ich vaqtda $t = 0$ da harorat $T(0) = T_0$ bo'lsa, $C = T_0 - T_m$ bo'ladi:
$$
T(t) = T_m + (T_0 - T_m) e^{-kt}
$$

### 2. Radioaktiv yemirilish qonuni
Moddaning yemirilish tezligi mavjud modda miqdoriga to'g'ri mutanosib:
$$
\frac{dm}{dt} = -k m \implies m(t) = m_0 e^{-kt}
$$
**Yarim yemirilish davri ($T_{1/2}$):** Modda massasi 2 marta kamayishi uchun ketgan vaqt:
$$
\frac{m_0}{2} = m_0 e^{-k T_{1/2}} \implies e^{k T_{1/2}} = 2 \implies T_{1/2} = \frac{\ln 2}{k} \approx \frac{0.693}{k}
$$
Bu qonuniyat arxeologiyada qazilmalarning yoshini radiouglerod (${}^{14}\text{C}$, $T_{1/2} \approx 5730$ yil) orqali aniqlashda asosiy qurol hisoblanadi.

### 3. Idishdagi aralashmalar dinamikasi
Sig'imi $V$ bo'lgan idishga daqiqasiga $v_{kir}$ tezlik bilan $c_{kir}$ konsentratsiyali tuzli eritma quyilmoqda. Idishdagi yaxshilab aralashtirilgan eritma xuddi shunday $v_{chiq}$ tezlik bilan oqib chiqmoqda.

Idishdagi tuz miqdori $x(t)$ uchun differensial tenglama:
$$
\frac{dx}{dt} = \text{Kiruvchi tuz tezligi} - \text{Chiquvchi tuz tezligi} = v_{kir} c_{kir} - v_{chiq} \frac{x(t)}{V(t)}
$$
Bu $x(t)$ ga nisbatan 1-tartibli chiziqli differensial tenglamadir.

---

## 7. Mustaqil mashqlar va javoblar

Quyidagi masalalarni mustaqil ishlang:

1. **Xususiy yechim ko'rinishini aniqlash:**
   $y'' - 4y' + 4y = f(x)$ tenglamaning xususiy yechim ko'rinishini noma'lum koeffitsiyentlar bilan yozing (koeffitsiyentlarni hisoblamasdan):
   a) $f(x) = 3x^2 - 1$;
   b) $f(x) = 5 e^{2x}$;
   c) $f(x) = e^{2x} \sin x$.

2. **To'liq yechish (Rezonans holati):**
   $$
   y'' + 9y = 6\cos(3x), \quad y(0) = 1, \quad y'(0) = 0
   $$

3. **Geometrik masala:**
   Koordinata boshidan o'tuvchi va har qanday nuqtasidagi urinmasining burchak koeffitsiyenti ushbu nuqta koordinatalari ko'paytmasiga proporsional ($k = 2$) bo'lgan egri chiziqni toping ($y(0)=1$ sharti bilan).

4. **Ortogonal trayektoriyalar:**
   $x^2 + y^2 = 2Cx$ aylanalar oilasiga ortogonal bo'lgan trayektoriyalar oilasini toping.

5. **Nyuton sovush qonuni:**
   Qaynab turgan choy ($100^\circ\text{C}$) xona harorati $20^\circ\text{C}$ bo'lgan xonaga qo'yildi. 10 daqiqadan so'ng uning harorati $60^\circ\text{C}$ ga tushdi. Choy harorati $30^\circ\text{C}$ ga tushishi uchun yana necha daqiqa kerak bo'ladi?

---

### Mashqlarning to'liq javoblari:

1. **1-mashq:**
   Xarakteristik tenglama: $k^2 - 4k + 4 = 0 \implies (k - 2)^2 = 0 \implies k_1 = k_2 = 2$ (2 karrali ildiz).
   - a) $f(x) = 3x^2 - 1 \implies \gamma = 0$ (ildiz emas, $s=0$).
     **Javob:** $y_{xus} = Ax^2 + Bx + C$.
   - b) $f(x) = 5e^{2x} \implies \gamma = 2$ (2 karrali ildiz, $s=2$).
     **Javob:** $y_{xus} = A x^2 e^{2x}$.
   - c) $f(x) = e^{2x} \sin x \implies \gamma = 2 \pm i$ (ildiz emas, $s=0$).
     **Javob:** $y_{xus} = e^{2x}(A\cos x + B\sin x)$.

2. **2-mashq:**
   - Xarakteristik tenglama: $k^2 + 9 = 0 \implies k = \pm 3i$. $y_{oj} = C_1 \cos(3x) + C_2 \sin(3x)$.
   - $\gamma = \pm 3i$ ildiz bo'lgani uchun $s=1$: $y_{xus} = x(A\cos 3x + B\sin 3x)$.
   - Hosilalarni hisoblab tenglamaga qo'ysak: $-6A\sin 3x + 6B\cos 3x = 6\cos 3x \implies B = 1, A = 0$.
   - $y_{xus} = x\sin(3x)$. Umumiy yechim: $y = C_1 \cos(3x) + C_2 \sin(3x) + x\sin(3x)$.
   - $y(0) = 1 \implies C_1 = 1$. $y'(0) = 3C_2 = 0 \implies C_2 = 0$.
   **Javob:** $y = \cos(3x) + x\sin(3x)$.

3. **3-mashq:**
   - $y' = 2xy \implies \frac{dy}{y} = 2x dx \implies \ln|y| = x^2 + \ln C \implies y = C e^{x^2}$.
   - $y(0) = 1 \implies C = 1$.
   **Javob:** $y = e^{x^2}$.

4. **4-mashq:**
   - $2C = \frac{x^2 + y^2}{x}$. Differensiallaymiz: $2x + 2y y' = 2C = \frac{x^2+y^2}{x} \implies 2x^2 + 2xy y' = x^2 + y^2 \implies y' = \frac{y^2 - x^2}{2xy}$.
   - Ortogonal shart: $y' \to -\frac{1}{y'} \implies y' = \frac{2xy}{x^2 - y^2}$.
   - Bu bir jinsli tenglama ($y = ux$ almashtirish). Yechimi: $x^2 + y^2 = 2 C_1 y$.
   **Javob:** $x^2 + y^2 = 2 C_1 y$ ($Oy$ o'qiga uringan aylanalar oilasi).

5. **5-mashq:**
   - $T(t) = 20 + 80 e^{-kt}$.
   - $t = 10$ da: $60 = 20 + 80 e^{-10k} \implies 80 e^{-10k} = 40 \implies e^{-10k} = \frac{1}{2} \implies 10k = \ln 2 \implies k = \frac{\ln 2}{10}$.
   - $T(t) = 30$ bo'lishi uchun: $30 = 20 + 80 e^{-kt} \implies 80 e^{-kt} = 10 \implies e^{-kt} = \frac{1}{8} = 2^{-3} \implies kt = 3\ln 2$.
   - $t = \frac{3\ln 2}{k} = 3 \cdot 10 = 30$ daqiqa.
   - Demak, jami 30 daqiqa, ya'ni dastlabki 10 daqiqadan so'ng yana **20 daqiqa** kerak bo'ladi.
   **Javob:** Yana 20 daqiqa (boshidan hisoblaganda 30 daqiqa).
