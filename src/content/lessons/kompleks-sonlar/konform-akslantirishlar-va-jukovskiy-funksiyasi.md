---
title: "Konform akslantirishlar, kasr-chiziqli funksiya va Jukovskiy qanot profili"
description: "Konformlikning geometrik ma'nosi, kasr-chiziqli almashtirishlar va aerodinamikadagi Jukovskiy funksiyasi tatbiqlari."
module: "kompleks-sonlar"
order: 14
---

## 📌 Kirish va Fizik/Texnik Mohiyati

Samolyot havoda qanday qilib muallaq turadi va uni qanday kuch yuqoriga ko'taradi? XX asr boshigacha aviatsiya muhandislari qanot shaklini tajriba-sinov yo'li bilan, ko'pincha fojiali xatolar orqali izlashgan. 1904-yilda rus olimi, "rus aviatsiyasining otasi" Nikolay Yegorovich Jukovskiy (1847–1921) kompleks o'zgaruvchili funksiyalar yordamida inqilobiy kashfiyot qildi: u **konform akslantirish** orqali oddiy aylanani samolyot qanoti ko'ndalang kesimiga (Jukovskiy profiliga) o'tkazishni va qanotning ko'tarish kuchini analitik hisoblash formulasini yaratdi.

Konform akslantirishlar bundan tashqari kartografiyada (yer sharini burchaklarni buzmasdan tekis xaritaga tushiruvchi Merkator proyeksiyasi), elektrostatikada murakkab shaklli elektrodlar maydonini hisoblashda va gidrodinamikada to'siqlarni aylanib o'tuvchi oqimlarni modellashtirishda markaziy o'rin tutadi.

---

## 📐 Asosiy Nazariya, Qoidalar va Teoremalar

### 1. Konform akslantirishning geometrik ma'nosi

$w = f(z)$ akslantirish $z_0$ nuqtaning atrofida berilgan bo'lsin.

> **Ta'rif:**
> Agar $w = f(z)$ akslantirish $z_0$ nuqtadan chiquvchi har qanday ikki silliq egri chiziq orasidagi **burchak kattaligini va uning yo'nalishini (aylanish tartibini) saqlasa**, bu akslantirish $z_0$ nuqtada **birinchi tur konform akslantirish** deyiladi.

Geometrik xarakteristikalari:
1. **Masshtab doimiyligi (cho'zilish koeffitsiyenti):**
   Nuqtadan chiquvchi barcha yo'nalishlar bo'yicha chiziqli cho'zilish koeffitsiyenti bir xil bo'lib, hosilaning moduliga teng:
   $$k = |f'(z_0)|$$
   - $k > 1$ bo'lsa — cho'zilish;
   - $k < 1$ bo'lsa — qisqarish.
2. **Burilish burchagi:**
   Har qanday yo'nalish bitta umumiy burchakka buriladi, bu burchak hosilaning argumentiga teng:
   $$\alpha = \operatorname{Arg}(f'(z_0))$$

> **Konformlik mezoni:**
> Agar $f(z)$ funksiya biror $D$ sohada golomorf bo'lsa va uning hosilasi sohaning hech bir nuqtasida nolga aylanmasa ($f'(z) \neq 0$), u holda $f(z)$ ushbu sohada **konform akslantirishdir**.
> Hosila nolga teng bo'lgan nuqtalar ($f'(z) = 0$) **kritik nuqtalar** deyiladi va ularda konformlik (burchak saqlanishi) buziladi.

---

### 2. Kasr-chiziqli funksiya (Möbius almashtirishi)

Quyidagi ko'rinishdagi funksiya **kasr-chiziqli funksiya** deyiladi:
$$w = \frac{az + b}{cz + d}, \quad (ad - bc \neq 0, \quad c \neq 0)$$

Uning hosilasi:
$$w' = \frac{ad - bc}{(cz + d)^2} \neq 0$$
demak, u $z = -d/c$ qutbdan tashqari butun kompleks tekislikda konformdir.

**Kasr-chiziqli almashtirishning fundamental xossalari:**
1. **Doiraviylik xossasi (Krugovoye svoystvo):**
   Aylana yoki to'g'ri chiziq yana aylanaga yoki to'g'ri chiziqqa o'tadi (to'g'ri chiziq — cheksizlikdan o'tuvchi cheksiz radiusli aylana deb qaraladi).
