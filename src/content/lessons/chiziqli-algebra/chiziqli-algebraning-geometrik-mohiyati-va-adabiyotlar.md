---
title: "Chiziqli algebraning geometrik mohiyati, zamonaviy tatbiqlari va adabiyotlar"
module: "chiziqli-algebra"
order: 23
description: "Vektorlar, matritsalar, determinant va xos vektorlarning 3D vizual falsafasi, sun'iy intellektdagi o'rni va eng yaxshi adabiyotlar."
---

## 📌 Kirish va Geometrik/Fizik Mohiyat

Aksariyat talabalar chiziqli algebrani birinchi marta o'rganganda, uni quruq sonlar jadvali, matritsalarni zerikarli ko'paytirish qoidalari va determinant hisoblashning mexanik usullari to'plami deb qabul qilishadi. Bu yondashuv fanning haqiqiy go'zalligi va ichki mantig'ini to'sib qo'yadi.

Mashhur Massachusets Texnologiya Instituti (MIT) professori **Gilbert Strang** o'zining mashhur darslarida shunday ta'kidlaydi:  
*"Chiziqli algebra — bu formulalarni ko'r-ko'rona yodlash emas, balki fazoni, uning o'zgarishlarini va o'lchamlarini ko'ra bilish san'atidir."*

Har bir algebraik amal ortida yaqqol ko'rinib turgan geometrik yoki fizik jarayon yotadi:
1. **Vektor** — fazodagi yo'nalishli harakat, kuch yoki ko'p o'lchamli ma'lumotlar atributi (matn embeddingi, tasvir piksellari).
2. **Matritsa** — bu shunchaki sonlar qutisi emas, balki **fazoning chiziqli dinamik deformatsiyasi** (cho'zilishi, siqilishi, burilishi yoki akslanishi).
3. **Determinant** — fazoviy shakllar yuzasi yoki hajmining ushbu deformatsiya natijasida necha barobar o'zgarishini ko'rsatuvchi masshtab koeffitsiyenti.
4. **Xos vektorlar va xos sonlar** — fazo deformatsiyalanganda o'zining fazoviy yo'nalishini saqlab qoladigan "magistral o'qlar" va ushbu o'qlar bo'ylab cho'zilish koeffitsiyentlari.

Bugungi zamonaviy texnologiyalar — sun'iy intellekt (Large Language Models, Transformer arxitekturasi), kompyuter grafikasi va o'yin dvigatellari (Unreal Engine, Unity), kompyuter tomografiyasi, robototexnika kinematikasi va kvant hisoblashlari aynan mana shu ustunlar ustiga qurilgan.

---

## 📐 Asosiy Nazariya, Qoidalar va Teoremalar

### 1. Fazoning chiziqli akslantirishi sifatida matritsa

Faraz qilaylik, bizda $n$ - o'lchamli Evklid fazosi $\mathbb{R}^n$ va $m$ - o'lchamli fazo $\mathbb{R}^m$ berilgan bo'lsin.  
Akslantirish $T: \mathbb{R}^n \to \mathbb{R}^m$ **chiziqli** deyiladi, agar barcha $\vec{u}, \vec{v} \in \mathbb{R}^n$ va ixtiyoriy $\alpha \in \mathbb{R}$ skalyar uchun quyidagi ikki shart bajarilsa:
1. **Additivlik:** $T(\vec{u} + \vec{v}) = T(\vec{u}) + T(\vec{v})$
2. **Bir jinslilik:** $T(\alpha \vec{u}) = \alpha T(\vec{u})$

Geometrik nuqtai nazardan, chiziqli akslantirish fazoni shunday deformatsiya qiladiki:
- Koordinata boshi $\vec{0}$ doimo o'z o'rnida $\vec{0}$ ga o'tadi;
- Barcha to'g'ri chiziqlar to'g'ri chiziqligicha qoladi (egrilmaydi);
- Parallel chiziqlar to'plami deformatsiyadan keyin ham parallel bo'lib qoladi, koordinata to'ri bir tekis saqlanadi.

Har qanday bunday akslantirish to'liq holda bazis vektorlarining harakati bilan aniqlanadi. Agar standart bazis vektorlari $\vec{e}_1 = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$ va $\vec{e}_2 = \begin{pmatrix} 0 \\ 1 \end{pmatrix}$ yangi $\vec{e}_1' = \begin{pmatrix} a \\ c \end{pmatrix}$ va $\vec{e}_2' = \begin{pmatrix} b \\ d \end{pmatrix}$ holatlarga o'tsa, fazoning to'liq o'zgarish matritsasi quyidagicha bo'ladi:
$$
A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}
$$
Matritsaning ustunlari — bu bazis vektorlarining transformatsiyadan keyingi yangi koordinatalaridir!

