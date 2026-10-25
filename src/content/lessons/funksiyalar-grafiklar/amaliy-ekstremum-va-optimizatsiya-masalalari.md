---
title: "Amaliy ekstremum va optimallashtirish masalalari"
module: "funksiyalar-grafiklar"
order: 6
description: "Kesmadagi eng katta va eng kichik qiymat, amaliy geometrik va iqtisodiy optimallashtirish masalalari (maksimal hajm, minimal material sarfi) va ko'p usulli yechimlar."
---

## Kirish: Eng yaxshi yechimni qidirish san'ati

Real hayotda har qanday muhandis, iqtisodchi yoki dasturchi bir xil savolga javob izlaydi:
- Berilgan tunuka bo'lagidan qanday qilib **eng katta sig'imli** ochiq quti yasash mumkin?
- Belgilangan hajmdagi silindrik idishga (konserva bankasiga) **eng kam metall** sarflanishi uchun uning o'lchamlari qanday bo'lishi kerak?
- Korxona o'z mahsulotiga qanday narx qo'ysa, sof **foyda maksimal** bo'ladi?

Bunday masalalar **amaliy optimallashtirish (ekstremum) masalalari** deb ataladi va ularning matematik asosi differensial hisob hisoblanadi.

---

## 1. Kesmada funksiyaning eng katta va eng kichik qiymatini topish

Veyershtrass teoremasiga ko'ra, $[a; b]$ kesmada uzluksiz bo'lgan har qanday funksiya shu kesmada o'zining **eng katta** ($M$) va **eng kichik** ($m$) qiymatlariga albatta erishadi.

> **Qat'iy algoritm:**
> 1. Funksiyaning hosilasi $f'(x)$ topiladi va nolga tenglashtirilib kritik nuqtalar topiladi;
> 2. Faqat berilgan **$(a; b)$ oraliq ichiga tushadigan** kritik nuqtalar tanlab olinadi;
> 3. Funksiyaning ushbu ichki kritik nuqtalardagi qiymatlari $f(x_k)$va kesma uchlaridagi qiymatlari$f(a), f(b)$ hisoblanadi;
> 4. Hosil bo'lgan barcha sonlar solishtirilib, eng kattasi $\max_{[a; b]} f(x)$va eng kichigi$\min_{[a; b]} f(x)$ deb olinadi.

---

## 2. Amaliy optimallashtirish masalasini yechishning 4 qadami

1. **O'zgaruvchini tanlash:** Optimallashtirilishi kerak bo'lgan miqdorni (masalan, yuza $S$, hajm $V$, foyda $P$) bitta erkli parametr $x$ ga bog'liq funksiya sifatida ifodalash.
2. **Cheklovlar va fizik sohani aniqlash:** $x$qanday oraliqda o'zgarishi mumkin? (Masalan uzunlik$x > 0$ bo'lishi shart).
3. **Differensiallash va kritik nuqtani topish:** $f'(x) = 0$ qilib, optimal parametr qiymati topiladi.
4. **Ekstremum turini tekshirish:** 2-hosila $f''(x)$ ishorasi yoki ma'no jihatidan haqiqatan ham minimum yoki maksimum ekanligini tasdiqlash.

---

## Bitta masalani 2 xil usulda yechish va solishtirish

> **Klassik muhandislik masalasi:**
> Hajmi $V = 54\pi \text{ sm}^3$bo'lgan yopiq silindrik konserva bankasi tayyorlanishi kerak. Bankaga sarflanadigan tunuka yuzasi eng kam (minimal) bo'lishi uchun silindrning radiusi$R$va balandligi$H$ qanday bo'lishi kerak?

### 1-usul: Differensial hisob (Hosilalar usuli)
1. Silindr hajmi va to'la sirti:
   $$V = \pi R^2 H = 54\pi \implies R^2 H = 54 \implies H = \frac{54}{R^2}$$
2. To'la sirt yuzi:
   $$S = 2S_{\text{asos}} + S_{\text{yon}} = 2\pi R^2 + 2\pi R H$$
   $H$ni$R$ orqali ifodalaymiz:
   $$S(R) = 2\pi R^2 + 2\pi R \cdot \frac{54}{R^2} = 2\pi R^2 + \frac{108\pi}{R} \quad (R > 0)$$
3. Hosila olamiz va nolga tenglashtiramiz:
   $$S'(R) = 4\pi R - \frac{108\pi}{R^2} = 0$$
   $$\pi \text{ ga qisqartirib: } 4R = \frac{108}{R^2} \implies 4R^3 = 108 \implies R^3 = 27 \implies \mathbf{R = 3 \text{ sm}}$$
4. Balandlikni topamiz:
   $$H = \frac{54}{R^2} = \frac{54}{3^2} = \frac{54}{9} = \mathbf{6 \text{ sm}}$$
5. Minimumligini tekshiramiz:
   $$S''(R) = 4\pi + \frac{216\pi}{R^3} \implies S''(3) = 4\pi + \frac{216\pi}{27} = 12\pi > 0 \implies \text{Lokal minimum!}$$
*Xulosa:* $H = 6 \text{ sm}, R = 3 \text{ sm}$. E'tibor bering: $H = 2R$, ya'ni bankaning balandligi uning diametriga teng bo'lganda sirt minimal bo'ladi!

