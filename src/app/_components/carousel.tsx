"use client";
import { useState, useEffect } from "react";

interface CarouselProps {
  children: React.ReactNode[];
  autoSlide?: boolean;
  autoSlideInterval?: number;
}

export default function Carousel({ children: slides, autoSlide = false, autoSlideInterval = 3000 }: CarouselProps) {
  const [curr, setCurr] = useState(0);

  const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="overflow-hidden relative">
      <div className="flex transition-transform ease-out duration-500 h-[600px]" style={{ transform: `translateX(-${curr * 100}%)` }}>
        {slides}
      </div>
      <div className="absolute bottom-20 right-10 p-4 flex flex-col">
        <button onClick={prev} className="p-1 rounded-full shadow text-gray-800">
          <img className="h-20 w-20" src="/assets/blog/Group 3026.png" alt="prev" />
        </button>
        <button onClick={next} className="p-1 rounded-full shadow text-gray-800">
          <img className="h-20 w-20" src="/assets/blog/Group 3025.png" alt="next" />
        </button>
      </div>
    </div>
  );
}
