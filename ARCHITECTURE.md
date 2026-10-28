# 📐 Oliy Matematika Platformasi — Texnik Arxitektura va Handoff Hujjati

> **ESLATMA (AI Agentlar uchun):** Ushbu hujjat loyihaning to'liq arxitekturasini, fayllar joylashuvini va hozirgi holatini ifodalaydi. Yangi sessiyani boshlaganingizda butun loyihani qayta skanerlash o'rniga faqat shu faylni o'qish kifoya qiladi.

---

## 1. Loyiha Haqida Qisqacha (Tech Stack)
* **Asosiy freymvork:** [Astro 4.x](https://astro.build) (Tezkor, SSG va SSR gibrid arxitekturasi)
* **UI & Stillar:** Tailwind CSS + Vanilla JS (yuqori unumdorlik, ortiqcha og'ir JS freymvorklarsiz)
* **Matematik vizualizatsiya:**
  * **KaTeX:** Matematik formulalarni LaTeX formatida render qilish
  * **Three.js:** 3D fazoviy vektorlar va analitik geometriya laboratoriyasi
  * **FunctionPlot / Chart.js:** 2D funksiya grafiklari, hosila va urinmalar
* **Sun'iy intellekt (AI):** Google Gemini API (`gemini-2.0-flash`) — matn va rasm orqali masalalarni bosqichma-bosqich yechish
* **Deploy & Serverless:** Vercel (`vercel.json`, `/api/solve.js`)
* **Ma'lumotlar saqlash:** Brauzer `localStorage` (o'rganish progressi, qaydlar, test natijalari)

---

## 2. Loyiha Tuzilishi (File Tree & Directory Map)

```plaintext
oliy-matematika/
├── .geminiignore          <-- AI token tejash qoidalari (og'ir fayllar e'tibordan chetda)
├── ARCHITECTURE.md        <-- Loyihaning yagona texnik pasporti (State Handoff)
├── vercel.json            <-- Vercel routing va serverless konfiguratsiyasi
├── astro.config.mjs       <-- Astro sozlamalari
├── package.json           <-- Bog'liqliklar (Astro, Tailwind, Three.js, KaTeX, Puppeteer)
│
├── api/
│   └── solve.js           <-- Vercel Serverless Function (Gemini AI API bilan bog'lanish)
│
├── src/
│   ├── components/        <-- Qayta ishlatiluvchi Astro komponentlari
│   │   ├── Header.astro          <-- Sayt tepa navigatsiya paneli va qidiruv tugmasi
│   │   ├── Sidebar.astro         <-- Chap menyu (modullar va bo'limlar navigatsiyasi)
│   │   ├── MobileBottomNav.astro <-- Mobil qurilmalar uchun pastki qulay navigatsiya
│   │   ├── MobileDrawer.astro    <-- Mobil ekran uchun ochiluvchi menyu
│   │   ├── Quiz.astro            <-- Interaktiv test va HEMIS simulyator komponenti
│   │   ├── SearchModal.astro     <-- Butun sayt bo'yicha tezkor kalit so'z qidiruvi
│   │   ├── Graph.astro           <-- 2D grafik chizish komponenti
│   │   ├── BackupModal.astro     <-- Foydalanuvchi ma'lumotlarini eksport/import qilish
│   │   └── ScrollToTop.astro     <-- Sahifa tepasiga qaytish tugmasi
│   │
│   ├── pages/             <-- Barcha asosiy yo'nalishlar (Routes)
│   │   ├── index.astro           <-- Bosh sahifa (Platforma taqdimoti va kirish)
│   │   ├── ai-yechuvchi.astro    <-- AI Masala Yechuvchi (Kamera + Matn + Rasm)
│   │   ├── matritsa.astro        <-- Matritsalar kalkulyatori (Determinant, Gauss, Kramer)
│   │   ├── vektor.astro          <-- 3D Vektorlar Fazoviy Laboratoriyasi (Three.js)
│   │   ├── grafik.astro          <-- Funksiya grafiklarini tahlil qilish
│   │   ├── hosila.astro          <-- Hosila va differensial hisoblash
│   │   ├── laboratoriya.astro    <-- Barcha interaktiv laboratoriyalar markazi
│   │   ├── testlar.astro         <-- HEMIS oraliq/yakuniy testlar tizimi
│   │   ├── formulalar.astro      <-- Barcha mavzular bo'yicha formulalar kutubxonasi
│   │   ├── shpargalkalar.astro   <-- Tezkor imtihon shpargalkalari
│   │   ├── strategiya.astro      <-- Oliy matematikani o'rganish xaritasi va strategiyasi
│   │   ├── lugat.astro           <-- Matematik atamalar lug'ati
│   │   ├── kutubxona.astro       <-- Adabiyotlar va tavsiya etilgan darsliklar
│   │   ├── paradokslar.astro     <-- Mashhur matematik paradokslar
│   │   ├── dars/[slug].astro     <-- Dinamik dars sahifasi (Markdown darslarni o'qiydi)
│   │   └── modullar/[id].astro   <-- Modul sahifasi (14 ta modul ro'yxati)
│   │
│   ├── content/
│   │   └── lessons/       <-- 14 ta modul bo'yicha 151+ ta to'liq Markdown darslar
│   │       ├── chiziqli-algebra/
│   │       ├── vektorlar-analitik-geometriya/
│   │       ├── limitlar/
│   │       ├── hosila/
│   │       ├── integrallar/
│   │       ├── karrali-integrallar/
│   │       ├── differensial-tenglamalar/
│   │       ├── qatorlar/
│   │       ├── kop-ozgaruvchili-funksiyalar/
│   │       ├── ehtimollar-nazariyasi/
│   │       ├── matematik-statistika/
│   │       ├── kompleks-sonlar/
│   │       ├── diskret-matematika/
│   │       └── maktab-asoslari/
│   │
│   └── styles/
│       └── global.css     <-- Asosiy stillar, KaTeX shriftlari va dark mode
│
└── hujjatlar/             <-- Rasmiy hujjatlar va qo'llanmalar
    ├── DGU_Oliy_Matematika_Rasmiy_Hujjat.docx   <-- Patent / DGU uchun rasmiy hujjat
    └── Oliy_Matematika_Qollanma_Oddiy_Tilda.pdf <-- Oddiy tildagi vizual PDF qo'llanma
```

---

## 3. Yakunlangan va To'liq Ishlayotgan Qismlar

1. **AI Masala Yechuvchi (`/ai-yechuvchi`):**
   - Foydalanuvchi savolni klaviaturadan kiritishi, rasm yuklashi yoki kameradan rasmga olib yuborishi mumkin.
   - `/api/solve.js` orqali Gemini AI ga so'rov yuboriladi va bosqichma-bosqich o'zbek tilida yechim qaytariladi.
2. **Matritsa Kalkulyatori (`/matritsa`):**
   - 2x2, 3x3, 4x4 o'lchamdagi matritsalarni hisoblash.
   - Determinant (Sarryus va algebraik to'ldiruvchilar), teskari matritsa, matritsalarni ko'paytirish/qo'shish, Kramer va Gauss usullarida tenglamalar sistemasini yechish.
3. **3D Vektor Laboratoriyasi (`/vektor`):**
   - Three.js orqali interaktiv 3D koordinatalar sistemasida vektorlarni chizish.
   - Skalyar, vektor va aralash ko'paytmalarni real vaqt rejimida hisoblash.
4. **Hosila va Grafik Plotter (`/hosila`, `/grafik`):**
   - Funksiyaning 1- va 2-tartibli hosilasi, ekstremum nuqtalari, urinma tenglamasi va interaktiv grafigi.
5. **Darsliklar Bazasi (`/dars/[slug]`):**
   - 14 ta modul bo'yicha 151 ta to'liq darslik. Har bir dars nazariya, formulalar, misollar va mavzulashtirilgan mini-testlarni o'z ichiga oladi.
6. **HEMIS Test Simulyatori (`/testlar`):**
   - Oliy o'quv yurtlarining oraliq va yakuniy nazoratlari uchun haqiqiy test bazasi asosidagi imtihon simulyatori.
7. **Mobil Moslashuvchanlik (Responsive & Bottom Navigation):**
   - Smartfonlar va planshetlar uchun to'liq moslashtirilgan pastki navigatsiya paneli va ochiluvchi menyu.

---

## 4. Keyingi Rejalar va Rivojlantirish Yo'nalishlari (Roadmap)
* [ ] **PWA (Progressive Web App):** Saytni telefonga ilova kabi o'rnatish va oflayn rejimda darslarni o'qish imkoniyati.
* [ ] **Foydalanuvchi hisobi (Auth):** Talabaning natijalari va yozgan qaydlarini bulutda saqlash.
* [ ] **Ko'proq HEMIS testlari:** 500+ yangi variantlar va tahliliy hisobotlar qo'shish.

---

## 5. Yangi Sessiyada Token Tejash Qoidasi (Cheat Sheet)

Agar biror qismni o'zgartirmoqchi bo'lsangiz, **eski chatni yopib, yangi toza chat oching** va quyidagi formatda murojaat qiling:

* **Matritsani o'zgartirish uchun:**
  > `@ARCHITECTURE.md va @src/pages/matritsa.astro: Shu sahifadagi teskari matritsa algoritmini optimallashtirib ber.`
* **AI Yechuvchini o'zgartirish uchun:**
  > `@ARCHITECTURE.md, @src/pages/ai-yechuvchi.astro va @api/solve.js: Rasm tahlil qilish tezligini oshirish bo'yicha o'zgartirish kirit.`
* **Dizayn yoki Menyu bo'yicha:**
  > `@ARCHITECTURE.md va @src/components/Header.astro: Menyudagi yangi tugmani qo'shib ber.`

Shu tarzda agent butun loyihani qayta skanerlamaydi va token sarfi 10 barobargacha tejaladi!
