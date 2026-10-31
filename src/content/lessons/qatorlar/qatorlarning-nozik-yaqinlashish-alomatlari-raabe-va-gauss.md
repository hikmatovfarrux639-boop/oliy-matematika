---
title: "Musbat qatorlarning nozik yaqinlashish alomatlari: Raabe, Gauss va Logarifmik alomatlar"
module: "qatorlar"
order: 12
description: "Dalamber alomati noaniqlik (D = 1) berganda nima qilish kerak? Raabe alomati, Gauss alomati, Logarifmik alomat, ikki karrali faktorial (2n)!! qatnashgan murakkab qatorlarning yaqinlashishini tekshirish."
---

## 📌 Kirish va Geometrik/Fizik Mohiyat

Musbat hadli sonli qatorlar $\sum a_n$ nazariyasida talabalar va muhandislarning eng birinchi qo'llaydigan quroli — bu **Dalamber (d'Alembert) alomatidir**:
$$
D = \lim_{n \to \infty} \frac{a_{n+1}}{a_n}
$$
Agar $D < 1$ bo'lsa, qator yaqinlashadi; agar $D > 1$ bo'lsa, qator uzoqlashadi.

Ammo talabalar eng ko'p to'qnash keladigan va ojiz qoladigan holat — bu **$D = 1$ chiqib qolishidir**! Bu holatda Dalamber alomati qatorning taqdiri haqida hech qanday ma'lumot bera olmaydi (noaniqlik holati).

### Nima uchun Dalamber alomati $D = 1$ bo'lganda ojiz qoladi?
Dalamber alomati berilgan qatorni mohiyatan **geometrik progressiya** $\sum q^n$ bilan taqqoslaydi.
- Agar hadlar kamayish tezligi geometrik progressiyadan tezroq yoki unga teng bo'lsa ($q < 1$), qator yaqinlashadi.
- Biroq, ko'plab amaliy qatorlar geometrik progressiyaga nisbatan ancha sekin kamayadi. Masalan, umumiy Dirixle (umumlashgan garmonik) qatori:
  $$
  \sum_{n=1}^\infty \frac{1}{n^p}
  $$
  Ushbu qator uchun Dalamber nisbatini hisoblasak:
  $$
  \lim_{n \to \infty} \frac{a_{n+1}}{a_n} = \lim_{n \to \infty} \frac{n^p}{(n + 1)^p} = \lim_{n \to \infty} \left( \frac{n}{n + 1} \right)^p = 1
  $$
  Ko'rib turibmizki, $p = 2$ bo'lganda qator yaqinlashadi, $p = 1$ bo'lganda esa uzoqlashadi. Lekin ikkala holatda ham $D = 1$ chiqadi! Ya'ni Dalamber alomati darajali kamayish tezligini geometrik tezlikdan ajrata olmaydi.

### Fizik va Matematik Mohiyat
Nazariy fizikada, xususan, kvant mexanikasida (zarralarning energetik sathlarini buzilishlar nazariyasi orqali hisoblashda), optikada (Gyuygens-Frenel difraksiyasi) va elektrodinamikada yechimlar ko'pincha gipergeometrik qatorlar orqali ifodalanadi. Bunday qatorlarning umumiy hadlarida ikki karrali faktoriallar $(2n)!!$ va murakkab ko'paytmalar qatnashadi. Ularni tekshirishda Dalamber alomati har doim $D = 1$ beradi.

Aynan shunday "nozik" holatlarni aniq hal qilish uchun matematik analizda **ikkinchi darajali nozik alomatlar** — **Raabe**, **Gauss** va **Logarifmik (Bertran)** alomatlari ishlab chiqilgan.

---

## 📐 Asosiy Nazariya, Qoidalar va Teoremalar

### 1. Raabe alomati (Joseph Ludwig Raabe, 1832)

Raabe alomati Dalamber nisbatining 1 ga intilish tezligini $1/n$ tartibida o'rganadi.

