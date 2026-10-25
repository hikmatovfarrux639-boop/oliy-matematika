---
title: "Matritsa rangi: Chiziqli erkli satrlar va pog'onasimon shakl"
module: "chiziqli-algebra"
order: 7
description: "Matritsa rangi nima, o'rab oluvchi minorlar usuli, elementar almashtirishlar bilan pog'onasimon shaklga keltirish va amaliy misollar."
---

## Kirish: Matritsa rangi nima va u nimani o'lchaydi?

Tasavvur qiling, sizga 3 ta tenglama berilgan:
1) $x + y = 5$2)$2x + 2y = 10$3)$x - y = 1$

Diqqat qiling: 2-tenglama aslida 1-tenglamaning shunchaki 2 ga ko'paytirilgani! Ya'ni u hech qanday yangi axborot bermaydi — u "ortiqcha" (chiziqli bog'liq). Haqiqiy yangi axborot beruvchi mustaqil tenglamalar soni esa atigi 2 ta (1- va 3-tenglama).

Mana shu matritsadagi **haqiqiy, mustaqil (chiziqli erkli) axborotlar soni — MATRITSA RANGI** deyiladi!

---

## 1. Rasmily ta'riflar

> **1-ta'rif (Minorlar orqali):** Matritsaning rangi deb uning **nolga teng bo'lmagan eng yuqori tartibli minori**ga aytiladi va u $\operatorname{rang}(A)$yoki$\operatorname{rank}(A)$ deb belgilanadi.
>
> **2-ta'rif (Chiziqli algebrada):** Matritsaning rangi deb uning **maksimal chiziqli erkli satrlari (yoki ustunlari)** soniga aytiladi.

Agar matritsa o'lchami $m \times n$ bo'lsa:
$$
0 \le \operatorname{rang}(A) \le \min(m, n)
$$

---

## 2. Rangni topishning 2 ta asosiy usuli

### A) O'rab oluvchi minorlar usuli
Avval $1$-tartibli nolmas minor topiladi, so'ng uni o'rab oluvchi $2$-tartibli, keyin $3$-tartibli minorlar tekshiriladi.
*Kamchiligi:* Katta matritsalarda juda ko'p determinant hisoblash talab etiladi, shuning uchun amaliyotda kam qo'llanadi.

### B) Elementar almashtirishlar (Gauss pog'onasimon usuli) — ENG TEZKOR USUL!
Matritsa ustida quyidagi elementar almashtirishlar bajarilsa, **uning rangi mutlaqo o'zgarmaydi**:
1. Satrlar o'rnini almashtirish;
2. Satrni noldan farqli songa ko'paytirish;
3. Biror satrga boshqa satrni songa ko'paytirib qo'shish;
4. Butunlay nollardan iborat satrni o'chirib tashlash.

> **Qoida:** Elementar almashtirishlar yordamida matritsa **pog'onasimon (trapetsiyasimon)** ko'rinishga keltiriladi.
> **Rang = Noldan farqli satrlar soniga teng bo'ladi!**

---

## 3. Amaliy misol (Pog'onasimon ko'rinish orqali)

**Masala:** Ushbu $4 \times 4$ matritsaning rangini toping:
$$
A = \begin{pmatrix}
1 & 2 & 3 & 4 \\
2 & 4 & 6 & 8 \\
3 & 6 & 9 & 12 \\
1 & 0 & 2 & 1
\end{pmatrix}
$$

<details>
<summary><strong>Yechimni ko'rish</strong></summary>

Diqqat qiling: 2-satr 1-satrning 2 barobari ($S_2 = 2S_1$), 3-satr esa 3 barobari ($S_3 = 3S_1$).
- $S_2 - 2S_1 \to S_2$-$S_3 - 3S_1 \to S_3$

$$
A \sim \begin{pmatrix}
1 & 2 & 3 & 4 \\
0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 \\
1 & 0 & 2 & 1
\end{pmatrix}
$$

Nolli satrlarni eng pastga tushiramiz yoki o'chirib tashlaymiz:
$$
A \sim \begin{pmatrix}
1 & 2 & 3 & 4 \\
1 & 0 & 2 & 1
\end{pmatrix}
$$

Endi $S_2 - S_1$:
$$
A \sim \begin{pmatrix}
1 & 2 & 3 & 4 \\
0 & -2 & -1 & -3
\end{pmatrix}
$$

Noldan farqli satrlar soni **2 ta**!
Demak:
$$
\operatorname{rang}(A) = 2
$$

</details>