export default function CustomerDetail() {
  return (
    <>
                {/* <!-- Customer Header --> */}
            <section className="customer-profile-header">

                <div className="customer-profile-main">

                    <span className="customer-profile-avatar">
                        م
                    </span>

                    <div>

                        <div className="customer-profile-name">

                            <h2>
                                محمد رضایی
                            </h2>

                            <span className="customer-status customer-active">
                                فعال
                            </span>

                        </div>

                        <p>
                            مشتری از ۱۲ اردیبهشت ۱۴۰۵
                        </p>

                    </div>

                </div>

                <div className="customer-profile-actions">

                    <button
                        type="button"
                        className="secondary-button"
                    >
                        ویرایش مشتری
                    </button>

                    <a
                        href="list.html"
                        className="secondary-button"
                    >
                        بازگشت
                    </a>

                </div>

            </section>


            {/* <!-- Stats --> */}
            <section className="product-stats customer-profile-stats">

                <article className="product-stat">
                    <span>تعداد سفارش‌ها</span>
                    <strong>۲۴</strong>
                </article>

                <article className="product-stat">
                    <span>مجموع خرید</span>
                    <strong>۴۸.۵M</strong>
                </article>

                <article className="product-stat">
                    <span>میانگین سفارش</span>
                    <strong>۲M</strong>
                </article>

                <article className="product-stat">
                    <span>آخرین خرید</span>
                    <strong>امروز</strong>
                </article>

            </section>


            <div className="customer-profile-grid">

                {/* <!-- Main --> */}
                <div className="customer-profile-main-column">

                    {/* <!-- Orders --> */}
                    <section className="form-card">

                        <div className="form-card-header">

                            <div>
                                <h2>
                                    سفارش‌های مشتری
                                </h2>

                                <p>
                                    آخرین سفارش‌های ثبت‌شده
                                </p>
                            </div>

                            <a
                                href="../orders/all-orders.html"
                                className="text-button"
                            >
                                مشاهده همه
                            </a>

                        </div>


                        <div className="products-table-wrapper">

                            <table className="products-table customer-orders-table">

                                <thead>

                                    <tr>
                                        <th>سفارش</th>
                                        <th>تاریخ</th>
                                        <th>مبلغ</th>
                                        <th>وضعیت</th>
                                        <th></th>
                                    </tr>

                                </thead>

                                <tbody>

                                    <tr>

                                        <td>
                                            <a
                                                href="../orders/order-details.html"
                                                className="order-number"
                                            >
                                                #1048
                                            </a>
                                        </td>

                                        <td>
                                            امروز
                                        </td>

                                        <td>
                                            ۴,۸۵۰,۰۰۰ تومان
                                        </td>

                                        <td>
                                            <span className="order-status status-success">
                                                تکمیل شده
                                            </span>
                                        </td>

                                        <td>
                                            <a
                                                href="../orders/order-details.html"
                                                className="table-action"
                                                aria-label="مشاهده سفارش"
                                            >
                                                <svg className="icon" viewBox="0 0 24 24">
                                                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                                                    <circle cx="12" cy="12" r="3"></circle>
                                                </svg>
                                            </a>
                                        </td>

                                    </tr>


                                    <tr>

                                        <td>
                                            <a
                                                href="../orders/order-details.html"
                                                className="order-number"
                                            >
                                                #1027
                                            </a>
                                        </td>

                                        <td>
                                            ۱۵ مرداد
                                        </td>

                                        <td>
                                            ۲,۳۰۰,۰۰۰ تومان
                                        </td>

                                        <td>
                                            <span className="order-status status-info">
                                                ارسال شده
                                            </span>
                                        </td>

                                        <td>
                                            <a
                                                href="../orders/order-details.html"
                                                className="table-action"
                                                aria-label="مشاهده سفارش"
                                            >
                                                <svg className="icon" viewBox="0 0 24 24">
                                                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                                                    <circle cx="12" cy="12" r="3"></circle>
                                                </svg>
                                            </a>
                                        </td>

                                    </tr>


                                    <tr>

                                        <td>
                                            <a
                                                href="../orders/order-details.html"
                                                className="order-number"
                                            >
                                                #991
                                            </a>
                                        </td>

                                        <td>
                                            ۲ مرداد
                                        </td>

                                        <td>
                                            ۶,۷۵۰,۰۰۰ تومان
                                        </td>

                                        <td>
                                            <span className="order-status status-success">
                                                تکمیل شده
                                            </span>
                                        </td>

                                        <td>
                                            <a
                                                href="../orders/order-details.html"
                                                className="table-action"
                                                aria-label="مشاهده سفارش"
                                            >
                                                <svg className="icon" viewBox="0 0 24 24">
                                                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                                                    <circle cx="12" cy="12" r="3"></circle>
                                                </svg>
                                            </a>
                                        </td>

                                    </tr>

                                </tbody>

                            </table>

                        </div>

                    </section>


                    {/* <!-- Activity --> */}
                    <section className="form-card">

                        <div className="form-card-header">

                            <h2>
                                فعالیت اخیر
                            </h2>

                        </div>

                        <div className="customer-activity">

                            <div className="customer-activity-item">

                                <span className="timeline-dot"></span>

                                <div>

                                    <strong>
                                        سفارش جدید ثبت شد
                                    </strong>

                                    <p>
                                        سفارش #1048 با مبلغ ۴,۸۵۰,۰۰۰ تومان
                                        ثبت شد.
                                    </p>

                                    <small>
                                        امروز، ۱۸:۳۰
                                    </small>

                                </div>

                            </div>


                            <div className="customer-activity-item">

                                <span className="timeline-dot"></span>

                                <div>

                                    <strong>
                                        ورود به حساب
                                    </strong>

                                    <p>
                                        مشتری وارد حساب کاربری خود شد.
                                    </p>

                                    <small>
                                        امروز، ۱۸:۱۰
                                    </small>

                                </div>

                            </div>


                            <div className="customer-activity-item">

                                <span className="timeline-dot"></span>

                                <div>

                                    <strong>
                                        ثبت نظر
                                    </strong>

                                    <p>
                                        برای محصول «کفش اسپرت مشکی» نظر ثبت کرد.
                                    </p>

                                    <small>
                                        ۱۸ مرداد
                                    </small>

                                </div>

                            </div>

                        </div>

                    </section>

                </div>


                {/* <!-- Sidebar --> */}
                <aside className="customer-profile-sidebar">

                    {/* <!-- Contact --> */}
                    <section className="form-card">

                        <div className="form-card-header">
                            <h2>اطلاعات تماس</h2>
                        </div>

                        <div className="customer-info-list">

                            <div>
                                <span>شماره موبایل</span>
                                <strong>0912***4587</strong>
                            </div>

                            <div>
                                <span>ایمیل</span>
                                <strong>mohammad@example.com</strong>
                            </div>

                        </div>

                    </section>


                    {/* <!-- Address --> */}
                    <section className="form-card">

                        <div className="form-card-header">
                            <h2>آدرس اصلی</h2>
                        </div>

                        <address className="customer-address">

                            مازندران، ساری،
                            خیابان فرهنگ،
                            کوچه ۱۲،
                            پلاک ۲۴

                            <span>
                                کد پستی: ۴۸۱۳۷۱۲۳۴۵
                            </span>

                        </address>

                    </section>


                    {/* <!-- Customer Info --> */}
                    <section className="form-card">

                        <div className="form-card-header">
                            <h2>اطلاعات حساب</h2>
                        </div>

                        <div className="customer-info-list">

                            <div>
                                <span>شناسه مشتری</span>
                                <strong>#CUS-2841</strong>
                            </div>

                            <div>
                                <span>تاریخ عضویت</span>
                                <strong>۱۲ اردیبهشت ۱۴۰۵</strong>
                            </div>

                            <div>
                                <span>آخرین ورود</span>
                                <strong>امروز، ۱۸:۱۰</strong>
                            </div>

                        </div>

                    </section>


                    {/* <!-- Actions --> */}
                    <section className="form-card">

                        <div className="form-card-header">
                            <h2>عملیات</h2>
                        </div>

                        <div className="customer-actions">

                            <button
                                type="button"
                                className="primary-button"
                            >
                                ارسال پیام
                            </button>

                            <button
                                type="button"
                                className="secondary-button"
                            >
                                غیرفعال کردن مشتری
                            </button>

                        </div>

                    </section>

                </aside>

            </div>

    </>
  );
}