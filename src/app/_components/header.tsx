
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';

const Header = () => {
  return (
    <div className="header h-[900px] min-h-[900px] relative ">
      <div className="header-bar flex justify-between p-[10px] absolute z-[100] left-[25%] top-[5%] rounded-[50px] md:min-w-[900px]">
        <div className="header-logos flex flex-row">
          <div className="p-4">
            <Image src="/assets/blog/home.png" height={40} width={40} alt="home-logo"></Image>
          </div>
          <div>
            <Image src="/assets/blog/Jeap-transparent.png" height={180} width={180} alt="home-logo"></Image>
          </div>
        </div>
        <div className="header-links flex flex-row gap-8 p-5">
        <h2 className="font-semibold text-white">LEADERSHIP</h2>
        <h2 className="font-semibold text-white">CONTACT US</h2>
        <h2 className="font-semibold text-white">RESOURCES</h2>
        </div>

      </div>

      <div>
        <Image src="/assets/blog/Header-image.jpg" width={0} height={0}  alt="header" />
      </div>

    </div>
  );
};

export default Header;
