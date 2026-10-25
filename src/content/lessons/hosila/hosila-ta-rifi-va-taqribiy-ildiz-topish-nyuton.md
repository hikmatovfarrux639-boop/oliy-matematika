---
title: "Hosila ta'rifi bo'yicha limit hisoblash va Nyuton-Rafson usuli"
module: "hosila"
order: 7
description: "Hosilani limit orqali qat'iy ta'rif bo'yicha hisoblash, differensiallanuvchanlik sharti, tenglamalarni taqribiy yechishda Nyuton-Rafson urinmalar usuli va ko'p usulli tahlil."
---

## Kirish: Formulalar qayerdan paydo bo'lgan?

Har bir talaba $(\sin x)' = \cos x$yoki$(x^2)' = 2x$ kabi hosilalar jadvalini yoddan biladi. Ammo bu formulalar osmondan tushmagan — ularning barchasi bitta fundamental matematik chegaraviy ta'rifdan keltirib chiqariladi: **funksiya orttirmasining argument orttirmasiga nisbatining limiti**.

Oliy o'quv yurtlari dasturlarida birinchi nazorat ishida doimo beriladigan savol: *"Berilgan funksiyaning hosilasini jadvaldan emas, balki qat'iy ta'rif bo'yicha limit orqali hisoblang"*.

Bundan tashqari, hosilaning eng muhim zamonaviy amaliy tatbiqlaridan biri — bu kompyuter algoritmlarida murakkab tenglamalarning ildizlarini milliondan bir aniqlikda topib beruvchi **Nyuton-Rafson urinmalar usuli (Newton-Raphson method)** hisoblanadi.

---

## 1. Hosilaning qat'iy ta'rifi (Limitlar orqali)

Faraz qilaylik, $y = f(x)$funksiya$x_0$ nuqtaning atrofida aniqlangan bo'lsin.
1. Argument orttirmasi: $\Delta x$;
2. Funksiyaning to'liq orttirmasi:
   
$$
   \Delta y = \Delta f = f(x_0 + \Delta x) - f(x_0)
   
$$

> **Hosila ta'rifi:**
> Agar argument orttirmasi $\Delta x$nolga intilganda funksiya orttirmasi$\Delta y$ning$\Delta x$ga nisbatining chekli limiti mavjud bo'lsa, bu limit$f(x)$funksiyaning$x_0$ nuqtadagi **hosilasi** deb ataladi:
>
> 
$$
> f'(x_0) = \lim_{\Delta x \to 0} \frac{\Delta y}{\Delta x} = \lim_{\Delta x \to 0} \frac{f(x_0 + \Delta x) - f(x_0)}{\Delta x}
> 
$$

### Geometrik ma'nosi:
$\frac{\Delta y}{\Delta x}$nisbat kesuvchi to'g'ri chiziqning og'ish burchagi tangensidir.$\Delta x \to 0$ da kesuvchi urinmaga aylanadi:
$$
f'(x_0) = \tan\alpha = k_{\text{urinma}}
$$

---

## 2. Nyuton-Rafson urinmalar usuli (Tenglamalarni sonli yechish)

Har qanday $f(x) = 0$murakkab tenglamani (masalan,$x^3 - x - 1 = 0$yoki$x - \cos x = 0$) analitik formula bilan yechib bo'lmaydi.

Isaak Nyuton funksiyaning grafigiga urinma o'tkazib, urinmaning $Ox$ o'qi bilan kesishish nuqtasi haqiqiy ildizga qarab juda tez yaqinlashishini kashf qildi:

> **Nyuton-Rafson iteratsion formulasi:**
> 
$$
> x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)} \quad (n = 0, 1, 2, \dots)
> 
$$
>
> **Yaqinlashish sharti (Fure qoidasi):**
> Boshlang'ich $x_0$nuqta qilib$[a; b]$ kesmaning shunday uchi tanlanadiki, unda funksiya va uning ikkinchi hosilasi bir xil ishoraga ega bo'lishi kerak:
> 
$$
> f(x_0) \cdot f''(x_0) > 0
> 
$$

