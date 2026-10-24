---
title: "Kvadratik formalar va Silvestrning musbat aniqlanganlik mezoni"
module: "chiziqli-algebra"
order: 18
description: "Kvadratik forma matritsasi, bosh minorlar, Silvestr mezoni, musbat, manfiy va noaniq kvadratik formalar tahlili."
---

## Kvadratik forma nima?

Ko'p o'zgaruvchili funksiyalarning ekstremumlarini (minimum va maksimumlarini) topishda, ikkinchi tartibli sirtlar geometriyasida va fizikada kinetik energiya ifodasida har doim **kvadratik formalar** uchraydi.

$n$ ta o'zgaruvchining **kvadratik formasi** deb, har bir hadi 2-darajali bo'lgan bir jinsli ko'pxadga aytiladi:

$$
Q(x_1, x_2, \dots, x_n) = \sum_{i=1}^n \sum_{j=1}^n a_{ij} x_i x_j = a_{11}x_1^2 + a_{22}x_2^2 + \dots + 2a_{12}x_1x_2 + \dots
$$

Matritsaviy ko'rinishi:
$$
Q(X) = X^T \cdot A \cdot X
$$
bu yerda $A$ — **simmetrik kvadrat matritsa** ($A = A^T$, ya'ni $a_{ij} = a_{ji}$).

---

## 1. Kvadratik formalarning ishora turlari

1. **Musbat aniqlangan:** Barcha $X \neq 0$ uchun $Q(X) > 0$ (Grafigi botiq kosadek, minimumga ega);
2. **Manfiy aniqlangan:** Barcha $X \neq 0$ uchun $Q(X) < 0$ (Grafigi qavariq gumbazdek, maksimumga ega);
3. **Noaniq (ishorasi o'zgaruvchan):** Ba'zi nuqtalarda musbat, ba'zilarida manfiy (egarsimon sirt — egar nuqta).

---

## 2. Silvestr mezoni (Bosh minorlar orqali tekshirish)

Formaning ishorasini aniqlash uchun uning matritsasining yuqori chap burchagidan boshlanuvchi **bosh minorlari (burchak minorlari)** hisoblanadi:

$$
\Delta_1 = a_{11}, \quad \Delta_2 = \begin{vmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{vmatrix}, \quad \Delta_3 = \det A, \quad \dots
$$

> **Silvestr teoremasi:**
> 1. Kvadratik forma **musbat aniqlangan** bo'lishi uchun uning barcha bosh minorlari **qattiq musbat** bo'lishi zarur va yetarli:
>    $$\Delta_1 > 0, \quad \Delta_2 > 0, \quad \Delta_3 > 0, \quad \dots$$
> 2. Kvadratik forma **manfiy aniqlangan** bo'lishi uchun bosh minorlar **ishorasi almashinib** kelishi kerak (birinchisi manfiy!):
>    $$\Delta_1 < 0, \quad \Delta_2 > 0, \quad \Delta_3 < 0, \quad \Delta_4 > 0, \quad \dots$$