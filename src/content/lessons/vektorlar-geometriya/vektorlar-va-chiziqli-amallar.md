---
title: "Vektorlar va ular ustida chiziqli amallar"
module: "vektorlar-geometriya"
order: 1
description: "Vektor tushunchasi, yo'naltirilgan kesma, vektor koordinatalari, ortlar bo'yicha yoyish, yo'naltiruvchi kosinuslar, kesmani bo'lish va chiziqli amallar."
---

## Kirish: Fizika va geometriya tutashgan joy

Kundalik hayotda biz duch keladigan ko'plab miqdorlar (massa, harorat, vaqt, hajm, narx) faqat bitta son — kattalik (skalyar) bilan to'liq ifodalanadi. Ammo tezlik, tezlanish, og'irlik kuchi, shamol harakati yoki elektr maydon kuchlanganligi kabi fizik kattaliklarni faqat bitta son bilan ifodalab bo'lmaydi: ularning **qayerga qarab yo'nalganini** ham bilish shart.

Yo'nalishga va sonli qiymatga (uzunlikka) ega bo'lgan miqdorlar **vektorlar** deb ataladi. Ular kompyuter grafikasi, 3D o'yin dvigatellari (Unity/Unreal), aerodinamika, robototexnika va sun'iy intellekt (vektorli embeddinglar) sohalarining poydevori hisoblanadi.

---

## 1. Vektor ta'rifi va belgilanishi

> [!NOTE] Yo'naltirilgan kesma ta'rifi
> Boshlang'ich va oxirgi nuqtalari tartiblangan to'g'ri chiziq kesmasi **yo'naltirilgan kesma** yoki **vektor** deyiladi.

- Agar boshlang'ich nuqtasi $A$, oxirgi nuqtasi $B$ bo'lsa, vektor $\vec{AB}$ yoki kichik lotin harfi bilan $\vec{a}$ deb belgilanadi.
- Vektorning uzunligi (moduli) uning **absolyut qiymati** deyiladi va $|\vec{a}|$ yoki $|\vec{AB}|$ kabi yoziladi.
- Boshlang'ich va oxirgi nuqtasi ustma-ust tushgan vektor **nol vektor** ($\vec{0}$) deyiladi. Uning uzunligi nolga teng ($|\vec{0}| = 0$), yo'nalishi esa aniqlanmagan.
- Uzunligi $1$ ga teng bo'lgan vektor **birlik vektor** (ort) deyiladi: $|\vec{e}| = 1$.
- Bir to'g'ri chiziqda yoki o'zaro parallel to'g'ri chiziqlarda yotuvchi vektorlar **kollinear vektorlar** deyiladi ($\vec{a} \parallel \vec{b}$).

---

## 2. Koordinatalar sistemasida vektorlar va ortlar bo'yicha yoyish

### Nuqtalar bo'yicha vektor koordinatalari:
Tekislikda $A(x_1, y_1)$ va $B(x_2, y_2)$ nuqtalar berilgan bo'lsa, $\vec{AB}$ vektorining koordinatalari oxirgi nuqta koordinatalaridan boshlang'ich nuqta koordinatalarini ayirish orqali topiladi:
$$
\vec{AB} = (x_2 - x_1, \; y_2 - y_1)
$$

Fazoda esa $A(x_1, y_1, z_1)$ va $B(x_2, y_2, z_2)$ uchun:
$$
\vec{AB} = (x_2 - x_1, \; y_2 - y_1, \; z_2 - z_1)
$$

### Ortlar ($\vec{i}, \vec{j}, \vec{k}$) bo'yicha yoyish:
Koordinata o'qlari bo'ylab yo'nalgan birlik vektorlar **ortlar** deyiladi:
$$
\vec{i} = (1, 0, 0), \quad \vec{j} = (0, 1, 0), \quad \vec{k} = (0, 0, 1)
$$
Har qanday $\vec{a} = (a_x, a_y, a_z)$ vektor ushbu ortlar bo'yicha yagona chiziqli kombinatsiya shaklida ifodalanadi:
$$
\vec{a} = a_x \vec{i} + a_y \vec{j} + a_z \vec{k}
$$

### Vektor uzunligi (Moduli):
Fazoviy Pifagor teoremasiga ko'ra:
$$
|\vec{a}| = \sqrt{a_x^2 + a_y^2 + a_z^2}
$$

