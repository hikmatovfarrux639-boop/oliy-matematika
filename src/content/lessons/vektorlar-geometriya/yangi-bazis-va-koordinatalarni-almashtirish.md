---
title: "Yangi bazisga o'tish, o'tish matritsasi va koordinata o'qlarini almashtirish"
module: "vektorlar-geometriya"
order: 12
duration: "25 daqiqa"
category: "Vektorlar algebrasi"
difficulty: "O'rtacha"
description: "Tekislik va fazoda yangi bazisga o'tish matritsasi, vektor koordinatalarining o'zgarishi, Dekart sistemasini parallel ko'chirish va burishning umumiy formulalari."
---

## Kirish: Kuzatuv nuqtasini o'zgartirish san'ati

Matematika, fizika va kompyuter grafikasida ko'pincha bitta obyektni turli burchaklardan yoki turli koordinatalar sistemasida tasvirlashga to'g'ri keladi. 

Masalan:
- 3D o'yindagi kamera o'z o'qi atrofida burilganda yoki personaj ortidan yurganda, butun virtual dunyo personajning yangi koordinatalar sistemasiga qayta hisoblanadi.
- Robototexnikada robotning har bir bo'g'ini (qo'li, panjasi) o'zining lokal koordinatalar sistemasiga ega bo'lib, ular umumiy bazaviy koordinata sistemasiga bog'lanadi.
- Analitik geometriyada qiyshaygan ellips yoki parabolani tekshirish uchun koordinata o'qlari buriladi.

Ushbu jarayonlarning barchasi bitta fundamental algebraik mexanizmga tayanadi — **yangi bazisga o'tish va o'tish matritsasi**.

---

## 1. Affin bazis va o'tish matritsasi $C$Faraz qilaylik,$n$-o'lchovli chiziqli fazoda (xususan, tekislikda $n=2$yoki fazoda$n=3$) ikkita bazis berilgan:
- **Eski bazis:** $B = (\vec{e}_1, \vec{e}_2, \dots, \vec{e}_n)$- **Yangi bazis:**$B' = (\vec{e}'_1, \vec{e}'_2, \dots, \vec{e}'_n)$

Yangi bazis vektorlarining har birini eski bazis vektorlarining chiziqli kombinatsiyasi sifatida ifodalash mumkin:

$$
\begin{cases}
\vec{e}'_1 = c_{11} \vec{e}_1 + c_{21} \vec{e}_2 + \dots + c_{n1} \vec{e}_n \\
\vec{e}'_2 = c_{12} \vec{e}_1 + c_{22} \vec{e}_2 + \dots + c_{n2} \vec{e}_n \\
\vdots \\
\vec{e}'_n = c_{1n} \vec{e}_1 + c_{2n} \vec{e}_2 + \dots + c_{nn} \vec{e}_n
\end{cases}
$$

> **Ta'rif:** Yangi bazis vektorlarining eski bazisdagi koordinatalaridan tuzilgan quyidagi matritsaga **eski bazisdan yangi bazisga o'tish matritsasi** deyiladi va $C$(yoki$T$) harfi bilan belgilanadi:
> 
> $$
> C = \begin{pmatrix}
> c_{11} & c_{12} & \dots & c_{1n} \\
> c_{21} & c_{22} & \dots & c_{2n} \\
> \vdots & \vdots & \ddots & \vdots \\
> c_{n1} & c_{n2} & \dots & c_{nn}
> \end{pmatrix}
> $$

### Oltin qoida (Ustunlar qoidasi):
O'tish matritsasi $C$ ning **$j$-ustuniga** yangi bazisning **$j$-vektori** koordinatalari yoziladi:

$$
C = \begin{pmatrix} \vec{e}'_1 & \vec{e}'_2 & \dots & \vec{e}'_n \end{pmatrix}
$$

Chunki yangi vektorlar bazis tashkil etadi (ular chiziqli erkli), o'tish matritsasi doimo **xosmasdir**, ya'ni uning determinanti nolga teng emas:

