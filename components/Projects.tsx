'use client';

import React, { useState } from 'react';
import { X } from 'lucide-react';

interface Project {
  title: string;
  subtitle: string;
  period: string;
  description: string[];
  tags: string[];
  logo: string;
  images: string[]; // เพิ่มรูปภาพผลงาน
}

interface Training {
  title: string;
  points: string[];
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects: Project[] = [
    {
      title: 'RoV Item Recommender System',
      subtitle: 'Undergraduate Thesis',
      period: 'March 2025 - June 2025',
      description: [
        'Built AI-powered recommendation system using Genetic Algorithm',
        'Developed full-stack web app with Flask backend and MySQL database',
        'Created personalized item suggestions based on in-game statistics',
      ],
      tags: ['Python', 'Flask', 'MySQL', 'AI', 'Genetic Algorithm'],
      logo: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Arena_of_Valor_logo.png',
      images: [
        '/rov-1.jpg',
        '/rov-2.jpg',
        '/rov-3.jpg',
        '/rov-4.jpg',
      ], // ใส่รูปภาพผลงานที่นี่
    },
    {
      title: 'Rice Mill Management System',
      subtitle: 'Internet Programming Course',
      period: 'December 2023 - April 2024',
      description: [
        'Designed and developed full management system for rice mill operations',
        'Implemented inventory tracking, process monitoring, and reporting modules',
      ],
      tags: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      logo: 'https://cdn-icons-png.flaticon.com/512/2329/2329116.png',
      images: [
        '/rice-1.png',
        '/rice-2.png',
        '/rice-3.png',
        '/rice-4.png',
        '/rice-5.png',
        '/rice-6.png',
      ],
    },
  ];

  const training: Training[] = [
    {
      title: 'Deep Learning for Image Recognition and Detection',
      points: [
        'Gained theoretical knowledge and practical experience in deep learning',
        'Learned CNN architecture and TensorFlow implementation',
        'Applied image recognition techniques to real-world problems',
      ],
    },
    {
      title: 'Cloud Native Application',
      points: [
        'Gained theoretical knowledge in cloud-native application design',
        'Hands-on experience with Azure and Google Cloud infrastructure',
        'Developed skills in GitHub for version control and collaboration',
      ],
    },
  ];

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => openModal(project)}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all hover:transform hover:scale-105 cursor-pointer"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="flex-shrink-0">
                  <img
                    src={project.logo}
                    alt={`${project.title} logo`}
                    className="w-36 h-36 object-contain bg-white rounded-lg p-2"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-purple-300 mb-2">
                    {project.subtitle}
                  </p>
                  <p className="text-xs text-gray-400 mb-3">{project.period}</p>
                </div>
              </div>
              <ul className="space-y-2 mb-4">
                {project.description.map((desc, i) => (
                  <li key={i} className="text-gray-300 text-sm flex gap-2">
                    <span className="text-purple-400">•</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-sm text-purple-400 hover:text-purple-300">
                Click to view images →
              </p>
            </div>
          ))}
        </div>

        {/* Modal for Image Gallery */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-5xl w-full">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 p-2 bg-purple-600 hover:bg-purple-700 rounded-full transition-colors"
              >
                <X size={24} className="text-white" />
              </button>

              {/* Image */}
              <div className="bg-slate-800 rounded-2xl overflow-hidden">
                <img
                  src={selectedProject.images[currentImageIndex]}
                  alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
                
                {/* Navigation Arrows */}
                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-purple-600/80 hover:bg-purple-700 rounded-full transition-colors"
                    >
                      <span className="text-white text-2xl">‹</span>
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-purple-600/80 hover:bg-purple-700 rounded-full transition-colors"
                    >
                      <span className="text-white text-2xl">›</span>
                    </button>
                  </>
                )}

                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 px-4 py-2 rounded-full">
                  <p className="text-white text-sm">
                    {currentImageIndex + 1} / {selectedProject.images.length}
                  </p>
                </div>
              </div>

              {/* Project Info */}
              <div className="mt-4 bg-slate-800/90 rounded-xl p-4">
                <h3 className="text-xl font-bold text-white mb-2">
                  {selectedProject.title}
                </h3>
                <p className="text-purple-300 text-sm mb-2">
                  {selectedProject.subtitle} • {selectedProject.period}
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Training Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Training
          </h3>
          <div className="space-y-4">
            {training.map((course, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20"
              >
                <h4 className="text-lg font-semibold text-purple-300 mb-3">
                  {course.title}
                </h4>
                <ul className="space-y-2">
                  {course.points.map((point, i) => (
                    <li key={i} className="text-gray-300 text-sm flex gap-2">
                      <span className="text-purple-400">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}