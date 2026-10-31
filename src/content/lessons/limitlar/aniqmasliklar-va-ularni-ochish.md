---
title: "Aniqmasliklar va ularni ochish usullari"
module: "limitlar"
order: 3
description: "7 ta asosiy aniqmaslik turi, [0/0], [∞/∞], [∞ - ∞], [0 · ∞], [1^∞] noaniqliklarini ko'paytuvchilarga ajratish, qo'shmasiga ko'paytirish va algebraik usullar bilan ochish."
---

## Kirish: Aniqmaslik o'zi nima?

Matematik analizda oddiy arifmetika qoidalari o'z kuchini yo'qotadigan va javobni to'g'ridan-to'g'ri aytib bo'lmaydigan holatlar **aniqmasliklar** (yoki noaniqliklar) deb ataladi.

Masalan, $\left[\frac{0}{0}\right]$ holatini olaylik:
- Nolni har qanday songa bo'lsa $0$ bo'ladi;
- Noldan farqli har qanday sonni o'ziga bo'lsa $1$ bo'ladi;
- Sonni nolga bo'lganda cheksizlik $\infty$ kelib chiqishi mumkin.

Aslida esa $\left[\frac{0}{0}\right]$ ko'rinishidagi limitning qiymati vaziyatga qarab **istalgan songa**, hatto $0, 5, -\pi$ yoki $\infty$ ga teng bo'lishi mumkin!
Shu sababli bunday vaziyatlarda **"aniqmaslikni ochish"** (algebraik shakl almashtirishlar orqali noaniqlikni keltirib chiqarayotgan ko'paytuvchilarni yo'qotish) talab etiladi.

---

## 1. Matematik analizdagi 7 ta klassik aniqmaslik

| Aniqmaslik | Nomi | Asosiy bartaraf etish usuli |
|---|---|---|
| $\left[ \frac{0}{0} \right]$ | Nolning nolga nisbati | Ko'paytuvchilarga ajratish, qo'shmasiga ko'paytirish, 1-ajoyib limit, Lopital |
| $\left[ \frac{\infty}{\infty} \right]$ | Cheksizlikning cheksizlikka nisbati | Katta darajani qavsdan chiqarish, Lopital qoidasi |
| $[ \infty - \infty ]$| Cheksizliklar ayirmasi | Qo'shmasiga ko'paytirish yoki umumiy maxrajga keltirish $\implies \left[\frac{0}{0}\right]$ |
| $[ 0 \cdot \infty ]$| Nolning cheksizlikka ko'paytmasi | Kasr shakliga o'tkazish: $f \cdot g = \frac{f}{1/g} \implies \left[\frac{0}{0}\right]$ yoki $\left[\frac{\infty}{\infty}\right]$ |
| $[ 1^\infty ]$ | Birning cheksiz darajasi | 2-ajoyib limit ($e$ soni) yoki $\lim u^v = e^{\lim v(u - 1)}$ |
| $[ 0^0 ]$| Nolning nol darajasi | Logarifmlash orqali $[0 \cdot \infty]$ ga keltirish |
| $[ \infty^0 ]$ | Cheksizlikning nol darajasi | Logarifmlash orqali ochiladi |

---

## 2. $\left[ \frac{0}{0} \right]$ aniqmasligini ochishning 3 ta quroli

### A. Ko'paytuvchilarga ajratish va qisqartirish
Agar $x \to a$ da kasrning surati va maxraji nolga aylansa, Bezu teoremasiga ko'ra ikkala ko'phad ham $(x - a)$ ko'paytuvchiga ega bo'ladi.
1. Kvadrat uchhadni ildizlari orqali ajratamiz: $ax^2 + bx + c = a(x - x_1)(x - x_2)$.
2. Umumiy $(x - a)$ hadni qisqartiramiz va limitni bevosita hisoblaymiz.

