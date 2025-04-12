'use client'

import React from "react"

const Footer = () => {

return(
<footer className="bg-[#BDDABE] text-black py-6 mt-8">
  <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {/* About */}
    <div>
      <h3 className="text-xl font-bold mb-3">About Us</h3>
      <p className="text-sm">We are a platform dedicated to connecting farmers with customers for better food access.</p>
    </div>

    {/* Contact */}
    <div>
      <h3 className="text-xl font-bold mb-3">Contact</h3>
      <p className="text-sm">Email: contact@example.com</p>
      <p className="text-sm">Phone: +1 (123) 456-7890</p>
    </div>

    {/* Social Links */}
    <div>
      <h3 className="text-xl font-bold mb-3">Follow Us</h3>
      <div className="flex gap-4">
        <a href="#" className="text-sm hover:text-[#F4F9F5]">Facebook</a>
        <a href="#" className="text-sm hover:text-[#F4F9F5]">Instagram</a>
        <a href="#" className="text-sm hover:text-[#F4F9F5]">Twitter</a>
      </div>
    </div>
  </div>
</footer>
)
}

export default Footer