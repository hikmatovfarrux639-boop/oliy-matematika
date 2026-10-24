---
title: "Xosmas integrallar va ularning yaqinlashish alomatlari"
module: "integrallar"
order: 8
description: "1- va 2-tur xosmas integrallar, etalon integrallar, taqqoslash va limitli taqqoslash teoremalari, Dirixle-Abel alomatlari, absolyut va shartli yaqinlashish hamda Koshi bosh qiymati."
---

## Kirish: Cheksizlik va uzilish bilan yuzma-yuz

Klassik Riman aniq integrali $\int_a^b f(x) dx$ da ikkita qat'iy talab qo'yiladi:
1. Integrallash oralig'i $[a; b]$ **chekli** bo'lishi kerak;
2. Funksiya $f(x)$ shu oraliqda **chegaralangan** bo'lishi shart.

Agar ushbu shartlardan kamida bittasi buzilsa, integral **xosmas integral** deb ataladi:
- Chegara cheksizlikka ketsa ($\pm \infty$) — **1-tur xosmas integral**;
- Funksiya oraliqdagi biror nuqtada cheksizlikka intilsa ($f(x) \to \pm \infty$) — **2-tur xosmas integral**.

Amaliyotda ko'pincha integralning aniq qiymatini hisoblash talab etilmaydi, balki uning **yaqinlashuvchi** (chekli songa teng) yoki **uzoqlashuvchi** (cheksiz yoki mavjud emas) ekanligini aniqlash kifoya qiladi.

---

## 1. Asosiy etalon integrallar (Barcha taqqoslashlar asosi)

Har qanday xosmas integralni tekshirishdan oldin ikkita poydevor "etalon" integralni yodda bilish shart:

### 1-tur etalon integral:
$$
\int_1^{+\infty} \frac{dx}{x^p} = \begin{cases} 
\text{Yaqinlashadi}, & \text{agar } p > 1 \\
\text{Uzoqlashadi}, & \text{agar } p \le 1 
\end{cases}
$$
*Isboti:* $p=1$ da $\lim_{b\to\infty} \ln b = \infty$; $p \ne 1$ da $\left[\frac{x^{1-p}}{1-p}\right]_1^\infty$. Agar $1-p < 0 \iff p > 1$ bo'lsa, $\infty^{1-p} = 0$ bo'lib, chekli son chiqadi.

