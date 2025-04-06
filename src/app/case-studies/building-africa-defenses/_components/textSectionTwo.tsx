import React from "react";
import TranslucentBox from "./textWhiteBox";
import Paragraph from "../../_components/paragraph";

const TextSectionTwo = () => {
  return (
    
    <div className="w-full flex flex-col items-center gap-6 justify-center h-auto bg-white lg:py-12 py-4">
      {/* Most recently, the COVID-19 pandemic was met with insufficient genomic sequencing capacities in Africa,  */}
      <div className="lg:w-[80%] w-full flex flex-col lg:flex-row h-auto bg-white items-center justify-center">
        <div className="bg-transparent lg:w-[35%] w-[80%] lg:h-[450px] h-[200px] lg:translate-y-[0px] translate-y-[35px] ">
          <img
            src="/assets/blog/case-studies/Building_Africa_Defenses/webp/Rectangle 2882.webp"
            className="h-full w-[100%] object-cover object-center"
          ></img>
        </div>

        <div className="bg-gradient-to-t from-[#1E2859] to-[#1D5539] lg:w-[65%] w-[90%] px-12 py-12">
          <div className="bg-[rgba(255, 255, 255, 0)] text-white md:leading-6"          >
           <Paragraph><strong className="font-[900] text-lg">Most recently, the COVID-19 pandemic was met with insufficient genomic sequencing capacities in Africa,</strong> which hampered the continent’s responses and strategies. At the start of the pandemic, only four countries in the region – Kenya, Nigeria, Senegal and South Africa – had the capacity to sequence SARS-CoV-2. It took African nations up to 50 days to sequence 7,000 genomes, compared to 25 days for 590,000 genomes in Europe and 26 days for more than 498,000 genomes in the USA.^^9^^ The genome sequencing delays prevented the virus’s real-time tracking across communities and borders, allowing it to spread without detection, further delaying Africa’s response efforts.</Paragraph>
          </div>
        </div>
      </div>

      <div className="lg:w-[80%] w-[90%] flex h-auto bg-white items-center justify-center">
       <Paragraph className="w-full p-0">
          <b className="font-bold text-lg">
            The impacts of limited genomic sequencing capacity extended beyond
            the continent. <br></br>
          </b>
          By November 2020, only 2% of the SARS-CoV-2 sequences submitted to the
          Global Initiative on Sharing All Influenza Data (GISAID), one of the
          world’s largest repositories of COVID-19 sequences, were from the WHO
          Africa region. GISAID was critical to monitoring the emergence of new
          COVID-19 viral strains worldwide and, as such, Africa’s limited
          contribution to these efforts created a blind spot globally.
        
        </Paragraph>
      </div>

      <div className="lg:w-[80%] w-full flex flex-col-reverse lg:flex-row h-auto bg-white items-center justify-center">
        <div className="bg-gradient-to-t from-[#1E2859] to-[#1D5539] w-[90%] lg:w-[65%] px-12 py-12">
          <Paragraph className="text-white">Today, surveillance systems and technologies across the continent generally continue to fall behind. Only 12 countries 26% <sup>10</sup> meet the desired target of at least 90<sup>11</sup> health facilities with Integrated Disease Surveillance and Response (IDSR) implementation coverage. African countries face general challenges with laboratory diagnostic capacity and skills to manage large and complex datasets, resulting in inadequate detection and risk management.<sup>12</sup> These gaps continue to lead to delays in detecting health emergencies and containing them.</Paragraph>
        </div>

        <div className="bg-transparent lg:w-[35%] w-[80%] h-[200px] lg:h-[450px] lg:translate-y-[0px] translate-y-[35px]">
          <img
            src="/assets/blog/case-studies/Building_Africa_Defenses/webp/02480.webp"
            className="h-full w-full object-cover object-center"
          ></img>
        </div>
      </div>
      </div>
  
  
  );
};

export default TextSectionTwo;