### B. Qo'shmasiga ko'paytirish (Kvadrat ildizlar uchun)
Agar ifodada $\sqrt{A} - \sqrt{B}$ qatnashsa, surat va maxrajni uning **qo'shmasiga** ($\sqrt{A} + \sqrt{B}$) ko'paytiramiz:
$$
(\sqrt{A} - \sqrt{B})(\sqrt{A} + \sqrt{B}) = A - B
$$
Bu ildizni yo'qotadi va nolga aylantiruvchi had qisqaradi.

### C. Kub ildizlar uchun to'ldiruvchi ko'paytuvchi
Agar ifodada $\sqrt[3]{A} - \sqrt[3]{B}$ bo'lsa, kublar ayirmasi formulasi $(a - b)(a^2 + ab + b^2) = a^3 - b^3$ dan foydalaniladi:
$$
(\sqrt[3]{A} - \sqrt[3]{B})(\sqrt[3]{A^2} + \sqrt[3]{AB} + \sqrt[3]{B^2}) = A - B
$$

---

## 3. $\left[ \frac{\infty}{\infty} \right]$ aniqmasligini ochish qoidasi $x \to \infty$ da ko'phadlarning nisbati:
$$
\lim_{x \to \infty} \frac{a_n x^n + \dots + a_0}{b_m x^m + \dots + b_0}
$$

Bu yerda hisob-kitob qilmasdan ham javobni bir soniyada topish mumkin:
1. **Surat va maxraj darajalari teng bo'lsa ($n = m$):** Limit katta darajalar oldidagi koeffitsiyentlar nisbatiga teng:
   
$$
   \text{Limit} = \frac{a_n}{b_m}
   
$$
2. **Surat darajasi maxrajnikidan kichik bo'lsa ($n < m$):** Maxraj tezroq o'sadi, shuning uchun $\text{Limit} = 0$.
3. **Surat darajasi katta bo'lsa ($n > m$):** Surat tezroq o'sadi, shuning uchun $\text{Limit} = \infty$.

---

## 4. $[ \infty - \infty ]$ aniqmasligini ochish

Ko'pincha bu turdagi limitlar ildizlar ayirmasi $\lim_{x \to \infty} (\sqrt{P(x)} - \sqrt{Q(x)})$ ko'rinishida beriladi.
- Butun ifodani sun'iy ravishda maxraji $1$ bo'lgan kasr deb qaraymiz va surat-maxrajni qo'shmasiga ko'paytirib, $\left[\frac{\infty}{\infty}\right]$ ko'rinishiga keltiramiz.
- Agar kasrlar ayirmasi bo'lsa, umumiy maxrajga keltirish orqali $\left[\frac{0}{0}\right]$ ga keltiriladi.

---

## 5. $[ 1^\infty ]$ aniqmasligini ochish (Eyler formulasining tezkori)

Agar $\lim_{x \to a} u(x) = 1$ va $\lim_{x \to a} v(x) = \infty$ bo'lsa:

$$
\lim_{x \to a} [u(x)]^{v(x)} = e^{\lim_{x \to a} v(x) \cdot [u(x) - 1]}
$$

Bu ajoyib universal formula orqali murakkab darajali-ko'rsatkichli limitlar bitta oddiy limitga aylanadi!

---

## 6. Amaliy misollar va batafsil yechimlar

### 1-misol: Ko'paytuvchilarga ajratish ($\left[\frac{0}{0}\right]$)
Limitni hisoblang:
$$
\lim_{x \to 2} \frac{x^2 - 5x + 6}{x^2 - 4}
$$

**Yechilishi:**
$x = 2$ qo'ysak: $\frac{4 - 10 + 6}{4 - 4} = \left[\frac{0}{0}\right]$.
1. Surat: Viyet bo'yicha $x^2 - 5x + 6 = (x - 2)(x - 3)$.
2. Maxraj: Kvadratlar ayirmasi $x^2 - 4 = (x - 2)(x + 2)$.
3. Qisqartiramiz:
   
