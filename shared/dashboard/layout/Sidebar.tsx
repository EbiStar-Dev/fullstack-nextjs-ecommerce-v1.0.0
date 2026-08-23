export default function Sidebare() {
  return (
    <aside className="dashboard-sidebar" id="dashboard-sidebar">
      <div className="sidebar-brand">
        <a href="index.html" className="sidebar-logo">
          {" "}
          فروشگاه{" "}
        </a>

        <button
          type="button"
          className="sidebar-close"
          id="sidebar-close"
          aria-label="بستن منو"
        >
          <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
        </button>
      </div>

      <nav className="sidebar-nav" aria-label="منوی مدیریت">
        <a href="index.html" className="sidebar-link sidebar-link-active">
          <span>داشبورد</span>
        </a>

        <div className="sidebar-section">
          <span className="sidebar-section-title">فروشگاه</span>

          <a href="/dashboard/products" className="sidebar-link">
            <span>محصولات</span>
          </a>

          <a href="/dashboard/orders" className="sidebar-link">
            <span>سفارشات</span>
          </a>

          <a href="/dashboard/customers" className="sidebar-link">
            <span>مشتریان</span>
          </a>
        </div>

        <div className="sidebar-section">
          <span className="sidebar-section-title">بازاریابی</span>

          <a href="/dashboard/marketing/coupons" className="sidebar-link">
            <span>کدهای تخفیف</span>
          </a>

          <a href="/dashboard/marketing/newsletters" className="sidebar-link">
            <span>خبرنامه</span>
          </a>
        </div>

        <div className="sidebar-section">
          <span className="sidebar-section-title">گزارش‌ها</span>

          <a href="reports/sales.html" className="sidebar-link">
            <span>گزارش فروش</span>
          </a>

          <a href="reports/inventory.html" className="sidebar-link">
            <span>موجودی انبار</span>
          </a>
        </div>

        <div className="sidebar-section">
          <span className="sidebar-section-title">تنظیمات</span>

          <a href="settings/general.html" className="sidebar-link">
            <span>عمومی</span>
          </a>

          <a href="settings/payments.html" className="sidebar-link">
            <span>پرداخت‌ها</span>
          </a>

          <a href="settings/shipping.html" className="sidebar-link">
            <span>حمل‌ونقل</span>
          </a>
        </div>
      </nav>
    </aside>
  );
}
