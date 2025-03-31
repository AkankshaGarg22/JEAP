import React from "react";

interface BlockQuoteProps {
  quote: string
  author?: string
  position?: string
  organization?: string
  className?: string
  gradientFrom?: string
  gradientTo?: string
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
      className={`relative w-full h-[55vh] overflow-hidden p-20 text-white ${className || ""}`}
      style={{
        background: `linear-gradient(110deg, ${gradientFrom}, ${gradientTo})`,
      }}
    >
      {/* Left quote mark */}
      <div className="absolute left-8 top-32 text-white/20 text-[300px] leading-none font-serif">&ldquo;</div>

      {/* Right quote mark */}
      <div className="absolute right-24 bottom-40 text-white/20 text-[150px] leading-none font-serif">&rdquo;</div>

      {/* Circle decoration */}
      <div className="absolute left-1/4 bottom-1/4 w-60 h-60 rounded-full bg-white/5"></div>
      <div className="absolute right-1/4 top-1/4 w-32 h-32 rounded-full bg-white/5"></div>

      {/* Quote content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <p className="text-md md:text-md text-justify w-[512px] m-auto   leading-relaxed mb-6">{quote}</p>

        {/* Attribution line */}
        {(author || position || organization) && (
          <div className="flex items-center gap-8 text-sm">
            <div className="relative w-[350px] ml-[50px] flex items-center">
              <div className="h-[1px] w-full bg-white/60"></div>
              <div className="absolute -right-2 w-2 h-2 rounded-full bg-white/60"></div>
            </div>
            <div className="flex flex-wrap items-center">
              {author && <span className="italic text-white/80">{author}</span>}
              {position && (
                <span className="italic text-white/80 whitespace-nowrap">
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
  )
}
