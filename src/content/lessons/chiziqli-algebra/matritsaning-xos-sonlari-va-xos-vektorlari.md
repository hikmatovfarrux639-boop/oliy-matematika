---
title: "Matritsaning xos sonlari va xos vektorlari: Diagonallashtirish"
module: "chiziqli-algebra"
order: 13
description: "Xarakteristik tenglama, xos qiymat va xos vektorlarni hisoblashning 3 xil usuli, matritsani diagonallashtirish va A^k darajani hisoblash."
---

## Kirish: Operator yo'nalishini o'zgartirmaydigan o'qlar

Chiziqli algebraning eng chuqur va amaliyotda keng qo'llaniladigan bo'limlaridan biri — bu **matritsaning xos sonlari (eigenvalues)** va **xos vektorlari (eigenvectors)** nazariyasidir.

Kvant mexanikasida Shredinger tenglamasi, sun'iy intellektda ma'lumotlar o'lchamini qisqartirish (PCA — Principal Component Analysis), Google PageRank algoritmi, tebranishlar nazariyasi va differensial tenglamalar sistemalarini yechish to'g'ridan-to'g'ri xos vektorlarga tayanadi.

Geometrik nuqtai nazardan qaraganda: chiziqli operator fazodagi aksariyat vektorlarni cho'zadi va ularning burilish burchagini o'zgartiradi. Biroq ba'zi maxsus vektorlar mavjudki, operator ularga ta'sir qilganda ularning **yo'nalishi o'zgarmaydi**, faqat uzunligi $\lambda$ barobar cho'ziladi yoki siqiladi. Ana shu vektorlar **xos vektorlar**, $\lambda$ ko'paytuvchisi esa **xos son** deyiladi.

---

## 1. Nazariy asoslar va ta'riflar

> **Ta'rif:** Faraz qilaylik, $A$ — $n \times n$ o'lchamli kvadrat matritsa bo'lsin. Agar shunday noldan farqli $\vec{v} \neq \vec{0}$ ustun-vektor va $\lambda$ haqiqiy (yoki kompleks) son mavjud bo'lib,
>
> 
$$
> A \vec{v} = \lambda \vec{v}
> 
$$
>
> tenglik bajarilsa, $\lambda$ soni $A$ matritsaning **xos soni (xos qiymati)**, $\vec{v}$ vektori esa unga mos keluvchi **xos vektori** deb ataladi.

Tenglamani bir tomonga o'tkazamiz ($E$ — $n \times n$ birlik matritsa):

$$
A \vec{v} - \lambda E \vec{v} = \vec{0} \iff (A - \lambda E)\vec{v} = \vec{0}
$$

Bu bir jinsli chiziqli tenglamalar sistemasidir. Bizga ma'lumki, bir jinsli sistema noldan farqli $\vec{v} \neq \vec{0}$ yechimga ega bo'lishi uchun uning asosiy determinanti **nolga teng** bo'lishi shart va yetarli (Kramer va Gauss qoidasi):

$$
\det(A - \lambda E) = 0
$$

Bu tenglama matritsaning **xarakteristik tenglamasi**, uning chap tomonidagi $P(\lambda) = \det(A - \lambda E)$ ko'phadi esa **xarakteristik ko'phad** deyiladi.

### Asosiy xossalar:
1. **Iz (Tritsiya) xossasi:** Barcha xos sonlar yig'indisi matritsaning bosh diagonal elementlari yig'indisiga (iziga) teng:
   
$$
   \sum_{i=1}^n \lambda_i = \text{tr}(A) = a_{11} + a_{22} + \dots + a_{nn}
   
$$
2. **Determinant xossasi:** Barcha xos sonlar ko'paytmasi matritsa determinantiga teng:
   
$$
   \prod_{i=1}^n \lambda_i = \lambda_1 \lambda_2 \dots \lambda_n = \det(A)
   
$$
3. Agar $\lambda = 0$ xos son bo'lsa, u holda $\det(A) = 0$, ya'ni matritsa xosmas (maxsus) bo'ladi.
4. **Gamilton-Keli teoremasi:** Har qanday kvadrat matritsa o'zining xarakteristik ko'phadining ildizi hisoblanadi: $P(A) = 0$.

---

## 2. Matritsani diagonallashtirish va $A^k$ ni hisoblash

