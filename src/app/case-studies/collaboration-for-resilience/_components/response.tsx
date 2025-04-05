"use client";
import { useState } from "react";
import SubHeading from "../../_components/sub-heading";
import Paragraph from "../../_components/paragraph";
import AnimatedHeading from "../../_components/AnimatedHeading";
const slides = [
  {
    icon: "/assets/blog/case-studies/Collaboration for Resilience/Webp/1.svg",
    text: "Issued joint statements by JEAP Partners and shared with Member States.",
    img: "/assets/blog/case-studies/Collaboration for Resilience/Webp/response-1.webp",
  },
  {
    icon: "/assets/blog/case-studies/Collaboration for Resilience/Webp/2.svg",
    text: "Designed a proposal development team, process and roles and responsibilities.",
    img: "/assets/blog/case-studies/Collaboration for Resilience/Webp/response-2.webp",
  },
  {
    icon: "/assets/blog/case-studies/Collaboration for Resilience/Webp/3.svg",
    text: "Held briefings with MoHs, WHO Reps, Africa CDC RCCs and RECs, AUC Specialized Institutions, partners & IE’s.",
    img: "/assets/blog/case-studies/Collaboration for Resilience/Webp/response-3.webp",
  },
  {
    icon: "/assets/blog/case-studies/Collaboration for Resilience/Webp/4.svg",
    text: "Defined priority themes and former groups including JEAP TWGs and Member States.",
    img: "/assets/blog/case-studies/Collaboration for Resilience/Webp/response-4.webp",
  },
  {
    icon: "/assets/blog/case-studies/Collaboration for Resilience/Webp/5.svg",
    text: "Listened to Member States and RECs communicate their EPR needs, priorities, ongoing projects, and commitments.",
    img: "/assets/blog/case-studies/Collaboration for Resilience/Webp/response-5.webp",
  },
  {
    icon: "/assets/blog/case-studies/Collaboration for Resilience/Webp/6.svg",
    text: "Harmonized country inputs and drafted proposals, iterating based on continuous consultations.",
    img: "/assets/blog/case-studies/Collaboration for Resilience/Webp/response-6.webp",
  },
  {
    icon: "/assets/blog/case-studies/Collaboration for Resilience/Webp/7.svg",
    text: "Allocate budgets based on population size, infectious disease burden, domestic health financing and IDPs.",
    img: "/assets/blog/case-studies/Collaboration for Resilience/Webp/response-7.webp",
  },
];

export default function Response() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const progressPercentages = [9, 22.5, 36, 50, 63.5, 77, 99.5];
  return (
    <section className="my-12 px-4 lg:px-0">
      <div className="hidden md:block">
        <SubHeading className="lg:text-center">RESPONSE</SubHeading>
      </div>

      <div className="block md:hidden">
        <AnimatedHeading linecolor="black">RESPONSE</AnimatedHeading>
      </div>

      {/* Mobile List View */}
      <div className="pl-4 flex flex-col space-y-4 lg:hidden">
        {slides.map((slide, index) => (
          <div key={index} className="flex items-start py-2 gap-4">
            <div className="w-20 h-20 flex-shrink-0 rounded-full flex items-center justify-center">
              <img src={slide.icon} alt="" className="w-20 h-20" />
            </div>
            <p className="text-sm">{slide.text}</p>
          </div>
        ))}
      </div>

      {/* Desktop Carousel View */}
      <div className="hidden lg:block">
        <div className="relative overflow-hidden max-w-7xl mx-auto px-4 py-8">
          <div className="flex h-96 items-end">
            {/* Set a consistent height for the container */}
            {/* Left card with text */}
            <div className="w-1/2 bg-gradient-to-b from-[#1A5632] to-[#00205C] rounded-lg p-8 text-white flex flex-col items-start justify-center h-full">
              <div className="bg-white rounded-full p-4 ms-4 mb-6">
                <img
                  src={slides[currentSlide].icon}
                  alt=""
                  className="w-10 h-10"
                />
              </div>
              <Paragraph className="ms-4 font-bold">
                {slides[currentSlide].text}
              </Paragraph>
            </div>
            {/* Right card with image (if available) */}
            <div className="w-1/2 ml-4 flex flex-col items-center">
              {/* Set full height to match left card */}
              {slides[currentSlide].img && (
                <div className="bg-red-500 rounded-lg h-[21rem] w-full mb-2 overflow-hidden">
                  <img
                    src={slides[currentSlide].img}
                    alt="Meeting"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              )}

              <div className="flex items-end justify-center space-x-2">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full bg-blue-900 text-white flex items-center justify-center"
                >
                  <span className="sr-only">Previous</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 19.5 8.25 12l7.5-7.5"
                    />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full bg-blue-900 text-white flex items-center justify-center"
                >
                  <span className="sr-only">Next</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
        </div>

        {/* Progress indicators */}
        <div className="mt-16 relative">
          {/* Icon row  */}
          <div className="flex justify-around items-center relative mx-8 mb-4">
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-14 h-14 rounded-full flex items-center justify-center`}
              >
                <img
                  src={slide.icon}
                  alt="icon"
                  className={`w-14 h-14 ${index > currentSlide ? 'opacity-50' : 'opacity-100'}`}
                />
              </button>
            ))}
          </div>

          {/* Progress line container */}
          <div className="relative h-6">
            {/* Background line */}
            <div className="absolute h-0.5 bg-gray-200 left-0 right-0 top-0 w-full"></div>

            <div
              className="absolute h-1 bg-blue-900 top-0 left-0 transition-all duration-300 after:absolute after:w-3 after:h-3 after:bg-blue-900 after:rounded-full after:top-1/2 after:right-0 after:transform after:translate-x-1/2 after:-translate-y-1/2"
              style={{ width: `${progressPercentages[currentSlide]}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
