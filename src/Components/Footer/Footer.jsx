import {
  FaEnvelope,
  FaLocationDot,
  FaMobileScreenButton,
  FaPhoneFlip,
} from "react-icons/fa6";
import img1 from "../../assets/Images/Asset-3@2x.png";
import imgBackground from "../../assets/Images/mehrgiahImg.png";
const Footer = () => {
  window.sc;
  return (
    <footer className="bg-[#075748] text-white relative py-16 px-5 lg:px-8 xl:px-16 2xl:px-36  ">
      <div className="hidden lg:block absolute w-full h-full top-0 left-0 bg-top-left bg-contain bg-no-repeat opacity-75 bg-[url('/Images/mehrgiahcom.png')] "></div>
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 border-b border-gray-400 py-2 mb-4">
        <div className="order-2 lg:order-1 mx-auto mb-4">
          <div className="flex flex-col  items-center lg:flex-row gap-4 lg:items-baseline mb-5 ">
            <FaPhoneFlip />
            <p>امور مصرف کنندگان: 54894- 021</p>
          </div>
          <div className="flex flex-col  items-center lg:flex-row gap-4 lg:items-baseline mb-5">
            <FaLocationDot />
            <div className="text-center lg:text-right">
              <p className="">آدرس شرکت:</p>
              <address className="text-gray-300 text-sm mt-1">
                خیابان گاندی جنوبی، نبش خیابان نهم، پلاک۲۷، طبقه ۵ شرکت پدیده
                سبز مهرگیا
              </address>
            </div>
          </div>
          <div className="flex flex-col  items-center lg:flex-row gap-4 lg:items-baseline mb-5">
            <FaMobileScreenButton />
            <div className="text-center lg:text-right">
              <p className="">پشتیبانی فروش آنلاین:</p>
              <p className="text-gray-300 text-sm mt-1">09018395022</p>
            </div>
          </div>
          <div className="flex flex-col  items-center lg:flex-row gap-4 lg:items-baseline">
            <FaEnvelope />
            <div className="text-center lg:text-right">
              <p className="">ایمیل</p>
              <p className="text-gray-300 text-sm mt-1 ">
                Carecenter@mehr-e-giah.com
              </p>
              <p className="text-gray-300 text-sm mt-1 ">
                Export@mehr-e-giah.com
              </p>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <img src={img1} alt="mehrgiah" className="mx-auto" />
        </div>
        <div className="order-3 lg:hidden h-96">
          <img
            src={imgBackground}
            alt="mehrgiah"
            className="mx-auto w-full h-full block object-scale-down"
          />
        </div>
      </section>
      <p className="text-center text-sm font-light">
        تمامی حقوق برای شرکت پدیده سبز مهر گیا محفوظ است
      </p>
    </footer>
  );
};

export default Footer;
