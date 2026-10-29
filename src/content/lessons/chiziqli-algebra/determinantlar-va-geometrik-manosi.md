---
title: "2- va 3-tartibli determinantlar va ularning geometrik ma'nosi"
module: "chiziqli-algebra"
order: 3
description: "Determinant nima? 2D da yo'naltirilgan yuz, 3D da hajm. 2- va 3-tartibli determinantlar, Sarryus qoidasi, uchburchaklar usuli va amaliy misollar."
---

## Kirish: Determinant nima va u qayerdan keladi?

Har bir kvadrat matritsaga mos keluvchi bitta yagona maxsus haqiqiy son mavjud bo'lib, unga **matritsaning determinanti (aniqlovchisi)** deyiladi va u $\det A$ yoki $|A|$ kabi belgilanadi.

Lekin bu son nimani anglatadi? Nega matematiklar uni maxsus kashf qilishgan?
Determinant — bu shunchaki sonlar ustidagi arifmetik qoida emas, balki fazoning geometriyasi bilan uzviy bog'langan tushunchadir!

> [!NOTE] Determinantning geometrik mohiyati
> - **2D tekislikda ($2 \times 2$ matritsa):** Uning ustun-vektorlari yasagan **parallelogrammning yo'naltirilgan yuzi**ni bildiradi: $S = |\det A|$.
> - **3D fazoda ($3 \times 3$ matritsa):** Uning 3 ta ustun-vektorlari fazoda yasagan **parallelepipedning hajmi**ni bildiradi: $V = |\det A|$.
> - **Agar $\det A = 0$ bo'lsa:** Bu figura "yassilanib qolgan" (2D da bitta to'g'ri chiziqqa, 3D da bitta yassi tekislikka aylanib, yuzi yoki hajmi nolga teng bo'lib qolgan) deganidir.
> - **Ishorasi:** Agar $\det A > 0$ bo'lsa, fazoning oriyentatsiyasi saqlangan (o'ng uchlik); agar $\det A < 0$ bo'lsa, fazo ko'zgudek teskari o'girilgan (chap uchlik).

---

## 1. 2-tartibli determinant

$2 \times 2$ o'lchamli kvadrat matritsaning determinanti bosh diagonal ko'paytmasidan yordamchi diagonal ko'paytmasini ayirish orqali topiladi:

