
'use client';
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import React, { useState } from 'react';
import { isMobile } from "./utility/helper";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Header = () => {
  const [dropDownOpen, setDropDownOpen] = useState(false);

  return (
    <div className="header relative">
      <div className="header-bar flex justify-between md:p-[10px] md:left-[22%] absolute z-[100] rounded-[50px] min-w-[370px] md:max-w-[900px] mt-3 md:m-10 w-full">
        <div className="header-logos flex flex-row gap-5">
          {!isMobile() && <div className="p-4">
            <Image src="/assets/blog/home.png" height={40} width={40} alt="home-logo"></Image>
          </div>}
          <div className="p-2 pt-3 ml-2 mb-2">
            <Image src="/assets/blog/JEAP-white.png" height={!isMobile() ? 120 : 80} width={!isMobile() ? 140 : 90} alt="home-logo"></Image>
          </div>
        </div>
        {!isMobile() && <div className="header-links flex flex-row gap-4 md:gap-8 md:p-5">
          <AnchorLink href="#leadership">
            <h2 className="font-semibold text-white">LEADERSHIP</h2>
          </AnchorLink>
          <AnchorLink href="#resources">
            <h2 className="font-semibold text-white">RESOURCES</h2>
          </AnchorLink>
          {/* <h2 className="font-semibold text-white">CONTACT US</h2>
          <h2 className="font-semibold text-white">RESOURCES</h2> */}
        </div>
        }
        {isMobile() && <div className="m-5">
          <Image src={!dropDownOpen ? "/assets/blog/menu.svg": "/assets/blog/cross-button.svg"} width={30} height={30} alt="menu" onClick={() => setDropDownOpen(!dropDownOpen)}></Image>
        </div>}
        {isMobile() && dropDownOpen && <div className="divide-y divide-black justify-evenly absolute right-[5%] top-[96%] bg-white h-[100px] flex flex-col items-center z-[-1]">
          <AnchorLink href="#leadership">
            <h2 className="px-3 font-semibold">LEADERSHIP</h2>
          </AnchorLink>
          <AnchorLink href="#resources">
            <h2 className="px-3 font-semibold pt-2">RESOURCES</h2>
          </AnchorLink>
      </div>}
      </div>
    </div>
  );
};

export default Header;
