function Google() {
  return (
    <svg
      className="mr-3"
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 0 24 24"
      width="24">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
      <path d="M1 1h22v22H1z" fill="none" />
    </svg>
  );
}
function Facebook() {
  return (
    <svg
      className="h-8 w-8 mr-3"
      xmlns="http://www.w3.org/2000/svg"
      height="800"
      width="1200"
      viewBox="-204.79995 -341.33325 1774.9329 2047.9995">
      <path
        d="M1365.333 682.667C1365.333 305.64 1059.693 0 682.667 0 305.64 0 0 305.64 0 682.667c0 340.738 249.641 623.16 576 674.373V880H402.667V682.667H576v-150.4c0-171.094 101.917-265.6 257.853-265.6 74.69 0 152.814 13.333 152.814 13.333v168h-86.083c-84.804 0-111.25 52.623-111.25 106.61v128.057h189.333L948.4 880H789.333v477.04c326.359-51.213 576-333.635 576-674.373"
        fill="#1877f2"
      />
      <path
        d="M948.4 880l30.267-197.333H789.333V554.609C789.333 500.623 815.78 448 900.584 448h86.083V280s-78.124-13.333-152.814-13.333c-155.936 0-257.853 94.506-257.853 265.6v150.4H402.667V880H576v477.04a687.805 687.805 0 00106.667 8.293c36.288 0 71.91-2.84 106.666-8.293V880H948.4"
        fill="#fff"
      />
    </svg>
  );
}

export default function Login() {
  return (
    <div className="bg-gradient-45 from-pink-200 to-zinc-50 h-screen py-12">
      <div className="max-w-96 relative mx-auto p-10 border-[10px] border-pink-200 rounded-2xl flex flex-col justify-evenly text-center bg-red-50">
        <div className="mb-6">
          <h2 className="font-extrabold text-2xl text-zinc-800 mb-2 font-Pinar">
            روز بخیر، امین
          </h2>
          <p className="text-zinc-700 text-sm">
            برای ادامه وارد حساب کاربری خود شوید
          </p>
        </div>
        <div className="*:bg-transparent *:placeholder:text-zinc-400 *:border *:border-zinc-400 *:p-2 *:rounded-lg *:w-72 *:transition-shadow mb-5">
          <input
            className="mb-4 border-zinc-300 shadow-sm focus:border-pink-300 focus:ring focus:ring-pink-200/50"
            type="email"
            placeholder="ایمیل"
          />
          <input
            className="border-zinc-300 shadow-sm focus:border-pink-300 focus:ring focus:ring-pink-200/50"
            type="password"
            placeholder="رمز عبور"
          />
        </div>
        <div className="flex items-center mb-6">
          <input
            id="remember"
            className="w-5 h-5 bg-transparent text-pink-500 border ring-pink-500 border-zinc-300 shadow rounded checked:bg-pink-500 checked:ring-pink-500 focus:ring-pink-500"
            type="checkbox"
          />
          <label
            htmlFor="remember"
            className="mr-2 text-sm font-semibold text-zinc-800 ">
            مرا بخاطر بسپار
          </label>
          <a
            href="#"
            className="font-semibold text-zinc-400 text-sm mr-auto hover:text-zinc-800 transition-colors">
            فراموشی رمز عبور
          </a>
        </div>
        <button
          type="submit"
          className="w-full bg-zinc-900 text-white font-bold hover:bg-zinc-900/90 rounded-lg p-3 transition-colors mb-10">
          ورود
        </button>
        <div className="relative text-center mb-10">
          <span className="block w-full h-px bg-zinc-400"></span>
          <p className="text-zinc-400 text-sm font-semibold absolute right-28 -top-3 bg-pink-50 w-fit px-3">
            یا ورود با
          </p>
        </div>
        <div className="flex flex-col *:font-bold *:text-zinc-800 *:bg-white *:rounded-lg *:py-3 *:flex *:items-center *:justify-center">
          <a
            className="mb-6 hover:ring-1 hover:ring-pink-600 transition-all"
            href="#">
            Login With Google
            <Google></Google>
          </a>
          <a
            className="hover:ring-1 hover:ring-pink-600 transition-all"
            href="#">
            Login With Facebook <Facebook></Facebook>
          </a>
        </div>
      </div>
    </div>
  );
}
