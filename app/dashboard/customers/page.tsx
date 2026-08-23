export default function CustomerList() {
  return (
    <>
                {/* <!-- Page Header --> */}
            <section className="products-page-header">

                <div>

                    <h2>
                        همه مشتریان
                    </h2>

                    <p>
                        مشاهده و مدیریت مشتریان فروشگاه
                    </p>

                </div>

            </section>


            {/* <!-- Customer Stats --> */}
            <section className="product-stats customer-stats">

                <article className="product-stat">
                    <span>کل مشتریان</span>
                    <strong>۸,۴۲۶</strong>
                </article>

                <article className="product-stat">
                    <span>مشتریان فعال</span>
                    <strong>۷,۹۸۴</strong>
                </article>

                <article className="product-stat">
                    <span>مشتریان جدید</span>
                    <strong>۲۸۶</strong>
                </article>

                <article className="product-stat">
                    <span>مشتریان وفادار</span>
                    <strong>۶۴۸</strong>
                </article>

            </section>


            {/* <!-- Customers --> */}
            <section className="products-panel">

                {/* <!-- Toolbar --> */}
                <div className="products-toolbar">

                    <div className="products-search">

                        <svg
                            className="icon"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                cx="11"
                                cy="11"
                                r="7"
                            ></circle>

                            <path d="m20 20-4-4"></path>
                        </svg>

                        <input
                            type="search"
                            placeholder="جستجوی نام، ایمیل یا شماره..."
                            aria-label="جستجوی مشتری"
                        />

                    </div>


                    <div className="products-filters">

                        <select aria-label="وضعیت مشتری">

                            <option value="">
                                همه وضعیت‌ها
                            </option>

                            <option value="active">
                                فعال
                            </option>

                            <option value="inactive">
                                غیرفعال
                            </option>

                        </select>


                        <select aria-label="مرتب‌سازی">

                            <option value="newest">
                                جدیدترین
                            </option>

                            <option value="orders">
                                بیشترین سفارش
                            </option>

                            <option value="spent">
                                بیشترین خرید
                            </option>

                        </select>

                    </div>

                </div>


                {/* <!-- Table --> */}
                <div className="products-table-wrapper">

                    <table className="products-table customers-table">

                        <thead>

                            <tr>

                                <th>
                                    <input
                                        type="checkbox"
                                        aria-label="انتخاب همه مشتریان"
                                    />
                                </th>

                                <th>
                                    مشتری
                                </th>

                                <th>
                                    تماس
                                </th>

                                <th>
                                    سفارش‌ها
                                </th>

                                <th>
                                    مجموع خرید
                                </th>

                                <th>
                                    آخرین سفارش
                                </th>

                                <th>
                                    وضعیت
                                </th>

                                <th>
                                    عملیات
                                </th>

                            </tr>

                        </thead>


                        <tbody>

                            {/* <!-- Customer --> */}
                            <tr>

                                <td>
                                    <input
                                        type="checkbox"
                                        aria-label="انتخاب محمد رضایی"
                                    />
                                </td>


                                <td>

                                    <div className="customer-cell">

                                        <span className="customer-avatar">
                                            م
                                        </span>

                                        <div className="customer-details">

                                            <strong>
                                                محمد رضایی
                                            </strong>

                                            <span>
                                                عضو از ۱۴۰۵/۰۲/۱۲
                                            </span>

                                        </div>

                                    </div>

                                </td>


                                <td>

                                    <div className="customer-contact">

                                        <span>
                                            0912***4587
                                        </span>

                                        <span>
                                            mohammad@example.com
                                        </span>

                                    </div>

                                </td>


                                <td>
                                    ۲۴ سفارش
                                </td>


                                <td>
                                    ۴۸,۵۰۰,۰۰۰ تومان
                                </td>


                                <td>
                                    امروز
                                </td>


                                <td>

                                    <span className="customer-status customer-active">
                                        فعال
                                    </span>

                                </td>


                                <td>

                                    <a
                                        href="/dashboard/customers/1"
                                        className="table-action"
                                        aria-label="مشاهده مشتری"
                                    >

                                        <svg
                                            className="icon"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                                            <circle
                                                cx="12"
                                                cy="12"
                                                r="3"
                                            ></circle>
                                        </svg>

                                    </a>

                                </td>

                            </tr>


                            {/* <!-- Customer --> */}
                            <tr>

                                <td>
                                    <input
                                        type="checkbox"
                                        aria-label="انتخاب علی کریمی"
                                    />
                                </td>


                                <td>

                                    <div className="customer-cell">

                                        <span className="customer-avatar">
                                            ع
                                        </span>

                                        <div className="customer-details">

                                            <strong>
                                                علی کریمی
                                            </strong>

                                            <span>
                                                عضو از ۱۴۰۵/۰۳/۰۵
                                            </span>

                                        </div>

                                    </div>

                                </td>


                                <td>

                                    <div className="customer-contact">

                                        <span>
                                            0935***1248
                                        </span>

                                        <span>
                                            ali@example.com
                                        </span>

                                    </div>

                                </td>


                                <td>
                                    ۱۲ سفارش
                                </td>


                                <td>
                                    ۲۲,۸۰۰,۰۰۰ تومان
                                </td>


                                <td>
                                    امروز
                                </td>


                                <td>

                                    <span className="customer-status customer-active">
                                        فعال
                                    </span>

                                </td>


                                <td>

                                    <a
                                        href="/dashboard/customers/1"
                                        className="table-action"
                                        aria-label="مشاهده مشتری"
                                    >

                                        <svg
                                            className="icon"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                                            <circle
                                                cx="12"
                                                cy="12"
                                                r="3"
                                            ></circle>
                                        </svg>

                                    </a>

                                </td>

                            </tr>


                            {/* <!-- Customer --> */}
                            <tr>

                                <td>
                                    <input
                                        type="checkbox"
                                        aria-label="انتخاب سارا احمدی"
                                    />
                                </td>


                                <td>

                                    <div className="customer-cell">

                                        <span className="customer-avatar">
                                            س
                                        </span>

                                        <div className="customer-details">

                                            <strong>
                                                سارا احمدی
                                            </strong>

                                            <span>
                                                عضو از ۱۴۰۵/۰۴/۱۸
                                            </span>

                                        </div>

                                    </div>

                                </td>


                                <td>

                                    <div className="customer-contact">

                                        <span>
                                            0911***9632
                                        </span>

                                        <span>
                                            sara@example.com
                                        </span>

                                    </div>

                                </td>


                                <td>
                                    ۸ سفارش
                                </td>


                                <td>
                                    ۱۵,۴۰۰,۰۰۰ تومان
                                </td>


                                <td>
                                    دیروز
                                </td>


                                <td>

                                    <span className="customer-status customer-active">
                                        فعال
                                    </span>

                                </td>


                                <td>

                                    <a
                                        href="/dashboard/customers/1"
                                        className="table-action"
                                        aria-label="مشاهده مشتری"
                                    >

                                        <svg
                                            className="icon"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                                            <circle
                                                cx="12"
                                                cy="12"
                                                r="3"
                                            ></circle>
                                        </svg>

                                    </a>

                                </td>

                            </tr>


                            {/* <!-- Customer --> */}
                            <tr>

                                <td>
                                    <input
                                        type="checkbox"
                                        aria-label="انتخاب حسین مرادی"
                                    />
                                </td>


                                <td>

                                    <div className="customer-cell">

                                        <span className="customer-avatar">
                                            ح
                                        </span>

                                        <div className="customer-details">

                                            <strong>
                                                حسین مرادی
                                            </strong>

                                            <span>
                                                عضو از ۱۴۰۵/۰۵/۰۲
                                            </span>

                                        </div>

                                    </div>

                                </td>


                                <td>

                                    <div className="customer-contact">

                                        <span>
                                            0921***7812
                                        </span>

                                        <span>
                                            hossein@example.com
                                        </span>

                                    </div>

                                </td>


                                <td>
                                    ۳ سفارش
                                </td>


                                <td>
                                    ۵,۶۰۰,۰۰۰ تومان
                                </td>


                                <td>
                                    ۳ روز پیش
                                </td>


                                <td>

                                    <span className="customer-status customer-inactive">
                                        غیرفعال
                                    </span>

                                </td>


                                <td>

                                    <a
                                        href="/dashboard/customers/1"
                                        className="table-action"
                                        aria-label="مشاهده مشتری"
                                    >

                                        <svg
                                            className="icon"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                                            <circle
                                                cx="12"
                                                cy="12"
                                                r="3"
                                            ></circle>
                                        </svg>

                                    </a>

                                </td>

                            </tr>

                        </tbody>

                    </table>

                </div>


                {/* <!-- Pagination --> */}
                <div className="products-pagination">

                    <span>
                        نمایش ۱ تا ۴ از ۸,۴۲۶ مشتری
                    </span>

                    <div className="pagination-actions">

                        <button
                            type="button"
                            disabled
                        >
                            قبلی
                        </button>

                        <button
                            type="button"
                            className="pagination-active"
                        >
                            ۱
                        </button>

                        <button type="button">
                            ۲
                        </button>

                        <button type="button">
                            ۳
                        </button>

                        <span>
                            ...
                        </span>

                        <button type="button">
                            ۲۱۱
                        </button>

                        <button type="button">
                            بعدی
                        </button>

                    </div>

                </div>

            </section>

    </>
  );
}