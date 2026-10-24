---
title: "Muavr formulasi va kompleks sondan ildiz chiqarish"
module: "kompleks-sonlar"
order: 4
description: "Avraam de Muavr formulasi, kompleks sondan n-darajali ildiz chiqarish, ildizlarning geometrik muntazam ko'pburchagi va ko'p usulli yechimlar."
---

## Kirish: Katta darajalar va ildizlar siri

Agar bizdan $(1 + i\sqrt{3})^{18}$ sonini hisoblash talab qilinsa, uni oddiy algebraik qavslarni ochish yoki Nyuton binomi orqali yoyib chiqish yuzlab murakkab amallarga olib keladi.

Fransuz-ingliz matematigi Avraam de Muavr (Abraham de Moivre) kompleks sonning trigonometrik va Eyler ko'rsatkichli shaklidan foydalanib, har qanday kompleks sonni istalgan natural (hatto butun) darajaga ko'tarish hamda undan $n$-darajali ildiz chiqarishning qulay formulasini kashf qildi.

---

## 1. Muavr formulasi ($z^n$)

> **Muavr formulasi:**
> Agar $z = r(\cos\varphi + i\sin\varphi)$ kompleks son berilgan bo'lsa, uning $n$-darajasi ($n \in \mathbb{Z}$) quyidagicha hisoblanadi:
>
> 
$$
> z^n = r^n [\cos(n\varphi) + i\sin(n\varphi)]
> 
$$
>
> Eylerning ko'rsatkichli shaklida bu qoida tabiiy daraja xossasidan bevosita kelib chiqadi:
>
> 
$$
> z^n = (r e^{i\varphi})^n = r^n e^{i n\varphi}
> 
$$

### Oltin qoida:
Kompleks sonni $n$-darajaga ko'tarish uchun:
1. Uning **moduli $n$-darajaga oshiriladi**: $r \to r^n$;
2. Uning **argumenti $n$ ga ko'paytiriladi**: $\varphi \to n\varphi$.

---

## 2. Kompleks sondan $n$-darajali ildiz chiqarish

Haqiqiy sonlar sohasida musbat sondan faqat bitta haqiqiy arifmetik ildiz chiqadi ($\sqrt{4} = 2$).
Ammo kompleks sonlar maydonida **Algebraning asosiy teoremasiga** ko'ra, har qanday noldan farqli kompleks son $n$-darajali ildiz ostida **aynan $n$ ta turli qiymatga** ega bo'ladi:

> **Ildiz chiqarish formulasi:**
> Agar $z = r(\cos\varphi + i\sin\varphi)$ bo'lsa:
>
> 
$$
> w_k = \sqrt[n]{z} = \sqrt[n]{r} \left( \cos\frac{\varphi + 2\pi k}{n} + i\sin\frac{\varphi + 2\pi k}{n} \right)
> 
$$
>
> bu yerda $k = 0, 1, 2, \dots, n - 1$.

Agar $k \ge n$ qiymatlar berilsa, trigonometrik funksiyalarning $2\pi$ davriyligi sababli ildizlar yana avvalgi $w_0, w_1, \dots$ qiymatlarni takrorlay boshlaydi.

---

## 3. Ildizlarning ajoyib geometrik xossasi

Bu formuladan ajoyib geometrik haqiqat kelib chiqadi:
1. Barcha $n$ ta ildizning moduli bir xil:
   $$|w_k| = \sqrt[n]{r}$$
   Demak, ularning barchasi markazi $(0, 0)$ nuqtada va radiusi $R = \sqrt[n]{r}$ bo'lgan **bitta umumiy aylanada** yotadi!
2. Qo'shni ildizlar orasidagi burchak farqi:
   $$\Delta \theta = \frac{2\pi}{n}$$
   doimiy bo'lib, aylanani $n$ ta teng bo'lakka bo'ladi.
3. **Xulosa:** Barcha $n$ ta ildiz kompleks tekislikda **muntazam $n$-burchakning uchlarini** hosil qiladi:
   - $n = 3$: teng tomonli uchburchak;
   - $n = 4$: aylanaga ichki chizilgan kvadrat;
   - $n = 6$: muntazam oltiburchak.

---

## Bitta masalani 2 xil usulda yechish va solishtirish

