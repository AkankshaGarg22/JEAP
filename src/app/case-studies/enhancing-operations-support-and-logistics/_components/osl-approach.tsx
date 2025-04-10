import Image from "next/image";
import Paragraph from "../../_components/paragraph";
import SubHeading from "../../_components/sub-heading";
import AnimatedHeading from "../../_components/AnimatedHeading";

export default function OslApproach() {
  return (
    <section className="min-h-screen bg-white">
      <div className=" md:p-10 relative bg-gradient-to-b to-[#1b5632] via-[#195334] from-[#01205d] text-white">
        <div className="relative h-full w-full mx-auto flex justify-center">
          <Image
            src="/assets/blog/case-studies/Enhancing Operations Support and Logistics/webp/osl-approach-partnership.jpg"
            alt="Logistic support"
            className="md:mt-[-10%] w-full md:w-[80%] md:h-[650px] h-[300px]"
            width={800}
            height={0}
          />
        </div>

        <div className="w-[80%] mx-auto md:flex justify-evenly lg:grid lg:grid-cols-12">
        <div className="block md:hidden container mx-auto pt-8">
          <AnimatedHeading linecolor="white" fontSize="1.2rem">
          Institutional Partnerships at the Center of the JEAP’s OSL Approach
          </AnimatedHeading>
        </div>
          <Paragraph className="py-8 md:py-12 col-span-8 order-1">
            In addition to forging an innovative partnership with one another,
            the JEAP partners<sup>3</sup> are helping to facilitate new partnerships
            between governments, airlines, transport companies, and other
            logistics and manufacturing units. The Africa Medical Supplies
            Platform (AMSP) is collaborating with logistics providers to
            streamline the transportation of medical supplies across the
            continent. The Partnership to Accelerate COVID-19 Testing (PACT) is
            working with airlines to ensure the efficient and timely delivery of
            testing kits to remote areas. Meanwhile, the Partnership for African
            Vaccine Manufacturing (PAVM) Initiative is forging partnerships with
            manufacturing units to boost local vaccine production capacity and
            supply chain resilience. Increasing the number of African
            manufacturers on the WHO prequalification list is a critical step
            towards strengthening healthcare systems on the continent.
          </Paragraph>
          <div className="col-span-4 col-start-10 order-2 flex items-center">
            <div className="hidden md:block relative w-full bg-[#386d64] text-white p-8 before:content-[''] before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:-translate-x-full before:border-t-[25px] before:border-b-[25px] before:border-r-[25px] before:border-t-transparent before:border-b-transparent before:border-r-[#386d64]">
              <div className="container mx-auto">
                <AnimatedHeading linecolor="white">
                Institutional Partnerships at the Center of the JEAP’s OSL Approach
                </AnimatedHeading>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
