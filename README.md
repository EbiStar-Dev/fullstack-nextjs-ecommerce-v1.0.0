# Full-Stack E-Commerce

🇬🇧 English | [🇮🇷 فارسی](./README.fa.md)

---

A full-stack e-commerce web application built with **Next.js, TypeScript, Tailwind CSS, PostgreSQL, and Prisma**.

This project is being developed as a real-world application to practice and demonstrate full-stack development, from user interfaces and business logic to database management and API integration.

> 🚧 **Status:** In Development

---

## ✨ Features

### Customer

* [ ] User registration
* [ ] User login
* [ ] User account
* [ ] Product listing
* [ ] Product filtering
* [ ] Product details
* [ ] Shopping cart
* [ ] Checkout
* [ ] Order management
* [ ] User profile management

### Dashboard

* [ ] Dashboard layout
* [ ] Customer management
* [ ] Product management
* [ ] Order management
* [ ] Coupon management
* [ ] Newsletter management
* [ ] Product creation
* [ ] Product editing
* [ ] Product deletion
* [ ] Role-based access control

---

## 🛠 Tech Stack

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

### Tools

* Git
* GitHub
* Docker

---

## 📁 Project Structure

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

The project separates routing, features, server-side logic, and shared components to keep the codebase organized and easier to scale.

---

## 🎯 Project Goals

The main goal of this project is to build a complete e-commerce application while improving practical full-stack development skills.

The project focuses on:

* Building reusable React components
* Working with Next.js App Router
* Designing frontend application structure
* Building REST APIs
* Working with PostgreSQL
* Using Prisma for database access
* Implementing authentication
* Managing application state
* Building admin dashboards
* Connecting frontend and backend systems
* Writing maintainable and scalable code

---

## 🚧 Development Roadmap

* [x] Initial project structure
* [ ] Authentication pages
* [ ] Product listing
* [ ] Product details
* [ ] Dashboard structure
* [ ] Customer management UI
* [ ] Product management UI
* [ ] Order management UI
* [ ] Marketing management UI
* [ ] Backend API
* [ ] Database integration
* [ ] Authentication implementation
* [ ] Authorization
* [ ] Product CRUD
* [ ] Customer CRUD
* [ ] Order workflow
* [ ] Shopping cart
* [ ] Checkout
* [ ] Payment integration
* [ ] Validation
* [ ] Error handling
* [ ] Testing
* [ ] Docker setup
* [ ] Deployment

---

## 📸 Screenshots

Screenshots will be added as the project progresses.

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/EbiStar-Dev/fullstack-nextjs-ecommerce-v1.0.0.git
```

Navigate to the project:

```bash
cd fullstack-nextjs-ecommerce-v1.0.0
```

Install dependencies:

```bash
npm install
```

Create your environment file:

```bash
cp .env.example .env
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## 📌 Project Status

This project is actively being developed.

Features, architecture, and implementation details may change as development continues.

---

## 👨‍💻 Author

**Ebrahim Darabi**

* GitHub: https://github.com/EbiStar-Dev
* LinkedIn: https://www.linkedin.com/in/ebrahim-darabi-dev/
* Email: [ebistar.web@gmail.com](mailto:ebistar.web@gmail.com)
