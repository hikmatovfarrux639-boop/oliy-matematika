---
title: "Arifmetik va geometrik progressiyalar, cheksiz kamayuvchi geometrik progressiya"
module: "maktab-kursi"
order: 6
description: "Arifmetik va geometrik progressiyalarning n-hadi, dastlabki n ta hadi yig'indisi, xarakteristik xossalari va cheksiz kamayuvchi geometrik progressiya yig'indisi."
---

Matematik analiz va oliy matematikaning qatorlar nazariyasiga o'tishdan oldin sonli ketma-ketliklarning eng muhim ikki turi — **arifmetik** va **geometrik progressiyalar**ni chuqur o'zlashtirish zarur. Ushbu mavzu kelajakda cheksiz qatorlar yaqinlashishi, darajali qatorlar va moliyaviy matematika masalalarida bevosita qo'llaniladi.

---

## 1. Sonli ketma-ketlik tushunchasi

Har bir $n \in \mathbb{N}$ natural songa ma'lum bir qonuniyat bo'yicha yagona $a_n$ haqiqiy son mos qo'yilgan bo'lsa, $a_1, a_2, a_3, \dots, a_n, \dots$ ko'rinishdagi cheksiz to'plam **sonli ketma-ketlik** deyiladi va qisqacha $(a_n)$ kabi belgilanadi.
- $a_1$ — ketma-ketlikning birinchi hadi,
- $a_n$ — ketma-ketlikning **$n$-hadi** (yoki umumiy hadi).

Ketma-ketlik odatda ikki xil usulda beriladi:
1. **Analitik (umumiy had formulasi orqali):** masalan, $a_n = 3n - 1$.
2. **Rekurrent formula orqali:** birinchi (yoki bir nechta dastlabki) hadlari va keyingi hadlarini oldingilari orqali hisoblash qoidasi beriladi. Masalan: $a_1 = 2, \; a_{n+1} = a_n + 4$.

---

## 2. Arifmetik progressiya

**Ta'rif:** Ikkinchi hadidan boshlab har bir hadi o'zidan oldingi hadga ayni bir o'zgarmas $d$ sonini qo'shishdan hosil bo'ladigan sonli ketma-ketlik **arifmetik progressiya** deyiladi:

$$a_{n+1} = a_n + d \quad (n \in \mathbb{N})$$

Bu yerda $d$ soni arifmetik progressiyaning **ayirmasi** deyiladi:

$$d = a_2 - a_1 = a_3 - a_2 = \dots = a_{n+1} - a_n$$

- Agar $d > 0$ bo'lsa, progressiya **o'suvchi**;
- Agar $d < 0$ bo'lsa, progressiya **kamayuvchi**;
- Agar $d = 0$ bo'lsa, progressiya **o'zgarmas (doimiy)** bo'ladi.

### 2.1. Arifmetik progressiyaning $n$-hadi formulasi

Rekurrent bog'lanishdan ketma-ket foydalansak:
- $a_2 = a_1 + d$
- $a_3 = a_2 + d = a_1 + 2d$
- $\dots$
- **$n$-had formulasi:**

$$a_n = a_1 + (n - 1)d$$

Ixtiyoriy $k$-had orqali ifodalash formulasi ($n, k \in \mathbb{N}$):

$$a_n = a_k + (n - k)d \implies d = \frac{a_n - a_k}{n - k}$$

### 2.2. Xarakteristik xossasi va o'rta arifmetik qiymat

> [!IMPORTANT]
> **Xarakteristik xossa:** Sonli ketma-ketlik arifmetik progressiya bo'lishi uchun uning ikkinchi hadidan boshlab har bir hadi o'ziga qo'shni bo'lgan hadlarning **o'rta arifmetigiga** teng bo'lishi zarur va yetarlidir:
>
> $$ a_n = \frac{a_{n-1} + a_{n+1}}{2}, \quad n \ge 2 $$

Umumiyroq holda, $n - k \ge 1$ uchun:

$$a_n = \frac{a_{n-k} + a_{n+k}}{2}$$

**Teng uzoqlikdagi hadlar xossasi:** Agar natural indekslar uchun $m + k = p + q$ tenglik bajarilsa, u holda:

$$a_m + a_k = a_p + a_q$$

Xususan, chekli arifmetik progressiyada boshidan va oxiridan teng uzoqlikda turgan hadlar yig'indisi o'zgarmasdir:

