
'use client';
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import React from 'react';

const Header = () => {
  return (
    <div className="header relative">
      <div className="header-bar flex justify-between p-[10px] absolute z-[100] md:left-[22%] top-[15%] rounded-[50px] md:min-w-[900px] m-10">
        <div className="header-logos flex flex-row gap-5">
          <div className="p-4">
            <Image src="/assets/blog/home.png" height={40} width={40} alt="home-logo"></Image>
          </div>
         <div className="p-2 pt-3">
         <Image src="/assets/blog/JEAP-white.png" height={120} width={120} alt="home-logo"></Image>
         </div>    
        </div>
        <div className="header-links flex flex-row gap-4 md:gap-8 md:p-5">
          <h2 className="font-semibold text-white">LEADERSHIP</h2>
          <h2 className="font-semibold text-white">CONTACT US</h2>
          <h2 className="font-semibold text-white">RESOURCES</h2>
        </div>

      </div>
    </div>
  );
};

export default Header;
