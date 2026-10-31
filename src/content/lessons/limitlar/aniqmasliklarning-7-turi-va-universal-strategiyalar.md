---
title: "Aniqmasliklarning 7 ta turi va ularni ochishning universal strategiyalari"
description: "[0/0], [inf/inf], [0*inf], [inf-inf], [1^inf], [0^0], [inf^0] aniqmasliklarini tahlil qilish va yechishning barcha usullari."
module: "limitlar"
order: 15
---

## 📌 Kirish va Geometrik/Fizik Ma'no

Matematik analiz darslarida talabalar eng ko'p to'qnash keladigan holat — bu hisoblash natijasida to'g'ridan-to'g'ri son chiqmasdan, o'rniga "g'alati" ifodalar hosil bo'lishidir. Masalan: $\frac{0}{0}$, $\frac{\infty}{\infty}$, $0 \cdot \infty$, $\infty - \infty$, $1^\infty$, $0^0$, $\infty^0$.

Bunday ifodalar matematikada **aniqmasliklar (noaniqliklar)** deb ataladi. Ko'pchilik talabalar: *"Nega $0 \cdot \infty = 0$ emas?"* yoki *"Nega $1^\infty = 1$ emas?"* deb so'rashadi. Buning fizik va matematik mohiyati shundaki: bu ifodalardagi "0", "1" yoki "$\infty$" qat'iy sonlar emas, balki **o'zgaruvchi miqdorlarning intilish chegaralaridir**.

Masalan, $f(x) \cdot g(x)$ ko'paytmada agar $f(x) \to 0$ bo'lib, $g(x) \to \infty$ bo'lsa, ularning o'rtasida shiddatli poyga kechadi: $f(x)$ butun ifodani nolga tortadi, $g(x)$ esa cheksizlikka tortadi. Kim g'olib chiqishi (nolmi, cheksizlikmi yoki mutlaqo boshqa aniq sonmi) faqatgina ushbu funksiyalarning yaqinlashish tezliklariga bog'liq!

---

## 📐 Asosiy Nazariya, Qoidalar va Teoremalar

### 1. Aniqmasliklarning 7 ta klassik turi va ularning tasnifi

Aniqmasliklar ikkita katta guruhga bo'linadi:

1. **Algebraik aniqmasliklar (4 ta):**
   - $\left[\frac{0}{0}\right]$ — ikkita cheksiz kichik miqdor nisbati;
   - $\left[\frac{\infty}{\infty}\right]$ — ikkita cheksiz katta miqdor nisbati;
   - $[0 \cdot \infty]$ — cheksiz kichik va cheksiz katta miqdor ko'paytmasi;
   - $[\infty - \infty]$ — ikkita bir xil ishorali cheksiz katta miqdor ayirmasi.

2. **Darajali-ko'rsatkichli aniqmasliklar (3 ta):**
   - $[1^\infty]$ — 1 ga intiluvchi asosning cheksiz katta darajasi ($e$ soniga olib keladi);
   - $[0^0]$ — nolga intiluvchi asosning cheksiz kichik darajasi;
   - $[\infty^0]$ — cheksiz katta asosning cheksiz kichik darajasi.

### 2. Aniqmaslik bo'lmagan ("aldamchi") holatlar
Talabalar ko'pincha oddiy arifmetik limitlarni noaniqlik deb adashadilar. Quyidagilar **aniqmaslik emas**:
- $\frac{0}{\infty} = 0$, $\frac{\infty}{0} = \infty$, $\frac{C}{0} = \infty$ ($C \neq 0$), $\frac{C}{\infty} = 0$;
- $\infty + \infty = \infty$, $(+\infty) \cdot (+\infty) = +\infty$;
- $0^\infty = 0$, $0^{-\infty} = \infty$;
- $2^\infty = \infty$, $2^{-\infty} = 0$.

### 3. Universal transformatsiya algoritmlari

Har qanday noaniqlikni ochishning bosh maqsadi — uni bazaviy $\left[\frac{0}{0}\right]$ yoki $\left[\frac{\infty}{\infty}\right]$ shakliga keltirishdir.

