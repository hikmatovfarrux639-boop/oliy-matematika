---
title: "Maksimal haqiqatga o'xshashlik usuli (MLE) va baholarning samaradorligi"
description: "Likelihood funksiyasi, log-likelihood, parametrlar bahosini topish va Kramer-Rao tengsizligi bo'yicha optimal baholar."
module: "matematik-statistika"
order: 13
---

## 📌 Kirish va Amaliy Mohiyati

Kuzatilgan statistik ma'lumotlar to'plami asosida ehtimollik modelining noma'lum parametrlarini baholash — butun matematik statistika, ekonometrika va sun'iy intellektning eng muhim vazifasidir. Masalan, sun'iy neyron tarmoqlaridagi yo'qotish funksiyalari (Cross-Entropy loss), logistik regressiya va zamonaviy til modellarini (LLM) o'qitish aynan ushbu tamoyilga tayanadi.

Buyuk ingliz statistigi Ronald Fisher 1922-yilda fanga **Maksimal Haqiqatga O'xshashlik Usuli** (Maximum Likelihood Estimation - MLE)ni kiritdi. Uning intuitiv falsafiy g'oyasi nihoyatda sodda va jozibador: *"Noma'lum parametr uchun shunday qiymatni tanlash kerakki, u bizning qo'limizdagi kuzatilgan tanlanmaning paydo bo'lish ehtimolini maksimal qilsin"*.

---

## 📐 Asosiy Nazariya, Qoidalar va Teoremalar

### 1. Haqiqatga o'xshashlik funksiyasi (Likelihood)

$X_1, X_2, \dots, X_n$ — taqsimot qonuni noma'lum $\theta$ parametrga bog'liq bo'lgan bosh to'plamdan olingan mustaqil tanlanma bo'lsin ($f(x; \theta)$ — diskret ehtimollik yoki uzluksiz zichlik).

Kuzatilgan ma'lumotlar $x_1, \dots, x_n$ qat'iy fiksirlanganda, $\theta$ parametrga nisbatan funksiya **haqiqatga o'xshashlik funksiyasi** deyiladi:
$$
L(\theta) = L(x_1, \dots, x_n; \theta) = \prod_{i=1}^n f(x_i; \theta)
$$

---

### 2. Log-likelihood va MLE baholash sharti

Ko'paytmadan hosila olish murakkab bo'lgani sababli, natural logarifmga o'tiladi (chunki $\ln(u)$ monoton o'suvchi funksiya bo'lib, uning maksimum nuqtasi $L(\theta)$ bilan bir xil bo'ladi):
$$
\ell(\theta) = \ln L(\theta) = \sum_{i=1}^n \ln f(x_i; \theta)
$$

