---
title: "Ikki o'zgaruvchili funksiya va uning aniqlanish sohasi"
module: "kop-ozgaruvchili-funksiyalar"
order: 1
description: "Ko'p o'zgaruvchili funksiyalar, 3D fazodagi sirtlar, aniqlanish sohasini tekislikda aniqlash, sath chiziqlari va ko'p usulli amaliy tahlil."
---

## Kirish: Real dunyo ko'p o'lchamli

Bir o'zgaruvchili matematik analizda ($y = f(x)$) faqat bitta erkin parametr o'zgarishi o'rganilar edi. Ammo real olamdagi fizik, iqtisodiy va muhandislik jarayonlari deyarli har doim bir necha omillarning birgalikdagi ta'siriga bo'ysunadi:
- Termodinamikada: gaz bosimi $P$ uning hajmi $V$ va mutlaq harorati $T$ ga bog'liq: $P(V, T) = \frac{\nu R T}{V}$;
- Iqtisodiyotda (Kobb-Duglas modeli): ishlab chiqarish hajmi $Q$ asosiy kapital $K$ va mehnat resursi $L$ ga bog'liq: $Q(K, L) = A K^\alpha L^\beta$;
- Sun'iy intellektda: xatolik funksiyasi (Loss function) millionlab neyron vaznlariga ($w_1, w_2, \dots, w_n$) bog'liq bo'ladi.

Bunday bog'liqliklarni o'rganish oliy matematikaning eng muhim bo'limlaridan biri — **ko'p o'zgaruvchili funksiyalar tahlilining** asosiy vazifasidir.

---

## 1. Ikki o'zgaruvchili funksiya ta'rifi

