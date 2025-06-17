"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const bannerImages = [
  { src: "/assets/gst-banner.png", url: "/services/gst" },
  { src: "/assets/itr-banner.png", url: "/services/itr" },
  { src: "/assets/rera-banner.png", url: "/services/rera" },
];

const MovingImages = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen flex flex-col items-center justify-center px-4 md:px-10 bg-gradient-to-br from-[#E0F2FE] to-[#BFDBFE] text-[#1D4ED8] text-center"
    >
      <div className="w-full overflow-hidden relative group py-4 md:py-8">
        <div className="scroll-left flex gap-4 md:gap-8 group-hover:[animation-play-state:paused]">
          {[...bannerImages, ...bannerImages].map((banner, index) => (
            <a
              key={index}
              href={banner.url}
              className="w-[300px] sm:w-[400px] md:w-[600px] lg:w-[820px] aspect-[16/9] flex-shrink-0 overflow-hidden rounded-2xl transition-transform duration-300 transform hover:-translate-y-2 shadow-xl hover:shadow-2xl"
              target="_self"
            >
              <img
                src={banner.src}
                alt={`Banner ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </div>

      <a
        href="#contact"
        className="mt-10 inline-block bg-[#B91C1C] hover:bg-[#DC2626] text-white font-montserrat font-semibold px-8 py-4 md:px-12 md:py-5 rounded-xl shadow-xl transition-transform transform hover:scale-105 text-lg md:text-xl"
      >
        Explore All Services & Get Started
      </a>
    </section>
  );
};

export default MovingImages;