Maksimum nuqtani topish uchun differensial hisobning zaruriy va yetarli shartlari tekshiriladi:
$$
\frac{d \ell(\theta)}{d \theta} = 0 \quad (\text{Haqiqatga o'xshashlik tenglamasi})
$$
$$
\frac{d^2 \ell(\theta)}{d \theta^2} < 0 \quad (\text{Lokal maksimum sharti})
$$

---

### 3. Fisher axboroti (Fisher Information)

Tanlanmaning parametr $\theta$ haqida qanchalik ko'p "axborot" tashishini ko'rsatuvchi miqdor **Fisher axborot miqdori** deyiladi:
$$
I_n(\theta) = \mathbb{E}\left[ \left( \frac{\partial \ln L}{\partial \theta} \right)^2 \right] = -\mathbb{E}\left[ \frac{\partial^2 \ln L}{\partial \theta^2} \right] = n \cdot I_1(\theta)
$$

---

### 4. Kramer-Rao tengsizligi va Samaradorlik

> **Kramer-Rao Teoremasi:**
> Har qanday siljimagan baho $\hat{\theta}$ ($\mathbb{E}[\hat{\theta}] = \theta$) ning dispersiyasi quyidagi quyi chegaradan kichik bo'la olmaydi:
> $$
> \text{Var}(\hat{\theta}) \ge \frac{1}{I_n(\theta)}
> $$

- **Samaradorlik koeffitsiyenti:**
  $$
  e(\hat{\theta}) = \frac{1}{I_n(\theta) \cdot \text{Var}(\hat{\theta})} \le 1
  $$
- Agar $e(\hat{\theta}) = 1$ bo'lsa, $\hat{\theta}$ baho **eng samarali (effektiv) baho** deb ataladi (eng kichik dispersiyaga ega optimal baho).

---

## 📝 Qadamma-qadam Yechilgan Amaliy Misollar

### 1-misol: Ko'rsatkichli taqsimot parametri $\lambda$ uchun MLE

**Masala:** $X \sim \text{Exp}(\lambda)$ ko'rsatkichli taqsimot zichligi $f(x; \lambda) = \lambda e^{-\lambda x}$ ($x \ge 0, \lambda > 0$). $X_1, \dots, X_n$ tanlanma bo'yicha $\lambda$ ning MLE bahosini toping va uning Kramer-Rao chegarasini tekshiring.

**Yechish:**
1. Haqiqatga o'xshashlik funksiyasi:
   $$
   L(\lambda) = \prod_{i=1}^n \left( \lambda e^{-\lambda x_i} \right) = \lambda^n e^{-\lambda \sum_{i=1}^n x_i}
   $$
2. Logarifmlaymiz:
   $$
   \ell(\lambda) = \ln L(\lambda) = n \ln \lambda - \lambda \sum_{i=1}^n x_i
   $$
3. $\lambda$ bo'yicha hosila olib nolga tenglashtiramiz:
   $$
   \frac{d \ell}{d \lambda} = \frac{n}{\lambda} - \sum_{i=1}^n x_i = 0 \implies \frac{n}{\lambda} = \sum_{i=1}^n x_i
   $$
   $$
   \hat{\lambda}_{MLE} = \frac{n}{\sum_{i=1}^n x_i} = \frac{1}{\bar{X}}
   $$
4. Ikkinchi hosilani tekshiramiz:
   $$
   \frac{d^2 \ell}{d \lambda^2} = -\frac{n}{\lambda^2} < 0
   $$
   Haqiqatan ham maksimum nuqta.
5. Fisher axborotini hisoblaymiz:
   $$
   I_n(\lambda) = -\mathbb{E}\left[ \frac{d^2 \ell}{d \lambda^2} \right] = \mathbb{E}\left[ \frac{n}{\lambda^2} \right] = \frac{n}{\lambda^2}
   $$
   Kramer-Rao chegarasi: $\text{Var}(\hat{\lambda}) \ge \frac{\lambda^2}{n}$.

**Javob:** $\hat{\lambda}_{MLE} = \frac{1}{\bar{X}}$.

---

### 2-misol: Bernulli taqsimoti parametrini baholash

**Masala:** $P(X = 1) = p$ va $P(X = 0) = 1 - p$. $n$ ta mustaqil sinov natijasida $p$ parametrning MLE bahosini va uning samaradorligini toping.

**Yechish:**
1. Zichlik ko'rinishi: $f(x; p) = p^x (1 - p)^{1-x}$, bu yerda $x \in \{0, 1\}$.
2. Log-likelihood funksiyasi:
   $$
   \ell(p) = \sum_{i=1}^n [x_i \ln p + (1 - x_i)\ln(1 - p)] = (\ln p)\sum_{i=1}^n x_i + \ln(1 - p)\left(n - \sum_{i=1}^n x_i\right)
   $$
3. Hosila olamiz:
   $$
   \frac{d \ell}{d p} = \frac{\sum x_i}{p} - \frac{n - \sum x_i}{1 - p} = 0 \implies (1 - p)\sum x_i = p\left(n - \sum x_i\right)
   $$
   $$
   \sum x_i - p \sum x_i = np - p \sum x_i \implies \hat{p} = \frac{1}{n}\sum_{i=1}^n x_i = \bar{X}
   $$
4. Samaradorligini tekshiramiz:
   $\mathbb{E}[\hat{p}] = \mathbb{E}[\bar{X}] = p$ (siljimagan baho).
   Dispersiyasi: $\text{Var}(\hat{p}) = \frac{\text{Var}(X)}{n} = \frac{p(1 - p)}{n}$.
5. Bitta kuzatuv uchun Fisher axboroti:
   $$
   \frac{\partial^2 \ln f}{\partial p^2} = -\frac{x}{p^2} - \frac{1-x}{(1-p)^2} \implies I_1(p) = \frac{p}{p^2} + \frac{1-p}{(1-p)^2} = \frac{1}{p(1-p)}
   $$
   $I_n(p) = \frac{n}{p(1-p)}$. Kramer-Rao chegarasi: $\frac{1}{I_n(p)} = \frac{p(1-p)}{n}$.
   Chunki $\text{Var}(\hat{p}) = \frac{1}{I_n(p)}$, bu baho **100% samarali (effektiv)**!

**Javob:** $\hat{p} = \bar{X}$, baho mutlaq samaralidir ($e = 1$).

---

### 3-misol: Normal taqsimotning $\mu$ va $\sigma^2$ parametrlarini baholash

**Masala:** $X \sim \mathcal{N}(\mu, \sigma^2)$ bo'lganda, MLE usulida $\hat{\mu}$ va $\hat{\sigma}^2$ baholarini toping.

**Yechish:**
1. Zichlik: $f(x) = \frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{(x - \mu)^2}{2\sigma^2}}$.
2. Log-likelihood funksiyasi:
   $$
   \ell(\mu, \sigma^2) = -\frac{n}{2}\ln(2\pi) - \frac{n}{2}\ln(\sigma^2) - \frac{1}{2\sigma^2}\sum_{i=1}^n (x_i - \mu)^2
   $$
3. Xususiy hosilalarni olamiz:
   - $\mu$ bo'yicha:
     $$
     \frac{\partial \ell}{\partial \mu} = \frac{1}{\sigma^2}\sum_{i=1}^n (x_i - \mu) = 0 \implies \hat{\mu} = \frac{1}{n}\sum_{i=1}^n x_i = \bar{X}
     $$
   - $\theta = \sigma^2$ bo'yicha:
     $$
     \frac{\partial \ell}{\partial \sigma^2} = -\frac{n}{2\sigma^2} + \frac{1}{2(\sigma^2)^2}\sum_{i=1}^n (x_i - \mu)^2 = 0
     $$
     $$
     \hat{\sigma}^2_{MLE} = \frac{1}{n}\sum_{i=1}^n (x_i - \bar{X})^2
     $$
4. Siljimaganlikni tahlil qilish:
   $\mathbb{E}[\hat{\mu}] = \mu$ (siljimagan).
   Lekin $\mathbb{E}[\hat{\sigma}^2_{MLE}] = \frac{n-1}{n}\sigma^2 \neq \sigma^2$ (siljigan baho!). Shuning uchun amaliyotda $s^2 = \frac{n}{n-1}\hat{\sigma}^2$ tuzatilgan bahosi ishlatiladi.

**Javob:** $\hat{\mu} = \bar{X}$ va $\hat{\sigma}^2 = \frac{1}{n}\sum_{i=1}^n (x_i - \bar{X})^2$.

---

### 4-misol: Hosilasiz MLE (Tekis taqsimot)

**Masala:** $X \sim U[0, \theta]$ tekis taqsimotda $\theta > 0$ noma'lum parametr. $X_1, \dots, X_n$ tanlanma berilgan. MLE bahosi $\hat{\theta}$ ni toping.

**Yechish:**
1. Zichlik: $f(x; \theta) = \frac{1}{\theta}$, agar $0 \le x \le \theta$, aks holda $0$.
2. Likelihood funksiyasi:
   $$
   L(\theta) = \prod_{i=1}^n \frac{1}{\theta} \cdot \mathbb{I}(x_i \le \theta) = \frac{1}{\theta^n}, \quad \text{faqat } \theta \ge \max(x_1, \dots, x_n) \text{ bo'lganda}
   $$
3. $\theta < \max(x_i)$ bo'lsa, $L(\theta) = 0$. $\theta \ge \max(x_i)$ sohada esa $L(\theta) = \theta^{-n}$ kamayuvchi funksiyadir!
4. Hosilani nolga tenglashtirib bo'lmaydi. Funksiya o'zining eng katta qiymatiga joiz sohaning eng chap chekkasida erishadi:
   $$
   \hat{\theta}_{MLE} = \max(X_1, X_2, \dots, X_n) = X_{(n)}
   $$

**Javob:** $\hat{\theta} = X_{(n)}$ (tanlanmaning maksimal elementi).

---

## ⚠️ Talabalar Ko'p Yo'l Qo'yadigan Xatolar

> [!WARNING] Imtihonda ehtiyot bo'ling!
> 1. **MLE har doim siljimagan baho beradi deb o'ylash:** Bu xato! 3-misolda ko'rganimizdek, dispersiyaning MLE bahosi $\hat{\sigma}^2 = \frac{1}{n}\sum(X_i - \bar{X})^2$ siljigan (unbiased emas), uning kutilmasi $\frac{n-1}{n}\sigma^2$ ga teng. MLE faqat asimptotik (katta $n$ larda) siljimagan bo'ladi.
> 2. **Hosilani ko'r-ko'rona nolga tenglashtirish:** 4-misoldagi tekis taqsimotda parametr taqsimot chegarasida qatnashadi. Bunday chegaraviy masalalarda hosila olinmaydi, balki argumentning joiz sohadagi minimumi olinadi.
> 3. **Logarifmlashda ko'paytuvchi sonlarni yo'qotib qo'yish:** $\ln(L)$ ni yozishda darajalarni oldinga ko'paytuvchi qilib tushirishni unutish hisoblashni chigallashtiradi.

---

## 🎯 Mustaqil Yechish Uchun Masalalar

1. Puasson taqsimoti $P(X = k) = \frac{\lambda^k e^{-\lambda}}{k!}$ uchun parametr $\lambda$ ning MLE bahosini toping.
   - *Yechish:* $\ell(\lambda) = \sum [x_i \ln\lambda - \lambda - \ln(x_i!)] = (\ln\lambda)\sum x_i - n\lambda - \text{const}$. $\frac{d\ell}{d\lambda} = \frac{\sum x_i}{\lambda} - n = 0 \implies \hat{\lambda} = \bar{X}$.
   - *Javob:* $\hat{\lambda} = \bar{X}$.

2. Geometrik taqsimot $P(X = k) = (1 - p)^{k-1} p$ ($k = 1, 2, \dots$) uchun $p$ parametrning MLE bahosini toping.
   - *Yechish:* $\ell(p) = n\ln p + \ln(1-p)\sum (x_i - 1)$. Hosilasi: $\frac{n}{p} - \frac{\sum x_i - n}{1 - p} = 0 \implies \hat{p} = \frac{1}{\bar{X}}$.
   - *Javob:* $\hat{p} = \frac{1}{\bar{X}}$.

3. Bahoning samaradorligi $e(\hat{\theta}) = 0.8$ nimani anglatadi?
   - *Yechish:* Ushbu bahoning dispersiyasi Kramer-Rao quyi chegarasidan 25% ga katta, ya'ni eng minimal mumkin bo'lgan dispersiyaga nisbatan samaradorligi 80% ni tashkil etadi.
   - *Javob:* Baho siljimagan, lekin uning dispersiyasi nazariy minimumdan biroz kattaroq.

4. Rayley taqsimoti $f(x; \sigma) = \frac{x}{\sigma^2} e^{-x^2 / (2\sigma^2)}$ ($x \ge 0$) uchun $\sigma^2$ ning MLE bahosini toping.
   - *Yechish:* $\ell = \sum \ln x_i - 2n\ln\sigma - \frac{1}{2\sigma^2}\sum x_i^2$. $\theta = \sigma^2$ deb olsak: $\hat{\sigma}^2 = \frac{1}{2n}\sum_{i=1}^n x_i^2$.
   - *Javob:* $\hat{\sigma}^2 = \frac{1}{2n}\sum_{i=1}^n X_i^2$.

---

## 💡 Xulosa va Imtihon Maslahatlari

- MLE topishning universal algoritmi:
  1. Zichliklar ko'paytmasi $L(\theta)$ ni yozing;
  2. Logarifmlang: $\ell(\theta) = \ln L(\theta)$;
  3. $\theta$ bo'yicha hosila olib, nolga tenglashtiring;
  4. Ikkinchi hosila manfiyligini tekshiring ($\ell'' < 0$).
- Katta tanlanmalarda MLE eng yaxshi statistik xususiyatlarga ega: u asimptotik siljimagan, asimptotik normal va asimptotik 100% samaralidir!
