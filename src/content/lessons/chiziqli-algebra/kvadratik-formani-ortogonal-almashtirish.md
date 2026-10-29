---
title: "Kvadratik formani ortogonal almashtirish bilan kanonik ko'rinishga keltirish"
module: "chiziqli-algebra"
order: 19
description: "Simmetrik matritsalar xossalari, xos sonlar va xos vektorlar, Gramm-Shmidt ortogonallash, o'tish matritsasi va bosh o'qlarga keltirish."
---

## Kirish: Nega kvadratik formani ortogonal almashtirish kerak?

Kvadratik formaning umumiy ko'rinishida $x_1 x_2, x_1 x_3, x_2 x_3$ kabi **aralash ko'paytmalar** qatnashadi:

$$
Q(x_1, x_2, \dots, x_n) = \sum_{i=1}^n \sum_{j=1}^n a_{ij} x_i x_j
$$

Aralash ko'paytmalar qatnashgan ifodaning geometrik ma'nosini (ellips, giperbola yoki ikkinchi tartibli sirt) tahlil qilish juda murakkab. Geometriyada bu koordinata o'qlari sirtning simmetriya o'qlariga nisbatan ma'lum burchakka burilganini anglatadi.

Kvadratik formani **kanonik ko'rinishga** (faqat kvadratlar yig'indisi $\sum \lambda_i y_i^2$) keltirishning ikkita asosiy usuli mavjud:
1. **Lagranj usuli (to'la kvadratlar ajratish):** Algebraik jihatdan tez, lekin yangi bazis vektorlari o'zaro perpendikulyar bo'lmaydi (fazoviy burchaklar va masofalar buziladi).
2. **Ortogonal almashtirish usuli (Spektral tahlil / Bosh o'qlarga keltirish):** Yangi koordinatalar sistemasi qat'iy to'g'ri burchakli (ortonormal) bo'lib qoladi. Fazoda bu shunchaki koordinata sistemasini **burish (aylantirish)** amalini ifodalaydi. Sirt shakli, burchaklar va masofalar mutlaqo o'zgarmaydi!

---

## 1. Simmetrik matritsaning fundamental teoremalari

Kvadratik formaning matritsasi har doim haqiqiy simmetrik matritsadir: $A = A^T$ (ya'ni $a_{ij} = a_{ji}$). Ushbu matritsalar chiziqli algebrada ajoyib xossalarga ega:

> [!NOTE] Simmetrik matritsalarning 3 ta oltin qoidasi
> 1. **Haqiqiylik teoremasi:** Haqiqiy simmetrik matritsaning barcha xos sonlari $\lambda_1, \lambda_2, \dots, \lambda_n$ doimo **haqiqiy sonlardir** ($\lambda_i \in \mathbb{R}$), hech qachon kompleks son chiqmaydi.
> 2. **Ortogonallik teoremasi:** Turli xos sonlarga mos keluvchi xos vektorlar o'zaro **ortogonaldir** (ya'ni skalyar ko'paytmasi nolga teng: $(\vec{v}_i, \vec{v}_j) = 0, \forall \lambda_i \neq \lambda_j$).
> 3. **Diagonalizatsiya teoremasi:** Ixtiyoriy haqiqiy simmetrik matritsa uchun shunday ortogonal $Q$ matritsa mavjudki ($Q^{-1} = Q^T$), uning yordamida matritsa diagonal ko'rinishga keltiriladi:
> $$
> Q^T A Q = \Lambda = \begin{pmatrix} \lambda_1 & 0 & \dots & 0 \\ 0 & \lambda_2 & \dots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \dots & \lambda_n \end{pmatrix}
> $$

---

## 2. Ortogonal almashtirishning 5 bosqichli algoritmi

Kvadratik formani ortogonal almashtirish yordamida kanonik ko'rinishga keltirish qat'iy ketma-ketlikda bajariladi:

### 1-bosqich: Simmetrik matritsani tuzish
Bosh diagonalga kvadratlar oldidagi koeffitsiyentlar $a_{ii}$ qo'yiladi. Nodiagonal kataklarga esa aralash ko'paytmalar $x_i x_j$ oldidagi koeffitsiyentning **yarmi** qo'yiladi:
$$
a_{ij} = a_{ji} = \frac{1}{2} c_{ij} \quad (i \neq j)
$$

### 2-bosqich: Xos sonlarni topish
Matritsaning xarakteristik tenglamasi tuziladi va yechiladi:
$$
\det(A - \lambda E) = 0
$$
Hosil bo'lgan ildizlar $\lambda_1, \lambda_2, \dots, \lambda_n$ kanonik ko'rinishdagi yangi o'zgaruvchilar kvadratlarining koeffitsiyentlari bo'ladi.

### 3-bosqich: Xos vektorlarni topish
Har bir xos son $\lambda_i$ uchun bir jinsli chiziqli tenglamalar sistemasi yechiladi:
$$
(A - \lambda_i E)\vec{v}_i = \vec{0}
$$

### 4-bosqich: Ortonormal bazis va $Q$ matritsani shakllantirish
Topilgan xos vektorlar o'z uzunligiga bo'linib **normallanadi**:
$$
\vec{e}_i = \frac{\vec{v}_i}{|\vec{v}_i|} = \frac{\vec{v}_i}{\sqrt{v_{i1}^2 + v_{i2}^2 + \dots + v_{in}^2}}
$$
*(Agar karrali xos sonlar mavjud bo'lsa, ularga mos vektorlar Gramm-Shmidt usuli orqali ortogonallanadi).*

Normalangan vektorlar ustun qilib yozilib, ortogonal o'tish matritsasi $Q$ tuziladi:
$$
Q = (\vec{e}_1 \mid \vec{e}_2 \mid \dots \mid \vec{e}_n), \quad Q^T Q = E, \quad \det Q = 1
$$

### 5-bosqich: Kanonik ko'rinishni va almashtirish formulasini yozish
Yangi $Y = (y_1, y_2, \dots, y_n)^T$ koordinatalarda kvadratik forma quyidagi kanonik ko'rinishga ega bo'ladi:
$$
Q(y_1, y_2, \dots, y_n) = \lambda_1 y_1^2 + \lambda_2 y_2^2 + \dots + \lambda_n y_n^2
$$
Koordinatalarni almashtirish formulasi: $X = QY$.

---

## 3. Qadamma-qadam to'liq tahlil qilingan amaliy misollar

### 1-namunaviy misol (2D holat — Ellipsni bosh o'qlarga keltirish)

**Masala:** Ushbu kvadratik formani ortogonal almashtirish yordamida kanonik ko'rinishga keltiring va mos o'tish matritsasini toping:
$$
Q(x_1, x_2) = 5x_1^2 + 4x_1 x_2 + 8x_2^2
$$

#### Yechish:

**1-qadam. Matritsani tuzamiz:**
Kvadratlar: $a_{11} = 5$, $a_{22} = 8$.
Aralash ko'paytma: $4x_1 x_2 \implies a_{12} = a_{21} = \frac{4}{2} = 2$.
$$
A = \begin{pmatrix} 5 & 2 \\ 2 & 8 \end{pmatrix}
$$

**2-qadam. Xarakteristik tenglamani tuzamiz:**
$$
\det(A - \lambda E) = \begin{vmatrix} 5 - \lambda & 2 \\ 2 & 8 - \lambda \end{vmatrix} = 0
$$
Determinantni hisoblaymiz:
$$
(5 - \lambda)(8 - \lambda) - 4 = 0 \implies 40 - 13\lambda + \lambda^2 - 4 = 0
$$
$$
\lambda^2 - 13\lambda + 36 = 0
$$
Viyet teoremasiga ko'ra:
$$
(\lambda - 4)(\lambda - 9) = 0 \implies \lambda_1 = 4, \quad \lambda_2 = 9
$$

Demak, yangi koordinatalarda kanonik ko'rinish shubhasiz quyidagicha bo'ladi:
$$
Q(y_1, y_2) = 4y_1^2 + 9y_2^2
$$

**3-qadam. Xos vektorlarni topamiz:**

- **$\lambda_1 = 4$ uchun:**
$$
(A - 4E)\vec{v}_1 = \vec{0} \implies \begin{pmatrix} 5 - 4 & 2 \\ 2 & 8 - 4 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}
$$
$$
\begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} \implies v_1 + 2v_2 = 0 \implies v_1 = -2v_2
$$
$v_2 = 1$ deb olsak, $v_1 = -2$. Birinchi xos vektor: $\vec{v}_1 = \begin{pmatrix} -2 \\ 1 \end{pmatrix}$ (yoki $\begin{pmatrix} 2 \\ -1 \end{pmatrix}$).

- **$\lambda_2 = 9$ uchun:**
$$
(A - 9E)\vec{v}_2 = \vec{0} \implies \begin{pmatrix} 5 - 9 & 2 \\ 2 & 8 - 9 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}
$$
$$
\begin{pmatrix} -4 & 2 \\ 2 & -1 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} \implies -2v_1 + v_2 = 0 \implies v_2 = 2v_1
$$
$v_1 = 1$ deb olsak, $v_2 = 2$. Ikkinchi xos vektor: $\vec{v}_2 = \begin{pmatrix} 1 \\ 2 \end{pmatrix}$.

