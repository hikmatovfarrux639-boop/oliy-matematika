---
title: "Parametrik bo'lmagan statistik mezonlar: Mann-Uitni (U), Vilkokson va Kolmogorov-Smirnov mezonlari"
module: "matematik-statistika"
order: 11
description: "Taqsimot qonuni noma'lum yoki normal bo'lmaganda nima qilish kerak? Parametrik bo'lmagan mezonlar: Mann-Uitni U-mezoni, bog'liq tanlanmalar uchun Vilkokson T-mezoni, Kolmogorov-Smirnov mezoni va ranglar tahlili."
---

## 📌 Kirish va Geometrik/Fizik Mohiyat

Klassik matematik statistikada gipotezalarni tekshirishning aksariyat mashhur usullari — Styudent $t$-testi, Fisher $F$-testi, dispersiya tahlili (ANOVA) — bitta qat'iy talabga tayanadi: **bosh to'plam normal taqsimotga (Gauss qonuniga) bo'ysunishi shart!**

Ammo real hayotda ushbu shart ko'pincha qo'pol ravishda buziladi:
- Aholi daromadlari yoki xodimlar maoshi (kuchli o'ng tomonga cho'zilgan, asimmetrik taqsimot);
- Veb-sayt sahifalarining yuklanish vaqti yoki foydalanuvchilarning sessiya davomiyligi;
- Tibbiyotda bemorlarning davolanishdan keyin yashash davomiyligi;
- Sotsiologiya va psixologiyadagi balli baholashlar (masalan, Likert shkalasi: 1 — "juda yomon", 5 — "a'lo").

Agar bunday ma'lumotlarga ko'r-ko'rona Styudent $t$-testi qo'llanilsa, olingan natijalar va xulosalar mutlaqo noto'g'ri bo'ladi. Aynan shunday holatlar uchun **Parametrik bo'lmagan (Non-parametric / Distribution-free)** statistik mezonlar ishlab chiqilgan.

### Ranglar tahlilining fundamental falsafasi
Parametrik bo'lmagan usullarning asosiy kaliti — bu **Ranglashtirish (Ranking)** dir.  
Faraz qilaylik, bizda favqulodda ulkan anomaliya (outlier) mavjud: masalan, ishchilar maoshi $3, 4, 5$ million so'm va bitta korxona rahbarining maoshi $1\,000$ million so'm. O'rtacha arifmetik qiymat birdaniga 250 millionga sakrab ketadi va haqiqatni buzadi.  
Ammo biz sonlarning o'rniga ularning **o'sish tartibidagi o'rni (rangi)** ni qo'ysak:
$$
3 \to 1\text{-o'rin}, \quad 4 \to 2\text{-o'rin}, \quad 5 \to 3\text{-o'rin}, \quad 1000 \to 4\text{-o'rin}
$$
Ulkan anomaliya o'zining vayronkor ta'sirini yo'qotadi! Ranglar taqsimoti boshlang'ich taqsimot qonuniga mutlaqo bog'liq emas.

Bugungi darsimizda parametrik bo'lmagan statistikaning uchta eng mashhur mezoni bilan tanishamiz:
1. **Mann-Uitni $U$-mezoni:** Ikkita **bog'liq bo'lmagan (mustaqil)** tanlanmani taqqoslash;
2. **Vilkokson $T$-mezoni:** Ikkita **bog'liq (juft-juft)** tanlanmani taqqoslash ("davolashdan oldin" va "davolashdan keyin");
3. **Kolmogorov-Smirnov mezoni:** Uzluksiz empirik taqsimotning nazariy qonunga mosligini tekshirish.

---

## 📐 Asosiy Nazariya, Qoidalar va Teoremalar

### 1. Ranglash qoidalari va bog'langan ranglar

Ikkita tanlanma elementlari $X = \{x_1, \dots, x_{n_1}\}$ va $Y = \{y_1, \dots, y_{n_2}\}$ bitta umumiy qatorga birlashtiriladi ($N = n_1 + n_2$).  
Umumiy qator kichigidan kattasiga qarab saralanadi va har bir songa $1$ dan $N$ gacha tartib raqami — **rang** beriladi.

