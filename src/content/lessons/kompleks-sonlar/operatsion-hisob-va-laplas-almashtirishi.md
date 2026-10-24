---
title: "Operatsion hisob va Laplas almashtirishi"
module: "kompleks-sonlar"
order: 6
description: "Operatsion hisob asoslari, Laplas almashtirishi, original va tasvir, hosila va integralning tasviri, Laplas almashtirishi yordamida Koshi masalasini va differensial tenglamalarni algebraik yechish usuli."
---

## Kirish: Differensial tenglamani oddiy tenglamaga aylantirish sehr-jodusi

Differensial tenglamalarni yechish qiyin va uzoq mehnat talab qiladi: bir jinsli tenglama yechiladi, xarakteristik tenglama ildizlari topiladi, o'ng tomon bo'yicha maxsus yechim tanlanadi, boshlang'ich shartlar qo'yiladi...

Lekin **Operatsion hisob (Laplas almashtirishi)** bu jarayonni butunlay o'zgartiradi:
> U differensial tenglamani (hosilalari bilan birga) oddiy 7-sinf darajasidagi **algebraik tenglamaga** aylantirib beradi!
> Siz oddiy algebraik tenglamani yechasiz, so'ngra jadval orqali javobni tiklaysiz.

Bu usul elektrotexnika, avtomatika, radioinjiniring va kibernetikada eng asosiy vosita hisoblanadi.

---

## 1. Laplas almashtirishi nima?

