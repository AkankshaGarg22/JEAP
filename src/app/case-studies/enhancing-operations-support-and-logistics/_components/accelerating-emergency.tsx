import AnimatedHeading from "../../_components/AnimatedHeading";
import Paragraph from "../../_components/paragraph";

export default function AcceleratingEmergency() {
  return (
    <section className="max-w-7xl mx-auto my-4 md:my-0 px-8 md:px-0">
      <div className="flex flex-col md:flex-row items-stretch justify-center md:justify-between gap-4 md:gap-0 md:mb-12">
        <div className="md:w-[45%] h-full flex flex-col justify-center items-start md:p-4 gap-12 ">
          <img
            className="w-full h-full object-contain"
            src="/assets/blog/case-studies/Enhancing Operations Support and Logistics/webp/Habinshuti M.Gorette_3L7A0736.jpg"
            alt="Accelrating Emergency"
          />
        </div>

        <div className="md:w-[50%] h-full flex flex-col items-start md:p-4 md:gap-12 gap-8">
          <AnimatedHeading linecolor="black" width="20%" className="">
          Accelerating Emergency Response Time: A Closer Look at the Nairobi Response Hub
          </AnimatedHeading>

          <Paragraph>
            The OSL efforts implemented by the hub based in Nairobi, Kenya have
            significantly reduced delivery times for emergency supplies, from an
            average of 25 days to 3-5 days. This improvement is transformative
            for African lives across the continent as it ensures that critical
            medical supplies reach those in need more rapidly and efficiently. A
            key factor in this improvement was the integration of supply and
            preparedness databases, which enhanced planning, streamlined
            resource allocation, and enabled more timely deployment of supplies.{" "}
            <br /> <br /> Another one of their strategies is local and regional
            sourcing to diversify and increase the number of vetted suppliers in
            Africa. By doing so, during emergency responses, procurement of
            emergency supplies can be expedited and delivered to the countries
            in need rapidly.
          </Paragraph>
        </div>
      </div>
    </section>
  );
}
