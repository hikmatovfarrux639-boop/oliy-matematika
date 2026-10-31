---
title: "Bir tomonlama limitlar, uzilish turlari va Kantor tekis uzluksizlik teoremasi"
description: "Chap va o'ng limitlar, Bolsano-Koshi oraliq qiymat teoremalari hamda funksiyaning tekis uzluksizligi."
module: "limitlar"
order: 14
---

## 📌 Kirish va Geometrik/Fizik Ma'no

Kundalik hayotda va muhandislikda ko'plab jarayonlar silliq va uzluksiz kechadi deb tasavvur qilinadi. Masalan, harakatlanayotgan avtomobil tezligi bir zumda $0$ dan $100\text{ km/soat}$ ga sakrab o'tolmaydi — u oraliqdagi barcha tezliklarni bosib o'tadi. Bu xususiyat matematikada **Bolsano-Koshi oraliq qiymat teoremasi** bilan asoslanadi.

Biroq texnikada "sakrash" hodisalari ham bisyor: elektr zanjiridagi kalit ulanganda tok kuchi noldan sakrab ko'tariladi, kvant mexanikasida energiya sathlari diskret o'zgaradi, raqamli signallarda esa qiymatlar faqat $0$ va $1$ lardan iborat bo'ladi. Bunday keskin sakrashlar va portlashsimon cheksizliklar matematik analizda **bir tomonlama limitlar** va **uzilish nuqtalari** orqali modellashtiriladi.

Bundan tashqari, funksiyaning berilgan butun bir oraliqda qanchalik "turg'un" uzluksiz ekanligini ifodalash uchun oddiy uzluksizlik yetarli bo'lmay qoladi — bu yerda matematika olamining eng chuqur tushunchalaridan biri bo'lgan **tekis uzluksizlik** va **Kantor teoremasi** maydonga chiqadi.

---

## 📐 Asosiy Nazariya, Qoidalar va Teoremalar

### 1. Bir tomonlama limitlar ta'rifi
- **Chap limit:** Agar $x$ o'zgaruvchi $x_0$ nuqtaga faqat chap tomondan ($x < x_0$) intilsa:
  $$f(x_0 - 0) = \lim_{x \to x_0^-} f(x)$$
- **O'ng limit:** Agar $x$ o'zgaruvchi $x_0$ nuqtaga faqat o'ng tomondan ($x > x_0$) intilsa:
  $$f(x_0 + 0) = \lim_{x \to x_0^+} f(x)$$

> **Limit mavjudligining zaruriy va yetarli sharti:**
> Funksiyaning $x \to x_0$ da ikki tomonlama umumiy limiti mavjud va $L$ ga teng bo'lishi uchun uning chap va o'ng limitlari mavjud hamda bir-biriga teng bo'lishi shart:
> $$\lim_{x \to x_0^-} f(x) = \lim_{x \to x_0^+} f(x) = L \iff \lim_{x \to x_0} f(x) = L$$

### 2. Funksiyaning nuqtada uzluksizligi
$f(x)$ funksiya $x_0$ nuqtada uzluksiz bo'lishi uchun quyidagi uchta shart bajarilishi zarur:
1. $f(x)$ funksiya $x_0$ nuqtada aniqlangan bo'lishi;
2. $\lim_{x \to x_0} f(x)$ chekli limiti mavjud bo'lishi;
3. Limit qiymati funksiyaning shu nuqtadagi qiymatiga teng bo'lishi:
   $$\lim_{x \to x_0} f(x) = f(x_0) \iff f(x_0 - 0) = f(x_0 + 0) = f(x_0)$$

### 3. Uzilish nuqtalarining qat'iy klassifikatsiyasi

Agar yuqoridagi uch shartdan kamida bittasi buzilsa, $x_0$ **uzilish nuqtasi** deyiladi.

| Uzilish turi | Ta'rifi | Geometrik ko'rinishi |
| :--- | :--- | :--- |
| **Yo'qotiladigan uzilish** | $f(x_0 - 0) = f(x_0 + 0) = L \neq f(x_0)$ (yoki $f(x_0)$ aniqlanmagan) | Grafikda bitta nuqta o'yilgan ("teshik") |
| **I tur uzilish (Chekli sakrash)** | $f(x_0 - 0)$ va $f(x_0 + 0)$ mavjud, chekli, lekin teng emas: $f(x_0 - 0) \neq f(x_0 + 0)$ | Sakrash kattaligi: $\Delta = f(x_0 + 0) - f(x_0 - 0)$ |
| **II tur uzilish (Cheksiz / Tebranma)** | Chap yoki o'ng limitlardan kamida biri cheksiz ($\pm\infty$) yoki umuman mavjud emas | Vertikal asimptota yoki cheksiz tebranish |

