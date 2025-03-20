"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    reportSrc: "/assets/blog/resources/Jeap Report.jpg",
    href: "/assets/blog/resources/Revised JEAP Report (Nov 7) .pdf",
    reportText: "One Africa For Health Security",
  },
  {
    id: 2,
    reportSrc: "/assets/blog/Resources_plan.png",
    href: "/assets/blog/Joint EPR Detailed Action Plan Final Report.pdf",
    reportText: "Joint EPR Detailed Action Plan",
  },
  {
    id: 3,
    reportSrc: "/assets/blog/Joint EPR Digital Brochure.jpg",
    href: "/assets/blog/Final Digital Brochure File.pdf",
    reportText: "Final Digital Brochure",
  },
  {
    id: 4,
    reportSrc: "/assets/blog/Joint EPR Final Case Study.jpg",
    href: "/assets/blog/Final Case Study File Draft 6.pdf",
    reportText: "Final Case Study",
  },
];

// interface SlideItem {
//   header: string;
//   img: string;
//   details: string[]; // Array of details for modal content
// }

// interface Slide {
//   id: number;
//   reportSrc: string;
// }

export default function Reports() {
  const [current, setCurrent] = useState(0);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCurrent((current + 1) % slides.length);
  //   }, 10000);

  //   return () => clearInterval(timer);
  // }, [current]);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="h-screen xl:h-screen flex flex-col items-center justify-start md:justify-center xl:justify-center bg-cover xl:bg-cover bg-no-repeat bg-mb-partner-curve bg-top md:bg-xl-about-curve z-[200]">
      <div className="basis-1/4 xs:basis-1/5 md:basis-1/4 xl:basis-1/4 2xl:basis-1/3 flex flex-col items-center justify-center mb-2 xs:mb-4 md:mt-8 gap-2 xl:gap-2 text-center text-white w-3/4 xs:w-full md:w-3/4 md:pt-8 ">
        <h2 className="leading-none xl:leading-[1.5] text-xl md:text-[2rem] xl:text-[50px] font-bold">
          Reports
        </h2>
      </div>
      {/* Navigation Buttons */}
      <div className="flex justify-center md:justify-end w-[30%] gap-5">
        <button
          onClick={handlePrev}
          className="left-0 md:left-[59%] top-1/2 md:top-0 transform -translate-y-1/2 text-white p-2 rounded-full z-10 border"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="right-0 lg:right-[34%] top-1/2 md:top-0 transform -translate-y-1/2 text-white p-2 rounded-full z-10 border"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
      <div className="relative flex items-center justify-center w-full pb-20">
        {/* Desktop View */}
        <div className="hidden md:flex gap-16 items-center">
          <div className="text-white text-xl w-[20%]">
            <h2 className="text-left">{slides[current].reportText}</h2>
          </div>
          {/* Main Active Image */}
          <a
            className="bg-[#3a6e63] p-16 flex justify-center items-center"
            href={slides[current].reportSrc}
            download="JEAP Report.pdf"
            target="_blank"
          >
            <div className="relative h-[400px] w-[300px]">
              <img
                src={slides[current].reportSrc}
                alt="Active Slide"
                className="h-full w-full object-cover rounded-lg"
              />
              {/* Hover Overlay */}
              <div className="absolute  inset-0 bg-black bg-opacity-[0.58] opacity-0 transition-opacity duration-500 hover:opacity-100 h-[370px] w-[270px] m-[14px]">
            <div className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] transform transition-transform duration-500 ease-out hover:scale-150 flex flex-col items-center gap-4">
              <img height={60} width={60} src="/assets/blog/Path 14204 2.svg"></img>
              <div className="m-[0 auto] w-[90%]">
                <svg xmlns="http://www.w3.org/2000/svg" width="150" height="34" viewBox="0 0 200 34">
                  <text id="Download_PDF" data-name="Download PDF" transform="translate(0 27)" fill="#fff" fontSize="24" fontFamily="arial-bold"><tspan x="0" y="0">Download PDF</tspan></text>
                </svg>
              </div>
            </div>
          </div>
            </div>
          </a>

          {/* Small Next Image */}
          <div className="bg-[#3a6e63] p-8">
            <div className="h-[250px] w-[180px] opacity-75 transition-opacity duration-500">
              <img
                src={slides[(current + 1) % slides.length].reportSrc}
                alt="Next Slide"
                className="h-full w-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Mobile View - Only One Image */}
        <a
          className="md:hidden relative w-[300px] h-[400px]"
          href={slides[current].reportSrc}
          download="JEAP Report.pdf"
          target="_blank"
        >
          <img
            src={slides[current].reportSrc}
            alt="Mobile Slide"
            className="h-full w-full object-cover rounded-lg"
          />
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 transition-opacity duration-500 hover:opacity-100 flex justify-center items-center">
            <div className="text-center">
              <img
                src="/assets/blog/Path 14204 2.svg"
                alt="Download Icon"
                className="h-12 w-12 mx-auto"
              />
              <p className="text-white text-xl font-bold mt-2">Download PDF</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
