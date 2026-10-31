---
title: "Kompleks son tushunchasi va algebraik shakl"
module: "kompleks-sonlar"
order: 1
description: "Mavhum birlik i (i² = -1), kompleks sonning algebraik shakli, qo'shma sonlar, modul tushunchasi va kompleks tekislikdagi geometrik sohalar."
---

## Kirish: Haqiqiy sonlar nima uchun yetmay qoldi?

Maktab matematikasida bizga uzoq vaqt: *"Manfiy sondan kvadrat ildiz chiqarib bo'lmaydi!"* yoki *$x^2 + 1 = 0$ tenglama yechimga ega emas!* deb o'rgatilgan. Chunki haqiqiy sonlar o'qida har qanday sonning kvadrati nomanfiydir ($x^2 \ge 0$).

Biroq XVI asrda italyan matematiklari (Jerolamo Kardano, Rafael Bombelli) kubik tenglamalarni yechish vaqtida shunday g'alati holatga duch keldilar: oraliq hisoblashlarda manfiy sonlarning ildizlari $\sqrt{-1}$ qatnashsa-da, oxirida bu "mavhum" miqdorlar qisqarib ketib, butunlay haqiqiy va to'g'ri ildizlar hosil bo'lardi!

Ushbu inqilobiy kashfiyot matematikada yangi va eng qudratli sonlar to'plami — **Kompleks sonlar** ($\mathbb{C}$) ning vujudga kelishiga asos soldi. Bugungi kunda kvant mexanikasi, elektrotexnika (o'zgaruvchan tok hisobi), aerodinamika va fraktallar kompleks sonlarsiz mavjud bo'la olmaydi.

---

## 1. Mavhum birlik $i$ va uning darajalari

> **Ta'rif:** Kvadrati $-1$ ga teng bo'lgan maxsus matematik miqdor **mavhum birlik** (inglizcha *imaginary unit*) deyiladi va $i$ harfi bilan belgilanadi:
>
> 
$$
> i^2 = -1 \quad \text{yoki} \quad i = \sqrt{-1}
> 
$$

### $i$ ning darajalari davriyligi:
Mavhum birlik $i$ ning butun darajalari har 4 qadamda aynan takrorlanadi:
- $i^1 = i$
- $i^2 = -1$
- $i^3 = i^2 \cdot i = -i$
- $i^4 = (i^2)^2 = (-1)^2 = 1$
- $i^5 = i, \quad i^6 = -1, \quad i^7 = -i, \quad i^8 = 1 \dots$

> **Hisoblash layfhaki:** $i^n$ ni hisoblash uchun daraja $n$ ni $4$ ga bo'lib, faqat qoldiqqa qaraymiz:
> $$ i^{4k + r} = i^r \quad (r \in \{0, 1, 2, 3\})$$
> *Misol:* $i^{2026} = i^{4 \cdot 506 + 2} = i^2 = -1$.

---

## 2. Kompleks sonning algebraik shakli

> **Ta'rif:** Ushbu ko'rinishdagi ifoda **kompleks son** deb ataladi:
>
> 
$$
> z = a + bi
> 
$$
>
> bu yerda:
> - $a \in \mathbb{R}$ — kompleks sonning **haqiqiy qismi** ($a = \operatorname{Re}(z)$);
> - $b \in \mathbb{R}$ — kompleks sonning **mavhum qismi** ($b = \operatorname{Im}(z)$);
> - $i$ — mavhum birlik.

