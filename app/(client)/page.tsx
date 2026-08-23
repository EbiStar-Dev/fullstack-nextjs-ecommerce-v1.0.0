export default function Home() {
  return (
<>
        {/* <!-- Hero --> */}
        <section className="store-hero">

            <div className="store-hero-content">

                <span className="store-eyebrow">
                    کالکشن جدید ۲۰۲۶
                </span>

                <h1>
                    استایل خودت را
                    <span>انتخاب کن.</span>
                </h1>

                <p>
                    جدیدترین مدل‌های کفش و پوشاک را با طراحی مدرن و کیفیت بالا پیدا کن.
                </p>

                <div className="store-hero-actions">

                    <a
                        href="shop/all-products.html"
                        className="primary-button"
                    >
                        مشاهده محصولات
                    </a>

                    <a
                        href="shop/category.html"
                        className="secondary-button"
                    >
                        کالکشن جدید
                    </a>

                </div>

            </div>

            <div className="store-hero-image">

                <img
                    src="../assets/images/banners/hero.jpg"
                    alt="کالکشن جدید کفش و پوشاک"
                />

            </div>

        </section>


        {/* <!-- Categories --> */}
        <section className="store-section">

            <div className="store-section-header">

                <div>
                    <span className="store-eyebrow">
                        دسته‌بندی
                    </span>

                    <h2>
                        چی می‌خوای بپوشی؟
                    </h2>
                </div>

                <a
                    href="shop/all-products.html"
                    className="store-section-link"
                >
                    مشاهده همه
                </a>

            </div>


            <div className="category-grid">

                <a href="shop/category.html" className="category-card">

                    <img
                        src="../assets/images/banners/category-shoes.jpg"
                        alt="کفش"
                    />

                    <div className="category-card-content">
                        <span>کفش</span>
                        <small>مشاهده محصولات</small>
                    </div>

                </a>


                <a href="shop/category.html" className="category-card">

                    <img
                        src="../assets/images/banners/category-clothing.jpg"
                        alt="پوشاک"
                    />

                    <div className="category-card-content">
                        <span>پوشاک</span>
                        <small>مشاهده محصولات</small>
                    </div>

                </a>


                <a href="shop/category.html" className="category-card">

                    <img
                        src="../assets/images/banners/category-sport.jpg"
                        alt="ورزشی"
                    />

                    <div className="category-card-content">
                        <span>ورزشی</span>
                        <small>مشاهده محصولات</small>
                    </div>

                </a>


                <a href="shop/category.html" className="category-card">

                    <img
                        src="../assets/images/banners/category-accessories.jpg"
                        alt="اکسسوری"
                    />

                    <div className="category-card-content">
                        <span>اکسسوری</span>
                        <small>مشاهده محصولات</small>
                    </div>

                </a>

            </div>

        </section>


        {/* <!-- Featured Products --> */}
        <section className="store-section">

            <div className="store-section-header">

                <div>
                    <span className="store-eyebrow">
                        انتخاب ویژه
                    </span>

                    <h2>
                        محصولات پرفروش
                    </h2>
                </div>

                <a
                    href="shop/all-products.html"
                    className="store-section-link"
                >
                    مشاهده همه
                </a>

            </div>


            <div className="product-grid">

                <article className="store-product-card">

                    <a href="shop/product-details.html" className="product-image">

                        <span className="product-badge">
                            پرفروش
                        </span>

                        <img
                            src="../assets/images/products/shoe-01.jpg"
                            alt="کتانی اسپرت سفید"
                        />

                    </a>

                    <div className="product-info">

                        <span className="product-category">
                            کفش مردانه
                        </span>

                        <h3>
                            <a href="shop/product-details.html">
                                کتانی اسپرت سفید
                            </a>
                        </h3>

                        <div className="product-price">
                            ۲,۴۵۰,۰۰۰ تومان
                        </div>

                    </div>

                </article>


                <article className="store-product-card">

                    <a href="shop/product-details.html" className="product-image">

                        <span className="product-badge">
                            جدید
                        </span>

                        <img
                            src="../assets/images/products/shoe-02.jpg"
                            alt="کتانی مشکی روزمره"
                        />

                    </a>

                    <div className="product-info">

                        <span className="product-category">
                            کفش مردانه
                        </span>

                        <h3>
                            <a href="shop/product-details.html">
                                کتانی مشکی روزمره
                            </a>
                        </h3>

                        <div className="product-price">
                            ۲,۸۹۰,۰۰۰ تومان
                        </div>

                    </div>

                </article>


                <article className="store-product-card">

                    <a href="shop/product-details.html" className="product-image">

                        <img
                            src="../assets/images/products/clothing-01.jpg"
                            alt="هودی ساده مشکی"
                        />

                    </a>

                    <div className="product-info">

                        <span className="product-category">
                            پوشاک
                        </span>

                        <h3>
                            <a href="shop/product-details.html">
                                هودی ساده مشکی
                            </a>
                        </h3>

                        <div className="product-price">
                            ۱,۶۹۰,۰۰۰ تومان
                        </div>

                    </div>

                </article>


                <article className="store-product-card">

                    <a href="shop/product-details.html" className="product-image">

                        <span className="product-badge">
                            تخفیف
                        </span>

                        <img
                            src="../assets/images/products/clothing-02.jpg"
                            alt="سویشرت طوسی"
                        />

                    </a>

                    <div className="product-info">

                        <span className="product-category">
                            پوشاک
                        </span>

                        <h3>
                            <a href="shop/product-details.html">
                                سویشرت طوسی
                            </a>
                        </h3>

                        <div className="product-price">

                            <del>۱,۹۵۰,۰۰۰</del>

                            ۱,۵۹۰,۰۰۰ تومان

                        </div>

                    </div>

                </article>

            </div>

        </section>


        {/* <!-- Promotional Banner --> */}
        <section className="store-promo">

            <div className="store-promo-content">

                <span className="store-eyebrow">
                    پیشنهاد محدود
                </span>

                <h2>
                    تا ۳۰٪ تخفیف
                    روی کالکشن جدید
                </h2>

                <p>
                    فقط برای مدت محدود. قبل از تمام شدن موجودی انتخابت کن.
                </p>

                <a
                    href="shop/all-products.html"
                    className="primary-button"
                >
                    خرید با تخفیف
                </a>

            </div>

            <div className="store-promo-image">

                <img
                    src="../assets/images/banners/promo.jpg"
                    alt="تخفیف کالکشن جدید"
                />

            </div>

        </section>


        {/* <!-- New Products --> */}
        <section className="store-section">

            <div className="store-section-header">

                <div>
                    <span className="store-eyebrow">
                        تازه رسیده
                    </span>

                    <h2>
                        جدیدترین محصولات
                    </h2>
                </div>

                <a
                    href="shop/all-products.html"
                    className="store-section-link"
                >
                    مشاهده همه
                </a>

            </div>


            <div className="product-grid">

                <article className="store-product-card">

                    <a href="shop/product-details.html" className="product-image">

                        <img
                            src="../assets/images/products/shoe-03.jpg"
                            alt="کتانی سفید و طوسی"
                        />

                    </a>

                    <div className="product-info">

                        <span className="product-category">
                            کفش
                        </span>

                        <h3>
                            <a href="shop/product-details.html">
                                کتانی سفید و طوسی
                            </a>
                        </h3>

                        <div className="product-price">
                            ۳,۱۵۰,۰۰۰ تومان
                        </div>

                    </div>

                </article>


                <article className="store-product-card">

                    <a href="shop/product-details.html" className="product-image">

                        <img
                            src="../assets/images/products/shoe-04.jpg"
                            alt="کتانی رانینگ"
                        />

                    </a>

                    <div className="product-info">

                        <span className="product-category">
                            ورزشی
                        </span>

                        <h3>
                            <a href="shop/product-details.html">
                                کتانی رانینگ
                            </a>
                        </h3>

                        <div className="product-price">
                            ۳,۴۵۰,۰۰۰ تومان
                        </div>

                    </div>

                </article>


                <article className="store-product-card">

                    <a href="shop/product-details.html" className="product-image">

                        <img
                            src="../assets/images/products/clothing-03.jpg"
                            alt="تیشرت اورسایز"
                        />

                    </a>

                    <div className="product-info">

                        <span className="product-category">
                            پوشاک
                        </span>

                        <h3>
                            <a href="shop/product-details.html">
                                تیشرت اورسایز
                            </a>
                        </h3>

                        <div className="product-price">
                            ۹۹۰,۰۰۰ تومان
                        </div>

                    </div>

                </article>


                <article className="store-product-card">

                    <a href="shop/product-details.html" className="product-image">

                        <img
                            src="../assets/images/products/clothing-04.jpg"
                            alt="شلوار کارگو"
                        />

                    </a>

                    <div className="product-info">

                        <span className="product-category">
                            پوشاک
                        </span>

                        <h3>
                            <a href="shop/product-details.html">
                                شلوار کارگو
                            </a>
                        </h3>

                        <div className="product-price">
                            ۱,۷۹۰,۰۰۰ تومان
                        </div>

                    </div>

                </article>

            </div>

        </section>


        {/* <!-- Benefits --> */}
        <section className="store-benefits">

            <div className="benefit-item">

                <div className="benefit-icon">
                    <svg className="icon" viewBox="0 0 24 24">
                        <path d="M3 7h13v10H3z"></path>
                        <path d="M16 10h3l2 3v4h-5z"></path>
                        <circle cx="7" cy="18" r="2"></circle>
                        <circle cx="18" cy="18" r="2"></circle>
                    </svg>
                </div>

                <div>
                    <strong>ارسال سریع</strong>
                    <span>تحویل سریع سفارش‌ها</span>
                </div>

            </div>


            <div className="benefit-item">

                <div className="benefit-icon">
                    <svg className="icon" viewBox="0 0 24 24">
                        <path d="M12 3 4 6v5c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6z"></path>
                        <path d="m8 12 2.5 2.5L16 9"></path>
                    </svg>
                </div>

                <div>
                    <strong>ضمانت کیفیت</strong>
                    <span>تضمین اصالت محصولات</span>
                </div>

            </div>


            <div className="benefit-item">

                <div className="benefit-icon">
                    <svg className="icon" viewBox="0 0 24 24">
                        <path d="M20 11a8 8 0 1 0 2 5"></path>
                        <path d="M20 4v7h-7"></path>
                    </svg>
                </div>

                <div>
                    <strong>بازگشت آسان</strong>
                    <span>۱۴ روز فرصت بازگشت</span>
                </div>

            </div>


            <div className="benefit-item">

                <div className="benefit-icon">
                    <svg className="icon" viewBox="0 0 24 24">
                        <path d="M4 4h16v16H4z"></path>
                        <path d="M8 8h8"></path>
                        <path d="M8 12h5"></path>
                    </svg>
                </div>

                <div>
                    <strong>پشتیبانی</strong>
                    <span>پاسخگویی در تمام روز</span>
                </div>

            </div>

        </section>


        {/* <!-- Newsletter --> */}
        <section className="store-newsletter">

            <div>

                <span className="store-eyebrow">
                    خبرنامه
                </span>

                <h2>
                    از تخفیف‌ها جا نمون.
                </h2>

                <p>
                    جدیدترین محصولات و پیشنهادهای ویژه را دریافت کن.
                </p>

            </div>


            <form className="newsletter-form">

                <label
                    
                    className="sr-only"
                >
                    ایمیل
                </label>

                <input
                    id="newsletter-email"
                    type="email"
                    placeholder="ایمیل خود را وارد کنید"
                    required
                />

                <button
                    type="submit"
                    className="primary-button"
                >
                    عضویت
                </button>

            </form>

        </section>
</>
  );
}
