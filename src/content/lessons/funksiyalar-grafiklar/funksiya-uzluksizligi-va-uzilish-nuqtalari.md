---
title: "Funksiyaning uzluksizligi va uzilish nuqtalari tasnifi: 1- va 2-tur uzilishlar"
module: "funksiyalar-grafiklar"
order: 12
description: "Nuqtada va oraliqda uzluksizlik ta'rifi, bir tomonlama limitlar (chap va o'ng limit), bartaraf qilinadigan uzilish, 1-tur sakrashli uzilish va 2-tur cheksiz uzilishlar to'liq tahlili hamda grafik misollar."
---

## Kirish: Uzluksizlikning intuitiv va qat'iy matematik ma'nosi

Intuitiv jihatdan funksiyaning uzluksizligi — bu uning grafigini qalamni qog'ozdan uzmasdan chizish mumkinligini bildiradi. Agar grafikda biror joyda uzilish, teshik (bo'shliq) yoki cheksizlikka ketish sodir bo'lsa, bu nuqta **uzilish nuqtasi** deb ataladi.

Biroq matematik tahlilda qat'iy ta'rif talab qilinadi. Chunki kompyuter algoritmlari, muhandislik hisoblari va sun'iy intellekt modellarida har bir nuqtadagi uzluksizlik aniq limitlar tili orqali tekshiriladi.

---

## 1. Funksiyaning nuqtada uzluksizligi ta'rifi

$y = f(x)$ funksiya $x_0$ nuqtada uzluksiz deb ataladi, agar quyidagi **3 ta shart** bir vaqtda bajarilsa:

