---
title: "Fazoda va tekislikda masofalar: Nuqtadan to'g'ri chiziqqacha, tekislikkacha va ayqash to'g'ri chiziqlar orasidagi masofa"
module: "vektorlar-geometriya"
order: 13
description: "Analitik geometriyada masofalar va metrik masalalar: Nuqtadan to'g'ri chiziqqacha masofa (2D va 3D), nuqtadan tekislikkacha masofa, parallel tekisliklar orasidagi masofa, ayqash to'g'ri chiziqlar orasidagi eng qisqa masofa va nuqtaning proyeksiyasi."
---

## 📌 Kirish va Geometrik/Fizik Mohiyat

Analitik geometriya va vektorlar algebrasining amaliyotdagi eng muhim bo'limlaridan biri — bu **metrik masalalar**, ya'ni fazoviy obyektlar orasidagi masofalar, burchaklar va proyeksiyalarni hisoblashdir.

Matematik jihatdan, bir nuqtadan ikkinchi obyektgacha (to'g'ri chiziq, tekislik, sirt) bo'lgan masofa — bu ushbu nuqtani mazkur obyektning barcha nuqtalari bilan tutashtiruvchi kesmalar uzunliklarining eng kichigi (infimumi) hisoblanadi:
$$
d(M_0, \Omega) = \inf_{P \in \Omega} |\vec{M_0 P}|
$$
Evklid geometriyasida bu eng qisqa masofa doimo **ortogonal perpendikulyar** bo'yicha erishiladi!

Zamonaviy muhandislik va texnologiyalarda masofalarni hisoblash algoritmlari har lahzada qo'llaniladi:
1. **Aviatsiya va havo harakatini boshqarish (ATC):** Fazoda turli balandlik va yo'nalishlarda harakatlanayotgan samolyotlar trayektoriyalari ayqash to'g'ri chiziqlardir. Havo dispetcherlik tizimlari ular orasidagi eng qisqa masofani uzluksiz tahlil qilib, xavfli yaqinlashuvlarning oldini oladi.
2. **3D kompyuter grafikasi va GameDev:** Ray-tracing (nurlarni kuzatish) texnologiyasi, qahramonlar va to'siqlar orasidagi to'qnashuvlarni aniqlash (Collision Detection).
3. **GPS va geolokatsiya:** Sun'iy yo'ldoshlar koordinatalaridan foydalanuvchigacha bo'lgan masofalarni o'lchash orqali yerdagi aniq joylashuvni aniqlash (trilateratsiya).
4. **Robototexnika va avtopilotlar:** Lidar va ultratovush sensorlari orqali devorlar, tekisliklar va harakatdagi to'siqlargacha bo'lgan perpendikulyar masofalarni aniqlash.

---

## 📐 Asosiy Nazariya, Qoidalar va Teoremalar

### 1. Tekislikda nuqtadan to'g'ri chiziqqacha masofa ($\mathbb{R}^2$)

Tekislikda $M_0(x_0, y_0)$ nuqta va umumiy tenglamasi bilan berilgan $L: Ax + By + C = 0$ to'g'ri chiziq berilgan bo'lsin.  
To'g'ri chiziqning normal vektori $\vec{n} = (A, B)$ hisoblanadi.

**Teorema:** $M_0$ nuqtadan $L$ to'g'ri chiziqqacha bo'lgan eng qisqa masofa quyidagi formula bilan hisoblanadi:
$$
d = \frac{|A x_0 + B y_0 + C|}{\sqrt{A^2 + B^2}}
$$

**Geometrik isboti (vektorlar proyeksiyasi):**  
To'g'ri chiziqda yotuvchi ixtiyoriy $M_1(x_1, y_1)$ nuqtani olamiz. U holda $A x_1 + B y_1 + C = 0 \implies C = -A x_1 - B y_1$.  
$M_0$ nuqtadan chiziqqa tushirilgan perpendikulyar uzunligi — bu $\vec{M_1 M_0} = (x_0 - x_1, y_0 - y_1)$ vektorining normal vektor $\vec{n} = (A, B)$ yo'nalishidagi proyeksiyasining moduliga tengdir:
$$
d = |\text{proj}_{\vec{n}} \vec{M_1 M_0}| = \frac{|\vec{M_1 M_0} \cdot \vec{n}|}{|\vec{n}|} = \frac{|A(x_0 - x_1) + B(y_0 - y_1)|}{\sqrt{A^2 + B^2}} = \frac{|A x_0 + B y_0 + C|}{\sqrt{A^2 + B^2}}
$$

