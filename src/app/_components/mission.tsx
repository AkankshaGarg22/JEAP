"use client";
import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";

const Mission = () => {
  return (
    <div id="mission" className="h-[720px] xl:h-[1024px] flex flex-col items-center justify-start xl:justify-center bg-cover bg-center lg:bg-contain bg-no-repeat  bg-mb-curve md:bg-lg-curve z-[200]">
      <div className="basis-2/3 md:basis-2/3 flex flex-col items-center justify-center md:justify-center xl:justify-center md:mt-4 gap-2 xl:gap-2 text-center text-white md:w-3/4 md:pt-4 ">
        <h2 className="leading-1 xl:leading-[1.5] text-5xl md:text-[4rem] xl:text-7xl font-[compasse-extrabold]">THE JEAP MISSION</h2>
        <div className="flex flex-col items-center gap-2 md:gap-8 xl:gap-4 text-lg xl:text-2xl md:text-xl px-4">
          <p className="text-center xl:w-4/5 xl:leading-snug">Africa faces over a hundred health emergencies annually due to vulnerable health systems, hosting nearly a third of the world's refugee population.</p><p className="text-center xl:w-4/5 xl:leading-snug">
          Despite these challenges, there is a tremendous opportunity to strengthen health systems.</p> <p className="text-center xl:w-4/5 xl:leading-snug"> With support from partners to build resilience, African countries can transform from being vulnerable to health emergencies to becoming models of stability and growth.
          </p>
        </div>
      </div>
      <div className="basis-1/3 md:basis-1/3 flex items-center text-center justify-center w-3/4 md:w-3/4 xl:w-1/2 text-wrap text-lg md:text-xl xl:text-3xl xl:leading-tight font-bold  md:pt-0">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(" Of the ")
              .changeDelay(20)
              .pauseFor(50)
              .typeString(`<strong class="text-[2.25rem] md:text-[2.85rem]"><span style="font-family:compasse-extrabold">25</span> countries<strong>`)
              .changeDelay(25)
              .pauseFor(50)
              .typeString("<br/><span>most susceptible to infectious disease outbreaks globally,</span>")
              .changeDelay(25)
              .pauseFor(80)
              .typeString(`<br/><strong class="text-[2.25rem] md:text-[2.85rem]" style="line-height:1"><span class="xl:mt-2" style="font-family:compasse-extrabold">22</span> are located in Africa.<strong>`)
              .changeDelay(25)
              .pauseFor(50)
              .start();
          }}
          options={{ loop: false }}
        />
      </div>
    </div>
  );
};

export default Mission;
