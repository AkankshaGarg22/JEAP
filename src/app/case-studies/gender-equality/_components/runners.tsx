import AnimatedHeading from "../../_components/AnimatedHeading";
import Paragraph from "../../_components/paragraph";

export default function Runners() {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#00205C] to-[#1A5632] py-16 px-6 md:px-12 lg:px-16 my-12 lg:my-24 overflow-visible">
      {/* Content Container */}
      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col lg:flex-row lg:items-center">
          {/* Text Content - Takes full width on mobile, ~60% on desktop */}
          <div className="w-full lg:w-[70%] z-10">
            <AnimatedHeading linecolor="white" className="md:w-3/4 text-white">
            Lesotho and Namibia Are Frontrunners in Recruiting and Deploying Women to Their Health Emergency Responder Teams
            </AnimatedHeading>
            
            <Paragraph className="text-gray-100 my-8 md:my-12">
            Lesotho and Namibia have the highest proportions of women in their AVoHC-SURGE teams with 69% women in Lesotho and 65% in Namibia. These successes may reflect the broader status of
            gender equality in these countries, where gender-transformative domestic policies and equal representation have trickled down to public health programs such as emergency workforce.
            </Paragraph>
          </div>

          {/* Image Container - Positioned for overlap on desktop */}
          <div className="lg:transform lg:w-[30%] lg:h-[30rem]">
            <div className="h-64 lg:h-full w-full relative mt-6 lg:mt-0">
              <img src="/assets/blog/case-studies/Gender_equality/Webp_format/4.webp" alt="Woman health worker walking in a green field" className="object-cover h-full w-full" />
            </div>
          </div>
        </div>

        <div className="bg-[#386d64] my-4 p-4 md:p-8 text-white w-full">
          <Paragraph>
            For instance, Namibia has the <span className="font-bold text-3xl">8th highest gender-parity</span> ranking in the world, and is the only country in Sub-Saharan African making the top 10 list. The
            country is one of only five countries on the continent where the current head of state is female. High proportions of women in the workforce have translated to strong economic opportunity
            and participation: <span className="font-bold text-3xl"> With 56% of technical workers and 43.6% of senior officers being women</span>, resulting in Namibia ranking 19th globally in terms of women
            in the workforce.
          </Paragraph>
        </div>
      </div>
    </section>
  );
}
