---
title: "Trigonometriya asoslari va asosiy ayniyatlar"
module: "maktab-kursi"
order: 3
description: "Birlik aylana, radian va gradus, asosiy trigonometrik ayniyatlar, universal almashtirish, yordamchi burchak va ko'p usulli tenglamalar."
---

## Kirish: Trigonometriya oliy matematikada nima uchun kerak?

Oliy matematikada burchaklar deyarli har doim **radianlarda** o'lchanadi. Trigonometrik ayniyatlar va almashtirishlar:
- **1-ajoyib limitda:** $\lim_{x \to 0} \frac{\sin x}{x} = 1$;
- **Trigonometrik integrallarda:** $\int \sin^m x \cos^n x \, dx$ va $\int \frac{dx}{a\cos x + b\sin x + c}$;
- **Kompleks sonlarda:** $z = r(\cos \varphi + i\sin \varphi) = r e^{i\varphi}$;
- **Qatorlar va maydonlar nazariyasida:** Furye qatorlari, to'lqin tenglamalari va aylanma koordinatalarda
eng asosiy poydevor hisoblanadi.

---

## 1. Radian o'lchovi va Birlik aylana

Trigonometrik funksiyalarning umumiy ta'rifi markazi koordinatalar boshida bo'lgan birlik aylana ($R = 1$) orqali beriladi:
- Gorizontal o'q ($Ox$) — **kosinuslar o'qi** ($\cos \alpha$);
- Vertikal o'q ($Oy$) — **sinuslar o'qi** ($\sin \alpha$).

### Radian va gradus bog'liqligi:
$$
\pi \text{ rad} = 180^\circ \implies 1 \text{ rad} = \frac{180^\circ}{\pi} \approx 57.3^\circ
$$

| Gradus | $0^\circ$|$30^\circ$|$45^\circ$|$60^\circ$|$90^\circ$|$180^\circ$|$270^\circ$|$360^\circ$ |
|---|---|---|---|---|---|---|---|---|
| Radian | $0$|$\frac{\pi}{6}$|$\frac{\pi}{4}$|$\frac{\pi}{3}$|$\frac{\pi}{2}$|$\pi$|$\frac{3\pi}{2}$|$2\pi$ |

---

## 2. Asosiy trigonometrik ayniyatlar

1. **Pifagor ayniyati:**
   
$$
   \sin^2 \alpha + \cos^2 \alpha = 1
   
$$
2. **Tangens va kotangens ta'rifi va ko'paytmasi:**
   
$$
   \tan \alpha = \frac{\sin \alpha}{\cos \alpha}, \qquad \cot \alpha = \frac{\cos \alpha}{\sin \alpha}, \qquad \tan \alpha \cdot \cot \alpha = 1
   
$$
3. **Kvadratlar bog'liqligi (Integrallashda juda muhim):**
   
$$
   1 + \tan^2 \alpha = \frac{1}{\cos^2 \alpha}, \qquad 1 + \cot^2 \alpha = \frac{1}{\sin^2 \alpha}
   
$$

---

## 3. Qo'shish, karrali burchak va Darajani pasaytirish

### Qo'shish formulalari:
$$
\sin(\alpha \pm \beta) = \sin \alpha \cos \beta \pm \cos \alpha \sin \beta
$$
$$
\cos(\alpha \pm \beta) = \cos \alpha \cos \beta \mp \sin \alpha \sin \beta \quad (\text{diqqat: ishora teskari!})
$$

### Ikkilangan burchak formulalari:
$$
\sin(2\alpha) = 2\sin \alpha \cos \alpha
$$
$$
\cos(2\alpha) = \cos^2 \alpha - \sin^2 \alpha = 2\cos^2 \alpha - 1 = 1 - 2\sin^2 \alpha
$$

### Darajani pasaytirish formulalari (Integrallar uchun oltin qoida):
$$
\sin^2 \alpha = \frac{1 - \cos(2\alpha)}{2}, \qquad \cos^2 \alpha = \frac{1 + \cos(2\alpha)}{2}
$$
> **Muhim:** $\int \sin^2 x \, dx$ yoki $\int \cos^2(3x) \, dx$ integrallarini hisoblashda darajani pasaytirish formulasisiz yechish imkonsizdir!

---

## 4. Ko'paytmani yig'indiga aylantirish

$$
\sin \alpha \cos \beta = \frac{1}{2}[\sin(\alpha + \beta) + \sin(\alpha - \beta)]
$$
$$
\cos \alpha \cos \beta = \frac{1}{2}[\cos(\alpha + \beta) + \cos(\alpha - \beta)]
$$
$$
\sin \alpha \sin \beta = \frac{1}{2}[\cos(\alpha - \beta) - \cos(\alpha + \beta)]
$$

