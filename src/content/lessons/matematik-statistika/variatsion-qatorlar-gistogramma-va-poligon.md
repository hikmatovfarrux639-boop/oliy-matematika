---
title: "Variatsion qatorlar, gistogramma va chastotalar poligoni"
module: "matematik-statistika"
order: 4
description: "Birlamchi ma'lumotlarni ranjirlash, diskret va interval variatsion qatorlar, Sterdjes formulasi, chastotalar poligoni va gistogrammasi hamda empirik taqsimot funksiyasi."
---

## Kirish: "Xom" ma'lumotlarni bilimga aylantirish

Tasavvur qiling, siz 100 nafar talabaning test natijalarini yoki 500 ta detalning diametrini o'lchadingiz. Sizning qo'lingizda tartibsiz yozilgan yuzlab sonlar bor. Bu "xom" ko'rinishda ulardan hech qanday xulosa chiqarib bo'lmaydi.

Matematik statistikaning eng birinchi vazifasi — ushbu ma'lumotlarni **tizimlashtirish, guruhlash va grafik shaklda tasvirlash**dir.

Ushbu darsda biz statistik qatorlarni qurish, Sterdjes qoidasi, chastotalar gistogrammasi va zamonaviy ma'lumotlar tahlili (Data Science) ning asosi bo'lgan empirik taqsimot funksiyasini o'rganamiz.

---

## 1. Ranjirlash va Diskret variatsion qator

Birlamchi statistik ma'lumotlarni o'sish tartibida joylashtirish **ranjirlash** deyiladi:
$$
x_{(1)} \le x_{(2)} \le x_{(3)} \le \dots \le x_{(n)}
$$
bu yerda $n$ — **tanlanma hajmi**.

Agar qiymatlar takrorlansa, bir xil qiymatlar bitta **varianta** $x_i$ ga birlashtirilib, ularning uchrash soni **chastota $n_i$** va ulushi **nisbiy chastota $w_i$** hisoblanadi:
$$
w_i = \frac{n_i}{n}
$$

### Diskret variatsion qator jadvali:
| Varianta $x_i$ | $x_1$ | $x_2$ | $\dots$ | $x_k$ | **Jami** |
| :---: | :---: | :---: | :---: | :---: | :---: |
| **Chastota $n_i$** | $n_1$ | $n_2$ | $\dots$ | $n_k$ | $\sum n_i = n$ |
| **Nisbiy chastota $w_i$** | $w_1$ | $w_2$ | $\dots$ | $w_k$ | $\sum w_i = 1$ |

---

## 2. Interval variatsion qator va Sterdjes formulasi

Agar o'lchanayotgan belgi uzluksiz bo'lsa (masalan, vazn, bo'y, harorat, vaqt), qiymatlar takrorlanmasligi mumkin. Bunday holda ma'lumotlar **oraliqlarga (intervallarga)** ajratiladi.

1. **Optimal intervallar soni ($k$) Sterdjes formulasi bilan aniqlanadi:**
   $$
   k \approx 1 + 3.322 \lg n \quad \text{yoki} \quad k \approx 1 + \log_2 n
   $$
   *(Masalan, $n = 100$ ta kuzatish uchun: $k \approx 1 + 3.322 \lg 100 = 1 + 3.322(2) \approx 7.6 \implies 7$ yoki $8$ ta interval olinadi).*

2. **Interval qadami (kengligi) $h$:**
   $$
   h = \frac{x_{\max} - x_{\min}}{k}
   $$

---

## 3. Statistik ma'lumotlarni grafik tasvirlash

### A. Chastotalar poligoni (Siniq chiziq)
Koordinata tekisligida $(x_i, n_i)$ yoki $(x_i, w_i)$ nuqtalar belgilanib, to'g'ri kesmalar bilan tutashtiriladi. U asosan **diskret** variatsion qatorlar uchun qo'llaniladi.

### B. Chastotalar gistogrammasi (Ustunli diagramma)
Interval variatsion qatorlar uchun eng asosiy grafik usul.
Gorizontal o'qda har bir $[x_i; x_{i+1}]$ interval asos qilib olinadi, vertikal o'qda esa to'g'ri to'rtburchak balandligi **chastotalar zichligi** $\frac{n_i}{h}$ (yoki nisbiy chastotalar zichligi $\frac{w_i}{h}$) ga teng qilib quriladi:

```
        w_i / h ^
                |       +---+
                |   +---|   |
                |   |   |   |---+
                |---+   |   |   |
              0 +---+---+---+---+---> x
                 x1  x2  x3  x4
```

> [!NOTE] Muhim xossa
> Nisbiy chastotalar gistogrammasining barcha to'g'ri to'rtburchaklari yuzalari yig'indisi **roppa-rosa $1$ ga tengdir**:
> $$
> S = \sum_{i=1}^k h \cdot \frac{w_i}{h} = \sum_{i=1}^k w_i = 1
> $$
> Tanlanma hajmi $n \to \infty$ va $h \to 0$ bo'lganda, gistogrammaning yuqori qirrasi ehtimollar nazariyasidagi **nazariy zichlik egri chizig'i $f(x)$ ga intiladi**!

---

## 4. Empirik taqsimot funksiyasi $F^*(x)$

Nazariy taqsimot funksiyasi $F(x) = P(X < x)$ ning statistik analogi **empirik taqsimot funksiyasi** deyiladi:
$$
F^*(x) = \frac{n_x}{n}
$$
bu yerda $n_x$ — qiymati berilgan $x$ dan kichik bo'lgan kuzatishlar soni.

- **Glyivenko-Kantelli bosh statistik teoremasi:** Tanlanma hajmi cheksiz oshganda ($n \to \infty$), empirik funksiya $F^*(x)$ haqiqiy nazariy $F(x)$ funksiyaga butun sonlar o'qida tekis yaqinlashadi:
$$
P\left( \lim_{n\to\infty} \sup_{x} |F^*(x) - F(x)| = 0 \right) = 1
$$

---

## 5. Masalalarni tahlil qilish

### Masala:
Nazorat tekshiruvida 20 ta detalning og'irligi (grammlarda) o'lchandi:
$$
12, 14, 15, 12, 16, 14, 15, 17, 14, 15, 16, 14, 13, 15, 14, 16, 15, 14, 13, 15
$$
1) Ranjirlangan qatorni tuzing;
2) Diskret variatsion qator jadvalini quring;
3) Tanlanma o'rtacha qiymati $\bar{x}_t$ va tanlanma dispersiyasi $D_t$ ni toping.

