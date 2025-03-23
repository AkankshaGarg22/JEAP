export default function Forward() {
  return (
    <section className="max-w-6xl mx-auto bg-white py-8 sm:px-10">
      <div className="grid grid-cols-1 md:grid-cols-5 items-center md:gap-6">
        {/* Image Section */}
        <div className="relative w-full md:w-[20rem] col-span-1 h-96 md:h-96">
          <img
            className="w-full md:w-96 h-full object-cover md:absolute top-0 -right-0"
            src="/assets/blog/case-studies/Collaboration for Resilience/Webp/3.webp"
            alt="A Unified Africa for Health Security"
          />
        </div>

        {/* Text Section */}
        <div className="bg-gradient-to-b px-2 col-span-4 from-[#00205C] to-[#1A5632] p-6 md:pl-40 md:py-40 text-white">
          <h3 className="text-2xl font-bold mb-4">WAY FORWARD</h3>
          <div className="w-16 h-1 bg-white mb-6 lg:mb-8"></div>
          <p className="text-sm md:text-lg md:pr-2">
            The Partnership looks forward to reviewing the results and continuing to align and strengthen continental resource mobilization for EPR. Additionally, an extensive exercise is underway to
            document this experience, celebrating the power of collective action, highlighting lessons learned and providing a playbook that other regions can replicate and adapt. The JEAP will
            actively disseminate and utilize this playbook to help ensure that countries are prepared for the next round of the Pandemic Fund and related opportunities.
          </p>
        </div>
      </div>
    </section>
  );
}
