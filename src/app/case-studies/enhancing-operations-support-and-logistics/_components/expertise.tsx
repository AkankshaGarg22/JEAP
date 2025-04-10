import AnimatedHeading from "../../_components/AnimatedHeading";
import Paragraph from "../../_components/paragraph";

export default function Expertise() {
  const imageUrl = "/assets/blog/case-studies/Enhancing Operations Support and Logistics/webp/IMG_0527.webp";
  const title = "African Expertise in Supply Chain, Data, Innovation & Intelligence: A Closer Look at the Dakar Hub";
  const para1 =
    "The Dakar Hub’s OSL achievements have been an exemplary demonstration of African nations helping one another. With 67 staff members working at the Hub in Dakar, Senegal, it hosts experts from a range of technical areas: Emergency Preparedness Program (EMP), Emergency Response Program (EMR), Health Information and Risk Assessment Program (HIR), and OSL. The Hub boasts a warehouse with a storage capacity of 12,000 m³ with racks for both medical and non-medical supplies, along with 90 offices and a 300-seat auditorium for training, workshops, and large gatherings.";
 const para2 = "In 2024, the hub processed a total of 21 shipments to 16 countries across the continent, with a total value of $452,906. The highest value of shipments were made to the Central African Republic ($136,082 USD) and the Republic of Congo ($105,761 USD)."
 const para3 = "The hub supported six types of Response Operations. The Cholera outbreak emergency response received the greatest budgetary value of products at $208,741 USD. Cyclones, flooding, and landslides received the second largest amount of support from the hub, with items valuing a total of $105,761 USD."
  return (
    <section className="w-full md:my-12">
      {/* Large screen layout (md and above) */}
      <div className="bg-white relative">
        <div className="w-full">         

          {/* Content section with gradient background */}
          <div className="bg-gradient-to-b from-[#00205C] to-[#1A5632] pb-10 md:pt-10 relative z-0">
          <div className="max-w-7xl mx-auto relative z-10 flex items-center justify-center">
            <img src={imageUrl} alt="Featured image" className="w-full object-cover md:h-[40rem] h-[30rem] relative" />
          </div>
            <div className="max-w-7xl mx-auto md:flex flex-row gap-28 pt-10 min-h-96 px-8 md:px-0">
              <div className="md:w-[20%] w-[80%]">
                <AnimatedHeading linecolor="white" className="text-white">
                {title}
                </AnimatedHeading>
              </div>
              <div className="md:w-[70%] text-white ">
                <Paragraph className="my-2 pt-8 md:pt-0">{para1}</Paragraph>
                <Paragraph className="my-2">{para2}</Paragraph>
                <Paragraph>{para3}</Paragraph>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
