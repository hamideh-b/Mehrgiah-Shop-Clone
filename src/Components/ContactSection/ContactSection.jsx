import { contactData } from "../../data/aboutData";
import ContactItem from "./ContactItem";
const ContactSection = () => {
  return (
    <section className="px-5 lg:px-8 xl:px-16 2xl:px-36 ">
      <h1 className="text-4xl text-center py-4">تماس با ما</h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-8 py-4">
        {contactData.map((item, index) => (
          <ContactItem
            key={item.id}
            item={item}
            showDivider={index !== contactData.length - 1}
          />
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
