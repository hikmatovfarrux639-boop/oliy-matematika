---
title: "Fazodagi ikkinchi tartibli sirtlar: Kanonik tenglamalari va kesimlar usuli"
description: "Ellipsoid, bir va ikki pallali giperboloidlar, paraboloidlar (egar), konus va silindrlar tahlili hamda to'g'ri chiziqli yasovchilar."
module: "vektorlar-geometriya"
order: 14
---

## 📌 Kirish va Amaliy Mohiyati

Fazoviy analitik geometriyada birinchi darajali tenglamalar ($Ax + By + Cz + D = 0$) faqat tekisliklarni ifodalasa, texnika, arxitektura va astrofizikada uchraydigan murakkab sirtlarning aksariyati **ikkinchi tartibli algebraik tenglamalar** orqali tasvirlanadi.

Quyosh nurini fokuslovchi parabolik antennalar, Kassegren teleskoplarining giperbolik ko'zgulari, yadro reaktorlarining bir pallali giperboloid shaklidagi sovutish minoralari (GRES giperboloid minoralari), Shuxov teleminorasi va stadionlarning egar shaklidagi yengil giperbolik tomlari — bularning barchasi ikkinchi tartibli sirtlar geometriyasiga tayanadi. Ushbu sirtlarning fazodagi geometrik shaklini to'la tasavvur qilish va ularni sinchiklab tadqiq etishda **kesimlar usuli** (metod secheniy) eng qudratli tahliliy asbob hisoblanadi.

---

## 📐 Asosiy Nazariya, Qoidalar va Teoremalar

Fazoda umumiy ikkinchi tartibli sirt quyidagi to'liq kvadratik tenglama bilan ifodalanadi:

$$
Ax^2 + By^2 + Cz^2 + 2Dxy + 2Exz + 2Fyz + 2Gx + 2Hy + 2Kz + L = 0
$$

Ushbu tenglamani fazoviy koordinatalar sistemasini parallel ko'chirish va ortogonal burish orqali quyidagi asosiy **kanonik ko'rinishlarga** keltirish mumkin.

### 1. Kesimlar usulining mohiyati
Sirtning shaklini aniqlash uchun uni koordinata tekisliklariga parallel tekisliklar ($x = h$, $y = h$ yoki $z = h$) bilan kesiladi va hosil bo'lgan 2D kesim chiziqlarining $h$ parametrga bog'liqligi o'rganiladi.

---

### 2. Kanonik Sirtlar Klassifikatsiyasi

#### 1. Ellipsoid
> **Kanonik tenglama:**
> $$
> \frac{x^2}{a^2} + \frac{y^2}{b^2} + \frac{z^2}{c^2} = 1 \quad (a, b, c > 0)
> $$

- Sirt to'liq $[-a, a] \times [-b, b] \times [-c, c]$ parallelepiped ichida joylashgan yopiq qavariq sirt.
- $z = h$ ($|h| < c$) tekislik bilan kesimi ellipslardan iborat:
  $$
  \frac{x^2}{a^2\left(1 - \frac{h^2}{c^2}\right)} + \frac{y^2}{b^2\left(1 - \frac{h^2}{c^2}\right)} = 1
  $$
- Agar $a = b = c = R$ bo'lsa, ellipsoid **sferaga** aylanadi: $x^2 + y^2 + z^2 = R^2$.

#### 2. Bir pallali giperboloid
> **Kanonik tenglama:**
> $$
> \frac{x^2}{a^2} + \frac{y^2}{b^2} - \frac{z^2}{c^2} = 1
> $$

- $z = h$ gorizontal tekisliklar bilan kesimi har qanday $h \in \mathbb{R}$ da ellipslardir. $z = 0$ da eng kichik ellips — **bo'yin ellipsi** hosil bo'ladi.
- $x = 0$ yoki $y = 0$ vertikal koordinata tekisliklari bilan kesimi giperbolalardan iborat.
- **To'g'ri chiziqli yasovchilar:** Bir pallali giperboloid sirtida to'liq yotuvchi ikki oila to'g'ri chiziqlar mavjud:
  $$
  \alpha \left(\frac{x}{a} - \frac{z}{c}\right) = \beta \left(1 - \frac{y}{b}\right), \quad \beta \left(\frac{x}{a} + \frac{z}{c}\right) = \alpha \left(1 + \frac{y}{b}\right)
  $$

