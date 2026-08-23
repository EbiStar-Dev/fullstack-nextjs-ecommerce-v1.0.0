export default function Header() {
  return (
    <header className="dashboard-header">
      <div className="dashboard-header-title">
        <button
          type="button"
          className="sidebar-toggle"
          id="sidebar-toggle"
          aria-label="باز کردن منو"
        >
          <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 6h16"></path>
            <path d="M4 12h16"></path>
            <path d="M4 18h16"></path>
          </svg>
        </button>

        <div>
          <h1>داشبورد</h1>
          <p>خلاصه وضعیت فروشگاه</p>
        </div>
      </div>

      <div className="dashboard-header-actions">
        {/* <!-- Search --> */}
        <div className="dashboard-search">
          <label aria-label="dashboard-search" className="sr-only">
            {" "}
            جستجو{" "}
          </label>

          <svg
            className="icon icon-search"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="7"></circle>
            <path d="m20 20-4-4"></path>
          </svg>

          <input
            id="dashboard-search"
            type="search"
            placeholder="جستجو..."
            // autocomplete="off"
          />
        </div>

        {/* <!-- Notifications --> */}
        <div className="header-dropdown">
          <button
            type="button"
            className="dashboard-notification"
            id="notification-button"
            aria-label="اعلان‌ها"
            aria-expanded="false"
            aria-controls="notification-panel"
          >
            <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"></path>
              <path d="M10 21h4"></path>
            </svg>

            <span className="notification-badge">3</span>
          </button>

          <div
            className="dropdown-panel notification-panel"
            id="notification-panel"
            hidden
          >
            <div className="dropdown-header">
              <strong>اعلان‌ها</strong>
              <button type="button" className="text-button">
                همه خوانده شد
              </button>
            </div>

            <div className="notification-list">
              <a href="#" className="notification-item">
                <span className="notification-item-icon">
                  <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20 7 10 17l-5-5"></path>
                  </svg>
                </span>

                <span>
                  <strong>سفارش جدید</strong>
                  <small>یک سفارش جدید ثبت شده است.</small>
                </span>
              </a>

              <a href="#" className="notification-item">
                <span className="notification-item-icon">
                  <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 3v18"></path>
                    <path d="M3 12h18"></path>
                  </svg>
                </span>

                <span>
                  <strong>محصول جدید</strong>
                  <small>یک محصول به فروشگاه اضافه شد.</small>
                </span>
              </a>

              <a href="#" className="notification-item">
                <span className="notification-item-icon">
                  <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z"></path>
                  </svg>
                </span>

                <span>
                  <strong>موجودی کم</strong>
                  <small>موجودی یک محصول رو به اتمام است.</small>
                </span>
              </a>
            </div>

            <a href="#" className="dropdown-footer">
              {" "}
              مشاهده همه اعلان‌ها{" "}
            </a>
          </div>
        </div>

        {/* <!-- Profile --> */}
        <div className="header-dropdown">
          <button
            type="button"
            className="dashboard-profile"
            id="profile-button"
            aria-expanded="false"
            aria-controls="profile-menu"
          >
            <span className="profile-avatar">E</span>

            <span className="profile-info">
              <strong>مدیر فروشگاه</strong>
              <small>مدیر سیستم</small>
            </span>

            <svg
              className="profile-chevron icon"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </button>

          <div className="dropdown-panel profile-menu" id="profile-menu" hidden>
            <div className="profile-menu-header">
              <span className="profile-avatar">E</span>

              <div>
                <strong>مدیر فروشگاه</strong>
                <small>admin@example.com</small>
              </div>
            </div>

            <div className="profile-menu-links">
              <a href="settings/general.html">
                <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-1.5 1.5-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6V20h-2v-.2a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1-1.5-1.5.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H7v-2h.2a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1 1.5-1.5.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.6V6h2v.2a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1 1.5 1.5-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v2h-.2a1.7 1.7 0 0 0-1.6 1Z"></path>
                </svg>
                تنظیمات
              </a>

              <a href="account/profile.html">
                <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="8" r="3"></circle>
                  <path d="M5 20a7 7 0 0 1 14 0"></path>
                </svg>
                پروفایل
              </a>
            </div>

            <div className="profile-menu-footer">
              <button type="button" className="logout-button">
                <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M10 17l5-5-5-5"></path>
                  <path d="M15 12H3"></path>
                  <path d="M21 19V5a2 2 0 0 0-2-2h-6"></path>
                </svg>
                خروج از حساب
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
