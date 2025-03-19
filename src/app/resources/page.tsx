"use client";
import { Suspense, useEffect, useRef, useState } from "react";
import ErrorBoundary from "../_components/ErrorBoundary";
import Loading from "../_components/layout/loading";
import ResourceLanding from "./_components/resource-landing";
import Reports from "./_components/reports";
import Footer from "../_components/layout/footer";
import Maintenance from "../_components/maintenance";
import News from "./_components/news";

export default function Index() {
  return (
    <main className="relative">
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <div className="absolute top-0 bg-white w-full">
            <div className="fixed">
              <ResourceLanding />
            </div>

            <div className="relative mt-[100vh]">
              <Reports />
            </div>
            <div className="relative" data-aos="fade-up" data-aos-duration="1500">
              <div>
                <Maintenance />
              </div>
              <div>
                <News />
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