---

## Bitta masalani 2 xil usulda yechish va solishtirish

> **1-masala:** $f(x) = \sqrt{x}$funksiyaning$x > 0$ da hosilasini:
> 1) Hosila ta'rifi bo'yicha limit orqali toping;
> 2) Darajali funksiya qoidasi bilan hisoblab solishtiring.

### 1-usul: Ta'rif bo'yicha limit orqali
1. Orttirmani tuzamiz:
   $$\Delta y = f(x + \Delta x) - f(x) = \sqrt{x + \Delta x} - \sqrt{x}$$
2. Nisbatni tuzamiz:
   $$\frac{\Delta y}{\Delta x} = \frac{\sqrt{x + \Delta x} - \sqrt{x}}{\Delta x}$$
3. Suratdagi irratsionallikdan qutulish uchun surat va maxrajni qo'shmasiga $(\sqrt{x + \Delta x} + \sqrt{x})$ ko'paytiramiz:
   $$\frac{\Delta y}{\Delta x} = \frac{(\sqrt{x + \Delta x} - \sqrt{x})(\sqrt{x + \Delta x} + \sqrt{x})}{\Delta x (\sqrt{x + \Delta x} + \sqrt{x})} = \frac{(x + \Delta x) - x}{\Delta x (\sqrt{x + \Delta x} + \sqrt{x})} = \frac{\Delta x}{\Delta x (\sqrt{x + \Delta x} + \sqrt{x})}$$
4. $\Delta x \neq 0$ ga qisqartiramiz:
   $$\frac{\Delta y}{\Delta x} = \frac{1}{\sqrt{x + \Delta x} + \sqrt{x}}$$
5. $\Delta x \to 0$ da limitga o'tamiz:
   $$f'(x) = \lim_{\Delta x \to 0} \frac{1}{\sqrt{x + \Delta x} + \sqrt{x}} = \frac{1}{\sqrt{x} + \sqrt{x}} = \mathbf{\frac{1}{2\sqrt{x}}}$$

### 2-usul: Darajali funksiya jadval formulasi orqali
$f(x) = x^{1/2}$. $(x^n)' = n x^{n-1}$ qoidasiga ko'ra:
$$
f'(x) = \frac{1}{2} x^{\frac{1}{2} - 1} = \frac{1}{2} x^{-1/2} = \mathbf{\frac{1}{2\sqrt{x}}}
$$

Ikkala usul ham mutlaqo bir xil natija berdi!

---

## 2-masala: Nyuton usulida ildizni hisoblash

> **Masala:** $f(x) = x^3 - 2 = 0$ tenglama ildizini ($\sqrt[3]{2}$ning son qiymatini)$x_0 = 1.5$ dan boshlab 2 ta qadamda hisoblang.

**Yechilishi:**
1. Hosila: $f'(x) = 3x^2$.
2. Nyuton formulasi:
   $$x_{n+1} = x_n - \frac{x_n^3 - 2}{3x_n^2} = \frac{3x_n^3 - x_n^3 + 2}{3x_n^2} = \frac{2x_n^3 + 2}{3x_n^2} = \frac{2}{3}x_n + \frac{2}{3x_n^2}$$
3. **1-iteratsiya ($x_0 = 1.5 = 3/2$):**
   $$x_1 = \frac{2}{3}\left(\frac{3}{2}\right) + \frac{2}{3(9/4)} = 1 + \frac{8}{27} = \frac{35}{27} \approx \mathbf{1.296296}$$
4. **2-iteratsiya ($x_1 \approx 1.2963$):**
   $$x_2 = \frac{2}{3}(1.296296) + \frac{2}{3(1.296296)^2} \approx 0.864197 + 0.396745 \approx \mathbf{1.26094}$$

