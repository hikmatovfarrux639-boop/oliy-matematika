---
title: "Operatsion hisob va Laplas almashtirishi"
module: "kompleks-sonlar"
order: 6
description: "Operatsion hisob asoslari, Laplas almashtirishi, siljitish teoremalari, konvolyutsiya, tasvirni differensiallash va Koshi masalalarini algebraik yechish."
---

## Kirish: Differensial tenglamani oddiy algebraik tenglamaga aylantirish mo'jizasi

Klassik matematik analizda differensial tenglamalarni yechish ko'p bosqichli og'ir mehnatni talab qiladi: bir jinsli tenglama yechiladi, xarakteristik tenglama ildizlari topiladi, o'ng tomon bo'yicha maxsus yechim tanlanadi, integrallash o'zgarmaslari $C_1, C_2$ kiritiladi va nihoyat boshlang'ich shartlar qo'yilib chiziqli sistema yechiladi.

Biroq XIX asr oxirida ingliz muhandisi **Oliver Xevisayd (Oliver Heaviside)** va buyuk fransuz matematigi **Pyer-Simon Laplas** tamal toshini qo'ygan **Operatsion hisob** bu jarayonni butunlay o'zgartirdi:
> U differensial tenglamani barcha hosilalari va boshlang'ich shartlari bilan birga **oddiy maktab algebrasidagi tenglamaga** aylantirib beradi!
> Siz oddiy algebraik tenglamani yechib $Y(p)$ ni topasiz, so'ngra tayyor jadval orqali javobni tiklaysiz.

Ushbu usul bugungi kunda elektrotexnika (zanjirlar tahlili), avtomatik boshqaruv nazariyasi, robototexnika, radiofizika va tebranishlar mexanikasining rasmiy tiliga aylangan.

---

## 1. Laplas almashtirishining qat'iy ta'rifi