### 2. Determinantning geometrik aksiomatikasi

Kvadrat matritsa $A \in \mathbb{R}^{n \times n}$ uchun determinant $\det(A)$ — bu bazis vektorlaridan yasalgan birlik giperkub hajmining transformatsiya natijasida qanday o'zgarishini ifodalovchi skalyar miqdordir:
- Agar $\det(A) = 3$ bo'lsa, fazodagi har qanday figuraning (doira, uchburchak, kub) yuzi yoki hajmi 3 barobar kattalashadi.
- Agar $\det(A) < 0$ bo'lsa, hajm o'zgarishidan tashqari fazoning fazoviy orientatsiyasi (o'ng qo'l qoidasi) teskarisiga (ko'zgudagi aks kabi) aylanadi.
- Agar $\det(A) = 0$ bo'lsa, fazo bir yoki bir nechta o'lchamini yo'qotadi (degeneratsiya): 2D tekislik to'g'ri chiziqqa yoki bitta nuqtaga siqiladi; 3D fazo tekislikka yoki to'g'ri chiziqqa qulaydi. Shu sababli $\det(A) = 0$ bo'lganda matritsaning teskarisi mavjud emas (chunki siqilib yo'qolgan o'lchamni orqaga qaytarib tiklab bo'lmaydi).

### 3. Gilbert Strangning 4 ta fundamental qism-fazosi

Gilbert Strang chiziqli algebraning eng buyuk teoremasi sifatida ixtiyoriy $m \times n$ o'lchamli $A$ matritsaning 4 ta qism-fazosini ajratib ko'rsatadi:
1. **Ustunlar fazosi (Column Space) $C(A) \subset \mathbb{R}^m$:** Matritsa ustunlarining barcha chiziqli kombinatsiyalari. O'lchami: $\dim C(A) = r$ (matritsa rangi). $A \vec{x} = \vec{b}$ tenglama faqat va faqat $\vec{b} \in C(A)$ bo'lgandagina yechimga ega.
2. **Nol-fazo (Nullspace / Yadro) $N(A) \subset \mathbb{R}^n$:** $A \vec{x} = \vec{0}$ tenglamani qanoatlantiruvchi barcha vektorlar to'plami. O'lchami: $\dim N(A) = n - r$.
3. **Satrlar fazosi (Row Space) $C(A^T) \subset \mathbb{R}^n$:** Matritsa satrlarining chiziqli kombinatsiyalari. O'lchami: $\dim C(A^T) = r$.
4. **Chap nol-fazo (Left Nullspace) $N(A^T) \subset \mathbb{R}^m$:** $A^T \vec{y} = \vec{0}$ yoki $\vec{y}^T A = \vec{0}^T$ shartni qanoatlantiruvchi vektorlar. O'lchami: $\dim N(A^T) = m - r$.

**Chiziqli algebraning asosiy teoremasi (Fundamental Theorem of Linear Algebra):**
$$
C(A^T) \perp N(A) \quad \text{va} \quad C(A^T) \oplus N(A) = \mathbb{R}^n
$$
$$
C(A) \perp N(A^T) \quad \text{va} \quad C(A) \oplus N(A^T) = \mathbb{R}^m
$$
Bu fazodagi har qanday vektor o'zaro ortogonal bo'lgan ikki qismga ajralishini kafolatlaydi.

### 4. Xos qiymatlar va Singulyar sonlar (SVD) geometriyasi

Kvadrat matritsa $A$ uchun $A \vec{v} = \lambda \vec{v}$ tenglikni qanoatlantiruvchi noldan farqli $\vec{v}$ vektor xos vektor, $\lambda$ esa xos qiymatdir. Geometrik ma'nosi: akslantirish ta'sirida yo'nalishi o'zgarmasdan, faqatgina $\lambda$ koeffitsiyentga cho'ziladigan yoki qisqaradigan yo'nalishlar.

Ixtiyoriy to'g'ri to'rtburchakli $m \times n$ matritsa uchun **Singulyar qiymatli yoyilma (SVD)** mavjud:
$$
A = U \Sigma V^T
$$
Bunda $V$ va $U$ ortogonal burish matritsalari, $\Sigma$ esa bosh diagonalida singulyar sonlar $\sigma_1 \ge \sigma_2 \ge \dots \ge \sigma_r > 0$ joylashgan diagonal cho'zish matritsasidir. Geometrik ma'nosi: har qanday chiziqli akslantirish birlik sferani ellipsga aylantiradi; $V$ ning ustunlari ellipsning bosh o'qlari yo'nalishlarini, $\sigma_i$ yarim o'qlar uzunliklarini belgilaydi.

---

## 📝 Qadamma-qadam Yechilgan Universitet Misollari

### 1-misol: 2D chiziqli deformatsiya, uning matritsasi va yuzaning o'zgarishi
**Shart:** Tekislikda fazo avval gorizontal o'q bo'ylab 2 koeffitsiyent bilan siljitildi (shear transformatsiyasi: $\vec{i} \to \vec{i}$, $\vec{j} \to 2\vec{i} + \vec{j}$), so'ngra soat strelkasiga qarshi $\theta = 90^\circ$ burchakka burildi.
1) Yakuniy kompozitsiya matritsasi $A$ ni toping;
2) Uchlari $O(0,0)$, $P(3,0)$ va $Q(0,4)$ nuqtalarda bo'lgan uchburchakning ushbu akslantirishdan keyingi yangi yuzasini determinant yordamida hisoblang.

