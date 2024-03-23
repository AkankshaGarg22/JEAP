import Container from "@/app/_components/container";
import Image from "next/image";
import Maintenance from "./maintenance";
import { SocialMediaLinks } from "./social-media-links";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Maintenance></Maintenance>
      <div className="footer pt-16 flex flex-col lg:flex-row items-center">
        <Container>
          <div className="flex flex-col p-4 lg:gap-20 lg:flex-row">
            <div className="footer-links text-white ">
              <p className="p-2">THE JEAP MISSION</p>
              <p className="p-2">THE JEAP VISION</p>
              <p className="p-2">OPERATIONALIZING THE JEAP</p>
            </div>
            <div className="footer-links text-white ">
              <p className="p-2">THE JEAP JOURNEY</p>
              <p className="p-2">LEADERSHIP</p>
            </div>
          </div>
          <SocialMediaLinks />
        </Container>
      </div>
      <div className="bg-custom">
        <Image src="/assets/blog/Group 3031.png" layout="fill" alt="image background"></Image>
      </div>
      <div className="bg-white">
        <div className="logo-section flex flex-row justify-evenly relative w-full">
          <div>
            <Image src="/assets/blog/Jeap-transparent.png" layout="fill" alt="logo" className="footer-image"></Image>
          </div>
          <div>
            <Image src="/assets/blog/AfricaCDCLogo.png" layout="fill" alt="logo-2" className="footer-image"></Image>

          </div>
          <div>
            <Image src="/assets/blog/WHO_Logo.png" layout="fill" alt="logo-3" className="footer-image"></Image>
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
