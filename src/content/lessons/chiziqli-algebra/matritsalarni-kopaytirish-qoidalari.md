---
title: "Matritsalarni ko'paytirish: Satrni ustunga ko'paytirish san'ati"
module: "chiziqli-algebra"
order: 2
description: "Nega matritsalar hadma-had ko'paytirilmaydi? O'lchamlar mosligi, ko'paytirish algoritmi, no-kommutativlik va darajaga ko'tarish."
---

## Nega matritsalar hadma-had ko'paytirilmaydi?

Ko'pchilik o'quvchilar: *"Qo'shganda mos elementlarni qo'shdik, nega ko'paytirganda ham shunchaki $a_{11} \cdot b_{11}$ qilib qo'ya qolmaymiz?"* deb so'rashadi.

Sababi: Matritsalar matematikaning alohida tili bo'lib, ular dastlab **chiziqli almashtirishlar (funksiyalar tarkibi — kompozitsiyasi)** uchun kashf qilingan. Agar bitta koordinatalar sistemasidan ikkinchisiga, undan uchinchisiga o'tsangiz, o'zgaruvchilar bir-biriga zanjirsimon bog'lanadi. Bu zanjirni ixcham ifodalash uchun **"satrni ustunga ko'paytirish"** qoidasi zarur bo'ladi.

---

## 1. Ko'paytirishning oltin sharti (O'lchamlar mosligi)

Ikkita $A$ va $B$ matritsani ko'paytirish ($A \cdot B$) uchun:
> **1-matritsaning ustunlar soni 2-matritsaning satrlar soniga teng bo'lishi SHART!**

$$
(m \times \mathbf{k}) \cdot (\mathbf{k} \times n) = (m \times n)
$$

Agar ichki sonlar ($k$) teng bo'lmasa, **ko'paytirish mutlaqo mumkin emas!** Natijaviy matritsaning o'lchami esa chetki sonlar ($m \times n$) bo'ladi.

---

## 2. "Satrni Ustunga" ko'paytirish algoritmi

$C = A \cdot B$ matritsaning $c_{ij}$ elementi quyidagicha hisoblanadi:
> $A$ matritsaning **$i$-satrini** oling va $B$ matritsaning **$j$-ustuniga** mosma-mos ko'paytirib, yig'indisini hisoblang:

$$
c_{ij} = a_{i1}b_{1j} + a_{i2}b_{2j} + \dots + a_{ik}b_{kj} = \sum_{s=1}^k a_{is}b_{sj}
$$

### Ko'rgazmali misol:
$$
A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}, \quad B = \begin{pmatrix} 5 & 6 \\ 7 & 8 \end{pmatrix}
$$

1. $c_{11}$ (1-satr $\times$ 1-ustun): $(1 \cdot 5) + (2 \cdot 7) = 5 + 14 = 19$
2. $c_{12}$ (1-satr $\times$ 2-ustun): $(1 \cdot 6) + (2 \cdot 8) = 6 + 16 = 22$
3. $c_{21}$ (2-satr $\times$ 1-ustun): $(3 \cdot 5) + (4 \cdot 7) = 15 + 28 = 43$
4. $c_{22}$ (2-satr $\times$ 2-ustun): $(3 \cdot 6) + (4 \cdot 8) = 18 + 32 = 50$

$$
C = A \cdot B = \begin{pmatrix} 19 & 22 \\ 43 & 50 \end{pmatrix}
$$

---

## 3. Matritsalar ko'paytmasining eng muhim xossasi: $A \cdot B \neq B \cdot A$

Oddiy sonlarda $2 \cdot 3 = 3 \cdot 2 = 6$. Ammo matritsalarda ko'paytirish tartibi o'zgarsa, natija mutlaqo boshqa chiqadi yoki hatto ko'paytirish imkonsiz bo'lib qoladi!

> [!WARNING]
> Matritsalar ko'paytmasida **kommutativlik o'rinli emas**:
> $$A \cdot B \neq B \cdot A$$
> Shu sababli doimo **"A ni chapdan B ga ko'paytirish"** yoki **"B ni o'ngdan A ga ko'paytirish"** deb aniq aytiladi.

### Boshqa asosiy xossalar:
1. $(A \cdot B) \cdot C = A \cdot (B \cdot C)$ *(Assotsiativlik)*;
2. $(A + B) \cdot C = A \cdot C + B \cdot C$ va $A \cdot (B + C) = A \cdot B + A \cdot C$ *(Distributivlik)*;
3. $A \cdot E = E \cdot A = A$ *(Birlik matritsaga ko'paytirish matritsani o'zgartirmaydi)*;
4. $(A \cdot B)^T = B^T \cdot A^T$ *(Transponirlashda ko'paytuvchilar o'rni almashadi!)*;
5. $A \cdot O = O \cdot A = O$.

---

## 4. Matritsani darajaga ko'tarish

Faqat kvadrat matritsalarnigina darajaga ko'tarish mumkin:
$$
A^2 = A \cdot A, \quad A^3 = A^2 \cdot A = A \cdot A \cdot A, \quad A^0 = E
$$

**Namunaviy masala:** $A = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ bo'lsa, $A^n$ formulasini toping.

<details>
<summary><strong>Yechim va induksiya</strong></summary>

$$A^2 = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix} \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}$$
$$A^3 = A^2 \cdot A = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix} \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 1 & 3 \\ 0 & 1 \end{pmatrix}$$

Qonuniyat ko'rinib turibdi:
$$
A^n = \begin{pmatrix} 1 & n \\ 0 & 1 \end{pmatrix}
$$
</details>

---

## 💡 Mashqlar va o'z-o'zini tekshirish
$A = \begin{pmatrix} 1 & 2 & 3 \end{pmatrix}$ ($1 \times 3$) va $B = \begin{pmatrix} 4 \\ 5 \\ 6 \end{pmatrix}$ ($3 \times 1$) matritsalar berilgan.
1. $A \cdot B$ ni hisoblang (Natija: $1 \times 1$ sonli matritsa: $(32)$).
2. $B \cdot A$ ni hisoblang (Natija: $3 \times 3$ to'liq matritsa!). Ko'ryapsizmi, tartib o'zgarishi natijani tubdan o'zgartiradi!