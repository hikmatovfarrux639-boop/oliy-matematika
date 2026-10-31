---
title: "Fazoda va tekislikda masofalar: Nuqtadan to'g'ri chiziqqacha, tekislikkacha va ayqash to'g'ri chiziqlar orasidagi masofa"
module: "vektorlar-geometriya"
order: 13
description: "Analitik geometriyada masofalar va metrik masalalar: Nuqtadan to'g'ri chiziqqacha masofa (2D va 3D), nuqtadan tekislikkacha masofa, parallel tekisliklar orasidagi masofa, ayqash to'g'ri chiziqlar orasidagi eng qisqa masofa va nuqtaning proyeksiyasi."
---

## Kirish: Analitik geometriyadagi eng muhim amaliy masalalar

Analitik geometriya va chiziqli algebraning eng amaliy qismi bu fazoviy jismlar orasidagi masofalarni, burchaklarni va proyeksiyalarni hisoblashdir. Ushbu masalalar arxitektura, robototexnika, 3D kompyuter grafikasi (GameDev), sun'iy yo'ldosh navigatsiyasi (GPS) va avtomatlashtirilgan loyihalash tizimlarida (AutoCAD) har soniyada millionlab marta hisoblanadi.

Universitet imtihonlarida talabalar ko'pincha tekislikdagi oddiy formulalarni bilishadi, lekin fazoda **nuqtadan to'g'ri chiziqqacha** yoki **ikkita ayqash to'g'ri chiziq orasidagi** masofani hisoblashda vektor amallarini qo'llashda adashadilar.

Ushbu darsda **Mathprofi** standarti bo'yicha barcha masofa formulalarini va ularning vektor mohiyatini tahlil qilamiz.

---

## 1. Asosiy masofa formulalari xaritasi

