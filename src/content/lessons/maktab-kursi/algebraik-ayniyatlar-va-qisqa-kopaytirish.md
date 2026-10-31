---
title: "Algebraik ayniyatlar va qisqa ko'paytirish formulalari"
module: "maktab-kursi"
order: 1
description: "Qisqa ko'paytirish formulalari, ko'phadlarni ko'paytuvchilarga ajratish, ildiz va daraja xossalari hamda algebraik kasrlar."
---

## Kirish: Oliy matematika poydevori

Oliy matematikaning barcha bo'limlarida — xoh limitlarni hisoblash, xoh murakkab integrallarni yechish yoki matritsalarni hisoblash bo'lsin — maktab algebrasining asosiy formulalari doimiy ravishda kerak bo'ladi. Statistikaga ko'ra, talabalar oliy matematikadan qiladigan xatolarning 80% dan ortig'i aynan elementar algebraik shakl almashtirishlar va ishoralardagi xatolar bilan bog'liq.

Ushbu darsda biz oliy matematika uchun eng zarur bo'lgan algebraik apparatni tizimli ravishda takrorlaymiz.

---

## 1. Qisqa ko'paytirishning asosiy formulalari

Har bir talaba yoddan va avtomat darajasida bilishi shart bo'lgan 7 ta asosiy formula:

### Kvadratlar formulalari
1. **Yig'indining kvadrati:**
   
$$
   (a + b)^2 = a^2 + 2ab + b^2
   
$$
2. **Ayirmaning kvadrati:**
   
$$
   (a - b)^2 = a^2 - 2ab + b^2
   
$$
3. **Kvadratlar ayirmasi:**
   
$$
   a^2 - b^2 = (a - b)(a + b)
   
$$

### Kublar formulalari
4. **Yig'indining kubi:**
   
