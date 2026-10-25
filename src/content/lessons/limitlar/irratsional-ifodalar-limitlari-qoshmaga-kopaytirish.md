---
title: "Irratsional ifodalar limitlari: Qo'shmasiga ko'paytirish va almashtirish usullari"
module: "limitlar"
order: 9
description: "Kvadrat va kubik ildizlar qatnashgan [0/0] hamda [∞ - ∞] aniqmasliklarni qo'shmasiga ko'paytirish va yangi o'zgaruvchi kiritish orqali hisoblash."
---

Limitlarni hisoblash amaliyotida ildiz (radikal) qatnashgan irratsional ifodalar alohida o'rin tutadi. Bunday misollarda $x \to x_0$da ko'pincha$\left[\frac{0}{0}\right]$ko'rinishidagi aniqmaslik,$x \to \infty$da esa$[\infty - \infty]$yoki$\left[\frac{\infty}{\infty}\right]$ ko'rinishidagi aniqmasliklar hosil bo'ladi. Irratsional ifodalarni to'g'ridan-to'g'ri ko'paytuvchilarga ajratib bo'lmagani sababli, maxsus algebraik usullar — **qo'shmasiga ko'paytirish** hamda **irratsionallikdan qutqaruvchi almashtirish (yangi o'zgaruvchi kiritish)** usullari qo'llaniladi.

---

## 1. Qo'shma ifoda tushunchasi va algebraik formulalar

Berilgan irratsional ifodaning **qo'shmasi** deb shunday ifodaga aytiladiki, ularni o'zaro ko'paytirganda barcha ildizlar (radikallar) qisqarib ketib, ratsional ifoda hosil bo'lsin.

### Kvadrat ildizlar uchun qo'shma ifoda
Qisqa ko'paytirish formulasiga ko'ra:
$$
(A - B)(A + B) = A^2 - B^2
$$
Shunga asoslanib:
- $\sqrt{a} - \sqrt{b}$ifodaning qo'shmasi$\sqrt{a} + \sqrt{b}$bo'lib, ularning ko'paytmasi$a - b$ ga teng:
  
$$
  (\sqrt{a} - \sqrt{b})(\sqrt{a} + \sqrt{b}) = a - b
  
$$
- $\sqrt{a} - b$ifodaning qo'shmasi$\sqrt{a} + b$bo'lib, ularning ko'paytmasi$a - b^2$ ga teng:
  
$$
  (\sqrt{a} - b)(\sqrt{a} + b) = a - b^2
  
$$

### Kubik ildizlar uchun qo'shma ifoda (To'liqsiz kvadrat)
Agar limitda uchinchi darajali ildiz ($\sqrt[3]{\phantom{x}}$) qatnashsa, oddiy $(A+B)$ ga ko'paytirish ildizni yo'qotmaydi! Kublar ayirmasi va yig'indisi formulalaridan foydalanish zarur:

$$
(A - B)(A^2 + AB + B^2) = A^3 - B^3
$$
$$
(A + B)(A^2 - AB + B^2) = A^3 + B^3
$$

> [!IMPORTANT]
> **Kubik ildizlar qo'shmasi:**
> - $\sqrt[3]{a} - \sqrt[3]{b}$ifodaning qo'shmasi — bu to'liqsiz kvadrat$\left(\sqrt[3]{a^2} + \sqrt[3]{ab} + \sqrt[3]{b^2}\right)$bo'lib, ularning ko'paytmasi$a - b$ ga teng.
> - Agar $x \to x_0$da$\sqrt[3]{a(x)} \to M$va$\sqrt[3]{b(x)} \to M$bo'lsa (ya'ni ayirma nolga intilsa), u holda to'liqsiz kvadratning har bir hadi$M^2$ ga intiladi va butun qo'shma qavs **$3M^2$** soniga intiladi:
>   
$$
>   \lim_{x \to x_0} \left(\sqrt[3]{a^2} + \sqrt[3]{ab} + \sqrt[3]{b^2}\right) = M^2 + M^2 + M^2 = 3M^2
>   
$$
>   Bu xossa hisob-kitoblarni keskin soddalashtiradi!

