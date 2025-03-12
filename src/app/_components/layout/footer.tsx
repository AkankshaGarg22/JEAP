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
    <footer className=" border-0 w-full m-0 p-0">
    <footer className=" border-0 w-full m-0 p-0">
      {/* <Maintenance></Maintenance> */}
      <div className="lg:h-[30vh] h-[50vh]  flex items-center justify-center bg-gradient-to-t to-[#00205C] from-[#1B5632] p-2">
  <div className="w-full max-w-6xl flex flex-col items-center justify-between h-full py-2">
    
    {/* Column 1: Three Images - responsive arrangement */}
    <div className="flex flex-row space-x-4 items-center justify-center">
      <img
        src="/assets/blog/social-media/JEAP-white.svg"
        alt="Image 1"
        className="w-[auto] h-14 md:w-[auto] md:h-12 object-cover rounded"
      />
      <img
        src="/assets/blog/social-media/Group-121.svg"
        alt="Image 2"
        className="w-[auto] h-10 md:w-[auto] md:h-8 object-cover rounded"
      />
      <img
        src="/assets/blog/social-media/Africa-CDC-white.svg"
        alt="Image 3"
        className="w-[auto] h-10 md:w-[auto] md:h-8 object-cover rounded"
      />
    </div>

    {/* Column 2: Five Text Links - responsive grid for mobile */}
    <div className="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-4 items-center justify-center text-center font-ArialRegular lg:p-0 pt-4">
      <span><a href="#" className="text-sm md:text-lg text-white link-hover">About the JEAP</a></span>
      <span><a href="#" className="text-sm md:text-lg text-white link-hover">Focus Areas</a></span>
      <span><a href="#" className="text-sm md:text-lg text-white link-hover">Connect With Us</a></span>
      <span><a href="#" className="text-sm md:text-lg text-white link-hover">Impact</a></span>
      <span className="col-span-2 md:col-span-1"><a href="#" className="text-sm md:text-lg text-white link-hover">Resources</a></span>
    </div>

    {/* Column 3: Horizontal Rule */}
    <div className="w-full flex justify-center px-4 lg:p-2 p-4">
      <hr className="w-full border-t border-gray-300" />
    </div>

    {/* Column 4: Copyright & Social Links - stacked on mobile, row on desktop */}
    <div className="w-full flex flex-col-reverse lg:flex-row sm:flex-col-reverse justify-between items-center px-4 space-y-2 md:space-y-0">
      <p className="text-s text-white font-ArialRegular text-center lg:p-0 p-4">© 2025 Joint Emergency Action Plan. All rights reserved.</p>
      <div className="flex flex-row space-x-3 lg:p-0 p-2">
        <img
          src="/assets/blog/social-media/instagram.svg"
          alt="Social 1"
          className="w-8 h-8"
        />
        <img
          src="/assets/blog/social-media/facebook.svg"
          alt="Social 2"
          className="w-8 h-8"
        />
        <img
          src="/assets/blog/social-media/twitter.svg"
          alt="Social 3"
          className="w-8 h-8"
        />
        <img
          src="/assets/blog/social-media/linkedin.svg"
          alt="Social 3"
          className="w-8 h-8"
        />
      </div>
    </div>
  </div>
</div>


    </div>
  </div>
</div>


    </footer>
  );
}

export default Footer;