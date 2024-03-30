
'use client';
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import React, { useState } from 'react';
import { isMobile } from "./utility/helper";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Dropdown from "./dropdown";

const Header = () => {
  const [dropDownOpen, setDropDownOpen] = useState(false);

  return (
    <div className="header relative">
      <div className="header-bar flex justify-between p-[10px] md:left-[22%] absolute z-[100] rounded-[50px] min-w-[370px] md:max-w-[900px] mt-3 md:m-10 w-full">
        <div className="header-logos flex flex-row gap-5">
          {!isMobile() && <div className="p-4">
            <Image src="/assets/blog/home.png" height={40} width={40} alt="home-logo"></Image>
          </div>}
          <div className="p-2 pt-3">
            <Image src="/assets/blog/JEAP-white.png" height={!isMobile() ? 120 : 80} width={!isMobile() ? 140 : 90} alt="home-logo"></Image>
          </div>
        </div>
        {!isMobile() && <div className="header-links flex flex-row gap-4 md:gap-8 md:p-5">
          <AnchorLink href="#leadership">
            <h2 className="font-semibold text-white">LEADERSHIP</h2>
          </AnchorLink>
          {/* <h2 className="font-semibold text-white">CONTACT US</h2>
          <h2 className="font-semibold text-white">RESOURCES</h2> */}
        </div>
        }
        {isMobile() && <div className="p-2 pr-4">
          <Image src={"/assets/blog/menu.png"} width={30} height={30} alt="menu" onClick={() => setDropDownOpen(!dropDownOpen)}></Image>
        </div>}
        {isMobile() && dropDownOpen && <div className="absolute right-[1%] top-[30%] header-bar h-[100px] rounded-[10px] flex items-center z-[-1]">
          <AnchorLink href="#leadership">
            <h2 className="font-semibold text-white">LEADERSHIP</h2>
          </AnchorLink>
      </div>}
      </div>
    </div>
  );
};

export default Header;
