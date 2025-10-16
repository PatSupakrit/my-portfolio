'use client';

import React from 'react';
import { Mail, Phone, Github, MapPin, Linkedin } from 'lucide-react';

export default function Contact() {
  const contactItems = [
    {
      icon: Mail,
      label: 'Email',
      value: 'supakrit.amonsak@gmail.com',
      href: 'mailto:supakrit.amonsak@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '096-357-6479',
      href: 'tel:0963576479',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'PatSupakrit',
      href: 'https://github.com/PatSupakrit',
      external: true,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Supakrit Amonsaksawat',
      href: 'https://www.linkedin.com/in/supakrit-amonsaksawat-706a2237a/',
      external: true,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Phichit, Thailand',
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Get In Touch
        </h2>
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
          <div className="grid md:grid-cols-2 gap-6">
            {contactItems.map((item) => {
              const Icon = item.icon;
              const Component = item.href ? 'a' : 'div';
              const props = item.href
                ? {
                    href: item.href,
                    ...(item.external && {
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    }),
                  }
                : {};

              return (
                <Component
                  key={item.label}
                  {...props}
                  className={`flex items-center gap-4 p-4 bg-slate-700/50 rounded-lg ${
                    item.href ? 'hover:bg-slate-700 transition-colors' : ''
                  }`}
                >
                  <div className="p-3 bg-purple-500/20 rounded-lg">
                    <Icon className="text-purple-400" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{item.label}</p>
                    <p className="text-white">{item.value}</p>
                  </div>
                </Component>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
