"use client";
import Image from "next/image";
import AnimatedHeading from "../../_components/AnimatedHeading";
import MainHeading from "../../_components/main-heading";
import SubHeading from "../../_components/sub-heading";
import Paragraph from "../../_components/paragraph";

export default function PlanningForFuture() {
  return (
    <section className="min-h-screen bg-white">
      {/* Main Content */}
      <div className=" md:py-10  bg-gradient-to-b  from-[#01205d] via-[#195334] to-[#1b5632] text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 px-8 md:px-12 py-8 md:py-0">
          {/* Subtitle - Full width on mobile, 4/12 on desktop */}
          <div className="lg:col-span-3 order-2">
            <AnimatedHeading linecolor="white">
            Planning for the Future: From Scoping to Capacity Building
            </AnimatedHeading>
          </div>

          {/* Paragraph - Full width on mobile, 8/12 on desktop */}
          <div className="lg:col-span-8 order-3">
            <Paragraph>
              At continental level, Africa CDC is currently developing a
              Warehousing Strategy, a Supply Chain Framework, and a Supply Chain
              Strategy. These documents will support countries to optimize the
              storage, distribution, and management of health commodities,
              ensuring their availability and accessibility to those in need,
              particularly in the case of health emergencies. <br /> <br /> At
              the country level, JEAP partners are jointly assisting countries
              in customizing their EPR strategies by conducting comprehensive
              scoping missions. These missions involve detailed mapping of EPR
              structures and a thorough assessment of health system capabilities
              in order to define a list of priority actions and a road map –
              including building OSL capacities for the country. Additionally,
              JEAP helps countries accurately evaluate the costs to precisely
              inform plans for resource mobilization from potential donors.
              Since 2022, Africa CDC and WHO have conducted 23 scoping missions
              in countries including Sierra Leone, Ghana, and Uganda. Based on
              these action plans, country governments have issued specific
              requests for capacity filling from JEAP’s OSL experts, such as
              quantifying supplies needed for a response to specific diseases.
            </Paragraph>
          </div>

          {/* Image - Full width on both mobile and desktop, appears at bottom */}
          <div className="lg:col-span-12 order-4 lg:mt-4">
            <div className="relative w-full bg-[#315c71] bg-opacity-75 text-white p-4 md:p-8">
              <p className="md:text-2xl text-xl md:leading-[2.5rem]">
                This successful model of partnership is critical to the success
                of OSL across Africa. There is an immediate opportunity to
                streamline support by merging country requests so that they are
                addressed jointly to both JEAP partner organizations, rather
                than issuing separate requests. Additionally, JEAP partners can
                develop integrated response plans that encompass, but are not
                limited to, OSL support for country governments. In the
                long-term, the JEAP Partners aim to collaborate on sharing
                warehouse facilities, conducting joint procurement of stock.
                These collective efforts will lead to improvements in the supply
                chains required to prepare for and respond to health emergencies
                across the continent more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
