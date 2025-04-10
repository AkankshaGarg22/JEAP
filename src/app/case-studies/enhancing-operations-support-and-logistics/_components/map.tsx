import AnimatedHeading from "../../_components/AnimatedHeading";
import Paragraph from "../../_components/paragraph";
import SubHeading from "../../_components/sub-heading";

export default function Map() {
  return (
    <section className="max-w-7xl mx-auto px-2 mb-12 ">
      <div className="hidden md:block">
        <SubHeading className="lg:text-center">
          Figure: Response operations and support from WHO AFRO as of June 2024.
        </SubHeading>
        {/**Map 1 */}
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 py-10">
          <div className="md:w-[50%] h-full flex flex-col justify-between">
            <AnimatedHeading linecolor="black" width="20%">
              Legend
            </AnimatedHeading>
            <img
              className="w-[80%] object-contain mt-[-10%]"
              src="/assets/blog/case-studies/Enhancing Operations Support and Logistics/operations-1.svg"
              alt="JEAP Response operations"
            />
          </div>

          <div className="md:w-[70%] flex justify-center items-center p-8 bg-[#A6BCAF] md:rounded-[45px] relative">
            <img
              src="/assets/blog/case-studies/Enhancing Operations Support and Logistics/Group 5649.svg"
              alt="left arrow"
              className="md:absolute md:right-[95%]"
            ></img>
            <img
              className="w-full h-full object-contain"
              src="/assets/blog/case-studies/Enhancing Operations Support and Logistics/Group 5642.svg"
              alt="JEAP Supported Countries Map"
            />
          </div>
        </div>
        {/**Map 2 */}
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-16">
          <div className="md:w-[70%] flex justify-center items-center p-8 bg-[#A6BCAF] md:rounded-[45px] relative">
            <img
              src="/assets/blog/case-studies/Enhancing Operations Support and Logistics/Group 5240.svg"
              alt="map"
              className="w-full h-full object-contain"
            ></img>
            <img
              src="/assets/blog/case-studies/Enhancing Operations Support and Logistics/Group 5670.svg"
              alt="right arrow"
              className="md:absolute md:left-[95%]"
            ></img>
          </div>
          <div className="md:w-[50%] h-full flex flex-col justify-between">
            <AnimatedHeading linecolor="black" width="20%">
              Legend
            </AnimatedHeading>
            <img
              className="w-[80%] object-contain mt-[-10%]"
              src="/assets/blog/case-studies/Enhancing Operations Support and Logistics/Group 5676.svg"
              alt="JEAP Response operations"
            />
          </div>
        </div>
      </div>
      {/** Mobile section */}
      <div className="block md:hidden">
        <SubHeading>
          Figure: Response operations and support from WHO AFRO as of June 2024.
        </SubHeading>
        {/**Map 1 */}
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 py-8">
          <div className="md:w-[70%] flex justify-center items-center p-8 bg-[#A6BCAF] md:rounded-[45px] relative">
            <img
              className="w-full h-full object-contain"
              src="/assets/blog/case-studies/Enhancing Operations Support and Logistics/Group 5642.svg"
              alt="JEAP Supported Countries Map"
            />
          </div>
          <div className="md:w-[50%] h-full flex flex-col justify-between">
            <AnimatedHeading linecolor="black" width="20%">
              Legend
            </AnimatedHeading>
            <img
              className="w-[80%] object-contain mt-[-10%]"
              src="/assets/blog/case-studies/Enhancing Operations Support and Logistics/operations-1.svg"
              alt="JEAP Response operations"
            />
          </div>
        </div>
        {/**Map 2 */}
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4">
          <div className="md:w-[70%] flex justify-center items-center p-8 bg-[#A6BCAF] md:rounded-[45px] relative">
            <img
              src="/assets/blog/case-studies/Enhancing Operations Support and Logistics/Group 5240.svg"
              alt="map"
              className="w-full h-full object-contain"
            ></img>
          </div>
          <div className="md:w-[50%] h-full flex flex-col justify-between">
            <AnimatedHeading linecolor="black" width="20%">
              Legend
            </AnimatedHeading>
            <img
              className="w-[80%] object-contain mt-[-10%]"
              src="/assets/blog/case-studies/Enhancing Operations Support and Logistics/Group 5676.svg"
              alt="JEAP Response operations"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
