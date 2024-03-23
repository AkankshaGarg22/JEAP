"use client";
import { useEffect, useState } from "react";
import { csv } from "d3-fetch";
import { scaleLinear } from "d3-scale";
import { ComposableMap, Geographies, Geography, Sphere, Graticule } from "react-simple-maps";

const WorldMap = () => {
  const geoUrl = "/features.json";

  const colorScale = scaleLinear().domain([0.29, 0.68]).range(["#006400", "#90EE90"]);

  const [data, setData] = useState([]);

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
                  return <Geography key={geo.rsmKey} geography={geo} fill={d ? colorScale(d["2017"]) : "#F5F4F6"} />;
                })
              }
            </Geographies>
          </ComposableMap>
        )}
      </div>
      <div className="">
        <p>
          The JEAP is a blueprint that amplifies the collective yet unique needs of African nations while strategically charting a course for nations to strengthen their defences against health and
          humanitarian crises, and increasingly climate-related disasters.
        </p>
      </div>
    </div>
  );
};

export default WorldMap;
