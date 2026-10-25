---
title: "Teskari funksiya, superpozitsiya va giperbolik funksiyalar (sh x, ch x, th x)"
module: "funksiyalar-grafiklar"
order: 7
description: "O'zaro teskari funksiyalarni topish shartlari va grafiklari, murakkab funksiya (kompozitsiya) hamda giperbolik sinus, kosinus, tangens va ularning ayniyatlari."
---

Funksiyalar nazariyasini chuqurroq o'rganishda berilgan oddiy funksiyalardan yangi funksiyalar hosil qilish operatsiyalari — **funksiyani teskarisiga o'girish (inversiya)** hamda **funksiyani funksiyaga qo'yish (superpozitsiya / kompozitsiya)** fundamental ahamiyatga ega. Shuningdek, oliy matematika, fizika (osma ko'priklar zanjir chizig'i, nisbiylik nazariyasi) va muhandislik masalalarida ko'rsatkichli funksiyalarning maxsus kombinatsiyalari bo'lgan **giperbolik funksiyalar** keng qo'llaniladi.

---

## 1. Teskari funksiya va uning mavjudlik sharti

Faraz qilaylik, $y = f(x)$funksiya$D(f) = X$aniqlanish sohasini$E(f) = Y$qiymatlar to'plamiga akslantirsin. Agar$Y$to'plamdagi har bir$y$qiymatga$X$to'plamdan$f(x) = y$tenglamani qanoatlantiruvchi **faqat bitta (yagona)**$x$qiymat mos kelsa (ya'ni$f: X \to Y$akslantirish **biyektiv** bo'lsa), u holda$Y$to'plamda aniqlangan va har bir$y \in Y$ga o'sha yagona$x \in X$ni mos qo'yuvchi funksiyaga$f$ ning **teskari funksiyasi** deyiladi.

Odatda argumentni yana $x$, funksiyani esa $y$bilan belgilash qabul qilingan bo'lib, teskari funksiya$y = f^{-1}(x)$ ko'rinishida yoziladi.

> [!IMPORTANT]
> **Teskari funksiyaning asosiy xossalari:**
> 1. **Sohalar almashinuvi:** To'g'ri funksiyaning aniqlanish sohasi teskari funksiyaning qiymatlar sohasi bo'ladi va aksincha:
>    
$$
>    D(f^{-1}) = E(f), \qquad E(f^{-1}) = D(f)
>    
$$
> 2. **Mavjudlikning yetarli sharti:** Agar $y = f(x)$funksiya$X$oraliqda **qat'iy monoton** (qat'iy o'suvchi yoki qat'iy kamayuvchi) bo'lsa, shu oraliqda unga teskari$y = f^{-1}(x)$ funksiya mavjud va u ham xuddi shu ma'noda qat'iy monoton bo'ladi.
> 3. **Grafiklar simmetriyasi:** O'zaro teskari bo'lgan $y = f(x)$va$y = f^{-1}(x)$ funksiyalarning grafiklari koordinata tekisligida I va III choraklar bissektrisasi bo'lgan **$y = x$ to'g'ri chizig'iga nisbatan simmetrik** joylashadi.

> [!WARNING]
> $f^{-1}(x)$yozuvdagi$-1$daraja ko'rsatkichi emas! Uni$\frac{1}{f(x)} = \big(f(x)\big)^{-1}$ (kasr) bilan adashtirmang:
> - $f^{-1}(x)$— teskari funksiya (masalan,$\sin x$uchun$\arcsin x$).
> - $\big(f(x)\big)^{-1} = \frac{1}{f(x)}$— algebraik teskari miqdor (masalan,$\frac{1}{\sin x} = \operatorname{cosec} x$).

### Teskari funksiyani topish algoritmi:
1. Funksiya berilgan oraliqda o'zaro bir qiymatli (qat'iy monoton) ekanligiga ishonch hosil qiling va uning qiymatlar sohasi $E(f)$ ni toping.
2. $y = f(x)$tenglamani$x$ga nisbatan yechib,$x = g(y)$ ko'rinishga keltiring.
3. Harflarni almashtiring ($x \leftrightarrow y$): $y = g(x) = f^{-1}(x)$, bu yerda $x \in E(f)$.

---

### 1-misol. Kasr-chiziqli funksiyaning teskarisini topish
$y = \frac{2x - 3}{x + 1}$ funksiyaga teskari funksiyani va uning aniqlanish sohasini toping.

