---
title: "Tekislikdagi to'g'ri chiziq va uning tenglamalari"
module: "vektorlar-geometriya"
order: 4
description: "To'g'ri chiziqning 5 xil tenglamasi (umumiy, kanonik, kesmalardagi), burchak, parallellik, perpendikulyarlik, masofa formulasi va ko'p usulli yechimlar."
---

## Kirish: Chiziqli bog'lanishlarning geometrik qiyofasi

Algebra darslarida chiziqli tenglama deb atalgan $Ax + By + C = 0$ ifoda geometrik jihatdan tekislikdagi **to'g'ri chiziqni** ifodalaydi. To'g'ri chiziq — analitik geometriyadagi eng sodda va fundamental obyektdir. Oliy matematikada u egri chiziqqa o'tkazilgan urinma va normallar, chiziqli dasturlash (simpleks usulidagi yarim tekisliklar) hamda fizika qonunlarida markaziy o'rin tutadi.

---

## 1. To'g'ri chiziqning 5 ta asosiy tenglamasi

### 1. To'g'ri chiziqning umumiy tenglamasi
$$
Ax + By + C = 0
$$
bu yerda $A$va$B$ bir vaqtda nolga teng bo'lmagan koeffitsiyentlar.
- Ushbu to'g'ri chiziqqa **perpendikulyar bo'lgan normal vektor**:
  
$$
  \vec{n} = (A, B)
  
$$

### 2. Burchak koeffitsiyentli tenglama
$$
y = kx + b
$$
- $k = \operatorname{tg} \alpha$— **burchak koeffitsiyenti** (to'g'ri chiziqning$Ox$ o'qining musbat yo'nalishi bilan hosil qilgan burchagi tangensi);
- $b$— to'g'ri chiziqning$Oy$ o'qidan kesib olgan kesmasi ($x = 0 \implies y = b$).
- Umumiy tenglamadan: $k = -\frac{A}{B}, \quad b = -\frac{C}{B} \quad (B \neq 0)$.

### 3. Berilgan nuqtadan berilgan yo'nalishda o'tuvchi to'g'ri chiziq
Agar to'g'ri chiziq $M_0(x_0, y_0)$nuqtadan o'tsa va burchak koeffitsiyenti$k$ bo'lsa:
$$
y - y_0 = k(x - x_0)
$$

### 4. Kanonik tenglama
Agar to'g'ri chiziq $M_0(x_0, y_0)$nuqtadan o'tsa va unga parallel bo'lgan **yo'naltiruvchi vektor**$\vec{s} = (p, q)$ ma'lum bo'lsa:
$$
\frac{x - x_0}{p} = \frac{y - y_0}{q}
$$

### 5. Kesmalardagi tenglama (Eng tezkor grafik chizish usuli)
$$
\frac{x}{a} + \frac{y}{b} = 1
$$
Bu to'g'ri chiziq $Ox$o'qini$(a; 0)$, $Oy$o'qini esa$(0; b)$nuqtada kesib o'tadi. Koordinata o'qlari bilan chegaralangan to'g'ri burchakli uchburchak yuzi bir zumda topiladi:$S = \frac{1}{2}|a b|$!

---

## 2. Ikki to'g'ri chiziqning o'zaro joylashuvi

$L_1: A_1 x + B_1 y + C_1 = 0 \quad (y = k_1 x + b_1)$
$L_2: A_2 x + B_2 y + C_2 = 0 \quad (y = k_2 x + b_2)$

### 1. Ular orasidagi burchak ($\varphi$):
$$
\cos \varphi = \frac{|A_1 A_2 + B_1 B_2|}{\sqrt{A_1^2 + B_1^2} \cdot \sqrt{A_2^2 + B_2^2}} \quad \text{yoki} \quad \operatorname{tg} \varphi = \left| \frac{k_2 - k_1}{1 + k_1 k_2} \right|
$$

### 2. Parallellik sharti ($L_1 \parallel L_2$):
$$
\frac{A_1}{A_2} = \frac{B_1}{B_2} \iff k_1 = k_2
$$

### 3. Perpendikulyarlik sharti ($L_1 \perp L_2$):
Normal vektorlar skalyar ko'paytmasi nolga teng bo'ladi:
$$
A_1 A_2 + B_1 B_2 = 0 \iff k_1 \cdot k_2 = -1 \iff k_2 = -\frac{1}{k_1}
$$

---

## 3. Masofa formulalari

### Nuqtadan to'g'ri chiziqqacha masofa:
$M_0(x_0, y_0)$nuqtadan$Ax + By + C = 0$to'g'ri chiziqqacha bo'lgan masofa$d$:
$$
d = \frac{|A x_0 + B y_0 + C|}{\sqrt{A^2 + B^2}}
$$

### Ikki parallel to'g'ri chiziq orasidagi masofa:
Agar chiziqlar $Ax + By + C_1 = 0$va$Ax + By + C_2 = 0$ bo'lsa:
$$
d = \frac{|C_1 - C_2|}{\sqrt{A^2 + B^2}}
$$

---

## 4. Amaliy masalalar va ko'p usulli yechimlar

### 1-masala: Perpendikulyar to'g'ri chiziq tenglamasini 2 xil usulda tuzish

