---
title: "Cheksiz ko'paytmalar, yaqinlashish shartlari va Vallis formulasi"
description: "Cheksiz ko'paytma tushunchasi, qatorlar bilan bog'liqlik, sin(x) ning cheksiz ko'paytmaga yoyilmasi va pi soni formulalari."
module: "qatorlar"
order: 15
---

## 📌 Kirish va Fizik/Texnik Mohiyati

Matematik analizda cheksiz jarayonlar ko'pincha cheksiz hadlar yig'indisi — qatorlar orqali o'rganiladi. Biroq ko'plab fundamental tabiiy va matematik qonuniyatlar multiplikativ (ko'paytuvchi) xarakterga ega. Masalan, ehtimollar nazariyasida ketma-ket sodir bo'luvchi bog'liq bo'lmagan hodisalarning birgalikdagi ehtimolligi ehtimolliklar ko'paytmasiga teng; sonlar nazariyasida Riman dzeta-funksiyasi barcha tub sonlar bo'yicha cheksiz ko'paytma (Eyler ko'paytmasi) orqali ifodalanadi.

XVIII asrda Leonard Eyler ko'phadlarning ildizlari orqali ko'paytuvchilarga ajralish xossasini transsendent funksiyalarga tatbiq etib, $\sin x$ funksiyasining cheksiz ko'paytmaga yoyilmasini kashf qildi. Bu kashfiyot matematiklarni 90 yil davomida qiynagan mashhur **Bazel muammosini** ($\sum_{n=1}^\infty \frac{1}{n^2} = \frac{\pi^2}{6}$) hal qilishga va Jon Vallisning $\pi$ sonini ifodalovchi mashhur cheksiz ko'paytmasini chuqur tushunishga yo'l ochib berdi.

---

## 📐 Asosiy Nazariya, Qoidalar va Teoremalar

### 1. Cheksiz ko'paytma ta'rifi va yaqinlashishi

Quyidagi cheksiz ko'paytmani qaraymiz:
$$\prod_{n=1}^{\infty} p_n = p_1 \cdot p_2 \cdot p_3 \cdots p_n \cdots$$

Dastlabki $N$ ta had ko'paytmasi **xususiy ko'paytma** deyiladi:
$$P_N = \prod_{n=1}^{N} p_n = p_1 \cdot p_2 \cdots p_N$$

