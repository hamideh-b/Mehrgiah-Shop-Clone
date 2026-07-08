import ApproachSection from "../../Components/ApproachSection/ApproachSection";
import CeoMessage from "../../Components/CeoMessage/CeoMessage";
import ProductCategoreis from "../../Components/ProductCategoreis/ProductCategoreis";
import US from "../../Components/US/Us";

const AboutUS = () => {
  return (
    <main className="mt-28 lg:mt-40">
      <US />
      <CeoMessage />
      <ProductCategoreis />
      <ApproachSection />
    </main>
  );
};

export default AboutUS;
