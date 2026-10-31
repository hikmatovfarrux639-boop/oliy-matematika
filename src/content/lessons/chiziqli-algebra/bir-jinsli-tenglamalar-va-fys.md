---
title: "Bir jinsli tenglamalar sistemasi va fundamental yechimlar sistemasi (FYS)"
module: "chiziqli-algebra"
order: 13
description: "AX = 0 sistemasi, trivial yechim, nolmas yechimlar mavjudlik sharti, FYS vektorlari bazisi, yechimlar fazosi geometriyasi va umumiy yechim."
---

## Kirish: Ozod hadlari nolga teng bo'lgan sistemalar ($A X = \mathbf{0}$)

Barcha ozod hadlari nolga teng bo'lgan chiziqli tenglamalar sistemasiga **bir jinsli sistema** deyiladi:

$$
\begin{cases}
a_{11} x_1 + a_{12} x_2 + \dots + a_{1n} x_n = 0 \\
a_{21} x_1 + a_{22} x_2 + \dots + a_{2n} x_n = 0 \\
\dots\dots\dots\dots\dots\dots\dots\dots\dots\dots \\
a_{m1} x_1 + a_{m2} x_2 + \dots + a_{mn} x_n = 0
\end{cases}
\quad \iff \quad A \cdot X = \mathbf{0}
$$

Bir jinsli sistemalarning o'ta ajoyib va muhim bir xususiyati bor:
> [!NOTE] Doimiy birgaliklik qoidasi
> Bir jinsli sistema **HAR DOIM BIRGALIKDADIR (yechimga ega)**!
> Chunki barcha noma'lumlarga $0$ qo'ysak ($x_1 = 0, x_2 = 0, \dots, x_n = 0$), har bir tenglik $0 = 0$ bo'lib avtomatik bajariladi. Ushbu nolli yechimga **trivial (nolli) yechim** deyiladi.

Biroq bizni qiziqtirgan asosiy savol: **Sistemada noldan boshqa (nolmas, trivial bo'lmagan) yechimlar ham bormi?**

---

## 1. Nolmas yechimlar mavjud bo'lish sharti

> [!NOTE] Nolmas yechimlar teoremasi
> $n$ ta noma'lumli bir jinsli sistema **nolmas (trivial bo'lmagan)** yechimlarga ega bo'lishi uchun uning asosiy matritsasi rangi noma'lumlar sonidan kichik bo'lishi **zarur va yetarlidir**:
> $$
> \mathbf{\operatorname{rank}(A) < n}
> $$

