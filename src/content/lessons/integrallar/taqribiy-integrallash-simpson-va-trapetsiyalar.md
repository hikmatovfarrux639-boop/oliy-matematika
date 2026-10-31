---
title: "Taqribiy integrallash: Trapetsiyalar va Simpson usullari"
module: "integrallar"
order: 5
description: "Aniq integrallarni taqribiy (sonli) hisoblash, to'g'ri to'rtburchaklar usuli, trapetsiyalar usuli, Simpson (parabolalar) formulasi, Runge xatolik baholash qoidasi va dasturlashdagi algoritmlar."
---

## Kirish: Nyuton-Leybnits formulasi ojiz qolganda

Biz bilamizki, aniq integralni hisoblash uchun Nyuton–Leybnits formulasi ishlatiladi:
$$
\int_a^b f(x) \, dx = F(b) - F(a)
$$
Lekin hayotda va amaliyotda uchraydigan ko'plab integrallarning boshlang'ich funksiyasi **elementar funksiyalarda ifodalanmaydi**! Masalan:
* Puasson integrali: $\int e^{-x^2} \, dx$
* Fresnel integrallari: $\int \sin(x^2) \, dx, \; \int \cos(x^2) \, dx$
* Logarifmik integral: $\int \frac{dx}{\ln x}$

Yoki tajribada funksiya analitik formula emas, balki datchiklar yordamida **jadval ko'rinishida** berilgan bo'lsa-chi?
Bunday holatlarda kompyuterlar va muhandislar **Taqribiy (sonli) integrallash usullaridan** foydalanadilar!

---

## 1. Integrallash kesmasini bo'laklash

$[a, b]$ kesmani teng $n$ ta bo'lakka bo'lamiz:
* Qadam uzunligi:
  
$$
  h = \frac{b - a}{n}
  
$$
* Bo'linish nuqtalari:
  
$$
  x_0 = a, \quad x_1 = a + h, \quad x_2 = a + 2h, \quad \dots, \quad x_n = b
  
$$
* Funksiyaning ushbu nuqtalardagi qiymatlari:
  
$$
  y_0 = f(x_0), \quad y_1 = f(x_1), \quad y_2 = f(x_2), \quad \dots, \quad y_n = f(x_n)
  
$$

---

## 2. To'g'ri to'rtburchaklar usuli (Eng sodda usul)

Egri chiziqli trapetsiyani to'g'ri to'rtburchaklar yig'indisi bilan almashtiramiz:
* **O'rta to'g'ri to'rtburchaklar formulasi:**
  
$$
  \int_a^b f(x) \, dx \approx h \cdot \sum_{i=1}^n f\left(x_i - \frac{h}{2}\right)
  
$$

---

## 3. Trapetsiyalar usuli (Chiziqli interpolyatsiya)

Funksiya grafigidagi qo'shni $(x_i, y_i)$ va $(x_{i+1}, y_{i+1})$ nuqtalarni to'g'ri chiziq kesmalari (vatarlar) bilan tutashtiramiz. Natijada har bir bo'lakcha oddiy **trapetsiyaga** aylanadi!

Bir bo'lakcha trapetsiya yuzi: $S_i = \frac{y_i + y_{i+1}}{2} \cdot h$.
Barcha trapetsiyalar yuzini qo'shib chiqsak:

$$
\int_a^b f(x) \, dx \approx h \cdot \left( \frac{y_0 + y_n}{2} + y_1 + y_2 + \dots + y_{n-1} \right)
$$

> [!NOTE]
> **Qoidani yodlash oson:** Qadam $h$ ni chetdagi qiymatlar yarim yig'indisi va barcha o'rtadagi to'liq qiymatlar yig'indisiga ko'paytiramiz!

---

## 4. Simpson usuli (Parabolalar formulasi — Eng yuqori aniqlik!)

Ingliz matematigi Tomas Simpson funksiyani to'g'ri chiziq bilan emas, balki **2-darajali parabola** bilan almashtirishni taklif qildi. Parabola egri chiziqqa juda yaxshi moslashgani sababli bu usulning aniqligi favqulodda yuqori bo'ladi!

> [!IMPORTANT]
> **Simpson qoidasi:** Bo'linish nuqtalari soni $n$ albatta **JUFT son** bo'lishi shart ($n = 2m$).
> 
$$
> \int_a^b f(x) \, dx \approx \frac{h}{3} \cdot \left[ (y_0 + y_n) + 4(y_1 + y_3 + \dots + y_{n-1}) + 2(y_2 + y_4 + \dots + y_{n-2}) \right]
> 
$$

**Simpson formulasi qisqacha "1 - 4 - 2 qoidasi" deyiladi:**
* Chetki qiymatlar $y_0, y_n$ — koeffitsiyenti $1$;
* Barcha **toq indeksli** qiymatlar ($y_1, y_3, y_5, \dots$) — koeffitsiyenti **$4$**;
* Barcha **juft indeksli** ichki qiymatlar ($y_2, y_4, y_6, \dots$) — koeffitsiyenti **$2$**;
* Qavs tashqarisiga $\frac{h}{3}$ ko'paytiriladi!

