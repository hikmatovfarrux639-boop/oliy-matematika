---
title: "Tekislikda uchburchakning 12 ta elementini topish va chiziqli tengsizliklar sohalari"
module: "vektorlar-geometriya"
order: 10
duration: "30 daqiqa"
category: "Amaliy geometriya"
difficulty: "O'rtacha"
description: "Mathprofi.ru klassik metodikasi: Uchburchakning barcha 12 ta elementi (tomonlar, balandliklar, medianalar, bissektrisalar, burchaklar, og'irlik markazi, ortomarkaz, tashqi aylana markazi, yuza, simmetrik nuqta) hamda tekislikdagi chiziqli tengsizliklar sohalarini qurish."
---

## Kirish: Analitik geometriya imtihonlarining qiroli

Oliy o'quv yurtlarida analitik geometriya va chiziqli algebra kurslarining eng mashhur, keng qamrovli va deyarli barcha oraliq hamda yakuniy nazoratlarga tushadigan tipik topshirig'i — bu **"Tekislikda uchlari berilgan uchburchakning barcha elementlarini tadqiq qilish"**dir.

Nega aynan ushbu masala shunchalik mashhur? Chunki bitta masalaning o'zida talabaning quyidagi barcha fundamental bilimlari sinovdan o'tkaziladi:
1. Ikki nuqtadan o'tuvchi to'g'ri chiziq tenglamasi;
2. To'g'ri chiziqlarning o'zaro perpendikulyarligi va parallelligi;
3. Nuqtadan to'g'ri chiziqqacha bo'lgan masofa;
4. Vektorlar skalyar va vektor ko'paytmasi, burchaklar kosinusi;
5. Kesmani berilgan nisbatda bo'lish;
6. Chiziqli tenglamalar sistemalarini yechish;
7. Tekislikda chiziqli tengsizliklar va sohalar (chiziqli dasturlash asosi).

Ushbu darsda biz mashhur **mathprofi.ru** uslubiyoti asosida uchburchakning barcha **12 ta asosiy elementini** hisoblash algoritmini tizimlashtiramiz, so'ngra bitta to'liq amaliy misol ustida barcha formulalarni qadamma-qadam qo'llaymiz.

---

## 1. Tekislikdagi chiziqli tengsizliklar va yarim tekisliklar (Sinov nuqtasi qoidasi)

Tekislikda $Ax + By + C = 0$ to'g'ri chizig'i butun tekislikni ikkita **ochiq yarim tekislikka** ajratadi:
- Bir tomonida: $Ax + By + C > 0$- Ikkinchi tomonida:$Ax + By + C < 0$- To'g'ri chiziqning o'zida:$Ax + By + C = 0$

Agar tengsizlik noqat'iy bo'lsa ($Ax + By + C \ge 0$yoki$\le 0$), to'g'ri chiziqning o'zi ham sohaga kiradi va chizmada **tutash (uzluksiz)** chiziq bilan chiziladi. Qat'iy tengsizlikda ($>$yoki$<$) esa chiziq **punktir** bilan ko'rsatiladi.

### Sinov nuqtasi (Test point) qoidasi

Qaysi yarim tekislik tengsizlikni qanoatlantirishini aniqlashning eng ishonchli va tezkor usuli:

1. To'g'ri chiziqda yotmaydigan ixtiyoriy sinov nuqtasi $M_0(x_0, y_0)$tanlanadi. Agar to'g'ri chiziq koordinata boshidan o'tmasa, eng qulay sinov nuqtasi doimo **koordinata boshi$O(0, 0)$** hisoblanadi!
2. Nuqtaning koordinatalari tengsizlikka qo'yiladi:
   - Agar $A(0) + B(0) + C$tengsizlikni **to'g'ri** qilsa, demak$O(0, 0)$ yotgan tomon shtrixlanadi (bo'yaladi).
   - Agar tengsizlik **noto'g'ri** bo'lib chiqsa, to'g'ri chiziqning $O(0, 0)$ yotmagan **qarama-qarshi tomoni** shtrixlanadi.

> **Misol:** $2x - 3y + 6 \le 0$ tengsizlik sohasini aniqlang.
> 
> 1) Chegara to'g'ri chiziq: $2x - 3y + 6 = 0$.
>    - $x = 0 \implies y = 2 \implies (0, 2)$>    -$y = 0 \implies x = -3 \implies (-3, 0)$> 2) Sinov nuqtasi sifatida$O(0, 0)$ ni qo'yamiz:
>    
> $$
>    2(0) - 3(0) + 6 \le 0 \implies 6 \le 0 \quad (\text{Noto'g'ri!})
> $$
>    
> Demak, koordinata boshi $O(0,0)$yotgan taraf emas, balki to'g'ri chiziqning$O(0,0)$ ga teskari bo'lgan yuqori yarim tekisligi talab qilingan soha bo'ladi.

