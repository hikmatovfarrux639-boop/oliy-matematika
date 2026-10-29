---
title: "Matritsalarni ko'paytirish: Satrni ustunga ko'paytirish san'ati"
module: "chiziqli-algebra"
order: 2
description: "Nega matritsalar hadma-had ko'paytirilmaydi? O'lchamlar mosligi, ko'paytirish algoritmi, no-kommutativlik, nol bo'luvchilar va darajaga ko'tarish."
---

## Kirish: Nega matritsalar hadma-had ko'paytirilmaydi?

Ko'pchilik talabalar birinchi marta matritsalarni o'rganganda shunday savol berishadi: *"Qo'shganda mos kataklarni qo'shdik, ayirganda mos kataklarni ayirdik, nega ko'paytirganda ham shunchaki $a_{11} \cdot b_{11}$ qilib qo'ya qolmaymiz?"*

Sababi: Matritsalar chiziqli algebraning alohida tili bo'lib, ular dastlab **chiziqli almashtirishlar (funksiyalarning ketma-ket qo'llanilishi — kompozitsiyasi)** uchun kashf qilingan.

Tasavvur qiling, 2D tekislikda avval burish ($A$), so'ng cho'zish ($B$) amali bajarildi. Agar bir koordinatadan ikkinchisiga, undan uchinchisiga o'tish formulasini qalamda chiqarib ko'rsangiz, yangi koeffitsiyentlar aynan **"1-matritsaning satrini 2-matritsaning ustuniga ko'paytirish"** natijasida hosil bo'lishini ko'rasiz!

---

## 1. Ko'paytirishning oltin sharti (O'lchamlar mosligi)

Ikkita $A$ va $B$ matritsani o'zaro ko'paytirish ($A \cdot B$) mumkin bo'lishi uchun quyidagi qat'iy shart bajarilishi shart:

> [!IMPORTANT] O'lchamlar zanjiri qoidasi
> **1-matritsaning ustunlar soni 2-matritsaning satrlar soniga teng bo'lishi SHART!**
> $$
> (m \times \mathbf{k}) \cdot (\mathbf{k} \times n) = (m \times n)
> $$
> - Agar ichki indekslar ($k$) bir-biriga teng bo'lmasa, **ko'paytirish mutlaqo mumkin emas**!
> - Natijaviy ko'paytma matritsaning o'lchami chetki indekslardan ($m \times n$) iborat bo'ladi.

### Misollar:
- $(2 \times \mathbf{3}) \cdot (\mathbf{3} \times 4) = (2 \times 4)$ — **Mumkin!**
- $(3 \times \mathbf{2}) \cdot (\mathbf{3} \times 2)$ — **Mumkin emas** (ichki sonlar $2 \neq 3$).
- $(1 \times \mathbf{3}) \cdot (\mathbf{3} \times 1) = (1 \times 1)$ — **Bitta son (skalyar ko'paytma)!**
- $(3 \times \mathbf{1}) \cdot (\mathbf{1} \times 3) = (3 \times 3)$ — **Butun boshli $3 \times 3$ matritsa!**

---

## 2. "Satrni Ustunga" ko'paytirish algoritmi

$C = A \cdot B$ matritsaning $i$-satr va $j$-ustunida joylashgan $c_{ij}$ elementi quyidagi formula bilan topiladi:

$$
c_{ij} = a_{i1} b_{1j} + a_{i2} b_{2j} + \dots + a_{ik} b_{kj} = \sum_{s=1}^k a_{is} b_{sj}
$$

> [!NOTE] Qoidaning mohiyati
> $A$ matritsaning **$i$-satrini** oling va uni $B$ matritsaning **$j$-ustuniga** "yotqizib", mos kelgan juftliklarni bir-biriga ko'paytiring hamda natijalarni qo'shing!

---

## 3. Matritsalar ko'paytmasining noodatiy xossalari

Oddiy arifmetikada biz o'rgangan qonunlar matritsalarda ko'pincha buziladi:

### 1. Kommutativ emaslik ($A \cdot B \neq B \cdot A$):
Matritsalarda ko'paytuvchilar o'rnini almashtirib bo'lmaydi!
- $A \cdot B$ mavjud bo'lsa ham, $B \cdot A$ umuman mavjud bo'lmasligi mumkin (o'lchamlari to'g'ri kelmay qoladi).
- Hatto ikkala ko'paytma mavjud bo'lsa ham, ularning natijalari har xil bo'ladi.
Shuning uchun doimo **"$A$ ni chapdan $B$ ga ko'paytirish"** yoki **"$B$ ni o'ngdan $A$ ga ko'paytirish"** deb aniq aytiladi.

### 2. "Nol bo'luvchilar" fenomeni:
Oddiy sonlarda agar $a \cdot b = 0$ bo'lsa, albatta $a = 0$ yoki $b = 0$ bo'lishi shart edi.
Ammo matritsalarda **ikkala matritsa ham noldan farqli ($A \neq O, B \neq O$) bo'la turib, ularning ko'paytmasi nollardan iborat bo'lib qolishi mumkin**:
$$
\begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix} \cdot \begin{pmatrix} 0 & 2 \\ 0 & 0 \end{pmatrix} = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix} = O
$$

