"use client";
import React, { useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search for:", query);
    // handle search logic here (e.g., fetch results)
  };

  return (
    <form onSubmit={handleSearch} className="flex mx-5">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="w-screen h-12 sm:w-48 md:w-64 border border-gray-400 px-3 rounded-none focus:outline-none mb-2 "
      />
      <button
        type="submit"
        className="h-12 w-12  bg-[#BDDABE] border border-gray-400 text-black hover:bg-green-600 transition"
      >
        🔍
      </button>
    </form>
  );
};

export default SearchBar;