$$a_1 + a_n = a_2 + a_{n-1} = a_3 + a_{n-2} = \dots$$

### 2.3. Dastlabki $n$ ta hadi yig'indisi ($S_n$)

Arifmetik progressiyaning dastlabki $n$ ta hadi yig'indisi $S_n = a_1 + a_2 + \dots + a_n$ quyidagi ikki asosiy formula orqali hisoblanadi:

$$S_n = \frac{a_1 + a_n}{2} \cdot n \quad \text{yoki} \quad S_n = \frac{2a_1 + (n - 1)d}{2} \cdot n$$

> [!TIP]
> **Foydali bog'lanish:** Har qanday ketma-ketlikda $n$-hadni qisman yig'indilar orqali topish mumkin:
>
> $$ a_1 = S_1, \qquad a_n = S_n - S_{n-1} \quad (n \ge 2)$$
>
> Arifmetik progressiya uchun $S_n$ har doim $n$ ga nisbatan ozod hadsiz kvadrat uchhad ko'rinishida bo'ladi: $S_n = An^2 + Bn$, bunda $d = 2A$ va $a_1 = A + B$.

---

## 3. Geometrik progressiya

**Ta'rif:** Birinchi hadi noldan farqli ($b_1 \neq 0$) va ikkinchi hadidan boshlab har bir hadi o'zidan oldingi hadni noldan farqli ayni bir o'zgarmas $q$ ($q \neq 0$) songa ko'paytirishdan hosil bo'ladigan ketma-ketlik **geometrik progressiya** deyiladi:

$$b_{n+1} = b_n \cdot q \quad (n \in \mathbb{N})$$

Bu yerda $q$ soni geometrik progressiyaning **maxraji** deyiladi:

$$q = \frac{b_2}{b_1} = \frac{b_3}{b_2} = \dots = \frac{b_{n+1}}{b_n}$$

### 3.1. Geometrik progressiyaning $n$-hadi formulasi

Birinchi had va maxraj orqali umumiy had formulasi:

$$b_n = b_1 \cdot q^{n-1}$$

Ixtiyoriy $k$-had orqali ifodalash formulasi:

$$b_n = b_k \cdot q^{n-k} \implies q^{n-k} = \frac{b_n}{b_k}$$

### 3.2. Xarakteristik xossasi va o'rta geometrik qiymat

> [!IMPORTANT]
> **Xarakteristik xossa:** Noldan farqli hadli ketma-ketlik geometrik progressiya bo'lishi uchun uning ikkinchi hadidan boshlab har bir hadining kvadrati o'ziga qo'shni hadlar ko'paytmasiga teng bo'lishi zarur va yetarlidir:
>
> $$ b_n^2 = b_{n-1} \cdot b_{n+1} \implies |b_n| = \sqrt{b_{n-1} \cdot b_{n+1}}, \quad n \ge 2 $$

Agar progressiyaning barcha hadlari musbat bo'lsa, har bir had qo'shni hadlarning **o'rta geometrigiga** teng: $b_n = \sqrt{b_{n-1} \cdot b_{n+1}}$.

**Indekslar xossasi:** Agar $m + k = p + r$ bo'lsa, u holda:

$$b_m \cdot b_k = b_p \cdot b_r$$

### 3.3. Dastlabki $n$ ta hadi yig'indisi ($S_n$)

Agar $q \neq 1$ bo'lsa, geometrik progressiyaning dastlabki $n$ ta hadi yig'indisi:

$$S_n = \frac{b_1(1 - q^n)}{1 - q} = \frac{b_1(q^n - 1)}{q - 1} = \frac{b_n q - b_1}{q - 1}$$

Agar $q = 1$ bo'lsa, barcha hadlar $b_1$ ga teng bo'lib, $S_n = n \cdot b_1$ bo'ladi.

---

## 4. Cheksiz kamayuvchi geometrik progressiya

Maxraji modul jihatdan birdan kichik bo'lgan ($|q| < 1$, ya'ni $-1 < q < 1, \; q \neq 0$) cheksiz geometrik progressiya **cheksiz kamayuvchi geometrik progressiya** deyiladi.

Bunday progressiyada $n \to \infty$ da $q^n \to 0$ bo'lgani sababli, dastlabki $n$ ta had yig'indisi $S_n$ chekli limitga intiladi:

$$S = \lim_{n \to \infty} S_n = \lim_{n \to \infty} \frac{b_1(1 - q^n)}{1 - q} = \frac{b_1}{1 - q}$$

> [!NOTE]
> **Cheksiz kamayuvchi geometrik progressiya yig'indisi formulasi:**
>
> $$ S = \frac{b_1}{1 - q} \quad (|q| < 1)$$

### 4.1. Davriy o'nli kasrlarni oddiy kasrga aylantirish

Cheksiz davriy o'nli kasrlar cheksiz kamayuvchi geometrik progressiya yig'indisi yordamida oddiy kasrga o'tkaziladi.
Masalan, $0,(36) = 0,363636\dots$ ni yozib olamiz:

$$0,(36) = 0,36 + 0,0036 + 0,000036 + \dots$$

Bu yerda $b_1 = 0,36 = \frac{36}{100}$ va $q = 0,01 = \frac{1}{100}$. Formula bo'yicha:

$$S = \frac{0,36}{1 - 0,01} = \frac{0,36}{0,99} = \frac{36}{99} = \frac{4}{11}$$

---

## 5. Namuna misollar va yechish usullari

### 1-misol. Arifmetik progressiya parametrlarini topish
**Masala:** Arifmetik progressiyada $a_3 + a_7 = 28$ va $a_2 \cdot a_8 = 160$ bo'lsa, o'suvchi progressiyaning birinchi hadini va ayirmasini toping.

**Yechish:**
1. Indekslar yig'indisiga e'tibor beramiz: $3 + 7 = 2 + 8 = 10$. Demak, xossaga ko'ra:
   $$a_2 + a_8 = a_3 + a_7 = 28$$
2. Bizda $a_2$ va $a_8$ uchun Vieta teoremasiga mos sistema hosil bo'ldi:
   $$\begin{cases} a_2 + a_8 = 28 \\ a_2 \cdot a_8 = 160 \end{cases}$$
3. Progressiya o'suvchi ($d > 0$) bo'lgani uchun $a_2 < a_8$. Tenglamalar sistemasidan $a_2 = 8$ va $a_8 = 20$ ekanini topamiz.
4. Endi ayirmani hisoblaymiz:
   $$d = \frac{a_8 - a_2}{8 - 2} = \frac{20 - 8}{6} = \frac{12}{6} = 2$$
5. Birinchi hadni topamiz:
   $$a_1 = a_2 - d = 8 - 2 = 6$$

**Javob:** $a_1 = 6, \; d = 2$.

---

### 2-misol. Aralash progressiyalar masalasi
**Masala:** Yig'indisi $26$ ga teng bo'lgan uchta son geometrik progressiya tashkil qiladi. Agar bu sonlarga mos ravishda $1, 6$ va $3$ sonlari qo'shilsa, hosil bo'lgan sonlar arifmetik progressiya tashkil qiladi. Shu sonlarni toping.

**Yechish:**
1. Izlanyotgan sonlar $b_1, \; b_1 q, \; b_1 q^2$ bo'lsin. Shartga ko'ra:
   $$b_1(1 + q + q^2) = 26$$
2. Ularga $1, 6, 3$ qo'shilganda hosil bo'lgan sonlar: $a_1 = b_1 + 1$, $a_2 = b_1 q + 6$, $a_3 = b_1 q^2 + 3$.
3. Arifmetik progressiyaning xarakteristik xossasi ($2a_2 = a_1 + a_3$) ni qo'llaymiz:
   $$2(b_1 q + 6) = (b_1 + 1) + (b_1 q^2 + 3) \implies b_1(1 - 2q + q^2) = 8$$
4. Birinchi tenglamani ikkinchi tenglamaga hadlab bo'lamiz ($b_1 \neq 0$):
   $$\frac{1 + q + q^2}{1 - 2q + q^2} = \frac{26}{8} = \frac{13}{4}$$
   $$4(1 + q + q^2) = 13(1 - 2q + q^2) \implies 9q^2 - 30q + 9 = 0 \implies 3q^2 - 10q + 3 = 0$$
5. Kvadrat tenglama ildizlari: $q_1 = 3$ va $q_2 = \frac{1}{3}$.
   - Agar $q = 3$ bo'lsa, $b_1(1 + 3 + 9) = 26 \implies b_1 = 2$. Sonlar: $2, 6, 18$.
   - Agar $q = \frac{1}{3}$ bo'lsa, $b_1 = 18$. Sonlar: $18, 6, 2$.

