---
title: "Qavariq ko'pyoqlar, Platon jismlari va Eyler topologik xarakteristikasi"
description: "Muntazam ko'pyoqlar (5 ta Platon jismi), Arximed ko'pyoqlari, Eyler formulasi V - E + F = 2 va uning topologik isboti."
module: "vektorlar-geometriya"
order: 16
---

## 📌 Kirish va Amaliy Mohiyati

Fazoviy geometriyadagi eng hayratlanarli faktlardan biri shuki: ikki o'lchovli tekislikda cheksiz ko'p muntazam ko'pburchaklar (teng tomonli uchburchak, kvadrat, muntazam beshburchak, ...) mavjud bo'lgani holda, uch o'lchovli fazoda **atigi 5 ta muntazam ko'pyoq** (Platon jismlari) mavjud bo'lishi mumkin!

Ushbu qat'iy cheklov va ko'pyoqlarning tub xususiyatlari buyuk Leonard Eyler kashf etgan universal topologik invariant orqali tushuntiriladi. Eylerning ko'pyoqlar formulasi nafaqat sof stereometriyada, balki organik kimyoda uglerod molekulalari (fullerenlar $C_{60}$), viruslar kapsidlarining geometrik arxitekturasi, kristallar panjarasi va zamonaviy kompyuter topologiyasida (3D to'rlar / polygon mesh) fundamental tayanch hisoblanadi.

---

## 📐 Asosiy Nazariya, Qoidalar va Teoremalar

### 1. Qavariq ko'pyoq ta'rifi

Agar ko'pyoq o'zining har qanday yog'i yotgan tekislikning faqat bir tomonida joylashsa, u **qavariq ko'pyoq** deyiladi. Qavariq ko'pyoqning barcha yoqlari qavariq ko'pburchaklardir.

---

### 2. Eyler Teoremasi (Topologik xarakteristika)

> **Eyler formulasi:**
> Har qanday qavariq ko'pyoq uchun uning cho'qqilari soni $V$ (Vertices), qirralari soni $E$ (Edges) va yoqlari soni $F$ (Faces) o'rtasida doimo quyidagi munosabat bajariladi:
> $$
> V - E + F = 2
> $$

Ushbu $\chi = V - E + F = 2$ soni **sferik sirtning Eyler xarakteristikasi** deyiladi.

