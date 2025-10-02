"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Hero Section */}

      <section className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-[10rem] px-6 text-center">
        {" "}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold"
        >
          {" "}
          Who we are{" "}
        </motion.h1>{" "}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-3 text-gray-200 max-w-2xl mx-auto"
        >
          {" "}
          From strategy to execution, our mission is simple: to deliver solutions that drive growth,
           create impact, and make your brand stand out.{" "}
        </motion.p>{" "}
      </section>

     

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
      <strong>Performance-focused</strong> — strategies aligned with SaaS growth KPIs.
    </span>
  </li>
  <li className="flex items-start gap-3">
    <span className="inline-block mt-1 text-blue-600">•</span>
    <span className="text-gray-700">
      <strong>SEO-first approach</strong> — high quality, niche relevant backlinks from trusted sources.
    </span>
  </li>
  <li className="flex items-start gap-3">
    <span className="inline-block mt-1 text-blue-600">•</span>
    <span className="text-gray-700">
      <strong>Scalable foundation</strong> — link-building processes designed to grow with your SaaS.
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


          <section id="cta" className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 text-white">
                <div className="max-w-6xl mx-auto px-6 text-center">
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold"
                  >
                    Rank Higher, Grow Smarter.
                  </motion.h3>
                  <p className="mt-3 text-gray-100 max-w-2xl mx-auto">
                    Boost your online presence with ethical link-building and data-driven SEO strategies that attract the right audience and deliver measurable growth.
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
        
      

    </div>
  );
}