2. **Simmetriya xossasi:**
   Biror $\Gamma$ aylanaga (yoki chiziqqa) nisbatan simmetrik bo'lgan $z$ va $z^*$ nuqtalar tasvirdagi $w(\Gamma)$ aylanaga nisbatan simmetrik bo'lgan $w(z)$ va $w(z^*)$ nuqtalarga o'tadi.
3. **Uchta nuqta xossasi:**
   Berilgan $z_1, z_2, z_3$ nuqtalarni mos ravishda $w_1, w_2, w_3$ nuqtalarga o'tkazuvchi yagona kasr-chiziqli funksiya mavjud bo'lib, u quyidagi invariant munosabatdan topiladi:
   $$\frac{w - w_1}{w - w_2} : \frac{w_3 - w_1}{w_3 - w_2} = \frac{z - z_1}{z - z_2} : \frac{z_3 - z_1}{z_3 - z_2}$$

---

### 3. Jukovskiy funksiyasi va qanot profili

Quyidagi funksiya **Jukovskiy funksiyasi** deb ataladi:
$$w = \frac{1}{2}\left( z + \frac{1}{z} \right)$$

1. **Hosilasi va kritik nuqtalar:**
   $$w' = \frac{1}{2}\left( 1 - \frac{1}{z^2} \right) = \frac{z^2 - 1}{2z^2}$$
   $w' = 0 \implies z = \pm 1$. Shuning uchun $z = 1$ va $z = -1$ nuqtalarda akslantirish konform emas.
2. **Birlik aylananing tasviri:**
   Birlik aylanadagi nuqtalar $z = e^{i\theta} = \cos\theta + i\sin\theta$:
   $$w = \frac{1}{2}(e^{i\theta} + e^{-i\theta}) = \cos\theta$$
   $\theta$ parametri $0$ dan $2\pi$ gacha o'zgarganda, $w$ qiymati $[-1, 1]$ haqiqiy kesma bo'ylab ikki marta o'tadi. Demak, birlik aylana $[-1, 1]$ kesmaga aylanadi!
3. **Ellipslarning hosil bo'lishi:**
   $|z| = R > 1$ konsentrik aylanalar $w$-tekislikda fokalari $\pm 1$ bo'lgan ellipsga o'tadi:
   $$u = \frac{1}{2}\left(R + \frac{1}{R}\right)\cos\theta, \quad v = \frac{1}{2}\left(R - \frac{1}{R}\right)\sin\theta$$
4. **Aerodinamik Jukovskiy profili:**
   Agar markazi koordinata boshidan biroz siljigan va $z = 1$ kritik nuqtadan o'tuvchi aylana olinsa, Jukovskiy funksiyasi uni old tomoni yumaloqlangan, orqa tomoni esa o'tkir burchakli samolyot qanoti profiliga o'tkazadi!

---

## 📝 Qadamma-qadam Yechilgan Amaliy Misollar

### 1-misol: Cho'zilish koeffitsiyenti va burilish burchagini hisoblash
$$w = z^2$$
akslantirishida $z_0 = 1 + i$ nuqtadagi cho'zilish koeffitsiyenti $k$ va burilish burchagi $\alpha$ ni aniqlang.

**Yechish:**
1. Hosilani topamiz:
   $$w'(z) = 2z$$
2. $z_0 = 1 + i$ nuqtadagi hosila qiymatini hisoblaymiz:
   $$w'(1 + i) = 2(1 + i) = 2 + 2i$$
