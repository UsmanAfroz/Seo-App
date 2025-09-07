"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      {" "}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {" "}
        {/* Logo */}{" "}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          {" "}
          MyBrand{" "}
        </Link>{" "}
        {/* Desktop Nav Links */}{" "}
        <div className="hidden md:flex space-x-8">
          {" "}
          <Link href="/" className="hover:text-blue-600 transition">
            Home
          </Link>{" "}
          <Link href="/#about" className="hover:text-blue-600 transition">
            About
          </Link>{" "}
          <Link href="/blog" className="hover:text-blue-600 transition">
            Blog
          </Link>{" "}
          <Link href="/services" className="hover:text-blue-600 transition">
            Service
          </Link>{" "}
          <Link href="/contact" className="hover:text-blue-600 transition">
            Contact
          </Link>{" "}
        </div>{" "}
        {/* Desktop Button */}{" "}
        <div className="hidden md:block">
          {" "}
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            {" "}
            Get Started{" "}
          </button>{" "}
        </div>{" "}
        {/* Mobile Hamburger Button */}{" "}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-blue-600 focus:outline-none"
        >
          {" "}
          ☰{" "}
        </button>{" "}
      </div>{" "}
      {/* Mobile Menu */}{" "}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
          {" "}
          <Link href="/" className="block hover:text-blue-600 transition">
            Home
          </Link>{" "}
          <Link href="/#about" className="block hover:text-blue-600 transition">
            About
          </Link>{" "}
          <Link href="/blog" className="block hover:text-blue-600 transition">
            Blog
          </Link>{" "}
          <Link
            href="/services"
            className="block hover:text-blue-600 transition"
          >
            Pricing
          </Link>{" "}
          <Link
            href="/contact"
            className="block hover:text-blue-600 transition"
          >
            Contact
          </Link>{" "}
          {/* Mobile Button */}{" "}
          <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            {" "}
            Get Started{" "}
          </button>{" "}
        </div>
      )}{" "}
    </nav>
  );
}