### Xususiy hollar:
1. Agar $b = 0$ bo'lsa: $z = a$ — oddiy **haqiqiy son**. Demak, barcha haqiqiy sonlar kompleks sonlar oilasiga kiradi: $\mathbb{R} \subset \mathbb{C}$.
2. Agar $a = 0$ va $b \neq 0$ bo'lsa: $z = bi$ — **sof mavhum son** (masalan, $3i, -\sqrt{5}i$).
3. **Ikki kompleks sonning tengligi:**
   $$a + bi = c + di \iff a = c \quad \text{va} \quad b = d$$
   *(Haqiqiy qismlar o'zaro, mavhum qismlar o'zaro teng bo'lishi shart!)*

---

## 3. Qo'shma kompleks son ($\bar{z}$)

$z = a + bi$ sonining mavhum qismi ishorasi qarama-qarshisiga o'zgartirilgan son uning **qo'shma kompleks soni** deyiladi va $\bar{z}$ bilan belgilanadi:

$$
\bar{z} = a - bi
$$

### Qo'shma sonlarning ajoyib xossalari:
1. $z + \bar{z} = (a + bi) + (a - bi) = 2a = 2\operatorname{Re}(z)$ (doimo haqiqiy son!).
2. **Eng muhim xossa:**
   $$z \cdot \bar{z} = (a + bi)(a - bi) = a^2 - (bi)^2 = a^2 - b^2(-1) = a^2 + b^2$$
   Ko'rib turganingizdek, kompleks sonni o'z qo'shmasiga ko'paytirganda mavhum $i$ butunlay yo'qolib, **nomanfiy haqiqiy son** hosil bo'ladi!

---

## 4. Kompleks son moduli ($|z|$) va geometrik tasviri

Haqiqiy sonlar 1D sonlar o'qida yotsa, kompleks sonlar **2D kompleks tekislikda** tasvirlanadi:
- Gorizontal o'q ($Ox$) — **haqiqiy o'q** ($\operatorname{Re}$);
- Vertikal o'q ($Oy$) — **mavhum o'q** ($\operatorname{Im}$).

Har bir $z = a + bi$ soniga tekislikdagi $(a; b)$ nuqta yoki boshlang'ich nuqtadan chiquvchi $\vec{r} = (a; b)$ vektor mos keladi.

> **Modul ta'rifi:** Koordinatalar boshidan $z$ nuqtagacha bo'lgan masofa kompleks sonning **moduli** deyiladi:
>
> 
$$
> |z| = r = \sqrt{a^2 + b^2}
> 
$$
> Shuningdek: $|z|^2 = z \cdot \bar{z}$.

### Geometrik sohalar (Imtihon savollari):
- $|z - z_0| = R$ — markazi $z_0$ nuqtada, radiusi $R$ bo'lgan **aylana**;
- $|z - z_0| \le R$ — markazi $z_0$ bo'lgan **doira**;
- $|z - z_1| = |z - z_2|$ — $z_1$ va $z_2$ nuqtalarni tutashtiruvchi kesmaning **o'rta perpendikulyar to'g'ri chizig'i**.

---

## 5. Amaliy misollar va batafsil yechimlar

### 1-misol: Kvadrat tenglamani kompleks sohada yechish
Tenglamani yeching:
$$
x^2 - 6x + 25 = 0
$$

**Yechilishi:**
1. Diskriminantni hisoblaymiz:
   $$D = (-6)^2 - 4(1)(25) = 36 - 100 = -64$$
2. Maktabda bu yerda to'xtalardi. Kompleks sohada esa:
   $$\sqrt{D} = \sqrt{-64} = \sqrt{64 \cdot (-1)} = \sqrt{64} \cdot \sqrt{-1} = 8i$$
3. Ildizlar formulasi:
   $$x_{1,2} = \frac{-b \pm \sqrt{D}}{2a} = \frac{6 \pm 8i}{2} = 3 \pm 4i$$

**Javob:** $x_1 = 3 + 4i, \quad x_2 = 3 - 4i$ (Ildizlar o'zaro qo'shma kompleks juftlik bo'ladi).

---

### 2-misol: $i$ ning katta darajasini hisoblash
Hisoblang:
$$
i^{2027} - i^{102}
$$

**Yechilishi:**
1. $2027$ ni $4$ ga bo'lamiz: $2027 = 4 \cdot 506 + 3$(qoldiq $3$).
   $$i^{2027} = i^3 = -i$$
2. $102$ ni $4$ ga bo'lamiz: $102 = 4 \cdot 25 + 2$(qoldiq $2$).
   $$i^{102} = i^2 = -1$$
3. Ayiramiz:
   $$i^{2027} - i^{102} = (-i) - (-1) = 1 - i$$

**Javob:** $1 - i$

---

### 3-misol: Modul va qo'shma son
$z = -3 + 4i$ soni uchun $\bar{z}$, $|z|$ va $z \cdot \bar{z}$ ni toping.

**Yechilishi:**
- Haqiqiy qism: $a = -3$, mavhum qism: $b = 4$.
- Qo'shma son: $\bar{z} = -3 - 4i$.
- Modul: $|z| = \sqrt{(-3)^2 + 4^2} = \sqrt{9 + 16} = \sqrt{25} = 5$.
- Ko'paytma: $z \cdot \bar{z} = |z|^2 = 5^2 = 25$.

**Javob:** $\bar{z} = -3 - 4i, \quad |z| = 5, \quad z \bar{z} = 25$

---

### 4-misol: Tenglik shartidan noma'lumlarni topish
Tenglamani qanoatlantiruvchi haqiqiy $x$ va $y$ sonlarni toping:
$$
(2x + 3y) + (x - 2y)i = 8 - 3i
$$

**Yechilishi:**
Ikki kompleks sonning tenglik qoidasi bo'yicha haqiqiy qismlarni o'zaro, mavhum qismlarni o'zaro tenglashtiramiz:
$$
\begin{cases}
2x + 3y = 8 \\
x - 2y = -3
\end{cases}
$$
2-tenglamadan $x = 2y - 3$ ni 1-tenglamaga qo'yamiz:
$$
2(2y - 3) + 3y = 8 \implies 4y - 6 + 3y = 8 \implies 7y = 14 \implies y = 2
$$
$x$ ni topamiz:
$$
x = 2(2) - 3 = 1
$$

**Javob:** $x = 1, \quad y = 2$

---

### 5-misol: Kompleks tekislikdagi soha geometriyasi
Quyidagi tenglama qanday geometrik shaklni ifodalaydi:
$$
|z - (2 - 3i)| = 4
$$

**Yechilishi:**
$z = x + yi$ deb qo'yamiz:
$$
|(x - 2) + (y + 3)i| = 4
$$
Modul formulasini qo'llaymiz:
$$
\sqrt{(x - 2)^2 + (y + 3)^2} = 4 \implies (x - 2)^2 + (y + 3)^2 = 16
$$
Bu esa markazi $z_0 = (2; -3)$ nuqtada, radiusi $R = 4$ bo'lgan **aylana** tenglamasidir!

**Javob:** Markazi $(2; -3)$ da va radiusi $4$ bo'lgan aylana.

---

## ⚠️ Talabalar ko'p yo'l qo'yadigan 3 ta jiddiy xato

1. **Mavhum qismga $i$ ni qo'shib aytish:**
   > $z = 3 + 4i$ da mavhum qism $\operatorname{Im}(z) = 4$ dir! Talabalar ko'pincha $\operatorname{Im}(z) = 4i$ deb xato aytishadi. Mavhum qism bu haqiqiy son bo'lib, $i$ oldidagi koeffitsiyentdir.

2. **$i^2 = 1$ deb adashtirish:**
   > Doimo esda tuting: $i^2 = -1$! Juft daraja bo'lgani uchun $1$ chiqadi deb o'ylash eng ko'p uchraydigan chalkashlikdir.

3. **Kompleks sonlarni bir-biri bilan taqqoslash ($z_1 > z_2$):**
   > Kompleks sonlar maydonida **"katta" yoki "kichik" tushunchasi mavjud emas!** Masalan, $3 + 4i > 2 + 5i$ deyish ma'noga ega emas. Faqat ularning **modullarini** (masofalarini) taqqoslash mumkin: $|3 + 4i| = 5 \le \sqrt{29} = |2 + 5i|$.

---

## 💡 Ustozdan maslahat

Kompleks son qatnashgan har qanday noma'lumli tenglamada agar nima qilishni bilmay qolsangiz, universal usulni qo'llang:
$z$ o'rniga $x + iy$ qo'ying, barcha qavslarni oching va haqiqiy qismlarni alohida, mavhum qismlarni alohida guruhlab ikkita tenglama sistemasiga keltiring!

---

## ✍️ Mustaqil yechish uchun mashqlar

1. $x^2 + 2x + 5 = 0$ tenglamaning kompleks ildizlarini toping.
2. $i^{105}$ nimaga teng?
3. $z = 5 - 12i$ ning moduli $|z|$ ni hisoblang.
4. $|z + 1| \le 2$ tengsizlik kompleks tekislikda nimani ifodalaydi?

<details style="margin-top: 1rem; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); cursor: pointer;">
<summary style="font-weight: 700; color: var(--primary);">To'liq yechimlar va javoblar</summary>

**1-masala:** $D = 4 - 20 = -16 = (4i)^2$. $x_{1,2} = \frac{-2 \pm 4i}{2} = -1 \pm 2i$.

    

**2-masala:** $105 = 4(26) + 1 \implies i^1 = i$.

    

**3-masala:** $|z| = \sqrt{5^2 + (-12)^2} = \sqrt{25 + 144} = \sqrt{169} = 13$.

    

**4-masala:** Markazi $(-1; 0)$ nuqtada bo'lgan va radiusi $R \le 2$ bo'lgan yopiq doira (chegarasi bilan birga).

</details>
