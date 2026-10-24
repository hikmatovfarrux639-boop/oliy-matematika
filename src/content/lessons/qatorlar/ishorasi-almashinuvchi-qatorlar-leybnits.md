---
title: "Ishorasi almashinuvchi qatorlar va Leybnits alomati"
module: "qatorlar"
order: 3
description: "Ishorasi almashinuvchi qatorlar, Leybnits teoremasi, qator qoldig'ini baholash, mutlaq va shartli yaqinlashish hamda Riman paradoksi."
---

## Kirish: Musbat va manfiy hadlarning o'zaro kurashi

Barcha hadlari musbat bo'lgan qatorlarda har bir yangi had yig'indini faqat kattalashtiradi. Ammo hadlarning ishorasi galma-galdan almashinib kelsa:

$$
1 - \frac{1}{2} + \frac{1}{3} - \frac{1}{4} + \frac{1}{5} - \dots
$$

har bir manfiy had oldingi musbat hadning qiymatini kompensatsiya qiladi (kamaytiradi). Natijada, musbat holda cheksizlikka uzoqlashuvchi bo'lgan garmonik qator ishorasi almashinuvchi holatda **ajoyib tarzda chekli songa yaqinlashadi** (va uning yig'indisi $\ln 2 \approx 0.6931$ ga teng bo'ladi!).

---

## 1. Ishorasi almashinuvchi qator ta'rifi

> **Ta'rif:** Ketma-ket kelgan ixtiyoriy ikkita hadining ishorasi qarama-qarshi bo'lgan qator **ishorasi almashinuvchi qator** deyiladi:
>
> 
$$
> \sum_{n=1}^\infty (-1)^{n-1} a_n = a_1 - a_2 + a_3 - a_4 + \dots \quad (a_n > 0)
> 
$$

---

## 2. Leybnits alomati va geometrik mohiyati

> **Leybnits teoremasi:** Agar ishorasi almashinuvchi qator uchun quyidagi ikkita shart bir vaqtda bajarilsa:
> 1. Hadlarning modullari monoton kamayuvchi bo'lsa:
>    
$$
>    a_1 \ge a_2 \ge a_3 \ge \dots \ge a_n \ge a_{n+1} \ge \dots
>    
$$
> 2. Umumiy hadning moduli cheksizlikda nolga intilsa:
>    
$$
>    \lim_{n \to \infty} a_n = 0
>    
$$
>
> u holda qator **YAQINLASHADI**, uning yig'indisi $S$ musbat bo'lib, birinchi hadidan oshmaydi: $0 < S \le a_1$.

---

## 3. Qator qoldig'ini baholash (Taqribiy hisoblashlar asosi)

