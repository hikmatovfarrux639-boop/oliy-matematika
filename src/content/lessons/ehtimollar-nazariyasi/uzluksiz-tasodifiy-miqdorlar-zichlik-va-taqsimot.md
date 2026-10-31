---
title: "Uzluksiz tasodifiy miqdorlar: Taqsimot funksiyasi F(x), ehtimollik zichligi f(x) va sonli xarakteristikalari"
module: "ehtimollar-nazariyasi"
order: 10
description: "Uzluksiz tasodifiy miqdorlar, taqsimot funksiyasi F(x) xossalari, ehtimollik zichligi f(x), normallash sharti, oraliqqa tushish ehtimoli, matematik kutilma M[X], dispersiya D[X] va o'rtacha kvadratik chetlanish hisoblash."
---

## 📌 Kirish va Geometrik/Fizik Mohiyat

Ehtimollar nazariyasida barcha tasodifiy miqdorlar ikkita ulkan sinfga ajraladi: **diskret** va **uzluksiz**.

Diskret tasodifiy miqdorlar alohida, ajratilgan qiymatlarni (chekli yoki sanoqli cheksiz) qabul qiladi: masalan, zar tashlanganda tushgan ochkolar soni ($1, 2, 3, 4, 5, 6$) yoki qo'ng'iroqlar soni ($0, 1, 2, \dots$). Biroq real hayotdagi va muhandislikdagi aksariyat kattaliklar — **uzluksiz kontiniumda** o'zgaradi:
- Samolyotning havoda uchish vaqti;
- Detalning mikrometrda o'lchangan aniq massasi yoki diametri;
- Rezistordagi elektr kuchlanishi;
- Xonadagi harorat yoki shamol tezligi.

Bunday kattaliklarni diskret qator (jadval) ko'rinishida yozib bo'lmaydi, chunki berilgan oraliqda **sanoqsiz cheksiz ko'p** nuqtalar mavjud.

### Uzluksiz miqdorlarning asosiy paradoksi
Uzluksiz tasodifiy miqdor $X$ uchun **uning biror aniq bitta songa teng bo'lish ehtimoli har doim nolga tengdir!**
$$
P(X = c) = 0, \quad \forall c \in \mathbb{R}
$$
*Bu nimani anglatadi? Masalan, avtobus bekatiga kelgan avtobusning aniq $12\text{ daqiqa } 00.000000\dots\text{ soniya}$ da kelish ehtimoli 0 ga teng. Ammo avtobus 11 dan 13 daqiqagacha bo'lgan oraliqda kelishi ehtimoli mavjud va noldan farqlidir!*

**Fizik analogiya (Chiziqli zichlik):**  
Tasavvur qiling, bizda massasi $1\text{ kg}$ bo'lgan uzun metall sim bor. Simdagi bitta matematik nuqtaning massasi qancha? Nolga teng ($m = 0$)! Lekin simning biror $[a, b]$ bo'lagining massasi noldan katta. Nuqtadagi massani emas, balki **chiziqli massaviy zichlik** $\rho(x) = \frac{dm}{dx}$ ni o'rganamiz. Xuddi shuningdek, ehtimollar nazariyasida ham nuqtadagi ehtimollik emas, balki **ehtimollik zichligi** $f(x)$ o'rganiladi!

---

## 📐 Asosiy Nazariya, Qoidalar va Teoremalar

### 1. Integral taqsimot funksiyasi $F(x)$

