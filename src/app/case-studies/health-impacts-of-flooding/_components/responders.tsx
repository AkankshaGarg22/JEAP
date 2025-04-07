import Image from "next/image";
import AnimatedHeading from "../../_components/AnimatedHeading";
import Paragraph from "../../_components/paragraph";

export default function Responders() {
  return (
    <section className="relative w-full bg-gradient-to-br from-[#00205C] to-[#1A5632] my-12 md:mt-24 md:mb-12">
      {/* Content Container */}
      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col-reverse lg:flex-row lg:items-stretch lg:justify-between lg:my-4 ">
          {/* Text Content - Takes full width on mobile, ~60% on desktop */}
          <div className="lg:w-3/5 pt-8 pb-4 lg:pt-16 px-6 md:px-12 lg:px-16">
            <AnimatedHeading linecolor="white" className="text-white">
              WHAT WE CAN LEARN: INVEST IN PREPAREDNESS, INVEST IN PEOPLE.
            </AnimatedHeading>

            <Paragraph className="text-gray-100 mt-8 md:mt-12">
              Congo's response shows the value of having standby, well-trained, multi-disciplinary and multisectoral national teams in place, ready to activate and deploy in the face of any emergency.
              It demonstrates that a relatively small emergency health workforce can have a big impact when organized by government leadership and supported by collaborative partners. It shows
              preparedness can work.
              <br />
              <br />
              So far, Africa CDC and WHO have rolled out AVoHC-SURGE in 16 Member States. The agencies have onboarded and trained 1,348 African health emergency responders, leveraged a joint database
              and protocols, and supported governments to activate teams within their own borders and deploy experts to neighboring countries. The ambition of the program is to enroll a total of 3,000
              responders and equip them with comprehensive training and resources.
            </Paragraph>
          </div>

          {/* Image Container - Will stretch to match content height */}
          <div className="lg:w-2/5 lg:p-16">
            <div className="h-80 lg:h-full w-full">
              <img src="/assets/blog/case-studies/flooding in the Republic of Congo/Webp/4.webp" alt="Woman health worker walking in a green field" className="object-cover h-full w-full" />
            </div>
          </div>
        </div>

        <div className="w-full p-4 pb-8 md:pt-8 md:pb-16">
          <Paragraph className="bg-[#386d64] p-4 lg:p-8  text-white">
            Continuing to invest in Africa’s frontline responders will be essential to addressing public health emergencies across the continent. As climate change increases the frequency and severity
            of extreme weather events, the time is now to prepare. People, including responders and the communities they serve, must be at the center of preparedness.
          </Paragraph>
        </div>
      </div>
    </section>
  );
}
