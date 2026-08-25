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

## 🛠 تکنولوژی‌های استفاده‌شده

### Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS

### Backend

* Node.js
* NestJS
* REST API

### Database

* PostgreSQL
* Prisma ORM

### ابزارها

* Git
* GitHub
* Docker

---

## 📁 ساختار پروژه

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

```bash
git clone https://github.com/EbiStar-Dev/fullstack-nextjs-ecommerce-v1.0.0.git
```

وارد پوشه پروژه شوید:

```bash
cd fullstack-nextjs-ecommerce-v1.0.0
```

وابستگی‌ها را نصب کنید:

```bash
npm install
```

فایل متغیرهای محیطی را ایجاد کنید:

```bash
cp .env.example .env
```

سرور توسعه را اجرا کنید:

```bash
npm run dev
```

سپس در مرورگر باز کنید:

```text
http://localhost:3000
```

---

## 📌 وضعیت پروژه

این پروژه در حال توسعه فعال است.

قابلیت‌ها، معماری و جزئیات پیاده‌سازی ممکن است در طول توسعه پروژه تغییر کنند.

---

## 👨‍💻 توسعه‌دهنده

**Ebrahim Darabi**

* GitHub: https://github.com/EbiStar-Dev
* LinkedIn: https://www.linkedin.com/in/ebrahim-darabi-dev/
* Email: [ebistar.web@gmail.com](mailto:ebistar.web@gmail.com)
