---
title: "Ikki karrali integral va uni hisoblash"
module: "karrali-integrallar"
order: 1
description: "Ikki karrali integral, geometrik ma'nosi (jism hajmi), takroriy integrallarga keltirish, integrallash tartibini o'zgartirish va og'irlik markazini topish."
---

## Kirish: Tekislikdan fazoviy hajmga o'tish

Bir o'zgaruvchili oddiy aniq integral $\int_a^b f(x) \, dx$ tekislikdagi egri chiziqli trapetsiyaning **yuzini** hisoblar edi.

Agar bizga $Oxy$tekisligidagi biror$D$soha ustida ko'tarilgan$z = f(x, y)$sirt berilgan bo'lsa, ushbu sirt ostida va$D$ soha ustida joylashgan fazoviy **silindrik jismning hajmini** qanday hisoblaymiz?

Buning uchun integrallash amalini ikki yo'nalish ($x$va$y$) bo'ylab ketma-ket bajarish — ya'ni **ikki karrali integral** talab etiladi!

---

## 1. Ikki karrali integral ta'rifi va ma'nosi

$Oxy$tekisligidagi chegaralangan yopiq$D$soha va unda aniqlangan$z = f(x, y)$ uzluksiz funksiya berilgan bo'lsin.
1. $D$sohani$n$ta mayda$\Delta D_i$bo'lakchalarga bo'lamiz (ularning yuzalari$\Delta S_i$).
2. Har bir bo'lakchadan ixtiyoriy $M_i(\xi_i, \eta_i)$nuqta tanlab, balandligi$f(\xi_i, \eta_i)$ bo'lgan ustunchalar hajmlari yig'indisini tuzamiz:
   
$$
   V_n = \sum_{i=1}^n f(\xi_i, \eta_i) \cdot \Delta S_i
   
$$
3. Bo'lakchalarning eng katta diametri nolga intilganda ushbu yig'indining chekli limiti **ikki karrali integral** deyiladi:

> **Ta'rif:**
> 
$$
> \iint_D f(x, y) \, dx dy = \lim_{\max \text{diam} \to 0} \sum_{i=1}^n f(\xi_i, \eta_i) \Delta S_i
> 
$$

### Asosiy geometrik va fizik tatbiqlari:
1. **Fazoviy jism hajmi:** Agar $f(x, y) \ge 0$ bo'lsa:
   $$V = \iint_D f(x, y) \, dx dy$$
2. **Tekis soha yuzi:** Agar $f(x, y) = 1$ bo'lsa:
   $$S = \iint_D dx dy$$
3. **Plastinka massasi:** Agar $\rho(x, y)$ sirtiy zichlik bo'lsa:
   $$M = \iint_D \rho(x, y) \, dx dy$$
4. **Og'irlik markazi koordinatalari:**
   $$x_c = \frac{1}{M}\iint_D x \rho(x, y) \, dx dy, \qquad y_c = \frac{1}{M}\iint_D y \rho(x, y) \, dx dy$$

---

## 2. Takroriy (ketma-ket) integrallarga keltirish qoidalari

Amaliyotda ikki karrali integral ikkita bir o'lchamli integralni ichma-ich hisoblash orqali yechiladi:

### 1-holat: Soha to'g'ri to'rtburchak bo'lsa ($a \le x \le b, \; c \le y \le d$):
Barcha chegaralar oddiy o'zgarmas sonlar bo'ladi:
$$
\iint_D f(x, y) \, dx dy = \int_a^b dx \int_c^d f(x, y) \, dy = \int_c^d dy \int_a^b f(x, y) \, dx
$$
Agar funksiya $f(x, y) = g(x) \cdot h(y)$ ko'paytma shaklida bo'lsa, ikkita mustaqil integral ko'paytmasiga ajraladi:
$$
\iint_D g(x)h(y) \, dx dy = \left( \int_a^b g(x) \, dx \right) \cdot \left( \int_c^d h(y) \, dy \right)
$$

### 2-holat: Soha egri chiziqlar bilan chegaralangan bo'lsa:
Agar soha quyidan $y = \varphi_1(x)$va yuqoridan$y = \varphi_2(x)$ bilan chegaralangan bo'lsa:

$$
\iint_D f(x, y) \, dx dy = \int_a^b dx \int_{\varphi_1(x)}^{\varphi_2(x)} f(x, y) \, dy
$$

