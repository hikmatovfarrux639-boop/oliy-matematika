---
title: "Minorlar, algebraik to'ldiruvchilar va Laplas teoremasi"
module: "chiziqli-algebra"
order: 4
description: "Minor va algebraik to'ldiruvchi tushunchasi, ishoralar shaxmat taxtasi, determinantni qator bo'yicha yoyish va Laplas usuli."
---

## Nega bu mavzu juda muhim?

Oldingi darsda $3 \times 3$determinantni hisoblashni o'rgandik. Lekin$4 \times 4$, $5 \times 5$yoki$10 \times 10$ o'lchamli determinantlarni qanday hisoblaymiz?
Bundan tashqari, matritsaning teskari matritsasini ($A^{-1}$) topish uchun ham aynan **algebraik to'ldiruvchilar** kerak bo'ladi.

Bu darsimizda har qanday tartibli determinantni oson va qulay hisoblash imkonini beruvchi qudratli usul — **Laplas teoremasi**ni o'rganamiz.

---

## 1. Minor tushunchasi ($M_{ij}$)

$n$-tartibli $A$matritsaning$a_{ij}$ elementining **minori ($M_{ij}$)** deb:
> Berilgan matritsadan **$i$-satr va $j$-ustunni o'chirib tashlashdan** hosil bo'lgan $(n-1)$-tartibli determinantga aytiladi.

**Misol:**
$$
A = \begin{pmatrix}
\mathbf{2} & 1 & 3 \\
-1 & 0 & 4 \\
5 & 2 & -3
\end{pmatrix}
$$
$a_{11} = 2$ elementining minorini topish uchun 1-satr va 1-ustunni chizamiz:
$$
M_{11} = \begin{vmatrix} 0 & 4 \\ 2 & -3 \end{vmatrix} = 0 \cdot (-3) - 4 \cdot 2 = -8
$$

---

## 2. Algebraik to'ldiruvchi tushunchasi ($A_{ij}$)

$a_{ij}$ elementining **algebraik to'ldiruvchisi ($A_{ij}$)** deb uning minoriga ishora ko'paytirilgan qiymatiga aytiladi:

$$
A_{ij} = (-1)^{i+j} M_{ij}
$$

Ya'ni:
- Agar indekslar yig'indisi $i + j$**juft** bo'lsa:$A_{ij} = +M_{ij}$ (ishora o'zgarmaydi).
- Agar indekslar yig'indisi $i + j$**toq** bo'lsa:$A_{ij} = -M_{ij}$ (ishora qarama-qarshisiga o'zgaradi).

### Ishoralar "shaxmat taxtasi" qoidasi:
$$
\begin{pmatrix}
+ & - & + & - \\
- & + & - & + \\
+ & - & + & - \\
- & + & - & +
\end{pmatrix}
$$

---

## 3. Laplas teoremasi (Qator bo'yicha yoyish)

> **Laplas teoremasi:** Determinantning qiymati uning **ixtiyoriy satri (yoki ustuni) elementlarining o'z algebraik to'ldiruvchilariga ko'paytmalari yig'indisiga** tengdir!

$i$-satr bo'yicha yoyilma:
$$
\det A = a_{i1}A_{i1} + a_{i2}A_{i2} + \dots + a_{in}A_{in}
$$

$j$-ustun bo'yicha yoyilma:
$$
\det A = a_{1j}A_{1j} + a_{2j}A_{2j} + \dots + a_{nj}A_{nj}
$$

> [!TIP]
> **Oltin strategiya:** Yoyish uchun doimo **eng ko'p nol ($0$) qatnashgan satr yoki ustunni** tanlang! Chunki $0 \cdot A_{ij} = 0$ bo'lib, o'sha elementning minorini hisoblashga hojat qolmaydi!

---

## 4. $4 \times 4$ determinantni hisoblash (Amaliy misol)

$$
\Delta = \begin{vmatrix}
2 & 0 & -1 & 3 \\
1 & 5 & 0 & 2 \\
0 & 3 & 0 & 0 \\
4 & -2 & 1 & 1
\end{vmatrix}
$$

<details>
<summary><strong>Qadam-baqadam professional yechim</strong></summary>

Diqqat qilsak, **3-satrda** birdaniga uchta nol bor ($0, 3, 0, 0$)! Demak, determinantni 3-satr bo'yicha yoyamiz:
$$
\Delta = 0 \cdot A_{31} + 3 \cdot A_{32} + 0 \cdot A_{33} + 0 \cdot A_{34} = 3 \cdot A_{32}
$$

$A_{32}$ni topamiz. 3-satr va 2-ustun kesishmasi:$i+j = 3+2 = 5$ (toq son, demak oldiga minus chiqadi):
$$
A_{32} = (-1)^{3+2} M_{32} = - \begin{vmatrix}
2 & -1 & 3 \\
1 & 0 & 2 \\
4 & 1 & 1
\end{vmatrix}
$$

Ushbu $3 \times 3$ determinantni hisoblaymiz:
$$
\begin{vmatrix}
2 & -1 & 3 \\
1 & 0 & 2 \\
4 & 1 & 1
\end{vmatrix} = [0 + (-8) + 3] - [0 + 4 + (-1)] = -5 - 3 = -8
$$

Demak:
$$
A_{32} = -(-8) = 8
$$

Yakuniy natija:
$$
\Delta = 3 \cdot A_{32} = 3 \cdot 8 = 24
$$

Qarang, to'rtta ulkan $3 \times 3$ determinant hisoblash o'rniga, to'g'ri satrni tanlab, masalani 2 daqiqada yechdik!

</details>