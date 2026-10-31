---
title: "Funksiya grafigini elementar geometrik almashtirishlar yordamida yasash"
module: "funksiyalar-grafiklar"
order: 8
description: "Parallel ko'chirish (siljitish), o'qlar bo'ylab cho'zish va siqish, simmetrik aks ettirish hamda y = |f(x)|, y = f(|x|), y = |f(|x|)| grafiklarini qurish."
---

## 📌 Kirish va Geometrik/Fizik Mohiyat

Matematik analiz, amaliy fizika va muhandislik hisob-kitoblarida funksiyaning xossalarini tahlil qilish, tenglama ildizlari sonini aniqlash, integrallash sohasini ko'rish va optimallashtirish masalalarini yechish uchun funksiya grafigini ko'z oldiga keltira olish juda muhim sanaladi.

Maktabda ko'pchilik grafik chizishni "jadval tuzib, nuqtalarni birlashtirish" deb tushunadi. Ammo oliy matematikada bu usul juda sekin va ko'pincha qo'pol xatolarga olib keladi (masalan, muhim burilish yoki asimptotalar e'tibordan chetda qolishi mumkin).

Eng samarali va professional yondashuv — bu **tayanch elementar funksiyalar** ($y = x^2$, $y = \sqrt{x}$, $y = \frac{1}{x}$, $y = e^x$, $y = \ln x$, $y = \sin x$) grafiklarini yaxshi bilgan holda, ularga **geometrik almashtirishlar** (siljitish, masshtablash, akslantirish) zanjirini qo'llashdir.

Bu jarayon fizika va texnikada signallarni qayta ishlashga juda o'xshaydi:
- Tovush balandligini oshirish — bu to'lqin amplitudasini vertikal cho'zish ($y = A \sin x$);
- Radiostansiya chastotasini o'zgartirish — bu to'lqinni gorizontal siqish ($y = \sin(\omega x)$);
- Vaqt bo'yicha kechikish — bu to'lqinni gorizontal siljitish ($y = \sin(x - \varphi)$).

---

## 📐 Asosiy Nazariya, Qoidalar va Teoremalar

Bizga asosiy tayanch funksiya grafigi $y = f(x)$ ma'lum bo'lsin.

### 1. Parallel ko'chirish (Siljitish)

#### 1.1. Gorizontal siljitish ($Ox$ o'qi bo'ylab): $y = f(x - a)$
- **$y = f(x - a)$** ($a > 0$): grafik $Ox$ o'qi bo'ylab **$a$ birlik o'ngga** siljiydi;
- **$y = f(x + a)$** ($a > 0$): grafik $Ox$ o'qi bo'ylab **$a$ birlik chapga** siljiydi.

> [!NOTE]
> **Mantiqiy sabab:** Nima uchun argumentdan ayrilsa o'ngga siljiydi?
> Tayanch $f(t)$ funksiyaning xarakterli nuqtasi (masalan, parabola uchi) $t = 0$ da bo'lsin. $y = f(x - a)$ funksiyada xuddi shu holatga tushish uchun $x - a = 0 \implies x = a$ bo'lishi kerak. Ya'ni avval $0$ da turgan nuqta endi $x = a$ (o'ng tomondagi) nuqtaga ko'chadi!

#### 1.2. Vertikal siljitish ($Oy$ o'qi bo'ylab): $y = f(x) + b$
- **$y = f(x) + b$** ($b > 0$): grafik $Oy$ o'qi bo'ylab **$b$ birlik yuqoriga** ko'tariladi;
- **$y = f(x) - b$** ($b > 0$): grafik $Oy$ o'qi bo'ylab **$b$ birlik pastga** tushadi.

---

### 2. O'qlar bo'ylab cho'zish va siqish (Masshtablash)

#### 2.1. Vertikal masshtablash: $y = k \cdot f(x)$
- Agar $k > 1$ bo'lsa: grafik $Oy$ o'qi bo'ylab **$k$ marta cho'ziladi** (ordinatalar $k$ marta kattalashadi);
- Agar $0 < k < 1$ bo'lsa: grafik $Oy$ o'qi bo'ylab **$\frac{1}{k}$ marta siqiladi** (bostiriladi).

