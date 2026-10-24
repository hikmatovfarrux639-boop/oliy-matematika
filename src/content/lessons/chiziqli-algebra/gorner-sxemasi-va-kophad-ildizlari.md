---
title: "Ko'phadlarning ratsional ildizlari va Gorner sxemasi"
module: "chiziqli-algebra"
order: 14
description: "Ko'phadlarni ko'paytuvchilarga ajratish, butun va ratsional ildizlar teoremasi, Gorner sxemasi (jadval usuli) va ko'p usulli yechimlar."
---

## Kirish: Yuqori darajali tenglamalar muammosi

Chiziqli va kvadrat tenglamalarni yechish maktab kursidanoq hammaga ma'lum. Ammo oliy matematikada:
- Matritsalarning xos sonlarini topishda xarakteristik tenglama ko'pincha 3- yoki 4-darajali bo'ladi: $\lambda^3 - 6\lambda^2 + 11\lambda - 6 = 0$;
- Kasr-ratsional funksiyalarni integrallashda maxrajdagi ko'phadni ko'paytuvchilarga ajratish kerak bo'ladi;
- Differensial tenglamalarda xarakteristik ko'phad ildizlarini aniqlash talab etiladi.

Yuqori darajali ko'phadlarni ko'paytuvchilarga ajratish va ularning ildizlarini topishning eng qulay va universal usuli **Gorner sxemasi (Horner scheme)** hisoblanadi.

---

## 1. Ratsional ildizlar haqidagi fundamental teorema

Umumiy ko'rinishdagi butun koeffitsiyentli ko'phad berilgan bo'lsin:
$$
P_n(x) = a_n x^n + a_{n-1} x^{n-1} + \dots + a_1 x + a_0 \quad (a_n \neq 0, \; a_0 \neq 0)
$$

> **Teorema:** Agar qisqarmas $\frac{p}{q}$ kasr son ushbu ko'phadning ildizi bo'lsa, u holda:
> 1. Surat $p$ — ozod had $a_0$ ning bo'luvchisi bo'ladi;
> 2. Maxraj $q$ — bosh koeffitsiyent $a_n$ ning bo'luvchisi bo'ladi.

### Xususiy hol (Keltirilgan ko'phad):
Agar bosh koeffitsiyent $a_n = 1$ bo'lsa ($x^n + a_{n-1}x^{n-1} + \dots + a_0 = 0$), ko'phadning barcha ratsional ildizlari faqat **butun sonlar** bo'lishi mumkin va ular ozod had $a_0$ ning bo'luvchilari orasidan qidiriladi!

---

## 2. Gorner sxemasi nima va u qanday ishlaydi?

Gorner sxemasi — ko'phadni $(x - c)$ ikkihadga qoldiqli bo'lishning juda qulay ixcham jadval algoritmidir:
$$
P_n(x) = (x - c) Q_{n-1}(x) + R
$$
bu yerda $R = P_n(c)$ — qoldiq (Bezu teoremasi).
Agar $R = 0$ bo'lsa, $c$ soni ko'phadning **ildizi** bo'ladi va ko'phad $(x - c)$ ga qoldiqsiz bo'linadi!

### Jadval tuzilishi:
| | $a_n$ | $a_{n-1}$ | $a_{n-2}$ | $\dots$ | $a_0$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| **$c$** | $b_{n-1} = a_n$ | $b_{n-2} = c \cdot b_{n-1} + a_{n-1}$ | $b_{n-3} = c \cdot b_{n-2} + a_{n-2}$ | $\dots$ | **$R = c \cdot b_0 + a_0$** |

**Algoritm qoidasi:**
1. 1-ustun: Birinchi koeffitsiyent $a_n$ o'zgarishsiz pastga tushiriladi ($b_{n-1} = a_n$).
2. Keyingi har bir katak: Chapdagi sonni $c$ ga ko'paytirib, yuqoridagi songa qo'shamiz!

---

## Bitta masalani 2 xil usulda yechish va solishtirish

> **Masala:** $P(x) = x^3 - 4x^2 + x + 6 = 0$ tenglamaning barcha ildizlarini toping va ko'phadni chiziqli ko'paytuvchilarga ajrating.

### 1-usul: Gorner sxemasi orqali
1. Bosh koeffitsiyent $a_3 = 1$. Ozod had $a_0 = 6$.
   Mumkin bo'lgan butun ildizlar — 6 ning bo'luvchilari:
   $$\pm 1, \quad \pm 2, \quad \pm 3, \quad \pm 6$$
2. $c = 1$ ni tekshiramiz:
   $P(1) = 1 - 4 + 1 + 6 = 4 \neq 0$ (ildiz emas).
3. $c = -1$ ni Gorner sxemasi bilan tekshiramiz:

| | $1$ | $-4$ | $1$ | $6$ |
|:---:|:---:|:---:|:---:|:---:|
| **$-1$** | $1$ | $(-1)(1) + (-4) = \mathbf{-5}$ | $(-1)(-5) + 1 = \mathbf{6}$ | $(-1)(6) + 6 = \mathbf{0}$ |

Qoldiq $R = 0$! Demak, **$x_1 = -1$ ildizdir**.
Natijada hosil bo'lgan koeffitsiyentlar: $1, -5, 6$. Ya'ni bo'linma kvadrat uchhad:
$$
Q(x) = x^2 - 5x + 6
$$
4. Qolgan ildizlarni Viyet teoremasi yoki diskriminant bilan topamiz:
   $$x^2 - 5x + 6 = 0 \implies (x - 2)(x - 3) = 0 \implies x_2 = 2, \quad x_3 = 3$$