**Bog'langan ranglar (Tied ranks) qoidasi:**  
Agar qatorda bir nechta bir xil son uchrasa, ularning har biriga ushbu sonlar egallagan tartib raqamlarining **o'rta arifmetigi** beriladi:
*Masalan, 3 va 4-o'rinlarda bir xil $15$ soni tursa, har biriga $\frac{3 + 4}{2} = 3.5$ rangi beriladi.*

Barcha berilgan ranglar yig'indisi har doim quyidagi arifmetik progressiya yig'indisiga teng bo'lishi shart:
$$
\sum_{i=1}^N R_i = \frac{N(N + 1)}{2}
$$

---

### 2. Mann-Uitni $U$-mezoni (Mustaqil tanlanmalar uchun)

Hajmlari mos ravishda $n_1$ va $n_2$ bo'lgan ikkita mustaqil tanlanma berilgan bo'lsin.
- **Nol gipoteza ($H_0$):** Ikkala guruh o'rtasida farq yo'q (ikkala tanlanma bir xil taqsimotga ega bosh to'plamdan olingan).
- **Muqobil gipoteza ($H_1$):** Guruhlar orasidagi siljish (farq) statistik jihatdan ahamiyatli.

**Hisoblash algoritmi:**
1. Har ikkala guruh elementlariga berilgan ranglar yig'indisi $R_1$ va $R_2$ hisoblanadi.  
   Nazorat tengligi: $R_1 + R_2 = \frac{N(N + 1)}{2}$.
2. Har bir guruh uchun $U$ statistikasi hisoblanadi:
   $$
   U_1 = n_1 n_2 + \frac{n_1 (n_1 + 1)}{2} - R_1
   $$
   $$
   U_2 = n_1 n_2 + \frac{n_2 (n_2 + 1)}{2} - R_2
   $$
   Nazorat tengligi: $U_1 + U_2 = n_1 n_2$.
3. **Kuzatilgan Mann-Uitni mezoni:**
   $$
   U_{\text{kuz}} = \min(U_1, U_2)
   $$

**Qaror qabul qilish qoidasi (DIQQAT: Teskari tengsizlik!):**  
Tanlanma hajmlari $n_1, n_2$ va ahamiyatlilik darajasi $\alpha$ bo'yicha Mann-Uitni jadvalidan kritik qiymat $U_{\text{krit}}$ topiladi:
- Agar $U_{\text{kuz}} \le U_{\text{krit}}$ bo'lsa $\implies H_0$ rad etiladi! Guruhlar orasidagi farq statistik ishonchli.
- Agar $U_{\text{kuz}} > U_{\text{krit}}$ bo'lsa $\implies H_0$ qabul qilinadi. Farqlar tasodifiy.

*Nega bunday? Chunki guruhlar bir-biridan qanchalik uzoq farq qilsa, ranglar bitta tomonga to'planadi va kichik $U$ nolga intiladi!*

**Katta tanlanmalar uchun normal approksimatsiya ($n_1, n_2 > 20$):**
$$
E[U] = \frac{n_1 n_2}{2}, \quad \sigma_U = \sqrt{\frac{n_1 n_2 (n_1 + n_2 + 1)}{12}}
$$
Standart $Z$-statistika:
$$
Z = \frac{U - E[U]}{\sigma_U} \sim \mathcal{N}(0, 1)
$$

---

### 3. Vilkokson $T$-mezoni (Bog'liq / Juft tanlanmalar uchun)

Bitta obyektlar guruhida biror ta'sirdan oldin va keyin o'lchangan $n$ ta juftlik berilgan bo'lsin: $(x_1, y_1), (x_2, y_2), \dots, (x_n, y_n)$.
- **Nol gipoteza ($H_0$):** O'tkazilgan ta'sir natijalarga ijobiy yoki salbiy ta'sir ko'rsatmadi (siljish nolga teng).

**Hisoblash algoritmi:**
1. Har bir juftlik uchun farqlar hisoblanadi: $d_i = y_i - x_i$.
2. Farqi nolga teng bo'lgan ($d_i = 0$) juftliklar tahlildan chiqarib tashlanadi va $n$ kamaytiriladi.
3. Farqlarning modullari $|d_i|$ kichigidan kattasiga qarab tartiblanadi va ularga $1$ dan $n$ gacha ranglar beriladi.
4. Musbat farqlarga to'g'ri kelgan ranglar yig'indisi $T^+$ va manfiy farqlar ranglari yig'indisi $T^-$ hisoblanadi.  
   Nazorat: $T^+ + T^- = \frac{n(n + 1)}{2}$.
5. **Kuzatilgan Vilkokson mezoni:**
   $$
   T_{\text{kuz}} = \min(T^+, T^-)
   $$

**Qaror qabul qilish:**
Vilkokson jadvalidan $T_{\text{krit}}(\alpha, n)$ topiladi:
- Agar $T_{\text{kuz}} \le T_{\text{krit}}$ bo'lsa $\implies H_0$ rad etiladi (ta'sir samarali).
- Agar $T_{\text{kuz}} > T_{\text{krit}}$ bo'lsa $\implies H_0$ qabul qilinadi.

