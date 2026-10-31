---
title: "Ostrogradskiy usuli: Maxraji karrali ildizli ratsional kasrlarni integrallash"
description: "Karrali qutbli kasrlarni differensiallash orqali algebraik va logarifmik qismlarga ajratish formulasi."
module: "integrallar"
order: 15
---

## 📌 Kirish va Usulning Matematik Mohiyati

Ratsional funksiyalarni integrallashda eng ko'p mehnat talab qiladigan holat — maxrajning karrali ildizlarga (ayniqsa, karrali kvadratik uchhadlarga $(x^2 + p x + q)^k$, $k \ge 2$) ega bo'lishidir. Standart noaniq koeffitsiyentlar usuli bunday kasrlarni quyidagi ko'rinishdagi ko'p bosqichli elementar kasrlarga ajratishni talab qiladi:

$$
\frac{M_1 x + N_1}{(x^2 + px + q)^k} + \frac{M_2 x + N_2}{(x^2 + px + q)^{k-1}} + \dots + \frac{M_k x + N_k}{x^2 + px + q}
$$

Bunda har bir kasrni alohida integrallash uchun murakkab rekurrent formulalarni (kamaytirish formulalarini) bir necha bor qo'llashga to'g'ri keladi.

Buyuk rus va ukrain matematigi **Mixail Vasilevich Ostrogradskiy** (1801–1862) bu muammoni chetlab o'tishning hayratlanarli darajada sodda va nafis usulini yaratdi. Ostrogradskiy usulining asosiy afzalligi shundaki, u integrallash amalini bajarmasdan, shunchaki **differensiallash va chiziqli tenglamalar sistemasini yechish orqali** integralning algebraik (ratsional) qismini logarifmik qismidan to'liq ajratib olish imkonini beradi.

---

## 📐 Asosiy Nazariya: Ostrogradskiy Formulasi

Faraz qilaylik, to'g'ri ratsional kasr berilgan bo'lsin:
$$
\int \frac{P(x)}{Q(x)} \, dx
$$
bu yerda $\deg(P) < \deg(Q)$ va $Q(x)$ karrali ildizlarga ega.

### 1. Maxrajlarni ajratish qoidasi:
1. $Q(x)$ va uning hosilasi $Q'(x)$ ko'phadlarining eng katta umumiy bo'luvchisini topamiz:
   $$
   Q_1(x) = \text{EKUB}\left(Q(x), Q'(x)\right)
   $$
   $Q_1(x)$ ko'phadi $Q(x)$ ning barcha karrali ko'paytuvchilarini darajasi 1 ga kamaytirilgan shaklda o'zida jamlaydi.
2. Ikkinchi maxrajni topamiz:
   $$
   Q_2(x) = \frac{Q(x)}{Q_1(x)}
   $$
   $Q_2(x)$ ko'phadi faqat va faqat $Q(x)$ ning tub ko'paytuvchilarining 1-darajalaridan iborat bo'ladi (ya'ni karrali ildizlarga ega emas).

### 2. Ostrogradskiy formulasi:
Integral quyidagi ko'rinishda qismlarga ajraladi:
$$
\int \frac{P(x)}{Q(x)} \, dx = \frac{P_1(x)}{Q_1(x)} + \int \frac{P_2(x)}{Q_2(x)} \, dx
$$

Bu yerda:
- $\frac{P_1(x)}{Q_1(x)}$ — integralning **algebraik (ratsional) qismi**;
- $\int \frac{P_2(x)}{Q_2(x)} \, dx$ — integralning **transsendent (logarifmik va arktangensli) qismi**;
- $P_1(x)$ va $P_2(x)$ — noaniq koeffitsiyentli ko'phadlar bo'lib, ularning darajalari mos ravishda maxrajlar darajasidan bir birlik kichik:
  $$
  \deg(P_1) = \deg(Q_1) - 1, \qquad \deg(P_2) = \deg(Q_2) - 1
  $$

### 3. Koeffitsiyentlarni aniqlash:
Ostrogradskiy formulasining ikkala tomonini $x$ bo'yicha differensiallaymiz:
$$
\frac{P(x)}{Q(x)} = \left(\frac{P_1(x)}{Q_1(x)}\right)' + \frac{P_2(x)}{Q_2(x)} = \frac{P_1'(x) Q_1(x) - P_1(x) Q_1'(x)}{Q_1^2(x)} + \frac{P_2(x)}{Q_2(x)}
$$
Ikkala tomonni umumiy maxraj $Q(x) = Q_1(x) \cdot Q_2(x)$ ga ko'paytiramiz:
$$
P(x) = P_1'(x) Q_2(x) - P_1(x) \frac{Q_1'(x) Q_2(x)}{Q_1(x)} + P_2(x) Q_1(x)
$$
Hosil bo'lgan algebraik ayniyatda bir xil darajali $x$ lar oldidagi koeffitsiyentlarni tenglashtirib, chiziqli tenglamalar sistemasidan barcha noaniq koeffitsiyentlar bir martada topiladi.

