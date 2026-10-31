---
title: "Ketma-ketliklar limiti va Koshi ta'rifi (ε-δ tili)"
module: "limitlar"
order: 7
description: "Ketma-ketliklar limiti, qat'iy epsilon-N va epsilon-delta Koshi ta'riflari, Geyne ta'rifi, Veyershtrass teoremasi va oraliq qisilish teoremasi."
---

## 📌 Kirish va Geometrik/Fizik Mohiyat

Insoniyat qadimdan davriy va bosqichma-bosqich ro'y beradigan jarayonlarni kuzatgan: quyosh chiqishi va botishi, bank hisobvarag'idagi yillik foizlar to'planishi, kompyuter algoritmining iteratsiyalari yoki qadimiy Zenon paradokslari (Axill va toshbaqa). Bunday diskret qadamli hodisalarning barchasi matematikada **sonli ketma-ketliklar** orqali ifodalanadi.

Masalan, qadimgi Bobilda sonning kvadrat ildizini hisoblash uchun quyidagi rekurrent ketma-ketlikdan foydalanishgan: $\sqrt{2}$ ni topish uchun $x_1 = 1$ deb olinadi va har bir keyingi qadam $x_{n+1} = \frac{1}{2} \left( x_n + \frac{2}{x_n} \right)$ formulasi bo'yicha hisoblanadi:
- $x_1 = 1$
- $x_2 = 1.5$
- $x_3 = 1.41666...$
- $x_4 = 1.4142156...$

Ko'rib turibmizki, hadlar soni $n$ oshgan sari qiymatlar qandaydir sirli va o'zgarmas songa cheksiz yaqinlashib bormoqda. Mana shu jarayon fanda **ketma-ketlikning yaqinlashishi** yoki **limiti** deb ataladi.

Geometrik nuqtai nazardan, sonlar o'qida har bir had bitta nuqtani ifodalaydi. Ketma-ketlik $a$ soniga yaqinlashadi degani — sonlar o'qida $a$ nuqta atrofida qanchalik kichik "oraliq" (tuzoq) qo'ymang, ma'lum bir qadamdan boshlab ketma-ketlikning **barcha qolgan hadlari** aynan shu oraliq ichiga tushadi, tashqarida esa faqat sanoqli (chekli sondagi) hadlar qoladi.

XIX asrgacha matematiklar "hadlar cheksizlikda songa tenglashadi" kabi noaniq jumlalarni ishlatishgan. Ammo cheksizlik — bu son emas, balki cheksiz davom etadigan jarayondir. Shuning uchun buyuk matematik Ogyusten Lui Koshi birinchi bo'lib cheksizlik so'zini ishlatmasdan, qat'iy tengsizliklar orqali **$\varepsilon - N$ (epsilon-N)** tilini kashf etdi.

---

## 📐 Asosiy Nazariya, Qoidalar va Teoremalar

### 1. Sonli ketma-ketlik tushunchasi

> **Ta'rif:** Natural sonlar to'plami $\mathbb{N} = \{1, 2, 3, \dots\}$ da aniqlangan $f(n)$ funksiya **sonli ketma-ketlik** deb ataladi va $\{x_n\}$ yoki $x_1, x_2, \dots, x_n, \dots$ ko'rinishida belgilanadi. Bu yerda $x_n$ — ketma-ketlikning umumiy (yoki $n$-chi) hadi deyiladi.

### 2. Ketma-ketlik limitining qat'iy ta'rifi ($\varepsilon - N$ tili)

> **Ta'rif (Koshi):** Agar ixtiyoriy $\varepsilon > 0$ musbat soni uchun shunday natural $N = N(\varepsilon)$ nomer mavjud bo'lsaki, barcha $n > N$ nomerlar uchun
> 
> $$|x_n - a| < \varepsilon$$
> 
> tengsizlik bajarilsa, $a$ soni $\{x_n\}$ ketma-ketlikning **limiti** deyiladi va quyidagicha yoziladi:
> 
> $$\lim_{n \to \infty} x_n = a \quad \text{yoki} \quad x_n \to a \quad (n \to \infty)$$

**Mantiqiy ifodasi:**
$$\forall \varepsilon > 0 \quad \exists N(\varepsilon) \in \mathbb{N}: \quad \forall n > N \implies |x_n - a| < \varepsilon$$

