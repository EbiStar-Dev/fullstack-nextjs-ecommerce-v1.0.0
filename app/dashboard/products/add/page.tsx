export default function ProductAdd(){
    return(
        <>
                    {/* <!-- Page Header --> */}
            <section className="products-page-header">

                <div>
                    <h2>محصول جدید</h2>
                    <p>اطلاعات محصول را وارد کنید.</p>
                </div>

                <a href="/dashboard/products" className="secondary-button">
                    بازگشت به محصولات
                </a>
            </section>

            <form className="product-form">

                <div className="product-form-grid">

                    {/* <!-- Main Information --> */}
                    <section className="form-card">

                        <div className="form-card-header">
                            <h2>اطلاعات محصول</h2>
                            <p>اطلاعات اصلی محصول را وارد کنید.</p>
                        </div>

                        <div className="form-fields">

                            <div className="form-field form-field-full">
                                <label>
                                    نام محصول
                                </label>

                                <input
                                    id="product-name"
                                    name="name"
                                    type="text"
                                    placeholder="مثلاً کفش اسپرت مردانه"
                                    required
                                />
                            </div>

                            <div className="form-field form-field-full">
                                <label >
                                    توضیحات
                                </label>

                                <textarea
                                    id="product-description"
                                    name="description"
                                    rows={6}
                                    placeholder="توضیحات محصول را وارد کنید..."
                                ></textarea>
                            </div>

                            <div className="form-field">
                                <label>
                                    دسته‌بندی
                                </label>

                                <select id="product-category" name="category" required>
                                    <option value="">انتخاب دسته‌بندی</option>
                                    <option value="shoes">کفش</option>
                                    <option value="clothes">پوشاک</option>
                                    <option value="accessories">اکسسوری</option>
                                </select>
                            </div>

                            <div className="form-field">
                                <label>
                                    برند
                                </label>

                                <input
                                    id="product-brand"
                                    name="brand"
                                    type="text"
                                    placeholder="مثلاً Nike"
                                />
                            </div>

                        </div>

                    </section>

                    {/* <!-- Pricing & Inventory --> */}
                    <section className="form-card">

                        <div className="form-card-header">
                            <h2>قیمت و موجودی</h2>
                            <p>قیمت و وضعیت انبار را مشخص کنید.</p>
                        </div>

                        <div className="form-fields">

                            <div className="form-field">
                                <label >
                                    قیمت
                                </label>

                                <div className="input-with-unit">
                                    <input
                                        id="product-price"
                                        name="price"
                                        type="number"
                                        min="0"
                                        placeholder="0"
                                        required
                                    />

                                    <span>تومان</span>
                                </div>
                            </div>

                            <div className="form-field">
                                <label >
                                    قیمت فروش ویژه
                                </label>

                                <div className="input-with-unit">
                                    <input
                                        id="product-sale-price"
                                        name="sale_price"
                                        type="number"
                                        min="0"
                                        placeholder="اختیاری"
                                    />

                                    <span>تومان</span>
                                </div>
                            </div>

                            <div className="form-field">
                                <label >
                                    موجودی
                                </label>

                                <input
                                    id="product-stock"
                                    name="stock"
                                    type="number"
                                    min="0"
                                    placeholder="0"
                                    required
                                />
                            </div>

                            <div className="form-field">
                                <label >
                                    کد محصول (SKU)
                                </label>

                                <input
                                    id="product-sku"
                                    name="sku"
                                    type="text"
                                    placeholder="مثلاً SH-001"
                                />
                            </div>

                        </div>

                    </section>

                    {/* <!-- Product Image --> */}
                    <section className="form-card">

                        <div className="form-card-header">
                            <h2>تصویر محصول</h2>
                            <p>تصویر اصلی محصول را انتخاب کنید.</p>
                        </div>

                        <label className="image-upload" >

                            <svg className="icon image-upload-icon" viewBox="0 0 24 24">
                                <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                                <path d="m21 15-5-5L5 21"></path>
                            </svg>

                            <strong>تصویر محصول را انتخاب کنید</strong>

                            <span>
                                PNG، JPG یا WEBP — حداکثر ۲MB
                            </span>

                            <input
                                id="product-image"
                                name="image"
                                type="file"
                                accept="image/png,image/jpeg,image/webp"
                                hidden
                            />

                        </label>

                    </section>

                    {/* <!-- Attributes --> */}
                    <section className="form-card">

                        <div className="form-card-header">
                            <h2>ویژگی‌ها</h2>
                            <p>ویژگی‌های محصول را مشخص کنید.</p>
                        </div>

                        <div className="form-fields">

                            <div className="form-field">
                                <label>
                                    رنگ
                                </label>

                                <input
                                    id="product-color"
                                    name="color"
                                    type="text"
                                    placeholder="مثلاً مشکی"
                                />
                            </div>

                            <div className="form-field">
                                <label >
                                    سایز
                                </label>

                                <input
                                    id="product-size"
                                    name="size"
                                    type="text"
                                    placeholder="مثلاً 42"
                                />
                            </div>

                            <div className="form-field form-field-full">
                                <label >
                                    جنس
                                </label>

                                <input
                                    id="product-material"
                                    name="material"
                                    type="text"
                                    placeholder="مثلاً چرم مصنوعی"
                                />
                            </div>

                        </div>

                    </section>

                    {/* <!-- Publish --> */}
                    <section className="form-card form-card-full">

                        <div className="form-card-header">
                            <h2>انتشار</h2>
                            <p>وضعیت نمایش محصول در فروشگاه را مشخص کنید.</p>
                        </div>

                        <div className="publish-options">

                            <label className="radio-option">
                                <input
                                    type="radio"
                                    name="status"
                                    value="active"
                                    checked
                                />

                                <span>
                                    <strong>فعال</strong>
                                    <small>
                                        محصول در فروشگاه نمایش داده شود.
                                    </small>
                                </span>
                            </label>

                            <label className="radio-option">
                                <input
                                    type="radio"
                                    name="status"
                                    value="draft"
                                />

                                <span>
                                    <strong>پیش‌نویس</strong>
                                    <small>
                                        محصول فعلاً در فروشگاه نمایش داده نشود.
                                    </small>
                                </span>
                            </label>

                        </div>

                    </section>

                </div>

                {/* <!-- Actions --> */}
                <div className="product-form-actions">

                    <a href="list.html" className="secondary-button">
                        انصراف
                    </a>

                    <button
                        type="submit"
                        className="primary-button"
                    >
                        ذخیره محصول
                    </button>

                </div>

            </form>
        </>
    )
}