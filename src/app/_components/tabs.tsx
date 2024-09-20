"use client";
import { useState } from "react";
import Carousel from "./carousel";
import Accordion from "./accordian";
import { MenuItem } from "@/interfaces/carousel";

const Menu: MenuItem[] = [
  {
    id: 1,
    title: "Country assessment in the preparedness context",
    slides: ["/assets/blog/jpgs/JEAP_VISION_Slides-01.webp"],
    from: "A fragmented understanding of the current state of preparedness acts as a hindrance to data\u2011driven decision\u2011making.",
    to: "Improved overall visibility of the core capacities of countries, enabling more accurate and resource\u2011efficient interventions.",
    how: `The JEAP will assess continental preparedness by supporting countries to:
    <ul className="testul">
    <li>    Map existing assessment tools and processes​.</li>
    <li>    Support countries to conduct and report on EPR capacity assessments​.</li>
    <li>    Develop the continental risk atlas​.</li>
    <li>    Support countries to develop and/or refine their NAPHS and other action plans.</li>
    <li>    Provide capacity-specific support to identified countries​.</li>
    <li>    Support to improve regional-level cooperation for public health emergencies​.</li>
    </ul>`,
  },
  {
    id: 2,
    title: "Surveillance including diagnostics and genome sequencing",
    slides: ["/assets/blog/jpgs/JEAP_VISION_Slides-02.webp"],
    from: "Surveillance systems and technologies within the region are lacking, with some countries not meeting the IDSR standards, leading to delays in detecting health emergencies",
    to: "Strengthened national public health surveillance and response systems with updated IDSR and EBS practices, digital technologies, and genomic surveillance capacities at the country level.",
    how: `The JEAP will harness the collective power of genomic surveillance capabilities present in countries across the continent. This involves supporting countries in: 
    <ul className="list-disc">
    <li>Implementing and scaling up Integrated Disease Surveillance and Response (IDS/IDSR)</li>
  <li>Enhancing / establishing epidemic intelligence (including event-based surveillance) capacity across the continent</li>
  <li>Supporting Member States with developing operational surveillance plans</li>
  <li>Ensuring health information exchange; between countries, partners, etc.</li>
  <li>Improving data analytics and use for EBS/IBS</li>
  <li>Harmonizing coordination of diagnostics and sequencing activities among WHO AFRO, EMRO, and Africa CDC</li>
  <li>Creating enabling mechanisms for integration of sequencing with routine surveillance for public health response</li>
  <li>Strengthening diagnostics strategy and capacity at national and sub-national levels</li>
  <li>Enhancing in-country capacity for genomic surveillance through an end-to-end framework</li>
  <li>Enhancing sharing of sequencing data</li>
  <li>Establishing Environmental Surveillance (ES) for detection and monitoring pathogens</li>
    </ul>`,
  },
  {
    id: 3,
    title: "Logistics, Stockpiling, Supply chain and Local Manufacturing",
    slides: ["/assets/blog/jpgs/JEAP_VISION_Slides-03.webp"],
    from: "Insufficient supplies, logistics hubs and manufacturers in the region result in delays of up to 20 days to deliver emergency supplies. Only 12 countries have fully functional Public Health Emergency Operations Centres (PHEOCs).",
    to: "Timely availability of high\u2011quality supplies and logistics through PHEOCs which resolve supply chain barriers and reduce the delivery time of life\u2011saving supplies from 20 days to within 24 to 48 hours.",
    how: `The JEAP will address the logistical bottleneck head-on by supporting countries to:
    <ul className="list-disc">
    <li>Reinforce HR capacity at the national, regional, and continental level</li>
  <li>Strengthen and harmonize SCMS at national, regional, and continental level</li>
  <li>Improve Medical Supply availability and distribution to emergencies</li>
  <li>Strengthen coordination and reporting mechanism between WHO and Africa CDC</li>
    </ul>`,
  },
  {
    id: 4,
    title: "Workforce Development",
    slides: ["/assets/blog/jpgs/JEAP_VISION_Slides-04.webp"],
    from: "A shortage in the health workforce with fewer than 10% of African countries adequately staffed to prepare for and respond to health emergencie",
    to: "A workforce of 3000 roving, qualified and multi\u2011sectoral first responders will be deployed within the first 24\u201148 hours of an emergency, led by a harmonized leadership and complementing institutionalized national community health worker programs",
    how: `The JEAP initiative aims to help countries to:
    <ul className="list-disc"> 
    <li>Establish a functional and interoperable emergency health workforce database</li>
  <li>Undertake joint capacity building for emergency health workforce</li>
  <li>Support countries to retain the trained emergency health workforce</li>
  <li>Undertake continuous professional development for the existing emergency health workforce</li>
  <li>Advocate with governments on the process of emergency health workforce deployment</li>
  <li>Develop and adapt regional operating protocols and procedures</li>
  <li>Ensure contingency fund for surge deployment capacities</li>
  <li>Conduct joint learning, cooperation, and experience sharing exercises</li>
  <li>Harmonize existing leadership programs across the two organizations</li>
  <li>Enhance capacities for national leaders involved in emergency operations</li>
    <li>Establish a network of health emergency leaders and better connect them across borders to ensure a coordinated response​ personnel over the course of five years</li>

    </ul>`,
  },
  {
    id: 5,
    title: "Response readiness and coordination",
    slides: ["/assets/blog/jpgs/JEAP_VISION_Slides-05.webp"],
    from: "Disjointed governance mechanisms lead to delays and inefficiencies in crisis response. ",
    to: "Proactive, streamlined and effective approaches to managing health crises. By the end of 2027, the JEAP will ensure that 90% of Member States have set up fully equipped and functional PHEOCs that have implemented core policies and procedures. ",
    how: `The JEAP will collaborate with Member States to:
    <ul className="list-disc"> 
    <li>Develop, approve, and implement core PHEOC policies, plans, and procedures</li>
  <li>Reinforce information management and data standards</li>
  <li>Designate five PHEOC “Centres of Excellence”</li>
  <li>Develop and strengthen the capabilities of the PHEOC workforce (routine and surge staff) to support preparedness and response coordination</li>
  <li>Strengthen the PHEOC communication technology and physical infrastructure</li>
  <li>Evaluate the implementation of the key activities in the 2023-2024 multi-stakeholder PHEOC strategic plan (mid-term and end-term evaluations)</li>
    </ul>`,
  },
  {
    id: 6,
    title: "Risk Communications and Community Engagement",
    slides: ["/assets/blog/jpgs/JEAP_VISION_Slides-06.webp"],
    from: "Communities lack adequate access to information and platforms to participate meaningfully in planning, which hampers their ability to protect themselves, respond to health emergencies adequately as well as weakens EPR planning overall.",
    to: "Well\u2011informed and crisis\u2011ready communities that are empowered to participate in emergency preparedness planning and response, protecting themselves and their communities from the impact of disease outbreaks.",
    how: `The JEAP will support countries to engage communities through:
     <ul className="list-disc">
    <li>Harmonizing and streamlining RCCE activities at the continental level through a continental strategy</li>
  <li>Supporting the formulation of RCCE national plans and SoPs to streamline and standardize national emergency response</li>
  <li>Supporting the institutionalization of existing mechanisms and platforms for community engagement in EPR efforts</li>
  <li>Establishing and supporting social listening tools and information management systems for real-time analysis and decision-making in EPR</li>
  <li>Bolstering human resources and resource mobilization capacities within RCCE</li>
    </ul>`,
  },
  {
    id: 7,
    title: "Digitalization",
    slides: ["/assets/blog/jpgs/JEAP_VISION_Slides-07.jpg"],
    from: "Low inclusion and access to digital health tools impacting the overall efficiency of health systems.",
    to: "Increased adoption of digital health technologies by national public health systems of Member States.",
    how: `Through this cross-cutting collaboration area, the JEAP will:
     <ul className="list-disc">
    <li>Ensure reliable access to digital health tools and information for all HEPR stakeholders</li>
  <li>Conduct joint evaluation of Member States' digital health maturity to support digital health strategy and priority investments</li>
  <li>Expand telehealth and the use of AI for triage to improve access to health services in remote and isolated areas</li>
  <li>Support other JEAP collaboration areas to identify and implement solutions for improved outcomes (e.g., quality, cost-effectiveness, or automated/streamlined process)</li>
    </ul>`,
  },
  {
    id: 8,
    title: "Climate Change in the EPR Context",
    slides: ["/assets/blog/jpgs/JEAP_VISION_Slides-08.jpg"],
    from: "Climate-vulnerable health systems that are not built to withstand climate disaster.",
    to: "Climate resilient and green health systems that are ready to detect and respond to health emergencies caused by climate crises",
    how: `The JEAP will support countries to engage communities through:
     <ul className="list-disc">
   <li>Support countries to conduct Integrated Climate Change Vulnerability and Adaptation assessments</li>
  <li>Support countries to develop climate-resilient health systems</li>
  <li>Support countries to assess their health system carbon footprint</li>
  <li>Support countries to develop sustainable low-carbon health systems</li>
  <li>Enhance national early warning and response systems to provide timely response to climate-sensitive diseases and threats</li>
  <li>Support the development and implementation of guidelines and policies on reducing the carbon footprint of logistics and supplies provided in response to health emergencies</li>
    </ul>`,
  },
];

