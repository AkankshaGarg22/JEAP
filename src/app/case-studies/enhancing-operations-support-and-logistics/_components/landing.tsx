import Image from "next/image";
import MainHeading from "../../_components/main-heading";
import AnimatedHeading from "../../_components/AnimatedHeading";
import Paragraph from "../../_components/paragraph";
import TranslucentBox from "../../_components/textWhiteBox";
import Link from "next/link";

export default function Landing() {
  return (
    <section className="min-h-screen bg-[##1b5632]">
      {/* Main Hero Section with Overlay Text */}
      <div className="relative">
        <div className="w-full h-[62vh] md:h-[50vh] lg:h-[80vh] relative">
          <Image
            src="/assets/blog/case-studies/Enhancing Operations Support and Logistics/webp/enhancing-logistic-support-landing.webp"
            alt="Enhancing Operations Support and Logistics"
            layout="fill"
            objectFit="cover"
            priority
          />
                        {/* Sticky Top-Right Button */}
      <div className="sticky top-0 z-50 flex justify-end px-4 py-2 bg-transparent">
        <Link
          href="#"
          className="flex items-center gap-2 px-4 py-2 rounded-md border border-green-600 bg-green-400 text-white hover:bg-white hover:text-green-600 transition-all duration-200"
        >
          <span className="hidden md:inline font-semibold">BACK</span>
          <span className="text-xl font-bold">←</span>
        </Link>
      </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1b5632]"></div>

          {/* Hero Text */}
          {/* <div className="absolute bottom-10 w-full">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
              <MainHeading className="mb-4 text-white">
                ENHANCING OPERATIONS SUPPORT AND LOGISTICS FOR IMPROVED
                EMERGENCY PREPAREDNESS AND RESPONSE IN AFRICA
              </MainHeading>
            </div>
          </div> */}
        </div>
      </div>

      {/* Main Content */}
      <div className="md:pt-6  bg-gradient-to-b from-[#1b5632] via-[#195334] to-[#01205d] text-white">
        <MainHeading className="text-white max-w-7xl mx-auto text-left px-6 md:px-12 py-8">
          ENHANCING OPERATIONS SUPPORT AND LOGISTICS FOR IMPROVED EMERGENCY
          PREPAREDNESS AND RESPONSE IN AFRICA
        </MainHeading>
        <div className="max-w-7xl mx-auto lg:grid md:grid-cols-1 lg:grid-cols-12 gap-6 px-6 md:px-12 py-8 md:py-10">
          {/* Subtitle - Full width on mobile, 4/12 on desktop */}
          <div className="lg:col-span-4 order-1">
            <AnimatedHeading className="mb-8" linecolor="white">
              THE CRITICAL ROLE OF OPERATIONS SUPPORT AND LOGISTICS (OSL)
            </AnimatedHeading>
          </div>

          {/* Paragraph - Full width on mobile, 8/12 on desktop */}
          <div className="lg:col-span-8 order-2">
            <Paragraph>
              The global COVID-19 pandemic presented an unprecedented challenge
              to the world. The global supply chain for essential supplies
              collapsed within weeks of the WHO’s declaration of a global
              pandemic on March 11, 2020. Restrictions on imports and exports,
              border closures, and national shutdowns caused catastrophic supply
              chain disruptions. Shortages and price spikes were commonplace, as
              was the proliferation of inferior products. As the outbreak
              spread, affecting almost every nation in the world, it became
              evident that the availability of PPE, for instance, was a critical
              component to emergency preparedness and response. Yet with the
              manufacturing of much of the world’s PPE concentrated in China and
              India, the pandemic exposed the global reliance on a few key
              suppliers.
            </Paragraph>
          </div>

          {/** Image on left and text */}
          <div className="col-span-12 order-3 mt-6 flex flex-col md:flex-row gap-10 md:text-xl">
            <div className="relative w-full md:w-[60%]">
              <img
                src="/assets/blog/case-studies/Enhancing Operations Support and Logistics/webp/landing-image-2.webp"
                alt="Logistic support"
                className="w-full"
              />
            </div>
            <div className="w-full">
              <Paragraph>
                Africa was disproportionately impacted by supply chain
                disruptions due to a high dependence on imports for essential
                medical supplies such as PPE, price surges straining their
                limited domestic budgets, and the harsh reality of supplier
                nations prioritizing their own needs. For instance, it took 21
                days for the first shipment of protective equipment such as
                masks to reach African countries<sup>1</sup>. Before the
                pandemic, African countries sourcing emergency medical supplies
                with support from the World Health Organization (WHO) were
                primarily reliant on three warehouses located in China, the UAE,
                and Ghana. Shipping supplies from Ghana to other African
                countries took approximately 25 days, while deliveries from
                Dubai and China were even slower.<sup>2</sup> These long lead
                times, which were a significant problem before the pandemic,
                became even more critical during it, contributing to the loss of
                millions of lives.
              </Paragraph>
            </div>
          </div>

          <div className="col-span-12 order-4 md:text-2xl p-8">
            <div className="bg-gradient-to-t from-[#1D5539] to-[#1E2859]">
              <TranslucentBox
                text="Today, Africa is witnessing continent-wide outbreaks of other diseases such as yellow fever, ongoing challenges with cholera and Mpox, persistent polio transmission despite global eradication efforts, and concerning spikes in dengue and measles. The frequency of these disease outbreaks is further worsened by the impact of climate change and conflict, oftentimes generating full-blown humanitarian crises. This reality illustrates the urgent need for Operations Support and Logistics (OSL) support in effective public health emergency responses to ensure the timely delivery of vital resources, personnel, and equipment to those most affected."
                backgroundColor="rgba(255, 255, 255, 0)"
                className="font-[15px] text-white font-ArialRegular"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
