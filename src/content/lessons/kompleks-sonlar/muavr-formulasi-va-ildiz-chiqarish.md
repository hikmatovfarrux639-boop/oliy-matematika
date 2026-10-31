---
title: "Muavr formulasi va kompleks sondan ildiz chiqarish"
module: "kompleks-sonlar"
order: 4
description: "Avraam de Muavr formulasi, kompleks sondan n-darajali ildiz chiqarish, ildizlarning geometrik muntazam ko'pburchagi va ko'p usulli yechimlar."
---

## 📌 Kirish va Geometrik/Fizik Mohiyat

Agar bizdan quyidagi sonni hisoblash talab qilinsa:
$$
z = (1 + i\sqrt{3})^{18}
$$
uni algebraik shaklda qavslarni ochish yoki Nyuton binomi orqali 19 ta hadga yoyib chiqish yuzlab murakkab arifmetik amallarga olib keladi va hisoblash jarayonida adashish ehtimoli 99% ga yetadi.

Fransuz-ingliz matematigi **Avraam de Muavr (Abraham de Moivre, 1667–1754)** kompleks sonlarning trigonometrik shaklidan foydalanib, har qanday kompleks sonni istalgan butun darajaga ko'tarish hamda undan $n$-darajali ildiz chiqarishning go'zal va tezkor formulasini kashf etdi.

```
       Im(z) ^                 w1 (* 120°)
             |                 |
             |             .---*---.
             |          .-'    |    '-.
             |         /       |       \
    w2 *-----+--------+--------+--------+-----> Re(z)
   (240°)    |         \       |       /     w0 (* 0°)
             |          '-.    |    .-'
             |             '---*---'
             |                 |
```

### Geometrik Mohiyat: Qisqarish, Cho'zilish va Aylanma Simmetriya
1. **Ko'paytirish va Darajaga ko'tarish:**
   Kompleks sonlar ko'paytirilganda ularning modullari ko'payadi, argumentlari (burchaklari) esa qo'shiladi:
   $$
   |z_1 z_2| = |z_1| \cdot |z_2|, \quad \arg(z_1 z_2) = \arg z_1 + \arg z_2
   $$
   Sonni $n$-darajaga ko'targanda uning moduli $r^n$ marta kattalashadi (yoki kichrayadi), burchagi esa $n$ marta buriladi ($n \varphi$).
2. **Ildiz chiqarish va Muntazam Ko'pburchak:**
   Haqiqiy sonlar maydonida musbat sondan olingan arifmetik ildiz bitta musbat songa teng (masalan, $\sqrt[4]{16} = 2$). Ammo kompleks sonlar maydonida **noldan farqli har qanday sondan $n$-darajali ildiz chiqarilganda roppa-rosa $n$ ta turli kompleks ildiz hosil bo'ladi!**
   Geometrik jihatdan ushbu $n$ ta ildiz kompleks tekislikda radiusi $R = \sqrt[n]{r}$ bo'lgan aylanada joylashadi va **muntazam $n$-burchakning** uchlarini hosil qiladi!

### Fizik Tatbiqlar
- **Uch fazali elektr zanjirlari:** Elektrotexnikada sanoat o'zgaruvchan toki 3 ta fazadan iborat bo'lib, ularning kuchlanishlari bir-biriga nisbatan $120^\circ$ ($\frac{2\pi}{3}$) burchakka siljigan. Bu tizim matematik jihatdan $1$ sonining 3-darajali ildizlari $\sqrt[3]{1}$ bilan to'liq tavsiflanadi!
- **Tezkor Furye almashtirishi (FFT):** Raqamli signallarni qayta ishlash, audio/video kompressiyasi va aloqa tizimlarida barcha algoritmlar birlik ildizlari $\sqrt[n]{1}$ (aylanma matritsalar) asosiga qurilgan.

---

## 📐 Asosiy Nazariya, Qoidalar va Teoremalar

### 1. Kompleks sonning trigonometrik va ko'rsatkichli shakllari

