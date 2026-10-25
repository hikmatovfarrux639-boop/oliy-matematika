---
title: "Vektor va aralash ko'paytma"
module: "vektorlar-geometriya"
order: 3
description: "Vektor ko'paytma ta'rifi va xossalari, 3x3 determinant orqali hisoblash, yuzani topish, aralash ko'paytma, hajm formulasi va komplanarlik sharti."
---

## Kirish: Yangi o'lchov va hajm tushunchasi

Skalyar ko'paytma natijasida son hosil bo'lsa, **vektor ko'paytma** natijasida yangi bir **vektor** paydo bo'ladi. Bu yangi vektor ikkala dastlabki vektorga ham perpendikulyar bo'lib, uning uzunligi ular qurgan parallelogramm yuziga teng bo'ladi!

Mexanikada aylanma harakat hosil qiluvchi kuch momenti ($\vec{M} = \vec{r} \times \vec{F}$), elektrodinamikada Lorens kuchi ($\vec{F} = q(\vec{v} \times \vec{B})$) aynan vektor ko'paytmaga asoslangan.

---

## 1. Vektor ko'paytma ta'rifi

> **Ta'rif:** $\vec{a}$va$\vec{b}$vektorlarning **vektor ko'paytmasi** deb quyidagi 3 shartni qanoatlantiruvchi$\vec{c} = \vec{a} \times \vec{b}$(yoki$[\vec{a}, \vec{b}]$) vektorga aytiladi:
>
> 1. $\vec{c}$vektor$\vec{a}$ga ham,$\vec{b}$ga ham perpendikulyar:$\vec{c} \perp \vec{a}$va$\vec{c} \perp \vec{b}$;
> 2. Uning uzunligi:
>    
$$
>    \lvert \vec{c} \rvert = \lvert \vec{a} \times \vec{b} \rvert = \lvert \vec{a} \rvert \cdot \lvert \vec{b} \rvert \cdot \sin \varphi
>    
$$
> 3. $\vec{a}, \vec{b}, \vec{c}$uchlik **o'ng uchlikni** tashkil qiladi (o'ng qo'l qoidasi: barmog'ingizni$\vec{a}$dan$\vec{b}$ga burganda, bosh barmoq$\vec{c}$ tomonga qaraydi).

### Asosiy xossalari:
- **Antikommutativlik (o'rin almashganda ishora teskarisiga o'zgaradi!):**
  
$$
  \vec{a} \times \vec{b} = - (\vec{b} \times \vec{a})
  
$$
- **O'z-o'ziga ko'paytma:**
  
$$
  \vec{a} \times \vec{a} = \vec{0}
  
$$
- **Kollinearlik sharti:** Ikki vektor parallel bo'lsa ($\varphi = 0$yoki$\pi$), $\sin \varphi = 0$, demak $\vec{a} \times \vec{b} = \vec{0}$.

---

## 2. Koordinatalar sistemasida vektor ko'paytma

Agar $\vec{a} = (a_x, a_y, a_z)$va$\vec{b} = (b_x, b_y, b_z)$bo'lsa, vektor ko'paytma$3 \times 3$ determinant yordamida oson hisoblanadi:

$$
\vec{a} \times \vec{b} = \begin{vmatrix}
\vec{i} & \vec{j} & \vec{k} \\
a_x & a_y & a_z \\
b_x & b_y & b_z
\end{vmatrix} = \vec{i} \begin{vmatrix} a_y & a_z \\ b_y & b_z \end{vmatrix} - \vec{j} \begin{vmatrix} a_x & a_z \\ b_x & b_z \end{vmatrix} + \vec{k} \begin{vmatrix} a_x & a_y \\ b_x & b_y \end{vmatrix}
$$

bu yerda $\vec{i} = (1, 0, 0), \, \vec{j} = (0, 1, 0), \, \vec{k} = (0, 0, 1)$ — koordinata o'qlari ortlari.

---

## 3. Geometrik tatbiqlari: Yuza hisoblash

1. $\vec{a}$va$\vec{b}$ vektorlarga qurilgan **parallelogramm yuzi**:
   
$$
   S_{parall} = \lvert \vec{a} \times \vec{b} \rvert
   
$$
2. $\vec{a}$va$\vec{b}$ vektorlarga qurilgan **uchburchak yuzi**:
   
$$
   S_{\triangle} = \frac{1}{2} \lvert \vec{a} \times \vec{b} \rvert
   
$$

---

## 4. Aralash ko'paytma va fazoviy hajm

Uchta vektor $\vec{a}, \vec{b}, \vec{c}$ ning **aralash ko'paytmasi** deb, dastlabki ikkitasining vektor ko'paytmasini uchinchi vektorga skalyar ko'paytirishga aytiladi:

$$
(\vec{a}, \vec{b}, \vec{c}) = (\vec{a} \times \vec{b}) \cdot \vec{c}
$$

