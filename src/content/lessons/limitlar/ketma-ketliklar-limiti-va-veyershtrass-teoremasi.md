---
title: "Sonli ketma-ketliklar limiti, Veyershtrass teoremasi va e soni"
description: "Sonli ketma-ketliklar, monotonlik va chegaralanganlik, Veyershtrass teoremasi hamda Eyler sonining chegaraviy tahlili."
module: "limitlar"
order: 13
---

## 📌 Kirish va Geometrik/Fizik Ma'no

Matematik analizning poydevori uzluksiz funksiyalardan emas, balki diskret jarayonlar — **sonli ketma-ketliklar**dan boshlanadi. Har bir sonli ketma-ketlik natural sonlar to'plami $\mathbb{N} = \{1, 2, 3, \dots, n, \dots\}$ da aniqlangan funksiyadir: $x_n = f(n)$.

Fizika va iqtisodiyotda sonli ketma-ketliklar diskret vaqt oralig'ida kuzatiladigan jarayonlarni ifodalaydi. Masalan:
- Bankdagi omonat hisobiga har oy yoki har kun foiz qo'shib borilishi (murakkab foiz formulasi);
- Radioaktiv moddaning har yarim yemirilish davridan so'ng qolgan atomlar soni;
- Nyuton usuli bilan tenglamaning ildizini bosqichma-bosqich aniqlashtirish.

Ketma-ketliklar nazariyasining eng buyuk yutuqlaridan biri shundaki, biz qidirilayotgan sonning aniq qiymatini bilmasdan turib ham uning **mavjudligini qat'iy isbotlashimiz** mumkin. Bu fundamental tamoyil nemis matematigi Karl Veyershtrass nomi bilan bog'liq bo'lib, uning yordamida tabiatning eng sirli doimiysi — $e$ (Eyler soni) kashf etilgan.

---

## 📐 Asosiy Nazariya, Qoidalar va Teoremalar

### 1. Ketma-ketlik limitining ta'rifi (Koshi ma'nosida)
Agar ixtiyoriy $\varepsilon > 0$ soni uchun shunday natural $N = N(\varepsilon)$ soni mavjud bo'lsaki, barcha $n > N$ natural sonlar uchun:

$$
|x_n - a| < \varepsilon
$$

tengsizlik bajarilsa, u holda $a$ soni $\{x_n\}$ ketma-ketlikning **limiti** deyiladi va quyidagicha yoziladi:

$$
\lim_{n \to \infty} x_n = a
$$

Geometrik ma'noda bu: $a$ nuqtaning ixtiyoriy kichik $(a - \varepsilon, a + \varepsilon)$ atrofidan tashqarida ketma-ketlikning faqat chekli sondagi hadlari yotadi, qolgan barcha cheksiz ko'p hadlari esa ushbu oraliqqa tushadi deganidir.

### 2. Ketma-ketlikning chegaralanganligi
- **Yuqoridan chegaralangan:** Shunday $M$ soni mavjud bo'lsaki, barcha $n \in \mathbb{N}$ uchun $x_n \le M$.
- **Quyidan chegaralangan:** Shunday $m$ soni mavjud bo'lsaki, barcha $n \in \mathbb{N}$ uchun $x_n \ge m$.
- **Chegaralangan ketma-ketlik:** Agar u bir vaqtning o'zida ham yuqoridan, ham quyidan chegaralangan bo'lsa, ya'ni $|x_n| \le K$.

> **Teorema:** Har qanday yaqinlashuvchi (chekli limitga ega) ketma-ketlik chegaralangandir. (Aks tasdiq har doim ham to'g'ri emas: masalan, $x_n = (-1)^n$ chegaralangan, lekin limiti yo'q).

### 3. Monoton ketma-ketliklar
- Agar $x_1 \le x_2 \le \dots \le x_n \le x_{n+1} \le \dots$ bo'lsa — **o'suvchi (kamaymaydigan)**.
- Agar $x_1 \ge x_2 \ge \dots \ge x_n \ge x_{n+1} \ge \dots$ bo'lsa — **kamayuvchi (o'smaydigan)**.

### 4. Veyershtrass teoremasi (Monoton ketma-ketlikning yaqinlashishi)
Matematik analizning eng muhim teoremalaridan biri:

> **Veyershtrass Teoremasi:** 
> 1. Agar ketma-ketlik monoton **o'suvchi** va yuqoridan chegaralangan bo'lsa, u chekli limitga ega bo'ladi:
>    $$\lim_{n \to \infty} x_n = \sup \{x_n\}$$
> 2. Agar ketma-ketlik monoton **kamayuvchi** va quyidan chegaralangan bo'lsa, u chekli limitga ega bo'ladi:
>    $$\lim_{n \to \infty} x_n = \inf \{x_n\}$$

### 5. Eyler soni ($e$) ning ta'rifi
Ushbu ketma-ketlikni ko'rib chiqamiz:

$$
x_n = \left(1 + \frac{1}{n}\right)^n
$$

Nyuton binomi orqali ko'rsatish mumkinki:
1. $x_n$ ketma-ketlik qat'iy o'suvchidir: $x_1 < x_2 < \dots < x_n < x_{n+1} < \dots$
2. U yuqoridan chegaralangan: $x_n < 3$ (barcha $n \in \mathbb{N}$ uchun).

Veyershtrass teoremasiga binoan, bu ketma-ketlik chekli limitga ega. Ushbu limit $e$ soni deb ataladi:

$$
\lim_{n \to \infty} \left(1 + \frac{1}{n}\right)^n = e \approx 2.718281828459...
$$

---

## 📝 Qadamma-qadam Yechilgan Amaliy Misollar

### 1-misol: Rekurrent ketma-ketlik limiti va Veyershtrass teoremasi
Ketma-ketlik quyidagicha rekurrent munosabat bilan berilgan:

$$
x_1 = \sqrt{2}, \quad x_{n+1} = \sqrt{2 + x_n} \quad (n \ge 1)
$$

Ushbu ketma-ketlikning yaqinlashuvchanligini isbotlang va uning limitini toping.

**Yechilishi:**
1. **Chegaralanganlikni isbotlaymiz (matematik induksiya):**
   - Baza: $x_1 = \sqrt{2} < 2$.
   - Faraz: $x_n < 2$ bo'lsin.
   - Qadam: $x_{n+1} = \sqrt{2 + x_n} < \sqrt{2 + 2} = \sqrt{4} = 2$.
   Demak, barcha $n$ lar uchun $x_n < 2$ (yuqoridan chegaralangan). Shuningdek, barcha hadlari musbat ($x_n > 0$).

2. **Monotonlikni isbotlaymiz:**
   $$x_{n+1}^2 - x_n^2 = (2 + x_n) - x_n^2 = -(x_n^2 - x_n - 2) = -(x_n - 2)(x_n + 1)$$
   Bizda $0 < x_n < 2$ bo'lgani uchun $(x_n - 2) < 0$ va $(x_n + 1) > 0$.
   Demak, $x_{n+1}^2 - x_n^2 > 0 \implies x_{n+1} > x_n$. Ketma-ketlik qat'iy o'suvchi!

3. **Limitni topish:**
   Veyershtrass teoremasiga ko'ra chekli limit mavjud: $\lim_{n \to \infty} x_n = L$.
   Rekurrent tenglikda ikkala tomon bo'yicha limitga o'tamiz:

   $$
   \lim_{n \to \infty} x_{n+1} = \lim_{n \to \infty} \sqrt{2 + x_n} \implies L = \sqrt{2 + L}
   $$

   Kvadratga ko'taramiz:
   $$L^2 - L - 2 = 0 \implies (L - 2)(L + 1) = 0$$
   Hadlar musbat bo'lgani uchun $L \ge \sqrt{2} > 0$, demak $L = 2$.

**Javob:** Ketma-ketlik yaqinlashuvchi va $\lim_{n \to \infty} x_n = 2$.

---

### 2-misol: Qisilgan ketma-ketlik (Sandvich/Geyne) teoremasi
Ushbu limitni hisoblang:

$$
\lim_{n \to \infty} \left( \frac{1}{\sqrt{n^2 + 1}} + \frac{1}{\sqrt{n^2 + 2}} + \dots + \frac{1}{\sqrt{n^2 + n}} \right)
$$

