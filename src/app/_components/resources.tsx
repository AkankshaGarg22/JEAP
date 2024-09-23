import Image from "next/image";

export function Resources() {

  return (
    <div id="resources" className="md:pt-18 py-6 relative">
      <Image src="/assets/blog/jpgs/Group 3343.webp" alt="resource-page" fill></Image>
      <div className="flex flex-col lg:flex-row items-center justify-center ">
        <h2 className="text-3xl md:text-7xl text-white opacity-100 flex justify-center font-[arial-bold] md:p-5 p-2 relative">
          RESOURCES
        </h2>
      </div>
    <div className="flex flex-col sm:space-y-[60px] lg:space-y-0 md:space-y-0 lg:space-x-[100px] lg:flex-row justify-center items-center">
      <a className="flex justify-center items-center" href="/assets/blog/Joint EPR Detailed Action Plan Final Report.pdf" download="Joint EPR Detailed Action Plan Final Report.pdf" target='_blank'>
        <div className="flex justify-center items-center relative h-[400px] w-[300px] mx-auto md:block hidden">
          <img src="/assets/blog/Resources_plan.png" className="relative h-[380px] w-[280px]" alt="resource-plan"></img>
          <div className="absolute  inset-0 bg-black bg-opacity-[0.58] opacity-0 transition-opacity duration-500 hover:opacity-100 h-[350px] w-[250px] m-[14px]">
            <div className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] transform transition-transform duration-500 ease-out hover:scale-150 flex flex-col items-center gap-4">
              <img height={60} width={60} src="/assets/blog/Path 14204 2.svg"></img>
              <div className="m-[0 auto] w-[90%]">
                <svg xmlns="http://www.w3.org/2000/svg" width="150" height="34" viewBox="0 0 200 34">
                  <text id="Download_PDF" data-name="Download PDF" transform="translate(0 27)" fill="#fff" fontSize="24" fontFamily="arial-bold"><tspan x="0" y="0">Download PDF</tspan></text>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center relative h-[200px] w-[150px] mx-auto md:hidden block">
          <img src="/assets/blog/Resources_plan.png" className="relative " alt="resource-plan"></img>
          <div className="absolute inset-0 bg-black bg-opacity-[0.58] opacity-0 transition-opacity duration-500 hover:opacity-100 h-[170px] w-[130px] m-[10px]">
            <div className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] transform transition-transform duration-500 ease-out hover:scale-150 flex flex-col items-center gap-1">
              <img height={20} width={20} src="/assets/blog/Path 14204 2.svg"></img>
              <div className="m-[0 auto] w-[90%]">
                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="34" viewBox="0 0 200 34">
                  <text id="Download_PDF" data-name="Download PDF" transform="translate(0 27)" fill="#fff" fontSize="24" fontFamily="arial-bold"><tspan x="0" y="0">Download PDF</tspan></text>
                </svg>
              </div>
            </div>
          </div>
        </div>
        </a>

      <a className="flex justify-center items-center" href="/assets/blog/Final Digital Brochure File.pdf" download="Joint EPR Digital Brochure.pdf" target='_blank'>
        <div className="flex justify-center items-center relative h-[400px] w-[300px] mx-auto md:block hidden">
          <img src="/assets/blog/Joint EPR Digital Brochure.jpg" className="relative h-[380px] w-[280px]" alt="resource-plan"></img>
          <div className="absolute inset-0 bg-black bg-opacity-[0.58] opacity-0 transition-opacity duration-500 hover:opacity-100 h-[350px] w-[250px] m-[14px]">
            <div className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] transform transition-transform duration-500 ease-out hover:scale-150 flex flex-col items-center gap-4">
              <img height={60} width={60} src="/assets/blog/Path 14204 2.svg"></img>
              <div className="m-[0 auto] w-[90%]">
                <svg xmlns="http://www.w3.org/2000/svg" width="150" height="34" viewBox="0 0 200 34">
                  <text id="Download_PDF" data-name="Download PDF" transform="translate(0 27)" fill="#fff" fontSize="24" fontFamily="arial-bold"><tspan x="0" y="0">Download PDF</tspan></text>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center relative h-[200px] w-[150px] mx-auto md:hidden block">
          <img src="/assets/blog/Joint EPR Digital Brochure.jpg" className="relative" alt="resource-plan"></img>
          <div className="absolute inset-0 bg-black bg-opacity-[0.58] opacity-0 transition-opacity duration-500 hover:opacity-100 h-[170px] w-[130px] m-[10px]">
            <div className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] transform transition-transform duration-500 ease-out hover:scale-150 flex flex-col items-center gap-1">
              <img height={20} width={20} src="/assets/blog/Path 14204 2.svg"></img>
              <div className="m-[0 auto] w-[90%]">
                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="34" viewBox="0 0 200 34">
                  <text id="Download_PDF" data-name="Download PDF" transform="translate(0 27)" fill="#fff" fontSize="24" fontFamily="arial-bold"><tspan x="0" y="0">Download PDF</tspan></text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </a>

      <a className="flex justify-center items-center" href="/assets/blog/Final Case Study File Draft 6.pdf" download="Joint EPR Final Case Study.pdf" target='_blank'>
        <div className="flex justify-center items-center relative h-[400px] w-[300px] mx-auto md:block hidden">
          <img src="/assets/blog/Joint EPR Final Case Study.jpg" className="relative h-[380px] w-[280px]" alt="resource-plan"></img>
          <div className="absolute inset-0 bg-black bg-opacity-[0.58] opacity-0 transition-opacity duration-500 hover:opacity-100 h-[350px] w-[250px] m-[14px]">
            <div className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] transform transition-transform duration-500 ease-out hover:scale-150 flex flex-col items-center gap-4">
              <img height={60} width={60} src="/assets/blog/Path 14204 2.svg"></img>
              <div className="m-[0 auto] w-[90%]">
                <svg xmlns="http://www.w3.org/2000/svg" width="150" height="34" viewBox="0 0 200 34">
                  <text id="Download_PDF" data-name="Download PDF" transform="translate(0 27)" fill="#fff" fontSize="24" fontFamily="arial-bold"><tspan x="0" y="0">Download PDF</tspan></text>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center relative h-[200px] w-[150px] mx-auto md:hidden block">
          <img src="/assets/blog/Joint EPR Final Case Study.jpg" className="relative" alt="resource-plan"></img>
          <div className="absolute inset-0 bg-black bg-opacity-[0.58] opacity-0 transition-opacity duration-500 hover:opacity-100 h-[170px] w-[130px] m-[10px]">
            <div className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] transform transition-transform duration-500 ease-out hover:scale-150 flex flex-col items-center gap-1">
              <img height={20} width={20} src="/assets/blog/Path 14204 2.svg"></img>
              <div className="m-[0 auto] w-[90%]">
                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="34" viewBox="0 0 200 34">
                  <text id="Download_PDF" data-name="Download PDF" transform="translate(0 27)" fill="#fff" fontSize="24" fontFamily="arial-bold"><tspan x="0" y="0">Download PDF</tspan></text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
      {/* <div className="flex flex-row justify-around p-8">
        
        <a className="flex justify-center items-center" href="/assets/blog/Joint EPR Detailed Action Plan Final Report.pdf" download="Joint EPR Detailed Action Plan Final Report.pdf" target='_blank'>
          <img src="/assets/blog/Download-pdf.png" height={400} width={300} className="relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 md:block hidden" alt="download-button"></img>
          <img src="/assets/blog/Download-pdf.png" height={150} width={100} className="relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 md:hidden block" alt="download-button"></img>

        </a>
      </div> */}
    </div>
  );
}

export default Resources;
