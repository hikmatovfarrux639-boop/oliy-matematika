---
title: "Fazoviy egri chiziqlar: Vektor-funksiya hosilasi va Frenet-Serret formulalari"
description: "Harakat trayektoriyasi, tezlik va tezlanish vektorlari, tabiiy triadr (urinma, normal, binormal) va Frenet-Serret differensial qoidalari."
module: "hosila"
order: 13
---

## 📌 Kirish va Geometrik/Fizik Ma'no

Real olamdagi harakatlarning aksariyati tekislikda emas, uch o'lchovli fazoda sodir bo'ladi: havoda manevr qilayotgan qiruvchi samolyot, magnit maydonida spiral bo'ylab aylanayotgan zaryadlangan zarracha yoki DNK molekulasining qo'shaloq spirali. Bunday harakatlarni bitta skalyar funksiya bilan tavsiflab bo'lmaydi — bizga **vektor-funksiya** kerak bo'ladi.

Fazoda egri chiziq bo'ylab harakatlanayotgan jism har bir lahzada nafaqat yo'nalishini o'zgartiradi (egiladi), balki o'zining harakat tekisligidan ham chetga chiqadi (buraladi). Shu sababli fazoviy egri chiziqni to'liq ifodalash uchun ikkita asosiy kattalik zarur:
1. **Egrilik ($K$)** — urinmaning burilish tezligi;
2. **Buralish ($\varkappa$ yoki $\tau$)** — egri chiziqning harakat tekisligidan chiqib ketish darajasi (torsion).

Fransuz matematiklari Jan Frederik Frenet va Jozef Alfred Serret tomonidan kashf etilgan differensial tenglamalar tizimi fazoviy egri chiziqning har bir nuqtasida tabiiy koordinatalar sistemasini (**Frenet reperi**) o'rnatish va uning evolyutsiyasini o'rganish imkonini beradi.

---

## 📐 Asosiy Nazariya, Qoidalar va Teoremalar

### 1. Skalyar argumentli vektor-funksiya va uning hosilasi
Fazoda nuqtaning radius-vektori $t$ parametrga bog'liq bo'lsin:

$$
\vec{r}(t) = x(t)\vec{i} + y(t)\vec{j} + z(t)\vec{k} = (x(t), y(t), z(t))
$$

- **Tezlik vektori (urinma vektor):**
  $$\vec{v}(t) = \frac{d\vec{r}}{dt} = \dot{\vec{r}}(t) = (\dot{x}(t), \dot{y}(t), \dot{z}(t))$$
- **Tezlanish vektori:**
  $$\vec{a}(t) = \frac{d^2\vec{r}}{dt^2} = \ddot{\vec{r}}(t) = (\ddot{x}(t), \ddot{y}(t), \ddot{z}(t))$$
- **Yoy uzunligi (tabiiy parametr $s$):**
  $$ds = |\vec{v}(t)| dt = \sqrt{\dot{x}^2 + \dot{y}^2 + \dot{z}^2} \, dt$$

### 2. Tabiiy triadr (Frenet reperi)
Fazoviy egri chiziqning har bir regulyar nuqtasida o'zaro perpendikulyar bo'lgan uchta birlik vektor o'rnatiladi:

1. **Birlik urinma vektor ($\vec{\tau}$):**
   $$\vec{\tau} = \frac{d\vec{r}}{ds} = \frac{\dot{\vec{r}}}{|\dot{\vec{r}}|}$$
2. **Asosiy normal vektor ($\vec{\nu}$):**
   Urinma vektorining burilish yo'nalishini ko'rsatuvchi birlik vektor:
   $$\vec{\nu} = \frac{1}{K} \frac{d\vec{\tau}}{ds}$$
3. **Binormal vektor ($\vec{\beta}$):**
   Urinma va asosiy normalga perpendikulyar bo'lgan vektor:
   $$\vec{\beta} = \vec{\tau} \times \vec{\nu} = \frac{\dot{\vec{r}} \times \ddot{\vec{r}}}{|\dot{\vec{r}} \times \ddot{\vec{r}}|}$$

