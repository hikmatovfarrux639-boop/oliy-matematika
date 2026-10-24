---
title: "Bosh to'plam, tanlanma, chastotalar jadvali va gistogramma"
module: "matematik-statistika"
order: 1
description: "Matematik statistika predmeti, bosh to'plam va tanlanma, variatsion qator, Sterdjes formulasi, empirik taqsimot funksiyasi, gistogramma va poligon."
---

## Kirish: Katta ma'lumotlar (Big Data) ortidagi qonuniyatlar

Ehtimollar nazariyasida biz tajriba qonuniyatlarini bilgan holda natijalarning ehtimolini oldindan hisoblar edik. **Matematik statistikada** esa vaziyat teskarisi: bizda faqat real tajribadan yig'ib olingan xom sonli ma'lumotlar (data) mavjud bo'lib, ularni tahlil qilib, tizimning noma'lum ichki qonuniyatlarini qayta tiklashimiz kerak bo'ladi.

Bugungi kunda Data Science, Machine Learning, ijtimoiy so'rovnomalar, biotibbiyot va iqtisodiy tahlillarning bari aynan matematik statistikaga asoslanadi.

---

## 1. Bosh to'plam va Tanlanma

- **Bosh to'plam (General Population):** O'rganilishi lozim bo'lgan barcha obyektlar to'plami (masalan, mamlakatdagi barcha 37 million fuqaro yoki zavod konveyerida ishlab chiqarilgan barcha 500 000 ta avtomobil).
- **Tanlanma (Sample):** Bosh to'plamdan tavakkaliga o'rganish uchun ajratib olingan chekli sondagi obyektlar to'plami (masalan, so'rovnomada qatnashgan 1 000 kishi).
- **Tanlanma hajmi ($n$):** Tanlanmaga kiritilgan barcha kuzatuvlar soni.

> **Reprezentativlik sharti:** Tanlanma bosh to'plamni to'laqonli aks ettirishi shart! Buning uchun har bir obyekt tanlanmaga tushish uchun **teng imkoniyatga** ega bo'lishi lozim (tasodifiy tanlash printsipi).

---

## 2. Birlamchi ma'lumotlarni qayta ishlash bosqichlari

Faraz qilaylik, 20 nafar talabaning oraliq nazoratdan olgan ballari quyidagicha bo'lsin (xom ma'lumotlar):
$$
12, 15, 14, 12, 18, 15, 12, 14, 20, 15, 14, 15, 18, 12, 15, 14, 18, 12, 15, 14
$$

### 1-bosqich: Variatsion qator tuzish
Kuzatuv natijalarini o'sish tartibida saralaymiz:
$$
12, 12, 12, 12, 12, 14, 14, 14, 14, 14, 15, 15, 15, 15, 15, 15, 18, 18, 18, 20
$$
Turli qiymatlar $x_i$ **variantalar** deyiladi.

### 2-bosqich: Statistik chastotalar qatori
Har bir $x_i$ variantaning necha marta uchrashi uning **chastotasi** ($n_i$) deyiladi.
Variantaning umumiy hajmdagi ulushi esa uning **nisbiy chastotasi** ($w_i = \frac{n_i}{n}$) deyiladi.

| Varianta ($x_i$) | $12$ | $14$ | $15$ | $18$ | $20$ | Jami |
|---|---|---|---|---|---|---|
| Chastota ($n_i$) | $5$ | $5$ | $6$ | $3$ | $1$ | $\sum n_i = n = 20$ |
| Nisbiy chastota ($w_i$) | $\frac{5}{20} = 0.25$ | $\frac{5}{20} = 0.25$ | $\frac{6}{20} = 0.30$ | $\frac{3}{20} = 0.15$ | $\frac{1}{20} = 0.05$ | $\sum w_i = 1.00$ |

---

## 3. Empirik taqsimot funksiyasi ($F^*(x)$)

Nazariy ehtimollikdagi $F(x) = P(X < x)$ funksiyaning amaliy analogi:

> **Ta'rif:** $x$ sonidan kichik bo'lgan kuzatuvlar soni ($n_x$) ning umumiy tanlanma hajmi $n$ ga nisbati **empirik taqsimot funksiyasi** deyiladi:
>
> 
$$
> F^*(x) = \frac{n_x}{n}
> 
$$

> **Glivenko-Kantelli teoremasi (Statistikaning bosh teoremasi):**
> Tanlanma hajmi cheksiz oshganda ($n \to \infty$), empirik funksiya $F^*(x)$ nazariy funksiya $F(x)$ ga tekis yaqinlashadi:
> 
$$
> \lim_{n \to \infty} P\left( \sup_x |F^*(x) - F(x)| = 0 \right) = 1
> 
$$

---

## 4. Interval statistik qator va Sterdjes formulasi

Agar kuzatilayotgan miqdor uzluksiz bo'lsa yoki variantalar soni juda ko'p bo'lsa, qiymatlar oraliqlarga (intervallarga) guruhlanadi.

### Sterdjes qoidasi (Oraliqlar sonini aniqlash):
Optimal intervallar soni $k$:
$$
k = 1 + 3.322 \cdot \lg n
$$
Har bir intervalning eni (qadami $h$):
$$
h = \frac{x_{\max} - x_{\min}}{k}
$$

---

## 5. Grafik tasvirlash: Poligon va Gistogramma

1. **Chastotalar poligoni (Diskret miqdorlar uchun):**
   Tekislikda $(x_i, n_i)$ nuqtalar belgilanib, ular to'g'ri chiziq kesmalari bilan tutashtiriladi (siniq chiziq).
