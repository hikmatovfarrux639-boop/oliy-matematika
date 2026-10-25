---
title: "Asosiy taqsimot turlari: Tekis, Ko'rsatkichli, Geometrik va Gipergeometrik"
module: "ehtimollar-nazariyasi"
order: 8
description: "Diskret va uzluksiz tasodifiy miqdorlarning klassik taqsimotlari, ularning zichlik va taqsimot funksiyalari, matematik kutilma, dispersiya hamda eksponensial taqsimotning xotirasizlik xossasi."
---

## Kirish: Tabiatdagi tasodiflar tartibi

Biz o'tgan darslarda binomial (Bernulli) va normal (Gauss) taqsimotlarini ko'rib chiqqan edik. Ammo hayot faqat ular bilan cheklanmaydi:
- Avtobus bekatida kutish vaqti qanday taqsimlanadi? — **Tekis taqsimot**;
- Kompyuter serveri yoki lampochkaning kuyib qolmasdan ishlash muddati-chi? — **Ko'rsatkichli (eksponensial) taqsimot**;
- Mergan nishonga tekkizguncha necha marta o'q uzadi? — **Geometrik taqsimot**;
- Lotereya biletlaridan yutuqlilarni tanlab olish-chi? — **Gipergeometrik taqsimot**.

Ushbu darsda biz amaliyotda eng ko'p ishlatiladigan ana shu 4 ta poydevor taqsimotni o'rganamiz.

---

## 1. Diskret taqsimotlar

