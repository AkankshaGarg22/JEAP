import React from 'react'
import AnimatedHeading from '../../_components/AnimatedHeading'
import Paragraph from '../../_components/paragraph'

const TextSectionThree = () => {
  return (
<>
<div className="bg-gradient-to-b from-[#1E2859] to-[#1D5539] w-full h-auto flex flex-col items-center justify-center md:py-12 py-4">
    <div className="lg:max-w-7xl mx-auto w-[90%] h-auto bg-transparent flex lg:flex-row flex-col gap-6 items-start justify-center">
        <div className="lg:w-[35%] w-full h-auto">
            <AnimatedHeading linecolor="white" className="text-white">
            Increased African Surveillance Efforts Demonstrate Fertile Ground for Investing in Continental Genomic Sequencing Capacity-Building
            </AnimatedHeading>
        </div>
        
        <div className="lg:w-[65%] w-full h-auto flex flex-col gap-4 items-center justify-center">
        <Paragraph className="text-white">Over the past decade, promising progress has been made to strengthen Africa’s emergency preparedness and response (EPR) systems. In 2020, Africa celebrated the monumental achievement of being declared free of the wild poliovirus. The vigilance of African surveillance systems and early detection was critical in this achievement, as it enabled swift and massive vaccination campaigns, averting 1.8 million new cases.<sup>13</sup> </Paragraph> <Paragraph className="text-white">Africa’s prowess in disease surveillance was further spotlighted in 2021 when scientists at the Network for Genomic Surveillance in South Africa sounded the alarm regarding the emerging Omicron variant during the COVID-19 pandemic. This discovery triggered a worldwide response, enabling many other nations to swiftly implement measures to contain the spread of the variant.</Paragraph>
        </div>
    </div>

    <div className="lg:max-w-7xl mx-auto w-[90%] h-auto lg:h-[750px] bg-transparent flex items-center justify-center md:py-12 py-4">
        <img loading="lazy" src="/assets/blog/case-studies/Building_Africa_Defenses/webp/medical-researcher-with-african-ethnicity-using-microscope-doing-investigation-evaluates-sample-black-healthcare-scientist-biochemistry-laboratory-wearing-sterile-equipment.webp" className="w-full h-full object-cover object-center"/>
    </div>

    <div className="lg:max-w-7xl mx-auto w-[90%] h-auto bg-transparent flex items-center justify-center">
    <Paragraph className="text-white">Africa has also been at the forefront of innovation in integrated surveillance systems. A prime example is wastewater surveillance, which proved crucial for detecting new variants during COVID-19.<sup>14</sup> Building on experience gained during the pandemic, environmental surveillance remains a key tool for monitoring polio in several countries across the African Region today.</Paragraph>
    </div>   
</div>

<div className="w-full bg-white md:py-8 py-4">
</div>

</>
  )
}

export default TextSectionThree