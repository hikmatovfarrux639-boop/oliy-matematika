---
title: "Xarakteristik funksiyalar, momentlar va Markaziy Limit Teoremasi isboti"
description: "Xarakteristik funksiya phi(t) = E[e^{itX}], xossalari, yig'indilar taqsimotini topish va limit teoremalar tahlili."
module: "ehtimollar-nazariyasi"
order: 13
---

## 📌 Kirish va Amaliy Mohiyati

Ehtimollar nazariyasida ko'plab mustaqil tasodifiy miqdorlarning yig'indisi $S_n = X_1 + X_2 + \dots + X_n$ bilan ishlashga to'g'ri keladi. Biroq yig'indining zichlik funksiyasini topish uchun ko'p karrali integrallar (konvolyutsiya / o'ralma) hisoblash amalda o'ta murakkab va mashaqqatli jarayondir.

Matematik fizikada Furye almashtirishi differensial tenglamalarni yechishni tubdan soddalashtirgani kabi, ehtimollar nazariyasida **xarakteristik funksiyalar apparati** konvolyutsiya amalini oddiy algebraik ko'paytirishga aylantiradi. Ushbu kuchli qurol yordamida buyuk rus matematigi Aleksandr Lyapunov 1901-yilda ehtimollar nazariyasining eng buyuk qonunlaridan biri — **Markaziy Limit Teoremasini** to'liq va benuqson isbotlab bergan.

---

## 📐 Asosiy Nazariya, Qoidalar va Teoremalar

### 1. Xarakteristik funksiya ta'rifi

Tasodifiy miqdor $X$ ning **xarakteristik funksiyasi** deb quyidagi kompleks qiymatli funksiyaga aytiladi:
$$
\varphi_X(t) = \mathbb{E}\left[e^{itX}\right], \quad t \in \mathbb{R}
$$

Eyler formulasi ($e^{itX} = \cos(tX) + i\sin(tX)$) orqali yoyilganda:
- **Diskret taqsimot uchun:** $\varphi_X(t) = \sum_{k} e^{it x_k} p_k$
- **Uzluksiz taqsimot uchun:** $\varphi_X(t) = \int_{-\infty}^{\infty} e^{itx} f(x) \, dx$

> [!NOTE] Muhim afzalligi
> Har qanday tasodifiy miqdor uchun xarakteristik funksiya **doimo mavjuddir**, chunki $|e^{itx}| = 1$ va $|\varphi_X(t)| \le \int_{-\infty}^{\infty} |e^{itx}| f(x) dx = \int_{-\infty}^{\infty} f(x) dx = 1$.

---

### 2. Xarakteristik funksiyaning fundamental xossalari

1. **Birlik qiymat:** $\varphi_X(0) = \mathbb{E}[e^{0}] = 1$.
2. **Chegaralanganlik:** Barcha $t \in \mathbb{R}$ uchun $|\varphi_X(t)| \le 1$.
3. **Ermit simmetriyasi:** $\varphi_X(-t) = \overline{\varphi_X(t)}$ (kompleks qo'shma).
4. **Chiziqli almashtirish:** Agar $Y = aX + b$ bo'lsa:
   $$
   \varphi_{aX + b}(t) = \mathbb{E}\left[e^{it(aX + b)}\right] = e^{itb} \mathbb{E}\left[e^{i(at)X}\right] = e^{itb} \varphi_X(at)
   $$
5. **Mustaqil miqdorlar yig'indisi:** Agar $X_1, X_2, \dots, X_n$ o'zaro bog'liq bo'lmagan (mustaqil) tasodifiy miqdorlar bo'lsa, ularning yig'indisi $S_n = \sum_{k=1}^n X_k$ ning xarakteristik funksiyasi:
   $$
   \varphi_{S_n}(t) = \prod_{k=1}^n \varphi_{X_k}(t)
   $$

---

### 3. Momentlarni hosil qilish va Teylor yoyilmasi

Agar $X$ tasodifiy miqdorning $k$-tartibli momenti $\alpha_k = \mathbb{E}[X^k]$ mavjud bo'lsa, $\varphi_X(t)$ funksiya $k$ marta uzluksiz differensiallanuvchi bo'ladi:
$$
\varphi_X^{(k)}(0) = i^k \mathbb{E}[X^k] \implies \mathbb{E}[X^k] = \frac{\varphi_X^{(k)}(0)}{i^k}
$$

$t = 0$ nuqta atrofida Teylor yoyilmasi:
$$
\varphi_X(t) = 1 + it\mathbb{E}[X] - \frac{t^2}{2}\mathbb{E}[X^2] + o(t^2)
$$
Agar $\mathbb{E}[X] = 0$ va $\text{Var}(X) = \sigma^2$ bo'lsa:
$$
\varphi_X(t) = 1 - \frac{\sigma^2 t^2}{2} + o(t^2)
$$

---

### 4. Teskari almashtirish (Inversion formula)

Agar $\varphi_X(t)$ mutlaq integrallanuvchi bo'lsa ($\int_{-\infty}^{\infty} |\varphi_X(t)| dt < \infty$), zichlik funksiyasi teskari Furye integrali bilan bir qiymatli tiklanadi:
$$
f(x) = \frac{1}{2\pi} \int_{-\infty}^{\infty} e^{-itx} \varphi_X(t) \, dt
$$

---

## 📝 Qadamma-qadam Yechilgan Amaliy Misollar

### 1-misol: Puasson taqsimotining xarakteristik funksiyasi va momentlari

**Masala:** $X \sim \text{Pois}(\lambda)$ tasodifiy miqdorining xarakteristik funksiyasini toping va undan foydalanib $\mathbb{E}[X]$ hamda $\text{Var}(X)$ ni hisoblang.

**Yechish:**
1. Puasson taqsimoti ehtimolligi: $P(X = k) = \frac{\lambda^k e^{-\lambda}}{k!}, \quad k = 0, 1, 2, \dots$
2. Ta'rif bo'yicha:
   $$
   \varphi_X(t) = \sum_{k=0}^{\infty} e^{itk} \frac{\lambda^k e^{-\lambda}}{k!} = e^{-\lambda} \sum_{k=0}^{\infty} \frac{(\lambda e^{it})^k}{k!}
   $$
3. Qator yig'indisi $e^{\lambda e^{it}}$ ga teng:
   $$
   \varphi_X(t) = e^{-\lambda} \cdot e^{\lambda e^{it}} = e^{\lambda (e^{it} - 1)}
   $$
4. Birinchi va ikkinchi hosilalarni olamiz:
   $$
   \varphi'(t) = e^{\lambda(e^{it} - 1)} \cdot \lambda i e^{it} = i \lambda e^{it} \varphi_X(t)
   $$
   $t = 0$ da: $\varphi'(0) = i \lambda \cdot 1 = i \lambda$. Demak:
   $$
   \mathbb{E}[X] = \frac{\varphi'(0)}{i} = \frac{i\lambda}{i} = \lambda
   $$
5. Ikkinchi hosila:
   $$
   \varphi''(t) = i^2 \lambda e^{it} \varphi(t) + i \lambda e^{it} \varphi'(t) = -\lambda e^{it}\varphi(t) + i^2 \lambda^2 e^{2it}\varphi(t)
   $$
   $t = 0$ da: $\varphi''(0) = -\lambda - \lambda^2$. Demak:
   $$
   \mathbb{E}[X^2] = \frac{-\lambda - \lambda^2}{i^2} = \lambda + \lambda^2
   $$
6. Dispersiyani topamiz:
   $$
   \text{Var}(X) = \mathbb{E}[X^2] - (\mathbb{E}[X])^2 = (\lambda + \lambda^2) - \lambda^2 = \lambda
   $$

**Javob:** $\varphi_X(t) = e^{\lambda(e^{it}-1)}$, $\mathbb{E}[X] = \lambda, \text{Var}(X) = \lambda$.

---

### 2-misol: Puasson miqdorlari yig'indisi taqsimotini isbotlash

**Masala:** $X_1 \sim \text{Pois}(\lambda_1)$ va $X_2 \sim \text{Pois}(\lambda_2)$ mustaqil tasodifiy miqdorlar bo'lsa, $Y = X_1 + X_2$ ning taqsimotini toping.

**Yechish:**
1. Mustaqil miqdorlar yig'indisining xarakteristik funksiyasi:
   $$
   \varphi_Y(t) = \varphi_{X_1}(t) \cdot \varphi_{X_2}(t)
   $$
2. Xarakteristik funksiyalarni ko'paytiramiz:
   $$
   \varphi_Y(t) = e^{\lambda_1 (e^{it} - 1)} \cdot e^{\lambda_2 (e^{it} - 1)} = e^{(\lambda_1 + \lambda_2)(e^{it} - 1)}
   $$
3. Bu xarakteristik funksiya aynan $\lambda = \lambda_1 + \lambda_2$ parametrli Puasson taqsimotining xarakteristik funksiyasidir.
4. Xarakteristik funksiyaning yagonalik teoremasiga ko'ra, $Y \sim \text{Pois}(\lambda_1 + \lambda_2)$.

**Javob:** Yig'indi $\lambda_1 + \lambda_2$ parametrli Puasson taqsimotiga ega.

---

### 3-misol: Normal taqsimotning xarakteristik funksiyasi

**Masala:** Standart normal taqsimot $Z \sim \mathcal{N}(0, 1)$ ning xarakteristik funksiyasi $\varphi_Z(t) = e^{-t^2/2}$ ekanligini isbotlang.

**Yechish:**
1. Standart normal zichlik: $f(x) = \frac{1}{\sqrt{2\pi}} e^{-x^2/2}$.
2. Ta'rif bo'yicha integrallaymiz:
   $$
   \varphi_Z(t) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} e^{itx} e^{-x^2/2} \, dx = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} e^{-\frac{1}{2}(x^2 - 2itx)} \, dx
   $$
3. To'la kvadrat ajratamiz: $x^2 - 2itx = (x - it)^2 - (it)^2 = (x - it)^2 + t^2$.
   $$
   \varphi_Z(t) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} e^{-\frac{1}{2}(x - it)^2 - \frac{t^2}{2}} \, dx = e^{-t^2/2} \left( \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} e^{-\frac{(x - it)^2}{2}} dx \right)
   $$
