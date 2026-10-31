---
title: "Matritsalar tushunchasi, turlari va chiziqli amallar"
module: "chiziqli-algebra"
order: 1
description: "Matritsa nima, o'lchamlari, maxsus matritsalar (birlik, nol, diagonal, transponirlangan) va chiziqli amallar (qo'shish, ayirish, songa ko'paytirish)."
---

## 📌 Kirish va Geometrik/Fizik Mohiyat

Oliy matematikaga qadam qo'ygan talaba ko'pincha o'ziga savol beradi: *"Nega sonlarni to'g'ri to'rtburchak shaklidagi qavslar ichiga tizib chiqishimiz kerak? Oddiy sonlar yoki tenglamalar yetarli emasmidi?"*

Tarixan matritsalar XVIII–XIX asrlarda chiziqli algebraik tenglamalar sistemalarini (CHATS) qulay va ixcham shaklda yozish hamda yechish zaruriyatidan (G. Leybnits, K. Gauss, J. Silvestr, A. Keli) kelib chiqqan. Biroq bugungi kunda matritsa shunchaki hisob-kitob vositasi emas, balki fazo va axborotning fundamental matematik obyekti hisoblanadi:

1. **Geometrik mohiyat:** Matritsaning har bir ustunini fazodagi koordinata o'qlari (bazis vektorlari) yo'nalishi deb qarash mumkin. Matritsa fazoni bir holatdan ikkinchi holatga o'tkazuvchi chiziqli akslantirishning to'liq "pasporti" dir.
2. **Axborot va Data Science:** Kompyuter monitoridagi har qanday raqamli tasvir — bu piksellar yorqinligi matritsasidir (masalan, $1920 \times 1080$ o'lchamli matritsa). Rangli tasvirlar esa qizil, yashil va ko'k (RGB) qatlamlardan iborat 3 o'lchamli tenzorlardir.
3. **Fizika va Mexanika:** Elastiklik nazariyasida kuchlanishlar tenzori, qattiq jism dinamikasida inersiya tenzori, elektrodinamika va kvant mexanikasida zarrachalar holatlari aynan matritsalar orqali ifodalanadi.
4. **Iqtisodiyot:** V. Leontiyevning Nobel mukofotiga sazovor bo'lgan "Xarajat-ishlab chiqarish" (Input-Output) modeli tarmoqlararo iqtisodiy balans matritsasiga tayanadi.

Ushbu darsda biz matritsalar olamiga chuqur kirib boramiz: ularning turlari, chiziqli fazo sifatidagi xossalari hamda amaliy qo'llanilishini Strang va Ilin-Poznyak qat'iyligida o'rganamiz.

---

## 📐 Asosiy Nazariya, Qoidalar va Teoremalar

### 1. Matritsa ta'rifi va o'lchamlari

**Ta'rif:** $m$ ta satr va $n$ ta ustundan iborat to'g'ri to'rtburchakli sonlar jadvaliga $m \times n$ o'lchamli **matritsa** deyiladi va u odatda lotincha bosh harflar ($A, B, C, \dots$) bilan belgilanadi:
$$
A = \begin{pmatrix}
a_{11} & a_{12} & \dots & a_{1n} \\
a_{21} & a_{22} & \dots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{m1} & a_{m2} & \dots & a_{mn}
\end{pmatrix} \quad \text{yoki qisqacha} \quad A = (a_{ij})_{m \times n}
$$
bunda $a_{ij}$ — matritsaning $i$ - satri va $j$ - ustuni kesishmasida joylashgan elementi ($1 \le i \le m, 1 \le j \le n$).

- Agar $m = 1$ bo'lsa, $A = (a_{11}, a_{12}, \dots, a_{1n})$ — **satr-vektor** deyiladi.
- Agar $n = 1$ bo'lsa, $A = \begin{pmatrix} a_{11} \\ a_{21} \\ \vdots \\ a_{m1} \end{pmatrix}$ — **ustun-vektor** deyiladi.
- Agar $m = n$ bo'lsa, matritsa **$n$ - tartibli kvadrat matritsa** deyiladi.

### 2. Maxsus turdagi matritsalar

1. **Nol matritsa ($O$):** Barcha elementlari 0 ga teng bo'lgan matritsa: $a_{ij} = 0, \forall i, j$.
2. **Kvadrat matritsaning diagonallari:**
   - **Bosh diagonal:** $a_{11}, a_{22}, \dots, a_{nn}$ elementlar joylashgan yo'nalish.
   - **Yordamchi diagonal:** $a_{1n}, a_{2, n-1}, \dots, a_{n1}$ elementlar joylashgan yo'nalish.
3. **Diagonal matritsa:** Bosh diagonaldan tashqaridagi barcha elementlari nolga teng bo'lgan kvadrat matritsa:
   $$
   D = \text{diag}(d_1, d_2, \dots, d_n) = \begin{pmatrix} d_1 & 0 & \dots & 0 \\ 0 & d_2 & \dots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \dots & d_n \end{pmatrix}
   $$
4. **Birlik matritsa ($I$ yoki $E$):** Bosh diagonalidagi barcha elementlari $1$ ga, qolgan barcha elementlari $0$ ga teng kvadrat matritsa. Kroneker belgisi orqali: $\delta_{ij} = \begin{cases} 1, & i = j \\ 0, & i \neq j \end{cases}$.
   $$
   I_n = \begin{pmatrix} 1 & 0 & \dots & 0 \\ 0 & 1 & \dots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \dots & 1 \end{pmatrix}
   $$
5. **Uchburchakli matritsalar:**
   - **Yuqori uchburchakli:** Bosh diagonaldan pastda joylashgan barcha elementlari nolga teng ($i > j \implies a_{ij} = 0$).
   - **Quyi uchburchakli:** Bosh diagonaldan yuqorida joylashgan barcha elementlari nolga teng ($i < j \implies a_{ij} = 0$).

### 3. Matritsani transponirlash, simmetrik va qiya simmetrik matritsalar

$A = (a_{ij})_{m \times n}$ matritsaning satrlarini mos ustunlari bilan almashtirishdan hosil bo'lgan $n \times m$ o'lchamli matritsaga **transponirlangan matritsa** deyiladi va $A^T$ (yoki $A'$) deb belgilanadi:
$$
(A^T)_{ji} = a_{ij}
$$
**Transponirlash xossalari:**
1. $(A^T)^T = A$
2. $(A + B)^T = A^T + B^T$
3. $(\alpha A)^T = \alpha A^T, \quad \forall \alpha \in \mathbb{R}$

**Muhim sinflar:**
- **Simmetrik matritsa:** Agar kvadrat matritsa uchun $A^T = A$ bo'lsa ($a_{ij} = a_{ji}$).
- **Qiya simmetrik (anti-simmetrik) matritsa:** Agar $A^T = -A$ bo'lsa ($a_{ij} = -a_{ji}$). Bundan kelib chiqadiki, qiya simmetrik matritsaning bosh diagonal elementlari doimo nolga teng: $a_{ii} = -a_{ii} \implies 2a_{ii} = 0 \implies a_{ii} = 0$.

**Klassik teorema (Simmetrik va qiya simmetrik yoyilma):**  
Ixtiyoriy kvadrat $A$ matritsani yagona usulda simmetrik ($S$) va qiya simmetrik ($K$) matritsalar yig'indisi ko'rinishida yozish mumkin:
$$
A = S + K, \quad \text{bunda} \quad S = \frac{A + A^T}{2}, \quad K = \frac{A - A^T}{2}
$$

### 4. Matritsaning izi (Trace)
$n \times n$ kvadrat matritsaning bosh diagonal elementlari yig'indisiga matritsaning **izi (spuri)** deyiladi:
$$
\text{tr}(A) = \sum_{i=1}^n a_{ii} = a_{11} + a_{22} + \dots + a_{nn}
$$
Xossalari: $\text{tr}(A + B) = \text{tr}(A) + \text{tr}(B)$, $\text{tr}(\alpha A) = \alpha \text{tr}(A)$, $\text{tr}(A^T) = \text{tr}(A)$.

### 5. Matritsalar ustida chiziqli amallar va vektor fazo aksiomalari

Bir xil $m \times n$ o'lchamli ikkita $A = (a_{ij})$ va $B = (b_{ij})$ matritsa berilgan bo'lsin.
1. **Qo'shish (ayirish):** $C = A \pm B \iff c_{ij} = a_{ij} \pm b_{ij}$ (mos o'rindagi elementlar qo'shiladi/ayriladi). Faqat bir xil o'lchamli matritsalarnigina qo'shish mumkin!
2. **Songa ko'paytirish:** Matritsani skalyar $\alpha \in \mathbb{R}$ ga ko'paytirish uchun uning **har bir** elementini $\alpha$ ga ko'paytirish kerak: $(\alpha A)_{ij} = \alpha a_{ij}$.

Barcha $m \times n$ o'lchamli matritsalar to'plami $\mathbb{R}^{m \times n}$ kiritilgan qo'shish va songa ko'paytirish amallariga nisbatan **chiziqli fazo (vektor fazo)** tashkil etadi va quyidagi 8 ta aksiomani qanoatlantiradi:
1. $A + B = B + A$ (kommutativlik)
2. $(A + B) + C = A + (B + C)$ (assotsiativlik)
3. $A + O = A$ (nol element mavjudligi)
4. $A + (-A) = O$ (qarama-qarshi element mavjudligi, bunda $-A = (-1)A$)
5. $\alpha (A + B) = \alpha A + \alpha B$
6. $(\alpha + \beta) A = \alpha A + \beta A$
7. $(\alpha \beta) A = \alpha (\beta A)$
8. $1 \cdot A = A$

Ushbu fazoning o'lchami: $\dim(\mathbb{R}^{m \times n}) = m \cdot n$.

---

## 📝 Qadamma-qadam Yechilgan Universitet Misollari

### 1-misol: Matritsalar chiziqli kombinatsiyasi va noma'lum matritsani topish
**Shart:** Berilgan matritsalar:
$$
A = \begin{pmatrix} 2 & -1 & 3 \\ 0 & 4 & -2 \end{pmatrix}, \quad B = \begin{pmatrix} 1 & 0 \\ -2 & 3 \\ 4 & -1 \end{pmatrix}
$$
Quyidagi matritsali tenglamadan $X$ matritsani toping:
$$
2X + 3A = 4B^T
$$

**Yechish:**
1-qadam: O'lchamlarni tekshiramiz:
$A$ ning o'lchami $2 \times 3$.  
$B$ ning o'lchami $3 \times 2 \implies B^T$ ning o'lchami $2 \times 3$.  
Demak, barcha hadlar $2 \times 3$ o'lchamga ega bo'lib, amallar to'g'ri aniqlangan. Noma'lum $X$ ham $2 \times 3$ matritsa bo'ladi.

2-qadam: $B^T$ ni topamiz:
Satrlarini ustun qilib yozamiz:
$$
B^T = \begin{pmatrix} 1 & -2 & 4 \\ 0 & 3 & -1 \end{pmatrix}
$$

3-qadam: $4B^T$ va $3A$ matritsalarni hisoblaymiz:
$$
4B^T = 4 \begin{pmatrix} 1 & -2 & 4 \\ 0 & 3 & -1 \end{pmatrix} = \begin{pmatrix} 4 & -8 & 16 \\ 0 & 12 & -4 \end{pmatrix}
$$
$$
3A = 3 \begin{pmatrix} 2 & -1 & 3 \\ 0 & 4 & -2 \end{pmatrix} = \begin{pmatrix} 6 & -3 & 9 \\ 0 & 12 & -6 \end{pmatrix}
$$

4-qadam: Tenglamadan $2X$ ni ajratamiz:
$$
2X = 4B^T - 3A = \begin{pmatrix} 4 & -8 & 16 \\ 0 & 12 & -4 \end{pmatrix} - \begin{pmatrix} 6 & -3 & 9 \\ 0 & 12 & -6 \end{pmatrix}
$$
Mos elementlarni ayiramiz:
$$
2X = \begin{pmatrix} 4 - 6 & -8 - (-3) & 16 - 9 \\ 0 - 0 & 12 - 12 & -4 - (-6) \end{pmatrix} = \begin{pmatrix} -2 & -5 & 7 \\ 0 & 0 & 2 \end{pmatrix}
$$

5-qadam: Har bir elementni $2$ ga bo'lamiz:
$$
X = \frac{1}{2} \begin{pmatrix} -2 & -5 & 7 \\ 0 & 0 & 2 \end{pmatrix} = \begin{pmatrix} -1 & -2.5 & 3.5 \\ 0 & 0 & 1 \end{pmatrix}
$$
**Javob:** $X = \begin{pmatrix} -1 & -5/2 & 7/2 \\ 0 & 0 & 1 \end{pmatrix}$.

---

### 2-misol: Kvadrat matritsani simmetrik va qiya simmetrik qismlarga ajratish
**Shart:** Berilgan $A$ matritsani simmetrik va qiya simmetrik matritsalar yig'indisi ko'rinishida tasvirlang va ularning xossalarini tekshiring:
$$
A = \begin{pmatrix} 3 & 4 & -2 \\ 2 & 1 & 6 \\ 0 & -4 & 5 \end{pmatrix}
$$

**Yechish:**
1-qadam: Transponirlangan $A^T$ matritsani yozamiz:
$$
A^T = \begin{pmatrix} 3 & 2 & 0 \\ 4 & 1 & -4 \\ -2 & 6 & 5 \end{pmatrix}
$$

2-qadam: Simmetrik qism $S = \frac{1}{2}(A + A^T)$ ni hisoblaymiz:
$$
A + A^T = \begin{pmatrix} 3+3 & 4+2 & -2+0 \\ 2+4 & 1+1 & 6+(-4) \\ 0+(-2) & -4+6 & 5+5 \end{pmatrix} = \begin{pmatrix} 6 & 6 & -2 \\ 6 & 2 & 2 \\ -2 & 2 & 10 \end{pmatrix}
$$
$$
S = \frac{1}{2} \begin{pmatrix} 6 & 6 & -2 \\ 6 & 2 & 2 \\ -2 & 2 & 10 \end{pmatrix} = \begin{pmatrix} 3 & 3 & -1 \\ 3 & 1 & 1 \\ -1 & 1 & 5 \end{pmatrix}
$$
Tekshirish: $S^T = S$ (bosh diagonalga nisbatan simmetrik).

3-qadam: Qiya simmetrik qism $K = \frac{1}{2}(A - A^T)$ ni hisoblaymiz:
$$
A - A^T = \begin{pmatrix} 3-3 & 4-2 & -2-0 \\ 2-4 & 1-1 & 6-(-4) \\ 0-(-2) & -4-6 & 5-5 \end{pmatrix} = \begin{pmatrix} 0 & 2 & -2 \\ -2 & 0 & 10 \\ 2 & -10 & 0 \end{pmatrix}
$$
$$
K = \frac{1}{2} \begin{pmatrix} 0 & 2 & -2 \\ -2 & 0 & 10 \\ 2 & -10 & 0 \end{pmatrix} = \begin{pmatrix} 0 & 1 & -1 \\ -1 & 0 & 5 \\ 1 & -5 & 0 \end{pmatrix}
$$
Tekshirish: Bosh diagonal elementlari nollardan iborat va $k_{ji} = -k_{ij}$, demak $K^T = -K$.

4-qadam: Yig'indini tekshiramiz:
$$
S + K = \begin{pmatrix} 3+0 & 3+1 & -1+(-1) \\ 3+(-1) & 1+0 & 1+5 \\ -1+1 & 1+(-5) & 5+0 \end{pmatrix} = \begin{pmatrix} 3 & 4 & -2 \\ 2 & 1 & 6 \\ 0 & -4 & 5 \end{pmatrix} = A
$$
Shuningdek: $\text{tr}(A) = 3 + 1 + 5 = 9$, $\text{tr}(S) = 3 + 1 + 5 = 9$, $\text{tr}(K) = 0 + 0 + 0 = 0$. $\text{tr}(A) = \text{tr}(S)$ har doim bajariladi!

**Javob:** 
$S = \begin{pmatrix} 3 & 3 & -1 \\ 3 & 1 & 1 \\ -1 & 1 & 5 \end{pmatrix}, \quad K = \begin{pmatrix} 0 & 1 & -1 \\ -1 & 0 & 5 \\ 1 & -5 & 0 \end{pmatrix}$.

---

### 3-misol: Noma'lum matritsalar sistemasini algebraik yechish
**Shart:** Quyidagi matritsalar sistemasidan $X$ va $Y$ matritsalarni toping:
$$
\begin{cases}
2X + Y = \begin{pmatrix} 5 & 1 \\ 4 & 7 \end{pmatrix} \\
X - 2Y = \begin{pmatrix} 0 & 3 \\ -3 & 1 \end{pmatrix}
\end{cases}
$$

**Yechish:**
1-qadam: Bu sistemani oddiy chiziqli tenglamalar kabi noma'lumni yo'qotish (qo'shish) usulida yechamiz.  
1-tenglamani 2 ga ko'paytiramiz:
$$
2 \cdot (2X + Y) = 4X + 2Y = 2 \begin{pmatrix} 5 & 1 \\ 4 & 7 \end{pmatrix} = \begin{pmatrix} 10 & 2 \\ 8 & 14 \end{pmatrix}
$$
2-qadam: Hosil bo'lgan tenglamani 2-tenglamaga hadma-had qo'shamiz:
$$
(4X + 2Y) + (X - 2Y) = \begin{pmatrix} 10 & 2 \\ 8 & 14 \end{pmatrix} + \begin{pmatrix} 0 & 3 \\ -3 & 1 \end{pmatrix}
$$
$$
5X = \begin{pmatrix} 10 + 0 & 2 + 3 \\ 8 + (-3) & 14 + 1 \end{pmatrix} = \begin{pmatrix} 10 & 5 \\ 5 & 15 \end{pmatrix}
$$
3-qadam: Har bir elementni 5 ga bo'lib, $X$ ni topamiz:
$$
X = \frac{1}{5} \begin{pmatrix} 10 & 5 \\ 5 & 15 \end{pmatrix} = \begin{pmatrix} 2 & 1 \\ 1 & 3 \end{pmatrix}
$$
4-qadam: Birinchi tenglamadan $Y$ ni ifodalaymiz:
$$
Y = \begin{pmatrix} 5 & 1 \\ 4 & 7 \end{pmatrix} - 2X = \begin{pmatrix} 5 & 1 \\ 4 & 7 \end{pmatrix} - 2 \begin{pmatrix} 2 & 1 \\ 1 & 3 \end{pmatrix} = \begin{pmatrix} 5 & 1 \\ 4 & 7 \end{pmatrix} - \begin{pmatrix} 4 & 2 \\ 2 & 6 \end{pmatrix}
$$
$$
Y = \begin{pmatrix} 5 - 4 & 1 - 2 \\ 4 - 2 & 7 - 6 \end{pmatrix} = \begin{pmatrix} 1 & -1 \\ 2 & 1 \end{pmatrix}
$$
**Javob:** $X = \begin{pmatrix} 2 & 1 \\ 1 & 3 \end{pmatrix}, \quad Y = \begin{pmatrix} 1 & -1 \\ 2 & 1 \end{pmatrix}$.

---

### 4-misol: Iqtisodiy balans va tarmoqlararo chiziqli model
**Shart:** Uchta tarmoqdan iborat iqtisodiy tizimning ikki oylik ishlab chiqarish hajmlari mos ravishda $A$ va $B$ matritsalar bilan berilgan:
$$
A = \begin{pmatrix} 120 & 80 & 50 \\ 90 & 110 & 70 \end{pmatrix}, \quad B = \begin{pmatrix} 130 & 75 & 60 \\ 100 & 115 & 80 \end{pmatrix}
$$
Bunda 1-satr ichki iste'molni, 2-satr eksportni ifodalaydi. Ustunlar esa metallurgiya, energetika va qishloq xo'jaligi tarmoqlariga to'g'ri keladi.  
1) Ikki oylik umumiy ishlab chiqarish matritsasi $T = A + B$ ni hisoblang;  
2) Agar kelgusi oyda barcha ko'rsatkichlarni 15% ga oshirish rejalashtirilgan bo'lsa, $B$ matritsaga nisbatan yangi reja matritsasi $R = 1.15 B$ ni aniqlang.

**Yechish:**
1-qadam: $T = A + B$ ni hadma-had qo'shamiz:
$$
T = \begin{pmatrix} 120 + 130 & 80 + 75 & 50 + 60 \\ 90 + 100 & 110 + 115 & 70 + 80 \end{pmatrix} = \begin{pmatrix} 250 & 155 & 110 \\ 190 & 225 & 150 \end{pmatrix}
$$
2-qadam: $B$ matritsaning har bir elementini $1.15$ ga ko'paytiramiz:
$$
R = 1.15 \cdot \begin{pmatrix} 130 & 75 & 60 \\ 100 & 115 & 80 \end{pmatrix} = \begin{pmatrix} 1.15 \cdot 130 & 1.15 \cdot 75 & 1.15 \cdot 60 \\ 1.15 \cdot 100 & 1.15 \cdot 115 & 1.15 \cdot 80 \end{pmatrix} = \begin{pmatrix} 149.5 & 86.25 & 69 \\ 115 & 132.25 & 92 \end{pmatrix}
$$
**Javob:** $T = \begin{pmatrix} 250 & 155 & 110 \\ 190 & 225 & 150 \end{pmatrix}$, $R = \begin{pmatrix} 149.5 & 86.25 & 69 \\ 115 & 132.25 & 92 \end{pmatrix}$.

---

## ⚠️ Talabalar Eng Ko'p Yo'l Qo'yadigan Xatolar va Tuzoqlar

1. **Turli o'lchamli matritsalarni qo'shishga urinish:**
   Masalan, $2 \times 3$ matritsaga $3 \times 2$ matritsani qo'shib bo'lmaydi! Ularning elementlari soni bir xil (6 ta) bo'lsa ham, geometrik va chiziqli algebraning qonunlariga ko'ra ularning shakli va fazolari to'g'ri kelmaydi. Bunday amal matematik jihatdan aniqlanmagan.

2. **Songa ko'paytirishni determinant xossasi bilan adashtirish:**
   Matritsani $\alpha$ soniga ko'paytirganda uning **barcha** $m \times n$ ta elementi $\alpha$ ga ko'paytiriladi. Talabalar ko'pincha determinant qoidasi (determinantni songa ko'paytirish faqat bitta satr yoki bitta ustunga ko'paytirilishi) bilan adashtirib, faqat birinchi satrni ko'paytirib qo'yishadi. Bu qo'pol xatodir!

3. **Qiya simmetrik matritsaning diagonalini noldan farqli olish:**
   Ko'p talabalar testlarda qiya simmetrik matritsa elementlarini yozayotganda diagonalga ixtiyoriy sonlarni qo'yishadi. Unutmang: $a_{ii} = -a_{ii} \iff a_{ii} = 0$. Qiya simmetrik matritsaning bosh diagonalida faqat va faqat nollar turishi shart!

4. **Transponirlashda satr va ustun indekslarini chalkashtirish:**
   Matritsa transponirlanganda $a_{ij}$ elementi $a_{ji}$ o'rniga o'tadi. Bosh diagonal joyida qoladi, qolgan elementlar bosh diagonalga nisbatan ko'zgu kabi akslanadi.

---

## 🎯 Mustaqil Yechish Uchun Amaliy Mashqlar va Yechimlar

### 1-mashq
Agar $A = \begin{pmatrix} 1 & -3 \\ 2 & 4 \end{pmatrix}$ va $B = \begin{pmatrix} -2 & 5 \\ 3 & -1 \end{pmatrix}$ bo'lsa, $C = 3A^T - 2B$ matritsaning izini $\text{tr}(C)$ hisoblang.

<details>
<summary>To'liq yechimi va javobi</summary>

**Yechish:**
1-usul (To'g'ridan-to'g'ri hisoblash):
$$
A^T = \begin{pmatrix} 1 & 2 \\ -3 & 4 \end{pmatrix} \implies 3A^T = \begin{pmatrix} 3 & 6 \\ -9 & 12 \end{pmatrix}
$$
$$
2B = \begin{pmatrix} -4 & 10 \\ 6 & -2 \end{pmatrix}
$$
$$
C = 3A^T - 2B = \begin{pmatrix} 3 - (-4) & 6 - 10 \\ -9 - 6 & 12 - (-2) \end{pmatrix} = \begin{pmatrix} 7 & -4 \\ -15 & 14 \end{pmatrix}
$$
Matritsaning izi:
$$
\text{tr}(C) = c_{11} + c_{22} = 7 + 14 = 21
$$

2-usul (Iz xossasidan foydalanish - Imtihon layfhaki):
$$
\text{tr}(C) = \text{tr}(3A^T - 2B) = 3\text{tr}(A^T) - 2\text{tr}(B) = 3\text{tr}(A) - 2\text{tr}(B)
$$
$\text{tr}(A) = 1 + 4 = 5$, $\text{tr}(B) = -2 + (-1) = -3$.  
$$
\text{tr}(C) = 3(5) - 2(-3) = 15 + 6 = 21
$$
Natijalar to'liq mos tushdi!

**Javob:** $\text{tr}(C) = 21$.
</details>

---

### 2-mashq
Noma'lum $x, y, z$ o'zgaruvchilarni toping, agar quyidagi matritsa simmetrik bo'lsa:
$$
M = \begin{pmatrix} 5 & 2x - 1 & 4 \\ 7 & 3 & y + 2 \\ z - 3 & -1 & 8 \end{pmatrix}
$$

<details>
<summary>To'liq yechimi va javobi</summary>

**Yechish:**
Simmetrik matritsa shartiga ko'ra $M^T = M$, ya'ni $m_{ij} = m_{ji}$:
1. $m_{12} = m_{21} \implies 2x - 1 = 7 \implies 2x = 8 \implies x = 4$.
2. $m_{13} = m_{31} \implies 4 = z - 3 \implies z = 7$.
3. $m_{23} = m_{32} \implies y + 2 = -1 \implies y = -3$.

Tekshiramiz:
$M = \begin{pmatrix} 5 & 7 & 4 \\ 7 & 3 & -1 \\ 4 & -1 & 8 \end{pmatrix}$. Matritsa to'liq simmetrik bo'ldi!

**Javob:** $x = 4, y = -3, z = 7$.
</details>

---

### 3-mashq
$A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ matritsa berilgan. $A + X = 2(A - X) + I_2$ tenglamani qanoatlantiruvchi $X$ matritsani toping.

<details>
<summary>To'liq yechimi va javobi</summary>

**Yechish:**
1. Tenglamaning qavslarini ochamiz:
   $$
   A + X = 2A - 2X + I_2
   $$
2. Noma'lum $X$ qatnashgan hadlarni chap tomonga, qolganlarini o'ng tomonga o'tkazamiz:
   $$
   X + 2X = 2A - A + I_2 \implies 3X = A + I_2
   $$
3. $A + I_2$ ni hisoblaymiz:
   $$
   A + I_2 = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} + \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 2 & 2 \\ 3 & 5 \end{pmatrix}
   $$
