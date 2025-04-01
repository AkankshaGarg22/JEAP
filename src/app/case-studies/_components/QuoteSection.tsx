import React from "react";
import Image from "next/image";

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
  return (
    <div
      className={`relative w-full h-auto min-h-[55vh] overflow-hidden p-6 md:p-20 text-white ${className || ""}`}
      style={{
        background: `linear-gradient(110deg, ${gradientFrom}, ${gradientTo})`,
      }}
    >
      {/* Left quote mark image */}
      <Image
        src="/assets/blog/case-studies/Gender_equality/Group 362.svg"
        alt="Left quote mark"
        width={200}
        height={200}
        className="absolute left-4 top-12 md:left-14 md:top-32 w-24 h-24 md:w-auto md:h-auto"
      />

      {/* Right quote mark image */}
      <Image
        src="/assets/blog/case-studies/Gender_equality/Group 401.svg"
        alt="Right quote mark"
        width={100}
        height={100}
        className="absolute right-6 bottom-12 md:right-28 md:bottom-40 w-16 h-16 md:w-auto md:h-auto"
      />

      {/* Circle decoration - responsive positioning */}
      <div className="absolute left-1/4 bottom-1/4 w-32 h-32 md:w-60 md:h-60 rounded-full bg-white/5"></div>
      <div className="absolute right-1/4 top-1/4 w-16 h-16 md:w-32 md:h-32 rounded-full bg-white/5"></div>

      {/* Quote content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <p className="text-md text-justify w-full px-4 md:px-0 md:w-[512px] m-auto leading-relaxed mb-6">{quote}</p>

        {/* Attribution line */}
        {(author || position || organization) && (
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 text-sm">
            <div className="relative w-[200px] md:w-[350px] ml-4 md:ml-[50px] flex items-center">
              <div className="h-[1px] w-full bg-white/60"></div>
              <div className="absolute -right-2 w-2 h-2 rounded-full bg-white/60"></div>
            </div>
            <div className="flex flex-wrap items-center ml-4 md:ml-0">
              {author && <span className="italic text-white/80">{author}</span>}
              {position && (
                <span className="italic text-white/80 whitespace-normal md:whitespace-nowrap">
                  {author ? ", " : ""}
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