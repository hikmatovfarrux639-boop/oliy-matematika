---
title: "Funksiyaning uzluksizligi va uzilish nuqtalari tasnifi: 1- va 2-tur uzilishlar"
module: "funksiyalar-grafiklar"
order: 12
description: "Nuqtada va oraliqda uzluksizlik ta'rifi, bir tomonlama limitlar (chap va o'ng limit), bartaraf qilinadigan uzilish, 1-tur sakrashli uzilish va 2-tur cheksiz uzilishlar to'liq tahlili hamda grafik misollar."
---

## 📌 Kirish va Geometrik/Fizik Mohiyat

Kundalik hayotda biz "uzluksizlik" deganda biror jarayonning to'xtovsiz, silliq va bo'linmasdan davom etishini tushunamiz: vaqt uzluksiz oqadi, daraxt uzluksiz o'sadi, xonadagi harorat asta-sekin pasayadi. Maktab darsliklarida ko'pincha funksiyaning uzluksizligiga quyidagicha ko'rgazmali ta'rif beriladi: **"Agar funksiya grafigini qalamni qog'ozdan uzmasdan chizish mumkin bo'lsa, bunday funksiya uzluksiz deyiladi."**

Biroq fizika va muhandislikda "sakrashlar" va "uzilishlar" ham doimiy uchrab turadi:
- Elektr kalitini (tumbler) bosganingizda, zanjirdagi tok kuchi $0$ dan darhol $I$ qiymatga sakraydi;
- Muz eriyotganda uning harorati $0^\circ\text{C}$ da qotib turadi, ammo uning ichki issiqlik sig'imi sakrash bilan o'zgaradi (fazaviy o'tish);
- Tovush to'sig'ini yorib o'tgan samolyot atrofida havoning bosimi bir lahzada sakraydi (zarba to'lqini).

Matematik analizda bu kabi jarayonlarni o'rganish uchun **uzilish nuqtalari** tushunchasi kiritiladi. 

Geometrik jihatdan qaraganda, agar egri chiziqda teshik ochilsa, grafik pog'onasimon sakrab ketsa yoki shoxlari cheksizlikka qarab cho'zilib ketsa — o'sha joyda uzilish yuz beradi.

---

## 📐 Asosiy Nazariya, Qoidalar va Teoremalar

### 1. Funksiyaning nuqtada uzluksizligi ta'rifi

> **Ta'rif:** $y = f(x)$ funksiya $x_0$ nuqtada **uzluksiz** deyiladi, agar quyidagi **3 ta shart** bir vaqtda bajarilsa:
> 1. Funksiya $x_0$ nuqtaning o'zida aniqlangan (ya'ni $f(x_0)$ chekli songa teng);
> 2. Funksiyaning $x \to x_0$ dagi chekli ikki tomonlama limiti mavjud;
> 3. Ushbu limit funksiyaning shu nuqtadagi qiymatiga teng:
>    $$\lim_{x \to x_0} f(x) = f(x_0)$$

### 2. Bir tomonlama limitlar tilidagi shart

Ikki tomonlama limit mavjud bo'lishi uchun uning chap va o'ng limitlari mavjud hamda o'zaro teng bo'lishi shart. Shuning uchun uzluksizlik mezonini quyidagicha yozish qulay:

$$
f(x_0 - 0) = f(x_0 + 0) = f(x_0)
$$

bu yerda:
- $f(x_0 - 0) = \lim_{x \to x_0^-} f(x)$ — chap limit;
- $f(x_0 + 0) = \lim_{x \to x_0^+} f(x)$ — o'ng limit;
- $f(x_0)$ — funksiyaning $x_0$ nuqtadagi aniq qiymati.

### 3. Orttirmalar tilidagi uzluksizlik ta'rifi

Argumentga $\Delta x$ orttirma bersak, funksiya ham $\Delta y = f(x_0 + \Delta x) - f(x_0)$ orttirma oladi.

> **Ta'rif:** Agar argumentning cheksiz kichik orttirmasiga funksiyaning ham cheksiz kichik orttirmasi mos kelsa, ya'ni
> 
> $$\lim_{\Delta x \to 0} \Delta y = 0$$
> 
> bo'lsa, funksiya $x_0$ nuqtada uzluksiz deb ataladi.

