---
title: "Kesmani bo'lish va tetraedr (piramida) kompleks masalalari"
module: "vektorlar-geometriya"
order: 7
description: "Kesmani berilgan nisbatda bo'lish, uchburchak va tetraedr og'irlik markazi, piramida qirralari, balandlik tenglamasi, yoqlar burchagi va hajmni hisoblash."
---

## 📌 Kirish va Geometrik/Fizik Mohiyat

Analitik geometriya va vektorli hisob kursining oliy o'quv yurtlari (OTM) imtihonlaridagi eng mashhur, klassik va keng qamrovli sinovi — bu **tetraedr (uchburchakli piramida) bo'yicha kompleks masala**dir. Ushbu yagona masalada talabaning deyarli barcha mavzularni: vektorlarning skalyar, vektorli va aralash ko'paytmalari, tekislik va to'g'ri chiziq tenglamalari, burchaklar va masofalarni qay darajada o'zlashtirgani to'liq sinovdan o'tkaziladi.

Buning poydevorida esa kesmani berilgan nisbatda bo'lish va fazoviy jismlarning og'irlik markazini (barisentrini) topish kabi fundamental geometrik tushunchalar yotadi:
1. **Kesmani bo'lish:** Nyuton mexanikasi va statikasida richag qonuni, turli massali zarrachalar sistemasining muvozanat nuqtasini aniqlash.
2. **Tetraedr — 3D fazoning eng sodda ko'pyog'i (3-simpleks):** 2D tekislikda eng sodda yopiq ko'pburchak uchburchak bo'lsa, 3D fazoda bu 4 ta uchga ega tetraedrdir.
3. **Zamonaviy tatbiqlar:**
   - **Chekli elementlar usuli (FEM - Finite Element Method):** Bino konstruktsiyalari mustahkamligi, samolyotlar aerodinamikasi yoki avtomobillarning to'qnashuv sinovlarini (Crash test) kompyuterda modellashtirishda murakkab 3D modellar millionlab mayda tetraedrlarga ajratiladi (*tetrahedral mesh*).
   - **Kompyuter animatsiyasi va GameDev:** Har qanday 3D obyekt fazoda uchburchaklar va tetraedrlar karkasi sifatida saqlanadi.

Ushbu darsda biz kesmani bo'lish formulasidan boshlab, to'rtta uchi berilgan piramidaning barcha parametrlarini Mathprofi va Ilin-Poznyak akademik standartida hisoblashni o'rganamiz.

---

## 📐 Asosiy Nazariya, Qoidalar va Teoremalar

### 1. Kesmani berilgan nisbatda bo'lish

