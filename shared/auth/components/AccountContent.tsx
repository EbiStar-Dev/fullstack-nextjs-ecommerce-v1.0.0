export default function AccountContent() {
  return (
<>

            {/* <!-- Personal Information --> */}
            <section className="account-card">

                <div className="account-card-header">

                    <div>
                        <h2>
                            اطلاعات شخصی
                        </h2>

                        <p>
                            اطلاعات پایه حساب خود را ویرایش کنید.
                        </p>
                    </div>

                    <span className="account-card-status">
                        حساب فعال
                    </span>

                </div>


                <form className="profile-form">

                    <div className="profile-fields">

                        <div className="checkout-field">

                            <label >
                                نام
                            </label>

                            <input
                                id="profile-first-name"
                                type="text"
                                value="ابی"
                            />

                        </div>


                        <div className="checkout-field">

                            <label >
                                نام خانوادگی
                            </label>

                            <input
                                id="profile-last-name"
                                type="text"
                                value="استار"
                            />

                        </div>


                        <div className="checkout-field">

                            <label >
                                شماره موبایل
                            </label>

                            <input
                                id="profile-phone"
                                type="tel"
                                value="09121234567"
                            />

                        </div>


                        <div className="checkout-field">

                            <label >
                                ایمیل
                            </label>

                            <input
                                id="profile-email"
                                type="email"
                                value="example@email.com"
                            />

                        </div>

                    </div>


                    <button
                        type="submit"
                        className="account-primary-button"
                    >
                        ذخیره تغییرات
                    </button>

                </form>

            </section>


            {/* <!-- Address --> */}
            <section className="account-card">

                <div className="account-card-header">

                    <div>
                        <h2>
                            آدرس ارسال
                        </h2>

                        <p>
                            آدرس پیش‌فرض سفارش‌های شما.
                        </p>
                    </div>

                    <button
                        type="button"
                        className="account-secondary-button"
                    >
                        ویرایش
                    </button>

                </div>


                <address className="account-address">

                    <strong>
                        ابی استار
                    </strong>

                    <p>
                        مازندران، ساری، خیابان نمونه،
                        کوچه نمونه، پلاک ۱۲، واحد ۳
                    </p>

                    <div>

                        <span>
                            کد پستی: ۴۸۱۳۷۶۵۴۳۲
                        </span>

                        <span>
                            ۰۹۱۲۱۲۳۴۵۶۷
                        </span>

                    </div>

                </address>

            </section>


            {/* <!-- Password --> */}
            <section className="account-card">

                <div className="account-card-header">

                    <div>
                        <h2>
                            امنیت حساب
                        </h2>

                        <p>
                            برای حفظ امنیت حساب خود رمز عبور را مدیریت کنید.
                        </p>
                    </div>

                </div>


                <form className="profile-form">

                    <div className="profile-fields profile-fields-single">

                        <div className="checkout-field">

                            <label >
                                رمز عبور فعلی
                            </label>

                            <input
                                id="current-password"
                                type="password"
                            />

                        </div>


                        <div className="checkout-field">

                            <label>
                                رمز عبور جدید
                            </label>

                            <input
                                id="new-password"
                                type="password"
                            />

                        </div>


                        <div className="checkout-field">

                            <label >
                                تکرار رمز عبور جدید
                            </label>

                            <input
                                id="confirm-new-password"
                                type="password"
                            />

                        </div>

                    </div>


                    <button
                        type="submit"
                        className="account-primary-button"
                    >
                        تغییر رمز عبور
                    </button>

                </form>

            </section></>
  );
}