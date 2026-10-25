---
title: "Kompleks tekislikda chiziqlar, sohalar, konform akslantirishlar va to'liq Laplas jadvali"
description: "Kompleks tekislikda geometrik sohalar va chiziqlar, konform akslantirishlar (cho'zilish k = |f'|, burilish alpha = arg f'), obraz yuzi hamda originallar va tasvirlarning 18 qatorli to'liq Laplas jadvali."
module: "kompleks-sonlar"
order: 10
duration: "30 daqiqa"
category: "Kompleks analiz (TFKP)"
difficulty: "Qiyin"
---

## Kirish: Kompleks sonlarning geometriyasi va konform akslantirishlar

Kompleks sonlar algebraik vosita bo'lish bilan birga, tekislikdagi ajoyib geometrik obyektlarni o'rganish uchun ham kuchli asbobdir. Kompleks o'zgaruvchili funksiyalar nazariyasining (TFKP) markaziy tushunchalaridan biri bu — **konform akslantirishlar**dir. Ular burchaklarni saqlash xossasiga ega bo'lib, gidrodinamika, aerodinamika (samolyot qanotlarini modellashtirish), elektrostatika va kartografiyada hal qiluvchi rol o'ynaydi.

Ushbu darsda biz kompleks tekislikdagi geometrik shakllar va sohalarni tenglamalar yordamida ifodalashni, analitik funksiyalar yordamida akslantirish mexanizmini, cho'zilish va burilish parametrlarini hisoblashni hamda operatsion hisobning eng qimmatli xazinasi — **18 qatorli to'liq Laplas jadvalini** chuqur o'rganamiz.

---

## 1. Kompleks tekislikda asosiy chiziqlar va sohalar

Kompleks tekislikda har bir $z = x + iy$nuqta koordinata tekisligidagi$(x, y)$nuqtaga mos keladi. Ikki nuqta$z_1 = x_1 + iy_1$va$z_2 = x_2 + iy_2$ orasidagi masofa ularning ayirmasining moduli orqali ifodalanadi:

$$
|z_1 - z_2| = \sqrt{(x_1 - x_2)^2 + (y_1 - y_2)^2}
$$

Aynan mana shu modul tushunchasi barcha asosiy geometrik chiziqlar va sohalarning poydevori hisoblanadi.

### Asosiy geometrik tenglamalar va tengsizliklar:

1. **Aylana va doira:**
   * Markazi $z_0 = x_0 + iy_0$nuqtada, radiusi$R > 0$ bo'lgan **aylana**:
   
$$
|z - z_0| = R
$$

   * **Ochiq doira** (aylananing ichki qismi):
   
$$
|z - z_0| < R
$$

   * **Yopiq doira** (chegara aylanasi bilan birga):
   
$$
|z - z_0| \le R
$$

   * **Tashqi soha** (aylanadan tashqaridagi barcha nuqtalar):
   
$$
|z - z_0| > R
$$

2. **Konsentrik halqa (halqasimon soha):**
   Markazi $z_0$nuqtada, ichki radiusi$r$va tashqi radiusi$R$ bo'lgan halqa:
   
$$
r < |z - z_0| < R \quad (0 \le r < R)
$$

   Agar $r = 0$bo'lsa,$0 < |z - z_0| < R$— bu markazi$z_0$ nuqtasi o'yib olingan (teshikli) doirani bildiradi.

3. **O'rta perpendikulyar va yarim tekisliklar:**
   * Ikki qo'zg'almas $z_1$va$z_2$nuqtalardan teng uzoqlikda joylashgan nuqtalar to'plami — bu$z_1 z_2$ kesmaning o'rtasidan o'tuvchi **o'rta perpendikulyar to'g'ri chiziq**:
   
$$
|z - z_1| = |z - z_2|
$$

   * Ushbu to'g'ri chiziq tekislikni ikkita ochiq yarim tekislikka ajratadi:
   
$$
|z - z_1| < |z - z_2| \quad \text{($z_1$ nuqtaga yaqinroq yarim tekislik)}
$$

$$
|z - z_1| > |z - z_2| \quad \text{($z_2$ nuqtaga yaqinroq yarim tekislik)}
$$

