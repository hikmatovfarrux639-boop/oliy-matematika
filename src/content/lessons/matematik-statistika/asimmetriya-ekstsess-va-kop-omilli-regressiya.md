---
title: "Asimmetriya, ekstsess, Fexner korrelyatsiyasi, ko'p omilli regressiya va dinamika qatorlari"
description: "Empirik taqsimotning asimmetriya (A_s) va ekstsess (E_k) koeffitsiyentlari, takroriy va takrormas tanlanma baholari, Fexner ishoralar korrelyatsiyasi, ko'p omilli chiziqli regressiya hamda dinamika qatorlari ko'rsatkichlari."
module: "matematik-statistika"
order: 10
duration: "35 daqiqa"
category: "Amaliy statistika"
difficulty: "Qiyin"
---

## Kirish: Amaliy statistikaning chuqurlashtirilgan apparati

Boshlang'ich matematik statistikada ko'pincha o'rtacha qiymat ($\bar{x}$) va dispersiya ($S^2$ yoki $\sigma^2$) bilan cheklaniladi. Biroq ikki xil ma'lumotlar to'plami bir xil o'rtacha qiymat va bir xil dispersiyaga ega bo'la turib, ularning taqsimot shakli bir-biridan butunlay farq qilishi mumkin: biri o'ngga og'gan, ikkinchisi simmetrik, uchinchisi esa o'ta cho'qqidor bo'lishi mumkin.

Aynan shuning uchun amaliy statistikada taqsimot egri chizig'ining geometrik shaklini aniq ifodalovchi **asimmetriya** va **ekstsess** koeffitsiyentlari, real tanlanma jarayonlaridagi **takroriy va takrormas** sxemalar, ma'lumotlarni ilmiy **guruhlash**, tezkor **Fexner korrelyatsiyasi**, bir vaqtning o'zida bir nechta omil ta'sirini baholovchi **ko'p omilli regressiya** hamda iqtisodiy jarayonlar rivojini ifodalovchi **dinamika qatorlari** tizimi hal qiluvchi ahamiyatga ega.

---

## 1. Empirik taqsimotning asimmetriya koeffitsiyenti $A_s$ (Qiyshiqlik tahlili)

Variatsion qator elementlarining o'rtacha arifmetik qiymatga nisbatan simmetrik yoki biror tomonga og'ganligini (qiyshayganligini) xarakterlash uchun **asimmetriya koeffitsiyenti** ($A_s$ yoki $Skewness$) qo'llaniladi.

U $3$-tartibli markaziy moment $\mu_3$ orqali hisoblanadi:

$$
\mu_3 = \frac{1}{n} \sum_{i=1}^k (x_i - \bar{x})^3 n_i
$$

bu yerda $n = \sum_{i=1}^k n_i$ — umumiy tanlanma hajmi, $\bar{x}$ — tanlanma o'rtacha qiymati.

### Asimmetriya formulasi:

$$
A_s = \frac{\mu_3}{\sigma^3} = \frac{\frac{1}{n} \sum_{i=1}^k (x_i - \bar{x})^3 n_i}{\sigma^3}
$$

bu yerda $\sigma = \sqrt{\frac{1}{n} \sum_{i=1}^k (x_i - \bar{x})^2 n_i}$ — standart og'ish.

Kichik hajmli tanlanmalarda ($n < 100$) siljimagan baho uchun quyidagi tuzatish kiritiladi:

$$
A_s^* = \frac{\sqrt{n(n - 1)}}{n - 2} \cdot \frac{\mu_3}{s^3}
$$

Shuningdek, amaliyotda Pirsonning **strukturaviy asimmetriya koeffitsiyenti** ham keng ishlatiladi:

$$
A_s^{\text{Pirson}} = \frac{\bar{x} - M_o}{\sigma} \approx \frac{3(\bar{x} - M_e)}{\sigma}
$$

bu yerda $M_o$ — moda, $M_e$ — mediana.

```
       Salbiy asimmetriya              Simmetrik (Normal)             Ijobiy asimmetriya
            (As < 0)                         (As = 0)                       (As > 0)
             /\                               /\                               /\
            /  \                             /  \                             /  \
           /    \                           /    \                           /    \
     _____/      \                    _____/      \_____                    /      \_____
     Chap dum uzun                    Har ikki tomon teng                   O'ng dum uzun
   x_bar < Me < Mo                      x_bar = Me = Mo                    Mo < Me < x_bar
```

