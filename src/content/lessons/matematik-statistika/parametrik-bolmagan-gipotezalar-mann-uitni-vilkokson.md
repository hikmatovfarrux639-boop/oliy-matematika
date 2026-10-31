---
title: "Parametrik bo'lmagan statistik mezonlar: Mann-Uitni (U), Vilkokson va Kolmogorov-Smirnov mezonlari"
module: "matematik-statistika"
order: 11
description: "Taqsimot qonuni noma'lum yoki normal bo'lmaganda nima qilish kerak? Parametrik bo'lmagan mezonlar: Mann-Uitni U-mezoni, bog'liq tanlanmalar uchun Vilkokson T-mezoni, Kolmogorov-Smirnov mezoni va ranglar tahlili."
---

## Kirish: Normal taqsimot buzilganda nima qilish kerak?

Klassik matematik statistikada gipotezalarni tekshirishning aksariyat usullari — Styudent $t$-testi, Fisher $F$-testi, ANOVA — qat'iy bir shartga tayanadi: **bosh to'plam normal taqsimotga bo'ysunishi shart!**

Ammo real hayotda (tibbiyotda, ijtimoiy so'rovnomalarda, internet-marketingda, mijozlar reytinglarida) ma'lumotlar ko'pincha:
- Normal taqsimlanmagan (kuchli asimmetriyaga ega);
- Tanlanma hajmi juda kichik ($n < 30$), shuning uchun markaziy limit teoremaga tayana olmaymiz;
- O'lchovlar sonli emas, balki tartibli (ballar, 1 dan 5 gacha baholar, "yomon/o'rta/yaxshi").

Bunday vaziyatlarda $t$-testni qo'llash mutlaqo qo'pol xatoliklarga va soxta ilmiy xulosalarga olib keladi. Aynan shunday holatlar uchun **parametrik bo'lmagan (non-parametric) mezonlar** ishlab chiqilgan. Ular taqsimot shakliga hech qanday talab qo'ymaydi va sonlarning o'rniga ularning **tartib o'rni (rangi — rank)** bilan ishlaydi!

---

## 1. Parametrik va parametrik bo'lmagan mezonlar taqqoslash jadvali

| Tadqiqot maqsadi | Parametrik mezon (Normal taqsimotda) | Parametrik bo'lmagan muqobili (Har qanday taqsimotda!) |
| :--- | :--- | :--- |
| **2 ta mustaqil guruhni taqqoslash** | 2 tanlanmali Styudent $t$-testi | **Mann-Uitni $U$-mezoni (Mann-Whitney U)** |
| **2 ta bog'liq (juft) guruhni taqqoslash** | Juftlik Styudent $t$-testi (Before/After) | **Vilkokson $T$-mezoni (Wilcoxon signed-rank)** |
| **3 va undan ortiq guruhlarni taqqoslash** | Bir omilli ANOVA | **Kruskal-Uollis $H$-mezoni (Kruskal-Wallis)** |
| **Taqsimot shaklini tekshirish** | Pirson $\chi^2$ moslik mezoni | **Kolmogorov-Smirnov mezoni (K-S test)** |

---

## 2. Mann-Uitni $U$-mezoni (Mustaqil tanlanmalar uchun)

Mann-Uitni mezoni ikkita mustaqil guruh (masalan, yangi dori ichgan bemorlar va platsebo olgan bemorlar) o'rtasida statistik jihatdan sezilarli farq bormi-yo'qligini tekshiradi.

### Algoritm:
1. **Birlashtirish va rang berish:**
   Ikkala tanlanma ($n_1$ va $n_2$) elementlari bitta umumiy qatorga o'sish tartibida tiziladi. Har bir songa $1$ dan $n_1 + n_2$ gacha **rang (tartib raqami)** beriladi.
   *(Agar teng sonlar bo'lsa, ularga o'rtacha rang beriladi: masalan, 3 va 4-o'rinlar teng bo'lsa, har biriga $\frac{3+4}{2} = 3.5$ beriladi).*
2. **Ranglar yig'indisini hisoblash:**
   Birinchi guruh elementlari ranglari yig'indisi $R_1$, ikkinchi guruhniki esa $R_2$ hisoblanadi.
   Tekshirish formulasi: $R_1 + R_2 = \frac{(n_1 + n_2)(n_1 + n_2 + 1)}{2}$.
3. **$U_1$ va $U_2$ statistikasini hisoblash:**
   $$U_1 = n_1 \cdot n_2 + \frac{n_1(n_1 + 1)}{2} - R_1$$
   $$U_2 = n_1 \cdot n_2 + \frac{n_2(n_2 + 1)}{2} - R_2$$
4. **Haqiqiy Mann-Uitni statistikasi:**
   $$U = \min(U_1, U_2)$$
5. **Qaror qabul qilish qoidasi:**
   Kritik jadvaldan berilgan ahamiyatlilik darajasi ($\alpha = 0.05$) bo'yicha $U_{\text{krit}}$ topiladi.
   - Agar **$U_{\text{hisob}} \le U_{\text{krit}}$** bo'lsa — nol gipoteza $H_0$ rad etiladi! Guruhlar orasida **sezilarli statistik farq mavjud** deb xulosa qilinadi!

*(E'tibor bering: Mann-Uitni mezonida boshqa ko'plab testlardan farqli o'laroq, farq qanchalik kuchli bo'lsa, hisoblangan $U$ shunchalik KICHIK bo'ladi!)*

---

## 3. Vilkokson $T$-mezoni (Bog'liq juft tanlanmalar uchun)

Bu mezon bitta guruhning biror ta'sirdan **oldingi va keyingi** natijalarini (masalan, o'quvchilarning yangi metodikadan oldingi va keyingi test ballarini) taqqoslashda qo'llaniladi.

### Algoritm:
1. Har bir juftlik uchun ayirma hisoblanadi: $d_i = y_i - x_i$.
2. Nolga teng ayirmalar ($d_i = 0$) hisobdan chiqariladi.
3. Qolgan ayirmalar **ishorasiga qaramasdan (moduli bo'yicha)** o'sish tartibida ranglanadi.
4. Ranglar musbat va manfiy ayirmalar bo'yicha alohida jamlanadi ($W^+$ va $W^-$).
5. Vilkokson statistikasi: $T = \min(W^+, W^-)$.
6. Agar $T_{\text{hisob}} \le T_{\text{krit}}$ bo'lsa — ta'sir natijasida statistik ishonchli o'zgarish sodir bo'lgan!

---

## 4. Kolmogorov-Smirnov $\lambda$-mezoni

Kolmogorov-Smirnov mezoni empirik (tajribaviy) taqsimot funksiyasi $F_n^*(x)$ bilan nazariy taqsimot funksiyasi $F_0(x)$ orasidagi **maksimal vertikal masofani** tekshiradi:
$$D = \max_{-\infty < x < +\infty} |F_n^*(x) - F_0(x)|$$

Kolmogorov statistikasi:
$$\lambda = D \sqrt{n}$$

Agar $\lambda < 1.36$ bo'lsa, $0.05$ xatolik bilan tajriba natijalari nazariy qonunga to'liq mos keladi deb xulosa qilinadi.

---

## 5. To'liq yechilgan namunaviy misol (Mann-Uitni testi)

**Masala:**
Ikkita turli o'qitish metodikasi bo'yicha o'qitilgan talabalar guruhining test natijalari (ballari) quyidagicha bo'ldi:
- 1-Guruh ($n_1 = 4$): $12, 15, 18, 20$
- 2-Guruh ($n_2 = 5$): $8, 10, 11, 13, 14$

$\alpha = 0.05$ darajada bu ikki metodika samaradorligi orasida sezilarli farq bormi? ($U_{\text{krit}}(4, 5; 0.05) = 1$).

**Yechish:**
1. Barcha $4 + 5 = 9$ ta natijani o'sish tartibida bitta qatorga tizib, rang beramiz:

| Ball | Guruh | Rang |
| :---: | :---: | :---: |
| 8 | 2-guruh | 1 |
| 10 | 2-guruh | 2 |
| 11 | 2-guruh | 3 |
| 12 | **1-guruh** | **4** |
| 13 | 2-guruh | 5 |
| 14 | 2-guruh | 6 |
| 15 | **1-guruh** | **7** |
| 18 | **1-guruh** | **8** |
| 20 | **1-guruh** | **9** |

2. Ranglar yig'indisini hisoblaymiz:
   - 1-guruh uchun: $R_1 = 4 + 7 + 8 + 9 = 28$
   - 2-guruh uchun: $R_2 = 1 + 2 + 3 + 5 + 6 = 17$
   Tekshirish: $R_1 + R_2 = 28 + 17 = 45$. Formula bo'yicha: $\frac{9 \cdot 10}{2} = 45$ (to'g'ri ✅).

3. $U_1$ va $U_2$ ni hisoblaymiz:
   $$U_1 = 4 \cdot 5 + \frac{4(5)}{2} - 28 = 20 + 10 - 28 = 2$$
   $$U_2 = 4 \cdot 5 + \frac{5(6)}{2} - 17 = 20 + 15 - 17 = 18$$

4. Mezon qiymati:
   $$U = \min(U_1, U_2) = \min(2, 18) = 2$$

5. **Qaror qabul qilish:**
   Jadval qiymati: $U_{\text{krit}} = 1$.
   Bizda: $U_{\text{hisob}} = 2 > U_{\text{krit}} = 1$.
   Shart bajarilmadi ($U \le U_{\text{krit}}$ bo'lishi kerak edi).

**Ilmiy xulosa:**
$H_0$ gipotezasi qabul qilinadi. Mavjud tanlanma hajmida ikki metodika orasidagi farq statistik jihatdan sezilarli darajada isbotlanmadi (tasodifiy tebranishlar doirasida).

---

## ⚠️ Talabalar eng ko'p yo'l qo'yadigan xatolar va tuzoqlar

1. **Qaror qabul qilish qoidasini teskari talqin qilish:**
   Oddiy testlarda $T > T_{\text{krit}}$ bo'lsa $H_0$ rad etiladi. Ammo **Mann-Uitni va Vilkoksonda $U \le U_{\text{krit}}$ bo'lgandagina farq isbotlangan bo'ladi!** Ko'pchilik $2 > 1$ ni ko'rib, "farq bor" deb xato xulosa chiqaradi.
2. **Bog'liq va mustaqil tanlanmalarni adashtirish:**
   Agar bitta odam ustida "davolanishdan oldin va keyin" o'lchov o'tkazilsa — bu bog'liq tanlanma bo'lib, unga Mann-Uitni emas, **Vilkokson** qo'llanilishi shart!
3. **Teng ballarga noto'g'ri rang berish:**
   Agar bir nechta talaba bir xil ball olsa, ularga alohida ketma-ket butun son berib bo'lmaydi — o'rtacha arifmetik rang hisoblanishi kerak.

---

## ✏️ Mustaqil yechish uchun amaliy mashqlar va javoblar

1. Parametrik bo'lmagan mezonlarning asosiy afzalligi nimada?
   *Javob:* Ular ma'lumotlarning normal taqsimotiga bo'ysunishini talab qilmaydi va kichik hajmdagi tanlanmalarda ham to'g'ri ishlaydi.
2. Agar $n_1 = 3, n_2 = 3$ va $R_1 = 15$ bo'lsa, $U_1$ ni hisoblang.
   *Javob:* $U_1 = 3 \cdot 3 + \frac{3 \cdot 4}{2} - 15 = 9 + 6 - 15 = 0$.
3. Agar $U_{\text{hisob}} = 0$ va $U_{\text{krit}} = 1$ bo'lsa, qanday xulosa qilinadi?
   *Javob:* $0 \le 1$ bo'lgani sababli guruhlar orasida 95% ishonch bilan statistik sezilarli farq mavjud.
