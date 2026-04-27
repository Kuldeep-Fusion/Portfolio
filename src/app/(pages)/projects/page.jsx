import ProjectCard from "@/app/components/projectcard";


export default function Projects() {
const projects = [
  {
    id: 1,
    title: "AdCliq Digital",
    description: "Modern digital marketing website with clean UI.",
    image: "/src/projects/adcliq360.png",
    url: "https://digital.adcliq360.com/",
    tech: ["HTML", "CSS", "javascript"],
  },
  {
    id: 2,
    title: "AI Consults",
    description: "Professional business website built on WordPress.",
    image: "/src/projects/aiconsult.png", // make sure name matches
    url: "https://aiconsults.se/",
    tech: ["WordPress", "Elemntor"],
  },
  {
    id: 3,
    title: "Developer Portfolio",
    description: "Full-stack portfolio with database integration.",
    image: "/src/projects/portfolio.png",
    url: "https://portfolio-ruddy-ten-55.vercel.app/",
    tech: ["Next.js", "MongoDB", "Tailwind"],
  },
];

  return (
   <main className="min-h-screen bg-gray-50 py-10 flex items-center justify-center">
  
  <div className="max-w-[60%] mx-auto px-4 sm:px-6">
    
    {/* Heading */}
    <div className="text-center max-w-2xl mx-auto">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
        My Projects
      </h1>
      <p className="text-gray-600 mt-3 text-sm sm:text-base">
        Here are some of my recent works with live previews.
      </p>
    </div>

    {/* Grid */}
    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>

  </div>
</main>
  );
}