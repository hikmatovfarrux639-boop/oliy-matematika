---
title: "Amaliy ekstremum va optimallashtirish masalalari"
module: "funksiyalar-grafiklar"
order: 6
description: "Kesmadagi eng katta va eng kichik qiymat, amaliy geometrik va iqtisodiy optimallashtirish masalalari (maksimal hajm, minimal material sarfi) va ko'p usulli yechimlar."
---

## 📌 Kirish va Geometrik/Fizik Mohiyat

Insoniyat tarixida matematika har doim amaliy ehtiyojlar tufayli rivojlangan. Biz cheklangan resurslar (vaqt, pul, metall, energiya) dunyosida yashaymiz. Shuning uchun muhandis, iqtisodchi, dasturchi yoki tabiatshunos oldida har kuni quyidagi fundamental savol turadi: **"Mavjud cheklovlar ostida eng yaxshi natijaga qanday erishish mumkin?"**

Qadimiy afsonaga ko'ra, Finikiya malikasi Didona Shimoliy Afrikaga kelib, mahalliy qabiladan "bitta buqa terisi bilan o'rab olinadigan yer" so'raydi. U terini juda ingichka tasmalar qilib kesib, ularni bir-biriga ulaydi va dengiz sohilidagi ulkan yarim aylana maydonni o'rab oladi — natijada qudratli Karfagen shahriga asos solinadi. Bu matematika tarixidagi eng birinchi **izoperimetrik optimallashtirish masalasi** edi.

Bugungi zamonaviy texnologiyalarda ham xuddi shu qonuniyatlar amal qiladi:
- Kosmik kema yonilg'i bakining massasi minimal, lekin sig'imi maksimal bo'lishi kerak;
- Sanoat korxonasi o'z mahsulotiga qanday narx qo'ysa, sof daromad (foyda) maksimal bo'ladi?
- Yorug'lik nuri bir muhitdan ikkinchisiga o'tayotganda tabiatdagi **eng kam vaqt sarflanadigan yo'lni** tanlaydi (Ferma prinsipi).

Mana shu turdagi barcha masalalar matematikaning **amaliy ekstremum va optimallashtirish masalalari** deb ataluvchi bo'limini tashkil etadi va ularning matematik poydevori differensial hisob hisoblanadi.

---

## 📐 Asosiy Nazariya, Qoidalar va Teoremalar

Amaliy masalalarni yechish quruq formulalarni yodlashdan iborat emas. Bu yerda real hayotiy vaziyatni matematik tilga (tenglama va funksiyaga) o'girish talab qilinadi.

### Optimallashtirish masalalarini yechishning 5 bosqichli universal modeli

```
[1-BOSQICH] Erkin o'zgaruvchini tanlash va maqsad funksiyasini belgilash
            (Masalan: Sirt yuzi S, Hajm V, Foyda P)
     │
     ▼
[2-BOSQICH] Bog'lanish tenglamasini tuzish va bitta o'zgaruvchiga keltirish
            (Ikkinchi o'zgaruvchini birinchisi orqali ifodalash: y = φ(x))
     │
     ▼
[3-BOSQICH] Maqsad funksiyasining real fizik/geometrik aniqlanish sohasini topish
            (Masalan: x > 0 yoki x ∈ [0, L/2])
     │
     ▼
[4-BOSQICH] Differensiallash va statsionar nuqtalarni aniqlash
            (F'(x) = 0 tenglamani yechish)
     │
     ▼
[5-BOSQICH] Ekstremum turini tekshirish (F''(x) yoki hosila ishorasi) 
            va yakuniy amaliy xulosa chiqarish
```

---

### Asosiy matematik mezonlar

1. **Statsionar nuqta:** Differensiallanuvchi funksiya o'zining ekstremumiga erishishi uchun Ferma teoremasiga ko'ra hosila nolga teng bo'lishi zarur:
   $$F'(x) = 0$$

2. **Ekstremumning yetarli sharti (Ikkinchi hosila alomati):**
   Aytaylik, $F'(x_0) = 0$ bo'lsin:
   - Agar $F''(x_0) < 0$ bo'lsa $\implies x_0$ nuqtada **qat'iy maksimum** (eng katta qiymat);
   - Agar $F''(x_0) > 0$ bo'lsa $\implies x_0$ nuqtada **qat'iy minimum** (eng kichik qiymat);
   - Agar $F''(x_0) = 0$ bo'lsa $\implies$ birinchi hosilaning $x_0$ atrofidagi ishora o'zgarishi tekshiriladi ($+ \to -$ bo'lsa maksimum, $- \to +$ bo'lsa minimum).

