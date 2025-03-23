"use client"
import { useEffect, useState } from "react";
import Footer from "../_components/layout/footer";
import { Articles } from "@/interfaces/article";
import { parseImageFromHtml } from "@/lib/parseImageFromHtml";

export default function Index() {

  const [articles, setArticles] = useState<Articles[] | undefined>([]);
  
    useEffect(() => {
      fetch("/api/rss")
        .then((res) => res.json())
        .then((data) => {
          const restArticles = data.slice(2);
          setArticles(restArticles);
        });
    }, []);
  
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
          {articles?.length && articles.map((item, index) => (
            <div
              key={index}
              className="bg-emerald-700/30 rounded-lg overflow-hidden p-2"
            >
              <div className="relative h-48 w-full">
                <img
                  src={parseImageFromHtml(item)}
                  alt={item.title}
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="p-4 text-white">
                <p className="text-sm mb-2 min-h-[2.5rem] line-clamp-2">
                  {item.title}
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
