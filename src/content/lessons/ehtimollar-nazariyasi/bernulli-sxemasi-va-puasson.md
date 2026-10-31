---
title: "Bernulli sxemasi, Laplas va Puasson teoremalari"
module: "ehtimollar-nazariyasi"
order: 3
description: "Mustaqil takroriy sinovlar, Bernulli formulasi, eng katta ehtimolli son k0, Puasson asimptotik qonuni va Muavr-Laplas teoremalari — ko'p usulli yechimlar va xatoliklar tahlili."
---

## Kirish: Qaytariluvchi mustaqil tajribalar

Amaliyotda va muhandislikda ko'pincha bir xil sharoitda ko'p marta takrorlanadigan tajribalar bilan ish ko'riladi:
- Sifat nazorati: konveyerdan o'tayotgan 1000 ta mikrosxemaning nechtasi yaroqsiz chiqadi?
- Telekommunikatsiya: serverga tushayotgan 10 000 ta tarmoq paketidan nechtasi yo'qoladi?
- Kriptografiya va xavfsizlik: foydalanuvchi parolini taxmin qilishda ketma-ket urinishlar.

Har bir sinovda hodisaning ro'y berish ehtimoli oldingi sinovlar natijasiga bog'liq bo'lmagan va o'zgarmasdan saqlanadigan bunday mustaqil takroriy sinovlar ketma-ketligi **Bernulli sxemasi** deb ataladi.

---

## 1. Bernulli formulasi va uning kombinatorik isboti

Faraz qilaylik, $n$ ta mustaqil sinov o'tkazilmoqda. Har bir sinovda:
- $A$ hodisaning ro'y berish (muvaffaqiyat) ehtimoli: $P(A) = p$;
- $A$ hodisaning ro'y bermaslik (qarama-qarshi hodisa) ehtimoli: $q = 1 - p$.

> **Bernulli formulasi:**
> $n$ ta mustaqil sinovda $A$ hodisaning **aynan $k$ marta** ro'y berishi ehtimoli:
>
> 
$$
> P_n(k) = C_n^k \cdot p^k \cdot q^{n - k} = \frac{n!}{k!(n - k)!} p^k q^{n - k}
> 
$$

### Formulaning kelib chiqishi (Mantiqiy isboti):
Hodisaning $k$ marta ro'y berishi va $(n - k)$ marta ro'y bermasligining aniq bir ketma-ketligi (masalan, dastlabki $k$ tasida ro'y berib, qolganlarida ro'y bermasligi) ehtimollarni ko'paytirish qoidasiga ko'ra:
$$
\underbrace{p \cdot p \dots p}_{k \text{ marta}} \cdot \underbrace{q \cdot q \dots q}_{(n - k) \text{ marta}} = p^k q^{n - k}
$$
Lekin bu $k$ ta muvaffaqiyat $n$ ta o'rin ichida har xil tartibda joylashishi mumkin.$n$ ta sinovdan aynan qaysi $k$ tasida muvaffaqiyat bo'lishini tanlash usullari soni esa guruhlashlar soni $C_n^k$ ga tengdir. Har bir kombinatsiya bir-birini inkor etuvchi elementar hodisa bo'lgani sababli, ehtimollarni qo'shish qoidasiga ko'ra $C_n^k \cdot p^k q^{n - k}$ hosil bo'ladi.

---

## 2. Eng katta ehtimolli son ($k_0$)

$n$ ta sinovda hodisaning ro'y berish ehtimollari $P_n(0), P_n(1), \dots, P_n(n)$ ichida qaysi biri eng katta qiymatga ega bo'ladi?

Bu son **eng katta ehtimolli son** (moda) $k_0$ deyiladi va quyidagi qo'shaloq tengsizlik orqali topiladi:

$$
n p - q \le k_0 \le n p + p
$$

