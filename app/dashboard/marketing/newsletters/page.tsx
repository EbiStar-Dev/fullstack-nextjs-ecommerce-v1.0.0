export default function Newsletters() {
  return (
   <>
               {/* <!-- Page Header --> */}
            <section className="products-page-header">

                <div>

                    <h2>
                        کمپین‌های خبرنامه
                    </h2>

                    <p>
                        ایجاد و مدیریت کمپین‌های ایمیلی فروشگاه
                    </p>

                </div>


                <button
                    type="button"
                    className="primary-button"
                >
                    + ایجاد کمپین
                </button>

            </section>


            {/* <!-- Stats --> */}
            <section className="product-stats newsletter-stats">

                <article className="product-stat">
                    <span>اعضای خبرنامه</span>
                    <strong>۱۲,۸۴۰</strong>
                </article>

                <article className="product-stat">
                    <span>کمپین‌های ارسال‌شده</span>
                    <strong>۲۴</strong>
                </article>

                <article className="product-stat">
                    <span>میانگین باز شدن</span>
                    <strong>۳۸.۶٪</strong>
                </article>

                <article className="product-stat">
                    <span>میانگین کلیک</span>
                    <strong>۱۲.۴٪</strong>
                </article>

            </section>


            {/* <!-- Campaigns --> */}
            <section className="products-panel">

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
                            placeholder="جستجوی کمپین..."
                            aria-label="جستجوی کمپین"
                        />

                    </div>


                    <div className="products-filters">

                        <select aria-label="وضعیت کمپین">

                            <option value="">
                                همه وضعیت‌ها
                            </option>

                            <option value="sent">
                                ارسال‌شده
                            </option>

                            <option value="scheduled">
                                زمان‌بندی‌شده
                            </option>

                            <option value="draft">
                                پیش‌نویس
                            </option>

                        </select>

                    </div>

                </div>


                {/* <!-- Campaign Table --> */}
                <div className="products-table-wrapper">

                    <table className="products-table newsletters-table">

                        <thead>

                            <tr>

                                <th>
                                    کمپین
                                </th>

                                <th>
                                    مخاطبان
                                </th>

                                <th>
                                    تاریخ ارسال
                                </th>

                                <th>
                                    باز شدن
                                </th>

                                <th>
                                    کلیک
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

                            <tr>

                                <td>

                                    <div className="campaign-cell">

                                        <span className="campaign-icon">
                                            ✉
                                        </span>

                                        <div>
                                            <strong>
                                                تخفیف ویژه آخر هفته
                                            </strong>

                                            <small>
                                                پیشنهاد ویژه برای مشتریان
                                            </small>
                                        </div>

                                    </div>

                                </td>

                                <td>
                                    ۱۲,۸۴۰
                                </td>

                                <td>
                                    امروز، ۱۰:۳۰
                                </td>

                                <td>
                                    ۴۲.۸٪
                                </td>

                                <td>
                                    ۱۵.۶٪
                                </td>

                                <td>

                                    <span className="newsletter-status newsletter-sent">
                                        ارسال‌شده
                                    </span>

                                </td>

                                <td>

                                    <div className="table-actions">

                                        <button
                                            type="button"
                                            className="table-action"
                                            aria-label="مشاهده کمپین"
                                        >
                                            <svg className="icon" viewBox="0 0 24 24">
                                                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                                                <circle cx="12" cy="12" r="3"></circle>
                                            </svg>
                                        </button>

                                        <button
                                            type="button"
                                            className="table-action"
                                            aria-label="گزینه‌های بیشتر"
                                        >
                                            <svg className="icon" viewBox="0 0 24 24">
                                                <circle cx="5" cy="12" r="1"></circle>
                                                <circle cx="12" cy="12" r="1"></circle>
                                                <circle cx="19" cy="12" r="1"></circle>
                                            </svg>
                                        </button>

                                    </div>

                                </td>

                            </tr>


                            <tr>

                                <td>

                                    <div className="campaign-cell">

                                        <span className="campaign-icon">
                                            ✉
                                        </span>

                                        <div>
                                            <strong>
                                                معرفی کالکشن جدید
                                            </strong>

                                            <small>
                                                محصولات جدید فصل
                                            </small>
                                        </div>

                                    </div>

                                </td>

                                <td>
                                    ۹,۶۴۰
                                </td>

                                <td>
                                    ۱۶ مرداد، ۱۸:۰۰
                                </td>

                                <td>
                                    ۳۶.۲٪
                                </td>

                                <td>
                                    ۱۰.۸٪
                                </td>

                                <td>

                                    <span className="newsletter-status newsletter-sent">
                                        ارسال‌شده
                                    </span>

                                </td>

                                <td>

                                    <div className="table-actions">

                                        <button
                                            type="button"
                                            className="table-action"
                                            aria-label="مشاهده کمپین"
                                        >
                                            <svg className="icon" viewBox="0 0 24 24">
                                                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                                                <circle cx="12" cy="12" r="3"></circle>
                                            </svg>
                                        </button>

                                        <button
                                            type="button"
                                            className="table-action"
                                            aria-label="گزینه‌های بیشتر"
                                        >
                                            <svg className="icon" viewBox="0 0 24 24">
                                                <circle cx="5" cy="12" r="1"></circle>
                                                <circle cx="12" cy="12" r="1"></circle>
                                                <circle cx="19" cy="12" r="1"></circle>
                                            </svg>
                                        </button>

                                    </div>

                                </td>

                            </tr>


                            <tr>

                                <td>

                                    <div className="campaign-cell">

                                        <span className="campaign-icon">
                                            ◷
                                        </span>

                                        <div>
                                            <strong>
                                                حراج پایان فصل
                                            </strong>

                                            <small>
                                                کمپین فروش پایان فصل
                                            </small>
                                        </div>

                                    </div>

                                </td>

                                <td>
                                    ۱۲,۸۴۰
                                </td>

                                <td>
                                    فردا، ۲۰:۰۰
                                </td>

                                <td>
                                    —
                                </td>

                                <td>
                                    —
                                </td>

                                <td>

                                    <span className="newsletter-status newsletter-scheduled">
                                        زمان‌بندی‌شده
                                    </span>

                                </td>

                                <td>

                                    <div className="table-actions">

                                        <button
                                            type="button"
                                            className="table-action"
                                            aria-label="ویرایش کمپین"
                                        >
                                            <svg className="icon" viewBox="0 0 24 24">
                                                <path d="M12 20h9"></path>
                                                <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z"></path>
                                            </svg>
                                        </button>

                                        <button
                                            type="button"
                                            className="table-action"
                                            aria-label="گزینه‌های بیشتر"
                                        >
                                            <svg className="icon" viewBox="0 0 24 24">
                                                <circle cx="5" cy="12" r="1"></circle>
                                                <circle cx="12" cy="12" r="1"></circle>
                                                <circle cx="19" cy="12" r="1"></circle>
                                            </svg>
                                        </button>

                                    </div>

                                </td>

                            </tr>


                            <tr>

                                <td>

                                    <div className="campaign-cell">

                                        <span className="campaign-icon">
                                            ✎
                                        </span>

                                        <div>
                                            <strong>
                                                خبرنامه مرداد
                                            </strong>

                                            <small>
                                                اخبار و مطالب فروشگاه
                                            </small>
                                        </div>

                                    </div>

                                </td>

                                <td>
                                    ۸,۲۱۰
                                </td>

                                <td>
                                    —
                                </td>

                                <td>
                                    —
                                </td>

                                <td>
                                    —
                                </td>

                                <td>

                                    <span className="newsletter-status newsletter-draft">
                                        پیش‌نویس
                                    </span>

                                </td>

                                <td>

                                    <div className="table-actions">

                                        <button
                                            type="button"
                                            className="table-action"
                                            aria-label="ویرایش کمپین"
                                        >
                                            <svg className="icon" viewBox="0 0 24 24">
                                                <path d="M12 20h9"></path>
                                                <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z"></path>
                                            </svg>
                                        </button>

                                        <button
                                            type="button"
                                            className="table-action"
                                            aria-label="گزینه‌های بیشتر"
                                        >
                                            <svg className="icon" viewBox="0 0 24 24">
                                                <circle cx="5" cy="12" r="1"></circle>
                                                <circle cx="12" cy="12" r="1"></circle>
                                                <circle cx="19" cy="12" r="1"></circle>
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
                        نمایش ۱ تا ۴ از ۲۴ کمپین
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