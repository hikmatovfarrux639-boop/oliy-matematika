---
title: "Trigonometrik funksiyalarni integrallash: Universal almashtirish va darajalarni pasaytirish"
module: "integrallar"
order: 11
description: "Trigonometrik ifodalarni integrallashning barcha klassik usullari: universal trigonometrik almashtirish, darajalarni pasaytirish, toq darajalarda differensial ostiga kiritish va tg(x) almashtirishi."
---

## 📌 Kirish va Geometrik/Fizik Mohiyat

Trigonometrik funksiyalar qatnashgan integrallar matematik analiz, to'lqinlar mexanikasi, elektrotexnika (o'zgaruvchan tok zanjirlari), Furye tahlili va kvant fizikasida markaziy o'rin egallaydi. Tabiatdagi barcha davriy va tebranma jarayonlar — mayatnik harakatidan tortib, elektromagnit to'lqinlarining tarqalishigacha — sinus va kosinus funksiyalari orqali tavsiflanadi.

Matematik jihatdan, biz quyidagi umumiy ko'rinishdagi integrallarni o'rganamiz:
$$\int R(\sin x, \cos x) \, dx$$
bu yerda $R(u, v)$ — o'zining argumentlariga nisbatan ratsional funksiya (ya'ni faqat qo'shish, ayirish, ko'paytirish, bo'lish va butun darajaga oshirish amallaridan tashkil topgan ifoda).

Talabalar orasida eng keng tarqalgan xato — har qanday trigonometrik integralni ko'rganda darhol universal almashtirishga murojaat qilishdir. Biroq universal almashtirish aksariyat hollarda 4- yoki 6-darajali juda murakkab ratsional kasrlarni vujudga keltiradi ("chumchuqni to'pdan otish"). Shu bois, Fichtenholz va Piskunov kabi klassik matematiklar har bir trigonometrik integral turi uchun eng ixcham, chiroyli va tezkor yechim beruvchi maxsus algoritmlarni ishlab chiqqanlar.

---

## 📐 Asosiy Nazariya, Qoidalar va Teoremalar

Trigonometrik integrallarni yechish ularning ichki simmetriyasi va darajalariga qarab **beshta asosiy toifaga** bo'linadi.

### 1. Toq darajali ko'paytmalar: $\int \sin^m x \cos^n x \, dx$ ($m$ yoki $n$ toq musbat son)

Bu toifada differensial ostiga kiritish usuli qo'llaniladi:
- **Agar $\sin x$ ning darajasi $m = 2k + 1$ toq bo'lsa:**
  Bitta $\sin x$ ajratib olinadi va differensial ostiga kiritiladi: $\sin x \, dx = -d(\cos x)$. Qolgan juft darajali $\sin^{2k} x$ esa asosiy trigonometrik ayniyat $\sin^2 x = 1 - \cos^2 x$ orqali almashtiriladi:
  $$\int \sin^{2k+1} x \cos^n x \, dx = -\int (1 - \cos^2 x)^k \cos^n x \, d(\cos x)$$
  Almashtirish: $t = \cos x$.

- **Agar $\cos x$ ning darajasi $n = 2k + 1$ toq bo'lsa:**
  Bitta $\cos x$ ajratiladi: $\cos x \, dx = d(\sin x)$, qolgan $\cos^{2k} x = (1 - \sin^2 x)^k$:
  $$\int \sin^m x \cos^{2k+1} x \, dx = \int \sin^m x (1 - \sin^2 x)^k \, d(\sin x)$$
  Almashtirish: $t = \sin x$.

---

### 2. Juft darajali ko'paytmalar: $\int \sin^m x \cos^n x \, dx$ ($m$ va $n$ ikkalasi ham juft nomanfiy son)

Bunday integrallarda differensial ostiga kiritib bo'lmaydi. Yagona yo'l — **darajani pasaytirish formulalaridan** foydalanishdir:
$$\sin^2 x = \frac{1 - \cos 2x}{2}, \qquad \cos^2 x = \frac{1 + \cos 2x}{2}$$
$$\sin x \cos x = \frac{1}{2}\sin 2x$$

