---
title: "Ehtimollarni qo'shish, ko'paytirish, to'la ehtimol va Bayes formulasi"
module: "ehtimollar-nazariyasi"
order: 2
description: "Birgalikda bo'lgan va bo'lmagan hodisalar yig'indisi, shartli ehtimol, mustaqil hodisalar, to'la ehtimol va tibbiyotda/AI da mashhur Bayes formulasi."
---

## Kirish: Tibbiy test paradoksi

Tasavvur qiling: biror xavfli, ammo kamyob kasallik bilan aholining $1\%$qismi (har 100 kishidan bittasi) og'rigan. Zamonaviy tibbiy test$99\%$ aniqlikda ishlaydi:
- Agar odam kasal bo'lsa, test $99\%$ holatda buni to'g'ri ko'rsatadi (musbat natija);
- Agar odam sog'lom bo'lsa, test $99\%$holatda sog'lom ekanligini tasdiqlaydi (faqat$1\%$ holatda adashib musbat chiqishi mumkin — "soxta signal").

Siz ko'rikdan o'tdingiz va test natijasi kutilmaganda **musbat (kasallik bor)** chiqdi!
Sizning rostdan ham kasal bo'lishingiz ehtimoli qancha deb o'ylaysiz? $99\%$ mi?

**Yo'q!** Ehtimollar nazariyasining eng buyuk yutuqlaridan biri bo'lgan **Bayes formulasi** isbotlab beradiki, sizning rostdan ham kasal bo'lishingiz ehtimoli **atigi $50\%$ atrofida** bo'ladi!
Ushbu g'aroyib fakt qanday yuz berishini bugun ushbu darsda bosqichma-bosqich o'rganamiz.

---

## 1. Hodisalar yig'indisi va Qo'shish teoremalari

> **Hodisalar yig'indisi ($A + B$):** $A$yoki$B$ hodisalardan **kamida bittasi** ro'y berishidan iborat hodisadir.

