import React from "react";

const Mission = () => {
  const backgroundImageUrl = "/assets/blog/header.png";
  return (
    <div id="mission" className="min-h-screen flex flex-col justify-center items-center bg-auto bg-no-repeat bg-center" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
      <div className="flex flex-1 flex-col items-center justify-center text-center text-white" >
        <h2 className="leading-1 md:leading-[1.5] text-2xl md:text-6xl font-medium md:font-bold">THE JEAP MISSION</h2>
        <p className="text-lg md:text-3xl">Currently, over a hundred health emergencies occur annually in Africa, disrupting the growth and well-being of communities.</p>
        <p className="text-lg md:text-3xl">
          With pervasively weak health systems and close to one-third of the world's refugee population residing in Africa, most African countries are one health emergency away from social and
          economic collapse.
        </p>
      </div>
      <div className="text-center w-2/3 md:w-1/3 text-wrap">
        <p className="text-lg md:text-3xl">
          Of the <strong className="font-bold">25 countries</strong> most susceptible to infectious outbreaks globally,
          <strong className="font-bold">22 are located in Africa</strong>.
        </p>
      </div>
    </div>
  );
};

export default Mission;
