import ProductList from "@/features/client/shop/products/components/ProductList";

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

<ProductList/>

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