$$
   \lim_{x \to 2} \frac{(x - 2)(x - 3)}{(x - 2)(x + 2)} = \lim_{x \to 2} \frac{x - 3}{x + 2} = \frac{2 - 3}{2 + 2} = -\frac{1}{4}
   
$$

**Javob:** $-\frac{1}{4}$

---

### 2-misol: Kvadrat ildizli qo'shmaga ko'paytirish ($\left[\frac{0}{0}\right]$)
Limitni hisoblang:
$$
\lim_{x \to 0} \frac{\sqrt{1 + 4x} - 1}{x}
$$

**Yechilishi:**
$x = 0$ da $\left[\frac{0}{0}\right]$ aniqmaslik. Surat va maxrajni $(\sqrt{1 + 4x} + 1)$ ga ko'paytiramiz:
$$
\lim_{x \to 0} \frac{(\sqrt{1 + 4x} - 1)(\sqrt{1 + 4x} + 1)}{x(\sqrt{1 + 4x} + 1)} = \lim_{x \to 0} \frac{(1 + 4x) - 1}{x(\sqrt{1 + 4x} + 1)}
$$
$$
= \lim_{x \to 0} \frac{4x}{x(\sqrt{1 + 4x} + 1)} = \lim_{x \to 0} \frac{4}{\sqrt{1 + 4x} + 1} = \frac{4}{\sqrt{1} + 1} = \frac{4}{2} = 2
$$

**Javob:** $2$

---

### 3-misol: Cheksizliklar nisbati ($\left[\frac{\infty}{\infty}\right]$)
Limitni hisoblang:
$$
\lim_{x \to \infty} \frac{5x^3 - 2x + 7}{2x^3 + 4x^2 - 1}
$$

**Yechilishi:**
Surat va maxrajning eng yuqori darajasi bir xil: $x^3$.
Surat va maxrajni $x^3$ ga bo'lib chiqamiz:
$$
\lim_{x \to \infty} \frac{5 - \frac{2}{x^2} + \frac{7}{x^3}}{2 + \frac{4}{x} - \frac{1}{x^3}}
$$
$x \to \infty$ da barcha $\frac{c}{x^k} \to 0$ ga intiladi:
$$
= \frac{5 - 0 + 0}{2 + 0 - 0} = \frac{5}{2} = 2.5
$$

**Javob:** $\frac{5}{2}$

---

### 4-misol: Cheksizliklar ayirmasi ($[\infty - \infty]$)
Limitni hisoblang:
$$
\lim_{x \to +\infty} \left( \sqrt{x^2 + 6x} - x \right)
$$

**Yechilishi:**
$x \to +\infty$ da $[\infty - \infty]$ noaniqlik. Ifodani uning qo'shmasiga ko'paytirib va bo'lamiz:
$$
\lim_{x \to +\infty} \frac{(\sqrt{x^2 + 6x} - x)(\sqrt{x^2 + 6x} + x)}{\sqrt{x^2 + 6x} + x}
$$
Suratda kvadratlar ayirmasi: $(x^2 + 6x) - x^2 = 6x$.
$$
\lim_{x \to +\infty} \frac{6x}{\sqrt{x^2(1 + \frac{6}{x})} + x} = \lim_{x \to +\infty} \frac{6x}{x\sqrt{1 + \frac{6}{x}} + x} = \lim_{x \to +\infty} \frac{6}{\sqrt{1 + \frac{6}{x}} + 1}
$$
$x \to \infty$ da $\frac{6}{x} \to 0$:
$$
= \frac{6}{\sqrt{1} + 1} = \frac{6}{2} = 3
$$

**Javob:** $3$

---

### 5-misol: $[1^\infty]$ turidagi darajali limit
Limitni hisoblang:
$$
\lim_{x \to \infty} \left( \frac{x + 3}{x - 1} \right)^{2x}
$$