| Masala turi | Fazoviy obyektlar | Hisoblash formulasi ($d$) |
| :--- | :--- | :--- |
| **1. Tekislikda: Nuqtadan to'g'ri chiziqqacha** | $M_0(x_0, y_0)$ va $Ax + By + C = 0$ | $$d = \frac{|Ax_0 + By_0 + C|}{\sqrt{A^2 + B^2}}$$ |
| **2. Fazoda: Nuqtadan tekislikkacha** | $M_0(x_0, y_0, z_0)$ va $Ax + By + Cz + D = 0$ | $$d = \frac{|Ax_0 + By_0 + Cz_0 + D|}{\sqrt{A^2 + B^2 + C^2}}$$ |
| **3. Fazoda: Parallel tekisliklar orasida** | $Ax + By + Cz + D_1 = 0$ va $Ax + By + Cz + D_2 = 0$ | $$d = \frac{|D_1 - D_2|}{\sqrt{A^2 + B^2 + C^2}}$$ |
| **4. Fazoda: Nuqtadan to'g'ri chiziqqacha** | $M_0$ nuqta va to'g'ri chiziq ($M_1 \in L, \vec{s}$ yo'naltiruvchi) | $$d = \frac{|\vec{M_1 M_0} \times \vec{s}|}{|\vec{s}|}$$ |
| **5. Fazoda: Ayqash to'g'ri chiziqlar orasida** | $L_1(M_1, \vec{s}_1)$ va $L_2(M_2, \vec{s}_2)$ | $$d = \frac{|(\vec{s}_1 \times \vec{s}_2) \cdot \vec{M_1 M_2}|}{|\vec{s}_1 \times \vec{s}_2|}$$ |

---

## 2. Formulalarning geometrik va vektor mohiyati

### A. Nuqtadan to'g'ri chiziqqacha masofa (Fazoda):
Fazodagi to'g'ri chiziq $L$ bitta tayanch nuqtasi $M_1$ va yo'naltiruvchi vektori $\vec{s}$ bilan berilgan bo'lsin.
$M_1$ nuqta, $\vec{s}$ vektori va $M_0$ nuqtani tutashtiruvchi $\vec{M_1 M_0}$ vektor parallelogramm hosil qiladi.
- Bu parallelogrammning yuzi vektor ko'paytma uzunligiga teng: $S = |\vec{M_1 M_0} \times \vec{s}|$.
- Boshqa tomondan, parallelogramm yuzi asos ko'paytirilgan balandlikdir: $S = |\vec{s}| \cdot d$.
- Demak, balandlik (ya'ni biz qidirayotgan eng qisqa masofa $d$):
  $$d = \frac{S}{|\vec{s}|} = \frac{|\vec{M_1 M_0} \times \vec{s}|}{|\vec{s}|}$$

### B. Ayqash to'g'ri chiziqlar orasidagi masofa:
Ikki ayqash to'g'ri chiziq $L_1$ va $L_2$ kesishmaydi va parallel ham emas.
$\vec{s}_1, \vec{s}_2$ va $\vec{M_1 M_2}$ vektorlari asosida fazoviy **parallelepiped** quramiz:
- Parallelepiped hajmi vektorlarning **aralash ko'paytmasining moduliga** teng:
  $$V = |(\vec{s}_1 \times \vec{s}_2) \cdot \vec{M_1 M_2}|$$
- Asosining yuzi: $S_{\text{asos}} = |\vec{s}_1 \times \vec{s}_2|$.
- Ayqash chiziqlar orasidagi masofa — bu ushbu parallelepipedning balandligidir ($V = S_{\text{asos}} \cdot h$):
  $$d = \frac{V}{S_{\text{asos}}} = \frac{|(\vec{s}_1 \times \vec{s}_2) \cdot \vec{M_1 M_2}|}{|\vec{s}_1 \times \vec{s}_2|}$$

---

## 3. To'liq yechilgan namunaviy misollar

### 1-Misol (Nuqtadan tekislikkacha masofa):
$M_0(2, -1, 3)$ nuqtadan $2x - y + 2z - 1 = 0$ tekislikkacha bo'lgan masofani toping.

**Yechish:**
1. Tekislik koeffitsiyentlari: $A = 2, B = -1, C = 2, D = -1$.
2. Nuqta koordinatalari: $x_0 = 2, y_0 = -1, z_0 = 3$.
3. Suratni hisoblaymiz:
   $$|Ax_0 + By_0 + Cz_0 + D| = |2(2) + (-1)(-1) + 2(3) - 1| = |4 + 1 + 6 - 1| = |10| = 10$$
4. Maxrajni hisoblaymiz (normal vektor uzunligi):
   $$\sqrt{A^2 + B^2 + C^2} = \sqrt{2^2 + (-1)^2 + 2^2} = \sqrt{4 + 1 + 4} = \sqrt{9} = 3$$
5. Masofani topamiz:
   $$d = \frac{10}{3} = 3\frac{1}{3}$$

---

### 2-Misol (Fazoda nuqtadan to'g'ri chiziqqacha masofa):
$M_0(1, 2, -1)$ nuqtadan quyidagi kanonik to'g'ri chiziqqacha bo'lgan masofani hisoblang:
$$\frac{x - 2}{1} = \frac{y + 1}{2} = \frac{z - 3}{-2}$$

**Yechish:**
1. To'g'ri chiziqdan tayanch nuqta va yo'naltiruvchi vektorni ajratamiz:
   $$M_1(2, -1, 3), \quad \vec{s} = (1, 2, -2)$$
2. $\vec{M_1 M_0}$ vektorini topamiz:
   $$\vec{M_1 M_0} = (1 - 2, 2 - (-1), -1 - 3) = (-1, 3, -4)$$
3. Vektor ko'paytmani determinant orqali hisoblaymiz:
   $$\vec{M_1 M_0} \times \vec{s} = \begin{vmatrix} \vec{i} & \vec{j} & \vec{k} \\ -1 & 3 & -4 \\ 1 & 2 & -2 \end{vmatrix}$$
   $$= \vec{i}(-6 - (-8)) - \vec{j}(2 - (-4)) + \vec{k}(-2 - 3) = 2\vec{i} - 6\vec{j} - 5\vec{k} = (2, -6, -5)$$
4. Vektor ko'paytma uzunligini topamiz:
   $$|\vec{M_1 M_0} \times \vec{s}| = \sqrt{2^2 + (-6)^2 + (-5)^2} = \sqrt{4 + 36 + 25} = \sqrt{65}$$
5. Yo'naltiruvchi vektor uzunligini topamiz:
   $$|\vec{s}| = \sqrt{1^2 + 2^2 + (-2)^2} = \sqrt{1 + 4 + 4} = \sqrt{9} = 3$$
6. Masofa:
   $$d = \frac{\sqrt{65}}{3} \approx 2.69$$

---

### 3-Misol (Ayqash to'g'ri chiziqlar orasidagi masofa):
Quyidagi ikki to'g'ri chiziq orasidagi eng qisqa masofani toping:
$$L_1: \frac{x - 1}{2} = \frac{y + 2}{3} = \frac{z}{1}, \quad L_2: \frac{x + 2}{1} = \frac{y - 1}{1} = \frac{z - 1}{2}$$

**Yechish:**
1. Har ikkala to'g'ri chiziqning parametrlari:
   - $L_1$: $M_1(1, -2, 0), \quad \vec{s}_1 = (2, 3, 1)$
   - $L_2$: $M_2(-2, 1, 1), \quad \vec{s}_2 = (1, 1, 2)$
2. Chiziqlarni tutashtiruvchi vektor:
   $$\vec{M_1 M_2} = (-2 - 1, 1 - (-2), 1 - 0) = (-3, 3, 1)$$
3. Vektor ko'paytma $\vec{s}_1 \times \vec{s}_2$:
   $$\vec{s}_1 \times \vec{s}_2 = \begin{vmatrix} \vec{i} & \vec{j} & \vec{k} \\ 2 & 3 & 1 \\ 1 & 1 & 2 \end{vmatrix} = \vec{i}(6 - 1) - \vec{j}(4 - 1) + \vec{k}(2 - 3) = (5, -3, -1)$$
4. Uning uzunligi (asos yuzi):
   $$|\vec{s}_1 \times \vec{s}_2| = \sqrt{5^2 + (-3)^2 + (-1)^2} = \sqrt{25 + 9 + 1} = \sqrt{35}$$
5. Aralash ko'paytma (skalyar ko'paytirish orqali):
   $$(\vec{s}_1 \times \vec{s}_2) \cdot \vec{M_1 M_2} = 5(-3) + (-3)(3) + (-1)(1) = -15 - 9 - 1 = -25$$
   Moduli: $|-25| = 25$.
6. Eng qisqa masofa:
   $$d = \frac{25}{\sqrt{35}} = \frac{25\sqrt{35}}{35} = \frac{5\sqrt{35}}{7} \approx 4.23$$

---

## 4. Nuqtaning tekislikdagi proyeksiyasi va simmetrik nuqtani topish

$M_0(x_0, y_0, z_0)$ nuqtaning $Ax + By + Cz + D = 0$ tekislikdagi $P$ proyeksiyasini topish uchun:
1. $M_0$ nuqtadan o'tuvchi va tekislikka perpendikulyar bo'lgan to'g'ri chiziq parametrik tenglamasi tuziladi:
   $$x = x_0 + At, \quad y = y_0 + Bt, \quad z = z_0 + Ct$$
2. Ushbu ifodalar tekislik tenglamasiga qo'yilib, parametr $t_0$ topiladi:
   $$t_0 = -\frac{Ax_0 + By_0 + Cz_0 + D}{A^2 + B^2 + C^2}$$
3. $t_0$ parametr $P$ proyeksiyaning koordinatalarini beradi.
4. $M_0$ ga nisbatan **simmetrik $M'$ nuqta** esa $2t_0$ parametr qiymatida hosil bo'ladi!

---

## ⚠️ Talabalar eng ko'p yo'l qo'yadigan xatolar va tuzoqlar

1. **Suratdagi modul belgisini unutish:**
   Masofa doimo musbat son ($d \ge 0$) bo'lishi shart! Agar $|Ax_0 + By_0 + Cz_0 + D|$ dagi modul unutilsa, manfiy masofa chiqib qoladi.
2. **Kanonik tenglamada ishoralarni adashtirish:**
   $\frac{x - x_0}{m}$ da nuqta koordinatasi $x_0$ bo'ladi. Masalan, $\frac{y + 2}{3}$ bo'lsa, nuqta koordinatasi $+2$ emas, **$-2$** bo'ladi!
3. **Ayqash va kesishuvchi to'g'ri chiziqlarni tekshirmaslik:**
   Agar aralash ko'paytma nol chiqsa ($d = 0$), to'g'ri chiziqlar bitta tekislikda yotadi (kesishadi yoki paralleldir).

---

## ✏️ Mustaqil yechish uchun amaliy mashqlar va javoblar

1. $M(1, 2)$ nuqtadan $3x + 4y - 1 = 0$ to'g'ri chiziqqacha masofani toping.
   *Javob:* $d = \frac{|3(1) + 4(2) - 1|}{\sqrt{3^2 + 4^2}} = \frac{10}{5} = 2$.
2. $2x - 2y + z - 3 = 0$ va $2x - 2y + z + 6 = 0$ parallel tekisliklar orasidagi masofani hisoblang.
   *Javob:* $d = \frac{|-3 - 6|}{\sqrt{4 + 4 + 1}} = \frac{9}{3} = 3$.
3. Koordinatalar boshidan $x + 2y - 2z - 6 = 0$ tekislikkacha masofani toping.
   *Javob:* $d = \frac{|-6|}{\sqrt{1 + 4 + 4}} = \frac{6}{3} = 2$.