**Yechish:**
1-qadam: Siljish matritsasi $S$ va burish matritsasi $R$ ni tuzamiz:
Standart bazis vektorlari: $\vec{i} = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$, $\vec{j} = \begin{pmatrix} 0 \\ 1 \end{pmatrix}$.  
Siljish ta'sirida: $\vec{i} \to \begin{pmatrix} 1 \\ 0 \end{pmatrix}$, $\vec{j} \to \begin{pmatrix} 2 \\ 1 \end{pmatrix}$. Demak:
$$
S = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}
$$
$90^\circ$ ga burish matritsasi:
$$
R = \begin{pmatrix} \cos 90^\circ & -\sin 90^\circ \\ \sin 90^\circ & \cos 90^\circ \end{pmatrix} = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}
$$
Kompozitsiya qoidasiga ko'ra, avval $S$, so'ng $R$ qo'llanilganda vektor $\vec{x}$ ga nisbatan: $A \vec{x} = R(S \vec{x}) = (RS)\vec{x}$. Shunday qilib:
$$
A = R \cdot S = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix} \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 0 \cdot 1 + (-1) \cdot 0 & 0 \cdot 2 + (-1) \cdot 1 \\ 1 \cdot 1 + 0 \cdot 0 & 1 \cdot 2 + 0 \cdot 1 \end{pmatrix} = \begin{pmatrix} 0 & -1 \\ 1 & 2 \end{pmatrix}
$$
2-qadam: Boshlang'ich uchburchak yuzasini topamiz:
Katetlari 3 va 4 bo'lgan to'g'ri burchakli uchburchak yuzi:
$$
S_{\triangle} = \frac{1}{2} \cdot 3 \cdot 4 = 6
$$
3-qadam: Akslantirish matritsasining determinantini hisoblaymiz:
$$
\det(A) = \begin{vmatrix} 0 & -1 \\ 1 & 2 \end{vmatrix} = 0 \cdot 2 - (-1) \cdot 1 = 1
$$
Determinant 1 ga teng bo'lgani uchun, bu akslantirish figuralar yuzasini o'zgartirmaydi (izoxorik deformatsiya).  
Yangi hosil bo'lgan uchburchak yuzi:
$$
S_{\text{yangi}} = |\det(A)| \cdot S_{\triangle} = 1 \cdot 6 = 6
$$
**Javob:** $A = \begin{pmatrix} 0 & -1 \\ 1 & 2 \end{pmatrix}$, yangi yuza $S_{\text{yangi}} = 6$.

