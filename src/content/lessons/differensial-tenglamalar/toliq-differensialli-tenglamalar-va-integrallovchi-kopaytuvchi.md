---
title: "To'liq differensialli tenglamalar va integrallovchi ko'paytuvchi topish"
description: "P(x,y)dx + Q(x,y)dy = 0 ko'rinishidagi tenglamalar, to'liq differensiallik sharti va mu(x), mu(y) integrallovchi ko'paytuvchilar."
module: "differensial-tenglamalar"
order: 14
---

## 📌 Kirish va Fizik/Texnik Mohiyati

Nazariy mexanika va termodinamikada ko'plab jarayonlar tizimning potensial energiyasi yoki holat funksiyasi (entropiya, ichki energiya) bilan tavsiflanadi. Agar moddiy nuqta kuch maydonida harakatlanayotgan bo'lsa va bu kuch maydoni gradient ko'rinishida ifodalansa, maydon bajargan elementar ish to'liq differensial shaklga ega bo'ladi:
$$dA = F_x dx + F_y dy = dU(x, y) = 0$$

Bunday maydonlar **konservativ (yoki potensialli)** maydonlar deb ataladi. Differensial tenglamalar nazariyasida bu g'oya umumlashtirilib, birinchi tartibli simmetrik ko'rinishdagi differensial tenglamalarni biror $U(x, y)$ funksiyasining to'liq differensiali sifatida qarash imkonini beradi.

Biroq, har doim ham berilgan differensial ifoda darhol to'liq differensial bo'lavermaydi. Termodinamikada issiqlik miqdori $\delta Q$ to'liq differensial emas, lekin uni mutlaq harorat $T$ ga bo'lsak, to'liq differensial bo'lgan entropiya hosil bo'ladi: $dS = \frac{\delta Q}{T}$. Bu yerda $\frac{1}{T}$ ko'paytuvchisi matematikadagi **integrallovchi ko'paytuvchi** tushunchasining yorqin fizik timsolidir.

---

## 📐 Asosiy Nazariya, Qoidalar va Teoremalar

Quyidagi birinchi tartibli differensial tenglamani qaraymiz:
$$P(x, y)dx + Q(x, y)dy = 0$$

bu yerda $P(x, y)$ va $Q(x, y)$ funksiyalari tekislikdagi bir bog'lamli $D$ sohada uzluksiz va uzluksiz xususiy hosilalarga ega.

### 1. To'liq differensiallik sharti

> **Teorema (To'liq differensiallik alomati):**
> $P(x, y)dx + Q(x, y)dy$ ifoda bir bog'lamli $D$ sohada biror $U(x, y)$ funksiyaning to'liq differensiali $dU = \frac{\partial U}{\partial x}dx + \frac{\partial U}{\partial y}dy$ bo'lishi uchun quyidagi tenglik bajarilishi zarur va yetarlidir:
> $$\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}$$

Agar ushbu shart bajarilsa, tenglama **to'liq differensialli tenglama** deyiladi va uning umumiy integrali:
$$U(x, y) = C$$
ko'rinishida yoziladi, bu yerda $C$ — ixtiyoriy o'zgarmas son.

### 2. $U(x, y)$ funksiyasini tiklash usullari

**A) Qadamma-qadam integrallash usuli:**
1. $\frac{\partial U}{\partial x} = P(x, y)$ tenglikdan $x$ bo'yicha integrallaymiz:
   $$U(x, y) = \int P(x, y) dx + \varphi(y)$$
   Bu yerda $\varphi(y)$ — faqat $y$ ga bog'liq bo'lgan noma'lum funksiya (integrallash o'zgarmasi).
2. Hosil bo'lgan $U(x, y)$ ni $y$ bo'yicha differensiallab, uni $Q(x, y)$ ga tenglashtiramiz:
   $$\frac{\partial U}{\partial y} = \frac{\partial}{\partial y}\left( \int P(x, y) dx \right) + \varphi'(y) = Q(x, y)$$
3. Natijada $\varphi'(y)$ topiladi va uni integrallab $\varphi(y)$ aniqlanadi.

