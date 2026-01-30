'use client'

import { Code, Smartphone, Palette, TrendingUp, Cog, Briefcase, Sparkles, ArrowUpRight } from 'lucide-react'

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Lightning-fast websites built with cutting-edge technologies. From concept to deployment.',
    gradient: 'from-blue-500/20 to-cyan-500/20',
    iconColor: 'text-cyan-400',
    featured: true,
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Native & cross-platform apps that users love. Seamless experiences on every device.',
    gradient: 'from-purple-500/20 to-pink-500/20',
    iconColor: 'text-pink-400',
    featured: false,
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful interfaces that captivate and convert. Data-driven design decisions.',
    gradient: 'from-orange-500/20 to-amber-500/20',
    iconColor: 'text-amber-400',
    featured: true,
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    description: 'Growth strategies that deliver ROI. From SEO to social media mastery.',
    gradient: 'from-green-500/20 to-emerald-500/20',
    iconColor: 'text-emerald-400',
    featured: false,
  },
  {
    icon: Cog,
    title: 'Automation',
    description: 'Streamline operations with intelligent automation. Save time, reduce errors.',
    gradient: 'from-red-500/20 to-rose-500/20',
    iconColor: 'text-rose-400',
    featured: false,
  },
  {
    icon: Briefcase,
    title: 'Brand Strategy',
    description: 'Build brands that resonate. Complete identity and positioning services.',
    gradient: 'from-indigo-500/20 to-violet-500/20',
    iconColor: 'text-violet-400',
    featured: true,
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-32 bg-dark overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 glass px-6 py-3 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-semibold tracking-wide">SERVICES</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
            Everything You Need
            <br />
            <span className="text-gradient">Under One Roof</span>
          </h2>
          
          <p className="text-xl text-white/60 max-w-2xl mx-auto font-light">
            Comprehensive digital solutions tailored to accelerate your business growth
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className={`group relative glass rounded-3xl p-8 hover-lift hover:glass-primary transition-all duration-500 cursor-pointer overflow-hidden
                  ${service.featured ? 'md:col-span-1 lg:row-span-2' : ''}
                `}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className="mb-6">
                    <div className="relative inline-block">
                      <div className="w-16 h-16 glass-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className={`w-8 h-8 ${service.iconColor} group-hover:rotate-12 transition-transform duration-300`} />
                      </div>
                      {/* Glow effect */}
                      <div className={`absolute inset-0 blur-xl ${service.iconColor} opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-gradient transition-all duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/60 leading-relaxed mb-6 font-light">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="flex items-center space-x-2 text-primary opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span className="text-sm font-semibold">Learn More</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50 blur-sm"></div>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <p className="text-white/60">Can't find what you're looking for?</p>
            <a
              href="#contact"
              className="group inline-flex items-center space-x-2 text-primary hover:text-accent transition-colors"
            >
              <span className="font-semibold">Let's discuss your project</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}