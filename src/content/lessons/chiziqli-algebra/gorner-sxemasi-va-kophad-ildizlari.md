---
title: "Ko'pxadlar algebrasi: Gorner sxemasi va butun ildizlarni topish"
module: "chiziqli-algebra"
order: 22
description: "Bezu teoremasi, ratsional ildizlar teoremasi, Gorner sxemasi bilan ko'pxadni (x - c) ga bo'lish va yuqori darajali tenglamalarni yechish."
---

## Kirish: Nega Gorner sxemasi oliy matematikada eng muhim qurol?

Oliy matematikaning deyarli barcha bo'limlarida 3-, 4- va undan yuqori darajali ko'phadlarga duch kelamiz:
1. **Chiziqli algebrada:** Matritsaning xos sonlarini topishda $\det(A - \lambda E) = 0$ xarakteristik tenglama har doim 3- yoki 4-darajali ko'phad bo'ladi;
2. **Differensial tenglamalarda:** Yuqori tartibli o'zgarmas koeffitsiyentli DT larning xarakteristik tenglamasini yechishda;
3. **Matematik analizda:** Ratsional kasrlarni integrallashda maxrajdagi ko'phadni chiziqli va kvadratik ko'paytuvchilarga ajratishda.

Maktab darsliklaridagi Kardan va Ferrari formulalari amaliy hisoblashlar uchun juda og'ir va noqulaydir. **Gorner sxemasi (Gorner jadvali)** esa ko'phadni burchak usulida bo'lishdan 5 barobar tez, ixcham va xatosiz usul bo'lib, butun va kasr ildizlarni 1 daqiqada topish imkonini beradi!

---

## 1. Nazariy asos: Bezu teoremasi va Butun/Ratsional ildizlar

