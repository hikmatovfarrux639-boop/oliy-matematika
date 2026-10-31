---
title: "Yuqori qiyinlikdagi limitlar, 5 ta ajoyib limit va Makloren qatori usuli"
module: "limitlar"
order: 11
description: "Mathprofi.ru ning barcha 5 ta ajoyib limiti, 14 ta ekvivalentlik, t = x - a siljitish usuli hamda Lopital o'rniga Makloren darajali qatoriga yoyish orqali murakkab limitlarni yechish."
duration: "30 daqiqa"
category: "Limitlar nazariyasi"
difficulty: "Qiyin"
---

## Kirish: Yuqori darajadagi limitlar siri

Talabalar ko'pincha maktab va 1-kursning dastlabki haftalarida limitlarni hisoblashning sodda usullari — ko'paytuvchilarga ajratish, qo'shmasiga ko'paytirish yoki birinchi ajoyib limit bilan cheklanadilar. Biroq oliy texnika va iqtisodiyot universitetlarining imtihon biletlarida, shuningdek, matematik olimpiadalarda shunday limitlar uchraydiki, ularda oddiy usullar umuman ish bermaydi, Lopital qoidasi esa hisob-kitobni qog'ozning bir necha sahifasiga cho'zib, botqoqlikka olib keladi.

Ushbu amaliy darsda biz **mathprofi.ru** tizimlashtirgan barcha 5 ta ajoyib limitni, 14 ta cheksiz kichik ekvivalentliklar bazasini, nolga intilmaydigan argumentlarni siljitish usulini hamda matematik analizning eng qudratli "super-quroli" bo'lgan **Makloren darajali qatoriga yoyish usulini** o'rganamiz.

---

## 1. Mathprofi.ru ning 5 ta ajoyib limiti va 14 ta ekvivalentlik jadvali

Klassik darsliklarda faqat ikkita ajoyib limit (trigonometrik va $e$ soni) o'rgatilsa-da, zamonaviy amaliyotda hisoblashlarni 5-10 barobar tezlashtiruvchi **5 ta ajoyib limit** oilasi qo'llaniladi.

### 5 ta ajoyib limit formulalari ($x \to 0$ yoki $x \to \infty$)

1. **Birinchi ajoyib limit (Trigonometrik):**
$$
\lim_{x \to 0} \frac{\sin x}{x} = 1
$$

2. **Ikkinchi ajoyib limit (Eksponentsial / $e$ soni):**
$$
\lim_{x \to \infty} \left(1 + \frac{1}{x}\right)^x = e \quad \text{yoki} \quad \lim_{x \to 0} (1 + x)^{\frac{1}{x}} = e
$$

