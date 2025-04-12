"use client";

import React, { useState } from "react";

const categories = ["All", "Fruits", "Vegetables", "Dairy", "Bakery"];

const allProducts = [
  { id: 1, name: "Strawberries", category: "Fruits", price: "$3.99", image: "/products/strawberries.jpg", producer: "farmer1" },
  { id: 2, name: "Carrots", category: "Vegetables", price: "$2.49", image: "/products/carrots.jpg", producer: "farmer1" },
  { id: 3, name: "Milk", category: "Dairy", price: "$1.89", image: "/products/milk.jpg", producer: "farmer1" },
  { id: 4, name: "Bread", category: "Bakery", price: "$2.00", image: "/products/bread.jpg", producer: "farmer1" },
];

const ProductsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentSlide, setCurrentSlide] = useState(0);

  const filteredProducts =
    selectedCategory === "All"
      ? allProducts
      : allProducts.filter((product) => product.category === selectedCategory);

  // Reset the carousel to the first slide whenever the category is changed
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentSlide(0);  // Reset carousel to the first item
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % filteredProducts.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + filteredProducts.length) % filteredProducts.length);
  };

  return (
    <section className="px-4 py-8 bg-white">
      <h2 className="text-2xl font-bold text-center mb-4 text-[#2E5940]">Browse Products</h2>

      {/* Category Menu */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}  // Update category and reset carousel
            className={`px-4 py-2 rounded-full text-sm ${
              selectedCategory === cat
                ? "bg-[#2E5940] text-white"
                : "bg-gray-200 text-gray-800"
            } transition`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Carousel */}
      <div className="relative">
        {/* Slide */}
        <div className="flex items-center justify-center">
          {filteredProducts.length > 0 ? (
            <div className="w-80 sm:w-96 bg-[#F4F9F5] p-4 rounded-lg shadow-md text-center">
              <img
                src={filteredProducts[currentSlide].image}
                alt={filteredProducts[currentSlide].name}
                className="w-full h-40 object-cover rounded-md mb-3"
              />
              <h3 className="text-lg font-semibold">{filteredProducts[currentSlide].name}</h3>
              <h4>{filteredProducts[currentSlide].producer}</h4>
              <p className="text-[#2E5940] font-medium">{filteredProducts[currentSlide].price}</p>
            </div>
          ) : (
            <p>No products available in this category.</p>
          )}
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

export default ProductsSection;
