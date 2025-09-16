// app/services/page.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
// import seoImage from "../assets/seo001.png";
import Image from "next/image";

export default function ServicesPage() {
  return (
    <div>
      {/* Hero Section */}
            <section className="bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-6 md:flex items-center justify-between py-16 md:py-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 flex flex-col justify-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-white">
              Link Building Services
               <span className="block text-yellow-200">That Drive Results.</span>
            </h1>
            
            {/* <h2 className="text-3xl sm:text-4xl md:text-4xl font-extrabold leading-tight tracking-tight text-white">
              That Drive Results 🚀
            </h2> */}
            <p className="text-base md:text-lg text-white mb-6">
              Get high-quality backlinks from trusted industry websites to boost
              your SEO and grow your organic visibility.
            </p>
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-5 py-2.5 rounded-xl shadow hover:bg-blue-700 transition w-fit
               hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 
                           hover:text-white"
            >
              Get Started
            </Link>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mt-8 md:mt-0 flex justify-center"
          >
            <Image
              src="/seo001.png"
              alt="Link Building Illustration"
              width={450}
              height={450}
              className="max-w-xs md:max-w-sm lg:max-w-md"
            />
          </motion.div>
        </div>
      </section>


      {/* Pricing Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto text-center ">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Choose Your Plan
          </h2>
          <p className="text-gray-600 mb-12">
            Flexible pricing tailored to your growth needs.
          </p>

          <div className="grid md:grid-cols-3 gap-8 ">
            {[
              { title: "Starter", price: "$1100/mo", features: ["10 backlinks", "Metrics: DR 50+, Traffic 1,000+", "SaaS Websites", "Backlink Analysis", "SERP Tracking"] },
              { title: "Growth", price: "$2000/mo", features: ["20 backlinks", "Metrics: DR 50+, Traffic 1,000+", "SaaS Websites", "Backlink Analysis", "SERP Tracking"], highlighted: false },
              { title: "Pro", price: "$2800/mo", features: ["30 backlinks", "Metrics: DR 50+, Traffic 1,000+", "SaaS Websites", "Backlink Analysis", "SERP Tracking"] },
            ].map((plan, i) => (
              <motion.div
                whileHover={{ scale: 1.05 }}
                key={i}
                className="p-8 rounded-2xl shadow-md transition cursor-pointer bg-white hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 hover:text-white"
              >
                <h3 className="text-xl font-semibold mb-4">{plan.title}</h3>
                <p className="text-3xl font-bold mb-6">{plan.price}</p>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>✅ {feature}</li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="px-5 py-2 rounded-lg font-medium bg-blue-500 text-white hover:bg-white hover:text-blue-500 transition"
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          How We Build Links
        </h2>
        <div className="grid md:grid-cols-4 gap-8 text-center ">
          {[
            {
              title: "Strategy",
              desc: "We design a tailored link building roadmap aligned with your SEO goals.",
              icon: "📊",
            },
            {
              title: "Outreach",
              desc: "We connect with top websites & publishers in your niche for placements.",
              icon: "✉️",
            },
            {
              title: "Backlinks",
              desc: "We secure high-quality, contextually relevant backlinks from trusted sites.",
              icon: "🔗",
            },
            {
              title: "Results",
              desc: "Track your SEO performance with transparent reporting and analytics.",
              icon: "📈",
            },
          ].map((step, i) => (
            <motion.div
              whileHover={{ y: -8 }}
              key={i}
              className="p-6 bg-white rounded-2xl shadow-md transition cursor-pointer hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 hover:text-white"
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 hover:text-white">{step.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-xl shadow hover:bg-blue-700 transition 
            hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 hover:text-white"
          >
            Let’s Talk
          </Link>
        </div>
      </section>
    </div>
  );
}
