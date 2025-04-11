import React from 'react'
import AnimatedHeading from '../../_components/AnimatedHeading'
import Paragraph from '../../_components/paragraph'

const TextSectionOne = () => {
  return (
    <>
    <div className="flex w-full h-auto flex-col bg-white items-center justify-center">
        <div className="lg:max-w-7xl mx-auto w-[90%] h-auto flex lg:flex-row flex-col gap-4 items-center justify-center md:py-12 py-4">
            <div className="lg:w-[30%] w-full ">
                <AnimatedHeading linecolor="black" className="font-bold lg:w-[40%]">What is Genomic Sequence?</AnimatedHeading>
            </div>
            <div className="lg:w-[60%] w-full">
                <Paragraph>
                Genomic sequencing is the process of analyzing a sample of genetic material found in an organism or in pathogens. By comparing sequences from specimens, laboratory experts can track the spread of a virus, identify its transmission routes, monitor genetic changes, and assess how these genetic changes may impact public health.
                </Paragraph>
            </div>
        </div>

        <div className="lg:max-w-7xl mx-auto w-full h-auto flex items-center justify-center relative">
          <div className="lg:w-[100%] w-[90%] h-[200px] lg:h-[500px] flex items-center justify-center">
            <img alt="Genomic Sequence Image" src="/assets/blog/case-studies/Building_Africa_Defenses/webp/202105_Angola_COVAX_03.webp"
            className="object-cover object-center h-full w-[80%]"/>
         </div>
        </div>

        <div className="lg:max-w-7xl mx-auto w-[90%] h-auto  flex items-center justify-center bg-gradient-to-b from-[#1E2859] to-[#1D5539] py-12">
         <Paragraph className="text-white w-[80%]">Genomic surveillance is the process of tracking a virus using genomic sequence data collected from representative populations to detect new variants and monitor trends in circulating variants.<sup>6</sup> As such, genomic sequencing improves scientists’ understanding of which variants are circulating, how quickly they are emerging, and which are most important to characterize and monitor. In addition, genomic sequencing results are also valuable for diagnosing patients and developing treatments to combat these diseases. During COVID-19, genomic sequencing helped country governments with the adequate capacities to track – and slow – the spread of disease.</Paragraph>
        </div>
        
    </div>
{/* 2013-2016 Ebola Outbreak */}
      <div className="w-full h-auto flex justify-center items-center md:py-12 py-4">
        <div className="lg:max-w-7xl mx-auto w-full h-auto flex flex-col lg:flex-row gap-4  items-center justify-between">
         <div className="lg:w-[30%] w-[90%] ">
                <AnimatedHeading linecolor="black" className="font-bold ">Missed Opportunities Lessons Learned From EBOLA and COVID-19 Outbreaks</AnimatedHeading>
            </div>
            <div className="lg:w-[60%] w-[90%]">
               <Paragraph>
                The 2013-2016 Ebola outbreak in West Africa was the largest outbreak of Ebola ever recorded since the virus was first discovered, with 28,616 recorded cases and over 11,000 deaths.<sup>7</sup> The spread of this outbreak exposed a multitude of health system shortcomings across West Africa, notably in disease surveillance. Poor capacity to detect and track the disease for several months after onset allowed the virus to spread from Guinea to neighboring Liberia and Sierra Leone, and eventually far beyond the African continent.<sup>8</sup>
                </Paragraph>
            </div>
        </div>
    </div>
    </>
  )
}

export default TextSectionOne