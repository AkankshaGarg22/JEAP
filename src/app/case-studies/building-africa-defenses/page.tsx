
import Footer from "../../_components/layout/footer";
import LandingDefenses from "./_components/landingDefenses";
import TextSectionOne from "./_components/textSectionOne";
import { BlockQuote } from "../_components/QuoteSection";
import TextSectionTwo from "./_components/textSectionTwo";
import TextSectionThree from "./_components/textSectionThree";
import AnimatedHeading from "../_components/AnimatedHeading";


export default function Index() {
  return (
    <div>
      <LandingDefenses />
      <TextSectionOne/>
      <BlockQuote
          quote="During the covid-19 era, very few countries had access to genomic surveillance. Those that did have capacity did not treat their laboratories like research facilities capable of studying organisms in real time. As a result, we had very limited resources to respond to the outbreak or pandemic effectively"
          author="Dr Nicksy Gumede-Moeletsi"
          position="Senior Virologist"
          organization="WHO Regional Office for Africa"
        />
      <TextSectionTwo/>
      <TextSectionThree/>
      <div className="w-full bg-white py-8"></div>
      <BlockQuote
          quote="Through jeap, we are leveraging all the insights and advancements gained during the covid-19 pandemic to effectively respond to every health situation and event we encounter."
          author="Dr Nicksy Gumede-Moeletsi"
          position="Senior Virologist,"
          organization="WHO Regional Office for Africa"
        />

      <div className="bg-white flex w-full flex-col items-center justify-center py-10">
        <p className="py-2 font-bold w-[80%]">The close working partnership between Africa CDC and WHO allows for highly coordinated and complementary support to the network. Africa CDC provides technical training, sources equipment, and is developing a real-time data-sharing platform to strengthen the capacity of the network. WHO AFRO, through its country offices, acts as a broker, facilitating agreements, navigating customs, and organizing logistics to ensure samples arrive cold and intact for processing. This strong partnership has enabled the establishment of a network of 13 Centers of Excellence (CoEs) serving as sequencing hubs across the continent.</p> <p className="py-2 font-bold w-[80%]"> Underpinning these efforts, there is a need for strong and harmonious laboratory systems overall. The JEAP has supported the strengthening of the broad laboratory system in Africa by developing a continental guideline for sample referral and ensuring a coordinated network for transporting samples for confirmation of priority pathogens. In November 2023, the Africa CDC introduced a laboratory network information management system to monitor and facilitate informed decision-making on network operations.17</p>
      </div>

      <div className="bg-gradient-to-t from-[#1E2859] to-[#1D5539] w-full h-auto flex items-center justify-center py-10">
      <div className="w-[80%] flex flex-col lg:flex-row justify-center items-center ">
         <div className="w-[80%] ">
           <AnimatedHeading linecolor="white" fontSize="20px" className="text-white w-[60%]">
             INCREASED AFRICAN SURVEILLANCE EFFORTS DEMONSTRATE FERTILE GROUND FOR INVESTING IN CONTINENTAL GENOMIC SEQUENCING CAPACITY-BUILDING
           </AnimatedHeading>
         </div>
         <div>
          <p className="text-white">Regular coordination between the Africa CDC and WHO has also helped optimize supply chains for critical laboratory resources like reagents, maximizing the network’s efficiency. For example, the JEAP partnership combined reagents delivered in an Africa CDC starter pack with supplementary reagents from WHO to enable the testing of a broader array of samples.</p>
         </div>
       </div>
      </div>

      <Footer />
    </div>
  );
}