**Ta'rif:** Ixtiyoriy tasodifiy miqdor $X$ ning $x$ haqiqiy sondan kichik qiymat qabul qilish ehtimolini ifodalovchi funksiyaga **taqsimot funksiyasi** (yoki integral taqsimot funksiyasi) deyiladi:
$$
F(x) = P(X < x) \quad (\text{yoki ba'zi darsliklarda } P(X \le x))
$$

**Taqsimot funksiyasining fundamental xossalari:**
1. **Chegaralanganlik:** $0 \le F(x) \le 1, \quad \forall x \in \mathbb{R}$.
2. **Kamaymaslik:** Agar $x_1 < x_2$ bo'lsa, u holda $F(x_1) \le F(x_2)$.
3. **Cheksizlikdagi limitlar:**
   $$
   \lim_{x \to -\infty} F(x) = 0, \quad \lim_{x \to +\infty} F(x) = 1
   $$
4. **Chapdan uzluksizlik:** $\lim_{x \to x_0^-} F(x) = F(x_0)$.
5. **Oraliqqa tushish ehtimoli:**
   $$
   P(a \le X < b) = F(b) - F(a)
   $$

---

### 2. Ehtimollik zichlik funksiyasi $f(x)$

**Ta'rif:** Agar $F(x)$ funksiya differensiallanuvchi bo'lsa, uning birinchi tartibli hosilasiga tasodifiy miqdor $X$ ning **ehtimollik zichlik funksiyasi** (differensial taqsimot funksiyasi) deyiladi:
$$
f(x) = F'(x) = \frac{dF(x)}{dx}
$$
Aksincha, zichlik funksiyasi orqali taqsimot funksiyasi integral bilan tiklanadi:
$$
F(x) = \int_{-\infty}^x f(t) dt
$$

**Zichlik funksiyasining xossalari:**
1. **Manfiy emaslik:** $f(x) \ge 0, \quad \forall x \in \mathbb{R}$.
2. **Normallash sharti (To'liq yuzaning 1 ga tengligi):**
   $$
   \int_{-\infty}^{+\infty} f(x) dx = 1
   $$
   Geometrik jihatdan, zichlik grafigi (taqsimot egri chizig'i) ostidagi butun cheksiz soha yuzi $1$ ga teng.
3. **Oraliqqa tushish ehtimoli (Egri chiziqli trapetsiya yuzi):**
   $$
   P(a \le X \le b) = \int_a^b f(x) dx = F(b) - F(a)
   $$
   Uzluksiz tasodifiy miqdorlar uchun oraliq chegaralarining qat'iy yoki noqat'iy bo'lishi ehtimollikka ta'sir qilmaydi:
   $$
   P(a \le X \le b) = P(a < X < b) = P(a \le X < b) = P(a < X \le b)
   $$

---

### 3. Uzluksiz tasodifiy miqdorning sonli xarakteristikalari

#### 1) Matematik kutilma (O'rtacha qiymat):
Diskret holatdagi $\sum x_i p_i$ yig'indi uzluksiz holatda integralga aylanadi:
$$
E[X] = \mu = \int_{-\infty}^{+\infty} x f(x) dx
$$

#### 2) Dispersiya (Sochilish darajasi):
Matematik kutilmadan chetlanish kvadratining o'rtacha qiymati:
$$
D[X] = \sigma^2 = \int_{-\infty}^{+\infty} (x - E[X])^2 f(x) dx
$$
Amaliy hisoblashlar uchun qulayroq bo'lgan ishchi formula:
$$
D[X] = E[X^2] - (E[X])^2 = \int_{-\infty}^{+\infty} x^2 f(x) dx - \left(\int_{-\infty}^{+\infty} x f(x) dx\right)^2
$$

#### 3) O'rtacha kvadratik chetlanish (Standart og'ish):
O'lchov birligi tasodifiy miqdorning o'zi bilan bir xil bo'lgan sochilish parametri:
$$
\sigma = \sqrt{D[X]}
$$

#### 4) Moda ($Mo$) va Mediana ($Me$):
- **Moda ($Mo$):** Ehtimollik zichligi o'zining global maksimumiga erishadigan nuqta: $f(Mo) = \max_x f(x)$.
- **Mediana ($Me$):** Taqsimot maydonini teng ikkiga bo'luvchi nuqta:
  $$
  F(Me) = \int_{-\infty}^{Me} f(x) dx = 0.5
  $$

---

## 📝 Qadamma-qadam Yechilgan Universitet Misollari

### 1-misol: Normallash sharti, taqsimot funksiyasi va oraliq ehtimoli
**Shart:** Uzluksiz tasodifiy miqdor $X$ quyidagi zichlik funksiyasi bilan berilgan:
$$
f(x) = \begin{cases} C(4 - x^2), & x \in [0, 2] \\ 0, & x \notin [0, 2] \end{cases}
$$
1) Normallash shartidan foydalanib o'zgarmas $C$ koeffitsiyentni toping;
2) Taqsimot funksiyasi $F(x)$ ni toping va uning grafigi xossalarini tekshiring;
3) $P(1 \le X \le 2)$ ehtimollikni hisoblang.

**Yechish:**
1-qadam: $C$ koeffitsiyentni topamiz:
Normallash sharti bo'yicha ehtimollik zichligining butun sonlar o'qi bo'yicha integrali $1$ ga teng:
$$
\int_{-\infty}^{+\infty} f(x) dx = \int_0^2 C(4 - x^2) dx = 1
$$
Integralni hisoblaymiz:
$$
C \left[ 4x - \frac{x^3}{3} \right]_0^2 = C \left( 4(2) - \frac{2^3}{3} - 0 \right) = C \left( 8 - \frac{8}{3} \right) = C \cdot \frac{16}{3} = 1
$$
Bundan:
$$
C = \frac{3}{16}
$$
Shunday qilib: $f(x) = \frac{3}{16}(4 - x^2)$ $[0, 2]$ oraliqda.

2-qadam: Taqsimot funksiyasi $F(x) = \int_{-\infty}^x f(t) dt$ ni tuzamiz:
- $x < 0$ bo'lganda: $f(t) = 0 \implies F(x) = \int_{-\infty}^x 0 dt = 0$.
- $0 \le x \le 2$ bo'lganda:
  $$
  F(x) = \int_{-\infty}^0 0 dt + \int_0^x \frac{3}{16}(4 - t^2) dt = \frac{3}{16} \left[ 4t - \frac{t^3}{3} \right]_0^x = \frac{3}{16} \left( 4x - \frac{x^3}{3} \right) = \frac{3}{4}x - \frac{x^3}{16}
  $$
- $x > 2$ bo'lganda: to'liq yuzaga erishildi, shuning uchun $F(x) = 1$.

Yakuniy ko'rinishi:
$$
F(x) = \begin{cases} 0, & x < 0 \\ \frac{3}{4}x - \frac{x^3}{16}, & 0 \le x \le 2 \\ 1, & x > 2 \end{cases}
$$
Tekshirish: $F(0) = 0$, $F(2) = \frac{3}{4}(2) - \frac{8}{16} = \frac{3}{2} - \frac{1}{2} = 1$. Xossalar to'liq bajarildi!

3-qadam: $P(1 \le X \le 2)$ ehtimollikni hisoblaymiz:
$$
P(1 \le X \le 2) = F(2) - F(1) = 1 - \left( \frac{3}{4}(1) - \frac{1^3}{16} \right) = 1 - \left( \frac{12 - 1}{16} \right) = 1 - \frac{11}{16} = \frac{5}{16} = 0.3125
$$
*(Zichlik integrali orqali tekshirish: $\int_1^2 \frac{3}{16}(4 - x^2) dx = \frac{3}{16} [4x - \frac{x^3}{3}]_1^2 = \frac{3}{16} [(8 - \frac{8}{3}) - (4 - \frac{1}{3})] = \frac{3}{16} [\frac{16}{3} - \frac{11}{3}] = \frac{3}{16} \cdot \frac{5}{3} = \frac{5}{16}$.)*

**Javob:** $C = \frac{3}{16}, \quad F(x) = \begin{cases} 0, & x < 0 \\ \frac{3}{4}x - \frac{x^3}{16}, & 0 \le x \le 2 \\ 1, & x > 2 \end{cases}, \quad P(1 \le X \le 2) = \frac{5}{16}$.

---

### 2-misol: Matematik kutilma, dispersiya va modani kompleks hisoblash
**Shart:** $X$ tasodifiy miqdor $f(x) = \begin{cases} \frac{3}{8} x^2, & x \in [0, 2] \\ 0, & x \notin [0, 2] \end{cases}$ zichlik bilan berilgan.
Hisoblang:
1) Matematik kutilma $E[X]$;
2) Dispersiya $D[X]$ va o'rtacha kvadratik chetlanish $\sigma$;
3) Moda $Mo$ va Mediana $Me$.