#### 1-qadam: Ranjirlash
Sonlarni o'sish tartibida yozamiz:
$$
12, 12, 13, 13, 14, 14, 14, 14, 14, 14, 15, 15, 15, 15, 15, 15, 16, 16, 16, 17
$$

#### 2-qadam: Diskret variatsion jadval

| Og'irlik $x_i$ | $12$ | $13$ | $14$ | $15$ | $16$ | $17$ | **Jami** |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Chastota $n_i$** | $2$ | $2$ | $6$ | $6$ | $3$ | $1$ | $n = 20$ |
| **Nisbiy chastota $w_i$** | $0.10$ | $0.10$ | $0.30$ | $0.30$ | $0.15$ | $0.05$ | $\sum = 1.00$ |

#### 3-qadam: Sonli xarakteristikalarni hisoblash
1. **Tanlanma o'rtacha qiymat:**
$$
\bar{x}_t = \sum x_i w_i = 12(0.1) + 13(0.1) + 14(0.3) + 15(0.3) + 16(0.15) + 17(0.05)
$$
$$
= 1.2 + 1.3 + 4.2 + 4.5 + 2.4 + 0.85 = 14.45 \text{ g}
$$

2. **Kvadratlarning o'rtacha qiymati:**
$$
\overline{x^2} = \sum x_i^2 w_i = 144(0.1) + 169(0.1) + 196(0.3) + 225(0.3) + 256(0.15) + 289(0.05)
$$
$$
= 14.4 + 16.9 + 58.8 + 67.5 + 38.4 + 14.45 = 210.45
$$

3. **Tanlanma dispersiya:**
$$
D_t = \overline{x^2} - (\bar{x}_t)^2 = 210.45 - (14.45)^2 = 210.45 - 208.8025 = 1.6475
$$
O'rtacha kvadratik og'ish: $\sigma_t = \sqrt{1.6475} \approx 1.28$ g.

---

> [!WARNING] Imtihondagi tuzoqlar va ko'p uchraydigan xatoliklar
> 1. **Gistogramma balandligida adashish:** Gistogrammada ustun balandligi shunchaki chastota $n_i$ emas, balki **chastotalar zichligi $\frac{n_i}{h}$** bo'lishi shart! Agar oraliqlar turli kenglikda bo'lsa va siz faqat $n_i$ ni olsangiz, grafik butunlay noto'g'ri taassurot uyg'otadi.
> 2. **Empirik funksiyada qat'iy tengsizlik:** $F^*(x) = \frac{n_x}{n}$ formulada $X < x$ qat'iy tengsizlik olinadi. Demak, $x = x_1$ nuqtada funksiya $0$ ga teng bo'lib, $x_1$ dan o'tgandagina sakrash hosil qiladi.

---

## Mustaqil yechish uchun mashqlar

### 1-mashq
10 ta talabaning imtihon ballari berilgan:
$$
3, 4, 5, 4, 3, 4, 5, 4, 4, 5
$$
Moda ($M_o$) va mediana ($M_e$) ni toping.

<details>
<summary>👉 Yechimni tekshirish</summary>

**Yechish:**
Ranjirlangan qator: $3, 3, 4, 4, 4, 4, 4, 5, 5, 5$.
- **Moda ($M_o$):** Eng ko'p takrorlangan qiymat — $4$ (5 marta uchrashgan).
- **Mediana ($M_e$):** $n = 10$ juft bo'lgani uchun o'rtadagi 5- va 6-hadlar o'rtachasi: $\frac{4 + 4}{2} = 4$.

**Javob:** $M_o = 4, \quad M_e = 4$.
</details>

### 2-mashq
Agar tanlanma hajmi $n = 64$ bo'lsa, Sterdjes formulasi bo'yicha nechta interval tuzish maqsadga muvofiq?

<details>
<summary>👉 Yechimni tekshirish</summary>

**Yechish:**
$k \approx 1 + \log_2 64 = 1 + 6 = 7$.

**Javob:** $k = 7$ ta interval.
</details>