Har qanday noldan farqli $z = x + i y$ kompleks sonini uning moduli $r$ va argumenti $\varphi$ orqali yozish mumkin:
$$
z = r (\cos\varphi + i \sin\varphi) = r e^{i\varphi}
$$
Bu yerda:
- **Modul:** $r = |z| = \sqrt{x^2 + y^2} \ge 0$;
- **Bosh argument:** $\varphi = \arg z \in (-\pi, \pi]$ (yoki $[0, 2\pi)$):
  $$
  \varphi = \begin{cases}
  \operatorname{arctg}\left(\frac{y}{x}\right), & x > 0 \\
  \operatorname{arctg}\left(\frac{y}{x}\right) + \pi, & x < 0, \, y \ge 0 \\
  \operatorname{arctg}\left(\frac{y}{x}\right) - \pi, & x < 0, \, y < 0 \\
  +\frac{\pi}{2}, & x = 0, \, y > 0 \\
  -\frac{\pi}{2}, & x = 0, \, y < 0
  \end{cases}
  $$

---

### 2. Muavr formulasi ($z^n$)

> **Teorema (Avraam de Muavr):**
> Agar $z = r(\cos\varphi + i\sin\varphi)$ kompleks son berilgan bo'lsa, uning har qanday butun $n \in \mathbb{Z}$ darajasi quyidagi formula bo'yicha hisoblanadi:
> $$
> z^n = r^n \left[ \cos(n\varphi) + i \sin(n\varphi) \right]
> $$
> Eyler ko'rsatkichli shaklida bu formula yanada ixcham ko'rinishga ega:
> $$
> (r e^{i\varphi})^n = r^n e^{i n \varphi}
> $$

Xususan, birlik aylanadagi sonlar uchun ($r = 1$):
$$
(\cos\varphi + i\sin\varphi)^n = \cos(n\varphi) + i\sin(n\varphi)
$$

#### Isboti (Matematik induksiya usuli):
1. **Baza ($n = 1$):** $(\cos\varphi + i\sin\varphi)^1 = \cos(1\cdot\varphi) + i\sin(1\cdot\varphi)$ — tenglik o'rinli.
2. **Faraz:** Formula $n = k$ uchun to'g'ri deb faraz qilaylik:
   $$
   (\cos\varphi + i\sin\varphi)^k = \cos(k\varphi) + i\sin(k\varphi)
   $$
3. **Qadam ($n = k + 1$):**
   $$
   (\cos\varphi + i\sin\varphi)^{k+1} = (\cos\varphi + i\sin\varphi)^k \cdot (\cos\varphi + i\sin\varphi)
   $$
   $$
   = \left[ \cos(k\varphi) + i\sin(k\varphi) \right] \cdot \left[ \cos\varphi + i\sin\varphi \right]
   $$
   Qavslarni ochamiz va $i^2 = -1$ ekanini hisobga olamiz:
   $$
   = \left[ \cos(k\varphi)\cos\varphi - \sin(k\varphi)\sin\varphi \right] + i \left[ \sin(k\varphi)\cos\varphi + \cos(k\varphi)\sin\varphi \right]
   $$
   Trigonometrik qo'shish formulalariga ko'ra:
   $$
   = \cos(k\varphi + \varphi) + i\sin(k\varphi + \varphi) = \cos\left( (k+1)\varphi \right) + i\sin\left( (k+1)\varphi \right)
   $$
   Induksiya qadami isbotlandi.

---

### 3. Kompleks sondan $n$-darajali ildiz chiqarish formulasi

$w^n = z$ tenglamani qanoatlantiruvchi barcha $w$ sonlarni topish — bu $z$ sonidan $n$-darajali ildiz chiqarish demakdir.

> **Teorema (Ildiz chiqarish):**
> Noldan farqli $z = r(\cos\varphi + i\sin\varphi)$ kompleks sondan $n$-darajali ildiz ($n \in \mathbb{N}$) chiqarilganda roppa-rosa $n$ ta turli qiymat hosil bo'ladi va ular quyidagi formula orqali topiladi:
> $$
> w_k = \sqrt[n]{z} = \sqrt[n]{r} \left( \cos\frac{\varphi + 2\pi k}{n} + i \sin\frac{\varphi + 2\pi k}{n} \right)
> $$
> bu yerda $k = 0, 1, 2, \dots, n-1$.

