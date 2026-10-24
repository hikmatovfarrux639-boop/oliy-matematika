---
title: "Differensial tenglamalarni sonli yechish: Eyler va Runge-Kutta usullari"
module: "differensial-tenglamalar"
order: 9
description: "Koshi masalasini taqribiy yechish, oddiy Eyler usuli, modifikatsiyalangan Eyler usuli, 4-tartibli klassik Runge-Kutta (RK4) algoritmi va Runge qoidasi bo'yicha xatolikni baholash."
---

## Kirish: Analitik usullar ojiz qolganda

Haqiqiy muhandislik va ilmiy hisoblashlarda (raketa traektoriyasini hisoblash, ob-havo bashorati, kosmik apparatlarning tortishish maydonidagi harakati) uchraydigan differensial tenglamalarning 95% dan ortig'ini analitik tarzda (qalam va qog'ozda formulalar orqali) yechib bo'lmaydi.

Bunday paytda matematik dasturlash (Python, MATLAB, C++) ning poydevori bo'lgan **sonli usullar** yordamga keladi. Ular berilgan oraliqda yechimning grafigini nuqtalar ketma-ketligi ko'rinishida yuqori aniqlikda qurib beradi.

---

## 1. Koshi masalasining qo'yilishi va qadam tushunchasi

Bizga 1-tartibli differensial tenglama va boshlang'ich shart berilgan bo'lsin:
$$
y' = f(x, y), \quad y(x_0) = y_0
$$
$[x_0; X]$ oraliqda yechimni topish talab etilsin. Oraliqni $n$ ta teng bo'lakka bo'lamiz:
$$
h = \frac{X - x_0}{n} \quad (\text{integrallash qadami})
$$
Tugun nuqtalar: $x_i = x_0 + i \cdot h, \quad (i = 0, 1, 2, \dots, n)$.
Har bir $x_i$ nuqtada noma'lum funksiyaning taqribiy qiymatini $y_i \approx y(x_i)$ deb belgilaymiz.

---

## 2. Oddiy Eyler usuli (1-tartibli aniqlik)

Hosilaning ta'rifiga ko'ra: $y'(x_i) \approx \frac{y_{i+1} - y_i}{h}$. Buni tenglamaga qo'ysak:
$$
\frac{y_{i+1} - y_i}{h} \approx f(x_i, y_i)
$$
Bundan mashhur **Eyler iteratsion formulasi** kelib chiqadi:
$$
y_{i+1} = y_i + h \cdot f(x_i, y_i)
$$

```
                       Eyler usulining geometrik ma'nosi
           y ^                                  Haqiqiy egri chiziq y(x)
             |                                  . - ~ * '
             |                             . - ~      /
      y_{i+1}|---------------------------*           /  Urinma bo'ylab
             |                          /|          /   qadam (xato paydo bo'ladi)
         y_i |-------------------------* |         /
             |                         | |        /
             +-------------------------+-+----------> x
                                      x_i x_{i+1}
                                         <- h ->
```

