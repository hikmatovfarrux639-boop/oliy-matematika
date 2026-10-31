---
title: "Kvadratik formalar, Silvestr mezoni va Lagranj usuli"
module: "chiziqli-algebra"
order: 18
description: "Kvadratik forma matritsasi, Silvestrning musbat va manfiy aniqlanganlik mezoni, Lagranj to'la kvadratlar usuli va inersiya qonuni."
---

## Kirish: Kvadratik forma nima va u qayerda qo'llaniladi?

Ko'p o'zgaruvchili funksiyalarni o'rganishda eng muhim vazifa — ularning **ekstremumlarini (lokal minimum va maksimumlarini)** topishdir. Matematik analizda bir o'zgaruvchili funksiya uchun $f''(x_0) > 0$ bo'lsa minimum, $f''(x_0) < 0$ bo'lsa maksimum bo'lar edi.

Ammo $z = f(x, y)$ yoki $u = f(x_1, \dots, x_n)$ funksiyalarda ikkinchi tartibli differensial aynan **KVADRATIK FORMA**ga aylanadi:
$$
d^2 f = \sum_{i=1}^n \sum_{j=1}^n \frac{\partial^2 f}{\partial x_i \partial x_j} dx_i dx_j
$$

Agar bu kvadratik forma har doim musbat bo'lsa — nuqta qat'iy **lokal minimum** (grafigi piyoladek botiq); agar har doim manfiy bo'lsa — **lokal maksimum** (grafigi gumbazdek qavariq); agar ishorasi o'zgaruvchan bo'lsa — **egar nuqta** (ekstremum mavjud emas!) bo'ladi.

Shuningdek, kvadratik formalar nazariy mexanikada tizimning kinetik va potensial energiyasini hisoblashda, ikkinchi tartibli sirtlar (ellipsoid, giperboloid) geometriyasida va mashinali o'rganishda optimallash algoritmlarida fundamental ahamiyatga ega.

---

## 1. Kvadratik formaning matritsaviy ko'rinishi

$n$ ta o'zgaruvchining kvadratik formasi deb, har bir hadi qat'iy 2-darajali bo'lgan bir jinsli ko'phadga aytiladi:

$$
Q(x_1, x_2, \dots, x_n) = a_{11} x_1^2 + a_{22} x_2^2 + \dots + a_{nn} x_n^2 + 2a_{12} x_1 x_2 + 2a_{13} x_1 x_3 + \dots
$$

