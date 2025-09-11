"use client";

import { useState } from "react";
import Link from "next/link";
// import Image from "next/image";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-3 py-3">
        
        {/* ✅ Logo */}
       <Link href="/" className="flex items-center">
  <span className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
    BuildLinkly
  </span>
</Link>



        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-8 font-[Poppins] text-gray-700 font-normal">
          <Link href="/" className="hover:text-blue-600 transition">Home</Link>
          <Link href="/#about" className="hover:text-blue-600 transition">About</Link>
          <Link href="/blog" className="hover:text-blue-600 transition">Blog</Link>
          <Link href="/services" className="hover:text-blue-600 transition">Pricing</Link>
          <Link href="/contact" className="hover:text-blue-600 transition">Contact</Link>
        </div>

        {/* Desktop Button */}
        <div className="hidden md:block" >
         <motion.a
          href="/contact"
          whileHover={{ scale: 1.03 }}
          className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold shadow"
        >
          Get Started
        </motion.a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-blue-600 focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
          <Link href="/" className="block hover:text-blue-600 transition">Home</Link>
          <Link href="/#about" className="block hover:text-blue-600 transition">About</Link>
          <Link href="/blog" className="block hover:text-blue-600 transition">Blog</Link>
          <Link href="/services" className="block hover:text-blue-600 transition">Pricing</Link>
          <Link href="/contact" className="block hover:text-blue-600 transition">Contact</Link>

          {/* Mobile Button */}
          <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}