> **Teorema (Raabe alomati):**
> Musbat hadli $\sum_{n=1}^\infty a_n$ ($a_n > 0$) qator berilgan bo'lsin. Agar quyidagi chekli yoki cheksiz limit mavjud bo'lsa:
> $$
> R = \lim_{n \to \infty} n \left( \frac{a_n}{a_{n+1}} - 1 \right)
> $$
> U holda:
> 1. Agar **$R > 1$** bo'lsa, qator **yaqinlashadi**.
> 2. Agar **$R < 1$** bo'lsa, qator **uzoqlashadi**.
> 3. Agar **$R = 1$** bo'lsa, alomat yana **noaniqlik** beradi (qo'shimcha tekshirish zarur).

> [!IMPORTANT]
> **Diqqat qiling:** Raabe alomatida Dalamberdagi $\frac{a_{n+1}}{a_n}$ nisbat emas, balki uning teskarisi — **$\frac{a_n}{a_{n+1}}$** olinadi! Shuning uchun yaqinlashish sharti $R > 1$ bo'ladi ($R < 1$ emas).

#### Isbotining g'oyasi:
Dirixle qatori $b_n = \frac{1}{n^p}$ bilan taqqoslaymiz.
$$
\frac{b_n}{b_{n+1}} = \left( \frac{n + 1}{n} \right)^p = \left( 1 + \frac{1}{n} \right)^p
$$
Teylor (Nyuton binomi) formulasiga asosan:
$$
\left( 1 + \frac{1}{n} \right)^p = 1 + \frac{p}{n} + o\left( \frac{1}{n} \right)
$$
Bundan:
$$
n \left( \frac{b_n}{b_{n+1}} - 1 \right) = n \left( \frac{p}{n} + o\left( \frac{1}{n} \right) \right) = p + o(1) \xrightarrow{n \to \infty} p
$$
Demak, Raabe soni $R$ aynan ekvivalent daraja ko'rsatkichi $p$ ni aniqlab beradi! Dirixle qatori $p > 1$ da yaqinlashib, $p \le 1$ da uzoqlashgani uchun, Raabe alomatidagi chegara aynan $R = 1$ bo'ladi.

---

### 2. Gauss alomati (Carl Friedrich Gauss, 1812)

Gauss alomati — musbat qatorlar nazariyasidagi **eng kuchli va universal algebraik alomatdir**. U Dalamber va Raabe alomatlarining barcha imkoniyatlarini o'zida birlashtiradi va eng muhimi — **$\mu = 1$ bo'lganda hech qanday noaniqlik qoldirmaydi!**

> **Teorema (Gauss alomati):**
> Agar musbat hadli $\sum a_n$ qator uchun ketma-ket hadlar nisbati $n \to \infty$ da quyidagi asimptotik ko'rinishda ifodalanishi mumkin bo'lsa:
> $$
> \frac{a_n}{a_{n+1}} = \lambda + \frac{\mu}{n} + \frac{\theta_n}{n^{1+\varepsilon}}
> $$
> Bu yerda $\lambda, \mu, \varepsilon$ — o'zgarmas sonlar ($\varepsilon > 0$), $\theta_n$ esa chegaralangan ketma-ketlik ($|\theta_n| \le M$).
>
> U holda:
> 1. Agar **$\lambda > 1$** bo'lsa, qator **yaqinlashadi**.
> 2. Agar **$\lambda < 1$** bo'lsa, qator **uzoqlashadi**.
> 3. Agar **$\lambda = 1$** bo'lsa:
>    - **$\mu > 1$** bo'lganda qator **yaqinlashadi**;
>    - **$\mu \le 1$** bo'lganda qator **uzoqlashadi**!

> [!TIP]
> **Gauss alomatining tengsiz ustunligi:**
> $\lambda = 1$ va $\mu = 1$ bo'lgan holatda Raabe alomati $R = 1$ berib ojiz qoladi, ammo Gauss alomati qat'iy hukm chiqaradi: **qator uzoqlashadi!** Shuning uchun Gauss alomatida noaniq holat umuman mavjud emas.

---

