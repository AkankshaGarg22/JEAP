"use client";
import Image from "next/image";
import { useState } from "react";
import Carousel from "./carousel";
import Accordion from "./accordian";

interface MenuItem {
  id: number;
  title: string;
  slides: string[];
}

const Menu: MenuItem[] = [
  {
    id: 1,
    title: "Country Preparedness assessments",
    slides: ["/assets/blog/Group 3029.png", "/assets/blog/Miaron_0002-129399 (1).jpg"],
  },
  {
    id: 2,
    title: "Surveillance and Laboratory Capacity",
    slides: ["/assets/blog/Group 3029.png", "/assets/blog/Miaron_0002-129399 (1).jpg"],
  },
  {
    id: 3,
    title: "Supply Chain Management",
    slides: ["/assets/blog/Group 3029.png", "/assets/blog/Miaron_0002-129399 (1).jpg"],
  },
  {
    id: 4,
    title: "Workforce Development",
    slides: ["/assets/blog/Group 3029.png", "/assets/blog/Miaron_0002-129399 (1).jpg"],
  },
  {
    id: 5,
    title: "Response Readiness",
    slides: ["/assets/blog/Group 3029.png", "/assets/blog/Miaron_0002-129399 (1).jpg"],
  },
  {
    id: 6,
    title: "Risk Communications and Community Engagement",
    slides: ["/assets/blog/Group 3029.png", "/assets/blog/Miaron_0002-129399 (1).jpg"],
  },
];

export function Tabs() {
  const [active, setActive] = useState<number>(1);

  const handleClick = (index: number) => setActive(index);

  return (
    <div id="vision" className="min-h-screen flex flex-col items-center justify-evenly">
      <div className="text-center md:p-3">
        <h2 className="text-[#000] text-6xl font-bold my-4">THE JEAP VISION</h2>
        <p className="font-medium md:px-48 py-4">
          At the heart of the JEAP is a vision of 'One Africa for Health Security.' This vision outlines six collaboration areas and provides a comprehensive framework for coordinated action, to
          safeguard African populations from public health emergencies.
        </p>
      </div>
      {/* tab */}
      <div className="hidden md:block">
        <div className="bg-[#1A5632] flex justify-evenly grow">
          {Menu.map((item) => (
            <button key={item.id} className={active === item.id ? " text-[#FFFFFF] px-8 py-4 flex-auto font-semibold"  : "bg-[#F1F1F3] text-[#1A5632] border border-r-1 flex-auto font-semibold"} onClick={() => handleClick(item.id)}>
              {item.title}
            </button>
          ))}
        </div>
        <div className="bg-gray-400">
          {Menu.map((item) => (
            <div key={item.id} className={active === item.id ? "block" : "hidden"}>
              <Carousel>
                {item.slides.map((img, i) => (
                  <img key={i} className="min-w-full object-cover" src={img} alt="Picture" />
                ))}
              </Carousel>
            </div>
          ))}
        </div>
      </div>
      {/* accordian */}
      <div className="md:hidden">
        {Menu.map((item) => (
          <Accordion key={item.id} title={item.title}>
            <Carousel>
              {item.slides.map((img, i) => (
                <img key={i} className="min-w-full object-cover h-full" src={img} alt="Picture" />
              ))}
            </Carousel>
          </Accordion>
        ))}
      </div>
    </div>
  );
}
