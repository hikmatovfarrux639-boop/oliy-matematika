---
title: "Statistik modellashtirish va Monte-Karlo usuli"
description: "Psevdotasodifiy sonlar, murakkab integrallarni statistik hisoblash, ehtimollik xatoligi O(1/sqrt(N)) va amaliy dasturiy modellar."
module: "matematik-statistika"
order: 14
---

## 📌 Kirish va Amaliy Mohiyati

Zamonaviy hisoblash matematikasida shunday murakkab muammolar mavjudki, ularni analitik formulalar yordamida yechishning mutlaqo iloji yo'q. Masalan, kvant mexanikasida yuzlab zarrachalarning o'zaro ta'siri, moliyaviy bozorda murakkab portfel risklarini va opsion narxlarini modellashtirish, sun'iy intellektda generativ modellar (MCMC, difuzion modellar) hamda yadro reaktorlarida neytronlarning tarqalishi.

Klassik deterministik sonli usullar (trapetsiya yoki Simpson formulalari) ko'p o'lchovli integrallarda "o'lchamlar qarg'ishi" (curse of dimensionality) tufayli ojiz qoladi. 1940-yillarda "Manxetten loyihasi" doirasida Stanislav Ulam, Jon fon Neyman va Nikolay Metropolis deterministik masalalarni tasodifiy tajribalar orqali yechish usulini yaratdilar va mashhur qimor shaharchasi sharafiga uni **Monte-Karlo usuli** deb atadilar.

---

## 📐 Asosiy Nazariya, Qoidalar va Teoremalar

### 1. Usulning matematik asosi va integrallarni hisoblash

Monte-Karlo usulining poydevori **Katta Sonlar Qonuni** (LLN) va **Markaziy Limit Teoremadir**.

Hisoblanishi kerak bo'lgan bir o'lchovli integral:
$$
I = \int_a^b g(x) \, dx
$$
Ushbu integralni $[a, b]$ oraliqda tekis taqsimlangan $X \sim U[a, b]$ tasodifiy miqdorning matematik kutilmasi shaklida ifodalash mumkin:
$$
I = (b - a) \int_a^b g(x) \frac{1}{b - a} \, dx = (b - a) \cdot \mathbb{E}[g(X)]
$$

> **Monte-Karlo statistik bahosi:**
> Agar $X_1, X_2, \dots, X_N$ — $[a, b]$ oraliqdan olingan mustaqil tekis tasodifiy sonlar bo'lsa:
> $$
> \hat{I}_N = \frac{b - a}{N} \sum_{i=1}^N g(X_i)
> $$
> Katta sonlar qonuniga binoan, $N \to \infty$ da $\hat{I}_N \xrightarrow{P} I$.

---

### 2. Xatolik chegarasi va konvergensiya tezligi

Markaziy Limit Teoremasiga ko'ra, statistik xatolik normal taqsimlanadi va uning dispersiyasi:
$$
\text{Var}(\hat{I}_N) = \frac{(b - a)^2}{N} \text{Var}(g(X)) = \frac{\sigma_g^2}{N}
$$

$1 - \alpha$ ishonchlilik bilan xatolik chegarasi:
$$
\varepsilon = |\hat{I}_N - I| \le Z_{1 - \alpha/2} \frac{\sigma_g}{\sqrt{N}} = \mathcal{O}\left(\frac{1}{\sqrt{N}}\right)
$$

> [!NOTE] Monte-Karloning buyuk afzalligi
> Klassik to'r (grid) usullarida $d$-o'lchovli fazoda xatolik $\mathcal{O}(N^{-k/d})$ bo'lib, o'lcham $d$ ortgani sari yaqinlashish deyarli to'xtaydi. Monte-Karlo usulida esa xatolik **fazoning o'lchami $d$ ga mutlaqo bog'liq emas** va har doim $\mathcal{O}(N^{-1/2})$ bo'lib qolaveradi!

---