Tekshiramiz: $(\vec{v}_1, \vec{v}_2) = (-2)(1) + (1)(2) = -2 + 2 = 0$. Vektorlar haqiqatan ham ortogonal!

**4-qadam. Vektorlarni normallaymiz va $Q$ matritsani tuzamiz:**
$$
|\vec{v}_1| = \sqrt{(-2)^2 + 1^2} = \sqrt{5} \implies \vec{e}_1 = \begin{pmatrix} -\frac{2}{\sqrt{5}} \\ \frac{1}{\sqrt{5}} \end{pmatrix}
$$
$$
|\vec{v}_2| = \sqrt{1^2 + 2^2} = \sqrt{5} \implies \vec{e}_2 = \begin{pmatrix} \frac{1}{\sqrt{5}} \\ \frac{2}{\sqrt{5}} \end{pmatrix}
$$

Ortogonal almashtirish matritsasi:
$$
Q = \begin{pmatrix} -\frac{2}{\sqrt{5}} & \frac{1}{\sqrt{5}} \\ \frac{1}{\sqrt{5}} & \frac{2}{\sqrt{5}} \end{pmatrix} = \frac{1}{\sqrt{5}} \begin{pmatrix} -2 & 1 \\ 1 & 2 \end{pmatrix}
$$
Ushbu matritsaning determinanti: $\det Q = \frac{1}{5}(-4 - 1) = -1$ (ko'zgu akslanishi). Sof burish bo'lishi uchun $\vec{e}_1$ ning ishorasini almashtiramiz: $\vec{e}_1 = \begin{pmatrix} \frac{2}{\sqrt{5}} \\ -\frac{1}{\sqrt{5}} \end{pmatrix}$, u holda:
$$
Q = \frac{1}{\sqrt{5}} \begin{pmatrix} 2 & 1 \\ -1 & 2 \end{pmatrix}, \quad \det Q = \frac{1}{5}(4 - (-1)) = +1
$$

Koordinata almashtirish munosabati:
$$
\begin{cases} x_1 = \frac{2}{\sqrt{5}} y_1 + \frac{1}{\sqrt{5}} y_2 \\ x_2 = -\frac{1}{\sqrt{5}} y_1 + \frac{2}{\sqrt{5}} y_2 \end{cases}
$$

**Javob:** Kanonik ko'rinish: $Q(y_1, y_2) = 4y_1^2 + 9y_2^2$. O'tish matritsasi: $Q = \frac{1}{\sqrt{5}}\begin{pmatrix} 2 & 1 \\ -1 & 2 \end{pmatrix}$.

---

### 2-namunaviy misol (3D fazo — Uch o'lchovli kvadratik forma)

**Masala:** Quyidagi kvadratik formani ortogonal almashtirish bilan kanonik ko'rinishga keltiring:
$$
Q(x_1, x_2, x_3) = x_1^2 + x_2^2 + x_3^2 + 4x_1 x_2 + 4x_1 x_3 + 4x_2 x_3
$$

#### Yechish:

**1) Matritsani yozamiz:**
Kvadratlar oldi: $a_{11} = a_{22} = a_{33} = 1$.
Aralash ko'paytmalar: $4x_1 x_2 \implies a_{12} = a_{21} = 2$; $a_{13} = a_{31} = 2$; $a_{23} = a_{32} = 2$.
$$
A = \begin{pmatrix} 1 & 2 & 2 \\ 2 & 1 & 2 \\ 2 & 2 & 1 \end{pmatrix}
$$