### Xususiy holat (Kvadrat sistema, $m = n$):
Agar tenglamalar soni noma'lumlar soniga teng bo'lsa:
- Agar $\det A \neq 0$ bo'lsa: sistema faqat bitta **trivial yechimga** ($x_1 = x_2 = \dots = x_n = 0$) ega bo'ladi (Kramer qoidasiga ko'ra: $x_j = \frac{0}{\Delta} = 0$).
- Agar $\det A = 0$ bo'lsa: sistema **cheksiz ko'p nolmas yechimlarga** ega bo'ladi!

---

## 2. Yechimlar fazosi va Fundamental yechimlar sistemasi (FYS)

Bir jinsli sistemaning barcha yechimlari to'plami ajoyib xossaga ega:
1. Agar $X_1$ va $X_2$ sistemaning yechimi bo'lsa, ularning yig'indisi $X_1 + X_2$ ham yechim bo'ladi: $A(X_1 + X_2) = AX_1 + AX_2 = \mathbf{0} + \mathbf{0} = \mathbf{0}$.
2. Agar $X$ yechim bo'lsa, uni ixtiyoriy $c$ songa ko'paytmasi $c X$ ham yechim bo'ladi: $A(cX) = c(AX) = \mathbf{0}$.

Bu degani, **bir jinsli sistemaning barcha yechimlari to'plami $\mathbb{R}^n$ fazoning quyi fazosini (vektor fazosini)** tashkil qiladi!

### FYS ta'rifi:
Ushbu yechimlar fazosining o'lchami har doim quyidagi formula bilan aniqlanadi:
$$
k = n - r = n - \operatorname{rank}(A)
$$

> [!NOTE] Fundamental Yechimlar Sistemasi (FYS)
> Yechimlar fazosining bazisini tashkil etuvchi $k = n - r$ ta chiziqli erkli yechimlar to'plamiga **Fundamental Yechimlar Sistemasi (FYS)** deyiladi:
> $$
> \{E_1, E_2, \dots, E_{n-r}\}
> $$

---

## 3. Umumiy yechim formulasi va bir jinsli bo'lmagan sistemalar bilan bog'liqlik

Bir jinsli sistemaning **har qanday umumiy yechimi** FYS vektorlarining chiziqli kombinatsiyasi ko'rinishida yoziladi:

$$
X_{\text{bir jinsli}} = C_1 E_1 + C_2 E_2 + \dots + C_{n-r} E_{n-r}
$$
bu yerda $C_1, C_2, \dots, C_{n-r} \in \mathbb{R}$ — ixtiyoriy haqiqiy sonlar (erkin parametrlar).

> [!TIP] Differensial tenglamalar bilan chuqur bog'liqlik!
> Oliy matematikaning barcha bo'limlari bir-biri bilan uzviy bog'langan. Bir jinsli bo'lmagan $AX = B$ sistemaning umumiy yechimi har doim:
> $$
> X_{\text{umumiy}} = X_{\text{xususiy bir jinsli bo'lmagan}} + X_{\text{umumiy bir jinsli}}
> $$
> ko'rinishida bo'ladi! Xuddi shu qonuniyat chiziqli differensial tenglamalarda ham takrorlanadi: $y = y_{\text{xus}} + y_{\text{oj}}$.

---

## 4. Qadamma-qadam to'liq yechilgan amaliy misol

**Masala:** Quyidagi bir jinsli tenglamalar sistemasining rangi, FYS vektorlari va umumiy yechimini toping:
$$
\begin{cases}
x_1 + 2x_2 + 4x_3 - 3x_4 = 0 \\
3x_1 + 5x_2 + 6x_3 - 4x_4 = 0 \\
4x_1 + 5x_2 - 2x_3 + 3x_4 = 0
\end{cases}
$$

#### Yechish:

**1-qadam. Matritsani Gauss usuli bilan pog'onasimon ko'rinishga keltiramiz:**
Ozod hadlar $0$ bo'lgani uchun faqat asosiy $A$ matritsani yozish kifoya:
$$
A = \begin{pmatrix}
1 & 2 & 4 & -3 \\
3 & 5 & 6 & -4 \\
4 & 5 & -2 & 3
\end{pmatrix}
$$

1-satr yordamida 1-ustunni tozalaymiz:
- $S_2 - 3S_1 \to S_2$: $(0, \; 5 - 6 = -1, \; 6 - 12 = -6, \; -4 - (-9) = 5)$
- $S_3 - 4S_1 \to S_3$: $(0, \; 5 - 8 = -3, \; -2 - 16 = -18, \; 3 - (-12) = 15)$

$$
\sim \begin{pmatrix}
1 & 2 & 4 & -3 \\
0 & -1 & -6 & 5 \\
0 & -3 & -18 & 15
\end{pmatrix}
$$

3-satrdan 2-satrning 3 barobarini ayiramiz ($S_3 - 3S_2 \to S_3$):
$$
-3 - (-3) = 0; \quad -18 - (-18) = 0; \quad 15 - 15 = 0
$$

Matritsa:
$$
\sim \begin{pmatrix}
\mathbf{1} & 2 & 4 & -3 \\
0 & \mathbf{-1} & -6 & 5 \\
0 & 0 & 0 & 0
\end{pmatrix}
$$

Nolli 3-satr o'chib ketadi. Noldan farqli satrlar soni $r = \operatorname{rank}(A) = 2$.
Noma'lumlar soni $n = 4$.

FYS vektorlari soni:
$$
k = n - r = 4 - 2 = 2 \text{ ta vektor!}
$$

---

**2-qadam. Bazis va erkin o'zgaruvchilarni ajratamiz:**
- Pog'ona boshidagi $x_1, x_2$ — **bazis o'zgaruvchilar**;
- $x_3, x_4$ — **erkin o'zgaruvchilar**.

Tenglamalarni yozamiz:
1. 2-tenglamadan:
   $$
   -x_2 - 6x_3 + 5x_4 = 0 \implies \mathbf{x_2 = -6x_3 + 5x_4}
   $$
2. 1-tenglamaga qo'yamiz:
   $$
   x_1 + 2(-6x_3 + 5x_4) + 4x_3 - 3x_4 = 0
   $$
   $$
   x_1 - 12x_3 + 10x_4 + 4x_3 - 3x_4 = 0 \implies x_1 - 8x_3 + 7x_4 = 0 \implies \mathbf{x_1 = 8x_3 - 7x_4}
   $$

---

**3-qadam. FYS bazis vektorlarini hisoblaymiz:**
Erkin o'zgaruvchilar juftligiga $(x_3, x_4)$ navbat bilan birlik matritsaning qatorlarini beramiz:

1. **$x_3 = 1, \; x_4 = 0$ deb olamiz:**
   $$x_1 = 8(1) - 7(0) = 8$$
   $$x_2 = -6(1) + 5(0) = -6$$
   Birinchi fundamental yechim vektori:
   $$
   E_1 = \begin{pmatrix} 8 \\ -6 \\ 1 \\ 0 \end{pmatrix}
   $$

2. **$x_3 = 0, \; x_4 = 1$ deb olamiz:**
   $$x_1 = 8(0) - 7(1) = -7$$
   $$x_2 = -6(0) + 5(1) = 5$$
   Ikkinchi fundamental yechim vektori:
   $$
   E_2 = \begin{pmatrix} -7 \\ 5 \\ 0 \\ 1 \end{pmatrix}
   $$

---

**4-qadam. Umumiy yechimni yozamiz:**
Sistemaning ixtiyoriy yechimi ushbu FYS vektorlarining chiziqli kombinatsiyasidir:
$$
X = C_1 E_1 + C_2 E_2 = C_1 \begin{pmatrix} 8 \\ -6 \\ 1 \\ 0 \end{pmatrix} + C_2 \begin{pmatrix} -7 \\ 5 \\ 0 \\ 1 \end{pmatrix}, \quad \forall C_1, C_2 \in \mathbb{R}
$$

**Javob:**
FYS vektorlari: $E_1 = (8, -6, 1, 0)^T, \; E_2 = (-7, 5, 0, 1)^T$.
Umumiy yechim: $X = C_1 E_1 + C_2 E_2$.

---

## 5. Talabalar yo'l qo'yadigan tuzoqlar

> [!WARNING] Imtihonda ehtiyot bo'ling!
> 1. **"Sistema yechimga ega emas" deb javob berish:** Bir jinsli sistema **HECH QACHON birgalikda bo'lmasligi mumkin emas**! U har doim kamida bitta trivial nolli yechimga ega bo'ladi.
> 2. **Erkin o'zgaruvchilarga qiymat berishda chiziqli bog'liq qiymatlar berish:** Agar $E_1$ uchun $(1, 0)$ va $E_2$ uchun $(2, 0)$ bersangiz, vektorlar chiziqli bog'liq bo'lib qoladi va ular bazis (FYS) bo'la olmaydi. Doimo birlik matritsa qatorlarini tanlang: $(1, 0)$ va $(0, 1)$!
> 3. **Ishoralarni almashtirishda xatolar:** Tenglamalardan bazis noma'lum $x_2$ ni o'ng tomonga o'tkazayotganda ishoralar o'zgarishini e'tibordan chetda qoldirish.

---

## 6. Mustaqil yechish uchun amaliy mashqlar

Quyidagi bir jinsli sistemalarning FYS va umumiy yechimini toping:

1. $\begin{cases} 2x_1 + x_2 - x_3 = 0 \\ 4x_1 + 2x_2 - 2x_3 = 0 \end{cases}$
   - *Javob:* $\operatorname{rank} = 1, n = 3 \implies k = 2$ ta FYS. $x_3 = 2x_1 + x_2 \implies E_1 = (1, 0, 2)^T, \; E_2 = (0, 1, 1)^T \implies X = C_1 E_1 + C_2 E_2$.

2. $\begin{cases} 3x_1 + 2x_2 + x_3 = 0 \\ 2x_1 + 5x_2 + 3x_3 = 0 \\ 3x_1 + 4x_2 + 2x_3 = 0 \end{cases}$
   - *Javob:* $\det A = -3 \neq 0 \implies \operatorname{rank} = 3 = n \implies$ Faqat trivial yechim: $x_1 = x_2 = x_3 = 0$. FYS mavjud emas (o'lchami 0).
