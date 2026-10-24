---
title: "Chiziqli fazo, bazis, o'tish matritsasi va chiziqli operatorlar"
module: "chiziqli-algebra"
order: 8
description: "n-o'lchovli arifmetik fazo, chiziqli bog'liqlik, bazis va koordinatalar, o'tish matritsasi, chiziqli operatorlar va matritsalarni diagonallashtirish."
---

## Kirish: Geometriyadan umumiy fazoga

Maktab geometriyasida biz 2 o'lchovli tekislik ($Oxy$) va 3 o'lchovli fazo ($Oxyz$) bilan tanishganmiz. Biroq axborot texnologiyalarida, Big Data, mashinali o'rganish (Machine Learning) va sun'iy intellektda minglab parametrlarga ega ma'lumotlar bilan ishlanadi. 

Masalan, neyron tarmoqdagi bitta qatlam yuzlab neyronlardan iborat bo'lib, uning holati $n$-o'lchovli fazodagi vektor bilan ifodalanadi. Shu sababli umumiy **chiziqli (vektor) fazo** tushunchasi zamonaviy amaliy matematikaning poydevoridir.

---

## 1. n-o'lchovli arifmetik vektor fazo $\mathbb{R}^n$

> **Ta'rif:** Tartiblangan $n$ ta haqiqiy sonlar to'plami $x = (x_1, x_2, \dots, x_n)$ ga **$n$-o'lchovli arifmetik vektor** deyiladi. Barcha shunday vektorlar to'plamiga **$\mathbb{R}^n$ arifmetik fazo** deyiladi.

Bu fazoda ikkita asosiy amal kiritiladi:
1. **Vektorlarni qo'shish:** $x + y = (x_1 + y_1, x_2 + y_2, \dots, x_n + y_n)$
2. **Vektorni songa ko'paytirish:** $\alpha x = (\alpha x_1, \alpha x_2, \dots, \alpha x_n)$

---

## 2. Vektorlarning chiziqli bog'liqligi va bog'liq emasligi

Aytaylik, fazoda $v_1, v_2, \dots, v_k$ vektorlar berilgan bo'lsin.
Ularning chiziqli kombinatsiyasi quyidagicha yoziladi:

$$
c_1 v_1 + c_2 v_2 + \dots + c_k v_k = \mathbf{0}
$$

> **Ta'rif:** 
> - Agar yuqoridagi tenglik faqat va faqat barcha koeffitsiyentlar nolga teng bo'lgandagina ($c_1 = c_2 = \dots = c_k = 0$) bajarilsa, bu vektorlar **chiziqli bog'liq emas (erkli)** deyiladi.
> - Agar kamida bitta $c_i \neq 0$ topilib, tenglik nolga teng bo'lsa, bu vektorlar **chiziqli bog'liq** deyiladi.

### Amaliy qoida:
> $n$ ta vektordan tuzilgan kvadrat matritsaning determinanti $\det \neq 0$ bo'lsa, bu vektorlar **chiziqli bog'liq emas**. Agar $\det = 0$ bo'lsa, ular **chiziqli bog'liq** bo'ladi!

---

## 3. Fazo bazisi va o'lchami (Dimension)

> **Ta'rif:** $V$ chiziqli fazoda olingan tartiblangan $e = (e_1, e_2, \dots, e_n)$ vektorlar sistemasi quyidagi ikkita shartni qanoatlantirsa, u fazoning **bazisi** deyiladi:
> 1. $e_1, e_2, \dots, e_n$ vektorlar o'zaro **chiziqli bog'liq emas**;
> 2. Fazodagi ixtiyoriy $x$ vektorni shu bazis vektorlarining chiziqli kombinatsiyasi sifatida **yagona usulda** ifodalash mumkin:
>    
$$
>    x = x_1 e_1 + x_2 e_2 + \dots + x_n e_n
>    
$$

Bu yerda $(x_1, x_2, \dots, x_n)$ sonlari $x$ vektorning $e$ bazisdagi **koordinatalari** deyiladi.
Bazisdagi vektorlar soni $n$ ga fazoning **o'lchami** deyiladi va $\dim V = n$ deb yoziladi.

---

## 4. Bir bazisdan boshqa bazisga o'tish matritsasi

