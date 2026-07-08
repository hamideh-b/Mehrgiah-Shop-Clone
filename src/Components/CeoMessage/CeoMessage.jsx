import { ceoMessageData } from "../../data/aboutData";

const CeoMessage = () => {
  return (
    <section className="px-5 lg:px-8 xl:px-16 2xl:px-36">
      <h3 className="text-[#004630] text-3xl p-8">پیام مدیرعامل</h3>

      <div className="bg-[#EBFFF5]">
        <blockquote className=" p-4 relative">
          <span className=" text-8xl  text-[#004630]">“</span>

          <div className="-mt-8 ">
            {ceoMessageData.map((item) => (
              <p key={item.id} className="leading-7 text-gray-700 py-4">
                {item.description}
              </p>
            ))}
          </div>
          <p className="text-[#004630] text-2xl">علیرضا سرابچی</p>
        </blockquote>
      </div>
    </section>
  );
};

export default CeoMessage;
