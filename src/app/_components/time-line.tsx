"use client";

import { useState } from "react";

export function TimeLine() {
  const [selectedYear, setSelectedYear] = useState(2024);

  const backgroundImageUrl = "/assets/blog/WHO_Ghana-151560.jpg";
  const items = [
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
    <div className="h-screen">
      <div className="text-center p-3">
        <h2 className="text-[#00205C] text-6xl font-bold my-4">
          THE JEAP JOURNEY
        </h2>
      </div>
      <div className="relative h-3/4">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#00205C] to-[#348F41] opacity-80"></div>

          {/* Timeline */}
          <div className="absolute inset-0 flex items-center justify-end">
            <div className="border-l-2">
              {items.map((item) => (
                <div
                  key={item.key}
                  className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-2 py-2 bg-transparent text-white rounded mb-40 flex-col md:flex-row space-y-4 md:space-y-0"
                >
                  {/* <!-- Dot Follwing the Left Vertical Line --> */}
                  <button
                    className={`bg-white absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0 ${
                      selectedYear === item.year ? "w-10 h-10" : "w-5 h-5"
                    }`}
                    onClick={()=> setSelectedYear(item.year)}
                  ></button>

                  {/* Text showing the year */}
                  <p className={selectedYear === item.year ? "absolute -left-72 mt-1 text-7xl text-white font-bold" :"absolute -left-28 mt-1 text-xl text-white font-semibold"}>
                    {item.year}
                  </p>

                  {/* <!-- Line that connecting the box with the vertical line --> */}
                  {/* <div className="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div> */}

                  {/* <!-- Content that showing in the box --> */}
                  {selectedYear === item.year ? (
                    <div className="w-[720px]">
                      <h1 className="text-xl font-bold mb-2">{item.cardTitle}</h1>
                      <h1 className="text-lg my-2">{item.cardSubtitle}</h1>
                      <p>{item.cardDetailedText}</p>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

//   metadataBase: new URL('http://localhost:3000'),