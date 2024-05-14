"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';


export default function Landing({ isVisible }: { isVisible: boolean }) {

    const parallaxRef = useRef<HTMLDivElement>(null);
    const parrallaxRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
  
      gsap.to(parallaxRef.current, {
        y: '-50px', // Adjust the movement value as needed
        ease: 'none',
        scrollTrigger: {
          trigger: parallaxRef.current,
          start: 'top 0%',
          end: 'bottom center',
          scrub: true,
        }
      });
    }, []);

    useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
  
      gsap.to(parrallaxRef.current, {
        backgroundPositionY: '-100px', // Adjust the movement value as needed
        ease: 'power1.out',
        scrollTrigger: {
          trigger: parrallaxRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: true,
         // markers:true,
        }
      });
    }, []);


  return (
    <div className={` min-h-screen fixed transition-opacity scroll-background`} ref={parallaxRef}>
      
      <section
        className={`relative text-white w-full h-screen bg-cover bg-no-repeat bg-center bg-opacity-80 flex flex-col justify-center items-center [clip-path:circle(75%_at_49%_29%)] md:[clip-path:circle(180vh_at_50%_-80vh)]  
        animate-[changeImage_50s_linear_infinite]`} ref={parrallaxRef}
      >
        <div className="xl:pt-[200px] flex flex-col justify-center items-center w-[90%] xl:w-[60%] text-center">
          <h1 className="leading-1 md:leading-[1.5] text-3xl md:text-6xl font-[compasse-extrabold]">THE JOINT EMERGENCY ACTION PLAN (JEAP) UNLOCKING AFRICA'S RESILIENCE</h1>
          <p className="text-lg md:text-2xl">
            The JEAP, borne out of a partnership between the Africa CDC and the World Health Organization, is a regional platform that focuses on consolidating Emergency Preparedness and Response (EPR)
            efforts across the continent to dramatically improve how countries prepare for, detect, and respond to emergencies, while simultaneously ensuring no country is left behind.
          </p>
        </div>
      </section>
      
    </div>
  );
}