**Yechilishi:**
Asos $\lim_{x \to \infty} \frac{x + 3}{x - 1} = 1$, daraja $2x \to \infty$. Bu $[1^\infty]$ aniqmasligidir.
Tezkor formulani qo'llaymiz: $\lim u^v = e^{\lim v(u - 1)}$.
Bu yerda $u = \frac{x + 3}{x - 1}$, $v = 2x$.
1. $u - 1$ ni hisoblaymiz:
   $$u - 1 = \frac{x + 3}{x - 1} - 1 = \frac{x + 3 - (x - 1)}{x - 1} = \frac{4}{x - 1}$$
2. $v \cdot (u - 1)$ ning limitini topamiz:
   $$\lim_{x \to \infty} 2x \cdot \frac{4}{x - 1} = \lim_{x \to \infty} \frac{8x}{x - 1} = 8$$
3. Natija:
   $$e^8$$

**Javob:** $e^8$

---

## ⚠️ Talabalar ko'p yo'l qo'yadigan 3 ta jiddiy xato

1. **Limit turini tekshirmasdan darhol qoidalarni qo'llash:**
   > Misolni ko'rishingiz bilan avval nuqtani qo'yib tekshiring! Agar noaniqlik bo'lmasa, hech qanday qo'shmaga ko'paytirish shart emas. Masalan, $\lim_{x \to 2} \frac{x^2 + 1}{x + 1} = \frac{5}{3}$ — bu yerda aniqmaslik yo'q!

2. **$[\infty - \infty] = 0$ deb o'ylash:**
   > Cheksizlik bu aniq son emas, balki jarayondir. Bir cheksizlik ikkinchisidan ancha tezroq o'sishi mumkin. Shuning uchun $\infty - \infty$ hech qachon $0$ ga teng deb yozilmaydi.

3. **$x \to -\infty$ da $\sqrt{x^2}$ dan $x$ chiqarish:**
   > Agar $x \to -\infty$ bo'lsa, $\sqrt{x^2} = |x| = -x$ bo'ladi! Minus ishorani yo'qotib qo'yish butun hisob-kitobni teskari qilib yuboradi.

---

## 💡 Ustozdan maslahat

Kasr-ratsional funksiyalarda ($x \to \infty$ da):
Surat va maxrajdagi eng katta darajalarga qarang. Qolgan barcha kichik darajalarni ("axlat" hadlarni) xayolan o'chirib tashlang!
Masalan: $\lim_{x \to \infty} \frac{7x^4 - 3x^2 + 1}{2x^4 + 99x} \approx \lim_{x \to \infty} \frac{7x^4}{2x^4} = \frac{7}{2}$. Javobni 2 soniyada topasiz!

---

## ✍️ Mustaqil yechish uchun mashqlar

1. $\lim_{x \to 3} \frac{x^2 - 9}{x^2 - 2x - 3}$ limitini hisoblang.
2. $\lim_{x \to 0} \frac{\sqrt{4 + x} - 2}{x}$ ni qo'shmasiga ko'paytirib yeching.
3. $\lim_{x \to \infty} \frac{4x^2 + 7x}{3x^3 - 1}$ nimaga teng?
4. $\lim_{x \to \infty} \left( 1 + \frac{3}{x} \right)^{5x}$ ni hisoblang.

<details style="margin-top: 1rem; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); cursor: pointer;">
<summary style="font-weight: 700; color: var(--primary);">To'liq yechimlar va javoblar</summary>

**1-masala:** $\frac{(x-3)(x+3)}{(x-3)(x+1)} = \frac{3+3}{3+1} = \frac{6}{4} = \frac{3}{2}$.

    

**2-masala:** $\frac{(4+x)-4}{x(\sqrt{4+x}+2)} = \frac{1}{\sqrt{4}+2} = \frac{1}{4}$.

    

**3-masala:** Maxraj darajasi ($x^3$) surat darajasidan ($x^2$) katta. Javob: $0$.

    

**4-masala:** $[1^\infty]$ turi.$e^{\lim 5x \cdot \frac{3}{x}} = e^{15}$.

</details>
