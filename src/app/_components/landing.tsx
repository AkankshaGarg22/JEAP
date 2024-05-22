"use client";
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';


export default function Landing({ isVisible }: { isVisible: boolean }) {

  const parallaxRef = useRef<HTMLDivElement>(null);
  const parrallaxRef = useRef<HTMLDivElement>(null);
  const [tl, setTl] = useState<gsap.core.Timeline | null>(null); 
  gsap.registerPlugin(ScrollTrigger);


//Background carousel
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fading, setFading] = useState(false);

  const images = [
    '/assets/blog/jpgs/header_1.webp',
    '/assets/blog/jpgs/header_2.webp',
    '/assets/blog/jpgs/header_3.webp',
    '/assets/blog/jpgs/header_image.webp',
    // ... Add more image paths
  ];


  // //preload the images
  useEffect(() => {
    const preloadImages = async () => {
      try {
        await Promise.all(
          images.map((src) => {
            return new Promise((resolve, reject) => {
              const img = new Image();
              img.src = src;
              img.onload = resolve;
              img.onerror = reject;
            });
          })
        );
        console.log("All images preloaded successfully");
      } catch (error) {
        console.error("Failed to preload images:", error);
      }
    };

    preloadImages(); 
  }, []); 

  // const [imagesLoaded, setImagesLoaded] = useState(false);
  // // Image preloading (corrected)
  // useEffect(() => {
  //   let loadedCount = 0;
  //   const imageLoadPromises = images.map(src => {
  //     return new Promise<void>((resolve, reject) => { // Specify the Promise type as void
  //       const img = new Image();
  //       img.src = src;
  //       img.onload = () => {
  //         loadedCount++;
  //         if (loadedCount === images.length) {
  //           setImagesLoaded(true); 
  //         }
  //         resolve(); // No return value needed
  //       };
  //       img.onerror = reject;
  //     });
  //   });

  //   Promise.all(imageLoadPromises)
  //     .then(() => console.log("All images preloaded successfully"))
  //     .catch(error => console.error("Failed to preload images:", error));
  // }, []); 

 const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true); // Start fading out the current image
    }, 2000); // Start fade-out 1 second before image change

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    if (fading && !transitioning) {
      // Delay image change after fade-out starts
      setTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFading(false);
        setTransitioning(false);
      }, 2000); // Wait for fade-out transition to complete
    }
  }, [fading, transitioning, images.length]);




  useEffect(() => {
    if (parallaxRef.current) {
      
    
      const newTl = gsap.timeline({
        scrollTrigger: {
          trigger: parallaxRef.current,
          start: 'top 0%',
          scrub: true,
          // markers: true
        }
      });
    
      gsap.set(parallaxRef.current, { opacity: 1 });
      newTl.to(parallaxRef.current, { opacity: 0 });
    
      setTl(newTl); // Store the timeline instance in state
    }
  }, []); 

  useEffect(() => {
    return () => {
      if (tl) {
        tl.kill(); // Kill the timeline on unmount
        gsap.set(parallaxRef.current, {clearProps:"all"});
      }
    };
  }, [tl]);


  useEffect(() => {
    
      gsap.to(parallaxRef.current, {
        backgroundPositionY: '-50px', // Adjust the movement value as needed
        ease: 'none',
        scrollTrigger: {
          trigger: parallaxRef.current,
          start: 'top 0%',
          end: 'bottom center',
          scrub: true,
        }
      });

      gsap.to(parrallaxRef.current, {
        y: '-100px', // Adjust the movement value as needed
        ease: 'none',
        scrollTrigger: {
          trigger: parrallaxRef.current,
          start: 'top 0%',
          end: 'bottom center',
          scrub: true,
         // markers:true,
        }
      });

    }, []);

   


  return (
    <div className={` min-h-screen fixed transi`} ref={parallaxRef}>
      
      <section id="bgcarousel"
        className={`relative text-white w-full h-screen bg-cover bg-no-repeat bg-center
        flex flex-col justify-center items-center [clip-path:circle(75%_at_49%_29%)] md:[clip-path:circle(180vh_at_50%_-80vh)] 
        transition-bg-image duration-1000 ease-in-out}
      ` }  ref={parrallaxRef}
        style={{ backgroundImage: `url(${images[currentImageIndex]})`, 
        opacity: fading ? 1 : 1
       }}
      >
        <div className="xl:pt-[200px] flex flex-col justify-center items-center w-[90%] xl:w-[60%] text-center">
          <h1 className="xl:leading-[1] text-3xl md:text-6xl font-[compasse-extrabold] leading-tight">THE JOINT EMERGENCY ACTION PLAN (JEAP) UNLOCKING AFRICA'S RESILIENCE</h1>
          <p className="text-lg md:text-2xl pt-5 w-[80%] break-normal">
            The JEAP, borne out of a partnership between the Africa CDC and the World Health Organization, is a regional platform that focuses on consolidating Emergency Preparedness and Response (EPR)
            efforts across the continent to dramatically improve how countries prepare for, detect, and respond to emergencies, while simultaneously ensuring no country is left behind.
          </p>
        </div>
      </section>
      
    </div>
  );
}