### Qiyshiqlik tahlili va natijalarni talqin qilish:

| $A_s$ qiymati | Asimmetriya turi | Matematik munosabat | Geometrik ko'rinishi |
|:---|:---|:---|:---|
| $A_s = 0$| **Qat'iy simmetrik** |$\bar{x} = M_e = M_o$ | Taqsimot markazga nisbatan mukammal ko'zgudek akslanadi (masalan, Gauss normal egri chizig'i). |
| $A_s > 0$| **O'ng tomonli (Ijobiy)** |$\bar{x} > M_e > M_o$ | Egri chiziqning o'ng tomoni cho'zilgan ("o'ng dum" uzun). Katta qiymatga ega kam sonli obyektlar o'rtacha qiymatni o'ngga suradi (masalan, aholi daromadlari taqsimoti). |
| $A_s < 0$| **Chap tomonli (Salbiy)** |$\bar{x} < M_e < M_o$ | Egri chiziqning chap tomoni cho'zilgan ("chap dum" uzun). Kichik qiymatga ega obyektlar o'rtacha qiymatni chapga tortadi. |

* **Asimmetriya darajasi:**
  * $|A_s| < 0.25$ — asimmetriya sezilarli emas (kuchsiz);
  * $0.25 \le |A_s| \le 0.5$ — o'rtacha asimmetriya;
  * $|A_s| > 0.5$ — kuchli (sezilarli) asimmetriya.

---

## 2. Ekstsess koeffitsiyenti $E_k$ (Cho'qqidorlik tahlili)

Taqsimot egri chizig'ining cho'qqisi normal taqsimotga nisbatan qanchalik "o'tkir" yoki "yassi" ekanligini ifodalash uchun **ekstsess (Kurtosis)** koeffitsiyenti xizmat qiladi.

U $4$-tartibli markaziy moment $\mu_4$ orqali aniqlanadi:

$$
\mu_4 = \frac{1}{n} \sum_{i=1}^k (x_i - \bar{x})^4 n_i
$$

### Ekstsess formulasi:

$$
E_k = \frac{\mu_4}{\sigma^4} - 3
$$

> [!NOTE]
> **Nima uchun formulada aynan $-3$ ayiriladi?**
> Matematik jihatdan, mukammal **normal (Gauss) taqsimot** uchun to'rtinchi standartlashtirilgan moment aynan $3$ ga teng, ya'ni $\frac{\mu_4}{\sigma^4} = 3$.
> Shu sababli, normal taqsimotni nol etaloni ($E_k = 0$) sifatida qabul qilish uchun formuladan $3$ ayirib tashlanadi.

```
                  ^  O'tkir cho'qqili (Leptokurtik, Ek > 0)
                 / \
                /   \
               /  |  \
              /   |   \    Normal etalon (Mezonormal, Ek = 0)
             /   / \   \
            /  /     \  \
          -/--/-------\--\- Yassi cho'qqili (Platikurtik, Ek < 0)
```

### Cho'qqidorlik tahlili:
1. **$E_k = 0$ (Mezonormal taqsimot):** Cho'qqi tikligi bo'yicha normal taqsimot bilan aynan bir xil.
2. **$E_k > 0$ (Leptokurtik taqsimot):** Cho'qqisi juda baland va o'tkir, variantalarning aksariyati o'rtacha qiymat atrofida zich to'plangan, dumlari esa og'irroq (ekstremal chetlanishlar ehtimoli normal taqsimotdagidan yuqori).
3. **$E_k < 0$ (Platikurtik taqsimot):** Cho'qqisi tekislangan, yassi va past. Variantalarning tarqoqligi kengroq maydonga bir tekis yoyilgan.

---

## 3. Takroriy va takrormas tanlanmalarda baholash va zaruriy hajm $n$

Bosh to'plamdan ($N$ ta element) tanlanma ($n$ ta element) ajratib olish ikki xil usulda amalga oshiriladi:
* **Takroriy (qaytariluvchi) tanlanma:** Tekshirilgan har bir element bosh to'plamga qaytariladi (ehtimolliklar o'zgarmas qoladi).
* **Takrormas (qaytarilmaydigan) tanlanma:** Tanlab olingan element to'plamga qaytarilmaydi (amaliyotda, sotsiologik so'rovlarda, mahsulot sifatini sinashda deyarli har doim takrormas tanlanma qo'llaniladi).

