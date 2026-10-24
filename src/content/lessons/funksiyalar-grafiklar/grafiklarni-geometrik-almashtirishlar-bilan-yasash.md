---
title: "Funksiya grafigini elementar geometrik almashtirishlar yordamida yasash"
module: "funksiyalar-grafiklar"
order: 8
description: "Parallel ko'chirish (siljitish), o'qlar bo'ylab cho'zish va siqish, simmetrik aks ettirish hamda y = |f(x)|, y = f(|x|), y = |f(|x|)| grafiklarini qurish."
---

Oliy matematikada funksiyaning xossalarini tahlil qilish, tenglama ildizlari sonini baholash, integrallash chegaralarini aniqlash va ekstremumlarni yaqqol ko'rish uchun funksiya grafigini tez va aniq chiza olish talab etiladi. Ko'pgina murakkab ko'rinishdagi funksiyalarning grafiklarini nuqtama-nuqta hisoblab o'tirmasdan, **tayanch elementar funksiya** ($y = x^2$, $y = \sqrt{x}$, $y = \frac{1}{x}$, $y = e^x$, $y = \ln x$, $y = \sin x$ va h.k.) grafigini **elementar geometrik almashtirishlar** (siljitish, cho'zish-siqish, akslantirish) ketma-ketligiga bo'ysundirish orqali bir necha soniyada yasash mumkin.

---

## 1. Parallel ko'chirish (Siljitish) almashtirishlari

Faraz qilaylik, bizga $y = f(x)$ tayanch funksiyaning grafigi ma'lum bo'lsin.

### 1.1. $Ox$ o'qi bo'ylab gorizontal siljitish: $y = f(x - a)$
Agar argumentdan $a$ soni ayrilsa (yoki qo'shilsa), grafik o'z shaklini o'zgartirmagan holda gorizontal yo'nalishda siljiydi:
- **$y = f(x - a)$** ($a > 0$): grafik $Ox$ o'qi bo'ylab **$a$ birlik o'ngga** (musbat yo'nalishda) siljiydi.
- **$y = f(x + a)$** ($a > 0$): grafik $Ox$ o'qi bo'ylab **$a$ birlik chapga** (manfiy yo'nalishda) siljiydi.

> [!TIP]
> **Nima uchun "$x - a$" o'ngga, "$x + a$" esa chapga siljiydi?**
> Tayanch $f(t)$ funksiyaning "nol" nuqtasi (yoki uchi) $t = 0$ da bo'lsin. $f(x - a)$ funksiyada xuddi shu nuqtaga erishish uchun $x - a = 0 \implies x = a$ bo'lishi kerak! Demak, avval $x = 0$ da turgan nuqta endi $x = a$ ga (o'ngga) ko'chib o'tadi.

### 1.2. $Oy$ o'qi bo'ylab vertikal siljitish: $y = f(x) + b$
Agar funksiya qiymatiga o'zgarmas $b$ soni qo'shilsa, grafik vertikal yo'nalishda siljiydi:
- **$y = f(x) + b$** ($b > 0$): grafik $Oy$ o'qi bo'ylab **$b$ birlik yuqoriga** ko'tariladi.
- **$y = f(x) - b$** ($b > 0$): grafik $Oy$ o'qi bo'ylab **$b$ birlik pastga** tushadi.

---

## 2. O'qlar bo'ylab cho'zish va siqish (Masshtablash)

### 2.1. Vertikal cho'zish va siqish: $y = A \cdot f(x)$ ($A > 0$)
Funksiya oldidagi $A > 0$ koeffitsiyent har bir nuqtaning ordinatasini ($y$ qiymatini) $A$ marta o'zgartiradi, bunda grafikning $Ox$ o'qi bilan kesishish nuqtalari ($f(x) = 0$) **qo'zg'almas** qoladi:
- Agar **$A > 1$** bo'lsa, grafik $Ox$ o'qidan vertikal yo'nalishda **$A$ marta cho'ziladi**.
- Agar **$0 < A < 1$** bo'lsa, grafik $Ox$ o'qiga tomon vertikal yo'nalishda **$\frac{1}{A}$ marta siqiladi**.

### 2.2. Gorizontal siqish va cho'zish: $y = f(kx)$ ($k > 0$)
Argument oldidagi $k > 0$ koeffitsiyent har bir nuqtaning abssissasini ($x$ qiymatini) $k$ marta teskari proporsional o'zgartiradi, bunda grafikning $Oy$ o'qi bilan kesishish nuqtasi ($x = 0$) **qo'zg'almas** qoladi:
- Agar **$k > 1$** bo'lsa, grafik $Oy$ o'qiga tomon gorizontal yo'nalishda **$k$ marta siqiladi** (masalan, $y = \sin 2x$ ning davri $T = \frac{2\pi}{2} = \pi$ ga teng bo'lib, sinusoida 2 marta zichlashadi).
- Agar **$0 < k < 1$** bo'lsa, grafik $Oy$ o'qidan gorizontal yo'nalishda **$\frac{1}{k}$ marta cho'ziladi**.

---

## 3. Simmetrik aks ettirish (Ko'zgu almashtirishlari)

1. **$y = -f(x)$**: barcha ordinatalar ishorasi qarama-qarshisiga o'zgaradi — grafik **$Ox$ abssissalar o'qiga nisbatan simmetrik** aks ettiriladi (tepasi pastga, pasti tepaga ag'dariladi).
2. **$y = f(-x)$**: barcha abssissalar ishorasi qarama-qarshisiga o'zgaradi — grafik **$Oy$ ordinatalar o'qiga nisbatan simmetrik** aks ettiriladi (o'ng tomoni chapga, chap tomoni o'ngga o'tadi).
3. **$y = -f(-x)$**: grafik ham $Ox$, ham $Oy$ o'qiga nisbatan (ya'ni **koordinatalar boshi $(0; 0)$ nuqtaga nisbatan markaziy simmetrik**) aks ettiriladi.

---

## 4. Kombinatsiyalashgan almashtirish: $y = A \cdot f\big(k(x - a)\big) + b$

Amaliyotda bir nechta geometrik almashtirish birgalikda keladi. Bu yerda eng muhim qoida — argument ichidagi chiziqli $kx + c$ ifodadan **$k$ koeffitsiyentni qavs tashqarisiga chiqarib olishdir**:

$$
y = A \cdot f(kx + c) + b = A \cdot f\left(k\left(x + \frac{c}{k}\right)\right) + b
$$

> [!WARNING]
> **Eng ko'p uchraydigan xato:** $y = \sin(2x - \pi)$ grafigini yasashda ko'pchilik $\sin 2x$ grafigini $\pi$ birlik o'ngga suradi — bu **xato**!
> Argumentdan $2$ ni qavs tashqarisiga chiqarsak: $y = \sin\left(2\left(x - \frac{\pi}{2}\right)\right)$. Demak, siljish $\pi$ ga emas, balki **$\frac{\pi}{2}$ birlik o'ngga** bajariladi!

**Tavsiya etiladigan standart ketma-ketlik:**
1. Tayanch $y = f(x)$ grafigi chiziladi.
2. Gorizontal masshtablash va akslantirish: $y = f(kx)$.
3. Gorizontal siljitish: $y = f\big(k(x - a)\big)$ — grafik $a$ birlik o'ngga/chapga suriladi.
4. Vertikal masshtablash va akslantirish: $y = A \cdot f\big(k(x - a)\big)$.
5. Vertikal siljitish: $y = A \cdot f\big(k(x - a)\big) + b$ — grafik $b$ birlik yuqoriga/pastga suriladi.

---

## 5. Modul qatnashgan funksiyalar grafiklarini yasash

Modul ta'rifiga ko'ra $|u| = u$ ($u \ge 0$ da) va $|u| = -u$ ($u < 0$ da). Bundan uchta oltin grafik qoida kelib chiqadi:

> [!IMPORTANT]
> **Modulli grafiklarning 3 ta oltin qoidasi:**
> 1. **$y = |f(x)|$ (Tashqi modul):**
>    - $y = f(x)$ grafigining $Ox$ o'qidan **yuqorida** ($y \ge 0$) joylashgan qismi o'zgarishsiz qoldiriladi.
>    - $Ox$ o'qidan **pastda** ($y < 0$) joylashgan qismi $Ox$ o'qiga nisbatan **yuqoriga simmetrik aks ettiriladi** (qayrilish nuqtalarida o'tkir burchaklar hosil bo'ladi).
> 2. **$y = f(|x|)$ (Ichki modul):**
>    - $y = f(|x|)$ har doim **juft funksiya**dir!
>    - $y = f(x)$ grafigining $Oy$ o'qidan **chapdagi** ($x < 0$) qismi butunlay **o'chirib tashlanadi**.
>    - $Oy$ o'qidan **o'ngdagi** ($x \ge 0$) qismi o'zgarishsiz qoldirilib, uning nusxasi $Oy$ o'qiga nisbatan **chap yarim tekislikka simmetrik ko'chiriladi**.
> 3. **$y = |f(|x|)|$ (Qo'sh modul):**
>    - Avval $y = f(|x|)$ qoidasi (o'ng qismni chapga nusxalash), so'ngra tashqi modul qoidasi ($Ox$ dan pastki qismlarni yuqoriga qaytarish) ketma-ket bajariladi.

---

## 6. Bosqichma-bosqich yechilgan namunaviy misollar

### 1-misol. Kasr-ratsional funksiyani siljitish usuli bilan yasash
$y = \frac{2x - 1}{x - 2}$ funksiya grafigini elementar almashtirishlar yordamida yasash bosqichlarini ko'rsating.

**Yechish:**
Kasrning butun qismini ajratib, uni $y = \frac{A}{x - a} + b$ kanonik ko'rinishga keltiramiz:
$$
y = \frac{2x - 1}{x - 2} = \frac{2(x - 2) + 4 - 1}{x - 2} = 2 + \frac{3}{x - 2}
$$
Grafikni yasash ketma-ketligi:
1. **Tayanch funksiya:** $y_1 = \frac{1}{x}$ — I va III choraklarda yotuvchi giperbola (asimptotalari $x = 0$ va $y = 0$).
2. **Vertikal cho'zish:** $y_2 = \frac{3}{x}$ — giperbola $Ox$ o'qidan 3 marta cho'ziladi.
3. **Gorizontal siljitish:** $y_3 = \frac{3}{x - 2}$ — grafik $2$ birlik **o'ngga** suriladi (vertikal asimptota $x = 2$ to'g'ri chizig'iga ko'chadi).
4. **Vertikal siljitish:** $y = \frac{3}{x - 2} + 2$ — grafik $2$ birlik **yuqoriga** ko'tariladi (gorizontal asimptota $y = 2$ to'g'ri chizig'iga ko'chadi).
Natijada markazi $(2; 2)$ nuqtada joylashgan giperbola hosil bo'ladi.

---

### 2-misol. Logarifm va modullar kombinatsiyasi
$y = |\ln|x - 1||$ funksiya grafigini yasash algoritmini tuzing va uning $Ox$ o'qi bilan kesishish nuqtalarini toping.

**Yechish:**
Almashtirishlarni ichkaridan tashqariga qarab ketma-ket bajaramiz:
1. **Tayanch grafik:** $y_1 = \ln x$ ($x > 0$) — $(1; 0)$ nuqtadan o'tuvchi, $Oy$ o'qini vertikal asimptota qilgan o'suvchi egri chiziq.
2. **Ichki modul:** $y_2 = \ln|x|$ ($x \neq 0$) — $\ln x$ grafigi $Oy$ o'qiga nisbatan chap tomonga ($x < 0$) simmetrik aks ettiriladi. Grafik ikkita shoxdan iborat bo'lib, $(\pm 1; 0)$ nuqtalardan o'tadi.
3. **Gorizontal siljitish:** $y_3 = \ln|x - 1|$ ($x \neq 1$) — hosil bo'lgan juft shoxli grafik butunligicha $Ox$ o'qi bo'ylab **$1$ birlik o'ngga** siljiydi. Endi vertikal asimptota $x = 1$ chizig'i bo'ladi, $Ox$ o'qi bilan kesishish nuqtalari esa $1 - 1 = 0$ va $1 + 1 = 2$, ya'ni $(0; 0)$ va $(2; 0)$ nuqtalarga ko'chadi.
4. **Tashqi modul:** $y = |\ln|x - 1||$ — $x \in (0; 1) \cup (1; 2)$ oraliqlarda $y_3 < 0$ (grafik $Ox$ o'qidan pastda) bo'lgani uchun, shu qismlar $Ox$ o'qiga nisbatan **yuqoriga simmetrik qaytariladi**.
Natijada $x = 0$ va $x = 2$ nuqtalarda $Ox$ o'qiga tegib qaytadigan (o'tkir burchakli), $x \to 1$ da esa $+\infty$ ga intiluvchi grafik hosil bo'ladi.

---

### 3-misol. Kvadrat trinom va ichki modul: $y = x^2 - 4|x| + 3$
Ushbu funksiya grafigini yasang hamda $x^2 - 4|x| + 3 = c$ tenglama nechta haqiqiy ildizga ega bo'lishini $c$ parametrga bog'liq ravishda aniqlang.

**Yechish:**
$x^2 = |x|^2$ bo'lgani uchun funksiyani $y = |x|^2 - 4|x| + 3 = f(|x|)$ ko'rinishida yozish mumkin, bu yerda tayanch funksiya $f(x) = x^2 - 4x + 3 = (x - 2)^2 - 1$.
1. Avval $x \ge 0$ yarim tekislikda $f(x) = (x - 2)^2 - 1$ parabolasini chizamiz:
   - Parabolaning uchi: $(2; -1)$ nuqtada.
   - $Oy$ o'qi bilan kesishishi ($x = 0$): $(0; 3)$ nuqta.
   - $Ox$ o'qi bilan kesishishi ($x \ge 0$ da): $x = 1$ va $x = 3$.
2. Endi $f(|x|)$ qoidasiga ko'ra, $x \ge 0$ da chizilgan parabola qismini $Oy$ o'qiga nisbatan chapga ($x \le 0$ ga) simmetrik ko'chiramiz.
   - Chap tomonda ikkinchi uch $(-2; -1)$ nuqtada, $Ox$ bilan kesishishlar esa $x = -1$ va $x = -3$ da hosil bo'ladi.
   - Grafik "W" harfiga o'xshash shakl oladi!

Grafikni $y = c$ gorizontal chizig'i bilan kesishishlar sonini sanab, tenglama ildizlari sonini darhol topamiz:
- $c < -1$ da: **ildiz yo'q** (0 ta);
- $c = -1$ da: **2 ta ildiz** ($x = \pm 2$);
- $-1 < c < 3$ da: **4 ta ildiz**;
- $c = 3$ da: **3 ta ildiz** ($x = 0$ va $x = \pm 4$);
- $c > 3$ da: **2 ta ildiz**.

---

## 7. O'z-o'zini tekshirish savollari

> [!NOTE]
> Quyidagi savollarga javob bering:
> 1. $y = f(x)$ funksiya grafigidan $y = f(3 - x)$ grafigini hosil qilish uchun qanday almashtirishlar ketma-ketligini bajarish kerak? (Maslahat: $3 - x = -(x - 3)$).
> 2. Agar $y = f(x)$ funksiya juft bo'lsa, $y = f(|x|)$ grafigi $y = f(x)$ grafigidan farq qiladimi?
> 3. $y = |x^2 - 4|$ va $y = |x|^2 - 4$ funksiyalarining grafiklari bir xilmi? Nima uchun?

---

## 8. Mustaqil yechish uchun mashqlar

Quyidagi funksiyalarni kanonik ko'rinishga keltiring, grafiklarini yasash bosqichlarini yozing va asosiy nuqtalarini (asimptotalari, uchlari yoki o'qlar bilan kesishish nuqtalarini) toping:

1. $y = -2(x + 3)^2 + 8$
2. $y = \frac{3x + 5}{x + 1}$
3. $y = \sqrt{4 - 2x} - 1$
4. $y = |2^x - 4|$
5. $y = \big||x - 2| - 3\big|$ funksiya grafigini yasang va $y = 1$ to'g'ri chizig'i bilan nechta nuqtada kesishishini toping.

**Javoblar:**
1. Uchi $(-3; 8)$ nuqtada, shoxlari pastga qaragan parabola; $Ox$ bilan kesishish nuqtalari: $x = -5$ va $x = -1$; $Oy$ bilan kesishish nuqtasi: $(0; -10)$.
2. $y = 3 + \frac{2}{x + 1}$; vertikal asimptota $x = -1$, gorizontal asimptota $y = 3$.
3. $y = \sqrt{-2(x - 2)} - 1$; boshlang'ich nuqtasi $(2; -1)$, chapga ($x \le 2$) yo'nalgan yarim parabola; $Ox$ bilan kesishishi $x = \frac{3}{2}$, $Oy$ bilan kesishishi $(0; 1)$.
4. Gorizontal asimptotasi $y = 4$ (chap tomonda $x \to -\infty$ da, chunki $2^x - 4 \to -4$ modul ostida $+4$ ga aylanadi); $Ox$ o'qiga $(2; 0)$ nuqtada urinadi, $Oy$ o'qini $(0; 3)$ da kesadi.
5. Grafik "W" ko'rinishidagi siniq chiziqdan iborat (uchlari $(-1; 0)$, $(2; 3)$ va $(5; 0)$ nuqtalarda); $y = 1$ chizig'i bilan **4 ta nuqtada** ($x \in \{-2, 0, 4, 6\}$) kesishadi.