---

### 2-misol: Xos vektorlar bo'yicha spektral yoyilma va matritsaning yuqori darajasi
**Shart:** Matritsa $A = \begin{pmatrix} 4 & 2 \\ 1 & 3 \end{pmatrix}$ berilgan. Uning xos sonlari va xos vektorlarini toping, geometrik ma'nosini tushuntiring hamda $A^{10}$ darajasini hisoblang.

**Yechish:**
1-qadam: Xarakteristik tenglamani tuzamiz va yechamiz:
$$
\det(A - \lambda I) = \begin{vmatrix} 4 - \lambda & 2 \\ 1 & 3 - \lambda \end{vmatrix} = (4 - \lambda)(3 - \lambda) - 2 = \lambda^2 - 7\lambda + 10 = 0
$$
Viyet teoremasiga ko'ra ildizlar: $\lambda_1 = 5$ va $\lambda_2 = 2$.

2-qadam: Xos vektorlarni aniqlaymiz:
- $\lambda_1 = 5$ uchun:
$$
(A - 5I)\vec{v}_1 = \begin{pmatrix} -1 & 2 \\ 1 & -2 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} \implies -x + 2y = 0 \implies x = 2y \implies \vec{v}_1 = \begin{pmatrix} 2 \\ 1 \end{pmatrix}
$$
- $\lambda_2 = 2$ uchun:
$$
(A - 2I)\vec{v}_2 = \begin{pmatrix} 2 & 2 \\ 1 & 1 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} \implies x + y = 0 \implies x = -y \implies \vec{v}_2 = \begin{pmatrix} 1 \\ -1 \end{pmatrix}
$$
**Geometrik ma'nosi:** Ushbu matritsa $\vec{v}_1 = (2, 1)^T$ to'g'ri chizig'i bo'ylab fazoni 5 barobar cho'zadi, $\vec{v}_2 = (1, -1)^T$ to'g'ri chizig'i bo'ylab esa 2 barobar cho'zadi. Qolgan barcha vektorlar o'z yo'nalishini o'zgartirib, dominant o'q $\vec{v}_1$ tomon buriladi.

