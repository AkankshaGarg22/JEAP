import React from "react";
import AnimatedHeading from "../../_components/AnimatedHeading";
import Paragraph from "../../_components/paragraph";
import Chart from "../../_components/chart";

const TextSectionFour = () => {
  return (
    <>
      {/* Close Partenership */}
      <div className="bg-white flex w-full flex-col gap-6 items-center justify-center py-12">
        <Paragraph className="lg:max-w-7xl mx-auto w-[90%]">
          The close working partnership between Africa CDC and WHO allows for
          highly coordinated and complementary support to the network. Africa
          CDC provides technical training, sources equipment, and is developing
          a real-time data-sharing platform to strengthen the capacity of the
          network. WHO AFRO, through its country offices, acts as a broker,
          facilitating agreements, navigating customs, and organizing logistics
          to ensure samples arrive cold and intact for processing. This strong
          partnership has enabled the establishment of a network of 13 Centers
          of Excellence (CoEs) serving as sequencing hubs across the continent.
        </Paragraph>{" "}
        <Paragraph className="lg:max-w-7xl mx-auto w-[90%]">
          {" "}
          Underpinning these efforts, there is a need for strong and harmonious
          laboratory systems overall. The JEAP has supported the strengthening
          of the broad laboratory system in Africa by developing a continental
          guideline for sample referral and ensuring a coordinated network for
          transporting samples for confirmation of priority pathogens. In
          November 2023, the Africa CDC introduced a laboratory network
          information management system to monitor and facilitate informed
          decision-making on network operations.<sup>17</sup>
        </Paragraph>
      </div>
      {/* EQUIPPING AND TRAINING */}
      <div className="bg-gradient-to-t from-[#1E2859] to-[#1D5539] w-full h-auto flex items-center justify-center py-12">
        <div className="lg:max-w-7xl mx-auto w-[90%] flex flex-col lg:flex-row gap-12 justify-center items-start ">
          <div className="lg:w-[35%] w-full flex items-center justify-center">
            <AnimatedHeading
              linecolor="white"
              className="text-white"
            >
           Equipping and Training a Fit-for-Purpose Laboratory Workforce With Cutting-Edge Technologies
            </AnimatedHeading>
          </div>
          <div className="flex items-center justify-center lg:w-[50%] w-[90%]">
            <Paragraph className="text-white">
              Regular coordination between the Africa CDC and WHO has also
              helped optimize supply chains for critical laboratory resources
              like reagents, maximizing the network’s efficiency. For example,
              the JEAP partnership combined reagents delivered in an Africa CDC
              starter pack with supplementary reagents from WHO to enable the
              testing of a broader array of samples.
            </Paragraph>
          </div>
        </div>
      </div>
      {/*Collaboration CDC*/}

      <div className="bg-white flex w-full flex-col items-center justify-center">
        {/* APHL */}
        <div className="lg:max-w-7xl mx-auto w-[90%] flex flex-col lg:flex-row items-center justify-center py-12">
          <div className="lg:w-[35%] w-full h-auto lg:h-[350px]">
            <img
              src="/assets/blog/case-studies/Building_Africa_Defenses/webp/medical-test-tubes-with-blood-desk-laboratory.webp"
              className="h-full w-full object-cover object-center"
            ></img>
          </div>
          <div className="lg:w-[60%] w-full p-0 m-0 lg:border-black lg:border-2 lg:border-l-0 border-black border-2 border-t-0">
            <Paragraph className="h-auto p-8">
              In collaboration with US CDC, the Association of Public Health
              Laboratories (APHL), and the South JEAP partners are committed to
              equipping the African workforce with state-of-the-art devices to
              conduct genomic sequencing. Africa National Bioinformatics
              Institute (SANBI), WHO trained 55 laboratory technicians on
              bioinformatics tools in West and Central Africa and another 40 in
              East and Southern Africa.
            </Paragraph>
          </div>
        </div>

        {/* Seychelles and Lesotho */}
        <div className="lg:p-16 lg:max-w-7xl mx-auto w-full bg-gradient-to-t from-[#1E2859] to-[#1D5539] flex flex-col items-center justify-center py-12">
          <Paragraph className="text-white pb-6 w-[90%]">
            WHO also trained experts in Seychelles and Lesotho on using the
            Oxford Nanopore Technology (ONT) sequencing device, which is a
            portable device that is able to sequence DNA in remote locations and
            produce ultra-long reads, in collaboration with the African Centre
            of Excellence for Genomics of Infectious Diseases (ACEGID) and the
            National Institute for Communicable Diseases (NICD). WHO also
            provided in-kind equipment through the donation of ONT devices to
            genomic sequencing teams in Angola, Burundi, and Eritrea.
            Furthermore, NICD hosted laboratory technicians from eSwatini for a
            two-week training on sequencing and bioinformatics.
          </Paragraph>
          <img
            src="/assets/blog/case-studies/Building_Africa_Defenses/webp/Habimana Jean Pierre_3L7A0512.webp"
            className="lg:h-[550px] lg:w-[100%] w-[90%] h-auto object-cover object-center pt-6"
          ></img>
        </div>

        {/* Seychelles and Lesotho */}
        <div className="lg:max-w-7xl mx-auto w-[90%] flex flex-col bg-white items-center justify-center py-12">
          <div className="w-full flex items-start justify-between flex-col lg:flex-row gap-10">
            <div className="lg:w-[30%] w-[full] flex items-center justify-center flex-col gap-10">
              <AnimatedHeading linecolor="black">
              Impact on the Ground:<br />
              Genomic Surveillance in Recent Outbreaks
              </AnimatedHeading>
              <Paragraph className="text-black">
                Collaborative efforts to scale up Africa’s genomic sequencing
                capabilities have been instrumental in the swift detection of
                other health threats post-pandemic, enabling countries to
                respond effectively to the 2022 Sudan Ebola virus outbreak,
                Marburg disease, Mpox, Cholera, and others.
              </Paragraph>
            </div>

            <div className="lg:w-[55%] w-full h-auto flex items-center justify-center">
              <img
                src="/assets/blog/case-studies/Building_Africa_Defenses/webp/WHO_Malawi-146985.webp"
                alt="WHO Malawi"
                className="w-100% h-auto"
              />
            </div>
          </div>

          <div className="lg:max-w-7xl mx-auto w-full flex items-center justify-center pt-8">
            <Paragraph>
              At the onset of the COVID-19 pandemic, only seven African
              countries – Kenya, Nigeria, Senegal, South Africa, Egypt, Morocco,
              and Tunisia – had the capacity to sequence SARS-CoV-2. However,
              significant strides have been made,
            </Paragraph>
          </div>
        </div>
      </div>

      {/* Animation Space */}

      <Chart />

      {/* GLobal genomic survellience strategy */}
      <div className="w-full h-auto bg-transparent flex items-center justify-center py-12">
        <div className="lg:max-w-7xl mx-auto w-[90%] h-auto bg-white flex flex-col gap-10 items-center justify-center">
          <div className="w-full flex items-center justify-center">
            <Paragraph className="w-full">
              These countries are now sharing their genetic sequence data
              publicly.<sup>18 19</sup> This progress aligns with the Global
              genomic surveillance strategy for pathogens with pandemic and
              epidemic potential, 2022–2032 published in 2022.<sup>20</sup>
            </Paragraph>
          </div>
          <div className="w-full h-auto lg:h-[550px] flex items-center justify-center">
            <img
              src="/assets/blog/case-studies/Building_Africa_Defenses/webp/african-american-woman-scientist-holding-test-tube-laboratory.webp"
              className="w-full h-full object-cover object-center"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default TextSectionFour;
