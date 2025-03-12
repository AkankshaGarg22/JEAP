"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const carouselItems = [
  {
    id: 1,
    image: "/assets/blog/focus/carousel/1.jpg",
    title: "Developing, promoting and supporting countries to adapt regional tools",
    alt: "Warehouse with medical supplies",
  },
  {
    id: 2,
    image: "/assets/blog/focus/carousel/2.jpg",
    title: "Facilitation cross-border coordination",
    alt: "Workers coordinating at border crossing",
  },
  {
    id: 3,
    image: "/assets/blog/focus/carousel/3.jpg",
    title: "Pooling resources and knowledge",
    alt: "Medical worker organizing supplies",
  },
  {
    id: 4,
    image: "/assets/blog/focus/carousel/1.jpg",
    title: "Building regional leadership",
    alt: "Warehouse with medical supplies",
  },
  {
    id: 5,
    image: "/assets/blog/focus/carousel/5.jpg",
    title: "Facilitation cross-border coordination",
    alt: "Conducting joint advocacy to advance African interests",
  },
];

export default function Highlights() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = carouselItems.length;

  const visibleItemCount = 3;

  // Function to get the currently visible items
  const getVisibleItems = useCallback(() => {
    const items = [];
    for (let i = 0; i < visibleItemCount; i++) {
      const index = (currentIndex + i) % carouselItems.length;
      items.push(carouselItems[index]);
    }
    return items;
  }, [currentIndex, carouselItems]);

  // Auto-advance the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [carouselItems.length]);

  return (
    <div className="text-white flex flex-col gap-4 items-center justify-around">
      <div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Highlights from early implementation</h2>
      </div>
      <div>{/* img */}</div>
      <div className="bg-[rgb(49_93_112)] rounded-xl flex items-center justify-center md:w-5/6">
        <p className="text-center xl:text-[24px] md:w-3/5 p-6">
          Overall, <span className="font-bold text-[16px] xl:text-[30px] tracking-wider">36 of 55 countries</span> have been directly served by key projects of the JEAP initiative since{" "}
          <span className="font-bold text-[16px] xl:text-[30px] tracking-wider">2022</span>.
        </p>
      </div>

      <p className="text-center max-w-3xl xl:text-[20px]">
        The remaining countries on the continent have been served through JEAP regional strategies and tools. Across TWGs, activities strategically target service areas where regional intervention can
        be catalytic. These include:
      </p>

      <div className="w-full">
        {/* img carousel */}

        <div className="flex flex-col md:flex-row gap-4 px-4 md:px-0 py-4 transition-all duration-500 ease-in-out">
          {getVisibleItems().map((item) => (
            <div key={`${item.id}-${currentIndex}`} className="relative w-full md:w-1/3 h-48 md:h-64 overflow-hidden rounded-lg transition-all duration-500 ease-in-out">
              <Image src={item.image} alt={item.alt} fill className="object-cover opacity-50" sizes="(max-width: 768px) 100vw, 33vw" priority={item.id <= 3} />
              {/* Semi-transparent overlay */}
              <div className="absolute inset-0 bg-black/30"></div>
              {/* Text overlay */}
              <div className="absolute bottom-0 left-0 p-4 w-full">
                <h3 className="text-lg md:text-xl font-medium text-white">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="text-center max-w-7xl xl:text-[20px]">
        Activities that have been completed so far demonstrate the potential for the Partnership’s impact. For example, in the workforce development collaboration area, which has the longest history,
        the Partnership demonstrated the power of pooling regional resources by jointly training 1,350 AVoHC-SURGE emergency responders, with 14 countries now deploying these responders. This has
        resulted in immeasurable impact at the country level, with AVoHC-SURGE teams contributing to timely and effective response to and closure of emergencies.
      </p>
      <p className="text-center max-w-7xl xl:text-[20px]">
        In response readiness and coordination, the Partnership launched a key regional tool to strengthen emergency coordination: the first-ever multistakeholder Strategic Plan for Strengthening
        Public Health Emergency Operations Centres in Member States of Africa and Eastern Mediterranean Region. The Partnership is now actively supporting Member States to adapt the strategy to
        national contexts and begin implementation.
      </p>
      <p className="text-center max-w-7xl xl:text-[20px]">
        Other highlights across collaboration areas include conducting joint advocacy to secure blanket customs clearance to speed up the delivery of essential medicines, facilitating cross-border
        simulation exercises, and joining forces to operate a pan-African network of 12 specialized laboratories across the continent to enhance genomic sequencing. Implementation progress is
        described in more detail for each Collaboration Area in the following sections. Across all Collaboration Areas, capacity building efforts were a focus of the first year and will continue to be
        prioritized to encourage sustainability.
      </p>
    </div>
  );
}
