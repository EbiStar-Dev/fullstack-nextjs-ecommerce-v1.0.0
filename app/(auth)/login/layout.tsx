import '@/assets/css/style.css'

export default function layout({children}) {
  return (
       <div className='auth-layout'>
          <section className="auth-brand">

        <a href="../index.html" className="store-logo">
            فروشگاه
        </a>

        <div className="auth-brand-content">

            <span className="store-eyebrow">
                خوش آمدید
            </span>

            <h1>
                دوباره به فروشگاه برگردید.
            </h1>

            <p>
                وارد حساب کاربری خود شوید و سفارش‌ها،
                علاقه‌مندی‌ها و اطلاعات حساب خود را مدیریت کنید.
            </p>

        </div>

        <span className="auth-copyright">
            © ۲۰۲۶ فروشگاه
        </span>

    </section>


    <section className="auth-form-wrapper">

{children}

    </section>
    </div>
  );
}