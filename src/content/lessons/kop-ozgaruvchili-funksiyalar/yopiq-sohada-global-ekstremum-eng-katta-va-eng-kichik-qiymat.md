---
title: "Yopiq sohada ikki o'zgaruvchili funksiyaning eng katta va eng kichik (global) qiymati"
module: "kop-ozgaruvchili-funksiyalar"
order: 8
description: "Veyershtrass teoremasi, soha ichidagi statsionar nuqtalarni topish, chegaraviy chiziqlarda tekshirish va global maksimum hamda minimumni aniqlash algoritmi."
---

Oldingi darslarda ikki o'zgaruvchili funksiyaning **lokal ekstremumlari** (ya'ni nuqtaning faqat kichik atrofidagi maksimum va minimumlari) hamda shartli ekstremumlarini o'rgangan edik. Amaliyotda esa ko'pincha chegaralangan va yopiq $\overline{D}$ sohada berilgan funksiyaning **eng katta (global maksimum)** va **eng kichik (global minimum)** qiymatlarini topish talab etiladi.

---

## 1. Veyershtrass teoremasi va global ekstremum mavjudligi

> [!IMPORTANT]
> **Veyershtrass teoremasi:** Chegaralangan va yopiq $\overline{D} \subset \mathbb{R}^2$sohada uzluksiz bo'lgan har qanday$z = f(x, y)$ funksiya shu sohada o'zining eng katta ($M = \max_{\overline{D}} f$) va eng kichik ($m = \min_{\overline{D}} f$) qiymatlariga kamida bittadan nuqtada erishadi.

Bu yerda:
- **Chegaralangan soha** — barcha nuqtalari markazi koordinatalar boshida bo'lgan biror chekli radiusli doira ichiga joylashadigan soha;
- **Yopiq soha ($\overline{D}$)** — ochiq $D$soha va uning barcha$\partial D$ chegara nuqtalarining birlashmasi ($\overline{D} = D \cup \partial D$).

