import { useProduct } from "../hooks/ProductList";
import { useCategoryList } from "../hooks/useCategoryList";

export default function ProductList() {
  const { products, loading,formatPrice } = useProduct();
  const { categories } = useCategoryList();

  if (loading) {
    return <div className="p-4 text-center">در حال بارگذاری محصولات...</div>;
  }

  return (
    <table className="products-table">
      <thead>
        <tr>
          <th>
            <input type="checkbox" />
          </th>
          <th>محصول</th>
          <th>دسته‌بندی</th>
          <th>قیمت</th>
          <th>موجودی</th>
          <th>وضعیت</th>
          <th>عملیات</th>
        </tr>
      </thead>

      <tbody>
        {products.map((item: any) => (
          <tr key={item.id}>
            <td>
              <input type="checkbox" />
            </td>

            <td>
              <div className="admin-product flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-100 rounded overflow-hidden">
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <strong className="block text-sm">{item.title}</strong>
                  <span className="text-xs text-gray-500">{item.slug}</span>
                </div>
              </div>
            </td>

            <td>
              {categories.find((c) => c.id === item.category_id)?.title ||
                "نامشخص"}
            </td>
<td className="font-medium">
  {formatPrice(item.price)} {item.currency}
</td>

            <td>
              <span className="stock-count stock-ok">موجود</span>
            </td>

            <td>
              <span
                className={`product-status ${item.badge ? "status-active" : "status-draft"}`}
              >
                {item.badge || "عادی"}
              </span>
            </td>

            <td>
              <div className="table-actions">
                <a
                  href="edit.html"
                  className="table-action"
                  aria-label="ویرایش محصول"
                >
                  <svg className="icon" viewBox="0 0 24 24">
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z"></path>
                  </svg>
                </a>

                <button
                  type="button"
                  className="table-action table-action-danger"
                  aria-label="حذف محصول"
                >
                  <svg className="icon" viewBox="0 0 24 24">
                    <path d="M3 6h18"></path>
                    <path d="M8 6V4h8v2"></path>
                    <path d="M19 6l-1 15H6L5 6"></path>
                  </svg>
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
