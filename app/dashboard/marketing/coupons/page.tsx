export default function Coupons() {
  return (
    <>
                {/* <!-- Page Header --> */}
            <section className="products-page-header">

                <div>

                    <h2>
                        کدهای تخفیف
                    </h2>

                    <p>
                        ایجاد، مدیریت و بررسی عملکرد کدهای تخفیف
                    </p>

                </div>


                <button
                    type="button"
                    className="primary-button"
                >
                    + ایجاد کد تخفیف
                </button>

            </section>


            {/* <!-- Stats --> */}
            <section className="product-stats coupon-stats">

                <article className="product-stat">
                    <span>کل کدها</span>
                    <strong>۳۸</strong>
                </article>

                <article className="product-stat">
                    <span>فعال</span>
                    <strong>۱۲</strong>
                </article>

                <article className="product-stat">
                    <span>استفاده شده</span>
                    <strong>۸۴۶</strong>
                </article>

                <article className="product-stat">
                    <span>مجموع تخفیف</span>
                    <strong>۱۲۸M</strong>
                </article>

            </section>


            {/* <!-- Coupons --> */}
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
                            placeholder="جستجوی کد تخفیف..."
                            aria-label="جستجوی کد تخفیف"
                        />

                    </div>


                    <div className="products-filters">

                        <select aria-label="وضعیت کد">

                            <option value="">
                                همه وضعیت‌ها
                            </option>

                            <option value="active">
                                فعال
                            </option>

                            <option value="expired">
                                منقضی شده
                            </option>

                            <option value="disabled">
                                غیرفعال
                            </option>

                        </select>


                        <select aria-label="نوع تخفیف">

                            <option value="">
                                همه انواع
                            </option>

                            <option value="percent">
                                درصدی
                            </option>

                            <option value="fixed">
                                مبلغ ثابت
                            </option>

                        </select>

                    </div>

                </div>


                {/* <!-- Table --> */}
                <div className="products-table-wrapper">

                    <table className="products-table coupons-table">

                        <thead>

                            <tr>

                                <th>
                                    <input
                                        type="checkbox"
                                        aria-label="انتخاب همه کدها"
                                    />
                                </th>

                                <th>
                                    کد تخفیف
                                </th>

                                <th>
                                    نوع تخفیف
                                </th>

                                <th>
                                    مقدار
                                </th>

                                <th>
                                    استفاده
                                </th>

                                <th>
                                    تاریخ انقضا
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

                            {/* <!-- Coupon --> */}
                            <tr>

                                <td>
                                    <input
                                        type="checkbox"
                                        aria-label="انتخاب NEW20"
                                    />
                                </td>

                                <td>

                                    <div className="coupon-code">
                                        NEW20
                                    </div>

                                    <small>
                                        تخفیف مشتریان جدید
                                    </small>

                                </td>

                                <td>
                                    درصدی
                                </td>

                                <td>
                                    ۲۰٪
                                </td>

                                <td>
                                    ۱۸۴ / ۵۰۰
                                </td>

                                <td>
                                    ۱۴۰۵/۰۶/۱۵
                                </td>

                                <td>
                                    <span className="coupon-status coupon-active">
                                        فعال
                                    </span>
                                </td>

                                <td>

                                    <div className="table-actions">

                                        <button
                                            type="button"
                                            className="table-action"
                                            aria-label="ویرایش کد"
                                        >
                                            <svg className="icon" viewBox="0 0 24 24">
                                                <path d="M12 20h9"></path>
                                                <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z"></path>
                                            </svg>
                                        </button>

                                        <button
                                            type="button"
                                            className="table-action"
                                            aria-label="حذف کد"
                                        >
                                            <svg className="icon" viewBox="0 0 24 24">
                                                <path d="M3 6h18"></path>
                                                <path d="M8 6V4h8v2"></path>
                                                <path d="M19 6l-1 15H6L5 6"></path>
                                            </svg>
                                        </button>

                                    </div>

                                </td>

                            </tr>


                            {/* <!-- Coupon --> */}
                            <tr>

                                <td>
                                    <input
                                        type="checkbox"
                                        aria-label="انتخاب SUMMER15"
                                    />
                                </td>

                                <td>

                                    <div className="coupon-code">
                                        SUMMER15
                                    </div>

                                    <small>
                                        کمپین تابستانه
                                    </small>

                                </td>

                                <td>
                                    درصدی
                                </td>

                                <td>
                                    ۱۵٪
                                </td>

                                <td>
                                    ۳۲۱ / ۱۰۰۰
                                </td>

                                <td>
                                    ۱۴۰۵/۰۶/۳۱
                                </td>

                                <td>
                                    <span className="coupon-status coupon-active">
                                        فعال
                                    </span>
                                </td>

                                <td>

                                    <div className="table-actions">

                                        <button
                                            type="button"
                                            className="table-action"
                                            aria-label="ویرایش کد"
                                        >
                                            <svg className="icon" viewBox="0 0 24 24">
                                                <path d="M12 20h9"></path>
                                                <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z"></path>
                                            </svg>
                                        </button>

                                        <button
                                            type="button"
                                            className="table-action"
                                            aria-label="حذف کد"
                                        >
                                            <svg className="icon" viewBox="0 0 24 24">
                                                <path d="M3 6h18"></path>
                                                <path d="M8 6V4h8v2"></path>
                                                <path d="M19 6l-1 15H6L5 6"></path>
                                            </svg>
                                        </button>

                                    </div>

                                </td>

                            </tr>


                            {/* <!-- Coupon --> */}
                            <tr>

                                <td>
                                    <input
                                        type="checkbox"
                                        aria-label="انتخاب VIP500"
                                    />
                                </td>

                                <td>

                                    <div className="coupon-code">
                                        VIP500
                                    </div>

                                    <small>
                                        مشتریان ویژه
                                    </small>

                                </td>

                                <td>
                                    مبلغ ثابت
                                </td>

                                <td>
                                    ۵۰۰,۰۰۰ تومان
                                </td>

                                <td>
                                    ۷۸ / ۱۰۰
                                </td>

                                <td>
                                    ۱۴۰۵/۰۵/۳۰
                                </td>

                                <td>
                                    <span className="coupon-status coupon-expired">
                                        منقضی شده
                                    </span>
                                </td>

                                <td>

                                    <div className="table-actions">

                                        <button
                                            type="button"
                                            className="table-action"
                                            aria-label="ویرایش کد"
                                        >
                                            <svg className="icon" viewBox="0 0 24 24">
                                                <path d="M12 20h9"></path>
                                                <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z"></path>
                                            </svg>
                                        </button>

                                        <button
                                            type="button"
                                            className="table-action"
                                            aria-label="حذف کد"
                                        >
                                            <svg className="icon" viewBox="0 0 24 24">
                                                <path d="M3 6h18"></path>
                                                <path d="M8 6V4h8v2"></path>
                                                <path d="M19 6l-1 15H6L5 6"></path>
                                            </svg>
                                        </button>

                                    </div>

                                </td>

                            </tr>


                            {/* <!-- Coupon --> */}
                            <tr>

                                <td>
                                    <input
                                        type="checkbox"
                                        aria-label="انتخاب FIRSTBUY"
                                    />
                                </td>

                                <td>

                                    <div className="coupon-code">
                                        FIRSTBUY
                                    </div>

                                    <small>
                                        اولین خرید
                                    </small>

                                </td>

                                <td>
                                    درصدی
                                </td>

                                <td>
                                    ۱۰٪
                                </td>

                                <td>
                                    ۲۶۳ / ۳۰۰
                                </td>

                                <td>
                                    ۱۴۰۵/۰۷/۱۰
                                </td>

                                <td>
                                    <span className="coupon-status coupon-disabled">
                                        غیرفعال
                                    </span>
                                </td>

                                <td>

                                    <div className="table-actions">

                                        <button
                                            type="button"
                                            className="table-action"
                                            aria-label="ویرایش کد"
                                        >
                                            <svg className="icon" viewBox="0 0 24 24">
                                                <path d="M12 20h9"></path>
                                                <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z"></path>
                                            </svg>
                                        </button>

                                        <button
                                            type="button"
                                            className="table-action"
                                            aria-label="حذف کد"
                                        >
                                            <svg className="icon" viewBox="0 0 24 24">
                                                <path d="M3 6h18"></path>
                                                <path d="M8 6V4h8v2"></path>
                                                <path d="M19 6l-1 15H6L5 6"></path>
                                            </svg>
                                        </button>

                                    </div>

                                </td>

                            </tr>

                        </tbody>

                    </table>

                </div>


                {/* <!-- Pagination --> */}
                <div className="products-pagination">

                    <span>
                        نمایش ۱ تا ۴ از ۳۸ کد تخفیف
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

                        <button type="button">
                            بعدی
                        </button>

                    </div>

                </div>

            </section>
    </>
  );
}