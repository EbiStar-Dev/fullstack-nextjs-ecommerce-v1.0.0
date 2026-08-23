export default function OrderList() {
  return (
    <>
      {/* <!-- Page Header --> */}
      <section className="products-page-header">
        <div>
          <h2>همه سفارش‌ها</h2>
          <p>مشاهده و مدیریت تمام سفارش‌های فروشگاه</p>
        </div>
      </section>

      {/* <!-- Order Stats --> */}
      <section className="product-stats order-stats">
        <article className="product-stat">
          <span>کل سفارش‌ها</span>
          <strong>۱,۲۴۸</strong>
        </article>

        <article className="product-stat">
          <span>در انتظار پردازش</span>
          <strong>۳۶</strong>
        </article>

        <article className="product-stat">
          <span>ارسال شده</span>
          <strong>۱۸۲</strong>
        </article>

        <article className="product-stat">
          <span>لغو شده</span>
          <strong>۲۴</strong>
        </article>
      </section>

      {/* <!-- Orders --> */}
      <section className="products-panel">
        {/* <!-- Toolbar --> */}
        <div className="products-toolbar">
          <div className="products-search">
            <svg className="icon" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="7"></circle>
              <path d="m20 20-4-4"></path>
            </svg>

            <input
              type="search"
              placeholder="جستجوی شماره سفارش یا مشتری..."
              aria-label="جستجوی سفارش"
            />
          </div>

          <div className="products-filters">
            <select aria-label="وضعیت سفارش">
              <option value="">همه وضعیت‌ها</option>

              <option value="pending">در انتظار پردازش</option>

              <option value="processing">در حال پردازش</option>

              <option value="shipped">ارسال شده</option>

              <option value="completed">تکمیل شده</option>

              <option value="cancelled">لغو شده</option>
            </select>

            <select aria-label="بازه زمانی">
              <option value="">همه تاریخ‌ها</option>

              <option value="today">امروز</option>

              <option value="week">این هفته</option>

              <option value="month">این ماه</option>
            </select>
          </div>
        </div>

        {/* <!-- Table --> */}
        <div className="products-table-wrapper">
          <table className="products-table orders-table">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" aria-label="انتخاب همه سفارش‌ها" />
                </th>

                <th>سفارش</th>
                <th>مشتری</th>
                <th>مبلغ</th>
                <th>پرداخت</th>
                <th>وضعیت</th>
                <th>تاریخ</th>
                <th>عملیات</th>
              </tr>
            </thead>

            <tbody>
              {/* <!-- Order --> */}
              <tr>
                <td>
                  <input type="checkbox" aria-label="انتخاب سفارش 1048" />
                </td>

                <td>
                  <a href="/dashboard/orders/1" className="order-number">
                    #1048
                  </a>
                </td>

                <td>
                  <div className="customer-cell">
                    <span className="customer-avatar">م</span>

                    <div className="customer-details">
                      <strong>محمد رضایی</strong>
                      <span>0912***4587</span>
                    </div>
                  </div>
                </td>

                <td>۴,۸۵۰,۰۰۰ تومان</td>

                <td>
                  <span className="payment-status payment-paid">
                    پرداخت شده
                  </span>
                </td>

                <td>
                  <span className="order-status status-success">تکمیل شده</span>
                </td>

                <td>امروز، ۱۸:۳۰</td>

                <td>
                  <a
                    href="/dashboard/orders/1"
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

              {/* <!-- Order --> */}
              <tr>
                <td>
                  <input type="checkbox" aria-label="انتخاب سفارش 1047" />
                </td>

                <td>
                  <a href="/dashboard/orders/1" className="order-number">
                    #1047
                  </a>
                </td>

                <td>
                  <div className="customer-cell">
                    <span className="customer-avatar">ع</span>

                    <div className="customer-details">
                      <strong>علی کریمی</strong>
                      <span>0935***1248</span>
                    </div>
                  </div>
                </td>

                <td>۲,۳۰۰,۰۰۰ تومان</td>

                <td>
                  <span className="payment-status payment-paid">
                    پرداخت شده
                  </span>
                </td>

                <td>
                  <span className="order-status status-warning">
                    در حال پردازش
                  </span>
                </td>

                <td>امروز، ۱۷:۴۵</td>

                <td>
                  <a
                    href="/dashboard/orders/1"
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

              {/* <!-- Order --> */}
              <tr>
                <td>
                  <input type="checkbox" aria-label="انتخاب سفارش 1046" />
                </td>

                <td>
                  <a href="/dashboard/orders/1" className="order-number">
                    #1046
                  </a>
                </td>

                <td>
                  <div className="customer-cell">
                    <span className="customer-avatar">س</span>

                    <div className="customer-details">
                      <strong>سارا احمدی</strong>
                      <span>0911***9632</span>
                    </div>
                  </div>
                </td>

                <td>۷,۱۲۰,۰۰۰ تومان</td>

                <td>
                  <span className="payment-status payment-paid">
                    پرداخت شده
                  </span>
                </td>

                <td>
                  <span className="order-status status-info">ارسال شده</span>
                </td>

                <td>امروز، ۱۵:۲۰</td>

                <td>
                  <a
                    href="/dashboard/orders/1"
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

              {/* <!-- Order --> */}
              <tr>
                <td>
                  <input type="checkbox" aria-label="انتخاب سفارش 1045" />
                </td>

                <td>
                  <a href="/dashboard/orders/1" className="order-number">
                    #1045
                  </a>
                </td>

                <td>
                  <div className="customer-cell">
                    <span className="customer-avatar">ح</span>

                    <div className="customer-details">
                      <strong>حسین مرادی</strong>
                      <span>0921***7812</span>
                    </div>
                  </div>
                </td>

                <td>۱,۹۸۰,۰۰۰ تومان</td>

                <td>
                  <span className="payment-status payment-failed">ناموفق</span>
                </td>

                <td>
                  <span className="order-status status-danger">لغو شده</span>
                </td>

                <td>امروز، ۱۳:۱۰</td>

                <td>
                  <a
                    href="/dashboard/orders/1"
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

        {/* <!-- Pagination --> */}
        <div className="products-pagination">
          <span>نمایش ۱ تا ۴ از ۱,۲۴۸ سفارش</span>

          <div className="pagination-actions">
            <button type="button" disabled={""}>
              قبلی
            </button>

            <button type="button" className="pagination-active">
              ۱
            </button>

            <button type="button">۲</button>

            <button type="button">۳</button>

            <span>...</span>

            <button type="button">۱۲۵</button>

            <button type="button">بعدی</button>
          </div>
        </div>
      </section>
    </>
  );
}
