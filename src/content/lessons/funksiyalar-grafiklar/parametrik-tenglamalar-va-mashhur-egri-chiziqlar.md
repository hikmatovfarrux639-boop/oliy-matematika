---
title: "Parametrik tenglamalar bilan berilgan funksiyalar va kinematik egri chiziqlar"
description: "Sikloida, astroida, gipotsikloida, evolventa va Lissaju figuralarining tenglamalari va grafigi."
module: "funksiyalar-grafiklar"
order: 14
---

## 📌 Kirish va Geometrik/Fizik Ma'no

Klassik maktab matematikasida funksiya har doim bir qiymatli bo'lishi talab etiladi: bitta $x$ ga faqat bitta $y$ mos kelishi shart. Biroq tabiat va texnikadagi real trayektoriyalar (masalan, aylana, tugunlar, o'z-o'zini kesuvchi chiziqlar) bu qoidaga bo'ysunmaydi. Bitta $x$ koordinataga ikkita, uchta yoki cheksiz ko'p $y$ to'g'ri kelishi mumkin.

Bundan tashqari, fizikada jismning harakati har doim **vaqt ($t$)** orqali ifodalanadi. Har bir $t$ vaqt lahzasida jism fazoda yoki tekislikda aniq bir koordinataga ega bo'ladi: $x = x(t), y = y(t)$. Bu yondashuv matematikada **parametrik tenglamalar** deb ataladi.

Kinematika va mexanikaning rivojlanishi tufayli insoniyat eng ajoyib egri chiziqlar bilan tanishdi: sirpanmasdan dumalayotgan g'ildirak nuqtasi chizadigan **sikloida** (eng tez tushish yo'li — braxistoxrona), yulduzsimon go'zal **astroida**, tishli g'ildiraklar profili bo'lgan **aylana evolventasi** hamda ossillograf ekranidagi tebranishlar naqshi bo'lgan **Lissaju figuralari**.

---

## 📐 Asosiy Nazariya, Qoidalar va Teoremalar

### 1. Parametrik ko'rinishdagi funksiya ta'rifi
Tekislikdagi egri chiziq koordinatalari uchinchi yordamchi o'zgaruvchi $t$ (parametr) orqali berilsa:

$$
\begin{cases}
x = x(t) \\
y = y(t)
\end{cases} \quad t \in [\alpha, \beta]
$$

Agar $x(t)$ funksiya qat'iy monoton bo'lsa, uning teskari funksiyasi $t = x^{-1}(x)$ mavjud bo'lib, $y = y(x^{-1}(x)) = f(x)$ oshkor ko'rinishga o'tish mumkin. Biroq ko'pincha parametrni yo'qotish shart emas va amaliy hisoblashlar bevosita $t$ orqali bajariladi.

### 2. Parametrik funksiyaning hosilalari
Agar $x(t)$ va $y(t)$ differensiallanuvchi bo'lib, $\dot{x}(t) \neq 0$ bo'lsa:

- **Birinchi tartibli hosila ($y'_x$):**
  $$y'_x = \frac{dy}{dx} = \frac{y'_t}{x'_t} = \frac{\dot{y}}{\dot{x}}$$
- **Ikkinchi tartibli hosila ($y''_{xx}$):**
  $$y''_{xx} = \frac{d}{dx}\left(\frac{\dot{y}}{\dot{x}}\right) = \frac{(\dot{y}/\dot{x})'_t}{\dot{x}} = \frac{\ddot{y}\dot{x} - \dot{y}\ddot{x}}{\dot{x}^3}$$

### 3. Mashhur kinematik egri chiziqlar

1. **Oddiy Sikloida:**
   To'g'ri chiziq bo'ylab sirpanmasdan dumalayotgan $R$ radiusli doira gardishidagi nuqtaning trayektoriyasi:
   $$\begin{cases} x = R(t - \sin t) \\ y = R(1 - \cos t) \end{cases} \quad (t \in \mathbb{R})$$
   - *Braxistoxrona xossasi (Iogann Bernulli, 1696):* Og'irlik kuchi ta'sirida jism bir nuqtadan ikkinchi nuqtaga eng qisqa vaqtda tushishi uchun uning yo'li to'g'ri chiziq emas, balki teskari to'ntarilgan sikloida bo'lishi kerak!
   - *Tautoxrona (izoxrona) xossasi (Gyuygens):* Sikloida bo'ylab pastga dumalayotgan jism qayerdan boshlashidan qat'i nazar eng pastki nuqtaga bir xil vaqtda yetib keladi (aniq sikloidali mayatnik soatlari asosi).

2. **Astroida (Gipotsikloida xususiy holi):**
   Radiusi $R$ bo'lgan aylana ichida radiusi $r = R/4$ bo'lgan doira sirpanmasdan g'ildirlaganda hosil bo'ladi:
   $$\begin{cases} x = R \cos^3 t \\ y = R \sin^3 t \end{cases} \iff x^{2/3} + y^{2/3} = R^{2/3}$$

3. **Aylana evolventasi (Involyutasi):**
   Doiraga o'ralgan tarang ipning yechilishi natijasida ip uchining chizgan chizig'i:
   $$\begin{cases} x = R(\cos t + t\sin t) \\ y = R(\sin t - t\cos t) \end{cases}$$
   Zamonaviy mashinasozlikdagi barcha tishli g'ildiraklarning tishlari aynan shu evolventa bo'yicha yo'niladi, chunki u tishlar o'rtasida sirpanishsiz silliq aylanishni ta'minlaydi.

4. **Lissaju figuralari:**
   O'zaro perpendikulyar ikki garmonik tebranishning qo'shilishidan hosil bo'ladi:
   $$\begin{cases} x = A \sin(\omega_1 t + \delta) \\ y = B \sin(\omega_2 t) \end{cases}$$
   Shakl $\omega_1/\omega_2$ chastotalar nisbati va $\delta$ fazalar farqiga bog'liq bo'ladi.

---

## 📝 Qadamma-qadam Yechilgan Amaliy Misollar

### 1-misol: Sikloidaga o'tkazilgan urinma va normal tenglamasi
Sikloida berilgan:

$$
x = 2(t - \sin t), \quad y = 2(1 - \cos t)
$$

Uning $t = \frac{\pi}{2}$ parametr qiymatiga mos nuqtasidagi urinmasi va normali tenglamasini tuzing.

**Yechilishi:**
1. Nuqtaning koordinatalarini topamiz ($t = \pi/2$ da):
   $$x_0 = 2\left(\frac{\pi}{2} - \sin\frac{\pi}{2}\right) = 2\left(\frac{\pi}{2} - 1\right) = \pi - 2$$
   $$y_0 = 2\left(1 - \cos\frac{\pi}{2}\right) = 2(1 - 0) = 2$$
   Demak, nuqta: $M_0(\pi - 2, 2)$.
2. Parametrik hosilalarni hisoblaymiz:
   $$\dot{x} = 2(1 - \cos t), \quad \dot{y} = 2\sin t$$
   $t = \pi/2$ da:
   $$\dot{x}\left(\frac{\pi}{2}\right) = 2(1 - 0) = 2, \quad \dot{y}\left(\frac{\pi}{2}\right) = 2(1) = 2$$
3. Burchak koeffitsiyenti:
   $$k = y'_x = \frac{\dot{y}}{\dot{x}} = \frac{2}{2} = 1$$
4. Urinma tenglamasi: $y - y_0 = k(x - x_0)$:
   $$y - 2 = 1 \cdot (x - (\pi - 2)) \implies y = x - \pi + 4$$
5. Normal tenglamasi: $y - y_0 = -\frac{1}{k}(x - x_0)$:
   $$y - 2 = -1 \cdot (x - (\pi - 2)) \implies y = -x + \pi$$

**Javob:** Urinma: $y = x - \pi + 4$; Normal: $y = -x + \pi$.

---

### 2-misol: Astroida urinmasining ajoyib geometrik xossasi
Astroidaning ($x = R \cos^3 t, y = R \sin^3 t$) ixtiyoriy nuqtasiga o'tkazilgan urinmaning koordinata o'qlari orasida joylashgan kesmasining uzunligi o'zgarmas bo'lib, $R$ ga teng ekanligini isbotlang.

**Yechilishi:**
1. Parametr $t$ bo'yicha hosilalarni topamiz:
   $$\dot{x} = 3R \cos^2 t (-\sin t) = -3R \sin t \cos^2 t$$
   $$\dot{y} = 3R \sin^2 t (\cos t) = 3R \sin^2 t \cos t$$
2. Burchak koeffitsiyenti:
   $$y'_x = \frac{\dot{y}}{\dot{x}} = \frac{3R \sin^2 t \cos t}{-3R \sin t \cos^2 t} = -\frac{\sin t}{\cos t} = -\tan t$$
3. Nuqtadagi ($x_0 = R \cos^3 t, y_0 = R \sin^3 t$) urinma tenglamasi:
   $$y - R \sin^3 t = -\frac{\sin t}{\cos t} (x - R \cos^3 t)$$
   Ikkala tomonni $\cos t$ ga ko'paytiramiz:
   $$y \cos t - R \sin^3 t \cos t = -x \sin t + R \cos^3 t \sin t$$
   $$x \sin t + y \cos t = R \sin t \cos t (\cos^2 t + \sin^2 t) = R \sin t \cos t$$
4. O'qlar bilan kesishish nuqtalarini topamiz:
   - $Ox$ o'qi bilan kesishish ($y = 0$): $x_A \sin t = R \sin t \cos t \implies x_A = R \cos t$, nuqta $A(R \cos t, 0)$.
   - $Oy$ o'qi bilan kesishish ($x = 0$): $y_B \cos t = R \sin t \cos t \implies y_B = R \sin t$, nuqta $B(0, R \sin t)$.
5. $AB$ kesma uzunligini hisoblaymiz:
   $$|AB| = \sqrt{(x_A - 0)^2 + (0 - y_B)^2} = \sqrt{R^2 \cos^2 t + R^2 \sin^2 t} = \sqrt{R^2} = R$$

> 💡 **Geometrik mo''jiza:** Qaysi nuqtadan urinma o'tkazmang, o'qlar orasidagi kesma uzunligi har doim bir xil $R$ ga teng bo'lib qoladi! (Uzunligi $R$ bo'lgan narvon devor bo'ylab sirpanib tushganda unga urinuvchi chiziq astroida bo'ladi).

**Javob:** Isbotlandi ($|AB| = R$).

---

### 3-misol: Parametrik berilgan funksiyaning ikkinchi hosilasi
Ushbu funksiyaning $y''_{xx}$ ikkinchi tartibli hosilasini hisoblang:

$$
\begin{cases} x = \ln t \\ y = t^3 + 2t \end{cases} \quad (t > 0)
$$

**Yechilishi:**
1. Birinchi tartibli hosilalarni topamiz:
   $$\dot{x} = \frac{1}{t}, \quad \dot{y} = 3t^2 + 2$$
2. Birinchi hosila $y'_x$:
   $$y'_x = \frac{\dot{y}}{\dot{x}} = \frac{3t^2 + 2}{1/t} = t(3t^2 + 2) = 3t^3 + 2t$$
3. Ikkinchi tartibli hosila formulasini qo'llaymiz:
   $$y''_{xx} = \frac{(y'_x)'_t}{\dot{x}}$$
4. $(y'_x)'_t$ ni hisoblaymiz:
   $$(3t^3 + 2t)'_t = 9t^2 + 2$$
5. $\dot{x} = 1/t$ ga bo'lamiz:
   $$y''_{xx} = \frac{9t^2 + 2}{1/t} = t(9t^2 + 2) = 9t^3 + 2t$$

**Javob:** $y''_{xx} = 9t^3 + 2t$.

---

### 4-misol: Lissaju figurasi tahlili
Ushbu Lissaju figurasi berilgan:

$$
x = \sin t, \quad y = \sin 2t \quad (0 \le t \le 2\pi)
$$

Egri chiziqning o'z-o'zini kesish nuqtasi (tugun nuqtasi)ni va shaklini aniqlang.

**Yechilishi:**
1. Trigonometrik ayniyatdan foydalanib parametrni yo'qotishga harakat qilamiz:
   $$y = \sin 2t = 2 \sin t \cos t = 2x \cos t$$
2. $\cos t = \pm\sqrt{1 - \sin^2 t} = \pm\sqrt{1 - x^2}$ bo'lgani sababli:
   $$y = \pm 2x \sqrt{1 - x^2} \implies y^2 = 4x^2(1 - x^2)$$
3. O'z-o'zini kesish nuqtasida bitta $(x, y)$ juftligiga har xil $t$ lar to'g'ri kelishi kerak:
   - $x = 0 \implies \sin t = 0 \implies t = 0, \pi, 2\pi$.
   - Bu nuqtalarda $y = \sin 2t = 0$.
   Demak, egri chiziq koordinatalar boshi $(0, 0)$ dan ikki marta (biri $t=0$, ikkinchisi $t=\pi$ da) o'tadi!
4. Ushbu chiziq gorizontal yotgan **"8" (cheksizlik)** shaklidagi silliq yopiq trayektoriyadir.

**Javob:** Egri chiziq sakkizlik shakliga ega, o'z-o'zini kesish nuqtasi $(0, 0)$.

---

## ⚠️ Talabalar Ko'p Yo'l Qo'yadigan Xatolar (Tipik tuzoqlar)

1. **Ikkinchi hosilani alohida hosilalar nisbati deb o'ylash:**
   > ⛔ **Qo'pol xato:** $y''_{xx} = \frac{\ddot{y}}{\ddot{x}}$.
   > 
   > 💡 **Sabab:** Bu eng ko'p uchraydigan talabalar xatosidir! Ikkinchi hosila $y'_x$ ning $x$ bo'yicha hosilasidir, shuning uchun maxrajda doimo $\dot{x}^3$ bo'ladi: $y''_{xx} = \frac{\ddot{y}\dot{x} - \dot{y}\ddot{x}}{\dot{x}^3}$.

2. **Parametr chegaralarini unutish:**
   Parametrik egri chiziqlarda parametr $t$ ko'pincha cheklangan oraliqda bo'ladi (masalan, $t \in [0, 2\pi]$). Parametrni yo'qotib Dekart tenglamasiga o'tganda (masalan, $x = \cos t, y = \sin t \implies x^2 + y^2 = 1$), cheklovlar hisobga olinmasa butun egri chiziq o'rniga uning faqat bir bo'lagi yoki aksincha ortiqcha shoxlari paydo bo'lib qolishi mumkin.

3. **Urinma burchak koeffitsiyentida $\dot{x}$ va $\dot{y}$ o'rnini almashtirib qo'yish:**
   Doimo $k = \frac{\dot{y}}{\dot{x}}$ (ordinata hosilasi suratda, abssissa hosilasi maxrajda)!

---

## 🎯 Mustaqil Yechish Uchun Masalalar

1. $x = t^2 + 1, y = t^3 - 1$ parametrik funksiyaning $t = 2$ nuqtadagi $y'_x$ hosilasini hisoblang.
2. Sikloida $x = a(t - \sin t), y = a(1 - \cos t)$ ning $t = \pi$ (eng yuqori nuqtasi) dagi ikkinchi hosilasi $y''_{xx}$ ni hisoblang.
3. Parametr $t$ ni yo'qotib, quyidagi egri chiziqning Dekart tenglamasini toping:
   $$x = 3 \cos t, \quad y = 2 \sin t$$
4. Aylana evolventasi $x = R(\cos t + t\sin t), y = R(\sin t - t\cos t)$ ning $t$ bo'yicha $y'_x$ hosilasini toping va uning geometrik ma'nosini ayting.

<details style="margin-top: 1rem; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); cursor: pointer;">
<summary style="font-weight: 700; color: var(--primary);">Mashqlar javoblarini ko'rish</summary>

**1-masala:**
$\dot{x} = 2t = 4$, $\dot{y} = 3t^2 = 12$.
$$y'_x = \frac{12}{4} = 3$$

**2-masala:**
$\dot{x} = a(1 - \cos t)$, $\dot{y} = a\sin t$.
$y'_x = \frac{\sin t}{1 - \cos t} = \cot(t/2)$.
$y''_{xx} = \frac{(\cot(t/2))'_t}{\dot{x}} = \frac{-\frac{1}{2\sin^2(t/2)}}{a(1 - \cos t)} = -\frac{1}{4a \sin^4(t/2)}$.
$t = \pi$ da: $\sin(\pi/2) = 1 \implies y''_{xx} = -\frac{1}{4a}$.

**3-masala:**
$\cos t = x/3, \sin t = y/2 \implies \frac{x^2}{9} + \frac{y^2}{4} = 1$ — yarim o'qlari 3 va 2 bo'lgan ellips.

**4-masala:**
$\dot{x} = R(-\sin t + \sin t + t\cos t) = Rt\cos t$.
$\dot{y} = R(\cos t - \cos t + t\sin t) = Rt\sin t$.
$y'_x = \frac{Rt\sin t}{Rt\cos t} = \tan t$.
Urinma $Ox$ o'qi bilan aynan $t$ burchak hosil qiladi!

</details>

---

## 💡 Xulosa va Imtihon Maslahatlari

- Parametrik differensiallashda eng asosiy formulalar: $y'_x = \frac{\dot{y}}{\dot{x}}$ va $y''_{xx} = \frac{(y'_x)'_t}{\dot{x}}$. Bularni mustahkam yod oling.
- Sikloida va astroida masalalari ko'pincha integrallash (yoy uzunligi, aylanma jism hajmi va yuzi) bo'limlarida ham takrorlanadi. Ularning hosilalarini hozirdan puxta o'zlashtirish kelgusi mavzularda katta ustunlik beradi.
- Imtihonda parametrik chiziq berilsa, parametrni yo'qotishga shoshilmang — ko'p hollarda parametrik shakl Dekart shaklidan ancha ixcham va hisoblashga qulay bo'ladi.
