import React from 'react'
import AnimatedHeading from '../../_components/AnimatedHeading'

const TextSectionThree = () => {
  return (
    <div className="bg-gradient-to-b from-[#1E2859] to-[#1D5539] w-full h-auto flex flex-col items-center justify-center py-10">
    <div className="w-[80%] h-auto bg-transparent flex lg:flex-row flex-col items-center justify-center">
        <div className="w-[40%] h-auto">
        <AnimatedHeading linecolor="white" fontSize='20px' className="text-white text-[20px]">
        INCREASED AFRICAN SURVEILLANCE EFFORTS DEMONSTRATE FERTILE GROUND FOR INVESTING IN CONTINENTAL GENOMIC SEQUENCING CAPACITY-BUILDING
      </AnimatedHeading>
        </div>
        <div className="w-[60%] h-auto">
            <p className="text-white py-4">Over the past decade, promising progress has been made to strengthen Africa’s emergency preparedness and response (EPR) systems. In 2020, Africa celebrated the monumental achievement of being declared free of the wild poliovirus. The vigilance of African surveillance systems and early detection was critical in this achievement, as it enabled swift and massive vaccination campaigns, averting 1.8 million new cases.<sup>13</sup> </p><p className="text-white py-2">Africa’s prowess in disease surveillance was further spotlighted in 2021 when scientists at the Network for Genomic Surveillance in South Africa sounded the alarm regarding the emerging Omicron variant during the COVID-19 pandemic. This discovery triggered a worldwide response, enabling many other nations to swiftly implement measures to contain the spread of the variant.</p>
        </div>
    </div>

    <div className="w-[80%] h-auto bg-transparent flex items-center justify-center py-8">
        <img src="/assets/blog/case-studies/Building Africa’s Defenses/webp/medical-researcher-with-african-ethnicity-using-microscope-doing-investigation-evaluates-sample-black-healthcare-scientist-biochemistry-laboratory-wearing-sterile-equipment.webp"></img>
    </div>

    <div className="w-[80%] h-auto bg-transparent flex items-center justify-center py-4">
        <p className="text-white">Africa has also been at the forefront of innovation in integrated surveillance systems. A prime example is wastewater surveillance, which proved crucial for detecting new variants during COVID-19.<sup>14</sup> Building on experience gained during the pandemic, environmental surveillance remains a key tool for monitoring polio in several countries across the African Region today.</p>
    </div>

   
    </div>
  )
}

export default TextSectionThree