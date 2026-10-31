---
title: "Klero va Lagranj differensial tenglamalari: Maxsus yechimlar va o'rab oluvchi chiziq"
module: "differensial-tenglamalar"
order: 12
description: "1-tartibli nochiziqli differensial tenglamalar: Lagranj tenglamasi y = x·φ(y') + ψ(y'), Klero tenglamasi y = x·y' + ψ(y'), p = y' parametrini kiritish, umumiy integral, maxsus yechimlar va oilaning o'rab oluvchi egri chizig'i (ogibayushchaya)."
---

## Kirish: Nochiziqli tenglamalar va maxsus yechimlar olami

Differensial tenglamalar kursida talabalar o'rganadigan tenglamalarning aksariyati chiziqli yoki o'zgaruvchilari ajraladigan ko'rinishda bo'ladi. Ularning barcha yechimlari bitta umumiy integral $y = \Phi(x, C)$ dan $C$ o'zgarmasning qiymatlarini tanlash orqali hosil bo'ladi.

Biroq, matematikada shunday ajoyib differensial tenglamalar borki, ularda umumiy yechimlar oilasidan tashqari, $C$ ning **hech qanday chekli qiymatida olinmaydigan**, lekin tenglamani ayniyatga aylantiradigan **maxsus yechimlar (osobye resheniya)** mavjud bo'ladi!

Geometrik nuqtai nazardan, bu maxsus yechim umumiy integralga kiruvchi to'g'ri chiziqlar yoki egri chiziqlar oilasining **o'rab oluvchisi (ogibayushchaya)** hisoblanadi.

Bu sinfga mansub eng mashhur ikkita klassik tenglama — **Lagranj** va uning xususiy holi bo'lgan **Klero tenglamasidir**.

---

## 1. Lagranj differensial tenglamasi

### Ta'rifi:
Noma'lum $y$ va uning hosilasi $y'$ ga nisbatan chiziqli, lekin $y'$ ning ixtiyoriy nochiziqli funksiyalari qatnashgan quyidagi ko'rinishdagi tenglama **Lagranj tenglamasi** deb ataladi:
$$y = x \cdot \varphi(y') + \psi(y')$$
Bu yerda $\varphi(y')$ va $\psi(y')$ — $y'$ ning ma'lum differensiallanuvchi funksiyalari bo'lib, $\varphi(y') \not\equiv y'$ (chunki $\varphi(y') = y'$ bo'lsa, u Klero tenglamasiga aylanadi).

### Yechish algoritmi ($p = y'$ parametri kiritish):
1. Hosilani parametr orqali belgilaymiz:
   $$y' = p \implies dy = p\,dx$$
2. Tenglamani yozamiz:
   $$y = x \varphi(p) + \psi(p)$$
3. Tenglikning ikkala tomonidan differensial olamiz ($d$):
   $$dy = \varphi(p)\,dx + x \varphi'(p)\,dp + \psi'(p)\,dp$$
4. $dy = p\,dx$ ni qo'yamiz:
   $$p\,dx = \varphi(p)\,dx + [x \varphi'(p) + \psi'(p)]\,dp$$
5. $dx$ qatnashgan hadlarni bir tomonga o'tkazamiz:
   $$[p - \varphi(p)]\,dx = [x \varphi'(p) + \psi'(p)]\,dp$$
6. Endi $p$ ni erkli o'zgaruvchi, $x$ ni esa $p$ ning funksiyasi ($x = x(p)$) deb qaraymiz va $\frac{dx}{dp}$ ga nisbatan yechamiz:
   $$\frac{dx}{dp} - \frac{\varphi'(p)}{p - \varphi(p)} x = \frac{\psi'(p)}{p - \varphi(p)}$$
   Bu esa $x(p)$ ga nisbatan **1-tartibli chiziqli differensial tenglamadir**! Uni Bernulli yoki Lagranj usuli bilan yechib, $x = x(p, C)$ ni topamiz.
7. Umumiy yechim parametrik shaklda yoziladi:
   $$\begin{cases} x = x(p, C) \\ y = x(p, C)\varphi(p) + \psi(p) \end{cases}$$

---

## 2. Klero differensial tenglamasi ($y = x y' + \psi(y')$)

