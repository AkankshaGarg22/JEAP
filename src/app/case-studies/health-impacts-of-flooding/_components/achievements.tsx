"use client";
import React, { useState } from "react";
import { parseBold } from "../../_components/textWhiteBox";

interface ExpandedItemsState {
  [key: number]: boolean;
}

// Static data array - update this with your content
const items = [
  {
    id: 1,
    content: "Evaluated access to healthcare and essential medicines across **114 facilities**, identifying 26 health centers affected by the flooding. ",
  },
  {
    id: 2,
    content:
      "** Mapped the geographic location of 57,024 vulnerable individuals ** to better assist them, representing 29% of the total displaced population. This group included 7,407 pregnant women, 36,855 children under 5 years old and 12,762 elderly people.",
  },
  {
    id: 3,
    content:
      "Enhanced the disease control surveillance system, training more than ** 250 surveillance officers and community health workers **, who actively intensified case finding. Case finding revealed a predominance of malaria and acute watery diarrhea cases, as well as suspected cases of mpox and salmonellosis.",
  },
  {
    id: 4,
    content:
      "Contracted Médecins d'Afrique (MDA) and Terre Sans Frontières (TSF) to deploy ** nine mobile clinics ** across five regions, providing comprehensive, and essential, life-saving health services to more than 2,000 people including pregnant women and children.",
  },
  {
    id: 5,
    content: "Mobilized and distributed ** 5,700 kg ** of commodities, including health emergency kits and essential medicines, providing immediate humanitarian assistance to save lives.",
  },
  {
    id: 6,
    content: "Mobilized and distributed more than ** USD $1 million ** from the WHO Contingency Fund for Emergencies (WHO CFE) and Central Emergency Response Fund (CERF).",
  },
  {
    id: 7,
    content: "Distributed critical health information, holding awareness sessions that reached ** 621 community members, publishing 5 situation reports, and briefing more than 20 journalists. **",
  },
  {
    id: 8,
    content: "Ensured coordination of the response at national and sub-national levels with all stakeholders and sectors, under the leadership of the host government.",
  },
  {
    id: 9,
    content: "Sensitized ** all frontline responders ** to preventing vulnerable populations from sexual exploitation and assault",
  },
];

export default function Achievements() {
  // Track which items are expanded
  const [expandedItems, setExpandedItems] = useState<ExpandedItemsState>({});

  // Toggle expansion state for an item
  const toggleItem = (id: number): void => {
    setExpandedItems((prev: ExpandedItemsState) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="w-full px-4 pt-8 bg-[#F0ECE1] mt-24">
      <h2 className="text-2xl text-center font-bold text-blue-900 mb-12">Actions and key achievements of the flooding response included:</h2>

      {/* Mobile view - vertical list */}
      <div className="lg:hidden w-full">
        {items.map((item) => (
          <div key={item.id} className="mb-4 border-b border-[#1E2859]">
            <div className="flex justify-between items-center py-3">
              <div className="font-semibold text-lg text-blue-900">{item.id}.</div>
              <button onClick={() => toggleItem(item.id)} className="text-2xl font-bold text-blue-900 focus:outline-none">
                {expandedItems[item.id] ? "−" : "+"}
              </button>
            </div>
            {expandedItems[item.id] && <div className="py-3 text-gray-700">{parseBold(item.content)}</div>}
          </div>
        ))}
      </div>

      {/* Desktop view - horizontal list */}
      <div className="hidden lg:flex w-full relative">
        {items.map((item) => (
          <div
            key={item.id}
            className={`relative transition-[flex] h-[28rem] duration-500 overflow-hidden px-1 border-r-2 last:border-r-0 border-[#1E2859] ${expandedItems[item.id] ? "flex-[2]" : "flex-1"}`}
            onMouseEnter={() => setExpandedItems((prev) => ({ ...prev, [item.id]: true }))}
            onMouseLeave={() => {
              // Immediately hide the text
              setExpandedItems((prev) => ({ ...prev, [item.id]: false }));
            }}
          >
            <span
              className={`absolute left-1/2 top-3/4 -translate-x-1/2 -translate-y-1/2 text-6xl text-blue-900 font-semibold transition-opacity duration-150 ${
                expandedItems[item.id] ? "opacity-0" : "opacity-100"
              }`}
            >
              {item.id}.
            </span>

            {/* Content (Instantly disappears on mouse leave) */}
            <div
              className={`absolute left-0 top-0 w-full h-full p-4 text-xl text-gray-700 transition-opacity duration-150 ${expandedItems[item.id] ? "opacity-100 delay-300" : "opacity-0"}`}
            >
              <div className="absolute bottom-4 left-0 w-full px-2 pb-4">{parseBold(item.content)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
