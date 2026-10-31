---
title: "Bir tomonlama limitlar va uzilish nuqtalari tasnifi"
module: "limitlar"
order: 6
description: "Chap va o'ng limitlar (x0-0, x0+0), umumiy limit mavjudligi, funksiya uzluksizligi va uzilish turlari (bartaraf qilinadigan, 1-tur sakrash, 2-tur cheksiz)."
---

## Kirish: Nuqtaga qaysi tomondan yaqinlashyapmiz?

Bir o'zgaruvchili funksiya grafigini o'rganganda, argument $x$ biror $x_0$ nuqtaga ikki xil yo'l bilan intilishi mumkin:
- Chap tomondan (kichikroq sonlar tomondan: $x < x_0$);
- O'ng tomondan (kattaroq sonlar tomondan: $x > x_0$).

Ko'p funksiyalarda (masalan, bo'lakli funksiyalar, modul qatnashgan ifodalar, signum funksiyasi) chap va o'ng tomondan intilganda funksiya butunlay boshqa qiymatlarga qarab intilishi mumkin. Bunday xatti-harakatlarni tahlil qilish uchun **bir tomonlama limitlar** va **uzilish nuqtalari tasnifi** o'rganiladi.

---

## 1. Bir tomonlama limitlar ta'rifi

Faraz qilaylik, $f(x)$ funksiya $x_0$ nuqtaning atrofida aniqlangan bo'lsin.

1. **Chap limit ($x \to x_0^-$ yoki $x \to x_0 - 0$):**
   
$$
   f(x_0 - 0) = \lim_{x \to x_0 - 0} f(x) = \lim_{\varepsilon \to 0, \, \varepsilon > 0} f(x_0 - \varepsilon)
   
$$
2. **O'ng limit ($x \to x_0^+$ yoki $x \to x_0 + 0$):**
   
$$
   f(x_0 + 0) = \lim_{x \to x_0 + 0} f(x) = \lim_{\varepsilon \to 0, \, \varepsilon > 0} f(x_0 + \varepsilon)
   
$$

> **Umumiy (ikki tomonlama) limit mavjudligi teoremasi:**
> $x \to x_0$ da umumiy $\lim_{x \to x_0} f(x) = L$ limit mavjud bo'lishi uchun chap va o'ng limitlar **ikkalasi ham mavjud bo'lishi va o'zaro teng bo'lishi** zarur va yetarlidir:
>
> 
$$
> \lim_{x \to x_0} f(x) = L \iff f(x_0 - 0) = f(x_0 + 0) = L
> 
$$

Agar chap va o'ng limitlar teng bo'lmasa, $x_0$ nuqtada umumiy limit mavjud emas!

---

## 2. Funksiyaning uzluksizligi ta'rifi

