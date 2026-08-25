"use client";

import LoginEmail from "@/features/auth/component/LoginEmail";
import LoginMobile from "@/features/auth/component/LoginMobile";
import RegisterEmail from "@/features/auth/component/RegisterEmail";
import { useState } from "react";

export default function Login() {
  const [activeTab, setActiveTab] = useState("email-login");

  return (
    <>
      <div className="w-full max-w-[400px] bg-white rounded-3xl shadow-2xl shadow-gray-200/50 overflow-hidden border border-gray-100">
        <div className="pt-8 px-8 pb-2 text-center">
          {/* تب‌ها */}
          <div className="flex relative border-b border-gray-100">
            {[
              { id: "email-login", label: "ورود" },
              { id: "register", label: "ثبت‌نام" },
              { id: "mobile", label: "موبایل" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 pb-4 text-sm font-medium transition-all duration-300 relative outline-none ${
                  activeTab === tab.id
                    ? "text-black"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black rounded-full animate-slideIn" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* بدنه فرم‌ها */}
        <div className="p-8 pt-6 min-h-[340px] flex flex-col justify-center">
          {/* 1. ورود با ایمیل */}
          {activeTab === "email-login" && <LoginEmail />}

          {/* 2. ثبت‌نام */}
          {activeTab === "register" && <RegisterEmail />}

          {/* 3. موبایل */}
          {activeTab === "mobile" && <LoginMobile />}
        </div>
      </div>
    </>
  );
}