---

### 2. Fazoda nuqtadan tekislikkacha masofa ($\mathbb{R}^3$)

Fazoda $M_0(x_0, y_0, z_0)$ nuqta va umumiy tenglamasi $P: Ax + By + Cz + D = 0$ bo'lgan tekislik berilgan bo'lsin.  
Tekislikning normal vektori: $\vec{n} = (A, B, C)$.

**Teorema:** $M_0$ nuqtadan $P$ tekislikkacha masofa:
$$
d = \frac{|A x_0 + B y_0 + C z_0 + D|}{\sqrt{A^2 + B^2 + C^2}}
$$

---

### 3. Parallel tekisliklar orasidagi masofa

Ikkita parallel tekislik tenglamalari berilgan bo'lsin:
$$
P_1: Ax + By + Cz + D_1 = 0 \quad \text{va} \quad P_2: Ax + By + Cz + D_2 = 0
$$
*(Eslatma: Agar tekisliklarning $A, B, C$ koeffitsiyentlari proporsional bo'lsa, ularni mos songa bo'lish yoki ko'paytirish orqali aynan bir xil ko'rinishga keltirish shart!)*

**Formula:** Parallel tekisliklar orasidagi masofa:
$$
d = \frac{|D_1 - D_2|}{\sqrt{A^2 + B^2 + C^2}}
$$

---

### 4. Fazoda nuqtadan to'g'ri chiziqqacha masofa ($\mathbb{R}^3$)

Fazoda to'g'ri chiziq kanonik ko'rinishda berilgan bo'lsin:
$$
L: \frac{x - x_1}{m} = \frac{y - y_1}{n} = \frac{z - z_1}{p}
$$
Bunda $M_1(x_1, y_1, z_1)$ — to'g'ri chiziqdagi ma'lum nuqta, $\vec{s} = (m, n, p)$ — chiziqning yo'naltiruvchi vektori.  
Berilgan nuqta: $M_0(x_0, y_0, z_0)$.

**Vektor ko'paytmasi (Parallelogramm usuli):**  
$\vec{M_1 M_0}$ va $\vec{s}$ vektorlaridan yasalgan parallelogrammni qaraymiz.  
Ushbu parallelogramm yuzi: $S = |\vec{M_1 M_0} \times \vec{s}|$.  
Boshqa tomondan, parallelogramm yuzi asos ($\vec{s}$) va balandlik ($d$) ko'paytmasiga teng: $S = |\vec{s}| \cdot d$.  
Bundan balandlik (ya'ni qidirilayotgan masofa) kelib chiqadi:
$$
d = \frac{|\vec{M_1 M_0} \times \vec{s}|}{|\vec{s}|}
$$

---

### 5. Ayqash to'g'ri chiziqlar orasidagi eng qisqa masofa

Fazoda parallel bo'lmagan va kesishmaydigan ikki to'g'ri chiziq **ayqash to'g'ri chiziqlar** deyiladi.  
Ular kanonik tenglamalari bilan berilgan:
$$
L_1: M_1(x_1, y_1, z_1), \quad \vec{s}_1 = (m_1, n_1, p_1)
$$
$$
L_2: M_2(x_2, y_2, z_2), \quad \vec{s}_2 = (m_2, n_2, p_2)
$$

**Aralash ko'paytma (Parallelepiped usuli):**  
$\vec{M_1 M_2}$, $\vec{s}_1$ va $\vec{s}_2$ vektorlaridan yasalgan fazoviy parallelepipedni ko'z oldimizga keltiramiz:
- Parallelepiped hajmi: $V = |(\vec{M_1 M_2}, \vec{s}_1, \vec{s}_2)|$ (uch vektorning aralash ko'paytmasi moduli).
- Asosining yuzi (tomonlari $\vec{s}_1$ va $\vec{s}_2$ bo'lgan parallelogramm): $S_{\text{asos}} = |\vec{s}_1 \times \vec{s}_2|$.
- Parallelepiped balandligi esa aynan ayqash to'g'ri chiziqlar orasidagi eng qisqa masofa $d$ dir!

**Formula:**
$$
d = \frac{|(\vec{M_1 M_2}, \vec{s}_1, \vec{s}_2)|}{|\vec{s}_1 \times \vec{s}_2|}
$$
Aralash ko'paytma determinant orqali hisoblanadi:
$$
(\vec{M_1 M_2}, \vec{s}_1, \vec{s}_2) = \begin{vmatrix} x_2 - x_1 & y_2 - y_1 & z_2 - z_1 \\ m_1 & n_1 & p_1 \\ m_2 & n_2 & p_2 \end{vmatrix}
$$

---

## 📝 Qadamma-qadam Yechilgan Universitet Misollari

### 1-misol: Nuqtadan tekislikkacha masofa, proyeksiyasi va simmetrik nuqta
**Shart:** $M_0(2, -1, 3)$ nuqta va $P: 2x - y + 2z - 16 = 0$ tekislik berilgan.
1) $M_0$ nuqtadan tekislikkacha masofa $d$ ni hisoblang;
2) $M_0$ nuqtaning ushbu tekislikdagi ortogonal proyeksiyasi $H$ nuqtaning koordinatalarini toping;
3) $M_0$ nuqtaning tekislikka nisbatan simmetrik aksi $M'$ nuqtani toping.