Fazoda ikki nuqta $A(x_1, y_1, z_1)$ va $B(x_2, y_2, z_2)$ berilgan bo'lsin. $AB$ to'g'ri chiziqda yotuvchi va ushbu kesmani berilgan $\lambda$ nisbatda bo'luvchi $M(x, y, z)$ nuqtani qaraymiz:
$$
\lambda = \frac{|\vec{AM}|}{|\vec{MB}|} \quad (\lambda \neq -1)
$$
- Agar $M$ nuqta kesmaning ichida yotsa: $\vec{AM} = \lambda \vec{MB}$ ($\lambda > 0$, ichki bo'lish).
- Agar $M$ nuqta kesmaning tashqarisida yotsa: $\lambda < 0$ (tashqi bo'lish).

**Teorema:** $M(x, y, z)$ nuqtaning koordinatalari quyidagi formulalar bilan topiladi:
$$
x = \frac{x_1 + \lambda x_2}{1 + \lambda}, \quad y = \frac{y_1 + \lambda y_2}{1 + \lambda}, \quad z = \frac{z_1 + \lambda z_2}{1 + \lambda}
$$

**Xususiy hollar:**
1. **Kesma o'rtasi ($\lambda = 1$):**
   $$
   x = \frac{x_1 + x_2}{2}, \quad y = \frac{y_1 + y_2}{2}, \quad z = \frac{z_1 + z_2}{2}
   $$
2. **Uchburchak medianalari kesishish nuqtasi (Og'irlik markazi / Barisentr):**  
   Uchlari $A, B, C$ bo'lgan uchburchak og'irlik markazi koordinatalari uchlar koordinatalarining o'rta arifmetigiga teng:
   $$
   G_{\triangle} = \left(\frac{x_A + x_B + x_C}{3}, \frac{y_A + y_B + y_C}{3}, \frac{z_A + z_B + z_C}{3}\right)
   $$
3. **Tetraedr og'irlik markazi:**  
   Uchlari $A_1, A_2, A_3, A_4$ bo'lgan piramidaning og'irlik markazi (medianalari kesishish nuqtasi):
   $$
   G_{\text{tetr}} = \left(\frac{x_1 + x_2 + x_3 + x_4}{4}, \frac{y_1 + y_2 + y_3 + y_4}{4}, \frac{z_1 + z_2 + z_3 + z_4}{4}\right)
   $$

---

### 2. Tetraedr bo'yicha kompleks metrik hisob-kitoblar

Fazoda to'rtta uchi koordinatalari bilan berilgan tetraedr berilgan bo'lsin:
$$
A_1(x_1, y_1, z_1), \quad A_2(x_2, y_2, z_2), \quad A_3(x_3, y_3, z_3), \quad A_4(x_4, y_4, z_4)
$$
Bitta uchdan (masalan, $A_1$ dan) chiquvchi uchta qirra vektorlarini tuzamiz:
$$
\vec{a} = \vec{A_1 A_2} = (x_2 - x_1, y_2 - y_1, z_2 - z_1)
$$
$$
\vec{b} = \vec{A_1 A_3} = (x_3 - x_1, y_3 - y_1, z_3 - z_1)
$$
$$
\vec{c} = \vec{A_1 A_4} = (x_4 - x_1, y_4 - y_1, z_4 - z_1)
$$

#### 1) Qirralar uzunliklari:
Qirra uzunligi mos vektorning moduliga teng:
$$
|A_1 A_2| = |\vec{a}| = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2}
$$

#### 2) Yoqlar yuzalari (Asos yuzi):
$A_1 A_2 A_3$ yoqining yuzi $\vec{a}$ va $\vec{b}$ vektorlaridan yasalgan uchburchak yuzidir:
$$
S_{\triangle A_1 A_2 A_3} = \frac{1}{2} |\vec{a} \times \vec{b}| = \frac{1}{2} |\vec{A_1 A_2} \times \vec{A_1 A_3}|
$$

#### 3) Tetraedr hajmi:
Piramidaning hajmi uning qirralaridan yasalgan fazoviy parallelepiped hajmining $\frac{1}{6}$ qismiga teng:
$$
V = \frac{1}{6} |(\vec{a}, \vec{b}, \vec{c})| = \frac{1}{6} \left| \begin{vmatrix} x_2 - x_1 & y_2 - y_1 & z_2 - z_1 \\ x_3 - x_1 & y_3 - y_1 & z_3 - z_1 \\ x_4 - x_1 & y_4 - y_1 & z_4 - z_1 \end{vmatrix} \right|
$$
*Eslatma: Agar determinant $0$ ga teng chiqsa, 4 ta nuqta bitta tekislikda yotadi (komplanar) va piramida hosil qilmaydi.*

#### 4) Piramida balandligi:
$A_4$ uchidan $A_1 A_2 A_3$ asos tekisligiga tushirilgan balandlik $h$:
Piramida hajmi formulasidan: $V = \frac{1}{3} S_{\text{asos}} \cdot h \implies$
$$
h = \frac{3V}{S_{\text{asos}}} = \frac{3 \cdot \frac{1}{6} |(\vec{a}, \vec{b}, \vec{c})|}{\frac{1}{2} |\vec{a} \times \vec{b}|} = \frac{|(\vec{a}, \vec{b}, \vec{c})|}{|\vec{a} \times \vec{b}|}
$$

#### 5) Asos tekisligi tenglamasi:
Uchta nuqta $A_1, A_2, A_3$ orqali o'tuvchi tekislik tenglamasi:
$$
\begin{vmatrix} x - x_1 & y - y_1 & z - z_1 \\ x_2 - x_1 & y_2 - y_1 & z_2 - z_1 \\ x_3 - x_1 & y_3 - y_1 & z_3 - z_1 \end{vmatrix} = 0 \iff Ax + By + Cz + D = 0
$$
Bunda tekislikning normal vektori $\vec{n}_1 = \vec{a} \times \vec{b} = (A, B, C)$ ga teng.

#### 6) Balandlik to'g'ri chizig'ining kanonik tenglamasi:
$A_4(x_4, y_4, z_4)$ uchidan tushirilgan balandlik asos tekisligiga perpendikulyar bo'lgani uchun, uning yo'naltiruvchi vektori sifatida asosning normal vektori $\vec{n}_1 = (A, B, C)$ olinadi:
$$
\frac{x - x_4}{A} = \frac{y - y_4}{B} = \frac{z - z_4}{C}
$$

#### 7) Yoqlar orasidagi ikki yoqli burchak:
Ikki yoq (tekislik) orasidagi burchak ularning normal vektorlari $\vec{n}_1$ va $\vec{n}_2$ orasidagi burchak kosinusiga teng:
$$
\cos \phi = \frac{|\vec{n}_1 \cdot \vec{n}_2|}{|\vec{n}_1| |\vec{n}_2|}
$$

---

## 📝 Qadamma-qadam Yechilgan Universitet Misollari

### 1-misol: Kesmani berilgan nisbatda bo'lish va og'irlik markazlari
**Shart:** $A(1, -3, 4)$ va $B(6, 7, -1)$ nuqtalar berilgan.  
1) $AB$ kesmani $2:3$ nisbatda bo'luvchi $M$ nuqtani toping;  
2) Agar $C(2, 5, 6)$ uchinchi nuqta bo'lsa, $\triangle ABC$ uchburchak og'irlik markazi $G$ ni toping.

