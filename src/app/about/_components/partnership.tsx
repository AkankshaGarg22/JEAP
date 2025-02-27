"use client";
import { useRef, useState } from "react";

const slides = [
  {
    id: 1,
    title: "As a Member State, what can I expect to gain by 2027 by engaging with the JEAP?",
    items: [
      {
        header: "Pooling tools, resources & knowledge",
        img: "/assets/blog/about/partnership/1.jpg",
        details: [
          "Expertise in scoping, assessing and filling capacity gaps for emergency preparedness and response",
          "Longer sustainability of initiatives undertaken, including with other countries, through JEAP support",
          "Access to a qualified and multidisciplinary emergency health workforce",
          "Access to global joint proposal development opportunities to request funding for EPR",
        ],
      },
      {
        header: "Leadership and Advocacy",
        img: "/assets/blog/about/partnership/2.jpg",
        details: ["Become a model for other African nations by sharing your expertise and strengths", "Collaboration with key global partners, positioning your country as a leader in health EPR"],
      },
      {
        header: "Cross Border Coordination",
        img: "/assets/blog/about/partnership/3.jpg",
        details: ["Closer ties to a network of countries facing similar challenges", "Enhanced efficiency of your EPR efforts and of those in the region that impact your country"],
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
    <div className="h-screen xl:h-[1024px] flex flex-col items-center justify-start xl:justify-center bg-cover  lg:bg-contain bg-no-repeat bg-mb-about-curve md:bg-xl-about-curve z-[200]">
      <div className="basis-1/5 md:basis-1/4 flex flex-col items-center justify-end md:justify-center xl:justify-end md:mt-8 gap-2 xl:gap-2 text-center text-white md:w-3/4 md:pt-8 ">
        <h2 className="leading-1 xl:leading-[1.5] text-5xl md:text-[4rem] xl:text-6xl font-[arial-bold]">JEAP: Partnering for Impact</h2>
      </div>
      <div className="basis-4/5 md:basis-3/4 flex items-center justify-start xl:justify-center w-full xl:w-4/5">
        <div className="relative w-full xl:h-full ">
          {/* Slide Container */}
          <div
            ref={sliderRef}
            className="w-full xl:h-full overflow-hidden flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)`, width: `100%` }}
          >
            {slides.map((slide) => (
              <div key={slide.id} className="w-full flex flex-col xl:justify-center xl:h-full" style={{ flex: "0 0 100%" }}>
                <div className="xl:basis-1/5 flex flex-col items-center xl:justify-center px-2">
                  <p className="text-center text-white w-4/5 xl:w-full xl:leading-snug xl:text-xl">{slide.title}</p>
                </div>
                <div className="xl:basis-4/5 relative xl:h-full flex flex-col gap-2 xl:gap-4 xl:flex-row items-center justify-center xl:items-start">
                  {slide.items.map((item) => (
                    <div className="h-50 border border-white flex flex-col rounded-3xl w-3/4 hover:bg-white text-white hover:text-green-800" onClick={() => openModal(item)}>
                      <img className="h-40 xl:h-60 w-full rounded-3xl object-cover p-1 xl:p-2" src={item.img} alt={item.header} />
                      <p className=" text-center text-base xl:text-lg py-1 xl:py-2">{item.header}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button onClick={handlePrev} className="absolute left-2 top-4 xl:-left-[10%] xl:top-1/3 transform -translate-y-1/2">
            <div className="h-9 w-9 bg-white rounded-xl flex justify-center items-center hover:bg-red-200 duration-300 ease-in-out">
              <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12l4-4m-4 4 4 4" />
              </svg>
            </div>
          </button>
          <button onClick={handleNext} className="absolute right-2 top-4 xl:-right-[10%] xl:top-1/3  transform -translate-y-1/2">
            <div className="h-9 w-9 bg-white rounded-xl flex justify-center items-center duration-300 ease-in-out">
              <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
              </svg>
            </div>
          </button>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && selectedItem && (
        <div className="fixed inset-0 bg-[#185136] xl:bg-gradient-to-b from-[#1b5632] via-[#195334] to-[#01205d] bg-opacity-20 xl:bg-opacity-50 flex items-center justify-center z-50">
          <button onClick={closeModal} className="md:hidden absolute top-4 right-4 text-white hover:text-gray-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <div className=" bg-[#185136] xl:bg-[#185136] text-white rounded-xl w-4/5 md:w-3/4 lg:w-2/3 xl:w-2/3 relative overflow-hidden">
            {/* Close button */}
            <button onClick={closeModal} className="hidden md:block absolute top-4 right-4 text-white hover:text-gray-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            <div className="flex flex-col md:flex-row h-full">
              {/* Image - full width on mobile, half width on larger screens */}
              <div className="w-full md:w-1/2 xl:aspect-square">
                <img src={selectedItem.img} alt={selectedItem.header} className="w-full object-cover md:h-full rounded-xl" />
              </div>

              {/* Right side - Content */}
              <div className="w-full md:w-1/2 p-6 overflow-y-auto">
                <h3 className="text-2xl font-bold mb-4">{selectedItem.header}</h3>

                <ul className="space-y-4">
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
