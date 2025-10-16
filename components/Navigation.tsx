'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  scrollToSection: (section: string) => void;
}

export default function Navigation({
  activeSection,
  mobileMenuOpen,
  setMobileMenuOpen,
  scrollToSection,
}: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const menuItems = ['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full backdrop-blur-md z-50 border-b transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-900/95 border-purple-500/30 shadow-lg shadow-purple-500/10' 
        : 'bg-slate-900/80 border-purple-500/20'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16">
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-sm font-medium transition-all duration-300 hover:text-purple-400 hover:scale-110 ${
                  activeSection === item.toLowerCase()
                    ? 'text-purple-400'
                    : 'text-gray-300'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <button
            className="md:hidden text-gray-300 absolute right-4 hover:text-purple-400 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-purple-400 hover:bg-slate-800 rounded-md transition-all"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}