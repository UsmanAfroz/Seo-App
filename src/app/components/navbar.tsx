"use client"

import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          MyBrand
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="hover:text-blue-600 transition">Home</Link>
          <Link href="/#about" className="hover:text-blue-600 transition">About</Link>
          <Link href="/blog" className="hover:text-blue-600 transition">
          Blog
        </Link>
          <Link href="/services" className="hover:text-blue-600 transition">Service</Link>
          <Link href="/#contact" className="hover:text-blue-600 transition">Contact</Link>
        </div>

        {/* Button */}
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>
    </nav>
  )
}
