"use client";
import { motion } from "framer-motion";


export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight"
        >
          Build Smarter, <span className="text-blue-600">Grow Faster</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
        >
          Scale your SaaS growth with backlinks that actually convert.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-8 flex gap-4 justify-center"
        >
          <motion.button
    whileHover={{ scale: 1.07 }}
    whileTap={{ scale: 0.95 }}
    className="relative px-7 py-3 rounded-xl text-lg font-semibold text-white shadow-lg 
               bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600
               hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 
               transition-all duration-500 overflow-hidden"
  >
    <span className="relative z-10">🚀 Get Started</span>
    {/* Glow Effect */}
    <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 
                     opacity-0 group-hover:opacity-30 blur-xl transition duration-700"></span>
  </motion.button>

  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="px-7 py-3 rounded-xl border border-gray-300 text-lg font-medium 
               text-gray-700 shadow-md backdrop-blur-sm bg-white/60 
               hover:bg-white/80 hover:border-gray-400 transition duration-300"
  >
    Learn More
  </motion.button>
        </motion.div>
      </div>

      {/* Background Blob */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute w-[400px] h-[400px] bg-blue-200 rounded-full blur-3xl opacity-50 -z-10 top-10 right-20"
      />
    </section>
  );
}