> **Ta'rif:** Agar $D \subset \mathbb{R}^2$ tekislikdagi har bir $(x, y)$ tartiblangan juftlikka ma'lum bir qoida bo'yicha yagona haqiqiy $z \in \mathbb{R}$ soni mos qo'yilgan bo'lsa, $D$ to'plamda aniqlangan **ikki o'zgaruvchili funksiya** berilgan deyiladi:
>
> 
$$
> z = f(x, y)
> 
$$
>
> bu yerda:
> - $x, y$ — erkli o'zgaruvchilar (argumentlar);
> - $z$ — erksiz o'zgaruvchi (funksiya qiymati);
> - $D = D(f)$ — funksiyaning **aniqlanish sohasi** ($\mathbb{R}^2$ tekislikning qism to'plami);
> - $E = E(f)$ — funksiyaning **qiymatlar sohasi** ($\mathbb{R}$ sonlar o'qidagi to'plam).

---

## 2. Geometrik ma'nosi: 3D fazodagi sirt

Bir o'zgaruvchili $y = f(x)$ funksiyaning grafigi tekislikdagi **egri chiziqni** ifodalasa, ikki o'zgaruvchili $z = f(x, y)$ funksiyaning grafigi uch o'lchamli fazodagi **sirtni (yuzani)** tashkil etadi.

### Asosiy namunaviy sirtlar:
1. **Tekislik:** $Ax + By + Cz + D = 0 \implies z = -\frac{A}{C}x - \frac{B}{C}y - \frac{D}{C}$.
2. **Elliptik paraboloid (kosa shaklidagi sirt):** $z = \frac{x^2}{a^2} + \frac{y^2}{b^2}$. Agar $a = b$ bo'lsa — aylanma paraboloid $z = x^2 + y^2$.
3. **Giperbolik paraboloid (egar shakli):** $z = \frac{x^2}{a^2} - \frac{y^2}{b^2}$.
4. **Sfera:** $x^2 + y^2 + z^2 = R^2 \implies z = \sqrt{R^2 - x^2 - y^2}$ (yuqori yarimsfera).
5. **Konus:** $z = \sqrt{x^2 + y^2}$ (uchiga qo'yilgan aylanma konus).

---

## 3. Aniqlanish sohasini topish va tekislikda chizish

Ko'p o'zgaruvchili funksiyalarning aniqlanish sohasi tekislikdagi biror geometrik figura (doira, polosa, burchak, ko'pburchak) bo'ladi.

Asosiy cheklovlar:
1. Maxraj nolga aylanmasligi kerak: $\frac{1}{g(x, y)} \implies g(x, y) \neq 0$;
2. Juft darajali ildiz osti nomanfiy bo'lishi kerak: $\sqrt{g(x, y)} \implies g(x, y) \ge 0$;
3. Logarifm osti qat'iy musbat bo'lishi kerak: $\ln(g(x, y)) \implies g(x, y) > 0$;
4. Arksinus va arkkosinus argumenti: $-1 \le g(x, y) \le 1$.

---

## 4. Sath chiziqlari (Izoliniyalar)

Murakkab 3D sirtlarni tekis qog'ozda (2D) tasavvur qilish uchun **sath chiziqlari** (izoliniyalar) tushunchasi qo'llaniladi.

> **Ta'rif:** Sirtning $z = C$ gorizontal tekisliklari bilan kesilishidan hosil bo'ladigan $Oxy$ tekisligidagi egri chiziqlar to'plami **sath chiziqlari** deyiladi:
>
> 
$$
> f(x, y) = C \quad (C = \text{const})
> 
$$

- **Topografiya:** Bir xil balandlikka ega nuqtalarni tutashtiruvchi gorizontallar (izogipslar);
- **Meteorologiya:** Bir xil bosimli chiziqlar (izobaralar) va bir xil haroratli chiziqlar (izotermalar);
- **Elektrodinamika:** Ekvipotensial chiziqlar.

---

## Bitta masalani 2 xil usulda yechish va solishtirish

> **Masala:** $z = \ln(y - x^2) + \sqrt{4 - x^2 - y^2}$ funksiyaning aniqlanish sohasi $D(f)$ ni toping va tekislikda tasvirlang.

### 1-usul: Analitik tengsizliklar sistemasi usuli
Ikkala hadning bir vaqtda ma'noga ega bo'lish shartini yozamiz:
$$
\begin{cases}
y - x^2 > 0 \quad (\text{logarifm osti}) \\
4 - x^2 - y^2 \ge 0 \quad (\text{ildiz osti})
\end{cases} \implies \begin{cases}
y > x^2 \\
x^2 + y^2 \le 4
\end{cases}
$$
1. $y > x^2$: Bu parabola $y = x^2$ ning **ichki (yuqori) qismi**. Tengsizlik qat'iy ($>$) bo'lgani sababli parabola chizig'ining o'zi sohaga kirmaydi (punktir chiziq).
2. $x^2 + y^2 \le 4$: Bu markazi $(0, 0)$ koordinatada, radiusi $R = \sqrt{4} = 2$ bo'lgan **doira va uning chegarasi** (yaxlit chiziq).
3. Aniqlanish sohasi: Doiraning $y = x^2$ paraboladan yuqori qismida joylashgan umumiy qismi.

### 2-usul: Geometrik kesishish nuqtalarini topish va sinov nuqtalari usuli
Chegaralarning kesishish nuqtalarini topamiz:
$$
\begin{cases} y = x^2 \\ x^2 + y^2 = 4 \end{cases} \implies y + y^2 = 4 \implies y^2 + y - 4 = 0
$$
$$
y = \frac{-1 \pm \sqrt{1 + 16}}{2} = \frac{-1 \pm \sqrt{17}}{2}
$$
$y = x^2 \ge 0$ bo'lgani uchun faqat musbat ildiz olinadi:
$$
y_0 = \frac{\sqrt{17} - 1}{2} \approx \frac{4.123 - 1}{2} = 1.56
$$
Mos $x$ lar: $x = \pm \sqrt{y_0} \approx \pm 1.25$.
Kesishish nuqtalari: $M_1(-1.25; 1.56)$ va $M_2(1.25; 1.56)$.

Sinov nuqtasi orqali tekshiramiz: $M(0; 1)$ nuqtani tanlaymiz:
- $y - x^2 = 1 - 0 = 1 > 0$ (qanoatlantiradi);
- $x^2 + y^2 = 0 + 1 = 1 \le 4$ (qanoatlantiradi).
Demak, $(0; 1)$ nuqta yotgan soha aniqlanish sohasidir.

---

> [!WARNING] Imtihondagi tuzoqlar va ko'p uchraydigan xatoliklar
> 1. **Qat'iy va noqat'iy tengsizlik chegaralari:**
>    - Qat'iy tengsizlikda ($>$, $<$) chegara egri chizig'i **punktir (uziq-uziq)** chiziq bilan chiziladi (chunki u sohaga kirmaydi);
>    - Noqat'iy tengsizlikda ($\ge$, $\le$) chegara **yaxlit (tutash)** chiziq bilan chiziladi.
> 2. **Logarifm argumentida ko'paytma tuzog'i:**
>    $z = \ln(x \cdot y)$ funksiyani ko'rib chiqaylik. Ko'pchilik faqat $x > 0, y > 0$ (1-chorak) deb o'ylaydi. Aslida esa $x \cdot y > 0$ sharti $x < 0, y < 0$ (3-chorak) da ham bajariladi! Shuning uchun aniqlanish sohasi 1- va 3-choraklarning birlashmasidan iborat.
> 3. **Kasr-ratsional ko'p o'zgaruvchili funksiyada maxraj nollari:**
>    $z = \frac{1}{x^2 - y^2}$ bo'lsa, $x^2 - y^2 \neq 0 \implies y \neq \pm x$. Ya'ni tekislikdan ikkita o'zaro perpendikulyar bissektrisa to'g'ri chiziqlari butunlay chiqarib tashlanadi.

---

## Mustaqil yechish uchun amaliy mashqlar

1. $z = \sqrt{y^2 - 4x}$ funksiyaning aniqlanish sohasini toping va tekislikda tasvirlang.
2. $z = \arcsin\left(\frac{x}{2}\right) + \sqrt{1 - y^2}$ funksiyaning aniqlanish sohasini tengsizliklar orqali ifodalang va shaklini aniqlang.
3. $z = x^2 + 4y^2$ elliptik paraboloidning $z = 4$ va $z = 16$ bo'lgandagi sath chiziqlari tenglamasini toping va yarim o'qlarini aniqlang.

<details style="margin-top: 1rem; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); cursor: pointer;">
  <summary style="font-weight: 700; color: var(--primary);">👉 Yechimni tekshirish</summary>
  <div style="margin-top: 0.75rem; padding-top: 0.75rem; border-top: 1px solid var(--border-color); line-height: 1.7;">
    <p><strong>1-masala:</strong></p>
    <p>Ildiz osti: $y^2 - 4x \ge 0 \implies x \le \frac{y^2}{4}$.</p>
    <p>Bu $y^2 = 4x$ parabolaning tashqi (chap) tomonidagi yarimtekislik bo'lib, parabola chegarasi ham sohaga kiradi (yaxlit chiziq).</p>

    <hr style="margin: 0.75rem 0; border: none; border-top: 1px dashed var(--border-color);" />

    <p><strong>2-masala:</strong></p>
    <p>1) $-1 \le \frac{x}{2} \le 1 \implies -2 \le x \le 2$.</p>
    <p>2) $1 - y^2 \ge 0 \implies y^2 \le 1 \implies -1 \le y \le 1$.</p>
    <p><strong>Javob:</strong> Aniqlanish sohasi $D = [-2; 2] \times [-1; 1]$ bo'lgan <strong>to'g'ri to'rtburchak</strong> sohadir.</p>

    <hr style="margin: 0.75rem 0; border: none; border-top: 1px dashed var(--border-color);" />

    <p><strong>3-masala:</strong></p>
    <p>1) $z = 4 \implies x^2 + 4y^2 = 4 \implies \frac{x^2}{4} + \frac{y^2}{1} = 1$ — yarim o'qlari $a = 2, b = 1$ bo'lgan ellips.</p>
    <p>2) $z = 16 \implies x^2 + 4y^2 = 16 \implies \frac{x^2}{16} + \frac{y^2}{4} = 1$ — yarim o'qlari $a = 4, b = 2$ bo'lgan ellips.</p>
  </div>
</details>
