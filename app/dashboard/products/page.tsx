export default function ProductList(){
    return(
        <>
                        {/* <!-- Page Header --> */}
                <section className="products-page-header">

                    <div>
                        <h2>لیست محصولات</h2>
                        <p>محصولات فروشگاه را مدیریت کنید.</p>
                    </div>

                    <a href="products/add" className="primary-button">
                        <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M12 5v14"></path>
                            <path d="M5 12h14"></path>
                        </svg>

                        افزودن محصول
                    </a>

                </section>

                {/* <!-- Product Stats --> */}
                <section className="product-stats" aria-label="آمار محصولات">

                    <article className="product-stat">
                        <span>کل محصولات</span>
                        <strong>۲۴۸</strong>
                    </article>

                    <article className="product-stat">
                        <span>محصولات فعال</span>
                        <strong>۲۲۱</strong>
                    </article>

                    <article className="product-stat">
                        <span>ناموجود</span>
                        <strong>۱۲</strong>
                    </article>

                    <article className="product-stat">
                        <span>پیش‌نویس</span>
                        <strong>۱۵</strong>
                    </article>

                </section>

                {/* <!-- Filters --> */}
                <section className="products-panel">

                    <div className="products-toolbar">

                        <div className="products-search">
                            <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                                <circle cx="11" cy="11" r="7"></circle>
                                <path d="m20 20-4-4"></path>
                            </svg>

                            <input
                                type="search"
                                placeholder="جستجوی محصول..."
                                aria-label="جستجوی محصول"
                            />
                        </div>

                        <div className="products-filters">

                            <select aria-label="دسته‌بندی">
                                <option value="">همه دسته‌بندی‌ها</option>
                                <option value="shoes">کفش</option>
                                <option value="clothes">پوشاک</option>
                                <option value="accessories">اکسسوری</option>
                            </select>

                            <select aria-label="وضعیت">
                                <option value="">همه وضعیت‌ها</option>
                                <option value="active">فعال</option>
                                <option value="draft">پیش‌نویس</option>
                                <option value="out-of-stock">ناموجود</option>
                            </select>

                        </div>

                    </div>

                    {/* <!-- Products Table --> */}
                    <div className="products-table-wrapper">

                        <table className="products-table">

                            <thead>
                                <tr>
                                    <th>
                                        <input
                                            type="checkbox"
                                            aria-label="انتخاب همه محصولات"
                                        />
                                    </th>

                                    <th>محصول</th>
                                    <th>دسته‌بندی</th>
                                    <th>قیمت</th>
                                    <th>موجودی</th>
                                    <th>وضعیت</th>
                                    <th>تاریخ</th>
                                    <th>عملیات</th>
                                </tr>
                            </thead>

                            <tbody>

                                <tr>

                                    <td>
                                        <input
                                            type="checkbox"
                                            aria-label="انتخاب کفش اسپرت مشکی"
                                        />
                                    </td>

                                    <td>
                                        <div className="admin-product">

                                            <div className="admin-product-image">
                                                <img
                                                    src="../../assets/images/products/shoe-1.jpg"
                                                    alt="کفش اسپرت مشکی"
                                                />
                                            </div>

                                            <div>
                                                <strong>کفش اسپرت مشکی</strong>
                                                <span>SH-001</span>
                                            </div>

                                        </div>
                                    </td>

                                    <td>کفش</td>

                                    <td>۴,۸۵۰,۰۰۰ تومان</td>

                                    <td>
                                        <span className="stock-count stock-ok">
                                            ۲۴ عدد
                                        </span>
                                    </td>

                                    <td>
                                        <span className="product-status status-active">
                                            فعال
                                        </span>
                                    </td>

                                    <td>۱۴۰۵/۰۵/۲۸</td>

                                    <td>
                                        <div className="table-actions">

                                            <a
                                                href="edit.html"
                                                className="table-action"
                                                aria-label="ویرایش محصول"
                                            >
                                                <svg className="icon" viewBox="0 0 24 24">
                                                    <path d="M12 20h9"></path>
                                                    <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z"></path>
                                                </svg>
                                            </a>

                                            <button
                                                type="button"
                                                className="table-action table-action-danger"
                                                aria-label="حذف محصول"
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

                                <tr>

                                    <td>
                                        <input
                                            type="checkbox"
                                            aria-label="انتخاب کتانی سفید"
                                        />
                                    </td>

                                    <td>
                                        <div className="admin-product">

                                            <div className="admin-product-image">
                                                <img
                                                    src="../../assets/images/products/shoe-2.jpg"
                                                    alt="کتانی سفید"
                                                />
                                            </div>

                                            <div>
                                                <strong>کتانی سفید</strong>
                                                <span>SH-014</span>
                                            </div>

                                        </div>
                                    </td>

                                    <td>کفش</td>

                                    <td>۳,۹۰۰,۰۰۰ تومان</td>

                                    <td>
                                        <span className="stock-count stock-low">
                                            ۷ عدد
                                        </span>
                                    </td>

                                    <td>
                                        <span className="product-status status-active">
                                            فعال
                                        </span>
                                    </td>

                                    <td>۱۴۰۵/۰۵/۲۵</td>

                                    <td>
                                        <div className="table-actions">

                                            <a href="edit.html" className="table-action">
                                                <svg className="icon" viewBox="0 0 24 24">
                                                    <path d="M12 20h9"></path>
                                                    <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z"></path>
                                                </svg>
                                            </a>

                                            <button
                                                type="button"
                                                className="table-action table-action-danger"
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

                                <tr>

                                    <td>
                                        <input
                                            type="checkbox"
                                            aria-label="انتخاب هودی ساده"
                                        />
                                    </td>

                                    <td>
                                        <div className="admin-product">

                                            <div className="admin-product-image">
                                                <img
                                                    src="../../assets/images/products/shirt-2.jpg"
                                                    alt="هودی ساده"
                                                />
                                            </div>

                                            <div>
                                                <strong>هودی ساده</strong>
                                                <span>HD-011</span>
                                            </div>

                                        </div>
                                    </td>

                                    <td>پوشاک</td>

                                    <td>۲,۷۵۰,۰۰۰ تومان</td>

                                    <td>
                                        <span className="stock-count stock-out">
                                            ناموجود
                                        </span>
                                    </td>

                                    <td>
                                        <span className="product-status status-out">
                                            ناموجود
                                        </span>
                                    </td>

                                    <td>۱۴۰۵/۰۵/۲۰</td>

                                    <td>
                                        <div className="table-actions">

                                            <a href="edit.html" className="table-action">
                                                <svg className="icon" viewBox="0 0 24 24">
                                                    <path d="M12 20h9"></path>
                                                    <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z"></path>
                                                </svg>
                                            </a>

                                            <button
                                                type="button"
                                                className="table-action table-action-danger"
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
                            نمایش ۱ تا ۳ از ۲۴۸ محصول
                        </span>

                        <div className="pagination-actions">

                            <button type="button" disabled>
                                قبلی
                            </button>

                            <button type="button" className="pagination-active">
                                ۱
                            </button>

                            <button type="button">
                                ۲
                            </button>

                            <button type="button">
                                ۳
                            </button>

                            <span>...</span>

                            <button type="button">
                                ۲۵
                            </button>

                            <button type="button">
                                بعدی
                            </button>

                        </div>

                    </div>

                </section>
        </>
    )
}