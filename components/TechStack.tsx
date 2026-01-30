'use client'

import { Sparkles } from 'lucide-react'

const techStack = {
  frontend: [
    { name: 'React', icon: '⚛️', color: 'text-cyan-400' },
    { name: 'Next.js', icon: '▲', color: 'text-white' },
    { name: 'Vue.js', icon: '🟩', color: 'text-emerald-400' },
    { name: 'Angular', icon: '🅰️', color: 'text-red-400' },
    { name: 'TypeScript', icon: 'TS', color: 'text-blue-400' },
    { name: 'Tailwind', icon: '🎨', color: 'text-cyan-400' },
  ],
  backend: [
    { name: 'Node.js', icon: '📗', color: 'text-green-400' },
    { name: 'Python', icon: '🐍', color: 'text-yellow-400' },
    { name: 'Go', icon: '🔵', color: 'text-cyan-400' },
    { name: 'Java', icon: '☕', color: 'text-orange-400' },
    { name: 'PostgreSQL', icon: '🐘', color: 'text-blue-400' },
    { name: 'MongoDB', icon: '🍃', color: 'text-green-400' },
  ],
  mobile: [
    { name: 'React Native', icon: '📱', color: 'text-cyan-400' },
    { name: 'Flutter', icon: '🎯', color: 'text-blue-400' },
    { name: 'Swift', icon: '🍎', color: 'text-orange-400' },
    { name: 'Kotlin', icon: '🤖', color: 'text-purple-400' },
  ],
  cloud: [
    { name: 'AWS', icon: '☁️', color: 'text-orange-400' },
    { name: 'Azure', icon: '⊞', color: 'text-blue-400' },
    { name: 'GCP', icon: '🌐', color: 'text-red-400' },
    { name: 'Docker', icon: '🐳', color: 'text-blue-400' },
    { name: 'Kubernetes', icon: '☸️', color: 'text-blue-400' },
  ],
  ai: [
    { name: 'TensorFlow', icon: '🧠', color: 'text-orange-400' },
    { name: 'PyTorch', icon: '🔥', color: 'text-red-400' },
    { name: 'OpenAI', icon: '🤖', color: 'text-emerald-400' },
    { name: 'Langchain', icon: '⛓️', color: 'text-purple-400' },
  ],
}

export default function TechStack() {
  return (
    <section className="relative py-32 bg-dark overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-20"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl animate-float"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 glass px-6 py-3 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-semibold tracking-wide">TECH STACK</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
            Powered by <span className="text-gradient">Cutting-Edge</span>
            <br />Technology
          </h2>

          <p className="text-xl text-white/60 max-w-2xl mx-auto font-light">
            We leverage the latest and most powerful technologies to build exceptional digital products
          </p>
        </div>

        {/* Tech Categories */}
        <div className="space-y-16">
          {/* Frontend */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-display font-bold text-white mb-8 flex items-center justify-center space-x-3">
              <span className="text-gradient">Frontend Development</span>
              <div className="h-px flex-grow bg-gradient-to-r from-primary/50 to-transparent max-w-xs"></div>
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
              {techStack.frontend.map((tech, index) => (
                <div
                  key={index}
                  className="group glass rounded-3xl p-6 hover-lift hover:glass-primary transition-all duration-500 cursor-pointer text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-5xl mb-4 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                    {tech.icon}
                  </div>
                  <div className={`text-sm font-semibold ${tech.color} group-hover:text-white transition-colors`}>
                    {tech.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="animate-slide-up delay-100">
            <h3 className="text-2xl font-display font-bold text-white mb-8 flex items-center justify-center space-x-3">
              <span className="text-gradient">Backend & Database</span>
              <div className="h-px flex-grow bg-gradient-to-r from-primary/50 to-transparent max-w-xs"></div>
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
              {techStack.backend.map((tech, index) => (
                <div
                  key={index}
                  className="group glass rounded-3xl p-6 hover-lift hover:glass-primary transition-all duration-500 cursor-pointer text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-5xl mb-4 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                    {tech.icon}
                  </div>
                  <div className={`text-sm font-semibold ${tech.color} group-hover:text-white transition-colors`}>
                    {tech.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile & Cloud & AI in 3 columns */}
          <div className="grid lg:grid-cols-3 gap-12 animate-slide-up delay-200">
            {/* Mobile */}
            <div>
              <h3 className="text-xl font-display font-bold text-gradient mb-6 text-center">
                Mobile Development
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {techStack.mobile.map((tech, index) => (
                  <div
                    key={index}
                    className="group glass rounded-3xl p-6 hover-lift hover:glass-primary transition-all duration-500 cursor-pointer text-center"
                  >
                    <div className="text-4xl mb-3 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                      {tech.icon}
                    </div>
                    <div className={`text-xs font-semibold ${tech.color} group-hover:text-white transition-colors`}>
                      {tech.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cloud */}
            <div>
              <h3 className="text-xl font-display font-bold text-gradient mb-6 text-center">
                Cloud & DevOps
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {techStack.cloud.map((tech, index) => (
                  <div
                    key={index}
                    className="group glass rounded-3xl p-6 hover-lift hover:glass-primary transition-all duration-500 cursor-pointer text-center"
                  >
                    <div className="text-4xl mb-3 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                      {tech.icon}
                    </div>
                    <div className={`text-xs font-semibold ${tech.color} group-hover:text-white transition-colors`}>
                      {tech.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI/ML */}
            <div>
              <h3 className="text-xl font-display font-bold text-gradient mb-6 text-center">
                AI & Machine Learning
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {techStack.ai.map((tech, index) => (
                  <div
                    key={index}
                    className="group glass rounded-3xl p-6 hover-lift hover:glass-primary transition-all duration-500 cursor-pointer text-center"
                  >
                    <div className="text-4xl mb-3 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                      {tech.icon}
                    </div>
                    <div className={`text-xs font-semibold ${tech.color} group-hover:text-white transition-colors`}>
                      {tech.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '50+', label: 'Technologies' },
            { value: '100%', label: 'Modern Stack' },
            { value: '24/7', label: 'Tech Support' },
            { value: '∞', label: 'Possibilities' },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center group cursor-pointer"
            >
              <div className="text-5xl font-display font-bold text-gradient mb-2 group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="text-white/50 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="text-white/60 mb-6 text-lg">
            Want to discuss which tech stack is perfect for your project?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center space-x-3 px-8 py-4 glass-primary rounded-2xl hover:scale-105 transition-all duration-300 group"
          >
            <span className="text-white font-semibold">Let's Talk Technology</span>
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center group-hover:rotate-90 transition-transform">
              <span className="text-dark font-bold">→</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}