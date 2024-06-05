"use client";
import { useEffect, useRef, useState } from "react";
import { items } from "./time-line";

const bgImages = [
  { id: "section-1", imageUrl: "/assets/blog/jpgs/Group3343.webp" },
  { id: "section-2", imageUrl: "/assets/blog/jpgs/Group3344.webp" },
  { id: "section-3", imageUrl: "/assets/blog/jpgs/Group3345.webp" },
];

const NewTimeline = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [activeSectionId, setActiveSectionId] = useState<string | null>("section-1");
  const [backgroundImage, setActiveBackgroundImage] = useState<string>(bgImages[0].imageUrl);
  const [activeElement, setElement] = useState(1);
  const isScrollingRef = useRef(false);

  const trigger = (sectionId: string) => {
    setActiveSectionId(sectionId);
    const imageUrl = bgImages.find((bg) => bg.id === sectionId)?.imageUrl;
    if (imageUrl) setActiveBackgroundImage(imageUrl);
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
      // Disable scrolling temporarily
      isScrollingRef.current = true;
      timelineRef.current.scrollTo({ top: scrollToPosition, behavior: "smooth" });
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 500);
    }
  };

  const handleScroll = () => {
    if (isScrollingRef.current) return;
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
        const key = item.id.split("-")[1];
        setElement(Number(key));
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

  const handleClick = (key: number, event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    const sectionId = `section-${key}`;
    if (sectionId !== activeSectionId) {
      scrollToSection(sectionId);
      trigger(sectionId);
      setElement(key);
    }
  };

  return (
    <div id="jeap-journey" className="min-h-full flex flex-col" data-lenis-prevent>
      <div className="text-center md:pb-[10px]">
        <h2 className="text-[#000000] text-3xl md:text-7xl font-[compasse-extrabold] my-4">THE JEAP JOURNEY</h2>
      </div>
      <div className="w-full flex relative pb-4" style={{ backgroundImage: `url(${backgroundImage}),url(${bgImages[1].imageUrl}),url(${bgImages[2].imageUrl})`, height: "80vh" }}>
        <div
          ref={timelineRef}
          className="xltimeline overflow-y-scroll no-scrollbar scrollbar-hide w-full  relative flex flex-col items-end bg-cover bg-center transition-bg-image duration-500 ease-in-out"
          id="overflowDiv"
        >
          <div
            className={`absolute flex flex-col justify-center items-center left-[calc(25%_-_1px)] w-0.5 bg-white  top-0 after:absolute after:block after:content-[""] after:h-4 after:w-4 after:bg-white after:-translate-x-2/4 after:rounded-[50%] after:left-2/4 after:bottom-0 mt-4 xl:h-[140vh] box-border`}
          />
          {items.map((item) => (
            <div
              key={item.key}
              id={`section-${item.key}`}
              className={`xltimeline-item flex flex-col gap-3 items-start transition-[600ms] duration-[ease] relative z-[4] px-4 text-wrap text-3xl w-full group ${
                activeSectionId === `section-${item.key}` ? "active" : ""
              }`}
              style={{ scrollSnapAlign: "start", minHeight: "50vh" }}
            >
              <div
                className="timeline-ball absolute top-0 left-[24.5%] w-4 h-4  group-[.active]:left-[24%] group-[.active]:w-8 group-[.active]:h-8   bg-white rounded-full cursor-pointer "
                onClick={(e) => handleClick(item.key, e)}
              ></div>
              <div
                className={`timeline-title absolute text-white text-lg group-[.active]:text-[60px] group-[.active]:font-bold group-[.active]:pt-4 group-[.active]:italic 
              ${item.key !== 3 ? " left-[20%] group-[.active]:left-[8%] " : "left-[15%] group-[.active]:left-[1%]"}
              `}
              >
                {item.year}
              </div>
            </div>
          ))}
        </div>
        <div className="h-full flex flex-col items-start gap-4 mt-6 p-6 fixed top-16 right-20  w-1/2">
          {items.map((item) =>
            item.key === activeElement ? (
              <>
                <h2 className="text-4xl leading-normal font-bold  text-white">{item.cardTitle}</h2>
                <h5 className="text-3xl leading-none font-bold text-white">{item.cardSubtitle}</h5>
                <p className={`text-2xl transition-opacity ease-in duration-700 opacity-100 text-transparent text-white leading-relaxed w-full`}>{item.cardDetailedText}</p>
              </>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default NewTimeline;
