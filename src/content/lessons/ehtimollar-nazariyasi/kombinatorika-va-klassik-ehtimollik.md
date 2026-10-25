---
title: "Kombinatorika asoslari va klassik ehtimollik ta'rifi"
module: "ehtimollar-nazariyasi"
order: 1
description: "Kombinatorika formulalari (permutatsiya, joylashtirish, kombinatsiya), klassik ehtimollik P(A) = m/n, gipergeometrik model va geometrik ehtimollik."
---

## Kirish: Qimor o'yinlaridan sun'iy intellektgacha

Ehtimollar nazariyasi XVII asrda qimor o'yinlarida (suyak tashlash, karta tarqatish) yutish imkoniyatlarini hisoblashga qiziqqan fransuz matematiklari Blez Paskal va Pyer Ferma o'rtasidagi yozishmalardan boshlangan.

Bugungi kunda esa bu fan butun zamonaviy dunyoning boshqaruv dvigateli hisoblanadi:
- Moliya va birjalarda risklarni baholash;
- Sug'urta kompaniyalari tariflarini hisoblash;
- Tibbiyotda yangi vaksina va dori vositalarining samaradorligini sinash;
- Sun'iy intellekt (Large Language Models, ChatGPT, Gemini) keyingi so'zni ehtimollik taqsimoti bo'yicha bashorat qilishga tayanadi!

---

## 1. Kombinatorikaning asosiy formulalari

Ehtimollikni hisoblash uchun ko'pincha barcha mumkin bo'lgan variantlar sonini to'g'ri sanash talab etiladi.

### A) Ko'paytirish va Qo'shish qoidalari:
- **Ko'paytirish qoidasi ("VA"):** Agar $A$amalni$m$xil usulda, shundan so'ng$B$amalni$n$xil usulda bajarish mumkin bo'lsa, ikkala amalni ketma-ket bajarish$m \cdot n$ xil usulda bo'ladi.
- **Qo'shish qoidasi ("YOKI"):** Agar $A$yoki$B$amallardan birini tanlash kerak bo'lsa:$m + n$ usul.

### B) O'rin almashtirish (Permutatsiya — $P_n$):
$n$ ta turli elementning tartibini almashtirish usullari soni:
$$
P_n = n! = 1 \cdot 2 \cdot 3 \dots n \quad (0! = 1)
$$