3. Hosilaning modulini (cho'zilish koeffitsiyentini) topamiz:
   $$k = |w'(1 + i)| = |2 + 2i| = \sqrt{2^2 + 2^2} = \sqrt{8} = 2\sqrt{2} \approx 2.83$$
   Demak, $z_0$ atrofidagi cheksiz kichik shakllar chiziqli o'lchamlari bo'yicha $2\sqrt{2}$ marta kattalashadi (cho'ziladi).
4. Hosilaning argumentini (burilish burchagini) topamiz:
   $$\alpha = \operatorname{Arg}(2 + 2i) = \arctan\left(\frac{2}{2}\right) = \frac{\pi}{4} \quad (45^\circ)$$
   Demak, $z_0$ nuqtadan chiquvchi barcha yo'nalishlar soat strelkasiga qarshi $45^\circ$ ga buriladi.

**Javob:** $k = 2\sqrt{2}$, $\alpha = \frac{\pi}{4}$.

---

### 2-misol: Yarim tekislikni birlik doiraga akslantirish
Yuqori yarim tekislikni ($\operatorname{Im} z > 0$) birlik doira ichiga ($|w| < 1$) o'tkazuvchi va $z_0 = i$ nuqtani koordinatalar boshiga ($w(i) = 0$) tushiruvchi kasr-chiziqli funksiyani toping.

**Yechish:**
1. Simmetriya xossasini qo'llaymiz.
   Chegara haqiqiy o'q $\operatorname{Im} z = 0$ dir.
   $z_0 = i$ nuqtaga haqiqiy o'qqa nisbatan simmetrik nuqta $\bar{z}_0 = -i$ dir.
2. $z_0 = i$ nuqta doira markaziga ($w = 0$) o'tishi kerak: demak, kasr surati $z - i$ bo'ladi.
3. Simmetriyaga ko'ra, $\bar{z}_0 = -i$ nuqta $w = 0$ ga birlik aylanaga nisbatan simmetrik nuqtaga, ya'ni $w = \infty$ ga o'tishi kerak: demak, maxraj $z - (-i) = z + i$ bo'ladi.
4. Funksiya ko'rinishi:
   $$w = e^{i\theta_0} \frac{z - i}{z + i}$$
5. Haqiqiy o'qdagi nuqtalarni tekshiramiz (masalan, $z = 0$):
   $$|w(0)| = \left| e^{i\theta_0} \frac{0 - i}{0 + i} \right| = \left| \frac{-i}{i} \right| = |-1| = 1$$
   Haqiqatan ham haqiqiy o'q birlik aylanaga akslandi. $\theta_0 = 0$ deb olsak:
   $$w = \frac{z - i}{z + i}$$

**Javob:** $w = \frac{z - i}{z + i}$.

---

### 3-misol: Jukovskiy funksiyasida ellips hosil bo'lishi
$|z| = 2$ aylananing $w = \frac{1}{2}\left(z + \frac{1}{z}\right)$ akslantirishdagi tasvirini aniqlang.

**Yechish:**
1. Aylana tenglamasini eksponensial shaklda yozamiz:
   $$z = 2 e^{i\theta} = 2(\cos\theta + i\sin\theta)$$
2. Funksiyaga qo'yamiz:
   $$w = u + iv = \frac{1}{2} \left( 2e^{i\theta} + \frac{1}{2}e^{-i\theta} \right)$$
   $$w = \frac{1}{2} \left[ 2(\cos\theta + i\sin\theta) + \frac{1}{2}(\cos\theta - i\sin\theta) \right]$$
3. Haqiqiy va mavhum qismlarni yig'amiz:
   $$u = \frac{1}{2}\left(2 + \frac{1}{2}\right)\cos\theta = \frac{5}{4}\cos\theta$$
   $$v = \frac{1}{2}\left(2 - \frac{1}{2}\right)\sin\theta = \frac{3}{4}\sin\theta$$
4. Trigonometrik ayniyat $\cos^2\theta + \sin^2\theta = 1$ dan foydalanamiz:
   $$\cos\theta = \frac{u}{5/4}, \quad \sin\theta = \frac{v}{3/4}$$
   $$\frac{u^2}{(5/4)^2} + \frac{v^2}{(3/4)^2} = 1 \iff \frac{u^2}{1.5625} + \frac{v^2}{0.5625} = 1$$
   Bu ellips tenglamasidir! Uning katta yarim o'qi $a = \frac{5}{4} = 1.25$, kichik yarim o'qi $b = \frac{3}{4} = 0.75$, fokuslararo masofasi $c = \sqrt{a^2 - b^2} = \sqrt{\frac{25}{16} - \frac{9}{16}} = \sqrt{\frac{16}{16}} = 1$.

**Javob:** Fokuslari $w = \pm 1$ bo'lgan $\frac{u^2}{(5/4)^2} + \frac{v^2}{(3/4)^2} = 1$ ellipsi hosil bo'ladi.

---

### 4-misol: Doiraviylik xossasi ($w = 1/z$)
$w = \frac{1}{z}$ akslantirish yordamida $y = 1$ to'g'ri chizig'ining tasvirini toping.

**Yechish:**
1. Bog'liqlik: $z = \frac{1}{w} = \frac{1}{u + iv} = \frac{u - iv}{u^2 + v^2}$.
2. Haqiqiy va mavhum qismlar:
   $$x = \frac{u}{u^2 + v^2}, \quad y = \frac{-v}{u^2 + v^2}$$
3. $y = 1$ chiziq tenglamasiga qo'yamiz:
   $$\frac{-v}{u^2 + v^2} = 1 \implies u^2 + v^2 = -v \implies u^2 + v^2 + v = 0$$
4. To'la kvadrat ajratamiz:
   $$u^2 + \left(v + \frac{1}{2}\right)^2 = \frac{1}{4}$$
   Bu markazi $\left(0, -\frac{1}{2}\right)$ nuqtada va radiusi $R = \frac{1}{2}$ bo'lgan aylanadir (koordinata boshi $(0, 0)$ teshilgan, chunki $z \to \infty$ da $w \to 0$).

**Javob:** $u^2 + (v + 1/2)^2 = 1/4$ aylanasi (koordinata boshi chiqarilgan).

---

## ⚠️ Talabalar Ko'p Yo'l Qo'yadigan Xatolar

1. **Hosilasi nol bo'lgan nuqtalarda burchakni saqlanadi deb o'ylash:**
   Agar $f'(z_0) = 0$ bo'lsa, akslantirish konform bo'lmaydi. Masalan, $w = z^2$ da $z_0 = 0$ da $w' = 0$. Koordinata o'qlari orasidagi $90^\circ$ li burchak $w$-tekislikda $180^\circ$ ga (ikki barobar) aylanadi.
2. **Jukovskiy funksiyasining bir qiymatliligini buzish:**
   Jukovskiy funksiyasi butun tekislikda o'zaro bir qiymatli emas: $z$ va $\frac{1}{z}$ nuqtalar bitta $w$ nuqtaga akslanadi. Shuning uchun akslantirish sohasi sifatida faqat doira tashqarisi ($|z| > 1$) yoki doira ichi ($|z| < 1$) olinishi shart.
3. **Kasr-chiziqli funksiyada $ad - bc = 0$ holini e'tibordan chetda qoldirish:**
   Agar determinant $ad - bc = 0$ bo'lib qolsa, funksiya o'zgarmas songa ($w = \text{const}$) aylanib qoladi va hech qanday konform akslantirish hosil qilmaydi.

---

## 🎯 Mustaqil Yechish Uchun Masalalar

1. $w = e^z$ akslantirishining $z_0 = 1 + i\frac{\pi}{3}$ nuqtadagi cho'zilish koeffitsiyenti va burilish burchagini toping.
   *Javob:* $k = e \approx 2.718$, $\alpha = \frac{\pi}{3}$.

2. $z_1 = 0, z_2 = 1, z_3 = \infty$ nuqtalarni mos ravishda $w_1 = -1, w_2 = 0, w_3 = 1$ nuqtalarga o'tkazuvchi kasr-chiziqli funksiyani tuzing.
   *Javob:* $w = \frac{z - 1}{z + 1}$.

3. $w = \frac{1}{2}(z + 1/z)$ Jukovskiy funksiyasi yordamida radiusi $R = 3$ bo'lgan aylananing tasviri bo'lgan ellipsning yarim o'qlarini toping.
   *Javob:* $a = \frac{5}{3} \approx 1.67, b = \frac{4}{3} \approx 1.33$.

4. $w = \frac{1}{z}$ akslantirishida $x = 2$ to'g'ri chizig'ining tasvirini aniqlang.
   *Javob:* $(u - 1/4)^2 + v^2 = 1/16$ aylanasi.

---

## 💡 Xulosa va Imtihon Maslahatlari

- Konform akslantirish masalalarida birinchi navbatda $f'(z) \neq 0$ shartini tekshiring — bu sizga akslantirish qaysi sohada konform ekanligini darhol aniqlab beradi.
- Kasr-chiziqli funksiyalarda uchta nuqtaning tasviri butun sohaning tasvirini to'liq belgilaydi. Shuning uchun soha chegarasidagi 3 ta qulay nuqtani tanlab, ularning tasvirini topish orqali butun shaklni tiklash eng xavfsiz strategiyadir.
