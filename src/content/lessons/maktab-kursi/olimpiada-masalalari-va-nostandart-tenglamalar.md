---
title: "Olimpiada matematikasi: Diofant tenglamalari, Dirixle prinsipi va invariantlar"
description: "Butun sonli tenglamalar, Evklid algoritmi, Dirixle qutisi prinsipi, yarim-invariantlar va nostandart matematik mantiqiy masalalar."
module: "maktab-kursi"
order: 14
---

## 📌 Kirish va Amaliy Mohiyati

Xalqaro va Respublika matematika olimpiadalari (IMO, Al-Xorazmiy olimpiadasi) qatnashuvchidan standart shablon formulalarni yodlashni emas, balki chuqur intellektual mantiq, g'ayrioddiy tafakkur va qat'iy isbotlash san'atini talab qiladi.

Olimpiada masalalarini zabt etishda uchta universal "oltin kalit" mavjud:
1. Noma'lumlari butun sonlardan iborat bo'lgan **Diofant tenglamalari** (zamonaviy kriptografiya va blokcheyn xavfsizligi aynan shu algebraik asosda qurilgan);
2. Ko'rinishidan sodda, ammo qudratli xulosalarga olib keluvchi **Dirixle qutisi prinsipi**;
3. Har qanday o'zgarishlar va murakkab o'yinlarda o'z qiymatini saqlab qoluvchi o'zgarmas miqdorlar — **Invariantlar metodi**.

---

## 📐 Asosiy Nazariya, Qoidalar va Teoremalar

### 1. Chiziqli Diofant tenglamalari

Ikki noma'lumli chiziqli Diofant tenglamasi quyidagi ko'rinishga ega:
$$
ax + by = c \quad (a, b, c \in \mathbb{Z}, \; a^2 + b^2 \neq 0)
$$

> **Yechim mavjudligi teoremasi:**
> Ushbu tenglama butun sonli yechimlarga ega bo'lishi uchun $c$ soni $a$ va $b$ sonlarining eng katta umumiy bo'luvchisi $d = \text{EKUB}(a, b)$ ga qoldiqsiz bo'linishi zarur va yetarlidir:
> $$
> d \mid c \iff c = k \cdot \text{EKUB}(a, b)
> $$

Agar bitta xususiy butun yechim $(x_0, y_0)$ topilsa, tenglamaning **barcha butun yechimlar oilasi** quyidagi parametrli formula bilan beriladi ($t \in \mathbb{Z}$):
$$
\begin{cases}
x = x_0 + \frac{b}{d} t \\
y = y_0 - \frac{a}{d} t
\end{cases}
$$

---

### 2. Dirixle prinsipi (Pigeonhole Principle)

Nemis matematigi Peter Gustav Lejen Dirixle 1834-yilda kiritgan ushbu prinsipning mazmuni:

> **Klassik shakli:**
> Agar $n + 1$ ta quyon $n$ ta katakka joylashtirilsa, kamida bitta katakda kamida $2$ ta quyon bo'ladi.

> **Umumlashgan shakli:**
> Agar $N$ ta obyekt $k$ ta qutiga joylashtirilsa, u holda kamida bitta qutida kamida $\lceil N / k \rceil$ ta obyekt mavjud bo'ladi.

> **Geometrik Dirixle prinsipi:**
> Agar yuzasi $S$ bo'lgan shakl ichiga yuzalari yig'indisi $S$ dan katta bo'lgan bir nechta kichik figuralar joylashtirilsa, ulardan kamida ikkitasi o'zaro kesishadi (umumiy nuqtaga ega bo'ladi).

---

### 3. Invariantlar va Yarim-invariantlar

- **Invariant:** Dinamik tizim ustida biror operatsiya qayta-qayta bajarilganda ham qiymati mutlaqo o'zgarmay qoladigan miqdor (masalan: sonlar yig'indisining juftlik-toqligi, ma'lum $m$ modul bo'yicha qoldiq, shaxmat taxtasidagi ranglar balansi).
- **Yarim-invariant (Monovariativlik):** Har bir qadamda faqat bir yo'nalishda o'zgaruvchi (qat'iy o'suvchi yoki kamayuvchi) va chegaralangan kattalik. U jarayonning cheksiz davom etmasdan, albatta qachondir tugashini isbotlashda qo'llanadi.

---

## 📝 Qadamma-qadam Yechilgan Amaliy Misollar

### 1-misol: Kengaytirilgan Evklid algoritmi bilan Diofant tenglamasini yechish

**Masala:** $17x + 23y = 5$ tenglamaning barcha butun yechimlarini toping.

**Yechish:**
1. $\text{EKUB}(17, 23)$ ni Evklid algoritmi bilan topamiz:
   $$
   23 = 17 \cdot 1 + 6
   $$
   $$
   17 = 6 \cdot 2 + 5
   $$
   $$
   6 = 5 \cdot 1 + 1
   $$
   $$
   5 = 1 \cdot 5 + 0 \implies \text{EKUB}(17, 23) = 1
   $$
   Chunki $1 \mid 5$, butun yechimlar mavjud.