Ushbu uch vektor juft-jufti bilan uchta asosiy tekislikni hosil qiladi:
- **Yopishma (oskulyatsiyalovchi) tekislik:** $\vec{\tau}$ va $\vec{\nu}$ vektorlar orqali o'tadi (normali $\vec{\beta}$);
- **Normal tekislik:** $\vec{\nu}$ va $\vec{\beta}$ vektorlar orqali o'tadi (normali $\vec{\tau}$);
- **Tuzatuvchi tekislik:** $\vec{\tau}$ va $\vec{\beta}$ vektorlar orqali o'tadi (normali $\vec{\nu}$).

### 3. Egrilik va Buralish formulalari
Ixtiyoriy parametr $t$ bo'yicha differensiallanganda:

- **Egrilik ($K$):**
  $$K = \frac{|\dot{\vec{r}} \times \ddot{\vec{r}}|}{|\dot{\vec{r}}|^3}$$
- **Buralish ($\varkappa$):**
  $$\varkappa = \frac{(\dot{\vec{r}}, \ddot{\vec{r}}, \dddot{\vec{r}})}{|\dot{\vec{r}} \times \ddot{\vec{r}}|^2}$$
  bu yerda $(\dot{\vec{r}}, \ddot{\vec{r}}, \dddot{\vec{r}})$ — aralash ko'paytma (3-tartibli determinant).

> **Geometrik ma'no:** Agar $\varkappa \equiv 0$ bo'lsa, chiziq butunlay bitta tekislikda yotadi (yassi chiziq). Agar $\varkappa \neq 0$ bo'lsa, u haqiqiy fazoviy chiziqdir.

### 4. Frenet-Serret formulalari
Tabiiy parametr $s$ bo'yicha birlik vektorlarning hosilalari quyidagi ajoyib matritsaviy qoidaga bo'ysunadi:

$$
\begin{cases}
\dfrac{d\vec{\tau}}{ds} = K \vec{\nu} \\[8pt]
\dfrac{d\vec{\nu}}{ds} = -K \vec{\tau} + \varkappa \vec{\beta} \\[8pt]
\dfrac{d\vec{\beta}}{ds} = -\varkappa \vec{\nu}
\end{cases}
$$

Matritsa ko'rinishida bu antisimmetrik matritsadir:
$$
\frac{d}{ds} \begin{pmatrix} \vec{\tau} \\ \vec{\nu} \\ \vec{\beta} \end{pmatrix} = \begin{pmatrix} 0 & K & 0 \\ -K & 0 & \varkappa \\ 0 & -\varkappa & 0 \end{pmatrix} \begin{pmatrix} \vec{\tau} \\ \vec{\nu} \\ \vec{\beta} \end{pmatrix}
$$

---

## 📝 Qadamma-qadam Yechilgan Amaliy Misollar

### 1-misol: Silindrik vintsimon chiziq (Geliks) differensial xarakteristikalari
Ushbu fazoviy spiral berilgan:

$$
\vec{r}(t) = (a\cos t, a\sin t, bt) \quad (a > 0, b > 0)
$$

Uning tezlik vektori, yoy uzunligi differensiali va birlik urinma vektorini toping.

**Yechilishi:**
1. Parametr $t$ bo'yicha hosila olamiz:
   $$\dot{\vec{r}}(t) = (-a\sin t, a\cos t, b)$$
2. Tezlik vektorining modulini topamiz:
   $$|\dot{\vec{r}}(t)| = \sqrt{(-a\sin t)^2 + (a\cos t)^2 + b^2} = \sqrt{a^2(\sin^2 t + \cos^2 t) + b^2} = \sqrt{a^2 + b^2}$$
   Tezlik moduli o'zgarmas ekan: $v = c = \sqrt{a^2 + b^2}$.
3. Yoy differensiali:
   $$ds = \sqrt{a^2 + b^2} \, dt$$
