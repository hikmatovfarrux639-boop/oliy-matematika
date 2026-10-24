---
title: "Vektor maydon sirkulyatsiyasi, Rotor va Stoks formulasi"
module: "karrali-integrallar"
order: 6
description: "Vektor maydon sirkulyatsiyasi, rotor (curl) tushunchasi va uni determinant orqali hisoblash, Stoks teoremasi, potensial maydonlar va sirkulyatsiyaning nolga tenglik sharti."
---

## Kirish: Girdoblar va aylanish harakati

Agar suv yuzasiga kichik parrakcha (turbina) tashlasak, u shunchaki oldinga suzadimi yoki o'z o'qi atrofida aylana boshlaydimi?
* Agar suv oqimida **girdob** (aylanish) bo'lsa, parrak aylanadi.
* Vektor maydonning biror nuqtadagi **aylanish intensivligi va o'qini** ifodalovchi vektor matematikada **Rotor** (yoki *curl*) deb ataladi!
* Maydonning yopiq kontur bo'ylab jami "aylanish kuchi" esa **Sirkulyatsiya** deyiladi.

Bu tushunchalar Maksvell tenglamalari, elektromagnit induksiya (Faradey qonuni) va gidrodinamikaning asosi hisoblanadi.

---

## 1. Vektor maydon sirkulyatsiyasi

$\vec{a} = P\vec{i} + Q\vec{j} + R\vec{k}$ vektor maydoni va yo'naltirilgan yopiq $L$ fazoviy kontur berilgan bo'lsin.
$\vec{a}$ vektorining $L$ yopiq kontur bo'yicha **sirkulyatsiyasi ($C$)** deb quyidagi 2-tur egri chiziqli integralga aytiladi:

$$
C = \oint_L \vec{a} \cdot d\vec{r} = \oint_L P \, dx + Q \, dy + R \, dz
$$

Fizik ma'nosi: Agar $\vec{F}$ kuch maydoni bo'lsa, $C$ — zarrachaning yopiq traektoriya bo'ylab to'liq bir marta aylanib chiqishida bajarilgan **jami ishdir**.

---

## 2. Rotor (Uyurma / Curl)

$\vec{a} = P\vec{i} + Q\vec{j} + R\vec{k}$ vektor maydonining **rotori** ($\operatorname{rot} \vec{a}$) deb quyidagi qulay determinant yordamida hisoblanadigan yangi vektorga aytiladi:

$$
\operatorname{rot} \vec{a} = \begin{vmatrix}
\vec{i} & \vec{j} & \vec{k} \\
\frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\
P & Q & R
\end{vmatrix}
$$

Determinantni 1-satr bo'yicha ochsak:
$$
\operatorname{rot} \vec{a} = \left( \frac{\partial R}{\partial y} - \frac{\partial Q}{\partial z} \right) \vec{i} + \left( \frac{\partial P}{\partial z} - \frac{\partial R}{\partial x} \right) \vec{j} + \left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right) \vec{k}
$$

* Agar $\operatorname{rot} \vec{a} = \vec{0}$ bo'lsa, maydon **uyurmasiz (potensial)** deyiladi.
* Agar $\operatorname{rot} \vec{a} \neq \vec{0}$ bo'lsa, maydonda girdob (aylanish) mavjud.

---

## 3. Stoks formulasi (Konturdan sirtga o'tish)

Agar $L$ kontur biror $\Omega$ sirtning chegarasi bo'lsa, $L$ bo'yicha sirkulyatsiya $\Omega$ sirt orqali olingan **rotor oqimiga** teng bo'ladi!

$$
\oint_L P \, dx + Q \, dy + R \, dz = \iint_{\Omega} (\operatorname{rot} \vec{a} \cdot \vec{n}) \, d\sigma
$$

Determinant ko'rinishida yozsak:
$$
\oint_L \vec{a} \cdot d\vec{r} = \iint_{\Omega} \begin{vmatrix}
\cos\alpha & \cos\beta & \cos\gamma \\
\frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\
P & Q & R
\end{vmatrix} d\sigma
$$

> [!NOTE]
> Grin formulasi — aslida Stoks formulasining $Oxy$ tekisligidagi ($z = 0$) xususiy holatidir!

---

## 4. Potensial maydonlar va ularning xossalari

Agar fazoning biror sohasida $\operatorname{rot} \vec{a} = \vec{0}$ bo'lsa, quyidagi 4 ta tasdiq bir-biriga teng kuchlidir:
1. Maydon **potensial** hisoblanadi: $\vec{a} = \operatorname{grad} u$.
2. Har qanday yopiq kontur bo'yicha sirkulyatsiya nolga teng: $\oint_L \vec{a} \cdot d\vec{r} = 0$.
3. $A$ nuqtadan $B$ nuqtaga harakatda bajarilgan ish yo'l shakliga bog'liq emas: $\int_{AB} \vec{a} \cdot d\vec{r} = u(B) - u(A)$.
4. $P\,dx + Q\,dy + R\,dz = du$ ifoda $u(x, y, z)$ skalyar potensialning to'liq differensiali bo'ladi.

---

## 5. To'liq yechilgan namunaviy masalalar

### 1-misol: Rotorni hisoblash
**Shart:** $\vec{a} = y^2\vec{i} - x^2\vec{j} + z^2\vec{k}$ vektor maydonining rotorini toping.

**Yechish:**
1. Determinant tuzamiz:
   
$$
   \operatorname{rot} \vec{a} = \begin{vmatrix}
   \vec{i} & \vec{j} & \vec{k} \\
   \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\
   y^2 & -x^2 & z^2
   \end{vmatrix}
   
