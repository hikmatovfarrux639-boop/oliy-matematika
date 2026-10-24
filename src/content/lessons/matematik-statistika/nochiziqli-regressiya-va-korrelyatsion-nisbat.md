---
title: "Nochiziqli regressiya (parabolik, ko'rsatkichli, darajali) va korrelyatsion nisbat"
module: "matematik-statistika"
order: 8
description: "Eng kichik kvadratlar usulida kvadratik (parabolik), giperbolik va ko'rsatkichli regressiya tenglamalarini tuzish, determinatsiya koeffitsiyenti R^2 va korrelyatsion nisbat."
---

Ko'plab tabiiy, iqtisodiy va muhandislik jarayonlarida $X$ va $Y$ o'zgaruvchilar orasidagi bog'lanish to'g'ri chiziqli bo'lmaydi. Masalan, korxona ishlab chiqarish hajmi bilan mahsulot tannarxi orasidagi bog'lanish giperbolik, biologik populyatsiya o'sishi ko'rsatkichli (eksponensial), snaryadning uchish trayektoriyasi yoki daromadning soliq stavkasiga bog'liqligi (Laffer egri chizig'i) kvadratik parabola ko'rinishida bo'ladi. Ushbu darsda **nochiziqli regressiya modellarini** eng kichik kvadratlar usuli (EKKU) va chiziqlashtirish (linearizatsiya) yordamida qurish hamda egri chiziqli bog'lanish zichligini o'lchovchi **korrelyatsion nisbat** bilan tanishamiz.

---

## 1. Parabolik (kvadratik) regressiya va normal tenglamalar sistemasi

Agar korrelyatsion maydondagi tajriba nuqtalari $(x_1, y_1), (x_2, y_2), \dots, (x_n, y_n)$ parabola shoxi bo'ylab joylashgan bo'lsa, empirik regressiya tenglamasi ikkinchi tartibli ko'phad ko'rinishida izlanadi:
$$
\hat{y} = a x^2 + b x + c
$$

**Eng kichik kvadratlar usuli (EKKU)** ga ko'ra, $a, b, c$ parametrlar shunday tanlanadiki, kuzatilgan $y_i$ qiymatlar bilan model bo'yicha hisoblangan $\hat{y}_i$ qiymatlar ayirmalari kvadratlarining yig'indisi minimal bo'lsin:
$$
S(a, b, c) = \sum_{i=1}^{n} \left(y_i - (a x_i^2 + b x_i + c)\right)^2 \to \min
$$

Xususiy hosilalarni nolga tenglashtirib ($\frac{\partial S}{\partial a} = 0, \frac{\partial S}{\partial b} = 0, \frac{\partial S}{\partial c} = 0$), uch noma'lumli chiziqli **normal tenglamalar sistemasini** hosil qilamiz:

$$
\begin{cases}
a \sum_{i=1}^{n} x_i^4 + b \sum_{i=1}^{n} x_i^3 + c \sum_{i=1}^{n} x_i^2 = \sum_{i=1}^{n} x_i^2 y_i \\
a \sum_{i=1}^{n} x_i^3 + b \sum_{i=1}^{n} x_i^2 + c \sum_{i=1}^{n} x_i = \sum_{i=1}^{n} x_i y_i \\
a \sum_{i=1}^{n} x_i^2 + b \sum_{i=1}^{n} x_i + n \cdot c = \sum_{i=1}^{n} y_i
\end{cases}
$$

> [!TIP]
> **Simmetrik nuqtalar usuli:** Agar $x_i$ qiymatlar $0$ ga nisbatan simmetrik joylashgan bo'lsa (masalan, $x \in \{-2, -1, 0, 1, 2\}$), u holda barcha toq darajali yig'indilar $\sum x_i = 0$ va $\sum x_i^3 = 0$ ga aylanadi! Natijada sistema keskin soddalashib, $b$ bevosita ikkinchi tenglamadan ($b = \frac{\sum x_i y_i}{\sum x_i^2}$) topiladi.

---

## 2. Chiziqlashtiriladigan (Ichki chiziqli) nochiziqli modellar

Ko'pgina egri chiziqli funksiyalarni o'zgaruvchilarni almashtirish yoki logarifmlash orqali $Y^* = A + B X^*$ **chiziqli regressiya ko'rinishiga keltirish (linearizatsiya qilish)** mumkin:

| Model turi | Regressiya tenglamasi | Chiziqlashtirish almashtirishi ($Y^* = A + B X^*$) | Dastlabki parametrlarga qaytish |
| :--- | :---: | :---: | :---: |
| **Giperbolik** | $y = a + \frac{b}{x}$ | $Y^* = y, \quad X^* = \frac{1}{x}$ | $a = A, \quad b = B$ |
| **Darajali (Kobb-Duglas)** | $y = a \cdot x^b$ | $\ln y = \ln a + b \ln x$ ($Y^* = \ln y, X^* = \ln x$) | $a = e^A, \quad b = B$ |
| **Ko'rsatkichli (Eksponensial)** | $y = a \cdot b^x$ | $\ln y = \ln a + x \ln b$ ($Y^* = \ln y, X^* = x$) | $a = e^A, \quad b = e^B$ |
| **Eksponensial ($e$ asosli)** | $y = a \cdot e^{bx}$ | $\ln y = \ln a + b x$ ($Y^* = \ln y, X^* = x$) | $a = e^A, \quad b = B$ |
| **Logarifmik** | $y = a + b \ln x$ | $Y^* = y, \quad X^* = \ln x$ | $a = A, \quad b = B$ |

Yangi $(X_i^*, Y_i^*)$ ma'lumotlar uchun oddiy chiziqli EKKU formulalari qo'llaniladi:
$$
B = \frac{n \sum X_i^* Y_i^* - \sum X_i^* \sum Y_i^*}{n \sum (X_i^*)^2 - \left(\sum X_i^*\right)^2}, \qquad A = \overline{Y^*} - B \overline{X^*}
$$

---

## 3. Empirik korrelyatsion nisbat ($\eta_{yx}$) va Determinatsiya koeffitsiyenti ($R^2$)

Chiziqli korrelyatsiya koeffitsiyenti $r_{xy}$ faqat **to'g'ri chiziqli** bog'lanish kuchini o'lchaydi. Agar $Y = X^2$ ($x \in [-2, 2]$) funksional bog'lanish bo'lsa, simmetriya tufayli $r_{xy} = 0$ chiqadi, vaholanki $X$ va $Y$ orasida $100\%$ aniq kvadratik bog'lanish bor!

Har qanday (ham chiziqli, ham egri chiziqli) statistik bog'lanish zichligini o'lchash uchun **empirik korrelyatsion nisbat** ($\eta_{yx}$) va **determinatsiya koeffitsiyenti** ($R^2$) ishlatiladi.

### 3.1. Guruhlangan ma'lumotlar uchun korrelyatsion nisbat
Faraz qilaylik, $X$ ning har bir $x_i$ qiymatiga mos keluvchi $Y$ qiymatlari guruhining shartli o'rtachasi $\bar{y}_{x_i}$ ($n_i$ marta takrorlangan), umumiy o'rtacha esa $\bar{y}$ bo'lsin.
* **Umumiy dispersiya:**
$$
\sigma_y^2 = \frac{1}{n} \sum_{i} n_i (y_i - \bar{y})^2
$$
* **Guruhlararo (faktor) dispersiya** (shartli o'rtachalarning umumiy o'rtachadan chetlanishi):
$$
\delta_{yx}^2 = \frac{1}{n} \sum_{i} n_i (\bar{y}_{x_i} - \bar{y})^2
$$

> [!IMPORTANT]
> **$Y$ ning $X$ ga nisbatan empirik korrelyatsion nisbati** deb guruhlararo o'rtacha kvadratik chetlanishning umumiy o'rtacha kvadratik chetlanishga nisbatiga aytiladi:
> $$
> \eta_{yx} = \frac{\delta_{yx}}{\sigma_y} = \sqrt{\frac{\sum n_i (\bar{y}_{x_i} - \bar{y})^2}{\sum n_i (y_i - \bar{y})^2}}
> $$

### 3.2. Korrelyatsion nisbatning asosiy xossalari:
1. $0 \le \eta_{yx} \le 1$.
2. $\eta_{yx} \ge |r_{xy}|$ — korrelyatsion nisbat har doim chiziqli korrelyatsiya koeffitsiyentining modulidan katta yoki unga teng!
3. $\eta_{yx} = |r_{xy}|$ bo'lishi uchun barcha shartli o'rtachalar $\bar{y}_{x_i}$ aniq bitta to'g'ri chiziq ustida yotishi zarur va yetarli. Agar $\eta_{yx} > |r_{xy}|$ bo'lsa, bog'lanish **nochiziqli** xarakterga ega.
4. $\eta_{yx} = 1$ bo'lishi uchun $Y$ va $X$ orasida aniq egri chiziqli funksional bog'lanish bo'lishi zarur va yetarli.

### 3.3. Regressiya modelining determinatsiya koeffitsiyenti ($R^2$)
Har qanday tanlangan $\hat{y}_i = f(x_i)$ regressiya modeli uchun model sifatini **determinatsiya koeffitsiyenti** belgilaydi:
$$
R^2 = 1 - \frac{SS_{\text{qoldiq}}}{SS_{\text{umumiy}}} = 1 - \frac{\sum_{i=1}^{n} (y_i - \hat{y}_i)^2}{\sum_{i=1}^{n} (y_i - \bar{y})^2}, \qquad R = \sqrt{R^2} \text{ (korrelyatsiya indeksi)}
$$
$R^2$ — $Y$ o'zgaruvchanligining necha foizi tanlangan regressiya modeli orqali tushuntirilishini ko'rsatadi ($R^2 \to 1$ bo'lgani sari model tajriba nuqtalariga shunchalik yaxshi mos tushadi).

---

## 4. Namuna misollar (Qadamma-qadam yechimlar bilan)

### 1-misol. Parabolik regressiya tenglamasini tuzish
Quyidagi $n = 5$ ta kuzatuv nuqtasi uchun $\hat{y} = ax^2 + bx + c$ kvadratik regressiya tenglamasini tuzing:

| $x_i$ | $-2$ | $-1$ | $0$ | $1$ | $2$ |
| :--- | :---: | :---: | :---: | :---: | :---: |
| $y_i$ | $9$ | $3$ | $1$ | $3$ | $10$ |

**Yechish:**
1. $x_i$ qiymatlar $0$ ga nisbatan simmetrik bo'lgani uchun $\sum x_i = 0$ va $\sum x_i^3 = 0$.
2. Kerakli yig'indilarni hisoblaymiz:
   * $\sum y_i = 9 + 3 + 1 + 3 + 10 = 26$
   * $\sum x_i^2 = (-2)^2 + (-1)^2 + 0 + 1^2 + 2^2 = 4 + 1 + 0 + 1 + 4 = 10$
   * $\sum x_i^4 = (-2)^4 + (-1)^4 + 0 + 1^4 + 2^4 = 16 + 1 + 0 + 1 + 16 = 34$
   * $\sum x_i y_i = (-2)(9) + (-1)(3) + 0(1) + 1(3) + 2(10) = -18 - 3 + 0 + 3 + 20 = 2$
   * $\sum x_i^2 y_i = 4(9) + 1(3) + 0(1) + 1(3) + 4(10) = 36 + 3 + 0 + 3 + 40 = 82$

3. Normal tenglamalar sistemasini yozamiz:
$$
\begin{cases}
34a + 0\cdot b + 10c = 82 \\
0\cdot a + 10b + 0\cdot c = 2 \\
10a + 0\cdot b + 5c = 26
\end{cases}
$$
4. Ikkinchi tenglamadan darhol topamiz:
$$
10b = 2 \implies b = 0.2
$$
Birinchi va uchinchi tenglamalardan $a$ va $c$ ni topamiz (uchinchi tenglamani $2$ ga ko'paytirib, birinchisidan ayiramiz):
$$
\begin{cases}
34a + 10c = 82 \\
20a + 10c = 52
\end{cases}
\implies 14a = 30 \implies a = \frac{30}{14} = \frac{15}{7} \approx 2.143
$$
$$
c = \frac{26 - 10 \cdot (15/7)}{5} = \frac{32}{35} \approx 0.914
$$

**Natija:** Parabolik regressiya tenglamasi:
$$
\hat{y} = 2.143 x^2 + 0.2 x + 0.914
$$

---

### 2-misol. Ko'rsatkichli (eksponensial) regressiyani chiziqlashtirish
Bakteriyalar koloniyasi soni $y$ (ming dona) vaqt $x$ (soat) bo'yicha quyidagicha o'zgargan:
* $x_1 = 0 \implies y_1 = 2$
* $x_2 = 1 \implies y_2 = 2e \approx 5.436$
* $x_3 = 2 \implies y_3 = 2e^2 \approx 14.778$

$y = a e^{bx}$ ko'rsatkichli model parametrlarini toping.

**Yechish:**
1. Tenglikning ikkala tomonini natural logarifmlaymiz: $\ln y = \ln a + bx$.
   $Y^* = \ln y$ va $A = \ln a, B = b$ deb belgilasak:
   * $x_1 = 0 \implies Y_1^* = \ln 2$
   * $x_2 = 1 \implies Y_2^* = \ln(2e) = \ln 2 + 1$
   * $x_3 = 2 \implies Y_3^* = \ln(2e^2) = \ln 2 + 2$
2. Ko'rinib turibdiki, nuqtalar aniq $Y^* = \ln 2 + 1 \cdot x$ to'g'ri chiziqda yotadi, ya'ni $A = \ln 2$ va $B = 1$.
3. Dastlabki parametrlarga qaytamiz:
$$
a = e^A = e^{\ln 2} = 2, \qquad b = B = 1
$$
Demak, izlanayotgan model: $y = 2 e^x$.

---

## O'z-o'zini tekshirish savollari

1. Qanday hollarda chiziqli regressiya o'rniga nochiziqli regressiya modellaridan foydalanish zarur?
2. $y = a \cdot x^b$ darajali funksiyani chiziqli ko'rinishga keltirish uchun qanday almashtirish bajariladi?
3. Nima uchun $\eta_{yx} = 0.92$ va $r_{xy} = 0.15$ bo'lganda $X$ va $Y$ orasidagi bog'lanish kuchli, lekin aniq egri chiziqli deb xulosa qilinadi?
4. Korrelyatsion nisbat simmetrikmi (ya'ni $\eta_{yx} = \eta_{xy}$ har doim bajariladimi)? *(Javob: Yo'q, chiziqli korrelyatsiyadan farqli ravishda umumiy holda $\eta_{yx} \neq \eta_{xy}$).*

---

## Mustaqil yechish uchun masalalar

1. **1-masala:** Quyidagi jadval bo'yicha $y = a + \frac{b}{x}$ giperbolik regressiya tenglamasini tuzing:
   $x_1 = 1, y_1 = 7$; $x_2 = 2, y_2 = 4$; $x_3 = 4, y_3 = 2.5$.
2. **2-masala:** $n = 3$ ta nuqta: $(-1; 2)$, $(0; 1)$, $(1; 4)$ berilgan. $\hat{y} = ax^2 + bx + c$ parabolaning aniq tenglamasini toping.
3. **3-masala:** $Y$ o'zgaruvchining umumiy dispersiyasi $\sigma_y^2 = 25$, shartli o'rtachalarning guruhlararo dispersiyasi $\delta_{yx}^2 = 16$, chiziqli korrelyatsiya koeffitsiyenti esa $r_{xy} = -0.5$ ga teng.
   a) Empirik korrelyatsion nisbat $\eta_{yx}$ ni toping;
   b) Bog'lanish chiziqli yoki nochiziqli ekanligini asoslang.
4. **4-masala:** Regressiya modeli uchun $\sum (y_i - \bar{y})^2 = 200$ va qoldiqlar kvadratlari yig'indisi $\sum (y_i - \hat{y}_i)^2 = 18$ bo'lsa, determinatsiya koeffitsiyenti $R^2$ va korrelyatsiya indeksi $R$ ni hisoblang.

---

### Javoblar

1. $X^* = \frac{1}{x}$ almashtirishda nuqtalar: $(1; 7), (0.5; 4), (0.25; 2.5)$. Bu nuqtalar aniq $y = 1 + 6 X^*$ to'g'ri chiziqda yotadi. Javob: $y = 1 + \frac{6}{x}$.
2. Simmetrik nuqtalar ($x \in \{-1, 0, 1\}$): $c = 1$, $a + c = \frac{2+4}{2} = 3 \implies a = 2$, $b = \frac{4-2}{2} = 1$. Javob: $y = 2x^2 + x + 1$.
3. a) $\eta_{yx} = \sqrt{\frac{16}{25}} = 0.8$;
   b) $\eta_{yx} = 0.8 > |r_{xy}| = 0.5$ bo'lgani uchun bog'lanish kuchli va sezilarli darajada **nochiziqli** xarakterga ega.
4. $R^2 = 1 - \frac{18}{200} = 1 - 0.09 = 0.91$ ($91\%$ tushuntiriladi); $R = \sqrt{0.91} \approx 0.954$.
