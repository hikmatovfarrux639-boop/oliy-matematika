---
title: "Muavr-Laplas teoremalari va chiziqli regressiya tahlili"
module: "ehtimollar-nazariyasi"
order: 5
description: "Lokal va integral Muavr-Laplas teoremalari, Laplas funksiyasi, eng kichik kvadratlar usuli (EKU) va korrelyatsiya tahlili."
---

## Kirish: Katta sonlar va amaliy bashorat

Agar tanga 10 marta tashlansa, gerb tomoni aynan 5 marta tushish ehtimolini Bernulli formulasi $P_n(k) = C_n^k p^k q^{n-k}$ orqali bemalol hisoblash mumkin.

Lekin agar tanga **1000 marta** tashlansa va unda gerb tomoni 480 martadan 520 martagacha tushish ehtimoli so'ralsa-chi? $C_{1000}^{500}$ kombinatsiyasini hisoblash uchun hatto zamonaviy kalkulyatorlarning xotirasi ham yetmaydi, chunki undagi son yuzlab xonali raqamdan iborat!

Bu muammoni XVIII asrda buyuk matematiklar Avraam de Muavr va Per-Simon Laplas hal qilib berishgan. Ular katta sinovlar soni ($n \to \infty$) uchun binom taqsimotini uzluksiz **normal taqsimotga (Gauss egri chizig'iga)** yaqinlashishini isbotlaganlar.

Shuningdek, bugungi kunda Big Data, Machine Learning va Data Science ning poydevori hisoblangan ma'lumotlar orasidagi bog'liqlikni topish (chiziqli regressiya va korrelyatsiya) ham aynan ehtimollar nazariyasining bevosita amaliy davomidir.

---

## 1. Lokal Muavr-Laplas teoremasi

Agar har bir erkli sinovda $A$hodisaning ro'y berish ehtimoli$p$ ($0 < p < 1$) bo'lsa va sinovlar soni $n$ yetarlicha katta bo'lsa ($npq \ge 9..10$), hodisa $n$ta sinovda **aynan$k$ marta** ro'y berish ehtimoli quyidagi asimptotik formula bilan hisoblanadi:

$$
P_n(k) \approx \frac{1}{\sqrt{npq}} \varphi(x)
$$

Bu yerda:
- $x = \frac{k - np}{\sqrt{npq}}$-$\varphi(x) = \frac{1}{\sqrt{2\pi}} e^{-\frac{x^2}{2}}$ — standart normal taqsimotning zichlik funksiyasi (Gauss funksiyasi).

### Gauss funksiyasi $\varphi(x)$ xossalari:
1. **Juft funksiya:** $\varphi(-x) = \varphi(x)$. (Jadvalda faqat musbat $x$ beriladi).
2. $x > 4$bo'lganda$\varphi(x) \approx 0$ deb hisoblanadi.

---

## 2. Integral Muavr-Laplas teoremasi

Hodisa $n$ ta erkli sinovda **$k_1$tadan$k_2$ tagacha** oraliqda ro'y berish ehtimoli quyidagi formula orqali topiladi:

$$
P_n(k_1 \le k \le k_2) \approx \Phi(x_2) - \Phi(x_1)
$$

Bu yerda:
$$
x_1 = \frac{k_1 - np}{\sqrt{npq}}, \quad x_2 = \frac{k_2 - np}{\sqrt{npq}}
$$
$\Phi(x)$ — Laplas funksiyasi (xatolar integrali):
$$
\Phi(x) = \frac{1}{\sqrt{2\pi}} \int_0^x e^{-\frac{t^2}{2}} dt
$$

### Laplas funksiyasi $\Phi(x)$ xossalari:
1. **Toq funksiya:** $\Phi(-x) = -\Phi(x)$. Demak, $\Phi(x_2) - \Phi(-|x_1|) = \Phi(x_2) + \Phi(|x_1|)$.
2. $x \ge 5$bo'lganda$\Phi(x) \approx 0.5$ deb qabul qilinadi.
3. **O'rtachadan chetlanish ehtimoli:**
   
$$
   P(|k - np| \le \varepsilon) \approx 2\Phi\left(\frac{\varepsilon}{\sqrt{npq}}\right)
   
$$

---

## 3. Chiziqli regressiya va Eng Kichik Kvadratlar Usuli (EKU)

Ikki miqdor ($X$va$Y$) o'rtasida to'g'ri chiziqli empirik bog'lanish $y = ax + b$ ko'rinishida qidiriladi.

Tajribada olingan $(x_i, y_i)$ ($i = 1, \dots, n$) nuqtalar uchun nazariy to'g'ri chiziqdan chetlanishlar kvadratlari yig'indisi minimal bo'lishi talab qilinadi:

$$
S(a, b) = \sum_{i=1}^n \big(y_i - (ax_i + b)\big)^2 \to \min
$$

Xususiy hosilalarni nolga tenglashtirib, **normal tenglamalar sistemasini** olamiz:

$$
\begin{cases}
a \sum x_i^2 + b \sum x_i = \sum x_i y_i \\
a \sum x_i + n \cdot b = \sum y_i
\end{cases}
$$

Kramer qoidasi bo'yicha koeffitsiyentlar:
$$
a = \frac{n \sum xy - \sum x \sum y}{n \sum x^2 - (\sum x)^2}
$$
$$
b = \bar{y} - a \bar{x}
$$

### Chiziqli korrelyatsiya koeffitsiyenti ($r_{xy}$):
Bog'liqlikning qay darajada zichligini ko'rsatadi:
$$
r_{xy} = \frac{\sum (x_i - \bar{x})(y_i - \bar{y})}{\sqrt{\sum (x_i - \bar{x})^2 \cdot \sum (y_i - \bar{y})^2}}
$$
- $|r_{xy}| = 1$ — funksional chiziqli bog'liqlik.
- $0.7 \le |r_{xy}| < 1$ — kuchli chiziqli korrelyatsiya.
- $r_{xy} = 0$ — chiziqli bog'liqlik mavjud emas.

---

## 4. Amaliy masalalar va ko'p usulli yechimlar

### 1-masala: Integral Muavr-Laplas tatbiqi

Zavodda tayyorlanayotgan mahsulotning standartga to'g'ri kelish ehtimoli $p = 0.8$ga teng. Tasodifiy tanlab olingan$n = 400$ ta mahsulot ichida standart detallar soni 310 tadan 330 tagacha bo'lishi ehtimolini toping.

#### Yechish:
1. Parametrlarni aniqlaymiz:
   - $n = 400$, $p = 0.8$, $q = 1 - p = 0.2$- Matematik kutilma:$np = 400 \cdot 0.8 = 320$- Dispersiya:$npq = 400 \cdot 0.8 \cdot 0.2 = 64 \implies \sqrt{npq} = \sqrt{64} = 8$ $npq = 64 > 10$ sharti to'liq bajarilmoqda, demak Integral Muavr-Laplas teoremasi juda yuqori aniqlik beradi.

2. Integrallash chegaralari $x_1$va$x_2$ ni topamiz ($k_1 = 310, k_2 = 330$):
   
$$
   x_1 = \frac{k_1 - np}{\sqrt{npq}} = \frac{310 - 320}{8} = \frac{-10}{8} = -1.25
   
$$
   
$$
   x_2 = \frac{k_2 - np}{\sqrt{npq}} = \frac{330 - 320}{8} = \frac{10}{8} = 1.25
   
$$

3. Formulani qo'llaymiz:
   
$$
   P_{400}(310 \le k \le 330) \approx \Phi(1.25) - \Phi(-1.25)
   
$$
   Laplas funksiyasining toqligidan:
   
$$
   \Phi(1.25) - (-\Phi(1.25)) = 2\Phi(1.25)
   
$$

4. Laplas jadvalidan $\Phi(1.25) \approx 0.3944$ qiymatini olamiz:
   
$$
   P \approx 2 \cdot 0.3944 = 0.7888
   
$$
   Demak, mahsulotlar soni 310 dan 330 gacha bo'lishi ehtimoli taxminan **$78.9\%$** ni tashkil etadi.

---

### 2-masala: Eng kichik kvadratlar usuli bilan regressiya tenglamasini tuzish

Eksperimentda quyidagi 4 ta o'lchov natijalari olindi:

| $x_i$ | 1 | 2 | 3 | 4 |
|-------|---|---|---|---|
| $y_i$ | 2 | 3 | 5 | 6 |

Eng kichik kvadratlar usuli bo'yicha $y = ax + b$ chiziqli regressiya to'g'ri chizig'ini toping.

#### Yechish:
Hisoblash jadvalini tuzamiz ($n = 4$):
- $\sum x_i = 1 + 2 + 3 + 4 = 10 \implies \bar{x} = 10/4 = 2.5$-$\sum y_i = 2 + 3 + 5 + 6 = 16 \implies \bar{y} = 16/4 = 4.0$-$\sum x_i^2 = 1^2 + 2^2 + 3^2 + 4^2 = 1 + 4 + 9 + 16 = 30$-$\sum x_i y_i = (1 \cdot 2) + (2 \cdot 3) + (3 \cdot 5) + (4 \cdot 6) = 2 + 6 + 15 + 24 = 47$

Normal tenglamalar formulasiga qo'yamiz:
$$
a = \frac{n \sum xy - \sum x \sum y}{n \sum x^2 - (\sum x)^2} = \frac{4(47) - 10(16)}{4(30) - 10^2} = \frac{188 - 160}{120 - 100} = \frac{28}{20} = 1.4
$$
$$
b = \bar{y} - a \bar{x} = 4.0 - 1.4(2.5) = 4.0 - 3.5 = 0.5
$$

Demak, izlanayotgan regressiya to'g'ri chizig'i:
$$
y = 1.4x + 0.5
$$

---

## 5. Imtihondagi asosiy tuzoqlar

> [!WARNING] Imtihondagi tuzoqlar
> 1. **Puasson va Laplasni aralashtirish:** Agar $p \le 0.05$ (hodisa juda kam uchraydigan bo'lsa), Muavr-Laplas emas, balki **Puasson taqsimoti** ($P_n(k) \approx \frac{\lambda^k}{k!} e^{-\lambda}$, $\lambda = np$) qo'llanilishi kerak! Muavr-Laplas faqat $npq > 9$ bo'lgandagina to'g'ri ishlaydi.
> 2. **Laplas funksiyasining 0.5 bilan adashtirilishi:** Turli darsliklarda Laplas funksiyasi ikki xil ta'riflanadi: $\Phi(x) = \frac{1}{\sqrt{2\pi}} \int_0^x e^{-t^2/2} dt$(bizdagi kabi,$\Phi(0) = 0, \Phi(+\infty) = 0.5$) yoki $\Phi^*(x) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^x e^{-t^2/2} dt$ ($\Phi^*(0) = 0.5, \Phi^*(+\infty) = 1$). Imtihonda siz foydalanayotgan jadval qaysi turdaligini jadvalning 0 nuqtasiga qarab darhol aniqlab oling!
> 3. **Toqlik xossasida ishora:** $\Phi(-x) = -\Phi(x)$. Agar $x_1 = -2$bo'lsa,$\Phi(-2) = -\Phi(2)$bo'lib,$\Phi(x_2) - \Phi(x_1) = \Phi(x_2) + \Phi(2)$ ga aylanadi. Talabalar ko'pincha minusni plyusga almashtirishni unutishadi.

---

## 6. Mustaqil yechish uchun amaliy mashqlar

### 1-mashq
Urug'ning unib chiqish ehtimoli $p = 0.75$. Ekilgan 600 ta urug'dan 450 tasi unib chiqishi ehtimolini lokal Muavr-Laplas formulasi bilan hisoblang ($\varphi(0) \approx 0.3989$).

<details>
<summary>👉 Yechimni tekshirish</summary>

1. $n = 600, p = 0.75, q = 0.25$.
   $np = 600 \cdot 0.75 = 450$.
   $npq = 450 \cdot 0.25 = 112.5 \implies \sqrt{npq} = \sqrt{112.5} \approx 10.607$.
2. $x = \frac{k - np}{\sqrt{npq}} = \frac{450 - 450}{10.607} = 0$.
3. $P_{600}(450) \approx \frac{1}{10.607} \varphi(0) = \frac{0.3989}{10.607} \approx 0.0376$ ($3.76\%$).

</details>

### 2-mashq
Agar $n = 100, p = 0.5$ (tanga 100 marta tashlanganda) gerb tomoni 40 martadan 60 martagacha tushish ehtimolini toping ($\Phi(2.0) \approx 0.4772$).

<details>
<summary>👉 Yechimni tekshirish</summary>

1. $np = 50$, $npq = 25 \implies \sqrt{npq} = 5$.
2. $x_1 = \frac{40 - 50}{5} = -2$, $x_2 = \frac{60 - 50}{5} = 2$.
3. $P \approx \Phi(2) - \Phi(-2) = 2\Phi(2) \approx 2 \cdot 0.4772 = 0.9544$ ($95.44\%$).

</details>
