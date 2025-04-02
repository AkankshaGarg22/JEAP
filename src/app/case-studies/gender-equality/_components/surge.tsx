import AnimatedHeading from "../../_components/AnimatedHeading";
import Paragraph from "../../_components/paragraph";

export default function Surge() {
  return (
    <section className="max-w-7xl mx-auto mt-4 mb-12">
      <div className="flex flex-col md:flex-row items-start justify-center md:justify-between mb-4 md:mb-8 px-2 md:px-4">
        <div className="md:w-[30%] h-full flex flex-col items-stretch justify-start px-4 py-2 md:p-4">
          <AnimatedHeading linecolor="black" className="mb-4 text-balance">
            AVOHC-SURGE PRIORITIZES GENDER PARITY AT ALL LEVELS – FROM FRONTLINE
            WORKERS TO TECHNICAL LEADERSHIP
          </AnimatedHeading>
        </div>

        <div className="md:w-[70%] flex flex-col justify-center items-center px-4 py-2 md:p-4">
          <Paragraph>
            The Africa Centres for Disease Control and Prevention (Africa CDC)
            and World Health Organization (WHO), under the Joint Emergency
            Action Plan (JEAP), brought together their emergency preparedness
            and response workforce in 2022 to strengthen Africa's response.
            AVoHC-SURGE - a merging of Africa CDC's African Volunteer Health
            Corps (AVoHC) and WHO's Strengthening and Utilization of Response
            Groups for Emergencies (SURGE) - is a network of multi-sectoral and
            multi-disciplinary public health professionals dedicated to
            coordinating and deploying critical personnel to respond to an
            emergency within 24-48 hours. These experts include first
            responders, epidemiologists, laboratory experts, water and
            sanitation specialists, and several other disciplines, all of whom
            play vital roles in health emergencies. The AVoHC-SURGE initiative
            makes a conscious effort to embed gender sensitivity into its
            framework to ensure meaningful inclusion of women in decision-making
            and frontline activities. JEAP has prioritized gender-equal
            practices to recruit women to leadership positions within health
            emergency response teams and broader healthcare governance. For
            instance, women comprise 66% of the Focal Points representing each
            of the JEAP partner organizations.
          </Paragraph>
          <Paragraph>
            Ensuring equal gender representation has also been a priority in
            staffing the JEAP’s Technical Working Groups (TWGs) - among which
            40% are women. TWG members are tasked with planning and monitoring
            the implementation of JEAP activities, including supporting the
            expansion of AVoHC SURGE as part of workforce development. To help
            shift unequal recruitment dynamics, the JEAP TWGs proactively
            encourages countries to recruit women to the AVoHC-SURGE teams,
            including to the position of Incident Manager. As of July 2024, 31%
            of the trained first responders are women compared to men, and the
            initiative is working towards reaching full gender parity.
          </Paragraph>
        </div>
      </div>

      <div className="w-full h-64 md:h-[30rem]">
        <img
          className="h-full w-full object-cover object-center"
          src="/assets/blog/case-studies//Gender_equality/Webp_format/3.webp"
          alt="JEAP Surge"
        />
      </div>
    </section>
  );
}
