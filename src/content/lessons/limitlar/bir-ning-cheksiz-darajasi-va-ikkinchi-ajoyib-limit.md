---
title: "1^∞ ko'rinishidagi aniqmasliklar va ikkinchi ajoyib limit amaliyoti"
module: "limitlar"
order: 8
description: "Ikkinchi ajoyib limitning barcha turlari, [1^∞] aniqmaslikni yechishning klassik qavs ajratish usuli va tezkor e^(lim (u-1)v) oltin qoidasi."
---

Matematik analizda darajali-ko'rsatkichli ko'rinishdagi $u(x)^{v(x)}$ funksiyalarning limitini hisoblashda eng ko'p uchraydigan va eng muhim holat — bu asos $u(x) \to 1$ ga, daraja ko'rsatkichi esa $v(x) \to \infty$ ga intilganda yuzaga keladigan **$[1^\infty]$ ko'rinishidagi aniqmaslikdir**. Elementar arifmetikada $1$ ning har qanday chekli darajasi $1$ ga teng bo'lsa-da, cheksiz kichik miqdorlar ishtirokidagi limitik jarayonda $(1 + \text{cheksiz kichik})^{\text{cheksiz katta}}$ ifoda mutlaqo boshqa chekli songa — Eyler soni $e$ va uning darajalariga intiladi.

Ushbu darsda biz ikkinchi ajoyib limitning barcha modifikatsiyalarini, klassik shaklga keltirish algoritmini hamda amaliyotda vaqtni bir necha barobar tejaydigan **oltin qoida (eksponensial formula)** ni chuqur o'rganamiz.

---

## 1. Ikkinchi ajoyib limit va uning modifikatsiyalari

Ketma-ketliklar va funksiyalar nazariyasidan ma'lumki, argument cheksizlikka yoki nolga intilganda quyidagi fundamental limitlar o'rinli bo'lib, ular **ikkinchi ajoyib limit** deb ataladi:

$$
\lim_{x \to \infty} \left(1 + \frac{1}{x}\right)^x = e \approx 2.718281828...
$$

Agar bu yerda $\alpha = \frac{1}{x}$ almashtirish kiritsak ($x \to \infty$ da $\alpha \to 0$), ikkinchi ajoyib limitning nolga intiluvchi argument uchun ko'rinishi hosil bo'ladi:

$$
\lim_{\alpha \to 0} (1 + \alpha)^{\frac{1}{\alpha}} = e
$$

> [!IMPORTANT]
> **Umumlashgan ikkinchi ajoyib limit:** Agar $\alpha(x)$ ixtiyoriy cheksiz kichik funksiya ($\lim_{x \to x_0} \alpha(x) = 0$ va $\alpha(x) \neq 0$) bo'lsa, u holda $x \to x_0$ (yoki $x \to \infty$) da:
> 
$$
> \lim_{x \to x_0} \big(1 + \alpha(x)\big)^{\frac{1}{\alpha(x)}} = e
> 
$$
> Xususan, ixtiyoriy o'zgarmas $k \in \mathbb{R}$ soni uchun quyidagi muhim xususiy hollar bajariladi:
> 
$$
> \lim_{x \to \infty} \left(1 + \frac{k}{x}\right)^x = e^k, \qquad \lim_{x \to 0} (1 + kx)^{\frac{1}{x}} = e^k
> 
$$

### Tuzilish qonuniyati (Shablon)
Ikkinchi ajoyib limit ishlashi uchun ifoda qat'iy ravishda quyidagi strukturaga ega bo'lishi shart:
1. Qavs ichida **aniq bir soni plus cheksiz kichik ifoda**: $1 + \alpha(x)$, bu yerda $\alpha(x) \to 0$.
2. Qavsning darajasida xuddi shu cheksiz kichik ifodaning **aniq teskarisi**: $\frac{1}{\alpha(x)} \to \infty$.

---

## 2. $[1^\infty]$ aniqmaslikni yechishning ikki usuli

Faraz qilaylik, bizga $\lim_{x \to x_0} \big(u(x)\big)^{v(x)}$ limit berilgan bo'lib, $x \to x_0$ da $u(x) \to 1$ va $v(x) \to \infty$ bo'lsin. Bunday limitni hisoblashning ikkita asosiy yo'li mavjud.

