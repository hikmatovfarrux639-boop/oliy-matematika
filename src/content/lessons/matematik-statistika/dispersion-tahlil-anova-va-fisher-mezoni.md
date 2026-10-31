---
title: "Dispersiyalar tahlili (ANOVA) va Fisherning F-mezoni"
module: "matematik-statistika"
order: 7
description: "Bir omilli dispersion tahlil (One-Way ANOVA), guruhlararo va guruh ichidagi dispersiyalar, Fisher F-statistikasi va bir nechta o'rtachalarni solishtirish."
---

Matematik statistikada ikkita bosh to'plamning o'rtacha qiymatlarini solishtirish uchun Styudentning $t$-mezoni qo'llaniladi. Biroq amaliyotda ko'pincha **$k \ge 3$ ta guruhning o'rtacha qiymatlarini bir vaqtda solishtirish** (masalan, 4 xil o'g'it turining hosildorlikka ta'siri, 3 xil dori vositasining samaradorligi yoki 5 ta ishlab chiqarish liniyasining aniqligi) talab etiladi. Bunday masalalarni ingliz statistigi Ronald Fisher tomonidan yaratilgan **dispersion tahlil (ANOVA — Analysis of Variance)** usuli hal qiladi.

---

## 1. Nima uchun juft-juft $t$-test emas, balki ANOVA ishlatiladi?

Agar bizda $k = 5$ ta guruh bo'lsa, ularni juft-juft solishtirish uchun $C_5^2 = 10$ marta Styudent $t$-mezonini qo'llashga to'g'ri keladi. Har bir testda $\alpha = 0.05$ ahamiyatlilik darajasi olinsa, kamida bitta testda to'g'ri $H_0$ gipotezani xato ravishda rad etish (1-tur xatolik) ehtimoli keskin oshib ketadi:
$$
P(\text{kamida bitta xato}) = 1 - (1 - 0.05)^{10} \approx 0.401 \quad (40.1\%)
$$
**Bir omilli dispersion tahlil (One-Way ANOVA)** esa barcha $k$ ta o'rtachaning tengligi haqidagi yagona nol gipotezani:
$$
H_0: \mu_1 = \mu_2 = \dots = \mu_k
$$
muqobil gipoteza $H_1: \text{"kamida ikkita guruh o'rtachasi bir-biridan farq qiladi"}$ ($\exists i \neq j: \mu_i \neq \mu_j$) ga qarshi yagona Fisher $F$-mezoni yordamida $\alpha$ aniqlikda tekshiradi.

> [!NOTE]
> **ANOVA qo'llanilishining 3 ta asosiy sharti:**
> 1. Har bir guruhdagi kuzatuvlar normal taqsimotga ega bo'lishi kerak: $X_{ij} \sim N(\mu_i, \sigma^2)$.
> 2. Guruhlardagi bosh dispersiyalar o'zaro teng bo'lishi (gomoskedastiklik sharti): $\sigma_1^2 = \sigma_2^2 = \dots = \sigma_k^2 = \sigma^2$.
> 3. Barcha tanlanmalar bir-biridan mustaqil ravishda olingan bo'lishi lozim.

---

## 2. Kvadratlar yig'indilarining ajralish teoremasi ($SST = SSB + SSW$)

Faraz qilaylik, $A$ omilning $k$ ta darajasi (guruhlari) bo'yicha kuzatuvlar o'tkazilgan bo'lsin.$i$-guruhda $n_i$ ta kuzatuv $x_{i1}, x_{i2}, \dots, x_{in_i}$ mavjud ($i = 1, \dots, k$). Umumiy kuzatuvlar soni:
$$
N = \sum_{i=1}^{k} n_i
$$

**Asosiy o'rtacha ko'rsatkichlar:**
1. **$i$-guruhning xususiy o'rtachasi:**
$$
\bar{x}_i = \frac{1}{n_i} \sum_{j=1}^{n_i} x_{ij}
$$
2. **Umumiy (ulama) o'rtacha (Grand Mean):**
$$
\bar{x} = \frac{1}{N} \sum_{i=1}^{k} \sum_{j=1}^{n_i} x_{ij} = \frac{1}{N} \sum_{i=1}^{k} n_i \bar{x}_i
$$

Har bir kuzatuvning umumiy o'rtachadan chetlanishini ikki qismga ajratamiz: $(x_{ij} - \bar{x}) = (\bar{x}_i - \bar{x}) + (x_{ij} - \bar{x}_i)$. Kvadratga oshirib, barcha $i$ va $j$ bo'yicha yig'indi olsak, **dispersion tahlilning asosiy ayniyati** kelib chiqadi:

$$
\underbrace{\sum_{i=1}^{k} \sum_{j=1}^{n_i} (x_{ij} - \bar{x})^2}_{SST \text{ (Umumiy)}} = \underbrace{\sum_{i=1}^{k} n_i (\bar{x}_i - \bar{x})^2}_{SSB \text{ (Guruhlararo)}} + \underbrace{\sum_{i=1}^{k} \sum_{j=1}^{n_i} (x_{ij} - \bar{x}_i)^2}_{SSW \text{ (Guruh ichidagi)}}
$$

Bu yerda:
* **$SST$(Total Sum of Squares — Umumiy kvadratlar yig'indisi):** Barcha omillar ta'siridagi to'liq o'zgaruvchanlikni ifodalaydi. Erkinlik darajasi: $df_{\text{um}} = N - 1$.
* **$SSB$(Sum of Squares Between groups — Guruhlararo kvadratlar yig'indisi, yoki $SS_{\text{omil}}$):** Guruh o'rtachalarining umumiy o'rtachadan farqini, ya'ni tekshirilayotgan **omil ta'sirini** o'lchaydi. Erkinlik darajasi: $df_B = k - 1$.
* **$SSW$(Sum of Squares Within groups — Guruh ichidagi / qoldiq kvadratlar yig'indisi, yoki $SS_{\text{qoldiq}}$):** Har bir guruh ichidagi **tasodifiy xatoliklar** ta'sirini o'lchaydi. Erkinlik darajasi: $df_W = N - k$.

Erkinlik darajalari uchun ham qo'shilish qonuni o'rinli:
$$
N - 1 = (k - 1) + (N - k)
$$

---

## 3. O'rtacha kvadratlar (Dispersiyalar) va Fisherning $F$-mezoni

Kvadratlar yig'indilarini ularga mos erkinlik darajalariga bo'lish orqali siljimagan dispersiya baholari (**Mean Squares — MS**) hosil qilinadi:

1. **Guruhlararo dispersiya (omil dispersiyasi):**
$$
MSB = s_B^2 = \frac{SSB}{k - 1}
$$
2. **Guruh ichidagi (qoldiq) dispersiya:**
$$
MSW = s_W^2 = \frac{SSW}{N - k}
$$

> [!IMPORTANT]
> **Fisherning $F$-statistikasi:**
> Agar $H_0$ gipoteza o'rinli bo'lsa (ya'ni omil o'rtachalarga ta'sir qilmasa), $MSB$ ham, $MSW$ ham yagona $\sigma^2$ bosh dispersiyaning siljimagan bahosi bo'ladi va ularning nisbati $1$ ga yaqin bo'lishi kerak. Agar omil ta'siri kuchli bo'lsa, $MSB \gg MSW$ bo'ladi.
> 
$$
> F_{\text{kuz}} = \frac{MSB}{MSW} = \frac{SSB / (k - 1)}{SSW / (N - k)}
> 
$$
> $H_0$ o'rinli bo'lganda $F_{\text{kuz}}$ statistika erkinlik darajalari $\nu_1 = k - 1$ va $\nu_2 = N - k$ bo'lgan **Fisher-Snedekor $F(\nu_1, \nu_2)$ taqsimotiga** bo'ysunadi.

### Qaror qabul qilish qoidasi (O'ng tomonlama kritik soha):
Tanlangan $\alpha$ ahamiyatlilik darajasi uchun Fisher jadvalidan $F_{\text{krit}} = F_{\alpha}(k - 1; N - k)$ kritik nuqta topiladi:
* Agar $F_{\text{kuz}} > F_{\text{krit}}$ bo'lsa — **$H_0$ gipoteza rad etiladi** (omil o'rtacha qiymatlarga statistik ahamiyatli ta'sir ko'rsatadi).
* Agar $F_{\text{kuz}} \le F_{\text{krit}}$ bo'lsa — **$H_0$ gipotezani rad etish uchun asos yo'q** (guruh o'rtachalari orasidagi farq tasodifiy).

---

## 4. Standart ANOVA jadvali

Dispersion tahlil natijalari xalqaro standart bo'yicha quyidagi jadval ko'rinishida rasmiylashtiriladi:

| Variatsiya manbai | Kvadratlar yig'indisi ($SS$) | Erkinlik darajasi ($df$) | O'rtacha kvadrat ($MS$) | $F$-statistika ($F_{\text{kuz}}$) |
| :--- | :---: | :---: | :---: | :---: |
| **Guruhlararo (Omil)** | $SSB$|$k - 1$|$MSB = \frac{SSB}{k-1}$|$F = \frac{MSB}{MSW}$ |
| **Guruh ichida (Qoldiq)** | $SSW$|$N - k$|$MSW = \frac{SSW}{N-k}$ | — |
| **Umumiy (Total)** | $SST = SSB + SSW$|$N - 1$ | — | — |

Qo'shimcha ravishda omilning umumiy o'zgaruvchanlikdagi ulushini baholash uchun **effekt ulushi (eta-kvadrat)** hisoblanadi:
$$
\eta^2 = \frac{SSB}{SST} \in [0, 1]
$$

---

## 5. Namuna misol (To'liq qadamma-qadam yechim)

**Masala:** Uch xil o'qitish metodikasi ($A_1, A_2, A_3$) samaradorligini solishtirish uchun har bir guruhdan $n_i = 4$ tadan talaba tanlab olindi va ularning yakuniy test ballari (10 ballik tizimda) qayd etildi:
* **1-guruh ($A_1$):** $4, \, 5, \, 4, \, 3$
* **2-guruh ($A_2$):** $6, \, 7, \, 5, \, 6$
* **3-guruh ($A_3$):** $8, \, 9, \, 7, \, 8$

$\alpha = 0.05$ ahamiyatlilik darajasida o'qitish metodikasi o'rtacha ballga ta'sir qilishi haqidagi gipotezani tekshiring. ($F_{0.05}(2; 9) = 4.26$).

**Yechish:**

**1-qadam. Gipotezalarni shakllantiramiz:**
* $H_0: \mu_1 = \mu_2 = \mu_3$ (uchala metodika bir xil natija beradi).
* $H_1:$ kamida ikkita metodikaning o'rtacha bali farq qiladi.
* Bu yerda guruhlar soni $k = 3$, har bir guruh hajmi $n_1 = n_2 = n_3 = 4$, umumiy hajm $N = 12$.

**2-qadam. Guruh o'rtachalari va umumiy o'rtachani topamiz:**
$$
\bar{x}_1 = \frac{4 + 5 + 4 + 3}{4} = \frac{16}{4} = 4
$$
$$
\bar{x}_2 = \frac{6 + 7 + 5 + 6}{4} = \frac{24}{4} = 6
$$
$$
\bar{x}_3 = \frac{8 + 9 + 7 + 8}{4} = \frac{32}{4} = 8
$$
Umumiy o'rtacha:
$$
\bar{x} = \frac{4 + 6 + 8}{3} = 6
$$

**3-qadam. Kvadratlar yig'indilarini ($SSB$ va $SSW$) hisoblaymiz:**
Guruhlararo kvadratlar yig'indisi ($SSB$):
$$
SSB = \sum_{i=1}^{3} n_i (\bar{x}_i - \bar{x})^2 = 4(4 - 6)^2 + 4(6 - 6)^2 + 4(8 - 6)^2 = 4(4) + 0 + 4(4) = 32
$$

Guruh ichidagi kvadratlar yig'indisi ($SSW$):
* 1-guruh uchun: $(4-4)^2 + (5-4)^2 + (4-4)^2 + (3-4)^2 = 0 + 1 + 0 + 1 = 2$* 2-guruh uchun: $(6-6)^2 + (7-6)^2 + (5-6)^2 + (6-6)^2 = 0 + 1 + 1 + 0 = 2$* 3-guruh uchun: $(8-8)^2 + (9-8)^2 + (7-8)^2 + (8-8)^2 = 0 + 1 + 1 + 0 = 2$
$$
SSW = 2 + 2 + 2 = 6
$$
Umumiy kvadratlar yig'indisi: $SST = SSB + SSW = 32 + 6 = 38$.

**4-qadam. Erkinlik darajalari va o'rtacha kvadratlarni ($MSB, MSW$) topamiz:**
* $df_B = k - 1 = 3 - 1 = 2 \implies MSB = \frac{SSB}{df_B} = \frac{32}{2} = 16$*$df_W = N - k = 12 - 3 = 9 \implies MSW = \frac{SSW}{df_W} = \frac{6}{9} \approx 0.667$**5-qadam. Fisher $F$-statistikasini hisoblaymiz va xulosa chiqaramiz:**
$$
F_{\text{kuz}} = \frac{MSB}{MSW} = \frac{16}{6/9} = \frac{16 \cdot 9}{6} = 24.0
$$
Jadval qiymati $F_{\text{krit}} = F_{0.05}(2; 9) = 4.26$.
Solishtiramiz:
$$
F_{\text{kuz}} = 24.0 > F_{\text{krit}} = 4.26
$$
**Xulosa:** $H_0$ gipoteza rad etiladi. O'qitish metodikasi talabalarning o'zlashtirish ko'rsatkichiga statistik jihatdan juda kuchli ta'sir ko'rsatadi. Effekt ulushi: $\eta^2 = \frac{32}{38} \approx 0.842$(umumiy o'zgaruvchanlikning $84.2\%$ qismi metodika turiga bog'liq).

---

## O'z-o'zini tekshirish savollari

1. Dispersion tahlilda "guruhlararo dispersiya" va "guruh ichidagi dispersiya" nimani ifodalaydi?
2. Nima sababdan ANOVA da Fisher mezoni har doim **bir tomonlama (o'ng tomonlama)** kritik sohaga ega?
3. Agar barcha guruhlardagi xususiy o'rtachalar bir-biriga aynan teng bo'lib chiqsa ($\bar{x}_1 = \bar{x}_2 = \dots = \bar{x}_k$), $SSB$ va $F_{\text{kuz}}$ qanday qiymat qabul qiladi?
4. ANOVA $H_0$ gipotezani rad etganidan so'ng, aynan qaysi juftliklar o'zaro farq qilishini aniqlash uchun qanday qo'shimcha mezonlar (Post-hoc tests) qo'llaniladi? *(Javob: Tyuki HSD, Sheffe yoki Bonferroni tuzatmasi).*

---

## Mustaqil yechish uchun masalalar

1. **1-masala:** $k = 4$ ta guruhning har birida $n_i = 6$ tadan kuzatuv o'tkazildi. Agar $SSB = 45$ va $SSW = 60$ bo'lsa:
   a) erkinlik darajalari $df_B, df_W, df_{\text{um}}$ ni;
   b) $MSB, MSW$ va $F_{\text{kuz}}$ statistikani;
   c) $\eta^2$ effekt ulushini toping. ($\alpha = 0.05$ da $F_{0.05}(3; 20) = 3.10$).
2. **2-masala:** Uchta korxonada ishlab chiqarilgan detallarning mustahkamligi sinovdan o'tkazildi ($n_1 = n_2 = n_3 = 3$):
   * 1-korxona: $10, \, 12, \, 11$* 2-korxona: $13, \, 15, \, 14$* 3-korxona: $9, \, 10, \, 11$ ANOVA jadvalini tuzing va $\alpha = 0.05$ da korxonalar orasida farq bor-yo'qligini tekshiring ($F_{0.05}(2; 6) = 5.14$).
3. **3-masala:** To'liq bo'lmagan ANOVA jadvalidagi tushirib qoldirilgan qiymatlarni tiklang:
   $k = 5$, $N = 25$, $SST = 250$, $MSB = 30$. $SSB, SSW, MSW$ va $F_{\text{kuz}}$ ni toping.

---

### Javoblar

1. a) $df_B = 3$, $df_W = 24 - 4 = 20$, $df_{\text{um}} = 23$;
   b) $MSB = \frac{45}{3} = 15$, $MSW = \frac{60}{20} = 3$, $F_{\text{kuz}} = \frac{15}{3} = 5.0 > 3.10$ ($H_0$ rad etiladi);
   c) $\eta^2 = \frac{45}{105} \approx 0.429$ ($42.9\%$).
2. $\bar{x}_1 = 11$, $\bar{x}_2 = 14$, $\bar{x}_3 = 10$, $\bar{x} = \frac{35}{3} \approx 11.67$. $SSB = 3\left((11-\frac{35}{3})^2 + (14-\frac{35}{3})^2 + (10-\frac{35}{3})^2\right) = 26$. $SSW = 2 + 2 + 2 = 6$. $MSB = \frac{26}{2} = 13$, $MSW = \frac{6}{6} = 1$. $F_{\text{kuz}} = 13.0 > 5.14$ ($H_0$ rad etiladi, korxonalar sifati farq qiladi).
3. $df_B = 5 - 1 = 4 \implies SSB = MSB \cdot df_B = 30 \cdot 4 = 120$. $SSW = SST - SSB = 250 - 120 = 130$. $df_W = 25 - 5 = 20 \implies MSW = \frac{130}{20} = 6.5$. $F_{\text{kuz}} = \frac{30}{6.5} \approx 4.62$.
