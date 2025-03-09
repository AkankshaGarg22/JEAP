"use client";
import { title } from "process";
import { useState } from "react";

const sections = [
  {
    id: 1,
    title: "Climate Change",
    subtitle: "",
    content:
      "The rise in climate-related disease outbreaks in Africa highlights the urgent need to strengthen health systems through climate-resilient, sustainable, and low-carbon approaches. To address this, the JEAP incorporated a TWG focused on climate change into its action plan. The Climate Change TWG is setting a new standard for resilience in Africa by championing climate-resilient strategies for emergency preparedness and response, enhancing the region's capacity to prepare for, detect, and respond to climate-related health threats effectively.",
    popupImage: "/assets/blog/focus/read-more-images/climate-change.jpg",
  },
  {
    id: 2,
    title: "Country Assessments",
    subtitle: "Country Assessment in the Preparedness Context",
    content:
      "Since the launch of International Health Regulations (IHR, 2005), Member States across the African continent have invested in strengthening IHR preparedness capacities to enhance detection, prevention, and response to public health emergencies. Several assessments in line with IHR Monitoring and Evaluation (M&E) Framework and Performance of Veterinary Services (PVS) Pathway have been implemented to monitor and evaluate capacities’ development in preparedness in human health services, veterinary services and aquatic and animal health services. These instruments have assessed the status of preparedness and enabled documentation of progress countries have made in building their capacities.",
  },
  {
    id: 3,
    title: "Digitalization",
    subtitle: "",
    content:
      "The aftermath of the COVID-19 pandemic highlighted the critical need for technology-driven solutions in Africa's health sector to strengthen countries' ability to promptly prepare for, detect, and respond to health emergencies. In response, the Digitalization TWG, a cross-cutting initiative within JEAP, was established to address this need and now leads the integration of digital solutions across other TWGs.",
  },
  {
    id: 4,
    title: "Operations, Supply, and Logistics",
    subtitle: "",
    content:
      "Logistics is an essential part of emergency response – yet delays in the delivery of medical supplies and gaps in human resources for logistics remain major challenges across the continent.",
  },
  {
    id: 5,
    title: "RCCE",
    subtitle: "",
    content:
      "The JEAP recognizes the importance of Improved community preparedness, knowledge, and engagement in responding to health emergencies. JEAP is addressing the critical gaps in risk communication and community engagement (RCCE) highlighted during the Covid-19 pandemic by tackling major RCCE challenges such as weak strategies, poor implementation, and fragmented efforts across countries. By enhancing coordination and promoting integrated, results-driven RCCE strategies, JEAP is ensuring that RCCE and information management (IM) are prioritized in health emergencies. ",
  },
  {
    id: 6,
    title: "Response Readiness",
    subtitle: "",
    content:
      "While most African countries have now established a Public Health Emergency Operations Centre (PHEOC), recent evaluations highlight that implementation capabilities vary.6 A PHEOC is a hub for joint risk assessment, planning, and coordination of information and resources for effective emergency management. Many countries established and operationalized PHEOCs in the aftermath of Ebola Virus Disease (EVD) epidemic in West Africa, supporting stronger emergency coordination.",
  },
  {
    id: 7,
    title: "Surveillance",
    subtitle: "",
    content:
      "Surveillance systems and technologies across the continent are lacking, with some countries not meeting the Integrated Diseases Surveillance & Response (IDSR) standards, leading to delays in detecting health emergencies. Despite scientific development to strengthen the health system to protect human health, Africa continues to be confronted by longstanding, emerging, and reemerging infectious disease threats. Unfortunately, the region has a relatively low capacity for risk management of disease epidemics, mainly due to inadequate resources for early detection, identification, and prompt response. The failure in the early detection and response to epidemics in Africa is attributed to several factors, including deficiency in the development and implementation of surveillance and response systems against infectious disease outbreaks.",
  },
  {
    id: 8,
    title: "Workforce Development",
    subtitle: "",
    content:
      "Human resources are the heart of emergency response, but there continues to be a shortage of trained, equipped emergency responders on the African continent. According to WHO analysis, fewer than 10% of African countries are adequately staffed to prepare for and respond to health emergencies.",
  },
];

export default function List() {
  const [selected, setSelected] = useState(sections[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const handleReadMoreClick = () => {
    setCurrentIndex(selected.id);
    setModalOpen(true);
  };

  const closeModal = () => {
    setCurrentIndex(0);
    setModalOpen(false);
  };

  return (
    <div className="text-white p-4">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Sidebar - Accordion on Mobile, Fixed Sidebar on Desktop */}
        <div className="lg:w-1/4 w-full">
          {/* Mobile Accordion */}
          <div className="lg:hidden">
            {sections.map((section) => (
              <div key={section.title} className="border-b border-gray-600">
                <button
                  className="w-full text-left p-3 font-medium flex justify-between items-center"
                  onClick={() => setSelected(section)}
                >
                  {section.title}
                </button>
                {selected.title === section.title && (
                  <div className="p-3 bg-gray-700">{selected.content}</div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Fixed Sidebar */}
          <div className="hidden lg:block">
            {sections.map((section) => (
              <div className="relative hover:bg-[#2c5377] group">
                <button
                  key={section.title}
                  className={`w-full text-left px-3 py-4 block ${
                    selected.title === section.title ? "bg-[#4c7fae]" : ""
                  }`}
                  onClick={() => setSelected(section)}
                >
                  {section.title}
                </button>
                <span className="absolute top-[1px] left-[12px] text-xs text-gray-300 opacity-0 transition-opacity duration-200 ease-in-out group-hover:opacity-100">
                  Read about
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Content Panel */}
        <div className="hidden md:block lg:w-3/4 w-full bg-[rgb(37_73_119)] p-6 relative">
          <h2 className="text-2xl font-bold">{selected.title}</h2>
          <div className="text-3xl font-bold my-2">{selected.subtitle}</div>
          <div className="font-bold my-2">Context</div>
          <p className="my-4 text-gray-300 border-t-2 pt-4 line-clamp-[8]">
            {selected.content}
          </p>
          <button
            className="absolute -bottom-4 right-8 bg-white text-blue-900 px-6 py-2 font-semibold flex items-center gap-2 hover:bg-gray-200"
            onClick={() => handleReadMoreClick()}
          >
            Read More →
          </button>
        </div>
      </div>

      {modalOpen && selected.id === currentIndex && (
        <div className="fixed inset-0 bg-[#fff] flex flex-col items-center justify-center z-50">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-black hover:text-gray-300"
          >
            <svg
              className="w-9 h-9"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <div className="flex flex-col md:flex-row h-full justify-center min-w-[80%]">
            {/* Image - full width on mobile, half width on larger screens */}
            <div className="md:w-[70%] py-3">
              <img
                src={selected.popupImage}
                alt={selected.title}
                className="w-full object-cover rounded-xl md:h-[80%]"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