### 1-usul: Klassik (ikkinchi ajoyib limit qolipiga keltirish) usuli
Bu usulda qavs ichidagi $u(x)$ ifoda sun'iy ravishda $1 + \alpha(x)$ ko'rinishiga keltiriladi:
1. Qavs ichiga $1$ ni qo'shamiz va ayiramiz: $u(x) = 1 + (u(x) - 1) = 1 + \alpha(x)$, bu yerda $\alpha(x) = u(x) - 1 \to 0$.
2. Daraja ko'rsatkichini $\frac{1}{\alpha(x)}$ ga ko'paytiramiz va bo'lamiz:
   
$$
   \big(u(x)\big)^{v(x)} = \left[ \big(1 + \alpha(x)\big)^{\frac{1}{\alpha(x)}} \right]^{\alpha(x) \cdot v(x)}
   
$$
3. Ichki qavs $e$ ga intilgani sababli, natija darajaning limitiga teng bo'ladi.

### 2-usul: Tezkor "Oltin qoida" (Eksponensial formula)
Klassik usuldagi oxirgi qadamni umumlashtirsak, har safar darajani ko'paytirib-bo'lib o'tirmasdan, to'g'ridan-to'g'ri javobga olib boradigan universal formula kelib chiqadi.

> [!TIP]
> **$[1^\infty]$ aniqmaslikni yechishning Oltin Qoidasi:**
> Agar $\lim_{x \to x_0} u(x) = 1$ va $\lim_{x \to x_0} v(x) = \infty$ bo'lsa, u holda:
> 
$$
> \lim_{x \to x_0} \big(u(x)\big)^{v(x)} = \exp\left( \lim_{x \to x_0} \big(u(x) - 1\big) \cdot v(x) \right) = e^{\lim_{x \to x_0} (u(x) - 1) v(x)}
> 
$$
> Bu qoida har qanday $[1^\infty]$ aniqmaslikni bir qadamda oddiy $[0 \cdot \infty]$ yoki $\left[\frac{\infty}{\infty}\right]$, $\left[\frac{0}{0}\right]$ ko'rinishidagi ko'paytma limitiga aylantiradi!

> [!WARNING]
> **Oltin qoidani qo'llashdan oldin aniqmaslik turini tekshiring!**
> Agar qavs ichidagi asos $1$ ga emas, balki boshqa songa (masalan, $\frac{1}{2}$ yoki $3$ ga) intilsa, bu $[1^\infty]$ aniqmaslik **emas**!
> Masalan:
> - $\lim_{x \to \infty} \left(\frac{x+1}{2x+1}\right)^x = \left[\left(\frac{1}{2}\right)^{+\infty}\right] = 0$ (chunki $0 < \frac{1}{2} < 1$).
> - $\lim_{x \to \infty} \left(\frac{3x-1}{x+2}\right)^x = \left[3^{+\infty}\right] = +\infty$ (chunki $3 > 1$).
> Bunday misollarda ikkinchi ajoyib limitni qo'llash qo'pol xatoga olib keladi!

---

## 3. Bosqichma-bosqich yechilgan namunaviy misollar

### 1-misol. Retsional kasr asosdagi $[1^\infty]$ aniqmaslik (Ikki usulda)
Quyidagi limitni hisoblang:
$$
L = \lim_{x \to \infty} \left(\frac{2x + 3}{2x - 1}\right)^{3x + 2}
$$

**Yechish:**
Avvalo aniqmaslik turini aniqlaymiz: $x \to \infty$ da asos $\frac{2x+3}{2x-1} \sim \frac{2x}{2x} = 1$ ga, daraja esa $3x+2 \to \infty$ ga intiladi. Demak, $[1^\infty]$ aniqmaslik.

