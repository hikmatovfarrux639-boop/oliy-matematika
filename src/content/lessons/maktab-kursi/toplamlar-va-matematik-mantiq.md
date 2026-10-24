---
title: "To'plamlar nazariyasi va matematik mantiq asoslari"
module: "maktab-kursi"
order: 5
description: "To'plamlar ustida amallar, Eyler-Venn diagrammalari, De Morgan qonunlari, mulohazalar algebrasi, rostlik jadvallari va mantiqiy xulosalar."
---

## Kirish: Matematikaning poydevori

Zamonaviy oliy matematika, kompyuter ilmlari (Computer Science), ma'lumotlar bazasi (SQL) va sun'iy intellekt algoritmlari ikkita asosiy ustunga tayanadi:
1. **To'plamlar nazariyasi:** obyektlarni guruhlash va ularning munosabatlarini ifodalash;
2. **Matematik mantiq:** to'g'ri fikrlash, isbotlash qoidalari va mulohazalar ustida amallar.

Ushbu mavzuda biz nafaqat nazariy ta'riflar bilan tanishamiz, balki ularning amaliy masalalarda, dasturlashda va Eyler-Venn diagrammalarida qanday qo'llanishini o'rganamiz.

---

## 1. To'plamlar va ular ustida asosiy amallar

> **To'plam** — umumiy belgisi yoki xossasiga ko'ra birlashtirilgan obyektlar (elementlar) majmuasidir.
> Agar $x$ element $A$ to'plamga tegishli bo'lsa: $x \in A$; tegishli bo'lmasa: $x \notin A$.

### Asosiy amallar:
1. **Birlashma ($A \cup B$):** $A$ ga **yoki** $B$ ga tegishli bo'lgan barcha elementlar to'plami:
   
$$
   A \cup B = \{x \mid x \in A \text{ yoki } x \in B\}
   
$$
2. **Kesishma ($A \cap B$):** Ham $A$ ga, **ham** $B$ ga bir vaqtda tegishli bo'lgan umumiy elementlar to'plami:
   
$$
   A \cap B = \{x \mid x \in A \text{ va } x \in B\}
   
$$
3. **Ayirma ($A \setminus B$):** $A$ ga tegishli, lekin $B$ ga kirmaydigan elementlar:
   
$$
   A \setminus B = \{x \mid x \in A \text{ va } x \notin B\}
   