3-qadam: Diagonallashtirish orqali $A^{10}$ ni hisoblaymiz:
Xos vektorlardan $P$ matritsani tuzamiz: $P = \begin{pmatrix} 2 & 1 \\ 1 & -1 \end{pmatrix}$. Uning determinanti: $\det(P) = -2 - 1 = -3$.  
Teskari matritsa:
$$
P^{-1} = -\frac{1}{3} \begin{pmatrix} -1 & -1 \\ -1 & 2 \end{pmatrix} = \frac{1}{3} \begin{pmatrix} 1 & 1 \\ 1 & -2 \end{pmatrix}
$$
Diagonal matritsa $D = \begin{pmatrix} 5 & 0 \\ 0 & 2 \end{pmatrix}$. $A = P D P^{-1}$ bo'lgani sababli:
$$
A^{10} = P D^{10} P^{-1} = \begin{pmatrix} 2 & 1 \\ 1 & -1 \end{pmatrix} \begin{pmatrix} 5^{10} & 0 \\ 0 & 2^{10} \end{pmatrix} \cdot \frac{1}{3} \begin{pmatrix} 1 & 1 \\ 1 & -2 \end{pmatrix}
$$
$$
A^{10} = \frac{1}{3} \begin{pmatrix} 2 \cdot 5^{10} & 2^{10} \\ 5^{10} & -2^{10} \end{pmatrix} \begin{pmatrix} 1 & 1 \\ 1 & -2 \end{pmatrix} = \frac{1}{3} \begin{pmatrix} 2 \cdot 5^{10} + 2^{10} & 2 \cdot 5^{10} - 2 \cdot 2^{10} \\ 5^{10} - 2^{10} & 5^{10} + 2 \cdot 2^{10} \end{pmatrix}
$$
**Javob:** $\lambda_1 = 5, \vec{v}_1 = \begin{pmatrix} 2 \\ 1 \end{pmatrix}$; $\lambda_2 = 2, \vec{v}_2 = \begin{pmatrix} 1 \\ -1 \end{pmatrix}$. $A^{10}$ yuqoridagi formula bilan aniqlanadi.

---

### 3-misol: 4 ta fundamental qism-fazo va ortogonal proyeksiyalash
**Shart:** $A = \begin{pmatrix} 1 & 2 \\ 2 & 4 \\ 1 & 2 \end{pmatrix}$ matritsa berilgan.  
1) Uning ustunlar fazosi $C(A)$ va nol-fazosi $N(A)$ ning bazisini toping;  
2) $\vec{b} = \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}$ vektorning ustunlar fazosi $C(A)$ ga proyeksiyasini toping.

**Yechish:**
1-qadam: Rangi va bazislarni aniqlaymiz:
Matritsaning 2-ustuni 1-ustunining 2 barobariga teng: $\vec{a}_2 = 2\vec{a}_1$.  
Demak, matritsa rangi $r = 1$.  
- **Ustunlar fazosi $C(A)$:** $\mathbb{R}^3$ dagi to'g'ri chiziq bo'lib, uning bazisi $\vec{u}_1 = \begin{pmatrix} 1 \\ 2 \\ 1 \end{pmatrix}$.
- **Nol-fazo $N(A)$:** $A \vec{x} = \vec{0}$ tenglamadan:
$$
\begin{pmatrix} 1 & 2 \\ 2 & 4 \\ 1 & 2 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix} \implies x_1 + 2x_2 = 0 \implies x_1 = -2x_2
$$
$x_2 = 1$ desak, $N(A)$ ning bazisi $\vec{n} = \begin{pmatrix} -2 \\ 1 \end{pmatrix}$. O'lchami: $n - r = 2 - 1 = 1$.

