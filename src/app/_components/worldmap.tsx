"use client";
import { useEffect, useState } from "react";
import { csv } from "d3-fetch";
import { scaleLinear } from "d3-scale";
import { ComposableMap, Geographies, Geography, Sphere, Graticule } from "react-simple-maps";

const WorldMap = () => {
  const geoUrl = "/features.json";

  const colorScale = scaleLinear<string>().domain([0.29, 0.68]).range(["#006400", "#90EE90"]);

  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    csv(`/vulnerability.csv`).then((data) => {
      setData(data);
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col gap-1">
      <div className="!h-1/2 !w-full">
        {data.length > 0 && (
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{
              scale: 100,
            }}
          >
            {/* <Sphere stroke="#E4E5E6" strokeWidth={0.5} /> */}
            {/* <Graticule stroke="#E4E5E6" strokeWidth={0.5} /> */}
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const d = data.find((s) => s.ISO3 === geo.id);
                  return <Geography key={geo.rsmKey} geography={geo} fill={d ? `${colorScale(d["2017"])}` : "#F5F4F6"} />;
                })
              }
            </Geographies>
          </ComposableMap>
        )}
      </div>
      <div className="md:p-20 flex flex-col align-center text-center">
        <h2 className="font-semibold text-4xl">
        The JEAP is a blueprint that amplifies the collective yet unique needs of African nations while strategically charting a course for nations to strengthen their defences against health and humanitarian crises, and increasingly climate-related disasters.
        </h2>
        <p className="md:py-10 text-lg">The <span className="font-bold">24-48 hours</span> window is a crucial threshold for decisive action – a pivotal timeframe that can make the difference between life and death.</p>
        <p className="md:py-10 font-bold text-2xl">The JEAP, rooted in this urgent paradigm, will offer unparalleled efficiency, and revolutionize how Africa has typically responded to public health emergencies in the following ways:</p>
      </div>
    </div>
  );
};

export default WorldMap;