**1-usul (Klassik qavs ajratish):**
Suratdagi $2x+3$ ni maxrajdagi $2x-1$ orqali ifodalaymiz: $2x+3 = (2x-1) + 4$.
$$
L = \lim_{x \to \infty} \left(1 + \frac{4}{2x - 1}\right)^{3x + 2}
$$
Bu yerda $\alpha(x) = \frac{4}{2x-1} \to 0$. Darajada $\frac{2x-1}{4}$ ni hosil qilamiz:
$$
L = \lim_{x \to \infty} \left[ \left(1 + \frac{4}{2x - 1}\right)^{\frac{2x - 1}{4}} \right]^{\frac{4}{2x - 1} \cdot (3x + 2)}
$$
Katta qavs ichidagi ifoda ikkinchi ajoyib limitga ko'ra $e$ ga intiladi. Darajaning limitini hisoblaymiz:
$$
\lim_{x \to \infty} \frac{4(3x + 2)}{2x - 1} = \lim_{x \to \infty} \frac{12x + 8}{2x - 1} = \frac{12}{2} = 6
$$
Demak, $L = e^6$.

**2-usul (Oltin qoida yordamida):**
$u(x) = \frac{2x+3}{2x-1}$ va $v(x) = 3x+2$ uchun $e^{\lim (u-1)v}$ formulasini yozamiz:
$$
L = e^{\lim_{x \to \infty} \left(\frac{2x+3}{2x-1} - 1\right)(3x+2)} = e^{\lim_{x \to \infty} \frac{2x+3 - (2x-1)}{2x-1}(3x+2)} = e^{\lim_{x \to \infty} \frac{4(3x+2)}{2x-1}} = e^6
$$
Ko'rib turganingizdek, 2-usul ancha ixcham va xatoga yo'l qo'yish ehtimoli kamroq.

---

### 2-misol. Argument chekli songa intilganda
Quyidagi limitni hisoblang:
$$
L = \lim_{x \to 2} (3x - 5)^{\frac{2x}{x^2 - 4}}
$$

**Yechish:**
$x \to 2$ ni o'rniga qo'yamiz: asos $3(2)-5 = 1$, daraja $\frac{4}{4-4} = \frac{4}{0} = \infty$. Demak, $[1^\infty]$ aniqmaslik.
Oltin qoidani qo'llaymiz ($u(x) = 3x-5$, $v(x) = \frac{2x}{x^2-4}$):
$$
L = \exp\left( \lim_{x \to 2} \big((3x - 5) - 1\big) \cdot \frac{2x}{x^2 - 4} \right)
$$
Darajadagi limitni soddalashtiramiz:
$$
\lim_{x \to 2} (3x - 6) \cdot \frac{2x}{(x - 2)(x + 2)} = \lim_{x \to 2} \frac{3(x - 2) \cdot 2x}{(x - 2)(x + 2)}
$$
Nolga aylantiruvchi $(x-2)$ ko'paytuvchini qisqartiramiz va $x = 2$ ni qo'yamiz:
$$
\lim_{x \to 2} \frac{6x}{x + 2} = \frac{6 \cdot 2}{2 + 2} = \frac{12}{4} = 3
$$
Shunday qilib, $L = e^3$.

---

### 3-misol. Trigonometrik funksiyalar qatnashgan $[1^\infty]$ aniqmaslik
Quyidagi limitni hisoblang:
$$
L = \lim_{x \to 0} (\cos 2x)^{\frac{1}{\sin^2 3x}}
$$

**Yechish:**
$x \to 0$ da $\cos 2x \to \cos 0 = 1$ va $\frac{1}{\sin^2 3x} \to \frac{1}{0} = \infty$. Demak, $[1^\infty]$ aniqmaslik.
Oltin qoidaga binoan:
$$
L = \exp\left( \lim_{x \to 0} (\cos 2x - 1) \cdot \frac{1}{\sin^2 3x} \right)
$$
Trigonometriyadan $1 - \cos 2x = 2\sin^2 x$, ya'ni $\cos 2x - 1 = -2\sin^2 x$ ekanligidan foydalanamiz:
$$
\lim_{x \to 0} \frac{-2\sin^2 x}{\sin^2 3x}
$$
Birinchi ajoyib limitdan ma'lum bo'lgan $\sin \alpha \sim \alpha$ ($\alpha \to 0$) ekvivalentlikdan foydalanamiz: $\sin x \sim x$ va $\sin 3x \sim 3x$. U holda:
$$
\lim_{x \to 0} \frac{-2 x^2}{(3x)^2} = \lim_{x \to 0} \frac{-2 x^2}{9 x^2} = -\frac{2}{9}
$$
Demak, berilgan limitning qiymati:
$$
L = e^{-\frac{2}{9}} = \frac{1}{\sqrt[9]{e^2}}
$$

