"use client";
import { Suspense, useEffect, useRef, useState } from "react";
import ErrorBoundary from "../_components/ErrorBoundary";
import Loading from "../_components/layout/loading";
import FocusLanding from "./_components/focus-landing";
import Areas from "./_components/areas";
import Progress from "./_components/progress";
import Highlights from "./_components/highlights";
import List from "./_components/list";

export default function Index() {
  return (
    <main className="relative">
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <div className="absolute top-0 bg-white">
            <div className="fixed">
              <FocusLanding />
            </div>

            <div className="relative mt-[100vh]">
              <Areas />
            </div>
            <div className="relative bg-gradient-to-b from-[#1B5632] via-[rgb(8_48_80)] to-[rgb(1_33_91)]">
              <div>
                <Progress />
              </div>
              <div>
                <Highlights />
              </div>
              <div>
                <List />
              </div>
            </div>
          </div>
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}
