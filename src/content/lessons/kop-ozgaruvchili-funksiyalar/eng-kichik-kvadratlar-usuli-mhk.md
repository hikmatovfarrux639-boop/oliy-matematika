---
title: "Eng kichik kvadratlar usuli (MHK): Eksperimental ma'lumotlarni approksimatsiya qilish"
module: "kop-ozgaruvchili-funksiyalar"
order: 11
description: "Ko'p o'zgaruvchili funksiyalarning amaliy tatbiqi: Eng kichik kvadratlar usuli (MHK), xatoliklar kvadrati yig'indisini minimallashtirish, xususiy hosilalar orqali normal tenglamalar sistemasini chiqarish, chiziqli va parabolik approksimatsiya."
---

## 📌 Kirish va Geometrik/Fizik Mohiyat

Muhandislik, amaliy fizika, biologiya, ekonometrika va zamonaviy Data Science hamda Sun'iy intellekt (Machine Learning) sohalarida o'rganiladigan jarayonlar ko'pincha analitik formulalar orqali emas, balki laboratoriya tajribalari natijasida olingan diskret o'lchovlar to'plami ko'rinishida beriladi:
$$(x_1, y_1), \; (x_2, y_2), \; \dots, \; (x_n, y_n)$$

O'lchov asboblarining noaniqligi va tashqi shovqinlar tufayli bu nuqtalar hech qachon ideal matematik to'g'ri chiziq yoki parabolada yotmaydi. Agar biz ulardan Lagranj yoki Nyuton ko'phadlari yordamida interpolyatsiya qilsak, barcha xatoliklarni o'zida saqlagan, haddan tashqari to'lqinlanuvchi yuqori darajali tebranuvchi egri chiziq hosil bo'ladi (Runge effekti).

Shu sababli amaliyotda boshqa yondashuv — **approksimatsiya (tekislash)** qo'llaniladi: berilgan nuqtalarning aynan ustidan o'tmasa ham, ularning umumiy tendensiyasini (trendini) eng yaxshi aks ettiruvchi va nuqtalardan minimal masofada o'tuvchi silliq analitik funksiya $y = f(x)$ qidiriladi.

Buyuk nemis matematigi Karl Fridrix Gauss va fransuz matematigi Adrien-Mari Lejandr tomonidan yaratilgan **Eng kichik kvadratlar usuli (MHK — Metod naimenshix kvadratov)** aynan shu masalani hal qiladi. U ko'p o'zgaruvchili funksiyalarning ekstremumini (minimumini) topish nazariyasiga tayanadi!

---

## 📐 Asosiy Nazariya, Qoidalar va Teoremalar

### 1. Maqsad funksiyasi va xatoliklar kvadratining tanlanishi

Faraz qilaylik, nuqtalar to'plamini chiziqli model $y = ax + b$ orqali tasvirlash talab etilsin. Har bir $x_i$ nuqtada model bergan nazariy qiymat $\hat{y}_i = ax_i + b$ bilan amaldagi o'lchangan $y_i$ qiymat orasidagi vertikal og'ish (qoldiq xatolik) quyidagicha bo'ladi:
$$\varepsilon_i = y_i - (ax_i + b)$$

