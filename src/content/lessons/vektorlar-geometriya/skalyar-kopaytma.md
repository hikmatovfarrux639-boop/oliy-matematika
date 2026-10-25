---
title: "Skalyar ko'paytma va uning tatbiqlari"
module: "vektorlar-geometriya"
order: 2
description: "Skalyar ko'paytma ta'rifi, fizik ma'nosi (bajarilgan ish), koordinatalardagi formulasi, ortogonallik sharti, burchak kosinusi va proyeksiyalar."
---

## Kirish: Fizikadagi ishdan geometriyadagi burchakkacha

Fizika darslaridan ma'lumki, moddiy jism $\vec{s}$masofaga ko'chganda unga ta'sir qiluvchi o'zgarmas$\vec{F}$ kuch bajargan mexanik ish quyidagi formula bilan hisoblanadi:

$$
A = |\vec{F}| \cdot |\vec{s}| \cdot \cos\varphi
$$

bu yerda $\varphi$ — kuch yo'nalishi va ko'chish yo'nalishi orasidagi burchakdir.
- Agar kuch harakat yo'nalishida ta'sir qilsa ($\varphi = 0^\circ \implies \cos 0^\circ = 1$): ish maksimal bo'ladi ($A = |\vec{F}| \cdot |\vec{s}|$).
- Agar kuch harakatga perpendikulyar bo'lsa ($\varphi = 90^\circ \implies \cos 90^\circ = 0$): hech qanday ish bajarilmaydi ($A = 0$)! Masalan, Yer Quyosh atrofida aylanayotganda gravitatsiya kuchi perpendikulyar yo'nalgani sababli ish bajarmaydi.

Matematikada bu tushuncha umumlashtirilib, **vektorlarning skalyar ko'paytmasi** deb ataladi.

---

## 1. Skalyar ko'paytma ta'rifi va xossalari

> **Geometrik ta'rif:** Ikki $\vec{a}$va$\vec{b}$ vektorning **skalyar ko'paytmasi** deb, ularning uzunliklari bilan ular orasidagi burchak kosinusining ko'paytmasiga teng bo'lgan **songa (skalyarga)** aytiladi:
>
> 
$$
> \vec{a} \cdot \vec{b} = |\vec{a}| \cdot |\vec{b}| \cdot \cos\varphi
> 
$$
> bu yerda $\varphi = \widehat{(\vec{a}, \vec{b})}, \quad 0 \le \varphi \le \pi$.

### Asosiy xossalari:
1. **O'rin almashtirish (kommutativlik):** $\vec{a} \cdot \vec{b} = \vec{b} \cdot \vec{a}$.
2. **Taqsimot qonuni:** $\vec{a} \cdot (\vec{b} + \vec{c}) = \vec{a} \cdot \vec{b} + \vec{a} \cdot \vec{c}$.
3. **Skalyarni chiqarish:** $(\lambda \vec{a}) \cdot \vec{b} = \lambda (\vec{a} \cdot \vec{b})$.
4. **Skalyar kvadrat va uzunlik:** Vektorning o'zini o'ziga skalyar ko'paytmasi uning uzunligi kvadratiga teng:
   
$$
   \vec{a} \cdot \vec{a} = |\vec{a}|^2 \implies |\vec{a}| = \sqrt{\vec{a} \cdot \vec{a}}
   
$$
5. **Koshi-Bunyakovskiy tengsizligi:**
   
$$
   |\vec{a} \cdot \vec{b}| \le |\vec{a}| \cdot |\vec{b}|
   
$$

---

## 2. Koordinatalar sistemasida skalyar ko'paytma

Fazoda $\vec{a} = (a_x, a_y, a_z)$va$\vec{b} = (b_x, b_y, b_z)$ vektorlar berilgan bo'lsa:

$$
\vec{a} \cdot \vec{b} = a_x b_x + a_y b_y + a_z b_z
$$

Tekislikda esa ($2D$):
$$
\vec{a} \cdot \vec{b} = a_x b_x + a_y b_y
$$

Bu ajoyib formula orqali oradagi burchakni bilmagan holda ham skalyar ko'paytmani soniyalar ichida hisoblash mumkin!

---

## 3. Ikki vektorning perpendikulyarlik (ortogonallik) sharti

> **Asosiy teorema:** Noldan farqli ikki vektorning o'zaro perpendikulyar ($\vec{a} \perp \vec{b}$) bo'lishi uchun ularning skalyar ko'paytmasi **nolga teng bo'lishi** zarur va yetarlidir:
>
> 
$$
> \vec{a} \perp \vec{b} \iff \vec{a} \cdot \vec{b} = 0 \iff a_x b_x + a_y b_y + a_z b_z = 0
> 
$$

---

