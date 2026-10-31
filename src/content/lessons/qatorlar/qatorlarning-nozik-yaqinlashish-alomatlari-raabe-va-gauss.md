---
title: "Musbat qatorlarning nozik yaqinlashish alomatlari: Raabe, Gauss va Logarifmik alomatlar"
module: "qatorlar"
order: 12
description: "Dalamber alomati noaniqlik (D = 1) berganda nima qilish kerak? Raabe alomati, Gauss alomati, Logarifmik alomat, ikki karrali faktorial (2n)!! qatnashgan murakkab qatorlarning yaqinlashishini tekshirish."
---

## Kirish: Dalamber alomati ojiz qolganda nima qilish kerak?

Musbat hadli sonli qatorlarni tekshirishda talabalarning eng sevimli quroli bu **Dalamber alomati** hisoblanadi:
$$D = \lim_{n \to \infty} \frac{a_{n+1}}{a_n}$$
Agar $D < 1$ bo'lsa — qator yaqinlashadi, $D > 1$ bo'lsa — uzoqlashadi.

Ammo talabalar eng ko'p vahimaga tushadigan holat — bu **$D = 1$ chiqib qolishidir**! Dalamber alomati bu holatda hech qanday javob bermaydi (alomat noaniqlik beradi). Ayniqsa, hadlarda faktoriallar, darajalar va ko'paytmalar aralashib kelgan, lekin qisqargandan so'ng limit 1 ga teng bo'lib qoladigan qatorlar imtihonlarda "tuzoq savol" sifatida beriladi.

Aynan shunday nozik holatlarni aniqlash uchun matematikada **yuqori sezgirlikka ega bo'lgan nozik alomatlar** ishlab chiqilgan:
1. **Raabe alomati** (Joseph Ludwig Raabe)
2. **Gauss alomati** (Carl Friedrich Gauss)
3. **Logarifmik alomat**

---

## 1. Raabe alomati (Priznak Raabe)

Raabe alomati Dalamber nisbati $\frac{a_n}{a_{n+1}}$ ning 1 dan qanchalik tez uzoqlashishini o'lchaydi.

