---
title: "Chiziqli fazo tushunchasi, chiziqli bog'liqlik va bazis"
module: "chiziqli-algebra"
order: 15
description: "Chiziqli fazo aksiomalari, chiziqli bog'liqlik va erklik mezonlari, matritsa rangi, fazo o'lchami va vektorni bazis bo'yicha yoyish."
---

## Kirish: "Fazo" nima o'zi?

Kundalik hayotda "fazo" so'zini eshitganimizda 3 o'lchamli geometrik bo'shliqni tasavvur qilamiz. Ammo oliy matematikada bu tushuncha ancha keng va fundamental ma'noga ega.

Matematiklar uchun fazo — bu elementlari o'zaro **qo'shilishi** va **haqiqiy songa ko'paytirilishi** mumkin bo'lgan har qanday to'plamdir!
Masalan:
- Fizikadagi kuchlar va tezliklar — bu vektorlar;
- Rasm piksellari — sonlar massividan iborat vektor;
- Har qanday ko'phadlar yoki uzluksiz funksiyalar to'plami ham vektor fazodir (chunki ikkita funksiyani qo'shish yoki funksiyani songa ko'paytirish mumkin).

Chiziqli algebra mana shu barcha turli sohalarni bitta yagona va mukammal nazariya ostida birlashtiradi.

---

## 1. Chiziqli (Vektor) fazoning 8 ta aksiomasi

Bo'sh bo'lmagan $V$ to'plam **chiziqli fazo** deyiladi, agar unda elementlarni qo'shish ($\vec{x} + \vec{y}$) va songa ko'paytirish ($\alpha \cdot \vec{x}$) amallari aniqlangan bo'lib, har qanday $\vec{x}, \vec{y}, \vec{z} \in V$ va $\alpha, \beta \in \mathbb{R}$ uchun quyidagi 8 ta aksioma bajarilsa:

### I. Qo'shish amali bo'yicha:
1. **Kommutativlik:** $\vec{x} + \vec{y} = \vec{y} + \vec{x}$
2. **Assotsiativlik:** $(\vec{x} + \vec{y}) + \vec{z} = \vec{x} + (\vec{y} + \vec{z})$
3. **Nol elementning mavjudligi:** Shunday $\vec{0} \in V$ element mavjudki, har qanday $\vec{x}$ uchun $\vec{x} + \vec{0} = \vec{x}$.
4. **Qarama-qarshi elementning mavjudligi:** Har bir $\vec{x} \in V$ uchun shunday $(-\vec{x}) \in V$ element mavjudki, $\vec{x} + (-\vec{x}) = \vec{0}$.

### II. Songa ko'paytirish amali bo'yicha:
5. **Birlik songa ko'paytirish:** $1 \cdot \vec{x} = \vec{x}$
6. **Skalyarlar bo'yicha assotsiativlik:** $(\alpha \beta) \vec{x} = \alpha (\beta \vec{x})$
7. **Vektorlar yig'indisiga nisbatan distributivlik:** $\alpha (\vec{x} + \vec{y}) = \alpha \vec{x} + \alpha \vec{y}$
8. **Sonlar yig'indisiga nisbatan distributivlik:** $(\alpha + \beta) \vec{x} = \alpha \vec{x} + \beta \vec{x}$

> [!NOTE] Eng muhim chiziqli fazolar:
> - $\mathbb{R}^n$ — $n$ o'lchamli sonli qatorlar (ustunlar) fazosi;
> - $P_n[x]$ — darajasi $n$ dan oshmaydigan ko'phadlar fazosi;
> - $C[a, b]$ — $[a, b]$ kesmada uzluksiz bo'lgan funksiyalar fazosi;
> - $M_{m \times n}$ — $m \times n$ o'lchamli barcha matritsalar fazosi.

---

## 2. Vektorlarning chiziqli bog'liqligi va chiziqli erkinligi

Faraz qilaylik, $V$ fazoda $k$ ta vektor berilgan bo'lsin: $\vec{v}_1, \vec{v}_2, \dots, \vec{v}_k$.
Ushbu vektorlarning chiziqli kombinatsiyasini nolga tenglashtiramiz:

