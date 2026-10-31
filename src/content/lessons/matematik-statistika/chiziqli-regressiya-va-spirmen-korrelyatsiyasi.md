---
title: "Chiziqli regressiya, eng kichik kvadratlar usuli va Spirmen korrelyatsiyasi"
module: "matematik-statistika"
order: 5
description: "Eng kichik kvadratlar usuli (EKU), normal tenglamalar sistemasi, determinatsiya koeffitsiyenti R^2, Spirmen ranqli korrelyatsiyasi va Fexner koeffitsiyenti."
---

## Kirish: Ma'lumotlardan bashorat tomon

Korrelyatsiya koeffitsiyenti faqat ikkita parametr o'rtasida chiziqli bog'liqlik bor yoki yo'qligini ko'rsatadi. Ammo biznes, tibbiyot yoki sun'iy intellektda eng muhim narsa — **bashorat qilish (prognoz)**:
- "Agar reklama byudjetini $X$ so'mga oshirsak, sotuv hajmi $Y$ qanchaga yetadi?"
- "O'g'it miqdori $X$ kg bo'lganda hosildorlik $Y$ qancha bo'ladi?"

Ushbu savollarga javob topish uchun **regressiya tahlili** va mashhur **eng kichik kvadratlar usuli** qo'llaniladi. Shuningdek, ma'lumotlar aniq sonlar bilan emas, balki ekspert baholari (o'rinlar) bilan berilganda **Spirmen ranqli korrelyatsiyasi** yordamga keladi.

---

## 1. Juft chiziqli regressiya tenglamasi

Bizga $(x_1, y_1), (x_2, y_2), \dots, (x_n, y_n)$ kuzatishlar juftligi berilgan bo'lsin.$Y$ ning $X$ ga bog'liq **chiziqli regressiya tenglamasi** quyidagicha yoziladi:
$$
\hat{y} = a x + b
$$
bu yerda $a$ — **regressiya koeffitsiyenti** ($X$ bir birlikka o'zgarganda $Y$ o'rtacha qanchaga o'zgarishini ko'rsatadi), $b$ — ozod had.

```
       y ^                          . (x_i, y_i)
         |                         /|
         |                 \hat{y}/ |  e_i = y_i - \hat{y}_i
         |                       /  *  (xatolik)
         |                      /
         |                     /
         |           *        /
         |          /        /
         |         /
       b +--------/------------------------> x
         0
```

---

## 2. Eng kichik kvadratlar usuli (EKU)

Regressiya to'g'ri chizig'i barcha nuqtalar orasidan eng optimal o'tishi uchun haqiqiy qiymatlar ($y_i$) bilan nazariy to'g'ri chiziq qiymatlari ($\hat{y}_i = ax_i + b$) orasidagi farqlar kvadratlari yig'indisi **minimal bo'lishi shart**:
$$
S(a, b) = \sum_{i=1}^n \left( y_i - (ax_i + b) \right)^2 \longrightarrow \min
$$

Ekstremum shartiga ko'ra xususiy hosilalarni nolga tenglashtirsak ($\frac{\partial S}{\partial a} = 0, \frac{\partial S}{\partial b} = 0$), mashhur **normal tenglamalar sistemasi** hosil bo'ladi:
$$
\begin{cases}
a \sum x_i^2 + b \sum x_i = \sum x_i y_i \\
a \sum x_i + b \cdot n = \sum y_i
\end{cases}
$$

### Koeffitsiyentlarning tayyor yechim formulalari:
$$
a = \frac{n \sum x_i y_i - \left(\sum x_i\right)\left(\sum y_i\right)}{n \sum x_i^2 - \left(\sum x_i\right)^2} = r_{xy} \frac{\sigma_y}{\sigma_x}
$$
$$
b = \bar{y} - a \bar{x}
$$
Regressiya to'g'ri chizig'i har doim o'rtacha nuqtadan $(\bar{x}, \bar{y})$ o'tishi shart:
$$
\hat{y} - \bar{y} = r_{xy} \frac{\sigma_y}{\sigma_x} (x - \bar{x})
$$

---

## 3. Determinatsiya koeffitsiyenti $R^2$

Tuzilgan modelning qanchalik ishonchli ekanligini **determinatsiya koeffitsiyenti** o'lchaydi:
$$
R^2 = r_{xy}^2 \quad (0 \le R^2 \le 1)
$$
- **Iqtisodiy ma'nosi:** Natijaviy belgi $Y$ ning umumiy dispersiyasining necha foizi tanlangan omil $X$ hisobiga tushuntirilishini bildiradi.
- *Masalan:* Agar $r_{xy} = 0.9$ bo'lsa, $R^2 = 0.81$ ($81\%$). Ya'ni sotuv hajmining $81\%$ qismi reklama byudjeti bilan tushuntiriladi, qolgan $19\%$ qismi esa boshqa hisobga olinmagan omillarga bog'liq.

---

## 4. Spirmenning ranqli korrelyatsiya koeffitsiyenti ($\rho$)

Agar parametrlar sonlar bilan emas, balki **o'rinlar (darajalar)** orqali baholansa (masalan, go'zallik tanlovida ikki hakamning qo'ygan o'rinlari, talabalarning olimpiadadagi natijalari), yoki ma'lumotlar normal taqsimotdan keskin farq qilsa, Charlz Spirmen formulasi qo'llaniladi:

1. Har ikkala parametr o'sish (yoki kamayish) tartibida **ranjirlanadi** ($1$-o'rin, $2$-o'rin, ... $n$-o'rin): $R_{xi}$ va $R_{yi}$;
2. Har bir obyekt uchun ranjlar ayirmasi hisoblanadi:
   
$$
   d_i = R_{xi} - R_{yi}
   
$$
3. Spirmen koeffitsiyenti hisoblanadi:
   
$$
   \rho = 1 - \frac{6 \sum_{i=1}^n d_i^2}{n(n^2 - 1)}
   
$$
- $-1 \le \rho \le 1$.
- Agar ikkala ekspertning baholari aynan mos tushsa ($d_i = 0$), $\rho = 1$ bo'ladi.
- Agar baholar teskari bo'lsa, $\rho = -1$.

---

## 5. Masalalarni tahlil qilish

### 1-masala: Chiziqli regressiya tenglamasini qurish
5 ta korxonada xodimlarning malaka oshirish soatlari ($X$) va mehnat unumdorligi ($Y$) o'lchandi:

| $x_i$|$2$|$4$|$5$|$6$|$8$ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| $y_i$|$3$|$5$|$6$|$8$|$8$ |

1) Juft chiziqli regressiya tenglamasini toping;
2) $x = 10$ bo'lganda $y$ ning bashorat qiymatini aniqlang.

**Yechish:**
Jadval tuzamiz ($n = 5$):

| $x_i$|$y_i$|$x_i^2$|$x_i y_i$ |
| :---: | :---: | :---: | :---: |
| $2$|$3$|$4$|$6$ |
| $4$|$5$|$16$|$20$ |
| $5$|$6$|$25$|$30$ |
| $6$|$8$|$36$|$48$ |
| $8$|$8$|$64$|$64$ |
| **$\sum = 25$** | **$\sum = 30$** | **$\sum = 145$** | **$\sum = 168$** |

O'rtacha qiymatlar:
$$
\bar{x} = \frac{25}{5} = 5, \qquad \bar{y} = \frac{30}{5} = 6
$$
$a$ koeffitsiyent:
$$
a = \frac{n \sum xy - (\sum x)(\sum y)}{n \sum x^2 - (\sum x)^2} = \frac{5(168) - (25)(30)}{5(145) - 25^2} = \frac{840 - 750}{725 - 625} = \frac{90}{100} = 0.9
$$
$b$ koeffitsiyent:
$$
b = \bar{y} - a \bar{x} = 6 - 0.9(5) = 6 - 4.5 = 1.5
$$
Demak, chiziqli regressiya tenglamasi:
$$
\hat{y} = 0.9 x + 1.5
$$
*Bashorat:* Agar malaka oshirish $x = 10$ soat bo'lsa:
$$
\hat{y}(10) = 0.9(10) + 1.5 = 9 + 1.5 = 10.5
$$