Agar darajalar $4$ yoki undan yuqori bo'lsa, bu formulalar argument $4x, 8x, \dots$ ga o'tgan holda bir necha bor takroran qo'llaniladi.

---

### 3. Tangens almashtirishi: $t = \operatorname{tg} x$ (Juftlik simmetriyasi)

Agar integral ostidagi funksiya $\sin x$ va $\cos x$ ning ishoralari bir vaqtda qarama-qarshisiga o'zgarganda o'z qiymatini saqlab qolsa:
$$R(-\sin x, -\cos x) = R(\sin x, \cos x)$$
Bu holda eng optimal usul $t = \operatorname{tg} x$ almashtirishidir.

**Asosiy bog'lanish formulalari:**
$$x = \operatorname{arctg} t \implies dx = \frac{dt}{1 + t^2}$$
$$\cos^2 x = \frac{1}{1 + \operatorname{tg}^2 x} = \frac{1}{1 + t^2}$$
$$\sin^2 x = \frac{\operatorname{tg}^2 x}{1 + \operatorname{tg}^2 x} = \frac{t^2}{1 + t^2}$$
$$\sin x \cos x = \frac{\operatorname{tg} x}{1 + \operatorname{tg}^2 x} = \frac{t}{1 + t^2}$$

Ushbu almashtirish universal almashtirishga qaraganda hisoblash hajmini 3-4 barobar qisqartiradi!

---

### 4. Universal trigonometrik almashtirish: $t = \operatorname{tg}\frac{x}{2}$ (Veyyershtrass almashtirishi)

Agar yuqoridagi soddaroq usullar mos kelmasa (masalan, $\sin x$ va $\cos x$ kasr maxrajida 1-darajada chiziqli qatnashsa), universal trigonometrik almashtirish qo'llaniladi. Bu almashtirish har qanday trigonometrik ifodani algebraik ratsional kasrga aylantiradi.

**Almashtirish formulalari:**
$$t = \operatorname{tg}\frac{x}{2} \implies x = 2\operatorname{arctg} t \implies dx = \frac{2\,dt}{1 + t^2}$$
Trigonometrik yarim burchak formulalariga asosan:
$$\sin x = \frac{2\sin\frac{x}{2}\cos\frac{x}{2}}{\cos^2\frac{x}{2} + \sin^2\frac{x}{2}} = \frac{2\operatorname{tg}\frac{x}{2}}{1 + \operatorname{tg}^2\frac{x}{2}} = \frac{2t}{1 + t^2}$$
$$\cos x = \frac{\cos^2\frac{x}{2} - \sin^2\frac{x}{2}}{\cos^2\frac{x}{2} + \sin^2\frac{x}{2}} = \frac{1 - \operatorname{tg}^2\frac{x}{2}}{1 + \operatorname{tg}^2\frac{x}{2}} = \frac{1 - t^2}{1 + t^2}$$

---

### 5. Turli argumentli ko'paytmalar: $\sin(\alpha x)$, $\cos(\beta x)$

Turli argumentli trigonometrik funksiyalar ko'paytmasini integrallash uchun ular ko'paytmani yig'indiga aylantirish formulalari yordamida yoyiladi:
$$\sin(\alpha x) \cos(\beta x) = \frac{1}{2}[\sin(\alpha - \beta)x + \sin(\alpha + \beta)x]$$
$$\cos(\alpha x) \cos(\beta x) = \frac{1}{2}[\cos(\alpha - \beta)x + \cos(\alpha + \beta)x]$$
$$\sin(\alpha x) \sin(\beta x) = \frac{1}{2}[\cos(\alpha - \beta)x - \cos(\alpha + \beta)x]$$

---

## 📝 Qadamma-qadam Yechilgan Universitet Misollari

### 1-Misol: Toq darajani differensial ostiga kiritish
Quyidagi noaniq integralni hisoblang:
$$I = \int \sin^3 x \cos^4 x \, dx$$

