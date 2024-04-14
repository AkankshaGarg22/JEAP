"use client";
import Image from "next/image";
import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Header = () => {
  const [dropDownOpen, setDropDownOpen] = useState(false);

  return (
    <div className="header relative">
      <div className="header-bar flex flex-row items-center justify-between md:p-[10px] md:left-[14%] lg:left-[22%] absolute z-[100] rounded-[50px] min-w-[370px] md:max-w-[510px] lg:max-w-[900px] mt-3 md:m-10 w-full">
        <div className="header-logos flex flex-row items-center justify-start pl-4 gap-1 md:gap-4 basis-1/2">
          <div className="hidden md:block">
            <img className="h-[30px] lg:h-[40px] w-[30px]  lg:w-[40px]" src="/assets/blog/home.png" alt="home-logo" />
          </div>
          <div className="">
            <img className="h-[36px] lg:h-[40px] w-[80px] lg:w-[100px]" src="/assets/blog/JEAP-white.png" alt="home-logo" />
          </div>
        </div>
        <div className="hidden md:flex header-links  flex-row items-center gap-4 md:gap-8 md:p-5">
          <AnchorLink href="#leadership">
            <h2 className="font-semibold text-white">LEADERSHIP</h2>
          </AnchorLink>
          <AnchorLink href="#resources">
            <h2 className="font-semibold text-white">RESOURCES</h2>
          </AnchorLink>
          {/* <h2 className="font-semibold text-white">CONTACT US</h2><h2 className="font-semibold text-white">RESOURCES</h2> */}
        </div>

        <div className="md:hidden m-5 h-[30px] w-[30px] pt-1">
          <Image src={!dropDownOpen ? "/assets/blog/menu.svg" : "/assets/blog/cross-button.svg"} width={100} height={100} alt="menu" onClick={() => setDropDownOpen(!dropDownOpen)}></Image>
        </div>
        {dropDownOpen && (
          <div className="md:hidden divide-y divide-black justify-evenly absolute right-[5%] top-[96%] bg-white h-[100px] flex flex-col items-center z-[-1]">
            <AnchorLink href="#leadership">
              <h2 className="px-3 font-semibold">LEADERSHIP</h2>
            </AnchorLink>
            <AnchorLink href="#resources">
              <h2 className="px-3 font-semibold pt-2">RESOURCES</h2>
            </AnchorLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
