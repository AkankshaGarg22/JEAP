"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Reports() {

  const goToReport = (link: string) => {
    window.location.href = link
  }
  return (
    <div className="h-screen xl:h-screen flex flex-col bg-cover xl:bg-cover bg-no-repeat bg-mb-partner-curve bg-top md:bg-xl-about-curve z-[200]">
      <div className="w-full flex text-center justify-center items-center basis-1/4 xs:basis-1/5 md:basis-1/4 xl:basis-1/4 2xl:basis-1/3 flex flex-col items-center mb-2 xs:mb-4 md:mt-8 gap-2 xl:gap-2 text-center text-white md:pt-8 ">
        <h2 className="leading-none xl:leading-[1.5] text-xl md:text-[2rem] xl:text-[50px] font-bold">Case Studies</h2>
      </div>
      <div
      className={`flex flex-col md:flex-row m-0 p-0 items-center justify-center space-y-4 md:space-y-0 md:space-x-8 gap-x-4 pb-16 pt-16`}
    >
      {/* Translucent white image container with fixed dimensions */}
      <div
        className="lg:w-[400px] lg:h-[360px] md:w-[80%] md:h-[60%] bg-white/10 flex items-center justify-center shadow-md backdrop-blur-lg"
        data-aos="fade-up"
      >
        <img loading="lazy"
          src={"/assets/blog/impact/IMG_2547.webp"}
          alt={"Building Africa’s Defenses: Advancing Genomic Sequencing to Ensure Public Health Security"}
          className="w-[300px] h-[260px] cursor-pointer"
          onClick={() => goToReport('/case-studies/building-africa-defenses')}
        />
      </div>

      {/* Text container with white text and a yellow pseudo-element */}
      <div className="p-4 relative lg:w-[40%] sm:w-[80%] flex items-center justify-center cursor-pointer">
        <p onClick={() => goToReport('/case-studies/building-africa-defenses')} className="custom-text">Building Africa’s Defenses: Advancing Genomic Sequencing to Ensure Public Health Security</p>
      </div>
    </div>
    </div>
  );
}
