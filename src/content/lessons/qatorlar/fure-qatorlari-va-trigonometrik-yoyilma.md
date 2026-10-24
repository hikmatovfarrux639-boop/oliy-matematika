---
title: "Fure qatorlari va trigonometrik yoyilmalar"
module: "qatorlar"
order: 5
description: "Trigonometrik Fure qatori, Eyler-Fure koeffitsiyentlari (a0, an, bn), Dirixle shartlari, juft va toq funksiyalarni qatorga yoyish, ixtiyoriy davrli [-l, l] funksiyalar hamda signallarni qayta ishlashdagi amaliy ahamiyati."
---

## Kirish: Murakkab to'lqinlarni oddiy ohanglarga ajratish

Raqamli musiqa (MP3), ovoz yozish yoki telekommunikatsiya qanday ishlaydi?
Musiqiy asbob chalganingizda paydo bo'ladigan murakkab tovush to'lqinini tasavvur qiling. Fransuz olimi **Jan Batist Jozef Fure (Joseph Fourier)** inqilobiy g'oyani isbotladi:

> **Har qanday davriy murakkab signalni cheksiz ko'p oddiy garmonik tebranishlar — sinuslar va kosinuslarning yig'indisi ko'rinishida ifodalash mumkin!**

Bu kashfiyot bugun raqamli signallarga ishlov berish (DSP), tasvirni siqish (JPEG), Wi-Fi va sun'iy intellektning ovoz bilan ishlash tizimlarining tamal toshidir.

---

## 1. Trigonometrik Fure qatori formulasi

Agar davri $T = 2\pi$ bo'lgan $f(x)$ funksiya $[-\pi, \pi]$ oraliqda berilgan bo'lsa, uning **trigonometrik Fure qatori** quyidagicha yoziladi:

$$
f(x) = \frac{a_0}{2} + \sum_{n=1}^{\infty} \left( a_n \cos(nx) + b_n \sin(nx) \right)
$$

Bu yerda $a_0, a_n, b_n$ sonlari **Eyler–Fure koeffitsiyentlari** deb ataladi va quyidagi aniq integrallar bilan hisoblanadi:

$$
a_0 = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \, dx
$$
$$
a_n = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \cos(nx) \, dx \quad (n = 1, 2, 3, \dots)
$$
$$
b_n = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \sin(nx) \, dx \quad (n = 1, 2, 3, \dots)
$$

> [!NOTE]
> Nega birinchi had $a_0$ emas, balki $\frac{a_0}{2}$ qilib yoziladi?
> Chunki $a_n$ formulasida $n = 0$ qo'yganda $\cos(0) = 1$ bo'lib, $a_0 = \frac{1}{\pi}\int f(x)dx$ formulasi $a_n$ ning umumiy qolipiga bir xil tushishi uchundir!

---

## 2. Dirixle shartlari (Qator qachon yaqinlashadi?)

Har qanday funksiyani ham Fure qatoriga yoyib bo'ladimi?
Funksiya Fure qatoriga yoyilishi uchun u **Dirixle shartlarini** qanoatlantirishi kerak:
1. $f(x)$ funksiya davriy va $[-\pi, \pi]$ oraliqda bo'lakli-uzluksiz bo'lishi;
2. Ushbu oraliqda chekli sondagi ekstremum (maksimum va minimum) nuqtalariga ega bo'lishi kerak.

**Uzlilish nuqtalaridagi qiymat:**
Agar $x_0$ nuqtada funksiya uzilishga ega bo'lsa, Fure qatori o'sha nuqtada chap va o'ng limitlarning o'rta arifmetigiga yaqinlashadi:
$$
S(x_0) = \frac{f(x_0 - 0) + f(x_0 + 0)}{2}
$$

---

## 3. Juft va toq funksiyalarning Fure qatori (2 barobar osonroq!)

Integrallash xossasidan foydalanib, hisoblash hajmini yarmiga qisqartirish mumkin:

### A) Agar $f(x)$ — JUFT funksiya bo'lsa:
Juft funksiyaning sinus bilan ko'paytmasi toq funksiya bo'lib, $[-\pi, \pi]$ simmetrik oraliqda integrali nolga aylanadi:
$$
b_n = 0 \quad (\text{faqat kosinuslar qoladi!})
$$
$$
a_0 = \frac{2}{\pi} \int_0^{\pi} f(x) \, dx, \quad a_n = \frac{2}{\pi} \int_0^{\pi} f(x) \cos(nx) \, dx
$$
Fure qatori:
$$
f(x) = \frac{a_0}{2} + \sum_{n=1}^{\infty} a_n \cos(nx)
$$