#### Koshi bo'yicha topologik isbot:
1. Ko'pyoqning bitta yog'ini (masalan, asosi) olib tashlaymiz va qolgan sirtni elastik kauchuk kabi tekislikka tekis yoyamiz (yassi planal graf hosil qilamiz). Bunda bitta yoq olib tashlangani uchun tekislikdagi yoqlar soni $F' = F - 1$ bo'ladi. Isbotlashimiz kerak bo'lgan formula: $V - E + F' = 1$.
2. Ushbu yassi grafni uchburchaklarga ajratamiz (triangulyatsiya). Agar 3 dan ortiq burchakli yoqqa diagonal o'tkazsak, bitta yangi qirra va bitta yangi yoq qo'shiladi: $\Delta(V - E + F') = 0 - 1 + 1 = 0$, ya'ni ifoda qiymati o'zgarmaydi.
3. Hosil bo'lgan uchburchakli to'rni chetidan bittalab o'chira boshlaymiz:
   - Agar tashqi chegaradagi bitta qirra va bitta yoq o'chirilsa: $\Delta V = 0, \Delta E = -1, \Delta F' = -1 \implies \Delta(V - E + F') = 0 - (-1) + (-1) = 0$.
   - Agar bitta cho'qqi, ikkita qirra va bitta yoq o'chirilsa: $\Delta V = -1, \Delta E = -2, \Delta F' = -1 \implies \Delta(V - E + F') = -1 - (-2) + (-1) = 0$.
4. Oxirida yagona bitta uchburchak qoladi. Uning parametrlari: $V = 3, E = 3, F' = 1$.
   $$
   V - E + F' = 3 - 3 + 1 = 1
   $$
   Dastlabki olib tashlangan bitta yoqni hisobga olsak: $F = F' + 1$, demak:
   $$
   V - E + F = 2 \quad \blacksquare
   $$

---

### 3. Nima uchun atigi 5 ta Platon jismi mavjud?

Muntazam ko'pyoqning har bir yog'i muntazam $p$-burchak bo'lsin va har bir cho'qqisida $q$ ta qirra tutashsin ($p \ge 3, q \ge 3$).
- Har bir $p$-burchakda $p$ ta qirra bor va har bir qirra 2 ta yoqqa tegishli: $pF = 2E \implies F = \frac{2E}{p}$.
- Har bir cho'qqidan $q$ ta qirra chiqadi va har bir qirra 2 ta cho'qqini tutashtiradi: $qV = 2E \implies V = \frac{2E}{q}$.

Bularni Eyler formulasiga qo'yamiz:
$$
\frac{2E}{q} - E + \frac{2E}{p} = 2
$$
Ikkala tomonni $2E$ ga bo'lamiz:
$$
\frac{1}{p} + \frac{1}{q} = \frac{1}{2} + \frac{1}{E}
$$
Chunki qirralar soni $E > 0$, demak qat'iy tengsizlik hosil bo'ladi:
$$
\frac{1}{p} + \frac{1}{q} > \frac{1}{2}
$$

$p \ge 3$ va $q \ge 3$ butun sonlar uchun ushbu tengsizlikni qanoatlantiruvchi **atigi 5 ta juftlik $(p, q)$** mavjud:

| Platon jismi | Yoq shakli ($p$) | Cho'qqidagi qirralar ($q$) | Cho'qqilar ($V$) | Qirralar ($E$) | Yoqlar ($F$) | Eyler yig'indisi |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **Tetraedr** | 3 (uchburchak) | 3 | 4 | 6 | 4 | $4 - 6 + 4 = 2$ |
| **Geksaedr (Kub)** | 4 (kvadrat) | 3 | 8 | 12 | 6 | $8 - 12 + 6 = 2$ |
| **Oktaedr** | 3 (uchburchak) | 4 | 6 | 12 | 8 | $6 - 12 + 8 = 2$ |
| **Dodekaedr** | 5 (beshburchak) | 3 | 20 | 30 | 12 | $20 - 30 + 12 = 2$ |
| **Ikosaedr** | 3 (uchburchak) | 5 | 12 | 30 | 20 | $12 - 30 + 20 = 2$ |

---

### 4. Dual ko'pyoqlar tushunchasi
Har bir ko'pyoqning yoqlari markazlarini tutashtirsak, unga **dual (qo'shma)** ko'pyoq hosil bo'ladi:
- Kub ($V=8, F=6$) va Oktaedr ($V=6, F=8$) bir-biriga dual;
- Dodekaedr ($V=20, F=12$) va Ikosaedr ($V=12, F=20$) bir-biriga dual;
- Tetraedr ($V=4, F=4$) esa o'z-o'ziga dualdir.

---

## 📝 Qadamma-qadam Yechilgan Amaliy Misollar

### 1-misol: Futbol to'pi (Fulleren $C_{60}$) geometriyasini isbotlash

**Masala:** Futbol to'pi qavariq ko'pyoq bo'lib, uning har bir cho'qqisida 3 ta qirra tutashadi ($q=3$), yoqlari esa faqat muntazam 5-burchaklar va 6-burchaklardan iborat. Eyler formulasi yordamida beshburchaklar soni qat'iy 12 ta bo'lishini isbotlang (olti burchaklar sonidan qat'i nazar!).

**Yechish:**
1. Beshburchaklar sonini $F_5$, oltiburchaklar sonini $F_6$ deb belgilaymiz.
   Umumiy yoqlar soni: $F = F_5 + F_6$.
2. Qirralar soni $E$: har bir beshburchakda 5 ta, har bir oltiburchakda 6 ta qirra bo'lib, har bir qirra 2 ta yoqqa tegishli:
   $$
   2E = 5F_5 + 6F_6 \implies E = \frac{5}{2}F_5 + 3F_6
   $$
3. Cho'qqilar soni $V$: har bir cho'qqida 3 ta qirra tutashadi va har bir qirra 2 ta cho'qqini birlashtiradi:
   $$
   3V = 2E \implies V = \frac{2}{3}E = \frac{2}{3}\left(\frac{5}{2}F_5 + 3F_6\right) = \frac{5}{3}F_5 + 2F_6
   $$
4. $V, E, F$ larni Eyler formulasiga qo'yamiz:
   $$
   V - E + F = 2
   $$
   $$
   \left(\frac{5}{3}F_5 + 2F_6\right) - \left(\frac{5}{2}F_5 + 3F_6\right) + (F_5 + F_6) = 2
   $$
   $F_6$ hadlarini guruhlaymiz:
   $$
   2F_6 - 3F_6 + F_6 = 0 \cdot F_6 = 0
   $$
   $F_5$ hadlarini hisoblaymiz:
   $$
   \left(\frac{5}{3} - \frac{5}{2} + 1\right)F_5 = \left(\frac{10 - 15 + 6}{6}\right)F_5 = \frac{1}{6}F_5
   $$
5. Tenglikdan topamiz:
   $$
   \frac{1}{6}F_5 = 2 \implies F_5 = 12 \quad \blacksquare
   $$

**Xulosa:** Klassik futbol to'pida yoki $C_{60}$ fullerenida nechtadir oltiburchak bo'lishidan qat'i nazar, **beshburchaklar soni doimo aynan 12 ta bo'lishi shart!**

---

### 2-misol: Qavariq ko'pyoqning burchaklar defektini hisoblash

**Masala:** Dekart teoremasiga ko'ra, qavariq ko'pyoqning har bir $i$-cho'qqisidagi "burchaklar defekti" $\delta_i = 2\pi - \sum \theta_{ij}$ deb ataladi (bu yerda $\theta_{ij}$ shu cho'qqidagi yassi burchaklar). Barcha cho'qqilar bo'yicha to'liq defekt yig'indisi $\sum_{i=1}^V \delta_i = 4\pi$ bo'lishini Eyler formulasi orqali isbotlang.