> **Ta'rif:**
> Agar $N \to \infty$ da $P_N$ xususiy ko'paytmalar ketma-ketligi **chekli va noldan farqli** $P$ limitga ega bo'lsa ($\lim_{N \to \infty} P_N = P \neq 0$), cheksiz ko'paytma **yaqinlashuvchi** deyiladi va $P = \prod_{n=1}^\infty p_n$ deb yoziladi.
> Agar limit mavjud bo'lmasa yoki nolga teng bo'lsa (hadlar orasida nol bo'lmagan holda), ko'paytma **uzoqlashuvchi** deyiladi.

*Nima uchun limit nol bo'lmasligi kerak?*
Chunki agar $P = 0$ ga yaqinlashish deb ruxsat berilsa, ixtiyoriy $p_1 = 0$ bo'lgan yoki cheksiz kamayuvchi ko'paytma mazmunsiz holga kelib qoladi. Logarifmlaganda $\ln P = \ln 0 = -\infty$ bo'lib, qator uzoqlashadi.

---

### 2. Yaqinlashishning zaruriy va yetarli shartlari

> **Zaruriy shart:**
> Cheksiz ko'paytma yaqinlashishi uchun uning umumiy hadi $1$ ga intilishi shart:
> $$\lim_{n \to \infty} p_n = 1 $$

Shu sababli cheksiz ko'paytmaning hadlari doimo $p_n = 1 + a_n$ ko'rinishida yoziladi, bu yerda $a_n \to 0$:
$$\prod_{n=1}^{\infty} (1 + a_n)$$

> **Qatorlar bilan bog'liqlik teoremasi:**
> Agar bir xil ishorali $a_n > -1$ sonlar ketma-ketligi uchun:
> 1. Barcha $a_n \ge 0$ bo'lsa, $\prod_{n=1}^\infty (1 + a_n)$ ko'paytmaning yaqinlashishi $\sum_{n=1}^\infty a_n$ sonli qatorning yaqinlashishiga teng kuchlidir.
> 2. Barcha $a_n \le 0$ bo'lsa, $\prod_{n=1}^\infty (1 + a_n)$ ko'paytmaning yaqinlashishi $\sum_{n=1}^\infty (-a_n)$ qatorning yaqinlashishiga teng kuchlidir.
> 3. **Absolyut yaqinlashish:** $\prod_{n=1}^\infty (1 + a_n)$ ko'paytmaning absolyut yaqinlashishi uchun $\sum_{n=1}^\infty |a_n| < \infty$ bo'lishi zarur va yetarlidir.

---

### 3. Eylerning cheksiz ko'paytmalari va Vallis formulasi

$\sin x$ funksiyasi $x = 0, \pm \pi, \pm 2\pi, \pm 3\pi, \dots$ nuqtalarda nolga aylanadi. Eyler ushbu nollarni ko'phad ildizlari kabi faktorizatsiya qildi:

> **Eyler teoremasi ($\sin x$ ning ko'paytmaga yoyilmasi):**
> Har qanday kompleks va haqiqiy $x$ uchun:
> $$\sin x = x \prod_{n=1}^{\infty} \left( 1 - \frac{x^2}{n^2 \pi^2} \right) = x \left(1 - \frac{x^2}{\pi^2}\right)\left(1 - \frac{x^2}{4\pi^2}\right)\left(1 - \frac{x^2}{9\pi^2}\right)\cdots $$

Xuddi shuningdek, $\cos x$ funksiyasining nollari $x = \pm \frac{\pi}{2}, \pm \frac{3\pi}{2}, \dots$ bo'lganligi sababli:
$$\cos x = \prod_{n=1}^{\infty} \left( 1 - \frac{4x^2}{(2n - 1)^2 \pi^2} \right) = \left(1 - \frac{4x^2}{\pi^2}\right)\left(1 - \frac{4x^2}{9\pi^2}\right)\cdots$$

> **Jon Vallis formulasi (1655):**
> Eyler formulasida $x = \frac{\pi}{2}$ deb olsak, $\sin(\pi/2) = 1$ bo'ladi:
> $$ 1 = \frac{\pi}{2} \prod_{n=1}^{\infty} \left( 1 - \frac{1}{4n^2} \right) = \frac{\pi}{2} \prod_{n=1}^{\infty} \frac{4n^2 - 1}{4n^2}$$
> Bundan $\frac{\pi}{2}$ soni uchun mashhur cheksiz ko'paytma kelib chiqadi:
> $$\frac{\pi}{2} = \prod_{n=1}^{\infty} \frac{4n^2}{4n^2 - 1} = \frac{2}{1} \cdot \frac{2}{3} \cdot \frac{4}{3} \cdot \frac{4}{5} \cdot \frac{6}{5} \cdot \frac{6}{7} \cdots $$

---

## 📝 Qadamma-qadam Yechilgan Amaliy Misollar

### 1-misol: Teleskopik cheksiz ko'paytmaning qiymatini topish
$$P = \prod_{n=2}^{\infty} \left( 1 - \frac{1}{n^2} \right)$$

**Yechish:**
1. Umumiy hadni ko'paytuvchilarga ajratamiz:
   $$1 - \frac{1}{n^2} = \frac{n^2 - 1}{n^2} = \frac{(n - 1)(n + 1)}{n \cdot n}$$
2. Dastlabki $N$ ta hadning xususiy ko'paytmasini yozamiz:
   $$P_N = \left(\frac{1 \cdot 3}{2 \cdot 2}\right) \cdot \left(\frac{2 \cdot 4}{3 \cdot 3}\right) \cdot \left(\frac{3 \cdot 5}{4 \cdot 4}\right) \cdots \left(\frac{(N - 1)(N + 1)}{N \cdot N}\right)$$
3. Yonma-yon turgan kasrlarning qisqarishini kuzatamiz:
   - Birinchi qavsdagi $\frac{3}{2}$ ikkinchi qavsdagi $\frac{2}{3}$ bilan qisqaradi;
   - Ikkinchi qavsdagi $\frac{4}{3}$ uchinchi qavsdagi $\frac{3}{4}$ bilan qisqaradi;
   - Qisqarmay qolgan hadlar faqat eng boshidagi $\frac{1}{2}$ va eng oxiridagi $\frac{N + 1}{N}$ bo'ladi:
   $$P_N = \frac{1}{2} \cdot \frac{N + 1}{N}$$
4. Limitga o'tamiz:
   $$P = \lim_{N \to \infty} P_N = \lim_{N \to \infty} \left( \frac{1}{2} \cdot \frac{N + 1}{N} \right) = \frac{1}{2} \cdot 1 = \frac{1}{2}$$

**Javob:** Ko'paytma yaqinlashadi va uning qiymati $\frac{1}{2}$ ga teng.

---

### 2-misol: Ko'paytmalarning yaqinlashishini tekshirish
Quyidagi ikkita ko'paytmani yaqinlashishga tekshiring:
$$A = \prod_{n=1}^{\infty} \left( 1 + \frac{1}{n} \right), \qquad B = \prod_{n=2}^{\infty} \left( 1 - \frac{1}{n} \right)$$

**Yechish:**
1. **$A$ ko'paytma:**
   $$a_n = \frac{1}{n} > 0$$
   Qatorlar bilan bog'liqlik teoremasiga ko'ra, $\prod (1 + a_n)$ ning yaqinlashishi $\sum_{n=1}^\infty \frac{1}{n}$ ning yaqinlashishiga teng kuchli.
   Garmonik qator $\sum_{n=1}^\infty \frac{1}{n} = \infty$ uzoqlashuvchi bo'lgani sababli, $A$ ko'paytma cheksizlikka uzoqlashadi.
   Haqiqatan ham: $P_N = \frac{2}{1} \cdot \frac{3}{2} \cdot \frac{4}{3} \cdots \frac{N + 1}{N} = N + 1 \to \infty$.

2. **$B$ ko'paytma:**
   $$P_N = \left(1 - \frac{1}{2}\right)\left(1 - \frac{1}{3}\right)\cdots\left(1 - \frac{1}{N}\right) = \frac{1}{2} \cdot \frac{2}{3} \cdot \frac{3}{4} \cdots \frac{N - 1}{N} = \frac{1}{N}$$
   Limitni olsak:
   $$\lim_{N \to \infty} P_N = \lim_{N \to \infty} \frac{1}{N} = 0$$
   Ta'rifga ko'ra, agar hadlar nolga teng bo'lmagani holda xususiy ko'paytmalar limiti 0 ga teng bo'lsa, bu ko'paytma nolga **uzoqlashuvchi** hisoblanadi.

**Javob:** Ikkala cheksiz ko'paytma ham uzoqlashuvchidir.

---

### 3-misol: Bazel muammosini Eyler ko'paytmasi yordamida yechish
Eyler formulasi yordamida $\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}$ tenglikni isbotlang.

**Yechish:**
1. $\sin x$ ning Teylor qatorini yozamiz:
   $$\sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \dots = x - \frac{x^3}{6} + \frac{x^5}{120} - \dots$$
2. Eylerning cheksiz ko'paytmasini qaraymiz:
   $$\sin x = x \prod_{n=1}^{\infty} \left( 1 - \frac{x^2}{n^2 \pi^2} \right) = x \left( 1 - \frac{x^2}{\pi^2} \right)\left( 1 - \frac{x^2}{4\pi^2} \right)\left( 1 - \frac{x^2}{9\pi^2} \right)\cdots$$
3. Qavslarni ochganda $x^3$ oldidagi koeffitsiyentni yig'amiz:
   $$x \cdot \left[ -\frac{x^2}{\pi^2} - \frac{x^2}{4\pi^2} - \frac{x^2}{9\pi^2} - \dots \right] = -\frac{x^3}{\pi^2} \sum_{n=1}^{\infty} \frac{1}{n^2}$$
4. Teylor qatoridagi $x^3$ koeffitsiyenti $-\frac{1}{6}$ ga teng. Ikkala ko'rinishdagi $x^3$ koeffitsiyentlarini o'zaro tenglashtiramiz:
   $$-\frac{1}{\pi^2} \sum_{n=1}^{\infty} \frac{1}{n^2} = -\frac{1}{6}$$
5. Har ikki tomonni $-\pi^2$ ga ko'paytiramiz:
   $$\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}$$

