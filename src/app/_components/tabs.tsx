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
    from: "A fragmented understanding of the current state of preparedness acts as a hindrance to data-driven decision-making.",
    to: "Improved overall visibility of the core capacities of countries, enabling more accurate and resource-efficient interventions.",
    how: `The JEAP will assess continental preparedness by supporting countries to:
    <ul className="list-disc">
    <li>    Analyze their EPR capacity assessments using existing assessment tools.</li>
    <li>    Map potential threats, challenges, and opportunities for EPR interventions.</li>
    <li>    Develop or refine National Action Plans for Health Security (NAPHS).</li>
    <li>    Strengthen regional cooperation for public health emergencies, through cross-border collaboration meetings, simulation exercises, the creation of MoUs and the annual development of Points of Entry (PoE) contingency plans and SoPs.</li>
    </ul>`,
  },
  {
    id: 2,
    title: "Surveillance including diagnostics and genome sequencing",
    slides: ["/assets/blog/jpgs/JEAP_VISION_Slides-02.webp"],
    from: "Surveillance systems and technologies within the region are lacking, with some countries not meeting the IDSR standards, leading to delays in detecting health emergencies",
    to: "Strengthened national public health surveillance and response systems with updated IDSR and EBS practices, digital technologies, and genomic surveillance capacities at the country level.",
    how: `The JEAP will harness the collective power of genomic surveillance capabilities present in countries across the continent. This involves supporting countries to: 
    <ul className="list-disc">
    <li>     Implement and expand Integrated Disease Surveillance and Response (IDSR) systems, including event-based surveillance.</li>
    <li>    Assist member states in developing operational surveillance plans, ensuring seamless health information exchange.</li>
    <li>     Leverage digital technologies and data analytics for Event-Based Surveillance (EBS) and Integrated Biological Surveillance (IBS).</li>
    <li>    Harmonize coordination of diagnostics among Africa CDC and WHO, strengthening strategy and capacity at national and sub-national levels.</li>
    <li>    Map 100% of national reference laboratories and their capacities for diagnosing potential pandemic and epidemic pathogens, while training a workforce of approximately 2090 people on priority pathogens with pandemic potential.</li>
    <li>    Establish Environmental Surveillance (ES) and mechanisms for integrating sequencing into routine surveillance for public health response.</li>
    <li>    Enhance in-country genomic surveillance capacity and promote the sharing of sequencing data.</li>
    </ul>`,
  },
  {
    id: 3,
    title: "Logistics, Stockpiling, Supply chain and Local Manufacturing",
    slides: ["/assets/blog/jpgs/JEAP_VISION_Slides-03.webp"],
    from: "Insufficient supplies, logistics hubs and manufacturers in the region result in delays of up to 20 days to deliver emergency supplies. Only 12 countries have fully functional Public Health Emergency Operations Centres (PHEOCs).",
    to: "Timely availability of high-quality supplies and logistics through PHEOCs which resolve supply chain barriers and reduce the delivery time of life-saving supplies from 20 days to within 24 to 48 hours.",
    how: "The JEAP will help countries address the logistical bottleneck head-on through: Establishing PHEOCs in at least 90% of member states Reinforcing human resource capacity through a joint regional roster for Supply Chain and Logistics Officers, providing training to Operations Support and Logistics staff, and establishing a community of practice to learn from previous emergency responses.",
  },
  {
    id: 4,
    title: "Workforce Development",
    slides: ["/assets/blog/jpgs/JEAP_VISION_Slides-04.webp"],
    from: "A shortage in the health workforce with fewer than 10% of African countries adequately staffed to prepare for and respond to health emergencies.",
    to: "A workforce of 3000 roving, qualified and multi-sectoral first responders will be deployed within the first 24-48 hours of an emergency, led by a harmonized leadership and complementing institutionalized national community health worker programs.",
    how: `The JEAP initiative aims to help countries by:
    <ul className="list-disc"> 
    <li>   Building and retaining a proficient emergency workforce: In early 2022, Africa CDC and WHO merged Africa CDC's African Volunteer Health Corps (AVoHC) program with WHO's Strengthening and Utilizing Response Groups for Emergencies (SURGE) program to establish a unified initiative known as AVoHC-SURGE.</li> 
    <li>  Ensuring workforce coordination and deployment during health emergencies.</li> 
    <li> Reinforcing leadership within this workforce by creating a community of leaders at both national and regional levels.</li> 
    <li>  Institutionalizing, sustainably expanding and/or building capacity of Community Health Worker programs within Member States.</li>
    </ul>`,
  },
  {
    id: 5,
    title: "Response readiness and coordination",
    slides: ["/assets/blog/jpgs/JEAP_VISION_Slides-05.webp"],
    from: "Disjointed governance mechanisms lead to delays and inefficiencies in crisis response. ",
    to: "Proactive, streamlined and effective approaches to managing health crises. By the end of 2027, the JEAP will ensure that 90% of Member States have set up fully equipped and functional PHEOCs that have implemented core policies and procedures. ",
    how: `The JEAP will collaborate with Member States to ensure that PHEOCs are:
    <ul className="list-disc"> 
    <li> Meeting standardized minimum requirements with information and communication technology as well as physical infrastructure.</li>
    <li>     Developing and implementing core PHEOC policy, plans and procedures.</li> 
    <li>     Establishing a unified information management platform.</li>
    <li>     Strengthening the capabilities of the PHEOC workforce (routine and surge staff) to support preparedness and response coordination.</li>
    </ul>`,
  },
  {
    id: 6,
    title: "Risk Communications and Community Engagement",
    slides: ["/assets/blog/jpgs/JEAP_VISION_Slides-06.webp"],
    from: "Communities lack adequate access to information and platforms to participate meaningfully in planning, which hampers their ability to protect themselves, respond to health emergencies adequately as well as weakens EPR planning overall.",
    to: "Well-informed and crisis-ready communities that are empowered to participate in emergency preparedness planning and response, protecting themselves and their communities from the impact of disease outbreaks.",
    how: `The JEAP will support countries to engage communities through:
     <ul className="list-disc">
    <li> Strengthening indigenous knowledge of and community engagement with EPR practices.</li> 
    <li>  promoting public awareness of EPR through advocacy.</li> 
    <li>  Encouraging behavioural change through Risk Communication and Community Engagement (RCCE).</li> 
    <li>    Strengthen the Public Health RCCE Community of Practice for Africa.</li>
    <li>    Tackling rumours and misinformation.</li>
    </ul>`,
  },
];