2. **Gistogramma (Uzluksiz intervalli miqdorlar uchun):**
   Har bir $[a_k; a_{k+1}]$ interval ustiga eni $h$, balandligi esa **chastota zichligi** $\frac{n_i}{h}$ (yoki $\frac{w_i}{h}$) bo'lgan to'g'ri to'rtburchaklar quriladi.
   *(Nisbiy chastotalar gistogrammasining umumiy yuzi doimo $1$ ga teng bo'lib, u ehtimollik zichlik egri chizig'ining $f(x)$ amaliy ko'rinishidir).*

---

## 6. Amaliy misollar va batafsil yechimlar

### 1-misol: Diskret qator uchun empirik funksiya tuzish
Berilgan tanlanma:
| $x_i$ | $2$ | $5$ | $7$ | $8$ |
|---|---|---|---|---|
| $n_i$ | $1$ | $3$ | $2$ | $4$ |

Tanlanma hajmi $n = 1 + 3 + 2 + 4 = 10$. Empirik taqsimot funksiyasi $F^*(x)$ ni yozing.

**Yechilishi:**
- $x \le 2$ da: $2$ dan kichik sonlar yo'q $\implies F^*(x) = 0$;
- $2 < x \le 5$ da: faqat bitta $2$ soni bor ($n_x = 1$) $\implies F^*(x) = \frac{1}{10} = 0.1$;
- $5 < x \le 7$ da: $2$ va uchta $5$ soni bor ($n_x = 1 + 3 = 4$) $\implies F^*(x) = \frac{4}{10} = 0.4$;
- $7 < x \le 8$ da: $n_x = 4 + 2 = 6 \implies F^*(x) = \frac{6}{10} = 0.6$;
- $x > 8$ da: barcha $10$ ta son kiradi $\implies F^*(x) = \frac{10}{10} = 1.0$.

$$
F^*(x) = \begin{cases}
0, & x \le 2 \\
0.1, & 2 < x \le 5 \\
0.4, & 5 < x \le 7 \\
0.6, & 7 < x \le 8 \\
1, & x > 8
\end{cases}
$$

---

### 2-misol: Sterdjes formulasi bilan intervallarga ajratish
$100$ ta xodimning oylik maoshi o'rganildi ($n = 100$). Eng kam oylik $x_{\min} = 2.5$ mln so'm, eng ko'p oylik $x_{\max} = 18.5$ mln so'm. Intervallar soni va qadamini aniqlang.

**Yechilishi:**
1. $\lg 100 = 2$.
2. Intervallar soni (Sterdjes):
   $$k = 1 + 3.322 \cdot \lg 100 = 1 + 3.322(2) = 1 + 6.644 = 7.644 \approx 8 \text{ ta}$$
3. Interval kengligi (qadami):
   $$h = \frac{x_{\max} - x_{\min}}{k} = \frac{18.5 - 2.5}{8} = \frac{16}{8} = 2 \text{ mln so'm}$$
Demak, intervallar: $[2.5; 4.5), [4.5; 6.5), \dots, [16.5; 18.5]$ ko'rinishida bo'ladi.

**Javob:** $k = 8$ ta interval, qadam $h = 2$ mln so'm.

---

## ⚠️ Talabalar ko'p yo'l qo'yadigan 3 ta jiddiy xato

1. **Nisbiy chastotalar yig'indisi 1 ga teng chiqmasligi:**
   > Doimo tekshiring: $\sum w_i = 1.0$. Agar yaxlitlashda $0.98$ yoki $1.02$ chiqib qolsa, qayerdadir yaxlitlash xatosi bo'lgan, oxirgi raqamni to'g'irlash shart.

2. **Gistogramma balandligiga to'g'ridan-to'g'ri $n_i$ chastotani qo'yish:**
   > Gistogramma to'g'ri to'rtburchaklarining balandligi $n_i$ emas, balki **chastota zichligi $\frac{n_i}{h}$** (chastotaning oraliq eniga nisbati) bo'lishi shart! Aks holda har xil enli intervallarda maydon mutanosibligi buziladi.

3. **Empirik funksiya qiymatlarini chapdan va o'ngdan adashtirish:**
   > $F^*(x)$ — uzluksiz emas, balki pog'onasimon funksiya bo'lib, har bir varianta nuqtasida $\frac{n_i}{n}$ ga teng sakrash qiladi.

---

## 💡 Ustozdan maslahat

Xom sonlar berilganda eng birinchi ish — ularni darhol qoralama varaqda **kichigidan kattasiga qarab saralab oling (variatsion qator)**. Sanashda birorta son tushib qolmasligi uchun ustidan qalam bilan chizib boring va oxirida jami sonlar soni $n$ bilan mosligini tekshiring!

---

## ✍️ Mustaqil yechish uchun mashqlar

1. $4, 1, 2, 4, 3, 2, 4, 1$ tanlanma uchun variatsion qator va chastotalar jadvalini tuzing.
2. Nisbiy chastotalar jadvali berilgan: $w_1 = 0.2, w_2 = 0.5, w_3 = ?$. $w_3$ ni toping.
3. $n = 50$ ta elementli tanlanma uchun Sterdjes qoidasi bo'yicha nechta interval tuzish ma'qul? ($\lg 50 \approx 1.7$).

<details style="margin-top: 1rem; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); cursor: pointer;">
  <summary style="font-weight: 700; color: var(--primary);">To'liq yechimlar va javoblar</summary>
  <div style="margin-top: 0.75rem; padding-top: 0.75rem; border-top: 1px solid var(--border-color);">
    <p><strong>1-masala:</strong> Variatsion: $1, 1, 2, 2, 3, 4, 4, 4$. Chastotalar: $x_1=1 (2), x_2=2 (2), x_3=3 (1), x_4=4 (3)$. Jami $n = 8$.</p>
    <p><strong>2-masala:</strong> $0.2 + 0.5 + w_3 = 1.0 \implies w_3 = 0.3$.</p>
    <p><strong>3-masala:</strong> $k = 1 + 3.322 \cdot 1.7 \approx 1 + 5.65 = 6.65 \approx 7$ ta interval.</p>
  </div>
</details>
