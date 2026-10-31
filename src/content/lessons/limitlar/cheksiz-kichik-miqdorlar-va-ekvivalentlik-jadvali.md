---
title: "Cheksiz kichik miqdorlar iyerarxiyasi, o va O belgilari hamda ekvivalentlik jadvali"
description: "Cheksiz kichik miqdorlarni taqqoslash, tartibini aniqlash va asosiy ekvivalentliklar jadvalidan foydalanib limitlarni oson yechish usullari."
module: "limitlar"
order: 12
---

## 📌 Kirish va Geometrik/Fizik Ma'no

Matematik analizda murakkab ifodalarning limitini hisoblash ko'pincha vaqt talab qiladigan va chalkash almashtirishlarga olib keladi. Biroq funksiyalarning nuqta atrofidagi "xatti-harakati" sinchiklab o'rganilsa, ular nolga intilayotganda o'zlarini ancha sodda funksiyalar kabi tutishi ma'lum bo'ladi.

Masalan, fizikada mayda tebranishlar nazariyasida (matematik mayatnik harakatida) burchak kichik bo'lganda $\sin x \approx x$ deb qabul qilinadi. Bu shunchaki qo'pol taqribiy hisob emas, balki qat'iy matematik qonuniyat — **ekvivalent cheksiz kichik miqdorlar** nazariyasining amaliy ko'rinishidir.

Limitlar nazariyasida cheksiz kichik miqdorlar (nolga intiluvchi funksiyalar) va ularning o'zaro nisbatini bilish $\left[\frac{0}{0}\right]$ ko'rinishidagi noaniqliklarni bir necha soniyada, og'zaki yechish imkonini beradi.

---

## 📐 Asosiy Nazariya, Qoidalar va Teoremalar

### 1. Cheksiz kichik miqdor ta'rifi
Agar $\lim_{x \to x_0} \alpha(x) = 0$ bo'lsa, $\alpha(x)$ funksiya $x \to x_0$ da **cheksiz kichik miqdor** (yoki qisqacha *cheksiz kichik*) deyiladi.

### 2. Cheksiz kichik miqdorlarni taqqoslash
Aytaylik, $x \to x_0$ da $\alpha(x)$ va $\beta(x)$ cheksiz kichik miqdorlar bo'lsin. Ularning nisbatining limitini ko'ramiz:

$$
L = \lim_{x \to x_0} \frac{\alpha(x)}{\beta(x)}
$$

1. **Bir xil tartibli:** Agar $L = C \neq 0$ (chekli son) bo'lsa, $\alpha(x)$ va $\beta(x)$ bir xil tartibli cheksiz kichiklar deyiladi.
2. **Yuqori tartibli ($o$-belgisi):** Agar $L = 0$ bo'lsa, $\alpha(x)$ miqdor $\beta(x)$ ga nisbatan **yuqori tartibli** cheksiz kichik deyiladi va $\alpha = o(\beta)$ ("o-kichik beta") deb yoziladi. Bu $\alpha(x)$ ning nolga intilish tezligi $\beta(x)$ dan ancha yuqori ekanligini bildiradi.
3. **Quyi tartibli:** Agar $L = \infty$ bo'lsa, $\alpha(x)$ miqdor $\beta(x)$ ga nisbatan quyi tartibli cheksiz kichik deyiladi.
4. **Taqqoslanmaydigan:** Agar limit mavjud bo'lmasa (masalan, $\lim_{x \to 0} \frac{x \sin(1/x)}{x^2}$), ular taqqoslanmaydigan miqdorlar hisoblanadi.

### 3. Ekvivalent cheksiz kichiklar ($\sim$)
Agar $L = 1$, ya'ni:

$$
\lim_{x \to x_0} \frac{\alpha(x)}{\beta(x)} = 1
$$

bo'lsa, $\alpha(x)$ va $\beta(x)$ miqdorlar $x \to x_0$ da **ekvivalent cheksiz kichik miqdorlar** deyiladi va $\alpha(x) \sim \beta(x)$ kabi belgilanadi.

> **Muhim bog'liqlik:** $\alpha(x) \sim \beta(x) \iff \alpha(x) = \beta(x) + o(\beta(x))$.

