import { aboutSectionData } from "../../../data/aboutData";

const AboutSection = ({ img }) => {
  return (
    <section className="bg-[#075748] text-white relative py-16 px-5  ">
      <div className="absolute w-full h-full top-0 left-0 bg-bottom-left  lg:bg-top-left bg-no-repeat opacity-10 bg-[url('/Images/2-gol-2.png')] bg-fixed"></div>
      <div className="grid grid-cols-1 lg:grid-cols-2 py-2 mb-4 relative z-5">
        <div className="">
          <img src={img} alt="mehrgiah" className="mx-auto" />
        </div>
        <div className="py-5">
          <h2 className="text-white text-2xl mb-4">{aboutSectionData.title}</h2>
          {aboutSectionData.paragraph.map((item) => (
            <p
              key={item.id}
              className="whitespace-pre-line py-2 leading-8 text-[#A5B636] text-[17px] mb-4"
            >
              {item.description}
            </p>
          ))}

          <h2 className="text-white text-2xl">{aboutSectionData.footer}</h2>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
