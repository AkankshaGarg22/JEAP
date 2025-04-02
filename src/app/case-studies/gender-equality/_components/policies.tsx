"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Paragraph from "../../_components/paragraph";
import AnimatedHeading from "../../_components/AnimatedHeading";

const slides = [
  {
    id: 1,
    imageUrl: "/assets/blog/case-studies//Gender_equality/Webp_format/s1.webp",
    description:
      "Creating an inclusive work environment by encouraging women to apply for positions, offering mentorship and leadership training, ensuring flexible work arrangements, and encouraging that at least 30% of personnel are women.",
    altText: "Professional woman speaking at a podium at an Africa CDC event",
  },
  {
    id: 2,
    imageUrl: "/assets/blog/case-studies//Gender_equality/Webp_format/s2.webp",
    description:
      "Implementing zero-tolerance policies against gender-based violence and harassment with clear reporting mechanisms and support systems for all team members.",
    altText: "Team members at a training session on workplace policies",
  },
  {
    id: 3,
    imageUrl: "/assets/blog/case-studies//Gender_equality/Webp_format/s3.webp",
    description:
      "Ensuring promotion criteria are transparent and merit-based, with targeted professional development opportunities to support career advancement for all genders.",
    altText: "Diverse healthcare professionals collaborating on a project",
  },
  {
    id: 4,
    imageUrl: "/assets/blog/case-studies//Gender_equality/Webp_format/s4.webp",
    description:
      "Supporting both men and women with family responsibilities through flexible scheduling, remote work options, and parental leave policies that encourage shared caregiving.",
    altText:
      "Healthcare worker balancing professional and family responsibilities",
  },
];
export default function Policies() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const autoPlayInterval = 5000;

  // Handle automatic slide transition
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlayInterval, slides.length]);

  // Navigation functions
  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="bg-gradient-to-br from-[#00205C] to-[#1A5632] text-white py-8 mb-12 md:mb-24">
      <div className="max-w-7xl mx-auto mb-8 pb-4 flex flex-col gap-4 lg:gap-4 lg:justify-between lg:items-center border-b lg:border-0 px-4 lg:px-0">
        <div>
          <AnimatedHeading linecolor="white" width="20%">
            AVOHC-SURGE GENDER-SENSITIVE WORKFORCE POLICIES AND PROCESSES HAVE
            FOSTERED EQUALITY AND EXCELLENCE AT ALL LEVELS OF THE WORKFORCE
          </AnimatedHeading>
        </div>
        <Paragraph>
          AVoHC-SURGE has established a set of mechanisms to strive for gender
          equality and protection in the workforce, from JEAP senior management
          to the first responders on the ground. These include:
        </Paragraph>
      </div>
      {/* Carousel */}
      <div className="max-w-7xl mx-auto  relative w-full overflow-hidden ">
        <div
          className="relative flex transition-transform duration-500 ease-in-out h-[500px] pt-12 md:pt-0"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="min-w-full relative px-2 mt-8 md:px-8"
            >
              {/* Full width image as background */}
              <div className="w-3/4 md:w-1/2 h-[80%] md:h-full relative">
                <img
                  src={slide.imageUrl}
                  alt={slide.altText}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Description box overlaid on right side */}
              <div className="absolute top-[70%] md:top-[30%] transform left-[20%] md:left-[40%] bg-white p-3 md:p-12 w-[75%] md:max-w-[50%] mr-12">
                <Paragraph className="text-black">
                  {slide.description}
                </Paragraph>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation buttons - with dark blue color on white circular background */}
        <button
          onClick={goToPrevSlide}
          className="absolute z-10 left-[75%] md:left-2 top-6 md:top-[38%] -translate-y-1/2 bg-[#00215B] border border-white text-white rounded-full p-2 "
          aria-label="Previous slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
            />
          </svg>
        </button>
        <button
          onClick={goToNextSlide}
          className="absolute right-24 top-6 md:top-[38%] -translate-y-1/2 bg-[#00215B] border border-white  text-white  rounded-full p-2 "
          aria-label="Next slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </button>

        {/* Indicators at the bottom */}
        <div className="flex gap-2 mt-12 md:mt-6 w-full justify-center">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full ${
                currentSlide === index ? "bg-white" : "bg-white/40"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <Paragraph className="mt-6 md:my-12">
          These gender-responsive trainings and targets established by
          AVoHC-SURGE have given many women opportunities to utilize their
          technical expertise and leadership capacities within the initiative.
          By creating a supportive and inclusive work environment, JEAP’s
          efforts to prioritize gender equality will contribute to better
          meeting the needs of vulnerable populations during emergency
          responses, as well as promoting long-term gender equality on the
          continent.
        </Paragraph>
      </div>
    </div>
  );
}
