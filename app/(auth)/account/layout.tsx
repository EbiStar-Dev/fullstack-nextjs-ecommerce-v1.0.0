import Sidebar from "@/shared/auth/layout/Sidebar";
import "@/assets/css/style.css"
import Header from "@/shared/client/layout/Header";

export default function layout({ children }) {
  return (
    <>
    <Header/>
    <main>

    <section className="account-page-header">

        <span className="store-eyebrow">
            حساب کاربری
        </span>

        <h1>
            پروفایل من
        </h1>

        <p>
            اطلاعات حساب و آدرس‌های خود را مدیریت کنید.
        </p>

    </section>
    <div className="account-container">
      <Sidebar />
      <div className="account-content">{children}</div>
    </div>
    </main>
    </>
  );
}
