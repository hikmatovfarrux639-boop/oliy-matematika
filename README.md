# Oliy Matematika — O'zbek Tilidagi Ta'lim Platformasi

Astro 5 + TypeScript + MDX + KaTeX + Pagefind asosida yaratilgan zamonaviy, statik va o'ta tezkor oliy matematika o'quv platformasi.

---

## 🚀 Imkoniyatlar (Version 1)

1. **14 ta to'liq universitet moduli:**
   - **Faol modullar:** 5 (Limitlar), 6 (Funksiyalar va grafiklar), 7 (Hosila).
   - **Rejalashtirilgan modullar:** 1..4 va 8..14 "Tez orada" holatida.
2. **MDX darslar:** KaTeX matematik formulalari, mundarija, "Oldingi / Keyingi dars" tugmalari, progress hisoblagich va brauzer xotirasiga saqlanuvchi "Darsni o'zlashtirdim" tizimi.
3. **Interaktiv grafik chizgich (`/grafik`):** Funksiyalarni chizish, zoom, pan, xato xabarlari hamda qo'lda yozmasdan kiritish uchun qulay **matematik kalkulyator klaviaturasi**.
4. **MDX uchun `<Graph />` komponenti:** Darslar ichida `<Graph fn="x^2" />` orqali jonli grafiklar va teginuvchi urinma to'g'ri chiziqlarni chiqarish.
5. **Hosila kalkulyatori (`/hosila`):** `mathjs` orqali analitik hosilani chiqarish va $f(x)$ bilan $f'(x)$ grafiklarini bir vaqtda taqqoslash.
6. **Formulalar ma'lumotnomasi (`/formulalar`):** Limitlar, hosilalar va integrallar jadvallari, qidiruv va 1 marta bosishda LaTeX nusxalash.
7. **Statik Qidiruv (`Pagefind`):** `Ctrl + K` orqali ochiluvchi tezkor qidiruv modali.
8. **Qorong'i / Yorug' rejim:** Foydalanuvchi tanlovi `localStorage`da eslab qolinadi.

---

## 💻 Mahalliy ishga tushirish (Local Run)

```bash
# Loyiha papkasiga kiring:
cd C:\Users\asus\.gemini\antigravity\scratch\oliy-matematika

# Loyihani ishga tushiring:
npm run dev
```

Brauzerda `http://localhost:4321` manzilini oching.

---

## 🛠️ Statik yig'ish (Build)

```bash
npm run build
```

Bu buyruq Astrodagi barcha sahifalarni statik HTML qilib `dist/` papkasiga saqlaydi va **Pagefind** orqali butun sayt qidiruv indeksini yaratadi.

---

## 🌐 Bepul Deploy Qilish (Cloudflare Pages yoki GitHub Pages)

### 1-usul: Cloudflare Pages (Tavsiya etiladi, eng tezkori)
1. GitHub hisobingizga ushbu loyihani push qiling.
2. [Cloudflare Dashboard](https://dash.cloudflare.com) ga kiring -> **Workers & Pages** -> **Create application** -> **Pages** -> **Connect to Git**.
3. Repozitoriyni tanlang:
   - **Framework preset:** `Astro`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Environment variables:** `NODE_VERSION` = `22`
4. **Save and Deploy** tugmasini bosing — 1 daqiqada butun dunyo bo'ylab bepul ishga tushadi!

### 2-usul: GitHub Pages
Loyihada `.github/workflows/deploy.yml` fayli tayyorlab qo'yilgan:
1. GitHub repozitoriy sozlamalariga kiring: **Settings** -> **Pages**.
2. **Build and deployment** bo'limida **Source** ni **GitHub Actions** ga o'tkazing.
3. Loyihani `main` tarmog'iga push qilishingiz bilan sayt avtomatik deploy bo'ladi!

---

## 📝 Yangi darslarni qo'shish tartibi (Partiyalar bilan)

Yangi dars qo'shish uchun `src/content/lessons/<modul-slug>/` papkasiga yangi `.mdx` fayl yaratish kifoya:

```mdx
---
title: "Mavzu sarlavhasi"
module: "limitlar" # modul slug'i
order: 2 # dars tartib raqami
description: "Dars haqida qisqacha tavsif"
---
import Graph from '../../../components/Graph.astro';

## Mavzu boshlanishi

Matn va formulalar: $\lim_{x \to 0} \frac{\sin x}{x} = 1$.

<Graph fn="sin(x)/x" title="1-ajoyib limit grafigi" />
```
Sayt yangi darsni avtomatik taniydi, menyuga qo'shadi va qidiruv indeksiga kiritadi.
