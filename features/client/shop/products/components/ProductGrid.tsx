export default function ProductGrid({title,category,price}) {
  return (
           <article className="store-product-card">
          <a href="product/1" className="product-image">
            <span className="product-badge">جدید</span>

            <img
              src="../../assets/images/products/shoe-01.jpg"
              alt="کتانی اسپرت سفید"
            />
          </a>

          <div className="product-info">
            <span className="product-category">{category}</span>

            <h3>
              <a href="product/1">{title}</a>
            </h3>

            <div className="product-price">{price} تومان</div>
          </div>
        </article>
  );
}