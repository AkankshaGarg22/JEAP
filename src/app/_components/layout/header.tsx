"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Header = () => {
  const [dropDownOpen, setDropDownOpen] = useState(false);

  const scrollIntoView = (id: string) => {
    if (typeof document !== "undefined") {
      document.getElementById(id)?.scrollIntoView(true);
    }
  };

  const goToHomePage = () => {
    window.location.href = '/'
  }

  return (
    <div className="relative w-full flex justify-center">
      <div className="header-bar w-[95%] md:w-[90%] xl:w-[60%] flex flex-row items-center justify-between md:p-[12px] z-[90] rounded-[50px] mt-5 absolute">
        <div className="header-logos flex flex-row items-center justify-start pl-4 gap-1 md:gap-4 xl:gap-8 basis-1/2 md:basis-1/4 xl:basis-1/6">
          {/* <div className="hidden md:block">
            <img className="h-[30px] lg:h-[30px] w-[30px]  lg:w-[30px]" src="/assets/blog/home.png" alt="home-logo" />
          </div> */}
          {/* <Link href="/">
            <img className="h-[38px] lg:h-[55px] w-[90px] md:w-[80px] lg:w-[145px]" src="/assets/blog/JEAP-white.png" alt="home-logo" />
          </Link> */}
          <div className="">
            <img className="h-[38px] lg:h-[55px] w-[90px] lg:w-[145px] cursor-pointer" src="/assets/blog/JEAP-white.png" alt="home-logo" onClick={() => {goToHomePage()}} />
          </div>
        </div>
        <div className="hidden md:flex header-links flex-row items-center gap-4 md:gap-1 md:py-3">
          {/* <Link href="/about">
            <h2 className="link-hover md:text-[12px] xl:text-[14px] font-semibold">ABOUT THE JEAP</h2>
          </Link>

          <Link href="/focus">
            <h2 className="link-hover font-semibold md:text-[12px] xl:text-[14px] ">FOCUS AREAS</h2>
          </Link>

          <Link href="#">
            <h2 className="link-hover font-semibold md:text-[12px] xl:text-[14px] ">CONNECT WITH US</h2>
          </Link>

          <Link href="#">
            <h2 className="link-hover md:text-[12px] xl:text-[14px] font-semibold">IMPACT</h2>
          </Link>

          <Link href="#">
            <h2 className="link-hover md:text-[12px] xl:text-[14px] font-semibold">RESOURCES</h2>
          </Link> */}
          <AnchorLink href="#mission">
            <h2 className="link-hover font-semibold">MISSION</h2>
          </AnchorLink>

          <AnchorLink href="#vision">
            <h2 className="font-semibold link-hover">VISION</h2>
          </AnchorLink>
          <AnchorLink href="#gradedemergencies">
            <h2 className="font-semibold link-hover">EMERGENCIES</h2>
          </AnchorLink>
          <h2 className="link-hover font-semibold" onClick={() => scrollIntoView('leadership')}>LEADERSHIP</h2>

        </div>

        <div className="md:hidden m-5 h-[30px] w-[30px] pt-1">
          <Image src={!dropDownOpen ? "/assets/blog/menu.svg" : "/assets/blog/cross-button.svg"} width={100} height={100} alt="menu" onClick={() => setDropDownOpen(!dropDownOpen)}></Image>
        </div>
        {dropDownOpen && (
          <div className="md:hidden justify-evenly absolute right-[5%] top-[96%] bg-white h-auto flex flex-col items-center z-[-1]">
            <AnchorLink href="#mission" className={"border-b-2 w-full border-black text-center"}>
              <h2 className="px-3 font-semibold pt-2 ">MISSION</h2>
            </AnchorLink>
            <AnchorLink href="#vision" className={"border-b-2 w-full border-black text-center"}>
              <h2 className="px-3 font-semibold pt-2 ">VISION</h2>
            </AnchorLink>
            <AnchorLink href="#gradedemergencies" className={"border-b-2 w-full border-black text-center"}>
              <h2 className="px-3 font-semibold pt-2 ">EMERGENCIES</h2>
            </AnchorLink>
            <AnchorLink href="#leadership" className={"border-b-2 w-full border-black text-center"}>
              <h2 className="px-3 font-semibold pt-2">LEADERSHIP</h2>
            </AnchorLink>

            {/* <Link className={"border-b-2 w-full border-black text-center"} href="/about">
              <h2 className="px-3 font-semibold pt-2">ABOUT THE JEAP</h2>
            </Link>

            <Link className={"border-b-2 w-full border-black text-center"} href="#">
              <h2 className="px-3 font-semibold pt-2">FOCUS AREAS</h2>
            </Link>

            <Link className={"border-b-2 w-full border-black text-center"} href="#">
              <h2 className="px-3 font-semibold pt-2">CONNECT WITH US</h2>
            </Link>

            <Link className={"border-b-2 w-full border-black text-center"} href="#">
              <h2 className="px-3 font-semibold pt-2">IMPACT</h2>
            </Link>

            <Link className={"border-b-2 w-full border-black text-center"} href="#">
              <h2 className="px-3 font-semibold pt-2">RESOURCES</h2>
            </Link> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
