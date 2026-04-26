"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-3 left-0 w-full z-50 px-3">
      
      {/* NAVBAR */}
      <div className="mx-auto max-w-7xl flex items-center justify-between h-14 md:h-16 px-4 md:px-6 rounded-full border border-white/20 bg-black/80 backdrop-blur-lg shadow-lg">
        
        {/* Logo */}
        <Link href="/" className="text-white text-sm md:text-lg font-semibold whitespace-nowrap">
          Kuldeep Kumar
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;

            return (
              <Link
                key={link.path}
                href={link.path}
                className="relative text-sm font-medium text-gray-300 hover:text-white transition"
              >
                {link.name}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-emerald-500 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* CTA Button */}
          <a
            href="/resume.pdf"
            download
            className="hidden sm:block px-4 py-2 text-xs md:text-sm font-medium text-white bg-emerald-600 rounded-full hover:bg-emerald-500 transition whitespace-nowrap"
          >
            Download CV
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-2xl leading-none"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          menuOpen ? "max-h-[400px] opacity-100 mt-3" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl bg-black/90 backdrop-blur-lg border border-white/10 rounded-2xl px-6 py-6 flex flex-col gap-6">
          
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setMenuOpen(false)}
              className={`text-base font-medium ${
                pathname === link.path
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Mobile CTA */}
          <a
            href="/resume.pdf"
            download
            className="w-full text-center px-5 py-2 text-sm font-medium text-white bg-emerald-600 rounded-full hover:bg-emerald-500 transition"
          >
            Download CV
          </a>
        </div>
      </div>
    </header>
  );
}