**Geometrik izoh:**
$|x_n - a| < \varepsilon$ tengsizlik $a - \varepsilon < x_n < a + \varepsilon$ deganidir, ya'ni $x_n \in U_\varepsilon(a)$. Demak, $N$ nomerdan keyingi barcha hadlar $a$ nuqtaning $\varepsilon$-atrofiga tushadi, ushbu atrofdan tashqarida esa ko'pi bilan $N$ ta had qolishi mumkin.

### 3. Chegaralanganlik va yaqinlashuvchanlik

1. **Chegaralangan ketma-ketlik:** Agar shunday $M > 0$ soni mavjud bo'lib, barcha $n \in \mathbb{N}$ uchun $|x_n| \le M$ tengsizlik bajarilsa, $\{x_n\}$ chegaralangan ketma-ketlik deyiladi.
2. **Fundamental teorema:** Har qanday yaqinlashuvchi ketma-ketlik chegaralangandir.
   *(Eslatma: Teskari tasdiq har doim ham to'g'ri emas! Masalan, $x_n = (-1)^n$ chegaralangan, lekin limiti mavjud emas).*

### 4. Monoton ketma-ketliklar va Veyershtrass teoremasi

Agar barcha $n$ lar uchun $x_{n+1} \ge x_n$ bo'lsa — o'suvchi, $x_{n+1} \le x_n$ bo'lsa — kamayuvchi ketma-ketlik deyiladi.

> **Veyershtrass teoremasi:**
> Har qanday yuqoridan chegaralangan o'suvchi (yoki quyidan chegaralangan kamayuvchi) ketma-ketlik chekli limitga ega.

Bu teorema matematik analizdagi eng muhim sonlardan biri bo'lgan $e$ sonini (Eyler soni) kiritishda hal qiluvchi rol o'ynaydi:
$$x_n = \left( 1 + \frac{1}{n} \right)^n$$
ketma-ketlik o'suvchi va yuqoridan $3$ bilan chegaralangan, demak uning chekli limiti mavjud va u $\lim_{n \to \infty} \left( 1 + \frac{1}{n} \right)^n = e \approx 2.71828...$ ga teng.

### 5. Oraliq qisilish teoremasi ("Ikki militsioner haqida teorema")

> **Teorema:** Agar barcha $n$ nomerlar uchun (yoki biror nomerdan boshlab)
> 
> $$y_n \le x_n \le z_n$$
> 
> tengsizlik bajarilsa va $\lim_{n \to \infty} y_n = \lim_{n \to \infty} z_n = a$ bo'lsa, u holda o'rtadagi ketma-ketlik ham yaqinlashadi va:
> 
> $$\lim_{n \to \infty} x_n = a$$

### 6. Yaqinlashishning Koshi mezoni (Ichki mezon)

Ba'zan ketma-ketlikning limiti qanday songa teng ekanini oldindan bilmaymiz. Bunday holda limitning mavjudligini qanday aniqlash mumkin?

> **Koshi mezoni:** $\{x_n\}$ ketma-ketlik chekli limitga ega bo'lishi uchun quyidagi shartning bajarilishi zarur va yetarlidir:
> ixtiyoriy $\varepsilon > 0$ uchun shunday $N \in \mathbb{N}$ nomer topilsaki, barcha $n > N$ va $m > N$ nomerlar uchun
> 
> $$|x_n - x_m| < \varepsilon$$
> 
> tengsizlik bajarilishi shart.

---

## 📝 Qadamma-qadam Yechilgan Universitet Misollari

### 1-misol: Koshi ta'rifi ($\varepsilon - N$) orqali limitni isbotlash va $N(\varepsilon)$ ni topish

**Shart:** Limit ta'rifidan foydalanib, $\lim_{n \to \infty} \frac{3n + 1}{2n + 5} = \frac{3}{2}$ ekanligini isbotlang. $\varepsilon = 0.01$ qiymat uchun mos $N$ nomerni toping.

**Yechish:**
1. Ixtiyoriy $\varepsilon > 0$ sonini olaylik. Biz shunday $N \in \mathbb{N}$ topishimiz kerakki, barcha $n > N$ larda quyidagi tengsizlik bajarilsin:
   $$\left| \frac{3n + 1}{2n + 5} - \frac{3}{2} \right| < \varepsilon$$

2. Kasrlar ayirmasini umumiy maxrajga keltirib soddalashtiramiz:
   $$\frac{2(3n + 1) - 3(2n + 5)}{2(2n + 5)} = \frac{6n + 2 - 6n - 15}{4n + 10} = \frac{-13}{4n + 10}$$

