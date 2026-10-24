---
title: "Chiziqli algebraik tenglamalar sistemalari (CHATS) va ularni yechishning 4 xil usuli"
module: "chiziqli-algebra"
order: 4
description: "CHATS turlari, Kronekker-Kapelli teoremasi, 4 ta klassik yechish usuli (Kramer, Matritsa usuli, Gauss, Gauss-Jordan), bir jinsli sistemalar va FYS."
---

## Kirish: CHATS nima uchun chiziqli algebraning yuragi?

Muhandislik, iqtisodiyot (masalan, Leontyevning tarmoqlararo balansi), elektr zanjirlari hisobi (Kirxgof qonunlari) va hatto kompyuter grafikasi asosida doimo chiziqli tenglamalar sistemalari yotadi.

Umumiy holda $m$ ta tenglama va $n$ ta noma'lumdan iborat sistema quyidagicha yoziladi:

$$
\begin{cases}
a_{11}x_1 + a_{12}x_2 + \dots + a_{1n}x_n = b_1 \\
a_{21}x_1 + a_{22}x_2 + \dots + a_{2n}x_n = b_2 \\
\dots\dots\dots\dots\dots\dots\dots\dots\dots\dots\dots \\
a_{m1}x_1 + a_{m2}x_2 + \dots + a_{mn}x_n = b_m
\end{cases}
$$

### Matritsaviy ko'rinishi:
Ushbu ulkan sistemani qisqa va qulay bitta matritsali tenglama ko'rinishida yozish mumkin:

$$
A \cdot X = B
$$

- $A$ — koeffitsiyentlar matritsasi ($m \times n$);
- $X = \begin{pmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end{pmatrix}$ — noma'lumlar ustun-vektori ($n \times 1$);
- $B = \begin{pmatrix} b_1 \\ b_2 \\ \vdots \\ b_m \end{pmatrix}$ — ozod hadlar ustun-vektori ($m \times 1$).

---

## 1. Yechimning mavjudligi: Kronekker-Kapelli teoremasi

Sistemani yechishga kirishishdan oldin, uning yechimi bormi, yagona bormi yoki cheksiz ko'pmi ekanligini aniqlash shart.

Kengaytirilgan matritsa: $\bar{A} = (A \mid B)$ — bu asosiy matritsaga ozod hadlar ustuni qo'shilgan matritsa.

> **Kronekker-Kapelli teoremasi:** Chiziqli tenglamalar sistemasi yechimga ega bo'lishi (birgalikda bo'lishi) uchun asosiy matritsa rangi kengaytirilgan matritsa rangiga teng bo'lishi **zarur va yetarlidir**:
>
> 
$$
> \operatorname{rank}(A) = \operatorname{rank}(A \mid B)
> 
$$