### C) O'rinlashtirish (Joylashtirish — $A_n^k$):
$n$ta elementdan$k$ tasini tanlab, ularni **tartib bilan (o'rni muhim bo'lgan holda)** joylashtirish usullari soni:
$$
A_n^k = \frac{n!}{(n - k)!} = n(n - 1)\dots(n - k + 1)
$$
*(Masalan: 10 ta yuguruvchidan 1-, 2-, 3-o'rin egalarini aniqlash).*

### D) Kombinatsiya (Guruhlash — $C_n^k$):
$n$ta elementdan$k$ tasini **tartibiga qaramasdan (faqat tarkibi muhim)** tanlab olish usullari soni:
$$
C_n^k = \binom{n}{k} = \frac{n!}{k!(n - k)!}
$$
Xossasi: $C_n^k = C_n^{n - k}, \quad C_n^0 = C_n^n = 1, \quad C_n^1 = n$.
*(Masalan: 10 nafar talabadan 3 kishilik navbatchilar guruhini tuzish).*

---

## 2. Tasodifiy hodisalar va Klassik ehtimollik ta'rifi

- **Muqarrar hodisa ($\Omega$):** sinovda albatta yuz beradigan hodisa ($P(\Omega) = 1$).
- **Mumkin bo'lmagan hodisa ($\emptyset$):** sinovda hech qachon yuz bermaydigan hodisa ($P(\emptyset) = 0$).
- **Tasodifiy hodisa ($A$):** ro'y berishi ham, bermasligi ham mumkin bo'lgan hodisa.

> **Klassik ta'rif:**
> Agar sinovning barcha mumkin bo'lgan oqibatlari soni $n$ta teng imkoniyatli va o'zaro birgalikda bo'lmagan elementar hodisalardan iborat bo'lib, ulardan$m$tasi$A$ hodisaning ro'y berishiga qulaylik tug'dirsa:
>
> 
$$
> P(A) = \frac{m}{n} = \frac{\text{qulay natijalar soni}}{\text{barcha teng imkoniyatli natijalar soni}}
> 
$$

Har qanday ehtimollik uchun:
$$
0 \le P(A) \le 1
$$

---

## 3. Quti va sharlar modeli (Gipergeometrik sxema)

Imtihonlarda eng ko'p uchraydigan klassik masala:
> Qutida jami $N$ta buyum bor, ulardan$M$tasi yaroqli (yoki oq shar). Qutidan tavakkaliga$n$ta buyum olindi. Olinganlar ichida aynan$k$ tasi yaroqli (oq shar) bo'lishi ehtimolligi:
>
> 
$$
> P(A) = \frac{C_M^k \cdot C_{N - M}^{n - k}}{C_N^n}
> 
$$

---

## 4. Geometrik ehtimollik

Agar sinov natijalari cheksiz ko'p bo'lsa (masalan, tekislikdagi sohaga nuqta tushishi), klassik $\frac{m}{n}$ formulasini qo'llab bo'lmaydi. Uning o'rniga o'lchovlar nisbati olinadi:

$$
P(A) = \frac{\text{mes}(g)}{\text{mes}(G)}
$$
- Uzunlik bo'lsa: $P = \frac{l}{L}$;
- Yuza bo'lsa: $P = \frac{S_g}{S_G}$;
- Hajm bo'lsa: $P = \frac{V_g}{V_G}$.

---

## 5. Amaliy misollar va batafsil yechimlar

### 1-misol: O'yin suyagi (Zar) tashlanganda
Bitta o'yin suyagi tashlanganda juft ochko tushishi ehtimolligini toping.

**Yechilishi:**
- Barcha mumkin bo'lgan natijalar: $\{1, 2, 3, 4, 5, 6\} \implies n = 6$.
- Qulay natijalar (juft sonlar): $\{2, 4, 6\} \implies m = 3$.
$$
P(A) = \frac{m}{n} = \frac{3}{6} = \frac{1}{2} = 0.5
$$

**Javob:** $0.5$(yoki$50\%$)

---

### 2-misol: Ikkita suyak tashlanganda ochkolar yig'indisi
Ikkita suyak bir vaqtda tashlanganda ochkolar yig'indisi $8$ bo'lish ehtimolligini toping.

**Yechilishi:**
- Barcha variantlar (ko'paytirish qoidasi): $n = 6 \cdot 6 = 36$.
- Yig'indisi $8$bo'ladigan qulay juftliklar:$(2, 6), (3, 5), (4, 4), (5, 3), (6, 2) \implies m = 5$ ta.
$$
P(A) = \frac{5}{36} \approx 0.139
$$

**Javob:** $\frac{5}{36}$

---

### 3-misol: Quti va nostandart detallar masalasi
Qutida 12 ta detal bo'lib, ulardan 4 tasi bo'yalgan. Tavakkaliga 3 ta detal olindi. Olingan detallarning aynan 2 tasi bo'yalgan bo'lishi ehtimolligini toping.

**Yechilishi:**
- Jami detallar: $N = 12$, bo'yalgan: $M = 4$, bo'yalmagan: $12 - 4 = 8$ ta.
- Olinyapti: $n = 3$ta detal. Ulardan$k = 2$tasi bo'yalgan bo'lishi kerak (demak,$3 - 2 = 1$ tasi bo'yalmagan).
1. Barcha mumkin bo'lgan variantlar:
   $$n = C_{12}^3 = \frac{12 \cdot 11 \cdot 10}{3 \cdot 2 \cdot 1} = 220$$
2. Qulay variantlar:
   $$m = C_4^2 \cdot C_8^1 = \frac{4 \cdot 3}{2 \cdot 1} \cdot 8 = 6 \cdot 8 = 48$$
3. Ehtimollik:
   $$P(A) = \frac{48}{220} = \frac{12}{55} \approx 0.218$$

**Javob:** $\frac{12}{55} \approx 21.8\%$

---

### 4-misol: Geometrik ehtimollik — Uchrashuv masalasi
Ikki do'st soat 12:00 va 13:00 oralig'ida uchrashishga kelishib oldilar. Har biri kelgach, ikkinchisini 15 daqiqa kutadi va ketadi. Ularning uchrashish ehtimolligi qanday?

**Yechilishi:**
Vaqtni daqiqalarda hisoblaymiz ($0$dan$60$ gacha).
1-do'stning kelish vaqti $x$, 2-do'stniki $y$ bo'lsin.
- Barcha mumkin bo'lgan holatlar sohasi: $0 \le x \le 60, 0 \le y \le 60$ kvadrat.
  Maydoni: $S_G = 60 \cdot 60 = 3600$.
- Uchrashuv sharti: ular orasidagi vaqt farqi 15 daqiqadan oshmasligi kerak:
  $$|x - y| \le 15 \implies -15 \le x - y \le 15$$
- Bu soha kvadratning ichidagi yo'lakchadir. Uni hisoblash uchun kvadratdan uchrashuv ro'y bermaydigan ikkita burchakdagi uchburchaklarni ayirib tashlaymiz:
  Har bir uchburchak kateti: $60 - 15 = 45$.
  $$S_{uchburchaklar} = 2 \cdot \left(\frac{1}{2} \cdot 45 \cdot 45\right) = 2025$$
  Qulay soha maydoni:
  $$S_g = 3600 - 2025 = 1575$$
- Ehtimollik:
  $$P = \frac{S_g}{S_G} = \frac{1575}{3600} = \frac{7}{16} = 0.4375$$

**Javob:** $0.4375$(yoki$43.75\%$)

---

## ⚠️ Talabalar ko'p yo'l qo'yadigan 3 ta jiddiy xato

1. **$C_n^k$va$A_n^k$ ni adashtirish:**
   > Agar tanlanayotgan elementlarning o'rni/vazifasi muhim bo'lsa (masalan: Prezident, kotib, xazinachi) $\implies A_n^k$ ishlatiladi.
   > Agar faqat tarkibi muhim bo'lib, o'rni rol o'ynamasa (masalan: komandaga 3 kishi tanlash) $\implies C_n^k$ ishlatiladi.

2. **Ehtimollik 1 dan katta yoki manfiy chiqishi:**
   > Agar hisob-kitobingizda ehtimollik $P(A) = 1.3$yoki$P(A) < 0$chiqsa, qayerdadir jiddiy xato qilgansiz! Ehtimollik faqat$[0; 1]$ oralig'ida bo'ladi.

3. **Klassik formulani teng imkoniyatli bo'lmagan hodisalarga qo'llash:**
   > "Ko'chaga chiqqanimda dinozavrni uchratishim yoki uchratmasligim mumkin, demak ehtimollik $\frac{1}{2}$" — bu mashhur xatodir. Klassik formula faqat barcha natijalar ro'y berish imkoniyati teng bo'lgandagina o'rinli!

---

## 💡 Ustozdan maslahat

Agar sizdan "kamida bitta..." (masalan, kamida bitta nishonga tegish) ehtimolligi so'ralsa, uni to'g'ridan-to'g'ri hisoblashga urinmang. Buning o'rniga **qarama-qarshi hodisa** ("birorta ham tegmaslik") ehtimolini topib, $1$ dan ayiring:
$$
P(A) = 1 - P(\bar{A})
$$
Bu usul hisoblash hajmini 5 barobar qisqartiradi!

---

## ✍️ Mustaqil yechish uchun mashqlar

1. 5 nafar o'quvchini bitta qatorga necha xil usulda tizish mumkin?
2. 36 talik karta dastidan tavakkaliga bitta karta tortilganda u "Tuz" (As) bo'lish ehtimolini toping.
3. Qutida 10 ta shar bor: 6 ta oq va 4 ta qora. Tavakkaliga 2 ta shar olindi. Ikkalasi ham oq bo'lishi ehtimolligini toping.
4. $R = 10$sm li nishonga qarata o'q uzildi. O'q markazdan radiusi$r \le 5$ sm bo'lgan markaziy doiraga tushish ehtimolini geometrik ehtimollik orqali toping.

<details style="margin-top: 1rem; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); cursor: pointer;">
<summary style="font-weight: 700; color: var(--primary);">To'liq yechimlar va javoblar</summary>

**1-masala:** $P_5 = 5! = 120$ xil usul.

    

**2-masala:** 36 ta kartada 4 ta tuz bor: $P = \frac{4}{36} = \frac{1}{9}$.

    

**3-masala:** $n = C_{10}^2 = 45$. $m = C_6^2 = 15$. $P = \frac{15}{45} = \frac{1}{3}$.

    

**4-masala:** Yuzalar nisbati: $P = \frac{\pi r^2}{\pi R^2} = \frac{5^2}{10^2} = \frac{25}{100} = 0.25$ ($25\%$).

</details>