### 3. Ikki karrali faktoriallar ($(2n)!!$ va $(2n-1)!!$)
Nozik alomatlar deyarli har doim juft va toq sonlar ko'paytmalari qatnashgan qatorlarda qo'llaniladi:
1. **Juft sonlar ko'paytmasi:**
   $$
   (2n)!! = 2 \cdot 4 \cdot 6 \cdots (2n) = 2^n \cdot (1 \cdot 2 \cdot 3 \cdots n) = 2^n \cdot n!
   $$
2. **Toq sonlar ko'paytmasi:**
   $$
   (2n - 1)!! = 1 \cdot 3 \cdot 5 \cdots (2n - 1) = \frac{(2n)!}{(2n)!!} = \frac{(2n)!}{2^n \cdot n!}
   $$
3. **Ketma-ket hadlar nisbati:**
   $$
   \frac{(2n + 1)!!}{(2n - 1)!!} = 2n + 1, \quad \frac{(2n + 2)!!}{(2n)!!} = 2n + 2
   $$

---

## 📝 Qadamma-qadam Yechilgan Universitet Misollari

### 1-misol: Dalamber muvaffaqiyatsizligi va Raabe alomati
**Shart:** Quyidagi qatorning yaqinlashishini tekshiring:
$$
\sum_{n=1}^\infty \frac{(2n - 1)!!}{(2n)!!}
$$

**Yechish:**
1. **1-qadam: Umumiy hadni yozamiz.**
   $$
   a_n = \frac{(2n - 1)!!}{(2n)!!} = \frac{1 \cdot 3 \cdot 5 \cdots (2n - 1)}{2 \cdot 4 \cdot 6 \cdots (2n)}
   $$
2. **2-qadam: Keyingi had $a_{n+1}$ ni topamiz.**
   $$
   a_{n+1} = \frac{(2n + 1)!!}{(2n + 2)!!} = \frac{(2n - 1)!! \cdot (2n + 1)}{(2n)!! \cdot (2n + 2)} = a_n \cdot \frac{2n + 1}{2n + 2}
   $$
3. **3-qadam: Dalamber alomatini sinab ko'ramiz.**
   $$
   D = \lim_{n \to \infty} \frac{a_{n+1}}{a_n} = \lim_{n \to \infty} \frac{2n + 1}{2n + 2} = \lim_{n \to \infty} \frac{2 + \frac{1}{n}}{2 + \frac{2}{n}} = 1
   $$
   $D = 1$ — Dalamber alomati noaniqlik berdi! Qator yaqinlashishi ham, uzoqlashishi ham mumkin.
4. **4-qadam: Raabe alomatini qo'llaymiz.**
   Teskari nisbatni hisoblaymiz:
   $$
   \frac{a_n}{a_{n+1}} = \frac{2n + 2}{2n + 1}
   $$
   Endi Raabe limitini tuzamiz:
   $$
   R = \lim_{n \to \infty} n \left( \frac{a_n}{a_{n+1}} - 1 \right) = \lim_{n \to \infty} n \left( \frac{2n + 2}{2n + 1} - 1 \right)
   $$
   Umumiy maxrajga keltiramiz:
   $$
   \frac{2n + 2 - (2n + 1)}{2n + 1} = \frac{1}{2n + 1}
   $$
   Limitga qo'yamiz:
   $$
   R = \lim_{n \to \infty} n \cdot \frac{1}{2n + 1} = \lim_{n \to \infty} \frac{n}{2n + 1} = \frac{1}{2}
   $$
5. **5-qadam: Xulosa chiqarish.**
   Topilgan qiymat:
   $$
   R = \frac{1}{2} < 1
   $$
   Raabe teoremasiga ko'ra, $R < 1$ bo'lgani sababli berilgan qator **uzoqlashadi**.
6. **Javob:**
   Qator uzoqlashadi ($R = 1/2 < 1$).

---

### 2-misol: Raabe alomati orqali parametrli qatorni tekshirish
**Shart:** Parametr $p > 0$ ning qanday qiymatlarida quyidagi qator yaqinlashadi?
$$
\sum_{n=1}^\infty \frac{(2n - 1)!!}{(2n)!!} \cdot \frac{1}{n^p}
$$

