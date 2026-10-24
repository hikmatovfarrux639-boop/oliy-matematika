---
title: "Ratsional kasrlarni integrallash va xosmas integrallar"
module: "integrallar"
order: 6
description: "Ratsional kasrlarni sodda kasrlarga yoyish, Heaviside usuli, 1- va 2-tur xosmas integrallar hamda yaqinlashish alomatlari."
---

## Kirish: Analitik hisobning asosi

Integral hisobida elementar funksiyalar bilan ifodalanadigan eng katta sinf — bu **kasr-ratsional funksiyalar** $\frac{P(x)}{Q(x)}$ sinfidir. Har qanday ratsional funksiyaning integrali har doim elementar funksiyalar (logarifm, arktangens va ratsional kasrlar) orqali ifodalanadi.

Shu bilan birga, fizika, ehtimollar nazariyasi va texnik hisob-kitoblarda integrallash oraliqlari cheksiz bo'lgan yoki integral ostidagi funksiya cheksizlikka intiladigan holatlar juda ko'p uchraydi. Bunday integrallar **xosmas integrallar** deb ataladi.

Ushbu darsda biz ratsional kasrlarni 2 xil usulda tezkor soddalashtirishni hamda xosmas integrallarning yaqinlashishini tekshirishni ko'rib chiqamiz.

---

## 1. Ratsional kasrlarni integrallash algoritmi

Faraz qilaylik, $\int \frac{P(x)}{Q(x)} dx$ integrali berilgan bo'lsin:

### 1-qadam: Kasrning to'g'ri yoki noto'g'riligini tekshirish
- Agar $\deg P(x) \ge \deg Q(x)$ bo'lsa, kasr **noto'g'ri** deyiladi. Uni albatta burchakli bo'lish orqali butun qismini ajratish shart:
  
$$
  \frac{P(x)}{Q(x)} = M(x) + \frac{R(x)}{Q(x)}, \quad (\deg R < \deg Q)
  
$$
- Agar $\deg P(x) < \deg Q(x)$ bo'lsa, kasr **to'g'ri** deyiladi.

### 2-qadam: Maxrajni chiziqli va kvadratik ko'paytuvchilarga ajratish
Maxraj $Q(x)$ haqiqiy sonlar maydonida $(x - a)^k$ va $(x^2 + px + q)^m$ ko'rinishidagi ko'paytuvchilarga ajratiladi ($p^2 - 4q < 0$).

### 3-qadam: Sodda kasrlar yig'indisiga yoyish
Har bir ko'paytuvchiga mos sodda kasrlar mos qo'yiladi:
- $(x - a) \implies \frac{A}{x - a}$
- $(x - a)^2 \implies \frac{A_1}{x - a} + \frac{A_2}{(x - a)^2}$
- $(x^2 + px + q) \implies \frac{Mx + N}{x^2 + px + q}$

---

## 2. Noma'lum koeffitsiyentlarni topishning 2 xil usuli

Misol tariqasida $\frac{2x^2 + 5x - 1}{(x - 1)(x + 2)(x - 3)}$ ifodani yoyaylik:
$$
\frac{2x^2 + 5x - 1}{(x - 1)(x + 2)(x - 3)} = \frac{A}{x - 1} + \frac{B}{x + 2} + \frac{C}{x - 3}
$$

### 1-usul: Klassik noma'lum koeffitsiyentlar usuli
Umumiy maxraj beramiz:
$$
2x^2 + 5x - 1 = A(x + 2)(x - 3) + B(x - 1)(x - 3) + C(x - 1)(x + 2)
$$
Qavslarni ochib, $x^2$, $x^1$, $x^0$ oldidagi koeffitsiyentlarni tenglashtiramiz va 3 ta noma'lumli chiziqli tenglamalar sistemasini tuzamiz. Bu usul universal, biroq hisob-kitobi ancha uzun.

### 2-usul: Xususiy qiymatlar (Xevisayd — "Qo'l bilan yopish" cover-up) usuli
Maxraj ildizlarini birma-bir qo'yib chiqamiz:
1. $x = 1$ qo'yamiz (chunki $B$ va $C$ qatnashgan hadlar nolga aylanadi):
   
$$
   2(1)^2 + 5(1) - 1 = A(1 + 2)(1 - 3) \implies 6 = -6A \implies A = -1
   
$$
2. $x = -2$ qo'yamiz ($A$ va $C$ qatnashgan hadlar nolga aylanadi):
   
