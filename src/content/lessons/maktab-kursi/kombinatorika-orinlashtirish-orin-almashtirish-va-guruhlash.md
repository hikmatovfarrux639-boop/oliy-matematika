---
title: "Kombinatorika asoslari: O'rin almashtirishlar, o'rinlashtirishlar va guruhlashlar (Takrorli va takrorsiz)"
module: "maktab-kursi"
order: 12
description: "Kombinatorikaning asosiy qoidalari: ko'paytirish va qo'shish qoidasi, o'rin almashtirishlar Pₙ, o'rinlashtirishlar Aₙᵏ, guruhlashlar Cₙᵏ (kombinatsiyalar), takrorli kombinatorika va qaysi formulani qachon tanlash sxemasi."
---

## Kirish: Kombinatorika nima va u nima uchun kerak?

Kombinatorika — bu chekli to'plam elementlaridan turli shartlar asosida kombinatsiyalar tuzish va ularning umumiy sonini bittalab sanamasdan, analitik formulalar orqali hisoblash bilan shug'ullanadigan matematika bo'limidir.

Kombinatorika barcha zamonaviy kriptografiya (parollar xavfsizligi), dasturlash (algoritmlar murakkabligi), ma'lumotlar tuzilmasi, axborot nazariyasi va ayniqsa **Ehtimollar nazariyasining** poydevori hisoblanadi. Chunki klassik ehtimollik formulasidagi $P(A) = \frac{m}{n}$ kasrning surat va maxrajini hisoblash aynan kombinatorika formulalari orqali amalga oshiriladi.

Ko'p talabalar formulalarni ($P_n, A_n^k, C_n^k$) yodlashadi, lekin berilgan masalada **aynan qaysi formulani qo'llash kerakligini** ajrata olmay xato qilishadi. Ushbu darsda **Mathprofi** standarti bo'yicha eng tushunarli qarorlar daraxti va to'liq yechilgan misollarni o'rganamiz.

---

## 1. Ikkita fundamental qoida: Qo'shish va Ko'paytirish

Barcha murakkab kombinatorik formulalar atigi ikkita oddiy mantiqiy qoidaga asoslanadi:

### A. Qo'shish qoidasi ("YOKI" mantiqiy bog'lovchisi):
Agar biror $A$ obyektni $m$ xil usulda, boshqa $B$ obyektni esa $n$ xil usulda tanlash mumkin bo'lsa va bu tanlovlar bir vaqtda ro'y bermasa, u holda **"yo $A$, yoki $B$"** obyektni tanlash jami:
$$m + n \quad \text{xil usulda amalga oshiriladi.}$$

*Misol:* Javonda 10 ta matematika va 8 ta fizika kitobi bor. Ixtiyoriy bitta kitobni $10 + 8 = 18$ xil usulda tanlash mumkin.

### B. Ko'paytirish qoidasi ("VA" mantiqiy bog'lovchisi):
Agar birinchi harakatni $m$ xil usulda, shundan so'ng ikkinchi harakatni $n$ xil usulda bajarish mumkin bo'lsa, u holda **"birinchi harakat VA ikkinchi harakat"** ketma-ketligini bajarish jami:
$$m \times n \quad \text{xil usulda amalga oshiriladi.}$$

*Misol:* Agar talabada 3 xil ko'ylak va 4 xil shim bo'lsa, u kiyinish uchun $3 \times 4 = 12$ xil turli juftlikni tanlashi mumkin.

---

## 2. Asosiy kombinatorik tushunchalarning qarorlar daraxti

Masala shartini o'qiganda o'zingizga quyidagi **2 ta savolni** bering:

```
                  Barcha n ta element qatnashadimi?
                             │
            ┌────────────────┴────────────────┐
           HA                               YO'Q (faqat k tasi tanlanadi)
            │                                 │
     O'RIN ALMASHTIRISH                 Tartib muhimmi?
          (Pₙ)                                │
                              ┌───────────────┴───────────────┐
                             HA                             YO'Q
                              │                               │
                       O'RINLASHTIRISH                     GURUHLASH
                           (Aₙᵏ)                             (Cₙᵏ)
```

