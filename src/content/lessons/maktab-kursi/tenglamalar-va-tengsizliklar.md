---
title: "Tenglamalar, tengsizliklar va intervallar usuli"
module: "maktab-kursi"
order: 2
description: "Kvadrat tenglamalar, Viyet formulasi, Gorner sxemasi, modul qatnashgan tenglamalar va ratsional tengsizliklarni intervallar usulida yechish."
---

## 📌 Kirish va Geometrik/Fizik Mohiyat

Oliy matematika daryosi maktab algebrasining mustahkam qirg'oqlariga tayanadi. Matematik analiz, chiziqli algebra, optimallashtirish va differensial tenglamalar kurslarida muvaffaqiyat qozonishning birinchi raqamli kaliti — bu **tenglamalar va tengsizliklarni benuqson, tezkor va xatosiz yechish ko'nikmasidir**.

Universitet darajasida tengsizliklar har bir qadamda uchraydi:
1. **Matematik analiz:** Funksiyaning aniqlanish sohasini ($D(f)$) topish, funksiyaning o'sish va kamayish oraliqlarini birinchi hosila orqali aniqlash ($f'(x) > 0$), botiqlik va qavariqlik sohalarini ikkinchi hosila orqali tekshirish ($f''(x) > 0$).
2. **Optimallashtirish va Iqtisodiyot:** Chiziqli va nochiziqli dasturlashda cheklovlar sistemalari aynan ko'p o'zgaruvchili tengsizliklar bilan beriladi.
3. **Ehtimollar nazariyasi:** Ehtimollik zichligi funksiyasining $f(x) \ge 0$ sharti va tasodifiy miqdorning biror oraliqqa tushish ehtimolini hisoblash.

### Geometrik falsafa
- **Tenglama $f(x) = 0$:** $y = f(x)$ funksiya grafigining gorizontal $Ox$ o'qi bilan kesishish nuqtalarini (ildizlarini) topishdir.
- **Tengsizlik $f(x) > 0$:** $y = f(x)$ grafigining $Ox$ o'qidan **yuqorida** joylashgan bo'laklarini, $f(x) < 0$ esa **pastda** joylashgan bo'laklarini topishdir.

Ushbu darsda biz kvadrat tenglamalardan boshlab, yuqori darajali ko'phadlarni Gorner sxemasi orqali ko'paytuvchilarga ajratish, modulli ifodalar va eng asosiysi — oliy matematikaning poydevori bo'lgan **Umumlashgan intervallar usuli**ni chuqur o'rganamiz.

---

## 📐 Asosiy Nazariya, Qoidalar va Teoremalar

### 1. Kvadrat tenglamalar va Viyet teoremalari

Kvadrat tenglamaning umumiy ko'rinishi:
$$
a x^2 + b x + c = 0 \quad (a \neq 0)
$$
Diskriminant: $D = b^2 - 4ac$.
- $D > 0 \implies$ ikkita haqiqiy turli ildiz: $x_{1, 2} = \frac{-b \pm \sqrt{D}}{2a}$.
- $D = 0 \implies$ bitta karrali (ikkita teng) ildiz: $x_1 = x_2 = -\frac{b}{2a}$.
- $D < 0 \implies$ haqiqiy ildizlar yo'q (ikkita qo'shma kompleks ildiz: $x_{1, 2} = -\frac{b}{2a} \pm i \frac{\sqrt{|D|}}{2a}$).

**Viyet teoremasi:**
$$
\begin{cases}
x_1 + x_2 = -\frac{b}{a} \\
x_1 \cdot x_2 = \frac{c}{a}
\end{cases}
$$
Keltirilgan kvadrat uchhadni chiziqli ko'paytuvchilarga ajratish:
$$
a x^2 + b x + c = a(x - x_1)(x - x_2)
$$

---

### 2. Yuqori darajali ko'phadlar, Bezu teoremasi va Gorner sxemasi

$n$ - darajali ko'phad:
$$
P_n(x) = a_n x^n + a_{n-1} x^{n-1} + \dots + a_1 x + a_0 \quad (a_n \neq 0)
$$

