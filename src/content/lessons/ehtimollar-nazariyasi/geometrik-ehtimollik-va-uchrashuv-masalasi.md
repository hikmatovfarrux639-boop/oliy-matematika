---
title: "Geometrik ehtimollik, uchrashuv masalasi va Byuffon ignasi"
module: "ehtimollar-nazariyasi"
order: 6
description: "Geometrik ehtimollik ta'rifi, uzunlik, yuza va hajm o'lchovlari, klassik uchrashuv masalasining koordinata usuli va Byuffon ignasi orqali pi sonini aniqlash."
---

## Kirish: Sinov natijalari soni cheksiz bo'lganda

Klassik ehtimollik ta'rifida ($P(A) = \frac{m}{n}$) barcha teng imkoniyatli natijalar soni $n$chekli bo'lishi shart (masalan, tanga tashlashda$n=2$, o'yin soqqasida $n=6$).

Lekin tasavvur qiling: siz $1$metrli yog'och tayoqchani ixtiyoriy joyidan sindirdingiz. Siniq nuqtasining koordinatasi aynan$x = 0.5$ metr bo'lish ehtimoli nechaga teng? Natijalar soni cheksiz ko'p bo'lgani uchun klassik formula bu yerda ishlamaydi ($1 / \infty = 0$).

Bunday uzluksiz jarayonlar uchun geometriya va ehtimollar tutashgan ajoyib vosita — **geometrik ehtimollik** kashf qilingan.

---

## 1. Geometrik ehtimollik ta'rifi

Faraz qilaylik, biror chekli $\Omega$fazoviy sohasiga tasodifiy nuqta tashlanadi. Nuqtaning shu soha ichidagi$A \subset \Omega$ qism-sohaga tushish ehtimoli sohaning joylashuvi va shakliga bog'liq bo'lmay, faqat uning **o'lchoviga (uzunligi, yuzi yoki hajmiga)** proporsionaldir:

$$
P(A) = \frac{\operatorname{mes}(A)}{\operatorname{mes}(\Omega)}
$$

```
                   O'lchov turlari (mes)
                             |
       +---------------------+---------------------+
       |                     |                     |
 1 o'lchov (Kesma)     2 o'lchov (Yuza)      3 o'lchov (Hajm)
   P = l / L             P = S_A / S_\Omega    P = V_A / V_\Omega
```

---

## 2. Klassik "Uchrashuv masalasi" (Zadacha o vstreche)

Bu masalani dunyodagi barcha universitetlarda talabalarga tushuntirishadi:

> **Masala sharti:** Ikki do'st soat $12:00$dan$13:00$ gacha bo'lgan vaqt oralig'ida uchrashishga kelishdilar ($T = 60$daqiqa). Har bir kishi kelgan paytidan boshlab$\tau = 15$ daqiqa kutadi va agar ikkinchisi kelmasa, ketadi. Ularning uchrashish ehtimolini toping.

### Geometrik yechish tahlili:
1. Birinchi do'stning kelish vaqtini $x$, ikkinchisining kelish vaqtini $y$ deb belgilaymiz.
   Ikkalasi ham $0$dan$60$ gacha ixtiyoriy daqiqada kelishi mumkin:
   
$$
   0 \le x \le 60, \qquad 0 \le y \le 60
   
$$
   Barcha mumkin bo'lgan natijalar fazosi — tomoni $60$ ga teng bo'lgan kvadrat:
   
$$
   S_{\Omega} = 60 \times 60 = 3600
   
$$
2. Uchrashuv sodir bo'lish sharti: ularning kelish vaqtlari farqi kutish vaqti $\tau = 15$ dan oshmasligi kerak:
   
$$
   |x - y| \le 15 \iff -15 \le y - x \le 15 \iff x - 15 \le y \le x + 15
   
$$

```
   y (min) ^
        60 |--------------/------/|
           |             /      / |
           |            /  A   /  |  (Uchrashuv sohasi)
           |           /      /   |
        15 |/---------/------/    |
           |         /      /     |
           |        /      /      |
         0 +-------/------/-------+---> x (min)
           0      15     45      60
```

3. Qulaylik uchun uchrashuv bo'lmaydigan (burchaklardagi ikkita oq uchburchak) soha yuzini hisoblaymiz:
   - Pastki uchburchak katetlari: $60 - 15 = 45$.
   - Yuqori uchburchak katetlari: $60 - 15 = 45$.
   Ikkala bo'sh uchburchak yuzi birgalikda bitta $45 \times 45$ kvadratni beradi:
   
$$
   S_{\text{bo'sh}} = (60 - 15)^2 = 45^2 = 2025
   
$$
4. Uchrashuv sohasi yuzi:
   
$$
   S_A = S_{\Omega} - S_{\text{bo'sh}} = 3600 - 2025 = 1575
   
$$
5. Ehtimollik:
   
$$
   P(A) = \frac{S_A}{S_{\Omega}} = \frac{1575}{3600} = \frac{7}{16} = 0.4375 \quad (43.75\%)
   
$$

---

## 3. Byuffon ignasi masalasi va $\pi$ sonini hisoblash

1777-yilda Jorj Byuffon bir-biridan $2a$masofada parallel chiziqlar tortilgan tekislikka uzunligi$2l$ ($l \le a$) bo'lgan ingichka ignani tasodifiy tashlash tajribasini o'rgandi.

Igna chiziqlardan birini kesib o'tish ehtimoli integrallar orqali hisoblanganda ajoyib natija chiqadi:
$$
P = \frac{2l}{\pi a}
$$
Bundan mashhur formula kelib chiqadi:
$$
\pi = \frac{2l}{P \cdot a}
$$
Agar ignani $N$marta tashlab, uning chiziqni kesib o'tgan$M$ta holatini sanasak,$P \approx \frac{M}{N}$ bo'ladi va bu orqali **$\pi$ sonini real eksperiment yordamida aniqlash mumkin**! Bu zamonaviy sun'iy intellekt va hisoblash fizikasidagi **Monte-Karlo usuli**ning dunyodagi birinchi namunasi hisoblanadi.

---

## 4. Masalalarni tahlil qilish

### Masala: Kesmani sindirish masalasi
Uzunligi $L$ bo'lgan kesma tavakkaliga ikkita nuqtadan sindirildi. Hosil bo'lgan uchta bo'lakdan **uchburchak yasash mumkinligi** ehtimolini toping.

**Yechish:**
Bolinish nuqtalari $x$va$y$ bo'lsin ($0 \le x \le y \le L$).
Uchta bo'lak uzunliklari:
- 1-bo'lak: $a = x$;
- 2-bo'lak: $b = y - x$;
- 3-bo'lak: $c = L - y$.
Barcha natijalar fazosi $0 \le x \le y \le L$shartli to'g'ri burchakli uchburchak bo'lib, uning yuzi$S_\Omega = \frac{L^2}{2}$.

Uchburchak mavjud bo'lishi uchun har bir tomon qolgan ikkitasining yig'indisidan kichik bo'lishi shart ($a < b+c, b < a+c, c < a+b$).
Har bir tomon yarim perimetrdan kichik bo'lishi kerak:
1. $a < \frac{L}{2} \implies x < \frac{L}{2}$2.$b < \frac{L}{2} \implies y - x < \frac{L}{2} \implies y < x + \frac{L}{2}$3.$c < \frac{L}{2} \implies L - y < \frac{L}{2} \implies y > \frac{L}{2}$Ushbu uchta tengsizlik$S_\Omega$ uchburchagining ichida o'rta chiziqlar hosil qilgan kichik uchburchakni ajratadi.
Kichik uchburchak yuzi umumiy yuzaning roppa-rosa $\frac{1}{4}$ qismiga teng:
$$
S_A = \frac{1}{4} S_\Omega
$$
Demak, ehtimollik:
$$
P(A) = \frac{S_A}{S_\Omega} = \frac{1}{4} = 0.25
$$

**Javob:** $P = \frac{1}{4} = 25\%$.

---

> [!WARNING] Imtihondagi tuzoqlar va ko'p uchraydigan xatoliklar
> 1. **Burchaklar kvadratini unutish:** Uchrashuv masalasida $S_A = T^2 - (T-\tau)^2$formulada$(T-\tau)$qismini kvadratga ko'tarish unutilib, shunchaki$2\tau T$ deb xato qilinadi. Burchakdagi uchburchaklar yuzini to'g'ri hisoblang.
> 2. **Nol o'lchovli hodisalar ehtimoli:** Uzluksiz geometrik ehtimollikda bitta aniq nuqtaga tushish ehtimoli $0$ ga teng ($P(x = x_0) = 0$), lekin bu hodisa **mumkin emas degani emas**.

---

## Mustaqil yechish uchun mashqlar

### 1-mashq
Radiusi $R = 10$sm bo'lgan nishonga o'q uzildi. O'qning nishon markazidagi radiusi$r = 5$ sm bo'lgan doiraga tushish ehtimolini toping.

<details>
<summary>👉 Yechimni tekshirish</summary>

**Yechish:**
Butun nishon yuzi: $S_\Omega = \pi R^2 = \pi \cdot 10^2 = 100\pi$.
Ichki nishon yuzi: $S_A = \pi r^2 = \pi \cdot 5^2 = 25\pi$.
$$
P(A) = \frac{S_A}{S_\Omega} = \frac{25\pi}{100\pi} = \frac{1}{4} = 0.25
$$

**Javob:** $P = 0.25$ ($25\%$).

</details>

### 2-mashq
Uchrashuv masalasida umumiy vaqt $T = 60$daqiqa, ammo kutish vaqti$\tau = 20$ daqiqa bo'lsa, uchrashish ehtimoli nechaga teng?

<details>
<summary>👉 Yechimni tekshirish</summary>

**Yechish:**
$P = 1 - \left(1 - \frac{\tau}{T}\right)^2 = 1 - \left(1 - \frac{20}{60}\right)^2 = 1 - \left(\frac{2}{3}\right)^2 = 1 - \frac{4}{9} = \frac{5}{9} \approx 0.556$.

**Javob:** $P = \frac{5}{9} \approx 55.6\%$.

</details>
