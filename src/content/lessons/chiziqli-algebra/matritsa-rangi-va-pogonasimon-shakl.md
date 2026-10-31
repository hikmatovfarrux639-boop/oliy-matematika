---
title: "Matritsa rangi: Chiziqli erkli satrlar va pog'onasimon shakl"
module: "chiziqli-algebra"
order: 7
description: "Matritsa rangi ta'rifi, o'rab oluvchi minorlar usuli, Gauss pog'onasimon shakli, parametrli matritsalar rangi va amaliy masalalar."
---

## Kirish: Matritsa rangi nima va u nimani o'lchaydi?

Tasavvur qiling, sizga 3 ta tenglamadan iborat sistema berilgan:
1. $x + y = 5$
2. $2x + 2y = 10$
3. $x - y = 1$

Diqqat qiling: 2-tenglama aslida 1-tenglamaning shunchaki 2 ga ko'paytirilgan ko'rinishi! Ya'ni u hech qanday yangi axborot bermaydi — u "ortiqcha" (chiziqli bog'liq) tenglamadir. Haqiqiy yangi axborot beruvchi mustaqil tenglamalar soni esa atigi 2 ta (1- va 3-tenglamalar).

Mana shu matritsadagi **haqiqiy, mustaqil (chiziqli erkli) axborotlar soni — MATRITSA RANGI** deyiladi!
Rangsiz chiziqli tenglamalar sistemasining birgalikda ekanligini (Kronekker-Kapelli teoremasi), fazoning o'lchamini yoki chiziqli operatorning xususiyatlarini aniqlab bo'lmaydi.

---

## 1. Rasmiy ta'riflar va fundamental xossalar

Chiziqli algebrada matritsa rangiga ikkita ekvivalent ta'rif beriladi:

> [!NOTE] Rangning 2 ta klassik ta'rifi
> 1. **Determinantlar (Minorlar) orqali ta'rif:**
>    Matritsaning rangi deb, uning **nolga teng bo'lmagan eng yuqori tartibli minori**ga aytiladi va u $\operatorname{rank}(A)$ yoki $\operatorname{rang}(A)$ kabi belgilanadi.
> 2. **Vektorlar (Chiziqli erklik) orqali ta'rif:**
>    Matritsaning rangi deb, uning **maksimal chiziqli erkli satrlari (yoki ustunlari)** soniga aytiladi.

### Matritsa rangining fundamental xossalari:
1. **Satr va ustun rangi tengligi:** Ixtiyoriy matritsaning chiziqli erkli satrlari soni har doim uning chiziqli erkli ustunlari soniga teng:
   $$
   \operatorname{rank}(A) = \operatorname{rank}(A^T)
   $$
2. **O'lcham chegarasi:** $m \times n$ o'lchamli matritsaning rangi uning satrlar va ustunlar sonining kichigidan osha olmaydi:
   $$
   0 \le \operatorname{rank}(A) \le \min(m, n)
   $$
3. **Nol matritsa:** Faqat barcha elementlari nol bo'lgan matritsaning rangi $0$ ga teng. Agar matritsada kamida bitta $a_{ij} \neq 0$ son bo'lsa, $\operatorname{rank}(A) \ge 1$.
4. **Maxsusmas kvadrat matritsa:** $n \times n$ matritsa uchun $\det A \neq 0 \iff \operatorname{rank}(A) = n$.

---

## 2. Rangni hisoblashning 2 ta asosiy usuli

### A) O'rab oluvchi minorlar usuli (Метод окаймляющих миноров)
Bu usul determinantlar orqali rangni qadamma-qadam aniqlaydi:
1. Matritsada noldan farqli 1-tartibli minor (bitta element $a_{ij} \neq 0$) topiladi. Rang kamida 1.
2. Shu elementni o'z ichiga oluvchi $2 \times 2$ o'lchamli minorlar hisoblanadi. Agar nolmas $M_2 \neq 0$ topilsa, rang kamida 2.
3. Shu $M_2$ minorni o'rab oluvchi barcha $3 \times 3$ minorlar tekshiriladi.
4. Agar biror $k$-tartibli nolmas minor $M_k \neq 0$ ni o'rab oluvchi **barcha $(k+1)$-tartibli minorlar nolga teng bo'lsa**, demak matritsaning rangi qat'iy **$\operatorname{rank}(A) = k$** ga teng!

---