Nima uchun oddiy og'ishlar yig'indisi $\sum \varepsilon_i$ yoki modullar yig'indisi $\sum |\varepsilon_i|$ olinmaydi?
1. Oddiy yig'indida musbat va manfiy og'ishlar bir-birini qisqartirib yuboradi ($+10$ va $-10$ yig'indisi $0$ bo'lib, go'yo xato yo'qdek ko'rinadi).
2. Modul funksiyasi $|u|$ nol nuqtada differensiallanmaydi (hosilasi yo'q), bu esa matematik tahlilning hosilalar apparatini qo'llashga to'sqinlik qiladi.
3. **Kvadratik og'ish $\varepsilon_i^2$** esa har doim musbat, silliq (cheksiz differensiallanuvchi) va katta xatoliklarga qat'iy "jarima" beradi.

Shunday qilib, $a$ va $b$ parametrlarga nisbatan **maqsad funksiyasi** quyidagicha tuziladi:
$$S(a, b) = \sum_{i=1}^n \varepsilon_i^2 = \sum_{i=1}^n [y_i - (ax_i + b)]^2 \to \min$$

Bu yerda $x_i$ va $y_i$ — berilgan o'zgarmas sonlar, argumentlar esa $a$ va $b$ parametrlaridir! Demak, biz ikki o'zgaruvchili $S(a, b)$ funksiyasining minimumini topishimiz kerak.

---

### 2. Gaussning normal tenglamalar sistemasini keltirib chiqarish

Ko'p o'zgaruvchili funksiya minimumga erishishi uchun uning har ikkala parametr bo'yicha birinchi tartibli xususiy hosilalari bir vaqtda $0$ ga teng bo'lishi shart:
$$\begin{cases} \frac{\partial S}{\partial a} = 0 \\ \frac{\partial S}{\partial b} = 0 \end{cases}$$

Murakkab funksiyaning hosilasi qoidasi bo'yicha xususiy hosilalarni hisoblaymiz:

1. **$a$ parametri bo'yicha hosila:**
   $$\frac{\partial S}{\partial a} = \sum_{i=1}^n 2[y_i - (ax_i + b)] \cdot (-x_i) = -2 \sum_{i=1}^n (x_i y_i - ax_i^2 - bx_i) = 0$$
   $-2$ ga bo'lib, noma'lumlarni chap tomonga o'tkazamiz:
   $$a \sum_{i=1}^n x_i^2 + b \sum_{i=1}^n x_i = \sum_{i=1}^n x_i y_i$$

2. **$b$ parametri bo'yicha hosila:**
   $$\frac{\partial S}{\partial b} = \sum_{i=1}^n 2[y_i - (ax_i + b)] \cdot (-1) = -2 \sum_{i=1}^n (y_i - ax_i - b) = 0$$
   $-2$ ga bo'lib, yig'indini hadma-had yoyamiz ($\sum_{i=1}^n b = b \cdot n$):
   $$a \sum_{i=1}^n x_i + b \cdot n = \sum_{i=1}^n y_i$$

Hosil bo'lgan chiziqli algebraik tenglamalar sistemasi **Gaussning normal tenglamalar sistemasi** deb ataladi:
$$\begin{cases} a \sum_{i=1}^n x_i^2 + b \sum_{i=1}^n x_i = \sum_{i=1}^n x_i y_i \\ a \sum_{i=1}^n x_i + b \cdot n = \sum_{i=1}^n y_i \end{cases}$$

---

### 3. Noma'lum parametrlarni Kramer qoidasi bilan hisoblash

Sistemaning asosiy determinanti:
$$\Delta = \begin{vmatrix} \sum x_i^2 & \sum x_i \\ \sum x_i & n \end{vmatrix} = n \sum_{i=1}^n x_i^2 - \left(\sum_{i=1}^n x_i\right)^2 = n \sum_{i=1}^n (x_i - \bar{x})^2$$
Agar barcha $x_i$ nuqtalar bitta vertikal chiziqda yotmasa (ya'ni kamida ikkitasi bir-biridan farq qilsa), $\Delta > 0$ bo'ladi va sistema yagona yechimga ega bo'ladi:

$$a = \frac{n \sum x_i y_i - \sum x_i \sum y_i}{n \sum x_i^2 - \left(\sum x_i\right)^2}$$
$$b = \frac{\sum y_i - a \sum x_i}{n} = \bar{y} - a \bar{x}$$
bu yerda $\bar{x} = \frac{1}{n}\sum x_i$ va $\bar{y} = \frac{1}{n}\sum y_i$ — mos ravishda $x$ va $y$ larning o'rtacha arifmetik qiymatlaridir.

---

### 4. Parabolik (Kvadratik) approksimatsiya: $y = ax^2 + bx + c$

Agar ma'lumotlar to'g'ri chiziq bo'ylab emas, egri chiziq (parabola) bo'ylab joylashgan bo'lsa, model $y = ax^2 + bx + c$ ko'rinishida tanlanadi.
Uch o'zgaruvchili maqsad funksiyasi:
$$S(a, b, c) = \sum_{i=1}^n [y_i - (ax_i^2 + bx_i + c)]^2 \to \min$$

$\frac{\partial S}{\partial a} = 0, \; \frac{\partial S}{\partial b} = 0, \; \frac{\partial S}{\partial c} = 0$ shartlaridan quyidagi $3 \times 3$ o'lchamli normal sistema hosil bo'ladi:
$$\begin{cases} 
a \sum x_i^4 + b \sum x_i^3 + c \sum x_i^2 = \sum x_i^2 y_i \\ 
a \sum x_i^3 + b \sum x_i^2 + c \sum x_i = \sum x_i y_i \\ 
a \sum x_i^2 + b \sum x_i + c \cdot n = \sum y_i 
\end{cases}$$

---

## 📝 Qadamma-qadam Yechilgan Universitet Misollari

### 1-Misol: Chiziqli approksimatsiya (Klassik laboratoriya tajribasi)
Eksperiment natijasida quyidagi 5 ta nuqta olindi ($n = 5$):

| $i$ | $1$ | $2$ | $3$ | $4$ | $5$ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| $x_i$ | $1$ | $2$ | $3$ | $4$ | $5$ |
| $y_i$ | $2$ | $3$ | $5$ | $4$ | $6$ |

Eng kichik kvadratlar usuli yordamida eng maqbul chiziqli model $y = ax + b$ tenglamasini toping.

**Yechish:**
1. Hisoblash jadvalini tuzamiz:

| $i$ | $x_i$ | $y_i$ | $x_i^2$ | $x_i y_i$ |
| :---: | :---: | :---: | :---: | :---: |
| $1$ | $1$ | $2$ | $1$ | $2$ |
| $2$ | $2$ | $3$ | $4$ | $6$ |
| $3$ | $3$ | $5$ | $9$ | $15$ |
| $4$ | $4$ | $4$ | $16$ | $16$ |
| $5$ | $5$ | $6$ | $25$ | $30$ |
| **$\sum$** | **$15$** | **$20$** | **$55$** | **$69$** |

2. Jadvaldan olingan yig'indilar:
   $$n = 5, \quad \sum x_i = 15, \quad \sum y_i = 20, \quad \sum x_i^2 = 55, \quad \sum x_i y_i = 69$$
3. Normal tenglamalar sistemasini tuzamiz:
   $$\begin{cases} 55a + 15b = 69 \\ 15a + 5b = 20 \end{cases}$$
4. Ikkinchi tenglamaning har ikkala tomonini $5$ ga bo'lamiz:
   $$3a + b = 4 \implies b = 4 - 3a$$
5. Birinchi tenglamaga qo'yamiz:
   $$55a + 15(4 - 3a) = 69$$
   $$55a + 60 - 45a = 69 \implies 10a = 9 \implies a = 0.9$$
6. $b$ parametrini topamiz:
   $$b = 4 - 3(0.9) = 4 - 2.7 = 1.3$$
7. Natijada eng maqbul to'g'ri chiziq tenglamasi:
   $$y = 0.9x + 1.3$$

**Tekshirish:** O'rtacha qiymatlar $\bar{x} = \frac{15}{5} = 3$, $\bar{y} = \frac{20}{5} = 4$. To'g'ri chiziqqa qo'yamiz: $0.9(3) + 1.3 = 2.7 + 1.3 = 4$. Tenglik aynan bajarildi!

**Javob:** $y = 0.9x + 1.3$.

---

### 2-Misol: Nochiziqli modelni chiziqlashtirish (Ko'rsatkichli bog'liqlik)
Biologik madaniyatdagi bakteriyalar soni vaqt o'tishi bilan eksponensial o'sadi: $y = B e^{A x}$. Quyidagi o'lchov natijalari ma'lum:

| $x_i$ (soat) | $0$ | $1$ | $2$ | $3$ |
| :---: | :---: | :---: | :---: | :---: |
| $y_i$ (ming dona) | $2.0$ | $5.4$ | $14.8$ | $40.2$ |

Parametrlar $A$ va $B$ ni toping.

**Yechish:**
1. Tenglamaning har ikkala tomonini natural logarifmlaymiz:
   $$\ln y = \ln(B e^{Ax}) = \ln B + Ax$$
2. Yangi o'zgaruvchilarni kiritamiz: $Y = \ln y, \; b = \ln B, \; a = A$.
   Natijada chiziqli model hosil bo'ladi: $Y = ax + b$.
3. $Y_i = \ln y_i$ qiymatlarini hisoblaymiz:
   - $Y_1 = \ln 2.0 \approx 0.693$
   - $Y_2 = \ln 5.4 \approx 1.686$
   - $Y_3 = \ln 14.8 \approx 2.695$
   - $Y_4 = \ln 40.2 \approx 3.694$
4. Jadval tuzamiz ($n = 4$):

| $i$ | $x_i$ | $Y_i$ | $x_i^2$ | $x_i Y_i$ |
| :---: | :---: | :---: | :---: | :---: |
| $1$ | $0$ | $0.693$ | $0$ | $0$ |
| $2$ | $1$ | $1.686$ | $1$ | $1.686$ |
| $3$ | $2$ | $2.695$ | $4$ | $5.390$ |
| $4$ | $3$ | $3.694$ | $9$ | $11.082$ |
| **$\sum$** | **$6$** | **$8.768$** | **$14$** | **$18.158$** |

5. Normal tenglamalar sistemasini tuzamiz:
   $$\begin{cases} 14a + 6b = 18.158 \\ 6a + 4b = 8.768 \end{cases}$$
6. Kramer determinantlari orqali yechamiz:
   $$\Delta = 14 \cdot 4 - 6 \cdot 6 = 56 - 36 = 20$$
   $$\Delta_a = 18.158 \cdot 4 - 8.768 \cdot 6 = 72.632 - 52.608 = 20.024 \implies a = \frac{20.024}{20} \approx 1.001$$
   $$b = \frac{8.768 - 6(1.001)}{4} = \frac{8.768 - 6.006}{4} = \frac{2.762}{4} \approx 0.691$$
7. Dastlabki ko'rsatkichli parametrlarga qaytamiz:
   $$A = a \approx 1.00$$
   $$B = e^b = e^{0.691} \approx 2.00$$
8. Yakuniy eksponensial model:
   $$y = 2.0 e^{x}$$

**Javob:** $y = 2 e^x$.

---

### 3-Misol: Simmetrik tugunlar bo'yicha tezkor parabolik approksimatsiya
Quyidagi simmetrik nuqtalar to'plamiga eng mos parabolik funksiya $y = ax^2 + bx + c$ ni toping:

| $x_i$ | $-2$ | $-1$ | $0$ | $1$ | $2$ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| $y_i$ | $5$ | $2$ | $1$ | $2$ | $6$ |

**Yechish:**
1. Tugunlar $x = 0$ ga nisbatan simmetrik joylashgani uchun barcha toq darajalar yig'indisi nolga teng bo'ladi:
   $$\sum x_i = 0, \qquad \sum x_i^3 = 0$$
   Bu hisoblashni g'oyat soddalashtiradi!
2. Jadval tuzamiz ($n = 5$):

| $x_i$ | $y_i$ | $x_i^2$ | $x_i^4$ | $x_i y_i$ | $x_i^2 y_i$ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| $-2$ | $5$ | $4$ | $16$ | $-10$ | $20$ |
| $-1$ | $2$ | $1$ | $1$ | $-2$ | $2$ |
| $0$ | $1$ | $0$ | $0$ | $0$ | $0$ |
| $1$ | $2$ | $1$ | $1$ | $2$ | $2$ |
| $2$ | $6$ | $4$ | $16$ | $12$ | $24$ |
| **$\sum$** | **$16$** | **$10$** | **$34$** | **$2$** | **$48$** |

3. $3 \times 3$ normal sistemani yozamiz:
   $$\begin{cases} 
   34a + 0\cdot b + 10c = 48 \\ 
   0\cdot a + 10b + 0\cdot c = 2 \\ 
   10a + 0\cdot b + 5c = 16 
   \end{cases}$$
4. O'rta tenglamadan $b$ darhol topiladi:
   $$10b = 2 \implies b = 0.2$$
5. Qolgan ikkita tenglamadan $a$ va $c$ ni topamiz:
   $$\begin{cases} 34a + 10c = 48 \\ 10a + 5c = 16 \end{cases}$$
   Ikkinchi tenglamani $2$ ga ko'paytirib, birinchisidan ayiramiz:
   $$(34a + 10c) - (20a + 10c) = 48 - 32 \implies 14a = 16 \implies a = \frac{16}{14} = \frac{8}{7} \approx 1.14$$
   $c$ ni topamiz:
   $$5c = 16 - 10\left(\frac{8}{7}\right) = 16 - \frac{80}{7} = \frac{32}{7} \implies c = \frac{32}{35} \approx 0.91$$
6. Parabola tenglamasi:
   $$y = \frac{8}{7}x^2 + \frac{1}{5}x + \frac{32}{35} \approx 1.14x^2 + 0.2x + 0.91$$

**Javob:** $y = 1.14x^2 + 0.2x + 0.91$.

---

## ⚠️ Talabalar Eng Ko'p Yo'l Qo'yadigan Xatolar va Tuzoqlar

1. **Ikkinchi tenglamadagi $b \cdot n$ hadida $n$ ni unutish:**
   Eng keng tarqalgan xato — ikkinchi normal tenglamada $a \sum x_i + b \cdot n = \sum y_i$ o'rniga shunchaki $a \sum x_i + b = \sum y_i$ deb yozishdir. $b$ koeffitsienti $n$ marta qo'shiladi ($\sum_{i=1}^n b = n \cdot b$). $n$ ni yozmaslik butun sistemani xato qilib yuboradi!

2. **$(\sum x_i)^2$ bilan $\sum x_i^2$ ni adashtirish:**
   Bu ikki ifoda butunlay boshqa-boshqa narsalar:
   - $\sum x_i^2$ — har bir sonning kvadratini olib, keyin qo'shish ($1^2 + 2^2 + 3^2 = 14$);
   - $(\sum x_i)^2$ — avval barcha sonlarni qo'shib, keyin kvadratga oshirish ($(1 + 2 + 3)^2 = 6^2 = 36$).

3. **Nochiziqli modellarni chiziqlashtirmasdan qo'llash:**
   Agar masala $y = \frac{a}{x} + b$ yoki $y = a \sqrt{x} + b$ ko'rinishida bo'lsa, uni to'g'ridan-to'g'ri standart sistemaga solib bo'lmaydi. Avval yangi o'zgaruvchi $X = \frac{1}{x}$ yoki $X = \sqrt{x}$ kiritilib, model $y = aX + b$ chiziqli ko'rinishga keltirilishi shart!

4. **Arifmetik xatoliklar va ustunlarni aralashtirish:**
   MHK dagi xatolarning 80% i jadvalni to'ldirishdagi oddiy arifmetik xatolardan kelib chiqadi. Har bir ustun yig'indisini hisoblagandan so'ng, albatta qayta tekshirib chiqing.

---

## 🎯 Mustaqil Yechish Uchun Amaliy Mashqlar va Yechimlar

### 1-Mashq
Quyidagi 4 ta nuqta uchun eng yaxshi chiziqli model $y = ax + b$ ni toping:

| $x_i$ | $0$ | $1$ | $2$ | $3$ |
| :---: | :---: | :---: | :---: | :---: |
| $y_i$ | $1$ | $3$ | $4$ | $6$ |

<details>
<summary>👉 Bosqichma-bosqich yechimni ko'rish</summary>

1. Jadval tuzamiz ($n = 4$):
   - $\sum x_i = 0 + 1 + 2 + 3 = 6$
   - $\sum y_i = 1 + 3 + 4 + 6 = 14$
   - $\sum x_i^2 = 0 + 1 + 4 + 9 = 14$
   - $\sum x_i y_i = 0\cdot 1 + 1\cdot 3 + 2\cdot 4 + 3\cdot 6 = 0 + 3 + 8 + 18 = 29$
2. Normal tenglamalar sistemasi:
   $$\begin{cases} 14a + 6b = 29 \\ 6a + 4b = 14 \end{cases}$$
3. Determinantlar:
   $$\Delta = 14 \cdot 4 - 6 \cdot 6 = 56 - 36 = 20$$
   $$\Delta_a = 29 \cdot 4 - 14 \cdot 6 = 116 - 84 = 32 \implies a = \frac{32}{20} = 1.6$$
   $$b = \frac{14 - 6(1.6)}{4} = \frac{14 - 9.6}{4} = \frac{4.4}{4} = 1.1$$
4. Natija:
   $$y = 1.6x + 1.1$$
**Javob:** $y = 1.6x + 1.1$.
</details>

---

### 2-Mashq
$(1, 2), (2, 5), (3, 10)$ nuqtalar to'plamiga eng mos keluvchi $y = ax^2 + b$ ko'rinishidagi modelni toping.

<details>
<summary>👉 Bosqichma-bosqich yechimni ko'rish</summary>

1. Yangi o'zgaruvchi kiritamiz: $X = x^2$. Model chiziqli bo'ladi: $y = aX + b$.
2. Nuqtalar $(X_i, y_i)$ ga aylanadi ($n = 3$):
   - $x_1 = 1 \implies X_1 = 1, \; y_1 = 2$
   - $x_2 = 2 \implies X_2 = 4, \; y_2 = 5$
   - $x_3 = 3 \implies X_3 = 9, \; y_3 = 10$
3. Yig'indilarni hisoblaymiz:
   - $\sum X_i = 1 + 4 + 9 = 14$
   - $\sum y_i = 2 + 5 + 10 = 17$
   - $\sum X_i^2 = 1 + 16 + 81 = 98$
   - $\sum X_i y_i = 1\cdot 2 + 4\cdot 5 + 9\cdot 10 = 2 + 20 + 90 = 112$
4. Sistema:
   $$\begin{cases} 98a + 14b = 112 \\ 14a + 3b = 17 \end{cases}$$
5. Determinantlar:
   $$\Delta = 98 \cdot 3 - 14 \cdot 14 = 294 - 196 = 98$$
   $$\Delta_a = 112 \cdot 3 - 17 \cdot 14 = 336 - 238 = 98 \implies a = \frac{98}{98} = 1$$
   $$b = \frac{17 - 14(1)}{3} = \frac{3}{3} = 1$$
6. Natija:
   $$y = x^2 + 1$$
**Javob:** $y = x^2 + 1$.
</details>

---

### 3-Mashq
Tajribada $(1, 5), (2, 3), (4, 2)$ olingan. $y = \frac{a}{x} + b$ modelining parametrlarini toping.

<details>
<summary>👉 Bosqichma-bosqich yechimni ko'rish</summary>

1. $X = \frac{1}{x}$ almashtirish qilamiz. Model: $y = aX + b$.
2. Nuqtalar ($n = 3$):
   - $x_1 = 1 \implies X_1 = 1, \; y_1 = 5$
   - $x_2 = 2 \implies X_2 = 0.5, \; y_2 = 3$
   - $x_3 = 4 \implies X_3 = 0.25, \; y_3 = 2$
3. Yig'indilar:
   - $\sum X_i = 1 + 0.5 + 0.25 = 1.75 = \frac{7}{4}$
   - $\sum y_i = 5 + 3 + 2 = 10$
   - $\sum X_i^2 = 1 + 0.25 + 0.0625 = 1.3125 = \frac{21}{16}$
   - $\sum X_i y_i = 1\cdot 5 + 0.5\cdot 3 + 0.25\cdot 2 = 5 + 1.5 + 0.5 = 7$
4. Sistema:
   $$\begin{cases} \frac{21}{16}a + \frac{7}{4}b = 7 \\ \frac{7}{4}a + 3b = 10 \end{cases}$$
5. Yechish:
   Birinchi tenglamani $\frac{4}{7}$ ga ko'paytirsak: $\frac{3}{4}a + b = 4 \implies b = 4 - 0.75a$.
   Ikkinchisiga qo'yamiz: $1.75a + 3(4 - 0.75a) = 10 \implies 1.75a + 12 - 2.25a = 10 \implies -0.5a = -2 \implies a = 4$.
   $b = 4 - 0.75(4) = 4 - 3 = 1$.
6. Natija:
   $$y = \frac{4}{x} + 1$$
**Javob:** $y = \frac{4}{x} + 1$.
</details>

---

## 💡 Imtihon Layfhaklari va Tezkor Maslahatlar

- **Og'irlik markazi orqali tezkor tekshirish:**
  Chiziqli regressiya to'g'ri chizig'i $y = ax + b$ **har doim** o'rtacha nuqtalar markazi $(\bar{x}, \bar{y})$ orqali o'tishi shart:
  $$\bar{y} = a\bar{x} + b$$
  Imtihonda $a$ va $b$ ni topgach, darhol $\bar{x} = \frac{\sum x_i}{n}$ va $\bar{y} = \frac{\sum y_i}{n}$ ni tenglamaga qo'yib tekshiring! Agar tenglik bajarilmasa — demak, qayerdadir hisoblashda xato qilgansiz.

- **Simmetrik siljitish layfhaki:**
  Agar sizga mustaqil ravishda eksperiment rejasini tuzish yoki argumentlarni tanlash erkinligi berilsa, $x_i$ larni koordinatalar markaziga nisbatan simmetrik tanlang (masalan, $-2, -1, 0, 1, 2$).
  Bu holda $\sum x_i = 0$ bo'ladi va Gauss normal tenglamalar sistemasi bir zumda ikkita mustaqil oddiy tenglamaga ajraladi:
  $$a = \frac{\sum x_i y_i}{\sum x_i^2}, \qquad b = \frac{\sum y_i}{n}$$
  Hech qanday tenglamalar sistemasini yechish shart bo'lmaydi!
