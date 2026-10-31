---
title: "Ko'p o'lchovli tasodifiy miqdorlar, kovariatsion matritsa va shartli taqsimotlar"
description: "Birgalikdagi taqsimot qonuni, kovariatsiya, korrelyatsiya koeffitsiyenti, kovariatsion matritsa xossalari va shartli matematik kutilma."
module: "ehtimollar-nazariyasi"
order: 12
---

## 📌 Kirish va Amaliy Mohiyati

Zamonaviy ma'lumotlar tahlili (Data Science), mashinali o'rganish (Machine Learning) va moliyaviy ekonometrikada bitta tasodifiy jarayonni alohida tahlil qilish kamdan-kam yetarli bo'ladi. Masalan, qimmatli qog'ozlar portfelini shakllantirishda yuzlab aksiyalarning birgalikdagi tebranishi, tibbiy diagnostikada bemorning bir nechta ko'rsatkichlari (qon bosimi, glyukoza darajasi, puls) birgalikda o'rganiladi.

Bunday ko'p o'lchovli tizimlarni ifodalash uchun **tasodifiy vektorlar** $\mathbf{X} = (X_1, X_2, \dots, X_n)^T$ va ularning o'zaro chiziqli bog'liqligini o'lchovchi **kovariatsion matritsa** tushunchasi kiritiladi. Sun'iy intellektdagi asosiy komponentlar tahlili (PCA), chiziqli diskriminant tahlili (LDA) va ko'p o'lchovli Gauss jarayonlari bevosita kovariatsion matritsa algebrasi va shartli taqsimotlar qonuniga asoslanadi.

---

## 📐 Asosiy Nazariya, Qoidalar va Teoremalar

### 1. Birgalikdagi taqsimot va zichlik funksiyasi

Tasodifiy vektor $\mathbf{X} = (X, Y)^T$ uchun **birgalikdagi taqsimot funksiyasi**:
$$
F(x, y) = P(X \le x, Y \le y)
$$

Agar $F(x, y)$ uzluksiz differensiallanuvchi bo'lsa, **birgalikdagi ehtimollik zichlik funksiyasi**:
$$
f(x, y) = \frac{\partial^2 F(x, y)}{\partial x \partial y}
$$

> **Normallash sharti:**
> $$
> \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} f(x, y) \, dx \, dy = 1
> $$

#### Chekka (marginal) zichliklar:
Alohida komponentlarning taqsimotini topish uchun ikkinchi o'zgaruvchi bo'yicha integrallanadi:
$$
f_X(x) = \int_{-\infty}^{\infty} f(x, y) \, dy, \quad f_Y(y) = \int_{-\infty}^{\infty} f(x, y) \, dx
$$

#### Erklilik (mustaqillik) sharti:
$X$ va $Y$ tasodifiy miqdorlar faqat va faqat barcha $(x, y)$ uchun quyidagi tenglik bajarilgandagina **bog'liq bo'lmagan (erkli)** deyiladi:
$$
f(x, y) = f_X(x) \cdot f_Y(y)
$$

---

### 2. Shartli taqsimot va shartli matematik kutilma

Agar $f_X(x) > 0$ bo'lsa, $X = x$ shartidagi $Y$ ning **shartli zichligi**:
$$
f_{Y|X}(y|x) = \frac{f(x, y)}{f_X(x)}
$$

**Shartli matematik kutilma:**
$$
\mathbb{E}[Y | X = x] = \int_{-\infty}^{\infty} y \, f_{Y|X}(y|x) \, dy
$$

> **To'liq matematik kutilma teoremasi (Law of Total Expectation):**
> $$
> \mathbb{E}[\mathbb{E}[Y | X]] = \mathbb{E}[Y]
> $$

---

### 3. Kovariatsiya va Korrelyatsiya koeffitsiyenti

Ikki tasodifiy miqdor orasidagi o'zaro bog'liqlik darajasi **kovariatsiya** orqali ifodalanadi:
$$
\text{Cov}(X, Y) = \mathbb{E}[(X - \mathbb{E}[X])(Y - \mathbb{E}[Y])] = \mathbb{E}[XY] - \mathbb{E}[X]\mathbb{E}[Y]
$$

