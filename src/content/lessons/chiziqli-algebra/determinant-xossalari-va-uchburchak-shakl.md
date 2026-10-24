---
title: "Determinantning 10 ta oltin xossasi va uchburchak shaklga keltirish"
module: "chiziqli-algebra"
order: 5
description: "Satrlarni chiziqli kombinatsiyalash, nol satrlar, proporsionallik va determinantni Gauss uslubida uchburchak shaklga keltirib oson hisoblash."
---

## Kirish: Qanday qilib yirik determinantlarni qo'lda 1 daqiqada hisoblash mumkin?

Oldingi darsda ko'rganimizdek, agar determinantda nollar ko'p bo'lsa, uni hisoblash juda osonlashadi.
Lekin agar matritsada birorta ham nol bo'lmasa-chi? Masalan, barcha elementlari katta sonlardan iborat bo'lsa?

Bu yerda bizga **determinantlarning xossalari** yordamga keladi. Biz bu xossalar yordamida o'zimiz istagan joyda nollarni sun'iy ravishda "yasab olamiz"!

---

## 1. Determinantning 10 ta fundamental xossasi

1. **Transponirlash xossasi:** Matritsa transponirlansa, uning determinanti o'zgarmaydi: $\det(A^T) = \det(A)$. (Satrlar uchun o'rinli bo'lgan barcha qoidalar ustunlar uchun ham to'g'ri).
2. **Satrlar o'rnini almashtirish:** Agar determinantning ikkita satri (yoki ustuni) o'rni almashtirilsa, determinantning **ishorasi qarama-qarshisiga o'zgaradi**.
3. **Nol satr xossasi:** Agar biror satr (yoki ustun) to'liq nollardan iborat bo'lsa, determinant **$0$ ga teng**.
4. **Bir xil satrlar:** Agar determinantda ikkita bir xil satr bo'lsa, determinant **$0$ ga teng**.
5. **Proporsional satrlar:** Agar ikkita satr bir-biriga proporsional bo'lsa (masalan, 2-satr 1-satrning 3 barobari bo'lsa), determinant **$0$ ga teng**.
6. **Umumiy ko'paytuvchini chiqarish:** Biror satrdagi umumiy ko'paytuvchini determinant belgisidan tashqariga chiqarish mumkin.
7. **Qo'shiluvchilarga ajratish:** Agar biror satr ikki qo'shiluvchi yig'indisi bo'lsa, determinant ikki determinant yig'indisiga ajraladi.
8. **ENG MUHIM XOSSA (Nollash quroli):** Agar biror satrga boshqa satrni ixtiyoriy $k$ songa ko'paytirib qo'shilsa, **determinantning qiymati zarracha ham o'zgarmaydi!**
9. **Ko'paytma determinanti:** Ikki kvadrat matritsa ko'paytmasining determinanti ularning determinantlari ko'paytmasiga teng: $\det(A \cdot B) = \det(A) \cdot \det(B)$.
10. **Uchburchak matritsa determinanti:** Agar bosh diagonaldan pastdagi (yoki yuqoridagi) barcha sonlar $0$ bo'lsa, determinant shunchaki **bosh diagonal elementlarining ko'paytmasiga** tengdir!
    $$\begin{vmatrix} d_1 & * & * \\ 0 & d_2 & * \\ 0 & 0 & d_3 \end{vmatrix} = d_1 \cdot d_2 \cdot d_3$$

---

## 2. Uchburchak ko'rinishga keltirish usuli (Gauss uslubi)

Bu usulning mohiyati: 8-xossani qo'llab, bosh diagonal tagidagi barcha sonlarni ketma-ket $0$ ga aylantirish va natijada diagonal elementlarini ko'paytirib qo'yishdir.

**Masala:** Ushbu determinantni hisoblang:
$$
\Delta = \begin{vmatrix}
1 & 2 & -1 \\
2 & 5 & 1 \\
-1 & 1 & 4
\end{vmatrix}
$$

<details>
<summary><strong>Uchburchak usulida hisoblash bosqichlari</strong></summary>

**1-qadam:** 1-ustundagi $a_{11} = 1$ dan tayanch (pivoting) sifatida foydalanib, uning tagidagi sonlarni ($2$ va $-1$) nol qilamiz:
- 2-satrdan 1-satrning 2 barobarini ayiramiz ($S_2 - 2S_1$);
- 3-satrga 1-satrni qo'shamiz ($S_3 + S_1$):

$$
\Delta = \begin{vmatrix}
1 & 2 & -1 \\
2 - 2(1) & 5 - 2(2) & 1 - 2(-1) \\
-1 + 1 & 1 + 2 & 4 + (-1)
\end{vmatrix} = \begin{vmatrix}
1 & 2 & -1 \\
0 & 1 & 3 \\
0 & 3 & 3
\end{vmatrix}
$$

**2-qadam:** Endi 2-satrdagi $a_{22} = 1$ yordamida uning tagidagi $3$ ni nol qilamiz:
- 3-satrdan 2-satrning 3 barobarini ayiramiz ($S_3 - 3S_2$):

$$
\Delta = \begin{vmatrix}
1 & 2 & -1 \\
0 & 1 & 3 \\
0 & 3 - 3(1) & 3 - 3(3)
\end{vmatrix} = \begin{vmatrix}
1 & 2 & -1 \\
0 & 1 & 3 \\
0 & 0 & -6
\end{vmatrix}
$$

**3-qadam:** Matritsa yuqori uchburchak ko'rinishiga keldi! Endi diagonal elementlarni ko'paytiramiz:
$$
\Delta = 1 \cdot 1 \cdot (-6) = -6
$$

**Javob:** $\Delta = -6$.
</details>

---

## 💡 Xulosa
Determinantni xossalar yordamida hisoblash — har qanday matematik, dasturchi va muhandis uchun eng samarali usuldir. Kompyuter algoritmlari ham aynan shu prinsip asosida ishlaydi.