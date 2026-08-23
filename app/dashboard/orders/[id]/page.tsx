export default function OrderDetail() {
  return (
 <>
             {/* <!-- Page Header --> */}
            <section className="order-details-header">

                <div>

                    <div className="order-title-row">

                        <h2>
                            سفارش #1048
                        </h2>

                        <span className="order-status status-success">
                            تکمیل شده
                        </span>

                    </div>

                    <p>
                        ثبت شده در ۲۱ مرداد ۱۴۰۵، ساعت ۱۸:۳۰
                    </p>

                </div>

                <a
                    href="all-orders.html"
                    className="secondary-button"
                >
                    بازگشت به سفارش‌ها
                </a>

            </section>


            {/* <!-- Order Status --> */}
            <section className="order-status-card">

                <div className="order-status-step completed">

                    <span className="status-step-icon">
                        ✓
                    </span>

                    <div>
                        <strong>ثبت سفارش</strong>
                        <small>۱۸:۳۰</small>
                    </div>

                </div>

                <span className="status-line"></span>

                <div className="order-status-step completed">

                    <span className="status-step-icon">
                        ✓
                    </span>

                    <div>
                        <strong>پرداخت</strong>
                        <small>۱۸:۳۱</small>
                    </div>

                </div>

                <span className="status-line"></span>

                <div className="order-status-step completed">

                    <span className="status-step-icon">
                        ✓
                    </span>

                    <div>
                        <strong>پردازش</strong>
                        <small>۱۹:۱۰</small>
                    </div>

                </div>

                <span className="status-line"></span>

                <div className="order-status-step completed">

                    <span className="status-step-icon">
                        ✓
                    </span>

                    <div>
                        <strong>ارسال</strong>
                        <small>۲۱:۲۰</small>
                    </div>

                </div>

                <span className="status-line"></span>

                <div className="order-status-step completed">

                    <span className="status-step-icon">
                        ✓
                    </span>

                    <div>
                        <strong>تحویل</strong>
                        <small>امروز</small>
                    </div>

                </div>

            </section>


            <div className="order-details-grid">

                {/* <!-- Main Column --> */}
                <div className="order-details-main">

                    {/* <!-- Products --> */}
                    <section className="form-card">

                        <div className="form-card-header">

                            <h2>
                                محصولات سفارش
                            </h2>

                            <p>
                                ۲ محصول در این سفارش
                            </p>

                        </div>

                        <div className="order-products">

                            <article className="order-product">

                                <div className="order-product-image">

                                    <img
                                        src="../../assets/images/products/shoe-1.jpg"
                                        alt="کفش اسپرت مشکی"
                                    />

                                </div>

                                <div className="order-product-info">

                                    <strong>
                                        کفش اسپرت مشکی
                                    </strong>

                                    <span>
                                        سایز ۴۲ · رنگ مشکی
                                    </span>

                                    <small>
                                        کد محصول: SH-001
                                    </small>

                                </div>

                                <div className="order-product-quantity">
                                    × 1
                                </div>

                                <div className="order-product-price">
                                    ۴,۵۰۰,۰۰۰ تومان
                                </div>

                            </article>


                            <article className="order-product">

                                <div className="order-product-image">

                                    <img
                                        src="../../assets/images/products/shirt-1.jpg"
                                        alt="تیشرت ساده سفید"
                                    />

                                </div>

                                <div className="order-product-info">

                                    <strong>
                                        تیشرت ساده سفید
                                    </strong>

                                    <span>
                                        سایز L · رنگ سفید
                                    </span>

                                    <small>
                                        کد محصول: CL-024
                                    </small>

                                </div>

                                <div className="order-product-quantity">
                                    × 1
                                </div>

                                <div className="order-product-price">
                                    ۳۵۰,۰۰۰ تومان
                                </div>

                            </article>

                        </div>

                    </section>


                    {/* <!-- Order Summary --> */}
                    <section className="form-card">

                        <div className="form-card-header">

                            <h2>
                                خلاصه پرداخت
                            </h2>

                        </div>

                        <div className="order-summary">

                            <div>
                                <span>مجموع محصولات</span>
                                <strong>۴,۸۵۰,۰۰۰ تومان</strong>
                            </div>

                            <div>
                                <span>هزینه ارسال</span>
                                <strong>رایگان</strong>
                            </div>

                            <div>
                                <span>تخفیف</span>
                                <strong className="discount-value">
                                    - ۰ تومان
                                </strong>
                            </div>

                            <div className="order-total">
                                <span>مبلغ نهایی</span>
                                <strong>
                                    ۴,۸۵۰,۰۰۰ تومان
                                </strong>
                            </div>

                        </div>

                    </section>


                    {/* <!-- Order Timeline --> */}
                    <section className="form-card">

                        <div className="form-card-header">

                            <h2>
                                تاریخچه سفارش
                            </h2>

                        </div>

                        <div className="order-timeline">

                            <div className="timeline-item">

                                <span className="timeline-dot"></span>

                                <div>
                                    <strong>
                                        سفارش تحویل داده شد
                                    </strong>

                                    <p>
                                        سفارش با موفقیت به مشتری تحویل داده شد.
                                    </p>

                                    <small>
                                        امروز، ۱۴:۲۰
                                    </small>
                                </div>

                            </div>


                            <div className="timeline-item">

                                <span className="timeline-dot"></span>

                                <div>
                                    <strong>
                                        سفارش ارسال شد
                                    </strong>

                                    <p>
                                        بسته توسط شرکت حمل‌ونقل دریافت شد.
                                    </p>

                                    <small>
                                        ۲۱ مرداد، ۲۱:۲۰
                                    </small>
                                </div>

                            </div>


                            <div className="timeline-item">

                                <span className="timeline-dot"></span>

                                <div>
                                    <strong>
                                        سفارش در حال پردازش
                                    </strong>

                                    <p>
                                        سفارش توسط انبار آماده‌سازی شد.
                                    </p>

                                    <small>
                                        ۲۱ مرداد، ۱۹:۱۰
                                    </small>

                                </div>

                            </div>


                            <div className="timeline-item">

                                <span className="timeline-dot"></span>

                                <div>

                                    <strong>
                                        پرداخت موفق
                                    </strong>

                                    <p>
                                        پرداخت از طریق درگاه با موفقیت انجام شد.
                                    </p>

                                    <small>
                                        ۲۱ مرداد، ۱۸:۳۱
                                    </small>

                                </div>

                            </div>

                        </div>

                    </section>

                </div>


                {/* <!-- Sidebar --> */}
                <aside className="order-details-sidebar">

                    {/* <!-- Customer --> */}
                    <section className="form-card">

                        <div className="form-card-header">
                            <h2>مشتری</h2>
                        </div>

                        <div className="order-customer">

                            <span className="customer-avatar customer-avatar-large">
                                م
                            </span>

                            <strong>
                                محمد رضایی
                            </strong>

                            <span>
                                0912***4587
                            </span>

                            <a href="../customers/customer-profile.html">
                                مشاهده پروفایل مشتری
                            </a>

                        </div>

                    </section>


                    {/* <!-- Shipping --> */}
                    <section className="form-card">

                        <div className="form-card-header">
                            <h2>آدرس ارسال</h2>
                        </div>

                        <address className="shipping-address">

                            <strong>
                                محمد رضایی
                            </strong>

                            <p>
                                مازندران، ساری، خیابان فرهنگ،
                                کوچه ۱۲، پلاک ۲۴
                            </p>

                            <span>
                                کد پستی: ۴۸۱۳۷۱۲۳۴۵
                            </span>

                            <span>
                                تلفن: 0912***4587
                            </span>

                        </address>

                    </section>


                    {/* <!-- Payment --> */}
                    <section className="form-card">

                        <div className="form-card-header">
                            <h2>پرداخت</h2>
                        </div>

                        <div className="payment-info">

                            <div>
                                <span>وضعیت</span>

                                <span className="payment-status payment-paid">
                                    پرداخت شده
                                </span>
                            </div>

                            <div>
                                <span>روش پرداخت</span>
                                <strong>درگاه آنلاین</strong>
                            </div>

                            <div>
                                <span>شماره تراکنش</span>
                                <strong>TXN-784521</strong>
                            </div>

                        </div>

                    </section>


                    {/* <!-- Order Actions --> */}
                    <section className="form-card">

                        <div className="form-card-header">
                            <h2>عملیات سفارش</h2>
                        </div>

                        <div className="order-actions">

                            <button
                                type="button"
                                className="primary-button"
                            >
                                تغییر وضعیت
                            </button>

                            <button
                                type="button"
                                className="secondary-button"
                            >
                                چاپ سفارش
                            </button>

                            <button
                                type="button"
                                className="delete-product-button"
                            >
                                لغو سفارش
                            </button>

                        </div>

                    </section>

                </aside>

            </div>
 </>
  );
}