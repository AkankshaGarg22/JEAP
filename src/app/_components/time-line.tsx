"use client";

import { useState } from "react";
import Modal from "./modal";
import { PopUpState, TimeLineItem } from "@/interfaces/timeline";

export function TimeLine() {
  const [selectedYear, setSelectedYear] = useState(2024);
  const [popUp, setPopUp] = useState<PopUpState>({ isOpen: false, item: null });

  const backgroundImageUrl = "/assets/blog/WHO_Ghana-151560.jpg";
  const items: TimeLineItem[] = [
    {
      key: 1,
      year: 2023,
      cardTitle: "Phase 1",
      cardSubtitle: "Unveiling the JEAP",
      cardDetailedText:
        "The JEAP launched during the 2023 World Health Assembly, now unites partners to address critical challenges in preparedness, detection, and response across six programmatic areas. AVoHC-SURGE, a product of Africa CDC and WHO collaboration, enables African nations to respond rapidly (within 24-48 hours) to health emergencies and humanitarian crises. It welcomes stakeholders from humanitarian, development, and government agencies, ensuring life-saving care reaches all. So far, 9 countries have utilized AVoHC-SURGE members for local responses (Botswana, Mauritania, Niger, Togo, Congo, DRC, Rwanda, Ethiopia, Tanzania), while 5 countries have deployed them internationally (Botswana, Congo, DRC, Rwanda, Ethiopia).",
    },
    {
      key: 2,
      year: 2024,
      cardTitle: "Phase 2",
      cardSubtitle: "Unveiling the JEAP",
      cardDetailedText:
        "The JEAP launched during the 2023 World Health Assembly, now unites partners to address critical challenges in preparedness, detection, and response across six programmatic areas. AVoHC-SURGE, a product of Africa CDC and WHO collaboration, enables African nations to respond rapidly (within 24-48 hours) to health emergencies and humanitarian crises. It welcomes stakeholders from humanitarian, development, and government agencies, ensuring life-saving care reaches all. So far, 9 countries have utilized AVoHC-SURGE members for local responses (Botswana, Mauritania, Niger, Togo, Congo, DRC, Rwanda, Ethiopia, Tanzania), while 5 countries have deployed them internationally (Botswana, Congo, DRC, Rwanda, Ethiopia).",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <div className="text-center p-3">
        <h2 className="text-[#00205C] text-6xl font-bold my-4">THE JEAP JOURNEY</h2>
      </div>
      <div className="relative h-[720px]">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#00205C] to-[#1A5632] opacity-80"></div>

          {/* Timeline */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="border-l-2">
              {items.map((item) => (
                <div key={item.key} className="transform transition cursor-pointer ml-10 relative flex items-center px-2 py-2  text-white rounded mb-40 flex-row space-y-4 md:space-y-0">
                  {/* <!-- Dot Follwing the Left Vertical Line --> */}
                  <button
                    className={`bg-white absolute top-0 -left-10 transform -translate-x-2/4 rounded-full z-10 mt-0 ${selectedYear === item.year ? "w-10 h-10" : "w-5 h-5"}`}
                    onClick={() => setSelectedYear(item.year)}
                  />

                  {/* Text showing the year */}
                  <p
                    className={selectedYear === item.year ? "absolute -left-40 md:-left-72 mt-1 text-3xl md:text-7xl text-white font-bold" : "absolute -left-28 mt-1 text-xl text-white font-semibold"}
                  >
                    {item.year}
                  </p>

                  {/* <!-- Content that showing in the box --> */}
                  {selectedYear === item.year ? (
                    <div className="w-[120px] md:w-[760px]">
                      <h1 className="text-xl font-bold mb-2">{item.cardTitle}</h1>
                      <h1 className="text-lg my-2">{item.cardSubtitle}</h1>
                      <p className="hidden md:block">{item.cardDetailedText}</p>
                      <button className="md:hidden border-2 p-1" onClick={() => setPopUp({isOpen : true, item : item})}>
                        Read More
                      </button>
                      
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {popUp.isOpen && <Modal setPopUp={setPopUp} popUp={popUp}  />}
    </div>
  );
}

//   metadataBase: new URL('http://localhost:3000'),
