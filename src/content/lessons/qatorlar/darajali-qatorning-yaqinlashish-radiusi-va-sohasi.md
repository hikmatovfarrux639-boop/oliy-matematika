---
title: "Darajali qatorning yaqinlashish radiusi, intervali va sohasini topish"
module: "qatorlar"
order: 8
description: "Abel teoremasi, Koshi-Adamar va Dalamber formulalari yordamida yaqinlashish radiusi R ni topish hamda interval chekkalarida yaqinlashishni tekshirish."
---

Funksional qatorlar ichida matematik analiz va uning tatbiqlarida eng ko'p qo'llaniladigani **darajali qatorlar**dir. Har qanday darajali qator o'zining yaqinlashish sohasida cheksiz darajali ko'phad kabi o'zini tutadi: uni hadma-had differensiallash va integrallash mumkin. Ushbu darsda darajali qatorning tuzilishi, Abel teoremasi, yaqinlashish radiusi $R$, yaqinlashish intervali hamda yaqinlashish sohasini topishning to'liq algoritmini o'rganamiz.

---

## 1. Darajali qator tushunchasi

Quyidagi ko'rinishdagi funksional qator $(x - x_0)$ ning darajalari bo'yicha tuzilgan **darajali qator** deyiladi:

$$
\sum_{n=0}^{\infty} a_n (x - x_0)^n = a_0 + a_1(x - x_0) + a_2(x - x_0)^2 + \dots + a_n(x - x_0)^n + \dots
$$

Bu yerda $a_0, a_1, a_2, \dots, a_n, \dots$— o'zgarmas haqiqiy sonlar bo'lib, **darajali qatorning koeffitsiyentlari** deyiladi,$x_0$ esa qatorning **markazi**dir.

Xususan, agar $x_0 = 0$bo'lsa (yoki$X = x - x_0$almashtirish bajarilsa),$x$ ning darajalari bo'yicha darajali qator hosil bo'ladi:

$$
\sum_{n=0}^{\infty} a_n x^n = a_0 + a_1 x + a_2 x^2 + \dots + a_n x^n + \dots
$$

> [!NOTE]
> Har qanday $\sum_{n=0}^{\infty} a_n (x - x_0)^n$darajali qator kamida bitta$x = x_0$nuqtada albatta yaqinlashadi va bu nuqtada uning yig'indisi$S(x_0) = a_0$ ga teng bo'ladi.

---

## 2. Abel teoremasi va yaqinlashish radiusi

Darajali qatorning yaqinlashish sohasi qanday tuzilganligini quyidagi fundamental teorema belgilab beradi.

> [!IMPORTANT]
> **Abel teoremasi:**
> 1. Agar $\sum_{n=0}^{\infty} a_n x^n$darajali qator noldan farqli biror$x = x_1 \neq 0$nuqtada yaqinlashsa, u holda$|x| < |x_1|$tengsizlikni qanoatlantiruvchi barcha$x$ nuqtalarda bu qator **absolyut yaqinlashadi**.
> 2. Agar darajali qator biror $x = x_2$nuqtada uzoqlashsa, u holda$|x| > |x_2|$tengsizlikni qanoatlantiruvchi barcha$x$ nuqtalarda ham u **uzoqlashadi**.

**Abel teoremasidan kelib chiqadigan xulosa:**
Har qanday $\sum_{n=0}^{\infty} a_n (x - x_0)^n$darajali qator uchun shunday manfiy bo'lmagan$R$ soni ($0 \le R \le +\infty$) mavjudki:
- $|x - x_0| < R$, ya'ni $x \in (x_0 - R, \, x_0 + R)$ ochiq intervalda qator **absolyut yaqinlashadi**;
- $|x - x_0| > R$, ya'ni $x \in (-\infty, x_0 - R) \cup (x_0 + R, +\infty)$ da qator **uzoqlashadi**;
- $|x - x_0| = R$, ya'ni intervalning chekka nuqtalari $x = x_0 - R$va$x = x_0 + R$ da qator yaqinlashishi ham (absolyut yoki shartli), uzoqlashishi ham mumkin.