Ko'paytuvchilarga ajralishi:
$$
P(x) = (x + 1)(x - 2)(x - 3)
$$

### 2-usul: Guruhlash va "burchakli bo'lish" (ustun shaklida bo'lish)
$x_1 = -1$ ildiz ekanligini topgach, ko'phadni $(x + 1)$ ga ustun usulida bo'lamiz:
$$
\begin{array}{r|l}
x^3 - 4x^2 + x + 6 & x + 1 \\
\hline
-(x^3 + x^2)\phantom{-4x^2+x} & x^2 - 5x + 6 \\
-5x^2 + x\phantom{+6} & \\
-(-5x^2 - 5x)\phantom{+6} & \\
6x + 6 & \\
-(6x + 6) & \\
\hline
0 &
\end{array}
$$
Hosil bo'lgan kvadrat tenglama $x^2 - 5x + 6 = 0$ yechilib, $x_2 = 2, x_3 = 3$ topiladi.

*Xulosa:* Gorner sxemasi ustun shaklida burchakli bo'lishga qaraganda $3-4$ barobar kam joy egallaydi, hisoblash xatolariga yo'l qo'ymaydi va qoldiqni tezkor ko'rsatadi!

---

> [!WARNING] Imtihondagi tuzoqlar va ko'p uchraydigan xatoliklar
> 1. **Tushirib qoldirilgan darajalarga NOL qo'yishni unutish:**
>    Masalan, $x^4 - 5x^2 + 4 = 0$ ko'phadida $x^3$ va $x^1$ hadlari yo'q! Jadvalga koeffitsiyentlarni yozganda:
>    `1, 0, -5, 0, 4` deb nolni albatta yozish shart. Nollarni tashlab ketish barcha hisoblashlarni buzadi!
> 2. **Kasr ildizlarni qidirishda bosh koeffitsiyentni inobatga olmaslik:**
>    Agar tenglama $2x^3 + 3x^2 - 1 = 0$ bo'lsa, ildizlar nafaqat butun sonlar $\pm 1$, balki kasr sonlar ham bo'lishi mumkin: $\pm \frac{1}{2}$!
> 3. **Qavs ichidagi ishora:** Agar ildiz $c = -2$ bo'lsa, ko'paytuvchi $(x - (-2)) = (x + 2)$ bo'ladi. Ko'p talabalar $(x - 2)$ deb adashishadi.

---

## Mustaqil yechish uchun amaliy mashqlar

1. Gorner sxemasi yordamida $P(x) = x^4 - 2x^3 - 7x^2 + 8x + 12$ ko'phadining $x = 2$ dagi qiymatini va bo'linmasini toping.
2. $2x^3 - 5x^2 + x + 2 = 0$ tenglamaning barcha ratsional ildizlarini toping.
3. $\lambda^3 - 4\lambda^2 - 7\lambda + 10 = 0$ matritsaning xarakteristik tenglamasini Gorner usulida yechib, xos sonlarini aniqlang.

<details style="margin-top: 1rem; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); cursor: pointer;">
  <summary style="font-weight: 700; color: var(--primary);">👉 Yechimni tekshirish</summary>
  <div style="margin-top: 0.75rem; padding-top: 0.75rem; border-top: 1px solid var(--border-color); line-height: 1.7;">
    <p><strong>1-masala:</strong></p>
    <p>Koeffitsiyentlar: $1, -2, -7, 8, 12$. $c = 2$:</p>
    <ul>
      <li>$b_3 = 1$</li>
      <li>$b_2 = 2(1) + (-2) = 0$</li>
      <li>$b_1 = 2(0) + (-7) = -7$</li>
      <li>$b_0 = 2(-7) + 8 = -6$</li>
      <li>$R = 2(-6) + 12 = 0$</li>
    </ul>
    <p>Qoldiq $R = 0$, demak $x = 2$ ildiz! Bo'linma: $x^3 - 7x - 6$.</p>

    <hr style="margin: 0.75rem 0; border: none; border-top: 1px dashed var(--border-color);" />

    <p><strong>2-masala:</strong></p>
    <p>Nomzodlar: $\pm 1, \pm 2, \pm 1/2$.</p>
    <p>$c = 1$ ni tekshiramiz: $2(1)^3 - 5(1)^2 + 1 + 2 = 2 - 5 + 1 + 2 = 0$ (ildiz!).</p>
    <p>Gorner sxemasi bo'yicha: $2x^2 - 3x - 2 = 0$.</p>
    <p>$D = 9 - 4(2)(-2) = 25 \implies x = \frac{3 \pm 5}{4} \implies x_2 = 2, \quad x_3 = -\frac{1}{2}$.</p>
    <p><strong>Javob:</strong> $x_1 = 1, \quad x_2 = 2, \quad x_3 = -0.5$.</p>

    <hr style="margin: 0.75rem 0; border: none; border-top: 1px dashed var(--border-color);" />

    <p><strong>3-masala:</strong></p>
    <p>$\lambda = 1$ tekshiriladi: $1 - 4 - 7 + 10 = 0 \implies \lambda_1 = 1$.</p>
    <p>Gorner bo'yicha bo'linma: $\lambda^2 - 3\lambda - 10 = 0 \implies (\lambda - 5)(\lambda + 2) = 0$.</p>
    <p><strong>Javob:</strong> Xos sonlar $\lambda_1 = 1, \quad \lambda_2 = 5, \quad \lambda_3 = -2$.</p>
  </div>
</details>
