---
title: "Ketma-ketliklar limiti va Koshi ta'rifi (ε-δ tili)"
module: "limitlar"
order: 7
description: "Ketma-ketliklar limiti, qat'iy epsilon-N va epsilon-delta Koshi ta'riflari, Geyne ta'rifi, Veyershtrass teoremasi va oraliq qisilish teoremasi."
---

## Kirish: "Cheksiz intilish" nima degani?

Ko'pchilik limitni intuitiv tushunadi: "$x$ biror songa yaqinlashsa, $f(x)$ boshqa songa yaqinlashadi". Ammo XIX asrgacha bunday noaniq tushunchalar sababli matematikada jiddiy xatolar va paradokslar yuzaga kelgan.

Buyuk fransuz matematigi Ogyusten Lui Koshi (Augustin-Louis Cauchy) va nemis matematigi Karl Veyershtrass (Karl Weierstrass) limit tushunchasiga mukammal, qat'iy **$\varepsilon - \delta$ (epsilon-delta)** ta'rifini berib, butun matematik analizni pishiq poydevorga qo'ydilar.

Ushbu darsda biz sonli ketma-ketliklar limiti va qat'iy ta'riflar bilan ishlash mahoratini o'rganamiz.

---

## 1. Sonli ketma-ketlik va uning limiti ($\varepsilon - N$ tili)

> **Ketma-ketlik** — natural sonlar to'plamida $\mathbb{N} = \{1, 2, 3, \dots\}$ aniqlangan funksiyadir:
> $$x_1, x_2, x_3, \dots, x_n, \dots \quad \text{yoki} \quad \{x_n\}$$

> **Ketma-ketlik limitining qat'iy ta'rifi (Koshi):**
> Agar ixtiyoriy kichik musbat $\varepsilon > 0$ son uchun shunday bir natural $N(\varepsilon)$ nomer topilsaki, barcha $n > N$ nomerlar uchun:
>
> $$
> |x_n - a| < \varepsilon
> $$
>
> tengsizlik bajarilsa, $a$ soni $\{x_n\}$ ketma-ketlikning **limiti** deyiladi va quyidagicha yoziladi:
>
> $$
> \lim_{n \to \infty} x_n = a
> $$

### Geometrik ma'nosi:
$a$ sonining ixtiyoriy $(a - \varepsilon; a + \varepsilon)$ kichik $\varepsilon$-atrofini qanchalik tor qilib tanlamaylik, ma'lum bir $N$-nomerli haddan keyin **ketma-ketlikning barcha cheksiz ko'p hadlari shu atrof ichiga tushadi**, atrof tashqarisida esa faqat chekli dona ($N$ ta) had qoladi!

---

## 2. Funksiya limitining Koshi ($\varepsilon - \delta$) va Geyne ta'riflari

### 1. Koshi ta'rifi ($\varepsilon - \delta$ tilida):
> $\lim_{x \to x_0} f(x) = A$ deyiladi, agar har qanday $\varepsilon > 0$ uchun shunday $\delta(\varepsilon) > 0$ son mavjud bo'lsaki, $0 < |x - x_0| < \delta$ shartni qanoatlantiruvchi barcha $x$ larda:
> $$
> |f(x) - A| < \varepsilon
> $$
> tengsizlik bajarilsa.

### 2. Geyne ta'rifi (Ketma-ketliklar orqali ta'rif):
> $\lim_{x \to x_0} f(x) = A$ deyiladi, agar argumentning $x_0$ ga intiluvchi ixtiyoriy $\{x_n\}$ ketma-ketligi ($x_n \neq x_0, x_n \to x_0$) uchun funksiya qiymatlarining mos $\{f(x_n)\}$ ketma-ketligi $A$ songa intilsa ($\lim_{n \to \infty} f(x_n) = A$).

Koshi va Geyne ta'riflari **o'zaro ekvivalentdir**. Koshi ta'rifi limitni isbotlashda, Geyne ta'rifi esa limitning mavjud emasligini ko'rsatishda (masalan, $\sin(1/x)$ ning $x \to 0$ da limiti yo'qligini isbotlashda) juda qulaydir.

