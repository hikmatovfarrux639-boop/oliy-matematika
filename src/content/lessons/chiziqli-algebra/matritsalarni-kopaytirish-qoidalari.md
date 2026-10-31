---
title: "Matritsalarni ko'paytirish: Satrni ustunga ko'paytirish san'ati"
module: "chiziqli-algebra"
order: 2
description: "Nega matritsalar hadma-had ko'paytirilmaydi? O'lchamlar mosligi, ko'paytirish algoritmi, no-kommutativlik, nol bo'luvchilar va darajaga ko'tarish."
---

## 📌 Kirish va Geometrik/Fizik Mohiyat

Ko'pchilik talabalar birinchi marta matritsalar bilan tanishganda tabiiy bir savol berishadi:  
*"Qo'shganda mos elementlarni qo'shdik, ayirganda mos elementlarni ayirdik. Nega endi ko'paytirganda ham shunchaki $c_{ij} = a_{ij} \cdot b_{ij}$ qilib qo'ya qolmaymiz? Nega bu yerda 'satrni ustunga ko'paytirish' kabi murakkab va noodatiy qoida o'ylab topilgan?"*

Hadma-had ko'paytirish matematikada mavjud (u Adamar ko'paytmasi — *Hadamard product* deb ataladi va $A \odot B$ belgilanadi). Biroq klassik matritsalar ko'paytmasi butunlay boshqa, fundamental sababga ko'ra kiritilgan: **u chiziqli akslantirishlarning kompozitsiyasidir (ketma-ket bajarilishidir)!**

Faraz qilaylik, fazoda ikkita ketma-ket chiziqli o'zgarish sodir bo'lmoqda:
1. Dastlab $\vec{x}$ vektor $B$ matritsa ta'sirida $\vec{y}$ vektorga o'tadi:
   $$
   \vec{y} = B \vec{x}
   $$
2. So'ngra hosil bo'lgan $\vec{y}$ vektorga $A$ matritsa ta'sir etib, uni $\vec{z}$ vektorga aylantiradi:
   $$
   \vec{z} = A \vec{y}
   $$

Endi savol: boshlang'ich $\vec{x}$ vektorni birdaniga yakuniy $\vec{z}$ vektorga o'tkazuvchi to'g'ridan-to'g'ri $C$ akslantirish matritsasi qanday bo'ladi?
$$
\vec{z} = A(B \vec{x}) = C \vec{x} \implies C = AB
$$
Agar biz ushbu ifodani algebraik koordinatalar bo'yicha yoyib chiqsak, beixtiyor aynan klassik "satrni ustunga ko'paytirish" qoidasiga duch kelamiz! Matritsalarni ko'paytirish — bu tabiatdagi o'zgarishlar zanjirini bitta umumiy qonuniyatga birlashtirish san'atidir.

MIT professori **Gilbert Strang** ta'kidlaganidek, matritsalarni ko'paytirishga 4 xil nuqtai nazardan qarash mumkin:
1. **Elementlar bo'yicha (skalyar ko'paytma):** $A$ ning $i$ - satri va $B$ ning $j$ - ustunining skalyar ko'paytmasi.
2. **Ustunlar bo'yicha:** $AB$ ning har bir ustuni — bu $A$ ning ustunlarining chiziqli kombinatsiyasidir.
3. **Satrlar bo'yicha:** $AB$ ning har bir satri — bu $B$ ning satrlarining chiziqli kombinatsiyasidir.
4. **Tashqi ko'paytmalar yig'indisi (Outer product):** $AB = \sum (\text{ustun } k) \cdot (\text{satr } k)$.

---

## 📐 Asosiy Nazariya, Qoidalar va Teoremalar

### 1. O'lchamlar mosligi sharti