**B) Egrichiziqli integral (boshlang'ich nuqta) formulasi:**
Biror qulay $(x_0, y_0) \in D$ nuqtani tanlab, integralni to'g'ri chiziqli siniq chiziq bo'yicha hisoblash mumkin:
$$U(x, y) = \int_{x_0}^x P(t, y_0) dt + \int_{y_0}^y Q(x, \tau) d\tau = C$$

---

### 3. Integrallovchi ko'paytuvchi $\mu(x, y)$

Agar $\frac{\partial P}{\partial y} \neq \frac{\partial Q}{\partial x}$ bo'lsa, tenglamani noldan farqli $\mu(x, y)$ funksiyasiga ko'paytirganda u to'liq differensialli tenglamaga aylanishi mumkin:
$$\mu P dx + \mu Q dy = 0 \iff \frac{\partial (\mu P)}{\partial y} = \frac{\partial (\mu Q)}{\partial x}$$

Hosilalarni hisoblasak:
$$\mu \frac{\partial P}{\partial y} + P \frac{\partial \mu}{\partial y} = \mu \frac{\partial Q}{\partial x} + Q \frac{\partial \mu}{\partial x} \implies Q \frac{\partial \mu}{\partial x} - P \frac{\partial \mu}{\partial y} = \mu \left( \frac{\partial P}{\partial y} - \frac{\partial Q}{\partial x} \right)$$

Amaliyotda eng ko'p uchraydigan ikki xususiy hol:

1. **Ko'paytuvchi faqat $x$ ga bog'liq bo'lsa, ya'ni $\mu = \mu(x)$:**
   U holda $\frac{\partial \mu}{\partial y} = 0$, $\frac{\partial \mu}{\partial x} = \frac{d\mu}{dx}$:
   $$\frac{1}{Q}\left( \frac{\partial P}{\partial y} - \frac{\partial Q}{\partial x} \right) = f(x) \implies \mu(x) = e^{\int f(x) dx}$$

2. **Ko'paytuvchi faqat $y$ ga bog'liq bo'lsa, ya'ni $\mu = \mu(y)$:**
   U holda $\frac{\partial \mu}{\partial x} = 0$, $\frac{\partial \mu}{\partial y} = \frac{d\mu}{dy}$:
   $$\frac{1}{P}\left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right) = g(y) \implies \mu(y) = e^{\int g(y) dy}$$

---

## 📝 Qadamma-qadam Yechilgan Amaliy Misollar

### 1-misol: To'liq differensialli tenglamaning umumiy integralini topish
$$(3x^2 + 6xy^2)dx + (6x^2y + 4y^3)dy = 0$$

**Yechish:**
1. Koeffitsiyentlarni ajratamiz:
   $$P(x, y) = 3x^2 + 6xy^2, \quad Q(x, y) = 6x^2y + 4y^3$$
2. Xususiy hosilalarni tekshiramiz:
   $$\frac{\partial P}{\partial y} = \frac{\partial}{\partial y}(3x^2 + 6xy^2) = 12xy$$
   $$\frac{\partial Q}{\partial x} = \frac{\partial}{\partial x}(6x^2y + 4y^3) = 12xy$$
   $\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}$ shart butun tekislikda bajariladi, demak tenglama to'liq differensialli.

3. $U(x, y)$ funksiyasini qidiramiz:
   $$U(x, y) = \int P(x, y) dx = \int (3x^2 + 6xy^2) dx = x^3 + 3x^2y^2 + \varphi(y)$$
4. Topilgan ifodadan $y$ bo'yicha hosila olamiz va uni $Q(x, y)$ ga tenglashtiramiz:
   $$\frac{\partial U}{\partial y} = 6x^2y + \varphi'(y) = 6x^2y + 4y^3$$
   $$\varphi'(y) = 4y^3 \implies \varphi(y) = y^4$$
5. Umumiy integral:
   $$x^3 + 3x^2 y^2 + y^4 = C$$

**Javob:** $x^3 + 3x^2 y^2 + y^4 = C$.

---

### 2-misol: Koshi masalasini yechish
$$(2x - y + 1)dx + (2y - x - 1)dy = 0, \quad y(0) = 2$$

**Yechish:**
1. Tekshiramiz:
   $$P(x, y) = 2x - y + 1 \implies \frac{\partial P}{\partial y} = -1$$
   $$Q(x, y) = 2y - x - 1 \implies \frac{\partial Q}{\partial x} = -1$$
   $\frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x} = -1$. Tenglama to'liq differensialli.