4. **Ellips va uning ichki sohasi:**
   Fokuslari $z_1$va$z_2$nuqtalarda, katta yarim o'qi$a$ bo'lgan ellips ($2a > |z_1 - z_2|$):
   
$$
|z - z_1| + |z - z_2| = 2a
$$

   Ellips bilan chegaralangan ichki soha:
   
$$
|z - z_1| + |z - z_2| < 2a
$$

5. **Giperbola shoxlari:**
   Fokuslari $z_1$va$z_2$ nuqtalarda bo'lgan giperbola ($2a < |z_1 - z_2|$):
   
$$
\big| |z - z_1| - |z - z_2| \big| = 2a
$$

6. **Burchak sohasi (Sektor):**
   Uchi $z_0$ nuqtada bo'lgan burchak sohasi argument orqali beriladi:
   
$$
\alpha < \arg(z - z_0) < \beta \quad (0 \le \beta - \alpha \le 2\pi)
$$

7. **To'g'ri chiziqlar va polosalar (tasmalar):**
   * Vertikal to'g'ri chiziq: $\operatorname{Re}(z) = C \iff x = C$.
   * Vertikal tasma: $a < \operatorname{Re}(z) < b$.
   * Gorizontal to'g'ri chiziq: $\operatorname{Im}(z) = C \iff y = C$.
   * Gorizontal tasma: $c < \operatorname{Im}(z) < d$.

---

## 2. Bir bog'lamli va ko'p bog'lamli sohalar

Kompleks analizda teoremalarning o'rinli bo'lishi (masalan, Koshi integral teoremasi) sohaning topologik tuzilishiga bevosita bog'liq.

### Soha tushunchasi:
* **Ochiq to'plam:** To'plamning har bir nuqtasi o'zining biror $\varepsilon$-atrofi bilan birga to'liq shu to'plamga tegishli bo'lsa.
* **Bog'lamli to'plam:** To'plamning ixtiyoriy ikki nuqtasini to'liq shu to'plam ichida yotuvchi uzluksiz chiziq bilan tutashtirish mumkin bo'lsa.
* Ochiq va bog'lamli to'plam **soha** (yoki ochiq soha) deyiladi. Sohaning unga tegishli bo'lmagan, lekin unga cheksiz yaqin nuqtalari to'plami uning **chegarasi** deyiladi.

### Bog'lamlilik turlari:

> [!NOTE]
> **Bir bog'lamli soha (Oddiy bog'lamli):**
> Agar $D$ sohadagi har qanday yopiq konturni soha chegarasidan chiqmagan holda uzluksiz ravishda bitta nuqtaga tortish (deformatsiyalash) mumkin bo'lsa, bunday soha **bir bog'lamli soha** deyiladi.
> *Soddaroq aytganda:* Ichida hech qanday "teshik" yoki "orolcha" bo'lmagan yaxlit sohadir.
> **Misollar:** Doira $|z - z_0| < R$, yarim tekislik $\operatorname{Im}(z) > 0$, butun kompleks tekislik $\mathbb{C}$, burchak sohasi.

> [!IMPORTANT]
> **Ko'p bog'lamli soha:**
> Agar sohaning ichida bitta yoki bir nechta "teshiklar" mavjud bo'lsa, ya'ni chegarasi bir nechta uzilgan yopiq chiziqlardan tashkil topsa, bunday soha **ko'p bog'lamli soha** deyiladi.
> Chegarasi $n$ ta mustaqil konturdan iborat bo'lsa, u **$n$-bog'lamli soha** deyiladi.
> **Misollar:**
> * Halqa $r < |z - z_0| < R$— **ikki bog'lamli sohadir** (chegarasi tashqi$|z - z_0| = R$va ichki$|z - z_0| = r$ aylanalaridan iborat).
> * $m$ ta teshikka ega bo'lgan soha — **$(m+1)$-bog'lamli sohadir**.

### Chegaraning musbat yo'nalishi:
Ko'p bog'lamli soha chegarasi bo'ylab harakatlanganda sohaning o'zi doimo **chap tomonda** qolishi kerak. Demak, tashqi chegara soat miliga teskari (musbat) yo'nalishda, ichki "teshik" chegaralari esa soat mili yo'nalishida aylanib chiqiladi.

---

## 3. $w = f(z)$ akslantirish geometriyasi va Konform akslantirishlar

