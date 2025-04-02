"use client";
import React, { useState } from "react";
import AnimatedHeading from "../../_components/AnimatedHeading";

const data = {
  countries: [
    {
      country: "Lesotho",
      women: 35,
      men: 15,
      total: 50,
      percentage_of_women: "70%",
    },
    {
      country: "Namibia",
      women: 32,
      men: 17,
      total: 49,
      percentage_of_women: "65%",
    },
    {
      country: "Nigeria",
      women: 36,
      men: 46,
      total: 82,
      percentage_of_women: "44%",
    },
    {
      country: "Botswana",
      women: 27,
      men: 37,
      total: 64,
      percentage_of_women: "42%",
    },
    {
      country: "Eswatini",
      women: 8,
      men: 12,
      total: 20,
      percentage_of_women: "40%",
    },
    {
      country: "Kenya",
      women: 45,
      men: 73,
      total: 118,
      percentage_of_women: "38%",
    },
    {
      country: "Sierra Leone",
      women: 37,
      men: 67,
      total: 104,
      percentage_of_women: "36%",
    },
    {
      country: "Tanzania",
      women: 46,
      men: 86,
      total: 132,
      percentage_of_women: "35%",
    },
    {
      country: "Malawi",
      women: 24,
      men: 46,
      total: 70,
      percentage_of_women: "34%",
    },
    {
      country: "Rwanda",
      women: 25,
      men: 51,
      total: 76,
      percentage_of_women: "33%",
    },
    {
      country: "DRC",
      women: 70,
      men: 143,
      total: 213,
      percentage_of_women: "33%",
    },
    {
      country: "CAR",
      women: 21,
      men: 45,
      total: 66,
      percentage_of_women: "32%",
    },
    {
      country: "Congo",
      women: 18,
      men: 40,
      total: 58,
      percentage_of_women: "31%",
    },
    {
      country: "Tanzania",
      women: 17,
      men: 39,
      total: 56,
      percentage_of_women: "30%",
    },
    {
      country: "Chad",
      women: 15,
      men: 54,
      total: 69,
      percentage_of_women: "22%",
    },
    {
      country: "Niger",
      women: 10,
      men: 39,
      total: 49,
      percentage_of_women: "20%",
    },
    {
      country: "Senegal",
      women: 11,
      men: 49,
      total: 60,
      percentage_of_women: "18%",
    },
    {
      country: "Ethiopia",
      women: 31,
      men: 159,
      total: 190,
      percentage_of_women: "16%",
    },
    {
      country: "Togo",
      women: 8,
      men: 49,
      total: 57,
      percentage_of_women: "14%",
    },
    {
      country: "Burkina Faso",
      women: 14,
      men: 86,
      total: 100,
      percentage_of_women: "14%",
    },
    {
      country: "Mauritania",
      women: 6,
      men: 43,
      total: 49,
      percentage_of_women: "12%",
    },
  ],
  total: {
    women: 536,
    men: 1196,
    total: 1732,
    percentage_of_women: "31%",
  },
};

export default function Countries() {
  const [expandedCountry, setExpandedCountry] = useState<string | null>("Lesotho");

  const toggleExpand = (country: string) => {
    if (expandedCountry === country) {
      setExpandedCountry(null);
    } else {
      setExpandedCountry(country);
    }
  };
  return (
    <div className="max-w-7xl mx-auto my-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-[20%] px-2 md:px-4">
          <AnimatedHeading linecolor="black">
          MORE THAN A THIRD OF AVOHC-SURGE RESPONDERS ARE WOMEN, WITH LESOTHO AND NAMIBIA AMONG THE COUNTRIES LEADING THE WAY
          </AnimatedHeading>
        </div>

        <div className="md:w-[80%] px-2">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="text-left pl-4 md:p-4 text-xs md:text-lg ">Country</th>
                <th className="text-right md:p-4 text-xs md:text-lg ">Women</th>
                <th className="text-right md:p-4 text-xs md:text-lg ">Men</th>
                <th className="text-right md:p-4 text-xs md:text-lg ">Total</th>
                <th className="text-center md:p-4 text-xs md:text-lg ">Percentage of Women</th>
              </tr>
            </thead>

            <tbody>
              <tr className="h-4">
                <td colSpan={5}></td>
              </tr>
              {data.countries.map((countryData, i) => {
                const isExpanded = expandedCountry === countryData.country;

                return (
                  <tr key={i} className={`border-t border-gray-300 cursor-pointer ${isExpanded ? "bg-green-800 text-white" : "hover:bg-gray-200"}`} onClick={() => toggleExpand(countryData.country)}>
                    <td className="p-4 text-xs md:text-lg">{countryData.country}</td>
                    {isExpanded ? (
                      // Expanded state - show all data in this row
                      <>
                        <td className="p-4 text-xs md:text-lg text-right">{countryData.women}</td>
                        <td className="p-4 text-xs md:text-lg text-right">{countryData.men}</td>
                        <td className="p-4 text-xs md:text-lg text-right">{countryData.total}</td>
                        <td className="p-4 text-xs md:text-lg text-right flex justify-between items-center">
                          <span className="mr-2 md:pl-[40%]">{countryData.percentage_of_women}</span>
                          <span className="text-xl font-light">−</span>
                        </td>
                      </>
                    ) : (
                      // Collapsed state - just show country and percentage
                      <>
                        <td className="p-4"></td>
                        <td className="p-4"></td>
                        <td className="p-4"></td>
                        <td className="p-4 text-right flex justify-end items-center">
                          <span className="text-xl font-light">+</span>
                        </td>
                      </>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
