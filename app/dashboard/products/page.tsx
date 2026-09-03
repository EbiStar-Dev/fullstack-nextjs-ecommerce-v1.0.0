'use client'
import ProductList  from '@/features/dashboard/products/components/ProductList'
export default function ProductsPage() {
  return (
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
          <ProductList />
        </div>

        {/* <!-- Pagination --> */}
        <div className="products-pagination">
          <span>نمایش ۱ تا ۳ از ۲۴۸ محصول</span>

          <div className="pagination-actions">
            <button type="button" disabled>
              قبلی
            </button>

            <button type="button" className="pagination-active">
              ۱
            </button>

            <button type="button">۲</button>

            <button type="button">۳</button>

            <span>...</span>

            <button type="button">۲۵</button>

            <button type="button">بعدی</button>
          </div>
        </div>
      </section>
    </>
  );
}