3. Modulni ochamiz ($n \in \mathbb{N}$ bo'lgani uchun mahraj har doim musbat):
   $$\left| \frac{-13}{4n + 10} \right| = \frac{13}{4n + 10}$$

4. Endi tengsizlikni yechamiz:
   $$\frac{13}{4n + 10} < \varepsilon \iff 4n + 10 > \frac{13}{\varepsilon} \iff 4n > \frac{13}{\varepsilon} - 10 \iff n > \frac{13 - 10\varepsilon}{4\varepsilon}$$

5. Demak, agar biz nomerni quyidagicha tanlasak:
   $$N(\varepsilon) = \left\lfloor \frac{13 - 10\varepsilon}{4\varepsilon} \right\rfloor$$
   (bu yerda $\lfloor \cdot \rfloor$ — sonning butun qismi), barcha $n > N$ nomerlar uchun berilgan tengsizlik kafolatli bajariladi. Isbot yakunlandi.

6. **Xususiy hol:** Agar $\varepsilon = 0.01 = \frac{1}{100}$ bo'lsa:
   $$n > \frac{13 - 10 \cdot 0.01}{4 \cdot 0.01} = \frac{13 - 0.1}{0.04} = \frac{12.9}{0.04} = 322.5$$
   Demak, $N = 322$. Ya'ni 323-hadidan boshlab barcha hadlar $\frac{3}{2}$ dan $0.01$ dan kichik masofada joylashadi!

---

### 2-misol: "Ikki militsioner" (oraliq qisilish) teoremasini qo'llash

**Shart:** Ushbu yig'indining limitini hisoblang:
$$\lim_{n \to \infty} \left( \frac{1}{\sqrt{n^2 + 1}} + \frac{1}{\sqrt{n^2 + 2}} + \dots + \frac{1}{\sqrt{n^2 + n}} \right)$$

**Yechish:**
1. Yig'indidagi hadlar soni $n$ ta bo'lib, u $n \to \infty$ da cheksiz oshib bormoqda. Shuning uchun hadma-had limitga o'tish qat'iyan man etiladi!
2. Yig'indidagi har bir hadni baholaymiz. Maxrajlarga e'tibor bering:
   $$\sqrt{n^2 + 1} < \sqrt{n^2 + 2} < \dots < \sqrt{n^2 + n}$$
   Maxraj qancha katta bo'lsa, kasr shuncha kichik bo'ladi. Demak:
   - Eng katta had: $\frac{1}{\sqrt{n^2 + 1}}$
   - Eng kichik had: $\frac{1}{\sqrt{n^2 + n}}$

3. Yig'indini yuqoridan va quyidan chegaralaymiz:
   - **Quyi baho ($y_n$):** barcha $n$ ta qo'shiluvchini eng kichik had bilan almashtiramiz:
     $$y_n = \underbrace{\frac{1}{\sqrt{n^2 + n}} + \dots + \frac{1}{\sqrt{n^2 + n}}}_{n \text{ ta}} = \frac{n}{\sqrt{n^2 + n}}$$
   - **Yuqori baho ($z_n$):** barcha $n$ ta qo'shiluvchini eng katta had bilan almashtiramiz:
     $$z_n = \underbrace{\frac{1}{\sqrt{n^2 + 1}} + \dots + \frac{1}{\sqrt{n^2 + 1}}}_{n \text{ ta}} = \frac{n}{\sqrt{n^2 + 1}}$$

4. Shunday qilib, $y_n \le x_n \le z_n$ tengsizlikka egamiz. Endi chekka ketma-ketliklarning limitini hisoblaymiz:
   $$\lim_{n \to \infty} y_n = \lim_{n \to \infty} \frac{n}{\sqrt{n^2(1 + \frac{1}{n})}} = \lim_{n \to \infty} \frac{n}{n\sqrt{1 + \frac{1}{n}}} = \lim_{n \to \infty} \frac{1}{\sqrt{1 + \frac{1}{n}}} = 1$$
   $$\lim_{n \to \infty} z_n = \lim_{n \to \infty} \frac{n}{\sqrt{n^2(1 + \frac{1}{n^2})}} = \lim_{n \to \infty} \frac{n}{n\sqrt{1 + \frac{1}{n^2}}} = \lim_{n \to \infty} \frac{1}{\sqrt{1 + \frac{1}{n^2}}} = 1$$

5. Har ikkala chekka ketma-ketlik $1$ ga intilgani sababli, oraliq qisilish teoremasiga ko'ra:
   $$\lim_{n \to \infty} x_n = 1$$

**Javob:** $1$

---

### 3-misol: Veyershtrass teoremasi yordamida rekurrent ketma-ketlikni tekshirish

**Shart:** Ketma-ketlik $x_1 = \sqrt{2}$, $x_{n+1} = \sqrt{2 + x_n}$ rekurrent munosabat bilan berilgan. Uning yaqinlashuvchi ekanligini isbotlang va limitini toping.

**Yechish:**

1. **Matematik induksiya usuli bilan yuqoridan chegaralanganligini ($x_n < 2$) isbotlaymiz:**
   - $n = 1$ da: $x_1 = \sqrt{2} \approx 1.414 < 2$ (to'g'ri).
   - Faraz qilaylik, $n = k$ uchun $x_k < 2$ o'rinli bo'lsin.
   - $n = k + 1$ uchun tekshiramiz: $x_{k+1} = \sqrt{2 + x_k} < \sqrt{2 + 2} = \sqrt{4} = 2$.
   - Demak, barcha $n \in \mathbb{N}$ uchun $x_n < 2$, ya'ni ketma-ketlik yuqoridan $2$ bilan chegaralangan.

2. **Monoton o'suvchi ekanligini ($x_{n+1} > x_n$) isbotlaymiz:**
   - Ayirmani yoki nisbatni qaraymiz:
     $$x_{n+1}^2 - x_n^2 = (2 + x_n) - x_n^2 = -(x_n^2 - x_n - 2) = -(x_n - 2)(x_n + 1) = (2 - x_n)(x_n + 1)$$
   - Biz yuqorida $x_n < 2$ va ravshanki $x_n > 0$ ekanini ko'rsatdik. Demak, $(2 - x_n) > 0$ va $(x_n + 1) > 0$.
   - Ularning ko'paytmasi musbat: $x_{n+1}^2 - x_n^2 > 0 \implies x_{n+1} > x_n$. Ketma-ketlik qat'iy o'suvchi!

3. **Veyershtrass teoremasini qo'llash:**
   Ketma-ketlik o'suvchi va yuqoridan chegaralangan, binobarin, uning chekli $\lim_{n \to \infty} x_n = L$ limiti mavjud.

4. **Limit qiymatini topish:**
   Rekurrent tenglikning ikkala qismida ham $n \to \infty$ da limitga o'tamiz:
   $$\lim_{n \to \infty} x_{n+1} = \lim_{n \to \infty} \sqrt{2 + x_n} \implies L = \sqrt{2 + L}$$
   Ikkala tomonni kvadratga ko'taramiz:
   $$L^2 = 2 + L \iff L^2 - L - 2 = 0 \iff (L - 2)(L + 1) = 0$$
   Ildizlar: $L_1 = 2$, $L_2 = -1$.
   Hadlar musbat bo'lgani sababli $L > 0$, demak $L = 2$.

**Javob:** Ketma-ketlik yaqinlashuvchi va uning limiti $2$ ga teng.

---

### 4-misol: O'sish tezliklari ierarxiyasi va $\lim_{n \to \infty} \frac{a^n}{n!}$

**Shart:** Ixtiyoriy $a > 0$ uchun $\lim_{n \to \infty} \frac{a^n}{n!} = 0$ ekanini isbotlang.

**Yechish:**
1. Ketma-ketlikning umumiy hadi $x_n = \frac{a^n}{n!}$.
2. Ketma-ketlikning qo'shni hadlari nisbatini qaraymiz:
   $$\frac{x_{n+1}}{x_n} = \frac{a^{n+1}}{(n + 1)!} \cdot \frac{n!}{a^n} = \frac{a^{n+1}}{a^n} \cdot \frac{n!}{(n + 1)n!} = \frac{a}{n + 1}$$
3. $a$ o'zgarmas son bo'lgani sababli, $n \to \infty$ da:
   $$\lim_{n \to \infty} \frac{x_{n+1}}{x_n} = \lim_{n \to \infty} \frac{a}{n + 1} = 0$$
4. Chegaraviy nisbat $0 < 1$ bo'lgani uchun, biror $n_0$ nomerdan boshlab (masalan, $n+1 > 2a$ bo'lganda) har bir keyingi had avvalgisidan kamida 2 barobar kichik bo'ladi:
   $$x_{n+1} < \frac{1}{2} x_n$$