**Yechish:**
1. Integraldagi darajalarni tahlil qilamiz: $\sin x$ ning darajasi $3$ (toq musbat son), $\cos x$ ning darajasi $4$ (juft son).
2. Sinusdan bitta darajani ajratib, differensial belgisi ostiga kiritamiz:
   $$\sin^3 x \, dx = \sin^2 x \cdot (\sin x \, dx) = \sin^2 x \cdot (-d(\cos x))$$
3. Asosiy trigonometrik ayniyatdan foydalanib, $\sin^2 x = 1 - \cos^2 x$ deb olamiz:
   $$I = \int (1 - \cos^2 x) \cos^4 x \cdot (-\, d(\cos x)) = -\int (\cos^4 x - \cos^6 x) \, d(\cos x)$$
4. Qavslarni ochib, $t = \cos x$ almashtirishi bo'yicha darajali integrallarni olamiz:
   $$I = -\int (t^4 - t^6) \, dt = \int (t^6 - t^4) \, dt = \frac{t^7}{7} - \frac{t^5}{5} + C$$
5. Dastlabki $x$ o'zgaruvchisiga qaytamiz:
   $$I = \frac{\cos^7 x}{7} - \frac{\cos^5 x}{5} + C$$

**Javob:** $\frac{\cos^7 x}{7} - \frac{\cos^5 x}{5} + C$.

---

### 2-Misol: Juft darajani pasaytirish usuli
Quyidagi integralni hisoblang:
$$I = \int \sin^4 x \, dx$$

**Yechish:**
1. Sinusning darajasi $4$ — juft son. Darajani pasaytirish formulasini qo'llaymiz:
   $$\sin^2 x = \frac{1 - \cos 2x}{2} \implies \sin^4 x = \left(\frac{1 - \cos 2x}{2}\right)^2 = \frac{1 - 2\cos 2x + \cos^2 2x}{4}$$
2. Integralni uchta bo'lakka ajratamiz:
   $$I = \frac{1}{4} \int (1 - 2\cos 2x + \cos^2 2x) \, dx = \frac{1}{4}x - \frac{1}{2} \int \cos 2x \, dx + \frac{1}{4} \int \cos^2 2x \, dx$$
3. $\cos^2 2x$ ga yana bir bor darajani pasaytirish formulasini qo'llaymiz (argument $2x$ endi $4x$ ga aylanadi!):
   $$\cos^2 2x = \frac{1 + \cos 4x}{2}$$
4. O'rniga qo'yib hisoblaymiz:
   $$I = \frac{x}{4} - \frac{1}{4}\sin 2x + \frac{1}{4} \int \frac{1 + \cos 4x}{2} \, dx$$
   $$I = \frac{x}{4} - \frac{1}{4}\sin 2x + \frac{1}{8} \left( x + \frac{\sin 4x}{4} \right) + C$$
5. O'xshash hadlarni ixchamlaymiz:
   $$\frac{x}{4} + \frac{x}{8} = \frac{3x}{8}$$
   $$I = \frac{3x}{8} - \frac{\sin 2x}{4} + \frac{\sin 4x}{32} + C$$

**Javob:** $\frac{3x}{8} - \frac{\sin 2x}{4} + \frac{\sin 4x}{32} + C$.

---

### 3-Misol: $t = \operatorname{tg} x$ almashtirishi
Quyidagi integralni hisoblang:
$$I = \int \frac{dx}{1 + 3\cos^2 x}$$

**Yechish:**
1. Integral ostidagi ifodani tekshiramiz: agar $\cos x$ o'rniga $-\cos x$ qo'ysak, uning kvadrati tufayli ifoda o'zgarmaydi. Demak, $t = \operatorname{tg} x$ almashtirishi eng maqbul yo'ldir.
2. Bu turdagi integrallarni yechishning ajoyib usuli — surat va maxrajni $\cos^2 x$ ga bo'lishdir:
   $$I = \int \frac{\frac{dx}{\cos^2 x}}{\frac{1}{\cos^2 x} + 3}$$