**2) Xarakteristik tenglama:**
$$
\det(A - \lambda E) = \begin{vmatrix} 1 - \lambda & 2 & 2 \\ 2 & 1 - \lambda & 2 \\ 2 & 2 & 1 - \lambda \end{vmatrix} = 0
$$
Barcha satrlarni 1-satrga qo'shamiz:
$$
\begin{vmatrix} 5 - \lambda & 5 - \lambda & 5 - \lambda \\ 2 & 1 - \lambda & 2 \\ 2 & 2 & 1 - \lambda \end{vmatrix} = (5 - \lambda) \begin{vmatrix} 1 & 1 & 1 \\ 2 & 1 - \lambda & 2 \\ 2 & 2 & 1 - \lambda \end{vmatrix} = 0
$$
1-ustunni 2- va 3-ustunlardan ayiramiz:
$$
(5 - \lambda) \begin{vmatrix} 1 & 0 & 0 \\ 2 & -1 - \lambda & 0 \\ 2 & 0 & -1 - \lambda \end{vmatrix} = (5 - \lambda)(-1 - \lambda)^2 = 0
$$
Ildizlar:
$$
\lambda_1 = 5, \quad \lambda_2 = \lambda_3 = -1 \quad (\text{karrali ildiz})
$$

Demak, kanonik ko'rinish:
$$
Q(y_1, y_2, y_3) = 5y_1^2 - y_2^2 - y_3^2
$$