```
                   [0^0], [inf^0], [1^inf]
                             |  y = e^(ln y)
                             v
                        [0 * inf]
                       /         \
          f / (1/g)   /           \   g / (1/f)
                     v             v
                  [0 / 0]       [inf / inf]
                     ^             ^
                      \           /
                       \         /  umumiy maxraj / qo'shma
                       [inf - inf]
```

#### A. $[0 \cdot \infty]$ turini keltirish:
$$f(x) \cdot g(x) = \frac{f(x)}{1 / g(x)} \implies \left[\frac{0}{0}\right] \quad \text{yoki} \quad f(x) \cdot g(x) = \frac{g(x)}{1 / f(x)} \implies \left[\frac{\infty}{\infty}\right]$$

#### B. $[\infty - \infty]$ turini keltirish:
- Kasrlar ayirmasi bo'lsa: umumiy maxrajga keltiriladi $\implies \left[\frac{0}{0}\right]$.
- Ildizlar ayirmasi bo'lsa: qo'shmasiga ko'paytirib bo'linadi $\implies \left[\frac{\infty}{\infty}\right]$ yoki $\left[\frac{0}{0}\right]$.

#### C. $[1^\infty], [0^0], [\infty^0]$ turlarini keltirish:
Asosiy logarifmik ayniyatdan foydalaniladi:
$$[u(x)]^{v(x)} = e^{\ln\left([u(x)]^{v(x)}\right)} = e^{v(x) \cdot \ln u(x)}$$
Bunda darajadagi limit $v(x) \cdot \ln u(x)$ ifodasi avtomatik ravishda $[0 \cdot \infty]$ ko'rinishiga keladi!

Xususan, $[1^\infty]$ uchun maxsus qisqa formula:
$$\lim [u(x)]^{v(x)} = e^{\lim [u(x) - 1] \cdot v(x)}$$

---

## 📝 Qadamma-qadam Yechilgan Amaliy Misollar

### 1-misol: $[\infty - \infty]$ turidagi irratsional ifoda
Ushbu limitni hisoblang:

$$
\lim_{x \to +\infty} \left(\sqrt{x^2 + 4x + 1} - \sqrt{x^2 - 2x}\right)
$$

**Yechilishi:**
1. $x \to +\infty$ da ikkala ildiz ham $+\infty$ ga intiladi, demak $[\infty - \infty]$ aniqmaslik mavjud.
2. Ifodani uning qo'shmasiga ko'paytirib, bo'lamiz:
   $$(a - b)(a + b) = a^2 - b^2$$

$$
\lim_{x \to +\infty} \frac{(\sqrt{x^2 + 4x + 1})^2 - (\sqrt{x^2 - 2x})^2}{\sqrt{x^2 + 4x + 1} + \sqrt{x^2 - 2x}}
$$

3. Qavslarni ochamiz:
   $$(x^2 + 4x + 1) - (x^2 - 2x) = 6x + 1$$
4. Hosil bo'lgan ifoda $\left[\frac{\infty}{\infty}\right]$ ko'rinishiga keldi:

$$
\lim_{x \to +\infty} \frac{6x + 1}{\sqrt{x^2\left(1 + \frac{4}{x} + \frac{1}{x^2}\right)} + \sqrt{x^2\left(1 - \frac{2}{x}\right)}}
$$

5. Surat va maxrajni $x$ ga bo'lamiz ($\sqrt{x^2} = x$, chunki $x > 0$):

$$
\lim_{x \to +\infty} \frac{6 + \frac{1}{x}}{\sqrt{1 + \frac{4}{x} + \frac{1}{x^2}} + \sqrt{1 - \frac{2}{x}}} = \frac{6 + 0}{\sqrt{1 + 0 + 0} + \sqrt{1 - 0}} = \frac{6}{1 + 1} = 3
$$

**Javob:** $3$

---

### 2-misol: $[0 \cdot \infty]$ turidagi logarifmik limit
Ushbu limitni hisoblang:

$$
\lim_{x \to 0^+} x^2 \ln x
$$