### 1. O'rtacha xatolik (Standart xato $\mu$):

| Ko'rsatkich | Takroriy tanlanma | Takrormas tanlanma |
|:---|:---|:---|
| **O'rtacha qiymat xatosi ($\mu_{\bar{x}}$)** | $\mu_{\bar{x}} = \frac{\sigma}{\sqrt{n}}$|$\mu_{\bar{x}} = \frac{\sigma}{\sqrt{n}} \sqrt{1 - \frac{n}{N}}$ |
| **Ulush (alternativ belgi) xatosi ($\mu_p$)** | $\mu_p = \sqrt{\frac{p(1 - p)}{n}}$|$\mu_p = \sqrt{\frac{p(1 - p)}{n}} \sqrt{1 - \frac{n}{N}}$ |

Bu yerda $\sqrt{1 - \frac{n}{N}}$ ko'paytuvchisi **chekli bosh to'plam tuzatishi** (Koshi multiplikatori) deyiladi. Agar tanlanma bosh to'plamning juda kichik qismini tashkil qilsa ($\frac{n}{N} < 0.05$), bu ko'paytuvchi $1$ ga yaqin bo'ladi va uni hisobga olmaslik mumkin.

### 2. Chegaraviy xatolik $\Delta$ va ishonchlilik oralig'i:

Bosh to'plam o'rtachasi $\bar{X}_0$ ishonchlilik darajasi $P = 2\Phi(t)$ bilan quyidagi oraliqda yotadi:

$$
\bar{x} - \Delta \le \bar{X}_0 \le \bar{x} + \Delta, \quad \text{bu yerda} \quad \Delta = t \cdot \mu
$$

(masalan, $P = 0.954$ da $t = 2$; $P = 0.997$ da $t = 3$).

### 3. Zaruriy tanlanma hajmi $n$ ni hisoblash:

Tadqiqotchi o'zi istagan ruxsat etilgan chegaraviy xatolik $\Delta$ va ishonchlilik ehtimoli $t$ ni oldindan belgilab, qancha obyektni tekshirish kerakligini quyidagi formulalar bilan topadi:

* **O'rtacha miqdor uchun:**
  * Takroriy tanlanmada:
  
$$
  n = \frac{t^2 \sigma^2}{\Delta^2}
  
$$
  * Takrormas tanlanmada:
  
$$
  n = \frac{N t^2 \sigma^2}{N \Delta^2 + t^2 \sigma^2}
  
$$

* **Ulush (foiz) uchun ($p$ — kutilayotgan ulush; noma'lum bo'lsa maksimal noaniqlik $p(1-p) = 0.25$ olinadi):**
  * Takroriy tanlanmada:
  
$$
  n = \frac{t^2 p(1 - p)}{\Delta^2}
  
$$
  * Takrormas tanlanmada:
  
$$
  n = \frac{N t^2 p(1 - p)}{N \Delta^2 + t^2 p(1 - p)}
  
$$

---

## 4. Statistik ma'lumotlarni guruhlash turlari va qayta guruhlash

Guruhlash — boshlang'ich tarqoq ma'lumotlarni sifat jihatdan bir jinsli toifalarga ajratish va umumlashtirish usulidir.

### Guruhlashning 4 ta asosiy turi:

1. **Tipologik guruhlash:** Obyektlarni ularning ijtimoiy-iqtisodiy tabiati yoki sifati bo'yicha turli toifalarga (tiplarga) ajratish.
   * *Misol:* Korxonalarni mulkchilik shakllari bo'yicha guruhlash (davlat, xususiy, qo'shma korxonalar, xorijiy investitsiyali korxonalar).
2. **Strukturaviy guruhlash:** Sifat jihatdan bir jinsli bo'lgan bitta to'plamning ichki tarkibiy tuzilishini o'rganish.
   * *Misol:* Universitet talabalarini yoshi, o'zlashtirish ballari (GPA) yoki kurslari bo'yicha taqsimlash.