### 4. Cheksiz kichik miqdorning tartibi
Agar $\lim_{x \to 0} \frac{\alpha(x)}{x^k} = C \neq 0$ ($C$ chekli son, $k > 0$) bo'lsa, $\alpha(x)$ miqdor $x$ ga nisbatan **$k$-tartibli cheksiz kichik** deyiladi, $C \cdot x^k$ esa uning **bosh qismi** deb ataladi.

### 5. Asosiy ekvivalentliklar jadvali ($x \to 0$ bo'lganda)

Quyidagi ekvivalentliklar barcha oliy matematika talabalari uchun "karra jadvali" kabi zarurdir:

| Funksiya | Ekvivalent ifodasi ($x \to 0$) | Isbot asosi |
| :--- | :--- | :--- |
| $\sin x$ | $\sim x$ | 1-ajoyib limit |
| $\tan x$ | $\sim x$ | $\sin x / \cos x$ |
| $\arcsin x$ | $\sim x$ | Teskari funksiya limiti |
| $\arctan x$ | $\sim x$ | Teskari funksiya limiti |
| $1 - \cos x$ | $\sim \frac{x^2}{2}$ | $2\sin^2(x/2)$ |
| $e^x - 1$ | $\sim x$ | 2-ajoyib limit |
| $a^x - 1$ | $\sim x \ln a$ | $e^{x \ln a} - 1$ |
| $\ln(1 + x)$ | $\sim x$ | 2-ajoyib limit |
| $\log_a(1 + x)$ | $\sim \frac{x}{\ln a}$ | Asos almashtirish |
| $(1 + x)^\alpha - 1$ | $\sim \alpha x$ | Nyuton binomi / Teylor |
| $\sqrt{1 + x} - 1$ | $\sim \frac{x}{2}$ | $\alpha = 1/2$ xususiy hol |
| $\sqrt[n]{1 + x} - 1$ | $\sim \frac{x}{n}$ | $\alpha = 1/n$ xususiy hol |

> **Umumlashma qoidasi:** Agar $\lim_{x \to x_0} u(x) = 0$ bo'lsa, yuqoridagi jadvaldagi har qanday $x$ o'rniga murakkab $u(x)$ ifodani qo'yish mumkin: masalan, $\ln(1 + \sin 3x) \sim \sin 3x \sim 3x$.

### 6. Ekvivalentliklarni almashtirish qoidasi (Teorema)
Agar $x \to x_0$ da $\alpha(x) \sim \alpha_1(x)$ va $\beta(x) \sim \beta_1(x)$ bo'lsa, u holda:

$$
\lim_{x \to x_0} \frac{\alpha(x)}{\beta(x)} = \lim_{x \to x_0} \frac{\alpha_1(x)}{\beta_1(x)}
$$

va ko'paytmada:

$$
\lim_{x \to x_0} [\alpha(x) \cdot f(x)] = \lim_{x \to x_0} [\alpha_1(x) \cdot f(x)]
$$

---

## 📝 Qadamma-qadam Yechilgan Amaliy Misollar

### 1-misol: Ko'paytma va bo'linmada ekvivalentliklarni qo'llash
Ushbu limitni hisoblang:

$$
\lim_{x \to 0} \frac{\sin 5x \cdot \ln(1 + 3x)}{x \cdot \tan 2x}
$$

**Yechilishi:**
1. $x \to 0$ da argumentlarning barchasi nolga intiladi: $5x \to 0$, $3x \to 0$, $2x \to 0$.
2. Jadvaldan foydalanib ekvivalent ifodalarni yozamiz:
   - $\sin 5x \sim 5x$
   - $\ln(1 + 3x) \sim 3x$
   - $\tan 2x \sim 2x$
3. Berilgan kasrdagi ko'paytuvchilarni ularning ekvivalentlari bilan almashtiramiz:

$$
\lim_{x \to 0} \frac{\sin 5x \cdot \ln(1 + 3x)}{x \cdot \tan 2x} = \lim_{x \to 0} \frac{(5x) \cdot (3x)}{x \cdot (2x)}
$$

4. Surat va maxrajdagi $x^2$ larni qisqartiramiz:

$$
\lim_{x \to 0} \frac{15x^2}{2x^2} = \frac{15}{2} = 7.5
$$

**Javob:** $\frac{15}{2}$

---