4. Qavs ichidagi integral Gauss integrali bo'yicha 1 ga teng.
5. Shunday qilib:
   $$
   \varphi_Z(t) = e^{-t^2/2} \quad \blacksquare
   $$

---

### 4-misol: Markaziy Limit Teoremasining (CLT) Lyapunov usulidagi isboti

**Masala:** $X_1, X_2, \dots, X_n$ — bir xil taqsimlangan, o'zaro bog'liq bo'lmagan, $\mathbb{E}[X_i] = \mu$ va $\text{Var}(X_i) = \sigma^2$ bo'lgan tasodifiy miqdorlar bo'lsin.
Normallashtirilgan yig'indi $Z_n = \frac{\sum_{i=1}^n (X_i - \mu)}{\sigma \sqrt{n}}$ ning xarakteristik funksiyasi $n \to \infty$ da $e^{-t^2/2}$ ga intilishini isbotlang.

**Yechish:**
1. Markazlashtirilgan miqdorlarni belgilaymiz: $Y_i = \frac{X_i - \mu}{\sigma}$. Unda $\mathbb{E}[Y_i] = 0$ va $\text{Var}(Y_i) = 1$.
   U holda $Z_n = \frac{1}{\sqrt{n}} \sum_{i=1}^n Y_i$.
2. Har bir $Y_i$ ning xarakteristik funksiyasining Teylor yoyilmasi:
   $$
   \varphi_Y(u) = 1 + iu\mathbb{E}[Y] - \frac{u^2}{2}\mathbb{E}[Y^2] + o(u^2) = 1 - \frac{u^2}{2} + o(u^2)
   $$
