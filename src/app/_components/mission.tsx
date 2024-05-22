"use client";
import React, {useEffect} from "react";
import Typewriter from "typewriter-effect";

const Mission = () => {

  return (
    <div id="mission" className="h-[720px] xl:h-[1024px] flex flex-col items-center justify-start xl:justify-center bg-cover bg-center lg:bg-contain bg-no-repeat  bg-mb-curve md:bg-lg-curve z-[200]">
      <div className="basis-2/3 md:basis-2/3 flex flex-col items-center justify-center md:justify-center xl:justify-center md:mt-4 gap-2 xl:gap-2 text-center text-white md:w-3/4 md:pt-4 ">
        <h2 className="leading-1 xl:leading-[1.5] text-5xl md:text-[4rem] xl:text-7xl font-[compasse-extrabold]">THE JEAP MISSION</h2>
        <div className="flex flex-col items-center gap-2 md:gap-8 xl:gap-4 text-xl xl:text-3xl">
          <p className="text-center xl:w-4/5 xl:leading-snug">Currently, over a hundred health emergencies occur annually in Africa, disrupting the growth and well-being of communities.</p>
          <p className="text-center xl:w-3/4 xl:leading-snug">
            With pervasively weak health systems and close to one-third of the world's refugee population residing in Africa, most African countries are one health emergency away from social and
            economic collapse.
          </p>
        </div>
      </div>
      <div className="basis-1/3 md:basis-1/3 flex items-center text-center w-2/3 md:w-1/3 text-wrap text-lg md:text-xl xl:text-3xl xl:leading-tight font-bold  md:pt-0">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(" Of the ").changeDelay(20)
              .pauseFor(50)
              .typeString(`<strong style="font-size:2.85rem"><span style="font-family:compasse-extrabold">25</span> countries<strong>\n`).changeDelay(25)
              .pauseFor(50)
              .typeString("\n\n\n\n\nmost susceptible to infectious outbreaks globally, ").changeDelay(25)
              .pauseFor(80)
              .typeString(`<strong style="font-size:2.85rem; padding-top: 4px;"><span style="font-family:compasse-extrabold">22</span> are located in Africa.<strong>`).changeDelay(25)
              .pauseFor(50)
              .start();
          }}
          options={{loop :false}}
        />
      </div>
    </div>
  );
};

export default Mission;