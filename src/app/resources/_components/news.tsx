"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Articles } from "@/interfaces/article";
import { parseImageFromHtml } from "@/lib/parseImageFromHtml";

export default function News() {
  const [articles, setArticles] = useState<Articles[] | undefined>([]);
  const [mainArticle, setMainArticle] = useState<Articles | undefined>();

  useEffect(() => {
    fetchRSS();
  }, []);

  const fetchRSS = async () => {
    try {
      const response = await fetch("/api/rss");
      const data = await response.json();
      const restArticles = data?.slice(1);
      let uniqueArticles = restArticles.filter((article: Articles, index: number, self: Articles[]) =>
        index === self.findIndex((a) => a.title === article.title)
      );
      setArticles(uniqueArticles);
      setMainArticle(data[0]);
    } catch (error) {
      console.error('Failed to fetch RSS feed:', error);
    }
  };

  return (
    <div>
      <section className="bg-gradient-to-b from-[#1B5632] via-[rgb(8_48_80)] to-[rgb(1_33_91)] text-white py-10 px-4 md:px-16">
        <div className="max-w-7xl mx-auto ">
          <h2 className="text-center xl:leading-[1] text-xl md:text-[2rem] xl:text-[50px] font-bold leading-tight mb-6">
            Newsroom
          </h2>

          {/* See All Button (Desktop) */}
          <div className="hidden md:block w-full text-right mb-6">
            <Link
              href="/newsroom"
              className=" mt-4 shadow-[0px_0px_9px] shadow-white border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black"
            >
              See all
            </Link>
          </div>
          {/* Desktop Layout */}
          <div className="hidden md:grid grid-cols-6 gap-6 mb-6 w-[90%]">
            {/* Left Side - Main News */}
            {mainArticle ? <div className="col-span-3 col-start-2 bg-[rgb(49_93_112)] rounded-lg shadow-lg p-4 hover:bg-white hover:text-green-800">
              <a
                className="flex flex-col"
                href={mainArticle?.link}
                target="_blank"
              >
                <img
                  className="rounded-lg h-80 w-full"
                  src={parseImageFromHtml(mainArticle)}
                  alt="Main News"
                />
                <p className="mt-3 text-lg font-medium">{mainArticle?.title}</p>
              </a>
            </div>: null}

            {/* Right Side - News List */}
            <div className="col-span-2 flex flex-col">
              <div className="rounded-lg pr-4  space-y-4 overflow-y-auto max-h-[450px]">
                {articles && articles?.length ?
                  articles.map(
                    (item, index) => (
                        <a
                          key={index}
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className=" bg-[rgb(49_93_112)] py-3 px-2 rounded-lg flex space-x-2 transition hover:bg-white hover:text-green-800"
                        >
                          <img
                            src={parseImageFromHtml(item)}
                            alt="News Thumbnail"
                            className="rounded-md h-36 w-44"
                          />
                          <p className="text-base">{item.title}</p>
                        </a>
                      )
                  ): null}
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden flex flex-col items-center">
            <div className="bg-white text-black rounded-lg shadow-lg p-4 w-full">
              <a
                className="flex flex-col"
                href={mainArticle?.link}
                target="_blank"
              >
                <img
                  src={parseImageFromHtml(mainArticle)}
                  alt="Main News"
                  width={400}
                  height={250}
                  className="rounded-lg"
                />
                <p className="mt-3 text-lg font-medium">{mainArticle?.title}</p>
              </a>
            </div>

            {/* News List */}
            <div className="mt-4 space-y-3 w-full">
              {articles?.length ?
                articles.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[rgb(49_93_112)] py-4 px-3 rounded-lg flex space-x-4"
                  >
                    <img
                      src={parseImageFromHtml(item)}
                      alt="News Thumbnail"
                      width={80}
                      height={80}
                      className="rounded-md"
                    />
                    <p className="text-sm">{item.title}</p>
                  </a>
                )): null}
            </div>

            {/* See All Button (Mobile) */}
            <Link
              href="/newsroom"
              className="mt-4 border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black"
            >
              See all
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
