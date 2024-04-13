"use client";
import React from "react";
import Typewriter from "typewriter-effect";

const Mission = () => {
  return (
    <div id="mission" className="h-[720px] md:h-[1024px] flex flex-col items-center justify-start md:justify-center bg-contain bg-no-repeat md:my-4 bg-mb-curve md:bg-lg-curve ">
      <div className="basis-2/3 md:basis-2/3 flex flex-col items-center justify-start md:justify-center gap-2 md:gap-8 text-center text-white w-4/5 md:w-3/4 pt-8 md:p-4">
        <h2 className="leading-1 md:leading-[1.5] text-2xl md:text-7xl font-bold md:font-bold">THE JEAP MISSION</h2>
        <p className="flex flex-col gap-4 text-md md:text-2xl">
          <span>Currently, over a hundred health emergencies occur annually in Africa, disrupting the growth and well-being of communities.</span>
          <span>
            With pervasively weak health systems and close to one-third of the world's refugee population residing in Africa, most African countries are one health emergency away from social and
            economic collapse.
          </span>
        </p>
      </div>
      <div className="basis-1/3 md:basis-1/3 text-center w-2/3 md:w-1/3 text-wrap text-lg md:text-3xl">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(" Of the ")
              .pauseFor(1000)
              .typeString("<strong className=`font-bold ml-1`>25 countries<strong>")
              .pauseFor(2500)
              .typeString(" most susceptible to infectious outbreaks globally, ")
              .pauseFor(2500)
              .typeString("<strong className=`font-bold ml-1`>22 are located in Africa .<strong>")
              .pauseFor(2500)
              .start();
          }}
          options={{loop :true}}
        />
      </div>
    </div>
  );
};

export default Mission;
