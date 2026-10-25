---
title: "Vektorlar va ular ustida chiziqli amallar"
module: "vektorlar-geometriya"
order: 1
description: "Vektor tushunchasi, yo'naltirilgan kesma, vektor koordinatalari, vektorlarni qo'shish (uchburchak va parallelogramm qoidasi), songa ko'paytirish va ortlar."
---

## Kirish: Fizika va geometriya tutashgan joy

Kundalik hayotda biz duch keladigan ko'plab miqdorlar (massa, harorat, vaqt, hajm) faqat bitta son — kattalik (skalyar) bilan to'liq ifodalanadi. Ammo tezlik, tezlanish, kuch, elektr maydon kuchlanganligi kabi miqdorlarni faqat bitta son bilan ifodalab bo'lmaydi: ular **qayerga yo'nalganini** ham bilish shart.

Yo'nalishga va songa (uzunlikka) ega bo'lgan miqdorlar **vektorlar** deb ataladi. Ular kompyuter grafikasi, o'yin dvigatellari (Unity/Unreal), aerodinamika, robototexnika va sun'iy intellekt (vektorli embeddinglar) sohalarining poydevori hisoblanadi.

---

## 1. Vektor ta'rifi va belgilanishi

> **Ta'rif:** Boshlang'ich va oxirgi nuqtalari tartiblangan to'g'ri chiziq kesmasi **yo'naltirilgan kesma** yoki **vektor** deyiladi.

- Agar boshlang'ich nuqtasi $A$, oxiri $B$bo'lsa, vektor$\vec{AB}$yoki kichik lotin harfi bilan$\vec{a}$ deb belgilanadi.
- Vektorning uzunligi (moduli) uning **absolyut qiymati** deyiladi va $\lvert \vec{a} \rvert$yoki$\lvert \vec{AB} \rvert$ kabi yoziladi.
- Boshlang'ich va oxirgi nuqtasi ustma-ust tushgan vektor **nol vektor** ($\vec{0}$) deyiladi. Uning uzunligi nolga teng, yo'nalishi esa aniqlanmagan.
- Uzunligi $1$ ga teng bo'lgan vektor **birlik vektor** (ort) deyiladi.
- Bir to'g'ri chiziqda yoki parallel to'g'ri chiziqlarda yotuvchi vektorlar **kollinear vektorlar** deyiladi ($\vec{a} \parallel \vec{b}$).

---

## 2. Koordinatalar sistemasida vektorlar

Tekislikda $A(x_1, y_1)$va$B(x_2, y_2)$nuqtalar berilgan bo'lsa,$\vec{AB}$ vektorining koordinatalari oxirgi nuqta koordinatalaridan boshlang'ich nuqta koordinatalarini ayirish orqali topiladi:

$$
\vec{AB} = (x_2 - x_1, \, y_2 - y_1)
$$

Fazoda esa $A(x_1, y_1, z_1)$va$B(x_2, y_2, z_2)$ uchun:
$$
\vec{AB} = (x_2 - x_1, \, y_2 - y_1, \, z_2 - z_1)
$$

### Vektor uzunligi (Moduli):
Fazoviy Pifagor teoremasiga binoan, $\vec{a} = (a_x, a_y, a_z)$ vektorining uzunligi:
$$
\lvert \vec{a} \rvert = \sqrt{a_x^2 + a_y^2 + a_z^2}
$$

### Birlik vektor (Normalizatsiya):
Ixtiyoriy noldan farqli $\vec{a}$vektor yo'nalishidagi birlik vektor$\vec{e}_a$ quyidagicha topiladi:
$$
\vec{e}_a = \frac{\vec{a}}{\lvert \vec{a} \rvert} = \left(\frac{a_x}{\lvert \vec{a} \rvert}, \, \frac{a_y}{\lvert \vec{a} \rvert}, \, \frac{a_z}{\lvert \vec{a} \rvert}\right)
$$

---

## 3. Vektorlar ustida chiziqli amallar

### 1. Vektorlarni qo'shish
Geometrik jihatdan:
- **Uchburchak qoidasi:** $\vec{a}$vektorning oxiriga$\vec{b}$ning boshini qo'yamiz.$\vec{a}$ning boshidan$\vec{b}$ning oxiriga yo'nalgan vektor yig'indi$\vec{a} + \vec{b}$ bo'ladi.
- **Parallelogramm qoidasi:** Ikkala vektor umumiy bitta nuqtadan chiqariladi va parallelogramm quriladi. Umumiy boshdan chiquvchi diagonal $\vec{a} + \vec{b}$ ni beradi.

