---
title: "Ikki o'lchovli tasodifiy miqdorlar, kovariatsiya va korrelyatsiya"
module: "ehtimollar-nazariyasi"
order: 9
description: "Birgalikdagi va marginal taqsimotlar, ikki o'lchovli zichlik funksiyasi, tasodifiy miqdorlarning bog'liqligi, kovariatsiya va Pirson korrelyatsiya koeffitsiyenti."
---

## Kirish: Juftlikdagi tasodiflar va bog'liqliklar

Biz shu paytgacha faqat bitta tasodifiy miqdorni ($X$) o'rganib keldik. Ammo koinotdagi barcha hodisalar bir-biri bilan o'zaro aloqada:
- Talabaning universitetga kirish bali ($X$) va uning kelajakdagi maoshi ($Y$);
- Avtomobilning tezligi ($X$) va uning tormozlanish masofasi ($Y$);
- Havoning namligi ($X$) va yomg'ir yog'ishi ehtimoli ($Y$).

Bunday bog'liq juftliklar **ikki o'lchovli tasodifiy miqdor (tasodifiy vektor)** $(X, Y)$ deb ataladi. Ular orasidagi chiziqli bog'liqlik darajasini esa **kovariatsiya** va **korrelyatsiya koeffitsiyenti** o'lchab beradi.

---

## 1. Diskret ikki o'lchovli tasodifiy miqdorlar

$(X, Y)$ diskret tasodifiy miqdorning birgalikdagi taqsimoti **jadval** shaklida beriladi:

| $X \backslash Y$|$y_1$|$y_2$|$\dots$|$y_m$ | **$P(X = x_i)$** |
| :---: | :---: | :---: | :---: | :---: | :---: |
| $x_1$|$p_{11}$|$p_{12}$|$\dots$|$p_{1m}$|$p_{1\cdot}$ |
| $x_2$|$p_{21}$|$p_{22}$|$\dots$|$p_{2m}$|$p_{2\cdot}$ |
| $\dots$|$\dots$|$\dots$|$\dots$|$\dots$|$\dots$ |
| $x_n$|$p_{n1}$|$p_{n2}$|$\dots$|$p_{nm}$|$p_{n\cdot}$ |
| **$P(Y = y_j)$** | $p_{\cdot 1}$|$p_{\cdot 2}$|$\dots$|$p_{\cdot m}$ | **$\sum = 1$** |

- **Normalash sharti:** Barcha katakchalardagi ehtimollar yig'indisi $1$ga teng:$\sum_{i=1}^n \sum_{j=1}^m p_{ij} = 1$.
- **Chetki (marginal) taqsimotlar:**
  - $X$ning qator bo'yicha ehtimoli:$p_{i\cdot} = \sum_{j=1}^m p_{ij}$;
  - $Y$ning ustun bo'yicha ehtimoli:$p_{\cdot j} = \sum_{i=1}^n p_{ij}$.
- **Mustaqillik sharti:** $X$va$Y$erkli (mustaqil) bo'lishi uchun barcha katakchalarda$p_{ij} = p_{i\cdot} \cdot p_{\cdot j}$ bajarilishi shart.

---

## 2. Uzluksiz ikki o'lchovli miqdorlar

Uzluksiz $(X, Y)$tasodifiy vektor uchun **birgalikdagi ehtimollik zichligi**$f(x, y)$ kiritiladi:
- $f(x, y) \ge 0$;
- **Normalash sharti:** $\int_{-\infty}^{+\infty} \int_{-\infty}^{+\infty} f(x, y) dx dy = 1$;
- **Chetki zichliklar:**
  
$$
  f_X(x) = \int_{-\infty}^{+\infty} f(x, y) dy, \qquad f_Y(y) = \int_{-\infty}^{+\infty} f(x, y) dx
  
$$
- Agar barcha $(x, y)$larda$f(x, y) = f_X(x) \cdot f_Y(y)$bo'lsa,$X$va$Y$ **mustaqil** deyiladi.

---

## 3. Kovariatsiya va Korrelyatsiya koeffitsiyenti

Tasodifiy miqdorlarning bog'liqlik darajasini o'lchash uchun kovariatsiya tushunchasi xizmat qiladi:

### Kovariatsiya $\operatorname{cov}(X, Y)$:
$$
\operatorname{cov}(X, Y) = M\Big[\big(X - M(X)\big)\big(Y - M(Y)\big)\Big]
$$
Hisoblash uchun qulay amaliy formula:
$$
\operatorname{cov}(X, Y) = M(XY) - M(X) \cdot M(Y)
$$
- Agar $X$va$Y$mustaqil bo'lsa,$M(XY) = M(X)M(Y)$bo'lib,$\operatorname{cov}(X, Y) = 0$ bo'ladi.

