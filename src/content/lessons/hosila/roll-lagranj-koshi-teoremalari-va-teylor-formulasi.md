---
title: "Roll, Lagranj va Koshi teoremalari hamda Peano va Lagranj qoldiq hadli Teylor formulasi"
module: "hosila"
order: 10
description: "Differensiallanuvchi funksiyalar haqidagi fundamental o'rta qiymat teoremalari (Roll, Lagranj, Koshi), ularning geometrik ma'nosi va Teylor ko'phadi."
---

Differensial hisobning butun nazariy poydevori — Lopital qoidasidan tortib funksiyaning o'sish-kamayish alomatlari, ekstremumlari va Teylor qatorlarigacha — differensiallanuvchi funksiyalar haqidagi uchta fundamental **o'rta qiymat teoremalari** (Roll, Lagranj va Koshi teoremalari) ustiga qurilgan. Ushbu teoremalar funksiyaning kesma uchlaridagi qiymatlari bilan oraliq ichidagi hosila qiymati orasidagi chuqur bog'lanishni ifodalaydi.

---

## 1. Roll teoremasi (Hosila nollari haqida teorema)

> [!IMPORTANT]
> **Roll teoremasi:** Agar $y = f(x)$ funksiya:
> 1. $[a, b]$ kesmada uzluksiz bo'lsa;
> 2. $(a, b)$ ochiq oraliqda differensiallanuvchi bo'lsa;
> 3. Kesma uchlarida o'zaro teng qiymatlar qabul qilsa: **$f(a) = f(b)$**,
>
> u holda $(a, b)$ oraliq ichida kamida bitta shunday $c \in (a, b)$ nuqta topiladiki, shu nuqtada funksiyaning hosilasi nolga teng bo'ladi:
> $$ f'(c) = 0 $$

### Geometrik va mexanik ma'nosi:
- **Geometrik ma'nosi:** Agar uzluksiz va silliq (burchak nuqtalarga ega bo'lmagan) egri chiziqning boshlang'ich $A(a, f(a))$ va oxirgi $B(b, f(b))$ nuqtalari bir xil balandlikda (bitta gorizontal chiziqda) yotsa, egri chiziq ustida kamida bitta shunday $C(c, f(c))$ nuqta mavjudki, u yerda o'tkazilgan urinma Ox o'qiga parallel (gorizontal) bo'ladi.
- **Mexanik ma'nosi:** To'g'ri chiziq bo'ylab harakatlanayotgan moddiy nuqta $t = a$ vaqtda jo'nab ketib, $t = b$ vaqtda yana boshlang'ich nuqtasiga qaytib kelsa ($s(a) = s(b)$), u holda harakat davomida kamida bir lahzada ($t = c$) uning oniy tezligi nolga teng bo'lgan ($v(c) = s'(c) = 0$, ya'ni orqaga qaytish uchun to'xtagan).

> [!WARNING]
> Roll teoremasining uchala sharti ham muhimdir. Agar ulardan birortasi buzilsa, $f'(c) = 0$ nuqta mavjud bo'lmasligi mumkin:
> - **2-shart buzilishi:** $f(x) = |x|$ funksiya $[-1, 1]$ kesmada uzluksiz va $f(-1) = f(1) = 1$, ammo $x = 0$ nuqtada hosilaga ega emas ("burchak" nuqta). Natijada $(-1, 1)$ da $f'(c) = 0$ bo'ladigan nuqta yo'q.

---

## 2. Lagranj teoremasi (Chekli orttirmalar formulasi)

Roll teoremasida $f(a) = f(b)$ sharti olib tashlansa, matematik analizning eng muhim teoremalaridan biri — **Lagranj teoremasi** hosil bo'ladi.

> [!IMPORTANT]
> **Lagranj teoremasi:** Agar $y = f(x)$ funksiya:
> 1. $[a, b]$ kesmada uzluksiz bo'lsa;
> 2. $(a, b)$ ochiq oraliqda differensiallanuvchi bo'lsa,
>
> u holda $(a, b)$ oraliq ichida kamida bitta shunday $c \in (a, b)$ nuqta topiladiki, quyidagi tenglik bajariladi:
> $$\frac{f(b) - f(a)}{b - a} = f'(c) \quad \text{yoki} \quad f(b) - f(a) = f'(c)(b - a)$$

