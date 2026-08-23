export default function Sidebar() {
  return (
            <aside className="account-sidebar">

            <div className="account-user">

                <div className="account-avatar">
                    ا
                </div>

                <div>
                    <strong>
                        ابی استار
                    </strong>

                    <span>
                        example@email.com
                    </span>
                </div>

            </div>


            <nav className="account-nav" aria-label="حساب کاربری">

                <a
                    href="profile.html"
                    className="account-nav-link active"
                >
                    <svg className="icon" viewBox="0 0 24 24">
                        <circle cx="12" cy="8" r="4"></circle>
                        <path d="M4 21a8 8 0 0 1 16 0"></path>
                    </svg>

                    پروفایل
                </a>


                <a
                    href="orders.html"
                    className="account-nav-link"
                >
                    <svg className="icon" viewBox="0 0 24 24">
                        <path d="M6 3h12v18H6z"></path>
                        <path d="M9 7h6M9 11h6M9 15h4"></path>
                    </svg>

                    سفارش‌های من
                </a>


                <a
                    href="../cart.html"
                    className="account-nav-link"
                >
                    <svg className="icon" viewBox="0 0 24 24">
                        <path d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 8H6"></path>
                        <circle cx="10" cy="20" r="1"></circle>
                        <circle cx="18" cy="20" r="1"></circle>
                    </svg>

                    سبد خرید
                </a>


                <a
                    href="#"
                    className="account-nav-link"
                >
                    <svg className="icon" viewBox="0 0 24 24">
                        <path d="M20.8 8.8c0 5.5-8.8 10.2-8.8 10.2S3.2 14.3 3.2 8.8A4.8 4.8 0 0 1 12 6a4.8 4.8 0 0 1 8.8 2.8Z"></path>
                    </svg>

                    علاقه‌مندی‌ها
                </a>


                <a
                    href="#"
                    className="account-nav-link account-logout"
                >
                    <svg className="icon" viewBox="0 0 24 24">
                        <path d="M10 17l5-5-5-5"></path>
                        <path d="M15 12H3"></path>
                        <path d="M13 4h6v16h-6"></path>
                    </svg>

                    خروج از حساب
                </a>

            </nav>

        </aside>
  );
}