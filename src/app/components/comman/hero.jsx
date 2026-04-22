"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

import { FaNodeJs, FaShopify, FaJs } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";


export default function Hero() {
  const ref = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".fade", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
     className="relative min-h-screen flex items-center justify-center px-6 bg-cover bg-center"
  style={{ backgroundImage: "url('/bg.jpg')" }}
>
      {/* Subtle Gradient Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-gray-100" />
      <div className="absolute w-[600px] h-[600px] bg-purple-200 opacity-20 blur-[120px] rounded-full top-[-200px] left-[-200px]" />

      {/* Container */}
      <div className="max-w-4xl w-full text-center space-y-10">

        {/* Heading */}
        <div className="space-y-5">
          <p className="fade text-xs tracking-[0.3em] text-gray-800 uppercase">
            Full-Stack Developer
          </p>

          <h1 className="fade text-4xl md:text-6xl font-semibold text-gray-900 leading-[1.1]">
            Building Clean & Scalable  <br />
            <span className="text-gray-400">Digital Experiences</span>
          </h1>

          <p className="fade text-gray-600 max-w-xl mx-auto text-base">
            I build high-performance websites focused on speed, SEO and
            conversion using modern technologies.
          </p>
        </div>

        {/* CTA */}
        <div className="fade flex justify-center gap-4">
          <Link
            href="/contact"
            className="px-6 py-3 bg-black text-white rounded-full text-sm font-medium hover:scale-[1.03] transition"
          >
            Start Project
          </Link>

          <Link
            href="/projects"
            className="px-6 py-3 text-sm font-medium text-gray-700 hover:text-black transition"
          >
            View Work →
          </Link>
        </div>

        {/* Skills Minimal Strip */}
        <div className="fade flex justify-center gap-10 pt-6 text-3xl text-gray-400">
          <DiMongodb className="text-green-600 transition" />
          <SiExpress className="text-red-500 transition" />
          <RiNextjsFill className="text-black transition" />
          <FaNodeJs className="text-green-600 transition" />
           
         
         
        </div>

        {/* Stats instead of boring lists */}
        <div className="fade grid grid-cols-3 gap-6 pt-10 border-t border-gray-200">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">50+</h3>
            <p className="text-sm text-gray-500">Projects Done</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">3+</h3>
            <p className="text-sm text-gray-500">Years Experience</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">100%</h3>
            <p className="text-sm text-gray-500">Client Satisfaction</p>
          </div>
        </div>

      </div>
    </section>
  );
}