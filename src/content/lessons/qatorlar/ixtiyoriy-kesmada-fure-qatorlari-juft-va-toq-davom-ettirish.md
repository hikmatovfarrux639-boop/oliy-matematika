---
title: "Ixtiyoriy [-l, l] kesmada Fure qatorlari hamda juft va toq davom ettirish"
module: "qatorlar"
order: 10
description: "2l davrli funksiyalar uchun Fure koeffitsiyentlari, Dirixle shartlari, [0, l] kesmada faqat kosinuslar yoki faqat sinuslar bo'yicha Fure qatoriga yoyish."
---

Avvalgi mavzularda biz davri $T = 2\pi$ bo'lgan va $[-\pi, \pi]$ kesmada aniqlangan funksiyalarning trigonometrik Fure qatorlarini o'rgangan edik. Biroq fizika, elektrotexnika, mexanika va signallarni qayta ishlash masalalarida funksiyalarning davri $2\pi$ emas, balki ixtiyoriy $T = 2l$ ($l > 0$) bo'ladi yoki funksiya faqatgina $[0, l]$ chekli kesmada berilgan bo'ladi. Ushbu darsda biz Fure qatorlari nazariyasini ixtiyoriy $[-l, l]$ va $[0, l]$ kesmalarga umumlashtiramiz.

---

## 1. Davri $2l$ bo'lgan funksiyalar uchun Fure qatori