5. Bundan kelib chiqadiki, $x_n < C \cdot \left( \frac{1}{2} \right)^n \to 0$.
   Demak, faktorial ($n!$) ixtiyoriy ko'rsatkichli funksiya ($a^n$) dan beqiyos darajada tez o'sadi va limit nolga teng. $\blacksquare$

---

## ⚠️ Talabalar Eng Ko'p Yo'l Qo'yadigan Xatolar va Tuzoqlar

1. **Chegaralanganlikni ko'rib darhol "yaqinlashadi" deb o'ylash:**
   Talabalar ko'pincha $x_n = \sin(n)$ yoki $x_n = (-1)^n$ ketma-ketliklarini chegaralangan bo'lgani uchun "limiti bor" deb yanglishishadi. Esda tuting: chegaralanganlik limit mavjudligi uchun **yetarli emas**, faqat **zaruriy** shartdir! Yaqinlashish uchun unga albatta **monotonlik** qo'shilishi kerak (Veyershtrass teoremasi).

2. **Qo'shiluvchilar soni $n$ ga bog'liq bo'lganda hadma-had limitga o'tish:**
   Masalan, $S_n = \frac{1}{n} + \frac{1}{n} + \dots + \frac{1}{n}$ ($n$ ta had). Har bir had nolga intiladi: $\lim \frac{1}{n} = 0$. Agar hadma-had o'tilsa, $0 + 0 + \dots + 0 = 0$ degan xato chiqadi. Holbuki $S_n = n \cdot \frac{1}{n} = 1$. Bunday misollarda faqat oraliq qisilish teoremasi yoki integral yig'indilardan foydalanish shart!

