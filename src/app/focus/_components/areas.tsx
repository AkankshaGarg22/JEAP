"use client";
import { useState } from "react";

const arr = [
  {
    id: 1,
    title: "Climate Change",
    content:
      "The rise in climate-related disease outbreaks in Africa highlights the urgent need to strengthen health systems through climate-resilient, sustainable, and low-carbon approaches.",
  },
  {
    id: 2,
    title: "Country Assessments",
    content:
      "Since the launch of International Health Regulations (IHR, 2005), Member States across the African continent have invested in strengthening IHR preparedness capacities to enhance detection, prevention, and response to public health emergencies.",
  },
  {
    id: 3,
    title: "Digitalization",
    content:
      "The aftermath of the COVID-19 pandemic highlighted the critical need for technology-driven solutions in Africa's health sector to strengthen countries' ability to promptly prepare for, detect, and respond to health emergencies.",
  },
  {
    id: 4,
    title: "Operations, Supply & Logistics",
    content:
      "Logistics is an essential part of emergency response – yet delays in the delivery of medical supplies and gaps in human resources for logistics remain major challenges across the continent.",
  },
  {
    id: 5,
    title: "RCCE",
    content:
      "The JEAP recognizes the importance of Improved community preparedness, knowledge, and engagement in responding to health emergencies.",
  },
  {
    id: 6,
    title: "Response readiness",
    content:
      "While most African countries have now established a Public Health Emergency Operations Centre (PHEOC), recent evaluations highlight that implementation capabilities vary.",
  },
  {
    id: 7,
    title: "Surveillance",
    content:
      "Surveillance systems and technologies across the continent are lacking, with some countries not meeting the Integrated Diseases Surveillance & Response (IDSR) standards, leading to delays in detecting health emergencies.",
  },
  {
    id: 8,
    title: "Workforce Development",
    content:
      "Human resources are the heart of emergency response, but there continues to be a shortage of trained, equipped emergency responders on the African continent.",
  },
];

export default function Areas() {
  const [selectedAccordion, setSelectedAccordion] = useState<number | null>(null);
  const handleAccordionClick = (id: number) => {
    setSelectedAccordion(selectedAccordion === id ? null : id);
  };
  return (
    <div className="w-full overflow-hidden bg-cover bg-no-repeat bg-mb-partner-curve bg-top md:bg-xl-about-curve z-[200] text-white min-h-screen flex flex-col justify-start md:justify-center xl:justify-start items-center md:gap-8 xl:gap-8">
      <div className="w-5/6 mt-20 xl:mt-24 mb-8">
        <h2 className="text-center text-lg md:text-3xl xl:text-6xl font-bold tracking-wider">Focus Areas</h2>
      </div>
      <div className="flex flex-col gap-2 md:gap-8 xl:gap-4 justify-center items-center w-[90%] xl:w-3/4 lg:min-h-[400px] md:py-4">
        {arr.map((item) => (
          <div className="w-full flex flex-col items-center" key={item.id}>
            {/* Accordion Header */}
            <button
              className={`border-t-2 ${item.id === arr.length && item.id !== selectedAccordion ? " border-b-2" : ""} border-white py-4 flex w-full justify-between items-center`}
              onClick={() => handleAccordionClick(item.id)}
            >
              <span className="uppercase xl:text-[20px]">{item.title}</span>
              <span className={`${item.id === selectedAccordion ? "bg-white text-[#1B5632]" : ""} border-2 border-white rounded p-1`}>
              {item.id === selectedAccordion ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                )}
              </span>
            </button>
            {/* Accordion Content */}
            {selectedAccordion === item.id && <div className="w-[90%] flex-1 border border-white rounded-lg p-2 xl:py-4 text-center text-sm xl:text-[18px] leading-8">{item.content}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}