**Korrelyatsiya koeffitsiyenti:**
$$
\rho(X, Y) = \frac{\text{Cov}(X, Y)}{\sigma_X \sigma_Y} \quad (-1 \le \rho \le 1)
$$
- Agar $X$ va $Y$ erkli bo'lsa, $\text{Cov}(X, Y) = 0 \implies \rho = 0$ (korrelyatsiyasiz). Lekin teskarisi har doim ham to'g'ri emas!

---

### 4. Kovariatsion matritsa va uning xossalari

$n$-o'lchovli $\mathbf{X} = (X_1, X_2, \dots, X_n)^T$ tasodifiy vektor uchun matematik kutilmalar vektori $\boldsymbol{\mu} = \mathbb{E}[\mathbf{X}]$ va **kovariatsion matritsa**:
$$
\mathbf{\Sigma} = \mathbb{E}[(\mathbf{X} - \boldsymbol{\mu})(\mathbf{X} - \boldsymbol{\mu})^T] = \begin{pmatrix}
\text{Var}(X_1) & \text{Cov}(X_1, X_2) & \dots & \text{Cov}(X_1, X_n) \\
\text{Cov}(X_2, X_1) & \text{Var}(X_2) & \dots & \text{Cov}(X_2, X_n) \\
\vdots & \vdots & \ddots & \vdots \\
\text{Cov}(X_n, X_1) & \text{Cov}(X_n, X_2) & \dots & \text{Var}(X_n)
\end{pmatrix}
$$

> **Fundamental xossalar:**
> 1. **Simmetriklik:** $\mathbf{\Sigma}^T = \mathbf{\Sigma}$, chunki $\text{Cov}(X_i, X_j) = \text{Cov}(X_j, X_i)$.
> 2. **Musbat yarim aniqlanganlik:** Ixtiyoriy $\mathbf{c} \in \mathbb{R}^n$ uchun:
>    $$
>    \mathbf{c}^T \mathbf{\Sigma} \mathbf{c} = \text{Var}(\mathbf{c}^T \mathbf{X}) \ge 0
>    $$
> 3. **Chiziqli almashtirish:** Agar $\mathbf{Y} = \mathbf{A}\mathbf{X} + \mathbf{b}$ bo'lsa:
>    $$
>    \mathbb{E}[\mathbf{Y}] = \mathbf{A}\boldsymbol{\mu} + \mathbf{b}, \quad \mathbf{\Sigma}_Y = \mathbf{A} \mathbf{\Sigma}_X \mathbf{A}^T
>    $$

---

## 📝 Qadamma-qadam Yechilgan Amaliy Misollar

### 1-misol: Diskret ikki o'lchovli tasodifiy vektor tahlili

**Masala:** $(X, Y)$ diskret vektorining birgalikdagi taqsimot jadvali berilgan:

| $X \backslash Y$ | 1 | 2 |
| :---: | :---: | :---: |
| **0** | 0.1 | 0.3 |
| **1** | 0.2 | 0.4 |

Chekka taqsimotlar, $\mathbb{E}[X], \mathbb{E}[Y]$, $\text{Cov}(X, Y)$ va shartli kutilma $\mathbb{E}[Y | X = 1]$ ni hisoblang.

**Yechish:**
1. Chekka ehtimolliklarni satr va ustunlar bo'yicha yig'amiz:
   - $P(X = 0) = 0.1 + 0.3 = 0.4$, $P(X = 1) = 0.2 + 0.4 = 0.6$.
   - $P(Y = 1) = 0.1 + 0.2 = 0.3$, $P(Y = 2) = 0.3 + 0.4 = 0.7$.
2. Matematik kutilmalarni hisoblaymiz:
   $$
   \mathbb{E}[X] = 0(0.4) + 1(0.6) = 0.6, \quad \mathbb{E}[Y] = 1(0.3) + 2(0.7) = 1.7
   $$
3. Birgalikdagi ko'paytma kutilmasi $\mathbb{E}[XY]$:
   $$
   \mathbb{E}[XY] = (0 \cdot 1 \cdot 0.1) + (0 \cdot 2 \cdot 0.3) + (1 \cdot 1 \cdot 0.2) + (1 \cdot 2 \cdot 0.4) = 0 + 0 + 0.2 + 0.8 = 1.0
   $$
4. Kovariatsiyani topamiz:
   $$
   \text{Cov}(X, Y) = \mathbb{E}[XY] - \mathbb{E}[X]\mathbb{E}[Y] = 1.0 - (0.6)(1.7) = 1.0 - 1.02 = -0.02
   $$
