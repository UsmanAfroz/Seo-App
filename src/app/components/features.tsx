// src/components/Features.tsx
"use client";

import { motion } from "framer-motion";
import { Sparkles, Code, Activity } from "lucide-react";

const items = [
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Authority-Driven Links",
    desc: "High-quality backlinks from trusted SaaS and tech platforms that boost your credibility and search engine rankings.",
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Targeted Traffic",
    desc: "Links that bring in qualified visitors already searching for SaaS solutions — leading to higher engagement and conversions.",
  },
  {
    icon: <Activity className="w-6 h-6" />,
    title: "Proven Strategy",
    desc: "Data-backed link-building methods tailored to your KPIs, ensuring every backlink has measurable impact on your growth.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className=" text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-g-900">
            Grow your SaaS <span className="text-blue-600"> with smarter SEO</span>
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
           A tailored link-building foundation built for SaaS. Driving rankings, traffic, and conversions that matter.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-gradient-to-b from-blue-50/40 to-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition"
            >
              <div className="inline-flex items-center justify-center rounded-lg bg-white p-3 ring-1 ring-gray-100">
                <div className="text-blue-600">{it.icon}</div>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{it.title}</h3>
              <p className="mt-2 text-gray-600">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
