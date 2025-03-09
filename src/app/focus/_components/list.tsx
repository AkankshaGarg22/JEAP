"use client";
import { title } from "process";
import { useState } from "react";

const sections = [
  {
    title: "Climate Change",
    subtitle: "",
    content:
      "The rise in climate-related disease outbreaks in Africa highlights the urgent need to strengthen health systems through climate-resilient, sustainable, and low-carbon approaches. To address this, the JEAP incorporated a TWG focused on climate change into its action plan. The Climate Change TWG is setting a new standard for resilience in Africa by championing climate-resilient strategies for emergency preparedness and response, enhancing the region's capacity to prepare for, detect, and respond to climate-related health threats effectively.",
  },
  {
    title: "Country Assessments",
    subtitle: "Country Assessment in the Preparedness Context",
    content:
      "Since the launch of International Health Regulations (IHR, 2005), Member States across the African continent have invested in strengthening IHR preparedness capacities to enhance detection, prevention, and response to public health emergencies. Several assessments in line with IHR Monitoring and Evaluation (M&E) Framework and Performance of Veterinary Services (PVS) Pathway have been implemented to monitor and evaluate capacities’ development in preparedness in human health services, veterinary services and aquatic and animal health services. These instruments have assessed the status of preparedness and enabled documentation of progress countries have made in building their capacities.",
  },
  {
    title: "Digitalization",
    subtitle: "",
    content:
      "The aftermath of the COVID-19 pandemic highlighted the critical need for technology-driven solutions in Africa's health sector to strengthen countries' ability to promptly prepare for, detect, and respond to health emergencies. In response, the Digitalization TWG, a cross-cutting initiative within JEAP, was established to address this need and now leads the integration of digital solutions across other TWGs.",
  },
  {
    title: "Operations, Supply, and Logistics",
    subtitle: "",
    content: "Logistics management ensures timely supply and distribution...",
  },
  {
    title: "RCCE",
    subtitle: "",
    content: "Risk Communication and Community Engagement (RCCE)...",
  },
  {
    title: "Response Readiness",
    subtitle: "",
    content: "Readiness strategies enhance emergency preparedness...",
  },
  {
    title: "Surveillance",
    subtitle: "",
    content: "Health surveillance is critical for early disease detection...",
  },
  {
    title: "Workforce Development",
    subtitle: "",
    content: "Building skilled healthcare workforce is a priority...",
  },
];

export default function List() {
  const [selected, setSelected] = useState(sections[0]);

  return (
    <div className="text-white p-4">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Sidebar - Accordion on Mobile, Fixed Sidebar on Desktop */}
        <div className="lg:w-1/4 w-full">
          {/* Mobile Accordion */}
          <div className="lg:hidden">
            {sections.map((section) => (
              <div key={section.title} className="border-b border-gray-600">
                <button className="w-full text-left p-3 font-medium flex justify-between items-center" onClick={() => setSelected(section)}>
                  {section.title}
                </button>
                {selected.title === section.title && <div className="p-3 bg-gray-700">{selected.content}</div>}
              </div>
            ))}
          </div>

          {/* Desktop Fixed Sidebar */}
          <div className="hidden lg:block">
            {sections.map((section) => (
              <div className="relative hover:bg-[#2c5377] group">
                <button key={section.title} className={`w-full text-left px-3 py-4 block ${selected.title === section.title ? "bg-[#4c7fae]" : ""}`} onClick={() => setSelected(section)}>
                  {section.title}
                </button>
                <span className="absolute top-[1px] left-[12px] text-xs text-gray-300 opacity-0 transition-opacity duration-200 ease-in-out group-hover:opacity-100">Read about</span>
              </div>
            ))}
          </div>
        </div>

        {/* Content Panel */}
        <div className="hidden md:block lg:w-3/4 w-full bg-[rgb(37_73_119)] p-6 relative">
          <h2 className="text-2xl font-bold">{selected.title}</h2>
          <div className="text-3xl font-bold my-2">{selected.subtitle}</div>
          <div className="font-bold my-2">Context</div>
          <p className="my-4 text-gray-300 border-t-2 pt-4 line-clamp-[8]">{selected.content}</p>
          <button className="absolute -bottom-4 right-8 bg-white text-blue-900 px-6 py-2 font-semibold flex items-center gap-2 hover:bg-gray-200">Read More →</button>
        </div>
      </div>
    </div>
  );
}
