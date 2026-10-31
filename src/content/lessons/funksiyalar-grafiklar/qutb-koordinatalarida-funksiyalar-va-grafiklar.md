---
title: "Qutb koordinatalari sistemasida funksiyalar va mashhur egri chiziqlar"
description: "Qutb koordinatalari, Arximed spirali, kardioida, Bernulli lemniskatasi va ko'p bargli atirgullar grafigi."
module: "funksiyalar-grafiklar"
order: 13
---

## 📌 Kirish va Geometrik/Fizik Ma'no

Biz o'rganib qolgan to'g'ri burchakli Dekart koordinatalari sistemasi ($x, y$) to'g'ri to'rtburchak shaklidagi xonalar, shahar ko'chalari yoki shaxmat doskasini tasvirlash uchun juda qulaydir. Biroq tabiatdagi ko'plab hodisalar to'g'ri chiziqli emas, balki **markaziy va aylanma simmetriyaga** ega.

Masalan:
- Harbiy yoki aeroport radarlarida samolyot o'rni: radardan uzoqlik masofasi va azimut burchagi bilan aniqlanadi;
- Quyosh atrofida aylanayotgan sayyoralar va kometalarning harakati;
- Galaktikalar va dovullarning aylanma spiral shakllari;
- Akustik karnaylar va antennalarning yo'naltirilgan nurlanish diagrammalari.

Bunday hodisalarni Dekart koordinatalarida yozsak, ifodalar o'ta murakkab va noqulay ko'rinishga keladi. Ammo koordinata boshi va burchak orqali ishlaydigan **qutb koordinatalari sistemasi**ga o'tilsa, bu murakkab chiziqlar ixcham va go'zal tenglamalarga aylanadi!

---

## 📐 Asosiy Nazariya, Qoidalar va Teoremalar

### 1. Qutb koordinatalari sistemasi ta'rifi
Tekislikda $O$ nuqta (**qutb boshi**) va undan chiquvchi gorizontal nur $Op$ (**qutb o'qi**) tanlanadi.
Tekislikdagi ixtiyoriy $M$ nuqtaning vaziyati ikkita son bilan aniqlanadi:
1. **Qutb radiusi ($r$ yoki $\rho$):** $O$ nuqtadan $M$ gacha bo'lgan masofa ($r \ge 0$).
2. **Qutb burchagi ($\varphi$ yoki $\theta$):** Qutb o'qidan $OM$ kesmagacha soat strelkasiga qarshi yo'nalishda hisoblangan burchak ($0 \le \varphi < 2\pi$ yoki $-\pi < \varphi \le \pi$).

Nuqta qutb koordinatalarida $M(r, \varphi)$ kabi yoziladi.

### 2. Dekart va Qutb koordinatalari orasidagi bog'lanish
Agar Dekart sistemasining boshi qutbda, $Ox$ o'qi esa qutb o'qi bilan ustma-ust tushirilsa:

- **Qutbdan Dekartga o'tish:**
  $$x = r \cos \varphi, \qquad y = r \sin \varphi$$
- **Dekartdan Qutbga o'tish:**
  $$r = \sqrt{x^2 + y^2}, \qquad \tan \varphi = \frac{y}{x}$$

> **Burchakni tanlashda ehtiyotkorlik:** $\varphi$ burchakning to'g'ri chorakka tushishini ta'minlash uchun $\arctan(y/x)$ ga qarab chorak tuzatmasi ($\pm \pi$) kiritiladi.

### 3. Qutb grafigining simmetriya qoidalari
Tenglama $r = f(\varphi)$ ko'rinishida berilgan bo'lsa:
1. **Qutb o'qiga (OX) nisbatan simmetrik:** agar $f(-\varphi) = f(\varphi)$ bo'lsa (kosinusli funksiyalar).
2. **$\varphi = \pi/2$ nuriga (OY) nisbatan simmetrik:** agar $f(\pi - \varphi) = f(\varphi)$ bo'lsa (sinusli funksiyalar).
3. **Qutbga (koordinata boshiga) nisbatan simmetrik:** agar $f(\varphi + \pi) = f(\varphi)$ bo'lsa.

### 4. Matematikaning eng mashhur qutb egri chiziqlari

| Egri chiziq nomi | Qutb tenglamasi | Asosiy geometrik xususiyati |
| :--- | :--- | :--- |
| **Arximed spirali** | $r = a \varphi$ | Har bir to'liq aylanishda ($2\pi$) radius bir xil qadamga ($2\pi a$) oshadi |
| **Logarifmik spiral** | $r = a e^{k\varphi}$ | Spirallashuvchi yoy urinmasi radius-vektor bilan doimiy burchak hosil qiladi |
| **Kardioida** | $r = a(1 + \cos \varphi)$ | Yuraksimon shakl; aylananing boshqa teng aylanada g'ildirashidan hosil bo'ladi |
| **Paskal chig'anog'i** | $r = a \cos \varphi + b$ | $a > b$ da ichki halqali, $a = b$ da kardioida |
| **Bernulli lemniskatasi**| $r^2 = 2a^2 \cos 2\varphi$ | "Cheksizlik" ($\infty$) belgisi shaklidagi sakkizlik |
| **Ko'p bargli atirgul**| $r = a \sin(k\varphi)$ | Agar $k$ toq bo'lsa $k$ ta barg; agar $k$ juft bo'lsa $2k$ ta barg hosil qiladi |

---

## 📝 Qadamma-qadam Yechilgan Amaliy Misollar

### 1-misol: Kardioidaning grafigini tahlil qilish va yasash
Ushbu kardioida berilgan:

$$
r = 2(1 - \cos \varphi)
$$

a) Grafigining xarakterli nuqtalarini toping;
b) Simmetriyasini aniqlang va shaklini tahlil qiling.

