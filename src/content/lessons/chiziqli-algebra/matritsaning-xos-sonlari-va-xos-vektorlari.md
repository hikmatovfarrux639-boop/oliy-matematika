---
title: "Matritsaning xos sonlari, xos vektorlari va diagonallashtirish"
module: "chiziqli-algebra"
order: 17
description: "Av = λv tenglamasi, xarakteristik ko'pxad, xos sonlar xossalari, xos vektorlarni topish, matritsani diagonallashtirish va A^k darajasini hisoblash."
---

## Kirish: Yo'nalishini o'zgartirmaydigan sehrli vektorlar

Tasavvur qiling, siz rezina varaqqa turli chiziqlar chizib, uni burchaklaridan tortib cho'zdingiz va burdingiz. Aksariyat barcha chiziqlar o'z yo'nalishini o'zgartiradi va egiladi.

Biroq har qanday bunday deformatsiyada shunday maxsus yo'nalishlar mavjudki, ular **o'z yo'nalishini zarracha o'zgartirmaydi**, faqatgina cho'ziladi, qisqaradi yoki qarama-qarshi tomonga teskari o'giriladi!

Mana shu noyob yo'nalishlar chiziqli algebrada **XOS VEKTORLAR (Eigenvectors)**, ularning o'q bo'ylab cho'zilish koeffitsiyenti esa **XOS SONLAR (Eigenvalues)** deyiladi.

### Bu tushuncha qayerda ishlatiladi?
- **Google PageRank:** Internetdagi milliardlab veb-sahifalarning nufuzini hisoblash ulkan havola matritsasining asosiy xos vektorini topishga tayanadi.
- **Ko'priklar va binolar rezonansi:** Har bir inshoot o'z xos tebranish chastotasiga ($\lambda$) ega. Agar shamol yoki askarlar qadami chastotasi ushbu xos songa teng kelsa, halokatli rezonans yuz beradi (Takoma ko'prigi qulashi).
- **Sun'iy intellekt va SVD/PCA:** Katta o'lchamli ma'lumotlarni eng muhim xos o'qlar bo'ylab siqish.
- **Kvant fizikasi:** Shryodinger tenglamasida energiya sathlari — Gamiltonian operatorining aynan xos sonlaridir!

---

## 1. Asosiy ta'rif va tenglama

Faraz qilaylik, $A$ — $n \times n$ o'lchamli kvadrat matritsa bo'lsin.
Agar shunday **noldan farqli ($\vec{v} \neq \vec{0}$)** vektor va qandaydir $\lambda$ soni mavjud bo'lsaki,

$$
A \cdot \vec{v} = \lambda \cdot \vec{v}
$$

tenglik bajarilsa:
- $\lambda$ soniga $A$ matritsaning **xos soni** (xos qiymati);
- $\vec{v}$ vektoriga esa $\lambda$ xos songa mos keluvchi **xos vektori** deyiladi.

> [!NOTE] Muhim geometrik ma'no
> $A$ matritsaning $\vec{v}$ vektorga ta'siri uni oddiygina $\lambda$ soniga ko'paytirish bilan teng kuchlidir! Vektor burilmaydi, faqat $|\lambda|$ marta cho'ziladi (agar $\lambda < 0$ bo'lsa, yo'nalishi teskariga o'zgaradi).

---

## 2. Xos sonlarni topish: Xarakteristik tenglama

Tenglamani bir tomonga o'tkazamiz va birlik matritsa $E$ ni kiritamiz:
$$
A \vec{v} - \lambda E \vec{v} = \vec{0} \implies (A - \lambda E) \vec{v} = \vec{0}
$$

Bu bir jinsli chiziqli tenglamalar sistemasidir. Ma'lumki, bunday sistema **noldan farqli ($\vec{v} \neq \vec{0}$)** yechimga ega bo'lishi uchun uning asosiy determinanti **nolga teng bo'lishi zarur va yetarli**:

$$
\mathbf{\det(A - \lambda E) = 0}
$$

Ushbu determinant $\lambda$ ga nisbatan $n$-darajali ko'phadni hosil qiladi va u **Xarakteristik ko'pxad**, tenglama esa **Xarakteristik tenglama** deyiladi.

---

## 3. Xos sonlarning 4 ta "oltin" xossasi