- **Lokal xatolik:** $O(h^2)$
- **Global xatolik:** $O(h)$ (ya'ni qadamni 2 marta kichraytirsak, aniqlik atigi 2 marta oshadi).

---

## 3. Modifikatsiyalangan Eyler usuli (Prediktor-Korrektor, $O(h^2)$)

Oddiy Eyler usulida urinma yo'nalishi faqat oraliqning boshida ($x_i$) olinishi sababli tezda xatolik yig'iladi. Buni tuzatish uchun oraliqning o'rtasidagi yoki oxiridagi o'rtacha burchak koeffitsiyenti olinadi:
1. **Oldindan bashorat (prediktor):**
   $$
   \tilde{y}_{i+1} = y_i + h \cdot f(x_i, y_i)
   $$
2. **Tuzatish (korrektor):**
   $$
   y_{i+1} = y_i + \frac{h}{2} \left[ f(x_i, y_i) + f(x_{i+1}, \tilde{y}_{i+1}) \right]
   $$

---

## 4. Klassik 4-tartibli Runge-Kutta usuli (RK4)

Dunyodagi eng keng tarqalgan va sanoat standarti hisoblangan usul — bu **4-tartibli Runge-Kutta usuli**dir. U har bir qadamda funksiya yo'nalishini 4 ta oraliq nuqtada tekshiradi:

$$
\begin{cases}
k_1 = f(x_i, y_i) \\
k_2 = f\left(x_i + \frac{h}{2}, \; y_i + \frac{h}{2} k_1\right) \\
k_3 = f\left(x_i + \frac{h}{2}, \; y_i + \frac{h}{2} k_2\right) \\
k_4 = f(x_i + h, \; y_i + h k_3)
\end{cases}
$$

Keyingi nuqtaning qiymati ushbu to'rt koeffitsiyentning Simpson qoidasiga o'xshash tortilgan o'rtachasi bilan hisoblanadi:
$$
\Delta y_i = \frac{h}{6} \left( k_1 + 2k_2 + 2k_3 + k_4 \right)
$$
$$
y_{i+1} = y_i + \Delta y_i
$$

- **Global xatolik:** $O(h^4)$.
- *Amaliy ahamiyati:* Agar qadamni 10 marta kichraytirsak ($h \to h/10$), hisoblash aniqligi **$10^4 = 10\,000$ marta** oshadi!

---

## 5. Masalani sonli va analitik taqqoslash

### Masala:
Koshi masalasini $[0; 0.2]$ oraliqda $h = 0.1$ qadam bilan yeching:
$$
y' = x + y, \quad y(0) = 1
$$
Aniq yechim bilan taqqoslang ($y_{\text{aniq}} = 2e^x - x - 1$).

#### 1-usul: Oddiy Eyler usuli bilan hisoblash
Bu yerda $f(x, y) = x + y$, $x_0 = 0$, $y_0 = 1$, $h = 0.1$.
1. **1-qadam ($x_0 = 0 \to x_1 = 0.1$):**
   $$
   f(x_0, y_0) = 0 + 1 = 1
   $$
   $$
   y_1 = y_0 + h \cdot f(x_0, y_0) = 1 + 0.1 \cdot 1 = 1.1
   $$
2. **2-qadam ($x_1 = 0.1 \to x_2 = 0.2$):**
   $$
   f(x_1, y_1) = 0.1 + 1.1 = 1.2
   $$
   $$
   y_2 = y_1 + h \cdot f(x_1, y_1) = 1.1 + 0.1 \cdot 1.2 = 1.1 + 0.12 = 1.22
   $$

#### 2-usul: Runge-Kutta (RK4) usuli bilan hisoblash
1-qadam ($x_0 = 0, y_0 = 1, h = 0.1$):
- $k_1 = f(0, 1) = 1$
- $k_2 = f(0 + 0.05, 1 + 0.05 \cdot 1) = f(0.05, 1.05) = 0.05 + 1.05 = 1.1$
- $k_3 = f(0 + 0.05, 1 + 0.05 \cdot 1.1) = f(0.05, 1.055) = 0.05 + 1.055 = 1.105$
- $k_4 = f(0 + 0.1, 1 + 0.1 \cdot 1.105) = f(0.1, 1.1105) = 0.1 + 1.1105 = 1.2105$
O'rtacha orttirma:
$$
\Delta y_0 = \frac{0.1}{6} (1 + 2(1.1) + 2(1.105) + 1.2105) = \frac{0.1}{6} (6.6205) \approx 0.110342
$$
$$
y_1 = 1 + 0.110342 = 1.110342
$$

#### Natijalarni aniq qiymat bilan solishtirish jadvali:

| $x$ | Eyler $y$ | RK4 $y$ | Aniq yechim $y(x) = 2e^x - x - 1$ | Eyler xatosi | RK4 xatosi |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **0.0** | 1.000000 | 1.000000 | 1.000000 | 0 | 0 |
| **0.1** | 1.100000 | 1.110342 | **1.110342** | 0.010342 | **< 0.000001** |
| **0.2** | 1.220000 | 1.242805 | **1.242806** | 0.022806 | **< 0.000001** |

Ko'rib turganingizdek, oddiy Eyler usulida xatolik allaqachon 2-o'rinda sezilarli ($0.023$), RK4 esa verguldan keyin 6 ta raqamgacha mutlaq aniqlikni ko'rsatdi!

---

## 6. Runge qoidasi (Amaliy xatolik bahosi)

Agar tenglamaning aniq yechimi noma'lum bo'lsa, xatolik qanday baholanadi?
Buning uchun hisoblash ikki marta bajariladi: bir marta $h$ qadam bilan ($y_h$), ikkinchi marta ikki barobar kichik $\frac{h}{2}$ qadam bilan ($y_{h/2}$).
$p$-tartibli usul uchun Runge bahosi:
$$
|y(x) - y_{h/2}| \approx \frac{|y_{h/2} - y_h|}{2^p - 1}
$$
- Eyler usuli uchun ($p=1$): $\varepsilon \approx |y_{h/2} - y_h|$
- Runge-Kutta uchun ($p=4$): $\varepsilon \approx \frac{|y_{h/2} - y_h|}{15}$

---

> [!WARNING] Imtihondagi tuzoqlar va ko'p uchraydigan xatoliklar
> 1. **Qadam kattaligi va turg'unlik:** Agar $h$ qadami juda katta tanlansa, usul "portlashi" (uzoqlashishi) mumkin (noturg'unlik hodisasi). Ayniqsa tez so'nuvchi jarayonlarda qadam yetarlicha kichik bo'lishi shart.
> 2. **Runge-Kuttada $k_2, k_3, k_4$ hisoblashda adashish:** Har bir keyingi koeffitsiyentda argumentlar o'zgaradi: $k_2$ da $x + h/2, y + hk_1/2$, $k_3$ da $y + hk_2/2$, ammo $k_4$ da esa butun qadam $x + h, y + hk_3$ olinadi!

