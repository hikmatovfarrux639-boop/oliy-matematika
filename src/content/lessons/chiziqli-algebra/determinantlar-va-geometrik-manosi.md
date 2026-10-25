---
title: "2- va 3-tartibli determinantlar va ularning geometrik ma'nosi"
module: "chiziqli-algebra"
order: 3
description: "Determinant nima? 2D da yo'naltirilgan yuz, 3D da hajm. 2- va 3-tartibli determinantlar, Sarryus qoidasi va amaliy misollar."
---

## Kirish: Determinant nima va u qayerdan keladi?

Har bir kvadrat matritsaga mos keluvchi bitta yagona maxsus son mavjud bo'lib, unga **matritsaning determinanti (aniqlovchisi)** deyiladi va u $\det A$yoki$|A|$ kabi belgilanadi.

Lekin bu son nimani anglatadi?
> **Geometrik mohiyat:**
> - $2 \times 2$ matritsa determinanti — uning ustun-vektorlari yasagan **parallelogrammning yuzi**ni bildiradi!
> - $3 \times 3$ matritsa determinanti — uning uchta ustun-vektorlari fazoda yasagan **parallelepipedning hajmi**ni bildiradi!
> - Agar $\det A = 0$ bo'lsa, bu figura "yassilanib qolgan" (2D da chiziqqa, 3D da tekislikka aylanib, yuzi yoki hajmi 0 ga teng bo'lib qolgan) deganidir.

---

## 1. 2-tartibli determinant

$2 \times 2$ o'lchamli kvadrat matritsaning determinanti bosh diagonal ko'paytmasidan yordamchi diagonal ko'paytmasini ayirish orqali topiladi:

$$
\det A = \begin{vmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{vmatrix} = a_{11}a_{22} - a_{12}a_{21}
$$

**Misol:**
$$
\begin{vmatrix} 3 & -2 \\ 4 & 5 \end{vmatrix} = 3 \cdot 5 - (-2) \cdot 4 = 15 - (-8) = 15 + 8 = 23
$$

---

## 2. 3-tartibli determinant va Sarryus (Uchburchaklar) qoidasi

$3 \times 3$ o'lchamli matritsa determinanti:

$$
\Delta = \begin{vmatrix}
a_{11} & a_{12} & a_{13} \\
a_{21} & a_{22} & a_{23} \\
a_{31} & a_{32} & a_{33}
\end{vmatrix}
$$

Bu determinant 6 ta hadning yig'indisidan iborat (3 tasi musbat ishora bilan, 3 tasi manfiy ishora bilan):

$$
\Delta = (a_{11}a_{22}a_{33} + a_{12}a_{23}a_{31} + a_{21}a_{32}a_{13}) - (a_{13}a_{22}a_{31} + a_{12}a_{21}a_{33} + a_{23}a_{32}a_{11})
$$

### Buni yodlashning ikkita oson usuli:

#### A) Sarryus qoidasi (Dastlabki 2 ta ustunni o'ng tomonga ko'chirib yozish):
Determinantning yoniga uning 1- va 2-ustunlarini ko'chirib yozamiz:
$$
\begin{vmatrix}
a_{11} & a_{12} & a_{13} \\
a_{21} & a_{22} & a_{23} \\
a_{31} & a_{32} & a_{33}
\end{vmatrix}
\begin{matrix} a_{11} & a_{12} \\ a_{21} & a_{22} \\ a_{31} & a_{32} \end{matrix}
$$
- Chapdan o'ngga tushuvchi 3 ta bosh diagonal elementlari **qo'shiladi ($+$)**;
- O'ngdan chapga tushuvchi 3 ta yordamchi diagonal elementlari **ayriladi ($-$)**.

#### B) Uchburchaklar qoidasi:
- Bosh diagonal va asoslari unga parallel bo'lgan uchburchaklar uchlaridagi ko'paytmalar **musbat ($+$)** olinadi;
- Yordamchi diagonal va asoslari unga parallel bo'lgan uchburchaklar uchlaridagi ko'paytmalar **manfiy ($-$)** olinadi.

---

## 3. To'liq yechilgan amaliy misol

**Masala:** Ushbu determinantni hisoblang:
$$
\Delta = \begin{vmatrix}
2 & -1 & 3 \\
4 & 2 & 1 \\
-3 & 1 & 2
\end{vmatrix}
$$

<details>
<summary><strong>Qadam-baqadam yechim</strong></summary>

Musbat hadlar:
1. Bosh diagonal: $2 \cdot 2 \cdot 2 = 8$2. 1-uchburchak:$(-1) \cdot 1 \cdot (-3) = 3$3. 2-uchburchak:$4 \cdot 1 \cdot 3 = 12$Musbatlar yig'indisi:$8 + 3 + 12 = 23$.

Manfiy hadlar:
1. Yordamchi diagonal: $3 \cdot 2 \cdot (-3) = -18$2. 1-uchburchak:$(-1) \cdot 4 \cdot 2 = -8$3. 2-uchburchak:$1 \cdot 1 \cdot 2 = 2$Manfiylar yig'indisi:$-18 + (-8) + 2 = -24$.

Natija:
$$
\Delta = 23 - (-24) = 23 + 24 = 47
$$
**Javob:** $\Delta = 47$.

</details>

---

## 💡 Maslahat va ogohlantirish
> [!IMPORTANT]
> Sarryus qoidasi va uchburchaklar qoidasi **FAQAT VA FAQAT $3 \times 3$ determinantlar uchun ishlaydi!**
> Uni hech qachon $4 \times 4$yoki undan katta determinantlarga qo'llab bo'lmaydi (chunki$4 \times 4$da$4! = 24$ta had bo'ladi, 6 ta emas).$4 \times 4$ determinantlar uchun keyingi darsimizdagi **Laplas teoremasi** va **xossalar** qo'llanadi!