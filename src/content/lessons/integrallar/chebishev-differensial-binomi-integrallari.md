---
title: "Chebishev differensial binomi integrallari va ularning yechish shartlari"
description: "x^m (a + b x^n)^p dx shaklidagi integrallar, Chebishevning 3 ta integrallanuvchanlik teoremasi va ratsionallashtiruvchi almashtirishlar."
module: "integrallar"
order: 13
---

## 📌 Kirish va Tarixiy-Muhandislik Ma'nosi

Matematik analizda eng ko'p uchraydigan va amaliy hisoblashlarda qiyinchilik tug'diradigan integrallardan biri bu **differensial binom** integrallaridir. Ular umumiy holda quyidagi ko'rinishga ega:

$$
I = \int x^m \left(a + b x^n\right)^p \, dx
$$

Bu yerda $a, b$ — haqiqiy sonlar ($b \neq 0$), $m, n, p$ esa rasional sonlardir ($m, n, p \in \mathbb{Q}$).

Bunday integrallar osmon mexanikasida (sayyoralar orbitasini hisoblashda), elastiklik nazariyasida egilish chiziqlarini aniqlashda va gidrodinamikada oqim tezliklarini modellashtirishda tabiiy ravishda yuzaga keladi. Isaak Nyuton davridan boshlab matematiklar ixtiyoriy $m, n, p$ ko'rsatkichlar uchun ushbu integralni elementar funksiyalarda (darajali, logarifmik, trigonometrik va ko'rsatkichli funksiyalar) ifodalashga uringanlar.

