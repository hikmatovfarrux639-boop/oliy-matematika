---
title: "Loran qatori va yakkalangan maxsus nuqtalar tasnifi"
description: "Halqada analitik funksiyaning Loran qatori, to'g'ri va bosh qism, bartaraf qilinadigan, qutb va o'ta maxsus nuqtalar."
module: "qatorlar"
order: 13
---

## 📌 Kirish va Fizik/Texnik Mohiyati

Klassik tahlildan ma'lumki, Teylor qatori funksiyani faqat uning analitiklik sohasida, ya'ni hech qanday maxsusliklarga ega bo'lmagan doira ichida darajali qatorga yoyish imkonini beradi. Biroq real fizik maydonlarda (gidrodinamikadagi girdoblar va manbalar, elektrostatikadagi nuqtaviy zaryadlar, tebranish tizimlaridagi rezonans nuqtalari) funksiya ayrim nuqtalarda cheksizlikka aylanadi yoki umuman aniqlanmagan bo'ladi.

Bunday nuqtalar atrofida jarayonni o'rganish uchun Teylor qatorining manfiy darajalarni ham o'z ichiga olgan umumlashtirilishi talab etiladi. Fransuz matematigi va muhandisi Per Alfons Loran (Pierre Alphonse Laurent, 1813–1854) tomonidan kashf etilgan **Loran qatori** funksiyani maxsus nuqta atrofidagi konsentrik halqada to'liq ifodalash va maxsus nuqtalarning tabiatini mikroskopik aniqlikda tasniflash vositasidir.

---

## 📐 Asosiy Nazariya, Qoidalar va Teoremalar

### 1. Loran qatori tushunchasi

> **Loran teoremasi:**
> Agar $f(z)$ funksiya $V = \{z \in \mathbb{C} : r < |z - z_0| < R\}$ halqada bir qiymatli va analitik (golomorf) bo'lsa, u holda ushbu halqada $f(z)$ yagona usul bilan musbat va manfiy darajali qatorga yoyiladi:
> $$f(z) = \sum_{n=-\infty}^{+\infty} c_n (z - z_0)^n$$

Bu qator ikki qism yig'indisidan iborat:
$$f(z) = \underbrace{\sum_{n=0}^{+\infty} c_n (z - z_0)^n}_{\text{To'g'ri qism (Teylor qismi)}} + \underbrace{\sum_{n=1}^{+\infty} \frac{c_{-n}}{(z - z_0)^n}}_{\text{Bosh qism (Asosiy qism)}}$$

Qator koeffitsiyentlari quyidagi integral bilan aniqlanadi:
$$c_n = \frac{1}{2\pi i} \oint_{\Gamma} \frac{f(\zeta)}{(\zeta - z_0)^{n+1}} d\zeta, \quad n \in \mathbb{Z} = \{0, \pm 1, \pm 2, \dots\}$$
bu yerda $\Gamma$ — halqa ichida yotuvchi va $z_0$ nuqtani o'rab oluvchi ixtiyoriy yopiq soat strelkasiga qarshi yo'nalgan kontur.

Amaliyotda koeffitsiyentlar integrallar orqali emas, balki geometrik progressiya yig'indisi:
$$\frac{1}{1 - q} = \sum_{k=0}^{\infty} q^k \quad (|q| < 1)$$
va ma'lum Makloren formulalari ($e^w, \sin w, \cos w, \ln(1+w)$) yordamida topiladi.

---

### 2. Yakkalangan maxsus nuqtalar tasnifi

$z_0$ nuqtaning biror teshilgan atrofi $0 < |z - z_0| < R$ da $f(z)$ analitik bo'lsa, $z_0$ **yakkalangan maxsus nuqta** deyiladi. Maxsus nuqtaning turi Loran qatorining **bosh qismiga** qarab uch toifaga bo'linadi:

1. **Bartaraf qilinadigan (yo'qotiladigan) maxsus nuqta:**
   - Loran qatorida bosh qism umuman mavjud emas ($c_{-n} = 0, \, \forall n \ge 1$):
     $$f(z) = c_0 + c_1(z - z_0) + c_2(z - z_0)^2 + \dots$$
   - **Mezon:** Chekli limit mavjud: $\lim_{z \to z_0} f(z) = A \neq \infty$.

2. **Qutb (Polyus):**
   - Loran qatorining bosh qismida **chekli sondagi** noldan farqli hadlar mavjud:
     $$f(z) = \frac{c_{-m}}{(z - z_0)^m} + \dots + \frac{c_{-1}}{z - z_0} + \sum_{n=0}^{\infty} c_n (z - z_0)^n \quad (c_{-m} \neq 0)$$
     Bu yerda $m \in \mathbb{N}$ soni **qutbning tartibi** deyiladi. $m=1$ bo'lsa — *oddiy qutb*.
   - **Mezon:** Funksiya cheksizlikka intiladi: $\lim_{z \to z_0} f(z) = \infty$.

3. **O'ta (muhim) maxsus nuqta:**
   - Loran qatorining bosh qismida **cheksiz ko'p** noldan farqli manfiy darajali hadlar mavjud.
   - **Mezon:** $\lim_{z \to z_0} f(z)$ mavjud emas (yo'nalishga qarab har xil qiymatga intiladi).
   - *Soxotskiy-Veyershtrass teoremasi:* O'ta maxsus nuqtaning ixtiyoriy atrofida funksiya har qanday kompleks songa istalgancha yaqinlashadi.

---

## 📝 Qadamma-qadam Yechilgan Amaliy Misollar

### 1-misol: Halqalarda Loran qatoriga yoyish
$$f(z) = \frac{1}{(z - 1)(z - 2)}$$
funksiyani $z_0 = 0$ nuqta atrofida barcha mumkin bo'lgan konsentrik halqalarda Loran qatoriga yoying.

**Yechish:**
1. Maxsus nuqtalar: $z = 1$ va $z = 2$. Ular markazi $z=0$ da bo'lgan uchta sohani ajratadi:
   - I soha: $|z| < 1$ (doira);
   - II soha: $1 < |z| < 2$ (halqa);
   - III soha: $|z| > 2$ (tashqi soha).
2. Dastlab funksiyani oddiy kasrlarga ajratamiz:
   $$\frac{1}{(z - 1)(z - 2)} = \frac{1}{z - 2} - \frac{1}{z - 1}$$

3. **II soha ($1 < |z| < 2$) uchun yoyilma:**
   - $1 < |z| \implies |\frac{1}{z}| < 1$. Shuning uchun ikkinchi kasrdan $z$ ni chiqaramiz:
     $$-\frac{1}{z - 1} = -\frac{1}{z(1 - \frac{1}{z})} = -\frac{1}{z} \sum_{n=0}^{\infty} \frac{1}{z^n} = -\sum_{n=1}^{\infty} \frac{1}{z^n}$$
   - $|z| < 2 \implies |\frac{z}{2}| < 1$. Shuning uchun birinchi kasrdan $-2$ ni chiqaramiz:
     $$\frac{1}{z - 2} = -\frac{1}{2(1 - \frac{z}{2})} = -\frac{1}{2} \sum_{n=0}^{\infty} \left(\frac{z}{2}\right)^n = -\sum_{n=0}^{\infty} \frac{z^n}{2^{n+1}}$$
   - Birlashtiramiz:
     $$f(z) = -\sum_{n=1}^{\infty} \frac{1}{z^n} - \sum_{n=0}^{\infty} \frac{z^n}{2^{n+1}}$$

4. **III soha ($|z| > 2$) uchun yoyilma:**
   Bu yerda $|\frac{1}{z}| < 1$ va $|\frac{2}{z}| < 1$:
   $$\frac{1}{z - 2} = \frac{1}{z(1 - \frac{2}{z})} = \sum_{n=0}^{\infty} \frac{2^n}{z^{n+1}} = \sum_{n=1}^{\infty} \frac{2^{n-1}}{z^n}$$
   $$f(z) = \sum_{n=1}^{\infty} \frac{2^{n-1} - 1}{z^n} = \frac{1}{z^2} + \frac{3}{z^3} + \frac{7}{z^4} + \dots$$

**Javob:** $1 < |z| < 2$ halqada: $f(z) = -\sum_{n=1}^\infty \frac{1}{z^n} - \sum_{n=0}^\infty \frac{z^n}{2^{n+1}}$.

---

### 2-misol: Bartaraf qilinadigan maxsus nuqta
$$f(z) = \frac{1 - \cos z}{z^2}$$
funksiyaning $z_0 = 0$ nuqta atrofidagi Loran qatorini toping va maxsuslik turini aniqlang.

**Yechish:**
1. $\cos z$ funksiyaning ma'lum Makloren qatoridan foydalanamiz:
   $$\cos z = 1 - \frac{z^2}{2!} + \frac{z^4}{4!} - \frac{z^6}{6!} + \dots$$
2. Surati:
   $$1 - \cos z = \frac{z^2}{2!} - \frac{z^4}{4!} + \frac{z^6}{6!} - \dots$$
3. $z^2$ ga hadma-had bo'lamiz ($z \neq 0$):
   $$f(z) = \frac{1}{z^2}\left( \frac{z^2}{2!} - \frac{z^4}{4!} + \frac{z^6}{6!} - \dots \right) = \frac{1}{2} - \frac{z^2}{24} + \frac{z^4}{720} - \dots$$
4. Qator tahlili: Yoyilmada $z$ ning manfiy darajalari umuman yo'q (bosh qism mavjud emas).
   Limit: $\lim_{z \to 0} f(z) = \frac{1}{2}$.

**Javob:** $f(z) = \sum_{n=1}^\infty (-1)^{n-1} \frac{z^{2n-2}}{(2n)!}$; $z_0 = 0$ — **bartaraf qilinadigan maxsus nuqta**.

---

### 3-misol: Qutb nuqtasi va uning tartibi
$$f(z) = \frac{e^z}{(z - 1)^3}$$
funksiyaning $z_0 = 1$ nuqta atrofidagi Loran qatorini tuzing va maxsuslik turini aniqlang.

**Yechish:**
1. O'zgaruvchini almashtiramiz: $w = z - 1 \implies z = 1 + w$.
2. Suratdagi eksponentani yoyamiz:
   $$e^z = e^{1 + w} = e \cdot e^w = e \left( 1 + w + \frac{w^2}{2!} + \frac{w^3}{3!} + \frac{w^4}{4!} + \dots \right)$$
3. $w^3 = (z - 1)^3$ ga bo'lamiz:
   $$f(z) = \frac{e}{w^3} \left( 1 + w + \frac{w^2}{2} + \frac{w^3}{6} + \frac{w^4}{24} + \dots \right)$$
   $$f(z) = \frac{e}{(z - 1)^3} + \frac{e}{(z - 1)^2} + \frac{e}{2(z - 1)} + \frac{e}{6} + \frac{e(z - 1)}{24} + \dots$$
4. Qator tahlili:
   - Bosh qism: $\frac{e}{(z - 1)^3} + \frac{e}{(z - 1)^2} + \frac{e}{2(z - 1)}$ (uchta had).
   - Eng yuqori manfiy daraja: $-3$.
   - Shuning uchun $z_0 = 1$ nuqta **3-tartibli qutb** hisoblanadi.

**Javob:** $z_0 = 1$ — **3-tartibli qutb** (pole of order 3).

---

### 4-misol: O'ta maxsus nuqta
$$f(z) = z^3 \cos\left(\frac{1}{z}\right)$$
funksiyaning $z_0 = 0$ nuqta atrofidagi Loran qatorini yozing.

**Yechish:**
1. Kosinus qatoridan foydalanamiz ($\cos w = \sum_{k=0}^\infty (-1)^k \frac{w^{2k}}{(2k)!}$):
   $$\cos\left(\frac{1}{z}\right) = 1 - \frac{1}{2! z^2} + \frac{1}{4! z^4} - \frac{1}{6! z^6} + \dots$$
2. $z^3$ ga ko'paytiramiz:
   $$f(z) = z^3 \left( 1 - \frac{1}{2 z^2} + \frac{1}{24 z^4} - \frac{1}{720 z^6} + \dots \right)$$
   $$f(z) = z^3 - \frac{1}{2}z + \frac{1}{24 z} - \frac{1}{720 z^3} + \frac{1}{40320 z^5} - \dots$$
3. Tahlil:
   - To'g'ri qism: $z^3 - \frac{1}{2}z$.
   - Bosh qism: $\frac{1}{24 z} - \frac{1}{720 z^3} + \dots$ (cheksiz ko'p manfiy toq darajalar).
   - Cheksiz ko'p manfiy had bo'lganligi uchun $z_0 = 0$ — **o'ta maxsus nuqta**.

**Javob:** $f(z) = z^3 - \frac{z}{2} + \sum_{k=2}^\infty \frac{(-1)^k}{(2k)! z^{2k-3}}$; $z_0 = 0$ — **o'ta maxsus nuqta** (essential singularity).

---

## ⚠️ Talabalar Ko'p Yo'l Qo'yadigan Xatolar

1. **Halqa shartini inobatga olmasdan geometrik progressiyani yoyish:**
   $|z| > 1$ bo'lganda $\frac{1}{1-z} = 1 + z + z^2 + \dots$ deb yozish qo'pol xatodir! Chunki bu qator uzoqlashadi. $|z| > 1$ sohada albatta $\frac{1}{z}$ ni qavsdan tashqariga chiqarish kerak.
2. **Qutb tartibini noto'g'ri aniqlash:**
   Masalan, $f(z) = \frac{\sin z}{z^4}$ funksiyada maxrajda $z^4$ turgani uchun talabalar ko'pincha "4-tartibli qutb" deb xulosa qilishadi. Aslida $\sin z = z - \frac{z^3}{6} + \dots$ bo'lgani sababli, $f(z) = \frac{1}{z^3} - \frac{1}{6z} + \dots$ bo'lib, bu **3-tartibli qutbdir**!
3. **Bosh qism va to'g'ri qismni chalkashtirish:**
   $z$ ning manfiy darajalari ($z^{-1}, z^{-2}, \dots$) **bosh qism**, musbat va nol darajalari ($z^0, z^1, z^2, \dots$) esa **to'g'ri qism** hisoblanadi.
4. **Cheksizlikdagi maxsus nuqta bilan adashtirish:**
   $z = \infty$ nuqtada funksiyaning xarakterini aniqlash uchun $z = \frac{1}{w}$ almashtirishi kiritilib, $w = 0$ nuqta atrofida tahlil qilinadi. Cheksizlikda to'g'ri va bosh qismlar roli o'rin almashadi!

---

## 🎯 Mustaqil Yechish Uchun Masalalar

1. $f(z) = \frac{1}{z(1 - z)}$ funksiyaning $0 < |z| < 1$ va $|z| > 1$ sohalardagi Loran qatorlarini toping.
   *Javob:* $0 < |z| < 1$ da: $\frac{1}{z} + \sum_{n=0}^\infty z^n$; $|z| > 1$ da: $-\sum_{n=2}^\infty \frac{1}{z^n}$.

2. $f(z) = \frac{e^z - 1 - z}{z^2}$ funksiyaning $z_0 = 0$ nuqtadagi maxsuslik turini aniqlang.
   *Javob:* Bartaraf qilinadigan maxsus nuqta ($\lim_{z \to 0} f(z) = 1/2$).

3. $f(z) = \frac{1}{(z + 2)^4}$ funksiyaning $z_0 = -2$ nuqtadagi maxsuslik turini va Loran qatorini aniqlang.
   *Javob:* 4-tartibli qutb; qator aynan bitta bosh haddan iborat: $\frac{1}{(z+2)^4}$.

4. $f(z) = e^{1/z^2}$ funksiyaning $z_0 = 0$ nuqta atrofidagi Loran qatorini tuzing va turini ko'rsating.
   *Javob:* $\sum_{n=0}^\infty \frac{1}{n! z^{2n}}$; o'ta maxsus nuqta.

5. $f(z) = \frac{z^2 - 1}{z - 1}$ funksiyaning $z_0 = 1$ dagi maxsuslik turini tekshiring.
   *Javob:* $f(z) = z + 1 = 2 + (z - 1)$, bartaraf qilinadigan maxsus nuqta.

---

## 💡 Xulosa va Imtihon Maslahatlari

- Maxsus nuqtaning turini bilish keyingi mavzu — **Chegirmalar nazariyasida** integralni bir zumda hisoblash imkonini beradi. Xususan, Loran qatoridagi $c_{-1}$ koeffitsiyenti chegirma deb ataladi.
- Maxsuslik turini tekshirish uchun ko'pincha limit mezonidan foydalanish eng tezkor yo'ldir: limit chekli bo'lsa — bartaraf qilinadigan, cheksiz bo'lsa — qutb, limit mavjud bo'lmasa — o'ta maxsus nuqta.
- Loran qatoriga yoyishda hech qachon qiyin integral formulalarini hisoblamang: har doim ma'lum Makloren formulalari va geometrik progressiya yig'indisidan foydalaning.