3. **Yagona statsionar nuqta teoremasi:**
   Agar uzluksiz funksiya ochiq yoki cheksiz oraliqda **yagona** kritik nuqtaga ega bo'lib, u lokal maksimum (minimum) bo'lsa, u holda ushbu nuqta butun oraliqdagi **mutlaq global maksimum (minimum)** bo'ladi.

---

## 📝 Qadamma-qadam Yechilgan Universitet Misollari

### 1-misol: Karton varaqdan maksimal hajmli quti yasash

**Shart:** Tomoni $a = 60\text{ cm}$ bo'lgan kvadrat shaklidagi tunuka varaq berilgan. Uning to'rtta burchagidan bir xil kichik kvadratlar qirqib olinib, chetlari yuqoriga buklanadi va usti ochiq to'g'ri burchakli quti yasaladi. Qutining hajmi eng katta (maksimal) bo'lishi uchun burchaklardan qirqib olinadigan kvadratlarning tomoni qanday bo'lishi kerak?

**Yechish:**
1. **O'zgaruvchi:** Qirqib olinadigan kvadrat tomonini $x$ deb belgilaymiz.
2. **Geometrik cheklov:** Varaq tomoni $60\text{ cm}$ bo'lgani uchun va har ikki tomondan $x$ qirqilgani sababli:
   $$0 < x < 30\text{ cm}$$
3. **Quti o'lchamlari:**
   - Asosining tomonlari: $(60 - 2x)$ va $(60 - 2x)$;
   - Qutining balandligi: $x$.
4. **Maqsad funksiyasi (Quti hajmi):**
   $$V(x) = \text{asos yuzi} \cdot \text{balandlik} = (60 - 2x)^2 \cdot x$$
   Qavslarni ochamiz:
   $$V(x) = (3600 - 240x + 4x^2)x = 4x^3 - 240x^2 + 3600x$$

5. **Hosilani topamiz va nolga tenglashtiramiz:**
   $$V'(x) = 12x^2 - 480x + 3600 = 0$$
   Tenglamaning ikkala qismini $12$ ga bo'lamiz:
   $$x^2 - 40x + 300 = 0$$
   Viyet teoremasiga ko'ra ildizlarni topamiz:
   $$(x - 10)(x - 30) = 0 \implies x_1 = 10\text{ cm}, \quad x_2 = 30\text{ cm}$$

6. **Tahlil va tekshirish:**
   - $x_2 = 30$ bo'lishi mumkin emas, chunki bu holda tunukadan hech narsa qolmaydi ($V(30) = 0$).
   - $x_1 = 10 \in (0, 30)$ oralig'iga kiradi.
   Ikkinchi hosilani hisoblaymiz:
   $$V''(x) = 24x - 480 \implies V''(10) = 24(10) - 480 = 240 - 480 = -240 < 0$$
   Ikkinchi hosila manfiy, demak $x = 10\text{ cm}$ nuqtada hajm haqiqatan ham **maksimal** bo'ladi!

7. **Maksimal hajmni hisoblash:**
   $$V_{\max} = (60 - 2 \cdot 10)^2 \cdot 10 = 40^2 \cdot 10 = 1600 \cdot 10 = 16\,000\text{ cm}^3 = 16\text{ litr}$$

**Javob:** Burchaklardan tomoni $10\text{ cm}$ bo'lgan kvadratlar qirqilishi kerak. Maksimal hajm: $16\,000\text{ cm}^3$.

---

### 2-misol: Minimal material sarfi (Muhandislik silindri)

**Shart:** Hajmi $V$ ga teng bo'lgan yopiq silindrsimon konserva idishi tayyorlanishi kerak. Idish sirtiga eng kam tunuka sarflanishi (to'la sirt yuzi minimal bo'lishi) uchun uning balandligi $h$ va asos radiusi $r$ o'rtasida qanday nisbat bo'lishi kerak?

