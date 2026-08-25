import { useRegisterEmail } from "../hook/useRegisterEmail";

export default function RegisterEmail() {
    const {RegisterForm,changehandle} = useRegisterEmail()
  return (
    <form onSubmit={RegisterForm} className="space-y-4 animate-fadeIn">
      <div className="space-y-1 mb-4">
        <h3 className="text-lg font-bold text-gray-900">ایجاد حساب</h3>
        <p className="text-xs text-gray-500">به جمع مشتریان ما بپیوندید</p>
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-700 mb-1.5 ml-1">
          نام و نام خانوادگی
        </label>
        <input
          onChange={changehandle}
          name="fullname"
          type="text"
          className="auth-input"
          placeholder="مثلا: علی محمدی"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-700 mb-1.5 ml-1">
          ایمیل
        </label>
        <input
          onChange={changehandle}
          name="email"
          type="email"
          className="auth-input"
          placeholder="name@example.com"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-700 mb-1.5 ml-1">
          رمز عبور
        </label>
        <input
          onChange={changehandle}
          name="password"
          type="password"
          className="auth-input"
          placeholder="حداقل ۸ کاراکتر"
        />
      </div>

      <button className="w-full bg-black text-white py-3.5 rounded-xl text-sm font-bold hover:bg-gray-800 active:scale-[0.98] transition-all shadow-lg shadow-gray-200 mt-4">
        ثبت‌نام رایگان
      </button>
    </form>
  );
}
