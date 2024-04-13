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

  useEffect(() => {
    csv(`/Book1.csv`).then((data) => {
      setData(data);
    });
  }, []);

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
                      onMouseEnter={() => {
                        console.log("here", geo);
                        setContent(geo.properties.name ? geo.properties.name : "");
                      }}
                      onMouseLeave={() => {
                        setContent("");
                      }}
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
      {content ? <div className="absolute bg-black text-white text-md rounded py-1 px-4 right-0 bottom-0 left-[50%] max-w-max">{content}</div> : null}
      </div>

      <h2 className="font-semibold text-lg md:text-3xl w-full md:w-4/5 text-center">
        The JEAP is a blueprint that amplifies the collective yet unique needs of African nations while strategically charting a course for nations to strengthen their defences against health and
        humanitarian crises, and increasingly climate-related disasters.
      </h2>
    </div>
  );
};

export default memo(WorldMap);