> **Masala:** $z^6 - 1 = 0$ ikki hadli tenglamaning barcha kompleks ildizlarini toping.

### 1-usul: Trigonometrik Muavr ildiz formulasi usuli
Tenglamani $z = \sqrt[6]{1}$ ko'rinishida yozamiz.
1. $z = 1$ ning moduli va argumenti:
   $$r = 1, \qquad \varphi = 0 \implies 1 = 1(\cos 0 + i\sin 0)$$
2. Ildiz chiqarish formulasiga qo'yamiz ($n = 6, k = 0, 1, 2, 3, 4, 5$):
   $$w_k = \sqrt[6]{1} \left( \cos\frac{0 + 2\pi k}{6} + i\sin\frac{0 + 2\pi k}{6} \right) = \cos\frac{\pi k}{3} + i\sin\frac{\pi k}{3}$$
3. Har bir $k$ uchun ildizlarni hisoblaymiz:
   - $k = 0: \quad w_0 = \cos 0 + i\sin 0 = \mathbf{1}$
   - $k = 1: \quad w_1 = \cos\frac{\pi}{3} + i\sin\frac{\pi}{3} = \mathbf{\frac{1}{2} + i\frac{\sqrt{3}}{2}}$
   - $k = 2: \quad w_2 = \cos\frac{2\pi}{3} + i\sin\frac{2\pi}{3} = \mathbf{-\frac{1}{2} + i\frac{\sqrt{3}}{2}}$
   - $k = 3: \quad w_3 = \cos\pi + i\sin\pi = \mathbf{-1}$
   - $k = 4: \quad w_4 = \cos\frac{4\pi}{3} + i\sin\frac{4\pi}{3} = \mathbf{-\frac{1}{2} - i\frac{\sqrt{3}}{2}}$
   - $k = 5: \quad w_5 = \cos\frac{5\pi}{3} + i\sin\frac{5\pi}{3} = \mathbf{\frac{1}{2} - i\frac{\sqrt{3}}{2}}$

Bu 6 ta ildiz birlik aylanaga ichki chizilgan muntazam oltiburchak hosil qiladi!

### 2-usul: Qisqa ko'paytirish formulalari va Ko'phadlarni ko'paytuvchilarga ajratish
Algebraik formulalardan foydalanamiz:
$$
z^6 - 1 = (z^3 - 1)(z^3 + 1) = 0
$$
Kublar ayirmasi va yig'indisi formulalari bo'yicha yoyamiz:
$$
(z - 1)(z^2 + z + 1)(z + 1)(z^2 - z + 1) = 0
$$
Har bir ko'paytuvchini alohida nolga tenglashtiramiz:
1. $z - 1 = 0 \implies \mathbf{z_1 = 1}$
2. $z + 1 = 0 \implies \mathbf{z_2 = -1}$
3. $z^2 + z + 1 = 0 \implies D = 1 - 4 = -3 = 3i^2 \implies \mathbf{z_{3, 4} = -\frac{1}{2} \pm i\frac{\sqrt{3}}{2}}$
4. $z^2 - z + 1 = 0 \implies D = 1 - 4 = -3 = 3i^2 \implies \mathbf{z_{5, 6} = \frac{1}{2} \pm i\frac{\sqrt{3}}{2}}$

Ko'rib turganingizdek, ikkala usul ham mutlaqo bir xil 6 ta ildizni berdi! Ammo yuqori darajalar ($z^{12}, z^{20}$) uchun faqat 1-usul (Muavr formulasi) eng kuchli va universal qurol hisoblanadi.

---

> [!WARNING] Imtihondagi tuzoqlar va ko'p uchraydigan xatoliklar
> 1. **Faqat bitta ildizni topib to'xtab qolish:**
>    Kompleks sondan $n$-darajali ildiz olinganda, javob bitta son bo'lmaydi! U har doim **$n$ ta turli ildiz** beradi ($k = 0, 1, \dots, n-1$).
> 2. **Burchakni $n$ ga bo'lishda $2\pi k$ ni unutish:**
>    $\sqrt[n]{z}$ da argument $\frac{\varphi}{n}$ emas, balki albatta $\frac{\varphi + 2\pi k}{n}$ bo'lishi shart! Aks holda qolgan $n-1$ ta ildiz yo'qolib ketadi.
> 3. **Argumentni noto'g'ri chorakda hisoblash:**
>    Masalan, $z = -1 + i$ sonida $a = -1 < 0, b = 1 > 0$ (2-chorak). Shuning uchun $\varphi = \pi - \frac{\pi}{4} = \frac{3\pi}{4}$ bo'ladi. Agar shunchaki $\arctan(-1) = -\frac{\pi}{4}$ deb olinsa, butun hisob-kitob 4-chorakka adashib ketadi.