**Yechish:**
1-qadam: $M$ nuqtani topamiz. Nisbat $\lambda = \frac{2}{3}$:
$$
x_M = \frac{x_A + \lambda x_B}{1 + \lambda} = \frac{1 + \frac{2}{3} \cdot 6}{1 + \frac{2}{3}} = \frac{1 + 4}{\frac{5}{3}} = \frac{5}{\frac{5}{3}} = 3
$$
$$
y_M = \frac{y_A + \lambda y_B}{1 + \lambda} = \frac{-3 + \frac{2}{3} \cdot 7}{1 + \frac{2}{3}} = \frac{-3 + \frac{14}{3}}{\frac{5}{3}} = \frac{\frac{5}{3}}{\frac{5}{3}} = 1
$$
$$
z_M = \frac{z_A + \lambda z_B}{1 + \lambda} = \frac{4 + \frac{2}{3} \cdot (-1)}{1 + \frac{2}{3}} = \frac{4 - \frac{2}{3}}{\frac{5}{3}} = \frac{\frac{10}{3}}{\frac{5}{3}} = 2
$$
Demak: $M(3, 1, 2)$.

2-qadam: $\triangle ABC$ uchburchak og'irlik markazi:
$$
x_G = \frac{1 + 6 + 2}{3} = \frac{9}{3} = 3
$$
$$
y_G = \frac{-3 + 7 + 5}{3} = \frac{9}{3} = 3
$$
$$
z_G = \frac{4 + (-1) + 6}{3} = \frac{9}{3} = 3
$$
Demak: $G(3, 3, 3)$.

**Javob:** $M(3, 1, 2), \quad G(3, 3, 3)$.

---

### 2-misol: Tetraedrning qirrasi, yoq yuzi, hajmi va balandligi (Kompleks imtihon masalasi)
**Shart:** Uchlari $A_1(1, 2, 0)$, $A_2(3, 0, -3)$, $A_3(5, 2, 6)$ va $A_4(8, 4, -9)$ nuqtalarda bo'lgan tetraedr berilgan.  
Hisoblang:
1) $A_1 A_2$ qirrasi uzunligi;
2) $A_1 A_2 A_3$ yoqining yuzi $S_{\text{asos}}$;
3) Tetraedr hajmi $V$;
4) $A_4$ uchidan tushirilgan balandlik $h$.

**Yechish:**
1-qadam: Boshlang'ich qirra vektorlarini tuzamiz:
$$
\vec{a} = \vec{A_1 A_2} = (3 - 1, 0 - 2, -3 - 0) = (2, -2, -3)
$$
$$
\vec{b} = \vec{A_1 A_3} = (5 - 1, 2 - 2, 6 - 0) = (4, 0, 6)
$$
$$
\vec{c} = \vec{A_1 A_4} = (8 - 1, 4 - 2, -9 - 0) = (7, 2, -9)
$$

2-qadam: $A_1 A_2$ qirrasi uzunligi:
$$
|A_1 A_2| = |\vec{a}| = \sqrt{2^2 + (-2)^2 + (-3)^2} = \sqrt{4 + 4 + 9} = \sqrt{17}
$$