---

## 3. Takrorsiz kombinatorika formulalari

### 1. O'rin almashtirishlar (Permutatsiyalar): $P_n$
$n$ ta turli elementning o'zaro joylashish tartibini almashtirishlar soni:
$$P_n = n! = 1 \cdot 2 \cdot 3 \dots n$$
*(Eslatma: $0! = 1$ deb qabul qilingan).*

*Misol:* 5 nafar talabani bitta qatorga necha xil usulda safga tizish mumkin?
$$P_5 = 5! = 1 \cdot 2 \cdot 3 \cdot 4 \cdot 5 = 120\text{ xil usulda}.$$

---

### 2. O'rinlashtirishlar (Razmesheniya): $A_n^k$
$n$ ta elementdan $k$ tasini tanlab olib, ularni **tartib bilan (kim birinchi, kim ikkinchi bo'lishi muhim)** joylashtirish:
$$A_n^k = \frac{n!}{(n - k)!} = n(n - 1)(n - 2)\dots(n - k + 1)$$

*Misol:* Guruhdagi 20 nafar talaba ichidan guruh sardori (starosta) va uning yordamchisini necha xil usulda saylash mumkin?
(Bu yerda tartib muhim, chunki kim sardor, kim yordamchi bo'lishining farqi bor):
$$A_{20}^2 = \frac{20!}{(20 - 2)!} = \frac{20!}{18!} = 20 \times 19 = 380\text{ xil usulda}.$$

---

### 3. Guruhlashlar (Kombinatsiyalar): $C_n^k$
$n$ ta elementdan $k$ tasini tanlash, bunda **tartib umuman muhim emas** (kim birinchi tanlangani emas, faqat jamoaga kirganligi muhim):
$$C_n^k = \binom{n}{k} = \frac{n!}{k!(n - k)!} = \frac{A_n^k}{P_k}$$

### Asosiy xossalari:
1. Simmetriklik: $C_n^k = C_n^{n-k}$ (Masalan, $C_{10}^8 = C_{10}^2 = \frac{10 \cdot 9}{2} = 45$).
2. Paskal qoidasi: $C_n^k + C_n^{k+1} = C_{n+1}^{k+1}$.
3. Qism to'plamlar soni: $C_n^0 + C_n^1 + \dots + C_n^n = 2^n$.

*Misol:* O'sha 20 nafar talaba ichidan musobaqaga boradigan 2 nafar vakilni necha xil usulda tanlash mumkin?
(Bu yerda ikkala vakil teng huquqli, tartib muhim emas):
$$C_{20}^2 = \frac{20 \times 19}{2 \times 1} = 190\text{ xil usulda}.$$

---

## 4. Takrorli kombinatorika (Elementlar takrorlanishi mumkin bo'lganda)

| Tur | Sharti | Formulalar |
| :--- | :--- | :--- |
| **Takrorli o'rin almashtirish** | $n$ ta element ichida $k_1$ ta birinchi xil, $k_2$ ta ikkinchi xil bo'lsa | $$P_n(k_1, k_2, \dots, k_m) = \frac{n!}{k_1! \cdot k_2! \dots k_m!}$$ |
| **Takrorli o'rinlashtirish** | $n$ xil elementdan $k$ tasini qayta tanlash mumkin | $$\bar{A}_n^k = n^k$$ |
| **Takrorli guruhlash** | Tartib muhim emas, har bir turdan istalgancha olish mumkin | $$\bar{C}_n^k = C_{n + k - 1}^k = \frac{(n + k - 1)!}{k!(n - 1)!}$$ |

### Mashhur misol ("ANANAS" so'zi):
"ANANAS" so'zidagi harflarni o'rnini almashtirib, nechta turli "so'z" hosil qilish mumkin?
Jami $n = 6$ ta harf bor:
- "A" harfi — 3 marta takrorlangan ($k_1 = 3$);
- "N" harfi — 2 marta takrorlangan ($k_2 = 2$);
- "S" harfi — 1 marta takrorlangan ($k_3 = 1$).
Takrorli permutatsiya formulasi:
$$P_6(3, 2, 1) = \frac{6!}{3! \cdot 2! \cdot 1!} = \frac{720}{6 \cdot 2 \cdot 1} = \frac{720}{12} = 60\text{ ta turli so'z}.$$

---

## 5. To'liq yechilgan murakkab amaliy misollar

### 1-Misol (Aralash qoidalar — Lotereya / Ehtimollik masalasi):
Qutida 12 ta oq va 8 ta qora shar bor. Tavakkaliga 5 ta shar olindi. Olingan sharlardan **roppa-rosa 3 tasi oq va 2 tasi qora** bo'lishi variantlari sonini toping.

**Yechish:**
1. 12 ta oq shardan 3 tasini tanlash (tartib muhim emas):
   $$C_{12}^3 = \frac{12 \cdot 11 \cdot 10}{3 \cdot 2 \cdot 1} = 220$$
2. 8 ta qora shardan 2 tasini tanlash:
   $$C_8^2 = \frac{8 \cdot 7}{2 \cdot 1} = 28$$
3. Bizga 3 ta oq **VA** 2 ta qora shar kerak, shuning uchun ko'paytirish qoidasini qo'llaymiz:
   $$N = C_{12}^3 \times C_8^2 = 220 \times 28 = 6\,160\text{ ta kombinatsiya}.$$

---

### 2-Misol (PIN-kodlar xavfsizligi):
Bank plastik kartasining 4 xonali PIN-kodi (0 dan 9 gacha raqamlar):
1. Raqamlar takrorlanishi mumkin bo'lsa, nechta PIN-kod mavjud?
2. Raqamlar takrorlanmasligi shart bo'lsa-chi?

**Yechish:**
1. Har bir 4 ta o'rin uchun 10 ta raqamdan istalganini tanlash mumkin:
   $$N_1 = \bar{A}_{10}^4 = 10 \times 10 \times 10 \times 10 = 10^4 = 10\,000\text{ ta}.$$
2. Raqamlar takrorlanmasa:
   $$N_2 = A_{10}^4 = 10 \times 9 \times 8 \times 7 = 5\,040\text{ ta}.$$

---

## ⚠️ Talabalar eng ko'p yo'l qo'yadigan xatolar va tuzoqlar

1. **$A_n^k$ va $C_n^k$ ni adashtirish (Eng asosiy tuzoq!):**
   Har doim o'zingizdan so'rang: "Agar men tanlagan elementlarimning o'rnini almashtirsam, yangi natija hosil bo'ladimi?"
   - Ha bo'ladi (Prezident va Vitse-prezident, 1-o'rin va 2-o'rin) $\implies A_n^k$.
   - Yo'q, farqi yo'q (jamoaga 2 kishi, savatga 3 ta olma) $\implies C_n^k$.
2. **0 faktorialni nol deb hisoblash:**
   $0! = 1$ ga teng, $0$ emas! Masalan, $C_n^n = \frac{n!}{n! 0!} = \frac{n!}{n! \cdot 1} = 1$.
3. **Qo'shish va ko'paytirishni noto'g'ri tanlash:**
   "Hammasi birga kerak bo'lsa" — ko'paytiriladi ($\times$); "Yo bu variant, yo boshqa variant yetarli bo'lsa" — qo'shiladi ($+$).

---

## ✏️ Mustaqil yechish uchun amaliy mashqlar va javoblar

1. $C_7^3$ ni hisoblang.
   *Javob:* $\frac{7 \cdot 6 \cdot 5}{3 \cdot 2 \cdot 1} = 35$.
2. 7 nafar mehmonni dumaloq stol atrofida necha xil usulda o'tqazish mumkin? (Doiraviy permutatsiya: $(n-1)!$).
   *Javob:* $(7 - 1)! = 6! = 720$.
3. 1, 2, 3, 4, 5 raqamlaridan raqamlari takrorlanmaydigan nechta 3 xonali son tuzish mumkin?
   *Javob:* $A_5^3 = 5 \cdot 4 \cdot 3 = 60$.