3. Ma'lumki, $\frac{dx}{\cos^2 x} = d(\operatorname{tg} x)$ va $\frac{1}{\cos^2 x} = 1 + \operatorname{tg}^2 x$. Shularni qo'yamiz:
   $$I = \int \frac{d(\operatorname{tg} x)}{(1 + \operatorname{tg}^2 x) + 3} = \int \frac{d(\operatorname{tg} x)}{\operatorname{tg}^2 x + 4}$$
4. $t = \operatorname{tg} x$ deb olsak, standart jadval integrali $\int \frac{dt}{t^2 + a^2} = \frac{1}{a}\operatorname{arctg}\frac{t}{a} + C$ ga kelamiz (bu yerda $a = 2$):
   $$I = \int \frac{dt}{t^2 + 2^2} = \frac{1}{2}\operatorname{arctg}\left(\frac{t}{2}\right) + C = \frac{1}{2}\operatorname{arctg}\left(\frac{\operatorname{tg} x}{2}\right) + C$$

**Javob:** $\frac{1}{2}\operatorname{arctg}\left(\frac{\operatorname{tg} x}{2}\right) + C$.

---

### 4-Misol: Universal trigonometrik almashtirish
Quyidagi integralni hisoblang:
$$I = \int \frac{dx}{5 + 4\cos x}$$

**Yechish:**
1. Maxrajda $\cos x$ birinchi darajada turibdi. Bu yerda darajani pasaytirish ham, surat-maxrajni bo'lish ham yordam bermaydi. Universal almashtirish $t = \operatorname{tg}\frac{x}{2}$ ni qo'llaymiz.
2. Almashtirish qoidalariga ko'ra:
   $$dx = \frac{2\,dt}{1 + t^2}, \qquad \cos x = \frac{1 - t^2}{1 + t^2}$$
3. Integralga qo'yamiz:
   $$I = \int \frac{\frac{2\,dt}{1 + t^2}}{5 + 4 \left(\frac{1 - t^2}{1 + t^2}\right)}$$
4. Maxrajni umumiy maxrajga keltiramiz:
   $$5 + 4 \left(\frac{1 - t^2}{1 + t^2}\right) = \frac{5(1 + t^2) + 4(1 - t^2)}{1 + t^2} = \frac{5 + 5t^2 + 4 - 4t^2}{1 + t^2} = \frac{9 + t^2}{1 + t^2}$$
5. Maxrajdagi $(1 + t^2)$ suratdagi $(1 + t^2)$ bilan qisqarib ketadi:
   $$I = \int \frac{2\,dt}{9 + t^2} = 2 \int \frac{dt}{t^2 + 3^2}$$
6. Jadval integrali bo'yicha integrallaymiz:
   $$I = 2 \cdot \frac{1}{3}\operatorname{arctg}\left(\frac{t}{3}\right) + C = \frac{2}{3}\operatorname{arctg}\left(\frac{t}{3}\right) + C$$
7. Dastlabki $t = \operatorname{tg}\frac{x}{2}$ ga qaytamiz:
   $$I = \frac{2}{3}\operatorname{arctg}\left(\frac{\operatorname{tg}(x/2)}{3}\right) + C$$

**Javob:** $\frac{2}{3}\operatorname{arctg}\left(\frac{\operatorname{tg}(x/2)}{3}\right) + C$.

---

## ⚠️ Talabalar Eng Ko'p Yo'l Qo'yadigan Xatolar va Tuzoqlar

1. **"Universal almashtirish fanatizmi":**
   Eng keng tarqalgan xato — $\int \frac{dx}{1 + \sin^2 x}$ yoki $\int \sin^3 x \, dx$ kabi integrallarga $t = \operatorname{tg}\frac{x}{2}$ ni qo'llash. Bu holda integral 4-darajali ko'phadlarga aylanib, yechim 2-3 betga cho'ziladi va hisoblashda adashish ehtimoli 90% ga yetadi. Agar juft daraja bo'lsa — har doim $t = \operatorname{tg} x$ ni, agar toq daraja bo'lsa — differensial ostiga kiritishni qo'llang!

