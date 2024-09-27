"use client";
import { useState, useEffect } from "react";
import { CarouselProps } from "@/interfaces/carousel";
import { PopUpState } from "@/interfaces/timeline";
import Modal from "./modal";

const SelectedTextComponent = ({ selected }: { selected: string }) => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey((prevKey) => prevKey + 1); // Increment the key to trigger a re-render
  }, [selected]);

  return (
    <div key={key} className="basis-5/6 md:basis-1/2 text-start md:text-start text-wrap text-[14px] md:text-lg leading-tight md:leading-[1.05] xl:text-lg xl:leading-[1.25] px-5  animate-slide-in" dangerouslySetInnerHTML={{ __html: selected }} />
  );
};

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
      <div className="flex transition-transform ease-out duration-500 h-[720px] md:h-[600px] xl:h-[650px] xl:w-auto" style={{ transform: `translateX(-${curr * 100}%)` }}>
        {item.slides.map((img, i) => (
          <img key={i} className=" md:min-w-full object-cover object-right md:object-cover md:object-left xl:object-cover xl:object-left" src={img} alt="Picture" />
        ))}
      </div>
      <div className="absolute inset-0 bg-transparent text-white text-center pt-4 md:pt-8 xl:pt-16 xl:left-[50] text-xl md:text-3xl font-bold uppercase">{item.title}</div>
      <div className="absolute inset-0 top-[20px]  md:top-[100px] xl:top-[125px]  bg-transparent text-white flex flex-col md:flex-row items-center md:items-start justify-start md:justify-end xl:justify-center gap-4">
        <div className="flex basis-1/6 md:basis-1/4 flex-row md:flex-col gap-2 justify-items-end items-end">
          <button
            className={`text-lg xl:text-2xl ${selected === item.from ? "border-b-white mb:border-r-white " : "text-[#FFFFFF7D] border-r-[#FFFFFF7D]"} border-b-4 md:border-b-0 md:border-r-8 px-4 w-28`}
            onClick={() => setSelected(item.from)}
          >
            From
          </button>
          <button
            className={`text-lg xl:text-2xl ${selected === item.to ? "border-b-white mb:border-r-white " : "text-[#FFFFFF7D] border-r-[#FFFFFF7D]"} border-b-4 md:border-b-0 md:border-r-8 px-4 w-28`}
            onClick={() => setSelected(item.to)}
          >
            {"  To"}
          </button>
          <button
            className={`text-lg xl:text-2xl ${selected === item.how ? "border-b-white mb:border-r-white " : "text-[#FFFFFF7D] border-r-[#FFFFFF7D]"} border-b-4 md:border-b-0 md:border-r-8 px-4 w-28`}
            onClick={() => setSelected(item.how)}
          >
            {" How"}
          </button>
        </div>

        <SelectedTextComponent selected={selected} />
      </div>
      {popUp.isOpen && <Modal setPopUp={setPopUp} popUp={popUp} />}
    </div>
  );
}