$$
2. Koordinatalarni hisoblaymiz:
   * $\vec{i}$ oldidagi: $\frac{\partial(z^2)}{\partial y} - \frac{\partial(-x^2)}{\partial z} = 0 - 0 = 0$
   * $\vec{j}$ oldidagi: $\frac{\partial(y^2)}{\partial z} - \frac{\partial(z^2)}{\partial x} = 0 - 0 = 0$
   * $\vec{k}$ oldidagi: $\frac{\partial(-x^2)}{\partial x} - \frac{\partial(y^2)}{\partial y} = -2x - 2y = -2(x + y)$
3. Demak:
   
$$
   \operatorname{rot} \vec{a} = -2(x + y)\vec{k}
   
$$
**Javob:** $\mathbf{\operatorname{rot} \vec{a} = -2(x + y)\vec{k}}$

---

### 2-misol: Stoks formulasi bo'yicha sirkulyatsiyani topish
**Shart:** $\vec{a} = y\vec{i} + z\vec{j} + x\vec{k}$ maydonning $x^2 + y^2 = 1, z = 0$ aylanasi bo'yicha sirkulyatsiyasini Stoks formulasi bilan hisoblang (aylana musbat yo'nalishda).

**Yechish:**
1. Stoks formulasi: $C = \iint_{\Omega} (\operatorname{rot} \vec{a} \cdot \vec{n}) \, d\sigma$.
2. $\Omega$ sirt sifatida $z = 0$ tekisligidagi $x^2 + y^2 \le 1$ doirani olamiz.
   Uning normali yuqoriga qaragan: $\vec{n} = (0, 0, 1) = \vec{k}$.
3. Rotorni topamiz:
   
$$
   \operatorname{rot} \vec{a} = \begin{vmatrix}
   \vec{i} & \vec{j} & \vec{k} \\
   \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\
   y & z & x
   \end{vmatrix}
   
$$
   * $\vec{i}$ bo'yicha: $\frac{\partial x}{\partial y} - \frac{\partial z}{\partial z} = 0 - 1 = -1$
   * $\vec{j}$ bo'yicha: $\frac{\partial y}{\partial z} - \frac{\partial x}{\partial x} = 0 - 1 = -1$
   * $\vec{k}$ bo'yicha: $\frac{\partial z}{\partial x} - \frac{\partial y}{\partial y} = 0 - 1 = -1$
   
$$
   \operatorname{rot} \vec{a} = -\vec{i} - \vec{j} - \vec{k}
   
$$
4. Skalyar ko'paytma:
   
$$
   \operatorname{rot} \vec{a} \cdot \vec{n} = (-\vec{i} - \vec{j} - \vec{k}) \cdot \vec{k} = -1
   
$$
5. Integral:
   
$$
   C = \iint_{\Omega} (-1) \, d\sigma = -1 \cdot S_{\text{doira}} = -1 \cdot (\pi \cdot 1^2) = -\pi
   
$$
**Javob:** $\mathbf{C = -\pi}$

---

## ⚠️ Imtihondagi tuzoqlar (Tipik talaba xatolari)

> [!WARNING]
> 1. **Divergensiya va Rotorni adashtirish:**
>    * Divergensiya — **SKALYAR** (oddiy son yoki ifoda): $\operatorname{div} \vec{a} = \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z}$.
>    * Rotor — **VEKTOR** (tarkibida $\vec{i}, \vec{j}, \vec{k}$ bor determinant natijasi).
> 2. **Stoksda kontur yo'nalishi va normal bog'liqligi:** Normal vektor $\vec{n}$ shunday tanlanishi kerakki, uning uchidan qaraganda konturni aylanib chiqish soat miliga teskari ko'rinsin (o'ng qo'l qoidasi).

---

## ✍️ O'zingizni sinab ko'ring (Mustaqil mashq)

**Masala:** Maydon $\vec{a} = (2x - y)\vec{i} + (2y - x)\vec{j} + 3z^2\vec{k}$ berilgan. Uning potensial maydon ekanini isbotlang ($\operatorname{rot} \vec{a} = \vec{0}$) va ixtiyoriy yopiq kontur bo'yicha sirkulyatsiyasini toping.

<details>
<summary>👉 To'liq yechimni ko'rish (Tekshirish)</summary>

**Yechish bosqichlari:**
1. Rotorni hisoblaymiz:
   
$$
   \operatorname{rot} \vec{a} = \begin{vmatrix}
   \vec{i} & \vec{j} & \vec{k} \\
   \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\
   2x-y & 2y-x & 3z^2
   \end{vmatrix}
   
$$
2. Xususiy hosilalarni tekshiramiz:
   * $\vec{i}$: $\frac{\partial(3z^2)}{\partial y} - \frac{\partial(2y-x)}{\partial z} = 0 - 0 = 0$
   * $\vec{j}$: $\frac{\partial(2x-y)}{\partial z} - \frac{\partial(3z^2)}{\partial x} = 0 - 0 = 0$
   * $\vec{k}$: $\frac{\partial(2y-x)}{\partial x} - \frac{\partial(2x-y)}{\partial y} = (-1) - (-1) = 0$
3. Demak, $\operatorname{rot} \vec{a} = \vec{0}$. Maydon potensialdir.
4. Potensial maydonda har qanday yopiq kontur bo'yicha sirkulyatsiya nolga teng:
   
$$
   C = \oint_L \vec{a} \cdot d\vec{r} = 0
   
$$

**Javob:** $\mathbf{\operatorname{rot} \vec{a} = \vec{0}}$, sirkulyatsiya $\mathbf{C = 0}$.
</details>
