
'use client';
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import React from 'react';
import { isMobile } from "./utility/helper";

const Header = () => {
  return (
    <div className="header relative">
      <div className="header-bar flex justify-between p-[10px] md:left-[22%] absolute z-[100] rounded-[50px] min-w-[370px] md:max-w-[900px] mt-2 md:m-10 w-full">
        <div className="header-logos flex flex-row gap-5">
          {!isMobile() && <div className="p-4">
            <Image src="/assets/blog/home.png" height={40} width={40} alt="home-logo"></Image>
          </div>}
         <div className="p-2 pt-3">
         <Image src="/assets/blog/JEAP-white.png" height={!isMobile() ? 120 : 80} width={!isMobile() ? 140 : 90} alt="home-logo"></Image>
         </div>    
        </div>
       {!isMobile() && <div className="header-links flex flex-row gap-4 md:gap-8 md:p-5">
          <h2 className="font-semibold text-white">LEADERSHIP</h2>
          <h2 className="font-semibold text-white">CONTACT US</h2>
          <h2 className="font-semibold text-white">RESOURCES</h2>
        </div>
}
      </div>
    </div>
  );
};

export default Header;