**Yechish:**
1-qadam: Matematik kutilma $E[X]$:
$$
E[X] = \int_0^2 x \cdot \left(\frac{3}{8} x^2\right) dx = \frac{3}{8} \int_0^2 x^3 dx = \frac{3}{8} \left[ \frac{x^4}{4} \right]_0^2 = \frac{3}{8} \cdot \frac{16}{4} = \frac{3}{8} \cdot 4 = \frac{3}{2} = 1.5
$$

2-qadam: Ikkinchi tartibli boshlang'ich moment $E[X^2]$ va dispersiya:
$$
E[X^2] = \int_0^2 x^2 \cdot \left(\frac{3}{8} x^2\right) dx = \frac{3}{8} \int_0^2 x^4 dx = \frac{3}{8} \left[ \frac{x^5}{5} \right]_0^2 = \frac{3}{8} \cdot \frac{32}{5} = \frac{12}{5} = 2.4
$$
Dispersiyani hisoblaymiz:
$$
D[X] = E[X^2] - (E[X])^2 = 2.4 - (1.5)^2 = 2.4 - 2.25 = 0.15 = \frac{3}{20}
$$
O'rtacha kvadratik chetlanish:
$$
\sigma = \sqrt{0.15} \approx 0.3873
$$

3-qadam: Moda $Mo$ va Mediana $Me$:
- **Moda:** $[0, 2]$ oraliqda $f(x) = \frac{3}{8}x^2$ o'suvchi parabola shoxi bo'lib, o'zining maksimumiga oraliqning o'ng chekkasida erishadi: $x = 2$. Demak, $Mo = 2$.
- **Mediana:** $F(Me) = \int_0^{Me} \frac{3}{8} x^2 dx = 0.5$ tenglamadan:
  $$
  \frac{3}{8} \cdot \frac{Me^3}{3} = \frac{Me^3}{8} = \frac{1}{2} \implies Me^3 = 4 \implies Me = \sqrt[3]{4} \approx 1.5874
  $$

