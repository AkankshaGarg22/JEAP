"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const Mission = ({ isVisible }: { isVisible: boolean }) => {
  const [isCurved, setIsCurved] = useState(true);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
        const { top } = ref.current.getBoundingClientRect();
        const distanceFromTop = top + scrollTop;
        setIsCurved(distanceFromTop <= window.innerHeight * 0.1); // Set isCurved to false when the div is 90% away from the top
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      id="mission"
      ref={ref}
      initial={{ clipPath: "circle(100vh at 49% 100%)" }}
      animate={{ clipPath: isCurved ? "circle(100vh at 49% 100%)" : "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
      transition={{ duration: 1, type: "easeInOut" }}
      className={`min-h-screen flex flex-col items-center justify-start xl:justify-evenly bg-cover bg-center lg:bg-contain bg-no-repeat z-[200] bg-[#1a5632] text-white 
        `}
    >
      <div className="basis-2/3 md:basis-2/3 flex flex-col items-center justify-center md:justify-center xl:justify-center md:mt-4 gap-2 xl:gap-4 text-center  md:w-3/4 md:pt-4 ">
        <h2 className="leading-1 xl:leading-[1.5] text-5xl md:text-[4rem] xl:text-7xl font-[compasse-extrabold]">THE JEAP MISSION</h2>
        <div className="flex flex-col items-center gap-2 md:gap-8 xl:gap-4 text-xl xl:text-3xl">
          <p className="text-center xl:w-4/5">Currently, over a hundred health emergencies occur annually in Africa, disrupting the growth and well-being of communities.</p>
          <p className="text-center xl:w-3/4">
            With pervasively weak health systems and close to one-third of the world's refugee population residing in Africa, most African countries are one health emergency away from social and
            economic collapse.
          </p>
        </div>
      </div>
      <div className="basis-1/3 md:basis-1/3 xl:min-h-96 flex items-center text-center w-2/3 md:w-1/3 text-wrap text-lg md:text-xl xl:text-3xl font-bold  md:pt-0">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(" Of the ")
              .pauseFor(150)
              .typeString(`<strong style="font-size:2.5rem"><span style="font-family:compasse-extrabold">25</span> countries<strong>\n`)
              .pauseFor(150)
              .typeString("\n\n\n\n\nmost susceptible to infectious outbreaks globally, ")
              .pauseFor(250)
              .typeString(`<strong style="font-size:2.5rem; padding-top: 4px;"><span style="font-family:compasse-extrabold">22</span> are located in Africa .<strong>`)
              .pauseFor(150)
              .start();
          }}
          options={{ loop: false }}
        />
      </div>
    </motion.div>
  );
};

export default Mission;
