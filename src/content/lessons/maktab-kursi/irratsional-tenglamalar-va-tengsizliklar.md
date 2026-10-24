---
title: "Irratsional tenglamalar va tengsizliklarni yechish usullari"
module: "maktab-kursi"
order: 8
description: "Aniqlanish sohasi (AS), chet ildizlar paydo bo'lishi, teng kuchli sistemalarga o'tish, yangi o'zgaruvchi kiritish va qo'shmasiga ko'paytirish usullari."
---

O'zgaruvchi ildiz (radikal) belgisi ostida qatnashgan tenglama va tengsizliklar **irratsional tenglamalar va tengsizliklar** deyiladi. Oliy matematikada bunday ifodalar funksiyaning aniqlanish sohasini topishda, egri chiziq yoyi uzunligini hisoblashda va differensial tenglamalarni integrallashda doimiy ravishda uchraydi.

---

## 1. Aniqlanish sohasi (AS) va chet ildizlar muammosi

Irratsional ifodalar bilan ishlashda birinchi qoida — ildiz ko'rsatkichining **juft** yoki **toq** ekanligiga e'tibor berishdir ($k \in \mathbb{N}$):

1. **Toq darajali ildiz ($\sqrt[2k+1]{f(x)}$):** Haqiqiy sonlar to'plamida $f(x)$ ning har qanday ishorasida ma'noga ega. Ildizning ishorasi $f(x)$ ning ishorasiga mos tushadi.
2. **Juft darajali arifmetik ildiz ($\sqrt[2k]{f(x)}$):** Faqatgina ildiz ostidagi ifoda manfiy bo'lmaganda ($f(x) \ge 0$) ma'noga ega va uning qiymati ta'rif bo'yicha har doim manfiy emasdir:

$$\sqrt[2k]{f(x)} \ge 0 \quad (\forall x : f(x) \ge 0)$$

### Nima uchun chet ildizlar paydo bo'ladi?

Tenglamaning har ikki tomonini juft darajaga ko'targanimizda:
$$A(x) = B(x) \implies (A(x))^2 = (B(x))^2 \iff (A(x) - B(x))(A(x) + B(x)) = 0$$
Ko'rinib turibdiki, kvadratga ko'tarish natijasida dastlabki $A(x) = B(x)$ tenglama ildizlariga qo'shimcha ravishda $A(x) = -B(x)$ tenglamaning ildizlari ham qo'shilib qoladi. Ana shu qo'shilib qolgan va dastlabki tenglamani qanoatlantirmaydigan ildizlar **chet ildizlar** deyiladi.

> [!WARNING]
> **Oltin qoida:** Faqatgina aniqlanish sohasini ($f(x) \ge 0$) topishning o'zi chet ildizlardan to'liq himoya qilmaydi! Chunki $\sqrt{f(x)} = g(x)$ tenglamada kvadratga ko'targach $f(x) = g^2(x) \ge 0$ shart avtomatik bajariladi, ammo $g(x) \ge 0$ sharti buzilishi mumkin.

---

## 2. Irratsional tenglamalarni yechish usullari

### 2.1. Teng kuchli sistemaga o'tish usuli

Bu usulda chet ildizlarni oxirida tekshirib o'tirmaslik uchun tenglama oldindan teng kuchli shartlar sistemasi bilan almashtiriladi:

**1-tur:** $\sqrt[2k]{f(x)} = g(x)$ ko'rinishidagi tenglama:

$$\sqrt[2k]{f(x)} = g(x) \iff \begin{cases} g(x) \ge 0 \\ f(x) = (g(x))^{2k} \end{cases}$$

