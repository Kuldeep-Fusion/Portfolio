"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { FiZap, FiTarget, FiTrendingUp, FiUsers } from "react-icons/fi";

export default function About() {
  const skills = [
    "WordPress",
    "Shopify",
    "Wix",
    "Next.js",
    "React",
    "SEO",
    "UI/UX",
    "Figma",
  ];

  return (
    <section className="relative w-full flex justify-center py-24 px-6 bg-[#f9fafb] overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-gray-100" />
      <div className="absolute w-[500px] h-[500px] bg-blue-200 opacity-20 blur-[120px] rounded-full top-[-150px] left-[-150px]" />

      {/* MAIN CONTAINER (60%) */}
      <div className="w-full md:w-[60%] space-y-14 relative z-10">

        {/* HEADER */}
        <div className="text-center space-y-5">
          <p className="text-xs tracking-[0.3em] text-gray-500 uppercase">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
            Crafting Websites That <br />
            <span className="text-gray-400">Drive Real Results</span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-base">
            I’m a Web Developer & Designer focused on building modern,
            high-performing websites that help businesses grow, convert
            and scale online.
          </p>
        </div>

        {/* FEATURE CARDS */}
        <div className="grid md:grid-cols-2 gap-6">

          <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
            <FiZap className="text-xl mb-3 text-black" />
            <h4 className="text-sm font-semibold text-gray-900">
              50+ Projects
            </h4>
            <p className="text-xs text-gray-500 mt-1">
              Successfully delivered websites
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
            <FiTarget className="text-xl mb-3 text-black" />
            <h4 className="text-sm font-semibold text-gray-900">
              Conversion Focus
            </h4>
            <p className="text-xs text-gray-500 mt-1">
              Built for leads & sales growth
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
            <FiTrendingUp className="text-xl mb-3 text-black" />
            <h4 className="text-sm font-semibold text-gray-900">
              SEO Optimized
            </h4>
            <p className="text-xs text-gray-500 mt-1">
              Fast & search-friendly builds
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
            <FiUsers className="text-xl mb-3 text-black" />
            <h4 className="text-sm font-semibold text-gray-900">
              Client First
            </h4>
            <p className="text-xs text-gray-500 mt-1">
              Focused on user experience
            </p>
          </div>

        </div>

        {/* SKILLS (CLEAN SLIDER) */}
        <div className="space-y-4">
          <p className="text-sm text-gray-500 text-center">
            Technologies I Work With
          </p>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={4}
            loop={true}
            autoplay={{ delay: 1500, disableOnInteraction: false }}
            breakpoints={{
              320: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
          >
            {skills.map((skill, index) => (
              <SwiperSlide key={index}>
                <div className="py-3 px-5 bg-white border border-gray-100 rounded-full text-sm text-gray-700 text-center hover:shadow-sm transition">
                  {skill}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* CTA */}
        <div className="flex justify-center gap-4 pt-6">
          <Link
            href="/contact"
            className="px-6 py-3 bg-black text-white rounded-full text-sm font-medium hover:scale-[1.05] transition"
          >
            Hire Me
          </Link>

          <button className="px-6 py-3 text-sm font-medium text-gray-700 hover:text-black transition">
            Download CV →
          </button>
        </div>

      </div>
    </section>
  );
}