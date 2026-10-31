---
title: "Logarifmik differensiallash usuli va darajali-ko'rsatkichli funksiyalar hosilasi"
module: "hosila"
order: 8
description: "y = u(x)^v(x) ko'rinishidagi funksiyalar, ko'p ko'paytuvchili kasrlar va ildizli ifodalarni dastlab natural logarifmlash orqali oson differensiallash."
---

## 📌 Kirish va Geometrik/Fizik Mohiyat

Differensial hisob kursini o'rganish jarayonida talabalar ikkita mashhur hosila formulasini yaxshi o'zlashtiradilar:
1. **Darajali funksiya hosilasi:** $(x^n)' = n x^{n-1}$ yoki umumiy holda $(u^n)' = n u^{n-1} \cdot u'$ (bu yerda asos — o'zgaruvchi, daraja ko'rsatkichi esa — o'zgarmas son).
2. **Ko'rsatkichli funksiya hosilasi:** $(a^x)' = a^x \ln a$ yoki umumiy holda $(a^u)' = a^u \ln a \cdot u'$ (bu yerda asos — o'zgarmas son, daraja ko'rsatkichi esa — o'zgaruvchi).

Ammo amaliyotda, termodinamikada, iqtisodiy tahlilda va kvant mexanikasida ko'pincha **asos ham, daraja ham bir vaqtda $x$ ga bog'liq bo'lgan** holatlar uchraydi:

$$
y = [u(x)]^{v(x)}
$$

Masalan, $y = x^x$, $y = (\sin x)^x$, $y = x^{\ln x}$ yoki $y = (\cos x)^{\sqrt{x}}$. Bunday funksiyalar matematikada **darajali-ko'rsatkichli funksiyalar** deb ataladi.

Bu funksiyalarga na darajali funksiya qoidasini, na ko'rsatkichli funksiya qoidasini alohida qo'llab bo'lmaydi! Agar siz $(x^x)' = x \cdot x^{x-1} = x^x$ desangiz — qo'pol xato qilasiz. Agar $(x^x)' = x^x \ln x$ desangiz — yana qo'pol xato qilasiz!

Xo'sh, chiqish yo'li qayerda? 

Bu muammoni hal qilishda buyuk shotland matematigi Jon Neper kashf etgan **logarifm funksiyasi** mo''jizaviy vosita bo'lib xizmat qiladi. Logarifm oliy matematikadagi eng qudratli "algebraik transformator"dir: u murakkab darajani ko'paytmaga, ko'paytmani yig'indiga, bo'linmani esa oddiy ayirmaga aylantirib beradi.

Differensiallashdan oldin funksiyaning ikkala tomonini natural logarifmlash va hosil bo'lgan ifodadan hosila olish usuli matematik analizda **logarifmik differensiallash usuli** deb ataladi.

---

## 📐 Asosiy Nazariya, Qoidalar va Teoremalar

### 1. Logarifmik hosila tushunchasi

Faraz qilaylik, $y = f(x)$ funksiya differensiallanuvchi va $f(x) \neq 0$ bo'lsin. Tenglikning ikkala qismini modul bo'yicha natural logarifmlaymiz:

$$
\ln |y| = \ln |f(x)|
$$

Endi ikkala qismdan argument $x$ bo'yicha hosila olamiz. Chap qismda $y$ o'zgaruvchi $x$ ning funksiyasi bo'lgani sababli, murakkab funksiya hosilasi qoidasiga ko'ra:

$$
(\ln |y|)' = \frac{1}{y} \cdot y' = \frac{y'}{y}
$$

> **Ta'rif:** $\frac{y'}{y}$ nisbat $y = f(x)$ funksiyaning **logarifmik hosilasi** deb ataladi. U funksiyaning nisbiy o'zgarish tezligini (iqtisodiyotda elastiklik, fizikada esa o'sish sur'atini) ifodalaydi.

Ushbu tenglikdan biz qidirayotgan hosila $y'$ bevosita topiladi:

$$
y' = y \cdot (\ln |y|)'
$$

---

### 2. Darajali-ko'rsatkichli funksiyani differensiallash qoidasi

Aytaylik, $y = [u(x)]^{v(x)}$ funksiya berilgan bo'lsin, bu yerda $u(x) > 0$ va $u(x), v(x)$ funksiyalar differensiallanuvchi.

1. Ikkala tomonni natural logarifmlaymiz:
   $$\ln y = \ln \left( [u(x)]^{v(x)} \right) = v(x) \cdot \ln u(x)$$

2. Ikkala tomonni $x$ bo'yicha differensiallaymiz (o'ng tomonga ko'paytma qoidasi $(uv)' = u'v + uv'$ ni qo'llaymiz):
   $$\frac{y'}{y} = [v(x)]' \cdot \ln u(x) + v(x) \cdot [\ln u(x)]'$$
   $$\frac{y'}{y} = v'(x) \cdot \ln u(x) + v(x) \cdot \frac{u'(x)}{u(x)}$$

3. Ikkala tomonni $y$ ga ko'paytiramiz va $y = [u(x)]^{v(x)}$ ekanini hisobga olamiz:

$$
y' = [u(x)]^{v(x)} \left[ v'(x) \ln u(x) + \frac{v(x) \cdot u'(x)}{u(x)} \right]
$$

Qavslarni ochib chiqsak, ajoyib qonuniyat kelib chiqadi:

$$
y' = v(x) \cdot [u(x)]^{v(x) - 1} \cdot u'(x) + [u(x)]^{v(x)} \cdot \ln u(x) \cdot v'(x)
$$

> **Muhim Falsafiy Qoida (Ikki xususiyat yig'indisi):**
> Darajali-ko'rsatkichli funksiyaning hosilasi ikkita qismning yig'indisiga teng:
> 1. Funksiyaga xuddi **darajali funksiyadek** qarab olingan hosila (daraja $v$ o'zgarmas deb qaraladi);
> 2. Funksiyaga xuddi **ko'rsatkichli funksiyadek** qarab olingan hosila (asos $u$ o'zgarmas deb qaraladi)!

---

### 3. Asosiy ko'rsatkichli almashtirish usuli

Logarifmik differensiallashga muqobil yana bir qulay usul mavjud: asosiy logarifmik ayniyat $A = e^{\ln A}$ dan foydalanish:

$$
y = [u(x)]^{v(x)} = e^{\ln \left( [u(x)]^{v(x)} \right)} = e^{v(x) \cdot \ln u(x)}
$$

Endi oddiy ko'rsatkichli murakkab funksiya sifatida hosila olinadi:
$$y' = \left( e^{v \ln u} \right)' = e^{v \ln u} \cdot (v \ln u)' = u^v \cdot \left( v' \ln u + v \frac{u'}{u} \right)$$
Bu usul logarifmik differensiallash bilan bir xil natija beradi.

---

### 4. Ko'p ko'paytuvchili kasr-ratsional va irratsional funksiyalarni differensiallash

Agar funksiya quyidagi ko'rinishda bo'lsa:

$$
y = \frac{f_1(x)^{a_1} \cdot f_2(x)^{a_2} \cdots f_n(x)^{a_n}}{g_1(x)^{b_1} \cdot g_2(x)^{b_2} \cdots g_m(x)^{b_m}}
$$

Standart bo'linma qoidasini qo'llash ulkan hisob-kitoblarga sabab bo'ladi. Logarifmlash esa buni elementar yig'indiga aylantiradi:

$$
\ln |y| = \sum_{i=1}^n a_i \ln |f_i(x)| - \sum_{j=1}^m b_j \ln |g_j(x)|
$$

Hosilaga o'tsak:

$$
\frac{y'}{y} = \sum_{i=1}^n a_i \frac{f_i'(x)}{f_i(x)} - \sum_{j=1}^m b_j \frac{g_j'(x)}{g_j(x)}
$$

Ushbu formula orqali bir necha sahifalik hisoblashlar 2-3 qatorda hal etiladi!

---

## 📝 Qadamma-qadam Yechilgan Universitet Misollari

### 1-misol: Klassik $y = x^x$ funksiya hosilasi

**Shart:** $y = x^x$ ($x > 0$) funksiyaning hosilasini toping va grafigining minimum nuqtasini aniqlang.

**Yechish:**
1. Tenglikning ikkala qismini natural logarifmlaymiz:
   $$\ln y = \ln (x^x) = x \ln x$$
2. Ikkala qismdan $x$ bo'yicha hosila olamiz:
   $$(\ln y)' = (x \ln x)'$$
   $$\frac{y'}{y} = (x)' \cdot \ln x + x \cdot (\ln x)' = 1 \cdot \ln x + x \cdot \frac{1}{x} = \ln x + 1$$
3. $y'$ ni topish uchun ikkala tomonni $y$ ga ko'paytiramiz:
   $$y' = y \cdot (\ln x + 1)$$
4. $y = x^x$ ekanini hisobga olib o'rniga qo'yamiz:
   $$y' = x^x (\ln x + 1)$$
5. **Ekstremumni topish:** Hosilani nolga tenglashtiramiz:
   $$y' = 0 \iff x^x (\ln x + 1) = 0$$
   $x > 0$ da $x^x > 0$, demak:
   $$\ln x + 1 = 0 \iff \ln x = -1 \iff x = \frac{1}{e}$$
   Demak, $x = \frac{1}{e}$ nuqtada funksiya o'zining minimumiga erishadi va uning minimum qiymati $y_{\min} = \left(\frac{1}{e}\right)^{1/e} \approx 0.6922$ ga teng.

**Javob:** $y' = x^x (\ln x + 1)$; minimum nuqtasi: $x = \frac{1}{e}$.

---

### 2-misol: Murakkab darajali-ko'rsatkichli funksiya

**Shart:** $y = (\sin x)^{\cos x}$ ($0 < x < \pi$) funksiyaning hosilasini toping.

**Yechish:**
1. Ikkala tomonni natural logarifmlaymiz:
   $$\ln y = \ln \left( (\sin x)^{\cos x} \right) = \cos x \cdot \ln(\sin x)$$
2. Hosila olamiz (ko'paytma va murakkab funksiya qoidasi):
   $$\frac{y'}{y} = (\cos x)' \cdot \ln(\sin x) + \cos x \cdot [\ln(\sin x)]'$$
3. Alohida hosilalarni hisoblaymiz:
   - $(\cos x)' = -\sin x$
   - $[\ln(\sin x)]' = \frac{1}{\sin x} \cdot (\sin x)' = \frac{\cos x}{\sin x} = \operatorname{ctg} x$
4. Ifodaga qo'yamiz:
   $$\frac{y'}{y} = -\sin x \cdot \ln(\sin x) + \cos x \cdot \frac{\cos x}{\sin x} = \frac{\cos^2 x}{\sin x} - \sin x \cdot \ln(\sin x)$$
5. Boshlang'ich $y$ ga ko'paytiramiz:
   $$y' = (\sin x)^{\cos x} \left( \frac{\cos^2 x}{\sin x} - \sin x \cdot \ln(\sin x) \right)$$

**Javob:** $y' = (\sin x)^{\cos x} \left[ \frac{\cos^2 x}{\sin x} - \sin x \ln(\sin x) \right]$

---

### 3-misol: Ko'p ko'paytuvchili kasr-irratsional ifodani qisqa yo'l bilan differensiallash

**Shart:** Ushbu murakkab funksiyaning hosilasini toping:
$$y = \frac{(x - 2)^3 \cdot \sqrt{x + 1}}{(x + 3)^5}$$

**Yechish:**
Agar bu misolni odatiy $\left(\frac{u}{v}\right)'$ qoidasi bilan ishlasak, hisob-kitoblar juda cho'zilib ketadi. Logarifmik usulni qo'llaymiz.

1. Ikkala tomonni modul bo'yicha logarifmlaymiz:
   $$\ln |y| = \ln \left| \frac{(x - 2)^3 (x + 1)^{1/2}}{(x + 3)^5} \right|$$
2. Logarifm xossalariga ko'ra yoyamiz:
   $$\ln |y| = 3 \ln |x - 2| + \frac{1}{2} \ln |x + 1| - 5 \ln |x + 3|$$
3. Ikkala tomondan hosila olamiz:
   $$\frac{y'}{y} = 3 \cdot \frac{1}{x - 2} + \frac{1}{2} \cdot \frac{1}{x + 1} - 5 \cdot \frac{1}{x + 3}$$
4. $y$ ni o'ng tomonga ko'paytiramiz:
   $$y' = \frac{(x - 2)^3 \sqrt{x + 1}}{(x + 3)^5} \left[ \frac{3}{x - 2} + \frac{1}{2(x + 1)} - \frac{5}{x + 3} \right]$$

Hisoblash atigi 4 qatorda to'liq va xatosiz bajarildi!

---

### 4-misol: Urinma tenglamasini tuzish masalasi

**Shart:** $y = (x + 1)^x$ funksiya grafigiga $x_0 = 1$ nuqtada o'tkazilgan urinma tenglamasini toping.

**Yechish:**
1. Urinish nuqtasi ordinatasi:
   $$y_0 = y(1) = (1 + 1)^1 = 2^1 = 2 \implies M_0(1, 2)$$
2. Funksiyaning hosilasini topish uchun logarifmlaymiz:
   $$\ln y = x \ln(x + 1)$$
3. Hosila olamiz:
   $$\frac{y'}{y} = (x)' \ln(x + 1) + x [\ln(x + 1)]' = 1 \cdot \ln(x + 1) + \frac{x}{x + 1}$$
   $$y' = (x + 1)^x \left[ \ln(x + 1) + \frac{x}{x + 1} \right]$$
4. $x_0 = 1$ nuqtadagi hosila qiymatini (urinmaning burchak koeffitsiyentini) topamiz:
   $$k = y'(1) = (1 + 1)^1 \left[ \ln(1 + 1) + \frac{1}{1 + 1} \right] = 2 \left( \ln 2 + \frac{1}{2} \right) = 2 \ln 2 + 1$$
5. Urinma tenglamasini yozamiz:
   $$y - y_0 = k(x - x_0) \implies y - 2 = (2 \ln 2 + 1)(x - 1)$$
   $$y = (2 \ln 2 + 1)x - (2 \ln 2 + 1) + 2 = (2 \ln 2 + 1)x + (1 - 2 \ln 2)$$

**Javob:** $y = (2 \ln 2 + 1)x + (1 - 2 \ln 2)$

---

## ⚠️ Talabalar Eng Ko'p Yo'l Qo'yadigan Xatolar va Tuzoqlar

1. **Chap tomonda $y'$ hosilani unutish:**
   Logarifmlab bo'lgach, chap tomondan hosila olinganda talabalar ko'pincha $(\ln y)' = \frac{1}{y}$ deb yozib qo'yishadi. Unutmang: $y$ bu o'zgarmas emas, u $x$ ning funksiyasidir! Shuning uchun murakkab funksiya qoidasiga ko'ra doimo **$\frac{y'}{y}$** bo'ladi.

2. **Yechim oxirida $y$ ni $x$ orqali ifodalashni unutish:**
   Natijada $y' = y \cdot (\dots)$ ko'rinishida qoldirib ketishadi. Yakuniy javobda faqat argument $x$ qatnashishi shart, shuning uchun $y$ o'rniga uning dastlabki formulasi qo'yilishi shart.

3. **Darajali va ko'rsatkichli qoidalarni aralashtirib yuborish:**
   $(x^{\cos x})'$ hosilasini $\cos x \cdot x^{\cos x - 1}$ deb hisoblash eng qo'pol xatodir. Agar asosda ham, darajada ham $x$ bo'lsa — faqat va faqat logarifmik differensiallash qo'llaniladi!

4. **Nol va manfiy qiymatlarni nazardan qochirish:**
   Logarifm faqat musbat sonlar uchun aniqlangan. Agar funksiya manfiy qiymatlar qabul qilishi mumkin bo'lsa, albatta modul qo'yish kerak: $\ln |y|$ va $(\ln |y|)' = \frac{y'}{y}$ (chunki $(\ln |x|)' = \frac{1}{x}$).

---

## 🎯 Mustaqil Yechish Uchun Amaliy Mashqlar va Yechimlar

### 1-mashq
$y = x^{\sqrt{x}}$ ($x > 0$) funksiyaning hosilasini toping.

<details>
<summary>Yechimni ko'rish</summary>

**Bosqichma-bosqich yechim:**
1. Natural logarifmlaymiz:
   $$\ln y = \ln(x^{\sqrt{x}}) = \sqrt{x} \ln x$$
2. $x$ bo'yicha hosila olamiz:
   $$\frac{y'}{y} = (\sqrt{x})' \ln x + \sqrt{x} (\ln x)' = \frac{1}{2\sqrt{x}} \ln x + \sqrt{x} \cdot \frac{1}{x}$$
3. $\sqrt{x} \cdot \frac{1}{x} = \frac{1}{\sqrt{x}}$ ekanini hisobga olib, umumiy mahrajga keltiramiz:
   $$\frac{y'}{y} = \frac{\ln x}{2\sqrt{x}} + \frac{1}{\sqrt{x}} = \frac{\ln x + 2}{2\sqrt{x}}$$
4. $y = x^{\sqrt{x}}$ ga ko'paytiramiz:
   $$y' = x^{\sqrt{x}} \cdot \frac{\ln x + 2}{2\sqrt{x}}$$

**Javob:** $y' = x^{\sqrt{x}} \cdot \frac{\ln x + 2}{2\sqrt{x}}$
</details>

---

### 2-mashq
$y = (\ln x)^x$ ($x > 1$) funksiyaning hosilasini hisoblang.

<details>
<summary>Yechimni ko'rish</summary>

**Bosqichma-bosqich yechim:**
1. Logarifmlaymiz:
   $$\ln y = \ln \left( (\ln x)^x \right) = x \ln(\ln x)$$
2. Hosila olamiz:
   $$\frac{y'}{y} = (x)' \ln(\ln x) + x [\ln(\ln x)]' = 1 \cdot \ln(\ln x) + x \cdot \frac{1}{\ln x} \cdot (\ln x)'$$
3. $(\ln x)' = \frac{1}{x}$ bo'lgani uchun:
   $$\frac{y'}{y} = \ln(\ln x) + x \cdot \frac{1}{\ln x} \cdot \frac{1}{x} = \ln(\ln x) + \frac{1}{\ln x}$$
4. $y$ ga ko'paytiramiz:
   $$y' = (\ln x)^x \left[ \ln(\ln x) + \frac{1}{\ln x} \right]$$

**Javob:** $y' = (\ln x)^x \left[ \ln(\ln x) + \frac{1}{\ln x} \right]$
</details>

---

### 3-mashq
Logarifmik usuldan foydalanib, ushbu funksiya hosilasini toping:
$$y = \sqrt{\frac{(x + 1)(x - 2)}{(x - 3)(x + 4)}}$$

<details>
<summary>Yechimni ko'rish</summary>

**Bosqichma-bosqich yechim:**
1. Ildizni daraja ko'rinishida yozib, modul bilan logarifmlaymiz:
   $$\ln |y| = \frac{1}{2} [\ln |x + 1| + \ln |x - 2| - \ln |x - 3| - \ln |x + 4|]$$
2. Ikkala tomondan hosila olamiz:
   $$\frac{y'}{y} = \frac{1}{2} \left[ \frac{1}{x + 1} + \frac{1}{x - 2} - \frac{1}{x - 3} - \frac{1}{x + 4} \right]$$
3. $y$ ga ko'paytiramiz:
   $$y' = \frac{1}{2} \sqrt{\frac{(x + 1)(x - 2)}{(x - 3)(x + 4)}} \left[ \frac{1}{x + 1} + \frac{1}{x - 2} - \frac{1}{x - 3} - \frac{1}{x + 4} \right]$$

**Javob:** $y' = \frac{1}{2} \sqrt{\frac{(x + 1)(x - 2)}{(x - 3)(x + 4)}} \left[ \frac{1}{x + 1} + \frac{1}{x - 2} - \frac{1}{x - 3} - \frac{1}{x + 4} \right]$
</details>

---

## 💡 Imtihon Layfhaklari va Tezkor Maslahatlar

1. **"Ikkala hosila yig'indisi" qoralamasi:**
   Imtihonda darajali-ko'rsatkichli funksiya $u^v$ berilsa, qoralamada quyidagi qisqa qoidadan foydalanib javobni 15 soniyada yozishingiz mumkin:
   $$(u^v)' = \underbrace{v \cdot u^{v-1} \cdot u'}_{\text{darajali kabi}} + \underbrace{u^v \cdot \ln u \cdot v'}_{\text{ko'rsatkichli kabi}}$$
   Masalan, $(x^x)' = x \cdot x^{x-1} \cdot (1) + x^x \cdot \ln x \cdot (1) = x^x + x^x \ln x = x^x(1 + \ln x)$!

2. **Murakkab kasrlarda burchakli hisoblashdan qochish:**
   Agar ko'paytuvchilar soni 3 tadan oshsa yoki ildizlar qatnashsa, hech ikkilanmasdan logarifmik differensiallashni qo'llang. Bu sizni umumiy maxraj keltirish va qavslarni ochishdagi qo'pol arifmetik xatolardan 100% asraydi.

3. **Limitlarda $1^\infty$ noaniqligini yechishdagi bog'liqlik:**
   $\lim [u(x)]^{v(x)}$ ko'rinishidagi $1^\infty$ noaniqliklarni ochishda aynan $e^{\lim v(x)(u(x) - 1)}$ formulasiga o'tilishi ham mana shu logarifmlash printsipiga asoslangan.
