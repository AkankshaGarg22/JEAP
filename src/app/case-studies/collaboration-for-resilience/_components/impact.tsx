"use client";
import { useState } from "react";
import AnimatedHeading from "../../_components/AnimatedHeading";
import Paragraph from "../../_components/paragraph";

const proposals = [
  {
    count: 12,
    title: "Regional Entity Proposals",
    description:
      "1 from Africa CDC, 1 from AU IBAR, 5 from Regional Economic Communities",
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
    description:
      "Lusophone African countries, Southern African countries, Eastern African countries, Central African countries and West & Central African countries",
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
    <section className="w-full bg-gradient-to-br from-[#00205C] to-[#1A5632] text-white md:py-12 py-4">
      <div className="max-w-7xl mx-auto mb-8 pb-4 flex-col md:flex-row flex gap-4 lg:gap-4 lg:justify-between px-4 border-b lg:border-0 lg:px-12">
        <div className="w-[40%] md:w-[15%]">
          <AnimatedHeading linecolor="white">
            Impact
          </AnimatedHeading>
        </div>

        <Paragraph className="lg:items-center md:w-[70%]">
          As a result of this process, regional consensus was achieved. 57
          proposals were submitted with JEAP support, with commitment received
          from 63 Ministries of Health and Ministries of Finance, 5 implementing
          entities and co-financing partners. The proposals submitted across the
          continent as of 27 May 2024 with JEAP support were:
        </Paragraph>
      </div>

      {/* Mobile List View */}
      <div className="grid grid-cols-1 gap-6 md:hidden">
        {proposals.map((item, index) => (
          <div key={index} className={`p-6 border-b`}>
            <div className="flex items-start gap-4">
              <div className="text-4xl font-bold">{item.count}</div>
              <div className="text-white">
                <img loading="lazy" className="h-10 w-10" src={item.icon} alt="icon" />
              </div>
            </div>
            <div>
              <div className="font-medium">{item.title}</div>
              {item.description && (
                <div className="text-sm mt-2">{item.description}</div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Carousel View */}
      <div className="hidden md:block">
        <div className="grid grid-cols-3 border-t border-b w-full">
          {/* Panel 1: Icon */}
          <div className=" p-6 flex justify-center items-start pt-10 border-r">
            <img loading="lazy"
              className="h-24 w-24"
              src={proposals[currentSlide].icon}
              alt="icon"
            />
          </div>

          {/* Panel 2: Content */}
          <div className="p-6 flex flex-col justify-end pb-10 border-r">
            <div className="text-7xl font-[arial-bold]">
              {proposals[currentSlide].count}
            </div>
            <div className="text-3xl font-medium">
              {proposals[currentSlide].title}
            </div>
            {proposals[currentSlide].description && (
              <Paragraph className="mt-3">
              {proposals[currentSlide].description}
              </Paragraph>
            )}
          </div>

          {/* Panel 3: Image */}
          <div className="h-96">
            <img loading="lazy"
              src={proposals[currentSlide].img}
              alt={proposals[currentSlide].title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-6 gap-3">
          {proposals.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-4 rounded-full transition-all duration-300 ${
                currentSlide === index ? "bg-white w-10" : "bg-gray-500 w-4"
              }`}
            />
          ))}
        </div>
      </div>

      <Paragraph className="max-w-6xl mx-auto hidden md:block mt-6 ">
      There were also 5 Regional and Multi-Country proposals that were
      submitted without direct JEAP support. While the results are yet to be seen, this was an important step in aligning African Member States and key stakeholders to take advantage of new financing for EPR.
      </Paragraph>
    </section>
  );
}