### 2-misol: Ildizlar va kosinus qatnashgan limit
Ushbu limitni hisoblang:

$$
\lim_{x \to 0} \frac{1 - \cos 4x}{\sqrt{1 + 3x^2} - 1}
$$

**Yechilishi:**
1. $x \to 0$ da $1 - \cos 4x \to 0$ va $\sqrt{1 + 3x^2} - 1 \to 0$. Bizda $\left[\frac{0}{0}\right]$ aniqmaslik mavjud.
2. Ekvivalentliklar jadvalidan foydalanamiz:
   - $1 - \cos u \sim \frac{u^2}{2} \implies 1 - \cos 4x \sim \frac{(4x)^2}{2} = \frac{16x^2}{2} = 8x^2$.
   - $\sqrt{1 + u} - 1 \sim \frac{u}{2} \implies \sqrt{1 + 3x^2} - 1 \sim \frac{3x^2}{2}$.
3. Ifodalarni almashtiramiz:

$$
\lim_{x \to 0} \frac{1 - \cos 4x}{\sqrt{1 + 3x^2} - 1} = \lim_{x \to 0} \frac{8x^2}{\frac{3}{2}x^2} = \frac{8}{3/2} = \frac{16}{3}
$$

**Javob:** $\frac{16}{3}$

---

### 3-misol: Cheksiz kichik miqdorning tartibi va bosh qismini topish
$\alpha(x) = \tan x - \sin x$ cheksiz kichik miqdorining $x \to 0$ da $x$ ga nisbatan tartibi va bosh qismini toping.

**Yechilishi:**
1. Ifodani ko'paytuvchilarga ajratamiz:

$$
\tan x - \sin x = \frac{\sin x}{\cos x} - \sin x = \sin x \left(\frac{1 - \cos x}{\cos x}\right) = \tan x \cdot (1 - \cos x)
$$

2. $x \to 0$ da ekvivalentliklarni qo'llaymiz:
   - $\tan x \sim x$
   - $1 - \cos x \sim \frac{x^2}{2}$
3. Demak:

$$
\tan x - \sin x \sim x \cdot \frac{x^2}{2} = \frac{1}{2}x^3
$$

4. Ta'rifga ko'ra tekshiramiz:

$$
\lim_{x \to 0} \frac{\tan x - \sin x}{x^3} = \lim_{x \to 0} \frac{\frac{1}{2}x^3}{x^3} = \frac{1}{2} \neq 0
$$

**Javob:** Tartibi $k = 3$ (uchinchi tartibli), bosh qismi $\frac{1}{2}x^3$.

---

### 4-misol: Darajali-ko'rsatkichli logarifmik ifodali nozik limit
Ushbu limitni hisoblang:

$$
\lim_{x \to 0} \frac{\ln(\cos 3x)}{\arcsin^2 2x}
$$

**Yechilishi:**
1. $\ln(\cos 3x)$ ifodasini standart ekvivalent ko'rinishga keltirish uchun $1$ qo'shib ayiramiz:
   $$\ln(\cos 3x) = \ln(1 + (\cos 3x - 1))$$
2. $x \to 0$ da $(\cos 3x - 1) \to 0$, shuning uchun $\ln(1 + u) \sim u$ formulasidan:
   $$\ln(1 + (\cos 3x - 1)) \sim \cos 3x - 1 = -(1 - \cos 3x)$$
3. $1 - \cos 3x \sim \frac{(3x)^2}{2} = \frac{9x^2}{2}$, demak:
   $$\ln(\cos 3x) \sim -\frac{9x^2}{2}$$
4. Maxrajdagi $\arcsin^2 2x$ uchun: $\arcsin 2x \sim 2x \implies \arcsin^2 2x \sim (2x)^2 = 4x^2$.
5. Limitni hisoblaymiz:

$$
\lim_{x \to 0} \frac{-\frac{9}{2}x^2}{4x^2} = -\frac{9}{8}
$$

**Javob:** $-\frac{9}{8}$

---

## ⚠️ Talabalar Ko'p Yo'l Qo'yadigan Xatolar (Tipik tuzoqlar)

