---
title: "Markov zanjirlari, o'tish ehtimolliklari matritsasi va stoxastik modellar"
description: "Diskret Markov jarayonlari, Chapman-Kolmogorov tenglamasi, statsionar taqsimot va amaliy tatbiqlar (PageRank algoritmi)."
module: "ehtimollar-nazariyasi"
order: 14
---

## 📌 Kirish va Amaliy Mohiyati

Klassik ehtimollar nazariyasida ketma-ket tajribalar odatda o'zaro bog'liq emas deb qaraladi (masalan, tanga yoki o'yin suyagini qayta-qayta tashlash). Biroq tabiat va jamiyatdagi real jarayonlar — ob-havoning kundan-kunga o'zgarishi, aksiyalar narxining tebranishi, tildagi harf va so'zlarning ketma-ket kelishi (zamonaviy LLM til modellaridagi tokenlar generatori) hamda internet tarmoqlarida foydalanuvchilarning havolalar bo'ylab harakati — oldingi holatlarga chambarchas bog'liqdir.

Buyuk matematik Andrey Andreyevich Markov 1906-yilda fanga inqilobiy g'oyani kiritdi: **"Jarayonning kelajakdagi holati faqat uning hozirgi holatiga bog'liq bo'lib, o'tmishda bu holatga qanday yetib kelinganiga mutlaqo bog'liq emas"** (Markov xossasi yoki "xotirasizlik"). Bugungi kunda Markov zanjirlari Google kompaniyasining asosini tashkil etgan PageRank qidiruv algoritmidan tortib, bioinformatika va moliyaviy xatarlarni baholashgacha keng qo'llanadi.

---

## 📐 Asosiy Nazariya, Qoidalar va Teoremalar

### 1. Markov zanjiri va Markov xossasi ta'rifi

Diskret vaqtli $X_0, X_1, X_2, \dots$ stoxastik jarayonining mumkin bo'lgan qiymatlari to'plami $S = \{1, 2, \dots, K\}$ (holatlar fazosi) bo'lsin.
Agar ixtiyoriy $n$ va har qanday holatlar ketma-ketligi uchun quyidagi shart bajarilsa, bu jarayon **Markov zanjiri** deyiladi:

$$
P(X_{n+1} = j \mid X_n = i, X_{n-1} = i_{n-1}, \dots, X_0 = i_0) = P(X_{n+1} = j \mid X_n = i) = p_{ij}
$$

Agar $p_{ij}$ ehtimollik qadam raqami $n$ ga bog'liq bo'lmasa, zanjir **bir jinsli Markov zanjiri** deyiladi.

---

### 2. O'tish ehtimolliklari matritsasi (Stoxastik matritsa)

Bir qadamda holatdan holatga o'tish ehtimolliklari $K \times K$ o'lchamli $\mathbf{P}$ matritsaga joylashtiriladi:
$$
\mathbf{P} = \begin{pmatrix}
p_{11} & p_{12} & \dots & p_{1K} \\
p_{21} & p_{22} & \dots & p_{2K} \\
\vdots & \vdots & \ddots & \vdots \\
p_{K1} & p_{K2} & \dots & p_{KK}
\end{pmatrix}
$$

> **Stoxastik matritsa shartlari:**
> 1. Barcha elementlar nomanfiy: $p_{ij} \ge 0$.
> 2. Har bir satr elementlari yig'indisi qat'iy $1$ ga teng:
>    $$
>    \sum_{j=1}^K p_{ij} = 1 \quad (\forall i \in S)
>    $$

---

### 3. Chapman-Kolmogorov tenglamasi va $n$-qadamli o'tish

$i$ holatdan $j$ holatga aynan $n$ ta qadamda o'tish ehtimolligi $p_{ij}^{(n)} = P(X_n = j \mid X_0 = i)$ bilan belgilanadi.

> **Chapman-Kolmogorov teoremasi:**
> Har qanday $m, n \ge 1$ butun sonlar uchun:
> $$
> p_{ij}^{(m+n)} = \sum_{k=1}^K p_{ik}^{(m)} p_{kj}^{(n)} \iff \mathbf{P}^{(m+n)} = \mathbf{P}^m \cdot \mathbf{P}^n
> $$

Xususan, $n$-qadamdagi o'tish matritsasi bir qadamli matritsaning $n$-darajasiga teng:
$$
\mathbf{P}^{(n)} = \mathbf{P}^n
$$
Agar boshlang'ich taqsimot satr-vektori $\mathbf{\pi}^{(0)} = (P(X_0=1), \dots, P(X_0=K))$ bo'lsa, $n$-qadamdan keyingi holatlar taqsimoti:
$$
\mathbf{\pi}^{(n)} = \mathbf{\pi}^{(0)} \mathbf{P}^n
$$

---

### 4. Statsionar (Muvozanat) taqsimot va Ergodiklik

Agar Markov zanjirida har qanday holatdan boshqa ixtiyoriy holatga ma'lum qadamda o'tish mumkin bo'lsa (keltirilmaydigan / irreducible) va davrga ega bo'lmasa (aperiodik), bu zanjir **ergodik** deyiladi.

> **Markov zanjirining ergodiklik teoremasi:**
> Ergodik Markov zanjirida $n \to \infty$ da boshlang'ich taqsimot qanday bo'lishidan qat'i nazar, yagona barqaror **statsionar taqsimot** $\boldsymbol{\pi} = (\pi_1, \pi_2, \dots, \pi_K)$ mavjud bo'lib:
> $$
> \lim_{n \to \infty} \mathbf{P}^n = \begin{pmatrix} \pi_1 & \pi_2 & \dots & \pi_K \\ \pi_1 & \pi_2 & \dots & \pi_K \\ \vdots & \vdots & \ddots & \vdots \end{pmatrix}
> $$
> Statsionar vektor quyidagi chiziqli tenglamalar sistemasidan bir qiymatli topiladi:
> $$
> \boldsymbol{\pi} \mathbf{P} = \boldsymbol{\pi} \quad \text{va} \quad \sum_{i=1}^K \pi_i = 1 \quad (\pi_i > 0)
> $$

---

## 📝 Qadamma-qadam Yechilgan Amaliy Misollar

### 1-misol: Ob-havo modelida ko'p qadamli o'tish ehtimolliklarini hisoblash

**Masala:** Ma'lum hududda ob-havo 2 ta holatda bo'lishi mumkin: 1 — "Quyoshli", 2 — "Yomg'irli".
Kuzatishlarga ko'ra:
- Agar bugun quyoshli bo'lsa, ertaga ham quyoshli bo'lish ehtimoli 0.8, yomg'ir yog'ishi 0.2.
- Agar bugun yomg'ir yog'sa, ertaga quyosh chiqish ehtimoli 0.4, yomg'ir davom etishi 0.6.
Bugun dushanba va havo quyoshli. Chorshanba kuni (2 kundan keyin) yomg'ir yog'ish ehtimolini toping.

**Yechish:**
1. O'tish matritsasini tuzamiz:
   $$
   \mathbf{P} = \begin{pmatrix} 0.8 & 0.2 \\ 0.4 & 0.6 \end{pmatrix}
   $$
2. Boshlang'ich taqsimot vektori (bugun aniq quyoshli): $\mathbf{\pi}^{(0)} = (1, 0)$.
3. Ikki qadamli o'tish matritsasi $\mathbf{P}^2$ ni hisoblaymiz:
   $$
   \mathbf{P}^2 = \mathbf{P} \cdot \mathbf{P} = \begin{pmatrix} 0.8 & 0.2 \\ 0.4 & 0.6 \end{pmatrix} \begin{pmatrix} 0.8 & 0.2 \\ 0.4 & 0.6 \end{pmatrix}
   $$
   $$
   p_{11}^{(2)} = (0.8)(0.8) + (0.2)(0.4) = 0.64 + 0.08 = 0.72
   $$
   $$
   p_{12}^{(2)} = (0.8)(0.2) + (0.2)(0.6) = 0.16 + 0.12 = 0.28
   $$
   $$
   p_{21}^{(2)} = (0.4)(0.8) + (0.6)(0.4) = 0.32 + 0.24 = 0.56
   $$
   $$
   p_{22}^{(2)} = (0.4)(0.2) + (0.6)(0.6) = 0.08 + 0.36 = 0.44
   $$
   $$
   \mathbf{P}^2 = \begin{pmatrix} 0.72 & 0.28 \\ 0.56 & 0.44 \end{pmatrix}
   $$
4. 2 kundan keyingi taqsimot: $\mathbf{\pi}^{(2)} = (1, 0) \cdot \mathbf{P}^2 = (0.72, \; 0.28)$.

**Javob:** Chorshanba kuni yomg'ir yog'ish ehtimoli $p_{12}^{(2)} = 0.28$ (28%) ga teng.

---

### 2-misol: Ob-havo modelining statsionar taqsimotini topish

**Masala:** 1-misoldagi zanjir uchun uzoq kelajakda yil davomida quyoshli va yomg'irli kunlarning o'rtacha ulushini (statsionar taqsimotini) toping.

**Yechish:**
1. Statsionar shartni yozamiz: $\boldsymbol{\pi} \mathbf{P} = \boldsymbol{\pi}$, bu yerda $\boldsymbol{\pi} = (\pi_1, \pi_2)$.
   $$
   (\pi_1, \; \pi_2) \begin{pmatrix} 0.8 & 0.2 \\ 0.4 & 0.6 \end{pmatrix} = (\pi_1, \; \pi_2)
   $$
2. Tenglamalar sistemasini tuzamiz:
   $$
   \begin{cases} 0.8\pi_1 + 0.4\pi_2 = \pi_1 \\ 0.2\pi_1 + 0.6\pi_2 = \pi_2 \end{cases} \implies \begin{cases} -0.2\pi_1 + 0.4\pi_2 = 0 \\ 0.2\pi_1 - 0.4\pi_2 = 0 \end{cases}
   $$
   Ikkala tenglama ham bitta munosabatni beradi: $0.2\pi_1 = 0.4\pi_2 \implies \pi_1 = 2\pi_2$.
3. Normallash shartini qo'shamiz:
   $$
   \pi_1 + \pi_2 = 1 \implies 2\pi_2 + \pi_2 = 1 \implies 3\pi_2 = 1 \implies \pi_2 = \frac{1}{3}
   $$
   $$
   \pi_1 = 2 \cdot \frac{1}{3} = \frac{2}{3}
   $$

**Javob:** Statsionar taqsimot $\boldsymbol{\pi} = \left(\frac{2}{3}, \frac{1}{3}\right)$. Demak, uzoq muddatda kunlarning taxminan 66.7% qismi quyoshli, 33.3% qismi yomg'irli bo'ladi.

---

### 3-misol: Yutiluvchi (absorbing) holatli zanjir va sinish ehtimoli

**Masala:** Qimorbozda 1 dollar bor. Har bir o'yinda u 0.5 ehtimollik bilan 1 dollar yutadi yoki 0.5 ehtimollik bilan 1 dollar yutqazadi. O'yin uning puli 0 ga tushganda (sinish) yoki 3 dollarga yetganda (g'alaba) to'xtaydi. Holatlar: $S = \{0, 1, 2, 3\}$. O'tish matritsasini tuzing va qimorbozning sinish ehtimolini hisoblang.

**Yechish:**
1. 0 va 3 holatlar yutiluvchi (chiqib bo'lmaydi): $p_{00} = 1, p_{33} = 1$.
   $$
   \mathbf{P} = \begin{pmatrix}
   1 & 0 & 0 & 0 \\
   0.5 & 0 & 0.5 & 0 \\
   0 & 0.5 & 0 & 0.5 \\
   0 & 0 & 0 & 1
   \end{pmatrix}
   $$
2. $u_k$ — qimorbozning puli $k$ dollar bo'lganda sinish (0 ga tushish) ehtimoli bo'lsin. Chegaraviy shartlar: $u_0 = 1, u_3 = 0$.
3. To'liq ehtimollik formulasiga ko'ra:
   $$
   u_1 = 0.5 u_0 + 0.5 u_2 = 0.5(1) + 0.5 u_2 \implies u_1 = 0.5 + 0.5 u_2
   $$
   $$
   u_2 = 0.5 u_1 + 0.5 u_3 = 0.5 u_1 + 0 \implies u_2 = 0.5 u_1
   $$
4. $u_2$ ni birinchi tenglamaga qo'yamiz:
   $$
   u_1 = 0.5 + 0.5(0.5 u_1) = 0.5 + 0.25 u_1 \implies 0.75 u_1 = 0.5 \implies u_1 = \frac{0.5}{0.75} = \frac{2}{3}
   $$
   $$
   u_2 = 0.5 \cdot \frac{2}{3} = \frac{1}{3}
   $$

**Javob:** Boshida 1 dollar bilan boshlagan qimorbozning sinish ehtimoli $u_1 = \frac{2}{3} \approx 66.7\%$.

---

### 4-misol: Google PageRank algoritmining soddalashtirilgan modeli

**Masala:** 3 ta veb-sahifa mavjud ($A, B, C$):
- $A$ sahifa faqat $B$ ga havola beradi.
- $B$ sahifa $A$ va $C$ ga havola beradi (teng ehtimol 0.5).
- $C$ sahifa faqat $A$ ga havola beradi.
Ushbu mini-internet tarmog'i uchun o'tish matritsasini tuzing va sahifalarning PageRank reytingini (statsionar ulushini) toping.

**Yechish:**
1. O'tish matritsasi $\mathbf{P}$:
   $$
   \mathbf{P} = \begin{pmatrix}
   0 & 1 & 0 \\
   0.5 & 0 & 0.5 \\
   1 & 0 & 0
   \end{pmatrix}
   $$
2. Statsionar tenglama: $(\pi_A, \pi_B, \pi_C) \mathbf{P} = (\pi_A, \pi_B, \pi_C)$.
   $$
   \begin{cases}
   0.5\pi_B + \pi_C = \pi_A \\
   \pi_A = \pi_B \\
   0.5\pi_B = \pi_C
   \end{cases}
   $$
3. $\pi_B = \pi_A$ ekanidan: $\pi_C = 0.5\pi_A$.
4. Normallash sharti:
   $$
   \pi_A + \pi_B + \pi_C = 1 \implies \pi_A + \pi_A + 0.5\pi_A = 1 \implies 2.5\pi_A = 1
   $$
   $$
   \pi_A = \frac{1}{2.5} = 0.4, \quad \pi_B = 0.4, \quad \pi_C = 0.2
   $$

**Javob:** PageRank reytingi: $A$ va $B$ sahifalar teng nufuzga ega (40% dan), $C$ sahifa eng past nufuzga ega (20%).

---

## ⚠️ Talabalar Ko'p Yo'l Qo'yadigan Xatolar

> [!WARNING] Imtihonda ehtiyot bo'ling!
> 1. **Satr va ustun stoxastikligini adashtirish:** Markov zanjirlarida satr bo'yicha ehtimolliklar yig'indisi 1 ga teng bo'ladi ($\sum_j p_{ij} = 1$). Agar tasodifan ustunlarni 1 ga tenglashtirsangiz, butun matritsa noto'g'ri bo'ladi.
> 2. **Statsionar tenglamada ko'paytirish tartibi:** Vektor chapdan ko'paytiriladi: $\boldsymbol{\pi} \mathbf{P} = \boldsymbol{\pi}$ (satr vektor). Agar $\mathbf{P} \boldsymbol{\pi}$ deb ko'paytirsangiz, shunchaki $\mathbf{P} \cdot \mathbf{1} = \mathbf{1}$ ga teng bo'lib qoladi va hech qanday yechim topilmaydi.
> 3. **Normallash tenglamasini unutish:** $\boldsymbol{\pi} \mathbf{P} = \boldsymbol{\pi}$ chiziqli sistemasi bir jinsli bo'lib, uning determinanti 0 ga teng. Faqat $\sum \pi_i = 1$ tenglamasini qo'shgandagina yagona yechim topiladi.

---

## 🎯 Mustaqil Yechish Uchun Masalalar

1. $\mathbf{P} = \begin{pmatrix} 0.5 & 0.5 \\ 0.25 & 0.75 \end{pmatrix}$ matritsali zanjir uchun statsionar taqsimot $\boldsymbol{\pi}$ ni toping.
   - *Yechish:* $0.5\pi_1 + 0.25\pi_2 = \pi_1 \implies 0.25\pi_2 = 0.5\pi_1 \implies \pi_2 = 2\pi_1$. $\pi_1 + 2\pi_1 = 1 \implies \pi_1 = \frac{1}{3}, \pi_2 = \frac{2}{3}$.
   - *Javob:* $\boldsymbol{\pi} = \left(\frac{1}{3}, \frac{2}{3}\right)$.

2. Agar zanjir o'tish matritsasi $\mathbf{P}$ bo'lsa, $\mathbf{P}^3$ matritsasining har bir satr elementlari yig'indisi nimaga teng bo'ladi?
   - *Yechish:* Ixtiyoriy darajali stoxastik matritsaning satrlar yig'indisi doimo 1 ga tengdir.
   - *Javob:* Qat'iy 1 ga teng.

3. Keltirilmaydigan (irreducible) Markov zanjiri nima?
   - *Yechish:* Agar zanjirdagi ixtiyoriy $i$ holatdan boshqa ixtiyoriy $j$ holatga chekli qadamda yetib borish ehtimoli musbat bo'lsa ($p_{ij}^{(n)} > 0$), zanjir keltirilmaydigan deyiladi.
   - *Javob:* Barcha holatlar bir-biri bilan o'zaro bog'langan zanjir.

4. 2 ta holatli zanjirda $\mathbf{P} = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$ bo'lsa, u ergodikmi?
   - *Yechish:* Zanjir davriy (davri 2), holat $1 \to 2 \to 1 \to 2$ tarzida doim tebranadi, limit taqsimotga intilmaydi.
   - *Javob:* Ergodik emas (davriy zanjir).

---

## 💡 Xulosa va Imtihon Maslahatlari

- Markov zanjirining asosiy mohiyati: bugungi kun ma'lum bo'lsa, ertangi kun kechagi kunga bog'liq emas.
- $n$-qadamli o'tish matritsasi $\mathbf{P}^n$ ni hisoblashda matritsani diagonallashtirish ($\mathbf{P} = \mathbf{V} \mathbf{\Lambda} \mathbf{V}^{-1}$) yoki xos qiymatlar usulidan foydalanish katta o'lchamlarda eng qulay yo'ldir.
- Statsionar taqsimotni hisoblashda bitta ortiqcha tenglamani o'chirib, o'rniga albatta $\sum \pi_i = 1$ tenglamasini qo'yish kerak.