**Javob:** $E[X] = 1.5, \quad D[X] = 0.15, \quad \sigma \approx 0.3873, \quad Mo = 2, \quad Me = \sqrt[3]{4} \approx 1.587$.

---

### 3-misol: Ko'rsatkichli (Eksponensial) taqsimot va ishonchlilik nazariyasi
**Shart:** Serverning uzluksiz ishdan chiqmasdan ishlash vaqti $T$ parametri $\lambda = 0.002\text{ soat}^{-1}$ bo'lgan ko'rsatkichli taqsimotga ega ($f(t) = \lambda e^{-\lambda t}, t \ge 0$).
1) Serverning o'rtacha ishlash vaqti $E[T]$ va standart og'ishi $\sigma$ ni toping;
2) Serverning kamida 1000 soat to'xtovsiz ishlash ehtimolini hisoblang;
3) Serverning dastlabki 500 soat ichida ishdan chiqish ehtimolini aniqlang.

**Yechish:**
1-qadam: Nazariy parametrlar:
Ko'rsatkichli taqsimot uchun bo'laklab integrallash orqali:
$$
E[T] = \int_0^\infty t \cdot \lambda e^{-\lambda t} dt = \frac{1}{\lambda} = \frac{1}{0.002} = 500\text{ soat}
$$
$$
D[T] = \frac{1}{\lambda^2} = \frac{1}{(0.002)^2} = 250\,000\text{ soat}^2 \implies \sigma = \sqrt{D[T]} = \frac{1}{\lambda} = 500\text{ soat}
$$
Ko'rsatkichli taqsimotning muhim xossasi: uning matematik kutilmasi va standart og'ishi tengdir ($E[T] = \sigma$).

2-qadam: Taqsimot funksiyasi $F(t)$:
$$
F(t) = \int_0^t \lambda e^{-\lambda x} dx = \left[ -e^{-\lambda x} \right]_0^t = 1 - e^{-\lambda t}
$$
Kamida 1000 soat ishlash ehtimoli (Ishonchlilik funksiyasi $R(t) = P(T \ge t)$):
$$
P(T \ge 1000) = 1 - F(1000) = e^{-\lambda \cdot 1000} = e^{-0.002 \cdot 1000} = e^{-2} \approx \frac{1}{7.389} \approx 0.1353
$$
Demak, serverning 1000 soatdan ko'p ishlash ehtimoli $13.53\%$ ni tashkil qiladi.

3-qadam: Dastlabki 500 soat ichida ishdan chiqish ehtimoli $P(T < 500)$:
$$
P(T < 500) = F(500) = 1 - e^{-0.002 \cdot 500} = 1 - e^{-1} \approx 1 - 0.3679 = 0.6321
$$
Demak, serverning o'rtacha ishlash vaqti (500 soat) yetib kelguncha uning ishdan chiqish ehtimoli $63.21\%$ ga teng.

**Javob:** 1) $E[T] = 500\text{ soat}, \sigma = 500\text{ soat}$; 2) $P(T \ge 1000) \approx 0.1353$; 3) $P(T < 500) \approx 0.6321$.

---

### 4-misol: Tasodifiy miqdorlar funksiyasining taqsimotini topish
**Shart:** $X$ tasodifiy miqdor $[0, 1]$ oraliqda tekis taqsimlangan ($f_X(x) = 1$, $x \in [0, 1]$).  
Yangi tasodifiy miqdor $Y = X^2$ ning zichlik funksiyasi $f_Y(y)$ ni toping.