**Yechish:**
1. Berilgan funksiyaning aniqlanish sohasi: $x + 1 \neq 0 \implies D(f) = (-\infty; -1) \cup (-1; +\infty)$.
2. Tenglamani $x$ga nisbatan yechamiz. Ikkala tomonni$(x+1)$ ga ko'paytiramiz:
   
$$
   y(x + 1) = 2x - 3 \implies xy + y = 2x - 3
   
$$
   $x$ qatnashgan hadlarni chap tomonga, qolganlarini o'ng tomonga o'tkazamiz:
   
$$
   xy - 2x = -y - 3 \implies x(y - 2) = -(y + 3) \implies x = -\frac{y + 3}{y - 2} = \frac{y + 3}{2 - y}
   
$$
3. O'zgaruvchilarni almashtiramiz ($x \leftrightarrow y$):
   
$$
   f^{-1}(x) = \frac{x + 3}{2 - x}, \qquad D(f^{-1}) = (-\infty; 2) \cup (2; +\infty)
   
$$

---

### 2-misol. Chegaralangan sohada kvadratik va ko'rsatkichli funksiyalar teskarisi
$x \in [1; +\infty)$oraliqda berilgan$y = x^2 - 2x + 5$ funksiyaning teskarisini toping.

**Yechish:**
1. To'liq kvadrat ajratamiz: $y = (x - 1)^2 + 4$.
   $x \ge 1$bo'lgani uchun$(x - 1) \ge 0$va funksiya qat'iy o'suvchi. Uning qiymatlar sohasi:$E(f) = [4; +\infty)$.
2. $x$ni$y$ orqali ifodalaymiz:
   
$$
   (x - 1)^2 = y - 4 \implies |x - 1| = \sqrt{y - 4}
   
$$
   Shartga ko'ra $x \ge 1$bo'lgani uchun$|x - 1| = x - 1$ (musbat shox olinadi):
   
$$
   x - 1 = \sqrt{y - 4} \implies x = 1 + \sqrt{y - 4}
   
$$
3. Harflarni almashtiramiz:
   
$$
   f^{-1}(x) = 1 + \sqrt{x - 4}, \qquad D(f^{-1}) = [4; +\infty), \quad E(f^{-1}) = [1; +\infty)
   
$$

---

## 2. Murakkab funksiya (Superpozitsiya / Kompozitsiya)

Agar $u = g(x)$funksiya$D(g)$sohada aniqlangan bo'lib, uning qiymatlar to'plami$E(g)$boshqa bir$y = f(u)$funksiyaning$D(f)$aniqlanish sohasiga kirsa, u holda$x$ga$y = f\big(g(x)\big)$qoida bo'yicha moslik qo'yuvchi funksiyaga$g$va$f$funksiyalarning **superpozitsiyasi (kompozitsiyasi)** yoki **murakkab funksiya** deyiladi va$(f \circ g)(x)$ kabi belgilanadi:

$$
(f \circ g)(x) = f\big(g(x)\big)
$$

Bu yerda $u = g(x)$**ichki funksiya (oraliq argument)**,$y = f(u)$ esa **tashqi funksiya** deb ataladi.

> [!TIP]
> **Kompozitsiya kommutativ emas!** Umumiy holda tashqi va ichki funksiyalar o'rnini almashtirsak, mutlaqo boshqa funksiya hosil bo'ladi:
> 
$$
> (f \circ g)(x) \neq (g \circ f)(x)
> 
$$
> Faqat o'zaro teskari funksiyalar kompozitsiyasigina ayniy $x$ funksiyani beradi:
> 
$$
> f\big(f^{-1}(x)\big) = x \quad (\forall x \in D(f^{-1})) \qquad \text{va} \qquad f^{-1}\big(f(x)\big) = x \quad (\forall x \in D(f))
> 
$$

### 3-misol. Kompozitsiyalarni tuzish va aniqlanish sohasini topish
$f(x) = \sqrt{x - 2}$va$g(x) = \ln x$funksiyalar berilgan.$(f \circ g)(x)$hamda$(g \circ f)(x)$ murakkab funksiyalarni va ularning aniqlanish sohalarini toping.

**Yechish:**
1. **$(f \circ g)(x) = f\big(g(x)\big)$ni topamiz:**$f$ning argumenti$x$o'rniga$g(x) = \ln x$ ni qo'yamiz:
   
