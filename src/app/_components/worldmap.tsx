"use client";
import { memo, useEffect, useState } from "react";
import { csv } from "d3-fetch";
import { scaleLinear } from "d3-scale";
import { ComposableMap, Geographies, Geography, Sphere, Graticule } from "react-simple-maps";
import Link from "next/link";
import Device from "./utility/device/device";

function getRankWithSuffix(rank: number) {
  // Check if the rank is between 11 and 13 (special cases)
  if (rank >= 11 && rank <= 13) {
    return rank + "th";
  }
  // For other ranks, determine the suffix based on the last digit
  switch (rank % 10) {
    case 1:
      return rank + "st";
    case 2:
      return rank + "nd";
    case 3:
      return rank + "rd";
    default:
      return rank + "th";
  }
}

const WorldMap = () => {
  const [content, setContent] = useState("");
  const geoUrl = "/features.json";

  const colorScale = scaleLinear<string>().domain([0, 0.3, 0.6, 1]).range(["#f1686b", "#fcbe79", "#fbe884", "#62bf7b"]);

  const [data, setData] = useState<any[]>([]);
  const [left, setLeft] = useState(0)
  const [top, setTop] = useState(0)

  useEffect(() => {
    csv(`/Book1.csv`).then((data) => {
      setData(data);
      console.log("Number of Countries with Data:", data.length);
    });
  }, []);

  const getPos = (event: any) => {
    var bounding = document.getElementById('anchor')?.getBoundingClientRect();

    setTop(event.clientY - (bounding ? bounding?.top : 0))
    setLeft(event.clientX - (bounding ? bounding?.left : 0))
  }

  return (
    <Device>
      {({ isMobile }) => {
        return <div className="min-h-screen flex flex-col items-center justify-center gap-2 bg-gradient-to-b from-[#EEEEEE] to-[#FFFFFF] relative">
          <h1 className="font-[arial-bold] text-2xl md:text-4xl tracking-wide text-center pt-[20px] md:pt-[30px]">INFECTIOUS DISEASE VULNERABILITY INDEX WORLD MAP</h1>
          <div className="h-[400px] md:h-[700px] xl:h-[1200px] w-full relative" >
            {data.length > 0 && (
              <ComposableMap id="anchor" projection="geoMercator" projectionConfig={{ scale: 100, center: [0, 0] }} width={isMobile ? 600 : 1000} height={isMobile ? 50 : 200} style={{ height: isMobile ? "50vh" : "85%", width: "100%", }}>
                <Geographies geography={geoUrl}>
                  {({ geographies }) =>
                    geographies.map((geo) => {
                      const d = data.find((s) => s.ISO3 === geo.id);
                      return (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          fill={d ? `${colorScale(d["Overall Score Normed"])}` : "#F5F4F6"}
                          onMouseEnter={(event) => {
                            setContent(geo.properties.name ? geo.properties.name + ": " + (d?.Rank ? getRankWithSuffix(d?.Rank) : "NA") : "");
                            getPos(event)
                          }}
                          onMouseLeave={() => {
                            setContent("");
                          }}
                          id="map-country"
                          style={{
                            default: { outline: "none", },
                            hover: { outline: "none" },
                            pressed: { outline: "none" },
                          }}
                        />
                      );
                    })
                  }
                </Geographies>
              </ComposableMap>
            )}
            {content ? <div className={`absolute bg-white text-[#0C1F49] text-md rounded py-2 px-4`} style={{ left: left + 'px', top: top + 'px', clipPath: "polygon(0 0,100% 0,100% 90%,60% 90%,50% 100%,40% 90%,0 90%)", boxShadow: "0px 3px 6px #00000029" }}>{content}</div> : null}
          </div>

          <div className="w-full md:w-[85%] text-center xl:absolute xl:bottom-[6%]">
            <div className="flex flex-row justify-between px-4">
              <div className="flex flex-col">
                <p className="text-left">Vulnerability Index</p>
                <div className="h-[50px] w-[150px] md:w-[200px] bg-gradient-to-r from-[#f1686b] via-[#fcbe79] via-[#fbe884] to-[#62bf7b]"></div>
                <div className="flex justify-between">
                  <p>High</p>
                  <p>Low</p>
                </div>
              </div>
              <div className="flex items-center">
                <p className="px-4 text-center text-sm md:text-lg">These countries have been ranked from most to least vulnerable. Hover over each country to see their ranking.</p>
              </div>
              <div className="flex items-center">
                <Link className="underline-offset-1	underline text-[#1A5632]" href={'https://www.rand.org/pubs/research_reports/RR1605.html'}>Source</Link>
              </div>
            </div>
            <h2 className="font-black text-2xl md:text-3xl pt-[20px] px-4 text-balance">
              The JEAP is a blueprint that amplifies the collective yet unique strengths of African nations while strategically charting a course for strengthening emergency preparedness, detection, and response in the context of humanitarian crises and climate-related disasters.
            </h2>
          </div>
        </div>
      }}
    </Device>

  );
};

export default memo(WorldMap);