3-qadam: $A_1 A_2 A_3$ asosining yuzi $S_{\text{asos}}$:
Vektor ko'paytma $\vec{a} \times \vec{b}$ ni topamiz:
$$
\vec{n}_1 = \vec{a} \times \vec{b} = \begin{vmatrix} \vec{i} & \vec{j} & \vec{k} \\ 2 & -2 & -3 \\ 4 & 0 & 6 \end{vmatrix}
$$
$$
= \vec{i}(-12 - 0) - \vec{j}(12 - (-12)) + \vec{k}(0 - (-8)) = -12\vec{i} - 24\vec{j} + 8\vec{k} = (-12, -24, 8)
$$
Ushbu vektorning modulini hisoblaymiz:
$$
|\vec{a} \times \vec{b}| = \sqrt{(-12)^2 + (-24)^2 + 8^2} = \sqrt{144 + 576 + 64} = \sqrt{784} = 28
$$
Asos yuzi:
$$
S_{\text{asos}} = \frac{1}{2} |\vec{a} \times \vec{b}| = \frac{1}{2} \cdot 28 = 14
$$

4-qadam: Tetraedr hajmi $V$:
Aralash ko'paytmani skalyar ko'paytma orqali hisoblaymiz: $(\vec{a}, \vec{b}, \vec{c}) = (\vec{a} \times \vec{b}) \cdot \vec{c}$:
$$
(\vec{a}, \vec{b}, \vec{c}) = (-12)(7) + (-24)(2) + 8(-9) = -84 - 48 - 72 = -204
$$
Hajm:
$$
V = \frac{1}{6} | -204 | = \frac{204}{6} = 34
$$

5-qadam: $A_4$ uchidan tushirilgan balandlik $h$:
$$
h = \frac{3V}{S_{\text{asos}}} = \frac{3 \cdot 34}{14} = \frac{102}{14} = \frac{51}{7} \approx 7.286
$$

**Javob:** $|A_1 A_2| = \sqrt{17}, \quad S_{\text{asos}} = 14, \quad V = 34, \quad h = \frac{51}{7}$.

---

### 3-misol: Asos tekisligi va balandlik to'g'ri chizig'i tenglamalari
**Shart:** 2-misoldagi tetraedr uchun:
1) $A_1 A_2 A_3$ asos tekisligi tenglamasini;
2) $A_4$ uchidan tushirilgan balandlik to'g'ri chizig'ining kanonik tenglamasini tuzing.

**Yechish:**
1-qadam: Asos tekisligi tenglamasi:
Biz 2-misolda asosning normal vektorini topgan edik: $\vec{n}_1 = (-12, -24, 8)$.  
Hisoblashlarni ixchamlashtirish uchun ushbu vektorni $-4$ ga bo'lib olamiz:
$$
\vec{n}_0 = (3, 6, -2)
$$
Tekislik $A_1(1, 2, 0)$ nuqtadan o'tadi:
$$
3(x - 1) + 6(y - 2) - 2(z - 0) = 0
$$
$$
3x - 3 + 6y - 12 - 2z = 0 \implies 3x + 6y - 2z - 15 = 0
$$

2-qadam: Balandlik to'g'ri chizig'i tenglamasi:
Balandlik $A_4(8, 4, -9)$ nuqtadan o'tadi va uning yo'naltiruvchi vektori asos tekisligining normal vektori $\vec{n}_0 = (3, 6, -2)$ ga parallel:
$$
\frac{x - 8}{3} = \frac{y - 4}{6} = \frac{z + 9}{-2}
$$

**Javob:**  
Asos tekisligi: $3x + 6y - 2z - 15 = 0$.  
Balandlik chizig'i: $\frac{x - 8}{3} = \frac{y - 4}{6} = \frac{z + 9}{-2}$.

---

### 4-misol: Tetraedr yoqlari orasidagi ikki yoqli burchak
**Shart:** 2-misoldagi tetraedrning $A_1 A_2 A_3$ yoqi va $A_1 A_2 A_4$ yoqi orasidagi burchak kosinusini toping.

**Yechish:**
1-qadam: Har ikki yoqning normal vektorlarini aniqlaymiz:
- $A_1 A_2 A_3$ yoqining normali: $\vec{n}_1 = (3, 6, -2)$.  
  Moduli: $|\vec{n}_1| = \sqrt{3^2 + 6^2 + (-2)^2} = \sqrt{9 + 36 + 4} = \sqrt{49} = 7$.
