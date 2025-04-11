import AnimatedHeading from "../../_components/AnimatedHeading";
import Paragraph from "../../_components/paragraph";

export default function Challenges() {
  const imageUrl = "/assets/blog/case-studies/Gender_equality/Webp_format/5.webp";
  const title = "Despite Strong Progress in AVOHC SURGE Policies and Implementation, Continues Efforts Are Needed as Active Responders Continue to Face Challenges";
  const para1 =
    "In rural environments in particular, female responders struggle with the fact that there is often limited access to clean water and sanitation facilities. They frequently lack proper lighting and security locks, creating security concerns for women. Studies show that sanitation facilities are locations with heightened risk of harassment and violence against women.";
 const para2 = "In addition, cultural differences can hinder communication between deployed responders and local communities, especially for women responders. Gender norms in certain cultures might influence how comfortable people are communicating with, receiving assistance from, or learning from women in positions of authority. Such barriers to women’s participation in the health workforce can slow down implementation and impact of interventions."
 const para3 = "The AVoHC-SURGE initiative provides an opportunity for leadership at all levels to continue introducing policies and processes that can improve female emergency responders to work effectively and safely, ultimately improving the care received by the communities."
  return (
    <div className="w-full my-4 md:my-12 lg:my-16">
      {/* Large screen layout (md and above) */}
      <div className="hidden md:block bg-white relative">
        <div className="w-full">
          {/* Image container - Placing image half inside the gradient box */}
          <div className="max-w-7xl mx-auto relative z-10 flex items-center justify-center">
            <img src={imageUrl} alt="Featured image" className="w-full  object-cover h-[40rem] relative -mb-32" />
          </div>

          {/* Content section with gradient background */}
          <div className="bg-gradient-to-b from-[#00205C] to-[#1A5632] px-8 lg:px-0 pt-32 pb-16 relative z-0">
            <div className="max-w-7xl mx-auto flex flex-row gap-8 pt-6 min-h-96">
              <div className="w-[35%]">
                <AnimatedHeading linecolor="white" className="text-white">
                {title}
                </AnimatedHeading>
              </div>
              <div className="w-[65%] text-white ">
                <Paragraph className="mb-2">{para1}</Paragraph>
                <Paragraph className="mb-2">{para2}</Paragraph>
                <Paragraph>{para3}</Paragraph>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile layout (below md) */}
      <div className="block md:hidden bg-white">
        <div className="container mx-auto px-4">
          {/* Image section */}
          <div className="w-full">
            <div className="aspect-w-16 aspect-h-9 relative">
              <img src={imageUrl} alt="Featured image" className="h-full w-full" />
            </div>
          </div>

          {/* Content section */}
          <div className="w-full p-4 bg-white">
            <h2 className="text-xl font-bold uppercase tracking-tight text-gray-900 mb-2">{title}</h2>
            <p className="text-sm text-gray-600">{para1}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