---

### 4. Kolmogorov-Smirnov mezoni

A.N. Kolmogorov tomonidan taklif etilgan ushbu mezon uzluksiz empirik taqsimot funksiyasi $F_n(x)$ ning nazariy $F_0(x)$ funksiyasidan maksimal chetlanishiga asoslanadi:
$$
D = \sup_{x} |F_n(x) - F_0(x)|
$$

**Kolmogorov teoremasi:**  
$n \to \infty$ da $\lambda = D \sqrt{n}$ o'zgaruvchi Kolmogorov taqsimotiga intiladi.  
Kritik qiymatlar:
- $\alpha = 0.05$ uchun: $\lambda_{\text{krit}} = 1.36$;
- $\alpha = 0.01$ uchun: $\lambda_{\text{krit}} = 1.63$.

Agar $\lambda_{\text{kuz}} = D \sqrt{n} \le \lambda_{\text{krit}}$ bo'lsa, gipoteza qabul qilinadi.

---

## 📝 Qadamma-qadam Yechilgan Universitet Misollari

### 1-misol: Mann-Uitni $U$-mezoni (Talabalar guruhlari reytingi)
**Shart:** Oliy matematika fanidan yangi interaktiv metodika samaradorligini tekshirish uchun ikki guruh talabalarining test natijalari (ballari) olindi:
- 1-guruh (an'anaviy metodika, $n_1 = 6$): $68, 72, 75, 78, 82, 85$
- 2-guruh (innovatsion metodika, $n_2 = 7$): $74, 80, 84, 88, 91, 93, 96$

$\alpha = 0.05$ ahamiyatlilik darajasida yangi metodika talabalar o'zlashtirishini statistik jihatdan ishonchli oshirgan deb aytish mumkinmi?

**Yechish:**
1-qadam: Gipotezalar:
- $H_0$: Ikkala metodika bo'yicha ballar taqsimoti bir xil (farq tasodifiy).
- $H_1$: 2-guruh natijalari 1-guruhnikidan yuqori.

2-qadam: Barcha $N = 6 + 7 = 13$ ta sonni bitta qatorga o'sish tartibida joylashtirib, rang beramiz:

| Ball | Guruh | Rang |
| :---: | :---: | :---: |
| 68 | 1-guruh | 1 |
| 72 | 1-guruh | 2 |
| 74 | 2-guruh | 3 |
| 75 | 1-guruh | 4 |
| 78 | 1-guruh | 5 |
| 80 | 2-guruh | 6 |
| 82 | 1-guruh | 7 |
| 84 | 2-guruh | 8 |
| 85 | 1-guruh | 9 |
| 88 | 2-guruh | 10 |
| 91 | 2-guruh | 11 |
| 93 | 2-guruh | 12 |
| 96 | 2-guruh | 13 |

3-qadam: Ranglar yig'indisini hisoblaymiz:
- 1-guruh ranglari: $R_1 = 1 + 2 + 4 + 5 + 7 + 9 = 28$.
- 2-guruh ranglari: $R_2 = 3 + 6 + 8 + 10 + 11 + 12 + 13 = 63$.

Nazorat tekshiruvi:
$$
R_1 + R_2 = 28 + 63 = 91
$$
$$
\frac{N(N + 1)}{2} = \frac{13 \cdot 14}{2} = 91 \quad (\text{to'liq to'g'ri!})
$$

4-qadam: $U_1$ va $U_2$ statistikalarni hisoblaymiz:
$$
U_1 = n_1 n_2 + \frac{n_1(n_1 + 1)}{2} - R_1 = 6 \cdot 7 + \frac{6 \cdot 7}{2} - 28 = 42 + 21 - 28 = 35
$$
$$
U_2 = n_1 n_2 + \frac{n_2(n_2 + 1)}{2} - R_2 = 6 \cdot 7 + \frac{7 \cdot 8}{2} - 63 = 42 + 28 - 63 = 7
$$
Nazorat: $U_1 + U_2 = 35 + 7 = 42 = n_1 n_2$.  
Kuzatilgan mezon:
$$
U_{\text{kuz}} = \min(35, 7) = 7
$$

5-qadam: Kritik qiymat va xulosa:
Mann-Uitni jadvalidan $n_1 = 6, n_2 = 7$ va $\alpha = 0.05$ (ikki tomonlama mezon) uchun:
$$
U_{\text{krit}} = 8
$$
Taqqoslaymiz:
$$
U_{\text{kuz}} = 7 \le U_{\text{krit}} = 8
$$
Kuzatilgan $U$ kritik nuqtadan kichik bo'ldi! Demak, $H_0$ gipoteza rad etiladi va $H_1$ qabul qilinadi.  
Yangi innovatsion metodika o'zlashtirish ko'rsatkichini ishonchli darajada oshirgan.

**Javob:** $U_{\text{kuz}} = 7 \le 8$. Metodika samaradorligi statistik tasdiqlandi.

---

### 2-misol: Vilkokson $T$-mezoni (Dori ta'sirida qon bosimi o'zgarishi)
**Shart:** Gipertoniya bilan og'rigan $n = 8$ nafar bemorga yangi gipotenziv dori berildi. Bemorlarning dori qabul qilishdan oldingi ($X$) va 2 soatdan keyingi ($Y$) sistolik qon bosimlari o'lchandi:

| Bemor | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Oldin ($X$) | 160 | 155 | 170 | 165 | 150 | 175 | 180 | 162 |
| Keyin ($Y$) | 145 | 140 | 168 | 150 | 152 | 160 | 165 | 162 |

$\alpha = 0.05$ darajada dorining bosimni pasaytirish ta'siri ishonchlimi?

**Yechish:**
1-qadam: Farqlar $d_i = Y_i - X_i$ ni hisoblaymiz:
- Bemor 1: $145 - 160 = -15$
- Bemor 2: $140 - 155 = -15$
- Bemor 3: $168 - 170 = -2$
- Bemor 4: $150 - 165 = -15$
- Bemor 5: $152 - 150 = +2$
- Bemor 6: $160 - 175 = -15$
- Bemor 7: $165 - 180 = -15$
- Bemor 8: $162 - 162 = 0$

2-qadam: Nolli farqni chiqarib tashlaymiz:  
8-bemor uchun $d_8 = 0$, uni chiqaramiz. Yangi hajm: $n = 7$.

3-qadam: Modullar $|d_i|$ bo'yicha ranglaymiz:
Modullar ro'yxati: $2, 2, 15, 15, 15, 15, 15$.
- $|d| = 2$ bo'lgan ikkita had bor (1 va 2-o'rinlar). Ularning rangi: $\frac{1 + 2}{2} = 1.5$.
- $|d| = 15$ bo'lgan beshta had bor (3, 4, 5, 6, 7-o'rinlar). Ularning rangi: $\frac{3 + 4 + 5 + 6 + 7}{5} = \frac{25}{5} = 5$.

Ranglar taqsimoti:
- Musbat farq ($d = +2$, 5-bemor): $T^+ = 1.5$.
- Manfiy farqlar (bemorlar 1, 2, 3, 4, 6, 7):  
  $T^- = 1.5 + 5 + 5 + 5 + 5 + 5 = 26.5$.

Nazorat: $T^+ + T^- = 1.5 + 26.5 = 28$.  
$\frac{n(n + 1)}{2} = \frac{7 \cdot 8}{2} = 28$ (to'g'ri!).

4-qadam: Kuzatilgan mezon:
$$
T_{\text{kuz}} = \min(T^+, T^-) = \min(1.5, 26.5) = 1.5
$$

5-qadam: Kritik qiymat va qaror:
Vilkokson jadvalidan $n = 7$ va $\alpha = 0.05$ (bir tomonlama mezon) uchun:
$$
T_{\text{krit}} = 3
$$
Taqqoslaymiz:
$$
T_{\text{kuz}} = 1.5 \le T_{\text{krit}} = 3
$$
Kuzatilgan qiymat kritik chegaradan kichik! Demak, nol gipoteza rad etiladi.  
Dori qon bosimini ishonchli tarzda pasaytiradi.

**Javob:** $T_{\text{kuz}} = 1.5 \le 3$. Qon bosimining pasayishi statistik jihatdan ishonchli.

---

### 3-misol: Katta tanlanmalar uchun Mann-Uitni $Z$-approksimatsiyasi
**Shart:** Ikkita internet-do'kon veb-saytida xaridorlarning sahifada o'tkazgan vaqtlari bo'yicha tanlanmalar olindi ($n_1 = 30, n_2 = 40$). 1-guruh ranglar yig'indisi $R_1 = 880$ bo'ldi. $\alpha = 0.05$ darajada guruhlar o'rtasida farq bormi?

**Yechish:**
1-qadam: $U_1$ statistikani hisoblaymiz:
$$
U_1 = n_1 n_2 + \frac{n_1(n_1 + 1)}{2} - R_1 = 30 \cdot 40 + \frac{30 \cdot 31}{2} - 880 = 1200 + 465 - 880 = 785
$$
Ikkinchi guruh uchun:
$$
U_2 = n_1 n_2 - U_1 = 1200 - 785 = 415
$$
Demak:
$$
U_{\text{kuz}} = \min(785, 415) = 415
$$

2-qadam: Katta tanlanmalar uchun parametrlar:
$$
E[U] = \frac{n_1 n_2}{2} = \frac{30 \cdot 40}{2} = 600
$$
$$
\sigma_U = \sqrt{\frac{n_1 n_2 (n_1 + n_2 + 1)}{12}} = \sqrt{\frac{30 \cdot 40 \cdot 71}{12}} = \sqrt{100 \cdot 71} = \sqrt{7100} \approx 84.26
$$

3-qadam: $Z$-statistika:
$$
Z = \frac{U_{\text{kuz}} - E[U]}{\sigma_U} = \frac{415 - 600}{84.26} = \frac{-185}{84.26} \approx -2.20
$$
Ikki tomonlama kritik $Z$ qiymat ($\alpha = 0.05$ da): $Z_{\text{krit}} = \pm 1.96$.  
Moduli bo'yicha: $| -2.20 | = 2.20 > 1.96$.  
Kuzatilgan ko'rsatkich kritik sohada yotadi. Demak, do'kon sahifalarida xaridorlar o'tkazgan vaqt orasida statistik jihatdan ishonchli farq mavjud!

**Javob:** $Z = -2.20$ ($|Z| > 1.96$). Farq statistik jihatdan ahamiyatli.

---

### 4-misol: Kolmogorov-Smirnov mezoni bilan tekis taqsimotni tekshirish
**Shart:** $[0, 10]$ oraliqda olingan $n = 5$ ta tasodifiy son berilgan: $1.5, 3.0, 4.5, 7.0, 9.0$.  
Ushbu sonlarning $[0, 10]$ dagi tekis taqsimotga mosligini $\alpha = 0.05$ da Kolmogorov mezoni bo'yicha tekshiring.

**Yechish:**
1-qadam: Nazariy taqsimot funksiyasi $[0, 10]$ oraliqda:
$$
F_0(x) = \frac{x}{10}
$$
2-qadam: Empirik taqsimot funksiyasi $F_n(x)$ zinapoyasimon funksiya bo'lib, har bir nuqtada $\frac{1}{n} = 0.2$ ga sakraydi:

| $i$ | $x_i$ | $F_0(x_i) = \frac{x_i}{10}$ | $F_n(x_i - 0) = \frac{i-1}{5}$ | $F_n(x_i) = \frac{i}{5}$ | $|F_n(x_i) - F_0(x_i)|$ | $|F_n(x_i - 0) - F_0(x_i)|$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | 1.5 | 0.15 | 0.00 | 0.20 | $|0.20 - 0.15| = 0.05$ | $|0.00 - 0.15| = 0.15$ |
| 2 | 3.0 | 0.30 | 0.20 | 0.40 | $|0.40 - 0.30| = 0.10$ | $|0.20 - 0.30| = 0.10$ |
| 3 | 4.5 | 0.45 | 0.40 | 0.60 | $|0.60 - 0.45| = 0.15$ | $|0.40 - 0.45| = 0.05$ |
| 4 | 7.0 | 0.70 | 0.60 | 0.80 | $|0.80 - 0.70| = 0.10$ | $|0.60 - 0.70| = 0.10$ |
| 5 | 9.0 | 0.90 | 0.80 | 1.00 | $|1.00 - 0.90| = 0.10$ | $|0.80 - 0.90| = 0.10$ |

Maksimal farq:
$$
D = \max(0.15, 0.10, \dots) = 0.15
$$

3-qadam: Kolmogorov statistikasini hisoblaymiz:
$$
\lambda = D \sqrt{n} = 0.15 \cdot \sqrt{5} \approx 0.15 \cdot 2.236 \approx 0.335
$$
Kritik chegara: $\lambda_{\text{krit}} = 1.36$.  
$$
\lambda = 0.335 < 1.36
$$
Chetlanish juda kichik, demak sonlar haqiqatan ham tekis taqsimlangan.

**Javob:** $D = 0.15, \lambda = 0.335 < 1.36$. Gipoteza qabul qilinadi.

---

## ⚠️ Talabalar Eng Ko'p Yo'l Qo'yadigan Xatolar va Tuzoqlar

1. **Kritik soha yo'nalishini adashtirish (Eng katta tuzoq!):**
   Parametrik mezonlarda ($t, F, \chi^2$) odatda mezon qancha katta bo'lsa ($> \text{krit}$), shunda $H_0$ rad etiladi. Mann-Uitni ($U$) va Vilkokson ($T$) mezonlarida esa **aksincha**:
   $$
   U_{\text{kuz}} \le U_{\text{krit}} \implies H_0 \text{ rad etiladi!}
   $$
   Talabalar bu teskari qoidani esdan chiqarib, $U_{\text{kuz}} < U_{\text{krit}}$ chiqqanda "farq yo'q" deb teskari xulosa chiqarishadi.

2. **Bog'langan ranglarni noto'g'ri berish:**
   Teng sonlar uchraganda ularga ketma-ket butun sonlarni berib yuborish. Masalan, uchta bir xil son $4, 5, 6$-o'rinda tursa, ularning har biriga $\frac{4+5+6}{3} = 5$ rangi berilishi shart.

3. **Mustaqil va bog'liq tanlanmalarni almashtirib qo'yish:**
   - Turli guruhdagi odamlar solishtirilsa — Mann-Uitni ($U$);
   - Bitta guruhdagi odamlarning "oldin" va "keyin" ko'rsatkichlari solishtirilsa — faqat Vilkokson ($T$) ishlatilishi shart!

4. **Vilkokson mezonida nolli farqlarni hisobga qo'shib yuborish:**
   Agar $d_i = y_i - x_i = 0$ bo'lsa, ushbu juftlik tahlildan butunlay o'chirilishi va $n$ kamaytirilishi shart.

---

## 🎯 Mustaqil Yechish Uchun Amaliy Mashqlar va Yechimlar

### 1-mashq
Ikkita tanlanma hajmi $n_1 = 4$ va $n_2 = 5$ bo'lsin. Umumiy saralangan qatorda 1-guruh elementlarining ranglari $1, 2, 4, 7$ bo'ldi. Mann-Uitni $U_{\text{kuz}}$ qiymatini hisoblang.

<details>
<summary>To'liq yechimi va javobi</summary>

**Yechish:**
1. 1-guruh ranglar yig'indisi:
   $$
   R_1 = 1 + 2 + 4 + 7 = 14
   $$
2. $U_1$ ni topamiz:
   $$
   U_1 = n_1 n_2 + \frac{n_1(n_1 + 1)}{2} - R_1 = 4 \cdot 5 + \frac{4 \cdot 5}{2} - 14 = 20 + 10 - 14 = 16
   $$
3. $U_2$ ni topamiz:
   $$
   U_2 = n_1 n_2 - U_1 = 20 - 16 = 4
   $$
4. Kuzatilgan mezon:
   $$
   U_{\text{kuz}} = \min(U_1, U_2) = \min(16, 4) = 4
   $$

**Javob:** $U_{\text{kuz}} = 4$.
</details>

---

### 2-mashq
Vilkokson mezonida $n = 6$ ta juftlik uchun farqlar ranglari yig'indisi $T^+ = 18$ bo'lsa, $T^-$ va $T_{\text{kuz}}$ ni toping.

<details>
<summary>To'liq yechimi va javobi</summary>

**Yechish:**
1. Jami ranglar yig'indisi:
   $$
   T^+ + T^- = \frac{n(n + 1)}{2} = \frac{6 \cdot 7}{2} = 21
   $$
2. $T^-$ ni topamiz:
   $$
   T^- = 21 - T^+ = 21 - 18 = 3
   $$
3. Kuzatilgan qiymat:
   $$
   T_{\text{kuz}} = \min(T^+, T^-) = \min(18, 3) = 3
   $$

**Javob:** $T^- = 3, \quad T_{\text{kuz}} = 3$.
</details>

---

### 3-mashq
Quyidagi ma'lumotlar to'plami uchun o'rtacha ranglarni aniqlang: $12, 15, 15, 18, 20, 20, 20, 25$.

<details>
<summary>To'liq yechimi va javobi</summary>

**Yechish:**
Jami $N = 8$ ta element:
- $12$: 1-o'rin $\implies$ rang $1$.
- $15, 15$: 2 va 3-o'rinlar $\implies$ rang $\frac{2 + 3}{2} = 2.5$ har biriga.
- $18$: 4-o'rin $\implies$ rang $4$.
- $20, 20, 20$: 5, 6 va 7-o'rinlar $\implies$ rang $\frac{5 + 6 + 7}{3} = 6$ har biriga.
- $25$: 8-o'rin $\implies$ rang $8$.

Ranglar ro'yxati: $1, 2.5, 2.5, 4, 6, 6, 6, 8$.  
Yig'indi nazorati: $1 + 2.5 + 2.5 + 4 + 6 + 6 + 6 + 8 = 36$. $\frac{8 \cdot 9}{2} = 36$.

**Javob:** $1; 2.5; 2.5; 4; 6; 6; 6; 8$.
</details>

---

## 💡 Imtihon Layfhaklari va Tezkor Maslahatlar

1. **Ranglar yig'indisini 5 soniyada tekshirish:**
   Ranglarni qo'yib bo'lgach, darhol $R_1 + R_2 = \frac{N(N+1)}{2}$ ekanini tekshiring. Agar yig'indi to'g'ri chiqmasa, sonlarni qayta sanab o'tirmang — demak, bog'langan ranglarning o'rta arifmetigida xato qilgansiz.

2. **$U_1 + U_2 = n_1 n_2$ qoidasi:**
   $U_2$ ni ikkinchi marta uzun formula bilan hisoblab o'tirmang! Shunchaki $U_2 = n_1 n_2 - U_1$ qilib oling. Bu vaqtingizni kamida 2 daqiqaga tejaydi.

3. **Qachon qaysi mezonni tanlash kerak? (Imtihon shpargalkasi):**
   - Agar bosh to'plam normal taqsimlangan bo'lsa $\to$ Styudent $t$-testi;
   - Agar taqsimot noma'lum yoki normal emas, va 2 ta mustaqil guruh bo'lsa $\to$ **Mann-Uitni $U$-mezoni**;
   - Agar taqsimot noma'lum, va bitta guruhda "oldin/keyin" bo'lsa $\to$ **Vilkokson $T$-mezoni**;
   - Agar butun uzluksiz grafik taqsimoti tekshirilsa $\to$ **Kolmogorov-Smirnov mezoni**.
