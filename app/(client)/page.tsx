import "@/assets/css/fashion.css";

const styles = [
  {
    title: "شلوار",
    image: "/image/product/category/pants-1.jpg",
  },
  {
    title: "تی شرت",
    image: "/image/product/category/t-shert.jpeg",
  },
  {
    title: "کفش",
    image: "/image/product/category/shose.jpg",
  },
  {
    title: "کلاه",
    image: "/image/product/category/hat.jpeg",
  },
];

const essentials = [
  {
    title: "تیشرت مردونه سفید ساده ",
    price: "1,399,000 تومان",
    image: "/image/product/product-ts-p1-001.png",
  },
  {
    title:"شلوار نیم بگ مردونه",
    price: "۲,۹۹۰,۰۰۰ تومان",
    image: "/image/product/product-p-p1-001.jpg",
  },
  {
    title: "شلوار مردونه مشکی دو نایک",
    price: "۲,۳۹۰,۰۰۰ تومان",
    image:"/image/product/product-p-p2-001.png",
  },
  {
    title: "کفش روزمره مردانه",
    price: "۹۹۰,۰۰۰ تومان",
    image:"/image/product/product-s-p1-001.jpg",
  },
];

const trending = [
  {
    title: "هودی لوگو",
    price: "۲,۴۹۰,۰۰۰ تومان",
    image: "/images/hoodie.jpg",
    badge: "جدید",
  },
  {
    title: "بافت مینیمال",
    price: "۲,۷۹۰,۰۰۰ تومان",
    image: "/images/knit.jpg",
  },
  {
    title: "کت Utility",
    price: "۳,۹۹۰,۰۰۰ تومان",
    image: "/images/jacket.jpg",
  },
  {
    title: "شلوار پلیسه",
    price: "۲,۶۹۰,۰۰۰ تومان",
    image: "/images/trousers.jpg",
  },
  {
    title: "کتانی Retro",
    price: "۴,۴۹۰,۰۰۰ تومان",
    image: "/images/sneakers.jpg",
  },
];