### A) Birgalikda bo'lmagan hodisalar (Bir vaqtda ro'y bera olmaydi, $A \cap B = \emptyset$):
$$
P(A + B) = P(A) + P(B)
$$
*(Misol: o'yin suyagi tashlanganda yo 3, yo 4 ochko tushishi: $P = \frac{1}{6} + \frac{1}{6} = \frac{2}{6}$).*

### B) Birgalikda bo'lgan hodisalar (Bir vaqtda ham ro'y berishi mumkin):
$$
P(A + B) = P(A) + P(B) - P(A \cdot B)
$$
bu yerda $P(A \cdot B)$ — ikkala hodisaning bir vaqtda birgalikda ro'y berish ehtimolidir.
*(Ayirib tashlanish sababi: ikkala soha kesishmasi ikki marta qo'shilib qolmasligi uchun).*

---

## 2. Shartli ehtimol va Ko'paytirish teoremalari

> **Ta'rif:** $A$hodisa ro'y berganligi ma'lum bo'lganda$B$hodisaning ro'y berish ehtimoli **shartli ehtimol** deyiladi va$P(B|A)$ deb belgilanadi:
>
> 
$$
> P(B|A) = \frac{P(A \cdot B)}{P(A)} \quad (P(A) > 0)
> 
$$

### Ko'paytirish teoremalari ($A$va$B$ bir vaqtda ro'y berishi):
1. **Bog'liq hodisalar uchun:**
   
$$
   P(A \cdot B) = P(A) \cdot P(B|A) = P(B) \cdot P(A|B)
   
$$
2. **Bog'liq bo'lmagan (mustaqil) hodisalar uchun:**
   Agar birining ro'y berishi ikkinchisining ehtimoliga mutlaqo ta'sir qilmasa ($P(B|A) = P(B)$):
   
$$
   P(A \cdot B) = P(A) \cdot P(B)
   
$$

---

## 3. Kamida bitta hodisaning ro'y berishi ehtimoli

Agar $n$ta o'zaro bog'liq bo'lmagan hodisalar ro'y berish ehtimollari$p_1, p_2, \dots, p_n$ bo'lsa, ulardan **kamida bittasi** ro'y berish ehtimoli qarama-qarshi hodisa orqali topiladi:

$$
P(\text{kamida bitta}) = 1 - q_1 \cdot q_2 \cdot \dots \cdot q_n
$$
bu yerda $q_k = 1 - p_k$—$k$-hodisaning ro'y bermaslik ehtimoli.

---

## 4. To'la ehtimol formulasi

Faraz qilaylik, sinov natijasida o'zaro birgalikda bo'lmagan gipotezalar sistemasidan ($H_1, H_2, \dots, H_n$) faqat bittasi ro'y berishi mumkin bo'lsin:
$$
\sum_{i=1}^n P(H_i) = 1
$$
U holda ushbu gipotezalar bilan bog'liq ixtiyoriy $A$ hodisaning ro'y berishining **to'la ehtimoli**:

$$
P(A) = P(H_1)P(A|H_1) + P(H_2)P(A|H_2) + \dots + P(H_n)P(A|H_n) = \sum_{i=1}^n P(H_i)P(A|H_i)
$$

---

## 5. Tomas Bayes formulasi (Ehtimollarni qayta baholash)

Endi teskari vaziyatni qaraymiz: tajriba o'tkazildi va $A$ hodisa **allaqachon ro'y berdi**!
Ushbu hodisa aynan $k$-gipoteza ($H_k$) sababli ro'y bergan bo'lishi ehtimolini topish talab etilsin:

> **Bayes formulasi:**
>
> 
$$
> P(H_k|A) = \frac{P(H_k) \cdot P(A|H_k)}{P(A)} = \frac{P(H_k) \cdot P(A|H_k)}{\sum_{i=1}^n P(H_i) \cdot P(A|H_i)}
> 
$$
>
> - $P(H_k)$ — **aprior ehtimollik** (tajribadan oldingi dastlabki baho);
> - $P(H_k|A)$ — **aposterior ehtimollik** (hodisa yuz bergandan keyin olingan yangi aniq baho).

---

## 6. Amaliy misollar va batafsil yechimlar

### 1-misol: Tibbiy test paradoksining to'liq matematik isboti
Aholining $1\%$qismida kasallik bor. Test aniqligi$99\%$. Test musbat chiqqan odamning haqiqatda kasal bo'lishi ehtimolini toping.

**Yechilishi:**
Gipotezalarni kiritamiz:
- $H_1$: Odam kasal $\implies P(H_1) = 0.01$;
- $H_2$: Odam sog'lom $\implies P(H_2) = 0.99$.

Hodisa $A$: Test musbat chiqdi.
- Kasal odamda musbat chiqish shartli ehtimoli: $P(A|H_1) = 0.99$;
- Sog'lom odamda soxta musbat chiqish ehtimoli: $P(A|H_2) = 0.01$.

1. To'la ehtimol formulasi bo'yicha ixtiyoriy odamda test musbat chiqish ehtimolini topamiz:
   $$P(A) = P(H_1)P(A|H_1) + P(H_2)P(A|H_2) = 0.01 \cdot 0.99 + 0.99 \cdot 0.01 = 0.0099 + 0.0099 = 0.0198$$
2. Bayes formulasi bo'yicha test musbat chiqqanda odamning haqiqatda kasal bo'lish ehtimoli:
   $$P(H_1|A) = \frac{P(H_1)P(A|H_1)}{P(A)} = \frac{0.0099}{0.0198} = \frac{1}{2} = 0.5$$

**Xulosa:** Test musbat chiqqan taqdirda ham odamning rostdan kasal bo'lish ehtimoli atigi **$50\%$**!
Chunki sog'lom odamlar soni (990 ta) kasallardan (10 ta) ancha ko'p bo'lgani uchun, soxta signallar soni haqiqiy kasallar soni bilan tenglashib qoladi!

---

### 2-misol: Zavoddagi stanoklar va to'la ehtimol
Omborga 3 ta stanokdan detallar keltiriladi:
- 1-stanok: barcha mahsulotning $40\%$ini chiqaradi, yaroqsiz detal ehtimoli$2\%$;
- 2-stanok: mahsulotning $35\%$ini chiqaradi, yaroqsiz detal ehtimoli$3\%$;
- 3-stanok: mahsulotning $25\%$ini chiqaradi, yaroqsiz detal ehtimoli$4\%$.

Tavakkaliga olingan detalning yaroqsiz bo'lishi ehtimolini toping.

**Yechilishi:**
Gipotezalar:
- $P(H_1) = 0.40, \quad P(A|H_1) = 0.02$-$P(H_2) = 0.35, \quad P(A|H_2) = 0.03$-$P(H_3) = 0.25, \quad P(A|H_3) = 0.04$

To'la ehtimol formulasi:
$$
P(A) = 0.40(0.02) + 0.35(0.03) + 0.25(0.04) = 0.008 + 0.0105 + 0.010 = 0.0285
$$

**Javob:** $P(A) = 0.0285$(yoki$2.85\%$)

---

### 3-misol: Bayes bo'yicha stanokni aniqlash
Yuqoridagi 2-misol shartida: agar tanlangan detal **yaroqsiz bo'lib chiqqan bo'lsa**, uning aynan 1-stanokda ishlab chiqarilgan bo'lishi ehtimolini toping.

**Yechilishi:**
Bayes formulasini qo'llaymiz:
$$
P(H_1|A) = \frac{P(H_1)P(A|H_1)}{P(A)} = \frac{0.008}{0.0285} = \frac{80}{285} = \frac{16}{57} \approx 0.281
$$

**Javob:** $\approx 28.1\%$

---

### 4-misol: Nishonga kamida bitta o'q tegishi
Uch nafar mergan bir vaqtda nishonga qarata o'q uzdilar. Ularning nishonga tekkizish ehtimollari mos ravishda $0.8$, $0.7$va$0.6$. Nishonga kamida bitta o'q tegishi ehtimolini toping.

**Yechilishi:**
Tekkizish ehtimollari: $p_1 = 0.8, p_2 = 0.7, p_3 = 0.6$.
Tekkiza olmaslik ehtimollari:
- $q_1 = 1 - 0.8 = 0.2$-$q_2 = 1 - 0.7 = 0.3$-$q_3 = 1 - 0.6 = 0.4$

"Birorta ham o'q tegmaslik" qarama-qarshi hodisa ehtimoli:
$$P(\bar{A}) = q_1 \cdot q_2 \cdot q_3 = 0.2 \cdot 0.3 \cdot 0.4 = 0.024$$
Kamida bitta o'q tegishi:
$$P(A) = 1 - P(\bar{A}) = 1 - 0.024 = 0.976$$

**Javob:** $0.976$(yoki$97.6\%$)

---

## ⚠️ Talabalar ko'p yo'l qo'yadigan 3 ta jiddiy xato

1. **Gipotezalar ehtimollari yig'indisi 1 ga teng bo'lmasligi:**
   > To'la ehtimol formulasida gipotezalar to'la guruhni tashkil qilishi shart: $P(H_1) + P(H_2) + \dots + P(H_n) = 1$. Agar siz kiritgan gipotezalar yig'indisi 1 chiqmasa, demak siz qaysidir holatni unutgansiz.

2. **Mustaqil bo'lmagan hodisalarga shunchaki $P(A)P(B)$ formulasini qo'llash:**
   > Agar qutidan sharni olib, uni qaytarib solmasdan ikkinchisi olinsa, bu **bog'liq hodisadir**! Ikkinchi sharning oq chiqishi birinchisiga bog'liq, shuning uchun $P(B|A)$ ishlatilishi shart.

3. **Bayes formulasida $P(A|H_k)$bilan$P(H_k|A)$ ni adashtirish:**
   > $P(A|H_k)$ — stanok 1-bo'lsa, detalning yaroqsiz chiqish ehtimoli (berilgan).
   > $P(H_k|A)$ — detal yaroqsiz chiqqanligi ma'lum bo'lganda, uning 1-stanokdan bo'lish ehtimoli (qidirilayotgan son).

---

## 💡 Ustozdan maslahat

Masala matnida **"... ekanligi ma'lum bo'lsa, ..."** yoki **"... sharti bilan ..."** degan so'zlarni ko'rdingizmi? Darhol bilingki, bu shartli ehtimol yoki Bayes formulasidir!

---

## ✍️ Mustaqil yechish uchun mashqlar

1. Tanga ketma-ket 3 marta tashlandi. Kamida bir marta "gerb" tomoni tushishi ehtimolini toping.
2. Ikkita merganning tekkizish ehtimollari $0.9$va$0.8$. Ikkalasi ham nishonga tekkizishi ehtimoli qanday?
3. Birinchi qutida 5 ta oq va 5 ta qora shar, ikkinchi qutida 8 ta oq va 2 ta qora shar bor. Tavakkaliga quti tanlanib, undan 1 ta shar olindi. Olingan sharning oq bo'lish to'la ehtimolini toping.
4. Agar 3-masalada olingan shar oq bo'lib chiqqan bo'lsa, u 2-qutidan olingan bo'lish ehtimolini Bayes formulasi bilan hisoblang.

<details style="margin-top: 1rem; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); cursor: pointer;">
<summary style="font-weight: 700; color: var(--primary);">To'liq yechimlar va javoblar</summary>

**1-masala:** $1 - (0.5)^3 = 1 - 0.125 = 0.875$.

    

**2-masala:** Mustaqil hodisalar ko'paytmasi: $0.9 \cdot 0.8 = 0.72$.

    

**3-masala:** $P(H_1) = P(H_2) = 0.5$. $P(A|H_1) = 0.5, P(A|H_2) = 0.8$. $P(A) = 0.5(0.5) + 0.5(0.8) = 0.25 + 0.40 = 0.65$.

    

**4-masala:** Bayes: $P(H_2|A) = \frac{0.5 \cdot 0.8}{0.65} = \frac{0.40}{0.65} = \frac{8}{13} \approx 0.615$.

</details>