$t \ge 0$ vaqtda aniqlangan $f(t)$ funksiya (unga **original** deyiladi) berilgan bo'lsin.
Ushbu funksiyaning **Laplas tasviri** $F(p)$ (bu yerda $p = s + i\sigma$ — kompleks o'zgaruvchi) quyidagi xosmas integral bilan aniqlanadi:

$$
F(p) = \mathcal{L}\{f(t)\} = \int_0^{\infty} f(t) e^{-pt} \, dt
$$

Belgilanishi:
$$
f(t) \fallingdotseq F(p) \quad \text{yoki} \quad F(p) \risingdotseq f(t)
$$

---

## 2. Asosiy elementar funksiyalarning Laplas tasvirlari jadvali

| Original $f(t)$ ($t \ge 0$) | Tasvir $F(p)$ |
|---|---|
| $1$ (birlik bosqich) | $\frac{1}{p}$ |
| $t$ | $\frac{1}{p^2}$ |
| $t^n$ | $\frac{n!}{p^{n+1}}$ |
| $e^{at}$ | $\frac{1}{p - a}$ |
| $\sin(\omega t)$ | $\frac{\omega}{p^2 + \omega^2}$ |
| $\cos(\omega t)$ | $\frac{p}{p^2 + \omega^2}$ |
| $e^{at} \sin(\omega t)$ | $\frac{\omega}{(p - a)^2 + \omega^2}$ |
| $e^{at} \cos(\omega t)$ | $\frac{p - a}{(p - a)^2 + \omega^2}$ |

---

## 3. Eng muhim qoida: Hosilaning tasviri

Laplas almashtirishining butun kuchi aynan mana shu teoremada:

$$
f'(t) \fallingdotseq p F(p) - f(0)
$$
$$
f''(t) \fallingdotseq p^2 F(p) - p f(0) - f'(0)
$$
$$
f'''(t) \fallingdotseq p^3 F(p) - p^2 f(0) - p f'(0) - f''(0)
$$

> [!IMPORTANT]
> **Ko'ryapsizmi?** Hosila olish amali shunchaki $p$ ga ko'paytirishga aylanadi!
> Va eng muhimi — Koshi masalasining boshlang'ich shartlari ($y(0), y'(0)$) avtomatik ravishda formulaning ichiga joylashib ketadi!

---

## 4. Differensial tenglamalarni yechish algoritmi

1. Tenglamadagi har bir hadning Laplas tasviriga o'tamiz ($y(t) \to Y(p)$, $y' \to pY - y(0)$, $y'' \to p^2 Y - py(0) - y'(0)$).
2. $Y(p)$ ga nisbatan hosil bo'lgan **oddiy algebraik tenglamani** yechamiz va $Y(p)$ ni topamiz.
3. Topilgan $Y(p)$ kasr-ratsional funksiyani **oddiy kasrlarga ajratamiz**.
4. Jadvaldan foydalanib, original $y(t)$ funksiyaga qaytamiz (teskari Laplas almashtirishi).
5. Javob tayyor! Hech qanday qo'shimcha o'zgarmaslarni aniqlash shart emas.

---

## 5. To'liq yechilgan namunaviy masalalar

### 1-misol: 1-tartibli tenglama (Koshi masalasi)
**Shart:** $y' + 2y = 4, \quad y(0) = 1$ tenglamani operatsion usulda yeching.

**Yechish:**
1. Tasvirlarga o'tamiz:
   * $y(t) \fallingdotseq Y(p)$
   * $y'(t) \fallingdotseq pY(p) - y(0) = pY(p) - 1$
   * $4 \fallingdotseq \frac{4}{p}$
2. Operator tenglamasini tuzamiz:
   $$
   (pY(p) - 1) + 2Y(p) = \frac{4}{p}
   $$
3. $Y(p)$ ni topamiz:
   $$
   Y(p)(p + 2) = 1 + \frac{4}{p} = \frac{p + 4}{p}
   $$
   $$
   Y(p) = \frac{p + 4}{p(p + 2)}
   $$
4. Oddiy kasrlarga yoyamiz:
   $$
   \frac{p + 4}{p(p + 2)} = \frac{A}{p} + \frac{B}{p + 2}
   $$
   * $p = 0 \implies A = \frac{4}{2} = 2$
   * $p = -2 \implies B = \frac{-2 + 4}{-2} = -1$
   $$
   Y(p) = \frac{2}{p} - \frac{1}{p + 2}
   $$
5. Jadvaldan originalga o'tamiz:
   * $\frac{2}{p} \risingdotseq 2 \cdot 1 = 2$
   * $\frac{1}{p + 2} \risingdotseq e^{-2t}$
   $$
   y(t) = 2 - e^{-2t}
   $$
**Javob:** $\mathbf{y(t) = 2 - e^{-2t}}$

---

### 2-misol: 2-tartibli tebranish tenglamasi
**Shart:** $y'' + 9y = 0, \quad y(0) = 2, \; y'(0) = 6$ tenglamani yeching.

**Yechish:**
1. Tasvirlar:
   * $y'' \fallingdotseq p^2 Y(p) - p y(0) - y'(0) = p^2 Y(p) - 2p - 6$
   * $9y \fallingdotseq 9 Y(p)$
   * $0 \fallingdotseq 0$
2. Operator tenglamasi:
   $$
   p^2 Y(p) - 2p - 6 + 9Y(p) = 0
   $$
   $$
   (p^2 + 9) Y(p) = 2p + 6
   $$
3. $Y(p)$ ni topamiz:
   $$
   Y(p) = \frac{2p + 6}{p^2 + 9} = 2 \cdot \frac{p}{p^2 + 3^2} + 2 \cdot \frac{3}{p^2 + 3^2}
   $$
4. Jadvaldan darhol ko'rinadi:
   * $\frac{p}{p^2 + 3^2} \risingdotseq \cos(3t)$
   * $\frac{3}{p^2 + 3^2} \risingdotseq \sin(3t)$
5. Demak:
   $$
   y(t) = 2\cos(3t) + 2\sin(3t)
   $$
**Javob:** $\mathbf{y(t) = 2\cos(3t) + 2\sin(3t)}$

---

## ⚠️ Imtihondagi tuzoqlar (Tipik talaba xatolari)

> [!WARNING]
> 1. **Boshlang'ich shartlar ishorasida adashish:** $y'' \fallingdotseq p^2 Y - py(0) - y'(0)$ formulasida har ikkala boshlang'ich shart oldida **minus ishora** turishiga e'tibor bering!
> 2. **Kasrni noto'g'ri yoyish:** $Y(p)$ ni oddiy kasrlarga ajratishda shoshilmang — maxrajdagi ildizlarni to'g'ri tekshiring.

---

## ✍️ O'zingizni sinab ko'ring (Mustaqil mashq)

**Masala:** $y' - 3y = 0, \quad y(0) = 5$ tenglamani Laplas usulida yeching.

<details>
<summary>👉 To'liq yechimni ko'rish (Tekshirish)</summary>

**Yechish bosqichlari:**
1. Tasvirga o'tamiz:
   $(pY(p) - 5) - 3Y(p) = 0$.
2. $Y(p)$ ni topamiz:
   $(p - 3)Y(p) = 5 \implies Y(p) = \frac{5}{p - 3}$.
3. Jadvalga ko'ra $\frac{1}{p - 3} \risingdotseq e^{3t}$.
4. Original:
   $$
   y(t) = 5e^{3t}
   $$

**Javob:** $\mathbf{y(t) = 5e^{3t}}$
</details>
