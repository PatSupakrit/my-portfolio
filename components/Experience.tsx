'use client';

import React from 'react';

interface ExperienceItem {
  title: string;
  company?: string;
  role: string;
  period: string;
  description: string[];
  tags: string[];
  logo: string;
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      title: 'POS System Development',
      role: 'Part-time Developer',
      period: 'July 2025 - September 2025',
      description: [
        'Built POS system with Next.js + React.js frontend and Node.js API + MongoDB backend',
        'Implemented product management, sales tracking, and reporting modules',
      ],
      tags: ['Next.js', 'React.js', 'Node.js', 'MongoDB'],
      logo: 'https://cdn-icons-png.flaticon.com/512/2920/2920277.png',
    },
    {
      title: 'Data Engineer',
      company: 'Tokio Marine Life Insurance (Thailand) PCL',
      role: 'Internship',
      period: 'Nov 2024 – Feb 2025',
      description: [
        'Created Retrieval-Augmented Generation (RAG) chatbot using Python & LangChain',
        'Utilized Ollama LLM, LangChain, and Python with Vector Database, Cosine Similarity',
        'Designed business intelligence dashboards with Power BI and managed SQL Server databases',
      ],
      tags: ['Python', 'LangChain', 'Power BI', 'SQL Server', 'Vector DB'],
      logo: 'https://www.tokiomarine.com/content/dam/id/Life/About%20Us/media-news/Tokio-Marine-logo.jpg',
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-slate-900/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Experience
        </h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <img
                    src={exp.logo}
                    alt={`${exp.title} logo`}
                    className="w-36 h-36 object-contain bg-white rounded-lg p-2 hover:scale-105 transition-transform"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-1 hover:text-purple-300 transition-colors">
                    {exp.title}
                  </h3>
                  {exp.company && (
                    <p className="text-purple-300 mb-1">{exp.company}</p>
                  )}
                  <p className="text-sm text-gray-400 mb-3">
                    {exp.role} | {exp.period}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="text-gray-300 flex gap-2 hover:text-white transition-colors">
                        <span className="text-purple-400">•</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm hover:bg-purple-500/30 hover:scale-105 transition-all cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}