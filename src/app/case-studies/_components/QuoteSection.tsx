'use client';
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import SubHeading from "./sub-heading";
import Paragraph from "./paragraph";

interface BlockQuoteProps {
  quote: string;
  author?: string;
  position?: string;
  organization?: string;
  className?: string;
  gradientFrom?: string;
  gradientTo?: string;
}

export const BlockQuote = ({
  quote,
  author,
  position,
  organization,
  className,
  gradientFrom = "#1e2859", // Dark blue default
  gradientTo = "#1d5539", // Green default
}: BlockQuoteProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Animate the line from 20% to 100% width
          if (lineRef.current) {
            lineRef.current.style.width = '20%';
            lineRef.current.style.transition = 'width 0.5s ease-out';
            
            setTimeout(() => {
              if (lineRef.current) {
                lineRef.current.style.width = '100%';
              }
            }, 300);
          }
          
          // Show the circle when the animation is almost complete
          if (circleRef.current) {
            circleRef.current.style.opacity = '0';
            circleRef.current.style.transition = 'opacity 0.5s ease-out';
            
            setTimeout(() => {
              if (circleRef.current) {
                circleRef.current.style.opacity = '1';
              }
            }, 1400);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`blockquote-container bg-blockquote-bg-desktop bg-cover bg-no-repeat bg-center relative w-full xl:h-[47vh] md:h-[40vh] md:min-h-[40vh] xl:min-h-[47vh] min-h-[16vh] h-[16vh] overflow-hidden p-4 md:p-12 text-white ${className || ""}`}
      // style={{
      //   background: `linear-gradient(110deg, ${gradientFrom}, ${gradientTo})`,
      // }}
    >
      {/* Left quote mark image - reduced size */}
      {/* <Image
        src="/assets/blog/case-studies/Gender_equality/Group 362.svg"
        alt="Left quote mark"
        width={200}
        height={200}
        className="absolute left-4 top-10 md:left-[5%] md:top-28 w-16 h-16 md:w-40 md:h-40 z-10"
      /> */}

      {/* Right quote mark image - reduced size */}
      {/* <Image
        src="/assets/blog/case-studies/Gender_equality/Group 401.svg"
        alt="Right quote mark"
        width={100}
        height={100}
        className="absolute right-4 bottom-[4.5rem] md:right-[7%] md:bottom-64 w-12 h-12 md:w-20 md:h-20 z-10"
      /> */}

      {/* Circle decoration */}
      {/* <div className="absolute left-[10%] bottom-1/4 w-24 h-24 md:w-60 md:h-60 rounded-full bg-[#1E2859] mix-blend-luminosity"></div>
      <div className="absolute right-[5%] top-1/4 w-12 h-12 md:w-32 md:h-32 rounded-full bg-[#1E2859] mix-blend-luminosity"></div> */}

      {/* Quote content */}
      <div className="relative z-10 max-w-lg md:max-w-3xl mx-auto flex flex-col justify-center items-start md:h-full">
        <h2 className="w-full leading-relaxed mb-4 md:mb-6 px-2 md:px-0 text-xs md:text-2xl">
          {quote}
        </h2>

        {/* Attribution line - with animation */}
        {(author || position || organization) && (
          <div className="flex items-center gap-4 md:gap-8 text-xs md:text-2xl">
            <div className="relative w-[150px] md:w-[450px] flex items-center">
              <div 
                ref={lineRef}
                id="line" 
                className="h-[2px] bg-white/60"
                style={{ width: '20%' }}
              ></div>
              <div 
                ref={circleRef}
                className="absolute -right-3 w-3 h-3 rounded-full bg-white/60"
                style={{ opacity: 0 }}
              ></div>
            </div>
            <div className="flex flex-wrap items-center text-balance whitespace-nowrap">
              {author && <span className="italic text-white/80">{author} {position ? ", ": ""}</span>}
              {position && (
                <span className="italic text-white/80 whitespace-nowrap">
                  {position}
                </span>
              )}
              {organization && <span className="w-full mt-1 italic text-white/80">{organization}</span>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};