#### 3. Ikki pallali giperboloid
> **Kanonik tenglama:**
> $$
> \frac{x^2}{a^2} + \frac{y^2}{b^2} - \frac{z^2}{c^2} = -1
> $$

- $|z| < c$ qatlamda sirtning hech qanday haqiqiy nuqtasi yo'q. Sirt ikkita alohida simmetrik "pallaga" ajralgan.
- $|h| > c$ bo'lganda $z = h$ kesimlarida ellipslar hosil bo'ladi, $|h| = c$ da esa ikkita cho'qqi nuqta $(0, 0, \pm c)$ olinadi.

#### 4. Elliptik paraboloid
> **Kanonik tenglama:**
> $$
> \frac{x^2}{2p} + \frac{y^2}{2q} = z \quad (p > 0, q > 0)
> $$

- $z > 0$ da gorizontal kesimlar ellipslar, $x = 0$ va $y = 0$ vertikal kesimlar parabolalardir. Cho'qqisi koordinata boshida joylashgan cheksiz kosasimon sirt.

#### 5. Giperbolik paraboloid ("Egarsimon sirt")
> **Kanonik tenglama:**
> $$
> \frac{x^2}{2p} - \frac{y^2}{2q} = z \quad (p > 0, q > 0)
> $$

- $z = h > 0$ da $x$ o'qi bo'yicha yo'nalgan giperbolalar, $z = h < 0$ da $y$ o'qi bo'yicha yo'nalgan giperbolalar.
- $z = 0$ tekislik bilan kesimi ikkita kesishuvchi to'g'ri chiziq beradi: $\frac{x}{\sqrt{2p}} \pm \frac{y}{\sqrt{2q}} = 0$.
- Ushbu sirt ham ikki oila **to'g'ri chiziqli yasovchilarga** ega bo'lib, me'morchilikda yupqa temir-beton qoplamalar yaratishda to'g'ri armaturalar orqali kavisli sirt hosil qilish imkonini beradi.

#### 6. Ikkinchi tartibli konus va silindrlar
- **Ikkinchi tartibli konus:** $\frac{x^2}{a^2} + \frac{y^2}{b^2} - \frac{z^2}{c^2} = 0$.
- **Elliptik silindr:** $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$.
- **Giperbolik silindr:** $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$.
- **Parabolik silindr:** $y^2 = 2px$.

---

## 📝 Qadamma-qadam Yechilgan Amaliy Misollar

### 1-misol: To'la kvadratlar ajratish orqali sirt kanonik tenglamasini topish

**Masala:** Berilgan tenglamaning qanday sirt ekanligini aniqlang, kanonik ko'rinishga keltiring va markaziy simmetriya nuqtasini toping:
$$
2x^2 + y^2 + 2z^2 - 4x + 4y + 8z + 6 = 0
$$

**Yechish:**
1. Har bir o'zgaruvchi bo'yicha guruhlaymiz va to'la kvadratlarni ajratamiz:
   - $x$ bo'yicha: $2(x^2 - 2x) = 2((x - 1)^2 - 1) = 2(x - 1)^2 - 2$
   - $y$ bo'yicha: $y^2 + 4y = (y + 2)^2 - 4$
   - $z$ bo'yicha: $2(z^2 + 4z) = 2((z + 2)^2 - 4) = 2(z + 2)^2 - 8$

2. Ushbu ifodalarni boshlang'ich tenglamaga qo'yamiz:
   $$
   2(x - 1)^2 - 2 + (y + 2)^2 - 4 + 2(z + 2)^2 - 8 + 6 = 0
   $$
   $$
   2(x - 1)^2 + (y + 2)^2 + 2(z + 2)^2 - 8 = 0
   $$
   $$
   2(x - 1)^2 + (y + 2)^2 + 2(z + 2)^2 = 8
   $$

3. Ikkala tomonni 8 ga bo'lamiz:
   $$
   \frac{(x - 1)^2}{4} + \frac{(y + 2)^2}{8} + \frac{(z + 2)^2}{4} = 1
   $$

