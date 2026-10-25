---
title: "Kesmani bo'lish va tetraedr (piramida) kompleks masalalari"
module: "vektorlar-geometriya"
order: 7
description: "Kesmani berilgan nisbatda bo'lish, uchburchak va tetraedr og'irlik markazi, piramida qirralari, balandlik tenglamasi, yoqlar burchagi va hajmni hisoblash."
---

## Kirish: Geometrik figuralarni analitik tahlil qilish

Oliy o'quv yurtlari imtihonlarida va amaliy sinovlarda analitik geometriya bo'yicha eng mashhur kompleks masala — bu **to'rtta uchi berilgan tetraedr (uchburchakli piramida)** masalasidir.

Bunday masalada talabadan vektor algebrasi va geometriyasining deyarli barcha qoidalarini bir vaqtning o'zida qo'llash talab etiladi:
- Kesmani bo'lish va og'irlik markazini topish;
- Qirralar uzunliklari va yoqlar yuzalari;
- Qirralar orasidagi burchak va yoqlar orasidagi ikki yoqli burchak;
- Piramida balandligi tenglamasi va balandlik uzunligi;
- Tetraedr hajmi.

Ushbu darsda barcha bu qadamlarni bitta mukammal tizimda o'rganamiz.

---

## 1. Kesmani berilgan nisbatda bo'lish formulasi

Faraz qilaylik, fazoda (yoki tekislikda) ikkita nuqta berilgan: $A(x_1, y_1, z_1)$va$B(x_2, y_2, z_2)$.
Agar $M(x, y, z)$nuqta$AB$kesmani$\lambda = \frac{AM}{MB}$ nisbatda bo'lsa:

$$
x = \frac{x_1 + \lambda x_2}{1 + \lambda}, \qquad y = \frac{y_1 + \lambda y_2}{1 + \lambda}, \qquad z = \frac{z_1 + \lambda z_2}{1 + \lambda}
$$

### Xususiy hollar:
1. **Kesma o'rtasi ($\lambda = 1$):**
   
$$
   x = \frac{x_1 + x_2}{2}, \qquad y = \frac{y_1 + y_2}{2}, \qquad z = \frac{z_1 + z_2}{2}
   
$$
2. **Uchburchak og'irlik markazi (medianalar kesishish nuqtasi):**
   
$$
   x_C = \frac{x_1 + x_2 + x_3}{3}, \quad y_C = \frac{y_1 + y_2 + y_3}{3}, \quad z_C = \frac{z_1 + z_2 + z_3}{3}
   
$$
3. **Tetraedr og'irlik markazi (sentroid):**
   
$$
   x_T = \frac{x_1 + x_2 + x_3 + x_4}{4}, \quad y_T = \frac{y_1 + y_2 + y_3 + y_4}{4}, \quad z_T = \frac{z_1 + z_2 + z_3 + z_4}{4}
   
$$

---

## 2. Tetraedr bo'yicha kompleks masalalar algoritmi

Uchlari berilgan: $A_1, A_2, A_3, A_4$.
1. **Uchta qirra vektorlarini tuzish:**
   $\vec{a} = \vec{A_1 A_2}, \quad \vec{b} = \vec{A_1 A_3}, \quad \vec{c} = \vec{A_1 A_4}$.
2. **Qirra uzunligi:**
   $|\vec{A_1 A_2}| = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2 + (z_2-z_1)^2}$.
3. **Asosining yuzi ($S_{\Delta A_1 A_2 A_3}$):**
   $$S = \frac{1}{2} |\vec{a} \times \vec{b}|$$
4. **Piramida hajmi:**
   $$V = \frac{1}{6} |(\vec{a}, \vec{b}, \vec{c})| = \frac{1}{6} \left| \begin{vmatrix} x_2-x_1 & y_2-y_1 & z_2-z_1 \\ x_3-x_1 & y_3-y_1 & z_3-z_1 \\ x_4-x_1 & y_4-y_1 & z_4-z_1 \end{vmatrix} \right|$$
5. **$A_4$uchidan$A_1 A_2 A_3$ asosga tushirilgan balandlik ($h$):**
   $$V = \frac{1}{3} S_{\text{asos}} \cdot h \implies h = \frac{3V}{S_{\text{asos}}}$$

---

## Bitta masalani 2 xil usulda yechish va solishtirish

> **Masala:** Uchlari $A_1(1, 2, 0)$, $A_2(3, 0, -3)$, $A_3(5, 2, 6)$va$A_4(8, 4, -9)$ bo'lgan tetraedr berilgan.
> $A_4$uchidan$A_1 A_2 A_3$yoqqa tushirilgan balandlik uzunligi$h$ ni toping.

### 1-usul: Hajm va yuza orqali topish ($h = \frac{3V}{S_{\text{asos}}}$)
1. Vektorlar:
   - $\vec{A_1 A_2} = (3-1, 0-2, -3-0) = (2, -2, -3)$-$\vec{A_1 A_3} = (5-1, 2-2, 6-0) = (4, 0, 6)$-$\vec{A_1 A_4} = (8-1, 4-2, -9-0) = (7, 2, -9)$
