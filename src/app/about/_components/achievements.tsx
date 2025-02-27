"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    image: "/assets/blog/jpgs/jean_kaseya.webp",
    name: " - Dr Jean Kaseya",
    pos: "Director-General, Africa CDC",
    quote:
      "The achievements of JEAP in its inaugural year are an indication of the strength and impact of our united approach to health emergencies. By sharing resources and strengths, we have been able to support Member States with greater agility. The JEAP is well positioned to advance the African Union's Vision 2063 to create a prosperous Africa based on inclusive growth and sustainable development.",
  },
  {
    id: 2,
    image: "/assets/blog/jpgs/Dr Abdou.webp",
    name: " - Dr Abdou Salam Gueye",
    pos: "Director, WHO Health Emergencies Programme",
    quote:
      "The first year of the JEAP has been a testament to our collective resolve and commitment to strengthening health emergency preparedness and response in Africa. The collaborative efforts showcased through JEAP have significantly bolstered our capabilities to detect, prevent, and respond to health threats. We are stronger together.",
  },
  {
    id: 3,
    image: "/assets/blog/jpgs/RickBrenan.webp",
    name: " - Dr Rick Brennan",
    pos: "Director of Health Emergencies, WHO",
    quote:
      "The JEAP is proving the power of partnership in addressing health emergencies. The strides we are making enhancing rapid response mechanisms and improving health system resilience with Africa CDC directly contribute to WHO's goal of saving lives and reducing suffering.",
  },
];

export default function Achievements() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((current + 1) % slides.length);
    }, 10000); // Change slide every 10 seconds

    return () => clearInterval(timer);
  }, [current]);

  return (
    <div className="min-h-screen w-full xl:flex xl:flex-col xl:justify-start my-6 xl:my-0 ">
      <div className="flex flex-col gap-2 xl:gap-4 justify-center items-center w-full">
        <h2 className="text-center text-3xl xl:text-4xl font-extrabold tracking-wider w-4/5 xl:w-full antialiased font-[arial-bold]">Achievements</h2>
        <p className="text-lg xl:text-xl font-bold tracking-widest antialiased">Messages from the JEAP community</p>
      </div>
      {/* Slides */}
      <div className="flex flex-col gap-4 mt-4">
        <div className="relative flex justify-center items-center h-full">
          {/* Previous */}
          <div className="hidden md:block absolute left-0 w-1/5 scale-75 opacity-90 -translate-x-1/4 transition-all h-full">
            <img src={slides[(current - 1 + slides.length) % slides.length].image} alt="previous" className="w-full h-full object-cover rounded-lg blur-sm" />
          </div>

          {/* Current */}
          <div className="relative z-10 w-full md:w-3/4 transition-all xl:h-full">
            <div className="flex flex-col md:flex-row justify-center items-center xl:justify-start xl:items-stretch gap-8 xl:gap-0 mx-2 bg-[#1b5632] rounded-xl">
              <div className="relative w-full xl:max-w-[360px]">
                <div className="h-full w-full min-h-[240px] xl:min-h-[570px] inset-0">
                  <img className="block w-full h-full rounded-t-xl xl:rounded-l-xl xl:rounded-r-none object-cover" src={slides[current].image} alt={slides[current].name} />
                </div>
                <svg className="md:hidden absolute flex -bottom-[40px]" xmlns="http://www.w3.org/2000/svg" width="220" height="65" viewBox="0 0 220 65" fill="none">
                  <path
                    d="M9.59834 13.8314L6.16533 17.2007C-0.31931 23.5649 -3.97264 32.2692 -3.97264 41.3551C-3.97264 60.0465 11.1798 75.1989 29.8712 75.1989L195.967 75.1989C209.235 75.1989 219.991 64.4429 219.991 51.1746C219.991 37.9064 209.235 27.1504 195.967 27.1504L105.3 27.1504C93.3375 27.1504 81.7789 22.3835 73.2415 14.0047C55.6203 -3.28925 27.2196 -3.46254 9.59834 13.8314Z"
                    fill="#1b5632"
                  ></path>
                </svg>
                <svg className="hidden xl:block scale-1 -right-[70px] transition-all  absolute top-[8px]" xmlns="http://www.w3.org/2000/svg" width="104" height="350" viewBox="0 0 104 350" fill="none">
                  <path
                    d="M37 11.6752V0H104V350H37V190.072C37 173.391 30.4545 157.377 18.7708 145.472C-5.53472 120.707 -5.53472 81.0397 18.7708 56.2743C30.4545 44.3695 37 28.3554 37 11.6752Z"
                    fill="#1b5632"
                  ></path>
                </svg>
                <div className="absolute flex justify-center items-center -bottom-[45px] xl:top-[14%] left-[10px] xl:left-[95%]  w-[62px] h-[62px] rounded-full ">
                  <img className="w-full h-full" src="/assets/blog/about/accordian/Group 5654.png" alt="" />
                </div>
              </div>

              <div className="w-full h-full xl:w-4/5 xl:min-h-[570px] space-y-4 text-white py-4 px-4 xl:px-20 flex flex-col items-start xl:justify-around xl:items-start">
                <p className="text-justify">"{slides[current].quote}"</p>
                <div className="text-start">
                  <h3 className="text-2xl font-bold xl:mb-4">{slides[current].name}</h3>
                  <p className="text-lg">{slides[current].pos}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Next */}
          <div className="hidden md:block absolute right-0 w-1/5 scale-75 opacity-90 translate-x-1/4 transition-all h-full">
            <img src={slides[(current + 1) % slides.length].image} alt="next" className="w-full h-full object-cover rounded-lg blur-sm" />
          </div>
        </div>
        {/* Dots */}
        <div className="md:hidden flex justify-center gap-2">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} className={`w-2 h-2 border-2 border-black rounded-full ${i === current ? "bg-green-800" : ""}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
