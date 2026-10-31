---
title: "Uch karrali integrallar: Silindrik va sferik koordinatalar sistemasi"
description: "Fazoviy jism hajmi va massasi, silindrik va sferik koordinatalarga o'tish formulalari hamda Yakobianlar."
module: "karrali-integrallar"
order: 12
---

## 📌 Kirish va Fazoviy Masalalarning Fizik Ahamiyati

Nazariy fizika, aerodinamika, osmon mexanikasi va elektrotexnikada biz yashayotgan uch o'lchovli fazo ob'ektlari o'rganiladi. Agar fazodagi biror jismning zichligi bir jinsli bo'lmasa ($\rho(x, y, z) \neq \text{const}$), uning massasini, og'irlik markazini yoki inersiya momentlarini hisoblash uchun **uch karrali integrallar** qo'llaniladi:

$$
M = \iiint_V \rho(x, y, z) \, dx \, dy \, dz
$$

Dekart koordinatalari sistemasida ($x, y, z$) bunday masalalarni yechish ko'pincha juda og'ir hisob-kitoblarga olib keladi. Masalan, shar, konus yoki silindr shaklidagi jismlarni Dekart koordinatalarida integrallaganda chegaralarda uch karrali ildizlar paydo bo'ladi.

Bu qiyinchilikni bartaraf etishning eng samarali yo'li — jismning geometrik simmetriyasiga mos ravishda **silindrik** yoki **sferik koordinatalar sistemasiga** o'tishdir. To'g'ri koordinatalar sistemasini tanlash ko'p qavatli hisoblashlarni bir necha daqiqalik sodda integrallarga aylantiradi.

---

## 📐 Asosiy Nazariya: Koordinata Sistemalari va Yakobianlar

### 1. Silindrik Koordinatalar Sistemasi

Silindrik koordinatalar — bu tekislikdagi qutb koordinatalari ($r, \varphi$) ga uchinchi o'q $z$ ning qo'shilishidan hosil bo'ladi:
$$
\begin{cases}
x = r \cos\varphi \\
y = r \sin\varphi \\
z = z
\end{cases} \qquad (r \ge 0, \quad 0 \le \varphi \le 2\pi, \quad -\infty < z < \infty)
$$

**Hajm elementi va Yakobian:**
$$
J = \frac{D(x, y, z)}{D(r, \varphi, z)} = \begin{vmatrix}
\cos\varphi & -r\sin\varphi & 0 \\
\sin\varphi & r\cos\varphi & 0 \\
0 & 0 & 1
\end{vmatrix} = 1 \cdot (r\cos^2\varphi + r\sin^2\varphi) = r
$$

> **Silindrik koordinatalarda hajm differensiali:**
> $$
> dx \, dy \, dz = r \, dr \, d\varphi \, dz
> $$

**Qachon qo'llaniladi?**
Integrallash sohasi silindrlar ($x^2+y^2 \le R^2$), aylanma paraboloidlar ($z = x^2+y^2$) yoki aylanma konuslar ($z = \sqrt{x^2+y^2}$) bilan chegaralanganda.

---

### 2. Sferik Koordinatalar Sistemasi

Fazodagi ixtiyoriy $M(x, y, z)$ nuqtaning holati uchta son bilan aniqlanadi:
- $\rho$ — nuqtadan koordinata boshigacha masofa ($\rho \ge 0$);
- $\theta$ — radius-vektorning $Oz$ o'qi musbat yo'nalishi bilan hosil qilgan zenit burchagi ($0 \le \theta \le \pi$);
- $\varphi$ — radius-vektorning $Oxy$ tekisligidagi proyeksiyasining $Ox$ o'qi bilan hosil qilgan azimut burchagi ($0 \le \varphi \le 2\pi$).

Bog'lanish formulalari:
$$
\begin{cases}
x = \rho \sin\theta \cos\varphi \\
y = \rho \sin\theta \sin\varphi \\
z = \rho \cos\theta
\end{cases}
$$
Bunda $x^2 + y^2 + z^2 = \rho^2$ bo'ladi.

**Sferik Yakobian:**
$$
J = \frac{D(x, y, z)}{D(\rho, \theta, \varphi)} = \begin{vmatrix}
\sin\theta\cos\varphi & \rho\cos\theta\cos\varphi & -\rho\sin\theta\sin\varphi \\
\sin\theta\sin\varphi & \rho\cos\theta\sin\varphi & \rho\sin\theta\cos\varphi \\
\cos\theta & -\rho\sin\theta & 0
\end{vmatrix} = \rho^2 \sin\theta
$$

> **Sferik koordinatalarda hajm differensiali:**
> $$
> dx \, dy \, dz = \rho^2 \sin\theta \, d\rho \, d\theta \, d\varphi
> $$