Aytaylik, fazoda ikkita bazis berilgan bo'lsin:
- «Eski» bazis: $e = (e_1, e_2, \dots, e_n)$
- «Yangi» bazis: $e' = (e'_1, e'_2, \dots, e'_n)$

Yangi bazis vektorlarini eski bazis orqali ifodalaymiz:

$$
\begin{cases}
e'_1 = t_{11} e_1 + t_{21} e_2 + \dots + t_{n1} e_n \\
e'_2 = t_{12} e_1 + t_{22} e_2 + \dots + t_{n2} e_n \\
\dots\dots\dots\dots\dots\dots\dots\dots\dots\dots \\
e'_n = t_{1n} e_1 + t_{2n} e_2 + \dots + t_{nn} e_n
\end{cases}
$$

> **Muhim qoida:** Yangi bazis vektorlarining koordinatalarini **ustun qilib** yozish orqali **o'tish matritsasi $T$** hosil qilinadi:
>
> 
$$
> T = \begin{pmatrix}
> t_{11} & t_{12} & \dots & t_{1n} \\
> t_{21} & t_{22} & \dots & t_{2n} \\
> \vdots & \vdots & \ddots & \vdots \\
> t_{n1} & t_{n2} & \dots & t_{nn}
> \end{pmatrix}
> 
$$

### Koordinatalarning o'zgarishi formulasi

Agar biror $x$ vektor eski bazisda $X$ ustunga, yangi bazisda $X'$ ustunga ega bo'lsa, ularning bog'lanishi:

$$
X = T \cdot X' \iff X' = T^{-1} \cdot X
$$

---

## 5. Chiziqli operatorlar va ularning matritsasi

> **Ta'rif:** $V$ fazoni o'ziga akslantiruvchi $\mathcal{A}: V \to V$ amali quyidagi ikkita chiziqlilik shartini bajarsa, u **chiziqli operator (yoki chiziqli almashtirish)** deyiladi:
> 1. $\mathcal{A}(x + y) = \mathcal{A}(x) + \mathcal{A}(y)$
> 2. $\mathcal{A}(\alpha x) = \alpha \mathcal{A}(x)$

Agar fazoda $e = (e_1, \dots, e_n)$ bazis tanlangan bo'lsa, operatorning bazis vektorlariga ta'siri:

$$
\mathcal{A}(e_j) = \sum_{i=1}^n a_{ij} e_i
$$

Ushbu koeffitsiyentlardan tuzilgan $A = (a_{ij})$ matritsa $\mathcal{A}$ operatorning **berilgan bazisdagi matritsasi** deyiladi.

### Yangi bazisga o'tganda operator matritsasining o'zgarishi

> **Teorema:** Agar eski bazisdan yangi bazisga o'tish matritsasi $T$ bo'lsa, operatorning yangi bazisdagi $A'$ matritsasi quyidagi formula bo'yicha hisoblanadi:
>
> 
$$
> A' = T^{-1} \cdot A \cdot T
> 
$$