5. Shartli taqsimot va shartli kutilma ($X = 1$ berilganda):
   - $P(Y = 1 | X = 1) = \frac{P(X=1, Y=1)}{P(X=1)} = \frac{0.2}{0.6} = \frac{1}{3}$
   - $P(Y = 2 | X = 1) = \frac{P(X=1, Y=2)}{P(X=1)} = \frac{0.4}{0.6} = \frac{2}{3}$
   $$
   \mathbb{E}[Y | X = 1] = 1 \cdot \frac{1}{3} + 2 \cdot \frac{2}{3} = \frac{5}{3} \approx 1.667
   $$

**Javob:** $\mathbb{E}[X]=0.6, \mathbb{E}[Y]=1.7, \text{Cov}(X, Y) = -0.02, \mathbb{E}[Y | X = 1] = \frac{5}{3}$.

---

### 2-misol: Uzluksiz birgalikdagi zichlik va korrelyatsiyani aniqlash

**Masala:** $(X, Y)$ vektorining zichlik funksiyasi $D = \{0 \le x \le 1, \; 0 \le y \le 1\}$ kvadratda quyidagicha berilgan:
$$
f(x, y) = c(x + 2y), \quad (x, y) \in D
$$
va $D$ dan tashqarida $f(x, y) = 0$. $c$ koeffitsiyentni, chekka zichliklarni va $\text{Cov}(X, Y)$ ni toping.

**Yechish:**
1. Normallash shartidan $c$ ni topamiz:
   $$
   \int_0^1 \int_0^1 c(x + 2y) \, dx \, dy = c \int_0^1 \left[ \frac{x^2}{2} + 2xy \right]_0^1 dy = c \int_0^1 \left(\frac{1}{2} + 2y\right) dy
   $$
   $$
   c \left[ \frac{1}{2}y + y^2 \right]_0^1 = c\left(\frac{1}{2} + 1\right) = \frac{3}{2}c = 1 \implies c = \frac{2}{3}
   $$
2. Chekka zichliklar:
   $$
   f_X(x) = \int_0^1 \frac{2}{3}(x + 2y) dy = \frac{2}{3}\left[ xy + y^2 \right]_0^1 = \frac{2}{3}(x + 1)
   $$
   $$
   f_Y(y) = \int_0^1 \frac{2}{3}(x + 2y) dx = \frac{2}{3}\left[ \frac{x^2}{2} + 2xy \right]_0^1 = \frac{2}{3}\left(\frac{1}{2} + 2y\right) = \frac{1}{3} + \frac{4}{3}y
   $$
3. Matematik kutilmalar:
   $$
   \mathbb{E}[X] = \int_0^1 x \cdot \frac{2}{3}(x + 1) dx = \frac{2}{3} \int_0^1 (x^2 + x) dx = \frac{2}{3}\left(\frac{1}{3} + \frac{1}{2}\right) = \frac{2}{3} \cdot \frac{5}{6} = \frac{5}{9}
   $$
   $$
   \mathbb{E}[Y] = \int_0^1 y \left(\frac{1}{3} + \frac{4}{3}y\right) dy = \left[ \frac{y^2}{6} + \frac{4y^3}{9} \right]_0^1 = \frac{1}{6} + \frac{4}{9} = \frac{11}{18}
   $$
4. Ko'paytmaning kutilmasi $\mathbb{E}[XY]$:
   $$
   \mathbb{E}[XY] = \frac{2}{3} \int_0^1 \int_0^1 (x^2 y + 2xy^2) dx dy = \frac{2}{3} \int_0^1 \left[ \frac{x^3}{3}y + x^2 y^2 \right]_0^1 dy = \frac{2}{3} \int_0^1 \left(\frac{1}{3}y + y^2\right) dy
   $$
   $$
   \frac{2}{3}\left[ \frac{y^2}{6} + \frac{y^3}{3} \right]_0^1 = \frac{2}{3}\left(\frac{1}{6} + \frac{1}{3}\right) = \frac{2}{3} \cdot \frac{1}{2} = \frac{1}{3}
   $$
5. Kovariatsiya:
   $$
   \text{Cov}(X, Y) = \frac{1}{3} - \left(\frac{5}{9}\right)\left(\frac{11}{18}\right) = \frac{1}{3} - \frac{55}{162} = \frac{54 - 55}{162} = -\frac{1}{162} \approx -0.00617
   $$

