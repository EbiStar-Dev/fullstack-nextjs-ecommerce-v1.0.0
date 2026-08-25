<div dir="rtl">

# فروشگاه اینترنتی فول‌استک
[🇬🇧 English](./README.md) | 🇮🇷 فارسی

یک اپلیکیشن فروشگاه اینترنتی فول‌استک که با **Next.js، TypeScript، Tailwind CSS، PostgreSQL و Prisma** ساخته می‌شود.

این پروژه با هدف ساخت یک اپلیکیشن واقعی و همچنین تمرین و نمایش مهارت‌های توسعه فول‌استک در حال توسعه است؛ از طراحی رابط کاربری و پیاده‌سازی منطق کسب‌وکار گرفته تا مدیریت پایگاه داده و اتصال API.

> 🚧 **وضعیت:** در حال توسعه

---

## ✨ قابلیت‌ها

### مشتری

* [ ] ثبت‌نام کاربر
* [ ] ورود کاربر
* [ ] حساب کاربری
* [ ] نمایش محصولات
* [ ] فیلتر محصولات
* [ ] جزئیات محصول
* [ ] سبد خرید
* [ ] تسویه‌حساب
* [ ] مدیریت سفارش‌ها
* [ ] مدیریت پروفایل کاربر

### داشبورد

* [ ] ساختار داشبورد
* [ ] مدیریت مشتریان
* [ ] مدیریت محصولات
* [ ] مدیریت سفارش‌ها
* [ ] مدیریت کدهای تخفیف
* [ ] مدیریت خبرنامه
* [ ] ایجاد محصول
* [ ] ویرایش محصول
* [ ] حذف محصول
* [ ] کنترل دسترسی مبتنی بر نقش

---

## 🛠تکنولوژی‌های استفاده‌شده


### Frontend

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge\&logo=next.js\&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge\&logo=react\&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge\&logo=typescript\&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge\&logo=tailwindcss\&logoColor=white)

