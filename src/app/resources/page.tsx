"use client";

import React, { Suspense, useEffect, useRef } from "react";
import ErrorBoundary from "../_components/ErrorBoundary";
import Loading from "../_components/layout/loading";
import Footer from "../_components/layout/footer";
import AOS from "aos";
import "aos/dist/aos.css";
import ResourcesLanding from "./_components/resourcesLanding";
import Sspace from "./_components/Sspace";
import ResourceReports from "./_components/reports";

const PageLayout: React.FC = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  

  return (
    <main className="relative m-0 p-0 bg-white w-full">
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>

        <div className="relative z-20">
            <ResourcesLanding />
          </div>
          <div className="relative z-20">
            <Sspace/>
          </div>
          
          <div className="relative z-20">
            <ResourceReports/>
          </div>

          <div className="relative z-20">
            <Footer />
          </div>

        </Suspense>
      </ErrorBoundary>
    </main>
  );
};

export default PageLayout;