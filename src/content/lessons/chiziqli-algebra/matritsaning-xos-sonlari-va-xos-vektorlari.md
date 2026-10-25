---
title: "Matritsaning xos sonlari va xos vektorlari: Diagonallashtirish"
module: "chiziqli-algebra"
order: 17
description: "Av = λv tenglamasi, xarakteristik ko'pxad, xos son va xos vektorlarni topish, matritsani diagonal ko'rinishga keltirish shartlari."
---

## Kirish: Yo'nalishini o'zgartirmaydigan sehrli vektorlar

Tasavvur qiling, siz rezina varaqqa rasm chizib, uni turli tomonlarga tortdingiz. Aksariyat chiziqlar buriladi va yo'nalishini o'zgartiradi.
Lekin ba'zi maxsus yo'nalishdagi chiziqlar borki, ular **o'z yo'nalishini zarracha o'zgartirmaydi**, faqatgina cho'ziladi yoki qisqaradi!

Mana shu yo'nalishlar chiziqli algebrada **XOS VEKTORLAR**, ularning cho'zilish koeffitsiyenti esa **XOS SONLAR** deyiladi!
Bu tushuncha Google PageRank qidiruv algoritmi, kvant mexanikasi (Shryodinger tenglamasi) va ko'priklar tebranishi (rezonans) tahlilining negizidir.

---

## 1. Asosiy ta'rif va tenglama

Noldan farqli $v \neq 0$ vektor uchun:

$$
A \cdot v = \lambda \cdot v
$$

tenglik bajarilsa:
- $\lambda$soni —$A$ matritsaning **xos soni (eigenvalue)**;
- $v$vektor —$\lambda$ xos songa mos keluvchi **xos vektor (eigenvector)** deyiladi.

---

## 2. Xos sonlarni topish: Xarakteristik tenglama

Tenglamani bir tomonga o'tkazamiz:
$$
A v - \lambda E v = 0 \implies (A - \lambda E) v = 0
$$

Bu bir jinsli sistema $v \neq 0$ (nolmas) yechimga ega bo'lishi uchun uning determinanti nolga teng bo'lishi shart:

$$
\mathbf{\det(A - \lambda E) = 0}
$$

Bu tenglamaga matritsaning **Xarakteristik tenglamasi** deyiladi. Uni yechib barcha $\lambda_1, \lambda_2, \dots, \lambda_n$ xos sonlar topiladi!

---

## 3. Matritsani diagonallashtirish

Agar $n$-tartibli $A$matritsa$n$ta chiziqli erkli xos vektorga ega bo'lsa, uni xos vektorlardan tuzilgan$T$ o'tish matritsasi yordamida **diagonal ko'rinishga** keltirish mumkin:

$$
T^{-1} A T = \Lambda = \begin{pmatrix}
\lambda_1 & 0 & \dots & 0 \\
0 & \lambda_2 & \dots & 0 \\
\vdots & \vdots & \ddots & \vdots \\
0 & 0 & \dots & \lambda_n
\end{pmatrix}
$$

Bu xossa $A^{1000}$ kabi ulkan darajalarni bir soniyada hisoblash imkonini beradi:
$$
A^k = T \cdot \Lambda^k \cdot T^{-1}
$$