#### 2.2. Gorizontal masshtablash: $y = f(\omega x)$
- Agar $\omega > 1$ bo'lsa: grafik $Ox$ o'qi bo'ylab $Oy$ o'qiga qarab **$\omega$ marta siqiladi**;
- Agar $0 < \omega < 1$ bo'lsa: grafik $Ox$ o'qi bo'ylab $Oy$ o'qidan tashqariga **$\frac{1}{\omega}$ marta cho'ziladi**.

---

### 3. Simmetrik akslantirish (Ko'zgudagi aks)

- **$y = -f(x)$:** Har bir nuqtaning ordinatasi qarama-qarshisiga o'zgaradi. Grafik **$Ox$ o'qiga nisbatan ko'zgudek aks ettiriladi** (ostin-ustun bo'ladi).
- **$y = f(-x)$:** Grafik **$Oy$ o'qiga nisbatan ko'zgudek aks ettiriladi** (o'ng tomon chapga, chap tomon o'ngga o'tadi).
- **$y = -f(-x)$:** Grafik **koordinata boshiga $(0, 0)$ nisbatan markaziy simmetrik** aks ettiriladi.

---

### 4. Modul belgisi qatnashgan almashtirishlar

#### 4.1. Funksiya moduli: $y = |f(x)|$
$$|f(x)| = \begin{cases} f(x), & f(x) \ge 0 \\ -f(x), & f(x) < 0 \end{cases}$$
- **Qurish qoidasi:** Grafikning $Ox$ o'qidan yuqorida turgan (musbat) qismi o'zgarishsiz qoldiriladi. $Ox$ o'qidan pastda turgan (manfiy) qismi esa $Ox$ o'qiga nisbatan **yuqoriga ko'zgudek buklab qaytariladi**. Natijada grafik to'liq yuqori yarim tekislikda joylashadi.

#### 4.2. Argument moduli: $y = f(|x|)$
$$f(|x|) = \begin{cases} f(x), & x \ge 0 \\ f(-x), & x < 0 \end{cases}$$
- **Qurish qoidasi:** Funksiya juft funksiyaga aylanadi. Grafikning $x < 0$ (chapdagi) qismi butunlay o'chirib tashlanadi! $x \ge 0$ (o'ngdagi) qismi o'zgarishsiz qoldirilib, $Oy$ o'qiga nisbatan **chap tomonga ko'zgudek nusxalanadi**.

#### 4.3. Ikkitalik modul: $y = |f(|x|)|$
- Avval $y = f(|x|)$ qoidasi bajariladi, so'ngra hosil bo'lgan butun grafik uchun $y = |F(x)|$ qoidasi qo'llaniladi.

---

### 5. Almashtirishlarni bajarishning qat'iy tartibi

Murakkab funksiya $y = A \cdot f(\omega(x - a)) + B$ ko'rinishida berilganda, xatolikka yo'l qo'ymaslik uchun quyidagi tartibga qat'iy amal qilinadi:

1. **Tayanch grafik:** $y_1 = f(x)$
2. **Gorizontal masshtablash:** $y_2 = f(\omega x)$
3. **Gorizontal siljitish:** $y_3 = f(\omega(x - a))$
4. **Vertikal masshtablash va akslantirish:** $y_4 = A \cdot f(\omega(x - a))$
5. **Vertikal siljitish:** $y_5 = A \cdot f(\omega(x - a)) + B$

---

## 📝 Qadamma-qadam Yechilgan Universitet Misollari

### 1-misol: Kvadratik parabola grafigini bosqichma-bosqich yasash

**Shart:** $y = -2(x - 3)^2 + 8$ funksiya grafigini $y = x^2$ tayanch grafigidan foydalanib quring.

**Yechish:**
Boshlang'ich grafik: $y_0 = x^2$ (uchi $(0, 0)$ da bo'lgan standart parabola).