---

## Mustaqil yechish uchun amaliy mashqlar

1. Muavr formulasi yordamida $(\sqrt{3} - i)^{12}$ ifodaning qiymatini hisoblang.
2. $\sqrt[4]{-81}$ ning barcha 4 ta kompleks ildizlarini toping va ularning tekislikdagi geometrik shaklini aniqlang.
3. $\left(\frac{1 + i}{\sqrt{2}}\right)^{100}$ ning qiymatini toping.

<details style="margin-top: 1rem; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); cursor: pointer;">
  <summary style="font-weight: 700; color: var(--primary);">👉 Yechimni tekshirish</summary>
  <div style="margin-top: 0.75rem; padding-top: 0.75rem; border-top: 1px solid var(--border-color); line-height: 1.7;">
    <p><strong>1-masala:</strong></p>
    <p>$z = \sqrt{3} - i$. Modul: $r = \sqrt{3 + 1} = 2$. Argument: $\varphi = -\frac{\pi}{6}$ (4-chorak).</p>
    <p>$z^{12} = 2^{12} \left[ \cos\left(12 \cdot \left(-\frac{\pi}{6}\right)\right) + i\sin\left(12 \cdot \left(-\frac{\pi}{6}\right)\right) \right]$.</p>
    <p>$z^{12} = 4096 [\cos(-2\pi) + i\sin(-2\pi)] = 4096(1 + 0) = \mathbf{4096}$.</p>

    <hr style="margin: 0.75rem 0; border: none; border-top: 1px dashed var(--border-color);" />

    <p><strong>2-masala:</strong></p>
    <p>$z = -81 \implies r = 81, \varphi = \pi$.</p>
    <p>$w_k = \sqrt[4]{81}\left(\cos\frac{\pi + 2\pi k}{4} + i\sin\frac{\pi + 2\pi k}{4}\right) = 3\left(\cos\frac{\pi + 2\pi k}{4} + i\sin\frac{\pi + 2\pi k}{4}\right)$.</p>
    <ul>
      <li>$k = 0: 3(\cos\frac{\pi}{4} + i\sin\frac{\pi}{4}) = \frac{3\sqrt{2}}{2} + i\frac{3\sqrt{2}}{2}$</li>
      <li>$k = 1: 3(\cos\frac{3\pi}{4} + i\sin\frac{3\pi}{4}) = -\frac{3\sqrt{2}}{2} + i\frac{3\sqrt{2}}{2}$</li>
      <li>$k = 2: 3(\cos\frac{5\pi}{4} + i\sin\frac{5\pi}{4}) = -\frac{3\sqrt{2}}{2} - i\frac{3\sqrt{2}}{2}$</li>
      <li>$k = 3: 3(\cos\frac{7\pi}{4} + i\sin\frac{7\pi}{4}) = \frac{3\sqrt{2}}{2} - i\frac{3\sqrt{2}}{2}$</li>
    </ul>
    <p><strong>Javob:</strong> $\mathbf{w = \pm\frac{3\sqrt{2}}{2} \pm i\frac{3\sqrt{2}}{2}}$ (radiusi 3 bo'lgan kvadratning uchlari!).</p>

    <hr style="margin: 0.75rem 0; border: none; border-top: 1px dashed var(--border-color);" />

    <p><strong>3-masala:</strong></p>
    <p>$z = \frac{1}{\sqrt{2}} + \frac{i}{\sqrt{2}} = \cos\frac{\pi}{4} + i\sin\frac{\pi}{4} = e^{i\pi/4}$.</p>
    <p>$z^{100} = e^{i \frac{100\pi}{4}} = e^{i 25\pi} = e^{i(24\pi + \pi)} = e^{i\pi} = \mathbf{-1}$.</p>
  </div>
</details>
