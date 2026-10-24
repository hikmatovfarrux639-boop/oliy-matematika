---
title: "Ko'p qavatli kasrlar, 22 ta daraja-logarifm xossasi va 0°-360° to'liq trigonometrik jadvallar"
description: "Oliy matematikadagi hisob-kitob poydevori: Ko'p qavatli kasrlarni soddalashtirishning 4 qoidasi, daraja va logarifmning 22 xossasi, 0° dan 360° gacha to'liq trigonometrik qiymatlar, keltirish formulalari va arkfunksiyalar."
module: "maktab-kursi"
order: 11
duration: "25 daqiqa"
category: "Matematik poydevor"
difficulty: "Oson"
---

## Kirish: Oliy matematikadagi hisob-kitob poydevori

Oliy matematikada — limitlarni hisoblashda, murakkab hosilalarni olishda, integrallashda va differensial tenglamalarni yechishda talabalar ko'pincha oliy matematika tushunchalarida emas, balki maktab kursining oddiy algebraik hisob-kitoblarida xatolikka yo'l qo'yadilar:
* Ko'p qavatli kasrlarni noto'g'ri qisqartirish;
* Juft darajali ildiz ostidan manfiy ifodani modul belgisiz chiqarib yuborish;
* Logarifm va daraja xossalarini adashtirish;
* $90^\circ$ dan katta burchaklarning trigonometrik qiymatlarini topishda adashish.

Ushbu dars — barcha keyingi oliy matematika mavzularida xatosiz, tezkor va ishonchli hisoblash uchun mo'ljallangan mustahkam poydevor va doimiy ma'lumotnomadir.

---

## 1. Ko'p qavatli kasrlar bilan ishlashning 4 ta oltin qoidasi

Ko'p qavatli kasrlar ustida amallar bajarishda eng muhim qoida — **asosiy kasr chizig'ini** aniq ajratib olishdir. Asosiy kasr chizig'i doimo tenglik belgisi ($=$) yoki amallar ($+, -, \cdot$) ro'parasida turadi va boshqa chiziqlarga qaraganda uzunroq chiziladi.

```
       Suratdagi kasr                    Maxrajdagi kasr
           a                                   a
          ---                                 ---
           b     <-- Asosiy kasr chizig'i      b
         =====   (Tenglik ro'parasida)       =====
           c                                   c
          ---                                 ---
           d                                   d
```

### 1-qoida: To'rt qavatli kasr
Kasrni kasrga bo'lishda birinchi kasr o'zgarishsiz qoladi, ikkinchi (maxrajdagi) kasr esa to'ntarilib ko'paytiriladi ("ichkilar ichkariga, tashqilar tashqariga"):

$$
\frac{\;\dfrac{a}{b}\;}{\dfrac{c}{d}} = \frac{a}{b} : \frac{c}{d} = \frac{a \cdot d}{b \cdot c}
$$

> [!TIP]
> **Mnemonika:** Eng chetdagi $a$ va $d$ sonlar ko'paytirilib **suratga**, ichkaridagi $b$ va $c$ sonlar ko'paytirilib **maxrajga** yoziladi.

### 2-qoida: Uch qavatli kasr — suratda kasr bo'lsa
Agar kasrning surati kasrdan, maxraji esa bitta sondan iborat bo'lsa, maxrajdagi $c$ sonini $\frac{c}{1}$ deb tasavvur qilamiz:

$$
\frac{\;\dfrac{a}{b}\;}{c} = \frac{\;\dfrac{a}{b}\;}{\dfrac{c}{1}} = \frac{a \cdot 1}{b \cdot c} = \frac{a}{b \cdot c}
$$

*Soddaroq:* Suratdagi kasrning maxraji pastga — umumiy maxrajga tushadi.

### 3-qoida: Uch qavatli kasr — maxrajda kasr bo'lsa
Agar kasrning surati bitta sondan, maxraji esa kasrdan iborat bo'lsa, suratdagi $a$ sonini $\frac{a}{1}$ deb qaraymiz:

