'use cleant'
import { useLoginEmail } from "../hook/useLoginEmail";

export default function LoginEmail() {
  const {changehandle,SubmitData} = useLoginEmail()
  return (

                <form onSubmit={SubmitData} className="space-y-5 animate-fadeIn">
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-gray-900">خوش آمدید</h3>
                <p className="text-xs text-gray-500">
                  لطفا اطلاعات حساب خود را وارد کنید
                </p>
              </div>

              <div className="space-y-4 pt-2">
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
                  <div className="flex justify-between items-center mb-1.5 ml-1">
                    <label className="text-xs font-semibold text-gray-700">
                      رمز عبور
                    </label>
                    <a
                      href="#"
                      className="text-[11px] text-gray-400 hover:text-black transition-colors"
                    >
                      فراموشی رمز؟
                    </a>
                  </div>
                  <div className="relative group">
                    <input
                    onChange={changehandle}
                    name="password"
                      type="password"
                      className={`auth-input pr-10`}
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      className="absolute left-3 top-3.5 text-gray-400 hover:text-black transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black cursor-pointer"
                />
                <label
                  htmlFor="remember"
                  className="text-xs text-gray-600 cursor-pointer select-none"
                >
                  مرا به خاطر بسپار
                </label>
              </div>

              <button className="w-full bg-black text-white py-3.5 rounded-xl text-sm font-bold hover:bg-gray-800 active:scale-[0.98] transition-all shadow-lg shadow-gray-200 mt-2">
                ورود به حساب
              </button>
            </form>
  );
}