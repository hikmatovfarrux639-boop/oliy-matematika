---
title: "Yuqori tartibli hosilalar va funksiya differensiali"
module: "hosila"
order: 4
description: "Ikkinchi va n-tartibli hosilalar, fizik va geometrik ma'nosi, egilish nuqtalari, Leybnits formulasi, funksiya differensiali va taqribiy hisoblash."
---

## Kirish: Hosilaning hosilasi

Agar $y = f(x)$ funksiyaning hosilasi $f'(x)$ yana biror yangi funksiya bo'lsa, tabiiyki, ushbu hosiladan ham qaytadan hosila olish mumkin. 

Matematik analizda bu jarayon **yuqori tartibli hosilalar** deb ataladi va mexanikadan tortib differensial tenglamalar nazariyasigacha eng ko'p qo'llaniladigan tushunchalardan biridir.

---

## 1. Ikkinchi tartibli hosila ($y''$) va uning ma'nosi

> **Ta'rif:** Funksiyaning birinchi tartibli hosilasidan olingan hosila uning **ikkinchi tartibli hosilasi** deyiladi va $f''(x)$, $y''$ yoki $\frac{d^2 y}{dx^2}$ deb belgilanadi:
>
> 
$$
> f''(x) = (f'(x))'
> 
$$

### A) Fizik ma'nosi: Tezlanish
Agar moddiy nuqtaning harakat qonuni $s = s(t)$ bo'lsa:
1. $s'(t) = v(t)$ — harakatning **oniy tezligi**;
2. $s''(t) = v'(t) = a(t)$ — tezlikning o'zgarish tezligi, ya'ni **oniy tezlanish**!

Mashhur Isaak Nyutonning ikkinchi qonuni aynan ikkinchi tartibli hosila orqali ifodalanadi:
$$
F = m \cdot a = m \cdot s''(t)
$$

### B) Geometrik ma'nosi: Botiqlik, Qavariqlik va Egilish nuqtasi
Ikkinchi hosila egri chiziqning qaysi tomonga bukilganligini ko'rsatadi:
- Agar oraliqda $f''(x) > 0$ bo'lsa $\implies$ grafik **botiq** (kulib turgan og'iz kabi $\cup$), urinmalardan yuqorida yotadi;
- Agar oraliqda $f''(x) < 0$ bo'lsa $\implies$ grafik **qavariq** (xomush og'iz kabi $\cap$), urinmalardan pastda yotadi;
- Agar $f''(x_0) = 0$ bo'lib, uning atrofida ikkinchi hosilaning ishorasi o'zgarsa $\implies x_0$ nuqta **egilish (burilish) nuqtasi** deyiladi.

### C) 2-tartibli hosila orqali ekstremumni aniqlash (Tezkor usul):
Agar $f'(x_0) = 0$ (statsionar nuqta) bo'lsa:
- $f''(x_0) < 0 \implies x_0$ — **lokal maksimum** nuqtasi;
- $f''(x_0) > 0 \implies x_0$ — **lokal minimum** nuqtasi;
- $f''(x_0) = 0 \implies$ bu qoida javob bera olmaydi (ishorani birinchi hosila orqali tekshirish kerak).

---

## 2. $n$-tartibli hosilalar va umumiy formulalar

Funksiyadan $n$ marta ketma-ket hosila olinganda $n$-tartibli hosila hosil bo'ladi va $y^{(n)}$ deb yoziladi.

