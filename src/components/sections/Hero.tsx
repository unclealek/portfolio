"use client";

import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-900">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            Hi, I am <span className="text-blue-600 dark:text-blue-400">Aleksandra Kelvin Aliche</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
            Software Engineer & Tech Enthusiast
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            I build modern web applications with cutting-edge technologies.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/unclealek"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/kelvin-aliche"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <div className="relative w-64 h-64 mx-auto">
            <Image
              src="/me.png"
              alt="Profile"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="rounded-full object-cover shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