**Yechish:**
1. **1-qadam: Hadlar nisbatini tuzamiz.**
   $$
   a_n = \frac{(2n - 1)!!}{(2n)!! \cdot n^p}, \quad a_{n+1} = \frac{(2n + 1)!!}{(2n + 2)!! \cdot (n + 1)^p}
   $$
   Nisbat:
   $$
   \frac{a_n}{a_{n+1}} = \frac{2n + 2}{2n + 1} \cdot \left( \frac{n + 1}{n} \right)^p = \left( 1 + \frac{1}{2n + 1} \right) \cdot \left( 1 + \frac{1}{n} \right)^p
   $$
2. **2-qadam: Asimptotik yoyilma (Teylor qoidasi).**
   Kichik $\frac{1}{n}$ bo'yicha yoyamiz:
   $$
   \frac{2n + 2}{2n + 1} = \frac{1 + \frac{1}{n}}{1 + \frac{1}{2n}} = \left( 1 + \frac{1}{n} \right) \left( 1 - \frac{1}{2n} + O\left(\frac{1}{n^2}\right) \right) = 1 + \frac{1}{2n} + O\left(\frac{1}{n^2}\right)
   $$
   Ikkinchi qavs:
   $$
   \left( 1 + \frac{1}{n} \right)^p = 1 + \frac{p}{n} + O\left(\frac{1}{n^2}\right)
   $$
   Ularni ko'paytiramiz:
   $$
   \frac{a_n}{a_{n+1}} = \left( 1 + \frac{1}{2n} + O\left(\frac{1}{n^2}\right) \right) \left( 1 + \frac{p}{n} + O\left(\frac{1}{n^2}\right) \right) = 1 + \frac{p + \frac{1}{2}}{n} + O\left(\frac{1}{n^2}\right)
   $$
3. **3-qadam: Raabe limitini hisoblash.**
   $$
   R = \lim_{n \to \infty} n \left( \frac{a_n}{a_{n+1}} - 1 \right) = \lim_{n \to \infty} n \left( \frac{p + \frac{1}{2}}{n} + O\left(\frac{1}{n^2}\right) \right) = p + \frac{1}{2}
   $$
4. **4-qadam: Tahlil.**
   - Agar $R = p + \frac{1}{2} > 1 \iff p > \frac{1}{2}$ bo'lsa, qator **yaqinlashadi**.
   - Agar $R = p + \frac{1}{2} < 1 \iff p < \frac{1}{2}$ bo'lsa, qator **uzoqlashadi**.
   - Agar $p = \frac{1}{2}$ bo'lsa, $R = 1$ bo'lib, Raabe alomati noaniqlik beradi.
5. **5-qadam: $p = 1/2$ nozik chegarani Gauss alomati bilan tekshirish.**
   $p = 1/2$ bo'lganda:
   $$
   \frac{a_n}{a_{n+1}} = 1 + \frac{1}{n} + O\left(\frac{1}{n^{3/2}}\right)
   $$
   Gauss alomati formulasiga ko'ra:
   $$
   \lambda = 1, \quad \mu = 1
   $$
   Gauss teoremasiga asosan, agar $\lambda = 1$ va $\mu \le 1$ bo'lsa, qator **uzoqlashadi**! Demak, $p = 1/2$ nuqtada qator qat'iy uzoqlashadi.
6. **Javob:**
   Qator $p > \frac{1}{2}$ bo'lganda yaqinlashadi, $p \le \frac{1}{2}$ bo'lganda uzoqlashadi.

---

### 3-misol: Klassik Gauss gipergeometrik qatori
**Shart:** Matematika va nazariy fizikaning eng mashhur qatori bo'lgan Gauss gipergeometrik qatorining yaqinlashishini tekshiring ($\alpha, \beta, \gamma > 0$):
$$
\sum_{n=1}^\infty \frac{\alpha(\alpha + 1)\cdots(\alpha + n - 1) \cdot \beta(\beta + 1)\cdots(\beta + n - 1)}{n! \cdot \gamma(\gamma + 1)\cdots(\gamma + n - 1)}
$$

**Yechish:**
1. **1-qadam: Hadlar nisbatini tuzamiz.**
   $$
   \frac{a_n}{a_{n+1}} = \frac{n + 1}{\alpha + n} \cdot \frac{\gamma + n}{\beta + n} = \frac{(n + 1)(n + \gamma)}{(n + \alpha)(n + \beta)}
   $$
