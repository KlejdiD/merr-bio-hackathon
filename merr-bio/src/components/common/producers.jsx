"use client";

import React, { useState } from "react";

// Mock data for farmers, including their sales and location
const topFarmers = [
  { id: 1, name: "Farmer John", sales: 120, location: "New York", image: "/farmers/farmer1.jpg" },
  { id: 2, name: "Farmer Sarah", sales: 110, location: "California", image: "/farmers/farmer2.jpg" },
  { id: 3, name: "Farmer Kate", sales: 95, location: "Texas", image: "/farmers/farmer3.jpg" },
  { id: 4, name: "Farmer Mike", sales: 85, location: "Florida", image: "/farmers/farmer4.jpg" },
  { id: 5, name: "Farmer Emma", sales: 80, location: "Washington", image: "/farmers/farmer5.jpg" },
];

const BestFarmersSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Go to the next slide
  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % topFarmers.length);
  };

  // Go to the previous slide
  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + topFarmers.length) % topFarmers.length);
  };

  return (
    <section className="px-4 py-8 bg-white">
      <h2 className="text-2xl font-bold text-center mb-4 text-[#2E5940]">Top 5 Farmers - Most Sales in the Last 3 Months</h2>

      {/* Carousel */}
      <div className="relative">
        {/* Display Farmer Information */}
        <div className="flex items-center justify-center">
          <div className="w-80 sm:w-96 bg-[#F4F9F5] p-4 rounded-lg shadow-md text-center">
            <img
              src={topFarmers[currentSlide].image}
              alt={topFarmers[currentSlide].name}
              className="w-full h-40 object-cover rounded-md mb-3"
            />
            <h3 className="text-lg font-semibold">{topFarmers[currentSlide].name}</h3>
            <p className="text-[#2E5940] font-medium">Sales: {topFarmers[currentSlide].sales}</p>
            <p className="text-[#2E5940]">Location: {topFarmers[currentSlide].location}</p> {/* Display location */}
          </div>
        </div>

        {/* Navigation buttons */}
        <button
          onClick={goToPrevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full"
        >
          &#10094;
        </button>
        <button
          onClick={goToNextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full"
        >
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default BestFarmersSection;
