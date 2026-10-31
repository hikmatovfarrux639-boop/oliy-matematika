---
title: "Uzluksiz tasodifiy miqdorlar: Taqsimot funksiyasi F(x), ehtimollik zichligi f(x) va sonli xarakteristikalari"
module: "ehtimollar-nazariyasi"
order: 10
description: "Uzluksiz tasodifiy miqdorlar, taqsimot funksiyasi F(x) xossalari, ehtimollik zichligi f(x), normallash sharti, oraliqqa tushish ehtimoli, matematik kutilma M[X], dispersiya D[X] va o'rtacha kvadratik chetlanish hisoblash."
---

## Kirish: Diskret va uzluksiz tasodifiy miqdorlar farqi

Ehtimollar nazariyasida tasodifiy miqdorlar ikki katta toifaga bo'linadi:
1. **Diskret tasodifiy miqdorlar:** qiymatlari alohida-alohida, sanab chiqish mumkin bo'lgan sonlar (masalan, tanga tashlanganda tushgan gerblar soni: $0, 1, 2$ yoki imtihonda olingan baho: $3, 4, 5$).
2. **Uzluksiz tasodifiy miqdorlar:** ma'lum bir oraliqdagi (masalan, $[a, b]$ kesma yoki butun sonlar o'qida) **har qanday cheksiz ko'p qiymatlarni** qabul qilishi mumkin bo'lgan miqdorlar (masalan, detallarning o'lchami, avtobus kutish vaqti, havo harorati, tana vazni).

Uzluksiz tasodifiy miqdorning eng g'alati va muhim xossasi shundaki: **uning bitta aniq nuqtadagi qiymatni qabul qilish ehtimoli nolga tengdir!**
$$P(X = x_0) = 0$$
Shuning uchun uzluksiz miqdorlar alohida nuqtalar bilan emas, balki **oraliqlar** hamda **ehtimollik zichligi** orqali tavsiflanadi.

---

## 1. Integral taqsimot funksiyasi: $F(x)$

### Ta'rifi:
Har qanday tasodifiy miqdor $X$ uchun uning $x$ haqiqiy sondan kichik qiymat qabul qilish ehtimoli **integral taqsimot funksiyasi** deb ataladi:
$$F(x) = P(X < x) \quad (\text{yoki } P(X \le x))$$

### $F(x)$ ning 4 ta asosiy xossasi:
1. **Qiymatlar sohasi:** Ehtimollik bo'lgani sababli:
   $$0 \le F(x) \le 1$$
2. **Kamaymaydigan funksiya:** Agar $x_1 < x_2$ bo'lsa:
   $$F(x_1) \le F(x_2)$$
3. **Cheksizlikdagi xatti-harakati:**
   $$\lim_{x \to -\infty} F(x) = 0, \quad \lim_{x \to +\infty} F(x) = 1$$
4. **Oraliqqa tushish ehtimoli formulasi:**
   $$P(a \le X < b) = F(b) - F(a)$$

---

## 2. Differensial taqsimot funksiyasi (Ehtimollik zichligi): $f(x)$

### Ta'rifi:
Agar $F(x)$ differensiallanuvchi bo'lsa, uning birinchi tartibli hosilasi **ehtimollik zichligi (plotnost veroyatnosti)** deb ataladi:
$$f(x) = F'(x) = \frac{dF(x)}{dx}$$

Aksincha, zichlik ma'lum bo'lsa, taqsimot funksiyasi integral orqali tiklanadi:
$$F(x) = \int_{-\infty}^x f(t) \, dt$$

### $f(x)$ ning 3 ta asosiy xossasi:
1. **Nomanfiylik:** $f(x) \ge 0$ (ehtimollik zichligi manfiy bo'la olmaydi).
2. **Normallash sharti (Eng muhim shart!):** Ehtimollik zichligi egri chizig'i ostidagi butun yuza $1$ ga teng:
   $$\int_{-\infty}^{+\infty} f(x) \, dx = 1$$
3. **Oraliqqa tushish ehtimoli (Geometrik ma'nosi — yuza):**
   $$P(a \le X \le b) = \int_a^b f(x) \, dx$$

---

## 3. Uzluksiz tasodifiy miqdorning sonli xarakteristikalari

| Xarakteristika | Belgilanishi | Hisoblash formulasi |
| :--- | :--- | :--- |
| **Matematik kutilma** (O'rtacha qiymat) | $M[X]$ yoki $E[X]$ | $$M[X] = \int_{-\infty}^{+\infty} x f(x) \, dx$$ |
| **Ikkinchi boshlang'ich moment** | $M[X^2]$ | $$M[X^2] = \int_{-\infty}^{+\infty} x^2 f(x) \, dx$$ |
| **Dispersiya** (Tarqoqlik o'lchovi) | $D[X]$ yoki $\operatorname{Var}(X)$ | $$D[X] = M[X^2] - (M[X])^2 = \int_{-\infty}^{+\infty} (x - M[X])^2 f(x) \, dx$$ |
| **O'rtacha kvadratik chetlanish** | $\sigma[X]$ | $$\sigma = \sqrt{D[X]}$$ |
| **Moda** ($M_o$) | $M_o$ | $f(x)$ funksiya maksimumga erishadigan nuqta ($f'(x) = 0, f''(x) < 0$) |
| **Mediana** ($M_e$) | $M_e$ | Taqsimot yuzasini teng ikkiga bo'luvchi nuqta: $\int_{-\infty}^{M_e} f(x)dx = 0.5$ |

---

## 4. To'liq yechilgan namunaviy misollar

### 1-Misol (Normallash koeffitsiyenti $C$ ni topish va ehtimollikni hisoblash):
Uzluksiz tasodifiy miqdor $X$ ning ehtimollik zichligi quyidagicha berilgan:
$$f(x) = \begin{cases} C(4 - x^2), & x \in [0, 2] \\ 0, & x \notin [0, 2] \end{cases}$$
Toping:
1. Noma'lum $C$ koeffitsiyentni;
2. Taqsimot funksiyasi $F(x)$ ni;
3. $P(1 \le X \le 2)$ ehtimollikni.

**Yechish:**
1. **Normallash shartidan $C$ ni topamiz:**
   $$\int_{-\infty}^{+\infty} f(x) \, dx = 1 \implies \int_0^2 C(4 - x^2) \, dx = 1$$
   $$C \left[ 4x - \frac{x^3}{3} \right]_0^2 = 1 \implies C \left( 4(2) - \frac{8}{3} \right) = 1$$
   $$C \left( 8 - \frac{8}{3} \right) = C \cdot \frac{16}{3} = 1 \implies C = \frac{3}{16}$$
   Demak, $f(x) = \frac{3}{16}(4 - x^2)$ ($x \in [0, 2]$).

2. **$F(x)$ ni tuzamiz:**
   - $x < 0$ da: $F(x) = 0$.
   - $0 \le x \le 2$ da:
     $$F(x) = \int_0^x \frac{3}{16}(4 - t^2) \, dt = \frac{3}{16} \left[ 4t - \frac{t^3}{3} \right]_0^x = \frac{3}{16}\left(4x - \frac{x^3}{3}\right) = \frac{12x - x^3}{16}$$
   - $x > 2$ da: $F(x) = 1$.
   Shunday qilib:
   $$F(x) = \begin{cases} 0, & x < 0 \\ \frac{12x - x^3}{16}, & 0 \le x \le 2 \\ 1, & x > 2 \end{cases}$$

3. **Oraliqqa tushish ehtimoli:**
   $$P(1 \le X \le 2) = F(2) - F(1) = 1 - \frac{12(1) - 1^3}{16} = 1 - \frac{11}{16} = \frac{5}{16} = 0.3125$$

---

### 2-Misol ($M[X]$ va $D[X]$ ni hisoblash):
Yuqoridagi 1-misoldagi tasodifiy miqdor uchun matematik kutilma $M[X]$ va dispersiya $D[X]$ ni hisoblang.

**Yechish:**
1. **Matematik kutilma ($M[X]$):**
   $$M[X] = \int_0^2 x \cdot \frac{3}{16}(4 - x^2) \, dx = \frac{3}{16} \int_0^2 (4x - x^3) \, dx$$
   $$M[X] = \frac{3}{16} \left[ 2x^2 - \frac{x^4}{4} \right]_0^2 = \frac{3}{16} \left( 2(4) - \frac{16}{4} \right) = \frac{3}{16}(8 - 4) = \frac{3}{16} \cdot 4 = \frac{3}{4} = 0.75$$

2. **Ikkinchi boshlang'ich moment ($M[X^2]$):**
   $$M[X^2] = \int_0^2 x^2 \cdot \frac{3}{16}(4 - x^2) \, dx = \frac{3}{16} \int_0^2 (4x^2 - x^4) \, dx$$
   $$M[X^2] = \frac{3}{16} \left[ \frac{4x^3}{3} - \frac{x^5}{5} \right]_0^2 = \frac{3}{16} \left( \frac{32}{3} - \frac{32}{5} \right) = \frac{3}{16} \cdot 32 \left(\frac{1}{3} - \frac{1}{5}\right) = 6 \cdot \frac{2}{15} = \frac{12}{15} = \frac{4}{5} = 0.8$$

3. **Dispersiya ($D[X]$):**
   $$D[X] = M[X^2] - (M[X])^2 = 0.8 - (0.75)^2 = 0.8 - 0.5625 = 0.2375 = \frac{19}{80}$$

4. **O'rtacha kvadratik chetlanish ($\sigma$):**
   $$\sigma = \sqrt{0.2375} \approx 0.487$$

---

## ⚠️ Talabalar eng ko'p yo'l qo'yadigan xatolar va tuzoqlar

1. **$F(x)$ va $f(x)$ ni chalkashtirish:**
   Ehtimollik zichligi $f(x)$ 1 dan katta bo'lishi mumkin! (Masalan, $x \in [0, 0.1]$ da $f(x) = 10$). Lekin taqsimot funksiyasi $F(x)$ hech qachon 1 dan katta bo'la olmaydi ($0 \le F(x) \le 1$).
2. **$F(x)$ ni tuzishda quyi chegarani $0$ deb olish xatosi:**
   Agar funksiya $x \in [1, 3]$ da berilgan bo'lsa, integrallash $0$ dan emas, $1$ dan boshlanishi kerak: $F(x) = \int_1^x f(t) dt$. Aks holda o'zgarmas son xato chiqadi.
3. **Dispersiya formulasida kvadratni unutish:**
   $D[X] = M[X^2] - (M[X])^2$. Ko'pchilik $M[X^2]$ ni hisoblab, shuning o'zini dispersiya deb qoldiradi. $(M[X])^2$ ni ayirish shart!

---

## ✏️ Mustaqil yechish uchun amaliy mashqlar va javoblar

1. $f(x) = C x$ ($x \in [0, 4]$) ehtimollik zichligi berilgan. $C$ koeffitsiyentni toping.
   *Javob:* $\int_0^4 Cx dx = C \cdot 8 = 1 \implies C = \frac{1}{8}$.
2. Ko'rsatkichli taqsimot zichligi $f(x) = 2e^{-2x}$ ($x \ge 0$) uchun matematik kutilma va dispersiyani toping.
   *Javob:* $M[X] = \frac{1}{\lambda} = \frac{1}{2} = 0.5$, $D[X] = \frac{1}{\lambda^2} = \frac{1}{4} = 0.25$.
3. Agar $F(x) = \frac{x^2}{9}$ ($x \in [0, 3]$) bo'lsa, $P(1 < X < 2)$ ehtimollikni hisoblang.
   *Javob:* $F(2) - F(1) = \frac{4}{9} - \frac{1}{9} = \frac{3}{9} = \frac{1}{3}$.