$t \ge 0$ vaqtda aniqlangan, uzluksiz (yoki bo'lakli-uzluksiz) va eksponensial o'sishdan oshmaydigan ($|f(t)| \le M e^{s_0 t}$) funksiya **original (asl nusxa)** deyiladi.

Ushbu funksiyaning **Laplas tasviri** $F(p)$ (bu yerda $p = s + i\sigma$ — kompleks o'zgaruvchi) quyidagi xosmas integral orqali aniqlanadi:

$$
F(p) = \mathcal{L}\{f(t)\} = \int_0^{\infty} f(t) e^{-pt} \, dt
$$

Belgilanishi:
$$
f(t) \fallingdotseq F(p) \quad \text{yoki} \quad F(p) \risingdotseq f(t)
$$

---

## 2. Laplas almashtirishining asosiy xossalari va teoremalari

1. **Chiziqlilik (Superpozitsiya):**
   $$
   \alpha f(t) + \beta g(t) \fallingdotseq \alpha F(p) + \beta G(p)
   $$
2. **Tasvirda siljitish (So'nish teoremasi):**
   $$
   e^{at} f(t) \fallingdotseq F(p - a)
   $$
3. **Originalda siljitish (Kechikish / Kechikuvchi impuls teoremasi):**
   $$
   f(t - \tau) \cdot \eta(t - \tau) \fallingdotseq e^{-p\tau} F(p) \quad (\tau > 0)
   $$
4. **Hosilaning tasviri (Asosiy qurol!):**
   $$
   f'(t) \fallingdotseq p F(p) - f(0)
   $$
   $$
   f''(t) \fallingdotseq p^2 F(p) - p f(0) - f'(0)
   $$
   $$
   f^{(n)}(t) \fallingdotseq p^n F(p) - p^{n-1} f(0) - p^{n-2} f'(0) - \dots - f^{(n-1)}(0)
   $$
   > [!IMPORTANT]
   > Hosila olish amali kompleks o'zgaruvchi $p$ ga oddiy ko'paytirishga aylanadi! Koshi masalasining boshlang'ich shartlari ($f(0), f'(0)$) esa formulaning o'ziga avtomatik kirib ketadi.
5. **Integralning tasviri:**
   $$
   \int_0^t f(\tau) \, d\tau \fallingdotseq \frac{F(p)}{p}
   $$
6. **Tasvirni differensiallash (Ko'paytirish qoidasi):**
   $$
   t \cdot f(t) \fallingdotseq -F'(p) = -\frac{d}{dp} F(p)
   $$
   $$
   t^n \cdot f(t) \fallingdotseq (-1)^n \frac{d^n}{dp^n} F(p)
   $$
7. **Originalni $t$ ga bo'lish (Tasvirni integrallash):**
   $$
   \frac{f(t)}{t} \fallingdotseq \int_p^{\infty} F(q) \, dq
   $$

---

## 3. Originallar va Tasvirlarning to'liq ma'lumotnoma jadvali

| T/r | Original $f(t)$ ($t \ge 0$) | Tasvir $F(p)$ |
|---|---|---|
| 1 | $\eta(t) = 1$ (Xevisayd birlik sakrashi) | $\frac{1}{p}$ |
| 2 | $t$ | $\frac{1}{p^2}$ |
| 3 | $t^n$ ($n \in \mathbb{N}$) | $\frac{n!}{p^{n+1}}$ |
| 4 | $e^{at}$ | $\frac{1}{p - a}$ |
| 5 | $t \cdot e^{at}$ | $\frac{1}{(p - a)^2}$ |
| 6 | $\sin(\omega t)$ | $\frac{\omega}{p^2 + \omega^2}$ |
| 7 | $\cos(\omega t)$ | $\frac{p}{p^2 + \omega^2}$ |
| 8 | $e^{at} \sin(\omega t)$ | $\frac{\omega}{(p - a)^2 + \omega^2}$ |
| 9 | $e^{at} \cos(\omega t)$ | $\frac{p - a}{(p - a)^2 + \omega^2}$ |
| 10 | $\operatorname{sh}(\omega t)$ (giperbolik sinus) | $\frac{\omega}{p^2 - \omega^2}$ |
| 11 | $\operatorname{ch}(\omega t)$ (giperbolik kosinus) | $\frac{p}{p^2 - \omega^2}$ |
| 12 | $t \cdot \sin(\omega t)$ | $\frac{2\omega p}{(p^2 + \omega^2)^2}$ |
| 13 | $t \cdot \cos(\omega t)$ | $\frac{p^2 - \omega^2}{(p^2 + \omega^2)^2}$ |
| 14 | $\delta(t)$ (Dirak delta funksiyasi) | $1$ |

---

## 4. Differensial tenglamalarni yechishning 5 bosqichli algoritmi

1. **1-bosqich:** Differensial tenglamadagi har bir hadning Laplas tasviriga o'tiladi ($y \to Y(p)$, $y' \to pY - y(0)$, $y'' \to p^2 Y - py(0) - y'(0)$).
2. **2-bosqich:** Noma'lum $Y(p)$ ga nisbatan hosil bo'lgan **oddiy algebraik tenglama** yechilib, $Y(p)$ ifodalanadi.
3. **3-bosqich:** Hosil bo'lgan $Y(p)$ kasr-ratsional funksiya nomaqbul ildizlar bo'yicha **oddiy kasrlar yig'indisiga** yoyiladi (aniqmas koeffitsiyentlar usuli).
4. **4-bosqich:** Jadvaldan foydalanib, har bir oddiy kasr uchun uning originali topiladi (teskari Laplas almashtirishi $\mathcal{L}^{-1}$).
5. **5-bosqich:** Original $y(t)$ funksiya yoziladi va tekshiriladi.

---

## 5. Qadamma-qadam to'liq yechilgan amaliy misollar

### 1-misol: Koshi masalasi (2-tartibli bir jinsli bo'lmagan DT)

**Masala:** Ushbu Koshi masalasini operatsion hisob usuli bilan yeching:
$$
y'' - 3y' + 2y = 4e^{3t}, \quad y(0) = 2, \quad y'(0) = 5
$$

#### Yechish:

**1-qadam. Tasvirlarga o'tamiz:**
- $y(t) \fallingdotseq Y(p)$
- $y'(t) \fallingdotseq p Y(p) - y(0) = p Y(p) - 2$
- $y''(t) \fallingdotseq p^2 Y(p) - p y(0) - y'(0) = p^2 Y(p) - 2p - 5$
- O'ng tomon: $4e^{3t} \fallingdotseq 4 \cdot \frac{1}{p - 3} = \frac{4}{p - 3}$

**2-qadam. Operator tenglamasini tuzamiz:**
$$
(p^2 Y - 2p - 5) - 3(p Y - 2) + 2Y = \frac{4}{p - 3}
$$
$Y(p)$ qatnashgan hadlarni birlashtiramiz:
$$
Y(p) (p^2 - 3p + 2) - 2p - 5 + 6 = \frac{4}{p - 3}
$$
$$
Y(p) (p - 1)(p - 2) - 2p + 1 = \frac{4}{p - 3}
$$
Ozod hadlarni o'ng tomonga o'tkazamiz:
$$
Y(p) (p - 1)(p - 2) = 2p - 1 + \frac{4}{p - 3} = \frac{(2p - 1)(p - 3) + 4}{p - 3} = \frac{2p^2 - 7p + 7}{p - 3}
$$
$Y(p)$ ni topamiz:
$$
Y(p) = \frac{2p^2 - 7p + 7}{(p - 1)(p - 2)(p - 3)}
$$

**3-qadam. Oddiy kasrlarga ajratamiz:**
$$
\frac{2p^2 - 7p + 7}{(p - 1)(p - 2)(p - 3)} = \frac{A}{p - 1} + \frac{B}{p - 2} + \frac{C}{p - 3}
$$
Koeffitsiyentlarni Hevisayd qoplash (yashirish) qoidasi bilan tez topamiz:
- $A$ uchun ($p = 1$):
  $$A = \frac{2(1)^2 - 7(1) + 7}{(1 - 2)(1 - 3)} = \frac{2 - 7 + 7}{(-1)(-2)} = \frac{2}{2} = \mathbf{1}$$
- $B$ uchun ($p = 2$):
  $$B = \frac{2(2)^2 - 7(2) + 7}{(2 - 1)(2 - 3)} = \frac{8 - 14 + 7}{(1)(-1)} = \frac{1}{-1} = \mathbf{-1}$$
- $C$ uchun ($p = 3$):
  $$C = \frac{2(3)^2 - 7(3) + 7}{(3 - 1)(3 - 2)} = \frac{18 - 21 + 7}{(2)(1)} = \frac{4}{2} = \mathbf{2}$$

Demak:
$$
Y(p) = \frac{1}{p - 1} - \frac{1}{p - 2} + \frac{2}{p - 3}
$$

**4-qadam. Originalga qaytamiz:**
Jadvalga ko'ra $\frac{1}{p - a} \risingdotseq e^{at}$:
$$
y(t) = e^t - e^{2t} + 2e^{3t}
$$

**5-qadam. Boshlang'ich shartlarni tekshiramiz:**
- $y(0) = e^0 - e^0 + 2e^0 = 1 - 1 + 2 = 2$ (To'g'ri!)
- $y'(t) = e^t - 2e^{2t} + 6e^{3t} \implies y'(0) = 1 - 2 + 6 = 5$ (To'g'ri!)

**Javob:** $y(t) = e^t - e^{2t} + 2e^{3t}$.

---

### 2-misol: Tebranish tenglamasi va so'nuvchi tebranishlar

**Masala:** $y'' + 4y' + 13y = 0, \quad y(0) = 3, \; y'(0) = -6$ tenglamani yeching.

#### Yechish:
1. Tasvirlarga o'tamiz:
   $$
   (p^2 Y - 3p - (-6)) + 4(p Y - 3) + 13Y = 0
   $$
   $$
   (p^2 + 4p + 13) Y - 3p + 6 - 12 = 0 \implies (p^2 + 4p + 13) Y = 3p + 6
   $$
2. $Y(p)$ ni topamiz:
   $$
   Y(p) = \frac{3p + 6}{p^2 + 4p + 13}
   $$
3. Maxrajda to'la kvadrat ajratamiz: $p^2 + 4p + 13 = (p + 2)^2 + 9 = (p + 2)^2 + 3^2$.
   Suratni ham $(p + 2)$ ga moslaymiz: $3p + 6 = 3(p + 2)$.
   $$
   Y(p) = 3 \cdot \frac{p + 2}{(p + 2)^2 + 3^2}
   $$
4. Siljitish teoremasiga binoan ($\frac{p}{p^2 + 3^2} \risingdotseq \cos(3t)$):
   $$
   y(t) = 3 e^{-2t} \cos(3t)
   $$

**Javob:** $y(t) = 3 e^{-2t} \cos(3t)$ (So'nuvchi harmonik tebranish).

---

## 6. Talabalar yo'l qo'yadigan tuzoqlar

> [!WARNING] Imtihonda ehtiyot bo'ling!
> 1. **Boshlang'ich shartlar ishorasi:** $y'' \fallingdotseq p^2 Y - p y(0) - y'(0)$ formulasida har ikkala had oldida **minus** turadi. Agar $y'(0) = -6$ bo'lsa, $-(-6) = +6$ bo'ladi!
> 2. **O'ng tomondagi o'zgarmas sonni tasvirga o'tkazishni unutish:** Agar o'ng tomonda $5$ soni tursa, ko'pchilik uni operator tenglamasida ham $5$ deb yozadi. Bu xato! O'zgarmas son $5 \fallingdotseq \frac{5}{p}$ ga o'tishi shart!
> 3. **Oddiy kasrlarga ajratishda maxraj darajasi:** Agar maxrajda karrali ko'paytuvchi bo'lsa (masalan, $(p-1)^2$), uni $\frac{A}{p-1} + \frac{B}{(p-1)^2}$ ko'rinishida yoyish kerak.

---

## 7. Mustaqil yechish uchun amaliy mashqlar

Operatsion hisob usulida yeching:

1. $y' + 4y = 8, \quad y(0) = 3$
   - *Javob:* $Y(p) = \frac{3p + 8}{p(p + 4)} = \frac{2}{p} + \frac{1}{p + 4} \implies y(t) = 2 + e^{-4t}$.

2. $y'' + 16y = 0, \quad y(0) = 0, \; y'(0) = 8$
   - *Javob:* $Y(p) = \frac{8}{p^2 + 16} = 2 \cdot \frac{4}{p^2 + 4^2} \implies y(t) = 2\sin(4t)$.

3. $y'' - y = e^{2t}, \quad y(0) = 0, \; y'(0) = 0$
   - *Javob:* $Y(p) = \frac{1}{(p-1)(p+1)(p-2)} \implies y(t) = \frac{1}{3} e^{2t} - \frac{1}{2} e^t + \frac{1}{6} e^{-t}$.