Matritsaviy ko'rinishi:
$$
Q(X) = X^T \cdot A \cdot X
$$
bu yerda $X = \begin{pmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end{pmatrix}$, $A$ esa **haqiqiy simmetrik kvadrat matritsadir** ($A = A^T$, ya'ni $a_{ij} = a_{ji}$):

$$
A = \begin{pmatrix}
a_{11} & a_{12} & \dots & a_{1n} \\
a_{21} & a_{22} & \dots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{n1} & a_{n2} & \dots & a_{nn}
\end{pmatrix}
$$

> [!IMPORTANT] Simmetriya qoidasi
> Bosh diagonalda kvadratlar oldidagi koeffitsiyentlar $a_{ii}$ turadi. Nodiagonal kataklarda esa aralash ko'paytma $x_i x_j$ koeffitsiyentining **yarmi** turadi: $a_{ij} = a_{ji} = \frac{1}{2} c_{ij}$.

---

## 2. Kvadratik formalarning ishora turlari

Kvadratik forma $Q(X)$ noldan farqli ixtiyoriy $X \neq \mathbf{0}$ vektorlar uchun qanday qiymatlar qabul qilishiga qarab 5 turga bo'linadi:

1. **Qat'iy musbat aniqlangan:** Barcha $X \neq \mathbf{0}$ uchun $Q(X) > 0$.
2. **Qat'iy manfiy aniqlangan:** Barcha $X \neq \mathbf{0}$ uchun $Q(X) < 0$.
3. **Yarim musbat (Nomanfiy):** Barcha $X$ uchun $Q(X) \ge 0$, lekin ba'zi noldan farqli $X \neq \mathbf{0}$ nuqtalarda $Q(X) = 0$ bo'lishi mumkin.
4. **Yarim manfiy (Nomusbat):** Barcha $X$ uchun $Q(X) \le 0$.
5. **Noaniq (Ishorasi o'zgaruvchan):** Ba'zi nuqtalarda $Q(X) > 0$, boshqa nuqtalarda $Q(X) < 0$. (Bunday nuqtalar ko'p o'zgaruvchili funksiyalarda *egar nuqta* bo'ladi).

---

## 3. Silvestr mezoni (Bosh minorlar orqali tekshirish)

Formaning ishorasini aniqlashning eng tezkor va qulay usuli — uning matritsasi $A$ ning yuqori chap burchagidan boshlanuvchi **bosh burchak minorlarini** hisoblashdir:

$$
\Delta_1 = a_{11}, \quad \Delta_2 = \begin{vmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{vmatrix}, \quad \Delta_3 = \begin{vmatrix} a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \\ a_{31} & a_{32} & a_{33} \end{vmatrix}, \quad \dots, \quad \Delta_n = \det A
$$

> [!NOTE] Silvestr teoremasi
> 1. **Musbat aniqlanganlik mezoni:**
>    Kvadratik forma $Q(X)$ **qat'iy musbat aniqlangan** bo'lishi uchun uning barcha bosh minorlari **qat'iy musbat** bo'lishi zarur va yetarli:
>    $$
>    \Delta_1 > 0, \quad \Delta_2 > 0, \quad \Delta_3 > 0, \quad \dots, \quad \Delta_n > 0
>    $$
> 2. **Manfiy aniqlanganlik mezoni:**
>    Kvadratik forma $Q(X)$ **qat'iy manfiy aniqlangan** bo'lishi uchun uning bosh minorlari **ishorasi almashinib** kelishi kerak (toq o'rindagi minorlar qat'iy manfiy, juft o'rindagilar qat'iy musbat!):
>    $$
>    \Delta_1 < 0, \quad \Delta_2 > 0, \quad \Delta_3 < 0, \quad \Delta_4 > 0, \quad \dots, \quad (-1)^k \Delta_k > 0
>    $$
> 3. **Noaniqlik holati:**
>    Agar minorlar noldan farqli bo'lib, lekin yuqoridagi ikki qoidaning hech biriga to'g'ri kelmasa (masalan, $\Delta_1 > 0, \Delta_2 < 0$), u holda kvadratik forma **ishorasi o'zgaruvchan (noaniq)** hisoblanadi.

---

## 4. Lagranj usuli (To'la kvadratlar ajratish)

Kvadratik formani ortogonal almashtirishsiz, faqat algebraik almashtirishlar orqali **kanonik ko'rinishga** (faqat kvadratlar yig'indisiga) keltirish usuli **Lagranj usuli** deyiladi.

### Algoritm:
1. $x_1$ o'zgaruvchi qatnashgan barcha hadlarni ajratib olamiz va to'la kvadrat shakliga keltiramiz:
   $$
   (a x_1 + b x_2 + \dots)^2
   $$
2. Qavs tashqarisida qolgan qoldiq ifodada $x_1$ umuman qatnashmaydi. Endi shu qoldiqdan $x_2$ bo'yicha to'la kvadrat ajratamiz.
3. Jarayon barcha o'zgaruvchilar to'la kvadratlar ichiga kirguncha davom ettiriladi.

> [!NOTE] Silvestrning inersiya qonuni
> Kvadratik forma qanday chiziqli almashtirish bilan kanonik ko'rinishga keltirilishidan qat'i nazar, undagi **musbat kvadratlar soni (musbat inersiya indeksi $p$)** va **manfiy kvadratlar soni (manfiy inersiya indeksi $q$)** har doim bir xil bo'lib qoladi!

---

## 5. Qadamma-qadam to'liq yechilgan amaliy misollar

### 1-misol: Silvestr mezoni bilan tekshirish

**Masala:** Ushbu kvadratik formaning ishorasini Silvestr mezoni yordamida aniqlang:
$$
Q(x_1, x_2, x_3) = 2x_1^2 + 5x_2^2 + 2x_3^2 + 4x_1 x_2 - 2x_1 x_3 - 4x_2 x_3
$$

#### Yechish:

**1-qadam. Simmetrik matritsani tuzamiz:**
- Kvadratlar: $a_{11} = 2, a_{22} = 5, a_{33} = 2$.
- Aralash ko'paytmalar:
  * $4x_1 x_2 \implies a_{12} = a_{21} = 2$;
  * $-2x_1 x_3 \implies a_{13} = a_{31} = -1$;
  * $-4x_2 x_3 \implies a_{23} = a_{32} = -2$.

$$
A = \begin{pmatrix} 2 & 2 & -1 \\ 2 & 5 & -2 \\ -1 & -2 & 2 \end{pmatrix}
$$

**2-qadam. Bosh burchak minorlarini hisoblaymiz:**

1. Birinchi minor:
   $$
   \Delta_1 = 2 > 0
   $$
2. Ikkinchi minor ($2 \times 2$):
   $$
   \Delta_2 = \begin{vmatrix} 2 & 2 \\ 2 & 5 \end{vmatrix} = 2 \cdot 5 - 2 \cdot 2 = 10 - 4 = 6 > 0
   $$
3. Uchinchi minor ($3 \times 3$ determinant):
   1-satr bo'yicha yoyamiz:
   $$
   \Delta_3 = \det A = 2 \begin{vmatrix} 5 & -2 \\ -2 & 2 \end{vmatrix} - 2 \begin{vmatrix} 2 & -2 \\ -1 & 2 \end{vmatrix} - 1 \begin{vmatrix} 2 & 5 \\ -1 & -2 \end{vmatrix}
   $$
   Ichki determinantlarni hisoblaymiz:
   - $\begin{vmatrix} 5 & -2 \\ -2 & 2 \end{vmatrix} = 10 - 4 = 6$
   - $\begin{vmatrix} 2 & -2 \\ -1 & 2 \end{vmatrix} = 4 - 2 = 2$
   - $\begin{vmatrix} 2 & 5 \\ -1 & -2 \end{vmatrix} = -4 - (-5) = 1$

   $$
   \Delta_3 = 2(6) - 2(2) - 1(1) = 12 - 4 - 1 = 7 > 0
   $$

**Natija:**
$\Delta_1 = 2 > 0, \quad \Delta_2 = 6 > 0, \quad \Delta_3 = 7 > 0$.
Barcha bosh minorlar qat'iy musbat!

**Javob:** Silvestr mezoniga ko'ra kvadratik forma **qat'iy musbat aniqlangan**.

---

### 2-misol: Lagranj usulida to'la kvadratlar ajratish

**Masala:** Quyidagi kvadratik formani Lagranj usuli bilan kanonik ko'rinishga keltiring va uning inersiya indekslarini aniqlang:
$$
Q(x_1, x_2, x_3) = x_1^2 - 4x_1 x_2 + 2x_1 x_3 + 5x_2^2 - 6x_2 x_3 + 3x_3^2
$$

#### Yechish:

**1-bosqich: $x_1$ qatnashgan hadlarni birlashtirib to'la kvadrat ajratamiz:**
$$
x_1^2 + 2x_1 (-2x_2 + x_3)
$$
To'la kvadrat bo'lishi uchun $(-2x_2 + x_3)^2$ ni qo'shamiz va ayiramiz:
$$
= \left[ x_1 + (-2x_2 + x_3) \right]^2 - (-2x_2 + x_3)^2 + 5x_2^2 - 6x_2 x_3 + 3x_3^2
$$
$(-2x_2 + x_3)^2 = 4x_2^2 - 4x_2 x_3 + x_3^2$ ni ochamiz va qoldiqqa qo'shamiz:
$$
-(4x_2^2 - 4x_2 x_3 + x_3^2) + 5x_2^2 - 6x_2 x_3 + 3x_3^2 = x_2^2 - 2x_2 x_3 + 2x_3^2
$$

Demak, forma hozircha quyidagi ko'rinishga keldi:
$$
Q = (x_1 - 2x_2 + x_3)^2 + x_2^2 - 2x_2 x_3 + 2x_3^2
$$

**2-bosqich: Qoldiqdan $x_2$ bo'yicha to'la kvadrat ajratamiz:**
$$
x_2^2 - 2x_2 x_3 + 2x_3^2 = (x_2 - x_3)^2 - x_3^2 + 2x_3^2 = (x_2 - x_3)^2 + x_3^2
$$

**3-bosqich: Yakuniy kanonik shakl va o'zgaruvchilarni almashtirish:**
$$
Q = (x_1 - 2x_2 + x_3)^2 + (x_2 - x_3)^2 + x_3^2
$$

Yangi o'zgaruvchilarni kiritamiz:
$$
\begin{cases}
y_1 = x_1 - 2x_2 + x_3 \\
y_2 = x_2 - x_3 \\
y_3 = x_3
\end{cases}
$$

Yangi koordinatalarda kanonik ko'rinish:
$$
Q(y_1, y_2, y_3) = y_1^2 + y_2^2 + y_3^2
$$

**Javob:** 
Kanonik ko'rinishi: $y_1^2 + y_2^2 + y_3^2$.
Barcha 3 ta kvadrat oldidagi koeffitsiyentlar musbat. Musbat inersiya indeksi $p = 3$, manfiy indeks $q = 0$. Forma qat'iy musbat aniqlangan!

---

## 6. Talabalar yo'l qo'yadigan tuzoqlar

> [!WARNING] Silvestr mezonidagi xatolar
> 1. **Manfiy aniqlanganlikda barcha minorlarni manfiy bo'lishi kerak deb o'ylash:** Bu juda keng tarqalgan xato! $\Delta_2 = a_{11}a_{22} - a_{12}^2$ ikkita manfiy son ko'paytmasi bo'lgani uchun qat'iy musbat bo'lishi shart ($\Delta_2 > 0$). Agar $\Delta_2 < 0$ bo'lsa, forma manfiy bo'la olmaydi!
> 2. **Nodiagonal elementlarni 2 ga bo'lishni unutish:** Formada $6x_1 x_2$ bo'lsa, matritsaga $a_{12} = a_{21} = 3$ yozilishi shart.
> 3. **$\Delta_i = 0$ holatida xulosa chiqarish:** Agar bosh minorlardan birortasi nolga teng bo'lib qolsa ($\Delta_k = 0$), Silvestr mezoni qat'iy javob bera olmaydi (forma yarim aniqlangan yoki noaniq bo'lishi mumkin). Bunday holda Lagranj usulini qo'llash shart!

---

## 7. Mustaqil yechish uchun amaliy mashqlar

1. $Q(x_1, x_2) = -3x_1^2 + 4x_1 x_2 - 2x_2^2$ formaning ishorasini aniqlang.
   - *Javob:* $\Delta_1 = -3 < 0$, $\Delta_2 = (-3)(-2) - 4 = 6 - 4 = 2 > 0$. Ishoralar almashindi $(-; +) \implies$ **Qat'iy manfiy aniqlangan**.

2. $Q(x_1, x_2, x_3) = x_1^2 + 2x_2^2 + 3x_3^2 + 2x_1 x_2 - 2x_1 x_3$ formani Silvestr mezoni bilan tekshiring.
   - *Javob:* $\Delta_1 = 1 > 0$, $\Delta_2 = 1 > 0$, $\Delta_3 = 1 > 0 \implies$ **Qat'iy musbat aniqlangan**.

3. $Q(x_1, x_2) = x_1^2 + 4x_1 x_2 + 2x_2^2$ formani tekshiring.
   - *Javob:* $\Delta_1 = 1 > 0$, $\Delta_2 = 2 - 4 = -2 < 0 \implies$ **Ishorasi o'zgaruvchan (noaniq)**.
