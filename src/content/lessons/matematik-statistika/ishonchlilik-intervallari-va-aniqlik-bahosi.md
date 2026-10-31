---
title: "Ishonchlilik intervallari: O'rta qiymat va dispersiyani intervalli baholash"
description: "Styudent va xi-kvadrat taqsimotlari yordamida matematik kutilma hamda dispersiya uchun ishonchlilik oralig'ini qurish."
module: "matematik-statistika"
order: 12
---

## 📌 Kirish va Amaliy Mohiyati

Statistik tahlilda bitta aniq son bilan ifodalanadigan nuqtaviy baholar (masalan, tanlanma o'rtachasi $\bar{X}$) o'rganilayotgan parametrning haqiqiy qiymatini to'liq tavsiflay olmaydi, chunki ular tasodifiy xatolikka ega. Amaliyotda — xususan, tibbiy preparatlarning ta'sirchanligini sinashda, yangi mahsulot sifati nazoratida yoki sotsiologik so'rovlarda — parametr qanday aniqlikda topilganini va qaysi chegaralar oralig'ida yotishini bilish talab qilinadi.

Buning uchun **ishonchlilik intervallari** (confidence intervals) apparati qo'llanadi. Ishonchlilik intervali oldindan belgilangan yuqori ehtimollik (masalan, 95% yoki 99%) bilan noma'lum parametrni o'z ichiga oluvchi oraliqni aniqlab beradi.

---

## 📐 Asosiy Nazariya, Qoidalar va Teoremalar

### 1. Ishonchlilik oralig'i ta'rifi

Noma'lum $\theta$ parametri uchun tanlanma asosida qurilgan ikkita statistika $\theta_1$ va $\theta_2$ ($\theta_1 < \theta_2$) quyidagi shartni qanoatlantirsa:
$$
P(\theta_1 < \theta < \theta_2) = \gamma = 1 - \alpha
$$
$(\theta_1, \theta_2)$ oralig'i $\theta$ parametri uchun **ishonchlilik oralig'i** (ishonch darajasi $\gamma = 1 - \alpha$, ahamiyatlilik darajasi esa $\alpha$) deyiladi.

---

### 2. Matematik kutilma $\mu$ uchun ishonchlilik oralig'i

Bosh to'plam normal taqsimlangan $\mathcal{N}(\mu, \sigma^2)$ bo'lsin.

#### 1-holat: Bosh dispersiya $\sigma^2$ ma'lum bo'lganda:
Standart normal taqsimot statistikasi: $Z = \frac{\bar{X} - \mu}{\sigma / \sqrt{n}} \sim \mathcal{N}(0, 1)$.
Ishonchlilik oralig'i:
$$
\bar{X} - Z_{1 - \alpha/2} \frac{\sigma}{\sqrt{n}} < \mu < \bar{X} + Z_{1 - \alpha/2} \frac{\sigma}{\sqrt{n}}
$$
bu yerda $Z_{1 - \alpha/2}$ — standart normal taqsimotning kritik nuqtasi (95% uchun $Z_{0.975} = 1.96$; 99% uchun $Z_{0.995} = 2.576$).

#### 2-holat: Bosh dispersiya $\sigma^2$ noma'lum bo'lganda (Kichik tanlanma $n < 30$):
Bosh dispersiya o'rniga tuzatilgan tanlanma dispersiyasi $s^2 = \frac{1}{n-1}\sum_{i=1}^n (X_i - \bar{X})^2$ qo'yiladi.
Statistika Styudent taqsimotiga bo'ysunadi:
$$
T = \frac{\bar{X} - \mu}{s / \sqrt{n}} \sim t(n - 1)
$$
Ishonchlilik oralig'i:
$$
\bar{X} - t_{\alpha/2, \; n-1} \frac{s}{\sqrt{n}} < \mu < \bar{X} + t_{\alpha/2, \; n-1} \frac{s}{\sqrt{n}}
$$

---

### 3. Bosh dispersiya $\sigma^2$ va standart chetlanish $\sigma$ uchun oraliq

Normal taqsimotda dispersiyani baholash **Pirson $\chi^2$ (xi-kvadrat)** taqsimotiga tayanadi:
$$
V = \frac{(n-1)s^2}{\sigma^2} \sim \chi^2(n-1)
$$

$1 - \alpha$ ishonchlilik bilan $\sigma^2$ uchun interval:
$$
\frac{(n-1)s^2}{\chi^2_{\alpha/2, \; n-1}} < \sigma^2 < \frac{(n-1)s^2}{\chi^2_{1-\alpha/2, \; n-1}}
$$

Standart chetlanish $\sigma$ uchun har bir tomondan kvadrat ildiz chiqariladi:
$$
s \sqrt{\frac{n-1}{\chi^2_{\alpha/2, \; n-1}}} < \sigma < s \sqrt{\frac{n-1}{\chi^2_{1-\alpha/2, \; n-1}}}
$$

---

### 4. Tanlanma hajmini ($n$) rejalashtirish

Agar berilgan $\varepsilon$ aniqlik chegarasi va $\gamma = 1 - \alpha$ ishonchlilik darajasi bilan $|\bar{X} - \mu| \le \varepsilon$ bo'lishi talab qilinsa, zarur bo'lgan minimal tanlanma hajmi:
$$
\varepsilon = Z_{1 - \alpha/2} \frac{\sigma}{\sqrt{n}} \implies n \ge \left( \frac{Z_{1 - \alpha/2} \cdot \sigma}{\varepsilon} \right)^2
$$

---

## 📝 Qadamma-qadam Yechilgan Amaliy Misollar

### 1-misol: Noma'lum dispersiyada Styudent taqsimoti orqali $\mu$ ni baholash

**Masala:** Yangi detalning diametrini o'lchash natijasida $n = 16$ ta detal uchun tanlanma o'rtachasi $\bar{X} = 25.4$ mm va tanlanma standart chetlanishi $s = 0.8$ mm topildi. Detalning haqiqiy o'rtacha diametri $\mu$ uchun 95% lik ($\gamma = 0.95$) ishonchlilik oralig'ini quring (erkinlik darajasi $k = 15$ da $t_{0.025, 15} = 2.131$).

**Yechish:**
1. Standart xatolikni (Standard Error) hisoblaymiz:
   $$
   SE = \frac{s}{\sqrt{n}} = \frac{0.8}{\sqrt{16}} = \frac{0.8}{4} = 0.2 \text{ mm}
   $$
2. Xatolik chegarasi (marjasi):
   $$
   \Delta = t_{\alpha/2, \; n-1} \cdot SE = 2.131 \times 0.2 = 0.4262 \text{ mm}
   $$
3. Ishonchlilik oralig'i chegaralari:
   - Quyi chegara: $\bar{X} - \Delta = 25.4 - 0.4262 = 24.9738 \text{ mm}$
   - Yuqori chegara: $\bar{X} + \Delta = 25.4 + 0.4262 = 25.8262 \text{ mm}$

**Javob:** 95% ishonchlilik bilan detalning o'rtacha diametri $(24.97, \; 25.83)$ mm oralig'ida yotadi.

---

### 2-misol: Katta tanlanma bo'yicha $\mu$ ni baholash

**Masala:** Universitetdagi $n = 100$ nafar talabaning o'rtacha haftalik kitob o'qish vaqti $\bar{X} = 14$ soat va $s = 3$ soat ekani aniqlandi. Talabalar kitob o'qishining haqiqiy kutilmasi $\mu$ uchun 99% lik ($\gamma = 0.99$) ishonchlilik oralig'ini quring ($Z_{0.005} = 2.576$).

**Yechish:**
1. Tanlanma yetarlicha katta bo'lgani sababli ($n = 100 \ge 30$), Markaziy Limit Teoremasiga ko'ra $Z$-taqsimot qo'llanadi:
   $$
   SE = \frac{s}{\sqrt{n}} = \frac{3}{\sqrt{100}} = \frac{3}{10} = 0.3 \text{ soat}
   $$
2. Aniqlik chegarasi:
   $$
   \Delta = Z_{0.995} \cdot SE = 2.576 \times 0.3 = 0.7728 \text{ soat}
   $$
3. Oraliq chegaralari:
   - Quyi: $14 - 0.7728 = 13.2272$
   - Yuqori: $14 + 0.7728 = 14.7728$

**Javob:** 99% ishonchlilik bilan o'rtacha o'qish vaqti $(13.23, \; 14.77)$ soat oralig'ida joylashgan.

---

### 3-misol: Dispersiya uchun xi-kvadrat oralig'ini qurish

**Masala:** Bir xil apparatda o'lchangan $n = 10$ ta tajriba natijasida tuzatilgan tanlanma dispersiyasi $s^2 = 2.25$ ga teng bo'ldi. O'lchash xatoligi dispersiyasi $\sigma^2$ uchun $\gamma = 0.90$ ishonchlilik oralig'ini quring.
(Jadval qiymatlari $k = 9$ uchun: $\chi^2_{0.05, 9} = 16.92$ va $\chi^2_{0.95, 9} = 3.33$).

**Yechish:**
1. Erkinlik darajasi: $k = n - 1 = 10 - 1 = 9$.
2. Hisoblaymiz: $(n - 1)s^2 = 9 \times 2.25 = 20.25$.
3. Quyi chegara:
   $$
   \sigma^2_{quyi} = \frac{(n-1)s^2}{\chi^2_{0.05, 9}} = \frac{20.25}{16.92} \approx 1.197
   $$
4. Yuqori chegara:
   $$
   \sigma^2_{yuqori} = \frac{(n-1)s^2}{\chi^2_{0.95, 9}} = \frac{20.25}{3.33} \approx 6.081
   $$

**Javob:** 90% ishonchlilik bilan dispersiya $1.20 < \sigma^2 < 6.08$ oralig'ida (standart chetlanish esa $1.09 < \sigma < 2.47$) yotadi.

---

### 4-misol: Xatolik chegarasi bo'yicha zarur tanlanma hajmini hisoblash

**Masala:** Bank mijozlarning o'rtacha oylik daromadini 95% ishonchlilik bilan aniqlamoqchi. Oldingi tadqiqotlardan bosh standart chetlanish $\sigma = 400\text{ dollar}$ ekani ma'lum. O'rtacha daromad xatoligi $\varepsilon = 50\text{ dollar}$ dan oshmasligi uchun kamida nechta mijoz so'rovda qatnashishi kerak? ($Z_{0.975} = 1.96$).

**Yechish:**
1. Hajm formulasini qo'llaymiz:
   $$
   n \ge \left( \frac{Z_{1 - \alpha/2} \cdot \sigma}{\varepsilon} \right)^2
   $$
2. Sonli qiymatlarni qo'yamiz:
   $$
   n \ge \left( \frac{1.96 \times 400}{50} \right)^2 = \left( \frac{784}{50} \right)^2 = (15.68)^2 = 245.86
   $$
3. Har doim yuqori butun songa yaxlitlanadi: $n = 246$.

**Javob:** Minimal tanlanma hajmi $n = 246$ ta mijoz bo'lishi shart.

---

## ⚠️ Talabalar Ko'p Yo'l Qo'yadigan Xatolar

> [!WARNING] Imtihonda ehtiyot bo'ling!
> 1. **"Ishonchlilik intervali $\mu$ ning tasodifiy o'zgarishini bildiradi" deb o'ylash:** Bu eng keng tarqalgan xatodir! Haqiqiy parametr $\mu$ — o'zgarmas sondir, u tasodifiy emas. Tasodifiy bo'lgan narsa — **intervalning o'zi (chegaralari)**, chunki chegaralar har safar yangi olingan tanlanmaga bog'liq ravishda o'zgaradi.
> 2. **Xi-kvadrat formulasi chegaralarini teskari qo'yish:** $\chi^2$ maxrajda turadi! Katta qiymatga ($\chi^2_{\alpha/2}$) bo'linganda kichik son (quyi chegara), kichik qiymatga ($\chi^2_{1-\alpha/2}$) bo'linganda katta son (yuqori chegara) hosil bo'ladi.
> 3. **Dispersiya noma'lum bo'lganda $Z$ ni $t$ bilan almashtirishni unutish:** Agar $n < 30$ bo'lib, $\sigma$ berilmagan bo'lsa, albatta Styudent $t$-taqsimotidan foydalanish shart.

---

## 🎯 Mustaqil Yechish Uchun Masalalar

1. Bosh to'plamdan olingan $n=64$ hajmga ega tanlanmada $\bar{X} = 50$ va $\sigma = 8$ ma'lum. 95% lik ishonchlilik oralig'ini quring ($Z_{0.975} = 1.96$).
   - *Yechish:* $SE = \frac{8}{\sqrt{64}} = 1$. $\Delta = 1.96 \times 1 = 1.96$. Oraliq: $(50 - 1.96, \; 50 + 1.96)$.
   - *Javob:* $(48.04, \; 51.96)$.

2. Nega ishonch darajasi oshirilganda (masalan, 95% dan 99% ga), ishonchlilik intervali kengayadi?
   - *Yechish:* Aniqroq kafolat (yuqori ishonch) berish uchun oraliqni kengaytirish kerak, chunki $Z_{0.995} = 2.576 > Z_{0.975} = 1.96$.
   - *Javob:* Ishonch oshsa, kritik nuqta $Z$ va interval kengligi ortadi.

3. Tanlanma hajmi 4 barobar oshirilsa, ishonchlilik intervalining kengligi qanday o'zgaradi?
   - *Yechish:* Interval kengligi $\Delta \sim \frac{1}{\sqrt{n}}$. Agar $n$ 4 marta oshsa, $\sqrt{4} = 2$ marta qisqaradi.
   - *Javob:* 2 barobar torayadi (aniqlik 2 marta ortadi).

4. Binomial taqsimotda tanlanma ulushi $\hat{p} = 0.4$ va $n = 400$ bo'lsa, ulushning 95% lik ishonchlilik oralig'ini toping.
   - *Yechish:* $SE = \sqrt{\frac{0.4 \times 0.6}{400}} = \sqrt{0.0006} \approx 0.0245$. $\Delta = 1.96 \times 0.0245 \approx 0.048$.
   - *Javob:* $(0.352, \; 0.448)$.

---

## 💡 Xulosa va Imtihon Maslahatlari

- Matematik kutilma uchun qaysi taqsimotni tanlash qoidasi:
  - $\sigma$ ma'lum $\to$ $Z$-taqsimot;
  - $\sigma$ noma'lum, lekin $n \ge 30$ $\to$ Markaziy Limit Teoremasiga ko'ra $Z$-taqsimot;
  - $\sigma$ noma'lum va $n < 30$ $\to$ Styudent $t$-taqsimoti ($df = n-1$).
- Dispersiya uchun har doim erkinlik darajasi $n-1$ bo'lgan Pirson $\chi^2$ taqsimoti qo'llanadi.
- Imtihonda oraliq chegaralarini yaxlitlashda odatda 2 yoki 3 ta o'nlik belgisigacha aniqlik yetarli bo'ladi.