**Javob:** Markazi $M_0(1, -2, -2)$ nuqtada bo'lgan, yarim o'qlari $a = 2, b = 2\sqrt{2}, c = 2$ bo'lgan **aylanma ellipsoid** (chunki $a = c = 2$, $Oy$ o'qi atrofida aylanish sirti).

---

### 2-misol: Bir pallali giperboloidning to'g'ri chiziqli yasovchilarini topish

**Masala:** $\frac{x^2}{9} + \frac{y^2}{4} - \frac{z^2}{16} = 1$ sirtining $M_0(3, 2, 4)$ nuqtasi orqali o'tuvchi to'g'ri chiziqli yasovchilarining kanonik tenglamalarini tuzing.

**Yechish:**
1. Nuqta sirtda yotishini tekshiramiz: $\frac{3^2}{9} + \frac{2^2}{4} - \frac{4^2}{16} = 1 + 1 - 1 = 1$. Nuqta sirtda yotadi.
2. Sirt tenglamasini ko'paytuvchilarga ajratiladigan ko'rinishda yozamiz:
   $$
   \frac{x^2}{9} - \frac{z^2}{16} = 1 - \frac{y^2}{4} \implies \left(\frac{x}{3} - \frac{z}{4}\right)\left(\frac{x}{3} + \frac{z}{4}\right) = \left(1 - \frac{y}{2}\right)\left(1 + \frac{y}{2}\right)
   $$
3. Birinchi oila yasovchilar tenglamasi:
   $$
   \begin{cases} \alpha \left(\frac{x}{3} - \frac{z}{4}\right) = \beta \left(1 - \frac{y}{2}\right) \\ \beta \left(\frac{x}{3} + \frac{z}{4}\right) = \alpha \left(1 + \frac{y}{2}\right) \end{cases}
   $$
   $M_0(3, 2, 4)$ koordinatalarini qo'yamiz: $\frac{x}{3} - \frac{z}{4} = 1 - 1 = 0$ va $1 - \frac{y}{2} = 1 - 1 = 0$.
   Ikkinchi tenglamadan: $\beta(1 + 1) = \alpha(1 + 1) \implies \beta = \alpha$. Demak, $\alpha = \beta = 1$.
   Birinchi to'g'ri chiziq:
   $$
   \begin{cases} \frac{x}{3} - \frac{z}{4} = 1 - \frac{y}{2} \\ \frac{x}{3} + \frac{z}{4} = 1 + \frac{y}{2} \end{cases}
   $$
   Ushbu ikki tekislikni qo'shsak: $\frac{2x}{3} = 2 \implies x = 3$. Ayirsak: $\frac{2z}{4} = y \implies z = 2y$.
   Kanonik ko'rinishi: $\frac{x - 3}{0} = \frac{y - 2}{1} = \frac{z - 4}{2}$.

4. Ikkinchi oila yasovchilar tenglamasi:
   $$
   \begin{cases} \lambda \left(\frac{x}{3} - \frac{z}{4}\right) = \mu \left(1 + \frac{y}{2}\right) \\ \mu \left(\frac{x}{3} + \frac{z}{4}\right) = \lambda \left(1 - \frac{y}{2}\right) \end{cases}
   $$
   $M_0$ nuqtada chap tomonda 0, o'ng tomonda $\mu \cdot 2 \implies \mu = 0, \lambda \neq 0$. Demak:
   $$
   \begin{cases} \frac{x}{3} - \frac{z}{4} = 0 \\ 1 - \frac{y}{2} = 0 \end{cases} \implies \begin{cases} 4x - 3z = 0 \\ y = 2 \end{cases}
   $$
   Kanonik ko'rinishi: $\frac{x - 3}{3} = \frac{y - 2}{0} = \frac{z - 4}{4}$.

**Javob:** $L_1: \frac{x - 3}{0} = \frac{y - 2}{1} = \frac{z - 4}{2}$ va $L_2: \frac{x - 3}{3} = \frac{y - 2}{0} = \frac{z - 4}{4}$.

---

### 3-misol: Giperbolik paraboloid kesimlarini tadqiq qilish

**Masala:** $z = x^2 - 4y^2$ egarsimon sirtini $z = 0, z = 4$ va $z = -4$ tekisliklar bilan kesimi tahlil qilinsin.

