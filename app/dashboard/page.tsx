export default function Index(){
    return(
        <>
                  <section className="dashboard-stats" aria-label="آمار فروشگاه">
            <article className="stat-card">
              <div className="stat-card-header">
                <span className="stat-card-title">فروش امروز</span>

                <span className="stat-card-icon">
                  <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M6 2h12l1 5H5l1-5Z"></path>
                    <path d="M5 7v13h14V7"></path>
                    <path d="M9 11h6"></path>
                  </svg>
                </span>
              </div>

              <div className="stat-card-value">
                ۱۲,۵۰۰,۰۰۰
                <span>تومان</span>
              </div>

              <div className="stat-card-footer stat-positive">
                <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="m5 12 5 5L20 7"></path>
                </svg>
                <span>۱۲٪ بیشتر از دیروز</span>
              </div>
            </article>

            <article className="stat-card">
              <div className="stat-card-header">
                <span className="stat-card-title">فروش این ماه</span>

                <span className="stat-card-icon">
                  <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="3" y="4" width="18" height="17" rx="2"></rect>
                    <path d="M16 2v4"></path>
                    <path d="M8 2v4"></path>
                    <path d="M3 10h18"></path>
                  </svg>
                </span>
              </div>

              <div className="stat-card-value">
                ۳۸۵,۰۰۰,۰۰۰
                <span>تومان</span>
              </div>

              <div className="stat-card-footer stat-positive">
                <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="m5 12 5 5L20 7"></path>
                </svg>
                <span>۸٪ بیشتر از ماه قبل</span>
              </div>
            </article>

            <article className="stat-card">
              <div className="stat-card-header">
                <span className="stat-card-title">سفارش‌ها</span>

                <span className="stat-card-icon">
                  <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M3 6h18"></path>
                    <path d="M5 6v14h14V6"></path>
                    <path d="M8 6a4 4 0 0 1 8 0"></path>
                  </svg>
                </span>
              </div>

              <div className="stat-card-value">
                ۲۴۸
                <span>سفارش</span>
              </div>

              <div className="stat-card-footer stat-positive">
                <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="m5 12 5 5L20 7"></path>
                </svg>
                <span>۱۵٪ بیشتر از ماه قبل</span>
              </div>
            </article>

            <article className="stat-card">
              <div className="stat-card-header">
                <span className="stat-card-title">مشتریان</span>

                <span className="stat-card-icon">
                  <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="9" cy="8" r="3"></circle>
                    <path d="M3 20a6 6 0 0 1 12 0"></path>
                    <path d="M16 5a3 3 0 0 1 0 6"></path>
                    <path d="M18 14a5 5 0 0 1 3 6"></path>
                  </svg>
                </span>
              </div>

              <div className="stat-card-value">
                ۱,۸۴۲
                <span>مشتری</span>
              </div>

              <div className="stat-card-footer stat-positive">
                <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="m5 12 5 5L20 7"></path>
                </svg>
                <span>۶٪ رشد این ماه</span>
              </div>
            </article>
          </section>
          <section
            className="dashboard-section"
            aria-labelledby="sales-chart-title"
          >
            <div className="section-header">
              <div>
                <h2 id="sales-chart-title">گزارش فروش</h2>
                <p>میزان فروش در ۷ روز اخیر</p>
              </div>

              <select className="period-select" aria-label="بازه زمانی فروش">
                <option value="7">۷ روز اخیر</option>
                <option value="30">۳۰ روز اخیر</option>
                <option value="90">۹۰ روز اخیر</option>
              </select>
            </div>

            <div className="sales-chart">
              <div className="chart-y-axis" aria-hidden="true">
                <span>۲۰M</span>
                <span>۱۵M</span>
                <span>۱۰M</span>
                <span>۵M</span>
                <span>۰</span>
              </div>

              <div className="chart-area">
                <div className="chart-grid" aria-hidden="true">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="chart-bars">
                  <div className="chart-bar-wrapper">
                    <div className="chart-bar" style={{height: "45%"}}>
                      <span>۹M</span>
                    </div>
                    <small>شنبه</small>
                  </div>

                  <div className="chart-bar-wrapper">
                    <div className="chart-bar" style={{height: "62%"}}>
                      <span>۱۲.۴M</span>
                    </div>
                    <small>یکشنبه</small>
                  </div>

                  <div className="chart-bar-wrapper">
                    <div className="chart-bar" style={{height: "52%"}}>
                      <span>۱۰.۴M</span>
                    </div>
                    <small>دوشنبه</small>
                  </div>

                  <div className="chart-bar-wrapper">
                    <div className="chart-bar" style={{height: "78%"}}>
                      <span>۱۵.۶M</span>
                    </div>
                    <small>سه‌شنبه</small>
                  </div>

                  <div className="chart-bar-wrapper">
                    <div className="chart-bar" style={{height: "68%"}}>
                      <span>۱۳.۶M</span>
                    </div>
                    <small>چهارشنبه</small>
                  </div>

                  <div className="chart-bar-wrapper">
                    <div className="chart-bar" style={{height: "88%"}}>
                      <span>۱۷.۶M</span>
                    </div>
                    <small>پنجشنبه</small>
                  </div>

                  <div className="chart-bar-wrapper">
                    <div className="chart-bar chart-bar-active" style={{height:"72%"}}>
                      <span>۱۴.۴M</span>
                    </div>
                    <small>جمعه</small>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="dashboard-section"
            aria-labelledby="recent-orders-title"
          >
            <div className="section-header">
              <div>
                <h2 id="recent-orders-title">سفارش‌های اخیر</h2>
                <p>آخرین سفارش‌های ثبت‌شده در فروشگاه</p>
              </div>

              <a href="orders/all-orders.html" className="section-link">
                مشاهده همه
              </a>
            </div>

            <div className="orders-table-wrapper">
              <table className="orders-table">
                <thead>
                  <tr>
                    <th scope="col">شماره سفارش</th>
                    <th scope="col">مشتری</th>
                    <th scope="col">مبلغ</th>
                    <th scope="col">وضعیت</th>
                    <th scope="col">تاریخ</th>
                    <th scope="col">
                      <span className="sr-only">عملیات</span>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>#1048</td>

                    <td>
                      <div className="customer-cell">
                        <span className="customer-avatar">م</span>
                        <span>محمد رضایی</span>
                      </div>
                    </td>

                    <td>۴,۸۵۰,۰۰۰ تومان</td>

                    <td>
                      <span className="order-status status-success">
                        تکمیل شده
                      </span>
                    </td>

                    <td>امروز، ۱۸:۳۰</td>

                    <td>
                      <a href="orders/order-details.html" className="order-action">
                        مشاهده
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td>#1047</td>

                    <td>
                      <div className="customer-cell">
                        <span className="customer-avatar">ع</span>
                        <span>علی کریمی</span>
                      </div>
                    </td>

                    <td>۲,۳۰۰,۰۰۰ تومان</td>

                    <td>
                      <span className="order-status status-warning">
                        در حال پردازش
                      </span>
                    </td>

                    <td>امروز، ۱۷:۴۵</td>

                    <td>
                      <a href="orders/order-details.html" className="order-action">
                        مشاهده
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td>#1046</td>

                    <td>
                      <div className="customer-cell">
                        <span className="customer-avatar">س</span>
                        <span>سارا احمدی</span>
                      </div>
                    </td>

                    <td>۷,۱۲۰,۰۰۰ تومان</td>

                    <td>
                      <span className="order-status status-info"> ارسال شده </span>
                    </td>

                    <td>امروز، ۱۵:۲۰</td>

                    <td>
                      <a href="orders/order-details.html" className="order-action">
                        مشاهده
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td>#1045</td>

                    <td>
                      <div className="customer-cell">
                        <span className="customer-avatar">ح</span>
                        <span>حسین مرادی</span>
                      </div>
                    </td>

                    <td>۱,۹۸۰,۰۰۰ تومان</td>

                    <td>
                      <span className="order-status status-danger"> لغو شده </span>
                    </td>

                    <td>امروز، ۱۳:۱۰</td>

                    <td>
                      <a href="orders/order-details.html" className="order-action">
                        مشاهده
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          <section className="dashboard-grid">
            {/* <!-- Low Stock --> */}
            <section
              className="dashboard-section dashboard-section-compact"
              aria-labelledby="low-stock-title"
            >
              <div className="section-header">
                <div>
                  <h2 id="low-stock-title">موجودی کم</h2>
                  <p>محصولاتی که نیاز به تأمین دارند</p>
                </div>

                <a href="reports/inventory.html" className="section-link">
                  انبار
                </a>
              </div>

              <div className="product-list">
                <article className="product-list-item">
                  <div className="product-thumbnail">
                    <img
                      src="../assets/images/products/shoe-1.jpg"
                      alt="کفش اسپرت مشکی"
                    />
                  </div>

                  <div className="product-list-info">
                    <h3>کفش اسپرت مشکی</h3>
                    <span>کد محصول: SH-001</span>
                  </div>

                  <div className="stock-info stock-danger">
                    <strong>۳</strong>
                    <span>عدد باقی‌مانده</span>
                  </div>
                </article>

                <article className="product-list-item">
                  <div className="product-thumbnail">
                    <img
                      src="../assets/images/products/shoe-2.jpg"
                      alt="کتانی سفید"
                    />
                  </div>

                  <div className="product-list-info">
                    <h3>کتانی سفید</h3>
                    <span>کد محصول: SH-014</span>
                  </div>

                  <div className="stock-info stock-warning">
                    <strong>۷</strong>
                    <span>عدد باقی‌مانده</span>
                  </div>
                </article>

                <article className="product-list-item">
                  <div className="product-thumbnail">
                    <img
                      src="../assets/images/products/shirt-1.jpg"
                      alt="تیشرت اورسایز"
                    />
                  </div>

                  <div className="product-list-info">
                    <h3>تیشرت اورسایز</h3>
                    <span>کد محصول: SH-021</span>
                  </div>

                  <div className="stock-info stock-warning">
                    <strong>۹</strong>
                    <span>عدد باقی‌مانده</span>
                  </div>
                </article>
              </div>
            </section>

            {/* <!-- Best Selling --> */}
            <section
              className="dashboard-section dashboard-section-compact"
              aria-labelledby="best-selling-title"
            >
              <div className="section-header">
                <div>
                  <h2 id="best-selling-title">پرفروش‌ترین محصولات</h2>
                  <p>محصولات برتر این ماه</p>
                </div>

                <a href="products/list.html" className="section-link"> محصولات </a>
              </div>

              <div className="product-list">
                <article className="product-list-item">
                  <div className="product-thumbnail">
                    <img
                      src="../assets/images/products/shoe-3.jpg"
                      alt="کتانی رانینگ"
                    />
                  </div>

                  <div className="product-list-info">
                    <h3>کتانی رانینگ</h3>
                    <span>کد محصول: SH-032</span>
                  </div>

                  <div className="sales-info">
                    <strong>۱۲۴</strong>
                    <span>فروش</span>
                  </div>
                </article>

                <article className="product-list-item">
                  <div className="product-thumbnail">
                    <img
                      src="../assets/images/products/shirt-2.jpg"
                      alt="هودی ساده"
                    />
                  </div>

                  <div className="product-list-info">
                    <h3>هودی ساده</h3>
                    <span>کد محصول: HD-011</span>
                  </div>

                  <div className="sales-info">
                    <strong>۹۸</strong>
                    <span>فروش</span>
                  </div>
                </article>

                <article className="product-list-item">
                  <div className="product-thumbnail">
                    <img
                      src="../assets/images/products/shoe-4.jpg"
                      alt="کفش روزمره"
                    />
                  </div>

                  <div className="product-list-info">
                    <h3>کفش روزمره</h3>
                    <span>کد محصول: SH-041</span>
                  </div>

                  <div className="sales-info">
                    <strong>۸۶</strong>
                    <span>فروش</span>
                  </div>
                </article>
              </div>
            </section>
          </section>
        </>
    )
}