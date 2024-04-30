import React from "react";

const Hero1 = () => {
  return (
    <>
      <header
        className="header relative bg-img"
        id="home"
        style={{ backgroundImage: "url('/images/slide.gif')" }}
        data-scroll-index="0"
        data-stellar-background-ratio="0.5"
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 items-center">
          <div className="py-20">
            <div className="text-center caption mt-[150px]">
              <h1 className="text-white text-2xl font-bold mb-5">SAIDTEX</h1>
              <h3 className="text-white font-bold text-xl mb-5">
                VOTRE PARTENAIRE POUR LES MACHINES TEXTILES AVEC UN ACCENT FORT
                SUR LE SERVICE ET LA QUALITÉ
              </h3>
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-10 col-start-2 lg:col-span-8 lg:col-start-3">
                  <p className="text-white">
                    Nous veillons a la réussite de nos clients tout en ayant une
                    image de société citoyenne.
                  </p>
                </div>
              </div>
              <a
                href="#0"
                data-scroll-nav="2"
                className="butn butn-light mt-[30px]"
              >
                <span>Nos partenaires</span>
              </a>
              <div className="py-20"></div>
            </div>
          </div>
        </div>
        <div className="curve curve-bottom curve-center"></div>
      </header>
    </>
  );
};

export default Hero1;