### Birlik vektor (Normalizatsiya):
Ixtiyoriy noldan farqli $\vec{a}$ vektor yo'nalishidagi birlik vektor $\vec{e}_a$ quyidagicha topiladi:
$$
\vec{e}_a = \frac{\vec{a}}{|\vec{a}|} = \left(\frac{a_x}{|\vec{a}|}, \; \frac{a_y}{|\vec{a}|}, \; \frac{a_z}{|\vec{a}|}\right)
$$

---

## 3. Yo'naltiruvchi kosinuslar

Vektorning koordinata o'qlari bilan hosil qilgan burchaklari $\alpha$ ($Ox$ bilan), $\beta$ ($Oy$ bilan) va $\gamma$ ($Oz$ bilan) burchaklarning kosinuslari **yo'naltiruvchi kosinuslar** deyiladi:

$$
\cos \alpha = \frac{a_x}{|\vec{a}|}, \quad \cos \beta = \frac{a_y}{|\vec{a}|}, \quad \cos \gamma = \frac{a_z}{|\vec{a}|}
$$

> [!NOTE] Fundamental ayniyat
> Har qanday vektorning yo'naltiruvchi kosinuslari kvadratlari yig'indisi **har doim 1 ga tengdir**:
> $$
> \cos^2 \alpha + \cos^2 \beta + \cos^2 \gamma = 1
> $$
> Bu degani, yo'naltiruvchi kosinuslar aynan **birlik vektor $\vec{e}_a$ ning koordinatalaridir**: $\vec{e}_a = (\cos \alpha, \cos \beta, \cos \gamma)$!

---

## 4. Kesmani berilgan nisbatda bo'lish formulalari

Agar $A(x_1, y_1, z_1)$ va $B(x_2, y_2, z_2)$ nuqtalarni tutashtiruvchi kesmada $M(x, y, z)$ nuqta yotsa va kesmani $\lambda = \frac{AM}{MB}$ nisbatda bo'lsa:

$$
x_M = \frac{x_1 + \lambda x_2}{1 + \lambda}, \quad y_M = \frac{y_1 + \lambda y_2}{1 + \lambda}, \quad z_M = \frac{z_1 + \lambda z_2}{1 + \lambda}
$$

### Xususiy holat: Kesma o'rtasining koordinatalari ($\lambda = 1$):
$$
x_M = \frac{x_1 + x_2}{2}, \quad y_M = \frac{y_1 + y_2}{2}, \quad z_M = \frac{z_1 + z_2}{2}
$$

---

## 5. Vektorlar ustida chiziqli amallar

### 1. Vektorlarni qo'shish
- **Geometrik:** Uchburchak qoidasi (ketma-ket ulash) yoki Parallelogramm qoidasi (umumiy nuqtadan chiquvchi diagonal).
- **Koordinatalarda:**
  $$
  \vec{a} + \vec{b} = (a_x + b_x, \; a_y + b_y, \; a_z + b_z)
  $$

### 2. Vektorlarni ayirish
$$
\vec{a} - \vec{b} = (a_x - b_x, \; a_y - b_y, \; a_z - b_z)
$$
*Geometrik ma'nosi:* $\vec{b}$ vektorning uchidan $\vec{a}$ vektorning uchiga qarab yo'nalgan vektor $\vec{a} - \vec{b}$ dir.

### 3. Vektorni songa (skalyarga) ko'paytirish
$$
\lambda \cdot \vec{a} = (\lambda a_x, \; \lambda a_y, \; \lambda a_z)
$$
- Agar $\lambda > 0$ bo'lsa, yo'nalish o'zgarmaydi, uzunlik $\lambda$ marta o'zgaradi.
- Agar $\lambda < 0$ bo'lsa, yo'nalish qarama-qarshisiga o'zgaradi.

### 4. Kollinearlik sharti:
Ikki vektor parallel bo'lishi uchun ularning mos koordinatalari proporsional bo'lishi shart:
$$
\frac{a_x}{b_x} = \frac{a_y}{b_y} = \frac{a_z}{b_z} = \lambda \iff \vec{a} = \lambda \vec{b}
$$

---

## 6. Qadamma-qadam to'liq yechilgan amaliy misollar

### 1-misol: Vektor koordinatalari, uzunligi va yo'naltiruvchi kosinuslari

