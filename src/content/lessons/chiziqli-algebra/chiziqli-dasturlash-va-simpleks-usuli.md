---
title: "Chiziqli dasturlash va Simpleks usuli: Optimal yechim algoritmi"
module: "chiziqli-algebra"
order: 20
description: "Chiziqli dasturlashning kanonik shakli, qo'shimcha o'zgaruvchilar, simpleks jadvali, yetakchi element va ko'p o'lchovli optimallashtirish."
---

## Kirish: Simpleks usuli nima va u nega kashf qilingan?

1947 yilda amerikalik matematik **Jorj Dantsig (George Dantzig)** tomonidan yaratilgan **Simpleks usuli** insoniyat tarixidagi eng buyuk 10 ta algoritm qatoriga kiradi.

Ishlab chiqarish korxonasini tasavvur qiling: xomashyo, dastgoh vaqti va ishchilar soati cheklangan. Korxona bir nechta turdagi mahsulot ishlab chiqaradi. Mahsulotlar miqdorini shunday taqsimlash kerakki, umumiy sof **foyda maksimal bo'lsin**.

Agar o'zgaruvchilar 2 ta bo'lsa, buni oddiy grafik chizib tekislikda yechish mumkin. Lekin real iqtisodiyotda o'zgaruvchilar yuzlab va minglab bo'ladi. Simpleks usuli — ko'p o'lchovli qavariq ko'pyoqlikning qirralari bo'ylab burchakdan-burchakka sakrab, **eng optimal cho'qqini bir necha qadamda topib beruvchi universal algoritm**dir!

---

## 1. Chiziqli dasturlash masalasining kanonik shakli

Chiziqli dasturlash masalasi umumiy holda quyidagicha qo'yiladi:
Maqsad funksiyasining maksimumini (yoki minimumini) topish:
$$
F = c_1 x_1 + c_2 x_2 + \dots + c_n x_n \longrightarrow \max
$$

Chegaraviy shartlar (resurslar cheklovi):
$$
\begin{cases}
a_{11} x_1 + a_{12} x_2 + \dots + a_{1n} x_n \le b_1 \\
a_{21} x_1 + a_{22} x_2 + \dots + a_{2n} x_n \le b_2 \\
\dots\dots\dots\dots\dots\dots\dots\dots\dots\dots \\
a_{m1} x_1 + a_{m2} x_2 + \dots + a_{mn} x_n \le b_m
\end{cases}
$$
Tabiiy iqtisodiy shart: barcha noma'lumlar manfiy bo'lmasligi shart:
$$
x_j \ge 0 \quad (j = 1, \dots, n)
$$

### Kanonik shaklga o'tish (Qo'shimcha o'zgaruvchilar kiritish)
Tengsizliklarni tenglikka aylantirish uchun har bir tengsizlikka nomanfiy **qo'shimcha o'zgaruvchilar (Slack variables)** $x_{n+1}, x_{n+2}, \dots, x_{n+m} \ge 0$ qo'shiladi:
$$
\begin{cases}
a_{11} x_1 + a_{12} x_2 + \dots + a_{1n} x_n + x_{n+1} = b_1 \\
a_{21} x_1 + a_{22} x_2 + \dots + a_{2n} x_n + x_{n+2} = b_2 \\
\dots\dots\dots\dots\dots\dots\dots\dots\dots\dots \\
a_{m1} x_1 + a_{m2} x_2 + \dots + a_{mn} x_n + x_{n+m} = b_m
\end{cases}
$$
Qo'shimcha o'zgaruvchilar foyda bermaydi, shuning uchun maqsad funksiyasida ularning koeffitsiyenti nol bo'ladi ($0 \cdot x_{n+i}$).
Bu o'zgaruvchilar boshlang'ich **bazis o'zgaruvchilar** bo'lib xizmat qiladi!

---

## 2. Simpleks jadvali va uning elementlari

