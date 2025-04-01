"use client"
import Image from "next/image";
import AnimatedHeading from "../../_components/AnimatedHeading";
import MainHeading from "../../_components/main-heading";
import SubHeading from "../../_components/sub-heading";
import Paragraph from "../../_components/paragraph";

export default function Landing() {
  return (
    <section className="min-h-screen bg-white">
      {/* Main Hero Section with Overlay Text */}
      <div className="relative">
        <div className="w-full h-[60vh] md:h-[50vh] lg:h-[80vh] relative">
          <Image
            src="/assets/blog/case-studies/Collaboration for Resilience/Webp/1.webp"
            alt="JEAP Partnership Members"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1b5632]"></div>

          {/* Hero Text */}
          <div className="absolute bottom-10 w-full">
            <div className="max-w-6xl mx-auto px-6 md:px-12">
              <MainHeading className="text-white">
              COLLABORATION FOR RESILIENCE
              </MainHeading>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className=" md:py-10  bg-gradient-to-b from-[#1b5632] via-[#195334] to-[#01205d] text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 px-6 md:px-12 py-8 md:py-10">
          {/* Subtitle - Full width on mobile, 4/12 on desktop */}
          <div className="lg:col-span-4 order-1">
            <AnimatedHeading linecolor="white">
                THE JEAP PARTNERSHIP'S 'COMMON AFRICA APPROACH' TO THE PANDEMIC
                FUND
            </AnimatedHeading>
          </div>

          {/* Paragraph - Full width on mobile, 8/12 on desktop */}
          <div className="lg:col-span-8 order-2">
            <Paragraph>
              Officially launched in 2022, the Pandemic Fund is a majornew
              source of financing that can benefit African countries seeking to
              enhance pandemic prevention, preparedness, and response
              capabilities. As of the beginning of 2024, the Fund has raised $2
              billion in seed capital from 24 sovereign and three philanthropic
              contributors. In May 2023, the Pandemic Fund closed its first Call
              for Proposals, receiving 179 applications from 133 countries
              around the world and thereafter awarded a first round of grants
              totaling US$338 million. Yet, there were no successful regional or
              multi-country proposals from Africa, a missed opportunity.
            </Paragraph>
          </div>

          {/* Image - Full width on both mobile and desktop, appears at bottom */}
          <div className="lg:col-span-12 order-3 mt-6">
            <div className="w-full h-64 md:h-80 relative">
              <img
                src="/assets/blog/case-studies/Collaboration for Resilience/Webp/2.webp"
                alt="JEAP Partnership Meeting"
                className="w-full h-full object-cover object-left-top rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
