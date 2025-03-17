"use client";
import { Suspense, useEffect, useRef, useState } from "react";
import ErrorBoundary from "../_components/ErrorBoundary";
import Loading from "../_components/layout/loading";
import AboutLanding from "./_components/about-landing";
import PartnerShip from "./_components/partnership";
import Implementation from "./_components/implementation";
import Achievements from "./_components/achievements";
import Conceptualization from "./_components/conceptualization";
import Footer from "../_components/layout/footer";

export default function Index() {
  return (
    <main className="relative">
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <div className="absolute top-0 bg-white">
            <div className="fixed">
              <AboutLanding />
            </div>

            <div className="relative mt-[100vh]">
              <PartnerShip />
            </div>
            <div className="relative md:pt-[30px] pt-[20px]">
              <div>
                <Achievements />
              </div>
              <div className="my-4">
                <Conceptualization />
              </div>
              <div>
                <Implementation />
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