> **Ta'rif:** $f(x)$ funksiya $x_0$ nuqtada **uzluksiz** deyiladi, agar quyidagi uchala shart bir vaqtda bajarilsa:
> 1. Funksiya $x_0$ nuqtada aniqlangan (ya'ni $f(x_0)$ mavjud);
> 2. Chekli chap va o'ng limitlar mavjud va teng: $f(x_0 - 0) = f(x_0 + 0) = L$;
> 3. Bu limit qiymati funksiyaning nuqtadagi qiymatiga teng:
>    
$$
>    \lim_{x \to x_0} f(x) = f(x_0)
>    
$$

---

## 3. Uzilish nuqtalari va ularning tasnifi

Agar $x_0$ nuqtada uzluksizlik shartlaridan kamida bittasi buzilsa, $x_0$ nuqta **uzilish nuqtasi** deyiladi. Ular 3 toifaga bo'linadi:

### 1. Bartaraf qilinadigan uzilish nuqtasi
Chap va o'ng limitlar mavjud, chekli va **o'zaro teng**, lekin funksiya bu nuqtada aniqlanmagan yoki qiymati limitga teng emas:
$$
f(x_0 - 0) = f(x_0 + 0) = L \neq f(x_0)
$$
*Misol:* $f(x) = \frac{\sin x}{x}$ funksiya $x = 0$ da aniqlanmagan, lekin $\lim_{x \to 0} \frac{\sin x}{x} = 1$. Agar $f(0) = 1$ deb belgilasak, uzilish yo'qoladi!

### 2. Birinchi tur uzilish nuqtasi (Sakrash)
Chap va o'ng limitlar ikkalasi ham mavjud va **chekli sonlar**, lekin ular **o'zaro teng emas**:
$$
f(x_0 - 0) \neq f(x_0 + 0)
$$
Ushbu farq **sakrash miqdori (h)** deyiladi:
$$
h = |f(x_0 + 0) - f(x_0 - 0)|
$$
*Misol:* $f(x) = \operatorname{sgn}(x)$(signum funksiyasi): $f(0 - 0) = -1, \quad f(0 + 0) = 1$. Sakrash: $h = |1 - (-1)| = 2$.

### 3. Ikkinchi tur uzilish nuqtasi (Cheksiz uzilish)
Bir tomonlama limitlardan **kamida bittasi cheksiz ($\pm\infty$)** ga teng yoki umuman mavjud emas:
$$
f(x_0 - 0) = \pm\infty \quad \text{yoki} \quad f(x_0 + 0) = \pm\infty
$$
*Misol:* $f(x) = \frac{1}{x}$ da $x \to 0^+$ bo'lsa $+\infty$, $x \to 0^-$ bo'lsa $-\infty$. Bu nuqtada vertikal asimptota mavjud.

---

## Bitta masalani 2 xil usulda yechish va solishtirish

> **Masala:** Bo'lakli funksiyaning $x = 1$ nuqtadagi uzluksizligini tekshiring va uzilish turini aniqlang:
> 
$$
> f(x) = \begin{cases} x^2 + 1, & x < 1 \\ 3, & x = 1 \\ 3 - x, & x > 1 \end{cases}
> 
$$

### 1-usul: Bir tomonlama limitlarni hisoblash usuli
1. Chap limit ($x \to 1^-$ da $x < 1$ qoida ishlaydi):
   $$f(1 - 0) = \lim_{x \to 1^-} (x^2 + 1) = 1^2 + 1 = \mathbf{2}$$
2. O'ng limit ($x \to 1^+$ da $x > 1$ qoida ishlaydi):
   $$f(1 + 0) = \lim_{x \to 1^+} (3 - x) = 3 - 1 = \mathbf{2}$$
3. Umumiy limit:
   $$f(1 - 0) = f(1 + 0) = 2 \implies \lim_{x \to 1} f(x) = 2$$
4. Funksiyaning nuqtadagi qiymati:
   $$f(1) = 3$$
5. Taqqoslash:
   $$\lim_{x \to 1} f(x) = 2 \neq 3 = f(1)$$
*Xulosa:* Chap va o'ng limitlar mavjud va teng ($L = 2$), lekin funksiya qiymatiga teng emas ($2 \neq 3$). Demak, $x = 1$ nuqta **bartaraf qilinadigan uzilish nuqtasidir**.

### 2-usul: Cheksiz kichik $\varepsilon$ orttirmalar usuli $x_1 = 1 - \varepsilon$ va $x_2 = 1 + \varepsilon$ nuqtalarni qo'yamiz ($\varepsilon \to 0^+$):
- $f(1 - \varepsilon) = (1 - \varepsilon)^2 + 1 = 1 - 2\varepsilon + \varepsilon^2 + 1 = 2 - 2\varepsilon + \varepsilon^2 \to 2$;
- $f(1 + \varepsilon) = 3 - (1 + \varepsilon) = 2 - \varepsilon \to 2$.
Ikkala tomondan ham grafik $(1; 2)$ nuqtaga qarab intiladi. Biroq $x = 1$ nuqtadagi haqiqiy nuqta $(1; 3)$ da joylashgan ("teshik" nuqta $(1; 2)$ da, "nuqta" esa yuqorida).
Agar funksiyani $f(1) = 2$ deb qayta aniqlasak, uzilish bartaraf bo'lib, butun funksiya uzluksiz bo'lib qoladi.

---

> [!WARNING] Imtihondagi tuzoqlar va ko'p uchraydigan xatoliklar
> 1. **Modul qatnashgan limitlarda bir tomonlama tekshirish majburiy:**
>    $\lim_{x \to 0} \frac{|x|}{x}$ limitini bir urinishda ochib bo'lmaydi!
>    - $x \to 0^+ \implies |x| = x \implies \lim \frac{x}{x} = +1$;
>    - $x \to 0^- \implies |x| = -x \implies \lim \frac{-x}{x} = -1$.
>    Bir tomonlama limitlar har xil (+1 va -1), shuning uchun umumiy limit mavjud emas (1-tur sakrash)!
> 2. **Ko'rsatkichli funksiyada $x \to 0$ darajasi:**
>    $f(x) = e^{1/x}$:
>    - $x \to 0^+ \implies \frac{1}{x} \to +\infty \implies e^{+\infty} = +\infty$ (2-tur uzilish!);
>    - $x \to 0^- \implies \frac{1}{x} \to -\infty \implies e^{-\infty} = 0$.
>    Bunday ifodalarda chap va o'ng limit tubdan farq qiladi.
> 3. **Vertikal asimptota va 2-tur uzilish bog'liqligi:**
>    Har qanday 2-tur uzilish nuqtasida $x = x_0$ to'g'ri chizig'i vertikal asimptota bo'ladi.

---

## Mustaqil yechish uchun amaliy mashqlar

1. $f(x) = \frac{x - 2}{|x - 2|}$ funksiyaning $x = 2$ nuqtadagi chap va o'ng limitlarini toping hamda sakrash miqdorini aniqlang.
2. $f(x) = \frac{x^2 - 4}{x - 2}$ funksiyaning $x = 2$ nuqtadagi uzilish turini aniqlang.
3. Parametr $a$ ning qanday qiymatida quyidagi funksiya butun sonlar o'qida uzluksiz bo'ladi?
   $$f(x) = \begin{cases} ax + 1, & x \le 2 \\ x^2 - 1, & x > 2 \end{cases}$$

<details style="margin-top: 1rem; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); cursor: pointer;">
<summary style="font-weight: 700; color: var(--primary);">👉 Yechimni tekshirish</summary>

**1-masala:**

    

      
- $x \to 2^- \implies x - 2 < 0 \implies |x - 2| = -(x - 2) \implies f(2 - 0) = -1$;

      
- $x \to 2^+ \implies x - 2 > 0 \implies |x - 2| = x - 2 \implies f(2 + 0) = +1$.

    

    

1-tur uzilish. Sakrash: $h = |1 - (-1)| = \mathbf{2}$.

    <hr style="margin: 0.75rem 0; border: none; border-top: 1px dashed var(--border-color);" />

    

**2-masala:**

    

$x = 2$ da maxraj nol (aniqlanmagan). Lekin $x \neq 2$ da $f(x) = \frac{(x-2)(x+2)}{x-2} = x + 2$.

    

$\lim_{x \to 2} f(x) = 2 + 2 = 4$.

    

Limit mavjud va chekli, lekin $f(2)$ mavjud emas. Demak: **Bartaraf qilinadigan uzilish**.

    <hr style="margin: 0.75rem 0; border: none; border-top: 1px dashed var(--border-color);" />

    

**3-masala:**

    

Uzluksizlik uchun $f(2 - 0) = f(2 + 0)$ bo'lishi kerak: $f(2 - 0) = a(2) + 1 = 2a + 1$.

    

$f(2 + 0) = 2^2 - 1 = 3$.

    

$2a + 1 = 3 \implies 2a = 2 \implies \mathbf{a = 1}$.

</details>
