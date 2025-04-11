import AnimatedHeading from "../../_components/AnimatedHeading";
import Paragraph from "../../_components/paragraph";
import TranslucentBox from "../../_components/textWhiteBox";

export default function Response() {
  return (
    <section className="max-w-7xl mx-auto md:my-12 my-4">
      <div className="flex flex-col md:flex-row items-start justify-center md:justify-between mb-4 md:mb-8 px-2 md:px-4">
        <div className="md:w-[30%] h-full flex flex-col items-stretch justify-start px-4 py-2 md:p-4">
          <AnimatedHeading linecolor="black" className="mb-4 text-balance">
          The Response: A Pre-Established, Multi-Disciplinary Team of Emergency Experts Led the Response.
          </AnimatedHeading>
        </div>

        <div className="md:w-[70%] flex flex-col justify-center items-center px-4 py-2 md:p-4">
          <Paragraph>
            In January 2023, as part of supporting Member States in emergency preparedness and response, WHO and Africa CDC had worked with the Republic of Congo Ministry of Health to identify and
            train a national multisectoral and multi-disciplinary team of <strong>59 experts</strong> that could be activated and deployed in the event of any health emergency – including floods. This included
            epidemiologists, surveillance officers, data managers, clinicians, laboratory technicians, vaccinators, operations support and logistics specialists, biologists, hygienists, risk
            communication and community engagement specialists, and security officers, among others. The effort was conducted under the umbrella of the joint WHO-Africa CDC AVoHC-SURGE Initiative.
            Following the onboarding training, the AVoHC-SURGE Members was deployed to investigate a bacterial gastroenteritis outbreak in Dolisie, Congo, and suspected mpox cases in Likouala
            province.
          </Paragraph>
        </div>
      </div>

      <div className="w-full h-64 md:h-[30rem]">
        <img className="h-full w-full object-cover object-center" src="/assets/blog/case-studies/flooding in the Republic of Congo/Webp/2.webp" alt="JEAP Surge" />
      </div>

      <div className="bg-gradient-to-t from-[#1D5539] to-[#1E2859] md:mt-12 mt-4">
        <TranslucentBox
          text="Consecutively,** in January 2024**, the AVoHC-SURGE team was called into action for the third time, with the technical support of WHO and partners.** Within 48 hours**, the team activated to lead a swift response, developing a multi-sectoral plan and conducting strategic activities to evaluate and mitigate the flood’s health impacts."
          backgroundColor="rgba(255, 255, 255, 0)"
          className="font-[15px] text-white font-ArialRegular"
        />
      </div>
    </section>
  );
}