**Yechilishi:**
1. Yig'indida jami $n$ ta had bor.
2. Eng katta had birinchi had: $\frac{1}{\sqrt{n^2 + 1}}$, eng kichik had esa oxirgi had: $\frac{1}{\sqrt{n^2 + n}}$.
3. Ketma-ketlikni quyidan va yuqoridan baholaymiz:
   - Quyidan baholash (barcha hadlarni eng kichigi bilan almashtiramiz):
     $$x_n > \underbrace{\frac{1}{\sqrt{n^2 + n}} + \dots + \frac{1}{\sqrt{n^2 + n}}}_{n \text{ ta}} = \frac{n}{\sqrt{n^2 + n}}$$
   - Yuqoridan baholash (barcha hadlarni eng kattasi bilan almashtiramiz):
     $$x_n < \underbrace{\frac{1}{\sqrt{n^2 + 1}} + \dots + \frac{1}{\sqrt{n^2 + 1}}}_{n \text{ ta}} = \frac{n}{\sqrt{n^2 + 1}}$$
4. Chegaraviy ketma-ketliklarning limitini hisoblaymiz:
   $$\lim_{n \to \infty} \frac{n}{\sqrt{n^2 + n}} = \lim_{n \to \infty} \frac{1}{\sqrt{1 + \frac{1}{n}}} = 1$$
   $$\lim_{n \to \infty} \frac{n}{\sqrt{n^2 + 1}} = \lim_{n \to \infty} \frac{1}{\sqrt{1 + \frac{1}{n^2}}} = 1$$
5. Qisilgan ketma-ketlik teoremasiga binoan, $x_n$ ning limiti ham 1 ga teng.

**Javob:** $1$

---

### 3-misol: $e$ soniga keltiriladigan ketma-ketlik limiti
Ushbu limitni hisoblang:

$$
\lim_{n \to \infty} \left( \frac{2n + 3}{2n - 1} \right)^{3n + 2}
$$

**Yechilishi:**
1. Qavs ichidagi kasrning butun qismini ajratamiz:
   $$\frac{2n + 3}{2n - 1} = \frac{(2n - 1) + 4}{2n - 1} = 1 + \frac{4}{2n - 1}$$
2. $n \to \infty$ da $\frac{4}{2n - 1} \to 0$, demak bizda $[1^\infty]$ ko'rinishidagi noaniqlik mavjud.
3. 2-ajoyib limit formulasidan foydalanish uchun darajani shakllantiramiz:
   $$\left(1 + \frac{4}{2n - 1}\right)^{3n + 2} = \left[ \left(1 + \frac{4}{2n - 1}\right)^{\frac{2n - 1}{4}} \right]^{\frac{4}{2n - 1} \cdot (3n + 2)}$$
4. Kvadrat qavs ichidagi ifoda $n \to \infty$ da $e$ ga intiladi.
5. Daraja ko'rsatkichining limitini hisoblaymiz:
   $$\lim_{n \to \infty} \frac{4(3n + 2)}{2n - 1} = \lim_{n \to \infty} \frac{12n + 8}{2n - 1} = \frac{12}{2} = 6$$
6. Natijada umumiy limit: $e^6$.

**Javob:** $e^6$

---

### 4-misol: Faktorial va ko'rsatkichli ifoda nisbati
Ushbu ketma-ketlikning limitini hisoblang:

$$
\lim_{n \to \infty} \frac{a^n}{n!} \quad (a > 0)
$$

**Yechilishi:**
1. Ketma-ketlik hadlarining nisbatini tuzamiz:
   $$\frac{x_{n+1}}{x_n} = \frac{a^{n+1}}{(n+1)!} \cdot \frac{n!}{a^n} = \frac{a}{n+1}$$
2. $n \to \infty$ da $\lim_{n \to \infty} \frac{a}{n+1} = 0 < 1$.
3. Agar $\lim_{n \to \infty} \left|\frac{x_{n+1}}{x_n}\right| = q < 1$ bo'lsa, u holda $\lim_{n \to \infty} x_n = 0$ bo'ladi.
   (Chunki yetarlicha katta $n$ lardan boshlab hadlar kamayuvchi geometrik progressiyadan ham tezroq nolga intiladi).

**Javob:** $0$

---

## ⚠️ Talabalar Ko'p Yo'l Qo'yadigan Xatolar (Tipik tuzoqlar)