export default function Home() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#f8f7f4] text-[#171717]">

      {/* ================= HEADER ================= */}



      {/* ================= HERO ================= */}
      <section className="relative min-h-[580px] overflow-hidden bg-[#292724] text-white">

        <img
          src="/image/17878448091176.png"
          alt="کالکشن پاییز و زمستان"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/35" />

        <div className="relative mx-auto flex min-h-[580px] max-w-[1440px] items-center px-6 lg:px-10">

          <div className="max-w-[520px] pt-20">

            <p className="mb-5 text-xs tracking-[0.25em]">
              کالکشن جدید
            </p>

            <h1 className="fashion-hero-title mb-6">
              پاییز / زمستان ۱۴۰۵
            </h1>

            <p className="mb-9 max-w-[390px] text-sm leading-7 text-white/80">
              لباس‌هایی با طراحی ماندگار،
              فرم‌های مدرن و ساخته‌شده برای
              حرکت روزمره.
            </p>

            <div className="flex gap-3">

              <a
                href="#"
                className="fashion-btn bg-white text-black"
              >
                خرید مردانه
              </a>

              <a
                href="#"
                className="fashion-btn border border-white/50 text-white"
              >
                خرید زنانه
              </a>

            </div>

          </div>

        </div>

        {/* Slider numbers */}
        <div className="absolute bottom-10 left-10 hidden items-center gap-5 text-xs md:flex">
          <span>۰۱</span>
          <span className="h-px w-10 bg-white" />
          <span className="opacity-50">۰۲</span>
          <span className="opacity-50">۰۳</span>
        </div>

        {/* Hero thumbnails */}
        <div className="absolute bottom-10 left-10 hidden w-[65px] flex-col gap-2 md:flex">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="hero-thumb"
            >
              <img
                src={`/images/hero-${item}.jpg`}
                alt=""
              />
            </div>
          ))}
        </div>

      </section>


      {/* ================= SHOP BY STYLE ================= */}
      <section className="section-container">

        <div className="mb-7 flex items-end justify-between">

          <div>
            <p className="section-eyebrow">
              انتخاب بر اساس استایل
            </p>

            <h2 className="section-title">
              استایل خودت را پیدا کن
            </h2>
          </div>

          <a href="#" className="section-link">
            مشاهده همه ←
          </a>

        </div>

        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">

          {styles.map((style) => (
            <a
              href="#"
              key={style.title}
              className="style-card group"
            >

              <img
                src={style.image}
                alt={style.title}
                className="transition duration-700 group-hover:scale-105"
              />

              <div className="style-overlay" />

              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">

                <h3 className="mb-3 text-xl font-medium">
                  {style.title}
                </h3>

                <span className="text-xs tracking-wide">
                  مشاهده محصولات ←
                </span>

              </div>

            </a>
          ))}

        </div>

      </section>


      {/* ================= FEATURED COLLECTION ================= */}
      <section className="section-container">

        <div className="collection-layout">

          {/* Text */}
          <div className="flex flex-col justify-center">

            <p className="section-eyebrow">
              کالکشن منتخب
            </p>

            <h2 className="mb-5 text-4xl font-medium leading-tight">
              Essentials
              <br />
              ماندگار
            </h2>

            <p className="mb-7 max-w-[250px] text-sm leading-7 text-black/55">
              لباس‌های ساده و کاربردی
              که می‌توانند پایه‌ی هر
              استایلی باشند.
            </p>

            <a
              href="#"
              className="fashion-dark-btn"
            >
              مشاهده کالکشن
            </a>

          </div>


          {/* Products */}
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">

            {essentials.map((product) => (
              <ProductCard
                key={product.title}
                {...product}
              />
            ))}

          </div>

        </div>

      </section>


      {/* ================= SHOP THE LOOK ================= */}
      <section className="section-container">

        <div className="look-layout">

          {/* Text */}
          <div className="look-intro">

            <p className="section-eyebrow">
              برای ایده گرفتن
            </p>

            <h2 className="mb-5 text-4xl font-medium leading-tight">
              این استایل
              <br />
              را بپوش
            </h2>

            <p className="mb-8 max-w-[260px] text-sm leading-7 text-black/55">
              استایل‌های کامل انتخاب‌شده
              توسط تیم ما؛ یک تصویر،
              چندین انتخاب.
            </p>

            <a href="#" className="section-link">
              مشاهده همه استایل‌ها ←
            </a>

          </div>


          {/* Image */}
          <div className="relative min-h-[520px] overflow-hidden">

            <img
              src="/images/look.jpg"
              alt="استایل پیشنهادی"
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Hotspots */}
            <span className="look-hotspot right-[32%] top-[32%]">
              +
            </span>

            <span className="look-hotspot bottom-[31%] left-[42%]">
              +
            </span>

            <span className="look-hotspot bottom-[20%] right-[24%]">
              +
            </span>

          </div>


          {/* Products */}
          <div className="flex flex-col justify-center bg-white p-7">

            <LookProduct
              image="/images/jacket.jpg"
              title="کت اورسایز"
              price="۳,۹۹۰,۰۰۰ تومان"
            />

            <LookProduct
              image="/images/tshirt.jpg"
              title="تیشرت ساده"
              price="۱,۴۹۰,۰۰۰ تومان"
            />

            <LookProduct
              image="/images/pants.jpg"
              title="شلوار ریلکس"
              price="۲,۹۹۰,۰۰۰ تومان"
            />

            <LookProduct
              image="/images/sneakers.jpg"
              title="کتانی کلاسیک"
              price="۴,۴۹۰,۰۰۰ تومان"
            />

            <button className="fashion-dark-btn mt-5 w-full">
              افزودن کل استایل به سبد — ۱۲,۹۶۰,۰۰۰ تومان
            </button>

          </div>

        </div>

      </section>


      {/* ================= TRENDING ================= */}
      <section className="section-container">

        <div className="mb-7 flex items-end justify-between">

          <div>
            <p className="section-eyebrow">
              محبوب‌ترین‌ها
            </p>

            <h2 className="section-title">
              ترند این روزها
            </h2>
          </div>

          <a href="#" className="section-link">
            مشاهده همه ←
          </a>

        </div>


        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">

          {trending.map((product) => (
            <ProductCard
              key={product.title}
              {...product}
            />
          ))}

        </div>

      </section>


      {/* ================= EDITORIAL ================= */}
      <section className="section-container">

        <div className="editorial-grid">

          <article className="editorial-main">

            <img
              src="/images/editorial.jpg"
              alt="مجله AVENUE"
            />

            <div className="editorial-content">

              <span>مجله</span>

              <h2>
                راهنمای پاییز
                <br />
                ۷ آیتم ضروری فصل
              </h2>

              <p>
                هفت تکه‌ای که استایل
                پاییزی امسال را می‌سازند.
              </p>

              <a href="#">
                مطالعه مقاله ←
              </a>

            </div>

          </article>


          <div className="editorial-side">

            <EditorialCard
              image="/images/editorial-1.jpg"
              label="راهنمای استایل"
              title="چطور یک کمد لباس کامل بسازیم؟"
            />

            <EditorialCard
              image="/images/editorial-2.jpg"
              label="پشت صحنه"
              title="یک روز در استودیو AVENUE"
            />

          </div>

        </div>

      </section>


      {/* ================= BENEFITS ================= */}
      <section className="section-container pt-0">

        <div className="benefits-grid">

          <Benefit
            icon={<TruckIcon />}
            title="ارسال رایگان"
            text="برای سفارش‌های بالای ۲ میلیون"
          />

          <Benefit
            icon={<ReturnIcon />}
            title="مرجوعی آسان"
            text="تا ۷ روز امکان بازگشت"
          />

          <Benefit
            icon={<LockIcon />}
            title="پرداخت امن"
            text="پرداخت کاملاً امن و مطمئن"
          />

          <Benefit
            icon={<HeadphoneIcon />}
            title="پشتیبانی"
            text="پاسخگویی ۲۴ ساعته"
          />

        </div>

      </section>


      {/* ================= INSTAGRAM ================= */}
      <section className="section-container">

        <div className="mb-7 flex items-end justify-between">

          <div>
            <p className="section-eyebrow">
              @avenue.official
            </p>

            <h2 className="section-title">
              ما را دنبال کنید
            </h2>
          </div>

          <a href="#" className="fashion-dark-btn">
            دنبال کردن
          </a>

        </div>

        <div className="grid grid-cols-3 gap-2 md:grid-cols-6">

          {[1, 2, 3, 4, 5, 6].map((item) => (
            <img
              key={item}
              src={`/images/instagram-${item}.jpg`}
              alt=""
              className="aspect-square w-full object-cover"
            />
          ))}

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer className="fashion-footer">

        <div className="mx-auto grid max-w-[1440px] gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-5 lg:px-10">

          <div className="lg:col-span-2">

            <div className="mb-5 text-2xl tracking-[0.2em]">
              AVENUE
            </div>

            <p className="max-w-[280px] text-sm leading-7 text-white/50">
              مدرن و ماندگار.
              برای حرکت روزمره.
            </p>

          </div>


          <FooterColumn
            title="فروشگاه"
            links={[
              "همه محصولات",
              "مردانه",
              "زنانه",
              "اکسسوری",
              "کالکشن‌ها",
              "تخفیف‌ها",
            ]}
          />

          <FooterColumn
            title="راهنما"
            links={[
              "نحوه خرید",
              "ارسال",
              "مرجوعی",
              "سؤالات متداول",
              "تماس با ما",
            ]}
          />

          <FooterColumn
            title="درباره"
            links={[
              "داستان ما",
              "مجله",
              "پایداری",
              "فرصت‌های شغلی",
            ]}
          />

        </div>


        <div className="border-t border-white/10">

          <div className="mx-auto flex max-w-[1440px] justify-between px-6 py-5 text-xs text-white/40 lg:px-10">

            <span>
              © ۱۴۰۵ AVENUE
            </span>

            <div className="flex gap-5">
              <a href="#">حریم خصوصی</a>
              <a href="#">قوانین و شرایط</a>
            </div>

          </div>

        </div>

      </footer>

    </main>
  );
}


