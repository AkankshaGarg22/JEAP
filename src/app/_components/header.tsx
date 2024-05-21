"use client";
import Image from "next/image";
import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";




const Header = () => {
  const [dropDownOpen, setDropDownOpen] = useState(false);

  const scrollIntoView = (id: string) => {
    if (typeof document !== 'undefined') {
      document.getElementById(id)?.scrollIntoView(true);
    }
  }

  return (
    <div className="relative w-full flex justify-center">
      <div className="header-bar w-[95%] xl:w-[60%] md:w-[80%] flex flex-row items-center justify-between md:p-[10px] z-[100] rounded-[50px] mt-5 absolute">
        <div className="header-logos flex flex-row items-center justify-start pl-4 gap-1 md:gap-8 basis-1/2">
          {/* <div className="hidden md:block">
            <img className="h-[30px] lg:h-[30px] w-[30px]  lg:w-[30px]" src="/assets/blog/home.png" alt="home-logo" />
          </div> */}
          <div className="">
            <img className="h-[38px] lg:h-[40px] w-[90px] lg:w-[100px]" src="/assets/blog/JEAP-white.png" alt="home-logo" />
          </div>
        </div>
        <div className="hidden md:flex header-links  flex-row items-center gap-4 md:gap-8 md:p-3">
          
          <AnchorLink href="#mission">
            <h2 className="link-hover font-semibold">MISSION</h2>
          </AnchorLink>
          
          <AnchorLink href="#vision">
            <h2 className="font-semibold link-hover">VISION</h2>
          </AnchorLink>

          
            <h2 className="link-hover font-semibold" onClick={() => scrollIntoView('leadership')}>LEADERSHIP</h2>
          
          {/* <h2 className="font-semibold text-white">CONTACT US</h2><h2 className="font-semibold text-white">RESOURCES</h2> */}
        </div>

        <div className="md:hidden m-5 h-[30px] w-[30px] pt-1">
          <Image src={!dropDownOpen ? "/assets/blog/menu.svg" : "/assets/blog/cross-button.svg"} width={100} height={100} alt="menu" onClick={() => setDropDownOpen(!dropDownOpen)}></Image>
        </div>
        {dropDownOpen && (
          <div className="md:hidden justify-evenly absolute right-[5%] top-[96%] bg-white h-[100px] flex flex-col items-center z-[-1]">
            <AnchorLink href="#mission" className={"border-b-2 w-full border-black text-center"}>
              <h2 className="px-3 font-semibold pt-2 ">MISSION</h2>
            </AnchorLink>
            <AnchorLink href="#vision" className={"border-b-2 w-full border-black text-center"}>
              <h2 className="px-3 font-semibold pt-2 ">VISION</h2>
            </AnchorLink>
            <AnchorLink href="#leadership">
              <h2 className="px-3 font-semibold pt-2 ">LEADERSHIP</h2>
            </AnchorLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
