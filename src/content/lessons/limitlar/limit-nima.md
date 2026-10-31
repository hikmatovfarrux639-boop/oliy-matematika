---
title: "Limit nima? Funksiya limitining mohiyati"
module: "limitlar"
order: 1
description: "Matematik analizning eng muhim tushunchasi: nuqtaga cheksiz yaqinlashish, limitning intuitiv va qat'iy ta'rifi hamda amaliy misollar."
---

## 📌 Kirish va Geometrik/Fizik Mohiyat

Matematik analiz binosining tamal toshi — bu **limit** (lotincha *limes* — chegara, marra) tushunchasidir. Maktab algebrasida biz asosan statik masalalar bilan shug'ullanamiz: berilgan $x$ qiymat uchun $f(x)$ funksiyaning aniq qiymatini hisoblaymiz. Masalan, $f(x) = 2x + 1$ bo'lsa, $x = 3$ nuqtada $f(3) = 2 \cdot 3 + 1 = 7$ bo'ladi. Bu yerda hech qanday sirlilik yo'q.

Biroq tabiat, fizika va texnikada jarayonlar harakatda, dinamikada o'rganiladi. Tasavvur qiling, avtomobil harakatlanmoqda. Biz uning ma'lum bir lahzadagi **oniy tezligini** bilmoqchimiz. Bosib o'tilgan yo'l $\Delta s$ ning ketgan vaqt $\Delta t$ ga nisbati o'rtacha tezlikni beradi:

$$
v_{\text{o'rt}} = \frac{\Delta s}{\Delta t}
$$

Ayni bir lahzada esa $\Delta t = 0$ bo'ladi va biz $\frac{0}{0}$ ko'rinishidagi "taqiqlangan" amallarga duch kelamiz. Nolga bo'lish mumkin emas! Xo'sh, unda tezlik o'lchagich (spidometr) qanday qilib aniq sonni ko'rsatib turibdi? 

Matematika bu paradoksni ajoyib yo'l bilan hal qiladi: biz $\Delta t$ ni aynan nolga tenglashtirmaymiz, balki uni nolga **cheksiz yaqinlashtiramiz** ($\Delta t \to 0$).

Klassik algebraik misolni ko'raylik:

$$
f(x) = \frac{x^2 - 4}{x - 2}
$$

Agar $x = 2$ nuqtani to'g'ridan-to'g'ri qo'ysak:

$$
f(2) = \frac{2^2 - 4}{2 - 2} = \left[ \frac{0}{0} \right]
$$

Bu nuqtada funksiya aniqlanmagan, uning grafigida "teshik" (nuqta o'yilgan) mavjud. Ammo $x$ o'zgaruvchini $2$ ga har ikki tomondan yaqinlashtirib ko'raylik:

| $x$ (chapdan) | $f(x)$ | $x$ (o'ngdan) | $f(x)$ |
| :--- | :--- | :--- | :--- |
| $1.9$ | $3.9$ | $2.1$ | $4.1$ |
| $1.99$ | $3.99$ | $2.01$ | $4.01$ |
| $1.999$ | $3.999$ | $2.001$ | $4.001$ |
| $1.9999$ | $3.9999$ | $2.0001$ | $4.0001$ |

Jadvaldan ko'rinib turibdiki, $x$ soni $2$ ga qanchalik yaqinlashsa, $f(x)$ qiymati shubhasiz **$4$** soniga intiladi. 

> **Asosiy falsafiy xulosa:** Limit — bu funksiyaning $x = a$ nuqtadagi qiymati emas, balki argument $a$ ga cheksiz yaqinlashganda funksiyaning o'zini qanday tutishi, qaysi manzilga intilishidir!

Geometrik nuqtai nazardan, grafikdagi $(x, f(x))$ nuqta $x \to a$ da $(a, L)$ teshik nuqtaga cheksiz yaqinlashib boradi. Egri chiziq bo'ylab harakatlanayotgan kuzatuvchi $x = a$ nuqtada chuqurlik borligini bilmasdan, uning balandligi $L$ ga teng bo'lishini kutadi.

---

## 📐 Asosiy Nazariya, Qoidalar va Teoremalar

Intuitiv tushuncha qanchalik sodda tuyulmasin, fanda qat'iy matematik apparat zarur. Tarixan Nyuton va Leybnits limit tushunchasini tushuntirishda "cheksiz kichik miqdorlar" atamasidan foydalanishgan, ammo bu ko'plab mantiqiy chalkashliklarga olib kelgan. XIX asrda fransuz matematigi Ogyusten Lui Koshi va nemis matematigi Karl Veyershtrass limit nazariyasini mukammal mantiqiy asosga qo'ydilar.

### 1. Nuqtaning atrofi va teshib o'tilgan atrofi

- $a \in \mathbb{R}$ nuqtaning $\delta$-atrofi deb ushbu intervalga aytiladi:
  $$U_\delta(a) = (a - \delta, a + \delta) = \{x \in \mathbb{R} : |x - a| < \delta\}$$
- $a$ nuqtaning **teshib o'tilgan $\delta$-atrofi** (ya'ni $a$ nuqtaning o'zi chiqarib tashlangan oraliq):
  $$\dot{U}_\delta(a) = (a - \delta, a) \cup (a, a + \delta) = \{x \in \mathbb{R} : 0 < |x - a| < \delta\}$$

### 2. Limitning qat'iy ta'rifi (Koshi ta'rifi yoki $\varepsilon - \delta$ tili)

> **Ta'rif (Koshi):** Agar ixtiyoriy $\varepsilon > 0$ soni uchun shunday $\delta = \delta(\varepsilon) > 0$ soni mavjud bo'lsaki, argumentning $0 < |x - a| < \delta$ tengsizlikni qanoatlantiruvchi barcha $x$ qiymatlarida
> 
> $$|f(x) - L| < \varepsilon $$
> 
> tengsizlik bajarilsa, u holda $L$ soni $f(x)$ funksiyaning $x \to a$ dagi **limiti** deyiladi va quyidagicha belgilanadi:
> 
> $$\lim_{x \to a} f(x) = L $$

**Geometrik ma'nosi:** Siz $y = L$ to'g'ri chiziq atrofida qanchalik tor $\varepsilon$-yo'lakcha (oraliq $(L - \varepsilon, L + \varepsilon)$) tanlamang, doimo $x = a$ nuqta atrofida shunday $\delta$-oraliq topiladiki, grafigimizning shu oraliqqa mos barcha nuqtalari to'liq siz tanlagan gorizontal yo'lakcha ichiga tushadi.

### 3. Geyne bo'yicha limit ta'rifi (Ketma-ketliklar tili)

> **Ta'rif (Geyne):** Agar $a$ ga intiluvchi va unga teng bo'lmagan ixtiyoriy $\{x_n\}$ ketma-ketlik ($x_n \to a, x_n \neq a$) uchun funksiya qiymatlarining mos ketma-ketligi $f(x_n)$ soni $L$ ga intilsa ($\lim_{n \to \infty} f(x_n) = L$), u holda $L$ soni funksiyaning $x \to a$ dagi limiti deyiladi.

*Koshi va Geyne ta'riflari to'liq ekvivalentdir.* Geyne ta'rifi limitning mavjud emasligini isbotlashda juda qulay: agar bitta nuqtaga intiluvchi ikkita turli ketma-ketlik uchun funksiya qiymatlari turli natijalarga intilsa, limit mavjud bo'lmaydi!

### 4. Bir tomonlama limitlar (Chap va O'ng limit)

Ko'pincha funksiya nuqtaga chapdan va o'ngdan har xil yaqinlashadi:
- **Chap limit:** $\lim_{x \to a^-} f(x) = \lim_{\substack{x \to a \\ x < a}} f(x) = f(a - 0)$
- **O'ng limit:** $\lim_{x \to a^+} f(x) = \lim_{\substack{x \to a \\ x > a}} f(x) = f(a + 0)$

> **Limit mavjudligining fundamental mezoni:**
> $\lim_{x \to a} f(x) = L$ limit mavjud bo'lishi uchun funksiyaning chap va o'ng limitlari mavjud hamda o'zaro teng bo'lishi zarur va yetarlidir:
> 
> $$\lim_{x \to a^-} f(x) = \lim_{x \to a^+} f(x) = L $$

### 5. Chekli limitlar haqidagi arifmetik teoremalar

Agar $\lim_{x \to a} f(x) = A$ va $\lim_{x \to a} g(x) = B$ chekli limitlar mavjud bo'lsa:
1. **Yagonalik:** Funksiya faqat bitta limitga ega bo'lishi mumkin.
2. **Yig'indi va ayirma limiti:** $\lim_{x \to a} [f(x) \pm g(x)] = A \pm B$
3. **Ko'paytma limiti:** $\lim_{x \to a} [f(x) \cdot g(x)] = A \cdot B$
4. **O'zgarmas sonni chiqarish:** $\lim_{x \to a} [c \cdot f(x)] = c \cdot \lim_{x \to a} f(x)$ ($c = \text{const}$)
5. **Bo'linma limiti:** $\lim_{x \to a} \frac{f(x)}{g(x)} = \frac{A}{B}$ (agar $B \neq 0$ bo'lsa)
6. **Daraja-ko'rsatkichli limit:** $\lim_{x \to a} [f(x)]^{g(x)} = A^B$ ($A > 0$)

---

## 📝 Qadamma-qadam Yechilgan Universitet Misollari

### 1-misol: Koshi ta'rifi ($\varepsilon - \delta$) yordamida limitni qat'iy isbotlash

**Shart:** Qat'iy $\varepsilon - \delta$ ta'rifidan foydalanib, $\lim_{x \to 3} (4x - 5) = 7$ ekanligini isbotlang.

**Yechish:**
1. Bizga $f(x) = 4x - 5$, $a = 3$, $L = 7$ berilgan.
2. Ixtiyoriy $\varepsilon > 0$ sonini olaylik. Biz shunday $\delta > 0$ sonini topishimiz kerakki, $0 < |x - 3| < \delta$ bo'lganda quyidagi tengsizlik bajarilsin:
   $$|(4x - 5) - 7| < \varepsilon$$
3. Ushbu ifodani soddalashtiramiz:
   $$|4x - 12| < \varepsilon \iff 4|x - 3| < \varepsilon \iff |x - 3| < \frac{\varepsilon}{4}$$
4. Demak, agar biz $\delta = \frac{\varepsilon}{4}$ deb tanlasak, u holda har qanday $0 < |x - 3| < \delta$ uchun:
   $$|(4x - 5) - 7| = 4|x - 3| < 4 \cdot \delta = 4 \cdot \frac{\varepsilon}{4} = \varepsilon$$
   tengsizlik avtomatik bajariladi. Isbot yakunlandi. $\blacksquare$

---

### 2-misol: Ratsional kasrda $\left[ \frac{0}{0} \right]$ noaniqligini ochish

**Shart:** Limitni hisoblang:
$$\lim_{x \to 2} \frac{x^3 - 2x^2 - 4x + 8}{x^2 - 5x + 6}$$

**Yechish:**
1. **Tekshirish:** $x = 2$ qiymatini qo'yamiz:
   - Surat: $2^3 - 2(2^2) - 4(2) + 8 = 8 - 8 - 8 + 8 = 0$
   - Maxraj: $2^2 - 5(2) + 6 = 4 - 10 + 6 = 0$
   Biz $\left[ \frac{0}{0} \right]$ noaniqligiga duch keldik. Bezu teoremasiga binoan, surat ham, maxraj ham $(x - 2)$ ko'paytuvchiga qoldiqsiz bo'linadi.

2. **Ko'paytuvchilarga ajratish:**
   - Suratni guruhlaymiz:
     $$x^3 - 2x^2 - 4x + 8 = x^2(x - 2) - 4(x - 2) = (x - 2)(x^2 - 4) = (x - 2)(x - 2)(x + 2) = (x - 2)^2(x + 2)$$
   - Maxrajni Viyet teoremasi bo'yicha ajratamiz:
     $$x^2 - 5x + 6 = (x - 2)(x - 3)$$

3. **Qisqartirish:** $x \to 2$ bo'lgani uchun $x \neq 2$, demak $(x - 2)$ ga qisqartirish to'liq qonuniy:
   $$\lim_{x \to 2} \frac{(x - 2)^2 (x + 2)}{(x - 2)(x - 3)} = \lim_{x \to 2} \frac{(x - 2)(x + 2)}{x - 3}$$

4. **Limitga o'tish:** Endi bemalol $x = 2$ ni qo'yamiz:
   $$\frac{(2 - 2)(2 + 2)}{2 - 3} = \frac{0 \cdot 4}{-1} = \frac{0}{-1} = 0$$

**Javob:** $0$

---

### 3-misol: Irratsional ifodada qo'shmasiga ko'paytirish usuli

**Shart:** Limitni hisoblang:
$$\lim_{x \to 0} \frac{\sqrt{1 + 3x} - \sqrt{1 - 2x}}{x^2 + 2x}$$

**Yechish:**
1. **Tekshirish:** $x = 0$ da surat $\sqrt{1} - \sqrt{1} = 0$, maxraj $0 + 0 = 0$. Ya'ni $\left[ \frac{0}{0} \right]$.
2. **Qo'shmasiga ko'paytirish:** Suratdagi ildizlardan qutulish uchun kasrning surati va maxrajini $(\sqrt{1 + 3x} + \sqrt{1 - 2x})$ ga ko'paytiramiz:
   $$\lim_{x \to 0} \frac{(\sqrt{1 + 3x} - \sqrt{1 - 2x})(\sqrt{1 + 3x} + \sqrt{1 - 2x})}{(x^2 + 2x)(\sqrt{1 + 3x} + \sqrt{1 - 2x})}$$
3. $(a - b)(a + b) = a^2 - b^2$ formulasini qo'llaymiz:
   $$(\sqrt{1 + 3x})^2 - (\sqrt{1 - 2x})^2 = (1 + 3x) - (1 - 2x) = 1 + 3x - 1 + 2x = 5x$$
4. Maxrajdan $x$ ni qavsdan tashqariga chiqaramiz:
   $$x^2 + 2x = x(x + 2)$$
5. Ifodani birlashtiramiz va $x \neq 0$ bo'lgani uchun $x$ ga qisqartiramiz:
   $$\lim_{x \to 0} \frac{5x}{x(x + 2)(\sqrt{1 + 3x} + \sqrt{1 - 2x})} = \lim_{x \to 0} \frac{5}{(x + 2)(\sqrt{1 + 3x} + \sqrt{1 - 2x})}$$
6. $x = 0$ qiymatini qo'yamiz:
   $$\frac{5}{(0 + 2)(\sqrt{1 + 0} + \sqrt{1 - 0})} = \frac{5}{2 \cdot (1 + 1)} = \frac{5}{4} = 1.25$$

**Javob:** $\frac{5}{4}$

---

### 4-misol: Bir tomonlama limitlar va limitning mavjud emasligi

**Shart:** Ushbu funksiyaning $x \to 0$ dagi limitini tekshiring:
$$f(x) = \frac{x}{|x|} + \frac{1}{1 + e^{1/x}}$$

**Yechish:**
Bunday ko'rinishdagi funksiyalarda modul va darajadagi $\frac{1}{x}$ bo'lgani sababli chap va o'ng limitlar alohida hisoblanadi.

1. **O'ng limit ($x \to 0^+$, ya'ni $x > 0$):**
   - Agar $x > 0$ bo'lsa, $|x| = x$, demak $\frac{x}{|x|} = \frac{x}{x} = 1$.
   - $x \to 0^+$ bo'lganda $\frac{1}{x} \to +\infty$, bu holda $e^{1/x} \to +\infty$.
   - U holda $\frac{1}{1 + e^{1/x}} \to \frac{1}{1 + \infty} = 0$.
   - Demak:
     $$\lim_{x \to 0^+} f(x) = 1 + 0 = 1$$

2. **Chap limit ($x \to 0^-$, ya'ni $x < 0$):**
   - Agar $x < 0$ bo'lsa, $|x| = -x$, demak $\frac{x}{|x|} = \frac{x}{-x} = -1$.
   - $x \to 0^-$ bo'lganda $\frac{1}{x} \to -\infty$, bu holda $e^{-\infty} = \frac{1}{e^{+\infty}} = 0$.
   - U holda $\frac{1}{1 + e^{1/x}} \to \frac{1}{1 + 0} = 1$.
   - Demak:
     $$\lim_{x \to 0^-} f(x) = -1 + 1 = 0$$

3. **Xulosa:**
   $$\lim_{x \to 0^+} f(x) = 1 \quad \neq \quad \lim_{x \to 0^-} f(x) = 0$$
   Chap va o'ng limitlar teng bo'lmagani sababli, $x \to 0$ nuqtada funksiyaning ikki tomonlama umumiy **limiti mavjud emas**!

---

## ⚠️ Talabalar Eng Ko'p Yo'l Qo'yadigan Xatolar va Tuzoqlar

1. **"Nuqtada qiymat yo'q $\implies$ limit yo'q" deb o'ylash:**
   *Eng keng tarqalgan xato.* Talabalar $f(a)$ aniqlanmaganini ko'rib, limit mavjud emas deb xulosa qilishadi. Esda tuting: limit aynan $x = a$ nuqtada nima sodir bo'layotgani bilan mutlaqo qiziqmaydi! Limit faqat uning **teshib o'tilgan atrofidagi** holatni o'rganadi.

2. **Noaniqlikni tekshirmasdan mexanik qisqartirish:**
   Misol uchun, $\lim_{x \to 3} \frac{x^2 - 9}{x + 3}$ berilgan bo'lsa, ba'zilar inersiya bilan $x = 3$ ni hisoblamasdan darhol noaniqlik ochishga tushadi. Aslida esa bu yerda noaniqlik yo'q: $\frac{3^2 - 9}{3 + 3} = \frac{0}{6} = 0$. Har doim birinchi navbatda $x = a$ qiymatini qo'yib tekshiring!

3. **Modulli ifodalarda bir tomonlama limitlarni unutish:**
   $\lim_{x \to 0} \frac{|x|}{x}$ kabi misollarda modulni shunchaki ochib tashlab, javobni $1$ deb yozish xato. $x < 0$ da $|x| = -x$ ekanini esdan chiqarmang. Bunday hollarda har doim $x \to 0^+$ va $x \to 0^-$ alohida qaraladi.

4. **Limitlar arifmetikasini asossiz qo'llash:**
   $\lim [f(x) + g(x)] = \lim f(x) + \lim g(x)$ formulasi faqat va faqat har ikkala alohida limit **chekli** bo'lgandagina to'g'ri. Masalan, $\lim_{x \to 0} \left( \frac{1}{x} - \frac{1}{x} \right) = \lim (0) = 0$, ammo alohida qilib $\lim \frac{1}{x} - \lim \frac{1}{x} = \infty - \infty$ deb yozish qo'pol xatodir.

---

## 🎯 Mustaqil Yechish Uchun Amaliy Mashqlar va Yechimlar

### 1-mashq
Koshi ($\varepsilon - \delta$) ta'rifidan foydalanib, $\lim_{x \to 2} (3x - 1) = 5$ ekanini isbotlang. Berilgan $\varepsilon = 0.03$ uchun mos $\delta$ ning eng katta qiymatini toping.

<details>
<summary>Yechimni ko'rish</summary>

**Isbot va hisoblash:**
1. Ta'rifga ko'ra, har qanday $\varepsilon > 0$ uchun shunday $\delta > 0$ topishimiz kerakki, $0 < |x - 2| < \delta$ bo'lganda $|(3x - 1) - 5| < \varepsilon$ bo'lsin.
2. Ifodani soddalashtiramiz:
   $$|3x - 6| < \varepsilon \iff 3|x - 2| < \varepsilon \iff |x - 2| < \frac{\varepsilon}{3}$$
3. Demak, $\delta(\varepsilon) = \frac{\varepsilon}{3}$ deb olish yetarli.
4. Agar $\varepsilon = 0.03$ bo'lsa, u holda $\delta = \frac{0.03}{3} = 0.01$ bo'ladi.
</details>

---

### 2-mashq
Limitni hisoblang:
$$\lim_{x \to 1} \frac{x^3 - 3x + 2}{x^4 - 4x + 3}$$

<details>
<summary>Yechimni ko'rish</summary>

**Bosqichma-bosqich yechim:**
1. $x = 1$ ni qo'yib ko'ramiz:
   - Surat: $1 - 3 + 2 = 0$
   - Maxraj: $1 - 4 + 3 = 0$
   Bu $\left[ \frac{0}{0} \right]$ noaniqligi.
2. Surat va maxrajni $(x - 1)$ ga burchakli bo'lish yoki Gorner sxemasi orqali ajratamiz:
   - Surat: $x^3 - 3x + 2 = (x - 1)(x^2 + x - 2) = (x - 1)(x - 1)(x + 2) = (x - 1)^2 (x + 2)$
   - Maxraj: $x^4 - 4x + 3 = (x - 1)(x^3 + x^2 + x - 3) = (x - 1)(x - 1)(x^2 + 2x + 3) = (x - 1)^2 (x^2 + 2x + 3)$
3. Kasrni $(x - 1)^2$ ga qisqartiramiz:
   $$\lim_{x \to 1} \frac{(x - 1)^2 (x + 2)}{(x - 1)^2 (x^2 + 2x + 3)} = \lim_{x \to 1} \frac{x + 2}{x^2 + 2x + 3}$$
4. $x = 1$ ni qo'yamiz:
   $$\frac{1 + 2}{1^2 + 2(1) + 3} = \frac{3}{6} = \frac{1}{2}$$

**Javob:** $\frac{1}{2}$
</details>

---

### 3-mashq
Irratsional limitni hisoblang:
$$\lim_{x \to 7} \frac{\sqrt{x + 2} - 3}{\sqrt{x - 3} - 2}$$

<details>
<summary>Yechimni ko'rish</summary>

**Bosqichma-bosqich yechim:**
1. $x = 7$ da: surat $\sqrt{9} - 3 = 0$, maxraj $\sqrt{4} - 2 = 0$. $\left[ \frac{0}{0} \right]$ noaniqligi.
2. Suratni ham, maxrajni ham o'z qo'shmasiga ko'paytiramiz:
   - Suratning qo'shmasi: $\sqrt{x + 2} + 3$
   - maxrajning qo'shmasi: $\sqrt{x - 3} + 2$
3. Ifoda quyidagi ko'rinishga keladi:
   $$\lim_{x \to 7} \frac{[(\sqrt{x + 2} - 3)(\sqrt{x + 2} + 3)] \cdot (\sqrt{x - 3} + 2)}{[(\sqrt{x - 3} - 2)(\sqrt{x - 3} + 2)] \cdot (\sqrt{x + 2} + 3)}$$
4. Kvadratlar ayirmasini hisoblaymiz:
   - Suratdagi qavs: $(x + 2) - 9 = x - 7$
   - Maxrajdagi qavs: $(x - 3) - 4 = x - 7$
5. $(x - 7)$ ko'paytuvchilar qisqaradi:
   $$\lim_{x \to 7} \frac{\sqrt{x - 3} + 2}{\sqrt{x + 2} + 3}$$
6. $x = 7$ ni qo'yamiz:
   $$\frac{\sqrt{7 - 3} + 2}{\sqrt{7 + 2} + 3} = \frac{2 + 2}{3 + 3} = \frac{4}{6} = \frac{2}{3}$$

**Javob:** $\frac{2}{3}$
</details>

---

### 4-mashq
Parametrik limitni hisoblang ($n, m \in \mathbb{N}$):
$$\lim_{x \to 1} \frac{x^n - 1}{x^m - 1}$$

<details>
<summary>Yechimni ko'rish</summary>

**Bosqichma-bosqich yechim:**
1. Umumiy algebraik formulani eslaymiz:
   $$a^k - 1 = (a - 1)(a^{k-1} + a^{k-2} + \dots + a + 1)$$
2. Surat va maxrajni ushbu formula bo'yicha yoyamiz:
   $$\frac{x^n - 1}{x^m - 1} = \frac{(x - 1)(x^{n-1} + x^{n-2} + \dots + x + 1)}{(x - 1)(x^{m-1} + x^{m-2} + \dots + x + 1)}$$
3. $(x - 1)$ ga qisqartirib, $x \to 1$ da limitga o'tamiz:
   - Suratda jami $n$ ta $1$ soni yig'indisi: $1 + 1 + \dots + 1 = n$
   - maxrajda jami $m$ ta $1$ soni yig'indisi: $1 + 1 + \dots + 1 = m$
4. Natija: $\frac{n}{m}$.

**Javob:** $\frac{n}{m}$
</details>

---

## 💡 Imtihon Layfhaklari va Tezkor Maslahatlar

1. **"Oltin Qoida — Dastlab to'g'ridan-to'g'ri qo'yib ko'r":**
   Hech qachon limitni ko'rishingiz bilan uni almashtirish yoki qisqartirishga shoshilmang! Ko'pincha imtihonda chalg'ituvchi oddiy savollar tushadi: masalan, $\lim_{x \to 0} \frac{\cos x}{x + 1} = \frac{\cos 0}{0 + 1} = \frac{1}{1} = 1$. Agar noaniqlik bo'lmasa, darhol javob tayyor.

2. **Irratsional ifodalarni tezkor baholash (Nyuton binomi / hosila orqali):**
   Kichik $\alpha$ lar uchun $\sqrt{1 + \alpha} \approx 1 + \frac{1}{2}\alpha$. Masalan, 3-misolimizdagi $\sqrt{1 + 3x} \approx 1 + \frac{3}{2}x$ va $\sqrt{1 - 2x} \approx 1 - x$. 
   Surat: $(1 + 1.5x) - (1 - x) = 2.5x$.
   Maxraj: $x(x + 2) \approx 2x$.
   Nisbat: $\frac{2.5x}{2x} = 1.25 = \frac{5}{4}$. Bir necha soniyada qoralama tekshiruvi tayyor!

3. **Epsilon-delta isbotlarida qolip:**
   Chiziqli funksiya $f(x) = kx + b$ uchun $\lim_{x \to a} (kx + b) = ka + b$ ekanini isbotlashda har doim $\delta = \frac{\varepsilon}{|k|}$ deb olinadi. Bu qolipni yodda tutsangiz, chiziqli limitlarning isboti 30 soniyada yoziladi.
