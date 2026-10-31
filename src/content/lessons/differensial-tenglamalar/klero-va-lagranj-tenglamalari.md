---
title: "Klero va Lagranj differensial tenglamalari: Maxsus yechimlar va o'rab oluvchi chiziq"
module: "differensial-tenglamalar"
order: 12
description: "1-tartibli nochiziqli differensial tenglamalar: Lagranj tenglamasi y = x·φ(y') + ψ(y'), Klero tenglamasi y = x·y' + ψ(y'), p = y' parametrini kiritish, umumiy integral, maxsus yechimlar va oilaning o'rab oluvchi egri chizig'i (ogibayushchaya)."
---

## 📌 Kirish va Geometrik/Fizik Mohiyat

Differensial tenglamalar kursida talabalar o'rganadigan 1-tartibli tenglamalarning aksariyatida ($y' = f(x, y)$) Koshi teoremasi o'rinli bo'ladi: har bir nuqta $(x_0, y_0)$ orqali yagona integral egri chiziq o'tadi va barcha yechimlar bitta umumiy integral $y = \Phi(x, C)$ dan $C$ o'zgarmasning turli qiymatlarida hosil bo'ladi.

Biroq, matematikada shunday ajoyib nochiziqli differensial tenglamalar mavjudki, ularda Koshi teoremasining yagonalik sharti buziladi. Natijada umumiy integrallar oilasidan tashqari, $C$ ning **hech qanday chekli qiymatida olinmaydigan**, ammo tenglamani ayniyatga aylantiruvchi **maxsus yechimlar (osobye resheniya)** vujudga keladi!

Geometrik nuqtai nazardan, maxsus yechim umumiy integralga kiruvchi to'g'ri chiziqlar yoki egri chiziqlar oilasining **o'rab oluvchisi (ruscha: огибающая)** hisoblanadi. O'rab oluvchi egri chiziqning har bir nuqtasida oilaning qaysidir a'zosi unga urinadi, lekin hech bir a'zo u bilan to'liq ustma-ust tushmaydi.

```
          y ^
            |      \   |   /      /
            |       \  |  /      /  To'g'ri chiziqlar oilasi: y = C·x + ψ(C)
            |        \ | /      /
    --------+---------\|/------/-----> x
            |          *  O'rab oluvchi egri chiziq (Maxsus yechim)
            |       .-' `-.  (har bir to'g'ri chiziq unga urinadi!)
            |      '       `
