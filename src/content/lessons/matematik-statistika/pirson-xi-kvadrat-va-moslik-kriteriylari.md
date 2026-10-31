---
title: "Pirson χ² (xi-kvadrat) moslik mezoni va Gipotezalarni tekshirish"
module: "matematik-statistika"
order: 6
description: "Empirik ma'lumotlarning nazariy taqsimotga (normal, Puasson, tekis) mosligini Pirson xi-kvadrat mezoni yordamida tekshirish, erkinlik darajalari va kritik sohani aniqlash."
---

## 📌 Kirish va Geometrik/Fizik Mohiyat

Eksperimental fanlar, tibbiyot, iqtisodiyot va ma'lumotlar tahlilida (Data Science) o'tkazilgan har qanday tajribadan so'ng markaziy savol paydo bo'ladi:  
**"Biz amaliyotda kuzatgan empirik natijalar biz kutgan nazariy qonuniyatga mos keladimi yoki o'rtadagi farqlar shunchaki tasodifiy chetlanishmi?"**

Masalan:
- O'yin zari 120 marta tashlanganda "6" ochko 30 marta tushdi (nazariya bo'yicha 20 marta tushishi kerak edi). Zar soxtalashtirilganmi yoki bu tasodifiy o'yinmi?
- Genetikada Mendel qonuniga ko'ra avlodlarning belgilari $9:3:3:1$ nisbatda ajralishi kerak. Tajribada olingan sonlar ushbu nisbatga mosmi?
- Zavodda tayyorlanayotgan podshipniklar diametri haqiqatan ham Gauss (normal) taqsimotiga bo'ysunadimi?

Ushbu savollarga ob'yektiv, matematik jihatdan qat'iy javob berish uchun statistikada **Moslik mezonlari (Goodness-of-Fit Tests)** ishlab chiqilgan. Ularning eng mashhuri va eng kuchlisi 1900-yilda ingliz matematigi va biostatistika asoschisi **Karl Pirson** tomonidan taklif etilgan **$\chi^2$ (xi-kvadrat) mezoni**dir.

**Geometrik mohiyat:**  
Tajribada kuzatilgan $k$ ta guruhning chastotalarini $k$ - o'lchamli fazodagi nuqta deb qarasak, $\chi^2$ statistikasi — bu tajriba nuqtasining nazariy gipoteza belgilagan "mukammal" nuqtadan og'ish masofasining (vaznlangan kvadratining) o'lchovidir. Agar bu masofa kritik chegaradan oshmasa, gipoteza qabul qilinadi; agar masofa juda katta bo'lsa, gipoteza rad etiladi.

---

## 📐 Asosiy Nazariya, Qoidalar va Teoremalar

### 1. Gipotezalarni qo'yish

Statistik tekshirishda ikkita raqobatchi gipoteza ilgari suriladi:
- **Nol gipoteza ($H_0$):** Bosh to'plam tekshirilayotgan $F_0(x)$ nazariy taqsimot qonuniga bo'ysunadi (farqlar tasodifiy).
- **Muqobil gipoteza ($H_1$):** Bosh to'plam $F_0(x)$ nazariy taqsimotiga bo'ysunmaydi (farqlar qonuniy va ahamiyatli).

### 2. Pirson $\chi^2$ statistikasi formulasi

Tajriba natijasida hajmi $n$ ga teng bo'lgan tanlanma olinsin. Tanlanma $k$ ta oraliqqa (yoki guruhga) ajratilgan:
- $n_i$ — $i$ - guruhda amalda **kuzatilgan chastota** (empirik soni);
- $n'_i = n p_i$ — $H_0$ gipoteza o'rinli bo'lganda $i$ - guruh uchun kutilgan **nazariy chastota** (bunda $p_i$ — $i$ - oraliqqa tushishning nazariy ehtimoli).

Har doim quyidagi balans sharti bajarilishi shart:
$$
\sum_{i=1}^k n_i = n \quad \text{va} \quad \sum_{i=1}^k n'_i = n \cdot \sum_{i=1}^k p_i = n \cdot 1 = n
$$

