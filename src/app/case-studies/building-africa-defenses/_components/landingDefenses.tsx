import Image from "next/image";
import TranslucentBox from "./textWhiteBox";
import AnimatedHeading from "../../_components/AnimatedHeading";

export default function LandingDefenses() {
  return (
    <section className="min-h-screen bg-white">
      {/* Main Hero Section with Overlay Text */}
      <div className="relative">
        <div className="w-full h-[60vh] md:h-[50vh] lg:h-[80vh] relative">
          <Image src="/assets/blog/case-studies/Building Africa’s Defenses/Webp/IMG_2547.webp" alt="JEAP Building Africa's Defenses" layout="fill" objectFit="cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1b5632]"></div>

          {/* Hero Text */}
          <div className="absolute bottom-10 w-full">
            <div className="max-w-6xl mx-auto px-6 md:px-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">BUILDING AFRICA’S DEFENSES: ADVANCING GENOMIC SEQUENCING TO ENSURE PUBLIC HEALTH SECURITY</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className=" md:py-10  bg-gradient-to-b from-[#1b5632] via-[#195334] to-[#01205d] text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 px-6 md:px-12 py-8 md:py-10">
          {/* Subtitle - Full width on mobile, 4/12 on desktop */}
          <div className="lg:col-span-4 order-1">
          <AnimatedHeading linecolor="white">
        GENOMIC SEQUENCING:<br></br> A GAME-CHANGING INNOVATION FOR DISEASE SURVEILLANCE IN AFRICA
      </AnimatedHeading>
          </div>

          {/* Paragraph - Full width on mobile, 8/12 on desktop */}
          <div className="lg:col-span-8 order-2">
            <p className="text-base md:text-lg">
            Major infectious disease outbreaks around the globe in recent years have underscored the urgent need to strengthen laboratory and surveillance capabilities through genomic sequencing in order to track and mitigate the spread of disease.<sup>1</sup> With more disease outbreaks than any other region globally,<sup>2</sup> Africa reported 148 health emergencies in 2023, despite representing only 17% of the global population. Africa’s vulnerability to the spread of infectious disease epidemics is driven by various factors, including climatic and ecological conditions that harbor pathogens and their vectors as well as frequent movements of people, commodities, animals and animal products across national and international borders.<sub>3</sub>
            </p>
          </div>

          {/* Image - Full width on both mobile and desktop, appears at bottom */}
          <div className="lg:col-span-12 order-3 mt-6">
            <div className="w-full h-64 md:h-80 relative">
              <img src="/assets/blog/case-studies/Building Africa’s Defenses/webp/JKG_0940.webp" alt="JEAP Partnership Meeting" className="w-full h-full object-cover object-left-top rounded-lg" />
            </div>
          </div>

        </div>
        <div className="flex items-center justify-center w-[100%]">
          <TranslucentBox 
        text={"Many of these health threats are preventable or controllable with proven public health interventions, **such as disease surveillance, case management, vaccination, and health promotion.** ^^4^^ Yet many countries around the globe are insufficiently prepared to manage disease outbreaks, with Africa being particularly poorly equipped, scoring an average of 50% across the 15 capacities needed to detect, assess, notify, report and respond to public health risks, against a global average of 64%.^^5^^ In this context, a crisis anywhere can quickly spread to become a crisis everywhere. By building up genomic sequencing capacities on the African continent, this game-changing technology has the potential to transform health security in Africa and around the globe."}
        backgroundColor="rgba(255, 255, 255, 0.3)"
        textsize="text-[25px]"
        className="w-[70%]"
        />
        </div>
      </div>
    </section>
  );
}