> **Raabe teoremasi:**
> Musbat hadli $\sum a_n$ qatori uchun quyidagi limitni hisoblaymiz:
> $$R = \lim_{n \to \infty} n \left( \frac{a_n}{a_{n+1}} - 1 \right)$$
> U holda:
> 1. Agar **$R > 1$** bo'lsa — qator **yaqinlashadi**;
> 2. Agar **$R < 1$** bo'lsa — qator **uzoqlashadi**;
> 3. Agar **$R = 1$** bo'lsa — Raabe alomati ham noaniq bo'lib qoladi (Gauss alomatiga o'tiladi).

*(E'tibor bering: Dalamberda $\frac{a_{n+1}}{a_n}$ olingan bo'lsa, Raabeda **teskarisi** $\frac{a_n}{a_{n+1}}$ olinadi! Shuning uchun bu yerda 1 dan katta bo'lsa yaqinlashadi!)*

---

## 2. Gauss alomati (Eng qudratli universal alomat)

Gauss alomati Raabe alomatidan ham kuchliroq bo'lib, u hattoki $R = 1$ bo'lgan eng o'jar holatlarda ham qat'iy va uzil-kesil javob beradi.

> **Gauss teoremasi:**
> Agar ketma-ket hadlar nisbatini $n \to \infty$ da quyidagi asimptotik ko'rinishda yoyish mumkin bo'lsa:
> $$\frac{a_n}{a_{n+1}} = \lambda + \frac{\mu}{n} + \frac{\theta_n}{n^{1+\varepsilon}}, \quad (\varepsilon > 0, \; |\theta_n| < M)$$
> U holda:
> 1. Agar **$\lambda > 1$** bo'lsa — qator **yaqinlashadi**;
> 2. Agar **$\lambda < 1$** bo'lsa — qator **uzoqlashadi**;
> 3. Agar **$\lambda = 1$** bo'lsa (Dalamber $D=1$ bergan holat!), taqdirni **$\mu$ koeffitsiyenti** hal qiladi:
>    - Agar **$\mu > 1$** bo'lsa — qator **yaqinlashadi**;
>    - Agar **$\mu \le 1$** bo'lsa — qator **uzoqlashadi**!

Gauss alomatining tengsiz qudrati shundaki, u **$\mu = 1$ bo'lganda ham noaniqlik qoldirmaydi** — uzoqlashadi deb qat'iy hukm chiqaradi!

---

## 3. Ikki karrali faktoriallar tushunchasi ($(2n)!!$ va $(2n-1)!!$)

Oliy matematika darslarida va ayniqsa Raabe/Gauss misollarida quyidagi belgilar tez-tez uchraydi:
- **Juft sonlar ko'paytmasi:**
  $$(2n)!! = 2 \cdot 4 \cdot 6 \dots (2n) = 2^n \cdot n!$$
- **Toq sonlar ko'paytmasi:**
  $$(2n-1)!! = 1 \cdot 3 \cdot 5 \dots (2n-1) = \frac{(2n)!}{2^n \cdot n!}$$

---

## 4. To'liq yechilgan namunaviy misollar

### 1-Misol (Raabe alomatiga klassik imtihon masalasi):
Quyidagi qatorning yaqinlashishini tekshiring:
$$\sum_{n=1}^\infty \frac{(2n-1)!!}{(2n)!!} \cdot \frac{1}{2n+1} = \frac{1}{2} \cdot \frac{1}{3} + \frac{1 \cdot 3}{2 \cdot 4} \cdot \frac{1}{5} + \frac{1 \cdot 3 \cdot 5}{2 \cdot 4 \cdot 6} \cdot \frac{1}{7} + \dots$$

**Yechish:**
1. Umumiy had:
   $$a_n = \frac{(2n-1)!!}{(2n)!! (2n+1)}$$
2. Keyingi had $a_{n+1}$:
   $$a_{n+1} = \frac{(2n+1)!!}{(2n+2)!! (2n+3)} = \frac{(2n-1)!! \cdot (2n+1)}{(2n)!! \cdot (2n+2) \cdot (2n+3)}$$
3. Dastlab Dalamber nisbatini tekshiramiz:
   $$\frac{a_{n+1}}{a_n} = \frac{(2n+1) (2n+1)}{(2n+2)(2n+3)} = \frac{4n^2 + 4n + 1}{4n^2 + 10n + 6}$$
   $$\lim_{n \to \infty} \frac{a_{n+1}}{a_n} = \lim_{n \to \infty} \frac{4n^2 + 4n + 1}{4n^2 + 10n + 6} = \frac{4}{4} = 1$$
   **Dalamber alomati noaniqlik berdi ($D = 1$)!**

4. Endi **Raabe alomatini** ishga solamiz:
   $$\frac{a_n}{a_{n+1}} = \frac{4n^2 + 10n + 6}{4n^2 + 4n + 1}$$
   $$\frac{a_n}{a_{n+1}} - 1 = \frac{(4n^2 + 10n + 6) - (4n^2 + 4n + 1)}{4n^2 + 4n + 1} = \frac{6n + 5}{4n^2 + 4n + 1}$$
5. Raabe limitini hisoblaymiz:
   $$R = \lim_{n \to \infty} n \left( \frac{a_n}{a_{n+1}} - 1 \right) = \lim_{n \to \infty} \frac{n(6n + 5)}{4n^2 + 4n + 1} = \lim_{n \to \infty} \frac{6n^2 + 5n}{4n^2 + 4n + 1} = \frac{6}{4} = \frac{3}{2} = 1.5$$
6. **Xulosa:**
   $$R = 1.5 > 1$$
   Raabe alomatiga ko'ra, berilgan qator **YAQINLASHUVCHIDIR**!

---

### 2-Misol (Gauss alomatiga qiyin misol):
Quyidagi gipergeometrik qatorning yaqinlashishini tekshiring:
$$\sum_{n=1}^\infty \left[ \frac{(2n-1)!!}{(2n)!!} \right]^2$$

**Yechish:**
1. Nisbatni tuzamiz:
   $$\frac{a_n}{a_{n+1}} = \left[ \frac{(2n-1)!!}{(2n)!!} \cdot \frac{(2n+2)!!}{(2n+1)!!} \right]^2 = \left[ \frac{2n+2}{2n+1} \right]^2 = \frac{4n^2 + 8n + 4}{4n^2 + 4n + 1}$$
2. Cheksizlikdagi limit:
   $$\lambda = \lim_{n \to \infty} \frac{a_n}{a_{n+1}} = 1$$
3. Kasrni butun qismini ajratib, $1/n$ darajalari bo'yicha yoyamiz (burchakli bo'lish):
   $$\frac{4n^2 + 8n + 4}{4n^2 + 4n + 1} = 1 + \frac{4n + 3}{4n^2 + 4n + 1} = 1 + \frac{4n(1 + \frac{3}{4n})}{4n^2(1 + \frac{1}{n} + \frac{1}{4n^2})} = 1 + \frac{1}{n} \cdot \frac{1 + \frac{3}{4n}}{1 + \frac{1}{n} + \dots}$$
   Taylor yoyilmasi bo'yicha:
   $$\frac{a_n}{a_{n+1}} = 1 + \frac{1}{n} + O\left(\frac{1}{n^2}\right)$$
4. Gauss formulasi bilan taqqoslaymiz ($\frac{a_n}{a_{n+1}} = \lambda + \frac{\mu}{n} + \dots$):
   - $\lambda = 1$
   - $\mu = 1$
5. Gauss teoremasiga ko'ra, agar $\lambda = 1$ va $\mu \le 1$ bo'lsa — qator **UZOQLASHUVCHI** bo'ladi!
   *(Eslatma: bu yerda Raabe alomati hisoblansa $R = 1$ chiqib, javob bera olmas edi, lekin Gauss alomati osonlik bilan qatorning uzoqlashuvchi ekanini isbotladi!)*

---

## ⚠️ Talabalar eng ko'p yo'l qo'yadigan xatolar va tuzoqlar

1. **Raabe alomatida nisbat indekslarini adashtirish:**
   Dalamberda suratda $a_{n+1}$ turadi, Raabeda esa suratda **$a_n$** turadi ($\frac{a_n}{a_{n+1}}$). Agar Dalamberdek olib qo'ysangiz, natija manfiy chiqib, butunlay teskari xulosa qilasiz!
2. **Koshi integral alomati bilan almashtirib yuborish:**
   Faktorial qatnashgan qatorlarni integrallab bo'lmaydi (chunki $x!$ elementar funksiya emas). Shuning uchun faktorialli qatorlarda Dalamber $D=1$ bersa, yagona to'g'ri yo'l — Raabe yoki Gauss alomatidir.
3. **Qatorning zaruriy shartini tekshirmaslik:**
   Agar $\lim_{n \to \infty} a_n \neq 0$ bo'lsa, hech qanday Raabe yoki Gauss kerak emas — qator darhol uzoqlashadi!

---

## ✏️ Mustaqil yechish uchun amaliy mashqlar va javoblar

1. $\sum_{n=1}^\infty \frac{n! e^n}{n^n}$ qatori uchun Dalamber limitini hisoblang.
   *Javob:* $\lim \frac{a_{n+1}}{a_n} = \lim \frac{e}{(1 + 1/n)^n} = \frac{e}{e} = 1$ (Dalamber ojiz).
2. Yuqoridagi qatorni Raabe alomati bilan tekshiring.
   *Javob:* $R = 0.5 < 1 \implies$ Qator uzoqlashadi.
3. $\sum \frac{(2n-1)!!}{(2n)!!} \cdot \frac{1}{n^2}$ qatorining yaqinlashishini aniqlang.
   *Javob:* Yaqinlashuvchi ($R > 1$).
