// src/components/Testimonials.tsx
"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const data = [
  { name: "Sarah J.", role: "Founder", quote: "We’ve worked with other agencies before, but this is the first time we’ve seen link-building efforts directly translate into qualified leads." },
  { name: "Alex R.", role: "CMO", quote: "Our rankings improved within months, and the quality of backlinks has been outstanding." },
  { name: "Maya K.", role: "CEO", quote: "The team provided us with high-quality backlinks from relevant sites in our niche. Not only did our traffic grow, but we also noticed an increase in product signups within weeks." },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">What our clients say about our link-building services</h2>
          <p className="mt-2 text-gray-600">Real feedback from people using the product.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl p-6 bg-gradient-to-b from-gray-50 to-white border border-gray-100 shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{t.name}</h3>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
                <Star className="w-6 h-6 text-yellow-400" />
              </div>
              <p className="mt-4 text-gray-600 italic">“{t.quote}”</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