$$
\frac{a}{\;\dfrac{b}{c}\;} = \frac{\;\dfrac{a}{1}\;}{\dfrac{b}{c}} = \frac{a \cdot c}{1 \cdot b} = \frac{a \cdot c}{b}
$$

*Soddaroq:* Eng quyidagi $c$ soni sakrab eng yuqoriga — suratga chiqadi.

> [!CAUTION]
> **Eng ko'p qilinadigan qo'pol xato:**
> Hech qachon $\frac{\frac{a}{b}}{c}$ bilan $\frac{a}{\frac{b}{c}}$ ni teng deb o'ylamang!
> Masalan: $\frac{\frac{6}{2}}{3} = \frac{3}{3} = 1$, ammo $\frac{6}{\frac{2}{3}} = \frac{6 \cdot 3}{2} = 9$. Ular butunlay boshqa-boshqa sonlar!

### 4-qoida: Uzluksiz (zanjirli) ko'p qavatli kasrlar
Zanjirli kasrlarni soddalashtirishning eng qulay yo'li — **eng quyi qavatdan boshlab** yuqoriga qarab tartib bilan hisoblash yoki butun kasrning surati va maxrajini barcha ichki maxrajlarning EKUKiga ko'paytirib yuborishdir:

$$
\frac{1}{1 + \dfrac{1}{1 + \dfrac{1}{x}}} = \frac{1}{1 + \dfrac{1}{\dfrac{x + 1}{x}}} = \frac{1}{1 + \dfrac{x}{x + 1}} = \frac{1}{\dfrac{(x + 1) + x}{x + 1}} = \frac{x + 1}{2x + 1}
$$

---

## 2. Darajalar va ildizlarning barcha muhim xossalari

### Darajaning asosiy xossalari:
Aytaylik, $a > 0, b > 0$ va $m, n \in \mathbb{R}$ bo'lsin:

1. **Bir xil asosli darajalar ko'paytmasi:** $a^m \cdot a^n = a^{m + n}$
2. **Bir xil asosli darajalar bo'linmasi:** $\frac{a^m}{a^n} = a^{m - n}$
3. **Darajani darajaga ko'tarish:** $(a^m)^n = a^{m \cdot n}$
4. **Ko'paytmaning darajasi:** $(a \cdot b)^n = a^n \cdot b^n$
5. **Bo'linmaning darajasi:** $\left(\frac{a}{b}\right)^n = \frac{a^n}{b^n}$
6. **Nolinchi daraja:** $a^0 = 1$ ($a \neq 0$)
7. **Manfiy daraja:** $a^{-n} = \frac{1}{a^n}$
8. **Kasrning manfiy darajasi:** $\left(\frac{a}{b}\right)^{-n} = \left(\frac{b}{a}\right)^n$
9. **Ratsional (kasr) daraja:** $a^{\frac{m}{n}} = \sqrt[n]{a^m}$ ($a > 0, n \in \mathbb{N}, n \ge 2$)
10. **Ishorali asos darajasi:** $(-a)^{2k} = a^{2k}$ (juft daraja musbat), $(-a)^{2k+1} = -a^{2k+1}$ (toq daraja manfiy).

### Ildizlarning asosiy xossalari:
11. **Ko'paytmaning ildizi:** $\sqrt[n]{a \cdot b} = \sqrt[n]{a} \cdot \sqrt[n]{b}$ ($a \ge 0, b \ge 0$)
12. **Bo'linmaning ildizi:** $\sqrt[n]{\frac{a}{b}} = \frac{\sqrt[n]{a}}{\sqrt[n]{b}}$ ($a \ge 0, b > 0$)
13. **Ildiz darajasi:** $(\sqrt[n]{a})^m = \sqrt[n]{a^m}$
14. **Ildizdan ildiz chiqarish:** $\sqrt[m]{\sqrt[n]{a}} = \sqrt[m \cdot n]{a}$
15. **Ildiz ko'rsatkichini qisqartirish:** $\sqrt[n \cdot k]{a^{m \cdot k}} = \sqrt[n]{a^m}$