Funksiya o'zining eng katta yoki eng kichik qiymatiga:
1. Yoki sohaning **ichki nuqtasida** (bu holda u nuqta albatta lokal ekstremum, demak, kritik/statsionar nuqta bo'ladi);
2. Yoki sohaning **$\partial D$ chegarasida** erishadi.

---

## 2. Eng katta va eng kichik qiymatni topish algoritmi

Chegaralangan yopiq $\overline{D}$sohada uzluksiz$z = f(x, y)$funksiyaning global maksimumi$M$va global minimumi$m$ ni topish uchun quyidagi 4 qadamli algoritm bajariladi:

### 1-qadam: Sohaning ichki kritik (statsionar) nuqtalarini topish
$\frac{\partial f}{\partial x} = 0$va$\frac{\partial f}{\partial y} = 0$tenglamalar sistemasini yechib, statsionar nuqtalar (hamda xususiy hosilalar mavjud bo'lmagan nuqtalar) topiladi. Ulardan faqat **ochiq$D$ sohaning ichiga tushadiganlari** tanlab olinadi va bu nuqtalarda funksiyaning qiymatlari hisoblanadi.

> [!TIP]
> Global ekstremumni qidirishda ichki statsionar nuqtalarda ikkinchi tartibli hosilalar ($AC - B^2$ diskriminant) yordamida lokal ekstremum shartini tekshirish **shart emas**! Chunki oxirida baribir barcha nomzod nuqtalardagi funksiya qiymatlari o'zaro taqqoslanadi.

### 2-qadam: Sohaning chegarasida tekshirish
Sohaning $\partial D$ chegarasi odatda bitta yoki bir nechta silliq egri chiziq bo'laklaridan (kesmalar, yoylar) iborat bo'ladi:
- Agar chegara $y = \varphi(x)$ ($a \le x \le b$) yoki parametrik $x = x(t), \, y = y(t)$ko'rinishda berilsa, uni$f(x, y)$ga qo'yib, bir o'zgaruvchili funksiya hosil qilinadi va uning$[a, b]$ kesmadagi kritik nuqtalari topiladi.
- Agar chegara $\varphi(x, y) = 0$ yopiq silliq chiziq (masalan, aylana yoki ellips) bo'lsa, Lagranj ko'paytuvchilari usulidan yoki parametrlashdan foydalanish mumkin.

### 3-qadam: Burchak (tutashish) nuqtalarini hisobga olish
Agar $\partial D$ chegara bir nechta chiziq kesmalaridan tashkil topgan bo'lsa (masalan, uchburchak, to'rtburchak yoki sektor), u holda chiziqlarning kesishgan **uchlari (burchak nuqtalari)** albatta nomzod nuqtalar ro'yxatiga kiritiladi va ularda funksiya qiymati hisoblanadi.

### 4-qadam: Qiymatlarni taqqoslash va xulosa chiqarish
1-, 2- va 3-qadamlarda topilgan barcha nomzod nuqtalardagi funksiya qiymatlari ichidan **eng kattasi** $z_{\max} = M$va **eng kichigi**$z_{\min} = m$ sifatida tanlab olinadi.

---

## 3. Namuna sifatida yechilgan misollar

### 1-misol. Uchburchakli sohada eng katta va eng kichik qiymat
$z = x^2 + xy + y^2 - 6x - 9y$funksiyaning$x = 0$, $y = 0$va$x + y = 5$to'g'ri chiziqlar bilan chegaralangan$\overline{D}$ yopiq uchburchakdagi eng katta va eng kichik qiymatlarini toping.

**Yechish:**
Uchburchak uchlari: $O(0, 0)$, $A(5, 0)$, $B(0, 5)$. So'ralayotgan soha: $x \ge 0, \, y \ge 0, \, x + y \le 5$.

**1-qadam (Ichki statsionar nuqtalar):**

$$
\begin{cases}
z'_x = 2x + y - 6 = 0 \\
z'_y = x + 2y - 9 = 0
\end{cases}
\implies
\begin{cases}
x = 1 \\
y = 4
\end{cases}
$$

$M_1(1, 4)$nuqtani tekshiramiz:$x = 1 > 0$, $y = 4 > 0$, $x + y = 5$. Bu nuqta uchburchakning gipotenuzasi ($x + y = 5$ chegarasi) ustida yotadi! Qiymati:

$$
z(1, 4) = 1^2 + 1\cdot 4 + 4^2 - 6(1) - 9(4) = 1 + 4 + 16 - 6 - 36 = -21
$$

**2-qadam (Chegara kesmalarini tekshirish):**
1. **$OA$ kesma ($y = 0, \, 0 \le x \le 5$):**
   $z(x, 0) = x^2 - 6x$. Hosilasi: $z'(x) = 2x - 6 = 0 \implies x = 3 \in (0, 5)$.
   Demak, $M_2(3, 0)$ nuqta nomzod:

   
$$
   z(3, 0) = 3^2 - 6(3) = -9
   
$$

2. **$OB$ kesma ($x = 0, \, 0 \le y \le 5$):**
   $z(0, y) = y^2 - 9y$. Hosilasi: $z'(y) = 2y - 9 = 0 \implies y = 4.5 \in (0, 5)$.
   Demak, $M_3(0, 4.5)$ nuqta nomzod:

   
$$
   z(0, 4.5) = (4.5)^2 - 9(4.5) = 20.25 - 40.5 = -20.25
   
$$

3. **$AB$ kesma ($y = 5 - x, \, 0 \le x \le 5$):**
   $z(x, 5 - x) = x^2 + x(5 - x) + (5 - x)^2 - 6x - 9(5 - x) = x^2 - 2x - 20$.
   Hosilasi: $2x - 2 = 0 \implies x = 1 \implies y = 4$. Bu yuqoridagi $M_1(1, 4)$nuqta bo'lib,$z(1, 4) = -21$.

**3-qadam (Uchburchak uchlari):**
- $O(0, 0) \implies z(0, 0) = 0$-$A(5, 0) \implies z(5, 0) = 25 - 30 = -5$-$B(0, 5) \implies z(0, 5) = 25 - 45 = -20$

**4-qadam (Taqqoslash):**
Barcha qiymatlar: $\{0, -5, -20, -9, -20.25, -21\}$.
- **Eng katta qiymat:** $z_{\max} = z(0, 0) = 0$- **Eng kichik qiymat:**$z_{\min} = z(1, 4) = -21$

---

### 2-misol. Doiraviy sohada global ekstremumni topish
$z = x^2 + y^2 - 2x - 2y$funksiyaning$x^2 + y^2 \le 4$ doiradagi eng katta va eng kichik qiymatlarini toping.

**Yechish:**
**1-qadam (Ichki statsionar nuqtalar):**

$$
\begin{cases}
z'_x = 2x - 2 = 0 \\
z'_y = 2y - 2 = 0
\end{cases}
\implies M_0(1, 1)
$$

Tekshiramiz: $1^2 + 1^2 = 2 < 4$, demak $M_0(1, 1)$ doiraning ichida yotadi!

$$
z(1, 1) = 1 + 1 - 2 - 2 = -2
$$

**2-qadam ($x^2 + y^2 = 4$ aylana chegarasida tekshirish):**
Chegarada $x = 2\cos t, \, y = 2\sin t$ ($0 \le t < 2\pi$) parametrlashni kiritamiz:

$$
z(t) = 4 - 4(\cos t + \sin t) = 4 - 4\sqrt{2}\sin\left(t + \frac{\pi}{4}\right)
$$

Bu ifoda:
- $\sin\left(t + \frac{\pi}{4}\right) = -1$bo'lganda (ya'ni$t = \frac{5\pi}{4}$, $x = -\sqrt{2}, \, y = -\sqrt{2}$) eng katta qiymatga erishadi:

$$
z(-\sqrt{2}, -\sqrt{2}) = 4 + 4\sqrt{2}
$$

- $\sin\left(t + \frac{\pi}{4}\right) = 1$bo'lganda (ya'ni$t = \frac{\pi}{4}$, $x = \sqrt{2}, \, y = \sqrt{2}$) eng kichik chegara qiymatiga erishadi:

$$
z(\sqrt{2}, \sqrt{2}) = 4 - 4\sqrt{2} \approx 4 - 5.657 = -1.657
$$

**3-qadam (Taqqoslash):**
Ichki nuqtadagi $z(1, 1) = -2$qiymat chegaradagi$4 - 4\sqrt{2} \approx -1.657$ dan kichik!
- **Eng katta qiymat:** $z_{\max} = 4 + 4\sqrt{2}$(nuqtasi:$(-\sqrt{2}, -\sqrt{2})$)
- **Eng kichik qiymat:** $z_{\min} = -2$(nuqtasi:$(1, 1)$)

---

## 4. O'z-o'zini tekshirish savollari

1. Lokal maksimum va global maksimum tushunchalari orasida qanday farq bor? Global maksimum soha chegarasida bo'lsa, u nuqtada $\frac{\partial z}{\partial x} = 0$va$\frac{\partial z}{\partial y} = 0$ bo'lishi shartmi?
2. Agar berilgan soha ochiq yoki chegaralanmagan bo'lsa, funksiya o'zining eng katta va eng kichik qiymatiga erishmasligi mumkinmi? Misol keltiring.
3. Nima uchun ko'pburchakli sohada chegaraviy kesmalarning ichki nuqtalaridan tashqari ko'pburchak uchlarini ham alohida tekshirish shart?

---

## 5. Mustaqil yechish uchun masalalar

1. **Masala:** $z = x^2 + y^2 - 4x - 6y + 15$funksiyaning$0 \le x \le 3$, $0 \le y \le 4$ to'g'ri to'rtburchakdagi eng katta va eng kichik qiymatlarini toping.
   - *Javob:* $z_{\min} = z(2, 3) = 2$, $z_{\max} = z(0, 0) = 15$.
2. **Masala:** $z = xy$funksiyaning$x^2 + y^2 \le 8$ doiradagi eng katta va eng kichik qiymatlarini toping.
   - *Javob:* $z_{\max} = z(2, 2) = z(-2, -2) = 4$, $z_{\min} = z(2, -2) = z(-2, 2) = -4$.
3. **Masala:** $z = x^2 - y^2$("egar" sirti) funksiyaning$x^2 + y^2 \le 9$ doiradagi eng katta va eng kichik qiymatlarini toping.
   - *Javob:* Ichki $(0, 0)$nuqtada$z = 0$(ekstremum emas), chegarada$z_{\max} = z(\pm 3, 0) = 9$, $z_{\min} = z(0, \pm 3) = -9$.
4. **Masala:** $z = x^2 + 2xy - 4x + 8y$funksiyaning$x = 0, \, x = 1, \, y = 0, \, y = 2$ to'g'ri chiziqlar bilan chegaralangan sohadagi eng katta va eng kichik qiymatlarini toping.
   - *Javob:* $z_{\min} = z(1, 0) = -3$, $z_{\max} = z(1, 2) = 17$.