**Qachon qo'llaniladi?**
Soha sharlar ($x^2+y^2+z^2 \le R^2$), shar qatlamlari yoki sferik konuslar bo'lganda, shuningdek integral ostida $x^2+y^2+z^2$ qatnashganda.

---

## 📝 Qadamma-qadam Yechilgan Amaliy Misollar

### 1-misol (Silindrik koordinatalar — Paraboloid hajmi):
Quyidagi sirtlar bilan chegaralangan jism hajmini hisoblang:
$$
z = x^2 + y^2 \quad \text{(paraboloid)}, \qquad z = 4 \quad \text{(tekislik)}
$$

**Yechilishi:**
1. Sirtlarning kesishish chizig'i: $x^2 + y^2 = 4$ — radiusi 2 bo'lgan aylana.
2. Silindrik koordinatalarga o'tamiz:
   $$
   x = r\cos\varphi, \quad y = r\sin\varphi, \quad z = z
   $$
3. Yangi koordinatalarda soha chegaralari:
   - $\varphi$: to'liq aylanma bo'lgani uchun $0 \le \varphi \le 2\pi$;
   - $r$: $0 \le r \le 2$;
   - $z$: pastdan paraboloid $z = r^2$, yuqoridan tekislik $z = 4$, ya'ni $r^2 \le z \le 4$.
4. Hajm integralini tuzamiz ($dV = r \, dr \, d\varphi \, dz$):
   $$
   V = \int_0^{2\pi} d\varphi \int_0^2 r \, dr \int_{r^2}^4 dz
   $$
5. Ichki integral: $\int_{r^2}^4 dz = 4 - r^2$.
6. O'rta integral:
   $$
   \int_0^2 (4 - r^2) r \, dr = \int_0^2 (4r - r^3) dr = \left. \left( 2r^2 - \frac{r^4}{4} \right) \right|_0^2 = 2(4) - \frac{16}{4} = 8 - 4 = 4
   $$
7. Tashqi integral:
   $$
   V = \int_0^{2\pi} 4 \, d\varphi = 4 \cdot 2\pi = 8\pi
   $$
**Javob:** $V = 8\pi$ kub birlik.

---

### 2-misol (Sferik koordinatalar — O'zgaruvchan zichlikli shar massasi):
Radiusi $R$ bo'lgan sharning massasini toping, agar uning zichligi koordinatalar boshidan bo'lgan masofaga to'g'ri mutanosib bo'lsa: $\gamma(x, y, z) = k \sqrt{x^2 + y^2 + z^2}$ ($k = \text{const}$).

**Yechilishi:**
1. Sferik koordinatalarga o'tamiz:
   $$
   \sqrt{x^2 + y^2 + z^2} = \rho \implies \gamma = k \rho
   $$
2. To'liq shar uchun integrallash chegaralari:
   $$
   0 \le \varphi \le 2\pi, \qquad 0 \le \theta \le \pi, \qquad 0 \le \rho \le R
   $$
3. Hajm elementi: $dV = \rho^2 \sin\theta \, d\rho \, d\theta \, d\varphi$.
4. Massa integralini tuzamiz:
   $$
   M = \iiint_V \gamma \, dV = \int_0^{2\pi} d\varphi \int_0^\pi \sin\theta \, d\theta \int_0^R (k \rho) \cdot \rho^2 \, d\rho
   $$
