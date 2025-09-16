
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-2 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            We grow SaaS brands with purpose
          </h2>
          <p className="mt-4 text-gray-600">
            We are a performance-driven SaaS SEO agency specializing in link building strategies that deliver measurable results. Our approach combines technical expertise, data-backed research, and high-quality content to help SaaS companies establish authority and achieve sustainable growth.
             </p>
             <p className="mt-4 text-gray-600">
            Instead of chasing vanity metrics, we focus on what truly matters: qualified traffic, stronger search visibility, and conversions that move the needle. Every strategy is tailored to SaaS business models, ensuring relevance, scalability, and long-term impact.
              </p>

          

          <ul className="mt-6 space-y-3 hidden md:block">
  <li className="flex items-start gap-3">
    <span className="inline-block mt-1 text-blue-600">•</span>
    <span className="text-gray-700">
      🚀 Performance-focused — strategies aligned with SaaS growth KPIs.
    </span>
  </li>
  <li className="flex items-start gap-3">
    <span className="inline-block mt-1 text-blue-600">•</span>
    <span className="text-gray-700">
      🔗 SEO-first approach — high-quality, niche-relevant backlinks from trusted sources.
    </span>
  </li>
  <li className="flex items-start gap-3">
    <span className="inline-block mt-1 text-blue-600">•</span>
    <span className="text-gray-700">
      📈 Scalable foundation — link-building processes designed to grow with your SaaS.
    </span>
  </li>
</ul>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 flex items-center justify-center">
            <div className="text-center px-6">
            
              <Image
                          src="/seo001.png"
                          alt="Link Building Illustration"
                          width={470}
                          height={470}
                          className="w-50 md:w-full"
                        />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