### A. Geometrik taqsimot
Birinchi muvaffaqiyatga erishguncha o'tkazilgan mustaqil sinovlar soni $X$bo'lsin. Har bir sinovda muvaffaqiyat ehtimoli$p$, muvaffaqiyatsizlik $q = 1 - p$.
$$
P(X = k) = q^{k-1} p \quad (k = 1, 2, 3, \dots)
$$
- **Matematik kutilma:** $M(X) = \frac{1}{p}$(masalan,$p = 0.2$bo'lsa, o'rtacha$1/0.2 = 5$ ta urinish kerak bo'ladi).
- **Dispersiya:** $D(X) = \frac{q}{p^2} = \frac{1-p}{p^2}$.

### B. Gipergeometrik taqsimot (Qaytarsiz tanlash)
Jami $N$ta buyum bor, ulardan$M$tasi yaroqli (yoki oq shar), qolgan$N - M$ tasi esa yaroqsiz (qora shar).
Tavakkaliga $n$ta buyum qaytarmasdan olindi. Ular ichidagi yaroqli buyumlar soni$X$ ning taqsimoti:
$$
P(X = k) = \frac{C_M^k \cdot C_{N-M}^{n-k}}{C_N^n} \quad (\max(0, n-(N-M)) \le k \le \min(n, M))
$$
- **Matematik kutilma:** $M(X) = n \cdot \frac{M}{N}$- **Dispersiya:**$D(X) = n \frac{M}{N} \left(1 - \frac{M}{N}\right) \frac{N - n}{N - 1}$

---

## 2. Uzluksiz taqsimotlar

### A. Tekis taqsimot $U(a, b)$Agar tasodifiy miqdor$[a; b]$ oraliqda yotib, uning ixtiyoriy bir xil uzunlikdagi oraliqqa tushish ehtimoli teng bo'lsa:

```
          Zichlik funksiyasi f(x)             Taqsimot funksiyasi F(x)
       f(x) ^                               F(x) ^
            |                                  1 |               /--------
    1/(b-a) |-------+                          |              /
            |       |                          |             /
            |       |                          |            /
          0 +-------+--------> x               0 +---------+------------> x
            a       b                                      a   b
```

- **Ehtimollik zichligi:**
$$
f(x) = \begin{cases} \frac{1}{b-a}, & x \in [a; b] \\ 0, & x \notin [a; b] \end{cases}
$$
- **Taqsimot funksiyasi:**
$$
F(x) = \begin{cases} 0, & x < a \\ \frac{x-a}{b-a}, & a \le x \le b \\ 1, & x > b \end{cases}
$$
- **Sonli xarakteristikalari:**
$$
M(X) = \frac{a+b}{2}, \qquad D(X) = \frac{(b-a)^2}{12}, \qquad \sigma(X) = \frac{b-a}{2\sqrt{3}}
$$

---

### B. Ko'rsatkichli (Eksponensial) taqsimot $\operatorname{Exp}(\lambda)$
Uskunalarning ishdan chiqish vaqti, qo'ng'iroqlar orasidagi vaqt va radioaktiv yemirilish jarayonlarini ifodalaydi ($\lambda > 0$ — intensivlik parametri):

- **Zichlik funksiyasi:**
$$
f(x) = \begin{cases} \lambda e^{-\lambda x}, & x \ge 0 \\ 0, & x < 0 \end{cases}
$$
- **Taqsimot funksiyasi:**
$$
F(x) = P(X < x) = \begin{cases} 1 - e^{-\lambda x}, & x \ge 0 \\ 0, & x < 0 \end{cases}
$$
- **Sonli xarakteristikalari:**
$$
M(X) = \frac{1}{\lambda}, \qquad D(X) = \frac{1}{\lambda^2}, \qquad \sigma(X) = \frac{1}{\lambda}
$$
> [!NOTE] Ajoyib tenglik:
> Ko'rsatkichli taqsimotda matematik kutilma va o'rtacha kvadratik chetlanish **har doim bir-biriga tengdir**: $M(X) = \sigma(X) = \frac{1}{\lambda}$!

### Ko'rsatkichli taqsimotning "Xotirasizlik" (Memorylessness) xossasi:
Agar qurilma $t$vaqt davomida buzilmasdan ishlagan bo'lsa, uning yana kamida$s$vaqt ishlash ehtimoli yangi qurilmaning$s$ vaqt ishlash ehtimoliga teng:
$$
P(X > t + s \mid X > t) = P(X > s)
$$
*(Fizik ma'nosi: eski lampochka yoki atom uning qancha vaqt yashaganini "eslab qolmaydi").*

---

## 3. Asosiy taqsimotlarning umumlashtiruvchi qiyosiy jadvali

| Taqsimot nomi | Turi | Parametrlar | Matematik kutilma $M(X)$| Dispersiya$D(X)$ |
| :--- | :--- | :--- | :--- | :--- |
| **Geometrik** | Diskret | $p \in (0; 1)$|$\frac{1}{p}$|$\frac{1-p}{p^2}$ |
| **Gipergeometrik** | Diskret | $N, M, n$|$n \frac{M}{N}$|$n \frac{M}{N}\left(1-\frac{M}{N}\right)\frac{N-n}{N-1}$ |
| **Tekis $U(a, b)$** | Uzluksiz | $a, b \in \mathbb{R}$|$\frac{a+b}{2}$|$\frac{(b-a)^2}{12}$ |
| **Ko'rsatkichli $\operatorname{Exp}(\lambda)$** | Uzluksiz | $\lambda > 0$|$\frac{1}{\lambda}$|$\frac{1}{\lambda^2}$ |

---

## 4. Masalalarni tahlil qilish

### 1-masala: Avtobus kutish (Tekis taqsimot)
Avtobus bekatga har 10 daqiqada qat'iy jadval asosida keladi. Yo'lovchi bekatga tasodifiy vaqtda yetib keldi. Yo'lovchining avtobusni:
1) 4 daqiqadan ko'p kutmaslik;
2) 3 daqiqadan 7 daqiqagacha kutish ehtimolini toping.

