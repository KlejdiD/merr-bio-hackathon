"use client";

import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-[#EAF4EE] text-center px-6 py-10 flex flex-col items-center">
      {/* Hero Image */}
      <div className="w-full max-w-xs mb-6">
        <Image
          src="/hero.jpg" // Replace with your actual image path
          alt="Fresh produce"
          width={400}
          height={300}
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Text Content */}
      <h1 className="text-3xl font-bold text-[#2E5940] mb-4 leading-tight">
        Fresh From Local Farmers
      </h1>
      <p className="text-gray-700 text-base mb-6">
        Discover natural, organic products grown with care - from all over Albania.
      </p>

      {/* Call to Action */}
      <button className="bg-[#2E5940] text-white px-6 py-2 rounded-full shadow-md hover:bg-green-700 transition">
        Shop Now
      </button>
    </section>
  );
};

export default Hero;
