---
title: "Gauss usuli: Pog'onasimon ko'rinishga keltirish va teskari yurish"
module: "chiziqli-algebra"
order: 11
description: "Gauss usulining universalligi, to'g'ri yurish (nollash) va teskari yurish algoritmi, yagona va cheksiz ko'p yechimli sistemalar tahlili."
---

## Nega Gauss usuli — Chiziqli Algebraning "Shohi"?

Kramer va Matritsa usullari juda chiroyli, lekin ularning ulkan kamchiligi bor:
- Ular **faqat kvadrat ($n \times n$)** sistemalarga ishlaydi;
- Ular **faqat $\det A \neq 0$** bo'lgandagina ishlaydi.

Agar tenglamalar soni 3 ta, noma'lumlar esa 4 ta bo'lsa-chi? Yoki sistema cheksiz ko'p yechimga ega bo'lsa-chi? U holda Kramer ham, Matritsa usuli ham mutlaqo ojiz qoladi!

Mana shunday vaziyatda maydonga **Buyuk Karl Fridrix Gauss usuli** chiqadi.
Gauss usuli:
- Har qanday o'lchamdagi ($m \times n$) sistemaga ishlaydi;
- Yechim yo'qligini darhol fosh qiladi;
- Yagona yechimni ham, cheksiz ko'p yechimlarni ham birday aniqlik bilan topadi!

---

## 1. Usulning 2 ta asosiy bosqichi

Gauss usuli 2 qismdan iborat:

1. **To'g'ri yurish (Прямой ход):** Kengaytirilgan $(A \mid B)$ matritsani elementar satr almashtirishlar orqali **yuqori uchburchak yoki pog'onasimon (trapetsiyasimon)** shaklga keltirish (bosh diagonal tagidagi barcha sonlarni nolga aylantirish).
2. **Teskari yurish (Обратный ход):** Hosil bo'lgan eng oxirgi sodda tenglamadan boshlab yuqoriga qarab noma'lumlarni ketma-ket topish.

---

## 2. To'liq yechilgan amaliy misol (Yagona yechimli sistema)

**Masala:** Gauss usulida yeching:
$$
\begin{cases}
x_1 - x_2 + 2x_3 = 5 \\
2x_1 + x_2 - x_3 = 1 \\
3x_1 + 2x_2 + x_3 = 8
\end{cases}
$$

<details>
<summary><strong>To'liq Gauss algoritmi</strong></summary>

### 1-bosqich: To'g'ri yurish
Kengaytirilgan matritsani yozamiz:
$$
(A \mid B) = \begin{pmatrix}
1 & -1 & 2 & \bigm| & 5 \\
2 & 1 & -1 & \bigm| & 1 \\
3 & 2 & 1 & \bigm| & 8
\end{pmatrix}
$$

1-satrdagi $a_{11} = 1$ yordamida 1-ustundagi pastki sonlarni nolga aylantiramiz:
- $S_2 - 2S_1 \to S_2$-$S_3 - 3S_1 \to S_3$

$$
\sim \begin{pmatrix}
1 & -1 & 2 & \bigm| & 5 \\
0 & 3 & -5 & \bigm| & -9 \\
0 & 5 & -5 & \bigm| & -7
\end{pmatrix}
$$

Endi 2-satr va 3-satr ustida ishlaymiz:
- $3 \cdot S_3 - 5 \cdot S_2 \to S_3$:
$$
\begin{aligned}
3(0) - 5(0) &= 0 \\
3(5) - 5(3) &= 0 \\
3(-5) - 5(-5) &= -15 + 25 = 10 \\
3(-7) - 5(-9) &= -21 + 45 = 24
\end{aligned}
$$

Matritsa pog'onasimon ko'rinishga keldi:
$$
\begin{pmatrix}
1 & -1 & 2 & \bigm| & 5 \\
0 & 3 & -5 & \bigm| & -9 \\
0 & 0 & 10 & \bigm| & 24
\end{pmatrix}
$$

---

### 2-bosqich: Teskari yurish
Matritsani qaytadan tenglamalar holiga keltiramiz:
$$
\begin{cases}
x_1 - x_2 + 2x_3 = 5 \\
3x_2 - 5x_3 = -9 \\
10x_3 = 24
\end{cases}
$$

1. 3-tenglamadan:
   $$x_3 = \frac{24}{10} = 2.4$$
2. 2-tenglamaga $x_3$ ni qo'yamiz:
   $$3x_2 - 5(2.4) = -9 \implies 3x_2 - 12 = -9 \implies 3x_2 = 3 \implies x_2 = 1$$
3. 1-tenglamaga $x_2$va$x_3$ ni qo'yamiz:
   $$x_1 - 1 + 2(2.4) = 5 \implies x_1 - 1 + 4.8 = 5 \implies x_1 + 3.8 = 5 \implies x_1 = 1.2$$

**Javob:** $x_1 = 1.2, \; x_2 = 1, \; x_3 = 2.4$.

</details>

---

## 3. Cheksiz ko'p yechimli sistema (Erkin o'zgaruvchilar)

Agar to'g'ri yurish natijasida satrlar soni noma'lumlar sonidan kam bo'lib qolsa (masalan, $0=0$ satr chiqib o'chib ketsa):
- Qolgan pog'ona burchaklaridagi o'zgaruvchilar **bazis o'zgaruvchilar** deyiladi;
- O'ng tomonda qolgan ortiqcha o'zgaruvchilar **erkin parametrlar ($C_1, C_2, \dots$)** deb e'lon qilinadi va umumiy yechim shu parametrlar orqali yoziladi.