---

## 2. Chiziqli tengsizliklar sistemasi va ko'pburchakli sohalarni qurish

Bir nechta chiziqli tengsizliklar sistemasi tekislikda bir nechta yarim tekisliklarning **kesishmasini (umumiy qismini)** ifodalaydi:

$$
\begin{cases}
A_1 x + B_1 y + C_1 \ge 0 \\
A_2 x + B_2 y + C_2 \ge 0 \\
\dots \\
A_n x + B_n y + C_n \ge 0
\end{cases}
$$

Agar soha har tomondan chegaralangan bo'lsa, u qavariq **ko'pburchak** (uchburchak, to'rtburchak va h.k.) hosil qiladi. Bu tushuncha iqtisodiy-matematik modellarda va **chiziqli dasturlashning geometrik usulida** hal qiluvchi ahamiyatga ega.

---

## 3. Uchburchakning 12 ta elementini topishning to'liq tipovoy jadvali

Faraz qilaylik, uchburchak o'zining uchta uchi bilan berilgan: $A(x_1, y_1)$, $B(x_2, y_2)$, $C(x_3, y_3)$.

Quyidagi jadval barcha 12 elementni topishning standart matematik formulasini jamlaydi:

| № | Element | Asosiy formula / Teorema | Eslatma |
|---|---|---|---|
| **1** | Tomon to'g'ri chiziqlari ($AB, BC, AC$) | $\frac{x - x_1}{x_2 - x_1} = \frac{y - y_1}{y_2 - y_1} \implies Ax + By + C = 0$ | 2 nuqtadan o'tuvchi to'g'ri chiziq |
| **2** | Tomon uzunliklari | $d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$ | Pifagor teoremasi asosi |
| **3** | Ichki burchaklar ($\cos \angle A, \dots$) | $\cos A = \frac{\vec{AB} \cdot \vec{AC}}{\lvert\vec{AB}\rvert \cdot \lvert\vec{AC}\rvert}$ | Vektorlar bitta uchdan chiquvchi bo'lishi shart |
| **4** | Uchburchak yuzi $S$ | $S = \frac{1}{2} \lvert (x_2 - x_1)(y_3 - y_1) - (x_3 - x_1)(y_2 - y_1) \rvert$ | 2-tartibli determinant moduli |
| **5** | Balandlik tenglamasi ($h_A$) | $BC$ tomonga perpendikulyar va $A$ dan o'tadi: $\vec{s}_{h_A} = \vec{n}_{BC}$ | $\vec{n}_{BC} = (A_{BC}, B_{BC})$ yo'naltiruvchi bo'ladi |
| **6** | Balandlik uzunligi ($\lvert h_A \rvert$) | $\lvert h_A \rvert = \frac{\lvert A_{BC} x_1 + B_{BC} y_1 + C_{BC}\rvert}{\sqrt{A_{BC}^2 + B_{BC}^2}} = \frac{2S}{\lvert BC\rvert}$ | Nuqtadan to'g'ri chiziqqacha masofa |
| **7** | Mediana tenglamasi va uzunligi | $M$ — tomon o'rtasi: $\left(\frac{x_2+x_3}{2}, \frac{y_2+y_3}{2}\right)$; $A$ va $M$ orqali o'tadi | Tomon o'rtasi va qarama-qarshi uch |
| **8** | Bissektrisa tenglamasi | Bissektrisa qarama-qarshi tomonni yondosh tomonlarga proporsional bo'ladi | $\lambda = \frac{\lvert AB\rvert}{\lvert AC\rvert}$, $D = \frac{B + \lambda C}{1 + \lambda}$ |
| **9** | Og'irlik markazi (medianalar kesishishi $M$) | $x_M = \frac{x_1 + x_2 + x_3}{3}, \quad y_M = \frac{y_1 + y_2 + y_3}{3}$ | Medianalarni $2:1$ nisbatda bo'ladi |
| **10** | Ortomarkaz (balandliklar kesishishi $H$) | Ikkita balandlik tenglamasining sistemasidan topiladi | $\begin{cases} h_A(x, y) = 0 \\ h_B(x, y) = 0 \end{cases}$ |
| **11** | Tashqi aylana markazi ($O$) va radiusi ($R$) | Tomonlar o'rta perpendikulyarlari kesishmasi; $R = \frac{abc}{4S}$ | $R = \lvert OA\rvert = \lvert OB\rvert = \lvert OC\rvert$ |
| **12** | Ichki aylana radiusi ($r$) va simmetrik nuqta | $r = \frac{S}{p}$; $A$ ning $BC$ ga nisbatan simmetrik $A'$ nuqtasi | $H_A$ nuqta $AA'$ kesmaning o'rtasi |

---

## 4. Katta amaliy misol: Uchburchakning barcha 12 ta elementini hisoblash

> **Masala sharti:**
> Tekislikda uchburchak uchlarining koordinatalari berilgan:
> 
> $$
> A(1, 2), \quad B(5, 5), \quad C(1, 8)
> $$
> 
> Quyidagilarni toping:
> 1. Uchburchak tomonlarining umumiy tenglamalari;
> 2. Tomonlarning uzunliklari va perimetri;
> 3. Uchburchak ichki burchaklarining kosinuslari;
> 4. Uchburchak yuzi $S$;
> 5. $B$ uchidan tushirilgan balandlik tenglamasi va uning uzunligi;
> 6. $A$ uchidan tushirilgan balandlik tenglamasi va uning uzunligi;
> 7. $B$ uchidan o'tkazilgan mediana tenglamasi va uzunligi;
> 8. $A$ uchidan o'tkazilgan mediana tenglamasi;
> 9. $A$ burchak bissektrisasi tenglamasi;
> 10. Uchburchakning og'irlik markazi $M$ (og'irlik markazi);
> 11. Balandliklar kesishgan nuqta — ortomarkaz $H$;
> 12. Tashqi chizilgan aylana markazi $O$va radiusi$R$;
> 13. Ichki chizilgan aylana radiusi $r$va uning markazi$I$;
> 14. $A$nuqtaga$BC$to'g'ri chizig'iga nisbatan simmetrik bo'lgan$A'$ nuqtaning koordinatalari;
> 15. Uchburchakning ichki sohasini aniqlovchi chiziqli tengsizliklar sistemasini tuzing va sinov nuqtasi bilan tekshiring.

