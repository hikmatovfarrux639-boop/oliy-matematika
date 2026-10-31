---
title: "Chiziqli operatorlar, ularning matritsasi va o'tish qonuni"
module: "chiziqli-algebra"
order: 16
description: "Chiziqli almashtirish ta'rifi, operator matritsasini tuzish, yangi bazisga o'tish formulasi (A' = T^-1 A T), yadro va tasvir."
---

## Kirish: Chiziqli operator nima?

Geometriya va fizikada eng ko'p bajariladigan amallar — vektorlarni burish, cho'zish, siqish, o'qlarga proyeksiyalash va ko'zgu akslantirishdir. Ushbu amallarning barchasi matematikada **chiziqli operatorlar (chiziqli almashtirishlar)** deb ataladi.

Kompyuter grafikasi (3D o'yinlar, animatsiyalar), robototexnika va sun'iy intellektda fazodagi har qanday harakat va deformatsiya aynan chiziqli operatorlar orqali amalga oshiriladi.

Eng muhim kashfiyot shundaki: **har qanday chiziqli operator berilgan bazisda bitta oddiy sonli kvadrat matritsa orqali to'liq ifodalanadi!**

---

## 1. Chiziqli operatorning qat'iy ta'rifi va xossalari

$V$ chiziqli fazodagi har bir $\vec{x}$ vektorga shu fazoning qandaydir $\vec{y} = \mathcal{A}\vec{x}$ vektorini mos qo'yuvchi $\mathcal{A}: V \to V$ qoida **chiziqli operator** deyiladi, agar u quyidagi ikkita asosiy shartni qanoatlantirsa:

1. **Additivlik:** Ixtiyoriy ikki vektor yig'indisining obrazi obrazlar yig'indisiga teng:
   $$
   \mathcal{A}(\vec{x}_1 + \vec{x}_2) = \mathcal{A}(\vec{x}_1) + \mathcal{A}(\vec{x}_2)
   $$
2. **Bir jinslilik:** Vektorni songa ko'paytirish amali operator tashqarisiga chiqadi:
   $$
   \mathcal{A}(\alpha \vec{x}) = \alpha \mathcal{A}(\vec{x}) \quad (\forall \alpha \in \mathbb{R})
   $$

Ushbu ikki shartni bitta qilib yozish mumkin:
$$
\mathcal{A}(\alpha \vec{x} + \beta \vec{y}) = \alpha \mathcal{A}(\vec{x}) + \beta \mathcal{A}(\vec{y})
$$

---

## 2. Operatorning berilgan bazisdagi matritsasi

Faraz qilaylik, $V$ fazoda $e = (\vec{e}_1, \vec{e}_2, \dots, \vec{e}_n)$ bazis berilgan bo'lsin.
Operatorning matritsasini tuzish uchun uning har bir bazis vektoriga ta'siri (obrazi) hisoblanadi va hosil bo'lgan vektorlar yana shu bazis bo'yicha yoyiladi:

$$
\begin{cases}
\mathcal{A}(\vec{e}_1) = a_{11} \vec{e}_1 + a_{21} \vec{e}_2 + \dots + a_{n1} \vec{e}_n \\
\mathcal{A}(\vec{e}_2) = a_{12} \vec{e}_1 + a_{22} \vec{e}_2 + \dots + a_{n2} \vec{e}_n \\
\dots\dots\dots\dots\dots\dots\dots\dots\dots\dots\dots\dots\dots \\
\mathcal{A}(\vec{e}_n) = a_{1n} \vec{e}_1 + a_{2n} \vec{e}_2 + \dots + a_{nn} \vec{e}_n
\end{cases}
$$

> [!IMPORTANT] Oltin qoida
> Har bir bazis vektorining obrazi koordinatalari matritsaga **QATOR EMAS, USTUN QILIB** yoziladi:
> $$
> A = \begin{pmatrix}
> a_{11} & a_{12} & \dots & a_{1n} \\
> a_{21} & a_{22} & \dots & a_{2n} \\
> \vdots & \vdots & \ddots & \vdots \\
> a_{n1} & a_{n2} & \dots & a_{nn}
> \end{pmatrix}
> $$

U holda ixtiyoriy $\vec{x}$ vektorning yangi obrazi $\vec{y} = \mathcal{A}\vec{x}$ oddiy matritsaviy ko'paytma bilan topiladi:
$$
Y = A \cdot X
$$

---

## 3. Yangi bazisga o'tganda operator matritsasining o'zgarish qonuni

Agar biz fazoda yangi bazis $e' = (\vec{e}_1', \vec{e}_2', \dots, \vec{e}_n')$ ga o'tsak, operatorning mohiyati o'zgarmaydi, lekin uning sonli matritsasi boshqacha ko'rinishga keladi.

