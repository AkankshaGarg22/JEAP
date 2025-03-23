"use client";
import { useEffect, useRef, useState } from "react";

const arr = [
  "Increased visibility on the country's core capacities and key challenges and opportunities for intervention in EPR.",
  "An emergency health workforce that is qualified, interoperable and interconnected in Africa.",
  "Strengthened national public health surveillance and response systems with updates IDSR and EBS practices, digital technologies, and genomic surveillance capacities at the country level.",
  "Timely availability of high quality supplies and logistics.",
  "Increased coherence across coordination mechanisms in countries and number of coordination points managing EPR activities (namely PHEOCs).",
  "Improved community preparedness knowledge, and engagement in responding to health emergencies.",
  "Climate resilient health systems that are ready to detect and respond to health emergencies caused by climate crises.",
  "Increased adoption of digital health technologies by national public health systems of Member States.",
];

export default function Conceptualization() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerVisible, setContainerVisible] = useState(false);

  const [lineStyles, setLineStyles] = useState({ top: "0px", height: "0px" });

  useEffect(() => {
    if (timelineRefs.current.length > 0) {
      const firstMarker = timelineRefs.current[0]?.getBoundingClientRect();
      const lastMarker = timelineRefs.current[arr.length - 1]?.getBoundingClientRect();

      if (firstMarker && lastMarker) {
        const containerTop = containerRef.current?.getBoundingClientRect().top || 0;

        setLineStyles({
          top: `${firstMarker.top - containerTop + 12}px`, // Adjust for alignment
          height: `${lastMarker.top - firstMarker.top}px`, // Line spans from first to last marker
        });
      }
    }
  }, []);

  // Step 1: Detect if container is in the middle of viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setContainerVisible(entry.isIntersecting);
      },
      { threshold: 0.2 } // Container should be at least 20% visible
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  // Step 2: Track scrolling inside the container
  useEffect(() => {
    if (!containerVisible) return; // Only track when container is visible

    const handleScroll = () => {
      if (!containerRef.current) return; // Safety check

      let newActiveIndex = 0;
      const container = containerRef.current;
      const containerRect = container.getBoundingClientRect();
      const containerTop = containerRect.top;
      const containerHeight = containerRect.height;

      let multiplier;
      if (window.innerWidth >= 3560) {
        multiplier = 0.1;
      } else if (window.innerWidth >= 2560) {
        multiplier = 0.15;
      } else {
        multiplier = 0.25;
      }

      const scrollThreshold = containerTop + containerHeight * multiplier; // 25% of container height

      timelineRefs.current.forEach((ref, index) => {
        if (!ref) return;

        const rect = ref.getBoundingClientRect();
        if (rect.top <= scrollThreshold) {
          newActiveIndex = index;
        }
      });

      if (newActiveIndex !== activeIndex) {
        setActiveIndex(newActiveIndex);
      }
    };

    const container = containerRef.current;

    if (!container) return;
    container.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once initially

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [containerVisible, activeIndex]);

  const handleClick = (index: number) => {
    const target = timelineRefs.current[index];
    const container = containerRef.current;
    if (target !== null && container !== null) {
      container.scrollTo({ top: target.offsetTop, behavior: "smooth" });
    }
    setActiveIndex(index);
  };

  return (
    <div className="xl:min-h-screen bg-gradient-to-b from-[#1b5632] via-[#195334] to-[#01205d] text-white flex flex-col gap-4 xl:gap-8 3xl:gap-8 items-center xl:justify-around py-2 md:pt-[40px] pt-[20px]">
      <h2 className="mt-4 text-center text-2xl xl:text-[70px] font-bold tracking-wider w-4/5 xl:w-full">JEAP conceptualization and launch</h2>
      <p className="w-4/5 xl:w-9/10 text-base xl:leading-6 xl:text-xl 3xl:text-2xl lg:text-center">
        While the JEAP was formally launched in May 2023, its journey began more than a year earlier. In March 2022, the founding partners held an in-person retreat to begin consolidating regional
        strategies, recognizing that they were pursuing shared objectives in supporting African Member States and that there were opportunities to enhance coordination. The retreat kick-started a
        year-long process to define common priority areas while also piloting initiatives to combine or further align to related programs in service of more efficient support to Member States.
        Discussions including reviewing existing strategies, recent evidence including more than 200 expert recommendations following COVID-19, as well as options for governance and management.
      </p>
      <p className="w-4/5 xl:w-9/10 text-base xl:leading-6 xl:text-xl 3xl:text-2xl lg:text-center">
        As a result, in May 2023, the JEAP Partnership was formally launched. Shortly thereafter, its 5-year plan (2023-2027) was validated as a core document to guide the JEAP’s work with Member
        States to tackle key challenges across the areas of preparation, detection and response. Through implementing this plan, the JEAP strives to achieve several ambitious outcomes:
      </p>

      <div className="md:hidden flex flex-col gap-4 my-4 items-center justify-center">
        <h2 className="text-center text-2xl xl:text-3xl font-bold tracking-wider w-4/5 xl:w-full">JEAP Target Outcomes</h2>
        <div className="flex flex-col gap-4 items-center justify-center w-4/5">
          {arr.map((item, i) => (
            <div className="border bg-white text-[#174e39] p-2 min-h-40 flex items-center justify-center text-md" key={i}>
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="hidden md:flex items-start gap-8 w-4/5">
        <div className="flex-none">
          <h2 className="text-3xl font-bold my-8">JEAP Target Outcomes</h2>
        </div>
        <div className="flex-1 h-[50vh] 3xl:h-[35vh] overflow-y-scroll no-scrollbar" ref={containerRef}>
          <div className="relative 2xl:h-[150vh] xl:h-[180vh] md:h-[185vh] 4xl:h-[80vh]">
            {/* Vertical timeline line */}
            <div className="absolute z-10 w-0.5 bg-white left-4 mt-5" style={{ top: lineStyles.top, height: lineStyles.height }}></div>

            {/* Timeline items */}
            <div className="pl-2 space-y-2">
              {arr.map((item, i) => (
                <div key={i} ref={(el) => (timelineRefs.current[i] = el)} className="relative pl-12 transition-opacity duration-300 cursor-pointer " onClick={() => handleClick(i)}>
                  {/* Circle marker - always has checkmark, just highlighted when active */}
                  <div
                    className={`absolute bg-[#1b5632] -left-1 top-[8px] h-6 w-6 rounded-full ${
                      activeIndex === i ? "  ring-2 ring-white" : "border-white/50 border"
                    } flex items-center justify-center transition-all duration-300 z-20`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className={`${activeIndex == i ? "h-6 w-6" : "h-4 w-4"} text-white`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>

                  {/* Content */}
                  <div className={`px-6 py-8 min-h-28 rounded-md transition-all duration-300 ${activeIndex === i ? "ring-2 bg-white text-teal-900 shadow-lg opacity-100" : "opacity-50 text-white"}`}>
                    <p className="text-lg 2xl:text-xl">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