4. Birlik urinma vektori:
   $$\vec{\tau} = \frac{\dot{\vec{r}}}{|\dot{\vec{r}}|} = \frac{1}{\sqrt{a^2 + b^2}} (-a\sin t, a\cos t, b)$$

**Javob:** $\vec{\tau} = \frac{1}{\sqrt{a^2+b^2}} (-a\sin t, a\cos t, b)$.

---

### 2-misol: Vintsimon chiziqning egriligi va buralishini hisoblash
Yuqoridagi vintsimon chiziq $\vec{r}(t) = (a\cos t, a\sin t, bt)$ ning egriligi $K$ va buralishi $\varkappa$ ni hisoblang.

**Yechilishi:**
1. Yuqori tartibli hosilalarni topamiz:
   - $\dot{\vec{r}} = (-a\sin t, a\cos t, b)$
   - $\ddot{\vec{r}} = (-a\cos t, -a\sin t, 0)$
   - $\dddot{\vec{r}} = (a\sin t, -a\cos t, 0)$
2. Vektor ko'paytma $\dot{\vec{r}} \times \ddot{\vec{r}}$ ni hisoblaymiz:
   $$\dot{\vec{r}} \times \ddot{\vec{r}} = \begin{vmatrix} \vec{i} & \vec{j} & \vec{k} \\ -a\sin t & a\cos t & b \\ -a\cos t & -a\sin t & 0 \end{vmatrix}$$
   - $\vec{i}$ tashkil etuvchisi: $0 - (-ab\sin t) = ab\sin t$
   - $\vec{j}$ tashkil etuvchisi: $-(0 - (-ab\cos t)) = -ab\cos t$
   - $\vec{k}$ tashkil etuvchisi: $a^2\sin^2 t - (-a^2\cos^2 t) = a^2$
   $$\dot{\vec{r}} \times \ddot{\vec{r}} = (ab\sin t, -ab\cos t, a^2)$$
3. Vektor ko'paytmaning modulini topamiz:
   $$|\dot{\vec{r}} \times \ddot{\vec{r}}| = \sqrt{a^2 b^2\sin^2 t + a^2 b^2\cos^2 t + a^4} = \sqrt{a^2 b^2 + a^4} = a\sqrt{a^2 + b^2}$$
4. Egrilikni hisoblaymiz:
   $$K = \frac{|\dot{\vec{r}} \times \ddot{\vec{r}}|}{|\dot{\vec{r}}|^3} = \frac{a\sqrt{a^2 + b^2}}{(\sqrt{a^2 + b^2})^3} = \frac{a}{a^2 + b^2}$$
5. Aralash ko'paytmani hisoblaymiz:
   $$(\dot{\vec{r}}, \ddot{\vec{r}}, \dddot{\vec{r}}) = (\dot{\vec{r}} \times \ddot{\vec{r}}) \cdot \dddot{\vec{r}} = (ab\sin t)(a\sin t) + (-ab\cos t)(-a\cos t) + (a^2)(0) = a^2 b$$
6. Buralishni hisoblaymiz:
   $$\varkappa = \frac{a^2 b}{(a\sqrt{a^2 + b^2})^2} = \frac{a^2 b}{a^2(a^2 + b^2)} = \frac{b}{a^2 + b^2}$$

> 💡 **Ajoyib xulosa:** Vintsimon chiziqning ham egriligi, ham buralishi o'zgarmas sondir: $K = \text{const}, \varkappa = \text{const}$.

**Javob:** $K = \frac{a}{a^2 + b^2}, \quad \varkappa = \frac{b}{a^2 + b^2}$.

---

### 3-misol: Binormal va oskulyatsiyalovchi tekislik tenglamasi
$\vec{r}(t) = (t, t^2, t^3)$ fazoviy kubik parabola berilgan. Uning $t = 1$ nuqtadagi yopishma (oskulyatsiyalovchi) tekisligi tenglamasini tuzing.

