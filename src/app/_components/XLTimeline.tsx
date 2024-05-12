"use client";

import { useEffect, useRef, useState } from "react";
import { items } from "./time-line";

const bgImages = [
  { id: "section-1", imageUrl: "/assets/blog/jpgs/Group3343.png" },
  { id: "section-2", imageUrl: "/assets/blog/jpgs/Group3344.png" },
  { id: "section-3", imageUrl: "/assets/blog/jpgs/Group3345.png" },
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

  const handleClick = (key: number, event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    const sectionId = `section-${key}`;
    if (sectionId !== activeSectionId) {
      trigger(sectionId);
      scrollToSection(sectionId);
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

  return (
    <div id="jeap-journey" className="min-h-screen flex flex-col">
      <div className="text-center md:pb-[10px]">
        <h2 className="text-[#000000] text-3xl md:text-7xl font-[compasse-extrabold] my-4">THE JEAP JOURNEY</h2>
      </div>
      <div
        ref={timelineRef}
        className="xltimeline overflow-y-scroll  relative flex flex-col items-end bg-cover bg-center transition-bg-image duration-500 ease-in-out"
        style={{ backgroundImage: `url(${backgroundImage})`, height: "80vh" }}
      >
        <div
          className={`absolute left-[calc(25%_-_1px)] w-0.5 bg-white top-0 after:absolute after:block after:content-[""] after:h-4 after:w-4 after:bg-white after:-translate-x-2/4 after:rounded-[50%] after:left-2/4 after:bottom-0 mt-6 xl:h-[135vh] box-border`}
        />
        {items.map((item) => (
          <div
            key={item.key}
            id={`section-${item.key}`}
            className={`xltimeline-item flex flex-col my-8 gap-4 items-start transition-[600ms] duration-[ease]  relative z-[4]  p-4 text-wrap text-3xl w-3/4 group ${
              activeSectionId === `section-${item.key}` ? "active" : ""
            }`}
            style={{ minHeight: "40vh", scrollSnapAlign: "start" }}
          >
            <div
              className="timeline-ball absolute -top-2 -left-2 w-4 h-4  group-[.active]:-left-4 group-[.active]:w-8 group-[.active]:h-8   bg-white rounded-full cursor-pointer "
              onClick={(e) => handleClick(item.key, e)}
            ></div>
            <div className="timeline-title text-white text-lg group-[.active]:text-4xl">{item.year}</div>
            <h2 className="text-xl font-bold text-transparent group-[.active]:text-white">{item.cardTitle}</h2>
            <h5 className="text-xl leading-tight text-transparent group-[.active]:text-white">{item.cardSubtitle}</h5>
            <p className="text-lg transition-opacity ease-in duration-700 opacity-100 text-transparent group-[.active]:text-white">{item.cardDetailedText}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default XLTimeLine;

// export function XLTimeLine() {
//   const [activeSectionId, setActiveSectionId] = useState<string | null>(null);
//   const [activeBackgroundImage, setActiveBackgroundImage] = useState<string>(bgImages[0].imageUrl);
//   const jeapJourneyRef = useRef<HTMLDivElement>(null);
//   const timelineRef = useRef<HTMLDivElement>(null);

//   const trigger = (sectionId: string) => {
//     setActiveSectionId(sectionId);
//     const imageUrl = bgImages.find((bg) => bg.id === sectionId)?.imageUrl;
//     if (imageUrl) setActiveBackgroundImage(imageUrl);
//   };

//   const handleScroll = () => {
//     const timeline = timelineRef.current;
//     if (!timeline) return;

//     const containerHeight = timeline.clientHeight;

//     const sections = Array.from(timeline.children);

//     sections.forEach((section) => {
//       const sectionRect = section.getBoundingClientRect();
//       if (sectionRect.top <= containerHeight && sectionRect.bottom >= 0) {
//         trigger(section.id);
//       }
//     });
//   };

//   useEffect(() => {
//     if (timelineRef.current) timelineRef.current.addEventListener("scroll", handleScroll);

//     return () => {
//       if (timelineRef.current) {
//         timelineRef.current.removeEventListener("scroll", handleScroll);
//       }
//     };
//   }, []);

//   const scrollToSection = (sectionId: string) => {
//     document.querySelectorAll(".section").forEach((section) => {
//       section.classList.remove("active");
//     });
//     const section = document.getElementById(sectionId);
//     if (timelineRef.current && section) {
//       const sectionTop = section.offsetTop - timelineRef.current.offsetTop;
//       const scrollToPosition = sectionTop - (timelineRef.current.offsetHeight / 2) + (section.offsetHeight / 2);
//       timelineRef.current.scrollTo({ top: scrollToPosition, behavior: "smooth" });
//     }
//   };

//   const handleClick = (key: number, event: React.MouseEvent<HTMLDivElement>) => {
//     event.preventDefault();
//     const sectionId = `section-${key}`;
//     trigger(sectionId);
//     scrollToSection(sectionId);
//   };

//   return (
//     <div id="jeap-journey" ref={jeapJourneyRef} className="min-h-screen flex flex-col">
//       <div className="text-center md:pb-[10px]">
//         <h2 className="text-[#000000] text-3xl md:text-7xl font-[compasse-extrabold] my-4">THE JEAP JOURNEY</h2>
//       </div>
//       <div className="relative bg-cover bg-center w-full p-4 transition duration-500 ease-in" style={{ backgroundImage: `url(${activeBackgroundImage})` }}>
//         <div className="absolute inset-0 bg-gradient-to-br from-[#00205C] to-[#1A5632] opacity-80" />
//         <div ref={timelineRef} className="timeline my-4 text-transparent overflow-y-scroll">
//           <div className="line"></div>
//           {items.map((item) => (
//             <motion.div
//               id={`section-${item.key}`}
//               className={`section text-wrap text-3xl h-[480px] w-3/4 md:w-3/4 ${activeSectionId === `section-${item.key}` ? "active" : ""}`}
//               key={item.key}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5 }}
//             >
//               <div className="section-ball absolute -top-2 -left-2 w-4 h-4 bg-white rounded-full cursor-pointer" onClick={(e) => handleClick(item.key, e)}></div>
//               <div className="section-title text-white">{item.year}</div>
//               <h2 className="text-xl font-bold">{item.cardTitle}</h2>
//               <h5 className="text-xl leading-tight">{item.cardSubtitle}</h5>
//               <p className="hidden md:block md:text-lg transition-opacity ease-in duration-700 opacity-100">{item.cardDetailedText}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// import { gsap } from "gsap";
// import ScrollTrigger from "gsap/dist/ScrollTrigger";
// import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// export function XLTimeLine() {
//   const [activeSectionId, setActiveSectionId] = useState<string | null>(null);
//   const [activeBackgroundImage, setActiveBackgroundImage] = useState<string>(bgImages[0].imageUrl);
//   const jeapJourneyRef = useRef<HTMLDivElement>(null);
//   const timelineRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

//     if (!timelineRef.current) {
//       console.error("Timeline ref is not assigned");
//       return;
//     }
//     console.log(timelineRef.current);
//     const timeline = timelineRef.current;
//     const sections = Array.from(timeline.children);

//     sections.forEach((section, index) => {
//       const sectionId = section.id;
//        ScrollTrigger.create({
//         trigger: section,
//         start: "top bottom-=80%",
//         toggleClass : 'active',
//         markers: true,
//         onEnter: () => {
//           setActiveSectionId(sectionId);
//           const imageUrl = bgImages.find(bg => bg.id === sectionId)?.imageUrl;
//           if (imageUrl) setActiveBackgroundImage(imageUrl);
//         },
//         onLeaveBack: () => setActiveSectionId(null)
//       });
//     });

//     return () => {
//       sections.forEach((section, index) => {
//         const trigger = ScrollTrigger.getById(section.id);
//         if (trigger) trigger.kill();
//       });
//     };
//   }, []);

// const scrollToSection = (sectionId: string) => {
//   const section = document.getElementById(sectionId);
//   if (section) {
//     const yOffset = window.innerHeight / 2.5; // Adjusting to center the section
//     const sectionTop = section.getBoundingClientRect().top + window.scrollY;
//     const scrollToPosition = sectionTop - yOffset;
//     gsap.to(window, {
//       scrollTo: { y: scrollToPosition, autoKill: true },
//       duration: 0.6,
//     });
//   }
// };

//   const handleClick = (key: number, event: React.MouseEvent<HTMLDivElement>) => {
//     event.preventDefault();
//     const sectionId = `section-${key}`;
//     scrollToSection(sectionId);
//   };

//   return (
//     <div id="jeap-journey" ref={jeapJourneyRef} className="min-h-screen flex flex-col">
//       <div className="text-center md:pb-[10px]">
//         <h2 className="text-[#000000] text-3xl md:text-7xl font-[compasse-extrabold] my-4">THE JEAP JOURNEY</h2>
//       </div>
//       <div className="relative bg-cover bg-center w-full p-4 transition duration-500 ease-in  h-[720px]" style={{ backgroundImage: `url(${activeBackgroundImage})` }}>
//         {/* <div className="absolute inset-0 bg-gradient-to-br from-[#00205C] to-[#1A5632] opacity-80" /> */}

//         <div ref={timelineRef} className="timeline my-4 text-transparent overflow-y-scroll">
//           <div className="line"></div>
//           {items.map((item) => (
//             <div id={`section-${item.key}`} className={`section text-wrap text-3xl h-[420px] w-3/4 md:w-3/4 ${activeSectionId === `section-${item.key}` ? "active" : ""}`} key={item.key}>
//               <div className="section-ball absolute -top-2 -left-2 w-4 h-4 bg-white rounded-full cursor-pointer" onClick={(e) => handleClick(item.key, e)}></div>
//               <div className="section-title text-white">{item.year}</div>
//               <h2 className="text-xl font-bold">{item.cardTitle}</h2>
//               <h5 className="text-xl leading-tight">{item.cardSubtitle}</h5>
//               <p className="hidden md:block md:text-lg transition-opacity ease-in duration-700 opacity-100">{item.cardDetailedText}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// const [activeSectionId, setActiveSectionId] = useState<String | null>(null);
// const [activeBackgroundImage, setActiveBackgroundImage] = useState(bgImages[0].imageUrl);

// useEffect(() => {
//   gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

//   function setupScrollTriggers() {
//     ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Clean up existing triggers

//     const jeapJourney = document.getElementById("jeap-journey");
//     if (!jeapJourney) {
//       console.log("jeap-journey not found, retrying...");
//       setTimeout(setupScrollTriggers, 500);
//       return;
//     }

//     const sections = document.querySelectorAll<HTMLElement>(".section");
//     if (sections.length === 0) {
//       console.log("No sections found, retrying...");
//       setTimeout(setupScrollTriggers, 500);
//       return;
//     }

//     ScrollTrigger.create({
//       trigger: jeapJourney,
//       start: "top top",
//       end: `bottom ${jeapJourney.offsetHeight}px`,
//       pin: true,
//       scrub: true,
//       markers : true,
//     });

//     sections.forEach((section) => {
//       gsap.timeline({
//         scrollTrigger: {
//           trigger: section,
//           start: "top center",
//           end: "bottom center",
//           scrub: true,
//           toggleClass: "active",
//           markers : true,
//           onEnter: () => {
//             //   setActiveSectionId(section.id);
//             const sectionId = section.id;
//             const imageUrl = bgImages.find((bgImage) => bgImage.id === sectionId)?.imageUrl;
//             if (imageUrl) {
//               setActiveBackgroundImage(imageUrl);
//             }
//           },
//           onLeave: () => setActiveSectionId(null),
//         },
//       });
//     });
//   }

//   window.addEventListener("load", setupScrollTriggers);
//   setupScrollTriggers(); // Initial setup to handle pre-load content

//   return () => {
//     window.removeEventListener("load", setupScrollTriggers);
//     ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Cleanup on component unmount
//   };
// }, []);

// useEffect(() => {
//   const resizeObserver = new ResizeObserver((entries) => {
//     ScrollTrigger.refresh();
//   });

//   document.querySelectorAll(".section").forEach((section) => {
//     resizeObserver.observe(section);
//   });

//   return () => {
//     resizeObserver.disconnect();
//   };
// }, []);

// useEffect(() => {
//   const transitionElement = document.querySelector<HTMLDivElement>(".relative.bg-cover.bg-center.w-full.p-4");
//   if (transitionElement) {
//     transitionElement.style.filter = "blur(5px)";
//     setTimeout(() => {
//       transitionElement.style.filter = "";
//     }, 500);
//   }
// }, [activeBackgroundImage]);

// const scrollToSection = (sectionId: string) => {
//   const section = document.getElementById(sectionId);
//   if (section) {
//     const yOffset = window.innerHeight / 2.5; // Adjusting to center the section
//     const sectionTop = section.getBoundingClientRect().top + window.scrollY;
//     const scrollToPosition = sectionTop - yOffset;
//     gsap.to(window, {
//       scrollTo: { y: scrollToPosition, autoKill: true },
//       duration: 0.6,
//     });
//   }
// };

// const handleClick = (key: number, event: React.MouseEvent<HTMLDivElement>) => {
//   event.preventDefault();
//   document.querySelectorAll(".section").forEach((section) => {
//     section.classList.remove("active");
//   });
//   const sectionId = `section-${key}`;
//   setActiveSectionId(sectionId);
//   scrollToSection(sectionId);
// };