### 4. Kesmada uzluksiz funksiyalarning fundamental teoremalari
- **Bolsano-Koshi 1-teoremasi (Nolga aylanish):** Agar $f(x)$ funksiya $[a, b]$ kesmada uzluksiz bo'lib, kesma uchlarida turli ishorali qiymatlarni qabul qilsa ($f(a) \cdot f(b) < 0$), u holda kamida bitta shunday $c \in (a, b)$ nuqta topiladiki, $f(c) = 0$ bo'ladi.
- **Bolsano-Koshi 2-teoremasi (Oraliq qiymat):** Agar $f(x)$ funksiya $[a, b]$ da uzluksiz bo'lsa, u $f(a)$ va $f(b)$ sonlar orasidagi istalgan oraliq qiymatni kamida bir marta qabul qiladi.
- **Veyershtrass teoremasi:** Yopiq $[a, b]$ kesmada uzluksiz funksiya chegaralangan bo'lib, o'zining eng katta ($M$) va eng kichik ($m$) qiymatlariga erishadi.

### 5. Tekis uzluksizlik va Kantor teoremasi
- **Oddiy uzluksizlik:** Har bir nuqta $x_0$ uchun o'z $\delta(\varepsilon, x_0)$ si tanlanadi.
- **Tekis uzluksizlik (Uniform continuity):** Agar ixtiyoriy $\varepsilon > 0$ uchun faqat $\varepsilon$ gagina bog'liq bo'lgan (nuqtaga bog'liq bo'lmagan) shunday yagona $\delta > 0$ topilsaki, oraliqdagi ixtiyoriy $x', x''$ nuqtalar uchun:
  $$|x' - x''| < \delta \implies |f(x') - f(x'')| < \varepsilon$$
  tengsizlik bajarilsa, $f(x)$ ushbu to'plamda **tekis uzluksiz** deyiladi.

> **Kantor Teoremasi:** Yopiq va chegaralangan $[a, b]$ kesmada uzluksiz bo'lgan har qanday funksiya ushbu kesmada **tekis uzluksiz** bo'ladi.

---

## 📝 Qadamma-qadam Yechilgan Amaliy Misollar

### 1-misol: Bo'lakli funksiyaning uzilish turini aniqlash
Quyidagi funksiyaning uzluksizligini tekshiring va uzilish nuqtasining turini aniqlang:

$$
f(x) = \begin{cases} 
2x + 1, & x < 1 \\ 
5, & x = 1 \\ 
x^2 + 2, & x > 1 
\end{cases}
$$

**Yechilishi:**
1. $x < 1$ va $x > 1$ sohalarda funksiya ko'phadlardan iborat bo'lgani uchun barcha nuqtalarda uzluksiz. Shubhali nuqta: $x_0 = 1$.
2. Chap limitni hisoblaymiz:
   $$f(1 - 0) = \lim_{x \to 1^-} (2x + 1) = 2(1) + 1 = 3$$
3. O'ng limitni hisoblaymiz:
   $$f(1 + 0) = \lim_{x \to 1^+} (x^2 + 2) = 1^2 + 2 = 3$$
4. Funksiyaning nuqtadagi aniq qiymatini tekshiramiz:
   $$f(1) = 5$$
5. Xulosa: Chap va o'ng limitlar mavjud, chekli va teng ($f(1-0) = f(1+0) = 3$), lekin $f(1) \neq 3$.
   Demak, $x = 1$ nuqtada **yo'qotiladigan uzilish** mavjud.

**Javob:** $x = 1$ — yo'qotiladigan uzilish nuqtasi.

---

### 2-misol: Ko'rsatkichli ifodaning uzilish nuqtasi
Quyidagi funksiyaning $x = 2$ nuqtadagi xatti-harakatini tahlil qiling:

$$
f(x) = \frac{1}{1 + 2^{\frac{1}{x - 2}}}
$$