1. Funksiya $x_0$ nuqtada **aniqlangan** (ya'ni $f(x_0)$ chekli songa teng mavjud);
2. Funksiyaning $x \to x_0$ dagi chekli **limiti mavjud**;
3. Ushbu limit funksiyaning shu nuqtadagi qiymatiga teng:
   $$\lim_{x \to x_0} f(x) = f(x_0)$$

### Bir tomonlama limitlar tili:
Limit mavjud bo'lishi uchun uning chap va o'ng limitlari teng bo'lishi shart. Shuning uchun uzluksizlik shartini quyidagicha yozish mumkin:
$$f(x_0 - 0) = f(x_0 + 0) = f(x_0)$$
Bu yerda:
- $f(x_0 - 0) = \lim_{x \to x_0 - 0} f(x)$ — chap limit;
- $f(x_0 + 0) = \lim_{x \to x_0 + 0} f(x)$ — o'ng limit.

---

## 2. Uzilish nuqtalarining to'liq tasnifi (Klassifikatsiya)

Agar yuqoridagi 3 ta shartdan kamida bittasi buzilsa, $x_0$ nuqta **uzilish nuqtasi** hisoblanadi. Mathprofi va klassik universitet dasturiga ko'ra barcha uzilishlar 3 xil toifaga ajratiladi:

```
                          UZILISH NUQTALARI
                                 │
         ┌───────────────────────┴───────────────────────┐
         ▼                                               ▼
   1-TUR UZILISH                                   2-TUR UZILISH
(Chap va o'ng limitlar chekli!)             (Kamida bitta limit cheksiz: ±∞
         │                                   yoki umuman mavjud emas!)
   ┌─────┴────────────────┐                              │
   ▼                      ▼                              ▼
Bartaraf qilinadigan    Sakrashli                  Asimptotik uzilish
f(x₀-0) = f(x₀+0) ≠ f(x₀) f(x₀-0) ≠ f(x₀+0)        lim = ±∞ (masalan, 1/x)
```

### 1-Toifa: Bartaraf qilinadigan uzilish (Ustranimaya tochka razryva)
- **Sharti:** Chap va o'ng limitlar mavjud, chekli va bir-biriga teng, lekin bu qiymat funksiyaning shu nuqtadagi qiymatiga teng emas yoki funksiya umuman aniqlanmagan:
  $$f(x_0 - 0) = f(x_0 + 0) \neq f(x_0)$$
- **Mohiyati:** Grafikda faqat bitta nuqta "teshik" bo'lib qolgan. Ushbu nuqtadagi qiymatni $f(x_0) = \lim_{x \to x_0} f(x)$ deb aniqlab qo'yish orqali uzilishni "bartaraf qilish" (tuzatish) mumkin!

### 2-Toifa: 1-tur sakrashli uzilish (Razryv 1-go roda / Skachok)
- **Sharti:** Chap va o'ng limitlar mavjud va chekli, lekin ular bir-biriga teng EMAS:
  $$f(x_0 - 0) \neq f(x_0 + 0)$$
- **Sakrash kattaligi:**
  $$h = |f(x_0 + 0) - f(x_0 - 0)|$$
- **Mohiyati:** Grafik bu nuqtada ma'lum bir $h$ masofaga sakrab o'tadi (ko'pincha bo'lakli funksiyalarda uchraydi).

### 3-Toifa: 2-tur uzilish (Razryv 2-go roda)
- **Sharti:** Chap yoki o'ng limitlardan kamida bittasi **cheksizlikka** teng ($\pm\infty$) yoki umuman mavjud emas (masalan, $\sin\frac{1}{x}$).
- **Mohiyati:** Grafik vertikal asimptota bo'ylab cheksizlikka ketadi.

---

## 3. To'liq yechilgan namunaviy misollar

### 1-Misol (Bartaraf qilinadigan uzilish):
Quyidagi funksiyaning uzilish nuqtalarini toping va tasniflang:
$$f(x) = \frac{\sin x}{x}$$

**Yechish:**
1. Funksiya faqat $x = 0$ nuqtada aniqlanmagan (maxraj nol).
2. $x = 0$ nuqtadagi chap va o'ng limitlarni hisoblaymiz (1-ajoyib limit):
   $$\lim_{x \to 0-0} \frac{\sin x}{x} = 1, \quad \lim_{x \to 0+0} \frac{\sin x}{x} = 1$$
3. Chap va o'ng limitlar chekli va teng: $f(0-0) = f(0+0) = 1$. Ammo $f(0)$ mavjud emas.
4. **Xulosa:** $x = 0$ nuqta — **bartaraf qilinadigan uzilish nuqtasi**.
   Agar funksiyani $f(0) = 1$ deb to'ldirsak, u butun sonlar o'qida uzluksiz bo'lib qoladi.

---

### 2-Misol (1-tur sakrashli uzilish — Bo'lakli funksiya):
Quyidagi funksiyaning $x = 1$ nuqtadagi uzluksizligini tekshiring:
$$f(x) = \begin{cases} 2x + 1, & x < 1 \\ x^2 + 4, & x \ge 1 \end{cases}$$

**Yechish:**
1. Nuqtadagi qiymat: $x = 1$ ikkinchi qoidaga tushadi:
   $$f(1) = 1^2 + 4 = 5$$
2. Chap limitni hisoblaymiz ($x < 1$, ya'ni $x \to 1-0$):
   $$f(1 - 0) = \lim_{x \to 1-0} (2x + 1) = 2(1) + 1 = 3$$
3. O'ng limitni hisoblaymiz ($x > 1$, ya'ni $x \to 1+0$):
   $$f(1 + 0) = \lim_{x \to 1+0} (x^2 + 4) = 1^2 + 4 = 5$$
4. Taqqoslaymiz:
   $$f(1 - 0) = 3 \neq f(1 + 0) = 5$$
   Har ikkala limit chekli son, lekin o'zaro teng emas!
5. **Xulosa:** $x = 1$ nuqta — **1-tur sakrashli uzilish nuqtasi**.
   Sakrash kattaligi: $h = |5 - 3| = 2$.

---

### 3-Misol (2-tur cheksiz uzilish):
Quyidagi funksiyaning $x = 2$ nuqtadagi xarakterini aniqlang:
$$f(x) = \frac{1}{x - 2}$$

**Yechish:**
1. $x = 2$ da maxraj nolga teng, funksiya aniqlanmagan.
2. Chap limit ($x \to 2-0$, ya'ni $x < 2$, masalan $x = 1.99$):
   $$\lim_{x \to 2-0} \frac{1}{x - 2} = \frac{1}{-0} = -\infty$$
3. O'ng limit ($x \to 2+0$, ya'ni $x > 2$, masalan $x = 2.01$):
   $$\lim_{x \to 2+0} \frac{1}{x - 2} = \frac{1}{+0} = +\infty$$
4. **Xulosa:** Chap va o'ng limitlar cheksiz bo'lgani uchun $x = 2$ nuqta — **2-tur uzilish nuqtasi** hisoblanadi. $x = 2$ to'g'ri chizig'i vertikal asimptotadir.

---

## 4. Uzluksiz funksiyalarning muhim teoremalari

1. **Bolsano-Koshi teoremasi (Ildiz mavjudligi haqida):**
   Agar $f(x)$ funksiya $[a, b]$ kesmada uzluksiz bo'lib, kesma chegaralarida har xil ishorali qiymatlarni qabul qilsa ($f(a) \cdot f(b) < 0$), u holda kesma ichida kamida bitta shunday $c \in (a, b)$ nuqta topiladiki, unda $f(c) = 0$ bo'ladi.
   *(Bu teorema barcha sonli hisoblash usullarida tenglamalarning ildizini qidirish uchun poydevor hisoblanadi!)*
2. **Oraliq qiymatlar haqidagi teorema:**
   $[a, b]$ kesmada uzluksiz bo'lgan funksiya o'zining eng kichik $m$ va eng katta $M$ qiymatlari orasidagi har qanday oraliq $C \in [m, M]$ qiymatni kamida bir marta qabul qiladi.

---

## ⚠️ Talabalar eng ko'p yo'l qo'yadigan xatolar va tuzoqlar

1. **Chap va o'ng limitda ishorani adashtirish ($1/0$ holati):**
   Ko'p talabalar $\lim_{x \to 0} \frac{1}{x} = \infty$ deb umumiy yozib ketishadi. Chap limit $-\infty$, o'ng limit esa $+\infty$ bo'lishini ko'rsatish shart!
2. **Bo'lakli funksiyalarda chegaraviy tenglikka e'tibor bermaslik:**
   Katta yoki teng ($\ge$) belgisi qaysi qatorda turgan bo'lsa, nuqtadagi $f(x_0)$ qiymat aynan shu formuladan hisoblanishi kerak.
3. **$\operatorname{arctg}\frac{1}{x}$ tipidagi tuzoq:**
   $x \to 0+0$ da $\frac{1}{x} \to +\infty \implies \operatorname{arctg}(+\infty) = \frac{\pi}{2}$.
   $x \to 0-0$ da $\frac{1}{x} \to -\infty \implies \operatorname{arctg}(-\infty) = -\frac{\pi}{2}$.
   Demak, $f(x) = \operatorname{arctg}\frac{1}{x}$ funksiyasi uchun $x = 0$ nuqta 2-tur emas, balki **1-tur sakrashli** uzilish nuqtasidir (chunki $\pm\frac{\pi}{2}$ chekli sonlar)!

---

## ✏️ Mustaqil yechish uchun amaliy mashqlar va javoblar

1. $f(x) = \frac{x^2 - 4}{x - 2}$ funksiyaning $x = 2$ nuqtadagi uzilish turini aniqlang.
   *Javob:* Bartaraf qilinadigan uzilish ($\lim_{x \to 2} f(x) = 4$).
2. $f(x) = \frac{|x|}{x}$ funksiyaning $x = 0$ nuqtadagi uzilish turini va sakrashini toping.
   *Javob:* 1-tur sakrashli uzilish ($f(0-0) = -1, f(0+0) = 1$, sakrash $h = 2$).
3. $f(x) = 2^{\frac{1}{x-3}}$ funksiyaning $x = 3$ nuqtadagi uzilish turini aniqlang.
   *Javob:* 2-tur uzilish (chunki o'ng limit $2^{+\infty} = +\infty$).