**Yechilishi:**
1. $x \to 0^+$ da $x^2 \to 0$, $\ln x \to -\infty$. Bu $[0 \cdot \infty]$ aniqmaslikdir.
2. $x^2$ ni maxrajga $1/x^2$ qilib tushiramiz:

$$
\lim_{x \to 0^+} \frac{\ln x}{\frac{1}{x^2}} \implies \left[\frac{-\infty}{+\infty}\right]
$$

3. Lopital qoidasini qo'llaymiz (surat va maxrajdan alohida hosila olamiz):
   $$(\ln x)' = \frac{1}{x}, \quad \left(\frac{1}{x^2}\right)' = -\frac{2}{x^3}$$
4. Nisbatni soddalashtiramiz:

$$
\lim_{x \to 0^+} \frac{\frac{1}{x}}{-\frac{2}{x^3}} = \lim_{x \to 0^+} \left(-\frac{x^3}{2x}\right) = \lim_{x \to 0^+} \left(-\frac{x^2}{2}\right) = 0
$$

**Javob:** $0$

---

### 3-misol: $[1^\infty]$ turidagi trigonometrik limit
Ushbu limitni hisoblang:

$$
\lim_{x \to 0} (\cos x)^{\frac{1}{x^2}}
$$

**Yechilishi:**
1. $x \to 0$ da $\cos x \to 1$, daraja $\frac{1}{x^2} \to +\infty$. Bizda $[1^\infty]$ noaniqlik mavjud.
2. Universal formulani qo'llaymiz: $\lim u^v = e^{\lim (u - 1)v}$.
   $$L = e^{\lim_{x \to 0} (\cos x - 1) \cdot \frac{1}{x^2}}$$
3. Darajadagi limitni qaraymiz:
   $$\lim_{x \to 0} \frac{\cos x - 1}{x^2} = \lim_{x \to 0} \frac{-(1 - \cos x)}{x^2}$$
4. Ekvivalentliklar jadvalidan ma'lumki, $1 - \cos x \sim \frac{x^2}{2}$:
   $$\lim_{x \to 0} \frac{-\frac{x^2}{2}}{x^2} = -\frac{1}{2}$$
5. Demak, umumiy limit: $e^{-1/2} = \frac{1}{\sqrt{e}}$.

**Javob:** $\frac{1}{\sqrt{e}}$

---

### 4-misol: $[0^0]$ turidagi limit
Ushbu limitni hisoblang:

$$
\lim_{x \to 0^+} (\sin x)^x
$$

**Yechilishi:**
1. $x \to 0^+$ da $\sin x \to 0$ va daraja $x \to 0$. Bu $[0^0]$ aniqmaslik.
2. Ifodani eksponenta orqali yozamiz:
   $$(\sin x)^x = e^{x \ln(\sin x)}$$
3. Darajadagi limitni alohida hisoblaymiz:
   $$\lim_{x \to 0^+} x \ln(\sin x) \implies [0 \cdot (-\infty)]$$
4. $x$ ni maxrajga $1/x$ ko'rinishida tushiramiz:
   $$\lim_{x \to 0^+} \frac{\ln(\sin x)}{1/x} \implies \left[\frac{-\infty}{\infty}\right]$$
5. Lopital qoidasini qo'llaymiz:
   $$\lim_{x \to 0^+} \frac{\frac{\cos x}{\sin x}}{-\frac{1}{x^2}} = \lim_{x \to 0^+} \left( -\cos x \cdot \frac{x^2}{\sin x} \right)$$
6. $x \to 0$ da $\sin x \sim x$ va $\cos 0 = 1$:
   $$\lim_{x \to 0^+} \left( -1 \cdot \frac{x^2}{x} \right) = \lim_{x \to 0^+} (-x) = 0$$
7. Demak, dastlabki limit: $e^0 = 1$.

**Javob:** $1$

---

## ⚠️ Talabalar Ko'p Yo'l Qo'yadigan Xatolar (Tipik tuzoqlar)

