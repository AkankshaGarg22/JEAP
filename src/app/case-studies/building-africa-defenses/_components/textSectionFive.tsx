import React from 'react'
import Paragraph from '../../_components/paragraph'
import AnimatedHeading from '../../_components/AnimatedHeading'

const TextSectionFive = () => {
  return (
    <>
        {/*WHO EMR*/}
       <div className="w-full h-auto flex items-center justify-center py-12"> 
        <div className="lg:w-[80%] w-[90%] h-auto bg-white flex flex-col items-center justify-center gap-6">
            <Paragraph>To further bolster these efforts, WHO EMR Office established three regional genomic sequencing hubs including one in Morocco providing extensive support and trainings. These initiatives not only strengthened COVID-19 surveillance but also expanded national next-generation sequencing (NGS) capabilities to other diseases, such as Influenza, Crimean-Congo hemorrhagic fever (CCHF), dengue, cholera, and others, with countries like Sudan receiving specialized training. </Paragraph>

            <Paragraph>Capacities developed during the COVID-19 pandemic significantly enhanced sequencing and surveillance efforts across the continent. Leveraging these capabilities, laboratory experts sequenced Ebola in Uganda, Diphtheria in Nigeria, and Cholera in numerous countries including Malawi, Mozambique, Zambia, DRC, Uganda, Nigeria, Cameroon, and others. </Paragraph>

            <Paragraph>These new capacities were instrumental in detecting Mpox Clade 1b in the Democratic Republic of Congo (DRC) and rapidly sharing Ebola sequencing data with the DRC Ministry of Health within 24 hours of the outbreak.</Paragraph>
        </div>
       </div>

{/* LOOKING AHEAD: EXPANDING THE LABORATORY NETWORK AND PILOTING USE CASES FOR GENOMIC AND EPIDEMIOLOGICAL EVIDENCE IN PUBLIC HEALTH DECISION-MAKING */}
       <div className="w-full h-auto flex flex-col gap-12 items-center justify-center py-12 bg-gradient-to-t from-[#1E2859] to-[#1D5539]">
            <div className="lg:w-[80%] w-[90%] flex flex-col gap-8 lg:flex-row lg:items-start items-center justify-center">
                <div className="lg:w-[35%] w-full flex items-center justify-center">
                <AnimatedHeading linecolor='white' className="text-white ">LOOKING AHEAD: EXPANDING THE LABORATORY NETWORK AND PILOTING USE CASES FOR GENOMIC AND EPIDEMIOLOGICAL EVIDENCE IN PUBLIC HEALTH DECISION-MAKING</AnimatedHeading>
                </div>
                <div className="lg:w-[65%] w-full flex items-center justify-center">
                <Paragraph className="text-white ">Despite such progress on the continent, substantial challenges persist with knowledge sharing and coordination. Not all genomic laboratories are yet part of the network, representing untapped capacity that could boost sequencing across the continent. Moving forward, the JEAP aims to enhance continental laboratory network capacity by improving data sharing, coordination and network expansion; strengthen capacity at the country level to ensure they can conduct sequencing activities independently of the network; and develop a unified strategy using harmonized genomics guidelines, delivering comprehensive genomic surveillance capacities to Member States. Advocating for sustained and continued investment in genomic sequencing in the years ahead will be critical.</Paragraph>
                </div>
            </div>

            <div className="lg:w-[80%] w-[90%] h-auto flex flex-col items-center justify-center gap-6">
                <img src="/assets/blog/case-studies/Building_Africa_Defenses/webp/JKG_0276.webp" className="w-[100%] h-auto lg:h-[500px] object-cover object-center"></img>
                <div className="w-full h-auto flex flex-col gap-6 items-center justify-center">
                <Paragraph className="text-white ">By investing in genomic sequencing infrastructure and expertise, Africa can position itself at the forefront of global health, not only protecting its own population but also contributing invaluable data to the worldwide fight against infectious diseases. The WHO Global Genomics Strategy and the Africa CDC Continental Policy Framework for Pathogen Genomics Surveillance lay the foundation for how to push these efforts forward. </Paragraph><Paragraph className="text-white"> At the country level, there is a need for national genomic sequencing strategies to be created, adopting a One Health approach. To build a case for this strategy among national leaders, the JEAP is strengthening the evidence base for the implementation of public health pathogen genomics in Africa. This will include conducting pilot projects on high-priority use-cases to provide genomic and epidemiological evidence for public health decision-making, and building mechanisms to facilitate using the evidence.</Paragraph>
                </div>
            </div>


       </div>
{/* CholGen */}
        <div className="w-full h-auto flex flex-col items-center justify-center py-12">
            <div className="lg:w-[80%] w-[90%] h-auto flex items-center justify-center ">
                <Paragraph className="text-black">The Africa CDC, for instance, is running several such pilot projects through Africa PGI. The Cholera Genomics Consortium in Africa (“CholGEN”) aims to enhance Cholera genomics in Africa through a collaboration with national public health institutes and national reference laboratories from seven African countries, Johns Hopkins University, and Brigham and Women’s Hospital. The consortium has been working to train and support laboratories and epidemiologists to fill these gaps, leveraging local genomic sequencing capacity built during the COVID-19 pandemic to sequence bacterial isolates from recent cholera outbreaks in each country.</Paragraph>
            </div>
        </div>

{/* KlebGen - SANBI */}
        <div className="w-full h-auto flex flex-col items-center justify-center">
            <div className="w-full h-auto flex flex-col lg:flex-row items-center justify-center gap-0 p-0 m-0">
                <div className="lg:w-[50%] w-[90%] bg-transparent">
                    <img src="/assets/blog/case-studies/Building_Africa_Defenses/webp/WhatsApp Image 2025-02-20 at 12.18.27.webp" className="w-[100%] h-full object-cover object-center"></img>
                </div>
                <div className="lg:w-[50%] w-full p-6 lg:p-[8.25%] lg:bg-[#1E2859]">
                    <Paragraph className="lg:text-white">Other examples include KlebGEN, a pilot project that aims to strengthen AMR genomic surveillance in nine countries and timely data sharing for evidence-based public health decision-making. Lastly, the DETECT project aims to develop guidance, diagnostic algorithms, training and capacity building to enable outbreak detection, and reporting to inform public health response across 12 countries in Africa.</Paragraph>
                </div>
            </div> 

            <div className="w-full h-auto flex flex-col-reverse lg:flex-row items-center justify-center gap-0 p-0 m-0">
               <div className="lg:w-[50%] w-full p-6 lg:p-[6.15%] lg:bg-[#1E2859]">
                    <Paragraph className="lg:text-white">WHO AFRO, in collaboration with the South African National Bioinformatics Institute (SANBI) set up the Regional Centre of Excellence for Genomic Surveillance and Bioinformatics in Cape Town, South Africa. The Southern African Development Community (SADC) is taking the lead on implementing this project with technical and financial support. The SANBI is supporting 14 southern African countries, with the goal of enhancing their monthly sequencing capacity by 500%. In the future, these partners aim to expand this project to be able to conduct data sequencing for more countries.</Paragraph>
                </div>
                <div className="lg:w-[50%] w-[90%] bg-transparent">
                    <img src="/assets/blog/case-studies/Building_Africa_Defenses/webp/MDP06139_210841.webp" className="w-[100%] h-full object-cover object-center"></img>
                </div>

            </div>
        </div>
    </>
  )
}

export default TextSectionFive