### B) Agar $f(x)$ — TOQ funksiya bo'lsa:
Toq funksiyaning kosinus bilan ko'paytmasi toq bo'lib, integrali nol bo'ladi:
$$
a_0 = 0, \quad a_n = 0 \quad (\text{faqat sinuslar qoladi!})
$$
$$
b_n = \frac{2}{\pi} \int_0^{\pi} f(x) \sin(nx) \, dx
$$
Fure qatori:
$$
f(x) = \sum_{n=1}^{\infty} b_n \sin(nx)
$$

---

## 4. Ixtiyoriy davrli $[-l, l]$ funksiyalar

Agar funksiyaning davri $2\pi$ emas, balki ixtiyoriy $T = 2l$ bo'lsa ($x \in [-l, l]$):

$$
f(x) = \frac{a_0}{2} + \sum_{n=1}^{\infty} \left( a_n \cos\frac{n\pi x}{l} + b_n \sin\frac{n\pi x}{l} \right)
$$
Koeffitsiyentlar:
$$
a_0 = \frac{1}{l} \int_{-l}^l f(x) \, dx
$$
$$
a_n = \frac{1}{l} \int_{-l}^l f(x) \cos\frac{n\pi x}{l} \, dx, \quad b_n = \frac{1}{l} \int_{-l}^l f(x) \sin\frac{n\pi x}{l} \, dx
$$

---

## 5. To'liq yechilgan namunaviy masalalar

### 1-misol: Toq funksiyani Fure qatoriga yoyish (Mekander / To'g'ri burchakli to'lqin)
**Shart:** $[-\pi, \pi]$ oraliqda berilgan quyidagi to'lqin funksiyasini Fure qatoriga yoying:
$$
f(x) = \begin{cases} -1, & -\pi < x < 0 \\ 1, & 0 < x < \pi \end{cases}
$$

**Yechish:**
1. Funksiya toq: $f(-x) = -f(x)$.
   Demak, $a_0 = 0$ va barcha $a_n = 0$! Faqat $b_n$ larni hisoblaymiz.
2. $b_n$ formulasini qo'llaymiz:
   $$
   b_n = \frac{2}{\pi} \int_0^{\pi} 1 \cdot \sin(nx) \, dx = \frac{2}{\pi} \left[ -\frac{\cos(nx)}{n} \right]_0^{\pi} = \frac{2}{n\pi} (1 - \cos(n\pi))
   $$
3. $\cos(n\pi) = (-1)^n$ ekanini bilamiz:
   * Agar $n$ juft bo'lsa ($n = 2, 4, 6, \dots$): $1 - 1 = 0 \implies b_n = 0$.
   * Agar $n$ toq bo'lsa ($n = 1, 3, 5, \dots$): $1 - (-1) = 2 \implies b_n = \frac{4}{n\pi}$.
4. Shunday qilib: $b_1 = \frac{4}{\pi}, b_3 = \frac{4}{3\pi}, b_5 = \frac{4}{5\pi}, \dots$
5. Fure qatorini tuzamiz:
   $$
   f(x) = \frac{4}{\pi} \left( \sin x + \frac{\sin 3x}{3} + \frac{\sin 5x}{5} + \dots \right) = \frac{4}{\pi} \sum_{k=1}^{\infty} \frac{\sin(2k-1)x}{2k-1}
   $$
