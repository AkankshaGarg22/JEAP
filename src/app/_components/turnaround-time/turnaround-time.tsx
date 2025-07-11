"use client";
import dynamic from 'next/dynamic';
import { useMediaQuery } from "@react-hook/media-query";

const OuterCircle = dynamic(() => import('./outerCircle'), { ssr: false });
const InnerCircle = dynamic(() => import('./innerCircle'), { ssr: false });

export default function TurnAroundTime({ isVisible }: {isVisible: boolean}) {
  const isXlScreen = useMediaQuery("only screen and (min-width: 1200px)"); // adjust the breakpoint as needed

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center relative">
      <img loading="lazy" className="w-full md:h-[500px] xl:h-[800px] h-[400px]" src="/assets/blog/jpgs/Group 3346.webp" alt="turnaround-page"></img>
      {isVisible ? (
        <div className="z-10 absolute h-full w-full flex justify-center items-center">
          {isXlScreen ? (
            <div className="hidden xl:flex relative h-full w-full justify-center items-center">
              <OuterCircle isVisible={isVisible}></OuterCircle>
            </div>
          ) : null}
          <div className="md:hidden block p-10">
            <img loading="lazy" alt="bg-image" src="/assets/blog/Group 3337.svg" height={300} width={300}></img>
          </div>
          <div className="hidden md:block xl:hidden p-10">
            <img loading="lazy" alt="bg-image" src="/assets/blog/Group 3337.svg" height={450} width={450}></img>
          </div>
          {isXlScreen ? null : <InnerCircle isVisible={isVisible}></InnerCircle>}
        </div>
      ) : null}
    </div>
  );
}