---

## 5. Yordamchi burchak va Universal Veyershtrass almashtirishi

### 1. Yordamchi burchak kiritish usuli:
$a\sin x + b\cos x$ ifodani bitta sinusoidaga aylantirish uchun $\sqrt{a^2 + b^2}$ qavsdan tashqariga chiqariladi:
$$
a\sin x + b\cos x = \sqrt{a^2 + b^2} \sin(x + \varphi), \quad \text{bu yerda } \cos\varphi = \frac{a}{\sqrt{a^2+b^2}}, \; \sin\varphi = \frac{b}{\sqrt{a^2+b^2}}
$$

### 2. Universal trigonometrik almashtirish (Veyershtrass):
Har qanday trigonometrik ifodani ratsional kasrga aylantirish:
$$
t = \tan\left(\frac{x}{2}\right) \implies \sin x = \frac{2t}{1+t^2}, \quad \cos x = \frac{1-t^2}{1+t^2}, \quad dx = \frac{2\,dt}{1+t^2}
$$

---

## Bitta masalani 2 xil usulda yechish va solishtirish

> **Masala:** $\sin x + \sqrt{3}\cos x = 1$ tenglamani $[0; 2\pi]$ oraliqda yeching.

### 1-usul: Yordamchi burchak kiritish usuli
Tenglamaning har ikkala tomonini $\sqrt{a^2 + b^2} = \sqrt{1^2 + (\sqrt{3})^2} = \sqrt{4} = 2$ ga bo'lamiz:
$$
\frac{1}{2}\sin x + \frac{\sqrt{3}}{2}\cos x = \frac{1}{2}
$$
$\cos\frac{\pi}{3} = \frac{1}{2}$ va $\sin\frac{\pi}{3} = \frac{\sqrt{3}}{2}$ bo'lgani uchun:
$$
\sin x \cos\frac{\pi}{3} + \cos x \sin\frac{\pi}{3} = \frac{1}{2} \implies \sin\left(x + \frac{\pi}{3}\right) = \frac{1}{2}
$$
Sinus tenglamasi umumiy yechimi:
$$
x + \frac{\pi}{3} = (-1)^k \arcsin\left(\frac{1}{2}\right) + \pi k = (-1)^k \frac{\pi}{6} + \pi k
$$
$[0; 2\pi]$ oraliqdagi yechimlarni ajratamiz:
1. $k = 0$: $x + \frac{\pi}{3} = \frac{\pi}{6} \implies x = \frac{\pi}{6} - \frac{\pi}{3} = -\frac{\pi}{6}$ (oraliqqa kirmaydi).
2. $k = 1$: $x + \frac{\pi}{3} = \pi - \frac{\pi}{6} = \frac{5\pi}{6} \implies x = \frac{5\pi}{6} - \frac{\pi}{3} = \mathbf{\frac{\pi}{2}}$.
3. $k = 2$: $x + \frac{\pi}{3} = 2\pi + \frac{\pi}{6} = \frac{13\pi}{6} \implies x = \frac{13\pi}{6} - \frac{\pi}{3} = \mathbf{\frac{11\pi}{6}}$.
Yechimlar: $x_1 = \frac{\pi}{2}, \quad x_2 = \frac{11\pi}{6}$.

### 2-usul: Universal almashtirish usuli
$t = \tan(x/2)$ deb olamiz:
$$
\frac{2t}{1+t^2} + \sqrt{3}\frac{1-t^2}{1+t^2} = 1 \implies 2t + \sqrt{3} - \sqrt{3}t^2 = 1 + t^2
$$
$$
(1 + \sqrt{3})t^2 - 2t + (1 - \sqrt{3}) = 0
$$
Diskriminant:
$$
D = (-2)^2 - 4(1 + \sqrt{3})(1 - \sqrt{3}) = 4 - 4(1 - 3) = 4 - 4(-2) = 4 + 8 = 12 = (2\sqrt{3})^2
$$
Ildizlar:
$$
t_1 = \frac{2 + 2\sqrt{3}}{2(1 + \sqrt{3})} = 1 \implies \tan\left(\frac{x}{2}\right) = 1 \implies \frac{x}{2} = \frac{\pi}{4} \implies \mathbf{x = \frac{\pi}{2}}
$$
$$
t_2 = \frac{2 - 2\sqrt{3}}{2(1 + \sqrt{3})} = \frac{1 - \sqrt{3}}{1 + \sqrt{3}} = \frac{(1 - \sqrt{3})^2}{1 - 3} = \frac{4 - 2\sqrt{3}}{-2} = \sqrt{3} - 2
$$
$\tan\left(\frac{x}{2}\right) = \sqrt{3} - 2 = -\tan\left(\frac{\pi}{12}\right) \implies \frac{x}{2} = \pi - \frac{\pi}{12} = \frac{11\pi}{12} \implies \mathbf{x = \frac{11\pi}{6}}$.
Har ikkala usul bir xil yechim berdi! Ammo ko'rinib turibdiki, 1-usul (yordamchi burchak) hisob-kitob jihatidan ancha ixcham va qulay.