---

## 2. Irratsional $\left[\frac{0}{0}\right]$ aniqmasliklarni yechish

Agar $x \to x_0$ da kasrning surati ham, maxraji ham nolga intilsa va ularda ildiz qatnashsa:
1. Ildiz qatnashgan qismning (surat, maxraj yoki har ikkalasining) qo'shmasiga kasrning surat va maxrajini bir vaqtda ko'paytiramiz.
2. Qisqa ko'paytirish formulasini qo'llab, ildizdan qutulamiz.
3. Nolga aylantiruvchi $(x - x_0)$ chiziqli ko'paytuvchini ajratib, qisqartiramiz.

### 1-misol. Suratda kvadrat ildiz qatnashgan limit
Quyidagi limitni hisoblang:
$$
L = \lim_{x \to 3} \frac{\sqrt{2x + 3} - 3}{x^2 - 9}
$$

**Yechish:**
$x = 3$ni qo'ysak,$\frac{\sqrt{9}-3}{9-9} = \left[\frac{0}{0}\right]$aniqmaslik. Suratning qo'shmasi$\sqrt{2x+3} + 3$ ga surat va maxrajni ko'paytiramiz:
$$
L = \lim_{x \to 3} \frac{(\sqrt{2x + 3} - 3)(\sqrt{2x + 3} + 3)}{(x - 3)(x + 3)(\sqrt{2x + 3} + 3)}
$$
Suratda $(\sqrt{2x+3})^2 - 3^2 = 2x + 3 - 9 = 2x - 6 = 2(x - 3)$ hosil bo'ladi:
$$
L = \lim_{x \to 3} \frac{2(x - 3)}{(x - 3)(x + 3)(\sqrt{2x + 3} + 3)} = \lim_{x \to 3} \frac{2}{(x + 3)(\sqrt{2x + 3} + 3)}
$$
Endi $x = 3$ ni qo'yamiz:
$$
L = \frac{2}{(3 + 3)(\sqrt{9} + 3)} = \frac{2}{6 \cdot 6} = \frac{2}{36} = \frac{1}{18}
$$

---

### 2-misol. Suratda ham, maxrajda ham ildiz qatnashgan ("Ikki marta qo'shma") holat
Quyidagi limitni hisoblang:
$$
L = \lim_{x \to 1} \frac{\sqrt{x + 3} - 2}{1 - \sqrt{3x - 2}}
$$

**Yechish:**
$x = 1$da$\left[\frac{0}{0}\right]$aniqmaslik. Ham suratning qo'shmasi$(\sqrt{x+3} + 2)$ga, ham maxrajning qo'shmasi$(1 + \sqrt{3x-2})$ ga ko'paytiramiz:
$$
L = \lim_{x \to 1} \frac{(\sqrt{x + 3} - 2)(\sqrt{x + 3} + 2)(1 + \sqrt{3x - 2})}{(1 - \sqrt{3x - 2})(1 + \sqrt{3x - 2})(\sqrt{x + 3} + 2)}
$$
Formulaga ko'ra soddalashtiramiz:
- $(\sqrt{x+3} - 2)(\sqrt{x+3} + 2) = (x + 3) - 4 = x - 1$-$(1 - \sqrt{3x-2})(1 + \sqrt{3x-2}) = 1 - (3x - 2) = 3 - 3x = -3(x - 1)$

Demak:
$$
L = \lim_{x \to 1} \frac{(x - 1)(1 + \sqrt{3x - 2})}{-3(x - 1)(\sqrt{x + 3} + 2)} = \lim_{x \to 1} \frac{1 + \sqrt{3x - 2}}{-3(\sqrt{x + 3} + 2)}
$$
$x = 1$ qiymatni qo'yamiz:
$$
L = \frac{1 + \sqrt{1}}{-3(\sqrt{4} + 2)} = \frac{2}{-3 \cdot 4} = -\frac{1}{6}
$$

---