3. **Analitik guruhlash:** Ikki yoki undan ortiq belgilar orasidagi o'zaro sabab-oqibat bog'liqliklarini aniqlash va o'rganish. Bunda obyektlar **omil belgi** bo'yicha guruhlanadi va har bir guruh uchun **natijaviy belgining** o'rtacha qiymati hisoblanadi.
   * *Misol:* Ishchilarni ish staji bo'yicha guruhlab, har bir staj guruhi bo'yicha o'rtacha oylik ish haqini solishtirish.
4. **Kombinatsion guruhlash:** Obyektlarni ketma-ket ikki va undan ortiq belgilar bo'yicha bir vaqtda guruhlash (masalan, korxonalarni avval faoliyat sohasi bo'yicha, so'ngra har bir soha ichida ishchilar soni bo'yicha kichik guruhlarga ajratish).

### Qayta guruhlash (Ikkilamchi guruhlash):
Oldin o'tkazilgan guruhlash ma'lumotlarini taqqoslash yoki umumlashtirish maqsadida yangi guruh chegaralariga keltirish. U ikki usulda qilinadi:
* **Intervallarni birlashtirish (yiriklashtirish):** Mayda intervallar shunchaki yirikroq oraliqlarga qo'shiladi.
* **Ulushlar (proporsional taqsimlash) usuli:** Eski oraliqdagi chastota yangi oraliqlarga tushgan kenglik ulushiga mutanosib ravishda taqsimlanadi.

---

## 5. Fexnerning ishoralar korrelyatsiyasi koeffitsiyenti $K_\Phi$ Ikki $X$ va $Y$ belgilar orasidagi o'zaro bog'liqlik yo'nalishini juda tez, murakkab hisob-kitoblarsiz baholash uchun nemis olimi Gustav Fexner maxsus koeffitsiyent taklif qilgan.

### Hisoblash algoritmi:
1. $X$ va $Y$ qatorlarining o'rtacha arifmetik qiymatlari $\bar{x}$ va $\bar{y}$ hisoblanadi.
2. Har bir kuzatuv uchun o'rtachadan chetlanish ishoralari yoziladi: $\operatorname{sgn}(x_i - \bar{x})$ va $\operatorname{sgn}(y_i - \bar{y})$.
3. Ishoralar juftliklari solishtiriladi:
   * Agar ikkala ishora bir xil bo'lsa ($+, +$ yoki $-, -$), bu **moslik ($C$ — coincidence)** deb ataladi.
   * Agar ishoralar qarama-qarshi bo'lsa ($+, -$ yoki $-, +$), bu **mos kelmaslik ($H$ — hetero)** deb ataladi.
4. Mosliklar soni $C$ va qarama-qarshiliklar soni $H$ sanaladi ($C + H = n$).

### Fexner formulasi:

$$
K_\Phi = \frac{C - H}{C + H} = \frac{C - H}{n}
$$

### Talqin qilish:
* $-1 \le K_\Phi \le +1$;
* $K_\Phi > 0$ bo'lsa — to'g'ri (musbat) bog'liqlik;
* $K_\Phi < 0$ bo'lsa — teskari (manfiy) bog'liqlik;
* $K_\Phi = +1$ bo'lsa — to'liq bir yo'nalishli bog'liqlik ($H = 0$);
* $K_\Phi = 0$ bo'lsa — ishoralar bo'yicha bog'liqlik mavjud emas ($C = H$).

---

## 6. Ko'p omilli chiziqli regressiya modeli

Real hayotda natija ko'rsatkichi $y$ odatda faqat bitta omilga emas, balki bir nechta mustaqil omillarga ($x_1, x_2, \dots, x_k$) bog'liq bo'ladi. Masalan, hosildorlik ($y$) — o'g'it miqdori ($x_1$), yog'ingarchilik ($x_2$) va tuproq harorati ($x_3$) ga bog'liq.

Ikki omilli chiziqli regressiya tenglamasi:

$$
y = b_0 + b_1 x_1 + b_2 x_2
$$

Eng kichik kvadratlar usuliga (EKVU) ko'ra, $b_0, b_1, b_2$ parametrlar quyidagi **normal tenglamalar sistemasidan** topiladi:

$$
\begin{cases}
n b_0 + b_1 \sum x_1 + b_2 \sum x_2 = \sum y \\
b_0 \sum x_1 + b_1 \sum x_1^2 + b_2 \sum x_1 x_2 = \sum x_1 y \\
b_0 \sum x_2 + b_1 \sum x_1 x_2 + b_2 \sum x_2^2 = \sum x_2 y
\end{cases}
$$

