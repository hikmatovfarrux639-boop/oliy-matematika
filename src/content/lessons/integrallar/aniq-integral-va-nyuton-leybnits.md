---
title: "Aniq integral va Nyuton-Leybnits formulasi"
module: "integrallar"
order: 4
description: "Egri chiziqli trapetsiya yuzi, Riman yig'indisi, Nyuton-Leybnits formulasi, chegaralarni almashtirish qoidasi, yuzalar va aylanish jismlari hajmini hisoblash."
---

## Kirish: Aniq integral nima va u aniqmas integraldan nimasi bilan farq qiladi?

Eng avvalo eng muhim farqni eslab qolamiz:
- **Aniqmas integral $\int f(x) \, dx$** — bu funksiyalar oilasidir ($F(x) + C$).
- **Aniq integral $\int_a^b f(x) \, dx$** — bu aniq bitta **son**dir (u yuzani, masofani, massani yoki fizik ishni ifodalaydi).

Geometriyada to'g'ri to'rtburchak ($S = a \cdot b$) yoki uchburchak yuzini topish oson. Ammo ixtiyoriy egri chiziq ostidagi soha yuzini qanday o'lchash mumkin? Aynan shu savolga matematik analizning eng buyuk yutuqlaridan biri bo'lgan **aniq integral** javob beradi.

---

## 1. Egri chiziqli trapetsiya va Riman integral yig'indisi

Faraz qilaylik, $[a; b]$ kesmada $f(x) \ge 0$ uzluksiz funksiya berilgan bo'lsin.
Ushbu funksiya grafigi, $Ox$ o'qi hamda $x = a$ va $x = b$ to'g'ri chiziqlari bilan chegaralangan figura **egri chiziqli trapetsiya** deyiladi.

