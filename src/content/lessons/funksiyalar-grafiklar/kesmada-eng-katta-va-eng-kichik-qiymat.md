---
title: "Kesmada funksiyaning eng katta va eng kichik (global) qiymatini topish"
module: "funksiyalar-grafiklar"
order: 11
description: "Veyershtrass teoremasi, kesmada funksiyaning eng katta (global maksimum) va eng kichik (global minimum) qiymatlarini topishning 4 bosqichli algoritmi, statsionar nuqtalar va chegaraviy qiymatlar tahlili hamda amaliy optimallashtirish masalalari."
---

## 📌 Kirish va Geometrik/Fizik Mohiyat

Matematik tahlil va uning amaliy tatbiqlarida eng ko'p uchraydigan savollardan biri: **"Qanday qilib eng maqbul (optimal) natijaga erishish mumkin?"**
- Aviatsiya muhandisi samolyot qanotiga tushadigan eng katta yuklamani bilishi kerak;
- Iqtisodchi mahsulot ishlab chiqarish xarajatlarini minimal darajaga tushirishni xohlaydi;
- Dasturchi algoritm bajarilishi uchun eng kam xotira va vaqt talab qilinadigan parametrni qidiradi.

Bunday masalalarni yechish uchun funksiyaning **eng katta (global maksimum)** va **eng kichik (global minimum)** qiymatlarini topish talab qilinadi.

Ko'pincha talabalar **lokal ekstremum** bilan **global ekstremum** tushunchalarini aralashtirib yuborishadi:
- **Lokal ekstremum** — bu funksiyaning ma'lum bir kichik atrofidagi eng yuqori yoki eng past nuqtasi. Buni tog' etagidagi kichik tepalikning cho'qqisiga o'xshatish mumkin. Cho'qqi o'z atrofidagi yerlardan baland, ammo u butun tog' tizmasining eng baland nuqtasi bo'lishi shart emas.
- **Global ekstremum (kesmadagi eng katta/kichik qiymat)** — bu funksiyaning butun berilgan $[a, b]$ kesma bo'yicha mutlaq eng baland (Everest cho'qqisi) va mutlaq eng chuqur nuqtasidir.

Geometrik nuqtai nazardan, yopiq $[a, b]$ kesmada uzluksiz chizilgan egri chiziqning eng yuqori va eng quyi nuqtalari qayerda bo'lishi mumkin? 
Faqat va faqat ikkita joyda:
1. Kesmaning ichidagi "tepalik" va "chuqurlik"larda — ya'ni urinmasi gorizontal bo'lgan ($f'(x) = 0$) yoki hosilasi mavjud bo'lmagan (grafikning o'tkir uchlarida);
2. Kesmaning chekka chegaralarida: $x = a$ yoki $x = b$ nuqtalarda!

---

## 📐 Asosiy Nazariya, Qoidalar va Teoremalar

### 1. Veyershtrassning fundamental teoremasi

> **Veyershtrassning ikkinchi teoremasi:**
> Agar $f(x)$ funksiya chekli va yopiq $[a, b]$ kesmada uzluksiz bo'lsa, u holda ushbu kesmada o'zining **eng katta** ($M$) va **eng kichik** ($m$) qiymatlariga albatta erishadi:
> 
> $$ M = \max_{x \in [a, b]} f(x), \qquad m = \min_{x \in [a, b]} f(x)$$

Ushbu teoremada ikkita shart hal qiluvchi ahamiyatga ega:
1. Kesma **yopiq** bo'lishi shart ($[a, b]$). Ochiq intervalda funksiya eng katta yoki eng kichik qiymatga erishmasligi mumkin. Masalan, $f(x) = x$ funksiya $(0, 1)$ intervalda o'zining aniq eng katta yoki eng kichik qiymatiga ega emas (chunki $0$ va $1$ oraliqqa kirmaydi).
2. Funksiya **uzluksiz** bo'lishi shart. Agar oraliqda uzilish bo'lsa, funksiya cheksizlikka ketib qolishi mumkin.

---

### 2. Kritik va statsionar nuqtalar

- **Statsionar nuqtalar:** Funksiyaning hosilasi nolga teng bo'lgan nuqtalar:
  $$f'(x) = 0$$
- **Kritik nuqtalar:** Funksiyaning hosilasi nolga teng bo'lgan ($f'(x) = 0$) yoki hosilasi **mavjud bo'lmagan** (lekin funksiyaning o'zi aniqlangan) barcha ichki nuqtalar. 

