import Image from "next/image";
import Paragraph from "../../_components/paragraph";
import SubHeading from "../../_components/sub-heading";
import AnimatedHeading from "../../_components/AnimatedHeading";
import { BlockQuote } from "../../_components/QuoteSection";

export default function CapacityBuilding() {
  return (
    <section className="bg-white pb-12">
      <div className="relative">
        <div className="hidden lg:grid mx-auto flex justify-evenly grid-cols-1 lg:grid-cols-10 w-[73%]">
          <div className="col-span-4 order-1">
            <AnimatedHeading linecolor="black">
              THE PEOPLE AT THE HEART OF SUPPLY CHAINS: BOLSTERING AFRICA’S OSL
              WORKFORCE THROUGH CAPACITY BUILDING
            </AnimatedHeading>

            <Paragraph className="pt-10">
              The JEAP’s OSL team is crucial in ensuring the timely delivery of
              medical equipment and expert assistance through efficient
              transportation, delivery, and storage of essential medical and non
              medical supplies. Additionally, the OSL teams build emergency
              response capacities to facilitate Africa’s rapid and effective
              crisis management. They possess a wide array of technical skills
              utilized during emergency response missions including managers,
              supply chain specialists, water sanitation and hygiene (WASH)
              engineers, construction engineers, mechanics, cold chain experts
              and microbiologists, whose services are tailored to each crisis
              they are responding to.<sup>5</sup>
            </Paragraph>
          </div>
          <div className="col-span-5 col-start-7 order-2 flex items-center justify-center">
            <img
              className="h-[90%]"
              src="/assets/blog/case-studies/Enhancing Operations Support and Logistics/webp/Nyiraminani_Colette_3L7A1389.webp"
            ></img>
          </div>
        </div>

        {/** Mobile Section */}
        <div className="block lg:hidden">
          <img
            className=""
            src="/assets/blog/case-studies/Enhancing Operations Support and Logistics/webp/Nyiraminani_Colette_3L7A1389.webp"
          ></img>
          <div className="w-[80%] mx-auto">
            <div className="pt-8">
              <AnimatedHeading linecolor="black">
                THE PEOPLE AT THE HEART OF SUPPLY CHAINS: BOLSTERING AFRICA’S
                OSL WORKFORCE THROUGH CAPACITY BUILDING
              </AnimatedHeading>

              <Paragraph className="md:pt-10 pt-8">
                The JEAP’s OSL team is crucial in ensuring the timely delivery
                of medical equipment and expert assistance through efficient
                transportation, delivery, and storage of essential medical and
                non medical supplies. Additionally, the OSL teams build
                emergency response capacities to facilitate Africa’s rapid and
                effective crisis management. They possess a wide array of
                technical skills utilized during emergency response missions
                including managers, supply chain specialists, water sanitation
                and hygiene (WASH) engineers, construction engineers, mechanics,
                cold chain experts and microbiologists, whose services are
                tailored to each crisis they are responding to.<sup>5</sup>
              </Paragraph>
            </div>
          </div>
        </div>

        <div className="md:w-[73%] w-[80%] m-auto grid grid-cols-1 lg:grid-cols-10 md:py-10 py-8">
          <Paragraph className="col-span-10">
            The JEAP has prioritized investing in in-person training to build
            OSL workforce competencies such as forecasting, inventory
            management, supply chain management, operations support, and health
            logistics. These trainings have by mid-2024 benefited over 125
            people, most of whom are government staff. As of June 2024,
            participants from Ethiopia, ⁠Rwanda, Tanzania, Botswana, and Namibia
            took part in a training in Kenya, while participants from
            Mauritania, Togo, Senegal and Namibia participated in a training in
            Senegal. These trainees have since been deployed to respond to
            emergencies both in their country and otherwise.
          </Paragraph>
        </div>
      </div>
      <BlockQuote
        quote="In the OSL training, we learned about treatment center design and understanding patient flow. This was exactly the skillset I later used when I was deployed to respond to a cholera outbreak in Malawi. The training helped me understand how to make the environment more conducive to the provision of high-quality care by the clinicians."
        author="Joshua Tim"
        position="AVoHC-SURGE Responder from Botswana"
        organization="deployed to respond to the Cholera outbreak in Malawi in March 2023"
        big={true}
      ></BlockQuote>
    </section>
  );
}
