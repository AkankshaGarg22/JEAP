"use client";
import { useState, useEffect } from "react";
import { CarouselProps } from "@/interfaces/carousel";

export default function Carousel({ item, autoSlide = false, autoSlideInterval = 3000 }: CarouselProps) {
  const [curr, setCurr] = useState(0);
  const [selected, setSelected] = useState(item.from);

  const prev = () => setCurr((curr) => (curr === 0 ? item.slides.length - 1 : curr - 1));
  const next = () => setCurr((curr) => (curr === item.slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="overflow-hidden relative">
      <div className="flex transition-transform ease-out duration-500 h-[800px]" style={{ transform: `translateX(-${curr * 100}%)` }}>
        {item.slides.map((img, i) => (
          <img key={i} className=" md:min-w-full object-cover" src={img} alt="Picture" />
        ))}
      </div>
      <div className="absolute inset-0 bg-transparent text-white flex flex-row items-center justify-center gap-4">
        <div className="flex flex-col gap-2 basis-1/4 justify-items-end items-end">
          <button className={`text-lg md:text-3xl ${selected === item.from ? "border-r-white " : "text-[#FFFFFF7D] border-r-[#FFFFFF7D]"} border-r-8 px-4 w-28`} onClick={() => setSelected(item.from)}>
            From
          </button>
          <button className={`text-lg md:text-3xl ${selected === item.to ? "border-r-white " : "text-[#FFFFFF7D] border-r-[#FFFFFF7D]"} border-r-8 px-4 w-28`} onClick={() => setSelected(item.to)}>
            {"  To"}
          </button>
          <button className={`text-lg md:text-3xl ${selected === item.how ? "border-r-white " : "text-[#FFFFFF7D] border-r-[#FFFFFF7D]"} border-r-8 px-4 w-28`} onClick={() => setSelected(item.how)}>
            {" How"}
          </button>
        </div>
        <div className="basis-1/2 text-start text-wrap text-lg md:text-3xl">{selected}</div>
      </div>
      <div className="absolute bottom-20 right-10 p-4 flex flex-col">
        <button onClick={prev} className="p-1 rounded-full shadow text-gray-800">
          <img className="h-10 w-10 md:h-20 md:w-20" src="/assets/blog/Group 3026.png" alt="prev" />
        </button>
        <button onClick={next} className="p-1 rounded-full shadow text-gray-800">
          <img className="h-10 w-10 md:h-20 md:w-20" src="/assets/blog/Group 3025.png" alt="next" />
        </button>
      </div>
    </div>
  );
}
