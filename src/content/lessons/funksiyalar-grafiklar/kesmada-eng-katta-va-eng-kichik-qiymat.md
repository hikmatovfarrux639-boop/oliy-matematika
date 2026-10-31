---
title: "Kesmada funksiyaning eng katta va eng kichik (global) qiymatini topish"
module: "funksiyalar-grafiklar"
order: 11
description: "Veyershtrass teoremasi, kesmada funksiyaning eng katta (global maksimum) va eng kichik (global minimum) qiymatlarini topishning 4 bosqichli algoritmi, statsionar nuqtalar va chegaraviy qiymatlar tahlili hamda amaliy optimallashtirish masalalari."
---

## Kirish va nazariy asos

Funksiyani tekshirishda talabalar ko'pincha **lokal ekstremum** (ya'ni kichik bir atrofda eng katta yoki eng kichik bo'lish) va **kesmada eng katta/kichik qiymat (global ekstremum)** tushunchalarini chalkashtirib yuborishadi.

Lokal maksimum nuqtasi funksiyaning berilgan kesmadagi mutlaq eng katta qiymati bo'lishi shart emas — kesma chegaralarida funksiya undan ancha yuqoriga ko'tarilishi mumkin!

> **Veyershtrass teoremasi (Fundamental teorema):**
> Agar $f(x)$ funksiya chekli va yopiq $[a, b]$ kesmada uzluksiz bo'lsa, u holda ushbu kesmada o'zining **eng katta** ($M = \max_{[a, b]} f(x)$) va **eng kichik** ($m = \min_{[a, b]} f(x)$) qiymatlariga albatta erishadi.

Bu qiymatlar qayerda joylashgan bo'lishi mumkin? Atigi 2 ta joyda:
1. Kesmaning ichida yotuvchi **statsionar (kritik) nuqtalarda** (ya'ni $f'(x) = 0$ bo'lgan yoki hosila mavjud bo'lmagan nuqtalarda);
2. Kesmaning chekka chegaralarida: $x = a$ yoki $x = b$ nuqtalarda.

---

## 1. Global ekstremumni topishning universal 4 bosqichli algoritmi

Imtihonlarda har qanday $f(x)$ funksiyaning $[a, b]$ kesmadagi eng katta va eng kichik qiymatini topish uchun quyidagi qat'iy qadamlar ketma-ketligi bajariladi:

```
[1-Qadam] Funksiya hosilasi f'(x) ni hisoblash
    │
    ▼
[2-Qadam] f'(x) = 0 tenglamani yechib, statsionar nuqtalarni topish
    │
    ▼
[3-Qadam] FILTR: Topilgan ildizlardan FAQAT [a, b] kesma ICHIGA tushganlarini ajratib olish!
    │   (Kesmaga kirmagan nuqtalar darhol tashlab yuboriladi)
    ▼
[4-Qadam] Funksiya qiymatlarini hisoblash va taqqoslash:
    - Kesma ichidagi saralangan kritik nuqtalarda: f(x₁)
    - Kesma uchlarida: f(a) va f(b)
    Ulardan eng kattasi -> Max, eng kichigi -> Min bo'ladi!
```

> **Muhim eslatma:** Global ekstremumni topishda 2-tartibli hosila yoki oraliqlar usuli bilan ishora o'zgarishini tekshirish **SHART EMAS**! Shunchaki barcha nomzod nuqtalardagi sonli qiymatlarni hisoblab, taqqoslash kifoya.

---

## 2. To'liq yechilgan namunaviy misollar

### 1-Misol (Polinomial funksiya):
$f(x) = 2x^3 - 3x^2 - 12x + 1$ funksiyaning $[-2, 4]$ kesmadagi eng katta va eng kichik qiymatlarini toping.

**Yechish:**
1. **Hosila olamiz:**
   $$f'(x) = (2x^3 - 3x^2 - 12x + 1)' = 6x^2 - 6x - 12$$
