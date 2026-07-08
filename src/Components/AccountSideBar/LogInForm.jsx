import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LogInForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <form action="" className="" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="name">نام کاربری</label>
      <input
        className="block w-full p-2 outline-0  border  border-gray-300 my-2"
        placeholder="نام کاربری"
        type="text"
      />
      <label htmlFor="">رمز عبور</label>
      <div className="relative">
        <input
          type={`${showPassword ? "text" : "password"}`}
          className="block w-full p-2 outline-0 border border-gray-300 my-2"
          placeholder="رمز عبور"
        />
        <button
          className="absolute left-2  top-1/2 -translate-y-1/2 text-gray-700 hover:text-gray-500 cursor-pointer"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>
      <button className="bg-[#004941] w-full text-center text-white p-2 mt-4 cursor-pointer hover:bg-[#0c7b6e]">
        ورود
      </button>
    </form>
  );
};

export default LogInForm;