### 1. Standartlashtirilgan regressiya (Beta-koeffitsiyentlar $\beta_j$):
Oddiy regressiya koeffitsiyentlari $b_j$ har xil o'lchov birliklariga (masalan, so'm, tonna, km) ega bo'lgani sababli ularni to'g'ridan-to'g'ri taqqoslab bo'lmaydi. Qaysi omil natijaga kuchliroq ta'sir qilishini bilish uchun **beta-koeffitsiyentlar** hisoblanadi:

$$
\beta_j = b_j \cdot \frac{\sigma_{x_j}}{\sigma_y}
$$

> [!TIP]
> $\beta_j$ ko'rsatadi: Agar $x_j$ omil o'zining bitta standart og'ishi ($\sigma_{x_j}$) miqdorida oshsa, natijaviy belgi $y$ o'rtacha $\beta_j \sigma_y$ ga o'zgaradi. Moduli eng katta bo'lgan $\beta$ koeffitsiyentli omil eng muhim omil hisoblanadi.

### 2. O'rtacha elastiklik koeffitsiyenti $\bar{E}_j$:

$$
\bar{E}_j = b_j \cdot \frac{\bar{x}_j}{\bar{y}}
$$

Bu ko'rsatkich iqtisodiy ma'noga ega: $x_j$ omil o'z o'rtacha darajasidan **$1\%$ ga oshganda**, natijaviy belgi $y$ o'rtacha necha foizga o'zgarishini ko'rsatadi.

### 3. Xususiy (chastnyy) korrelyatsiya koeffitsiyenti:
Ikki o'zgaruvchi $y$ va $x_1$ orasidagi sof bog'liqlikni boshqa barcha omillarning ($x_2$) ta'sirini sobit (o'zgarmas) qilib qo'ygan holda o'lchaydi:

$$
r_{yx_1 \cdot x_2} = \frac{r_{yx_1} - r_{yx_2} r_{x_1 x_2}}{\sqrt{(1 - r_{yx_2}^2)(1 - r_{x_1 x_2}^2)}}
$$

bu yerda $r_{yx_1}, r_{yx_2}, r_{x_1 x_2}$ — oddiy juft korrelyatsiya koeffitsiyentlari.

---

## 7. Dinamika (vaqt) qatorlarining statistik ko'rsatkichlari tizimi

Vaqt bo'yicha tartiblangan $y_0, y_1, y_2, \dots, y_n$ ko'rsatkichlar dinamika qatorini tashkil etadi. Bu yerda $y_0$ — bazis daraja, $y_i$ — joriy daraja, $y_{i-1}$ — o'tgan (oldingi) daraja.

Dinamika qatorini tahlil qilish uchun quyidagi 4 ta asosiy tahliliy ko'rsatkichlar tizimi qo'llaniladi:

| Ko'rsatkich nomi | Zanjirli usul (oldingi davrga nisbatan) | Bazisli usul (boshlang'ich $y_0$ ga nisbatan) | O'zaro bog'liqlik qoidasi |
|:---|:---|:---|:---|
| **1. Absolyut o'sish ($\Delta$)** | $\Delta_i^z = y_i - y_{i-1}$|$\Delta_i^b = y_i - y_0$| Barcha zanjirli o'sishlar yig'indisi oxirgi bazisli o'sishga teng: $\sum_{i=1}^n \Delta_i^z = \Delta_n^b$ |
| **2. O'sish sur'ati koeffitsiyenti ($K$)** | $K_i^z = \frac{y_i}{y_{i-1}}$|$K_i^b = \frac{y_i}{y_0}$| Barcha zanjirli koeffitsiyentlar ko'paytmasi oxirgi bazisli koeffitsiyentga teng: $\prod_{i=1}^n K_i^z = K_n^b$ |
| **3. O'sish sur'ati foizda ($T_{o's}$)** | $T_i^z = K_i^z \cdot 100\%$|$T_i^b = K_i^b \cdot 100\%$ | Foizlardagi nisbiy o'sish |
| **4. Qo'shimcha o'sish sur'ati ($T_{qo'sh}$)** | $T_{qo'sh, i}^z = T_i^z - 100\% = \frac{\Delta_i^z}{y_{i-1}} \cdot 100\%$|$T_{qo'sh, i}^b = T_i^b - 100\% = \frac{\Delta_i^b}{y_0} \cdot 100\%$ | Toza o'sish sur'ati |

