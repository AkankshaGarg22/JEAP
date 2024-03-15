import Container from "@/app/_components/container";
import Image from "next/image";
import Maintenance from "./maintenance";
import { SocialMediaLinks } from "./social-media-links";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Maintenance></Maintenance>
      <div className="footer py-16 flex flex-col lg:flex-row items-center">
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
          <SocialMediaLinks/>
        </Container>
      </div>
      <div className="bg-white">
      <div className="logo-section flex flex-row justify-evenly">
            <Image src="/assets/blog/Jeap-transparent.png" width={300} height={100}></Image>
            <Image src="/assets/blog/AfricaCDCLogo.png" width={300} height={100}></Image>
            <Image src="/assets/blog/WHO_Logo.png" width={300} height={100}></Image>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;