**Yechish:**
1-qadam: $Y$ ning qabul qilishi mumkin bo'lgan qiymatlar sohasi:  
$x \in [0, 1] \implies y = x^2 \in [0, 1]$.

2-qadam: Taqsimot funksiyasi $F_Y(y)$ ni topamiz:
Ta'rifga ko'ra:
$$
F_Y(y) = P(Y < y) = P(X^2 < y)
$$
$y \in [0, 1]$ da $X$ musbat bo'lgani uchun: $X^2 < y \iff X < \sqrt{y}$.  
Demak:
$$
F_Y(y) = P(X < \sqrt{y}) = F_X(\sqrt{y})
$$
$[0, 1]$ oraliqda tekis taqsimot funksiyasi $F_X(x) = x$ bo'lgani sababli:
$$
F_Y(y) = \sqrt{y} \quad (0 \le y \le 1)
$$

3-qadam: Hosila olib, zichlik funksiyasi $f_Y(y)$ ni topamiz:
$$
f_Y(y) = F_Y'(y) = (\sqrt{y})' = \frac{1}{2\sqrt{y}}, \quad y \in (0, 1]
$$
Normallash shartini tekshiramiz:
$$
\int_0^1 \frac{1}{2\sqrt{y}} dy = \left[ \sqrt{y} \right]_0^1 = 1 - 0 = 1
$$
Natija to'g'ri! E'tibor bering, $y \to 0$ da $f_Y(y) \to \infty$, biroq integral chekli va $1$ ga teng.

**Javob:** $f_Y(y) = \begin{cases} \frac{1}{2\sqrt{y}}, & y \in (0, 1] \\ 0, & y \notin (0, 1] \end{cases}$.

---

## ⚠️ Talabalar Eng Ko'p Yo'l Qo'yadigan Xatolar va Tuzoqlar

1. **Zichlik funksiyasi $f(x)$ ni ehtimollik deb o'ylash:**
   Talabalar ko'pincha $f(x) \le 1$ bo'lishi shart deb xato o'ylashadi. Ehtimollik $P \le 1$, biroq zichlik $f(x)$ istalgancha katta musbat son bo'lishi mumkin! Masalan, agar detal o'lchami $[0; 0.01]$ kesmada tekis taqsimlangan bo'lsa, uning zichligi $f(x) = \frac{1}{0.01} = 100$ bo'ladi. Asosiysi — uning integrali $1$ ga teng bo'lishidir.

2. **$P(X = c) = 0$ dan "bu hodisa hech qachon ro'y bermaydi" degan xato xulosa chiqarish:**
   Geometrik nuqtai nazardan, to'g'ri chiziqdagi bitta nuqtaning uzunligi 0 ga teng, lekin butun to'g'ri chiziq aynan mana shu nuqtalardan tashkil topgan! Shuning uchun uzluksiz holatda ehtimolligi 0 bo'lgan hodisa bu mumkin bo'lmagan hodisa degani emas.

3. **Dispersiyani hisoblashda kvadratni unutish:**
   Dispersiyaning ishchi formulasi $D[X] = E[X^2] - (E[X])^2$. Talabalar ko'pincha $E[X^2] - E[X]$ deb yozib ketishadi yoki $(E[X])^2$ o'rniga $E[X^2]$ ning o'zini qoldirishadi. Dispersiya har doim manfiy bo'lmagan son bo'lishi shart ($D[X] \ge 0$). Agar sizda $D[X] < 0$ chiqsa, qayerdadir darajada xato qilgansiz!

4. **Integrallash chegaralarini to'g'ri ajratmaslik:**
   Zichlik funksiyasi faqat $[a, b]$ da noldan farqli bo'lsa, matematik kutilma va dispersiya integrallarini hisoblashda integrallash $-\infty$ dan $+\infty$ gacha emas, balki faqat $a$ dan $b$ gacha olinishi shart.

---

## 🎯 Mustaqil Yechish Uchun Amaliy Mashqlar va Yechimlar

### 1-mashq
$X$ tasodifiy miqdor $f(x) = \begin{cases} a x, & x \in [0, 4] \\ 0, & x \notin [0, 4] \end{cases}$ zichlikka ega. $a$ parametrni va $P(2 \le X \le 3)$ ehtimollikni toping.

<details>
<summary>To'liq yechimi va javobi</summary>

**Yechish:**
1. Normallash shartidan $a$ ni topamiz:
   $$
   \int_0^4 a x dx = a \left[ \frac{x^2}{2} \right]_0^4 = a \cdot \frac{16}{2} = 8a = 1 \implies a = \frac{1}{8}
   $$
   Demak, $f(x) = \frac{x}{8}$ $[0, 4]$ oraliqda.