4. Har bir elementni 3 ga bo'lamiz:
   $$
   X = \frac{1}{3} \begin{pmatrix} 2 & 2 \\ 3 & 5 \end{pmatrix} = \begin{pmatrix} 2/3 & 2/3 \\ 1 & 5/3 \end{pmatrix}
   $$

**Javob:** $X = \begin{pmatrix} 2/3 & 2/3 \\ 1 & 5/3 \end{pmatrix}$.
</details>

---

## 💡 Imtihon Layfhaklari va Tezkor Maslahatlar

1. **Diagonal elementlar yig'indisi (Iz) bo'yicha tezkor nazorat:**
   Matritsalar ustida qo'shish yoki chiziqli kombinatsiya bajarganingizda, hisoblashlaringiz to'g'riligini tekshirish uchun izlar tengligini tekshiring:
   $$
   \text{tr}(\alpha A + \beta B) = \alpha \text{tr}(A) + \beta \text{tr}(B)
   $$
   Agar bu tenglik bajarilmasa, oraliq amallarda qayerdadir ishorada xato qilgansiz.

2. **Qiya simmetrik matritsalar uchun oltin qoida:**
   Har qanday qiya simmetrik matritsaning izi doimo nolga teng: $\text{tr}(K) = 0$. Bundan tashqari, toq tartibli ($3 \times 3, 5 \times 5, \dots$) ixtiyoriy qiya simmetrik matritsaning determinanti har doim $0$ ga teng: $\det(K) = 0$. Ushbu fakt testlarda ko'p uchraydi!

3. **Matritsali tenglamalarni yechish taktikasi:**
   Matritsali tenglamalarni yechishda sonlarni emas, avval matritsa harflarini oddiy chiziqli tenglama kabi soddalashtirib oling (masalan, $3X = A + I$). Shundan so'nggina sonli qiymatlarni qo'yib hisoblang — bu hisoblashdagi xatoliklar ehtimolini 3 barobarga kamaytiradi.