Kompleks o'zgaruvchili funksiya $w = f(z) = u(x, y) + i v(x, y)$berilgan bo'lsin. Bu funksiya$z$-tekisligidagi biror $D$sohaning har bir nuqtasiga$w$-tekisligidagi aniq bir nuqtani mos qo'yadi. Natijada $D$soha$w$-tekisligidagi $D^*$ sohaga akslanadi.

```
       z-tekisligi (x, y)                        w-tekisligi (u, v)
        y ^                                      v ^
          |      ***                               |        *****
          |    *  D  *     ------ w = f(z) ----->  |      *   D*  *
          |      ***                               |        *****
          +----------> x                           +----------> u
```

### Konform akslantirish ta'rifi:

$w = f(z)$akslantirish$z_0$nuqtaning atrofida aniqlangan bo'lsin. Aytaylik,$z_0$nuqtadan ikki silliq egri chiziq$\gamma_1$va$\gamma_2$o'tsin va ularning urinmalari orasidagi burchak$\theta$ga teng bo'lsin. Akslantirish natijasida ular$w$-tekisligida $\Gamma_1$va$\Gamma_2$ egri chiziqlarga o'tadi.

> [!NOTE]
> **Konform akslantirish ta'rifi:**
> Agar $w = f(z)$akslantirish$z_0$ nuqtada:
> 1. **Burchaklarni saqlasa:** Har qanday ikki chiziq orasidagi burchak kattaligi va uning yo'nalishi (soat mili yoki unga qarshi) o'zgarmasdan saqlansa;
> 2. **Cho'zilishning doimiyligi (izotropiya):** $z_0$ nuqtadan chiquvchi barcha yo'nalishdagi cheksiz kichik kesmalar bir xil masshtabda cho'zilsa (yoki siqilsa),
> u holda bunday akslantirish $z_0$ nuqtada **1-turdagi konform akslantirish** deyiladi.

### Konformlikning asosiy mezoni (Riman teoremasi):

Agar $f(z)$funksiya$z_0$ nuqtada differensiallanuvchi (analitik) bo'lib, uning hosilasi nolga teng bo'lmasa:

$$
f'(z_0) \neq 0
$$

u holda $w = f(z)$akslantirish$z_0$ nuqtada **konformdir**.

Agar sohaning barcha nuqtalarida $f(z)$analitik va$f'(z) \neq 0$bo'lsa, u holda$w = f(z)$ akslantirish butun sohada konform bo'ladi.

---

## 4. Cho'zilish koeffitsiyenti $k$va burilish burchagi$\alpha$Analitik funksiyaning hosilasi$f'(z_0)$ kompleks son bo'lgani sababli, uni trigonometrik yoki ko'rsatkichli shaklda yozish mumkin:

$$
f'(z_0) = k \cdot e^{i\alpha} = |f'(z_0)| \cdot e^{i \arg f'(z_0)}
$$

Differensialning ta'rifiga ko'ra:

$$
dw = f'(z_0) \, dz
$$

Ikkala tomonning moduli va argumentini olamiz:

$$
|dw| = |f'(z_0)| \cdot |dz|
$$

$$
\operatorname{Arg}(dw) = \operatorname{Arg}(dz) + \arg f'(z_0)
$$

Bundan hosilaning chuqur geometrik ma'nosi kelib chiqadi:

### 1. Cho'zilish (masshtab) koeffitsiyenti $k$:

$$
k = |f'(z_0)| = \lim_{|\Delta z| \to 0} \frac{|\Delta w|}{|\Delta z|}
$$

* Agar $k > 1$bo'lsa —$z_0$ nuqta atrofida **cho'zilish (kengayish)** yuz beradi;
* Agar $k < 1$bo'lsa —$z_0$ nuqta atrofida **siqilish** yuz beradi;
* Agar $k = 1$ bo'lsa — masshtab saqlanadi (izometriya).

### 2. Burilish burchagi $\alpha$:

$$
\alpha = \arg f'(z_0)
$$

$z_0$nuqtadan o'tuvchi ixtiyoriy silliq egri chiziqning urinmasi$w$-tekisligiga o'tganda aynan $\alpha = \arg f'(z_0)$burchakka buriladi! Burilish burchagi chiziqning yo'nalishiga mutlaqo bog'liq emas, u faqat$z_0$nuqtaning o'zi va$f(z)$ funksiya orqali aniqlanadi.

---

## 5. Chiziq obrazi uzunligi va soha obrazi yuzi formulalari

Konform akslantirish yordamida nafaqat nuqtalar, balki chiziqlar va murakkab yuzalarning yangi o'lchamlari hisoblanadi.

### 1. Chiziq obrazining uzunligi:

$z$-tekisligida berilgan silliq $\gamma$egri chizig'i$w = f(z)$akslantirish ostida$\Gamma = f(\gamma)$chizig'iga o'tsin. U holda hosil bo'lgan$\Gamma$obraz chiziqning uzunligi$L_\Gamma$ quyidagi integral bilan hisoblanadi:

$$
L_\Gamma = \int_\gamma |f'(z)| \, |dz|
$$

Agar $\gamma$chiziq parametrik ko'rinishda$z(t) = x(t) + i y(t)$ ($t \in [a, b]$) berilgan bo'lsa:

$$
L_\Gamma = \int_a^b |f'(z(t))| \cdot |z'(t)| \, dt = \int_a^b |f'(z(t))| \sqrt{(x'(t))^2 + (y'(t))^2} \, dt
$$

### 2. Soha obrazining yuzi (Koshi-Riman bog'liqligi):

$z$-tekisligidagi $D$soha$w = f(z) = u(x, y) + i v(x, y)$akslantirish orqali$w$-tekisligida $D^*$ sohaga o'tsin.
Koxmatematik analizdan ma'lumki, ikki o'lchovli integralda o'zgaruvchilarni almashtirishda Yakobian hisoblanadi:

$$
S_{D^*} = \iint_{D^*} du \, dv = \iint_D |J| \, dx \, dy
$$

bu yerda Yakobian determinant shaklida bo'ladi:

$$
J = \frac{\partial(u, v)}{\partial(x, y)} = \begin{vmatrix} \frac{\partial u}{\partial x} & \frac{\partial u}{\partial y} \\ \frac{\partial v}{\partial x} & \frac{\partial v}{\partial y} \end{vmatrix} = \frac{\partial u}{\partial x} \frac{\partial v}{\partial y} - \frac{\partial u}{\partial y} \frac{\partial v}{\partial x}
$$

Endi Koshi-Riman shartlarini eslaymiz: $\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$va$\frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$.
Ularni Yakobianga qo'ysak:

$$
J = \left(\frac{\partial u}{\partial x}\right)^2 + \left(\frac{\partial v}{\partial x}\right)^2 = |f'(z)|^2
$$

> [!TIP]
> **Soha obrazi yuzi formulasi:**
> Akslantirish ostidagi soha obrazining yuzi kompleks hosila modulining kvadrati ustidagi ikki karrali integralga teng:
> 
$$
> S_{D^*} = \iint_D |f'(z)|^2 \, dx \, dy
> 
$$

Bu formula juda murakkab egri chiziqli sohalarning yuzini odatiy Dekart koordinatalarida oson hisoblash imkonini beradi.

---

## 6. Laplas almashtirishi: Originallar va Tasvirlarning 18 qatorli to'liq ma'lumotnoma jadvali

Laplas almashtirishi:

$$
F(p) = \mathcal{L}\{f(t)\} = \int_0^{\infty} f(t) e^{-pt} \, dt \quad (p = s + i\sigma)
$$

Quyidagi jadval barcha asosiy differensial tenglamalar, tebranishlar nazariyasi, zanjirlar va boshqaruv tizimlarini yechishda zarur bo'ladigan 18 ta eng muhim original va tasvirlar juftligini o'z ichiga oladi:

| № | Original $f(t)$ ($t \ge 0$) | Laplas tasviri $F(p)$ | Parametrlar va mavjudlik sohasi |
|:---|:---|:---|:---|
| **1** | $1$(Birlik bosqich funksiya) |$\frac{1}{p}$|$\operatorname{Re}(p) > 0$ |
| **2** | $t$(Chiziqli funksiya) |$\frac{1}{p^2}$|$\operatorname{Re}(p) > 0$ |
| **3** | $t^n$ ($n \in \mathbb{N}$) | $\frac{n!}{p^{n+1}}$|$\operatorname{Re}(p) > 0$ |
| **4** | $t^\alpha$ ($\alpha > -1$) | $\frac{\Gamma(\alpha + 1)}{p^{\alpha + 1}}$|$\Gamma$— Eyler gamma-funksiyasi,$\operatorname{Re}(p) > 0$ |
| **5** | $e^{at}$(Eksponensial funksiya) |$\frac{1}{p - a}$|$\operatorname{Re}(p) > a$ |
| **6** | $t^n e^{at}$ ($n \in \mathbb{N}$) | $\frac{n!}{(p - a)^{n+1}}$|$\operatorname{Re}(p) > a$ |
| **7** | $\sin(\omega t)$|$\frac{\omega}{p^2 + \omega^2}$|$\omega \in \mathbb{R}, \, \operatorname{Re}(p) > 0$ |
| **8** | $\cos(\omega t)$|$\frac{p}{p^2 + \omega^2}$|$\omega \in \mathbb{R}, \, \operatorname{Re}(p) > 0$ |
| **9** | $\operatorname{sh}(\omega t) = \frac{e^{\omega t} - e^{-\omega t}}{2}$|$\frac{\omega}{p^2 - \omega^2}$|$\operatorname{Re}(p) > |\omega|$ |
| **10** | $\operatorname{ch}(\omega t) = \frac{e^{\omega t} + e^{-\omega t}}{2}$|$\frac{p}{p^2 - \omega^2}$|$\operatorname{Re}(p) > |\omega|$ |
| **11** | $e^{at} \sin(\omega t)$|$\frac{\omega}{(p - a)^2 + \omega^2}$|$\operatorname{Re}(p) > a$ (Siljish teoremasi) |
| **12** | $e^{at} \cos(\omega t)$|$\frac{p - a}{(p - a)^2 + \omega^2}$|$\operatorname{Re}(p) > a$ |
| **13** | $e^{at} \operatorname{sh}(\omega t)$|$\frac{\omega}{(p - a)^2 - \omega^2}$|$\operatorname{Re}(p) > a + |\omega|$ |
| **14** | $e^{at} \operatorname{ch}(\omega t)$|$\frac{p - a}{(p - a)^2 - \omega^2}$|$\operatorname{Re}(p) > a + |\omega|$ |
| **15** | $t \sin(\omega t)$|$\frac{2\omega p}{(p^2 + \omega^2)^2}$| Tasvirni differensiallash:$-F'(p)$ |
| **16** | $t \cos(\omega t)$|$\frac{p^2 - \omega^2}{(p^2 + \omega^2)^2}$| Tasvirni differensiallash:$-F'(p)$ |
| **17** | $\delta(t)$(Dirak delta-funksiyasi) |$1$| Birlik impuls, barcha$p \in \mathbb{C}$ |
| **18** | $\eta(t - \tau)$(Xevisayd sakrashi,$\tau > 0$) | $\frac{e^{-p\tau}}{p}$ | Kechikish teoremasi |

---

## 7. Namunaviy misollar va mustaqil mashqlar

### 1-misol: Kompleks tekislikda sohani aniqlash va chizish
**Shart:** Kompleks tekislikda quyidagi tengsizliklar sistemasi bilan berilgan sohani aniqlang:

$$
1 \le |z - 2 + i| < 3 \quad \text{va} \quad 0 \le \arg(z - 2 + i) \le \frac{3\pi}{4}
$$

**Yechish:**
1. $z_0 = 2 - i$ markaziy nuqtani aniqlaymiz ($x_0 = 2, y_0 = -1$).
2. Birinchi qo'shaloq tengsizlik $1 \le |z - (2 - i)| < 3$markazi$z_0 = 2 - i$ nuqtada bo'lgan konsentrik halqadir:
   * Ichki radius: $r = 1$ (tengsizlik noqat'iy bo'lgani uchun chegara aylanasi sohaga kiradi, tutash chiziq bilan chiziladi).
   * Tashqi radius: $R = 3$ (tengsizlik qat'iy bo'lgani uchun chegara sohaga kirmaydi, uzuq-uzuq chiziq bilan chiziladi).
3. Ikkinchi shart $0 \le \arg(z - z_0) \le \frac{3\pi}{4}$ markazdan chiquvchi burchak sektorini bildiradi:
   * Boshlang'ich nur: $\arg = 0$—$z_0$ nuqtadan gorizontal o'ng tomonga yo'nalgan nur.
   * Yakuniy nur: $\arg = \frac{3\pi}{4}$ ($135^\circ$) — markazdan $135^\circ$ burchak ostida yo'nalgan nur.
4. **Xulosa:** Berilgan soha — markazi $(2, -1)$nuqtada, radiuslari$1$va$3$bo'lgan halqaning$0^\circ$dan$135^\circ$ gacha bo'lgan qismidir.

---

### 2-misol: Cho'zilish koeffitsiyenti va burilish burchagini topish
**Shart:** $w = f(z) = z^3 - 3z$akslantirish berilgan.$z_0 = 1 + i$nuqtadagi cho'zilish koeffitsiyenti$k$va burilish burchagi$\alpha$ ni hisoblang.

**Yechish:**
1. Funksiyaning hosilasini topamiz:

$$
f'(z) = 3z^2 - 3 = 3(z^2 - 1)
$$

2. Hosilaning $z_0 = 1 + i$ nuqtadagi qiymatini hisoblaymiz:

$$
z_0^2 = (1 + i)^2 = 1 + 2i + i^2 = 1 + 2i - 1 = 2i
$$

$$
f'(1 + i) = 3(2i - 1) = -3 + 6i
$$

3. Cho'zilish koeffitsiyenti $k = |f'(z_0)|$:

$$
k = |-3 + 6i| = \sqrt{(-3)^2 + 6^2} = \sqrt{9 + 36} = \sqrt{45} = 3\sqrt{5} \approx 6.708
$$

Demak, ushbu nuqtada cheksiz kichik kesmalar $3\sqrt{5}$ marta cho'ziladi ($k > 1$).

4. Burilish burchagi $\alpha = \arg f'(z_0)$:
   $f'(z_0) = -3 + 6i$ soni II chorakda yotadi ($\operatorname{Re} < 0, \operatorname{Im} > 0$):

$$
\alpha = \pi - \operatorname{arctg}\left(\frac{6}{3}\right) = \pi - \operatorname{arctg}(2) \approx 3.1416 - 1.1071 \approx 2.0345 \text{ rad} \approx 116.57^\circ
$$

**Javob:** Cho'zilish koeffitsiyenti $k = 3\sqrt{5}$, burilish burchagi $\alpha = \pi - \operatorname{arctg}(2) \approx 116.57^\circ$.

---

### 3-misol: Soha obrazining yuzini hisoblash
**Shart:** $w = z^2$akslantirish yordamida$D = \{z \in \mathbb{C} : 0 \le x \le 1, \, 0 \le y \le 1\}$kvadrat sohasining$w$-tekisligidagi $D^*$ obrazining yuzini hisoblang.

**Yechish:**
1. Hosilani topamiz: $f'(z) = 2z$.
2. Hosila modulining kvadrati:

$$
|f'(z)|^2 = |2z|^2 = 4|z|^2 = 4(x^2 + y^2)
$$

3. Yuz formulasidan foydalanamiz:

$$
S_{D^*} = \iint_D |f'(z)|^2 \, dx \, dy = \int_0^1 dx \int_0^1 4(x^2 + y^2) \, dy
$$

4. Ichki integralni hisoblaymiz:

$$
\int_0^1 4(x^2 + y^2) \, dy = \left[ 4x^2 y + \frac{4y^3}{3} \right]_{y=0}^{y=1} = 4x^2 + \frac{4}{3}
$$

5. Tashqi integralni hisoblaymiz:

$$
S_{D^*} = \int_0^1 \left(4x^2 + \frac{4}{3}\right) dx = \left[ \frac{4x^3}{3} + \frac{4x}{3} \right]_0^1 = \frac{4}{3} + \frac{4}{3} = \frac{8}{3}
$$

**Javob:** Obrazning yuzi $S_{D^*} = \frac{8}{3}$ kvadrat birlikka teng.

---

### 4-misol: Laplas jadvali bo'yicha tasvirni topish
**Shart:** $f(t) = 3t^3 - 5e^{-2t} + 4\sin(3t) \cos(3t) + 2 t \cos(4t)$ funksiyaning Laplas tasvirini toping.

**Yechish:**
1. Dastlab $4\sin(3t)\cos(3t)$ hadni ikkilangan burchak formulasi bilan soddalashtiramiz:

$$
4\sin(3t)\cos(3t) = 2 \cdot (2\sin(3t)\cos(3t)) = 2\sin(6t)
$$

2. Endi Laplas jadvalidagi mos formulalarni qo'llaymiz:
   * $3t^3 \risingdotseq 3 \cdot \frac{3!}{p^4} = \frac{18}{p^4}$ (3-formula bo'yicha);
   * $-5e^{-2t} \risingdotseq -5 \cdot \frac{1}{p - (-2)} = -\frac{5}{p + 2}$ (5-formula bo'yicha);
   * $2\sin(6t) \risingdotseq 2 \cdot \frac{6}{p^2 + 6^2} = \frac{12}{p^2 + 36}$ (7-formula bo'yicha);
   * $2 t \cos(4t) \risingdotseq 2 \cdot \frac{p^2 - 4^2}{(p^2 + 4^2)^2} = \frac{2(p^2 - 16)}{(p^2 + 16)^2}$ (16-formula bo'yicha).
3. Chiziqlilik xossasiga ko'ra yig'indini yozamiz:

$$
F(p) = \frac{18}{p^4} - \frac{5}{p + 2} + \frac{12}{p^2 + 36} + \frac{2(p^2 - 16)}{(p^2 + 16)^2}
$$

---

## Mustaqil yechish uchun mashqlar

1. **Mashq 1:** Kompleks tekislikda $|z - 3| < |z + 1|$ tengsizlik qanday sohani ifodalashini tushuntiring va uning chegarasi bo'lgan to'g'ri chiziq tenglamasini toping.
2. **Mashq 2:** $w = \frac{1}{z}$akslantirish ostida$z_0 = 1 - i$nuqtadagi cho'zilish koeffitsiyenti$k$va burilish burchagi$\alpha$ ni hisoblang.
3. **Mashq 3:** $f(t) = e^{3t} \sin(2t) - t^2 e^{-t}$ funksiyaning Laplas tasvirini 18 qatorli jadvaldan foydalanib toping.
4. **Mashq 4:** $w = e^z$akslantirish$D = \{z \in \mathbb{C} : 0 < x < 1, \, 0 < y < \pi\}$to'g'ri to'rtburchakni$w$-tekisligida qanday sohaga akslantiradi? Uning yuzini integral orqali hisoblang.

---

### Mashqlarning javoblari:

* **1-mashq:** $z_1 = 3$va$z_2 = -1$nuqtalardan o'tuvchi kesmaning o'rtasi$x = 1$nuqtadir. Chegara$x = 1$vertikal to'g'ri chizig'idir. Soha —$z_1 = 3$ga yaqinroq bo'lgan o'ng yarim tekislik:$\operatorname{Re}(z) > 1$.
* **2-mashq:** $f'(z) = -\frac{1}{z^2}$. $z_0 = 1 - i \implies z_0^2 = -2i$. Demak, $f'(z_0) = -\frac{1}{-2i} = \frac{1}{2i} = -\frac{1}{2}i$.
  * Cho'zilish: $k = \left|-\frac{1}{2}i\right| = \frac{1}{2}$ (2 marta siqilish).
  * Burilish: $\alpha = \arg\left(-\frac{1}{2}i\right) = -\frac{\pi}{2}$(soat mili bo'yicha$90^\circ$ burilish).
* **3-mashq:** $F(p) = \frac{2}{(p - 3)^2 + 4} - \frac{2}{(p + 1)^3}$.
* **4-mashq:** $w = e^x e^{iy}$. Bunda $u + iv = \rho e^{i\varphi} \implies \rho = e^x \in (1, e)$va$\varphi = y \in (0, \pi)$. Bu yuqori yarim tekislikdagi konsentrik yarim halqadir ($1 < |w| < e, \, 0 < \arg w < \pi$).
  * Yuzi: $S = \iint_D |e^z|^2 \, dx \, dy = \int_0^1 e^{2x} \, dx \int_0^\pi dy = \pi \left[ \frac{e^{2x}}{2} \right]_0^1 = \frac{\pi (e^2 - 1)}{2}$. Geometrik yarim halqa yuzi formulasi bilan aynan bir xil ($\frac{1}{2} \pi (e^2 - 1^2)$).
