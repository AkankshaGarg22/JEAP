import AnimatedHeading from "../../_components/AnimatedHeading";
import Paragraph from "../../_components/paragraph";

export default function Continent() {
  return (
    <section className="max-w-7xl mx-auto my-12">
      <div className="flex flex-col md:flex-row items-stretch justify-center md:justify-between gap-4 md:gap-0 mb-4">
        <div className="md:w-[50%] h-full flex flex-col justify-center items-start p-4 gap-12 ">
          <AnimatedHeading linecolor="black" className="w-1/2">
          17 Countries Have Onboarded AVOHC-SURGE Members
          </AnimatedHeading>
          <img className="w-full h-full object-contain" src="/assets/blog/case-studies/Gender_equality/Webp_format/map.svg" alt="JEAP Supported Countries Map" />
        </div>

        <div className="md:w-[50%] h-full flex flex-col items-start p-4 gap-12">
          <AnimatedHeading linecolor="black" width="20%" className="">
          Looking Forward: Broadening the Impact of AVOHC-SURGE Across the Continent
          </AnimatedHeading>

          <Paragraph>
            Through its initiatives including AVoHC-SURGE, the JEAP is pushing back against the long history of emergency management and technical expertise being male-dominated fields, including in
            areas such as laboratory sciences, logistics, and disease surveillance.
            <br /> <br/>
            In the years ahead, the JEAP will pursue its vision of seeing each of the 55 African countries form an AVoHC-SURGE initiative and deploy these teams to respond to emergencies both
            nationally and across borders, while simultaneously ensuring the AVoHC-SURGE teams are gender-balanced and GBV and SEAH processes are strengthened and integrated into the response efforts.
          </Paragraph>
        </div>
      </div>
      <div className="w-full h-64 md:h-[40rem]">
        <img className="h-full w-full object-cover object-top" src="/assets/blog/case-studies/Gender_equality/Webp_format/6.webp" alt="" />
      </div>
    </section>
  );
}
