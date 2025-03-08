"use client";
import { ReactNode, useState } from "react";

const Bold = ({ children }: { children: ReactNode }) => {
  return <span className="font-bold text-[16px] xl:text-[24px] tracking-wider">{children}</span>;
};

const highlightsItem = [
  {
    id: 1,
    title: "Workforce Development",
    icon: "/assets/blog/about/accordian/1.svg",
    content: [
      <>
        Rolled out joint workforce development program in <Bold>16 countries</Bold> enrolling and training <Bold>1,350 AVoHC-SURGE</Bold> emergency responders in close partnership with governments.
      </>,
      <>
        <Bold>14 countries</Bold> have utilized AVoHC-SURGE members locally to respond to different emergencies. WHO has also utilized the roster to deploy <Bold>15 AVoHC-SURGE</Bold> members from
        <Bold> 8 countries</Bold> to support emergency response abroad.
      </>,
    ],
  },
  {
    id: 2,
    title: "Response Readiness and Coordination",
    icon: "/assets/blog/about/accordian/2.svg",
    content: [
      <>
        Finalized the first ever Strategic Plan For Strengthening Public Health Emergency Operations Centres in Member States of Africa and Eastern Mediterranean Region (2023–2027) and began engaging
        with Member States to operationalize.
      </>,
    ],
  },
  {
    id: 3,
    title: "Surveillance including Laboratory and Genomic Surveillance",
    icon: "/assets/blog/about/accordian/3.svg",
    content: [
      <>
        Enhanced coordination in operating a pan-African network of <Bold>12 specialized laboratories</Bold> for genomic sequencing.
      </>,
      <>Jointly drafted a harmonized framework for cross-border pathogen collection, handling and shipment.</>,
    ],
  },
  {
    id: 4,
    title: "Country Assessment in the Preparedness Context",
    icon: "/assets/blog/about/accordian/4.svg",
    content: [<>Enabled a platform to provide coordinated support to countries in national assessment planning.</>, <>Organize two joint simulation exercises.</>],
  },
  {
    id: 5,
    title: "Logistics, Stockpiling, Supply Chain and Local Manufacturing",
    icon: "/assets/blog/about/accordian/5.svg",
    content: [
      <>
        Delivered joint training sessions for over <Bold>150 health emergency</Bold> and logistics experts to enhance their skills and knowledge.
      </>,
      <>Advocated for blanket customs clearance to reach communities with essential medical supplies faster.</>,
    ],
  },
  {
    id: 6,
    title: "New Collaboration Area",
    icon: "/assets/blog/about/accordian/6.svg",
    content: [<>Began harmonizing efforts in climate change, digitalization and risk communication and community engagement by establishing Technical Working Groups and Action Plans.</>],
  },
];

export default function Implementation() {
  const [selectedAccordion, setSelectedAccordion] = useState<number | null>(null);
  const handleAccordionClick = (id: number) => {
    setSelectedAccordion(selectedAccordion === id ? null : id);
  };
  return (
    <div className=" bg-cover w-full overflow-hidden lg:bg-cover bg-no-repeat bg-mb-about-curve bg-top xl:bg-top md:bg-xl-about-curve z-[200] text-white min-h-screen flex flex-col justify-start md:justify-center xl:justify-start 2xl:justify-center items-center md:gap-8 xl:gap-0">
      <div className="w-5/6 xl:w-3/4 mt-20 xl:mt-32 mb-8">
        <h2 className="text-center text-2xl md:text-3xl xl:text-[70px] font-bold tracking-wider xl:leading-[4rem]">Implementation Highlights by Collaboration Area</h2>
      </div>
      <div className="flex flex-col gap-2 md:gap-8 xl:gap-2 justify-center items-center w-full lg:w-4/5 px-4 lg:min-h-[400px]">
        {highlightsItem.map((item) => (
          <div className="w-full flex flex-col items-center" key={item.id}>
            {/* Accordion Header */}
            <button
              className={`border-t-2 ${item.id === highlightsItem.length && item.id !== selectedAccordion ? " border-b-2" : ""} border-white py-4 flex w-full justify-between items-center`}
              onClick={() => handleAccordionClick(item.id)}
            >
              <img className="size-6" src={item.icon} alt={item.title} />
              <span className="uppercase xl:text-[20px]">{item.title}</span>
              <span className={`${item.id === selectedAccordion ? "bg-white text-[#1B5632]" : ""} border-2 border-white rounded p-1`}>
                {item.id === selectedAccordion ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                )}
              </span>
            </button>
            {/* Accordion Content */}
            {selectedAccordion === item.id && (
              <div className="flex flex-col lg:flex-row gap-4 my-4 items-center justify-center md:items-stretch xl:items-stretch xl:w-9/10 xl:px-2">
                {item.content.map((element, index) => (
                  <div className="w-full flex-1 border border-white rounded-lg p-2 xl:py-4 text-center text-sm xl:text-lg" key={index}>
                    {element}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
