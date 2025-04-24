import Image from "next/image";

export function GradedEmergencies() {
  return (
    <div id="emergencies" className="md:pt-18 py-6 relative">
      <Image
        src="/assets/blog/jpgs/Rectangle 1946.png"
        alt="resource-page"
        fill
      ></Image>

      <div className="flex flex-col lg:flex-row items-center justify-center " id="gradedemergencies">
        <h2 className="text-2xl md:text-7xl text-white opacity-100 flex justify-center font-[arial-bold] md:p-5 p-2 relative">
          GRADED EMERGENCIES
        </h2>
      </div>
      <div className="flex flex-col px-5 py-5 lg:py-10 lg:px-16 z-[10] items-center relative text-white">
        <h3 className="lg:text-2xl text-md">
          Want to know what the JEAP has been doing to tackle the mpox outbreak?
        </h3>
      </div>
      <div className="flex flex-col lg:flex-row justify-evenly p-4 gap-[2rem] lg:px-16 w-full z-[10] relative  text-white">
        <div className="lg:text-xl lg:w-[60%]">
          <p>
            On August 13, 2024, the Africa CDC declared the mpox outbreak a
            Public Health Emergency of Continental Security (PHECS).
          </p>
          <p className="lg:py-10 py-5"></p>
          <p>
            {" "}
            The following day, the WHO declared it a Public Health Emergency of
            International Concern (PHEIC).
          </p>
          <p>
            A coordinated, continent-wide response is essential, co-led by the
            African Union (AU) through the Africa CDC and the World Health
            Organization (WHO), in close collaboration with global partners
            working under a unified plan, budget, and monitoring framework.
          </p>
          <p className="lg:py-10 py-5"></p>
          <div className="flex w-100 xl:justify-start xl:items-start items-center justify-center m-0 p-0">
          <a
            className="flex justify-start items-start w-[200px] overflow-visible"
            href="/assets/blog/MPOX-CONTINENTAL-PREPAREDNESS-AND-RESPONSE-PLAN-FOR-AFRICA_Final-Edit.pdf"
            download="MPOX-CONTINENTAL-PREPAREDNESS-AND-RESPONSE-PLAN-FOR-AFRICA_Final-Edit"
            target="_blank"
          >
            
            {/* <div className="flex flex-row gap-[5px]">
              <p>Read more</p>
              <Image
                color="white"
                src="/assets/blog/arrow-right.png"
                alt="resource-page"
                height={20}
                width={20}
              ></Image>
            </div> */}
  
             <button className="hover-button">
               <img className="icon" src="/assets/blog/chevron-right-solid base.png" alt="icon" />
     
                 <span className="button-text">Read More</span>
             </button>
          </a>
          </div>
        </div>
        <a
          className="flex justify-center items-center lg:w-[40%]"
          href="/assets/blog/MPOX-CONTINENTAL-PREPAREDNESS-AND-RESPONSE-PLAN-FOR-AFRICA_Final-Edit.pdf"
          download="MPOX-CONTINENTAL-PREPAREDNESS-AND-RESPONSE-PLAN-FOR-AFRICA_Final-Edit"
          target="_blank"
        >
          <div className="flex justify-center items-center relative h-[400px] w-[300px] mx-auto md:block hidden">
            <img
              src="/assets/blog/m-pox-cover.jpg"
              className="relative h-[380px] w-[280px]"
              alt="resource-plan"
            ></img>
            <div className="absolute  inset-0 bg-black bg-opacity-[0.58] opacity-0 transition-opacity duration-500 hover:opacity-100 h-[350px] w-[250px] m-[14px]">
              <div className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] transform transition-transform duration-500 ease-out hover:scale-150 flex flex-col items-center gap-4">
                <img
                  height={60}
                  width={60}
                  src="/assets/blog/Path 14204 2.svg"
                ></img>
                <div className="m-[0 auto] w-[90%]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="150"
                    height="34"
                    viewBox="0 0 200 34"
                  >
                    <text
                      id="Download_PDF"
                      data-name="Download PDF"
                      transform="translate(0 27)"
                      fill="#fff"
                      fontSize="24"
                      fontFamily="arial-bold"
                    >
                      <tspan x="0" y="0">
                        Download PDF
                      </tspan>
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center relative h-[200px] w-[150px] mx-auto md:hidden block">
            <img
              src="/assets/blog/m-pox-cover.jpg"
              className="relative "
              alt="resource-plan"
            ></img>
            <div className="absolute inset-0 bg-black bg-opacity-[0.58] opacity-0 transition-opacity duration-500 hover:opacity-100 h-[170px] w-[130px] m-[10px]">
              <div className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] transform transition-transform duration-500 ease-out hover:scale-150 flex flex-col items-center gap-1">
                <img
                  height={20}
                  width={20}
                  src="/assets/blog/Path 14204 2.svg"
                ></img>
                <div className="m-[0 auto] w-[90%]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="70"
                    height="34"
                    viewBox="0 0 200 34"
                  >
                    <text
                      id="Download_PDF_1"
                      data-name="Download PDF"
                      transform="translate(0 27)"
                      fill="#fff"
                      fontSize="24"
                      fontFamily="arial-bold"
                    >
                      <tspan x="0" y="0">
                        Download PDF
                      </tspan>
                    </text>
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

export default GradedEmergencies;
