---
title: "Kompleks sonlar ustida arifmetik amallar"
module: "kompleks-sonlar"
order: 2
description: "Kompleks sonlarni qo'shish, ayirish, ko'paytirish, bo'lish, qo'shma son (z̄) xossalari, modul |z| va ko'p usulli amallar tahlili."
---

## Kirish: Kompleks sonlar arifmetikasi

Kompleks sonlar ustidagi amallar maktab algebrasidagi ko'phadlar ustidagi amallarga juda o'xshaydi. Yagona fundamental farq va asosiy oltin qoida: **qayerda $i^2$paydo bo'lsa, uning o'rniga darhol$-1$ qo'yiladi!**

Har qanday kompleks son algebraik ko'rinishda beriladi:
$$
z = a + bi \quad (a, b \in \mathbb{R}, \quad i^2 = -1)
$$
bu yerda $a = \operatorname{Re}(z)$— haqiqiy qism,$b = \operatorname{Im}(z)$ — mavhum qism koeffitsiyenti.

Faraz qilaylik, ikkita kompleks son berilgan bo'lsin:
$$
z_1 = a + bi \quad \text{va} \quad z_2 = c + di
$$

---

## 1. Qo'shish va ayirish amallari

Kompleks sonlarni qo'shish (ayirish) uchun ularning haqiqiy qismlari alohida, mavhum qismlari alohida qo'shiladi (ayriladi):

$$
z_1 + z_2 = (a + c) + (b + d)i
$$

$$
z_1 - z_2 = (a - c) + (b - d)i
$$

### Geometrik ma'nosi:
Kompleks tekislikda (Argand diagrammasida) har bir $z = a + bi$soniga koordinatalari$(a; b)$ bo'lgan radius-vektor mos keladi. Kompleks sonlarni qo'shish xuddi tekislikdagi ikki vektorni **parallelogramm qoidasi** yoki uchburchak qoidasi bo'yicha qo'shish bilan aynan bir xildir.

---

## 2. Ko'paytirish amali

Kompleks sonlar xuddi ikkihadni ikkihadga ko'paytirgandek qavslarni ochish orqali ko'paytiriladi:

$$
z_1 \cdot z_2 = (a + bi)(c + di) = ac + adi + bci + bdi^2
$$

$i^2 = -1$bo'lganligi sababli oxirgi had$-bd$ ga aylanadi:

$$
z_1 \cdot z_2 = (ac - bd) + (ad + bc)i
$$

### Darajalar sikli:
Mavhum birlik $i$ ning natural darajalari har 4 qadamda davriy takrorlanadi:
$$
i^1 = i, \quad i^2 = -1, \quad i^3 = -i, \quad i^4 = 1, \quad i^{4k + r} = i^r
$$
Masalan: $i^{102} = i^{4 \cdot 25 + 2} = i^2 = -1$.

---

## 3. Qo'shma kompleks son ($\bar{z}$) va Modul ($|z|$)

> **Ta'rif:** Agar ikkita kompleks son faqat mavhum qismining ishorasi bilan farq qilsa, ular **o'zaro qo'shma kompleks sonlar** deyiladi. $z = a + bi$sonining qo'shmasi$\bar{z}$ kabi belgilanadi:
>
> 
$$
> \bar{z} = a - bi
> 
$$

### Qo'shma sonning xossalari:
1. Sonni o'zining qo'shmasiga ko'paytirganda doimo **musbat haqiqiy son** hosil bo'ladi:
   
$$
   z \cdot \bar{z} = (a + bi)(a - bi) = a^2 - b^2 i^2 = a^2 + b^2
   
$$
2. $\overline{z_1 \pm z_2} = \bar{z}_1 \pm \bar{z}_2$3.$\overline{z_1 \cdot z_2} = \bar{z}_1 \cdot \bar{z}_2$4.$\overline{\left(\frac{z_1}{z_2}\right)} = \frac{\bar{z}_1}{\bar{z}_2}$

### Kompleks son moduli:
Kompleks tekislikda koordinata boshidan $(0; 0)$ $z(a; b)$ nuqtagacha bo'lgan masofa modul deyiladi:
$$
|z| = r = \sqrt{a^2 + b^2} \implies z \cdot \bar{z} = |z|^2
$$
- $|z_1 \cdot z_2| = |z_1| \cdot |z_2|$-$\left|\frac{z_1}{z_2}\right| = \frac{|z_1|}{|z_2|} \quad (z_2 \neq 0)$- **Uchburchak tengsizligi:**$|z_1 + z_2| \le |z_1| + |z_2|$

