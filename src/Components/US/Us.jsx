import img1 from "../../assets/Images/Asset-3@2x.png";
import img2 from "../../assets/Images/mehrgiahImg.png";
import AboutSection from "./AbouSection/AboutSection";
import Expertise from "./Expertise/Expertise";
import HeroAbout from "./HeroAbout/HeroAbout";
const US = () => {
  return (
    <>
      <HeroAbout />
      <AboutSection img={img1} />
      <Expertise img={img2} />
    </>
  );
};

export default US;