2. Egrichiziqli integral usulini qo'llaymiz. Boshlang'ich nuqta sifatida $(x_0, y_0) = (0, 0)$ ni olamiz:
   $$U(x, y) = \int_{0}^x P(t, 0) dt + \int_{0}^y Q(x, \tau) d\tau$$
   $$\int_{0}^x (2t + 1) dt = \left[ t^2 + t \right]_0^x = x^2 + x$$
   $$\int_{0}^y (2\tau - x - 1) d\tau = \left[ \tau^2 - x\tau - \tau \right]_0^y = y^2 - xy - y$$
3. Funksiyani birlashtiramiz:
   $$U(x, y) = x^2 - xy + y^2 + x - y = C$$
4. Boshlang'ich shartni qanoatlantiramiz: $x = 0, y = 2$:
   $$0^2 - 0\cdot 2 + 2^2 + 0 - 2 = C \implies 4 - 2 = C \implies C = 2$$

**Javob:** $x^2 - xy + y^2 + x - y = 2$.

---

### 3-misol: $\mu(x)$ ko'rinishidagi integrallovchi ko'paytuvchi
$$(x^2 + y)dx - x dy = 0$$

**Yechish:**
1. Koeffitsiyentlar: $P = x^2 + y, \quad Q = -x$.
   $$\frac{\partial P}{\partial y} = 1, \quad \frac{\partial Q}{\partial x} = -1 \implies 1 \neq -1$$
   To'liq differensial sharti bajarilmadi.
2. Nisbatni tekshiramiz:
   $$\frac{1}{Q}\left( \frac{\partial P}{\partial y} - \frac{\partial Q}{\partial x} \right) = \frac{1}{-x}(1 - (-1)) = -\frac{2}{x}$$
   Ifoda faqat $x$ ga bog'liq! Demak, $\mu = \mu(x)$.
3. Ko'paytuvchini topamiz:
   $$\mu(x) = \exp\left( \int -\frac{2}{x} dx \right) = e^{-2\ln|x|} = \frac{1}{x^2}$$
4. Tenglamaning har ikki tomonini $\frac{1}{x^2}$ ga ko'paytiramiz ($x \neq 0$):
   $$\left(1 + \frac{y}{x^2}\right)dx - \frac{1}{x}dy = 0$$
   Tekshiruv: $\frac{\partial}{\partial y}(1 + \frac{y}{x^2}) = \frac{1}{x^2}$, $\frac{\partial}{\partial x}(-\frac{1}{x}) = \frac{1}{x^2}$. Tenglik o'rindi!
5. $U(x, y)$ ni integrallaymiz:
   $$U(x, y) = \int \left(-\frac{1}{x}\right) dy = -\frac{y}{x} + \psi(x)$$
   $$\frac{\partial U}{\partial x} = \frac{y}{x^2} + \psi'(x) = 1 + \frac{y}{x^2} \implies \psi'(x) = 1 \implies \psi(x) = x$$
   $$U(x, y) = x - \frac{y}{x} = C \implies y = x^2 - Cx$$
   Alohida $x = 0$ yechim ekanligi dastlabki tenglamadan ko'rinadi (chunki $x=0 \implies dx=0$).

**Javob:** $y = x^2 - Cx$ va $x = 0$.

---

### 4-misol: $\mu(y)$ ko'rinishidagi integrallovchi ko'paytuvchi
$$2xy dx + (y^2 - 3x^2)dy = 0$$

**Yechish:**
1. $P = 2xy, \quad Q = y^2 - 3x^2$.
   $$\frac{\partial P}{\partial y} = 2x, \quad \frac{\partial Q}{\partial x} = -6x$$
   Teng emas, to'liq differensial emas.
2. $\mu(y)$ mezoni bo'yicha nisbatni hisoblaymiz:
   $$\frac{1}{P}\left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right) = \frac{-6x - 2x}{2xy} = \frac{-8x}{2xy} = -\frac{4}{y}$$
   Natija faqat $y$ ga bog'liq!
3. $\mu(y)$ ni aniqlaymiz:
   $$\mu(y) = \exp\left( \int -\frac{4}{y} dy \right) = e^{-4\ln|y|} = y^{-4} = \frac{1}{y^4}$$
4. Tenglamani $y^{-4}$ ga ko'paytiramiz ($y \neq 0$):
   $$\frac{2x}{y^3} dx + \left(\frac{1}{y^2} - \frac{3x^2}{y^4}\right) dy = 0$$
