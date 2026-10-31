---
title: "Funksiya grafigining qavariqligi, botiqligi va egilish (bukilish) nuqtalari"
module: "funksiyalar-grafiklar"
order: 10
description: "Ikkinchi tartibli hosila y''(x) yordamida egri chiziqning qavariqlik va botiqlik oraliqlarini hamda egilish nuqtalarini topishning zaruriy va yetarli shartlari."
---

Birinchi tartibli hosila $f'(x)$ bizga funksiyaning o'sish va kamayish oraliqlarini hamda lokal ekstremum nuqtalarini aniqlash imkonini beradi. Biroq, funksiya bir xil oraliqda o'suvchi bo'lsa ham, uning grafigi turlicha egilgan bo'lishi mumkin (masalan, $y = x^2$ va $y = \sqrt{x}$ funksiyalar $[0; +\infty)$ da ikkalasi ham o'suvchi, lekin birining egriligi yuqoriga, ikkinchisiniki pastga qaragan). Egri chiziqning bu xossasini **ikkinchi tartibli hosila**$f''(x)$ yordamida o'rganamiz.

---

## 1. Qavariqlik va botiqlik tushunchalari

Faraz qilaylik, $y = f(x)$ funksiya $(a, b)$ oraliqda differensiallanuvchi bo'lsin. U holda grafikning shu oraliqdagi har bir $M(x_0, f(x_0))$ nuqtasidan yagona urinma to'g'ri chiziq o'tkazish mumkin.

> [!IMPORTANT]
> **Ta'rif (Urinma orqali):**
> - Agar $(a, b)$ oraliqdagi har qanday $x_0$ nuqtada funksiya grafigi shu nuqtadan o'tkazilgan urinmadan **pastda** yotsa, egri chiziq $(a, b)$ oraliqda **yuqoriga qavariq** (qisqacha: **qavariq**, ingliz adabiyotlarida *concave down*) deyiladi.
> - Agar $(a, b)$ oraliqdagi har qanday $x_0$ nuqtada funksiya grafigi shu nuqtadan o'tkazilgan urinmadan **yuqorida** yotsa, egri chiziq $(a, b)$ oraliqda **pastga qavariq** yoki **botiq** (ingliz adabiyotlarida *convex* / *concave up*) deyiladi.

### Vatar (kesuvchi) orqali ekvivalent ta'rif (Yensen tengsizligi)
- Botiq (pastga qavariq) funksiyada grafikning ixtiyoriy ikki nuqtasini tutashtiruvchi vatar (kesuvchi kesma) grafikdan **yuqorida** yotadi. Har qanday $x_1, x_2 \in (a, b)$ uchun:
  $$f\left(\frac{x_1 + x_2}{2}\right) \le \frac{f(x_1) + f(x_2)}{2}$$
- Qavariq (yuqoriga qavariq) funksiyada esa vatar grafikdan **pastda** yotadi:
  $$f\left(\frac{x_1 + x_2}{2}\right) \ge \frac{f(x_1) + f(x_2)}{2}$$

---

## 2. Qavariqlik va botiqlikning yetarli sharti