Bu $R$soni darajali qatorning **yaqinlashish radiusi**,$(x_0 - R, \, x_0 + R)$ ochiq oraliq esa **yaqinlashish intervali** deyiladi. Chekka nuqtalar tekshirilgandan so'ng hosil bo'lgan to'plam qatorning **yaqinlashish sohasi** deyiladi.

---

## 3. Yaqinlashish radiusi $R$ ni hisoblash formulalari

Absolyut yaqinlashish shartini tekshirish uchun $\sum_{n=0}^{\infty} |a_n| \cdot |x - x_0|^n$ musbat hadli qatorga Dalamber yoki Koshi alomatlarini qo'llab, yaqinlashish radiusini bevosita koeffitsiyentlar orqali topish formulalarini hosil qilamiz:

### 1. Dalamber formulasi (agar noldan farqli koeffitsiyentlar nisbati limiti mavjud bo'lsa):

$$
R = \lim_{n \to \infty} \left| \frac{a_n}{a_{n+1}} \right|
$$

### 2. Koshi–Adamar formulasi (ildiz ostida $n$-koeffitsiyent bo'lganda):

$$
R = \frac{1}{\lim\limits_{n \to \infty} \sqrt[n]{|a_n|}}
$$

(Umumiy nazariy holda yuqori limit $\varlimsup_{n \to \infty} \sqrt[n]{|a_n|}$ olinadi).

> [!TIP]
> Xususiy chegaraviy hollar:
> - Agar $R = 0$bo'lsa, darajali qator faqat bitta$x = x_0$ nuqtada yaqinlashadi.
> - Agar $R = +\infty$bo'lsa, darajali qator butun sonlar o'qida$x \in (-\infty, +\infty)$ absolyut yaqinlashadi.

> [!WARNING]
> Agar darajali qatorda $x$ning darajasi$n$emas, balki$2n$, $3n$yoki$(x - x_0)^k$ko'rinishda bo'lsa (masalan,$\sum a_n (x - x_0)^{2n}$), standart $R = \lim |a_n / a_{n+1}|$formulasini to'g'ridan-to'g'ri$x$ga nisbatan qo'llab bo'lmaydi! Bunday hollarda qatorning umumiy hadi moduliga bevosita Dalamber$\lim_{n\to\infty} \left|\frac{u_{n+1}(x)}{u_n(x)}\right| < 1$yoki Koshi$\lim_{n\to\infty} \sqrt[n]{|u_n(x)|} < 1$ alomatini qo'llash eng xatosiz yo'ldir.

---

## 4. Yaqinlashish sohasini topish algoritmi

1. **Yaqinlashish radiusi $R$ va yaqinlashish intervalini topish:**
   Dalamber yoki Koshi–Adamar formulasidan (yoki bevosita $\lim |u_{n+1}/u_n| < 1$tengsizligidan)$(x_0 - R, \, x_0 + R)$ yaqinlashish intervali topiladi.
2. **Chap chekka nuqta $x = x_0 - R$ ni tekshirish:**
   Qatordagi $x$o'rniga$x_0 - R$ ni qo'yib, hosil bo'lgan sonli qatorning yaqinlashishi (zaruriy shart, taqqoslash, integral yoki Leybnits alomati orqali) tekshiriladi.
3. **O'ng chekka nuqta $x = x_0 + R$ ni tekshirish:**
   Qatordagi $x$o'rniga$x_0 + R$ ni qo'yib, hosil bo'lgan sonli qatorning yaqinlashishi tekshiriladi.
4. **Yaqinlashish sohasini yozish:**
   Chekka nuqtalardagi natijalarga qarab $(x_0 - R, x_0 + R)$, $[x_0 - R, x_0 + R)$, $(x_0 - R, x_0 + R]$yoki$[x_0 - R, x_0 + R]$ ko'rinishda javob yoziladi.

---

## 5. Namuna sifatida yechilgan misollar

### 1-misol. Dalamber formulasi va chekkalarni tekshirish
$\sum_{n=1}^{\infty} \frac{(x - 3)^n}{n \cdot 2^n}$ darajali qatorning yaqinlashish radiusi, intervali va sohasini toping.