### B) Elementar almashtirishlar (Gauss pog'onasimon usuli) — ENG TEZKOR USUL!
Minorlar usulida ko'plab determinantlarni hisoblash og'ir bo'lgani sababli, amaliyotda har doim Gauss usuli qo'llaniladi.

Quyidagi **elementar almashtirishlar** matritsa rangini **mutlaqo o'zgartirmaydi**:
1. Ikkita satr (yoki ustun) o'rnini almashtirish;
2. Biror satrni (ustunni) noldan farqli ixtiyoriy songa ko'paytirish yoki bo'lish;
3. Biror satrga boshqa satrning songa ko'paytirilganini qo'shish;
4. Butunlay nollardan iborat satrni (ustunni) o'chirib tashlash.

> [!NOTE] Gauss qoidasi
> Elementar almashtirishlar yordamida matritsa **pog'onasimon (trapetsiyasimon)** ko'rinishga keltiriladi.
> **Matritsaning rangi = Pog'onasimon ko'rinishdagi noldan farqli (nolmas) satrlar soniga teng bo'ladi!**

---

## 3. Qadamma-qadam to'liq yechilgan amaliy misollar

### 1-misol: $4 \times 5$ matritsa rangini Gauss usulida topish

**Masala:** Ushbu to'rtburchak matritsaning rangini toping:
$$
A = \begin{pmatrix}
1 & -2 & 1 & 3 & -1 \\
2 & -4 & 3 & 5 & 2 \\
3 & -6 & 4 & 8 & 1 \\
-1 & 2 & 1 & -5 & 7
\end{pmatrix}
$$

#### Yechish:

**1-bosqich: 1-ustunni tozalaymiz (1-satr yordamida):**
- $S_2 - 2S_1 \to S_2$:
  $2 - 2 = 0; \quad -4 - (-4) = 0; \quad 3 - 2 = 1; \quad 5 - 6 = -1; \quad 2 - (-2) = 4$.
- $S_3 - 3S_1 \to S_3$:
  $3 - 3 = 0; \quad -6 - (-6) = 0; \quad 4 - 3 = 1; \quad 8 - 9 = -1; \quad 1 - (-3) = 4$.
- $S_4 + S_1 \to S_4$:
  $-1 + 1 = 0; \quad 2 - 2 = 0; \quad 1 + 1 = 2; \quad -5 + 3 = -2; \quad 7 - 1 = 6$.

Matritsa quyidagi ko'rinishga keladi:
$$
A \sim \begin{pmatrix}
1 & -2 & 1 & 3 & -1 \\
0 & 0 & 1 & -1 & 4 \\
0 & 0 & 1 & -1 & 4 \\
0 & 0 & 2 & -2 & 6
\end{pmatrix}
$$

**2-bosqich: 3-satr va 4-satrni soddalashtiramiz (2-satr yordamida):**
- $S_3 - S_2 \to S_3$:
  $0 - 0 = 0; \quad 0 - 0 = 0; \quad 1 - 1 = 0; \quad -1 - (-1) = 0; \quad 4 - 4 = 0$ (Butun satr nol bo'ldi!).
- $S_4 - 2S_2 \to S_4$:
  $0; \quad 0; \quad 2 - 2 = 0; \quad -2 - (-2) = 0; \quad 6 - 8 = -2$.

Matritsa ko'rinishi:
$$
A \sim \begin{pmatrix}
1 & -2 & 1 & 3 & -1 \\
0 & 0 & 1 & -1 & 4 \\
0 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & -2
\end{pmatrix}
$$

Nolli 3-satrni eng pastga tushiramiz:
$$
A \sim \begin{pmatrix}
\mathbf{1} & -2 & 1 & 3 & -1 \\
0 & 0 & \mathbf{1} & -1 & 4 \\
0 & 0 & 0 & 0 & \mathbf{-2} \\
0 & 0 & 0 & 0 & 0
\end{pmatrix}
$$

Matritsa pog'onasimon shaklga keldi!
Noldan farqli satrlar soni roppa-rosa **3 ta** (1-, 2- va 3-satrlar).

**Javob:** $\operatorname{rank}(A) = 3$.

---

### 2-misol: Parametrli matritsaning rangini tekshirish (Imtihon klassikasi)

**Masala:** $\lambda$ parametrning turli qiymatlarida matritsa rangini aniqlang:
$$
A = \begin{pmatrix}
1 & 1 & 1 \\
1 & \lambda & 1 \\
1 & 1 & \lambda^2
\end{pmatrix}
$$

#### Yechish:

Matritsa ustida Gauss almashtirishlarini bajaramiz:
- $S_2 - S_1 \to S_2$:
  $1 - 1 = 0; \quad \lambda - 1; \quad 1 - 1 = 0$.
- $S_3 - S_1 \to S_3$:
  $1 - 1 = 0; \quad 1 - 1 = 0; \quad \lambda^2 - 1$.

Matritsa diagonal pog'onasimon shaklga keldi:
$$
A \sim \begin{pmatrix}
1 & 1 & 1 \\
0 & \lambda - 1 & 0 \\
0 & 0 & \lambda^2 - 1
\end{pmatrix}
$$

Endi diagonal elementlarning nolga teng bo'lish shartlarini tahlil qilamiz:
$\lambda - 1 = 0 \implies \lambda = 1$.
$\lambda^2 - 1 = 0 \implies (\lambda - 1)(\lambda + 1) = 0 \implies \lambda = 1$ yoki $\lambda = -1$.

**Holatlar tahlili:**

1. **$\lambda = 1$ bo'lganda:**
   $$
   A \sim \begin{pmatrix} 1 & 1 & 1 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}
   $$
   Noldan farqli satr atigi 1 ta! Demak, **$\operatorname{rank}(A) = 1$**.