### 3-misol. Kubik ildiz qatnashgan limit
Quyidagi limitni hisoblang:
$$
L = \lim_{x \to 2} \frac{\sqrt[3]{4x} - 2}{x - 2}
$$

**Yechish:**
$x = 2$da$\frac{\sqrt[3]{8}-2}{2-2} = \left[\frac{0}{0}\right]$aniqmaslik. Bu yerda$A = \sqrt[3]{4x}$va$B = 2$. Qo'shma ifoda $A^2 + AB + B^2 = \sqrt[3]{(4x)^2} + 2\sqrt[3]{4x} + 4$ ga surat va maxrajni ko'paytiramiz:
$$
L = \lim_{x \to 2} \frac{(\sqrt[3]{4x})^3 - 2^3}{(x - 2)\left(\sqrt[3]{16x^2} + 2\sqrt[3]{4x} + 4\right)} = \lim_{x \to 2} \frac{4(x - 2)}{(x - 2)\left(\sqrt[3]{16x^2} + 2\sqrt[3]{4x} + 4\right)}
$$
$(x-2)$ni qisqartirib,$x = 2$ni qo'yamiz (e'tibor bering, maxrajdagi qavsning har bir hadi$2^2 = 4$ga teng bo'lib, yig'indi$3 \cdot 4 = 12$ chiqadi):
$$
L = \frac{4}{4 + 4 + 4} = \frac{4}{12} = \frac{1}{3}
$$

---

## 3. $[\infty - \infty]$ko'rinishidagi irratsional aniqmasliklar$x \to +\infty$(yoki$x \to -\infty$) da ikkita ildiz ayirmasi $\sqrt{P(x)} - \sqrt{Q(x)}$ko'rinishidagi$[\infty - \infty]$aniqmaslikni beradi. Bunday limitni yechish uchun ifodaning maxrajini$1$deb olib, qo'shmasiga ko'paytiramiz va hosil bo'lgan$\left[\frac{\infty}{\infty}\right]$ aniqmaslikda surat va maxrajni eng katta darajaga bo'lamiz.

> [!WARNING]
> **$x \to -\infty$ holatda modulga ehtiyot bo'ling!**
> Haqiqiy sonlar to'plamida har qanday $x$ uchun:
> 
$$
> \sqrt{x^2} = |x| = \begin{cases} x, & \text{agar } x > 0 \text{ bo'lsa } (x \to +\infty), \\ -x, & \text{agar } x < 0 \text{ bo'lsa } (x \to -\infty). \end{cases}
> 
$$
> Agar $x \to -\infty$bo'lsa, ildiz ostidan$x^2$ ni chiqarganda uning oldiga **minus** ishorasini qo'yish shart!

### 4-misol. $[\infty - \infty]$ aniqmaslikni hisoblash
Quyidagi limitni hisoblang:
$$
L = \lim_{x \to +\infty} \left(\sqrt{x^2 + 6x - 1} - \sqrt{x^2 - 2x + 3}\right)
$$

**Yechish:**
Bu $[\infty - \infty]$ aniqmaslik. Qo'shmasiga ko'paytiramiz va bo'lamiz:
$$
L = \lim_{x \to +\infty} \frac{(x^2 + 6x - 1) - (x^2 - 2x + 3)}{\sqrt{x^2 + 6x - 1} + \sqrt{x^2 - 2x + 3}} = \lim_{x \to +\infty} \frac{8x - 4}{\sqrt{x^2 + 6x - 1} + \sqrt{x^2 - 2x + 3}}
$$
Endi $\left[\frac{\infty}{\infty}\right]$aniqmaslik hosil bo'ldi.$x \to +\infty$da$\sqrt{x^2} = x$bo'lgani uchun surat va maxrajni$x$ ga bo'lamiz:
$$
L = \lim_{x \to +\infty} \frac{8 - \frac{4}{x}}{\sqrt{1 + \frac{6}{x} - \frac{1}{x^2}} + \sqrt{1 - \frac{2}{x} + \frac{3}{x^2}}} = \frac{8 - 0}{\sqrt{1 + 0} + \sqrt{1 - 0}} = \frac{8}{1 + 1} = 4
$$