2-qadam: $\vec{b}$ vektorning $C(A)$ ga proyeksiyasi:
$C(A)$ fazosi bitta $\vec{u}_1 = (1, 2, 1)^T$ vektor orqali taralgani sababli, proyeksiyalash formulasi:
$$
\hat{b} = \text{proj}_{C(A)}(\vec{b}) = \frac{\vec{b} \cdot \vec{u}_1}{\vec{u}_1 \cdot \vec{u}_1} \vec{u}_1
$$
Skalyar ko'paytmalarni hisoblaymiz:
$$
\vec{b} \cdot \vec{u}_1 = 1 \cdot 1 + 1 \cdot 2 + 1 \cdot 1 = 4
$$
$$
\vec{u}_1 \cdot \vec{u}_1 = 1^2 + 2^2 + 1^2 = 1 + 4 + 1 = 6
$$
Proyeksiyani topamiz:
$$
\hat{b} = \frac{4}{6} \vec{u}_1 = \frac{2}{3} \begin{pmatrix} 1 \\ 2 \\ 1 \end{pmatrix} = \begin{pmatrix} 2/3 \\ 4/3 \\ 2/3 \end{pmatrix}
$$
Xatolik vektori $\vec{e} = \vec{b} - \hat{b} = \begin{pmatrix} 1/3 \\ -1/3 \\ 1/3 \end{pmatrix}$. Tekshirish: $\vec{e} \cdot \vec{u}_1 = 1/3(1) - 1/3(2) + 1/3(1) = 0$ (ortogonallik to'liq bajarildi!).

**Javob:** $C(A)$ bazisi $\begin{pmatrix} 1 \\ 2 \\ 1 \end{pmatrix}$; $N(A)$ bazisi $\begin{pmatrix} -2 \\ 1 \end{pmatrix}$; Proyeksiya $\hat{b} = \begin{pmatrix} 2/3 \\ 4/3 \\ 2/3 \end{pmatrix}$.

---

### 4-misol: Singulyar sonlar (SVD) va fazoviy ellips yarim o'qlari
**Shart:** $A = \begin{pmatrix} 3 & 0 \\ 0 & -2 \end{pmatrix}$ matritsa birlik aylanani qanday shaklga o'tkazishini aniqlang, uning singulyar sonlari $\sigma_1, \sigma_2$ ni toping.

**Yechish:**
Birlik aylanadagi nuqtalar to'plami: $x^2 + y^2 = 1$.  
Ushbu nuqtalarga $A$ matritsa ta'sir etganda yangi koordinatalar:
$$
\begin{pmatrix} u \\ v \end{pmatrix} = \begin{pmatrix} 3 & 0 \\ 0 & -2 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 3x \\ -2y \end{pmatrix} \implies x = \frac{u}{3}, \quad y = -\frac{v}{2}
$$
Boshlang'ich aylana tenglamasiga qo'yamiz:
$$
\left(\frac{u}{3}\right)^2 + \left(-\frac{v}{2}\right)^2 = 1 \implies \frac{u^2}{3^2} + \frac{v^2}{2^2} = 1
$$
Hosil bo'lgan shakl — kanonik ellips! Uning bosh yarim o'qlari $a = 3$ va $b = 2$.  
Singulyar sonlar ta'rifiga ko'ra, $\sigma_i = \sqrt{\lambda_i(A^T A)}$:
$$
A^T A = \begin{pmatrix} 3 & 0 \\ 0 & -2 \end{pmatrix} \begin{pmatrix} 3 & 0 \\ 0 & -2 \end{pmatrix} = \begin{pmatrix} 9 & 0 \\ 0 & 4 \end{pmatrix}
$$
Xos qiymatlari $\lambda_1 = 9, \lambda_2 = 4$. Shunday qilib, singulyar sonlar:
$$
\sigma_1 = \sqrt{9} = 3, \quad \sigma_2 = \sqrt{4} = 2
$$
**Javob:** Birlik aylana yarim o'qlari 3 va 2 bo'lgan ellipsga aylanadi; $\sigma_1 = 3, \sigma_2 = 2$.

---

## ⚠️ Talabalar Eng Ko'p Yo'l Qo'yadigan Xatolar va Tuzoqlar

1. **Transformatsiyalar tartibini aralashtirib yuborish ($AB \neq BA$):**
   Fazoda avval burib, keyin siljitish bilan avval siljitib, keyin burish butunlay boshqa natijalar beradi. Matritsalar ko'paytmasi $A \cdot B \cdot \vec{x}$ yozilganda, eng birinchi bo'lib vektorga o'ngdagi matritsa ($B$), so'ngra chapdagi matritsa ($A$) ta'sir qiladi. Talabalar ko'pincha buni chapdan o'ngga deb xato o'ylashadi.

2. **$\det(A) = 0$ bo'lganda matritsani "yo'q narsa" deb tushunish:**
   Determinantning nolga teng bo'lishi matritsaning xato ekanligini emas, balki fazo bir yoki undan ko'p o'lchamga siqilib, axborot yo'qolganini bildiradi (masalan, 3D jismning 2D soyasi). Shuning uchun teskari matritsa mavjud bo'lmaydi — soyadan asl jismni bir qiymatli tiklab bo'lmaydi.

3. **Barcha matritsalar to'liq haqiqiy xos vektorlarga ega deb hisoblash:**
   Masalan, tekislikni $90^\circ$ ga burish matritsasi $R = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$ uchun xarakteristik tenglama $\lambda^2 + 1 = 0 \implies \lambda = \pm i$. Haqiqiy tekislikda hech bir vektor burilganda o'z yo'nalishida qolmaydi, barcha vektorlar buriladi. Xos sonlarning kompleks chiqishi geometriyada fazoning sof aylanishini bildiradi.

4. **Koordinatalar almashinuvi bilan vektorning o'zini adashtirish:**
   Bazis o'zgarganda fazodagi fizik vektor (strelka) o'zgarmaydi, faqat uning yangi o'qlardagi proyeksiyalari (sonli koordinatalari) o'zgaradi.

---

## 🎯 Mustaqil Yechish Uchun Amaliy Mashqlar va Yechimlar

### 1-mashq
Quyidagi matritsaning geometrik mohiyatini aniqlang: u fazoni qanday o'zgartiradi va uning determinanti nimaga teng?
$$
M = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}
$$

