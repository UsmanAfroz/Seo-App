// src/components/CTA.tsx
"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="cta" className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold"
        >
          Grow your visibility, grow your business.
        </motion.h3>
        <p className="mt-3 text-gray-100 max-w-2xl mx-auto">
          Get a high-performing website and proven SEO strategies designed to attract, engage, and convert your ideal audience.
        </p>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.03 }}
          className="inline-block mt-6 px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold shadow"
        >
          Get in touch
        </motion.a>
      </div>
    </section>
  );
}
