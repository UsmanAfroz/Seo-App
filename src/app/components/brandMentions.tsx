"use client";

import Image from "next/image";

const logos = [
  { src: "/posnow.jpeg", alt: "Brand 2" },
  { src: "/opencart-logo.png", alt: "Brand 3" },
  { src: "/venn3.jpeg", alt: "Brand 4" },
  { src: "/Pointerpro-logo.png", alt: "Brand 5" },
  { src: "/cloudtalk.png", alt: "Brand 6" },
  { src: "/chantypng.png", alt: "Brand 1" },
];

export default function BrandMentions() {
  return (
    <div className="w-full bg-white py-12 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-8 px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Our clients have been featured in top publications like
        </h2>
      </div>

      {/* 👇 Mobile View (static grid) */}
      <div className="grid grid-cols-2 gap-6 px-6 md:hidden">
        {logos.map((logo, index) => (
          <div
            key={`mobile-${index}`}
            className="flex items-center justify-center"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={60}
              className="object-contain"
            />
          </div>
        ))}
      </div>

      {/* 👇 Desktop View (scrolling slider) */}
      <div className="hidden md:block relative flex overflow-x-hidden">
        {/* First loop */}
        <div className="flex animate-marquee space-x-12">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-[120px] hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </div>

        {/* Second loop (for seamless scroll) */}
        <div className="absolute top-0 flex animate-marquee2 space-x-12">
          {logos.map((logo, index) => (
            <div
              key={`duplicate-${index}`}
              className="flex items-center justify-center min-w-[120px] hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