Ikkita matritsani ko'paytirish **har doim ham mumkin emas!**  
$A$ matritsani $B$ matritsaga ko'paytirish ($AB$) mumkin bo'lishi uchun, **birinchi matritsaning ustunlari soni ikkinchi matritsaning satrlari soniga teng bo'lishi shart**:
$$
A_{m \times k} \cdot B_{k \times n} = C_{m \times n}
$$
Ichki o'lchamlar ($k$ va $k$) o'zaro teng bo'lishi kerak. Natijaviy $C$ matritsaning o'lchami esa tashqi o'lchamlardan tashkil topadi: $m$ ta satr va $n$ ta ustun ($m \times n$).

### 2. Ko'paytirishning qat'iy matematik ta'rifi

$A = (a_{ir})_{m \times k}$ va $B = (b_{rj})_{k \times n}$ matritsalar ko'paytmasi deb shunday $C = (c_{ij})_{m \times n}$ matritsaga aytiladiki, uning $c_{ij}$ elementi $A$ ning $i$ - satri elementlarini $B$ ning $j$ - ustunining mos elementlariga ko'paytirib qo'shish natijasida hosil bo'ladi:
$$
c_{ij} = \sum_{r=1}^k a_{ir} b_{rj} = a_{i1}b_{1j} + a_{i2}b_{2j} + \dots + a_{ik}b_{kj}
$$

### 3. Matritsalar ko'paytmasining xossalari

1. **Assotsiativlik (guruhlash qonuni):**
   $$
   (AB)C = A(BC)
   $$
2. **Distributivlik (taqsimot qonuni):**
   $$
   A(B + C) = AB + AC \quad \text{va} \quad (A + B)C = AC + BC
   $$
3. **Birlik matritsaning neytralligi:**
   $$
   A_{m \times n} \cdot I_n = A_{m \times n} \quad \text{va} \quad I_m \cdot A_{m \times n} = A_{m \times n}
   $$
4. **Ko'paytmani transponirlash (tartib o'zgarishi!):**
   $$
   (AB)^T = B^T A^T
   $$
   Uchta yoki undan ortiq matritsa uchun ham tartib teskarisiga o'zgaradi: $(ABC)^T = C^T B^T A^T$.
5. **Skalyar ko'paytuvchi:**
   $$
   \alpha (AB) = (\alpha A)B = A(\alpha B)
   $$

### 4. Haqiqiy sonlar algebrasidan hayratlanarli farqlar (Paradokslar)

Matritsalar algebrasi biz maktabdan o'rgangan oddiy sonlar algebrasidan tubdan farq qiluvchi bir qator "g'alati" xususiyatlarga ega:

1. **No-kommutativlik (O'rin almashtirish qonuni bajarilmaydi):**
   Umumiy holda:
   $$
   AB \neq BA
   $$
   Hatto $AB$ hisoblash mumkin bo'lgan taqdirda ham, $BA$ umuman mavjud bo'lmasligi mumkin (o'lchamlari mos kelmasligi sababli). Kvadrat matritsalar uchun esa $AB$ va $BA$ mavjud bo'lsa-da, ularning natijalari ko'pincha teng bo'lmaydi.
   - Agar $AB = BA$ bo'lsa, bunday matritsalar **kommutatsiyalanuvchi (o'rin almashuvchi)** deyiladi.
   - Matematik fizikada kommutator tushunchasi kiritiladi: $[A, B] = AB - BA$.

2. **Nol bo'luvchilar (Zero divisors) mavjudligi:**
   Oddiy arifmetikada $a \cdot b = 0$ bo'lsa, albatta $a = 0$ yoki $b = 0$ bo'ladi. Matritsalarda esa:
   $$
   A \neq O \quad \text{va} \quad B \neq O \quad \text{bo'lsa-da,} \quad AB = O \quad \text{bo'lishi mumkin!}
   $$

3. **Qisqartirish qonunining buzilishi:**
   Agar $AB = AC$ va $A \neq O$ bo'lsa, bundan $B = C$ kelib chiqmaydi! Matritsani shunchaki qisqartirib yuborish mumkin emas (faqat $A$ ning teskarisi $A^{-1}$ mavjud bo'lgandagina chapdan ko'paytirib qisqartirish mumkin).

4. **Qisqa ko'paytirish formulalarining buzilishi:**
   $$
   (A + B)^2 = (A + B)(A + B) = A^2 + AB + BA + B^2
   $$
   Faqat va faqat $AB = BA$ bo'lgandagina $(A + B)^2 = A^2 + 2AB + B^2$ bo'ladi. Xuddi shuningdek: $(A - B)(A + B) = A^2 + AB - BA - B^2 \neq A^2 - B^2$.

---

## 📝 Qadamma-qadam Yechilgan Universitet Misollari

### 1-misol: To'g'ri to'rtburchakli matritsalar ko'paytmasi va no-kommutativlik
**Shart:** Berilgan matritsalar:
$$
A = \begin{pmatrix} 1 & -2 & 3 \\ 2 & 0 & 4 \end{pmatrix}_{2 \times 3}, \quad B = \begin{pmatrix} 2 & 1 \\ 0 & -3 \\ 1 & 4 \end{pmatrix}_{3 \times 2}
$$
1) $AB$ ko'paytmani hisoblang;  
2) $BA$ ko'paytmani hisoblang;  
3) Olingan natijalarning o'lchamlari va izlarini taqqoslang.

