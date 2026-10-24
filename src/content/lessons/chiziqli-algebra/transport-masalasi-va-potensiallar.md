---
title: "Transport masalasi: Tayanch reja va potensiallar usuli"
module: "chiziqli-algebra"
order: 21
description: "Yopiq va ochiq transport modellari, Shimoli-g'arb va Minimal xarajat usullari, potensiallar (u_i, v_j) orqali optimallikni baholash."
---

## Transport masalasining mohiyati

Tasavvur qiling, $m$ ta omborda bir xil mahsulot saqlanmoqda, uni $n$ ta do'konga yetkazib berish kerak.
Har bir ombordan har bir do'kongacha 1 birlik yuk tashish narxi $c_{ij}$ ma'lum.
Vazifa: barcha do'konlar talabini qondirib, omborlarni bo'shatgan holda **umumiy transport xarajatini eng kam (minimal) qilish**!

$$
L = \sum_{i=1}^m \sum_{j=1}^n c_{ij} x_{ij} \to \min
$$

---

## 1. Dastlabki tayanch rejani tuzish
- **Shimoli-g'arbiy burchak usuli:** Jadvalning eng yuqori chap katagidan boshlab navbat bilan to'ldirish;
- **Minimal xarajat usuli:** Narxi ($c_{ij}$) eng arzon bo'lgan kataklarga maksimal yuk taqsimlash.

---

## 2. Potensiallar usuli bilan optimallikni tekshirish
Band kataklar uchun $u_i + v_j = c_{ij}$ tenglamalar tuzilib, omborlar ($u_i$) va do'konlar ($v_j$) potensiallari topiladi.
Bo'sh kataklar uchun baho:
$$
\Delta_{ij} = c_{ij} - (u_i + v_j)
$$
Agar barcha bo'sh kataklarda $\Delta_{ij} \ge 0$ bo'lsa, **reja optimaldir!**
Agar manfiy baholi katak bo'lsa, yopiq sikl (kontur) tuzilib yuk qayta taqsimlanadi.