```

### Fizik Mohiyat va Tatbiqlar
1. **To'lqin frontlari va Gyuygens prinsipi:**
   Yorug'lik yoki tovush to'lqini tarqalayotganda, to'lqin frontining har bir nuqtasi ikkilamchi sferik to'lqinlar manbaiga aylanadi. Keyingi vaqt momentidagi yangi to'lqin fronti esa ushbu barcha sferik to'lqinlarning geometrik o'rab oluvchisi bo'ladi.
2. **Optik kaustikalar:**
   Kofe finjonidagi suyuqlik yuzasiga tushgan yorug'lik nurlarining aylana devorlaridan akslanishi natijasida hosil bo'ladigan yorqin yuraksimon chiziq (nefroida yoki kardioida) akslangan nurlar oilasining o'rab oluvchisidir.
3. **Xavfsizlik parabolasi (Artilleriya masalasi):**
   Bir xil boshlang'ich tezlik $v_0$ bilan turli burchaklar ostida otilgan snaryadlarning barcha mumkin bo'lgan trayektoriyalari oilasini o'rab oluvchi chegara parabola bo'lib, undan tashqaridagi hududga hech qanday snaryad yetib bora olmaydi.

Ushbu hodisalar nazariy jihatdan **Lagranj** va uning mashhur xususiy holi bo'lgan **Klero tenglamalari** orqali ifodalanadi.

---

## 📐 Asosiy Nazariya, Qoidalar va Teoremalar

### 1. Lagranj differensial tenglamasi

> **Ta'rif:**
> Noma'lum $y$ va $x$ o'zgaruvchilariga nisbatan chiziqli, biroq hosila $y'$ ga nisbatan nochiziqli bo'lgan quyidagi ko'rinishdagi 1-tartibli tenglama **Lagranj differensial tenglamasi** deb ataladi:
> $$
> y = x \cdot \varphi(y') + \psi(y')
> $$
> Bu yerda $\varphi(y')$ va $\psi(y')$ — yetarlicha silliq funksiyalar bo'lib, $\varphi(y') \not\equiv y'$ deb faraz qilinadi (chunki $\varphi(y') \equiv y'$ bo'lsa, tenglama Klero ko'rinishiga o'tadi).

#### Lagranj tenglamasini integrallash usuli ($p = y'$ parametri)
Tenglamani yechish uchun hosilani parametr sifatida belgilaymiz:
$$
y' = p \iff dy = p \cdot dx
$$
Dastlabki tenglamani $p$ orqali yozamiz:
$$
y = x \cdot \varphi(p) + \psi(p)
$$
Endi ushbu tenglikning har ikkala tomonidan to'liq differensial olamiz:
$$
dy = \varphi(p) \, dx + x \, \varphi'(p) \, dp + \psi'(p) \, dp
$$
$dy = p \cdot dx$ ekanligini hisobga olib, chap tomonga qo'yamiz:
$$
p \cdot dx = \varphi(p) \, dx + \left[ x \, \varphi'(p) + \psi'(p) \right] dp
$$
$dx$ qatnashgan hadlarni chap tomonga o'tkazamiz:
$$
\left[ p - \varphi(p) \right] dx = \left[ x \, \varphi'(p) + \psi'(p) \right] dp
$$

Bu yerda ikkita holat yuzaga keladi:

1. **Umumiy yechim holati ($p - \varphi(p) \neq 0$):**
   Tenglamani $dp$ ga bo'lib, $x$ ni $p$ ning funksiyasi deb qarasak:
   $$
   \frac{dx}{dp} - \frac{\varphi'(p)}{p - \varphi(p)} \cdot x = \frac{\psi'(p)}{p - \varphi(p)}
   $$
   Bu $x(p)$ noma'lum funksiyaga nisbatan **1-tartibli chiziqli differensial tenglamadir**!
   Uni ixtiyoriy o'zgarmasni variatsiyalash usuli (Lagranj usuli) bilan integrallab, $x = \Phi(p, C)$ ko'rinishida topamiz.
   Natijada Lagranj tenglamasining umumiy yechimi quyidagi **parametrik ko'rinishda** hosil bo'ladi:
   $$
   \begin{cases}
   x = \Phi(p, C) \\
   y = \Phi(p, C) \cdot \varphi(p) + \psi(p)
   \end{cases}
   $$

2. **Maxsus yechim holati ($p - \varphi(p) = 0$):**
   Agar $p - \varphi(p) = 0$ tenglama haqiqiy ildizlarga ega bo'lsa: $p = p_k = \text{const}$.
   U holda $dp = 0$ bo'lib, $p \cdot dx = \varphi(p) \cdot dx$ ayniyatga aylanadi.
   Bu qiymatlarni dastlabki tenglamaga qo'yib, to'g'ri chiziqli yechimlarni topamiz:
   $$
   y = x \cdot \varphi(p_k) + \psi(p_k) = p_k \cdot x + \psi(p_k)
   $$
   Agar bu to'g'ri chiziq umumiy yechimdan $C$ ning hech bir chekli qiymatida hosil bo'lmasa, u **maxsus yechim** bo'ladi.

---

### 2. Klero differensial tenglamasi

> **Ta'rif:**
> Lagranj tenglamasining $\varphi(y') = y'$ bo'lgan xususiy holi **Klero differensial tenglamasi** deb ataladi:
> $$
> y = x \cdot y' + \psi(y')
> $$
> Bu yerda $\psi(y')$ — ikkinchi tartibli uzluksiz hosilaga ega bo'lgan ixtiyoriy nochiziqli funksiya ($\psi''(y') \neq 0$).

#### Klero tenglamasini yechish algoritmi
Tenglamaga $y' = p \implies dy = p \cdot dx$ parametrini kiritamiz:
$$
y = x \cdot p + \psi(p)
$$
Har ikkala tomonni differensiallaymiz:
$$
dy = p \, dx + x \, dp + \psi'(p) \, dp
$$
$dy = p \, dx$ bo'lganligi sababli:
$$
p \, dx = p \, dx + \left[ x + \psi'(p) \right] dp \iff \left[ x + \psi'(p) \right] dp = 0
$$

Ushbu ko'paytma nolga teng bo'lishi uchun ikkita shartdan biri bajarilishi kerak:

#### A) Umumiy yechim ($dp = 0$)
$$
dp = 0 \implies p = C = \text{const}
$$
$p = C$ qiymatni tenglamaga qo'ysak, Klero tenglamasining **umumiy integrali** darhol hosil bo'ladi:
$$
y = C \cdot x + \psi(C)
$$
> **Geometrik ma'nosi:** Klero tenglamasining umumiy yechimi har doim **bir parametrli to'g'ri chiziqlar oilasidan** iborat bo'ladi! Bu yerda $C$ to'g'ri chiziqning burchak koeffitsiyenti (og'ish burchagi tangensi), $\psi(C)$ esa $Oy$ o'qidan kesib olgan kesmasidir.

#### B) Maxsus yechim ($x + \psi'(p) = 0$)
$$
x + \psi'(p) = 0 \implies x = -\psi'(p)
$$
Ushbu $x$ ning qiymatini $y = x \cdot p + \psi(p)$ tenglamaga qo'yamiz:
$$
y = -p \cdot \psi'(p) + \psi(p)
$$
Natijada **maxsus yechimning parametrik ifodasi** hosil bo'ladi:
$$
\begin{cases}
x = -\psi'(p) \\
y = \psi(p) - p \cdot \psi'(p)
\end{cases}
$$
Agar ushbu sistemadan $p$ parametrni yo'qotish mumkin bo'lsa, maxsus yechim oshkor $y = f(x)$ yoki oshkormas $F(x, y) = 0$ ko'rinishda yoziladi.

### 3. Diskriminant egri chiziqlar va o'rab oluvchi alomati
Bir parametrli egri chiziqlar oilasi $\Phi(x, y, C) = 0$ berilgan bo'lsa, uning o'rab oluvchisi quyidagi sistema orqali aniqlanadi ($C$-diskriminant):
$$
\begin{cases}
\Phi(x, y, C) = 0 \\
\frac{\partial \Phi}{\partial C}(x, y, C) = 0
\end{cases}
$$
Klero tenglamasi uchun $\Phi(x, y, C) = y - C x - \psi(C) = 0$.
U holda $C$ bo'yicha xususiy hosila:
$$
\frac{\partial \Phi}{\partial C} = -x - \psi'(C) = 0 \implies x = -\psi'(C)
$$
Bu esa yuqorida topilgan maxsus yechim formulasi bilan aynan bir xildir!

---

## 📝 Qadamma-qadam Yechilgan Universitet Misollari

### 1-misol: Klero tenglamasining to'liq tahlili
**Shart:** Quyidagi differensial tenglamaning umumiy va maxsus yechimlarini toping hamda ularning geometrik ma'nosini tahlil qiling:
$$
y = x y' + \frac{1}{2 y'}
$$

**Yechish:**
1. **1-qadam: Tenglama turini aniqlash.**
   Tenglama $y = x y' + \psi(y')$ ko'rinishida bo'lib, bu yerda $\psi(y') = \frac{1}{2y'}$. Bu Klero differensial tenglamasidir.
2. **2-qadam: Parametr kiritish.**
   $y' = p$ deb olamiz ($p \neq 0$):
   $$
   y = x p + \frac{1}{2p}
   $$
3. **3-qadam: Differensiallash.**
   $$
   dy = p \, dx + x \, dp - \frac{1}{2p^2} \, dp
   $$
   $dy = p \, dx$ bo'lgani uchun:
   $$
   p \, dx = p \, dx + \left( x - \frac{1}{2p^2} \right) dp \implies \left( x - \frac{1}{2p^2} \right) dp = 0
   $$
4. **4-qadam: Umumiy yechimni topish.**
   $$
   dp = 0 \implies p = C
   $$
   Tenglamaga qo'yamiz:
   $$
   y = C x + \frac{1}{2C} \quad (C \neq 0)
   $$
   Bu to'g'ri chiziqlar oilasidir.
5. **5-qadam: Maxsus yechimni topish.**
   $$
   x - \frac{1}{2p^2} = 0 \implies x = \frac{1}{2p^2}
   $$
   $y$ ning ifodasiga qo'yamiz:
   $$
   y = x p + \frac{1}{2p} = \left( \frac{1}{2p^2} \right) p + \frac{1}{2p} = \frac{1}{2p} + \frac{1}{2p} = \frac{1}{p}
   $$
   Parametrik sistema:
   $$
   \begin{cases}
   x = \frac{1}{2p^2} \\
   y = \frac{1}{p}
   \end{cases}
   $$
6. **6-qadam: Parametr $p$ ni yo'qotish.**
   Ikkinchi tenglamadan $p = \frac{1}{y}$. Buni birinchisiga qo'yamiz:
   $$
   x = \frac{1}{2 \left( \frac{1}{y} \right)^2} = \frac{y^2}{2} \implies y^2 = 2x
   $$
   Bu uchi koordinatalar boshida bo'lgan, simmetriya o'qi $Ox$ bo'lgan **paraboladir**!
7. **7-qadam: Maxsus yechim ekanligini tekshirish.**
   $y^2 = 2x$ parabolani $y = C x + \frac{1}{2C}$ to'g'ri chiziqlari oilasidan $C$ ning hech qanday chekli qiymatida hosil qilib bo'lmaydi.
   Shu bilan birga, to'g'ri chiziq parabola bilan bitta umumiy nuqtaga ega:
   $$
   C x - y + \frac{1}{2C} = 0 \quad \text{va} \quad y^2 = 2x
   $$
   Kvadrat tenglama tuzsak: $C \frac{y^2}{2} - y + \frac{1}{2C} = 0 \implies C^2 y^2 - 2Cy + 1 = 0 \implies (Cy - 1)^2 = 0$.
   Diskriminant aynan nolga teng! Demak, har bir to'g'ri chiziq parabolaga bitta nuqtada urinadi!
8. **Javob:**
   - Umumiy yechim: $y = C x + \frac{1}{2C}$ ($C \neq 0$).
   - Maxsus yechim (o'rab oluvchi): $y^2 = 2x$ ($x > 0$).

---

### 2-misol: Klero tenglamasi va Astroida
**Shart:** Tenglamaning umumiy va maxsus yechimlarini toping:
$$
y = x y' - (y')^2
$$

**Yechish:**
1. **1-qadam: Parametr kiritish.**
   $y' = p \implies y = x p - p^2$.
2. **2-qadam: Differensiallash.**
   $$
   dy = p \, dx + x \, dp - 2p \, dp \implies p \, dx = p \, dx + (x - 2p) \, dp \implies (x - 2p) \, dp = 0
   $$
3. **3-qadam: Yechimlar shoxobchasi.**
   - $dp = 0 \implies p = C \implies y = C x - C^2$ — **umumiy yechim**.
   - $x - 2p = 0 \implies p = \frac{x}{2}$.
4. **4-qadam: Maxsus yechimni topish.**
   $p = \frac{x}{2}$ ni tenglamaga qo'yamiz:
   $$
   y = x \left( \frac{x}{2} \right) - \left( \frac{x}{2} \right)^2 = \frac{x^2}{2} - \frac{x^2}{4} = \frac{x^2}{4}
   $$
   Demak: $y = \frac{x^2}{4} \iff x^2 = 4y$.
5. **Javob:**
   - Umumiy yechim: $y = C x - C^2$.
   - Maxsus yechim: $y = \frac{x^2}{4}$.

---

### 3-misol: Lagranj tenglamasini to'liq yechish
**Shart:** Differensial tenglamani yeching:
$$
y = 2x y' + \ln(y')
$$

**Yechish:**
1. **1-qadam: Tenglama turini aniqlash.**
   Bu yerda $\varphi(y') = 2y' \not\equiv y'$ va $\psi(y') = \ln(y')$. Demak, bu **Lagranj tenglamasidir**.
2. **2-qadam: Parametr kiritish.**
   $y' = p$ ($p > 0$):
   $$
   y = 2x p + \ln p
   $$
3. **3-qadam: To'liq differensiallash.**
   $$
   dy = 2p \, dx + 2x \, dp + \frac{1}{p} \, dp
   $$
   $dy = p \, dx$ bo'lgani sababli:
   $$
   p \, dx = 2p \, dx + \left( 2x + \frac{1}{p} \right) dp
   $$
   Guruhlaymiz:
   $$
   -p \, dx = \left( 2x + \frac{1}{p} \right) dp \implies \frac{dx}{dp} = -\frac{2}{p} x - \frac{1}{p^2}
   $$
   $$
   \frac{dx}{dp} + \frac{2}{p} x = -\frac{1}{p^2}
   $$
   Bu $x(p)$ ga nisbatan 1-tartibli chiziqli tenglamadir!
4. **4-qadam: Chiziqli tenglamani yechish.**
   Integrallovchi ko'paytuvchi:
   $$
   \mu(p) = e^{\int \frac{2}{p} dp} = e^{2 \ln p} = p^2
   $$
   Tenglamaning har ikkala tomonini $p^2$ ga ko'paytiramiz:
   $$
   p^2 \frac{dx}{dp} + 2p x = -1 \iff \frac{d}{dp}(p^2 x) = -1
   $$
   Integrallaymiz:
   $$
   p^2 x = \int (-1) dp = -p + C \implies x(p) = \frac{C - p}{p^2} = \frac{C}{p^2} - \frac{1}{p}
   $$
5. **5-qadam: $y(p)$ ni topish.**
   Topilgan $x(p)$ ni $y = 2xp + \ln p$ ga qo'yamiz:
   $$
   y(p) = 2p \left( \frac{C - p}{p^2} \right) + \ln p = \frac{2(C - p)}{p} + \ln p = \frac{2C}{p} - 2 + \ln p
   $$
6. **6-qadam: Maxsus yechimni tekshirish.**
   $p - \varphi(p) = 0 \implies p - 2p = 0 \implies -p = 0 \implies p = 0$.
   Ammo $\ln p$ funksiya $p = 0$ nuqtada aniqlanmagan ($p > 0$). Shuning uchun bu tenglamada maxsus yechim mavjud emas.
7. **Javob:**
   Umumiy yechim parametrik ko'rinishda:
   $$
   \begin{cases}
   x = \frac{C}{p^2} - \frac{1}{p} \\
   y = \frac{2C}{p} - 2 + \ln p
   \end{cases} \quad (p > 0)
   $$

---

### 4-misol: Geometrik amaliy masala (Klero tenglamasiga keltirish)
**Shart:** Koordinata o'qlari orasida yotuvchi urinma kesmasining uzunligi o'zgarmas $a > 0$ ga teng bo'lgan silliq egri chiziqni toping (Mashhur Astroida masalasi).

**Yechish:**
1. **1-qadam: Urinma tenglamasini tuzish.**
   Egri chiziqning $(x, y)$ nuqtasidagi urinma tenglamasi:
   $$
   Y - y = y' \cdot (X - x)
   $$
2. **2-qadam: O'qlar bilan kesishish nuqtalarini topish.**
   - $X = 0$ bo'lganda: $Y_0 = y - x y'$.
   - $Y = 0$ bo'lganda: $X_0 = x - \frac{y}{y'}$.
3. **3-qadam: Masala shartini tenglamaga aylantirish.**
   Kesmaning uzunligi Pifagor teoremasiga ko'ra $a$ ga teng:
   $$
   X_0^2 + Y_0^2 = a^2 \implies \left( x - \frac{y}{y'} \right)^2 + (y - x y')^2 = a^2
   $$
   Qavslarni shakllantiramiz:
   $$
   \frac{(x y' - y)^2}{(y')^2} + (y - x y')^2 = a^2 \implies (y - x y')^2 \left( 1 + \frac{1}{(y')^2} \right) = a^2
   $$
   $$
   (y - x y')^2 \cdot \frac{1 + (y')^2}{(y')^2} = a^2 \implies y - x y' = \pm \frac{a y'}{\sqrt{1 + (y')^2}}
   $$
   $$
   y = x y' \pm \frac{a y'}{\sqrt{1 + (y')^2}}
   $$
   Bu Klero differensial tenglamasidir!
4. **4-qadam: Maxsus yechim (Astroida).**
   Parametr $p = y'$ qo'ysak, maxsus yechim to'g'ri chiziqlar oilasining o'rab oluvchisi bo'ladi:
   $$
   x = \mp \frac{a}{(1 + p^2)^{3/2}}, \quad y = \pm \frac{a p^3}{(1 + p^2)^{3/2}}
   $$
   Agar $p = \operatorname{tg} t$ almashtirishini bajarsak:
   $$
   x = a \cos^3 t, \quad y = a \sin^3 t
   $$
   Bu esa mashhur **astroida** tenglamasidir:
   $$
   x^{2/3} + y^{2/3} = a^{2/3}
   $$

---

## ⚠️ Talabalar Eng Ko'p Yo'l Qo'yadigan Xatolar va Tuzoqlar

1. **Maxsus yechimni topishni "unutib" qoldirish:**
   Klero tenglamasini ko'rgan talabalar birdaniga $y' = C$ deb, faqat $y = C x + \psi(C)$ umumiy yechimini yozadilar va to'xtaydilar. Ammo imtihonlarda Klero tenglamasi aynan **maxsus yechimni (o'rab oluvchini)** topish talabi bilan beriladi! Maxsus yechimsiz topshiriqning faqat 30-40% balli qo'yiladi.

2. **$dy = p \, dx$ munosabatini teskari yozish:**
   Differensiallash bosqichida ba'zilar $dx = p \, dy$ deb qo'pollik bilan adashtiradilar. Yodda tuting: $y' = \frac{dy}{dx} = p \implies dy = p \, dx$.

3. **Lagranj tenglamasida maxsus to'g'ri chiziqlarni tekshirmaslik:**
   $p - \varphi(p) = 0$ tenglamasining ildizlari $p = p_k$ bo'lganda hosil bo'ladigan $y = p_k x + \psi(p_k)$ to'g'ri chiziqlari ko'pincha tekshirilmasdan qolib ketadi. Ular maxsus yechim yoki umumiy yechimning cheksizdagi asimptotik holati bo'lishi mumkin.

4. **Parametr $p$ ni yo'qotishda ishoralarni adashtirish:**
   $p = \pm \sqrt{\dots}$ chiqqanda, faqat bitta ishorani olib, ikkinchi tarmoqni yo'qotib qo'yish (masalan, parabolaning faqat yuqori qismini topib, pastki qismini unutish).

---

## 🎯 Mustaqil Yechish Uchun Amaliy Mashqlar va Yechimlar

### 1-mashq
Klero tenglamasining umumiy va maxsus yechimlarini toping:
$$
y = x y' + (y')^2
$$

<details>
<summary>👉 Bosqichma-bosqich yechimni ko'rish</summary>

1. **Parametr kiritamiz:**
   $y' = p \implies y = x p + p^2$.
2. **Differensiallaymiz:**
   $$
   dy = p \, dx + x \, dp + 2p \, dp \implies p \, dx = p \, dx + (x + 2p) \, dp \implies (x + 2p) \, dp = 0
   $$
3. **Umumiy yechim:**
   $dp = 0 \implies p = C \implies y = C x + C^2$.
4. **Maxsus yechim:**
   $x + 2p = 0 \implies p = -\frac{x}{2}$.
   Tenglamaga qo'yamiz:
   $$
   y = x \left( -\frac{x}{2} \right) + \left( -\frac{x}{2} \right)^2 = -\frac{x^2}{2} + \frac{x^2}{4} = -\frac{x^2}{4}
   $$
   Demak: $x^2 = -4y$.

**Javob:**
Umumiy yechim: $y = C x + C^2$.
Maxsus yechim: $y = -\frac{x^2}{4}$ (yoki $x^2 + 4y = 0$).
</details>

---

### 2-mashq
Tenglamaning umumiy integralini parametrik shaklda toping:
$$
y = 2x y' + \frac{1}{(y')^2}
$$

<details>
<summary>👉 Bosqichma-bosqich yechimni ko'rish</summary>

1. **Parametr kiritamiz:**
   $y' = p \implies y = 2x p + \frac{1}{p^2}$ ($p \neq 0$). Bu Lagranj tenglamasi ($\varphi(p) = 2p$).
2. **Differensiallaymiz:**
   $$
   dy = 2p \, dx + 2x \, dp - \frac{2}{p^3} \, dp
   $$
   $dy = p \, dx$ bo'lgani uchun:
   $$
   p \, dx = 2p \, dx + \left( 2x - \frac{2}{p^3} \right) dp \implies -p \, dx = \left( 2x - \frac{2}{p^3} \right) dp
   $$
   $$
   \frac{dx}{dp} + \frac{2}{p} x = \frac{2}{p^4}
   $$
3. **Chiziqli tenglamani yechamiz:**
   Integrallovchi ko'paytuvchi: $\mu(p) = p^2$.
   $$
   \frac{d}{dp}(p^2 x) = \frac{2}{p^2} \implies p^2 x = -\frac{2}{p} + C \implies x(p) = \frac{C}{p^2} - \frac{2}{p^3}
   $$
4. **$y(p)$ ni ifodalaymiz:**
   $$
   y(p) = 2p \left( \frac{C}{p^2} - \frac{2}{p^3} \right) + \frac{1}{p^2} = \frac{2C}{p} - \frac{4}{p^2} + \frac{1}{p^2} = \frac{2C}{p} - \frac{3}{p^2}
   $$

**Javob:**
$$
\begin{cases}
x = \frac{C}{p^2} - \frac{2}{p^3} \\
y = \frac{2C}{p} - \frac{3}{p^2}
\end{cases}
$$
</details>

---

### 3-mashq
Koshi masalasini yeching yoki tushuntiring: $y = x y' + \sqrt{1 - (y')^2}$ tenglama berilgan. $(0, 1)$ nuqtadan nechta integral egri chiziq o'tadi?

<details>
<summary>👉 Bosqichma-bosqich yechimni ko'rish</summary>

1. **Klero tenglamasining umumiy yechimi:**
   $$
   y = C x + \sqrt{1 - C^2} \quad (|C| \le 1)
   $$
2. **Maxsus yechim:**
   $\psi(p) = \sqrt{1 - p^2}$.
   $$
   x = -\psi'(p) = -\frac{-2p}{2\sqrt{1 - p^2}} = \frac{p}{\sqrt{1 - p^2}}
   $$
   $$
   y = -p \left( -\frac{p}{\sqrt{1 - p^2}} \right) + \sqrt{1 - p^2} = \frac{p^2 + 1 - p^2}{\sqrt{1 - p^2}} = \frac{1}{\sqrt{1 - p^2}}
   $$
   Kvadratga ko'tarsak:
   $$
   y^2 - x^2 = \frac{1}{1 - p^2} - \frac{p^2}{1 - p^2} = 1 \implies y^2 - x^2 = 1 \quad (y \ge 1)
   $$
   Bu teng tomonli giperbolaning yuqori tarmog'idir ($y = \sqrt{1 + x^2}$).
3. **$(0, 1)$ nuqtani tahlil qilish:**
   - Nuqta maxsus yechimda yotadi: $1^2 - 0^2 = 1$.
   - Umumiy yechimga qo'yamiz: $1 = C \cdot 0 + \sqrt{1 - C^2} \implies 1 = \sqrt{1 - C^2} \implies C = 0$.
     To'g'ri chiziq: $y = 1$.
   Demak, $(0, 1)$ nuqtada $y = 1$ to'g'ri chizig'i $y^2 - x^2 = 1$ giperbolaga urinadi. Bu nuqtada Koshi masalasi yechimining yagonaligi buziladi: giperbolaning o'zi ham ($y = \sqrt{1 + x^2}$), $y = 1$ gorizontal to'g'ri chiziq ham yechimdir!

**Javob:**
Umumiy yechim: $y = C x + \sqrt{1 - C^2}$ ($|C| \le 1$). Maxsus yechim: $y^2 - x^2 = 1$ ($y \ge 1$). $(0, 1)$ nuqtadan ikkita yechim o'tadi (yagonalik buzilgan).
</details>

---

## 💡 Imtihon Layfhaklari va Tezkor Maslahatlar

1. **Klero tenglamasini 1 soniyada tanish qoidasi:**
   Agar tenglamada $y$ chap tomonda yolg'iz tursa, o'ng tomonda esa $x$ faqat va faqat $x \cdot y'$ ko'rinishida qatnashgan bo'lsa (boshqa hech qayerda $x$ yo'q):
   $$
   y = x y' + \dots (faqat \, y' \, qatnashgan \, qism)
   $$
   Bu 100% Klero tenglamasidir! Umumiy yechimini topish uchun shunchaki hamma $y'$ larning o'rniga $C$ harfini yozib qo'ying: $y = C x + \psi(C)$. Hech qanday integrallash kerak emas!

2. **O'rab oluvchini tezkor tekshirish:**
   Maxsus yechimni topgach, uning hosilasini hisoblang va dastlabki tenglamaga qo'yib ko'ring. Agar u tenglamani ayniyatga aylantirsa, yechimingiz 100% to'g'ri!

3. **Lagranj va Klero farqi:**
   Agar $x$ ning oldida $y'$ dan boshqa biror narsa turgan bo'lsa (masalan, $2y'$, $(y')^2$, $\frac{1}{y'}$), bu Klero emas, **Lagranj tenglamasidir**. Uni to'g'ridan-to'g'ri $C$ qo'yib yechib bo'lmaydi — albatta $p = y'$ qilib, chiziqli tenglamaga keltirish shart!
