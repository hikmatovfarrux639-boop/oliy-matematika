---
title: "Karrali integrallarda o'zgaruvchilarni almashtirish va Yakobian tatbiqi"
description: "Umumiy egri chiziqli koordinatalarga o'tish, qutb va umumlashtirilgan koordinatalarda ikki karrali integral."
module: "karrali-integrallar"
order: 11
---

## 📌 Kirish va Geometrik Deformatsiya Mohiyati

Dekart koordinatalari sistemasida ($x, y$) berilgan ikki karrali integralni hisoblashda eng katta to'siq — integrallash sohasining murakkab geometriyasidir. Agar integrallash sohasi doira, halqa, ellips yoki egri chiziqli trapetsiya bo'lsa, chegaralarni $x$ va $y$ orqali ifodalash ko'p qavatli radikallar va hisoblab bo'lmas darajadagi murakkab integrallarni yuzaga keltiradi.

Bir o'zgaruvchili analizda $\int_a^b f(x) dx$ integralida almashtirish kiritilganda differensial $dx = x'(t) dt$ ga ko'payardi. Ikki karrali integralda esa egri chiziqli koordinatalarga ($u, v$) o'tilganda, tekislikdagi elementar to'rtburchak yangi tekislikda qiyshiq **parallelogrammga** aylanadi.

