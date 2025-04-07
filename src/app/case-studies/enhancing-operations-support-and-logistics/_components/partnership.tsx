import Image from "next/image";
import AnimatedHeading from "../../_components/AnimatedHeading";
import Paragraph from "../../_components/paragraph";

export default function Partnership() {
  return (
    <section className="bg-white md:mb-40 md:mt-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 px-6 md:px-12 py-8">
        {/* Subtitle - Full width on mobile, 4/12 on desktop */}
        <div className="lg:col-span-3 order-1">
          <AnimatedHeading linecolor="black">
            THE JEAP PARTNERSHIPS’ EFFORTS TO STRENGTHEN OPERATIONS SUPPORT AND
            LOGISTICS
          </AnimatedHeading>
        </div>

        {/* Paragraph - Full width on mobile, 8/12 on desktop */}
        <div className="lg:col-span-8 order-2">
          <Paragraph>
            Recognizing the urgent need to strengthen emergency preparedness and
            response (EPR) in Africa, capacities, the Africa Centres for Disease
            Control and Prevention (Africa CDC) and WHO forged a groundbreaking
            partnership under the Joint Emergency Action Plan (JEAP). This
            regional platform focuses on consolidating efforts across the
            continent to dramatically improve how countries prepare for, detect,
            and respond to emergencies, while simultaneously ensuring no country
            is left behind. Leveraging each agency’s resources and expertise,
            including in operations, logistics and supply chains, the JEAP aims
            to enhance countries’ capacities to ensure the timely availability
            of high-quality health care supplies. <br />
            <br />
            The JEAP partners have also deployed their OSL expertise to tackle
            many crises in the region. In 2023, WHO dispatched 142 shipments of
            healthcare supplies worth over 786 metric tons to 32 countries. By
            mid-2024, OSL efforts have supported COVID-19 response efforts in
            Congo and Gabon, Malaria in Ethiopia, Dengue Fever in Mauritius and
            Diphtheria in Congo and Gabon.
          </Paragraph>
        </div>
      </div>
    </section>
  );
}
