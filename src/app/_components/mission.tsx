"use client";
import React from "react";
import Typewriter from "typewriter-effect";

const Mission = () => {
  return (
    <div id="mission" className="h-[720px] md:h-[1024px] flex flex-col items-center justify-start md:justify-center bg-contain lg:bg-contain bg-no-repeat  bg-mb-curve md:bg-lg-curve">
      <div className="basis-2/3 md:basis-2/3 flex flex-col items-center justify-start md:justify-start md:mt-16 gap-2 md:gap-4 text-center text-white w-4/5 md:w-3/4 pt-4 ">
        <h2 className="leading-1 md:leading-[1.5] text-3xl md:text-7xl font-[compasse-extrabold]">THE JEAP MISSION</h2>
        <div className="flex flex-col items-center gap-2 md:gap-4 text-md md:text-3xl">
          <p className="text-center lg:w-4/5">Currently, over a hundred health emergencies occur annually in Africa, disrupting the growth and well-being of communities.</p>
          <p className="text-center lg:w-3/4">
            With pervasively weak health systems and close to one-third of the world's refugee population residing in Africa, most African countries are one health emergency away from social and
            economic collapse.
          </p>
        </div>
      </div>
      <div className="basis-1/3 md:basis-1/3 text-center w-2/3 md:w-1/3 text-wrap text-lg md:text-3xl font-bold">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(" Of the ")
              .pauseFor(300)
              .typeString(`<strong style="font-size:2.5rem"><span style="font-family:compasse-extrabold">25</span> countries<strong>\n`)
              .pauseFor(300)
              .typeString("\n\n\n\n\nmost susceptible to infectious outbreaks globally, ")
              .pauseFor(500)
              .typeString(`<strong style="font-size:2.5rem; padding-top: 4px;"><span style="font-family:compasse-extrabold">22</span> are located in Africa .<strong>`)
              .pauseFor(300)
              .start();
          }}
          options={{loop :true}}
        />
      </div>
    </div>
  );
};

export default Mission;
