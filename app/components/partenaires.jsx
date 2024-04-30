"use client";

import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.css";

const Hero1 = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const handleFilterClick = (filter) => {
    console.log("Selected category:", filter);
    setActiveFilter(filter);
  };

  const galleryItems = [
    { id: 1, category: "tissage" },
    { id: 2, category: "tissage" },
    { id: 3, category: "tissage" },
    { id: 6, category: "tissage" },
    { id: 7, category: "tissage" },
    { id: 11, category: "tissage" },
    { id: 99, category: "tissage" },
    { id: 66, category: "tissage" },
    { id: 111, category: "tissage" },
    { id: 222, category: "tissage" },
    { id: "textape", category: "tissage" },
    { id: 444, category: "tissage" },
    { id: 5, category: "finissage" },
    { id: 8, category: "finissage" },
    { id: 9, category: "finissage" },
    { id: 11, category: "finissage" },
    { id: 12, category: "finissage" },
    { id: 22, category: "finissage" },
    { id: 33, category: "finissage" },
    { id: 44, category: "finissage" },
    { id: 55, category: "finissage" },
    { id: 77, category: "finissage" },
    { id: "textape", category: "finissage" },
    { id: 4, category: "filature" },
    { id: 11, category: "filature" },
    { id: 88, category: "filature" },
    { id: "heberlein", category: "filature" },
    { id: 333, category: "filature" },
    { id: "hemax", category: "filature" },
  ];

  return (
    <section
      className="works section-padding"
      data-scroll-index="2"
      id="partenaires"
    >
      <div className="">
        <div className="row">
          <div className="section-head offset-md-2 col-md-8 offset-lg-3 col-lg-6">
            <h4>
              <span>Nos</span> partenaires
            </h4>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="filtering text-center mb-30 col-sm-12">
            <div className="filter">
              <span
                key="All"
                onClick={() => handleFilterClick("All")}
                className={activeFilter === "All" ? "active" : ""}
              >
                All
              </span>
              <span
                onClick={() => handleFilterClick("tissage")}
                className={activeFilter === "tissage" ? "active" : ""}
              >
                Tissage et bonneterie
              </span>
              <span
                onClick={() => handleFilterClick("finissage")}
                className={activeFilter === "finissage" ? "active" : ""}
              >
                Finissage
              </span>
              <span
                onClick={() => handleFilterClick("filature")}
                className={activeFilter === "filature" ? "active" : ""}
              >
                Filature
              </span>
            </div>
          </div>

          <div className="clearfix"></div>

          <div className="gallery grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {galleryItems
              .filter(
                (item) =>
                  activeFilter === "All" || item.category === activeFilter
              )
              .map(({ id }) => (
                <div class="item-img">
                  <img src={`/images/portfolio/${id}.png`} alt="image" />
                  <div class="item-img-overlay">
                    <div class="item-img-overlay">
                      <div class="overlay-info full-width">
                        <img
                          src={`/images/portfolio/machines/${id}.jpg`}
                          alt="image"
                        />
                        <p></p>
                        <a href="https://www.temco.de/" class="popimg">
                          <span class="icon">
                            <i class="fas fa-long-arrow-alt-right"></i>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero1;