---

### 1-qadam: Uchburchak tomonlari tenglamalari

Ikki nuqtadan o'tuvchi to'g'ri chiziqning kanonik tenglamasi:

$$
\frac{x - x_1}{x_2 - x_1} = \frac{y - y_1}{y_2 - y_1}
$$

1. **$AC$tomoni:**$A(1, 2)$va$C(1, 8)$. Bu yerda $x_1 = x_2 = 1$. Demak, to'g'ri chiziq $Oy$ o'qiga parallel vertikal chiziqdir:
   
$$
   x - 1 = 0 \quad \text{yoki} \quad x = 1
   
$$

2. **$AB$tomoni:**$A(1, 2)$va$B(5, 5)$ orqali:
   
$$
   \frac{x - 1}{5 - 1} = \frac{y - 2}{5 - 2} \implies \frac{x - 1}{4} = \frac{y - 2}{3}
   
$$
   Proporsiyani ko'paytiramiz:
   
$$
   3(x - 1) = 4(y - 2) \implies 3x - 3 = 4y - 8 \implies 3x - 4y + 5 = 0
   
$$

3. **$BC$tomoni:**$B(5, 5)$va$C(1, 8)$ orqali:
   
$$
   \frac{x - 5}{1 - 5} = \frac{y - 5}{8 - 5} \implies \frac{x - 5}{-4} = \frac{y - 5}{3}
   
$$
   
$$
   3(x - 5) = -4(y - 5) \implies 3x - 15 = -4y + 20 \implies 3x + 4y - 35 = 0
   
$$

---

### 2-qadam: Tomon uzunliklari va perimetr

Ikki nuqta orasidagi masofa formulasi:

$$
d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}
$$

