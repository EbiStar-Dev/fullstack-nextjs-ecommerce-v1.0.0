'use client'
import AddProduct from "@/features/dashboard/products/components/AddProduct";
import Link from "next/link";

export default function ProductAdd(){
    return(
        <>
                    {/* <!-- Page Header --> */}
            <section className="products-page-header">

                <div className="slug-link-product">
                   <h6> لینک محصول :</h6>
                    <div className="flex gap-2">
                 <p>http://localhost:3000/product/<Link href={"/"} className="">text</Link></p>
                
                <button className="secondary-button">ویرایش</button>
                </div>

                </div>
                <a href="/dashboard/products" className="secondary-button">
                    بازگشت به محصولات
                </a>
            </section>
<AddProduct/>
        </>
    )
}