**Javob:** Isbotlandi: $\sum_{n=1}^\infty \frac{1}{n^2} = \frac{\pi^2}{6}$.

---

### 4-misol: Kubik teleskopik ko'paytma
$$P = \prod_{n=2}^{\infty} \frac{n^3 - 1}{n^3 + 1}$$

**Yechish:**
1. Kublar ayirmasi va yig'indisi formulalarini qo'llaymiz:
   $$n^3 - 1 = (n - 1)(n^2 + n + 1)$$
   $$n^3 + 1 = (n + 1)(n^2 - n + 1)$$
2. Ahamiyat bering: agar $k = n + 1$ bo'lsa:
   $$(k - 1)^2 - (k - 1) + 1 = n^2 - n + 1$$
   $$n^2 + n + 1 = (n + 1)^2 - (n + 1) + 1$$
   Demak, kvadratik uchhadlar bir qadam siljish bilan bir-birini qisqartiradi!
3. Xususiy ko'paytmani ikkita alohida ko'paytmaga ajratamiz:
   $$P_N = \underbrace{\prod_{n=2}^{N} \frac{n - 1}{n + 1}}_{A_N} \cdot \underbrace{\prod_{n=2}^{N} \frac{n^2 + n + 1}{n^2 - n + 1}}_{B_N}$$