Agar $n \times n$ matritsa $n$ ta chiziqli erkli $\vec{v}_1, \vec{v}_2, \dots, \vec{v}_n$ xos vektorlarga ega bo'lsa, u holda ushbu xos vektorlarni ustun qilib tuzilgan o'tish matritsasi $S = [\vec{v}_1, \vec{v}_2, \dots, \vec{v}_n]$ yordamida $A$ matritsani diagonal ko'rinishga keltirish mumkin:

$$
S^{-1} A S = D = \begin{pmatrix} \lambda_1 & 0 & \dots & 0 \\ 0 & \lambda_2 & \dots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \dots & \lambda_n \end{pmatrix}
$$

Bundan $A = S D S^{-1}$ ekanligi kelib chiqadi. Bu ifoda matritsaning ixtiyoriy yuqori $k$-darajasini bir zumda topish imkonini beradi:

$$
A^k = (S D S^{-1})^k = S D^k S^{-1} = S \begin{pmatrix} \lambda_1^k & 0 & \dots & 0 \\ 0 & \lambda_2^k & \dots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \dots & \lambda_n^k \end{pmatrix} S^{-1}
$$

---

## 3. Bosqichma-bosqich amaliy masalalar va ko'p usulli yechimlar

### 1-masala: $2 \times 2$ matritsaning xos sonlari, xos vektorlari va $A^5$ darajasini topish

Quyidagi matritsa berilgan:

$$
A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}
$$

Matritsaning xos sonlari, xos vektorlari va $A^5$ ni toping.

#### 1-usul: Klassik xarakteristik determinant usuli
1. Xarakteristik tenglamani tuzamiz:
   
$$
   \det(A - \lambda E) = \begin{vmatrix} 4 - \lambda & 1 \\ 2 & 3 - \lambda \end{vmatrix} = 0
   
$$
2. Determinantni ochamiz:
   
$$
   (4 - \lambda)(3 - \lambda) - 2 \cdot 1 = 12 - 7\lambda + \lambda^2 - 2 = \lambda^2 - 7\lambda + 10 = 0
   
$$
3. Viyet teoremasi bo'yicha ildizlarni topamiz:
   
$$
   \lambda_1 = 5, \quad \lambda_2 = 2
   
$$
4. Har bir xos son uchun mos xos vektorlarni topamiz:
   - $\lambda_1 = 5$ uchun:
     
$$
     (A - 5E)\vec{v}_1 = \begin{pmatrix} 4-5 & 1 \\ 2 & 3-5 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = \begin{pmatrix} -1 & 1 \\ 2 & -2 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}
     
$$
     Tenglama: $-x_1 + x_2 = 0 \implies x_1 = x_2$.
     Erkin parametr $x_2 = 1$ deb olsak: $\vec{v}_1 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$.
   - $\lambda_2 = 2$ uchun:
     
$$
     (A - 2E)\vec{v}_2 = \begin{pmatrix} 4-2 & 1 \\ 2 & 3-2 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = \begin{pmatrix} 2 & 1 \\ 2 & 1 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}
     
$$
     Tenglama: $2x_1 + x_2 = 0 \implies x_2 = -2x_1$.
     $x_1 = 1$ desak: $\vec{v}_2 = \begin{pmatrix} 1 \\ -2 \end{pmatrix}$.

#### 2-usul: Iz (Tritsiya) va determinant orqali tezkor topish usuli
$2 \times 2$ o'lchamli har qanday matritsa uchun xarakteristik tenglama qisqa formulaga ega:
$$
\lambda^2 - \text{tr}(A)\lambda + \det(A) = 0
$$
Hisoblaymiz:
- $\text{tr}(A) = 4 + 3 = 7$
- $\det(A) = 4 \cdot 3 - 1 \cdot 2 = 12 - 2 = 10$

Darhol tenglama hosil bo'ladi:
$$
\lambda^2 - 7\lambda + 10 = 0 \implies (\lambda - 5)(\lambda - 2) = 0 \implies \lambda_1 = 5, \; \lambda_2 = 2
$$
Bu usul imtihonda determinantni qavslar bilan ochishda yo'l qo'yiladigan arifmetik xatolarning oldini oladi va vaqtni 3 barobar tejaydi!

