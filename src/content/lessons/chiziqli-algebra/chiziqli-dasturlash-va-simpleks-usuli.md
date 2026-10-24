---
title: "Chiziqli dasturlash masalasi va simpleks usulining algoritmi"
module: "chiziqli-algebra"
order: 20
description: "Maqsad funksiyasi va cheklovlar, dastlabki simpleks jadvalini tuzish, hal qiluvchi elementni tanlash va optimal rejaga erishish."
---

## Chiziqli dasturlash (CHDM) nima?

Iqtisodiyotda resurslar (xomashyo, ish vaqti, energiya) cheklangan bo'ladi.
Kompaniyaning maqsadi: **mavjud resurslar chegarasida maksimal foyda olish yoki xarajatlarni minimallashtirish**!

Matematik model:
- **Maqsad funksiyasi:** $F(X) = c_1 x_1 + c_2 x_2 + \dots + c_n x_n \to \max$ (yoki $\min$);
- **Cheklovlar sistemasi:** $A X \le B, \; X \ge 0$.

---

## 1. Jorj Dantsigning Simpleks usuli

1947-yilda Jorj Dantsig simpleks usulini ishlab chiqdi.
Usulning geometrik ma'nosi: yechimlar ko'pyoqining (politopining) bir uchidan ikkinchi uchiga qirralar bo'ylab qadamma-qadam harakatlanib, eng optimal cho'qqini topishdir!

### Simpleks jadvalida ishlash bosqichlari:
1. Tengsizliklar qo'shimcha o'zgaruvchilar kiritilib kanonik tenglamalar holiga keltiriladi;
2. Dastlabki simpleks jadvali to'ldiriladi;
3. Baholar satrida ($Delta_j$) manfiy sonlar tekshiriladi;
4. Eng kichik manfiy baho bo'lgan ustun — **hal qiluvchi ustun** etib tanlanadi;
5. Ozod hadlarning shu ustunga nisbati bo'yicha eng kichik musbat qator — **hal qiluvchi satr** tanlanadi;
6. Kesishmadagi element bo'yicha Jordan-Gauss almashtirishi bajariladi;
7. Barcha $Delta_j \ge 0$ bo'lganda **optimal rejaga** erishiladi!