2. **2-qadam: Ko'phadlarni ochib chiqamiz.**
   $$
   \frac{a_n}{a_{n+1}} = \frac{n^2 + (\gamma + 1)n + \gamma}{n^2 + (\alpha + \beta)n + \alpha\beta}
   $$
3. **3-qadam: Burchakli bo'lish (ko'phadni ko'phadga bo'lish).**
   Suratni maxrajga bo'lamiz:
   $$
   n^2 + (\gamma + 1)n + \gamma = 1 \cdot \left[ n^2 + (\alpha + \beta)n + \alpha\beta \right] + \left[ (\gamma + 1 - \alpha - \beta)n + (\gamma - \alpha\beta) \right]
   $$
   Natijada:
   $$
   \frac{a_n}{a_{n+1}} = 1 + \frac{(\gamma + 1 - \alpha - \beta)n + (\gamma - \alpha\beta)}{n^2 + (\alpha + \beta)n + \alpha\beta}
   $$
   Surat va maxrajni $n$ ga bo'lib, $1/n$ darajalari bo'yicha yozamiz:
   $$
   \frac{a_n}{a_{n+1}} = 1 + \frac{\gamma + 1 - \alpha - \beta}{n} + O\left(\frac{1}{n^2}\right)
   $$
4. **4-qadam: Gauss alomatini qo'llash.**
   Gauss ko'rinishi:
   $$
   \frac{a_n}{a_{n+1}} = \lambda + \frac{\mu}{n} + \frac{\theta_n}{n^2}
   $$
   Bizning misolda:
   $$
   \lambda = 1, \quad \mu = \gamma + 1 - \alpha - \beta
   $$
   Gauss teoremasiga binoan:
   - Qator yaqinlashadi agar $\mu > 1 \iff \gamma + 1 - \alpha - \beta > 1 \iff \gamma > \alpha + \beta$.
   - Qator uzoqlashadi agar $\mu \le 1 \iff \gamma \le \alpha + \beta$.
5. **Javob:**
   Qator $\gamma > \alpha + \beta$ bo'lganda yaqinlashadi, $\gamma \le \alpha + \beta$ bo'lganda uzoqlashadi.

---

## ⚠️ Talabalar Eng Ko'p Yo'l Qo'yadigan Xatolar va Tuzoqlar

1. **Nisbatni teskari yozish tuzog'i:**
   Dalamber alomatida $\lim \frac{a_{n+1}}{a_n}$ olinishiga ko'nikib qolgan talabalar Raabe alomatida ham shunday yozadilar:
   - ❌ **Xato:** $R = \lim n \left( \frac{a_{n+1}}{a_n} - 1 \right)$
   - ✅ **To'g'ri:** $R = \lim n \left( \frac{a_n}{a_{n+1}} - 1 \right)$
   Bu xato natijasida limitning ishorasi teskari chiqadi va yaqinlashuvchi qator "uzoqlashuvchi", uzoqlashuvchi esa "yaqinlashuvchi" deb xato topiladi!

2. **Yaqinlashish shartidagi tengsizlik belgisini adashtirish:**
   Dalamberda $D < 1$ yaqinlashishni anglatsa, Raabe alomatida $\frac{a_n}{a_{n+1}}$ teskari nisbat olinganligi sababli:
   - ✅ **To'g'ri:** $R > 1$ bo'lsa — **yaqinlashadi**, $R < 1$ bo'lsa — **uzoqlashadi**!

3. **Gauss alomatida $\mu = 1$ holatida to'xtab qolish:**
   Ko'pchilik talabalar $\mu = 1$ bo'lganda ham "alomat noaniqlik beradi" deb o'ylashadi.
   - ❌ **Xato:** $\mu = 1$ da noaniqlik.
   - ✅ **To'g'ri:** Gauss alomatida $\mu \le 1$ bo'lganda qator **qat'iy uzoqlashadi**! Hech qanday qo'shimcha tekshiruv shart emas.