---

### 4. Uzilish nuqtalarining qat'iy tasnifi

Agar yuqoridagi 3 ta shartdan aqalli bittasi buzilsa, $x_0$ nuqta **uzilish nuqtasi** deyiladi. Oliy matematikada uzilishlar bir tomonlama limitlarning harakatiga qarab **ikki turga** bo'linadi:

#### A) 1-tur uzilishlar
Agar funksiyaning chap $f(x_0 - 0)$ va o'ng $f(x_0 + 0)$ limitlari **chekli son** sifatida mavjud bo'lsa, ammo ular o'zaro teng bo'lmasa yoki nuqtadagi qiymatga teng bo'lmasa, bunday nuqta **1-tur uzilish nuqtasi** deyiladi.

1-tur uzilish o'z navbatida 2 ta holatga bo'linadi:
1. **Bartaraf qilinadigan uzilish:**
   Chap va o'ng limitlar o'zaro teng, ammo funksiya bu nuqtada aniqlanmagan yoki qiymati limitga teng emas:
   $$f(x_0 - 0) = f(x_0 + 0) \neq f(x_0)$$
   *Geometrik ko'rinishi:* Grafik yaxlit ketmoqda, faqat $x_0$ nuqtada bitta "teshik" bor. Funksiyani shu nuqtadagi qiymatini limitga teng deb qayta aniqlash orqali uzilishni "bartaraf qilish" (yamash) mumkin.
2. **1-tur sakrashli uzilish (pog'onali uzilish):**
   Chap va o'ng limitlar chekli, ammo bir-biriga teng emas:
   $$f(x_0 - 0) \neq f(x_0 + 0)$$
   Funksiyaning ushbu nuqtadagi **sakrash balandligi** deb quyidagi songa aytiladi:
   $$h = |f(x_0 + 0) - f(x_0 - 0)|$$
   *Geometrik ko'rinishi:* Grafik zinapoya kabi birdan sakrab yuqoriga yoki pastga o'tib ketadi. Masalan, signum (ishora) funksiyasi: $\operatorname{sgn}(x) = \frac{x}{|x|}$.

#### B) 2-tur uzilishlar (Cheksiz yoki muhim uzilish)
Agar bir tomonlama limitlarning **kamida bittasi cheksizlikka ($\pm \infty$) teng bo'lsa** yoki umuman **mavjud bo'lmasa**, bunday nuqta **2-tur uzilish nuqtasi** deb ataladi.

*Geometrik ko'rinishi:* Grafik ushbu nuqtada vertikal asimptotaga ega bo'lib osmonga yoki tubsizlikka ketadi (masalan, $y = \frac{1}{x}$) yoki nuqtaga yaqinlashgan sari telbalarcha cheksiz tebranadi (masalan, $y = \sin\left(\frac{1}{x}\right)$).

---

### 5. Uzluksiz funksiyalarning fundamental teoremalari

> **Koshining oraliq qiymat haqidagi teoremasi (Boltsano-Koshi):**
> Agar $f(x)$ funksiya $[a, b]$ kesmada uzluksiz bo'lib, uning uchlarida har xil ishorali qiymatlarni qabul qilsa ($f(a) \cdot f(b) < 0$), u holda kesmaning ichida kamida bitta shunday $c \in (a, b)$ nuqta topiladiki, unda
> 
> $$f(c) = 0$$
> 
> bo'ladi (ya'ni funksiya grafigi $Ox$ o'qini kamida bir marta kesib o'tadi).

---

## 📝 Qadamma-qadam Yechilgan Universitet Misollari

### 1-misol: Bartaraf qilinadigan uzilish nuqtasi

**Shart:** $f(x) = \frac{x^2 - x - 2}{x - 2}$ funksiyaning uzilish nuqtalarini toping, turini aniqlang va uni uzluksiz funksiyaga aylantiring.

**Yechish:**
1. **Aniqlanish sohasi:** Kasr mahraji nolga teng bo'lmasligi kerak: $x - 2 \neq 0 \implies x \neq 2$.
   Demak, $x_0 = 2$ nuqtada funksiya aniqlanmagan, shuning uchun $x_0 = 2$ — uzilish nuqtasi.

