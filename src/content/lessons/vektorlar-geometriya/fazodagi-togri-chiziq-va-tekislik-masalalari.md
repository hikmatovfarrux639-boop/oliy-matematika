---
title: "Fazoda to'g'ri chiziq va tekislik: Proyeksiyalar va Kesishish masalalari"
module: "vektorlar-geometriya"
order: 9
description: "Fazoda to'g'ri chiziq va tekislikning o'zaro joylashuvi, kesishish nuqtasi, nuqtaning tekislikka ortogonal proyeksiyasi, simmetrik nuqta va ayqash to'g'ri chiziqlar orasidagi masofa."
---

Analitik geometriya va 3D kompyuter grafikasida eng ko'p bajariladigan amallardan biri — uch o'lchamli fazodagi obyektlarni tekislikka proyeksiyalash, nurning sirt bilan to'qnashuv nuqtasini topish (ray tracing) hamda berilgan tekislikka nisbatan ko'zgu aksini (simmetriyasini) hisoblashdir.

OTM imtihonlarida va HEMIS nazoratlarida bu mavzu bo'yicha talabalarga odatda 4 ta asosiy standart masala tushadi.

---

## 1. To'g'ri chiziq va tekislikning kesishish nuqtasi

Aytaylik, fazoda to'g'ri chiziq kanonik tenglama bilan berilgan bo'lsin:
$$
\frac{x - x_0}{m} = \frac{y - y_0}{n} = \frac{z - z_0}{p}
$$
hamda tekislik umumiy tenglamasi:
$$
Ax + By + Cz + D = 0
$$

Kesishish nuqtasini topishning eng oson usuli — to'g'ri chiziqni **parametrik shaklga** o'tkazishdir:
$$
\begin{cases}
x = x_0 + mt \\
y = y_0 + nt \\
z = z_0 + pt
\end{cases}
$$
Ushbu $x, y, z$ifodalarni tekislik tenglamasiga qo'yib, parametr$t$ ni topamiz:
$$
A(x_0 + mt) + B(y_0 + nt) + C(z_0 + pt) + D = 0 \implies t = -\frac{Ax_0 + By_0 + Cz_0 + D}{Am + Bn + Cp}
$$
Topilgan $t$parametr qiymatini parametrik tenglamaga qayta qo'yib, aniq kesishish nuqtasi$M(x, y, z)$ koordinatalarini hosil qilamiz!

---

## 2. Nuqtaning tekislikdagi proyeksiyasi va simmetrik nuqta

Berilgan $M_0(x_0, y_0, z_0)$nuqtaning$Ax + By + Cz + D = 0$tekislikdagi **ortogonal proyeksiyasi**$M_1$ ni topish algoritmi:

1. Tekislikning normal vektori $\vec{n} = (A, B, C)$ berilgan tekislikka perpendikulyar bo'ladi.
2. $M_0$nuqtadan o'tuvchi va tekislikka perpendikulyar bo'lgan to'g'ri chiziq tenglamasini tuzamiz (uning yo'naltiruvchi vektori aynan$\vec{n}$ bo'ladi):
   
$$
   \frac{x - x_0}{A} = \frac{y - y_0}{B} = \frac{z - z_0}{C}
   
$$
3. Ushbu perpendikulyar to'g'ri chiziqning tekislik bilan **kesishish nuqtasi** aynan qidirilayotgan proyeksiyadir ($M_1$)!
4. **Simmetrik nuqta $M_2$ni topish:**$M_1$nuqta$M_0 M_2$ kesmaning o'rtasi bo'lgani uchun:
   
$$
   M_2 = 2M_1 - M_0 \implies \begin{cases} x_2 = 2x_1 - x_0 \\ y_2 = 2y_1 - y_0 \\ z_2 = 2z_1 - z_0 \end{cases}
   
$$

---

## 3. Nuqtadan to'g'ri chiziqqacha masofa

$M_1(x_1, y_1, z_1)$nuqtadan$\frac{x - x_0}{m} = \frac{y - y_0}{n} = \frac{z - z_0}{p}$ to'g'ri chiziqqacha bo'lgan masofa vektor ko'paytma yordamida parallelogramm balandligi sifatida hisoblanadi:
$$
d = \frac{|\vec{M_0 M_1} \times \vec{s}|}{|\vec{s}|}
$$
bu yerda $M_0(x_0, y_0, z_0)$— to'g'ri chiziqdagi nuqta,$\vec{s} = (m, n, p)$ — yo'naltiruvchi vektor.

---

## Bitta masalani 2 xil usulda yechish va solishtirish

> **Masala:** $M(2, -1, 3)$nuqtaning$2x - y + 2z - 3 = 0$ tekislikdagi ortogonal proyeksiyasini va tekislikka nisbatan simmetrik nuqtasini toping.

### 1-usul: Parametrik perpendikulyar to'g'ri chiziq usuli (Klassik)
1. Tekislik normal vektori: $\vec{n} = (2, -1, 2)$.
2. $M(2, -1, 3)$ nuqtadan o'tuvchi perpendikulyar to'g'ri chiziqning parametrik tenglamasi:
   