**Yechish:**
1. **$z = 0$ tekislik bilan kesim:**
   $x^2 - 4y^2 = 0 \implies (x - 2y)(x + 2y) = 0$.
   Bu koordinatalar boshida kesishuvchi ikkita to'g'ri chiziq: $x - 2y = 0$ va $x + 2y = 0$.
2. **$z = 4$ gorizontal tekislik bilan kesim:**
   $x^2 - 4y^2 = 4 \implies \frac{x^2}{4} - y^2 = 1$.
   Bu haqiqiy o'qi $Ox$ bo'ylab yo'nalgan, markazi $(0, 0, 4)$ da bo'lgan giperbola ($a = 2, b = 1$).
3. **$z = -4$ tekislik bilan kesim:**
   $x^2 - 4y^2 = -4 \implies y^2 - \frac{x^2}{4} = 1$.
   Bu haqiqiy o'qi $Oy$ ga parallel bo'lgan, $z = -4$ tekisligidagi giperbola ($b = 1, a = 2$).

**Javob:** Kesimlar sirtning haqiqatdan ham egar shaklida ekanligini to'la tasdiqlaydi.

---

### 4-misol: Sirt va to'g'ri chiziqning kesishish nuqtalarini aniqlash

**Masala:** $\frac{x^2}{4} + \frac{y^2}{9} + \frac{z^2}{36} = 1$ ellipsoid bilan $\frac{x-1}{1} = \frac{y+3}{-3} = \frac{z}{6}$ to'g'ri chiziqning kesishish nuqtalarini toping.

**Yechish:**
1. To'g'ri chiziqni parametrik shaklga keltiramiz:
   $$
   x = t + 1, \quad y = -3t - 3, \quad z = 6t
   $$
2. Sirt tenglamasiga qo'yamiz:
   $$
   \frac{(t + 1)^2}{4} + \frac{(-3t - 3)^2}{9} + \frac{(6t)^2}{36} = 1
   $$
   $$
   \frac{t^2 + 2t + 1}{4} + \frac{9(t + 1)^2}{9} + \frac{36t^2}{36} = 1
   $$
   $$
   \frac{t^2 + 2t + 1}{4} + (t + 1)^2 + t^2 = 1
   $$
3. Tenglamaning ikkala tomonini 4 ga ko'paytiramiz:
   $$
   t^2 + 2t + 1 + 4(t^2 + 2t + 1) + 4t^2 = 4
   $$
   $$
   9t^2 + 10t + 5 = 4 \implies 9t^2 + 10t + 1 = 0
   $$
4. Kvadrat tenglamani yechamiz:
   $$
   (9t + 1)(t + 1) = 0 \implies t_1 = -1, \quad t_2 = -\frac{1}{9}
   $$
5. Nuqtalar koordinatalarini hisoblaymiz:
   - $t_1 = -1 \implies x_1 = 0, y_1 = 0, z_1 = -6 \implies A(0, 0, -6)$.
   - $t_2 = -\frac{1}{9} \implies x_2 = \frac{8}{9}, y_2 = -\frac{8}{3}, z_2 = -\frac{2}{3} \implies B\left(\frac{8}{9}, -\frac{8}{3}, -\frac{2}{3}\right)$.

**Javob:** Ikki kesishish nuqtasi mavjud: $A(0, 0, -6)$ va $B\left(\frac{8}{9}, -\frac{8}{3}, -\frac{2}{3}\right)$.

---

## ⚠️ Talabalar Ko'p Yo'l Qo'yadigan Xatolar

