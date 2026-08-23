export default function Products() {
  return (
    <>
      <div className="shop-toolbar">
        <span className="shop-result-count">۹۰ محصول</span>

        <div className="shop-toolbar-actions">
          <button type="button" className="mobile-filter-button">
            فیلتر
          </button>

          <label className="sort-select">
            <span>مرتب‌سازی:</span>

            <select>
              <option>جدیدترین</option>

              <option>پرفروش‌ترین</option>

              <option>ارزان‌ترین</option>

              <option>گران‌ترین</option>
            </select>
          </label>
        </div>
      </div>

      <div className="product-grid shop-product-grid">
        <article className="store-product-card">
          <a href="product/1" className="product-image">
            <span className="product-badge">جدید</span>

            <img
              src="../../assets/images/products/shoe-01.jpg"
              alt="کتانی اسپرت سفید"
            />
          </a>

          <div className="product-info">
            <span className="product-category">کفش مردانه</span>

            <h3>
              <a href="product/1">کتانی اسپرت سفید</a>
            </h3>

            <div className="product-price">۲,۴۵۰,۰۰۰ تومان</div>
          </div>
        </article>

        <article className="store-product-card">
          <a href="product/1" className="product-image">
            <img
              src="../../assets/images/products/shoe-02.jpg"
              alt="کتانی مشکی روزمره"
            />
          </a>

          <div className="product-info">
            <span className="product-category">کفش مردانه</span>

            <h3>
              <a href="product/1">کتانی مشکی روزمره</a>
            </h3>

            <div className="product-price">۲,۸۹۰,۰۰۰ تومان</div>
          </div>
        </article>

        <article className="store-product-card">
          <a href="product/1" className="product-image">
            <span className="product-badge">تخفیف</span>

            <img
              src="../../assets/images/products/clothing-01.jpg"
              alt="هودی ساده مشکی"
            />
          </a>

          <div className="product-info">
            <span className="product-category">پوشاک</span>

            <h3>
              <a href="product/1">هودی ساده مشکی</a>
            </h3>

            <div className="product-price">
              <del>۱,۹۵۰,۰۰۰</del>
              ۱,۶۹۰,۰۰۰ تومان
            </div>
          </div>
        </article>

        <article className="store-product-card">
          <a href="product/1" className="product-image">
            <img
              src="../../assets/images/products/clothing-02.jpg"
              alt="سویشرت طوسی"
            />
          </a>

          <div className="product-info">
            <span className="product-category">پوشاک</span>

            <h3>
              <a href="product/1">سویشرت طوسی</a>
            </h3>

            <div className="product-price">۱,۵۹۰,۰۰۰ تومان</div>
          </div>
        </article>

        <article className="store-product-card">
          <a href="product/1" className="product-image">
            <img
              src="../../assets/images/products/shoe-03.jpg"
              alt="کتانی سفید و طوسی"
            />
          </a>

          <div className="product-info">
            <span className="product-category">کفش</span>

            <h3>
              <a href="product/1">کتانی سفید و طوسی</a>
            </h3>

            <div className="product-price">۳,۱۵۰,۰۰۰ تومان</div>
          </div>
        </article>

        <article className="store-product-card">
          <a href="product/1" className="product-image">
            <span className="product-badge">پرفروش</span>

            <img
              src="../../assets/images/products/shoe-04.jpg"
              alt="کتانی رانینگ"
            />
          </a>

          <div className="product-info">
            <span className="product-category">ورزشی</span>

            <h3>
              <a href="product/1">کتانی رانینگ</a>
            </h3>

            <div className="product-price">۳,۴۵۰,۰۰۰ تومان</div>
          </div>
        </article>

        <article className="store-product-card">
          <a href="product/1" className="product-image">
            <img
              src="../../assets/images/products/clothing-03.jpg"
              alt="تیشرت اورسایز"
            />
          </a>

          <div className="product-info">
            <span className="product-category">پوشاک</span>

            <h3>
              <a href="product/1">تیشرت اورسایز</a>
            </h3>

            <div className="product-price">۹۹۰,۰۰۰ تومان</div>
          </div>
        </article>

        <article className="store-product-card">
          <a href="product/1" className="product-image">
            <img
              src="../../assets/images/products/clothing-04.jpg"
              alt="شلوار کارگو"
            />
          </a>

          <div className="product-info">
            <span className="product-category">پوشاک</span>

            <h3>
              <a href="product/1">شلوار کارگو</a>
            </h3>

            <div className="product-price">۱,۷۹۰,۰۰۰ تومان</div>
          </div>
        </article>
      </div>

      {/* <!-- Pagination --> */}
      <nav className="shop-pagination" aria-label="صفحه‌بندی">
        <a href="#" className="pagination-arrow">
          قبلی
        </a>

        <a href="#" className="pagination-active">
          ۱
        </a>

        <a href="#">۲</a>

        <a href="#">۳</a>

        <span>...</span>

        <a href="#">۱۲</a>

        <a href="#" className="pagination-arrow">
          بعدی
        </a>
      </nav>
    </>
  );
}