5. Integrallaymiz:
   $$U(x, y) = \int \frac{2x}{y^3} dx = \frac{x^2}{y^3} + \varphi(y)$$
   $$\frac{\partial U}{\partial y} = -\frac{3x^2}{y^4} + \varphi'(y) = \frac{1}{y^2} - \frac{3x^2}{y^4} \implies \varphi'(y) = \frac{1}{y^2} \implies \varphi(y) = -\frac{1}{y}$$
6. Umumiy integral:
   $$\frac{x^2}{y^3} - \frac{1}{y} = C \iff x^2 - y^2 = C y^3$$
   Shuningdek, $y = 0$ ham xususiy yechimdir.

**Javob:** $x^2 - y^2 = C y^3$ va $y = 0$.

---

## ⚠️ Talabalar Ko'p Yo'l Qo'yadigan Xatolar

1. **Hosilalar tartibini chalkashtirish:**
   To'liq differensiallik shartida $dx$ oldidagi funksiyadan $y$ bo'yicha ($\frac{\partial P}{\partial y}$), $dy$ oldidagi funksiyadan esa $x$ bo'yicha ($\frac{\partial Q}{\partial x}$) hosila olinadi. Ko'pchilik teskarisini olib xatoga yo'l qo'yadi.
2. **$\mu(y)$ formulasidagi ishora xatosi:**
   $\mu(x)$ uchun formula $\frac{1}{Q}\left( \frac{\partial P}{\partial y} - \frac{\partial Q}{\partial x} \right)$ bo'lsa, $\mu(y)$ uchun qavs ichidagi ayirma teskari: $\frac{1}{P}\left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right)$ yoki oldiga minus ishora qo'yiladi: $-\frac{1}{P}\left( \frac{\partial P}{\partial y} - \frac{\partial Q}{\partial x} \right)$.
3. **Maxsus yechimlarni yo'qotish:**
   Integrallovchi ko'paytuvchiga ko'paytirganda yoki bo'lganda (masalan, $\mu(x) = \frac{1}{x^2}$ da $x=0$), maxsus yechimlar yo'qolishi yoki ortiqcha yechimlar qo'shilib qolishi mumkin. Ular har doim alohida tekshirilishi lozim.

---

## 🎯 Mustaqil Yechish Uchun Masalalar

1. Tenglamani to'liq differensiallikka tekshiring va umumiy yechimini toping:
   $$(e^y + y e^x)dx + (x e^y + e^x)dy = 0$$
   *Javob:* $x e^y + y e^x = C$.

2. Koshi masalasini egrichiziqli integral usuli bilan yeching:
   $$(3x^2 + 2xy)dx + (x^2 - 2y)dy = 0, \quad y(1) = 0$$
   *Javob:* $x^3 + x^2 y - y^2 = 1$.

3. $\mu(x)$ integrallovchi ko'paytuvchini toping va yeching:
   $$(x^2 - y)dx + x dy = 0$$
   *Javob:* $\mu(x) = \frac{1}{x^2}$; umumiy yechim: $x + \frac{y}{x} = C \implies y = Cx - x^2$.

4. $\mu(y)$ integrallovchi ko'paytuvchisini topib, tenglamani integrallang:
   $$y(1 + xy)dx - x dy = 0$$
   *Javob:* $\mu(y) = \frac{1}{y^2}$; umumiy integral: $\frac{x}{y} + \frac{x^2}{2} = C$ va $y = 0$.

---

## 💡 Xulosa va Imtihon Maslahatlari

- Differensial tenglama berilganda, avvalo uni $P dx + Q dy = 0$ ko'rinishida yozib, $\frac{\partial P}{\partial y} \stackrel{?}{=} \frac{\partial Q}{\partial x}$ shartini tekshirish eng tezkor strategiyalardan biridir.
- Agar tenglama chiziqli yoki Bernulli ko'rinishida bo'lsa ham, ba'zan integrallovchi ko'paytuvchi orqali yechish hisoblash bosqichlarini 2-3 barobarga qisqartiradi.
- Imtihonda umumiy integralni topgach, undan to'liq differensial olib ($dU$), boshlang'ich tenglamaga kelishini 30 soniyada tekshirib olishingiz mumkin — bu sizni nol ball olish xavfidan saqlaydi!
