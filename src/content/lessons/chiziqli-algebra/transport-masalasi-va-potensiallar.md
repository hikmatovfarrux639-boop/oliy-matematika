---
title: "Transport masalasi: Boshlang'ich reja va Potensiallar usuli"
module: "chiziqli-algebra"
order: 21
description: "Yopiq va ochiq transport modellari, minimal xarajatlar usuli, potensiallar orqali optimallikni tekshirish va sikllar bo'yicha siljitish."
---

## Kirish: Transport masalasi nima?

**Transport masalasi** — chiziqli dasturlashning eng ommabop va amaliy ahamiyati yuqori bo'lgan maxsus sinfidir.
Tasavvur qiling, korxonaning $m$ ta omborida bir jinsli mahsulot saqlanmoqda, va bu mahsulotni $n$ ta iste'molchiga (do'konlarga) yetkazib berish kerak. Har bir ombordan har bir do'konga 1 birlik yuk tashish narxi ma'lum.

**Asosiy maqsad:** Barcha iste'molchilar talabini to'liq qondirgan va omborlardagi zaxiralarni to'liq sarflagan holda **umumiy tashish xarajatlarini minimumga keltirish**!

Matematik tilda maqsad funksiyasi:
$$
L = \sum_{i=1}^m \sum_{j=1}^n c_{ij} x_{ij} \longrightarrow \min
$$

Chegaraviy shartlar:
$$
\sum_{j=1}^n x_{ij} = a_i \quad (i = 1, \dots, m), \qquad \sum_{i=1}^m x_{ij} = b_j \quad (j = 1, \dots, n), \qquad x_{ij} \ge 0
$$

bu yerda $a_i$ — $i$-ombor zaxirasi, $b_j$ — $j$-iste'molchi talabi, $c_{ij}$ — 1 birlik yukni tashish narxi, $x_{ij}$ — tashiladigan yuk miqdori.

---

## 1. Yopiq va Ochiq modellar

Transport masalasini yechishdan oldin zaxiralar va talablar yig'indisi taqqoslanadi:

1. **Yopiq model (Balanslashgan model):**
   $$
   \sum_{i=1}^m a_i = \sum_{j=1}^n b_j
   $$
   Jami ishlab chiqarish jami ehtiyojga teng. Masala darhol yechishga tayyor.