$$
\alpha_1 \vec{v}_1 + \alpha_2 \vec{v}_2 + \dots + \alpha_k \vec{v}_k = \vec{0}
$$

1. **CHIZIQLI ERKLI SISTEMA:**
   Agar ushbu tenglik **faqat va faqat barcha koeffitsiyentlar bir vaqtda nolga teng bo'lgandagina** ($\alpha_1 = \alpha_2 = \dots = \alpha_k = 0$) bajarilsa, bu vektorlar **chiziqli erkli** deyiladi.
   *Intuitiv ma'nosi:* Vektorlarning birortasi ham ortiqcha emas, har biri fazoga mutlaqo yangi, mustaqil o'lcham va yo'nalish qo'shadi.

2. **CHIZIQLI BOG'LIQ SISTEMA:**
   Agar koeffitsiyentlardan kamida bittasi noldan farqli bo'lganda ham ($\exists \alpha_i \neq 0$) yuqoridagi yig'indi nolga aylana olsa, bu vektorlar **chiziqli bog'liq** deyiladi.
   *Intuitiv ma'nosi:* Vektorlar orasida "ortiqcha" (qaram) vektor bor. Kamida bitta vektorni qolgan vektorlarning chiziqli kombinatsiyasi ko'rinishida yozish mumkin:
   $$
   \vec{v}_k = c_1 \vec{v}_1 + c_2 \vec{v}_2 + \dots + c_{k-1} \vec{v}_{k-1}
   $$

---

## 3. Chiziqli erklikni amalda tekshirishning 3 ta usuli

### 1-usul: Determinant orqali ($n$ o'lchamli fazoda $n$ ta vektor bo'lsa)
Vektorlar koordinatalari matritsa ustunlariga (yoki satrlariga) yoziladi va determinant hisoblanadi:
- Agar **$\det \neq 0$** bo'lsa $\implies$ vektorlar **chiziqli erkli**!
- Agar **$\det = 0$** bo'lsa $\implies$ vektorlar **chiziqli bog'liq**!

### 2-usul: Matritsa rangi orqali (Vektorlar soni va o'lchami har xil bo'lsa)
Vektorlar satr qilib yozilib, Gauss usuli bilan pog'onasimon shaklga keltiriladi:
- Agar $\operatorname{rank}(A) = k$ (vektorlar soniga teng) bo'lsa $\implies$ **chiziqli erkli**;
- Agar $\operatorname{rank}(A) < k$ bo'lsa $\implies$ **chiziqli bog'liq**.

### 3-usul: O'lcham teoremasi
$n$ o'lchamli fazoda $n$ dan ortiq ixtiyoriy vektorlar to'plami (masalan, $\mathbb{R}^3$ da 4 ta vektor) **har doim chiziqli bog'liqdir**!

---

## 4. Fazoning o'lchami va Bazis

> [!NOTE] Bazis va O'lcham ta'rifi
> - **BAZIS:** $V$ fazodagi har qanday vektorni yagona usulda ifodalash mumkin bo'lgan **maksimal chiziqli erkli vektorlar sistemasiga** BAZIS deyiladi.
> - **O'LCHAM ($\operatorname{dim} V$):** Bazisni tashkil qiluvchi vektorlar soniga fazoning **o'lchami** deyiladi.
>   * Masalan, tekislik $\mathbb{R}^2$ da 2 ta no-kollinear vektor;
>   * Fazoda $\mathbb{R}^3$ da 3 ta no-komplanar vektor;
>   * $\mathbb{R}^n$ da $n$ ta standart ortlar: $\vec{e}_1 = (1, 0, \dots, 0)^T, \dots, \vec{e}_n = (0, 0, \dots, 1)^T$.