Uchta mumkin bo'lgan holat mavjud:
1. **$\operatorname{rank}(A) < \operatorname{rank}(A \mid B)$:** Sistema **birgalikda emas** (yechimga ega emas! Masalan, $0x_1 + \dots + 0x_n = 5$ kabi ziddiyat hosil bo'ladi).
2. **$\operatorname{rank}(A) = \operatorname{rank}(A \mid B) = n$ (noma'lumlar soniga teng):** Sistema **birgalikda va aniqlangan** (yagona yechim mavjud).
3. **$\operatorname{rank}(A) = \operatorname{rank}(A \mid B) = r < n$ (rang noma'lumlar sonidan kichik):** Sistema **birgalikda va noaniq** (cheksiz ko'p yechimga ega!). Bunda $r$ ta noma'lum asosiy (bazis), qolgan $n - r$ tasi esa erkin noma'lum deb olinadi.

---

## 2. CHATS ni yechishning 4 xil usuli (Taqqoslama tahlil)

| Usul nomi | Qo'llanilish sharti | Afzalligi | Kamchiligi |
|---|---|---|---|
| **1. Kramer qoidasi** | Faqat kvadrat sistema ($m=n$) va $\Delta \neq 0$ | Aniq formulalar ($x_i = \frac{\Delta_i}{\Delta}$), qo'lda hisoblash oson | $\Delta = 0$ da ishlamaydi, $n \ge 4$ da determinant hisoblash juda og'ir |
| **2. Matritsa usuli** | Faqat kvadrat sistema ($m=n$) va $\det A \neq 0$ | $X = A^{-1} B$, ko'p $B$ vektorlari uchun bir martalik $A^{-1}$ yetarli | $\det A = 0$ da ishlamaydi, teskari matritsa topish ko'p vaqt oladi |
| **3. Gauss usuli** | **Ixtiyoriy** $m \times n$ sistema | Pog'onasimon ko'rinish va teskari yurish, cheksiz yechimlarni ham topadi | Teskari yurishda ketma-ket almashtirish talab qilinadi |
| **4. Gauss-Jordan usuli** | **Ixtiyoriy** $m \times n$ sistema | $(A \mid B) \sim (E \mid X)$, to'g'ridan-to'g'ri ildizlar chiqadi, teskari yurish kerak emas | Har bir ustunni yuqori va pastdan $0$ qilish ko'proq elementar amal talab qiladi |

---

## 3. 1-usul: Kramer qoidasi

Agar $\Delta = \det A \neq 0$ bo'lsa:

$$
x_1 = \frac{\Delta_1}{\Delta}, \quad x_2 = \frac{\Delta_2}{\Delta}, \quad \dots, \quad x_n = \frac{\Delta_n}{\Delta}
$$

bu yerda $\Delta_j$ — asosiy determinantdagi $j$-ustun o'rniga ozod hadlar $B$ ustuni qo'yilgan determinant.

---

## 4. 2-usul: Matritsa usuli ($X = A^{-1} \cdot B$)

Matritsali tenglama $A \cdot X = B$ ning ikkala tomonini chapdan $A^{-1}$ ga ko'paytiramiz:

$$
A^{-1}(AX) = A^{-1}B \implies EX = A^{-1}B \implies X = A^{-1} \cdot B
$$

bu yerda $A^{-1} = \frac{1}{\det A} C^T$, $C^T$ — algebraik to'ldiruvchilarning transponirlangan matritsasidir.

---

## 5. 3-usul: Gauss usuli (Pog'onasimon ko'rinish va teskari yurish)

Kengaytirilgan $(A \mid B)$ matritsaning satrlari ustida elementar almashtirishlar bajarib, bosh diagonal tagidagi barcha elementlar $0$ ga aylantiriladi (to'g'ri yurish).
So'ngra oxirgi satrdan boshlab yuqoriga qarab noma'lumlar topiladi (teskari yurish).

---

## 6. 4-usul: Gauss-Jordan usuli ($(A \mid B) \sim (E \mid X)$)

Gauss usulining rivojlangan ko'rinishi bo'lib, elementar almashtirishlar nafaqat bosh diagonal ostida, balki **bosh diagonal ustida ham** bajariladi. Natijada chap tomonda to'liq birlik $E$ matritsa hosil bo'ladi:

$$
(A \mid B) \xrightarrow{\text{satr amallari}} (E \mid X) = \begin{pmatrix}
1 & 0 & \dots & 0 & \mid & x_1 \\
0 & 1 & \dots & 0 & \mid & x_2 \\
\vdots & \vdots & \ddots & \vdots & \mid & \vdots \\
0 & 0 & \dots & 1 & \mid & x_n
\end{pmatrix}
$$

---

## 7. Bir xil $3 \times 3$ sistemani 4 ta usul bilan parallel yechish

Universitet imtihonida talabalarga ko'pincha bitta masalani turli usullarda yechish topshiriladi. Quyidagi namunani barcha 4 ta usulda yechamiz:

$$
\begin{cases}
x + 2y + z = 8 \\
2x - y + z = 3 \\
x + y - z = 0
\end{cases}
$$

Matritsa shakli:
$$
A = \begin{pmatrix} 1 & 2 & 1 \\ 2 & -1 & 1 \\ 1 & 1 & -1 \end{pmatrix}, \quad B = \begin{pmatrix} 8 \\ 3 \\ 0 \end{pmatrix}
$$

### A) Kramer qoidasi bilan:
1. $\Delta = \begin{vmatrix} 1 & 2 & 1 \\ 2 & -1 & 1 \\ 1 & 1 & -1 \end{vmatrix} = [1 + 2 + 2] - [-1 + 1 - 4] = 5 - (-4) = 9 \neq 0$.
2. $\Delta_x = \begin{vmatrix} 8 & 2 & 1 \\ 3 & -1 & 1 \\ 0 & 1 & -1 \end{vmatrix} = 8(1 - 1) - 2(-3) + 1(3) = 0 + 6 + 3 = 9 \implies x = \frac{9}{9} = 1$.
3. $\Delta_y = \begin{vmatrix} 1 & 8 & 1 \\ 2 & 3 & 1 \\ 1 & 0 & -1 \end{vmatrix} = 1(-3) - 8(-3) + 1(-3) = -3 + 24 - 3 = 18 \implies y = \frac{18}{9} = 2$.
4. $\Delta_z = \begin{vmatrix} 1 & 2 & 8 \\ 2 & -1 & 3 \\ 1 & 1 & 0 \end{vmatrix} = 1(-3) - 2(-3) + 8(3) = -3 + 6 + 24 = 27 \implies z = \frac{27}{9} = 3$.

---

### B) Matritsa usuli bilan ($X = A^{-1} B$):
1. $\det A = 9$.
2. Algebraik to'ldiruvchilar $A_{ij}$:
   - $A_{11} = 0, \quad A_{12} = 3, \quad A_{13} = 3$
   - $A_{21} = 3, \quad A_{22} = -2, \quad A_{23} = 1$
   - $A_{31} = 3, \quad A_{32} = 1, \quad A_{33} = -5$
3. Transponirlangan biriktirilgan matritsa $C^T$:
   
$$
   A^{-1} = \frac{1}{9} \begin{pmatrix} 0 & 3 & 3 \\ 3 & -2 & 1 \\ 3 & 1 & -5 \end{pmatrix}
   
$$
4. $X = A^{-1} \cdot B$:
   
$$
   \begin{pmatrix} x \\ y \\ z \end{pmatrix} = \frac{1}{9} \begin{pmatrix} 0 & 3 & 3 \\ 3 & -2 & 1 \\ 3 & 1 & -5 \end{pmatrix} \begin{pmatrix} 8 \\ 3 \\ 0 \end{pmatrix} = \frac{1}{9} \begin{pmatrix} 0(8) + 3(3) + 3(0) \\ 3(8) + (-2)(3) + 1(0) \\ 3(8) + 1(3) + (-5)(0) \end{pmatrix} = \frac{1}{9} \begin{pmatrix} 9 \\ 18 \\ 27 \end{pmatrix} = \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}
   
$$

---

### C) Gauss usuli bilan (Pog'onasimon va teskari yurish):
Kengaytirilgan matritsa:
$$
\begin{pmatrix}
1 & 2 & 1 & \mid & 8 \\
2 & -1 & 1 & \mid & 3 \\
1 & 1 & -1 & \mid & 0
\end{pmatrix}
\xrightarrow{\substack{S_2 - 2S_1 \\ S_3 - S_1}}
\begin{pmatrix}
1 & 2 & 1 & \mid & 8 \\
0 & -5 & -1 & \mid & -13 \\
0 & -1 & -2 & \mid & -8
\end{pmatrix}
$$
$S_2$ bilan $S_3$ ning o'rnini almashtirib, ishorasini musbat qilamiz:
$$
\begin{pmatrix}
1 & 2 & 1 & \mid & 8 \\
0 & 1 & 2 & \mid & 8 \\
0 & 5 & 1 & \mid & 13
\end{pmatrix}
\xrightarrow{S_3 - 5S_2}
\begin{pmatrix}
1 & 2 & 1 & \mid & 8 \\
0 & 1 & 2 & \mid & 8 \\
0 & 0 & -9 & \mid & -27
\end{pmatrix}
$$
**Teskari yurish:**
- 3-satrdan: $-9z = -27 \implies z = 3$.
- 2-satrdan: $y + 2(3) = 8 \implies y = 2$.
- 1-satrdan: $x + 2(2) + 3 = 8 \implies x + 7 = 8 \implies x = 1$.

---

### D) Gauss-Jordan usuli bilan ($(A \mid B) \sim (E \mid X)$):
Pog'onasimon matritsadan davom ettirib, diagonal ustini ham nolga aylantiramiz:
$$
\begin{pmatrix}
1 & 2 & 1 & \mid & 8 \\
0 & 1 & 2 & \mid & 8 \\
0 & 0 & 1 & \mid & 3
\end{pmatrix}
\xrightarrow{\substack{S_1 - S_3 \\ S_2 - 2S_3}}
\begin{pmatrix}
1 & 2 & 0 & \mid & 5 \\
0 & 1 & 0 & \mid & 2 \\
0 & 0 & 1 & \mid & 3
\end{pmatrix}
\xrightarrow{S_1 - 2S_2}
\begin{pmatrix}
1 & 0 & 0 & \mid & 1 \\
0 & 1 & 0 & \mid & 2 \\
0 & 0 & 1 & \mid & 3
\end{pmatrix}
$$
Birlik matritsa yonidagi ustundan to'g'ridan-to'g'ri o'qiymiz:
$$
x = 1, \quad y = 2, \quad z = 3
$$

**Xulosa:** To'rttala usul ham aynan bir xil to'g'ri natijani beradi: $(x, y, z) = (1, 2, 3)$.

---

## 8. Bir jinsli tenglamalar sistemasi va FYS

Ozod hadlari nolga teng bo'lgan sistema: $A \cdot X = 0$.

1. **Trivial yechim:** $x_1 = x_2 = \dots = x_n = 0$ doimo mavjud.
2. **Notrivial yechim mavjudligi:**
   - Kvadrat sistemada noldan farqli yechim bo'lishi uchun $\det A = 0$ bo'lishi shart.
   - Umumiy holda: $\operatorname{rank}(A) = r < n$.
3. **Fundamental yechimlar sistemasi (FYS):**
   Erkin noma'lumlarga navbati bilan $(1, 0, \dots, 0)$, $(0, 1, \dots, 0)$ qiymatlar berib, $k = n - r$ ta chiziqli erkli yechimlar vektori $E_1, E_2, \dots, E_k$ topiladi.
   Sistemaning ixtiyoriy umumiy yechimi:
   
$$
   X = c_1 E_1 + c_2 E_2 + \dots + c_k E_k, \quad c_i \in \mathbb{R}
   
$$

---

## 💡 O'z-o'zini tekshirish (Samoproverka algoritmi)

Topilgan javobingizni ($x=1, y=2, z=3$) berilgan **barcha tenglamalarga** qo'ying:
1. $1 + 2(2) + 3 = 1 + 4 + 3 = 8 \quad \checkmark$
2. $2(1) - 2 + 3 = 2 - 2 + 3 = 3 \quad \checkmark$
3. $1 + 2 - 3 = 0 \quad \checkmark$

Agar barcha tengliklar to'g'ri chiqsa, yechimingiz 100% kafolatlangan!

---

## ✍️ Mustaqil yechish uchun mashqlar

1. Sistemani o'zingiz tanlagan 2 ta usulda yeching va natijalarni taqqoslang:
   
$$
   \begin{cases}
   2x - y + z = 2 \\
   3x + 2y + 2z = -2 \\
   x - 2y + z = 1
   \end{cases}
   
$$
2. Kronekker-Kapelli teoremasi bo'yicha sistemaning birgalikda ekanligini tekshiring:
   
$$
   \begin{cases}
   x + 2y - z = 3 \\
   2x + 4y - 2z = 7
   \end{cases}
   
$$

<details style="margin-top: 1rem; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); cursor: pointer;">
  <summary style="font-weight: 700; color: var(--primary);">Javoblar va ko'rsatmalar</summary>
  <div style="margin-top: 0.75rem; padding-top: 0.75rem; border-top: 1px solid var(--border-color);">
    <p><strong>1-masala:</strong> $\Delta = -4$. $\Delta_x = 4 \implies x = -1$. $\Delta_y = -4 \implies y = 1$. $\Delta_z = -4 \implies z = 5$. Javob: $(-1, 1, 5)$. Tekshirish: $2(-1) - 1 + 5 = 2 \checkmark$.</p>
    <p><strong>2-masala:</strong> 1-satrni 2 ga ko'paytirsak: $2x + 4y - 2z = 6$. 2-tenglamada esa $7$. $6 \neq 7$ — ziddiyat! $\operatorname{rank}(A) = 1 \neq \operatorname{rank}(A|B) = 2$. Sistema birgalikda emas (yechim yo'q).</p>
  </div>
</details>
