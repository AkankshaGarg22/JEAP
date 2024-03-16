"use client";
import Image from "next/image";
import { useState } from "react";
const Menu = [
  {
    id: 1,
    title: "Country Preparedness assessments",
    slides: [],
    img: "/assets/blog/20230303 - NOOR IMAGES - Ted Chaiban Visit to DR Congo - Goma - DRC -02655.jpg",
  },
  {
    id: 2,
    title: "Surveillance and Laboratory Capacity",
    slides: [],
    img: "/assets/blog/17112276310_73aed469b0_b.jpg",
  },
  {
    id: 3,
    title: "Supply Chain Management",
    slides: [],
    img: "/assets/blog/17112276310_73aed469b0_b.jpg",
  },
  {
    id: 4,
    title: "Workforce Development",
    slides: [],
    img: "/assets/blog/17112276310_73aed469b0_b.jpg",
  },
  {
    id: 5,
    title: "Response Readiness",
    slides: [],
    img: "/assets/blog/17112276310_73aed469b0_b.jpg",
  },
  {
    id: 6,
    title: "Risk Communications and Community Engagement",
    slides: [],
    img: "",
  },
];

export function Tabs() {
  const [active, setActive] = useState<number>(1);

  const handleClick = (index: number) => setActive(index);

  return (
    <div className="h-screen">
      <div className="text-center p-3">
        <h2 className="text-[#00205C] text-6xl font-bold my-4" >THE JEAP VISION</h2>
        <p className="font-medium px-48 py-4">
          At the heart of the JEAP is a vision of 'One Africa for Health
          Security.' This vision outlines six collaboration areas and provides a
          comprehensive framework for coordinated action, to safeguard African
          populations from public health emergencies.
        </p>
      </div>
      {/* tab list */}
      <div className=" bg-[#00205C] flex pb-2">
        {Menu.map((item) => (
          <button
            key={item.id}
            className={
              active === item.id
                ? " text-[#FFFFFF] p-2"
                : "bg-[#F1F1F3] text-[#00205C] border border-r-1"
            }
            onClick={() => handleClick(item.id)}
          >
            {item.title}
          </button>
        ))}
      </div>
      {/* tab button */}
      <div className="bg-gray-400 w-full">
        {Menu.map((item) => (
          <div
            key={item.id}
            className={active === item.id ? "block" : "hidden"}
          >
            <Image
              className="h-[600px] w-full"
              src={item.img}
              alt="Picture"
              width={1200}
              height={360}
              style={{ objectFit: "cover", width: "100%" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
