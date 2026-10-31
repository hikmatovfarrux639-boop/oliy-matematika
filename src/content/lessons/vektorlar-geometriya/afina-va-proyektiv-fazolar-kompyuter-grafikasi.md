---
title: "Affin fazo, bir jinsli koordinatalar va 3D kompyuter grafikasi transformatsiyalari"
description: "Affin almashtirishlar, 4x4 bir jinsli koordinata matritsalari, 3D fazoda burish, siljitish va proyeksiyalash matematikasi."
module: "vektorlar-geometriya"
order: 15
---

## 📌 Kirish va Amaliy Mohiyati

Zamonaviy kompyuter o'yinlari (Unity, Unreal Engine), kino animatsiyalari (Pixar, Blender), kompyuter ko'rishi (Computer Vision) va avtonom robototexnikada har bir uch o'lchovli model millionlab uchburchakli poligonlardan tashkil topgan. Ushbu obyektlarning harakatlanishi, kameraga nisbatan burilishi, masshtabining o'zgarishi va nihoyat tekis 2D monitor ekranida chuqurlik (perspektiva) bilan aks ettirilishi sof **affin va proyektiv geometriya** qonuniyatlariga tayanadi.

Oddiy $3 \times 3$ o'lchamli matritsalar masshtablash va burishni ifodalay olsa-da, parallel ko'chirishni (vektor qo'shishni) bitta matritsaviy ko'paytirish ko'rinishida bajara olmaydi. Bu muammoni hal etish uchun Avgust Myobius tomonidan kiritilgan **bir jinsli koordinatalar** (homogeneous coordinates) tizimi qo'llanadi. Natijada barcha 3D fazoviy operatsiyalar $4 \times 4$ o'lchamli ixcham matritsalar ko'paytmasiga keltiriladi va GPU (videokarta) chiplarida parallel hisoblanadi.

---

## 📐 Asosiy Nazariya, Qoidalar va Teoremalar

### 1. Affin fazo va uning xossalari

Evklid vektor fazosida barcha vektorlar bitta umumiy koordinatalar boshidan chiquvchi yo'nalishlar bo'lsa, **affin fazo** $\mathbb{A}^n$ geometrik nuqtalar va ular orasidagi bog'lovchi vektorlar tizimidir:
- Har qanday ikkita $A, B \in \mathbb{A}^n$ nuqta uchun yagona $\vec{v} = \vec{AB} = B - A$ vektori mavjud.
- Nuqtaga vektor qo'shilsa, yangi nuqta hosil bo'ladi: $A + \vec{v} = B$.
- **Affin almashtirish:** To'g'ri chiziqlarni to'g'ri chiziqlarga, tekisliklarni tekisliklarga, parallellikni parallellikka o'tkazuvchi va kesmani bo'lish nisbatini saqlovchi o'zaro bir qiymatli akslantirishdir:
  $$
  \vec{x}' = A\vec{x} + \vec{t} \quad (\det A \neq 0)
  $$

---

### 2. Bir jinsli koordinatalar (Homogeneous Coordinates)

Fazodagi har qanday $P(x, y, z)$ nuqtaga uning to'rtinchi koordinatasi sifatida $w=1$ qo'shiladi:
$$
P = \begin{pmatrix} x \\ y \\ z \\ 1 \end{pmatrix}
$$

Fazodagi har qanday yo'nalish vektori $\vec{v} = (v_x, v_y, v_z)$ uchun esa $w=0$ qo'yiladi:
$$
\vec{v} = \begin{pmatrix} v_x \\ v_y \\ v_z \\ 0 \end{pmatrix}
$$

> [!NOTE] Geometrik algebraik mantiq:
> - **Nuqta + Vektor:** $[x, y, z, 1]^T + [v_x, v_y, v_z, 0]^T = [x+v_x, y+v_y, z+v_z, 1]^T \implies$ yangi **Nuqta**.
> - **Nuqta - Nuqta:** $[x_2, y_2, z_2, 1]^T - [x_1, y_1, z_1, 1]^T = [x_2-x_1, y_2-y_1, z_2-z_1, 0]^T \implies$ yo'naluvchi **Vektor**.
> - **Nuqta + Nuqta:** $1 + 1 = 2 \implies$ ma'noga ega emas!

---

### 3. Asosiy 3D Transformatsiya Matritsalari ($4 \times 4$)

#### 1. Parallel ko'chirish (Translation):
$$
T(t_x, t_y, t_z) = \begin{pmatrix}
1 & 0 & 0 & t_x \\
0 & 1 & 0 & t_y \\
0 & 0 & 1 & t_z \\
0 & 0 & 0 & 1
\end{pmatrix}
$$
Nuqtaga qo'llanganda: $T \cdot [x, y, z, 1]^T = [x + t_x, y + t_y, z + t_z, 1]^T$. Vektorga qo'llanganda esa $w=0$ bo'lgani sababli vektor o'zgarmaydi!

#### 2. Masshtablash (Scaling):
$$
S(s_x, s_y, s_z) = \begin{pmatrix}
s_x & 0 & 0 & 0 \\
0 & s_y & 0 & 0 \\
0 & 0 & s_z & 0 \\
0 & 0 & 0 & 1
\end{pmatrix}
$$

#### 3. Koordinata o'qlari atrofida burish (Rotation):
- **$Oz$ o'qi atrofida $\theta$ burchakka burish:**
  $$
  R_z(\theta) = \begin{pmatrix}
  \cos\theta & -\sin\theta & 0 & 0 \\
  \sin\theta & \cos\theta & 0 & 0 \\
  0 & 0 & 1 & 0 \\
  0 & 0 & 0 & 1
  \end{pmatrix}
  $$
- **$Ox$ o'qi atrofida $\alpha$ burchakka burish:**
  $$
  R_x(\alpha) = \begin{pmatrix}
  1 & 0 & 0 & 0 \\
  0 & \cos\alpha & -\sin\alpha & 0 \\
  0 & \sin\alpha & \cos\alpha & 0 \\
  0 & 0 & 0 & 1
  \end{pmatrix}
  $$
- **$Oy$ o'qi atrofida $\beta$ burchakka burish:**
  $$
  R_y(\beta) = \begin{pmatrix}
  \cos\beta & 0 & \sin\beta & 0 \\
  0 & 1 & 0 & 0 \\
  -\sin\beta & 0 & \cos\beta & 0 \\
  0 & 0 & 0 & 1
  \end{pmatrix}
  $$

---

### 4. Proyeksiyalash Matritsalari

1. **Ortogonal proyeksiya ($Oxy$ tekisligiga):**
   $$
   P_{ortho} = \begin{pmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 1 \end{pmatrix}
   $$

2. **Istiqbolli (perspektiv) proyeksiya:**
   Kamera markazi $(0, 0, 0)$ da, proyeksiya tekisligi $z = d$ masofada bo'lsa:
   $$
   P_{persp} = \begin{pmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 1/d & 0 \end{pmatrix}
   $$
   Natijada $[x, y, z, 1]^T$ vektor $\left[x, y, z, \frac{z}{d}\right]^T$ vektorga aylanadi. Proyektiv fazodan odatiy koordinataga qaytish uchun $w' = \frac{z}{d}$ ga bo'lamiz:
   $$
   x_{ekran} = \frac{x \cdot d}{z}, \quad y_{ekran} = \frac{y \cdot d}{z}
   $$
   Bu formula nima uchun masofa ($z$) kattalashgani sari obyekt ekranda mutanosib ravishda kichrayib ko'rinishini matematik isbotlaydi.

---

## 📝 Qadamma-qadam Yechilgan Amaliy Misollar

### 1-misol: Ketma-ket siljitish va burish matritsasini tuzish

**Masala:** $P(2, 0, 3)$ nuqta avval $\vec{t} = (1, 2, -1)$ vektorga siljitildi, so'ngra hosil bo'lgan nuqta $Oz$ o'qi atrofida soat strelkasiga qarshi $90^\circ$ ga burildi. Yakuniy nuqta koordinatalarini toping.

**Yechish:**
1. Siljitish matritsasi $T$ va burish matritsasi $R_z(90^\circ)$ ni yozamiz:
   $$
   T = \begin{pmatrix} 1 & 0 & 0 & 1 \\ 0 & 1 & 0 & 2 \\ 0 & 0 & 1 & -1 \\ 0 & 0 & 0 & 1 \end{pmatrix}, \quad R_z(90^\circ) = \begin{pmatrix} 0 & -1 & 0 & 0 \\ 1 & 0 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{pmatrix}
   $$
2. Umumiy transformatsiya matritsasi (almashtirishlar o'ngdan chapga ta'sir qiladi: $M = R \cdot T$):
   $$
   M = R_z \cdot T = \begin{pmatrix} 0 & -1 & 0 & 0 \\ 1 & 0 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{pmatrix} \begin{pmatrix} 1 & 0 & 0 & 1 \\ 0 & 1 & 0 & 2 \\ 0 & 0 & 1 & -1 \\ 0 & 0 & 0 & 1 \end{pmatrix} = \begin{pmatrix} 0 & -1 & 0 & -2 \\ 1 & 0 & 0 & 1 \\ 0 & 0 & 1 & -1 \\ 0 & 0 & 0 & 1 \end{pmatrix}
   $$
3. Nuqtaga ta'sir ettiramiz:
   $$
   P' = M \cdot P = \begin{pmatrix} 0 & -1 & 0 & -2 \\ 1 & 0 & 0 & 1 \\ 0 & 0 & 1 & -1 \\ 0 & 0 & 0 & 1 \end{pmatrix} \begin{pmatrix} 2 \\ 0 \\ 3 \\ 1 \end{pmatrix} = \begin{pmatrix} 0(2) - 1(0) + 0(3) - 2(1) \\ 1(2) + 0(0) + 0(3) + 1(1) \\ 0(2) + 0(0) + 1(3) - 1(1) \\ 0 + 0 + 0 + 1 \end{pmatrix} = \begin{pmatrix} -2 \\ 3 \\ 2 \\ 1 \end{pmatrix}
   $$

**Javob:** Yakuniy nuqta $P'(-2, 3, 2)$.

---

### 2-misol: Ixtiyoriy tayanch nuqta atrofida burish

**Masala:** $A(3, 4, 0)$ nuqtani $C(1, 1, 0)$ markaz atrofida $Oz$ o'qiga parallel o'q bo'yicha $180^\circ$ burchakka burish matritsasini tuzing va yangi koordinatasini toping.

**Yechish:**
1. Ixtiyoriy $C$ nuqta atrofida burish 3 bosqichdan iborat:
   - $C$ nuqtani koordinatalar boshiga ko'chirish: $T(-1, -1, 0)$
   - Koordinatalar boshi atrofida $180^\circ$ burish: $R_z(180^\circ)$
   - Markazni o'z o'rniga qaytarish: $T(1, 1, 0)$
2. Natijaviy kompozitsiya matritsasi: $M = T(1, 1, 0) \cdot R_z(180^\circ) \cdot T(-1, -1, 0)$.
   $$
   R_z(180^\circ) = \begin{pmatrix} -1 & 0 & 0 & 0 \\ 0 & -1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{pmatrix}
   $$
3. Ko'paytmani bajaramiz:
   $$
   R_z(180^\circ) \cdot T(-1, -1, 0) = \begin{pmatrix} -1 & 0 & 0 & 1 \\ 0 & -1 & 0 & 1 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{pmatrix}
   $$
   $$
   M = \begin{pmatrix} 1 & 0 & 0 & 1 \\ 0 & 1 & 0 & 1 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{pmatrix} \begin{pmatrix} -1 & 0 & 0 & 1 \\ 0 & -1 & 0 & 1 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{pmatrix} = \begin{pmatrix} -1 & 0 & 0 & 2 \\ 0 & -1 & 0 & 2 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{pmatrix}
   $$
4. $A(3, 4, 0, 1)$ nuqtani hisoblaymiz:
   $$
   A' = M \cdot A = \begin{pmatrix} -1(3) + 2 \\ -1(4) + 2 \\ 0 \\ 1 \end{pmatrix} = \begin{pmatrix} -1 \\ -2 \\ 0 \\ 1 \end{pmatrix}
   $$

**Javob:** Yangi koordinata $A'(-1, -2, 0)$.

---

### 3-misol: Perspektiv proyeksiyalash va ekran koordinatalarini hisoblash

**Masala:** Fazoda 3D kubning uchburchakli yuz cho'qqisi $B(6, 4, 12)$ nuqtada joylashgan. Virtual kamera fokus masofasi $d = 3$ bo'lsa, ushbu nuqtaning kompyuter ekranidagi $(x_{scr}, y_{scr})$ koordinatasini bir jinsli koordinatalar orqali toping.

**Yechish:**
1. Perspektiv proyeksiya matritsasi:
   $$
   P_{persp} = \begin{pmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 1/3 & 0 \end{pmatrix}
   $$
2. $B(6, 4, 12, 1)$ ustun vektorini ko'paytiramiz:
   $$
   B' = P_{persp} \cdot B = \begin{pmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 1/3 & 0 \end{pmatrix} \begin{pmatrix} 6 \\ 4 \\ 12 \\ 1 \end{pmatrix} = \begin{pmatrix} 6 \\ 4 \\ 12 \\ \frac{12}{3} \end{pmatrix} = \begin{pmatrix} 6 \\ 4 \\ 12 \\ 4 \end{pmatrix}
   $$
3. Bir jinsli koordinatani normallashtiramiz (har bir hadni $w' = 4$ ga bo'lamiz):
   $$
   \left( \frac{6}{4}, \; \frac{4}{4}, \; \frac{12}{4}, \; 1 \right)^T = (1.5, \; 1.0, \; 3.0, \; 1)^T
   $$

**Javob:** Ekranda $x_{scr} = 1.5$ va $y_{scr} = 1.0$.

---

### 4-misol: Affin almashtirishda hajm va yuzaning o'zgarishi

**Masala:** 3D fazoda tomonlari birlik kub bo'lgan jismga quyidagi matritsa bilan berilgan affin almashtirish qo'llandi:
$$
A = \begin{pmatrix} 2 & 1 & 0 \\ 0 & 3 & 1 \\ 1 & 0 & 2 \end{pmatrix}
$$
Hosil bo'lgan parallelepiped hajmini hisoblang.

**Yechish:**
1. Affin geometriyada fazoviy shakl hajmining o'zgarish koeffitsiyenti almashtirish matritsasi determinantining moduliga teng:
   $$
   V_{yangi} = |\det A| \cdot V_{eski}
   $$
2. Determinantni hisoblaymiz:
   $$
   \det A = 2(3 \cdot 2 - 1 \cdot 0) - 1(0 \cdot 2 - 1 \cdot 1) + 0 = 2(6) - 1(-1) = 12 + 1 = 13
   $$
3. Birlik kub hajmi $V_{eski} = 1$ bo'lgani sababli:
   $$
   V_{yangi} = |13| \cdot 1 = 13
   $$

**Javob:** Hosil bo'lgan jism hajmi $V = 13$ ga teng.

---

## ⚠️ Talabalar Ko'p Yo'l Qo'yadigan Xatolar

> [!WARNING] Amaliyotda ehtiyot bo'ling!
> 1. **Transformatsiyalar tartibini almashtirib qo'yish:** Matritsalar ko'paytmasi kommutativ emas: $T \cdot R \neq R \cdot T$. Avval burib keyin siljitish bilan, avval siljitib keyin burish butunlay boshqa-boshqa nuqtalarga olib keladi.
> 2. **Vektor va nuqtaning $w$-koordinatasini chalkashtirish:** Siljitish matritsasi yo'nalish vektoriga qo'llanganda, oxirgi had $w=0$ bo'lgani uchun vektor siljimasligi kerak. Agar vektorga $w=1$ berilsa, u xato ravishda siljib ketadi.
> 3. **Perspektiv bo'linishni bajarmaslik:** $P_{persp}$ matritsasi bilan ko'paytirgach, haqiqiy ekran koordinatasini olish uchun albatta $x, y, z$ qiymatlarini hosil bo'lgan $w'$ komponentga bo'lish shart.

---

## 🎯 Mustaqil Yechish Uchun Masalalar

1. $P(1, 2, 3)$ nuqtani $Ox$ o'qi bo'yicha 2 marta, $Oy$ bo'yicha 3 marta, $Oz$ bo'yicha 0.5 marta cho'zuvchi masshtablash matritsasini tuzing va yangi koordinatalarini toping.
   - *Yechish:* $S = \text{diag}(2, 3, 0.5, 1)$. Yangi nuqta: $P' = (2, 6, 1.5)$.
   - *Javob:* $P'(2, 6, 1.5)$.

2. $M(4, 5, 0)$ nuqtani koordinatalar boshi atrofida $90^\circ$ ga burib, so'ngra $\vec{t} = (-2, 3, 0)$ vektorga siljitsak qaysi nuqtaga keladi?
   - *Yechish:* Avval burish: $(4, 5) \to (-5, 4)$. Keyin siljitish: $(-5-2, 4+3) = (-7, 7)$.
   - *Javob:* $(-7, 7, 0)$.

3. Nega ikkita nuqtaning o'rta nuqtasi affin kombinatsiya orqali aniqlanadi: $M = \frac{1}{2}A + \frac{1}{2}B$?
   - *Yechish:* Koeffitsiyentlar yig'indisi $\frac{1}{2} + \frac{1}{2} = 1$ bo'lgani sababli bir jinsli koordinataning 4-hadi $w = \frac{1}{2}(1) + \frac{1}{2}(1) = 1$ bo'lib, natija qat'iy geometrik Nuqta bo'lib qoladi.
   - *Javob:* Koeffitsiyentlar yig'indisi 1 ga teng bo'lgani uchun nuqtalik xossasi saqlanadi.

4. $d = 2$ fokus masofali kamerada $A(8, 10, 4)$ nuqtaning ekran koordinatalarini hisoblang.
   - *Yechish:* $x_{scr} = \frac{8 \cdot 2}{4} = 4, \; y_{scr} = \frac{10 \cdot 2}{4} = 5$.
   - *Javob:* $(4, 5)$.

---

## 💡 Xulosa va Imtihon Maslahatlari

- Kompyuter grafikasida "Model-View-Projection (MVP)" zanjiri qo'llanadi:
  $$
  v_{clip} = M_{projection} \cdot M_{view} \cdot M_{model} \cdot v_{local}
  $$
- Har doim esda tuting: transformatsiyalar o'ngdan chapga qarab nuqtaga ta'sir qiladi ($M_3 M_2 M_1 \vec{v}$).
- Agar masalada ixtiyoriy $C$ markaz atrofida burish so'ralsa: avval markazni $T(-C)$ bilan koordinata boshiga keltiring, o'q atrofida buring, so'ngra $T(+C)$ bilan orqaga qaytaring.
