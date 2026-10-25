---
title: "Chiziqli fazo tushunchasi, chiziqli bog'liqlik va bazis"
module: "chiziqli-algebra"
order: 15
description: "Chiziqli fazo aksiomalari, vektorlar sistemasining chiziqli bog'liqligi va erkinligi, fazo o'lchami va bazis bo'yicha yoyish."
---

## Chiziqli fazo (Vektor fazo) nima?

Matematikada "fazo" deganda shunchaki biz yashayotgan 3 o'lchamli dunyo emas, balki ma'lum qonuniyatlarga bo'ysunuvchi **har qanday elementlar to'plami** tushuniladi.

Agar biror $V$ to'plam elementlari uchun **qo'shish ($+$)** va **songa ko'paytirish ($\cdot$)** amallari aniqlangan bo'lib, ular 8 ta mashhur aksiomani (kommutativlik, assotsiativlik, nol element, qarama-qarshi element va h.k.) qanoatlantirsa, $V$ to'plamga **Chiziqli fazo (yoki Vektor fazo)** deyiladi.

Misollar:
- $\mathbb{R}^n$— barcha$n$ o'lchamli sonli vektorlar fazosi;
- $P_n$— darajasi$n$ dan oshmaydigan ko'pxadlar fazosi;
- $M_{m \times n}$— barcha$m \times n$ matritsalar fazosi.

---

## 1. Vektorlarning chiziqli bog'liqligi va chiziqli erkinligi

Ushbu tushuncha chiziqli algebraning eng markaziy ustunlaridan biridir:

$$
\alpha_1 v_1 + \alpha_2 v_2 + \dots + \alpha_k v_k = 0
$$

1. Agar ushbu tenglik **faqat va faqat barcha $\alpha_1 = \alpha_2 = \dots = \alpha_k = 0$ bo'lgandagina** bajarilsa, bu vektorlar **CHIZIQLI ERKLI** deyiladi.
   *(Ma'nosi: ularning birortasi ham qolganlaridan yasalmaydi, har biri yangi mustaqil yo'nalish beradi).*
2. Agar koeffitsiyentlardan kamida bittasi noldan farqli bo'lganda ham yig'indi $0$ bo'la olsa, bu vektorlar **CHIZIQLI BOG'LIQ** deyiladi.
   *(Ma'nosi: kamida bitta vektor qolganlarining chiziqli kombinatsiyasi orqali hosil qilingan — ortiqcha vektor).*

---

## 2. Fazoning o'lchami va Bazis

> **Bazis:** Chiziqli fazodagi har qanday vektorni yagona usulda ifodalash mumkin bo'lgan **maksimal chiziqli erkli vektorlar sistemasiga** BAZIS deyiladi.
>
> **O'lcham (Dimension):** Fazodagi bazis vektorlar soniga fazoning **o'lchami** deyiladi va $\operatorname{dim} V$ kabi yoziladi.

Masalan:
- Tekislikda 2 ta no-kollinear vektor bazis bo'ladi ($\operatorname{dim} = 2$);
- Fazoda 3 ta no-komplanar vektor bazis bo'ladi ($\operatorname{dim} = 3$);
- $\mathbb{R}^n$da standart bazis:$e_1 = (1,0,\dots,0), e_2 = (0,1,\dots,0), \dots, e_n = (0,0,\dots,1)$.