#### Diagonallashtirish orqali $A^5$ ni hisoblash:
O'tish matritsasi va uning teskarisi:
$$
S = \begin{pmatrix} 1 & 1 \\ 1 & -2 \end{pmatrix}, \quad \det(S) = -2 - 1 = -3
$$
$$
S^{-1} = -\frac{1}{3} \begin{pmatrix} -2 & -1 \\ -1 & 1 \end{pmatrix} = \frac{1}{3} \begin{pmatrix} 2 & 1 \\ 1 & -1 \end{pmatrix}
$$
Diagonal matritsaning 5-darajasi:
$$
D^5 = \begin{pmatrix} 5^5 & 0 \\ 0 & 2^5 \end{pmatrix} = \begin{pmatrix} 3125 & 0 \\ 0 & 32 \end{pmatrix}
$$
Endi $A^5 = S D^5 S^{-1}$ ni hisoblaymiz:
$$
A^5 = \begin{pmatrix} 1 & 1 \\ 1 & -2 \end{pmatrix} \begin{pmatrix} 3125 & 0 \\ 0 & 32 \end{pmatrix} \cdot \frac{1}{3} \begin{pmatrix} 2 & 1 \\ 1 & -1 \end{pmatrix} = \begin{pmatrix} 3125 & 32 \\ 3125 & -64 \end{pmatrix} \cdot \frac{1}{3} \begin{pmatrix} 2 & 1 \\ 1 & -1 \end{pmatrix}
$$
$$
A^5 = \frac{1}{3} \begin{pmatrix} 3125 \cdot 2 + 32 \cdot 1 & 3125 \cdot 1 - 32 \cdot 1 \\ 3125 \cdot 2 - 64 \cdot 1 & 3125 \cdot 1 + 64 \cdot 1 \end{pmatrix} = \begin{pmatrix} 2094 & 1031 \\ 2062 & 1063 \end{pmatrix}
$$

---

### 2-masala: $3 \times 3$ matritsaning xos sonlari va karrali ildiz holati

Quyidagi simmetrik matritsaning xos sonlari va xos vektorlarini toping:

$$
A = \begin{pmatrix} 2 & -1 & 1 \\ -1 & 2 & -1 \\ 1 & -1 & 2 \end{pmatrix}
$$

#### Yechish:
1. Xarakteristik determinantni hisoblaymiz:
   
$$
   \det(A - \lambda E) = \begin{vmatrix} 2-\lambda & -1 & 1 \\ -1 & 2-\lambda & -1 \\ 1 & -1 & 2-\lambda \end{vmatrix} = 0
   
$$
2. Birinchi qatorga ikkinchi va uchinchi qatorlarni qo'shamiz:
   
$$
   \begin{vmatrix} 2-\lambda & -\lambda & \lambda \\ -1 & 2-\lambda & -1 \\ 1 & -1 & 2-\lambda \end{vmatrix} \implies \dots \implies -(\lambda - 1)^2(\lambda - 4) = 0
   
$$
   Demak, xos sonlar: $\lambda_1 = 4$ (oddiy ildiz) va $\lambda_{2,3} = 1$ (2-karrali ildiz).
3. **Tekshirish:**
   - $\sum \lambda = 4 + 1 + 1 = 6$. Tritsiya: $\text{tr}(A) = 2 + 2 + 2 = 6$ (To'g'ri!).
   - $\prod \lambda = 4 \cdot 1 \cdot 1 = 4$. Determinant: $\det(A) = 4$ (To'g'ri!).
4. Xos vektorlarni aniqlash:
   - $\lambda = 4$ uchun:
     
$$
     (A - 4E)\vec{v} = \begin{pmatrix} -2 & -1 & 1 \\ -1 & -2 & -1 \\ 1 & -1 & -2 \end{pmatrix} \begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}
     
$$
     Sistemani yechsak: $x = 1, y = -1, z = 1$. Demak, $\vec{v}_1 = (1, -1, 1)^T$.
   - $\lambda = 1$ uchun:
     
$$
     (A - E)\vec{v} = \begin{pmatrix} 1 & -1 & 1 \\ -1 & 1 & -1 \\ 1 & -1 & 1 \end{pmatrix} \begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}
     
$$
     Uchala qator ham bitta tenglamaga keladi: $x - y + z = 0 \implies y = x + z$.
     Bu 2 ta erkli parametrga ega tekislik tenglamasidir:
     - $x = 1, z = 0 \implies y = 1 \implies \vec{v}_2 = (1, 1, 0)^T$
     - $x = 0, z = 1 \implies y = 1 \implies \vec{v}_3 = (0, 1, 1)^T$

