import { useCategoryList } from "../hooks/useCategoryList";
import { useCreateProduct } from "../hooks/useCreateProduct";

export default function AddProduct() {
  const { handleChange, SubmitForm,slug} = useCreateProduct();
  const { categories} = useCategoryList();

  return (
    <div className="flex min-h-[calc(100vh-140px)] gap-6 animate-fadeIn">
      
      <div className="flex-1 bg-white rounded-2xl border border-gray-100 p-8 shadow-sm overflow-y-auto">
        <div className="max-w-2xl mx-auto space-y-8">
          
          <div>
            <h2 className="text-xl font-bold text-gray-900">افزودن محصول جدید</h2>
            <p className="text-sm text-gray-500 mt-1">اطلاعات را با دقت وارد کنید تا در فروشگاه به درستی نمایش داده شود.</p>
          </div>

          <section className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <label className="block text-xs font-bold text-gray-700 mb-1.5">نام محصول</label>
                <input 
                  name="title" 
                  onChange={handleChange}
                  className="w-full h-11 px-4 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-black transition-all outline-none text-sm"
                  placeholder="مثلاً: کتانی نایک ایر جردن"
                />
              </div>
              
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">نامک (Slug)</label>
                <input 
                  name="slug" 
                  onChange={handleChange}
                  dir="ltr"
                  className="w-full h-11 px-4 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-black transition-all outline-none text-sm text-left"
                  placeholder="nike-air-jordan"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">دسته‌بندی</label>
                <select name="category_id" onChange={handleChange} className="w-full h-11 px-4 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-black transition-all outline-none text-sm">
                  <option value="">انتخاب کنید...</option>
                 {categories.map((item)=>(
                  <option key={item.id} value={`${item.id}`}>{item.name}</option>
                 ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1.5">توضیحات کوتاه</label>
              <textarea 
                name="short_description" 
                onChange={handleChange}
                rows={3}
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-black transition-all outline-none text-sm resize-none"
                placeholder="یک جمله جذاب برای جذب مشتری..."
              />
            </div>
          </section>

          <section className="pt-6 border-t border-gray-100">
            <h3 className="text-sm font-bold text-gray-900 mb-4">قیمت و انبار</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-1">
                <label className="block text-xs font-bold text-gray-700 mb-1.5">قیمت (تومان)</label>
                <input 
                  name="price" 
                  type="number"
                  onChange={handleChange}
                  className="w-full h-11 px-4 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-black transition-all outline-none text-sm"
                  placeholder="0"
                />
              </div>
              <div className="col-span-1">
                <label className="block text-xs font-bold text-gray-700 mb-1.5">موجودی</label>
                <input 
                  name="stock" 
                  type="number"
                  onChange={handleChange}
                  className="w-full h-11 px-4 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-black transition-all outline-none text-sm"
                  placeholder="تعداد"
                />
              </div>
              <div className="col-span-1">
                <label className="block text-xs font-bold text-gray-700 mb-1.5">SKU</label>
                <input 
                  name="sku" 
                  onChange={handleChange}
                  dir="ltr"
                  className="w-full h-11 px-4 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-black transition-all outline-none text-sm text-left"
                  placeholder="SH-2024"
                />
              </div>
            </div>
          </section>

          <section className="pt-6 border-t border-gray-100">
             <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl border border-gray-100">
                <div>
                  <h4 className="text-sm font-bold text-gray-900">وضعیت انتشار</h4>
                  <p className="text-xs text-gray-500 mt-0.5">آیا محصول همین الان در سایت دیده شود؟</p>
                </div>
                <div className="flex gap-2">
                  <label className="cursor-pointer">
                    <input type="radio" name="status" value="active" defaultChecked onChange={handleChange} className="peer hidden" />
                    <span className="px-4 py-2 rounded-lg text-xs font-bold border border-gray-200 bg-white text-gray-500 peer-checked:bg-black peer-checked:text-white peer-checked:border-black transition-all">فعال</span>
                  </label>
                  <label className="cursor-pointer">
                    <input type="radio" name="status" value="draft" onChange={handleChange} className="peer hidden" />
                    <span className="px-4 py-2 rounded-lg text-xs font-bold border border-gray-200 bg-white text-gray-500 peer-checked:bg-gray-200 peer-checked:text-gray-700 transition-all">پیش‌نویس</span>
                  </label>
                </div>
             </div>
          </section>

        </div>
      </div>

      <div className="w-96 space-y-6">
        
        <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm sticky top-6">
          <label className="block text-xs font-bold text-gray-700 mb-3">تصویر اصلی محصول</label>
          <img src={`${slug}`} alt="" />
          <div className="relative group cursor-pointer">
            <input type="file" name="image" onChange={handleChange} className="absolute inset-0 w-full h-full opacity-0 z-10 cursor-pointer" />
            
            <div className="aspect-square rounded-xl bg-gray-50 border-2 border-dashed border-gray-200 group-hover:border-black group-hover:bg-gray-100 transition-all flex flex-col items-center justify-center gap-3 overflow-hidden relative">
               <svg className="w-10 h-10 text-gray-300 group-hover:text-black transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 16V4m0 0L8 8m4-4l4 4M4 14v4a2 2 0 002 2h12a2 2 0 002-2v-4"/></svg>
               <span className="text-xs font-medium text-gray-400 group-hover:text-black">کلیک برای آپلود یا Drag & Drop</span>
            </div>
          </div>

          <div className="mt-6 space-y-3">
             <button type="submit" onClick={SubmitForm} className="w-full h-12 bg-black text-white rounded-xl font-bold text-sm hover:bg-gray-800 transition-colors shadow-lg shadow-gray-200">
               ذخیره و انتشار محصول
             </button>
             <a href="/dashboard/products" className="block w-full h-12 text-center leading-[48px] bg-white border border-gray-200 text-gray-600 rounded-xl font-bold text-sm hover:bg-gray-50 transition-colors">
               انصراف
             </a>
          </div>
        </div>

      </div>
    </div>
  );
}