2. Qoldiqlarni teskari ifodalaymiz (Bezu ayniyati):
   $$
   1 = 6 - 5 \cdot 1
   $$
   $$
   5 = 17 - 6 \cdot 2 \implies 1 = 6 - (17 - 6 \cdot 2) = 6 \cdot 3 - 17 \cdot 1
   $$
   $$
   6 = 23 - 17 \cdot 1 \implies 1 = (23 - 17) \cdot 3 - 17 = 23 \cdot 3 - 17 \cdot 4
   $$
   $$
   17(-4) + 23(3) = 1
   $$
3. Tenglikning ikkala tomonini $5$ ga ko'paytiramiz:
   $$
   17(-20) + 23(15) = 5
   $$
   Xususiy yechim: $x_0 = -20, \; y_0 = 15$.
4. Umumiy yechimlar formulasini tuzamiz ($d = 1$):
   $$
   x = -20 + 23t, \quad y = 15 - 17t \quad (t \in \mathbb{Z})
   $$

**Javob:** $x = -20 + 23t, \; y = 15 - 17t, \quad t \in \mathbb{Z}$.

---

### 2-misol: Geometrik Dirixle prinsipi

**Masala:** Tomoni $1$ ga teng bo'lgan teng tomonli uchburchak ichiga ixtiyoriy $5$ ta nuqta tashlangan. Ular orasida masofasi $0.5$ dan oshmaydigan kamida ikkita nuqta mavjudligini isbotlang.

**Yechish:**
1. Teng tomonli uchburchakning har bir tomonining o'rtalarini tutashtiramiz (o'rta chiziqlar o'tkazamiz).
2. Natijada tomoni $0.5$ ga teng bo'lgan $4$ ta kichik teng tomonli uchburchaklar ("kataklar") hosil bo'ladi.
3. Kichik uchburchaklarning diametri (ichidagi eng uzoq ikki nuqta orasidagi masofa) uning tomoni uzunligi, ya'ni $0.5$ ga teng.
4. Bizda $5$ ta nuqta ("quyonlar") va $4$ ta kichik uchburchak ("kataklar") mavjud.
5. Dirixle prinsipiga asosan, kamida bitta kichik uchburchak ichiga kamida $\lceil 5/4 \rceil = 2$ ta nuqta tushishi shart.
6. Bir uchburchak ichidagi ikki nuqta orasidagi masofa esa $0.5$ dan oshmaydi. $\blacksquare$

---

### 3-misol: Juftlik invarianti va doskadagi sonlar

**Masala:** Doskaga $1, 2, 3, \dots, 2025, 2026$ sonlari yozilgan. Bitta yurishda ixtiyoriy ikkita $a$ va $b$ soni o'chirilib, ularning o'rniga ularning musbat ayirmasi $|a - b|$ yoziladi. Har bir yurishda sonlar soni 1 taga kamayadi. Oxirida doskada yagona bitta son qolganda, bu son $0$ bo'lishi mumkinmi?

**Yechish:**
1. Doskadagi barcha sonlarning yig'indisini $S$ deb belgilaymiz.
2. Ikkita $a$ va $b$ soni o'chirilib, o'rniga $|a - b|$ yozilganda, yangi yig'indi $S'$ qanday o'zgarishini tahlil qilamiz:
   $$
   S' = S - a - b + |a - b|
   $$
3. E'tibor beramiz: har qanday butun sonlar uchun $a + b$ va $|a - b| = a - b + 2\min(a, b)$ sonlari **bir xil juftlikka ega** (ularning ayirmasi $2b$ yoki $2a$ juft son).
   Demak:
   $$
   S' \equiv S \pmod 2
   $$
   Ya'ni doskadagi barcha sonlar yig'indisining **juftlik-toqligi hech qachon o'zgarmaydi (Invariant!)**.
4. Dastlabki yig'indining juftligini hisoblaymiz:
   $$
   S = \sum_{k=1}^{2026} k = \frac{2026 \times 2027}{2} = 1013 \times 2027
   $$
   Ikkala ko'paytuvchi ham toq son, demak dastlabki yig'indi $S$ — **toq sondir**.
5. Demak, ixtiyoriy qadamdan keyin, jumladan oxirida qolgan yagona son ham **albatta toq son bo'lishi shart!**
6. Biroq $0$ soni juft son.

**Javob:** Yo'q, oxirida $0$ qolishi mutlaqo mumkin emas (faqat toq son qoladi).

---

### 4-misol: Kvadratlar ayirmasi Diofant tenglamasi

**Masala:** $x^2 - y^2 = 2026$ tenglama butun sonli yechimlarga egami?