**Pirsonning kuzatilgan mezoni $\chi_{\text{kuz}}^2$:**
$$
\chi_{\text{kuz}}^2 = \sum_{i=1}^k \frac{(n_i - n'_i)^2}{n'_i} = \sum_{i=1}^k \frac{(n_i - n p_i)^2}{n p_i}
$$
Hisoblashlarni tezlashtiruvchi muqobil formula (imtihon layfhaki):
$$
\chi_{\text{kuz}}^2 = \sum_{i=1}^k \frac{n_i^2}{n'_i} - n
$$

---

### 3. Pirson teoremasi va Erkinlik darajasi ($df$)

**Karl Pirson teoremasi (1900):**  
Tanlanma hajmi $n \to \infty$ da $\chi_{\text{kuz}}^2$ statistikasining taqsimoti boshlang'ich taqsimot shakliga bog'liq bo'lmagan holda, erkinlik darajasi $df = k - 1 - r$ bo'lgan $\chi^2$ taqsimotiga yaqinlashadi.

Bunda:
- $k$ — guruhlar (oraliqlar) soni;
- $r$ — tanlanma asosida baholangan noma'lum nazariy parametrlar soni:
  - Agar taqsimot to'liq ma'lum bo'lsa (tekis taqsimot, binomial $p$ ma'lum): $r = 0 \implies df = k - 1$;
  - Puasson taqsimoti uchun ($\lambda$ noma'lum, tanlanma o'rtachasidan $\overline{x}$ baholanadi): $r = 1 \implies df = k - 2$;
  - Normal taqsimot uchun ($\mu$ va $\sigma$ noma'lum, $\overline{x}$ va $s$ baholanadi): $r = 2 \implies df = k - 3$.

---

### 4. Qaror qabul qilish qoidasi va Kritik soha

Berilgan ahamiyatlilik darajasi $\alpha$ (odatda $\alpha = 0.05$ yoki $\alpha = 0.01$) va topilgan erkinlik darajasi $df$ bo'yicha $\chi^2$ taqsimoti jadvalidan **kritik nuqta** $\chi_{\text{krit}}^2(\alpha, df)$ topiladi:
$$
P(\chi^2 > \chi_{\text{krit}}^2) = \alpha
$$

**Qaror qabul qilish sxemasi:**
1. Agar $\chi_{\text{kuz}}^2 \le \chi_{\text{krit}}^2$ bo'lsa:  
   $H_0$ gipotezani rad etishga asos yo'q! Kuzatilgan chetlanishlar tasodifiy deb topiladi va ma'lumotlar nazariy taqsimotga **mos keladi** deb hisoblanadi.
2. Agar $\chi_{\text{kuz}}^2 > \chi_{\text{krit}}^2$ bo'lsa:  
   $H_0$ gipoteza rad etiladi va $H_1$ qabul qilinadi. Empirik ma'lumotlar nazariyaga **mos kelmaydi**!

---

### 5. Pirson mezonini qo'llashning qat'iy shartlari (Koxren qoidalari)

Pirson mezoni asimptotik (limitga asoslangan) bo'lgani sababli, uni qo'llashda quyidagi qat'iy talablarga rioya qilish shart:
1. Umumiy tanlanma hajmi yetarlicha katta bo'lishi kerak: $n \ge 50$ (ideal holda $n \ge 100$).
2. Har bir guruhdagi nazariy chastota **kamida 5 bo'lishi shart**: $n'_i \ge 5$.  
   *Agar biror oraliqda $n'_i < 5$ bo'lsa, u qo'shni oraliq bilan birlashtiriladi (chastotalari qo'shiladi) va guruhlar soni $k$ bittaga kamayadi!*

---

## 📝 Qadamma-qadam Yechilgan Universitet Misollari

### 1-misol: Tekis taqsimotga moslikni tekshirish (O'yin zari simmetriyasi)
**Shart:** O'yin zari 120 marta tashlanganda har bir ochkoning tushish chastotasi quyidagicha bo'ldi:
- 1 ochko: 15 marta
- 2 ochko: 28 marta
- 3 ochko: 16 marta
- 4 ochko: 18 marta
- 5 ochko: 25 marta
- 6 ochko: 18 marta

$\alpha = 0.05$ ahamiyatlilik darajasida zar simmetrik (tekis taqsimlangan) degan gipotezani tekshiring.

**Yechish:**
1-qadam: Gipotezalarni shakllantiramiz:
- $H_0$: Zar simmetrik, har bir ochko tushish ehtimoli $p_i = \frac{1}{6}$ ($i = 1, \dots, 6$).
- $H_1$: Zar soxtalashtirilgan, ochkolar taqsimoti tekis emas.

2-qadam: Nazariy chastotalarni hisoblaymiz:
Tanlanma hajmi $n = 120$. Har bir ochko uchun nazariy chastota:
$$
n'_i = n p_i = 120 \cdot \frac{1}{6} = 20 \quad (i = 1, 2, 3, 4, 5, 6)
$$
Barcha $n'_i = 20 \ge 5$, demak birlashtirishga hojat yo'q, $k = 6$.

3-qadam: $\chi_{\text{kuz}}^2$ hisoblash jadvalini tuzamiz:

| Ochko | $n_i$ (kuzatilgan) | $n'_i$ (nazariy) | $n_i - n'_i$ | $(n_i - n'_i)^2$ | $\frac{(n_i - n'_i)^2}{n'_i}$ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | 15 | 20 | -5 | 25 | $25/20 = 1.25$ |
| 2 | 28 | 20 | +8 | 64 | $64/20 = 3.20$ |
| 3 | 16 | 20 | -4 | 16 | $16/20 = 0.80$ |
| 4 | 18 | 20 | -2 | 4 | $4/20 = 0.20$ |
| 5 | 25 | 20 | +5 | 25 | $25/20 = 1.25$ |
| 6 | 18 | 20 | -2 | 4 | $4/20 = 0.20$ |
| **Jami**| **120** | **120** | **0** | — | **$\chi_{\text{kuz}}^2 = 6.90$** |

Demak: $\chi_{\text{kuz}}^2 = 6.90$.

4-qadam: Erkinlik darajasi va kritik qiymatni topamiz:
Hech qanday parametr tanlanmadan baholanmadi ($r = 0$).  
Erkinlik darajasi:
$$
df = k - 1 = 6 - 1 = 5
$$
$\chi^2$ taqsimoti jadvalidan $\alpha = 0.05$ va $df = 5$ uchun:
$$
\chi_{\text{krit}}^2(0.05, 5) = 11.07
$$

5-qadam: Qaror qabul qilish:
$$
\chi_{\text{kuz}}^2 = 6.90 < \chi_{\text{krit}}^2 = 11.07
$$
Kuzatilgan ko'rsatkich kritik chegaradan kichik. Demak, $H_0$ gipotezani rad etishga asos yo'q!  
Zarning chetlanishlari tasodifiy xarakterga ega, zar to'g'ri (simmetrik) deb hisoblanadi.

**Javob:** $\chi_{\text{kuz}}^2 = 6.90 < 11.07$. $H_0$ qabul qilinadi, zar simmetrik.

---

### 2-misol: Genetikada Mendel qonunini tekshirish
**Shart:** Gregor Mendel no'xatlarni chatishtirish tajribasida ikkinchi avlod duragaylarining 4 ta fenotipik guruhiga ko'ra ajralishini o'rgangan. Nazariy nisbat: $9 : 3 : 3 : 1$.  
Olingan $n = 556$ ta urug' bo'yicha amaliy natijalar:
1) Sariq va silliq: $n_1 = 315$
2) Sariq va burishgan: $n_2 = 101$
3) Yashil va silliq: $n_3 = 108$
4) Yashil va burishgan: $n_4 = 32$

