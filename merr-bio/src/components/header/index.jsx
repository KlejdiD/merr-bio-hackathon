'use client'

import React, {useState} from "react";
import Image from "next/image";
import SearchBar from "../common/SearchBar";



const Header = () => {

  const [open, setOpen] = useState(false);


     return (
    <div className="bg-[#BDDABE] h-auto relative">
      {/* Top Section: Logo + Burger */}
      <div className="flex justify-between items-center px-4 pt-4">
        <Image src="/logo.png" alt="Logo" width={100} height={100} className="w-20" />
        
        <div className="z-50">
          <button
            className="flex flex-col justify-between w-8 h-6 focus:outline-none"
            onClick={() => setOpen(!open)}
          >
            <span
              className={`block h-1 bg-gray-500 transition-transform duration-300 ease-in-out ${
                open ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-1 bg-gray-500 transition-opacity duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-1 bg-gray-500 transition-transform duration-300 ease-in-out ${
                open ? "-rotate-45 -translate-y-3" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Search bar */}
      <div className="px-4 py-2">
        <SearchBar />
      </div>

      {/* Modal Navigation */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-40 ">
          <div className="bg-white rounded-lg shadow-lg w-3/4 max-w-sm p-6 text-center">
            <h2 className="text-xl font-semibold mb-4">Menu</h2>
            <ul className="space-y-4">
              <li>
                <a href="/" className="text-blue-600 hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-blue-600 hover:underline">
                  Log In / Sign Up
                </a>
              </li>
              <li>
                <a href="/products" className="text-blue-600 hover:underline">
                  Products
                </a>
              </li>
              <li>
                <a href="/contact" className="text-blue-600 hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;