$$
   x = 2 + 2t, \quad y = -1 - t, \quad z = 3 + 2t
   
$$
3. Buni tekislik tenglamasiga qo'yamiz:
   
$$
   2(2 + 2t) - (-1 - t) + 2(3 + 2t) - 3 = 0
   
$$
   
$$
   4 + 4t + 1 + t + 6 + 4t - 3 = 0 \implies 9t + 8 = 0 \implies t = -\frac{8}{9}
   
$$
4. Proyeksiya nuqtasi $P(x_p, y_p, z_p)$:
   
$$
   x_p = 2 + 2\left(-\frac{8}{9}\right) = \frac{18 - 16}{9} = \frac{2}{9}
   
$$
   
$$
   y_p = -1 - \left(-\frac{8}{9}\right) = -\frac{9 - 8}{9} = -\frac{1}{9}
   
$$
   
$$
   z_p = 3 + 2\left(-\frac{8}{9}\right) = \frac{27 - 16}{9} = \frac{11}{9}
   
$$
   Demak, proyeksiyaning koordinatalari: $P\left(\frac{2}{9}, -\frac{1}{9}, \frac{11}{9}\right)$.
5. Simmetrik nuqta $M'(x', y', z')$: parametr qiymati $t$o'rniga$2t = -\frac{16}{9}$qo'yiladi (yoki$2P - M$):
   
$$
   x' = 2 + 2\left(-\frac{16}{9}\right) = 2 - \frac{32}{9} = -\frac{14}{9}
   
$$
   
$$
   y' = -1 - \left(-\frac{16}{9}\right) = \frac{7}{9}
   
$$
   
$$
   z' = 3 + 2\left(-\frac{16}{9}\right) = 3 - \frac{32}{9} = -\frac{5}{9}
   
$$
   Simmetrik nuqta: $M'\left(-\frac{14}{9}, \frac{7}{9}, -\frac{5}{9}\right)$.

### 2-usul: Vektorli siljitish va masofa formulasi yordamida
1. $M(2, -1, 3)$ nuqtadan tekislikkacha bo'lgan og'ish (yo'naltirilgan masofa):
   
$$
   \delta = \frac{Ax_0 + By_0 + Cz_0 + D}{|\vec{n}|^2} = \frac{2(2) - (-1) + 2(3) - 3}{2^2 + (-1)^2 + 2^2} = \frac{4 + 1 + 6 - 3}{4 + 1 + 4} = \frac{8}{9}
   
$$
2. Proyeksiya vektori:
   
$$
   \vec{r}_P = \vec{r}_M - \delta \vec{n} = (2, -1, 3) - \frac{8}{9}(2, -1, 2) = \left(2 - \frac{16}{9}, -1 + \frac{8}{9}, 3 - \frac{16}{9}\right) = \left(\frac{2}{9}, -\frac{1}{9}, \frac{11}{9}\right)
   
$$
3. Simmetrik nuqta:
   
$$
   \vec{r}_{M'} = \vec{r}_M - 2\delta \vec{n} = (2, -1, 3) - \frac{16}{9}(2, -1, 2) = \left(-\frac{14}{9}, \frac{7}{9}, -\frac{5}{9}\right)
   
$$

*Xulosa:* Ikkala usul ham bir xil natijaga olib keladi. Biroq 2-usul (vektorli og'ish formulasi) amaliy dasturlashda va kompyuter grafikasida matritsali hisoblashlar uchun juda qulay!

---

> [!WARNING] Imtihondagi eng xavfli tuzoqlar
> 1. **To'g'ri chiziq va tekislik parallel bo'lgan holat:** Agar maxrajda $Am + Bn + Cp = 0$bo'lsa, to'g'ri chiziq tekislikka parallel bo'ladi (kesishish nuqtasi cheksizlikda yoki mavjud emas). Bu holatda$t$ ni topishga urinmang, balki to'g'ridan-to'g'ri "kesishmaydi" deb xulosa bering.
> 2. **Yo'naltiruvchi vektor ishorasini chalkashtirish:** Agar kanonik tenglama $\frac{2 - x}{3} = \frac{y+1}{2} = \frac{z}{1}$shaklida berilgan bo'lsa,$2 - x = -(x - 2)$ekanini inobatga olib, yo'naltiruvchi koordinatani$m = -3$ deb to'g'rilash shart!

---

## Mustaqil yechish uchun amaliy mashqlar

1. $M(1, 2, -1)$nuqtadan$\frac{x-1}{2} = \frac{y+2}{1} = \frac{z-3}{-2}$ to'g'ri chiziqqacha bo'lgan masofani toping.
2. $\frac{x-1}{1} = \frac{y+1}{-2} = \frac{z}{6}$to'g'ri chiziq va$2x + 3y + z - 1 = 0$ tekislikning kesishish nuqtasini aniqlang.
3. Koordinatalar boshining $x + 2y - 2z + 9 = 0$ tekislikdagi proyeksiyasini va simmetrik nuqtasini toping.