### Ta'rifi:
Lagranj tenglamasida $\varphi(y') = y'$ bo'lgan muhim xususiy hol **Klero tenglamasi** (Alexis Clairaut sharafiga) deyiladi:
$$y = x \cdot y' + \psi(y')$$

### Yechish siri:
1. $y' = p \implies dy = p\,dx$ belgilash kiritamiz:
   $$y = x p + \psi(p)$$
2. Differensiallaymiz:
   $$dy = p\,dx + x\,dp + \psi'(p)\,dp$$
3. $dy = p\,dx$ bo'lgani uchun:
   $$p\,dx = p\,dx + [x + \psi'(p)]\,dp \implies [x + \psi'(p)]\,dp = 0$$
4. Ko'paytma nolga teng bo'lishi uchun ikkita ehtimollik bor:

#### A holat: $dp = 0 \implies p = C = \text{const}$
$p = C$ ni to'g'ridan-to'g'ri tenglamaga qo'yamiz. **Klero tenglamasining umumiy yechimi har doim to'g'ri chiziqlar oilasidan iborat bo'ladi!**
$$y = C x + \psi(C)$$
*(E'tibor bering: hech qanday murakkab integrallashsiz, shunchaki $y'$ o'rniga $C$ qo'yish orqali umumiy yechim chiqadi!)*

#### B holat: $x + \psi'(p) = 0 \implies x = -\psi'(p)$
Bu ifodani $y = xp + \psi(p)$ ga qo'ysak:
$$\begin{cases} x = -\psi'(p) \\ y = -p\psi'(p) + \psi(p) \end{cases}$$
Bu tenglamalar sistemasi parametr $p$ ni yo'qotgandan so'ng **MAXSUS YECHIMNI** beradi!

---

## 3. To'liq yechilgan namunaviy misollar

### 1-Misol (Klero tenglamasi va parabolik o'rab oluvchi):
Quyidagi differensial tenglamaning umumiy va maxsus yechimlarini toping:
$$y = x y' + (y')^2$$

**Yechish:**
1. Bu $\psi(y') = (y')^2$ bo'lgan klassik Klero tenglamasidir.
2. $y' = p$ belgilash kiritamiz:
   $$y = x p + p^2$$
3. Differensiallaymiz:
   $$dy = p\,dx + x\,dp + 2p\,dp$$
   $$p\,dx = p\,dx + (x + 2p)\,dp \implies (x + 2p)\,dp = 0$$
4. **Umumiy yechim ($dp = 0 \implies p = C$):**
   $$y = C x + C^2$$
   Bu — tekislikdagi to'g'ri chiziqlar oilasidir.
5. **Maxsus yechim ($x + 2p = 0$):**
   $$x + 2p = 0 \implies p = -\frac{x}{2}$$
   Topilgan $p$ ni tenglamaga qo'yamiz:
   $$y = x\left(-\frac{x}{2}\right) + \left(-\frac{x}{2}\right)^2 = -\frac{x^2}{2} + \frac{x^2}{4} = -\frac{x^2}{4}$$
   $$y = -\frac{x^2}{4}$$
6. **Tekshirish:**
   $y = -\frac{x^2}{4}$ yechimni tekshiramiz:
   $$y' = -\frac{x}{2}$$
   O'ng tomonga qo'yamiz: $x y' + (y')^2 = x\left(-\frac{x}{2}\right) + \left(-\frac{x}{2}\right)^2 = -\frac{x^2}{4} = y$. Ayniyat bajarildi!
   Lekin $y = -\frac{x^2}{4}$ parabolasi umumiy yechimdagi $y = Cx + C^2$ formuladan $C$ ning hech qanday chekli qiymatida hosil bo'lmaydi. U ushbu to'g'ri chiziqlar oilasini o'rab oluvchi egri chiziqdir!

---

### 2-Misol (Lagranj tenglamasi):
Quyidagi differensial tenglamani yeching:
$$y = 2x y' + \ln(y')$$