### Pirson korrelyatsiya koeffitsiyenti $r_{xy}$:
Kovariatsiya o'lchov birliklariga (masalan, metr $\times$ kg) bog'liq bo'lgani sababli, uni o'lchovsiz ko'rinishga keltirish uchun standart og'ishlarga bo'linadi:
$$
r_{xy} = \frac{\operatorname{cov}(X, Y)}{\sigma_X \cdot \sigma_Y} = \frac{M(XY) - M(X)M(Y)}{\sqrt{D(X) \cdot D(Y)}}
$$

```
               Korrelyatsiya koeffitsiyenti shkalasi
      -1                    0                    +1
   <---+--------------------+--------------------+--->
  Qat'iy manfiy         Chiziqli             Qat'iy musbat
 chiziqli bog'liq    bog'liqlik yo'q        chiziqli bog'liq
    (Y = -kX)                              (Y = +kX)
```

### Korrelyatsiya koeffitsiyentining asosiy xossalari:
1. **Chegaralanganlik:** Har doim $-1 \le r_{xy} \le 1$.
2. **Qat'iy chiziqli bog'liqlik:** $|r_{xy}| = 1$faqat va faqat$Y = aX + b$ chiziqli funksional bog'liqlik bo'lgandagina o'rinli ($a > 0$da$r = +1$, $a < 0$da$r = -1$).
3. **Korrelyatsiyalanmaganlik:** Agar $r_{xy} = 0$ bo'lsa, miqdorlar **korrelyatsiyalanmagan** deyiladi.
> [!IMPORTANT] Eslab qoling
> Mustaqillikdan doim korrelyatsiyalanmaganlik kelib chiqadi ($r = 0$). Ammo **teskarisi har doim ham to'g'ri emas!** Ya'ni $r = 0$bo'lsa ham miqdorlar o'rtasida nochiziqli (masalan, kvadratik$Y = X^2$) bog'liqlik bo'lishi mumkin.

---

## 4. Masalalarni 2 xil usulda tahlil qilish

### Masala:
$(X, Y)$ ikki o'lchovli diskret tasodifiy miqdorning taqsimot jadvali berilgan:

| $X \backslash Y$|$1$|$2$ |
| :---: | :---: | :---: |
| **$0$** | $0.2$|$0.3$ |
| **$1$** | $0.4$|$0.1$ |

1) Chetki taqsimotlarni toping;
2) Kovariatsiya $\operatorname{cov}(X, Y)$va korrelyatsiya koeffitsiyenti$r_{xy}$ ni hisoblang.

#### 1-qadam: Chetki taqsimotlar va kutilmalarni topish
- $X$ ning qator bo'yicha ehtimollari:
  - $P(X = 0) = 0.2 + 0.3 = 0.5$-$P(X = 1) = 0.4 + 0.1 = 0.5$ $M(X) = 0 \cdot 0.5 + 1 \cdot 0.5 = 0.5$.
  $M(X^2) = 0^2 \cdot 0.5 + 1^2 \cdot 0.5 = 0.5$.
  $D(X) = M(X^2) - (M(X))^2 = 0.5 - 0.25 = 0.25 \implies \sigma_X = \sqrt{0.25} = 0.5$.

- $Y$ ning ustun bo'yicha ehtimollari:
  - $P(Y = 1) = 0.2 + 0.4 = 0.6$-$P(Y = 2) = 0.3 + 0.1 = 0.4$ $M(Y) = 1 \cdot 0.6 + 2 \cdot 0.4 = 0.6 + 0.8 = 1.4$.
  $M(Y^2) = 1^2 \cdot 0.6 + 2^2 \cdot 0.4 = 0.6 + 1.6 = 2.2$.
  $D(Y) = M(Y^2) - (M(Y))^2 = 2.2 - 1.4^2 = 2.2 - 1.96 = 0.24 \implies \sigma_Y = \sqrt{0.24} \approx 0.4899$.

---

