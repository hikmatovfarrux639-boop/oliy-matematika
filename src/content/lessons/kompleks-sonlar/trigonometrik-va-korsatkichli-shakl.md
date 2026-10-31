---
title: "Kompleks sonning trigonometrik va ko'rsatkichli (Eyler) shakli"
module: "kompleks-sonlar"
order: 3
description: "Modul va argument (φ), Eyler formulasi, geometrik ko'paytirish va bo'lish, yuqori darajalarni 3 xil usulda hisoblash hamda imtihon tuzoqlari."
---

## Kirish: Nega algebraik shakl yetarli emas?

Agar sizdan $(1 + i\sqrt{3})^{60}$ ni hisoblash so'ralsa, qavslarni oltmish marta ochib Nyuton binomi orqali ko'paytirish deyarli imkonsiz! Xuddi shuningdek, kompleks sondan $n$-darajali ildiz chiqarish algebraik shaklda juda mashaqqatli.

Shu sababli buyuk matematik Leonard Eyler kompleks sonlarni **trigonometrik** va **ko'rsatkichli** shaklga o'tkazish usulini yaratdi. Bu usul yordamida har qanday yuqori darajaga ko'tarish sanoqli soniyalarda hal bo'ladi!

---

## 1. Modul va Argument ($\varphi$)

Kompleks tekislikda har bir $z = a + bi$ soniga $(a; b)$ nuqta mos keladi. Ushbu nuqtani to'g'ri burchakli Dekart koordinatalari o'rniga **qutb koordinatalari** ($r, \varphi$) orqali ifodalash mumkin:

1. **Modul ($r$):** Boshlang'ich nuqtadan nuqtagacha bo'lgan masofa:
   $$r = |z| = \sqrt{a^2 + b^2}$$
2. **Argument ($\varphi$):** Musbat haqiqiy yarim o'q bilan radius-vektor orasidagi burchak (radianda):
   $$\cos\varphi = \frac{a}{r}, \quad \sin\varphi = \frac{b}{r}$$

Bosh argument $\varphi = \arg(z)$ odatda $(-\pi; \pi]$ oralig'ida olinadi:
- **I chorak ($a > 0, b > 0$):** $\varphi = \operatorname{arctg}\left(\frac{b}{a}\right)$
- **II chorak ($a < 0, b > 0$):** $\varphi = \pi - \operatorname{arctg}\left|\frac{b}{a}\right|$
- **III chorak ($a < 0, b < 0$):** $\varphi = -\pi + \operatorname{arctg}\left|\frac{b}{a}\right|$
- **IV chorak ($a > 0, b < 0$):** $\varphi = -\operatorname{arctg}\left|\frac{b}{a}\right|$

---

## 2. Trigonometrik va Ko'rsatkichli (Eyler) shakllar

### Trigonometrik shakl:
$a = r\cos\varphi$ va $b = r\sin\varphi$ ekanligidan:
$$
z = r(\cos\varphi + i\sin\varphi)
$$

### Eyler formulasi va Ko'rsatkichli shakl:
Leonard Eyler kashf etgan fundamental bog'liqlik:
$$
e^{i\varphi} = \cos\varphi + i\sin\varphi
$$
Bu formula orqali kompleks son ixcham **ko'rsatkichli shakl**da yoziladi:
$$
z = r e^{i\varphi}
$$

> **Eyler ayniyati (Matematikaning eng go'zal formulasi):**
> Agar $\varphi = \pi$ deb olsak: $\cos\pi = -1, \sin\pi = 0 \implies e^{i\pi} + 1 = 0$.
> Unda matematikaning 5 ta eng muhim o'zgarmasi birlashgan: $e, i, \pi, 1, 0$!

---

## 3. Geometrik ko'paytirish va bo'lish

Ko'rsatkichli shaklda amallar nihoyatda qulaylashadi:
- **Ko'paytirish:**
  
$$
  z_1 \cdot z_2 = (r_1 e^{i\varphi_1}) \cdot (r_2 e^{i\varphi_2}) = (r_1 r_2) e^{i(\varphi_1 + \varphi_2)}
  
$$
  > **Qoida:** Kompleks sonlar ko'paytirilganda ularning **modullari ko'paytiriladi**, **argumentlari esa qo'shiladi**! (Geometriyada: vektor buriladi va cho'ziladi).

- **Bo'lish:**
  
$$
  \frac{z_1}{z_2} = \left(\frac{r_1}{r_2}\right) e^{i(\varphi_1 - \varphi_2)}
  
$$
  > **Qoida:** Bo'linganda **modullar bo'linadi**, **argumentlar ayriladi**!

---

## 4. Amaliy masalalar va ko'p usulli yechimlar

### 1-masala: Darajaga ko'tarishni 3 xil usulda hisoblash

Hisoblang:
$$
A = (1 + i\sqrt{3})^{12}
$$

#### 1-usul: Eyler ko'rsatkichli shakli orqali
1. $z = 1 + i\sqrt{3}$ uchun:
   - $a = 1 > 0, b = \sqrt{3} > 0$ (I chorak).
   - Modul: $r = \sqrt{1^2 + (\sqrt{3})^2} = \sqrt{1 + 3} = \sqrt{4} = 2$.
   - Argument: $\varphi = \operatorname{arctg}\left(\frac{\sqrt{3}}{1}\right) = \frac{\pi}{3}$.
2. Ko'rsatkichli shakl:
   
$$
   z = 2 e^{i\frac{\pi}{3}}
   
