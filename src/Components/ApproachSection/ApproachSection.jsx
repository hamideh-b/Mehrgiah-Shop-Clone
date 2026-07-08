import aboutUs from "../../assets/Images/About-Us-1.jpg";
import { approachData } from "../../data/aboutData";
import ApproachCard from "./ApproachCard";

const ApproachSection = () => {
  return (
    <section className="lg:px-8 xl:px-16 2xl:px-36 bg-[#fafafa] py-8">
      <div className="text-center mb-16">
        <h2 className="text-[#006A04] text-2xl font-bold p-4">
          رویکرد ما در مهرگیاه
        </h2>
        <p className="text-gray-400">
          کیفیت ممتاز پایدار، سالم و سلامت محور که به آن باور داریم
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-6">
        <div>
          {approachData.rightColumn.map((item) => (
            <ApproachCard key={item.id} {...item} />
          ))}
        </div>
        <div className="px-4">
          <img className="block object-cover" src={aboutUs} alt="about-us" />
        </div>
        <div>
          {approachData.leftColumn.map((item) => (
            <ApproachCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