### Boshqa fundamental xossalar:
3. **Assotsiativlik:** $(A \cdot B) \cdot C = A \cdot (B \cdot C)$
4. **Distributivlik:** $(A + B) \cdot C = A \cdot C + B \cdot C$ va $A \cdot (B + C) = A \cdot B + A \cdot C$
5. **Birlik matritsa:** $A \cdot E = E \cdot A = A$
6. **Transponirlashda o'rin almashinuvi:** $(A \cdot B)^T = B^T \cdot A^T$ (Ustun va satrlar roli almashgani uchun ko'paytuvchilar o'rni teskari bo'ladi!).

---

## 4. Qadamma-qadam to'liq yechilgan amaliy misollar

### 1-misol: To'rtburchak matritsalarni ko'paytirish

**Masala:** $A = \begin{pmatrix} 1 & 2 & -1 \\ 3 & 0 & 2 \end{pmatrix}$ ($2 \times 3$) va $B = \begin{pmatrix} 2 & -1 \\ 1 & 0 \\ 4 & 3 \end{pmatrix}$ ($3 \times 2$) matritsalar ko'paytmasi $C = A \cdot B$ ni hisoblang.

#### Yechish:
1. O'lchamlarni tekshiramiz: $(2 \times 3) \cdot (3 \times 2) = (2 \times 2)$. Ko'paytirish mumkin!
2. Natijaviy matritsa 4 ta elementdan iborat:
   $$
   C = \begin{pmatrix} c_{11} & c_{12} \\ c_{21} & c_{22} \end{pmatrix}
   $$

- **$c_{11}$ (1-satr $\times$ 1-ustun):**
  $$c_{11} = 1 \cdot 2 + 2 \cdot 1 + (-1) \cdot 4 = 2 + 2 - 4 = 0$$
- **$c_{12}$ (1-satr $\times$ 2-ustun):**
  $$c_{12} = 1 \cdot (-1) + 2 \cdot 0 + (-1) \cdot 3 = -1 + 0 - 3 = -4$$
- **$c_{21}$ (2-satr $\times$ 1-ustun):**
  $$c_{21} = 3 \cdot 2 + 0 \cdot 1 + 2 \cdot 4 = 6 + 0 + 8 = 14$$
- **$c_{22}$ (2-satr $\times$ 2-ustun):**
  $$c_{22} = 3 \cdot (-1) + 0 \cdot 0 + 2 \cdot 3 = -3 + 0 + 6 = 3$$

Natija:
$$
C = A \cdot B = \begin{pmatrix} 0 & -4 \\ 14 & 3 \end{pmatrix}
$$

---

### 2-misol: Matritsali ko'pxadni hisoblash: $f(A) = A^2 - 3A + 2E$