1. **Yig'indi va ayirmada ekvivalentlarni ko'r-ko'rona almashtirish:**
   > ⛔ **Xato:** $\lim_{x \to 0} \frac{\tan x - \sin x}{x^3} = \lim_{x \to 0} \frac{x - x}{x^3} = 0$.
   > 
   > 💡 **Sabab:** Ekvivalentliklarni **faqat ko'paytma va bo'linmada** to'g'ridan-to'g'ri almashtirish mumkin! Agar ayirmada birinchi darajali hadlar o'zaro qisqarib ketayotgan bo'lsa, keyingi tartibli hadlar (masalan, $x^3$) yo'qolib ketadi. Bunday hollarda Teylor formulasi yoki trigonometrik almashtirishlar ishlatilishi shart.

2. **Argument nolga intilmaganda jadvaldan foydalanish:**
   Masalan, $x \to 1$ da $\sin x \sim x$ deb yozish qo'pol xatodir, chunki $\sin 1 \neq 0$. Ekvivalentlik jadvali faqat va faqat argument nolga intilgandagina o'rinlidir! Agar $x \to a$ bo'lsa, avval $t = x - a \to 0$ almashtirish bajarilishi kerak.

3. **$o$-kichik hadlarni noto'g'ri qisqartirish:**
   $o(x^2) - o(x^2) \neq 0$. Chunki $o(x^2)$ aniq funksiya emas, balki "darajasi 2 dan yuqori bo'lgan qandaydir funksiya" degan sinf belgisidir.

---

## 🎯 Mustaqil Yechish Uchun Masalalar

Quyidagi limitlarni ekvivalent cheksiz kichik miqdorlar yordamida hisoblang:

1. $\lim_{x \to 0} \frac{\arctan 4x}{\sin 7x}$
2. $\lim_{x \to 0} \frac{e^{2x} - 1}{\ln(1 - 5x)}$
3. $\lim_{x \to 0} \frac{\sqrt[3]{1 + 6x} - 1}{1 - \cos 2x}$
4. $\lim_{x \to 0} \frac{1 - \cos 6x}{x \cdot \arcsin 3x}$

<details style="margin-top: 1rem; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); cursor: pointer;">
<summary style="font-weight: 700; color: var(--primary);">Mashqlar javoblarini ko'rish</summary>

**1-masala:**
$\arctan 4x \sim 4x$, $\sin 7x \sim 7x$.
$$\lim_{x \to 0} \frac{4x}{7x} = \frac{4}{7}$$

**2-masala:**
$e^{2x} - 1 \sim 2x$, $\ln(1 - 5x) \sim -5x$.
$$\lim_{x \to 0} \frac{2x}{-5x} = -\frac{2}{5}$$

**3-masala:**
$\sqrt[3]{1 + 6x} - 1 \sim \frac{6x}{3} = 2x$, $1 - \cos 2x \sim \frac{(2x)^2}{2} = 2x^2$.
$$\lim_{x \to 0} \frac{2x}{2x^2} = \lim_{x \to 0} \frac{1}{x} = \infty \quad (\text{limit mavjud emas, } \pm\infty)$$

**4-masala:**
$1 - \cos 6x \sim \frac{36x^2}{2} = 18x^2$, $x \cdot \arcsin 3x \sim x \cdot 3x = 3x^2$.
$$\lim_{x \to 0} \frac{18x^2}{3x^2} = 6$$

</details>

---

## 💡 Xulosa va Imtihon Maslahatlari

- **Tezkor tekshiruv:** Murakkab kasr ko'rinishidagi limit berilganda birinchi navbatda har bir ko'paytuvchini alohida $x$ ning darajasi bilan almashtirib, surat va maxrajning umumiy darajalarini taqqoslang.
- Agar surat va maxrajning bosh darajalari teng bo'lsa, limit ularning koeffitsiyentlari nisbatiga teng bo'ladi.
- Agar yig'indi yoki ayirma uchrasa, avval ifodani ko'paytmaga keltirishga (masalan, umumiy ko'paytuvchini qavsdan tashqariga chiqarishga) harakat qiling, shundan keyingina ekvivalentlik jadvalini qo'llang.
- Imtihonda yechim yozayotganda doimo qaysi ekvivalentlikdan foydalanganingizni qavs ichida ko'rsatib keting (masalan: *"bu yerda $x \to 0$ da $\sin 3x \sim 3x$"*). Bu o'qituvchida to'liq ishonch uyg'otadi.