### 5. 1% qo'shimcha o'sishning absolyut qiymati ($A_i$):

$$
A_i = \frac{\Delta_i^z}{T_{qo'sh, i}^z} = \frac{y_i - y_{i-1}}{\frac{y_i - y_{i-1}}{y_{i-1}} \cdot 100} = 0.01 \cdot y_{i-1} = \frac{y_{i-1}}{100}
$$

Demak, 1% qo'shimcha o'sishning absolyut qiymati doimo oldingi davr darajasining yuzdan bir qismiga teng bo'ladi!

### 6. Dinamika qatorining o'rtacha ko'rsatkichlari:
* **O'rtacha absolyut o'sish:**

$$
\bar{\Delta} = \frac{\sum_{i=1}^n \Delta_i^z}{n} = \frac{y_n - y_0}{n}
$$

* **O'rtacha o'sish sur'ati (geometrik o'rtacha):**

$$
\bar{K} = \sqrt[n]{K_1^z \cdot K_2^z \dots K_n^z} = \sqrt[n]{\frac{y_n}{y_0}}, \quad \bar{T}_{o's} = \bar{K} \cdot 100\%
$$

* **O'rtacha qo'shimcha o'sish sur'ati:**

$$
\bar{T}_{qo'sh} = \bar{T}_{o's} - 100\%
$$

---

## 8. Namunaviy misollar va mustaqil mashqlar

### 1-misol: Asimmetriya va Ekstsess koeffitsiyentlarini hisoblash
**Shart:** Korxona ishchilarining oylik maoshi bo'yicha quyidagi taqsimot berilgan:

| Maosh $x_i$(mln so'm) |$3$|$4$|$5$|$6$|$7$ |
|---|---|---|---|---|---|
| Ishchilar soni $n_i$|$5$|$15$|$20$|$8$|$2$ |

Ushbu taqsimotning asimmetriya $A_s$ va ekstsess $E_k$ koeffitsiyentlarini hisoblang.

**Yechish:**
1. Jami kuzatuvlar soni: $n = 5 + 15 + 20 + 8 + 2 = 50$.
2. O'rtacha qiymat $\bar{x}$:

$$
\bar{x} = \frac{3 \cdot 5 + 4 \cdot 15 + 5 \cdot 20 + 6 \cdot 8 + 7 \cdot 2}{50} = \frac{15 + 60 + 100 + 48 + 14}{50} = \frac{237}{50} = 4.74 \text{ mln}
$$

3. O'rtachadan chetlanishlar va momentlarni jadvalda hisoblaymiz:

| $x_i$|$n_i$|$x_i - \bar{x}$|$(x_i - \bar{x})^2 n_i$|$(x_i - \bar{x})^3 n_i$|$(x_i - \bar{x})^4 n_i$ |
|:---|:---|:---|:---|:---|:---|
| 3 | 5 | $-1.74$|$15.138$|$-26.340$|$45.832$ |
| 4 | 15 | $-0.74$|$8.214$|$-6.078$|$4.498$ |
| 5 | 20 | $+0.26$|$1.352$|$+0.352$|$0.091$ |
| 6 | 8 | $+1.26$|$12.701$|$+16.003$|$20.164$ |
| 7 | 2 | $+2.26$|$10.215$|$+23.086$|$52.175$ |
| **Jami**| **50**| — | **$47.620$** | **$+7.023$** | **$122.760$** |

4. Dispersiya va standart og'ish:

$$
\sigma^2 = \mu_2 = \frac{47.620}{50} = 0.9524 \implies \sigma = \sqrt{0.9524} \approx 0.9759
$$

5. Uchinchi va to'rtinchi markaziy momentlar:

$$
\mu_3 = \frac{7.023}{50} \approx 0.1405
$$

$$
\mu_4 = \frac{122.760}{50} \approx 2.4552
$$

6. Asimmetriya koeffitsiyenti:

$$
A_s = \frac{\mu_3}{\sigma^3} = \frac{0.1405}{(0.9759)^3} = \frac{0.1405}{0.9295} \approx +0.151
$$

*Xulosa:* $A_s > 0$, lekin $|A_s| < 0.25$ bo'lgani uchun taqsimotda **kuchsiz o'ng tomonli asimmetriya** mavjud.

7. Ekstsess koeffitsiyenti:

$$
E_k = \frac{\mu_4}{\sigma^4} - 3 = \frac{2.4552}{(0.9524)^2} - 3 = \frac{2.4552}{0.9071} - 3 \approx 2.707 - 3 = -0.293
$$

*Xulosa:* $E_k < 0$ bo'lgani sababli taqsimot **platikurtik (cho'qqisi normalga nisbatan biroz yassi)** shaklga ega.

---

### 2-misol: Fexner korrelyatsiyasi
**Shart:** $6$ ta do'kondagi reklama xarajatlari ($X$, mln so'm) va sotilgan tovarlar hajmi ($Y$, mln so'm) berilgan:

| Do'kon | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| Reklama ($X$) | 4 | 6 | 7 | 9 | 11 | 13 |
| Savdo ($Y$) | 45 | 50 | 55 | 52 | 68 | 72 |

Fexnerning ishoralar korrelyatsiyasi koeffitsiyentini toping.

**Yechish:**
1. O'rtacha qiymatlar:
   * $\bar{x} = \frac{4 + 6 + 7 + 9 + 11 + 13}{6} = \frac{50}{6} \approx 8.33$
   * $\bar{y} = \frac{45 + 50 + 55 + 52 + 68 + 72}{6} = \frac{342}{6} = 57$
2. Chetlanishlar va ularning ishoralari:

| Do'kon | $x_i - \bar{x}$|$y_i - \bar{y}$|$X$ ishorasi |$Y$ ishorasi | Natija |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 1 | $4 - 8.33 = -4.33$|$45 - 57 = -12$|$-$|$-$ | Mos ($C$) |
| 2 | $6 - 8.33 = -2.33$|$50 - 57 = -7$|$-$|$-$ | Mos ($C$) |
| 3 | $7 - 8.33 = -1.33$|$55 - 57 = -2$|$-$|$-$ | Mos ($C$) |
| 4 | $9 - 8.33 = +0.67$|$52 - 57 = -5$|$+$|$-$ | Qarama-qarshi ($H$) |
| 5 | $11 - 8.33 = +2.67$|$68 - 57 = +11$|$+$|$+$ | Mos ($C$) |
| 6 | $13 - 8.33 = +4.67$|$72 - 57 = +15$|$+$|$+$ | Mos ($C$) |

3. Mosliklar soni: $C = 5$. Qarama-qarshiliklar soni: $H = 1$.
4. Fexner koeffitsiyenti:

$$
K_\Phi = \frac{C - H}{C + H} = \frac{5 - 1}{5 + 1} = \frac{4}{6} \approx +0.67
$$

**Javob:** $K_\Phi = +0.67$. Reklama xarajatlari va savdo hajmi o'rtasida sezilarli to'g'ri (musbat) bog'liqlik mavjud.

---

### 3-misol: Takrormas tanlanmada zaruriy hajm $n$ ni topish
**Shart:** Shaharda jami $N = 10000$ ta xonadon mavjud. Ularning o'rtacha elektr energiyasi sarfini $\Delta = 5 \text{ kVt}\cdot\text{soat}$ chegaraviy xatolik va $P = 0.954$ ishonchlilik ($t = 2$) bilan aniqlash talab etiladi. Boshlang'ich sinov dispersiyasi $\sigma^2 = 400$ ga teng. Takrormas tanlanma hajmi $n$ ni aniqlang.

**Yechish:**
Takrormas tanlanma formulasidan foydalanamiz:

$$
n = \frac{N t^2 \sigma^2}{N \Delta^2 + t^2 \sigma^2}
$$

Qiymatlarni qo'yamiz:
* $N = 10000$
* $t = 2 \implies t^2 = 4$
* $\sigma^2 = 400$
* $\Delta = 5 \implies \Delta^2 = 25$
* Surat: $10000 \cdot 4 \cdot 400 = 16000000$
* Maxraj: $10000 \cdot 25 + 4 \cdot 400 = 250000 + 1600 = 251600$

$$
n = \frac{16000000}{251600} \approx 63.59 \approx 64 \text{ ta xonadon}
$$

Agar takroriy tanlanma bo'lganida edi: $n_{takroriy} = \frac{4 \cdot 400}{25} = 64$ xonadon bo'lar edi. Ko'rib turibmizki, $N = 10000$ yetarlicha katta bo'lgani uchun farq juda kichik.

---

### 4-misol: Dinamika qatorlari tahlili
**Shart:** Korxonaning 4 yillik mahsulot ishlab chiqarish hajmi (ming dona) berilgan:

| Yil | 2021 ($y_0$) | 2022 ($y_1$) | 2023 ($y_2$) | 2024 ($y_3$) |
|---|---|---|---|---|
| Hajm | 100 | 110 | 121 | 133.1 |

O'rtacha yillik absolyut o'sish $\bar{\Delta}$ va o'rtacha yillik o'sish sur'ati $\bar{K}$ ni hisoblang.

**Yechish:**
1. Zanjirli absolyut o'sishlar:
   * $\Delta_1 = 110 - 100 = 10$
   * $\Delta_2 = 121 - 110 = 11$
   * $\Delta_3 = 133.1 - 121 = 12.1$
2. O'rtacha absolyut o'sish:

$$
\bar{\Delta} = \frac{y_3 - y_0}{3} = \frac{133.1 - 100}{3} = \frac{33.1}{3} \approx 11.033 \text{ ming dona}
$$

3. O'rtacha yillik o'sish sur'ati:

$$
\bar{K} = \sqrt[3]{\frac{y_3}{y_0}} = \sqrt[3]{\frac{133.1}{100}} = \sqrt[3]{1.331} = 1.10 \implies 110\%
$$

4. O'rtacha yillik qo'shimcha o'sish: $\bar{T}_{qo'sh} = 110\% - 100\% = 10\%$.

---

## Mustaqil yechish uchun mashqlar

1. **Mashq 1:** Quyidagi variatsion qatorda $\bar{x} = 10, M_e = 9, M_o = 7$ va $\sigma = 4$ bo'lsa, Pirsonning strukturaviy asimmetriya koeffitsiyentini toping va taqsimot shakli haqida xulosa bering.
2. **Mashq 2:** $n = 8$ ta hudud bo'yicha ishoralar solishtirilganda $C = 7$ ta moslik va $H = 1$ ta qarama-qarshilik aniqlandi. Fexner koeffitsiyentini hisoblang.
3. **Mashq 3:** Ikki omilli regressiya tenglamasi $y = 12 + 2.5 x_1 + 4 x_2$ ko'rinishida olingan. O'rtacha qiymatlar: $\bar{x}_1 = 10, \bar{x}_2 = 5, \bar{y} = 57$. Birinchi omil $x_1$ bo'yicha o'rtacha elastiklik koeffitsiyentini $\bar{E}_1$ toping va iqtisodiy talqinini yozing.
4. **Mashq 4:** 5 yil davomida tuman aholisi $y_0 = 50$ mingdan $y_5 = 73.2$ ming kishiga yetdi. O'rtacha yillik absolyut o'sish $\bar{\Delta}$ va o'rtacha yillik o'sish sur'ati $\bar{K}$ ni aniqlang.

---

### Mashqlarning javoblari:

* **1-mashq:** $A_s = \frac{\bar{x} - M_o}{\sigma} = \frac{10 - 7}{4} = \frac{3}{4} = +0.75$. Kuchli o'ng tomonli (ijobiy) asimmetriya mavjud.
* **2-mashq:** $K_\Phi = \frac{7 - 1}{7 + 1} = \frac{6}{8} = +0.75$. Belgilar o'rtasida mustahkam to'g'ri korrelyatsion bog'liqlik mavjud.
* **3-mashq:** $\bar{E}_1 = b_1 \frac{\bar{x}_1}{\bar{y}} = 2.5 \cdot \frac{10}{57} = \frac{25}{57} \approx 0.439$ ($0.44\%$). Talqini: birinchi omil $x_1$ o'z o'rtacha qiymatidan $1\%$ ga oshganda, natijaviy belgi $y$ o'rtacha $0.44\%$ ga oshadi.
* **4-mashq:** $\bar{\Delta} = \frac{73.2 - 50}{5} = \frac{23.2}{5} = 4.64$ ming kishi/yil. $\bar{K} = \sqrt[5]{\frac{73.2}{50}} = \sqrt[5]{1.464} \approx 1.0792 \implies \bar{T}_{o's} \approx 107.92\%$, o'rtacha yillik qo'shimcha o'sish esa $\approx 7.92\%$.