2. **Bir tomonlama limitlarni hisoblaymiz:**
   Suratni ko'paytuvchilarga ajratamiz: $x^2 - x - 2 = (x - 2)(x + 1)$.
   - O'ng limit:
     $$f(2 + 0) = \lim_{x \to 2^+} \frac{(x - 2)(x + 1)}{x - 2} = \lim_{x \to 2^+} (x + 1) = 2 + 1 = 3$$
   - Chap limit:
     $$f(2 - 0) = \lim_{x \to 2^-} \frac{(x - 2)(x + 1)}{x - 2} = \lim_{x \to 2^-} (x + 1) = 2 + 1 = 3$$

3. **Xulosa:** Chap va o'ng limitlar mavjud, chekli va teng:
   $$f(2 - 0) = f(2 + 0) = 3$$
   Biroq funksiya $x = 2$ da aniqlanmagan. Demak, $x = 2$ nuqta — **bartaraf qilinadigan 1-tur uzilish nuqtasi**.

4. **Bartaraf qilish:** Agar biz funksiyani $x = 2$ nuqtada $3$ ga teng deb qo'shimcha aniqlasak:
   $$F(x) = \begin{cases} \frac{x^2 - x - 2}{x - 2}, & x \neq 2 \\ 3, & x = 2 \end{cases} = x + 1$$
   funksiya butun sonlar o'qida to'liq uzluksiz bo'lib qoladi.

---

### 2-misol: Bo'lakli funksiyada 1-tur sakrashli uzilish

**Shart:** Berilgan bo'lakli funksiyaning $x = 0$ va $x = 2$ nuqtalardagi uzluksizligini tekshiring:
$$f(x) = \begin{cases} x + 2, & x < 0 \\ x^2, & 0 \le x < 2 \\ 6 - x, & x \ge 2 \end{cases}$$

**Yechish:**
Bo'laklar tutashgan chegara nuqtalarni alohida tahlil qilamiz.

1. **$x = 0$ nuqtani tekshirish:**
   - Funksiya qiymati: $f(0) = 0^2 = 0$.
   - Chap limit ($x < 0$ shox bo'yicha):
     $$f(0 - 0) = \lim_{x \to 0^-} (x + 2) = 0 + 2 = 2$$
   - O'ng limit ($x > 0$ shox bo'yicha):
     $$f(0 + 0) = \lim_{x \to 0^+} x^2 = 0$$
   - Taqqoslash: $f(0 - 0) = 2 \neq f(0 + 0) = 0$.
     Har ikkala limit chekli son, ammo teng emas!
   - Demak, $x = 0$ nuqta — **1-tur sakrashli uzilish nuqtasi**.
     Sakrash kattaligi: $h = |0 - 2| = 2$.

2. **$x = 2$ nuqtani tekshirish:**
   - Funksiya qiymati: $f(2) = 6 - 2 = 4$.
   - Chap limit ($x < 2$ shox bo'yicha):
     $$f(2 - 0) = \lim_{x \to 2^-} x^2 = 2^2 = 4$$
   - O'ng limit ($x > 2$ shox bo'yicha):
     $$f(2 + 0) = \lim_{x \to 2^+} (6 - x) = 6 - 2 = 4$$
   - Taqqoslash: $f(2 - 0) = f(2 + 0) = f(2) = 4$.
   - Demak, $x = 2$ nuqtada barcha 3 ta shart bajarildi — bu nuqtada funksiya **uzluksizdir**!

---

### 3-misol: 2-tur cheksiz uzilish nuqtasi

**Shart:** $f(x) = \frac{1}{x - 3} + 2$ funksiyaning $x = 3$ nuqtadagi uzilishini tekshiring.

