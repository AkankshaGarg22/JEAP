"use client";
import Landing from "./_components/landing";
import Mission from "./_components/mission";
import WorldMap from "./_components/worldmap";
import Leadership from "./_components/leadership";
import Resources from "./_components/resources";
import Operation from "./_components/operation";
import { Tabs } from "./_components/tabs";
import { TimeLine } from "./_components/timeline/time-line";
import TurnAroundTime from "./_components/turnaround-time/turnaround-time";
import ErrorBoundary from "./_components/ErrorBoundary";
import { Suspense, useEffect, useRef, useState } from "react";
import Loading from "./_components/layout/loading";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./_components/layout/footer";
import Lenis from "@studio-freight/lenis";
import ScrollTrigger from "gsap/ScrollTrigger";
import  XLTimeLine  from "./_components/timeline/XLTimeline";

export default function Index() {
  const ref = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement | null>(null);
  const landingRef = useRef<HTMLDivElement | null>(null);

  const [isVisible, setIsVisible] = useState(false);

  const operationRef = useRef<HTMLDivElement | null>(null);
  const [isOprVisible, setIsOprVisible] = useState(false);

  const turnAroundTimeRef = useRef<HTMLDivElement | null>(null);
  const [isTurnAroundTimeVisible, setIsTurnAroundTimeVisible] = useState(false);

  const elementIsVisibleInViewport = () => {
    if (operationRef.current) {
      const rect = operationRef.current.getBoundingClientRect();
      // Trigger visibility when the element comes into view
      if (rect.top <= window.innerHeight) {
        setIsOprVisible(true);
      } else {
        setIsOprVisible(false);
      }
    }
    if (turnAroundTimeRef.current) {
      const rect = turnAroundTimeRef.current.getBoundingClientRect();
      // Trigger visibility when the element comes into view
      if (rect.top <= window.innerHeight) {
        setIsTurnAroundTimeVisible(true);
      } else {
        setIsTurnAroundTimeVisible(false);
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (missionRef.current && landingRef.current) {
        const missionTop = missionRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        const missionHeight = missionRef.current.clientHeight;

        // Calculate the distance of the top of the Mission component from the viewport top
        const distanceFromTop = windowHeight - missionTop;

        // Calculate the percentage of the Mission component visible in the viewport
        const visiblePercentage = (distanceFromTop / missionHeight) * 100;

        // Update isVisible state based on the visible percentage
        setIsVisible(visiblePercentage >= 70);
      }
      elementIsVisibleInViewport();
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial visibility on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

 useEffect(() => {
    const scrollContainer = document.querySelector("main") as HTMLElement | null;
    const lenis = new Lenis({
      duration: 2.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      content: scrollContainer ? scrollContainer : undefined,
  });
    lenis.on("scroll", () => {
      lenis.resize();
    });
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

     lenis.on("scroll", ScrollTrigger.update);
     requestAnimationFrame(raf);
     return () => lenis.stop();
   }, []);

  
  return (
    <main className="relative">
      <ErrorBoundary>
        <Suspense fallback={<Loading></Loading>}>
          <div className="absolute top-0 bg-white">
            <div className="fixed" ref={landingRef}>
              <Landing isVisible={isVisible} />
            </div>

            <div className="relative mt-[100vh]" ref={missionRef}>
              <Mission />
            </div>

            <div className="relative bg-white">
              <div ref={ref} data-aos="fade-up" data-aos-duration="1500">
                <WorldMap />
              </div>
              <div ref={turnAroundTimeRef} data-aos="fade-up" data-aos-duration="1500" className="xl:mt-[-60px]">
                <TurnAroundTime isVisible={isTurnAroundTimeVisible} />
              </div>
              <div className="pt-[20px] md:pt-[30px]" data-aos="fade-up" data-aos-duration="1500">
                <Tabs />
              </div>
              <div className="pt-[20px] md:pt-[30px]" data-aos="fade-up" data-aos-duration="1500">
                <div className="hidden xl:block">
                  <XLTimeLine />
                </div>
                <div className="block xl:hidden">
                  <TimeLine />
                </div>
              </div>
              <div className="pt-[20px] md:pt-[30px]" ref={operationRef} data-aos="fade-up" data-aos-duration="1500">
                <Operation isOprVisible={isOprVisible} />
              </div>
              <div className="pt-[20px] md:pt-[30px]" data-aos="fade-up" data-aos-duration="1500">
                <Resources />
              </div>
              <div className="pt-[20px] md:pt-[30px]" data-aos="fade-up" data-aos-duration="1500">
                <Leadership />
              </div>
            </div>
            <div className="relative pt-[20px] md:pt-[30px]">
              <Footer />
            </div>
          </div>
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}
