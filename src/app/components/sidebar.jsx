"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaTachometerAlt, FaProjectDiagram, FaTools, FaEnvelope } from "react-icons/fa";

const Sidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    { name: "Dashboard", link: "/dashboard", icon: FaTachometerAlt },
    { name: "Projects", link: "/dashboard/projects", icon: FaProjectDiagram },
    { name: "Skills", link: "/dashboard/skills", icon: FaTools },
    { name: "Contact", link: "/dashboard/contact", icon: FaEnvelope },
  ];

  return (
    <aside className="w-64 h-screen bg-gray-200 shadow-lg rounded-2xl p-6 flex flex-col justify-between">
      
      {/* Top */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800 mb-10">
          Kuldeep Kumar
        </h1>

        <nav>
          <ul className="space-y-3">
            {menuItems.map((item) => {
              const isActive = pathname === item.link;
              const Icon = item.icon;

              return (
                <li key={item.name}>
                  <Link
                    href={item.link}
                    className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200
                    ${
                      isActive
                        ? "bg-green-500 text-white border-b-2 border-green-700"
                        : "text-gray-600 hover:bg-white border-b-2  hover:text-gray-900 "
                    }`}
                  >
                    <Icon size={18} />
                    <span>{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Bottom */}
      <div className="text-sm text-gray-400">
        © {new Date().getFullYear()} Admin Panel
      </div>
    </aside>
  );
};

export default Sidebar;