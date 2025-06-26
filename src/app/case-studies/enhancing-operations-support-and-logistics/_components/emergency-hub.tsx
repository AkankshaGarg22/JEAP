import Image from "next/image";
import AnimatedHeading from "../../_components/AnimatedHeading";
import Paragraph from "../../_components/paragraph";

export default function EmergencyHub() {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#00205C] to-[#1A5632] py-8 px-6 md:px-12 lg:px-16 md:my-8 my-4 overflow-visible">
      {/* Content Container */}
      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between">
          {/* Text Content - Takes full width on mobile, ~60% on desktop */}
          <div className="lg:w-[65%] z-10 text-white">
            <AnimatedHeading linecolor="white" width="20%">
            An Africa-Led Resource Center: WHO’s Regional Emergency Hubs
            </AnimatedHeading>

            <Paragraph className="text-gray-100 my-10">
              WHO’s Africa Regional Office (AFRO) Emergency Hubs in Africa are
              central to the JEAP’s approach to effective emergency response.
              The Hubs act as command centres for rapid action, efficient
              coordination, and optimal resource allocation. Strategic placement
              of hubs in Kenya, Senegal, and – shortly – South Africa is
              critical to maximizing operational efficiency: The hub in Nairobi,
              Kenya serves eastern and southern Africa, while the hub in Dakar,
              Senegal covers western and central Africa. These locations were
              chosen for the availability of sufficiently advanced
              infrastructure, international airports, and seaport access.
            </Paragraph>
          </div>

          {/* Image Container - Positioned for overlap on desktop */}
          <div className="lg:w-[30%] lg:h-[25rem]">
            <div className="h-64 lg:h-full w-full relative">
              <img
                src="/assets/blog/case-studies/Enhancing Operations Support and Logistics/webp/WHO00792.webp"
                alt="Woman health worker walking in a green field"
                className="object-cover h-full w-full"
              />
            </div>
          </div>
        </div>

        <div className="bg-[#386d64] mt-8 md:mt-0 p-4 md:p-8 text-white w-full">
          <Paragraph className="line-height-fix">
            In the first six months of{" "}
            <span className="font-bold md:text-3xl text-xl">2024 alone</span>, WHO’s Hubs
            delivered{" "}
            <span className="font-bold md:text-3xl text-xl">
              {" "}
              71 shipments of supplies to 29 countries
            </span>
            , for a total{" "}
            <span className="font-bold md:text-3xl text-xl">value of $3,124,064 USD</span>.
            These shipments supported EPR efforts for outbreaks of{" "}
            <span className="font-bold md:text-3xl text-xl">
              Cholera, Dengue, Malaria, Diphtheria, and COVID-19
            </span>
            . Additionally, supplies were provided to assist with
            climate-related emergencies, including cyclones, floods, and
            landslides. Kenya has received the greatest amount of supplies
            support valuing
            <span className="font-bold md:text-3xl text-xl"> $978,095 USD </span>in this
            timeframe, while other recipient countries received between
            <span className="font-bold md:text-3xl text-xl">
              {" "}
              $60,000 and $291,000 USD
            </span>
            .
          </Paragraph>
        </div>
      </div>
    </section>
  );
}