**Javob:** $c = \frac{2}{3}$, $\text{Cov}(X, Y) = -\frac{1}{162}$.

---

### 3-misol: Kovariatsion matritsa orqali chiziqli kombinatsiya dispersiyasini hisoblash

**Masala:** $\mathbf{X} = (X_1, X_2)^T$ vektorining kovariatsion matritsasi berilgan:
$$
\mathbf{\Sigma} = \begin{pmatrix} 4 & 2 \\ 2 & 9 \end{pmatrix}
$$
$Z = 3X_1 - 2X_2$ tasodifiy miqdorning dispersiyasi $\text{Var}(Z)$ ni toping.

**Yechish:**
1. Chiziqli kombinatsiyani vektor ko'rinishida yozamiz: $Z = \mathbf{a}^T \mathbf{X}$, bu yerda $\mathbf{a} = \begin{pmatrix} 3 \\ -2 \end{pmatrix}$.
2. Matritsa formulasi bo'yicha:
   $$
   \text{Var}(Z) = \mathbf{a}^T \mathbf{\Sigma} \mathbf{a} = \begin{pmatrix} 3 & -2 \end{pmatrix} \begin{pmatrix} 4 & 2 \\ 2 & 9 \end{pmatrix} \begin{pmatrix} 3 \\ -2 \end{pmatrix}
   $$
3. Ko'paytirishni bajaramiz:
   $$
   \begin{pmatrix} 3 & -2 \end{pmatrix} \begin{pmatrix} 4 & 2 \\ 2 & 9 \end{pmatrix} \begin{pmatrix} 3 \\ -2 \end{pmatrix} = \begin{pmatrix} 8 & -12 \end{pmatrix} \begin{pmatrix} 3 \\ -2 \end{pmatrix} = 24 + 24 = 48
   $$
4. Algebraik formula bilan tekshirish:
   $$
   \text{Var}(3X_1 - 2X_2) = 9\text{Var}(X_1) + 4\text{Var}(X_2) - 12\text{Cov}(X_1, X_2) = 36 + 36 - 24 = 48
   $$

**Javob:** $\text{Var}(Z) = 48$.

---

### 4-misol: To'liq matematik kutilma teoremasini qo'llash

**Masala:** $N$ — mijozlar soni bo'lib, puasson taqsimotiga ega: $\mathbb{E}[N] = 10, \text{Var}(N) = 10$. Har bir mijoz tasodifiy $X_i$ miqdorda pul sarflaydi, bunda $\mathbb{E}[X_i] = 50, \text{Var}(X_i) = 100$. Jami tushum $S = \sum_{i=1}^N X_i$ ning kutilayotgan qiymatini va dispersiyasini toping.

**Yechish:**
1. Shartli kutilma bo'yicha: $\mathbb{E}[S | N = n] = \mathbb{E}\left[\sum_{i=1}^n X_i\right] = n \cdot \mathbb{E}[X] = 50n$.
   Demak, $\mathbb{E}[S | N] = 50N$.
2. To'liq kutilma qonuni:
   $$
   \mathbb{E}[S] = \mathbb{E}[\mathbb{E}[S | N]] = \mathbb{E}[50N] = 50 \mathbb{E}[N] = 50 \times 10 = 500
   $$
3. To'liq dispersiya qonuni (Eve's law): $\text{Var}(S) = \mathbb{E}[\text{Var}(S|N)] + \text{Var}(\mathbb{E}[S|N])$.
   - $\text{Var}(S | N = n) = n \cdot \text{Var}(X) = 100n \implies \text{Var}(S | N) = 100N$.
   - $\mathbb{E}[\text{Var}(S|N)] = 100 \mathbb{E}[N] = 100 \times 10 = 1000$.
   - $\text{Var}(\mathbb{E}[S|N]) = \text{Var}(50N) = 2500 \text{Var}(N) = 2500 \times 10 = 25000$.
   $$
   \text{Var}(S) = 1000 + 25000 = 26000
   $$

**Javob:** $\mathbb{E}[S] = 500, \; \text{Var}(S) = 26000$.

---

## ⚠️ Talabalar Ko'p Yo'l Qo'yadigan Xatolar

