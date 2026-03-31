"use client";

import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { type StaticImageData } from "next/image";
import johnny from "@/app/images/johny.png";
import nesthost from "@/app/images/Analytics QualLeads.png";

interface Project {
  id: number;
  name: string;
  description: string;
  tech: string[];
  image: string | StaticImageData;
  color: string;
  cat: string;
  github?: string;
  demo?: string;
}

function getImageSrc(image: string | StaticImageData): string {
  if (typeof image === "string") return image;
  return image.src;
}

const projects: Project[] = [
  {
    id: 1,
    name: "Property Management Dashboard",
    description:
      "A property management dashboard integrating multiple applications l. Made for NestHost.",
    tech: ["React", "Next.js", "TypeScript", "Stripe"],
    image: nesthost,
    color: "from-rose-100 to-pink-100",
    cat: "😺",
  },
  {
    id: 2,
    name: "Johnnys Journey",
    description:
      "2D Top down fantasy roguelike game. Won best overall in UofW Hackathon 2026",
    tech: ["Unity", "C#", "Github"],
    image: johnny,
    color: "from-blue-100 to-cyan-100",
    cat: "😸",
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    name: "Project Gluttony",
    description:
      "Submission for CSSA Game Jam 2025. A 3D hack and slash roguelike where you survive the time limit.",
    tech: ["Unity", "Github", "Unity Cloud"],
    image:
      "https://img.itch.zone/aW1hZ2UvNDA4MTcxOC8yNDMzMDU1MC5qcGc=/original/8YjO9B.jpg",
    color: "from-amber-100 to-orange-100",
    cat: "😼",
    demo: "https://feliscatu.itch.io/project-gluttony",
  },
  // {
  //   id: 4,
  //   name: "Movie App",
  //   description:
  //     "A tool that helps developers create stunning portfolios with customizable templates.",
  //   tech: ["Next.js", "MDX", "Framer Motion"],
  //   image:
  //     "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
  //   color: "from-green-100 to-emerald-100",
  //   cat: "🐱",
  //   github: "#",
  //   demo: "#",
  // },
  // {
  //   id: 5,
  //   name: "Recipe Finder",
  //   description:
  //     "Discover and save your favorite recipes with smart ingredient-based search.",
  //   tech: ["React", "Node.js", "MongoDB"],
  //   image:
  //     "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=800&q=80",
  //   color: "from-purple-100 to-violet-100",
  //   cat: "😽",
  //   demo: "#",
  // },
  // {
  //   id: 6,
  //   name: "Fitness Tracker",
  //   description:
  //     "Track workouts, monitor progress, and achieve fitness goals with data-driven insights.",
  //   tech: ["React Native", "Redux", "Firebase"],
  //   image:
  //     "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
  //   color: "from-teal-100 to-cyan-100",
  //   cat: "😼",
  //   github: "#",
  //   demo: "#",
  // },
];

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-32 px-4 bg-muted/30 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-4 bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-muted-foreground font-mono">
            ~ Featured Projects ~
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-card soft-shadow rounded-3xl overflow-hidden hover:soft-shadow-hover transition-all duration-300 hover:-translate-y-2">
                {/* Cat Badge */}
                <div className="relative">
                  {/*<div
                    className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-br ${project.color} rounded-full flex items-center justify-center text-2xl z-10 group-hover:animate-bounce`}
                  >
                    {project.cat}
                  </div>*/}
                  <img
                    src={getImageSrc(project.image)}
                    alt={project.name}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-accent transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs font-mono px-3 py-1 bg-muted rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-card soft-shadow rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={getImageSrc(selectedProject.image)}
                alt={selectedProject.name}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-card rounded-full flex items-center justify-center hover:bg-muted transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="p-8">
              <div className="flex items-start gap-4 mb-4">
                {/*<div
                  className={`w-16 h-16 bg-gradient-to-br ${selectedProject.color} rounded-full flex items-center justify-center text-3xl flex-shrink-0`}
                >
                  {selectedProject.cat}
                </div>*/}
                <div>
                  <h3 className="text-3xl font-display font-bold mb-2">
                    {selectedProject.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {selectedProject.description}
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-display font-semibold mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="font-mono px-4 py-2 bg-muted rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    className="flex-1 py-3 px-6 bg-foreground text-background rounded-full text-center font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                  >
                    <Github className="w-5 h-5" />
                    View Code
                  </a>
                )}
                {selectedProject.demo && (
                  <a
                    href={selectedProject.demo}
                    className="flex-1 py-3 px-6 bg-accent text-foreground rounded-full text-center font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
