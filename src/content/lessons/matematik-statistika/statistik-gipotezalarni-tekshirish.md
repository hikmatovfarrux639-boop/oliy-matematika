---
title: "Statistik gipotezalarni tekshirish, Styudent va xi-kvadrat mezonlari"
module: "matematik-statistika"
order: 3
description: "Nol va muqobil gipotezalar (H0, H1), 1- va 2-tur xatolar, Styudent t-mezoni, Pirson xi-kvadrat, p-value va ko'p usulli A/B test tahlili."
---

## Kirish: Qanday qilib ilmiy xulosaga kelinadi?

Tibbiyotda yangi vaksina sinovdan o'tkazilganda, u nazorat guruhiga nisbatan bemorlarni $8\%$ tezroq davoladi. Bu $8\%$ lik natija haqiqatan ham preparatning shifobaxsh xususiyati natijasimi yoki shunchaki tasodifiy omadmi?

Axborot texnologiyalarida (IT) veb-saytning buyurtma berish tugmasi ko'k rangdan yashil rangga o'zgartirildi (A/B test) va xaridlar soni $3\%$ ga oshdi. Bu o'sish tasodifiy tebranish emas, balki foydalanuvchilar xatti-harakatining qonuniy o'zgarishi ekanligini qanday isbotlash mumkin?

Bunday masalalarni yechish uchun matematik statistikada **statistik gipotezalarni tekshirish** nazariyasi qo'llaniladi.

---

## 1. Statistik gipotezalar tushunchasi

> **Ta'rif:** Bosh to'plamning taqsimot qonuni turi yoki uning noma'lum parametrlari haqidagi har qanday ilmiy taxmin **statistik gipoteza** deb ataladi.

1. **Nol gipoteza ($H_0$):**
   "Hech qanday yangilik, effekt yoki farq yo'q, kuzatilgan og'ishlar faqat tasodifiy xatolik natijasidir" deb taxmin qiluvchi asosiy gipoteza.
   *Misollar:* $H_0: \mu = a_0$ (bosh o'rtacha me'yorga teng), $H_0: \mu_1 = \mu_2$ (ikki guruh o'rtasida farq yo'q).

2. **Muqobil (raqib) gipoteza ($H_1$):**
   Nol gipotezaga qarama-qarshi bo'lgan, tadqiqotchi isbotlashga intilayotgan gipoteza.
   *Misollar:*
   - Ikki tomonlama: $H_1: \mu \neq a_0$;
   - O'ng tomonlama (effekt ijobiy): $H_1: \mu > a_0$;
   - Chap tomonlama (effekt salbiy): $H_1: \mu < a_0$.

---

## 2. Xatolar turlari, Ahamiyatlilik darajasi va Test quvvati

Biz chekli tanlanma ma'lumotlariga tayanib xulosa chiqarganimiz sababli, ikki xil xatoga yo'l qo'yish xavfi mavjud:

| Qaror \ Haqiqat | $H_0$ haqiqatda to'g'ri bo'lsa | $H_0$ haqiqatda noto'g'ri bo'lsa |
|---|---|---|
| **$H_0$ rad etilmadi (qabul qilindi)** | To'g'ri qaror (Ishonchlilik: $1 - \alpha$) | **2-tur xato ($\beta$ — False Negative)** |
| **$H_0$ rad etildi** | **1-tur xato ($\alpha$ — False Positive)** | To'g'ri qaror (Kriteriy quvvati: $1 - \beta$) |

- **1-tur xato ($\alpha$ — Soxta signal):** Aslida to'g'ri bo'lgan $H_0$ gipotezani rad etish ehtimoli. Bu ehtimol **ahamiyatlilik darajasi** deyiladi va tadqiqotchi tomonidan oldindan belgilanadi (odatda $\alpha = 0.05$ ya'ni $5\%$, yoki qat'iy tekshiruvlarda $\alpha = 0.01$).
- **2-tur xato ($\beta$ — O'tkazib yuborish):** Aslida noto'g'ri bo'lgan $H_0$ gipotezani rad etmaslik.
- **Kriteriy quvvati ($1 - \beta$):** Haqiqiy effekt mavjud bo'lganda uni aniqlash qobiliyati (odatda kamida $80\%$ bo'lishi maqsad qilinadi).

---

## 3. Styudent t-mezoni (O'rtacha qiymatni me'yor bilan solishtirish)

Kichik tanlanmalarda ($n < 30$) bosh to'plamning standart og'ishi $\sigma$ noma'lum bo'lganda, Uilyam Gosset (*Student*) mezonidan foydalaniladi:

