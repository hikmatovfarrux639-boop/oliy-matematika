---
title: "Nyuton binomi, Paskal uchburchagi va binomial koeffitsiyentlar"
module: "maktab-kursi"
order: 10
description: "Nyuton binomi formulasi, umumiy had (T_{k+1}) ni topish, Paskal uchburchagi xossalari va binomial koeffitsiyentlar yig'indilari."
---

Maktab kursida biz $(a + b)^2$ va $(a + b)^3$ qisqa ko'paytirish formulalaridan foydalanganmiz. Ammo oliy matematikada hosila formulasini keltirib chiqarishda ($(x + \Delta x)^n$), ehtimollar nazariyasida Bernulli sxemasini o'rganishda va kombinatorikada ixtiyoriy $n \in \mathbb{N}$ darajali ikkihad — **Nyuton binomi** yoyilmasini bilish talab etiladi.

---

## 1. Faktorial va guruhlashlar soni (Binomial koeffitsiyentlar)

**Faktorial:** $1$ dan $n$ gacha bo'lgan barcha natural sonlar ko'paytmasi $n!$ ($n$-faktorial) bilan belgilanadi:

$$n! = 1 \cdot 2 \cdot 3 \cdot \dots \cdot n, \qquad \text{qoida bo'yicha: } 0! = 1$$

Rekurrent xossasi: $n! = (n - 1)! \cdot n$.

**Binomial koeffitsiyent (kombinatsiyalar soni):** $n$ ta elementdan $k$ tadan tuzilgan guruhlashlar soni $C_n^k$ yoki $\binom{n}{k}$ ko'rinishida belgilanadi va quyidagi formula bilan hisoblanadi ($0 \le k \le n$):

$$\binom{n}{k} = C_n^k = \frac{n!}{k!(n - k)!} = \frac{n(n - 1)\dots(n - k + 1)}{k!}$$

Chetki qiymatlar:
$$\binom{n}{0} = \binom{n}{n} = 1, \qquad \binom{n}{1} = \binom{n}{n-1} = n, \qquad \binom{n}{2} = \frac{n(n - 1)}{2}$$

---

## 2. Paskal uchburchagi va uning xossalari

Binomial koeffitsiyentlarni faktoriallarsiz, ketma-ket qo'shish orqali topish imkonini beruvchi jadval **Paskal uchburchagi** deyiladi:

$$
\begin{array}{ccccccccccc}
n=0: & & & & & 1 & & & & & \\
n=1: & & & & 1 & & 1 & & & & \\
n=2: & & & 1 & & 2 & & 1 & & & \\
n=3: & & 1 & & 3 & & 3 & & 1 & & \\
n=4: & 1 & & 4 & & 6 & & 4 & & 1 & \\
n=5: & 1 & 5 & 10 & & 10 & & 5 & 1
\end{array}
$$

### Binomial koeffitsiyentlarning fundamental xossalari

1. **Simmetriklik xossasi:** Yoyilmaning boshidan va oxiridan teng uzoqlikda turgan binomial koeffitsiyentlar o'zaro teng:
   $$\binom{n}{k} = \binom{n}{n - k}$$
2. **Paskal ayniyati (rekurrent xossa):** Har bir qatordagi ichki son o'zidan yuqoridagi ikki qo'shni sonning yig'indisiga teng:
   $$\binom{n}{k} + \binom{n}{k + 1} = \binom{n + 1}{k + 1}$$

---

## 3. Nyuton binomi formulasi

Ixtiyoriy $a, b \in \mathbb{R}$ va $n \in \mathbb{N}$ uchun $(a + b)^n$ ikkihadning darajasi quyidagi **Nyuton binomi formulasi** bo'yicha yoyiladi:

$$(a + b)^n = \binom{n}{0}a^n + \binom{n}{1}a^{n-1}b + \binom{n}{2}a^{n-2}b^2 + \dots + \binom{n}{k}a^{n-k}b^k + \dots + \binom{n}{n}b^n$$

Yig'indi ($\Sigma$) belgisi yordamida qisqa yozilishi:

$$(a + b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^k$$

Ayirma uchun esa ishoralar almashinib keladi ($b$ o'rniga $-b$ qo'yiladi):

$$(a - b)^n = \sum_{k=0}^{n} (-1)^k \binom{n}{k} a^{n-k} b^k$$

### Yoyilmaning asosiy xususiyatlari:
- $(a + b)^n$ yoyilmada jami **$n + 1$ ta had** qatnashadi (chunki $k$ indeks $0$ dan $n$ gacha o'zgaradi).
- Har bir hadda $a$ ning darajasi $n$ dan $0$ gacha kamayib boradi, $b$ ning darajasi esa $0$ dan $n$ gacha ortib boradi.
- Har bir haddagi $a$ va $b$ daraja ko'rsatkichlarining yig'indisi o'zgarmas bo'lib, doimo $n$ ga teng: $(n - k) + k = n$.

---

## 4. Yoyilmaning umumiy hadi ($T_{k+1}$)

Amaliy masalalarda butun binomni yoyib o'tirmasdan, uning ma'lum bir hadini (masalan, $x^5$ qatnashgan hadni yoki $x$ ga bog'liq bo'lmagan ozod hadni) topish talab qilinadi.

> [!IMPORTANT]
> **Umumiy had formulasi:** Nyuton binomi yoyilmasidagi $(k + 1)$- tartib raqamli had $T_{k+1}$ quyidagi formula bilan topiladi:
>
> $$T_{k+1} = \binom{n}{k} a^{n-k} b^k \qquad (k = 0, 1, 2, \dots, n)$$
>
> Diqqat qiling: hadning tartib raqami $m = k + 1$ bo'lsa, binomial koeffitsiyentning yuqori indeksi undan bitta kichik ($k = m - 1$) bo'ladi! Masalan, $5$-had uchun $k = 4$ olinadi: $T_5 = \binom{n}{4} a^{n-4} b^4$.

---

## 5. Binomial koeffitsiyentlar yig'indilari

Nyuton binomi formulasida $a$ va $b$ o'rniga xususiy sonlarni qo'yib, muhim yig'indilarni keltirib chiqaramiz:

1. **Barcha binomial koeffitsiyentlar yig'indisi:** $(1 + x)^n$ yoyilmada $x = 1$ desak:
   $$\binom{n}{0} + \binom{n}{1} + \binom{n}{2} + \dots + \binom{n}{n} = (1 + 1)^n = 2^n$$
2. **Ishorasi almashinuvchi binomial koeffitsiyentlar yig'indisi:** $(1 + x)^n$ yoyilmada $x = -1$ desak:
   $$\binom{n}{0} - \binom{n}{1} + \binom{n}{2} - \binom{n}{3} + \dots + (-1)^n \binom{n}{n} = (1 - 1)^n = 0$$
3. **Juft va toq o'rindagi binomial koeffitsiyentlar yig'indisi:** Yuqoridagi ikki tenglikni qo'shish va ayirish orqali:
   $$\binom{n}{0} + \binom{n}{2} + \binom{n}{4} + \dots = \binom{n}{1} + \binom{n}{3} + \binom{n}{5} + \dots = 2^{n-1}$$

> [!NOTE]
> **Koeffitsiyent va Binomial koeffitsiyent farqi!**
> $(2x - 3y)^n$ yoyilmada:
> - **Binomial koeffitsiyentlar** faqat $\binom{n}{k}$ sonlaridir (ularning yig'indisi har doim $2^n$ ga teng).
> - **Ko'phad koeffitsiyentlari** esa o'zgaruvchilar oldidagi to'liq sonli ko'paytuvchilardir: $\binom{n}{k} 2^{n-k} (-3)^k$.
>
> Har qanday $P(x) = (ax + b)^n$ ko'phadning **barcha koeffitsiyentlari yig'indisini** topish uchun o'zgaruvchilar o'rniga $1$ qo'yiladi: $P(1) = (a + b)^n$.

---

## 6. Namuna misollar va yechish usullari

### 1-misol. $x$ ga bog'liq bo'lmagan (ozod) hadni topish
**Masala:** $\left(x^2 - \frac{2}{x}\right)^9$ binom yoyilmasining $x$ qatnashmagan hadini (ozod hadini) toping.

**Yechish:**
1. Bu yerda $n = 9$, $a = x^2$ va $b = -\frac{2}{x} = -2x^{-1}$.
2. Umumiy had formulasini yozamiz va darajalarni soddalashtiramiz:
   $$T_{k+1} = \binom{9}{k} (x^2)^{9-k} \left(-2x^{-1}\right)^k = \binom{9}{k} (-2)^k \cdot x^{18 - 2k} \cdot x^{-k} = \binom{9}{k} (-2)^k \cdot x^{18 - 3k}$$
3. Had $x$ ga bog'liq bo'lmasligi uchun $x$ ning daraja ko'rsatkichi nolga teng bo'lishi shart:
   $$18 - 3k = 0 \implies 3k = 18 \implies k = 6$$
4. Demak, ozod had $(6 + 1) = 7$-had ($T_7$) ekan. Uning qiymatini hisoblaymiz:
   $$T_7 = \binom{9}{6} (-2)^6 = \binom{9}{3} \cdot 64 = \frac{9 \cdot 8 \cdot 7}{1 \cdot 2 \cdot 3} \cdot 64 = 84 \cdot 64 = 5376$$

**Javob:** $5376$ ($7$-had).

---

### 2-misol. Binomial koeffitsiyentlar yig'indisi orqali $n$ ni topish
**Masala:** Agar $\left(\sqrt[3]{x} + \frac{1}{\sqrt{x}}\right)^n$ yoyilmasining barcha binomial koeffitsiyentlari yig'indisi $256$ ga teng bo'lsa, yoyilmaning $x$ ning birinchi darajasi ($x^1$) qatnashgan hadini toping.

**Yechish:**
1. Binomial koeffitsiyentlar yig'indisi $2^n$ ga teng:
   $$2^n = 256 = 2^8 \implies n = 8$$
2. $a = x^{1/3}$ va $b = x^{-1/2}$ ekanligini hisobga olib, $n = 8$ uchun umumiy hadni yozamiz:
   $$T_{k+1} = \binom{8}{k} \left(x^{1/3}\right)^{8-k} \left(x^{-1/2}\right)^k = \binom{8}{k} x^{\frac{8-k}{3} - \frac{k}{2}}$$
3. Shartga ko'ra $x$ ning darajasi $1$ ga teng bo'lishi kerak:
   $$\frac{8 - k}{3} - \frac{k}{2} = 1 \implies 2(8 - k) - 3k = 6 \implies 16 - 5k = 6 \implies 5k = 10 \implies k = 2$$
4. $k = 2$ ni qo'yib, $3$-hadni topamiz:
   $$T_3 = \binom{8}{2} x^1 = \frac{8 \cdot 7}{2} x = 28x$$

**Javob:** $28x$.

---

### 3-misol. Ratsional hadlar sonini aniqlash
**Masala:** $\left(\sqrt{3} + \sqrt[4]{5}\right)^{100}$ yoyilmasida nechta ratsional had mavjud?

**Yechish:**
Umumiy hadni yozamiz ($k \in \{0, 1, \dots, 100\}$):
$$T_{k+1} = \binom{100}{k} \left(3^{1/2}\right)^{100-k} \left(5^{1/4}\right)^k = \binom{100}{k} \cdot 3^{\frac{100-k}{2}} \cdot 5^{\frac{k}{4}}$$
Ushbu had ratsional (butun) son bo'lishi uchun $3$ va $5$ ning daraja ko'rsatkichlari butun son bo'lishi zarur va yetarlidir:
- $\frac{k}{4} \in \mathbb{Z} \implies k$ soni $4$ ga karrali bo'lishi kerak ($k = 4m$);
- Agar $k$ soni $4$ ga karrali bo'lsa, u juft son bo'ladi va $\frac{100 - k}{2} = 50 - 2m$ ham avtomatik ravishda butun son bo'ladi!

$0 \le k \le 100$ oraliqda $4$ ga karrali sonlar: $k \in \{0, 4, 8, \dots, 100\}$.
Ularning soni: $m = 0, 1, 2, \dots, 25$, ya'ni jami $25 - 0 + 1 = 26$ ta.

**Javob:** $26$ ta ratsional had bor.

---

## 7. O'z-o'zini tekshirish savollari

1. $(3x - 2)^7$ yoyilmasining **binomial koeffitsiyentlari yig'indisi** nechaga teng? Shu yoyilmaning **ko'phad koeffitsiyentlari yig'indisi**-chi?
2. Nima uchun $n$ juft bo'lganda Nyuton binomi yoyilmasida bitta eng katta binomial koeffitsiyent ($\binom{n}{n/2}$), $n$ toq bo'lganda esa ikkita o'zaro teng eng katta binomial koeffitsiyent mavjud bo'ladi?
3. $\binom{10}{3}$ va $\binom{10}{7}$ ni hisoblamasdan turib ularning o'zaro tengligini qaysi xossa bilan tushuntirish mumkin?

---

## 8. Mustaqil yechish uchun masalalar

1. **1-masala:** $\left(2x - \frac{1}{x^2}\right)^6$ yoyilmasining o'rtadagi hadini toping.
2. **2-masala:** $(1 + 2x - x^2)^{10}$ ko'phadni darajalar bo'yicha yoyib chiqqanda barcha koeffitsiyentlarining yig'indisi, shuningdek faqat juft darajali hadlari oldidagi koeffitsiyentlar yig'indisi nechaga teng bo'ladi?
3. **3-masala:** Tenglamani natural sonlarda yeching: $\binom{n}{1} + \binom{n}{2} + \binom{n}{3} + \dots + \binom{n}{n} = 1023$.
4. **4-masala:** $\left(\sqrt{x} + \frac{2}{\sqrt[4]{x}}\right)^n$ yoyilmasida uchinchi hadning binomial koeffitsiyenti ikkinchi hadning binomial koeffitsiyentidan $4$ marta katta bo'lsa, yoyilmaning $x$ qatnashmagan hadini toping (yoki mavjud emasligini ko'rsating) va $x^2$ qatnashgan hadini toping.

---

### Javoblar va ko'rsatmalar

- **O'z-o'zini tekshirishga izoh:** 1) Binomial koeffitsiyentlar yig'indisi: $2^7 = 128$; ko'phad koeffitsiyentlari yig'indisi ($x = 1$ da): $(3 \cdot 1 - 2)^7 = 1^7 = 1$.
- **1-masala:** $T_4 = -160x^{-3} = -\frac{160}{x^3}$. *(Ko'rsatma: $n = 6$ da $7$ ta had bor, o'rtadagi had $4$-had, ya'ni $k = 3$).*
- **2-masala:** Barcha koeffitsiyentlar yig'indisi: $P(1) = (1 + 2 - 1)^{10} = 2^{10} = 1024$. Juft darajali koeffitsiyentlar yig'indisi: $\frac{P(1) + P(-1)}{2} = \frac{2^{10} + (-2)^{10}}{2} = 1024$.
- **3-masala:** $n = 10$. *(Ko'rsatma: Chap tarafga $\binom{n}{0} = 1$ yetishmayapti, demak $2^n - 1 = 1023 \implies 2^n = 1024$).*
- **4-masala:** $\binom{n}{2} = 4\binom{n}{1} \implies \frac{n(n-1)}{2} = 4n \implies n = 9$. $x^2$ qatnashgan had ($k = 4$ da): $T_5 = \binom{9}{4} \cdot 2^4 x^2 = 126 \cdot 16 x^2 = 2016x^2$. ($x$ qatnashmagan had uchun $\frac{9-k}{2} - \frac{k}{4} = 0 \implies 3k = 18 \implies k = 6$, ozod had: $T_7 = \binom{9}{6} \cdot 2^6 = 84 \cdot 64 = 5376$).