**3) Xos vektorlar:**

- **$\lambda_1 = 5$ uchun:**
$$
\begin{pmatrix} -4 & 2 & 2 \\ 2 & -4 & 2 \\ 2 & 2 & -4 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \\ v_3 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}
$$
Soddalashtirsak: $v_1 = v_2 = v_3 = 1$.
$$
\vec{v}_1 = \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix} \implies |\vec{v}_1| = \sqrt{3} \implies \vec{e}_1 = \frac{1}{\sqrt{3}} \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}
$$

- **$\lambda_2 = \lambda_3 = -1$ (karralik tartibi 2) uchun:**
$$
(A - (-1)E)\vec{v} = \begin{pmatrix} 2 & 2 & 2 \\ 2 & 2 & 2 \\ 2 & 2 & 2 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \\ v_3 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix} \implies v_1 + v_2 + v_3 = 0
$$
Bu tekislik tenglamasidir! Bizga tekislikda yotuvchi va o'zaro ortogonal bo'lgan ikkita vektor kerak:
1. $v_2 = 1, v_3 = 0 \implies v_1 = -1 \implies \vec{v}_2 = \begin{pmatrix} -1 \\ 1 \\ 0 \end{pmatrix}$.
2. $\vec{v}_3$ vektor $\vec{v}_2$ ga ham, $\vec{v}_1$ ga ham ortogonal bo'lishi kerak. Vektor ko'paytma orqali topamiz:
$$
\vec{v}_3 = \vec{v}_1 \times \vec{v}_2 = \begin{vmatrix} \vec{i} & \vec{j} & \vec{k} \\ 1 & 1 & 1 \\ -1 & 1 & 0 \end{vmatrix} = \vec{i}(0 - 1) - \vec{j}(0 - (-1)) + \vec{k}(1 - (-1)) = \begin{pmatrix} -1 \\ -1 \\ 2 \end{pmatrix}
$$