- $|AC| = \sqrt{(1 - 1)^2 + (8 - 2)^2} = \sqrt{0 + 36} = 6$;
- $|AB| = \sqrt{(5 - 1)^2 + (5 - 2)^2} = \sqrt{4^2 + 3^2} = \sqrt{16 + 9} = \sqrt{25} = 5$;
- $|BC| = \sqrt{(1 - 5)^2 + (8 - 5)^2} = \sqrt{(-4)^2 + 3^2} = \sqrt{16 + 9} = 5$.

> **Muhim xulosa:** $|AB| = |BC| = 5$bo'lganligi sababli,$\triangle ABC$— **asosiy tomoni$AC = 6$ bo'lgan teng yonli uchburchakdir!**
> Bu fakt keyingi hisob-kitoblarimizni tekshirishda katta qulaylik yaratadi.

Perimetr:

$$
P = |AB| + |BC| + |AC| = 5 + 5 + 6 = 16
$$

Yarim perimetr:

$$
p = \frac{P}{2} = \frac{16}{2} = 8
$$

---

### 3-qadam: Ichki burchaklar kosinusi

Burchak kosinusini topishda vektorlar yo'nalishiga qat'iy e'tibor berish lozim: ikkala vektor ham ko'rilayotgan uchdan **chiquvchi** bo'lishi shart!

1. **$A$burchak kosinusi:**$\vec{AB} = (5 - 1, 5 - 2) = (4, 3)$, uzunligi $|\vec{AB}| = 5$.
   $\vec{AC} = (1 - 1, 8 - 2) = (0, 6)$, uzunligi $|\vec{AC}| = 6$.
   
$$
   \cos A = \frac{\vec{AB} \cdot \vec{AC}}{|\vec{AB}| \cdot |\vec{AC}|} = \frac{4 \cdot 0 + 3 \cdot 6}{5 \cdot 6} = \frac{18}{30} = \frac{3}{5} = 0.6
   
$$
   
$$
   A = \arccos(0.6) \approx 53^\circ 08'
   
$$

2. **$C$ burchak kosinusi:**
   Uchburchak teng yonli bo'lgani uchun:
   
$$
   \cos C = \cos A = \frac{3}{5} = 0.6 \implies C \approx 53^\circ 08'
   
$$

3. **$B$burchak kosinusi:**$\vec{BA} = -\vec{AB} = (-4, -3)$, $\vec{BC} = (1 - 5, 8 - 5) = (-4, 3)$.
   
$$
   \cos B = \frac{\vec{BA} \cdot \vec{BC}}{|\vec{BA}| \cdot |\vec{BC}|} = \frac{(-4)(-4) + (-3)(3)}{5 \cdot 5} = \frac{16 - 9}{25} = \frac{7}{25} = 0.28
   
$$
   
$$
   B = \arccos(0.28) \approx 73^\circ 44'
   
$$

Burchaklar yig'indisi: $53^\circ 08' + 53^\circ 08' + 73^\circ 44' = 180^\circ$. Ajoyib!

---

### 4-qadam: Uchburchak yuzi $S$

Yuzani 3 xil usul bilan hisoblab, natijaning to'g'riligiga ishonch hosil qilamiz:

1. **Determinant usuli:**
   
$$
   S = \frac{1}{2} \left| \begin{vmatrix} x_B - x_A & y_B - y_A \\ x_C - x_A & y_C - y_A \end{vmatrix} \right| = \frac{1}{2} \left| \begin{vmatrix} 4 & 3 \\ 0 & 6 \end{vmatrix} \right| = \frac{1}{2} |4 \cdot 6 - 3 \cdot 0| = \frac{24}{2} = 12
   
$$

2. **Geron formulasi:**
   
$$
   S = \sqrt{p(p - a)(p - b)(p - c)} = \sqrt{8(8 - 5)(8 - 5)(8 - 6)} = \sqrt{8 \cdot 3 \cdot 3 \cdot 2} = \sqrt{144} = 12
   
$$

3. **Asos va balandlik ko'paytmasi:**
   $AC$asosi vertikal bo'lib, uzunligi$6$ga teng.$B(5, 5)$uchidan$AC$ ($x=1$) to'g'ri chiziqqacha bo'lgan gorizontal masofa $h_B = 5 - 1 = 4$.
   
$$
   S = \frac{1}{2} \cdot |AC| \cdot h_B = \frac{1}{2} \cdot 6 \cdot 4 = 12
   