**Yechish:**
1. Bu yerda $\varphi(y') = 2y'$ (ya'ni $\varphi(y') \neq y'$), demak bu Lagranj tenglamasidir.
2. $y' = p$ deb olamiz ($p > 0$, logarifm mavjudligi uchun):
   $$y = 2xp + \ln p$$
3. Differensiallaymiz ($dy = p\,dx$):
   $$p\,dx = 2p\,dx + 2x\,dp + \frac{1}{p}\,dp$$
4. Soddalashtiramiz:
   $$-p\,dx = \left(2x + \frac{1}{p}\right)dp \implies \frac{dx}{dp} = -\frac{2}{p}x - \frac{1}{p^2}$$
   $$\frac{dx}{dp} + \frac{2}{p}x = -\frac{1}{p^2}$$
5. Bu $x(p)$ ga nisbatan chiziqli differensial tenglamadir. Bir jinsli qismini yechamiz:
   $$\frac{dx}{dp} + \frac{2}{p}x = 0 \implies \frac{dx}{x} = -\frac{2}{p}dp \implies \ln|x| = -2\ln|p| + \ln C \implies x = \frac{C}{p^2}$$
6. O'zgarmasni variatsiyalaymiz: $x = \frac{C(p)}{p^2}$:
   $$\frac{C'(p)}{p^2} - \frac{2C(p)}{p^3} + \frac{2C(p)}{p^3} = -\frac{1}{p^2} \implies C'(p) = -1 \implies C(p) = -p + C$$
7. Demak:
   $$x = \frac{C - p}{p^2} = \frac{C}{p^2} - \frac{1}{p}$$
8. Umumiy yechim parametrik shaklda:
   $$\begin{cases} x = \frac{C}{p^2} - \frac{1}{p} \\ y = 2\left(\frac{C}{p} - 1\right) + \ln p = \frac{2C}{p} - 2 + \ln p \end{cases}$$

---

## 4. O'rab oluvchi egri chiziqning geometrik ma'nosi

$\Phi(x, y, C) = 0$ egri chiziqlar oilasining o'rab oluvchisi shunday egri chiziqki:
1. U oilaning har bir egri chizig'iga urinadi;
2. Uning har bir nuqtasida oilaning qaysidir vakili bilan umumiy urinma mavjud bo'ladi.

O'rab oluvchini topish uchun $C$-diskriminant tenglamalar sistemasi tuziladi:
$$\begin{cases} \Phi(x, y, C) = 0 \\ \frac{\partial \Phi}{\partial C}(x, y, C) = 0 \end{cases}$$

---

## ⚠️ Talabalar eng ko'p yo'l qo'yadigan xatolar va tuzoqlar

1. **Klero tenglamasida maxsus yechimni unutish:**
   Talaba $y = Cx + \psi(C)$ ni yozib, "bo'ldi yechildi" deb o'ylaydi. Imtihonda o'qituvchilar aynan maxsus yechim topilganmi-yo'qligiga qarab baholaydilar!
2. **Lagranj va Kleroni adashtirish:**
   Agar $x$ oldidagi koeffitsiyent $y'$ bo'lsa — bu Klero ($y = x y' + \dots$). Agar $2y'$, $(y')^2$ yoki boshqa narsa bo'lsa — bu Lagranj bo'lib, unga Kleroning tezkor $y = Cx + \dots$ qoidasini qo'llab bo'lmaydi!
3. **Parametr $p$ ning aniqlanish sohasi:**
   Misolda $\ln(y')$ yoki $\sqrt{y'}$ qatnashsa, $p > 0$ yoki $p \ge 0$ shartini yozish shart.

---

## ✏️ Mustaqil yechish uchun amaliy mashqlar va javoblar

1. $y = x y' + \frac{1}{y'}$ Klero tenglamasining umumiy va maxsus yechimlarini toping.
   *Javob:* Umumiy: $y = Cx + \frac{1}{C}$; Maxsus: $y^2 = 4x$ (parabola).
2. $y = x y' - (y')^2$ tenglamaning maxsus yechimini toping.
   *Javob:* $y = \frac{x^2}{4}$.
3. $y = 2x y' + (y')^2$ Lagranj tenglamasini $p = y'$ kiritish orqali chiziqli tenglamaga keltiring.
   *Javob:* $\frac{dx}{dp} + \frac{2}{p}x = -2$.