4. **Ikki karrali faktoriallarni noto'g'ri qisqartirish:**
   - ❌ **Xato:** $\frac{(2n + 1)!!}{(2n - 1)!!} = \frac{2n + 1}{2n - 1}$
   - ✅ **To'g'ri:** $\frac{(2n + 1)!!}{(2n - 1)!!} = 2n + 1$ (chunki toq ko'paytma oxiriga faqat bitta yangi $(2n+1)$ hadi qo'shiladi).

---

## 🎯 Mustaqil Yechish Uchun Amaliy Mashqlar va Yechimlar

### 1-mashq
Raabe alomatidan foydalanib, quyidagi qatorning yaqinlashishini tekshiring:
$$
\sum_{n=1}^\infty \frac{(2n)!!}{(2n + 1)!!}
$$

<details>
<summary>👉 Bosqichma-bosqich yechimni ko'rish</summary>

1. **Hadlar nisbatini tuzamiz:**
   $$
   a_n = \frac{(2n)!!}{(2n + 1)!!}, \quad a_{n+1} = \frac{(2n + 2)!!}{(2n + 3)!!} = a_n \cdot \frac{2n + 2}{2n + 3}
   $$
2. **Teskari nisbat:**
   $$
   \frac{a_n}{a_{n+1}} = \frac{2n + 3}{2n + 2}
   $$
3. **Raabe limitini hisoblaymiz:**
   $$
   R = \lim_{n \to \infty} n \left( \frac{2n + 3}{2n + 2} - 1 \right) = \lim_{n \to \infty} n \left( \frac{1}{2n + 2} \right) = \lim_{n \to \infty} \frac{n}{2n + 2} = \frac{1}{2}
   $$
4. **Xulosa:**
   $R = \frac{1}{2} < 1$ bo'lgani sababli qator **uzoqlashadi**.

**Javob:** Qator uzoqlashadi ($R = 1/2$).
</details>

---

### 2-mashq
Gauss alomatidan foydalanib, qatorning yaqinlashishini tekshiring:
$$
\sum_{n=1}^\infty \left[ \frac{(2n - 1)!!}{(2n)!!} \right]^2
$$

<details>
<summary>👉 Bosqichma-bosqich yechimni ko'rish</summary>

1. **Hadlar nisbati:**
   $$
   \frac{a_n}{a_{n+1}} = \left( \frac{2n + 2}{2n + 1} \right)^2 = \left( 1 + \frac{1}{2n + 1} \right)^2
   $$
2. **Kvadratni ochamiz:**
   $$
   \frac{a_n}{a_{n+1}} = \frac{4n^2 + 8n + 4}{4n^2 + 4n + 1} = 1 + \frac{4n + 3}{4n^2 + 4n + 1} = 1 + \frac{1}{n} \cdot \frac{4 + \frac{3}{n}}{4 + \frac{4}{n} + \frac{1}{n^2}}
   $$
   $$
   \frac{a_n}{a_{n+1}} = 1 + \frac{1}{n} + O\left(\frac{1}{n^2}\right)
   $$
3. **Gauss parametrlari:**
   $$
   \lambda = 1, \quad \mu = 1
   $$
4. **Xulosa:**
   $\lambda = 1$ va $\mu = 1 \le 1$ bo'lganligi sababli, Gauss teoremasiga ko'ra qator **uzoqlashadi**!

**Javob:** Qator uzoqlashadi ($\mu = 1$).
</details>

---

### 3-mashq
Quyidagi qatorning yaqinlashishini tekshiring:
$$
\sum_{n=1}^\infty \frac{n! \cdot e^n}{n^{n + 3/2}}
$$

<details>
<summary>👉 Bosqichma-bosqich yechimni ko'rish</summary>

1. **Hadlar nisbatini tuzamiz:**
   $$
   \frac{a_n}{a_{n+1}} = \frac{n! \, e^n}{n^{n + 3/2}} \cdot \frac{(n + 1)^{n + 1 + 3/2}}{(n + 1)! \, e^{n+1}} = \frac{1}{e} \cdot \left( \frac{n + 1}{n} \right)^{n + 3/2}
   $$
