'use client'

import { MessageSquare, Lightbulb, Code2, Rocket, Sparkles, ArrowRight } from 'lucide-react'

const steps = [
  {
    icon: MessageSquare,
    number: '01',
    title: 'Discovery & Strategy',
    description: 'We dive deep into your vision, goals, and challenges. Understanding your business inside-out to create a winning strategy.',
    color: 'text-blue-400',
    gradient: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    icon: Lightbulb,
    number: '02',
    title: 'Design & Planning',
    description: 'Our team crafts a comprehensive roadmap with clear milestones, deliverables, and stunning design concepts.',
    color: 'text-purple-400',
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
  {
    icon: Code2,
    number: '03',
    title: 'Development & Testing',
    description: 'We bring your vision to life with cutting-edge technology, rigorous testing, and best practices.',
    color: 'text-emerald-400',
    gradient: 'from-emerald-500/20 to-green-500/20',
  },
  {
    icon: Rocket,
    number: '04',
    title: 'Launch & Growth',
    description: 'Smooth deployment, continuous monitoring, and ongoing support to ensure your continued success and growth.',
    color: 'text-amber-400',
    gradient: 'from-amber-500/20 to-orange-500/20',
  },
]

export default function Process() {
  return (
    <section id="process" className="relative py-32 bg-dark overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float-slow"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center space-x-2 glass px-6 py-3 rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-semibold tracking-wide">OUR PROCESS</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
            From Concept to
            <br />
            <span className="text-gradient">Launch</span>
          </h2>
          
          <p className="text-xl text-white/60 max-w-2xl mx-auto font-light">
            A proven methodology that delivers exceptional results, every single time
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20 transform -translate-x-1/2"></div>

          {/* Steps */}
          <div className="space-y-24">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isEven = index % 2 === 0

              return (
                <div
                  key={index}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content Card */}
                  <div className={`flex-1 w-full ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className={`inline-block glass rounded-3xl p-10 hover-lift hover:glass-primary transition-all duration-500 group cursor-pointer max-w-lg ${
                      isEven ? '' : 'lg:ml-auto'
                    }`}>
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>
                      
                      <div className="relative">
                        {/* Step Number */}
                        <div className={`inline-flex items-center space-x-3 mb-6 ${isEven ? 'lg:flex-row-reverse lg:space-x-reverse' : ''}`}>
                          <div className="text-6xl font-display font-bold text-gradient opacity-20">
                            {step.number}
                          </div>
                          <div className="w-12 h-12 glass-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Icon className={`w-6 h-6 ${step.color}`} />
                          </div>
                        </div>

                        {/* Title & Description */}
                        <h3 className="text-3xl font-display font-bold text-white mb-4 group-hover:text-gradient transition-all duration-300">
                          {step.title}
                        </h3>
                        <p className="text-white/60 text-lg leading-relaxed font-light">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Center Circle */}
                  <div className="hidden lg:flex flex-shrink-0 w-20 h-20 glass-primary rounded-full items-center justify-center border-4 border-dark z-10">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full animate-pulse-glow"></div>
                  </div>

                  {/* Empty Space for Timeline Layout */}
                  <div className="flex-1 hidden lg:block"></div>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <a
            href="#contact"
            className="inline-flex items-center space-x-4 px-10 py-5 bg-gradient-to-r from-primary to-accent text-dark font-bold text-lg rounded-2xl hover:shadow-2xl hover:shadow-primary/50 transform hover:scale-105 transition-all duration-300 group"
          >
            <span>Start Your Journey Today</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}