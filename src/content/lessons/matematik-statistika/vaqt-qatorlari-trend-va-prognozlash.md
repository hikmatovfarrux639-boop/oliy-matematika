---
title: "Vaqt qatorlari (Time Series), sirpanuvchi o'rtachalar va trendni prognozlash"
module: "matematik-statistika"
order: 9
description: "Dinamika (vaqt) qatorlari tarkibi: trend, mavsumiy tebranishlar, sirpanuvchi o'rtachalar bilan tekislash va kelajak qiymatlarni statistik prognozlash."
---

Iqtisodiyot, moliya, meteorologiya va muhandislikda kuzatuvlar ko'pincha vaqtning ketma-ket momentlarida (soatlar, kunlar, oylar, choraklar yoki yillar bo'yicha) qayd etiladi. Bunday tartiblangan statistik ma'lumotlar **vaqt qatorlari (Time Series)** yoki **dinamika qatorlari** deb ataladi. Vaqt qatorlarini tahlil qilishning bosh maqsadi — ko'rsatkichning o'tgan davrdagi o'zgarish qonuniyatini aniqlash va uning kelajakdagi qiymatlarini **prognozlash (bashorat qilish)** dir.

---

## 1. Vaqt qatorining tushunchasi va tarkibiy qismlari (Komponentlari)