---

## 📝 Qadamma-qadam Yechilgan Amaliy Misollar

### 1-misol:
Ushbu klassik integralni Ostrogradskiy usuli bilan hisoblang:
$$
I_1 = \int \frac{dx}{(x^2 + 1)^2}
$$

**Yechilishi:**
1. Maxraj: $Q(x) = (x^2 + 1)^2$. Uning hosilasi: $Q'(x) = 4x(x^2 + 1)$.
2. EKUBni aniqlaymiz:
   $$
   Q_1(x) = \text{EKUB}\left((x^2+1)^2, 4x(x^2+1)\right) = x^2 + 1
   $$
   U holda:
   $$
   Q_2(x) = \frac{Q(x)}{Q_1(x)} = \frac{(x^2+1)^2}{x^2+1} = x^2 + 1
   $$
3. Noaniq ko'phadlar: $\deg(Q_1) = 2 \implies P_1(x) = Ax + B$; $\deg(Q_2) = 2 \implies P_2(x) = Cx + D$.
4. Ostrogradskiy formulasini tuzamiz:
   $$
   \int \frac{dx}{(x^2+1)^2} = \frac{Ax+B}{x^2+1} + \int \frac{Cx+D}{x^2+1} \, dx
   $$
5. Differensiallaymiz:
   $$
   \frac{1}{(x^2+1)^2} = \frac{A(x^2+1) - (Ax+B)\cdot 2x}{(x^2+1)^2} + \frac{Cx+D}{x^2+1}
   $$
6. Ikkala tomonni $(x^2+1)^2$ ga ko'paytiramiz:
   $$
   1 = A(x^2+1) - 2x(Ax+B) + (Cx+D)(x^2+1)
   $$
   $$
   1 = -Ax^2 - 2Bx + A + Cx^3 + Dx^2 + Cx + D
   $$
   $$
   1 = C x^3 + (D - A) x^2 + (C - 2B) x + (A + D)
   $$
7. Mos koeffitsiyentlarni tenglashtiramiz:
   - $x^3$: $C = 0$
   - $x^2$: $D - A = 0 \implies D = A$
   - $x^1$: $C - 2B = 0 \implies B = 0$
   - $x^0$: $A + D = 1 \implies 2A = 1 \implies A = \frac{1}{2}, \quad D = \frac{1}{2}$
8. Natijani yozamiz:
   $$
   I_1 = \frac{\frac{1}{2}x}{x^2+1} + \int \frac{\frac{1}{2}}{x^2+1} \, dx = \frac{x}{2(x^2+1)} + \frac{1}{2}\operatorname{arctg} x + C
   $$

---

### 2-misol:
Ushbu integralni hisoblang:
$$
I_2 = \int \frac{x^2}{(x^2 + 2x + 2)^2} \, dx
$$

**Yechilishi:**
1. $Q(x) = (x^2+2x+2)^2$. Ildizlari kompleks karrali bo'lgani uchun:
   $$
   Q_1(x) = x^2+2x+2, \qquad Q_2(x) = x^2+2x+2
   $$
2. $P_1(x) = Ax + B, \quad P_2(x) = Cx + D$.
3. Differensiallangan tenglik:
   $$
   x^2 = \left[A(x^2+2x+2) - (Ax+B)(2x+2)\right] + (Cx+D)(x^2+2x+2)
   $$
4. Qavslarni ochib, darajalar bo'yicha guruhlaymiz:
   $$
   x^2 = C x^3 + (D - A + 2C) x^2 + (2D - 2B + 2C) x + (2A - 2B + 2D)
   $$
5. Sistemani tuzamiz:
   - $x^3$: $C = 0$
   - $x^2$: $D - A = 1$
   - $x^1$: $2D - 2B = 0 \implies D = B$
   - $x^0$: $2A - 2B + 2D = 0 \implies A = 0$
   Demak: $A = 0, D = 1, B = 1, C = 0$.
6. Integralga qo'yamiz:
   $$
   I_2 = \frac{1}{x^2+2x+2} + \int \frac{dx}{x^2+2x+2} = \frac{1}{x^2+2x+2} + \int \frac{dx}{(x+1)^2 + 1}
   $$
   $$
   I_2 = \frac{1}{x^2+2x+2} + \operatorname{arctg}(x+1) + C
   $$

---

### 3-misol:
Ushbu integralni hisoblang:
$$
I_3 = \int \frac{dx}{(x^4 - 1)^2}
$$

**Yechilishi:**
1. Maxraj: $Q(x) = (x-1)^2(x+1)^2(x^2+1)^2$.
2. Hosila bilan umumiy bo'luvchi karrali darajalarni 1 taga kamaytiradi:
   $$
   Q_1(x) = (x-1)(x+1)(x^2+1) = x^4 - 1
   $$
   $$
   Q_2(x) = \frac{Q(x)}{Q_1(x)} = x^4 - 1
   $$