Har qanday hisoblashdan so'ng xos sonlarning to'g'riligini darhol tekshirish imkonini beruvchi 4 ta fundamental invariant mavjud:

1. **Iz (Trace) xossasi:** Barcha xos sonlar yig'indisi matritsaning bosh diagonal elementlari yig'indisiga (iziga) teng:
   $$
   \lambda_1 + \lambda_2 + \dots + \lambda_n = \operatorname{tr}(A) = \sum_{i=1}^n a_{ii}
   $$
2. **Determinant xossasi:** Barcha xos sonlar ko'paytmasi matritsaning determinantiga teng:
   $$
   \lambda_1 \cdot \lambda_2 \cdot \dots \cdot \lambda_n = \det A
   $$
   *(Xususan, agar matritsaning determinanti $\det A = 0$ bo'lsa, uning xos sonlaridan kamida bittasi albatta $\lambda = 0$ bo'ladi!).*
3. **Daraja xossasi:** Agar $\lambda$ soni $A$ matritsaning xos soni bo'lsa, u holda $\lambda^k$ soni $A^k$ matritsaning xos soni bo'ladi.
4. **Teskari matritsa xossasi:** Agar $A$ matritsa teskarilanuvchi bo'lsa ($\det A \neq 0$), $A^{-1}$ matritsaning xos sonlari $\frac{1}{\lambda_i}$ ga teng bo'ladi.

---

## 4. Xos vektorlarni topish algoritmi

Har bir topilgan $\lambda_i$ xos son uchun:
1. $(A - \lambda_i E) \vec{v} = \vec{0}$ bir jinsli sistemasi tuziladi.
2. Matritsaning determinanti nolga teng bo'lgani uchun, tenglamalardan kamida bittasi qisqaradi (erkin o'zgaruvchi paydo bo'ladi).
3. Sistema Gauss usuli bilan yechilib, fundamental yechimlar sistemasi (FYS) topiladi. Bu FYS xos vektorni tashkil qiladi!

> [!NOTE] Xos vektorlar oilasi
> Agar $\vec{v}$ vektor $\lambda$ ga mos xos vektor bo'lsa, uning har qanday noldan farqli karralisi $c \cdot \vec{v}$ ($c \neq 0$) ham aynan shu xos songa mos xos vektor bo'ladi. Shuning uchun xos vektor yo'nalishni (to'g'ri chiziqni) ifodalaydi.

---

## 5. Matritsani diagonallashtirish va $A^k$ darajasini hisoblash

Agar $n$-tartibli $A$ matritsa $n$ ta chiziqli erkli xos vektorga ega bo'lsa, bu vektorlarni ustun qilib o'tish matritsasi tuziladi:
$$
T = (\vec{v}_1 \mid \vec{v}_2 \mid \dots \mid \vec{v}_n)
$$
U holda $A$ matritsa xos vektorlar bazisida **diagonal ko'rinishga** keladi:
$$
T^{-1} A T = \Lambda = \begin{pmatrix}
\lambda_1 & 0 & \dots & 0 \\
0 & \lambda_2 & \dots & 0 \\
\vdots & \vdots & \ddots & \vdots \\
0 & 0 & \dots & \lambda_n
\end{pmatrix}
$$

### Bu nimaga kerak? $A^{1000}$ ni hisoblash siri:
Diagonal matritsani ixtiyoriy $k$-darajaga ko'tarish uchun shunchaki diagonal elementlarini darajaga ko'tarish kifoya!
$$
\Lambda^k = \begin{pmatrix} \lambda_1^k & 0 \\ 0 & \lambda_2^k \end{pmatrix}
$$
Bundan foydalanib, ulkan $A^k$ daraja oson topiladi:
$$
A^k = T \cdot \Lambda^k \cdot T^{-1}
$$

---

## 6. Qadamma-qadam to'liq yechilgan amaliy misollar

### 1-misol: Xos sonlar, xos vektorlar va $A^{10}$ darajasini hisoblash

**Masala:** Matritsaning xos sonlari va xos vektorlarini toping, uni diagonal ko'rinishga keltiring va $A^{10}$ ni hisoblang:
$$
A = \begin{pmatrix} 4 & 2 \\ 1 & 3 \end{pmatrix}
$$

#### Yechish:

**1-qadam. Xarakteristik tenglamani tuzamiz:**
$$
\det(A - \lambda E) = \begin{vmatrix} 4 - \lambda & 2 \\ 1 & 3 - \lambda \end{vmatrix} = 0
$$
Determinantni ochamiz:
$$
(4 - \lambda)(3 - \lambda) - (2)(1) = 12 - 7\lambda + \lambda^2 - 2 = 0
$$
$$
\lambda^2 - 7\lambda + 10 = 0
$$
Viyet teoremasi bilan yechamiz:
$$
(\lambda - 5)(\lambda - 2) = 0 \implies \mathbf{\lambda_1 = 5, \quad \lambda_2 = 2}
$$

**Tekshiramiz:**
- $\lambda_1 + \lambda_2 = 5 + 2 = 7$; $\operatorname{tr}(A) = 4 + 3 = 7$ (Mos keldi!).
- $\lambda_1 \cdot \lambda_2 = 5 \cdot 2 = 10$; $\det A = 4 \cdot 3 - 2 \cdot 1 = 10$ (Mos keldi!).

---

**2-qadam. Xos vektorlarni topamiz:**

- **$\lambda_1 = 5$ uchun:**
$$
(A - 5E)\vec{v} = \begin{pmatrix} 4 - 5 & 2 \\ 1 & 3 - 5 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix} -1 & 2 \\ 1 & -2 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}
$$
Tenglama: $-v_1 + 2v_2 = 0 \implies v_1 = 2v_2$.
$v_2 = 1$ deb olsak, $v_1 = 2$.
Birinchi xos vektor:
$$
\vec{v}_1 = \begin{pmatrix} 2 \\ 1 \end{pmatrix}
$$

- **$\lambda_2 = 2$ uchun:**
$$
(A - 2E)\vec{v} = \begin{pmatrix} 4 - 2 & 2 \\ 1 & 3 - 2 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix} 2 & 2 \\ 1 & 1 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}
$$
Tenglama: $v_1 + v_2 = 0 \implies v_1 = -v_2$.
$v_2 = 1$ deb olsak, $v_1 = -1$.
Ikkinchi xos vektor:
$$
\vec{v}_2 = \begin{pmatrix} -1 \\ 1 \end{pmatrix}
$$

---

**3-qadam. Matritsani diagonallashtirish:**
O'tish matritsasi $T$ va uning teskarisi $T^{-1}$:
$$
T = \begin{pmatrix} 2 & -1 \\ 1 & 1 \end{pmatrix}, \quad \det T = 2(1) - (-1)(1) = 3
$$
$$
T^{-1} = \frac{1}{3} \begin{pmatrix} 1 & 1 \\ -1 & 2 \end{pmatrix}
$$
Diagonal shakl:
$$
\Lambda = T^{-1} A T = \begin{pmatrix} 5 & 0 \\ 0 & 2 \end{pmatrix}
$$

---

**4-qadam. $A^{10}$ darajani hisoblash:**
$$
A^{10} = T \cdot \Lambda^{10} \cdot T^{-1} = \begin{pmatrix} 2 & -1 \\ 1 & 1 \end{pmatrix} \begin{pmatrix} 5^{10} & 0 \\ 0 & 2^{10} \end{pmatrix} \cdot \frac{1}{3} \begin{pmatrix} 1 & 1 \\ -1 & 2 \end{pmatrix}
$$
Ko'paytirishni bajaramiz:
$$
= \frac{1}{3} \begin{pmatrix} 2 \cdot 5^{10} & -2^{10} \\ 5^{10} & 2^{10} \end{pmatrix} \begin{pmatrix} 1 & 1 \\ -1 & 2 \end{pmatrix} = \frac{1}{3} \begin{pmatrix} 2 \cdot 5^{10} + 2^{10} & 2 \cdot 5^{10} - 2 \cdot 2^{10} \\ 5^{10} - 2^{10} & 5^{10} + 2 \cdot 2^{10} \end{pmatrix}
$$

**Javob:**
Xos sonlar: $\lambda_1 = 5, \lambda_2 = 2$.
Xos vektorlar: $\vec{v}_1 = (2, 1)^T, \vec{v}_2 = (-1, 1)^T$.
$A^{10} = \frac{1}{3} \begin{pmatrix} 2 \cdot 5^{10} + 2^{10} & 2 \cdot 5^{10} - 2^{11} \\ 5^{10} - 2^{10} & 5^{10} + 2^{11} \end{pmatrix}$.

---