### 3. Psevdotasodifiy sonlar va taqsimotlarni generatsiya qilish

Kompyuterda tasodifiy sonlar deterministik formulalar — **psevdotasodifiy sonlar generatorlari (PRNG)** orqali hosil qilinadi:

#### 1. Chiziqli kongruyent usul (LCG):
$$
X_{n+1} = (aX_n + c) \pmod m, \quad U_n = \frac{X_n}{m} \in [0, 1)
$$

#### 2. Teskari funksiya usuli (Inverse Transform Sampling):
Ixtiyoriy uzluksiz $F(x)$ taqsimot funksiyasi berilgan bo'lsa, agar $U \sim U[0, 1]$ bo'lsa, u holda tasodifiy miqdor:
$$
X = F^{-1}(U)
$$
aynan $F(x)$ taqsimotga ega bo'ladi.

#### 3. Boks-Myuller usuli (Normal taqsimot olish):
Ikkita mustaqil $U_1, U_2 \sim U(0, 1)$ orqali ikkita standart normal miqdor hosil qilinadi:
$$
Z_1 = \sqrt{-2\ln U_1}\cos(2\pi U_2), \quad Z_2 = \sqrt{-2\ln U_1}\sin(2\pi U_2) \sim \mathcal{N}(0, 1)
$$

---

## 📝 Qadamma-qadam Yechilgan Amaliy Misollar

### 1-misol: $\pi$ sonini geometrik Monte-Karlo orqali baholash

**Masala:** Tomoni $2$ bo'lgan kvadrat $[-1, 1] \times [-1, 1]$ ichiga chizilgan $x^2 + y^2 \le 1$ birlik aylanani qaraymiz. Monte-Karlo usuli yordamida $\pi$ sonini baholash algoritmini tushuntiring va $N = 10000$ ta nuqtadan $M = 7854$ tasi aylana ichiga tushgan bo'lsa, $\pi$ ning bahosini hamda xatoligini toping.

**Yechish:**
1. Geometrik ehtimollik:
   $$
   P = \frac{S_{aylana}}{S_{kvadrat}} = \frac{\pi \cdot 1^2}{2 \times 2} = \frac{\pi}{4} \implies \pi = 4P
   $$
2. Monte-Karlo bahosi:
   $$
   \hat{P} = \frac{M}{N} \implies \hat{\pi} = 4 \frac{M}{N} = 4 \times \frac{7854}{10000} = 3.1416
   $$