> ⚠️ **Qat'iy hisoblash tartibi:**
> 1. **Ichki integral:** Avval ichki integral $y$bo'yicha hisoblanadi (bunda$x$doimiy son deb qaraladi). Chegaralar$\varphi_1(x)$va$\varphi_2(x)$qo'yilib,$y$ butunlay yo'qotiladi!
> 2. **Tashqi integral:** Qolgan faqat $x$ga bog'liq funksiya sonli chegaralar$[a; b]$ bo'yicha integrallanadi. Natijada yagona son hosil bo'ladi!
> *(Tashqi integral chegaralarida hech qachon o'zgaruvchi qatnashishi mumkin emas!)*

---

## 3. Integrallash tartibini o'zgartirish (Imtihonlarning shoh savoli)

Ba'zi integrallarni berilgan tartibda hisoblashning mutlaqo iloji bo'lmaydi (masalan $\int e^{y^2} dy$ elementar funksiyalarda mavjud emas). Ammo **integrallash tartibini o'zgartirsak** ($dx dy \to dy dx$), integral sekundlarda yechiladi!

### Tartibni o'zgartirish algoritmi:
1. Berilgan integraldan soha chegaralarini tengsizliklar ko'rinishida yozib oling.
2. Ushbu $D$sohani$Oxy$ tekisligida aniq chizing.
3. Sohani endi $y$ o'qi bo'yicha proyeksiyalab, yangi chegaralarni aniqlang.

---

## 4. Amaliy misollar va batafsil yechimlar

### 1-misol: To'g'ri to'rtburchakli sohada hisoblash
Integralni hisoblang:
$$
\iint_D (x^2 + 2y) \, dx dy, \quad D: \; 0 \le x \le 2, \; 1 \le y \le 3
$$

**Yechilishi:**
Takroriy integralga keltiramiz:
$$
\int_0^2 dx \int_1^3 (x^2 + 2y) \, dy
$$
1. Ichki integralni hisoblaymiz ($y$bo'yicha integrallaymiz,$x = \text{const}$):
   
$$
   \int_1^3 (x^2 + 2y) \, dy = \left. (x^2 y + y^2) \right|_1^3 = (3x^2 + 9) - (x^2 + 1) = 2x^2 + 8
   
$$
2. Tashqi integralga qo'yamiz va $x$ bo'yicha hisoblaymiz:
   
$$
   \int_0^2 (2x^2 + 8) \, dx = \left. \left( \frac{2x^3}{3} + 8x \right) \right|_0^2 = \left( \frac{16}{3} + 16 \right) - 0 = \frac{64}{3}
   
$$

**Javob:** $\frac{64}{3}$

---

### 2-misol: Uchburchakli sohada integrallash
Integralni hisoblang:
$$
\iint_D xy \, dx dy
$$
bu yerda $D$—$x = 0, y = 0$va$x + y = 2$ to'g'ri chiziqlari bilan chegaralangan uchburchak.

**Yechilishi:**
1. Soha chegaralarini aniqlaymiz:
   - $x$o'zgarishi:$0$dan$2$ gacha ($0 \le x \le 2$).
   - $y$o'zgarishi: pastdan$y = 0$, yuqoridan to'g'ri chiziq $y = 2 - x$.
2. Takroriy integralni tuzamiz:
   
$$
   \int_0^2 dx \int_0^{2 - x} xy \, dy = \int_0^2 x \, dx \left. \left( \frac{y^2}{2} \right) \right|_0^{2 - x}
   
$$
3. Chegarani qo'yamiz:
   
$$
   = \int_0^2 x \cdot \frac{(2 - x)^2}{2} \, dx = \frac{1}{2} \int_0^2 x(4 - 4x + x^2) \, dx = \frac{1}{2} \int_0^2 (4x - 4x^2 + x^3) \, dx
   
$$
4. Integrallaymiz:
   
$$
   = \frac{1}{2} \left. \left( 2x^2 - \frac{4x^3}{3} + \frac{x^4}{4} \right) \right|_0^2 = \frac{1}{2} \left( 8 - \frac{32}{3} + 4 \right) = \frac{1}{2} \left( 12 - \frac{32}{3} \right) = \frac{1}{2} \cdot \frac{4}{3} = \frac{2}{3}
   
$$

**Javob:** $\frac{2}{3}$

---

### 3-misol: Integrallash tartibini o'zgartirish (Klassik imtihon masalasi)
Integralni hisoblang:
$$
I = \int_0^1 dx \int_x^1 e^{y^2} \, dy
$$

**Yechilishi:**
Ichki integral $\int e^{y^2} dy$ ni hisoblab bo'lmaydi! Shuning uchun integrallash tartibini o'zgartiramiz:
1. Dastlabki soha: $0 \le x \le 1, \; x \le y \le 1$.
   Bu soha $y = x$chizig'idan yuqorida,$y = 1$ to'g'ri chizig'idan pastda joylashgan uchburchakdir.
2. Endi sohani $y$ o'qi bo'yicha qaraymiz:
   - $y$o'zgarishi:$0 \le y \le 1$;
   - Har bir gorizontal kesmada $x$chapdan$x = 0$dan o'ngga to'g'ri chiziq$x = y$ gacha o'zgaradi ($0 \le x \le y$).
3. Yangi tartibdagi integral:
   
$$
   I = \int_0^1 dy \int_0^y e^{y^2} \, dx
   
$$
4. Ichki integralni hisoblaymiz ($x$ bo'yicha):
   
$$
   \int_0^y e^{y^2} \, dx = e^{y^2} \left. x \right|_0^y = y e^{y^2}
   
$$
5. Tashqi integralga qo'yamiz ($y \, dy = \frac{1}{2} d(y^2)$):
   
$$
   I = \int_0^1 y e^{y^2} \, dy = \left. \frac{1}{2} e^{y^2} \right|_0^1 = \frac{1}{2}(e^1 - e^0) = \frac{e - 1}{2}
   
$$

**Javob:** $\frac{e - 1}{2}$

---

## ⚠️ Talabalar ko'p yo'l qo'yadigan 3 ta jiddiy xato

1. **Tashqi integral chegarasiga o'zgaruvchi qo'yib qo'yish:**
   > $\int_0^x dy \int_1^2 f(x, y) dx$ kabi yozuv mutlaqo xato! Tashqi integralning chegaralari **faqat va faqat sonlar** ($[a; b]$) bo'lishi shart. Aks holda oxirgi javobda o'zgaruvchi qolib ketadi, ikki karrali integral esa doimo aniq songa teng bo'lishi kerak.

2. **Ichki integral chegaralari tartibini buzish:**
   > Vertikal yo'nalishda doimo **"pastki chiziqdan yuqorigi chiziqqa"** qarab integrallanadi ($\int_{y_{\text{quyi}}}^{y_{\text{yuqori}}}$).

3. **Ichki integrallash paytida ikkinchi o'zgaruvchini yo'qotib yuborish:**
   > $y$bo'yicha integrallaganda$x$nol bo'lib ketmaydi, balki o'zgarmas ko'paytuvchi sifatida saqlanib qoladi:$\int x \, dy = x \int 1 \, dy = xy$.

---

## 💡 Ustozdan maslahat

Ikki karrali integralni yechishga kirishishdan oldin, albatta qoralama varag'ingizga berilgan **$D$ sohaning chizmasini chizing**. Chizmasiz chegaralarni to'g'ri qo'yishga urinish — imtihonda xato qilishning eng oson yo'lidir.

---

## ✍️ Mustaqil yechish uchun mashqlar

1. $\int_0^1 dx \int_0^2 (x + y) \, dy$ integralini hisoblang.
2. $D: \; 0 \le x \le 1, \; 0 \le y \le x^2$sohada$\iint_D (x + 2y) \, dx dy$ ni hisoblang.
3. $\int_0^1 dy \int_y^1 \cos(x^2) \, dx$ integralida integrallash tartibini o'zgartirib yeching.
4. $y = 0, y = x^2, x = 2$ chiziqlar bilan chegaralangan tekis shakl yuzini ikki karrali integral orqali toping.

<details style="margin-top: 1rem; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); cursor: pointer;">
<summary style="font-weight: 700; color: var(--primary);">To'liq yechimlar va javoblar</summary>

**1-masala:** Ichki: $\left. (xy + \frac{y^2}{2}) \right|_0^2 = 2x + 2$. Tashqi: $\int_0^1 (2x + 2) dx = \left. (x^2 + 2x) \right|_0^1 = 3$.

    

**2-masala:** $\int_0^1 dx \left. (xy + y^2) \right|_0^{x^2} = \int_0^1 (x^3 + x^4) dx = \frac{1}{4} + \frac{1}{5} = \frac{9}{20} = 0.45$.

    

**3-masala:** Tartibni o'zgartirish: $\int_0^1 dx \int_0^x \cos(x^2) dy = \int_0^1 x\cos(x^2) dx = \left. \frac{1}{2}\sin(x^2) \right|_0^1 = \frac{\sin 1}{2}$.

    

**4-masala:** $S = \int_0^2 dx \int_0^{x^2} dy = \int_0^2 x^2 dx = \left. \frac{x^3}{3} \right|_0^2 = \frac{8}{3}$.

</details>
