'use client'

import { ArrowRight, Sparkles, Zap, Globe, Cpu } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20,
        y: (e.clientY / window.innerHeight) * 20
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-mesh"></div>
      <div className="absolute inset-0 grid-pattern opacity-40"></div>
      
      {/* Floating Gradient Orbs */}
      <div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
        }}
      ></div>
      <div 
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl animate-float-slow"
        style={{
          transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`
        }}
      ></div>

      {/* Floating Icons */}
      <div className="absolute top-20 left-20 opacity-20">
        <Zap className="w-12 h-12 text-primary animate-float" />
      </div>
      <div className="absolute top-40 right-32 opacity-20">
        <Globe className="w-16 h-16 text-accent animate-float-slow" />
      </div>
      <div className="absolute bottom-32 left-40 opacity-20">
        <Cpu className="w-14 h-14 text-primary animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 z-10">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-3 glass-primary px-6 py-3 rounded-full mb-10 animate-slide-up">
            <div className="relative">
              <Sparkles className="w-5 h-5 text-primary animate-pulse-glow" />
              <div className="absolute inset-0 blur-md bg-primary/50"></div>
            </div>
            <span className="text-primary text-sm font-semibold tracking-wide">INNOVATE • CREATE • DEPLOY</span>
          </div>

          {/* Main Heading with Stagger Animation */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-display font-bold text-white mb-8 leading-[1.1] tracking-tight">
            <span className="block animate-slide-up delay-100">Transform Ideas</span>
            <span className="block animate-slide-up delay-200">Into Stunning</span>
            <span className="block text-gradient animate-slide-up delay-300 glow-primary">Digital Reality</span>
          </h1>

          {/* Description */}
          <p className="text-xl sm:text-2xl text-white/60 max-w-3xl mx-auto mb-12 leading-relaxed animate-slide-up delay-400 font-light">
            We craft <span className="text-white font-medium">bespoke digital experiences</span> that empower businesses to thrive in the modern world.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-slide-up delay-500 mb-20">
            <a
              href="#contact"
              className="group relative px-10 py-5 bg-gradient-to-r from-primary to-accent text-dark font-bold text-lg rounded-2xl hover:shadow-2xl hover:shadow-primary/50 transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center space-x-3">
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a
              href="#services"
              className="group px-10 py-5 glass text-white font-semibold text-lg rounded-2xl hover:bg-white/10 transition-all duration-300 border border-white/20 hover:border-primary/50"
            >
              <span className="flex items-center space-x-2">
                <span>Explore Services</span>
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </span>
            </a>
          </div>

          {/* Modern Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto animate-fade-in delay-600">
            {[
              { value: '250+', label: 'Projects Delivered', icon: '🚀' },
              { value: '98%', label: 'Client Satisfaction', icon: '⭐' },
              { value: '50+', label: 'Expert Team', icon: '👥' },
              { value: '24/7', label: 'Support', icon: '💬' },
            ].map((stat, index) => (
              <div
                key={index}
                className="glass rounded-3xl p-6 hover-lift hover:glass-primary transition-all duration-300 group cursor-pointer"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{stat.icon}</div>
                <div className="text-4xl font-display font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-white/50 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent"></div>
    </section>
  )
}