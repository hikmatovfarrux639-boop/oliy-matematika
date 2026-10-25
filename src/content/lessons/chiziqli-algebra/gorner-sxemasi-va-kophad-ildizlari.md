---
title: "Ko'pxadlar algebrasi: Gorner sxemasi va butun ildizlarni topish"
module: "chiziqli-algebra"
order: 22
description: "Bezu teoremasi, Gorner jadvali bilan ko'pxadni (x - a) ga bo'lish, qoldiqni hisoblash va yuqori darajali tenglamalarni yechish."
---

## Nega Gorner sxemasi chiziqli algebrada kerak?

Matritsaning xos sonlarini topishda biz doimo 3- yoki 4-darajali $\det(A - \lambda E) = 0$ xarakteristik ko'pxadga duch kelamiz.
Uni ko'paytuvchilarga ajratish va butun ildizlarini topishning eng qulay va xatosiz usuli — **Gorner sxemasi**dir!

---

## 1. Bezu teoremasi va butun ildizlar haqidagi teorema

1. **Bezu teoremasi:** $P(x)$ko'pxadni$(x - a)$ga bo'lgandagi qoldiq ko'pxadning$x = a$nuqtadagi qiymatiga teng:$R = P(a)$.
2. **Butun ildizlar:** Butun koeffitsiyentli ko'pxadning butun ildizlari faqatgina uning **ozod hadi bo'luvchilari** orasidan qidiriladi!

---

## 2. Gorner jadvali algoritmi

$P(x) = a_0 x^n + a_1 x^{n-1} + \dots + a_n$ko'pxadni$(x - c)$ ga bo'lish jadvali:

| | $a_0$|$a_1$|$a_2$|$\dots$|$a_n$ |
|---|---|---|---|---|---|
| **$c$** | $b_0 = a_0$|$b_1 = c \cdot b_0 + a_1$|$b_2 = c \cdot b_1 + a_2$|$\dots$|$R = c \cdot b_{n-1} + a_n$ |

Agar oxirgi qoldiq $R = 0$bo'lsa, demak$x = c$ ushbu ko'pxadning haqiqiy ildizidir!