**Yechilishi:**
1. Chap limit ($x \to 2^-$):
   $x < 2 \implies x - 2 \to -0 \implies \frac{1}{x - 2} \to -\infty$.
   Demak, $2^{\frac{1}{x - 2}} \to 2^{-\infty} = 0$.
   $$f(2 - 0) = \lim_{x \to 2^-} \frac{1}{1 + 2^{\frac{1}{x - 2}}} = \frac{1}{1 + 0} = 1$$
2. O'ng limit ($x \to 2^+$):
   $x > 2 \implies x - 2 \to +0 \implies \frac{1}{x - 2} \to +\infty$.
   Demak, $2^{\frac{1}{x - 2}} \to 2^{+\infty} = +\infty$.
   $$f(2 + 0) = \lim_{x \to 2^+} \frac{1}{1 + 2^{\frac{1}{x - 2}}} = \frac{1}{1 + \infty} = 0$$
3. Tahlil: $f(2 - 0) = 1$ va $f(2 + 0) = 0$. Chap va o'ng limitlar ikkalasi ham chekli, lekin o'zaro teng emas: $1 \neq 0$.
   Sakrash kattaligi: $\Delta = |0 - 1| = 1$.

**Javob:** $x = 2$ nuqtada **I tur uzilish (chekli sakrash)** mavjud.

---

### 3-misol: Bolsano-Koshi teoremasi bilan tenglama ildizini isbotlash
Ushbu tenglama $[1, 2]$ oraliqda kamida bitta haqiqiy ildizga ega ekanligini isbotlang:

$$
x^5 - 3x - 1 = 0
$$

**Yechilishi:**
1. Funksiyani kiritamiz: $f(x) = x^5 - 3x - 1$.
2. Ko'phad funksiya butun sonlar o'qida, jumladan $[1, 2]$ yopiq kesmada uzluksizdir.
3. Kesmaning chekka nuqtalaridagi qiymatlarini hisoblaymiz:
   - $f(1) = 1^5 - 3(1) - 1 = 1 - 3 - 1 = -3 < 0$
   - $f(2) = 2^5 - 3(2) - 1 = 32 - 6 - 1 = 25 > 0$
4. Natijalar ko'paytmasi: $f(1) \cdot f(2) = (-3) \cdot 25 = -75 < 0$.
5. Bolsano-Koshi teoremasiga ko'ra, kamida bitta shunday $c \in (1, 2)$ soni mavjudki, $f(c) = 0$ bo'ladi.

**Javob:** Tenglama $(1, 2)$ intervalda kamida bitta haqiqiy ildizga ega.

---

### 4-misol: Kantor teoremasi va tekis uzluksizlik tekshiruvi
$f(x) = \frac{1}{x}$ funksiyasining quyidagi oraliqlarda tekis uzluksizligini tekshiring:
a) $(0, 1)$; b) $[1, 5]$.

**Yechilishi:**
1. **b) $[1, 5]$ kesma:**
   $f(x) = 1/x$ funksiya $[1, 5]$ yopiq kesmada uzluksizdir (chunki nol nuqta oraliqqa kirmaydi). Kantor teoremasiga ko'ra, yopiq kesmada uzluksiz funksiya **avtomatik ravishda tekis uzluksiz** bo'ladi.
2. **a) $(0, 1)$ interval:**
   Bu oraliq ochiq, shuning uchun Kantor teoremasi to'g'ridan-to'g'ri qo'llanilmaydi. Tekis uzluksizlik ta'rifini inkor qiluvchi ketma-ketliklarni tanlaymiz:
   $$x'_n = \frac{1}{n}, \quad x''_n = \frac{1}{2n}$$
   Nuqtalar orasidagi masofa: $|x'_n - x''_n| = |\frac{1}{n} - \frac{1}{2n}| = \frac{1}{2n} \to 0$ ($n \to \infty$ da).
   Funksiya qiymatlari ayirmasi esa:
   $$|f(x'_n) - f(x''_n)| = |n - 2n| = n \to \infty$$
   Demak, ixtiyoriy $\varepsilon > 0$ uchun har qanday $\delta > 0$ dan kichik masofadagi nuqtalar topiladiki, ularning funksiya qiymatlari farqi $\varepsilon$ dan katta bo'lib qoladi. Funksiya $(0, 1)$ oraliqda tekis uzluksiz emas!

**Javob:** a) tekis uzluksiz emas; b) tekis uzluksiz.

---

## ⚠️ Talabalar Ko'p Yo'l Qo'yadigan Xatolar (Tipik tuzoqlar)

