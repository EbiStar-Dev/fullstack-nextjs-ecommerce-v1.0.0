"use client";

import { useState } from "react";

export default function LoginMobile() {
  const [step, setStep] = useState("phone"); // وضعیت فعلی: phone یا code

  return (
    <form className="space-y-5 animate-fadeIn">
      <div className="space-y-1">
        <h3 className="text-lg font-bold text-gray-900">ورود سریع</h3>
        <p className="text-xs text-gray-500">
          {step === "phone" ? "کد تایید برای شما پیامک می‌شود" : "کد ارسال شده را وارد کنید"}
        </p>
      </div>

      {/* بخش شماره موبایل */}
      {step === "phone" && (
        <div className="pt-2">
          <label className="block text-xs font-semibold text-gray-700 mb-1.5 ml-1">
            شماره موبایل
          </label>
          <div className="relative">
            <input
              type="tel"
              dir="ltr"
              className="auth-input text-left !pl-12"
              placeholder="0912 345 6789"
            />
            <span className="absolute left-4 top-3.5 text-gray-400 text-sm select-none">
              🇮🇷
            </span>
          </div>
        </div>
      )}

      {/* بخش ۶ اینپوت کد (فقط وقتی نمایش داده می‌شود که step برابر code باشد) */}
      {step === "code" && (
        <div className="flex justify-center gap-2 pt-4 dir-ltr">
          {[...Array(6)].map((_, i) => (
            <input
              key={i}
              type="text"
              maxLength={1}
              className="w-10 h-12 text-center text-lg font-bold border border-gray-200 rounded-lg focus:border-black focus:outline-none transition-all"
            />
          ))}
        </div>
      )}

      <button
        type="button"
        onClick={() => setStep("code")} // با کلیک، وضعیت به code تغییر می‌کند
        className="w-full bg-black text-white py-3.5 rounded-xl text-sm font-bold hover:bg-gray-800 active:scale-[0.98] transition-all shadow-lg shadow-gray-200"
      >
        {step === "phone" ? "دریافت کد تایید" : "بررسی کد"}
      </button>

      {step === "phone" && (
        <p className="text-[11px] text-gray-400 text-center leading-relaxed px-4">
          با ادامه فرآیند،{" "}
          <a href="#" className="underline hover:text-black decoration-gray-300 hover:decoration-black transition-all">
            قوانین و مقررات
          </a>{" "}
          را می‌پذیرید.
        </p>
      )}
      {step === "code" && (
         <button type="button" onClick={() => setStep("phone")} className="text-xs text-gray-500 mx-auto block hover:text-black">
           تغییر شماره موبایل
         </button>
      )}
    </form>
  );
}