3. Bahoning dispersiyasi (Bernulli sxemasi bo'yicha):
   $$
   \text{Var}(\hat{\pi}) = 16 \frac{P(1 - P)}{N} \approx 16 \frac{\frac{\pi}{4}(1 - \frac{\pi}{4})}{10000} \approx 16 \frac{0.7854 \times 0.2146}{10000} \approx 2.696 \times 10^{-4}
   $$
4. Standart xatolik:
   $$
   SE = \sqrt{\text{Var}(\hat{\pi})} \approx \sqrt{0.0002696} \approx 0.0164
   $$

**Javob:** $\hat{\pi} \approx 3.1416$, standart xatolik $\approx 0.016$.

---

### 2-misol: Murakkab aniq integralni Monte-Karlo orqali hisoblash

**Masala:** $I = \int_0^1 e^{-x^2} dx$ Gauss integralini Monte-Karlo usuli bilan hisoblash formulasini tuzing va tanlanma $X = \{0.1, 0.4, 0.5, 0.8\}$ bo'lganda $\hat{I}_4$ ni hisoblang.

**Yechish:**
1. Integrallash oralig'i $[0, 1]$, shuning uchun $b - a = 1$.
   $$
   I = \mathbb{E}[e^{-X^2}], \quad X \sim U[0, 1]
   $$
2. Formula: $\hat{I}_N = \frac{1}{N} \sum_{i=1}^N e^{-X_i^2}$.
3. Nuqtalar bo'yicha funksiya qiymatlarini hisoblaymiz:
   - $x_1 = 0.1 \implies e^{-(0.1)^2} = e^{-0.01} \approx 0.9900$
   - $x_2 = 0.4 \implies e^{-(0.4)^2} = e^{-0.16} \approx 0.8521$
   - $x_3 = 0.5 \implies e^{-(0.5)^2} = e^{-0.25} \approx 0.7788$
   - $x_4 = 0.8 \implies e^{-(0.8)^2} = e^{-0.64} \approx 0.5273$
4. O'rtachasini topamiz:
   $$
   \hat{I}_4 = \frac{0.9900 + 0.8521 + 0.7788 + 0.5273}{4} = \frac{3.1482}{4} = 0.7871
   $$
   (Taqqoslash uchun, integralning aniq qiymati $\frac{\sqrt{\pi}}{2}\text{erf}(1) \approx 0.7468$).

**Javob:** $\hat{I}_4 \approx 0.7871$.

---

### 3-misol: Teskari almashtirish usuli bilan eksponensial tasodifiy sonlarni generatsiyalash

**Masala:** $f(x) = \lambda e^{-\lambda x}$ ($x \ge 0$) ko'rsatkichli taqsimot berilgan. Tekis taqsimlangan $U \sim U(0, 1)$ tasodifiy sonlar yordamida parametr $\lambda = 3$ bo'lgan eksponensial sonlarni generatsiyalash algoritmini chiqaring.

**Yechish:**
1. Taqsimot funksiyasini topamiz:
   $$
   F(x) = \int_0^x \lambda e^{-\lambda t} dt = 1 - e^{-\lambda x}, \quad (x \ge 0)
   $$
2. Ushbu ifodani $U$ ga tenglashtiramiz:
   $$
   1 - e^{-\lambda x} = U \implies e^{-\lambda x} = 1 - U
   $$
3. Ikkala tomonni natural logarifmlaymiz:
   $$
   -\lambda x = \ln(1 - U) \implies x = -\frac{1}{\lambda}\ln(1 - U)
   $$
4. Agar $U \sim U(0, 1)$ bo'lsa, $1 - U$ ham xuddi shunday $U(0, 1)$ tekis taqsimotga ega. Shuning uchun formulani quyidagicha yozish mumkin:
   $$
   X = -\frac{\ln(U)}{\lambda} = -\frac{\ln(U)}{3}
   $$

**Javob:** Algoritm: $U \sim U(0, 1)$ soni olinadi va $X = -\frac{1}{3}\ln(U)$ hisoblanadi.

---

### 4-misol: Ko'p o'lchovli fazoda hisoblash samaradorligini taqqoslash

**Masala:** $d = 10$ o'lchovli birlik giperkub $[0, 1]^{10}$ ustida integral hisoblanmoqda.
Har bir o'q bo'yicha atigi $m = 10$ ta bo'linish nuqtasi olinsa, trapetsiya usuli uchun qancha funksiya hisoblash talab etiladi? Nega Monte-Karlo usuli afzal?

**Yechish:**
1. Deterministik to'r usulida har bir o'lcham bo'yicha $m$ ta tugun olinsa, jami nuqtalar soni:
   $$
   N_{trap} = m^d = 10^{10} = 10\text{ milliard hisoblash}
   $$
   Agar $d = 20$ bo'lsa, $N = 10^{20}$ — buni hatto superkompyuter ham hisoblay olmaydi.
2. Monte-Karlo usulida esa o'lcham $d=10$ yoki $d=100$ bo'lishidan qat'i nazar, $N = 10^6$ (1 million) ta tasodifiy nuqta orqali $\frac{1}{\sqrt{10^6}} = 10^{-3}$ (0.1%) aniqlikdagi yechimga erishiladi.

**Javob:** Ko'p o'lchovli integrallarda Monte-Karlo "o'lchamlar qarg'ishi"ni yenguvchi yagona amaliy usuldir.

---

## ⚠️ Talabalar Ko'p Yo'l Qo'yadigan Xatolar

> [!WARNING] Amaliyotda ehtiyot bo'ling!
> 1. **Aniqlikni 10 marta oshirish uchun $N$ ni 10 marta oshirish yetarli deb o'ylash:** Xatolik $\frac{1}{\sqrt{N}}$ qonuni bo'yicha kamayadi! Xatolikni 10 barobar kamaytirish uchun tajribalar sonini **100 barobar** oshirish shart.
> 2. **Teskari almashtirishda taqsimot sohasini hisobga olmaslik:** Masalan, Koshi taqsimotida $F(x) = \frac{1}{\pi}\arctan(x) + \frac{1}{2}$ bo'lsa, $x = \tan(\pi(U - 1/2))$ bo'ladi. Argumentlar oralig'ini tekshirish lozim.
> 3. **Psevdotasodifiy sonlar sifatiga e'tibor bermaslik:** Sifatsiz generatorlarda sonlar orasida avtokorrelyatsiya paydo bo'ladi, bu esa statistik model natijalarini butunlay buzadi (Mersenne Twister generatori tavsiya etiladi).

---

## 🎯 Mustaqil Yechish Uchun Masalalar

1. Monte-Karlo usuli yordamida hisoblangan bahoning aniqligini 2 barobar yaxshilash uchun tanlanma hajmi $N$ necha marta ko'paytirilishi kerak?
   - *Yechish:* $\varepsilon \sim \frac{1}{\sqrt{N}}$. Aniqlik 2 marta ortishi uchun $\sqrt{N_{yangi}} = 2\sqrt{N} \implies N_{yangi} = 4N$.
   - *Javob:* 4 barobar ko'paytirilishi kerak.

2. $f(x) = 2x$ ($0 \le x \le 1$) uchburchaksimon zichlik berilgan. $U \sim U(0, 1)$ orqali ushbu taqsimotni generatsiya qilish formulasini toping.
   - *Yechish:* $F(x) = x^2 = U \implies X = \sqrt{U}$.
   - *Javob:* $X = \sqrt{U}$.

3. Integrallash sohasi $[-2, 3]$ bo'lganda $\int_{-2}^3 \cos(x^2) dx$ integralini hisoblash uchun Monte-Karlo bahosi qanday yoziladi?
   - *Yechish:* $b - a = 3 - (-2) = 5$. Formula: $\hat{I}_N = \frac{5}{N}\sum_{i=1}^N \cos(X_i^2)$, bu yerda $X_i \sim U[-2, 3]$.
   - *Javob:* $\hat{I}_N = \frac{5}{N}\sum_{i=1}^N \cos(X_i^2)$.

4. Nima uchun Monte-Karlo usuli 1 o'lchovli integrallarda Simpson usulidan sekinroq hisoblaydi?
   - *Yechish:* 1 o'lchovda Simpson usuli xatoligi $\mathcal{O}(N^{-4})$ bo'lib, Monte-Karloning $\mathcal{O}(N^{-1/2})$ sidan ancha tez yaqinlashadi. Monte-Karlo faqat $d \ge 4$ da yutib chiqadi.
   - *Javob:* Kichik o'lchamlarda deterministik usullarning darajali yaqinlashishi tezroq bo'ladi.

---

## 💡 Xulosa va Imtihon Maslahatlari

- Monte-Karlo — deterministik masalalarni stoxastik taqriblash san'atidir.
- Asosiy formula:
  $$
  \int_{\Omega} g(\mathbf{x}) d\mathbf{x} \approx V(\Omega) \cdot \frac{1}{N} \sum_{i=1}^N g(\mathbf{X}_i)
  $$
- Dispersiyani kamaytirish uchun "Importance Sampling" (muhim sohalardan ko'proq nuqta olish) usulini bilish imtihonlarda yuqori ball keltiradi.
