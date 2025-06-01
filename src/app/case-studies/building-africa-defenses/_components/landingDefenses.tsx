"use client";
import React from "react";
import Image from "next/image";
import TranslucentBox from "./textWhiteBox";
import AnimatedHeading from "../../_components/AnimatedHeading";
import MainHeading from "../../_components/main-heading";
import Paragraph from "../../_components/paragraph";
import Link from "next/link";
import { BackButton } from "../../_components/BackButton";

export default function LandingDefenses() {
  return (
    <section className="min-h-screen bg-white">
      <BackButton />

      {/* Main Hero Section with Overlay Text */}
      <div className="relative">
        <div className="w-full h-[30vh] md:h-[50vh] lg:h-[80vh] relative">
          <Image
            className="hidden md:block"
            src="/assets/blog/case-studies/Building_Africa_Defenses/webp/IMG_2547.webp"
            alt="JEAP Building Africa's Defenses"
            layout="fill"
            objectFit="cover"
            priority
          />
          <Image
            className="block md:hidden"
            src="/assets/blog/case-studies/banner/5.jpg"
            alt="JEAP Partnership Members"
            layout="fill"
            objectFit="cover"
            priority
          />
          {/* Sticky Top-Right Button */}

          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1b5632]"></div>

          {/* Hero Text */}
          {/* <div className="absolute bottom-10 w-full">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">BUILDING AFRICA’S DEFENSES: ADVANCING GENOMIC SEQUENCING TO ENSURE PUBLIC HEALTH SECURITY</h1>
            </div>
          </div> */}
        </div>
      </div>

      {/* Main Content */}
      <div className="md:pb-10 md:pt-6 bg-gradient-to-b from-[#1b5632] via-[#195334] to-[#01205d] text-white">
        <MainHeading className="text-white max-w-7xl mx-auto text-left px-6 md:px-12 pt-8 md:py-8">
          BUILDING AFRICA’S DEFENSES: ADVANCING GENOMIC SEQUENCING TO ENSURE
          PUBLIC HEALTH SECURITY
        </MainHeading>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 px-6 md:px-12 py-4 md:py-8">
          {/* Subtitle - Full width on mobile, 4/12 on desktop */}
          <div className="lg:col-span-4 order-1">
            <AnimatedHeading linecolor="white">
              Genomic Sequencing: A Game-Changing Innovation for Disease
              Surveillance in Africa
            </AnimatedHeading>
          </div>

          {/* Paragraph - Full width on mobile, 8/12 on desktop */}
          <div className="lg:col-span-8 order-2">
            <p className="text-base md:text-lg">
              Major infectious disease outbreaks around the globe in recent
              years have underscored the urgent need to strengthen laboratory
              and surveillance capabilities through genomic sequencing in order
              to track and mitigate the spread of disease.<sup>1</sup> With more
              disease outbreaks than any other region globally,<sup>2</sup>{" "}
              Africa reported 148 health emergencies in 2023, despite
              representing only 17% of the global population. Africa’s
              vulnerability to the spread of infectious disease epidemics is
              driven by various factors, including climatic and ecological
              conditions that harbor pathogens and their vectors as well as
              frequent movements of people, commodities, animals and animal
              products across national and international borders.
              <sup>3</sup>
            </p>
          </div>

          {/* Image - Full width on both mobile and desktop, appears at bottom */}
          <div className="lg:col-span-12 order-3 mt-6">
            <div className="w-full h-64 md:h-80 relative">
              <img
                src="/assets/blog/case-studies/Building_Africa_Defenses/webp/JKG_0940.webp"
                alt="JEAP Partnership Meeting"
                className="w-full h-full object-cover object-left-top rounded-lg"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-[100%] lg:py-[0] md:py-12 py-4">
          <TranslucentBox
            text={
              "Many of these health threats are preventable or controllable with proven public health interventions, such as disease surveillance, case management, vaccination, and health promotion.^^4^^ Yet many countries around the globe are insufficiently prepared to manage disease outbreaks, with Africa being particularly poorly equipped, scoring an average of 50% across the 15 capacities needed to detect, assess, notify, report and respond to public health risks, against a global average of 64%.^^5^^ In this context, a crisis anywhere can quickly spread to become a crisis everywhere. By building up genomic sequencing capacities on the African continent, this game-changing technology has the potential to transform health security in Africa and around the globe."
            }
            backgroundColor="rgba(255, 255, 255, 0.3)"
            textsize="text-xl md:text-3xl"
            className="lg:w-[70%] w-[90%]"
          />
        </div>
      </div>
    </section>
  );
}
