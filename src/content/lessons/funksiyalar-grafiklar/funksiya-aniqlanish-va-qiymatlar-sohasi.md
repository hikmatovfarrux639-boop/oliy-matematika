---
title: "Funksiyaning aniqlanish va qiymatlar sohasi"
module: "funksiyalar-grafiklar"
order: 2
description: "D(f) va E(f) sohalarini topishning 3 xil usuli (algebraik, teskari funksiya, hosila), tabiiy cheklovlar va imtihondagi asosiy tuzoqlar."
---

## Kirish: Matematikada taqiqlangan zonalar

Funksiya $y = f(x)$ qoidasi bo'yicha berilganda, unga har qanday sonni berish mumkinmi? Mutlaqo yo'q! 
Maktab algebrasidanoq ma'lumki:
- **Nolga bo'lish mumkin emas** (kasr maxraji hech qachon nol bo'lolmaydi);
- **Haqiqiy sonlar to'plamida manfiy sondan juft darajali ildiz chiqarib bo'lmaydi**;
- **Faqat qat'iy musbat sonlarning logarifmi mavjud**;
- **Teskari trigonometrik funksiyalarning ($\arcsin, \arccos$) argumenti $[-1; 1]$ oralig'ida bo'lishi shart**.

Ushbu qoidalar majmui funksiyaning **aniqlanish sohasi**ni, unga mos ravishda hosil bo'ladigan natijalar to'plami esa **qiymatlar sohasi**ni belgilaydi.

---

## 1. Aniqlanish sohasi ($D(f)$) va cheklovlar tizimi

> **Ta'rif:** Erkli o'zgaruvchi $x$ qabul qilishi mumkin bo'lgan barcha haqiqiy sonlar to'plami $f(x)$ funksiyaning **aniqlanish sohasi** deyiladi va $D(f)$ yoki $\operatorname{dom}(f)$ deb belgilanadi.

### Asosiy elementar cheklovlar jadvali:

| Funksiya ko'rinishi | Zaruriy shart (Cheklov) | Izoh |
|---|---|---|
| $y = \frac{P(x)}{Q(x)}$|$Q(x) \neq 0$ | Maxraj nolga teng bo'lmasligi shart |
| $y = \sqrt[2k]{f(x)}$|$f(x) \ge 0$ | Juft darajali ildiz osti nomanfiy |
| $y = \frac{1}{\sqrt[2k]{f(x)}}$|$f(x) > 0$ | Maxrajdagi juft ildiz qat'iy musbat |
| $y = \log_a(f(x))$|$f(x) > 0$ | Logarifm osti qat'iy musbat |
| $y = \log_{g(x)}(f(x))$|$\begin{cases} f(x) > 0 \\ g(x) > 0, \; g(x) \neq 1 \end{cases}$ | Asos ham o'zgaruvchiga bog'liq bo'lsa |
| $y = \arcsin(f(x))$|$-1 \le f(x) \le 1$ | Sinusning qiymatlar sohasi cheklovi |
| $y = \operatorname{tg}(f(x))$|$f(x) \neq \frac{\pi}{2} + \pi k$ | Kosinus nolga aylanmasligi kerak |

---

## 2. Qiymatlar sohasini ($E(f)$) topishning 3 ta quroli

> **Ta'rif:** $x$ o'zining aniqlanish sohasida o'zgarganda funksiya qabul qiladigan barcha $y$ qiymatlar to'plami **qiymatlar sohasi** deyiladi va $E(f)$ deb belgilanadi.

### 1-qurol: Teskari funksiya usuli (Algebraik)
Tenglamada $x$ ni $y$ orqali ifodalaymiz ($x = \varphi(y)$). Hosil bo'lgan $\varphi(y)$ ifodaning mavjudlik sohasi berilgan funksiyaning qiymatlar sohasi bo'ladi!

### 2-qurol: Hosila yordamida global ekstremumlarni topish
Funksiyaning hosilasini olib, statsionar nuqtalarini va o'sish/kamayish oraliqlarini topamiz. Funksiyaning eng kichik qiymati $m$ va eng katta qiymati $M$ aniqlangach, uzluksiz funksiya uchun $E(f) = [m; M]$ bo'ladi.

### 3-qurol: Ma'lum chegaralangan funksiyalarni baholash
Masalan, $-1 \le \sin x \le 1$ yoki $a^x > 0$ asosiy xossalaridan foydalanib, qo'sh tengsizlik tuziladi.

---

## 3. Amaliy masalalar va ko'p usulli yechimlar

### 1-masala: Murakkab aralash funksiyaning aniqlanish sohasini topish

Funksiyaning aniqlanish sohasini toping:
$$
f(x) = \sqrt{9 - x^2} + \frac{1}{\ln(x - 1)}
$$

#### Yechish:
Barcha cheklovlarni bitta sistemaga birlashtiramiz:
$$
\begin{cases}
9 - x^2 \ge 0 \quad (\text{ildiz osti}) \\
x - 1 > 0 \quad (\text{logarifm osti}) \\
\ln(x - 1) \neq 0 \quad (\text{kasr maxraji})
\end{cases}
$$
1. $9 - x^2 \ge 0 \implies x^2 \le 9 \implies -3 \le x \le 3$.
2. $x - 1 > 0 \implies x > 1$.
3. $\ln(x - 1) \neq 0 \implies x - 1 \neq 1 \implies x \neq 2$.

