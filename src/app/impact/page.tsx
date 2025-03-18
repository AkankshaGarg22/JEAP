"use client";
import { Suspense, useEffect, useRef, useState } from "react";
import ErrorBoundary from "../_components/ErrorBoundary";
import Loading from "../_components/layout/loading";
import ImpactLanding from "./_components/impact-landing";
import Reports from "./_components/reports";
import Footer from "../_components/layout/footer";
import CaseStudies from "./_components/case-studies";

export default function Index() {
  return (
    <main className="relative">
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <div className="absolute top-0 bg-white w-full">
            <div className="fixed">
              <ImpactLanding />
            </div>

            <div className="relative mt-[100vh]">
              <Reports />
              <CaseStudies />
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