Kompyuterda va hisoblash matematikasida qator yig'indisi cheksiz ko'p hadlar bo'yicha emas, balki dastlabki $n$ ta hadi yig'indisi $S_n$ orqali taqribiy hisoblanadi. Bunda yo'l qo'yiladigan xatolik (qator qoldig'i $R_n = S - S_n$) keyingi tashlab yuborilgan birinchi hadning modulidan oshmaydi:

$$
|R_n| \le a_{n+1}
$$

> Masalan, agar talab qilingan aniqlik $\varepsilon = 0.001$ bo'lsa, shunchaki $a_{n+1} \le 0.001$ tengsizlikni qanoatlantiruvchi eng kichik $n$ ni topish kifoya!

---

## 4. Mutlaq va shartli yaqinlashish

Ixtiyoriy ishorali $\sum u_n$ qator berilgan bo'lsin. Uning modullaridan tuzilgan $\sum |u_n|$ musbat qatorni tekshiramiz.

> **Ta'riflar:**
> 1. Agar modullardan tuzilgan $\sum |u_n|$ qator yaqinlashsa, dastlabki $\sum u_n$ qator **MUTLAQ YAQINLASHUVCHI** deyiladi.
> 2. Agar dastlabki $\sum u_n$ qator yaqinlashsa-yu, lekin uning modullaridan tuzilgan $\sum |u_n|$ qator uzoqlashsa, dastlabki qator **SHARTLI YAQINLASHUVCHI** deyiladi.

### Misollar:
- $\sum_{n=1}^\infty \frac{(-1)^{n-1}}{n^2}$: modullari $\sum \frac{1}{n^2}$ ($p = 2 > 1$) yaqinlashadi. Demak, **mutlaq yaqinlashadi**.
- $\sum_{n=1}^\infty \frac{(-1)^{n-1}}{n}$: Leybnits bo'yicha yaqinlashadi, lekin modullari $\sum \frac{1}{n}$ garmonik qator bo'lib uzoqlashadi. Demak, **shartli yaqinlashadi**.

---

## 5. Riman teoremasi (Aql bovar qilmas paradoks)

Oddiy arifmetikadan bilamizki, qo'shiluvchilarning o'rni almashgani bilan yig'indi o'zgarmaydi. Mutlaq yaqinlashuvchi qatorlarda bu qoida cheksiz hadlar uchun ham saqlanadi.

Ammo **shartli yaqinlashuvchi** qatorlarda bu qoida butunlay buziladi!

> **Riman teoremasi:** Shartli yaqinlashuvchi qator hadlarining o'rnini almashtirish orqali uning yig'indisini **oldindan berilgan istalgan ixtiyoriy son** $L \in \mathbb{R}$ ga teng qilish, hatto uni $+\infty$ yoki $-\infty$ ga intiladigan qilish mumkin!

---

## 6. Amaliy masalalar va ko'p usulli yechimlar

### 1-masala: Qatorni mutlaq va shartli yaqinlashishga tekshirish

Quyidagi qatorni to'liq tekshiring:
$$
\sum_{n=1}^\infty \frac{(-1)^{n-1}}{\sqrt{n}}
$$

#### Yechish:
1. **1-qadam: Modullar qatorini tekshirish:**
   
$$
   \sum_{n=1}^\infty \left| \frac{(-1)^{n-1}}{\sqrt{n}} \right| = \sum_{n=1}^\infty \frac{1}{n^{1/2}}
   
$$
   Bu Dirixle umumlashgan garmonik qatoridir. $p = \frac{1}{2} \le 1$ bo'lganligi sababli qator **uzoqlashadi**.
   Demak, dastlabki qator mutlaq yaqinlashmaydi!

2. **2-qadam: Leybnits alomatini qo'llash:**
   $a_n = \frac{1}{\sqrt{n}}$:
   - 1) Monotonlik: $\frac{1}{\sqrt{1}} > \frac{1}{\sqrt{2}} > \frac{1}{\sqrt{3}} > \dots > \frac{1}{\sqrt{n}} > \dots$ (kamayuvchi).
   - 2) Nolga intilish: $\lim_{n \to \infty} \frac{1}{\sqrt{n}} = 0$.
   Leybnits teoremasining ikkala sharti ham to'liq bajarildi! Demak, qator yaqinlashadi.

3. **Xulosa:** Modullar qatori uzoqlashgani, lekin o'zi yaqinlashgani sababli berilgan qator **shartli yaqinlashuvchidir**.

---

### 2-masala: Taqribiy hisoblash va xatolikni baholash

Qator yig'indisini $\varepsilon = 0.01$ (yuzdan bir) aniqlikda hisoblang:
$$
S = \sum_{n=1}^\infty \frac{(-1)^{n-1}}{n!} = 1 - \frac{1}{2!} + \frac{1}{3!} - \frac{1}{4!} + \frac{1}{5!} - \dots
$$

