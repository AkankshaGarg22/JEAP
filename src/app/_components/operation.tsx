import React, { useRef, useState, useEffect } from "react";

const Operation = ({ isOprVisible }: { isOprVisible: boolean }) => {

  return (
     <div id="operation" className="min-h-screen flex flex-col justify-evenly items-center font-CompasseRegular">
          <h1 className="text-[#000000] text-3xl md:text-7xl py-4 my-4 text-center tracking-tighter md:tracking-normal font-[compasse-extrabold]">OPERATIONALIZING THE JEAP</h1>
          <div className="text-white  bg-gradient-to-br from-[#00205C] to-[#1A5632] text-xl w-[80%] text-center p-4">Steering Committee</div>
          <div className={"w-[90%] text-center py-6 font-CompasseRegular text-xl"}>To ensure seamless implementation of the JEAP, the Steering Committee (SteerCo) will stand as a guiding force to harmonize strategies and foster collaboration among senior leadership. Their role will include providing strategic direction to teams implementing the action plan, ensuring alignment with the plan's objectives and acting as liaisons with high-level external stakeholders.</div>
         
          {/* isOprVisible && <div className={"py-8 md:pt-2"}>
            {<img className="md:hidden block" src={"/assets/animations/LineAnimationsMobile.svg"} alt="Mobile Image" />}
            {<img className="hidden md:block" src={"/assets/animations/LineAnimation1.svg"} alt="Image Loaded on Scroll" />}
          </div>
  */}
          
        </div>
  );
};

export default Operation;
