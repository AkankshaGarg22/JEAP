"use client";

import React, { Suspense, useEffect, useRef } from "react";
import ErrorBoundary from "../_components/ErrorBoundary";
import Loading from "../_components/layout/loading";
import Footer from "../_components/layout/footer";
import AOS from "aos";
import "aos/dist/aos.css";

// Define props for the alternate content component
interface AlternateContentProps {
  imageSrc: string;
  text: string;
  isReversed?: boolean;
}

// AlternateContent component: displays an image and text with alternating order.
// The image element uses AOS for a fade-up effect.
const AlternateContent: React.FC<AlternateContentProps> = ({
  imageSrc,
  text,
  isReversed = false,
}) => {
  return (
    <div
      className={`transparent flex flex-col md:flex-row ${
        isReversed ? "md:flex-row-reverse" : ""
      } items-center justify-center space-y-4 md:space-y-0 md:space-x-8 gap-x-4 my-8`}
    >
      {/* White image container with fixed dimensions */}
      <div className="w-[300px] h-[400px] bg-white flex items-center justify-center shadow-md">
        <img
          src={imageSrc}
          alt={text}
          className="w-full h-full object-contain"
          data-aos="fade-up" // AOS animation applied on the image
        />
      </div>

      {/* Text container: Arial font at 50px */}
      <div className="p-4">
        <p style={{ fontFamily: "Arial" }} className="text-[50px]">
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
    { image: "/images/image1.jpg", text: "Text 1" },
    { image: "/images/image2.jpg", text: "Text 2" },
    { image: "/images/image3.jpg", text: "Text 3" },
    { image: "/images/image4.jpg", text: "Text 4" },
    { image: "/images/image5.jpg", text: "Text 5" },
  ];

  return (
    <main className="relative ">
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          {/* Main content area with 100vh margin from the top */}
          <div className="relativebg-gradient-to-b from-[#1B5632] to-[#00205C] mt-[100vh]" ref={contentRef}>
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