**Yechilishi:**
1. $t = 1$ nuqtadagi nuqta koordinatalari: $M_0 = (1, 1, 1)$.
2. Hosilalarni hisoblaymiz:
   $$\dot{\vec{r}}(t) = (1, 2t, 3t^2) \implies \dot{\vec{r}}(1) = (1, 2, 3)$$
   $$\ddot{\vec{r}}(t) = (0, 2, 6t) \implies \ddot{\vec{r}}(1) = (0, 2, 6)$$
3. Yopishma tekislikning normal vektori $\vec{N} = \dot{\vec{r}} \times \ddot{\vec{r}}$:
   $$\vec{N} = \begin{vmatrix} \vec{i} & \vec{j} & \vec{k} \\ 1 & 2 & 3 \\ 0 & 2 & 6 \end{vmatrix} = \vec{i}(12 - 6) - \vec{j}(6 - 0) + \vec{k}(2 - 0) = (6, -6, 2)$$
   Soddalashtirish uchun 2 ga bo'lib olamiz: $\vec{n} = (3, -3, 1)$.
4. $M_0(1, 1, 1)$ nuqtadan o'tuvchi tekislik tenglamasini tuzamiz:
   $$3(x - 1) - 3(y - 1) + 1(z - 1) = 0$$
   $$3x - 3 - 3y + 3 + z - 1 = 0 \implies 3x - 3y + z - 1 = 0$$

**Javob:** $3x - 3y + z - 1 = 0$.

---

### 4-misol: Tezlanish vektorini tangensial va normal tashkil etuvchilarga ajratish
Ixtiyoriy harakatda tezlanish vektori tabiiy reper bazisida quyidagicha ifodalanishini isbotlang:

$$
\vec{a} = \frac{dv}{dt} \vec{\tau} + K v^2 \vec{\nu}
$$

**Yechilishi:**
1. Harakat tezligi: $\vec{v} = v \vec{\tau}$, bu yerda $v = |\vec{v}| = \frac{ds}{dt}$.
2. Tezlanishni topish uchun vaqt bo'yicha hosila olamiz (ko'paytma qoidasi):
   $$\vec{a} = \frac{d\vec{v}}{dt} = \frac{d(v\vec{\tau})}{dt} = \frac{dv}{dt} \vec{\tau} + v \frac{d\vec{\tau}}{dt}$$
3. Murakkab funksiya hosilasi bo'yicha: $\frac{d\vec{\tau}}{dt} = \frac{d\vec{\tau}}{ds} \frac{ds}{dt} = \frac{d\vec{\tau}}{ds} \cdot v$.
4. Frenet-Serretning 1-formulasiga binoan $\frac{d\vec{\tau}}{ds} = K \vec{\nu}$.
5. Barchasini birlashtiramiz:
   $$\vec{a} = \frac{dv}{dt} \vec{\tau} + v (K \vec{\nu} \cdot v) = \frac{dv}{dt} \vec{\tau} + K v^2 \vec{\nu}$$

> 💡 **Fizik ma'no:** 
> - Tangensial tezlanish: $a_\tau = \frac{dv}{dt}$ — tezlik modulining o'zgarishini ifodalaydi;
> - Normal (markazga intilma) tezlanish: $a_\nu = K v^2 = \frac{v^2}{R}$ — tezlik yo'nalishining o'zgarishini ifodalaydi;
> - Binormal yo'nalishida tezlanish doimo nolga teng!

**Javob:** Isbotlandi.

---

## ⚠️ Talabalar Ko'p Yo'l Qo'yadigan Xatolar (Tipik tuzoqlar)

1. **Tabiiy parametr $s$ bilan vaqt parametri $t$ ni adashtirish:**
   Frenet-Serret formulalari ($\frac{d\vec{\tau}}{ds} = K\vec{\nu}$) aynan **yoy uzunligi $s$** bo'yicha differensiallanganda o'rinli! Agar ixtiyoriy $t$ bo'yicha olinsa, zanjir qoidasiga ko'ra qo'shimcha ko'paytuvchi $v = |\dot{\vec{r}}|$ paydo bo'ladi: $\frac{d\vec{\tau}}{dt} = v K \vec{\nu}$.