### Eng mashhur $n$-tartibli hosilalar:
1. **Ko'rsatkichli funksiya:** $(e^{kx})^{(n)} = k^n e^{kx}$.
2. **Sinus:** $(\sin x)^{(n)} = \sin\left(x + n \cdot \frac{\pi}{2}\right)$.
3. **Kosinus:** $(\cos x)^{(n)} = \cos\left(x + n \cdot \frac{\pi}{2}\right)$.
4. **Natural logarifm:** $(\ln x)^{(n)} = \frac{(-1)^{n-1} (n - 1)!}{x^n}$.
5. **Darajali funksiya:** $(x^m)^{(n)} = m(m - 1)\dots(m - n + 1)x^{m - n}$. (Agar $n > m$ bo'lsa, hosila $0$ ga teng).

---

## 3. Leybnits formulasi (Ko'paytmaning $n$-tartibli hosilasi)

Ikki funksiya ko'paytmasining $n$-tartibli hosilasini topish Nyuton binomiga o'xshash mashhur **Leybnits formulasi** orqali amalga oshiriladi:

$$
(u \cdot v)^{(n)} = \sum_{k=0}^n C_n^k u^{(n - k)} v^{(k)} = u^{(n)}v + n u^{(n - 1)}v' + \frac{n(n - 1)}{2!} u^{(n - 2)}v'' + \dots + u v^{(n)}
$$

Bu formula ayniqsa ko'phad va eksponenta ko'paytirilganda (masalan, $(x^2 e^x)^{(10)}$) mo''jizaviy darajada qulaydir, chunki ko'phadning 3-hosilasi nolga aylanib, yig'indidagi qolgan barcha hadlar yo'qolib ketadi!

---

## 4. Funksiya differensiali ($dy$) va taqribiy hisoblash

> **Ta'rif:** $y = f(x)$ funksiya orttirmasi $\Delta y$ ning $\Delta x$ ga nisbatan chiziqli asosiy qismi **funksiya differensiali** deyiladi:
>
> 
$$
> dy = f'(x) \cdot dx
> 
$$
> bu yerda $dx = \Delta x$ — argument orttirmasi.

### Differensial yordamida taqribiy hisoblash:
Juda kichik $\Delta x$ larda funksiya orttirmasi uning differensialiga deyarli teng bo'ladi ($\Delta y \approx dy$):

$$
f(x_0 + \Delta x) \approx f(x_0) + f'(x_0) \cdot \Delta x
$$

---

## 5. Amaliy misollar va batafsil yechimlar

### 1-misol: 2-tartibli hosilani hisoblash
Funksiyaning 2-tartibli hosilasini toping:
$$
y = x^3 \ln x
$$

**Yechilishi:**
1. Birinchi hosila $y'$:
   $$y' = (x^3)' \ln x + x^3 (\ln x)' = 3x^2 \ln x + x^3 \cdot \frac{1}{x} = 3x^2 \ln x + x^2$$
2. Ikkinchi hosila $y'' = (y')'$:
   $$y'' = (3x^2 \ln x)' + (x^2)'$$
   $3x^2 \ln x$ ga yana ko'paytma formulasini qo'llaymiz:
   $$(3x^2 \ln x)' = 6x \ln x + 3x^2 \cdot \frac{1}{x} = 6x \ln x + 3x$$
   Qo'shamiz:
   $$y'' = 6x \ln x + 3x + 2x = 6x \ln x + 5x = x(6\ln x + 5)$$

**Javob:** $x(6\ln x + 5)$

---

### 2-misol: Egilish (burilish) nuqtalarini topish
Funksiyaning botiqlik, qavariqlik oraliqlarini va egilish nuqtalarini toping:
$$
f(x) = x^3 - 6x^2 + 9x + 2
$$

**Yechilishi:**
1. $f'(x) = 3x^2 - 12x + 9$
2. $f''(x) = 6x - 12$
3. $f''(x) = 0$ tenglamani yechamiz:
   $$6x - 12 = 0 \implies x = 2$$
4. $x = 2$ atrofida ikkinchi hosila ishorasini tekshiramiz:
   - $x < 2$ da (masalan $x = 0$): $f''(0) = -12 < 0 \implies$ funksiya **qavariq** ($\cap$).
   - $x > 2$ da (masalan $x = 3$): $f''(3) = 6 > 0 \implies$ funksiya **botiq** ($\cup$).
   - $x = 2$ nuqtada ishora o'zgardi, demak $x = 2$ — **egilish nuqtasi**!
   $y$ koordinatasi: $f(2) = 2^3 - 6(4) + 9(2) + 2 = 8 - 24 + 18 + 2 = 4$.

**Javob:** Egilish nuqtasi: $(2; 4)$. $(-\infty; 2)$ da qavariq, $(2; +\infty)$ da botiq.

---

### 3-misol: Leybnits formulasi orqali yuqori tartibli hosila
$(x^2 \cdot e^{2x})$ ning 10-tartibli hosilasini toping.

**Yechilishi:**
- $u = e^{2x} \implies u^{(k)} = 2^k e^{2x}$
- $v = x^2 \implies v' = 2x, \; v'' = 2, \; v''' = 0$ (3-hosiladan boshlab barchasi $0$).

Leybnits formulasini ochamiz:
$$
(u \cdot v)^{(10)} = C_{10}^0 u^{(10)} v + C_{10}^1 u^{(9)} v' + C_{10}^2 u^{(8)} v''
$$
Kombinatorika koeffitsiyentlari: $C_{10}^0 = 1, \; C_{10}^1 = 10, \; C_{10}^2 = \frac{10 \cdot 9}{2} = 45$.
Qo'yamiz:
$$
= 1 \cdot (2^{10} e^{2x}) \cdot x^2 + 10 \cdot (2^9 e^{2x}) \cdot (2x) + 45 \cdot (2^8 e^{2x}) \cdot 2
$$
$2^8 e^{2x}$ ni qavsdan tashqariga chiqaramiz:
$$
= 2^8 e^{2x} [4x^2 + 10(2)(2x) + 45(2)] = 256 e^{2x} (4x^2 + 40x + 90) = 1024 e^{2x} (x^2 + 10x + 22.5)
$$

**Javob:** $2^8 e^{2x}(4x^2 + 40x + 90)$

---

### 4-misol: Differensial yordamida taqribiy hisoblash
Taqribiy hisoblang:
$$
\sqrt{16.08}
$$

**Yechilishi:**
1. Funksiyani tanlaymiz: $f(x) = \sqrt{x}$.
2. Asosiy nuqta: $x_0 = 16$ (chunki $\sqrt{16} = 4$ oson chiqadi).
3. Orttirma: $\Delta x = 0.08$.
4. Hosilani hisoblaymiz: $f'(x) = \frac{1}{2\sqrt{x}} \implies f'(16) = \frac{1}{2\sqrt{16}} = \frac{1}{8} = 0.125$.
5. Taqribiy formulaga qo'yamiz:
   
$$
   f(16 + 0.08) \approx f(16) + f'(16) \cdot \Delta x
   
$$
   
$$
   \sqrt{16.08} \approx 4 + 0.125 \cdot 0.08 = 4 + 0.010 = 4.01
   
$$

*(Kalkulyator bilan tekshirish: $\sqrt{16.08} \approx 4.009988\dots$ Aniqlik 0.00001 gacha to'g'ri!)*

**Javob:** $\approx 4.01$

---

## ⚠️ Talabalar ko'p yo'l qo'yadigan 3 ta jiddiy xato

1. **Ikkinchi hosilani birinchi hosilaning kvadrati bilan adashtirish:**
   > $f''(x) \neq [f'(x)]^2$! Masalan, $f(x) = x^3$ da $f'(x) = 3x^2$. Ikkinchi hosila $f''(x) = 6x$ bo'ladi. Kvadrati esa $(3x^2)^2 = 9x^4$. Ular butunlay boshqa-boshqa tushunchalar!

2. **$f''(x_0) = 0$ bo'lsa, birdaniga "egilish nuqtasi" deb e'lon qilish:**
   > Ikkinchi hosilaning nolga teng bo'lishi hali yetarli emas! Uning atrofida ikkinchi hosila ishorasini o'zgartirishi shart. Masalan, $y = x^4$ da $y'' = 12x^2$. $x=0$ da $y''=0$, lekin $x<0$ da ham, $x>0$ da ham $y'' > 0$ (ishora o'zgarmaydi, demak $x=0$ egilish nuqtasi emas, balki minimum nuqtasidir).

3. **Differensialda $dx$ ni yozishni unutish:**
   > $dy = f'(x)$ deb yozish xato. Differensial doimo $dy = f'(x) dx$ ko'rinishida bo'ladi.

---

## 💡 Ustozdan maslahat

Agar harakat tenglamasi berilgan bo'lsa ($s(t)$):
- "Jism qachon to'xtaydi?" degan savolga: $v(t) = s'(t) = 0$ tenglamani yechasiz.
- "Tezlanish qachon nolga teng bo'ladi?" degan savolga: $a(t) = s''(t) = 0$ tenglamani yechasiz.

---

## ✍️ Mustaqil yechish uchun mashqlar

1. $y = e^{-x^2}$ funksiyaning ikkinchi hosilasi $y''$ ni toping.
2. Moddiy nuqta $s(t) = 2t^3 - 9t^2 + 12t$ qonuniyat bilan harakatlanmoqda. Uning $t = 2$ paytdagi tezlanishi $a(2)$ ni toping.
3. $y = x^3 - 3x$ funksiyaning egilish nuqtasini aniqlang.
4. Differensial yordamida $\sqrt[3]{8.12}$ ni taqribiy hisoblang.

<details style="margin-top: 1rem; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); cursor: pointer;">
  <summary style="font-weight: 700; color: var(--primary);">To'liq yechimlar va javoblar</summary>
  <div style="margin-top: 0.75rem; padding-top: 0.75rem; border-top: 1px solid var(--border-color);">
    <p><strong>1-masala:</strong> $y' = -2x e^{-x^2}$. $y'' = (-2x)' e^{-x^2} + (-2x)(e^{-x^2})' = -2e^{-x^2} + 4x^2 e^{-x^2} = 2e^{-x^2}(2x^2 - 1)$.</p>
    <p><strong>2-masala:</strong> $v(t) = 6t^2 - 18t + 12$. $a(t) = 12t - 18$. $a(2) = 12(2) - 18 = 6$ m/s².</p>
    <p><strong>3-masala:</strong> $y' = 3x^2 - 3, y'' = 6x = 0 \implies x = 0$. $y(0) = 0$. Egilish nuqtasi: $(0; 0)$.</p>
    <p><strong>4-masala:</strong> $x_0 = 8, \Delta x = 0.12$. $f(8) = 2$. $f'(x) = \frac{1}{3\sqrt[3]{x^2}} \implies f'(8) = \frac{1}{3(4)} = \frac{1}{12}$. $2 + \frac{0.12}{12} = 2 + 0.01 = 2.01$.</p>
  </div>
</details>
