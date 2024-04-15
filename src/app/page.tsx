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
import { Suspense, useEffect } from "react";
import Loading from "./_components/loading";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Index() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main>
      <ErrorBoundary>
        <Suspense fallback={<Loading></Loading>}>
          <Landing />
          <div data-aos="fade-up" data-aos-duration="3000">
            <Mission />
          </div>
          <div data-aos="fade-up" data-aos-duration="3000">
            <WorldMap />
          </div>
          {/* <div data-aos="fade-up" data-aos-duration="3000">
            <TurnAroundTime />
          </div> */}
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
          <Leadership />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}
