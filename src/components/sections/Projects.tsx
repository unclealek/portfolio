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
    title: "ETL-pipeline",
    description: "This project is a data pipeline designed to extract data from CSV and Excel files, transform the data, and load it into a target database table. It consists of modules for data extraction, transformation, and loading.",
    technologies: ["Python", "PostgreSQL", "HTTP", "API"],
    githubUrl: "https://github.com/unclealek/ETL-pipeline",
    liveUrl: "https://project1.com",
    image: "/project1.jpg"
  },
  {
    title: "Weather ETL Pipeline",
    description: "A robust weather monitoring system that collects data from Open-Meteo API based on temperature changes in Kuopio, Finland. The system is orchestrated using Apache Airflow and can be deployed both locally using Astro CLI or on Kubernetes.",
    technologies: ["Python", "Astro cli", "Docker", "Kubernetes cluster", "Airflow"],
    githubUrl: "https://github.com/unclealek/weather_ETL",
    liveUrl: "https://project1.com",
    image: "/project1.jpg"
  },
  {
    title: "AI Web Scrapper",
    description: "Using the free ollama3 model to extract only dom-content from a website, there is a chat prompt template deployed for this application.",
    technologies: ["streamlit", "Python", "langchain", "Selenium", "beautifulSoup"],
    githubUrl: "https://github.com/unclealek/AI_webScraper",
    liveUrl: "https://project1.com",
    image: "/project1.jpg"
  },
  {
    title: "IoT Dashboard",
    description: "A modern IoT device monitoring system built with Flet, featuring user authentication and device monitoring capabilities.",
    technologies: ["Python", "Flet", "bcrypt", "mqtt", "SQlAlchemy"],
    githubUrl: "https://github.com/unclealek/smart-IoT-/tree/main",
    liveUrl: "https://project1.com",
    image: "/project1.jpg"
  },
  {
    title: "Animal Classification",
    description: "This is a supervised trained machine model that allows user to upload an image of the animal and the trained model tells user what animal it is. the interface is built using some html, javascript and node to collect users input.",
    technologies: ["Python", "Jupyter Notebook", "Javascript", "HTML", "CSS"],
    githubUrl: "https://github.com/unclealek/Animal_Class",
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
