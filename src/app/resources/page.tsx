"use client";
import { Suspense, useEffect, useRef, useState } from "react";
import ErrorBoundary from "../_components/ErrorBoundary";
import Loading from "../_components/layout/loading";
import ResourceLanding from "./_components/resource-landing";
import Reports from "./_components/reports";
import Conceptualization from "./_components/conceptualization";
import Footer from "../_components/layout/footer";

export default function Index() {
  return (
    <main className="relative">
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <div className="absolute top-0 bg-white">
            <div className="fixed">
              <ResourceLanding />
            </div>

            <div className="relative mt-[100vh]">
              <Reports />
            </div>
              <div className="relative">
                <Conceptualization />
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
