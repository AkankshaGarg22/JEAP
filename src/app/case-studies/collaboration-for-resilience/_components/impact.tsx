"use client";
import { useState } from "react";

// const impact = [
//   {
//     icon: "",
//     num: "12",
//     text: "Regional Entity Proposals 1 from Africa CDC, 1 from AU IBAR, 5 from Regional Economic Communitiest",
//     img: "",
//   },
//   { icon: "/assets/blog/case-studies/Collaboration for Resilience/Webp/6.svg", num: "40", text: "Single-country proposals", img: "" },
//   { icon: ", num: "5", text: "Multi-Country Proposals", img: "" },
// ];

const proposals = [
  {
    count: 12,
    title: "Regional Entity Proposals",
    description: "1 from Africa CDC, 1 from AU IBAR, 5 from Regional Economic Communities",
    icon: "/assets/blog/case-studies/Collaboration for Resilience/Webp/icons 1.svg",
    img: "/assets/blog/case-studies/Collaboration for Resilience/Webp/response-6.webp",
  },
  {
    count: 40,
    title: "Single-Country Proposals",
    description: "",
    icon: "/assets/blog/case-studies/Collaboration for Resilience/Webp/icons 2.svg",
    img: "/assets/blog/case-studies/Collaboration for Resilience/Webp/response-5.webp",
  },
  {
    count: 5,
    title: "Multi-Country Proposals",
    description: "Lusophone African countries, Southern African countries, Eastern African countries, Central African countries and West & Central African countries",
    icon: "/assets/blog/case-studies/Collaboration for Resilience/Webp/icons 3.svg",
    img: "/assets/blog/case-studies/Collaboration for Resilience/Webp/response-4.webp",
  },
];

export default function Impact() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === proposals.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? proposals.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="w-full bg-gradient-to-br from-[#00205C] to-[#1A5632] text-white py-12">
      <div className="max-w-7xl mx-auto mb-8 pb-4 flex flex-col lg:flex-row gap-4 lg:gap-16 lg:justify-between px-4 border-b lg:border-0 lg:px-12">
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase">IMPACT</h2>
          <div className="w-12 h-1 bg-white my-4 lg:my-2"></div>
        </div>

        <p className="text-sm md:text-base">
          As a result of this process, regional consensus was achieved. 57 proposals were submitted with JEAP support, with commitment received from 63 Ministries of Health and Ministries of Finance,
          5 implementing entities and co-financing partners. The proposals submitted across the continent as of 27 May 2024 with JEAP support were:
        </p>
      </div>

      {/* Mobile List View */}
      <div className="grid grid-cols-1 gap-6 md:hidden">
        {proposals.map((item, index) => (
          <div key={index} className={`p-6 border-b`}>
            <div className="flex items-start gap-4">
              <div className="text-white">
                <img className="h-10 w-10" src={item.icon} alt="icon" />
              </div>
              <div className="text-4xl font-bold">{item.count}</div>
            </div>
            <div>
              <div className="font-medium">{item.title}</div>
              {item.description && <div className="text-sm mt-2">{item.description}</div>}
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Carousel View */}
      <div className="hidden md:block">
        <div className="grid grid-cols-3 border-t border-b w-full">
          {/* Panel 1: Icon */}
          <div className=" p-6 flex justify-center items-start pt-10 border-r">
            <img className="h-24 w-24" src={proposals[currentSlide].icon} alt="icon" />
          </div>

          {/* Panel 2: Content */}
          <div className="p-6 flex flex-col justify-end pb-10 border-r">
            <div className="text-5xl font-bold">{proposals[currentSlide].count}</div>
            <div className="text-xl font-medium">{proposals[currentSlide].title}</div>
            {proposals[currentSlide].description && <div className="text-sm mt-3">{proposals[currentSlide].description}</div>}
          </div>

          {/* Panel 3: Image */}
          <div className="h-96">
            <img src={proposals[currentSlide].img} alt={proposals[currentSlide].title} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-6 gap-3">
          {proposals.map((_, index) => (
            <button key={index} onClick={() => goToSlide(index)} className={`h-2 rounded-full transition-all duration-300 ${currentSlide === index ? "bg-white w-6" : "bg-gray-500 w-2"}`} />
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto hidden md:block mt-6 text-lg">There were also 5 Regional and Multi-Country proposals that were submitted without direct JEAP support.</div>
    </section>
  );
}