<details>
<summary>To'liq yechimi va javobi</summary>

**Yechish:**
1. Bazis vektorlarning harakatini tekshiramiz:
   - $\vec{i} = \begin{pmatrix} 1 \\ 0 \end{pmatrix} \to \begin{pmatrix} 0 \\ 1 \end{pmatrix} = \vec{j}$
   - $\vec{j} = \begin{pmatrix} 0 \\ 1 \end{pmatrix} \to \begin{pmatrix} 1 \\ 0 \end{pmatrix} = \vec{i}$
2. Birinchi bazis vektori ikkinchisining o'rniga, ikkinchisi birinchisining o'rniga o'tdi. Bu $y = x$ to'g'ri chizig'iga nisbatan ko'zgudagi akslantirish (simmetriya)dir.
3. Determinantni hisoblaymiz:
   $$
   \det(M) = 0 \cdot 0 - 1 \cdot 1 = -1
   $$
   Determinant $-1$ ga teng. Bu shakl yuzasi o'zgarmasligini ($| -1 | = 1$), ammo fazoviy orientatsiya teskarisiga o'zgarganini (soat strelkasi yo'nalishi teskarisiga aylanganini) bildiradi.

**Javob:** $y = x$ chizig'iga nisbatan simmetriya; $\det(M) = -1$.
</details>

---

### 2-mashq
$B = \begin{pmatrix} 1 & 3 \\ 2 & 6 \end{pmatrix}$ matritsaning ustunlar fazosi $C(B)$ va nol-fazosi $N(B)$ ning tenglamalarini toping.

<details>
<summary>To'liq yechimi va javobi</summary>

**Yechish:**
1. Matritsaning ikkinchi ustuni birinchi ustunning 3 barobaridir: $\begin{pmatrix} 3 \\ 6 \end{pmatrix} = 3 \begin{pmatrix} 1 \\ 2 \end{pmatrix}$.  
   Demak, $C(B)$ fazosi $\vec{v} = \begin{pmatrix} 1 \\ 2 \end{pmatrix}$ vektori orqali o'tuvchi to'g'ri chiziqdir. Uning tenglamasi: $y = 2x$.
2. Nol-fazo $N(B)$ uchun: $B \vec{x} = \vec{0}$:
   $$
   x_1 + 3x_2 = 0 \implies x_1 = -3x_2
   $$
   Demak, $N(B)$ bazisi $\vec{n} = \begin{pmatrix} -3 \\ 1 \end{pmatrix}$ bo'lib, uning to'g'ri chiziq tenglamasi: $x_1 + 3x_2 = 0$ yoki $y = -\frac{1}{3}x$.
3. E'tibor bering, satrlar fazosi bazisi $\vec{r} = (1, 3)^T$ bo'lib, $\vec{r} \cdot \vec{n} = 1(-3) + 3(1) = 0$. Strang teoremasiga binoan satrlar fazosi va nol-fazo o'zaro perpendikulyar!

**Javob:** $C(B)$ to'g'ri chizig'i: $y = 2x$; $N(B)$ to'g'ri chizig'i: $x + 3y = 0$.
</details>

---

### 3-mashq
$C = \begin{pmatrix} 3 & 1 \\ 0 & 3 \end{pmatrix}$ Jordan katagi ko'rinishidagi matritsaning xos sonlarini va geometrik xos vektorlarini toping. U to'liq diagonallashadimi?

<details>
<summary>To'liq yechimi va javobi</summary>

**Yechish:**
1. Xarakteristik tenglama:
   $$
   \det(C - \lambda I) = (3 - \lambda)^2 = 0 \implies \lambda_1 = \lambda_2 = 3
   $$
   Xos son karraligi (algebraik karralik) $k = 2$.
2. Xos vektorlarni qidiramiz:
   $$
   (C - 3I)\vec{v} = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} \implies 0x + 1y = 0 \implies y = 0
   $$
   $x$ ixtiyoriy haqiqiy son bo'lishi mumkin. Xos vektor bitta: $\vec{v} = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$.  
   Geometrik karraligi $g = 1$.
