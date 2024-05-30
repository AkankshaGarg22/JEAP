"use client";

import { useEffect, useState } from "react";
import Modal from "./modal";
import { PopUpState, TimeLineItem } from "@/interfaces/timeline";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Head from "next/head";

// const backgroundImageUrl = "/assets/blog/jpgs/WHO_Ghana-151560.webp";

const bgImages = [
  { id: "section-1", imageUrl: "/assets/blog/jpgs/Group3343.webp" },
  { id: "section-2", imageUrl: "/assets/blog/jpgs/Group3344.webp" },
  { id: "section-3", imageUrl: "/assets/blog/jpgs/Group3345.webp" },
];

export const items: TimeLineItem[] = [
  {
    key: 1,
    year: "2022",
    cardTitle: "Phase 1",
    cardSubtitle: "Conceptualizing the JEAP",
    cardDetailedText:
      "In response to the challenges posed by COVID-19, Africa CDC and WHO joined forces to revolutionize Emergency Preparedness and Response (EPR) across the continent. A joint Steering Committee was established, driving collective efforts to enhance response activities for improved coverage and impact.",
    minHeight: "50%",
  },
  {
    key: 2,
    year: "2023",
    cardTitle: "Phase 2",
    cardSubtitle: "Unveiling the JEAP",
    cardDetailedText:
      "The JEAP was launched during the 2023 World Health Assembly, uniting partners to address critical challenges in preparedness, detection, and response across six programmatic areas. AVoHC-SURGE, a collaborative workforce initiative jointly led by Africa CDC and WHO, enables African nations to respond rapidly (within 24-48 hours) to health emergencies and humanitarian crises. It welcomes stakeholders from humanitarian, development, and government agencies, ensuring life-saving care reaches all. So far, 16 countries have utilized AVoHC-SURGE members for local responses (Zanzibar, United Republic of Tanzania, Togo, Senegal, Rwanda, Republic of the Congo, Nigeria, Niger, Namibia, Mauritania, Malawi, Kenya, Ethiopia, Democratic Republic of Congo, Chad, Central African Republic), while 6 countries have deployed them internationally (Ethiopia, Tanzania, Rwanda, DRC, Republic of Congo, Botswana).",
    minHeight: "50%",
  },
  {
    key: 3,
    year: "2023 - 2027",
    cardTitle: "Phase 3",
    cardSubtitle: "The Future of the JEAP",
    cardDetailedText:
      "Operating under the Africa CDC - WHO Memorandum of Understanding (MoU), the JEAP emerges as a promising regional framework that can be leveraged for catalytic and inclusive improvements in pandemic preparedness and response.\n Investments in a consolidated, regional pandemic investment plan such as the JEAP are needed to support countries mitigate the impact of future health shocks and empower nations to protect their citizens from emerging health threats.",
    minHeight: "50vh",
  },
];

export function TimeLine() {
  const [backgroundImage, setActiveBackgroundImage] = useState<string>(bgImages[0].imageUrl);
  const [popUp, setPopUp] = useState<PopUpState>({ isOpen: false, item: null });
  const [activeSectionId, setActiveSectionId] = useState<String | null>(null);

  const trigger = (sectionId: string) => {
    // setActiveSectionId(sectionId);
    const imageUrl = bgImages.find((bg) => bg.id === sectionId)?.imageUrl;
    if (imageUrl) setActiveBackgroundImage(imageUrl);
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    function setupScrollTriggers() {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Clean up existing triggers

      const sections = document.querySelectorAll<HTMLElement>(".section");
      if (sections.length === 0) {
        console.log("No sections found, retrying...");
        setTimeout(setupScrollTriggers, 500);
        return;
      }

      sections.forEach((section) => {
        gsap.timeline({
          scrollTrigger: {
            trigger: section,
            // pin: true,
            start: "top 60%",
            end: "-40%",
            // markers: true,
            scrub: true,
            toggleClass: "active",
            onEnter: () => trigger(section.id),
            // onLeave: () => setActiveSectionId(null),
            onEnterBack: () => trigger(section.id),
            // onRefresh: self => self.update()
          },
        });
      });
    }

    window.addEventListener("load", setupScrollTriggers);
    setupScrollTriggers(); // Initial setup to handle pre-load content

    return () => {
      window.removeEventListener("load", setupScrollTriggers);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Cleanup on component unmount
    };
  }, []);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      ScrollTrigger.refresh();
    });

    document.querySelectorAll(".section").forEach((section) => {
      resizeObserver.observe(section);
    });

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  // preload images
  useEffect(() => {
    const imagePromises = bgImages.map((image) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = image.imageUrl;
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    Promise.all(imagePromises)
      .then(() => console.log("All images preloaded successfully"))
      .catch((error) => console.error("Failed to preload images:", error));
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = window.innerHeight / 2.5; // Adjusting to center the section
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const scrollToPosition = sectionTop + yOffset;
      gsap.to(window, {
        scrollTo: { y: scrollToPosition, autoKill: true },
        duration: 0.6,
      });
    }
  };

  const handleClick = (key: number, event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    document.querySelectorAll(".section").forEach((section) => {
      section.classList.remove("active");
    });
    const sectionId = `section-${key}`;
    trigger(sectionId);
    setActiveSectionId(sectionId);
    scrollToSection(sectionId);
  };

  return (
    <>
      <Head>
        {bgImages.map((image) => (
          <link key={image.id} rel="preload" href={image.imageUrl} as="image" />
        ))}
      </Head>
      <div id="jeap-journey" className="h-full flex flex-col">
        <div className="text-center md:pb-[10px]">
          <h2 className="text-[#000000] text-3xl md:text-7xl font-[compasse-extrabold] my-4">THE JEAP JOURNEY</h2>
        </div>
        <div
          className="relative bg-cover bg-center w-full p-4 transition-bg-image duration-500 ease-in-out"
          style={{ backgroundImage: `url(${backgroundImage}),url(${bgImages[1].imageUrl}),url(${bgImages[2].imageUrl})` }}
        >
          {/* <div className="absolute inset-0 bg-gradient-to-br from-[#00205C] to-[#1A5632] opacity-80" /> */}
          <div className="timeline my-4 text-transparent ">
            <div className="line"></div>
            {items.map((item) => (
              <div id={`section-${item.key}`} className={`section text-wrap text-3xl w-3/4 md:w-3/4 ${activeSectionId === `section-${item.key}` ? "active" : ""}`} key={item.key}>
                <div className="section-ball absolute -top-2 md:top-0 -left-2 w-4 h-4 bg-white rounded-full cursor-pointer" onClick={(e) => handleClick(item.key, e)}></div>
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
    </>
  );
}