$$

---

### 5-qadam: Balandliklar tenglamalari va uzunliklari

1. **$B$uchidan tushirilgan$h_B$balandligi:**$AC$tomoni$x = 1$vertikal to'g'ri chiziq bo'lgani uchun, unga perpendikulyar bo'lgan har qanday to'g'ri chiziq gorizontal bo'ladi, ya'ni uning tenglamasi$y = \text{const}$ ko'rinishida bo'ladi.
   Ushbu balandlik $B(5, 5)$ nuqtadan o'tadi, binobarin:
   
$$
   y = 5 \quad \text{yoki} \quad y - 5 = 0
   
$$
   Uzunligi:
   
$$
   h_B = 4
   
$$

2. **$A$uchidan tushirilgan$h_A$ balandligi:**
   U $BC$tomonga perpendikulyar.$BC$ning umumiy tenglamasi:$3x + 4y - 35 = 0$.
   Uning normal vektori $\vec{n}_{BC} = (3, 4)$.
   $BC$ga perpendikulyar bo'lgan to'g'ri chiziqning normal vektori unga ortogonal bo'lishi kerak, masalan$\vec{n} = (4, -3)$.
   Chiziq $A(1, 2)$ nuqtadan o'tadi:
   
$$
   4(x - 1) - 3(y - 2) = 0 \implies 4x - 4 - 3y + 6 = 0 \implies 4x - 3y + 2 = 0
   
$$
   Uzunligi: $A(1, 2)$nuqtadan$3x + 4y - 35 = 0$ to'g'ri chiziqqacha masofa:
   
$$
   h_A = \frac{|3(1) + 4(2) - 35|}{\sqrt{3^2 + 4^2}} = \frac{|3 + 8 - 35|}{\sqrt{25}} = \frac{|-24|}{5} = \frac{24}{5} = 4.8
   
$$
   Tekshirish: $S = \frac{1}{2} \cdot |BC| \cdot h_A = \frac{1}{2} \cdot 5 \cdot \frac{24}{5} = 12$. To'g'ri!

---

### 6-qadam: Medianalar tenglamalari va uzunliklari

1. **$B$uchidan o'tkazilgan$BM$medianasi:**$AC$tomonining o'rtasi$M_B$:
   
$$
   x_{M_B} = \frac{x_A + x_C}{2} = \frac{1 + 1}{2} = 1, \quad y_{M_B} = \frac{y_A + y_C}{2} = \frac{2 + 8}{2} = 5 \implies M_B(1, 5)
   
$$
   $B(5, 5)$va$M_B(1, 5)$ orqali o'tuvchi to'g'ri chiziq:
   
$$
   y = 5 \quad \text{yoki} \quad y - 5 = 0
   
$$
   > Teng yonli uchburchakda asosga tushirilgan balandlik, mediana va bissektrisa **ustma-ust tushadi!** Shuning uchun $BM$mediana$h_B$ balandlik bilan bir xil to'g'ri chiziqdir.
   
   Uzunligi:
   
$$
   m_B = \sqrt{(5 - 1)^2 + (5 - 5)^2} = 4
   
$$

2. **$A$uchidan o'tkazilgan$AM_A$medianasi:**$BC$tomonining o'rtasi$M_A$:
   
$$
   x_{M_A} = \frac{5 + 1}{2} = 3, \quad y_{M_A} = \frac{5 + 8}{2} = \frac{13}{2} = 6.5 \implies M_A(3; 6.5)
   
$$
   $A(1, 2)$va$M_A(3; 6.5)$ orqali o'tuvchi to'g'ri chiziq tenglamasi:
   
$$
   \frac{x - 1}{3 - 1} = \frac{y - 2}{6.5 - 2} \implies \frac{x - 1}{2} = \frac{y - 2}{4.5} \implies \frac{x - 1}{2} = \frac{2(y - 2)}{9}
   
$$
   
$$
   9(x - 1) = 4(y - 2) \implies 9x - 9 = 4y - 8 \implies 9x - 4y - 1 = 0
   
$$
   Uzunligi:
   
$$
   m_A = \sqrt{(3 - 1)^2 + (6.5 - 2)^2} = \sqrt{2^2 + 4.5^2} = \sqrt{4 + 20.25} = \sqrt{24.25} = \frac{\sqrt{97}}{2} \approx 4.924
   
$$

---