1. **Uzluksizlik bilan tekis uzluksizlikni tenglashtirish:**
   > ⛔ **Xato:** "$f(x) = 1/x$ funksiya $(0, 1)$ da uzluksiz, demak u tekis uzluksiz".
   > 
   > 💡 **Sabab:** Oddiy uzluksizlik har bir $x_0$ nuqtadagi lokal xususiyatdir. Nolga yaqinlashganda funksiyaning o'zgarish tezligi cheksiz o'sadi, shuning uchun butun interval bo'ylab yagona $\delta$ tanlab bo'lmaydi. Tekis uzluksizlik — bu global xususiyat!

2. **I tur uzilishda cheksizlikni aralashtirish:**
   Agar limitlardan biri $\infty$ bo'lsa, bu I tur emas, darhol **II tur uzilish** deb tasniflanishi kerak. I tur uzilishda har ikkala bir tomonlama limit qat'iy ravishda chekli son bo'lishi shart.

3. **Bolsano-Koshi teoremasida uzluksizlik shartini unutish:**
   Agar funksiya uzilishga ega bo'lsa, u manfiy qiymatdan musbat qiymatga sakrab o'tishi va oraliqda nolga teng bo'lmasligi mumkin (masalan, $f(x) = \text{sgn}(x)$). Teorema faqat **uzluksiz** funksiyalar uchun o'rinlidir.

---

## 🎯 Mustaqil Yechish Uchun Masalalar

1. Funksiyaning $x = 0$ nuqtadagi bir tomonlama limitlarini va uzilish turini toping:
   $$f(x) = \frac{|x|}{x} + x^2$$
2. $a$ parametrning qanday qiymatida funksiya butun sonlar o'qida uzluksiz bo'ladi?
   $$f(x) = \begin{cases} x^2 - 1, & x \le 2 \\ ax + 3, & x > 2 \end{cases}$$
3. $f(x) = \cos(\pi / x)$ funksiyaning $x \to 0$ da bir tomonlama limitlarini tekshiring va uzilish turini aniqlang.
4. $f(x) = x^2$ funksiyaning $[0, 10]$ kesmada tekis uzluksizligini Kantor teoremasi orqali tushuntiring.

<details style="margin-top: 1rem; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); cursor: pointer;">
<summary style="font-weight: 700; color: var(--primary);">Mashqlar javoblarini ko'rish</summary>

**1-masala:**
$x \to 0^+$ da $\frac{x}{x} + 0 = 1$. $x \to 0^-$ da $\frac{-x}{x} + 0 = -1$.
Ikkala limit chekli va har xil ($1 \neq -1$). Bu **I tur uzilish (chekli sakrash)**, sakrash kattaligi $2$.

**2-masala:**
Chap limit: $f(2 - 0) = 2^2 - 1 = 3$. O'ng limit: $f(2 + 0) = 2a + 3$.
Uzluksizlik uchun: $2a + 3 = 3 \implies 2a = 0 \implies a = 0$.

**3-masala:**
$x \to 0$ da argument $\frac{\pi}{x} \to \pm\infty$ bo'lib kosinus $[-1, 1]$ oralig'ida cheksiz tez tebranadi. Limit mavjud emas. Bu **II tur (tebranma) uzilish**.

**4-masala:**
$f(x) = x^2$ funksiya ko'phad sifatida $[0, 10]$ yopiq kesmada uzluksizdir. Kantor teoremasiga ko'ra chegaralangan yopiq kesmada uzluksiz har qanday funksiya shu kesmada tekis uzluksizdir.

</details>

---

## 💡 Xulosa va Imtihon Maslahatlari

- Uzilish nuqtasini tekshirish doimo 3 qadamdan iborat: **1) $f(x_0 - 0)$ ni topish**, **2) $f(x_0 + 0)$ ni topish**, **3) $f(x_0)$ bilan taqqoslash**.
- Ko'rsatkichli funksiyalar ($a^{1/(x-x_0)}$) qatnashgan misollarda daraja ko'rsatkichi $+0$ da $+\infty$ ga, $-0$ da $-\infty$ ga intilishiga o'ta ehtiyotkorlik bilan e'tibor bering.
- Kantor teoremasi ishlashi uchun to'plamning **yopiq kesma** $[a, b]$ bo'lishi hal qiluvchi shartdir. Ochiq intervalda funksiya uzluksiz bo'lsa ham, tekis uzluksiz bo'lmasligi mumkin.