**Yechish:**
1. Funksiya $x = 3$ nuqtada aniqlanmagan (nolga bo'lish).
2. Chap va o'ng limitlarni hisoblaymiz:
   - O'ng limit ($x \to 3^+$, ya'ni $x > 3$, demak $x - 3 \to +0$):
     $$f(3 + 0) = \lim_{x \to 3^+} \left( \frac{1}{x - 3} + 2 \right) = \frac{1}{+0} + 2 = +\infty$$
   - Chap limit ($x \to 3^-$, ya'ni $x < 3$, demak $x - 3 \to -0$):
     $$f(3 - 0) = \lim_{x \to 3^-} \left( \frac{1}{x - 3} + 2 \right) = \frac{1}{-0} + 2 = -\infty$$
3. Bir tomonlama limitlar cheksizlikka intilmoqda.
4. Demak, $x = 3$ nuqta — **2-tur cheksiz uzilish nuqtasi** (ushbu nuqtada $x = 3$ vertikal asimptota mavjud).

---

### 4-misol: Ko'rsatkichli funksiyada uzilish turini aniqlash

**Shart:** Ushbu funksiyaning $x = 1$ nuqtadagi uzilish turini aniqlang:
$$f(x) = \frac{1}{1 + 2^{1/(x - 1)}}$$

**Yechish:**
1. $x = 1$ nuqtada daraja ko'rsatkichining mahraji nolga aylanadi, demak funksiya aniqlanmagan.
2. Bir tomonlama limitlarni qaraymiz:
   - **O'ng limit ($x \to 1^+$):**
     $$x - 1 \to +0 \implies \frac{1}{x - 1} \to +\infty$$
     U holda $2^{1/(x - 1)} \to 2^{+\infty} = +\infty$.
     Kasrning limiti:
     $$f(1 + 0) = \lim_{x \to 1^+} \frac{1}{1 + 2^{1/(x - 1)}} = \frac{1}{1 + \infty} = 0$$
   - **Chap limit ($x \to 1^-$):**
     $$x - 1 \to -0 \implies \frac{1}{x - 1} \to -\infty$$
     U holda $2^{1/(x - 1)} \to 2^{-\infty} = \frac{1}{2^{+\infty}} = 0$.
     Kasrning limiti:
     $$f(1 - 0) = \lim_{x \to 1^-} \frac{1}{1 + 2^{1/(x - 1)}} = \frac{1}{1 + 0} = 1$$
3. Tahlil: $f(1 + 0) = 0$ va $f(1 - 0) = 1$. Har ikkala bir tomonlama limit mavjud va chekli son! Ammo ular teng emas: $0 \neq 1$.
4. Demak, $x = 1$ nuqta — **1-tur sakrashli uzilish nuqtasi**! (Talabalar ko'pincha darajada kasr ko'rib, buni 2-tur deb yanglishishadi). Sakrash $h = |0 - 1| = 1$.

---

## ⚠️ Talabalar Eng Ko'p Yo'l Qo'yadigan Xatolar va Tuzoqlar

1. **Kasr ko'rishi bilan avtomatik "2-tur uzilish" deb o'ylash:**
   4-misolda ko'rganimizdek, darajada cheksizlik bo'lishiga qaramay, butun ifodaning limiti $0$ va $1$ kabi chekli sonlar chiqishi mumkin. Har doim bir tomonlama limitlarni oxirigacha sonli hisoblang!

2. **Bartaraf qilinadigan uzilishni alohida "3-tur" deb hisoblash:**
   Xalqaro va akademik tasnifda faqat ikkita asosiy tur mavjud: 1-tur va 2-tur. Bartaraf qilinadigan uzilish — bu **1-tur uzilishning maxsus ko'rinishidir** (chunki ikkala limit ham chekli).

3. **Modul ochishda chap limit ishorasini xato olish:**
   $f(x) = \frac{x - 2}{|x - 2|}$ ifodada $x \to 2^-$ bo'lganda $x < 2$, ya'ni $x - 2 < 0$. Shuning uchun $|x - 2| = -(x - 2)$ bo'lib, limit $-1$ chiqadi. Buni unutish sakrashni hisoblashda chalkashlik tug'diradi.

4. **Uzluksizlik shartidagi 3-bandni unutish:**
   Limit mavjud bo'lishi funksiyaning uzluksiz bo'lishi uchun hali yetarli emas. U albatta shu nuqtadagi **funksiya qiymatiga teng** bo'lishi ham shart ($f(x_0) = L$).

---

## 🎯 Mustaqil Yechish Uchun Amaliy Mashqlar va Yechimlar

### 1-mashq
$f(x) = \frac{|x + 3|}{x + 3}$ funksiyaning $x = -3$ nuqtadagi uzilish turini va sakrash kattaligini toping.

<details>
<summary>Yechimni ko'rish</summary>

**Bosqichma-bosqich yechim:**
1. O'ng limit ($x \to -3^+ \implies x > -3 \implies x + 3 > 0$):
   $$f(-3 + 0) = \lim_{x \to -3^+} \frac{x + 3}{x + 3} = 1$$
2. Chap limit ($x \to -3^- \implies x < -3 \implies x + 3 < 0$):
   $$f(-3 - 0) = \lim_{x \to -3^-} \frac{-(x + 3)}{x + 3} = -1$$
3. Chekli limitlar teng emas: $1 \neq -1$.
4. Natija: $x = -3$ nuqta — **1-tur sakrashli uzilish**.
   Sakrash: $h = |1 - (-1)| = 2$.
</details>

---

### 2-mashq
$a$ parametrining qanday qiymatida quyidagi funksiya butun sonlar o'qida uzluksiz bo'ladi?
$$f(x) = \begin{cases} a x + 3, & x \le 2 \\ x^2 - 1, & x > 2 \end{cases}$$

<details>
<summary>Yechimni ko'rish</summary>

**Bosqichma-bosqich yechim:**
1. Har ikkala shox alohida olganda ko'phad bo'lib, uzluksizdir. Shuning uchun uzilish faqat tutashuv nuqtasi $x = 2$ da bo'lishi mumkin.
2. Uzluksizlik sharti: $f(2 - 0) = f(2 + 0) = f(2)$.
3. Chap limit va nuqtadagi qiymat ($x \le 2$):
   $$f(2) = f(2 - 0) = a(2) + 3 = 2a + 3$$
4. O'ng limit ($x > 2$):
   $$f(2 + 0) = 2^2 - 1 = 4 - 1 = 3$$
5. Tenglashtiramiz:
   $$2a + 3 = 3 \implies 2a = 0 \implies a = 0$$

**Javob:** $a = 0$
</details>

---

### 3-mashq
$f(x) = \frac{1}{x^2 - 4}$ funksiyaning barcha uzilish nuqtalarini toping va tasniflang.

<details>
<summary>Yechimni ko'rish</summary>

**Bosqichma-bosqich yechim:**
1. Mahraj nolga teng bo'ladigan nuqtalar:
   $$x^2 - 4 = 0 \implies x_1 = 2, \quad x_2 = -2$$
2. $x = 2$ nuqtada:
   $$\lim_{x \to 2^+} \frac{1}{(x - 2)(x + 2)} = \frac{1}{+0 \cdot 4} = +\infty$$
   Limit cheksiz bo'lgani uchun $x = 2$ — **2-tur uzilish nuqtasi**.
3. $x = -2$ nuqtada:
   $$\lim_{x \to -2^+} \frac{1}{(x - 2)(x + 2)} = \frac{1}{-4 \cdot (+0)} = -\infty$$
   Limit cheksiz bo'lgani uchun $x = -2$ ham — **2-tur uzilish nuqtasi**.

**Javob:** $x = 2$ va $x = -2$ nuqtalar 2-tur cheksiz uzilish nuqtalaridir.
</details>

---

## 💡 Imtihon Layfhaklari va Tezkor Maslahatlar

1. **Tezkor qaror algoritmi:**
   - Agar $f(x_0 - 0)$ va $f(x_0 + 0)$ ning ikkalasi ham **aniq son** chiqsa $\implies$ bu **1-tur**! (teng bo'lsa bartaraf qilinadigan, har xil bo'lsa sakrash).
   - Agar aqalli bittasi **$\infty$** yoki **mavjud emas** bo'lsa $\implies$ bu **2-tur**!

2. **Elementar funksiyalar teormasi:**
   Barcha asosiy elementar funksiyalar (ko'phadlar, kasr-ratsional, darajali, ko'rsatkichli, logarifmik, trigonometrik) o'zlarining **aniqlanish sohasidagi barcha nuqtalarda uzluksizdir**. Uzilish faqat aniqlanish sohasiga kirmaydigan nuqtalarda bo'lishi mumkin.

3. **Parametrlarni topish siri:**
   Bo'lakli funksiyalarda parametrni topish so'ralsa, chegara nuqtani ikkala formulaga qo'yib, oddiygina tenglashtiring: masalan, $ax_0 + b = x_0^2 + c$. Bu sizga bir necha soniyada to'g'ri javobni beradi!