$\alpha = 0.05$ darajada amaliy ma'lumotlar Mendel qonuniga mos keladimi?

**Yechish:**
1-qadam: Nazariy ehtimolliklarni aniqlaymiz:
Nisbatlar yig'indisi: $9 + 3 + 3 + 1 = 16$.
$$
p_1 = \frac{9}{16} = 0.5625, \quad p_2 = \frac{3}{16} = 0.1875, \quad p_3 = \frac{3}{16} = 0.1875, \quad p_4 = \frac{1}{16} = 0.0625
$$
2-qadam: Nazariy chastotalarni hisoblaymiz ($n = 556$):
$$
n'_1 = 556 \cdot \frac{9}{16} = 312.75
$$
$$
n'_2 = 556 \cdot \frac{3}{16} = 104.25
$$
$$
n'_3 = 556 \cdot \frac{3}{16} = 104.25
$$
$$
n'_4 = 556 \cdot \frac{1}{16} = 34.75
$$
Barcha $n'_i \ge 5$. Guruhlar soni $k = 4$.

3-qadam: $\chi_{\text{kuz}}^2$ ni hisoblaymiz:
$$
\chi_{\text{kuz}}^2 = \frac{(315 - 312.75)^2}{312.75} + \frac{(101 - 104.25)^2}{104.25} + \frac{(108 - 104.25)^2}{104.25} + \frac{(32 - 34.75)^2}{34.75}
$$
$$
= \frac{(2.25)^2}{312.75} + \frac{(-3.25)^2}{104.25} + \frac{(3.75)^2}{104.25} + \frac{(-2.75)^2}{34.75}
$$
$$
= \frac{5.0625}{312.75} + \frac{10.5625}{104.25} + \frac{14.0625}{104.25} + \frac{7.5625}{34.75}
$$
$$
\approx 0.0162 + 0.1013 + 0.1349 + 0.2176 = 0.470
$$