**Yechish:**
1. Har bir $k$-yoq $n_k$-burchak bo'lsin. $n_k$-burchakning ichki burchaklari yig'indisi $(n_k - 2)\pi$ ga teng.
2. Butun ko'pyoqning barcha yassi burchaklari yig'indisi $S$ ni yoqlar bo'yicha hisoblaymiz:
   $$
   S = \sum_{k=1}^F (n_k - 2)\pi = \pi \sum_{k=1}^F n_k - 2\pi F
   $$
   Har bir yoqning qirralari yig'indisi $\sum n_k = 2E$ bo'lgani uchun:
   $$
   S = 2\pi E - 2\pi F = 2\pi(E - F)
   $$
3. Endi to'liq defektni cho'qqilar orqali yozamiz:
   $$
   \sum_{i=1}^V \delta_i = \sum_{i=1}^V (2\pi - \sum \theta) = 2\pi V - S
   $$
4. $S$ ning o'rniga qo'yamiz:
   $$
   \sum_{i=1}^V \delta_i = 2\pi V - 2\pi(E - F) = 2\pi(V - E + F)
   $$
5. Eyler formulasiga ko'ra $V - E + F = 2$:
   $$
   \sum_{i=1}^V \delta_i = 2\pi \cdot 2 = 4\pi \quad \blacksquare
   $$

---

### 3-misol: Triangulyatsiyalangan ko'pyoq xossalari

**Masala:** Agar qavariq ko'pyoqning barcha yoqlari faqat uchburchaklardan iborat bo'lsa, uning qirralari soni $E = 3V - 6$ va yoqlari soni $F = 2V - 4$ ekanligini isbotlang.

**Yechish:**
1. Barcha yoqlar uchburchak bo'lgani uchun: $3F = 2E \implies F = \frac{2}{3}E$.
2. Eyler formulasiga qo'yamiz:
   $$
   V - E + \frac{2}{3}E = 2 \implies V - \frac{1}{3}E = 2 \implies \frac{1}{3}E = V - 2
   $$
   Bundan: $E = 3V - 6$.
3. Endi $F$ ni topamiz:
   $$
   F = \frac{2}{3}E = \frac{2}{3}(3V - 6) = 2V - 4 \quad \blacksquare
   $$

---

### 4-misol: Berilgan qirra va cho'qqilar bo'yicha yoqlarni aniqlash

**Masala:** Qavariq prizmaning 18 ta qirrasi bor. Uning yoqlari va cho'qqilari sonini toping.

**Yechish:**
1. $n$-burchakli prizmada:
   - Asoslarida $n$ tadan 2 ta asos: jami $2n$ ta cho'qqi ($V = 2n$);
   - Yon qirralari $n$ ta, asos qirralari $2n$ ta: jami $3n$ ta qirra ($E = 3n$);
   - 2 ta asos va $n$ ta yon yoq: jami $n + 2$ ta yoq ($F = n + 2$).
