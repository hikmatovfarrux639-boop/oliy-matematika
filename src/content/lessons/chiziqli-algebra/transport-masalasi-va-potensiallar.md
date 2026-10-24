---
title: "Transport masalasi va potensiallar usuli"
module: "chiziqli-algebra"
order: 11
description: "Transport masalasi modeli, Shimoliy-g'arbiy va Minimal xarajat usullari, potensiallar usuli bilan optimallashtirish va sikllar."
---

## Kirish: Logistika va tarqatish matematikasi

Zamonaviy logistika kompaniyalari (Amazon, Ozon, Yandex Go, temir yo'l yuk tashuvlari) har kuni yuzlab omborlardan minglab savdo nuqtalariga mahsulot yetkazib berishadi. 

**Transport masalasining asosiy maqsadi:** Barcha omborlardagi mahsulotlarni iste'molchilarga yetkazib berishda **jami transport xarajatlarini (yoqilg'i, vaqt, masofa) eng minimal darajaga tushirish**dir.

---

## 1. Transport masalasining matematik modeli

Faraz qilaylik, mahsulot ishlab chiqaruvchi $m$ ta ombor (ta'minotchi) $A_1, A_2, \dots, A_m$ mavjud bo'lib, ulardagi mahsulot zaxirasi mos ravishda $a_1, a_2, \dots, a_m$ ga teng.

Ushbu mahsulotni kutayotgan $n$ ta iste'molchi $B_1, B_2, \dots, B_n$ bo'lib, ularning talablari $b_1, b_2, \dots, b_n$ ga teng.
$i$-omboridan $j$-iste'molchiga 1 birlik yuk tashish narxi $c_{ij}$ ga teng.
$x_{ij} \ge 0$ — $A_i$ ombordan $B_j$ iste'molchiga tashiladigan yuk hajmi.

### Maqsad funksiyasi (Jami xarajat):
$$
L(X) = \sum_{i=1}^m \sum_{j=1}^n c_{ij} x_{ij} \longrightarrow \min
$$

### Chegaralar:
$$
\sum_{j=1}^n x_{ij} = a_i \quad (i = 1, \dots, m), \qquad \sum_{i=1}^m x_{ij} = b_j \quad (j = 1, \dots, n), \qquad x_{ij} \ge 0
$$

### Balans sharti (Yopiq model):
Agar $\sum_{i=1}^m a_i = \sum_{j=1}^n b_j$ bo'lsa, model **yopiq** deyiladi va u har doim optimal yechimga ega bo'ladi.

---

## 2. Boshlang'ich tayanch rejani topishning 2 xil usuli

Jadvaldagi **band kataklar soni aynan $m + n - 1$ ta** bo'lishi shart!

### 1-usul: «Shimoliy-g'arbiy burchak» usuli
1. Jadvalning eng chap yuqori burchagidan ($(1, 1)$ katak) boshlanadi.
2. Unga mumkin bo'lgan maksimal yuk beriladi: $x_{11} = \min(a_1, b_1)$.
3. Agar ombor bo'shasa, pastki qatorga; agar talab qondirilsa, o'ngdagi ustunga o'tiladi.
4. Bu jarayon eng o'ng pastki burchakka yetguncha davom ettiriladi.
*Eslatma:* Narxlar ($c_{ij}$) hisobga olinmagani uchun xarajat ancha katta chiqadi.

### 2-usul: «Minimal xarajatlar» usuli (Tavsiya etiladi)
1. Butun jadvaldagi eng kichik $c_{ij}$ tarifli katakka maksimal mumkin bo'lgan yuk yuklanadi.
2. Zaxirasi tugagan ombor satri yoki talabi qondirilgan ustun o'chiriladi.
3. Qolgan kataklar ichida yana eng kichik narxlisi tanlanadi.
Bu usul boshlang'ich rejani darhol optimal yechimga juda yaqin qilib beradi!

---

## 3. Potensiallar usuli (Optimallik mezonini tekshirish)

Har bir satrga $u_i$ potensiali, har bir ustunga $v_j$ potensiali mos qo'yiladi.

1. **Band kataklar uchun:**
   
$$
   u_i + v_j = c_{ij}
   
$$
   Odatda $u_1 = 0$ deb olinadi va qolgan barcha $u_i, v_j$ lar topiladi.
2. **Bo'sh kataklar uchun baholar:**
   
$$
   \Delta_{ij} = u_i + v_j - c_{ij}
   
$$
3. **Optimallik mezoni:**
   - Agar barcha bo'sh kataklar uchun **$\Delta_{ij} \le 0$** bo'lsa, reja **OPTIMALDIR** (xarajat minimal)!
   - Agar biror bo'sh katakda **$\Delta_{ij} > 0$** bo'lsa, reja optimal emas. Eng katta musbat bahoga ega katakdan yopiq to'g'ri burchakli **sikl (kontur)** tuzilib, yuklar qayta taqsimlanadi.

---

## 4. Amaliy masalalar va ko'p usulli yechimlar

### 1-masala: Boshlang'ich reja va xarajatlarni taqqoslash

Zaxiralar: $A_1 = 40, A_2 = 60$.
Talablar: $B_1 = 50, B_2 = 50$.
Tariflar matritsasi:
$$
C = \begin{pmatrix} 2 & 5 \\ 3 & 1 \end{pmatrix}
$$
Balans: $40 + 60 = 50 + 50 = 100$ (Model yopiq). Band kataklar soni: $m + n - 1 = 2 + 2 - 1 = 3$.

#### 1-usul: Shimoliy-g'arbiy burchak usuli
1. $(1, 1)$ katak: $x_{11} = \min(40, 50) = 40$. $A_1$ bo'shadi.
2. $(2, 1)$ katak: $x_{21} = \min(60, 50 - 40) = 10$. $B_1$ to'ldi.
3. $(2, 2)$ katak: $x_{22} = \min(50, 50) = 50$.
Jami xarajat:
$$
L_1 = 40(2) + 10(3) + 50(1) = 80 + 30 + 50 = 160 \text{ so'm}
$$

#### 2-usul: Minimal xarajatlar usuli
1. Jadvaldagi eng kichik narx: $c_{22} = 1$.
   $(2, 2)$ katakka yuk beramiz: $x_{22} = \min(60, 50) = 50$. $B_2$ talabi to'liq qondirildi!
2. Qolgan kataklar orasida eng arzoni: $c_{11} = 2$.
   $(1, 1)$ katakka beramiz: $x_{11} = \min(40, 50) = 40$. $A_1$ to'liq bo'shadi.
3. Qolgan yuk $(2, 1)$ katakka tushadi: $x_{21} = 10$.
Jami xarajat:
$$
L_2 = 40(2) + 10(3) + 50(1) = 160 \text{ so'm}
$$

#### Potensiallar bilan tekshirish:
Band kataklar: $(1,1), (2,1), (2,2)$.
1. $u_1 = 0 \implies v_1 = c_{11} - u_1 = 2 - 0 = 2$.
2. $u_2 + v_1 = c_{21} \implies u_2 + 2 = 3 \implies u_2 = 1$.
3. $u_2 + v_2 = c_{22} \implies 1 + v_2 = 1 \implies v_2 = 0$.
Bo'sh katak: $(1, 2)$.
Baho: $\Delta_{12} = u_1 + v_2 - c_{12} = 0 + 0 - 5 = -5 \le 0$.
Barcha bo'sh kataklar bahosi manfiy! Demak, topilgan reja **qat'iy optimaldir** va xarajatni $160$ dan pastga tushirib bo'lmaydi.

---

## 5. Imtihondagi asosiy tuzoqlar

> [!WARNING] Imtihondagi tuzoqlar
> 1. **Band kataklar soni yetishmasligi (Aynigan reja — Degeneracy):**
>    Agar band kataklar soni $m + n - 1$ dan kam bo'lib qolsa, potensiallarni ($u_i, v_j$) hisoblab bo'lmaydi! Bunday holatda eng arzon bo'sh katakka sun'iy ravishda nol yukli **"$\varepsilon = 0$" belgisi** qo'yilib, katak band qilib olinadi.
> 2. **Ochiq modelni balanslashtirmasdan yechish:**
>    Agar $\sum a_i \neq \sum b_j$ bo'lsa, yetishmayotgan tomonga soxta $A_{m+1}$ yoki $B_{n+1}$ qo'shib, uning narxlarini $c = 0$ qilib olish shart.
> 3. **Sikl tuzish qoidasini buzish:**
>    Qayta taqsimlash sikli faqat bitta bo'sh katak va qolgan barcha **band kataklardan** iborat bo'lishi hamda barcha burilish burchaklari aynan $90^\circ$ to'g'ri burchak bo'lishi shart!

---

## 6. Mustaqil yechish uchun amaliy mashqlar

### 1-mashq
Omborlar zaxirasi $a = (50, 70)$, iste'molchilar talabi $b = (40, 80)$. Model yopiqmi? Band kataklar soni nechta bo'lishi kerak?

<details>
<summary>👉 Yechimni tekshirish</summary>

1. $\sum a_i = 50 + 70 = 120$. $\sum b_j = 40 + 80 = 120$. Yig'indilar teng, demak model **yopiq**.
2. $m = 2, n = 2$.
   Band kataklar soni: $m + n - 1 = 2 + 2 - 1 = 3$ ta bo'lishi shart.
</details>

### 2-mashq
Agar bo'sh katak uchun $u_1 = 2, v_3 = 4, c_{13} = 5$ bo'lsa, baho $\Delta_{13}$ ni hisoblang va reja optimalmi?

<details>
<summary>👉 Yechimni tekshirish</summary>

$$
\Delta_{13} = u_1 + v_3 - c_{13} = 2 + 4 - 5 = 1 > 0
$$
Baho musbat bo'lgani sababli joriy reja **optimal emas**! $(1, 3)$ katakka yuk ko'chirish orqali umumiy xarajatni yanada kamaytirish mumkin.
</details>
