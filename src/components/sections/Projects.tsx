"use client";

import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Project 1",
    description: "A full-stack web application that helps users manage their tasks and stay organized.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    githubUrl: "https://github.com/unclealek/project1",
    liveUrl: "https://project1.com",
    image: "/project1.jpg"
  },
  {
    title: "Project 2",
    description: "A full-stack web application that helps users manage their tasks and stay organized.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    githubUrl: "https://github.com/unclealek/project1",
    liveUrl: "https://project1.com",
    image: "/project1.jpg"
  },
  {
    title: "Project 3",
    description: "A full-stack web application that helps users manage their tasks and stay organized.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    githubUrl: "https://github.com/unclealek/project1",
    liveUrl: "https://project1.com",
    image: "/project1.jpg"
  },
  {
    title: "Project 4",
    description: "A full-stack web application that helps users manage their tasks and stay organized.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    githubUrl: "https://github.com/unclealek/project1",
    liveUrl: "https://project1.com",
    image: "/project1.jpg"
  },
  {
    title: "Project 5",
    description: "A full-stack web application that helps users manage their tasks and stay organized.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    githubUrl: "https://github.com/unclealek/project1",
    liveUrl: "https://project1.com",
    image: "/project1.jpg"
  },
  // Add more projects here
];

export default function Projects() {
  return (
    <section id="projects" className="w-full py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4 pt-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                  >
                    <FaGithub size={20} />
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                    >
                      <FaExternalLinkAlt size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