**Yechish:**
1. Bu yerda markaz $x_0 = 3$, koeffitsiyent $a_n = \frac{1}{n \cdot 2^n}$. Dalamber formulasiga ko'ra yaqinlashish radiusini topamiz:

$$
R = \lim_{n \to \infty} \left| \frac{a_n}{a_{n+1}} \right| = \lim_{n \to \infty} \frac{(n+1) \cdot 2^{n+1}}{n \cdot 2^n} = 2 \lim_{n \to \infty} \left(1 + \frac{1}{n}\right) = 2
$$

Yaqinlashish intervali: $|x - 3| < 2 \implies -2 < x - 3 < 2 \implies x \in (1, 5)$.

2. **Chekka nuqtalarni tekshiramiz:**
   - **$x = 1$ bo'lganda:**

     
$$
     \sum_{n=1}^{\infty} \frac{(1 - 3)^n}{n \cdot 2^n} = \sum_{n=1}^{\infty} \frac{(-2)^n}{n \cdot 2^n} = \sum_{n=1}^{\infty} \frac{(-1)^n}{n}
     
$$

     Bu o'zgaruvchan ishorali qator Leybnits alomatiga ko'ra ($b_n = \frac{1}{n}$monoton kamayadi va$\lim_{n\to\infty} \frac{1}{n} = 0$) **shartli yaqinlashadi**. Demak, $x = 1$ nuqta sohaga kiradi.

   - **$x = 5$ bo'lganda:**

     
$$
     \sum_{n=1}^{\infty} \frac{(5 - 3)^n}{n \cdot 2^n} = \sum_{n=1}^{\infty} \frac{2^n}{n \cdot 2^n} = \sum_{n=1}^{\infty} \frac{1}{n}
     
$$

     Bu garmonik qator bo'lib, u **uzoqlashadi**. Demak, $x = 5$ nuqta sohaga kirmaydi.

3. **Javob:**
   - Yaqinlashish radiusi: $R = 2$- Yaqinlashish intervali:$(1, 5)$- Yaqinlashish sohasi:$[1, 5)$

---

### 2-misol. Koshi–Adamar formulasini qo'llash
$\sum_{n=1}^{\infty} \left(1 + \frac{1}{n}\right)^{n^2} (x + 2)^n$ darajali qatorning yaqinlashish sohasini toping.

**Yechish:**
1. Markaz $x_0 = -2$, koeffitsiyent $a_n = \left(1 + \frac{1}{n}\right)^{n^2}$. Koshi–Adamar formulasini qo'llaymiz:

$$
\lim_{n \to \infty} \sqrt[n]{|a_n|} = \lim_{n \to \infty} \left(1 + \frac{1}{n}\right)^n = e \implies R = \frac{1}{e}
$$

Yaqinlashish intervali: $|x + 2| < \frac{1}{e} \implies x \in \left(-2 - \frac{1}{e}, \, -2 + \frac{1}{e}\right)$.

2. **Chekka nuqtalarda ($|x + 2| = \frac{1}{e}$):**
   Qatorning umumiy hadi moduli:

   
$$
   |u_n| = \left(1 + \frac{1}{n}\right)^{n^2} \cdot \frac{1}{e^n} = \left( \frac{\left(1 + \frac{1}{n}\right)^n}{e} \right)^n
   
$$

   Logarifmlash yordamida $\lim_{n \to \infty} |u_n| = e^{-1/2} = \frac{1}{\sqrt{e}} \neq 0$ ekanini ko'rish mumkin. Yaqinlashishning zaruriy sharti bajarilmagani uchun ikkala chekka nuqtada ham qator **uzoqlashadi**.

3. **Javob:** Yaqinlashish sohasi $\left(-2 - \frac{1}{e}, \, -2 + \frac{1}{e}\right)$.

---

### 3-misol. Juft darajali qatorni bevosita Dalamber alomati bilan tekshirish
$\sum_{n=1}^{\infty} \frac{x^{2n}}{n^2 \cdot 9^n}$ qatorning yaqinlashish sohasini toping.