$$
t_{kuz} = \frac{\bar{x} - a_0}{s / \sqrt{n}}
$$

bu yerda:
- $\bar{x}$ — tanlanma o'rtacha;
- $a_0$ — gipoteza bo'yicha tekshirilayotgan nazariy me'yor;
- $s = \sqrt{\frac{1}{n-1}\sum (x_i - \bar{x})^2}$ — siljimagan standart og'ish;
- $s / \sqrt{n} = S_e$ — o'rtachaning standart xatoligi.

### Ikki mustaqil tanlanma o'rtachasini solishtirish (A/B test):
$$
t_{kuz} = \frac{\bar{x}_1 - \bar{x}_2}{\sqrt{\frac{s_1^2}{n_1} + \frac{s_2^2}{n_2}}}
$$

---

## 4. Zamonaviy yondashuv: $p$-value nima?

Bugungi kunda ilmiy maqolalarda va ma'lumotlar tahlilida (Python, R, SPSS) jadval kritik nuqtalaridan ko'ra **$p$-value** (probability value) ko'rsatkichi qo'llaniladi:

> **Qoida:**
> - Agar **$p\text{-value} < \alpha$** (masalan $p < 0.05$) bo'lsa $\implies$ $H_0$ **rad etiladi!** Farq statistik jihatdan ishonchli mavjud.
> - Agar **$p\text{-value} \ge \alpha$** bo'lsa $\implies$ $H_0$ ni rad etishga yetarli asos yo'q.

---

## Bitta masalani 2 xil usulda yechish va solishtirish

> **Masala:** Universitetda yangi intensiv o'qitish metodikasi sinab ko'rildi. Tasodifiy tanlangan $n = 25$ nafar talabaning yakuniy nazoratdagi o'rtacha bali $\bar{x} = 82$ ball, tuzatilgan standart og'ishi $s = 10$ ball chiqdi. Avvalgi yillardagi an'anaviy o'rtacha ball $a_0 = 78$ ball bo'lgan. $\alpha = 0.05$ ahamiyatlilik darajasida yangi metodika o'zlashtirishni oshirdi deb aytish mumkinmi ($H_1: \mu > 78$)?