$$
\det C \neq 0
$$

Bu esa o'z navbatida teskari matritsa $C^{-1}$ doimo mavjudligini bildiradi.

---

## 2. Eski va yangi koordinatalar bog'lanishi

Ixtiyoriy vektor $\vec{x}$ fazoda yagona geometrik obyekt bo'lib, uning koordinatalari qaysi bazisda ifodalanishiga qarab turlicha bo'ladi:
- Eski bazisda: $\vec{x} = x_1 \vec{e}_1 + x_2 \vec{e}_2 + \dots + x_n \vec{e}_n$, koordinatalar ustuni $X = \begin{pmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end{pmatrix}$;
- Yangi bazisda: $\vec{x} = x'_1 \vec{e}'_1 + x'_2 \vec{e}'_2 + \dots + x'_n \vec{e}'_n$, koordinatalar ustuni $X' = \begin{pmatrix} x'_1 \\ x'_2 \\ \vdots \\ x'_n \end{pmatrix}$.

### Koordinatalarni bog'lovchi asosiy formulalar:

$$
X = C \cdot X'
$$

va teskarisi, vektorning yangi koordinatalarini eski koordinatalari orqali topish:

$$
X' = C^{-1} \cdot X
$$

> **Diqqat! Imtihondagi eng mashhur adashish:**
> Ko'pchilik talabalar shoshilib $X' = C \cdot X$ deb o'ylashadi. Bu mutlaqo noto'g'ri!
> Yangi bazis vektorlari $B' = B \cdot C$qoidasi bilan o'zgarsa, koordinatalar ustuni **kontravariant** (teskari) ravishda o'zgaradi:$X = C \cdot X'$, ya'ni yangi koordinatalar $X' = C^{-1} X$ orqali topiladi!

---

## 3. Dekart to'g'ri burchakli koordinatalar sistemasini ko'chirish va burish formulalari

Tekislikda $Oxy$ to'g'ri burchakli Dekart koordinatalar sistemasini o'zgartirishning ikkita asosiy harakati mavjud:

### 1. Koordinata o'qlarini parallel ko'chirish

Agar koordinata boshi $O(0, 0)$nuqtadan yangi$O'(x_0, y_0)$ nuqtaga ko'chirilsa, o'qlarning yo'nalishi va masshtabi o'zgarmaydi.
Tekislikdagi ixtiyoriy $M$nuqtaning eski$(x, y)$va yangi$(x', y')$ koordinatalari quyidagicha bog'lanadi:

$$
\begin{cases}
x = x' + x_0 \\
y = y' + y_0
\end{cases}
\iff
\begin{cases}
x' = x - x_0 \\
y' = y - y_0
\end{cases}
$$

---

### 2. Koordinata o'qlarini $\alpha$ burchakka burish

Faraz qilaylik, koordinata boshi $O$qo'zg'almas qoldirilib, har ikkala koordinata o'qi musbat yo'nalishda (soat miliga qarama-qarshi)$\alpha$ burchakka burildi.

Eski bazis ortlari: $\vec{i} = (1, 0)$, $\vec{j} = (0, 1)$.
Yangi bazis ortlari:

$$
\vec{i}' = \cos\alpha \cdot \vec{i} + \sin\alpha \cdot \vec{j} = \begin{pmatrix} \cos\alpha \\ \sin\alpha \end{pmatrix}
$$

$$
\vec{j}' = \cos\left(\alpha + 90^\circ\right) \cdot \vec{i} + \sin\left(\alpha + 90^\circ\right) \cdot \vec{j} = -\sin\alpha \cdot \vec{i} + \cos\alpha \cdot \vec{j} = \begin{pmatrix} -\sin\alpha \\ \cos\alpha \end{pmatrix}
$$

O'tish matritsasi:

$$
C = \begin{pmatrix}
\cos\alpha & -\sin\alpha \\
\sin\alpha & \cos\alpha
\end{pmatrix}
$$

Bu matritsa **ortogonal matritsa** bo'lib, uning determinanti $\det C = \cos^2\alpha + \sin^2\alpha = 1$ga teng. Uning teskarisi shunchaki transponirlanganiga teng:$C^{-1} = C^T$.

Koordinatalar bog'lanishi:
- **Eski koordinatalarni yangi orqali ifodalash ($X = C X'$):**
  
$$
  \begin{cases}
  x = x' \cos\alpha - y' \sin\alpha \\
  y = x' \sin\alpha + y' \cos\alpha
  \end{cases}
  
$$
- **Yangi koordinatalarni eski orqali ifodalash ($X' = C^{-1} X = C^T X$):**
  
$$
  \begin{cases}
  x' = x \cos\alpha + y \sin\alpha \\
  y' = -x \sin\alpha + y \cos\alpha
  \end{cases}
  
$$

---

### 3. Umumiy harakat (Burish va parallel ko'chirish birgalikda)

Agar koordinata o'qlari avval $\alpha$burchakka burilib, so'ngra yangi koordinata boshi$O'(x_0, y_0)$ nuqtaga ko'chirilsa:

$$
\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} \cos\alpha & -\sin\alpha \\ \sin\alpha & \cos\alpha \end{pmatrix} \begin{pmatrix} x' \\ y' \end{pmatrix} + \begin{pmatrix} x_0 \\ y_0 \end{pmatrix}
$$

yoki koordinatalarda:

$$
\begin{cases}
x = x' \cos\alpha - y' \sin\alpha + x_0 \\
y = x' \sin\alpha + y' \cos\alpha + y_0
\end{cases}
$$

---

## 4. Namunaviy amaliy misollar

### 1-misol: Tekislikda bazis almashtirish va vektorni yangi bazisda yoyish

Eski bazisda $\vec{e}_1, \vec{e}_2$ vektorlar va yangi bazis vektorlari berilgan:

$$
\vec{e}'_1 = 2\vec{e}_1 + 3\vec{e}_2, \quad \vec{e}'_2 = -\vec{e}_1 + \vec{e}_2
$$

Shuningdek, eski bazisda $\vec{x} = 3\vec{e}_1 + 7\vec{e}_2$ vektor berilgan.
1. Eski bazisdan yangi bazisga o'tish matritsasi $C$ ni tuzing;
2. $\vec{x}$ vektorining yangi bazisdagi koordinatalarini toping;
3. Natijani tekshiring.

**Yechish:**

1. O'tish matritsasini tuzamiz. Yangi vektorlar koordinatalari ustunlarga yoziladi:
   
$$
   C = \begin{pmatrix}
   2 & -1 \\
   3 & 1
   \end{pmatrix}
   
$$

2. $C$ ning determinantini va teskari matritsasini hisoblaymiz:
   
$$
   \det C = 2 \cdot 1 - (-1) \cdot 3 = 2 + 3 = 5 \neq 0
   
$$
   $2 \times 2$ o'lchamli matritsaning teskarisini topish qoidasi:
   
$$
   C^{-1} = \frac{1}{5} \begin{pmatrix} 1 & 1 \\ -3 & 2 \end{pmatrix}
   
$$

3. Yangi koordinatalar ustuni $X' = C^{-1} X$:
   
$$
   X' = \frac{1}{5} \begin{pmatrix} 1 & 1 \\ -3 & 2 \end{pmatrix} \begin{pmatrix} 3 \\ 7 \end{pmatrix} = \frac{1}{5} \begin{pmatrix} 1 \cdot 3 + 1 \cdot 7 \\ -3 \cdot 3 + 2 \cdot 7 \end{pmatrix} = \frac{1}{5} \begin{pmatrix} 10 \\ 5 \end{pmatrix} = \begin{pmatrix} 2 \\ 1 \end{pmatrix}
   
$$
   Demak, yangi bazisda:
   
$$
   \vec{x} = 2\vec{e}'_1 + 1\vec{e}'_2
   
$$

4. **Tekshirish:**
   
$$
   2\vec{e}'_1 + \vec{e}'_2 = 2(2\vec{e}_1 + 3\vec{e}_2) + 1(-\vec{e}_1 + \vec{e}_2) = 4\vec{e}_1 + 6\vec{e}_2 - \vec{e}_1 + \vec{e}_2 = 3\vec{e}_1 + 7\vec{e}_2 = \vec{x}
   
$$
   Yechim mutlaqo to'g'ri!

---

### 2-misol: Fazoda ($3 \times 3$) yangi bazisga o'tish

Fazoda eski bazis $B = (\vec{e}_1, \vec{e}_2, \vec{e}_3)$ va yangi bazis berilgan:

$$
\begin{cases}
\vec{e}'_1 = \vec{e}_1 + \vec{e}_2 + \vec{e}_3 \\
\vec{e}'_2 = \vec{e}_1 + 2\vec{e}_2 + 3\vec{e}_3 \\
\vec{e}'_3 = \vec{e}_1 + 4\vec{e}_2 + 9\vec{e}_3
\end{cases}
$$

Vektor eski bazisda $\vec{a} = (3, 7, 13)^T$ koordinatalarga ega bo'lsa, uning yangi bazisdagi koordinatalarini toping.

**Yechish:**

1. O'tish matritsasi $C$:
   
$$
   C = \begin{pmatrix}
   1 & 1 & 1 \\
   1 & 2 & 4 \\
   1 & 3 & 9
   \end{pmatrix}
   
$$
   (Bu mashhur Vandermond matritsasi: $\det C = (2 - 1)(3 - 1)(3 - 2) = 1 \cdot 2 \cdot 1 = 2 \neq 0$).

2. $X = C X'$ munosabatidan foydalanib, chiziqli sistemani Gauss yoki Kramer usuli bilan yechamiz:
   
$$
   \begin{pmatrix}
   1 & 1 & 1 \\
   1 & 2 & 4 \\
   1 & 3 & 9
   \end{pmatrix}
   \begin{pmatrix} x'_1 \\ x'_2 \\ x'_3 \end{pmatrix}
   =
   \begin{pmatrix} 3 \\ 7 \\ 13 \end{pmatrix}
   
$$
   Kengaytirilgan matritsa ustida elementar satr amallarini bajaramiz:
   
$$
   \begin{pmatrix}
   1 & 1 & 1 & | & 3 \\
   1 & 2 & 4 & | & 7 \\
   1 & 3 & 9 & | & 13
   \end{pmatrix}
   \xrightarrow{S_2 - S_1, \; S_3 - S_1}
   \begin{pmatrix}
   1 & 1 & 1 & | & 3 \\
   0 & 1 & 3 & | & 4 \\
   0 & 2 & 8 & | & 10
   \end{pmatrix}
   
$$
   
$$
   \xrightarrow{S_3 - 2S_2}
   \begin{pmatrix}
   1 & 1 & 1 & | & 3 \\
   0 & 1 & 3 & | & 4 \\
   0 & 0 & 2 & | & 2
   \end{pmatrix}
   
$$

3. Orqaga qaytish:
   - $2x'_3 = 2 \implies x'_3 = 1$-$x'_2 + 3(1) = 4 \implies x'_2 = 1$-$x'_1 + 1 + 1 = 3 \implies x'_1 = 1$Demak, yangi bazisda$\vec{a}$ vektorining koordinatalari:

$$
X' = \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix} \iff \vec{a} = \vec{e}'_1 + \vec{e}'_2 + \vec{e}'_3
$$

---

### 3-misol: Koordinata o'qlarini burish va egri chiziq tenglamasining soddalashishi

Tekislikda $xy = 1$(teng tomonli giperbola) tenglamasi berilgan. Koordinata o'qlarini$\alpha = 45^\circ$ burchakka burilgandagi yangi tenglamasini toping.

**Yechish:**

$\alpha = 45^\circ$bo'lganda$\cos 45^\circ = \sin 45^\circ = \frac{\sqrt{2}}{2} = \frac{1}{\sqrt{2}}$.
Burish formulalari:

$$
x = \frac{x' - y'}{\sqrt{2}}, \quad y = \frac{x' + y'}{\sqrt{2}}
$$

Ushbu ifodalarni $xy = 1$ tenglamaga qo'yamiz:

$$
\left(\frac{x' - y'}{\sqrt{2}}\right) \cdot \left(\frac{x' + y'}{\sqrt{2}}\right) = 1 \implies \frac{(x')^2 - (y')^2}{2} = 1 \implies \frac{(x')^2}{2} - \frac{(y')^2}{2} = 1
$$

Ko'rib turganimizdek, $45^\circ$ga burish natijasida maktabdan ma'lum bo'lgan teskari proporsionallik funksiyasi$y = \frac{1}{x}$ning grafigi aslida yarim o'qlari$a = b = \sqrt{2}$ bo'lgan **kanonik teng tomonli giperbola** ekanligi yaqqol namoyon bo'ldi!

---

## 5. Mustaqil mashqlar va javoblar

### 1-masala
Eski bazisda $\vec{e}_1, \vec{e}_2$berilgan. Yangi bazis:$\vec{e}'_1 = \vec{e}_1 + 2\vec{e}_2$, $\vec{e}'_2 = 3\vec{e}_1 + 5\vec{e}_2$.
Eski bazisdagi koordinatalari $\vec{v} = (5, 9)^T$ bo'lgan vektorning yangi bazisdagi koordinatalarini aniqlang.

### 2-masala
Koordinata o'qlari $\alpha = 30^\circ$ga burildi va koordinata boshi$O'(2, -3)$nuqtaga ko'chirildi. Yangi koordinatalar sistemasida koordinatalari$x' = \sqrt{3}, y' = 1$ bo'lgan nuqtaning eski koordinatalarini toping.

---

### Javoblar va tekshirish

#### 1-masala:
- O'tish matritsasi: $C = \begin{pmatrix} 1 & 3 \\ 2 & 5 \end{pmatrix}$.
- $\det C = 5 - 6 = -1$.
- $C^{-1} = \frac{1}{-1} \begin{pmatrix} 5 & -3 \\ -2 & 1 \end{pmatrix} = \begin{pmatrix} -5 & 3 \\ 2 & -1 \end{pmatrix}$.
- Yangi koordinatalar:
  
$$
  X' = \begin{pmatrix} -5 & 3 \\ 2 & -1 \end{pmatrix} \begin{pmatrix} 5 \\ 9 \end{pmatrix} = \begin{pmatrix} -25 + 27 \\ 10 - 9 \end{pmatrix} = \begin{pmatrix} 2 \\ 1 \end{pmatrix}
  
$$
- Tekshirish: $2\vec{e}'_1 + 1\vec{e}'_2 = 2(\vec{e}_1 + 2\vec{e}_2) + (3\vec{e}_1 + 5\vec{e}_2) = 5\vec{e}_1 + 9\vec{e}_2$. To'g'ri!

#### 2-masala:
- $\cos 30^\circ = \frac{\sqrt{3}}{2}$, $\sin 30^\circ = \frac{1}{2}$.
- $x = x' \cos 30^\circ - y' \sin 30^\circ + x_0 = \sqrt{3} \cdot \frac{\sqrt{3}}{2} - 1 \cdot \frac{1}{2} + 2 = \frac{3}{2} - \frac{1}{2} + 2 = 1 + 2 = 3$.
- $y = x' \sin 30^\circ + y' \cos 30^\circ + y_0 = \sqrt{3} \cdot \frac{1}{2} + 1 \cdot \frac{\sqrt{3}}{2} - 3 = \frac{2\sqrt{3}}{2} - 3 = \sqrt{3} - 3$.
- Nuqtaning eski koordinatalari: $(3; \sqrt{3} - 3)$.
