import { useState } from "react";
import LeafIcon from "../../Components/LeafIcon/LeafIcon";
import SignUpForm from "../../Components/SignUpForm/SignUpForm";
import LogInForm from "../../Components/AccountSideBar/LogInForm";

const CreateAccount = () => {
  const [isLogIn, setIsLogIn] = useState(false);
  return (
    <main className="mt-14 lg:mt-28">
      <section className="h-40 lg:h-72 flex flex-col justify-center items-center bg-no-repeat  bg-[url('/Images/footerbg.jpg')] bg-cover ">
        <h1 className="text-center text-white text-2xl lg:text-4xl ">
          {" "}
          حساب کاربری
        </h1>
      </section>
      <section className="px-5 lg:px-8 xl:px-16 2xl:px-36 grid grid-cols-1 lg:grid-cols-2 lg:gap-20 my-8">
        <div>
          <h3 className="text-2xl py-2">{isLogIn ? "ورود" : "عضویت"}</h3>
          {isLogIn ? <LogInForm /> : <SignUpForm />}
        </div>
        <div className="lg:hidden mt-8">
          <LeafIcon />
        </div>
        <div className="text-center">
          <h3 className="text-2xl py-1">
            {" "}
            {isLogIn ? "حساب ندارید؟" : "حساب دارید؟"}
          </h3>
          <p className="text-gray-700 py-2">
            ثبت نام در این سایت به شما امکان می دهد به وضعیت سفارش و سابقه خود
            دسترسی پیدا کنید. فقط قسمتهای زیر را پر کنید و به زودی حساب جدیدی
            برای شما راه اندازی خواهیم کرد. ما فقط از شما اطلاعات لازم برای
            سریعتر و آسان تر شدن روند خرید را می خواهیم.
          </p>
          <button
            className="bg-[#004941] text-center text-white px-8 py-2 mt-4 cursor-pointer hover:bg-[#0c7b6e]"
            onClick={() => {
              setIsLogIn((prev) => !prev);
            }}
          >
            {isLogIn ? "ثبت نام کنید" : "وارد شوید"}
          </button>
        </div>
      </section>
    </main>
  );
};

export default CreateAccount;