---

### 4-misol. Murakkab kombinatsiyalashgan misol
Quyidagi limitni hisoblang:
$$
L = \lim_{x \to \frac{\pi}{4}} (\operatorname{tg} x)^{\operatorname{tg} 2x}
$$

**Yechish:**
$x \to \frac{\pi}{4}$ da $\operatorname{tg} \frac{\pi}{4} = 1$, $\operatorname{tg} \left(2 \cdot \frac{\pi}{4}\right) = \operatorname{tg} \frac{\pi}{2} = \infty$. Bu $[1^\infty]$ aniqmaslikdir.
Oltin qoidani qo'llaymiz:
$$
L = \exp\left( \lim_{x \to \frac{\pi}{4}} (\operatorname{tg} x - 1) \operatorname{tg} 2x \right)
$$
Ikkilangan burchak tangensi formulasini eslaymiz:
$$
\operatorname{tg} 2x = \frac{2\operatorname{tg} x}{1 - \operatorname{tg}^2 x} = \frac{2\operatorname{tg} x}{(1 - \operatorname{tg} x)(1 + \operatorname{tg} x)} = -\frac{2\operatorname{tg} x}{(\operatorname{tg} x - 1)(\operatorname{tg} x + 1)}
$$
Bu ifodani limit ichiga qo'yamiz:
$$
\lim_{x \to \frac{\pi}{4}} (\operatorname{tg} x - 1) \cdot \left( -\frac{2\operatorname{tg} x}{(\operatorname{tg} x - 1)(\operatorname{tg} x + 1)} \right) = \lim_{x \to \frac{\pi}{4}} \left( -\frac{2\operatorname{tg} x}{\operatorname{tg} x + 1} \right)
$$
Endi $x = \frac{\pi}{4}$ ($\operatorname{tg} \frac{\pi}{4} = 1$) qiymatni qo'yamiz:
$$
-\frac{2 \cdot 1}{1 + 1} = -\frac{2}{2} = -1
$$
Demak, $L = e^{-1} = \frac{1}{e}$.

---

## 4. O'z-o'zini tekshirish savollari

> [!NOTE]
> Quyidagi savollarga mustaqil javob berishga harakat qiling:
> 1. Nima uchun $\lim_{x \to \infty} \left(1 - \frac{1}{x}\right)^x$ limiti $e$ ga emas, balki $e^{-1} = \frac{1}{e}$ ga teng?
> 2. $\lim_{x \to \infty} \left(\frac{x+5}{2x+1}\right)^x$ limitida $[1^\infty]$ aniqmaslik bormi? Uning javobi nimaga teng?
> 3. Agar $\lim_{x \to x_0} u(x) = 1$ va $\lim_{x \to x_0} v(x) = 5$ (chekli son) bo'lsa, oltin qoidani qo'llash shartmi?

---

## 5. Mustaqil yechish uchun mashqlar

Quyidagi limitlarni ikkala usulda (klassik va oltin qoida yordamida) hisoblang:

1. $\lim_{x \to \infty} \left(\frac{x - 3}{x + 2}\right)^{2x - 1}$
2. $\lim_{x \to \infty} \left(\frac{3x^2 + 2x - 1}{3x^2 - x + 4}\right)^{x + 3}$
3. $\lim_{x \to 0} (1 + \sin 4x)^{\operatorname{ctg} 2x}$
4. $\lim_{x \to 1} (2 - x)^{\frac{x}{x^2 - 1}}$
5. $\lim_{x \to 0} \left(\frac{1 + \operatorname{tg} x}{1 + \sin x}\right)^{\frac{1}{x^3}}$

**Javoblar:**
1. $e^{-10}$
2. $e^1 = e$
3. $e^2$
4. $e^{-\frac{1}{2}} = \frac{1}{\sqrt{e}}$
5. $e^{\frac{1}{2}} = \sqrt{e}$ (Ko'rsatma: $\operatorname{tg} x - \sin x = \operatorname{tg} x (1 - \cos x) \sim x \cdot \frac{x^2}{2} = \frac{x^3}{2}$ dan foydalaning).