### Vektorni berilgan bazis bo'yicha yoyish:
Agar $e = (\vec{e}_1, \dots, \vec{e}_n)$ bazis bo'lsa, ixtiyoriy $\vec{x}$ vektor yagona chiziqli kombinatsiya ko'rinishida yoziladi:
$$
\vec{x} = c_1 \vec{e}_1 + c_2 \vec{e}_2 + \dots + c_n \vec{e}_n
$$
$(c_1, c_2, \dots, c_n)$ sonlar $\vec{x}$ vektorning $e$ bazisdagi **koordinatalari** deyiladi. Bu sonlarni topish uchun $n$ noma'lumli chiziqli tenglamalar sistemasi yechiladi.

---

## 5. Qadamma-qadam to'liq yechilgan amaliy misollar

### 1-misol: Vektorlarning chiziqli bog'liqligini tekshirish

**Masala:** Ushbu 3 ta vektor chiziqli erkli yoki chiziqli bog'liq ekanligini aniqlang:
$$
\vec{a}_1 = (1, 2, 3), \quad \vec{a}_2 = (2, -1, 1), \quad \vec{a}_3 = (1, 7, 8)
$$

#### Yechish:
Vektorlar koordinatalaridan $3 \times 3$ matritsa tuzamiz va uning determinantini hisoblaymiz:
$$
\det A = \begin{vmatrix} 1 & 2 & 1 \\ 2 & -1 & 7 \\ 3 & 1 & 8 \end{vmatrix}
$$
1-satr bo'yicha yoyamiz:
$$
\det A = 1 \cdot \begin{vmatrix} -1 & 7 \\ 1 & 8 \end{vmatrix} - 2 \cdot \begin{vmatrix} 2 & 7 \\ 3 & 8 \end{vmatrix} + 1 \cdot \begin{vmatrix} 2 & -1 \\ 3 & 1 \end{vmatrix}
$$
Ichki determinantlarni hisoblaymiz:
- $(-1)(8) - (7)(1) = -8 - 7 = -15$
- $(2)(8) - (7)(3) = 16 - 21 = -5$
- $(2)(1) - (-1)(3) = 2 + 3 = 5$

$$
\det A = 1(-15) - 2(-5) + 1(5) = -15 + 10 + 5 = 0
$$

$\det A = 0$ chiqdi!
Demak, vektorlar **chiziqli bog'liqdir**! Ular $\mathbb{R}^3$ da bazis bo'la olmaydi (uchala vektor bitta tekislikda yotadi).

Bog'liqlik koeffitsiyentini topamiz: $\vec{a}_3 = x \vec{a}_1 + y \vec{a}_2$.
$$
\begin{cases} x + 2y = 1 \\ 2x - y = 7 \\ 3x + y = 8 \end{cases} \implies x = 3, \; y = -1
$$
Haqiqatan ham: $\vec{a}_3 = 3\vec{a}_1 - \vec{a}_2$ (ya'ni $3\vec{a}_1 - \vec{a}_2 - \vec{a}_3 = \vec{0}$).

---

### 2-misol: Vektorni bazis bo'yicha yoyish va koordinatalarini topish

**Masala:** Ko'rsatingki, $\vec{e}_1 = (1, 1, 1), \vec{e}_2 = (1, 1, 2), \vec{e}_3 = (1, 2, 3)$ vektorlar $\mathbb{R}^3$ fazoda bazis tashkil qiladi va $\vec{b} = (6, 9, 14)$ vektorining ushbu bazisdagi koordinatalarini toping.

#### Yechish:

**1-qadam. Bazislik shartini tekshiramiz ($\det \neq 0$):**
$$
\det E = \begin{vmatrix} 1 & 1 & 1 \\ 1 & 1 & 2 \\ 1 & 2 & 3 \end{vmatrix}
$$
1-satrni 2- va 3-satrlardan ayiramiz:
$$
\begin{vmatrix} 1 & 1 & 1 \\ 0 & 0 & 1 \\ 0 & 1 & 2 \end{vmatrix} = 1 \cdot (0 - 1) = -1 \neq 0
$$
$\det \neq 0$, demak $\vec{e}_1, \vec{e}_2, \vec{e}_3$ chiziqli erkli va $\mathbb{R}^3$ fazoda **haqiqiy bazis tashkil qiladi**.

**2-qadam. $\vec{b} = c_1 \vec{e}_1 + c_2 \vec{e}_2 + c_3 \vec{e}_3$ yoyilmani topamiz:**
Koordinatalar bo'yicha yozamiz:
$$
\begin{cases}
1\cdot c_1 + 1\cdot c_2 + 1\cdot c_3 = 6 \\
1\cdot c_1 + 1\cdot c_2 + 2\cdot c_3 = 9 \\
1\cdot c_1 + 2\cdot c_2 + 3\cdot c_3 = 14
\end{cases}
$$

2-tenglamadan 1-tenglamani ayiramiz:
$$
(c_1 + c_2 + 2c_3) - (c_1 + c_2 + c_3) = 9 - 6 \implies \mathbf{c_3 = 3}
$$

3-tenglamadan 2-tenglamani ayiramiz:
$$
(c_1 + 2c_2 + 3c_3) - (c_1 + c_2 + 2c_3) = 14 - 9 \implies c_2 + c_3 = 5 \implies c_2 + 3 = 5 \implies \mathbf{c_2 = 2}
$$

1-tenglamadan $c_1$ ni topamiz:
$$
c_1 + 2 + 3 = 6 \implies \mathbf{c_1 = 1}
$$

**Tekshirish:**
$$
1 \cdot \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix} + 2 \cdot \begin{pmatrix} 1 \\ 1 \\ 2 \end{pmatrix} + 3 \cdot \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix} = \begin{pmatrix} 1 + 2 + 3 \\ 1 + 2 + 6 \\ 1 + 4 + 9 \end{pmatrix} = \begin{pmatrix} 6 \\ 9 \\ 14 \end{pmatrix} = \vec{b}
$$
Hisob-kitob to'liq mos keldi!