Ushbu oraliqning uzunligi:
$$
(n p + p) - (n p - q) = p + q = 1
$$
bo'lgani sababli:
1. Agar $n p - q$ kasr son bo'lsa, ushbu oraliqda **yagona bitta butun son** yotadi va u $k_0$ bo'ladi.
2. Agar $n p - q$ butun son bo'lsa, oraliqning ikkala cheti ham butun son bo'ladi va **ikkita teng eng katta ehtimolli son**$k_0 = n p - q$ va $k_0' = n p + p$ mavjud bo'ladi: $P_n(k_0) = P_n(k_0')$.

---

## 3. Puasson asimptotik formulasi (Kam uchraydigan hodisalar)

Agar sinovlar soni $n$ juda katta ($n \ge 50$, hatto $n \ge 1000$) va har bir sinovda hodisaning ro'y berish ehtimoli $p$ juda kichik ($p \le 0.05, p \to 0$) bo'lsa, Bernulli formulasidagi $n!$ va $q^{n-k}$ larni hisoblash ulkan hisoblash xatolariga olib keladi.

Bunday holatda o'rtacha parametr $\lambda = n \cdot p = \text{const}$ deb olinadi va **Puasson asimptotik formulasi** qo'llaniladi:

$$
P_n(k) \approx \frac{\lambda^k \cdot e^{-\lambda}}{k!} \quad (\lambda = n \cdot p)
$$

### Chegaraviy o'tish isboti:
$$
P_n(k) = \frac{n(n-1)\dots(n-k+1)}{k!} \left(\frac{\lambda}{n}\right)^k \left(1 - \frac{\lambda}{n}\right)^{n - k}
$$
$n \to \infty$ da:
$$
\frac{n(n-1)\dots(n-k+1)}{n^k} \to 1, \qquad \left(1 - \frac{\lambda}{n}\right)^{-k} \to 1, \qquad \lim_{n \to \infty} \left(1 - \frac{\lambda}{n}\right)^n = e^{-\lambda}
$$
Natijada aynan $\frac{\lambda^k e^{-\lambda}}{k!}$ qoladi.

---

## 4. Muavr-Laplas teoremalari ($n$ katta, $p$ o'rtacha bo'lganda)

Agar $n$ katta bo'lib, $p$ nolga ham, birga ham yaqin bo'lmasa (amaliy mezon: $n p q \ge 9$ yoki $n p q \ge 10$):

### 1. Laplasning lokal formulasi (aynan $k$ marta ro'y berishi):
$$
P_n(k) \approx \frac{1}{\sqrt{n p q}} \cdot \varphi(x), \quad x = \frac{k - n p}{\sqrt{n p q}}
$$
bu yerda $\varphi(x) = \frac{1}{\sqrt{2\pi}} e^{-\frac{x^2}{2}}$ — standart normal zichlik (Gauss funksiyasi).
- **Muhim xossasi:** $\varphi(x)$ juft funksiya: $\varphi(-x) = \varphi(x)$. $x \ge 4$ bo'lganda $\varphi(x) \approx 0$.

### 2. Laplasning integral formulasi ($k_1$ dan $k_2$ gacha oraliqda):
$$
P(k_1 \le k \le k_2) \approx \Phi\left(\frac{k_2 - n p}{\sqrt{n p q}}\right) - \Phi\left(\frac{k_1 - n p}{\sqrt{n p q}}\right)
$$
bu yerda $\Phi(x) = \frac{1}{\sqrt{2\pi}} \int_0^x e^{-\frac{t^2}{2}} dt$ — Laplas funksiyasi.
- **Muhim xossalari:** $\Phi(x)$ toq funksiya: $\Phi(-x) = -\Phi(x)$. $x \ge 5$ bo'lganda $\Phi(x) \approx 0.5$.

---

## Bitta masalani 3 xil usulda yechish va taqqoslash

> **Masala:** Axborot tizimida har bir yuborilgan axborot blokining uzatilishida xatolik yuz berish ehtimoli $p = 0.01$. Jami $n = 200$ ta blok uzatildi. Aynan $k = 2$ ta blokda xatolik yuz berishi ehtimolini toping va usullarni solishtiring.

### 1-usul: Aniq Bernulli formulasi
$n = 200, \, k = 2, \, p = 0.01, \, q = 0.99$.
$$
P_{200}(2) = C_{200}^2 \cdot (0.01)^2 \cdot (0.99)^{198}
$$
1. $C_{200}^2 = \frac{200 \cdot 199}{2} = 19900$.
2. $(0.01)^2 = 0.0001$.
3. $(0.99)^{198} \approx 0.13660$.
$$
P_{200}(2) = 19900 \cdot 0.0001 \cdot 0.13660 = 1.99 \cdot 0.13660 \approx \mathbf{0.27183} \quad (27.18\%)
$$

### 2-usul: Puasson asimptotik formulasi
$p = 0.01$ juda kichik va $n = 200$ katta. Parametr:
$$
\lambda = n \cdot p = 200 \cdot 0.01 = 2
$$
Puasson formulasiga $k = 2$ ni qo'yamiz:
$$
P_{200}(2) \approx \frac{\lambda^2 \cdot e^{-\lambda}}{2!} = \frac{2^2 \cdot e^{-2}}{2} = 2 \cdot e^{-2} = \frac{2}{e^2} \approx \frac{2}{7.389056} \approx \mathbf{0.27067} \quad (27.07\%)
$$
*Nisbiy xatolik:* $\frac{|0.27183 - 0.27067|}{0.27183} \approx 0.4\%$ — juda yuqori aniqlik!

### 3-usul: Muavr-Laplas lokal formulasi
$n p = 2$, $n p q = 200 \cdot 0.01 \cdot 0.99 = 1.98$.
$\sqrt{n p q} = \sqrt{1.98} \approx 1.4071$.
$$
x = \frac{k - n p}{\sqrt{n p q}} = \frac{2 - 2}{1.4071} = 0
$$
Gauss funksiyasi jadvaliga ko'ra: $\varphi(0) = \frac{1}{\sqrt{2\pi}} \approx 0.3989$.
$$
P_{200}(2) \approx \frac{1}{1.4071} \cdot 0.3989 \approx \mathbf{0.2835} \quad (28.35\%)
$$
*Xulosa:* $n p q = 1.98 < 9$ bo'lganligi sababli, Muavr-Laplas usuli bu yerda $4.3\%$ xatolik beradi. Puasson usuli esa deyarli 10 barobar aniqroq ishladi. Bu klassik qoidani tasdiqlaydi: $p \le 0.05$ da doimo Puasson afzal!

---

> [!WARNING] Imtihondagi tuzoqlar va ko'p uchraydigan xatoliklar
> 1. **"Kamida 1 marta" tuzog'i:** Agar masalada "hodisa kamida 1 marta ro'y berishi ehtimolini toping" deyilsa ($P(k \ge 1)$), $P(1) + P(2) + \dots + P(n)$ deb hisoblamang! Bu juda uzun. Doimo qarama-qarshi hodisadan foydalaning:
>    $$ P(k \ge 1) = 1 - P(0) = 1 - q^n $$
> 2. **Formulani noto'g'ri tanlash:** Agar $p = 0.4$ va $n = 100$ bo'lsa, Puassonni aslo qo'llab bo'lmaydi ($\lambda = 40$ bo'lib, $e^{-40}$ hisoblashni buzadi). Bu holda faqat Muavr-Laplas formulasi to'g'ri keladi ($npq = 24 > 10$).
> 3. **Laplas funksiyasi ishorasi:** $\Phi(-x) = -\Phi(x)$. Agar $\Phi(-1.5)$ kerak bo'lsa, $-\Phi(1.5)$ deb olinadi. Jadvalda manfiy sonlar berilmaydi.
> 4. **Eng katta ehtimolli son $k_0$ kasr bo'la olmaydi:** Agar $np - q = 12.3 \le k_0 \le 13.1$ bo'lsa, $k_0 = 13$ bo'ladi. U doimo butun son bo'lishi shart.

