export default function ProductDetail() {
  return (
   <>
       {/* <!-- Breadcrumb --> */}
    <nav
        className="product-breadcrumb"
        aria-label="مسیر صفحه"
    >

        <a href="../index.html">خانه</a>
        <span>/</span>

        <a href="all-products.html">فروشگاه</a>
        <span>/</span>

        <a href="category.html">کفش</a>
        <span>/</span>

        <span>کتانی اسپرت سفید</span>

    </nav>


    {/* <!-- Product --> */}
    <section className="product-details">

        {/* <!-- Gallery --> */}
        <div className="product-gallery">

            <div className="product-thumbnails">

                <button
                    type="button"
                    className="product-thumbnail active"
                    aria-label="تصویر اول"
                >
                    <img
                        src="../../assets/images/products/shoe-01.jpg"
                        alt=""
                    />
                </button>

                <button
                    type="button"
                    className="product-thumbnail"
                    aria-label="تصویر دوم"
                >
                    <img
                        src="../../assets/images/products/shoe-01-2.jpg"
                        alt=""
                    />
                </button>

                <button
                    type="button"
                    className="product-thumbnail"
                    aria-label="تصویر سوم"
                >
                    <img
                        src="../../assets/images/products/shoe-01-3.jpg"
                        alt=""
                    />
                </button>

                <button
                    type="button"
                    className="product-thumbnail"
                    aria-label="تصویر چهارم"
                >
                    <img
                        src="../../assets/images/products/shoe-01-4.jpg"
                        alt=""
                    />
                </button>

            </div>


            <div className="product-main-image">

                <span className="product-badge">
                    جدید
                </span>

                <img
                    src="../../assets/images/products/shoe-01.jpg"
                    alt="کتانی اسپرت سفید"
                />

                <button
                    type="button"
                    className="product-image-action"
                    aria-label="افزودن به علاقه‌مندی‌ها"
                >
                    <svg className="icon" viewBox="0 0 24 24">
                        <path d="M20.8 8.6c0 5.5-8.8 10.4-8.8 10.4S3.2 14.1 3.2 8.6A4.6 4.6 0 0 1 12 6.1a4.6 4.6 0 0 1 8.8 2.5Z"></path>
                    </svg>
                </button>

            </div>

        </div>


        {/* <!-- Information --> */}
        <div className="product-information">

            <span className="product-category">
                کفش مردانه / کتانی
            </span>

            <h1>
                کتانی اسپرت سفید
            </h1>

            <div className="product-rating">

                <div className="rating-stars">
                    ★★★★★
                </div>

                <a href="#reviews">
                    ۲۴ دیدگاه
                </a>

            </div>


            <div className="product-detail-price">

                <span>
                    ۲,۴۵۰,۰۰۰ تومان
                </span>

            </div>


            <p className="product-description">
                کتانی اسپرت سبک و راحت با طراحی مینیمال،
                مناسب استفاده روزمره و استایل‌های کژوال.
                رویه مقاوم و کفی انعطاف‌پذیر این محصول،
                راحتی بیشتری در استفاده طولانی‌مدت فراهم می‌کند.
            </p>


            {/* <!-- Color --> */}
            <div className="product-option">

                <div className="product-option-header">

                    <span>
                        رنگ:
                    </span>

                    <strong>
                        سفید
                    </strong>

                </div>

                <div className="product-colors">

                    <button
                        type="button"
                        className="product-color active product-color-white"
                        aria-label="سفید"
                    ></button>

                    <button
                        type="button"
                        className="product-color product-color-black"
                        aria-label="مشکی"
                    ></button>

                    <button
                        type="button"
                        className="product-color product-color-gray"
                        aria-label="طوسی"
                    ></button>

                </div>

            </div>


            {/* <!-- Size --> */}
            <div className="product-option">

                <div className="product-option-header">

                    <span>
                        سایز:
                    </span>

                    <a href="#size-guide">
                        راهنمای سایز
                    </a>

                </div>

                <div className="product-sizes">

                    <button type="button">۳۸</button>
                    <button type="button">۳۹</button>
                    <button type="button" className="active">۴۰</button>
                    <button type="button">۴۱</button>
                    <button type="button">۴۲</button>
                    <button type="button">۴۳</button>
                    <button type="button">۴۴</button>

                </div>

            </div>


            {/* <!-- Purchase --> */}
            <div className="product-purchase">

                <div className="product-quantity">

                    <button type="button" aria-label="کاهش تعداد">
                        −
                    </button>

                    <span>
                        1
                    </span>

                    <button type="button" aria-label="افزایش تعداد">
                        +
                    </button>

                </div>

                <button
                    type="button"
                    className="product-add-to-cart"
                >
                    افزودن به سبد خرید
                </button>

            </div>


            {/* <!-- Benefits --> */}
            <div className="product-benefits">

                <div className="product-benefit">

                    <svg className="icon" viewBox="0 0 24 24">
                        <path d="M3 7h11v10H3z"></path>
                        <path d="M14 10h4l3 3v4h-7z"></path>
                        <circle cx="7" cy="19" r="2"></circle>
                        <circle cx="18" cy="19" r="2"></circle>
                    </svg>

                    <div>
                        <strong>ارسال سریع</strong>
                        <span>ارسال به سراسر کشور</span>
                    </div>

                </div>


                <div className="product-benefit">

                    <svg className="icon" viewBox="0 0 24 24">
                        <path d="M20 11a8 8 0 1 1-2.3-5.7"></path>
                        <path d="M20 4v7h-7"></path>
                    </svg>

                    <div>
                        <strong>ضمانت بازگشت</strong>
                        <span>۷ روز ضمانت بازگشت کالا</span>
                    </div>

                </div>


                <div className="product-benefit">

                    <svg className="icon" viewBox="0 0 24 24">
                        <path d="M12 3 5 6v5c0 4.5 3 8.2 7 10 4-1.8 7-5.5 7-10V6z"></path>
                        <path d="m9 12 2 2 4-4"></path>
                    </svg>

                    <div>
                        <strong>تضمین کیفیت</strong>
                        <span>تضمین اصالت و کیفیت محصول</span>
                    </div>

                </div>

            </div>

        </div>

    </section>


    {/* <!-- Product Details Tabs --> */}
    <section className="product-content">

        <div className="product-tabs">

            <button
                type="button"
                className="product-tab active"
            >
                توضیحات
            </button>

            <button
                type="button"
                className="product-tab"
            >
                مشخصات
            </button>

            <button
                type="button"
                className="product-tab"
                id="reviews"
            >
                نظرات (۲۴)
            </button>

        </div>


        <div className="product-tab-content">

            <h2>
                درباره این محصول
            </h2>

            <p>
                کتانی اسپرت سفید با طراحی ساده و کاربردی،
                انتخابی مناسب برای استفاده روزمره است.
                طراحی این محصول به گونه‌ای انجام شده که
                با انواع شلوار و استایل‌های کژوال هماهنگ شود.
            </p>

            <p>
                استفاده از متریال سبک و کفی انعطاف‌پذیر،
                باعث شده این مدل برای پیاده‌روی و استفاده
                روزانه گزینه مناسبی باشد.
            </p>

        </div>

    </section>


    {/* <!-- Specifications --> */}
    <section className="product-specifications">

        <h2>
            مشخصات محصول
        </h2>

        <dl>

            <div>
                <dt>برند</dt>
                <dd>Example</dd>
            </div>

            <div>
                <dt>جنس رویه</dt>
                <dd>پارچه و الیاف مصنوعی</dd>
            </div>

            <div>
                <dt>جنس زیره</dt>
                <dd>لاستیک</dd>
            </div>

            <div>
                <dt>مناسب برای</dt>
                <dd>استفاده روزمره</dd>
            </div>

            <div>
                <dt>کشور تولیدکننده</dt>
                <dd>ایران</dd>
            </div>

        </dl>

    </section>


    {/* <!-- Related Products --> */}
    <section className="related-products">

        <div className="section-heading">

            <div>

                <span className="store-eyebrow">
                    شاید دوست داشته باشید
                </span>

                <h2>
                    محصولات مشابه
                </h2>

            </div>

            <a href="category.html">
                مشاهده همه
            </a>

        </div>


        <div className="product-grid">

            <article className="store-product-card">

                <a
                    href="product-details.html"
                    className="product-image"
                >

                    <img
                        src="../../assets/images/products/shoe-02.jpg"
                        alt="کتانی مشکی روزمره"
                    />

                </a>

                <div className="product-info">

                    <span className="product-category">
                        کفش
                    </span>

                    <h3>
                        <a href="product-details.html">
                            کتانی مشکی روزمره
                        </a>
                    </h3>

                    <div className="product-price">
                        ۲,۸۹۰,۰۰۰ تومان
                    </div>

                </div>

            </article>


            <article className="store-product-card">

                <a
                    href="product-details.html"
                    className="product-image"
                >

                    <img
                        src="../../assets/images/products/shoe-03.jpg"
                        alt="کتانی سفید و طوسی"
                    />

                </a>

                <div className="product-info">

                    <span className="product-category">
                        کفش
                    </span>

                    <h3>
                        <a href="product-details.html">
                            کتانی سفید و طوسی
                        </a>
                    </h3>

                    <div className="product-price">
                        ۳,۱۵۰,۰۰۰ تومان
                    </div>

                </div>

            </article>


            <article className="store-product-card">

                <a
                    href="product-details.html"
                    className="product-image"
                >

                    <img
                        src="../../assets/images/products/shoe-04.jpg"
                        alt="کتانی رانینگ"
                    />

                </a>

                <div className="product-info">

                    <span className="product-category">
                        ورزشی
                    </span>

                    <h3>
                        <a href="product-details.html">
                            کتانی رانینگ
                        </a>
                    </h3>

                    <div className="product-price">
                        ۳,۴۵۰,۰۰۰ تومان
                    </div>

                </div>

            </article>


            <article className="store-product-card">

                <a
                    href="product-details.html"
                    className="product-image"
                >

                    <img
                        src="../../assets/images/products/shoe-05.jpg"
                        alt="کتانی سفید کلاسیک"
                    />

                </a>

                <div className="product-info">

                    <span className="product-category">
                        کفش
                    </span>

                    <h3>
                        <a href="product-details.html">
                            کتانی سفید کلاسیک
                        </a>
                    </h3>

                    <div className="product-price">
                        ۲,۲۹۰,۰۰۰ تومان
                    </div>

                </div>

            </article>

        </div>

    </section>
   </>
  );
}