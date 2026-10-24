---
title: "Limit nima? Funksiya limitining mohiyati"
module: "limitlar"
order: 1
description: "Matematik analizning eng muhim tushunchasi: nuqtaga cheksiz yaqinlashish, limitning intuitiv va qat'iy ta'rifi hamda amaliy misollar."
---

## Kirish: Matematikada limit nima uchun kerak?

Keling, oddiy bir savoldan boshlaylik: maktab algebrasida biz funksiyaning ma'lum bir nuqtadagi aniq qiymatini hisoblab kelganmiz. Masalan, $f(x) = 2x + 1$ funksiya berilgan bo'lsa, uning $x = 3$ nuqtadagi qiymati $f(3) = 2 \cdot 3 + 1 = 7$ bo'ladi. Bu yerda hech qanday qiyinchilik yo'q.

Biroq oliy matematikada biz tez-tez **"to'g'ridan-to'g'ri hisoblab bo'lmaydigan"**, lekin **"unga istalgancha yaqinlashish mumkin bo'lgan"** holatlarga duch kelamiz.

Quyidagi funksiyani ko'rib chiqaylik:

$$
f(x) = \frac{x^2 - 4}{x - 2}
$$

Agar biz to'g'ridan-to'g'ri $x = 2$ nuqtani qo'ymoqchi bo'lsak:

$$
f(2) = \frac{2^2 - 4}{2 - 2} = \frac{0}{0}
$$

Nolga bo'lish mumkin emas! Demak, $x = 2$ nuqta funksiyaning aniqlanish sohasiga kirmaydi. Ammo savol tug'iladi: agar biz $x$ ni $2$ ga **juda, juda yaqin** qilsak-chi? Funksiya o'zini qanday tutadi?

Jadval tuzib ko'ramiz:

- $x = 1.9 \implies f(1.9) = 3.9$
- $x = 1.99 \implies f(1.99) = 3.99$
- $x = 1.999 \implies f(1.999) = 3.999$
- $x = 2.001 \implies f(2.001) = 4.001$
- $x = 2.01 \implies f(2.01) = 4.01$
- $x = 2.1 \implies f(2.1) = 4.1$

E'tibor bering: $x$ soni $2$ ga yaqinlashgani sari, funksiyaning qiymati shubhasiz **$4$** soniga intilmoqda! Mana shu hodisa fanda **limit** (lotincha *limes* — chegara) deb ataladi.

Matematik tilda bu quyidagicha yoziladi:

$$
\lim_{x \to 2} \frac{x^2 - 4}{x - 2} = 4
$$

---

## Limitning rasmiy ta'rifi (Koshi bo'yicha)

Oliy matematika darslarida limitga fransuz matematigi Ogyusten Koshi tomonidan berilgan qat'iy $\varepsilon - \delta$ ("epsilon-delta") ta'rifi o'rgatiladi.

> **Ta'rif:** Agar ixtiyoriy kichik musbat $\varepsilon > 0$ soni uchun shunday $\delta > 0$ soni topilsaki, $0 < |x - a| < \delta$ tengsizlikni qanoatlantiruvchi barcha $x$ lar uchun:
>
> $$|f(x) - L| < \varepsilon$$
>
> tengsizlik bajarilsa, u holda $L$ soni $f(x)$ funksiyaning $x \to a$ dagi **limiti** deyiladi.

Bu nima degani? Bu degani: siz funksiya qiymatini $L$ dan qanchalik yaqin (masalan, $\varepsilon = 0.0001$ masofada) bo'lishini xohlamang, men har doim $a$ nuqtaning shunday atrofini ($\delta$) topib bera olamanki, uning ichidagi barcha $x$ lar uchun funksiya siz istagan masofadan ham yaqinroq bo'ladi.

---

## Bir tomonlama limitlar: Chap va o'ng limit

Funksiya biror nuqtaga chap tomondan (kichikroq sonlar orqali) yoki o'ng tomondan (kattaroq sonlar orqali) yaqinlashishi mumkin.

1. **Chap tomonlama limit:**
   
$$
   \lim_{x \to a^-} f(x) = L_1
   
$$
2. **O'ng tomonlama limit:**
   
$$
   \lim_{x \to a^+} f(x) = L_2
   
$$

> **Muhim qoida:** Funksiyaning $x \to a$ nuqtada umumiy limiti mavjud bo'lishi uchun uning chap va o'ng limitlari mavjud bo'lishi va **bir-biriga teng bo'lishi shart**:
>
> 
$$
> \lim_{x \to a^-} f(x) = \lim_{x \to a^+} f(x) = L \iff \lim_{x \to a} f(x) = L
> 
$$

Agar chap va o'ng limitlar teng bo'lmasa, funksiyaning u nuqtadagi limiti **mavjud emas** deyiladi.

---

## Amaliy misollar va yechimlar

### 1-misol: Ko'phad funksiyasining limiti
Ushbu limitni hisoblang:

$$
\lim_{x \to 3} (2x^2 - 4x + 5)
$$

**Yechilishi:**
Ko'phad funksiyalar barcha nuqtalarda uzluksizdir, shuning uchun $x$ o'rniga to'g'ridan-to'g'ri $3$ ni qo'yish kifoya:

$$
\lim_{x \to 3} (2x^2 - 4x + 5) = 2(3)^2 - 4(3) + 5 = 2(9) - 12 + 5 = 18 - 12 + 5 = 11
$$

**Javob:** $11$

---

### 2-misol: $\frac{0}{0}$ aniqmaslik va ko'paytuvchilarga ajratish
Ushbu limitni hisoblang:

$$
\lim_{x \to -2} \frac{x^2 - 4}{x + 2}
$$

**Yechilishi:**
To'g'ridan-to'g'ri $x = -2$ qo'ysak, suratda $(-2)^2 - 4 = 0$, maxrajda esa $-2 + 2 = 0$ hosil bo'ladi. Bu $\left[\frac{0}{0}\right]$ ko'rinishidagi aniqmaslikdir.

Suratni qisqa ko'paytirish formulasi orqali ko'paytuvchilarga ajratamiz:
$$x^2 - 4 = (x - 2)(x + 2)$$

Endi ifodani limit ichiga qo'yamiz ($x \neq -2$ bo'lgani sababli qisqartirish mumkin):

$$
\lim_{x \to -2} \frac{(x - 2)(x + 2)}{x + 2} = \lim_{x \to -2} (x - 2) = -2 - 2 = -4
$$

**Javob:** $-4$

---

### 3-misol: Modulli funksiya va limit mavjud emasligi
Ushbu limitni tekshiring:

$$
\lim_{x \to 0} \frac{|x|}{x}
$$

**Yechilishi:**
Modul ta'rifiga ko'ra:
- Agar $x > 0$ bo'lsa, $|x| = x \implies \frac{x}{x} = 1$
- Agar $x < 0$ bo'lsa, $|x| = -x \implies \frac{-x}{x} = -1$

Endi bir tomonlama limitlarni hisoblaymiz:
- O'ng limit: $\lim_{x \to 0^+} \frac{|x|}{x} = \lim_{x \to 0^+} 1 = 1$
- Chap limit: $\lim_{x \to 0^-} \frac{|x|}{x} = \lim_{x \to 0^-} (-1) = -1$

Chap va o'ng limitlar har xil ($1 \neq -1$) bo'lgani sababli, bu nuqtada limit **mavjud emas**.

---

<div style="background: rgba(239, 68, 68, 0.07); border-left: 4px solid #ef4444; padding: 1.25rem 1.5rem; border-radius: 0 var(--radius-md) var(--radius-md) 0; margin: 2rem 0;">
  <h4 style="margin: 0 0 0.75rem 0; color: #ef4444; display: flex; align-items: center; gap: 0.5rem; font-size: 1.1rem; font-weight: 700;">
    <span>⚠️</span> <span>Talabalar eng ko'p yo'l qo'yadigan 3 ta xato (Tuzoqlar):</span>
  </h4>
  <ol style="margin: 0; padding-left: 1.25rem; line-height: 1.7; font-size: 0.95rem;">
    <li><strong>"0 ga bo'lish mumkin emas, demak limit yo'q" deb o'ylash:</strong> $x \to a$ da $x$ hech qachon aynan $a$ ga teng bo'lmaydi, balki unga cheksiz yaqinlashadi. Shu sababli $\frac{0}{0}$ ko'rinishida avval ifodani soddalashtirish (qisqartirish) kerak.</li>
    <li><strong>Bir tomonlama limitlarni tekshirishni unutish:</strong> Modulli yoki bo'lakli funksiyalarda faqat bitta tomondan limit hisoblab xulosa chiqarish xato. Chap va o'ng limitlar teng bo'lmaguncha limit mavjud emas!</li>
    <li><strong>Limit belgisini erta tashlab yuborish:</strong> Agar ifodada hali ham $x$ qatnashayotgan bo'lsa, $\lim$ belgisini yozish shart. Faqat $x$ o'rniga aniq son qo'yilgandan keyingina $\lim$ belgisi tushirib qoldiriladi.</li>
  </ol>
</div>

---

## Mustaqil yechish uchun mashqlar

Quyidagi limitlarni hisoblang va o'z bilimingizni sinab ko'ring:

1. $\lim_{x \to 4} (x^2 - 2x + 3)$
2. $\lim_{x \to 5} \frac{x^2 - 25}{x - 5}$
3. $\lim_{x \to 1} \frac{x^2 + 2x - 3}{x - 1}$

<details style="margin-top: 1rem; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); cursor: pointer;">
  <summary style="font-weight: 700; color: var(--primary);">Mashqlar javoblarini ko'rish</summary>
  <div style="margin-top: 0.75rem; padding-top: 0.75rem; border-top: 1px solid var(--border-color);">
    <p><strong>1-masala:</strong> $4^2 - 2(4) + 3 = 16 - 8 + 3 = 11$</p>
    <p><strong>2-masala:</strong> $\lim_{x \to 5} \frac{(x-5)(x+5)}{x-5} = 5 + 5 = 10$</p>
    <p><strong>3-masala:</strong> $x^2 + 2x - 3 = (x-1)(x+3) \implies \lim_{x \to 1} (x+3) = 1 + 3 = 4$</p>
  </div>
</details>