#### Yechish:
Leybnits qoidasiga ko'ra: $|R_n| \le a_{n+1}$.
Bizga $|R_n| \le 0.01 = \frac{1}{100}$ bo'lishi kerak, ya'ni:
$$
a_{n+1} = \frac{1}{(n+1)!} \le \frac{1}{100} \iff (n + 1)! \ge 100
$$
Faktoriallarni hisoblaymiz:
- $1! = 1$
- $2! = 2$
- $3! = 6$
- $4! = 24$
- $5! = 120 \ge 100$

Demak, $n + 1 = 5 \implies n = 4$ ta hadni olish yetarli!
Taqribiy yig'indini hisoblaymiz:
$$
S \approx S_4 = 1 - \frac{1}{2} + \frac{1}{6} - \frac{1}{24} = \frac{24 - 12 + 4 - 1}{24} = \frac{15}{24} = \frac{5}{8} = 0.625
$$
*(Ma'lumot uchun: bu qator $1 - e^{-1} \approx 0.6321$ ga intiladi, xatolik $|0.6321 - 0.625| = 0.0071 < 0.01$!).*

---

## 7. Imtihondagi asosiy tuzoqlar

> [!WARNING] Imtihondagi tuzoqlar
> 1. **Monotonlik shartini tekshirishni unutish:**
>    $\lim_{n \to \infty} a_n = 0$ shartining o'zi yetarli emas! Hadlar moduli $a_n$ albatta monoton kamayishi shart. Agar hadlar sakrab o'zgarsa, qator uzoqlashishi mumkin.
> 2. **Ixtiyoriy ishorali qator bilan adashtirish:**
>    Masalan, $\sum \frac{\sin n}{n^2}$ qatorida ishoralar $+ - + -$ kabi tartibli galma-gal kelmaydi ($\sin 1 > 0, \sin 2 > 0, \sin 3 > 0, \sin 4 < 0$). Bunday qatorlarga Leybnits alomatini qo'llab bo'lmaydi! Ularni darhol modullar qatori orqali taqqoslash kerak ($|\frac{\sin n}{n^2}| \le \frac{1}{n^2}$).
> 3. **Mutlaq yaqinlashuvchi qatorda Leybnitsga to'xtab qolish:**
>    Agar qator modullari bo'yicha yaqinlashsa (masalan $\sum \frac{(-1)^n}{n^3}$), faqat Leybnits alomati bilan kifoyalanib "yaqinlashadi" deb qo'yish to'liq javob emas. U **mutlaq yaqinlashadi** deb yozilishi shart!

---

## 8. Mustaqil yechish uchun amaliy mashqlar

### 1-mashq
Ushbu qatorni mutlaq yoki shartli yaqinlashishga tekshiring:
$$
\sum_{n=1}^\infty \frac{(-1)^{n-1}}{n^3 + 1}
$$

<details>
<summary>👉 Yechimni tekshirish</summary>

1. Modullarini olamiz: $\sum \frac{1}{n^3 + 1}$.
2. Taqqoslash alomati: $\frac{1}{n^3 + 1} < \frac{1}{n^3}$.
   $\sum \frac{1}{n^3}$ qator $p = 3 > 1$ bo'lgani uchun yaqinlashuvchi.
3. Demak, modullar qatori yaqinlashadi.
Xulosa: Qator **mutlaq yaqinlashuvchi**.
</details>

### 2-mashq
$\sum_{n=1}^\infty \frac{(-1)^{n-1}}{2n - 1}$ qatorining xarakterini aniqlang.

<details>
<summary>👉 Yechimni tekshirish</summary>

1. Modullar qatori: $\sum \frac{1}{2n - 1} \sim \frac{1}{2n}$ — uzoqlashuvchi garmonik qator.
2. Leybnits shartlari: $a_n = \frac{1}{2n - 1} \to 0$ va monoton kamayadi. Leybnits bo'yicha yaqinlashadi.
Xulosa: Qator **shartli yaqinlashuvchi** (uning yig'indisi $\frac{\pi}{4}$ ga teng).
</details>