4-qadam: Kritik qiymat:
$df = k - 1 = 4 - 1 = 3$.  
$\chi^2$ jadvalidan: $\chi_{\text{krit}}^2(0.05, 3) = 7.81$.

5-qadam: Xulosa:
$$
\chi_{\text{kuz}}^2 = 0.470 < 7.81
$$
$\chi_{\text{kuz}}^2$ juda kichik bo'lib, mukammal moslikni ko'rsatadi. Tajriba natijalari Mendelning $9:3:3:1$ qonunini to'liq tasdiqlaydi!

**Javob:** $\chi_{\text{kuz}}^2 = 0.470 < 7.81$. Gipoteza qabul qilinadi.

---

### 3-misol: Normal taqsimotga moslik va kam sonli oraliqlarni birlashtirish
**Shart:** $n = 200$ ta detal massasi o'lchanganda 7 ta oraliq bo'yicha quyidagi empirik chastotalar $n_i$ olindi. Hisoblangan nazariy chastotalar $n'_i$ keltirilgan:

| Oraliq $i$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| $n_i$ | 4 | 18 | 48 | 62 | 44 | 20 | 4 |
| $n'_i$ | 3.2 | 16.4 | 46.8 | 67.2 | 46.8 | 16.4 | 3.2 |

Nazariy chastotalar tanlanmadan olingan o'rtacha $\overline{x}$ va standart chetlanish $s$ orqali hisoblangan. $\alpha = 0.05$ darajada normal taqsimot gipotezasini tekshiring.

