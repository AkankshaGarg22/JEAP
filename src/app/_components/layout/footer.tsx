'use client'
import Container from "@/app/_components/layout/container";
import Image from "next/image";

export function Footer() {
  const scrollIntoView = (id: string) => {
    if (typeof document !== 'undefined') {
      document.getElementById(id)?.scrollIntoView(true);
    }
  }
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      {/* <Maintenance></Maintenance> */}
      <div className="h-[30vh] sm:h-100 flex items-center justify-center bg-gradient-to-t to-[#00205C] from-[#1B5632] p-2">
  <div className="w-full max-w-6xl flex flex-col items-center justify-between h-full py-2">
    {/* Column 1: Three Images - responsive arrangement */}
    <div className="flex flex-row space-x-4 items-center justify-center">
      <img
        src="/path/to/image1.jpg"
        alt="Image 1"
        className="w-6 h-12 md:w-8 md:h-16 object-cover rounded"
      />
      <img
        src="/path/to/image2.jpg"
        alt="Image 2"
        className="w-6 h-12 md:w-8 md:h-16 object-cover rounded"
      />
      <img
        src="/path/to/image3.jpg"
        alt="Image 3"
        className="w-6 h-12 md:w-8 md:h-16 object-cover rounded"
      />
    </div>

    {/* Column 2: Five Text Links - responsive grid for mobile */}
    <div className="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-4 items-center justify-center text-center font-ArialRegular">
      <span><a href="#" className="text-sm md:text-lg text-white link-hover">About the JEAP</a></span>
      <span><a href="#" className="text-sm md:text-lg text-white link-hover">Focus Areas</a></span>
      <span><a href="#" className="text-sm md:text-lg text-white link-hover">Connect With Us</a></span>
      <span><a href="#" className="text-sm md:text-lg text-white link-hover">Impact</a></span>
      <span className="col-span-2 md:col-span-1"><a href="#" className="text-sm md:text-lg text-white link-hover">Resources</a></span>
    </div>

    {/* Column 3: Horizontal Rule */}
    <div className="w-full flex justify-center px-4">
      <hr className="w-full border-t border-gray-300" />
    </div>

    {/* Column 4: Copyright & Social Links - stacked on mobile, row on desktop */}
    <div className="w-full flex flex-col lg:flex-row sm:flex-col-reverse justify-between items-center px-4 space-y-2 md:space-y-0">
      <p className="text-s text-white font-ArialRegular">© 2025 Joint Emergency Action Plan. All rights reserved.</p>
      <div className="flex flex-row space-x-3">
        <img
          src="/path/to/social1.png"
          alt="Social 1"
          className="w-4 h-4"
        />
        <img
          src="/path/to/social2.png"
          alt="Social 2"
          className="w-4 h-4"
        />
        <img
          src="/path/to/social3.png"
          alt="Social 3"
          className="w-4 h-4"
        />
        <img
          src="/path/to/social3.png"
          alt="Social 3"
          className="w-4 h-4"
        />
      </div>
    </div>
  </div>
</div>


    </footer>
  );
}

export default Footer;
