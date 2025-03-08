"use client";
import { useRef, useState } from "react";

const slides = [
  {
    id: 1,
    title: "As a Member State, what can I expect to gain by 2027 by engaging with the JEAP?",
    items: [
      {
        header: "Pooling tools, resources & knowledge",
        img: "/assets/blog/about/partnership/1.webp",
        details: [
          "Expertise in scoping, assessing and filling capacity gaps for emergency preparedness and response",
          "Longer sustainability of initiatives undertaken, including with other countries, through JEAP support",
          "Access to a qualified and multidisciplinary emergency health workforce",
          "Access to global joint proposal development opportunities to request funding for EPR",
        ],
      },
      {
        header: "Leadership and Advocacy",
        img: "/assets/blog/about/partnership/2.webp",
        details: ["Become a model for other African nations by sharing your expertise and strengths", "Collaboration with key global partners, positioning your country as a leader in health EPR"],
      },
      {
        header: "Cross Border Coordination",
        img: "/assets/blog/about/partnership/3.webp",
        details: ["Closer ties to a network of countries facing similar challenges", "Enhanced efficiency of your EPR efforts and of those in the region that impact your country"],
      },
    ],
  },
  {
    id: 2,
    title: "As a Member State, how will the JEAP help me achieve my EPR goals?",
    items: [
      {
        header: "Pooling tools, resources & knowledge",
        img: "/assets/blog/about/partnership/4.webp",
        details: [
          "Make available tools and information to leverage best practices from other countries",
          "Provide access to catalytic funding to set up infrastructure in new areas",
          "Creating a common pool of resources to improve efficiencies",
          "Commit to and provide support for piloting innovative ways of doing business",
          "Improve resource efficiency to tackle interrelated problems more effectively",
        ],
      },
      {
        header: "Building regional leadership and conducting joint advocacy",
        img: "/assets/blog/about/partnership/5.webp",
        details: [
          "Create opportunities to leverage countries’ complementarities and respective strengths",
          "Share expertise at global forums, elevating your country’s role in international health security",
          "Facilitate joint advocacy on behalf of African countries with global and regional partners",
          "Strengthen community mobilisation, assessments and research on RCCE and SBC",
        ],
      },
      {
        header: "Facilitate cross border coordination",
        img: "/assets/blog/about/partnership/6.webp",
        details: [
          "Connect countries facing similar challenges to one another for collaboration",
          "Share strategies to improve inter-country collaboration e.g. frameworks, partnerships, and platforms",
        ],
      },
    ],
  },
];

interface SlideItem {
  header: string;
  img: string;
  details: string[]; // Array of details for modal content
}

interface Slide {
  id: number;
  title: string;
  items: SlideItem[];
}

export default function PartnerShip() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<SlideItem | null>(null);

  const totalSlides = slides.length;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const openModal = (item: SlideItem) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <div className="h-screen xl:h-screen flex flex-col items-center justify-start md:justify-center xl:justify-center bg-cover xl:bg-cover bg-no-repeat bg-mb-about-curve bg-top md:bg-xl-about-curve z-[200]">
      <div className="basis-1/4 xs:basis-1/5 md:basis-1/4 xl:basis-1/4 2xl:basis-1/3 flex flex-col items-center justify-end md:justify-center xl:justify-end mb-2 xs:mb-4 md:mt-8 gap-2 xl:gap-2 text-center text-white w-3/4 xs:w-full md:w-3/4 md:pt-8 ">
        <h2 className="leading-none xl:leading-[1.5] text-2xl md:text-[4rem] xl:text-[70px] font-[arial-bold]">JEAP: Partnering for Impact</h2>
      </div>
      <div className="basis-3/4 xs:basis-4/5 md:basis-3/4 xl:basis-3/4 2xl:basis-2/3 w-full xl:w-5/6 relative xs:mb-2 xl:mb-0 2xl:mb-4">
        {/* Slide Container - Fixed width approach */}
        <div className="w-full h-full overflow-hidden 2xl:flex 2xl:flex-col 2xl:justify-center">
          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {slides.map((slide) => (
              <div key={slide.id} className="w-full flex-shrink-0 flex flex-col gap-2 md:gap-0 xl:gap-8 md:justify-around">
                <div className="md:basis-1/10 xl:basis-1/5 flex flex-col items-center px-2 mb-1 xs:mb-2 xl:my-4 2xl:my-2">
                  <p className="text-center text-white w-full xl:w-full xl:leading-snug md:text-xl xl:text-xl 2xl:text-2xl">{slide.title}</p>
                </div>

                <div className="md:basis-9/10 xl:basis-4/5 flex flex-col xl:flex-row items-center xl:items-stretch justify-center gap-2 md:gap-6 xl:gap-2 px-4">
                  {slide.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="border border-white flex flex-col rounded-3xl w-4/5 md:w-[30%] hover:bg-white text-white hover:text-green-800 cursor-pointer transition-colors duration-300"
                      onClick={() => openModal(item)}
                    >
                      <img className="h-32 xs:h-40 xl:max-2xl:h-60 2xl:h-96 w-full rounded-t-3xl object-cover p-1 md:p-2" src={item.img} alt={item.header} />
                      <p className="text-center text-sm xs:text-base xl:text-lg 2xl:text-[20px] py-1 xs:py-2 px-2">{item.header}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <button onClick={handlePrev} className="absolute left-2 top-1/2 xl:-left-[5%] transform -translate-y-1/2 z-10" aria-label="Previous slide">
          <div className="h-9 w-9 bg-white rounded-xl flex justify-center items-center hover:bg-red-200 transition duration-300">
            <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12l4-4m-4 4 4 4" />
            </svg>
          </div>
        </button>

        <button onClick={handleNext} className="absolute right-2 top-1/2 xl:-right-[5%] transform -translate-y-1/2 z-10" aria-label="Next slide">
          <div className="h-9 w-9 bg-white rounded-xl flex justify-center items-center hover:bg-gray-200 transition duration-300">
            <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
            </svg>
          </div>
        </button>
      </div>

      {/* Modal */}
      {modalOpen && selectedItem && (
        <div className="fixed inset-0 bg-[#185136] xl:bg-gradient-to-b from-[#1b5632] via-[#195334] to-[#01205d]  xl:bg-opacity-50 flex items-center justify-center z-50">
          <button onClick={closeModal} className="md:hidden absolute top-4 right-4 text-white hover:text-gray-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <div className=" bg-[#185136] text-white rounded-xl w-4/5 md:w-3/4 lg:w-2/3 xl:w-2/3 relative overflow-hidden">
            {/* Close button */}
            <button onClick={closeModal} className="hidden md:block absolute top-4 right-4 text-white hover:text-gray-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            <div className="flex flex-col md:flex-row h-full">
              {/* Image - full width on mobile, half width on larger screens */}
              <div className="w-full md:w-1/2 xl:aspect-square">
                <img src={selectedItem.img} alt={selectedItem.header} className="w-full object-cover h-40 xs:h-60 md:h-full rounded-xl" />
              </div>

              {/* Right side - Content */}
              <div className="w-full md:w-1/2 p-2 xs:p-6 overflow-y-auto">
                <h3 className="text-xl xs:text-2xl font-bold mb-4">{selectedItem.header}</h3>

                <ul className="space-y-2 xs:space-y-4">
                  {selectedItem.details.map((detail, index) => (
                    <li key={index} className="flex">
                      <span className="mr-2 flex-shrink-0">→</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
