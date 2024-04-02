"use client";

import { useState } from "react";
import Modal from "./modal";
import { PopUpState, TimeLineItem } from "@/interfaces/timeline";

export function TimeLine() {
  const [selectedKey, setSelectedKey] = useState(1);
  const [popUp, setPopUp] = useState<PopUpState>({ isOpen: false, item: null });

  const backgroundImageUrl = "/assets/blog/WHO_Ghana-151560.jpg";
  const items: TimeLineItem[] = [
    {
      key: 1,
      year: "2022",
      cardTitle: "Phase 1",
      cardSubtitle: "Conceptualizing the JEAP",
      cardDetailedText:
        "In response to the challenges posed by COVID-19, Africa CDC and WHO joined forces to revolutionize Emergency Preparedness and Response (EPR) across the continent. A joint Steering Committee was established, driving collective efforts to enhance response activities for improved coverage and impact.",
    },
    {
      key: 2,
      year: "2023",
      cardTitle: "Phase 2",
      cardSubtitle: "Unveiling the JEAP",
      cardDetailedText:
        "The JEAP launched during the 2023 World Health Assembly, now unites partners to address critical challenges in preparedness, detection, and response across six programmatic areas. AVoHC-SURGE, a product of Africa CDC and WHO collaboration, enables African nations to respond rapidly (within 24-48 hours) to health emergencies and humanitarian crises. It welcomes stakeholders from humanitarian, development, and government agencies, ensuring life-saving care reaches all. So far, 9 countries have utilized AVoHC-SURGE members for local responses (Botswana, Mauritania, Niger, Togo, Congo, DRC, Rwanda, Ethiopia, Tanzania), while 5 countries have deployed them internationally (Botswana, Congo, DRC, Rwanda, Ethiopia).",
    },
    {
      key: 3,
      year: "2023 - 2027",
      cardTitle: "Phase 3",
      cardSubtitle: "The Future of the JEAP",
      cardDetailedText:
        "Operating under the Africa CDC - WHO Memorandum of Understanding (MoU), the JEAP emerges as a promising regional framework that can be leveraged for catalytic and inclusive improvements in pandemic preparedness and response.\n Investments in a consolidated, regional pandemic investment plan such as the JEAP are needed to support countries mitigate the impact of future health shocks and empower nations to protect their citizens from emerging health threats.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <div className="text-center p-10">
        <h2 className="text-[#000000] text-4xl md:text-6xl font-bold my-4">THE JEAP JOURNEY</h2>
      </div>
      <div className="relative h-[720px]">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#00205C] to-[#1A5632] opacity-80" onScroll={() => console.log('scrolling')}></div>

          {/* Timeline */}
          <div className="absolute inset-0 flex flex-col items-center justify-center py-8 px-4">
            {items.map((item) => (
              <div key={item.key} className={`relative flex flex-col ${item.key !== 3 ? "border-l-2" : ""} h-1/2 w-2/3 md:w-1/2 block bg-tranparent p-6 text-surface shadow-secondary-1 text-white`}>
                <button
                  className={`bg-white absolute -top-2 -left-[2.5px] transform -translate-x-2/4 rounded-full z-10 mt-0 ${selectedKey === item.key ? "w-10 h-10" : "w-5 h-5"}`}
                  onClick={() => setSelectedKey(item.key)}
                />
                <p className={`absolute text-white ${selectedKey === item.key ? "top-0 left-8 md:-left-72 text-3xl md:text-5xl font-bold" : "top-0 left-8 md:-left-36 text-xl font-semibold"}`}>{item.year}</p>
                {selectedKey === item.key && (
                  <div className="m-2 flex flex-col gap-2">
                    <h1 className="text-xl font-bold">{item.cardTitle}</h1>
                    <h5 className="text-xl leading-tight">{item.cardSubtitle}</h5>
                    <p className="hidden md:block">{item.cardDetailedText}</p>
                    <button className="w-1/2 md:hidden border-2 p-1" onClick={() => setPopUp({ isOpen: true, item: item })}>
                      Read More
                    </button>
                  </div>
                )}
              </div>
            ))}
            <div></div>
          </div>
        </div>
      </div>
      {popUp.isOpen && <Modal setPopUp={setPopUp} popUp={popUp} />}
    </div>
  );
}

