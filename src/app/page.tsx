"use client";
import Landing from "./_components/landing";
import Mission from "./_components/mission";
import WorldMap from "./_components/worldmap";
import Leadership from "./_components/leadership";
import Resources from "./_components/resources";
import Operation from "./_components/operation";
import { Tabs } from "./_components/tabs";
import { TimeLine } from "./_components/time-line";
import TurnAroundTime from "./_components/turnaround-time";
import ErrorBoundary from "./_components/ErrorBoundary";
import { Suspense, useEffect, useRef, useState } from "react";
import Loading from "./_components/loading";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./_components/footer";

export default function Index() {
  const ref = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement | null>(null);
  const landingRef = useRef<HTMLDivElement | null>(null);

  const [isVisible, setIsVisible] = useState(false);
  
  const operationRef = useRef<HTMLDivElement | null>(null);
  const [isOprVisible, setIsOprVisible] = useState(false);

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
  }

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
              <div ref={ref} data-aos="fade-up" data-aos-duration="3000">
                <WorldMap />
              </div>
              <div data-aos="fade-up" data-aos-duration="3000"><TurnAroundTime /></div>
              <div className="md:mt-[150px]" data-aos="fade-up" data-aos-duration="3000">
                <Tabs />
              </div>
              <div data-aos="fade-up" data-aos-duration="3000">
                <TimeLine />
              </div>
              <div ref={operationRef} data-aos="fade-up" data-aos-duration="3000">
                <Operation isOprVisible={isOprVisible} />
              </div>
              <div data-aos="fade-up" data-aos-duration="3000">
                <Resources />
              </div>
              <div data-aos="fade-up" data-aos-duration="3000">
                <Leadership />
              </div>
            </div>
            <div className="relative">
              <Footer />
            </div>
          </div>
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}