$$
\det A = \begin{vmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{vmatrix} = a_{11} a_{22} - a_{12} a_{21}
$$

### Geometrik tatbiqi (Uchburchak va parallelogramm yuzi):
Agar tekislikda $\vec{u} = (x_1, y_1)$ va $\vec{v} = (x_2, y_2)$ vektorlar berilgan bo'lsa:
- Ular yasagan parallelogramm yuzi:
  $$
  S_{\text{parall}} = \left| \begin{vmatrix} x_1 & y_1 \\ x_2 & y_2 \end{vmatrix} \right|
  $$
- Ular yasagan uchburchak yuzi:
  $$
  S_{\Delta} = \frac{1}{2} \left| \begin{vmatrix} x_1 & y_1 \\ x_2 & y_2 \end{vmatrix} \right|
  $$

Agar uchburchak uchlarining koordinatalari $A(x_1, y_1), B(x_2, y_2), C(x_3, y_3)$ berilgan bo'lsa, uning yuzi universal formula orqali topiladi:
$$
S_{\Delta} = \frac{1}{2} \left| \begin{vmatrix} x_1 & y_1 & 1 \\ x_2 & y_2 & 1 \\ x_3 & y_3 & 1 \end{vmatrix} \right|
$$

---

## 2. 3-tartibli determinant va uni hisoblash qoidalari

$3 \times 3$ o'lchamli matritsa determinanti:

$$
\Delta = \begin{vmatrix}
a_{11} & a_{12} & a_{13} \\
a_{21} & a_{22} & a_{23} \\
a_{31} & a_{32} & a_{33}
\end{vmatrix}
$$

Bu determinant 6 ta hadning algebraik yig'indisidan iborat (3 tasi musbat ishora bilan, 3 tasi manfiy ishora bilan):

$$
\Delta = (a_{11}a_{22}a_{33} + a_{12}a_{23}a_{31} + a_{21}a_{32}a_{13}) - (a_{13}a_{22}a_{31} + a_{12}a_{21}a_{33} + a_{23}a_{32}a_{11})
$$

Ushbu 6 ta hadni xatosiz eslab qolish va hisoblashning 2 ta mashhur qoidasi bor:

### A) Sarryus qoidasi (Ustunlarni ko'chirib yozish):
Determinantning o'ng tomoniga uning birinchi va ikkinchi ustunlari ko'chirib yoziladi:

$$
\begin{vmatrix}
a_{11} & a_{12} & a_{13} \\
a_{21} & a_{22} & a_{23} \\
a_{31} & a_{32} & a_{33}
\end{vmatrix}
\begin{matrix} a_{11} & a_{12} \\ a_{21} & a_{22} \\ a_{31} & a_{32} \end{matrix}
$$

1. **Musbat hadlar ($+$):** Yuqoridan pastga, chapdan o'ngga tushuvchi 3 ta bosh diagonal elementlari ko'paytiriladi va qo'shiladi:
   $$
   + (a_{11} a_{22} a_{33}) + (a_{12} a_{23} a_{31}) + (a_{13} a_{21} a_{32})
   $$
2. **Manfiy hadlar ($-$):** Pastdan yuqoriga, chapdan o'ngga ko'tariluvchi 3 ta yordamchi diagonal elementlari ko'paytiriladi va ayiriladi:
   $$
   - (a_{31} a_{22} a_{13}) - (a_{32} a_{23} a_{11}) - (a_{33} a_{21} a_{12})
   $$

---

### B) Uchburchaklar (yulduzcha) qoidasi:
Qo'shimcha ustun yozmasdan, to'g'ridan-to'g'ri matritsaning o'zida ko'paytirish:
- **Musbat hadlar ($+$):**
  1. Bosh diagonal: $a_{11} a_{22} a_{33}$;
  2. Bosh diagonal ustidagi 2 ta son va qarshisidagi burchak: $a_{12} a_{23} a_{31}$;
  3. Bosh diagonal ostidagi 2 ta son va qarshisidagi burchak: $a_{21} a_{32} a_{13}$.
- **Manfiy hadlar ($-$):**
  1. Yordamchi diagonal: $a_{13} a_{22} a_{31}$;
  2. Yordamchi diagonal ustidagi 2 ta son va qarshisidagi burchak: $a_{12} a_{21} a_{33}$;
  3. Yordamchi diagonal ostidagi 2 ta son va qarshisidagi burchak: $a_{23} a_{32} a_{11}$.

---

## 3. Qadamma-qadam to'liq yechilgan amaliy misollar

### 1-misol: 2D tekislikda uchburchak yuzini determinant bilan hisoblash

**Masala:** Uchlari $A(1, 2), B(5, 5), C(2, 6)$ nuqtalarda bo'lgan uchburchakning yuzini hisoblang.

#### Yechish:
Vektorlar koordinatalarini topamiz:
- $\vec{AB} = (5 - 1, \; 5 - 2) = (4, 3)$
- $\vec{AC} = (2 - 1, \; 6 - 2) = (1, 4)$

Uchburchak yuzi 2-tartibli determinant orqali:
$$
S_{\Delta} = \frac{1}{2} \left| \begin{vmatrix} 4 & 3 \\ 1 & 4 \end{vmatrix} \right|
$$
Determinantni hisoblaymiz:
$$
\begin{vmatrix} 4 & 3 \\ 1 & 4 \end{vmatrix} = 4 \cdot 4 - 3 \cdot 1 = 16 - 3 = 13
$$
Yuz:
$$
S_{\Delta} = \frac{1}{2} \cdot 13 = 6.5 \text{ kv. birlik}
$$

**Javob:** $S_{\Delta} = 6.5$.

---

### 2-misol: 3-tartibli determinantni Sarryus usulida hisoblash

**Masala:** Ushbu determinantni Sarryus qoidasi bilan hisoblang:
$$
\Delta = \begin{vmatrix}
2 & -1 & 3 \\
4 & 2 & 1 \\
-3 & 1 & 2
\end{vmatrix}
$$

#### Yechish:

Determinantning o'ng tomoniga dastlabki ikkita ustunni ko'chirib yozamiz:
$$
\begin{vmatrix}
2 & -1 & 3 \\
4 & 2 & 1 \\
-3 & 1 & 2
\end{vmatrix}
\begin{matrix} 2 & -1 \\ 4 & 2 \\ -3 & 1 \end{matrix}
$$

**1-bosqich: Musbat hadlar yig'indisini hisoblaymiz ($+$):**
1. Bosh diagonal: $2 \cdot 2 \cdot 2 = 8$
2. 2-diagonal: $(-1) \cdot 1 \cdot (-3) = 3$
3. 3-diagonal: $3 \cdot 4 \cdot 1 = 12$
$$
\Sigma_{+} = 8 + 3 + 12 = 23
$$

**2-bosqich: Manfiy hadlar yig'indisini hisoblaymiz ($-$):**
1. Yordamchi diagonal: $(-3) \cdot 2 \cdot 3 = -18$
2. 2-yordamchi diagonal: $1 \cdot 1 \cdot 2 = 2$
3. 3-yordamchi diagonal: $2 \cdot 4 \cdot (-1) = -8$
$$
\Sigma_{-} = (-18) + 2 + (-8) = -24
$$

**3-bosqich: Natijani topamiz:**
$$
\Delta = \Sigma_{+} - \Sigma_{-} = 23 - (-24) = 23 + 24 = 47
$$

**Javob:** $\Delta = 47$.

---

## 4. Talabalar yo'l qo'yadigan tuzoqlar

> [!WARNING] Imtihonda ehtiyot bo'ling!
> 1. **Sarryus qoidasini $4 \times 4$ determinantlarga qo'llash (QAT'IYAN TAQIQLANADI!):** Ko'pchilik talabalar $4 \times 4$ matritsaga ham ikkita ustun qo'shib, Sarryus usuli bilan yechishga urinishadi. Bu qo'pol xatodir! $4 \times 4$ determinantda $4! = 24$ ta had bo'ladi, Sarryus esa faqat 8 ta had beradi. $4 \times 4$ uchun faqat Laplas teoremasi va xossalar qo'llanadi!
> 2. **Manfiy sonlarni ayirishda ishoralarni yo'qotish:** Determinant formulasida ayirish amali bor: $a_{11}a_{22} - a_{12}a_{21}$. Agar $a_{12}a_{21} = -8$ bo'lsa, $15 - (-8) = 15 + 8 = 23$ bo'ladi. Ko'pchilik minusni bitta deb o'ylab $15 - 8 = 7$ deb xato hisoblaydi.
> 3. **Vektorlar tartibi va yuzaning manfiy chiqishi:** Agar hisoblashda $\det = -13$ chiqsa, bu uchburchak yuzi manfiy degani emas. Yuz har doim musbat kattalik, shuning uchun determinant modulga olinadi: $S = |\det| = 13$.

---

## 5. Mustaqil yechish uchun amaliy mashqlar

1. 2-tartibli determinantni hisoblang: $\begin{vmatrix} 5 & -3 \\ 2 & 4 \end{vmatrix}$.
   - *Javob:* $5(4) - (-3)(2) = 20 - (-6) = 26$.

2. Sarryus qoidasi bilan hisoblang: $\begin{vmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \\ 7 & 8 & 9 \end{vmatrix}$.
   - *Javob:* $\Delta = 0$ (chunki satrlar arifmetik progressiya tashkil etadi).

3. Uchlari $A(0, 0), B(3, 1), C(1, 4)$ bo'lgan uchburchak yuzini toping.
   - *Javob:* $S = \frac{1}{2} |3(4) - 1(1)| = \frac{11}{2} = 5.5$.
