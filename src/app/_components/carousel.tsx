"use client";
import { useState, useEffect } from "react";
import { CarouselProps } from "@/interfaces/carousel";
import { PopUpState } from "@/interfaces/timeline";
import Modal from "./modal";

export default function Carousel({ item, autoSlide = false, autoSlideInterval = 3000 }: CarouselProps) {
  const [curr, setCurr] = useState(0);
  const [selected, setSelected] = useState(item.from);
  const [popUp, setPopUp] = useState<PopUpState>({ isOpen: false, item: null });

  // const prev = () => setCurr((curr) => (curr === 0 ? item.slides.length - 1 : curr - 1));
  // const next = () => setCurr((curr) => (curr === item.slides.length - 1 ? 0 : curr + 1));

  // useEffect(() => {
  //   if (!autoSlide) return;
  //   const slideInterval = setInterval(next, autoSlideInterval);
  //   return () => clearInterval(slideInterval);
  // }, []);

  return (
    <div className="overflow-hidden relative h-full">
      <div className="flex transition-transform ease-out duration-500 h-[720px] lg:h-auto lg:w-auto" style={{ transform: `translateX(-${curr * 100}%)` }}>
        {item.slides.map((img, i) => (
          <img key={i} className=" md:min-w-full object-cover object-right lg:object-cover lg:object-left" src={img} alt="Picture" />
        ))}
      </div>
      <div className="absolute inset-0 bg-transparent text-white text-center pt-4 md:pt-8 text-2xl md:text-4xl font-bold uppercase">{item.title}</div>
      <div className="absolute inset-0 md:top-[100px]  bg-transparent text-white flex flex-col md:flex-row items-center md:items-start justify-start md:justify-center gap-4">
        <div className="flex basis-1/6 md:basis-1/4 flex-row md:flex-col gap-2 justify-items-end items-end">
          <button
            className={`text-lg md:text-2xl ${selected === item.from ? "border-b-white mb:border-r-white " : "text-[#FFFFFF7D] border-r-[#FFFFFF7D]"} border-b-4 md:border-b-0 md:border-r-8 px-4 w-28`}
            onClick={() => setSelected(item.from)}
          >
            From
          </button>
          <button
            className={`text-lg md:text-2xl ${selected === item.to ? "border-b-white mb:border-r-white " : "text-[#FFFFFF7D] border-r-[#FFFFFF7D]"} border-b-4 md:border-b-0 md:border-r-8 px-4 w-28`}
            onClick={() => setSelected(item.to)}
          >
            {"  To"}
          </button>
          <button
            className={`text-lg md:text-2xl ${selected === item.how ? "border-b-white mb:border-r-white " : "text-[#FFFFFF7D] border-r-[#FFFFFF7D]"} border-b-4 md:border-b-0 md:border-r-8 px-4 w-28`}
            onClick={() => setSelected(item.how)}
          >
            {" How"}
          </button>
        </div>
        <div className="basis-5/6 md:basis-1/2 text-center md:text-start text-wrap text-lg leading-tight md:text-xl md:leading-normal">{selected}</div>
        {/* <div className="block md:hidden basis-1/2 text-center text-wrap text-lg">
          {selected.length < 400 ? (
            selected
          ) : (
            <>
            <span className=" h-1/2">{selected.substring(0,200)}...
              <button className="md:hidden border-2 p-1 ml-1" onClick={() => setPopUp({ isOpen: true, item: { key : 1, cardDetailedText : selected} })}>
                Read More
              </button>
              </span>
            </>
          )}
        </div> */}
      </div>
      {/* <div className="absolute bottom-20 right-10 p-4 flex flex-col">
        <button onClick={prev} className="p-1 rounded-full shadow text-gray-800">
          <img className="h-10 w-10 md:h-20 md:w-20" src="/assets/blog/Group 3026.png" alt="prev" />
        </button>
        <button onClick={next} className="p-1 rounded-full shadow text-gray-800">
          <img className="h-10 w-10 md:h-20 md:w-20" src="/assets/blog/Group 3025.png" alt="next" />
        </button>
      </div> */}
      {popUp.isOpen && <Modal setPopUp={setPopUp} popUp={popUp} />}
    </div>
  );
}