Ushbu elementar yuzaning deformatsiyalanish koeffitsiyenti (cho'zilish yoki siqilish darajasi) aynan **Yakobian** moduli orqali o'lchanadi:

$$
dx \, dy = |J(u, v)| \, du \, dv
$$

Bu tamoyil murakkab egri chiziqli sohani yangi $(u, v)$ tekisligida oddiy to'g'ri to'rtburchakka aylantirish imkonini beradi.

---

## 📐 Asosiy Nazariya: Formulalar va Teoremalar

### 1. Umumiy Egri Chiziqli Koordinatalarga O'tish

Faraz qilaylik, $D \subset \mathbb{R}^2$ soha berilgan bo'lib, quyidagi silliq va bir qiymatli akslantirish kiritilgan bo'lsin:
$$
x = x(u, v), \qquad y = y(u, v)
$$
Ushbu akslantirish $(u, v)$ tekisligidagi $D^*$ sohani $(x, y)$ tekisligidagi $D$ sohaga o'tkazadi.

Akslantirishning funksional determinanti (Yakobiani):
$$
J(u, v) = \frac{D(x, y)}{D(u, v)} = \begin{vmatrix}
\frac{\partial x}{\partial u} & \frac{\partial x}{\partial v} \\[2mm]
\frac{\partial y}{\partial u} & \frac{\partial y}{\partial v}
\end{vmatrix} = \frac{\partial x}{\partial u}\frac{\partial y}{\partial v} - \frac{\partial x}{\partial v}\frac{\partial y}{\partial u}
$$

> **O'zgaruvchilarni almashtirish formulasi:**
> Agar $f(x, y)$ funksiya $D$ sohada uzluksiz bo'lsa va $D^*$ sohada $J(u, v) \neq 0$ bo'lsa:
> $$
> \iint_D f(x, y) \, dx \, dy = \iint_{D^*} f(x(u, v), y(u, v)) \cdot |J(u, v)| \, du \, dv
> $$

*Diqqat:* Formuldagi $|J(u, v)|$ — Yakobianning mutlaq qiymatidir (modulidir), chunki soha yuzi har doim musbat bo'lishi shart.

---

### 2. Qutb Koordinatalari Sistemasi

Aylana va doiraviy simmetriyaga ega sohalar uchun eng muhim xususiy hol:
$$
\begin{cases}
x = r \cos\varphi \\
y = r \sin\varphi
\end{cases} \qquad (r \ge 0, \quad 0 \le \varphi \le 2\pi)
$$
Yakobian:
$$
J = \begin{vmatrix} \cos\varphi & -r\sin\varphi \\ \sin\varphi & r\cos\varphi \end{vmatrix} = r(\cos^2\varphi + \sin^2\varphi) = r
$$
Demak, yuza elementi:
$$
dx \, dy = r \, dr \, d\varphi
$$

---

### 3. Umumlashtirilgan Qutb (Elliptik) Koordinatalar

Ellips bilan chegaralangan sohalar uchun ($\frac{x^2}{a^2} + \frac{y^2}{b^2} \le 1$):
$$
\begin{cases}
x = a r \cos\varphi \\
y = b r \sin\varphi
\end{cases} \qquad (0 \le r \le 1, \quad 0 \le \varphi \le 2\pi)
$$
Yakobian:
$$
J = \begin{vmatrix} a\cos\varphi & -ar\sin\varphi \\ b\sin\varphi & br\cos\varphi \end{vmatrix} = abr
$$
Yuza elementi:
$$
dx \, dy = a b r \, dr \, d\varphi
$$

---

## 📝 Qadamma-qadam Yechilgan Amaliy Misollar

### 1-misol (Yarim shar hajmi):
Quyidagi ikki karrali integralni qutb koordinatalariga o'tish orqali hisoblang:
$$
I_1 = \iint_D \sqrt{R^2 - x^2 - y^2} \, dx \, dy
$$
bu yerda $D: x^2 + y^2 \le R^2$ — radiusi $R$ bo'lgan doira.

**Yechilishi:**
1. Qutb koordinatalariga o'tamiz: $x = r\cos\varphi, y = r\sin\varphi$.
2. Integral ostidagi ifoda: $x^2 + y^2 = r^2 \implies \sqrt{R^2 - (x^2+y^2)} = \sqrt{R^2 - r^2}$.
3. Differensial: $dx dy = r \, dr d\varphi$.
4. Yangi $D^*$ sohadagi chegaralar: butun doira bo'lgani uchun $0 \le \varphi \le 2\pi$ va $0 \le r \le R$.
5. Ikki karrali integralni takroriy integralga keltiramiz:
   $$
   I_1 = \int_0^{2\pi} d\varphi \int_0^R \sqrt{R^2 - r^2} \cdot r \, dr
   $$
6. Tashqi integral: $\int_0^{2\pi} d\varphi = 2\pi$.
7. Ichki integral: $u = R^2 - r^2 \implies du = -2r \, dr \implies r \, dr = -\frac{du}{2}$.
   $$
   \int_0^R \sqrt{R^2 - r^2} r dr = \int_{R^2}^0 \sqrt{u} \left(-\frac{du}{2}\right) = \frac{1}{2} \int_0^{R^2} u^{1/2} du = \frac{1}{2} \left. \frac{2}{3} u^{3/2} \right|_0^{R^2} = \frac{1}{3} R^3
   $$
8. Yakuniy javob:
   $$
   I_1 = 2\pi \cdot \frac{1}{3} R^3 = \frac{2}{3}\pi R^3
   $$
*(Bu formuladan radiusi $R$ bo'lgan to'liq shar hajmi $V = 2 \cdot \frac{2}{3}\pi R^3 = \frac{4}{3}\pi R^3$ ekani kelib chiqadi!)*

---

### 2-misol (Elliptik soha bo'yicha integral):
Ushbu integralni hisoblang:
$$
I_2 = \iint_D \left(\frac{x^2}{a^2} + \frac{y^2}{b^2}\right) dx \, dy
$$
bu yerda $D$ — $\frac{x^2}{a^2} + \frac{y^2}{b^2} \le 1$ ellips sohasi.

**Yechilishi:**
1. Umumlashtirilgan qutb koordinatalarini kiritamiz:
   $$
   x = a r \cos\varphi, \quad y = b r \sin\varphi
   $$
2. $\frac{x^2}{a^2} + \frac{y^2}{b^2} = r^2 \cos^2\varphi + r^2 \sin^2\varphi = r^2$.
3. Chegaralar: $0 \le \varphi \le 2\pi, \quad 0 \le r \le 1$.
4. Yuza elementi: $dx \, dy = a b r \, dr \, d\varphi$.
5. Integralni hisoblaymiz:
   $$
   I_2 = \int_0^{2\pi} d\varphi \int_0^1 r^2 \cdot (a b r \, dr) = a b \left(\int_0^{2\pi} d\varphi\right) \left(\int_0^1 r^3 \, dr\right)
   $$
   $$
   I_2 = a b \cdot 2\pi \cdot \left. \frac{r^4}{4} \right|_0^1 = 2\pi a b \cdot \frac{1}{4} = \frac{\pi a b}{2}
   $$

---

### 3-misol (Egri chiziqli to'r bo'yicha almashtirish):
Quyidagi chiziqlar bilan chegaralangan $D$ soha bo'yicha integralni hisoblang:
$$
I_3 = \iint_D x y \, dx \, dy
$$
Chegaralar: $x y = 1, \; x y = 3, \; y = 2x, \; y = 4x \quad (x > 0, y > 0)$.

**Yechilishi:**
1. Soha chegaralariga mos ravishda yangi o'zgaruvchilarni kiritamiz:
   $$
   u = xy, \qquad v = \frac{y}{x}
   $$
   Yangi chegaralar juda sodda to'g'ri to'rtburchakka aylanadi: $1 \le u \le 3, \quad 2 \le v \le 4$.
2. Eski o'zgaruvchilarni topish o'rniga teskari Yakobianni hisoblaymiz:
   $$
   \frac{D(u, v)}{D(x, y)} = \begin{vmatrix} u'_x & u'_y \\ v'_x & v'_y \end{vmatrix} = \begin{vmatrix} y & x \\ -\frac{y}{x^2} & \frac{1}{x} \end{vmatrix} = y \cdot \frac{1}{x} - x \left(-\frac{y}{x^2}\right) = \frac{y}{x} + \frac{y}{x} = 2 \frac{y}{x} = 2v
   $$
3. To'g'ri Yakobian:
   $$
   J(u, v) = \frac{D(x, y)}{D(u, v)} = \frac{1}{\frac{D(u, v)}{D(x, y)}} = \frac{1}{2v}
   $$
4. Integral ostidagi funksiya: $xy = u$.
5. Integralga qo'yamiz:
   $$
   I_3 = \iint_{D^*} u \cdot \left|\frac{1}{2v}\right| du \, dv = \frac{1}{2} \int_1^3 u \, du \int_2^4 \frac{dv}{v}
   $$
6. Integrallaymiz:
   $$
   \int_1^3 u \, du = \left. \frac{u^2}{2} \right|_1^3 = \frac{9 - 1}{2} = 4
   $$
   $$
   \int_2^4 \frac{dv}{v} = \ln|4| - \ln|2| = \ln 2
   $$
   $$
   I_3 = \frac{1}{2} \cdot 4 \cdot \ln 2 = 2 \ln 2
   $$

---

## ⚠️ Talabalar Ko'p Yo'l Qo'yadigan Xatolar

1. **Qutb koordinatalaridagi $r$ ni unutish:**
   Eng keng tarqalgan xato — $dx dy$ o'rniga shunchaki $dr d\varphi$ yozib ketish. Har doim $r \, dr d\varphi$ yozilishi shart! $r$ ko'paytuvchisini unutish integral qiymatini ham, o'lchov birligini ham butunlay buzadi.
2. **Yakobian modulini e'tibordan qochirish:**
   Agar almashtirish natijasida $J < 0$ chiqsa, integral oldiga manfiy ishora qo'yilmaydi. Formuldagi modul $|J|$ manfiylikni musbatga aylantiradi.
3. **Chegaralarni o'tkazishda xatoliklar:**
   Doiraning faqat 1-choragi ($x \ge 0, y \ge 0$) berilgan bo'lsa, burchak $0 \le \varphi \le \pi/2$ bo'ladi. Ko'pchilik avtomatik tarzda $2\pi$ gacha oladi.

---

## 🎯 Mustaqil Yechish Uchun Masalalar

1. Qutb koordinatalariga o'tib hisoblang: $\iint_D (x^2 + y^2) \, dx \, dy$, bu yerda $D: x^2 + y^2 \le 4$.
2. $D: \frac{x^2}{9} + \frac{y^2}{4} \le 1$ soha bo'yicha integralni hisoblang: $\iint_D dx \, dy$ (ellips yuzasi).
3. Yangi o'zgaruvchilar $u = x+y, v = x-y$ kiritib, $x+y=1, x+y=2, x-y=-1, x-y=1$ to'rtburchak bo'yicha $\iint_D (x+y)^3 dx dy$ ni hisoblang.

<details style="margin-top: 1rem; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); cursor: pointer;">
<summary style="font-weight: 700; color: var(--primary);">Javoblar va Ko'rsatmalar</summary>

**1-masala:** $\int_0^{2\pi} d\varphi \int_0^2 r^2 \cdot r \, dr = 2\pi \left. \frac{r^4}{4} \right|_0^2 = 2\pi \cdot 4 = 8\pi$.

**2-masala:** $x = 3r\cos\varphi, y = 2r\sin\varphi \implies J = 6r$.
$\iint_D dx dy = \int_0^{2\pi} d\varphi \int_0^1 6r \, dr = 2\pi \cdot 3 = 6\pi$.

**3-masala:** $\frac{D(u, v)}{D(x, y)} = \begin{vmatrix} 1 & 1 \\ 1 & -1 \end{vmatrix} = -2 \implies |J| = 1/2$.
$\int_{-1}^1 dv \int_1^2 u^3 \cdot \frac{1}{2} du = 2 \cdot \frac{1}{2} \left. \frac{u^4}{4} \right|_1^2 = \frac{16-1}{4} = \frac{15}{4} = 3.75$.

</details>

---

## 💡 Xulosa va Imtihon Maslahatlari

- Agar integral ostida $x^2 + y^2$ kombinatsiyasi ko'rinsa yoki soha aylanalar bilan chegaralangan bo'lsa $\to$ ikkilanmasdan **qutb koordinatalariga** o'ting.
- Agar qiya to'g'ri chiziqlar yoki giperbolalar bo'lsa $\to$ ularning tenglamalarini yangi o'zgaruvchilar $u$ va $v$ deb belgilang va teskari Yakobian orqali to'g'ri Yakobianni oson toping.