$$
   (a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3 = a^3 + b^3 + 3ab(a + b)
   
$$
5. **Ayirmaning kubi:**
   
$$
   (a - b)^3 = a^3 - 3a^2b + 3ab^2 - b^3 = a^3 - b^3 - 3ab(a - b)
   
$$
6. **Kublar yig'indisi:**
   
$$
   a^3 + b^3 = (a + b)(a^2 - ab + b^2)
   
$$
7. **Kublar ayirmasi:**
   
$$
   a^3 - b^3 = (a - b)(a^2 + ab + b^2)
   
$$

> **Muhim eslatma:** $a^2 + ab + b^2$ va $a^2 - ab + b^2$ ifodalar to'liqsiz kvadratlar deyiladi. Ular haqiqiy sonlar maydonida ko'paytuvchilarga ajralmaydi ($D = -3b^2 < 0$).

---

## 2. Ko'phadlarni ko'paytuvchilarga ajratish usullari

Limitlar va integrallarni hisoblashda kasrlarni qisqartirish uchun ko'phadlarni ko'paytuvchilarga ajratish eng ko'p ishlatiladigan vositadir:

### 1-usul: Umumiy ko'paytuvchini qavsdan tashqariga chiqarish
Har bir hadda mavjud bo'lgan eng katta umumiy bo'luvchi qavs tashqarisiga chiqariladi:
$$
6x^3y^2 - 9x^2y^3 + 3x^2y^2 = 3x^2y^2(2x - 3y + 1)
$$

### 2-usul: Guruhlash usuli
Hadlar juftlab yoki uchtalab guruhlanadi, har bir guruhdan umumiy ko'paytuvchi chiqarilgach, umumiy qavs hosil qilinadi:
$$
x^3 - 3x^2 + 2x - 6 = x^2(x - 3) + 2(x - 3) = (x - 3)(x^2 + 2)
$$

### 3-usul: Kvadrat uchhadni ildizlari orqali ajratish
Agar $ax^2 + bx + c = 0$ tenglama ildizlari $x_1$ va $x_2$ bo'lsa, uchhad quyidagicha ajraladi:
$$
ax^2 + bx + c = a(x - x_1)(x - x_2)
$$

**Misol:** $2x^2 - 5x + 2$ ni ko'paytuvchilarga ajrating.$D = 25 - 16 = 9$. Ildizlar: $x_1 = \frac{5+3}{4} = 2$, $x_2 = \frac{5-3}{4} = \frac{1}{2}$.
$$
2x^2 - 5x + 2 = 2(x - 2)\left(x - \frac{1}{2}\right) = (x - 2)(2x - 1)
$$

---

## 3. Daraja va ildizlarning xossalari

### Daraja xossalari ($a > 0, b > 0$):
- $a^0 = 1 \quad (a \neq 0)$
- $a^{-n} = \frac{1}{a^n}$
- $a^m \cdot a^n = a^{m+n}$
- $\frac{a^m}{a^n} = a^{m-n}$
- $(a^m)^n = a^{m \cdot n}$
- $(ab)^n = a^n b^n$
- $\left(\frac{a}{b}\right)^n = \frac{a^n}{b^n}$

### Ildiz (ratsional daraja) xossalari:
- $a^{\frac{m}{n}} = \sqrt[n]{a^m} \quad (a > 0, n \in \mathbb{N}, n \ge 2)$
- $\sqrt[n]{ab} = \sqrt[n]{a} \cdot \sqrt[n]{b}$
- $\sqrt[n]{\frac{a}{b}} = \frac{\sqrt[n]{a}}{\sqrt[n]{b}}$
- $(\sqrt[n]{a})^m = \sqrt[n]{a^m}$
- $\sqrt[n]{\sqrt[k]{a}} = \sqrt[n \cdot k]{a}$

> **Tuzoq:** $\sqrt{x^2} = x$ deb yozish xatodir! To'g'ri qoida: $\sqrt{x^2} = \lvert x \rvert$. Masalan, agar $x = -5$ bo'lsa, $\sqrt{(-5)^2} = \sqrt{25} = 5 = \lvert -5 \rvert \neq -5$.

---

## 4. Kasr maxrajini irratsionallikdan qutqarish

Oliy matematikada limitlar va integrallarni hisoblashda qo'shma ifodaga ko'paytirish (ratsionallashtirish) favqulodda kuchli quroldir:

1. **Bir hadli ildiz:**
   
$$
   \frac{A}{\sqrt{B}} = \frac{A\sqrt{B}}{B}
   
$$
2. **Kvadrat ildizlar ayirmasi yoki yig'indisi:**
   $\sqrt{a} - \sqrt{b}$ ning qo'shmasi $\sqrt{a} + \sqrt{b}$ bo'ladi:
   
$$
   \frac{A}{\sqrt{a} - \sqrt{b}} = \frac{A(\sqrt{a} + \sqrt{b})}{(\sqrt{a} - \sqrt{b})(\sqrt{a} + \sqrt{b})} = \frac{A(\sqrt{a} + \sqrt{b})}{a - b}
   
$$
3. **Kub ildizlar ayirmasi:**
   $\sqrt[3]{a} - \sqrt[3]{b}$ ning to'ldiruvchi qo'shmasi to'liqsiz kvadrat $a^{\frac{2}{3}} + \sqrt[3]{ab} + b^{\frac{2}{3}}$ dir:
   
$$
   \frac{A}{\sqrt[3]{a} - \sqrt[3]{b}} = \frac{A(\sqrt[3]{a^2} + \sqrt[3]{ab} + \sqrt[3]{b^2})}{a - b}
   
$$

---

## Amaliy namunaviy misollar

### 1-misol: Algebraik kasrni qisqartirish
Kasrni soddalashtiring:
$$
\frac{x^3 - 8}{x^2 + x - 6}
$$

**Yechilishi:**
1. Suratni kublar ayirmasi formulasiga ko'ra ajratamiz:
   $$x^3 - 8 = x^3 - 2^3 = (x - 2)(x^2 + 2x + 4)$$
2. Maxrajdagi kvadrat uchhadning ildizlarini Viyet teoremasi bo'yicha topamiz:
   $x_1 + x_2 = -1, \, x_1 \cdot x_2 = -6 \implies x_1 = 2, \, x_2 = -3$.
   Demak: $x^2 + x - 6 = (x - 2)(x + 3)$.
3. Kasrga qo'yib, umumiy $(x - 2)$ hadni qisqartiramiz ($x \neq 2$ shartida):
   
$$
   \frac{(x - 2)(x^2 + 2x + 4)}{(x - 2)(x + 3)} = \frac{x^2 + 2x + 4}{x + 3}
   
$$

---

### 2-misol: Maxrajni irratsionallikdan qutqarish
Ifodani soddalashtiring:
$$
\frac{14}{\sqrt{5x + 9} - 3}
$$

**Yechilishi:**
Surat va maxrajni maxrajning qo'shmasi bo'lgan $(\sqrt{5x + 9} + 3)$ ga ko'paytiramiz:
$$
\frac{14(\sqrt{5x + 9} + 3)}{(\sqrt{5x + 9} - 3)(\sqrt{5x + 9} + 3)} = \frac{14(\sqrt{5x + 9} + 3)}{(5x + 9) - 9} = \frac{14(\sqrt{5x + 9} + 3)}{5x}
$$

---

## Mustaqil yechish uchun mashqlar

1. $x^4 - 16$ ifodani barcha chiziqli va kvadratik ko'paytuvchilarga ajrating.
2. Kasrni qisqartiring: $\frac{2x^2 + 5x - 3}{x^2 - 9}$.
3. Maxrajdagi irratsionallikdan qutqaring: $\frac{6}{\sqrt{7} - 1}$.

<details style="margin-top: 1rem; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); cursor: pointer;">
<summary style="font-weight: 700; color: var(--primary);">Javoblarni tekshirish</summary>

**1-masala:** $(x^2 - 4)(x^2 + 4) = (x - 2)(x + 2)(x^2 + 4)$.

    

**2-masala:** Surat: $2(x - 1/2)(x + 3) = (2x - 1)(x + 3)$. Maxraj: $(x - 3)(x + 3)$. Natija: $\frac{2x - 1}{x - 3}$.

    

**3-masala:** $\frac{6(\sqrt{7} + 1)}{(\sqrt{7})^2 - 1^2} = \frac{6(\sqrt{7} + 1)}{6} = \sqrt{7} + 1$.

</details>