---

## Mustaqil yechish uchun mashqlar

### 1-mashq
Koshi masalasini $y' = y - x, y(0) = 2$ oddiy Eyler usuli bilan $h = 0.1$ qadamda $x = 0.1$ nuqta uchun hisoblang.

<details>
<summary>👉 Yechimni tekshirish</summary>

**Yechish:**
$x_0 = 0, y_0 = 2, h = 0.1$.
$f(x_0, y_0) = y_0 - x_0 = 2 - 0 = 2$.
$$
y_1 = y_0 + h \cdot f(x_0, y_0) = 2 + 0.1 \cdot 2 = 2.2
$$
*(Aniq yechim: $y(x) = e^x + x + 1 \implies y(0.1) = e^{0.1} + 1.1 \approx 1.10517 + 1.1 = 2.20517$. Xatolik: $0.00517$).*

**Javob:** $y(0.1) \approx 2.2$.
</details>

### 2-mashq
Yuqoridagi masalani modifikatsiyalangan Eyler usuli bilan hisoblang va aniqlikni solishtiring.

<details>
<summary>👉 Yechimni tekshirish</summary>

**Yechish:**
1. Prediktor: $\tilde{y}_1 = y_0 + h \cdot f(x_0, y_0) = 2 + 0.1 \cdot 2 = 2.2$.
2. Korrektor:
   $f(x_0, y_0) = 2$;
   $f(x_1, \tilde{y}_1) = 2.2 - 0.1 = 2.1$.
   $$
   y_1 = y_0 + \frac{h}{2} [2 + 2.1] = 2 + 0.05 \cdot 4.1 = 2 + 0.205 = 2.205
   $$
*(Aniq qiymat: $2.20517$. Xatolik atigi $0.00017$! Modifikatsiyalangan usul oddiy Eylerga qaraganda 30 marta aniqroq chiqdi).*

**Javob:** $y(0.1) \approx 2.205$.
</details>
