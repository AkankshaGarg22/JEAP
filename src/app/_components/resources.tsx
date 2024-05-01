import Image from "next/image";

export function Resources() {

  return (
    <div id="resources" className="md:pt-24 py-8 relative">
      <Image src="/assets/blog/Resoruces_Background.png" alt="resource-page" fill></Image>
      <div className="flex flex-col lg:flex-row items-center justify-center ">
        <h2 className="text-3xl md:text-7xl absolute text-white opacity-100 flex justify-center font-[compasse-extrabold] p-5 md:top-10">
          RESOURCES
        </h2>
      </div>
      <div className="flex flex-row justify-around p-8">
        <div className="flex justify-center items-center">
          <img src="/assets/blog/Resources_plan.png" height={350} width={200} className="relative md:block hidden" alt="resource-plan"></img>
          <img src="/assets/blog/Resources_plan.png" height={150} width={100} className="relative md:hidden block" alt="resource-plan"></img>

        </div>
        <a className="flex justify-center items-center" href="/assets/blog/Joint EPR Detailed Action Plan Final Report.pdf" download="Joint EPR Detailed Action Plan Final Report.pdf" target='_blank'>
          <img src="/assets/blog/Download-pdf.png" height={350} width={200} className="relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 md:block hidden" alt="download-button"></img>
          <img src="/assets/blog/Download-pdf.png" height={150} width={100} className="relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 md:hidden block" alt="download-button"></img>

        </a>
      </div>
    </div>
  );
}

export default Resources;
