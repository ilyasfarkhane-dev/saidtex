import React from "react";

const Example = () => {
  return (
    <section id="services" className="bg-gray-100">
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-blue-900 mt-20 mb-12">
          Nous représentons les marques internationales les plus performantes du
          secteur
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div className="bg-white rounded-lg shadow-xl p-8 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl">
            <img
              src="/images/textile.jpeg"
              alt="Textile"
              className="mx-auto h-24 w-24 mb-6"
            />
            <h3 className="text-xl text-blue-900 font-semibold mb-4 text-center">
              TEXTILE
            </h3>
            <ul className=" text-sm text-gray-700">
              <li>- Filature</li>
              <li>- Tissage et préparation au tissage</li>
              <li>- Bonneterie</li>
              <li>- Teinture, impression et finissage</li>
              <li>- Non-tissés</li>
            </ul>
          </div>
          {/* Column 2 */}
          <div className="bg-white rounded-lg shadow-xl p-8 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl">
            <img
              src="/images/textile-technique.png"
              alt="Textile Technique"
              className="mx-auto h-24 w-24 mb-6"
            />
            <h3 className="text-xl text-blue-900 font-semibold mb-4 text-center">
              TEXTILE TECHNIQUE
            </h3>
            <ul className="text-sm text-gray-700">
              <li>- Agrotextile</li>
              <li>- Géotextile et bâtiment</li>
              <li>- Médico-sanitaire</li>
              <li>- Protection</li>
              <li>- Sports et loisirs</li>
              <li>- Textile fonctionnel</li>
              <li>- Transports</li>
            </ul>
          </div>
          {/* Column 3 */}
          <div className="bg-white rounded-lg shadow-xl p-8 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl">
            <img
              src="/images/thechnique.svg"
              alt="Autre"
              className="mx-auto h-24 w-24 mb-6"
            />
            <h3 className="text-xl text-blue-900 font-semibold mb-4 text-center">
              AUTRE
            </h3>
            <ul className="text-sm  text-gray-700">
              <li>- Matière première Fils et autres fournitures</li>
              <li>- Appareils de mesure</li>
              <li>- Solutions de monitoring</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Example;
