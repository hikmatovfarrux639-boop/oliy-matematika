---
title: "Chiziqli operatorlar va yangi bazisga o'tish matritsasi"
module: "chiziqli-algebra"
order: 16
description: "Chiziqli operator matritsasi, bazis almashganda operator matritsasining o'zgarishi A' = T⁻¹ A T va geometrik akslantirishlar."
---

## Chiziqli operator (akslantirish) nima?

Fazo nuqtalarini yoki vektorlarini ma'lum bir qoida bo'yicha yangi vektorlarga o'tkazuvchi qoidaga **operator (yoki akslantirish)** deyiladi.

Agar operator $A: V \to V$ uchun ikkita shart bajarilsa:
1. $A(x + y) = A(x) + A(y)$ *(Additivlik)*;
2. $A(\alpha x) = \alpha A(x)$ *(Bir jinslilik)*;
u holda u **CHIZIQLI OPERATOR** deyiladi.

Geometrik misollar:
- Fazoni ma'lum burchakka burish;
- Koordinata o'qlari bo'yicha cho'zish yoki siqish;
- O'qqa yoki tekislikka proyeksiyalash va simmetrik akslantirish.

---

## 1. Operatorning matritsasi

Har qanday chiziqli operator tanlangan bazisda **bitta aniq matritsa** bilan to'liq ifodalanadi!
Agar bazis vektorlariga operator ta'sir ettirilsa:
$$
A(e_1) = a_{11}e_1 + a_{21}e_2 + \dots + a_{n1}e_n
$$
Ushbu hosil bo'lgan koeffitsiyentlar operator matritsasining **ustunlari**ga aylanadi!

---

## 2. Yangi bazisga o'tishda matritsaning o'zgarishi

Agar eski bazisdan yangi bazisga o'tish matritsasi $T$ bo'lsa, operatorning yangi bazisdagi $A'$ matritsasi quyidagi mashhur formula bilan bog'lanadi:

$$
\mathbf{A' = T^{-1} \cdot A \cdot T}
$$

Bunday matritsalar **o'xshash matritsalar** deyiladi.