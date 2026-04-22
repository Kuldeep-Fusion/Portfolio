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
    <header className="fixed top-5 left-0 w-full z-50 ">
      <div className="container  px-4 h-16 flex shadow-lg items-center justify-between backdrop-blur-lg  bg-black border rounded-full border-white/20">
        
        {/* Logo */}
         <Link href="/" className="text-white text-lg font-semibold tracking-wide">
          Kuldeep Kumar
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;

            return (
              <Link
                key={link.path}
                href={link.path}
                className="relative text-sm font-medium text-gray-300 hover:text-white transition"
              >
                {link.name}

                {/* Active underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-emerald-500 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}

         
        </nav>

 {/* CTA Button */}
          <button className=" ml-4 px-5 py-2 text-sm font-medium text-white bg-emerald-600 rounded-full hover:bg-emerald-500 transition-all duration-300 shadow-lg shadow-emerald-600/20 ">
         <Link href="./src/resume.pdf" download>
           Download CV
         </Link>
          
          </button>
        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-black/90 backdrop-blur-lg border-t border-white/10 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setMenuOpen(false)}
              className={`text-base font-medium transition ${
                pathname === link.path
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}

          
        </div>
      </div>
    </header>
  );
}