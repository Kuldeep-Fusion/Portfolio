"use client";
import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <div className="group bg-white rounded-2xl shadow-md overflow-hidden transition hover:shadow-xl">
      
      {/* Image Preview */}
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-auto sm:h-auto object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5">
        <h3 className="text-lg sm:text-xl font-semibold">
          {project.title}
        </h3>

        <p className="text-gray-600 text-sm mt-2">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-3">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Button */}
        <Link href={project.url} target="_blank">
          <button className="mt-4 w-full bg-black text-white py-2 rounded-lg text-sm sm:text-base hover:bg-gray-800 transition">
            Visit Website
          </button>
        </Link>
      </div>
    </div>
  );
}