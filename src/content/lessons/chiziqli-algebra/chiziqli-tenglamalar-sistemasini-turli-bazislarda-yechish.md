---
title: "ChTS ni turli bazislarda yechish: Barcha tayanch yechimlarni topish"
module: "chiziqli-algebra"
order: 14
description: "Bazisli va erkin o'zgaruvchilarni almashtirish, tayanch yechimlar tushunchasi va chiziqli dasturlashga poydevor."
---

## Nega ChTS ni turli bazislarda yechish kerak?

Iqtisodiy masalalarda, ayniqsa **Chiziqli dasturlash (Simpleks usuli)** va **Transport masalasi**da cheksiz ko'p yechimli sistemalar uchraydi.
Bu yerda har qanday yechim emas, balki **manfiy bo'lmagan chetki yechimlar — TAYANCH YECHIMLAR (Опорные решения)** talab qilinadi.

Tayanch yechimni topish uchun biz sistemani turli xil bazislar bo'yicha ketma-ket yechishimiz kerak bo'ladi.

---

## 1. Bazisli yechim nima?

$m$ ta tenglama va $n$ ta noma'lumli ($m < n$) sistemada:
- Agar $m$ ta o'zgaruvchi **bazis** deb tanlansa va qolgan $n - m$ ta erkin o'zgaruvchiga **nol ($0$)** qiymat berilsa, hosil bo'lgan yechimga **BAZISLI YECHIM** deyiladi.
- Agar barcha bazisli o'zgaruvchilar **manfiy bo'lmasa ($x_i \ge 0$)**, bu yechim **TAYANCH YECHIM (BOSHLANG'ICH REJA)** deyiladi!

Mavjud bo'lishi mumkin bo'lgan maksimal bazislar soni kombinatorika formulasi bilan aniqlanadi:
$$
C_n^m = \frac{n!}{m!(n-m)!}
$$

---

## 2. Jordan-Gauss modifikatsiyasi orqali bazisni almashtirish

Bir bazisdan ikkinchi bazisga o'tish uchun ustunlar bo'yicha Gauss-Jordan almashtirishlari (Simpleks jadvali almashtirishlari) bajariladi.