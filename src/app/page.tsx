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
          <div data-aos="fade-up">
            <Mission />
          </div>
          <div data-aos="fade-up">
            <WorldMap />
          </div>
          <div data-aos="fade-up">
            <TurnAroundTime />
          </div>
          <div data-aos="fade-up">
            <Tabs />
          </div>
          <div data-aos="fade-up">
            <TimeLine />
          </div>
          <div data-aos="fade-up">
            <Operation />
          </div>
          <div data-aos="fade-up">
            <Resources />
          </div>
          <Leadership />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}