**Yechish:**
1-qadam: $AB$ ko'paytma:
$A$ ning o'lchami $2 \times 3$, $B$ ning o'lchami $3 \times 2$.  
Ichki o'lchamlar ($3 = 3$) teng, ko'paytirish mumkin. Natija $C = AB$ ning o'lchami $2 \times 2$ bo'ladi.
$$
c_{11} = 1 \cdot 2 + (-2) \cdot 0 + 3 \cdot 1 = 2 + 0 + 3 = 5
$$
$$
c_{12} = 1 \cdot 1 + (-2) \cdot (-3) + 3 \cdot 4 = 1 + 6 + 12 = 19
$$
$$
c_{21} = 2 \cdot 2 + 0 \cdot 0 + 4 \cdot 1 = 4 + 0 + 4 = 8
$$
$$
c_{22} = 2 \cdot 1 + 0 \cdot (-3) + 4 \cdot 4 = 2 + 0 + 16 = 18
$$
Demak:
$$
AB = \begin{pmatrix} 5 & 19 \\ 8 & 18 \end{pmatrix}
$$

2-qadam: $BA$ ko'paytma:
$B$ ning o'lchami $3 \times 2$, $A$ ning o'lchami $2 \times 3$.  
Ichki o'lchamlar ($2 = 2$) teng, ko'paytirish mumkin. Natija $D = BA$ ning o'lchami $3 \times 3$ bo'ladi!
$$
d_{11} = 2(1) + 1(2) = 4, \quad d_{12} = 2(-2) + 1(0) = -4, \quad d_{13} = 2(3) + 1(4) = 10
$$
$$
d_{21} = 0(1) + (-3)(2) = -6, \quad d_{22} = 0(-2) + (-3)(0) = 0, \quad d_{23} = 0(3) + (-3)(4) = -12
$$
$$
d_{31} = 1(1) + 4(2) = 9, \quad d_{32} = 1(-2) + 4(0) = -2, \quad d_{33} = 1(3) + 4(4) = 19
$$
Demak:
$$
BA = \begin{pmatrix} 4 & -4 & 10 \\ -6 & 0 & -12 \\ 9 & -2 & 19 \end{pmatrix}
$$

