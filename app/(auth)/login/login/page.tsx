export default function Lohin() {
  return (
        <div className="auth-form-container">

            <div className="auth-mobile-logo">
                <a href="../index.html" className="store-logo">
                    فروشگاه
                </a>
            </div>

            <div className="auth-heading">

                <h2>
                    ورود به حساب
                </h2>

            </div>


            <form className="auth-form">

                <div className="auth-field">

                    <label >
                        ایمیل یا شماره موبایل
                    </label>

                    <input
                        id="login"
                        type="text"
                        placeholder="ایمیل یا شماره موبایل"
                       
                        required
                    />

                </div>


                <div className="auth-field">

                    <div className="auth-field-header">

                        <label >
                            رمز عبور
                        </label>

                        <a href="#">
                            فراموشی رمز عبور؟
                        </a>

                    </div>

                    <div className="auth-password">

                        <input
                            id="password"
                            type="password"
                            placeholder="رمز عبور"
                            
                            required
                        />

                        <button
                            type="button"
                            aria-label="نمایش رمز عبور"
                        >
                            <svg className="icon" viewBox="0 0 24 24">
                                <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z"></path>
                                <circle cx="12" cy="12" r="2.5"></circle>
                            </svg>
                        </button>

                    </div>

                </div>


                <label className="auth-remember">

                    <input
                        type="checkbox"
                        name="remember"
                    />

                    <span>
                        مرا به خاطر بسپار
                    </span>

                </label>


                <button
                    type="submit"
                    className="auth-submit"
                >
                    ورود به حساب
                </button>

            </form>


            <div className="auth-divider">
                <span>یا</span>
            </div>


            <button
                type="button"
                className="auth-social"
            >
                <svg className="icon" viewBox="0 0 24 24">
                    <path d="M21 12.2c0-.7-.1-1.5-.2-2.2H12v4.2h5c-.2 1.4-1 2.5-2.1 3.3v2.7h3.4c2-1.8 2.7-4.5 2.7-8Z"></path>
                    <path d="M12 21c2.9 0 5.3-1 7.1-2.8l-3.4-2.7c-.9.6-2 1-3.7 1-2.8 0-5.1-1.9-5.9-4.5H2.6v2.8A10.7 10.7 0 0 0 12 21Z"></path>
                    <path d="M6.1 12c-.2-.6-.3-1.3-.3-2s.1-1.4.3-2V5.2H2.6A10.6 10.6 0 0 0 1.5 10c0 1.7.4 3.3 1.1 4.8L6.1 12Z"></path>
                    <path d="M12 5.5c1.6 0 3 .6 4.1 1.7l3-3C17.3 2.5 14.9 1.5 12 1.5a10.7 10.7 0 0 0-9.4 5.7L6.1 10c.8-2.6 3.1-4.5 5.9-4.5Z"></path>
                </svg>

                ورود با Google
            </button>


            <p className="auth-register">
                حساب کاربری ندارید؟
                <a href="/login/register">
                    ثبت‌نام کنید
                </a>
            </p>

        </div>
  );
}