export function Tabs() {
  const [active, setActive] = useState<number>(1);
  const [selectedAccordion, setSelectedAccordion] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActive(index);
  };

  const handleAccordionClick = (id: number) => {
    setSelectedAccordion(selectedAccordion === id ? null : id);
  };

  return (
    <div id="vision" className="min-h-[80dvh] lg:min-h-full flex flex-col items-center md:justify-normal lg:block">
      <div className="text-center lg:my-2 flex flex-col items-center">
        <h2 className="text-[#000] text-3xl  md:text-7xl font-[compasse-extrabold] my-0 md:my-4">THE JEAP VISION</h2>
        <p className="text-xl xl:px-0 py-2 sm:py-0 xl:py-4 break-normal w-[75%]">
          At the heart of the JEAP is a vision of 'One Africa for Health Security.' This vision outlines six collaboration areas and provides a comprehensive framework for coordinated action to
          safeguard African populations from public health emergencies.
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
              <div key={item.id} className={active === item.id ? "block" : "hidden"}>
                <Carousel item={item} />
              </div>
            </div>
          ))}
          <div className="absolute bottom-20 left-10 xl:left-[90%] p-4 flex flex-col">
            <button onClick={() => handleClick(active + 1)} disabled={active === Menu.length} className="p-1 rounded-full shadow text-gray-800">
              <img className="h-10 w-10 xl:h-20 xl:w-20" src="/assets/blog/Group 3025.png" alt="next" />
            </button>
            <button onClick={() => handleClick(active - 1)} disabled={active === 1} className="p-1 rounded-full shadow text-gray-800">
              <img className="h-10 w-10 xl:h-20 xl:w-20" src="/assets/blog/Group 3026.png" alt="prev" />
            </button>
          </div>
        </div>
      </div>
      {/* accordian */}
      <div className="md:hidden">
        {Menu.map((item) => (
          <Accordion key={item.id} title={item.title} isOpen={selectedAccordion === item.id} onToggle={() => handleAccordionClick(item.id)}>
            <Carousel item={item} />
          </Accordion>
        ))}
      </div>
    </div>
  );
}