3. **$N(\varepsilon)$ nomerni topishda tengsizlik ishorasini almashtirishni unutish:**
   Maxrajda manfiy songa bo'lganda yoki kasrni to'ntarganda tengsizlik ishorasi teskarisiga o'zgarishini e'tibordan qochirish ko'p uchraydi.

4. **Koshi ta'rifida bitta $\varepsilon$ bilan cheklanib qolish:**
   Isbot paytida faqat $\varepsilon = 0.1$ yoki $0.01$ uchun $N$ ni hisoblab ko'rsatish isbot hisoblanmaydi! Formulani **ixtiyoriy umumiy $\varepsilon > 0$** parametri uchun keltirib chiqarish shart.

---

## 🎯 Mustaqil Yechish Uchun Amaliy Mashqlar va Yechimlar

### 1-mashq
Koshi ta'rifidan foydalanib, $\lim_{n \to \infty} \frac{2n - 1}{n + 3} = 2$ ekanligini isbotlang va $\varepsilon = 0.05$ uchun eng kichik natural $N$ nomerni aniqlang.

<details>
<summary>Yechimni ko'rish</summary>

**Bosqichma-bosqich yechim:**
1. Modul ayirmasini tuzamiz:
   $$\left| \frac{2n - 1}{n + 3} - 2 \right| = \left| \frac{2n - 1 - 2n - 6}{n + 3} \right| = \left| \frac{-7}{n + 3} \right| = \frac{7}{n + 3}$$
2. Ushbu ifodani $\varepsilon$ dan kichik qilamiz:
   $$\frac{7}{n + 3} < \varepsilon \iff n + 3 > \frac{7}{\varepsilon} \iff n > \frac{7}{\varepsilon} - 3$$
3. $\varepsilon = 0.05 = \frac{1}{20}$ qiymatni qo'yamiz:
   $$n > \frac{7}{0.05} - 3 = 7 \cdot 20 - 3 = 140 - 3 = 137$$
4. Demak, $N = 137$. 138-haddan boshlab barcha hadlar $2$ sonidan $0.05$ dan kamroq masofada joylashadi.
</details>

---

### 2-mashq
Oraliq qisilish teoremasidan foydalanib, quyidagi limitni hisoblang:
$$\lim_{n \to \infty} \frac{n \cdot \sin(n!)}{n^2 + 1}$$

<details>
<summary>Yechimni ko'rish</summary>