2. Masala shartiga ko'ra $E = 3n = 18 \implies n = 6$ (olti burchakli prizma).
3. Cho'qqilar soni: $V = 2 \cdot 6 = 12$.
4. Yoqlar soni: $F = 6 + 2 = 8$.
5. Eyler formulasini tekshiramiz: $12 - 18 + 8 = 2$ (to'g'ri).

**Javob:** $V = 12$ ta cho'qqi va $F = 8$ ta yoq.

---

## ⚠️ Talabalar Ko'p Yo'l Qo'yadigan Xatolar

> [!WARNING] Imtihonda ehtiyot bo'ling!
> 1. **Noqavariq yoki teshikli jismlarga Eyler formulasini ko'r-ko'rona qo'llash:**
>    - Eyler formulasi faqat shar (sfera)ga gomeomorf bo'lgan qavariq ko'pyoqlar uchun $V - E + F = 2$ ga teng.
>    - Agar jism teshikka ega bo'lsa (torus / bublik shaklida, $g = 1$), u holda Eyler xarakteristikasi:
>      $$ V - E + F = 2 - 2g = 2 - 2(1) = 0 $$
> 2. **Platon jismlari tengsizligini chiqarishda qirralar hisobida adashish:** Har bir yoq $p$ ta qirraga ega bo'lsa, $pF = E$ deb yozish qo'pol xatodir! Chunki har bir qirra 2 ta qo'shni yoqqa umumiy bo'lgani sababli, albatta $pF = 2E$ bo'ladi.
> 3. **Cho'qqidagi burchaklar yig'indisini unutish:** Har qanday qavariq ko'pyoq cho'qqisidagi yassi burchaklar yig'indisi qat'iy ravishda $360^\circ$ ($2\pi$) dan kichik bo'lishi shart, aks holda fazoviy cho'qqi hosil bo'lmay tekislanib qoladi.

---

## 🎯 Mustaqil Yechish Uchun Masalalar

1. O'n ikki burchakli piramidaning cho'qqilar, qirralar va yoqlar sonini toping hamda Eyler formulasini tekshiring.
   - *Yechish:* $n=12$. $V = n+1 = 13$, $F = n+1 = 13$, $E = 2n = 24$.
   - *Tekshirish:* $13 - 24 + 13 = 2$.
   - *Javob:* $V = 13, E = 24, F = 13$.

2. Har bir cho'qqisidan aynan 4 ta qirra chiquvchi qavariq ko'pyoqning 30 ta qirrasi bo'lsa, uning cho'qqilar va yoqlar sonini aniqlang.
   - *Yechish:* $4V = 2E \implies 4V = 60 \implies V = 15$. Eyler formulasi: $15 - 30 + F = 2 \implies F = 17$.
   - *Javob:* $V = 15$ ta cho'qqi, $F = 17$ ta yoq.

3. Dodekaedrning har bir cho'qqisidagi burchaklar defekti $\delta$ ni va jami 20 ta cho'qqisining to'liq defektini toping.
   - *Yechish:* Muntazam beshburchak burchagi $108^\circ$. Har bir cho'qqida 3 ta yoq bor: $3 \times 108^\circ = 324^\circ$. Defekt: $\delta = 360^\circ - 324^\circ = 36^\circ$. Jami defekt: $20 \times 36^\circ = 720^\circ = 4\pi$.
   - *Javob:* $\delta = 36^\circ$ ($\frac{\pi}{5}$ rad), jami defekt $4\pi$.

4. Qavariq ko'pyoqning faqat 6 ta cho'qqisi va 8 ta yog'i bo'lishi mumkinmi? U qaysi jism?
   - *Yechish:* $E = V + F - 2 = 6 + 8 - 2 = 12$. Bu muntazam Oktaedrdir.
   - *Javob:* Ha, bu Oktaedr ($V=6, E=12, F=8$).

---

## 💡 Xulosa va Imtihon Maslahatlari

- Platon jismlari 5 ta: Tetraedr, Kub, Oktaedr, Dodekaedr, Ikosaedr.
- Qavariq ko'pyoqlarga oid masalalarni yechishda asosiy tayanch tengliklar:
  $$
  V - E + F = 2, \quad \sum p_i = 2E, \quad \sum q_j = 2E
  $$
- Topologiyada jismning o'lchami yoki qirralari uzunligi emas, balki uning ulanish strukturasi (invariant) muhimdir. Eyler formulasi aynan shu sababli geometriyadagi eng fundamental qonundir.