export function Tabs() {
  const [active, setActive] = useState<number>(1);
  const [selectedAccordion, setSelectedAccordion] = useState<number | null>(
    null
  );

  const handleClick = (index: number) => {
    setActive(index);
  };

  const handleAccordionClick = (id: number) => {
    setSelectedAccordion(selectedAccordion === id ? null : id);
  };

  return (
    <div
      id="vision"
      className="min-h-[88dvh] lg:min-h-full flex flex-col items-center justify-evenly md:justify-normal lg:block"
    >
      <div className="text-center lg:my-2 flex flex-col items-center">
        <h2 className="text-[#000] text-3xl  md:text-7xl font-[arial-bold] my-0 md:my-4">
          THE JEAP VISION
        </h2>
        <p className="text-xl xl:px-0 py-2 sm:py-0 xl:py-4 break-normal w-[90%] md:w-[75%]">
          At the heart of the JEAP is a vision of 'One Africa for Health
          Security.' This vision outlines six collaboration areas and provides a
          comprehensive framework for coordinated action to safeguard African
          populations from public health emergencies.
        </p>
      </div>
      {/* tab */}
      <div className="hidden md:block">
        <div className="bg-[#1A5632] flex justify-evenly">
          {Menu.map((item) => (
            <button
              key={item.id}
              className={
                active === item.id
                  ? " text-[#FFFFFF] text-lg xl:text-xl flex-auto font-semibold hover:opacity-90 shadow-lg p-2 xl:p-4"
                  : "bg-[#F1F1F3] text-lg xl:text-xl text-[#1A5632] border border-r-1 flex-auto font-semibold hover:opacity-90 shadow-lg p-2 xl:p-4  "
              }
              onClick={() => handleClick(item.id)}
            >
              {item.title}
            </button>
          ))}
        </div>
        <div className="bg-gray-400 relative">
          {Menu.map((item, index) => (
            <div key={index}>
              <div
                key={item.id}
                className={active === item.id ? "block" : "hidden"}
              >
                <Carousel item={item} />
              </div>
            </div>
          ))}
          <div className="absolute bottom-20 left-10 xl:left-[90%] p-4 flex flex-col">
            <button
              onClick={() => handleClick(active + 1)}
              disabled={active === Menu.length}
              className="p-1 rounded-full shadow text-gray-800"
            >
              <img
                className="h-10 w-10 xl:h-20 xl:w-20"
                src="/assets/blog/Group 3025.png"
                alt="next"
              />
            </button>
            <button
              onClick={() => handleClick(active - 1)}
              disabled={active === 1}
              className="p-1 rounded-full shadow text-gray-800"
            >
              <img
                className="h-10 w-10 xl:h-20 xl:w-20"
                src="/assets/blog/Group 3026.png"
                alt="prev"
              />
            </button>
          </div>
        </div>
      </div>
      {/* accordian */}
      <div className="md:hidden">
        {Menu.map((item) => (
          <Accordion
            key={item.id}
            title={item.title}
            isOpen={selectedAccordion === item.id}
            onToggle={() => handleAccordionClick(item.id)}
          >
            <Carousel item={item} />
          </Accordion>
        ))}
      </div>
    </div>
  );
}