Bu yerda:
- $\sqrt[n]{r}$ — haqiqiy musbat sondan olingan oddiy arifmetik ildiz (barcha $w_k$ larning moduli bir xil: $R = \sqrt[n]{r}$);
- Barcha ildizlar argumentlari bir-biridan aynan $\Delta\varphi = \frac{2\pi}{n}$ burchakka farq qiladi;
- Agar $k = n, n+1, \dots$ qiymatlar berilsa, trigonometrik funksiyalarning $2\pi$ davriyligi tufayli ildizlar yana takrorlanadi. Shuning uchun faqat $k = 0, 1, \dots, n-1$ indekslar olinadi.

---

### 4. 1 dan $n$-darajali ildizlar (Birlik ildizlari)
$z = 1 = 1 \cdot (\cos 0 + i \sin 0)$ sonidan olingan ildizlar:
$$
\varepsilon_k = \sqrt[n]{1} = \cos\frac{2\pi k}{n} + i \sin\frac{2\pi k}{n} = e^{i \frac{2\pi k}{n}}, \quad (k = 0, 1, \dots, n-1)
$$
Asosiy (boshlang'ich) ildiz: $\varepsilon_1 = \cos\frac{2\pi}{n} + i \sin\frac{2\pi}{n}$.
U holda qolgan barcha ildizlar uning darajalari orqali ifodalanadi:
$$
\varepsilon_k = (\varepsilon_1)^k
$$

#### Birlik ildizlarining fundamental xossalari:
1. **Yig'indisi nolga teng:**
   $$
   \sum_{k=0}^{n-1} \varepsilon_k = 1 + \varepsilon_1 + \varepsilon_1^2 + \dots + \varepsilon_1^{n-1} = \frac{1 - \varepsilon_1^n}{1 - \varepsilon_1} = \frac{1 - 1}{1 - \varepsilon_1} = 0 \quad (n \ge 2)
   $$
2. **Ko'paytmasi:**
   $$
   \prod_{k=0}^{n-1} \varepsilon_k = (-1)^{n-1}
   $$

---

## 📝 Qadamma-qadam Yechilgan Universitet Misollari

### 1-misol: Katta darajani Muavr formulasi bilan hisoblash
**Shart:** Sonni hisoblang va javobni algebraik shaklda yozing:
$$
z = (-\sqrt{3} + i)^{18}
$$

**Yechish:**
1. **1-qadam: Qavs ichidagi sonni ajratib olamiz.**
   $$
   z_0 = -\sqrt{3} + i
   $$
   Bu yerda $x = -\sqrt{3}$, $y = 1$.
2. **2-qadam: Modulni hisoblaymiz.**
   $$
   r = |z_0| = \sqrt{(-\sqrt{3})^2 + 1^2} = \sqrt{3 + 1} = \sqrt{4} = 2
   $$
3. **3-qadam: Argumentni topamiz.**
   Nuqta $x < 0, y > 0$ bo'lgani sababli **II chorakda** yotadi:
   $$
   \varphi = \pi - \operatorname{arctg}\left( \frac{1}{\sqrt{3}} \right) = \pi - \frac{\pi}{6} = \frac{5\pi}{6}
   $$
4. **4-qadam: Trigonometrik shaklni tuzamiz.**
   $$
   z_0 = 2 \left( \cos\frac{5\pi}{6} + i \sin\frac{5\pi}{6} \right)
   $$
5. **5-qadam: Muavr formulasini qo'llaymiz ($n = 18$).**
   $$
   z = z_0^{18} = 2^{18} \left[ \cos\left( 18 \cdot \frac{5\pi}{6} \right) + i \sin\left( 18 \cdot \frac{5\pi}{6} \right) \right]
   $$
   Burchakni soddalashtiramiz:
   $$
   18 \cdot \frac{5\pi}{6} = 3 \cdot 5\pi = 15\pi
   $$
   Trigonometrik qiymatlarni hisoblaymiz:
   $$
   \cos(15\pi) = \cos(\pi + 14\pi) = \cos\pi = -1
   $$
   $$
   \sin(15\pi) = \sin(\pi + 14\pi) = \sin\pi = 0
   $$
6. **6-qadam: Natijani topish.**
   $$
   z = 2^{18} (-1 + i \cdot 0) = -2^{18} = -262144
   $$
7. **Javob:**
   $$
   -262144
   $$

---

### 2-misol: 1 sonidan kub ildiz chiqarish va geometrik tahlil
**Shart:** $w^3 = 1$ tenglamaning barcha kompleks ildizlarini toping, ularni kompleks tekislikda tasvirlang va yig'indisi nolga tengligini isbotlang.

**Yechish:**
1. **1-qadam: 1 sonining trigonometrik shakli.**
   $z = 1$: moduli $r = 1$, bosh argumenti $\varphi = 0$.
   $$
   1 = 1 \cdot (\cos 0 + i \sin 0)
   $$
2. **2-qadam: Ildiz chiqarish formulasini yozamiz ($n = 3$).**
   $$
   w_k = \sqrt[3]{1} \left( \cos\frac{0 + 2\pi k}{3} + i \sin\frac{0 + 2\pi k}{3} \right) = \cos\frac{2\pi k}{3} + i \sin\frac{2\pi k}{3}, \quad (k = 0, 1, 2)
   $$
3. **3-qadam: Har bir ildizni hisoblaymiz.**
   - **$k = 0$ bo'lganda:**
     $$
     w_0 = \cos 0 + i \sin 0 = 1
     $$
   - **$k = 1$ bo'lganda:**
     $$
     w_1 = \cos\frac{2\pi}{3} + i \sin\frac{2\pi}{3} = -\frac{1}{2} + i \frac{\sqrt{3}}{2}
     $$
   - **$k = 2$ bo'lganda:**
     $$
     w_2 = \cos\frac{4\pi}{3} + i \sin\frac{4\pi}{3} = -\frac{1}{2} - i \frac{\sqrt{3}}{2}
     $$
4. **4-qadam: Geometrik tasvir.**
   Barcha 3 ta nuqta birlik aylanada ($|w_k| = 1$) yotadi va aylanani teng 3 qismga ($120^\circ$ dan) bo'ladi. Ular **muntazam teng tomonli uchburchakning** uchlaridir!
5. **5-qadam: Yig'indini tekshirish.**
   $$
   w_0 + w_1 + w_2 = 1 + \left( -\frac{1}{2} + i \frac{\sqrt{3}}{2} \right) + \left( -\frac{1}{2} - i \frac{\sqrt{3}}{2} \right) = 1 - \frac{1}{2} - \frac{1}{2} + i \left( \frac{\sqrt{3}}{2} - \frac{\sqrt{3}}{2} \right) = 0
   $$
6. **Javob:**
   $$
   w_0 = 1, \quad w_1 = -\frac{1}{2} + i \frac{\sqrt{3}}{2}, \quad w_2 = -\frac{1}{2} - i \frac{\sqrt{3}}{2}
   $$

---

### 3-misol: Kompleks sondan 4-darajali ildiz chiqarish
**Shart:** Barcha ildizlarni toping:
$$
w = \sqrt[4]{-16}
$$

**Yechish:**
1. **1-qadam: $z = -16$ sonini trigonometrik shaklga keltirish.**
   $z = -16$: moduli $r = |-16| = 16$.
   Nuqta manfiy haqiqiy yarim o'qda yotadi, shuning uchun argument $\varphi = \pi$.
   $$
   -16 = 16 (\cos\pi + i \sin\pi)
   $$
2. **2-qadam: Ildiz chiqarish formulasi ($n = 4$).**
   $$
   w_k = \sqrt[4]{16} \left( \cos\frac{\pi + 2\pi k}{4} + i \sin\frac{\pi + 2\pi k}{4} \right) = 2 \left( \cos\frac{\pi + 2\pi k}{4} + i \sin\frac{\pi + 2\pi k}{4} \right)
   $$
   bu yerda $k \in \{0, 1, 2, 3\}$.
3. **3-qadam: Ildizlarni hisoblaymiz.**
   - **$k = 0$:**
     $$
     \alpha_0 = \frac{\pi}{4} \implies w_0 = 2 \left( \cos\frac{\pi}{4} + i \sin\frac{\pi}{4} \right) = 2 \left( \frac{\sqrt{2}}{2} + i \frac{\sqrt{2}}{2} \right) = \sqrt{2} + i \sqrt{2}
     $$
   - **$k = 1$:**
     $$
     \alpha_1 = \frac{\pi + 2\pi}{4} = \frac{3\pi}{4} \implies w_1 = 2 \left( -\frac{\sqrt{2}}{2} + i \frac{\sqrt{2}}{2} \right) = -\sqrt{2} + i \sqrt{2}
     $$
   - **$k = 2$:**
     $$
     \alpha_2 = \frac{\pi + 4\pi}{4} = \frac{5\pi}{4} \implies w_2 = 2 \left( -\frac{\sqrt{2}}{2} - i \frac{\sqrt{2}}{2} \right) = -\sqrt{2} - i \sqrt{2}
     $$
   - **$k = 3$:**
     $$
     \alpha_3 = \frac{\pi + 6\pi}{4} = \frac{7\pi}{4} \implies w_3 = 2 \left( \frac{\sqrt{2}}{2} - i \frac{\sqrt{2}}{2} \right) = \sqrt{2} - i \sqrt{2}
     $$
4. **4-qadam: Geometrik ma'nosi.**
   Ildizlar radiusi $R = 2$ bo'lgan aylanaga ichki chizilgan **kvadratning** uchlaridir!
5. **Javob:**
   $$
   w \in \{ \sqrt{2} + i \sqrt{2}, \, -\sqrt{2} + i \sqrt{2}, \, -\sqrt{2} - i \sqrt{2}, \, \sqrt{2} - i \sqrt{2} \}
   $$
   Qisqacha: $w = \pm\sqrt{2} \pm i\sqrt{2}$.

---

### 4-misol: Trigonometrik karrali burchak formulalarini keltirib chiqarish
**Shart:** Muavr formulasi yordamida $\cos(3\varphi)$ va $\sin(3\varphi)$ ni $\cos\varphi$ va $\sin\varphi$ orqali ifodalang.

**Yechish:**
1. **1-qadam: Muavr formulasi bo'yicha chap tomon.**
   $$
   (\cos\varphi + i \sin\varphi)^3 = \cos(3\varphi) + i \sin(3\varphi)
   $$
2. **2-qadam: Nyuton binomi bo'yicha o'ng tomonni ochamiz.**
   $$
   (a + b)^3 = a^3 + 3a^2 b + 3a b^2 + b^3
   $$
   $a = \cos\varphi$ va $b = i \sin\varphi$ deb olamiz ($i^2 = -1, i^3 = -i$):
   $$
   (\cos\varphi + i \sin\varphi)^3 = \cos^3\varphi + 3\cos^2\varphi (i \sin\varphi) + 3\cos\varphi (i \sin\varphi)^2 + (i \sin\varphi)^3
   $$
   $$
   = \cos^3\varphi + 3i \cos^2\varphi \sin\varphi - 3\cos\varphi \sin^2\varphi - i \sin^3\varphi
   $$
3. **3-qadam: Haqiqiy va mavhum qismlarni ajratamiz.**
   $$
   = \left( \cos^3\varphi - 3\cos\varphi \sin^2\varphi \right) + i \left( 3\cos^2\varphi \sin\varphi - \sin^3\varphi \right)
   $$
4. **4-qadam: Tenglashtirish.**
   Ikki kompleks son teng bo'lishi uchun ularning haqiqiy va mavhum qismlari teng bo'lishi kerak:
   - **Haqiqiy qismlar:**
     $$
     \cos(3\varphi) = \cos^3\varphi - 3\cos\varphi \sin^2\varphi = \cos^3\varphi - 3\cos\varphi (1 - \cos^2\varphi) = 4\cos^3\varphi - 3\cos\varphi
     $$
   - **Mavhum qismlar:**
     $$
     \sin(3\varphi) = 3\cos^2\varphi \sin\varphi - \sin^3\varphi = 3(1 - \sin^2\varphi)\sin\varphi - \sin^3\varphi = 3\sin\varphi - 4\sin^3\varphi
     $$
5. **Javob:**
   $$
   \cos(3\varphi) = 4\cos^3\varphi - 3\cos\varphi, \quad \sin(3\varphi) = 3\sin\varphi - 4\sin^3\varphi
   $$

---

## ⚠️ Talabalar Eng Ko'p Yo'l Qo'yadigan Xatolar va Tuzoqlar

1. **Ildiz chiqarishda bitta qiymat bilan cheklanish:**
   Maktab algebrasiga ko'nikib qolgan talabalar $\sqrt[3]{-8} = -2$ deb faqat bitta javob yozishadi.
   - ❌ **Xato:** $\sqrt[3]{-8} = -2$
   - ✅ **To'g'ri:** Kompleks tekislikda $n$-darajali ildiz har doim **$n$ ta har xil yechimga** ega! $\sqrt[3]{-8}$ ning 3 ta ildizi bor: $-2$, $1 + i\sqrt{3}$, $1 - i\sqrt{3}$.

2. **Davrni qo'shishda qavsni unutish:**
   Ildiz chiqarishda $\frac{\varphi + 2\pi k}{n}$ o'rniga ba'zilar $\frac{\varphi}{n} + 2\pi k$ deb yozadilar.
   - ❌ **Xato:** $\frac{\varphi}{n} + 2\pi k$
   - ✅ **To'g'ri:** Butun yig'indi $n$ ga bo'linadi: $\frac{\varphi + 2\pi k}{n}$! Aks holda barcha burchaklar bir xil bo'lib qoladi.

3. **Chorakni aniqlashda adashish:**
   $z = -1 - i$ soni berilgan bo'lsa, $\operatorname{arctg}\left(\frac{-1}{-1}\right) = \operatorname{arctg}(1) = \frac{\pi}{4}$ deb I chorak burchagini olib qo'yish. Ammo $x < 0, y < 0$ bo'lgani sababli bu son **III chorakda** yotadi va to'g'ri argument $\varphi = -\pi + \frac{\pi}{4} = -\frac{3\pi}{4}$ bo'ladi!

4. **Manfiy darajada modulni teskari qilmaslik:**
   $z^{-n}$ hisoblanayotganda modul $r^{-n} = \frac{1}{r^n}$ bo'lishi kerak. Ko'pchilik burchakni manfiy qilib, modulni $r^n$ qoldiradi.

---

## 🎯 Mustaqil Yechish Uchun Amaliy Mashqlar va Yechimlar

### 1-mashq
Muavr formulasidan foydalanib, sonni hisoblang:
$$
z = (1 - i)^{12}
$$

<details>
<summary>👉 Bosqichma-bosqich yechimni ko'rish</summary>

1. **Modul va argument:**
   $z_0 = 1 - i \implies r = \sqrt{1^2 + (-1)^2} = \sqrt{2}$.
   Nuqta IV chorakda: $\varphi = -\frac{\pi}{4}$.
2. **Trigonometrik shakl:**
   $$
   z_0 = \sqrt{2} \left[ \cos\left(-\frac{\pi}{4}\right) + i \sin\left(-\frac{\pi}{4}\right) \right]
   $$
3. **Muavr formulasi ($n = 12$):**
   $$
   z = (\sqrt{2})^{12} \left[ \cos\left( 12 \cdot \left(-\frac{\pi}{4}\right) \right) + i \sin\left( 12 \cdot \left(-\frac{\pi}{4}\right) \right) \right]
   $$
   $(\sqrt{2})^{12} = 2^6 = 64$.
   Burchak: $12 \cdot \left(-\frac{\pi}{4}\right) = -3\pi$.
   $$
   \cos(-3\pi) = \cos(3\pi) = -1, \quad \sin(-3\pi) = 0
   $$
4. **Natija:**
   $$
   z = 64 \cdot (-1) = -64
   $$

**Javob:** $-64$.
</details>

---

### 2-mashq
Tenglamaning barcha ildizlarini toping:
$$
z^3 + 8i = 0
$$

<details>
<summary>👉 Bosqichma-bosqich yechimni ko'rish</summary>

1. **Tenglamani keltiramiz:**
   $$
   z^3 = -8i
   $$
2. **$-8i$ sonini trigonometrik shaklga keltiramiz:**
   Modul: $r = |-8i| = 8$.
   Argument: nuqta manfiy mavhum yarim o'qda yotadi: $\varphi = -\frac{\pi}{2}$.
   $$
   -8i = 8 \left[ \cos\left(-\frac{\pi}{2}\right) + i \sin\left(-\frac{\pi}{2}\right) \right]
   $$
3. **Ildiz chiqarish formulasi ($n = 3$):**
   $$
   z_k = \sqrt[3]{8} \left[ \cos\left( \frac{-\frac{\pi}{2} + 2\pi k}{3} \right) + i \sin\left( \frac{-\frac{\pi}{2} + 2\pi k}{3} \right) \right] = 2 \left[ \cos\left( \frac{-\pi + 4\pi k}{6} \right) + i \sin\left( \frac{-\pi + 4\pi k}{6} \right) \right]
   $$
4. **Ildizlar ($k = 0, 1, 2$):**
   - **$k = 0$:**
     $$
     \alpha_0 = -\frac{\pi}{6} \implies z_0 = 2 \left( \frac{\sqrt{3}}{2} - \frac{1}{2}i \right) = \sqrt{3} - i
     $$
   - **$k = 1$:**
     $$
     \alpha_1 = \frac{-\pi + 4\pi}{6} = \frac{3\pi}{6} = \frac{\pi}{2} \implies z_1 = 2 (0 + i) = 2i
     $$
   - **$k = 2$:**
     $$
     \alpha_2 = \frac{-\pi + 8\pi}{6} = \frac{7\pi}{6} \implies z_2 = 2 \left( -\frac{\sqrt{3}}{2} - \frac{1}{2}i \right) = -\sqrt{3} - i
     $$

**Javob:** $z \in \{ \sqrt{3} - i, \, 2i, \, -\sqrt{3} - i \}$.
</details>

---

### 3-mashq
$\sqrt{i}$ ning barcha qiymatlarini toping va ularning kvadratlari rostdan ham $i$ ga tengligini tekshiring.

<details>
<summary>👉 Bosqichma-bosqich yechimni ko'rish</summary>

1. **$z = i$ ning trigonometrik shakli:**
   $r = 1$, $\varphi = \frac{\pi}{2}$.
   $$
   i = 1 \cdot \left( \cos\frac{\pi}{2} + i \sin\frac{\pi}{2} \right)
   $$
2. **Ildizlar ($n = 2$):**
   $$
   w_k = \cos\frac{\frac{\pi}{2} + 2\pi k}{2} + i \sin\frac{\frac{\pi}{2} + 2\pi k}{2}, \quad (k = 0, 1)
   $$
   - **$k = 0$:**
     $$
     w_0 = \cos\frac{\pi}{4} + i \sin\frac{\pi}{4} = \frac{\sqrt{2}}{2} + i \frac{\sqrt{2}}{2} = \frac{1 + i}{\sqrt{2}}
     $$
   - **$k = 1$:**
     $$
     w_1 = \cos\frac{5\pi}{4} + i \sin\frac{5\pi}{4} = -\frac{\sqrt{2}}{2} - i \frac{\sqrt{2}}{2} = -\frac{1 + i}{\sqrt{2}}
     $$
3. **Tekshirish:**
   $$
   w_0^2 = \left( \frac{1 + i}{\sqrt{2}} \right)^2 = \frac{1 + 2i - 1}{2} = \frac{2i}{2} = i
   $$
   Ayniyat to'liq bajarildi!

**Javob:** $\pm \frac{1 + i}{\sqrt{2}}$.
</details>

---

## 💡 Imtihon Layfhaklari va Tezkor Maslahatlar

1. **Ildizlarni aylanada qadamma-qadam yasash:**
   Birinchi $w_0$ ildizni topganingizdan keyin, qolgan ildizlar uchun formulani qayta hisoblab o'tirmang! Shunchaki burchakka doimiy qadam $\Delta\varphi = \frac{360^\circ}{n}$ ni qo'shib keting:
   - $n = 3$ bo'lsa: $+120^\circ$;
   - $n = 4$ bo'lsa: $+90^\circ$;
   - $n = 6$ bo'lsa: $+60^\circ$.

2. **Ildizlar yig'indisini tekshiruvchi "sehrli filtr":**
   Topilgan barcha ildizlarni qo'shib ko'ring: agar ularning yig'indisi **$0$ chiqmasa**, demak qayerdadir arifmetik ishora xatosi ketgan!

3. **Oddiy sonlarning trigonometrik argumentlarini yodda tutish:**
   - $1 \implies \varphi = 0$
   - $-1 \implies \varphi = \pi$
   - $i \implies \varphi = \pi/2$
   - $-i \implies \varphi = -\pi/2$
   Bu 4 ta asosiy nuqtaning argumentini ko'rgan zahoti yozish orqali 2-3 daqiqa vaqtingizni tejaysiz.