---

> [!WARNING] Imtihondagi tuzoqlar va ko'p uchraydigan xatoliklar
> 1. **$\cos x$ ga bo'lishda ildizlarni yo'qotish:**
>    $\sin x \cos x = \cos x$ tenglamani yechishda ikkala tomonni $\cos x$ ga bo'lib yuborib $\sin x = 1$ deyish xatodir!$\cos x = 0$ bo'lgan nuqtalar yo'qolib ketadi. To'g'ri yo'l: hamma hadni chapga o'tkazib qavsdan tashqariga chiqarish: $\cos x(\sin x - 1) = 0$.
> 2. **Universal almashtirishda $x = \pi + 2\pi k$ nuqtalar yo'qolishi:**
>    $t = \tan(x/2)$ almashtirishida $x = \pi$ bo'lganda tangens aniqlanmagan. Shuning uchun universal almashtirish qo'llashdan oldin $x = \pi$ boshlang'ich tenglamani qanoatlantiradimi-yo'qmi, alohida tekshirib qo'yish shart!
> 3. **Teskari trigonometrik funksiyalar qiymatlar chegarasi:**
>    $\arcsin(\sin x) = x$ ayniyati faqat $-\frac{\pi}{2} \le x \le \frac{\pi}{2}$ oraliqdagina to'g'ri. Masalan, $\arcsin\left(\sin\frac{5\pi}{6}\right) = \arcsin\left(\frac{1}{2}\right) = \frac{\pi}{6} \neq \frac{5\pi}{6}$!

---

## Mustaqil yechish uchun amaliy mashqlar

1. $\sin^4 x + \cos^4 x$ ifodani darajani pasaytirish formulalari orqali faqat $\cos(4x)$ ga bog'liq ko'rinishga keltiring.
2. $\cos(3x) + \cos x = 0$ tenglamaning $[0; \pi]$ oraliqdagi barcha yechimlarini toping.
3. $\int \sin(5x)\cos(3x)\,dx$ integralini ko'paytmani yig'indiga aylantirish formulasi yordamida hisoblang.

<details style="margin-top: 1rem; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); cursor: pointer;">
<summary style="font-weight: 700; color: var(--primary);">👉 Yechimni tekshirish</summary>

**1-masala:**

    

To'la kvadrat ajratamiz: $\sin^4 x + \cos^4 x = (\sin^2 x + \cos^2 x)^2 - 2\sin^2 x \cos^2 x$.

    

$= 1^2 - 2(\sin x \cos x)^2 = 1 - 2\left(\frac{\sin(2x)}{2}\right)^2 = 1 - \frac{1}{2}\sin^2(2x)$.

    

Darajani pasaytirish: $\sin^2(2x) = \frac{1 - \cos(4x)}{2}$.

    

Natija: $1 - \frac{1}{4}(1 - \cos(4x)) = \mathbf{\frac{3 + \cos(4x)}{4}}$.

    <hr style="margin: 0.75rem 0; border: none; border-top: 1px dashed var(--border-color);" />

    

**2-masala:**

    

Kosinuslar yig'indisi: $\cos(3x) + \cos x = 2\cos\frac{3x+x}{2}\cos\frac{3x-x}{2} = 2\cos(2x)\cos x = 0$.

    

      
- $\cos(2x) = 0 \implies 2x = \frac{\pi}{2} + \pi k \implies x = \frac{\pi}{4} + \frac{\pi k}{2}$
- $\cos x = 0 \implies x = \frac{\pi}{2} + \pi k$

$[0; \pi]$ oraliqdagi ildizlar: $\mathbf{x_1 = \frac{\pi}{4}, \quad x_2 = \frac{\pi}{2}, \quad x_3 = \frac{3\pi}{4}}$.

    <hr style="margin: 0.75rem 0; border: none; border-top: 1px dashed var(--border-color);" />

    

**3-masala:**

    

$\sin(5x)\cos(3x) = \frac{1}{2}[\sin(8x) + \sin(2x)]$.

    

$\int \sin(5x)\cos(3x)\,dx = \frac{1}{2}\int \sin(8x)\,dx + \frac{1}{2}\int \sin(2x)\,dx = \mathbf{-\frac{\cos(8x)}{16} - \frac{\cos(2x)}{4} + C}$.

</details>
