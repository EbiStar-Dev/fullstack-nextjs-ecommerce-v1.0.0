export default function FilterSidebar() {
  return (
    <aside className="shop-sidebar">
      <div className="shop-filter-header">
        <h2>فیلتر محصولات</h2>

        <button type="button" className="shop-filter-reset">
          پاک کردن
        </button>
      </div>

      <div className="shop-filter-group">
        <h3>دسته‌بندی</h3>

        <label className="filter-checkbox">
          <input type="checkbox" />
          <span>کفش</span>
          <small>24</small>
        </label>

        <label className="filter-checkbox">
          <input type="checkbox" />
          <span>پوشاک</span>
          <small>36</small>
        </label>

        <label className="filter-checkbox">
          <input type="checkbox" />
          <span>ورزشی</span>
          <small>18</small>
        </label>

        <label className="filter-checkbox">
          <input type="checkbox" />
          <span>اکسسوری</span>
          <small>12</small>
        </label>
      </div>

      <div className="shop-filter-group">
        <h3>جنسیت</h3>

        <label className="filter-checkbox">
          <input type="checkbox" />
          <span>مردانه</span>
        </label>

        <label className="filter-checkbox">
          <input type="checkbox" />
          <span>زنانه</span>
        </label>

        <label className="filter-checkbox">
          <input type="checkbox" />
          <span>یونیسکس</span>
        </label>
      </div>

      <div className="shop-filter-group">
        <h3>سایز</h3>

        <div className="size-filter">
          <button type="button">۳۸</button>
          <button type="button">۳۹</button>
          <button type="button">۴۰</button>
          <button type="button">۴۱</button>
          <button type="button">۴۲</button>
          <button type="button">۴۳</button>
          <button type="button">۴۴</button>
          <button type="button">۴۵</button>
        </div>
      </div>

      <div className="shop-filter-group">
        <h3>محدوده قیمت</h3>

        <div className="price-filter">
          <div className="price-input">
            <label>از</label>

            <input id="min-price" type="text" placeholder="۰" />
          </div>

          <span>—</span>

          <div className="price-input">
            <label>تا</label>

            <input id="max-price" type="text" placeholder="۵,۰۰۰,۰۰۰" />
          </div>
        </div>
      </div>
    </aside>
  );
}
