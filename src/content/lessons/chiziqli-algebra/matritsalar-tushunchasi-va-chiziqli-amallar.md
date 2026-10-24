---
title: "Matritsalar tushunchasi, turlari va chiziqli amallar"
module: "chiziqli-algebra"
order: 1
description: "Matritsa nima, o'lchamlari, maxsus matritsalar (birlik, nol, diagonal, transponirlangan) va chiziqli amallar (qo'shish, ayirish, songa ko'paytirish)."
---

## Kirish: Matritsa nima va u hayotda nima uchun kerak?

Matematikaga birinchi marta qadam qo'ygan talaba ko'pincha so'raydi: *"Nega sonlarni qavs ichiga to'g'ri to'rtburchak qilib tizib chiqishimiz kerak? Oddiy sonlar yetarli emasmidi?"*

Keling, juda oddiy va insoniy misoldan boshlaymiz. Tasavvur qiling, siz do'konga kirdingiz va 3 xil meva xarid qildingiz:
- 1-kuni: 2 kg olma, 3 kg nok, 1 kg banan;
- 2-kuni: 1 kg olma, 4 kg nok, 2 kg banan.

Agar bu ma'lumotni jadvalga tushirsak:

| Kunlar | Olma (kg) | Nok (kg) | Banan (kg) |
|---|---|---|---|
| **1-kun** | 2 | 3 | 1 |
| **2-kun** | 1 | 4 | 2 |

Jadvalning faqat sonli qismini qavs ichiga olsak:

$$
A = \begin{pmatrix} 2 & 3 & 1 \\ 1 & 4 & 2 \end{pmatrix}
$$

Mana shu qavs ichidagi to'g'ri to'rtburchakli sonlar jadvaliga **matritsa** deyiladi!
Demak, matritsa — bu shunchaki quruq formula emas, balki **katta hajmdagi bog'liq ma'lumotlarni ixcham va tartibli saqlash hamda bir vaqtning o'zida ular ustida amallar bajarish vositasidir**. Bugungi kunda kompyuter grafikasi (har bir piksel RGB ranglari matritsasi), sun'iy intellekt (neyron to'rlar vaznlari) va iqtisodiy hisob-kitoblar aynan matritsalar tilida gaplashadi.

---

## 1. Matritsaning o'lchami va elementlarining indeksatsiyasi

Matritsa gorizontal qatorlar — **satrlar (rows)** va vertikal qatorlar — **ustunlar (columns)**dan tashkil topadi.

Agar matritsada $m$ ta satr va $n$ ta ustun bo'lsa, uning **o'lchami** $m \times n$ deb aytiladi ("m ning n ga matritsasi"):

$$
A = \begin{pmatrix}
a_{11} & a_{12} & \dots & a_{1n} \\
a_{21} & a_{22} & \dots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{m1} & a_{m2} & \dots & a_{mn}
\end{pmatrix}
$$

> [!NOTE]
> Har bir element $a_{ij}$ ikkita indeksga ega:
> - **$i$** — element joylashgan **satr raqami** ($i = 1, 2, \dots, m$);
> - **$j$** — element joylashgan **ustun raqami** ($j = 1, 2, \dots, n$).
> 
> *Yodda saqlash usuli:* Doimo birinchi bo'lib **satr**, keyin **ustun** aytiladi (xuddi ko'p qavatli uyda avval qavatga chiqib, keyin xonadonga kirgandek). Masalan, $a_{23}$ — 2-satr va 3-ustun kesishmasidagi son.

---

## 2. Matritsalarning asosiy turlari

Matritsalarni to'g'ri taniy bilish — ularni yechishning yarmi demakdir:

1. **Kvadrat matritsa:** Satrlar soni ustunlar soniga teng bo'lgan matritsa ($m = n$). Uning o'lchami $n$-tartibli deyiladi.
   $$A = \begin{pmatrix} 1 & 5 \\ -2 & 4 \end{pmatrix} \quad (2 \times 2)$$

2. **Bosh diagonal va yordamchi diagonal:** Kvadrat matritsada yuqori chap burchakdan pastki o'ng burchakka o'tuvchi chiziq **bosh diagonal** ($a_{11}, a_{22}, \dots, a_{nn}$) deyiladi. Yuqori o'ngdan pastki chapga o'tuvchisi esa **yordamchi diagonal** deyiladi.

3. **Birlik matritsa ($E$ yoki $I$):** Bosh diagonali faqat $1$ lardan, qolgan barcha elementlari $0$ lardan iborat kvadrat matritsa. U oddiy arifmetikadagi $1$ soni vazifasini bajaradi!
   $$E = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}$$

4. **Nol matritsa ($O$):** Barcha elementlari $0$ bo'lgan matritsa (arifmetikadagi $0$ kabi).

5. **Diagonal matritsa:** Bosh diagonaldan tashqaridagi barcha elementlari $0$ bo'lgan kvadrat matritsa.

