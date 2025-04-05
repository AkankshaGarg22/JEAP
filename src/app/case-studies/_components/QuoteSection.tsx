"use client";
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
  big?: boolean;
}

export const BlockQuote = ({
  big = false,
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
      rootMargin: "0px",
      threshold: 0.3,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Animate the line from 20% to 100% width
          if (lineRef.current) {
            lineRef.current.style.width = "20%";
            lineRef.current.style.transition = "width 0.5s ease-out";

            setTimeout(() => {
              if (lineRef.current) {
                lineRef.current.style.width = "100%";
              }
            }, 300);
          }

          // Show the circle when the animation is almost complete
          if (circleRef.current) {
            circleRef.current.style.opacity = "0";
            circleRef.current.style.transition = "opacity 0.5s ease-out";

            setTimeout(() => {
              if (circleRef.current) {
                circleRef.current.style.opacity = "1";
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
      className={`blockquote-container flex items-center md:block bg-blockquote-bg-mobile md:bg-blockquote-bg-desktop bg-no-repeat relative w-full ${
        big ? "min-h-[60vh] md:min-h-[44vh] xl:h-[60vh] bg-cover" : "min-h-[24vh] md:min-h-[40vh] xl:h-[47vh] bg-cover"
      } md:h-[40vh]  xl:min-h-[47vh] md:bg-auto bg-center  overflow-hidden p-4 md:p-12 text-white ${className || ""}`}
    >
      {/* Quote content */}
      <div className={`relative z-10 max-w-lg ${big ? "md:max-w-4xl" : "md:max-w-3xl"} mx-auto flex flex-col justify-center items-center h-full md:h-full`}>
        <h2 className={`${ big ? "w-full" : "w-[60%]"} md:w-full leading-relaxed mb-4 md:mb-6 px-2 md:px-0 text-xs md:text-base xl:text-2xl ${big ? "xl:leading-7" : ""}`}>{quote}</h2>

        {/* Attribution line - with animation */}
        {(author || position || organization) && (
          <div className="flex items-center gap-8 text-xs md:text-base xl:text-2xl ">
            <div className="relative w-[100px] md:w-full flex items-center">
              <div ref={lineRef} id="line" className="h-[1px] md:h-[2px] bg-white/60 " style={{ width: "20%" }}></div>
              <div ref={circleRef} className="absolute -right-2 md:-right-3 md:w-3 md:h-3 w-2 h-2 rounded-full bg-white/60" style={{ opacity: 0 }}></div>
            </div>
            <div className="flex flex-wrap items-center text-balance whitespace-nowrap">
              {author && (
                <span className="italic text-white/80">
                  {author}
                  {position ? ", " : ""}
                </span>
              )}
              {position && <span className="italic text-white/80 whitespace-nowrap">{" " + position}</span>}
              {organization && <span className="w-full italic text-white/80">{organization}</span>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