2. **Logarifmlab Teylor qatoriga yoyamiz:**
   $$
   \ln\left( \frac{a_n}{a_{n+1}} \right) = -1 + \left( n + \frac{3}{2} \right) \ln\left( 1 + \frac{1}{n} \right)
   $$
   $\ln(1 + x) = x - \frac{x^2}{2} + \frac{x^3}{3} + \dots$ formulani qo'llaymiz:
   $$
   \ln\left( 1 + \frac{1}{n} \right) = \frac{1}{n} - \frac{1}{2n^2} + \frac{1}{3n^3} + O\left(\frac{1}{n^4}\right)
   $$
   Ko'paytiramiz:
   $$
   \left( n + \frac{3}{2} \right) \left( \frac{1}{n} - \frac{1}{2n^2} + \frac{1}{3n^3} \right) = 1 - \frac{1}{2n} + \frac{1}{3n^2} + \frac{3}{2n} - \frac{3}{4n^2} + O\left(\frac{1}{n^3}\right)
   $$
   $$
   = 1 + \frac{1}{n} - \frac{5}{12n^2} + O\left(\frac{1}{n^3}\right)
   $$
   Endi $-1$ ni qo'shamiz:
   $$
   \ln\left( \frac{a_n}{a_{n+1}} \right) = \frac{1}{n} - \frac{5}{12n^2} + O\left(\frac{1}{n^3}\right)
   $$
   Eksponentaga ko'taramiz ($e^x = 1 + x + \frac{x^2}{2} + \dots$):
   $$
   \frac{a_n}{a_{n+1}} = 1 + \frac{1}{n} + \left( \frac{1}{2} - \frac{5}{12} \right) \frac{1}{n^2} + \dots = 1 + \frac{1}{n} + \frac{1}{12n^2} + O\left(\frac{1}{n^3}\right)
   $$
3. **Ammo bu yerda $\mu = 1$ bo'lib qoldi!** Demak, daraja $3/2$ bo'lganda $\mu = 1 \implies$ qator uzoqlashadi.
   Agar daraja $n^{n + p}$ bo'lsa:
   $$
   \mu = p - \frac{1}{2}
   $$
   $p = 3/2$ bo'lganda $\mu = 3/2 - 1/2 = 1 \implies$ uzoqlashadi.
   Demak, qator yaqinlashishi uchun $p > 3/2$ (masalan, $p = 2$) bo'lishi kerak.

**Javob:** Berilgan qator uzoqlashadi ($\mu = 1$).
</details>

---

## 💡 Imtihon Layfhaklari va Tezkor Maslahatlar

1. **Qachon Raabe, qachon Gauss alomatini tanlash kerak?**
   - Agar hadlar oddiy kasr ko'rinishida bo'lsa (masalan, $\frac{2n+2}{2n+1}$), darhol **Raabe alomatini** qo'llang — bu eng tez hisoblanadi.
   - Agar qator murakkab faktoriallar, darajalar yoki ko'paytmalardan iborat bo'lsa va Raabe alomatida $R = 1$ chiqish xavfi bo'lsa, vaqtni yo'qotmasdan birdaniga **Gauss alomati** uchun asimptotik yoyilma tuzing!

2. **$1/n$ oldidagi koeffitsiyentni bir zumda topish qoidasi:**
   Agar nisbat ikkita chiziqli ko'phad nisbati bo'lsa:
   $$
   \frac{a_n}{a_{n+1}} = \frac{n + A}{n + B} = 1 + \frac{A - B}{n + B} = 1 + \frac{A - B}{n} + O\left(\frac{1}{n^2}\right)
   $$
   U holda har doim $\mu = R = A - B$ bo'ladi!
   *Misol:* $\frac{2n + 3}{2n + 1} = \frac{n + 1.5}{n + 0.5} \implies R = 1.5 - 0.5 = 1$.

3. **Dalamberni o'tkazib yubormang:**
   Har doim dastlab Dalamber alomatini xayolan baholang. Agar limit 1 dan farqli bo'lsa (masalan, $1/2$ yoki $3$), qator taqdiri darhol hal bo'ladi va nozik alomatlarga vaqt sarflashning hojati qolmaydi!
