"use client";
import Image from "next/image";
import AnimatedHeading from "../../_components/AnimatedHeading";
import MainHeading from "../../_components/main-heading";
import SubHeading from "../../_components/sub-heading";
import Paragraph from "../../_components/paragraph";
import Link from "next/link";

export default function Landing() {
  return (
    <section className="min-h-screen bg-white">
      {/* Main Hero Section with Overlay Text */}
      <div className="relative">
        <div className="w-full h-[62vh] md:h-[50vh] lg:h-[80vh] relative">
          <Image
            src="/assets/blog/case-studies/flooding in the Republic of Congo/Webp/1.webp"
            alt="JEAP Partnership Members"
            layout="fill"
            objectFit="cover"
            priority
          />
                        {/* Sticky Top-Right Button */}
      <div className="sticky top-0 z-50 flex justify-end px-4 py-2 bg-transparent">
        <Link
          href="#"
          className="flex items-center gap-2 px-4 py-2 rounded-md border border-green-600 bg-green-400 text-white hover:bg-white hover:text-green-600 transition-all duration-200"
        >
          <span className="hidden md:inline font-semibold">BACK</span>
          <span className="text-xl font-bold">←</span>
        </Link>
      </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1b5632]"></div>

          {/* Hero Text */}
          {/* <div className="absolute bottom-10 w-full">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
              <MainHeading className="text-white">
                ADDRESSING THE HEALTH IMPACTS OF FLOODING IN THE REPUBLIC OF
                CONGO
              </MainHeading>
            </div>
          </div> */}
        </div>
      </div>

      {/* Main Content */}
      <div className=" md:pb-10 md:pt-6  bg-gradient-to-b from-[#1b5632] via-[#195334] to-[#01205d] text-white">
        <MainHeading className="text-white max-w-7xl mx-auto text-left px-6 md:px-12 py-8">
          ADDRESSING THE HEALTH IMPACTS OF FLOODING IN THE REPUBLIC OF CONGO
        </MainHeading>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 px-6 md:px-12 py-8">
          <SubHeading className="lg:col-span-12 lg:mb-8 italic">
            African emergency responders are on the frontlines of the global
            climate crisis. WHO and Africa CDC are making sure they have what
            they need.{" "}
          </SubHeading>
          {/* Subtitle - Full width on mobile, 4/12 on desktop */}
          <div className="lg:col-span-4 order-2">
            <AnimatedHeading linecolor="white">
              THE SITUATION: CONGO HIT HARD BY FLOODING AS CLIMATE-RELATED
              DISASTERS RISE ACROSS THE CONTINENT.
            </AnimatedHeading>
          </div>

          {/* Paragraph - Full width on mobile, 8/12 on desktop */}
          <div className="lg:col-span-8 order-3">
            <Paragraph>
              The Africa region records about 2-3 health emergencies every
              single week of which more than 50% are related to climate change.
              Floods are fueling outbreaks of cholera and other water-borne
              diseases, droughts are causing food insecurity associated with
              poor health and rising temperatures are creating conditions for
              disease-carrying mosquitos to thrive<sup>1</sup>. Between 2030 and
              2050, it is estimated that climate change will take the lives of
              an additional 250,000 people per year – of which the majority will
              be in low-income countries, including Africa. Despite contributing
              only 4% to the world’s carbon emissions, 7 out of the 10 countries
              most vulnerable to the impacts of climate change globally are
              located in Africa.<sup>2</sup>
            </Paragraph>
          </div>

          {/* Image - Full width on both mobile and desktop, appears at bottom */}
          <div className="lg:col-span-12 order-4 lg:mt-8">
            <div className="relative w-full bg-[#315c71] bg-opacity-75 text-white py-8 px-4">
              <div className="container mx-auto text-center">
                <SubHeading>
                  <span className="font-bold text-3xl">In January 2024,</span>{" "}
                  the Republic of Congo felt the impact of the growing worldwide
                  climate emergency. The country experienced unprecedented
                  rainfall that directly impacted over{" "}
                  <span className="font-bold text-3xl">
                    320,000 individuals
                  </span>
                  . The disaster disrupted lives and livelihoods, damaged vital
                  infrastructure and increased the risk of water-borne diseases.
                </SubHeading>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