1. **Limitga bo'laklab o'tish xatosi:**
   > ⛔ **Xato:** $\lim_{n \to \infty} \left(1 + \frac{1}{n}\right)^n = \left(1 + 0\right)^n = 1^n = 1$.
   > 
   > 💡 **Sabab:** Limitga butun ifoda bo'yicha bir vaqtda o'tilishi shart. Asosdagi $n$ ham, darajadagi $n$ ham birgalikda o'zgaradi. Asos 1 ga intiladi, daraja esa cheksizlikka; ularning kurashidan $e$ soni tug'iladi.

2. **Chegaralanganlikning o'zidan yaqinlashish xulosasini chiqarish:**
   $x_n = (-1)^n$ ketma-ketligi $[-1, 1]$ oraliqda chegaralangan, lekin tebranib turgani sababli uning limiti mavjud emas. Veyershtrass teoremasi ishlashi uchun **chegaralanganlik bilan birga monotonlik ham shart**!

3. **Rekurrent munosabatda limit mavjudligini isbotlamasdan darhol $L = f(L)$ tenglama tuzish:**
   Masalan, $x_1 = 3, x_{n+1} = 2x_n - 1$. Agar darhol $L = 2L - 1 \implies L = 1$ desangiz, xato bo'ladi, chunki bu ketma-ketlik $3, 5, 9, 17, \dots$ bo'lib $+\infty$ ga ketadi va limiti mavjud emas! Avval yaqinlashuvchanlik isbotlanishi lozim.

---

## 🎯 Mustaqil Yechish Uchun Masalalar

1. Ketma-ketlikning monotonligi va chegaralanganligini tekshirib, limitini toping:
   $$x_n = \frac{3n - 1}{2n + 5}$$
2. Rekurrent ketma-ketlik limitini hisoblang:
   $$x_1 = \sqrt{6}, \quad x_{n+1} = \sqrt{6 + x_n}$$
3. Ushbu limitni hisoblang:
   $$\lim_{n \to \infty} \left( \frac{n^2 + 1}{n^2 - 2} \right)^{2n^2}$$
4. Qisilgan ketma-ketlik alomatidan foydalanib limitni toping:
   $$\lim_{n \to \infty} \frac{\sin(n!) + n \cos n}{n^2 + 1}$$

<details style="margin-top: 1rem; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); cursor: pointer;">
<summary style="font-weight: 700; color: var(--primary);">Mashqlar javoblarini ko'rish</summary>

**1-masala:**
$x_n = \frac{3(n + 5/2) - 17/2}{2(n + 5/2)} = \frac{3}{2} - \frac{17}{2(2n+5)}$. Monoton o'suvchi va yuqoridan $3/2$ bilan chegaralangan.
$$\lim_{n \to \infty} x_n = \frac{3}{2}$$

**2-masala:**
Matematik induksiya bo'yicha $x_n < 3$ va o'suvchi. Tenglama: $L = \sqrt{6 + L} \implies L^2 - L - 6 = 0 \implies (L-3)(L+2)=0$.
Hadlar musbatligi uchun $L = 3$.

**3-masala:**
$$\lim_{n \to \infty} \left(1 + \frac{3}{n^2 - 2}\right)^{2n^2} = e^{\lim_{n \to \infty} \frac{6n^2}{n^2 - 2}} = e^6$$

**4-masala:**
Surat modul bo'yicha baholanadi: $|\sin(n!) + n \cos n| \le 1 + n$.
Maxraj $n^2 + 1$. Nisbat: $\lim_{n \to \infty} \frac{n + 1}{n^2 + 1} = 0$.
Demak, limit $0$ ga teng.

</details>

---

## 💡 Xulosa va Imtihon Maslahatlari

- Ketma-ketliklar limiti nazariyasida Veyershtrass teoremasi mavjudlikni isbotlovchi asosiy qurol hisoblanadi. Agar misolda "ketma-ketlik yaqinlashishini isbotlang" deyilsa, algoritmingiz doimo ikki qadamdan iborat bo'lsin: **1) Monotonlik**, **2) Chegaralanganlik**.
- Rekurrent ketma-ketliklarda $L$ ni topgach, uning ketma-ketlik hadlarining boshlang'ich qiymatiga mos kelishini tekshiring (musbat/manfiy oraliq).
- $e$ soni ishtirokidagi misollarda asosni doimo $1 + \alpha_n$ ko'rinishida yozib oling, shunda darajani to'g'ri ajratish osonlashadi.
