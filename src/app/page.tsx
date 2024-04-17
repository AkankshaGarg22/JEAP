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

  const [isVisible, setIsVisible] = useState(false);
  console.log(isVisible);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const top = ref.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
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
            <div className="fixed">
              <Landing isVisible={isVisible} />
            </div>
            <div className="relative mt-[100vh] bg-white">
              <Mission />
            <div ref={ref} data-aos="fade-up" data-aos-duration="3000">
              <WorldMap />
            </div>
            {/* <div data-aos="fade-up" data-aos-duration="3000"><TurnAroundTime /></div> */}
            <div data-aos="fade-up" data-aos-duration="3000">
              <Tabs />
            </div>
            <div data-aos="fade-up" data-aos-duration="3000">
              <TimeLine />
            </div>
            <div data-aos="fade-up" data-aos-duration="3000">
              <Operation />
            </div>
            <div data-aos="fade-up" data-aos-duration="3000">
              <Resources />
            </div>
            <div>
              <Leadership />
            </div>
            </div>
            <div className="bottom-0 ">
              <Footer />
            </div>
          </div>
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}