2. **$\lambda = -1$ bo'lganda:**
   $$
   A \sim \begin{pmatrix} 1 & 1 & 1 \\ 0 & -2 & 0 \\ 0 & 0 & 0 \end{pmatrix}
   $$
   Noldan farqli satrlar 2 ta! Demak, **$\operatorname{rank}(A) = 2$**.

3. **$\lambda \neq 1$ va $\lambda \neq -1$ bo'lganda:**
   Barcha 3 ta diagonal element noldan farqli bo'ladi.
   Demak, **$\operatorname{rank}(A) = 3$**.

**Javob:**
- Agar $\lambda = 1$ bo'lsa: $\operatorname{rank}(A) = 1$;
- Agar $\lambda = -1$ bo'lsa: $\operatorname{rank}(A) = 2$;
- Agar $\lambda \neq \pm 1$ bo'lsa: $\operatorname{rank}(A) = 3$.

---

## 4. Talabalar yo'l qo'yadigan tuzoqlar

> [!WARNING] Imtihonda ehtiyot bo'ling!
> 1. **Nolli satrni hisobga qo'shib yuborish:** Pog'onasimon ko'rinishga keltirgandan so'ng, faqatgina **kamida bitta nolmas elementi bor satrlar** sanaladi. Butunlay nollardan iborat $(0, 0, \dots, 0)$ satrlar rangga kirmaydi!
> 2. **Ustunlar bo'yicha almashtirishlarni aralashtirish:** Agar siz chiziqli tenglamalar sistemasining kengaytirilgan $(A \mid B)$ matritsasi ustida ishlayotgan bo'lsangiz, **ustunlar o'rnini almashtirish taqiqlanadi** (chunki noma'lumlar joyi o'zgarib ketadi!). Faqat satrlar ustida amallar bajaring.
> 3. **Erta xulosa chiqarish:** Matritsani oxirigacha pog'onasimon shaklga keltirmasdan, birinchi qadamdayoq "bu yerda 3 ta satr bor, rang 3" deb xulosa qilish xatodir. Keyingi qadamda satrlar bir-birini qisqartirib nolga aylantirishi mumkin.

---

## 5. Mustaqil yechish uchun amaliy mashqlar

1. $A = \begin{pmatrix} 1 & 2 & 3 \\ 2 & 4 & 6 \\ 3 & 6 & 9 \end{pmatrix}$ matritsaning rangini toping.
   - *Javob:* 2- va 3-satrlar 1-satrga proporsional $\implies \operatorname{rank}(A) = 1$.

2. $A = \begin{pmatrix} 1 & 3 & 5 & -1 \\ 2 & -1 & -3 & 4 \\ 5 & 1 & -1 & 7 \\ 7 & 7 & 9 & 5 \end{pmatrix}$ matritsaning rangini Gauss usuli bilan toping.
   - *Javob:* $\operatorname{rank}(A) = 2$ (chunki $S_3 = S_1 + 2S_2$ va $S_4 = 3S_1 + 2S_2$ bo'lib, ikkita satr nollashadi).
