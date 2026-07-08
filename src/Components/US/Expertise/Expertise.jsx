import { expertiseData } from "../../../data/aboutData";

const Expertise = ({ img }) => {
  return (
    <section className="bg-[url('/Images/QWD-min.jpg')] bg-fixed relative px-5  ">
      <div className="absolute inset-0 bg-bottom-right bg-no-repeat opacity-50 bg-[url('/Images/4-gol-300x242-1.png')] "></div>
      <div className="grid grid-cols-1 lg:grid-cols-2 mb-4 relative z-5">
        <div className="text-center py-16">
          <h2 className="text-[#A5B636] text-2xl mb-4">
            {" "}
            {expertiseData.title}
          </h2>
          {expertiseData.paragraph.map((item) => (
            <p
              key={item.id}
              className="text-white text-lg mb-4 font-extralight"
            >
              {item.description}
            </p>
          ))}
          <p className="text-[#ece44d] text-lg mb-4 font-extralight">
            {expertiseData.footer}
          </p>
        </div>
        <div className="h-120">
          <img
            src={img}
            alt="mehrgiah"
            className="mx-auto w-full h-full block object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Expertise;
