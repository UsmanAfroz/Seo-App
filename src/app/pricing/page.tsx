// app/services/page.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
// import seoImage from "../assets/seo001.png";
import Image from "next/image";

export default function ServicesPage() {
  const MotionLink = motion(Link);
  return (
    <div>
      {/* Hero Section */}
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
                          Link Building Services  {" "}
                        <span className="block text-yellow-300">That Drive Results</span>
                      </motion.h1>
            
                      {/* Subheading */}
                      <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="mt-5 text-base sm:text-lg md:text-xl text-white/90 max-w-xl"
                      >
                         Get high-quality backlinks from trusted industry websites to boost
              your SEO and grow your organic visibility.

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
                          href="/pricing"
                          whileHover={{ scale: 1.07 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-6 py-2 sm:py-3 rounded-lg text-base sm:text-lg font-medium 
                                    bg-white text-indigo-700 shadow-md 
                                    transition duration-300
                                    hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 
                                    hover:text-white"
                        >
                          Get Started
                        </MotionLink>
            
                        {/* Our Process (for now just a placeholder, can link to /process or another section) */}
                        {/* <MotionLink
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
                        </MotionLink> */}
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
                        src="/build004.png"
                        alt="Hero Illustration"
                        width={450}
                        height={450}
                        className="object-contain drop-shadow-xl"
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
                    <li key={idx}>{feature}</li>
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
