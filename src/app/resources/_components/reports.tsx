"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    reportSrc: ""
  },
  {
    id: 2,
    reportSrc: ""
  },
];

interface SlideItem {
  header: string;
  img: string;
  details: string[]; // Array of details for modal content
}

interface Slide {
  id: number;
  reportSrc: string;
}

export default function Reports() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((current + 1) % slides.length);
    }, 10000); // Change slide every 10 seconds

    return () => clearInterval(timer);
  }, [current]);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="h-screen xl:h-screen flex flex-col items-center justify-start md:justify-center xl:justify-center bg-cover xl:bg-cover bg-no-repeat bg-mb-partner-curve bg-top md:bg-xl-about-curve z-[200]">
      <div className="basis-1/4 xs:basis-1/5 md:basis-1/4 xl:basis-1/4 2xl:basis-1/3 flex flex-col items-center justify-end md:justify-center xl:justify-end mb-2 xs:mb-4 md:mt-8 gap-2 xl:gap-2 text-center text-white w-3/4 xs:w-full md:w-3/4 md:pt-8 ">
        <h2 className="leading-none xl:leading-[1.5] text-xl md:text-[2rem] xl:text-[50px] font-bold">Reports</h2>
      </div>
      <div className="flex flex-col sm:space-y-[60px] lg:space-y-0 md:space-y-0 lg:space-x-[100px] lg:flex-row justify-evenly items-center md:p-4 p-2 gap-[2rem]">
        <div className="shadow-[12px_12px_37px] shadow-[#0000001C] bg-[hsla(0,0%,100%,.1)] backdrop-blur-2xl md:p-[60px] p-[30px]">
          <a className="flex justify-center items-center" href="/assets/blog/resources/Revised JEAP Report (Nov 7) .pdf" download="JEAP Report.pdf" target='_blank'>
            <div className="flex justify-center items-center relative h-[400px] w-[300px] mx-auto md:block hidden">
              <img src="/assets/blog/resources/Jeap Report.jpg" className="relative h-[400px] w-[300px]" alt="resource-plan"></img>
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
            <div className="flex justify-center items-center relative h-[200px] w-[150px] mx-auto md:hidden block">
              <img src="/assets/blog/resources/Jeap Report.jpg" className="relative " alt="resource-plan"></img>
              <div className="absolute inset-0 bg-black bg-opacity-[0.58] opacity-0 transition-opacity duration-500 hover:opacity-100 h-[170px] w-[130px] m-[10px]">
                <div className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] transform transition-transform duration-500 ease-out hover:scale-150 flex flex-col items-center gap-1">
                  <img height={20} width={20} src="/assets/blog/Path 14204 2.svg"></img>
                  <div className="m-[0 auto] w-[90%]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="34" viewBox="0 0 200 34">
                      <text id="Download_PDF" data-name="Download PDF" transform="translate(0 27)" fill="#fff" fontSize="24" fontFamily="arial-bold"><tspan x="0" y="0">Download PDF</tspan></text>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
