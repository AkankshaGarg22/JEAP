import React from "react";
import Typewriter from "./typwriter";

const Mission = () => {
  const backgroundImageUrl = "/assets/blog/header.png";
  return (
    <div className="min-h-screen w-full flex flex-col justify-around items-center bg-auto bg-center bg-no-repeat" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
    <div className="flex flex-col items-center justify-center text-center text-white w-3/4">
      <h2 className="leading-1 md:leading-[1.5] text-2xl md:text-6xl font-medium md:font-bold">THE JEAP MISSION</h2>
      <p className="text-lg md:text-3xl">Currently, over a hundred health emergencies occur annually in Africa, disrupting the growth and well-being of communities.</p>
      <p className="text-lg md:text-3xl">
        With pervasively weak health systems and close to one-third of the world's refugee population residing in Africa, most African countries are one health emergency away from social and
        economic collapse.
      </p>
    </div>
    <div className="text-center w-2/3 md:w-1/3 text-wrap">
      <p className="text-lg md:text-3xl">
        Of the
        <strong className="font-bold ml-1">
          <Typewriter text="25 countries" delay={500} infinite />
        </strong>
      </p>
      <p className="text-lg md:text-3xl"> most susceptible to infectious outbreaks globally,</p>
      <p className="text-lg md:text-3xl">
        <strong className="font-bold">
          <Typewriter text="22 are located in Africa" delay={500} infinite />
        </strong>
        .
      </p>
    </div>
  </div>
  );
};

export default Mission;