**Masala:** $A = \begin{pmatrix} 2 & 1 \\ 1 & 3 \end{pmatrix}$ bo'lsa, $f(A) = A^2 - 3A + 2E$ ifodani hisoblang.

#### Yechish:

**1) $A^2 = A \cdot A$ ni hisoblaymiz:**
$$
A^2 = \begin{pmatrix} 2 & 1 \\ 1 & 3 \end{pmatrix} \begin{pmatrix} 2 & 1 \\ 1 & 3 \end{pmatrix} = \begin{pmatrix} 2\cdot 2 + 1\cdot 1 & 2\cdot 1 + 1\cdot 3 \\ 1\cdot 2 + 3\cdot 1 & 1\cdot 1 + 3\cdot 3 \end{pmatrix} = \begin{pmatrix} 5 & 5 \\ 5 & 10 \end{pmatrix}
$$

**2) $3A$ va $2E$ ni topamiz:**
$$
3A = 3 \begin{pmatrix} 2 & 1 \\ 1 & 3 \end{pmatrix} = \begin{pmatrix} 6 & 3 \\ 3 & 9 \end{pmatrix}
$$
$$
2E = 2 \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 2 & 0 \\ 0 & 2 \end{pmatrix}
$$

**3) Hammasini jamlaymiz:**
$$
f(A) = \begin{pmatrix} 5 & 5 \\ 5 & 10 \end{pmatrix} - \begin{pmatrix} 6 & 3 \\ 3 & 9 \end{pmatrix} + \begin{pmatrix} 2 & 0 \\ 0 & 2 \end{pmatrix}
$$
$$
= \begin{pmatrix} 5 - 6 + 2 & 5 - 3 + 0 \\ 5 - 3 + 0 & 10 - 9 + 2 \end{pmatrix} = \begin{pmatrix} 1 & 2 \\ 2 & 3 \end{pmatrix}
$$

**Javob:** $f(A) = \begin{pmatrix} 1 & 2 \\ 2 & 3 \end{pmatrix}$.

---

## 5. Talabalar yo'l qo'yadigan tuzoqlar

> [!WARNING] Imtihonda ehtiyot bo'ling!
> 1. **Hadma-had ko'paytirish xatosi:** Yangi o'rganuvchilar ko'pincha $A \cdot B = \begin{pmatrix} a_{11}b_{11} & a_{12}b_{12} \\ a_{21}b_{21} & a_{22}b_{22} \end{pmatrix}$ deb ko'paytirib qo'yishadi. Bu mutlaqo xato!
> 2. **O'lchamlarni tekshirmasdan ko'paytirish:** Masalan, $(2 \times 3)$ matritsaga $(2 \times 3)$ matritsani ko'paytirishga urinish. Ikkita bir xil o'lchamli matritsalarni faqat kvadrat bo'lsagina ko'paytirish mumkin!
> 3. **Ko'phadda sonni birlik matritsasiz yozish:** $A^2 - 3A + 2$ ifodada oxiridagi $2$ soni matritsaga qo'shilayotganda albatta **$2E$ (birlik matritsaga ko'paytirilgan)** bo'lishi shart! Matritsaga oddiy sonni qo'shib bo'lmaydi.

---

## 6. Mustaqil yechish uchun amaliy mashqlar

1. $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ va $B = \begin{pmatrix} 0 & 1 \\ 2 & 3 \end{pmatrix}$ matritsalar uchun $A \cdot B$ va $B \cdot A$ ni hisoblang hamda ularning teng emasligini ko'rsating.
   - *Javob:* $A \cdot B = \begin{pmatrix} 4 & 7 \\ 8 & 15 \end{pmatrix}$, ammo $B \cdot A = \begin{pmatrix} 3 & 4 \\ 11 & 16 \end{pmatrix}$. $A \cdot B \neq B \cdot A$!

2. $A = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}$ bo'lsa, $A^3$ ni hisoblang.
   - *Javob:* $A^3 = \begin{pmatrix} 1 & 6 \\ 0 & 1 \end{pmatrix}$.
