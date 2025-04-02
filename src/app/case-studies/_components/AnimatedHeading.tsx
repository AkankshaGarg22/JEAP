"use client";

import React, { useEffect, useRef, useState } from "react";

interface AnimatedHeadingProps {
  children: React.ReactNode;
  className?: string;
  fontSize?: string; 
  linecolor?: string;
}

const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({ children, className, fontSize, linecolor }) => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.8 }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <h2
        ref={headingRef}
        className={`relative ${!fontSize ? "text-xl md:text-3xl md:leading-10" : ""} mb-4 font-ArialRegular font-bold ${className}`}
        style={fontSize ? { fontSize } : undefined}
      >
        {children}
        <span
          className={`absolute left-0 bottom-[-10px] h-1 bg-${linecolor} transition-all duration-700 ease-out rounded-full ${
            isVisible ? "md:w-[40%] w-[20%]" : "md:w-[10%] w-[5%]"
          }`}
        />
      </h2>
    </div>
  );
};

export default AnimatedHeading;
