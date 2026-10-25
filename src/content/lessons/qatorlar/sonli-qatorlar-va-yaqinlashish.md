---
title: "Sonli qatorlar va yaqinlashish tushunchasi"
module: "qatorlar"
order: 1
description: "Cheksiz sonli qatorlar, qismiy yig'indilar, qator yig'indisi, geometrik qator, zaruriy shart, garmonik qator paradoksi va teleskopik qatorlar."
---

## Kirish: Cheksiz ko'p sonlarni qo'shish mumkinmi?

Qadimgi Yunonistonda faylasuf Zenon mashhur aporiyasini aytgan: tez yuguruvchi Axill o'zidan oldinda ketayotgan toshbaqaga hech qachon yeta olmaydi, chunki u toshbaqa bosib o'tgan masofaning yarmiga yetguncha, toshbaqa yana bir oz oldinga siljiydi va bu jarayon cheksiz davom etadi.

Zenon cheksiz ko'p musbat sonlarni qo'shsa doimo cheksizlik hosil bo'ladi deb o'ylagan. Ammo matematikaning **qatorlar nazariyasi** cheksiz ko'p sonlarni qo'shib, chekli bitta aniq songa erishish mumkinligini isbotladi:

$$
\frac{1}{2} + \frac{1}{4} + \frac{1}{8} + \frac{1}{16} + \dots = 1
$$

Bugungi kunda qatorlar kompyuterlarda $\sin x, \cos x, e^x, \ln x$ qiymatlarini hisoblash, differensial tenglamalarni yechish va sun'iy intellekt modellarida eng asosiy matematik vosita hisoblanadi.

---

## 1. Sonli qator ta'rifi

> **Ta'rif:** Cheksiz sonli ketma-ketlik $a_1, a_2, a_3, \dots, a_n, \dots$ hadlarining formal yig'indisi **sonli qator** deyiladi va quyidagicha yoziladi:
>
> 
$$
> \sum_{n=1}^{\infty} a_n = a_1 + a_2 + a_3 + \dots + a_n + \dots
> 
$$
>
> bu yerda $a_n$ — qatorning **umumiy hadi** (formula bilan beriladi).

---

## 2. Qismiy yig'indilar ketma-ketligi va qator yig'indisi ($S$)

Cheksiz ifodaning qiymatini hisoblash uchun uning dastlabki $n$ ta hadi yig'indisini tuzamiz:
- $S_1 = a_1$-$S_2 = a_1 + a_2$-$S_3 = a_1 + a_2 + a_3$-$S_n = a_1 + a_2 + \dots + a_n = \sum_{k=1}^n a_k$ — qatorning **$n$-qismiy yig'indisi**.

