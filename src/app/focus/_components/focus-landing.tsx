"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function FocusLanding() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [tl, setTl] = useState<gsap.core.Timeline | null>(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (parallaxRef.current) {
      const newTl = gsap.timeline({
        scrollTrigger: {
          trigger: parallaxRef.current,
          start: "top 0%",
          scrub: true,
          // markers: true
        },
      });

      gsap.set(parallaxRef.current, { opacity: 1 });
      newTl.to(parallaxRef.current, { opacity: 0 });

      setTl(newTl); // Store the timeline instance in state
    }

    gsap.to(parallaxRef.current, {
      backgroundPositionY: "-50px", // Adjust the movement value as needed
      ease: "none",
      scrollTrigger: {
        trigger: parallaxRef.current,
        start: "top 0%",
        end: "bottom center",
        scrub: true,
      },
    });
  }, []);

  useEffect(() => {
    return () => {
      if (tl) {
        tl.kill(); // Kill the timeline on unmount
        gsap.set(parallaxRef.current, { clearProps: "all" });
      }
    };
  }, [tl]);

  return (
    <div className="min-h-screen fixed" ref={parallaxRef}>
      <section className="relative text-white w-full h-screen bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center [clip-path:circle(75%_at_49%_29%)] md:[clip-path:circle(180vh_at_50%_-80vh)] bg-focus-landing">
        <div className="flex flex-col justify-center items-center w-[90%] xl:w-[75%] text-center gap-4">
          <h1 className="xl:leading-[1] text-3xl md:text-7xl font-[arial-bold] leading-tight">ABOUT THE TWGS</h1>
          <p className="text-lg md:text-2xl w-[100%] sm:leading-none sm:px-4 md:pt-5 md:w-[80%] xl:pt-6 xl:w-[80%] text-balance break-normal">
          The core of JEAP’s mission is driven by its Technical Working Groups (TWGs), eight specialized teams powering the initiative’s impact. With six primary TWGs and two cross-cutting TWGs, each TWG is composed of dedicated experts committed to advancing health progress across Africa.
          </p>
        </div>
      </section>
    </div>
  );
}
