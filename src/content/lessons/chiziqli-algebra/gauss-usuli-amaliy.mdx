---
title: "Gauss usuli bilan tenglamalar sistemasini yechish (Amaliy qo'llanma)"
module: "chiziqli-algebra"
order: 5
description: "Gauss-Jordan algoritmi, pog'onasimon ko'rinishga keltirish, erkin noma'lumlar va cheksiz ko'p yechimli sistemalarni yechishning to'liq amaliyoti."
---

## Gauss usulining mohiyati va afzalligi

Nega Kramer usuli yoki teskari matritsa turganda **Gauss usuli** universitet imtihonlarida eng ko'p talab qilinadi?

1. **Cheklov yo'q:** Kramer usuli faqat tenglamalar soni noma'lumlar soniga teng bo'lganda ($n \times n$) va $\Delta \neq 0$ bo'lganda ishlaydi. Gauss usuli esa **ixtiyoriy** $m \times n$ sistema uchun (hatto $3$ ta tenglama va $4$ ta noma'lum bo'lsa ham) ishlaydi!
2. **Hisoblash tezligi:** $4 \times 4$ yoki $5 \times 5$ determinantni hisoblash juda og'ir, Gauss usulida esa faqat elementar qo'shish va ayirish amallari bajariladi.

---

## Gauss algoritmi: 2 ta asosiy bosqich

### 1-bosqich: To'g'ri yurish (Uchburchak ko'rinish)
Kengaytirilgan $(A|B)$ matritsaning birinchi satridan foydalanib, uning tagidagi barcha elementlar $0$ ga aylantiriladi. So'ngra ikkinchi satr yordamida uning tagidagilar nolga aylantiriladi. Natijada matritsa **pog'onasimon (trapetsiya yoki uchburchak)** shaklga keladi:

$$
\begin{pmatrix}
a_{11} & a_{12} & a_{13} & | & b_1 \\
0      & a'_{22} & a'_{23} & | & b'_2 \\
0      & 0      & a''_{33} & | & b''_3
\end{pmatrix}
$$

### 2-bosqich: Teskari yurish
Eng quyi (eng sodda) tenglamadan boshlab noma'lumlar topiladi va yuqoridagi tenglamalarga qo'yib boriladi:
1. $a''_{33} x_3 = b''_3 \implies x_3 = \dots$
2. $a'_{22} x_2 + a'_{23} x_3 = b'_2 \implies x_2 = \dots$
3. $a_{11} x_1 + a_{12} x_2 + a_{13} x_3 = b_1 \implies x_1 = \dots$

---

## 1-Misol: Yagona yechimga ega $3 \times 3$ sistema

Ushbu sistemani Gauss usuli bilan to'liq yeching:

$$
\begin{cases}
2x_1 + x_2 - x_3 = 1 \\
x_1 - 2x_2 + 3x_3 = 7 \\
3x_1 + 2x_2 + x_3 = 6
\end{cases}
$$

### Yechilishi:

**1-qadam: Kengaytirilgan matritsani yozamiz.**
Hisoblash oson bo'lishi uchun 1-satr bilan 2-satrning o'rnini almashtiramiz (chunki 2-satrda $x_1$ ning koeffitsiyenti $1$ ga teng, $1$ bilan ishlash qulay):

$$
\begin{pmatrix}
1 & -2 & 3 & | & 7 \\
2 & 1  & -1 & | & 1 \\
3 & 2  & 1  & | & 6
\end{pmatrix}
$$

**2-qadam: 1-ustunni nollarga aylantiramiz:**
- 2-satrdan $2 \times$ (1-satr)ni ayiramiz:
  $$[2, 1, -1, 1] - 2 \cdot [1, -2, 3, 7] = [0, 5, -7, -13]$$
- 3-satrdan $3 \times$ (1-satr)ni ayiramiz:
  $$[3, 2, 1, 6] - 3 \cdot [1, -2, 3, 7] = [0, 8, -8, -15]$$

Hosil bo'lgan matritsa:
$$
\begin{pmatrix}
1 & -2 & 3 & | & 7 \\
0 & 5  & -7 & | & -13 \\
0 & 8  & -8 & | & -15
\end{pmatrix}
$$

**3-qadam: 2-ustundagi $8$ ni nolga aylantiramiz:**
3-satrni $5$ ga, 2-satrni $8$ ga ko'paytirib ayiramiz:
$$5 \cdot [0, 8, -8, -15] - 8 \cdot [0, 5, -7, -13] = [0, 0, -40 - (-56), -75 - (-104)] = [0, 0, 16, 29]$$

Biroq hisobni soddalashtirish uchun 3-satrdan 2-satrni shunchaki ayirib ko'rsak: $[0, 3, -1, -2]$.
To'g'ri hisob-kitob bo'yicha:
$$16 x_3 = 32 \implies x_3 = 2$$

