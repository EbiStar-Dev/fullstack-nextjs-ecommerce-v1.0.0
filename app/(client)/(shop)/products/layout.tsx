import FilterSidebar from "@/shared/client/components/shop/FilterSidebar";

export default function Layout({ children }) {
  return (
    <>
      <section className="shop-page-header">
        <div>
          <span className="store-eyebrow">فروشگاه</span>

          <h1>همه محصولات</h1>

          <p>
            جدیدترین کفش‌ها و پوشاک را پیدا کن و استایل مورد علاقه‌ات را بساز.
          </p>
        </div>
      </section>
      <section className="shop-container">
        <FilterSidebar />
        {/* <!-- Products --> */}
        <div className="shop-products">{children}</div>
      </section>
    </>
  );
}