2. **Daraja pasaytirishda burchakni ikki barobar oshirishni unutish:**
   $\cos^2(2x)$ ning darajasini pasaytirayotganda talabalar tez-tez $\frac{1 + \cos 2x}{2}$ deb yozib qo'yishadi. Eslab qoling: daraja pasayganda argument **har doim 2 barobar kattalashadi**:
   $$\cos^2(kx) = \frac{1 + \cos(2kx)}{2} \implies \cos^2(2x) = \frac{1 + \cos 4x}{2}$$

3. **$t = \operatorname{tg} x$ da differensial $dx$ ni unutish:**
   Surat va maxrajni $\cos^2 x$ ga bo'lganda $\frac{dx}{\cos^2 x} = dt$ bo'ladi. Lekin ba'zi talabalar $dx$ o'rniga shunchaki $dt$ qo'yib, maxrajdagi $\cos^2 x$ ni yo'qotib yuborishadi, bu mutlaqo xato javobga olib keladi.

4. **Aniq integralda universal almashtirishning uzilish nuqtasi:**
   $t = \operatorname{tg}\frac{x}{2}$ funksiyasi $x = \pi$ nuqtada aniqlanmagan ($\pm \infty$). Agar siz $\int_0^{2\pi} \frac{dx}{5 + 4\cos x}$ integralini hisoblayotgan bo'lsangiz, to'g'ridan-to'g'ri $t$ ga o'tib chegaralarni $\operatorname{tg} 0 = 0$ va $\operatorname{tg}\pi = 0$ deb qo'ysangiz, javob $0$ chiqadi (musbat funksiya integrali esa musbat bo'lishi shart!). Bunday hollarda integral simmetriyadan foydalanib $[0, \pi]$ oralig'iga keltiriladi yoki xosmas integral sifatida bo'lib olinadi.

---

## 🎯 Mustaqil Yechish Uchun Amaliy Mashqlar va Yechimlar

### 1-Mashq
Quyidagi integralni hisoblang:
$$\int \sin^5 x \, dx$$

<details>
<summary>👉 Bosqichma-bosqich yechimni ko'rish</summary>

1. Sinus darajasi toq ($5$), shuning uchun bitta $\sin x$ ni differensial ostiga kiritamiz:
   $$\sin^5 x \, dx = \sin^4 x (\sin x \, dx) = (\sin^2 x)^2 (-d(\cos x))$$
2. $\sin^2 x = 1 - \cos^2 x$ ayniyatini qo'yamiz:
   $$- \int (1 - \cos^2 x)^2 \, d(\cos x)$$
3. $t = \cos x$ deb qavsni ochamiz:
   $$- \int (1 - 2t^2 + t^4) \, dt = \int (-1 + 2t^2 - t^4) \, dt$$
4. Hadma-had integrallaymiz:
   $$-t + \frac{2t^3}{3} - \frac{t^5}{5} + C$$
5. $x$ ga qaytamiz:
   $$-\cos x + \frac{2}{3}\cos^3 x - \frac{1}{5}\cos^5 x + C$$
**Javob:** $-\cos x + \frac{2}{3}\cos^3 x - \frac{1}{5}\cos^5 x + C$.
</details>

---

### 2-Mashq
Quyidagi integralni hisoblang:
$$\int \sin(3x) \cos(5x) \, dx$$

<details>
<summary>👉 Bosqichma-bosqich yechimni ko'rish</summary>

1. Ko'paytmani yig'indiga aylantirish formulasidan foydalanamiz:
   $$\sin(\alpha x) \cos(\beta x) = \frac{1}{2}[\sin(\alpha - \beta)x + \sin(\alpha + \beta)x]$$
2. Argumentlarni qo'yamiz ($\alpha = 3, \; \beta = 5$):
   $$\sin(3x) \cos(5x) = \frac{1}{2}[\sin(-2x) + \sin(8x)] = \frac{1}{2}[\sin(8x) - \sin(2x)]$$