Koordinatalarda:
$$
\vec{a} + \vec{b} = (a_x + b_x, \, a_y + b_y, \, a_z + b_z)
$$

### 2. Vektorlarni ayirish
$$
\vec{a} - \vec{b} = (a_x - b_x, \, a_y - b_y, \, a_z - b_z)
$$
Geometrik ma'nosi: $\vec{b}$vektorning uchidan$\vec{a}$vektorning uchiga yo'nalgan vektor$\vec{a} - \vec{b}$ dir.

### 3. Vektorni songa (skalyarga) ko'paytirish
$$
\lambda \cdot \vec{a} = (\lambda a_x, \, \lambda a_y, \, \lambda a_z)
$$
- Agar $\lambda > 0$bo'lsa, vektor yo'nalishi saqlanadi, uzunligi$\lambda$ marta o'zgaradi.
- Agar $\lambda < 0$ bo'lsa, vektor yo'nalishi qarama-qarshisiga o'zgaradi.
- Agar $\lambda = 0$bo'lsa,$\vec{0}$ vektor hosil bo'ladi.

---

## 4. Vektorlarning kollinearlik sharti

Ikki vektor $\vec{a}$va$\vec{b}$ kollinear (parallel) bo'lishi uchun ularning mos koordinatalari **proporsional** bo'lishi zarur va yetarlidir:

$$
\frac{a_x}{b_x} = \frac{a_y}{b_y} = \frac{a_z}{b_z} = \lambda \iff \vec{a} = \lambda \vec{b}
$$

---

## Amaliy namunaviy misollar

### 1-misol: Vektor koordinatalari va uzunligi
$A(2, -3, 1)$va$B(5, 1, -11)$nuqtalar berilgan.$\vec{AB}$ vektorning koordinatalari va uzunligini toping.

**Yechilishi:**
1. Koordinatalar:
   $$\vec{AB} = (5 - 2, \, 1 - (-3), \, -11 - 1) = (3, \, 4, \, -12)$$
2. Uzunligi:
   $$\lvert \vec{AB} \rvert = \sqrt{3^2 + 4^2 + (-12)^2} = \sqrt{9 + 16 + 144} = \sqrt{169} = 13$$

**Javob:** $\vec{AB} = (3, 4, -12)$, $\lvert \vec{AB} \rvert = 13$.

---

### 2-misol: Chiziqli kombinatsiya va kollinearlik
$\vec{a} = (2, -1, 3)$va$\vec{b} = (-4, m, n)$vektorlar berilgan. Ushbu vektorlar kollinear bo'lishi uchun$m$va$n$ qanday bo'lishi kerak?

**Yechilishi:**
Kollinearlik shartidan foydalanamiz:
$$
\frac{a_x}{b_x} = \frac{a_y}{b_y} = \frac{a_z}{b_z} \implies \frac{2}{-4} = \frac{-1}{m} = \frac{3}{n}
$$
Proporsiya koeffitsiyenti: $\lambda = \frac{2}{-4} = -\frac{1}{2}$.
1. $\frac{-1}{m} = -\frac{1}{2} \implies m = 2$.
2. $\frac{3}{n} = -\frac{1}{2} \implies n = -6$.

**Javob:** $m = 2, \, n = -6$.

---

## Mustaqil yechish uchun mashqlar

1. $\vec{a} = (4, -2, 4)$ vektorining uzunligini va unga mos birlik vektorni ($\vec{e}_a$) toping.
2. $\vec{u} = (1, 3, -2)$va$\vec{v} = (3, 0, 4)$bo'lsa,$\vec{w} = 2\vec{u} - \vec{v}$ vektor koordinatalarini toping.
3. $A(1, 2)$va$B(4, 6)$ nuqtalar orasidagi masofani hisoblang.

<details style="margin-top: 1rem; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); cursor: pointer;">
<summary style="font-weight: 700; color: var(--primary);">Javoblarni tekshirish</summary>

**1-masala:** $\lvert \vec{a} \rvert = \sqrt{16 + 4 + 16} = \sqrt{36} = 6$. Birlik vektor: $\vec{e}_a = \left(\frac{4}{6}, -\frac{2}{6}, \frac{4}{6}\right) = \left(\frac{2}{3}, -\frac{1}{3}, \frac{2}{3}\right)$.

    

**2-masala:** $2\vec{u} = (2, 6, -4)$. $\vec{w} = (2 - 3, 6 - 0, -4 - 4) = (-1, 6, -8)$.

    

**3-masala:** $\vec{AB} = (3, 4) \implies d = \sqrt{3^2 + 4^2} = 5$.

</details>
