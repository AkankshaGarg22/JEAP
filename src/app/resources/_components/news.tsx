"use client";
import Link from "next/link";

const newsArr = [
  {
    link: "https://www.afro.who.int/countries/united-republic-of-tanzania/news/providing-mental-health-care-wake-marburg-virus-disease-outbreak",
    para: "Providing mental health care in the wake of Marburg virus disease outbreak",
    img: "https://www.afro.who.int/sites/default/files/2025-03/CAV_0742.JPG",
  },
  {
    link: "https://www.afro.who.int/countries/angola/news/strengthening-active-cholera-case-finding-angola",
    para: "Strengthening active cholera case finding in Angola",
    img: "https://www.afro.who.int/sites/default/files/styles/article_sidebar_image_360w_/public/2025-02/IMG_0535.jpg?itok=wc3gYgvR",
  },
  {
    link: "https://www.afro.who.int/countries/uganda/news/uganda-discharges-all-eight-ebola-disease-patients",
    para: "Uganda discharges all eight Ebola disease patients",
    img: "https://www.afro.who.int/sites/default/files/2025-02/DSC02976%20%281%29.JPG"
  }
];

export default function News() {
  return (
    <div>
    <section className="bg-gradient-to-b from-[#1B5632] via-[rgb(8_48_80)] to-[rgb(1_33_91)] text-white py-10 px-4 md:px-16">
      <div className="max-w-7xl mx-auto ">
        <h2 className="text-center xl:leading-[1] text-3xl md:text-7xl font-[arial-bold] leading-tight mb-6">Newsroom</h2>

        {/* See All Button (Desktop) */}
        <div className="hidden md:block w-full text-right mb-6">
          <Link href="/newsroom" className=" mt-4 shadow-[0px_0px_9px] shadow-white border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black">See all</Link>
        </div>
        {/* Desktop Layout */}
        <div className="hidden md:grid grid-cols-6 gap-6 mb-6 w-[90%]">
          {/* Left Side - Main News */}
          <div className="col-span-3 col-start-2 bg-white text-[#1B5632] rounded-lg shadow-lg p-4">
            <a className="flex flex-col" href="https://www.afro.who.int/countries/nigeria/news/high-level-delegation-visits-nigeria-urges-commitments-government" target="_blank">
              <img className="rounded-lg h-80 w-full" src="https://www.afro.who.int/sites/default/files/styles/article_sidebar_image_360w_/public/2025-02/DSC07937.jpg?itok=Llxb1J6p" alt="Main News" />
              <p className="mt-3 text-lg font-medium">High-level delegation visits Nigeria, urges commitments from government</p>
            </a>
          </div>

          {/* Right Side - News List */}
          <div className="col-span-2 flex flex-col">
            <div className="rounded-lg pr-4  space-y-4 overflow-y-auto max-h-[450px]">
              {newsArr.map((item, index) => (
                <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className=" bg-[rgb(49_93_112)] py-3 px-2 rounded-lg flex space-x-2 hover:bg-[rgb(39_83_102)] transition">
                  <img src={item.img} alt="News Thumbnail" className="rounded-md h-32 w-32" />
                  <p className="text-base">{item.para}</p>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col items-center">
          <div className="bg-white text-black rounded-lg shadow-lg p-4 w-full">
            <a className="flex flex-col" href="https://www.afro.who.int/countries/nigeria/news/high-level-delegation-visits-nigeria-urges-commitments-government" target="_blank">
              <img
                src="https://www.afro.who.int/sites/default/files/styles/article_sidebar_image_360w_/public/2025-02/DSC07937.jpg?itok=Llxb1J6p"
                alt="Main News"
                width={400}
                height={250}
                className="rounded-lg"
              />
              <p className="mt-3 text-lg font-medium">High-level delegation visits Nigeria, urges commitments from government</p>
            </a>
          </div>

          {/* News List */}
          <div className="mt-4 space-y-3 w-full">
            {newsArr.map((item, index) => (
              <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="bg-[rgb(49_93_112)] py-4 px-3 rounded-lg flex space-x-4">
                <img src={item.img} alt="News Thumbnail" width={80} height={80} className="rounded-md" />
                <p className="text-sm">{item.para}</p>
              </a>
            ))}
          </div>

          {/* See All Button (Mobile) */}
          <Link href="/newsroom" className="mt-4 border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black">See all</Link>
        </div>
      </div>
    </section>
    </div>

  );
}