$$
4. **To'ldiruvchi to'plam ($\bar{A}$ yoki $A'$):** Universal $U$ to'plamning $A$ ga kirmaydigan barcha elementlari:
   
$$
   \bar{A} = U \setminus A
   
$$
5. **Simmetrik ayirma ($A \triangle B$):** Faqat bitta to'plamga tegishli elementlar (kesishmasiz birlashma):
   
$$
   A \triangle B = (A \setminus B) \cup (B \setminus A) = (A \cup B) \setminus (A \cap B)
   
$$

### De Morgan qonunlari (Dualizm prinsipi):
$$
\overline{A \cup B} = \bar{A} \cap \bar{B}, \qquad \overline{A \cap B} = \bar{A} \cup \bar{B}
$$

---

## 2. Eyler-Venn diagrammalari va Quvvat (Kardinal son)

Chekli to'plamdagi elementlar soni uning **quvvati** deb ataladi va $|A|$ yoki $n(A)$ kabi belgilanadi.

> **Kiritish va chiqarish prinsipi (Inclusion-Exclusion):**
> Ikkita to'plam uchun:
> 
$$
> |A \cup B| = |A| + |B| - |A \cap B|
> 
$$
> Uchta to'plam uchun:
> 
$$
> |A \cup B \cup C| = |A| + |B| + |C| - |A \cap B| - |A \cap C| - |B \cap C| + |A \cap B \cap C|
> 
$$

---

## 3. Matematik mantiq asoslari va Rostlik jadvallari

> **Mulohaza** — mazmuniga ko'ra **chin** (1 yoki True) yoki **yolg'on** (0 yoki False) bo'lgan darak gapdir.

### Asosiy mantiqiy amallar:
1. **Inkor ($\neg A$ yoki $\bar{A}$):** "Emas". Chin bo'lsa yolg'on, yolg'on bo'lsa chin qiladi.
2. **Konyunksiya ($A \land B$ yoki $A \cdot B$):** "Va" (mantiqiy ko'paytirish). Faqat ikkalasi ham chin bo'lgandagina chin bo'ladi.
3. **Dizyunksiya ($A \lor B$ yoki $A + B$):** "Yoki" (mantiqiy qo'shish). Kamida bittasi chin bo'lsa chin bo'ladi.
4. **Implikatsiya ($A \to B$):** "Agar $A$ bo'lsa, u holda $B$". Faqat chindan yolg'on kelib chiqqanda ($1 \to 0$) yolg'on bo'ladi:
   
$$
   A \to B \equiv \neg A \lor B
   
$$
5. **Ekvivalensiya ($A \leftrightarrow B$):** "Faqat va faqat shunda". Ikkala mulohaza bir xil qiymat qabul qilganda chin bo'ladi.

### Rostlik jadvali (Truth Table):
| $A$ | $B$ | $\neg A$ | $A \land B$ | $A \lor B$ | $A \to B$ | $A \leftrightarrow B$ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| 1 | 1 | 0 | 1 | 1 | 1 | 1 |
| 1 | 0 | 0 | 0 | 1 | 0 | 0 |
| 0 | 1 | 1 | 0 | 1 | 1 | 0 |
| 0 | 0 | 1 | 0 | 0 | 1 | 1 |

---

## Bitta masalani 2 xil usulda yechish va solishtirish

> **Masala:** Kursda 100 nafar talaba bor. Ulardan 65 nafari ingliz tilini ($E$), 45 nafari nemis tilini ($G$), 25 nafari esa har ikkala tilni biladi.
> 1) Kamida bitta tilni biladigan talabalar sonini toping;
> 2) Hech qaysi tilni bilmaydigan talabalar sonini toping;
> 3) Faqat ingliz tilini biladiganlar sonini aniqlang.

### 1-usul: Kiritish-chiqarish formulasi orqali
1. Kamida bitta tilni biladiganlar — birlashma:
   $$|E \cup G| = |E| + |G| - |E \cap G| = 65 + 45 - 25 = 85$$
2. Hech qaysi tilni bilmaydiganlar — to'ldiruvchi:
   $$|U \setminus (E \cup G)| = 100 - 85 = \mathbf{15}$$
3. Faqat ingliz tilini biladiganlar — ayirma:
   $$|E \setminus G| = |E| - |E \cap G| = 65 - 25 = \mathbf{40}$$

### 2-usul: Eyler-Venn diagrammasi orqali (Geometrik-vizual usul)
Tekislikda ikkita kesishuvchi doira chizamiz:
1. Markaziy kesishma sohasiga darhol umumiy qismni yozamiz: **25**;
2. Faqat ingliz tili qolgan qismi: $65 - 25 = \mathbf{40}$;
3. Faqat nemis tili qolgan qismi: $45 - 25 = \mathbf{20}$;
4. Ikkala doiraning jami qamrovi: $40 + 25 + 20 = \mathbf{85}$;
5. Tashqarida qolganlar (ikkalasini ham bilmaydiganlar): $100 - 85 = \mathbf{15}$.

Ikkala usul ham mutlaqo bir xil natija berdi! Eyler-Venn diagrammasi 3 ta to'plam qatnashgan murakkab so'rovlarda xatolikning oldini oladi.

---

