"use client";
import Image from "next/image";
import { useRef, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./impact.min.css";

// Define props for the alternate content component
interface AlternateContentProps {
  imageSrc: string;
  text: string;
  isReversed?: boolean;
  link: string;
}

const AlternateContent: React.FC<AlternateContentProps> = ({
  imageSrc,
  text,
  isReversed = false,
  link
}) => {

  const goToReport = (link: string) => {
    window.location.href = link
  }

  return (
    <div
      className={`flex flex-col md:flex-row m-0 p-0 ${
        !isReversed ? "md:flex-row-reverse" : ""
      } items-center justify-center space-y-4 md:space-y-0 md:space-x-8 gap-x-4 pb-16`}
    >
      {/* Translucent white image container with fixed dimensions */}
      <div
        className="lg:w-[400px] lg:h-[360px] md:w-[80%] md:h-[60%] bg-white/10 flex items-center justify-center shadow-md backdrop-blur-lg"
        data-aos="fade-up"
      >
        <img
          src={imageSrc}
          alt={text}
          className="w-[300px] h-[260px] cursor-pointer"
          onClick={() => goToReport(link)}
        />
      </div>

      {/* Text container with white text and a yellow pseudo-element */}
      <div className="p-4 relative lg:w-[40%] sm:w-[80%] flex items-center justify-center cursor-pointer">
        <p onClick={() => goToReport(link)} className="custom-text">{text}</p>
      </div>
    </div>
  );
};

export default function CaseStudies() {
  // Reference for scroll animations if needed
  const contentRef = useRef<HTMLDivElement>(null);

  // Initialize AOS animation library
  useEffect(() => {
    AOS.init();
  }, []);

  // Array of content data for the five sets
  const contentData = [
    {
      image: "/assets/blog/impact/Angola_COVAX_07-91103.jpg",
      text: "Gender Equality in Emergency Preparedness and Response: A Focus on the AVoHC-SURGE Initiative",
      link: '/case-studies/gender-equality'
    },
    {
      image: "/assets/blog/impact/COVID-19 - Congo 2020_fd7371a717e1e5c4078ca8c2a8ffa7ff (1) (2).jpg",
      text: "Enhancing Operations Support and Logistics for Improved Emergency Preparedness and Response in Africa",
      link: '/case-studies/enhancing-operations-support-and-logistics'
    },
    {
      image: "/assets/blog/impact/WHO01455.jpg",
      text: "Addressing the health impacts of flooding in the Republic of Congo",
      link: '/case-studies/health-impacts-of-flooding'
    },
    {
      image: "/assets/blog/impact/WHO_25.05.23_72dpi©CecileRolland-106.jpg",
      text: "Collaboration for Resilience: The JEAP Partnership’s ‘Common Africa Approach’ to the Pandemic Fund",
      link: '/case-studies/collaboration-for-resilience'
    },
  ];
  return (
    <div className="xl:min-h-screen bg-gradient-to-b xl:from-[#042658] md:from-[#032559] from-[#0B364B] xl:to-[#01205d] md:to-[#01205d] to-[#01205d] text-white mt-[-5px] md:p-2">
      {contentData.map((item, index) => (
        <AlternateContent
          key={index}
          imageSrc={item.image}
          text={item.text}
          link={item.link}
          // Reverse order on even-indexed sets (i.e., second, fourth, etc.)
          isReversed={index % 2 === 1}
        />
      ))}
    </div>
  );
}