**Masala:** $A(2, -3, 1)$ va $B(5, 1, -11)$ nuqtalar berilgan. $\vec{AB}$ vektorning koordinatalari, uzunligi va koordinata o'qlari bilan hosil qilgan burchaklari kosinuslarini toping.

#### Yechish:
1. Koordinatalar:
   $$
   \vec{AB} = (5 - 2, \; 1 - (-3), \; -11 - 1) = (3, \; 4, \; -12)
   $$
2. Uzunligi:
   $$
   |\vec{AB}| = \sqrt{3^2 + 4^2 + (-12)^2} = \sqrt{9 + 16 + 144} = \sqrt{169} = 13
   $$
3. Yo'naltiruvchi kosinuslar:
   $$
   \cos \alpha = \frac{3}{13}, \quad \cos \beta = \frac{4}{13}, \quad \cos \gamma = -\frac{12}{13}
   $$
4. Tekshiramiz:
   $$
   \cos^2 \alpha + \cos^2 \beta + \cos^2 \gamma = \frac{9}{169} + \frac{16}{169} + \frac{144}{169} = \frac{169}{169} = 1
   $$

**Javob:** $\vec{AB} = (3, 4, -12)$, $|\vec{AB}| = 13$, $\cos \alpha = \frac{3}{13}, \cos \beta = \frac{4}{13}, \cos \gamma = -\frac{12}{13}$.

---

### 2-misol: Kesmani berilgan nisbatda bo'lish

**Masala:** $A(1, -2, 4)$ va $B(7, 10, -8)$ nuqtalar berilgan. $AB$ kesmani $AM : MB = 1 : 2$ nisbatda bo'luvchi $M$ nuqtaning koordinatalarini toping.

#### Yechish:
Bu yerda $\lambda = \frac{1}{2} = 0.5$.
1. $x_M = \frac{1 + 0.5 \cdot 7}{1 + 0.5} = \frac{1 + 3.5}{1.5} = \frac{4.5}{1.5} = 3$
2. $y_M = \frac{-2 + 0.5 \cdot 10}{1 + 0.5} = \frac{-2 + 5}{1.5} = \frac{3}{1.5} = 2$
3. $z_M = \frac{4 + 0.5 \cdot (-8)}{1 + 0.5} = \frac{4 - 4}{1.5} = 0$

**Javob:** $M(3, 2, 0)$.

---

## 7. Talabalar yo'l qo'yadigan tuzoqlar

> [!WARNING] Imtihonda ehtiyot bo'ling!
> 1. **Boshlang'ich va oxirgi nuqtani adashtirish:** $\vec{AB}$ da oxirgi nuqta $B$ dan boshlang'ich nuqta $A$ ayiriladi ($B - A$). Agar $A - B$ qilsangiz, qarama-qarshi yo'nalgan vektor $\vec{BA}$ hosil bo'ladi.
> 2. **Yo'naltiruvchi kosinuslar ishorasi:** $\cos \gamma$ manfiy bo'lsa, uni yo'qotib yubormang. Manfiy kosinus vektorning $Oz$ o'qiga nisbatan o'tmas burchak ($> 90^\circ$) hosil qilganini bildiradi.
> 3. **Vektor uzunligida manfiy son kvadrati:** $(-12)^2 = +144$, hech qachon minus bo'lmaydi!

---

## 8. Mustaqil yechish uchun amaliy mashqlar

1. $\vec{a} = (4, -2, 4)$ vektorining uzunligini va unga mos birlik vektorni ($\vec{e}_a$) toping.
   - *Javob:* $|\vec{a}| = 6$, $\vec{e}_a = (\frac{2}{3}, -\frac{1}{3}, \frac{2}{3})$.

2. $\vec{u} = (1, 3, -2)$ va $\vec{v} = (3, 0, 4)$ bo'lsa, $\vec{w} = 2\vec{u} - \vec{v}$ vektor koordinatalarini va uzunligini toping.
   - *Javob:* $\vec{w} = (-1, 6, -8)$, $|\vec{w}| = \sqrt{1 + 36 + 64} = \sqrt{101}$.

3. Uchlari $A(2, 4)$ va $B(8, 12)$ bo'lgan kesma o'rtasining koordinatalarini toping.
   - *Javob:* $M(5, 8)$.