> [!IMPORTANT]
> **JUFT DARAJALI ILDIZ VA MODUL SIRI (16-xossa):**
> Juft darajali ildiz ostidan daraja chiqarilganda **har doim modul belgisi** qo'yiladi:
> 
$$
> \sqrt{x^2} = |x| \quad \text{va umumiy holda} \quad \sqrt[2k]{x^{2k}} = |x|
> 
$$
> Masalan: $\sqrt{(-5)^2} = |-5| = 5 \neq -5$.
> Agar $x < 3$ bo'lsa, $\sqrt{(x - 3)^2} = |x - 3| = -(x - 3) = 3 - x$ bo'ladi! Buni unutish integrallar va limitlarda qat'iy xatoliklarga olib keladi.

17. **Toq darajali ildiz (17-xossa):** Toq darajali ildizda modul kerak emas: $\sqrt[2k+1]{x^{2k+1}} = x$ (har qanday $x \in \mathbb{R}$ uchun).
18. **Maxrajni irratsionallikdan qutqarish:**
    * $\frac{1}{\sqrt{a} \pm \sqrt{b}} = \frac{\sqrt{a} \mp \sqrt{b}}{a - b}$ (qo'shmasiga ko'paytirish).

---

## 3. Logarifmlarning to'liq xossalari jadvali, logarifmlash va potensirlash

Logarifm ta'rifi: $a^c = b \iff \log_a b = c$ ($a > 0, a \neq 1, b > 0$).

### Logarifmning 10 ta oltin xossasi:

| № | Xossa formulasi | Nomlanishi va izoh |
|:---|:---|:---|
| **1** | $a^{\log_a b} = b$ | **Asosiy logarifmik ayniyat** |
| **2** | $\log_a 1 = 0$ | $1$ ning ixtiyoriy asos bo'yicha logarifmi $0$ ga teng |
| **3** | $\log_a a = 1$ | Asosning o'zidan olingan logarifm $1$ ga teng |
| **4** | $\log_a(x \cdot y) = \log_a x + \log_a y$ | Ko'paytmaning logarifmi yig'indiga teng ($x>0, y>0$) |
| **5** | $\log_a\left(\frac{x}{y}\right) = \log_a x - \log_a y$ | Bo'linmaning logarifmi ayirmaga teng ($x>0, y>0$) |
| **6** | $\log_a(x^p) = p \cdot \log_a x$ | Argument darajasi oldinga ko'paytuvchi bo'lib tushadi |
| **7** | $\log_{a^q} x = \frac{1}{q} \cdot \log_a x$ | Asos darajasi oldinga teskari kasr bo'lib tushadi |
| **8** | $\log_{a^q}(x^p) = \frac{p}{q} \cdot \log_a x$ | Umumiy darajalar nisbati |
| **9** | $\log_a b = \frac{\log_c b}{\log_c a}$ | **Yangi asosga o'tish formulasi** (masalan, $\ln$ ga) |
| **10** | $\log_a b = \frac{1}{\log_b b}$ va $a^{\log_c b} = b^{\log_c a}$ | O'rin almashtirish xossalari |

> [!NOTE]
> Agar argument juft darajada bo'lsa: $\log_a(x^{2k}) = 2k \log_a |x|$ bo'ladi! Chunki $x$ manfiy bo'lishi ham mumkin.

### Logarifmlash va potensirlash amallari:
* **Logarifmlash:** Murakkab ifodaning har ikkala tomonidan natural logarifm $\ln$ olinadi. Masalan, hosila olishda yoki ko'paytmani yig'indiga aylantirishda:
  