$M_0(2, -1)$nuqtadan o'tuvchi va$3x - 4y + 5 = 0$ to'g'ri chiziqqa perpendikulyar bo'lgan to'g'ri chiziq tenglamasini toping.

#### 1-usul: Burchak koeffitsiyenti orqali
1. Berilgan chiziqdan $y$ ni ajratamiz:
   
$$
   4y = 3x + 5 \implies y = \frac{3}{4}x + \frac{5}{4} \implies k_1 = \frac{3}{4}
   
$$
2. Perpendikulyarlik shartidan:
   
$$
   k_2 = -\frac{1}{k_1} = -\frac{1}{3/4} = -\frac{4}{3}
   
$$
3. $M_0(2, -1)$ nuqtadan o'tuvchi to'g'ri chiziq tenglamasi:
   
$$
   y - y_0 = k_2(x - x_0) \implies y - (-1) = -\frac{4}{3}(x - 2)
   
$$
   
$$
   3(y + 1) = -4(x - 2) \implies 3y + 3 = -4x + 8 \implies 4x + 3y - 5 = 0
   
$$

#### 2-usul: Normal va yo'naltiruvchi vektorlar usuli (Tezkor vektorli usul)
Berilgan to'g'ri chiziqning normal vektori: $\vec{n} = (3, -4)$.
Unga perpendikulyar bo'lgan to'g'ri chiziq uchun ushbu $\vec{n}$vektori **yo'naltiruvchi vektor**$\vec{s} = (p, q) = (3, -4)$ vazifasini bajaradi!
Kanonik tenglamani yozamiz:
$$
\frac{x - 2}{3} = \frac{y - (-1)}{-4} \implies -4(x - 2) = 3(y + 1) \implies 4x + 3y - 5 = 0
$$
Ikki qatorda javob topildi!

---

### 2-masala: Nuqtadan to'g'ri chiziqqacha bo'lgan masofa

$M_0(3, 1)$nuqtadan$3x + 4y - 8 = 0$ to'g'ri chiziqqacha bo'lgan masofani hisoblang.

#### Yechish:
Formulaga qo'yamiz ($A = 3, B = 4, C = -8, x_0 = 3, y_0 = 1$):
$$
d = \frac{|3(3) + 4(1) - 8|}{\sqrt{3^2 + 4^2}} = \frac{|9 + 4 - 8|}{\sqrt{9 + 16}} = \frac{|5|}{\sqrt{25}} = \frac{5}{5} = 1
$$
**Javob:** $d = 1$.

---

## 5. Imtihondagi asosiy tuzoqlar

> [!WARNING] Imtihondagi tuzoqlar
> 1. **Masofa formulasida modulni unutish:** Masofa hech qachon manfiy son bo'lishi mumkin emas. Suratdagi ifoda manfiy chiqsa ham, modul tufayli natija doim musbat olinadi.
> 2. **Ikki parallel to'g'ri chiziq orasidagi masofani hisoblashda koeffitsiyentlarni tenglashtirmaslik:**
>    Masalan, $2x + 3y - 1 = 0$va$4x + 6y + 8 = 0$berilgan bo'lsa, ikkinchi tenglamani avval$2$ga bo'lib,$2x + 3y + 4 = 0$ko'rinishiga keltirib, so'ngra formulani qo'llash shart:$d = \frac{|-1 - 4|}{\sqrt{2^2 + 3^2}} = \frac{5}{\sqrt{13}}$.
> 3. **Vertikal to'g'ri chiziqda burchak koeffitsiyenti:**
>    $x = c$ ko'rinishidagi vertikal to'g'ri chiziqlarning burchak koeffitsiyenti **mavjud emas** ($k = \infty$, chunki $\operatorname{tg} 90^\circ$ aniqlanmagan). Bunday hollarda burchak koeffitsiyentli emas, faqat umumiy yoki kanonik tenglama ishlatiladi.

---

## 6. Mustaqil yechish uchun amaliy mashqlar

### 1-mashq
$A(1, 2)$va$B(4, 8)$ nuqtalardan o'tuvchi to'g'ri chiziq tenglamasini tuzing.

<details>
<summary>👉 Yechimni tekshirish</summary>

Ikki nuqtadan o'tuvchi to'g'ri chiziq:
$$
\frac{x - 1}{4 - 1} = \frac{y - 2}{8 - 2} \implies \frac{x - 1}{3} = \frac{y - 2}{6} \implies 2(x - 1) = y - 2 \implies 2x - y = 0 \implies y = 2x
$$

</details>

### 2-mashq
$L_1: 2x - y + 3 = 0$va$L_2: x + 2y - 5 = 0$ to'g'ri chiziqlarning o'zaro joylashuvini aniqlang.

<details>
<summary>👉 Yechimni tekshirish</summary>

Normal vektorlar: $\vec{n}_1 = (2, -1)$, $\vec{n}_2 = (1, 2)$.
Skalyar ko'paytma:
$$
\vec{n}_1 \cdot \vec{n}_2 = 2(1) + (-1)(2) = 2 - 2 = 0
$$
Skalyar ko'paytma nolga teng bo'lgani sababli, to'g'ri chiziqlar **o'zaro perpendikulyar** ($L_1 \perp L_2$).

</details>