Vektorlarni normallaymiz:
$$
|\vec{v}_2| = \sqrt{(-1)^2 + 1^2 + 0} = \sqrt{2} \implies \vec{e}_2 = \frac{1}{\sqrt{2}} \begin{pmatrix} -1 \\ 1 \\ 0 \end{pmatrix}
$$
$$
|\vec{v}_3| = \sqrt{(-1)^2 + (-1)^2 + 2^2} = \sqrt{6} \implies \vec{e}_3 = \frac{1}{\sqrt{6}} \begin{pmatrix} -1 \\ -1 \\ 2 \end{pmatrix}
$$

**4) Ortogonal almashtirish matritsasi $Q$:**
$$
Q = \begin{pmatrix} \frac{1}{\sqrt{3}} & -\frac{1}{\sqrt{2}} & -\frac{1}{\sqrt{6}} \\ \frac{1}{\sqrt{3}} & \frac{1}{\sqrt{2}} & -\frac{1}{\sqrt{6}} \\ \frac{1}{\sqrt{3}} & 0 & \frac{2}{\sqrt{6}} \end{pmatrix}
$$

**Javob:** Kanonik ko'rinish: $Q(y_1, y_2, y_3) = 5y_1^2 - y_2^2 - y_3^2$.

---

## 4. Talabalar eng ko'p yo'l qo'yadigan xatolar va tuzoqlar

> [!WARNING] Imtihonda ehtiyot bo'ling!
> 1. **Aralash ko'paytmani 2 ga bo'lmaslik:** Matritsa tuzayotganda $6x_1 x_2$ hadni to'g'ridan-to'g'ri $a_{12} = 6$ deb yozib ketish eng ko'p uchraydigan xatodir! Doimo esda tuting: $a_{12} = a_{21} = \frac{6}{2} = 3$.
> 2. **Vektorlarni normallashni unutish:** Agar xos vektorlar $\vec{v}_i$ o'z uzunligiga bo'linmasa, hosil bo'lgan $T$ matritsa ortogonal bo'lmaydi ($T^T T \neq E$). Natijada $T^{-1} \neq T^T$ bo'lib, butun hisob-kitob buziladi.
> 3. **Karrali xos sonlarda ixtiyoriy vektor tanlash:** Karrali xos son chiqsa, tanlangan ikki xos vektor o'zaro ortogonal bo'lishi shart ($(\vec{v}_2, \vec{v}_3) = 0$). Aks holda o'tish matritsasi ortogonal bo'lmaydi.
> 4. **Xos sonlar va ustunlar tartibini adashtirish:** Agar $Q$ matritsaning 1-ustuniga $\lambda_1$ ga mos $\vec{e}_1$ qo'yilsa, kanonik formada albatta birinchi had $\lambda_1 y_1^2$ bo'lishi shart! Agar ustunlar o'rni almashsa, kvadratlar indeksi ham almashadi.

---

## 5. Mustaqil yechish uchun amaliy mashqlar

Quyidagi kvadratik formalarni ortogonal almashtirish yordamida kanonik ko'rinishga keltiring va $Q$ matritsani toping:

1. $Q(x_1, x_2) = 3x_1^2 + 8x_1 x_2 - 3x_2^2$
   - *Javob:* $\lambda_1 = 5, \lambda_2 = -5 \implies Q(y_1, y_2) = 5y_1^2 - 5y_2^2$. O'tish matritsasi: $Q = \frac{1}{\sqrt{5}}\begin{pmatrix} 2 & -1 \\ 1 & 2 \end{pmatrix}$.

2. $Q(x_1, x_2) = 2x_1^2 + 4x_1 x_2 + 5x_2^2$
   - *Javob:* $\lambda_1 = 1, \lambda_2 = 6 \implies Q(y_1, y_2) = y_1^2 + 6y_2^2$. O'tish matritsasi: $Q = \frac{1}{\sqrt{5}}\begin{pmatrix} 2 & 1 \\ -1 & 2 \end{pmatrix}$.

3. $Q(x_1, x_2, x_3) = 2x_1 x_2 + 2x_1 x_3 + 2x_2 x_3$
   - *Javob:* $\lambda_1 = 2, \lambda_2 = \lambda_3 = -1 \implies Q(y_1, y_2, y_3) = 2y_1^2 - y_2^2 - y_3^2$.