> **Yaqinlashish ta'rifi:**
> Agar $n \to \infty$da qismiy yig'indilar ketma-ketligi chekli$S$ limitga ega bo'lsa:
>
> 
$$
> \lim_{n \to \infty} S_n = S
> 
$$
>
> u holda qator **yaqinlashuvchi** deyiladi va $S$ soni ushbu qatorning **yig'indisi** deb ataladi.
>
> Agar limit mavjud bo'lmasa yoki cheksiz ($\pm \infty$) bo'lsa, qator **uzoqlashuvchi** deyiladi (bunday qatorning chekli yig'indisi mavjud emas).

---

## 3. Cheksiz kamayuvchi geometrik qator

Geometrik progressiya hadlaridan tuzilgan qator:
$$
\sum_{n=1}^\infty b_1 q^{n-1} = b_1 + b_1 q + b_1 q^2 + \dots + b_1 q^{n-1} + \dots \quad (b_1 \neq 0)
$$

Qismiy yig'indi: $S_n = \frac{b_1(1 - q^n)}{1 - q}$.
- **Agar $|q| < 1$bo'lsa:**$n \to \infty$da$q^n \to 0$ bo'lib, qator **yaqinlashadi** va uning yig'indisi:
  
$$
  S = \frac{b_1}{1 - q}
  
$$
- **Agar $|q| \ge 1$ bo'lsa:** qator **uzoqlashadi**!

---

## 4. Yaqinlashishning ZARURIY sharti

> **Teorema (Zaruriy shart):** Agar $\sum_{n=1}^\infty a_n$ qator yaqinlashuvchi bo'lsa, uning umumiy hadi albatta nolga intilishi shart:
>
> 
$$
> \lim_{n \to \infty} a_n = 0
> 
$$

### Uzoqlashishning eng tezkor alomati (Natija):
Agar umumiy hadning limiti **nolga teng bo'lmasa** ($\lim_{n \to \infty} a_n \neq 0$) yoki limit umuman mavjud bo'lmasa, qator **100% so'zsiz uzoqlashadi**!
*(Bu alomat orqali ko'plab qatorlarning uzoqlashishini bir soniyada isbotlash mumkin).*

---

## 5. Garmonik qator paradoksi

> ⚠️ **Muhim:** Umumiy hadning nolga intilishi ($\lim a_n = 0$) qatorning yaqinlashishi uchun **yetarli emas!**

Bunga eng yorqin misol — **Garmonik qator**dir:
$$
\sum_{n=1}^\infty \frac{1}{n} = 1 + \frac{1}{2} + \frac{1}{3} + \frac{1}{4} + \dots
$$
Bu yerda $a_n = \frac{1}{n} \to 0$(zaruriy shart bajariladi), ammo shunga qaramasdan garmonik qator **uzoqlashuvchidir** (uning yig'indisi cheksizlik$\infty$ ga teng!).
Chunki uning hadlari nolga yetarlicha tez kamaymaydi.

---

## 6. Teleskopik qatorlar (Yig'indisini aniq topish usuli)

Agar qatorning har bir hadi ikkita ketma-ket hadning ayirmasi shaklida yozilsa, qismiy yig'indidagi barcha oraliq hadlar teleskop singari bir-birini bekor qiladi:

$$
\sum_{n=1}^\infty \frac{1}{n(n+1)} = \sum_{n=1}^\infty \left( \frac{1}{n} - \frac{1}{n+1} \right)
$$
Qismiy yig'indini yozamiz:
$$
S_n = \left( 1 - \frac{1}{2} \right) + \left( \frac{1}{2} - \frac{1}{3} \right) + \left( \frac{1}{3} - \frac{1}{4} \right) + \dots + \left( \frac{1}{n} - \frac{1}{n+1} \right)
$$
Barcha o'rta hadlar qisqarib ketadi, faqat birinchi va eng oxirgi had qoladi:
$$
S_n = 1 - \frac{1}{n+1}
$$
Limit olamiz:
$$
S = \lim_{n \to \infty} \left( 1 - \frac{1}{n+1} \right) = 1 - 0 = 1
$$
Demak, qator yaqinlashadi va uning yig'indisi $1$ ga teng!

---

## 7. Amaliy misollar va batafsil yechimlar

### 1-misol: Uzoqlashish alomatini tekshirish
Qatorning yaqinlashishini tekshiring:
$$
\sum_{n=1}^\infty \frac{3n^2 + 1}{2n^2 + 5n}
$$

**Yechilishi:**
Umumiy hadning limitini hisoblaymiz:
$$
\lim_{n \to \infty} a_n = \lim_{n \to \infty} \frac{3n^2 + 1}{2n^2 + 5n} = \frac{3}{2} \neq 0
$$
Umumiy had nolga intilmayapti ($\frac{3}{2} \neq 0$). Yaqinlashishning zaruriy sharti bajarilmadi.
Demak, qator **uzoqlashadi**!

**Javob:** Qator uzoqlashuvchi.

---

### 2-misol: Geometrik qator yig'indisini hisoblash
Qator yig'indisini toping:
$$
\sum_{n=1}^\infty \frac{3}{4^n} = \frac{3}{4} + \frac{3}{16} + \frac{3}{64} + \dots
$$

**Yechilishi:**
Bu geometrik qator bo'lib:
- Birinchi had: $b_1 = \frac{3}{4}$;
- Maxraj: $q = \frac{1}{4}$.
$|q| = \frac{1}{4} < 1$ bo'lgani uchun qator yaqinlashadi.
Yig'indi formulasi:
$$
S = \frac{b_1}{1 - q} = \frac{\frac{3}{4}}{1 - \frac{1}{4}} = \frac{\frac{3}{4}}{\frac{3}{4}} = 1
$$

**Javob:** $S = 1$

---

### 3-misol: Davriy kasrni oddiy kasrga aylantirish
$0.(18) = 0.181818\dots$ cheksiz davriy kasrni oddiy kasr shaklida ifodalang.

**Yechilishi:**
Ifodani cheksiz geometrik qator yig'indisi deb qaraymiz:
$$
0.(18) = \frac{18}{100} + \frac{18}{10000} + \frac{18}{1000000} + \dots
$$
- $b_1 = \frac{18}{100} = 0.18$;
- $q = \frac{1}{100} = 0.01 < 1$.
Yig'indi:
$$
S = \frac{b_1}{1 - q} = \frac{0.18}{1 - 0.01} = \frac{0.18}{0.99} = \frac{18}{99} = \frac{2}{11}
$$

**Javob:** $\frac{2}{11}$

---

### 4-misol: Teleskopik qator
Qator yig'indisini toping:
$$
\sum_{n=1}^\infty \frac{1}{(2n - 1)(2n + 1)}
$$

**Yechilishi:**
Umumiy hadni oddiy kasrlar ayirmasiga ajratamiz:
$$
\frac{1}{(2n - 1)(2n + 1)} = \frac{1}{2} \left( \frac{1}{2n - 1} - \frac{1}{2n + 1} \right)
$$
Dastlabki bir nechta hadlarni yozamiz:
- $n = 1$: $\frac{1}{2}(1 - \frac{1}{3})$-$n = 2$: $\frac{1}{2}(\frac{1}{3} - \frac{1}{5})$-$n = 3$: $\frac{1}{2}(\frac{1}{5} - \frac{1}{7})$-$n$: $\frac{1}{2}(\frac{1}{2n - 1} - \frac{1}{2n + 1})$

Qo'shganda barcha o'rta hadlar yo'qoladi:
$$
S_n = \frac{1}{2} \left( 1 - \frac{1}{2n + 1} \right)
$$
Limit olamiz:
$$
S = \lim_{n \to \infty} \frac{1}{2} \left( 1 - \frac{1}{2n + 1} \right) = \frac{1}{2}(1 - 0) = \frac{1}{2}
$$

**Javob:** $S = \frac{1}{2}$

---

## ⚠️ Talabalar ko'p yo'l qo'yadigan 3 ta jiddiy xato

1. **"Zaruriy shart bajarilsa, qator yaqinlashadi" deb xulosa qilish:**
   > $\lim a_n = 0$bo'lishi qatorning yaqinlashishiga KAFOLAT BERMAYDI! Garmonik qatorda$\frac{1}{n} \to 0$, lekin u uzoqlashadi. Faqat agar $\lim a_n \neq 0$ bo'lsagina, uzoqlashadi deb aniq aytish mumkin.

2. **Geometrik qatorda birinchi had $b_1$ ni adashtirish:**
   > Agar qator $\sum_{n=0}^\infty q^n$bo'lsa, birinchi had$b_1 = q^0 = 1$. Agar $\sum_{n=1}^\infty q^n$bo'lsa, birinchi had$b_1 = q^1 = q$bo'ladi! Qator yig'indisida$b_1$ qaysi sondan boshlanayotganiga diqqat qiling.

3. **Uzoqlashuvchi qator hadlarini guruhlash:**
   > $1 - 1 + 1 - 1 + 1 - \dots$qatorida hadlarni$(1-1) + (1-1) = 0$yoki$1 - (1-1) - (1-1) = 1$ deb ixtiyoriy guruhlash mumkin emas. Chekli yig'indi mavjud bo'lmagan qatorlarda arifmetik amallar o'z kuchini yo'qotadi.

---

## 💡 Ustozdan maslahat

Qator berilganda har doim 1-qadamda **umumiy hadning limitini** xayolan hisoblab ko'ring:
$\lim_{n \to \infty} a_n$nolga intiladimi? Agar nol chiqmasa (masalan$1$, $\frac{1}{2}$yoki$\infty$), hech qanday Dalamber yoki Koshi alomatlarini qo'llab o'tirmang, darhol: *"Zaruriy shart bajarilmagani sababli qator uzoqlashadi"* deb yozing!

---

## ✍️ Mustaqil yechish uchun mashqlar

1. $\sum_{n=1}^\infty \frac{n}{3n + 1}$ qator yaqinlashadimi yoki uzoqlashadimi?
2. $\sum_{n=1}^\infty \left(\frac{2}{3}\right)^n$ geometrik qatorning yig'indisini toping.
3. $0.(7) = 0.777\dots$ ni cheksiz qator orqali oddiy kasrga aylantiring.
4. $\sum_{n=1}^\infty \frac{1}{n(n+2)}$ qatorning yig'indisini teleskopik usulda hisoblang.

<details style="margin-top: 1rem; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); cursor: pointer;">
<summary style="font-weight: 700; color: var(--primary);">To'liq yechimlar va javoblar</summary>

**1-masala:** $\lim_{n \to \infty} \frac{n}{3n + 1} = \frac{1}{3} \neq 0$. Zaruriy shart bajarilmadi $\implies$ qator uzoqlashadi.

    

**2-masala:** $b_1 = \frac{2}{3}, q = \frac{2}{3}$. $S = \frac{2/3}{1 - 2/3} = \frac{2/3}{1/3} = 2$.

    

**3-masala:** $b_1 = 0.7, q = 0.1$. $S = \frac{0.7}{1 - 0.1} = \frac{0.7}{0.9} = \frac{7}{9}$.

    

**4-masala:** $\frac{1}{n(n+2)} = \frac{1}{2}(\frac{1}{n} - \frac{1}{n+2})$. Qisqargandan so'ng dastlabki ikkita musbat had qoladi: $\frac{1}{2}(1 + \frac{1}{2}) = \frac{1}{2} \cdot \frac{3}{2} = \frac{3}{4}$.

</details>
