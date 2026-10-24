---
title: "Ikkinchi tartibli o'zgarmas koeffitsiyentli chiziqli tenglamalar"
module: "differensial-tenglamalar"
order: 4
description: "2-tartibli chiziqli differensial tenglamalar, xarakteristik tenglama, diskriminantning 3 ta holati (haqiqiy, karrali va kompleks), bir jinsli bo'lmagan tenglamalar va rezonans."
---

## Kirish: Tebranishlar fizikasi va prujinali mayatnik

Fizika va texnikada harakatning deyarli barcha asosiy qonunlari 2-tartibli differensial tenglamalar orqali ifodalanadi. Chunki Nyutonning 2-qonuniga ko'ra $F = m \cdot a = m \cdot x''(t)$!

Masalan, prujinaga osilgan yukning erkin tebranishi (Guk qonuni $F = -kx$):
$$
m x'' + k x = 0 \implies x'' + \omega^2 x = 0
$$
Agar havoning ishqalanish qarshiligini hisobga olsak:
$$
x'' + 2\gamma x' + \omega^2 x = 0
$$
Ushbu tenglama yordamida nafaqat mexanik tebranishlar, balki radiotexnikadagi tebranish konturi ($RLC$ zanjirlari), binolarning zilzilabardoshligi va ko'priklarning shamoldagi rezonansi to'liq modellashtiriladi!

---

## 1. Bir jinsli tenglama va Vronskiy determinanti

> **Standart ko'rinish:**
>
> 
$$
> y'' + p y' + q y = 0
> 
$$
>
> bu yerda $p$ va $q$ — haqiqiy o'zgarmas sonlar.

### Yechimlar strukturasi (FYS):
Agar $y_1(x)$ va $y_2(x)$ tenglamaning chiziqli erkli ikkita xususiy yechimi (Fundamental Yechimlar Sistemasi) bo'lsa, umumiy yechim ularning chiziqli kombinatsiyasi bo'ladi:

$$
y = C_1 y_1(x) + C_2 y_2(x)
$$

Yechimlarning chiziqli erkliligini tekshirish uchun **Vronskiy determinanti (Vronskian)** hisoblanadi:
$$
W(y_1, y_2) = \begin{vmatrix} y_1 & y_2 \\ y_1' & y_2' \end{vmatrix} = y_1 y_2' - y_2 y_1' \neq 0
$$

---

## 2. Xarakteristik tenglama usuli (Eyler usuli)

Yechimni $y = e^{kx}$ ko'rinishida qidiramiz. Hosilalari: $y' = k e^{kx}, y'' = k^2 e^{kx}$.
Tenglamaga qo'ysak, $e^{kx} \neq 0$ bo'lgani sababli oddiy algebraik kvadrat tenglama hosil bo'ladi:

$$
k^2 + p k + q = 0
$$
Diskriminant: $D = p^2 - 4q$.

Kvadrat tenglama ildizlariga qarab umumiy yechim **3 ta holat**ga bo'linadi:

| Holat | Ildizlar | FYS ($y_1, y_2$) | Umumiy yechim $y$ |
|---|---|---|---|
| **1-holat ($D > 0$)** | Ikkita turli haqiqiy ildiz: $k_1 \neq k_2$ | $e^{k_1 x}, \; e^{k_2 x}$ | $y = C_1 e^{k_1 x} + C_2 e^{k_2 x}$ |
| **2-holat ($D = 0$)** | Bitta karrali haqiqiy ildiz: $k_1 = k_2 = k$ | $e^{kx}, \; x e^{kx}$ | $y = (C_1 + C_2 x) e^{kx}$ |
| **3-holat ($D < 0$)** | Qo'shma kompleks ildizlar: $k_{1,2} = \alpha \pm i\beta$ | $e^{\alpha x}\cos\beta x, \; e^{\alpha x}\sin\beta x$ | $y = e^{\alpha x}(C_1 \cos\beta x + C_2 \sin\beta x)$ |

*(Bu yerda $\alpha = -\frac{p}{2}$, $\beta = \frac{\sqrt{-D}}{2}$).*

---

## 3. Bir jinsli bo'lmagan tenglamalar ($y'' + py' + qy = f(x)$)

Agar tenglamaning o'ng tomonida $f(x)$ funksiya bo'lsa, uning umumiy yechimi ikki qismdan iborat bo'ladi:

$$
y = y_0 + y^*
$$
- $y_0$ — mos bir jinsli tenglamaning ($f(x) = 0$ dagi) umumiy yechimi;
- $y^*$ — bir jinsli bo'lmagan tenglamaning biror **xususiy yechimi**.

