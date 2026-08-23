export default function Register() {
  return (
            <div className="auth-form-container">

            <div className="auth-mobile-logo">
                <a href="../index.html" className="store-logo">
                    فروشگاه
                </a>
            </div>


            <div className="auth-heading">

                <span className="store-eyebrow">
                    حساب کاربری
                </span>

                <h2>
                    ایجاد حساب
                </h2>

                <p>
                    برای شروع خرید، اطلاعات خود را وارد کنید.
                </p>

            </div>


            <form className="auth-form">

                <div className="auth-fields-grid">

                    <div className="auth-field">

                        <label >
                            نام
                        </label>

                        <input
                            id="first-name"
                            type="text"
                            placeholder="نام"
                            
                            required
                        />

                    </div>


                    <div className="auth-field">

                        <label >
                            نام خانوادگی
                        </label>

                        <input
                            id="last-name"
                            type="text"
                            placeholder="نام خانوادگی"
                           
                            required
                        />

                    </div>

                </div>


                <div className="auth-field">

                    <label>
                        شماره موبایل
                    </label>

                    <input
                        id="phone"
                        type="tel"
                        placeholder="۰۹۱۲۱۲۳۴۵۶۷"
                        
                        required
                    />

                </div>


                <div className="auth-field">

                    <label >
                        ایمیل
                    </label>

                    <input
                        id="email"
                        type="email"
                        placeholder="example@email.com"
                 
                    />

                </div>


                <div className="auth-field">

                    <label >
                        رمز عبور
                    </label>

                    <div className="auth-password">

                        <input
                            id="register-password"
                            type="password"
                            placeholder="حداقل ۸ کاراکتر"
                          
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


                <div className="auth-field">

                    <label >
                        تکرار رمز عبور
                    </label>

                    <input
                        id="confirm-password"
                        type="password"
                        placeholder="رمز عبور را دوباره وارد کنید"
                        
                        required
                    />

                </div>


                <label className="auth-remember">

                    <input
                        type="checkbox"
                        required
                    />

                    <span>
                        با
                        <a href="../pages/privacy-policy.html">
                            قوانین و حریم خصوصی
                        </a>
                        فروشگاه موافقم.
                    </span>

                </label>


                <button
                    type="submit"
                    className="auth-submit"
                >
                    ایجاد حساب
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

                ثبت‌نام با Google

            </button>


            <p className="auth-register">

                قبلاً حساب ساخته‌اید؟

                <a href="/login/login">
                    وارد شوید
                </a>

            </p>

        </div>
  );
}