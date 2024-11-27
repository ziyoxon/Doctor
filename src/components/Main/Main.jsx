import React from "react";
import Boys from "../../assets/trafal.svg";

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between max-w-screen-xl mx-auto p-8 bg-white gap-15">
      <div className="flex-1 flex items-center justify-center">
        <div className="rounded-lg p-4">
          <img
            src={Boys}
            alt="Doctor"
            className="max-w-full h-auto object-cover"
          />
        </div>
      </div>

      <div className="flex-1 text-left md:mr-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 leading-tight">
          Leading healthcare <br />
          providers
        </h2>
        <p className="text-gray-600 mb-6">
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone. To us, it’s not just work. We take
          pride in the solutions we deliver.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg font-medium hover:bg-blue-700 transition">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
