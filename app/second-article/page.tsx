'use client'

import React from 'react'
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Palette,
  Smartphone,
} from 'lucide-react'

export default function PortfolioPage() {
  const [activeProject, setActiveProject] = React.useState(0)

  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Full-stack web application built with React and Node.js',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'bg-gradient-to-br from-blue-400 to-purple-600',
    },
    {
      title: 'Mobile Banking App',
      description: 'Secure mobile application for financial transactions',
      tech: ['React Native', 'Firebase', 'TypeScript'],
      image: 'bg-gradient-to-br from-green-400 to-blue-600',
    },
    {
      title: 'AI Dashboard',
      description: 'Analytics dashboard with machine learning insights',
      tech: ['Next.js', 'Python', 'TensorFlow', 'PostgreSQL'],
      image: 'bg-gradient-to-br from-purple-400 to-pink-600',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Alex Rivera
          </div>
          <div className="hidden md:flex space-x-8">
            <a
              href="#about"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Full-Stack Developer &
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                UI Designer
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              I create beautiful, functional web applications that solve
              real-world problems. Passionate about clean code and exceptional
              user experiences.
            </p>
            <div className="flex space-x-4">
              <button className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Get In Touch
              </button>
              <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                View Resume
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full mx-auto relative overflow-hidden">
              <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center text-6xl font-bold text-gray-400">
                AR
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What I Do
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="w-8 h-8" />,
                title: 'Frontend Development',
                description:
                  'React, Next.js, TypeScript, and modern CSS frameworks',
              },
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: 'Mobile Development',
                description: 'React Native and Flutter for cross-platform apps',
              },
              {
                icon: <Palette className="w-8 h-8" />,
                title: 'UI/UX Design',
                description:
                  'User-centered design with Figma and Adobe Creative Suite',
              },
            ].map((skill, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-blue-600 mb-4 flex justify-center">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {skill.title}
                </h3>
                <p className="text-gray-600">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setActiveProject(index)}
              >
                <div
                  className={`h-48 ${project.image} flex items-center justify-center`}
                >
                  <ExternalLink className="w-8 h-8 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Let&apos;s Work Together
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Have a project in mind? I&apos;d love to hear about it.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="bg-white text-gray-900 p-4 rounded-full hover:bg-gray-100 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="bg-white text-gray-900 p-4 rounded-full hover:bg-gray-100 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="bg-white text-gray-900 p-4 rounded-full hover:bg-gray-100 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