- $A_1 A_2 A_4$ yoqining normali $\vec{n}_2 = \vec{a} \times \vec{c}$:
  $\vec{a} = (2, -2, -3)$ va $\vec{c} = (7, 2, -9)$.
  $$
  \vec{n}_2 = \begin{vmatrix} \vec{i} & \vec{j} & \vec{k} \\ 2 & -2 & -3 \\ 7 & 2 & -9 \end{vmatrix} = \vec{i}(18 - (-6)) - \vec{j}(-18 - (-21)) + \vec{k}(4 - (-14))
  $$
  $$
  = 24\vec{i} - 3\vec{j} + 18\vec{k} = (24, -3, 18)
  $$
  3 ga bo'lib ixchamlashtiramiz: $\vec{n}_2' = (8, -1, 6)$.  
  Moduli: $|\vec{n}_2'| = \sqrt{8^2 + (-1)^2 + 6^2} = \sqrt{64 + 1 + 36} = \sqrt{101}$.

2-qadam: Ikki normal orasidagi burchak kosinusini topamiz:
$$
\cos \phi = \frac{|\vec{n}_1 \cdot \vec{n}_2'|}{|\vec{n}_1| |\vec{n}_2'|} = \frac{|3(8) + 6(-1) + (-2)(6)|}{7 \cdot \sqrt{101}} = \frac{|24 - 6 - 12|}{7\sqrt{101}} = \frac{6}{7\sqrt{101}}
$$
**Javob:** $\cos \phi = \frac{6}{7\sqrt{101}} \approx 0.0853$.

---

## ⚠️ Talabalar Eng Ko'p Yo'l Qo'yadigan Xatolar va Tuzoqlar