$$
   (f \circ g)(x) = \sqrt{\ln x - 2}
   
$$
   Aniqlanish sohasi uchun ichki funksiya aniqlangan ($x > 0$) va ildiz osti nomanfiy bo'lishi shart:
   
$$
   \begin{cases} x > 0 \\ \ln x - 2 \ge 0 \end{cases} \implies \ln x \ge 2 \implies x \ge e^2 \implies D(f \circ g) = [e^2; +\infty)
   
$$
2. **$(g \circ f)(x) = g\big(f(x)\big)$ni topamiz:**$g$ning argumenti o'rniga$f(x) = \sqrt{x - 2}$ ni qo'yamiz:
   
$$
   (g \circ f)(x) = \ln\left(\sqrt{x - 2}\right) = \frac{1}{2}\ln(x - 2)
   
$$
   Aniqlanish sohasi: logarifm argumenti qat'iy musbat bo'lishi kerak ($\sqrt{x - 2} > 0 \implies x - 2 > 0$):
   
$$
   D(g \circ f) = (2; +\infty)
   
$$

---

## 3. Giperbolik funksiyalar va ularning xossalari

Oddiy trigonometrik funksiyalar ($\sin t, \cos t$) birlik aylana $x^2 + y^2 = 1$bilan qanday bog'langan bo'lsa, **giperbolik funksiyalar** teng tomonli giperbola$x^2 - y^2 = 1$bilan xuddi shunday geometrik bog'langan. Analitik jihatdan ular$e^x$va$e^{-x}$ eksponentalar orqali aniqlanadi:

### Asosiy ta'riflar:
1. **Giperbolik sinus** ($\sinh x$yoki$\operatorname{sh} x$):
   
$$
   \operatorname{sh} x = \frac{e^x - e^{-x}}{2}
   
$$
   - $D(\operatorname{sh}) = \mathbb{R}$, $E(\operatorname{sh}) = \mathbb{R}$.
   - **Toq funksiya:** $\operatorname{sh}(-x) = -\operatorname{sh} x$, $\operatorname{sh}(0) = 0$. Бутун $\mathbb{R}$ da qat'iy o'suvchi.

2. **Giperbolik kosinus** ($\cosh x$yoki$\operatorname{ch} x$):
   
$$
   \operatorname{ch} x = \frac{e^x + e^{-x}}{2}
   
$$
   - $D(\operatorname{ch}) = \mathbb{R}$, $E(\operatorname{ch}) = [1; +\infty)$(chunki O'rta arifmetik va geometrik tengsizlikka ko'ra$\frac{e^x + e^{-x}}{2} \ge \sqrt{e^x \cdot e^{-x}} = 1$).
   - **Juft funksiya:** $\operatorname{ch}(-x) = \operatorname{ch} x$, $\operatorname{ch}(0) = 1$. Grafik shakli osilib turgan zanjirni eslatadi va **zanjir chizig'i (katenariya)** deb ataladi.

3. **Giperbolik tangens va kotangens** ($\operatorname{th} x$va$\operatorname{cth} x$):
   
$$
   \operatorname{th} x = \frac{\operatorname{sh} x}{\operatorname{ch} x} = \frac{e^x - e^{-x}}{e^x + e^{-x}}, \qquad \operatorname{cth} x = \frac{\operatorname{ch} x}{\operatorname{sh} x} = \frac{e^x + e^{-x}}{e^x - e^{-x}} \quad (x \neq 0)
   
$$
   - $\operatorname{th} x$toq funksiya bo'lib, qiymatlari$(-1; 1)$ oraliqda yotadi ($\lim_{x \to \pm\infty} \operatorname{th} x = \pm 1$).

---

### Giperbolik trigonometriyaning asosiy ayniyatlari

Beвоsita ta'rifdan kelib chiqadigan eng muhim ayniyatlar:
- **Eyler tipidagi yig'indi va ayirma:**
  
$$
  \operatorname{ch} x + \operatorname{sh} x = e^x, \qquad \operatorname{ch} x - \operatorname{sh} x = e^{-x}
  