Uchala oraliqning kesishmasini topamiz:
- $[-3; 3]$ va $(1; +\infty)$ kesishmasi: $(1; 3]$.
- $x \neq 2$ nuqtani chiqarib tashlaymiz: $(1; 2) \cup (2; 3]$.

**Javob:** $D(f) = (1; 2) \cup (2; 3]$.

---

### 2-masala: Kasr-ratsional funksiyaning qiymatlar sohasini 2 xil usulda topish

Ushbu funksiyaning qiymatlar sohasini toping:
$$
y = \frac{x^2 - 1}{x^2 + 1}
$$

#### 1-usul: Teskari funksiya usuli (Diskriminant tahlili)
Tenglamani $x$ ga nisbatan kvadrat tenglama shakliga keltiramiz:
$$
y(x^2 + 1) = x^2 - 1 \implies yx^2 + y = x^2 - 1 \implies x^2(y - 1) = -1 - y \implies x^2 = \frac{1 + y}{1 - y}
$$
Har qanday haqiqiy son uchun $x^2 \ge 0$ bo'lishi shart:
$$
\frac{1 + y}{1 - y} \ge 0 \iff \frac{y + 1}{y - 1} \le 0
$$
Intervallar usuliga ko'ra:
- Surat noli: $y = -1$(kiritiladi, chunki $\ge 0$).
- Maxraj noli: $y = 1$ (kiritilmaydi, chunki maxrajda).
Demak:
$$
-1 \le y < 1 \implies E(f) = [-1; 1)
$$

#### 2-usul: Butun qismini ajratish va baholash
$$
y = \frac{(x^2 + 1) - 2}{x^2 + 1} = 1 - \frac{2}{x^2 + 1}
$$
$x^2 \ge 0$ bo'lgani uchun:
- $x^2 + 1 \ge 1 \implies 0 < \frac{2}{x^2 + 1} \le 2$
- $(-1)$ ga ko'paytiramiz: $-2 \le -\frac{2}{x^2 + 1} < 0$
- $1$ ni qo'shamiz: $1 - 2 \le 1 - \frac{2}{x^2 + 1} < 1 + 0 \implies -1 \le y < 1$.
Javob bir zumda tekshirildi: $E(f) = [-1; 1)$.

---

## 4. Imtihondagi asosiy tuzoqlar

> [!WARNING] Imtihondagi tuzoqlar
> 1. **Toq darajali ildiz ostiga cheklov qo'yish:**
>    Talabalar ko'pincha $\sqrt[3]{x - 5}$ funksiyani ko'rib, $x - 5 \ge 0$ deb yozishadi. Bu qo'pol xatodir! Toq darajali ildizlar ($3, 5, 7, \dots$) manfiy sonlardan ham bemalol chiqariladi ($\sqrt[3]{-8} = -2$). Toq ildizning aniqlanish sohasi barcha haqiqiy sonlar: $(-\infty; +\infty)$.
> 2. **Maxrajdagi juft ildizda tenglik belgisini qo'yish:**
>    Agar ifoda $y = \frac{1}{\sqrt{x - 3}}$ bo'lsa, shart $x - 3 > 0$ bo'ladi ($x - 3 \ge 0$ emas!). Chunki ildiz osti manfiy bo'lmasligi bilan birga, maxrajda bo'lgani uchun nolga ham teng bo'lishi mumkin emas.
> 3. **Kasrni qisqartirib, uzilish nuqtasini yo'qotish:**
>    Masalan, $f(x) = \frac{x^2 - 4}{x - 2}$ funksiyani darhol $x + 2$ deb soddalashtirib, uning aniqlanish sohasini $(-\infty; +\infty)$ deb belgilash xatodir! Boshlang'ich ifodada $x \neq 2$ sharti doimo saqlanib qolishi shart: $D(f) = (-\infty; 2) \cup (2; +\infty)$.

---

## 5. Mustaqil yechish uchun amaliy mashqlar

### 1-mashq
Funksiyaning aniqlanish sohasini toping:
$$
f(x) = \sqrt{\frac{x - 2}{x + 3}}
$$

<details>
<summary>👉 Yechimni tekshirish</summary>

Shart: $\frac{x - 2}{x + 3} \ge 0$ va $x + 3 \neq 0$.
Intervallar usuli: nollar $x = 2$(yopiq) va $x = -3$ (ochiq).
Chetki oraliqlar musbat:
$$
x \in (-\infty; -3) \cup [2; +\infty)
$$

</details>

### 2-mashq
$y = 3 - 2\cos(5x)$ funksiyaning qiymatlar sohasini toping.

<details>
<summary>👉 Yechimni tekshirish</summary>

Kosinus har doim $-1 \le \cos(5x) \le 1$ oralig'ida bo'ladi.
1. $(-2)$ ga ko'paytiramiz (ishoralar teskarisiga o'zgaradi):
   
$$
   -2 \le -2\cos(5x) \le 2
   
$$
2. $3$ ni qo'shamiz:
   
$$
   3 - 2 \le 3 - 2\cos(5x) \le 3 + 2 \implies 1 \le y \le 5
   
$$
Demak, $E(f) = [1; 5]$.

</details>