Haqiqiy qiymat: $\sqrt[3]{2} \approx 1.25992$. Atigi 2 ta qadamda xatolik $0.001$ dan ham kichik bo'ldi!

---

> [!WARNING] Imtihondagi tuzoqlar va ko'p uchraydigan xatoliklar
> 1. **$\Delta x$ni$x$ bilan chalkashtirish:**
>    Hosilani ta'rif bo'yicha hisoblayotganda $\Delta x$ — bu mustaqil o'zgaruvchi! U nolga intiladi ($\Delta x \to 0$). $x$ esa bu yerda o'zgarmas parametr sifatida qatnashadi.
> 2. **Nyuton usulida $f'(x_0) = 0$ bo'lish xavfi:**
>    Agar boshlang'ich nuqtada hosila nolga teng bo'lsa ($f'(x_0) = 0$), urinma gorizontal bo'lib $Ox$ o'qi bilan kesishmaydi va formulada nolga bo'lish yuz beradi. Shuning uchun ekstremum nuqtalarini boshlang'ich yaqinlashish qilib tanlab bo'lmaydi!
> 3. **Uzluksizlik differensiallanuvchanlikni kafolatlamaydi:**
>    $f(x) = |x|$funksiya$x = 0$da uzluksiz, lekin bu nuqtada hosilaga ega emas (chunki chap hosila$-1$, o'ng hosila esa $+1$ bo'lib, ular teng emas).

---

## Mustaqil yechish uchun amaliy mashqlar

1. $f(x) = x^2 - 3x$ funksiyaning hosilasini ta'rif bo'yicha limit orqali toping.
2. $f(x) = \frac{1}{x}$ funksiyaning hosilasini ta'rif bo'yicha limit orqali hisoblang.
3. Nyuton-Rafson usuli yordamida $x^2 - 5 = 0$ tenglama uchun ($\sqrt{5}$ni topish formulasi) iteratsion formulani tuzing va$x_0 = 2$dan boshlab$x_1$ ni toping.

<details style="margin-top: 1rem; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); cursor: pointer;">
<summary style="font-weight: 700; color: var(--primary);">👉 Yechimni tekshirish</summary>

**1-masala:**

    

$\Delta y = [(x + \Delta x)^2 - 3(x + \Delta x)] - [x^2 - 3x] = x^2 + 2x\Delta x + (\Delta x)^2 - 3x - 3\Delta x - x^2 + 3x = 2x\Delta x + (\Delta x)^2 - 3\Delta x$.

    

$\frac{\Delta y}{\Delta x} = 2x + \Delta x - 3$.

    

$\lim_{\Delta x \to 0} (2x + \Delta x - 3) = \mathbf{2x - 3}$.

    <hr style="margin: 0.75rem 0; border: none; border-top: 1px dashed var(--border-color);" />

    

**2-masala:**

    

$\Delta y = \frac{1}{x + \Delta x} - \frac{1}{x} = \frac{x - (x + \Delta x)}{x(x + \Delta x)} = \frac{-\Delta x}{x(x + \Delta x)}$.

    

$\frac{\Delta y}{\Delta x} = \frac{-1}{x(x + \Delta x)}$.

    

$\lim_{\Delta x \to 0} \frac{-1}{x(x + \Delta x)} = \mathbf{-\frac{1}{x^2}}$.

    <hr style="margin: 0.75rem 0; border: none; border-top: 1px dashed var(--border-color);" />

    

**3-masala:**

    

$x_{n+1} = x_n - \frac{x_n^2 - 5}{2x_n} = \frac{x_n^2 + 5}{2x_n} = \frac{1}{2}\left(x_n + \frac{5}{x_n}\right)$.

    

$x_0 = 2 \implies x_1 = \frac{1}{2}\left(2 + \frac{5}{2}\right) = \frac{1}{2}(4.5) = \mathbf{2.25}$.

    

(Haqiqiy $\sqrt{5} \approx 2.23606$, birinchi qadamdayoq $0.014$ xatolik!).

</details>