1. **"1 ning har qanday darajasi 1" qoidasini xato qo'llash:**
   > ⛔ **Xato:** $\lim_{x \to 0} (1 + x)^{1/x} = 1^{\infty} = 1$.
   > 
   > 💡 **Sabab:** $1^{\infty} = 1$ faqat asos aynan $1$ bo'lgandagina to'g'ri. Agar asos $1$ ga intilayotgan, lekin $1$ dan biroz farq qiluvchi o'zgaruvchi bo'lsa, cheksiz ko'p ko'paytirish natijasida son o'sib ketishi mumkin (masalan, $e \approx 2.718$).

2. **Lopital qoidasini tekshirmasdan qo'llash:**
   Lopital qoidasi **faqat va faqat** $\left[\frac{0}{0}\right]$ yoki $\left[\frac{\infty}{\infty}\right]$ ko'rinishlarida ishlaydi. Agar talaba $[0 \cdot \infty]$ yoki $[\infty - \infty]$ holatida darhol hosila olsa, butunlay xato natija oladi.

3. **Kasrlarni ayirishda umumiy maxrajga keltirmasdan cheksizliklarni ayirib yuborish:**
   $\lim_{x \to 0} \left(\frac{1}{x} - \frac{1}{\sin x}\right) = \infty - \infty = 0$ deyish qat'iyan man etiladi! Avval umumiy maxraj $\frac{\sin x - x}{x \sin x}$ ga keltirilib, $\left[\frac{0}{0}\right]$ shaklida yechiladi.

---

## 🎯 Mustaqil Yechish Uchun Masalalar

1. $[\infty - \infty]$ turidagi limitni hisoblang:
   $$\lim_{x \to 1} \left( \frac{1}{x - 1} - \frac{2}{x^2 - 1} \right)$$
2. $[0 \cdot \infty]$ turidagi limitni hisoblang:
   $$\lim_{x \to 0^+} \sqrt{x} \ln x$$
3. $[1^\infty]$ turidagi limitni hisoblang:
   $$\lim_{x \to 0} (1 + \sin 3x)^{\frac{1}{x}}$$
4. $[\infty^0]$ turidagi limitni hisoblang:
   $$\lim_{x \to +\infty} (x)^{\frac{1}{x}}$$

<details style="margin-top: 1rem; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); cursor: pointer;">
<summary style="font-weight: 700; color: var(--primary);">Mashqlar javoblarini ko'rish</summary>

**1-masala:**
Umumiy maxraj: $\frac{(x + 1) - 2}{x^2 - 1} = \frac{x - 1}{(x - 1)(x + 1)} = \frac{1}{x + 1}$.
$$\lim_{x \to 1} \frac{1}{x + 1} = \frac{1}{2}$$

**2-masala:**
$\lim_{x \to 0^+} \frac{\ln x}{x^{-1/2}} = \left[\frac{-\infty}{\infty}\right]$. Lopital bo'yicha: $\frac{1/x}{-\frac{1}{2}x^{-3/2}} = -2\sqrt{x} \to 0$. Javob: $0$.

**3-masala:**
$\lim_{x \to 0} (1 + \sin 3x)^{1/x} = e^{\lim_{x \to 0} \frac{\sin 3x}{x}} = e^3$. Javob: $e^3$.

**4-masala:**
$x^{1/x} = e^{\frac{\ln x}{x}}$. Lopital bo'yicha daraja: $\lim_{x \to \infty} \frac{1/x}{1} = 0$.
Dastlabki limit: $e^0 = 1$. Javob: $1$.

</details>

---

## 💡 Xulosa va Imtihon Maslahatlari

- Har qanday limitni hisoblashni doimo **nuqtani qo'yib ko'rib, aniqmaslik turini aniqlashdan** boshlang. Noaniqlik turini yozmasdan turib yechimni boshlash eng ko'p ball olib qo'yilishiga sabab bo'ladi.
- Darajali-ko'rsatkichli aniqmaslik ($[1^\infty], [0^0], [\infty^0]$) ko'rishingiz bilan darhol $e^{\ln(\dots)}$ eksponentaga o'tishni odat qiling.
- $[1^\infty]$ bo'lsa, tezkor $e^{\lim (u-1)v}$ formulasi vaqtni 3 barobar tejaydi.
