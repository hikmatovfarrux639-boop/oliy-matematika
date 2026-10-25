---
title: "Kramer qoidasi: Determinantlar yordamida tenglamalar sistemasini yechish"
module: "chiziqli-algebra"
order: 9
description: "Kramer usuli qachon qo'llanadi? Asosiy va yordamchi determinantlar, Δ=0 holati tahlili, geometrik mohiyati va 3 noma'lumli ChTS misoli."
---

## Kirish: Shveysariyalik Gabriel Kramerning buyuk kashfiyoti

1750-yilda Gabriel Kramer tenglamalar sistemasini har xil noqulay almashtirishlarsiz, **to'g'ridan-to'g'ri formulalar orqali** yechishning ajoyib usulini kashf qildi.

Bu usul talabalar orasida eng mashhur va eng sevimlisidir! Chunki bu yerda murakkab almashtirishlar qilish shart emas — faqatgina bir nechta determinantlarni hisoblasangiz bas!

---

## 1. Kramer qoidasi qachon ishlaydi?

Kramer qoidasini qo'llash uchun ikkita majburiy shart bajarilishi kerak:
1. **Tenglamalar soni noma'lumlar soniga teng bo'lishi kerak ($n \times n$ kvadrat sistema)**;
2. **Sistemaning asosiy determinanti noldan farqli bo'lishi kerak ($\Delta \neq 0$)**.

---

## 2. Kramer formulalari

Agar $\Delta = \det A \neq 0$ bo'lsa, sistemaning yagona yechimi quyidagi formulalar bilan topiladi:

$$
x_1 = \frac{\Delta_1}{\Delta}, \quad x_2 = \frac{\Delta_2}{\Delta}, \quad \dots, \quad x_n = \frac{\Delta_n}{\Delta}
$$

bu yerda:
- **$\Delta$ (Asosiy determinant):** Noma'lumlar oldidagi koeffitsiyentlardan tuzilgan determinant;
- **$\Delta_j$(Yordamchi determinant):** Asosiy determinantdagi$j$-ustun o'rniga **ozod hadlar ustuni ($B$)** qo'yilgan determinant.

---

## 3. Agar $\Delta = 0$ bo'lsa nima bo'ladi?

> [!CAUTION]
> Agar asosiy determinant $\Delta = 0$bo'lsa, Kramer formulasidagi maxraj$0$ ga aylanadi. Nolga bo'lish mumkin bo'lmagani uchun:
> 1. Agar barcha $\Delta_1 = \Delta_2 = \dots = \Delta_n = 0$ bo'lsa — sistema **cheksiz ko'p yechimga ega** bo'lishi mumkin (yoki yechimga ega emas).
> 2. Agar yordamchi determinantlardan kamida bittasi noldan farqli bo'lsa (masalan, $\Delta_1 \neq 0$) — sistema **yechimga ega emas**!
> Bunday vaziyatda darhol **Gauss usuli**ga o'tish shart!

---

## 4. 3 noma'lumli ChTS ni Kramer usulida to'liq yechish (Klassik namuna)

**Masala:** Tenglamalar sistemasini yeching:
$$
\begin{cases}
2x - y + z = 2 \\
3x + 2y + 2z = -2 \\
x - 2y + z = 1
\end{cases}
$$

<details>
<summary><strong>Qadamma-qadam to'liq hisoblash</strong></summary>

### 1-qadam: Asosiy determinant $\Delta$ ni hisoblaymiz:
$$
\Delta = \begin{vmatrix}
2 & -1 & 1 \\
3 & 2 & 2 \\
1 & -2 & 1
\end{vmatrix}
$$
Sarryus qoidasi bo'yicha:
$$
\Delta = [2 \cdot 2 \cdot 1 + (-1) \cdot 2 \cdot 1 + 3 \cdot (-2) \cdot 1] - [1 \cdot 2 \cdot 1 + (-1) \cdot 3 \cdot 1 + (-2) \cdot 2 \cdot 2]
$$
$$
\Delta = [4 - 2 - 6] - [2 - 3 - 8] = [-4] - [-9] = -4 + 9 = 5
$$
$\Delta = 5 \neq 0$. Demak, sistema **yagona yechimga ega**, Kramer qoidasi ishlaydi!

---

### 2-qadam: $\Delta_x$ ni hisoblaymiz (1-ustunga ozod hadlarni qo'yamiz):
$$
\Delta_x = \begin{vmatrix}
\mathbf{2} & -1 & 1 \\
\mathbf{-2} & 2 & 2 \\
\mathbf{1} & -2 & 1
\end{vmatrix} = [4 - 2 + 4] - [2 - 8 + 2] = 6 - (-4) = 10
$$

---

### 3-qadam: $\Delta_y$ ni hisoblaymiz (2-ustunga ozod hadlarni qo'yamiz):
$$
\Delta_y = \begin{vmatrix}
2 & \mathbf{2} & 1 \\
3 & \mathbf{-2} & 2 \\
1 & \mathbf{1} & 1
\end{vmatrix} = [-4 + 4 + 3] - [-2 + 4 + 6] = 3 - 8 = -5
$$

---

### 4-qadam: $\Delta_z$ ni hisoblaymiz (3-ustunga ozod hadlarni qo'yamiz):
$$
\Delta_z = \begin{vmatrix}
2 & -1 & \mathbf{2} \\
3 & 2 & \mathbf{-2} \\
1 & -2 & \mathbf{1}
\end{vmatrix} = [4 + 2 - 12] - [4 + 8 - 3] = -6 - 9 = -15
$$

---

### 5-qadam: Noma'lumlarni topamiz:
$$
x = \frac{\Delta_x}{\Delta} = \frac{10}{5} = 2
$$
$$
y = \frac{\Delta_y}{\Delta} = \frac{-5}{5} = -1
$$
$$
z = \frac{\Delta_z}{\Delta} = \frac{-15}{5} = -3
$$

### Tekshirish:
1-tenglamaga qo'yamiz: $2(2) - (-1) + (-3) = 4 + 1 - 3 = 2$ (To'g'ri!)
2-tenglamaga qo'yamiz: $3(2) + 2(-1) + 2(-3) = 6 - 2 - 6 = -2$ (To'g'ri!)

**Javob:** $x = 2, \; y = -1, \; z = -3$.

</details>