---
title: "Qator yig'indisini hisoblash va teleskopik qatorlar"
module: "qatorlar"
order: 6
description: "Xususiy yig'indilar ketma-ketligi, teleskopik qatorlar usuli, sodda kasrlarga yoyish, geometrik qatorlar hamda darajali qatorlarni differensiallash/integrallash orqali qator yig'indisini topish."
---

## Kirish: Qator nafaqat yaqinlashadi, balki uning aniq qiymati bor!

Ko'pincha oliy matematika darslarida asosiy e'tibor qatorning yaqinlashishini tekshirishga (Dalamber, Koshi, integral alomatlar) qaratiladi. Lekin muhandis, iqtisodchi yoki fizik uchun eng muhim savol boshqa: **"Ushbu qatorning yig'indisi aynan nechaga teng?"**

Cheksiz sondagi hadlarni qo'shib, chekli bitta aniq son chiqarish — matematik analizning eng sehrli tomonlaridan biridir.

Ushbu darsda biz talabalar eng ko'p qiynaladigan, lekin mohiyatini tushungach juda oson bo'lgan **teleskopik qatorlar** usulini va darajali qatorlar yordamida qator yig'indisini hisoblash san'atini o'rganamiz.

---

## 1. Qator yig'indisi nima? ($S_n$ tushunchasi)

$\sum_{n=1}^{\infty} a_n = a_1 + a_2 + a_3 + \dots$ sonli qator berilgan bo'lsin.
Uning dastlabki $n$ ta hadi yig'indisi **$n$-xususiy yig'indi** deyiladi:
$$
S_n = a_1 + a_2 + \dots + a_n
$$
Agar $n \to \infty$ da $S_n$ ning chekli limiti mavjud bo'lsa, bu limit qatorning **yig'indisi $S$** deb ataladi:
$$
S = \lim_{n \to \infty} S_n
$$

---

## 2. Teleskopik qatorlar (Qisqaruvchi qatorlar usuli)

