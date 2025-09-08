"use client";
import { motion } from "framer-motion";
import ContactForm from "../components/contactForm"; // adjust path if needed
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Hero Section */}

      <section className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-[10rem] px-6 text-center">
        {" "}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold"
        >
          {" "}
          Let’s Work Together{" "}
        </motion.h1>{" "}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 max-w-2xl mx-auto text-lg md:text-xl"
        >
          {" "}
          Have a project in mind or just want to say hello? Fill out the form
          and we’ll get back to you as soon as possible.{" "}
        </motion.p>{" "}
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-6 sm:px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12 text-center">
            Get in Touch
          </h2>

          {/* Flex container for image + form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left Image Section */}
            <div className="flex justify-center">
              <Image
                src="/seo001.png" // <-- replace with your image path
                alt="Contact Illustration"
                width={450}
                            height={450}
                className="rounded-2xl shadow-lg max-h-[400px] object-cover"
              />
            </div>

            {/* Right Form Section */}
            <div className="w-full">
              <ContactForm /> {/* Using your separate component */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