**Yechish:**
1. Qatorning umumiy hadini $u_n(x) = \frac{x^{2n}}{n^2 \cdot 9^n}$ deb olib, bevosita Dalamber alomatini qo'llaymiz:

$$
\lim_{n \to \infty} \left| \frac{u_{n+1}(x)}{u_n(x)} \right| = \lim_{n \to \infty} \frac{x^{2n+2}}{(n+1)^2 \cdot 9^{n+1}} \cdot \frac{n^2 \cdot 9^n}{x^{2n}} = \frac{x^2}{9} \lim_{n \to \infty} \left(\frac{n}{n+1}\right)^2 = \frac{x^2}{9}
$$

Absolyut yaqinlashish sharti:

$$
\frac{x^2}{9} < 1 \implies x^2 < 9 \implies |x| < 3 \implies x \in (-3, 3), \quad (R = 3)
$$

2. **Chekka nuqtalar $x = \pm 3$da:**$x^2 = 9$ bo'lgani uchun ikkala chekka nuqtada ham bir xil sonli qator hosil bo'ladi:

   
$$
   \sum_{n=1}^{\infty} \frac{9^n}{n^2 \cdot 9^n} = \sum_{n=1}^{\infty} \frac{1}{n^2}
   
$$

   Bu umumlashgan garmonik qator ($p = 2 > 1$) **yaqinlashadi**.

3. **Javob:** Yaqinlashish radiusi $R = 3$, yaqinlashish intervali $(-3, 3)$, yaqinlashish sohasi $[-3, 3]$.

---

## 6. O'z-o'zini tekshirish savollari

1. $\sum_{n=0}^{\infty} a_n x^n$darajali qator$x = -4$nuqtada yaqinlashishi va$x = 6$nuqtada uzoqlashishi ma'lum bo'lsa, qatorning$x = 3$, $x = -5$va$x = 7$ nuqtalardagi xulqi haqida Abel teoremasiga tayanib nima deyish mumkin?
2. Darajali qatorning yaqinlashish intervali va yaqinlashish sohasi tushunchalari bir-biridan nimasi bilan farq qiladi?
3. Qanday hollarda yaqinlashish radiusini topish uchun Dalamber formulasidan ko'ra Koshi–Adamar formulasidan foydalanish qulayroq?

---

## 7. Mustaqil yechish uchun masalalar

1. **Masala:** $\sum_{n=1}^{\infty} \frac{x^n}{n \cdot 5^n}$ darajali qatorning yaqinlashish radiusi va sohasini toping.
   - *Javob:* $R = 5$, yaqinlashish sohasi $[-5, 5)$.
2. **Masala:** $\sum_{n=1}^{\infty} \frac{(-1)^{n-1}(x + 1)^n}{\sqrt{n} \cdot 3^n}$ qatorning yaqinlashish sohasini toping.
   - *Javob:* $R = 3$, yaqinlashish sohasi $(-4, 2]$.
3. **Masala:** $\sum_{n=1}^{\infty} n! (x - 4)^n$va$\sum_{n=1}^{\infty} \frac{x^n}{n!}$ qatorlarning yaqinlashish radiuslarini toping.
   - *Javob:* Birinchi qator uchun $R = 0$(faqat$x = 4$nuqtada yaqinlashadi); ikkinchi qator uchun$R = +\infty$, soha $(-\infty, +\infty)$.
4. **Masala:** $\sum_{n=1}^{\infty} \left(\frac{2n + 1}{3n + 4}\right)^n (x - 1)^n$ qatorning yaqinlashish sohasini toping.
   - *Javob:* $R = \frac{3}{2}$, yaqinlashish sohasi $\left(-\frac{1}{2}, \frac{5}{2}\right)$.
5. **Masala:** $\sum_{n=1}^{\infty} \frac{(x - 2)^{2n}}{(2n - 1) \cdot 4^n}$ qatorning yaqinlashish sohasini toping.
   - *Javob:* $R = 2$, yaqinlashish intervali $(0, 4)$(chunki$|x - 2| < 2$ va chekkalarda uzoqlashadi).
