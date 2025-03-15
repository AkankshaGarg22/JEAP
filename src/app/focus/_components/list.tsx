"use client";
import { useState } from "react";

const sections = [
  {
    id: 1,
    title: "Climate Change",
    subtitle: "",
    popupImage: "/assets/blog/focus/read-more-images/climate-change.jpg",
    content:
      "The rise in climate-related disease outbreaks in Africa highlights the urgent need to strengthen health systems through climate-resilient, sustainable, and low-carbon approaches. To address this, the JEAP incorporated a TWG focused on climate change into its action plan. The Climate Change TWG is setting a new standard for resilience in Africa by championing climate-resilient strategies for emergency preparedness and response, enhancing the region's capacity to prepare for, detect, and respond to climate-related health threats effectively.",
    popupContext: (
      <>
        <p>
          The rise in climate-related disease outbreaks in Africa highlights the urgent need to strengthen health systems through climate-resilient, sustainable, and low-carbon approaches. To address
          this, the JEAP incorporated a TWG focused on climate change into its action plan. The Climate Change TWG is setting a new standard for resilience in Africa by championing climate-resilient
          strategies for emergency preparedness and response, enhancing the region's capacity to prepare for, detect, and respond to climate-related health threats effectively.
        </p>
      </>
    ),
    popupVision:
      "The goal is to build robust, climate-resilient health systems across Africa that effectively address the health impacts of climate change, foster sustainability, and promote multi-sectoral collaboration to safeguard health—particularly for those most affected by the impacts of climate change.",
    objectives: ["Climate resilience", "Sustainability", "Multi-sectoral coordination"],
    progressText: [],
  },
  {
    id: 2,
    title: "Country Assessments",
    subtitle: "Country Assessment in the Preparedness Context",
    popupImage: "/assets/blog/focus/read-more-images/climate-change.jpg",
    content:
      "Since the launch of International Health Regulations (IHR, 2005), Member States across the African continent have invested in strengthening IHR preparedness capacities to enhance detection, prevention, and response to public health emergencies. Several assessments in line with IHR Monitoring and Evaluation (M&E) Framework and Performance of Veterinary Services (PVS) Pathway have been implemented to monitor and evaluate capacities’ development in preparedness in human health services, veterinary services and aquatic and animal health services. These instruments have assessed the status of preparedness and enabled documentation of progress countries have made in building their capacities.",
    popupContext: (
      <>
        <p>
          Since the launch of International Health Regulations (IHR, 2005), Member States across the African continent have invested in strengthening IHR preparedness capacities to enhance detection,
          prevention, and response to public health emergencies. Several assessments in line with IHR Monitoring and Evaluation (M&E) Framework and Performance of Veterinary Services (PVS) Pathway
          have been implemented to monitor and evaluate capacities’ development in preparedness in human health services, veterinary services and aquatic and animal health services. These instruments
          have assessed the status of preparedness and enabled documentation of progress countries have made in building their capacities.
        </p>
        <br />
        <p>
          Across the continent, there has been strong uptake of preparedness tools. In 2023, all African countries completed their required State Parties Annual Reporting (SPAR) assessment. From the
          beginning of 2023 through May 2024, 4 countries completed inter-action reviews (IARs)12, 1 conducted an after-action review (AAR),12 9 completed national planning workshops with another 8 in
          the pipeline for this year,13 and 21 completed voluntary Joint External Evaluation (JEE) assessments, with another 13 scheduled this year.14 Additionally, of the 11 countries with NAPHS
          publicly available on the WHO Strategic Partnership Portal, 7 are from Africa.15 Further, there have been several simulation exercises (SimEx) including cross-border SimEx to help develop,
          assess and test functional capabilities of emergency systems.
        </p>
      </>
    ),
    popupVision:
      "Despite Commitments to assessments by Member States, there remain opportunities to enhance regional coordination and knowledge-sharing around assessments. The vision of this collaboration area is to support countries in assessing and developing International Health Regulation (IHR) core capacities to prepare for and respond to public health emergencies through enhanced partnership and coordination.",
    objectives: [
      "Ensure the harmonization of EPR tools and processes",
      "Support countries to conduct and report on EPR capacity assessments",
      "Support countries to develop and implement action plans",
    ],
    progressText: [
      {
        textHeading: "Jointly supported simulation exercises, including cross-border exercises",
        textContent:
          "Under the JEAP umbrella, Africa CDC and WHO supported the organization of a cross-border simulation exercise with Somalia, Ethiopia and Kenya on 21 May in Nairobi, Kenya, resulting in the development of across-border Memorandum of Understanding. Additionally, the Partnership jointly supported national simulation exercises in Malawi, Eswatini, and Zambia.",
      },
      {
        textHeading: "Increased information-sharing to harmonize regional support and improve efficiency",
        textContent:
          "Prior to the JEAP, it was observed that there was overlap in regional support to countries around national planning and assessments. Through the Partnership, Africa CDC and WHO developed concept notes and plans to map all existing tools and process for assessments in order to harmonize the guidance to member states, agreed to leverage the existing Strategic Partnership for Health Security and Emergency Preparedness (SPH) Portal as the focal point for information-sharing, and have begun regular coordination around training as well as intra-action after action-reviews for disease outbreaks. For instance, the group is planning for an upcoming inter-action review on mpox in DRC as well as a capacity-building workshop on emergency preparedness & response tools in Ethiopia.",
      },
    ],
  },
  {
    id: 3,
    title: "Digitalization",
    subtitle: "",
    popupImage: "/assets/blog/focus/read-more-images/climate-change.jpg",
    content:
      "The aftermath of the COVID-19 pandemic highlighted the critical need for technology-driven solutions in Africa's health sector to strengthen countries' ability to promptly prepare for, detect, and respond to health emergencies. In response, the Digitalization TWG, a cross-cutting initiative within JEAP, was established to address this need and now leads the integration of digital solutions across other TWGs.",
    popupContext: (
      <>
        <p>
          The aftermath of the COVID-19 pandemic highlighted the critical need for technology-driven solutions in Africa's health sector to strengthen countries' ability to promptly prepare for,
          detect, and respond to health emergencies. In response, the Digitalization TWG, a cross-cutting initiative within JEAP, was established to address this need and now leads the integration of
          digital solutions across other TWGs.
        </p>
      </>
    ),
    popupVision:
      "The JEAP aims to transform health emergency preparedness and response in Africa through digital innovation and capacity building. It focuses on enhancing surveillance, supply chains, and data-driven decision-making, while fostering telehealth integration to improve healthcare access during emergencies. JEAP supports digital maturity assessments, harmonizes frameworks, and strengthens infrastructure, connectivity, and interoperability, ensuring robust systems for effective response. By engaging stakeholders in the digital space, such as the International Telecommunication Union (ITU), JEAP is building workforce capacity, promoting sustainable, technology-driven solutions tailored to Africa’s needs",
    objectives: [],
    progressText: [
      {
        textHeading: "",
        textContent: (
          <>
            The JEAP Digitalization TWG organized the following digitalization capacity building endeavours:
            <br />
            <ul className="list-none">
              <li>
                a. A retreat for primary healthcare (PHC) workers, focused on enhancing their digital capacities. The event brought together 30 participants, fostering skill development and knowledge
                sharing.
              </li>
              <li>b. A major synergy event with 50 stakeholders to identify collaboration opportunities across digitalization projects at Africa CDC.</li>
              <li>c. JEAP actively participated in the Africa Health ExCon conference in Cairo.</li>
              <li>
                d.JEAP is implementing the Global Digital Health Certification Network (GDHCN) for yellow fever vaccination, replacing paper certificates. Seven of our countries have committed to
                adopting this digital certification.
              </li>
              <li>e. JEAP has partnered with Google Health to explore use cases for event-based surveillance, with plans to showcase solutions at the upcoming Africa Health Summit.</li>
            </ul>
          </>
        ),
      },
      {
        textHeading: "",
        textContent: "Building a digital workforce database for digitalization of the Workforce Development TWG by supporting  the development of its technical specifications.",
      },
      {
        textHeading: "",
        textContent: "Supporting the creation of a tool to optimize the prepositioning of health supplies in the Operations, Supply and, Logistics (OSL) TWG. ",
      },
      {
        textHeading: "",
        textContent: "JEAP participated in the World Summit for Information Society (WSYS+20) side event, promoting the Global Initiative for Digital Health.",
      },
      {
        textHeading: "",
        textContent:
          "JEAP provided digital operations support for Hadj pilgrimage by utilizing a digital health management tool that supports QR-coded health record verification by the authorities. This is being piloted in Indonesia, Malaysia, Oman, and Saudi Arabia. ",
      },
    ],
  },
  {
    id: 4,
    title: "Operations, Supply, and Logistics",
    subtitle: "",
    popupImage: "/assets/blog/focus/read-more-images/climate-change.jpg",
    content:
      "Logistics is an essential part of emergency response – yet delays in the delivery of medical supplies and gaps in human resources for logistics remain major challenges across the continent.",
    popupContext: (
      <>
        <p>
          Logistics is an essential part of emergency response – yet delays in the delivery of medical supplies and gaps in human resources for logistics remain major challenges across the continent.
        </p>
      </>
    ),
    popupVision:
      "The vision of this collaboration area is to strengthen member states operational capacities to respond to emergencies. The group is guided by a singular objective: to provide robust and agile supply chain and operational support to member states in preparedness and response to emergencies.",
    objectives: [],
    progressText: [
      {
        textHeading: "Pooled resources to reach countries with medical supplies",
        textContent:
          "The Partnership has made considerable strides in coordinating the strategic positioning of stockpiling and logistics centers – mapping existing centers to ensure a full geographic coverage of the continent. The agencies are also increasingly pooling resources around country requests for the delivery of essential health supplies, working toward the goal of reaching Member States within 48 hours of any request.",
      },
      {
        textHeading: "Delivered joint training sessions",
        textContent:
          "Over the past year, the Partnership has trained 150 health emergency and logistics experts to enhance their skills and knowledge across the continent. This is a key step in building up Africa’s workforce for health logistics.",
      },
      {
        textHeading: "Conduct joint advocacy for customs clearance",
        textContent:
          "Customs clearance is an essential step in the delivery of essential medicines and supplies to countries during emergencies. Yet delays in clearance can slow down the process of reaching communities with the care that they need. To address this challenge, the Partnership is engaged in ongoing, joint regional advocacy for blanket customs clearances for medical supplies during emergencies, under the JEAP initiative. The goal is to enable expedited access to essential medical goods and equipment in 80% of Member States.",
      },
      {
        textHeading: "Advanced logistics and data management tools",
        textContent:
          "A team of information management experts and logisticians has been recruited and is developing Supply Chain Data Management System and Tools. It has developed a Dashboard for supply pipeline visibility and a tracker for last miles deliveries. This phase of technical development is quite advanced and is now integrating some lessons learned during its pilot implementation during the Gaza emergency response. In addition, an initial scoping mission has been conducted in Somalia for its roll out in the near future. Sudan is planned for the next period of time. The implementation in those 2 countries will enable the production of guidelines and SOPs to support the divulgation of those Supply Data Management Systems and Tools in other countries in the continent.",
      },
    ],
  },
  {
    id: 5,
    title: "RCCE",
    subtitle: "",
    content:
      "The JEAP recognizes the importance of Improved community preparedness, knowledge, and engagement in responding to health emergencies. JEAP is addressing the critical gaps in risk communication and community engagement (RCCE) highlighted during the Covid-19 pandemic by tackling major RCCE challenges such as weak strategies, poor implementation, and fragmented efforts across countries. By enhancing coordination and promoting integrated, results-driven RCCE strategies, JEAP is ensuring that RCCE and information management (IM) are prioritized in health emergencies. ",
    popupContext: (
      <>
        <p>
          The JEAP recognizes the importance of Improved community preparedness, knowledge, and engagement in responding to health emergencies. JEAP is addressing the critical gaps in risk
          communication and community engagement (RCCE) highlighted during the Covid-19 pandemic by tackling major RCCE challenges such as weak strategies, poor implementation, and fragmented efforts
          across countries. By enhancing coordination and promoting integrated, results-driven RCCE strategies, JEAP is ensuring that RCCE and information management (IM) are prioritized in health
          emergencies.{" "}
        </p>
      </>
    ),
    popupVision:
      "Through the RCCE TWG, JEAP is building robust infrastructure, improving multi-sectoral collaboration, and providing the necessary support to create cohesive, impactful RCCE interventions that strengthen health responses across the region.",
    objectives: [],
    progressText: [
      {
        textHeading: "",
        textContent: "JEAP is driving the development of a regional RCCE strategy to standardize practices across the region for enhanced response during public health emergencies.",
      },
      {
        textHeading: "",
        textContent: "Supporting countries in creating national RCCE plans and standard operating procedures (SOPs) by conducting assessments to map core RCCE capacities.",
      },
      {
        textHeading: "",
        textContent: "Facilitating the institutionalization of existing mechanisms and platforms to enhance community engagement and resilience.",
      },
      {
        textHeading: "",
        textContent: "Focusing on establishing social listening tools and infodemic management systems for real-time analysis and informed decision-making.",
      },
      {
        textHeading: "",
        textContent: "Strengthening human resources and mobilizing resources within RCCE and infodemic management to ensure sustained effectiveness.",
      },
    ],
  },
  {
    id: 6,
    title: "Response Readiness",
    subtitle: "",
    popupImage: "/assets/blog/focus/read-more-images/climate-change.jpg",
    content:
      "While most African countries have now established a Public Health Emergency Operations Centre (PHEOC), recent evaluations highlight that implementation capabilities vary.6 A PHEOC is a hub for joint risk assessment, planning, and coordination of information and resources for effective emergency management. Many countries established and operationalized PHEOCs in the aftermath of Ebola Virus Disease (EVD) epidemic in West Africa, supporting stronger emergency coordination.",
    popupContext: (
      <>
        <p>
          While most African countries have now established a Public Health Emergency Operations Centre (PHEOC), recent evaluations highlight that implementation capabilities vary.6 A PHEOC is a hub
          for joint risk assessment, planning, and coordination of information and resources for effective emergency management. Many countries established and operationalized PHEOCs in the aftermath
          of Ebola Virus Disease (EVD) epidemic in West Africa, supporting stronger emergency coordination.
        </p>
      </>
    ),
    popupVision:
      "The vision of this collaboration area is to improve the public health emergency management capability by putting in place fully functional Public Health Emergency Operations Centres (PHEOCs) in at least 90% of Member States in Africa by the end of 2027.",
    objectives: [
      "Ensure that at least 90% of Member States in Africa have a PHEOC facility in place equipped with information, communication technology and physical infrastructure that meets the minimum requirements by 2027.",
      "Ensure that at least 90% of the Member States in Africa have developed and implemented core PHEOC policy, plans and procedures: legal framework, operational and functional plans and procedures.",
    ],
    progressText: [
      {
        textHeading: "Finalized a regional strategic plan in January 2023",
        textContent:
          "In January 2023, WHO, Africa CDC, the West African Health Organization (WAHO), the United States Centres for Disease Prevention and Control (US CDC), the UK Health Security Agency (UKHSA), Bill & Melinda Gates Foundation (BMGF) and Robert Koch Institute (RKI) worked with Member States to finalize a foundational document: the first ever Strategic Plan For Strengthening Public Health Emergency Operations Centres in Member States of Africa and Eastern Mediterranean Region (2023–2027). The plan identifies five strategic objectives across the core components of a PHEOC and proposes to establish PHEOC “Centres of Excellence,” to serve as regional reference centres for MS and other stakeholders in strengthening and establishing fully functional PHEOCs.",
      },
      {
        textHeading: "Engaged Member States to adapt and operationalize plan through Ministerial Meetings and rapid assessments",
        textContent:
          "Since the finalization of the strategy plan, WHO and Africa CDC have joined forces to engage Member States in operationalization, including orchestrating Ministerial Meetings in September/October 2023. The meetings aimed to support the adaptation of the plan to country context, as well as resource mobilization and advocacy. Additionally, over the past several months, the Partnership has conducted virtual and in-country assessments of individual PHEOCs to help Member States define priority activities leveraging JEAP seed funding. So far the 23 countries where the assessment was completed are: Liberia, Comoros, Mauritania, Chad, DRC, Central African Republic, Togo, Benin, São Tomé, Ethiopia, Kenya, Madagascar, Rwanda, Somalia, South Sudan, Tanzania, Lesotho, Burkina Faso, Ghana, Guinea, Guinea Bissau, Sierra Leone, Zambia. A joint findings document from the assessments is expected to be delivered in Q3 2024.",
      },
      {
        textHeading: "Continued joint management of a regional PHEOC network to encourage best practices and knowledge-sharing",
        textContent:
          "The regional strategy builds on previous collaboration that helped establish a robust network of Public Health Emergency Operations Centers (PHEOCs) across the African and Eastern Mediterranean Regions beginning in 2015. Since its inception, the network has run simulation exercises, organized 69 webinars on PHEOC management and country experience sharing, trained over 110 experts as emergency management trainers, and established a PHEOC WhatsApp Network that facilitates ongoing information and best practice sharing. Over the past year, the Partnership has continued to manage the network and has begun preparations to deploy information-management software (ePHEM) that will standardize and enhance information management across PHEOCs.",
      },
    ],
  },
  {
    id: 7,
    title: "Surveillance",
    subtitle: "",
    popupImage: "/assets/blog/focus/read-more-images/climate-change.jpg",
    content:
      "Surveillance systems and technologies across the continent are lacking, with some countries not meeting the Integrated Diseases Surveillance & Response (IDSR) standards, leading to delays in detecting health emergencies. Despite scientific development to strengthen the health system to protect human health, Africa continues to be confronted by longstanding, emerging, and reemerging infectious disease threats. Unfortunately, the region has a relatively low capacity for risk management of disease epidemics, mainly due to inadequate resources for early detection, identification, and prompt response. The failure in the early detection and response to epidemics in Africa is attributed to several factors, including deficiency in the development and implementation of surveillance and response systems against infectious disease outbreaks.",
    popupContext: (
      <>
        <p>
          Surveillance systems and technologies across the continent are lacking, with some countries not meeting the Integrated Diseases Surveillance & Response (IDSR) standards, leading to delays in
          detecting health emergencies. Despite scientific development to strengthen the health system to protect human health, Africa continues to be confronted by longstanding, emerging, and
          reemerging infectious disease threats. Unfortunately, the region has a relatively low capacity for risk management of disease epidemics, mainly due to inadequate resources for early
          detection, identification, and prompt response. The failure in the early detection and response to epidemics in Africa is attributed to several factors, including deficiency in the
          development and implementation of surveillance and response systems against infectious disease outbreaks.
        </p>
      </>
    ),
    popupVision:
      "The vision of this collaboration area is to strengthen integrated public health surveillance and laboratory systems in all Member States. Through coordination between Africa CDC, WHO AFRO, and WHO EMRO, the Partnership will seek to build national public health surveillance and response systems with updated IDSR and event-based surveillance (EBS) practices, digital technologies, and genomic surveillance capacities at the national level.",
    objectives: [
      "Ensure all member states have capacity to timely detect and respond to public health threats",
      "Ensure all member states have laboratory capacity to diagnose and report pathogens that can cause outbreaks",
      "Establish a functional continental framework for data and information exchange",
      "Ensure all member states have laboratory sequencing capacity for pathogens that can cause outbreaks",
    ],
    progressText: [
      {
        textHeading: "Build Member States capacity for genomic surveillance",
        textContent:
          "In 2020, Africa CDC and WHO established a pan-African network of laboratories to provide sequencing, data analysis, and other technical support services to countries. The network aims to ensure that all countries have access to genomic sequencing capabilities. It comprises 12 specialized and regional reference laboratories collectively serving countries across 9 sub-regions, as well as 3 centres of excellence. Over the past year, AfricaCDC and WHO have built upon work started in 2020 – enhancing coordination through the JEAP operating structures. Regular coordination between WHO and Africa CDC has helped to optimize resources like reagents,maximizing the network's efficiency and boosting Africa's capacity for health emergency response and surveillance. It has contributed to the substantial increase in countries that now have sequencing capacity across the African continent.",
      },
      {
        textHeading: "Advanced the harmonization of cross-border collection, handling and shipment of all pathogens",
        textContent:
          "Following the establishment of the JEAP, Africa CDC, WHO/AFRO and WHO/EMRO agreed to work on a harmonized cross-border framework for pathogen collection, handling and shipment. The first draft, developed during an in-person workshop in Addis Ababa, has been developed and shared with all JEAP partners and is under review. The framework will encompass the three JEAP partners and cover sample referral at cross-border and national level. It will leverage the information Management system (NIMS) network, initiated by Africa CDC, which is open source and enables countries to have ownership and storage rights of their data.",
      },
    ],
  },
  {
    id: 8,
    title: "Workforce Development",
    subtitle: "",
    popupImage: "/assets/blog/focus/read-more-images/climate-change.jpg",
    content:
      "Human resources are the heart of emergency response, but there continues to be a shortage of trained, equipped emergency responders on the African continent. According to WHO analysis, fewer than 10% of African countries are adequately staffed to prepare for and respond to health emergencies.",
    popupContext: (
      <>
        <p>
          Human resources are the heart of emergency response, but there continues to be a shortage of trained, equipped emergency responders on the African continent. According to WHO analysis, fewer
          than 10% of African countries are adequately staffed to prepare for and respond to health emergencies.
        </p>
      </>
    ),
    popupVision:
      "The JEAP’s vision for workforce development is to develop and sustain an emergency health workforce that is adequate, trained, rapidly deployable, interoperable, supported and connected regionally through existing networks at the leadership, technical and operational levels.",
    objectives: [
      "Support the identification, capacity building and retainment of emergency health workforce",
      "Ensure the coordination and deployment of emergency health workforce",
      "Reinforce the emergency health workforce leadership",
    ],
    progressText: [
      {
        textHeading: "Enrolled and trained 1350 AVoHC-SURGE across 16 countries",
        textContent: (
          <>
            In each of these countries, a similar process was followed, tailored to the specific country needs:
            <br />
            <ul className="list-none">
              <li>
                a. Scoping missions: Scoping missions were conducted to engage with the government and in-country partners on the country’s readiness to manage health crises effectively, resulting in
                roadmaps aligned with the existing National Action Plan for Health Security (NAPHS).
              </li>
              <li>
                b. Government-led, multi-sectoral selection process: In each country, the Ministry of Health led the establishment of a multisectoral selection committee comprising representatives
                from relevant sectors. This committee was tasked with managing the selection of the multisectoral and multidisciplinary response team members for onboarding and specialized training.
                The selected trainees come from a range of disciplines and areas of expertise, such as epidemiology, laboratory science, anthropology, entomology, veterinary medicine, data management,
                field logistics and operation, infection prevention and control, RCCE and Gender-Based Violence (GBV). Overall, 31% are female. Namibia enrolled more females than males (65% females)
                and Nigeria and Botswana also had greater than 40% females. Of the trained responders, 75% are from Ministries of Health while 25% are from sectors other than health, representing a
                strong commitment to One Health).
              </li>
              <li>
                Training: WHO/AFRO in collaboration with WHO country offices, the government and in-country partners trained the selected AVoHC-SURGE responders. This included a standardized
                curriculum of in-person modules over nine days to cover key topics in emergency response, preceded by online, pre-work. The countries with the highest number of responders trained were
                the Democratic Republic of the Congo (DRC) (214), followed by the United Republic of Tanzania (193), Ethiopia (190) and Kenya (118).
              </li>
            </ul>
          </>
        ),
      },
      {
        textHeading: "Supported activation of AVoHC-SURGE members in 14 Member States to tackle various emergencies",
        textContent:
          "14 countries have utilized their AVoHC-SURGE members locally to respond to different emergencies. WHO has also utilized the roster to deploy 15 AVoHC-SURGE members from 8 countries to support emergency response outside their own countries. The emergencies responded to have included cholera, Marburg viral diseases, yellow fever, Diphtheria, flooding and humanitarian crises, among others. AVoHC-SURGE teams have been integral parts of government-led responses. For example, in response to the diphtheria epidemic ongoing in Niger since 17 July 2023, the AVoHC-SURGE team was deployed to three districts, collecting samples that confirmed Diptheria in several households and training health workers in case management. In Ethiopia, upon completion of their training, a total of 225 AVoHC-SURGE team members were strategically deployed to disaster-prone regions and areas with limited health care infrastructure. Teams worked collaboratively with local health care providers and authorities to assess needs, coordinate response efforts and deliver critical medical care to affected populations. In Congo, in response to severe flooding, the AVoHC-SURGE team was activated within 48-hours to evaluate and mitigate the flood’s health impacts, resulting in no flood-related outbreaks.",
      },
      {
        textHeading: "Began developing an interoperable workforce platform for comprehensive management and deployment",
        textContent:
          "Historically, disparate health workforce databases were maintained independently by WHO AFRO, WHO EMRO, and Africa CDC. Acknowledging the exigency for a unified system, the JEAP workforce development technical working group, with funds from the Bill & Melinda Gates Foundation (BMGF), held a data harmonization meeting. The primary objective was to establish a singular and harmonized platform that all three organizations could access, ensuring seamless coordination in the management and deployment of the African public health emergency workforce. The Regional Harmonization Database Retreat held in Addis Ababa in December 2023 marked a crucial milestone in the collective effort to consolidate emergency responder databases in Africa. The proceedings, orchestrated by Africa CDC, WHO AFRO, and Socion, brought together stakeholders with a shared goal: to create a regional harmonized database that can seamlessly deploy health workers during outbreaks and humanitarian crises.",
      },
      {
        textHeading: "Conceptualized a regional emergency preparedness and response leaders network",
        textContent:
          "In regional emergency response including pandemic response, success or failure often depends on a highly coordinated response supported by globally connected leaders with unique skills. Leadership in the health sector is challenging as the dynamic and rapidly changing environment during health emergencies requires leaders to understand the complex interaction between politics, access, finance, and local actors. Further,leading in these environments is complicated when authority is shared, resources are dispersed, and expertise is scattered across different agencies and levels of government. To strengthen African leadership for emergency preparedness and response, the JEAP has conceptualized an Emergency Preparedness andResponse Leaders Network. The JEAP is planning to solicit nominations for the network in the coming months.",
      },
    ],
  },
];