**Yechish:**
1-qadam: Masofani formuladan topamiz:
$A = 2, B = -1, C = 2, D = -16$.  
$x_0 = 2, y_0 = -1, z_0 = 3$.
$$
d = \frac{|2(2) + (-1)(-1) + 2(3) - 16|}{\sqrt{2^2 + (-1)^2 + 2^2}} = \frac{|4 + 1 + 6 - 16|}{\sqrt{4 + 1 + 4}} = \frac{|-5|}{\sqrt{9}} = \frac{5}{3}
$$

2-qadam: Proyeksiya $H$ nuqtani topish:
$M_0$ nuqtadan o'tuvchi va tekislikka perpendikulyar bo'lgan to'g'ri chiziq tenglamasini tuzamiz.  
Ushbu chiziqning yo'naltiruvchi vektori tekislikning normal vektori bilan ustma-ust tushadi: $\vec{s} = \vec{n} = (2, -1, 2)$.  
To'g'ri chiziq parametrik tenglamasi:
$$
\begin{cases} x = 2 + 2t \\ y = -1 - t \\ z = 3 + 2t \end{cases}
$$
Ushbu to'g'ri chiziqning tekislik bilan kesishish nuqtasi qidirilayotgan $H$ proyeksiyadir. Koordinatalarni tekislik tenglamasiga qo'yamiz:
$$
2(2 + 2t) - (-1 - t) + 2(3 + 2t) - 16 = 0
$$
$$
4 + 4t + 1 + t + 6 + 4t - 16 = 0 \implies 9t - 5 = 0 \implies t = \frac{5}{9}
$$
$t = \frac{5}{9}$ qiymatni parametrik tenglamaga qo'yamiz:
$$
x_H = 2 + 2\left(\frac{5}{9}\right) = \frac{28}{9}
$$
$$
y_H = -1 - \frac{5}{9} = -\frac{14}{9}
$$
$$
z_H = 3 + 2\left(\frac{5}{9}\right) = \frac{37}{9}
$$
Demak: $H\left(\frac{28}{9}, -\frac{14}{9}, \frac{37}{9}\right)$.