**Yechish:**
Kutish vaqti $X \sim U(0, 10)$.
$a = 0, b = 10 \implies f(x) = \frac{1}{10-0} = 0.1$ ($0 \le x \le 10$).
1. 4 daqiqadan ko'p kutmaslik ($0 \le X \le 4$):
$$
P(0 \le X \le 4) = \frac{4 - 0}{10 - 0} = \frac{4}{10} = 0.4 \quad (40\%)
$$
2. 3 dan 7 daqiqagacha kutish ($3 \le X \le 7$):
$$
P(3 \le X \le 7) = \frac{7 - 3}{10 - 0} = \frac{4}{10} = 0.4 \quad (40\%)
$$
Kutilayotgan o'rtacha kutish vaqti: $M(X) = \frac{0 + 10}{2} = 5$ daqiqa.

---

### 2-masala: Serverning ishlash vaqti (Ko'rsatkichli taqsimot)
Serverning uzluksiz ishlash vaqti o'rtacha $2000$soat bo'lgan ko'rsatkichli qonunga bo'ysunadi. Serverning kamida$3000$ soat buzilmasdan ishlash ehtimolini toping.

**Yechish:**
O'rtacha ishlash vaqti $M(X) = \frac{1}{\lambda} = 2000$soat$\implies \lambda = \frac{1}{2000} = 0.0005 \text{ soat}^{-1}$.
Buzilmasdan ishlash ehtimoli:
$$
P(X \ge 3000) = 1 - F(3000) = 1 - (1 - e^{-\lambda \cdot 3000}) = e^{-\lambda \cdot 3000}
$$
$$
P(X \ge 3000) = e^{-\frac{3000}{2000}} = e^{-1.5} \approx 0.2231 \quad (22.3\%)
$$

**Javob:** $P \approx 22.3\%$.

---

> [!WARNING] Imtihondagi tuzoqlar va ko'p uchraydigan xatoliklar
> 1. **Tekis taqsimot dispersiyasidagi maxraj:** $D(X) = \frac{(b-a)^2}{12}$dagi$12$sonini talabalar ko'pincha$2$yoki$4$bilan adashtirishadi. Bu$12$soni$\int_{-1/2}^{1/2} x^2 dx = \left[\frac{x^3}{3}\right] = \frac{1}{12}$ integralidan kelib chiqadi.
> 2. **Ko'rsatkichli taqsimotda $P(X \ge x)$va$P(X < x)$:** Taqsimot funksiyasi $F(x) = P(X < x) = 1 - e^{-\lambda x}$hodisaning "buzilish" ehtimolidir. Buzilmasdan ishlash ehtimoli esa$P(X \ge x) = e^{-\lambda x}$ bo'ladi!

---

## Mustaqil yechish uchun mashqlar

### 1-mashq
O'yin soqqasi birinchi marta $6$ ochko tushguncha tashlanadi. Buning uchun roppa-rosa 3 marta tashlash kerak bo'lish ehtimolini toping.

<details>
<summary>👉 Yechimni tekshirish</summary>

**Yechish:**
Geometrik taqsimot: $p = \frac{1}{6}, q = 1 - \frac{1}{6} = \frac{5}{6}$.
$k = 3$ urinish:
$$
P(X = 3) = q^2 p = \left(\frac{5}{6}\right)^2 \left(\frac{1}{6}\right) = \frac{25}{36} \cdot \frac{1}{6} = \frac{25}{216} \approx 0.1157
$$

**Javob:** $P = \frac{25}{216} \approx 11.6\%$.

</details>

### 2-mashq
10 ta detaldan iborat partiyada 4 ta standart bo'lmagan detal bor. Tavakkaliga 3 ta detal olinadi. Olingan detallar ichida standart bo'lmagan detallar sonining matematik kutilmasini toping.

<details>
<summary>👉 Yechimni tekshirish</summary>

**Yechish:**
Gipergeometrik taqsimot: $N = 10, M = 4, n = 3$.
Matematik kutilma formulasi:
$$
M(X) = n \cdot \frac{M}{N} = 3 \cdot \frac{4}{10} = \frac{12}{10} = 1.2
$$

**Javob:** $M(X) = 1.2$.

</details>