### Yuzani hisoblash g'oyasi:
1. $[a; b]$ kesmani $n$ ta mayda oraliqchalarga bo'lamiz: $a = x_0 < x_1 < \dots < x_n = b$.
2. Har bir oraliqchaning eni $\Delta x_i = x_i - x_{i-1}$, bo'yi esa funksiyaning ixtiyoriy $\xi_i \in [x_{i-1}, x_i]$ nuqtadagi qiymati $f(\xi_i)$ ga teng bo'lgan ustunchalar (to'g'ri to'rtburchaklar) quramiz.
3. Bu to'g'ri to'rtburchaklar yuzalari yig'indisi **Riman integral yig'indisi** deyiladi:
   
$$
   S_n = \sum_{i=1}^n f(\xi_i) \cdot \Delta x_i
   
$$
4. Agar bo'linishlar soni cheksiz ortsa ($n \to \infty$) va har bir oraliq eni nolga intilsa ($\max \Delta x_i \to 0$), ushbu ustunchalar yig'indisi egri chiziqli trapetsiyaning aniq yuzasiga intiladi!

> **Aniq integral ta'rifi:**
> 
$$
> \int_a^b f(x) \, dx = \lim_{\max \Delta x_i \to 0} \sum_{i=1}^n f(\xi_i) \Delta x_i
> 
$$
> bu yerda $a$ — quyi integrallash chegarasi, $b$ — yuqori integrallash chegarasi.

---

## 2. Butun matematik analizning shoh formulasi: Nyuton-Leybnits

Riman yig'indisining limitini har safar hisoblash juda og'ir. XVII asrda Isaak Nyuton va Gotfrid Leybnits bir-biridan mustaqil ravishda kashf etgan formula aniq integralni **boshlang'ich funksiya** orqali sekundlarda hisoblash imkonini berdi:

> **Nyuton-Leybnits formulasi:**
> Agar $F(x)$ funksiya $f(x)$ ning $[a; b]$ kesmadagi boshlang'ich funksiyasi bo'lsa ($F'(x) = f(x)$), u holda:
>
> 
$$
> \int_a^b f(x) \, dx = \left. F(x) \right|_a^b = F(b) - F(a)
> 
$$

**Hisoblash tartibi:**
1. $f(x)$ ning aniqmas integrali $F(x)$ topiladi (bunda $+ C$ yozilmaydi, chunki ayirishda $C - C = 0$ qisqarib ketadi).
2. Chiqqan funksiyaga avval **yuqori chegara $b$** qo'yiladi: $F(b)$.
3. So'ngra **quyi chegara $a$** qo'yiladi: $F(a)$.
4. Ayirma olinadi: $F(b) - F(a)$.

---

## 3. Aniq integralning asosiy xossalari

1. **Bir xil chegaralar:** $\int_a^a f(x) \, dx = 0$.
2. **Chegaralar o'rni almashsa:** Ishora qarama-qarshisiga o'zgaradi:
   
$$
   \int_b^a f(x) \, dx = -\int_a^b f(x) \, dx
   
$$
3. **Oraliqni bo'lish xossasi:** Ixtiyoriy $c$ nuqta uchun:
   
$$
   \int_a^b f(x) \, dx = \int_a^c f(x) \, dx + \int_c^b f(x) \, dx
   
$$
4. **O'zgarmas son va chiziqlilik:**
   
$$
   \int_a^b [k \cdot f(x) \pm m \cdot g(x)] \, dx = k \int_a^b f(x) \, dx \pm m \int_a^b g(x) \, dx
   
$$
5. **Simmetrik oraliqda ($[-a; a]$) integrallash (Imtihon siri!):**
   - Agar $f(x)$ **toq funksiya** bo'lsa ($f(-x) = -f(x)$):
     
$$
     \int_{-a}^a f(x) \, dx = 0
     
$$
     *(Masalan: $\int_{-5}^5 x^7 \sin(x^3) \, dx = 0$ — hisoblab o'tirish shart emas!)*
   - Agar $f(x)$ **juft funksiya** bo'lsa ($f(-x) = f(x)$):
     
$$
     \int_{-a}^a f(x) \, dx = 2 \int_0^a f(x) \, dx
     
$$

---

## 4. Aniq integralda o'zgaruvchini almashtirish

> ⚠️ **Oltin Qoida:** Aniq integralda yangi o'zgaruvchiga ($t = g(x)$) o'tganda, **integrallash chegaralari ham darhol yangi o'zgaruvchi uchun qayta hisoblanishi shart!**

$$
\begin{cases}
x = a \implies t_{\text{quyi}} = g(a) \\
x = b \implies t_{\text{yuqori}} = g(b)
\end{cases}
$$

$$
\int_a^b f(g(x)) g'(x) \, dx = \int_{g(a)}^{g(b)} f(t) \, dt
$$

Buning ajoyib afzalligi shundaki: chegaralarni o'zgartirgandan keyin **eski $x$ o'zgaruvchiga qaytishning umuman keragi yo'q!** To'g'ridan-to'g'ri yangi chegaralarni qo'yib hisoblayverasiz.

---

## 5. Aniq integralning geometrik tadbiqlari

### A) Ikki egri chiziq orasidagi yuza
Agar soha yuqoridan $y = f_2(x)$, pastdan esa $y = f_1(x)$ egri chiziqlari bilan chegaralangan bo'lsa ($f_2(x) \ge f_1(x)$):

$$
S = \int_a^b [f_2(x) - f_1(x)] \, dx
$$
*(Doimo "yuqorigi funksiya minus pastki funksiya" integrallanadi!)*

### B) Aylanish jismning hajmi
$y = f(x)$ egri chizig'ining $Ox$ o'qi atrofida aylanishidan hosil bo'lgan jismning hajmi:

$$
V_x = \pi \int_a^b [f(x)]^2 \, dx
$$

---

## 6. Amaliy misollar va batafsil yechimlar

### 1-misol: Nyuton-Leybnits formulasini to'g'ridan-to'g'ri qo'llash
Hisoblang:
$$
\int_1^2 (3x^2 - 2x + 1) \, dx
$$

**Yechilishi:**
1. Boshlang'ich funksiyani topamiz:
   $$F(x) = 3 \cdot \frac{x^3}{3} - 2 \cdot \frac{x^2}{2} + x = x^3 - x^2 + x$$
2. Nyuton-Leybnits bo'yicha chegaralarni qo'yamiz:
   $$\left. (x^3 - x^2 + x) \right|_1^2 = F(2) - F(1)$$
3. Hisoblaymiz:
   - $F(2) = 2^3 - 2^2 + 2 = 8 - 4 + 2 = 6$
   - $F(1) = 1^3 - 1^2 + 1 = 1 - 1 + 1 = 1$
   - $F(2) - F(1) = 6 - 1 = 5$

**Javob:** $5$

---

### 2-misol: Chegaralarni almashtirib yangi o'zgaruvchi kiritish
Hisoblang:
$$
\int_0^2 \frac{2x}{x^2 + 1} \, dx
$$

**Yechilishi:**
1. $t = x^2 + 1$ deb belgilaymiz $\implies dt = 2x \, dx$.
2. **Chegaralarni qayta hisoblaymiz:**
   - Quyi chegara ($x = 0$): $t_{\text{quyi}} = 0^2 + 1 = 1$
   - Yuqori chegara ($x = 2$): $t_{\text{yuqori}} = 2^2 + 1 = 5$
3. Yangi integralni tuzamiz va hisoblaymiz:
   
$$
   \int_1^5 \frac{dt}{t} = \left. \ln|t| \right|_1^5 = \ln 5 - \ln 1 = \ln 5 - 0 = \ln 5
   
$$

**Javob:** $\ln 5$

---

### 3-misol: Aniq integralda bo'laklab integrallash
Hisoblang:
$$
\int_0^\pi x \sin x \, dx
$$

**Yechilishi:**
- $u = x \implies du = dx$
- $dv = \sin x \, dx \implies v = -\cos x$

Bo'laklab integrallash formulasi:
$$
\left. (-x \cos x) \right|_0^\pi - \int_0^\pi (-\cos x) \, dx = \left. (-x \cos x) \right|_0^\pi + \left. \sin x \right|_0^\pi
$$
1. Birinchi qism:
   $$(-\pi \cos\pi) - (-0 \cdot \cos 0) = -\pi(-1) - 0 = \pi$$
2. Ikkinchi qism:
   $$\sin\pi - \sin 0 = 0 - 0 = 0$$
3. Yig'indi: $\pi + 0 = \pi$.

**Javob:** $\pi$

---

### 4-misol: Ikki egri chiziq orasidagi yuzani hisoblash
$y = 4 - x^2$ parabolasi va $y = x + 2$ to'g'ri chizig'i bilan chegaralangan soha yuzini toping.

**Yechilishi:**
1. Avval kesishish nuqtalarini (integrallash chegaralarini) topamiz:
   $$4 - x^2 = x + 2 \implies x^2 + x - 2 = 0 \implies (x + 2)(x - 1) = 0$$
   Demak, kesishish nuqtalari: $a = -2$ va $b = 1$.
2. Ushbu $[-2; 1]$ oraliqda qaysi funksiya yuqorida turishini tekshiramiz (masalan, $x = 0$ nuqtani qo'yamiz):
   - Parabola: $y = 4 - 0 = 4$ (yuqorida)
   - Chiziq: $y = 0 + 2 = 2$ (pastda)
3. Yuza formulasiga qo'yamiz ($S = \int_a^b [y_{\text{yuqori}} - y_{\text{quyi}}] \, dx$):
   
$$
   S = \int_{-2}^1 [(4 - x^2) - (x + 2)] \, dx = \int_{-2}^1 (2 - x - x^2) \, dx
   
$$
4. Integrallaymiz:
   
$$
   \left. \left( 2x - \frac{x^2}{2} - \frac{x^3}{3} \right) \right|_{-2}^1
   
$$
   - $x = 1$ da: $2(1) - \frac{1}{2} - \frac{1}{3} = 2 - \frac{5}{6} = \frac{7}{6}$
   - $x = -2$ da: $2(-2) - \frac{4}{2} - \frac{-8}{3} = -4 - 2 + \frac{8}{3} = -6 + \frac{8}{3} = -\frac{10}{3} = -\frac{20}{6}$
   - Ayirma: $\frac{7}{6} - \left(-\frac{20}{6}\right) = \frac{27}{6} = \frac{9}{2} = 4.5$

**Javob:** $S = 4.5$ kvadrat birlik.

---

### 5-misol: Aylanish jismning hajmi
$y = \sqrt{x}$ funksiyaning $x = 0$ dan $x = 4$ gacha bo'lgan qismini $Ox$ o'qi atrofida aylantirishdan hosil bo'lgan jism (paraboloid) hajmini toping.

**Yechilishi:**
Hajm formulasi: $V = \pi \int_a^b [f(x)]^2 \, dx$.
$$
V = \pi \int_0^4 (\sqrt{x})^2 \, dx = \pi \int_0^4 x \, dx = \left. \pi \cdot \frac{x^2}{2} \right|_0^4 = \pi \left( \frac{16}{2} - 0 \right) = 8\pi
$$

**Javob:** $V = 8\pi$ kub birlik.

---

## ⚠️ Talabalar ko'p yo'l qo'yadigan 3 ta jiddiy xato

1. **Nyuton-Leybnitsda chegaralar tartibini almashtirish:**
   > Formula $F(b) - F(a)$ (yuqori chegara minus quyi chegara). Talabalar ko'pincha $F(a) - F(b)$ qilib, natijada nordon manfiy son hosil qilishadi. Yuzaning qiymati esa hech qachon manfiy bo'la olmaydi!

2. **O'zgaruvchini almashtirganda chegaralarni esdan chiqarish:**
   > Agar $t = x^2$ qilsangiz, integral chegaralarini ham yangilash shart. Aks holda eski chegaralarni yangi funksiyaga qo'yib, mutlaqo noto'g'ri son olasiz.

3. **Yuzani topishda manfiy sohani hisobga olmaslik:**
   > Agar egri chiziq $Ox$ o'qining ostiga tushgan bo'lsa ($f(x) < 0$), oddiy integral manfiy chiqadi. Geometrik yuzani topish uchun uning absolyut qiymati (moduli) olinishi shart: $S = \int |f(x)| \, dx$.

---

## 💡 Ustozdan maslahat

Agar simmetrik oraliqda ($[-a; a]$) murakkab integral tushsa, masalan:
$$
\int_{-\pi/4}^{\pi/4} (x^5 \cos x + x^3 + \operatorname{tg} x) \, dx
$$
Qo'rqmang! Qavs ichidagi hamma funksiyalar toq funksiyadir ($f(-x) = -f(x)$). Demak, uning qiymati hech qanday hisob-kitobsiz **to'g'ridan-to'g'ri $0$** ga teng!

---

## ✍️ Mustaqil yechish uchun mashqlar

1. $\int_0^1 (4x^3 + 3x^2) \, dx$ ni hisoblang.
2. $\int_0^{\pi/4} \frac{dx}{\cos^2 x}$ integralining qiymatini toping.
3. $\int_1^e \frac{\ln x}{x} \, dx$ ni o'zgaruvchini almashtirish orqali hisoblang.
4. $y = x^2$ va $y = 2x$ chiziqlari bilan chegaralangan soha yuzini hisoblang.

<details style="margin-top: 1rem; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); cursor: pointer;">
  <summary style="font-weight: 700; color: var(--primary);">To'liq yechimlar va javoblar</summary>
  <div style="margin-top: 0.75rem; padding-top: 0.75rem; border-top: 1px solid var(--border-color);">
    <p><strong>1-masala:</strong> $\left. (x^4 + x^3) \right|_0^1 = (1 + 1) - (0) = 2$.</p>
    <p><strong>2-masala:</strong> $\left. \operatorname{tg} x \right|_0^{\pi/4} = \operatorname{tg}(\frac{\pi}{4}) - \operatorname{tg}(0) = 1 - 0 = 1$.</p>
    <p><strong>3-masala:</strong> $t = \ln x \implies dt = \frac{dx}{x}$. Chegaralar: $x=1 \implies t=0; x=e \implies t=1$. $\int_0^1 t dt = \left. \frac{t^2}{2} \right|_0^1 = \frac{1}{2}$.</p>
    <p><strong>4-masala:</strong> Kesishish: $x^2 = 2x \implies x=0, x=2$. $S = \int_0^2 (2x - x^2) dx = \left. (x^2 - \frac{x^3}{3}) \right|_0^2 = 4 - \frac{8}{3} = \frac{4}{3}$ kv. birlik.</p>
  </div>
</details>
