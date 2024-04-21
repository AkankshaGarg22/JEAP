import Image from "next/image";

export function Resources() {

  return (
    <div id="resources" className="md:pt-24 py-8 relative">
      <Image className="" src="/assets/blog/Resoruces_Background.png" alt="resource-page" fill></Image>
      <div className="flex flex-col lg:flex-row items-center justify-center ">
        <h2 className="text-2m md:text-6xl absolute text-white opacity-100 flex justify-center font-[compasse-extrabold] md:top-10">
          RESOURCES
        </h2>
      </div>
      <div className="flex flex-row justify-around p-4 md:p-0">
        <div className="flex justify-center items-center">
          <Image src="/assets/blog/Resources_plan.png" fill className="resource-image" alt="resource-plan"></Image>
        </div>
        <div className="md:mt-24 mt-8">
          <a className="flex justify-center items-center" href="/assets/blog/Joint EPR Detailed Action Plan Final Report.pdf" download="Joint EPR Detailed Action Plan Final Report.pdf" target='_blank'>
            <Image src="/assets/blog/Download-pdf.png" fill className="resource-image transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" alt="download-button"></Image>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Resources;