Faraz qilaylik, $f(x)$ funksiya $[-l, l]$ kesmada aniqlangan (yoki butun sonlar o'qida $T = 2l$ davr bilan davriy) bo'lsin. U holda $t = \frac{\pi x}{l}$ chiziqli o'zgaruvchini almashtirish orqali $[-l, l]$ kesmani $[-\pi, \pi]$ kesmaga akslantirish mumkin:
* $x = -l \implies t = -\pi$
* $x = l \implies t = \pi$
* $dx = \frac{l}{\pi} dt$

Ushbu almashtirish natijasida $[-l, l]$ kesmada ortogonal bo'lgan quyidagi trigonometrik sistema hosil bo'ladi:
$$
1, \quad \cos\frac{\pi x}{l}, \quad \sin\frac{\pi x}{l}, \quad \cos\frac{2\pi x}{l}, \quad \sin\frac{2\pi x}{l}, \quad \dots, \quad \cos\frac{n\pi x}{l}, \quad \sin\frac{n\pi x}{l}, \quad \dots
$$

> [!IMPORTANT]
> **Ixtiyoriy $[-l, l]$ kesmadagi Fure qatori va Eyler-Fure formulalari:**
> 
$$
> f(x) \sim \frac{a_0}{2} + \sum_{n=1}^{\infty} \left( a_n \cos\frac{n\pi x}{l} + b_n \sin\frac{n\pi x}{l} \right)
> 
$$
> Bunda Fure koeffitsiyentlari quyidagi formulalar orqali hisoblanadi:
> 
$$
> a_0 = \frac{1}{l} \int_{-l}^{l} f(x) \, dx
> 
$$
> 
$$
> a_n = \frac{1}{l} \int_{-l}^{l} f(x) \cos\frac{n\pi x}{l} \, dx, \quad (n = 1, 2, 3, \dots)
> 
$$
> 
$$
> b_n = \frac{1}{l} \int_{-l}^{l} f(x) \sin\frac{n\pi x}{l} \, dx, \quad (n = 1, 2, 3, \dots)
> 
$$

---

## 2. Dirixle shartlari va yaqinlashish teoremasi

Funksiyaning Fure qatori qachon funksiyaning o'ziga yaqinlashadi? Bunga mashhur **Dirixle teoremasi** javob beradi.

**Dirixle shartlari:** Agar $2l$ davrli $f(x)$ funksiya $[-l, l]$ kesmada:
1. Bo'lakli-monoton bo'lsa (ya'ni kesmani chekli sondagi monotonlik oraliqlariga bo'lish mumkin bo'lsa),
2. Bo'lakli-uzluksiz bo'lsa (ya'ni chekli sondagi $1$-tur uzilish nuqtalariga ega bo'lib, chekli qiymatli bo'lsa),

u holda $f(x)$ ning Fure qatori har bir $x \in \mathbb{R}$ nuqtada yaqinlashadi va uning yig'indisi $S(x)$ quyidagiga teng bo'ladi:
* Har bir **uzluksizlik nuqtasida**:
$$
S(x) = f(x)
$$
* Har bir **$x_0$ uzilish nuqtasida** (chap va o'ng limitlarning o'rta arifmetigiga):
$$
S(x_0) = \frac{f(x_0 - 0) + f(x_0 + 0)}{2}
$$
* Kesmaning **chegara nuqtalarida** ($x = \pm l$):
$$
S(-l) = S(l) = \frac{f(-l + 0) + f(l - 0)}{2}
$$

---

## 3. $[-l, l]$ kesmada juft va toq funksiyalarning Fure qatorlari

Simmetrik $[-l, l]$ kesmada juft va toq funksiyalarning integrallash xossalaridan foydalanib, hisoblashlarni ikki barobar qisqartirish mumkin:

### 3.1. Juft funksiya ($f(-x) = f(x)$)
Ko'paytma $f(x) \cos\frac{n\pi x}{l}$ — juft, $f(x) \sin\frac{n\pi x}{l}$ esa — toq funksiya bo'ladi. Shu sababli barcha $b_n = 0$ bo'lib, Fure qatori **faqat kosinuslardan** iborat bo'ladi:
$$
f(x) \sim \frac{a_0}{2} + \sum_{n=1}^{\infty} a_n \cos\frac{n\pi x}{l}, \quad \text{bunda } a_n = \frac{2}{l} \int_{0}^{l} f(x) \cos\frac{n\pi x}{l} \, dx \quad (n = 0, 1, 2, \dots)
$$

### 3.2. Toq funksiya ($f(-x) = -f(x)$)
Ko'paytma $f(x) \cos\frac{n\pi x}{l}$ — toq, $f(x) \sin\frac{n\pi x}{l}$ esa — juft funksiya bo'ladi. Shu sababli $a_0 = 0$ va barcha $a_n = 0$ bo'lib, Fure qatori **faqat sinuslardan** iborat bo'ladi:
$$
f(x) \sim \sum_{n=1}^{\infty} b_n \sin\frac{n\pi x}{l}, \quad \text{bunda } b_n = \frac{2}{l} \int_{0}^{l} f(x) \sin\frac{n\pi x}{l} \, dx \quad (n = 1, 2, 3, \dots)
$$

---

## 4. $[0, l]$ kesmada berilgan funksiyani juft va toq davom ettirish

Amaliy masalalarda (masalan, uzunligi $l$ bo'lgan torning tebranishi yoki sterjenda issiqlik tarqalishi tenglamalarida) funksiya faqat $[0, l]$ kesmada berilgan bo'ladi. Uni Fure qatoriga yoyish uchun $[-l, 0)$ yarim intervalga **sun'iy ravishda davom ettirish** mumkin:

1. **Juft davom ettirish (Kosinuslar qatori):**
   $[-l, 0)$ da $f_{\text{juft}}(x) = f(-x)$ deb olamiz. Natijada $[-l, l]$ da juft funksiya hosil bo'ladi va $[0, l]$ kesmada u **faqat kosinuslar bo'yicha** yoyiladi ($b_n = 0$, $a_n = \frac{2}{l} \int_0^l f(x) \cos\frac{n\pi x}{l} dx$).
2. **Toq davom ettirish (Sinuslar qatori):**
   $[-l, 0)$ da $f_{\text{toq}}(x) = -f(-x)$ deb olamiz. Natijada $[-l, l]$ da toq funksiya hosil bo'ladi va $[0, l]$ kesmada u **faqat sinuslar bo'yicha** yoyiladi ($a_0 = a_n = 0$, $b_n = \frac{2}{l} \int_0^l f(x) \sin\frac{n\pi x}{l} dx$).

> [!TIP]
> E'tibor bering: bir xil $f(x)$ funksiya $[0, l]$ kesmaning ichki nuqtalarida ham kosinuslar qatori, ham sinuslar qatori bilan aynan bir xil qiymatga yaqinlashadi! Farq faqat $[-l, 0)$ kesmada va chegara nuqtalari $x = 0, x = l$ dagi yaqinlashish tezligida bo'ladi.

---

## 5. Namuna misollar (Qadamma-qadam yechimlar bilan)

### 1-misol. $[-2, 2]$ kesmada berilgan funksiyani Fure qatoriga yoyish
$[-2, 2]$ kesmada $f(x) = |x|$ funksiyani Fure qatoriga yoying ($l = 2$) va shu yoyilmadan foydalanib $\sum_{k=1}^{\infty} \frac{1}{(2k-1)^2}$ qator yig'indisini toping.

**Yechish:**
1. $f(x) = |x|$ funksiya $[-2, 2]$ kesmada **juft funksiya** ($|-x| = |x|$). Demak, $b_n = 0$ va qator faqat kosinuslardan iborat bo'ladi ($l = 2$).
2. $a_0$ koeffitsiyentni hisoblaymiz:
$$
a_0 = \frac{2}{2} \int_0^2 x \, dx = \left. \frac{x^2}{2} \right|_0^2 = 2
$$
3. $a_n$ koeffitsiyentni bo'laklab integrallash orqali hisoblaymiz ($u = x$, $dv = \cos\frac{n\pi x}{2} dx$):
$$
a_n = \frac{2}{2} \int_0^2 x \cos\frac{n\pi x}{2} \, dx = \left. x \cdot \frac{2}{n\pi} \sin\frac{n\pi x}{2} \right|_0^2 - \frac{2}{n\pi} \int_0^2 \sin\frac{n\pi x}{2} \, dx
$$
Birinchi had $\sin(n\pi) = 0$ va $x = 0$ hisobiga nolga aylanadi. Ikkinchi hadni integrallaymiz:
$$
a_n = \left. \frac{4}{n^2 \pi^2} \cos\frac{n\pi x}{2} \right|_0^2 = \frac{4}{n^2 \pi^2} (\cos(n\pi) - \cos 0) = \frac{4}{n^2 \pi^2} \left((-1)^n - 1\right)
$$
* Agar $n = 2k$ (juft) bo'lsa: $(-1)^{2k} - 1 = 0 \implies a_{2k} = 0$.
* Agar $n = 2k-1$ (toq) bo'lsa: $(-1)^{2k-1} - 1 = -2 \implies a_{2k-1} = -\frac{8}{\pi^2 (2k-1)^2}$.
4. Funksiya $[-2, 2]$ da uzluksiz bo'lgani uchun Fure qatori har bir nuqtada $|x|$ ga teng:
$$
|x| = 1 - \frac{8}{\pi^2} \sum_{k=1}^{\infty} \frac{1}{(2k-1)^2} \cos\frac{(2k-1)\pi x}{2}, \quad x \in [-2, 2]
$$
5. Ushbu tenglikka $x = 0$ ni qo'ysak ($\cos 0 = 1$):
$$
0 = 1 - \frac{8}{\pi^2} \sum_{k=1}^{\infty} \frac{1}{(2k-1)^2} \implies \sum_{k=1}^{\infty} \frac{1}{(2k-1)^2} = 1 + \frac{1}{3^2} + \frac{1}{5^2} + \dots = \frac{\pi^2}{8}
$$

---

### 2-misol. $[0, l]$ kesmada sinuslar bo'yicha Fure qatoriga yoyish
$[0, 3]$ kesmada berilgan $f(x) = 3 - x$ funksiyani **faqat sinuslar bo'yicha** Fure qatoriga yoying.

**Yechish:**
1. Faqat sinuslar qatorini olish uchun funksiyani $[-3, 0)$ kesmaga **toq ravishda** davom ettiramiz ($l = 3$). U holda $a_0 = 0$ va $a_n = 0$.
2. $b_n$ koeffitsiyentni topamiz:
$$
b_n = \frac{2}{3} \int_0^3 (3 - x) \sin\frac{n\pi x}{3} \, dx
$$
Bo'laklab integrallaymiz ($u = 3 - x \implies du = -dx$; $dv = \sin\frac{n\pi x}{3} dx \implies v = -\frac{3}{n\pi} \cos\frac{n\pi x}{3}$):
$$
b_n = \frac{2}{3} \left[ \left. -(3-x)\frac{3}{n\pi}\cos\frac{n\pi x}{3} \right|_0^3 - \frac{3}{n\pi} \int_0^3 \cos\frac{n\pi x}{3} \, dx \right]
$$
Ikkinchi integral $\left.\sin\frac{n\pi x}{3}\right|_0^3 = 0$ ga teng. Birinchi ifodada $x = 3$ da qavs $(3-3)=0$, $x = 0$ da esa:
$$
b_n = \frac{2}{3} \left[ 0 - \left(-3 \cdot \frac{3}{n\pi} \cos 0\right) \right] = \frac{2}{3} \cdot \frac{9}{n\pi} = \frac{6}{n\pi}
$$
3. Natijaviy Fure sinuslar qatori:
$$
3 - x = \frac{6}{\pi} \sum_{n=1}^{\infty} \frac{1}{n} \sin\frac{n\pi x}{3}, \quad x \in (0, 3]
$$

> [!WARNING]
> $x = 0$ nuqtada toq davom ettirilgan funksiya uzilishga ega ($f(+0) = 3$, $f(-0) = -3$), shuning uchun $x = 0$ da qator yig'indisi $S(0) = 0$ ga teng (lekin $f(0) = 3$). Demak, tenglik $(0, 3]$ yarim intervalda o'rinli!

---

## O'z-o'zini tekshirish savollari

1. $2\pi$ davrli Fure qatoridan $2l$ davrli Fure qatoriga o'tishda trigonometrik funksiyalar argumenti va integral oldidagi koeffitsiyent qanday o'zgaradi?
2. Funksiya $x_0$ nuqtada $1$-tur uzilishga ega bo'lsa, Dirixle teoremasiga ko'ra Fure qatori shu nuqtada qanday qiymatga yaqinlashadi?
3. $[0, l]$ kesmada berilgan funksiyani kosinuslar bo'yicha yoyish uchun uni $[-l, 0)$ kesmaga qanday davom ettirish kerak? Sinuslar bo'yicha yoyish uchun-chi?
4. Nima uchun juft davom ettirish odatda toq davom ettirishga qaraganda tezroq yaqinlashuvchi qator beradi ($a_n \sim \frac{1}{n^2}$ vs $b_n \sim \frac{1}{n}$)? *(Ko'rsatma: $x=0$ nuqtadagi uzluksizlikni tekshiring).*

---

## Mustaqil yechish uchun masalalar

1. **1-masala:** $[-1, 1]$ kesmada berilgan $f(x) = x^2$ funksiyani Fure qatoriga yoying ($l = 1$).
2. **2-masala:** $[-l, l]$ kesmada berilgan pog'onasimon funksiya: $f(x) = -1$ ($-l < x < 0$ da) va $f(x) = 1$ ($0 < x < l$ da) uchun Fure qatorini tuzing.
3. **3-masala:** $[0, 2]$ kesmada berilgan $f(x) = x$ funksiyani:
   a) faqat kosinuslar bo'yicha;
   b) faqat sinuslar bo'yicha Fure qatoriga yoying.
4. **4-masala:** $[-3, 3]$ kesmada $f(x) = \begin{cases} 0, & -3 \le x < 0 \\ x, & 0 \le x \le 3 \end{cases}$ funksiyaning Fure qatori $x = 3$ va $x = 0$ nuqtalarda qanday qiymatlarga yaqinlashishini Dirixle teoremasi yordamida qatorni tuzmasdan toping.

---

### Javoblar

1. Juft funksiya ($b_n = 0$): $x^2 = \frac{1}{3} + \frac{4}{\pi^2} \sum_{n=1}^{\infty} \frac{(-1)^n}{n^2} \cos(n\pi x), \quad x \in [-1, 1]$.
2. Toq funksiya ($a_n = 0$): $f(x) \sim \frac{4}{\pi} \sum_{k=1}^{\infty} \frac{1}{2k-1} \sin\frac{(2k-1)\pi x}{l}$.
3. a) Juft davom ettirish: $x = 1 - \frac{8}{\pi^2} \sum_{k=1}^{\infty} \frac{1}{(2k-1)^2} \cos\frac{(2k-1)\pi x}{2}$;
   b) Toq davom ettirish: $x = \frac{4}{\pi} \sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n} \sin\frac{n\pi x}{2}$.
4. $x = 0$ ichki nuqtada funksiya uzluksiz ($f(-0) = f(+0) = 0$), demak $S(0) = 0$. Chegara nuqtasi $x = 3$ da: $S(3) = \frac{f(-3+0) + f(3-0)}{2} = \frac{0 + 3}{2} = 1.5$.
