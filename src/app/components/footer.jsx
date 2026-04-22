"use client";

import { FiMail, FiPhone } from "react-icons/fi";
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function FooterDock() {
  const links = [
    {
      icon: <FaWhatsapp />,
      href: "https://wa.me/919876543210",
      label: "WhatsApp",
    },
    {
      icon: <FiMail />,
      href: "mailto:your@email.com",
      label: "Email",
    },
    {
      icon: <FaInstagram />,
      href: "#",
      label: "Instagram",
    },
    {
      icon: <FaLinkedin />,
      href: "#",
      label: "LinkedIn",
    },
    {
      icon: <FiPhone />,
      href: "tel:+919876543210",
      label: "Call",
    },
  ];

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-full flex justify-center px-4">

      {/* GREEN DOCK */}
      <div className="flex items-center gap-6 bg-green-500 text-white shadow-[0_8px_25px_rgba(0,0,0,0.2)] rounded-full px-6 py-3">

        {links.map((item, index) => (
          <a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center transition-all duration-300"
          >
            {/* ICON */}
            <span className="text-lg transition-transform duration-300 hover:scale-125">
              {item.icon}
            </span>

            
          </a>
        ))}

      </div>
    </div>
  );
}