'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Github, ArrowUpRight, Sparkles, Menu, X, Filter, ChevronRight } from 'lucide-react'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export default function PortfolioPage() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [imageIndices, setImageIndices] = useState<{ [key: number]: number }>({})

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Auto-scroll images on hover
  useEffect(() => {
    if (hoveredId === null) return

    const interval = setInterval(() => {
      setImageIndices(prev => ({
        ...prev,
        [hoveredId]: ((prev[hoveredId] || 0) + 1) % (projects.find(p => p.id === hoveredId)?.images.length || 1)
      }))
    }, 2000)

    return () => clearInterval(interval)
  }, [hoveredId])

  const projects = [
    {
      id: 1,
      title: 'FinTech Dashboard',
      category: 'Web Application',
      description: 'Real-time financial analytics platform with AI-powered insights and predictive modeling',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Chart.js', 'Redis'],
      images: [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&h=600&fit=crop'
      ],
      icon: '📊',
      color: 'from-blue-500 to-cyan-500',
      gradient: 'from-blue-500/20 to-cyan-500/20',
      featured: true,
      year: '2024',
      client: 'TechVision Inc.',
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'FitTrack Pro',
      category: 'Mobile App',
      description: 'AI-powered fitness tracking with personalized workout plans and nutrition guidance',
      tech: ['React Native', 'TensorFlow', 'Firebase', 'HealthKit'],
      images: [
        'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=600&fit=crop'
      ],
      icon: '💪',
      color: 'from-emerald-500 to-green-500',
      gradient: 'from-emerald-500/20 to-green-500/20',
      featured: false,
      year: '2024',
      client: 'FitLife Corp',
      link: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'ShopSphere',
      category: 'E-Commerce',
      description: 'Next-gen shopping experience with AR product visualization and virtual try-on',
      tech: ['Next.js', 'Stripe', 'Three.js', 'MongoDB', 'AWS'],
      images: [
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop'
      ],
      icon: '🛍️',
      color: 'from-purple-500 to-pink-500',
      gradient: 'from-purple-500/20 to-pink-500/20',
      featured: true,
      year: '2023',
      client: 'RetailMax',
      link: '#',
      github: '#'
    },
    {
      id: 4,
      title: 'EduConnect',
      category: 'EdTech Platform',
      description: 'Interactive learning platform connecting students globally with real-time collaboration',
      tech: ['Vue.js', 'WebRTC', 'AWS', 'Redis', 'Socket.io'],
      images: [
        'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop'
      ],
      icon: '📚',
      color: 'from-amber-500 to-orange-500',
      gradient: 'from-amber-500/20 to-orange-500/20',
      featured: false,
      year: '2023',
      client: 'EduTech Global',
      link: '#',
      github: '#'
    },
    {
      id: 5,
      title: 'CloudSync',
      category: 'SaaS Product',
      description: 'Enterprise-grade cloud storage with blockchain security and advanced encryption',
      tech: ['Angular', 'Go', 'Kubernetes', 'IPFS', 'Docker'],
      images: [
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1484807352052-23338990c6c6?w=800&h=600&fit=crop'
      ],
      icon: '☁️',
      color: 'from-indigo-500 to-violet-500',
      gradient: 'from-indigo-500/20 to-violet-500/20',
      featured: false,
      year: '2024',
      client: 'CloudScale Inc.',
      link: '#',
      github: '#'
    },
    {
      id: 6,
      title: 'HealthHub',
      category: 'Healthcare',
      description: 'Telemedicine platform with AI diagnostic assistance and patient management',
      tech: ['React', 'Python', 'TensorFlow', 'PostgreSQL', 'WebSocket'],
      images: [
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=800&h=600&fit=crop'
      ],
      icon: '🏥',
      color: 'from-rose-500 to-red-500',
      gradient: 'from-rose-500/20 to-red-500/20',
      featured: true,
      year: '2023',
      client: 'MedCare Solutions',
      link: '#',
      github: '#'
    },
    {
      id: 7,
      title: 'CryptoTracker',
      category: 'Web Application',
      description: 'Real-time cryptocurrency tracking with portfolio management and market analysis',
      tech: ['Next.js', 'GraphQL', 'Redis', 'TradingView'],
      images: [
        'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&h=600&fit=crop'
      ],
      icon: '₿',
      color: 'from-yellow-500 to-orange-500',
      gradient: 'from-yellow-500/20 to-orange-500/20',
      featured: false,
      year: '2024',
      client: 'CryptoVest',
      link: '#',
      github: '#'
    },
    {
      id: 8,
      title: 'TaskMaster',
      category: 'SaaS Product',
      description: 'Team collaboration and project management tool with AI-powered automation',
      tech: ['React', 'Node.js', 'MongoDB', 'OpenAI'],
      images: [
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop'
      ],
      icon: '✅',
      color: 'from-teal-500 to-cyan-500',
      gradient: 'from-teal-500/20 to-cyan-500/20',
      featured: false,
      year: '2024',
      client: 'ProductivityPro',
      link: '#',
      github: '#'
    },
    {
      id: 9,
      title: 'FoodieHub',
      category: 'Mobile App',
      description: 'Food delivery app with AI-powered recommendations and real-time tracking',
      tech: ['Flutter', 'Firebase', 'Google Maps', 'Stripe'],
      images: [
        'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop'
      ],
      icon: '🍔',
      color: 'from-red-500 to-pink-500',
      gradient: 'from-red-500/20 to-pink-500/20',
      featured: true,
      year: '2023',
      client: 'FoodDelivery Inc.',
      link: '#',
      github: '#'
    },
  ]

  const categories = ['All', 'Web Application', 'Mobile App', 'E-Commerce', 'SaaS Product', 'Healthcare', 'EdTech Platform']

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory)

  return (
    <div className="min-h-screen bg-dark">
      {/* Navbar */}
      <Navbar />


      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-mesh"></div>
        <div className="absolute inset-0 grid-pattern opacity-40"></div>
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl animate-float-slow"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link 
            href="/"
            className="inline-flex items-center space-x-2 glass px-6 py-3 rounded-full mb-12 hover:glass-primary transition-all group"
          >
            <ArrowLeft className="w-4 h-4 text-primary group-hover:-translate-x-1 transition-transform" />
            <span className="text-white/80 text-sm font-medium">Back to Home</span>
          </Link>

          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 glass px-6 py-3 rounded-full mb-8 animate-slide-up">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-semibold tracking-wide">OUR WORK</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 leading-tight animate-slide-up delay-100">
              Our <span className="text-gradient">Portfolio</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 mb-12 leading-relaxed animate-slide-up delay-200 font-light">
              Explore our latest projects and success stories. Each project represents our commitment to <span className="text-white font-semibold">excellence</span> and <span className="text-white font-semibold">innovation</span>.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto animate-slide-up delay-300">
              {[
                { value: '50+', label: 'Projects Completed' },
                { value: '30+', label: 'Happy Clients' },
                { value: '98%', label: 'Success Rate' },
              ].map((stat, index) => (
                <div key={index} className="text-center group cursor-pointer">
                  <div className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2 group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-white/50 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="relative py-20 bg-dark">
        <div className="absolute inset-0 dot-pattern opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="mb-16">
            <div className="flex items-center justify-center gap-2 mb-8">
              <Filter className="w-5 h-5 text-primary" />
              <h3 className="text-white font-display font-semibold text-lg">Filter by Category</h3>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-primary to-accent text-dark shadow-lg shadow-primary/30 scale-105'
                      : 'glass text-white/70 hover:text-white hover:glass-primary hover:scale-105'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group relative glass rounded-3xl overflow-hidden hover-lift transition-all duration-500 ${
                  project.featured ? 'lg:col-span-2' : ''
                }`}
                onMouseEnter={() => {
                  setHoveredId(project.id)
                  setImageIndices(prev => ({ ...prev, [project.id]: 0 }))
                }}
                onMouseLeave={() => setHoveredId(null)}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animation: 'slideUp 0.6s ease-out forwards'
                }}
              >
                {/* Image Container with Overlay */}
                <div className="relative h-64 overflow-hidden">
                  {/* Images */}
                  <div className="relative w-full h-full">
                    {project.images.map((image, imgIndex) => (
                      <div
                        key={imgIndex}
                        className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                          (imageIndices[project.id] || 0) === imgIndex 
                            ? 'opacity-100 scale-100' 
                            : 'opacity-0 scale-110'
                        }`}
                      >
                        <img
                          src={image}
                          alt={`${project.title} - ${imgIndex + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500`}></div>
                  
                  {/* Colored Gradient on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay`}></div>

                  {/* Icon Overlay */}
                  <div className="absolute top-4 left-4">
                    <div className="w-16 h-16 glass-primary rounded-2xl flex items-center justify-center text-4xl backdrop-blur-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl">
                      {project.icon}
                    </div>
                  </div>

                  {/* Year & Client */}
                  <div className="absolute top-4 right-4 text-right">
                    <div className="glass-primary backdrop-blur-xl rounded-xl px-3 py-1.5 mb-2">
                      <div className="text-primary text-sm font-bold">{project.year}</div>
                    </div>
                    <div className="glass backdrop-blur-xl rounded-xl px-3 py-1">
                      <div className="text-white/90 text-xs font-medium">{project.client}</div>
                    </div>
                  </div>

                  {/* Image Indicators */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {project.images.map((_, imgIndex) => (
                      <div
                        key={imgIndex}
                        className={`h-1 rounded-full transition-all duration-300 ${
                          (imageIndices[project.id] || 0) === imgIndex 
                            ? 'w-8 bg-primary' 
                            : 'w-2 bg-white/30'
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="relative p-8">
                  {/* Hover Glow Effect */}
                  {hoveredId === project.id && (
                    <div className="absolute -inset-0.5 rounded-3xl">
                      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${project.color} blur-xl opacity-30 animate-pulse`}></div>
                    </div>
                  )}

                  <div className="relative">
                    {/* Category Badge */}
                    <div className="mb-4">
                      <span className="inline-flex items-center gap-1 px-4 py-1.5 glass-primary rounded-full text-primary text-xs font-semibold">
                        {project.category}
                        <ChevronRight className="w-3 h-3" />
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3 group-hover:text-gradient transition-all duration-300">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/60 leading-relaxed mb-6 font-light line-clamp-3 group-hover:text-white/80 transition-colors">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 glass rounded-lg text-white/70 text-xs font-medium hover:text-white hover:glass-primary hover:scale-105 transition-all cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-3">
                      <a
                        href={project.link}
                        className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-primary to-accent text-dark font-bold rounded-xl hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all group/btn"
                      >
                        <span>View Project</span>
                        <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </a>
                      <a
                        href={project.github}
                        className="w-12 h-12 glass rounded-xl flex items-center justify-center text-white hover:text-primary hover:glass-primary hover:scale-110 transition-all"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="mt-16 text-center">
            <button className="group inline-flex items-center gap-3 px-10 py-4 glass rounded-2xl text-white font-semibold hover:glass-primary hover:scale-105 transition-all">
              <span>Load More Projects</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>

          {/* CTA Section */}
          <div className="mt-24">
            <div className="relative glass-primary rounded-3xl p-12 max-w-4xl mx-auto overflow-hidden group">
              {/* Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative">
                <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-primary text-sm font-semibold">LET'S COLLABORATE</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4 leading-tight">
                  Ready to Start Your <span className="text-gradient">Project?</span>
                </h3>
                <p className="text-white/60 text-lg mb-8 font-light max-w-2xl">
                  Let's collaborate and create something amazing together. Transform your ideas into reality with our expert team.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <Link
                    href="/#contact"
                    className="group/cta flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-primary to-accent text-dark font-bold text-lg rounded-2xl hover:shadow-2xl hover:shadow-primary/50 transform hover:scale-105 transition-all duration-300"
                  >
                    <span>Start Your Project</span>
                    <ArrowUpRight className="w-5 h-5 group-hover/cta:translate-x-1 group-hover/cta:-translate-y-1 transition-transform" />
                  </Link>
                  <Link
                    href="/#services"
                    className="px-10 py-4 glass text-white font-semibold text-lg rounded-2xl hover:glass-primary hover:scale-105 transition-all duration-300"
                  >
                    View Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}