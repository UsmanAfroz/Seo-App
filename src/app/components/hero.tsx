"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const MotionLink = motion(Link);

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[80vh] flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
    >
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="text-center md:text-left">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight"
          >
            Supercharge Your SaaS with  {" "}
            <span className="block text-yellow-300">Authority Links.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-5 text-base sm:text-lg md:text-xl text-white/90 max-w-xl"
          >
            We build links for SEO agencies, startups, and enterprise brands
            that search engines actually love.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-7 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            {/* Request a Call (links to Contact page) */}
            <MotionLink
              href="/services"
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 sm:py-3 rounded-lg text-base sm:text-lg font-medium 
                        bg-white text-indigo-700 shadow-md 
                        transition duration-300
                        hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 
                        hover:text-white"
            >
              Get Your Plan
            </MotionLink>

            {/* Our Process (for now just a placeholder, can link to /process or another section) */}
            <MotionLink
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 sm:py-3 rounded-lg text-base sm:text-lg font-medium 
                        bg-white text-indigo-700 shadow-md 
                        transition duration-300
                        hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 
                        hover:text-white"
            >
              Our Process
            </MotionLink>
          </motion.div>
        </div>

        {/* Right Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="hidden md:flex justify-center md:justify-end"
        >
          <Image
            src="/seo001.png"
            alt="Hero Illustration"
            width={450}
            height={450}
            className="object-contain drop-shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
