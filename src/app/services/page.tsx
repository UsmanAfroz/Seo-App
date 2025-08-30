// app/services/page.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
// import seoImage from "../assets/seo001.png";
import Image from "next/image";

export default function ServicesPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 text-center md:text-left md:flex items-center justify-between gap-10 py-16">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Link Building Services That Drive Results 🚀
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Get high-quality backlinks from trusted industry websites to boost
            your SEO and grow your organic visibility.
          </p>
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
          >
            Get Started
          </Link>
        </div>
        <div className="md:w-1/2 mt-5 md:mt-0 flex justify-center">
          <Image
            src="/seo001.png"
            alt="Link Building Illustration"
            width={400}
            height={400}
            className="w-50 md:w-full"
          />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Choose Your Plan
          </h2>
          <p className="text-gray-600 mb-12">
            Flexible pricing tailored to your growth needs.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Starter", price: "$199/mo", features: ["10 backlinks", "Basic outreach", "Monthly reporting"] },
              { title: "Growth", price: "$499/mo", features: ["30 backlinks", "Advanced outreach", "Bi-weekly reporting"], highlighted: false },
              { title: "Pro", price: "$999/mo", features: ["70 backlinks", "Premium outreach", "Weekly reporting"] },
            ].map((plan, i) => (
              <motion.div
                whileHover={{ scale: 1.05 }}
                key={i}
                className={`p-8 rounded-2xl shadow-md transition cursor-pointer ${
                  plan.highlighted
                    ? "bg-blue-600 text-white scale-105 shadow-xl"
                    : "bg-white"
                }`}
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
                  className={`px-5 py-2 rounded-lg font-medium ${
                    plan.highlighted
                      ? "bg-white text-blue-600 hover:bg-gray-100"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  } transition`}
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
        <div className="grid md:grid-cols-4 gap-8 text-center">
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
              className="p-6 bg-white rounded-2xl shadow-md"
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-xl shadow hover:bg-blue-700 transition"
          >
            Let’s Talk
          </Link>
        </div>
      </section>
    </div>
  );
}
