const SignUpForm = () => {
  return (
    <form action="">
      <label htmlFor="name">آدرس ایمیل</label>
      <input
        className="block w-full p-2 outline-0  border  border-gray-300 my-2"
        placeholder="آدرس ایمیل"
        type="text"
      />
      <button className="bg-[#004941] w-full text-center text-white  py-2 mt-4 cursor-pointer hover:bg-[#0c7b6e]">
        عضویت
      </button>
    </form>
  );
};

export default SignUpForm;
