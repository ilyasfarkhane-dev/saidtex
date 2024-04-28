"use client";

import React, { useState } from "react";

const TabsComponent = ({ tabs }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const partenaires = [
    { name: "Partner 1", category: "All" },
    { name: "Partner 2", category: "Tissage et bonneterie" },
    { name: "Partner 3", category: "Finissage" },
    { name: "Partner 4", category: "Filature" },
  ];

  const filteredPartenaires =
    selectedTab === 0
      ? partenaires
      : partenaires.filter(
          (partner) =>
            partner.category.toLowerCase().replace(/\s/g, "") ===
            tabs[selectedTab].title.toLowerCase().replace(/\s/g, "")
        );

  return (
    <div className="bg-white flex justify-center items-center py-[80px]">
      <div className="max-w-[900px] flex flex-col gap-y-2 w-full">
        <div className="bg-blue-100 p-1 text-sm rounded-full flex justify-between items-center gap-x-2 font-bold text-blue-900 shadow-lg">
          {tabs.map((item, index) => (
            <button
              key={index}
              onClick={() => setSelectedTab(index)}
              className={`outline-none w-full p-2 rounded-full text-cneter focus:bg-blue-900 focus:text-white ${
                selectedTab === index ? " bg-blue-900 text-white" : ""
              } `}
            >
              {item.title}
            </button>
          ))}
        </div>

        <div className="p-2 rounded-xl">
          {filteredPartenaires.map((partner, index) => (
            <div key={index}>{partner.name}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabsComponent;