> [!WARNING] Imtihonda ehtiyot bo'ling!
> 1. **$\text{Cov}(X, Y) = 0$ bo'lsa, miqdorlar doimo erkli bo'ladi deb hisoblash:** Bu xato! Korrelyatsiyaning nolga tengligi faqat **chiziqli** bog'liqlik yo'qligini bildiradi. Masalan, $X \sim U[-1, 1]$ va $Y = X^2$ bo'lsa, ularning kovariatsiyasi 0 ga teng, ammo ular qat'iy funksional bog'liqdir! Faqat ko'p o'lchovli normal taqsimotdagina kovariatsiyaning nol bo'lishi to'liq erklikni kafolatlaydi.
> 2. **Kovariatsion matritsaning diagonalini adashtirish:** Diagonalda faqat dispersiyalar yotadi: $\mathbf{\Sigma}_{ii} = \text{Var}(X_i) \ge 0$. Diagonal hadlar hech qachon manfiy bo'la olmaydi!
> 3. **Shartli taqsimotda maxrajni unutish:** $f_{Y|X}(y|x) = \frac{f(x, y)}{f_X(x)}$ ekanini unutmang. Faqat $f(x, y)$ ni o'zini integrallash ehtimolliklar yig'indisini 1 ga keltirmaydi.

---

## 🎯 Mustaqil Yechish Uchun Masalalar

1. $\text{Var}(X) = 16, \text{Var}(Y) = 25$ va $\rho(X, Y) = 0.6$ bo'lsa, $\text{Cov}(X, Y)$ va $\text{Var}(X - Y)$ ni toping.
   - *Yechish:* $\text{Cov}(X, Y) = 0.6 \times 4 \times 5 = 12$. $\text{Var}(X - Y) = 16 + 25 - 2(12) = 17$.
   - *Javob:* $\text{Cov}(X, Y) = 12, \; \text{Var}(X - Y) = 17$.

2. $\mathbf{X} = (X_1, X_2)^T$ uchun $\boldsymbol{\mu} = (1, 2)^T$ va $\mathbf{\Sigma} = \begin{pmatrix} 2 & 1 \\ 1 & 3 \end{pmatrix}$ berilgan. $Y = 2X_1 + 3X_2$ ning kutilmasi va dispersiyasini hisoblang.
   - *Yechish:* $\mathbb{E}[Y] = 2(1) + 3(2) = 8$. $\text{Var}(Y) = 4(2) + 9(3) + 2(2 \cdot 3 \cdot 1) = 8 + 27 + 12 = 47$.
   - *Javob:* $\mathbb{E}[Y] = 8, \; \text{Var}(Y) = 47$.

3. Agar $X$ va $Y$ bog'liq bo'lmagan tasodifiy miqdorlar bo'lsa, $\mathbb{E}[Y | X = x]$ nimaga teng bo'ladi?
   - *Yechish:* Bog'liq bo'lmaganda $f_{Y|X}(y|x) = f_Y(y) \implies \mathbb{E}[Y | X = x] = \mathbb{E}[Y]$.
   - *Javob:* Shartli kutilma oddiy kutilmaga teng: $\mathbb{E}[Y]$.

4. Kovariatsion matritsaning determinanti $\det(\mathbf{\Sigma})$ noldan kichik bo'lishi mumkinmi?
   - *Yechish:* Mumkin emas, chunki $\mathbf{\Sigma}$ musbat yarim aniqlangan matritsadir, demak uning barcha xos sonlari $\lambda_i \ge 0$, binobarin $\det(\mathbf{\Sigma}) = \prod \lambda_i \ge 0$.
   - *Javob:* Yo'q, har doim $\det(\mathbf{\Sigma}) \ge 0$.

---

## 💡 Xulosa va Imtihon Maslahatlari

- Kovariatsiya ikki miqdorning birgalikdagi yo'nalishini ko'rsatadi: agar biri oshganda ikkinchisi ham oshsa $\text{Cov} > 0$, biri oshganda ikkinchisi kamaysa $\text{Cov} < 0$.
- Chiziqli kombinatsiya $\mathbf{a}^T \mathbf{X}$ dispersiyasini hisoblashda matritsa formulasi $\mathbf{a}^T \mathbf{\Sigma} \mathbf{a}$ dan foydalanish xatolik ehtimolini keskin kamaytiradi.
- Shartli matematik kutilma $\mathbb{E}[Y|X]$ son emas, balki $X$ ga bog'liq bo'lgan **tasodifiy miqdordir** (regressiya funksiyasi).