Simpleks masalasi maxsus jadvalga tushiriladi:

| Bazis | $c_b$ | $b$ (Ozod had) | $x_1$ | $x_2$ | $\dots$ | $x_n$ | $\theta$ (Nisbat) |
|---|---|---|---|---|---|---|---|
| $x_{n+1}$ | $0$ | $b_1$ | $a_{11}$ | $a_{12}$ | $\dots$ | $a_{1n}$ | $b_1 / a_{1k}$ |
| $x_{n+2}$ | $0$ | $b_2$ | $a_{21}$ | $a_{22}$ | $\dots$ | $a_{2n}$ | $b_2 / a_{2k}$ |
| **Indeks ($F$)** | | $F_0$ | $\Delta_1$ | $\Delta_2$ | $\dots$ | $\Delta_n$ | |

### Baholar satri (Indeks satri $\Delta_j$):
$$
\Delta_j = \sum_{i=1}^m c_{bi} \cdot a_{ij} - c_j
$$
(yoki darsliklarga qarab $\Delta_j = c_j - \sum c_{bi} a_{ij}$, bu holda optimallik ishorasi qarama-qarshi bo'ladi).

---

## 3. Simpleks algoritmining 4 bosqichi

1. **Optimallik mezoni ($F \to \max$ masalasi uchun):**
   - Agar indeks satrida barcha $\Delta_j \ge 0$ bo'lsa (yoki $\Delta_j \le 0$ ta'rif bo'yicha), joriy reja **OPTIMALDIR**! Yechim topildi.
   - Agar manfiy baholar mavjud bo'lsa, absolut qiymati eng katta bo'lgan manfiy baho tanlanadi. Bu ustun **hal qiluvchi (yetakchi) ustun** bo'ladi (ya'ni yangi bazisga kiruvchi o'zgaruvchi).

2. **Chiqib ketuvchi bazisni aniqlash ($\theta$ nisbat):**
   Hal qiluvchi ustundagi qat'iy musbat elementlar ($a_{ik} > 0$) uchun ozod hadlarning nisbati hisoblanadi:
   $$
   \theta_i = \frac{b_i}{a_{ik}} \quad (a_{ik} > 0)
   $$
   Eng kichik musbat nisbat $\min \theta_i$ ga mos satr **hal qiluvchi (yetakchi) satr** deb tanlanadi. Bu satrdagi o'zgaruvchi bazisdan chiqib ketadi.

3. **Yetakchi element (Pivot element):**
   Yetakchi satr va yetakchi ustun kesishmasidagi son $a_{rk}$ **yetakchi element** deyiladi.

4. **Gauss-Jordan qadami orqali yangi jadvalga o'tish:**
   - Yetakchi satrning barcha elementlari yetakchi element $a_{rk}$ ga bo'linadi.
   - Qolgan barcha satrlarda Gauss-Jordan qoidasi (to'rtburchak qoidasi) orqali yetakchi ustun elementlari $0$ ga keltiriladi.

---

## 4. Qadamma-qadam to'liq yechilgan amaliy misol

**Masala:** Quyidagi chiziqli dasturlash masalasini simpleks usuli bilan yeching:

Maksimal daromadni toping:
$$
F = 2x_1 + 3x_2 \longrightarrow \max
$$

Cheklovlar:
$$
\begin{cases}
x_1 + 2x_2 \le 8 \\
3x_1 + 2x_2 \le 12 \\
x_1 \ge 0, \; x_2 \ge 0
\end{cases}
$$

### Yechish:

**1-qadam. Kanonik shaklga keltiramiz:**
Qo'shimcha $x_3 \ge 0$ va $x_4 \ge 0$ o'zgaruvchilarini qo'shamiz:
$$
\begin{cases}
x_1 + 2x_2 + x_3 = 8 \\
3x_1 + 2x_2 + x_4 = 12
\end{cases}
$$
Maqsad funksiyasi:
$$
F = 2x_1 + 3x_2 + 0x_3 + 0x_4 \longrightarrow \max
$$
Boshlang'ich bazis: $x_3, x_4$. Boshlang'ich reja: $x_1 = 0, x_2 = 0, x_3 = 8, x_4 = 12$. Funksiya qiymati: $F = 0$.

---

**2-qadam. 1-Simpleks jadvalini tuzamiz:**

Baholar satrini $\Delta_j = \sum c_{bi} a_{ij} - c_j$ orqali hisoblaymiz:
- $\Delta_1 = 0(1) + 0(3) - 2 = -2$
- $\Delta_2 = 0(2) + 0(2) - 3 = -3$
- $\Delta_3 = 0, \quad \Delta_4 = 0$

| Bazis | $c_b$ | $b$ | $x_1$ ($c=2$) | $x_2$ ($c=3$) | $x_3$ ($c=0$) | $x_4$ ($c=0$) | $\theta = b / a_{ik}$ |
|---|---|---|---|---|---|---|---|
| $x_3$ | $0$ | $8$ | $1$ | **2** | $1$ | $0$ | $8 / 2 = 4$ |
| $x_4$ | $0$ | $12$ | $3$ | $2$ | $0$ | $1$ | $12 / 2 = 6$ |
| **$F$** | | **$0$** | **$-2$** | **$-3$** | **$0$** | **$0$** | |

- Baholar satrida eng kichik manfiy son: $\Delta_2 = -3$. Demak, **$x_2$ ustuni yetakchi ustun** (bazisga kiradi).
- $\theta$ nisbatlar: $8/2 = 4$ va $12/2 = 6$. Minimal nisbat: $4$ ($x_3$ satri). Demak, **$x_3$ bazisdan chiqadi**.
- Yetakchi element: **$a_{12} = 2$**.

---

**3-qadam. Gauss-Jordan almashtirishi va 2-jadval:**

1. 1-satrni $2$ ga bo'lamiz:
   $b = 4, \; x_1 = 1/2, \; x_2 = 1, \; x_3 = 1/2, \; x_4 = 0$. Yangi bazis: $x_2$ ($c_b = 3$).
2. 2-satrdan yangi 1-satrning $2$ ko'paytmasini ayiramiz:
   $b = 12 - 2(4) = 4$;
   $x_1 = 3 - 2(1/2) = 2$;
   $x_2 = 2 - 2(1) = 0$;
   $x_3 = 0 - 2(1/2) = -1$;
   $x_4 = 1 - 2(0) = 1$.
3. Indeks satrini yangilaymiz:
   $F = 3(4) + 0(4) = 12$.
   $\Delta_1 = 3(1/2) + 0(2) - 2 = 1.5 - 2 = -0.5$.
   $\Delta_2 = 3(1) - 3 = 0$.
   $\Delta_3 = 3(1/2) - 0 = 1.5$.
   $\Delta_4 = 0$.

| Bazis | $c_b$ | $b$ | $x_1$ | $x_2$ | $x_3$ | $x_4$ | $\theta = b / a_{ik}$ |
|---|---|---|---|---|---|---|---|
| $x_2$ | $3$ | $4$ | $1/2$ | $1$ | $1/2$ | $0$ | $4 / (1/2) = 8$ |
| $x_4$ | $0$ | $4$ | **2** | $0$ | $-1$ | $1$ | $4 / 2 = \mathbf{2}$ |
| **$F$** | | **$12$** | **$-0.5$** | **$0$** | **$1.5$** | **$0$** | |

Hali ham bitta manfiy baho bor: $\Delta_1 = -0.5$.
- Yetakchi ustun: $x_1$.
- Nisbatlar: $4 / (1/2) = 8$ va $4 / 2 = 2$. Minimal nisbat: $2$ ($x_4$ satri).
- $x_4$ bazisdan chiqadi, o'rniga $x_1$ kiradi. Yetakchi element: **$2$**.

---

**4-qadam. 3-Simpleks jadvali (Yakuniy qadam):**

1. 2-satrni $2$ ga bo'lamiz:
   $b = 2, \; x_1 = 1, \; x_2 = 0, \; x_3 = -1/2, \; x_4 = 1/2$. ($c_b = 2$).
2. 1-satrdan yangi 2-satrning $1/2$ ko'paytmasini ayiramiz:
   $b = 4 - (1/2)(2) = 3$;
   $x_1 = 1/2 - 1/2(1) = 0$;
   $x_2 = 1 - 0 = 1$;
   $x_3 = 1/2 - (1/2)(-1/2) = 1/2 + 1/4 = 3/4$;
   $x_4 = 0 - (1/2)(1/2) = -1/4$.
3. Indeks satrini hisoblaymiz:
   $F = 3(3) + 2(2) = 9 + 4 = 13$.
   $\Delta_1 = 3(0) + 2(1) - 2 = 0$.
   $\Delta_2 = 3(1) + 2(0) - 3 = 0$.
   $\Delta_3 = 3(3/4) + 2(-1/2) - 0 = 9/4 - 1 = 5/4 = 1.25 \ge 0$.
   $\Delta_4 = 3(-1/4) + 2(1/2) - 0 = -3/4 + 1 = 1/4 = 0.25 \ge 0$.

| Bazis | $c_b$ | $b$ | $x_1$ | $x_2$ | $x_3$ | $x_4$ |
|---|---|---|---|---|---|---|
| $x_2$ | $3$ | **3** | $0$ | $1$ | $3/4$ | $-1/4$ |
| $x_1$ | $2$ | **2** | $1$ | $0$ | $-1/2$ | $1/2$ |
| **$F$** | | **$13$** | **$0$** | **$0$** | **$1.25$** | **$0.25$** |

### Natija tahlili:
Barcha baholar nomanfiy ($\Delta_1 = 0, \Delta_2 = 0, \Delta_3 = 1.25, \Delta_4 = 0.25 \ge 0$).
Demak, **OPTIMAL YECHIM TOPILDI**!

Optimal reja:
$$
x_1^* = 2, \quad x_2^* = 3
$$
Maksimal daromad:
$$
F_{\max} = 2(2) + 3(3) = 13
$$

---

## 5. Talabalar yo'l qo'yadigan tuzoqlar

> [!WARNING] Amaliyotdagi xatolar
> 1. **Nisbat $\theta$ ni hisoblashda manfiy yoki nol songa bo'lish:** $\theta_i = \frac{b_i}{a_{ik}}$ faqatgina $a_{ik} > 0$ (qat'iy musbat) bo'lganda hisoblanadi! Agar $a_{ik} \le 0$ bo'lsa, bu satrga chiziqcha qo'yiladi.
> 2. **Yetakchi satrni almashtirishdagi arifmetik xatolar:** "To'rtburchak qoidasi"da kasrlar bilan ishlaganda adashish eng asosiy xatodir. Hisoblashlarni qisqarmas oddiy kasrlarda olib boring.
> 3. **Minimallashtirish masalalarida chalkashish:** Agar masala $F \to \min$ bo'lsa, maqsad funksiyasini $-1$ ga ko'paytirib, $F' = -F \to \max$ ga o'tkazish eng xavfsiz va qulay usuldir.

---

## 6. Mustaqil yechish uchun amaliy mashqlar

Simpleks usuli bilan yeching:
1. $F = 3x_1 + 5x_2 \to \max$, chegaralar: $\begin{cases} x_1 \le 4 \\ 2x_2 \le 12 \\ 3x_1 + 2x_2 \le 18 \\ x_1, x_2 \ge 0 \end{cases}$
   - *Javob:* $x_1^* = 2, x_2^* = 6 \implies F_{\max} = 3(2) + 5(6) = 36$.