3-qadam: Taqqoslash:
$AB$ matritsa $2 \times 2$, $BA$ matritsa esa $3 \times 3$. Ular hatto bir xil fazoda ham emas!  
Biroq ularning izlarini hisoblab ko'ramiz:
$$
\text{tr}(AB) = 5 + 18 = 23
$$
$$
\text{tr}(BA) = 4 + 0 + 19 = 23
$$
**Ajoyib qonuniyat:** Garchi $AB \neq BA$ bo'lsa-da, har qanday o'lchamga mos keluvchi matritsalar uchun $\text{tr}(AB) = \text{tr}(BA)$ har doim bajariladi!

---

### 2-misol: Nol bo'luvchilar va geometrik proyeksiyalash
**Shart:** Quyidagi matritsalar berilgan:
$$
A = \begin{pmatrix} 1 & -1 \\ -2 & 2 \end{pmatrix}, \quad B = \begin{pmatrix} 2 & 4 \\ 2 & 4 \end{pmatrix}
$$
$AB$ ko'paytmani toping va nima sababdan bunday hodisa yuz berganini geometrik nuqtai nazardan tushuntiring.

**Yechish:**
1-qadam: Matritsalar ko'paytmasini hisoblaymiz:
$$
c_{11} = 1(2) + (-1)(2) = 2 - 2 = 0
$$
$$
c_{12} = 1(4) + (-1)(4) = 4 - 4 = 0
$$
$$
c_{21} = -2(2) + 2(2) = -4 + 4 = 0
$$
$$
c_{22} = -2(4) + 2(4) = -8 + 8 = 0
$$
Natija:
$$
AB = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix} = O
$$
Ikkala matritsa ham noldan farqli ($A \neq O, B \neq O$), lekin ularning ko'paytmasi nol matritsaga aylandi!

2-qadam: Geometrik sababi:
$B$ matritsaning ustunlari $\vec{b}_1 = \begin{pmatrix} 2 \\ 2 \end{pmatrix}$ va $\vec{b}_2 = \begin{pmatrix} 4 \\ 4 \end{pmatrix}$. Ikkala vektor ham $y = x$ chizig'ida yotadi.  
$A$ matritsaning harakatini tekshiramiz: $A \begin{pmatrix} x \\ x \end{pmatrix} = \begin{pmatrix} x - x \\ -2x + 2x \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$.  
Demak, $B$ matritsa butun tekislikni $y = x$ to'g'ri chizig'iga siqib qo'yadi. $A$ matritsa esa $y = x$ to'g'ri chizig'idagi har qanday nuqtani koordinata boshiga $(0,0)$ olib keladi (nol-fazo). Natijada butun fazo bitta nuqtaga aylanadi!

---

### 3-misol: Matritsaning $n$ - darajasini topish va matematik induksiya
**Shart:** $J = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ matritsaning ixtiyoriy natural $n$ darajasi $J^n$ uchun umumiy formulani toping va matematik induksiya usulida isbotlang.

**Yechish:**
1-qadam: Dastlabki bir necha darajalarni hisoblab, qonuniyatni aniqlaymiz:
$$
J^2 = J \cdot J = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix} \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 1\cdot 1 + 1\cdot 0 & 1\cdot 1 + 1\cdot 1 \\ 0\cdot 1 + 1\cdot 0 & 0\cdot 1 + 1\cdot 1 \end{pmatrix} = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}
$$
$$
J^3 = J^2 \cdot J = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix} \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 1 & 3 \\ 0 & 1 \end{pmatrix}
$$
Gipoteza:
$$
J^n = \begin{pmatrix} 1 & n \\ 0 & 1 \end{pmatrix}
$$

2-qadam: Matematik induksiya bilan isbotlash:
1. **Induksiya asosi:** $n = 1$ uchun:
   $$
   J^1 = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix} \quad \text{to'g'ri.}
   $$
2. **Induksiya farazi:** Faraz qilaylik, formula $n = k$ uchun o'rinli bo'lsin:
   $$
   J^k = \begin{pmatrix} 1 & k \\ 0 & 1 \end{pmatrix}
   $$