2. **Ochiq model (Balanslashmagan model):**
   - Agar $\sum a_i > \sum b_j$ (taklif ko'p): talabi $b_{n+1} = \sum a_i - \sum b_j$ bo'lgan **fiktiv iste'molchi** $B_{n+1}$ kiritiladi. Fiktiv iste'molchiga tashish narxlari $c_{i, n+1} = 0$ deb olinadi.
   - Agar $\sum a_i < \sum b_j$ (talab ko'p): zaxirasi $a_{m+1} = \sum b_j - \sum a_i$ bo'lgan **fiktiv ombor** $A_{m+1}$ kiritiladi ($c_{m+1, j} = 0$).

Natijada har qanday ochiq model doimo yopiq modelga keltiriladi!

---

## 2. Boshlang'ich tayanch rejani tuzish usullari

Masala jadvalida band (yuk bilan to'ldirilgan) kataklar soni aynimaganlik shartini qanoatlantirishi shart:
$$
N_{\text{band}} = m + n - 1
$$

Boshlang'ich reja tuzishning ikkita asosiy usuli bor:
1. **Shimoli-g'arbiy burchak usuli:** Jadvalning chap yuqori burchagidan boshlab navbatma-navbat zaxira va talablar yopib boriladi (narxlar hisobga olinmaydi, shuning uchun boshlang'ich reja xarajati ancha yuqori bo'ladi).
2. **Minimal xarajatlar usuli (Eng ma'qul usul):** Butun jadvaldagi eng arzon ($c_{ij}$ minimal bo'lgan) katak topiladi va unga maksimal mumkin bo'lgan yuk $\min(a_i, b_j)$ joylashtiriladi. So'ngra qolgan kataklar ichida eng arzoni to'ldiriladi. Bu usul dastlabki xarajatni optimal yechimga juda yaqin qilib beradi!

---

## 3. Potensiallar usuli (Optimallik mezoni)

Tuzilgan tayanch rejaning optimal (eng arzon) ekanligini tekshirish uchun **potensiallar usuli** qo'llaniladi:

1. Har bir satr uchun $u_i$ ($i = 1, \dots, m$) va har bir ustun uchun $v_j$ ($j = 1, \dots, n$) potensiallari kiritiladi.
2. **Barcha band kataklar uchun:**
   $$
   u_i + v_j = c_{ij}
   $$
   Tenglamalar soni $m + n - 1$ ta, noma'lumlar $m + n$ ta. Shuning uchun ixtiyoriy bitta potensial nol deb olinadi (odatda $u_1 = 0$). Qolgan barcha potensiallar birma-bir hisoblab topiladi.
3. **Barcha bo'sh kataklar uchun baho ($\Delta_{ij}$) hisoblanadi:**
   $$
   \Delta_{ij} = (u_i + v_j) - c_{ij}
   $$
4. **Optimallik sharti:**
   - Agar barcha bo'sh kataklarda **$\Delta_{ij} \le 0$** bo'lsa — joriy reja **OPTIMALDIR**! Xarajatlarni bundan ortiq kamaytirib bo'lmaydi.
   - Agar kamida bitta bo'sh katakda **$\Delta_{ij} > 0$** bo'lsa — reja optimal emas! Eng katta musbat baholi $\max \Delta_{ij}$ katak tanlanadi va unga yuk kiritish uchun **sikllar (qayta taqsimlash halqasi)** quriladi.

---

## 4. Qadamma-qadam to'liq yechilgan amaliy misol

**Masala:** 3 ta ta'minotchi $A_1, A_2, A_3$ zaxiralari $a = (50, 70, 80)$, 3 ta iste'molchi $B_1, B_2, B_3$ talablari $b = (60, 80, 60)$. Tashish narxlari matritsasi $C$:
$$
C = \begin{pmatrix} 2 & 5 & 3 \\ 1 & 4 & 6 \\ 8 & 3 & 4 \end{pmatrix}
$$
Optimal transport rejasini va minimal xarajatni toping.

### Yechish:

**1-qadam. Balansni tekshiramiz:**
$\sum a_i = 50 + 70 + 80 = 200$.
$\sum b_j = 60 + 80 + 60 = 200$.
Model yopiq! Band kataklar soni: $m + n - 1 = 3 + 3 - 1 = 5$ ta bo'lishi kerak.

**2-qadam. Minimal xarajatlar usulida boshlang'ich reja tuzamiz:**
1. Eng kichik narx: $c_{21} = 1$. Yuk: $\min(a_2, b_1) = \min(70, 60) = 60$.
   - $B_1$ talabi to'liq qondirildi ($60 - 60 = 0$). $A_2$ da $70 - 60 = 10$ yuk qoldi.
2. Qolgan arzon katak: $c_{11}$ kerak emas (1-ustun yopilgan), keyingisi $c_{13} = 3$ yoki $c_{32} = 3$.
   - $c_{32} = 3$ ga: $\min(a_3, b_2) = \min(80, 80) = 80$.
   - $B_2$ talabi to'liq qondirildi ($80 - 80 = 0$). $A_3$ zaxirasi tugadi ($80 - 80 = 0$).
3. Keyingi arzon: $c_{13} = 3$. Unga: $\min(a_1, b_3) = \min(50, 60) = 50$.
   - $A_1$ zaxirasi tugadi. $B_3$ da $60 - 50 = 10$ talab qoldi.
4. $A_2$ dagi qolgan 10 ta yukni $c_{23} = 6$ katakka joylaymiz: yuk $10$.
   - $B_3$ talabi to'liq qondirildi ($10 - 10 = 0$).

Boshlang'ich reja matritsasi $X_0$:
$$
X_0 = \begin{pmatrix} 0 & 0 & 50 \\ 60 & 0 & 10 \\ 0 & 80 & 0 \end{pmatrix}
$$
Band kataklar soni: 4 ta! Lekin bizga 5 ta kerak ($m+n-1 = 5$).
Ayniganlikni bartaraf etish uchun arzon bo'sh katakka (masalan, $c_{11} = 2$ yoki $c_{22} = 4$) **$0$ (nol miqdordagi fiktiv yuk)** qo'yamiz.
$(2, 2)$ katakka $0$ qo'yamiz. Band kataklar 5 ta bo'ldi.

Boshlang'ich xarajat:
$$
L_0 = 50 \cdot 3 + 60 \cdot 1 + 10 \cdot 6 + 80 \cdot 3 = 150 + 60 + 60 + 240 = 510
$$

---

**3-qadam. Potensiallarni hisoblaymiz:**
Band kataklar uchun $u_i + v_j = c_{ij}$:
- $u_2 = 0$ deb olaylik.
- $(2, 1)$ band: $u_2 + v_1 = 1 \implies 0 + v_1 = 1 \implies v_1 = 1$.
- $(2, 2)$ band: $u_2 + v_2 = 4 \implies 0 + v_2 = 4 \implies v_2 = 4$.
- $(2, 3)$ band: $u_2 + v_3 = 6 \implies 0 + v_3 = 6 \implies v_3 = 6$.
- $(1, 3)$ band: $u_1 + v_3 = 3 \implies u_1 + 6 = 3 \implies u_1 = -3$.
- $(3, 2)$ band: $u_3 + v_2 = 3 \implies u_3 + 4 = 3 \implies u_3 = -1$.

Potensiallar:
$$
u = (-3, \; 0, \; -1), \qquad v = (1, \; 4, \; 6)
$$

---

**4-qadam. Bo'sh kataklar bahosini tekshiramiz ($\Delta_{ij} = u_i + v_j - c_{ij}$):**
- $(1, 1)$: $\Delta_{11} = u_1 + v_1 - c_{11} = -3 + 1 - 2 = -4 \le 0$ (OK)
- $(1, 2)$: $\Delta_{12} = u_1 + v_2 - c_{12} = -3 + 4 - 5 = -4 \le 0$ (OK)
- $(3, 1)$: $\Delta_{31} = u_3 + v_1 - c_{31} = -1 + 1 - 8 = -8 \le 0$ (OK)
- $(3, 3)$: $\Delta_{33} = u_3 + v_3 - c_{33} = -1 + 6 - 4 = \mathbf{+1} > 0$ (**Musbat baho!**)

Reja optimal emas! $(3, 3)$ katakka yuk kiritish umumiy xarajatni kamaytiradi.

---

**5-qadam. Qayta taqsimlash siklini (halqasini) quramiz:**
$(3, 3)$ bo'sh katakdan boshlab faqat band kataklar bo'ylab to'g'ri burchakli sikl quramiz:
$$
(3, 3) [+] \longrightarrow (3, 2) [-] \longrightarrow (2, 2) [+] \longrightarrow (2, 3) [-] \longrightarrow (3, 3)
$$
Manfiy ishorali kataklardagi yuklar:
- $(3, 2)$ katakda: $80$
- $(2, 3)$ katakda: $10$

Siljitish miqdori: $\theta = \min(80, 10) = 10$.
Sikl bo'yicha $\theta = 10$ ni qo'shamiz va ayiramiz:
- $(3, 3): 0 + 10 = 10$
- $(3, 2): 80 - 10 = 70$
- $(2, 2): 0 + 10 = 10$
- $(2, 3): 10 - 10 = 0$ (katak bo'shaydi)

Yangi reja $X_1$:
$$
X_1 = \begin{pmatrix} 0 & 0 & 50 \\ 60 & 10 & 0 \\ 0 & 70 & 10 \end{pmatrix}
$$

Yangi xarajat:
$$
L_1 = 50 \cdot 3 + 60 \cdot 1 + 10 \cdot 4 + 70 \cdot 3 + 10 \cdot 4 = 150 + 60 + 40 + 210 + 40 = 500
$$
Xarajat $510$ dan $500$ ga kamaydi!

Yangi potensiallar bilan tekshirilganda barcha $\Delta_{ij} \le 0$ bo'ladi va reja **mutlaq optimal** deb topiladi!

**Javob:**
Minimal umumiy xarajat: $L_{\min} = 500$ sh.b.
Optimal taqsimot: $A_1 \to B_3$ ga 50; $A_2 \to B_1$ ga 60, $B_2$ ga 10; $A_3 \to B_2$ ga 70, $B_3$ ga 10 birlik yuk.

---

## 5. Talabalar yo'l qo'yadigan asosiy xatolar

> [!WARNING] Amaliyotdagi xatolar
> 1. **Balansni tekshirmaslik:** Masalani boshlashdan oldin $\sum a_i = \sum b_j$ shartini tekshirmasdan darhol yechishga kirishish. Agar ular teng bo'lmasa, fiktiv satr yoki ustun qo'shilishi shart.
> 2. **Aynigan rejani payqamaslik:** Agar band kataklar soni $m + n - 1$ dan kam bo'lsa, potensiallarni bir qiymatli topib bo'lmaydi. Bo'sh katakka $0$ yuk qo'yish zarur.
> 3. **Noto'g'ri sikl qurish:** Siklning har bir uchi faqat band katakda bo'lishi va burilish burchaklari qat'iy $90^\circ$ bo'lishi kerak. Diagonallar bo'yicha yurish taqiqlanadi!

---

## 6. Mustaqil yechish uchun amaliy mashqlar

1. Zaxiralar: $a = (40, 60)$, talablar: $b = (50, 50)$, narxlar: $C = \begin{pmatrix} 3 & 1 \\ 2 & 4 \end{pmatrix}$.
   - *Javob:* Minimal xarajatlar usulida darhol optimal reja chiqadi: $x_{12} = 40, x_{21} = 50, x_{22} = 10$. Minimal xarajat: $L_{\min} = 40(1) + 50(2) + 10(4) = 180$.