---

## 3. Asosiy fundamental teoremalar

1. **Yagonalik teoremasi:** Yaqinlashuvchi ketma-ketlik faqat bitta limitga ega bo'ladi.
2. **Chegaralanganlik:** Agar ketma-ketlik limitga ega bo'lsa, u albatta chegaralangandir.
3. **Veyershtrass teoremasi (Monoton ketma-ketlik):**
   Har qanday yuqoridan chegaralangan monoton o'suvchi (yoki quyidan chegaralangan monoton kamayuvchi) ketma-ketlik **chekli limitga ega** bo'ladi.
   *(Eyler soni $e = \lim_{n \to \infty} (1 + \frac{1}{n})^n$ aynan shu teorema bilan isbotlanadi).*
4. **Qisilgan ketma-ketlik (Ikki militsioner haqidagi teorema):**
   Agar barcha $n$ larda $y_n \le x_n \le z_n$ bo'lib, $\lim y_n = \lim z_n = a$ bo'lsa, u holda o'rtadagi ketma-ketlik ham shu limitga intiladi: $\lim x_n = a$.

---

## Bitta masalani 2 xil usulda yechish va solishtirish

> **Masala:** $\lim_{n \to \infty} \frac{2n + 1}{n + 3} = 2$ ekanligini:
> 1) Qat'iy $\varepsilon - N$ ta'rifi bo'yicha isbotlang (berilgan $\varepsilon = 0.01$ uchun $N$ ni toping);
> 2) Oddiy algebraik bo'lish va cheksiz kichik miqdorlar xossasi bilan yeching.

### 1-usul: Koshi $\varepsilon - N$ ta'rifi bo'yicha qat'iy isbot
Ixtiyoriy $\varepsilon > 0$ olamiz va $|x_n - a| < \varepsilon$ tengsizlikni tuzamiz:
$$
\left| \frac{2n + 1}{n + 3} - 2 \right| = \left| \frac{2n + 1 - 2(n + 3)}{n + 3} \right| = \left| \frac{2n + 1 - 2n - 6}{n + 3} \right| = \left| \frac{-5}{n + 3} \right| = \frac{5}{n + 3}
$$
Bizga $\frac{5}{n + 3} < \varepsilon$ bo'lishi kerak. Tengsizlikni $n$ ga nisbatan yechamiz:
$$
n + 3 > \frac{5}{\varepsilon} \implies n > \frac{5}{\varepsilon} - 3
$$
Demak, $N(\varepsilon) = \left[ \frac{5}{\varepsilon} - 3 \right]$ (butun qism) deb olsak, barcha $n > N$ larda $|x_n - 2| < \varepsilon$ bajariladi. Limit qat'iy isbotlandi!

Aynan $\varepsilon = 0.01$ uchun:
$$N(0.01) = \left[ \frac{5}{0.01} - 3 \right] = [500 - 3] = 497$$
Demak, 497-hadidan boshlab ketma-ketlikning barcha sonlari 2 dan $0.01$ dan ham yaqinroq masofada joylashadi!

### 2-usul: Algebraik yuqori darajaga bo'lish usuli
Surat va maxrajni $n$ ga bo'lamiz:
$$
\lim_{n \to \infty} \frac{2n + 1}{n + 3} = \lim_{n \to \infty} \frac{2 + \frac{1}{n}}{1 + \frac{3}{n}}
$$
$n \to \infty$ da $\frac{1}{n} \to 0$ va $\frac{3}{n} \to 0$ cheksiz kichik miqdorlar:
$$
= \frac{2 + 0}{1 + 0} = \mathbf{2}
$$

*Xulosa:* 2-usul limitning son qiymatini tezkor topishga xizmat qilsa, 1-usul uning matematik jihatdan mutlaq xatosiz ekanligini fundamental isbotlab beradi.