3-qadam: Simmetrik $M'$ nuqtani topish:
$H$ nuqta $M_0 M'$ kesmaning o'rtasi hisoblanadi. Kesma o'rtasi formulasidan:
$$
\frac{x_0 + x_{M'}}{2} = x_H \implies x_{M'} = 2x_H - x_0 = 2\left(\frac{28}{9}\right) - 2 = \frac{56 - 18}{9} = \frac{38}{9}
$$
$$
y_{M'} = 2y_H - y_0 = 2\left(-\frac{14}{9}\right) - (-1) = \frac{-28 + 9}{9} = -\frac{19}{9}
$$
$$
z_{M'} = 2z_H - z_0 = 2\left(\frac{37}{9}\right) - 3 = \frac{74 - 27}{9} = \frac{47}{9}
$$
*(Tezkor usul: $M'$ nuqta $t = 2 \cdot \frac{5}{9} = \frac{10}{9}$ parametrga to'g'ri keladi!)*

**Javob:** $d = \frac{5}{3}, \quad H\left(\frac{28}{9}, -\frac{14}{9}, \frac{37}{9}\right), \quad M'\left(\frac{38}{9}, -\frac{19}{9}, \frac{47}{9}\right)$.

---

### 2-misol: Parallel tekisliklar orasidagi masofa
**Shart:** Quyidagi ikki tekislik orasidagi masofani toping:
$$
P_1: 2x - 4y + 4z - 7 = 0 \quad \text{va} \quad P_2: -3x + 6y - 6z + 1 = 0
$$

**Yechish:**
1-qadam: Tekisliklarning parallelligini tekshiramiz:
Normal vektorlar: $\vec{n}_1 = (2, -4, 4)$ va $\vec{n}_2 = (-3, 6, -6)$.  
Nisbatlar: $\frac{2}{-3} = \frac{-4}{6} = \frac{4}{-6} = -\frac{2}{3}$.  
Normal vektorlar kollinear, demak tekisliklar haqiqatan ham parallel!

2-qadam: Normal koeffitsiyentlarni bir xil ko'rinishga keltiramiz:
$P_2$ tekislik tenglamasining barcha hadlarini $-\frac{2}{3}$ ga ko'paytiramiz:
$$
-\frac{2}{3}(-3x + 6y - 6z + 1) = 0 \implies 2x - 4y + 4z - \frac{2}{3} = 0
$$
Endi ikkala tekislik tenglamasi:
$$
P_1: 2x - 4y + 4z - 7 = 0 \implies D_1 = -7
$$
$$
P_2: 2x - 4y + 4z - \frac{2}{3} = 0 \implies D_2 = -\frac{2}{3}
$$
Bunda $A = 2, B = -4, C = 4$.

3-qadam: Masofa formulasini qo'llaymiz:
$$
d = \frac{|D_1 - D_2|}{\sqrt{A^2 + B^2 + C^2}} = \frac{\left|-7 - \left(-\frac{2}{3}\right)\right|}{\sqrt{2^2 + (-4)^2 + 4^2}} = \frac{\left|-7 + \frac{2}{3}\right|}{\sqrt{4 + 16 + 16}} = \frac{\left|-\frac{19}{3}\right|}{\sqrt{36}} = \frac{\frac{19}{3}}{6} = \frac{19}{18}
$$
**Javob:** $d = \frac{19}{18}$.

---

### 3-misol: Fazoda nuqtadan to'g'ri chiziqqacha masofa (Vektor usuli)
**Shart:** $M_0(1, 2, -1)$ nuqtadan quyidagi to'g'ri chiziqqacha masofani toping:
$$
L: \frac{x - 2}{3} = \frac{y + 1}{4} = \frac{z - 1}{-2}
$$

**Yechish:**
1-qadam: Berilgan parametrlarni ajratib olamiz:
Chiziqdagi nuqta: $M_1(2, -1, 1)$.  
Yo'naltiruvchi vektor: $\vec{s} = (3, 4, -2)$.  
$M_1$ dan $M_0$ ga yo'nalgan vektor:
$$
\vec{M_1 M_0} = (1 - 2, 2 - (-1), -1 - 1) = (-1, 3, -2)
$$

2-qadam: Vektor ko'paytma $\vec{M_1 M_0} \times \vec{s}$ ni hisoblaymiz:
$$
\vec{M_1 M_0} \times \vec{s} = \begin{vmatrix} \vec{i} & \vec{j} & \vec{k} \\ -1 & 3 & -2 \\ 3 & 4 & -2 \end{vmatrix}
$$
Determinantni minorlar bo'yicha yoyamiz:
$$
\vec{i} (3(-2) - (-2)(4)) - \vec{j} ((-1)(-2) - (-2)(3)) + \vec{k} ((-1)(4) - 3(3))
$$
$$
= \vec{i} (-6 + 8) - \vec{j} (2 + 6) + \vec{k} (-4 - 9) = 2\vec{i} - 8\vec{j} - 13\vec{k} = (2, -8, -13)
$$

3-qadam: Vektorlarning modullarini hisoblaymiz:
$$
|\vec{M_1 M_0} \times \vec{s}| = \sqrt{2^2 + (-8)^2 + (-13)^2} = \sqrt{4 + 64 + 169} = \sqrt{237}
$$
$$
|\vec{s}| = \sqrt{3^2 + 4^2 + (-2)^2} = \sqrt{9 + 16 + 4} = \sqrt{29}
$$

4-qadam: Masofani topamiz:
$$
d = \frac{|\vec{M_1 M_0} \times \vec{s}|}{|\vec{s}|} = \frac{\sqrt{237}}{\sqrt{29}} = \sqrt{\frac{237}{29}} \approx 2.859
$$
**Javob:** $d = \sqrt{\frac{237}{29}}$.

---

### 4-misol: Ayqash to'g'ri chiziqlar orasidagi eng qisqa masofa
**Shart:** Quyidagi ikki to'g'ri chiziq orasidagi eng qisqa masofani hisoblang:
$$
L_1: \frac{x - 1}{2} = \frac{y + 2}{1} = \frac{z}{1} \quad \text{va} \quad L_2: \frac{x + 1}{1} = \frac{y - 1}{2} = \frac{z - 2}{-1}
$$

**Yechish:**
1-qadam: Dastlabki ma'lumotlarni yozamiz:
$L_1$ uchun: $M_1(1, -2, 0)$, $\vec{s}_1 = (2, 1, 1)$.  
$L_2$ uchun: $M_2(-1, 1, 2)$, $\vec{s}_2 = (1, 2, -1)$.  
$\vec{M_1 M_2}$ vektor:
$$
\vec{M_1 M_2} = (-1 - 1, 1 - (-2), 2 - 0) = (-2, 3, 2)
$$

2-qadam: Aralash ko'paytmani (parallelepiped hajmini) hisoblaymiz:
$$
(\vec{M_1 M_2}, \vec{s}_1, \vec{s}_2) = \begin{vmatrix} -2 & 3 & 2 \\ 2 & 1 & 1 \\ 1 & 2 & -1 \end{vmatrix}
$$
Sarrus qoidasi yoki 1-satr bo'yicha yoyish:
$$
= -2(1(-1) - 1(2)) - 3(2(-1) - 1(1)) + 2(2(2) - 1(1))
$$
$$
= -2(-1 - 2) - 3(-2 - 1) + 2(4 - 1) = -2(-3) - 3(-3) + 2(3) = 6 + 9 + 6 = 21
$$
Aralash ko'paytma 0 ga teng emas ($21 \neq 0$), demak bu chiziqlar bir tekislikda yotmaydi va haqiqatan ham **ayqashdir!**

3-qadam: Vektor ko'paytma $\vec{s}_1 \times \vec{s}_2$ modulini hisoblaymiz:
$$
\vec{s}_1 \times \vec{s}_2 = \begin{vmatrix} \vec{i} & \vec{j} & \vec{k} \\ 2 & 1 & 1 \\ 1 & 2 & -1 \end{vmatrix} = \vec{i}(-1 - 2) - \vec{j}(-2 - 1) + \vec{k}(4 - 1) = -3\vec{i} + 3\vec{j} + 3\vec{k} = (-3, 3, 3)
$$
Moduli:
$$
|\vec{s}_1 \times \vec{s}_2| = \sqrt{(-3)^2 + 3^2 + 3^2} = \sqrt{9 + 9 + 9} = \sqrt{27} = 3\sqrt{3}
$$

4-qadam: Masofani topamiz:
$$
d = \frac{|(\vec{M_1 M_2}, \vec{s}_1, \vec{s}_2)|}{|\vec{s}_1 \times \vec{s}_2|} = \frac{|21|}{3\sqrt{3}} = \frac{7}{\sqrt{3}} = \frac{7\sqrt{3}}{3}
$$
**Javob:** $d = \frac{7\sqrt{3}}{3}$.

---

## ⚠️ Talabalar Eng Ko'p Yo'l Qo'yadigan Xatolar va Tuzoqlar

1. **Parallel tekisliklar masofasida koeffitsiyentlarni tenglashtirishni unutish:**
   Ko'pchilik talaba $2x - 4y + 4z - 7 = 0$ va $-3x + 6y - 6z + 1 = 0$ tekisliklar uchun shunchaki $|-7 - 1|$ qilib hisoblaydi. Bu mutlaqo noto'g'ri! Formuladagi $|D_1 - D_2|$ faqat va faqat $A, B, C$ koeffitsiyentlari ikkala tenglamada aynan bir xil qilib olingandagina ishlaydi.

2. **Nuqtadan chiziqqacha masofada skalyar ko'paytmani ishlatish:**
   Tekislik formulasidagi kabi chiziqqa ham skalyar ko'paytma qo'llashga urinish. Fazoda to'g'ri chiziqning bitta normal vektori yo'q (chunki fazoda to'g'ri chiziqqa cheksiz ko'p perpendikulyar yo'nalishlar mavjud!). Shuning uchun faqat yo'naltiruvchi vektor $\vec{s}$ va **vektor ko'paytma** $\times$ formulasi qo'llanilishi shart.

3. **Formulada modulni tashlab ketish:**
   Masofa hech qachon manfiy bo'lishi mumkin emas. Agar sizda masofa manfiy chiqsa, darhol suruvchi qismdagi $| \dots |$ modul qavsini tekshiring.

4. **Parallel chiziqlarga ayqash chiziqlar formulasini qo'llash:**
   Agar ikki to'g'ri chiziq parallel bo'lsa, $\vec{s}_1$ va $\vec{s}_2$ kollinear bo'ladi va ularning vektor ko'paytmasi $\vec{s}_1 \times \vec{s}_2 = \vec{0}$ bo'lib, maxrajda nol hosil bo'ladi. Parallel chiziqlar orasidagi masofa uchun 3-misoldagi kabi bitta chiziqdagi nuqtadan ikkinchi chiziqqacha masofa formulasi qo'llanilishi kerak!

---

## 🎯 Mustaqil Yechish Uchun Amaliy Mashqlar va Yechimlar

### 1-mashq
Tekislikda $A(3, -2)$ nuqtadan $3x - 4y + 8 = 0$ to'g'ri chiziqqacha bo'lgan masofani hisoblang.

<details>
<summary>To'liq yechimi va javobi</summary>

**Yechish:**
Tekislikdagi nuqtadan to'g'ri chiziqqacha masofa formulasidan foydalanamiz:
$$
d = \frac{|A x_0 + B y_0 + C|}{\sqrt{A^2 + B^2}}
$$
Berilgan: $A = 3, B = -4, C = 8$, nuqta: $x_0 = 3, y_0 = -2$.
$$
d = \frac{|3(3) - 4(-2) + 8|}{\sqrt{3^2 + (-4)^2}} = \frac{|9 + 8 + 8|}{\sqrt{9 + 16}} = \frac{|25|}{\sqrt{25}} = \frac{25}{5} = 5
$$
**Javob:** $d = 5$.
</details>

---

### 2-mashq
Koordinata boshidan $x + 2y - 2z - 12 = 0$ tekislikkacha bo'lgan masofani toping.

<details>
<summary>To'liq yechimi va javobi</summary>

**Yechish:**
Koordinata boshi: $O(0, 0, 0)$.  
Tekislik: $A = 1, B = 2, C = -2, D = -12$.
$$
d = \frac{|1(0) + 2(0) - 2(0) - 12|}{\sqrt{1^2 + 2^2 + (-2)^2}} = \frac{|-12|}{\sqrt{1 + 4 + 4}} = \frac{12}{\sqrt{9}} = \frac{12}{3} = 4
$$
**Javob:** $d = 4$.
</details>

---

### 3-mashq
Quyidagi ikki to'g'ri chiziqning o'zaro joylashuvini aniqlang (kesishadimi, parallelmi yoki ayqashmi?) va ular orasidagi masofani toping:
$$
L_1: \frac{x}{1} = \frac{y}{1} = \frac{z}{1} \quad \text{va} \quad L_2: \frac{x - 1}{1} = \frac{y}{1} = \frac{z}{1}
$$

<details>
<summary>To'liq yechimi va javobi</summary>

**Yechish:**
1. Yo'naltiruvchi vektorlarni tekshiramiz:
   $\vec{s}_1 = (1, 1, 1)$ va $\vec{s}_2 = (1, 1, 1)$.  
   $\vec{s}_1 = \vec{s}_2$ bo'lgani sababli, bu to'g'ri chiziqlar **parallel** (ayqash emas!).
2. Parallel to'g'ri chiziqlar orasidagi masofani topish uchun $L_2$ dan bitta nuqta olamiz: $M_2(1, 0, 0)$.  
   Endi $M_2(1, 0, 0)$ nuqtadan $L_1$ chiziqqacha ($M_1(0,0,0), \vec{s}_1=(1,1,1)$) masofani hisoblaymiz:
   $$
   \vec{M_1 M_2} = (1 - 0, 0 - 0, 0 - 0) = (1, 0, 0)
   $$
3. Vektor ko'paytmani hisoblaymiz:
   $$
   \vec{M_1 M_2} \times \vec{s}_1 = \begin{vmatrix} \vec{i} & \vec{j} & \vec{k} \\ 1 & 0 & 0 \\ 1 & 1 & 1 \end{vmatrix} = \vec{i}(0) - \vec{j}(1 - 0) + \vec{k}(1 - 0) = (0, -1, 1)
   $$
4. Masofani topamiz:
   $$
   |\vec{M_1 M_2} \times \vec{s}_1| = \sqrt{0^2 + (-1)^2 + 1^2} = \sqrt{2}
   $$
   $$
   |\vec{s}_1| = \sqrt{1^2 + 1^2 + 1^2} = \sqrt{3}
   $$
   $$
   d = \frac{\sqrt{2}}{\sqrt{3}} = \frac{\sqrt{6}}{3}
   $$

**Javob:** To'g'ri chiziqlar parallel; masofa $d = \frac{\sqrt{6}}{3}$.
</details>

---

## 💡 Imtihon Layfhaklari va Tezkor Maslahatlar

1. **Normallangan ko'rinishga keltirish layfhaki:**
   Agar tekislik tenglamasini har doim $\sqrt{A^2 + B^2 + C^2}$ ga bo'lib olsangiz, tekislik tenglamasining ozod hadi to'g'ridan-to'g'ri koordinata boshidan tekislikkacha bo'lgan masofani beradi: $d_0 = |D_{\text{norm}}|$.

2. **Chiziqlar o'zaro kesishishini 10 soniyada tekshirish:**
   Agar masalani yechishda aralash ko'paytma $(\vec{M_1 M_2}, \vec{s}_1, \vec{s}_2) = 0$ chiqsa va yo'naltiruvchi vektorlar parallel bo'lmasa, demak ikki to'g'ri chiziq bir tekislikda yotadi va ular **kesishadi!** Ularning orasidagi eng qisqa masofa $d = 0$ bo'ladi.

3. **Parametrik usul — formulalarni unutgandagi qutqaruvchi:**
   Agar imtihonda nuqtadan to'g'ri chiziqqacha yoki tekislikkacha murakkab formulalarni unutib qo'ysangiz, to'g'ri chiziqni parametrik $M(t)$ ko'rinishida yozib, $|\vec{M_0 M}(t)|^2$ masofa kvadratining $t$ bo'yicha hosilasini nolga tenglang (funksiya minimumi). Hosil bo'lgan $t$ qiymati sizga eng qisqa masofani va perpendikulyar asosi koordinatalarini bir vaqtda beradi!