/* =====================================================
   COMPONENTS
===================================================== */

function ProductCard({
  title,
  price,
  image,
  badge,
}: {
  title: string;
  price: string;
  image: string;
  badge?: string;
}) {
  return (
    <article className="product-card group">

      <div className="relative overflow-hidden bg-[#eeeae4]">

        {badge && (
          <span className="absolute right-3 top-3 z-10 bg-white px-2 py-1 text-[10px]">
            {badge}
          </span>
        )}

        <button className="absolute left-3 top-3 z-10 text-lg">
          ♡
        </button>

        <img
          src={image}
          alt={title}
          className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <button className="product-add">
          افزودن سریع
        </button>

      </div>

      <div className="pt-3">

        <h3 className="mb-1 text-sm">
          {title}
        </h3>

        <p className="text-xs text-black/50">
          {price}
        </p>

      </div>

    </article>
  );
}


function LookProduct({
  image,
  title,
  price,
}: {
  image: string;
  title: string;
  price: string;
}) {
  return (
    <div className="flex items-center gap-4 border-b border-black/10 py-3">

      <img
        src={image}
        alt={title}
        className="h-[62px] w-[52px] object-cover"
      />

      <div className="flex-1">
        <h3 className="mb-1 text-xs">
          {title}
        </h3>

        <p className="text-[11px] text-black/50">
          {price}
        </p>
      </div>

    </div>
  );
}


