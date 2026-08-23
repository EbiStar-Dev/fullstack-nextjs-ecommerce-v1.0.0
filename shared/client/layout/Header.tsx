export default function Header() {
  return (
        <header className="store-header">

        <div className="store-header-inner">

            <a href="index.html" className="store-logo">
                فروشگاه
            </a>

            <nav className="store-nav" aria-label="منوی اصلی">

                <a href="index.html" className="store-nav-link store-nav-link-active">
                    خانه
                </a>

                <a href="/products" className="store-nav-link">
                    فروشگاه
                </a>

                <a href="shop/category.html" className="store-nav-link">
                    کفش
                </a>

                <a href="shop/category.html" className="store-nav-link">
                    پوشاک
                </a>

                <a href="pages/about.html" className="store-nav-link">
                    درباره ما
                </a>

                <a href="pages/contact.html" className="store-nav-link">
                    تماس با ما
                </a>

            </nav>

            <div className="store-header-actions">

                <button
                    type="button"
                    className="store-header-icon"
                    aria-label="جستجو"
                >
                    <svg className="icon" viewBox="0 0 24 24">
                        <circle cx="11" cy="11" r="7"></circle>
                        <path d="m20 20-4-4"></path>
                    </svg>
                </button>

                <a
                    href="/login/login"
                    className="store-header-icon"
                    aria-label="حساب کاربری"
                >
                    <svg className="icon" viewBox="0 0 24 24">
                        <circle cx="12" cy="8" r="4"></circle>
                        <path d="M4 21a8 8 0 0 1 16 0"></path>
                    </svg>
                </a>

                <a
                    href="cart.html"
                    className="store-header-icon store-cart-icon"
                    aria-label="سبد خرید"
                >
                    <svg className="icon" viewBox="0 0 24 24">
                        <path d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 8H6"></path>
                        <circle cx="10" cy="20" r="1"></circle>
                        <circle cx="18" cy="20" r="1"></circle>
                    </svg>

                    <span className="cart-count">2</span>
                </a>

            </div>

        </div>

    </header>
  );
}