---

## 4. Yangi o'zgaruvchi kiritish (almashtirish) usuli

Agar limitda bir xil ifodaning turli darajali ildizlari (masalan, $\sqrt{x}$va$\sqrt[3]{x}$) bir vaqtda qatnashsa, qo'shmaga ko'paytirish juda uzun bo'lib ketadi. Bunday hollarda ildiz ko'rsatkichlarining **eng kichik umumiy karralisi (EKUK)** topiladi va yangi o'zgaruvchi kiritiladi.

> [!TIP]
> **Almashtirish qoidasi:** Agar misolda $\sqrt[n]{f(x)}$va$\sqrt[m]{f(x)}$ildizlar qatnashsa,$k = \text{EKUK}(n, m)$ ni topib, **$f(x) = t^k$** almashtirish kiritamiz. Shunda barcha ildizlar bir vaqtda yo'qolib, misol oddiy ko'phadlar nisbatiga aylanadi!

### 5-misol. Turli darajali ildizlardan qutulish
Quyidagi limitni hisoblang:
$$
L = \lim_{x \to 1} \frac{\sqrt{x} - 1}{\sqrt[3]{x} - 1}
$$

**Yechish:**
Bu yerda kvadrat ildiz ($n=2$) va kubik ildiz ($m=3$) qatnashgan. $\text{EKUK}(2, 3) = 6$.
$x = t^6$ almashtirish kiritamiz.
- U holda $\sqrt{x} = \sqrt{t^6} = t^3$va$\sqrt[3]{x} = \sqrt[3]{t^6} = t^2$.
- $x \to 1$da$t^6 \to 1$, ya'ni $t \to 1$.

Limit yangi $t$ o'zgaruvchiga nisbatan quyidagi ratsional ko'rinishni oladi:
$$
L = \lim_{t \to 1} \frac{t^3 - 1}{t^2 - 1} = \lim_{t \to 1} \frac{(t - 1)(t^2 + t + 1)}{(t - 1)(t + 1)}
$$
$(t - 1)$ni qisqartiramiz va$t = 1$ ni qo'yamiz:
$$
L = \lim_{t \to 1} \frac{t^2 + t + 1}{t + 1} = \frac{1 + 1 + 1}{1 + 1} = \frac{3}{2} = 1.5
$$

---

## 5. O'z-o'zini tekshirish savollari

> [!NOTE]
> Bilimingizni mustahkamlash uchun quyidagi savollarga javob bering:
> 1. $\sqrt[3]{x+1} + 2$ ifodaning qo'shmasi qanday ko'rinishda bo'ladi?
> 2. Agar limitda $\sqrt[3]{x+1}$va$\sqrt[4]{x+1}$ qatnashsa, qanday almashtirish kiritish maqsadga muvofiq?
> 3. Nima uchun $\lim_{x \to +\infty} (\sqrt{x^2+2x} + x)$ misolida qo'shmaga ko'paytirish shart emas?

---

## 6. Mustaqil yechish uchun mashqlar

Quyidagi limitlarni mos usullarni tanlab hisoblang:

1. $\lim_{x \to 4} \frac{\sqrt{2x + 1} - 3}{\sqrt{x - 2} - \sqrt{2}}$2.$\lim_{x \to 0} \frac{\sqrt[3]{1 + 3x} - 1}{x}$3.$\lim_{x \to +\infty} \left(\sqrt{4x^2 - 8x + 1} - 2x\right)$4.$\lim_{x \to -\infty} \left(\sqrt{x^2 + 4x} + x\right)$5.$\lim_{x \to 64} \frac{\sqrt{x} - 8}{\sqrt[3]{x} - 4}$

**Javoblar:**
1. $\frac{2\sqrt{2}}{3}$2.$1$3.$-2$4.$-2$(Ko'rsatma:$x \to -\infty$da$\sqrt{x^2} = |x| = -x$ ekanligini unutmang!)
5. $3$(Ko'rsatma:$x = t^6$, $t \to 2$ almashtirish kiriting).
