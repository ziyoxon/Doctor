
import React from "react";
import Lupa from "../../assets/lupa.svg"
import Bonka from "../../assets/bonka.svg"
import Phone from "../../assets/phonw.svg";
import Blaknot from "../../assets/blaknot.svg";
import Help from "../../assets/aptechka.svg";
import Bes from "../../assets/xixix.jpg";

const Section = () => {
    return (
      <section className="items-center justify-between  ">
        <div>
          <h2 className="text-4xl   text-gray-900 text-center mb-9  mx-auto border-b-2 border-gray-300   pb-5 w-fit">
            Services we Offer
          </h2>
          <p className="text-gray-600 mb-6 text-center">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean <br /> massa.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 px-6 py-5 border-blue-500  ">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center ">
            <img
              src={Lupa}
              alt="Search doctor"
              className="mx-auto mb-4 w-16 h-18"
            />
            <h3 className="text-xl font-semibold mb-2">Search doctor</h3>
            <p className="text-gray-600">
              Choose your doctor from thousands of specialist, general, and
              trusted hospitals.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <img
              src={Bonka}
              alt="Online pharmacy"
              className="mx-auto mb-4 w-12 h-12"
            />
            <h3 className="text-xl font-semibold mb-2">Online pharmacy</h3>
            <p className="text-gray-600">
              Buy your medicines with our mobile application with a simple
              delivery system.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <img
              src={Phone}
              alt="Consultation"
              className="mx-auto mb-4 w-12 h-12"
            />
            <h3 className="text-xl font-semibold mb-2">Consultation</h3>
            <p className="text-gray-600">
              Free consultation with our trusted doctors and get the best
              recommendations.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <img
              src={Blaknot}
              alt="Details info"
              className="mx-auto mb-4 w-12 h-12"
            />
            <h3 className="text-xl font-semibold mb-2">Details info</h3>
            <p className="text-gray-600">
              Free consultation with our trusted doctors and get the best
              recommendations.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <img
              src={Help}
              alt="Emergency care"
              className="mx-auto mb-4 w-12 h-12"
            />
            <h3 className="text-xl font-semibold mb-2">Emergency care</h3>
            <p className="text-gray-600">
              You can get 24/7 urgent care for yourself or your children and
              your lovely family.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <img src={Bes} alt="Tracking" className="mx-auto mb-4 w-12 h-12" />
            <h3 className="text-xl font-semibold mb-2">Tracking</h3>
            <p className="text-gray-600">
              Track and save your medical history and health data.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button className="bg-blue-tr bg-opacity-15 border-2 text-blue-700 border-blue-700 px-3 text-center m-center items-center py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition">
            Consult today
          </button>
        </div>
      </section>


    
    );
}

export default Section;