Agar qatorning umumiy hadi $a_n$ ni ikkita ketma-ket ifodaning ayirmasi ko'rinishida tasvirlash mumkin bo'lsa:
$$
a_n = b_n - b_{n+1}
$$
bunday qator **teleskopik qator** deyiladi.
Bunda $S_n$ yig'indini yozganimizda barcha oraliq hadlar o'zaro qarama-qarshi ishoralar bilan qisqarib ketadi (xuddi yig'iladigan dengiz teleskopi yoki trubasi kabi!):
$$
S_n = (b_1 - b_2) + (b_2 - b_3) + (b_3 - b_4) + \dots + (b_n - b_{n+1}) = b_1 - b_{n+1}
$$
Qator yig'indisi esa shunchaki:
$$
S = \lim_{n\to\infty} S_n = b_1 - \lim_{n\to\infty} b_{n+1}
$$

```
               Teleskopik qatorning qisqarish sxemasi
  (b_1 - b_2) + (b_2 - b_3) + (b_3 - b_4) + ... + (b_n - b_{n+1})
        \___/       \___/       \___/
       = 0         = 0         = 0
  Natijada faqat burchaklardagi hadlar qoladi:  S_n = b_1 - b_{n+1}
```

---

## 3. Darajali qatorlarni differensiallash va integrallash orqali yig'indi topish

Ko'plab murakkab sonli qatorlarni bevosita $S_n$ orqali hisoblab bo'lmaydi. Masalan, $\sum_{n=1}^\infty \frac{n}{2^n}$.
Bunday hollarda mashhur geometrik progressiya darajali qatoridan foydalaniladi:
$$
\sum_{n=0}^{\infty} x^n = \frac{1}{1-x} \quad (|x| < 1)
$$
Ushbu qatorni yaqinlashish oralig'ida hadma-had differensiallash yoki integrallash mumkin:
1. **Differensiallash orqali:**
   
$$
   \left( \sum_{n=0}^\infty x^n \right)' = \sum_{n=1}^\infty n x^{n-1} = \left(\frac{1}{1-x}\right)' = \frac{1}{(1-x)^2}
   
$$
   Har ikki tomonni $x$ ga ko'paytirsak:
   
$$
   \sum_{n=1}^\infty n x^n = \frac{x}{(1-x)^2}
   
$$
2. **Integrallash orqali:**
   
$$
   \int_0^x \sum_{n=0}^\infty (-t)^n dt = \sum_{n=1}^\infty \frac{(-1)^{n-1} x^n}{n} = \ln(1+x)
   
$$

---

## 4. Masalalarni 2 xil usulda tahlil qilish

### 1-masala: Qator yig'indisini hisoblash
Ushbu qator yig'indisini toping:
$$
S = \sum_{n=1}^\infty \frac{n}{3^n} = \frac{1}{3} + \frac{2}{9} + \frac{3}{27} + \frac{4}{81} + \dots
$$

#### 1-usul: Arifmetik-geometrik progressiya ayirmasi usuli
Xususiy yig'indini yozamiz:
$$
S_n = \frac{1}{3} + \frac{2}{3^2} + \frac{3}{3^3} + \dots + \frac{n}{3^n}
$$
Ikkala tomonni $\frac{1}{3}$ ga ko'paytiramiz:
$$
\frac{1}{3} S_n = \frac{1}{3^2} + \frac{2}{3^3} + \dots + \frac{n-1}{3^n} + \frac{n}{3^{n+1}}
$$
Birinchi tenglikdan ikkinchisini hadma-had ayiramiz:
$$
S_n - \frac{1}{3}S_n = \frac{1}{3} + \left(\frac{2}{3^2} - \frac{1}{3^2}\right) + \left(\frac{3}{3^3} - \frac{2}{3^3}\right) + \dots + \left(\frac{n}{3^n} - \frac{n-1}{3^n}\right) - \frac{n}{3^{n+1}}
$$
$$
\frac{2}{3} S_n = \frac{1}{3} + \frac{1}{3^2} + \frac{1}{3^3} + \dots + \frac{1}{3^n} - \frac{n}{3^{n+1}}
$$
O'rtadagi hadlar maxraji $q = \frac{1}{3}$ bo'lgan geometrik progressiya:
$$
\frac{2}{3} S_n = \frac{\frac{1}{3}(1 - (1/3)^n)}{1 - 1/3} - \frac{n}{3^{n+1}} = \frac{1}{2}\left(1 - \frac{1}{3^n}\right) - \frac{n}{3^{n+1}}
$$
$n \to \infty$ da limit olamiz:
$$
\frac{2}{3} S = \lim_{n\to\infty} \left[ \frac{1}{2}\left(1 - \frac{1}{3^n}\right) - \frac{n}{3^{n+1}} \right] = \frac{1}{2}(1 - 0) - 0 = \frac{1}{2}
$$
$$
S = \frac{1}{2} \cdot \frac{3}{2} = \frac{3}{4}
$$

#### 2-usul: Darajali qator hosilasi orqali (2 qatorda yechim)
Biz bilamizki:
$$
\sum_{n=1}^\infty n x^n = \frac{x}{(1-x)^2} \quad (|x| < 1)
$$
Ushbu formulaga to'g'ridan-to'g'ri $x = \frac{1}{3}$ qiymatni qo'yamiz:
$$
S = \sum_{n=1}^\infty n \left(\frac{1}{3}\right)^n = \frac{\frac{1}{3}}{\left(1 - \frac{1}{3}\right)^2} = \frac{\frac{1}{3}}{\left(\frac{2}{3}\right)^2} = \frac{\frac{1}{3}}{\frac{4}{9}} = \frac{1}{3} \cdot \frac{9}{4} = \frac{3}{4}
$$
Natija aynan $\frac{3}{4}$! Darajali qator usuli qanchalik kuchli va tez ekanligini ko'rdingiz.

---

### 2-masala: Teleskopik qator
Ushbu qator yig'indisini toping:
$$
\sum_{n=1}^\infty \frac{1}{n(n+2)}
$$

**Yechish:**
Umumiy hadni noma'lum koeffitsiyentlar usuli bilan sodda kasrlarga ajratamiz:
$$
\frac{1}{n(n+2)} = \frac{1}{2}\left(\frac{1}{n} - \frac{1}{n+2}\right)
$$
Dastlabki bir nechta hadni yozib chiqamiz:
$$
S_n = \frac{1}{2} \left[ \left(1 - \frac{1}{3}\right) + \left(\frac{1}{2} - \frac{1}{4}\right) + \left(\frac{1}{3} - \frac{1}{5}\right) + \left(\frac{1}{4} - \frac{1}{6}\right) + \dots + \left(\frac{1}{n-1} - \frac{1}{n+1}\right) + \left(\frac{1}{n} - \frac{1}{n+2}\right) \right]
$$
E'tibor bering: $\frac{1}{3}, \frac{1}{4}, \dots, \frac{1}{n}$ hadlari to'liq qisqarib ketadi!
Faqat boshidagi ikkita musbat had va oxiridagi ikkita manfiy had qoladi:
$$
S_n = \frac{1}{2} \left( 1 + \frac{1}{2} - \frac{1}{n+1} - \frac{1}{n+2} \right) = \frac{1}{2} \left( \frac{3}{2} - \frac{1}{n+1} - \frac{1}{n+2} \right)
$$
$n \to \infty$ da limit olamiz:
$$
S = \lim_{n\to\infty} S_n = \frac{1}{2} \left( \frac{3}{2} - 0 - 0 \right) = \frac{3}{4}
$$

**Javob:** $S = \frac{3}{4}$.

---

> [!WARNING] Imtihondagi tuzoqlar va ko'p uchraydigan xatoliklar
> 1. **Teleskopik qisqarishda qoladigan hadlar soni:** Agar maxrajda $n(n+k)$ bo'lsa, qator boshida $k$ ta musbat had va oxirida $k$ ta manfiy had qoladi. Talabalar doim faqat bitta 1-had qoladi deb o'ylab (masalan, $k=2$ bo'lganda $\frac{1}{2}$ ni unutib) xato qilishadi.
> 2. **Darajali qatorda $n=0$ va $n=1$ indekslari:** Formulalarda yig'indi $n=0$ dan boshlanadimi yoki $n=1$ danmi, qat'iy nazorat qiling. Aks holda ozod had hisobga kirmay qolib, natija $1$ ga farq qiladi.

---

## Mustaqil yechish uchun mashqlar

### 1-mashq
Ushbu qator yig'indisini teleskopik usulda toping:
$$
\sum_{n=1}^\infty \frac{1}{(2n-1)(2n+1)}
$$

<details>
<summary>👉 Yechimni tekshirish</summary>

**Yechish:**
Kasrga ajratamiz:
$$
\frac{1}{(2n-1)(2n+1)} = \frac{1}{2}\left(\frac{1}{2n-1} - \frac{1}{2n+1}\right)
$$
$S_n = \frac{1}{2}\left[ (1 - \frac{1}{3}) + (\frac{1}{3} - \frac{1}{5}) + \dots + (\frac{1}{2n-1} - \frac{1}{2n+1}) \right] = \frac{1}{2}\left(1 - \frac{1}{2n+1}\right)$.
$n \to \infty$ da: $S = \frac{1}{2}(1 - 0) = \frac{1}{2}$.

**Javob:** $S = \frac{1}{2}$.
</details>

### 2-mashq
Ushbu sonli qator yig'indisini darajali qator yoyilmasi orqali toping:
$$
\sum_{n=1}^\infty \frac{(-1)^{n-1}}{n \cdot 2^n} = \frac{1}{2} - \frac{1}{2 \cdot 4} + \frac{1}{3 \cdot 8} - \dots
$$

<details>
<summary>👉 Yechimni tekshirish</summary>

**Yechish:**
$\ln(1+x)$ ning Makloren qatori:
$$
\ln(1+x) = \sum_{n=1}^\infty \frac{(-1)^{n-1} x^n}{n} \quad (-1 < x \le 1)
$$
$x = \frac{1}{2}$ qo'yamiz:
$$
\sum_{n=1}^\infty \frac{(-1)^{n-1} (1/2)^n}{n} = \ln\left(1 + \frac{1}{2}\right) = \ln\left(\frac{3}{2}\right)
$$

**Javob:** $\ln\left(\frac{3}{2}\right) \approx 0.4055$.
</details>