---

> [!WARNING] Imtihondagi tuzoqlar va ko'p uchraydigan xatoliklar
> 1. **Modulni ochmasdan ishlash:**
>    $|x_n - a| < \varepsilon$ formulasida modulni tashlab ketmang. Agar modul ichida manfiy son hosil bo'lsa, u musbat qilib olinadi ($|-5| = 5$).
> 2. **$N$ manfiy bo'lib qolishi:**
>    Agar $\frac{5}{\varepsilon} - 3 \le 0$ bo'lsa (masalan $\varepsilon = 2$ bo'lganda), $N = 1$ deb olinadi, chunki nomerlar natural son bo'lishi shart ($N \in \mathbb{N}$).
> 3. **Geyne ta'rifi bilan mavjud emaslikni ko'rsatish:**
>    $\lim_{x \to 0} \sin\left(\frac{1}{x}\right)$ mavjud emasligini isbotlash uchun ikkita har xil $x_n' = \frac{1}{2\pi n} \to 0$ va $x_n'' = \frac{1}{\pi/2 + 2\pi n} \to 0$ ketma-ketliklar olinadi:
>    $f(x_n') = \sin(2\pi n) = 0 \to 0$, lekin $f(x_n'') = \sin(\pi/2) = 1 \to 1$. Limitlar turlicha chiqqani uchun limit mavjud emas!

---

## Mustaqil yechish uchun amaliy mashqlar

1. $\lim_{n \to \infty} \frac{1}{n^2} = 0$ ekanligini $\varepsilon - N$ ta'rifi yordamida isbotlang va $\varepsilon = 0.04$ uchun $N$ ni toping.
2. Qisilgan ketma-ketlik teoremasi orqali $\lim_{n \to \infty} \frac{\sin(n!)}{n}$ limitni hisoblang.
3. $\lim_{x \to 3} (2x - 1) = 5$ ekanligini Koshi $\varepsilon - \delta$ ta'rifi bilan isbotlang ($\delta$ ni $\varepsilon$ orqali ifodalang).

<details style="margin-top: 1rem; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); cursor: pointer;">
  <summary style="font-weight: 700; color: var(--primary);">👉 Yechimni tekshirish</summary>
  <div style="margin-top: 0.75rem; padding-top: 0.75rem; border-top: 1px solid var(--border-color); line-height: 1.7;">
    <p><strong>1-masala:</strong></p>
    <p>$|1/n^2 - 0| = 1/n^2 < \varepsilon \implies n^2 > 1/\varepsilon \implies n > 1/\sqrt{\varepsilon}$.</p>
    <p>$\varepsilon = 0.04 \implies n > 1/\sqrt{0.04} = 1/0.2 = 5 \implies \mathbf{N = 5}$. (6-haddan boshlab bajariladi).</p>

    <hr style="margin: 0.75rem 0; border: none; border-top: 1px dashed var(--border-color);" />

    <p><strong>2-masala:</strong></p>
    <p>Barcha $n$ larda: $-1 \le \sin(n!) \le 1 \implies -\frac{1}{n} \le \frac{\sin(n!)}{n} \le \frac{1}{n}$.</p>
    <p>$\lim_{n \to \infty} (-1/n) = 0$ va $\lim_{n \to \infty} (1/n) = 0$ bo'lganligi sababli, oraliq qisilish teoremasiga ko'ra: $\mathbf{\lim_{n \to \infty} \frac{\sin(n!)}{n} = 0}$.</p>

    <hr style="margin: 0.75rem 0; border: none; border-top: 1px dashed var(--border-color);" />

    <p><strong>3-masala:</strong></p>
    <p>$|(2x - 1) - 5| = |2x - 6| = 2|x - 3| < \varepsilon \implies |x - 3| < \frac{\varepsilon}{2}$.</p>
    <p>Demak, $\mathbf{\delta = \frac{\varepsilon}{2}}$ deb tanlasak, qat'iy isbotlanadi!</p>
  </div>
</details>