**Bezu teoremasi:**  
$P_n(x)$ ko'phadni $(x - c)$ ikkihadga bo'lgandagi qoldiq ko'phadning $c$ nuqtadagi qiymati $P_n(c)$ ga tengdir. Xususan, $c$ soni $P_n(x)$ ning ildizi bo'lsa ($P_n(c) = 0$), ko'phad $(x - c)$ ga qoldiqsiz bo'linadi.

**Butun ildizlar haqidagi teorema:**  
Agar butun koeffitsiyentli ko'phadning butun ildizi mavjud bo'lsa, u ozod had $a_0$ ning bo'luvchilaridan biri bo'ladi.

**Gorner sxemasi (Sintetik bo'lish):**  
$P_n(x)$ ni $(x - c)$ ga bo'lganda bo'linma koeffitsiyentlari $b_i$ jadval orqali bir satrda topiladi:
$$
b_n = a_n, \quad b_{k} = c \cdot b_{k+1} + a_k \quad (k = n-1, \dots, 0)
$$
Oxirgi $b_0$ soni bo'lishdan qolgan qoldiqdir ($R = b_0$).

---

### 3. Modulli (Absolyut qiymatli) tenglama va tengsizliklar

Ta'rifga ko'ra:
$$
|f(x)| = \begin{cases} f(x), & f(x) \ge 0 \\ -f(x), & f(x) < 0 \end{cases}
$$

**Asosiy ekvivalent o'tishlar:**
1. $|f(x)| = g(x) \iff \begin{cases} g(x) \ge 0 \\ f(x) = g(x) \quad \text{yoki} \quad f(x) = -g(x) \end{cases}$
2. $|f(x)| \le g(x) \iff -g(x) \le f(x) \le g(x) \iff \begin{cases} f(x) \le g(x) \\ f(x) \ge -g(x) \end{cases}$
3. $|f(x)| \ge g(x) \iff \left[ \begin{array}{l} f(x) \ge g(x) \\ f(x) \le -g(x) \end{array} \right.$
4. $|f(x)| \le |g(x)| \iff f^2(x) \le g^2(x) \iff (f(x) - g(x))(f(x) + g(x)) \le 0$

---

### 4. Umumlashgan intervallar usuli (Method of Intervals)

Ixtiyoriy kasr-ratsional tengsizlikni yechishning universal algoritmi:
$$
\frac{P(x)}{Q(x)} \gtrless 0
$$

**Qadamma-qadam qoidalar:**
1. Barcha hadlar chap tomonga o'tkazilib, umumiy maxrajga keltiriladi (o'ng tomonda faqat $0$ qoladi).
2. Surat va maxraj chiziqli ko'paytuvchilarga ajratiladi:
   $$
   \frac{A \cdot (x - x_1)^{k_1} (x - x_2)^{k_2} \dots (x - x_m)^{k_m}}{(x - y_1)^{p_1} (x - y_2)^{p_2} \dots (x - y_s)^{p_s}} \gtrless 0
   $$
3. Barcha nollar ($x_i$) va maxraj nollari ($y_j$) bitta sonlar o'qiga tartib bilan joylashtiriladi:
   - Maxraj nollari ($y_j$) **har doim ochiq (bo'yalmagan)** aylanachalar bilan belgilanadi (nolga bo'lish mumkin emas!).
   - Qat'iy tengsizliklarda ($>, <$) surat nollari ham ochiq bo'ladi.
   - Noqat'iy tengsizliklarda ($\ge, \le$) surat nollari **to'q (bo'yalgan)** qilib belgilanadi.
4. **Ildiz karraligi qoidasi (Oltin qoida):**
   - Agar ildiz **toq karrali** bo'lsa ($k = 1, 3, 5, \dots$), ushbu nuqtadan o'tganda funksiya ishorasi **qarama-qarshisiga o'zgaradi** ($+ \to -$ yoki $- \to +$).
   - Agar ildiz **juft karrali** bo'lsa ($k = 2, 4, 6, \dots$), ushbu nuqtadan o'tganda funksiya ishorasi **o'zgarmaydi** ($+ \to +$ yoki $- \to -$). Grafik o'qqa urinib qaytadi ("gulbarg").
5. Eng o'ngdagi oraliq ishorasi barcha qavslardagi $x$ oldidagi ishoralar ko'paytmasi bilan aniqlanadi. So'ngra o'ngdan chapga qarab ishoralar navbatma-navbat qo'yib chiqiladi.

---

## 📝 Qadamma-qadam Yechilgan Universitet Misollari

### 1-misol: 4-darajali tenglamani Gorner sxemasi orqali yechish
**Shart:** Tenglamani yeching:
$$
x^4 - 2x^3 - 7x^2 + 8x + 12 = 0
$$

**Yechish:**
1-qadam: Butun ildizlarni izlaymiz:
Ozod had $a_0 = 12$. Uning bo'luvchilari: $\pm 1, \pm 2, \pm 3, \pm 4, \pm 6, \pm 12$.  
Tekshirib ko'ramiz:
- $x = 1$: $1 - 2 - 7 + 8 + 12 = 12 \neq 0$.
- $x = -1$: $(-1)^4 - 2(-1)^3 - 7(-1)^2 + 8(-1) + 12 = 1 + 2 - 7 - 8 + 12 = 0$.  
Demak, $x_1 = -1$ tenglamaning birinchi ildizidir!

2-qadam: Gorner sxemasi orqali $(x + 1)$ ga bo'lamiz:
Boshlang'ich koeffitsiyentlar: $a_4 = 1, a_3 = -2, a_2 = -7, a_1 = 8, a_0 = 12$.  
Ildiz: $c = -1$.

| Koeffitsiyentlar | $a_4 = 1$ | $a_3 = -2$ | $a_2 = -7$ | $a_1 = 8$ | $a_0 = 12$ |
| :--- | :---: | :---: | :---: | :---: | :---: |
| $c = -1$ | $1$ | $-1(1) + (-2) = -3$ | $-1(-3) + (-7) = -4$ | $-1(-4) + 8 = 12$ | $-1(12) + 12 = 0$ |

Hosil bo'lgan 3-darajali ko'phad:
$$
x^3 - 3x^2 - 4x + 12 = 0
$$

3-qadam: 3-darajali ko'phadni guruhlash usulida yechamiz:
$$
x^2(x - 3) - 4(x - 3) = 0 \implies (x - 3)(x^2 - 4) = 0
$$
$$
(x - 3)(x - 2)(x + 2) = 0
$$
Qolgan ildizlar: $x_2 = 3, \quad x_3 = 2, \quad x_4 = -2$.

Boshlang'ich tenglama ko'paytuvchilarga to'liq ajraldi:
$$
(x + 1)(x + 2)(x - 2)(x - 3) = 0
$$

**Javob:** $x \in \{-2, -1, 2, 3\}$.

---

### 2-misol: Murakkab kasr-ratsional tengsizlik va juft karrali ildizlar
**Shart:** Tengsizlikni intervallar usulida yeching:
$$
\frac{(x - 2)^2 (x + 3)^3 (x - 5)}{(x + 1) (x - 4)^4} \le 0
$$

**Yechish:**
1-qadam: Ildizlarni va ularning karraligini aniqlaymiz:
- **Surat nollari:**
  - $x = 2$ — 2-karrali (**juft**, ishora o'zgarmaydi!), tengsizlik $\le 0$ bo'lgani uchun bo'yalgan nuqta;
  - $x = -3$ — 3-karrali (**toq**, ishora o'zgaradi), bo'yalgan nuqta;
  - $x = 5$ — 1-karrali (**toq**, ishora o'zgaradi), bo'yalgan nuqta.
- **Maxraj nollari (har doim ochiq/teshik nuqtalar!):**
  - $x = -1$ — 1-karrali (**toq**, ishora o'zgaradi), ochiq nuqta;
  - $x = 4$ — 4-karrali (**juft**, ishora o'zgarmaydi!), ochiq nuqta.

2-qadam: Sonlar o'qida joylashtiramiz:
Ketma-ketlik: $-3$ (to'q), $-1$ (ochiq), $2$ (to'q), $4$ (ochiq), $5$ (to'q).

3-qadam: Oraliqlarning ishoralarini belgilaymiz:
- $x > 5$ bo'lganda: barcha qavslar musbat, ishora: **$+$**.
- $x = 5$ dan o'tganda (toq karrali): ishora o'zgaradi $\implies$ **$-$**.
- $x = 4$ dan o'tganda (juft karrali, 4-daraja): ishora **o'zgarmaydi** $\implies$ **$-$**.
- $x = 2$ dan o'tganda (juft karrali, 2-daraja): ishora **o'zgarmaydi** $\implies$ **$-$**.
- $x = -1$ dan o'tganda (toq karrali): ishora o'zgaradi $\implies$ **$+$**.
- $x = -3$ dan o'tganda (toq karrali, 3-daraja): ishora o'zgaradi $\implies$ **$-$**.

Ishoralar xaritasi:
$$
(-\infty, -3] \ (\mathbf{-}) \quad [-3, -1) \ (\mathbf{+}) \quad (-1, 2] \ (\mathbf{-}) \quad [2, 4) \ (\mathbf{-}) \quad (4, 5] \ (\mathbf{-}) \quad [5, +\infty) \ (\mathbf{+})
$$

4-qadam: Shart $\le 0$ (manfiy va nol) sohalarni ajratamiz:
- $(-\infty, -3]$;
- $(-1, 4) \cup (4, 5]$ (diqqat: $x = 4$ maxraj noli bo'lgani uchun chiqarib tashlanadi, lekin $x = 2$ yechimga kiradi!).

Yakuniy yechimlar to'plami:
$$
x \in (-\infty, -3] \cup (-1, 4) \cup (4, 5]
$$

**Javob:** $x \in (-\infty, -3] \cup (-1, 4) \cup (4, 5]$.

---

### 3-misol: Ikkita modul qatnashgan tengsizlik (Oraliqlar usuli)
**Shart:** Tengsizlikni yeching:
$$
|2x - 3| - |x + 1| < 2
$$

**Yechish:**
1-qadam: Modul ostidagi ifodalarning nollarini topamiz:
- $2x - 3 = 0 \implies x = 1.5$
- $x + 1 = 0 \implies x = -1$

Ushbu nuqtalar sonlar o'qini 3 ta oraliqqa ajratadi:
1) $x < -1$
2) $-1 \le x < 1.5$
3) $x \ge 1.5$

2-qadam: Har bir oraliqda alohida yechamiz:

**1-oraliq: $x < -1$**
Bu oraliqda $2x - 3 < 0$ va $x + 1 < 0$. Ikkala modul ham ishorasini o'zgartirib ochiladi:
$$
-(2x - 3) - (-(x + 1)) < 2 \implies -2x + 3 + x + 1 < 2 \implies -x + 4 < 2 \implies -x < -2 \implies x > 2
$$
Shart bilan kesishamiz: $\begin{cases} x < -1 \\ x > 2 \end{cases} \implies \emptyset$ (yechim yo'q).

**2-oraliq: $-1 \le x < 1.5$**
Bu oraliqda $2x - 3 < 0$, lekin $x + 1 \ge 0$:
$$
-(2x - 3) - (x + 1) < 2 \implies -2x + 3 - x - 1 < 2 \implies -3x + 2 < 2 \implies -3x < 0 \implies x > 0
$$
Shart bilan kesishamiz: $\begin{cases} -1 \le x < 1.5 \\ x > 0 \end{cases} \implies x \in (0, 1.5)$.

**3-oraliq: $x \ge 1.5$**
Bu oraliqda ikkala modul ham musbat:
$$
(2x - 3) - (x + 1) < 2 \implies 2x - 3 - x - 1 < 2 \implies x - 4 < 2 \implies x < 6
$$
Shart bilan kesishamiz: $\begin{cases} x \ge 1.5 \\ x < 6 \end{cases} \implies x \in [1.5, 6)$.

3-qadam: Olingan barcha yechimlarni birlashtiramiz:
$$
(0, 1.5) \cup [1.5, 6) = (0, 6)
$$

**Javob:** $x \in (0, 6)$.

---

### 4-misol: Irratsional tengsizlik
**Shart:** Tengsizlikni yeching:
$$
\sqrt{2x^2 - 5x - 3} \ge x - 1
$$

**Yechish:**
$\sqrt{f(x)} \ge g(x)$ ko'rinishidagi tengsizlik ikkita sistemalar birlashmasiga teng kuchlidir:
$$
\left[ \begin{array}{l}
\begin{cases} g(x) < 0 \\ f(x) \ge 0 \end{cases} \quad \text{(A)} \\
\begin{cases} g(x) \ge 0 \\ f(x) \ge g^2(x) \end{cases} \quad \text{(B)}
\end{array} \right.
$$

1-qadam: (A) sistemani yechamiz:
$$
\begin{cases} x - 1 < 0 \\ 2x^2 - 5x - 3 \ge 0 \end{cases}
$$
$2x^2 - 5x - 3 = 0$ ning ildizlari: $D = 25 - 4(2)(-3) = 49$.  
$x_1 = \frac{5 - 7}{4} = -0.5, \quad x_2 = \frac{5 + 7}{4} = 3$.  
Demak: $2x^2 - 5x - 3 \ge 0 \iff x \in (-\infty, -0.5] \cup [3, +\infty)$.  
$x < 1$ bilan kesishganda:
$$
x \in (-\infty, -0.5]
$$

2-qadam: (B) sistemani yechamiz:
$$
\begin{cases} x - 1 \ge 0 \implies x \ge 1 \\ 2x^2 - 5x - 3 \ge (x - 1)^2 \end{cases}
$$
Kvadratni ochamiz:
$$
2x^2 - 5x - 3 \ge x^2 - 2x + 1 \implies x^2 - 3x - 4 \ge 0
$$
Ildizlar: $(x - 4)(x + 1) \ge 0 \implies x \in (-\infty, -1] \cup [4, +\infty)$.  
$x \ge 1$ bilan kesishganda:
$$
x \in [4, +\infty)
$$

3-qadam: (A) va (B) natijalarini birlashtiramiz:
$$
x \in (-\infty, -0.5] \cup [4, +\infty)
$$

**Javob:** $x \in (-\infty, -0.5] \cup [4, +\infty)$.

---

## ⚠️ Talabalar Eng Ko'p Yo'l Qo'yadigan Xatolar va Tuzoqlar

1. **Tengsizlikning ikkala tomonini o'zgaruvchiga ko'paytirib yuborish:**
   Masalan, $\frac{1}{x - 2} < 3$ tengsizlikni yechishda talabalar ikkala tomonni $(x - 2)$ ga ko'paytirib, $1 < 3(x - 2)$ deb yozishadi. Bu qo'pol xato! Chunki $x - 2$ manfiy bo'lishi ham mumkin, u holda tengsizlik ishorasi teskarisiga o'zgarishi kerak edi. Har doim barcha hadlarni chap tomonga o'tkazib, umumiy maxrajga keltirish shart!

2. **Juft karrali ildizlarda ishorani almashtirib yuborish:**
   $(x - 2)^2$ kabi ko'paytuvchi orqali o'tganda ishora o'zgarmasdan qoladi. Talabalar avtomatik ravishda $+ - + -$ deb ketishadi va butun oraliqlar xatosiga yo'l qo'yishadi.

3. **Yakkalangan ildizlarni (Izolyatsiyalangan nuqtalarni) yo'qotib qo'yish:**
   Masalan, $(x - 3)^2 (x + 1) \le 0$ tengsizlikda manfiy oraliq $x \in (-\infty, -1]$ bo'ladi. Lekin tenglik sharti ($\le 0$) tufayli $x = 3$ ham yechim hisoblanadi (chunki $0 \le 0$). Talabalar ko'pincha $\{3\}$ yakkalangan nuqtani javobga qo'shishni unutishadi.

4. **Maxraj nolini yechimga qo'shib yuborish:**
   Noqat'iy tengsizliklarda ($\le$ yoki $\ge$) talaba barcha nuqtalarni bo'yalgan qilib oladi va maxrajni nolga aylantiradigan nuqtani ham oraliqqa qo'shib qo'yadi. Matematikada nolga bo'lish qat'iyan man etiladi! Maxraj nollari har doim qat'iy ochiq qavs bilan chiqarib tashlanadi.

---

## 🎯 Mustaqil Yechish Uchun Amaliy Mashqlar va Yechimlar

### 1-mashq
Tengsizlikni intervallar usulida yeching:
$$
\frac{x^2 - 4x + 3}{x - 5} \ge 0
$$

<details>
<summary>To'liq yechimi va javobi</summary>

**Yechish:**
1. Suratni ko'paytuvchilarga ajratamiz:
   $x^2 - 4x + 3 = (x - 1)(x - 3)$.
   Tengsizlik ko'rinishi:
   $$
   \frac{(x - 1)(x - 3)}{x - 5} \ge 0
   $$
2. Nollar: $x = 1$ (to'q), $x = 3$ (to'q), $x = 5$ (ochiq).
   Barcha ildizlar toq karrali (1-daraja), demak har birida ishora o'zgaradi.
3. $x > 5$ da ishora: $+$.
   - $(5, +\infty) \to +$
   - $(3, 5) \to -$
   - $[1, 3] \to +$
   - $(-\infty, 1] \to -$
4. $\ge 0$ sohalarini olamiz:
   $$
   x \in [1, 3] \cup (5, +\infty)
   $$

**Javob:** $x \in [1, 3] \cup (5, +\infty)$.
</details>

---

### 2-mashq
Gorner sxemasi yordamida $P(x) = 2x^3 - 5x^2 - 4x + 12$ ko'phadni $(x - 2)$ ga bo'lgandagi bo'linma va qoldiqni toping.

<details>
<summary>To'liq yechimi va javobi</summary>

**Yechish:**
Koeffitsiyentlar: $a_3 = 2, a_2 = -5, a_1 = -4, a_0 = 12$.  
Bo'luvchi: $c = 2$.

| Koeffitsiyentlar | $a_3 = 2$ | $a_2 = -5$ | $a_1 = -4$ | $a_0 = 12$ |
| :--- | :---: | :---: | :---: | :---: |
| $c = 2$ | $2$ | $2(2) + (-5) = -1$ | $2(-1) + (-4) = -6$ | $2(-6) + 12 = 0$ |

Qoldiq $R = 0$ (qoldiqsiz bo'lindi).  
Bo'linma ko'phadi: $Q(x) = 2x^2 - x - 6$.

**Javob:** Bo'linma: $2x^2 - x - 6$, qoldiq: $0$.
</details>

---

### 3-mashq
Tenglamani yeching:
$$
|3x - 6| = 2 - x
$$

<details>
<summary>To'liq yechimi va javobi</summary>

**Yechish:**
1. O'ng tomon manfiy bo'lmasligi shart:
   $$
   2 - x \ge 0 \implies x \le 2
   $$
2. Modulni ochamiz:
   - 1-hol: $3x - 6 = 2 - x \implies 4x = 8 \implies x = 2$.  
     Shartni tekshiramiz: $2 \le 2$ (to'g'ri).
   - 2-hol: $3x - 6 = -(2 - x) \implies 3x - 6 = -2 + x \implies 2x = 4 \implies x = 2$.
3. Ikkala holatda ham bitta ildiz hosil bo'ldi: $x = 2$.

**Javob:** $x = 2$.
</details>

---

## 💡 Imtihon Layfhaklari va Tezkor Maslahatlar

1. **Eng o'ng oraliq ishorasini 2 soniyada topish:**
   Eng o'ng oraliq ishorasi har bir qavsdagi $x$ oldidagi barcha koeffitsiyentlar ishoralari ko'paytmasiga teng. Masalan, $(2 - x)(x + 3)^2$ ifodada $x$ ning oldida bitta manfiy $(-)$ va musbat $(+)$ bor, demak eng o'ng oraliq manfiy $(-)$ bo'ladi!

2. **Sinov nuqtasi usuli (Sanity Check):**
   Intervallar usulida ishoralarni qo'yib bo'lgach, shubha tug'ilgan oraliqdan bitta oddiy sonni (masalan, $x = 0$ yoki $x = 10$) olib, to'g'ridan-to'g'ri boshlang'ich ifodaga qo'yib ko'ring. Bu orqali butun jadval to'g'ri tuzilganiga 100% ishonch hosil qilasiz.

3. **Irratsional tengsizlikda aniqlanish sohasini (ODZ) birinchi bo'lib yozing:**
   Ildiz osti ifodasi har doim manfiy bo'lmasligi shart ($f(x) \ge 0$). Ushbu shartni yozmasdan kvadratga ko'tarish begona (soxta) oraliqlarni qo'shib yuborishga olib keladi.
