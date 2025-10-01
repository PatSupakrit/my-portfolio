"use client";

import React from "react";
import { Github, ChevronDown, Linkedin, FileText } from "lucide-react";

interface HeroProps {
  scrollToSection: (section: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  // เปลี่ยน profileImageUrl เป็น URL รูปของคุณ
  // หรือใส่เป็น /images/profile.jpg ถ้าเก็บไว้ใน public folder
  const profileImageUrl = "/profile.png"; // หรือ URL รูปจาก internet
  const useProfileImage = true; // เปลี่ยนเป็น true เมื่อมีรูป, false จะแสดง SA

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 pt-16"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          {useProfileImage ? (
            // แสดงรูปโปรไฟล์
            <div className="w-44 h-44 mx-auto rounded-full overflow-hidden shadow-2xl ring-4 ring-purple-500/50">
              <img
                src={profileImageUrl}
                alt="Supakrit Amonsaksawat"
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            // แสดง SA (สำรองถ้าไม่มีรูป)
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-4xl font-bold text-white shadow-2xl">
              SA
            </div>
          )}
        </div>
        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4">
          Supakrit Amonsaksawat
        </h1>
        <p className="text-xl sm:text-2xl text-purple-300 mb-6">
          Full-Stack Developer | Data Engineer & AI
        </p>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
          Recent Computer Science graduate from Naresuan University with
          moderate skills in full-stack development (React.js, Node.js, Python)
          and hands-on experience in AI, Modern Framework, and web application
          projects. Passionate about building scalable solutions, writing clean
          code, and continuously improving through collaboration and learning.
        </p>
        <div className="flex justify-center gap-4 mb-8">
          <a
            href="https://github.com/PatSupakrit"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
          >
            <Github size={20} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/supakrit-amonsaksawat-706a2237a/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
          <a
            href="/Supakrit_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
          >
            <FileText size={20} />
            Resume
          </a>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-6 py-3 border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white rounded-lg transition-colors"
          >
            Contact Me
          </button>
        </div>
        <button
          onClick={() => scrollToSection("about")}
          className="animate-bounce text-purple-400"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
}