2. Vektor ko'paytma (asos normali):
   $$\vec{n} = \vec{A_1 A_2} \times \vec{A_1 A_3} = \begin{vmatrix} \vec{i} & \vec{j} & \vec{k} \\ 2 & -2 & -3 \\ 4 & 0 & 6 \end{vmatrix} = \vec{i}(-12) - \vec{j}(12 + 12) + \vec{k}(0 - (-8)) = (-12, -24, 8)$$
   Moduli:
   $$|\vec{n}| = \sqrt{(-12)^2 + (-24)^2 + 8^2} = \sqrt{144 + 576 + 64} = \sqrt{784} = 28$$
   Asos yuzi:
   $$S_{\text{asos}} = \frac{1}{2} \cdot 28 = 14$$
3. Aralash ko'paytma:
   $$(\vec{A_1 A_2}, \vec{A_1 A_3}, \vec{A_1 A_4}) = \vec{n} \cdot \vec{A_1 A_4} = -12(7) + (-24)(2) + 8(-9) = -84 - 48 - 72 = -204$$
   Hajm:
   $$V = \frac{1}{6} |-204| = \frac{204}{6} = 34$$
4. Balandlik:
   $$h = \frac{3V}{S_{\text{asos}}} = \frac{3 \cdot 34}{14} = \frac{102}{14} = \mathbf{\frac{51}{7} \approx 7.286}$$

### 2-usul: Nuqtadan tekislikkacha masofa formulasi orqali
1. Asos tekisligi tenglamasini tuzamiz. Normali $\vec{n} = (-12, -24, 8)$ni$-4$ga qisqartirsak:$\vec{n}_0 = (3, 6, -2)$.
   $A_1(1, 2, 0)$ nuqtadan o'tuvchi tekislik:
   $$3(x - 1) + 6(y - 2) - 2(z - 0) = 0 \implies 3x + 6y - 2z - 15 = 0$$
2. $A_4(8, 4, -9)$ nuqtadan ushbu tekislikkacha masofani hisoblaymiz:
   $$h = d = \frac{|3(8) + 6(4) - 2(-9) - 15|}{\sqrt{3^2 + 6^2 + (-2)^2}} = \frac{|24 + 24 + 18 - 15|}{\sqrt{9 + 36 + 4}} = \frac{|51|}{\sqrt{49}} = \mathbf{\frac{51}{7}}$$

Ikkala usul ham mutlaqo bir xil natija berdi!

---

> [!WARNING] Imtihondagi tuzoqlar va ko'p uchraydigan xatoliklar
> 1. **Piramida hajmida $\frac{1}{6}$ koeffitsiyentni unutish:**
>    Uchburchakli piramidada asos uchburchak bo'lgani uchun $V = \frac{1}{6} |(\vec{a}, \vec{b}, \vec{c})|$ bo'ladi. Ko'pchilik talabalar parallelepiped hajmi bilan adashtirib, 6 ga bo'lishni unutadi.
> 2. **Kesmani tashqi bo'lishda manfiy $\lambda$:**
>    Agar $M$nuqta kesmaning tashqarisida yotsa, nisbat$\lambda < 0$ manfiy olinadi!
> 3. **Yoqlar orasidagi burchak:**
>    Ikki yoq orasidagi burchak ularning normal vektorlari orasidagi burchak orqali topiladi: $\cos\varphi = \frac{|\vec{n}_1 \cdot \vec{n}_2|}{|\vec{n}_1| |\vec{n}_2|}$.

---

## Mustaqil yechish uchun amaliy mashqlar

1. $A(2, -3, 5)$va$B(6, 1, -3)$nuqtalar berilgan.$AB$kesmani$\lambda = 3$nisbatda bo'luvchi$M$ nuqtaning koordinatalarini toping.
2. Uchlari $A(0, 0, 0), B(2, 0, 0), C(0, 3, 0), D(0, 0, 4)$ bo'lgan tetraedr hajmini va og'irlik markazini toping.
3. Uchburchak uchlari $A(1, 1), B(4, 5), C(13, -4)$. Uning $A$ uchidan o'tkazilgan medianasi uzunligini toping.

<details style="margin-top: 1rem; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); cursor: pointer;">
<summary style="font-weight: 700; color: var(--primary);">👉 Yechimni tekshirish</summary>

**1-masala:**

    

$x = \frac{2 + 3(6)}{1 + 3} = \frac{20}{4} = 5, \quad y = \frac{-3 + 3(1)}{4} = 0, \quad z = \frac{5 + 3(-3)}{4} = \frac{-4}{4} = -1$.

    

Javob: $M(5, 0, -1)$.

    <hr style="margin: 0.75rem 0; border: none; border-top: 1px dashed var(--border-color);" />

    

**2-masala:**

    

1) Qirralar o'qlar bo'ylab yo'nalgan: $V = \frac{1}{6}(2 \cdot 3 \cdot 4) = \mathbf{4}$.

    

2) Og'irlik markazi: $x_T = \frac{0+2+0+0}{4} = 0.5, \quad y_T = \frac{0+0+3+0}{4} = 0.75, \quad z_T = \frac{0+0+0+4}{4} = 1.0$. Nuqta: $(0.5; 0.75; 1)$.

    <hr style="margin: 0.75rem 0; border: none; border-top: 1px dashed var(--border-color);" />

    

**3-masala:**

    

$BC$o'rtasi$M$: $x_M = \frac{4+13}{2} = 8.5, \quad y_M = \frac{5+(-4)}{2} = 0.5$.

    

Mediana uzunligi: $|AM| = \sqrt{(8.5 - 1)^2 + (0.5 - 1)^2} = \sqrt{(7.5)^2 + (-0.5)^2} = \sqrt{56.25 + 0.25} = \sqrt{56.5} \approx \mathbf{7.517}$.

</details>