> [!IMPORTANT]
> Global ekstremum nuqtasi hosila mavjud bo'lmagan joyda ham yotishi mumkin! Masalan, $f(x) = |x|$ funksiya $[-1, 2]$ kesmada o'zining eng kichik qiymatiga $x = 0$ nuqtada erishadi ($f(0) = 0$), lekin bu nuqtada hosila mavjud emas (grafikda sinish burchagi bor).

---

### 3. Global ekstremumni topishning universal 4 bosqichli algoritmi

Ixtiyoriy uzluksiz $f(x)$ funksiyaning $[a, b]$ kesmadagi eng katta va eng kichik qiymatini topish uchun quyidagi qat'iy ketma-ketlik bajariladi:

```
[1-QADAM] Funksiya hosilasi f'(x) ni hisoblash va kritik nuqtalarni topish
          (f'(x) = 0 va f'(x) mavjud bo'lmagan nuqtalar)
    │
    ▼
[2-QADAM] Faqat ochiq (a, b) intervalga tegishli kritik nuqtalarni tanlab olish
          (kesmadan tashqaridagi nuqtalar tashlab yuboriladi!)
    │
    ▼
[3-QADAM] Funksiyaning saralangan ichki kritik nuqtalardagi qiymatlarini f(x_k) 
          hamda kesmaning chekka chegaralaridagi f(a) va f(b) qiymatlarini hisoblash
    │
    ▼
[4-QADAM] Olingan barcha sonlarni o'zaro taqqoslash:
          Eng katta son  ──►  max f(x)
          Eng kichik son ──►  min f(x)
```

> [!TIP]
> E'tibor bering: kesmada eng katta va kichik qiymatni topishda **ikkinchi hosila orqali lokal ekstremum turini (maksimum yoki minimumligini) tekshirish shart emas**! Shunchaki barcha nomzod nuqtalardagi sonli qiymatlarni hisoblab, ularni oddiygina taqqoslash kifoya.

---

## 📝 Qadamma-qadam Yechilgan Universitet Misollari

### 1-misol: Ko'phad funksiyaning kesmadagi ekstremumi

**Shart:** $f(x) = 2x^3 - 3x^2 - 12x + 5$ funksiyaning $[-2, 4]$ kesmadagi eng katta va eng kichik qiymatlarini toping.

**Yechish:**
1. **Hosila olamiz:**
   $$f'(x) = (2x^3 - 3x^2 - 12x + 5)' = 6x^2 - 6x - 12$$