> **Muhim xulosa:** Simmetrik matritsalar ($A = A^T$) uchun har doim karrali xos sonlarga mos chiziqli erkli xos vektorlar yetarli sonda topiladi va ular doimo o'zaro ortogonal bo'ladi!

---

## 4. Imtihondagi asosiy tuzoqlar va xatolar

> [!WARNING] Imtihondagi tuzoqlar
> 1. **Vektor yo'nalishi va o'zgarmas ko'paytuvchi:** Xos vektor yakka yagona emas, balki bitta yo'nalishdagi cheksiz vektorlar oilasidir. Agar $\vec{v} = (1, 2)^T$ bo'lsa, $(2, 4)^T$ yoki $(-1, -2)^T$ ham xuddi shu xos songa mos keluvchi to'g'ri xos vektordir.
> 2. **Karrali ildizlar va diagonallanmaslik:** Agar $n \times n$ matritsa karrali xos songa ega bo'lsa (masalan $\lambda_1 = \lambda_2 = 3$), har doim ham 2 ta erkli xos vektor topilavermaydi. Agar geometrik karralik algebraik karralikdan kichik bo'lsa, matritsani diagonallashtirib bo'lmaydi (bunday matritsalar Jordan normal shakliga keltiriladi).
> 3. **Tritsiya va Determinantni tekshirishni unutish:** Imtihonda xos sonlarni topgach, darhol $\sum \lambda_i = \text{tr}(A)$ va $\prod \lambda_i = \det(A)$ tengliklarini og'zaki tekshiring. Agar mos kelmasa, xarakteristik ko'phadni ochishda plyus-minus ishoralarda xatolik qilgansiz.

---

## 5. Mustaqil yechish uchun amaliy mashqlar

### 1-mashq
Ushbu matritsaning xos sonlari va xos vektorlarini toping:
$$
A = \begin{pmatrix} 3 & 4 \\ 1 & 3 \end{pmatrix}
$$

<details>
<summary>👉 Yechimni tekshirish</summary>

1. $\text{tr}(A) = 3 + 3 = 6$, $\det(A) = 3 \cdot 3 - 4 \cdot 1 = 5$.
2. Xarakteristik tenglama: $\lambda^2 - 6\lambda + 5 = 0 \implies (\lambda - 5)(\lambda - 1) = 0$.
   Xos sonlar: $\lambda_1 = 5, \lambda_2 = 1$.
3. $\lambda_1 = 5$ uchun:
   
$$
   \begin{pmatrix} -2 & 4 \\ 1 & -2 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} \implies x_1 = 2x_2 \implies \vec{v}_1 = \begin{pmatrix} 2 \\ 1 \end{pmatrix}
   
$$
4. $\lambda_2 = 1$ uchun:
   
$$
   \begin{pmatrix} 2 & 4 \\ 1 & 2 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} \implies x_1 = -2x_2 \implies \vec{v}_2 = \begin{pmatrix} -2 \\ 1 \end{pmatrix}
   
$$
</details>

### 2-mashq
Agar $A = \begin{pmatrix} 1 & 2 \\ 0 & 3 \end{pmatrix}$ bo'lsa, $A^4$ matritsani diagonallashtirish usuli orqali toping.

<details>
<summary>👉 Yechimni tekshirish</summary>

Uchburchakli matritsa bo'lgani uchun diagonal elementlarning o'zi xos sonlardir: $\lambda_1 = 1, \lambda_2 = 3$.
Xos vektorlar:
- $\lambda_1 = 1 \implies \vec{v}_1 = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$
- $\lambda_2 = 3 \implies (A-3E)\vec{v}_2 = \begin{pmatrix} -2 & 2 \\ 0 & 0 \end{pmatrix} \vec{v}_2 = 0 \implies x_1 = x_2 \implies \vec{v}_2 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$

O'tish matritsasi: $S = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix} \implies S^{-1} = \begin{pmatrix} 1 & -1 \\ 0 & 1 \end{pmatrix}$.
$$
A^4 = S \begin{pmatrix} 1^4 & 0 \\ 0 & 3^4 \end{pmatrix} S^{-1} = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix} \begin{pmatrix} 1 & 0 \\ 0 & 81 \end{pmatrix} \begin{pmatrix} 1 & -1 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 1 & 80 \\ 0 & 81 \end{pmatrix}
$$
</details>
