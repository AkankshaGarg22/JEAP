import Image from "next/image";
import Paragraph from "../../_components/paragraph";
import SubHeading from "../../_components/sub-heading";
import AnimatedHeading from "../../_components/AnimatedHeading";
import { BlockQuote } from "../../_components/QuoteSection";

export default function CholeraOutbreak() {
  return (
    <section className="bg-white">
      <div className=" md:p-10 relative bg-gradient-to-b to-[#1b5632] via-[#195334] from-[#01205d] text-white">
        <div className="mx-auto md:flex justify-evenly lg:grid lg:grid-cols-12 w-[80%]">
          <div className="col-span-3 order-1 pt-8 md:pt-0">
            <AnimatedHeading linecolor="white">
              FROM TRAINING TO PRACTICE: A CLOSER LOOK AT OSL SUPPORT TO THE
              CHOLERA OUTBREAK IN MALAWI
            </AnimatedHeading>
          </div>
          <div className="col-span-7 col-start-5 order-2 my-8">
            <Paragraph>
              In 2023, Cyclone Freddy hit Malawi, triggering a natural disaster
              and resulting in the deadliest Cholera outbreak the country had
              ever witnessed. Cyclone Freddy affected over 2 million lives,
              displacing over 659,000 people, injuring over 2000, killing over
              650, and resulting in the disappearance of another 500<sup>6</sup>
              . The protracted Cholera outbreak lasted over 2 years, with over
              59,000 cases reported and over 1,700 deaths<sup>7</sup>. Overall readiness
              capacity for cholera is limited (48%) across the AFRO region,
              including in logistics and procurement (48%).<sup>8</sup> Such an increase in
              one country can rapidly spread through the region, as the cyclones
              and flooding which occurred in Mozambique and Malawi in early 2023
              have been driving factors in the emergence of the disease around
              the continent.
            </Paragraph>
          </div>
        </div>

        <div className="w-[80%] m-auto grid grid-cols-1 lg:grid-cols-10 pb-8">
          <Paragraph className="col-span-12">
            Responders trained by the JEAP supported the Ministry of Health of
            Malawi in containing the outbreak through interventions such as Oral
            Cholera Vaccination (OCV) campaigns, the establishment of oral
            hydration points, improvements in water and sanitation,
            strengthening case management, and community mobilization efforts.
            The JEAP partner organizations also provided humanitarian support
            during the cyclone.
            <br />
            <br /> The deployed JEAP OSL team included a Kenyan health
            logistician colonel, a supply chain specialist from Ethiopia and a
            health logistician from Botswana. The diversity of this group – both
            in terms of skill sets and geographies – ensured a well-rounded set
            of competencies and experiences to tackle the Malawian response and
            its OSL challenges. To respond to this emergency, they were
            incorporated into the incident management system within the OSL
            pillar led by the WHO with support from Africa CDC and the
            government of Malawi.
          </Paragraph>
        </div>

        <div className="mx-auto md:flex justify-evenly lg:grid lg:grid-cols-12 w-[80%]">
          <div className="col-span-4 order-1 flex justify-center">
            <Paragraph className="pb-4 md:pb-0">
              Africa CDC donated $100,000 million USD of essential cholera
              medical supplies to the Malawi Government and deployed 1,100
              community health workers to strengthen risk communication and
              community engagement activities. WHO AFRO played a key role in the
              shipment of supplies during the 2022 outbreak, delivering 10 tons
              of Emergency Health Kits, PPE, Lab & Diagnostics kits, and field
              support materials, valued at $59,401.
            </Paragraph>
          </div>
          <div className="col-span-12 col-start-6 order-2 flex justify-center items-center">
            <img
              className="md:w-[60%] pb-4 md:pb-8"
              src="/assets/blog/case-studies/Enhancing Operations Support and Logistics/webp/WHO00093.webp"
            ></img>
          </div>
        </div>

        <div className="w-[80%] m-auto grid grid-cols-1 lg:grid-cols-10">
          <Paragraph className="col-span-12">
            Thanks to the rapidly deployed emergency response teams, Malawi’s
            largest cholera outbreak was declared contained by March 2022. The
            impact of these response efforts has been long-lasting: The number
            of deaths reported in 2024 have been significantly lower than for
            the same period in 2023. The Malawian government awarded letters of
            appreciation to the JEAP workforce, due to their impactful emergency
            response efforts. <br />
            <br /> The OSL experts newly trained by JEAP have been able to apply
            what they’ve learned from their deployments upon returning to their
            home countries. In addition, they have shared their learnings with
            OSL teams worldwide: The health logistician from Botswana shared his
            experience with global audiences at the International Conference on
            Public Health in Africa (CPHIA) in 2023.
          </Paragraph>
        </div>
      </div>
    </section>
  );
}