### Noma'lum koeffitsiyentlar usuli (Maxsus o'ng tomonlar uchun):
| O'ng tomon $f(x)$ | Xususiy yechim $y^*$ ko'rinishi |
|---|---|
| $P_n(x)$ ko'phad | $y^* = x^r \cdot Q_n(x)$ ($q \neq 0$ bo'lsa $r = 0$, $q = 0$ bo'lsa $r = 1$) |
| $P_n(x) e^{ax}$ | $y^* = x^r \cdot Q_n(x) e^{ax}$ ($a$ xarakteristik ildiz bo'lmasa $r=0$, 1 karrali ildiz bo'lsa $r=1$) |
| $A\cos(\omega x) + B\sin(\omega x)$ | $y^* = x^r (M\cos\omega x + N\sin\omega x)$ ($\pm i\omega$ ildiz bo'lsa $r=1$ — **Rezonans!**) |

---

## 4. Amaliy misollar va batafsil yechimlar

### 1-misol: Ikkita turli haqiqiy ildiz ($D > 0$)
Tenglamaning umumiy yechimini toping:
$$
y'' - 7y' + 12y = 0
$$

**Yechilishi:**
1. Xarakteristik tenglamani tuzamiz:
   $$k^2 - 7k + 12 = 0$$
2. Viyet teoremasi bo'yicha ildizlarni topamiz:
   $$(k - 3)(k - 4) = 0 \implies k_1 = 3, \quad k_2 = 4$$
3. Ildizlar haqiqiy va har xil. Umumiy yechim formulasi:
   $$y = C_1 e^{3x} + C_2 e^{4x}$$

**Javob:** $y = C_1 e^{3x} + C_2 e^{4x}$

---

### 2-misol: Karrali ildiz ($D = 0$)
Tenglamaning umumiy yechimini toping:
$$
y'' - 6y' + 9y = 0
$$

**Yechilishi:**
1. Xarakteristik tenglama:
   $$k^2 - 6k + 9 = 0 \implies (k - 3)^2 = 0 \implies k_1 = k_2 = 3$$
2. Karrali ildiz holatida ikkinchi yechim oldiga $x$ ko'paytuvchi qo'yiladi:
   $$y = (C_1 + C_2 x) e^{3x}$$

**Javob:** $y = (C_1 + C_2 x) e^{3x}$

---

### 3-misol: Kompleks ildizlar va tebranishlar ($D < 0$)
Tenglamaning umumiy yechimini toping:
$$
y'' + 4y' + 13y = 0
$$

**Yechilishi:**
1. Xarakteristik tenglama:
   $$k^2 + 4k + 13 = 0$$
   $$D = 4^2 - 4(1)(13) = 16 - 52 = -36 < 0$$
2. Kompleks ildizlar:
   $$k_{1,2} = \frac{-4 \pm \sqrt{-36}}{2} = \frac{-4 \pm 6i}{2} = -2 \pm 3i$$
   Bu yerda haqiqiy qism $\alpha = -2$, mavhum qism $\beta = 3$.
3. Trigonometrik yechimni yozamiz:
   $$y = e^{-2x} (C_1 \cos 3x + C_2 \sin 3x)$$

**Javob:** $y = e^{-2x} (C_1 \cos 3x + C_2 \sin 3x)$

---

### 4-misol: 2-tartibli Koshi masalasi (2 ta boshlang'ich shart bilan)
Tenglamaning $y(0) = 1, y'(0) = 0$ shartlarni qanoatlantiruvchi xususiy yechimini toping:
$$
y'' + 9y = 0
$$

**Yechilishi:**
1. Xarakteristik tenglama:
   $$k^2 + 9 = 0 \implies k^2 = -9 \implies k_{1,2} = \pm 3i$$
   $\alpha = 0, \beta = 3$.
2. Umumiy yechim:
   $$y(x) = C_1 \cos 3x + C_2 \sin 3x$$
3. Birinchi hosilasini hisoblaymiz:
   $$y'(x) = -3C_1 \sin 3x + 3C_2 \cos 3x$$
4. Boshlang'ich shartlarni qo'yamiz ($x = 0$):
   - $y(0) = C_1 \cos(0) + C_2 \sin(0) = C_1 = 1$
   - $y'(0) = -3C_1 \sin(0) + 3C_2 \cos(0) = 3C_2 = 0 \implies C_2 = 0$
5. Xususiy yechim:
   $$y(x) = \cos 3x$$

**Javob:** $y = \cos 3x$

---

### 5-misol: Bir jinsli bo'lmagan tenglama
Tenglamaning umumiy yechimini toping:
$$
y'' - 4y = 8x
$$

**Yechilishi:**
1. Mos bir jinsli tenglama: $y'' - 4y = 0 \implies k^2 - 4 = 0 \implies k = \pm 2$.
   $$y_0 = C_1 e^{2x} + C_2 e^{-2x}$$
2. O'ng tomon $f(x) = 8x$ — birinchi darajali ko'phad. Shuning uchun xususiy yechimni $y^* = Ax + B$ ko'rinishida qidiramiz:
   - $(y^*)' = A$
   - $(y^*)'' = 0$
3. Tenglamaga qo'yamiz:
   $$0 - 4(Ax + B) = 8x \implies -4Ax - 4B = 8x$$
   Koeffitsiyentlarni tenglashtiramiz:
   - $x$ oldida: $-4A = 8 \implies A = -2$
   - Ozod had: $-4B = 0 \implies B = 0$
   Demak, $y^* = -2x$.
4. To'liq umumiy yechim ($y = y_0 + y^*$):
   $$y = C_1 e^{2x} + C_2 e^{-2x} - 2x$$

**Javob:** $y = C_1 e^{2x} + C_2 e^{-2x} - 2x$

---

## ⚠️ Talabalar ko'p yo'l qo'yadigan 3 ta jiddiy xato

1. **Karrali ildizda $x$ ko'paytuvchisini unutish:**
   > Agar $k_1 = k_2 = 3$ bo'lsa, $y = C_1 e^{3x} + C_2 e^{3x} = (C_1 + C_2) e^{3x} = C e^{3x}$ bitta doimiyga aylanib qoladi! 2-tartibli tenglamada albatta 2 ta erkli o'zgarmas ($C_1$ va $C_2$) bo'lishi shart. To'g'risi: $(C_1 + C_2 x) e^{3x}$.

2. **Kompleks ildizda $\alpha$ va $\beta$ ni adashtirish:**
   > Formulada $\alpha$ (haqiqiy qism) eksponenta ko'rsatkichiga chiqadi ($e^{\alpha x}$), $\beta$ (mavhum qism) esa kosinus va sinus burchagiga kiradi ($\cos\beta x$).

3. **Bir jinsli bo'lmagan tenglamada $y_0$ ni tashlab faqat $y^*$ ni yozish:**
   > Bir jinsli bo'lmagan tenglamaning to'liq umumiy yechimi har doim bir jinsli yechim $y_0$ va xususiy yechim $y^*$ ning **yig'indisidan** iborat bo'ladi.

---

## 💡 Ustozdan maslahat

Agar xarakteristik tenglama ildizlari $k_{1,2} = \pm i\omega$ (sof mavhum sonlar) bo'lsa, $\alpha = 0$ bo'lgani uchun $e^{0x} = 1$ bo'ladi va natijada **so'nmas garmonik tebranish** hosil bo'ladi:
$$
y = C_1 \cos\omega x + C_2 \sin\omega x
$$
Bu tabiatdagi ideal mayatnik harakatining matematik ifodasidir!

---

## ✍️ Mustaqil yechish uchun mashqlar

1. $y'' - y' - 6y = 0$ tenglamaning umumiy yechimini toping.
2. $y'' + 4y' + 4y = 0$ tenglamani yeching.
3. $y'' + 16y = 0$ tenglamaning umumiy yechimini toping.
4. $y'' - 3y' + 2y = 4, \quad y(0) = 3, y'(0) = 2$ Koshi masalasini yeching.

<details style="margin-top: 1rem; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); cursor: pointer;">
  <summary style="font-weight: 700; color: var(--primary);">To'liq yechimlar va javoblar</summary>
  <div style="margin-top: 0.75rem; padding-top: 0.75rem; border-top: 1px solid var(--border-color);">
    <p><strong>1-masala:</strong> $k^2 - k - 6 = 0 \implies k_1 = 3, k_2 = -2$. Javob: $y = C_1 e^{3x} + C_2 e^{-2x}$.</p>
    <p><strong>2-masala:</strong> $(k + 2)^2 = 0 \implies k = -2$ (karrali). Javob: $y = (C_1 + C_2 x) e^{-2x}$.</p>
    <p><strong>3-masala:</strong> $k^2 + 16 = 0 \implies k = \pm 4i$. Javob: $y = C_1 \cos 4x + C_2 \sin 4x$.</p>
    <p><strong>4-masala:</strong> $y_0 = C_1 e^x + C_2 e^{2x}$. $y^* = 2$. $y = C_1 e^x + C_2 e^{2x} + 2$. $y(0) = C_1 + C_2 + 2 = 3 \implies C_1 + C_2 = 1$. $y'(0) = C_1 + 2C_2 = 2 \implies C_2 = 1, C_1 = 0$. Javob: $y = e^{2x} + 2$.</p>
  </div>
</details>
