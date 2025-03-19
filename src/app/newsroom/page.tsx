import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Footer from "../_components/layout/footer";

export default function Index() {
  // Static news array - this will be replaced with real data later
  const newsData = [
    {
      id: "1",
      headline:
        "High-level delegation visits Nigeria, urges commitments from government",
      imageUrl:
        "https://www.afro.who.int/sites/default/files/styles/article_sidebar_image_360w_/public/2025-02/DSC07937.jpg?itok=Llxb1J6p",
      link: "https://www.afro.who.int/countries/nigeria/news/high-level-delegation-visits-nigeria-urges-commitments-government",
    },
    {
      id: "2",
      headline:
        "Providing mental health care in the wake of Marburg virus disease outbreak",
      imageUrl:
        "https://www.afro.who.int/sites/default/files/styles/article_sidebar_image_360w_/public/2025-03/CAV_0742.JPG?itok=BSb9Plgr",
      link: "https://www.afro.who.int/countries/united-republic-of-tanzania/news/providing-mental-health-care-wake-marburg-virus-disease-outbreak",
    },
    {
      id: "3",
      headline: "Strengthening active cholera case finding in Angola",
      imageUrl:
        "https://www.afro.who.int/sites/default/files/styles/article_sidebar_image_360w_/public/2025-02/IMG_0535.jpg?itok=wc3gYgvR",
      link: "https://www.afro.who.int/countries/angola/news/strengthening-active-cholera-case-finding-angola",
    },
    {
      id: "4",
      link: "https://www.afro.who.int/countries/uganda/news/uganda-discharges-all-eight-ebola-disease-patients",
      headline: "Uganda discharges all eight Ebola disease patients",
      imageUrl:
        "https://www.afro.who.int/sites/default/files/2025-02/DSC02976%20%281%29.JPG",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1B5632] via-[rgb(8_48_80)] to-[rgb(1_33_91)] pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header with back button */}
        <div className="flex items-center justify-between pt-16 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center flex-grow">
            NEWSROOM
          </h1>
          {/* <Link href="/">
              <button className="bg-emerald-700/70 hover:bg-emerald-700 text-white px-4 py-2 rounded-full transition duration-150 ease-in-out">← Back</button>
            </Link> */}
        </div>

        <hr className="border-emerald-700 mb-8" />

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div className="flex space-x-2">
            {/* <button className="bg-emerald-700 text-white px-6 py-2 rounded-full">
              All
            </button> */}
            {/* <button className="bg-emerald-700/50 text-white/80 hover:bg-emerald-700/70 px-6 py-2 rounded-full transition">
              Newest
            </button> */}
          </div>

          {/* <div className="w-full md:w-64">
            <input type="text" placeholder="Search" className="w-full px-4 py-2 bg-transparent border-b border-white/30 text-white placeholder-white/50 focus:outline-none focus:border-white" />
          </div> */}
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsData.map((item) => (
            <div
              key={item.id}
              className="bg-emerald-700/30 rounded-lg overflow-hidden p-2"
            >
              <div className="relative h-48 w-full">
                <img
                  src={item.imageUrl}
                  alt={item.headline}
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="p-4 text-white">
                <p className="text-sm mb-2 min-h-[2.5rem] line-clamp-2">
                  {item.headline}
                </p>
                <a
                  className="mt-3 bg-white text-emerald-800 px-4 py-1 rounded-full text-sm font-medium hover:bg-gray-100 transition"
                  href={item.link}
                  target="_blank"
                >
                  Read article
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative">
        <Footer />
      </div>
    </div>
  );
}
