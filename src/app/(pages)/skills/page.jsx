"use client";

import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiWordpress,
  SiShopify,
  SiWix,
  SiGithub,
  SiVercel,
  SiOpenai,
} from "react-icons/si";

import { FiCpu } from "react-icons/fi";

export default function Skills() {
  const categories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <SiReact />, color: "group-hover:text-blue-500" },
        { name: "Next.js", icon: <SiNextdotjs />, color: "group-hover:text-black" },
        { name: "JavaScript", icon: <SiJavascript />, color: "group-hover:text-yellow-500" },
        { name: "HTML5", icon: <SiHtml5 />, color: "group-hover:text-orange-500" },
        { name: "CSS", icon: <SiCss />, color: "group-hover:text-blue-400" },
        { name: "Tailwind", icon: <SiTailwindcss />, color: "group-hover:text-cyan-500" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs />, color: "group-hover:text-green-500" },
        { name: "Express", icon: <SiExpress />, color: "group-hover:text-gray-800" },
        { name: "MongoDB", icon: <SiMongodb />, color: "group-hover:text-green-600" },
      ],
    },
    {
      title: "AI & Automation",
      skills: [
        { name: "OpenAI", icon: <SiOpenai />, color: "group-hover:text-purple-500" },
        { name: "Claude", icon: <FiCpu />, color: "group-hover:text-indigo-500" },
        { name: "Copilot", icon: <FiCpu />, color: "group-hover:text-pink-500" },
        { name: "Cursor", icon: <FiCpu />, color: "group-hover:text-blue-500" },
        { name: "n8n", icon: <FiCpu />, color: "group-hover:text-orange-500" },
      ],
    },
    {
      title: "CMS & Tools",
      skills: [
        { name: "WordPress", icon: <SiWordpress />, color: "group-hover:text-blue-700" },
        { name: "Shopify", icon: <SiShopify />, color: "group-hover:text-green-600" },
        { name: "Wix", icon: <SiWix />, color: "group-hover:text-gray-900" },
        { name: "GitHub", icon: <SiGithub />, color: "group-hover:text-black" },
        { name: "Vercel", icon: <SiVercel />, color: "group-hover:text-black" },
      ],
    },
  ];

  return (
    <section className="w-full flex justify-center py-24 px-6 bg-cover bg-center " style={{ backgroundImage: "url('/bg.jpg')" }}>

      {/* CONTAINER */}
      <div className="w-full md:w-[60%] space-y-16">

        {/* HEADER */}
        <div className="text-center space-y-5">
          <p className="text-xs tracking-[0.3em] text-gray-500 uppercase">
            Tech Stack
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900">
            Tools I Work With
          </h1>

          <p className="text-gray-600 max-w-xl mx-auto">
            A powerful stack of technologies and AI tools to build fast,
            scalable and modern digital experiences.
          </p>
        </div>

        {/* CATEGORIES */}
        <div className="space-y-12">

          {categories.map((cat, index) => (
            <div key={index} className="space-y-4">

              <h3 className="text-lg font-semibold text-gray-900">
                {cat.title}
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

                {cat.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="group relative p-[1px] rounded-xl bg-gradient-to-r from-gray-200 to-gray-100 hover:from-black hover:to-gray-500 transition duration-300"
                  >
                    <div className="flex items-center gap-3 p-4 bg-white rounded-xl transition duration-300 group-hover:scale-[1.04] group-hover:shadow-lg">

                      <div
                        className={`text-xl text-gray-500 transition ${skill.color}`}
                      >
                        {skill.icon}
                      </div>

                      <span className="text-sm text-gray-700 group-hover:text-black transition">
                        {skill.name}
                      </span>

                    </div>
                  </div>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}