2. **Kritik nuqtalarni topamiz ($f'(x) = 0$):**
   $$6x^2 - 6x - 12 = 0 \iff 6(x^2 - x - 2) = 0$$
   Viyet teoremasi bo'yicha ildizlar:
   $$x_1 = 2, \quad x_2 = -1$$
3. **Kesmaga tegishlilikni tekshiramiz ($[-2, 4]$):**
   - $x_1 = 2 \in [-2, 4]$ (tegishli ✅)
   - $x_2 = -1 \in [-2, 4]$ (tegishli ✅)
   Har ikkala nuqta ham kesma ichida yotadi.
4. **Funksiya qiymatlarini hisoblaymiz (e'tibor bering: hosilaga emas, ASL funksiya $f(x)$ ga qo'yiladi!):**
   - $x = -2$ (chap chegara):
     $$f(-2) = 2(-2)^3 - 3(-2)^2 - 12(-2) + 1 = 2(-8) - 3(4) + 24 + 1 = -16 - 12 + 24 + 1 = -3$$
   - $x = -1$ (kritik nuqta):
     $$f(-1) = 2(-1)^3 - 3(-1)^2 - 12(-1) + 1 = -2 - 3 + 12 + 1 = 8$$
   - $x = 2$ (kritik nuqta):
     $$f(2) = 2(2)^3 - 3(2)^2 - 12(2) + 1 = 16 - 12 - 24 + 1 = -19$$
   - $x = 4$ (o'ng chegara):
     $$f(4) = 2(4)^3 - 3(4)^2 - 12(4) + 1 = 2(64) - 3(16) - 48 + 1 = 128 - 48 - 48 + 1 = 33$$
5. **Taqqoslaymiz:**
   Hisoblangan qiymatlar to'plami: $\{-3, 8, -19, 33\}$.
   - Eng kattasi: $33$ ($x = 4$ nuqtada)
   - Eng kichigi: $-19$ ($x = 2$ nuqtada)

**Javob:**
$$\max_{[-2, 4]} f(x) = f(4) = 33$$
$$\min_{[-2, 4]} f(x) = f(2) = -19$$

---

### 2-Misol (Trigonometrik funksiya):
$f(x) = \sin 2x - x$ funksiyaning $\left[-\frac{\pi}{2}, \frac{\pi}{2}\right]$ kesmadagi eng katta va eng kichik qiymatlarini toping.

**Yechish:**
1. **Hosila olamiz:**
   $$f'(x) = 2\cos 2x - 1$$
2. **Kritik nuqtalarni aniqlaymiz:**
   $$2\cos 2x - 1 = 0 \implies \cos 2x = \frac{1}{2}$$
   $$2x = \pm \frac{\pi}{3} + 2\pi k \implies x = \pm \frac{\pi}{6} + \pi k, \quad k \in \mathbb{Z}$$
3. **$\left[-\frac{\pi}{2}, \frac{\pi}{2}\right]$ kesmaga tushadigan ildizlarni tanlaymiz:**
   - $k = 0 \implies x_1 = \frac{\pi}{6}, \quad x_2 = -\frac{\pi}{6}$ (ikkalasi ham oraliqqa tegishli ✅)
   - $k = 1$ yoki $k = -1$ da oraliqdan chiqib ketadi.
4. **Qiymatlarni hisoblaymiz:**
   - Chap chegara: $x = -\frac{\pi}{2}$:
     $$f\left(-\frac{\pi}{2}\right) = \sin(-\pi) - \left(-\frac{\pi}{2}\right) = 0 + \frac{\pi}{2} = \frac{\pi}{2} \approx 1.57$$
   - Ichki nuqta: $x = -\frac{\pi}{6}$:
     $$f\left(-\frac{\pi}{6}\right) = \sin\left(-\frac{\pi}{3}\right) - \left(-\frac{\pi}{6}\right) = -\frac{\sqrt{3}}{2} + \frac{\pi}{6} \approx -0.866 + 0.524 = -0.342$$
   - Ichki nuqta: $x = \frac{\pi}{6}$:
     $$f\left(\frac{\pi}{6}\right) = \sin\left(\frac{\pi}{3}\right) - \frac{\pi}{6} = \frac{\sqrt{3}}{2} - \frac{\pi}{6} \approx 0.866 - 0.524 = 0.342$$
   - O'ng chegara: $x = \frac{\pi}{2}$:
     $$f\left(\frac{\pi}{2}\right) = \sin(\pi) - \frac{\pi}{2} = 0 - \frac{\pi}{2} = -\frac{\pi}{2} \approx -1.57$$
5. **Xulosa:**
   - Eng katta qiymat: $\frac{\pi}{2}$ ($x = -\frac{\pi}{2}$ nuqtada)
   - Eng kichik qiymat: $-\frac{\pi}{2}$ ($x = \frac{\pi}{2}$ nuqtada)

---

## 3. Amaliy geometrik optimallashtirish masalasi

**Masala:**
Perimetri $20\text{ metr}$ ga teng bo'lgan to'g'ri to'rtburchaklar ichida eng katta yuzaga ega bo'lganini toping.

**Yechish:**
1. To'rtburchak tomonlarini $x$ va $y$ deylik.
   Perimetr: $2(x + y) = 20 \implies x + y = 10 \implies y = 10 - x$.
2. Tomon uzunligi musbat bo'lishi kerak: $x > 0$ va $10 - x > 0 \implies x \in (0, 10)$ (yoki yopiq holda $[0, 10]$).
3. Yuza funksiyasini tuzamiz:
   $$S(x) = x \cdot y = x(10 - x) = 10x - x^2$$
4. Hosilasini olamiz va 0 ga tenglaymiz:
   $$S'(x) = 10 - 2x = 0 \implies x = 5$$
5. Ikkinchi tomon: $y = 10 - 5 = 5$.
   Demak, eng katta yuzaga ega to'g'ri to'rtburchak bu **kvadrat** bo'lib, uning yuzi $S = 5 \times 5 = 25\text{ m}^2$ ga teng.

---

## ⚠️ Talabalar eng ko'p yo'l qo'yadigan xatolar va tuzoqlar

1. **Topilgan $x$ qiymatini $f'(x)$ ga qo'yib yuborish:**
   Eng keng tarqalgan xato: talaba kritik nuqtani topadi va uni yana hosilaga qo'yadi. Natijada har doim $0$ chiqadi! Esda tuting: eng katta va eng kichik qiymat — bu **funksiyaning o'zining** qiymatidir ($f(x)$ ga qo'yiladi).
2. **Kesmaga kirmaydigan nuqtalarni tashlab yubormaslik:**
   Masalan, kesma $[0, 3]$ berilgan bo'lsa-yu, hosilaning ildizi $x = 5$ chiqsa, uni hisob-kitobga kiritish qo'pol xatodir.
3. **Chegaralarni ($a$ va $b$) tekshirishni unutish:**
   Ko'pchilik faqat hosila 0 bo'lgan nuqtalarni tekshiradi. Ammo aksariyat hollarda eng katta yoki eng kichik qiymat aynan kesma chegarasida yotadi (2-misolimizdagi kabi).

---

## ✏️ Mustaqil yechish uchun amaliy mashqlar va javoblar

1. $f(x) = x^3 - 3x + 5$ funksiyaning $[-2, 0]$ kesmadagi eng katta va eng kichik qiymatlarini toping.
   *Javob:* $\max = f(-1) = 7$, $\min = f(-2) = 3$.
2. $f(x) = x + \frac{4}{x}$ funksiyaning $[1, 4]$ kesmadagi eng katta va eng kichik qiymatlarini toping.
   *Javob:* $\max = f(1) = f(4) = 5$, $\min = f(2) = 4$.
3. Radiusi $R$ bo'lgan doiraga ichki chizilgan to'g'ri to'rtburchaklar ichida eng katta yuzaga ega bo'lganining o'lchamlarini toping.
   *Javob:* Tomonlari $a = b = R\sqrt{2}$ bo'lgan kvadrat ($S_{\max} = 2R^2$).