$$
  y = \frac{x^4 \sqrt{x^2 + 1}}{(x - 3)^5} \implies \ln y = 4\ln x + \frac{1}{2}\ln(x^2 + 1) - 5\ln(x - 3)
  
$$
* **Potensirlash:** Logarifmli ifodadan asl funksiyaga qaytish:
  
$$
  \ln y = 3\ln x + \ln C \implies \ln y = \ln(C x^3) \implies y = C x^3
  
$$

---

## 4. $0^\circ$ dan $360^\circ$ gacha to'liq trigonometrik qiymatlar jadvali

Oliy matematikada burchaklar qat'iy ravishda **radianlarda** ifodalanadi: $\pi \text{ rad} = 180^\circ$.
Quyidagi jadval $0^\circ$ dan $360^\circ$ ($2\pi$) gacha bo'lgan barcha $17$ ta asosiy burchaklarning to'liq va aniq qiymatlarini o'z ichiga oladi:

| Burchak ($^\circ$) | Radian ($\text{rad}$) | $\sin \alpha$ | $\cos \alpha$ | $\operatorname{tg} \alpha$ | $\operatorname{ctg} \alpha$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| **$0^\circ$** | $0$ | $0$ | $1$ | $0$ | mavjud emas ($\infty$) |
| **$30^\circ$** | $\frac{\pi}{6}$ | $\frac{1}{2}$ | $\frac{\sqrt{3}}{2}$ | $\frac{\sqrt{3}}{3}$ | $\sqrt{3}$ |
| **$45^\circ$** | $\frac{\pi}{4}$ | $\frac{\sqrt{2}}{2}$ | $\frac{\sqrt{2}}{2}$ | $1$ | $1$ |
| **$60^\circ$** | $\frac{\pi}{3}$ | $\frac{\sqrt{3}}{2}$ | $\frac{1}{2}$ | $\sqrt{3}$ | $\frac{\sqrt{3}}{3}$ |
| **$90^\circ$** | $\frac{\pi}{2}$ | $1$ | $0$ | mavjud emas ($\infty$) | $0$ |
| **$120^\circ$** | $\frac{2\pi}{3}$ | $\frac{\sqrt{3}}{2}$ | $-\frac{1}{2}$ | $-\sqrt{3}$ | $-\frac{\sqrt{3}}{3}$ |
| **$135^\circ$** | $\frac{3\pi}{4}$ | $\frac{\sqrt{2}}{2}$ | $-\frac{\sqrt{2}}{2}$ | $-1$ | $-1$ |
| **$150^\circ$** | $\frac{5\pi}{6}$ | $\frac{1}{2}$ | $-\frac{\sqrt{3}}{2}$ | $-\frac{\sqrt{3}}{3}$ | $-\sqrt{3}$ |
| **$180^\circ$** | $\pi$ | $0$ | $-1$ | $0$ | mavjud emas ($\infty$) |
| **$210^\circ$** | $\frac{7\pi}{6}$ | $-\frac{1}{2}$ | $-\frac{\sqrt{3}}{2}$ | $\frac{\sqrt{3}}{3}$ | $\sqrt{3}$ |
| **$225^\circ$** | $\frac{5\pi}{4}$ | $-\frac{\sqrt{2}}{2}$ | $-\frac{\sqrt{2}}{2}$ | $1$ | $1$ |
| **$240^\circ$** | $\frac{4\pi}{3}$ | $-\frac{\sqrt{3}}{2}$ | $-\frac{1}{2}$ | $\sqrt{3}$ | $\frac{\sqrt{3}}{3}$ |
| **$270^\circ$** | $\frac{3\pi}{2}$ | $-1$ | $0$ | mavjud emas ($\infty$) | $0$ |
| **$300^\circ$** | $\frac{5\pi}{3}$ | $-\frac{\sqrt{3}}{2}$ | $\frac{1}{2}$ | $-\sqrt{3}$ | $-\frac{\sqrt{3}}{3}$ |
| **$315^\circ$** | $\frac{7\pi}{4}$ | $-\frac{\sqrt{2}}{2}$ | $\frac{\sqrt{2}}{2}$ | $-1$ | $-1$ |
| **$330^\circ$** | $\frac{11\pi}{6}$ | $-\frac{1}{2}$ | $\frac{\sqrt{3}}{2}$ | $-\frac{\sqrt{3}}{3}$ | $-\sqrt{3}$ |
| **$360^\circ$** | $2\pi$ | $0$ | $1$ | $0$ | mavjud emas ($\infty$) |