3. **Induktiv o'tish:** $n = k + 1$ holatini tekshiramiz:
   $$
   J^{k+1} = J^k \cdot J = \begin{pmatrix} 1 & k \\ 0 & 1 \end{pmatrix} \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 1\cdot 1 + k\cdot 0 & 1\cdot 1 + k\cdot 1 \\ 0\cdot 1 + 1\cdot 0 & 0\cdot 1 + 1\cdot 1 \end{pmatrix} = \begin{pmatrix} 1 & k+1 \\ 0 & 1 \end{pmatrix}
   $$
Formula $n = k+1$ uchun ham to'liq isbotlandi.

**Javob:** $J^n = \begin{pmatrix} 1 & n \\ 0 & 1 \end{pmatrix}, \quad \forall n \in \mathbb{N}$.

---

### 4-misol: Gilbert Strangning 4 ta ko'paytirish uslubi
**Shart:** $A = \begin{pmatrix} 2 & 1 \\ 3 & 4 \end{pmatrix}$ va $B = \begin{pmatrix} 1 & 5 \\ 2 & 0 \end{pmatrix}$ matritsalar ko'paytmasini Strangning tashqi ko'paytmalar yig'indisi (ustun $\times$ satr) uslubida hisoblang.

**Yechish:**
Strangning 4-usuliga ko'ra, $A$ ning har bir ustunini $B$ ning mos satriga ko'paytirib, hosil bo'lgan matritsalar qo'shiladi:
$$
A = \begin{pmatrix} \vec{a}_1 & \vec{a}_2 \end{pmatrix}, \quad B = \begin{pmatrix} \vec{b}_1^T \\ \vec{b}_2^T \end{pmatrix} \implies AB = \vec{a}_1 \vec{b}_1^T + \vec{a}_2 \vec{b}_2^T
$$
Bunda:
$$
\vec{a}_1 = \begin{pmatrix} 2 \\ 3 \end{pmatrix}, \quad \vec{b}_1^T = \begin{pmatrix} 1 & 5 \end{pmatrix} \implies \vec{a}_1 \vec{b}_1^T = \begin{pmatrix} 2 \\ 3 \end{pmatrix} \begin{pmatrix} 1 & 5 \end{pmatrix} = \begin{pmatrix} 2(1) & 2(5) \\ 3(1) & 3(5) \end{pmatrix} = \begin{pmatrix} 2 & 10 \\ 3 & 15 \end{pmatrix}
$$
$$
\vec{a}_2 = \begin{pmatrix} 1 \\ 4 \end{pmatrix}, \quad \vec{b}_2^T = \begin{pmatrix} 2 & 0 \end{pmatrix} \implies \vec{a}_2 \vec{b}_2^T = \begin{pmatrix} 1 \\ 4 \end{pmatrix} \begin{pmatrix} 2 & 0 \end{pmatrix} = \begin{pmatrix} 1(2) & 1(0) \\ 4(2) & 4(0) \end{pmatrix} = \begin{pmatrix} 2 & 0 \\ 8 & 0 \end{pmatrix}
$$
Endi bu ikki rang-1 matritsani qo'shamiz:
$$
AB = \begin{pmatrix} 2 & 10 \\ 3 & 15 \end{pmatrix} + \begin{pmatrix} 2 & 0 \\ 8 & 0 \end{pmatrix} = \begin{pmatrix} 2+2 & 10+0 \\ 3+8 & 15+0 \end{pmatrix} = \begin{pmatrix} 4 & 10 \\ 11 & 15 \end{pmatrix}
$$
Standart qoida bilan tekshirib ko'ramiz:
$c_{11} = 2(1) + 1(2) = 4$, $c_{12} = 2(5) + 1(0) = 10$, $c_{21} = 3(1) + 4(2) = 11$, $c_{22} = 3(5) + 4(0) = 15$. Natijalar mutlaqo bir xil!

**Javob:** $AB = \begin{pmatrix} 4 & 10 \\ 11 & 15 \end{pmatrix}$.