### 7-qadam: $A$ burchak bissektrisasi tenglamasi

Bissektrisa $BC$tomonni$D(x_D, y_D)$ nuqtada kesib o'tsin. Bissektrisa xossasiga ko'ra, u qarama-qarshi tomonni yondosh tomonlarga mutanosib bo'laklarga ajratadi:

$$
\frac{|BD|}{|DC|} = \frac{|AB|}{|AC|} = \frac{5}{6} = \lambda
$$

Kesmani $\lambda = \frac{5}{6}$ nisbatda bo'lish formulasi:

$$
x_D = \frac{x_B + \lambda x_C}{1 + \lambda} = \frac{5 + \frac{5}{6} \cdot 1}{1 + \frac{5}{6}} = \frac{\frac{35}{6}}{\frac{11}{6}} = \frac{35}{11}
$$

$$
y_D = \frac{y_B + \lambda y_C}{1 + \lambda} = \frac{5 + \frac{5}{6} \cdot 8}{1 + \frac{5}{6}} = \frac{5 + \frac{40}{6}}{\frac{11}{6}} = \frac{\frac{70}{6}}{\frac{11}{6}} = \frac{70}{11}
$$

Endi $A(1, 2)$va$D\left(\frac{35}{11}, \frac{70}{11}\right)$ nuqtalardan o'tuvchi to'g'ri chiziq tenglamasini tuzamiz:

$$
x_D - x_A = \frac{35}{11} - 1 = \frac{24}{11}, \quad y_D - y_A = \frac{70}{11} - 2 = \frac{48}{11}
$$

$$
\frac{x - 1}{\frac{24}{11}} = \frac{y - 2}{\frac{48}{11}} \implies \frac{x - 1}{1} = \frac{y - 2}{2} \implies 2(x - 1) = y - 2 \implies 2x - y = 0
$$

> Qanday ajoyib va chiroyli natija! $A$ burchak bissektrisasi shunchaki **$2x - y = 0$** yoki **$y = 2x$** to'g'ri chizig'idir!

---

### 8-qadam: Og'irlik markazi (medianalar kesishishi $M$)

Uchburchakning og'irlik markazi (centroid) barcha uchlar koordinatalarining o'rta arifmetigiga teng:

$$
x_M = \frac{x_A + x_B + x_C}{3} = \frac{1 + 5 + 1}{3} = \frac{7}{3}
$$

$$
y_M = \frac{y_A + y_B + y_C}{3} = \frac{2 + 5 + 8}{3} = \frac{15}{3} = 5
$$

Demak, og'irlik markazi:

$$
M\left(\frac{7}{3}, 5\right)
$$

---

### 9-qadam: Ortomarkaz (balandliklar kesishishi $H$)

Ortomarkazni topish uchun ikkita balandlik tenglamalaridan tuzilgan sistemani yechamiz:
- $h_B$: $y = 5$-$h_A$: $4x - 3y + 2 = 0$

$y = 5$ qiymatini ikkinchi tenglamaga qo'yamiz:

$$
4x - 3(5) + 2 = 0 \implies 4x - 15 + 2 = 0 \implies 4x = 13 \implies x = \frac{13}{4} = 3.25
$$

Demak, ortomarkaz:

$$
H\left(\frac{13}{4}, 5\right)
$$

---

### 10-qadam: Tashqi chizilgan aylana markazi $O$va radiusi$R$Teng yonli uchburchakda tashqi aylana markazi simmetriya o'qi bo'lgan$y = 5$to'g'ri chiziqda yotadi, shuning uchun$y_O = 5$.

$AB$ tomonning o'rtasidan o'tuvchi o'rta perpendikulyar tenglamasini tuzamiz:
- $AB$o'rtasi$M_C$: $x = \frac{1+5}{2} = 3, y = \frac{2+5}{2} = 3.5 \implies M_C(3; 3.5)$.
- $AB$ning yo'naltiruvchi vektori$\vec{s}_{AB} = (4, 3)$. O'rta perpendikulyar unga tik bo'lgani uchun, uning normal vektori $\vec{n} = (4, 3)$ bo'ladi.
- O'rta perpendikulyar tenglamasi:
  
$$
  4(x - 3) + 3(y - 3.5) = 0 \implies 4x + 3y - 12 - 10.5 = 0 \implies 4x + 3y - 22.5 = 0
  
