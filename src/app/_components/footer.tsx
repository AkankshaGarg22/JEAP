'use client'
import Container from "@/app/_components/container";
import Image from "next/image";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Maintenance from "./maintenance";
import { SocialMediaLinks } from "./social-media-links";

export function Footer() {
  const scrollIntoView = (id: string) => {
    if (typeof document !== 'undefined') {
      document.getElementById(id)?.scrollIntoView(true);
    }
  }
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      {/* <Maintenance></Maintenance> */}
      <div className="footer pt-16 flex flex-col lg:flex-row items-center">
        <Container>
          <div className="flex flex-col p-4 lg:gap-20 lg:flex-row justify-center">
            <div className="footer-links text-white ">
              <p className="hover:underline p-2 cursor-pointer " onClick={() => scrollIntoView('mission')}>THE JEAP MISSION</p>
              <p className="hover:underline p-2 cursor-pointer " onClick={() => scrollIntoView('vision')}> THE JEAP VISION</p>
              <p className="hover:underline p-2 cursor-pointer " onClick={() => scrollIntoView('operation')}> OPERATIONALIZING THE JEAP</p>

            </div>
            <div className="footer-links text-white ">
              <p className="hover:underline p-2 cursor-pointer " onClick={() => scrollIntoView('jeap-journey')}>THE JEAP JOURNEY</p>
              <p className="hover:underline p-2 cursor-pointer " onClick={() => scrollIntoView('leadership')}>LEADERSHIP</p>

            </div>
          </div>
          {/* <SocialMediaLinks /> */}
        </Container>
      </div>
      <div className="bg-custom">
        <Image src="/assets/blog/Group 3031.png" priority={false} fill alt="image background"></Image>
      </div>
      <div className="bg-white">
        <div className="logo-section flex flex-row justify-evenly relative w-full">
          <div className="max-w-[300px]">
            <Image src="/assets/blog/Jeap-transparent.png" fill alt="logo" className="footer-image"></Image>
          </div>
          <div className="max-w-[300px]">
            <Image src="/assets/blog/AfricaCDCLogo.png" fill alt="logo-2" className="footer-image"></Image>
          </div>
          <div className="max-w-[300px]"> 
            <Image src="/assets/blog/WHO_Logo.png" fill alt="logo-3" className="footer-image"></Image>
          </div>
        </div>
      </div>
      <div className="bg-white md:px-8">
        <div className="border-t-2 p-4">
          <div className="flex flex-row justify-center">
            <div>All rights reserved</div>
            {/* <div className="flex flex-row gap-4 md:gap-12">
              <p>Terms</p>
              <p>Privacy Policy</p>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