---

## Mustaqil yechish uchun amaliy mashqlar

1. Tanga 8 marta tashlanganda gerb tomoni 5 martadan ko'p tushmasligi ehtimolini toping ($P(k \le 5)$).
2. Qutidagi 1000 ta detalning har biri 0.003 ehtimol bilan nuqsonli bo'lishi mumkin. Qutidan tavakkaliga olingan detallar orasida nuqsonli detallar soni 2 tadan oshmasligi ehtimolini Puasson formulasi orqali hisoblang.
3. 400 ta mustaqil sinovning har birida hodisa $p = 0.8$ ehtimol bilan ro'y beradi. Hodisaning eng katta ehtimolli soni $k_0$ ni va u aynan $k_0$ marta ro'y berishi ehtimolini Laplas lokal formulasi orqali toping.

<details style="margin-top: 1rem; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); cursor: pointer;">
<summary style="font-weight: 700; color: var(--primary);">👉 Yechimni tekshirish</summary>

**1-masala:**

    

Qarama-qarshi hodisa orqali yechish ancha qisqa: $P(k \le 5) = 1 - [P(6) + P(7) + P(8)]$.

    

      
- $P(8) = C_8^8 (0.5)^8 = 1/256$-$P(7) = C_8^7 (0.5)^8 = 8/256$-$P(6) = C_8^6 (0.5)^8 = 28/256$ $P(k \ge 6) = \frac{1 + 8 + 28}{256} = \frac{37}{256} \approx 0.1445$.

    

Demak, $P(k \le 5) = 1 - 0.1445 = \mathbf{0.8555} \quad (85.55\%)$.

    <hr style="margin: 0.75rem 0; border: none; border-top: 1px dashed var(--border-color);" />

    

**2-masala:**

    

$\lambda = n \cdot p = 1000 \cdot 0.003 = 3$.

    

$P(k \le 2) = P(0) + P(1) + P(2) = e^{-3}\left(\frac{3^0}{0!} + \frac{3^1}{1!} + \frac{3^2}{2!}\right) = e^{-3}(1 + 3 + 4.5) = 8.5 \cdot e^{-3}$.

    

$e^{-3} \approx 0.049787 \implies P(k \le 2) \approx 8.5 \cdot 0.049787 \approx \mathbf{0.4232} \quad (42.32\%)$.

    <hr style="margin: 0.75rem 0; border: none; border-top: 1px dashed var(--border-color);" />

    

**3-masala:**

    

1) $n = 400, p = 0.8, q = 0.2$.

    

$np - q = 400(0.8) - 0.2 = 319.8 \le k_0 \le 320 + 0.8 = 320.8 \implies \mathbf{k_0 = 320}$.

    

2) $npq = 400 \cdot 0.8 \cdot 0.2 = 64 \implies \sqrt{npq} = 8$.

    

$x = \frac{320 - 320}{8} = 0 \implies \varphi(0) \approx 0.3989$.

    

$P_{400}(320) \approx \frac{1}{8} \cdot 0.3989 \approx \mathbf{0.04986} \quad (\approx 5\%)$.

</details>