$$
3. 12-darajaga ko'taramiz:
   
$$
   z^{12} = \left(2 e^{i\frac{\pi}{3}}\right)^{12} = 2^{12} \cdot e^{i \cdot \frac{12\pi}{3}} = 4096 \cdot e^{i \cdot 4\pi}
   
$$
4. $e^{i \cdot 4\pi} = \cos(4\pi) + i\sin(4\pi) = 1 + 0 = 1$.
   Demak:
   
$$
   A = 4096 \cdot 1 = 4096
   
$$

#### 2-usul: Muavr trigonometrik formulasi
$$
z^{12} = 2^{12} \left[\cos\left(12 \cdot \frac{\pi}{3}\right) + i\sin\left(12 \cdot \frac{\pi}{3}\right)\right] = 4096(\cos 4\pi + i\sin 4\pi) = 4096(1 + 0) = 4096
$$

#### 3-usul: Kvadrat orqali algebraik almashtirish
$$
(1 + i\sqrt{3})^3 = 1^3 + 3(1)^2(i\sqrt{3}) + 3(1)(i\sqrt{3})^2 + (i\sqrt{3})^3 = 1 + 3\sqrt{3}i - 9 - 3\sqrt{3}i = -8
$$
Endi 4-darajaga ko'taramiz:
$$
A = \left[(1 + i\sqrt{3})^3\right]^4 = (-8)^4 = 4096
$$
Uchala usul ham aynan bir xil to'g'ri natijani berdi!

---

### 2-masala: Kasr ko'rinishidagi ifodani darajaga ko'tarish

Hisoblang:
$$
B = \left(\frac{1 + i}{1 - i}\right)^{20}
$$

#### Yechish:
Avval qavs ichidagi kasrni algebraik soddalashtiramiz (surat va maxrajni maxrajning qo'shmasi $1+i$ ga ko'paytiramiz):
$$
\frac{1 + i}{1 - i} = \frac{(1 + i)(1 + i)}{(1 - i)(1 + i)} = \frac{1 + 2i + i^2}{1 - i^2} = \frac{1 + 2i - 1}{1 - (-1)} = \frac{2i}{2} = i
$$
Demak, kasr shunchaki mavhum birlik $i$ ga teng ekan!
Endi 20-darajaga ko'taramiz:
$$
B = i^{20} = (i^4)^5 = 1^5 = 1
$$
**Javob:** $1$.

---

## 5. Imtihondagi asosiy tuzoqlar

> [!WARNING] Imtihondagi tuzoqlar
> 1. **Argument $\varphi$ ni topishda chorakni inobatga olmaslik:**
>    Eng xavfli xato — $z = -1 - i$ soni berilganda $\varphi = \operatorname{arctg}\left(\frac{-1}{-1}\right) = \operatorname{arctg}(1) = \frac{\pi}{4}$ deb yozishdir! E'tibor bering, $a = -1 < 0, b = -1 < 0$ bo'lib, nuqta **III chorakda** yotadi. Demak, uning argumenti $\varphi = -\pi + \frac{\pi}{4} = -\frac{3\pi}{4}$(yoki $\frac{5\pi}{4}$) bo'ladi!
> 2. **Trigonometrik shaklda minus ishorasi:**
>    Agar ifoda $z = 2(\cos\frac{\pi}{6} - i\sin\frac{\pi}{6})$ deb berilgan bo'lsa, bu kanonik trigonometrik shakl emas (chunki oradagi ishora plyus bo'lishi shart). Kosinus juft va sinus toqligidan foydalanib minusni ichkariga kiritish kerak: $z = 2\left[\cos\left(-\frac{\pi}{6}\right) + i\sin\left(-\frac{\pi}{6}\right)\right]$.
> 3. **Modul manfiy bo'lishi mumkin emas:**
>    $z = -3(\cos\varphi + i\sin\varphi)$ ko'rinishida $r = -3$ deb aytish xatodir. Modul $r = 3 > 0$ bo'lib, minus ishorasi argumentga $\pi$ qo'shish orqali yo'qotiladi.

---

## 6. Mustaqil yechish uchun amaliy mashqlar

### 1-mashq
$z = -\sqrt{3} + i$ kompleks sonini ko'rsatkichli shaklga keltiring.

<details>
<summary>👉 Yechimni tekshirish</summary>

1. $a = -\sqrt{3} < 0, b = 1 > 0$ — **II chorak**.
2. Modul: $r = \sqrt{(-\sqrt{3})^2 + 1^2} = \sqrt{3 + 1} = 2$.
3. Argument: $\varphi = \pi - \operatorname{arctg}\left(\frac{1}{\sqrt{3}}\right) = \pi - \frac{\pi}{6} = \frac{5\pi}{6}$.
4. Ko'rsatkichli shakl:
   
$$
   z = 2 e^{i\frac{5\pi}{6}}
   
$$

</details>

### 2-mashq
Hisoblang:
$$
\frac{(\cos\frac{\pi}{3} + i\sin\frac{\pi}{3})^6}{(\cos\frac{\pi}{4} + i\sin\frac{\pi}{4})^4}
$$

<details>
<summary>👉 Yechimni tekshirish</summary>

Surat: $e^{i \cdot 6 \cdot \frac{\pi}{3}} = e^{i \cdot 2\pi} = 1$.
Maxraj: $e^{i \cdot 4 \cdot \frac{\pi}{4}} = e^{i\pi} = -1$.
Bo'linma:
$$
\frac{1}{-1} = -1
$$
Javob: $-1$.

</details>