$$
   2(-2)^2 + 5(-2) - 1 = B(-2 - 1)(-2 - 3) \implies -3 = 15B \implies B = -\frac{1}{5}
   
$$
3. $x = 3$ qo'yamiz ($A$ va $B$ hadlar yo'qoladi):
   
$$
   2(9) + 15 - 1 = C(3 - 1)(3 + 2) \implies 32 = 10C \implies C = \frac{16}{5}
   
$$
Barcha koeffitsiyentlar 30 soniyada hech qanday sistemalarsiz topildi!

---

## 3. Xosmas integrallar

### 1-tur xosmas integrallar (cheksiz integrallash oralig'i):
$$
\int_a^{+\infty} f(x) dx = \lim_{B \to +\infty} \int_a^B f(x) dx
$$
Agar bu limit mavjud va chekli son bo'lsa, xosmas integral **yaqinlashuvchi**, cheksiz yoki mavjud bo'lmasa **uzoqlashuvchi** deyiladi.

> **Yaqinlashish etaloni (Dirixle integrali):**
> 
$$
> \int_1^{+\infty} \frac{dx}{x^p} = \begin{cases} \text{Yaqinlashuvchi}, & \text{agar } p > 1 \\ \text{Uzoqlashuvchi}, & \text{agar } p \le 1 \end{cases}
> 
$$

### 2-tur xosmas integrallar (uzilish nuqtasiga ega oraliq):
Agar $f(x)$ funksiya $x = b$ nuqtada cheksizlikka intilsa ($\lim_{x \to b-0} f(x) = \infty$):
$$
\int_a^b f(x) dx = \lim_{\varepsilon \to 0^+} \int_a^{b - \varepsilon} f(x) dx
$$

> **2-tur etaloni:**
> 
$$
> \int_a^b \frac{dx}{(b - x)^\alpha} = \begin{cases} \text{Yaqinlashuvchi}, & \text{agar } \alpha < 1 \\ \text{Uzoqlashuvchi}, & \text{agar } \alpha \ge 1 \end{cases}
> 
$$

---

## 4. Amaliy masalalar va ko'p usulli yechimlar

### 1-masala: Ratsional kasr integralini hisoblash

$$
I = \int \frac{x^4 + 1}{x^3 - x} dx
$$

#### Yechish:
1. Suratning darajasi 4, maxrajniki 3. Kasr noto'g'ri! Butun qismini ajratamiz:
   
$$
   (x^4 + 1) : (x^3 - x) = x + \text{qoldiq } (x^2 + 1)
   
$$
   
$$
   \frac{x^4 + 1}{x^3 - x} = x + \frac{x^2 + 1}{x(x - 1)(x + 1)}
   
$$
2. Kasr qismini sodda kasrlarga ajratamiz:
   
$$
   \frac{x^2 + 1}{x(x - 1)(x + 1)} = \frac{A}{x} + \frac{B}{x - 1} + \frac{C}{x + 1}
   
$$
   Heaviside cover-up usulini qo'llaymiz:
   - $x = 0$ da: $A = \frac{0^2 + 1}{(0 - 1)(0 + 1)} = \frac{1}{-1} = -1$
   - $x = 1$ da: $B = \frac{1^2 + 1}{1(1 + 1)} = \frac{2}{2} = 1$
   - $x = -1$ da: $C = \frac{(-1)^2 + 1}{(-1)(-1 - 1)} = \frac{2}{2} = 1$
3. Integrallaymiz:
   
$$
   I = \int x dx - \int \frac{dx}{x} + \int \frac{dx}{x - 1} + \int \frac{dx}{x + 1}
   
$$
   
$$
   I = \frac{x^2}{2} - \ln|x| + \ln|x - 1| + \ln|x + 1| + C = \frac{x^2}{2} + \ln\left|\frac{x^2 - 1}{x}\right| + C
   
$$

---

### 2-masala: 1-tur xosmas integralni hisoblash

$$
J = \int_0^{+\infty} x e^{-2x} dx
$$