1. **Hajm formulasida koeffitsiyentni unutish ($\frac{1}{6}$ o'rniga $\frac{1}{3}$ yoki $1$):**
   Aralash ko'paytma moduli parallelepiped hajmini beradi. Uchburchakli piramida (tetraedr) hajmi esa parallelepiped hajmining $\frac{1}{6}$ qismidir! Ko'p talabalar oddiy piramida formulasidagi $\frac{1}{3}$ bilan aralashtirib, $\frac{1}{3}$ ga bo'lib qo'yishadi.

2. **Balandlik formulasida 3 koeffitsiyentini tashlab ketish:**
   $V = \frac{1}{3} S h \implies h = \frac{3V}{S}$. Talabalar shoshilib $h = \frac{V}{S}$ deb hisoblashadi va natijada balandlik 3 barobar kichik chiqadi.

3. **Kesmani bo'lish nisbatini adashtirish:**
   $\lambda = \frac{|\vec{AM}|}{|\vec{MB}|}$ nisbat berilganda, ayrimlar uni $\frac{|\vec{AM}|}{|\vec{AB}|}$ bilan adashtiradilar. Agar $M$ nuqta kesmani $2:3$ nisbatda bo'lsa, demak $\lambda = \frac{2}{3}$. Lekin $AM$ kesma butun $AB$ ning $\frac{2}{5}$ qismini tashkil qiladi!

4. **Yoqlar burchagida o'tmas burchak qoldirish:**
   Geometriyada ikki tekislik orasidagi burchak qoidaga ko'ra o'tkir burchak ($0 \le \phi \le 90^\circ$) hisoblanadi. Shuning uchun skalyar ko'paytma manfiy chiqsa ham, burchak kosinusiga modul qo'yilishi shart: $\cos \phi = \frac{|\vec{n}_1 \cdot \vec{n}_2|}{|\vec{n}_1| |\vec{n}_2|}$.

---

## 🎯 Mustaqil Yechish Uchun Amaliy Mashqlar va Yechimlar

### 1-mashq
$A(-2, 4, 1)$ va $B(8, -6, 11)$ nuqtalar berilgan. $AB$ kesma o'rtasi bo'lgan $C$ nuqtaning koordinatalarini toping.

<details>
<summary>To'liq yechimi va javobi</summary>

**Yechish:**
Kesma o'rtasi formulasi:
$$
x_C = \frac{x_A + x_B}{2} = \frac{-2 + 8}{2} = \frac{6}{2} = 3
$$
$$
y_C = \frac{y_A + y_B}{2} = \frac{4 + (-6)}{2} = \frac{-2}{2} = -1
$$
$$
z_C = \frac{z_A + z_B}{2} = \frac{1 + 11}{2} = \frac{12}{2} = 6
$$
**Javob:** $C(3, -1, 6)$.
</details>

---

### 2-mashq
Uchlari $A_1(0, 0, 0)$, $A_2(2, 0, 0)$, $A_3(0, 3, 0)$ va $A_4(0, 0, 4)$ bo'lgan tetraedr hajmini hisoblang.

<details>
<summary>To'liq yechimi va javobi</summary>

**Yechish:**
Koordinata boshidan chiquvchi vektorlar koordinata o'qlari bo'ylab yo'nalgan:
$$
\vec{a} = (2, 0, 0), \quad \vec{b} = (0, 3, 0), \quad \vec{c} = (0, 0, 4)
$$
Aralash ko'paytma:
$$
(\vec{a}, \vec{b}, \vec{c}) = \begin{vmatrix} 2 & 0 & 0 \\ 0 & 3 & 0 \\ 0 & 0 & 4 \end{vmatrix} = 2 \cdot 3 \cdot 4 = 24
$$
Tetraedr hajmi:
$$
V = \frac{1}{6} |24| = 4
$$
*(Geometrik tekshirish: $V = \frac{1}{3} S_{\text{asos}} h = \frac{1}{3} \cdot \left(\frac{1}{2} \cdot 2 \cdot 3\right) \cdot 4 = \frac{1}{3} \cdot 3 \cdot 4 = 4$.)*

**Javob:** $V = 4$.
</details>

---

### 3-mashq
Uchlari $A_1(1, 1, 1)$, $A_2(2, 3, 1)$, $A_3(1, 2, 3)$ va $A_4(2, 4, 3)$ bo'lgan to'rtta nuqta bitta tekislikda yotadimi (komplanarmi)?

<details>
<summary>To'liq yechimi va javobi</summary>

**Yechish:**
Vektorlarni tuzamiz:
$$
\vec{a} = \vec{A_1 A_2} = (2-1, 3-1, 1-1) = (1, 2, 0)
$$
$$
\vec{b} = \vec{A_1 A_3} = (1-1, 2-1, 3-1) = (0, 1, 2)
$$
$$
\vec{c} = \vec{A_1 A_4} = (2-1, 4-1, 3-1) = (1, 3, 2)
$$
Aralash ko'paytmani hisoblaymiz:
$$
(\vec{a}, \vec{b}, \vec{c}) = \begin{vmatrix} 1 & 2 & 0 \\ 0 & 1 & 2 \\ 1 & 3 & 2 \end{vmatrix}
$$
1-satr bo'yicha yoyamiz:
$$
= 1(1 \cdot 2 - 2 \cdot 3) - 2(0 \cdot 2 - 2 \cdot 1) + 0 = 1(2 - 6) - 2(0 - 2) = -4 + 4 = 0
$$
Aralash ko'paytma 0 ga teng bo'lgani uchun hosil bo'lgan jism hajmi $V = 0$. Demak, to'rtta nuqta **bitta tekislikda yotadi (komplanar)** va ular tetraedr hosil qilmaydi!

**Javob:** Ha, bitta tekislikda yotadi.
</details>

---

## 💡 Imtihon Layfhaklari va Tezkor Maslahatlar

1. **Koordinata boshini ko'chirish hiylasi:**
   Agar $A_1$ nuqta $(0,0,0)$ bo'lmasa, hisoblashlarni yengillashtirish uchun barcha nuqtalardan $A_1$ ning koordinatalarini ayirib chiqing. Hosil bo'lgan vektorlar to'g'ridan-to'g'ri yangi uchlarga aylanadi va determinantni hisoblash 2 barobar osonlashadi.

2. **Komplanarlikni tekshirish — birinchi qadam:**
   Tetraedr masalasini yechishda har doim birinchi bo'lib aralash ko'paytma $(\vec{a}, \vec{b}, \vec{c})$ ni hisoblang. Agar u 0 chiqsa, keyingi 5 ta savolni hisoblab o'tirishga hojat yo'q — darhol "Nuqtalar bitta tekislikda yotadi, tetraedr mavjud emas" deb yozasiz!

3. **Balandlikni tekshirishning muqobil usuli:**
   Agar siz $A_1 A_2 A_3$ tekislik tenglamasini topgan bo'lsangiz, $A_4$ nuqtadan tekislikkacha masofa formulasi:
   $$
   d = \frac{|A x_4 + B y_4 + C z_4 + D|}{\sqrt{A^2 + B^2 + C^2}}
   $$
   orqali balandlik $h$ ni hisoblab ko'ring. Bu qiymat $h = \frac{3V}{S}$ natijasi bilan bir xil chiqishi shart!
