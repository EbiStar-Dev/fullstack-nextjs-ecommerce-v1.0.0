'use client'
import { useCategory } from "../hook/useCategory";
import { useProducts } from "../hook/useProducts";
import ProductGrid from "./ProductGrid";

export default function ProductList() {
  const { products, loading } = useProducts();
  const { categories} = useCategory();
  console.log(categories.find(["title"]))
  return (
    <div className="product-grid shop-product-grid">
      {loading == true ? (
        <p>درحال بارگذاری محصولات...</p>
      ) : (products.length > 0 ? (
        products.map((item) => (
          <ProductGrid
          key={item.id}
            title={item.title}
            category={"d"}
            price={item.price}
          />
        ))
      ) : (
        <p>محصولی یافت نشد</p>
      ))}
    </div>
  );
}