---

### 2-masala: Spirmenning ranqli korrelyatsiyasi
Ikkita o'qituvchi 5 nafar talabaning bilimini tekshirib, quyidagi o'rinlarni (ranjlarni) qo'ydi:

| Talaba | 1-o'qituvchi ($R_x$) | 2-o'qituvchi ($R_y$) | $d_i = R_x - R_y$|$d_i^2$ |
| :---: | :---: | :---: | :---: | :---: |
| A | 1 | 2 | $-1$|$1$ |
| B | 2 | 1 | $+1$|$1$ |
| C | 3 | 4 | $-1$|$1$ |
| D | 4 | 3 | $+1$|$1$ |
| E | 5 | 5 | $0$|$0$ |
| **Jami** | | | $\sum d_i = 0$ | **$\sum d_i^2 = 4$** |

Spirmen formulasiga qo'yamiz ($n = 5$):
$$
\rho = 1 - \frac{6 \sum d_i^2}{n(n^2 - 1)} = 1 - \frac{6 \cdot 4}{5(25 - 1)} = 1 - \frac{24}{5 \cdot 24} = 1 - \frac{1}{5} = 0.8
$$
$\rho = 0.8$ musbat va $1$ ga yaqin. Demak, ikkala o'qituvchining baholash mezonlari o'rtasida juda yuqori darajadagi kelishuv mavjud!

---

> [!WARNING] Imtihondagi tuzoqlar va ko'p uchraydigan xatoliklar
> 1. **Ranclar ayirmalari yig'indisi:** Har doim barcha ranj ayirmalarining yig'indisi **nolga teng bo'lishi shart**: $\sum d_i = 0$. Agar siz hisoblaganingizda $\sum d_i \ne 0$ chiqsa, ranjlarni adashtirgansiz!
> 2. **Ekstrapolyatsiya xatosi:** Regressiya modeli bo'yicha bashorat qilishda faqat o'rganilgan oraliqqa yaqin qiymatlarni kiritish mumkin. $x$ ning juda katta yoki manfiy qiymatlari uchun chiziqli model fizik ma'nosini yo'qotadi.

---

## Mustaqil yechish uchun mashqlar

### 1-mashq
Agar juft chiziqli regressiyada korrelyatsiya koeffitsiyenti $r_{xy} = 0.8$ bo'lsa, determinatsiya koeffitsiyenti $R^2$ nechaga teng va uning ma'nosi nima?

<details>
<summary>👉 Yechimni tekshirish</summary>

**Yechish:**
$R^2 = r_{xy}^2 = (0.8)^2 = 0.64$ ($64\%$).
Bu natijaviy belgi $Y$ dispersiyasining $64\%$ qismi omil $X$ hisobiga o'zgarishini anglatadi.

**Javob:** $R^2 = 0.64$ ($64\%$).

</details>

### 2-mashq
Agar ikkita ekspert 4 ta loyihani aynan bir xil o'rinlarga joylashtirgan bo'lsa ($R_{xi} = R_{yi}$), Spirmen koeffitsiyenti nimaga teng?

<details>
<summary>👉 Yechimni tekshirish</summary>

**Yechish:**
Barcha $d_i = R_{xi} - R_{yi} = 0 \implies \sum d_i^2 = 0$.
$$
\rho = 1 - \frac{6 \cdot 0}{4(16-1)} = 1 - 0 = 1
$$
Mutlaq 100% kelishuv.

**Javob:** $\rho = 1$.

</details>