2. Ehtimollikni integral orqali hisoblaymiz:
   $$
   P(2 \le X \le 3) = \int_2^3 \frac{x}{8} dx = \frac{1}{8} \left[ \frac{x^2}{2} \right]_2^3 = \frac{1}{16} (3^2 - 2^2) = \frac{9 - 4}{16} = \frac{5}{16} = 0.3125
   $$

**Javob:** $a = \frac{1}{8}, \quad P(2 \le X \le 3) = \frac{5}{16}$.
</details>

---

### 2-mashq
$[2, 8]$ kesmada tekis taqsimlangan $X$ tasodifiy miqdorning matematik kutilmasi, dispersiyasi va medianasini hisoblang.

<details>
<summary>To'liq yechimi va javobi</summary>

**Yechish:**
Tekis taqsimot parametrlari: $a = 2, b = 8$.
1. Matematik kutilma:
   $$
   E[X] = \frac{a + b}{2} = \frac{2 + 8}{2} = 5
   $$
2. Dispersiya:
   $$
   D[X] = \frac{(b - a)^2}{12} = \frac{(8 - 2)^2}{12} = \frac{6^2}{12} = \frac{36}{12} = 3
   $$
3. Mediana: Tekis taqsimot kesma o'rtasiga nisbatan simmetrik bo'lgani sababli:
   $$
   Me = E[X] = 5
   $$

**Javob:** $E[X] = 5, \quad D[X] = 3, \quad Me = 5$.
</details>

---

### 3-mashq
Tasodifiy miqdor $X$ ning taqsimot funksiyasi berilgan:
$$
F(x) = \begin{cases} 0, & x < 0 \\ \frac{x^2}{9}, & 0 \le x \le 3 \\ 1, & x > 3 \end{cases}
$$
Zichlik funksiyasi $f(x)$ ni va matematik kutilma $E[X]$ ni toping.

<details>
<summary>To'liq yechimi va javobi</summary>

**Yechish:**
1. Zichlik funksiyasini hosila orqali topamiz:
   - $x < 0$ va $x > 3$ da: $f(x) = 0$.
   - $0 \le x \le 3$ da: $f(x) = F'(x) = \left(\frac{x^2}{9}\right)' = \frac{2x}{9}$.
   $$
   f(x) = \begin{cases} \frac{2x}{9}, & x \in [0, 3] \\ 0, & x \notin [0, 3] \end{cases}
   $$
2. Matematik kutilmani hisoblaymiz:
   $$
   E[X] = \int_0^3 x \cdot \left(\frac{2x}{9}\right) dx = \frac{2}{9} \int_0^3 x^2 dx = \frac{2}{9} \left[ \frac{x^3}{3} \right]_0^3 = \frac{2}{9} \cdot \frac{27}{3} = \frac{2}{9} \cdot 9 = 2
   $$

**Javob:** $f(x) = \begin{cases} \frac{2x}{9}, & x \in [0, 3] \\ 0, & x \notin [0, 3] \end{cases}, \quad E[X] = 2$.
</details>

---

## 💡 Imtihon Layfhaklari va Tezkor Maslahatlar

1. **Simmetriklik qoidasi:**
   Agar zichlik funksiyasi $f(x)$ biror $x = c$ to'g'ri chiziqqa nisbatan simmetrik bo'lsa (masalan, normal taqsimot yoki simmetrik uchburchak), murakkab integrallarni hisoblab o'tirmasdan darhol:
   $$
   E[X] = c \quad \text{va} \quad Me = c
   $$
   deb yozishingiz mumkin!

2. **$F(x)$ ni tekshirishning 3 soniyali testi:**
   Taqsimot funksiyasini topganingizdan so'ng, oraliqning chap chegarasini qo'yganda $0$, o'ng chegarasini qo'yganda $1$ chiqishini tekshiring: $F(a) = 0$ va $F(b) = 1$. Agar bu bajarilmasa, integrallash o'zgarmaslarida xatolik bor.

3. **Geometrik integrallash:**
   Agar zichlik grafigi to'g'ri chiziqlardan (uchburchak, trapetsiya, to'g'ri to'rtburchak) iborat bo'lsa, oraliq ehtimollarini integral olmasdan, maktab geometriyasidagi uchburchak va trapetsiya yuzi formulalari orqali 10 soniyada topish mumkin!