### 2-tur etalon integral:
$$
\int_0^1 \frac{dx}{x^p} = \begin{cases} 
\text{Yaqinlashadi}, & \text{agar } p < 1 \\
\text{Uzoqlashadi}, & \text{agar } p \ge 1 
\end{cases}
$$
*(E'tibor bering: 1-turda $p > 1$ da yaqinlashsa, 2-turda aksincha $p < 1$ da yaqinlashadi!)*

---

## 2. Musbat funksiyalar uchun taqqoslash alomatlari

Faraz qilaylik, $[a; +\infty)$ oraliqda $0 \le f(x) \le g(x)$ bo'lsin:

```
                    Taqqoslash qoidasi
                          0 <= f(x) <= g(x)
                                  |
            +---------------------+---------------------+
            |                                           |
  Katta integral yaqinlashsa:                 Kichik integral uzoqlashsa:
    \int g(x) dx < \infty                      \int f(x) dx = \infty
            |                                           |
  ==> \int f(x) dx ham yaqinlashadi           ==> \int g(x) dx ham uzoqlashadi
```

### Limitli taqqoslash alomati (Eng qulay usul)
Agar $\lim_{x\to +\infty} \frac{f(x)}{g(x)} = K$ ($0 < K < +\infty$) bo'lsa:
$$
\int_a^{+\infty} f(x) dx \quad \text{va} \quad \int_a^{+\infty} g(x) dx
$$
integrallari **bir vaqtda yaqinlashadi yoki bir vaqtda uzoqlashadi**.

---

## 3. Absolyut va shartli yaqinlashish. Dirixle va Abel alomatlari

Agar integral ostidagi funksiya o'zgaruvchan ishorali bo'lsa (masalan, $\sin x$ yoki $\cos x$ qatnashsa):

1. **Absolyut yaqinlashish:** Agar $\int_a^{+\infty} |f(x)| dx$ yaqinlashsa, u holda $\int_a^{+\infty} f(x) dx$ ham yaqinlashadi va u **absolyut yaqinlashuvchi** deyiladi.
2. **Shartli yaqinlashish:** Agar $\int_a^{+\infty} f(x) dx$ yaqinlashib, lekin modulining integrali $\int_a^{+\infty} |f(x)| dx$ uzoqlashsa, u **shartli yaqinlashuvchi** deyiladi.

### Dirixle alomati:
Agar:
1. $F(x) = \int_a^x f(t) dt$ boshlang'ich funksiyasi barcha $x \ge a$ da chegaralangan bo'lsa ($|F(x)| \le M$);
2. $g(x)$ funksiya monoton ravishda $0$ ga intilsa ($g(x) \searrow 0$, $x \to +\infty$),
u holda:
$$
\int_a^{+\infty} f(x) g(x) \, dx \quad \text{yaqinlashuvchi bo'ladi.}
$$

**Klassik misol:** $\int_1^{+\infty} \frac{\sin x}{x} dx$. Bu yerda $|\int_1^x \sin t dt| = |\cos 1 - \cos x| \le 2$ (chegaralangan), $g(x) = \frac{1}{x} \searrow 0$. Demak, Dirixle alomatiga ko'ra integral yaqinlashadi (ammo shartli yaqinlashadi, chunki $\int_1^\infty \frac{|\sin x|}{x} dx$ uzoqlashadi).

---

## 4. Koshi bosh qiymati (V.P. - Valeur Principale)

Agar $f(x)$ funksiya $(-\infty; +\infty)$ oraliqda aniqlangan bo'lib, uning alohida qismlari uzoqlashsa, simmetrik oraliq bo'yicha limit olinadi:
$$
\text{v.p.} \int_{-\infty}^{+\infty} f(x) dx = \lim_{R \to +\infty} \int_{-R}^R f(x) dx
$$
**Misol:** $\int_{-\infty}^{+\infty} x \, dx$ odatiy ma'noda uzoqlashuvchi, chunki $\lim_{A\to\infty}\int_0^A x dx = \infty$.
Biroq Koshi bosh qiymati ma'nosida:
$$
\text{v.p.} \int_{-\infty}^{+\infty} x \, dx = \lim_{R\to\infty} \int_{-R}^R x \, dx = \lim_{R\to\infty} \left[\frac{x^2}{2}\right]_{-R}^R = \lim_{R\to\infty} (0) = 0
$$

---

## 5. Masalalarni 2 xil usulda tahlil qilish

### 1-masala: 1-tur xosmas integralni yaqinlashishga tekshirish
Ushbu integralni tekshiring:
$$
I = \int_1^{+\infty} \frac{x^2 + 3}{x^4 + 5x + 1} \, dx
$$

#### 1-usul: Limitli taqqoslash teoremalari orqali
Cheksizlikda ($x \to \infty$) bosh hadlarni ajratamiz:
- Suratdagi bosh had: $x^2$;
- Maxrajdagi bosh had: $x^4$.
Demak, funksiyaning asimptotik xatti-harakati:
$$
g(x) = \frac{x^2}{x^4} = \frac{1}{x^2}
$$
Nisbatning limitini hisoblaymiz:
$$
\lim_{x\to\infty} \frac{f(x)}{g(x)} = \lim_{x\to\infty} \frac{\frac{x^2+3}{x^4+5x+1}}{\frac{1}{x^2}} = \lim_{x\to\infty} \frac{x^4 + 3x^2}{x^4 + 5x + 1} = 1
$$
$K = 1 \ne 0$ va chekli son.
Biz bilamizki, $\int_1^{+\infty} \frac{dx}{x^2}$ etalon integrali yaqinlashuvchi ($p = 2 > 1$).
Limitli taqqoslash alomatiga asosan, berilgan $I$ integrali ham **yaqinlashuvchi**.

#### 2-usul: To'g'ridan-to'g'ri baholash (majoranta usuli)
Barcha $x \ge 1$ uchun:
Surat: $x^2 + 3 \le x^2 + 3x^2 = 4x^2$.
Maxraj: $x^4 + 5x + 1 > x^4$.
Demak:
$$
0 \le \frac{x^2+3}{x^4+5x+1} < \frac{4x^2}{x^4} = \frac{4}{x^2}
$$
Katta funksiyaning integrali:
$$
\int_1^{+\infty} \frac{4}{x^2} dx = 4 \left[-\frac{1}{x}\right]_1^\infty = 4(0 - (-1)) = 4 < \infty
$$
Katta funksiya integrali chekli bo'lgani sababli, taqqoslash teoremasiga asosan berilgan integral ham **yaqinlashadi**.

---

### 2-masala: 2-tur xosmas integral
$$
\int_0^2 \frac{dx}{\sqrt{4 - x^2}}
$$

**Yechish:**
Bu yerda uzilish nuqtasi yuqori chegara $x = 2$ dir, chunki $\lim_{x\to 2^-} \frac{1}{\sqrt{4-x^2}} = +\infty$.
Ta'rif bo'yicha limitga o'tamiz:
$$
I = \lim_{\varepsilon \to 0^+} \int_0^{2-\varepsilon} \frac{dx}{\sqrt{4 - x^2}} = \lim_{\varepsilon \to 0^+} \left[ \arcsin\left(\frac{x}{2}\right) \right]_0^{2-\varepsilon}
$$
Chegaralarni qo'yamiz:
$$
I = \lim_{\varepsilon \to 0^+} \left( \arcsin\left(\frac{2-\varepsilon}{2}\right) - \arcsin(0) \right) = \arcsin(1) - 0 = \frac{\pi}{2}
$$
Integral yaqinlashuvchi va uning qiymati $\frac{\pi}{2}$ ga teng.

---

> [!WARNING] Imtihondagi tuzoqlar va ko'p uchraydigan xatoliklar
> 1. **Ichki uzilish nuqtasini ko'rmay qolish:** Masalan, $\int_{-1}^1 \frac{dx}{x^3}$. Agar Nyuton-Leybnitsni to'g'ridan-to'g'ri qo'llasangiz: $\left[-\frac{1}{2x^2}\right]_{-1}^1 = -\frac{1}{2} - (-\frac{1}{2}) = 0$ chiqadi. **Bu mutlaqo noto'g'ri!** $x=0$ nuqtada uzilish bor. Integral ikkiga bo'linishi kerak: $\int_{-1}^0 \frac{dx}{x^3} + \int_0^1 \frac{dx}{x^3} = -\infty + \infty$ (integral uzoqlashuvchi).
> 2. **Etalon ko'rsatkichlarni chalkashtirish:** 1-turda $p > 1$ yaqinlashadi, 2-turda esa $p < 1$ yaqinlashadi. Ko'pchilik talabalar 2-tur integralda ham $p > 1$ ni qidirib adashadilar.

---

## Mustaqil yechish uchun mashqlar

### 1-mashq
Ushbu xosmas integralni yaqinlashishga tekshiring:
$$
\int_1^{+\infty} \frac{dx}{x + \sqrt[3]{x^5 + 2}}
$$

<details>
<summary>👉 Yechimni tekshirish</summary>

**Yechish:**
$x \to +\infty$ da maxrajdagi eng katta darajani topamiz:
$\sqrt[3]{x^5} = x^{5/3}$. Bu had $x^1$ ga qaraganda tezroq o'sadi.
Shuning uchun taqqoslash funksiyasi: $g(x) = \frac{1}{x^{5/3}}$.
$$
\lim_{x\to\infty} \frac{\frac{1}{x + \sqrt[3]{x^5+2}}}{\frac{1}{x^{5/3}}} = \lim_{x\to\infty} \frac{x^{5/3}}{x + x^{5/3}\sqrt[3]{1 + 2/x^5}} = 1
$$
$\int_1^{+\infty} \frac{dx}{x^{5/3}}$ etalon integrali $p = \frac{5}{3} > 1$ bo'lgani uchun yaqinlashuvchi.

**Javob:** Integral limitli taqqoslash alomatiga ko'ra **yaqinlashuvchi**.
</details>

### 2-mashq
Integralni hisoblang:
$$
\int_1^e \frac{dx}{x \ln^2 x}
$$

<details>
<summary>👉 Yechimni tekshirish</summary>

**Yechish:**
$x = 1$ nuqtada $\ln 1 = 0$, ya'ni funksiya uzilishga ega (2-tur xosmas integral).
$$
\int_1^e \frac{d(\ln x)}{\ln^2 x} = \lim_{\delta \to 0^+} \int_{1+\delta}^e \frac{d(\ln x)}{\ln^2 x} = \lim_{\delta \to 0^+} \left[ -\frac{1}{\ln x} \right]_{1+\delta}^e
$$
$$
= -\frac{1}{\ln e} - \lim_{\delta \to 0^+} \left( -\frac{1}{\ln(1+\delta)} \right) = -1 - (-\infty) = +\infty
$$
Integral uzoqlashuvchi!

**Javob:** Integral **uzoqlashadi** ($+\infty$).
</details>
