import React from "react";

const whyus = () => {
  return (
    <div>
      <section
        className="testimonials section-padding bg-img bg-fixed pos-re"
        data-overlay-dark="7"
        style={{ backgroundImage: 'url("/images/bg4.jpg")' }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="container mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12">
            <div className="md:col-start-3 md:col-span-8 lg:col-start-4 lg:col-span-6">
              <div className="section-head text-white relative z-10">
                <h2 className="text-4xl font-bold mb-4">Machines d'occasion</h2>
                <p className="text-lg leading-relaxed mb-6 text-white !important">
                  Si vous êtes intéressés à vendre ou acheter des machines
                  d'occasions, contacter nous simplement avec le formulaire
                  ci-dessous.
                </p>
                <a
                  href="http://saidtex.ma/buy-and-sell/"
                  className="butn butn-bg"
                >
                  <span>CLICK HERE</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="curve curve-top"></div>
      </section>
    </div>
  );
};

export default whyus;
