"use client";

import { useState } from "react";
import { EyeOpen, EyeClose, Google, Facebook } from "@/components/Icons";

export default function Login() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible((prevState) => !prevState);

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
        <div className="relative mb-5">
          <input
            className="mb-4 shadow-sm focus:border-pink-300 focus:ring focus:ring-pink-200/50 bg-transparent placeholder:text-zinc-400 border border-zinc-400 p-2 rounded-lg w-72 transition-shadow"
            type="email"
            placeholder="ایمیل"
          />
          <input
            className="shadow-sm focus:border-pink-300 focus:ring focus:ring-pink-200/50 bg-transparent placeholder:text-zinc-400 border border-zinc-400 p-2 rounded-lg w-72 transition-shadow"
            type={isVisible ? "text" : "password"}
            placeholder="رمز عبور"
          />
          <button
            className="absolute left-2 cursor-pointer top-[68px]"
            onClick={toggleVisibility}>
            {isVisible ? <EyeOpen /> : <EyeClose />}
          </button>
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
