---
title: "Kvadratik formani ortogonal almashtirish bilan kanonik ko'rinishga keltirish"
module: "chiziqli-algebra"
order: 17
duration: "30 daqiqa"
category: "Kvadratik formalar"
difficulty: "Qiyin"
description: "Kvadratik formaning simmetrik matritsasi, xos sonlar va ortonormallangan xos vektorlar, ortogonal almashtirish matritsasi Q va kanonik shaklga keltirishning 5 bosqichli algoritmi."
---

## Kirish: Kvadratik shakllarning ichki geometriyasi

Kvadratik formalar oliy matematikaning deyarli barcha jabhalarida uchraydi:
- Ko'p o'zgaruvchili funksiyalarning ekstremumlarini tekshirishda (Gesse matritsasi);
- Nazariy mexanikada inersiya tenzorini bosh o'qlarga keltirishda;
- Kvant mexanikasida operatorlarning o'rtacha qiymatlarini hisoblashda;
- Mashinali o'rganishda asosiy komponentlar tahlilida (PCA — Principal Component Analysis).

Kvadratik formani kanonik shaklga keltirishning ikki xil yondashuvi mavjud:
1. **Lagranj usuli** (to'la kvadratlarni ketma-ket ajratish) — algebraik jihatdan oson, biroq u yangi koordinata o'qlarini qiyshaytiradi (burchaklarni o'zgartiradi);
2. **Ortogonal almashtirish usuli** — koordinata o'qlarining perpendikulyarligini va masofalarni qat'iy saqlagan holda (ya'ni fazoni faqat burish orqali) kvadratik formani uning xos o'qlariga keltiradi.

Ushbu darsda biz kvadratik formani ortogonal almashtirish orqali kanonik ko'rinishga keltirishning to'liq 5 bosqichli algoritmini va $2\times 2$ hamda $3\times 3$ o'lchamli to'liq yechilgan misollarni o'rganamiz.

---

## 1. Kvadratik forma va uning simmetrik matritsasi

$n$ ta noma'lumli $x_1, x_2, \dots, x_n$ o'zgaruvchilarning **kvadratik formasi** deb, barcha hadlari 2-darajali bo'lgan bir jinsli ko'phadga aytiladi:

$$
f(x_1, x_2, \dots, x_n) = \sum_{i=1}^n \sum_{j=1}^n a_{ij} x_i x_j
$$

Matritsa ko'rinishida:

$$
f(X) = X^T A X
$$

bu yerda $X = \begin{pmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end{pmatrix}$, $A$ esa **haqiqiy simmetrik matritsadir** ($A = A^T$, ya'ni $a_{ij} = a_{ji}$).

> **Simmetrik matritsani tuzish qoidasi:**
> - Bosh diagonaldagi $a_{ii}$ elementlar $x_i^2$ kvadratlarning koeffitsiyentlaridir.
> - Diagondan tashqaridagi $a_{ij}$ va $a_{ji}$ elementlar aralash $x_i x_j$ ko'paytmasi oldidagi koeffitsiyentning teng yarmiga teng: $a_{ij} = a_{ji} = \frac{1}{2} c_{ij}$.

---

## 2. Ortogonal almashtirish tushunchasi ($X = Q Y$)

Faraz qilaylik, biz yangi $Y = (y_1, y_2, \dots, y_n)^T$ o'zgaruvchilarga o'tmoqchimiz:

$$
X = Q \cdot Y
$$

> **Ta'rif:** Agar $Q$ kvadrat matritsa uchun quyidagi shart bajarilsa, u **ortogonal matritsa** deyiladi:
> 
> $$
> Q^T Q = Q Q^T = E \iff Q^{-1} = Q^T
> $$

### Ortogonal almashtirishning ajoyib xossalari:
1. **Masofalarni saqlaydi (Izometriya):**
   
$$
   \|X\|^2 = X^T X = (QY)^T (QY) = Y^T Q^T Q Y = Y^T E Y = \|Y\|^2
   
$$
2. **Burchaklarni saqlaydi:** Vektorlarning skalyar ko'paytmasi o'zgarmaydi.
3. Yangi bazis vektorlari o'zaro perpendikulyar va birlik uzunlikka ega (ortonormallangan) bo'lib qoladi.
4. Fazoda bu almashtirish faqat **burish (rotation)** yoki **ko'zgudagi akslantirish (reflection)** demakdir.

---

## 3. Kanonik shaklga keltirishning 5 bosqichli algoritmi

### Chiziqli algebraning fundamental teoremasi:
> Har qanday haqiqiy simmetrik matritsa $A$ uchun shunday ortogonal matritsa $Q$ mavjudki, $Q^T A Q = D$ matritsasi diagonal bo'ladi, bunda diagonal elementlar $A$ matritsaning xos sonlaridan iborat:
> 
> $$
> D = \begin{pmatrix} \lambda_1 & 0 & \dots & 0 \\ 0 & \lambda_2 & \dots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \dots & \lambda_n \end{pmatrix}
> $$

Ushbu teoremaga asoslangan 5 bosqichli amaliy algoritm:

1. **1-bosqich: Matritsani tuzish.**
   Kvadratik formaning simmetrik matritsasi $A$ yoziladi.
2. **2-bosqich: Xos sonlarni topish.**
   Xarakteristik tenglama tuziladi va yechiladi:
   
$$
   \det(A - \lambda E) = 0 \implies \lambda_1, \lambda_2, \dots, \lambda_n
   
$$
3. **3-bosqich: Xos vektorlarni topish.**
   Har bir $\lambda_i$ uchun bir jinsli tenglamalar sistemasi yechiladi:
   
$$
   (A - \lambda_i E) \vec{v}_i = 0
   
$$
4. **4-bosqich: Ortonormallash va $Q$ matritsani tuzish.**
   Turli xos sonlarga mos keluvchi xos vektorlar avtomatik ravishda ortogonal bo'ladi. Har bir xos vektor o'z uzunligiga bo'linib, normallanadi:
   
$$
   \vec{e}_i = \frac{\vec{v}_i}{\|\vec{v}_i\|}
   
$$
   Ushbu ustunlardan ortogonal o'tish matritsasi tuziladi:
   
$$
   Q = \begin{pmatrix} \vec{e}_1 & \vec{e}_2 & \dots & \vec{e}_n \end{pmatrix}
   
$$
5. **5-bosqich: Kanonik shaklni yozish.**
   Kvadratik formaning kanonik shakli:
   
$$
   f(Y) = \lambda_1 y_1^2 + \lambda_2 y_2^2 + \dots + \lambda_n y_n^2
   
$$

---

## 4. To'liq yechilgan namunaviy misollar

### 1-misol ($2 \times 2$ o'lchamli forma)

> **Masala:**
> Quyidagi kvadratik formani ortogonal almashtirish yordamida kanonik shaklga keltiring va mos o'tish matritsasini toping:
> 
> $$
> f(x_1, x_2) = 5x_1^2 + 4x_1 x_2 + 8x_2^2
> $$

**Yechish:**

#### 1-qadam: Simmetrik matritsani tuzamiz
$x_1^2$ koeffitsiyenti $5$, $x_2^2$ koeffitsiyenti $8$, aralash had $4x_1 x_2 \implies a_{12} = a_{21} = 2$:

$$
A = \begin{pmatrix} 5 & 2 \\ 2 & 8 \end{pmatrix}
$$

#### 2-qadam: Xarakteristik tenglama va xos sonlar

$$
\det(A - \lambda E) = \begin{vmatrix} 5 - \lambda & 2 \\ 2 & 8 - \lambda \end{vmatrix} = 0
$$

$$
(5 - \lambda)(8 - \lambda) - 4 = 0 \implies \lambda^2 - 13\lambda + 40 - 4 = 0 \implies \lambda^2 - 13\lambda + 36 = 0
$$

Viyet teoremasiga ko'ra:

$$
(\lambda - 9)(\lambda - 4) = 0 \implies \lambda_1 = 9, \quad \lambda_2 = 4
$$

Demak, kanonik ko'rinish quyidagicha bo'ladi:

$$
f(y_1, y_2) = 9y_1^2 + 4y_2^2
$$

#### 3-qadam: Xos vektorlarni hisoblaymiz

1. $\lambda_1 = 9$ bo'lganda:
   
$$
   (A - 9E)\vec{v}_1 = 0 \implies \begin{pmatrix} 5 - 9 & 2 \\ 2 & 8 - 9 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} \implies \begin{pmatrix} -4 & 2 \\ 2 & -1 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}
   
$$
   Tenglama: $2v_1 - v_2 = 0 \implies v_2 = 2v_1$.
   $v_1 = 1$ deb olsak:
   
$$
   \vec{v}_1 = \begin{pmatrix} 1 \\ 2 \end{pmatrix}
   
$$

2. $\lambda_2 = 4$ bo'lganda:
   
$$
   (A - 4E)\vec{v}_2 = 0 \implies \begin{pmatrix} 5 - 4 & 2 \\ 2 & 8 - 4 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}
   
$$
   Tenglama: $v_1 + 2v_2 = 0 \implies v_1 = -2v_2$.
   $v_2 = 1$ deb olsak:
   
$$
   \vec{v}_2 = \begin{pmatrix} -2 \\ 1 \end{pmatrix}
   
$$

Ortogonallikni tekshiramiz: $\vec{v}_1 \cdot \vec{v}_2 = 1(-2) + 2(1) = 0$. Ortogonal!

#### 4-qadam: Ortonormallash va $Q$ matritsani tuzish
Vektorlarning uzunliklari:

$$
\|\vec{v}_1\| = \sqrt{1^2 + 2^2} = \sqrt{5}, \quad \|\vec{v}_2\| = \sqrt{(-2)^2 + 1^2} = \sqrt{5}
$$

Ortonormallangan bazis:

$$
\vec{e}_1 = \frac{1}{\sqrt{5}} \begin{pmatrix} 1 \\ 2 \end{pmatrix}, \quad \vec{e}_2 = \frac{1}{\sqrt{5}} \begin{pmatrix} -2 \\ 1 \end{pmatrix}
$$

Ortogonal almashtirish matritsasi:

$$
Q = \frac{1}{\sqrt{5}} \begin{pmatrix} 1 & -2 \\ 2 & 1 \end{pmatrix}
$$

O'zgaruvchilarni almashtirish:

$$
\begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = \frac{1}{\sqrt{5}} \begin{pmatrix} 1 & -2 \\ 2 & 1 \end{pmatrix} \begin{pmatrix} y_1 \\ y_2 \end{pmatrix} \iff \begin{cases} x_1 = \frac{1}{\sqrt{5}}(y_1 - 2y_2) \\ x_2 = \frac{1}{\sqrt{5}}(2y_1 + y_2) \end{cases}
$$

---

### 2-misol ($3 \times 3$ o'lchamli forma)

> **Masala:**
> Quyidagi 3 o'zgaruvchili kvadratik formani ortogonal almashtirish bilan kanonik ko'rinishga keltiring:
> 
> $$
> f(x_1, x_2, x_3) = 3x_1^2 + 4x_2^2 + 5x_3^2 + 4x_1 x_2 + 4x_2 x_3
> $$

**Yechish:**

#### 1-qadam: Simmetrik matritsani tuzamiz

$$
A = \begin{pmatrix}
3 & 2 & 0 \\
2 & 4 & 2 \\
0 & 2 & 5
\end{pmatrix}
$$

#### 2-qadam: Xarakteristik tenglama va xos sonlar

$$
\det(A - \lambda E) = \begin{vmatrix}
3 - \lambda & 2 & 0 \\
2 & 4 - \lambda & 2 \\
0 & 2 & 5 - \lambda
\end{vmatrix} = 0
$$

Determinantni 1-satr bo'yicha yoyamiz:

$$
(3 - \lambda) \begin{vmatrix} 4 - \lambda & 2 \\ 2 & 5 - \lambda \end{vmatrix} - 2 \begin{vmatrix} 2 & 2 \\ 0 & 5 - \lambda \end{vmatrix} = 0
$$

$$
(3 - \lambda)\left[(4 - \lambda)(5 - \lambda) - 4\right] - 2\left[2(5 - \lambda)\right] = 0
$$

$$
(3 - \lambda)(\lambda^2 - 9\lambda + 16) - 4(5 - \lambda) = 0
$$

$$
(3\lambda^2 - 27\lambda + 48 - \lambda^3 + 9\lambda^2 - 16\lambda) - 20 + 4\lambda = 0
$$

$$
-\lambda^3 + 12\lambda^2 - 39\lambda + 28 = 0 \iff \lambda^3 - 12\lambda^2 + 39\lambda - 28 = 0
$$

Ildizlarni topamiz:
- $\lambda = 1: 1 - 12 + 39 - 28 = 0 \implies \lambda_1 = 1$ ildiz!
- Ko'phadni $(\lambda - 1)$ ga bo'lsak: $\lambda^2 - 11\lambda + 28 = (\lambda - 4)(\lambda - 7) = 0$.

Demak, xos sonlar:

$$
\lambda_1 = 1, \quad \lambda_2 = 4, \quad \lambda_3 = 7
$$

Kvadratik formaning kanonik ko'rinishi:

$$
f(Y) = 1 \cdot y_1^2 + 4 \cdot y_2^2 + 7 \cdot y_3^2
$$

#### 3-qadam: Xos vektorlarni hisoblash

1. **$\lambda_1 = 1$ uchun:**
   
$$
   \begin{pmatrix} 2 & 2 & 0 \\ 2 & 3 & 2 \\ 0 & 2 & 4 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \\ v_3 \end{pmatrix} = 0
   
$$
   - 1-tenglama: $2v_1 + 2v_2 = 0 \implies v_2 = -v_1$;
   - 3-tenglama: $2v_2 + 4v_3 = 0 \implies v_3 = -\frac{1}{2} v_2 = \frac{1}{2} v_1$.
   $v_1 = 2$ deb olsak: $v_2 = -2, v_3 = 1$.
   
$$
   \vec{v}_1 = \begin{pmatrix} 2 \\ -2 \\ 1 \end{pmatrix}, \quad \|\vec{v}_1\| = \sqrt{2^2 + (-2)^2 + 1^2} = \sqrt{9} = 3
   
$$

2. **$\lambda_2 = 4$ uchun:**
   
$$
   \begin{pmatrix} -1 & 2 & 0 \\ 2 & 0 & 2 \\ 0 & 2 & 1 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \\ v_3 \end{pmatrix} = 0
   
$$
   - 1-tenglama: $-v_1 + 2v_2 = 0 \implies v_1 = 2v_2$;
   - 3-tenglama: $2v_2 + v_3 = 0 \implies v_3 = -2v_2$.
   $v_2 = 1$ deb olsak: $v_1 = 2, v_3 = -2$.
   
$$
   \vec{v}_2 = \begin{pmatrix} 2 \\ 1 \\ -2 \end{pmatrix}, \quad \|\vec{v}_2\| = \sqrt{2^2 + 1^2 + (-2)^2} = \sqrt{9} = 3
   
$$

3. **$\lambda_3 = 7$ uchun:**
   
$$
   \begin{pmatrix} -4 & 2 & 0 \\ 2 & -3 & 2 \\ 0 & 2 & -2 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \\ v_3 \end{pmatrix} = 0
   
$$
   - 1-tenglama: $-4v_1 + 2v_2 = 0 \implies v_2 = 2v_1$;
   - 3-tenglama: $2v_2 - 2v_3 = 0 \implies v_3 = v_2 = 2v_1$.
   $v_1 = 1$ deb olsak: $v_2 = 2, v_3 = 2$.
   
$$
   \vec{v}_3 = \begin{pmatrix} 1 \\ 2 \\ 2 \end{pmatrix}, \quad \|\vec{v}_3\| = \sqrt{1^2 + 2^2 + 2^2} = \sqrt{9} = 3
   
$$

#### 4-qadam: Ortogonal matritsa $Q$

Barcha xos vektorlar uzunligi $3$ ga teng va o'zaro ortogonaldir:
- $\vec{v}_1 \cdot \vec{v}_2 = 4 - 2 - 2 = 0$
- $\vec{v}_1 \cdot \vec{v}_3 = 2 - 4 + 2 = 0$
- $\vec{v}_2 \cdot \vec{v}_3 = 2 + 2 - 4 = 0$

Ortogonal o'tish matritsasi $Q$:

$$
Q = \frac{1}{3} \begin{pmatrix}
2 & 2 & 1 \\
-2 & 1 & 2 \\
1 & -2 & 2
\end{pmatrix}
$$

Almashtirish formulasi: $X = Q Y$.

---

## 5. Lagranj usuli bilan ortogonal usulni solishtirish

| Mezon | Lagranj usuli (To'la kvadratlar) | Ortogonal almashtirish usuli |
|---|---|---|
| **Hisoblash tezligi** | Juda tez va oson (maktab arifmetikasi) | Nisbatan uzun (xos sonlar va vektorlar talab etiladi) |
| **Kanonik koeffitsiyentlar** | Bir qiymatli emas (to'la kvadrat ajratish tartibiga bog'liq) | **Yagona va invariant** (matritsaning xos sonlari $\lambda_i$) |
| **Geometrik ma'nosi** | Koordinata o'qlarini qiyshaytiradi (burchaklar buziladi) | **Masofalar va to'g'ri burchaklarni to'liq saqlaydi** (faqat burish) |
| **Fizika va texnikada** | Kam qo'llaniladi | Inersiya bosh o'qlari, kvant holatlar va PCA asosidir |

---

## 6. Mustaqil mashqlar va javoblar

### 1-masala
Quyidagi kvadratik formani ortogonal almashtirish yordamida kanonik shaklga keltiring va $Q$ matritsasini toping:

$$
f(x_1, x_2) = 6x_1^2 - 4x_1 x_2 + 3x_2^2
$$

### 2-masala
Quyidagi simmetrik matritsaning xos sonlarini toping va mos kvadratik formaning kanonik ko'rinishini yozing:

$$
A = \begin{pmatrix} 1 & 4 \\ 4 & 7 \end{pmatrix}
$$

---

### Javoblar va tekshirish

#### 1-masala:
- $A = \begin{pmatrix} 6 & -2 \\ -2 & 3 \end{pmatrix}$.
- $\det(A - \lambda E) = (6 - \lambda)(3 - \lambda) - 4 = \lambda^2 - 9\lambda + 14 = (\lambda - 7)(\lambda - 2) = 0$.
- Xos sonlar: $\lambda_1 = 7, \lambda_2 = 2$.
- Kanonik ko'rinish: $f(Y) = 7y_1^2 + 2y_2^2$.
- $\lambda_1 = 7$: $-v_1 - 2v_2 = 0 \implies \vec{v}_1 = \begin{pmatrix} 2 \\ -1 \end{pmatrix}, \|\vec{v}_1\| = \sqrt{5}$.
- $\lambda_2 = 2$: $4v_1 - 2v_2 = 0 \implies \vec{v}_2 = \begin{pmatrix} 1 \\ 2 \end{pmatrix}, \|\vec{v}_2\| = \sqrt{5}$.
- $Q = \frac{1}{\sqrt{5}} \begin{pmatrix} 2 & 1 \\ -1 & 2 \end{pmatrix}$.

#### 2-masala:
- $\det(A - \lambda E) = (1 - \lambda)(7 - \lambda) - 16 = \lambda^2 - 8\lambda - 9 = (\lambda - 9)(\lambda + 1) = 0$.
- Xos sonlar: $\lambda_1 = 9, \lambda_2 = -1$.
- Kanonik ko'rinish: $f(Y) = 9y_1^2 - y_2^2$.