**Yechish:**
1. **Formulalar:**
   - Silindr hajmi: $V = \pi r^2 h \implies h = \frac{V}{\pi r^2}$ (bog'lanish tenglamasi);
   - To'la sirt yuzi: $S = 2\pi r^2 + 2\pi r h$.
2. **Maqsad funksiyasini bitta $r$ o'zgaruvchiga keltiramiz:**
   $$S(r) = 2\pi r^2 + 2\pi r \left( \frac{V}{\pi r^2} \right) = 2\pi r^2 + \frac{2V}{r} \quad (r > 0)$$
3. **Hosila olamiz:**
   $$S'(r) = 4\pi r - \frac{2V}{r^2}$$
4. **Hosilani nolga tenglashtiramiz:**
   $$4\pi r - \frac{2V}{r^2} = 0 \iff 4\pi r = \frac{2V}{r^2} \iff 2\pi r^3 = V \iff r = \sqrt[3]{\frac{V}{2\pi}}$$
5. **Balandlik $h$ ni hisoblaymiz:**
   $$h = \frac{V}{\pi r^2} = \frac{2\pi r^3}{\pi r^2} = 2r$$
6. **Ekstremumni tekshirish:**
   $$S''(r) = 4\pi + \frac{4V}{r^3} > 0 \quad (\text{chunki } r > 0, V > 0)$$
   Ikkinchi hosila musbat, demak bu nuqtada sirt yuzi mutlaq **minimaldir**!

> **Oltin muhandislik xulosasi:**
> Konserva idishiga eng kam metall sarflanishi uchun uning balandligi asos diametriga teng bo'lishi shart:
> $$ h = 2r = d $$
> Aynan shuning uchun do'konlardagi standart konserva bankalarining bo'yi va eni deyarli teng yasaladi!

**Javob:** $h = 2r$ (balandlik asos diametriga teng bo'lishi kerak).

---

### 3-misol: Iqtisodiyotda foydani maksimallashtirish

**Shart:** Korxonaning ishlab chiqarish hajmi $q$ ga bog'liq bo'lgan umumiy daromad funksiyasi $R(q) = 1200q - 2q^2$ va umumiy xarajat funksiyasi $C(q) = q^2 + 300q + 5000$ berilgan. Korxona maksimal foyda olishi uchun qancha mahsulot ishlab chiqarishi kerak va maksimal foyda qancha bo'ladi?

**Yechish:**
1. **Maqsad funksiyasi (Sof foyda):**
   Foyda — bu umumiy daromaddan umumiy xarajatlarning ayirmasiga teng:
   $$P(q) = R(q) - C(q) = (1200q - 2q^2) - (q^2 + 300q + 5000)$$
   $$P(q) = -3q^2 + 900q - 5000 \quad (q \ge 0)$$
2. **Kritik nuqtani topamiz:**
   $$P'(q) = -6q + 900 = 0 \implies 6q = 900 \implies q = 150$$
3. **Ekstremumni tekshiramiz:**
   $$P''(q) = -6 < 0$$
   Ikkinchi hosila doim manfiy bo'lgani sababli, $q = 150$ nuqta global **maksimum** nuqtasidir.
4. **Maksimal sof foydani hisoblaymiz:**
   $$P(150) = -3(150^2) + 900(150) - 5000 = -3(22500) + 135000 - 5000 = -67500 + 135000 - 5000 = 62\,500$$

**Javob:** Maksimal foyda olish uchun $150$ birlik mahsulot ishlab chiqarilishi kerak; Maksimal sof foyda: $62\,500$ pul birligi.

---

### 4-misol: Ferma prinsipi va yorug'likning sinish qonuni

**Shart:** Qutqaruvchi sohil bo'yidagi $A(0, a)$ nuqtada turibdi, dengizdagi cho'kayotgan odam esa $B(d, -b)$ nuqtada ($a, b, d > 0$). Qutqaruvchining quruqlikdagi yugurish tezligi $v_1$, suvdagi suzish tezligi esa $v_2$ ($v_1 > v_2$). Qutqaruvchi odam oldiga eng qisqa vaqtda yetib borishi uchun qirg'oqning qaysi nuqtasidan suvga kirishi kerak?

**Yechish:**
1. Qirg'oq chizig'ini $Ox$ o'qi deb olaylik. Qutqaruvchi qirg'oqdagi $M(x, 0)$ nuqtadan suvga kirdi deb faraz qilaylik ($0 \le x \le d$).
2. Masofalar:
   - Quruqlikdagi masofa: $L_1 = \sqrt{a^2 + x^2}$;
   - Suvdagi masofa: $L_2 = \sqrt{b^2 + (d - x)^2}$.
3. Sarflangan umumiy vaqt:
   $$T(x) = \frac{L_1}{v_1} + \frac{L_2}{v_2} = \frac{\sqrt{a^2 + x^2}}{v_1} + \frac{\sqrt{b^2 + (d - x)^2}}{v_2}$$
4. Eng kam vaqt sharti: $T'(x) = 0$:
   $$T'(x) = \frac{1}{v_1} \cdot \frac{2x}{2\sqrt{a^2 + x^2}} + \frac{1}{v_2} \cdot \frac{2(d - x)(-1)}{2\sqrt{b^2 + (d - x)^2}} = 0$$
   $$\frac{x}{v_1 \sqrt{a^2 + x^2}} = \frac{d - x}{v_2 \sqrt{b^2 + (d - x)^2}}$$
5. Geometrik ma'nosi:
   $\frac{x}{\sqrt{a^2 + x^2}} = \sin \alpha_1$ (tushish burchagi sinusi) va $\frac{d - x}{\sqrt{b^2 + (d - x)^2}} = \sin \alpha_2$ (sinish burchagi sinusi).
   Demak:
   $$\frac{\sin \alpha_1}{v_1} = \frac{\sin \alpha_2}{v_2} \iff \frac{\sin \alpha_1}{\sin \alpha_2} = \frac{v_1}{v_2}$$
   Biz optikadagi mashhur **Snellius sinish qonunini** hosila yordamida to'liq keltirib chiqardik!

---

## ⚠️ Talabalar Eng Ko'p Yo'l Qo'yadigan Xatolar va Tuzoqlar

1. **Bitta o'zgaruvchiga keltirmasdan hosila olish:**
   Ko'pincha talabalar $V = \pi r^2 h$ ifodani ko'rib, $r$ va $h$ ikkalasi ham o'zgaruvchi ekanini unutib, faqat $r$ bo'yicha hosila olib qo'yishadi. Avval albatta bog'lanish tenglamasidan bittasini ikkinchisi orqali ifodalab olish shart!

2. **Fizik ma'noga ega bo'lmagan ildizlarni tanlash:**
   Kritik nuqtalar orasida manfiy sonlar yoki masalaning geometrik o'lchamlaridan oshib ketadigan ildizlar bo'lishi mumkin. Ularni tekshirmasdan javobga yozish xatodir.

3. **Maksimum o'rniga minimum nuqtani olib ketish:**
   $F'(x) = 0$ faqat statsionar nuqtani beradi. U maksimummi yoki minimummi — buni ikkinchi hosila $F''(x)$ yoki ishora orqali isbotlash shart.

4. **Savolni noto'g'ri o'qish:**
   Masalada "qutining o'lchamlarini toping" deb so'ralgan bo'lsa-yu, talaba faqat $x$ ni topib, $V_{\max}$ ni topmasdan yoki aksincha, o'lchamlarni yozmasdan ketsa, imtihonda ball yo'qotadi.

---

## 🎯 Mustaqil Yechish Uchun Amaliy Mashqlar va Yechimlar

### 1-mashq
Perimetri $P = 40\text{ m}$ bo'lgan barcha to'g'ri to'rtburchaklar ichida eng katta yuzaga ega bo'lganining o'lchamlarini va maksimal yuzini toping.

<details>
<summary>Yechimni ko'rish</summary>

**Bosqichma-bosqich yechim:**
1. Tomonlari $x$ va $y$. Perimetr: $2(x + y) = 40 \implies x + y = 20 \implies y = 20 - x$.
2. Yuza funksiyasi:
   $$S(x) = x \cdot y = x(20 - x) = 20x - x^2 \quad (0 < x < 20)$$
3. Hosila:
   $$S'(x) = 20 - 2x = 0 \implies 2x = 20 \implies x = 10\text{ m}$$
4. $y = 20 - 10 = 10\text{ m}$.
   $S''(x) = -2 < 0$ (maksimum).
5. Demak, to'g'ri to'rtburchak kvadrat bo'lishi kerak.
   Maksimal yuza: $S_{\max} = 10 \cdot 10 = 100\text{ m}^2$.

**Javob:** Tomonlari $10\text{ m} \times 10\text{ m}$ bo'lgan kvadrat; Maksimal yuza: $100\text{ m}^2$.
</details>

---

### 2-mashq
Radiusi $R$ bo'lgan doiraga ichki chizilgan to'g'ri to'rtburchaklar ichida eng katta yuzaga ega bo'lganining tomonlarini toping.

<details>
<summary>Yechimni ko'rish</summary>

**Bosqichma-bosqich yechim:**
1. Doiraga ichki chizilgan to'g'ri to'rtburchakning diagonali doira diametriga teng: $d = 2R$.
2. Pifagor teoremasiga ko'ra: $x^2 + y^2 = (2R)^2 = 4R^2 \implies y = \sqrt{4R^2 - x^2}$.
3. Yuza funksiyasi:
   $$S(x) = x \cdot \sqrt{4R^2 - x^2}$$
4. Hisoblashni osonlashtirish uchun $S^2$ ning maksimumini qaraymiz:
   $$f(x) = S^2(x) = x^2(4R^2 - x^2) = 4R^2 x^2 - x^4$$
5. Hosila:
   $$f'(x) = 8R^2 x - 4x^3 = 0 \implies 4x(2R^2 - x^2) = 0$$
   $x > 0$ bo'lgani uchun:
   $$x^2 = 2R^2 \implies x = R\sqrt{2}$$
6. $y = \sqrt{4R^2 - 2R^2} = R\sqrt{2}$.

**Javob:** Tomonlari $x = y = R\sqrt{2}$ bo'lgan kvadrat.
</details>

---

### 3-mashq
Usti ochiq silindrik hovuzning hajmi $V = 27\pi\text{ m}^3$ bo'lishi kerak. Hovuzning tubi va devorlarini kafel bilan qoplash eng kam xarajat talab qilishi uchun uning asos radiusi $r$ va balandligi $h$ qanday bo'lishi kerak?

<details>
<summary>Yechimni ko'rish</summary>

**Bosqichma-bosqich yechim:**
1. Hajm: $V = \pi r^2 h = 27\pi \implies r^2 h = 27 \implies h = \frac{27}{r^2}$.
2. Usti ochiq bo'lgani uchun uning sirt yuzi: tubi (bitta doira) + yon sirt:
   $$S(r) = \pi r^2 + 2\pi r h = \pi r^2 + 2\pi r \left(\frac{27}{r^2}\right) = \pi r^2 + \frac{54\pi}{r}$$
3. Hosila:
   $$S'(r) = 2\pi r - \frac{54\pi}{r^2} = 0 \implies 2r = \frac{54}{r^2} \implies 2r^3 = 54 \implies r^3 = 27 \implies r = 3\text{ m}$$
4. Balandlik:
   $$h = \frac{27}{3^2} = \frac{27}{9} = 3\text{ m}$$
5. $S''(3) = 2\pi + \frac{108\pi}{27} > 0$ (minimum).

**Javob:** Asos radiusi $r = 3\text{ m}$, balandligi $h = 3\text{ m}$ ($h = r$).
</details>

---

## 💡 Imtihon Layfhaklari va Tezkor Maslahatlar

1. **Izoperimetrik simmetriya layfhaki:**
   Geometrik optimallashtirish masalalarida tabiat doimo **maksimal simmetriyaga** intiladi:
   - To'g'ri to'rtburchak berilsa $\implies$ eng optimal shakl har doim **kvadrat** bo'ladi;
   - To'g'ri burchakli uchburchak berilsa $\implies$ eng optimal shakl **teng yonli to'g'ri burchakli uchburchak** bo'ladi;
   - Yopiq silindr uchun $\implies$ har doim **$h = 2r$ (kesimi kvadrat)** bo'ladi;
   - Usti ochiq silindr uchun $\implies$ har doim **$h = r$** bo'ladi.
   Bu qoliplarni bilsangiz, testlarda hisoblab o'tirmasdan to'g'ri javobni 5 soniyada belgilashingiz mumkin!

2. **Ildizli yuzalarni kvadratga ko'tarib differensiallash:**
   Agar maqsad funksiyasida ildiz qatnashsa (masalan, $S = x\sqrt{a^2 - x^2}$), ildizdan hosila olib murakkablashtirmang! Yuzaning o'zi maksimal bo'lgan joyda uning kvadrati $S^2$ ham maksimal bo'ladi. $f(x) = S^2 = x^2(a^2 - x^2)$ funksiyadan hosila olish 3 barobar osonroq!

3. **Iqtisodiyotda $MR = MC$ oltin qoidasi:**
   Foyda $P(q) = R(q) - C(q)$ maksimal bo'lishi uchun $P'(q) = 0 \implies R'(q) = C'(q)$. Ya'ni **marjinal daromad (MR)** va **marjinal xarajat (MC)** teng bo'lgan nuqtada sof foyda har doim maksimal bo'ladi.