---

## ⚠️ Talabalar Eng Ko'p Yo'l Qo'yadigan Xatolar va Tuzoqlar

1. **$(AB)^T$ ni hisoblashda tartibni saqlab qolish xatosi:**
   Eng keng tarqalgan xato: $(AB)^T = A^T B^T$ deb yozish. To'g'ri formula:
   $$
   (AB)^T = B^T A^T
   $$
   Chunki $(AB)$ da $A$ ning satrlari $B$ ning ustunlariga ko'paygan bo'lsa, transponirlanganda satrlar ustun bo'lib, tartib o'ngdan chapga aylanadi.

2. **Qisqa ko'paytirish formulalarini ko'r-ko'rona qo'llash:**
   $(A + B)(A - B) = A^2 - B^2$ tenglik faqat matritsalar kommutatsiyalangandagina ($AB = BA$) to'g'ri. Umumiy holda:
   $$
   (A + B)(A - B) = A^2 - AB + BA - B^2
   $$
   Agar $AB \neq BA$ bo'lsa, $-AB$ va $BA$ bir-birini yo'qota olmaydi!

3. **Tenglamalarni matritsaga qisqartirish xatosi:**
   Agar talaba $A X = A Y$ tenglikni ko'rsa, darhol $X = Y$ deb yozadi. Bu faqat $\det(A) \neq 0$ bo'lgandagina o'rinli. Agar $\det(A) = 0$ bo'lsa, $A(X - Y) = O$ bo'lib, nol bo'luvchilar mavjudligi sababli $X \neq Y$ bo'lishi mumkin!

4. **Mos kelmaydigan o'lchamlarni ko'paytirish:**
   $2 \times 3$ matritsani $2 \times 3$ matritsaga ko'paytirib bo'lmaydi! Ko'paytirish uchun 1-matritsaning ustunlari soni 2-matritsaning satrlari soniga teng bo'lishi shart.

---

## 🎯 Mustaqil Yechish Uchun Amaliy Mashqlar va Yechimlar

### 1-mashq
Quyidagi matritsalar uchun $[A, B] = AB - BA$ kommutatorni hisoblang:
$$
A = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}, \quad B = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}
$$

<details>
<summary>To'liq yechimi va javobi</summary>

**Yechish:**
1. $AB$ ko'paytmani topamiz:
   $$
   AB = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix} \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix} = \begin{pmatrix} 1(0) + 2(1) & 1(1) + 2(0) \\ 0(0) + 1(1) & 0(1) + 1(0) \end{pmatrix} = \begin{pmatrix} 2 & 1 \\ 1 & 0 \end{pmatrix}
   $$
2. $BA$ ko'paytmani topamiz:
   $$
   BA = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix} \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 0(1) + 1(0) & 0(2) + 1(1) \\ 1(1) + 0(0) & 1(2) + 0(1) \end{pmatrix} = \begin{pmatrix} 0 & 1 \\ 1 & 2 \end{pmatrix}
   $$
3. Kommutatorni hisoblaymiz:
   $$
   [A, B] = AB - BA = \begin{pmatrix} 2 & 1 \\ 1 & 0 \end{pmatrix} - \begin{pmatrix} 0 & 1 \\ 1 & 2 \end{pmatrix} = \begin{pmatrix} 2 & 0 \\ 0 & -2 \end{pmatrix}
   $$
Kommutator nol matritsa bo'lmagani sababli, bu matritsalar o'rin almashmaydi.

**Javob:** $[A, B] = \begin{pmatrix} 2 & 0 \\ 0 & -2 \end{pmatrix}$.
</details>

---

### 2-mashq
$A = \begin{pmatrix} 2 & -1 \\ 3 & -2 \end{pmatrix}$ matritsa berilgan. $A^2$ va $A^{2026}$ darajalarini hisoblang.

<details>
<summary>To'liq yechimi va javobi</summary>