### 2-misol: $3 \times 3$ matritsaning xos son va vektorlari

**Masala:** Ushbu matritsaning xos son va xos vektorlarini toping:
$$
A = \begin{pmatrix} 3 & -1 & 1 \\ -1 & 5 & -1 \\ 1 & -1 & 3 \end{pmatrix}
$$

#### Yechish:
1. Xarakteristik tenglama:
$$
\begin{vmatrix} 3 - \lambda & -1 & 1 \\ -1 & 5 - \lambda & -1 \\ 1 & -1 & 3 - \lambda \end{vmatrix} = 0
$$
1-satrga 3-satrni qo'shamiz:
$$
\begin{vmatrix} 4 - \lambda & -2 & 4 - \lambda \\ -1 & 5 - \lambda & -1 \\ 1 & -1 & 3 - \lambda \end{vmatrix} = 0
$$
1-ustunni 3-ustundan ayiramiz:
$$
\begin{vmatrix} 4 - \lambda & -2 & 0 \\ -1 & 5 - \lambda & 0 \\ 1 & -1 & 2 - \lambda \end{vmatrix} = (2 - \lambda) \left[ (4 - \lambda)(5 - \lambda) - 2 \right] = 0
$$
$$
(2 - \lambda)(\lambda^2 - 9\lambda + 18) = 0 \implies (2 - \lambda)(\lambda - 3)(\lambda - 6) = 0
$$
Xos sonlar:
$$
\mathbf{\lambda_1 = 2, \quad \lambda_2 = 3, \quad \lambda_3 = 6}
$$

**Tekshirish:**
- $\operatorname{tr}(A) = 3 + 5 + 3 = 11$; $\lambda_1 + \lambda_2 + \lambda_3 = 2 + 3 + 6 = 11$ (Mos!).

2. Mos xos vektorlar:
- $\lambda_1 = 2 \implies (A - 2E)\vec{v} = \vec{0} \implies \vec{v}_1 = (-1, 0, 1)^T$;
- $\lambda_2 = 3 \implies (A - 3E)\vec{v} = \vec{0} \implies \vec{v}_2 = (1, 1, 1)^T$;
- $\lambda_3 = 6 \implies (A - 6E)\vec{v} = \vec{0} \implies \vec{v}_3 = (1, -2, 1)^T$.

Vektorlar simmetrik matritsa bo'lgani uchun o'zaro ortogonaldir: $(\vec{v}_1, \vec{v}_2) = 0, (\vec{v}_1, \vec{v}_3) = 0, (\vec{v}_2, \vec{v}_3) = 0$.

---

## 7. Talabalar yo'l qo'yadigan tuzoqlar

> [!WARNING] Imtihonda ehtiyot bo'ling!
> 1. **Nol vektorni xos vektor deb olish:** Nol vektor $\vec{0} = (0, 0, \dots, 0)^T$ **hech qachon xos vektor bo'la olmaydi** (ta'rif bo'yicha $\vec{v} \neq \vec{0}$). Ammo xos son $\lambda = 0$ bo'lishi mumkin!
> 2. **Xarakteristik tenglamada ishoralarni adashtirish:** $\det(A - \lambda E)$ ni ochishda manfiy ishoralarni yo'qotib qo'yish. Har doim $\sum \lambda_i = \operatorname{tr}(A)$ va $\prod \lambda_i = \det A$ orqali o'zingizni tekshiring!
> 3. **Diagonallashtirishda xos vektorlar tartibini buzish:** Agar diagonal matritsada $\Lambda = \operatorname{diag}(\lambda_1, \lambda_2)$ bo'lsa, o'tish matritsasi $T$ da albatta 1-ustun $\vec{v}_1$, 2-ustun esa $\vec{v}_2$ bo'lishi shart!

---

## 8. Mustaqil yechish uchun amaliy mashqlar

1. $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$ matritsaning xos son va xos vektorlarini toping.
   - *Javob:* $\lambda_1 = 3 \implies \vec{v}_1 = (1, 1)^T$; $\lambda_2 = 1 \implies \vec{v}_2 = (-1, 1)^T$.

2. $A = \begin{pmatrix} 1 & 4 \\ 2 & 3 \end{pmatrix}$ matritsaning xos sonlarini toping va $A^5$ ni hisoblang.
   - *Javob:* $\lambda_1 = 5, \lambda_2 = -1$.