3. Integrallaymiz:
   $$\int \sin(3x) \cos(5x) \, dx = \frac{1}{2} \int \sin(8x) \, dx - \frac{1}{2} \int \sin(2x) \, dx$$
   $$= -\frac{1}{16}\cos(8x) + \frac{1}{4}\cos(2x) + C$$
**Javob:** $\frac{1}{4}\cos(2x) - \frac{1}{16}\cos(8x) + C$.
</details>

---

### 3-Mashq
Quyidagi integralni hisoblang:
$$\int \frac{dx}{2 + \cos x}$$

<details>
<summary>👉 Bosqichma-bosqich yechimni ko'rish</summary>

1. Universal trigonometrik almashtirish $t = \operatorname{tg}\frac{x}{2}$ ni qo'llaymiz:
   $$dx = \frac{2\,dt}{1 + t^2}, \qquad \cos x = \frac{1 - t^2}{1 + t^2}$$
2. Integralga qo'yamiz:
   $$\int \frac{\frac{2\,dt}{1 + t^2}}{2 + \frac{1 - t^2}{1 + t^2}} = \int \frac{2\,dt}{2(1 + t^2) + (1 - t^2)} = \int \frac{2\,dt}{2 + 2t^2 + 1 - t^2} = \int \frac{2\,dt}{t^2 + 3}$$
3. Jadval integrali $\int \frac{dt}{t^2 + a^2} = \frac{1}{a}\operatorname{arctg}\frac{t}{a}$ ($a = \sqrt{3}$):
   $$\frac{2}{\sqrt{3}}\operatorname{arctg}\left(\frac{t}{\sqrt{3}}\right) + C$$
4. $t$ o'rniga $\operatorname{tg}\frac{x}{2}$ ni qo'yamiz:
   $$\frac{2}{\sqrt{3}}\operatorname{arctg}\left(\frac{\operatorname{tg}(x/2)}{\sqrt{3}}\right) + C$$
**Javob:** $\frac{2}{\sqrt{3}}\operatorname{arctg}\left(\frac{\operatorname{tg}(x/2)}{\sqrt{3}}\right) + C$.
</details>

---

## 💡 Imtihon Layfhaklari va Tezkor Maslahatlar

- **5 soniyali tanlash jadvali:**
  Imtihonda integralni ko'rishingiz bilan quyidagi ketma-ketlikda tekshiring:
  1. $\sin x$ yoki $\cos x$ ning darajasi toqmi? $\implies$ Darhol bittasini $dx$ ga berib, differensial ostiga kiriting.
  2. Barcha darajalar juftmi? $\implies$ Darajani pasaytirish formulasini qo'llang.
  3. Maxrajda faqat $\sin^2 x$, $\cos^2 x$ yoki $\sin x \cos x$ bormi? $\implies$ Surat va maxrajni $\cos^2 x$ ga bo'lib, $t = \operatorname{tg} x$ qiling.
  4. Maxrajda $\sin x$ va $\cos x$ 1-darajadami? $\implies$ Universal almashtirish $t = \operatorname{tg}\frac{x}{2}$ ni ishlating.

- **$\operatorname{tg}^n x$ va $\operatorname{ctg}^n x$ larni tez integrallash:**
  $\int \operatorname{tg}^n x \, dx$ integrallarida har doim $\operatorname{tg}^2 x = \frac{1}{\cos^2 x} - 1$ formulasini ajrating:
  $$\int \operatorname{tg}^n x \, dx = \int \operatorname{tg}^{n-2} x (\operatorname{tg}^2 x) \, dx = \int \operatorname{tg}^{n-2} x \left(\frac{1}{\cos^2 x} - 1\right) dx$$
  $$= \int \operatorname{tg}^{n-2} x \, d(\operatorname{tg} x) - \int \operatorname{tg}^{n-2} x \, dx = \frac{\operatorname{tg}^{n-1} x}{n - 1} - \int \operatorname{tg}^{n-2} x \, dx$$
  Bu rekurrent formula darajani 2 taga pasaytiradi va misolni 30 soniyada yechish imkonini beradi!