1. **1-qadam (O'ngga siljitish):**
   $y_1 = (x - 3)^2$. Grafik $Ox$ o'qi bo'ylab $3$ birlik o'ngga siljiydi. Parabola uchi $(3, 0)$ nuqtaga o'tadi.
2. **2-qadam (Vertikal cho'zish):**
   $y_2 = 2(x - 3)^2$. Grafik $Oy$ o'qi bo'ylab $2$ barobar cho'ziladi (torayadi).
3. **3-qadam ($Ox$ o'qiga nisbatan akslantirish):**
   $y_3 = -2(x - 3)^2$. Parabola shoxlari pastga qaraydi. Uchi yana $(3, 0)$ da.
4. **4-qadam (Yuqoriga siljitish):**
   $y = -2(x - 3)^2 + 8$. Grafik $Oy$ o'qi bo'ylab $8$ birlik yuqoriga ko'tariladi. Parabola uchi $(3, 8)$ nuqtaga joylashadi.

Grafikning $Ox$ o'qi bilan kesishish nuqtalarini tekshiramiz:
$$-2(x - 3)^2 + 8 = 0 \iff (x - 3)^2 = 4 \iff x - 3 = \pm 2 \implies x_1 = 1, \quad x_2 = 5$$
Demak, parabola $(1, 0)$ va $(5, 0)$ nuqtalardan o'tadi va uchi $(3, 8)$ da bo'ladi.

---

### 2-misol: Kasr-chiziqli funksiya (Giperbola)

**Shart:** $y = \frac{3x - 1}{x - 2}$ funksiya grafigini yasang.

**Yechish:**
1. Kasrning butun qismini ajratamiz:
   $$\frac{3x - 1}{x - 2} = \frac{3(x - 2) + 5}{x - 2} = 3 + \frac{5}{x - 2}$$
   Demak:
   $$y = \frac{5}{x - 2} + 3$$

2. Tayanch funksiya: $y = \frac{1}{x}$ (standart giperbola, asimptotalari $x = 0$ va $y = 0$).

3. Almashtirishlar zanjiri:
   - **$y_1 = \frac{5}{x}$:** Giperbola $Oy$ o'qi bo'ylab $5$ marta cho'ziladi;
   - **$y_2 = \frac{5}{x - 2}$:** Grafik $Ox$ o'qi bo'ylab $2$ birlik **o'ngga** siljiydi. Vertikal asimptota $x = 2$ to'g'ri chiziqqa ko'chadi;
   - **$y = \frac{5}{x - 2} + 3$:** Grafik $Oy$ o'qi bo'ylab $3$ birlik **yuqoriga** siljiydi. Gorizontal asimptota $y = 3$ to'g'ri chiziqqa ko'chadi.

4. Yangi simmetriya markazi: asimptotalar kesishgan nuqta $(2, 3)$.
   Grafik I va III choraklarda (yangi o'qlarga nisbatan) joylashadi.

---

### 3-misol: Trigonometrik garmonik tebranish grafigi

**Shart:** $y = 2\sin\left(2x - \frac{\pi}{3}\right) + 1$ funksiya grafigini yasash bosqichlarini aniqlang.

**Yechish:**
> [!CAUTION]
> **Katta tuzoq:** Ko'pchilik $x$ dan $\frac{\pi}{3}$ ayrilgan deb o'ylab, grafikni $\frac{\pi}{3}$ birlik o'ngga siljitadi. Bu qat'iyan xato! Dastlab $x$ oldidagi koeffitsiyentni qavsdan chiqarish shart:
> $$y = 2\sin\left[ 2 \left( x - \frac{\pi}{6} \right) \right] + 1$$

Almashtirishlar ketma-ketligi:
1. $y_0 = \sin x$ — davri $T = 2\pi$, amplitudasi $1$.
2. $y_1 = \sin(2x)$ — $Ox$ o'qi bo'ylab $2$ marta siqiladi. Yangi davr: $T = \frac{2\pi}{2} = \pi$.
3. $y_2 = \sin\left[ 2 \left( x - \frac{\pi}{6} \right) \right]$ — $Ox$ o'qi bo'ylab $\frac{\pi}{6}$ birlik **o'ngga** siljiydi.
4. $y_3 = 2\sin\left[ 2 \left( x - \frac{\pi}{6} \right) \right]$ — vertikal $2$ marta cho'ziladi. Amplituda $2$ ga teng bo'ladi ($[-2, 2]$ oraliq).
5. $y = 2\sin\left(2x - \frac{\pi}{3}\right) + 1$ — $1$ birlik yuqoriga ko'tariladi. Qiymatlar sohasi $[-1, 3]$ bo'ladi.

---

### 4-misol: Modulli almashtirish va parametrli masala

**Shart:** $y = |x^2 - 4|x| + 3|$ funksiya grafigini yasang va $y = a$ to'g'ri chiziq bilan aynan $6$ ta umumiy nuqtaga ega bo'ladigan $a$ parametr qiymatlarini toping.

**Yechish:**
1. Boshlang'ich funksiya: $f(x) = x^2 - 4x + 3 = (x - 2)^2 - 1$. Uchi $(2, -1)$ da, nollari $x = 1, 3$.

2. **1-almashtirish ($y_1 = f(|x|) = x^2 - 4|x| + 3$):**
   - $x \ge 0$ qismini qoldiramiz (uchi $(2, -1)$, nollari $1$ va $3$);
   - $Oy$ o'qiga nisbatan chap tomonga ko'zgudek aks ettiramiz.
   - Natijada uchi ikkita bo'ladi: $(2, -1)$ va $(-2, -1)$; nollari: $\{-3, -1, 1, 3\}$; $y$-kesishuv: $(0, 3)$.

3. **2-almashtirish ($y = |f(|x|)|$):**
   - $Ox$ o'qidan pastda turgan oraliqlar $[-3, -1]$ va $[1, 3]$ dagi "chuqurlik"larni yuqoriga buklaymiz.
   - Avvalgi minimum nuqtalar $(-2, -1)$ va $(2, -1)$ endi **maksimum nuqtalarga** aylanadi: $(-2, 1)$ va $(2, 1)$!
   - Minimumlar esa to'liq $Ox$ o'qi ustida $y = 0$ bo'lib yotadi.

4. **$y = a$ to'g'ri chiziq bilan kesishishlar soni tahlili:**
   - $a < 0$: $0$ ta yechim (grafik $Ox$ dan pastga tushmaydi);
   - $a = 0$: $4$ ta yechim ($\{-3, -1, 1, 3\}$);
   - $0 < a < 1$: Gorizontal chiziq 4 ta yonbosh va 2 ta o'rtadagi buklangan sohani kesib o'tadi $\implies$ **aynan 6 ta umumiy nuqta**!
   - $a = 1$: Ular cho'qqilarga teginadi $\implies 7$ ta yechim;
   - $1 < a < 3$: $4$ ta yechim;
   - $a = 3$: $3$ ta yechim;
   - $a > 3$: $2$ ta yechim.

**Javob:** $y = a$ to'g'ri chiziq grafik bilan aynan 6 ta umumiy nuqtaga ega bo'lishi uchun $a \in (0, 1)$ bo'lishi zarur va yetarli.

---

## ⚠️ Talabalar Eng Ko'p Yo'l Qo'yadigan Xatolar va Tuzoqlar

1. **$f(kx + b)$ da siljish miqdorini noto'g'ri olish:**
   Eng ko'p tarqalgan xato: $f(3x - 6)$ funksiyada grafikni $6$ birlik o'ngga siljitish deb o'ylashadi. 
   **To'g'risi:** $x$ ning oldidagi koeffitsiyent qavsdan tashqariga chiqarilishi shart: $f(3(x - 2))$. Demak, grafik faqat **$2$ birlik o'ngga** siljiydi!

2. **$y = f(|x|)$ da noto'g'ri tomonni aks ettirish:**
   Ba'zi talabalar grafikning chap tomonini o'ng tomonga nusxalashadi. Mutlaqo teskarisi: **$x < 0$ qismi butunlay o'chiriladi**, faqat o'ng tomon ($x \ge 0$) saqlanib, u chap tomonga aks ettiriladi!

3. **Modulni buklashda uchlarning yo'qolib ketishi:**
   $y = |f(x)|$ da $Ox$ o'qini kesib o'tgan nuqtalarda hosila yo'qoladi va silliq egri chiziq o'rniga o'tkir burchakli "sinish" nuqtalari paydo bo'ladi. Grafikni silliq qilib chizish xatodir.

4. **Cho'zish va siljitish tartibini almashtirish:**
   Agar avval siljitib, keyin cho'zsangiz, butunlay boshqa funksiya hosil bo'ladi. Har doim qavslar ierarxiyasiga qat'iy rioya qiling.

---

## 🎯 Mustaqil Yechish Uchun Amaliy Mashqlar va Yechimlar

### 1-mashq
$y = \sqrt{6 - 2x}$ funksiya grafigini $y = \sqrt{x}$ tayanch grafigidan foydalanib yasashning to'g'ri ketma-ketligini ko'rsating.

<details>
<summary>Yechimni ko'rish</summary>

**Bosqichma-bosqich yechim:**
1. Ildiz ostidagi ifodadan $-2$ ni qavsdan tashqariga chiqaramiz:
   $$y = \sqrt{-2(x - 3)}$$
2. Boshlang'ich grafik: $y_0 = \sqrt{x}$ ($x \ge 0$).
3. Gorizontal siqish: $y_1 = \sqrt{2x}$ ($Ox$ bo'ylab $2$ marta siqiladi).
4. $Oy$ o'qiga nisbatan akslantirish: $y_2 = \sqrt{-2x}$ (grafik chap yarim tekislikka o'tadi, $x \le 0$).
5. Gorizontal siljitish: $y = \sqrt{-2(x - 3)}$ ($Ox$ bo'ylab $3$ birlik **o'ngga** siljiydi).
   Boshlanish nuqtasi: $(3, 0)$, shox chapga yo'nalgan.
</details>

---

### 2-mashq
$y = \frac{2x + 5}{x + 1}$ kasr-chiziqli funksiya grafigini yasang va uning asimptotalarini toping.

<details>
<summary>Yechimni ko'rish</summary>

**Bosqichma-bosqich yechim:**
1. Butun qismini ajratamiz:
   $$\frac{2x + 5}{x + 1} = \frac{2(x + 1) + 3}{x + 1} = 2 + \frac{3}{x + 1}$$
2. Asimptotalar:
   - Vertikal asimptota: mahraj nolga teng bo'lganda $\implies x = -1$.
   - Gorizontal asimptota: $x \to \infty$ da $y \to 2 \implies y = 2$.
3. Tayanch giperbola $y = \frac{3}{x}$ ning markazi $(-1, 2)$ nuqtaga ko'chadi va I hamda III choraklarda joylashadi.
</details>

---

### 3-mashq
$y = 2^{|x| - 1}$ funksiya grafigini yasash ketma-ketligini bayon qiling.

<details>
<summary>Yechimni ko'rish</summary>

**Bosqichma-bosqich yechim:**
1. Tayanch eksponenta: $y_0 = 2^x$.
2. $Ox$ bo'ylab $1$ birlik o'ngga siljitish: $y_1 = 2^{x - 1}$. Bu grafik $(1, 1)$ va $(0, 0.5)$ nuqtalardan o'tadi.
3. Argumentga modul qo'yish: $y = 2^{|x| - 1}$.
   - $x \ge 0$ qismini saqlaymiz;
   - Ushbu qismni $Oy$ o'qi orqali chap tomonga ko'zgudek nusxalaymiz.
   - Grafik $x = 0$ da burchakli minimum hosil qiladi: $y(0) = 2^{-1} = 0.5$.
</details>

---

## 💡 Imtihon Layfhaklari va Tezkor Maslahatlar

1. **"Qavs ichini nolga tenglashtir" layfhaki:**
   Murakkab argumentli funksiya (masalan, $f(5x - 15)$) qayerga siljishini bilish uchun qavs ichini shunchaki nolga tenglashtiring:
   $$5x - 15 = 0 \implies 5x = 15 \implies x = 3$$
   Musbat $3$ chiqdimi? Demak, grafik **o'ngga $3$ birlik** siljiydi! Hech qanday chalkashliksiz, bir zumda aniqlanadi.

2. **Kasr-chiziqli funksiyaning asimptotalarini og'zaki topish:**
   $y = \frac{ax + b}{cx + d}$ funksiya uchun:
   - Vertikal asimptota: $x = -\frac{d}{c}$ (mahraj nol bo'lganda);
   - Gorizontal asimptota: $y = \frac{a}{c}$ ($x$ oldidagi koeffitsiyentlar nisbati).
   Bu ikki chiziqni chizib olsangiz, giperbola 90% tayyor bo'ladi!

3. **Parametrli tenglamalarni grafik orqali yechish kuchi:**
   $|f(x)| = a$ yoki $f(|x|) = a$ ko'rinishidagi tenglamalar ildizlar sonini so'ragan masalalarda hech qachon tenglamani algebraik yechishga urinmang! Grafikni chizing va gorizontal $y = a$ chizig'ini pastdan yuqoriga surib, kesishishlar sonini sanang. Bu usul imtihonda 10-15 daqiqa vaqtingizni tejaydi.