$$
- **Asosiy giperbolik ayniyat** (ikkala tenglikni o'zaro ko'paytirishdan hosil bo'ladi):
  
$$
  \operatorname{ch}^2 x - \operatorname{sh}^2 x = 1
  
$$
- **Ikkilangan argument formulalari:**
  
$$
  \operatorname{sh} 2x = 2\operatorname{sh} x \operatorname{ch} x, \qquad \operatorname{ch} 2x = \operatorname{ch}^2 x + \operatorname{sh}^2 x = 2\operatorname{ch}^2 x - 1 = 1 + 2\operatorname{sh}^2 x
  
$$
- **Asosiy ayniyatni $\operatorname{ch}^2 x$ ga bo'lish natijasi:**
  
$$
  1 - \operatorname{th}^2 x = \frac{1}{\operatorname{ch}^2 x}
  
$$

---

### 4-misol. Teskari giperbolik funksiya (Areafunksiya) ni topish
$y = \operatorname{sh} x$ funksiyaning teskari funksiyasi ($y = \operatorname{arsh} x$) ni logarifm orqali ifodalang.

**Yechish:**
Ta'rifga ko'ra $y = \frac{e^x - e^{-x}}{2}$. Tenglamani $x$ ga nisbatan yechamiz:
$$
2y = e^x - \frac{1}{e^x} \implies (e^x)^2 - 2y(e^x) - 1 = 0
$$
Bu $t = e^x > 0$ga nisbatan kvadrat tenglama:$t^2 - 2yt - 1 = 0$.
Diskriminant yordamida ildizlarni topamiz:
$$
t = y \pm \sqrt{y^2 + 1}
$$
Har doim $\sqrt{y^2 + 1} > |y|$bo'lgani va$t = e^x > 0$ bo'lishi shartligidan faqat musbat ildizni olamiz:
$$
e^x = y + \sqrt{y^2 + 1} \implies x = \ln\left(y + \sqrt{y^2 + 1}\right)
$$
Harflarni almashtirsak ($x \leftrightarrow y$), barcha $x \in \mathbb{R}$ uchun:
$$
\operatorname{arsh} x = \ln\left(x + \sqrt{x^2 + 1}\right)
$$

---

## 4. O'z-o'zini tekshirish savollari

> [!NOTE]
> Quyidagi savollar ustida o'ylab ko'ring:
> 1. Nima uchun $y = x^2$funksiyaga butun$\mathbb{R} = (-\infty; +\infty)$sohada teskari funksiya mavjud emas, lekin$[0; +\infty)$ da mavjud?
> 2. Giperbolik funksiyalar davriy funksiyalar hisoblanadimi (haqiqiy sonlar to'plamida)?
> 3. Agar $y = f(x)$funksiya grafigi$(2; 5)$nuqtadan o'tsa, unga teskari$y = f^{-1}(x)$ funksiya grafigi qaysi nuqtadan o'tishi aniq?

---

## 5. Mustaqil yechish uchun mashqlar

1. $f(x) = 3^{2x - 1} + 4$funksiyaning teskari funksiyasi$f^{-1}(x)$ ni va uning aniqlanish sohasini toping.
2. Agar $f(x) = \frac{x}{x + 1}$bo'lsa,$(f \circ f)(x) = f\big(f(x)\big)$ murakkab funksiyani soddalashtiring.
3. $\operatorname{sh} x = \frac{3}{4}$ekanligi ma'lum bo'lsa,$\operatorname{ch} x$, $\operatorname{th} x$va$\operatorname{sh} 2x$ qiymatlarini toping.
4. $\lim_{x \to 0} \frac{\operatorname{sh} 3x}{\operatorname{th} 5x}$ limitni hisoblang.
5. $y = \operatorname{th} x$funksiyaning teskarisi$\operatorname{arth} x$ ni natural logarifm orqali ifodalang.

**Javoblar:**
1. $f^{-1}(x) = \frac{1 + \log_3(x - 4)}{2}$, $D(f^{-1}) = (4; +\infty)$.
2. $f(f(x)) = \frac{x}{2x + 1}$.
3. $\operatorname{ch} x = \frac{5}{4}$(chunki$\operatorname{ch} x \ge 1 > 0$), $\operatorname{th} x = \frac{3}{5}$, $\operatorname{sh} 2x = \frac{15}{8}$.
4. $\frac{3}{5}$(Ko'rsatma:$x \to 0$da$\operatorname{sh} u \sim u$va$\operatorname{th} u \sim u$).
5. $\operatorname{arth} x = \frac{1}{2}\ln\frac{1 + x}{1 - x}$, $x \in (-1; 1)$.