Eski bazisdan yangi bazisga o'tish matritsasi $T$ bo'lsin ($e' = e T$).
U holda yangi bazisdagi $A'$ matritsa eski $A$ matritsa bilan quyidagi **o'xshashlik munosabati** orqali bog'langan:

$$
A' = T^{-1} \cdot A \cdot T
$$

> [!NOTE] O'xshash matritsalarning invariantlari
> $A$ va $A'$ matritsalar **o'xshash matritsalar** deyiladi. Qaysi bazis tanlanishidan qat'i nazar, operatorning quyidagi ko'rsatkichlari mutlaqo o'zgarmas (invariant) bo'lib qoladi:
> 1. Determinanti: $\det A' = \det A$;
> 2. Izi (bosh diagonal elementlari yig'indisi): $\operatorname{tr}(A') = \operatorname{tr}(A)$;
> 3. Xarakteristik ko'phadi va xos sonlari: $\det(A' - \lambda E) = \det(A - \lambda E)$.

---

## 4. Operator yadrosi va tasviri

Chiziqli operatorning fazoni qanday siqishini tushunish uchun ikkita muhim tushuncha kiritiladi:

1. **Operator yadrosi ($\ker \mathcal{A}$ yoki $\operatorname{Null}(A)$):** Operator ta'sirida fazoning **nol vektoriga o'tuvchi** barcha vektorlar to'plami:
   $$
   \ker \mathcal{A} = \{\vec{x} \in V \mid \mathcal{A}\vec{x} = \vec{0}\}
   $$
   Yadroni topish uchun $A X = \mathbf{0}$ bir jinsli tenglamalar sistemasi yechiladi. Yadro o'lchami operatorning *defekti* deyiladi.

2. **Operator tasviri / obrazi ($\operatorname{Im} \mathcal{A}$):** Barcha mumkin bo'lgan natijaviy $\vec{y}$ vektorlar to'plami:
   $$
   \operatorname{Im} \mathcal{A} = \{\mathcal{A}\vec{x} \mid \vec{x} \in V\}
   $$
   Tasvir o'lchami matritsa rangiga teng: $\dim(\operatorname{Im} \mathcal{A}) = \operatorname{rank}(A)$.

> [!NOTE] O'lchamlar haqidagi fundamental teorema
> $$
> \dim(\ker \mathcal{A}) + \dim(\operatorname{Im} \mathcal{A}) = n \quad (\text{Fazo o'lchami})
> $$

---

## 5. Qadamma-qadam to'liq yechilgan amaliy misollar

### 1-misol: Geometrik operatorlar matritsasini tuzish

**Masala:** 
a) Tekislikdagi har bir vektorni $Ox$ o'qi bo'yicha 2 marta cho'zuvchi va $Oy$ o'qi bo'yicha 3 marta siquvchi operator matritsasini tuzing.
b) Tekislikdagi barcha vektorlarni soat miliga teskari $\alpha = 90^\circ$ burchakka buruvchi operator matritsasini tuzing.

#### Yechish:
Standart bazis: $\vec{e}_1 = \begin{pmatrix} 1 \\ 0 \end{pmatrix}, \vec{e}_2 = \begin{pmatrix} 0 \\ 1 \end{pmatrix}$.

**a) Cho'zish va siqish operatori:**
- $\vec{e}_1$ vektor $Ox$ bo'ylab 2 marta cho'ziladi: $\mathcal{A}(\vec{e}_1) = 2\vec{e}_1 = \begin{pmatrix} 2 \\ 0 \end{pmatrix}$.
- $\vec{e}_2$ vektor $Oy$ bo'ylab 3 marta siqiladi: $\mathcal{A}(\vec{e}_2) = \frac{1}{3}\vec{e}_2 = \begin{pmatrix} 0 \\ 1/3 \end{pmatrix}$.
Ustun qilib yozamiz:
$$
A = \begin{pmatrix} 2 & 0 \\ 0 & 1/3 \end{pmatrix}
$$

**b) $90^\circ$ ga burish operatori:**
- $\vec{e}_1 = (1, 0)^T$ burilganda $Oy$ o'qiga tushadi: $\mathcal{A}(\vec{e}_1) = (0, 1)^T$.
- $\vec{e}_2 = (0, 1)^T$ burilganda manfiy $Ox$ o'qiga tushadi: $\mathcal{A}(\vec{e}_2) = (-1, 0)^T$.
Ustun qilib yozamiz:
$$
R_{90^\circ} = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}
$$
*(Umumiy $\alpha$ burchakka burish matritsasi: $R_\alpha = \begin{pmatrix} \cos\alpha & -\sin\alpha \\ \sin\alpha & \cos\alpha \end{pmatrix}$).*

---

### 2-misol: Yangi bazisda operator matritsasini topish

**Masala:** Standart bazisda operator matritsasi $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ berilgan.
Yangi bazis $\vec{e}_1' = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$ va $\vec{e}_2' = \begin{pmatrix} 1 \\ 2 \end{pmatrix}$ vektorlaridan iborat. Operatorning yangi bazisdagi $A'$ matritsasini toping.