$$
  Ikkiga ko'paytirsak: $8x + 6y - 45 = 0$.

Endi $y_O = 5$ ni qo'yamiz:

$$
8x + 6(5) - 45 = 0 \implies 8x + 30 - 45 = 0 \implies 8x = 15 \implies x_O = \frac{15}{8} = 1.875
$$

Demak, tashqi aylana markazi:

$$
O\left(\frac{15}{8}, 5\right)
$$

Tashqi aylana radiusi $R$:

$$
R = |OA| = \sqrt{\left(\frac{15}{8} - 1\right)^2 + (5 - 2)^2} = \sqrt{\left(\frac{7}{8}\right)^2 + 3^2} = \sqrt{\frac{49}{64} + \frac{576}{64}} = \sqrt{\frac{625}{64}} = \frac{25}{8} = 3.125
$$

Sinuslar teoremasi bilan tekshiramiz:

$$
R = \frac{|BC|}{2 \sin A} = \frac{5}{2 \cdot 0.8} = \frac{5}{1.6} = \frac{25}{8} = 3.125
$$

Hisob-kitob 100% to'g'ri!

---

### 11-qadam: Ichki chizilgan aylana radiusi $r$va markazi$I$

Ichki aylana radiusi:

$$
r = \frac{S}{p} = \frac{12}{8} = \frac{3}{2} = 1.5
$$

Ichki aylana markazi $I(x_I, y_I)$:
1. U ham simmetriya o'qida yotadi: $y_I = 5$.
2. U $AC$ ($x = 1$) to'g'ri chizig'iga urinadi. Uchburchak $x \ge 1$yarim tekislikda joylashgani uchun markaz$AC$dan o'ng tomonga$r = 1.5$ masofada bo'ladi:
   
$$
   x_I = 1 + r = 1 + 1.5 = 2.5 = \frac{5}{2}
   
$$

Demak, ichki aylana markazi:

$$
I\left(\frac{5}{2}, 5\right)
$$

---

### 12-qadam: $A(1, 2)$uchining$BC$tomonga nisbatan simmetrik nuqtasi$A'$

$BC$to'g'ri chizig'i:$3x + 4y - 35 = 0$.
$A$dan tushirilgan balandlik asosi$H_A(x, y)$ ni topish uchun sistemani yechamiz:

$$
\begin{cases}
3x + 4y = 35 \\
4x - 3y = -2
\end{cases}
$$

Birinchi tenglamani $3$ga, ikkinchisini$4$ ga ko'paytirib qo'shamiz:

$$
\begin{cases}
9x + 12y = 105 \\
16x - 12y = -8
\end{cases}
\implies 25x = 97 \implies x = \frac{97}{25} = 3.88
$$

$$
4(3.88) - 3y + 2 = 0 \implies 15.52 + 2 = 3y \implies 3y = 17.52 \implies y = 5.84 = \frac{146}{25}
$$

$H_A(3.88; 5.84)$nuqta$A(1, 2)$va qidirilayotgan$A'(x', y')$ nuqtalar kesmasining qoq o'rtasidir:

$$
\frac{1 + x'}{2} = 3.88 \implies 1 + x' = 7.76 \implies x' = 6.76 = \frac{169}{25}
$$

$$
\frac{2 + y'}{2} = 5.84 \implies 2 + y' = 11.68 \implies y' = 9.68 = \frac{242}{25}
$$

Demak, simmetrik nuqta:

$$
A'\left(\frac{169}{25}, \frac{242}{25}\right) = (6.76; 9.68)
$$

---

### 13-qadam: Uchburchak sohasining chiziqli tengsizliklar sistemasi

Uchburchak uchta to'g'ri chiziq bilan chegaralangan:
1. $AC$: $x - 1 = 0$2.$AB$: $3x - 4y + 5 = 0$3.$BC$: $3x + 4y - 35 = 0$Uchburchak ichidagi sinov nuqtasi sifatida uning ichki markazi$I(2.5, 5)$ ni olamiz:
1. $x - 1$: $2.5 - 1 = 1.5 > 0 \implies x - 1 \ge 0$(yoki$x \ge 1$);
2. $3x - 4y + 5$: $3(2.5) - 4(5) + 5 = 7.5 - 20 + 5 = -7.5 < 0 \implies 3x - 4y + 5 \le 0$;
3. $3x + 4y - 35$: $3(2.5) + 4(5) - 35 = 7.5 + 20 - 35 = -7.5 < 0 \implies 3x + 4y - 35 \le 0$.

Shunday qilib, $\triangle ABC$ yopiq sohasi quyidagi chiziqli tengsizliklar sistemasi orqali to'liq beriladi:

$$
\begin{cases}
x \ge 1 \\
3x - 4y + 5 \le 0 \\
3x + 4y - 35 \le 0
\end{cases}
$$

---

## 5. Imtihondagi asosiy tuzoqlar va xatolar

1. **Burchak kosinusida vektor yo'nalishini adashtirish:**
   $\angle A$burchakni topayotganda$\vec{AB}$va$\vec{AC}$vektorlarini olish shart. Agar talaba e'tiborsizlik qilib$\vec{BA}$va$\vec{AC}$ ni olsa, burchak kosinusi manfiy bo'lib chiqadi va ichki burchak o'rniga tashqi qo'shni burchak topib qo'yiladi!
2. **Bissektrisada proporsiya yo'nalishi:**
   $\frac{|BD|}{|DC|} = \frac{|AB|}{|AC|}$nisbatda uchlar tartibiga e'tibor bering: suratda$B$bo'lsa, o'ng tomonda ham$B$qatnashgan tomon$|AB|$ bo'lishi shart.
3. **Balandlik tenglamasida normal va yo'naltiruvchi vektor:**
   To'g'ri chiziq $Ax + By + C = 0$ga perpendikulyar bo'lgan chiziqning tenglamasi$Bx - Ay + D = 0$ ko'rinishida yoziladi (koeffitsiyentlar o'rni almashadi va birining ishorasi teskarisiga o'zgaradi).

---

## 6. Mustaqil yechish uchun masalalar

### 1-masala
Uchburchak uchlari berilgan: $A(-2, 1)$, $B(2, 4)$, $C(6, 1)$.
1. Barcha tomonlar tenglamalarini tuzing;
2. $B$ uchidan tushirilgan balandlik va mediana tenglamalarini toping;
3. Uchburchak yuzi va perimetrini hisoblang;
4. Uchburchak sohasini chiziqli tengsizliklar sistemasi ko'rinishida yozing.

### 2-masala
$A(0, 0)$, $B(3, 4)$, $C(6, 0)$ uchburchagining:
1. Ichki burchaklari kosinuslarini toping;
2. Ichki chizilgan va tashqi chizilgan aylanalar radiuslari ($r$va$R$) ni toping;
3. Og'irlik markazi $M$va ortomarkaz$H$ koordinatalarini aniqlang.

---

### Javoblar va tekshirish

#### 1-masala:
- Tomonlar: $AB: 3x - 4y + 10 = 0$; $BC: 3x + 4y - 18 = 0$; $AC: y = 1$ ($y - 1 = 0$).
- $AC$tomon uzunligi$8$, $AB = 5$, $BC = 5$. Teng yonli uchburchak.
- $B$dan tushirilgan balandlik va mediana:$x = 2$ ($x - 2 = 0$), uzunligi $h_B = m_B = 3$.
- $S = \frac{1}{2} \cdot 8 \cdot 3 = 12$, $P = 5 + 5 + 8 = 18$.
- Tengsizliklar sistemasi: $\begin{cases} y \ge 1 \\ 3x - 4y + 10 \ge 0 \\ 3x + 4y - 18 \le 0 \end{cases}$

#### 2-masala:
- $|AB| = 5$, $|BC| = \sqrt{3^2 + (-4)^2} = 5$, $|AC| = 6$. Teng yonli uchburchak!
- $\cos A = \frac{3}{5} = 0.6$, $\cos C = 0.6$, $\cos B = \frac{7}{25} = 0.28$.
- $S = 12$, $p = 8$. Ichki aylana radiusi $r = \frac{12}{8} = 1.5$.
- Tashqi aylana radiusi $R = \frac{abc}{4S} = \frac{5 \cdot 5 \cdot 6}{4 \cdot 12} = \frac{150}{48} = \frac{25}{8} = 3.125$.
- Og'irlik markazi: $M\left(\frac{0+3+6}{3}, \frac{0+4+0}{3}\right) = M\left(3, \frac{4}{3}\right)$.
- Ortomarkaz: $H\left(3, \frac{7}{4}\right)$.