Urinmaning burchak koeffitsiyenti $k(x) = f'(x)$ ga teng.
- Egri chiziq **botiq** bo'lganda, $x$ o'sib borishi bilan urinmaning Ox o'qiga og'ish burchagi ortib boradi, ya'ni $f'(x)$ o'suvchi funksiya bo'ladi. Demak, $(f'(x))' = f''(x) \ge 0$.
- Egri chiziq **qavariq** bo'lganda esa $x$ o'sib borishi bilan urinma burchak koeffitsiyenti kamayib boradi, ya'ni $f''(x) \le 0$.

> [!IMPORTANT]
> **Teorema (Qavariqlik va botiqlik alomati):** Aytaylik, $y = f(x)$ funksiya $(a, b)$ oraliqda ikki marta differensiallanuvchi bo'lsin. U holda:
> 1. Agar barcha $x \in (a, b)$ uchun **$f''(x) > 0$** bo'lsa, funksiya grafigi $(a, b)$ oraliqda **botiq** (pastga qavariq) bo'ladi ($\smile$).
> 2. Agar barcha $x \in (a, b)$ uchun **$f''(x) < 0$** bo'lsa, funksiya grafigi $(a, b)$ oraliqda **qavariq** (yuqoriga qavariq) bo'ladi ($\frown$).

---

## 3. Egilish (bukilish) nuqtalari

> [!NOTE]
> **Ta'rif:** Egri chiziqning uzluksiz bo'lgan va qavariqlik qismini botiqlik qismidan (yoki aksincha) ajratib turuvchi $M_0(x_0, f(x_0))$ nuqtasi funksiya grafigining **egilish nuqtasi** (yoki **bukilish nuqtasi**) deyiladi.

Egilish nuqtasida grafikga o'tkazilgan urinma egri chiziqni **kesib o'tadi** (nuqtaning bir tomonida grafik urinmadan yuqorida, ikkinchi tomonida esa pastda joylashadi).

### Egilish nuqtasining zaruriy sharti
Agar $M_0(x_0, f(x_0))$ nuqta $y = f(x)$ funksiya grafigining egilish nuqtasi bo'lsa, u holda:
$$f''(x_0) = 0 \quad \text{yoki} \quad f''(x_0) \text{ mavjud emas.}$$
Bunday $x_0 \in D(f)$ nuqtalar **2-tartibli kritik (shubhali) nuqtalar** deb ataladi.

> [!WARNING]
> Zaruriy shart yetarli emas! $f''(x_0) = 0$ bo'lishidan $x_0$ albatta egilish nuqtasi ekani kelib chiqmaydi.
> **Misol:** $f(x) = x^4$ funksiyada $f'(x) = 4x^3$, $f''(x) = 12x^2$. $x_0 = 0$ da $f''(0) = 0$, ammo $x < 0$ da ham, $x > 0$ da ham $f''(x) = 12x^2 > 0$. Ishora o'zgarmagani uchun $x = 0$ egilish nuqtasi emas (bu minimum nuqtasi, grafik hamma joyda botiq).

### Egilish nuqtasining yetarli shartlari

**1-yetarli shart (Ikkinchi tartibli hosila ishorasining o'zgarishi):**
Agar $x_0$ nuqta atrofida funksiya ikki marta differensiallanuvchi bo'lib (ehtimol $x_0$ ning o'zidan tashqari), $x$ nuqta $x_0$ dan o'tayotganda **$f''(x)$ o'z ishorasini qarama-qarshiga o'zgartirsa** (`+` dan `-` ga yoki `-` dan `+` ga), u holda $(x_0, f(x_0))$ — egilish nuqtasidir.

**2-yetarli shart (Yuqori tartibli hosilalar orqali):**
Agar $f''(x_0) = 0$, ammo **$f'''(x_0) \neq 0$** bo'lsa, u holda $(x_0, f(x_0))$ nuqta albatta egilish nuqtasi bo'ladi.
Umuman olganda, agar $f''(x_0) = f'''(x_0) = \dots = f^{(n-1)}(x_0) = 0$ bo'lib, birinchi nolga teng bo'lmagan hosila $f^{(n)}(x_0) \neq 0$ bo'lsa:
- $n$ **toq** bo'lsa ($n = 3, 5, \dots$) $\implies x_0$ **egilish nuqtasi**;
- $n$ **juft** bo'lsa ($n = 4, 6, \dots$) $\implies x_0$ egilish nuqtasi **emas**.

---

## 4. Qavariqlik, botiqlik va egilish nuqtalarini topish algoritmi

1. Funksiyaning aniqlanish sohasi $D(f)$ topiladi.
2. Birinchi $f'(x)$ va ikkinchi $f''(x)$ tartibli hosilalar hisoblanadi.
3. $f''(x) = 0$ tenglama yechiladi hamda $D(f)$ ga tegishli bo'lib, $f''(x)$ mavjud bo'lmaydigan 2-tartibli kritik nuqtalar topiladi.
4. Topilgan nuqtalar va uzilish nuqtalari yordamida $D(f)$ intervallarga ajratiladi va har bir intervalda $f''(x)$ ning ishorasi aniqlanadi.
5. $f''(x) > 0$ bo'lgan oraliqlarda grafik **botiq**, $f''(x) < 0$ bo'lgan oraliqlarda **qavariq** deb xulosa qilinadi.
6. $D(f)$ ga tegishli qaysi nuqtalarda $f''(x)$ ishorasi o'zgargan bo'lsa, o'sha nuqtalar uchun $y_0 = f(x_0)$ ordinatalar hisoblanib, $(x_0, y_0)$ egilish nuqtalari yoziladi.

---

## 5. Namunaviy misollar yechimi

### 1-misol. Ko'phadli funksiya tahlili
$f(x) = x^4 - 2x^3 - 12x^2 + 24x - 5$ funksiya grafigining qavariqlik va botiqlik oraliqlarini hamda egilish nuqtalarini toping.

**Yechim:**
1. Aniqlanish sohasi: $D(f) = (-\infty; +\infty)$.
2. Hosilalarni hisoblaymiz:
   $$f'(x) = 4x^3 - 6x^2 - 24x + 24$$
   $$f''(x) = 12x^2 - 12x - 24 = 12(x^2 - x - 2) = 12(x - 2)(x + 1)$$
3. Ikkinchi tartibli kritik nuqtalarni topamiz ($f''(x) = 0$):
   $$12(x - 2)(x + 1) = 0 \implies x_1 = -1, \quad x_2 = 2$$
4. Son o'qini $(-\infty; -1)$, $(-1; 2)$ va $(2; +\infty)$ intervallarga bo'lib, $f''(x)$ ishorasini jadvalda tekshiramiz:

| Oraliq / Nuqta | $(-\infty; -1)$|$x = -1$|$(-1; 2)$|$x = 2$|$(2; +\infty)$ |
| :--- | :---: | :---: | :---: | :---: | :---: |
| $f''(x)$ ishorasi |$+$|$0$|$-$|$0$|$+$ |
| Grafik xulqi | Botiq ($\smile$) | **Egilish nuqtasi** | Qavariq ($\frown$) | **Egilish nuqtasi** | Botiq ($\smile$) |

5. Egilish nuqtalarining ordinatalarini hisoblaymiz:
   - $f(-1) = (-1)^4 - 2(-1)^3 - 12(-1)^2 + 24(-1) - 5 = 1 + 2 - 12 - 24 - 5 = -38$
   - $f(2) = 2^4 - 2(2)^3 - 12(2)^2 + 24(2) - 5 = 16 - 16 - 48 + 48 - 5 = -5$

**Javob:**
- **Botiqlik oraliqlari:** $(-\infty; -1)$ va $(2; +\infty)$;
- **Qavariqlik oralig'i:** $(-1; 2)$;
- **Egilish nuqtalari:** $M_1(-1; -38)$ va $M_2(2; -5)$.

---

### 2-misol. $f''(x)$ mavjud bo'lmagan nuqtadagi egilish $f(x) = \sqrt[3]{x - 2} + 4$ funksiya grafigining qavariqlik/botiqlik oraliqlari va egilish nuqtasini toping.

**Yechim:**
1. Aniqlanish sohasi: kub ildiz barcha haqiqiy sonlarda aniqlangani uchun $D(f) = (-\infty; +\infty)$.
2. Funksiyani $f(x) = (x - 2)^{\frac{1}{3}} + 4$ ko'rinishda yozib, hosilalarni topamiz:
   $$f'(x) = \frac{1}{3}(x - 2)^{-\frac{2}{3}} = \frac{1}{3\sqrt[3]{(x - 2)^2}}$$
   $$f''(x) = \frac{1}{3} \cdot \left(-\frac{2}{3}\right)(x - 2)^{-\frac{5}{3}} = -\frac{2}{9(x - 2)\sqrt[3]{(x - 2)^2}}$$
3. $f''(x) = 0$ tenglama yechimga ega emas, biroq $x = 2 \in D(f)$ nuqtada $f''(x)$**mavjud emas**. Demak, $x_0 = 2$ — ikkinchi tartibli kritik nuqta.
4. $f''(x)$ ning ishorasini tekshiramiz ($\sqrt[3]{(x - 2)^2} > 0$ har doim musbat):
   - $x \in (-\infty; 2)$ da: $x - 2 < 0 \implies f''(x) > 0 \implies$ grafik **botiq** ($\smile$).
   - $x \in (2; +\infty)$ da: $x - 2 > 0 \implies f''(x) < 0 \implies$ grafik **qavariq** ($\frown$).
5. $x = 2$ nuqtada funksiya uzluksiz ($f(2) = 4$) va $f''(x)$ ishorasi `+` dan `-` ga o'zgardi. E'tibor bering: bu nuqtada grafikga vertikal urinma ($x = 2$) o'tadi, chunki $\lim_{x \to 2} f'(x) = +\infty$.

**Javob:** $(-\infty; 2)$ da botiq, $(2; +\infty)$ da qavariq; $M(2; 4)$ — egilish nuqtasi.

---

### 3-misol. Eksponensial funksiya (Gauss egri chizig'i)
$f(x) = e^{-x^2}$ funksiyaning egilish nuqtalarini toping.

**Yechim:**
1. $D(f) = \mathbb{R}$.
2. Birinchi hosila:
   $$f'(x) = -2x e^{-x^2}$$
3. Ikkinchi hosila (ko'paytma qoidasiga ko'ra):
   $$f''(x) = -2 e^{-x^2} - 2x(-2x e^{-x^2}) = 2e^{-x^2}(2x^2 - 1)$$
4. $e^{-x^2} > 0$ bo'lgani uchun $f''(x) = 0 \iff 2x^2 - 1 = 0 \implies x_1 = -\frac{1}{\sqrt{2}}, \quad x_2 = \frac{1}{\sqrt{2}}$.
5. Ishoralarni tekshiramiz:
   - $\left(-\infty; -\frac{1}{\sqrt{2}}\right)$ va $\left(\frac{1}{\sqrt{2}}; +\infty\right)$ da $2x^2 - 1 > 0 \implies f''(x) > 0$ (**botiq**).
   - $\left(-\frac{1}{\sqrt{2}}; \frac{1}{\sqrt{2}}\right)$ da $2x^2 - 1 < 0 \implies f''(x) < 0$ (**qavariq**).
6. Ordinatalar: $f\left(\pm\frac{1}{\sqrt{2}}\right) = e^{-\frac{1}{2}} = \frac{1}{\sqrt{e}}$.

**Javob:** Egilish nuqtalari $\left(-\frac{\sqrt{2}}{2}; \frac{1}{\sqrt{e}}\right)$ va $\left(\frac{\sqrt{2}}{2}; \frac{1}{\sqrt{e}}\right)$.

---

## 6. O'z-o'zini tekshirish savollari

1. **Faraz qilaylik, $f(x) = \frac{1}{x}$. $f''(x) = \frac{2}{x^3}$. $x = 0$ nuqtadan o'tganda $f''(x)$ ishorasi `-` dan `+` ga o'zgaradi.$x = 0$ egilish nuqtasi bo'ladimi?**
   - *Javob:* **Yo'q!** Egilish nuqtasi bo'lishi uchun funksiya shu nuqtada aniqlangan va uzluksiz bo'lishi shart. $x = 0 \notin D(f)$ ($x = 0$ vertikal asimptota), shuning uchun u qavariqlik va botiqlik oraliqlarini ajratsa-da, egilish nuqtasi hisoblanmaydi.
2. **Agar $x_0$ nuqta egilish nuqtasi bo'lib, $f'(x_0) = 0$ bo'lsa, grafik bu nuqtada qanday ko'rinishga ega bo'ladi?**
   - *Javob:* Bu nuqtada gorizontal urinma o'tadi va urinma grafikni kesib o'tadi. Bunday nuqta **statsionar egilish nuqtasi** (ekstremumga ega bo'lmagan statsionar nuqta) deyiladi. Klassik misol: $y = x^3$ funksiyaning $(0, 0)$ nuqtasi.

---

## 7. Mustaqil yechish uchun masalalar

Quyidagi funksiyalarning qavariqlik va botiqlik oraliqlarini hamda egilish nuqtalarini toping:

1. $f(x) = x^3 - 6x^2 + 9x + 1$
2. $f(x) = x e^{-x}$
3. $f(x) = \frac{x}{x^2 + 3}$
4. $f(x) = x^4 - 6x^2 + 8x + 10$
5. $f(x) = \ln(x^2 + 4)$

> [!TIP]
> **Javoblar:**
> 1. $(-\infty; 2)$ da qavariq, $(2; +\infty)$ da botiq; egilish nuqtasi $(2; 3)$.
> 2. $(-\infty; 2)$ da qavariq, $(2; +\infty)$ da botiq; egilish nuqtasi $(2; 2e^{-2})$.
> 3. $(-\infty; -3)$ va $(0; 3)$ da qavariq; $(-3; 0)$ va $(3; +\infty)$ da botiq; egilish nuqtalari: $\left(-3; -\frac{1}{4}\right)$, $(0; 0)$, $\left(3; \frac{1}{4}\right)$.
> 4. $(-\infty; -1)$ va $(1; +\infty)$ da botiq, $(-1; 1)$ da qavariq; egilish nuqtalari: $(-1; -3)$ va $(1; 13)$.
> 5. $(-2; 2)$ da botiq, $(-\infty; -2)$ va $(2; +\infty)$ da qavariq; egilish nuqtalari: $(-2; \ln 8)$ va $(2; \ln 8)$.
