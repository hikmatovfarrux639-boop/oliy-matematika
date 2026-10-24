---
title: "Uch karrali integral, silindrik va sferik koordinatalar"
module: "karrali-integrallar"
order: 3
description: "Uch karrali integral ta'rifi, fazoviy jism massasi va hajmi, silindrik va sferik koordinatalar, Yakobianlar va ko'p usulli amaliy yechimlar."
---

## Kirish: Haqiqiy uch o'lchamli dunyo

Agar fazoviy jism bir jinsli bo'lmasa — ya'ni uning zichligi har bir nuqtada turlicha o'zgarsa (masalan, Yer sayyorasining zichligi chuqurlashgan sari ortadi), uning umumiy massasini, og'irlik markazini yoki inersiya momentini oddiy ko'paytirish bilan topib bo'lmaydi.

Bunday fazoviy hisoblashlar uchun **uch karrali integral** va fazoning geometrik simmetriyasiga mos egri chiziqli koordinatalar (silindrik va sferik) qo'llaniladi.

---

## 1. Uch karrali integral ta'rifi va Dekart koordinatalari

Fazoviy uch o'lchamli $V$ soha va unda aniqlangan uzluksiz $f(x, y, z)$ funksiya berilgan bo'lsin.
$V$ sohani mayda $\Delta V_i$ bo'lakchalarga bo'lib, integral yig'indining limitini olsak, **uch karrali integral** hosil bo'ladi:

$$
\iiint_V f(x, y, z) \, dx dy dz = \lim_{\operatorname{diam} \to 0} \sum_{i=1}^n f(\xi_i, \eta_i, \zeta_i) \Delta V_i
$$

### Asosiy tatbiqlari:
1. **Fazoviy jism hajmi:**
   
$$
   V = \iiint_V dx dy dz
   
$$
2. **Jism massasi:** Agar $\rho(x, y, z)$ zichlik funksiyasi bo'lsa:
   
$$
   M = \iiint_V \rho(x, y, z) \, dx dy dz
   
$$

---

## 2. Silindrik koordinatalar sistemasi

Agar integrallash sohasi **silindr, konus yoki paraboloid** shaklida bo'lsa, silindrik koordinatalar eng qulayi hisoblanadi. U tekislikdagi qutb koordinatalari va vertikal $z$ o'qining birikmasidir:

$$
\begin{cases}
x = r \cos \varphi \\
y = r \sin \varphi \\
z = z
\end{cases} \implies J = r, \quad dx dy dz = r \, dr d\varphi dz
$$

---

## 3. Sferik koordinatalar sistemasi

