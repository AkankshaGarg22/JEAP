import Image from "next/image";

export function Resources() {
  return (
    <div className="md:pt-72 py-8 relative">
      <Image className="" src="/assets/blog/Resoruces_Background.png" alt="resource-page" fill></Image>
      <div className="flex flex-col lg:flex-row items-center justify-center ">
      <h2 className="text-2m md:text-6xl absolute text-white opacity-100 flex justify-center font-extrabold md:top-20">
       RESOURCES
      </h2>
      </div>
        <div className="flex flex-row justify-around p-4 md:p-0">
            <div>
                <Image src="/assets/blog/Resources_plan.png" fill className="resource-image" alt="resource-plan"></Image>
            </div>
            <div className="md:mt-24 mt-8">
                <Image src="/assets/blog/Download-pdf.png" fill className="resource-image" alt="download-button"></Image>
            </div>
        </div>
    </div>
  );
}

export default Resources;