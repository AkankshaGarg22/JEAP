"use client";

import { useEffect, useState } from "react";
import Modal from "./modal";
import { PopUpState, TimeLineItem } from "@/interfaces/timeline";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

const backgroundImageUrl = "/assets/blog/jpgs/WHO_Ghana-151560.webp";

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

export function TimeLine() {
  const [selectedKey, setSelectedKey] = useState(1);
  const [popUp, setPopUp] = useState<PopUpState>({ isOpen: false, item: null });
  const [activeSectionId, setActiveSectionId] = useState<String | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);

    gsap.utils.toArray<HTMLElement>(".section").forEach((section) => {
      gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top -40%",
          end: "bottom -40%",
          // toggleClass: "active",
          markers: true,
          scrub: true,
          onEnter: () => setActiveSectionId(section.id),
          onLeave: () => setActiveSectionId(null),
        // onEnterBack: () => setActiveSectionId(section.id),
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const scrollToSection = (sectionId : string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = window.innerHeight / 1.75;
      const sectionTop = section.getBoundingClientRect().top;
      const scrollToPosition = window.scrollY + sectionTop - yOffset;
      gsap.to(window, {
        scrollTo: { y: scrollToPosition, autoKill: true },
        duration: 1.5
      });
    }
  };

  const handleClick = (key: number, event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    // Query all sections and remove the 'active' class from them
    document.querySelectorAll(".section").forEach((section) => {
      section.classList.remove("active");
    });

    // const section = document.querySelector<HTMLElement>(`#section-${key}`);
    // if (section) {
    //   const yOffset = window.innerHeight / 2; // Half of the viewport height
    //   const sectionTop = section.getBoundingClientRect().top; // Top position of the section relative to the viewport
    //   const scrollToPosition = window.scrollY + sectionTop - yOffset;
    //   gsap.to(window, {
    //     scrollTo: { y: scrollToPosition, autoKill: true },
    //     duration: 1.5,
    //     onComplete: () => {
    //       // Ensure the class is toggled in sync with the animation if needed
    //       section.classList.add("active");
    //     },
    //   });
    // }
    const sectionId = `section-${key}`;
    setActiveSectionId(sectionId); // Update the active section ID
    scrollToSection(sectionId);
  };

  return (
    <div id="jeap-journey" className="min-h-screen flex flex-col">
      <div className="text-center p-10 md:pt-[150px]">
        <h2 className="text-[#000000] text-3xl md:text-7xl font-[compasse-extrabold] my-4">THE JEAP JOURNEY</h2>
      </div>
      <div className="relative bg-cover bg-center w-full p-4" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#00205C] to-[#1A5632] opacity-80" />
        <div className="timeline my-4 text-transparent ">
          <div className="line"></div>
          {items.map((item) => (
            <div id={`section-${item.key}`} className={`section text-wrap text-3xl w-3/4 md:w-3/4 ${activeSectionId === `section-${item.key}` ? 'active' : ''}`} key={item.key}>
              <div className="section-ball absolute -top-2 -left-2 w-4 h-4 bg-white rounded-full cursor-pointer" onClick={(e) => handleClick(item.key, e)}></div>
              <div className="section-title text-white">{item.year}</div>
              <h2 className="text-xl font-bold">{item.cardTitle}</h2>
              <h5 className="text-xl leading-tight">{item.cardSubtitle}</h5>
              <p className="hidden md:block md:text-lg transition-opacity ease-in duration-700 opacity-100">{item.cardDetailedText}</p>
              <button onClick={() => setPopUp({ isOpen: true, item: item })}>Read More</button>
            </div>
          ))}
        </div>
        {popUp.isOpen && <Modal setPopUp={setPopUp} popUp={popUp} />}
      </div>
    </div>
  );
}