#### 1-usul: Bo'laklab integrallash va limit ta'rifi
$u = x \implies du = dx$; $dv = e^{-2x}dx \implies v = -\frac{1}{2} e^{-2x}$.
$$
\int_0^B x e^{-2x} dx = \left[ -\frac{x}{2} e^{-2x} \right]_0^B + \frac{1}{2} \int_0^B e^{-2x} dx = -\frac{B}{2 e^{2B}} + 0 - \frac{1}{4} \left[ e^{-2x} \right]_0^B
$$
$$
= -\frac{B}{2e^{2B}} - \frac{1}{4e^{2B}} + \frac{1}{4}
$$
$B \to +\infty$ da limit olamiz:
Lopital qoidasiga ko'ra $\lim_{B \to \infty} \frac{B}{2e^{2B}} = \lim_{B \to \infty} \frac{1}{4e^{2B}} = 0$.
Shuning uchun:
$$
J = \lim_{B \to +\infty} \left(-\frac{B}{2e^{2B}} - \frac{1}{4e^{2B}} + \frac{1}{4}\right) = 0 - 0 + \frac{1}{4} = \frac{1}{4}
$$

#### 2-usul: Eyler Gamma-funksiyasi orqali tezkor hisoblash
Ma'lumki, $\int_0^\infty x^n e^{-\lambda x} dx = \frac{n!}{\lambda^{n+1}}$.
Bu yerda $n = 1$ va $\lambda = 2$:
$$
J = \frac{1!}{2^{1+1}} = \frac{1}{2^2} = \frac{1}{4}
$$
Integral bir zumda tekshirildi!

---

## 5. Imtihondagi asosiy tuzoqlar

> [!WARNING] Imtihondagi tuzoqlar
> 1. **Noto'g'ri kasrni darhol yoyish:** Agar surat darajasi maxrajnikidan kichik bo'lmasa, darhol $\frac{A}{x-1} + \dots$ deb yoyish qo'pol xatodir. Oldin albatta ko'phadni bo'lib, butun qismini ajratish shart!
> 2. **2-tur xosmas integralda oraliq ichidagi uzilishni sezmaslik:** Talabalar ko'pincha $\int_{-1}^1 \frac{dx}{x^2}$ integralini ko'rib, odatiy Nyuton-Leybnits formulasi bilan $\left[-\frac{1}{x}\right]_{-1}^1 = -1 - (1) = -2$ deb yechishadi. Lekin $f(x) = \frac{1}{x^2} > 0$ funksiyaning integrali manfiy bo'lishi mutlaqo mumkin emas! Gap shundaki, $x = 0$ nuqta oraliq ichidagi uzilish nuqtasidir va integral ikkiga bo'linadi: $\int_{-1}^0 \frac{dx}{x^2} + \int_0^1 \frac{dx}{x^2} = +\infty + \infty = +\infty$ (uzoqlashuvchi).
> 3. **Heaviside usulining chegarasi:** Xevisayd usuli faqat takrorlanmaydigan chiziqli ko'paytuvchilar uchun qulay. Kvadratik qismlar ($x^2 + px + q$) yoki karrali ko'paytuvchilar $(x-a)^2$ bo'lganda, ularni klassik tenglashtirish usuli bilan aralash qo'llash maqsadga muvofiqdir.

---

## 6. Mustaqil yechish uchun amaliy mashqlar

### 1-mashq
Ushbu integralni hisoblang:
$$
\int \frac{5x - 2}{x^2 - 4} dx
$$

<details>
<summary>👉 Yechimni tekshirish</summary>

Maxraj: $x^2 - 4 = (x - 2)(x + 2)$.
$$
\frac{5x - 2}{(x - 2)(x + 2)} = \frac{A}{x - 2} + \frac{B}{x + 2}
$$
Heaviside usuli:
- $x = 2 \implies A = \frac{5(2) - 2}{2 + 2} = \frac{8}{4} = 2$
- $x = -2 \implies B = \frac{5(-2) - 2}{-2 - 2} = \frac{-12}{-4} = 3$

Integrallaymiz:
$$
\int \left(\frac{2}{x - 2} + \frac{3}{x + 2}\right) dx = 2\ln|x - 2| + 3\ln|x + 2| + C
$$
</details>

### 2-mashq
Ushbu xosmas integralni yaqinlashishga tekshiring va qiymatini toping:
$$
\int_1^{+\infty} \frac{dx}{x^2 + 1}
$$

<details>
<summary>👉 Yechimni tekshirish</summary>

$$
\int_1^{+\infty} \frac{dx}{x^2 + 1} = \lim_{B \to +\infty} \left[\text{arctg } x\right]_1^B = \lim_{B \to +\infty} \left(\text{arctg } B - \text{arctg } 1\right) = \frac{\pi}{2} - \frac{\pi}{4} = \frac{\pi}{4}
$$
Integral yaqinlashuvchi va uning qiymati $\frac{\pi}{4}$ ga teng.
</details>