**Yechish:**
1-qadam: Koxren shartini tekshiramiz ($n'_i \ge 5$):
Ko'rib turibmizki, 1-oraliqda $n'_1 = 3.2 < 5$ va 7-oraliqda $n'_7 = 3.2 < 5$.  
Shuning uchun 1-oraliqni 2-oraliqqa, 7-oraliqni esa 6-oraliqqa birlashtiramiz!

Birlashtirilgan yangi guruhlar ($k = 5$ ta bo'ladi):
- Yangi 1-guruh (1+2): $n_1^* = 4 + 18 = 22$, $n_1'^* = 3.2 + 16.4 = 19.6$.
- Yangi 2-guruh (3): $n_2^* = 48$, $n_2'^* = 46.8$.
- Yangi 3-guruh (4): $n_3^* = 62$, $n_3'^* = 67.2$.
- Yangi 4-guruh (5): $n_4^* = 44$, $n_4'^* = 46.8$.
- Yangi 5-guruh (6+7): $n_5^* = 20 + 4 = 24$, $n_5'^* = 16.4 + 3.2 = 19.6$.

2-qadam: $\chi_{\text{kuz}}^2$ ni hisoblaymiz:
$$
\chi_{\text{kuz}}^2 = \frac{(22 - 19.6)^2}{19.6} + \frac{(48 - 46.8)^2}{46.8} + \frac{(62 - 67.2)^2}{67.2} + \frac{(44 - 46.8)^2}{46.8} + \frac{(24 - 19.6)^2}{19.6}
$$
$$
= \frac{2.4^2}{19.6} + \frac{1.2^2}{46.8} + \frac{(-5.2)^2}{67.2} + \frac{(-2.8)^2}{46.8} + \frac{4.4^2}{19.6}
$$
$$
= \frac{5.76}{19.6} + \frac{1.44}{46.8} + \frac{27.04}{67.2} + \frac{7.84}{46.8} + \frac{19.36}{19.6}
$$
$$
\approx 0.2939 + 0.0308 + 0.4024 + 0.1675 + 0.9878 = 1.8824
$$
Demak: $\chi_{\text{kuz}}^2 \approx 1.88$.

3-qadam: Erkinlik darajasini aniqlaymiz:
Guruhlar soni birlashtirishdan so'ng $k = 5$.  
Ikkita parametr ($\mu$ va $\sigma$) tanlanma ma'lumotlaridan baholangan, demak $r = 2$.
$$
df = k - 1 - r = 5 - 1 - 2 = 2
$$

4-qadam: Kritik qiymat va xulosa:
Jadvaldan $\alpha = 0.05$ va $df = 2$ uchun: $\chi_{\text{krit}}^2(0.05, 2) = 5.99$.  
$$
\chi_{\text{kuz}}^2 = 1.88 < \chi_{\text{krit}}^2 = 5.99
$$
Kuzatilgan mezon kritik sohadan ancha kichik. Demak, detallar massasi haqiqatan ham **normal taqsimotga** bo'ysunadi!

**Javob:** $\chi_{\text{kuz}}^2 = 1.88 < 5.99$. Normal taqsimot gipotezasi qabul qilinadi.

---

### 4-misol: $2 \times 2$ bog'liqlik jadvali (Contingency Table)
**Shart:** Yangi dori vositasining samaradorligini tekshirish uchun 100 nafar bemorda sinov o'tkazildi:
- Yangi dori qabul qilgan 50 bemordan 40 nafari tuzaldi, 10 nafari tuzalmadi;
- Platsebo (oddiy vitamin) qabul qilgan 50 bemordan 25 nafari tuzaldi, 25 nafari tuzalmadi.

$\alpha = 0.01$ darajada yangi dorining ta'siri bilan tuzalish natijasi o'rtasida statistik bog'liqlik bormi?

**Yechish:**
1-qadam: Kuzatilgan ma'lumotlar jadvalini ($O_{ij}$) tuzamiz:

| Guruh | Tuzaldi | Tuzalmadi | Jami satr |
| :--- | :---: | :---: | :---: |
| Dori | 40 | 10 | $R_1 = 50$ |
| Platsebo | 25 | 25 | $R_2 = 50$ |
| **Jami ustun** | $C_1 = 65$ | $C_2 = 35$ | **$n = 100$** |

2-qadam: Bog'liqsizlik gipotezasi ($H_0$) bo'yicha kutilgan chastotalarni hisoblaymiz:
Formula: $E_{ij} = \frac{R_i \cdot C_j}{n}$.
- $E_{11} = \frac{50 \cdot 65}{100} = 32.5$
- $E_{12} = \frac{50 \cdot 35}{100} = 17.5$
- $E_{21} = \frac{50 \cdot 65}{100} = 32.5$
- $E_{22} = \frac{50 \cdot 35}{100} = 17.5$

3-qadam: $\chi^2$ statistikasini hisoblaymiz:
$$
\chi_{\text{kuz}}^2 = \sum \frac{(O_{ij} - E_{ij})^2}{E_{ij}} = \frac{(40 - 32.5)^2}{32.5} + \frac{(10 - 17.5)^2}{17.5} + \frac{(25 - 32.5)^2}{32.5} + \frac{(25 - 17.5)^2}{17.5}
$$
$$
= \frac{7.5^2}{32.5} + \frac{(-7.5)^2}{17.5} + \frac{(-7.5)^2}{32.5} + \frac{7.5^2}{17.5} = 2 \cdot \frac{56.25}{32.5} + 2 \cdot \frac{56.25}{17.5}
$$
$$
\approx 2 \cdot 1.7308 + 2 \cdot 3.2143 = 3.4615 + 6.4286 = 9.89
$$

4-qadam: Erkinlik darajasi va qaror:
$2 \times 2$ jadval uchun: $df = (2 - 1)(2 - 1) = 1$.  
$\chi^2$ jadvalidan $\alpha = 0.01$ va $df = 1$ uchun: $\chi_{\text{krit}}^2(0.01, 1) = 6.63$.  
$$
\chi_{\text{kuz}}^2 = 9.89 > \chi_{\text{krit}}^2 = 6.63
$$
Kuzatilgan qiymat kritik nuqtadan ancha katta! $H_0$ rad etiladi.  
Demak, yangi dori bemorlarning tuzalish ehtimolini ishonchli ravishda oshiradi (bog'liqlik mavjud).

**Javob:** $\chi_{\text{kuz}}^2 = 9.89 > 6.63$. Dori ta'siri statistik jihatdan ishonchli.

---

## ⚠️ Talabalar Eng Ko'p Yo'l Qo'yadigan Xatolar va Tuzoqlar

1. **Nazariy chastotasi kichik ($n'_i < 5$) oraliqlarni birlashtirishni unutish:**
   Agar formulada maxrajda $n'_i = 1$ yoki $2$ qolsa, $\frac{(n_i - n'_i)^2}{n'_i}$ had haddan tashqari sun'iy kattalashib ketadi va noto'g'ri xulosaga — $H_0$ ni asossiz rad etishga olib keladi.

2. **Erkinlik darajasini noto'g'ri hisoblash:**
   - Normal taqsimotda $\overline{x}$ va $s$ tanlanmadan olinganda erkinlik darajasi $k - 3$ bo'lishi kerak. Talabalar ko'pincha $k - 1$ deb olib ketishadi.
   - Guruhlar birlashtirilganda dastlabki $k$ emas, balki birlashtirilgandan keyingi yangi guruhlar soni olinishi shart!

3. **Maxrajga empirik chastota $n_i$ ni qo'yish:**
   Formulaning maxrajida **faqat nazariy chastota $n'_i$ turadi!** Talabalar formulani shoshilib $\frac{(n_i - n'_i)^2}{n_i}$ deb yozib qo'yishadi.

4. **"Gipoteza to'liq isbotlandi" deb noto'g'ri xulosa chiqarish:**
   $\chi_{\text{kuz}}^2 \le \chi_{\text{krit}}^2$ bo'lishi taqsimotning aynan shu ekanligini 100% isbotlamaydi, u faqatgina mavjud ma'lumotlar ushbu gipotezaga zid emasligini ko'rsatadi.

---

## 🎯 Mustaqil Yechish Uchun Amaliy Mashqlar va Yechimlar

### 1-mashq
Tanga 100 marta tashlanganda 60 marta gerb va 40 marta raqam tushdi. $\alpha = 0.05$ darajada tanga to'g'ri (gerb tushish ehtimoli $p = 0.5$) degan gipotezani tekshiring.

<details>
<summary>To'liq yechimi va javobi</summary>

**Yechish:**
1. Nazariy chastotalar: $n = 100$.
   $$
   n'_1 = 100 \cdot 0.5 = 50, \quad n'_2 = 100 \cdot 0.5 = 50
   $$
2. $\chi_{\text{kuz}}^2$ ni hisoblaymiz:
   $$
   \chi_{\text{kuz}}^2 = \frac{(60 - 50)^2}{50} + \frac{(40 - 50)^2}{50} = \frac{100}{50} + \frac{100}{50} = 2 + 2 = 4
   $$
3. Erkinlik darajasi: $df = k - 1 = 2 - 1 = 1$.  
   Jadvaldan $\alpha = 0.05$ va $df = 1$ uchun: $\chi_{\text{krit}}^2 = 3.84$.
4. Taqqoslash:
   $$
   \chi_{\text{kuz}}^2 = 4.0 > \chi_{\text{krit}}^2 = 3.84
   $$
   $\chi_{\text{kuz}}^2$ kritik zonaga tushdi. $5\%$ xatolik darajasida tanganing soxtalashtirilmaganligi haqidagi gipoteza **rad etiladi!**

**Javob:** $\chi_{\text{kuz}}^2 = 4.0 > 3.84$. Gipoteza rad etiladi.
</details>

---

### 2-mashq
4 ta teng oraliqqa ega tekis taqsimot gipotezasi tekshirilmoqda ($k = 4$, $r = 0$). $\alpha = 0.01$ ahamiyatlilik darajasida kritik nuqta $\chi_{\text{krit}}^2$ ni toping.

<details>
<summary>To'liq yechimi va javobi</summary>

**Yechish:**
1. Erkinlik darajasini topamiz:
   $$
   df = k - 1 = 4 - 1 = 3
   $$
2. $\chi^2$ jadvalidan $\alpha = 0.01$ va $df = 3$ ustuni va satri kesishmasidan:
   $$
   \chi_{\text{krit}}^2(0.01, 3) = 11.34
   $$

**Javob:** $\chi_{\text{krit}}^2 = 11.34$.
</details>

---

### 3-mashq
Agar $n = 150$, $k = 3$ bo'lib, kuzatilgan chastotalar $n_1 = 40, n_2 = 50, n_3 = 60$, nazariy chastotalar esa teng bo'lsa ($n'_1 = n'_2 = n'_3 = 50$), $\chi_{\text{kuz}}^2$ qiymatini hisoblang.

<details>
<summary>To'liq yechimi va javobi</summary>

**Yechish:**
$$
\chi_{\text{kuz}}^2 = \frac{(40 - 50)^2}{50} + \frac{(50 - 50)^2}{50} + \frac{(60 - 50)^2}{50} = \frac{(-10)^2}{50} + 0 + \frac{10^2}{50} = \frac{100}{50} + \frac{100}{50} = 2 + 2 = 4
$$

**Javob:** $\chi_{\text{kuz}}^2 = 4$.
</details>

---

## 💡 Imtihon Layfhaklari va Tezkor Maslahatlar

1. **Nazariy chastotalar yig'indisini nazorat qilish:**
   Jadvalni to'ldirib bo'lgach, darhol $\sum n'_i$ yig'indini hisoblang. U aniq $n$ ga teng bo'lishi shart ($\sum n'_i = n$). Agar yaxlitlashlar tufayli $0.1$ yoki $0.2$ farq qilsa, uni eng katta guruhga to'g'rilab qo'ying.

2. **$2 \times 2$ jadvallar uchun tezyurar Pirson formulasi:**
   $$
   \begin{pmatrix} a & b \\ c & d \end{pmatrix} \implies \chi^2 = \frac{n (ad - bc)^2}{(a+b)(c+d)(a+c)(b+d)}
   $$
   Ushbu formula orqali oraliq kutilgan qiymatlarni hisoblab o'tirmasdan, $\chi^2$ ni 30 soniyada topish mumkin!

3. **Ahamiyatlilik darajasi mantiqi:**
   $\alpha = 0.05$ — bu to'g'ri gipotezani bexosdan rad etib yuborish (1-tur xatolik) ehtimoli $5\%$ dan oshmasligini kafolatlaydi.
