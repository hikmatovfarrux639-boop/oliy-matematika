---
title: "Chiziqli tenglamalar sistemalari (CHTS) va Kronekker-Kapelli teoremasi"
module: "chiziqli-algebra"
order: 8
description: "CHTS turlari, kengaytirilgan matritsa, yechim mavjudligi va soni haqidagi Kronekker-Kapelli teoremasining to'liq qonuniyati."
---

## Kirish: Tenglamalar sistemasini yechishdan oldin nimani bilish shart?

Talabalar ko'pincha tenglamalar sistemasini ko'rishi bilan darhol uni yechishga — noma'lumlarni topishga shoshiladilar.
Lekin agar berilgan sistemaning **umuman yechimi bo'lmasa-chi?** Yoki uning yechimlari **cheksiz ko'p** bo'lsa-chi?

Xuddi shifokor davolashdan oldin diagnoz qo'yganidek, matematik ham tenglamalar sistemasini yechishdan oldin uning **tabiatini aniqlashi** kerak. Buni amalga oshiruvchi buyuk qonun — **Kronekker-Kapelli teoremasi**dir!

---

## 1. Asosiy tushunchalar va belgilar

$m$ta tenglama va$n$ ta noma'lumdan iborat chiziqli tenglamalar sistemasi (CHTS):

$$
\begin{cases}
a_{11}x_1 + a_{12}x_2 + \dots + a_{1n}x_n = b_1 \\
a_{21}x_1 + a_{22}x_2 + \dots + a_{2n}x_n = b_2 \\
\dots\dots\dots\dots\dots\dots\dots\dots\dots\dots \\
a_{m1}x_1 + a_{m2}x_2 + \dots + a_{mn}x_n = b_m
\end{cases}
$$

- **Asosiy matritsa ($A$):** Koeffitsiyentlardan tuzilgan $m \times n$ matritsa;
- **Kengaytirilgan matritsa ($\bar{A}$yoki$(A \mid B)$):** Asosiy matritsaga ozod hadlar ustuni qo'shilgan $m \times (n+1)$ matritsa:

$$
\bar{A} = \begin{pmatrix}
a_{11} & a_{12} & \dots & a_{1n} & \bigm| & b_1 \\
a_{21} & a_{22} & \dots & a_{2n} & \bigm| & b_2 \\
\vdots & \vdots & \ddots & \vdots & \bigm| & \vdots \\
a_{m1} & a_{m2} & \dots & a_{mn} & \bigm| & b_m
\end{pmatrix}
$$

---

## 2. Kronekker-Kapelli teoremasi (Yechim mavjudligi mezoni)

> **Kronekker-Kapelli teoremasi:**
> Chiziqli algebraik tenglamalar sistemasi yechimga ega bo'lishi (birgalikda bo'lishi) uchun **asosiy matritsa rangi kengaytirilgan matritsa rangiga teng bo'lishi ZARUR VA YETARLIDIR**:
> 
> $$
> \operatorname{rang}(A) = \operatorname{rang}(\bar{A})
> $$

---

## 3. Sistemaning 3 xil taqdiri (Holatlar tahlili)

| Holat | Rangi va noma'lumlar soni | Xulosa | Yechimlar soni |
|---|---|---|---|
| **1-holat** | $\operatorname{rang}(A) < \operatorname{rang}(\bar{A})$ | Sistema **birgalikda emas** (Zid sistema) | **Yechim yo'q ($ hechtil$)** |
| **2-holat** | $\operatorname{rang}(A) = \operatorname{rang}(\bar{A}) = n$ | Sistema **birgalikda va aniqlangan** | **Yagona yechim** |
| **3-holat** | $\operatorname{rang}(A) = \operatorname{rang}(\bar{A}) = r < n$ | Sistema **birgalikda va noaniq** | **Cheksiz ko'p yechim** |

### 3-holatning nozik jihati:
Agar $r < n$ bo'lsa:
- $r$ ta noma'lum **asosiy (bazis)** noma'lum deb olinadi;
- $n - r$ ta noma'lum **erkin (ozod)** parametrlar ($C_1, C_2, \dots$) deb olinadi va umumiy yechim shu parametrlar orqali ifodalanadi.

---

## 4. Amaliy tahlil namunasi

**Masala:** Quyidagi sistemaning birgalikda ekanligini tekshiring:
$$
\begin{cases}
x_1 + 2x_2 - x_3 = 1 \\
2x_1 + 4x_2 - 2x_3 = 5
\end{cases}
$$

<details>
<summary><strong>Kronekker-Kapelli tekshiruvi</strong></summary>

Kengaytirilgan matritsani tuzamiz:
$$
\bar{A} = \begin{pmatrix} 1 & 2 & -1 & \bigm| & 1 \\ 2 & 4 & -2 & \bigm| & 5 \end{pmatrix}
$$
2-satrdan 1-satrning 2 barobarini ayiramiz ($S_2 - 2S_1$):
$$
\bar{A} \sim \begin{pmatrix} 1 & 2 & -1 & \bigm| & 1 \\ 0 & 0 & 0 & \bigm| & 3 \end{pmatrix}
$$

Ko'rib turibmizki:
- Asosiy matritsa $A$da nolmas satrlar soni:$\operatorname{rang}(A) = 1$.
- Kengaytirilgan matritsa $\bar{A}$da esa 2-satrda$3$soni bor, demak$\operatorname{rang}(\bar{A}) = 2$.

$$
\operatorname{rang}(A) = 1 \neq 2 = \operatorname{rang}(\bar{A})
$$
Qarang, 2-satr aslida $0 \cdot x_1 + 0 \cdot x_2 + 0 \cdot x_3 = 3$, ya'ni $0 = 3$ degan mutlaqo mantiqsiz ziddiyatga olib keldi!

**Xulosa:** Sistema birgalikda emas, yechimga ega emas!

</details>