*(E'tibor bering: bu yerda $f(x) \ge 0$ shartini yozish shart emas, chunki $f(x) = (g(x))^{2k} \ge 0$ tenglikdan u avtomatik kelib chiqadi!)*

**2-tur:** $\sqrt[2k]{f(x)} = \sqrt[2k]{g(x)}$ ko'rinishidagi tenglama:

$$\sqrt[2k]{f(x)} = \sqrt[2k]{g(x)} \iff \begin{cases} f(x) \ge 0 \quad (\text{yoki } g(x) \ge 0) \\ f(x) = g(x) \end{cases}$$

*(Soddaroq bo'lgan ifoda uchun $\ge 0$ shartini tanlash kifoya).*

**3-tur:** Toq darajali ildiz qatnashgan tenglama:

$$\sqrt[2k+1]{f(x)} = g(x) \iff f(x) = (g(x))^{2k+1}$$

### 2.2. Yangi o'zgaruvchi kiritish (belgilash) usuli

Agar tenglamada bir xil ifodaning turli darajali ildizlari yoki takrorlanuvchi qismlari qatnashsa, yangi o'zgaruvchi kiritiladi:
- **Standart belgilash:** $a f(x) + b\sqrt{f(x)} + c = 0$ tenglamada $\sqrt{f(x)} = t \ge 0$ deb belgilanadi, u holda $f(x) = t^2$ bo'lib, $at^2 + bt + c = 0$ kvadrat tenglama hosil bo'ladi.
- **O'zaro teskari ifodalar:** $\sqrt{\frac{f(x)}{g(x)}} + \sqrt{\frac{g(x)}{f(x)}} = a$ tenglamada $t = \sqrt{\frac{f(x)}{g(x)}} > 0$ belgilash orqali $t + \frac{1}{t} = a$ ga o'tiladi.
- **Kub ildizlar yig'indisi:** $\sqrt[3]{A(x)} + \sqrt[3]{B(x)} = C$ tenglamani kubga ko'tarishda quyidagi ayniyat juda qo'l keladi:
  $$(u + v)^3 = u^3 + v^3 + 3uv(u + v)$$
  Bu yerda $u + v$ o'rniga dastlabki tenglamadagi $C$ qiymatni qo'yish masalani keskin soddalashtiradi.

### 2.3. Qo'shmasiga ko'paytirish usuli

$\sqrt{f(x)} - \sqrt{g(x)} = h(x)$ ko'rinishidagi tenglamalarda, agar $f(x) - g(x)$ ayirma $h(x)$ ga karrali (yoki o'zgarmas son) bo'lsa, tenglamaning ikkala tomonini $(\sqrt{f(x)} + \sqrt{g(x)})$ qo'shma ifodaga ko'paytirish foydalidir:

$$(\sqrt{f(x)} - \sqrt{g(x)})(\sqrt{f(x)} + \sqrt{g(x)}) = f(x) - g(x)$$

---

## 3. Irratsional tengsizliklarni yechish sxemalari

Irratsional tengsizliklarda "ildizlarni o'rniga qo'yib tekshirish" usuli ishlamaydi, chunki yechimlar cheksiz ko'p sonlardan iborat oraliq bo'ladi. Shu bois **faqat teng kuchli o'tish sxemalaridan** foydalanish shart!

### 3.1. $\sqrt{f(x)} < g(x)$ turidagi tengsizlik

Chap taraf manfiy bo'lmagani uchun, o'ng taraf $g(x)$ qat'iy musbat bo'lishi zarur, shuningdek ildiz osti aniqlangan bo'lishi kerak:

$$\sqrt{f(x)} < g(x) \iff \begin{cases} f(x) \ge 0 \\ g(x) > 0 \\ f(x) < (g(x))^2 \end{cases}$$

*(Agar tengsizlik $\sqrt{f(x)} \le g(x)$ bo'lsa, $g(x) \ge 0$ va $f(x) \le g^2(x)$ olinadi).*

### 3.2. $\sqrt{f(x)} > g(x)$ turidagi tengsizlik

> [!IMPORTANT]
> Bu eng ko'p xato qilinadigan tengsizlik turidir! O'ng tarafdagi $g(x)$ ham manfiy, ham nomanfiy bo'lishi mumkin. Shuning uchun yechim **ikkita holatning birlashmasidan (to'plamidan)** iborat bo'ladi:
>
> $$\sqrt{f(x)} > g(x) \iff \left[ \begin{array}{l} \begin{cases} g(x) < 0 \\ f(x) \ge 0 \end{cases} \\[10pt] \begin{cases} g(x) \ge 0 \\ f(x) > (g(x))^2 \end{cases} \end{array} \right.$$

**Nima uchun?** Agar $g(x) < 0$ bo'lsa, ildiz ma'noga ega bo'lgan ($f(x) \ge 0$) har qanday nuqtada $\sqrt{f(x)} \ge 0 > g(x)$ tengsizlik avtomatik ravishda bajariladi!

### 3.3. $\sqrt{f(x)} < \sqrt{g(x)}$ turidagi tengsizlik

$$\sqrt{f(x)} < \sqrt{g(x)} \iff \begin{cases} f(x) \ge 0 \\ f(x) < g(x) \end{cases}$$

---

## 4. Namuna misollar va yechish usullari

### 1-misol. Teng kuchli sistema va yangi o'zgaruvchi usuli
**Masala:** Tenglamani ikki xil usulda yeching: $x^2 - 3x + \sqrt{x^2 - 3x + 5} = 7$.

**Yechish (Yangi o'zgaruvchi kiritish usuli):**
Ildiz ostidagi ifodani yangi o'zgaruvchi bilan belgilaymiz:
$$\sqrt{x^2 - 3x + 5} = t, \quad t \ge 0$$
Har ikki tomonni kvadratga ko'tarsak: $x^2 - 3x + 5 = t^2 \implies x^2 - 3x = t^2 - 5$.
Buni dastlabki tenglamaga qo'yamiz:
$$(t^2 - 5) + t = 7 \implies t^2 + t - 12 = 0$$
Kvadrat tenglama ildizlari: $t_1 = 3$ va $t_2 = -4$.
$t \ge 0$ shartga ko'ra $t_2 = -4$ chet ildiz (tashlab yuboriladi). Demak, $t = 3$:
$$\sqrt{x^2 - 3x + 5} = 3 \implies x^2 - 3x + 5 = 9 \implies x^2 - 3x - 4 = 0$$
Bu yerdan $x_1 = -1$ va $x_2 = 4$ ildizlarni topamiz.

**Javob:** $x_1 = -1, \; x_2 = 4$.

---

### 2-misol. Qo'shmasiga ko'paytirish usuli
**Masala:** Tenglamani yeching: $\sqrt{2x^2 + 5x - 2} - \sqrt{2x^2 + 5x - 9} = 1$.

**Yechish:**
Ildiz ostidagi ifodalarni $A = 2x^2 + 5x - 2$ va $B = 2x^2 + 5x - 9$ desak, ularning ayirmasi $A - B = 7$ o'zgarmas songa teng.
Berilgan $\sqrt{A} - \sqrt{B} = 1$ tenglikning ikkala tomonini musbat $\sqrt{A} + \sqrt{B}$ qo'shmasiga ko'paytiramiz:
$$(\sqrt{A} - \sqrt{B})(\sqrt{A} + \sqrt{B}) = 1 \cdot (\sqrt{A} + \sqrt{B}) \implies A - B = \sqrt{A} + \sqrt{B}$$
$A - B = 7$ ekanligidan quyidagi chiziqli sistemani hosil qilamiz:
$$\begin{cases} \sqrt{A} - \sqrt{B} = 1 \\ \sqrt{A} + \sqrt{B} = 7 \end{cases}$$
Tenglamalarni hadlab qo'shsak: $2\sqrt{A} = 8 \implies \sqrt{A} = 4 \implies A = 16$ (bunda $\sqrt{B} = 3 \ge 0$ ham bajariladi).
Endi $A = 16$ ni yechamiz:
$$2x^2 + 5x - 2 = 16 \implies 2x^2 + 5x - 18 = 0$$
Diskriminant: $D = 25 - 4 \cdot 2 \cdot (-18) = 25 + 144 = 169 = 13^2$.
$$x_1 = \frac{-5 + 13}{4} = 2, \qquad x_2 = \frac{-5 - 13}{4} = -4,5$$

**Javob:** $x_1 = -4,5; \; x_2 = 2$.

---

### 3-misol. $\sqrt{f(x)} > g(x)$ turidagi irratsional tengsizlik
**Masala:** Tengsizlikni yeching: $\sqrt{2x + 10} > x + 1$.

**Yechish:**
Standart teng kuchli birlashma sxemasini qo'llaymiz:
$$\left[ \begin{array}{l} \begin{cases} x + 1 < 0 \\ 2x + 10 \ge 0 \end{cases} \\[10pt] \begin{cases} x + 1 \ge 0 \\ 2x + 10 > (x + 1)^2 \end{cases} \end{array} \right.$$

1. **Birinchi sistema:**
   $$\begin{cases} x < -1 \\ x \ge -5 \end{cases} \implies x \in [-5; -1)$$
2. **Ikkinchi sistema:**
   $$\begin{cases} x \ge -1 \\ 2x + 10 > x^2 + 2x + 1 \end{cases} \iff \begin{cases} x \ge -1 \\ x^2 < 9 \end{cases} \iff \begin{cases} x \ge -1 \\ -3 < x < 3 \end{cases} \implies x \in [-1; 3)$$
3. **Ikki holat birlashmasi:**
   $$[-5; -1) \cup [-1; 3) = [-5; 3)$$

**Javob:** $x \in [-5; 3)$.

---

## 5. O'z-o'zini tekshirish savollari

1. $\sqrt{x - 2} = -3$ tenglamani kvadratga ko'tarsak $x - 2 = 9 \implies x = 11$ chiqadi va $x = 11$ da ildiz osti musbat ($11 - 2 = 9 > 0$). Shunga qaramay nega $x = 11$ javob bo'la olmaydi?
2. $\sqrt{f(x)} \cdot g(x) \ge 0$ ko'paytma ko'rinishidagi tengsizlikni yechishda qaysi nuqtalarni javobga kiritishni unutib qo'ymaslik kerak?
3. Funksiya monotonligidan foydalanib $\sqrt{x + 3} + \sqrt{2x - 1} = 4$ tenglamaning nechta ildizi borligini qanday asoslash mumkin?

---

## 6. Mustaqil yechish uchun masalalar

1. **1-masala:** Tenglamani yeching: $\sqrt{3x + 7} - \sqrt{x + 1} = 2$.
2. **2-masala:** Kub ildizli tenglamani yeching: $\sqrt[3]{x + 5} + \sqrt[3]{x + 6} = \sqrt[3]{2x + 11}$.
3. **3-masala:** Tengsizlikni yeching: $\sqrt{x^2 - x - 6} \le x - 1$.
4. **4-masala:** Tengsizlikni yeching: $(x^2 - 9)\sqrt{4 - x} \ge 0$.

---

### Javoblar va ko'rsatmalar

- **O'z-o'zini tekshirishga izoh:** 2) $f(x) = 0$ bo'ladigan nuqtalar ($g(x) < 0$ bo'lsa ham $0 \cdot g(x) = 0 \ge 0$ tengsizlikni qanoatlantiradi!). 3) Chap taraf ikkita qat'iy o'suvchi funksiya yig'indisi bo'lgani uchun ko'pi bilan bitta ildizga ega ($x = 1$).
- **1-masala:** $x_1 = -1, \; x_2 = 3$. *(Ko'rsatma: $\sqrt{3x + 7} = 2 + \sqrt{x + 1}$ ko'rinishga o'tkazib kvadratga ko'taring).*
- **2-masala:** $x_1 = -6, \; x_2 = -5,5, \; x_3 = -5$. *(Ko'rsatma: $(u + v)^3 = u^3 + v^3$ bo'lgani uchun $3uv(u + v) = 0$ kelib chiqadi).*
- **3-masala:** $x \in [3; 7]$.
- **4-masala:** $x \in (-\infty; -3] \cup [3; 4]$. *(Diqqat: $x = 4$ nuqta ham yechimga kiradi, lekin $x > 4$ aniqlanish sohasiga kirmaydi!)*