---

## 5. Keltirish formulalari va "Ot bosh chayqaydi" mnemonik qoidasi

$90^\circ$ dan katta ixtiyoriy burchakning trigonometrik qiymatini topish uchun $32$ ta formulani yodlash shart emas! Barchasini **2 bosqichli mnemonik qoida** yordamida $3$ soniyada topish mumkin.

### 1-qadam: Funksiya nomi o'zgaradimi? ("Ot qoidasi")
* Agar argumentda $\frac{\pi}{2}$ yoki $\frac{3\pi}{2}$ (vertikal $y$ o'qidagi burchaklar) qatnashsa — ko'zimiz yuqoriga va pastga qarab boshimizni vertikal qimirlatamiz: **"HA, nom o'zgaradi!"**:
  $$\sin \longleftrightarrow \cos \qquad \text{va} \qquad \operatorname{tg} \longleftrightarrow \operatorname{ctg}$$
* Agar argumentda $\pi$ yoki $2\pi$ (gorizontal $x$ o'qidagi burchaklar) qatnashsa — ko'zimiz chapga va o'ngga qarab boshimizni gorizontal qimirlatamiz: **"YO'Q, nom o'zgarmaydi!"**:
  $$\sin \to \sin, \quad \cos \to \cos, \quad \operatorname{tg} \to \operatorname{tg}, \quad \operatorname{ctg} \to \operatorname{ctg}$$

### 2-qadam: Ishora qanday bo'ladi?
Burchak $\alpha$ ni doimo **o'tkir burchak ($0 < \alpha < 90^\circ$)** deb tasavvur qilamiz va butun argument qaysi koordinata choragiga tushishini aniqlaymiz. So'ngra **dastlabki (boshlang'ich) funksiyaning** o'sha chorakdagi ishorasi ($+$ yoki $-$) natijaning oldiga qo'yiladi!

### Keltirish formulalarining to'liq jamlanmasi:

| Boshlang'ich funksiya | $\frac{\pi}{2} - \alpha$ (I) | $\frac{\pi}{2} + \alpha$ (II) | $\pi - \alpha$ (II) | $\pi + \alpha$ (III) | $\frac{3\pi}{2} - \alpha$ (III) | $\frac{3\pi}{2} + \alpha$ (IV) | $2\pi - \alpha$ (IV) |
|:---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **$\sin$** | $+\cos \alpha$ | $+\cos \alpha$ | $+\sin \alpha$ | $-\sin \alpha$ | $-\cos \alpha$ | $-\cos \alpha$ | $-\sin \alpha$ |
| **$\cos$** | $+\sin \alpha$ | $-\sin \alpha$ | $-\cos \alpha$ | $-\cos \alpha$ | $-\sin \alpha$ | $+\sin \alpha$ | $+\cos \alpha$ |
| **$\operatorname{tg}$** | $+\operatorname{ctg} \alpha$ | $-\operatorname{ctg} \alpha$ | $-\operatorname{tg} \alpha$ | $+\operatorname{tg} \alpha$ | $+\operatorname{ctg} \alpha$ | $-\operatorname{ctg} \alpha$ | $-\operatorname{tg} \alpha$ |
| **$\operatorname{ctg}$** | $+\operatorname{tg} \alpha$ | $-\operatorname{tg} \alpha$ | $-\operatorname{ctg} \alpha$ | $+\operatorname{ctg} \alpha$ | $+\operatorname{tg} \alpha$ | $-\operatorname{tg} \alpha$ | $-\operatorname{ctg} \alpha$ |

---

## 6. Teskari trigonometrik funksiyalar (Arkfunksiyalar)

Teskari trigonometrik funksiyalar integrallashda va differensial tenglamalarda doimiy javob shakli sifatida yuzaga keladi.

### Asosiy tavsiflar:

| Funksiya | Aniqlanish sohasi $D(f)$ | Qiymatlar sohasi $E(f)$ | Manfiy argument qoidasi |
|:---|:---|:---|:---|
| **$y = \arcsin x$** | $[-1; 1]$ | $\left[-\frac{\pi}{2}; \frac{\pi}{2}\right]$ | $\arcsin(-x) = -\arcsin x$ (Toq funksiya) |
| **$y = \arccos x$** | $[-1; 1]$ | $[0; \pi]$ | $\arccos(-x) = \pi - \arccos x$ |
| **$y = \operatorname{arctg} x$** | $\mathbb{R} = (-\infty; +\infty)$ | $\left(-\frac{\pi}{2}; \frac{\pi}{2}\right)$ | $\operatorname{arctg}(-x) = -\operatorname{arctg} x$ (Toq funksiya) |
| **$y = \operatorname{arcctg} x$** | $\mathbb{R} = (-\infty; +\infty)$ | $(0; \pi)$ | $\operatorname{arcctg}(-x) = \pi - \operatorname{arcctg} x$ |

> [!IMPORTANT]
> **Fundamental ayniyatlar:**
> 
$$
> \arcsin x + \arccos x = \frac{\pi}{2} \quad (x \in [-1; 1])
> 
$$
> 
$$
> \operatorname{arctg} x + \operatorname{arcctg} x = \frac{\pi}{2} \quad (x \in \mathbb{R})
> 
$$

### Arkfunksiyalarning asosiy standart qiymatlari jadvali:

| $x$ | $0$ | $\frac{1}{2}$ | $\frac{\sqrt{2}}{2}$ | $\frac{\sqrt{3}}{2}$ | $1$ | $-\frac{1}{2}$ | $-\frac{\sqrt{2}}{2}$ | $-\frac{\sqrt{3}}{2}$ | $-1$ |
|:---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **$\arcsin x$** | $0$ | $\frac{\pi}{6}$ | $\frac{\pi}{4}$ | $\frac{\pi}{3}$ | $\frac{\pi}{2}$ | $-\frac{\pi}{6}$ | $-\frac{\pi}{4}$ | $-\frac{\pi}{3}$ | $-\frac{\pi}{2}$ |
| **$\arccos x$** | $\frac{\pi}{2}$ | $\frac{\pi}{3}$ | $\frac{\pi}{4}$ | $\frac{\pi}{6}$ | $0$ | $\frac{2\pi}{3}$ | $\frac{3\pi}{4}$ | $\frac{5\pi}{6}$ | $\pi$ |

| $x$ | $0$ | $\frac{\sqrt{3}}{3}$ | $1$ | $\sqrt{3}$ | $-\frac{\sqrt{3}}{3}$ | $-1$ | $-\sqrt{3}$ |
|:---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **$\operatorname{arctg} x$** | $0$ | $\frac{\pi}{6}$ | $\frac{\pi}{4}$ | $\frac{\pi}{3}$ | $-\frac{\pi}{6}$ | $-\frac{\pi}{4}$ | $-\frac{\pi}{3}$ |
| **$\operatorname{arcctg} x$** | $\frac{\pi}{2}$ | $\frac{\pi}{3}$ | $\frac{\pi}{4}$ | $\frac{\pi}{6}$ | $\frac{2\pi}{3}$ | $\frac{3\pi}{4}$ | $\frac{5\pi}{6}$ |

---

## 7. Namunaviy mashqlar va javoblar

### 1-misol: Ko'p qavatli kasrni hisoblash
**Shart:** Quyidagi ifodaning qiymatini hisoblang:

$$
A = \frac{\dfrac{2}{3} - \dfrac{1}{4}}{\dfrac{5}{6} + \dfrac{1}{8}} : \frac{1}{\dfrac{3}{23}}
$$

**Yechish:**
1. Suratdagi ayirmani hisoblaymiz (umumiy maxraj $12$):

$$
\frac{2}{3} - \frac{1}{4} = \frac{8 - 3}{12} = \frac{5}{12}
$$

2. Maxrajdagi yig'indini hisoblaymiz (umumiy maxraj $24$):

$$
\frac{5}{6} + \frac{1}{8} = \frac{20 + 3}{24} = \frac{23}{24}
$$

3. Birinchi to'rt qavatli kasrni 1-oltin qoida bo'yicha hisoblaymiz:

$$
\frac{\;\dfrac{5}{12}\;}{\dfrac{23}{24}} = \frac{5 \cdot 24}{12 \cdot 23} = \frac{5 \cdot 2}{23} = \frac{10}{23}
$$

4. Bo'luvchi qismidagi uch qavatli kasrni 3-oltin qoida bo'yicha hisoblaymiz:

$$
\frac{1}{\;\dfrac{3}{23}\;} = \frac{1 \cdot 23}{3} = \frac{23}{3}
$$

5. Yakuniy bo'lish amali:

$$
A = \frac{10}{23} : \frac{23}{3} = \frac{10}{23} \cdot \frac{3}{23} = \frac{30}{529}
$$

---

### 2-misol: Modul va juft ildiz siri
**Shart:** Agar $x \in (2; 5)$ bo'lsa, $\sqrt{x^2 - 4x + 4} + \sqrt{x^2 - 10x + 25}$ ifodani soddalashtiring.

**Yechish:**
1. Ildiz ostidagi ifodalar to'liq kvadratlardir:

$$
x^2 - 4x + 4 = (x - 2)^2 \implies \sqrt{(x - 2)^2} = |x - 2|
$$

$$
x^2 - 10x + 25 = (x - 5)^2 \implies \sqrt{(x - 5)^2} = |x - 5|
$$

2. Modullarni ochamiz: $x \in (2; 5)$ bo'lgani sababli:
   * $x > 2 \implies x - 2 > 0 \implies |x - 2| = x - 2$
   * $x < 5 \implies x - 5 < 0 \implies |x - 5| = -(x - 5) = 5 - x$
3. Qo'shamiz:

$$
(x - 2) + (5 - x) = x - 2 + 5 - x = 3
$$

**Javob:** $3$.

---

### 3-misol: Logarifmlar xossalarini qo'llash
**Shart:** Ifodani hisoblang: $B = 25^{\log_5 3} + \log_{\sqrt{2}} 8 - \log_3 18 + \log_3 2$.

**Yechish:**
1. $25^{\log_5 3} = (5^2)^{\log_5 3} = (5^{\log_5 3})^2 = 3^2 = 9$.
2. $\log_{\sqrt{2}} 8 = \log_{2^{1/2}} (2^3) = \frac{3}{1/2} \cdot \log_2 2 = 6 \cdot 1 = 6$.
3. $-\log_3 18 + \log_3 2 = \log_3\left(\frac{2}{18}\right) = \log_3\left(\frac{1}{9}\right) = \log_3(3^{-2}) = -2$.
4. Jami: $B = 9 + 6 - 2 = 13$.

**Javob:** $13$.

---

### 4-misol: Keltirish formulasi va arkfunksiyalar
**Shart:** Ifodaning qiymatini hisoblang:

$$
C = \sin(150^\circ) + \cos(240^\circ) - \operatorname{tg}(315^\circ) + \arccos\left(-\frac{\sqrt{3}}{2}\right)
$$

**Yechish:**
1. $\sin(150^\circ) = \sin(180^\circ - 30^\circ) = +\sin(30^\circ) = \frac{1}{2}$.
2. $\cos(240^\circ) = \cos(180^\circ + 60^\circ) = -\cos(60^\circ) = -\frac{1}{2}$.
3. $\operatorname{tg}(315^\circ) = \operatorname{tg}(360^\circ - 45^\circ) = -\operatorname{tg}(45^\circ) = -1$.
4. $\arccos\left(-\frac{\sqrt{3}}{2}\right) = \pi - \arccos\left(\frac{\sqrt{3}}{2}\right) = \pi - \frac{\pi}{6} = \frac{5\pi}{6}$.
5. Barchasini birlashtiramiz:

$$
C = \frac{1}{2} + \left(-\frac{1}{2}\right) - (-1) + \frac{5\pi}{6} = 0 + 1 + \frac{5\pi}{6} = 1 + \frac{5\pi}{6}
$$

---

## Mustaqil yechish uchun mashqlar

1. **Mashq 1:** Ko'p qavatli kasrni soddalashtiring: $\dfrac{x - \dfrac{1}{x}}{1 + \dfrac{1}{x}}$.
2. **Mashq 2:** Agar $a < 1$ bo'lsa, $\sqrt{a^2 - 2a + 1} - \sqrt{a^2}$ ifodaning qiymatini $a$ orqali ifodalang (ehtiyot bo'ling: $a$ manfiy bo'lishi ham mumkin!).
3. **Mashq 3:** Hisoblang: $\log_2 3 \cdot \log_3 4 \cdot \log_4 5 \dots \log_{31} 32$.
4. **Mashq 4:** Qiymatini toping: $\arcsin\left(-\frac{1}{2}\right) + \operatorname{arctg}(-1) + \operatorname{arcctg}(-\sqrt{3})$.

---

### Mashqlarning javoblari:

* **1-mashq:** Surat: $x - \frac{1}{x} = \frac{x^2 - 1}{x}$. Maxraj: $1 + \frac{1}{x} = \frac{x + 1}{x}$.
  Bo'lsak: $\frac{\frac{x^2 - 1}{x}}{\frac{x + 1}{x}} = \frac{(x^2 - 1) \cdot x}{x \cdot (x + 1)} = \frac{(x - 1)(x + 1)}{x + 1} = x - 1$ ($x \neq 0, x \neq -1$).
* **2-mashq:** $\sqrt{(a - 1)^2} - \sqrt{a^2} = |a - 1| - |a|$. Chunki $a < 1$, demak $a - 1 < 0 \implies |a - 1| = 1 - a$.
  * Agar $0 \le a < 1$ bo'lsa: $(1 - a) - a = 1 - 2a$.
  * Agar $a < 0$ bo'lsa: $(1 - a) - (-a) = 1 - a + a = 1$.
* **3-mashq:** Yangi asosga o'tish formulasiga ko'ra: $\frac{\ln 3}{\ln 2} \cdot \frac{\ln 4}{\ln 3} \dots \frac{\ln 32}{\ln 31} = \frac{\ln 32}{\ln 2} = \log_2 32 = 5$.
* **4-mashq:**
  * $\arcsin\left(-\frac{1}{2}\right) = -\frac{\pi}{6}$;
  * $\operatorname{arctg}(-1) = -\frac{\pi}{4}$;
  * $\operatorname{arcctg}(-\sqrt{3}) = \pi - \operatorname{arcctg}(\sqrt{3}) = \pi - \frac{\pi}{6} = \frac{5\pi}{6}$.
  * Yig'indi: $-\frac{\pi}{6} - \frac{\pi}{4} + \frac{5\pi}{6} = \frac{4\pi}{6} - \frac{\pi}{4} = \frac{2\pi}{3} - \frac{\pi}{4} = \frac{8\pi - 3\pi}{12} = \frac{5\pi}{12}$.
