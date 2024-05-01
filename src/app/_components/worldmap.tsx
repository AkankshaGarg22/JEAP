"use client";
import { memo, useEffect, useState } from "react";
import { csv } from "d3-fetch";
import { scaleLinear } from "d3-scale";
import { ComposableMap, Geographies, Geography, Sphere, Graticule } from "react-simple-maps";
import Link from "next/link";
import Device from "./device/device";

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
    });
  }, []);

  const getPos = (event: any) => {
    var bounding = document.getElementById('anchor')?.getBoundingClientRect();

    setTop(event.clientY - (bounding ? bounding?.top : 0))
    setLeft(event.clientX - (bounding ? bounding?.left : 0))
  }

  return (
    <Device>
      {({isMobile}) => {
        return <div className="min-h-screen flex flex-col items-center justify-center gap-2 bg-gradient-to-b from-[#EEEEEE] to-[#FFFFFF] relative">
        <h1 className="font-[compasse-extrabold] text-2xl md:text-4xl tracking-wide text-center pt-[35px] md:pt-[150px]">INFECTIOUS DISEASE VULNERABILITY INDEX WORLD MAP</h1>
        <div className="h-[400px] md:h-[700px] xl:h-[1300px] relative" >
          {data.length > 0 && (
            <ComposableMap id="anchor" projection="geoMercator" projectionConfig={{ scale: 100, center: [0,0] }} width={isMobile ? 600 : 1000} height={isMobile ? 50 : 200} style={{ height: "100%", width: "100%" }}>
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
                          setContent(geo.properties.name ? geo.properties.name + ": " + (d?.Rank ? d?.Rank : "NA") : "");
                          getPos(event)
                        }}
                        onMouseLeave={() => {
                          setContent("");
                        }}
                        id="map-country"
                        style={{
                          default: { outline: "none" },
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
  
        <div className="w-full md:w-[85%] text-center md:absolute md:bottom-[0]">
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
              <Link className="underline-offset-1	underline text-[#1A5632]" href={'https://www.rand.org/pubs/research_reports/RR1605.html'}>Source</Link>
            </div>
          </div>
          <h2 className="font-black text-2xl md:text-3xl pt-[100px] pb-[30px]">
            The JEAP is a blueprint that amplifies the collective yet unique needs of African nations while strategically charting a course for nations to strengthen their defences against health and
            humanitarian crises, and increasingly climate-related disasters.
          </h2>
          <p className="py-4 text-xl">
            The <span className="font-bold">24-48 hours</span> window is a crucial threshold for decisive action – a pivotal timeframe that can make the difference between life and death.
          </p>
          <p className="py-4 font-bold text-xl pb-8">
            The JEAP, rooted in this urgent paradigm, will offer unparalleled efficiency, and revolutionize how Africa has typically responded to public health emergencies in the following ways:
          </p>
        </div>
  
      </div>
      }}
    </Device>

  );
};

export default memo(WorldMap);