"use client";
import { useState } from "react";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion = ({ title, children }: AccordionProps) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="mb-1 relative">
      <button className="flex justify-between w-full px-2 py-4 bg-[#F1F1F3] text-[#00205C] font-medium" onClick={() => setAccordionOpen(!accordionOpen)} >
        <span className="text-left">{title}</span>
        <span className={`transition  ${accordionOpen && "!rotate-180"}`}>
          <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
            <path d="M6 9l6 6 6-6"></path>
          </svg>
        </span>
      </button>
      <div className={`transition-all duration-300 ease-in-out ${accordionOpen ? "block" : "hidden"}`}>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
