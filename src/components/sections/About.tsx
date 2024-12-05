"use client";

import Image from 'next/image';
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiAmazonwebservices,
  SiDocker,
  SiKubernetes,
  SiApachekafka,
  SiApachespark,
  SiTensorflow,
  SiScikitlearn,
  SiPandas,
  SiFastapi,
  SiGooglecloud,
  SiJenkins,
  SiMysql,
  SiPowerbi,
  SiSnowflake
} from 'react-icons/si';

interface Skill {
  name: string;
  icon: React.ReactNode;
  category: 'frontend' | 'backend' | 'data' | 'devops';
}

export default function About() {
  const skills: Skill[] = [
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" size={40} />, category: 'frontend' },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" size={40} />, category: 'frontend' },
    { name: 'React', icon: <SiReact className="text-blue-400" size={40} />, category: 'frontend' },
    { name: 'Next.js', icon: <SiNextdotjs className="dark:text-white text-black" size={40} />, category: 'frontend' },
    { name: 'Python', icon: <SiPython className="text-yellow-300" size={40} />, category: 'backend' },
    { name: 'Node.js', icon: <SiNodedotjs className="text-green-500" size={40} />, category: 'backend' },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-500" size={40} />, category: 'backend' },
    { name: 'MySQL', icon: <SiMysql className="text-blue-500" size={40} />, category: 'backend' },
    { name: 'API', icon: <SiFastapi className="text-blue-400" size={40} />, category: 'backend' },
    { name: 'AWS', icon: <SiAmazonwebservices className="text-yellow-500" size={40} />, category: 'devops' },
    { name: 'Docker', icon: <SiDocker className="text-blue-400" size={40} />, category: 'devops' },
    { name: 'Kubernetes', icon: <SiKubernetes className="text-blue-500" size={40} />, category: 'devops' },
    { name: 'GCP', icon: <SiGooglecloud className="text-green-400" size={40} />, category: 'devops' },
    { name: 'Jenkins', icon: <SiJenkins className="text-red-400" size={40} />, category: 'devops' },
    { name: 'Kafka', icon: <SiApachekafka className="text-red-500" size={40} />, category: 'data' },
    { name: 'Spark', icon: <SiApachespark className="text-orange-500" size={40} />, category: 'data' },
    { name: 'TensorFlow', icon: <SiTensorflow className="text-orange-500" size={40} />, category: 'data' },
    { name: 'Scikit-learn', icon: <SiScikitlearn className="text-orange-500" size={40} />, category: 'data' },
    { name: 'Pandas', icon: <SiPandas className="text-blue-600" size={40} />, category: 'data' },
    { name: 'Snowflake', icon: <SiSnowflake className="text-blue-300" size={40} />, category: 'data' },
    { name: 'PowerBi', icon: <SiPowerbi className="text-yellow-600" size={40} />, category: 'data' },

  ];

  const categories = {
    frontend: 'Frontend Development',
    backend: 'Backend Development',
    data: 'Data Engineering',
    devops: 'DevOps & Cloud',
  };

  return (
    <section id="about" className="w-full py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6 flex flex-col items-center lg:items-start">
            <div className="relative w-64 h-64 group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
              <div className="relative w-full h-full overflow-hidden rounded-2xl border-4 border-white dark:border-gray-700 shadow-xl">
                <Image
                  src="/me.png"
                  alt="Profile picture"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  className="transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-4 text-center lg:text-left">
              <p className="text-gray-600 dark:text-gray-300">
                I am a passionate Software Engineer and Data Engineer with expertise in building scalable applications
                and data pipelines. My journey in tech started with a curiosity about how things work, which evolved into
                a career building robust and efficient solutions.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                With experience in both software development and data engineering, I enjoy creating
                high-performance applications while ensuring data-driven insights drive business value.
              </p>
              <div className="mt-8">
                <a
                  href="/path-to-your-cv.pdf"
                  className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-xl hover:opacity-90 transition-opacity shadow-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Skills & Technologies</h3>
            {Object.entries(categories).map(([category, title]) => (
              <div key={category} className="space-y-4">
                <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300">{title}</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill) => (
                      <div
                        key={skill.name}
                        className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                      >
                        {skill.icon}
                        <span className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