3. $P_1(x) = Ax^3 + Bx^2 + Cx + D$, $P_2(x) = Ex^3 + Fx^2 + Gx + H$.
4. Ostrogradskiy ayniyati:
   $$
   1 = (3Ax^2 + 2Bx + C)(x^4-1) - (Ax^3 + Bx^2 + Cx + D)(4x^3) + P_2(x)(x^4-1)
   $$
5. Ayniyatda mos darajalar oldidagi koeffitsiyentlarni tenglashtirib:
   $A = 0, B = 0, C = -\frac{1}{4}, D = 0$ hamda $E = 0, F = 0, G = 0, H = -\frac{3}{4}$ ni topamiz. Demak, $P_1(x) = -\frac{1}{4}x$ va $P_2(x) = -\frac{3}{4}$.
6. Natijada algebraik qism darhol ajraladi:
   $$
   I_3 = -\frac{x}{4(x^4-1)} - \frac{3}{4} \int \frac{dx}{x^4 - 1}
   $$
   Ikkinchi integral esa bir karrali bo'lib, standart logarifmik va arktangens qismlarga oson ajraladi:
   $$
   \int \frac{dx}{x^4-1} = \frac{1}{4}\ln\left|\frac{x-1}{x+1}\right| - \frac{1}{2}\operatorname{arctg} x
   $$
   Shunday qilib, to'liq javob:
   $$
   I_3 = -\frac{x}{4(x^4-1)} - \frac{3}{16}\ln\left|\frac{x-1}{x+1}\right| + \frac{3}{8}\operatorname{arctg} x + C
   $$

---

## ⚠️ Talabalar Ko'p Yo'l Qo'yadigan Xatolar

1. **Noto'g'ri darajali ko'phad tanlash:**
   Agar $\deg(Q_1) = 3$ bo'lsa, $P_1(x) = Ax^2 + Bx + C$ olinishi shart. Hadlardan birini (masalan, $C$ ozod sonni) tashlab ketish butun tenglamalar sistemasini ziddiyatli holatga olib keladi.
2. **Kasr hosilasini olishda maxraj hosilasining ishorasini adashtirish:**
   $\left(\frac{P_1}{Q_1}\right)' = \frac{P_1' Q_1 - P_1 Q_1'}{Q_1^2}$. Talabalar ko'pincha minus o'rniga plyus qo'yishadi yoki $Q_1'$ ni hisoblashda zanjir qoidasini unutishadi.
3. **Usulni karrali bo'lmagan kasrlarga qo'llash:**
   Agar $Q(x)$ ning barcha ildizlari oddiy (1 karrali) bo'lsa, $Q_1(x) = 1$ bo'ladi va Ostrogradskiy usuli hech qanday algebraik qism bermaydi. Usul faqat karrali ildizlar mavjud bo'lganda samarali.

---

## 🎯 Mustaqil Yechish Uchun Masalalar

1. Ostrogradskiy usuli bilan hisoblang: $\int \frac{dx}{(x^2 + 4)^2}$.
2. Integralning algebraik qismini ajrating: $\int \frac{x}{(x-1)^2(x+1)} \, dx$.
3. Hisoblang: $\int \frac{x^2 - 1}{(x^2 + 1)^2} \, dx$.

<details style="margin-top: 1rem; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); cursor: pointer;">
<summary style="font-weight: 700; color: var(--primary);">Javoblar va Ko'rsatmalar</summary>

**1-masala:** $Q_1 = x^2+4, Q_2 = x^2+4$. $P_1 = Ax+B, P_2 = Cx+D$.
Javob: $\frac{x}{8(x^2+4)} + \frac{1}{16}\operatorname{arctg}\frac{x}{2} + C$.

**2-masala:** $Q_1 = x-1, Q_2 = (x-1)(x+1) = x^2-1$. $P_1 = A, P_2 = Bx+C$.
Javob: $-\frac{1}{2(x-1)} + \frac{1}{4}\ln\left|\frac{x-1}{x+1}\right| + C$.

**3-masala:** $Q_1 = x^2+1, Q_2 = x^2+1$. $P_1 = Ax+B, P_2 = Cx+D$. Bunda $P_2(x) = 0$ chiqadi (logarifmik qism umuman yo'q!).
Javob: $-\frac{x}{x^2+1} + C$.

</details>

---

## 💡 Xulosa va Imtihon Maslahatlari

- Ostrogradskiy usuli murakkab karrali integrallarni "differensiallash" orqali hisoblash san'atidir.
- Agar masalada integralning to'liq qiymati emas, balki faqat **ratsional (algebraik) qismini** topish so'ralsa, bu usul tengsizdir: siz ikkinchi integralni umuman hisoblamasdan darhol javobni yozasiz.
- Tekshirishning eng oson yo'li: topilgan $\frac{P_1(x)}{Q_1(x)}$ qismidan hosila olib, dastlabki integral ostidagi funksiyaning bosh hadlariga solishtirishdir.