**Yechish:**
1. $A^2$ ni hisoblaymiz:
   $$
   A^2 = A \cdot A = \begin{pmatrix} 2 & -1 \\ 3 & -2 \end{pmatrix} \begin{pmatrix} 2 & -1 \\ 3 & -2 \end{pmatrix}
   $$
   $$
   c_{11} = 2(2) + (-1)(3) = 4 - 3 = 1
   $$
   $$
   c_{12} = 2(-1) + (-1)(-2) = -2 + 2 = 0
   $$
   $$
   c_{21} = 3(2) + (-2)(3) = 6 - 6 = 0
   $$
   $$
   c_{22} = 3(-1) + (-2)(-2) = -3 + 4 = 1
   $$
   Demak:
   $$
   A^2 = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = I_2
   $$
   Bunday kvadrat matritsalar matematikada **involyutiv matritsalar** deb ataladi ($A^2 = I$).
2. Juft darajalar birlik matritsaga teng bo'ladi:
   $$
   A^{2026} = (A^2)^{1013} = I^{1013} = I = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}
   $$

**Javob:** $A^2 = I_2, \quad A^{2026} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$.
</details>

---

### 3-mashq
$A$ va $B$ simmetrik matritsalar bo'lsin ($A^T = A, B^T = B$). Qanday zaruriy va yetarli shart bajarilganda ularning ko'paytmasi $AB$ ham simmetrik matritsa bo'ladi?

<details>
<summary>To'liq yechimi va javobi</summary>

**Yechish:**
1. $AB$ matritsa simmetrik bo'lishi uchun ta'rifga ko'ra $(AB)^T = AB$ bo'lishi kerak.
2. Ko'paytmani transponirlash xossasiga ko'ra:
   $$
   (AB)^T = B^T A^T
   $$
3. Shartga ko'ra $A$ va $B$ simmetrik bo'lgani uchun: $A^T = A$ va $B^T = B$.  
   Demak:
   $$
   (AB)^T = B A
   $$
4. Simmetriklik sharti bilan tenglashtiramiz:
   $$
   BA = AB
   $$
Shunday qilib, ikki simmetrik matritsaning ko'paytmasi simmetrik bo'lishi uchun ular o'zaro **kommutatsiyalanishi ($AB = BA$) zarur va yetarlidir!**

**Javob:** Faqat va faqat ular kommutatsiyalanganda: $AB = BA$.
</details>

---

## 💡 Imtihon Layfhaklari va Tezkor Maslahatlar

1. **O'lcham nazorati sxemasi:**
   Misolni yechishdan oldin har doim qoralama chetiga o'lchamlarni yozib oling:
   $$
   (m \times \mathbf{k}) \times (\mathbf{k} \times n) \implies (m \times n)
   $$
   Agar o'rtadagi ikkita qalin son bir-biriga teng bo'lmasa, qalamni to'xtating — ko'paytma mavjud emas!

2. **Iz yordamida ko'paytirishni tezkor tekshirish:**
   Agar siz $AB$ ko'paytmani hisoblagan bo'lsangiz, lekin natijaga ishonchingiz komil bo'lmasa, $AB$ ning izini hisoblang: $\text{tr}(AB)$. So'ngra diagonal elementlarni tashkil qilgan $A$ satrlari va $B$ ustunlarini tekshirib ko'ring. Barcha hollarda $\text{tr}(AB) = \text{tr}(BA)$ bajarilishi shart.

3. **Darajaga ko'tarishda takrorlanuvchi sikllarni izlash:**
   Imtihonda $A^{50}$ yoki $A^{100}$ ni topish so'ralsa, hech qachon 50 marta ko'paytirmang! Dastlabki $A^2, A^3$ ni hisoblang. U yo $I$ ga (birlik matritsaga), yo $-I$ ga, yo $O$ ga aylanadi yoki elementlari arifmetik progressiya hosil qiladi.