**Bosqichma-bosqich yechim:**
1. Sinus funksiyasining chegaralanganligini bilamiz: har qanday argument uchun $-1 \le \sin(n!) \le 1$.
2. Har bir tomonni $\frac{n}{n^2 + 1} > 0$ ifodaga ko'paytiramiz:
   $$-\frac{n}{n^2 + 1} \le \frac{n \sin(n!)}{n^2 + 1} \le \frac{n}{n^2 + 1}$$
3. Chekka ketma-ketliklarning limitini topamiz:
   $$\lim_{n \to \infty} \frac{n}{n^2 + 1} = \lim_{n \to \infty} \frac{1/n}{1 + 1/n^2} = \frac{0}{1} = 0$$
   $$\lim_{n \to \infty} \left( -\frac{n}{n^2 + 1} \right) = -0 = 0$$
4. Ikkala tomon ham $0$ ga intilgani sababli, oraliq qisilish teoremasiga binoan:
   $$\lim_{n \to \infty} \frac{n \cdot \sin(n!)}{n^2 + 1} = 0$$

**Javob:** $0$
</details>

---

### 3-mashq
Rekurrent ketma-ketlik $x_1 = 3$ va $x_{n+1} = \frac{1}{2}\left(x_n + \frac{5}{x_n}\right)$ qonuniyati bilan berilgan. Uning yaqinlashuvchanligini isbotlang va limitini toping.

<details>
<summary>Yechimni ko'rish</summary>

**Bosqichma-bosqich yechim:**
1. **Quyi chegara:** Koshi tengsizligiga ($a + b \ge 2\sqrt{ab}$) ko'ra:
   $$x_{n+1} = \frac{1}{2}\left(x_n + \frac{5}{x_n}\right) \ge \sqrt{x_n \cdot \frac{5}{x_n}} = \sqrt{5}$$
   Demak, $n \ge 2$ uchun ketma-ketlik quyidan $\sqrt{5}$ bilan chegaralangan ($x_n \ge \sqrt{5}$).

2. **Monoton kamayuvchilik:**
   $$x_{n+1} - x_n = \frac{1}{2}\left( \frac{5}{x_n} - x_n \right) = \frac{5 - x_n^2}{2x_n}$$
   Chunki $x_n \ge \sqrt{5}$, demak $x_n^2 \ge 5$, ya'ni $5 - x_n^2 \le 0$. Demak, $x_{n+1} \le x_n$. Ketma-ketlik monoton kamayuvchi.

3. **Limitni topish:** Veyershtrass teoremasiga ko'ra chekli limit $\lim x_n = L > 0$ mavjud:
   $$L = \frac{1}{2}\left(L + \frac{5}{L}\right) \implies 2L = L + \frac{5}{L} \implies L = \frac{5}{L} \implies L^2 = 5 \implies L = \sqrt{5}$$

**Javob:** $\sqrt{5}$
</details>

---

## 💡 Imtihon Layfhaklari va Tezkor Maslahatlar

1. **Cheksizlikda o'sish tezligi ierarxiyasi (Oltin Narvon):**
   Ketma-ketliklar limitini yechishda quyidagi ierarxiyani yodda tuting (chapdan o'ngga qarab o'sish tezligi keskin oshadi):
   $$\ln n \ll \sqrt[k]{n} \ll n \ll n^2 \ll n^k \ll a^n \ll n! \ll n^n \quad (a > 1)$$
   Agar kasrning mahrajidagi funksiya suratdagidan o'ngroqda tursa — limit darhol **$0$** bo'ladi! Masalan:
   $$\lim_{n \to \infty} \frac{n^{100} + 2^n}{n!} = 0$$

2. **Ko'phadlar nisbatida bosh hadlar qoidasi:**
   Agar surat va mahraj $n$ ga nisbatan ko'phad bo'lsa, faqat eng yuqori darajali hadlarni qoldiring:
   $$\lim_{n \to \infty} \frac{5n^3 - 2n + 7}{2n^3 + 100n^2} = \lim_{n \to \infty} \frac{5n^3}{2n^3} = \frac{5}{2}$$

3. **Rekurrent formulalar yechimini oldindan bilish:**
   Imtihon paytida rekurrent munosabat berilsa, isbotni yozishdan oldin qoralamada darhol $x_n$ va $x_{n+1}$ o'rniga $L$ qo'yib, algebraik tenglamani yechib oling. Shunda siz maqsadli limit qiymatini oldindan bilib, isbotni unga qarab yo'naltirasiz!