3. $Z_n$ ning xarakteristik funksiyasini yozamiz:
   $$
   \varphi_{Z_n}(t) = \left[ \varphi_Y\left(\frac{t}{\sqrt{n}}\right) \right]^n = \left[ 1 - \frac{t^2}{2n} + o\left(\frac{t^2}{n}\right) \right]^n
   $$
4. Ajoyib limit $\lim_{n \to \infty} (1 + \frac{a_n}{n})^n = e^{\lim a_n}$ qoidasini qo'llaymiz ($a_n = -\frac{t^2}{2} + o(1)$):
   $$
   \lim_{n \to \infty} \varphi_{Z_n}(t) = \lim_{n \to \infty} \left( 1 - \frac{t^2 / 2}{n} \right)^n = e^{-t^2/2}
   $$
5. Hosil bo'lgan $e^{-t^2/2}$ standart normal taqsimot $\mathcal{N}(0, 1)$ ning xarakteristik funksiyasidir. Levi uzluksizlik teoremasiga asosan, $Z_n \xrightarrow{d} \mathcal{N}(0, 1)$ taqsimot bo'yicha yaqinlashadi! $\blacksquare$

---

## ⚠️ Talabalar Ko'p Yo'l Qo'yadigan Xatolar

> [!WARNING] Imtihonda ehtiyot bo'ling!
> 1. **Erkli bo'lmagan miqdorlar uchun ko'paytirish qoidasini qo'llash:** $\varphi_{X+Y}(t) = \varphi_X(t) \cdot \varphi_Y(t)$ formulasi **faqat va faqat $X$ va $Y$ bog'liq bo'lmagan (mustaqil)** holdagina to'g'ri! Agar miqdorlar o'zaro bog'liq bo'lsa, ularni ko'paytirib bo'lmaydi.
> 2. **Hosilada $i$ sonining darajalarini adashtirish:** $\mathbb{E}[X^k] = \frac{\varphi^{(k)}(0)}{i^k}$ da $i^2 = -1, i^3 = -i, i^4 = 1$ ekanligiga e'tibor bering. Ko'p talabalar maxrajdagi $i^k$ ni unutib, musbat dispersiya o'rniga manfiy qiymat chiqarib qo'yishadi.
> 3. **Xarakteristik funksiyani momentlarni hosil qiluvchi funksiya (MGF) bilan chalkashtirish:** MGF $M(t) = \mathbb{E}[e^{tX}]$ hamma taqsimotlar uchun ham mavjud bo'lavermaydi (masalan, Koshi taqsimotida yo'q). Xarakteristik funksiya esa ixtiyoriy taqsimot uchun doimo mavjud!

