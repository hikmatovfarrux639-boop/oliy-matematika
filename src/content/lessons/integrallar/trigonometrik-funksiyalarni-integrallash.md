---
title: "Trigonometrik funksiyalarni integrallash: Universal almashtirish va darajalarni pasaytirish"
module: "integrallar"
order: 11
description: "Trigonometrik ifodalarni integrallashning barcha klassik usullari: universal trigonometrik almashtirish, darajalarni pasaytirish, toq darajalarda differensial ostiga kiritish va tg(x) almashtirishi."
---

## Kirish va mavzuning ahamiyati

Oliy matematika kursida talabalar eng ko'p to'qnash keladigan va ko'pincha murakkab deb hisoblaydigan mavzulardan biri bu trigonometrik funksiyalar qatnashgan integrallardir:
$$\int R(\sin x, \cos x)\, dx$$
Bu yerda $R$ belgisi $\sin x$ va $\cos x$ larga nisbatan ratsional ifodani (ya'ni faqat to'rtta arifmetik amal — qo'shish, ayirish, ko'paytirish va bo'lish amallari qatnashgan ifodani) bildiradi.

Ko'pchilik talabalar trigonometrik integralni ko'rganda qaysi usulni qo'llashni bilmay chalkashadilar: qachon universal almashtirish kerak, qachon darajani pasaytirish lozim, qachon esa shunchaki differensial ostiga kiritish kifoya? 

Ushbu darsda biz **Mathprofi** uslubida barcha trigonometrik integrallarni 5 ta asosiy sinfga ajratib, har biri uchun aniq algoritm va to'liq yechilgan namunaviy misollarni ko'rib chiqamiz.

---

## 1. Trigonometrik integrallarning 5 ta asosiy toifasi va algoritmlar xaritasi

Trigonometrik integralni yechishdan oldin uning turini aniqlash zarur:

| Integral ko'rinishi | Qo'llaniladigan almashtirish yoki qoida | Qachon ishlatiladi? |
| :--- | :--- | :--- |
| **1. Universal almashtirish** | $t = \operatorname{tg}\frac{x}{2}, \quad dx = \frac{2dt}{1+t^2}$ | $\sin x, \cos x$ 1-darajada kasr maxrajida bo'lganda |
| **2. Toq darajalar:** $\int \sin^m x \cos^n x dx$ | Bitta darajani ajratib, differensial ostiga kiritish | $m$ yoki $n$ lardan kamida biri toq musbat son bo'lsa |
| **3. Juft darajalar:** $\int \sin^m x \cos^n x dx$ | Darajani pasaytirish: $\cos^2 x = \frac{1+\cos 2x}{2}$ | Har ikkala $m$ va $n$ juft nomanfiy son bo'lsa |
| **4. $\operatorname{tg} x = t$ almashtirishi** | $t = \operatorname{tg} x, \quad dx = \frac{dt}{1+t^2}$ | Integral $\sin x$ va $\cos x$ ga nisbatan juft bo'lsa |
| **5. Turli argumentlar ko'paytmasi** | Ko'paytmani yig'indiga aylantirish formulalari | $\sin(\alpha x) \cos(\beta x)$ kabi ko'paytmalarda |

---

## 2. Universal trigonometrik almashtirish ($t = \operatorname{tg}\frac{x}{2}$)

Universal almashtirish har qanday $\int R(\sin x, \cos x) dx$ integralini algebraik ratsional kasr integraliga aylantirib beradi.

### Asosiy formulalar:
Agar $t = \operatorname{tg}\frac{x}{2}$ deb olsak, $x = 2\operatorname{arctg} t$ bo'lib, quyidagi almashtirishlar o'rinli bo'ladi:
$$dx = \frac{2\,dt}{1 + t^2}$$
$$\sin x = \frac{2\operatorname{tg}\frac{x}{2}}{1 + \operatorname{tg}^2\frac{x}{2}} = \frac{2t}{1 + t^2}$$
$$\cos x = \frac{1 - \operatorname{tg}^2\frac{x}{2}}{1 + \operatorname{tg}^2\frac{x}{2}} = \frac{1 - t^2}{1 + t^2}$$
$$\operatorname{tg} x = \frac{2t}{1 - t^2}$$

### 1-Misol (Universal almashtirishga klassik imtihon savoli):
Quyidagi integralni hisoblang:
$$I = \int \frac{dx}{3 + 5\cos x}$$

**Yechish:**
1. Integralda $\cos x$ birinchi darajada maxrajda turibdi. Universal almashtirish qilamiz:
   $$t = \operatorname{tg}\frac{x}{2}, \quad dx = \frac{2dt}{1+t^2}, \quad \cos x = \frac{1-t^2}{1+t^2}$$

2. Ifodani integralga qo'yamiz:
   $$I = \int \frac{\frac{2dt}{1+t^2}}{3 + 5\cdot \frac{1-t^2}{1+t^2}} = \int \frac{\frac{2dt}{1+t^2}}{\frac{3(1+t^2) + 5(1-t^2)}{1+t^2}}$$

3. Umumiy maxrajdagi $1+t^2$ qisqarib ketadi:
   $$I = \int \frac{2dt}{3 + 3t^2 + 5 - 5t^2} = \int \frac{2dt}{8 - 2t^2} = \int \frac{dt}{4 - t^2}$$

4. Bu jadval integralidir (yuqori logarifm formulasi: $\int \frac{dt}{a^2 - t^2} = \frac{1}{2a}\ln\left|\frac{a+t}{a-t}\right| + C$, bu yerda $a = 2$):
   $$I = \frac{1}{2 \cdot 2} \ln \left| \frac{2 + t}{2 - t} \right| + C = \frac{1}{4} \ln \left| \frac{2 + \operatorname{tg}\frac{x}{2}}{2 - \operatorname{tg}\frac{x}{2}} \right| + C$$

---

## 3. Toq va juft darajali trigonometrik integrallar: $\int \sin^m x \cos^n x \, dx$

### Qoida A: Kamida bitta daraja toq bo'lganda (Differensial ostiga kiritish)
Agar biror daraja toq bo'lsa (masalan, $\sin x$ ning darajasi toq: $m = 2k + 1$), bitta $\sin x$ ni ajratib, $dx$ yoniga olib o'tamiz:
$$\sin^{2k+1} x \, dx = \sin^{2k} x \cdot (\sin x \, dx) = (1 - \cos^2 x)^k (-d(\cos x))$$
So'ngra $u = \cos x$ almashtirishi orqali oddiy ko'phad integraliga keltiriladi.

### 2-Misol (Toq daraja):
Quyidagi integralni hisoblang:
$$I = \int \sin^3 x \cos^4 x \, dx$$

**Yechish:**
1. Sinusning darajasi toq ($3$). Bitta $\sin x$ ni ajratamiz:
   $$\sin^3 x = \sin^2 x \cdot \sin x = (1 - \cos^2 x)\sin x$$
2. $\sin x \, dx = -d(\cos x)$ ekanini inobatga olib, integralni yozamiz:
   $$I = \int (1 - \cos^2 x) \cos^4 x \cdot \sin x \, dx = -\int (1 - \cos^2 x) \cos^4 x \, d(\cos x)$$
3. $u = \cos x$ desak:
   $$I = -\int (u^4 - u^6) \, du = \int (u^6 - u^4) \, du = \frac{u^7}{7} - \frac{u^5}{5} + C$$
4. Dastlabki o'zgaruvchiga qaytamiz:
   $$I = \frac{\cos^7 x}{7} - \frac{\cos^5 x}{5} + C$$

---

### Qoida B: Har ikkala daraja juft bo'lganda (Darajani pasaytirish)
Agar har ikkala daraja ham juft bo'lsa ($m = 2k, n = 2p$), differensial ostiga kiritish samara bermaydi. Bu holda faqatgina darajani pasaytirish formulalari yordamga keladi:
$$\cos^2 x = \frac{1 + \cos 2x}{2}, \quad \sin^2 x = \frac{1 - \cos 2x}{2}, \quad \sin x \cos x = \frac{\sin 2x}{2}$$

### 3-Misol (Juft daraja):
Quyidagi integralni hisoblang:
$$I = \int \cos^4 x \, dx$$

**Yechish:**
1. $\cos^4 x = (\cos^2 x)^2 = \left(\frac{1 + \cos 2x}{2}\right)^2$:
   $$\cos^4 x = \frac{1 + 2\cos 2x + \cos^2 2x}{4}$$
2. Hosil bo'lgan $\cos^2 2x$ ning darajasini yana pasaytiramiz:
   $$\cos^2 2x = \frac{1 + \cos 4x}{2}$$
3. Umumiy ifodani birlashtiramiz:
   $$\cos^4 x = \frac{1}{4} \left( 1 + 2\cos 2x + \frac{1 + \cos 4x}{2} \right) = \frac{1}{4} \left( \frac{3}{2} + 2\cos 2x + \frac{1}{2}\cos 4x \right) = \frac{3}{8} + \frac{1}{2}\cos 2x + \frac{1}{8}\cos 4x$$
4. Har bir hadni alohida integrallaymiz:
   $$I = \int \left( \frac{3}{8} + \frac{1}{2}\cos 2x + \frac{1}{8}\cos 4x \right) dx = \frac{3}{8}x + \frac{1}{4}\sin 2x + \frac{1}{32}\sin 4x + C$$

---

## 4. $\operatorname{tg} x = t$ almashtirishi ($R(-\sin x, -\cos x) = R(\sin x, \cos x)$)

Agar integral ostidagi ifodada $\sin x$ va $\cos x$ ning ishoralari bir vaqtda qarama-qarshisiga o'zgartirilganda ifoda o'zgarmasa (ya'ni funksiya juft bo'lsa), universal almashtirish o'rniga $t = \operatorname{tg} x$ almashtirishi juda tez natija beradi.

### Almashtirish formulalari:
$$t = \operatorname{tg} x, \quad x = \operatorname{arctg} t, \quad dx = \frac{dt}{1 + t^2}$$
$$\sin^2 x = \frac{t^2}{1 + t^2}, \quad \cos^2 x = \frac{1}{1 + t^2}, \quad \sin x \cos x = \frac{t}{1 + t^2}$$

### 4-Misol ($\operatorname{tg} x$ almashtirishiga):
Quyidagi integralni hisoblang:
$$I = \int \frac{dx}{1 + 3\sin^2 x}$$

**Yechish:**
1. Agar bu yerda $t = \operatorname{tg}\frac{x}{2}$ universal almashtirish qilinsa, 4-darajali ko'phad hosil bo'lib, hisoblash juda cho'zilib ketadi.
2. Ifoda juft darajali bo'lgani uchun $t = \operatorname{tg} x$ almashtirishini qo'llaymiz:
   $$dx = \frac{dt}{1+t^2}, \quad \sin^2 x = \frac{t^2}{1+t^2}$$
3. Qo'yamiz:
   $$I = \int \frac{\frac{dt}{1+t^2}}{1 + 3\cdot\frac{t^2}{1+t^2}} = \int \frac{dt}{(1+t^2) + 3t^2} = \int \frac{dt}{1 + 4t^2}$$
4. Jadval integrali ($\operatorname{arctg}$):
   $$I = \int \frac{dt}{1 + (2t)^2} = \frac{1}{2}\operatorname{arctg}(2t) + C = \frac{1}{2}\operatorname{arctg}(2\operatorname{tg} x) + C$$
Atigi 3 qatorda yechildi!

---

## 5. Turli argumentli trigonometrik ko'paytmalar

Har xil burchaklar ko'paytmasi qatnashganda quyidagi trigonometrik formulalar qo'llaniladi:
$$\sin(\alpha x) \cos(\beta x) = \frac{1}{2}[\sin(\alpha - \beta)x + \sin(\alpha + \beta)x]$$
$$\cos(\alpha x) \cos(\beta x) = \frac{1}{2}[\cos(\alpha - \beta)x + \cos(\alpha + \beta)x]$$
$$\sin(\alpha x) \sin(\beta x) = \frac{1}{2}[\cos(\alpha - \beta)x - \cos(\alpha + \beta)x]$$

**Misol:**
$$\int \sin 5x \cos 3x \, dx = \frac{1}{2}\int (\sin 2x + \sin 8x) dx = -\frac{\cos 2x}{4} - \frac{\cos 8x}{16} + C$$

---

## ⚠️ Talabalar eng ko'p yo'l qo'yadigan xatolar va tuzoqlar

1. **Universal almashtirishni hamma joyga tiqish xatosi:**
   Ko'p talabalar $\int \sin^3 x dx$ yoki $\int \frac{dx}{\cos^2 x}$ kabi oddiy misollarga ham $t = \operatorname{tg}\frac{x}{2}$ ni qo'llashga urinishadi. Natijada yechish deyarli imkonsiz bo'lgan 6–8 darajali murakkab kasrlar paydo bo'ladi. Har doim dastlab daraja toqmi yoki juftligini tekshiring!
2. **Differensialdagi koeffitsiyentni unutish:**
   $t = \operatorname{tg}\frac{x}{2}$ qilinganda $dx = \frac{2dt}{1+t^2}$ bo'ladi. Suratdagi $2$ raqami ko'pincha tushirib qoldiriladi va yakuniy javob 2 barobar xato chiqadi.
3. **$\cos 2x$ integrali ishorasi:**
   Differensiallashda $(\cos 2x)' = -2\sin 2x$ manfiy chiqadi, lekin integrallashda $\int \cos 2x dx = +\frac{1}{2}\sin 2x + C$ bo'ladi! Bu ishora chalkashligi imtihonlarda eng ko'p ball yo'qotiladigan nuqtadir.

---

## ✏️ Mustaqil yechish uchun amaliy mashqlar va javoblar

1. $\int \frac{dx}{5 - 3\cos x}$ integralini universal almashtirish orqali hisoblang.
   *Javob:* $\frac{1}{2}\operatorname{arctg}\left(2\operatorname{tg}\frac{x}{2}\right) + C$
2. $\int \cos^3 x \, dx$ integralini differensial ostiga kiritish orqali hisoblang.
   *Javob:* $\sin x - \frac{\sin^3 x}{3} + C$
3. $\int \sin^2 x \cos^2 x \, dx$ integralini hisoblang.
   *Javob:* $\frac{x}{8} - \frac{\sin 4x}{32} + C$
4. $\int \frac{dx}{\sin^2 x + 2\cos^2 x}$ integralini $t = \operatorname{tg} x$ yordamida hisoblang.
   *Javob:* $\frac{1}{\sqrt{2}}\operatorname{arctg}\left(\frac{\operatorname{tg} x}{\sqrt{2}}\right) + C$