Agar integrallash sohasi **shar, sfera yoki konus-shar aralashmasi** ($x^2 + y^2 + z^2 \le R^2$) bo'lsa, sferik koordinatalar ishlatiladi:
- $\rho$ — fazoviy radius (koordinata boshidan nuqtagacha masofa, $\rho \ge 0$);
- $\theta$ — zenit burchagi ($Oz$ o'qi bilan hosil qilgan burchak, $0 \le \theta \le \pi$);
- $\varphi$ — azimut burchagi ($Ox$ o'qi bilan tekislikdagi burchak, $0 \le \varphi < 2\pi$).

### O'tish formulalari va Sferik Yakobian:
$$
\begin{cases}
x = \rho \sin \theta \cos \varphi \\
y = \rho \sin \theta \sin \varphi \\
z = \rho \cos \theta
\end{cases} \implies J = \rho^2 \sin\theta, \quad dx dy dz = \rho^2 \sin \theta \, d\rho d\theta d\varphi
$$

---

## 4. Shar hajmining sferik integrallash orqali isboti

Radiusi $R$ bo'lgan shar uchun chegaralar:
- $0 \le \varphi \le 2\pi$
- $0 \le \theta \le \pi$
- $0 \le \rho \le R$

Hajmni hisoblaymiz:
$$
V = \iiint_V dx dy dz = \int_0^{2\pi} d\varphi \int_0^\pi \sin\theta \, d\theta \int_0^R \rho^2 \, d\rho
$$
Uchala integralni alohida hisoblaymiz:
1. $\int_0^{2\pi} d\varphi = 2\pi$
2. $\int_0^\pi \sin\theta \, d\theta = [-\cos\theta]_0^\pi = -(-1) - (-1) = 2$
3. $\int_0^R \rho^2 \, d\rho = \left[ \frac{\rho^3}{3} \right]_0^R = \frac{R^3}{3}$

Ko'paytiramiz:
$$
V = 2\pi \cdot 2 \cdot \frac{R^3}{3} = \frac{4}{3}\pi R^3
$$
Shar hajmi formulasi to'liq isbotlandi!

---

## 5. Amaliy masalalar va ko'p usulli yechimlar

### 1-masala: Paraboloid bilan chegaralangan jism hajmini 2 xil usulda topish

Ushbu sirtlar bilan chegaralangan jism hajmini toping:
$$
z = x^2 + y^2 \quad \text{va} \quad z = 4
$$

#### 1-usul: Silindrik koordinatalar usuli
1. Paraboloid tenglamasi: $z = r^2$.
2. $z = 4$ tekislik bilan kesishishi: $r^2 = 4 \implies r = 2$ (doira).
3. Chegaralar:
   - $0 \le \varphi \le 2\pi$
   - $0 \le r \le 2$
   - $r^2 \le z \le 4$
4. Integrallaymiz (Yakobian $r$ bilan):
   
$$
   V = \int_0^{2\pi} d\varphi \int_0^2 r \, dr \int_{r^2}^4 dz
   
$$
5. Ichki integral: $\int_{r^2}^4 dz = 4 - r^2$.
6. O'rta integral:
   
$$
   \int_0^2 (4 - r^2) r \, dr = \int_0^2 (4r - r^3) dr = \left[ 2r^2 - \frac{r^4}{4} \right]_0^2 = 2(4) - \frac{16}{4} = 8 - 4 = 4
   
$$
7. Tashqi integral:
   
$$
   V = \left(\int_0^{2\pi} d\varphi\right) \cdot 4 = 2\pi \cdot 4 = 8\pi
   
$$

#### 2-usul: Bir o'zgaruvchili analiz (Aylanma jism hajmi) orqali tekshirish
Parabola $z = r^2 \implies r = \sqrt{z}$ ni $Oz$ o'qi atrofida $z = 0$ dan $z = 4$ gacha aylantiramiz:
$$
V = \pi \int_0^4 r^2(z) dz = \pi \int_0^4 z \, dz = \pi \left[ \frac{z^2}{2} \right]_0^4 = \pi \cdot \frac{16}{2} = 8\pi
$$
Har ikkala usul bir xil $8\pi$ natijani berdi!

---

## 6. Imtihondagi asosiy tuzoqlar

> [!WARNING] Imtihondagi tuzoqlar
> 1. **Sferik koordinatalarda $\theta$ burchak oralig'i:**
>    Talabalar eng ko'p adashadigan joy: $\theta$ burchak $0$ dan $2\pi$ gacha emas, balki **$0 \le \theta \le \pi$** oralig'ida o'zgaradi! Agar $2\pi$ deb olinsa, butun shar fazosi 2 marta hisoblanib, hajm ikki barobar katta chiqadi.
> 2. **Sferik Yakobianda $\sin\theta$ ni tashlab ketish:**
>    Hajm elementi shunchaki $\rho^2 d\rho d\theta d\varphi$ emas, balki **$\rho^2 \sin\theta \, d\rho d\theta d\varphi$** dir! $\sin\theta$ ko'paytuvchisini unutish barcha hisoblashlarni buzadi.
> 3. **Konus va paraboloid chegaralarini adashtirish:**
>    $z = \sqrt{x^2 + y^2} = r$ — bu konus, $z = x^2 + y^2 = r^2$ — bu paraboloid. Konusda ildiz bor, paraboloidda yo'q.

---

## 7. Mustaqil yechish uchun amaliy mashqlar

### 1-mashq
$x^2 + y^2 + z^2 \le 9$ sharning I oktantidagi (barcha $x \ge 0, y \ge 0, z \ge 0$) hajmini toping.

<details>
<summary>👉 Yechimni tekshirish</summary>

I oktant butun sharning $\frac{1}{8}$ qismidir.
Radiusi $R = 3$.
$$
V_{\text{oktant}} = \frac{1}{8} \cdot \left(\frac{4}{3}\pi R^3\right) = \frac{1}{8} \cdot \frac{4}{3}\pi (27) = \frac{1}{8} \cdot 36\pi = \frac{9\pi}{2}
$$
</details>

### 2-mashq
Silindrik koordinatalar yordamida $x^2 + y^2 \le 4, \; 0 \le z \le 5$ to'g'ri doiraviy silindr hajmini uch karrali integral bilan hisoblang.

<details>
<summary>👉 Yechimni tekshirish</summary>

Chegaralar: $0 \le \varphi \le 2\pi, \; 0 \le r \le 2, \; 0 \le z \le 5$.
$$
V = \int_0^{2\pi} d\varphi \int_0^2 r \, dr \int_0^5 dz = 2\pi \cdot \left[ \frac{r^2}{2} \right]_0^2 \cdot 5 = 2\pi \cdot 2 \cdot 5 = 20\pi
$$
*(Ma'lumki, silindr hajmi $V = \pi R^2 H = \pi (2^2) (5) = 20\pi$!).*
</details>