### Bezu teoremasi
> [!NOTE] Bezu teoremasi
> $P_n(x)$ ko'phadni $(x - c)$ ikkihadga bo'lgandagi qoldiq ko'phadning $x = c$ nuqtadagi qiymatiga teng:
> $$
> R = P_n(c)
> $$
> **Natija:** Agar $c$ soni $P_n(x)$ ko'phadning ildizi bo'lsa (ya'ni $P_n(c) = 0$), u holda ko'phad $(x - c)$ ga **qoldiqsiz bo'linadi**:
> $$
> P_n(x) = (x - c) \cdot Q_{n-1}(x)
> $$

---

### Butun va ratsional ildizlar haqidagi fundamental teorema

Faraz qilaylik, butun koeffitsiyentli ko'phad berilgan bo'lsin:
$$
P_n(x) = a_0 x^n + a_1 x^{n-1} + a_2 x^{n-2} + \dots + a_{n-1} x + a_n
$$

1. **Keltirilgan ko'phad holati ($a_0 = 1$):**
   $$
   x^n + a_1 x^{n-1} + \dots + a_n = 0
   $$
   Bunday ko'phadning har qanday butun ildizi **faqatgina ozod had $a_n$ ning butun bo'luvchilari** orasida bo'lishi mumkin!
   *(Boshqa hech qanday butun son ildiz bo'la olmaydi).*

2. **Umumiy holat ($a_0 \neq 1$):**
   Agar ko'phad qisqarmas $\frac{p}{q}$ ($p \in \mathbb{Z}, q \in \mathbb{N}$) ratsional ildizga ega bo'lsa:
   - $p$ — ozod had $a_n$ ning bo'luvchisi;
   - $q$ — bosh koeffitsiyent $a_0$ ning bo'luvchisi bo'lishi shart!

---

## 2. Gorner sxemasi qanday ishlaydi?

$P_n(x) = a_0 x^n + a_1 x^{n-1} + \dots + a_n$ ko'phadni $(x - c)$ ga bo'lganda hosil bo'ladigan bo'linma ko'phad $Q_{n-1}(x) = b_0 x^{n-1} + b_1 x^{n-2} + \dots + b_{n-1}$ va qoldiq $R$ quyidagi 2 qatorli jadval orqali hisoblanadi:

| | $a_0$ | $a_1$ | $a_2$ | $\dots$ | $a_n$ |
|---|---|---|---|---|---|
| **$c$** | $b_0 = a_0$ | $b_1 = c \cdot b_0 + a_1$ | $b_2 = c \cdot b_1 + a_2$ | $\dots$ | $R = c \cdot b_{n-1} + a_n$ |

### Algoritm bosqichlari:
1. Jadvalning birinchi qatoriga ko'phadning barcha koeffitsiyentlari $a_0, a_1, \dots, a_n$ o'z ishoralari bilan yoziladi. **MUHIM:** Agar birorta daraja tushib qolgan bo'lsa, uning o'rniga $0$ yoziladi!
2. Bosh koeffitsiyent o'zgarmasdan pastga tushiriladi: $b_0 = a_0$.
3. Har bir keyingi katak: chapdagi pastki sonni sinov ildizi $c$ ga ko'paytirib, tepasidagi songa qo'shiladi:
   $$
   b_k = c \cdot b_{k-1} + a_k
   $$
4. Oxirgi katakdagi son **qoldiq $R$** dir.
   - Agar $R = 0$ bo'lsa, demak **$x = c$ haqiqiy ildiz** va pastdagi sonlar yangi pasaytirilgan darajali ko'phadning koeffitsiyentlaridir!
   - Agar $R \neq 0$ bo'lsa, $c$ soni ildiz emas ($R$ soni esa $P(c)$ ning qiymatidir).

---

## 3. Qadamma-qadam to'liq yechilgan namunaviy misollar

### 1-misol: 3-darajali xarakteristik ko'pxad ildizlarini topish

**Masala:** Matritsaning xarakteristik tenglamasini yeching:
$$
\lambda^3 - 6\lambda^2 + 11\lambda - 6 = 0
$$

#### Yechish:
1. Ozod had: $a_3 = -6$.
   Uning butun bo'luvchilari: $\pm 1, \pm 2, \pm 3, \pm 6$.
2. Sinovni eng sodda son $c = 1$ dan boshlaymiz. Gorner jadvalini tuzamiz:

| | $1$ ($\lambda^3$) | $-6$ ($\lambda^2$) | $11$ ($\lambda^1$) | $-6$ ($\lambda^0$) |
|---|---|---|---|---|
| **$c = 1$** | $1$ | $1 \cdot 1 + (-6) = -5$ | $1 \cdot (-5) + 11 = 6$ | $1 \cdot 6 + (-6) = \mathbf{0}$ |

Oxirgi qoldiq $R = 0$ chiqdi! Demak, **$\lambda_1 = 1$ — tenglamaning birinchi ildizidir**.

Pastki qatordagi sonlar ($1, -5, 6$) kvadrat tenglamaning koeffitsiyentlaridir:
$$
\lambda^2 - 5\lambda + 6 = 0
$$
Ushbu kvadrat tenglamani Viyet teoremasi bilan oson yechamiz:
$$
(\lambda - 2)(\lambda - 3) = 0 \implies \lambda_2 = 2, \quad \lambda_3 = 3
$$

**Javob:** Tenglama ildizlari: $\lambda_1 = 1, \lambda_2 = 2, \lambda_3 = 3$. Ko'paytuvchilarga ajralishi: $(\lambda - 1)(\lambda - 2)(\lambda - 3) = 0$.

---

### 2-misol: Tushib qolgan daraja va karrali ildizlar

**Masala:** Ushbu 4-darajali tenglamaning barcha ildizlarini toping:
$$
x^4 - 2x^3 - 3x^2 + 4x + 4 = 0
$$

#### Yechish:
Ozod had: $4$. Bo'luvchilari: $\pm 1, \pm 2, \pm 4$.

1. **$c = 1$ ni tekshiramiz:**
   $1^4 - 2(1) - 3(1) + 4(1) + 4 = 4 \neq 0$ ($c=1$ ildiz emas).

2. **$c = -1$ ni tekshiramiz:**

| | $1$ | $-2$ | $-3$ | $4$ | $4$ |
|---|---|---|---|---|---|
| **$c = -1$** | $1$ | $-1 \cdot 1 + (-2) = -3$ | $-1 \cdot (-3) + (-3) = 0$ | $-1 \cdot 0 + 4 = 4$ | $-1 \cdot 4 + 4 = \mathbf{0}$ |

$R = 0$ bo'ldi! Demak, $x_1 = -1$ — ildiz. Bo'linma ko'phad: $x^3 - 3x^2 + 0x + 4$.

3. **Ildiz karrali bo'lishi mumkin!** Hosil bo'lgan yangi qatorni yana $c = -1$ ga tekshiramiz:

| | $1$ | $-3$ | $0$ | $4$ |
|---|---|---|---|---|
| **$c = -1$** | $1$ | $-1 \cdot 1 + (-3) = -4$ | $-1 \cdot (-4) + 0 = 4$ | $-1 \cdot 4 + 4 = \mathbf{0}$ |

Yana $R = 0$! Demak, **$x = -1$ karraligi 2 ga teng bo'lgan ildiz** ekan!

4. Qolgan kvadrat ko'phad koeffitsiyentlari: $1, -4, 4$:
$$
x^2 - 4x + 4 = 0 \implies (x - 2)^2 = 0 \implies x_3 = x_4 = 2
$$

**Javob:** Tenglama ikkita 2 karrali ildizga ega: $x_{1,2} = -1$ (karraligi 2), $x_{3,4} = 2$ (karraligi 2). Ko'paytuvchilarga yoyilmasi: $(x + 1)^2 (x - 2)^2 = 0$.

---

### 3-misol: Bosh koeffitsiyent 1 bo'lmagan ratsional ildizlar

**Masala:** Tenglamani yeching:
$$
2x^3 + 3x^2 - 8x + 3 = 0
$$

#### Yechish:
Bu yerda $a_0 = 2$, $a_3 = 3$.
- $p$ soni $3$ ning bo'luvchisi: $\pm 1, \pm 3$;
- $q$ soni $2$ ning musbat bo'luvchisi: $1, 2$.

Mumkin bo'lgan ratsional ildizlar $\frac{p}{q}$:
$$
\pm 1, \quad \pm 3, \quad \pm \frac{1}{2}, \quad \pm \frac{3}{2}
$$

1. $c = 1$ ni Gorner jadvalida tekshiramiz:

| | $2$ | $3$ | $-8$ | $3$ |
|---|---|---|---|---|
| **$c = 1$** | $2$ | $1 \cdot 2 + 3 = 5$ | $1 \cdot 5 + (-8) = -3$ | $1 \cdot (-3) + 3 = \mathbf{0}$ |

$R = 0$ bo'ldi! Demak, $x_1 = 1$ — birinchi ildiz.
Bo'linma:
$$
2x^2 + 5x - 3 = 0
$$
Diskriminant: $D = 25 - 4(2)(-3) = 25 + 24 = 49$.
$$
x = \frac{-5 \pm 7}{4} \implies x_2 = \frac{2}{4} = \frac{1}{2}, \quad x_3 = \frac{-12}{4} = -3
$$

**Javob:** Ildizlar: $x_1 = 1, x_2 = \frac{1}{2}, x_3 = -3$.

---

## 4. Talabalar eng ko'p yo'l qo'yadigan tuzoqlar

> [!WARNING] Gorner sxemasida eng ko'p qilinadigan 3 ta xato
> 1. **Tushib qolgan daraja o'rniga nol qo'ymaslik:** Masalan, $x^3 - 7x + 6$ ko'phadda $x^2$ hadi qatnashmagan. Agar koeffitsiyentlarni $(1, -7, 6)$ deb yozsangiz, javob mutlaqo xato chiqadi! To'g'ri qator: $(1, \mathbf{0}, -7, 6)$.
> 2. **$(x - c)$ da ishorani adashtirish:** Agar ko'phadni $(x + 2)$ ga bo'layotgan bo'lsangiz, $c = -2$ deb olish kerak! $(x - 2)$ ga bo'layotganda esa $c = +2$.
> 3. **Ozod hadning manfiy bo'luvchilarini unutish:** Talabalar ko'pincha faqat musbat sonlarni ($+1, +2, +3$) tekshirishadi va ildiz topa olishmaydi. Doimo $\pm$ belgisi bilan tekshiring!

---

## 5. Mustaqil yechish uchun amaliy mashqlar

Gorner sxemasidan foydalanib quyidagi tenglamalarni yeching va ko'paytuvchilarga ajrating:

1. $\lambda^3 - 4\lambda^2 - 7\lambda + 10 = 0$
   - *Javob:* $\lambda_1 = 1, \lambda_2 = 5, \lambda_3 = -2$. Ko'paytuvchilar: $(\lambda - 1)(\lambda - 5)(\lambda + 2) = 0$.

2. $x^4 - x^3 - 7x^2 + x + 6 = 0$
   - *Javob:* $x_1 = 1, x_2 = -1, x_3 = 3, x_4 = -2$.

3. $3x^3 + 2x^2 - 7x + 2 = 0$
   - *Javob:* $x_1 = 1, x_2 = -2, x_3 = \frac{1}{3}$. Ko'paytuvchilar: $(x - 1)(x + 2)(3x - 1) = 0$.