2. **Buralish ($\varkappa$) ishorasini unutish:**
   Buralish egrilikdan farqli ravishda manfiy ham bo'lishi mumkin! Egrilik doimo musbat ($K \ge 0$), buralish esa spiralning o'ng yoki chapga burilishiga qarab musbat yoki manfiy ishora oladi.

3. **Vektor ko'paytma tartibini buzish:**
   $\vec{\beta} = \vec{\tau} \times \vec{\nu}$. Agar uni $\vec{\nu} \times \vec{\tau}$ deb olsangiz, ishora teskari bo'lib qoladi ($-\vec{\beta}$).

---

## 🎯 Mustaqil Yechish Uchun Masalalar

1. $\vec{r}(t) = (\cos t, \sin t, 2)$ fazoviy aylananing tabiiy triadr vektorlarini toping.
2. Yassi egri chiziqning buralishi nolga teng bo'lishini aralash ko'paytma orqali isbotlang.
3. $\vec{r}(t) = (t, t^2, 0)$ parabolaning $t=0$ nuqtasidagi egriligini fazoviy vektor formula yordamida hisoblang.
4. $x = t, y = \frac{t^2}{2}, z = \frac{t^3}{6}$ egri chiziqning $t = 0$ nuqtasidagi egriligi va buralishini toping.

<details style="margin-top: 1rem; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); cursor: pointer;">
<summary style="font-weight: 700; color: var(--primary);">Mashqlar javoblarini ko'rish</summary>

**1-masala:**
$\vec{\tau} = (-\sin t, \cos t, 0)$, $\vec{\nu} = (-\cos t, -\sin t, 0)$, $\vec{\beta} = (0, 0, 1)$.

**2-masala:**
Agar chiziq tekislikda yotsa (masalan, $z(t) \equiv 0$), u holda $\dot{\vec{r}}, \ddot{\vec{r}}, \dddot{\vec{r}}$ vektorlarning barchasi bitta tekislikda yotadi (komplanar). Ularning aralash ko'paytmasi nolga teng bo'ladi, binobarin $\varkappa = 0$.

**3-masala:**
$\dot{\vec{r}} = (1, 0, 0)$, $\ddot{\vec{r}} = (0, 2, 0)$. Vektor ko'paytma: $(0, 0, 2)$, moduli 2.
$|\dot{\vec{r}}| = 1$. Egrilik $K = \frac{2}{1^3} = 2$.

**4-masala:**
$t = 0$ da $\dot{\vec{r}} = (1, 0, 0)$, $\ddot{\vec{r}} = (0, 1, 0)$, $\dddot{\vec{r}} = (0, 0, 1)$.
$\dot{\vec{r}} \times \ddot{\vec{r}} = (0, 0, 1)$, moduli $1$.
$(\dot{\vec{r}}, \ddot{\vec{r}}, \dddot{\vec{r}}) = 1$.
$K = \frac{1}{1^3} = 1, \quad \varkappa = \frac{1}{1^2} = 1$.

</details>

---

## 💡 Xulosa va Imtihon Maslahatlari

- Fazoviy egri chiziqlarni o'rganishda chiziqli algebra (vektor va aralash ko'paytmalar) bilan matematik analizning integratsiyasi to'liq namoyon bo'ladi. Determinantlarni tez va xatosiz hisoblashni mashq qiling.
- Frenet formulalarini yodda saqlashning eng oson usuli — ularning antisimmetrik matritsasini ko'z oldiga keltirishdir: bosh diagonali nollardan iborat, qo'shni diagonallarda $K$ va $\varkappa$.
- Fizika imtihonlarida tangensial va normal tezlanish masalasi tushsa, $\vec{a} = a_\tau \vec{\tau} + a_\nu \vec{\nu}$ formulasini Frenet formulasi orqali keltirib chiqarib bersangiz, maksimal ball kafolatlanadi.