### Backend

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge\&logo=node.js\&logoColor=white)
![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge\&logo=nestjs\&logoColor=white)
![REST API](https://img.shields.io/badge/REST_API-005571?style=for-the-badge)

### Database

![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge\&logo=postgresql\&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge\&logo=prisma\&logoColor=white)

### Tools

![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge\&logo=git\&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge\&logo=github\&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge\&logo=docker\&logoColor=white)


</div>

```text
.
├── app
│   ├── (auth)
│   │   ├── account
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   └── login
│   │       ├── layout.tsx
│   │       ├── login
│   │       │   └── page.tsx
│   │       └── register
│   │           └── page.tsx
│   ├── (client)
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── (shop)
│   │       ├── product
│   │       │   └── [slug]
│   │       │       └── page.tsx
│   │       └── products
│   │           ├── layout.tsx
│   │           └── page.tsx
│   ├── dashboard
│   │   ├── customers
│   │   │   ├── [id]
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   ├── marketing
│   │   │   ├── coupons
│   │   │   │   └── page.tsx
│   │   │   └── newsletters
│   │   │       └── page.tsx
│   │   ├── orders
│   │   │   ├── [id]
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── page.tsx
│   │   └── products
│   │       ├── add
│   │       │   └── page.tsx
│   │       └── page.tsx
│   ├── favicon.ico
│   ├── globals.css
│   └── layout.tsx
├── assets
│   └── css
│       └── style.css
├── eslint.config.mjs
├── features
│   ├── auth
│   │   ├── component
│   │   │   ├── LoginEmail.tsx
│   │   │   ├── LoginMobile.tsx
│   │   │   └── RegisterEmail.tsx
│   │   ├── hook
│   │   │   ├── useLoginEmail.ts
│   │   │   ├── useLoginMobil.ts
│   │   │   └── useRegisterEmail.ts
│   │   └── service
│   └── client
│       └── shop
│           └── products
│               ├── components
│               ├── hook
│               └── service
├── next.config.ts
├── next-env.d.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── public
├── README.fa.md
├── README.md
├── server
│   └── db.json
├── shared
│   ├── auth
│   │   ├── components
│   │   │   └── AccountContent.tsx
│   │   ├── layout
│   │   │   └── Sidebar.tsx
│   │   └── ui
│   ├── client
│   │   ├── components
│   │   │   └── shop
│   │   │       └── FilterSidebar.tsx
│   │   ├── layout
│   │   │   ├── ClientLayout.tsx
│   │   │   └── Header.tsx
│   │   └── ui
│   └── dashboard
│       ├── layout
│       │   ├── DashboardLayout.tsx
│       │   ├── Header.tsx
│       │   └── Sidebar.tsx
│       └── ui
└── tsconfig.json
```

<div dir="rtl">

ساختار پروژه به‌گونه‌ای طراحی شده است که **مسیرها، قابلیت‌ها، منطق سمت سرور و کامپوننت‌های مشترک** از یکدیگر جدا باشند تا کد پروژه منظم‌تر و توسعه و گسترش آن در آینده ساده‌تر باشد.

---

## 🎯 اهداف پروژه

هدف اصلی این پروژه، ساخت یک اپلیکیشن کامل فروشگاه اینترنتی و هم‌زمان تقویت مهارت‌های عملی در توسعه فول‌استک است.

تمرکز پروژه روی موارد زیر است:

* ساخت کامپوننت‌های قابل استفاده مجدد در React
* کار با App Router در Next.js
* طراحی ساختار مناسب برای Frontend
* ساخت REST API
* کار با PostgreSQL
* استفاده از Prisma برای دسترسی به پایگاه داده
* پیاده‌سازی احراز هویت
* مدیریت وضعیت برنامه
* ساخت داشبورد مدیریت
* اتصال Frontend و Backend
* نوشتن کد قابل نگهداری و توسعه‌پذیر

---

## 🚧 مسیر توسعه پروژه

* [x] ساختار اولیه پروژه
* [ ] صفحات احراز هویت
* [ ] نمایش محصولات
* [ ] جزئیات محصولات
* [ ] ساختار داشبورد
* [ ] رابط کاربری مدیریت مشتریان
* [ ] رابط کاربری مدیریت محصولات
* [ ] رابط کاربری مدیریت سفارش‌ها
* [ ] رابط کاربری مدیریت بخش بازاریابی
* [ ] Backend API
* [ ] اتصال پایگاه داده
* [ ] پیاده‌سازی احراز هویت
* [ ] پیاده‌سازی سطح دسترسی
* [ ] CRUD محصولات
* [ ] CRUD مشتریان
* [ ] گردش کار سفارش‌ها
* [ ] سبد خرید
* [ ] تسویه‌حساب
* [ ] اتصال درگاه پرداخت
* [ ] اعتبارسنجی داده‌ها
* [ ] مدیریت خطاها
* [ ] تست
* [ ] راه‌اندازی با Docker
* [ ] Deployment

---

## 📸 تصاویر پروژه

تصاویر پروژه هم‌زمان با پیشرفت توسعه اضافه خواهند شد.

---

## ⚙️ نصب و اجرا

مخزن پروژه را Clone کنید:

</div>

```bash
git clone https://github.com/EbiStar-Dev/fullstack-nextjs-ecommerce-v1.0.0.git
```

<div dir="rtl">

وارد پوشه پروژه شوید:

</div>

```bash
cd fullstack-nextjs-ecommerce-v1.0.0
```

<div dir="rtl">

وابستگی‌ها را نصب کنید:

</div>

```bash
npm install
```

<div dir="rtl">

فایل متغیرهای محیطی را ایجاد کنید:

</div>

```bash
cp .env.example .env
```

<div dir="rtl">

سرور توسعه را اجرا کنید:

</div>

```bash
npm run dev
```

<div dir="rtl">

سپس در مرورگر باز کنید:

</div>

```text
http://localhost:3000
```

<div dir="rtl">

---

## 📌 وضعیت پروژه

این پروژه در حال توسعه فعال است.

قابلیت‌ها، معماری و جزئیات پیاده‌سازی ممکن است در طول توسعه پروژه تغییر کنند.

---

## 👨‍💻 توسعه‌دهنده

**EbStar-Dev**

* GitHub: https://github.com/EbiStar-Dev
* LinkedIn: https://www.linkedin.com/in/ebrahim-darabi-dev/
* Email: [ebistar.web@gmail.com](mailto:ebistar.web@gmail.com)

</div>
