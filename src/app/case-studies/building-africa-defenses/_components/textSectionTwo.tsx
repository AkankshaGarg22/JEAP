import React from 'react'
import TranslucentBox from './textWhiteBox'

const TextSectionTwo = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center h-auto bg-white py-10">
        <div className="w-[80%] flex flex-col lg:flex-row h-auto bg-white items-center justify-center">
            <div className="bg-transparent w-[25%]">
            <img src="/assets/blog/case-studies/Building Africa’s Defenses/webp/Rectangle 2882.webp" className="h-[325px] w-[100%]"></img>
            </div>

            <div className="bg-gradient-to-t from-[#1E2859] to-[#1D5539] w-[70%]">
            <TranslucentBox 
        text={"**Most recently, the COVID-19 pandemic was met with insufficient genomic sequencing capacities in Africa**, which hampered the continent’s responses and strategies. At the start of the pandemic, only four countries in the region – Kenya, Nigeria, Senegal and South Africa – had the capacity to sequence SARS-CoV-2. It took African nations up to 50 days to sequence 7,000 genomes, compared to 25 days for 590,000 genomes in Europe and 26 days for more than 498,000 genomes in the USA.^^9^^ The genome sequencing delays prevented the virus’s real-time tracking across communities and borders, allowing it to spread without detection, further delaying Africa’s response efforts."}
        backgroundColor="rgba(255, 255, 255, 0)"
        className="font-[15px] text-white font-ArialRegular w-[100%]"
        textsize='text-[18px]'/>            
            </div>
        </div>

        <div className="w-[80%] flex flex-col lg:flex-row h-auto bg-white items-center justify-center">
          <p className="w-[95%] py-10"><b>The impacts of limited genomic sequencing capacity extended beyond the continent. <br></br></b>By November 2020, only 2% of the SARS-CoV-2 sequences submitted to the Global Initiative on Sharing All Influenza Data (GISAID), one of the world’s largest repositories of COVID-19 sequences, were from the WHO Africa region. GISAID was critical to monitoring the emergence of new COVID-19 viral strains worldwide and, as such, Africa’s limited contribution to these efforts created a blind spot globally.</p>
        </div>

        <div className="w-[80%] flex flex-col lg:flex-row h-auto bg-white items-center justify-center">
        <div className="bg-gradient-to-t from-[#1E2859] to-[#1D5539] w-[70%]">
            <TranslucentBox 
        text={"Today, surveillance systems and technologies across the continent generally continue to fall behind. Only 12 countries 26^^10^^ meet the desired target of at least 90^^11^^ health facilities with Integrated Disease Surveillance and Response (IDSR) implementation coverage. African countries face general challenges with laboratory diagnostic capacity and skills to manage large and complex datasets, resulting in inadequate detection and risk management.^^12^^ These gaps continue to lead to delays in detecting health emergencies and containing them."}
        backgroundColor="rgba(255, 255, 255, 0)"
        className="font-[15px] text-white font-ArialRegular w-[100%]"
        textsize='text-[18px]'/>            
            </div>
            <div className="bg-transparent w-[25%]">
            <img src="/assets/blog/case-studies/Building Africa’s Defenses/webp/Rectangle 2882.webp" className="h-[325px] w-[100%]"></img>
            </div>
        </div>
    </div>
  )
}

export default TextSectionTwo