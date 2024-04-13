'use client';

import React, {useRef, useState, useEffect} from "react";
import useOnScreen from "./hooks/useOnScreen";

const Operation = () => {

  const ref = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);
  const isVisible = useOnScreen(ref);

  useEffect(() => {
    if (isVisible && !imageSrc) {
      setImageSrc("/assets/animations/LineAnimation1.svg");
    }
  }, [isVisible, imageSrc]);


  return (
    <div id="operation" className="min-h-screen flex flex-col justify-evenly items-center">
      <h1 className="text-4xl text-center text-[#1D2859] md:font-bold tracking-tighter md:tracking-normal">OPERATIONALIZING THE JEAP</h1>
      <div className="text-white w-[80%] bg-gradient-to-br from-[#00205C] to-[#1A5632] text-xl text-center p-4">Steering Committee</div>
      <div className={"w-[85%] text-center font-CompasseRegular"}>To ensure seamless implementation of the JEAP, the Steering Committee (SteerCo) will stand as a guiding force to harmonize strategies and foster collaboration among senior leadership. Their role will include providing strategic direction to teams implementing the action plan, ensuring alignment with the plan's objectives and acting as liaisons with high-level external stakeholders.</div>
    

    <div ref={ref} className={"h-screen py-8"}> {/* Placeholder */}
      {imageSrc && <img src={imageSrc} alt="Image Loaded on Scroll" />}
    </div>


    </div>
  );
};

export default Operation;