function EditorialCard({
  image,
  label,
  title,
}: {
  image: string;
  label: string;
  title: string;
}) {
  return (
    <article className="editorial-small">

      <img src={image} alt="" />

      <div className="p-5">

        <span>{label}</span>

        <h3>{title}</h3>

        <a href="#">
          مطالعه ←
        </a>

      </div>

    </article>
  );
}


function Benefit({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="benefit">

      <div className="benefit-icon">
        {icon}
      </div>

      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>

    </div>
  );
}


function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: string[];
}) {
  return (
    <div>

      <h3 className="mb-5 text-xs text-white/70">
        {title}
      </h3>

      <div className="flex flex-col gap-3">

        {links.map((link) => (
          <a
            href="#"
            key={link}
            className="text-xs text-white/45 transition hover:text-white"
          >
            {link}
          </a>
        ))}

      </div>

    </div>
  );
}


/* =====================================================
   ICONS
===================================================== */

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <circle cx="11" cy="11" r="7" stroke="currentColor" />
      <path d="M16.5 16.5L21 21" stroke="currentColor" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="8" r="3.5" stroke="currentColor" />
      <path
        d="M5 21C5.7 16.8 8.2 15 12 15C15.8 15 18.3 16.8 19 21"
        stroke="currentColor"
      />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 8H19L18 21H6L5 8Z"
        stroke="currentColor"
      />
      <path
        d="M9 8C9 5.8 10.1 4 12 4C13.9 4 15 5.8 15 8"
        stroke="currentColor"
      />
    </svg>
  );
}

function TruckIcon() {
  return <span>▱</span>;
}

function ReturnIcon() {
  return <span>↶</span>;
}

function LockIcon() {
  return <span>⌑</span>;
}

function HeadphoneIcon() {
  return <span>◌</span>;
}