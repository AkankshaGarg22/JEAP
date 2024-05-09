"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { items } from "./time-line";

const bgImages = [
  { id: "section-1", imageUrl: "/assets/blog/jpgs/WHO_Ghana-151530.webp" },
  { id: "section-2", imageUrl: "/assets/blog/jpgs/WHO_Ghana-151560.webp" },
  { id: "section-3", imageUrl: "/assets/blog/jpgs/WHO_Ghana-151788.webp" },
];

export function XLTimeLine() {
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);
  const [activeBackgroundImage, setActiveBackgroundImage] = useState(bgImages[0].imageUrl);
  const jeapJourneyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    function setupScrollTriggers() {
      if (!jeapJourneyRef.current) {
        console.log("jeap-journey not found, retrying...");
        setTimeout(setupScrollTriggers, 500);
        return;
      }

      ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Clean up existing triggers

      const sections = jeapJourneyRef.current.querySelectorAll<HTMLElement>(".section");
      if (sections.length === 0) {
        console.log("No sections found, retrying...");
        setTimeout(setupScrollTriggers, 500);
        return;
      }
      // scroll to jeap journey

      ScrollTrigger.create({
        trigger: jeapJourneyRef.current,
        start: "top top",
        end: `bottom ${jeapJourneyRef.current.offsetHeight}px`,
        pin: true,
        scrub: true,
        markers: true,
      });
      // scroll to sections
      sections.forEach((section) => {
        gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 60%",
            end: "-40%",
            scrub: true,
            toggleClass: { targets: section, className: "active" },
            markers: true,
            onEnter: () => {
              // change bg image
              const sectionId = section.id;
              const imageUrl = bgImages.find((bgImage) => bgImage.id === sectionId)?.imageUrl;
              if (imageUrl) {
                setActiveBackgroundImage(imageUrl);
              }
            },
            onLeave: () => setActiveSectionId(null),
          },
        });
      });
    }

    setupScrollTriggers(); // Initial setup to handle pre-load content

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Cleanup on component unmount
    };
  }, []);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      ScrollTrigger.refresh();
    });

    resizeObserver.observe(jeapJourneyRef.current!);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  // Handle scroll to section
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = window.innerHeight / 2.5; // Adjusting to center the section
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const scrollToPosition = sectionTop - yOffset;
      gsap.to(window, {
        scrollTo: { y: scrollToPosition, autoKill: true },
        duration: 0.6,
      });
      const imageUrl = bgImages.find((bgImage) => bgImage.id === sectionId)?.imageUrl;
      if (imageUrl) {
        setActiveBackgroundImage(imageUrl);
      }
    }
  };

  const handleClick = (key: number, event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    const sectionId = `section-${key}`;
    setActiveSectionId(sectionId);
    scrollToSection(sectionId);
  };

  return (
    <div id="jeap-journey" ref={jeapJourneyRef} className="min-h-screen flex flex-col">
      <div className="text-center md:pb-[10px]">
        <h2 className="text-[#000000] text-3xl md:text-7xl font-[compasse-extrabold] my-4">THE JEAP JOURNEY</h2>
      </div>
      <div className="relative bg-cover bg-center w-full p-4 transition duration-500 ease-in" style={{ backgroundImage: `url(${activeBackgroundImage})` }}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#00205C] to-[#1A5632] opacity-80" />
        <div className="timeline my-4 text-transparent ">
          <div className="line"></div>
          {items.map((item) => (
            <div id={`section-${item.key}`} className={`section text-wrap text-3xl h-[420px] w-3/4 md:w-3/4 ${activeSectionId === `section-${item.key}` ? "active" : ""}`} key={item.key}>
              <div className="section-ball absolute -top-2 -left-2 w-4 h-4 bg-white rounded-full cursor-pointer" onClick={(e) => handleClick(item.key, e)}></div>
              <div className="section-title text-white">{item.year}</div>
              <h2 className="text-xl font-bold">{item.cardTitle}</h2>
              <h5 className="text-xl leading-tight">{item.cardSubtitle}</h5>
              <p className="hidden md:block md:text-lg transition-opacity ease-in duration-700 opacity-100">{item.cardDetailedText}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

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