4. Birinchi qism:
   $$A_N = \left(\frac{1}{3} \cdot \frac{2}{4} \cdot \frac{3}{5} \cdots \frac{N - 2}{N} \cdot \frac{N - 1}{N + 1}\right) = \frac{1 \cdot 2}{N(N + 1)} = \frac{2}{N(N + 1)}$$
5. Ikkinchi qism:
   $n^2 - n + 1$ ning $n=2$ dagi qiymati $2^2 - 2 + 1 = 3$.
   Barcha oraliq hadlar qisqarib, oxirgi hadning surati qoladi:
   $$B_N = \frac{N^2 + N + 1}{3}$$
6. Ko'paytiramiz va limitni hisoblaymiz:
   $$P_N = A_N \cdot B_N = \frac{2(N^2 + N + 1)}{3 N(N + 1)}$$
   $$\lim_{N \to \infty} P_N = \lim_{N \to \infty} \frac{2(N^2 + N + 1)}{3(N^2 + N)} = \frac{2}{3}$$

**Javob:** $\frac{2}{3}$.

---

## ⚠️ Talabalar Ko'p Yo'l Qo'yadigan Xatolar

1. **Limitning nolga teng bo'lishini yaqinlashish deb hisoblash:**
   Agar $\lim P_N = 0$ bo'lsa (barcha hadlar noldan farqli bo'lgan holda), ko'paytma yaqinlashuvchi emas, balki **nolga uzoqlashuvchi** hisoblanadi.
2. **$\lim a_n = 0$ shartini yetarli deb o'ylash:**
   Qatorlarda bo'lgani kabi, $\lim a_n = 0$ (ya'ni $\lim p_n = 1$) faqat **zaruriy shartdir**. Masalan, $\prod (1 + \frac{1}{n})$ da $a_n = \frac{1}{n} \to 0$, ammo ko'paytma cheksizlikka uzoqlashadi.
3. **Absolyut yaqinlashish bilan oddiy yaqinlashish farqi:**
   Agar hadlarning ishorasi almashinuvchi bo'lsa, $\prod (1 + a_n)$ ning yaqinlashishi uchun $\sum a_n$ ning shartli yaqinlashishi kifoya qilmaydi; qo'shimcha ravishda $\sum a_n^2$ qator ham yaqinlashishi shart!

---

## 🎯 Mustaqil Yechish Uchun Masalalar

1. Teleskopik ko'paytmani hisoblang:
   $$\prod_{n=1}^{\infty} \left( 1 + \frac{1}{n(n + 2)} \right)$$
   *Javob:* 2.

2. Ko'paytmani yaqinlashishga tekshiring:
   $$\prod_{n=1}^{\infty} \left( 1 + \frac{1}{n^2} \right)$$
   *Javob:* Yaqinlashadi (chunki $\sum \frac{1}{n^2}$ yaqinlashuvchi), qiymati $\frac{\sinh \pi}{\pi}$.

3. Eylerning kosinus formulasi bo'yicha hisoblang:
   $$\prod_{n=1}^{\infty} \left( 1 - \frac{1}{(2n - 1)^2} \right)$$
   *Javob:* $\cos(\pi/2) = 0$ bo'lgani sababli, nolga uzoqlashadi.

4. Vallis formulasi orqali quyidagi ko'paytmani toping:
   $$\lim_{n \to \infty} \frac{(2n)!!}{(2n - 1)!! \sqrt{n}}$$
   *Javob:* $\sqrt{\pi}$.

---

## 💡 Xulosa va Imtihon Maslahatlari

- Cheksiz ko'paytma berilganda birinchi navbatda umumiy hadning $1$ ga intilishini tekshiring ($\lim p_n = 1$). Agar 1 ga intilmasa — darhol "uzoqlashuvchi" xulosasini bering.
- Agar umumiy had ratsional kasr bo'lsa, $P_N$ ning dastlabki 3-4 ta hadini ochiq yozib chiqing — aksariyat imtihon masalalarida ular ajoyib tarzda teleskopik qisqaradi.
- $\sin x$ va $\cos x$ ning Eyler ko'paytmalarini yodda saqlash — murakkab sonli qatorlar yig'indisini $\pi$ orqali hisoblash imkonini beruvchi qudratli quroldir.