*(E'tibor bering: agar $x = \frac{\pi}{2}$ qo'ysak, mashhur Leybnits qatori hosil bo'ladi: $1 = \frac{4}{\pi}(1 - 1/3 + 1/5 - \dots) \implies \frac{\pi}{4} = 1 - \frac{1}{3} + \frac{1}{5} - \dots$)*

**Javob:** $\mathbf{f(x) = \frac{4}{\pi} \sum_{k=1}^{\infty} \frac{\sin(2k-1)x}{2k-1}}$

---

### 2-misol: $f(x) = x^2$ juft funksiyani yoyish
**Shart:** $[-\pi, \pi]$ oraliqda $f(x) = x^2$ funksiyaning Fure qatorini toping.

**Yechish:**
1. $f(x) = x^2$ — juft funksiya. Demak, $b_n = 0$.
2. $a_0$ ni topamiz:
   $$
   a_0 = \frac{2}{\pi} \int_0^{\pi} x^2 \, dx = \frac{2}{\pi} \left[ \frac{x^3}{3} \right]_0^{\pi} = \frac{2}{\pi} \cdot \frac{\pi^3}{3} = \frac{2\pi^2}{3} \implies \frac{a_0}{2} = \frac{\pi^2}{3}
   $$
3. $a_n$ ni bo'laklab integrallash bilan hisoblaymiz:
   $$
   a_n = \frac{2}{\pi} \int_0^{\pi} x^2 \cos(nx) \, dx
   $$
   $u = x^2, dv = \cos(nx)dx \implies du = 2xdx, v = \frac{\sin(nx)}{n}$.
   $$
   a_n = \frac{2}{\pi} \left( \left[ \frac{x^2 \sin(nx)}{n} \right]_0^{\pi} - \int_0^{\pi} \frac{2x \sin(nx)}{n} \, dx \right) = -\frac{4}{n\pi} \int_0^{\pi} x \sin(nx) \, dx
   $$
   Yana bir marta bo'laklab integrallaymiz:
   $$
   a_n = -\frac{4}{n\pi} \left( \left[ -\frac{x\cos(nx)}{n} \right]_0^{\pi} + \int_0^{\pi} \frac{\cos(nx)}{n} \, dx \right) = -\frac{4}{n\pi} \left( -\frac{\pi (-1)^n}{n} \right) = \frac{4(-1)^n}{n^2}
   $$
4. Qatorni yozamiz:
   $$
   x^2 = \frac{\pi^2}{3} + 4 \sum_{n=1}^{\infty} \frac{(-1)^n}{n^2} \cos(nx) = \frac{\pi^2}{3} - 4\cos x + \cos 2x - \frac{4}{9}\cos 3x + \dots
   $$
**Javob:** $\mathbf{x^2 = \frac{\pi^2}{3} + 4 \sum_{n=1}^{\infty} \frac{(-1)^n}{n^2} \cos(nx)}$

---

## ⚠️ Imtihondagi tuzoqlar (Tipik talaba xatolari)

> [!WARNING]
> 1. **Juft/Toqlikni tekshirmasdan barcha integrallarni hisoblash:** Vaqtingizni tejash uchun har doim birinchi bo'lib $f(-x)$ ni tekshiring! Agar funksiya juft bo'lsa, $b_n = 0$ deb darhol yozing. Toq bo'lsa, $a_0 = a_n = 0$.
> 2. **Bo'laklab integrallashda ishoralar:** $\int x \cos(nx)dx$ yoki $\int x \sin(nx)dx$ larni olayotganda minus ishoralarda talabalarning yarmidan ko'pi xato qiladi.
> 3. **Davrni e'tiborga olmaslik:** Agar masala $[-2, 2]$ berilgan bo'lsa, formula $l = 2$ bo'ladi va burchak $\cos\frac{n\pi x}{2}$ bo'ladi, shunchaki $\cos nx$ deb ketmang!

---

## ✍️ O'zingizni sinab ko'ring (Mustaqil mashq)

**Masala:** $[-\pi, \pi]$ oraliqda $f(x) = x$ funksiyaning Fure qatorini toping.

<details>
<summary>👉 To'liq yechimni ko'rish (Tekshirish)</summary>

**Yechish bosqichlari:**
1. $f(x) = x$ — toq funksiya $\implies a_0 = 0, a_n = 0$.
2. $b_n$ ni hisoblaymiz:
   $$
   b_n = \frac{2}{\pi} \int_0^{\pi} x \sin(nx) \, dx
   $$
   Bo'laklab integrallaymiz ($u = x, dv = \sin(nx)dx \implies du = dx, v = -\frac{\cos nx}{n}$):
   $$
   b_n = \frac{2}{\pi} \left( \left[ -\frac{x\cos nx}{n} \right]_0^{\pi} + \int_0^{\pi} \frac{\cos nx}{n} \, dx \right) = \frac{2}{\pi} \left( -\frac{\pi (-1)^n}{n} + 0 \right) = -\frac{2(-1)^n}{n} = \frac{2(-1)^{n+1}}{n}
   $$
3. Fure qatori:
   $$
   x = 2 \left( \sin x - \frac{\sin 2x}{2} + \frac{\sin 3x}{3} - \frac{\sin 4x}{4} + \dots \right) = 2 \sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n} \sin(nx)
   $$

**Javob:** $\mathbf{x = 2 \sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n} \sin(nx)}$
</details>
