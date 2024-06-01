import React, { useRef, useState, useEffect } from "react";

const Operation = ({ isOprVisible }: { isOprVisible: boolean }) => {

  const [renderSvg, setRenderSvg] = useState(false)
  
  useEffect(() => {
    if (isOprVisible) {
      setRenderSvg(true)
    } else {
      setRenderSvg(false)
    }
  }, [isOprVisible])

  return (
     <div id="operation" className="min-h-screen flex flex-col justify-evenly items-center font-CompasseRegular" data-lenis-prevent>
          <h1 className="text-[#000000] text-3xl md:text-7xl xl:py-4 py-1 xl:my-4 text-center tracking-tighter md:tracking-normal font-[compasse-extrabold]">OPERATIONALIZING THE JEAP</h1>
          <div className="text-white bg-gradient-to-br from-[#00205C] to-[#1A5632] text-xl w-[80%] text-center p-4">Steering Committee</div>
          <div className={"w-[80%] text-center xl:py-6 py-2 font-CompasseRegular text-xl break-normal"}>To ensure seamless implementation of the JEAP, the Steering Committee (SteerCo) will stand as a guiding force to harmonize strategies and foster collaboration among senior leadership. Its role will include providing strategic direction to teams implementing the action plan, ensuring alignment with the plan's objectives and acting as liaisons with high&#x2011;level external stakeholders.</div>
          {renderSvg && <div className={"py-4 xl:py-4"}>
            {<object className="md:hidden block h-full w-[100%]" data={"/assets/animations/LineAnimationsMobile.svg"} type="image/svg+xml" />}
            {<object className="hidden md:block h-full w-[100%]" data={"/assets/animations/LineAnimation1.svg"} type="image/svg+xml" />}
          </div>
          }
          <div className={"w-[80%] text-center pt-2 font-CompasseRegular text-xl break-normal"}>Together, these stakeholders form a cohesive unit, each contributing uniquely to the realization of the JEAP's objectives and enhancing emergency preparedness across the board.</div>
        </div>
  );
};

export default Operation;