2. **Kritik nuqtalarni topamiz ($f'(x) = 0$):**
   $$6x^2 - 6x - 12 = 0 \iff x^2 - x - 2 = 0$$
   Viyet teoremasi bo'yicha ildizlarni topamiz:
   $$(x - 2)(x + 1) = 0 \implies x_1 = -1, \quad x_2 = 2$$
3. **Kesma oralig'iga tegishliligini tekshiramiz:**
   Berilgan kesma: $[-2, 4]$.
   - $x_1 = -1 \in (-2, 4)$ (oraliq ichida)
   - $x_2 = 2 \in (-2, 4)$ (oraliq ichida)
   Ikkala nuqta ham oraliqqa tegishli.

4. **Funksiyaning nomzod nuqtalardagi qiymatlarini hisoblaymiz:**
   - Ichki kritik nuqtalarda:
     $$f(-1) = 2(-1)^3 - 3(-1)^2 - 12(-1) + 5 = -2 - 3 + 12 + 5 = 12$$
     $$f(2) = 2(2^3) - 3(2^2) - 12(2) + 5 = 16 - 12 - 24 + 5 = -15$$
   - Kesma chegaralarida:
     $$f(-2) = 2(-2)^3 - 3(-2)^2 - 12(-2) + 5 = -16 - 12 + 24 + 5 = 1$$
     $$f(4) = 2(4^3) - 3(4^2) - 12(4) + 5 = 128 - 48 - 48 + 5 = 37$$

5. **Taqqoslash:**
   Bizda 4 ta qiymat hosil bo'ldi: $\{12, -15, 1, 37\}$.
   - Ularning eng kattasi: $37$ (u $x = 4$ chegarada erishildi)
   - Ularning eng kichigi: $-15$ (u $x = 2$ ichki nuqtada erishildi)

**Javob:**
$$\max_{[-2, 4]} f(x) = f(4) = 37, \qquad \min_{[-2, 4]} f(x) = f(2) = -15$$

---

### 2-misol: Trigonometrik funksiyaning kesmadagi qiymati

**Shart:** $f(x) = 2\sin x + \cos 2x$ funksiyaning $[0, \pi]$ kesmadagi eng katta va eng kichik qiymatlarini toping.

**Yechish:**
1. **Hosila olamiz:**
   $$f'(x) = 2\cos x - 2\sin 2x$$
   Trigonometrik ikkilangan burchak formulasini ($\sin 2x = 2\sin x \cos x$) qo'llaymiz:
   $$f'(x) = 2\cos x - 4\sin x \cos x = 2\cos x (1 - 2\sin x)$$

2. **Kritik nuqtalarni topamiz ($f'(x) = 0$):**
   $$2\cos x (1 - 2\sin x) = 0$$
   Ikkita holat bo'ladi:
   - $\cos x = 0 \implies x = \frac{\pi}{2} + \pi k$
     $[0, \pi]$ oralig'ida faqat $x_1 = \frac{\pi}{2}$ mavjud.
   - $1 - 2\sin x = 0 \implies \sin x = \frac{1}{2} \implies x = \frac{\pi}{6}$ va $x = \frac{5\pi}{6}$.
     Har ikkala nuqta $[0, \pi]$ oraliqqa tegishli: $x_2 = \frac{\pi}{6}$, $x_3 = \frac{5\pi}{6}$.

3. **Nomzod nuqtalardagi qiymatlarni hisoblaymiz:**
   - Ichki nuqtalar:
     $$f\left(\frac{\pi}{6}\right) = 2\sin\left(\frac{\pi}{6}\right) + \cos\left(\frac{\pi}{3}\right) = 2 \cdot \frac{1}{2} + \frac{1}{2} = 1.5$$
     $$f\left(\frac{\pi}{2}\right) = 2\sin\left(\frac{\pi}{2}\right) + \cos(\pi) = 2(1) + (-1) = 1$$
     $$f\left(\frac{5\pi}{6}\right) = 2\sin\left(\frac{5\pi}{6}\right) + \cos\left(\frac{5\pi}{3}\right) = 2 \cdot \frac{1}{2} + \frac{1}{2} = 1.5$$
   - Kesma chegaralari:
     $$f(0) = 2\sin(0) + \cos(0) = 0 + 1 = 1$$
     $$f(\pi) = 2\sin(\pi) + \cos(2\pi) = 0 + 1 = 1$$

4. **Taqqoslash:**
   Barcha qiymatlar: $\{1.5, 1\}$.
   - Eng katta qiymat: $1.5 = \frac{3}{2}$
   - Eng kichik qiymat: $1$

**Javob:**
$$\max_{[0, \pi]} f(x) = \frac{3}{2}, \qquad \min_{[0, \pi]} f(x) = 1$$

---

### 3-misol: Hosilasi mavjud bo'lmagan nuqtaga ega funksiya

**Shart:** $f(x) = 3 - \sqrt[3]{(x - 2)^2}$ funksiyaning $[1, 10]$ kesmadagi eng katta va eng kichik qiymatlarini toping.

**Yechish:**
1. Funksiyani daraja ko'rinishida yozamiz:
   $$f(x) = 3 - (x - 2)^{2/3}$$
2. Hosila olamiz:
   $$f'(x) = -\frac{2}{3}(x - 2)^{-1/3} = -\frac{2}{3\sqrt[3]{x - 2}}$$
3. **Kritik nuqtalarni tahlil qilamiz:**
   - $f'(x) = 0$ bo'ladigan nuqta yo'q, chunki kasrning surati $-2 \neq 0$.
   - Hosila **mavjud bo'lmagan** nuqta: maxraj nolga teng bo'lganda, ya'ni $x - 2 = 0 \implies x = 2$.
   Ushbu $x = 2$ nuqta berilgan $[1, 10]$ kesmaning ichida yotadi va unda funksiyaning o'zi aniqlangan! Demak, $x = 2$ — muhim kritik nuqta.

4. **Funksiya qiymatlarini hisoblaymiz:**
   - Kritik nuqtada:
     $$f(2) = 3 - \sqrt[3]{(2 - 2)^2} = 3 - 0 = 3$$
   - Kesma chegaralarida:
     $$f(1) = 3 - \sqrt[3]{(1 - 2)^2} = 3 - \sqrt[3]{1} = 3 - 1 = 2$$
     $$f(10) = 3 - \sqrt[3]{(10 - 2)^2} = 3 - \sqrt[3]{8^2} = 3 - \sqrt[3]{64} = 3 - 4 = -1$$

5. **Taqqoslash:**
   Qiymatlar to'plami: $\{3, 2, -1\}$.
   - Eng katta qiymat: $3$ ($x = 2$ da)
   - Eng kichik qiymat: $-1$ ($x = 10$ da)

**Javob:** $\max_{[1, 10]} f(x) = 3$, $\min_{[1, 10]} f(x) = -1$.

---

### 4-misol: Ratsional kasr funksiya

**Shart:** $f(x) = \frac{x^2 - 3x + 2}{x^2 + 1}$ funksiyaning $[0, 3]$ kesmadagi eng katta va eng kichik qiymatlarini toping.

**Yechish:**
1. Bo'linma qoidasi bo'yicha hosila olamiz:
   $$f'(x) = \frac{(2x - 3)(x^2 + 1) - (x^2 - 3x + 2)(2x)}{(x^2 + 1)^2}$$
2. Suratni soddalashtiramiz:
   $$(2x^3 + 2x - 3x^2 - 3) - (2x^3 - 6x^2 + 4x) = 3x^2 - 2x - 3$$
   Demak:
   $$f'(x) = \frac{3x^2 - 2x - 3}{(x^2 + 1)^2}$$
3. $f'(x) = 0 \implies 3x^2 - 2x - 3 = 0$.
   Diskriminant: $D = 4 - 4(3)(-3) = 4 + 36 = 40$.
   Ildizlar:
   $$x_{1, 2} = \frac{2 \pm \sqrt{40}}{6} = \frac{1 \pm \sqrt{10}}{3}$$
   Taqribiy qiymatlari ($\sqrt{10} \approx 3.162$):
   - $x_1 = \frac{1 - 3.162}{3} \approx -0.72 \notin [0, 3]$ (kesmadan tashqarida, tashlab yuboramiz!)
   - $x_2 = \frac{1 + \sqrt{10}}{3} \approx \frac{4.162}{3} \approx 1.387 \in [0, 3]$ (tegishli).

4. Qiymatlarni hisoblaymiz:
   - Chegaralarda:
     $$f(0) = \frac{0 - 0 + 2}{0 + 1} = 2$$
     $$f(3) = \frac{3^2 - 3(3) + 2}{3^2 + 1} = \frac{9 - 9 + 2}{10} = \frac{2}{10} = 0.2$$
   - Kritik nuqtada ($x_2 \approx 1.387$):
     $$f(x_2) = \frac{(1.387)^2 - 3(1.387) + 2}{(1.387)^2 + 1} = \frac{1.924 - 4.161 + 2}{1.924 + 1} = \frac{-0.237}{2.924} \approx -0.081$$

5. Taqqoslash: $\{2; \approx -0.081; 0.2\}$.
   - Eng katta: $2$
   - Eng kichik: $\frac{3 - \sqrt{10}}{2} \approx -0.081$

**Javob:** $\max_{[0, 3]} f(x) = f(0) = 2$, $\min_{[0, 3]} f(x) \approx -0.081$.

---

## ⚠️ Talabalar Eng Ko'p Yo'l Qo'yadigan Xatolar va Tuzoqlar

1. **Kesma chegaralaridagi qiymatlarni hisoblashni unutish:**
   Eng keng tarqalgan xato! Talabalar faqat $f'(x) = 0$ nuqtalarni topib, o'sha yerdagi qiymatlarni eng katta/kichik deb e'lon qilishadi. Holbuki funksiya chegaralarda ancha balandroqqa ko'tarilgan bo'lishi mumkin (1-misolga qarang: $f(4) = 37$, lokal maksimum esa atigi $12$ edi).

2. **Kesmadan tashqaridagi kritik nuqtani hisobga kiritish:**
   Hosilani nolga tenglashtirib topilgan ildizlarning barchasi ham berilgan kesmaga tushavermaydi. Agar oraliqqa kirmaydigan nuqtadagi qiymatni hisoblasangiz, butun misol xato yechilgan hisoblanadi.

3. **Qiymatni funksiyaga emas, hosilaga qo'yib yuborish:**
   Kritik nuqta $x_k$ ni topgach, uni $f(x)$ ga qo'yish o'rniga adashib $f'(x)$ ga qo'yishadi va albatta $0$ olib, javobni nol deb yozishadi. Esda tuting: biz funksiyaning **o'zining** ekstremal qiymatini qidiryapmiz!

4. **Hosilasi mavjud bo'lmagan nuqtalarni tashlab ketish:**
   Modulli yoki kasr darajali funksiyalarda ($|x|$, $\sqrt[3]{x^2}$) hosila mavjud bo'lmagan nuqtalar ko'pincha global minimum yoki maksimum bo'ladi. Ularni e'tiborsiz qoldirish xatoga olib keladi.

---

## 🎯 Mustaqil Yechish Uchun Amaliy Mashqlar va Yechimlar

### 1-mashq
$f(x) = x^4 - 2x^2 + 5$ funksiyaning $[-2, 2]$ kesmadagi eng katta va eng kichik qiymatlarini toping.

<details>
<summary>Yechimni ko'rish</summary>

**Bosqichma-bosqich yechim:**
1. Hosila olamiz:
   $$f'(x) = 4x^3 - 4x = 4x(x^2 - 1) = 4x(x - 1)(x + 1)$$
2. Kritik nuqtalar: $x_1 = 0$, $x_2 = 1$, $x_3 = -1$.
   Uchala nuqta ham $[-2, 2]$ kesmaga tegishli.
3. Funksiyaning ushbu nuqtalardagi qiymatlarini hisoblaymiz:
   - $f(0) = 0 - 0 + 5 = 5$
   - $f(1) = 1 - 2 + 5 = 4$
   - $f(-1) = 1 - 2 + 5 = 4$
4. Chegaralardagi qiymatlarni hisoblaymiz:
   - $f(2) = 2^4 - 2(2^2) + 5 = 16 - 8 + 5 = 13$
   - $f(-2) = (-2)^4 - 2(-2)^2 + 5 = 16 - 8 + 5 = 13$
5. Taqqoslaymiz: $\{13, 5, 4\}$.
   - Eng katta qiymat: $13$
   - Eng kichik qiymat: $4$

**Javob:** $\max_{[-2, 2]} f(x) = 13$, $\min_{[-2, 2]} f(x) = 4$.
</details>

---

### 2-mashq
$f(x) = x + \frac{4}{x}$ funksiyaning $[1, 4]$ kesmadagi eng katta va eng kichik qiymatlarini toping.

<details>
<summary>Yechimni ko'rish</summary>

**Bosqichma-bosqich yechim:**
1. Hosila:
   $$f'(x) = 1 - \frac{4}{x^2} = \frac{x^2 - 4}{x^2}$$
2. Kritik nuqtalar: $x^2 - 4 = 0 \implies x = \pm 2$.
   $[1, 4]$ oraliqqa faqat $x = 2$ tushadi ($x = -2$ kirmaydi).
3. Qiymatlarni hisoblaymiz:
   - $f(2) = 2 + \frac{4}{2} = 4$
   - $f(1) = 1 + \frac{4}{1} = 5$
   - $f(4) = 4 + \frac{4}{4} = 5$
4. Taqqoslash: $\{4, 5\}$.

**Javob:** $\max_{[1, 4]} f(x) = 5$, $\min_{[1, 4]} f(x) = 4$.
</details>

---

### 3-mashq
$f(x) = x \cdot e^{-x}$ funksiyaning $[0, 3]$ kesmadagi global ekstremumlarini aniqlang.

<details>
<summary>Yechimni ko'rish</summary>

**Bosqichma-bosqich yechim:**
1. Ko'paytma hosilasi:
   $$f'(x) = (x)' e^{-x} + x (e^{-x})' = 1 \cdot e^{-x} - x e^{-x} = e^{-x}(1 - x)$$
2. Kritik nuqta: $e^{-x}(1 - x) = 0 \implies 1 - x = 0 \implies x = 1 \in [0, 3]$.
3. Qiymatlarni hisoblaymiz:
   - $f(1) = 1 \cdot e^{-1} = \frac{1}{e} \approx 0.368$
   - $f(0) = 0 \cdot e^0 = 0$
   - $f(3) = 3 \cdot e^{-3} = \frac{3}{e^3} \approx \frac{3}{20.08} \approx 0.149$
4. Taqqoslash: $\{0; \frac{1}{e}; \frac{3}{e^3}\}$.
   - Eng katta: $\frac{1}{e}$
   - Eng kichik: $0$

**Javob:** $\max_{[0, 3]} f(x) = \frac{1}{e}$, $\min_{[0, 3]} f(x) = 0$.
</details>

---

## 💡 Imtihon Layfhaklari va Tezkor Maslahatlar

1. **Juft funksiyalar simmetriyasi:**
   Agar kesma nolga nisbatan simmetrik $[-a, a]$ bo'lsa va $f(x)$ juft funksiya bo'lsa ($f(-x) = f(x)$), hisoblashlarni 2 barobar qisqartirish mumkin: faqat $[0, a]$ qismini tekshiring, chunki manfiy tomondagi barcha qiymatlar musbat tomon bilan bir xil bo'ladi.

2. **Monoton funksiyalar siri:**
   Agar berilgan kesmada $f'(x) > 0$ (funksiya doim o'suvchi) bo'lsa, ichki kritik nuqtalarni qidirib o'tirish shart emas! Eng kichik qiymat har doim chap uchda $f(a)$, eng katta qiymat esa o'ng uchda $f(b)$ bo'ladi.

3. **Yagona ekstremum qoidasi:**
   Agar intervalda (hatto ochiq $(a, b)$ yoki $(0, \infty)$ da ham) bittagina kritik nuqta topilsa va u lokal maksimum bo'lsa, u avtomatik ravishda butun oraliqdagi **global maksimum** hisoblanadi. Bu layfhak amaliy optimallashtirish masalalarida vaqtni juda tejaydi!
