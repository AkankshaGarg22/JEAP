import AnimatedHeading from "../../_components/AnimatedHeading";

export default function Map() {
  return (
    <section className="max-w-6xl mx-auto px-2 md:px-12 mb-12">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 md:gap-0 mb-4">
        <div className="md:w-[50%] h-full flex flex-col justify-between gap-12">
          <AnimatedHeading linecolor="black" fontSize="1.5rem" className="w-[70%]">
            MAP OF COUNTRIES THAT HAVE SUBMITTED PROPOSALS WITH JEAP SUPPORT:
          </AnimatedHeading>

          <p className="text-base lg:text-xl md:leading-8 font-semibold order-2">
            The Partnership looks forward to reviewing the results and
            continuing to align and strengthen continental resource mobilization
            for EPR. Additionally, an extensive exercise is underway to document
            this experience, celebrating the power of collective action,
            highlighting lessons learned and providing a playbook that other
            regions can replicate and adapt. The JEAP will actively disseminate
            and utilize this playbook to help ensure that countries are prepared
            for the next round of the Pandemic Fund and related opportunities.
          </p>
        </div>

        <div className="md:w-[50%] flex justify-center items-center p-4">
          <img
            className="w-full h-full object-contain"
            src="/assets/blog/case-studies/Collaboration for Resilience/Webp/map.svg"
            alt="JEAP Supported Countries Map"
          />
        </div>
      </div>

      <div className="w-full h-64 md:h-[30rem]">
        <img
          className="h-full w-full object-cover object-center"
          src="/assets/blog/case-studies/Collaboration for Resilience/Webp/4.webp"
          alt=""
        />
      </div>
    </section>
  );
}
