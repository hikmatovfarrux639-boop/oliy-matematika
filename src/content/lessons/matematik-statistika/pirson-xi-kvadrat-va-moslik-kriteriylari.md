---
title: "Pirson $\\chi^2$ (xi-kvadrat) moslik mezoni va Gipotezalarni tekshirish"
module: "matematik-statistika"
order: 6
description: "Empirik ma'lumotlarning nazariy taqsimotga (normal, Puasson, tekis) mosligini Pirson xi-kvadrat mezoni yordamida tekshirish, erkinlik darajalari va kritik sohani aniqlash."
---

Sotsiologiya, tibbiyot, dasturiy ta'minot testi va ma'lumotlar tahlilida (Data Science) o'tkazilgan har qanday tajribadan so'ng asosiy savol paydo bo'ladi: **"Olingan amaliy natijalar biz kutgan nazariy qonuniyatga mos keladimi yoki bu shunchaki tasodifiy chetlanishmi?"**

Masalan, tanga 100 marta tashlanganda 60 marta gerb tushdi. Tanga soxtalashtirilganmi yoki bu tasodifmi? Yoki zavodda ishlab chiqarilgan detallarning o'lchami haqiqatan ham normal taqsimotga bo'ysunadimi?

Ushbu muammolarni hal qilish uchun ingliz olimi **Karl Pirson 1900-yilda $\chi^2$ (xi-kvadrat) moslik mezonini** kashf qildi.

---

## 1. Statistik gipotezalar tushunchasi

- **Nol gipoteza ($H_0$):** Boshlang'ich faraz — empirik (tajribaviy) va nazariy chastotalar o'rtasida farq yo'q, kuzatilgan farqlar faqat tasodifga bog'liq (masalan: "Taqsimot normal qonunga bo'ysunadi").
- **Muqobil gipoteza ($H_1$):** Nol gipotezaga zid fikr (masalan: "Taqsimot normal emas, farqlar tasodifiy emas").
- **Ahamiyatlilik darajasi ($\alpha$):** To'g'ri gipotezani xato rad etish (1-tur xatolik) ehtimoli. Odatda OTM masalalarida va amaliyotda $\alpha = 0.05$ ($5\%$) yoki $\alpha = 0.01$ ($1\%$) qilib belgilanadi.

---

## 2. Pirson $\chi^2$ kuzatilgan qiymati formulasi

Aytaylik, $n$ ta kuzatuv natijasida $k$ ta guruh (interval) bo'yicha ma'lumotlar olindi:
- $n_i$ — $i$-intervaldagi **empirik (amaliy kuzatilgan)** chastota;
- $n'_i = n \cdot p_i$ — $H_0$ gipoteza asosida hisoblangan **nazariy (kutilgan)** chastota (bu yerda $p_i$ — tasodifiy miqdorning shu intervalga tushish ehtimoli).

Karl Pirson kashf etgan test statistikasi:
$$
\chi^2_{\text{kuz}} = \sum_{i=1}^k \frac{(n_i - n'_i)^2}{n'_i}
$$

### Formulaning ma'nosi:
- Agar empirik natijalar nazariyaga juda yaqin bo'lsa ($n_i \approx n'_i$), u holda $\chi^2_{\text{kuz}} \approx 0$ bo'ladi.
- Agar ular orasidagi tafovut katta bo'lsa, $\chi^2_{\text{kuz}}$ juda katta musbat songa aylanadi.

---

## 3. Erkinlik darajasi ($k - r - 1$) va Qaror qabul qilish qoidasi

Kritik qiymat $\chi^2_{\text{krit}}(\alpha, \nu)$ maxsus $\chi^2$-jadvalidan quyidagi **erkinlik darajasi** $\nu$ bo'yicha topiladi:
$$
\nu = k - r - 1
$$
bu yerda:
- $k$ — intervallar (guruhlar) soni;
- $r$ — empirik ma'lumotlar bo'yicha baholangan noma'lum parametrlar soni:
  - Tekis taqsimot uchun: $r = 0$ (yoki chegaralar baholansa $r=2$);
  - Puasson taqsimoti uchun: $r = 1$ (faqat $\lambda = \bar{x}$ baholanadi);
  - Normal taqsimot uchun: $r = 2$ (ikkita parametr $\mu = \bar{x}$ va $\sigma = s$ baholanadi).

### Qaror qabul qilish mezoni:
1. Agar $\mathbf{\chi^2_{\text{kuz}} \le \chi^2_{\text{krit}}}$ bo'lsa — **Nol gipoteza $H_0$ qabul qilinadi** (farqlar tasodifiy, taqsimot qonuniyati mos keladi).
2. Agar $\mathbf{\chi^2_{\text{kuz}} > \chi^2_{\text{krit}}}$ bo'lsa — **Nol gipoteza $H_0$ rad etiladi** va $H_1$ qabul qilinadi (amaliy natijalar nazariyaga mos kelmaydi).