Vaqt qatori ikki qator sonlardan iborat:
1. Vaqt momentlari (yoki davrlari): $t = 1, 2, \dots, n$.
2. Qator darajalari (ko'rsatkich qiymatlari): $y_1, y_2, \dots, y_n$.

Klassik dekompozitsiya nazariyasiga ko'ra, har qanday $y_t$ vaqt qatori darajasi $4$ ta asosiy komponentning qo'shilmasi yoki ko'paytmasidan tashkil topadi:

1. **Trend ($T_t$ — uzoq muddatli tendensiya):** Jarayonning uzoq vaqt davomida barqaror o'sish, pasayish yoki o'zgarmas qolish yo'nalishini ifodalovchi silliq determinirlangan funksiya.
2. **Mavsumiy komponenta ($S_t$ — Seasonal):** Yil fasllari, oylar yoki hafta kunlari bilan bog'liq bo'lgan qat'iy davriy takrorlanuvchi tebranishlar (masalan, qishda elektr energiyasi sarfining oshishi, yozda muzqaymoq savdosining ko'payishi).
3. **Tsiklik komponenta ($C_t$ — Cyclical):** Bir necha yillik iqtisodiy yoki kon'yunkturaviy to'lqinlar (masalan, iqtisodiy o'sish va inqiroz davrlari). Amaliyotda ko'pincha trend bilan birlashtirib $T_t$ sifatida qaraladi.
4. **Tasodifiy (irregulyar) komponenta ($\varepsilon_t$ — Random noise):** Oldindan aytib bo'lmaydigan tasodifiy omillar ta'siri (oq shovqin: $E(\varepsilon_t) = 0, D(\varepsilon_t) = \sigma^2$).

### Vaqt qatorlarining asosiy modellari:
* **Additiv model** (mavsumiy tebranishlar amplitudasi vaqt bo'yicha deyarli o'zgarmaganda):
$$
y_t = T_t + S_t + \varepsilon_t
$$
* **Multiplikativ model** (mavsumiy tebranishlar amplitudasi trend o'sishi bilan mutanosib ravishda kengayib borganda):
$$
y_t = T_t \cdot S_t \cdot \varepsilon_t
$$

---

## 2. Vaqt qatorining dinamika ko'rsatkichlari

Qatorning o'zgarish sur'atini baholash uchun quyidagi zanjirli (oldingi davrga nisbatan) va bazisli (boshlang'ich $y_1$ davrga nisbatan) ko'rsatkichlar hisoblanadi:

1. **Mutlaq o'sish (Absolute Change):**
   * Zanjirli: $\Delta_t^{\text{z}} = y_t - y_{t-1}$
   * Bazisli: $\Delta_t^{\text{b}} = y_t - y_1$
   * O'rtacha mutlaq o'sish:
$$
\overline{\Delta} = \frac{y_n - y_1}{n - 1}
$$

2. **O'sish sur'ati (Growth Factor / Rate):**
   * Zanjirli: $K_t^{\text{z}} = \frac{y_t}{y_{t-1}}$(foizda: $T_t^{\text{z}} = K_t^{\text{z}} \cdot 100\%$)
   * O'rtacha o'sish koeffitsiyenti (**o'rta geometrik** formula orqali!):
$$
\overline{K} = \sqrt[n-1]{K_2^{\text{z}} \cdot K_3^{\text{z}} \cdots K_n^{\text{z}}} = \sqrt[n-1]{\frac{y_n}{y_1}}
$$

---

## 3. Vaqt qatorlarini sirpanuvchi o'rtachalar usuli bilan tekislash

Tasodifiy tebranishlarni ($\varepsilon_t$) yo'qotish va yashirin trendni ($T_t$) yaqqol ko'rish uchun **sirpanuvchi o'rtachalar (Moving Average — MA)** usuli qo'llaniladi.

### 3.1. Toq intervalli ($m = 2p + 1$) oddiy sirpanuvchi o'rtacha
Agar tekislash oynasi uzunligi toq son (masalan, $m = 3$ yoki $m = 5$) bo'lsa, har bir $t$ moment uchun uning atrofidagi $m$ ta ketma-ket darajaning o'rta arifmetigi hisoblanadi:
* **$m = 3$ bo'lganda:**
$$
\tilde{y}_t = \frac{y_{t-1} + y_t + y_{t+1}}{3}, \quad (t = 2, 3, \dots, n-1)
$$
* **$m = 5$ bo'lganda:**
$$
\tilde{y}_t = \frac{y_{t-2} + y_{t-1} + y_t + y_{t+1} + y_{t+2}}{5}, \quad (t = 3, 4, \dots, n-2)
$$

### 3.2. Juft intervalli ($m = 2p$) markazlashtirilgan sirpanuvchi o'rtacha
Choraklik ($m = 4$) yoki oylik ($m = 12$) ma'lumotlarda $m$ juft bo'lgani uchun oddiy $m$-talik o'rtacha ikki davr o'rtasiga (masalan, $t = 2.5$ ga) to'g'ri kelib qoladi. Uni haqiqiy $t$ momentga qaytarish uchun ikkita qo'shni sirpanuvchi o'rtachaning yana o'rta arifmetigi olinadi (**markazlashtirilgan sirpanuvchi o'rtacha**). Masalan, $m = 4$ (choraklar) uchun:
$$
\tilde{y}_t = \frac{\frac{1}{4}(y_{t-2} + y_{t-1} + y_t + y_{t+1}) + \frac{1}{4}(y_{t-1} + y_t + y_{t+1} + y_{t+2})}{2} = \frac{0.5 y_{t-2} + y_{t-1} + y_t + y_{t+1} + 0.5 y_{t+2}}{4}
$$

> [!WARNING]
> Sirpanuvchi o'rtachalar usulida qatorning boshidan va oxiridan $p$ tadan qiymat yo'qotiladi (masalan, $m = 3$ da birinchi va oxirgi davrlar uchun $\tilde{y}_1$ va $\tilde{y}_n$ mavjud emas).

---

## 4. Analitik tekislash (Trend tenglamasini tuzish) va Prognozlash

Kelajakdagi $t = n + 1, n + 2, \dots, n + L$ ($L$ — prognoz ufqi / qadami) qiymatlarni bashorat qilish uchun trend analitik funksiya $T_t = f(t)$ ko'rinishida eng kichik kvadratlar usuli (EKKU) bilan topiladi. Chiziqli trend uchun:
$$
T_t = a + b \cdot t
$$

### Vaqt kodlarini markazlashtirish usuli (Tezkor hisoblash usuli)
Hisoblashlarni keskin soddalashtirish uchun $t$ vaqt o'zgaruvchisi o'rniga yig'indisi $\sum t_i^* = 0$ bo'lgan yangi **markazlashtirilgan vaqt kodi**$t^*$ kiritiladi:
1. Agar kuzatuvlar soni $n$ **toq** bo'lsa ($n = 2k + 1$): o'rtadagi davrga $t^* = 0$ beriladi va qadam $1$ ga teng:
   
$$
   t^* \in \{\dots, -2, -1, 0, 1, 2, \dots\}
   
$$
2. Agar kuzatuvlar soni $n$ **juft** bo'lsa ($n = 2k$): o'rtadagi ikki davrga $-1$ va $+1$ berilib, qadam $2$ ga teng olinadi:
   
$$
   t^* \in \{\dots, -5, -3, -1, 1, 3, 5, \dots\}
   
$$

$\sum t^* = 0$ bo'lgani sababli EKKU normal tenglamalari diagonal ko'rinishga keladi va chiziqli trend parametrlari juda oson topiladi:

$$
a = \bar{y} = \frac{\sum_{i=1}^{n} y_i}{n}, \qquad b = \frac{\sum_{i=1}^{n} t_i^* y_i}{\sum_{i=1}^{n} (t_i^*)^2}
$$

> [!IMPORTANT]
> **Nuqtaviy prognozlash:**
> Trend tenglamasi $T(t^*) = a + b t^*$ topilgach, kelajakdagi $n + L$ davrga mos keluvchi $t_{n+L}^*$ kod tenglamaga qo'yiladi (ekstrapolyatsiya):
> 
$$
> \hat{y}_{n+L} = T(t_{n+L}^*) + S_{n+L} \quad (\text{additiv modelda})
> 
$$

---

## 5. Namuna misol (Sirpanuvchi o'rtacha, Trend va Prognoz)

**Masala:** Korxonaning 5 yillik (2021–2025-yillar) savdo hajmi $y_t$ (mlrd so'm) quyidagi jadvalda berilgan:

| Yil | 2021 ($t=1$) | 2022 ($t=2$) | 2023 ($t=3$) | 2024 ($t=4$) | 2025 ($t=5$) |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Savdo hajmi ($y_t$)** | $12$|$15$|$14$|$18$|$21$ |

1. Qatorni $m = 3$ yillik sirpanuvchi o'rtachalar usuli bilan tekislang.
2. Markazlashtirilgan vaqt kodi yordamida chiziqli trend tenglamasini tuzing.
3. 2026-yil ($t = 6$) va 2027-yil ($t = 7$) uchun savdo hajmini prognoz qiling.

**Yechish:**

**1-qadam. $m = 3$ sirpanuvchi o'rtachalarni hisoblaymiz:**
* $t = 2$ (2022-yil) uchun: $\tilde{y}_2 = \frac{12 + 15 + 14}{3} = \frac{41}{3} \approx 13.67$
* $t = 3$ (2023-yil) uchun: $\tilde{y}_3 = \frac{15 + 14 + 18}{3} = \frac{47}{3} \approx 15.67$
* $t = 4$ (2024-yil) uchun: $\tilde{y}_4 = \frac{14 + 18 + 21}{3} = \frac{53}{3} \approx 17.67$
Tekislangan qator ($13.67 \to 15.67 \to 17.67$) har yili barqaror $+2.0$ mlrd so'm chiziqli o'sish borligini ko'rsatmoqda!

**2-qadam. Markazlashtirilgan vaqt kodlari ($t^*$) orqali chiziqli trendni topamiz:**
$n = 5$(toq son) bo'lgani uchun 2023-yilni markaz deb olamiz: $t^* = t - 3 \in \{-2, -1, 0, 1, 2\}$. Hisoblash jadvalini tuzamiz:

| Yil ($t$) | $y_t$|$t^*$|$(t^*)^2$|$t^* \cdot y_t$| Trend qiymati $T_t$ |
| :--- | :---: | :---: | :---: | :---: | :---: |
| 2021 ($1$) | $12$|$-2$|$4$|$-24$|$16 + 2.1(-2) = 11.8$ |
| 2022 ($2$) | $15$|$-1$|$1$|$-15$|$16 + 2.1(-1) = 13.9$ |
| 2023 ($3$) | $14$|$0$|$0$|$0$|$16 + 2.1(0) = 16.0$ |
| 2024 ($4$) | $18$|$1$|$1$|$18$|$16 + 2.1(1) = 18.1$ |
| 2025 ($5$) | $21$|$2$|$4$|$42$|$16 + 2.1(2) = 20.2$ |
| **Jami ($\sum$)** | **$80$** | **$0$** | **$10$** | **$21$** | **$80.0$** |

Parametrlarni hisoblaymiz:
$$
a = \frac{\sum y_t}{n} = \frac{80}{5} = 16, \qquad b = \frac{\sum t^* y_t}{\sum (t^*)^2} = \frac{21}{10} = 2.1
$$
Demak, markazlashtirilgan vaqt bo'yicha chiziqli trend tenglamasi:
$$
T(t^*) = 16 + 2.1 t^*
$$
Agar oddiy $t \in \{1, 2, 3, 4, 5\}$ vaqtga o'tsak ($t^* = t - 3$):
$$
T_t = 16 + 2.1(t - 3) = 9.7 + 2.1 t
$$

**3-qadam. 2026 va 2027-yillar uchun prognoz:**
* **2026-yil ($t = 6$, ya'ni $t^* = 3$):**
$$
\hat{y}_{2026} = 16 + 2.1 \cdot 3 = 22.3 \text{ mlrd so'm}
$$
* **2027-yil ($t = 7$, ya'ni $t^* = 4$):**
$$
\hat{y}_{2027} = 16 + 2.1 \cdot 4 = 24.4 \text{ mlrd so'm}
$$

---

## O'z-o'zini tekshirish savollari

1. Vaqt qatorining additiv va multiplikativ modellari qaysi holatlarda qo'llaniladi?
2. Nima uchun o'rtacha o'sish sur'ati o'rta arifmetik emas, balki **o'rta geometrik** formula yordamida hisoblanadi?
3. Choraklik ma'lumotlarni tekislashda nima uchun oddiy 4-talik sirpanuvchi o'rtacha emas, balki markazlashtirilgan 4-talik sirpanuvchi o'rtacha ishlatiladi?
4. Vaqt kodlarini $\sum t^* = 0$ qilib markazlashtirish EKKU normal tenglamalar sistemasini qanday soddalashtiradi?

---

## Mustaqil yechish uchun masalalar

1. **1-masala:** Mahsulot ishlab chiqarish hajmi $4$ yil davomida quyidagicha bo'lgan: $y_1 = 100$, $y_2 = 120$, $y_3 = 150$, $y_4 = 169$ (ming dona).
   a) O'rtacha yillik mutlaq o'sish $\overline{\Delta}$ ni toping;
   b) O'rtacha yillik o'sish koeffitsiyenti $\overline{K}$ va o'rtacha o'sish sur'atini ($\%$) hisoblang.
2. **2-masala:** $7$ kunlik harorat kuzatuvlari berilgan: $20, \, 23, \, 22, \, 25, \, 27, \, 24, \, 28$. Qatorni $m = 3$ va $m = 5$ kunlik sirpanuvchi o'rtachalar bilan tekislang.
3. **3-masala:** $n = 4$ yillik ko'rsatkichlar berilgan ($t = 1, 2, 3, 4$): $y_1 = 5, \, y_2 = 8, \, y_3 = 10, \, y_4 = 13$. Juft $n$ uchun markazlashtirilgan kodlar ($t^* \in \{-3, -1, 1, 3\}$) yordamida chiziqli trend tenglamasini tuzing va $t = 5$ yil uchun prognoz qiymatini toping.
4. **4-masala:** Additiv modelda 4-chorak uchun trend qiymati $T_t = 50$ ga, 4-chorakning o'rtacha mavsumiy tuzatmasi esa $S_4 = +8.5$ ga teng bo'lsa, shu chorak uchun mavsumiylikni hisobga olgan prognoz qiymatini toping.

---

### Javoblar

1. a) $\overline{\Delta} = \frac{169 - 100}{4 - 1} = 23$ ming dona/yil;
   b) $\overline{K} = \sqrt[3]{\frac{169}{100}} = \sqrt[3]{1.69} \approx 1.191$(yillik o'rtacha o'sish sur'ati $119.1\%$, ya'ni yiliga $+19.1\%$).
2. $m = 3$ uchun ($\tilde{y}_2 \dots \tilde{y}_6$): $21.67; \, 23.33; \, 24.67; \, 25.33; \, 26.33$.
   $m = 5$ uchun ($\tilde{y}_3 \dots \tilde{y}_5$): $23.4; \, 24.2; \, 25.2$.
3. $a = \bar{y} = \frac{5+8+10+13}{4} = 9$. $\sum (t^*)^2 = 9 + 1 + 1 + 9 = 20$. $\sum t^* y_t = (-3)(5) + (-1)(8) + (1)(10) + (3)(13) = 26$. $b = \frac{26}{20} = 1.3$. Trend: $T(t^*) = 9 + 1.3 t^*$. $t = 5$ yil uchun $t^* = 5$(chunki qadam $2$ ga teng): $\hat{y}_5 = 9 + 1.3(5) = 15.5$.
4. Additiv model bo'yicha: $\hat{y} = T_t + S_4 = 50 + 8.5 = 58.5$.