6. **Transponirlangan matritsa ($A^T$ yoki $A'$):** Matritsaning satrlarini mos ravishda ustunlar qilib yozib chiqish amali:
   $$A = \begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{pmatrix} \implies A^T = \begin{pmatrix} 1 & 4 \\ 2 & 5 \\ 3 & 6 \end{pmatrix}$$

---

## 3. Matritsalar ustida chiziqli amallar

### 1) Matritsalarni qo'shish va ayirish
Ikki matritsani qo'shish yoki ayirish uchun **ularning o'lchamlari mutlaqo bir xil bo'lishi shart!**
Mos o'rindagi elementlar bir-biri bilan qo'shiladi yoki ayriladi: $C = A \pm B \implies c_{ij} = a_{ij} \pm b_{ij}$.

**Misol:**
$$
\begin{pmatrix} 2 & -1 \\ 3 & 5 \end{pmatrix} + \begin{pmatrix} 4 & 7 \\ -2 & 1 \end{pmatrix} = \begin{pmatrix} 2+4 & -1+7 \\ 3+(-2) & 5+1 \end{pmatrix} = \begin{pmatrix} 6 & 6 \\ 1 & 6 \end{pmatrix}
$$

### 2) Matritsani songa (skalyarga) ko'paytirish
Matritsani $\lambda$ soniga ko'paytirish uchun uning **har bir elementi** shu songa ko'paytiriladi:
$$
k \cdot A = \begin{pmatrix} k \cdot a_{ij} \end{pmatrix}
$$

**Misol:**
$$
3 \cdot \begin{pmatrix} 1 & -2 \\ 0 & 4 \end{pmatrix} = \begin{pmatrix} 3 \cdot 1 & 3 \cdot (-2) \\ 3 \cdot 0 & 3 \cdot 4 \end{pmatrix} = \begin{pmatrix} 3 & -6 \\ 0 & 12 \end{pmatrix}
$$

---

## 4. Chiziqli amallarning qonuniyatlari

Matritsalarni qo'shish va songa ko'paytirish oddiy sonlar kabi qulay qonunlarga bo'ysunadi:
1. $A + B = B + A$ *(Kommutativlik)*;
2. $(A + B) + C = A + (B + C)$ *(Assotsiativlik)*;
3. $A + O = A$ *(Nol matritsaning xossasi)*;
4. $A + (-A) = O$ *(Qarama-qarshi matritsa)*;
5. $k(A + B) = kA + kB$ va $(k + m)A = kA + mA$ *(Distributivlik)*;
6. $(A^T)^T = A$ va $(A + B)^T = A^T + B^T$.

---

## 5. Keng qamrovli amaliy misol

**Masala:** Berilgan $A = \begin{pmatrix} 1 & -3 & 2 \\ 4 & 0 & -1 \end{pmatrix}$ va $B = \begin{pmatrix} 2 & 1 & -1 \\ -3 & 2 & 5 \end{pmatrix}$ matritsalar uchun $C = 2A - 3B$ ifodani hisoblang.

<details>
<summary><strong>Batafsil yechimni ko'rish (Bosqichma-bosqich)</strong></summary>

**1-qadam:** $2A$ matritsani hisoblaymiz:
$$
2A = 2 \cdot \begin{pmatrix} 1 & -3 & 2 \\ 4 & 0 & -1 \end{pmatrix} = \begin{pmatrix} 2 & -6 & 4 \\ 8 & 0 & -2 \end{pmatrix}
$$

**2-qadam:** $3B$ matritsani hisoblaymiz:
$$
3B = 3 \cdot \begin{pmatrix} 2 & 1 & -1 \\ -3 & 2 & 5 \end{pmatrix} = \begin{pmatrix} 6 & 3 & -3 \\ -9 & 6 & 15 \end{pmatrix}
$$

**3-qadam:** Ayirish amalini bajaramiz ($2A - 3B$):
$$
C = \begin{pmatrix} 2 - 6 & -6 - 3 & 4 - (-3) \\ 8 - (-9) & 0 - 6 & -2 - 15 \end{pmatrix} = \begin{pmatrix} -4 & -9 & 7 \\ 17 & -6 & -17 \end{pmatrix}
$$

**Javob:** $C = \begin{pmatrix} -4 & -9 & 7 \\ 17 & -6 & -17 \end{pmatrix}$.
</details>

---

## 💡 Talabalar yo'l qo'yadigan tipik xatolar va tuzoqlar
- **1-tuzoq:** Turli o'lchamli matritsalarni qo'shishga urinish ($2 \times 2$ matritsaga $2 \times 3$ matritsani qo'shib bo'lmaydi!).
- **2-tuzoq:** Songa ko'paytirishda faqat birinchi satrni ko'paytirib, qolganlarini unutish. Determinantda faqat bitta satr ko'paytirilsa, **matritsada har bir element** ko'paytiriladi!