### 1-usul: Kritik nuqtalar va Statistik mezon usuli
1. Gipotezalar:
   - $H_0: \mu = 78$ (yangi metodika ballga ta'sir qilmagan);
   - $H_1: \mu > 78$ (yangi metodika ballni oshirgan — o'ng tomonlama muqobil).
2. Styudent statistikasini hisoblaymiz:
   $$S_e = \frac{s}{\sqrt{n}} = \frac{10}{\sqrt{25}} = \frac{10}{5} = 2.0$$
   $$t_{kuz} = \frac{\bar{x} - a_0}{S_e} = \frac{82 - 78}{2.0} = \frac{4}{2.0} = \mathbf{2.0}$$
3. Erkinlik darajasi: $k = n - 1 = 25 - 1 = 24$.
   O'ng tomonlama test va $\alpha = 0.05$ uchun Styudent jadvalidan kritik nuqtani topamiz:
   $$t_{krit}(0.05; 24) = 1.711$$
4. Solishtiramiz:
   $$t_{kuz} = 2.0 > 1.711 = t_{krit}$$
5. **Xulosa:** Kuzatilgan $t$ ko'rsatkich kritik sohada yotadi. Demak, $H_0$ gipoteza $95\%$ ishonchlilik bilan **rad etiladi**. Yangi metodika talabalar o'zlashtirishini statistik jihatdan ishonchli oshirgan!

### 2-usul: Ishonchlilik oralig'i (Confidence Interval) usuli
Bosh to'plam o'rtacha qiymati $\mu$ uchun $95\%$ lik bir tomonlama pastki ishonchlilik chegarasini quramiz:
$$
\mu > \bar{x} - t_{krit} \cdot S_e
$$
$$
\mu > 82 - 1.711 \cdot 2.0 = 82 - 3.422 = \mathbf{78.58}
$$
Ko'rib turganingizdek, metodika beradigan haqiqiy o'rtacha ball kamida $78.58$ ballni tashkil qiladi. Bu ko'rsatkich an'anaviy me'yor $a_0 = 78$ dan qat'iy yuqori ($78.58 > 78$).
Shu sababli, $a_0 = 78$ qiymat $95\%$ lik ishonchlilik sohasidan tashqarida qoladi va $H_0$ rad etiladi.

Har ikkala usul bir xil ilmiy xulosani berdi!

---

> [!WARNING] Imtihondagi tuzoqlar va ko'p uchraydigan xatoliklar
> 1. **"Gipoteza isbotlandi" degan yanglish xulosa:**
>    Statistikada hech qachon "Nol gipoteza $100\%$ isbotlandi" deb yozilmaydi. Faqat "Mavjud ma'lumotlar $H_0$ ni rad etishga yetarli emas" deb xulosa qilinadi.
> 2. **Bir tomonlama va Ikki tomonlama testlar kritik nuqtasi:**
>    Agar $H_1: \mu \neq a_0$ bo'lsa, $\alpha$ ikkiga bo'linadi ($\alpha/2 = 0.025$). Agar $H_1: \mu > a_0$ bo'lsa, butun $\alpha = 0.05$ bitta tomonga beriladi. Masalan, $k=24$ da ikki tomonlama $t_{0.05} = 2.064$, bir tomonlama esa $t_{0.05} = 1.711$. Buni adashtirish xulosani teskari qilib qo'yishi mumkin!
> 3. **$p$-value va effekt kattaligi (Effect size):**
>    Katta tanlanmalarda ($n = 100\,000$) hatto $0.001\%$ lik arzimas farq ham $p < 0.001$ berishi mumkin. Shuning uchun faqat $p$-value ga emas, balki amaliy ahamiyatga (effekt kattaligiga) ham qarash shart.

---

## Mustaqil yechish uchun amaliy mashqlar

1. $n = 16$ ta detal o'lchanganda o'rtacha og'ish $t_{kuz} = -2.5$ chiqdi. Ikki tomonlama muqobil gipoteza $H_1: a \neq a_0$ va $\alpha = 0.05$ uchun $t_{krit}(0.05; 15) = 2.13$. $H_0$ rad etiladimi?
2. A/B test natijasida $p\text{-value} = 0.032$ chiqdi. Agar tadqiqotchi ahamiyatlilik darajasini $\alpha = 0.01$ qilib belgilagan bo'lsa, qanday qaror qabul qilinadi?
3. O'yin suyagi 120 marta tashlanganda har bir ochko nazariy jihatdan 20 marta tushishi kutilgan edi ($n_i' = 20$). Kuzatilgan chastotalar: $15, 22, 18, 25, 17, 23$. Pirson $\chi^2_{kuz}$ statistikasini hisoblang.

<details style="margin-top: 1rem; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); cursor: pointer;">
  <summary style="font-weight: 700; color: var(--primary);">👉 Yechimni tekshirish</summary>
  <div style="margin-top: 0.75rem; padding-top: 0.75rem; border-top: 1px solid var(--border-color); line-height: 1.7;">
    <p><strong>1-masala:</strong></p>
    <p>Moduli: $|t_{kuz}| = |-2.5| = 2.5$.</p>
    <p>$|t_{kuz}| = 2.5 > 2.13 = t_{krit}$ bo'lgani sababli $H_0$ **rad etiladi** (farq statistik jihatdan ishonchli).</p>

    <hr style="margin: 0.75rem 0; border: none; border-top: 1px dashed var(--border-color);" />

    <p><strong>2-masala:</strong></p>
    <p>$p\text{-value} = 0.032 > 0.01 = \alpha$.</p>
    <p>Ahamiyatlilik darajasi $1\%$ deb qat'iy belgilangani sababli, $0.032$ yetarli emas. Demak, $\mathbf{H_0}$ **rad etilmaydi** (o'zgarish $1\%$ darajada ishonchli deb topilmaydi).</p>

    <hr style="margin: 0.75rem 0; border: none; border-top: 1px dashed var(--border-color);" />

    <p><strong>3-masala:</strong></p>
    <p>$\chi^2_{kuz} = \sum \frac{(n_i - 20)^2}{20}$:</p>
    <ul>
      <li>$(15 - 20)^2 / 20 = 25 / 20 = 1.25$</li>
      <li>$(22 - 20)^2 / 20 = 4 / 20 = 0.20$</li>
      <li>$(18 - 20)^2 / 20 = 4 / 20 = 0.20$</li>
      <li>$(25 - 20)^2 / 20 = 25 / 20 = 1.25$</li>
      <li>$(17 - 20)^2 / 20 = 9 / 20 = 0.45$</li>
      <li>$(23 - 20)^2 / 20 = 9 / 20 = 0.45$</li>
    </ul>
    <p>Yig'indi: $\chi^2_{kuz} = 1.25 + 0.20 + 0.20 + 1.25 + 0.45 + 0.45 = \mathbf{3.80}$.</p>
  </div>
</details>
