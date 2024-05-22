"use client";

import { useEffect, useRef, useState } from "react";
import { items } from "./time-line";
import Lenis from "@studio-freight/lenis";

const bgImages = [
  { id: "section-1", imageUrl: "/assets/blog/jpgs/Group3343.webp" },
  { id: "section-2", imageUrl: "/assets/blog/jpgs/Group3344.webp" },
  { id: "section-3", imageUrl: "/assets/blog/jpgs/Group3345.webp" },
];

const XLTimeLine: React.FC = () => {
  const [activeSectionId, setActiveSectionId] = useState<string | null>("section-1");
  const [backgroundImage, setActiveBackgroundImage] = useState<string>(bgImages[0].imageUrl);
  const timelineRef = useRef<HTMLDivElement>(null);

  const trigger = (sectionId: string) => {
    setActiveSectionId(sectionId);
    const imageUrl = bgImages.find((bg) => bg.id === sectionId)?.imageUrl;
    if (imageUrl) setActiveBackgroundImage(imageUrl);
  };

  const handleScroll = () => {
    const timeline = timelineRef.current;
    if (!timeline) return;

    // Get the height of the timeline container
    const timelineHeight = timeline.clientHeight;
    const triggerActive = timelineHeight * 0.5; // 50% of the timeline height
    const triggerInactive = timelineHeight * 0.1; // 5% from the top of the timeline height

    Array.from(timeline.children).forEach((item: Element) => {
      const bounds = item.getBoundingClientRect();
      const containerBounds = timeline.getBoundingClientRect();

      // Calculate the top position of the item relative to the container
      const itemRelativeTop = bounds.top - containerBounds.top;
      const itemRelativeBottom = bounds.bottom - containerBounds.top;

      // Activate item when it reaches 50% of the timeline height and is still above 5% from the top
      if (itemRelativeTop <= triggerActive && itemRelativeBottom >= triggerInactive) {
        trigger(item.id);
      } else if (itemRelativeTop < triggerInactive && activeSectionId === item.id) {
        // Optionally deactivate the section if it scrolls past 5% from top
        // setActiveSectionId(null);
      }
    });
  };

  useEffect(() => {
    const timeline = timelineRef.current;
    timeline?.addEventListener("scroll", handleScroll);
    return () => {
      timeline?.removeEventListener("scroll", handleScroll);
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

  const handleClick = (key: number, event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    const sectionId = `section-${key}`;
    if (sectionId !== activeSectionId) {
      scrollToSection(sectionId);
      trigger(sectionId);
    }
  };

  const scrollToSection = (sectionId: string) => {
    document.querySelectorAll(".xltimeline-item").forEach((section) => {
      section.classList.remove("active");
    });
    const section = document.getElementById(sectionId);
    if (timelineRef.current && section) {
      // Calculate the top position of the section relative to the timeline container
      const containerBounds = timelineRef.current.getBoundingClientRect();
      const sectionBounds = section.getBoundingClientRect();

      // Calculate the position to scroll to: align the section's middle with the timeline's middle
      const sectionMiddle = sectionBounds.top + section.offsetHeight / 2;
      const containerMiddle = containerBounds.top + timelineRef.current.clientHeight / 2;

      // Calculate scroll position: position of section middle point relative to container middle point
      const scrollToPosition = timelineRef.current.scrollTop + (sectionMiddle - containerMiddle);
      timelineRef.current.scrollTo({ top: scrollToPosition, behavior: "smooth" });
    }
  };

  // useEffect(() => {
  //   const overflowDiv = document.getElementById('overflowDiv');

  //   // Check if overflowDiv is found and is an HTMLElement
  //   if (overflowDiv instanceof HTMLElement) {
  //     new Lenis({
  //       wrapper: overflowDiv,
  //       content: overflowDiv,
  //     });
  //   }

  //   });

  return (
    <div id="jeap-journey" className="min-h-full flex flex-col">
      <div className="text-center md:pb-[10px]">
        <h2 className="text-[#000000] text-3xl md:text-7xl font-[compasse-extrabold] my-4">THE JEAP JOURNEY</h2>
      </div>
      <div
        ref={timelineRef}
        className="xltimeline overflow-y-scroll  relative flex flex-col items-end bg-cover bg-center transition-bg-image duration-500 ease-in-out"
        style={{ backgroundImage: `url(${backgroundImage}),url(${bgImages[1].imageUrl}),url(${bgImages[2].imageUrl})`, height: "80vh" }}
        id="overflowDiv"
      >
        <div
          className={`absolute left-[calc(25%_-_1px)] w-0.5 bg-white top-0 after:absolute after:block after:content-[""] after:h-4 after:w-4 after:bg-white after:-translate-x-2/4 after:rounded-[50%] after:left-2/4 after:bottom-0 mt-6 xl:h-[120vh] box-border`}
        />
        {items.map((item) => (
          <div
            key={item.key}
            id={`section-${item.key}`}
            className={`xltimeline-item flex flex-col my-4 gap-3 items-start transition-[600ms] duration-[ease] relative z-[4] px-4 text-wrap text-3xl w-3/4 group ${
              activeSectionId === `section-${item.key}` ? "active" : ""
            }`}
            style={{ minHeight: item.minHeight, scrollSnapAlign: "start" }}
          >
            <div
              className="timeline-ball absolute -top-2 -left-2 w-4 h-4  group-[.active]:-left-4 group-[.active]:w-8 group-[.active]:h-8   bg-white rounded-full cursor-pointer "
              onClick={(e) => handleClick(item.key, e)}
            ></div>
            <div className="timeline-title text-white text-lg group-[.active]:text-4xl">{item.year}</div>
            <h2 className="text-xl font-bold text-transparent group-[.active]:text-white">{item.cardTitle}</h2>
            <h5 className="text-xl leading-tight text-transparent group-[.active]:text-white">{item.cardSubtitle}</h5>
            <p className={`text-lg transition-opacity ease-in duration-700 opacity-100 text-transparent group-[.active]:text-white w-[69%]`}>{item.cardDetailedText}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default XLTimeLine;