3. Algebraik karralik ($k = 2$) geometrik karralikka ($g = 1$) teng bo'lmagani sababli, bu matritsa yetarli miqdordagi chiziqli erkli xos vektorlarga ega emas va uni oddiy diagonal ko'rinishga keltirib bo'lmaydi (nuqsonli matritsa). Geometrik jihatdan bu sof gorizontal siljish (shear) dir.

**Javob:** Yagona xos son $\lambda = 3$, xos vektor $\vec{v} = (1, 0)^T$. Matritsa diagonallashmaydi.
</details>

---

## 💡 Imtihon Layfhaklari va Tezkor Maslahatlar

1. **Xos sonlarni 5 soniyada tekshirish:**
   Har qanday $2 \times 2$ yoki $n \times n$ matritsa uchun ikkita o'zgarmas (invariant) qoida bor:
   - Xos sonlar yig'indisi matritsaning bosh diagonal elementlari yig'indisiga (Iz - Trace) teng: $\sum \lambda_i = \text{tr}(A)$;
   - Xos sonlar ko'paytmasi matritsa determinantiga teng: $\prod \lambda_i = \det(A)$.  
   Imtihonda topgan xos sonlaringizni darhol shu ikki shart bilan tekshiring!

2. **Matritsaning teskarisi mavjudligini geometrik tasavvur qilish:**
   Agar matritsa ustunlari parallel yoki proporsional bo'lsa, fazo bitta to'g'ri chiziqqa qulagan bo'ladi, hajmi 0 bo'ladi, demak $\det(A) = 0$ va $A^{-1}$ mavjud emas.

3. **Tavsiya etiladigan jahon adabiyotlari:**
   - **Gilbert Strang — "Introduction to Linear Algebra" (MIT):** Geometrik intuitiv tushunish bo'yicha dunyodagi eng zo'r kitob.
   - **Mathprofi.ru (Aleksandr Yemelin):** Misollarni eng oson va batafsil qadamma-qadam yechish uslubi.
   - **Sheldon Axler — "Linear Algebra Done Right":** Operatorlar va qism-fazolar bo'yicha eng nafis nazariy qo'llanma.
   - **Sh.A. Ayupov va boshqalar — "Algebra va sonlar nazariyasi":** O'zbekiston OTMlaridagi asosiy akademik darslik.