### Koordinatalarda ifodalanishi:
$$
(\vec{a}, \vec{b}, \vec{c}) = \begin{vmatrix}
a_x & a_y & a_z \\
b_x & b_y & b_z \\
c_x & c_y & c_z
\end{vmatrix}
$$

### Geometrik ma'nosi:
1. $\vec{a}, \vec{b}, \vec{c}$ vektorlarga qurilgan **parallelepiped hajmi**:
   
$$
   V_{parall} = \lvert (\vec{a}, \vec{b}, \vec{c}) \rvert
   
$$
2. Piramida (tetraedr) hajmi:
   
$$
   V_{piramida} = \frac{1}{6} \lvert (\vec{a}, \vec{b}, \vec{c}) \rvert
   
$$

### Vektorlarning komplanarlik sharti:
Uchta vektor bitta tekislikda yotishi (yoki parallel tekisliklarda yotishi) uchun ularning aralash ko'paytmasi **nolga teng** bo'lishi zarur va yetarlidir:
$$
(\vec{a}, \vec{b}, \vec{c}) = 0
$$

---

## Amaliy namunaviy misollar

### 1-misol: Vektor ko'paytma va uchburchak yuzi
Uchlari $A(1, 2, 0)$, $B(3, 0, -1)$va$C(2, 3, 1)$ nuqtalarda bo'lgan uchburchak yuzini toping.

**Yechilishi:**
1. $\vec{AB}$va$\vec{AC}$ vektorlarni tuzamiz:
   $$\vec{AB} = (3 - 1, \, 0 - 2, \, -1 - 0) = (2, -2, -1)$$
   $$\vec{AC} = (2 - 1, \, 3 - 2, \, 1 - 0) = (1, 1, 1)$$
2. Vektor ko'paytmani hisoblaymiz:
   
$$
   \vec{AB} \times \vec{AC} = \begin{vmatrix}
   \vec{i} & \vec{j} & \vec{k} \\
   2 & -2 & -1 \\
   1 & 1 & 1
   \end{vmatrix}
   
$$
   - $\vec{i}$-komponent: $(-2)(1) - (-1)(1) = -2 + 1 = -1$-$\vec{j}$-komponent: $- [2(1) - (-1)(1)] = -(2 + 1) = -3$-$\vec{k}$-komponent: $2(1) - (-2)(1) = 2 + 2 = 4$Demak:$\vec{AB} \times \vec{AC} = (-1, -3, 4)$.
3. Vektor modulini topamiz:
   $$\lvert \vec{AB} \times \vec{AC} \rvert = \sqrt{(-1)^2 + (-3)^2 + 4^2} = \sqrt{1 + 9 + 16} = \sqrt{26}$$
4. Uchburchak yuzi:
   $$S = \frac{1}{2} \sqrt{26} \approx 2.55$$

---

### 2-misol: Piramida hajmi
$\vec{a} = (1, 1, 1)$, $\vec{b} = (2, 0, 1)$, $\vec{c} = (3, 2, 1)$ vektorlarga qurilgan piramida hajmini hisoblang.

**Yechilishi:**
Aralash ko'paytmani hisoblaymiz:
$$
(\vec{a}, \vec{b}, \vec{c}) = \begin{vmatrix}
1 & 1 & 1 \\
2 & 0 & 1 \\
3 & 2 & 1
\end{vmatrix}
$$
1-satr bo'yicha yoyamiz:
$$= 1 \cdot (0 - 2) - 1 \cdot (2 - 3) + 1 \cdot (4 - 0) = -2 - (-1) + 4 = 3$$
Piramida hajmi:
$$V = \frac{1}{6} \lvert 3 \rvert = \frac{3}{6} = 0.5$$

**Javob:** $V = 0.5$

---

## Mustaqil yechish uchun mashqlar

1. $\vec{i} \times \vec{j}$va$\vec{j} \times \vec{i}$ nimaga teng?
2. $\vec{a} = (1, 0, 0)$va$\vec{b} = (0, 2, 0)$ vektorlarga qurilgan parallelogramm yuzini toping.
3. $\vec{u} = (1, 2, 3)$, $\vec{v} = (2, 4, 6)$va$\vec{w} = (0, 1, 5)$ vektorlar komplanarmi?

<details style="margin-top: 1rem; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); cursor: pointer;">
<summary style="font-weight: 700; color: var(--primary);">Javoblarni tekshirish</summary>

**1-masala:** $\vec{i} \times \vec{j} = \vec{k}$, $\vec{j} \times \vec{i} = -\vec{k}$.

    

**2-masala:** $\vec{a} \times \vec{b} = (0, 0, 2) \implies S = \sqrt{0 + 0 + 4} = 2$.

    

**3-masala:** $\vec{v} = 2\vec{u}$, ya'ni dastlabki ikkita vektor kollinear. Shuning uchun ular komplanar, aralash ko'paytma $0$ ga teng.

</details>
