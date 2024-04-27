"use client";
import React from "react";

const ImageWithTextOverlay = () => {
  return (
    <div className="relative h-screen mt-[60px] ">
      <img
        src="/images/slide.gif"
        alt="Background"
        className="object-cover w-full h-full "
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60">
        {/* Black filter overlay */}
        <div className="text-center px-12">
          <h1 className="text-4xl font-bold text-white">SAIDTEX</h1>
          <h3 className="mt-2 text-lg text-white">
            VOTRE PARTENAIRE POUR LES MACHINES TEXTILES AVEC UN ACCENT FORT SUR
            LE SERVICE ET LA QUALITÉ
          </h3>
          <p className="mt-2 text-lg text-white">
            Nous veillons a la réussite de nos clients tout en ayant une image
            de société citoyenne.
          </p>

          <button
            type="button"
            className="mt-12 rounded-full bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Nos partenaires
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageWithTextOverlay;