Biroq, 1853-yilda buyuk rus matematigi **Pafnutiy Lvovich Chebishev** o'zining mashhur teoremasi orqali differensial binom ixtiyoriy darajalarda elementar funksiyalar orqali integrallanavermasligini qat'iy isbotladi. U integral qachon elementar funksiyalarda ifodalanishining **zaruriy va yetarli 3 ta shartini** aniqlab berdi. Agar bu uch shartdan hech biri bajarilmasa, integral "olinmas" (aniqrog'i, elementar funksiyalarda ifodalanmaydigan elliptik yoki giperelliptik integral) hisoblanadi.

---

## 📐 Asosiy Nazariya: Chebishev Teoremasi va Ratsionallashtirish

Chebishev teoremasiga ko'ra, $\int x^m (a + b x^n)^p \, dx$ differensial binomi elementar funksiyalarda ifodalanadi **faqat va faqat quyidagi 3 holdan biri** bajarilganda:

### 1-hol: $p$ — butun son ($p \in \mathbb{Z}$)
Bu holda qavs ichidagi ifoda butun darajaga ega. Agar $p \ge 0$ bo'lsa, Nyuton binomi bo'yicha qavsni ochib yuborish kifoya. Agar $p < 0$ bo'lsa, $x = t^N$ almashtirishi kiritiladi, bu yerda $N$ soni $m$ va $n$ kasr darajalar maxrajlarining eng kichik umumiy karralisidir:
$$
N = \text{EKUK}(\text{den}(m), \text{den}(n))
$$
Bu almashtirish integral ostidagi barcha irratsionalliklarni yo'qotib, uni ratsional kasrga aylantiradi.

### 2-hol: $\frac{m+1}{n}$ — butun son ($\frac{m+1}{n} \in \mathbb{Z}$)
Bu holda $p = \frac{r}{s}$ kasr son ($s > 1$). Ratsionallashtiruvchi almashtirish:
$$
a + b x^n = t^s \quad \implies \quad x = \left(\frac{t^s - a}{b}\right)^{1/n}
$$
Bunda differensial $dx$ va barcha darajalar ratsional bo'lib, integral ratsional funksiyaning integraliga keltiriladi.

### 3-hol: $\frac{m+1}{n} + p$ — butun son ($\frac{m+1}{n} + p \in \mathbb{Z}$)
Ushbu nozik holatda qavs ichidan $x^n$ hadini tashqariga chiqarish orqali integral quyidagi shaklga keltiriladi:
$$
x^m (a + b x^n)^p = x^{m + n p} \left(a x^{-n} + b\right)^p
$$
Ko'rinib turibdiki, yangi hosil bo'lgan differensial binomda $p$ maxraji $s$ bo'lsa, almashtirish quyidagicha tanlanadi:
$$
a x^{-n} + b = t^s \quad \text{yoki} \quad \frac{a + b x^n}{x^n} = t^s
$$
Ushbu almashtirish integral ostidagi ifodani to'liq ratsionallashtiradi.

---

## 📝 Qadamma-qadam Yechilgan Amaliy Misollar

### 1-misol (1-holga doir):
Ushbu integralni hisoblang:
$$
I_1 = \int \frac{\sqrt{x}}{(1 + \sqrt[3]{x})^2} \, dx
$$

**Yechilishi:**
1. Integralni differensial binom shaklida yozamiz:
   $$
   I_1 = \int x^{1/2} \left(1 + x^{1/3}\right)^{-2} \, dx
   $$
   Parametrlarni aniqlaymiz: $a = 1, b = 1, m = \frac{1}{2}, n = \frac{1}{3}, p = -2$.
2. Shartni tekshiramiz: $p = -2 \in \mathbb{Z}$ (1-hol!).
3. Maxrajlar EKUKi: $m = 1/2$ maxraji $2$, $n = 1/3$ maxraji $3$. Demak, $N = \text{EKUK}(2, 3) = 6$.
4. Almashtirish bajaramiz: $x = t^6 \implies dx = 6t^5 \, dt$.
5. Integralga qo'yamiz:
   $$
   I_1 = \int (t^6)^{1/2} \left(1 + (t^6)^{1/3}\right)^{-2} \cdot 6t^5 \, dt = \int t^3 \cdot (1 + t^2)^{-2} \cdot 6t^5 \, dt = 6 \int \frac{t^8}{(1 + t^2)^2} \, dt
   $$
6. Kasrning butun qismini ajratamiz: $t^8 = (t^2+1-1)^4$ yoki ko'phadni ko'phadga bo'lamiz:
   $$
   \frac{t^8}{(t^2+1)^2} = t^4 - 2t^2 + 3 - \frac{4t^2 + 3}{(t^2+1)^2} = t^4 - 2t^2 + 3 - \frac{4}{t^2+1} + \frac{1}{(t^2+1)^2}
   $$
7. Hadma-had integrallab va $t = \sqrt[6]{x}$ o'zgaruvchisiga qaytamiz:
   $$
   I_1 = 6 \left[ \frac{t^5}{5} - \frac{2t^3}{3} + 3t - 4 \operatorname{arctg} t + \frac{1}{2}\left(\operatorname{arctg} t + \frac{t}{t^2+1}\right) \right] + C
   $$

---

### 2-misol (2-holga doir):
Ushbu integralni hisoblang:
$$
I_2 = \int \frac{dx}{x^3 \sqrt{1 + x^2}}
$$

**Yechilishi:**
1. Binom ko'rinishiga keltiramiz:
   $$
   I_2 = \int x^{-3} (1 + x^2)^{-1/2} \, dx
   $$
   Bu yerda $m = -3, n = 2, p = -1/2$.
2. Shartlarni tekshiramiz:
   - $p = -1/2 \notin \mathbb{Z}$;
   - $\frac{m+1}{n} = \frac{-3+1}{2} = \frac{-2}{2} = -1 \in \mathbb{Z}$ (2-hol bajarildi!).
3. Almashtirish: $p = -1/2$ bo'lgani uchun $s = 2$.
   $$
   1 + x^2 = t^2 \implies x^2 = t^2 - 1 \implies 2x \, dx = 2t \, dt \implies x \, dx = t \, dt
   $$
4. Integral ostidagi $x^{-3} dx$ ni qulay shaklga keltiramiz:
   $$
   \frac{dx}{x^3 \sqrt{1+x^2}} = \frac{x \, dx}{x^4 \sqrt{1+x^2}} = \frac{t \, dt}{(t^2 - 1)^2 \cdot t} = \frac{dt}{(t^2 - 1)^2}
   $$
5. Ratsional kasrni sodda kasrlarga ajratamiz:
   $$
   \frac{1}{(t^2-1)^2} = \frac{1}{4}\left[ \frac{1}{t-1} - \frac{1}{t+1} \right]^2 = \frac{1}{4}\left[ \frac{1}{(t-1)^2} - \frac{2}{t^2-1} + \frac{1}{(t+1)^2} \right]
   $$
6. Integrallaymiz:
   $$
   \int \frac{dt}{(t^2-1)^2} = -\frac{1}{4}\frac{1}{t-1} - \frac{1}{4}\frac{1}{t+1} - \frac{1}{4}\ln\left|\frac{t-1}{t+1}\right| = -\frac{t}{2(t^2-1)} - \frac{1}{4}\ln\left|\frac{t-1}{t+1}\right|
   $$
7. Eski $x$ o'zgaruvchiga qaytamiz ($t = \sqrt{1+x^2}$):
   $$
   I_2 = -\frac{\sqrt{1+x^2}}{2x^2} - \frac{1}{4} \ln\left| \frac{\sqrt{1+x^2} - 1}{\sqrt{1+x^2} + 1} \right| + C
   $$

---

### 3-misol (3-holga doir):
Ushbu integralni hisoblang:
$$
I_3 = \int \frac{dx}{\sqrt[4]{1 + x^4}}
$$

**Yechilishi:**
1. Binom ko'rinishida yozamiz:
   $$
   I_3 = \int x^0 (1 + x^4)^{-1/4} \, dx \implies m = 0, \quad n = 4, \quad p = -\frac{1}{4}
   $$
2. Shartlarni tekshiramiz:
   - $p = -1/4 \notin \mathbb{Z}$;
   - $\frac{m+1}{n} = \frac{0+1}{4} = \frac{1}{4} \notin \mathbb{Z}$;
   - $\frac{m+1}{n} + p = \frac{1}{4} + \left(-\frac{1}{4}\right) = 0 \in \mathbb{Z}$ (3-hol bajarildi!).
3. Qavsdan $x^4$ ni chiqaramiz va almashtirish kiritamiz:
   $$
   1 + x^4 = x^4 (x^{-4} + 1) \implies (1 + x^4)^{-1/4} = x^{-1} (x^{-4} + 1)^{-1/4}
   $$
   Almashtirish: $x^{-4} + 1 = t^4 \implies -4x^{-5} \, dx = 4t^3 \, dt \implies x^{-5} \, dx = -t^3 \, dt$.
4. Integralni qayta guruhlaymiz:
   $$
   I_3 = \int x^{-1} (x^{-4} + 1)^{-1/4} \, dx = \int x^{-5} (x^{-4} + 1)^{-1/4} \cdot x^4 \, dx
   $$
   Chunki $x^{-4} = t^4 - 1 \implies x^4 = \frac{1}{t^4 - 1}$. U holda:
   $$
   I_3 = \int \frac{1}{t^4 - 1} \cdot \frac{1}{t} \cdot (-t^3 \, dt) = -\int \frac{t^2}{t^4 - 1} \, dt = \int \frac{t^2}{1 - t^4} \, dt
   $$
5. Sodda kasrlarga ajratamiz:
   $$
   \frac{t^2}{1 - t^4} = \frac{1}{2}\left( \frac{1}{1 - t^2} - \frac{1}{1 + t^2} \right)
   $$
6. Integrallaymiz:
   $$
   I_3 = \frac{1}{4} \ln\left| \frac{1+t}{1-t} \right| - \frac{1}{2} \operatorname{arctg} t + C, \quad \text{bu yerda } t = \frac{\sqrt[4]{1+x^4}}{x}
   $$

---

## ⚠️ Talabalar Ko'p Yo'l Qo'yadigan Xatolar

1. **Chebishev shartlarini tekshirmasdan boshlash:**
   Talabalar ko'pincha $\int \frac{dx}{\sqrt{1+x^3}}$ integralini ko'rib, uni almashtirish bilan yechishga urinadilar. Bu yerda $m=0, n=3, p=-1/2$. $\frac{m+1}{n} = 1/3 \notin \mathbb{Z}$ va $\frac{1}{3} - \frac{1}{2} = -\frac{1}{6} \notin \mathbb{Z}$. Bu integral elementar funksiyalarda olinmaydi! Vaqtni behuda sarflamaslik uchun har doim dastlab shartlarni tekshirish zarur.
2. **3-holda $x^n$ ni ildizdan chiqarishda darajani adashtirish:**
   $(a + bx^n)^p = (x^n(ax^{-n}+b))^p = x^{np}(ax^{-n}+b)^p$. Ko'pchilik $x^n$ ning o'zini chiqarib, darajadagi $p$ ni unutadi.
3. **Differensial $dx$ hisobidagi xatolar:**
   $x^{-n} + \dots = t^s$ almashtirishda hosila manfiy ishora beradi: $-n x^{-n-1} dx = s t^{s-1} dt$. Manfiy ishorani yo'qotish natijani butunlay o'zgartiradi.

---

## 🎯 Mustaqil Yechish Uchun Masalalar

1. Ushbu integralni hisoblang: $\int \frac{x^3}{\sqrt{1 - x^2}} \, dx$.
2. Differensial binom turini aniqlang va integrallang: $\int \frac{\sqrt[3]{1 + \sqrt[4]{x}}}{\sqrt{x}} \, dx$.
3. 3-hol bo'yicha integrallang: $\int \frac{dx}{x^4 \sqrt{1 + x^2}}$.
4. Isbotlang: $\int \sqrt{1 + x^3} \, dx$ integrali elementar funksiyalarda ifodalanmaydi.

<details style="margin-top: 1rem; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); cursor: pointer;">
<summary style="font-weight: 700; color: var(--primary);">Javoblar va Ko'rsatmalar</summary>

**1-masala:** $m=3, n=2, p=-1/2 \implies \frac{m+1}{n} = 2 \in \mathbb{Z}$ (2-hol). $1-x^2 = t^2 \implies x^2 = 1-t^2$.
Javob: $-\frac{1}{3}(x^2 + 2)\sqrt{1-x^2} + C$.

**2-masala:** $m=-1/2, n=1/4, p=1/3$. $\frac{m+1}{n} = \frac{1/2}{1/4} = 2 \in \mathbb{Z}$ (2-hol). $1 + x^{1/4} = t^3 \implies x = (t^3 - 1)^4 \implies dx = 12t^2(t^3 - 1)^3 dt$.
Javob: $\frac{12}{7}(1+\sqrt[4]{x})^{7/3} - 3(1+\sqrt[4]{x})^{4/3} + C$.

**3-masala:** $m=-4, n=2, p=-1/2$. $\frac{m+1}{n} + p = -\frac{3}{2} - \frac{1}{2} = -2 \in \mathbb{Z}$ (3-hol). $x^{-2}+1 = t^2$.
Javob: $\frac{(2x^2-1)\sqrt{1+x^2}}{3x^3} + C$.

**4-masala:** $m=0, n=3, p=1/2$. $p \notin \mathbb{Z}$; $\frac{m+1}{n} = \frac{1}{3} \notin \mathbb{Z}$; $\frac{m+1}{n} + p = \frac{1}{3} + \frac{1}{2} = \frac{5}{6} \notin \mathbb{Z}$. Chebishev teoremasiga asosan integral elementar funksiyalarda olinmaydi.

</details>

---

## 💡 Xulosa va Imtihon Maslahatlari

- Differensial binom berilganda eng birinchi qadam — uni har doim $x^m (a + b x^n)^p \, dx$ shakliga keltirib, $m, n, p$ sonlarini aniqlashdir.
- Ketma-ketlik: 1) $p \in \mathbb{Z}$ ? $\implies$ 2) $\frac{m+1}{n} \in \mathbb{Z}$ ? $\implies$ 3) $\frac{m+1}{n} + p \in \mathbb{Z}$ ?
- Agar uchala shart ham bajarilmasa, hisoblashni to'xtating va Chebishev teoremasiga ko'ra integral elementar funksiyalarda olinmasligini asoslab yozing.