## 4. Vektorlar orasidagi burchak kosinusi

Skalyar ko'paytma ta'rifidan kosinusni ajratib olamiz:

$$
\cos\varphi = \frac{\vec{a} \cdot \vec{b}}{|\vec{a}| \cdot |\vec{b}|} = \frac{a_x b_x + a_y b_y + a_z b_z}{\sqrt{a_x^2 + a_y^2 + a_z^2} \cdot \sqrt{b_x^2 + b_y^2 + b_z^2}}
$$

Burchakning turini bilish qoidasi:
- Agar $\vec{a} \cdot \vec{b} > 0$bo'lsa$\implies \cos\varphi > 0 \implies$ burchak **o'tkir** ($0^\circ \le \varphi < 90^\circ$);
- Agar $\vec{a} \cdot \vec{b} = 0$bo'lsa$\implies \cos\varphi = 0 \implies$ burchak **to'g'ri** ($\varphi = 90^\circ$);
- Agar $\vec{a} \cdot \vec{b} < 0$bo'lsa$\implies \cos\varphi < 0 \implies$ burchak **o'tmas** ($90^\circ < \varphi \le 180^\circ$).

---

## 5. Vektorning proyeksiyalari

1. **Skalyar proyeksiya ($\vec{a}$vektorning$\vec{b}$ o'qidagi sonli soyasi):**
   
$$
   \operatorname{pr}_{\vec{b}} \vec{a} = |\vec{a}| \cos\varphi = \frac{\vec{a} \cdot \vec{b}}{|\vec{b}|}
   
$$
2. **Vektor proyeksiya (soyaning vektor ko'rinishi):**
   
$$
   \vec{a}_{\vec{b}} = \left( \frac{\vec{a} \cdot \vec{b}}{|\vec{b}|^2} \right) \vec{b}
   
$$

---

## 6. Amaliy misollar va batafsil yechimlar

### 1-misol: Koordinatalar orqali skalyar ko'paytma
$\vec{a} = (3, -2, 4)$va$\vec{b} = (5, 1, -2)$ vektorlarning skalyar ko'paytmasini toping.

**Yechilishi:**
$$
\vec{a} \cdot \vec{b} = 3(5) + (-2)(1) + 4(-2) = 15 - 2 - 8 = 5
$$
Skalyar ko'paytma musbat ($5 > 0$), demak ular orasidagi burchak o'tkir.

**Javob:** $5$

---

### 2-misol: Perpendikulyarlik parametrini topish
$\vec{a} = (\lambda, 4, -1)$va$\vec{b} = (2, -3, 6)$vektorlar o'zaro perpendikulyar bo'lishi uchun$\lambda$ qanday bo'lishi kerak?

**Yechilishi:**
Perpendikulyarlik shartiga ko'ra ularning skalyar ko'paytmasi nolga teng bo'lishi shart:
$$
\vec{a} \cdot \vec{b} = 0 \implies \lambda(2) + 4(-3) + (-1)(6) = 0
$$
$$
2\lambda - 12 - 6 = 0 \implies 2\lambda - 18 = 0 \implies 2\lambda = 18 \implies \lambda = 9
$$

**Javob:** $\lambda = 9$

---

### 3-misol: Vektorlar orasidagi burchakni topish
$\vec{a} = (1, 2, 2)$va$\vec{b} = (0, 3, 4)$ vektorlar orasidagi burchakni toping.

**Yechilishi:**
1. Skalyar ko'paytma:
   $$\vec{a} \cdot \vec{b} = 1(0) + 2(3) + 2(4) = 0 + 6 + 8 = 14$$
2. Uzunliklar:
   $$|\vec{a}| = \sqrt{1^2 + 2^2 + 2^2} = \sqrt{1 + 4 + 4} = \sqrt{9} = 3$$
   $$|\vec{b}| = \sqrt{0^2 + 3^2 + 4^2} = \sqrt{0 + 9 + 16} = \sqrt{25} = 5$$
3. Burchak kosinusi:
   $$\cos\varphi = \frac{14}{3 \cdot 5} = \frac{14}{15}$$
   $$\varphi = \arccos\left(\frac{14}{15}\right)$$

**Javob:** $\arccos\left(\frac{14}{15}\right) \approx 21^\circ$

---

### 4-misol: Uchburchak burchagini topish
Uchburchak uchlari koordinatalari berilgan: $A(1, 2), B(4, 6), C(1, 6)$. $\angle B$ burchagini toping.

**Yechilishi:**
$B$uchidan chiquvchi ikkita vektor tuzamiz:$\vec{BA}$va$\vec{BC}$:
- $\vec{BA} = (1 - 4, 2 - 6) = (-3, -4)$-$\vec{BC} = (1 - 4, 6 - 6) = (-3, 0)$
1. Skalyar ko'paytma:
   $$\vec{BA} \cdot \vec{BC} = (-3)(-3) + (-4)(0) = 9 + 0 = 9$$
2. Uzunliklar:
   $$|\vec{BA}| = \sqrt{(-3)^2 + (-4)^2} = \sqrt{9 + 16} = 5$$
   $$|\vec{BC}| = \sqrt{(-3)^2 + 0^2} = 3$$
3. Kosinus:
   $$\cos B = \frac{9}{5 \cdot 3} = \frac{9}{15} = \frac{3}{5} = 0.6$$
   $$B = \arccos(0.6) \approx 53.1^\circ$$

**Javob:** $\cos B = 0.6$

---

### 5-misol: Skalyar proyeksiya
$\vec{a} = (2, -1, 2)$vektorning$\vec{b} = (3, 0, 4)$ vektor yo'nalishidagi proyeksiyasini toping.

**Yechilishi:**
Formula: $\operatorname{pr}_{\vec{b}}\vec{a} = \frac{\vec{a} \cdot \vec{b}}{|\vec{b}|}$.
- $\vec{a} \cdot \vec{b} = 2(3) + (-1)(0) + 2(4) = 6 + 0 + 8 = 14$-$|\vec{b}| = \sqrt{3^2 + 0^2 + 4^2} = \sqrt{9 + 0 + 16} = \sqrt{25} = 5$
$$
\operatorname{pr}_{\vec{b}}\vec{a} = \frac{14}{5} = 2.8
$$

**Javob:** $2.8$

---

## ⚠️ Talabalar ko'p yo'l qo'yadigan 3 ta jiddiy xato

1. **Skalyar ko'paytma natijasini vektor deb o'ylash:**
   > Skalyar ko'paytmaning javobi **son (skalyar)** bo'ladi! Uni koordinata ko'rinishida $(x, y, z)$ deb yozib bo'lmaydi. Faqat bitta son chiqadi.

2. **Perpendikulyarlik shartida tenglamani $0$ ga tenglashni unutish:**
   > Ikki vektor perpendikulyar bo'lsa, ularning skalyar ko'paytmasi $0$ bo'ladi. Talabalar ko'pincha proyeksiyani yoki uzunlikni nolga tenglab xato qilishadi.

3. **Uchburchak burchagini topishda vektor yo'nalishini chalkashtirish:**
   > Masalan, $B$burchakni topayotganda bitta vektorni$\vec{BA}$deb, ikkinchisini esa$\vec{CB}$ deb olinsa, burchak o'rniga unga qo'shni burchak ($180^\circ - \varphi$) topib qo'yiladi. Ikkala vektor ham **$B$ uchidan chiquvchi** ($\vec{BA}$va$\vec{BC}$) bo'lishi shart!

---

## 💡 Ustozdan maslahat

Mexanikada yoki geometriyada agar sizga "Vektorlar orasidagi burchakni toping" yoki "Ular o'zaro perpendikulyar ekanligini isbotlang" deyilgan bo'lsa, 100% holatda **skalyar ko'paytma formulasini** esga oling. Bu masalani yechishning eng tezkor va oson yo'lidir.

---

## ✍️ Mustaqil yechish uchun mashqlar

1. $\vec{a} = (2, -3)$va$\vec{b} = (4, 1)$ vektorlarning skalyar ko'paytmasini toping.
2. $\vec{a} = (x, 2, -1)$va$\vec{b} = (3, x, 5)$vektorlar perpendikulyar bo'lsa,$x$ ni toping.
3. Uzunliklari $|\vec{a}| = 4$, $|\vec{b}| = 5$va ular orasidagi burchak$60^\circ$bo'lsa,$\vec{a} \cdot \vec{b}$ nimaga teng?
4. $\vec{a} = (3, 4)$vektorning$\vec{b} = (1, 0)$ gorizontal o'qdagi proyeksiyasini toping.

<details style="margin-top: 1rem; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); cursor: pointer;">
<summary style="font-weight: 700; color: var(--primary);">To'liq yechimlar va javoblar</summary>

**1-masala:** $\vec{a} \cdot \vec{b} = 2(4) + (-3)(1) = 8 - 3 = 5$.

    

**2-masala:** $3x + 2x - 5 = 0 \implies 5x = 5 \implies x = 1$.

    

**3-masala:** $4 \cdot 5 \cdot \cos(60^\circ) = 20 \cdot \frac{1}{2} = 10$.

    

**4-masala:** $\vec{a} \cdot \vec{b} = 3(1) + 4(0) = 3$. $|\vec{b}| = 1$. Proyeksiya: $\frac{3}{1} = 3$.

</details>
