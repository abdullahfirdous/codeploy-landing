'use client'

import { ExternalLink, Github, ArrowUpRight, Sparkles } from 'lucide-react'
import { useState } from 'react'

const projects = [
  {
    id: 1,
    title: 'FinTech Dashboard',
    category: 'Web Application',
    description: 'Real-time financial analytics platform with AI-powered insights',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Chart.js'],
    image: '📊',
    color: 'from-blue-500 to-cyan-500',
    gradient: 'from-blue-500/20 to-cyan-500/20',
    featured: true,
  },
  {
    id: 2,
    title: 'FitTrack Pro',
    category: 'Mobile App',
    description: 'AI-powered fitness tracking with personalized workout plans',
    tech: ['React Native', 'TensorFlow', 'Firebase'],
    image: '💪',
    color: 'from-emerald-500 to-green-500',
    gradient: 'from-emerald-500/20 to-green-500/20',
    featured: false,
  },
  {
    id: 3,
    title: 'ShopSphere',
    category: 'E-Commerce',
    description: 'Next-gen shopping experience with AR product visualization',
    tech: ['Next.js', 'Stripe', 'Three.js', 'MongoDB'],
    image: '🛍️',
    color: 'from-purple-500 to-pink-500',
    gradient: 'from-purple-500/20 to-pink-500/20',
    featured: true,
  },
  {
    id: 4,
    title: 'EduConnect',
    category: 'EdTech Platform',
    description: 'Interactive learning platform connecting students globally',
    tech: ['Vue.js', 'WebRTC', 'AWS', 'Redis'],
    image: '📚',
    color: 'from-amber-500 to-orange-500',
    gradient: 'from-amber-500/20 to-orange-500/20',
    featured: false,
  },
  {
    id: 5,
    title: 'CloudSync',
    category: 'SaaS Product',
    description: 'Enterprise-grade cloud storage with blockchain security',
    tech: ['Angular', 'Go', 'Kubernetes', 'IPFS'],
    image: '☁️',
    color: 'from-indigo-500 to-violet-500',
    gradient: 'from-indigo-500/20 to-violet-500/20',
    featured: false,
  },
  {
    id: 6,
    title: 'HealthHub',
    category: 'Healthcare',
    description: 'Telemedicine platform with AI diagnostic assistance',
    tech: ['React', 'Python', 'TensorFlow', 'PostgreSQL'],
    image: '🏥',
    color: 'from-rose-500 to-red-500',
    gradient: 'from-rose-500/20 to-red-500/20',
    featured: true,
  },
]

const categories = ['All', 'Web Application', 'Mobile App', 'E-Commerce', 'SaaS Product']

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory)

  return (
    <section className="relative py-32 bg-dark overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      <div className="absolute top-1/3 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 glass px-6 py-3 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-semibold tracking-wide">PORTFOLIO</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
            Our <span className="text-gradient">Success</span> Stories
          </h2>

          <p className="text-xl text-white/60 max-w-2xl mx-auto font-light">
            Explore some of our recent projects that helped businesses achieve extraordinary results
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-primary to-accent text-dark shadow-lg shadow-primary/30'
                  : 'glass text-white/70 hover:text-white hover:glass-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative glass rounded-3xl overflow-hidden hover-lift hover:glass-primary transition-all duration-500 cursor-pointer ${
                project.featured ? 'lg:col-span-2 lg:row-span-1' : ''
              }`}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              <div className="relative p-8 h-full flex flex-col">
                {/* Project Icon */}
                <div className="mb-6 relative">
                  <div className="w-20 h-20 glass-primary rounded-3xl flex items-center justify-center text-5xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    {project.image}
                  </div>
                  <div className={`absolute inset-0 blur-2xl bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                </div>

                {/* Category Badge */}
                <div className="mb-4">
                  <span className="inline-block px-4 py-1.5 glass-primary rounded-full text-primary text-xs font-semibold">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-gradient transition-all duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-white/60 leading-relaxed mb-6 font-light flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 glass rounded-lg text-white/70 text-xs font-medium hover:text-white hover:glass-primary transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-2 px-5 py-2.5 glass-primary rounded-xl text-white font-medium hover:scale-105 transition-transform group/btn">
                    <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    <span>View Project</span>
                  </button>
                  <button className="w-10 h-10 glass rounded-xl flex items-center justify-center text-white hover:text-primary hover:scale-110 transition-all">
                    <Github className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Hover Effect - Animated Border */}
              {hoveredId === project.id && (
                <div className="absolute inset-0 rounded-3xl">
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${project.color} blur-sm opacity-50 animate-pulse`}></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="mt-20 text-center">
          <a
            href="#"
            className="inline-flex items-center space-x-3 glass px-8 py-4 rounded-2xl hover:glass-primary transition-all duration-300 group"
          >
            <span className="text-white font-semibold text-lg">View All Projects</span>
            <ArrowUpRight className="w-5 h-5 text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}