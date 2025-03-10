"use client";

import React, { Suspense, useEffect, useRef } from "react";
import ErrorBoundary from "../_components/ErrorBoundary";
import Loading from "../_components/layout/loading";
import Footer from "../_components/layout/footer";
import AOS from "aos";
import "aos/dist/aos.css";
import ImpactLanding from "./_components/ImpactLanding";
import "./impact.min.css";
import Sspace from "./_components/Sspace";
import Curve from "./_components/curve";



const AlternateContent: React.FC<AlternateContentProps> = ({
  imageSrc,
  text,
  isReversed = false,
}) => {
  return (
    <div
      className={`flex flex-col md:flex-row m-0 p-0 ${
        isReversed ? "md:flex-row-reverse" : ""
      } items-center justify-center space-y-4 md:space-y-0 md:space-x-8 gap-x-4 pb-16 pt-16`}
    >
      {/* Translucent white image container with fixed dimensions */}
      <div className="lg:w-[400px] lg:h-[400px] md:w-[80%] md:h-[60%] bg-white/10 flex items-center justify-center shadow-md backdrop-blur-lg" data-aos="fade-up">
        <img
          src={imageSrc}
          alt={text}
          className="w-[200px] h-auto object-contain custom-shadow"
        />
      </div>

      {/* Text container with white text and a yellow pseudo-element */}
      <div className="p-4 relative lg:w-[40%] sm:w-[80%] flex items-center justify-center">
        <p
          className="custom-text">
          {text}
        </p>
      </div>
    </div>
  );
};


export default function Impact() {
  // Reference for scroll animations if needed
  const contentRef = useRef<HTMLDivElement>(null);

  // Initialize AOS animation library
  useEffect(() => {
    AOS.init();
  }, []);

  // Array of content data for the five sets
  const contentData = [
    { image: "/assets/blog/impactimages/img1.png", text: "Building Africa’s Defenses: Advancing Genomic Sequencing to Ensure Public Health Security" },
    { image: "/assets/blog/impactimages/img2.png", text: "Gender Equality in Emergency Preparedness and Response: A Focus on the AVoHC-SURGE Initiative" },
    { image: "/assets/blog/impactimages/img3.png", text: "Enhancing Operations Support and Logistics for Improved Emergency Preparedness and Response in Africa" },
    { image: "/assets/blog/impactimages/img4.png", text: "Addressing the health impacts of flooding in the Republic of Congo" },
    { image: "/assets/blog/impactimages/img5.png", text: "Collaboration for Resilience: The JEAP Partnership’s ‘Common Africa Approach’ to the Pandemic Fund" },
  ];

  return (
    <main className="relative m-0 p-0 bg-white ">
      

      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <ImpactLanding />
         <Sspace/>
         
          <div className="relative bg-gradient-to-b from-[#1B5632] to-[#00205C] m-0 pt-[10%] lg:[clip-path:circle(80%_at_50%_65%)] md:[clip-path:circle(80%_at_50%_65%)] sm:[clip-path:circle(80%_at_50%_65%)] " ref={contentRef}>
            <div className="bg-transparent"></div>
          <h1 className="text-white text-[3.8rem] font-bold font-ArialRegular p-4 top-[1063px] text-center">Case Studies</h1>
            {contentData.map((item, index) => (
              <AlternateContent
                key={index}
                imageSrc={item.image}
                text={item.text}
                // Reverse order on even-indexed sets (i.e., second, fourth, etc.)
                isReversed={index % 2 === 1}
              />
            ))}
          </div>

          {/* Footer component with full width */}
          <Footer />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}