**Javob:** $(2; 6; 18)$ yoki $(18; 6; 2)$.

---

### 3-misol. Cheksiz kamayuvchi geometrik progressiya tenglamasi
**Masala:** $|x| < 1$ shartni qanoatlantiruvchi $x$ uchun tenglamani yeching:
$$1 + 2x + 4x^2 + 8x^3 + \dots = \frac{3}{5} \quad \left(|x| < \frac{1}{2}\right)$$

**Yechish:**
Chap tarafda $b_1 = 1$ va maxraji $q = 2x$ ($|2x| < 1$) bo'lgan cheksiz kamayuvchi geometrik progressiya turibdi. Yig'indi formulasini qo'llaymiz:
$$\frac{1}{1 - 2x} = \frac{3}{5} \implies 3(1 - 2x) = 5 \implies 3 - 6x = 5 \implies 6x = -2 \implies x = -\frac{1}{3}$$
Tekshirish: $|x| = \left|-\frac{1}{3}\right| = \frac{1}{3} < \frac{1}{2}$ shart bajariladi.

**Javob:** $x = -\frac{1}{3}$.

---

## 6. O'z-o'zini tekshirish savollari

1. Ketma-ketlikning dastlabki $n$ ta hadi yig'indisi $S_n = 3n^2 - 2n$ formula bilan berilgan bo'lsa, uning $a_5$ hadini qanday qilib eng qisqa yo'l bilan topish mumkin?
2. Nima sababdan cheksiz geometrik progressiya yig'indisi formulasi faqat $|q| < 1$ bo'lgandagina o'rinli? Agar $q = -1$ bo'lsa nima sodir bo'ladi?
3. Ham arifmetik, ham geometrik progressiya bo'la oladigan ketma-ketlik mavjudmi? Mavjud bo'lsa, unga misol keltiring.

---

## 7. Mustaqil yechish uchun masalalar

1. **1-masala:** Arifmetik progressiyada $a_4 + a_8 + a_{12} + a_{16} = 224$ bo'lsa, uning dastlabki $19$ ta hadi yig'indisi $S_{19}$ ni toping.
2. **2-masala:** Geometrik progressiyaning dastlabki uchta hadi yig'indisi $13$ ga, ularning kvadratlari yig'indisi esa $91$ ga teng. Progressiyaning birinchi hadini va maxrajini toping.
3. **3-masala:** $2,3(18) = 2,3181818\dots$ aralash davriy o'nli kasrni qisqarmas oddiy kasr ko'rinishida yozing.
4. **4-masala:** Cheksiz kamayuvchi geometrik progressiyaning yig'indisi $4$ ga, hadlari kublarining yig'indisi esa $192$ ga teng. Shu progressiyaning ikkinchi hadini toping.

---

### Javoblar va ko'rsatmalar

- **O'z-o'zini tekshirishga izoh:** 1) $a_5 = S_5 - S_4 = (75 - 10) - (48 - 8) = 65 - 40 = 25$. 3) Ha, noldan farqli o'zgarmas ketma-ketlik ($c, c, c, \dots$, bunda $d = 0$ va $q = 1$).
- **1-masala:** $1064$. *(Ko'rsatma: $a_4 + a_{16} = a_8 + a_{12} = 2a_{10} \implies 4a_{10} = 224 \implies a_{10} = 56$. So'ngra $S_{19} = 19 \cdot a_{10}$.)*
- **2-masala:** $(b_1 = 1, q = 3)$ yoki $(b_1 = 9, q = \frac{1}{3})$. *(Ko'rsatma: $b_1^2(1 + q^2 + q^4) = b_1^2(1 - q + q^2)(1 + q + q^2)$ ayniyatdan foydalaning.)*
- **3-masala:** $\frac{51}{22}$ yoki $2\frac{7}{22}$.
- **4-masala:** $b_2 = -3$. *(Ko'rsatma: $b_1 = 4(1 - q)$ va kublar uchun $\frac{b_1^3}{1 - q^3} = 192$ tenglamalar sistemasini tuzing; $q = -\frac{1}{2}, \; b_1 = 6 \implies b_2 = 6 \cdot \left(-\frac{1}{2}\right) = -3$ chiqadi.)*
