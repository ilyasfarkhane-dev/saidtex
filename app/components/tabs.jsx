"use client";

import React, { useState } from "react";

const TabsComponent = ({ tabs }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const partenaires = [
    { name: "Partner 1", category: "All" },
    { name: "Partner 2", category: "Tissage et bonneterie" },
    { name: "Partner 3", category: "Finissage" },
    { name: "Partner8", category: "Finissage" },
    { name: "Partner 4", category: "Filature" },
  ];

  const filteredPartenaires =
    selectedTab === 0
      ? partenaires
      : partenaires.filter(
          (partner) => partner.category === tabs[selectedTab].title
        );

  return (
    <div className="bg-white flex justify-center items-center py-[80px]">
      <div className="max-w-[400px] flex flex-col gap-y-2 w-full lg:max-w-[900px]">
        <div className="bg-blue-900 p-1 text-sm rounded-full flex justify-between items-center gap-x-2 font-bold text-white">
          {tabs.map((item, index) => (
            <button
              key={index}
              onClick={() => setSelectedTab(index)}
              className={`outline-none w-full p-2 rounded-full text-cneter focus:bg-white focus:text-blue-900 ${
                selectedTab === index ? "ring-2 bg-white text-blue-900" : ""
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