---

## 4. Bo'lish amali

Ikki kompleks sonni bo'lish uchun kasrning surati va maxraji **maxrajning qo'shmasiga ko'paytiriladi**. Bu orqali maxrajdagi mavhumlik yo'qotiladi (haqiqiy songa aylanadi):

$$
\frac{z_1}{z_2} = \frac{a + bi}{c + di} = \frac{(a + bi)(c - di)}{(c + di)(c - di)} = \frac{(ac + bd) + (bc - ad)i}{c^2 + d^2}
$$

$$
\frac{z_1}{z_2} = \frac{ac + bd}{c^2 + d^2} + \frac{bc - ad}{c^2 + d^2} i
$$

---

## Bitta masalani 2 xil usulda yechish va solishtirish

> **Masala:** $z = \frac{1 + i\sqrt{3}}{1 - i}$ ifodaning qiymatini hisoblang va algebraik shaklga keltiring.

### 1-usul: Algebraik qo'shmaga ko'paytirish usuli
Kasrning surati va maxrajini maxrajning qo'shmasi bo'lgan $(1 + i)$ ga ko'paytiramiz:
$$
z = \frac{(1 + i\sqrt{3})(1 + i)}{(1 - i)(1 + i)}
$$
1. Maxraj:
   $$(1 - i)(1 + i) = 1^2 - i^2 = 1 - (-1) = 2$$
2. Suratdagi qavslarni ochamiz:
   $$(1 + i\sqrt{3})(1 + i) = 1 + i + i\sqrt{3} + i^2\sqrt{3} = 1 + (1 + \sqrt{3})i - \sqrt{3} = (1 - \sqrt{3}) + (1 + \sqrt{3})i$$
3. Kasrni ikkiga bo'lamiz:
   $$z = \frac{1 - \sqrt{3}}{2} + \frac{1 + \sqrt{3}}{2}i$$

### 2-usul: Trigonometrik shakl orqali bo'lish usuli
Surat va maxrajni alohida trigonometrik ko'rinishga keltiramiz:
1. Surat: $z_1 = 1 + i\sqrt{3}$:
   - Modul: $|z_1| = \sqrt{1^2 + (\sqrt{3})^2} = \sqrt{4} = 2$.
   - Argument: $\tan\varphi_1 = \frac{\sqrt{3}}{1} \implies \varphi_1 = \frac{\pi}{3}$.
   - $z_1 = 2 e^{i \frac{\pi}{3}}$.
2. Maxraj: $z_2 = 1 - i$:
   - Modul: $|z_2| = \sqrt{1^2 + (-1)^2} = \sqrt{2}$.
   - Argument: $\varphi_2 = -\frac{\pi}{4}$ (4-chorak).
   - $z_2 = \sqrt{2} e^{-i \frac{\pi}{4}}$.
3. Bo'linmani hisoblaymiz:
   $$z = \frac{z_1}{z_2} = \frac{2}{\sqrt{2}} e^{i\left(\frac{\pi}{3} - \left(-\frac{\pi}{4}\right)\right)} = \sqrt{2} e^{i\left(\frac{\pi}{3} + \frac{\pi}{4}\right)} = \sqrt{2} e^{i \frac{7\pi}{12}}$$
   Eyler formulasiga ko'ra:
   $$z = \sqrt{2} \left[ \cos\left(\frac{7\pi}{12}\right) + i\sin\left(\frac{7\pi}{12}\right) \right]$$
   $\cos\left(\frac{7\pi}{12}\right) = \frac{\sqrt{2} - \sqrt{6}}{4}$va$\sin\left(\frac{7\pi}{12}\right) = \frac{\sqrt{2} + \sqrt{6}}{4}$ ekanligini hisobga olsak:
   $$z = \sqrt{2}\frac{\sqrt{2}-\sqrt{6}}{4} + i\sqrt{2}\frac{\sqrt{2}+\sqrt{6}}{4} = \frac{2 - 2\sqrt{3}}{4} + i\frac{2 + 2\sqrt{3}}{4} = \frac{1 - \sqrt{3}}{2} + \frac{1 + \sqrt{3}}{2}i$$