> [!WARNING] Imtihonda ehtiyot bo'ling!
> 1. **Bir va ikki pallali giperboloidni o'ng tarafdagi ishoraga qarab adashtirish:**
>    - $\frac{x^2}{a^2} + \frac{y^2}{b^2} - \frac{z^2}{c^2} = +1$ — Bir pallali giperboloid (bitta minus chapda, o'ngda $+1$).
>    - $\frac{x^2}{a^2} + \frac{y^2}{b^2} - \frac{z^2}{c^2} = -1 \iff -\frac{x^2}{a^2} - \frac{y^2}{b^2} + \frac{z^2}{c^2} = 1$ — Ikki pallali giperboloid (ikkita minus bor).
> 2. **Paraboloidlarda darajani unutish:** $z = \frac{x^2}{2p} + \frac{y^2}{2q}$ tenglamada $z$ chiziqli (1-daraja), $x$ va $y$ kvadratikdir. Agar $z^2$ bo'lsa, bu konus bo'lib qoladi!
> 3. **To'g'ri chiziqli yasovchilar mavjudligini inkor etish:** Ko'pchilik talabalar egrilangan sirt qanday qilib to'g'ri chiziqlardan iborat bo'lishi mumkin deb hayron bo'lishadi. Unutmang: bir pallali giperboloid va giperbolik paraboloid — **chiziqli (ruled) sirtlardir**.

---

## 🎯 Mustaqil Yechish Uchun Masalalar

1. $x^2 + 4y^2 - z^2 - 2x + 8y + 4 = 0$ tenglama qanday sirtni aniqlaydi?
   - *Yechish:* To'la kvadratlar: $(x-1)^2 - 1 + 4(y+1)^2 - 4 - z^2 + 4 = 0 \implies (x-1)^2 + 4(y+1)^2 - z^2 = 1$.
   - *Javob:* Markazi $(1, -1, 0)$ nuqtada bo'lgan bir pallali giperboloid.

2. $z = 2x^2 + 3y^2$ paraboloidning $z = 6$ tekislik bilan kesimidan hosil bo'lgan ellipsning yarim o'qlarini toping.
   - *Yechish:* $2x^2 + 3y^2 = 6 \implies \frac{x^2}{3} + \frac{y^2}{2} = 1$.
   - *Javob:* Katta yarim o'qi $a = \sqrt{3}$, kichik yarim o'qi $b = \sqrt{2}$.

3. $\frac{x^2}{16} - \frac{y^2}{9} = z$ giperbolik paraboloidning $M_0(4, 3, 0)$ nuqtasidan o'tuvchi to'g'ri chiziqli yasovchilarini toping.
   - *Yechish:* $\left(\frac{x}{4} - \frac{y}{3}\right)\left(\frac{x}{4} + \frac{y}{3}\right) = z$. $M_0$ nuqtada $\frac{x}{4} - \frac{y}{3} = 0$ va $\frac{x}{4} + \frac{y}{3} = 2$.
   - *Javob:* $L_1: \begin{cases} \frac{x}{4} - \frac{y}{3} = 0 \\ z = 0 \end{cases}$ va $L_2: \begin{cases} \frac{x}{4} + \frac{y}{3} = 2 \\ \frac{x}{4} - \frac{y}{3} = \frac{z}{2} \end{cases}$.

4. $x^2 + y^2 = 4z$ elliptik paraboloid bilan $x + y + z = 1$ tekislik kesishganda qanday chiziq hosil bo'ladi?
   - *Yechish:* $z = 1 - x - y \implies x^2 + y^2 = 4(1 - x - y) \implies (x+2)^2 + (y+2)^2 = 12$. Sirt qavariq, tekislik uni berk egri chiziq bo'ylab kesadi.
   - *Javob:* Fazodagi ellips.

---

## 💡 Xulosa va Imtihon Maslahatlari

- Sirt tenglamasini tahlil qilishda birinchi qadam har doim $x, y, z$ bo'yicha **to'la kvadratlar ajratish** hisoblanadi.
- Agar tenglamada barcha uch o'zgaruvchi kvadrat darajada bo'lsa:
  - Barcha ishoralar musbat bo'lsa $\to$ **Ellipsoid**;
  - Bitta minus bo'lsa $\to$ **Bir pallali giperboloid**;
  - Ikkita minus bo'lsa $\to$ **Ikki pallali giperboloid**;
  - O'ng tomon nolga teng bo'lsa $\to$ **Konus**.
- Agar faqat ikkita o'zgaruvchi kvadrat darajada, uchinchisi 1-darajada bo'lsa:
  - Kvadratlar bir xil ishorali bo'lsa $\to$ **Elliptik paraboloid**;
  - Kvadratlar turli ishorali bo'lsa $\to$ **Giperbolik paraboloid (egar)**.
- Imtihonda kesimlar usulini qo'llash so'ralsa, kamida $z = 0$, $z = h > 0$ va $z = h < 0$ gorizontal hamda $x = 0, y = 0$ vertikal kesimlarini chizib yoki tahlil qilib ko'rsatish maksimal ballni ta'minlaydi.
