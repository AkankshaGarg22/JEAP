import Image from "next/image";

export default function OslApproach() {
  return (
    <section className="min-h-screen bg-white">
      <div className=" md:p-10 relative bg-gradient-to-b to-[#1b5632] via-[#195334] from-[#01205d] text-white">
        <div className="relative h-full w-full mx-auto flex justify-center">
          <Image
            src="/assets/blog/case-studies/Enhancing Operations Support and Logistics/webp/osl-approach-partnership.webp"
            alt="Logistic support"
            className="mt-[-10%] w-[80%] h-[650px]"
            width={800} height={0}
          />
        </div>
        <div className="w-[80%] md:text-xl mx-auto md:leading-8 flex justify-evenly">
            <p className="pt-8">In addition to forging an innovative partnership with one another, the JEAP partners3 are helping to facilitate new partnerships between governments, airlines, transport companies, and other logistics and manufacturing units. The Africa Medical Supplies Platform (AMSP) is collaborating with logistics providers to streamline the transportation of medical supplies across the continent. The Partnership to Accelerate COVID-19 Testing (PACT) is working with airlines to ensure the efficient and timely delivery of testing kits to remote areas. Meanwhile, the Partnership for African Vaccine Manufacturing (PAVM) Initiative is forging partnerships with manufacturing units to boost local vaccine production capacity and supply chain resilience. Increasing the number of African manufacturers on the WHO prequalification list is a critical step towards strengthening healthcare systems on the continent.</p>
            <div></div>
        </div>
      </div>
    </section>
  );
}
