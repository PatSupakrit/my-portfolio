'use client';

import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

export default function About() {
  const softSkills = [
    'Team Collaboration',
    'Problem-Solving',
    'Responsibility',
    'Time Management',
    'Adaptability',
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          About Me
        </h2>
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="text-purple-400 group-hover:scale-110 transition-transform" size={24} />
                <h3 className="text-xl font-semibold text-white">Education</h3>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <img
                    src="https://www.nu.ac.th/wp-content/uploads/2023/07/NULOGO-Download.png"
                    alt="Naresuan University Logo"
                    className="w-24 h-24 object-contain rounded-lg p-2 hover:scale-105 transition-transform"
                  />
                </div>
                <div className="text-gray-300">
                  <p className="font-medium text-purple-300">Naresuan University</p>
                  <p>Bachelor of Science in Computer Science</p>
                  <p>GPAX: 2.83</p>
                  <p>Graduated: June 2025</p>
                </div>
              </div>
            </div>
            <div className="group">
              <div className="flex items-center gap-3 mb-4">
                <Award className="text-purple-400 group-hover:scale-110 transition-transform" size={24} />
                <h3 className="text-xl font-semibold text-white">Soft Skills</h3>
              </div>
              <ul className="text-gray-300 space-y-2">
                {softSkills.map((skill) => (
                  <li 
                    key={skill} 
                    className="flex items-center gap-3 hover:translate-x-2 transition-transform"
                  >
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
