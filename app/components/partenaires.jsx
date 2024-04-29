"use client";

import React, { useState } from "react";

const Hero1 = () => {
  // State to keep track of the active filter
  const [activeFilter, setActiveFilter] = useState("*");

  // Function to handle filter click
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  // Gallery items data
  const galleryItems = [
    { id: 1, category: "tissage" },
    { id: 2, category: "tissage" },
    { id: 3, category: "tissage" },
    { id: 6, category: "tissage" },
    { id: 7, category: "tissage" },
    { id: 2, category: "web" },
    { id: 3, category: "graphic" },
    // Add more items as needed
  ];

  return (
    <>
      <section className="works section-padding" data-scroll-index="2">
        <div className="container">
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
            {/* filter links */}
            <div className="filtering text-center mb-30 col-sm-12">
              <div className="filter">
                <span
                  onClick={() => handleFilterClick("*")}
                  className={activeFilter === "*" ? "active" : ""}
                >
                  All
                </span>
                <span
                  onClick={() => handleFilterClick(".tissage")}
                  className={activeFilter === ".tissage" ? "active" : ""}
                >
                  Tissage et bonneterie
                </span>
                <span
                  onClick={() => handleFilterClick(".web")}
                  className={activeFilter === ".web" ? "active" : ""}
                >
                  Finissage
                </span>
                <span
                  onClick={() => handleFilterClick(".graphic")}
                  className={activeFilter === ".graphic" ? "active" : ""}
                >
                  Filature
                </span>
              </div>
            </div>

            <div className="clearfix"></div>

            {/* gallery */}
            <div className="gallery full-width">
              <div className="row">
                {/* Render gallery items based on active filter */}
                {galleryItems
                  .filter(
                    (item) =>
                      activeFilter === "*" ||
                      item.category === activeFilter.substring(1)
                  )
                  .map((item) => (
                    <div
                      key={item.id}
                      className="col-lg-4 col-md-6 col-sm-12 mb-4"
                    >
                      <div className="item-img">
                        <img
                          src={`/images/portfolio/${item.id}.png`}
                          alt="image"
                          className="img-fluid"
                        />
                        {/* Add overlay and other elements */}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero1;