### 2-usul: Koshi o'rta qiymatlar tengsizligi (Algebraik usul)
$S(R) = 2\pi R^2 + \frac{54\pi}{R} + \frac{54\pi}{R}$ ko'rinishida 3 ta musbat hadga ajratamiz.
Uchta musbat son uchun Koshi tengsizligi: $\frac{a + b + c}{3} \ge \sqrt[3]{a \cdot b \cdot c}$:
$$
S(R) \ge 3 \sqrt[3]{(2\pi R^2) \cdot \left(\frac{54\pi}{R}\right) \cdot \left(\frac{54\pi}{R}\right)} = 3 \sqrt[3]{2\pi \cdot 54\pi \cdot 54\pi} = 3 \sqrt[3]{5832 \pi^3} = 3 \cdot 18\pi = \mathbf{54\pi}
$$
Tenglik faqat uchala had o'zaro teng bo'lganda bajariladi:
$$
2\pi R^2 = \frac{54\pi}{R} \implies R^3 = 27 \implies \mathbf{R = 3 \text{ sm}}, \quad \mathbf{H = 6 \text{ sm}}
$$

*Xulosa:* Har ikkala usul bir xil natija berdi! Hosilalar usuli universal bo'lib, har qanday murakkab qonuniyatda ishlaydi.

---

> [!WARNING] Imtihondagi tuzoqlar va ko'p uchraydigan xatoliklar
> 1. **Kesma uchlarini tekshirishni unutish:**
>    Agar masalada $[a; b]$kesmada eng katta qiymat so'ralsa, faqat$f'(x) = 0$nuqtalardagi qiymatni olib to'xtab qolish xato! Funksiyaning kesma chetidagi qiymati$f(a)$yoki$f(b)$ ichki ekstremumdan ancha katta bo'lishi mumkin.
> 2. **Ochiq va yopiq idishlar:**
>    Konserva bankasi masalasida idish "ochiq" (qopqoqsiz) bo'lsa, bitta asos olinadi: $S = \pi R^2 + 2\pi R H$. "Yopiq" bo'lsa, ikkita asos olinadi: $S = 2\pi R^2 + 2\pi R H$. Masala shartini diqqat bilan o'qish shart!
> 3. **Fizik cheklovlarni unutish:**
>    Uzunlik, massa, hajm faqat musbat bo'lishi shart ($R > 0, x > 0$). Manfiy ildizlar darhol chetlatiladi.

---

## Mustaqil yechish uchun amaliy mashqlar

1. $f(x) = x^3 - 3x + 2$funksiyaning$[-2; 3]$ kesmadagi eng katta va eng kichik qiymatlarini toping.
2. Fermer 120 metr panjara yordamida daryo bo'yida to'g'ri to'rtburchak shaklidagi ekin maydonini o'ramoqchi (daryo tomoniga panjara qo'yilmaydi). Maydon yuzi maksimal bo'lishi uchun uning o'lchamlari qanday bo'lishi kerak?
3. O'lchami $30 \times 30$ sm bo'lgan kvadrat tunukaning to'rtta burchagidan teng kvadratlar qirqib olindi va bukilgan chetlaridan ochiq quti yasaldi. Quti hajmi maksimal bo'lishi uchun qirqib olinadigan burchak o'lchami qancha bo'lishi kerak?

<details style="margin-top: 1rem; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); cursor: pointer;">
<summary style="font-weight: 700; color: var(--primary);">👉 Yechimni tekshirish</summary>

**1-masala:**

    

$f'(x) = 3x^2 - 3 = 0 \implies x = \pm 1$(ikkalasi ham$[-2; 3]$ ga kiradi).

    

      
- $f(-2) = -8 + 6 + 2 = 0$;

      
- $f(-1) = -1 + 3 + 2 = 4$;

      
- $f(1) = 1 - 3 + 2 = 0$;

      
- $f(3) = 27 - 9 + 2 = 20$.

    

    

**Eng katta:** $\max = \mathbf{20}$ ($x = 3$da); **Eng kichik:**$\min = \mathbf{0}$ ($x = -2$va$x = 1$ da).

    <hr style="margin: 0.75rem 0; border: none; border-top: 1px dashed var(--border-color);" />

    

**2-masala:**

    

Daryo tomoniga panjara kerak emas: $2x + y = 120 \implies y = 120 - 2x$.

    

Yuza: $S(x) = x(120 - 2x) = 120x - 2x^2$.

    

$S'(x) = 120 - 4x = 0 \implies \mathbf{x = 30 \text{ m}}, \quad \mathbf{y = 60 \text{ m}}$.

    

Maksimal yuza: $S = 30 \times 60 = \mathbf{1800 \text{ m}^2}$.

    <hr style="margin: 0.75rem 0; border: none; border-top: 1px dashed var(--border-color);" />

    

**3-masala:**

    

Qirqiladigan burchak $x$. Unda quti asosi $(30 - 2x) \times (30 - 2x)$, balandligi $x$.

    

$V(x) = x(30 - 2x)^2 = x(900 - 120x + 4x^2) = 4x^3 - 120x^2 + 900x$.

    

$V'(x) = 12x^2 - 240x + 900 = 0 \implies x^2 - 20x + 75 = 0 \implies (x - 5)(x - 15) = 0$.

    

$x = 15$da hajm 0 bo'ladi. Demak, optimal burchak:$\mathbf{x = 5 \text{ sm}}$. Maksimal hajm: $5(20)^2 = 2000 \text{ sm}^3$.

</details>