---

## Bitta masalani 2 xil usulda yechish va solishtirish

> **Masala:** O'yin zarchasi 120 marta tashlandi. Har bir ochko quyidagi chastotada tushdi:
> 
> | Ochko ($x_i$) | 1 | 2 | 3 | 4 | 5 | 6 |
> | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
> | **Kuzatilgan ($n_i$)** | 15 | 28 | 17 | 16 | 26 | 18 |
> 
> $\alpha = 0.05$ ahamiyatlilik darajasida zarcha to'g'ri (soxtalashtirilmagan) degan gipotezani tekshiring.

### 1-usul: Pirson $\chi^2$ jadval usuli (Standart akademik tahlil)
1. Gipotezani qo'yamiz:
   - $H_0$: Barcha ochkolar teng ehtimolli ($p_i = \frac{1}{6}$), zarcha to'g'ri.
   - $H_1$: Ochkolar ehtimolligi teng emas, zarcha soxtalashtirilgan.
2. Nazariy chastotalarni hisoblaymiz:
   
$$
   n'_i = n \cdot p_i = 120 \cdot \frac{1}{6} = 20 \quad (\text{har bir ochko uchun } 20 \text{ marta})
   
$$
3. Pirson statistikasini hisoblash jadvali:

| $i$ | $n_i$ | $n'_i$ | $n_i - n'_i$ | $(n_i - n'_i)^2$ | $\frac{(n_i - n'_i)^2}{n'_i}$ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | 15 | 20 | $-5$ | 25 | $1.25$ |
| 2 | 28 | 20 | $+8$ | 64 | $3.20$ |
| 3 | 17 | 20 | $-3$ | 9 | $0.45$ |
| 4 | 16 | 20 | $-4$ | 16 | $0.80$ |
| 5 | 26 | 20 | $+6$ | 36 | $1.80$ |
| 6 | 18 | 20 | $-2$ | 4 | $0.20$ |
| **$\sum$** | **120** | **120** | **0** | — | **$\chi^2_{\text{kuz}} = \mathbf{7.70}$** |

4. Erkinlik darajasi: $k = 6$, parametr baholanmagan ($r = 0$), demak:
   
$$
   \nu = 6 - 0 - 1 = 5
   
$$
5. Jadvaldan kritik nuqtani topamiz ($\alpha = 0.05, \nu = 5$):
   
$$
   \chi^2_{\text{krit}}(0.05; 5) = 11.07
   
$$
6. Xulosa:
   
$$
   \chi^2_{\text{kuz}} = 7.70 < \chi^2_{\text{krit}} = 11.07
   
$$
   Demak, **$H_0$ gipoteza qabul qilinadi**. Kuzatilgan og'ishlar tasodifiy bo'lib, zarcha soxtalashtirilgan deb hisoblashga asos yo'q!

### 2-usul: Tezkor qisqartirilgan hisoblash formulasi
Jadval chizmasdan formulani quyidagicha o'zgartirish mumkin:
$$
\chi^2_{\text{kuz}} = \sum_{i=1}^k \frac{n_i^2}{n'_i} - n = \frac{1}{20} \sum_{i=1}^6 n_i^2 - 120
$$
Kvadratlar yig'indisi:
$$
15^2 + 28^2 + 17^2 + 16^2 + 26^2 + 18^2 = 225 + 784 + 289 + 256 + 676 + 324 = 2554
$$
$$
\chi^2_{\text{kuz}} = \frac{2554}{20} - 120 = 127.70 - 120 = 7.70
$$

*Xulosa:* Qisqartirilgan formula hisoblashni osonlashtiradi, ammo imtihonda har bir interval bo'yicha og'ishni ko'rsatish uchun 1-jadval usuli talab qilinadi.

---

> [!WARNING] Pirson mezonini qo'llashdagi muhim shartlar
> 1. **Tanlanma hajmi yetarli bo'lishi shart:** Kamida $n \ge 50$ bo'lishi lozim.
> 2. **Kam chastotali intervallarni birlashtirish:** Agar biror intervalda nazariy chastota $n'_i < 5$ bo'lsa, uni qo'shni interval bilan birlashtirish shart, aks holda Pirson statistikasi keskin xatolik beradi!

---

## Mustaqil yechish uchun amaliy mashqlar

1. Tanga 200 marta tashlanganda 115 marta gerb va 85 marta raqam tushdi. $\alpha = 0.05$ da tanga simmetrik ekanligini $\chi^2$ mezoni bilan tekshiring ($\chi^2_{\text{krit}}(0.05; 1) = 3.84$).
2. Telefon stansiyasiga 1 minutda keladigan qo'ng'iroqlar soni bo'yicha olingan ma'lumotlarning Puasson taqsimotiga mosligini tekshiring.
3. Nima sababdan normal taqsimot tekshirilayotganda erkinlik darajasi $\nu = k - 3$ deb olinadi?
