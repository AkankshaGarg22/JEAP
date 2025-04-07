import React from 'react'
import AnimatedHeading from '../../_components/AnimatedHeading'
import Paragraph from '../../_components/paragraph'

const OverflowSection = () => {
  return (
    <>  
        <div className="w-full h-auto flex flex-col gap-8 items-center justify-center py-12 bg-gradient-to-b from-[#1E2859] to-[#1D5539]"> 
            {/* JOINING FORCES TO ENSURE EVERY AFRICAN COUNTRY HAS GENOMIC SEQUENCING CAPABILITY */}
            <div className="w-[80%] bg-transparent flex flex-col lg:flex-row items-start justify-center gap-24">
                <div className="w-[40%] h-auto flex flex-col items-center justify-center gap-12">
                  <AnimatedHeading linecolor="white" className="text-white">JOINING FORCES TO ENSURE EVERY AFRICAN COUNTRY HAS GENOMIC SEQUENCING CAPABILITY</AnimatedHeading>
                  <Paragraph className="text-white">The Joint Emergency Action Plan (JEAP), a partnership led by the Africa Centres for Disease Control and Prevention (Africa CDC) and the World Health Organization (WHO), recognizes the collective yet unique needs of African nations and provides a blueprint for strengthening the continent’s health emergency preparedness and response capacities. Guided by this mandate, the JEAP seeks to ensure strengthened national public health surveillance and response systems with updated IDSR and EBS practices, as well as genomic surveillance for all 55 African countries.</Paragraph>
                </div>
                <div className="w-[60%] h-[600px] flex items-center justify-center">
                  <img src="/assets/blog/case-studies/Building_Africa_Defenses/webp/WHO_25.05.23_72dpi©CecileRolland-103.jpg" className="w-full h-full object-cover object-center"/>
                </div>
            </div>
            {/* Member States */}
            <div className="w-[80%] flex items-center justify-center">
            <Paragraph className="text-white w-full">To do so, the JEAP works to ensure all Member States have laboratory capacity to diagnose and report pathogens that can cause outbreaks, including laboratory sequencing capacity. The JEAP supports countries by strengthening diagnostics strategy and capacity at national and subnational levels. In addition, the JEAP supports countries by creating enabling mechanisms for the integration of sequencing with routine surveillance for public health response, enhancing in-country capacity for genomic surveillance through an end-to-end framework, and enhancing the sharing of sequencing data.</Paragraph>
            </div>
            {/* Image */}
            <div className="w-[80%] h-auto flex items-center justify-center">
                  <img src="/assets/blog/case-studies/Building_Africa_Defenses/webp/WhatsApp Image 2025-02-20 at 12.18.24 (2).webp" className="w-full h-[auto]"/>
            </div>
        </div>

        {/* THE JEAP’S INVESTMENTS IN CONNECTED LABORATORY NETWORKS ON THE CONTINENT */}
        <div className="bg-white w-full h-auto flex flex-col items-center justify-center py-12 ">
        <div className="w-[80%] h-auto flex flex-col lg:flex-row items-start justify-center gap-16">
                  <AnimatedHeading linecolor="black" className="text-black w-auto">THE JEAP’S INVESTMENTS IN CONNECTED LABORATORY NETWORKS ON THE CONTINENT</AnimatedHeading>
                 <div className="w-auto flex items-center justify-center flex-col gap-6" >
                  <Paragraph className="text-black">In 2020, Africa CDC in collaboration with WHO and jointly with public, philanthropic, and private sector partners launched a continent-wide Pathogen Genomics Initiative (Africa PGI) with a short-term focus on accelerating SARS-CoV-2 sequencing, and a long-term vision of strengthening systems to support the monitoring of other priority pathogens in Africa.<sup>15</sup>  </Paragraph><Paragraph className="text-black"> Since its launch, the PGI has substantially increased genomics sequencing capacity in Africa and expanded access to this technology across the continent from 7 countries in 2019 to 40 in 2023. The PGI also democratized the technology by distributing one of the continent’s largest-ever sequencing equipment, including ancillary equipment and automated systems. The partnership has also supported i) the diagnosis and sequencing of SARS-COV-2 with over 140,000 SARS-CoV-2 genomes sequenced16, Marburg Virus, Ebola virus, Mpox, Dengue, and Cholera cases; ii) the continental genomic surveillance and sample referral system; iii) expanded data storage and analytics capacity, and iv) trained more than 950 experts in sample management, genomics, bioinformatics, data interpretation and reporting. These capacities are currently being leveraged for Mpox sequencing in the Democratic Republic of Congo (DRC), the Congo and Cameroon.</Paragraph>
                </div>
        </div>
        </div>
    
    
    </>
  )
}

export default OverflowSection