**Yechilishi:**
1. **Simmetriyasi:**
   $\cos(-\varphi) = \cos \varphi$ bo'lgani sababli $r(-\varphi) = r(\varphi)$. Demak, grafik **qutb o'qiga (gorizontal o'qqa) nisbatan simmetrik**. Shu sababli $\varphi \in [0, \pi]$ oraliqni o'rganish yetarli.
2. **Xarakterli nuqtalar jadvali:**
   - $\varphi = 0 \implies r = 2(1 - 1) = 0$ (egri chiziq qutbdan chiqadi).
   - $\varphi = \frac{\pi}{3} \implies r = 2(1 - 0.5) = 1$.
   - $\varphi = \frac{\pi}{2} \implies r = 2(1 - 0) = 2$.
   - $\varphi = \frac{2\pi}{3} \implies r = 2(1 - (-0.5)) = 3$.
   - $\varphi = \pi \implies r = 2(1 - (-1)) = 4$ (eng uzoq nuqta).
3. **Tahlil:**
   $\varphi$ burchak $0$ dan $\pi$ gacha oshgani sari radius $0$ dan $4$ gacha uzluksiz kengayadi. Pastki qism esa gorizontal o'q bo'yicha ko'zgudek akslantiriladi. Natijada qutbda o'tkir uchga ega bo'lgan yuraksimon yopiq chiziq — **kardioida** hosil bo'ladi.

**Javob:** Qutb o'qiga nisbatan simmetrik; maksimal o'lchami $r = 4$ ($\varphi = \pi$ da).

---

### 2-misol: To'rt bargli atirgul (Rhodonea) tahlili
Ushbu egri chiziqning grafigini tahlil qiling:

$$
r = 3 \sin 2\varphi
$$

**Yechilishi:**
1. Tenglamadagi koeffitsiyent $k = 2$ — juft son. Qoidaga ko'ra, gul barglari soni $N = 2k = 2(2) = 4$ ta bo'ladi.
2. Radius musbat bo'lishi kerak ($r \ge 0$), ya'ni $\sin 2\varphi \ge 0$:
   - 1-barg: $0 \le 2\varphi \le \pi \implies 0 \le \varphi \le \frac{\pi}{2}$. Barg o'rtasi $\varphi = \pi/4$ da bo'lib, $r_{max} = 3$.
   - 2-barg: $2\pi \le 2\varphi \le 3\pi \implies \pi \le \varphi \le \frac{3\pi}{2}$. Barg o'rtasi $\varphi = 5\pi/4$ da, $r_{max} = 3$.
3. Agar $r < 0$ bo'lgan oraliqlar hisobga olinsa (analitik geometriyada manfiy radius qarama-qarshi yo'nalishga aks ettiriladi), qolgan ikkita oraliq ($\pi/2 < \varphi < \pi$ va $3\pi/2 < \varphi < 2\pi$) mos ravishda IV va II choraklarga tushadi.
4. Natijada har bir koordinata choragining bissektrisasi bo'ylab cho'zilgan 4 ta simmetrik gulbarglari hosil bo'ladi.