### Isbot g'oyasi:
Yordamchi $F(x) = f(x) - f(a) - \frac{f(b) - f(a)}{b - a}(x - a)$ funksiyani tuzamiz. Bu funksiya $[a, b]$ da uzluksiz, $(a, b)$ da differensiallanuvchi va $F(a) = 0$, $F(b) = 0$. Unga Roll teoremasini qo'llasak:
$$F'(c) = f'(c) - \frac{f(b) - f(a)}{b - a} = 0 \implies f'(c) = \frac{f(b) - f(a)}{b - a}$$

### Geometrik ma'nosi:
$\frac{f(b) - f(a)}{b - a} = k_{AB}$ ifoda egri chiziqning $A(a, f(a))$ va $B(b, f(b))$ uchlarini tutashtiruvchi **vatar (kesuvchi)** ning burchak koeffitsiyentidir. Demak, $(a, b)$ oraliqda kamida bitta shunday $c$ nuqta topiladiki, shu nuqtada egri chiziqqa o'tkazilgan **urinma $AB$ vatarga parallel** bo'ladi ($f'(c) = k_{AB}$).

> [!TIP]
> **Lagranj formulasining boshqa yozilishi:** Har qanday $c \in (a, b)$ nuqtani $c = a + \theta(b - a)$ ($0 < \theta < 1$) ko'rinishda yozish mumkin.Agar $a = x_0$ va $b - a = \Delta x$ desak, **chekli orttirmalar formulasi** hosil bo'ladi:
> $$\Delta y = f(x_0 + \Delta x) - f(x_0) = f'(x_0 + \theta \Delta x) \cdot \Delta x, \qquad 0 < \theta < 1 $$

---

## 3. Koshi teoremasi (Umumlashgan o'rta qiymat teoremasi)

> [!IMPORTANT]
> **Koshi teoremasi:** Agar $f(x)$ va $g(x)$ funksiyalar:
> 1. $[a, b]$ kesmada uzluksiz bo'lsa;
> 2. $(a, b)$ oraliqda differensiallanuvchi bo'lsa;
> 3. Barcha $x \in (a, b)$ uchun **$g'(x) \neq 0$** bo'lsa,
>
> u holda $(a, b)$ oraliqda kamida bitta shunday $c \in (a, b)$ nuqta topiladiki:
> $$\frac{f(b) - f(a)}{g(b) - g(a)} = \frac{f'(c)}{g'(c)}$$

*(Xususiy holda $g(x) = x$ olinsa, $g'(x) = 1$ bo'lib, Koshi teoremasidan bevosita Lagranj teoremasi kelib chiqadi. Koshi teoremasi Lopital qoidasini isbotlashning asosi hisoblanadi).*

---

## 4. Teylor formulasi va Makloren ko'phadi

Murakkab $f(x)$ funksiyani berilgan $x_0$ nuqta atrofida hisoblash va tadqiq qilish uchun uni darajali ko'phad (polinom) bilan almashtirish g'oyasi **Teylor formulasi**ga olib keladi.

Faraz qilaylik, $f(x)$ funksiya $x_0$ nuqtaning biror atrofida $n$ marta differensiallanuvchi bo'lsin. Biz shunday $n$-darajali $P_n(x)$ ko'phad qidiramizki, $x_0$ nuqtada uning qiymati va $n$-tartibgacha bo'lgan barcha hosilalari $f(x)$ ning mos hosilalariga teng bo'lsin:
$$P_n(x_0) = f(x_0), \quad P_n'(x_0) = f'(x_0), \quad P_n''(x_0) = f''(x_0), \quad \dots, \quad P_n^{(n)}(x_0) = f^{(n)}(x_0)$$

Ketma-ket differensiallash orqali ushbu **Teylor ko'phadi**ning koeffitsiyentlari bir qiymatli topiladi:

$$P_n(x) = f(x_0) + \frac{f'(x_0)}{1!}(x - x_0) + \frac{f''(x_0)}{2!}(x - x_0)^2 + \dots + \frac{f^{(n)}(x_0)}{n!}(x - x_0)^n = \sum_{k=0}^{n} \frac{f^{(k)}(x_0)}{k!}(x - x_0)^k$$

Funksiya bilan Teylor ko'phadi orasidagi ayirma $R_n(x) = f(x) - P_n(x)$ **Teylor formulasining qoldiq hadi** deyiladi:
$$f(x) = P_n(x) + R_n(x)$$

### Qoldiq hadning ikki asosiy shakli:

1. **Peano shaklidagi qoldiq had (lokal xulq-atvor va limitlar uchun):**
   Agar $f(x)$ funksiya $x_0$ nuqtada $n$-tartibli hosilaga ega bo'lsa, $x \to x_0$ da:
   $$R_n(x) = o\left((x - x_0)^n\right)$$
   Ya'ni $\lim_{x \to x_0} \frac{R_n(x)}{(x - x_0)^n} = 0$.

2. **Lagranj shaklidagi qoldiq had (xatolikni baholash va taqribiy hisoblash uchun):**
   Agar $f(x)$ funksiya $x_0$ va $x$ nuqtalar orasida $(n+1)$ marta differensiallanuvchi bo'lsa, $x_0$ va $x$ orasida shunday $c = x_0 + \theta(x - x_0)$ ($0 < \theta < 1$) nuqta topiladiki:
   $$R_n(x) = \frac{f^{(n+1)}(c)}{(n + 1)!}(x - x_0)^{n+1}$$
   *(E'tibor bering: $n = 0$ da bundan $f(x) = f(x_0) + f'(c)(x - x_0)$ — aynan Lagranjning o'rta qiymat formulasi hosil bo'ladi!)*

### Makloren formulasi ($x_0 = 0$ xususiy hol)
Agar Teylor formulasida $x_0 = 0$ deb olinsa, u **Makloren formulasi** deb ataladi:
$$f(x) = f(0) + \frac{f'(0)}{1!}x + \frac{f''(0)}{2!}x^2 + \dots + \frac{f^{(n)}(0)}{n!}x^n + R_n(x)$$

### Asosiy elementar funksiyalarning Makloren yoyilmalari ($x \to 0$ da):

| Funksiya | Makloren formulasi (Peano qoldiq hadi bilan) |
| :--- | :--- |
| $e^x$|$1 + \frac{x}{1!} + \frac{x^2}{2!} + \frac{x^3}{3!} + \dots + \frac{x^n}{n!} + o(x^n)$ |
| $\sin x$|$x - \frac{x^3}{3!} + \frac{x^5}{5!} - \dots + (-1)^{m-1}\frac{x^{2m-1}}{(2m-1)!} + o(x^{2m})$ |
| $\cos x$|$1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \dots + (-1)^m\frac{x^{2m}}{(2m)!} + o(x^{2m+1})$ |
| $\ln(1 + x)$|$x - \frac{x^2}{2} + \frac{x^3}{3} - \dots + (-1)^{n-1}\frac{x^n}{n} + o(x^n)$ |
| $(1 + x)^\alpha$|$1 + \alpha x + \frac{\alpha(\alpha - 1)}{2!}x^2 + \dots + \frac{\alpha(\alpha - 1)\cdots(\alpha - n + 1)}{n!}x^n + o(x^n)$ |

---

## 5. Namunaviy misollar yechimi

### 1-misol. Roll va Lagranj teoremalaridagi $c$ nuqtani topish $f(x) = x^2 - 4x + 5$ funksiya uchun $[1; 4]$ kesmada Lagranj teoremasi shartlarini tekshiring va teoremadagi $c$ nuqtani toping.

**Yechim:**
1. $f(x)$ — kvadrat uchhad, demak u $[1; 4]$ da uzluksiz va $(1; 4)$ da differensiallanuvchi. Lagranj teoremasi shartlari to'liq bajariladi.
2. Kesma uchlaridagi qiymatlar va hosila:
   $$f(1) = 1 - 4 + 5 = 2, \qquad f(4) = 16 - 16 + 5 = 5$$
   $$f'(x) = 2x - 4 \implies f'(c) = 2c - 4$$
3. Lagranj formulasiga qo'yamiz:
   $$2c - 4 = \frac{f(4) - f(1)}{4 - 1} = \frac{5 - 2}{3} = 1 \implies 2c = 5 \implies c = 2.5 \in (1; 4)$$

---

### 2-misol. Lagranj teoremasi yordamida tengsizliklarni isbotlash
Har qanday $0 < a < b$ uchun quyidagi tengsizlikni isbotlang:
$$\frac{b - a}{b} < \ln\frac{b}{a} < \frac{b - a}{a}$$

**Yechim:**
1. $f(x) = \ln x$ funksiyani $[a, b]$ kesmada qaraymiz ($0 < a < b$). Funksiya $[a, b]$ da uzluksiz va $(a, b)$ da differensiallanuvchi: $f'(x) = \frac{1}{x}$.
2. Lagranj teoremasiga ko'ra, shunday $c \in (a, b)$ mavjudki:
   $$\frac{\ln b - \ln a}{b - a} = \frac{1}{c} \iff \frac{\ln\frac{b}{a}}{b - a} = \frac{1}{c}$$
3. $a < c < b$ bo'lgani uchun teskari qiymatlar quyidagicha tartiblanadi:
   $$\frac{1}{b} < \frac{1}{c} < \frac{1}{a} \implies \frac{1}{b} < \frac{\ln\frac{b}{a}}{b - a} < \frac{1}{a}$$
4. Tengsizlikning barcha qismlarini $b - a > 0$ ga ko'paytirsak, talab qilingan tengsizlik hosil bo'ladi:
   $$\frac{b - a}{b} < \ln\frac{b}{a} < \frac{b - a}{a}$$

---

### 3-misol. Ko'phadni $(x - x_0)$ darajalari bo'yicha Teylor formulasiga yoyish $f(x) = x^3 - 2x^2 + 3x + 5$ ko'phadni $x_0 = 2$ nuqta atrofida $(x - 2)$ ning darajalari bo'yicha Teylor formulasiga yoying.

**Yechim:**
1. Funksiya va uning hosilalarini topib, $x_0 = 2$ nuqtada hisoblaymiz:
   - $f(x) = x^3 - 2x^2 + 3x + 5 \implies f(2) = 8 - 8 + 6 + 5 = 11$
   - $f'(x) = 3x^2 - 4x + 3 \implies f'(2) = 12 - 8 + 3 = 7$
   - $f''(x) = 6x - 4 \implies f''(2) = 12 - 4 = 8$
   - $f'''(x) = 6 \implies f'''(2) = 6$
   - $k \ge 4$ uchun $f^{(k)}(x) = 0 \implies R_3(x) = 0$.
2. Teylor formulasiga qo'yamiz:
   $$f(x) = f(2) + \frac{f'(2)}{1!}(x - 2) + \frac{f''(2)}{2!}(x - 2)^2 + \frac{f'''(2)}{3!}(x - 2)^3$$
   $$f(x) = 11 + 7(x - 2) + 4(x - 2)^2 + (x - 2)^3$$

---

### 4-misol. Teylor (Makloren) formulasi yordamida murakkab limitni hisoblash
$$\lim_{x \to 0} \frac{\cos x - e^{-\frac{x^2}{2}}}{x^4}$$
limitni Peano qoldiq hadli Makloren formulasi yordamida hisoblang.

**Yechim:**
Maxrajda $x^4$ turgani uchun suratdagi funksiyalarni $x^4$ darajagacha ($o(x^4)$ aniqlikda) Makloren formulasiga yoyamiz:
1. $\cos x = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} + o(x^4) = 1 - \frac{x^2}{2} + \frac{x^4}{24} + o(x^4)$
2. $e^t = 1 + t + \frac{t^2}{2!} + o(t^2)$ yoyilmada $t = -\frac{x^2}{2}$ deb olamiz:
   $$e^{-\frac{x^2}{2}} = 1 - \frac{x^2}{2} + \frac{1}{2}\left(-\frac{x^2}{2}\right)^2 + o(x^4) = 1 - \frac{x^2}{2} + \frac{x^4}{8} + o(x^4)$$
3. Limitga qo'yamiz:
   $$\lim_{x \to 0} \frac{\left(1 - \frac{x^2}{2} + \frac{x^4}{24} + o(x^4)\right) - \left(1 - \frac{x^2}{2} + \frac{x^4}{8} + o(x^4)\right)}{x^4} = \lim_{x \to 0} \frac{\left(\frac{1}{24} - \frac{1}{8}\right)x^4 + o(x^4)}{x^4} = -\frac{2}{24} = -\frac{1}{12}$$
*(Bu limitni Lopital qoidasi bilan yechish uchun 4 marta ketma-ket murakkab hosila olishga to'g'ri kelar edi!)*

---

## 6. O'z-o'zini tekshirish savollari

1. **Agar $(a, b)$ oraliqdagi barcha nuqtalarda $f'(x) = 0$ bo'lsa, u holda $f(x) = \text{const}$ ekanini qaysi teorema yordamida isbotlash mumkin?**
   - *Javob:* **Lagranj teoremasi yordamida.** Ixtiyoriy $x_1, x_2 \in (a, b)$ ($x_1 < x_2$) nuqtalarni olib, $[x_1, x_2]$ kesmada Lagranj formulasini yozamiz: $f(x_2) - f(x_1) = f'(c)(x_2 - x_1)$. Shartga ko'ra $f'(c) = 0$, demak $f(x_2) = f(x_1)$, ya'ni funksiya o'zgarmasdir.
2. **Parabolaning $(y = ax^2 + bx + c)$ $[x_1, x_2]$ kesmasida Lagranj teoremasidagi $c$ nuqta qayerda joylashadi?**
   - *Javob:* Har doim kesmaning qoq o'rtasida: **$c = \frac{x_1 + x_2}{2}$**!

---

## 7. Mustaqil yechish uchun masalalar

1. $f(x) = x^3 - 3x$ funksiya uchun $[-\sqrt{3}; \sqrt{3}]$ kesmada Roll teoremasi shartlarini tekshiring va barcha $c$ nuqtalarni toping.
2. $f(x) = \ln x$ funksiya uchun $[1; e]$ kesmada Lagranj teoremasidagi $c$ nuqtani toping.
3. Lagranj teoremasi yordamida har qanday $x_1, x_2 \in \mathbb{R}$ uchun $|\sin x_2 - \sin x_1| \le |x_2 - x_1|$ tengsizlikni isbotlang.
4. $f(x) = e^x$ funksiyani $x_0 = 1$ nuqta atrofida $(x - 1)$ ning $n = 3$ darajasigacha Teylor ko'phadiga yoying.
5. Makloren formulasi yordamida $\lim_{x \to 0} \frac{x - \sin x}{e^x - 1 - x - \frac{x^2}{2}}$ limitni hisoblang.

> [!TIP]
> **Javoblar:**
> 1. $f(-\sqrt{3}) = f(\sqrt{3}) = 0$; $f'(c) = 3c^2 - 3 = 0 \implies c_1 = -1, c_2 = 1$.
> 2. $c = e - 1$.
> 3. $\frac{\sin x_2 - \sin x_1}{x_2 - x_1} = \cos c$, $|\cos c| \le 1$ dan kelib chiqadi.
> 4. $P_3(x) = e + e(x - 1) + \frac{e}{2}(x - 1)^2 + \frac{e}{6}(x - 1)^3$.
> 5. $\lim_{x \to 0} \frac{\frac{x^3}{6} + o(x^3)}{\frac{x^3}{6} + o(x^3)} = 1$.