---

## 5. To'liq yechilgan namunaviy masalalar

### 1-misol: Trapetsiyalar va Simpson usulini solishtirish
**Shart:** $\int_0^1 \frac{dx}{1 + x}$ integralni $n = 4$ bo'lakka bo'lib:
1. Trapetsiyalar usuli bilan;
2. Simpson usuli bilan taqribiy hisoblang va aniq qiymat bilan solishtiring.

**Yechish:**
1. Qadam uzunligi:
   $h = \frac{b - a}{n} = \frac{1 - 0}{4} = 0.25$.
2. Nuqtalar va funksiya $y = \frac{1}{1 + x}$ qiymatlari jadvali:
   * $x_0 = 0.00 \implies y_0 = \frac{1}{1 + 0} = 1.0000$
   * $x_1 = 0.25 \implies y_1 = \frac{1}{1 + 0.25} = 0.8000$
   * $x_2 = 0.50 \implies y_2 = \frac{1}{1 + 0.50} \approx 0.6667$
   * $x_3 = 0.75 \implies y_3 = \frac{1}{1 + 0.75} \approx 0.5714$
   * $x_4 = 1.00 \implies y_4 = \frac{1}{1 + 1.00} = 0.5000$

3. **Trapetsiyalar usuli:**
   
$$
   I_{\text{trap}} \approx 0.25 \cdot \left( \frac{1.0000 + 0.5000}{2} + 0.8000 + 0.6667 + 0.5714 \right)
   
$$
   
$$
   I_{\text{trap}} \approx 0.25 \cdot (0.7500 + 2.0381) = 0.25 \cdot 2.7881 \approx 0.6970
   
$$

4. **Simpson usuli:**
   * Chetki: $y_0 + y_4 = 1.0000 + 0.5000 = 1.5000$
   * Toqlar (x4): $4(y_1 + y_3) = 4(0.8000 + 0.5714) = 4 \cdot 1.3714 = 5.4856$
   * Juftlar (x2): $2(y_2) = 2(0.6667) = 1.3334$
   
$$
   I_{\text{Simp}} \approx \frac{0.25}{3} \cdot [1.5000 + 5.4856 + 1.3334] = \frac{0.25}{3} \cdot 8.3190 \approx 0.69325
   
$$

5. **Aniq qiymat bilan solishtirish:**
   
$$
   \int_0^1 \frac{dx}{1 + x} = [\ln(1 + x)]_0^1 = \ln 2 \approx 0.693147
   
$$
   * Trapetsiyalar xatoligi: $|0.6970 - 0.6931| \approx 0.0039$
   * Simpson xatoligi: $|0.69325 - 0.69315| \approx \mathbf{0.00010}$ (40 barobar aniqroq!).

**Javob:** Trapetsiyalar: $\approx \mathbf{0.6970}$, Simpson: $\approx \mathbf{0.69325}$.

---

## ⚠️ Imtihondagi tuzoqlar (Tipik talaba xatolari)

> [!WARNING]
> 1. **Simpson usulida toq $n$ tanlash:** Simpson formulasida bo'laklar soni $n$ faqat juft bo'lishi mumkin ($n = 2, 4, 6, 8, \dots$). Agar masala $n = 5$ desa, Simpson usulini to'g'ridan-to'g'ri qo'llab bo'lmaydi.
> 2. **Koeffitsiyentlarni adashtirish:** Toq indekslar ($y_1, y_3$) oldida **$4$**, juft indekslar ($y_2, y_4$) oldida **$2$** turadi!
> 3. **Qadam ko'paytuvchisini unutish:** Trapetsiyada $h$ ga, Simpsonda esa $\frac{h}{3}$ ga ko'paytirish shart.

---

## ✍️ O'zingizni sinab ko'ring (Mustaqil mashq)

**Masala:** $\int_0^2 x^3 \, dx$ integralni $n = 2$ bo'lakka bo'lib Simpson usuli bilan hisoblang ($h = 1$).

<details>
<summary>👉 To'liq yechimni ko'rish (Tekshirish)</summary>

**Yechish bosqichlari:**
1. Qadam: $h = 1$. Nuqtalar: $x_0 = 0, x_1 = 1, x_2 = 2$.
2. Qiymatlar ($y = x^3$):
   * $y_0 = 0^3 = 0$
   * $y_1 = 1^3 = 1$
   * $y_2 = 2^3 = 8$
3. Simpson formulasi ($n = 2$ uchun):
   
$$
   I \approx \frac{h}{3} (y_0 + 4y_1 + y_2) = \frac{1}{3} (0 + 4 \cdot 1 + 8) = \frac{12}{3} = 4
   
$$
4. Aniq qiymati:
   
$$
   \int_0^2 x^3 \, dx = \left[ \frac{x^4}{4} \right]_0^2 = \frac{16}{4} = 4
   
$$
*(Simpson usuli 3-darajagacha bo'lgan barcha ko'phadlar uchun mutlaqo 100% ANIQ natija beradi!)*

**Javob:** $\mathbf{4}$ (Natija mutlaq aniq).

</details>