**Javob:** Barglar soni 4 ta, har bir bargning maksimal uzunligi 3 ga teng.

---

### 3-misol: Bernulli lemniskatasining Dekart sistemasidagi tenglamasi
Qutb sistemasidagi $r^2 = 4 \cos 2\varphi$ tenglamani Dekart koordinatalar sistemasiga o'tkazing.

**Yechilishi:**
1. Qutbdan Dekartga o'tish formulalari:
   $$r^2 = x^2 + y^2$$
2. Qo'sh burchak kosinusini yozamiz:
   $$\cos 2\varphi = \cos^2 \varphi - \sin^2 \varphi$$
3. $\cos \varphi = \frac{x}{r}$ va $\sin \varphi = \frac{y}{r}$ ekanligidan:
   $$\cos 2\varphi = \frac{x^2}{r^2} - \frac{y^2}{r^2} = \frac{x^2 - y^2}{r^2}$$
4. Berilgan tenglamaga qo'yamiz:
   $$r^2 = 4 \left( \frac{x^2 - y^2}{r^2} \right) \implies r^4 = 4(x^2 - y^2)$$
5. $r^2 = x^2 + y^2$ ni qo'yamiz:
   $$(x^2 + y^2)^2 = 4(x^2 - y^2)$$

> 💡 Bu 4-darajali algebraik egri chiziq bo'lib, Yakob Bernulli sharafiga **Bernulli lemniskatasi** deb ataladi.

**Javob:** $(x^2 + y^2)^2 = 4(x^2 - y^2)$.

---

### 4-misol: Qutb sistemasida urinmaning qutb radiusi bilan hosil qilgan burchagi
Egri chiziq qutb koordinatalarida $r = f(\varphi)$ berilgan bo'lsa, urinmaning radius-vektor bilan hosil qilgan $\mu$ burchagi tangensi quyidagi formula bilan hisoblanadi:

$$
\tan \mu = \frac{r}{r'}
$$

$r = a \varphi$ (Arximed spirali) uchun $\tan \mu$ ni hisoblang va $\varphi \to \infty$ dagi xatti-harakatini aniqlang.

**Yechilishi:**
1. $r = a\varphi$ funksiyadan $\varphi$ bo'yicha hosila olamiz:
   $$r' = \frac{dr}{d\varphi} = a$$
2. Formulaga qo'yamiz:
   $$\tan \mu = \frac{r}{r'} = \frac{a\varphi}{a} = \varphi$$
3. Tahlil:
   - $\varphi = 0$ da $\tan \mu = 0 \implies \mu = 0$ (boshlang'ich nuqtada spiral qutb o'qiga urinadi).
   - $\varphi \to \infty$ da $\tan \mu \to \infty \implies \mu \to \frac{\pi}{2}$.
   Bu shuni ko'rsatadiki, spiral tashqariga qarab kengaygani sari uning urinmasi radius-vektorga tobora perpendikulyar bo'lib boradi (aylanaga yaqinlashadi)!

**Javob:** $\tan \mu = \varphi$; cheksizlikda urinma radiusga deyarli perpendikulyar bo'ladi.

---

## ⚠️ Talabalar Ko'p Yo'l Qo'yadigan Xatolar (Tipik tuzoqlar)

1. **Dekartdan qutb burchagini topishda faqat $\arctan(y/x)$ formulasi bilan cheklanish:**
   > ⛔ **Xato:** $(-1, -1)$ nuqta uchun $\tan \varphi = \frac{-1}{-1} = 1 \implies \varphi = \frac{\pi}{4}$.
   > 
   > 💡 **Sabab:** $(-1, -1)$ nuqta III chorakda yotadi, $\pi/4$ esa I chorakda! To'g'ri burchak: $\varphi = \frac{\pi}{4} + \pi = \frac{5\pi}{4}$. Nuqtaning qaysi chorakdaligini doimo chizmada tekshiring!

2. **Ko'p bargli atirgulda barglar sonini chalkashtirish:**
   $r = a \sin(k\varphi)$ da agar $k$ toq bo'lsa, barglar soni aynan $k$ ta bo'ladi ($2k$ emas!). Masalan, $r = \sin 3\varphi$ da 3 ta barg, $r = \sin 2\varphi$ da esa 4 ta barg hosil bo'ladi.

3. **$r < 0$ holatini tushunmaslik:**
   Masofaning manfiy bo'lishi qutb sistemasida nuqtani burchak yo'nalishiga emas, balki uning teskari tomoniga (nurga qarama-qarshi) qo'yish kerakligini anglatadi.

---

## 🎯 Mustaqil Yechish Uchun Masalalar

1. Dekart koordinatalaridagi $x^2 + y^2 = 6x$ aylana tenglamasini qutb koordinatalariga o'tkazing.
2. $r = 1 + \cos \varphi$ kardioidaning $\varphi = \pi/2$ nuqtasidagi radiusini va Dekart koordinatalarini toping.
3. Uch bargli atirgul $r = 2 \cos 3\varphi$ ning barglari maksimal uzunlikka yetadigan burchaklarni aniqlang.
4. $r = \frac{p}{1 - \varepsilon \cos \varphi}$ tenglama konus kesimlarini (ellips, parabola, giperbola) ifodalaydi. $\varepsilon = 0$ va $\varepsilon = 1$ bo'lganda qanday chiziqlar hosil bo'lishini ko'rsating.

<details style="margin-top: 1rem; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); cursor: pointer;">
<summary style="font-weight: 700; color: var(--primary);">Mashqlar javoblarini ko'rish</summary>

**1-masala:**
$x^2 + y^2 = r^2$, $x = r\cos \varphi \implies r^2 = 6r\cos \varphi \implies r = 6\cos \varphi$.

**2-masala:**
$\varphi = \pi/2 \implies r = 1 + \cos(\pi/2) = 1$.
$x = r\cos(\pi/2) = 0, \quad y = r\sin(\pi/2) = 1$. Nuqta: $(0, 1)$.

**3-masala:**
Maksimal uzunlik $\cos 3\varphi = 1$ da: $3\varphi = 2\pi k \implies \varphi = 0, \frac{2\pi}{3}, \frac{4\pi}{3}$.

**4-masala:**
$\varepsilon = 0$ da $r = p = \text{const}$ — markazi qutbda bo'lgan aylana.
$\varepsilon = 1$ da $r(1 - \cos \varphi) = p \implies r - x = p \implies r = x + p \implies x^2 + y^2 = (x+p)^2 \implies y^2 = 2px + p^2$ — parabola!

</details>

---

## 💡 Xulosa va Imtihon Maslahatlari

- Qutb koordinatalari integrallashda (ayniqsa, karrali integrallarda doira yuzini hisoblashda) hayotiy muhim vositadir. $x^2 + y^2$ ifodani ko'rishingiz bilan xayolingizga birinchi navbatda $r^2$ kelishi kerak.
- Qutb grafigini yasashda doimo simmetriyani tekshirishdan boshlang — bu hisob-kitoblarni 2 yoki 4 barobar qisqartiradi.
- Mashhur egri chiziqlar (kardioida, lemniskata, Arximed spirali) shakllari va ularning qutb tenglamalarini yodda saqlash oliy matematika imtihonlarida vaqtni juda katta tejaydi.
