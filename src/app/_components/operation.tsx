import React, { useRef, useState, useEffect } from "react";
import Device from "./device/device";
import Image from "next/image";

const Operation = () => {
  const ref = useRef(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [mobileImageSrc, setMobileImageSrc] = useState<string | null>(null);
  

  function isMobile() {

    const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return mobileRegex.test(navigator.userAgent);
  }

  useEffect(() => {
    if (isMobile()) {
      setMobileImageSrc("/assets/animations/LineAnimationsMobile.svg");
    } else {
      setImageSrc("/assets/animations/LineAnimation1.svg");
    }
  }, [imageSrc, mobileImageSrc]);

  return (
    <Device>
      {({isMobile}) => {
        return <div ref={ref} id="operation" className="min-h-screen flex flex-col justify-evenly items-center py-[50px] md:py-[150px] font-CompasseRegular">
          <h1 className="text-[#000000] text-3xl md:text-7xl py-4 my-4 text-center tracking-tighter md:tracking-normal font-[compasse-extrabold]">OPERATIONALIZING THE JEAP</h1>
          <div className="text-white  bg-gradient-to-br from-[#00205C] to-[#1A5632] text-xl w-[80%] text-center p-4">Steering Committee</div>
          <div className={"w-[90%] text-center py-6 font-CompasseRegular text-xl"}>To ensure seamless implementation of the JEAP, the Steering Committee (SteerCo) will stand as a guiding force to harmonize strategies and foster collaboration among senior leadership. Their role will include providing strategic direction to teams implementing the action plan, ensuring alignment with the plan's objectives and acting as liaisons with high-level external stakeholders.</div>
          <div className={"py-8 md:pt-2"}>
            {isMobile && <img src={"/assets/animations/LineAnimationsMobile.svg"} alt="Mobile Image"/>}
            {!isMobile && <img src={"/assets/animations/LineAnimation1.svg"} alt="Image Loaded on Scroll"/>}
          </div>
          
        </div>
      }}
    </Device>
  );
};

export default Operation;