#### 1-usul: $M(XY) - M(X)M(Y)$ amaliy formulasi
Ko'paytma $X \cdot Y$ ning matematik kutilmasini hisoblaymiz:
$$
M(XY) = \sum x_i y_j p_{ij} = (0 \cdot 1)(0.2) + (0 \cdot 2)(0.3) + (1 \cdot 1)(0.4) + (1 \cdot 2)(0.1)
$$
$$
M(XY) = 0 + 0 + 0.4 + 0.2 = 0.6
$$
Kovariatsiya:
$$
\operatorname{cov}(X, Y) = M(XY) - M(X)M(Y) = 0.6 - (0.5 \times 1.4) = 0.6 - 0.7 = -0.1
$$
Korrelyatsiya koeffitsiyenti:
$$
r_{xy} = \frac{\operatorname{cov}(X, Y)}{\sigma_X \sigma_Y} = \frac{-0.1}{0.5 \times \sqrt{0.24}} = \frac{-0.1}{0.5 \times 0.4899} = \frac{-0.1}{0.24495} \approx -0.408
$$

---

#### 2-usul: Ta'rif bo'yicha chetlanishlar ko'paytmasi
$\operatorname{cov}(X, Y) = \sum (x_i - \bar{x})(y_j - \bar{y}) p_{ij}$:
$\bar{x} = 0.5, \bar{y} = 1.4$.
- $(0 - 0.5)(1 - 1.4) \cdot 0.2 = (-0.5)(-0.4) \cdot 0.2 = 0.2 \cdot 0.2 = 0.04$-$(0 - 0.5)(2 - 1.4) \cdot 0.3 = (-0.5)(0.6) \cdot 0.3 = -0.3 \cdot 0.3 = -0.09$-$(1 - 0.5)(1 - 1.4) \cdot 0.4 = (0.5)(-0.4) \cdot 0.4 = -0.2 \cdot 0.4 = -0.08$-$(1 - 0.5)(2 - 1.4) \cdot 0.1 = (0.5)(0.6) \cdot 0.1 = 0.3 \cdot 0.1 = 0.03$
Yig'indisi:
$$
\operatorname{cov}(X, Y) = 0.04 - 0.09 - 0.08 + 0.03 = -0.10
$$
Ikkala usul ham aynan $\operatorname{cov}(X, Y) = -0.1$natijasini berdi!$r_{xy} \approx -0.408$manfiy bo'lgani sababli,$X$va$Y$ o'rtasida o'rtacha kuchga ega **teskari chiziqli bog'liqlik** mavjud.

---

> [!WARNING] Imtihondagi tuzoqlar va ko'p uchraydigan xatoliklar
> 1. **Mustaqillikni bitta katakcha bilan tekshirish:** $X$va$Y$ning mustaqilligini tekshirish uchun bitta katakchada$p_{ij} = p_{i\cdot} p_{\cdot j}$ bajarilishi yetarli emas; u **barcha kataklar uchun istisnosiz** bajarilishi shart! Agar hatto bitta katakda tenglik buzilsa, miqdorlar bog'liq bo'ladi.
> 2. **Korrelyatsiya koeffitsiyenti modulining 1 dan oshib ketishi:** Agar hisob-kitobingizda $|r_{xy}| > 1$(masalan,$1.15$yoki$-1.4$) chiqsa, qayerdadir arifmetik xato qilgansiz. $r_{xy}$doim$[-1; 1]$ oraliqda yotishi shart.

---

## Mustaqil yechish uchun mashqlar

### 1-mashq
Agar $X$va$Y$mustaqil tasodifiy miqdorlar bo'lsa, ularning kovariatsiyasi$\operatorname{cov}(X, Y)$va korrelyatsiya koeffitsiyenti$r_{xy}$ nimaga teng?

<details>
<summary>👉 Yechimni tekshirish</summary>

**Yechish:**
Mustaqil miqdorlar uchun $M(XY) = M(X)M(Y)$.
Shuning uchun:
$$
\operatorname{cov}(X, Y) = M(XY) - M(X)M(Y) = 0
$$
$$
r_{xy} = \frac{0}{\sigma_X \sigma_Y} = 0
$$

**Javob:** $\operatorname{cov}(X, Y) = 0, \quad r_{xy} = 0$.

</details>

### 2-mashq
Agar $Y = 3 - 2X$bo'lsa,$X$va$Y$o'rtasidagi korrelyatsiya koeffitsiyenti$r_{xy}$ nimaga teng?

<details>
<summary>👉 Yechimni tekshirish</summary>

**Yechish:**
$Y = aX + b$chiziqli funksional bog'liqlikda$a = -2 < 0$.
Bunday holda korrelyatsiya koeffitsiyenti qat'iy ravishda $-1$ ga teng bo'ladi.

**Javob:** $r_{xy} = -1$.

</details>