---

## 🎯 Mustaqil Yechish Uchun Masalalar

1. $P(X = 1) = p, \; P(X = 0) = 1 - p$ (Bernulli taqsimoti) xarakteristik funksiyasini toping.
   - *Yechish:* $\varphi(t) = e^{it \cdot 0}(1 - p) + e^{it \cdot 1}p = 1 - p + pe^{it}$.
   - *Javob:* $\varphi(t) = 1 + p(e^{it} - 1)$.

2. $n$ ta mustaqil bir xil Bernulli taqsimotiga ega miqdorlar yig'indisi $S_n \sim \text{Bin}(n, p)$ ning xarakteristik funksiyasini hosil qiling.
   - *Yechish:* $\varphi_{S_n}(t) = (\varphi(t))^n = (1 + p(e^{it} - 1))^n$.
   - *Javob:* $\varphi_{S_n}(t) = (1 - p + pe^{it})^n$.

3. Agar $\varphi_X(t) = \cos(t)$ bo'lsa, $X$ tasodifiy miqdorning taqsimotini aniqlang.
   - *Yechish:* $\cos(t) = \frac{e^{it} + e^{-it}}{2} = \frac{1}{2}e^{it(1)} + \frac{1}{2}e^{it(-1)}$.
   - *Javob:* $P(X = 1) = \frac{1}{2}, \; P(X = -1) = \frac{1}{2}$.

4. Koshi taqsimotining xarakteristik funksiyasi $\varphi(t) = e^{-|t|}$ berilgan. Ikki mustaqil Koshi miqdori o'rtachasi $\frac{X_1 + X_2}{2}$ qanday taqsimotga ega?
   - *Yechish:* $\varphi_{(X_1+X_2)/2}(t) = \varphi(t/2)^2 = (e^{-|t|/2})^2 = e^{-|t|}$.
   - *Javob:* O'rtacha qiymat yana aynan dastlabki Koshi taqsimotiga ega (CLT bu yerda ishlamaydi, chunki dispersiya mavjud emas).

---

## 💡 Xulosa va Imtihon Maslahatlari

- Xarakteristik funksiya — ehtimollik taqsimotining "genetik kodi"dir: agar ikkita tasodifiy miqdorning xarakteristik funksiyasi bir xil bo'lsa, ularning taqsimotlari mutlaqo teng.
- Yig'indilar bilan ishlashda ketma-ketlik:
  1. Alohida miqdorlarning $\varphi_{X_i}(t)$ larini toping;
  2. Ularni o'zaro ko'paytiring: $\varphi_S(t) = \prod \varphi_{X_i}(t)$;
  3. Hosil bo'lgan funksiyani ma'lum taqsimotlar jadvalidan tanib oling.
- Markaziy Limit Teoremasini imtihonda tushuntirishda Teylor formulasining ikkinchi tartibli hadigacha yoyilishi asosiy rolni o'ynashini ko'rsatish zarur.
