"use client";
import { ReactNode, useState } from "react";

const arr = [
  {
    id: 1,
    title: "Climate Change",
    content:
      "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to makeLorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.",
  },
  {
    id: 2,
    title: "Country Assessments",
    content:
      "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to makeLorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.",
  },
  {
    id: 3,
    title: "Digitalization",
    content:
      "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to makeLorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.",
  },
  {
    id: 4,
    title: "Operations, Supply & Logistics",
    content:
      "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to makeLorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.",
  },
  {
    id: 5,
    title: "RCCE",
    content:
      "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to makeLorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.",
  },
  {
    id: 6,
    title: "Response readiness",
    content:
      "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to makeLorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.",
  },
  {
    id: 7,
    title: "Surveillance",
    content:
      "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to makeLorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.",
  },
  {
    id: 8,
    title: "Workforce Development",
    content:
      "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to makeLorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make.",
  },
];

export default function Areas() {
  const [selectedAccordion, setSelectedAccordion] = useState<number | null>(null);
  const handleAccordionClick = (id: number) => {
    setSelectedAccordion(selectedAccordion === id ? null : id);
  };
  return (
    <div className="w-full overflow-hidden bg-cover bg-no-repeat bg-mb-about-curve bg-top md:bg-xl-about-curve z-[200] text-white min-h-screen flex flex-col justify-start md:justify-center xl:justify-start items-center md:gap-8 xl:gap-8">
      <div className="w-5/6 mt-20 xl:mt-24 mb-8">
        <h2 className="text-center text-2xl md:text-3xl xl:text-7xl font-bold tracking-wider">Focus Areas</h2>
      </div>
      <div className="flex flex-col gap-2 md:gap-8 xl:gap-2 justify-center items-center w-[90%] xl:w-3/4 lg:min-h-[400px]">
        {arr.map((item) => (
          <div className="w-full flex flex-col items-center" key={item.id}>
            {/* Accordion Header */}
            <button
              className={`border-t-2 ${item.id === arr.length && item.id !== selectedAccordion ? " border-b-2" : ""} border-white py-4 flex w-full justify-between items-center`}
              onClick={() => handleAccordionClick(item.id)}
            >
              <span className="uppercase xl:text-[20px]">{item.title}</span>
              <span className={`${item.id === selectedAccordion ? "bg-white text-[#1B5632]" : ""} border-2 border-white rounded p-1`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                </svg>
              </span>
            </button>
            {/* Accordion Content */}
            {selectedAccordion === item.id && <div className="w-9/10 flex-1 border border-white rounded-lg p-2 xl:py-4 text-center text-sm xl:text-[18px]">{item.content}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}