5. Har bir integralni alohida hisoblaymiz (chunki chegaralar o'zgarmas sonlar):
   $$
   \int_0^{2\pi} d\varphi = 2\pi
   $$
   $$
   \int_0^\pi \sin\theta \, d\theta = \left. -\cos\theta \right|_0^\pi = -(-1) - (-1) = 2
   $$
   $$
   \int_0^R k \rho^3 \, d\rho = \left. k \frac{\rho^4}{4} \right|_0^R = \frac{k R^4}{4}
   $$
6. Ko'paytiramiz:
   $$
   M = 2\pi \cdot 2 \cdot \frac{k R^4}{4} = k \pi R^4
   $$
**Javob:** $M = k \pi R^4$.

---

### 3-misol (Sferik konus — "Muzqaymoq shakli"):
$x^2 + y^2 + z^2 \le a^2$ shar ichida va $z \ge \sqrt{x^2 + y^2}$ konusning yuqorisida joylashgan jism hajmini sferik koordinatalarda hisoblang.

**Yechilishi:**
1. Konus tenglamasi sferik koordinatalarda:
   $$
   z = \rho \cos\theta, \quad \sqrt{x^2+y^2} = \rho \sin\theta
   $$
   $$
   \rho \cos\theta = \rho \sin\theta \implies \operatorname{tg}\theta = 1 \implies \theta = \frac{\pi}{4}
   $$
2. Demak, soha chegaralari:
   - $\varphi \in [0; 2\pi]$;
   - $\theta \in [0; \frac{\pi}{4}]$ (konus ichi);
   - $\rho \in [0; a]$ (sferagacha).
3. Hajm integrali:
   $$
   V = \int_0^{2\pi} d\varphi \int_0^{\pi/4} \sin\theta \, d\theta \int_0^a \rho^2 \, d\rho
   $$
4. Hisoblaymiz:
   $$
   \int_0^{2\pi} d\varphi = 2\pi
   $$
   $$
   \int_0^{\pi/4} \sin\theta \, d\theta = \left. -\cos\theta \right|_0^{\pi/4} = 1 - \frac{\sqrt{2}}{2}
   $$
   $$
   \int_0^a \rho^2 \, d\rho = \frac{a^3}{3}
   $$
5. Natija:
   $$
   V = 2\pi \left(1 - \frac{\sqrt{2}}{2}\right) \frac{a^3}{3} = \frac{\pi a^3}{3} (2 - \sqrt{2})
   $$

---

## ⚠️ Talabalar Ko'p Yo'l Qo'yadigan Xatolar

1. **Sferik Yakobiandagi $\rho^2 \sin\theta$ ni unutish:**
   Eng keng tarqalgan xato — $dx dy dz$ o'rniga faqat $d\rho d\theta d\varphi$ yozib ketish. $\rho^2 \sin\theta$ ko'paytuvchisisiz yechilgan har qanday hisob nol ballga teng!
2. **$\theta$ burchagining chegarasini $2\pi$ deb olish:**
   Zenit burchagi faqat shimoliy qutbdan janubiy qutbgacha o'zgaradi, shuning uchun $0 \le \theta \le \pi$. Agar uni $2\pi$ deb olsangiz, sharni ikki marta hisoblab qo'yasiz.
3. **Silindrik koordinatalarda $r$ ko'paytuvchisini tashlab ketish:**
   $dV = r \, dr \, d\varphi \, dz$ formulasidagi $r$ ni integrallashda doimo hisobga olish shart.

---

## 🎯 Mustaqil Yechish Uchun Masalalar

1. Silindrik koordinatalarga o'tib hisoblang: $\iiint_V (x^2 + y^2) \, dx \, dy \, dz$, bu yerda $V: x^2 + y^2 \le 1, \; 0 \le z \le 3$.
2. Radiusi $R$ bo'lgan bir jinsli sharning hajmini sferik koordinatalarda hisoblang va $V = \frac{4}{3}\pi R^3$ formulani keltirib chiqaring.
3. $z = \sqrt{4 - x^2 - y^2}$ yarim shar va $z = 0$ tekislik bilan chegaralangan jismning og'irlik markazini toping.

<details style="margin-top: 1rem; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); cursor: pointer;">
<summary style="font-weight: 700; color: var(--primary);">Javoblar va Ko'rsatmalar</summary>

**1-masala:** $\int_0^{2\pi} d\varphi \int_0^1 r^2 \cdot r \, dr \int_0^3 dz = 2\pi \cdot \frac{1}{4} \cdot 3 = \frac{3\pi}{2}$.

**2-masala:** $V = \int_0^{2\pi} d\varphi \int_0^\pi \sin\theta d\theta \int_0^R \rho^2 d\rho = 2\pi \cdot 2 \cdot \frac{R^3}{3} = \frac{4}{3}\pi R^3$.

**3-masala:** Simmetriyaga ko'ra $x_c = 0, y_c = 0$. $z_c = \frac{1}{V}\iiint z \, dV$.
Sferik koordinatalarda $z = \rho\cos\theta$ bilan hisoblansa: $z_c = \frac{3}{8}R = \frac{3}{8}\cdot 2 = \frac{3}{4}$.
Javob: $C(0; 0; 3/4)$.

</details>

---

## 💡 Xulosa va Imtihon Maslahatlari

- **Silindrik koordinatalar** qachon tanlanadi? Sirt o'q atrofida aylanganda ($x^2+y^2$ qatnashganda) va balandlik $z$ chegaralangan bo'lsa.
- **Sferik koordinatalar** qachon tanlanadi? Masalada sfera ($x^2+y^2+z^2$) yoki markaziy nuqtaviy simmetriya mavjud bo'lsa.
- Imtihonda sferik koordinata Yakobiani $\rho^2 \sin\theta$ ni doimo qizil qalam bilan alohida ajratib yozing — bu tekshiruvchiga sizning tushunchangiz chuqurligini ko'rsatadi.
