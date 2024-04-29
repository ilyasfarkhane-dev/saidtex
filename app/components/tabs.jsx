"use client";

import React, { useState } from "react";

const TabsComponent = ({ tabs }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const partenaires = [
    // { name: "Partner 1", category: "All" },
    // { name: "Partner 2", category: "Tissage et bonneterie" },
    // { name: "Partner 3", category: "Finissage" },
    // { name: "Partner 4", category: "Filature" },
    {
      machineImg: "/images/portfolio/machines/1.jpg",
      steImg: "/images/portfolio/1.png",
      category: "Tissage et bonneterie",
    },
    {
      machineImg: "/images/portfolio/machines/2.jpg",
      steImg: "/images/portfolio/2.png",
      category: "Finissage",
    },
    {
      machineImg: "/images/portfolio/machines/3.jpg",
      steImg: "/images/portfolio/3.png",
      category: "Filature",
    },
    {
      machineImg: "/images/portfolio/machines/4.jpg",
      steImg: "/images/portfolio/4.png",
      category: "Tissage et bonneterie",
    },
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredPartenaires.map((partner, index) => (
            <div key={index} className="col-lg-3 col-md-6 items brand">
              <div className="item-img relative">
                <img
                  src={partner.steImg}
                  alt="Partner Logo"
                  className="w-full"
                />
                <div className="item-img-overlay absolute inset-0 flex justify-center items-center bg-opacity-0 hover:bg-opacity-50 transition-opacity duration-300">
                  <div className="text-center text-white">
                    <img
                      src={partner.machineImg}
                      alt="Partner Machine"
                      className="mb-2 mx-auto"
                      style={{
                        width: "100px",
                        height: "100px",
                      }}
                    />
                    {/* You can add additional overlay content here if needed */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabsComponent;
