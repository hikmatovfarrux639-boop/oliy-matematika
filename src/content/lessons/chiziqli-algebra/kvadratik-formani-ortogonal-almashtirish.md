---
title: "Kvadratik formani ortogonal almashtirish bilan kanonik ko'rinishga keltirish"
module: "chiziqli-algebra"
order: 19
description: "Simmetrik matritsalar xossalari, Gramm-Shmidt ortogonallash, o'tish matritsasi va bosh o'qlarga keltirish."
---

## Nega kvadratik formani kanonik ko'rinishga keltiramiz?

Kvadratik formada $2x_1 x_2$ kabi "aralash" ko'paytmalar qatnashsa, uning geometriyasini tushunish va tahlil qilish juda qiyin.
Agar aralash ko'paytmalarni yo'qotib, faqat sof kvadratlar yig'indisi holiga keltirsak:

$$
Q = \lambda_1 y_1^2 + \lambda_2 y_2^2 + \dots + \lambda_n y_n^2
$$

bunga **kanonik ko'rinish** (yoki bosh o'qlarga keltirish) deyiladi!
Geometrik ma'nosi: koordinatalar sistemasini ikkinchi tartibli chiziq (ellips, giperbola) o'qlariga parallel qilib **burish** demakdir.

---

## 1. Ortogonal almashtirish usulining 4 bosqichi

1. Matritsaning **xos sonlari** $\lambda_1, \lambda_2, \dots, \lambda_n$ topiladi;
2. Har bir xos songa mos keluvchi **xos vektorlar** topiladi;
3. Xos vektorlar **normalanadi** ($e_i = \frac{v_i}{|v_i|}$) va Gramm-Shmidt usulida ortogonallanadi;
4. Normalangan vektorlardan **ortogonal $T$ matritsa** tuziladi ($T^{-1} = T^T$). Yangi koordinatalarda kvadratik forma koeffitsiyentlari aynan xos sonlardan iborat bo'ladi!