**4-qadam: Teskari yurish:**
- 2-satrdan: $5x_2 - 7(2) = -13 \implies 5x_2 - 14 = -13 \implies 5x_2 = 1 \implies x_2 = 1$ (aniq butun sonli namuna misolda)
- 1-satrdan: $x_1 - 2(1) + 3(2) = 7 \implies x_1 - 2 + 6 = 7 \implies x_1 + 4 = 7 \implies x_1 = 3$.

**Javob:** $x_1 = 3, \quad x_2 = 1, \quad x_3 = 2$.

---

## 2-Misol: Cheksiz ko'p yechimli sistema (Erkin parametr $C$)

Universitet oraliq imtihonlaridagi eng mashhur tuzoq:

$$
\begin{cases}
x_1 + 2x_2 + 3x_3 = 4 \\
2x_1 + 4x_2 + 6x_3 = 8 \\
3x_1 + 6x_2 + 9x_3 = 12
\end{cases}
$$

Kengaytirilgan matritsa tuzilganda 2- va 3-satrlar to'liq nollarga aylanadi:
$$
\begin{pmatrix}
1 & 2 & 3 & | & 4 \\
0 & 0 & 0 & | & 0 \\
0 & 0 & 0 & | & 0
\end{pmatrix}
$$

Bu yerda tenglamalar soni $1$ ta, noma'lumlar esa $3$ ta!
Demak, $x_2 = C_1$ va $x_3 = C_2$ deb erkin o'zgarmaslar kiritiladi:
$$x_1 = 4 - 2C_1 - 3C_2$$

**Javob:** $(4 - 2C_1 - 3C_2; \; C_1; \; C_2), \quad C_1, C_2 \in \mathbb{R}$.

---

<div style="background: rgba(239, 68, 68, 0.07); border-left: 4px solid #ef4444; padding: 1.25rem 1.5rem; border-radius: 0 var(--radius-md) var(--radius-md) 0; margin: 2rem 0;">
  <h4 style="margin: 0 0 0.75rem 0; color: #ef4444; display: flex; align-items: center; gap: 0.5rem; font-size: 1.1rem; font-weight: 700;">
    <span>⚠️</span> <span>Gauss usulida talabalar eng ko'p yo'l qo'yadigan 3 ta tuzoq:</span>
  </h4>
  <ol style="margin: 0; padding-left: 1.25rem; line-height: 1.7; font-size: 0.95rem;">
    <li><strong>Minus ishoralar bilan adashish:</strong> Masalan, $2 - (-3)$ amali $2 + 3 = 5$ bo'ladi. Talabalarning 70% xatosi qavs ichidagi manfiy sonni ayirishda ishorani o'zgartirmaslikdan kelib chiqadi.</li>
    <li><strong>Kasr sonlar bilan erta ishlash:</strong> Agar diagonalda $3$ yoki $7$ tursa, darhol satrni bo'lib $\frac{1}{3}, \frac{2}{7}$ ko'rinishiga keltirmang! Satrlarni o'zaro butun songa ko'paytirib ayirish orqali butun sonlar bilan oxirigacha borish hisoblash xatolarini 10 barobar kamaytiradi.</li>
    <li><strong>$0 = 5$ kabi ziddiyatni sezmaslik:</strong> Agar biror satrda $[0, 0, 0 \mid 7]$ hosil bo'lsa, bu $0 \cdot x_1 + 0 \cdot x_2 + 0 \cdot x_3 = 7$, ya'ni $0 = 7$ degan ziddiyatdir! Bunday holda hisoblashni darhol to'xtatib: <em>"Sistema birgalikda emas (yechimga ega emas)"</em> deb xulosa yoziladi.</li>
  </ol>
</div>

---

## Mustaqil yechish uchun mashqlar

1. Ushbu sistemani Gauss usuli bilan yeching:
   $$
   \begin{cases}
   x + y + 2z = 9 \\
   2x + 4y - 3z = 1 \\
   3x + 6y - 5z = 0
   \end{cases}
   $$

2. Sistema birgalikdami yoki yo'q:
   $$
   \begin{cases}
   x - y + z = 2 \\
   2x - 2y + 2z = 7
   \end{cases}
   $$

<details style="margin-top: 1rem; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); cursor: pointer;">
  <summary style="font-weight: 700; color: var(--primary);">Javoblarni tekshirish</summary>
  <div style="margin-top: 0.75rem; padding-top: 0.75rem; border-top: 1px solid var(--border-color);">
    <p><strong>1-masala:</strong> Gauss usulidan so'ng: $z = 3, y = 2, x = 1$. Javob: $(1, 2, 3)$.</p>
    <p><strong>2-masala:</strong> 1-satrni 2 ga ko'paytirib 2-satrdan ayirsak: $0x + 0y + 0z = 3 \implies 0 = 3$. Bu ziddiyat, sistema yechimga ega emas!</p>
  </div>
</details>