Ikkala usul ham mutlaqo bir xil natijani berdi!

---

> [!WARNING] Imtihondagi tuzoqlar va ko'p uchraydigan xatoliklar
> 1. **Ildizlar ko'paytmasi xatosi:**
>    Ko'p talabalar quyidagi xatoga yo'l qo'yishadi:
>    $$\sqrt{-1} \cdot \sqrt{-1} \stackrel{?}{=} \sqrt{(-1) \cdot (-1)} = \sqrt{1} = 1 \quad \text{(XATO!)}$$
>    Qoida: $\sqrt{a} \cdot \sqrt{b} = \sqrt{ab}$formulasi faqat$a \ge 0, b \ge 0$bo'lgandagina o'rinli! Ta'rif bo'yicha:$i \cdot i = i^2 = -1$.
> 2. **Kompleks sonlarni solishtirish mumkin emas:**
>    Kompleks tekislikda tartib munosabati mavjud emas: $2 + 3i > 1 + 5i$ deyish mutlaqo ma'nosizdir. Faqatgina ularning modullarini solishtirish mumkin ($|z_1| > |z_2|$ haqiqiy sonlar bo'lgani sababli).
> 3. **Modul kvadratini modul bilan adashtirish:** $|z|^2 = a^2 + b^2$(ildizsiz!). Masalan,$|3 + 4i|^2 = 3^2 + 4^2 = 25$.

---

## Mustaqil yechish uchun amaliy mashqlar

1. $z = (2 - 3i)(1 + 4i) + \frac{5}{i}$ ifodaning qiymatini algebraik shaklga keltiring.
2. $\left| \frac{(3 + 4i)(1 - i\sqrt{3})}{(2 - 2i)} \right|$ ifodaning modulini toping (bunda qavslarni ochmasdan modul xossasidan foydalaning).
3. $z^2 = 3 + 4i$tenglamani qanoatlantiruvchi barcha kompleks$z = x + iy$ sonlarni toping.

<details style="margin-top: 1rem; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); cursor: pointer;">
<summary style="font-weight: 700; color: var(--primary);">👉 Yechimni tekshirish</summary>

**1-masala:**

    

1) Ko'paytma: $(2 - 3i)(1 + 4i) = 2 + 8i - 3i - 12i^2 = 2 + 5i + 12 = 14 + 5i$.

    

2) Kasr: $\frac{5}{i} = \frac{5(-i)}{i(-i)} = \frac{-5i}{1} = -5i$.

    

3) Yig'indi: $(14 + 5i) + (-5i) = \mathbf{14}$. Natija haqiqiy son chiqdi!

    <hr style="margin: 0.75rem 0; border: none; border-top: 1px dashed var(--border-color);" />

    

**2-masala:**

    

Modul xossasi: $\left|\frac{z_1 \cdot z_2}{z_3}\right| = \frac{|z_1| \cdot |z_2|}{|z_3|}$.

    

      
- $|3 + 4i| = \sqrt{9 + 16} = 5$-$|1 - i\sqrt{3}| = \sqrt{1 + 3} = 2$-$|2 - 2i| = \sqrt{4 + 4} = \sqrt{8} = 2\sqrt{2}$Natija:$|z| = \frac{5 \cdot 2}{2\sqrt{2}} = \frac{5}{\sqrt{2}} = \mathbf{\frac{5\sqrt{2}}{2} = 2.5\sqrt{2}}$.

    <hr style="margin: 0.75rem 0; border: none; border-top: 1px dashed var(--border-color);" />

    

**3-masala:**

    

$z = x + iy \implies z^2 = (x^2 - y^2) + 2xyi = 3 + 4i$.

    

Tizim tuzamiz:

    

      
- $x^2 - y^2 = 3$-$2xy = 4 \implies xy = 2 \implies y = 2/x$ $x^2 - \frac{4}{x^2} = 3 \implies x^4 - 3x^2 - 4 = 0 \implies (x^2 - 4)(x^2 + 1) = 0$.

    

$x$haqiqiy bo'lgani uchun$x^2 = 4 \implies x_1 = 2, x_2 = -2$.

    

Mos $y$lar:$y_1 = 2/2 = 1, \quad y_2 = 2/(-2) = -1$.

    

**Javob:** $\mathbf{z_1 = 2 + i}$va$\mathbf{z_2 = -2 - i}$.

</details>