**Yechish:**
1. Chap tomonni ko'paytuvchilarga ajratamiz: $(x - y)(x + y) = 2026$.
2. Ikkala qavsning juftlik xossasini tekshiramiz:
   $$
   (x + y) - (x - y) = 2y \text{ — juft son}
   $$
   Demak, $(x - y)$ va $(x + y)$ ko'paytuvchilari yoki **ikkisi ham juft**, yoki **ikkisi ham toq** bo'lishi shart!
3. Agar ikkisi ham toq bo'lsa, ularning ko'paytmasi toq bo'lishi kerak edi (lekin 2026 juft).
4. Agar ikkisi ham juft bo'lsa, har biri $2$ ga bo'linadi, binobarin ularning ko'paytmasi kamida $2 \times 2 = 4$ ga bo'linishi shart:
   $$
   x^2 - y^2 \equiv 0 \pmod 4
   $$
5. Endi o'ng tomonni 4 ga bo'lamiz:
   $$
   2026 = 4 \times 506 + 2 \implies 2026 \equiv 2 \pmod 4
   $$
   Chap tomon 4 ga bo'linganda 0 yoki 1 qoldiq berishi mumkin, o'ng tomon esa 2 qoldiq bermoqda.

**Javob:** Tenglama butun sonlarda hech qanday yechimga ega emas.

---

## ⚠️ Talabalar Ko'p Yo'l Qo'yadigan Xatolar

> [!WARNING] Olimpiada yechimlarida ehtiyot bo'ling!
> 1. **Diofant tenglamasida $\text{EKUB}(a, b)$ shartini unutish:** Masalan, $6x + 9y = 20$ tenglamani yechishga soatlab vaqt sarflashadi, holbuki $\text{EKUB}(6, 9) = 3$ va $3 \nmid 20$ bo'lgani sababli yechim yo'qligi 1 soniyada ko'rinadi.
> 2. **Dirixle prinsipida "kataklar"ni noto'g'ri tanlash:** Masalani yechishning butun mahorati obyektlarni aynan qanday guruhlash (qaysi xossani "katak" deb olish)da namoyon bo'ladi.
> 3. **Invariant deb tanlangan kattalik amalda o'zgarib ketishi:** Invariantlikni da'vo qilishdan oldin, operatsiyaning har qanday parametrida uning doimiyligini qat'iy algebraik tenglik bilan isbotlash shart.

---

## 🎯 Mustaqil Yechish Uchun Masalalar

1. $13x + 8y = 1$ tenglamaning qandaydir bitta butun yechimini toping.
   - *Yechish:* $13(5) + 8(-8) = 65 - 64 = 1 \implies x_0 = 5, y_0 = -8$.
   - *Javob:* $x = 5 + 8t, \; y = -8 - 13t \quad (t \in \mathbb{Z})$.

2. 100 kishilik auditoriyada kamida necha kishi haftaning bir xil kunida tug'ilgan bo'lishi shart?
   - *Yechish:* $N = 100$, kataklar (hafta kunlari) $k = 7$. $\lceil 100 / 7 \rceil = \lceil 14.28 \rceil = 15$.
   - *Javob:* Kamida 15 kishi.

3. $x^2 + y^2 = 2027$ tenglama butun yechimlarga egami?
   - *Yechish:* Butun sonlar kvadrati $4$ ga bo'linganda faqat $0$ yoki $1$ qoldiq beradi. Ikki kvadrat yig'indisi mod 4 bo'yicha $0, 1, 2$ bo'lishi mumkin, lekin $2027 \equiv 3 \pmod 4$.
   - *Javob:* Yechimga ega emas.

4. 9 ta vagonli poyezdda har bir vagon boshqa barcha vagonlar bilan telefon simi orqali bog'langan. Har bir vagondan toq sondagi sim chiqishi mumkinmi?
   - *Yechish:* Har bir vagondan chiquvchi simlar soni (graflar nazariyasida cho'qqilar darajasi) yig'indisi $2 \times E$ (juft) bo'lishi shart. 9 ta toq sonning yig'indisi esa toq bo'lib qoladi (zidlik).
   - *Javob:* Mumkin emas.

---

## 💡 Xulosa va Imtihon Maslahatlari

- Olimpiada masalalariga duch kelganda quyidagi savollarni bering:
  - "Bu yerda qanday o'zgarmas miqdor (juftlik, qoldiq, yig'indi) bor?" $\to$ **Invariant**
  - "Narsalar soni o'rinlar sonidan ko'pmi?" $\to$ **Dirixle prinsipi**
  - "Tenglamaning modul bo'yicha qoldiqlari qanday?" $\to$ **Diofant / Modulli arifmetika**
- Nostandart tenglamalarni yechishda $\pmod 3$ va $\pmod 4$ bo'yicha kvadratlar qoldiqlarini tekshirish — yechim yo'qligini isbotlashning eng kuchli qurolidir.