export default function List() {
  const [selected, setSelected] = useState(sections[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const handleReadMoreClick = () => {
    setCurrentIndex(selected.id);
    setModalOpen(true);
  };

  const closeModal = () => {
    setCurrentIndex(0);
    setModalOpen(false);
  };

  return (
    <div className="text-white p-4">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Sidebar - Accordion on Mobile, Fixed Sidebar on Desktop */}
        <div className="w-full lg:w-1/4">
          {/* Mobile Accordion */}
          <div className="lg:hidden">
            {sections.map((section) => (
              <div key={section.title} className="border-b-2 border-white mb-2">
                <button
                  className={`w-full text-left p-3 font-medium flex justify-between items-center  ${selected.title === section.title ? "bg-[#4c7fae]" : ""}`}
                  onClick={() => setSelected(section)}
                >
                  {section.title}
                </button>
                {selected.title === section.title && (
                  <div className="py-3 px-1">
                    <p className="text-base mb-2">{selected.content}</p>
                    <button className="bg-white text-blue-900 px-6 py-2 font-semibold flex items-center gap-2 hover:bg-gray-200" onClick={() => handleReadMoreClick()}>
                      Read More →
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Fixed Sidebar */}
          <div className="hidden lg:block">
            {sections.map((section) => (
              <div key={section.id} className="relative hover:bg-[#2c5377] group">
                <button
                  key={section.title}
                  className={`w-full text-left px-3 py-5 block ${selected.title === section.title ? "bg-[#4c7fae]" : ""} ${section.id !== sections.length ? " border-b " : ""}`}
                  onClick={() => setSelected(section)}
                >
                  {section.title}
                </button>
                <span className="absolute top-[1px] left-[12px] text-xs text-gray-300 opacity-0 transition-opacity duration-200 ease-in-out group-hover:opacity-100">Read about</span>
              </div>
            ))}
          </div>
        </div>

        {/* Content Panel */}
        <div className="hidden md:block w-full lg:w-3/4 bg-[rgb(37_73_119)] p-8 relative">
          <h2 className="text-2xl xl:text-4xl font-bold">{selected.title}</h2>
          <div className="text-3xl font-bold my-2">{selected.subtitle}</div>
          <div className="text-2xl font-bold my-2">Context</div>
          <p className="my-4 text-gray-300 border-t-2 pt-4 line-clamp-[8] text-lg xl:text-xl xl:leading-8">{selected.content}</p>
          <button className="absolute -bottom-4 right-8 bg-white text-blue-900 px-6 py-2 font-semibold flex items-center gap-2 hover:bg-gray-200" onClick={() => handleReadMoreClick()}>
            Read More →
          </button>
        </div>
      </div>

      {modalOpen && selected.id === currentIndex && (
        <div className="fixed inset-0 bg-[#fff] items-center justify-center z-50 h-screen overflow-scroll">
          <button onClick={closeModal} className="absolute top-4 right-4 text-black hover:text-gray-300">
            <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <div className="flex flex-col md:flex-row justify-center w-full">
            <div className="pt-3">
              <img src={selected.popupImage} alt={selected.title} className="w-11/12 object-cover h-96 md:h-[540px] md:w-[70%] my-0 mx-auto rounded-[100px] py-10" />
              <div className="relative bg-gradient-to-b from-[rgb(1_33_91)] via-[rgb(8_48_80)] to-[#1B5632]">
                <div className="text-white flex flex-col items-left justify-left p-10 lg:py-10 lg:px-40">
                  <h2 className="text-xl xl:text-4xl font-bold">{selected.title}</h2>
                  <div className="text-3xl font-bold  my-2 xl:my-4">{selected.subtitle}</div>
                  <div className="text-3xl my-2">Context</div>
                  <div className="border-t-2 my-4 py-4 xl:py-8 text-base xl:text-lg">{selected.popupContext}</div>
                </div>
              </div>
              <div className="w-full bg-[#1B56321A] py-8">
              <div className="flex flex-col lg:flex-row items-center justify-center w-3/4 mx-auto ">
                <div className="w-1/3" >
                  <img className="h-60 w-full" src="/assets/blog/focus/read-more-images/circle.svg" alt="circle" />
                </div>
                <div className="w-1/3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="319.7019958496094" height="17.40399932861328" viewBox="0 0 319.702 17.404">
                    <g id="Group_5650" data-name="Group 5650" transform="translate(1131 5295)">
                      <line id="Line_243" data-name="Line 243" x2="311" transform="translate(-1131 -5285.5)" fill="none" stroke="#707070" strokeWidth="2" className="svg-elem-1"></line>
                      <circle
                        id="Ellipse_228"
                        data-name="Ellipse 228"
                        cx="8.702"
                        cy="8.702"
                        r="8.702"
                        transform="translate(-828.702 -5277.596) rotate(-90)"
                        fill="#296742"
                        className="svg-elem-2"
                      ></circle>
                    </g>
                  </svg>
                </div>
                <div className="w-1/3 content text-center my-4">
                  <h2 className="text-black text-3xl font-bold mb-4">Vision</h2>
                  <p className="text-black text-xl">{selected.popupVision}</p>
                </div>
              </div>
              </div>
              
              {selected.objectives.length && (
                <div className="flex flex-col items-center py-10">
                  <h2 className="text-black text-3xl font-bold my-4">Objectives</h2>
                  <div className="flex flex-col gap-4 lg:flex-row items-center lg:justify-evenly py-5 w-11/12">
                    {selected.objectives?.map((value, i) => {
                      return (
                        <div key={i} className="relative bg-gradient-to-b from-[#1B5632] via-[rgb(8_48_80)] to-[rgb(1_33_91)] w-1/3 xl:w-[20%] flex flex-col gap-8 p-4 xl:p-5 h-60">
                          <div className="">
                            <img className="h-10 w-10 xl:h-20 xl:w-20" src={`/assets/blog/focus/read-more-images/${i + 1}.svg`} alt="next" />
                          </div>
                          <div className="text-lg xl:text-xl">{value}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
              {selected.progressText.length && (
                <div className="relative bg-gradient-to-b from-[rgb(1_33_91)] via-[rgb(8_48_80)] to-[#1B5632]">
                  <div className="text-white flex flex-col items-center justify-center p-10 lg:py-10 lg:px-20">
                    <h2 className="text-white text-3xl mb-4">Year 1 Progress</h2>
                    <div className="flex flex-col w-5/6">
                      {selected.progressText?.map((text, i) => {
                        return (
                          <div
                            key={i}
                            className={`border-white rounded-s-full rounded-e-full py-8 px-28 flex flex-col gap-4 ${selected.progressText.length - 1 !== i ? "border" : "border border-t-0"}`}
                          >
                            {text?.textHeading ? <h3 className="text-2xl pl-4">{text?.textHeading}</h3> : null}
                            <div className="text-base xl:text-lg pl-4">{text.textContent}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