**Javob:** Yoyilma: $\vec{b} = \vec{e}_1 + 2\vec{e}_2 + 3\vec{e}_3$. Yangi bazisdagi koordinatalar: $(1; \; 2; \; 3)_e$.

---

## 6. Talabalar yo'l qo'yadigan tuzoqlar

> [!WARNING] Imtihonda ehtiyot bo'ling!
> 1. **Vektorlar soni va fazo o'lchami:** 3 o'lchamli fazoda berilgan 4 ta vektorni "chiziqli erkli bo'lishi mumkin" deb tekshirib o'tirish shart emas. Har qanday 4 ta vektor $\mathbb{R}^3$ da avtomatik ravishda chiziqli bog'liqdir!
> 2. **Vektorni bazis bo'yicha yoyishda tenglamalar sistemasini tuzish:** Vektorlar koordinatalari matritsaning satrlariga emas, aynan **ustunlariga** yozilishi shart! Agar satrga yozsangiz, transponirlangan sistema hosil bo'lib, mutlaqo noto'g'ri koordinatalar chiqadi.
> 3. **Nol vektorni o'z ichiga olgan sistema:** Agar vektorlar to'plamida nol vektor $\vec{0}$ qatnashsa, u sistema hech qachon chiziqli erkli bo'la olmaydi ($0 \cdot \dots + 1 \cdot \vec{0} = \vec{0}$).

---

## 7. Mustaqil yechish uchun amaliy mashqlar

1. $\vec{v}_1 = (1, 3), \vec{v}_2 = (2, 6)$ vektorlar chiziqli erklimi?
   - *Javob:* $\vec{v}_2 = 2\vec{v}_1 \implies$ kollinear, demak **chiziqli bog'liq**.

2. $\vec{a} = (1, 0, 1), \vec{b} = (0, 1, 1), \vec{c} = (1, 1, 0)$ vektorlarning bazis tashkil etishini isbotlang va $\vec{x} = (2, 4, 2)$ vektorning ushbu bazisdagi koordinatalarini toping.
   - *Javob:* $\det = -2 \neq 0 \implies$ bazis. Koordinatalar: $c_1 = 0, c_2 = 2, c_3 = 2 \implies \vec{x} = 2\vec{b} + 2\vec{c}$.