> [!WARNING] Imtihondagi tuzoqlar va ko'p uchraydigan xatoliklar
> 1. **Implikatsiyadagi yolg'on asos tuzog'i:**
>    Agar dastlabki shart yolg'on bo'lsa ($A = 0$), natija qanday bo'lishidan qat'i nazar implikatsiya doimo **chin** bo'ladi ($0 \to 1 \equiv 1$ va $0 \to 0 \equiv 1$). Masalan: "Agar $2 \times 2 = 5$ bo'lsa, unda oy pishloqdan qilingan" — bu mulohaza matematik mantiqda qat'iy CHIN hisoblanadi!
> 2. **Konyunksiya va dizyunksiya inkorida qavslar:**
>    $\neg(A \land B) \neq \neg A \land \neg B$! De Morgan qonuniga ko'ra o'rtadagi belgi teskarisiga aylanadi: $\neg(A \land B) \equiv \neg A \lor \neg B$.
> 3. **To'plam elementlari va qism-to'plam belgisi:**
>    $a \in \{a, b\}$ (tegishli), lekin $\{a\} \subset \{a, b\}$ (qism-to'plam). Bularni chalkashtirish nazariy testlarda keng tarqalgan tuzoqdir.

---

## Mustaqil yechish uchun amaliy mashqlar

1. $A = \{1, 2, 3, 4, 5\}$ va $B = \{3, 4, 5, 6, 7\}$ to'plamlar berilgan. $A \cap B$, $A \setminus B$ va $A \triangle B$ larni toping.
2. Mantiqiy ifodaning rostlik jadvalini tuzing va uning tavtologiya (doim chin) ekanligini isbotlang:
   $$(A \to B) \leftrightarrow (\neg A \lor B)$$
3. 50 kishilik guruhda 30 kishi dasturlashni, 25 kishi grafik dizaynni, 10 kishi ikkalasini ham biladi. Guruhda ikkala kasbni ham bilmaydiganlar necha kishi?

<details style="margin-top: 1rem; padding: 1rem; background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); cursor: pointer;">
  <summary style="font-weight: 700; color: var(--primary);">👉 Yechimni tekshirish</summary>
  <div style="margin-top: 0.75rem; padding-top: 0.75rem; border-top: 1px solid var(--border-color); line-height: 1.7;">
    <p><strong>1-masala:</strong></p>
    <ul>
      <li>$A \cap B = \{3, 4, 5\}$ (umumiy elementlar);</li>
      <li>$A \setminus B = \{1, 2\}$ (faqat A dagi elementlar);</li>
      <li>$A \triangle B = \{1, 2, 6, 7\}$ (simmetrik ayirma).</li>
    </ul>

    <hr style="margin: 0.75rem 0; border: none; border-top: 1px dashed var(--border-color);" />

    <p><strong>2-masala:</strong></p>
    <p>Har qanday $A, B \in \{0, 1\}$ uchun:</p>
    <ul>
      <li>$A=1, B=1: 1 \to 1 = 1, \quad 0 \lor 1 = 1 \implies 1 \leftrightarrow 1 = 1$</li>
      <li>$A=1, B=0: 1 \to 0 = 0, \quad 0 \lor 0 = 0 \implies 0 \leftrightarrow 0 = 1$</li>
      <li>$A=0, B=1: 0 \to 1 = 1, \quad 1 \lor 1 = 1 \implies 1 \leftrightarrow 1 = 1$</li>
      <li>$A=0, B=0: 0 \to 0 = 1, \quad 1 \lor 0 = 1 \implies 1 \leftrightarrow 1 = 1$</li>
    </ul>
    <p>Barcha 4 ta holatda ham natija 1 chiqdi. Demak, ifoda <strong>tavtologiya</strong>!</p>

    <hr style="margin: 0.75rem 0; border: none; border-top: 1px dashed var(--border-color);" />

    <p><strong>3-masala:</strong></p>
    <p>Kamida bittasini biladiganlar: $|P \cup D| = 30 + 25 - 10 = 45$.</p>
    <p>Hech birini bilmaydiganlar: $50 - 45 = \mathbf{5}$ kishi.</p>
  </div>
</details>