Bunday matritsalar **o'xshash matritsalar** deb ataladi. O'xshash matritsalarning determinanti va izi (trace) bir xil bo'ladi: $\det(A') = \det(A)$ va $\operatorname{tr}(A') = \operatorname{tr}(A)$.

---

## 6. Xos sonlar va matritsani diagonallashtirish

Agar operator ta'sirida biror nolmas vektor $x \neq \mathbf{0}$ o'z yo'nalishini o'zgartirmay, faqat $\lambda$ marta cho'zilsa:

$$
\mathcal{A}(x) = \lambda x \iff (A - \lambda E) x = \mathbf{0}
$$

- $\lambda$ soni — operatorning **xos qiymati (soni)** (eigenvalue);
- $x$ vektor — $\lambda$ ga mos keluvchi **xos vektor** (eigenvector).

### Xarakteristik tenglama

Nolmas $x$ vektor mavjud bo'lishi uchun xarakteristik determinant nolga teng bo'lishi shart:

$$
\det(A - \lambda E) = 0
$$

### Diagonallashtirish:
Agar $n \times n$ matritsa $n$ ta chiziqli bog'liq bo'lmagan xos vektorlarga ega bo'lsa, ushbu xos vektorlardan tuzilgan $T$ o'tish matritsasi yordamida matritsani **diagonal ko'rinishga** keltirish mumkin:

$$
T^{-1} A T = D = \begin{pmatrix}
\lambda_1 & 0 & \dots & 0 \\
0 & \lambda_2 & \dots & 0 \\
\vdots & \vdots & \ddots & \vdots \\
0 & 0 & \dots & \lambda_n
\end{pmatrix}
$$

Bu usul matrisani yuzinchi darajaga ko'tarishda ($A^{100} = T D^{100} T^{-1}$) va grafik/fizik modellarni tezkor simulyatsiya qilishda bebaho hisoblanadi!

---

## 7. Gilbert Strangning "Chiziqli algebraning 4 ta fundamental qismfazosi"

MIT professori Gilbert Strang chiziqli algebraning barcha qonunlarini birlashtiruvchi quyidagi 4 ta fundamental fazoni kashf qilgan:

Har qanday $m \times n$ o'lchamli $A$ matritsa uchun 4 ta qismfazo mavjud:

| Qismfazo | Belgilanishi | Fazodagi joylashuvi | O'lchami (Dimension) |
|---|---|---|---|
| **1. Ustunlar fazosi (Column Space)** | $C(A)$ | $\mathbb{R}^m$ ichida | $r = \operatorname{rank}(A)$ |
| **2. Nol-fazo (Yadro / Nullspace)** | $N(A)$ | $\mathbb{R}^n$ ichida | $n - r$ (Erkin noma'lumlar soni) |
| **3. Satrlar fazosi (Row Space)** | $C(A^T)$ | $\mathbb{R}^n$ ichida | $r = \operatorname{rank}(A)$ |
| **4. Chap nol-fazo (Left Nullspace)** | $N(A^T)$ | $\mathbb{R}^m$ ichida | $m - r$ |

### Chiziqli algebraning asosiy teoremasi:
1. **Satr rangi doimo ustun rangiga teng:** $\dim(C(A)) = \dim(C(A^T)) = r$.
2. **Rank-Nullity teoremasi:**
   
$$
   \operatorname{rank}(A) + \operatorname{nullity}(A) = n
   
$$
   Matritsa rangi bilan uning yadrosi (bir jinsli sistema $AX = 0$ ning erkin noma'lumlari) o'lchami yig'indisi doimo ustunlar soni $n$ ga teng bo'ladi!
3. **Ortogonallik:**
   - Satrlar fazosi $C(A^T)$ va Nol-fazo $N(A)$ o'zaro **perpendikulyar (ortogonal)** bo'lib, butun $\mathbb{R}^n$ fazoni to'ldiradi.
   - Ustunlar fazosi $C(A)$ va Chap nol-fazo $N(A^T)$ o'zaro **ortogonal** bo'lib, butun $\mathbb{R}^m$ fazoni to'ldiradi.

---

## 8. Xos sonlar va Google qanday ishlaydi? (PageRank siri)

Bugungi kunda sun'iy intellekt va internet qidiruv tizimlari xos sonlar ustiga qurilgan:

$$
A \cdot \vec{v} = \lambda \vec{v}
$$

1. **Yo'nalishini o'zgartirmaydigan sehrli vektorlar:**
   Fazo $A$ matritsa orqali cho'zilib burilganda, 99.9% vektorlar o'z yo'nalishini o'zgartiradi. Ammo faqat **xos vektorlar $\vec{v}$** aslo burilmaydi, faqat $\lambda$ marta cho'ziladi!
2. **Google PageRank algoritmi (Sergey Brin va Larry Page):**
   - Internetdagi milliardlab veb-sahifalar o'zaro havolalar bilan bog'langan.
   - Sahifalarning bir-biriga o'tish ehtimolliklaridan bahaybat **stoxastik matritsa $P$** tuziladi.
   - Ushbu matritsaning eng katta xos soni $\lambda = 1$ ga mos keluvchi **xos vektori $\vec{v}$** hisoblanadi.
   - Ushbu xos vektorning koordinatalari qaysi sayt eng obro'li (top) ekanligini belgilab beradi! Siz Google qidiruviga so'rov yozganingizda, natijalar aynan xos vektorning koordinatalari bo'yicha tartiblanib chiqadi.