#### Yechish:

**1-qadam. O'tish matritsasi $T$ ni tuzamiz:**
Yangi bazis vektorlarini ustun qilib yozamiz:
$$
T = \begin{pmatrix} 1 & 1 \\ 1 & 2 \end{pmatrix}
$$

**2-qadam. Teskari matritsa $T^{-1}$ ni hisoblaymiz:**
$\det T = 1 \cdot 2 - 1 \cdot 1 = 1 \neq 0$.
$$
T^{-1} = \frac{1}{1} \begin{pmatrix} 2 & -1 \\ -1 & 1 \end{pmatrix} = \begin{pmatrix} 2 & -1 \\ -1 & 1 \end{pmatrix}
$$

**3-qadam. $A' = T^{-1} A T$ formulasini hisoblaymiz:**
Avval $A \cdot T$ ni hisoblaymiz:
$$
A \cdot T = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} \begin{pmatrix} 1 & 1 \\ 1 & 2 \end{pmatrix} = \begin{pmatrix} 1\cdot 1 + 2\cdot 1 & 1\cdot 1 + 2\cdot 2 \\ 3\cdot 1 + 4\cdot 1 & 3\cdot 1 + 4\cdot 2 \end{pmatrix} = \begin{pmatrix} 3 & 5 \\ 7 & 11 \end{pmatrix}
$$
Endi $T^{-1} \cdot (A T)$ ni hisoblaymiz:
$$
A' = \begin{pmatrix} 2 & -1 \\ -1 & 1 \end{pmatrix} \begin{pmatrix} 3 & 5 \\ 7 & 11 \end{pmatrix} = \begin{pmatrix} 2\cdot 3 + (-1)\cdot 7 & 2\cdot 5 + (-1)\cdot 11 \\ -1\cdot 3 + 1\cdot 7 & -1\cdot 5 + 1\cdot 11 \end{pmatrix} = \begin{pmatrix} -1 & -1 \\ 4 & 6 \end{pmatrix}
$$

**Tekshirish (Invariantlar):**
- $\operatorname{tr}(A) = 1 + 4 = 5$, $\operatorname{tr}(A') = -1 + 6 = 5$ (Mos keldi!).
- $\det A = 4 - 6 = -2$, $\det A' = (-1)(6) - (-1)(4) = -6 + 4 = -2$ (Mos keldi!).

**Javob:** Yangi bazisdagi matritsa: $A' = \begin{pmatrix} -1 & -1 \\ 4 & 6 \end{pmatrix}$.

---

## 6. Talabalar yo'l qo'yadigan tuzoqlar

> [!WARNING] Imtihonda ehtiyot bo'ling!
> 1. **Obrazlar koordinatalarini qatorga yozish:** $\mathcal{A}(\vec{e}_1)$ ning natijasini 1-qatorga yozib qo'yish qo'pol xatodir! Doimo 1-ustunga yozilishi shart!
> 2. **O'tish formulasida $T$ va $T^{-1}$ o'rnini almashtirish:** Talabalar ko'pincha $A' = T A T^{-1}$ deb yozishadi. Bu xato! To'g'ri formula: $A' = T^{-1} A T$.
> 3. **Invariantlarni tekshirmaslik:** Hisob-kitobdan so'ng darhol bosh diagonal elementlari yig'indisini ($\operatorname{tr}$) va determinantni tekshiring. Agar ular teng chiqmasa, qayerdadir arifmetik xatoga yo'l qo'ygansiz.

---

## 7. Mustaqil yechish uchun amaliy mashqlar

1. $A = \begin{pmatrix} 2 & 1 \\ 0 & 3 \end{pmatrix}$ operator matritsasining $\vec{e}_1' = \begin{pmatrix} 1 \\ 1 \end{pmatrix}, \vec{e}_2' = \begin{pmatrix} 1 \\ -1 \end{pmatrix}$ bazisdagi ko'rinishini toping.
   - *Javob:* $T = \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}, T^{-1} = \frac{1}{2}\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix} \implies A' = \begin{pmatrix} 3 & -1 \\ 0 & 2 \end{pmatrix}$.

2. Operator $\mathcal{A}\vec{x} = (x_1 + 2x_2, \; 2x_1 + 4x_2)^T$ formula bilan berilgan. Uning yadrosi $\ker \mathcal{A}$ bazisini va tasviri o'lchamini toping.
   - *Javob:* Matritsa $A = \begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}, \operatorname{rank}(A) = 1 \implies \dim(\operatorname{Im} \mathcal{A}) = 1$. Yadro $x_1 + 2x_2 = 0 \implies \vec{v} = \begin{pmatrix} -2 \\ 1 \end{pmatrix}, \dim(\ker \mathcal{A}) = 1$.
