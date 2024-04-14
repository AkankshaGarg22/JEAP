"use client";
import { memo, useEffect, useState } from "react";
import { csv } from "d3-fetch";
import { scaleLinear } from "d3-scale";
import { ComposableMap, Geographies, Geography, Sphere, Graticule } from "react-simple-maps";

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
    <div className="min-h-screen flex flex-col items-center justify-center gap-2 ">
      <h1 className="font-extrabold text-4xl tracking-wide text-center">INFECTIOUS DISEASE VULNERABILITY INDEX WORLD MAP</h1>
      <div className="h-[480px] md:h-[800px] relative" >
        {data.length > 0 && (
          <ComposableMap id="anchor" projection="geoMercator" projectionConfig={{ scale: 100 }} width={800} height={400} style={{ height: "100%", width: "100%" }}>
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
                        console.log("here", geo);
                        setContent(geo.properties.name ? geo.properties.name : "");
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

      <div className="w-full md:w-4/5 text-center">
        <h2 className="font-semibold text-lg md:text-3xl ">
          The JEAP is a blueprint that amplifies the collective yet unique needs of African nations while strategically charting a course for nations to strengthen their defences against health and
          humanitarian crises, and increasingly climate-related disasters.
        </h2>
        <p className="md:py-4 text-lg">
          The <span className="font-bold">24-48 hours</span> window is a crucial threshold for decisive action – a pivotal timeframe that can make the difference between life and death.
        </p>
        <p className="md:py-4 font-bold text-2xl">
          The JEAP, rooted in this urgent paradigm, will offer unparalleled efficiency, and revolutionize how Africa has typically responded to public health emergencies in the following ways:
        </p>
      </div>

    </div>
  );
};

export default memo(WorldMap);