3. **Uchinchi ajoyib limit (Ko'rsatkichli funksiya):**
$$
\lim_{x \to 0} \frac{a^x - 1}{x} = \ln a \quad (a > 0, a \neq 1); \qquad \text{xususan,} \quad \lim_{x \to 0} \frac{e^x - 1}{x} = 1
$$

4. **To'rtinchi ajoyib limit (Logarifmik funksiya):**
$$
\lim_{x \to 0} \frac{\log_a(1 + x)}{x} = \frac{1}{\ln a}; \qquad \text{xususan,} \quad \lim_{x \to 0} \frac{\ln(1 + x)}{x} = 1
$$

5. **Beshinchi ajoyib limit (Binomial / darajali funksiya):**
$$
\lim_{x \to 0} \frac{(1 + x)^\alpha - 1}{x} = \alpha \quad (\alpha \in \mathbb{R})
$$

> [!NOTE]
> 3-, 4- va 5-ajoyib limitlar aslida 2-ajoyib limit va Lopital qoidasining tabiiy natijasidir. Biroq ularni alohida tayyor shablon sifatida yodda saqlash limitlarni bir necha soniyada yechish garovidir!

---

### 14 ta cheksiz kichik ekvivalentliklar jadvali ($x \to 0$ da)

Agar $\alpha(x) \to 0$ bo'lsa, quyidagi ekvivalentliklar ($\alpha \sim \beta \iff \lim \frac{\alpha}{\beta} = 1$) o'rinlidir:

| № | Cheksiz kichik funksiya | Ekvivalent ko'rinishi ($x \to 0$) | Izoh va kelib chiqishi |
|---|---|---|---|
| **1** | $\sin x$|$\sim x$ | 1-ajoyib limitdan |
| **2** | $\tan x$|$\sim x$|$\sin x / \cos x$ |
| **3** | $\arcsin x$|$\sim x$ | Teskari trigonometrik |
| **4** | $\arctan x$|$\sim x$ | Teskari trigonometrik |
| **5** | $1 - \cos x$|$\sim \frac{x^2}{2}$|$2 \sin^2(x/2) \sim 2 \cdot (x/2)^2 = x^2/2$ |
| **6** | $e^x - 1$|$\sim x$ | 3-ajoyib limit ($a = e$) |
| **7** | $a^x - 1$|$\sim x \ln a$ | 3-ajoyib limit |
| **8** | $\ln(1 + x)$|$\sim x$ | 4-ajoyib limit |
| **9** | $\log_a(1 + x)$|$\sim \frac{x}{\ln a}$ | 4-ajoyib limit |
| **10** | $(1 + x)^\alpha - 1$|$\sim \alpha x$ | 5-ajoyib limit |
| **11** | $\sqrt{1 + x} - 1$|$\sim \frac{x}{2}$|$\alpha = 1/2$ holati |
| **12** | $\sqrt[n]{1 + x} - 1$|$\sim \frac{x}{n}$|$\alpha = 1/n$ holati |
| **13** | $\sinh x$|$\sim x$ | Giperbolik sinus |
| **14** | $\cosh x - 1$|$\sim \frac{x^2}{2}$ | Giperbolik kosinus |

> [!WARNING]
> **Ekvivalentlikning Oltin Qoidasi:** Ekvivalent cheksiz kichiklarni faqat va faqat **ko'paytuvchi** va **bo'luvchi** o'rniga qo'yish mumkin!
> Ifodalar **ayirilayotgan** yoki **qo'shilayotgan** bo'lsa (masalan, $\lim_{x \to 0} \frac{x - \sin x}{x^3}$), ularni shunchaki $\sin x \sim x$ deb almashtirib $x - x = 0$ deyish **QO'POL XATO** hisoblanadi. Bunday nozik ayirmalarni yechish uchun 4-bo'limdagi Makloren qatori talab qilinadi.

---

## 2. $x \to a$ ($a \neq 0$) da o'zgaruvchini siljitish usuli ($t = x - a$)

Barcha ajoyib limitlar va ekvivalentliklar $x \to 0$ bo'lgandagina ishlaydi. Agar limitda $x \to a$ ($a \neq 0$, masalan $x \to 1, x \to \pi, x \to \pi/2$) berilgan bo'lsa, **siljitish almashtirishi** kiritiladi:
$$
t = x - a \implies x = a + t, \quad \text{bunda agar } x \to a \text{ bo'lsa, } t \to 0
$$

### 1-Misol: Trigonometrik keltirish bilan siljitish
Hisoblang:
$$
L = \lim_{x \to \pi} \frac{\sin x}{\pi^2 - x^2}
$$

**Yechish:**
1. $x = \pi$ ni qo'yganda $\left[\frac{0}{0}\right]$ noaniqligi hosil bo'ladi.
2. Siljitish kiritamiz: $t = x - \pi \implies x = \pi + t$. $x \to \pi$ da $t \to 0$.
3. Surat va maxrajni almashtiramiz:
$$
\sin x = \sin(\pi + t) = -\sin t
$$
$$
\pi^2 - x^2 = (\pi - x)(\pi + x) = -t \cdot (2\pi + t)
$$
4. Yangi limitni hisoblaymiz:
$$
L = \lim_{t \to 0} \frac{-\sin t}{-t(2\pi + t)} = \lim_{t \to 0} \left( \frac{\sin t}{t} \cdot \frac{1}{2\pi + t} \right)
$$
$\frac{\sin t}{t} \to 1$ bo'lgani uchun:
$$
L = 1 \cdot \frac{1}{2\pi + 0} = \frac{1}{2\pi}
$$

### 2-Misol: Darajali-ko'rsatkichli siljitish
Hisoblang:
$$
L = \lim_{x \to 1} \frac{x^x - 1}{x \ln x}
$$

**Yechish:**
$x = 1 + t$ ($t \to 0$) almashtirishini bajaramiz.
1. Surat: $x^x - 1 = e^{x \ln x} - 1$.
2. $t \to 0$ da $x \to 1$, shuning uchun $x \ln x \to 1 \cdot \ln 1 = 0$.
3. 6-ekvivalentlikka ko'ra: $e^{u} - 1 \sim u$, demak $e^{x \ln x} - 1 \sim x \ln x$.
4. Shunday qilib:
$$
L = \lim_{x \to 1} \frac{x \ln x}{x \ln x} = 1
$$

---

## 3. Nega Lopital qoidasi ba'zida samarasiz?

Lopital qoidasi ($\lim \frac{f}{g} = \lim \frac{f'}{g'}$) juda mashhur bo'lsa-da, quyidagi 3 ta jiddiy kamchilikka ega:

1. **Ko'paytmali hosilalarning qor ko'chkisi kabi kengayishi:**
   Agar surat yoki maxrajda ko'paytmalar qatnashsa, har bir hosila olishda hadlar soni eksponentsial oshadi: $(uv)' = u'v + uv'$, ikkinchi hosilada 4 ta had, uchinchi hosilada 8 ta had hosil bo'ladi.
2. **Siklik aylanma hosilalar:**
   Masalan, $\sqrt{x^2+1}$ yoki $\sin(\ln x)$ kabi funksiyalarda hosila olgani sari ifoda soddalashmaydi, aksincha yanada murakkablashadi.
3. **Hisoblash xatolarining ko'pligi:**
   4-5 marta ketma-ket hosila olish talab qilinganda, hatto tajribali repetitor yoki talaba ham bitta manfiy ishora yoki koeffitsiyentda adashib, butun misolni barbod qilishi ehtimoli 80% dan yuqori.

Aynan shu sababli yetakchi matematiklar Lopital o'rniga **Makloren qatoriga yoyish usulini** afzal ko'rishadi!

---

## 4. Funksiyalarni Makloren qatoriga yoyish orqali limitlarni 1 qatorda yechish

Matematik analizning eng qudratli kashfiyotlaridan biri shuki, $x \to 0$ atrofida har qanday silliq funksiyani ko'phad shaklida tasvirlash mumkin (Peano qoldiqli Makloren formulasi):
$$
f(x) = f(0) + f'(0)x + \frac{f''(0)}{2!}x^2 + \frac{f'''(0)}{3!}x^3 + \dots + \frac{f^{(n)}(0)}{n!}x^n + o(x^n)
$$
bu yerda $o(x^n)$ — $x^n$ ga nisbatan yuqori tartibli cheksiz kichik miqdor.

### Asosiy 6 ta funksiyaning Makloren yoyilmalari jadvali ($x \to 0$ da):

$$
e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \frac{x^4}{4!} + \dots + \frac{x^n}{n!} + o(x^n)
$$

$$
\sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \dots + (-1)^n \frac{x^{2n+1}}{(2n+1)!} + o(x^{2n+2})
$$

$$
\cos x = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \dots + (-1)^n \frac{x^{2n}}{(2n)!} + o(x^{2n+1})
$$

$$
\ln(1 + x) = x - \frac{x^2}{2} + \frac{x^3}{3} - \frac{x^4}{4} + \dots + (-1)^{n-1} \frac{x^n}{n} + o(x^n)
$$

$$
(1 + x)^\alpha = 1 + \alpha x + \frac{\alpha(\alpha - 1)}{2!} x^2 + \frac{\alpha(\alpha - 1)(\alpha - 2)}{3!} x^3 + \dots + o(x^n)
$$

$$
\tan x = x + \frac{x^3}{3} + \frac{2x^5}{15} + o(x^5)
$$

$$
\arcsin x = x + \frac{x^3}{6} + \frac{3x^5}{40} + o(x^5)
$$

$$
\arctan x = x - \frac{x^3}{3} + \frac{x^5}{5} + o(x^5)
$$

> [!TIP]
> **Qaysi tartibgacha yoyish kerak? (Oltin Qoida):**
> 1. Avval **maxrajning** bosh (eng kichik) darajasini aniqlang. Masalan, maxraj $x^3$ bo'lsa, suratdagi barcha funksiyalarni aynan $x^3$ gacha yoyish kifoya!
> 2. Undan yuqori barcha darajalarni ($x^4, x^5, \dots$) umumlashtirib bitta qilib $+ o(x^3)$ deb yozish mumkin va ular hisoblashda darhol yo'qoladi.

---

## 5. To'liq yechilgan murakkab misollar

### 1-Misol: Klassik "Lopital qotili" misoli
Hisoblang:
$$
L = \lim_{x \to 0} \frac{e^x - e^{-x} - 2x}{x - \sin x}
$$

**Lopital usuli bo'yicha tahlil:**
Maxraj $x - \sin x$ bo'lib, uning hosilalari:
- 1-hosila: $1 - \cos x \to 0$
- 2-hosila: $\sin x \to 0$
- 3-hosila: $\cos x \to 1 \neq 0$
Demak, Lopital qoidasini ketma-ket **3 marta** qo'llash kerak! Suratda esa manfiy ishoralar tufayli adashish ehtimoli juda yuqori.

**Makloren usulida yechish (atigi 2 qatorda!):**
Maxrajda $x - \sin x$ borligini ko'rib, yoyilmani $x^3$ gacha olamiz:
$$
x - \sin x = x - \left(x - \frac{x^3}{6} + o(x^3)\right) = \frac{x^3}{6} + o(x^3)
$$
Maxrajning bosh hadi darajasi $x^3$ ekan. Endi suratni ham $x^3$ gacha yoyamiz:
$$
e^x = 1 + x + \frac{x^2}{2} + \frac{x^3}{6} + o(x^3)
$$
$$
e^{-x} = 1 - x + \frac{x^2}{2} - \frac{x^3}{6} + o(x^3)
$$
Surat ayirmasi:
$$
e^x - e^{-x} - 2x = \left(1 + x + \frac{x^2}{2} + \frac{x^3}{6}\right) - \left(1 - x + \frac{x^2}{2} - \frac{x^3}{6}\right) - 2x + o(x^3)
$$
$$
= \left(2x + \frac{2x^3}{6}\right) - 2x + o(x^3) = \frac{x^3}{3} + o(x^3)
$$
Endi limitni yozamiz:
$$
L = \lim_{x \to 0} \frac{\frac{x^3}{3} + o(x^3)}{\frac{x^3}{6} + o(x^3)} = \frac{1/3}{1/6} = \mathbf{2}
$$
Hisoblash bir daqiqa ham vaqt olmadi va natija $100\%$ kafolatlangan aniqlikda chiqdi!

---

### 2-Misol: 4-darajali nozik ayirma
Hisoblang:
$$
L = \lim_{x \to 0} \frac{\cos x - e^{-\frac{x^2}{2}}}{x^4}
$$

**Yechish:**
Maxraj $x^4$, demak funksiyalarni $x^4$ gacha yoyamiz:
1. Kosinus:
$$
\cos x = 1 - \frac{x^2}{2} + \frac{x^4}{24} + o(x^4)
$$
2. Ko'rsatkichli funksiya $e^u = 1 + u + \frac{u^2}{2} + o(u^2)$, bu yerda $u = -\frac{x^2}{2}$:
$$
e^{-\frac{x^2}{2}} = 1 + \left(-\frac{x^2}{2}\right) + \frac{1}{2}\left(-\frac{x^2}{2}\right)^2 + o(x^4) = 1 - \frac{x^2}{2} + \frac{x^4}{8} + o(x^4)
$$
3. Suratdagi ayirmani hisoblaymiz:
$$
\cos x - e^{-\frac{x^2}{2}} = \left(1 - \frac{x^2}{2} + \frac{x^4}{24}\right) - \left(1 - \frac{x^2}{2} + \frac{x^4}{8}\right) + o(x^4)
$$
$1$ va $-\frac{x^2}{2}$ hadlari o'zaro qisqarib ketadi:
$$
= \left(\frac{1}{24} - \frac{1}{8}\right)x^4 + o(x^4) = \left(\frac{1 - 3}{24}\right)x^4 + o(x^4) = -\frac{2}{24}x^4 + o(x^4) = -\frac{x^4}{12} + o(x^4)
$$
4. Limitga qo'yamiz:
$$
L = \lim_{x \to 0} \frac{-\frac{1}{12}x^4 + o(x^4)}{x^4} = -\frac{1}{12}
$$

---

### 3-Misol: Murakkab aralash trigonometriya
Hisoblang:
$$
L = \lim_{x \to 0} \frac{x - \arctan x}{x \cdot (1 - \cos x)}
$$

**Yechish:**
1. Maxrajda ko'paytma bor. 5-ekvivalentlikka ko'ra $1 - \cos x \sim \frac{x^2}{2}$.
Maxraj: $x \cdot \frac{x^2}{2} = \frac{x^3}{2}$.
Demak, maxrajning darajasi $x^3$ ga teng!
2. Suratdagi $\arctan x$ ni $x^3$ gacha yoyamiz:
$$
\arctan x = x - \frac{x^3}{3} + o(x^3)
$$
3. Surat:
$$
x - \arctan x = x - \left(x - \frac{x^3}{3} + o(x^3)\right) = \frac{x^3}{3} + o(x^3)
$$
4. Natija:
$$
L = \lim_{x \to 0} \frac{\frac{x^3}{3} + o(x^3)}{\frac{x^3}{2}} = \frac{1/3}{1/2} = \frac{2}{3}
$$

---

## 6. Imtihondagi asosiy tuzoqlar va mustaqil mashqlar

### Talabalar tushadigan 3 ta xavfli tuzoq:

> [!CAUTION]
> **1-Tuzoq: Ayirmada ekvivalentlikni ko'r-ko'rona qo'llash.**
> Masalan, $\lim_{x \to 0} \frac{\tan x - \sin x}{x^3}$ da $\tan x \sim x$ va $\sin x \sim x$ deb yozib, suratni $x - x = 0$ qilish mutlaqo noto'g'ri! To'g'ri yo'l:
> $\tan x - \sin x = \tan x (1 - \cos x) \sim x \cdot \frac{x^2}{2} = \frac{x^3}{2} \implies L = \frac{1}{2}$.
>
> **2-Tuzoq: Yoyilmani erta to'xtatish.**
> Agar maxraj $x^4$ bo'lsa-yu, siz suratni $x^2$ gacha yoyib to'xtatsangiz, yuqori darajadagi hal qiluvchi koeffitsiyentlarni yo'qotasiz va natija xato chiqadi.
>
> **3-Tuzoq: Siljitishda ishoralarni adashtirish.**
> Agar $x \to -2$ bo'lsa, yangi o'zgaruvchi $t = x - (-2) = x + 2$ bo'ladi, shunda $x = t - 2$. Minus ishoralarni doimo qavs ichida ehtiyotkorlik bilan oching.

---

### Mustaqil yechish uchun mashqlar

Quyidagi limitlarni hisoblang va o'z javoblaringizni tekshiring:

1. **Mashq:**
$$
\lim_{x \to 0} \frac{\ln(1 + 2x) - 2\sin x + 2x^2}{x^3}
$$
*Ko'rsatma:* $\ln(1+2x) = 2x - \frac{(2x)^2}{2} + \frac{(2x)^3}{3} + o(x^3)$ va $\sin x = x - \frac{x^3}{6} + o(x^3)$ yoyilmalaridan foydalaning.
*Javob:* $\mathbf{3}$

2. **Mashq:**
$$
\lim_{x \to 0} \frac{e^{x^2} - \cos x}{x^2}
$$
*Ko'rsatma:* $e^{x^2} = 1 + x^2 + o(x^2)$ va $\cos x = 1 - \frac{x^2}{2} + o(x^2)$.
*Javob:* $\mathbf{\frac{3}{2}}$

3. **Mashq (Siljitish usuli):**
$$
\lim_{x \to \frac{\pi}{2}} \frac{\cos x}{\pi - 2x}
$$
*Ko'rsatma:* $x = \frac{\pi}{2} + t$ almashtirishini bajaring ($t \to 0$).
*Javob:* $\mathbf{\frac{1}{2}}$

4. **Mashq:**
$$
\lim_{x \to 0} \frac{x - \sin x}{x^3}
$$
*Javob:* $\mathbf{\frac{1}{6}}$

5. **Mashq (Olimpiada darajasi):**
$$
\lim_{x \to 0} \frac{\sqrt{1 + 2x} - \sqrt[3]{1 + 3x}}{x^2}
$$
*Ko'rsatma:* $(1 + u)^\alpha = 1 + \alpha u + \frac{\alpha(\alpha-1)}{2}u^2$ formulasini $\alpha = 1/2$ va $\alpha = 1/3$ uchun $x^2$ gacha yoying.
*Javob:* $\mathbf{\frac{1}{2}}$
